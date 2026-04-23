import "server-only";
import fs from "node:fs";
import path from "node:path";

/**
 * MVP email capture store. Appends entries to a JSON file at the project root.
 *
 * TODO: Vercel's serverless runtime has a read-only filesystem — this write
 * will fail in production. Before deploying, swap this adapter for one of:
 *   - Webhook POST (Zapier / Make / n8n)
 *   - Vercel KV / Upstash Redis
 *   - Resend audiences API
 * Only this file needs to change.
 */

const STORE_PATH = path.join(process.cwd(), "unlocked-emails.json");

interface UnlockEntry {
  email: string;
  slug: string;
  ts: string;
}

function readStore(): UnlockEntry[] {
  try {
    if (!fs.existsSync(STORE_PATH)) return [];
    const raw = fs.readFileSync(STORE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStore(entries: UnlockEntry[]): void {
  fs.writeFileSync(STORE_PATH, JSON.stringify(entries, null, 2), "utf-8");
}

export async function recordUnlock(email: string, slug: string): Promise<void> {
  const entries = readStore();
  entries.push({ email, slug, ts: new Date().toISOString() });
  writeStore(entries);
}
