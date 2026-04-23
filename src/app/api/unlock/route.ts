import { NextResponse } from "next/server";
import { recordUnlock } from "@/lib/content/storage";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, slug } =
    (payload as { email?: unknown; slug?: unknown }) ?? {};

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (typeof slug !== "string" || slug.length === 0) {
    return NextResponse.json({ error: "Missing slug." }, { status: 400 });
  }

  try {
    await recordUnlock(email.trim().toLowerCase(), slug);
  } catch (err) {
    // Local JSON store may fail in read-only runtimes (e.g. Vercel). See
    // src/lib/content/storage.ts TODO.
    console.error("[api/unlock] recordUnlock failed", err);
    return NextResponse.json(
      { error: "Could not record your request. Please try again later." },
      { status: 500 },
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("insights_unlocked", "1", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: false,
    sameSite: "lax",
  });
  return res;
}
