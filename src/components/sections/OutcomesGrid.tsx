"use client";

import { motion } from "framer-motion";
import { TrendingDown, ShieldCheck, Expand } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";

interface OutcomesGridProps {
  outcomes: {
    costReduction: string[];
    riskMitigation: string[];
    scalability: string[];
  };
}

const columns = [
  {
    key: "costReduction" as const,
    heading: "Cost Reduction",
    icon: <TrendingDown size={24} strokeWidth={1.5} />,
  },
  {
    key: "riskMitigation" as const,
    heading: "Risk Mitigation",
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
  },
  {
    key: "scalability" as const,
    heading: "Scalability",
    icon: <Expand size={24} strokeWidth={1.5} />,
  },
];

export function OutcomesGrid({ outcomes }: OutcomesGridProps) {
  return (
    <Container>
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {columns.map((col) => (
          <motion.div key={col.key} variants={fadeUp}>
            <div className="text-[var(--color-accent)] mb-4">{col.icon}</div>
            <h3 className="text-h3 text-[var(--color-text-dark)] mb-6">
              {col.heading}
            </h3>
            <ul className="space-y-4">
              {outcomes[col.key].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1 shrink-0 text-[var(--color-accent)]"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15" />
                    <path
                      d="M5 8.5L7 10.5L11 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-body text-[var(--color-text-body)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
