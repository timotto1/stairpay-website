import Image from "next/image";
import type { Metadata } from "next";
import {
  FileText,
  ScanSearch,
  UserCheck,
  ShieldCheck,
  MessageSquareText,
  TrendingUp,
  BarChart3,
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
  title: "Lease Intelligence — Stairpay",
  description:
    "Structured lease data extraction with source-text verification. Transform thousands of shared ownership lease documents into queryable, auditable intelligence.",
  openGraph: {
    title: "Lease Intelligence — Stairpay",
    description:
      "Structured lease data extraction with source-text verification for shared ownership portfolios.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function LeaseIntelligencePage() {
  return (
    <>
      <GlobalNav />

      {/* ─── 1. Hero ─── */}
      <HeroSection
        eyebrow="LEASE INTELLIGENCE"
        headline="The Structured Foundation for Every Decision"
        description="Every shared ownership lease is unique. Stairpay extracts, structures, and verifies the clause-level data that underpins compliance, revenue, and governance across your entire portfolio — replacing manual PDF searches with auditable, queryable intelligence."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      >
        <Image
          src="/images/lease-extraction.svg"
          alt="Stairpay lease extraction interface showing structured clause data alongside original PDF source text"
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
              Lease Data Is the Foundation. And It Is Broken.
            </h2>
            <div className="space-y-5 text-body text-[var(--color-text-body)]">
              <p>
                Shared ownership lease data sits trapped across disconnected systems — scanned
                PDFs in document management platforms, summary fields in housing management
                systems, and spreadsheet workarounds maintained by individuals who understand
                the portfolio through institutional memory rather than structured data. When
                a solicitor raises an enquiry about a staircasing cap or a rent review
                mechanism, the answer requires someone to locate the correct PDF, read through
                dozens of pages of legal text, and manually interpret bespoke clauses that
                vary from lease to lease.
              </p>
              <p>
                Compliance teams spend weeks preparing for audits because there is no single
                source of truth for lease obligations. Service charge apportionment clauses
                are understood differently by different teams. Rent review mechanisms — RPI,
                CPI, RPI+0.5%, fixed uplifts — are tracked in spreadsheets that no one fully
                trusts. The governance risk is not hypothetical: it is the daily operational
                reality for every housing association managing a shared ownership portfolio
                at scale.
              </p>
              <p>
                The root cause is structural. Every shared ownership lease is a bespoke legal
                document, with clauses governing staircasing caps, rent review mechanisms,
                service charge obligations, and subletting restrictions that differ not just
                between developments but between individual units. No generic document
                management system was designed to extract and structure this level of
                clause-level variation. Until now, the only option has been manual
                interpretation — which does not scale, cannot be audited consistently, and
                creates organisational risk that compounds with every new unit added to
                the portfolio.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 3. The Stairpay Approach ─── */}
      <SectionWrapper theme="dark">
        <ApproachSection
          eyebrow="THE STAIRPAY APPROACH"
          headline="From Unstructured Documents to Governed Data"
          items={[
            {
              title: "Clause Extraction",
              description:
                "Reads lease PDFs and extracts structured data fields — rent review mechanisms, staircasing caps, service charge obligations, subletting restrictions — with every output linked to the original source text for verification.",
              icon: <ScanSearch className="w-6 h-6" />,
            },
            {
              title: "Human-in-the-Loop Verification",
              description:
                "Every extracted clause is traceable to the original PDF text, reviewable by your team, and audit-logged. No black-box interpretations. The system provides confidence scores and flags ambiguous clauses for human review.",
              icon: <UserCheck className="w-6 h-6" />,
            },
            {
              title: "Portfolio Compliance Scoring",
              description:
                "Continuous monitoring across all leases for compliance gaps, missing data fields, and inconsistencies. Surfaces risks before they become liabilities — whether that is an incorrectly applied rent review or a missing staircasing restriction.",
              icon: <ShieldCheck className="w-6 h-6" />,
            },
            {
              title: "Structured Query Resolution",
              description:
                "Solicitor and homeowner enquiries resolved from structured data rather than manual PDF searches. Standard queries — rent review basis, staircasing eligibility, service charge apportionment — answered in minutes with source-text references.",
              icon: <MessageSquareText className="w-6 h-6" />,
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── 4. Inside the Platform ─── */}
      <SectionWrapper theme="light">
        <ContentSection
          eyebrow="INSIDE THE PLATFORM"
          headline="Structured Lease Data with Full Traceability"
          body="The extraction interface presents structured clause data alongside the original PDF source text. Every field — from rent review type to staircasing cap percentage — links directly to the clause it was derived from. Compliance teams can verify interpretations without returning to the original document, and audit trails capture every review decision. The result is lease intelligence that your organisation can trust at governance level."
          image="/images/lease-extraction.svg"
          imageAlt="Stairpay lease extraction panel showing structured fields mapped to original PDF clauses"
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
              "Consultant and external adviser dependency reduced through self-service structured data",
              "Audit preparation time reduced from weeks to hours with pre-structured compliance outputs",
              "Solicitor enquiry resolution costs eliminated through automated query responses",
            ],
            riskMitigation: [
              "Compliance gaps identified proactively through continuous portfolio-wide monitoring",
              "Every output traceable to original PDF source text — no unverifiable interpretations",
              "Audit-logged verification decisions provide defensible governance evidence",
            ],
            scalability: [
              "Solicitor and homeowner queries resolved in minutes rather than days",
              "Portfolio growth absorbed without proportional headcount increases",
              "New leases onboarded and structured within the same governance framework",
            ],
          }}
        />
      </SectionWrapper>

      {/* ─── 6. Metrics ─── */}
      <SectionWrapper theme="darker">
        <MetricCalloutGrid
          metrics={[
            { value: "85%", label: "Reduction in Audit Prep Time" },
            { value: "3min", label: "Average Query Resolution" },
            { value: "100%", label: "Source-Text Traceability" },
            { value: "£340K", label: "Annual Savings per Provider" },
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
              Lease Intelligence Powers Every Other Layer
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-5">
              Structured lease data flows into sales, staircasing, rent setting, and
              portfolio reporting — ensuring every downstream decision is grounded in
              verified, clause-level intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IntelligenceLayerCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Sales Intelligence"
              description="Lease terms inform affordability assessments and reservation workflows, ensuring buyers understand their obligations before exchange."
              href="/intelligence-layers/sales"
            />
            <IntelligenceLayerCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Aftersales & Staircasing"
              description="Staircasing caps, eligibility criteria, and lease restrictions are surfaced automatically during readiness scoring and transaction processing."
              href="/intelligence-layers/aftersales"
            />
            <IntelligenceLayerCard
              icon={<PieChart className="w-6 h-6" />}
              title="Portfolio Intelligence"
              description="Aggregate lease compliance data feeds board-level dashboards, providing governance visibility across the entire shared ownership portfolio."
              href="/intelligence-layers/portfolio"
            />
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 8. CTA ─── */}
      <CTABlock
        eyebrow="GET STARTED"
        headline="See How Lease Intelligence Transforms Your Portfolio"
        description="Book a strategic review with our team. We will walk through how Stairpay extracts and structures your lease data, and where the highest-value governance improvements lie."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
