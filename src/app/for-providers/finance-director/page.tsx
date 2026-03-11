import {
  Calculator,
  FileText,
  PieChart,
} from "lucide-react";
import type { Metadata } from "next";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { IntelligenceLayerCard } from "@/components/sections/IntelligenceLayerCard";
import { OutcomesGrid } from "@/components/sections/OutcomesGrid";

export const metadata: Metadata = {
  title: "For Finance Directors — Stairpay",
  description:
    "Financial control for regulated Shared Ownership portfolios. Stairpay automates rent setting, reconciliation, and compliance — with a complete audit trail.",
  openGraph: {
    title: "For Finance Directors — Stairpay",
    description:
      "Financial control for regulated Shared Ownership portfolios. Automated rent setting, reconciliation, and lease-compliant calculations.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function FinanceDirectorPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="FOR FINANCE DIRECTORS"
        headline="Financial Control for Regulated Portfolios"
        description="Your rent-setting calculations are manual, your reconciliation errors surface late, and your audit preparation consumes weeks of senior time. Stairpay delivers lease-compliant financial intelligence across your entire Shared Ownership portfolio — automated, auditable, and defensible."
        primaryCta={{ label: "Request a Finance Overview", href: "/contact" }}
        secondaryCta={{ label: "Explore Rent Intelligence", href: "/intelligence-layers/rent-service-charge" }}
      />

      {/* ─── Your Reality ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">YOUR REALITY</p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            Financial Processes That Cannot Scale
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              Every year, your team manually calculates rent increases across
              hundreds — sometimes thousands — of Shared Ownership properties.
              Each lease has its own rent review mechanism: some are tied to RPI,
              others to CPI, some have caps, and a growing number have been
              converted to fixed-rate models. Your team navigates this complexity
              through spreadsheets, cross-referencing lease documents one by one,
              and the risk of error compounds with every new development added
              to the portfolio.
            </p>
            <p>
              Reconciliation errors are not caught proactively. They surface
              when a homeowner challenges a charge, when an auditor flags an
              inconsistency, or when a service charge estimate diverges
              materially from actuals. By that point, the cost of correction
              is far higher than the cost of prevention would have been. Your
              arrears management is similarly reactive — your team identifies
              problems after they have developed, rather than intervening at the
              earliest indicators.
            </p>
            <p>
              Your dependency on external audit consultants is significant and
              growing. Each annual review requires weeks of preparation,
              assembling evidence from multiple systems, and reconciling data
              that was never designed to sit together. The consultants are
              expensive, the process is disruptive, and the findings often
              reveal issues that structured data would have prevented in the
              first place.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Where Stairpay Fits ─── */}
      <SectionWrapper theme="dark">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <p className="text-eyebrow text-[var(--color-accent-pale)] mb-4">WHERE STAIRPAY FITS</p>
            <h2 className="text-h2 text-[var(--color-text-primary)]">
              Intelligence Layers Built for Your Role
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IntelligenceLayerCard
              icon={<Calculator className="w-6 h-6" />}
              title="Rent &amp; Service Charge Intelligence"
              description="Automated rent-setting calculations that read directly from lease terms. Every charge is computed against the correct review mechanism — RPI, CPI, fixed rate, or capped — with a complete audit trail showing exactly how each figure was derived."
              href="/intelligence-layers/rent-service-charge"
            />
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="The financial terms embedded in your leases are the foundation of every rent calculation and service charge apportionment. Stairpay extracts and structures these terms so your finance team works from verified data, not manual interpretation."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<PieChart className="w-6 h-6" />}
              title="Portfolio Intelligence"
              description="Portfolio-wide financial visibility across rent rolls, service charge positions, arrears trends, and capital receipts. Consolidates data that currently sits across multiple systems into a single analytical surface for board reporting and strategic planning."
              href="/intelligence-layers/portfolio"
            />
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Outcomes You Care About ─── */}
      <SectionWrapper theme="light">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <p className="text-eyebrow text-[var(--color-accent)] mb-4">OUTCOMES YOU CARE ABOUT</p>
            <h2 className="text-h2 text-[var(--color-text-dark)]">
              Measurable Impact Across Your Finance Operation
            </h2>
          </div>
        </Container>
        <OutcomesGrid
          outcomes={{
            costReduction: [
              "Automated rent-setting calculations replacing weeks of manual spreadsheet work",
              "Reduced dependency on external audit consultants through continuous compliance",
              "Early reconciliation that prevents costly late-stage corrections",
            ],
            riskMitigation: [
              "Lease-compliant calculations with source-text verification for every charge",
              "Complete audit trail from lease clause to final rent figure",
              "Proactive arrears indicators replacing reactive debt management",
            ],
            scalability: [
              "Portfolio-wide rent reviews completed in hours rather than weeks",
              "New developments absorbed into the financial model from day one",
              "Board-level financial reporting generated automatically, not manually assembled",
            ],
          }}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="See How Stairpay Delivers Financial Control"
        description="Request a finance overview with our team. We will walk through how lease-compliant financial intelligence maps to your portfolio and where the most significant efficiency gains lie."
        ctaLabel="Request a Finance Overview"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
