"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";

interface Logo {
  name: string;
  width?: number;
}

interface LogoBarProps {
  logos?: Logo[];
}

const defaultLogos: Logo[] = [
  { name: "Metropolitan Thames Valley" },
  { name: "L&Q" },
  { name: "Peabody" },
  { name: "Sovereign" },
  { name: "Notting Hill Genesis" },
  { name: "Clarion" },
  { name: "Hyde" },
];

export function LogoBar({ logos = defaultLogos }: LogoBarProps) {
  return (
    <Container>
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.name}
            variants={fadeUp}
            className="flex items-center justify-center px-4 py-3"
            style={{ minWidth: logo.width ?? 140 }}
          >
            <span className="text-[14px] font-[500] tracking-wide text-[var(--color-text-body-light)] opacity-70 whitespace-nowrap select-none">
              {logo.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
