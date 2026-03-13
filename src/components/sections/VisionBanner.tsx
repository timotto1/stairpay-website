"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewport } from "@/lib/animations";

export function VisionBanner() {
  return (
    <section data-theme="light" className="bg-[#F0F0F0] py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1400px] mx-auto">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative aspect-[4/3] md:aspect-auto md:min-h-[440px] overflow-hidden rounded-sm"
        >
          <Image
            src="/images/vision-team.jpg"
            alt="Stairpay team working together"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="bg-white rounded-sm flex flex-col items-center justify-center text-center px-10 md:px-16 py-16 md:py-20"
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-[300] tracking-[-0.5px] leading-[1.15] text-[var(--color-text-dark)]">
            A better deal for residents
          </h2>
          <p className="mt-5 max-w-[420px] text-[15px] md:text-[16px] font-[400] leading-[1.6] text-[var(--color-text-body-light)]">
            Our vision is a single source of truth for every shared ownership home — where every event is audited, every obligation is met, and residents are genuinely cared for.
          </p>
          <Button variant="outline" size="md" href="/company/customers" arrow className="mt-8">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
