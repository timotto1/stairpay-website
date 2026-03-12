"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const dataSources = [
  "Leases",
  "EPCs",
  "Fire Safety",
  "Tenancy Agreements",
  "Development Docs",
  "Title Deeds",
  "Valuations",
  "S106 Agreements",
];

const workflows = [
  "Lease Extensions",
  "Staircasing & Resales",
  "Right to Buy / Acquire",
  "Service Charge Reconciliation",
  "Rent Setting & Collection",
  "Arrears Tracking",
  "Portfolio Reporting",
  "Compliance Monitoring",
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function DataFlowVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="max-w-[800px] mx-auto">
      {/* ── Data Sources ── */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {dataSources.map((source, i) => (
          <motion.div
            key={source}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: i * 0.06 }}
            className="px-4 py-2 border border-[var(--color-border-card)] bg-[var(--color-bg-card-light)] text-[13px] font-[400] text-[var(--color-text-body)] shadow-sm"
          >
            {source}
          </motion.div>
        ))}
      </div>

      {/* ── Converging lines ── */}
      <div className="flex justify-center mb-0">
        <motion.svg
          width="200"
          height="48"
          viewBox="0 0 200 48"
          fill="none"
          className="overflow-visible"
        >
          {/* Left line */}
          <motion.path
            d="M40 0 L100 44"
            stroke="var(--color-border-card)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
          />
          {/* Center line */}
          <motion.path
            d="M100 0 L100 44"
            stroke="var(--color-border-card)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
          />
          {/* Right line */}
          <motion.path
            d="M160 0 L100 44"
            stroke="var(--color-border-card)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
          />
          {/* Animated dots flowing down */}
          {[40, 100, 160].map((x, idx) => (
            <motion.circle
              key={x}
              r="3"
              fill="var(--color-accent)"
              initial={{ offsetDistance: "0%" }}
              animate={isInView ? { offsetDistance: "100%" } : {}}
              transition={{
                duration: 1.2,
                ease: "linear",
                delay: 0.6 + idx * 0.15,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
              style={{
                offsetPath: `path("M${x} 0 L100 44")`,
              }}
            />
          ))}
        </motion.svg>
      </div>

      {/* ── Central Database ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease, delay: 0.7 }}
        className="relative mx-auto w-full max-w-[340px] mb-0"
      >
        <div className="border-2 border-[var(--color-accent)] bg-[var(--color-bg-surface)] py-6 px-8 text-center shadow-[0_0_40px_rgba(113,20,226,0.08)]">
          <p className="text-eyebrow text-[var(--color-accent)] mb-1">
            STAIRPAY
          </p>
          <p className="text-h3 text-[var(--color-text-dark)]">
            Unified Database
          </p>
          <p className="text-small text-[var(--color-text-body-light)] mt-1">
            Structured, queryable, auditable
          </p>
        </div>
      </motion.div>

      {/* ── Diverging lines ── */}
      <div className="flex justify-center mt-0">
        <motion.svg
          width="200"
          height="48"
          viewBox="0 0 200 48"
          fill="none"
          className="overflow-visible"
        >
          {/* Left line */}
          <motion.path
            d="M100 4 L40 48"
            stroke="var(--color-border-card)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 1.1 }}
          />
          {/* Center line */}
          <motion.path
            d="M100 4 L100 48"
            stroke="var(--color-border-card)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 1.1 }}
          />
          {/* Right line */}
          <motion.path
            d="M100 4 L160 48"
            stroke="var(--color-border-card)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 1.1 }}
          />
          {/* Animated dots flowing down */}
          {[40, 100, 160].map((x, idx) => (
            <motion.circle
              key={x}
              r="3"
              fill="var(--color-accent)"
              initial={{ offsetDistance: "0%" }}
              animate={isInView ? { offsetDistance: "100%" } : {}}
              transition={{
                duration: 1.2,
                ease: "linear",
                delay: 1.3 + idx * 0.15,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
              style={{
                offsetPath: `path("M100 4 L${x} 48")`,
              }}
            />
          ))}
        </motion.svg>
      </div>

      {/* ── Workflows ── */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {workflows.map((wf, i) => (
          <motion.div
            key={wf}
            initial={{ opacity: 0, y: -16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 1.3 + i * 0.06 }}
            className="px-4 py-2 border border-[var(--color-accent)] bg-[var(--color-accent-light)] text-[13px] font-[400] text-[var(--color-accent)]"
          >
            {wf}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
