"use client";

import { useRef, useEffect, useCallback } from "react";
import { Sparkles, Plus, Filter, Calendar, ChevronDown, Check } from "lucide-react";

/* ── Static bar-chart data ────────────────────────────────────────────────── */

const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const barColors = ["#34D399", "#60A5FA", "#F97316", "#EF4444", "#C084FC"];
const barData = [
  [85, 70, 52, 30, 25],
  [62, 78, 42, 20, 28],
  [95, 88, 28, 14, 35],
  [55, 65, 80, 48, 16],
  [75, 82, 68, 58, 42],
  [68, 75, 62, 52, 38],
  [80, 58, 85, 38, 48],
  [65, 92, 44, 25, 30],
  [88, 62, 75, 55, 20],
  [52, 72, 65, 44, 58],
  [98, 80, 34, 19, 42],
  [75, 85, 55, 28, 38],
];

/* ── Compliance row data ──────────────────────────────────────────────────── */

const complianceRows = [
  { label: "Lease extension required", color: "#34D399", pct: 70 },
  { label: "Gas safety certificate",   color: "#F97316", pct: 55 },
  { label: "FRA renewal",              color: "#EF4444", pct: 48 },
  { label: "EPC check",                color: "#60A5FA", pct: 30 },
  { label: "Electrical (EICR)",        color: "#C084FC", pct: 25 },
];

/* ── Single bar ───────────────────────────────────────────────────────────── */

function Bar({ value, color, maxH }: { value: number; color: string; maxH: number }) {
  const height = (value / 100) * maxH;
  return (
    <div
      className="w-[8px] rounded-t-[2px]"
      data-bar-height={height}
      style={{
        height: 0,
        backgroundColor: color,
        transformOrigin: "bottom",
        borderRadius: "2px 2px 0 0",
      }}
    />
  );
}

/* ── Single month column ──────────────────────────────────────────────────── */

function MonthColumn({ bars, month, maxH }: { bars: number[]; month: string; maxH: number }) {
  return (
    <div className="flex flex-col items-center shrink-0" style={{ width: 60 }}>
      <div className="flex items-end gap-[4px]" style={{ height: maxH }}>
        {bars.map((v, i) => (
          <Bar key={i} value={v} color={barColors[i]} maxH={maxH} />
        ))}
      </div>
      <span className="text-[12px] font-[300] text-white/40 mt-4">{month}</span>
    </div>
  );
}

/* ── Grow observer — watches bars entering the chart viewport ─────────── */

function useBarGrowObserver(containerRef: React.RefObject<HTMLDivElement | null>) {
  const observed = useRef(new WeakSet<Element>());

  const animate = useCallback((bar: HTMLElement) => {
    const target = Number(bar.dataset.barHeight) || 0;
    bar.style.transition = "height 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
    bar.style.height = `${target}px`;
  }, []);

  const resetBar = useCallback((bar: HTMLElement) => {
    observed.current.delete(bar);
    bar.style.transition = "none";
    bar.style.height = "0px";
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // The scrolling strip element (the animated flex row)
    const strip = container.querySelector<HTMLElement>("[style*='chart-scroll']");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !observed.current.has(entry.target)) {
            observed.current.add(entry.target);
            const parent = entry.target.parentElement;
            if (parent) {
              const siblings = Array.from(parent.querySelectorAll<HTMLElement>("[data-bar-height]"));
              siblings.forEach((bar, i) => {
                setTimeout(() => animate(bar), i * 150);
              });
            }
          }
          // No reset on exit — bars stay grown until the loop restarts
        }
      },
      {
        root: container,
        rootMargin: "0px -40px 0px 0px",
        threshold: 0.1,
      },
    );

    // Observe the first bar in each month group as a trigger
    const groups = container.querySelectorAll<HTMLElement>("[data-bar-height]:first-child");
    groups.forEach((el) => io.observe(el));

    // On loop restart, reset all bars so set A re-animates cleanly
    const onIteration = () => {
      container.querySelectorAll<HTMLElement>("[data-bar-height]").forEach(resetBar);
    };
    strip?.addEventListener("animationiteration", onIteration);

    return () => {
      io.disconnect();
      strip?.removeEventListener("animationiteration", onIteration);
    };
  }, [containerRef, animate, resetBar]);
}

/* ── Component ────────────────────────────────────────────────────────────── */

