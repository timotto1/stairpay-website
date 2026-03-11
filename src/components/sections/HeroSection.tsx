"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, stagger, viewport } from "@/lib/animations";

interface CTAProps {
  label: string;
  href: string;
}

interface HeroSectionProps {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: CTAProps;
  secondaryCta?: CTAProps;
  children?: React.ReactNode;
  theme?: "dark" | "light";
  centered?: boolean;
}

export function HeroSection({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  children,
  theme = "dark",
  centered = false,
}: HeroSectionProps) {
  const isDark = theme === "dark";
  const hasVisual = !!children;
  const isCentered = centered || !hasVisual;

  return (
    <section
      className={`relative min-h-[90vh] flex items-center overflow-hidden ${
        isDark ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-surface)]"
      }`}
    >
      {/* Radial glow */}
      {isDark && (
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[var(--color-accent)] opacity-[0.06] blur-[160px]" />
        </div>
      )}

      <Container className="relative z-10 py-24 md:py-32">
        <div
          className={
            hasVisual && !isCentered
              ? "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              : ""
          }
        >
          {/* Text column */}
          <motion.div
            variants={stagger(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className={isCentered ? "max-w-[680px] mx-auto text-center" : ""}
          >
            <motion.div variants={fadeUp}>
              <Badge>{eyebrow}</Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className={`text-display mt-6 ${
                isDark
                  ? "text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-dark)]"
              }`}
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-subheading mt-6 max-w-[540px] ${
                isCentered ? "mx-auto" : ""
              } ${
                isDark
                  ? "text-[var(--color-text-secondary)]"
                  : "text-[var(--color-text-body)]"
              }`}
            >
              {description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className={`mt-10 flex gap-4 flex-wrap ${
                isCentered ? "justify-center" : ""
              }`}
            >
              <Button variant="primary" size="lg" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button variant="secondary" size="lg" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Visual column */}
          {hasVisual && !isCentered && (
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              viewport={viewport}
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
