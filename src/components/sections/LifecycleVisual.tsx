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

export function LifecycleVisual() {
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
          <span className="text-eyebrow text-[var(--color-accent-pale)]">
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
            className="hidden md:block absolute top-1/2 left-[8%] right-[8%] h-px bg-[var(--color-border-dark)] origin-left -translate-y-1/2 z-0"
          />

          {/* Connecting line — mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            viewport={viewport}
            className="md:hidden absolute left-1/2 top-[4%] bottom-[4%] w-px bg-[var(--color-border-dark)] origin-top -translate-x-1/2 z-0"
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
              <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border border-[var(--color-border-dark)] bg-[var(--color-bg-card-dark)] flex items-center justify-center">
                <span className="text-small text-[var(--color-text-secondary)] text-center leading-tight px-2">
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
          className="mt-8 border border-[var(--color-border-dark)] bg-[var(--color-bg-card-dark)] py-4 text-center"
        >
          <span className="text-eyebrow text-[var(--color-text-muted)]">
            Shared Ownership Data Infrastructure
          </span>
        </motion.div>
      </div>
    </Container>
  );
}
