"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { fadeUp, viewport } from "@/lib/animations";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Stairpay transformed the way we manage our shared ownership pipeline. What used to take days now takes minutes.",
    name: "Sarah Mitchell",
    role: "Head of Sales",
    company: "Clarion Housing",
  },
  {
    quote:
      "The lease intelligence layer alone has saved our team hundreds of hours. We finally have visibility across the entire portfolio.",
    name: "James Turner",
    role: "Director of Homeownership",
    company: "Southern Housing",
  },
  {
    quote:
      "We went from managing staircasing in spreadsheets to a fully governed, automated process. The impact on revenue has been significant.",
    name: "Rachel Adams",
    role: "Head of Aftersales",
    company: "Settle Group",
  },
  {
    quote:
      "The compliance dashboards give our board real-time confidence. We no longer scramble before audits.",
    name: "David Okonkwo",
    role: "Chief Operating Officer",
    company: "Paradigm Housing",
  },
  {
    quote:
      "Stairpay is the first platform that truly understands the shared ownership lifecycle end to end. It's become indispensable.",
    name: "Emma Richardson",
    role: "Managing Director",
    company: "Auxesia Homes",
  },
  {
    quote:
      "Rent-setting across 4,000 units used to be a three-month project. Now it's done in a week with full audit trails.",
    name: "Mark Stevens",
    role: "Head of Finance",
    company: "Green Square Accord",
  },
  {
    quote:
      "The single source of truth across sales, finance, and compliance has completely changed how our departments collaborate.",
    name: "Laura Chen",
    role: "Programme Director",
    company: "Platform Housing",
  },
  {
    quote:
      "We identified over £2M in staircasing opportunities within the first quarter. The ROI was immediate.",
    name: "Tom Bradley",
    role: "Head of Asset Strategy",
    company: "Midland Heart",
  },
];

export function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let raf: number;
    const speed = 15; // px per second

    function tick() {
      offset -= speed / 60;
      const halfWidth = track!.scrollWidth / 2;
      if (Math.abs(offset) >= halfWidth) offset += halfWidth;
      track!.style.transform = `translateX(${offset}px)`;
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-white)] overflow-hidden">
      <div className="h-px bg-gray-200 mb-14 md:mb-20" />
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-3xl md:text-4xl font-semibold text-center text-[var(--color-foreground)] mb-14"
        >
          What our customers say
        </motion.h2>
      </Container>

      <div>
        <div ref={trackRef} className="flex will-change-transform">
          {items.map((t, i) => (
            <div
              key={`${t.company}-${i}`}
              className="group shrink-0 w-[360px] h-[260px] mx-3 rounded-[6px] border border-[var(--color-border-light)] bg-white p-8 flex flex-col overflow-hidden cursor-default transition-[border-color,background-color] duration-200 hover:border-[#111] hover:bg-[#FAFAFA]"
            >
              <p className="text-[11px] font-[500] uppercase tracking-[1.5px] text-[var(--color-text-muted)] mb-4">
                {t.company}
              </p>

              {/* Pushes quote to the bottom; shrinks on hover to make room for name */}
              <div className="flex-1 transition-[flex] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:flex-[0]" />

              <p className="text-[15px] font-[300] leading-[1.65] text-[var(--color-text-body)] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="max-h-0 opacity-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-16 group-hover:opacity-100 group-hover:mt-4">
                <p className="text-[14px] font-[400] text-[var(--color-text-dark)]">{t.name}</p>
                <p className="text-[12px] font-[300] text-[var(--color-text-muted)]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
