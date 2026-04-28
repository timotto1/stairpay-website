"use client";

import { motion, type Variants } from "framer-motion";
import {
  CreditCard,
  Receipt,
  Wrench,
  TrendingUp,
  MessageSquare,
  FileText,
} from "lucide-react";
import { StatusPillLight, type Status } from "./StatusPill";

const EASE = [0.16, 1, 0.3, 1] as const;

const gridStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const tileVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

interface Func {
  icon: React.ReactNode;
  title: string;
  capability: string;
  description: string;
  status: Status;
}

const functions: Func[] = [
  {
    icon: <CreditCard className="w-6 h-6" strokeWidth={1.5} />,
    title: "Pay & manage rent",
    capability: "Rent payments",
    description:
      "See what's due and when. Set up Direct Debit, manage joint payments, and review every charge in one ledger.",
    status: "in-build",
  },
  {
    icon: <Receipt className="w-6 h-6" strokeWidth={1.5} />,
    title: "Service charge, line by line",
    capability: "Service Charge transparency",
    description:
      "Pay the bill and see exactly where the money goes. Live budget, every supplier explained, one-tap dispute on any line.",
    status: "in-build",
  },
  {
    icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
    title: "Log repairs",
    capability: "Repairs",
    description:
      "Submit a repair, see who's responsible — you or the HA — and track from intake through to fix. Awaab's-Law-aware throughout.",
    status: "in-build",
  },
  {
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
    title: "Staircase or resell",
    capability: "Staircasing & Resales",
    description:
      "Plan, model and execute your move. 1% staircasing, full staircasing, and resales — eligibility through to completion.",
    status: "live",
  },
  {
    icon: <MessageSquare className="w-6 h-6" strokeWidth={1.5} />,
    title: "Notifications & messaging",
    capability: "Communications inbox",
    description:
      "Updates from your landlord, statutory notices flagged, and a direct line to message your HA — every conversation auditable.",
    status: "in-build",
  },
  {
    icon: <FileText className="w-6 h-6" strokeWidth={1.5} />,
    title: "Documents & compliance",
    capability: "Documents vault · Safety & Compliance",
    description:
      "Every document about your home in a searchable vault. Live traffic-light dashboard for gas, electric, fire, EWS1, EPC.",
    status: "in-build",
  },
];

export function JourneyMap() {
  return (
    <motion.div
      variants={gridStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border-card)] border border-[var(--color-border-card)] rounded-[6px] overflow-hidden"
    >
      {functions.map((f) => (
        <motion.div
          key={f.title}
          variants={tileVariant}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          className="group bg-[var(--color-bg-white)] p-7 flex flex-col gap-4 min-h-[240px] cursor-default"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-[6px] bg-[var(--color-accent-light)] text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]">
              {f.icon}
            </span>
            <StatusPillLight status={f.status} className="shrink-0" />
          </div>
          <h3 className="text-[22px] font-[500] tracking-[-0.4px] text-[var(--color-text-dark)] leading-tight mt-1">
            {f.title}
          </h3>
          <p className="text-[11px] tracking-[1.5px] uppercase text-[var(--color-accent)] font-[500]">
            {f.capability}
          </p>
          <p className="text-[13px] font-[300] leading-relaxed text-[var(--color-text-body)]">
            {f.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
