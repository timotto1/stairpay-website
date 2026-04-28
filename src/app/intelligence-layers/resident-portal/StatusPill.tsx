import type { ReactNode } from "react";

export type Status = "live" | "live-q2-2026" | "live-q3-2026" | "in-build" | "in-active-build";

interface StatusPillProps {
  status: Status;
  className?: string;
}

const config: Record<Status, { label: string; classes: string }> = {
  live: {
    label: "Live",
    classes: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  "live-q2-2026": {
    label: "Live Q2 2026",
    classes: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  },
  "live-q3-2026": {
    label: "Live Q3 2026",
    classes: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  },
  "in-build": {
    label: "In Build",
    classes: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  "in-active-build": {
    label: "In Active Build",
    classes: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
};

export function StatusPill({ status, className = "" }: StatusPillProps): ReactNode {
  const { label, classes } = config[status];
  return (
    <span
      className={`inline-flex items-center text-[10px] font-[600] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full border ${classes} ${className}`}
    >
      {label}
    </span>
  );
}

/** Light-theme variant for use on white tiles. */
export function StatusPillLight({ status, className = "" }: StatusPillProps): ReactNode {
  const { label } = config[status];
  const lightClasses: Record<Status, string> = {
    live: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "live-q2-2026": "bg-sky-50 text-sky-700 border-sky-200",
    "live-q3-2026": "bg-sky-50 text-sky-700 border-sky-200",
    "in-build": "bg-amber-50 text-amber-800 border-amber-200",
    "in-active-build": "bg-amber-50 text-amber-800 border-amber-200",
  };
  return (
    <span
      className={`inline-flex items-center text-[10px] font-[600] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full border ${lightClasses[status]} ${className}`}
    >
      {label}
    </span>
  );
}
