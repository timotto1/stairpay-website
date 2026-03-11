"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <Container>
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {members.map((member) => (
          <motion.div
            key={member.name}
            variants={fadeUp}
            className="bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] p-8 transition-all duration-[250ms] hover:bg-[var(--color-bg-card-dark-hover)] hover:-translate-y-1"
          >
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center mb-5">
              <span className="text-[15px] font-[500] text-[var(--color-accent-pale)]">
                {getInitials(member.name)}
              </span>
            </div>

            <h3 className="text-h3 text-[var(--color-text-primary)]">
              {member.name}
            </h3>

            <p className="text-small text-[var(--color-accent-pale)] mt-1">
              {member.role}
            </p>

            {member.bio && (
              <p className="text-body text-[var(--color-text-secondary)] mt-4">
                {member.bio}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