export function CornerstoneHeroVisual() {
  const chartRef = useRef<HTMLDivElement>(null);
  useBarGrowObserver(chartRef);

  return (
    <div className="select-none w-[130%] lg:w-[160%] lg:-ml-[15%] relative">
      <div className="relative z-[1] rounded-[12px] border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-6 space-y-5 text-[var(--color-text-primary)] shadow-[0_8px_60px_-12px_rgba(0,0,0,0.6)]">

        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <p className="text-[24px] font-[500] tracking-[-0.3px]">Data intelligence</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-white/10 bg-white/[0.03] text-[13px] font-[400] text-white/60 transition-colors duration-150 cursor-pointer hover:bg-white/[0.08] hover:text-white/80 hover:border-white/20">
              Add alert <Plus size={12} strokeWidth={1.5} />
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-white/10 bg-white/[0.03] text-[13px] font-[400] text-white/60 transition-colors duration-150 cursor-pointer hover:bg-white/[0.08] hover:text-white/80 hover:border-white/20">
              Add workflow <Filter size={12} strokeWidth={1.5} />
            </span>
          </div>
        </div>

        {/* ── Filters ── */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/[0.12] text-[13px] font-[400] text-[var(--color-accent-pale)] transition-colors duration-150 cursor-pointer hover:bg-[var(--color-accent)]/[0.2] hover:border-[var(--color-accent)]/70">
            Compliance alerts
            <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[var(--color-accent)] text-white text-[11px] font-[500]">5</span>
            <ChevronDown size={12} strokeWidth={1.5} />
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/[0.12] text-[13px] font-[400] text-[var(--color-accent-pale)] transition-colors duration-150 cursor-pointer hover:bg-[var(--color-accent)]/[0.2] hover:border-[var(--color-accent)]/70">
            <Calendar size={12} strokeWidth={1.5} />
            1 Jan 2025 – 1 Jan 2026
          </span>
          <span className="inline-flex items-center px-3 py-1.5 rounded-[4px] border border-white/10 bg-white/[0.03] text-[13px] font-[400] text-white/60 transition-colors duration-150 cursor-pointer hover:bg-white/[0.08] hover:text-white/80 hover:border-white/20">
            By week
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-white/10 bg-white/[0.03] text-[13px] font-[400] text-white/60 transition-colors duration-150 cursor-pointer hover:bg-white/[0.08] hover:text-white/80 hover:border-white/20">
            All developments <ChevronDown size={12} strokeWidth={1.5} />
          </span>
        </div>

        {/* ── Chart + Summary row ── */}
        <div className="grid grid-cols-[1fr_0.55fr] gap-3">

          {/* Bar chart card — scrolling ticker */}
          <div ref={chartRef} className="rounded-[8px] border border-white/[0.06] bg-white/[0.02] px-4 py-3 overflow-hidden flex items-center">
            <div
              className="relative flex gap-6"
              style={{
                animation: "chart-scroll 30s linear infinite",
                width: "fit-content",
              }}
            >
              {/* Continuous axis line */}
              <div className="absolute left-0 right-0 bg-white/10 h-px" style={{ top: 120 }} />
              {/* First set */}
              {barData.map((bars, i) => (
                <MonthColumn key={`a-${i}`} bars={bars} month={allMonths[i]} maxH={120} />
              ))}
              {/* Duplicate set for seamless loop */}
              {barData.map((bars, i) => (
                <MonthColumn key={`b-${i}`} bars={bars} month={allMonths[i]} maxH={120} />
              ))}
            </div>
          </div>

          {/* Summary card */}
          <div className="rounded-[8px] border border-white/[0.06] bg-white/[0.02] p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} strokeWidth={1.5} className="text-[var(--color-accent)]" />
              <span className="text-[15px] font-[500]">Summary</span>
            </div>
            <div className="h-px bg-white/[0.06] mb-3" />
            <p className="text-[12px] font-[300] leading-[1.6] text-white/50">
              Portfolio compliance has improved steadily since November, driven by a focused gas safety renewal programme that cleared 46 overdue certificates. <span className="text-[var(--color-accent)] font-[400]">Oakfield Court</span> remains the highest-risk development with failures across gas, EICR, and EPC categories — 12 units have lapsed gas certificates and 8 are missing a valid EPC. <span className="text-[var(--color-accent)] font-[400]">Chapel Mews</span> has 3 units with no EICR on record.
            </p>
          </div>
        </div>

        {/* ── Compliance rows ── */}
        <div className="space-y-2.5 pt-1">
          {complianceRows.map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <span
                className="shrink-0 w-[20px] h-[20px] rounded-[4px] flex items-center justify-center"
                style={{ backgroundColor: row.color + "20", border: `1px solid ${row.color}40` }}
              >
                <Check size={11} strokeWidth={2.5} style={{ color: row.color }} />
              </span>
              <span className="text-[13px] font-[300] text-white/70 w-[180px] shrink-0">{row.label}</span>
              <div className="flex-1 h-[6px] rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${row.pct}%`, backgroundColor: row.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right fade */}
      <div
        className="absolute top-0 right-0 w-[120px] h-full pointer-events-none rounded-r-[12px]"
        style={{ background: "linear-gradient(to right, transparent, var(--color-bg-primary))" }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none rounded-b-[12px]"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-bg-primary))" }}
      />
    </div>
  );
}
