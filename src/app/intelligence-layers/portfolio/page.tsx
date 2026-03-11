import Image from "next/image";
import type { Metadata } from "next";
import {
  PieChart,
  LayoutDashboard,
  Layers,
  Building2,
  FileBarChart,
  FileText,
  BarChart3,
  Calculator,
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
  title: "Portfolio Intelligence — Stairpay",
  description:
    "Board-level visibility across every intelligence layer. Unified dashboards, cross-layer reporting, equity exposure visibility, and governance-ready outputs.",
  openGraph: {
    title: "Portfolio Intelligence — Stairpay",
    description:
      "Aggregate intelligence across sales, staircasing, rent, and lease data — unified into board-ready outputs.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function PortfolioIntelligencePage() {
  return (
    <>
      <GlobalNav />

      {/* ─── 1. Hero ─── */}
      <HeroSection
        eyebrow="PORTFOLIO INTELLIGENCE"
        headline="Board-Level Visibility Across Every Intelligence Layer"
        description="Governance committees need answers that span departments, not reports assembled from disconnected sources. Stairpay aggregates intelligence from sales, staircasing, rent, and lease data into a unified analytical surface — designed for the people who govern your shared ownership portfolio."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      >
        <Image
          src="/images/portfolio-overview.svg"
          alt="Stairpay portfolio intelligence dashboard showing cross-layer analytics and equity exposure"
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
              Board Reporting Should Not Require a Research Project
            </h2>
            <div className="space-y-5 text-body text-[var(--color-text-body)]">
              <p>
                Board reporting for shared ownership portfolios is, in most housing
                associations, a manual assembly exercise. Sales data comes from one
                system, staircasing volumes from another, rent collection rates from the
                finance platform, and lease compliance status from whatever combination
                of spreadsheets and institutional knowledge the homeownership team
                maintains. Each report cycle requires days of effort to gather, reconcile,
                and format data into something presentable — and by the time it reaches
                the board, it is already weeks out of date.
              </p>
              <p>
                The consequence is not merely inefficiency. It is a governance gap.
                Boards cannot govern what they cannot see. Equity exposure across the
                shared ownership portfolio — a material financial position for any
                housing association with several thousand leasehold properties — is
                invisible as a consolidated metric. Cross-layer insights that should
                inform strategic decisions are impossible when the underlying data lives
                in silos that were never designed to connect. A board member asking
                whether staircasing activity is correlated with specific lease types or
                developments is asking a question that most organisations simply cannot
                answer.
              </p>
              <p>
                The gap between what governance committees need and what operational
                systems can provide grows wider with every new unit added to the
                portfolio. Without a unified intelligence layer that spans the entire
                shared ownership lifecycle, board-level reporting will remain what it
                has always been: backward-looking, manually assembled, and structurally
                incomplete.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 3. The Stairpay Approach ─── */}
      <SectionWrapper theme="dark">
        <ApproachSection
          eyebrow="THE STAIRPAY APPROACH"
          headline="From Manual Assembly to Continuous Intelligence"
          items={[
            {
              title: "Aggregate Dashboards",
              description:
                "A unified analytical surface across all intelligence layers. Sales pipeline health, staircasing conversion rates, rent collection status, and lease compliance scores — visible in a single view, updated continuously.",
              icon: <LayoutDashboard className="w-6 h-6" />,
            },
            {
              title: "Cross-Layer Reporting",
              description:
                "Insights that span sales, staircasing, rent, and lease data. Correlations that are invisible in siloed systems — such as the relationship between lease type and staircasing propensity — become structured, queryable intelligence.",
              icon: <Layers className="w-6 h-6" />,
            },
            {
              title: "Equity Exposure Visibility",
              description:
                "Portfolio-wide view of the organisation's shared ownership equity position. Current equity held, projected staircasing impact, and exposure concentration by development, region, and property type.",
              icon: <Building2 className="w-6 h-6" />,
            },
            {
              title: "Board-Ready Outputs",
              description:
                "Structured reports designed for governance committees, risk panels, and executive leadership. Consistent methodology, transparent data sources, and the level of detail that scrutiny requires — without the manual assembly.",
              icon: <FileBarChart className="w-6 h-6" />,
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── 4. Inside the Platform ─── */}
      <SectionWrapper theme="light">
        <ContentSection
          eyebrow="INSIDE THE PLATFORM"
          headline="The Single View Your Governance Committees Need"
          body="The portfolio intelligence surface consolidates data from every layer of the Stairpay platform into a unified analytical view. Executive dashboards provide headline metrics — portfolio size, equity exposure, compliance status, capital forecasts — while drill-down capability allows governance committees to interrogate the underlying data when they need to understand the detail. Every metric traces back to its source layer, ensuring transparency and auditability. Reports are generated from live data, not assembled from static extracts."
          image="/images/portfolio-overview.svg"
          imageAlt="Stairpay portfolio overview dashboard showing aggregate metrics across all intelligence layers"
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
              "Manual report assembly eliminated — board packs generated from live platform data",
              "Real-time analytics replace periodic data gathering exercises across departments",
              "Cross-layer insights available on demand without commissioning bespoke analysis",
            ],
            riskMitigation: [
              "Governance-ready outputs with consistent methodology and transparent data sources",
              "Equity exposure visibility provides early warning for concentration risk",
              "Every metric auditable to its source layer, supporting regulatory scrutiny",
            ],
            scalability: [
              "Portfolio growth absorbed without proportional increase in reporting overhead",
              "New developments and intelligence layers integrated into existing dashboards automatically",
              "Board reporting cadence decoupled from manual assembly capacity",
            ],
          }}
        />
      </SectionWrapper>

      {/* ─── 6. Metrics ─── */}
      <SectionWrapper theme="darker">
        <MetricCalloutGrid
          metrics={[
            { value: "1", label: "Unified Portfolio View" },
            { value: "85%", label: "Reduction in Report Assembly" },
            { value: "Real-time", label: "Cross-Layer Analytics" },
            { value: "100%", label: "Board Governance Coverage" },
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
              Every Layer Feeds the Portfolio View
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-5">
              Portfolio intelligence is the aggregate expression of every other
              layer in the platform. The richer the underlying data, the more
              complete the governance picture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="Compliance scores, clause coverage, and data completeness metrics aggregate into portfolio-level governance indicators."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Aftersales & Staircasing"
              description="Capital forecasts, readiness distributions, and conversion analytics provide the equity intelligence that boards require."
              href="/intelligence-layers/aftersales"
            />
            <IntelligenceLayerCard
              icon={<Calculator className="w-6 h-6" />}
              title="Rent & Service Charge"
              description="Income projections, reconciliation status, and Section 20 compliance tracking feed into the financial dimension of portfolio reporting."
              href="/intelligence-layers/rent-service-charge"
            />
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 8. CTA ─── */}
      <CTABlock
        eyebrow="GET STARTED"
        headline="See How Portfolio Intelligence Transforms Your Governance"
        description="Book a strategic review with our team. We will walk through how Stairpay aggregates intelligence across your shared ownership portfolio and where the highest-value governance improvements lie."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
