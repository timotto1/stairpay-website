"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";

interface IntelligenceLayerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export function IntelligenceLayerCard({
  icon,
  title,
  description,
  href,
}: IntelligenceLayerCardProps) {
  const content = (
    <>
      <div className="text-[var(--color-accent-pale)] mb-4">{icon}</div>
      <h3 className="text-h3 text-[var(--color-text-primary)]">{title}</h3>
      <p className="text-body text-[var(--color-text-secondary)] mt-3">
        {description}
      </p>
    </>
  );

  const classes =
    "block bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] border-l-[3px] border-l-[var(--color-accent)] p-8 transition-all duration-[250ms] hover:bg-[var(--color-bg-card-dark-hover)] hover:-translate-y-1";

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
