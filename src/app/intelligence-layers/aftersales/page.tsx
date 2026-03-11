import Image from "next/image";
import type { Metadata } from "next";
import {
  BarChart3,
  Gauge,
  Users,
  Landmark,
  TrendingUp,
  FileText,
  Calculator,
  PieChart,
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
  title: "Aftersales & Staircasing Intelligence — Stairpay",
  description:
    "Capital activation through readiness scoring, intelligent segmentation, and structured staircasing workflows. Convert reactive enquiry handling into proactive revenue forecasting.",
  openGraph: {
    title: "Aftersales & Staircasing Intelligence — Stairpay",
    description:
      "Identify staircasing-ready homeowners, forecast capital receipts, and handle enquiry spikes without scaling teams.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function AftersalesIntelligencePage() {
  return (
    <>
      <GlobalNav />

      {/* ─── 1. Hero ─── */}
      <HeroSection
        eyebrow="AFTERSALES & STAIRCASING INTELLIGENCE"
        headline="The Capital Activation Engine"
        description="Staircasing is the single largest revenue opportunity in shared ownership — yet most providers manage it reactively. Stairpay identifies readiness, forecasts capital receipts, and structures the transaction workflow from first enquiry to completion."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      >
        <Image
          src="/images/staircasing-dashboard.svg"
          alt="Stairpay staircasing dashboard showing readiness scores, segmentation, and capital forecasting"
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
              Capital Sitting Dormant Across Your Portfolio
            </h2>
            <div className="space-y-5 text-body text-[var(--color-text-body)]">
              <p>
                Staircasing enquiries arrive unpredictably. Surges of 400% are not unusual
                — triggered by interest rate shifts, government policy announcements, or
                regional house price movements. When those spikes arrive, most housing
                associations are overwhelmed. Teams that were already stretched thin are
                suddenly fielding dozens of enquiries from homeowners at very different
                stages of readiness, with no structured way to triage, qualify, or
                prioritise.
              </p>
              <p>
                The deeper problem is that most enquiries do not convert — not because
                homeowners are uninterested, but because providers cannot identify who is
                genuinely ready. Financial readiness, behavioural signals, and timing
                indicators sit in different systems or are not captured at all. Manual
                calculations are required for each individual case. There is no capital
                forecasting capability, so finance teams cannot plan for staircasing
                revenue. The result is a reactive operation that leaves significant
                capital on the table: homeowners who would staircase are never
                identified, and those who enquire are handled through processes that
                were not designed for volume.
              </p>
              <p>
                For providers with portfolios of several thousand shared ownership
                properties, the revenue at stake is measured in millions. Every month
                that a ready homeowner is not identified is a month of deferred capital
                receipt. Every enquiry that falls through the cracks is a transaction
                that may never happen. The opportunity cost is invisible precisely
                because no one has the data to quantify it.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 3. The Stairpay Approach ─── */}
      <SectionWrapper theme="dark">
        <ApproachSection
          eyebrow="THE STAIRPAY APPROACH"
          headline="From Reactive Enquiries to Proactive Capital Activation"
          items={[
            {
              title: "Readiness Scoring",
              description:
                "Financial, behavioural, and timing signals combined into a single readiness score for every homeowner in the portfolio. Identifies who is genuinely prepared to staircase — before they make contact.",
              icon: <Gauge className="w-6 h-6" />,
            },
            {
              title: "Intelligent Segmentation",
              description:
                "Every homeowner classified into actionable segments: Financially Ready, Affordability Gap, Timing Risk, High Intent Low Readiness, and Not Viable. Each segment triggers a different operational response.",
              icon: <Users className="w-6 h-6" />,
            },
            {
              title: "Transaction CRM",
              description:
                "Every staircasing transaction tracked from initial enquiry through valuation, legal processing, and completion. Structured milestone progression with automated stall detection and intervention triggers.",
              icon: <BarChart3 className="w-6 h-6" />,
            },
            {
              title: "Capital Forecasting",
              description:
                "Portfolio-wide staircasing revenue predictions based on readiness scores, historical conversion patterns, and market conditions. Gives finance teams the forward visibility they have never had.",
              icon: <Landmark className="w-6 h-6" />,
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── 4. Inside the Platform ─── */}
      <SectionWrapper theme="light">
        <ContentSection
          eyebrow="INSIDE THE PLATFORM"
          headline="Readiness Visibility Across the Entire Portfolio"
          body="The staircasing dashboard surfaces readiness scores and segmentation across every shared ownership property in the portfolio. Operations teams see immediately which homeowners are financially ready, which need nurturing, and which are unlikely to convert. Capital forecasts update in real time as readiness profiles change. And every transaction — from initial enquiry through to completion — is tracked through a structured workflow that ensures nothing is lost between stages."
          image="/images/staircasing-dashboard.svg"
          imageAlt="Stairpay staircasing dashboard showing portfolio-wide readiness distribution and capital forecast"
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
              "Increased capital receipts through proactive identification of staircasing-ready homeowners",
              "Fewer wasted conversations by focusing team effort on genuinely viable enquiries",
              "Reduced cost per transaction through structured, milestone-driven workflows",
            ],
            riskMitigation: [
              "Defensible segmentation methodology with documented scoring criteria",
              "Every readiness assessment and triage decision audit-logged for governance",
              "Consistent treatment of homeowners regardless of which team member handles the enquiry",
            ],
            scalability: [
              "Handle 400% enquiry spikes without emergency staffing or service degradation",
              "Automated nurture sequences maintain engagement with non-ready homeowners at scale",
              "Portfolio growth absorbed through systematic readiness monitoring, not manual review",
            ],
          }}
        />
      </SectionWrapper>

      {/* ─── 6. Metrics ─── */}
      <SectionWrapper theme="darker">
        <MetricCalloutGrid
          metrics={[
            { value: "£12.4M", label: "Average Annual Capital Forecast" },
            { value: "340%", label: "Increase in Conversion Rate" },
            { value: "5x", label: "Enquiry Handling Capacity" },
            { value: "92%", label: "Forecast Accuracy" },
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
              Staircasing Intelligence Feeds the Wider Platform
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-5">
              Readiness data, capital forecasts, and transaction outcomes flow into
              lease verification, rent adjustments, and portfolio-level reporting —
              ensuring every staircasing event is reflected across the organisation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="Staircasing caps and eligibility restrictions are sourced directly from structured lease data, ensuring every readiness assessment is grounded in the actual lease terms."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<Calculator className="w-6 h-6" />}
              title="Rent & Service Charge"
              description="Completed staircasing transactions automatically trigger rent recalculations and service charge apportionment updates across affected properties."
              href="/intelligence-layers/rent-service-charge"
            />
            <IntelligenceLayerCard
              icon={<PieChart className="w-6 h-6" />}
              title="Portfolio Intelligence"
              description="Capital forecasts and conversion analytics feed directly into board-level dashboards, providing governance visibility over the organisation's equity position."
              href="/intelligence-layers/portfolio"
            />
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 8. CTA ─── */}
      <CTABlock
        eyebrow="GET STARTED"
        headline="See How Staircasing Intelligence Activates Dormant Capital"
        description="Book a strategic review with our team. We will walk through how Stairpay identifies staircasing readiness across your portfolio and where the highest-value capital opportunities lie."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
