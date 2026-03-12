"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, slideInLeft, slideInRight, stagger, viewport } from "@/lib/animations";

interface ContentSectionProps {
  eyebrow?: string;
  headline: string;
  body: string | React.ReactNode;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  theme?: "dark" | "light";
  children?: React.ReactNode;
}

export function ContentSection({
  eyebrow,
  headline,
  body,
  image,
  imageAlt = "",
  reverse = false,
  theme = "dark",
  children,
}: ContentSectionProps) {
  const isDark = theme === "dark";

  return (
    <Container>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          reverse ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Text column */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className={reverse ? "lg:[direction:ltr]" : ""}
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

          <motion.div
            variants={fadeUp}
            className={`text-body mt-5 ${
              isDark
                ? "text-[var(--color-text-secondary)]"
                : "text-[var(--color-text-body)]"
            }`}
          >
            {typeof body === "string" ? <p>{body}</p> : body}
          </motion.div>

          {children && (
            <motion.div variants={fadeUp} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>

        {/* Visual column */}
        <motion.div
          variants={reverse ? slideInLeft : slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className={reverse ? "lg:[direction:ltr]" : ""}
        >
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto"
              loading="lazy"
            />
          ) : (
            /* Placeholder visual block */
            <div className={`aspect-[4/3] w-full border flex items-center justify-center ${
              isDark
                ? "bg-[var(--color-bg-card-dark)] border-[var(--color-border-dark)]"
                : "bg-[var(--color-bg-surface)] border-[var(--color-border-card)]"
            }`}>
              <span className={`text-small ${isDark ? "text-[var(--color-text-muted)]" : "text-[var(--color-text-body-light)]"}`}>
                Visual
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </Container>
  );
}
