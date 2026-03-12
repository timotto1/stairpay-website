"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { viewport } from "@/lib/animations";

const stages = [
  "Sales",
  "Move-in",
  "Homeownership",
  "Staircasing",
  "Rent & SC",
  "Resale",
];

const ease = [0.16, 1, 0.3, 1] as const;

interface LifecycleVisualProps {
  theme?: "dark" | "light";
}

export function LifecycleVisual({ theme = "light" }: LifecycleVisualProps) {
  const isDark = theme === "dark";
  return (
    <Container>
      <div className="relative">
        {/* Intelligence Layers label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          viewport={viewport}
          className="text-center mb-6"
        >
          <span className={`text-eyebrow ${isDark ? "text-[var(--color-accent-pale)]" : "text-[var(--color-accent)]"}`}>
            Intelligence Layers
          </span>
        </motion.div>

        {/* Stage nodes — horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
          {/* Connecting line — desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            viewport={viewport}
            className={`hidden md:block absolute top-1/2 left-[8%] right-[8%] h-px origin-left -translate-y-1/2 z-0 ${isDark ? "bg-[var(--color-border-dark)]" : "bg-[var(--color-border-card)]"}`}
          />

          {/* Connecting line — mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            viewport={viewport}
            className={`md:hidden absolute left-1/2 top-[4%] bottom-[4%] w-px origin-top -translate-x-1/2 z-0 ${isDark ? "bg-[var(--color-border-dark)]" : "bg-[var(--color-border-card)]"}`}
          />

          {stages.map((stage, i) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease,
                delay: 0.15 + i * 0.12,
              }}
              viewport={viewport}
              className="relative z-10 flex flex-col items-center"
            >
              <div className={`w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border flex items-center justify-center ${
                isDark
                  ? "border-[var(--color-border-dark)] bg-[var(--color-bg-card-dark)]"
                  : "border-[var(--color-border-card)] bg-[var(--color-bg-card-light)] shadow-sm"
              }`}>
                <span className={`text-small text-center leading-tight px-2 ${isDark ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-body)]"}`}>
                  {stage}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data infrastructure band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.8 }}
          viewport={viewport}
          className={`mt-8 border py-4 text-center ${
            isDark
              ? "border-[var(--color-border-dark)] bg-[var(--color-bg-card-dark)]"
              : "border-[var(--color-border-card)] bg-[var(--color-bg-card-light)] shadow-sm"
          }`}
        >
          <span className={`text-eyebrow ${isDark ? "text-[var(--color-text-muted)]" : "text-[var(--color-text-body-light)]"}`}>
            Shared Ownership Data Infrastructure
          </span>
        </motion.div>
      </div>
    </Container>
  );
}
