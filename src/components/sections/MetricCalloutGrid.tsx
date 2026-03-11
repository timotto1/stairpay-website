"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { stagger, fadeUp, viewport } from "@/lib/animations";

interface Metric {
  value: string;
  label: string;
}

interface MetricCalloutGridProps {
  metrics: Metric[];
  theme?: "dark" | "light";
}

/**
 * Parse a metric value string like "£12M", "98%", "3.5x", "120+"
 * into { prefix, number, suffix } for animation purposes.
 */
function parseMetricValue(value: string) {
  const match = value.match(/^([£$€]?)([0-9,.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value, decimals: 0 };
  const prefix = match[1];
  const numStr = match[2].replace(/,/g, "");
  const number = parseFloat(numStr);
  const suffix = match[3];
  const decimalPart = numStr.split(".")[1];
  const decimals = decimalPart ? decimalPart.length : 0;
  return { prefix, number, suffix, decimals };
}

function AnimatedMetric({ value }: { value: string }) {
  const { prefix, number, suffix, decimals } = parseMetricValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    if (!isInView || number === 0) return;

    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayNum(eased * number);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, number]);

  if (number === 0) {
    return <span ref={ref}>{value}</span>;
  }

  const formatted = displayNum.toFixed(decimals);
  // Add commas for thousands
  const parts = formatted.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const display = parts.join(".");

  return (
    <span ref={ref}>
      {prefix}
      {isInView ? display : `${prefix}0${suffix}`}
      {suffix}
    </span>
  );
}

export function MetricCalloutGrid({ metrics, theme = "dark" }: MetricCalloutGridProps) {
  const isDark = theme === "dark";

  return (
    <Container>
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className={`grid gap-8 ${
          metrics.length <= 3
            ? "grid-cols-1 sm:grid-cols-3"
            : "grid-cols-2 sm:grid-cols-4"
        }`}
      >
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            variants={fadeUp}
            className="text-center"
          >
            <div
              className={`text-display ${
                isDark
                  ? "text-[var(--color-accent-pale)]"
                  : "text-[var(--color-accent)]"
              }`}
            >
              <AnimatedMetric value={metric.value} />
            </div>
            <p
              className={`text-small mt-2 ${
                isDark
                  ? "text-[var(--color-text-muted)]"
                  : "text-[var(--color-text-body-light)]"
              }`}
            >
              {metric.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
