"use client";

import { motion } from "framer-motion";

interface PartnerMarqueeProps {
  partners: string[];
}

export function PartnerMarquee({ partners }: PartnerMarqueeProps) {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent" />

      <motion.div
        className="flex gap-12 md:gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="text-[clamp(28px,4vw,56px)] font-[500] tracking-[-1.5px] text-white shrink-0"
          >
            {name}
            <span className="text-[var(--color-accent)] ml-12 md:ml-16 select-none">
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
