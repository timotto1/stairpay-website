"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQListProps {
  eyebrow?: string;
  headline: string;
  items: FAQItem[];
  theme?: "dark" | "light";
}

export function FAQList({
  eyebrow,
  headline,
  items,
  theme = "light",
}: FAQListProps) {
  const isDark = theme === "dark";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {eyebrow && (
            <motion.p
              variants={fadeUp}
              className={`text-eyebrow ${
                isDark
                  ? "text-[var(--color-accent-pale)]"
                  : "text-[var(--color-accent)]"
              }`}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h2
            variants={fadeUp}
            className={`text-h2 ${eyebrow ? "mt-4" : ""} ${
              isDark
                ? "text-[var(--color-text-primary)]"
                : "text-[var(--color-text-dark)]"
            }`}
          >
            {headline}
          </motion.h2>
        </motion.div>

        <div
          className={`border-t ${
            isDark
              ? "border-[var(--color-border-dark)]"
              : "border-[var(--color-border-card)]"
          }`}
        >
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.question}
                className={`border-b ${
                  isDark
                    ? "border-[var(--color-border-dark)]"
                    : "border-[var(--color-border-card)]"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className={`w-full flex items-start justify-between gap-6 text-left py-6 cursor-pointer transition-colors duration-150 ${
                      isDark
                        ? "text-[var(--color-text-primary)] hover:text-[var(--color-accent-pale)]"
                        : "text-[var(--color-text-dark)] hover:text-[var(--color-accent)]"
                    }`}
                  >
                    <span className="text-[18px] font-[500] leading-snug tracking-[-0.2px]">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 mt-1 transition-transform duration-200 ${
                        isDark
                          ? "text-[var(--color-text-muted)]"
                          : "text-[var(--color-text-body-light)]"
                      }`}
                      aria-hidden="true"
                    >
                      {open ? (
                        <Minus size={18} strokeWidth={1.5} />
                      ) : (
                        <Plus size={18} strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="panel"
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`text-body pb-6 pr-10 ${
                          isDark
                            ? "text-[var(--color-text-secondary)]"
                            : "text-[var(--color-text-body)]"
                        }`}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
