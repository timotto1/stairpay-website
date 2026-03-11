import type { Metadata } from "next";
import {
  Database,
  Link2,
  Shield,
  RefreshCw,
} from "lucide-react";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { MetricCalloutGrid } from "@/components/sections/MetricCalloutGrid";
import { ContentSection } from "@/components/sections/ContentSection";
import { ApproachSection } from "@/components/sections/ApproachSection";

export const metadata: Metadata = {
  title: "Data Infrastructure — Stairpay",
  description:
    "A unified data model purpose-built for Shared Ownership. Stairpay connects every lease, unit, homeowner, and transaction in a single structured graph — eliminating silos and enabling intelligence across the lifecycle.",
  openGraph: {
    title: "Data Infrastructure — Stairpay",
    description:
      "Unified data infrastructure for Shared Ownership. Every entity connected in a single graph, sitting above your existing systems.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function DataInfrastructurePage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="DATA INFRASTRUCTURE"
        headline="Shared Ownership Data Infrastructure"
        description="The operational challenges in Shared Ownership are not primarily software problems — they are data problems. Critical information is trapped in disconnected systems, locked inside PDF lease documents, and scattered across spreadsheets that only one person understands. Stairpay provides the unified data model that makes everything else possible."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      />

      {/* ─── The Problem ─── */}
      <SectionWrapper theme="light" id="the-problem">
        <ContentSection
          eyebrow="THE CHALLENGE"
          headline="Data Trapped in Disconnected Systems"
          body={
            <>
              <p>
                A typical housing association manages its Shared Ownership
                portfolio across half a dozen disconnected systems. Sales
                enquiries live in a CRM. Lease terms are buried in PDF
                documents. Rent calculations are maintained in spreadsheets.
                Homeowner records sit in the HMS. Staircasing transactions are
                tracked in email threads. Service charge apportionments are
                managed in finance systems that cannot talk to any of the above.
              </p>
              <p className="mt-4">
                The consequence is not merely inefficiency — it is structural
                blindness. No single team has a complete view of any property,
                any homeowner, or any lease. Compliance obligations are
                discovered rather than managed. Financial calculations are
                performed without confidence in the underlying data. And every
                reporting exercise begins with a manual reconciliation across
                systems that were never designed to work together.
              </p>
              <p className="mt-4">
                This is the problem that Stairpay's data infrastructure was
                built to solve.
              </p>
            </>
          }
          image="/images/data-flow.svg"
          imageAlt="Diagram showing fragmented data across disconnected systems — CRM, HMS, spreadsheets, PDFs"
          theme="light"
        />
      </SectionWrapper>

      {/* ─── The Approach ─── */}
      <SectionWrapper theme="dark" id="approach">
        <ApproachSection
          eyebrow="THE APPROACH"
          headline="A Data Model Purpose-Built for Shared Ownership"
          items={[
            {
              icon: <Database className="w-6 h-6" />,
              title: "Single Structured Graph",
              description:
                "Every entity in Shared Ownership — lease, unit, development, homeowner, transaction, charge, compliance obligation — exists once in Stairpay and is connected to every related entity. The data model reflects the actual structure of the tenure, not the organisational structure of any single department.",
            },
            {
              icon: <Link2 className="w-6 h-6" />,
              title: "Inheritable Relationships",
              description:
                "When a lease is ingested, its terms automatically flow to rent calculations, staircasing eligibility, and compliance tracking. When a staircasing transaction completes, the updated share percentage propagates across every downstream system. Data flows through relationships rather than being re-entered at each boundary.",
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Source-Verified Data",
              description:
                "Every data point in Stairpay is traceable to its source — the original lease clause, the transaction record, the valuation report. This is not a data warehouse that aggregates without attribution. It is a structured data layer where every value can be audited back to its origin.",
            },
            {
              icon: <RefreshCw className="w-6 h-6" />,
              title: "Continuous Reconciliation",
              description:
                "Rather than periodic bulk imports that create point-in-time snapshots, Stairpay maintains continuous synchronisation with source systems. Changes propagate in real time, and discrepancies are flagged automatically rather than discovered during annual audits.",
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── Integration Layer ─── */}
      <SectionWrapper theme="light" id="integration-layer">
        <ContentSection
          eyebrow="INTEGRATION"
          headline="Above Your Existing Systems, Not a Replacement"
          body={
            <>
              <p>
                Stairpay's data infrastructure is designed as an integration
                layer — it sits above your existing HMS, CRM, and finance
                platforms, connecting them through a structured data model
                without requiring you to replace any of them.
              </p>
              <p className="mt-4">
                Your HMS continues to manage tenancy records. Your CRM continues
                to handle customer interactions. Your finance platform continues
                to process payments. Stairpay reads from these systems, enriches
                the data with lease intelligence, and provides the unified view
                that none of them can offer individually.
              </p>
              <p className="mt-4">
                This approach eliminates the single largest barrier to platform
                adoption in housing: the requirement to rip and replace. With
                Stairpay, you augment your existing investment rather than
                abandoning it. The data infrastructure layer adds value from day
                one without disrupting established workflows or requiring a
                multi-year migration programme.
              </p>
            </>
          }
          image="/images/data-flow.svg"
          imageAlt="Integration architecture showing Stairpay sitting above existing HMS, CRM, and finance systems"
          reverse
          theme="light"
        />
      </SectionWrapper>

      {/* ─── Metrics ─── */}
      <SectionWrapper theme="darker">
        <MetricCalloutGrid
          theme="dark"
          metrics={[
            { value: "1", label: "Unified Data Model" },
            { value: "0", label: "Data Silos" },
            { value: "Real-time", label: "Cross-System Sync" },
            { value: "100%", label: "Audit Trail Coverage" },
          ]}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="See the Data Infrastructure in Detail"
        description="Request an architecture pack and we will walk through how Stairpay's data model maps to your existing systems, where integration points are, and how the unified data layer creates value across your Shared Ownership operations."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
