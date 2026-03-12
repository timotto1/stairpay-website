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
  theme?: "dark" | "light";
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TeamGrid({ members, theme = "light" }: TeamGridProps) {
  const isDark = theme === "dark";

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
            className={`p-8 border transition-all duration-[250ms] hover:-translate-y-1 ${
              isDark
                ? "bg-[var(--color-bg-card-dark)] border-[var(--color-border-dark)] hover:bg-[var(--color-bg-card-dark-hover)]"
                : "bg-[var(--color-bg-card-light)] border-[var(--color-border-card)] shadow-sm hover:bg-[var(--color-bg-card-light-hover)] hover:shadow-md"
            }`}
          >
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center mb-5">
              <span className={`text-[15px] font-[500] ${isDark ? "text-[var(--color-accent-pale)]" : "text-[var(--color-accent)]"}`}>
                {getInitials(member.name)}
              </span>
            </div>

            <h3 className={`text-h3 ${isDark ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-dark)]"}`}>
              {member.name}
            </h3>

            <p className={`text-small mt-1 ${isDark ? "text-[var(--color-accent-pale)]" : "text-[var(--color-accent)]"}`}>
              {member.role}
            </p>

            {member.bio && (
              <p className={`text-body mt-4 ${isDark ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-body)]"}`}>
                {member.bio}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
