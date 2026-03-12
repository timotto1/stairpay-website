"use client";

import { useState, useRef, useCallback } from "react";
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
}

interface ProductShowcaseProps {
  products: Product[];
}

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProductShowcase({ products }: ProductShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounce the null so moving between tiles doesn't flash through the default state
  const handleEnter = useCallback((idx: number) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setHoveredIndex(idx);
  }, []);

  const handleLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 30);
  }, []);

  const rows = [products.slice(0, 3), products.slice(3, 6)];
  const hoveredRow = hoveredIndex !== null ? Math.floor(hoveredIndex / 3) : null;

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
      <div className="h-[560px] md:h-[680px] flex flex-col">
        {/* Top border */}
        <div className="h-px bg-[var(--color-border-light)] flex-shrink-0" />

        {rows.map((row, rowIdx) => {
          const rowHoveredColIdx = hoveredIndex !== null && Math.floor(hoveredIndex / 3) === rowIdx
            ? hoveredIndex % 3
            : null;

          let rowFlex = 1;
          if (hoveredRow !== null) {
            rowFlex = hoveredRow === rowIdx ? 3 : 0.6;
          }

          return (
            <motion.div
              key={rowIdx}
              animate={{ flex: rowFlex }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col overflow-hidden"
              style={{ minHeight: 0 }}
            >
              <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>
                {row.map((product, colIdx) => {
                  const globalIdx = rowIdx * 3 + colIdx;
                  const isHovered = hoveredIndex === globalIdx;
                  const someInRowHovered = rowHoveredColIdx !== null;

                  let flexVal = 1;
                  if (someInRowHovered) {
                    flexVal = isHovered ? 3 : 0.5;
                  }

                  return (
                    <motion.div
                      key={product.name}
                      animate={{ flex: flexVal }}
                      transition={{ duration: 0.6, ease: EASE }}
                      className="relative overflow-hidden h-full"
                      style={{ minWidth: 0 }}
                    >
                      <Link
                        href={product.href}
                        className="block h-full"
                        onMouseEnter={() => handleEnter(globalIdx)}
                        onMouseLeave={handleLeave}
                      >
                        <div
                          className={`relative h-full transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isHovered ? "bg-[#F5F5F5]" : ""
                          } ${colIdx < 2 ? "border-r border-[var(--color-border-light)]" : ""}`}
                        >
                          {/* SVG illustration — visible on hover */}
                          <AnimatePresence>
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.85 }}
                                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                transition={{ duration: 0.55, ease: EASE }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                              >
                                <div className="relative w-[60%] h-[60%]">
                                  <Image
                                    src={product.illustration}
                                    alt=""
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Description in top-left on hover */}
                          <AnimatePresence>
                            {isHovered && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0 } }}
                                transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                                className="absolute top-0 left-0 right-0 p-6 md:p-8 z-10 max-w-[440px] text-[14px] md:text-[15px] font-[300] leading-[1.6] text-[#26045D]"
                              >
                                {product.description}
                              </motion.p>
                            )}
                          </AnimatePresence>

                          {/* Title + tagline pinned to bottom-left */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                            <span
                              className={`block font-[400] tracking-[-0.02em] leading-[1] whitespace-nowrap transition-[font-size,color] duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isHovered
                                  ? "text-[32px] md:text-[44px] text-[var(--color-accent)]"
                                  : hoveredIndex !== null
                                  ? "text-[18px] md:text-[24px] text-[var(--color-text-muted)]"
                                  : "text-[24px] md:text-[32px] text-[var(--color-text-dark)]"
                              }`}
                            >
                              {product.name}
                            </span>

                            {/* Short tagline — hidden when others hovered */}
                            <p
                              className={`mt-2 max-w-[300px] text-[12px] md:text-[13px] font-[300] leading-[1.5] text-[var(--color-text-body-light)] transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isHovered || hoveredIndex === null ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              {product.tagline}
                            </p>
                          </div>
                        </div>
                      </Link>
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
