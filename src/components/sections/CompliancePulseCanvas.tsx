"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface CompliancePulseCanvasHandle {
  trigger: (x: number, y: number) => void;
}

interface Props {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface Pulse {
  id: number;
  x: number;
  edge: "top" | "bottom";
}

const STRIP_WIDTH = 240;
const PULSE_LIFETIME_MS = 820;

export const CompliancePulseCanvas = forwardRef<
  CompliancePulseCanvasHandle,
  Props
>(function CompliancePulseCanvas({ left, top, width, height }, ref) {
  const [pulses, setPulses] = useState<Pulse[]>([]);
  const nextIdRef = useRef(0);
  const dimsRef = useRef({ left, top, width, height });

  useEffect(() => {
    dimsRef.current = { left, top, width, height };
  }, [left, top, width, height]);

  useImperativeHandle(
    ref,
    () => ({
      trigger: (x, y) => {
        const localX = x - dimsRef.current.left;
        const localY = y - dimsRef.current.top;
        const edge: "top" | "bottom" =
          localY > dimsRef.current.height / 2 ? "bottom" : "top";
        const id = ++nextIdRef.current;
        setPulses((prev) => [...prev, { id, x: localX, edge }]);
        window.setTimeout(() => {
          setPulses((prev) => prev.filter((p) => p.id !== id));
        }, PULSE_LIFETIME_MS + 60);
      },
    }),
    [],
  );

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        zIndex: 3,
      }}
    >
      {pulses.map((p) => (
        <span
          key={p.id}
          className={`compliance-pulse-strip compliance-pulse-strip--${p.edge}`}
          style={{ left: `${p.x - STRIP_WIDTH / 2}px` }}
        />
      ))}
      <style>{`
        .compliance-pulse-strip {
          position: absolute;
          width: ${STRIP_WIDTH}px;
          height: 12px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0.55) 18%,
            rgba(230, 220, 255, 0.2) 45%,
            rgba(230, 220, 255, 0) 80%
          );
          transform-origin: center center;
          animation: compliance-pulse-spread ${PULSE_LIFETIME_MS}ms cubic-bezier(0.2, 0.85, 0.3, 1) forwards;
          will-change: transform, opacity;
          pointer-events: none;
        }
        .compliance-pulse-strip--top    { top: -5px; }
        .compliance-pulse-strip--bottom { bottom: -5px; }
        @keyframes compliance-pulse-spread {
          0%   { opacity: 0;   transform: scaleX(0.15); }
          14%  { opacity: 1;   transform: scaleX(0.4); }
          100% { opacity: 0;   transform: scaleX(1.0); }
        }
      `}</style>
    </div>
  );
});
