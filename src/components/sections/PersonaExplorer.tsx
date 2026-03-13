"use client";

import { useState, useCallback, useRef, useEffect, useLayoutEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RotateCcw } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const teams = ["Board", "Sales", "Leasehold", "Finance", "Aftersales"] as const;
const levels = ["C-suite", "Director", "Manager", "Senior", "Junior"] as const;

type Team = (typeof teams)[number];
type Level = (typeof levels)[number];

interface PersonaResponse {
  headline: string;
  description: string;
  bullets: string[];
  stats: { value: string; label: string }[];
}

const responses: Record<Team, Record<Level, PersonaResponse>> = {
  Board: {
    "C-suite": {
      headline: "Portfolio-wide governance at a glance",
      description:
        "Stairpay gives your executive team a single dashboard spanning every shared ownership obligation — from lease compliance through to capital forecasting — so board reporting is evidence-based, not anecdotal.",
      bullets: [
        "Real-time compliance status across the entire portfolio",
        "Automated board-pack generation with auditable data trails",
        "Capital forecasting models updated with live transaction data",
      ],
      stats: [
        { value: "94%", label: "Audit compliance" },
        { value: "70%", label: "Reporting time saved" },
      ],
    },
    Director: {
      headline: "Strategic oversight with operational depth",
      description:
        "As a director, you need both the high-level view and the ability to drill down. Stairpay surfaces the metrics that matter — portfolio health, revenue risk, and regulatory exposure — without requiring your team to compile them manually.",
      bullets: [
        "Director-level dashboards with drill-down to individual cases",
        "Automated escalation alerts for overdue compliance actions",
        "Cross-departmental visibility without data silos",
      ],
      stats: [
        { value: "100%", label: "Lifecycle coverage" },
        { value: "6", label: "Intelligence layers" },
      ],
    },
    Manager: {
      headline: "Operational control without the overhead",
      description:
        "Stairpay replaces the spreadsheets and manual trackers your team relies on with structured workflows that track every obligation, deadline, and case automatically.",
      bullets: [
        "Automated task assignment and deadline tracking",
        "Team workload visibility across all active cases",
        "Exception-based management — only surface what needs attention",
      ],
      stats: [
        { value: "3x", label: "Faster case throughput" },
        { value: "Zero", label: "Missed deadlines" },
      ],
    },
    Senior: {
      headline: "Spend less time chasing, more time delivering",
      description:
        "Stairpay automates the repetitive data gathering and status chasing that consumes senior team members' time, letting you focus on the work that actually requires your expertise.",
      bullets: [
        "Pre-populated case data from connected systems",
        "Automated status updates to stakeholders",
        "Structured handover processes between team members",
      ],
      stats: [
        { value: "60%", label: "Less admin time" },
        { value: "Live", label: "Case status tracking" },
      ],
    },
    Junior: {
      headline: "Clear processes from day one",
      description:
        "Stairpay provides structured, step-by-step workflows that guide you through each process — so you can contribute confidently without needing years of institutional knowledge.",
      bullets: [
        "Guided workflows with built-in validation checks",
        "Contextual help and documentation at every stage",
        "Clear escalation paths when decisions are needed",
      ],
      stats: [
        { value: "50%", label: "Faster onboarding" },
        { value: "Built-in", label: "Training workflows" },
      ],
    },
  },
  Sales: {
    "C-suite": {
      headline: "Conversion intelligence for strategic decisions",
      description:
        "Stairpay transforms your sales operation from a reactive enquiry-handling function into a data-driven conversion engine — giving you the forecasting confidence to commit to development pipelines and volume targets.",
      bullets: [
        "Live pipeline analytics with conversion-rate forecasting",
        "Revenue projection models tied to actual stage progression",
        "Cross-development performance benchmarking",
      ],
      stats: [
        { value: "£12.4M", label: "Annual capital forecast" },
        { value: "Real-time", label: "Pipeline visibility" },
      ],
    },
    Director: {
      headline: "Full pipeline visibility, end to end",
      description:
        "Replace disconnected spreadsheets with a structured sales pipeline that tracks every enquiry from first contact through legal completion — with full audit trails and stage-gate controls.",
      bullets: [
        "Structured stage progression from enquiry to completion",
        "Automated activity logging for every buyer interaction",
        "Developer and agent performance reporting",
      ],
      stats: [
        { value: "40%", label: "Faster conversions" },
        { value: "100%", label: "Enquiry capture rate" },
      ],
    },
    Manager: {
      headline: "Manage your team's pipeline with confidence",
      description:
        "Stairpay gives sales managers real-time visibility into every team member's caseload, conversion rates, and upcoming deadlines — so you can coach effectively and hit targets consistently.",
      bullets: [
        "Per-agent pipeline dashboards with stage breakdowns",
        "Automated reminders for follow-ups and viewing bookings",
        "Reservation document generation in one click",
      ],
      stats: [
        { value: "3x", label: "Pipeline throughput" },
        { value: "Zero", label: "Lost enquiries" },
      ],
    },
    Senior: {
      headline: "Close more, chase less",
      description:
        "Stairpay automates the admin that slows down your sales cycle — from enquiry qualification to document generation — so you can focus on building relationships and closing reservations.",
      bullets: [
        "Auto-populated buyer profiles from initial enquiry data",
        "One-click MOS and reservation form generation",
        "Integrated viewing scheduling and confirmation",
      ],
      stats: [
        { value: "2hrs", label: "Saved per case" },
        { value: "Auto", label: "Document generation" },
      ],
    },
    Junior: {
      headline: "A structured path through every sale",
      description:
        "Stairpay walks you through each stage of the sales process with clear checklists and required fields — so you always know what to do next and nothing gets missed.",
      bullets: [
        "Step-by-step stage checklists with validation",
        "Pre-built email templates for buyer communications",
        "Automatic escalation when a case needs senior input",
      ],
      stats: [
        { value: "100%", label: "Process compliance" },
        { value: "Guided", label: "Stage progression" },
      ],
    },
  },
  Leasehold: {
    "C-suite": {
      headline: "Lease intelligence across the portfolio",
      description:
        "Stairpay extracts and structures the critical data locked inside thousands of lease documents — giving your executive team portfolio-wide visibility into obligations, risks, and upcoming events without manual review.",
      bullets: [
        "AI-powered clause extraction with source-text verification",
        "Portfolio-wide obligation tracking and risk scoring",
        "Automated alerts for upcoming lease events and deadlines",
      ],
      stats: [
        { value: "1000s", label: "Leases processed" },
        { value: "99.2%", label: "Extraction accuracy" },
      ],
    },
    Director: {
      headline: "From documents to decisions",
      description:
        "Stairpay turns your lease archive from a compliance liability into a strategic asset — surfacing the clauses, dates, and obligations that drive operational decisions across homeownership, finance, and legal teams.",
      bullets: [
        "Structured, queryable lease data across all units",
        "Cross-referencing between lease terms and live operations",
        "Bulk lease review for portfolio acquisitions or audits",
      ],
      stats: [
        { value: "85%", label: "Faster lease reviews" },
        { value: "Full", label: "Audit trail" },
      ],
    },
    Manager: {
      headline: "Manage lease obligations at scale",
      description:
        "Stairpay replaces the manual process of reading individual lease documents with a structured system that surfaces what your team needs to act on — rent review clauses, service charge schedules, and compliance deadlines.",
      bullets: [
        "Automated extraction of key dates and financial terms",
        "Team task queues generated from lease obligation data",
        "Exception reporting for non-standard clauses",
      ],
      stats: [
        { value: "10x", label: "Faster clause lookup" },
        { value: "Zero", label: "Missed obligations" },
      ],
    },
    Senior: {
      headline: "Stop reading PDFs, start making decisions",
      description:
        "Stairpay's lease intelligence layer means you no longer need to manually review documents to answer operational questions — the data is already extracted, verified, and searchable.",
      bullets: [
        "Instant clause lookup across the full portfolio",
        "Side-by-side source-text verification for every extraction",
        "Automated flagging of unusual or high-risk clauses",
      ],
      stats: [
        { value: "Instant", label: "Clause retrieval" },
        { value: "Verified", label: "Source-text links" },
      ],
    },
    Junior: {
      headline: "Lease data without the complexity",
      description:
        "Stairpay makes lease information accessible without needing years of experience interpreting legal documents — structured data with plain-language summaries and source references you can verify.",
      bullets: [
        "Plain-language summaries of key lease terms",
        "Guided workflows for common lease queries",
        "Built-in glossary and contextual help",
      ],
      stats: [
        { value: "Simple", label: "Plain-language output" },
        { value: "Linked", label: "Source documents" },
      ],
    },
  },
  Finance: {
    "C-suite": {
      headline: "Financial control built for regulated housing",
      description:
        "Stairpay automates the financial operations that are unique to shared ownership — rent setting, service charge apportionment, and capital receipts forecasting — with full audit trails and lease-compliant calculations.",
      bullets: [
        "Automated rent-setting calculations from lease terms",
        "Service charge apportionment with transparent breakdowns",
        "Capital receipts forecasting tied to live transaction data",
      ],
      stats: [
        { value: "£12.4M", label: "Annual capital forecast" },
        { value: "100%", label: "Lease-compliant calculations" },
      ],
    },
    Director: {
      headline: "Audit-ready financials, always",
      description:
        "Stairpay ensures every financial calculation — from annual rent uplifts to service charge reconciliations — is defensible, traceable, and compliant with the lease terms that govern them.",
      bullets: [
        "Full audit trail for every rent and service charge calculation",
        "Automated Section 20 consultation document preparation",
        "Real-time budget vs. actual tracking across developments",
      ],
      stats: [
        { value: "Zero", label: "Manual calculations" },
        { value: "S20", label: "Consultation-ready" },
      ],
    },
    Manager: {
      headline: "Rent and charges calculated, not guessed",
      description:
        "Stairpay reads lease terms directly to calculate rent uplifts and service charges — handling RPI caps, collar clauses, and fixed increases across thousands of units without spreadsheet risk.",
      bullets: [
        "Bulk rent-setting across the full portfolio in minutes",
        "Automated handling of RPI uplifts, caps, and collars",
        "Per-unit service charge breakdowns with apportionment logic",
      ],
      stats: [
        { value: "Minutes", label: "Not weeks for rent-setting" },
        { value: "Per-unit", label: "Charge breakdowns" },
      ],
    },
    Senior: {
      headline: "Eliminate the spreadsheet bottleneck",
      description:
        "Stairpay automates the calculations that currently require senior finance team members to manually interpret lease clauses and build one-off spreadsheets — freeing your time for analysis and decision-making.",
      bullets: [
        "Pre-calculated rent uplifts ready for review and approval",
        "Automated reconciliation between budgeted and actual charges",
        "Export-ready data for housing management system integration",
      ],
      stats: [
        { value: "80%", label: "Less manual processing" },
        { value: "Export", label: "HMS-ready data" },
      ],
    },
    Junior: {
      headline: "Confidence in every calculation",
      description:
        "Stairpay provides structured financial workflows with built-in validation — so you can process rent reviews and charge calculations accurately without needing to interpret complex lease clauses manually.",
      bullets: [
        "Pre-built calculation templates linked to lease terms",
        "Validation checks that flag anomalies before approval",
        "Clear approval workflows with senior sign-off stages",
      ],
      stats: [
        { value: "Validated", label: "Every calculation" },
        { value: "Guided", label: "Approval workflows" },
      ],
    },
  },
  Aftersales: {
    "C-suite": {
      headline: "Proactive capital activation",
      description:
        "Stairpay identifies staircasing opportunities across your portfolio before homeowners make contact — turning reactive enquiry handling into a strategic capital activation programme with predictable revenue forecasting.",
      bullets: [
        "Portfolio-wide staircasing readiness scoring",
        "Proactive outreach campaigns to eligible homeowners",
        "Capital receipts forecasting with confidence intervals",
      ],
      stats: [
        { value: "3x", label: "More staircasing completions" },
        { value: "Predictable", label: "Revenue forecasting" },
      ],
    },
    Director: {
      headline: "From reactive to revenue-generating",
      description:
        "Stairpay transforms aftersales from a cost centre into a revenue engine — structuring every staircasing, resale, and lease extension case through a governed workflow with full financial visibility.",
      bullets: [
        "Structured case management for staircasing and resales",
        "Automated valuation instruction and solicitor coordination",
        "Real-time revenue tracking against quarterly targets",
      ],
      stats: [
        { value: "40%", label: "Faster completions" },
        { value: "Live", label: "Revenue tracking" },
      ],
    },
    Manager: {
      headline: "Every case tracked, every deadline met",
      description:
        "Stairpay gives aftersales managers a single view of every active case — from initial enquiry through valuation, legal instruction, and completion — with automated reminders and stage-gate controls.",
      bullets: [
        "Caseload dashboards with per-exec performance metrics",
        "Automated deadline tracking and escalation",
        "One-click document generation for standard correspondence",
      ],
      stats: [
        { value: "Zero", label: "Missed completions" },
        { value: "Per-exec", label: "Performance tracking" },
      ],
    },
    Senior: {
      headline: "Focus on completions, not admin",
      description:
        "Stairpay handles the coordination overhead — chasing solicitors, generating documents, updating homeowners — so you can focus on progressing cases through to completion.",
      bullets: [
        "Automated solicitor instruction and progress chasing",
        "Pre-populated forms and correspondence templates",
        "Integrated timeline view of every case milestone",
      ],
      stats: [
        { value: "2hrs", label: "Saved per case" },
        { value: "Auto", label: "Progress chasing" },
      ],
    },
    Junior: {
      headline: "Structured workflows for every transaction",
      description:
        "Stairpay provides clear, step-by-step processes for handling staircasing and resale enquiries — with built-in checks that ensure compliance and quality at every stage.",
      bullets: [
        "Guided case setup with required field validation",
        "Checklist-driven stage progression",
        "Automatic notifications when a case needs escalation",
      ],
      stats: [
        { value: "Step-by-step", label: "Case guidance" },
        { value: "Built-in", label: "Quality checks" },
      ],
    },
  },
};

