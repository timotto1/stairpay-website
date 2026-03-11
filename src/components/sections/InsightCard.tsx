"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, viewport } from "@/lib/animations";

interface InsightCardProps {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  href: string;
  featured?: boolean;
}

export function InsightCard({
  title,
  category,
  date,
  excerpt,
  href,
  featured = false,
}: InsightCardProps) {
  return (
    <motion.a
      href={href}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`group block bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] transition-all duration-[250ms] hover:bg-[var(--color-bg-card-dark-hover)] hover:-translate-y-1 ${
        featured ? "p-10" : "p-8"
      }`}
    >
      <span className="text-eyebrow text-[var(--color-accent-pale)]">
        {category}
      </span>

      <h3
        className={`${
          featured ? "text-h2" : "text-h3"
        } text-[var(--color-text-primary)] mt-4`}
      >
        {title}
      </h3>

      <p className="text-body text-[var(--color-text-secondary)] mt-3">
        {excerpt}
      </p>

      <div className="flex items-center justify-between mt-6">
        <span className="text-small text-[var(--color-text-muted)]">
          {date}
        </span>
        <span className="inline-flex items-center gap-2 text-[13px] font-[500] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-[150ms]">
          Read
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-[150ms] group-hover:translate-x-1"
          />
        </span>
      </div>
    </motion.a>
  );
}
