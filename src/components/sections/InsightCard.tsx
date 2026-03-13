"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, viewport } from "@/lib/animations";

interface InsightCardProps {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  href: string;
  featured?: boolean;
  theme?: "dark" | "light";
}

export function InsightCard({
  title,
  category,
  date,
  excerpt,
  href,
  featured = false,
  theme = "light",
}: InsightCardProps) {
  const isDark = theme === "dark";

  return (
    <motion.a
      href={href}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`group block border transition-all duration-[250ms] hover:-translate-y-1 ${
        featured ? "p-10" : "p-8"
      } ${
        isDark
          ? "bg-[var(--color-bg-card-dark)] border-[var(--color-border-dark)] hover:bg-[var(--color-bg-card-dark-hover)]"
          : "bg-[var(--color-bg-card-light)] border-[var(--color-border-card)] shadow-sm hover:bg-[var(--color-bg-card-light-hover)] hover:shadow-md"
      }`}
    >
      <span className={`text-eyebrow ${isDark ? "text-[var(--color-accent-pale)]" : "text-[var(--color-accent)]"}`}>
        {category}
      </span>

      <h3
        className={`${
          featured ? "text-h2" : "text-h3"
        } mt-4 ${isDark ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-dark)]"}`}
      >
        {title}
      </h3>

      <p className={`text-body mt-3 ${isDark ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-body)]"}`}>
        {excerpt}
      </p>

      <div className="flex items-center justify-between mt-6">
        <span className={`text-small ${isDark ? "text-[var(--color-text-muted)]" : "text-[var(--color-text-body-light)]"}`}>
          {date}
        </span>
        <span className={`inline-flex items-center gap-2 text-[13px] font-[500] tracking-wide uppercase transition-colors duration-[150ms] ${
          isDark
            ? "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"
            : "text-[var(--color-text-body-light)] group-hover:text-[var(--color-accent)]"
        }`}>
          Read
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-[150ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </motion.a>
  );
}
