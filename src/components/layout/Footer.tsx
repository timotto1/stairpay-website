import Link from "next/link";
import { Container } from "./Container";

const footerLinks = [
  {
    heading: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Lifecycle Model", href: "/platform/lifecycle" },
      { label: "Data Infrastructure", href: "/platform/data-infrastructure" },
      { label: "AI Governance & Security", href: "/platform/ai-governance" },
      { label: "Integrations", href: "/platform/integrations" },
    ],
  },
  {
    heading: "Intelligence Layers",
    links: [
      { label: "Lease Intelligence", href: "/intelligence-layers/lease" },
      { label: "Sales Intelligence", href: "/intelligence-layers/sales" },
      { label: "Aftersales & Staircasing", href: "/intelligence-layers/aftersales" },
      { label: "Rent & Service Charge", href: "/intelligence-layers/rent-service-charge" },
      { label: "Portfolio Intelligence", href: "/intelligence-layers/portfolio" },
    ],
  },
  {
    heading: "For Providers",
    links: [
      { label: "Director of Homeownership", href: "/for-providers/director-homeownership" },
      { label: "Head of Sales", href: "/for-providers/head-of-sales" },
      { label: "Head of Aftersales", href: "/for-providers/head-of-aftersales" },
      { label: "Finance Director", href: "/for-providers/finance-director" },
      { label: "CIO", href: "/for-providers/cio" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Stairpay", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Customers", href: "/company/customers" },
      { label: "Security & Compliance", href: "/company/security" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-dark)]">
      <Container className="py-16">
        {/* Top: logo + links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white font-[500] text-[18px] tracking-[-0.3px] mb-3">
              Stairpay
            </p>
            <p className="text-[13px] font-[300] text-[var(--color-text-muted)] leading-relaxed max-w-[180px]">
              The Operating System for Shared Ownership.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] font-[500] tracking-[2px] uppercase text-[var(--color-text-muted)] mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-[300] text-[var(--color-text-secondary)] hover:text-white transition-colors duration-[150ms]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: legal */}
        <div className="pt-8 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] font-[300] text-[var(--color-text-muted)]">
            © {year} Stairpay Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[12px] font-[300] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] font-[300] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/company/security"
              className="text-[12px] font-[300] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            >
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
