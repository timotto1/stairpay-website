"use client";

import { useEffect, useRef } from "react";

interface LogoTickerProps {
  logos: string[];
  speed?: number;
}

export function LogoTicker({ logos, speed = 20 }: LogoTickerProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let raf: number;

    function tick() {
      offset -= speed / 60;
      const halfWidth = track!.scrollWidth / 2;
      if (Math.abs(offset) >= halfWidth) offset += halfWidth;
      track!.style.transform = `translateX(${offset}px)`;
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  // Duplicate the list so the scroll appears infinite
  const items = [...logos, ...logos];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
      <div className="py-6">
        <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center mx-8 md:mx-14 text-[19px] font-[600] tracking-[2px] text-white uppercase select-none shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
