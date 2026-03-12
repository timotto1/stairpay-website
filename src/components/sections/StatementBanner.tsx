"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { fadeUp, viewport } from "@/lib/animations";

interface StatementBannerProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
}

export function StatementBanner({ children, theme = "light" }: StatementBannerProps) {
  const isDark = theme === "dark";
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Most compression happens in the first 3/4, then just a gentle drift to settle
  const lineHeightRaw = useTransform(
    scrollYProgress,
    [0,   0.15, 0.5,  0.75, 1],
    [2.2, 1.6,  1.25, 1.15, 1.1]
  );
  const opacityRaw = useTransform(scrollYProgress, [0.05, 0.65], [0.35, 1]);

  // Spring adds a trailing, weighted feel — like gravity pulling the lines together
  const springConfig = { stiffness: 60, damping: 20, mass: 1.2 };
  const lineHeight = useSpring(lineHeightRaw, springConfig);
  const opacity = useSpring(opacityRaw, { stiffness: 80, damping: 24, mass: 1 });

  return (
    <section
      ref={ref}
      data-theme={isDark ? "dark" : "light"}
      className={`py-24 md:py-32 ${
        isDark ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-white)]"
      }`}
    >
      <Container>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{ lineHeight, opacity }}
          className={`text-[32px] md:text-[48px] lg:text-[60px] font-[400] tracking-[-0.5px] text-center max-w-[960px] mx-auto ${
            isDark ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-dark)]"
          }`}
        >
          {children}
        </motion.p>
      </Container>
    </section>
  );
}
