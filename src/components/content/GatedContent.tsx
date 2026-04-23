"use client";

import { useEffect, useState } from "react";
import { EmailGate } from "./EmailGate";

interface GatedContentProps {
  slug: string;
  children: React.ReactNode;
}

function hasUnlockCookie(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split(";")
    .map((c) => c.trim())
    .some((c) => c === "insights_unlocked=1");
}

export function GatedContent({ slug, children }: GatedContentProps) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    setUnlocked(hasUnlockCookie());
  }, []);

  // Avoid hydration flash — render neutral state on first paint.
  if (unlocked === null) {
    return <div className="min-h-[320px]" aria-hidden="true" />;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Teaser — masked preview of the body */}
      <div className="relative max-h-[320px] overflow-hidden">
        {children}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white"
          aria-hidden="true"
        />
      </div>

      <EmailGate slug={slug} />
    </div>
  );
}
