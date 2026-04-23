"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { AnimatedUploadHeadline } from "@/components/sections/AnimatedUploadHeadline";
import {
  CornerstonePulseCanvas,
  type CornerstonePulseCanvasHandle,
} from "@/components/sections/CornerstonePulseCanvas";

interface Particle {
  path: string;
  length: number;
  entryOffset: number;
  entryX: number;
  entryY: number;
  delay: number;
  duration: number;
}

interface CsBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

const TRAIL_COUNT = 28;
const TRAIL_STEP_S = 0.036;
const TRAIL_DASH = 3;

const HEAD_OPACITY = 0.18;

const TRAIL_LAYERS = Array.from({ length: TRAIL_COUNT }, (_, j) => {
  const t = j / (TRAIL_COUNT - 1);
  return {
    delay: j * TRAIL_STEP_S,
    opacity: HEAD_OPACITY * Math.pow(1 - t, 3.6),
    width: 2.0 - t * 0.8,
  };
});

function measurePathLength(d: string): number {
  if (typeof document === "undefined") return 0;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("style", "position:absolute;width:0;height:0;overflow:hidden");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  svg.appendChild(path);
  document.body.appendChild(svg);
  const len = path.getTotalLength();
  document.body.removeChild(svg);
  return len;
}

const documents = [
  {
    name: "Leases",
    description: "Ownership %, rent, lease length, dates",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    name: "EPCs",
    description: "Rating, expiry, recommendations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    name: "Fire risk assessments",
    description: "Risk rating, actions, review dates",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
      </svg>
    ),
  },
  {
    name: "EWS1 forms",
    description: "Outcome, cladding status, sign-off",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    name: "Title deeds",
    description: "Freeholder, tenure, title number",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    name: "Valuations",
    description: "Value, date, surveyor",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: "Section 125 notices",
    description: "Price, service charges, discounts",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 12l-2 4h8l-2-4" />
      </svg>
    ),
  },
  {
    name: "Rent statements",
    description: "Payments, arrears, charge breakdown",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
        <path d="M16 3v18" />
        <path d="M8 8h4" />
        <path d="M8 12h4" />
        <path d="M8 16h4" />
      </svg>
    ),
  },
];

