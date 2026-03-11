"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, stagger, viewport } from "@/lib/animations";

interface ApproachItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ApproachSectionProps {
  eyebrow?: string;
  headline: string;
  items: ApproachItem[];
}

export function ApproachSection({
  eyebrow,
  headline,
  items,
}: ApproachSectionProps) {
  return (
    <Container>
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {eyebrow && (
          <motion.div variants={fadeUp}>
            <Badge>{eyebrow}</Badge>
          </motion.div>
        )}

        <motion.h2
          variants={fadeUp}
          className={`text-h2 text-[var(--color-text-primary)] ${eyebrow ? "mt-5" : ""} mb-12`}
        >
          {headline}
        </motion.h2>

        <motion.div
          variants={stagger(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              {item.icon && (
                <div className="text-[var(--color-accent-pale)] mb-4">
                  {item.icon}
                </div>
              )}
              <h3 className="text-h3 text-[var(--color-text-primary)]">
                {item.title}
              </h3>
              <p className="text-body text-[var(--color-text-secondary)] mt-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
