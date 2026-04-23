"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { ContactPanel } from "@/components/ui/ContactPanel";
import type { Insight } from "@/lib/content/types";

// ─── Data ─────────────────────────────────────────────────────────────────────

const mainNav = [
  { label: "Data Intelligence", href: "/intelligence-layers/lease", product: true },
  { label: "Aftersales", href: "/intelligence-layers/aftersales", product: true },
  { label: "Sales", href: "/intelligence-layers/sales", product: true },
  { label: "Insights", href: "/insights", product: false },
  { label: "Company", href: "/company/about", product: false },
];

const quickLinks = [
  { label: "About", href: "/company/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Animation variants ───────────────────────────────────────────────────────


const overlayVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit:    { opacity: 0, transition: { duration: 0.2  } },
};

const navListVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.12 } },
  exit:    { transition: { staggerChildren: 0.03  } },
};

const navItemVariants: Variants = {
  hidden:  { opacity: 0, x: -18 },
  visible: { opacity: 1, x:   0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, x: -10, transition: { duration: 0.15 } },
};

const colVariants: Variants = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y:  0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0,        transition: { duration: 0.15 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

interface GlobalNavClientProps {
  latestInsights: Insight[];
  featuredInsight: Insight | null;
}

export function GlobalNavClient({
  latestInsights,
  featuredInsight,
}: GlobalNavClientProps) {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overLight, setOverLight] = useState(false);

  // Detect scroll so bar can subtly increase opacity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect whether the nav bar is over a light or dark section
  useEffect(() => {
    const probe = () => {
      // Sample point: centre-x of viewport, 40px down (middle of the 56px-tall bar)
      const x = window.innerWidth / 2;
      const y = 40;
      // Temporarily hide the header so elementFromPoint hits the section beneath
      const header = document.querySelector("header");
      if (header) (header as HTMLElement).style.pointerEvents = "none";
      const el = document.elementFromPoint(x, y);
      if (header) (header as HTMLElement).style.pointerEvents = "";
      if (!el) return;
      const section = el.closest("[data-theme]");
      setOverLight(section?.getAttribute("data-theme") === "light");
    };

    probe();
    const onScroll = () => requestAnimationFrame(probe);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", probe, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", probe);
    };
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = (open || contactOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, contactOpen]);

  // Escape key to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setContactOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Floating bar ── always on top ─────────────────────────────────── */}
      <header
        className={`fixed top-3 left-3 right-3 z-[100] rounded-[4px] border transition-all duration-[250ms] ${
          open
            ? "bg-[rgba(255,255,255,0.9)] border-[rgba(0,0,0,0.08)] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            : scrolled
            ? "bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.1)] shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            : "bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.08)] shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
        }`}
        style={{ backdropFilter: "blur(16px) saturate(1.4)", WebkitBackdropFilter: "blur(16px) saturate(1.4)" }}
      >
        <div className="flex items-center justify-between h-[56px] px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={close}
            className={`font-[600] text-[18px] tracking-[-0.5px] hover:opacity-75 transition-all duration-[250ms] ${
              open ? "text-[var(--color-accent)]" : overLight ? "text-[var(--color-accent)]" : "text-white"
            }`}
          >
            Stairpay
          </Link>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* CTA — hidden on very small screens */}
            <div className="hidden sm:block">
              <Button size="sm" variant="solid-white" onClick={() => { close(); setContactOpen(true); }} arrow>
                Book a Strategic Review
              </Button>
            </div>

            {/* Search */}
            <IconButton
              variant={!open && !overLight ? "outline-dark" : "solid-white"}
              aria-label="Search"
            >
              <Search size={16} strokeWidth={1.5} />
            </IconButton>

            {/* Hamburger / X */}
            <IconButton
              onClick={() => setOpen((v) => !v)}
              variant={!open && !overLight ? "outline-dark" : "solid-white"}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{   rotate:  45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <X size={18} strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 45,  opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{   rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <Menu size={18} strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </IconButton>
          </div>
        </div>
      </header>

      {/* ── Full-screen overlay ────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[90] bg-white flex flex-col overflow-y-auto"
          >
            {/* Spacer — clears the floating bar */}
            <div className="h-[76px] flex-shrink-0" />

            {/* ── Main grid ───────────────────────────────────────────────── */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_0.9fr] border-t border-[var(--color-border-light)]">

              {/* LEFT — Navigation */}
              <div className="px-10 md:px-14 py-12 lg:border-r border-[var(--color-border-light)]">
                <p className="text-eyebrow text-[var(--color-text-muted)] mb-10">
                  Navigation
                </p>

                <motion.nav
                  variants={navListVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-1"
                >
                  {mainNav.map((item) => (
                    <motion.div key={item.label} variants={navItemVariants}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className="group flex items-center gap-4 py-3 text-[28px] md:text-[32px] font-[400] text-[var(--color-text-dark)] hover:text-[var(--color-text-muted)] transition-colors duration-[150ms] leading-none"
                      >
                        {item.product ? (
                          <span
                            className="text-[20px] md:text-[24px] font-[300] text-[var(--color-text-dark)] group-hover:text-[var(--color-text-muted)] transition-colors duration-[150ms] select-none leading-none"
                            aria-hidden="true"
                          >
                            ↳
                          </span>
                        ) : (
                          <span className="w-[20px] md:w-[24px]" aria-hidden="true" />
                        )}
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>

              {/* MIDDLE — Latest Insights */}
              <motion.div
                variants={colVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: 0.18 }}
                className="px-10 md:px-12 py-12 lg:border-r border-[var(--color-border-light)] border-t lg:border-t-0"
              >
                <div className="flex items-center justify-between mb-10">
                  <p className="text-eyebrow text-[var(--color-text-muted)]">
                    Latest Insights
                  </p>
                  <Link
                    href="/insights"
                    onClick={close}
                    className="flex items-center gap-1.5 text-[11px] font-[500] tracking-[1.5px] uppercase text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-[150ms] group"
                  >
                    View All
                    <ArrowRight
                      size={11}
                      strokeWidth={2}
                      className="group-hover:translate-x-0.5 transition-transform duration-[150ms]"
                    />
                  </Link>
                </div>

                <div className="space-y-7">
                  {latestInsights.map((card) => (
                    <Link
                      key={card.slug}
                      href={card.href}
                      onClick={close}
                      className="group block"
                    >
                      {/* Thumbnail — cover image if present, gradient placeholder otherwise */}
                      <div className="w-full aspect-[16/7] rounded-[6px] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] mb-3 overflow-hidden group-hover:border-[var(--color-accent)] transition-colors duration-[200ms]">
                        {card.coverImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={card.coverImage}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[rgba(113,20,226,0.08)] to-transparent" />
                        )}
                      </div>
                      <p className="text-eyebrow text-[var(--color-text-muted)] mb-1.5">
                        {card.dateDisplay}
                      </p>
                      <p className="text-[14px] font-[300] leading-snug text-[var(--color-text-body)] group-hover:text-[var(--color-text-dark)] transition-colors duration-[150ms]">
                        {card.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT — Featured */}
              <motion.div
                variants={colVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: 0.24 }}
                className="px-10 md:px-12 py-12 border-t lg:border-t-0"
              >
                <p className="text-eyebrow text-[var(--color-text-muted)] mb-10">
                  Latest from Stairpay
                </p>

                {featuredInsight && (
                  <Link
                    href={featuredInsight.href}
                    onClick={close}
                    className="group block"
                  >
                    {/* Featured — cover image if present, gradient placeholder otherwise */}
                    <div className="w-full aspect-[4/3] rounded-[8px] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] mb-4 overflow-hidden group-hover:border-[var(--color-accent)] transition-colors duration-[200ms]">
                      {featuredInsight.coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={featuredInsight.coverImage}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[rgba(113,20,226,0.12)] via-[rgba(113,20,226,0.04)] to-transparent" />
                      )}
                    </div>
                    <p className="text-eyebrow text-[var(--color-accent)] mb-2">
                      {featuredInsight.category}
                    </p>
                    <p className="text-[16px] font-[400] leading-snug text-[var(--color-text-body)] group-hover:text-[var(--color-text-dark)] transition-colors duration-[150ms]">
                      {featuredInsight.title}
                    </p>
                  </Link>
                )}
              </motion.div>
            </div>

            {/* ── Quick links row ──────────────────────────────────────────── */}
            <motion.div
              variants={colVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 0.28 }}
              className="border-t border-[var(--color-border-light)] px-10 md:px-14 py-5 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              <span className="text-eyebrow text-[var(--color-text-muted)] mr-2">
                Quick Links
              </span>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="text-[13px] font-[300] text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] transition-colors duration-[150ms]"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA in quick links row on mobile (where bar CTA is hidden) */}
              <div className="sm:hidden ml-auto">
                <Button size="sm" variant="solid-white" onClick={() => { close(); setContactOpen(true); }} arrow>
                  Book a Strategic Review
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Contact slide-over panel ─────────────────────────────────────── */}
      <ContactPanel open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