// ─── Animation config ────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const CORNER_R = 12; // border radius for elbow corners

// ─── Elbow Connector ─────────────────────────────────────────────────────────

/**
 * Draws an SVG elbow connector from `fromEl` bottom-center to `toEl` top-center.
 * Path: down → horizontal curve → horizontal → curve down → down to arrowhead.
 * Rendered as an absolutely positioned SVG over the shared container.
 */
function ElbowConnector({
  fromEl,
  toEl,
  containerEl,
  animKey,
  endPad = 0,
}: {
  fromEl: HTMLElement | null;
  toEl: HTMLElement | null;
  containerEl: HTMLElement | null;
  animKey: string;
  endPad?: number;
}) {
  const [d, setD] = useState("");
  const [bounds, setBounds] = useState({ x: 0, y: 0, w: 0, h: 0 });

  const measure = useCallback(() => {
    if (!fromEl || !toEl || !containerEl) return;

    const cRect = containerEl.getBoundingClientRect();
    const fRect = fromEl.getBoundingClientRect();
    const tRect = toEl.getBoundingClientRect();

    const startX = fRect.left + fRect.width / 2 - cRect.left;
    const startY = fRect.bottom - cRect.top;
    const endX = tRect.left + tRect.width / 2 - cRect.left;
    const endY = tRect.top - cRect.top - endPad;

    const dx = endX - startX;
    const absDx = Math.abs(dx);
    const dirX = dx > 0 ? 1 : -1;
    const arrowSize = 5;
    const vSpace = endY - startY - arrowSize;

    if (vSpace < 10) return; // not enough room yet

    let path: string;

    if (absDx < 1) {
      path = `M ${startX} ${startY} L ${startX} ${endY - arrowSize}`;
    } else {
      const r = Math.min(CORNER_R, vSpace * 0.2, absDx / 2);
      const midY = startY + vSpace * 0.45;

      path = [
        `M ${startX} ${startY}`,
        `L ${startX} ${midY - r}`,
        `Q ${startX} ${midY} ${startX + dirX * r} ${midY}`,
        `L ${endX - dirX * r} ${midY}`,
        `Q ${endX} ${midY} ${endX} ${midY + r}`,
        `L ${endX} ${endY - arrowSize}`,
      ].join(" ");
    }

    const minX = Math.min(startX, endX) - 10;
    const maxX = Math.max(startX, endX) + 10;
    const pad = 6;

    setBounds({ x: minX - pad, y: startY - pad, w: maxX - minX + pad * 2, h: endY - startY + pad * 2 });
    setD(path);
  }, [fromEl, toEl, containerEl, endPad]);

  // Measure immediately, then keep re-measuring for 600ms to track layout animations
  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    if (!fromEl || !toEl || !containerEl) return;
    let rafId: number;
    const start = performance.now();
    const loop = () => {
      measure();
      if (performance.now() - start < 600) {
        rafId = requestAnimationFrame(loop);
      }
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [measure]);

  if (!d) return null;

  // Arrowhead at the end of path
  const arrowSize = 5;

  return (
    <svg
      className="absolute pointer-events-none z-0"
      style={{ left: bounds.x, top: bounds.y, width: bounds.w, height: bounds.h, overflow: "visible" }}
    >
      <g transform={`translate(${-bounds.x}, ${-bounds.y})`}>
        <motion.path
          key={animKey}
          d={d}
          fill="none"
          stroke="#111"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
        />
        {/* Arrowhead — placed at path end */}
        <motion.g
          key={`${animKey}-head`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          {(() => {
            // Parse endpoint from path
            const parts = d.split(" ");
            const ey = parseFloat(parts[parts.length - 1]);
            const ex = parseFloat(parts[parts.length - 2]);
            return (
              <polygon
                points={`${ex},${ey + arrowSize} ${ex - arrowSize},${ey - 1} ${ex + arrowSize},${ey - 1}`}
                fill="#111"
              />
            );
          })()}
        </motion.g>
      </g>
    </svg>
  );
}

// ─── Option Pill ─────────────────────────────────────────────────────────────

const OptionPill = forwardRef<
  HTMLButtonElement,
  {
    label: string;
    selected: boolean;
    dimmed: boolean;
    onClick: () => void;
  }
>(({ label, selected, dimmed, onClick }, ref) => (
  <motion.button
    ref={ref}
    animate={{ opacity: dimmed ? 0.35 : 1 }}
    transition={{ duration: 0.4, ease: EASE }}
    onClick={onClick}
    className={`px-6 py-3 text-[15px] md:text-[16px] font-[400] rounded-[4px] transition-[border-color,background-color,box-shadow] duration-200 cursor-pointer select-none whitespace-nowrap ${
      selected
        ? "border-2 border-[#111] text-[#111] bg-white shadow-sm"
        : dimmed
        ? "border border-transparent text-[var(--color-text-muted)] hover:opacity-70"
        : "border border-[var(--color-border-light)] text-[var(--color-text-dark)] hover:border-[#111] hover:bg-[#FAFAFA]"
    }`}
  >
    {label}
  </motion.button>
));
OptionPill.displayName = "OptionPill";

// ─── Component ───────────────────────────────────────────────────────────────

export function PersonaExplorer() {
  const [team, setTeam] = useState<Team | null>(null);
  const [level, setLevel] = useState<Level | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Refs for pill buttons
  const teamPillRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const levelPillRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Refs for target rows (the level row container and result card container)
  const levelRowRef = useRef<HTMLDivElement>(null);
  const resultRowRef = useRef<HTMLDivElement>(null);

  // Force re-render when layout changes so connectors recalculate
  const [, setTick] = useState(0);
  useLayoutEffect(() => {
    // Tick after DOM settles to let connectors measure
    const id = requestAnimationFrame(() => setTick((t) => t + 1));
    return () => cancelAnimationFrame(id);
  }, [team, level]);

  const reset = useCallback(() => {
    setTeam(null);
    setLevel(null);
  }, []);

  const handleTeamClick = useCallback((t: Team) => {
    setTeam(t);
    setLevel(null);
  }, []);

  const handleLevelClick = useCallback((l: Level) => {
    setLevel(l);
  }, []);

  const step = team === null ? 1 : level === null ? 2 : 3;
  const result = team && level ? responses[team][level] : null;

  // Connector sources & targets
  const selectedTeamEl = team ? teamPillRefs.current[team] ?? null : null;
  const selectedLevelEl = level ? levelPillRefs.current[level] ?? null : null;

  return (
    <div ref={containerRef} className="text-center relative">
      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative mb-8"
      >
        <p className="text-[28px] md:text-[36px] font-[300] tracking-[-0.5px] text-[var(--color-text-dark)] text-center">
          How can Stairpay help me?
        </p>
        <AnimatePresence>
          {step > 1 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ rotate: -45 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={reset}
              className="absolute left-[calc(50%+220px)] md:left-[calc(50%+270px)] top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] transition-colors duration-150 cursor-pointer p-1.5 rounded-full hover:bg-[#F0F0F0]"
              aria-label="Start over"
            >
              <RotateCcw size={18} strokeWidth={1.5} />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Step 1: Team row ── */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{
          opacity: step > 1 ? 0 : 1,
          height: step > 1 ? 0 : "auto",
          marginBottom: step > 1 ? 0 : 16,
          y: 0,
        }}
        transition={{ duration: 0.5, ease: EASE }}
        className="text-[16px] md:text-[18px] font-[300] text-[var(--color-text-body-light)] overflow-hidden"
      >
        What team do you work in?
      </motion.p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
        {teams.map((t) => (
          <OptionPill
            key={t}
            ref={(el) => { teamPillRefs.current[t] = el; }}
            label={t}
            selected={team === t}
            dimmed={team !== null && team !== t}
            onClick={() => handleTeamClick(t)}
          />
        ))}
      </div>

      {/* ── Elbow connector 1: selected team pill → level pill (or level row if no level yet) ── */}
      {step >= 2 && selectedTeamEl && containerRef.current && (
        <ElbowConnector
          key={`conn1-${team}-${level ?? "none"}`}
          fromEl={selectedTeamEl}
          toEl={level && selectedLevelEl ? selectedLevelEl : levelRowRef.current}
          containerEl={containerRef.current}
          animKey={`c1-${team}-${level ?? "none"}`}
        />
      )}

      {/* ── Step 2: Level row ── */}
      <AnimatePresence mode="wait">
        {step >= 2 && (
          <motion.div
            key="step2-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {/* Spacer for the connector */}
            <div className="h-16" />

            <div ref={levelRowRef}>
              <motion.p
                animate={{
                  opacity: step > 2 ? 0 : 1,
                  height: step > 2 ? 0 : "auto",
                  marginBottom: step > 2 ? 0 : 16,
                }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-[16px] md:text-[18px] font-[300] text-[var(--color-text-body-light)] overflow-hidden"
              >
                What seniority are you?
              </motion.p>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
                {levels.map((l) => (
                  <OptionPill
                    key={l}
                    ref={(el) => { levelPillRefs.current[l] = el; }}
                    label={l}
                    selected={level === l}
                    dimmed={level !== null && level !== l}
                    onClick={() => handleLevelClick(l)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Elbow connector 2: selected level pill → result card ── */}
      {step === 3 && selectedLevelEl && resultRowRef.current && containerRef.current && (
        <ElbowConnector
          key={`conn2-${team}-${level}`}
          fromEl={selectedLevelEl}
          toEl={resultRowRef.current}
          containerEl={containerRef.current}
          animKey={`c2-${team}-${level}`}
        />
      )}

      {/* ── Step 3: Result card ── */}
      <AnimatePresence mode="wait">
        {step === 3 && result && (
          <motion.div
            key={`result-${team}-${level}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Spacer for the connector */}
            <div className="h-16" />

            <div ref={resultRowRef} className="max-w-[720px] mx-auto border border-[var(--color-border-light)] rounded-[6px] text-left p-8 md:p-10 bg-white">
              {/* Eyebrow */}
              <p className="text-[11px] font-[500] tracking-[1.5px] uppercase text-[var(--color-accent)] mb-3">
                {team}
              </p>

              {/* Headline */}
              <h3 className="text-[22px] md:text-[26px] font-[400] tracking-[-0.3px] text-[var(--color-text-dark)] leading-[1.2] mb-4">
                {result.headline}
              </h3>

              {/* Description */}
              <p className="text-[14px] md:text-[15px] font-[300] leading-[1.65] text-[var(--color-text-body-light)] mb-6">
                {result.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-8">
                {result.bullets.map((b, i) => (
                  <motion.li
                    key={`${team}-${level}-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.08 }}
                    className="flex items-start gap-3 text-[14px] md:text-[15px] font-[300] leading-[1.5] text-[var(--color-text-body)]"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                    {b}
                  </motion.li>
                ))}
              </ul>

              {/* Stats */}
              <div className="flex gap-12">
                {result.stats.map((s, i) => (
                  <motion.div
                    key={`${team}-${level}-s${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.4 + i * 0.1 }}
                  >
                    <p className="text-[24px] md:text-[28px] font-[400] text-[var(--color-text-dark)] leading-none">
                      {s.value}
                    </p>
                    <p className="text-[12px] font-[300] text-[var(--color-text-muted)] mt-1">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* CTA below card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
              className="mt-10"
            >
              <Button variant="outline" size="lg" href="/contact" arrow>
                Chat to the team
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
