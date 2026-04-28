"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const EASE = [0.16, 1, 0.3, 1] as const;

const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
};

const phraseVariant = (delay: number): Variants => ({
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: EASE, delay },
  },
});

const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: EASE },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      animate="visible"
      className="max-w-[860px] mx-auto text-center"
    >
      <motion.div variants={heroFadeUp}>
        <Badge>RESIDENT PORTAL</Badge>
      </motion.div>

      <h1 className="text-[clamp(40px,5.4vw,80px)] font-[300] tracking-[-2px] leading-[1.05] text-[var(--color-text-dark)] mt-6">
        <span className="block overflow-hidden">
          <motion.span variants={phraseVariant(0)} className="block">
            The resident relationship,
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span variants={phraseVariant(0.35)} className="block">
            finally on your side.
          </motion.span>
        </span>
      </h1>

      <motion.p
        variants={heroFadeUp}
        className="text-subheading mt-6 max-w-[560px] mx-auto text-[var(--color-text-body)] font-[300]"
      >
        The digital home for every shared owner you serve. Connected to Case
        Manager. Owned by your team.
      </motion.p>

      <motion.div
        variants={heroFadeUp}
        className="mt-10 flex gap-4 flex-wrap justify-center"
      >
        <Button variant="solid-white" size="lg" href="/contact" arrow>
          Book a Demo
        </Button>
        <Button variant="outline" size="lg" href="#capabilities" arrow>
          See What&rsquo;s Live
        </Button>
      </motion.div>
    </motion.div>
  );
}
