"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

/* ─── Stage data ─── */

const stages = [
  {
    label: "Sales",
    href: "/intelligence-layers/sales",
    text: "Every shared ownership scheme starts with demand. Cornerstone captures leads from multiple channels — portals, agents, housing associations, direct enquiries — and brings them into a single pipeline. No leads lost between systems, no duplicated outreach, no manual tracking.",
  },
  {
    label: "Cornerstone",
    href: "/intelligence-layers/lease",
    text: "This is where the resident's record comes to life. Cornerstone enriches the data — ownership percentage, lease terms, contact details, property attributes, compliance obligations — building a complete, structured profile that every downstream process can rely on.",
  },
  {
    label: "Staircasing",
    href: "/intelligence-layers/lease",
    text: "Residents increase their ownership share over time. Cornerstone tracks every staircasing transaction — recalculating ownership percentages, updating rent charges, and adjusting lease terms automatically. Some residents staircase once, others multiple times, each at their own pace.",
  },
  {
    label: "Resales",
    href: "/intelligence-layers/lease",
    text: "When a resident is ready to move on, Cornerstone manages the resale — valuations, nominations, compliance checks, and completion. The resident leaves with full ownership and a clean record. Your team moves on to the next buyer with a property ready to re-enter the pipeline.",
  },
];

/* ─── SVG constants ─── */

const SVG_W = 1200;
const SVG_H = 300;

// 4 zones: Sales → Cornerstone (helix) → Staircasing → Resales
const ZONE_BOUNDARIES = [0, 300, 600, 900, 1200];

// 7 entry Y positions for sales convergence (zone 1 left edge)
const ENTRY_YS = [30, 70, 110, 150, 170, 220, 270];
// All lines converge to a single y=150 center line
const BUNDLE_Y = 150;
// 5 main paths (indices 0–4) that continue through all zones
// Paths 0 and 4 are the helix pair; paths 1, 2, 3 are inner lines
const EXIT_YS = [40, 100, 150, 200, 260];

// Staircase config (risers within zone 3: 600–900)
const STEP_HEIGHT = 25;
const STEP_X_1 = 700; // first riser
const STEP_X_2 = 800; // second riser

/**
 * Generate a convergence-only path for the sales zone (zone 1).
 * 7 lines fan in from spread entry positions to y=150.
 */
function generateConvergePath(entryY: number): string {
  const z1End = ZONE_BOUNDARIES[1];
  const cx = z1End * 0.5;
  return `M 0 ${entryY} C ${cx} ${entryY}, ${cx} ${BUNDLE_Y}, ${z1End} ${BUNDLE_Y}`;
}

/**
 * Generate a main continuous path (zones 2–4) for the 5 paths that
 * continue past the sales convergence: helix → staircase → fan-out.
 *
 * index 0–4 maps to: helix primary, inner, center, inner, helix secondary
 */
