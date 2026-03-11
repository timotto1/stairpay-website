"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
}

export function PersonaTileGrid({ personas }: PersonaTileGridProps) {
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
            className="group block bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] p-8 transition-all duration-[250ms] hover:bg-[var(--color-bg-card-dark-hover)] hover:-translate-y-1"
          >
            <div className="text-[var(--color-accent-pale)] mb-5">
              {persona.icon}
            </div>

            <h3 className="text-h3 text-[var(--color-text-primary)]">
              {persona.title}
            </h3>

            <p className="text-small text-[var(--color-text-muted)] mt-3">
              {persona.pain}
            </p>

            <p className="text-body text-[var(--color-text-secondary)] mt-3">
              {persona.outcome}
            </p>

            <span className="inline-flex items-center gap-2 mt-6 text-[13px] font-[500] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-[150ms]">
              Learn more
              <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-[150ms] group-hover:translate-x-1" />
            </span>
          </motion.a>
        ))}
      </motion.div>
    </Container>
  );
}
