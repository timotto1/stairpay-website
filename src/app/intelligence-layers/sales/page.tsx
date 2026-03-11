import Image from "next/image";
import type { Metadata } from "next";
import {
  TrendingUp,
  Users,
  Calculator,
  CalendarCheck,
  BarChart3,
  FileText,
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
  title: "Sales Intelligence — Stairpay",
  description:
    "Structured conversion infrastructure for shared ownership sales. Unified pipeline, automated affordability screening, and real-time scheme analytics.",
  openGraph: {
    title: "Sales Intelligence — Stairpay",
    description:
      "Structured conversion infrastructure that replaces ad-hoc sales pipelines with governed workflows and real-time analytics.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function SalesIntelligencePage() {
  return (
    <>
      <GlobalNav />

      {/* ─── 1. Hero ─── */}
      <HeroSection
        eyebrow="SALES INTELLIGENCE"
        headline="Structured Conversion Infrastructure. Not a CRM."
        description="Shared ownership sales demand more than contact management. Stairpay provides the structured pipeline, affordability governance, and scheme-level analytics that housing associations need to convert enquiries into reservations — with full audit visibility at every stage."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      >
        <Image
          src="/images/sales-pipeline.svg"
          alt="Stairpay sales pipeline interface showing structured stage progression from enquiry to reservation"
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
              Sales Teams Deserve Better Than Spreadsheets
            </h2>
            <div className="space-y-5 text-body text-[var(--color-text-body)]">
              <p>
                Most housing association sales teams operate across a patchwork of
                disconnected tools — a CRM that was never designed for shared ownership, a
                spreadsheet tracking viewings and reservations, and an email chain that serves
                as the institutional memory for each enquiry. There is no single view of the
                pipeline. Conversion rates are unknown until someone manually assembles a
                report. And when the board asks how a new development is performing against
                its sales targets, the answer takes days to produce.
              </p>
              <p>
                Affordability screening — the critical governance gate before any reservation
                — is handled through manual calculations and offline assessments. The audit
                trail is inconsistent at best. Marketing spend cannot be attributed to
                reservations because the data lives in different systems with no shared
                identifier. Scheme-level performance is invisible until the development is
                substantially sold, by which point any course correction is too late.
              </p>
              <p>
                The cost is not just operational inefficiency. It is lost revenue from
                enquiries that fall through the cracks, compliance risk from inconsistent
                affordability assessments, and strategic blindness at scheme level. Housing
                associations are making significant capital decisions about new developments
                without reliable data on how existing schemes are actually performing.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 3. The Stairpay Approach ─── */}
      <SectionWrapper theme="dark">
        <ApproachSection
          eyebrow="THE STAIRPAY APPROACH"
          headline="From Fragmented Pipelines to Governed Conversion"
          items={[
            {
              title: "Unified Lead Pipeline",
              description:
                "Every enquiry captured, qualified, and tracked through a structured workflow from first contact to reservation. No leads lost between systems. Full attribution from marketing source to completed sale.",
              icon: <Users className="w-6 h-6" />,
            },
            {
              title: "Affordability Pre-Screening",
              description:
                "Automated financial assessment applied before viewings are scheduled, ensuring only qualified buyers progress through the pipeline. Every assessment documented with a complete audit trail.",
              icon: <Calculator className="w-6 h-6" />,
            },
            {
              title: "Reservation Tracking",
              description:
                "Milestone-based progression from viewing through to exchange, with structured stage gates, required documentation tracking, and automated notifications when transactions stall.",
              icon: <CalendarCheck className="w-6 h-6" />,
            },
            {
              title: "Scheme Analytics",
              description:
                "Real-time performance visibility per development, per scheme. Conversion funnels, time-to-reservation, marketing attribution, and sales velocity — available on demand, not assembled manually.",
              icon: <BarChart3 className="w-6 h-6" />,
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── 4. Inside the Platform ─── */}
      <SectionWrapper theme="light">
        <ContentSection
          eyebrow="INSIDE THE PLATFORM"
          headline="Complete Pipeline Visibility in a Single View"
          body="The sales intelligence interface provides a unified view of every enquiry, viewing, and reservation across your portfolio. Stage progression is structured and governed — each transition requires defined criteria to be met before a lead advances. Affordability assessments are embedded within the workflow, not bolted on as an afterthought. And because every interaction is logged, your compliance and audit teams have the evidence trail they need without asking sales staff to maintain parallel records."
          image="/images/sales-pipeline.svg"
          imageAlt="Stairpay sales pipeline showing stage progression with embedded affordability screening"
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
              "Marketing spend attributed to actual reservations, eliminating wasted acquisition cost",
              "Fewer wasted viewings through automated pre-qualification before scheduling",
              "Manual report assembly replaced with real-time scheme analytics",
            ],
            riskMitigation: [
              "Compliant affordability checks with documented assessment criteria and audit trail",
              "Structured stage gates prevent premature progression without required documentation",
              "Full attribution chain from marketing source through to completed reservation",
            ],
            scalability: [
              "Handle three times the enquiry volume without proportional headcount increase",
              "Instant scheme-level reporting available on demand for board and committee meetings",
              "New developments onboarded into the same governed pipeline from day one",
            ],
          }}
        />
      </SectionWrapper>

      {/* ─── 6. Metrics ─── */}
      <SectionWrapper theme="darker">
        <MetricCalloutGrid
          metrics={[
            { value: "42%", label: "Improvement in Conversion Rate" },
            { value: "78%", label: "Reduction in Manual Processing" },
            { value: "100%", label: "Affordability Audit Trail" },
            { value: "3x", label: "Enquiry Capacity Without Headcount" },
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
              Sales Intelligence Connects to the Full Lifecycle
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-5">
              Reservation data flows into lease onboarding, staircasing readiness
              profiles, and portfolio analytics — ensuring the intelligence captured
              during sales continues to deliver value long after exchange.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="Lease terms extracted during onboarding inform affordability calculations and buyer obligation summaries throughout the sales journey."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Aftersales & Staircasing"
              description="Buyer profiles established during sales become the foundation for staircasing readiness scoring once the homeowner is in residence."
              href="/intelligence-layers/aftersales"
            />
            <IntelligenceLayerCard
              icon={<PieChart className="w-6 h-6" />}
              title="Portfolio Intelligence"
              description="Sales velocity and scheme performance data feeds directly into board-level portfolio dashboards and capital planning models."
              href="/intelligence-layers/portfolio"
            />
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 8. CTA ─── */}
      <CTABlock
        eyebrow="GET STARTED"
        headline="See How Sales Intelligence Transforms Your Pipeline"
        description="Book a strategic review with our team. We will walk through how Stairpay structures your sales operations and where the highest-value conversion improvements lie."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
