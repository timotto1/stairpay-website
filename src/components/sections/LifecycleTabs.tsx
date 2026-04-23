"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";

export interface LifecycleStage {
  title: string;
  body: string;
}

export interface LifecycleTab {
  id: string;
  label: string;
  description: string;
  stages: LifecycleStage[];
}

interface LifecycleTabsProps {
  eyebrow?: string;
  headline: string;
  tabs: LifecycleTab[];
  theme?: "dark" | "light";
}

export function LifecycleTabs({
  eyebrow,
  headline,
  tabs,
  theme = "light",
}: LifecycleTabsProps) {
  const isDark = theme === "dark";
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <Container>
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="max-w-[760px] mx-auto text-center"
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

      {/* Tab selector */}
      <div
        role="tablist"
        aria-label="Lifecycle selector"
        className="mt-10 flex items-center justify-center gap-2 flex-wrap"
      >
        {tabs.map((tab) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`lifecycle-panel-${tab.id}`}
              id={`lifecycle-tab-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={`text-eyebrow px-5 py-2.5 rounded-[4px] border cursor-pointer transition-colors duration-150 ${
                selected
                  ? isDark
                    ? "bg-[var(--color-accent-pale)] border-[var(--color-accent-pale)] text-[var(--color-accent-darkest)]"
                    : "bg-[var(--color-accent-darkest)] border-[var(--color-accent-darkest)] text-white"
                  : isDark
                    ? "bg-transparent border-[var(--color-border-dark)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-subtle)]"
                    : "bg-white border-[var(--color-border-light)] text-[var(--color-text-body)] hover:border-[var(--color-text-dark)] hover:text-[var(--color-text-dark)]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active panel description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`desc-${active.id}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`text-subheading mt-6 max-w-[680px] mx-auto text-center ${
            isDark
              ? "text-[var(--color-text-secondary)]"
              : "text-[var(--color-text-body)]"
          }`}
        >
          {active.description}
        </motion.p>
      </AnimatePresence>

      {/* Stages */}
      <div
        id={`lifecycle-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`lifecycle-tab-${active.id}`}
        className="mt-14"
      >
        <AnimatePresence mode="wait">
          <motion.ol
            key={`stages-${active.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { staggerChildren: 0.06 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {active.stages.map((stage, i) => (
              <motion.li
                key={stage.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-6 rounded-[8px] border ${
                  isDark
                    ? "border-[var(--color-border-dark)] bg-[var(--color-bg-card-dark)]"
                    : "border-[var(--color-border-card)] bg-[var(--color-bg-card-light)]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full text-[13px] font-[500] ${
                      isDark
                        ? "bg-[var(--color-accent)] text-white"
                        : "bg-[var(--color-accent-light)] text-[var(--color-accent-darkest)]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className={`text-[17px] font-[500] leading-snug ${
                        isDark
                          ? "text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-dark)]"
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className={`text-small mt-2 ${
                        isDark
                          ? "text-[var(--color-text-secondary)]"
                          : "text-[var(--color-text-body)]"
                      }`}
                    >
                      {stage.body}
                    </p>
                  </div>
                </div>

                {/* Arrow between stages on desktop */}
                {i < active.stages.length - 1 && (
                  <div
                    aria-hidden="true"
                    className={`hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 ${
                      i % 3 === 2 ? "lg:hidden" : ""
                    }`}
                  >
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className={
                        isDark
                          ? "text-[var(--color-text-muted)]"
                          : "text-[var(--color-text-body-light)]"
                      }
                    />
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ol>
        </AnimatePresence>
      </div>
    </Container>
  );
}
