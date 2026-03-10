"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Overview", href: "/platform" },
      { label: "Lifecycle Model", href: "/platform/lifecycle" },
      { label: "Data Infrastructure", href: "/platform/data-infrastructure" },
      { label: "AI Governance & Security", href: "/platform/ai-governance" },
      { label: "Integrations", href: "/platform/integrations" },
    ],
  },
  {
    label: "Intelligence Layers",
    href: "/intelligence-layers",
    children: [
      { label: "Lease Intelligence", href: "/intelligence-layers/lease" },
      { label: "Sales Intelligence", href: "/intelligence-layers/sales" },
      { label: "Aftersales & Staircasing", href: "/intelligence-layers/aftersales" },
      { label: "Rent & Service Charge", href: "/intelligence-layers/rent-service-charge" },
      { label: "Portfolio Intelligence", href: "/intelligence-layers/portfolio" },
    ],
  },
  {
    label: "For Providers",
    href: "/for-providers",
    children: [
      { label: "Director of Homeownership", href: "/for-providers/director-homeownership" },
      { label: "Head of Sales", href: "/for-providers/head-of-sales" },
      { label: "Head of Aftersales", href: "/for-providers/head-of-aftersales" },
      { label: "Finance Director", href: "/for-providers/finance-director" },
      { label: "CIO", href: "/for-providers/cio" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "Intelligence Index", href: "/insights/intelligence-index" },
      { label: "AI in Housing", href: "/insights/ai-in-housing" },
      { label: "Regulatory Briefings", href: "/insights/regulatory-briefings" },
      { label: "Sector Reports", href: "/insights/sector-reports" },
      { label: "Roundtable Findings", href: "/insights/roundtable-findings" },
    ],
  },
  {
    label: "Company",
    href: "/company/about",
    children: [
      { label: "About Stairpay", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Customers", href: "/company/customers" },
      { label: "Security & Compliance", href: "/company/security" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
];

export function GlobalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms] ${
        scrolled
          ? "bg-[var(--color-bg-secondary)]/95 backdrop-blur-sm shadow-[0_1px_0_var(--color-border-dark)]"
          : "bg-[var(--color-bg-secondary)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-white font-[500] text-[18px] tracking-[-0.3px]">
              Stairpay
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-[13px] font-[400] tracking-[0.5px] text-[var(--color-text-secondary)] hover:text-white transition-colors duration-[150ms] py-2">
                  {link.label}
                </button>

                {/* Dropdown */}
                {activeDropdown === link.label && link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56">
                    <div className="bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] rounded-[8px] py-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-[13px] font-[300] text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-card-dark-hover)] transition-colors duration-[150ms]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Book a Strategic Review
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-[var(--color-text-secondary)] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-dark)] px-10 py-6 space-y-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              <p className="text-[11px] font-[500] tracking-[2px] uppercase text-[var(--color-text-muted)] mb-2">
                {link.label}
              </p>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block py-1.5 text-[14px] font-[300] text-[var(--color-text-secondary)] hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-4">
            <Button href="/contact" size="sm" className="w-full justify-center">
              Book a Strategic Review
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
