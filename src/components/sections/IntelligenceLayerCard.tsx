"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";

interface IntelligenceLayerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  theme?: "dark" | "light";
}

export function IntelligenceLayerCard({
  icon,
  title,
  description,
  href,
  theme = "light",
}: IntelligenceLayerCardProps) {
  const isDark = theme === "dark";

  const content = (
    <>
      <div className={`mb-4 ${isDark ? "text-[var(--color-accent-pale)]" : "text-[var(--color-accent)]"}`}>{icon}</div>
      <h3 className={`text-h3 ${isDark ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-dark)]"}`}>{title}</h3>
      <p className={`text-body mt-3 ${isDark ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-body-light)]"}`}>
        {description}
      </p>
    </>
  );

  const classes = isDark
    ? "block bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] border-l-[3px] border-l-[var(--color-accent)] p-8 transition-all duration-[250ms] hover:bg-[var(--color-bg-card-dark-hover)] hover:-translate-y-1"
    : "block bg-[var(--color-bg-card-light)] border border-[var(--color-border-card)] border-l-[3px] border-l-[var(--color-accent)] p-8 shadow-sm transition-all duration-[250ms] hover:bg-[var(--color-bg-card-light-hover)] hover:shadow-md hover:-translate-y-1";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {href ? (
        <a href={href} className={classes}>
          {content}
        </a>
      ) : (
        <div className={classes}>{content}</div>
      )}
    </motion.div>
  );
}
