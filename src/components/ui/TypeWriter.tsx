"use client";

import { useRef, useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
  speed?: number;
  startOnMount?: boolean;
  delay?: number;
}

export function TypeWriter({ text, className, speed = 50, startOnMount = false, delay = 0 }: TypeWriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (startOnMount) {
      if (delay > 0) {
        const t = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(t);
      }
      setStarted(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [startOnMount]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [started, displayed, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
