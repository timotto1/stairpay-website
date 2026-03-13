"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";

interface Product {
  name: string;
  tagline: string;
  description: string;
  href: string;
  illustration: string;
  video?: string;
}

interface ProductShowcaseProps {
  products: Product[];
}

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProductShowcase({ products }: ProductShowcaseProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((idx: number) => {
    setExpandedIndex((prev) => {
      const next = prev === idx ? null : idx;
      if (next !== null && gridRef.current) {
        // Wait a tick for the layout to start animating, then scroll grid to centre
        setTimeout(() => {
          gridRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 50);
      }
      return next;
    });
  }, []);

  const rows = [products.slice(0, 3), products.slice(3, 6)];
  const expandedRow = expandedIndex !== null ? Math.floor(expandedIndex / 3) : null;

  return (
    <section data-theme="light" className="bg-[var(--color-bg-white)] pt-12 md:pt-16 pb-24 md:pb-32">
      <Container>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-[32px] md:text-[40px] font-[300] tracking-[-0.5px] text-[var(--color-text-dark)]"
        >
          Our Software
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-4 mb-10 md:mb-12 text-[15px] md:text-[16px] font-[300] leading-[1.6] text-[var(--color-text-body-light)]"
        >
          End-to-end shared ownership automation — from first sale through staircasing to full ownership.
        </motion.p>
      </Container>

      {/* Full-width edge-to-edge grid — fixed total height */}
      <div ref={gridRef} className="h-[560px] md:h-[680px] flex flex-col">
        {/* Top border */}
        <div className="h-px bg-[var(--color-border-light)] flex-shrink-0" />

        {rows.map((row, rowIdx) => {
          const rowExpandedColIdx = expandedIndex !== null && Math.floor(expandedIndex / 3) === rowIdx
            ? expandedIndex % 3
            : null;

          let rowFlex = 1;
          if (expandedRow !== null) {
            rowFlex = expandedRow === rowIdx ? 5 : 0.55;
          }
          const isCompressedRow = expandedRow !== null && expandedRow !== rowIdx;

          return (
            <motion.div
              key={rowIdx}
              animate={{ flex: rowFlex }}
              transition={{ duration: expandedIndex !== null ? 1.2 : 0.5, ease: EASE }}
              className="flex flex-col overflow-hidden"
              style={{ minHeight: 0 }}
            >
              <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>
                {row.map((product, colIdx) => {
                  const globalIdx = rowIdx * 3 + colIdx;
                  const isExpanded = expandedIndex === globalIdx;
                  const someInRowExpanded = rowExpandedColIdx !== null;

                  let flexVal = 1;
                  if (someInRowExpanded) {
                    flexVal = isExpanded ? 5 : 0.4;
                  }

                  return (
                    <motion.div
                      key={product.name}
                      animate={{ flex: flexVal }}
                      transition={{ duration: expandedIndex !== null ? 1.2 : 0.5, ease: EASE }}
                      className="relative overflow-hidden h-full"
                      style={{ minWidth: 0 }}
                    >
                      <div
                        className="block h-full cursor-pointer"
                        onClick={() => handleClick(globalIdx)}
                      >
                        <div
                          className={`relative h-full overflow-hidden transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isExpanded ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]"
                          } ${colIdx < 2 ? "border-r border-[var(--color-border-light)]" : ""}`}
                        >
                          {/* SVG illustration — background, large, pushed top-right, clipped */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.15 }}
                                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                transition={{ duration: 1, ease: EASE }}
                                className="absolute -top-[20%] -right-[10%] w-[130%] h-[130%] pointer-events-none"
                              >
                                <Image
                                  src={product.illustration}
                                  alt=""
                                  fill
                                  className="object-contain"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Product video — centre-right area */}
                          <AnimatePresence>
                            {isExpanded && product.video && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
                                transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                                className="absolute top-[8%] right-[4%] bottom-[28%] w-[55%] z-10 rounded-[4px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
                              >
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  ref={(el) => { if (el) el.playbackRate = 1.5; }}
                                  className="w-full h-full object-cover"
                                  src={product.video}
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Description in top-left when expanded */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0 } }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                                className="absolute top-0 left-0 right-0 p-6 md:p-8 z-10 max-w-[440px] text-[14px] md:text-[15px] font-[300] leading-[1.6] text-[#26045D]"
                              >
                                {product.description}
                              </motion.p>
                            )}
                          </AnimatePresence>

                          {/* "Learn more" link — visible when expanded */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0 } }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                                className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10"
                              >
                                <Link
                                  href={product.href}
                                  className="text-[13px] font-[500] tracking-wide uppercase text-[#26045D] hover:text-[var(--color-accent)] transition-colors duration-150"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Learn more &rarr;
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Title + tagline pinned to bottom */}
                          <div
                            className="absolute bottom-0 left-0 right-0 z-10"
                            style={{ padding: isCompressedRow ? "0 16px 10px" : "0 24px 24px" }}
                          >
                            <span
                              className={`block font-[400] tracking-[-0.02em] leading-[1] whitespace-nowrap transition-[font-size,color] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isExpanded
                                  ? "text-[28px] md:text-[36px] text-[#26045D]"
                                  : expandedIndex !== null
                                  ? "text-[13px] md:text-[15px] text-[var(--color-text-muted)]"
                                  : "text-[24px] md:text-[32px] text-[var(--color-text-dark)]"
                              }`}
                            >
                              {product.name}
                            </span>

                            {/* Tagline — visible when expanded or nothing is expanded */}
                            {!isCompressedRow && (
                              <p
                                className={`mt-2 max-w-[300px] text-[12px] md:text-[13px] font-[300] leading-[1.5] text-[var(--color-text-body-light)] transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                  isExpanded || expandedIndex === null ? "opacity-100" : "opacity-0"
                                }`}
                              >
                                {product.tagline}
                              </p>
                            )}

                            {/* Subtle hint — only when nothing is expanded */}
                            {expandedIndex === null && !isCompressedRow && (
                              <p className="mt-3 text-[11px] font-[400] tracking-[0.5px] uppercase text-[var(--color-text-muted)] opacity-50">
                                Click to explore
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              {/* Row border */}
              <div className="h-px bg-[var(--color-border-light)] flex-shrink-0" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
