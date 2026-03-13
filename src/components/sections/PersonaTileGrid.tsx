"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";

interface Persona {
  icon: React.ReactNode;
  title: string;
  pain: string;
  outcome: string;
  href: string;
}

interface PersonaTileGridProps {
  personas: Persona[];
  theme?: "dark" | "light";
}

export function PersonaTileGrid({ personas, theme = "light" }: PersonaTileGridProps) {
  const isDark = theme === "dark";

  return (
    <Container>
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {personas.map((persona) => (
          <motion.a
            key={persona.title}
            href={persona.href}
            variants={fadeUp}
            className={`group block p-8 border transition-all duration-[250ms] hover:-translate-y-1 ${
              isDark
                ? "bg-[var(--color-bg-card-dark)] border-[var(--color-border-dark)] hover:bg-[var(--color-bg-card-dark-hover)]"
                : "bg-[var(--color-bg-card-light)] border-[var(--color-border-card)] shadow-sm hover:bg-[var(--color-bg-card-light-hover)] hover:shadow-md"
            }`}
          >
            <div className={isDark ? "text-[var(--color-accent-pale)] mb-5" : "text-[var(--color-accent)] mb-5"}>
              {persona.icon}
            </div>

            <h3 className={`text-h3 ${isDark ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-dark)]"}`}>
              {persona.title}
            </h3>

            <p className={`text-small mt-3 ${isDark ? "text-[var(--color-text-muted)]" : "text-[var(--color-text-body-light)]"}`}>
              {persona.pain}
            </p>

            <p className={`text-body mt-3 ${isDark ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-body)]"}`}>
              {persona.outcome}
            </p>

            <span className={`inline-flex items-center gap-2 mt-6 text-[13px] font-[500] tracking-wide uppercase transition-colors duration-[150ms] ${
              isDark
                ? "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"
                : "text-[var(--color-text-body-light)] group-hover:text-[var(--color-accent)]"
            }`}>
              Learn more
              <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-[150ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>
        ))}
      </motion.div>
    </Container>
  );
}