function generateMainPath(index: number): string {
  const isHelix = index === 0 || index === 4;
  const z2Start = ZONE_BOUNDARIES[1];
  const z2End = ZONE_BOUNDARIES[2];

  let d = `M ${z2Start} ${BUNDLE_Y}`;

  // ── Zone 2 (300–600): Cornerstone — helix or horizontal ──
  if (isHelix) {
    const maxAmplitude = 18;
    const phase = index === 4 ? Math.PI : 0;
    const samples = 60;
    for (let i = 1; i <= samples; i++) {
      const t = i / samples;
      // Envelope: starts small, swells in the middle, shrinks at end
      const envelope = Math.sin(t * Math.PI);
      const amplitude = maxAmplitude * envelope;
      const x = z2Start + t * (z2End - z2Start);
      const y =
        BUNDLE_Y +
        amplitude * Math.sin(phase + t * 3 * 2 * Math.PI);
      d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
  } else {
    d += ` L ${z2End} ${BUNDLE_Y}`;
  }

  // ── Zone 3 (600–900): Staircasing ──
  let currentY = BUNDLE_Y;
  d += ` L ${STEP_X_1} ${currentY}`;
  currentY -= STEP_HEIGHT;
  d += ` L ${STEP_X_1} ${currentY}`;
  d += ` L ${STEP_X_2} ${currentY}`;
  currentY -= STEP_HEIGHT;
  d += ` L ${STEP_X_2} ${currentY}`;
  const z3End = ZONE_BOUNDARIES[3];
  d += ` L ${z3End} ${currentY}`;

  // ── Zone 4 (900–1200): Resales — fan out ──
  const z4Start = ZONE_BOUNDARIES[3];
  const z4End = ZONE_BOUNDARIES[4];
  const exitY = EXIT_YS[index];
  const fcx1 = z4Start + (z4End - z4Start) * 0.3;
  const fcx2 = z4Start + (z4End - z4Start) * 0.7;
  d += ` C ${fcx1} ${currentY}, ${fcx2} ${exitY}, ${z4End} ${exitY}`;

  return d;
}

// Pre-generate paths
const CONVERGE_PATHS = ENTRY_YS.map(generateConvergePath);        // 7 sales convergence paths
const MAIN_PATHS = Array.from({ length: 5 }, (_, i) => generateMainPath(i)); // 5 continuing paths

// Generous total length estimate for dasharray/dashoffset
const TOTAL_LENGTH = 1500;

/* ─── Component ─── */

export function ResidentJourney() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ── Text opacities (4 stages — crossfade paragraph text) ── */
  const text1Opacity = useTransform(scrollYProgress, [0, 0.03, 0.22, 0.25], [1, 1, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.22, 0.25, 0.47, 0.50], [0, 1, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.47, 0.50, 0.72, 0.75], [0, 1, 1, 0]);
  const text4Opacity = useTransform(scrollYProgress, [0.72, 0.75, 0.97, 1.0], [0, 1, 1, 1]);
  const textOpacities = [text1Opacity, text2Opacity, text3Opacity, text4Opacity];

  /* ── Badge opacities (appear and stay) ── */
  const badge1Opacity = useTransform(scrollYProgress, [0, 0.03], [0, 1]);
  const badge2Opacity = useTransform(scrollYProgress, [0.22, 0.25], [0, 1]);
  const badge3Opacity = useTransform(scrollYProgress, [0.47, 0.50], [0, 1]);
  const badge4Opacity = useTransform(scrollYProgress, [0.72, 0.75], [0, 1]);
  const badgeOpacities = [badge1Opacity, badge2Opacity, badge3Opacity, badge4Opacity];

  /* ── Active badge highlight (1 = active, 0.4 = inactive) ── */
  const badgeScale1 = useTransform(scrollYProgress, [0, 0.22, 0.25], [1, 1, 0.4]);
  const badgeScale2 = useTransform(scrollYProgress, [0.22, 0.25, 0.47, 0.50], [0.4, 1, 1, 0.4]);
  const badgeScale3 = useTransform(scrollYProgress, [0.47, 0.50, 0.72, 0.75], [0.4, 1, 1, 0.4]);
  const badgeScale4 = useTransform(scrollYProgress, [0.72, 0.75, 1.0], [0.4, 1, 1]);
  const badgeActiveOpacities = [badgeScale1, badgeScale2, badgeScale3, badgeScale4];

  /* ── Convergence path dash-offsets (7 sales lines, zone 1 only) ── */
  const CONVERGE_LENGTH = 400; // approximate length of convergence bezier
  const convOffset0 = useTransform(scrollYProgress, [0.00, 0.22], [CONVERGE_LENGTH, 0]);
  const convOffset1 = useTransform(scrollYProgress, [0.01, 0.21], [CONVERGE_LENGTH, 0]);
  const convOffset2 = useTransform(scrollYProgress, [0.01, 0.20], [CONVERGE_LENGTH, 0]);
  const convOffset3 = useTransform(scrollYProgress, [0.00, 0.19], [CONVERGE_LENGTH, 0]); // center leads
  const convOffset4 = useTransform(scrollYProgress, [0.01, 0.20], [CONVERGE_LENGTH, 0]);
  const convOffset5 = useTransform(scrollYProgress, [0.01, 0.21], [CONVERGE_LENGTH, 0]);
  const convOffset6 = useTransform(scrollYProgress, [0.02, 0.22], [CONVERGE_LENGTH, 0]);
  const convOffsets = [convOffset0, convOffset1, convOffset2, convOffset3, convOffset4, convOffset5, convOffset6];

  /* ── Main path dash-offsets (5 paths, zones 2–4) ── */
  const MAIN_LENGTH = 1200;
  const mainOffset0 = useTransform(scrollYProgress, [0.20, 0.98], [MAIN_LENGTH, 0]); // helix primary
  const mainOffset1 = useTransform(scrollYProgress, [0.22, 0.96], [MAIN_LENGTH, 0]);
  const mainOffset2 = useTransform(scrollYProgress, [0.20, 0.95], [MAIN_LENGTH, 0]); // center leads
  const mainOffset3 = useTransform(scrollYProgress, [0.22, 0.96], [MAIN_LENGTH, 0]);
  const mainOffset4 = useTransform(scrollYProgress, [0.22, 0.99], [MAIN_LENGTH, 0]); // helix secondary
  const mainOffsets = [mainOffset0, mainOffset1, mainOffset2, mainOffset3, mainOffset4];

  /* ── Background colour transition (4 stages) ── */
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.50, 0.75],
    ["#F3EAFF", "#EDE0FF", "#FFF0E0", "#FFE4EE"]
  );

  /* ── Path colors ── */
  const mainStrokes = [
    "#7114E2",                   // 0: helix primary
    "#333",                      // 1: inner
    "#333",                      // 2: center
    "#333",                      // 3: inner
    "rgba(113, 20, 226, 0.4)",  // 4: helix secondary
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ height: "400vh", backgroundColor: bgColor }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden relative">
        {/* Blueprint dot grid with radial fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(113, 20, 226, 0.55) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          }}
        />
        {/* ── Text region ── */}
        <Container>
          <h2 className="text-h2 pt-[12vh] text-[var(--color-text-dark)]">
            One module in a connected system
          </h2>
          {/* Badge row — each appears and stays, links to corresponding page */}
          <div className="flex flex-wrap gap-2 mt-6">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.label}
                style={{ opacity: badgeOpacities[i] }}
              >
                <motion.div style={{ opacity: badgeActiveOpacities[i] }}>
                  <Link href={stage.href}>
                    <Badge theme="light">{stage.label}</Badge>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Crossfading paragraph text */}
          <div className="pt-4 pb-8 relative" style={{ minHeight: "20vh" }}>
            {stages.map((stage, i) => (
              <motion.div
                key={stage.label}
                className="absolute top-0 left-0 right-0 pt-4"
                style={{ opacity: textOpacities[i] }}
              >
                <p className="max-w-[560px] text-subheading text-[var(--color-text-body)]">
                  {stage.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>

        {/* ── SVG region: one continuous composition ── */}
        <div className="flex-1 min-h-0">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            {/* 7 convergence paths (sales zone) */}
            {CONVERGE_PATHS.map((d, i) => (
              <motion.path
                key={`conv-${i}`}
                d={d}
                stroke="#333"
                strokeWidth={1.5}
                fill="none"
                strokeDasharray={CONVERGE_LENGTH}
                style={{ strokeDashoffset: convOffsets[i] }}
              />
            ))}

            {/* 5 main paths (helix → staircase → fan-out) */}
            {MAIN_PATHS.map((d, i) => (
              <motion.path
                key={`main-${i}`}
                d={d}
                stroke={mainStrokes[i]}
                strokeWidth={1.5}
                fill="none"
                strokeDasharray={MAIN_LENGTH}
                style={{ strokeDashoffset: mainOffsets[i] }}
              />
            ))}

          </svg>
        </div>
      </div>
    </motion.section>
  );
}
