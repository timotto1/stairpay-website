"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactPanel } from "@/components/ui/ContactPanel";
import { fadeUp, stagger, viewport } from "@/lib/animations";

interface CTAProps {
  label: string;
  href: string;
}

interface CTABlockProps {
  eyebrow?: string;
  headline: string;
  description: string;
  primaryCta: CTAProps;
  secondaryCta?: CTAProps;
  theme?: "dark" | "light";
  /** When true, clicking the primary CTA opens the ContactPanel instead of navigating. */
  primaryOpensContactPanel?: boolean;
}

export function CTABlock({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  theme = "dark",
  primaryOpensContactPanel = false,
}: CTABlockProps) {
  const isDark = theme === "dark";
  const [contactOpen, setContactOpen] = useState(false);
  const primaryVariant =
    secondaryCta ? "solid-white" : isDark ? "outline-dark" : "outline";

  return (
    <section
      data-theme={isDark ? "dark" : "light"}
      className={
        isDark ? "bg-[var(--color-bg-primary)] blueprint-grid" : "bg-[var(--color-bg-surface)]"
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

          <motion.div
            variants={fadeUp}
            className="mt-10 flex gap-4 flex-wrap justify-center"
          >
            {primaryOpensContactPanel ? (
              <Button
                variant={primaryVariant}
                size="lg"
                arrow
                onClick={() => setContactOpen(true)}
              >
                {primaryCta.label}
              </Button>
            ) : (
              <Button
                variant={primaryVariant}
                size="lg"
                href={primaryCta.href}
                arrow
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant={isDark ? "outline-dark" : "outline"}
                size="lg"
                href={secondaryCta.href}
                arrow
              >
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </Container>
      {primaryOpensContactPanel && (
        <ContactPanel
          open={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      )}
    </section>
  );
}
