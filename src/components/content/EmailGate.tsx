"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface EmailGateProps {
  slug: string;
}

export function EmailGate({ slug }: EmailGateProps) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, slug }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      // Cookie is set by the server — reload so the gate disappears.
      window.location.reload();
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="relative -mt-24 pt-24 bg-gradient-to-t from-white via-white to-transparent">
      <div className="max-w-[520px] mx-auto border border-[var(--color-border-card)] bg-white p-10 shadow-sm">
        <p className="text-eyebrow text-[var(--color-accent)] mb-4">
          Members Only
        </p>
        <h3 className="text-h3 text-[var(--color-text-dark)] mb-3">
          Continue reading
        </h3>
        <p className="text-body text-[var(--color-text-body)] mb-6">
          Enter your email to unlock the full briefing. You&apos;ll also receive
          future Stairpay insights as they&apos;re published.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email-gate-input"
              className="text-small font-[500] text-[var(--color-text-body)]"
            >
              Work email
            </label>
            <input
              id="email-gate-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@organisation.org.uk"
              className="w-full bg-white border border-[var(--color-border-card)] text-[var(--color-text-dark)] text-body px-4 py-3 rounded-none placeholder:text-[var(--color-text-body-light)] transition-all duration-[150ms] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              disabled={submitting}
            />
          </div>

          {error && (
            <p className="text-small text-red-600" role="alert">
              {error}
            </p>
          )}

          <Button
            type="submit"
            variant="outline"
            size="lg"
            disabled={submitting}
            arrow
          >
            {submitting ? "Unlocking…" : "Unlock Full Briefing"}
          </Button>
        </form>
      </div>
    </div>
  );
}
