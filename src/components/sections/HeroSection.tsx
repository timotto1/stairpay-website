"use client";

import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, viewport } from "@/lib/animations";
import { LogoTicker } from "@/components/sections/LogoTicker";

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

interface CTAProps {
  label: string;
  href: string;
}

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  description: string;
  primaryCta?: CTAProps;
  secondaryCta?: CTAProps;
  children?: React.ReactNode;
  theme?: "dark" | "light";
  centered?: boolean;
  videoSources?: string[];
  logoTicker?: string[];
}

export function HeroSection({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  children,
  theme = "dark",
  centered = false,
  videoSources,
  logoTicker,
}: HeroSectionProps) {
  const isDark = theme === "dark";
  const hasVisual = !!children;
  const hasVideo = videoSources && videoSources.length > 0;
  const isCentered = centered || !hasVisual || hasVideo;

  return (
    <section
      data-theme={isDark ? "dark" : "light"}
      className={`relative min-h-[100vh] flex items-center overflow-hidden ${
        isDark ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-surface)]"
      }`}
    >
      {/* Video background — fixed so it stays while content scrolls over */}
      {hasVideo && (
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            {videoSources.map((src) => (
              <source key={src} src={src} type="video/mp4" />
            ))}
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Radial glow (only when no video) */}
      {isDark && !hasVideo && (
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[var(--color-accent)] opacity-[0.06] blur-[160px]" />
        </div>
      )}

      <Container className="relative z-10 py-24 md:py-32">
        <div
          className={
            hasVisual && !isCentered
              ? "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              : ""
          }
        >
          {/* Text column */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className={isCentered ? "max-w-[780px] mx-auto text-center" : ""}
          >
            {eyebrow && (
              <motion.div variants={heroFadeUp}>
                <Badge>{eyebrow}</Badge>
              </motion.div>
            )}

            {hasVideo ? (
              <h1
                className={`text-[clamp(24px,4.2vw,72px)] font-[300] tracking-[-2px] leading-[1.05] text-white/90 whitespace-nowrap ${eyebrow ? "mt-6" : ""}`}
              >
                <span className="block overflow-hidden">
                  <motion.span variants={phraseVariant(0)} className="block">
                    End-to-End Infrastructure
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span variants={phraseVariant(0.35)} className="block">
                    Built for Shared Ownership
                  </motion.span>
                </span>
              </h1>
            ) : (
              <motion.h1
                variants={heroFadeUp}
                className={`text-display ${eyebrow ? "mt-6" : ""} ${
                  isDark
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-dark)]"
                }`}
              >
                {headline}
              </motion.h1>
            )}

            {description && (
              <motion.p
                variants={heroFadeUp}
                className={`text-subheading mt-6 max-w-[540px] ${
                  isCentered ? "mx-auto" : ""
                } ${
                  hasVideo
                    ? "text-white/80"
                    : isDark
                      ? "text-[var(--color-text-secondary)]"
                      : "text-[var(--color-text-body)]"
                }`}
              >
                {description}
              </motion.p>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div
                variants={heroFadeUp}
                className={`mt-10 flex gap-4 flex-wrap ${
                  isCentered ? "justify-center" : ""
                }`}
              >
                {primaryCta && (
                  <Button variant="solid-white" size="lg" href={primaryCta.href} arrow>
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button variant={isDark || hasVideo ? "outline-dark" : "outline"} size="lg" href={secondaryCta.href} arrow>
                    {secondaryCta.label}
                  </Button>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Visual column */}
          {hasVisual && !isCentered && (
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              viewport={viewport}
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>

      {/* Logo ticker at bottom of hero */}
      {logoTicker && logoTicker.length > 0 && (
        <LogoTicker logos={logoTicker} />
      )}
    </section>
  );
}