export function DocumentExtraction() {
  const gridRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<Array<HTMLDivElement | null>>([]);
  const bottomBoxRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const cornerstoneRef = useRef<HTMLDivElement>(null);
  const pulseCanvasRef = useRef<CornerstonePulseCanvasHandle>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [csBounds, setCsBounds] = useState<CsBounds | null>(null);

  useEffect(() => {
    const measure = () => {
      const grid = gridRef.current;
      const cs = cornerstoneRef.current;
      if (!grid || !cs) return;
      const gRect = grid.getBoundingClientRect();
      const csRect = cs.getBoundingClientRect();
      const csX = csRect.left + csRect.width / 2 - gRect.left;
      const csY = csRect.top + csRect.height / 2 - gRect.top;
      setCsBounds({
        left: csRect.left - gRect.left,
        top: csRect.top - gRect.top,
        width: csRect.width,
        height: csRect.height,
      });

      const centers: Array<{ x: number; y: number } | null> = [];
      for (let i = 0; i < 4; i++) {
        const box = boxRefs.current[i];
        if (!box) {
          centers.push(null);
          continue;
        }
        const bRect = box.getBoundingClientRect();
        centers.push({
          x: bRect.left + bRect.width / 2 - gRect.left,
          y: bRect.top + bRect.height / 2 - gRect.top,
        });
      }

      const gutterX: (number | null)[] = [null, null, null, null];
      if (centers[0] && centers[1]) {
        const g01 = (centers[0].x + centers[1].x) / 2;
        gutterX[0] = g01;
        gutterX[1] = g01;
      }
      if (centers[2] && centers[3]) {
        const g23 = (centers[2].x + centers[3].x) / 2;
        gutterX[2] = g23;
        gutterX[3] = g23;
      }

      const TEXT_PADDING = 10;
      let textBottomY = 0;
      for (let i = 0; i < 4; i++) {
        const tc = containerRefs.current[i];
        if (!tc) continue;
        const tRect = tc.getBoundingClientRect();
        const b = tRect.bottom - gRect.top;
        if (b > textBottomY) textBottomY = b;
      }
      const csTopY = csRect.top - gRect.top;
      const corridorMinY = textBottomY + TEXT_PADDING;
      const corridorMaxY = csTopY - 4;
      const corridorSpan = Math.max(0, corridorMaxY - corridorMinY);

      const corridorTs = [0.15, 0.85, 0.65, 0.4];
      const delays = [0, 2.8, 1.2, 4.2];
      const durations = [5.4, 6.3, 4.7, 7.2];

      const next: Particle[] = [];
      for (let i = 0; i < 4; i++) {
        const c = centers[i];
        const gX = gutterX[i];
        if (!c || gX === null) continue;
        const corridorY = corridorMinY + corridorSpan * corridorTs[i];
        const d = `M ${c.x.toFixed(1)},${c.y.toFixed(1)} L ${gX.toFixed(1)},${c.y.toFixed(1)} L ${gX.toFixed(1)},${corridorY.toFixed(1)} L ${csX.toFixed(1)},${corridorY.toFixed(1)} L ${csX.toFixed(1)},${csY.toFixed(1)}`;
        const entryOffset =
          Math.abs(gX - c.x) +
          Math.abs(corridorY - c.y) +
          Math.abs(csX - gX) +
          (csTopY - corridorY);
        next.push({
          path: d,
          length: measurePathLength(d),
          entryOffset,
          entryX: csX,
          entryY: csTopY,
          delay: delays[i] + Math.random() * 3.5,
          duration: durations[i] + Math.random() * 2.5,
        });
      }

      const bottomCenters: Array<{ x: number; y: number; topY: number } | null> =
        [];
      for (let i = 0; i < 4; i++) {
        const box = bottomBoxRefs.current[i];
        if (!box) {
          bottomCenters.push(null);
          continue;
        }
        const bRect = box.getBoundingClientRect();
        bottomCenters.push({
          x: bRect.left + bRect.width / 2 - gRect.left,
          y: bRect.top + bRect.height / 2 - gRect.top,
          topY: bRect.top - gRect.top,
        });
      }

      const csBottomY = csRect.bottom - gRect.top;
      let bottomIconsTopY = Infinity;
      for (const c of bottomCenters) {
        if (c && c.topY < bottomIconsTopY) bottomIconsTopY = c.topY;
      }
      if (bottomIconsTopY !== Infinity) {
        const corridorBelowMin = csBottomY + 4;
        const corridorBelowMax = bottomIconsTopY - 6;
        const corridorBelowSpan = Math.max(0, corridorBelowMax - corridorBelowMin);
        const bottomCorridorTs = [0.2, 0.8, 0.6, 0.35];
        const bottomDelays = [1.8, 5.2, 3.0, 6.4];
        const bottomDurations = [5.9, 6.6, 5.0, 7.1];

        for (let i = 0; i < 4; i++) {
          const bc = bottomCenters[i];
          const gX = gutterX[i];
          if (!bc || gX === null) continue;
          const corridorBelowY =
            corridorBelowMin + corridorBelowSpan * bottomCorridorTs[i];
          const d = `M ${bc.x.toFixed(1)},${bc.y.toFixed(1)} L ${gX.toFixed(1)},${bc.y.toFixed(1)} L ${gX.toFixed(1)},${corridorBelowY.toFixed(1)} L ${csX.toFixed(1)},${corridorBelowY.toFixed(1)} L ${csX.toFixed(1)},${csY.toFixed(1)}`;
          const entryOffset =
            Math.abs(gX - bc.x) +
            Math.abs(bc.y - corridorBelowY) +
            Math.abs(csX - gX) +
            (corridorBelowY - csBottomY);
          next.push({
            path: d,
            length: measurePathLength(d),
            entryOffset,
            entryX: csX,
            entryY: csBottomY,
            delay: bottomDelays[i] + Math.random() * 3.5,
            duration: bottomDurations[i] + Math.random() * 2.5,
          });
        }
      }

      setParticles(next);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (gridRef.current) ro.observe(gridRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (particles.length === 0) return;
    const timers: number[] = [];

    particles.forEach((p) => {
      const entryFraction = p.length > 0 ? p.entryOffset / p.length : 0;
      const firstMs = (p.delay + entryFraction * p.duration) * 1000;
      const periodMs = p.duration * 1000;

      const fire = () => pulseCanvasRef.current?.trigger(p.entryX, p.entryY);

      const kick = window.setTimeout(() => {
        fire();
        const interval = window.setInterval(fire, periodMs);
        timers.push(interval);
      }, firstMs);
      timers.push(kick);
    });

    return () => {
      timers.forEach((t) => {
        window.clearTimeout(t);
        window.clearInterval(t);
      });
    };
  }, [particles]);

  return (
    <section className="bg-[#0A0A0A] py-24">
      <Container>
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <AnimatedUploadHeadline
            className="text-h2 text-white"
            sentence1="Upload anything."
            sentence2Parts={["Cornerstone ", "reads ", "everything."]}
          />
          <p className="text-body mt-5 text-[rgba(255,255,255,0.5)]">
            Drop in the documents you already have — Cornerstone extracts the
            data that matters and structures it automatically.
          </p>
        </div>

        <div
          ref={gridRef}
          className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
        >
          {documents.slice(0, 4).map((doc, i) => (
            <div
              key={doc.name}
              ref={(el) => {
                containerRefs.current[i] = el;
              }}
              className="relative z-[1] text-center"
            >
              <div
                ref={(el) => {
                  boxRefs.current[i] = el;
                }}
                className="peer inline-flex items-center justify-center w-16 h-16 rounded border border-[rgba(255,255,255,0.12)] bg-[#0A0A0A] text-[rgba(255,255,255,0.5)] mb-4 transition-all duration-300 hover:border-[rgba(230,220,255,0.3)] hover:text-white hover:[box-shadow:0_0_8px_rgba(230,220,255,0.08)]"
              >
                {doc.icon}
              </div>
              <h3 className="text-white text-[15px] font-medium leading-snug">
                {doc.name}
              </h3>
              <p className="text-[rgba(255,255,255,0.4)] peer-hover:text-[rgba(255,255,255,0.6)] transition-colors duration-300 text-[13px] leading-relaxed mt-1.5">
                {doc.description}
              </p>
            </div>
          ))}

          <div
            ref={cornerstoneRef}
            className="relative z-[1] col-span-2 md:col-span-4 flex items-center justify-center h-14 rounded border border-[rgba(255,255,255,0.12)] bg-[#0A0A0A] text-[rgba(255,255,255,0.5)] tracking-[0.02em] text-[15px] font-medium transition-all duration-300 hover:border-[rgba(230,220,255,0.3)] hover:text-white hover:[box-shadow:0_0_8px_rgba(230,220,255,0.08)]"
          >
            Cornerstone
          </div>

          {csBounds && (
            <CornerstonePulseCanvas ref={pulseCanvasRef} {...csBounds} />
          )}

          <svg
            className="pointer-events-none absolute inset-0 z-0 overflow-visible"
            width="100%"
            height="100%"
          >
            <defs>
              <filter
                id="cornerstone-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {particles.flatMap((p, i) =>
              TRAIL_LAYERS.map((layer, j) => (
                <path
                  key={`${i}-${j}`}
                  d={p.path}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={layer.width}
                  strokeLinecap="round"
                  strokeOpacity={layer.opacity}
                  filter={j === 0 ? "url(#cornerstone-glow)" : undefined}
                  style={{
                    strokeDasharray: `${TRAIL_DASH} ${p.length + TRAIL_DASH + 40}`,
                    animationName: `cornerstone-dash-${i}`,
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay + layer.delay}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                  }}
                />
              )),
            )}
          </svg>

          {documents.slice(4).map((doc, i) => (
            <div key={doc.name} className="relative z-[1] text-center">
              <div
                ref={(el) => {
                  bottomBoxRefs.current[i] = el;
                }}
                className="peer inline-flex items-center justify-center w-16 h-16 rounded border border-[rgba(255,255,255,0.12)] bg-[#0A0A0A] text-[rgba(255,255,255,0.5)] mb-4 transition-all duration-300 hover:border-[rgba(230,220,255,0.3)] hover:text-white hover:[box-shadow:0_0_8px_rgba(230,220,255,0.08)]"
              >
                {doc.icon}
              </div>
              <h3 className="text-white text-[15px] font-medium leading-snug">
                {doc.name}
              </h3>
              <p className="text-[rgba(255,255,255,0.4)] peer-hover:text-[rgba(255,255,255,0.6)] transition-colors duration-300 text-[13px] leading-relaxed mt-1.5">
                {doc.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <style>{particles
        .map(
          (p, i) => `
            @keyframes cornerstone-dash-${i} {
              from { stroke-dashoffset: ${TRAIL_DASH}; }
              to   { stroke-dashoffset: ${(TRAIL_DASH - p.length).toFixed(1)}; }
            }
          `,
        )
        .join("")}</style>
    </section>
  );
}
