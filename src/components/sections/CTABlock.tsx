"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, stagger, viewport } from "@/lib/animations";

interface CTABlockProps {
  eyebrow?: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  theme?: "dark" | "light";
}

export function CTABlock({
  eyebrow,
  headline,
  description,
  ctaLabel,
  ctaHref,
  theme = "dark",
}: CTABlockProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={
        isDark ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-surface)]"
      }
    >
      <Container>
        {/* Top divider */}
        <div
          className={`h-px ${
            isDark
              ? "bg-[var(--color-border-dark)]"
              : "bg-[var(--color-border-light)]"
          }`}
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="py-20 md:py-[100px] text-center max-w-[680px] mx-auto"
        >
          {eyebrow && (
            <motion.div variants={fadeUp}>
              <Badge>{eyebrow}</Badge>
            </motion.div>
          )}

          <motion.h2
            variants={fadeUp}
            className={`text-h2 ${eyebrow ? "mt-5" : ""} ${
              isDark
                ? "text-[var(--color-text-primary)]"
                : "text-[var(--color-text-dark)]"
            }`}
          >
            {headline}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className={`text-body mt-5 ${
              isDark
                ? "text-[var(--color-text-secondary)]"
                : "text-[var(--color-text-body)]"
            }`}
          >
            {description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <Button variant="primary" size="lg" href={ctaHref}>
              {ctaLabel}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
