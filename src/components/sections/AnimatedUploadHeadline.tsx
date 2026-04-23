"use client";

import { useEffect, useState } from "react";

const FLICKER_POOL =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*+-=/<>?";

function randomFlickerChar() {
  return FLICKER_POOL[Math.floor(Math.random() * FLICKER_POOL.length)];
}

type Phase = "initial" | "rising" | "typing" | "flickering";

interface Props {
  sentence1: string;
  sentence2Parts: [string, string, string];
  className?: string;
}

export function AnimatedUploadHeadline({ sentence1, sentence2Parts, className }: Props) {
  const sentence2 = sentence2Parts.join("");
  const [phase, setPhase] = useState<Phase>("initial");
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const riseStart = setTimeout(() => setPhase("rising"), 300);
    const toTyping = setTimeout(() => setPhase("typing"), 300 + 700);
    return () => {
      clearTimeout(riseStart);
      clearTimeout(toTyping);
    };
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;
    if (typed >= sentence2.length) {
      const toFlicker = setTimeout(() => setPhase("flickering"), 600);
      return () => clearTimeout(toFlicker);
    }
    const t = setTimeout(() => setTyped((n) => n + 1), 12);
    return () => clearTimeout(t);
  }, [phase, typed, sentence2.length]);

  const risen = phase !== "initial";

  return (
    <h2 className={className}>
      <span className="block overflow-hidden leading-[1.15]">
        <span
          className="inline-block will-change-transform"
          style={{
            transform: risen ? "translateY(0%)" : "translateY(110%)",
            opacity: risen ? 1 : 0,
            transition:
              "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease-out",
          }}
        >
          {sentence1}
        </span>
      </span>
      <span className="block">
        {phase === "flickering" ? (
          sentence2Parts.map((part, idx) => (
            <FlickerText key={idx} text={part} />
          ))
        ) : (
          sentence2.slice(0, typed).split("").map((c, i) => (
            <span key={i}>{c === " " ? "\u00A0" : c}</span>
          ))
        )}
      </span>
    </h2>
  );
}

function FlickerText({ text }: { text: string }) {
  const chars = text.split("");
  const [overrides, setOverrides] = useState<Record<number, string>>({});

  useEffect(() => {
    const eligible = chars
      .map((c, i) => ({ c, i }))
      .filter(({ c }) => c !== " ")
      .map(({ i }) => i);
    if (eligible.length === 0) return;

    let cancelled = false;
    let gapTimer: ReturnType<typeof setTimeout> | undefined;
    let frameTimer: ReturnType<typeof setTimeout> | undefined;

    const runOne = () => {
      if (cancelled) return;
      const index = eligible[Math.floor(Math.random() * eligible.length)];
      const totalFrames = 8 + Math.floor(Math.random() * 9);
      let frame = 0;
      const step = () => {
        if (cancelled) return;
        if (frame >= totalFrames) {
          setOverrides((prev) => {
            const next = { ...prev };
            delete next[index];
            return next;
          });
          scheduleNext();
          return;
        }
        setOverrides((prev) => ({ ...prev, [index]: randomFlickerChar() }));
        frame += 1;
        frameTimer = setTimeout(step, 45);
      };
      step();
    };

    const scheduleNext = () => {
      const gap = 500 + Math.random() * 4500;
      gapTimer = setTimeout(runOne, gap);
    };

    scheduleNext();

    return () => {
      cancelled = true;
      if (gapTimer) clearTimeout(gapTimer);
      if (frameTimer) clearTimeout(frameTimer);
    };
  }, [text]);

  return (
    <>
      {chars.map((char, i) => {
        if (char === " ") return <span key={i}>{"\u00A0"}</span>;
        const flicker = overrides[i];
        return (
          <span key={i} className="relative inline-block">
            <span style={{ visibility: flicker ? "hidden" : "visible" }}>
              {char}
            </span>
            {flicker && (
              <span
                aria-hidden="true"
                className="absolute top-0 left-1/2 pointer-events-none"
                style={{ transform: "translateX(-50%)" }}
              >
                {flicker}
              </span>
            )}
          </span>
        );
      })}
    </>
  );
}
