import Image from "next/image";
import type { Metadata } from "next";
import {
  Calculator,
  RefreshCw,
  AlertTriangle,
  ClipboardCheck,
  FileText,
  PieChart,
  TrendingUp,
} from "lucide-react";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { OutcomesGrid } from "@/components/sections/OutcomesGrid";
import { MetricCalloutGrid } from "@/components/sections/MetricCalloutGrid";
import { IntelligenceLayerCard } from "@/components/sections/IntelligenceLayerCard";
import { CTABlock } from "@/components/sections/CTABlock";

export const metadata: Metadata = {
  title: "Rent & Service Charge Intelligence — Stairpay",
  description:
    "Financial control for regulated shared ownership portfolios. Automated rent-setting, cross-system reconciliation, income risk forecasting, and Section 20 governance.",
  openGraph: {
    title: "Rent & Service Charge Intelligence — Stairpay",
    description:
      "Lease-compliant financial control across rent setting, reconciliation, income forecasting, and Section 20 compliance.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function RentServiceChargeIntelligencePage() {
  return (
    <>
      <GlobalNav />

      {/* ─── 1. Hero ─── */}
      <HeroSection
        eyebrow="RENT & SERVICE CHARGE INTELLIGENCE"
        headline="Financial Control for Regulated Portfolios"
        description="Rent setting, service charge reconciliation, and income forecasting are the financial backbone of shared ownership. Stairpay automates the calculations, identifies the discrepancies, and provides the forward visibility that finance teams need to govern portfolios with confidence."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      >
        <Image
          src="/images/rent-dashboard.svg"
          alt="Stairpay rent and service charge dashboard showing automated calculations and reconciliation status"
          width={560}
          height={440}
          priority
          className="w-full h-auto"
        />
      </HeroSection>

      {/* ─── 2. The Problem ─── */}
      <SectionWrapper theme="light">
        <Container>
          <div className="max-w-[720px]">
            <p className="text-eyebrow text-[var(--color-accent)] mb-6">
              THE OPERATIONAL REALITY
            </p>
            <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
              Manual Processes Cannot Govern Financial Complexity at Scale
            </h2>
            <div className="space-y-5 text-body text-[var(--color-text-body)]">
              <p>
                Every shared ownership lease specifies a rent review mechanism — RPI, CPI,
                RPI+0.5%, fixed percentage uplifts, or bespoke formulas unique to specific
                developments. For a portfolio of several thousand properties, annual rent
                setting requires applying the correct formula to every property, using the
                correct index value at the correct anniversary date. Today, this is done
                through spreadsheets maintained by finance teams who carry the methodology
                in institutional knowledge rather than structured systems. A single error
                — the wrong index applied to the wrong anniversary — can cascade across
                hundreds of properties before anyone identifies it.
              </p>
              <p>
                Cross-system reconciliation compounds the problem. Rent charges set in the
                housing management system must match the lease terms, the finance platform,
                and the tenant-facing communications. Discrepancies between these systems
                are identified months after they occur, often during audit or when a
                homeowner queries their charges. Income risk forecasting does not exist in
                any meaningful form — finance directors are making decisions about arrears
                provisions and income projections based on backward-looking data and
                individual judgement.
              </p>
              <p>
                Section 20 governance adds a further layer of complexity. Major works
                consultation requirements are tracked through manual processes that
                struggle to evidence compliance when challenged. The cumulative effect is
                a finance function that spends weeks each year on processes that should be
                automated, while lacking the forward visibility that would allow genuinely
                strategic financial management of the shared ownership portfolio.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 3. The Stairpay Approach ─── */}
      <SectionWrapper theme="dark">
        <ApproachSection
          eyebrow="THE STAIRPAY APPROACH"
          headline="From Manual Calculations to Governed Financial Intelligence"
          items={[
            {
              title: "Automated Rent-Setting Logic",
              description:
                "Lease-compliant calculations applied across the entire portfolio. Each property's rent review mechanism — whether RPI, CPI, fixed uplift, or bespoke formula — is extracted from the lease and applied automatically at the correct anniversary date.",
              icon: <Calculator className="w-6 h-6" />,
            },
            {
              title: "Cross-System Reconciliation",
              description:
                "Continuous matching between housing management systems, finance platforms, and structured lease data. Discrepancies are identified in real time rather than discovered months later during audit or homeowner challenge.",
              icon: <RefreshCw className="w-6 h-6" />,
            },
            {
              title: "Income Risk Forecasting",
              description:
                "Early warning for arrears patterns, income gaps, and collection risks across the portfolio. Gives finance teams the forward visibility to manage provisions proactively rather than reactively adjusting after the fact.",
              icon: <AlertTriangle className="w-6 h-6" />,
            },
            {
              title: "Section 20 Governance",
              description:
                "Structured tracking for major works consultation compliance. Every notice, response, and decision is documented in a single audit trail, ensuring defensible evidence when compliance is challenged.",
              icon: <ClipboardCheck className="w-6 h-6" />,
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── 4. Inside the Platform ─── */}
      <SectionWrapper theme="light">
        <ContentSection
          eyebrow="INSIDE THE PLATFORM"
          headline="Portfolio-Wide Financial Control in a Single Surface"
          body="The rent and service charge interface provides finance teams with a unified view of every calculation, reconciliation status, and income forecast across the portfolio. Rent review schedules are mapped to individual lease terms, with automated calculations applied at the correct date. Reconciliation exceptions are surfaced immediately — not discovered weeks later. And Section 20 compliance tracking provides the structured evidence trail that governance committees require, without manual assembly."
          image="/images/rent-dashboard.svg"
          imageAlt="Stairpay rent intelligence dashboard showing automated calculations, reconciliation exceptions, and income forecasts"
          theme="light"
        />
      </SectionWrapper>

      {/* ─── 5. Enterprise Outcomes ─── */}
      <SectionWrapper theme="white">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <p className="text-eyebrow text-[var(--color-accent)] mb-6">
              ENTERPRISE OUTCOMES
            </p>
            <h2 className="text-h2 text-[var(--color-text-dark)]">
              Measurable Impact Across Cost, Risk, and Scale
            </h2>
          </div>
        </Container>
        <OutcomesGrid
          outcomes={{
            costReduction: [
              "Automated rent setting eliminates weeks of manual calculation and verification each year",
              "Reconciliation errors identified and corrected before they compound into material discrepancies",
              "Finance team capacity redirected from process execution to strategic analysis",
            ],
            riskMitigation: [
              "Lease-compliant calculations applied consistently across every property in the portfolio",
              "Section 20 consultation compliance evidenced through structured, auditable tracking",
              "Income risk forecasting provides early warning before arrears become material provisions",
            ],
            scalability: [
              "Portfolio-wide annual rent reviews completed in hours rather than weeks",
              "New properties onboarded into the same automated framework without additional process overhead",
              "Cross-system reconciliation scales with portfolio size, not team headcount",
            ],
          }}
        />
      </SectionWrapper>

      {/* ─── 6. Metrics ─── */}
      <SectionWrapper theme="darker">
        <MetricCalloutGrid
          metrics={[
            { value: "99.7%", label: "Rent-Setting Accuracy" },
            { value: "£890K", label: "Reconciliation Errors Identified" },
            { value: "6wk→2hr", label: "Annual Rent Review Cycle" },
            { value: "100%", label: "Section 20 Compliance Tracking" },
          ]}
        />
      </SectionWrapper>

      {/* ─── 7. Part of the Operating System ─── */}
      <SectionWrapper theme="dark">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <p className="text-eyebrow text-[var(--color-accent-pale)] mb-6">
              PART OF THE OPERATING SYSTEM
            </p>
            <h2 className="text-h2 text-[var(--color-text-primary)]">
              Financial Intelligence Connects Across Every Layer
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-5">
              Rent calculations are grounded in structured lease data. Staircasing
              transactions trigger automatic recalculations. And financial outcomes
              feed directly into portfolio-level reporting for board governance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="Rent review mechanisms, service charge apportionment clauses, and anniversary dates are sourced directly from structured lease data — eliminating manual interpretation."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<PieChart className="w-6 h-6" />}
              title="Portfolio Intelligence"
              description="Income forecasts, reconciliation status, and financial risk indicators feed directly into board-level portfolio dashboards and governance reporting."
              href="/intelligence-layers/portfolio"
            />
            <IntelligenceLayerCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Sales Intelligence"
              description="Rent projections and service charge estimates inform affordability assessments during the sales process, ensuring buyers understand their ongoing financial obligations."
              href="/intelligence-layers/sales"
            />
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 8. CTA ─── */}
      <CTABlock
        eyebrow="GET STARTED"
        headline="See How Rent Intelligence Transforms Your Financial Operations"
        description="Book a strategic review with our team. We will walk through how Stairpay automates your rent-setting and reconciliation processes, and where the highest-value financial improvements lie."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
