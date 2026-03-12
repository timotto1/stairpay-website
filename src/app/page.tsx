import type { Metadata } from "next";
import {
  FileText,
  TrendingUp,
  BarChart3,
  Calculator,
  PieChart,
  Shield,
  Target,
  Server,
} from "lucide-react";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { MetricCalloutGrid } from "@/components/sections/MetricCalloutGrid";
import { PersonaTileGrid } from "@/components/sections/PersonaTileGrid";
import { DataFlowVisual } from "@/components/sections/DataFlowVisual";
import { IntelligenceLayerCard } from "@/components/sections/IntelligenceLayerCard";
import { ContentSection } from "@/components/sections/ContentSection";
import { StatementBanner } from "@/components/sections/StatementBanner";
import { ProductShowcase } from "@/components/sections/ProductShowcase";

export const metadata: Metadata = {
  title: "Stairpay — The Operating System for Shared Ownership",
  description:
    "Enterprise-grade infrastructure for UK housing associations. Intelligence across the entire Shared Ownership lifecycle — from Sales to Resale.",
  openGraph: {
    title: "Stairpay — The Operating System for Shared Ownership",
    description:
      "Enterprise-grade infrastructure for UK housing associations. Intelligence across the entire Shared Ownership lifecycle.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function HomePage() {
  return (
    <>
      <GlobalNav />

      {/* ─── 1. Hero ─── */}
      <HeroSection
        headline="Automated Operations for UK Housing Associations"
        description="Enterprise-grade infrastructure spanning the entire affordable housing lifecycle."
        videoSources={[
          "/videos/istockphoto-1346887239-640_adpp_is.mp4",
          "/videos/istockphoto-1780339786-640_adpp_is.mp4",
        ]}
        logoTicker={[
          "Clarion",
          "SNG",
          "Settle",
          "Paradigm",
          "Auxesia",
          "Midland Heart",
          "MTD",
          "Resi Housing",
          "Places for People",
          "Sage Homes",
          "M&G",
          "Green Square Accord",
          "Platform",
          "Southern Housing",
          "Moat",
        ]}
      />

      {/* ─── 2. Statement Banner ─── */}
      <StatementBanner>
        Our software powers{" "}
        <span className="text-[var(--color-accent)]">a third of all shared ownership homes</span>{" "}
        in the UK — from initial inquiry to reaching 100%.
      </StatementBanner>

      {/* ─── 2b. Product Showcase ─── */}
      <ProductShowcase
        products={[
          {
            name: "Sales",
            tagline: "First enquiry to legal completion.",
            description: "A structured, governed pipeline that replaces spreadsheets and email chains — tracking every enquiry from initial contact through viewings, reservations, and legal completion with full audit trails and automated stage progression.",
            href: "/intelligence-layers/sales",
            illustration: "/images/product-sales.svg",
          },
          {
            name: "Leasehold",
            tagline: "Documents into queryable intelligence.",
            description: "AI-powered extraction processes thousands of lease documents into structured, searchable data — surfacing key dates, clauses, and obligations so your team can act on portfolio-wide intelligence instead of reading PDFs one by one.",
            href: "/intelligence-layers/lease",
            illustration: "/images/product-leasehold.svg",
          },
          {
            name: "Aftersales",
            tagline: "Proactive staircasing and capital activation.",
            description: "Identifies staircasing opportunities across your entire portfolio and automates outreach to eligible homeowners — turning dormant equity into realised capital while keeping every transaction compliant and fully documented.",
            href: "/intelligence-layers/aftersales",
            illustration: "/images/product-aftersales.svg",
          },
          {
            name: "Rent",
            tagline: "Lease-compliant rent at portfolio scale.",
            description: "Automates annual rent-setting calculations by reading lease terms directly — handling RPI uplifts, cap-and-collar clauses, and fixed increases across thousands of units without manual interpretation or spreadsheet risk.",
            href: "/intelligence-layers/rent-service-charge",
            illustration: "/images/product-rent.svg",
          },
          {
            name: "Service Charge",
            tagline: "Transparent apportionment with full audit trails.",
            description: "Calculates and apportions service charges using lease-defined schedules, producing transparent breakdowns for every unit. Complete audit trails ensure every pound is accounted for and defensible under Section 20 consultation.",
            href: "/intelligence-layers/rent-service-charge",
            illustration: "/images/product-service-charge.svg",
          },
          {
            name: "Audit",
            tagline: "Real-time compliance across every layer.",
            description: "Gives boards and executives a live compliance dashboard spanning every operational layer — flagging overdue actions, incomplete documentation, and regulatory risks before they escalate, with exportable governance reports.",
            href: "/intelligence-layers/portfolio",
            illustration: "/images/product-audit.svg",
          },
        ]}
      />

      {/* ─── 3. Data Infrastructure ─── */}
      <SectionWrapper theme="light" id="data-infrastructure">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <Badge theme="light">DATA INFRASTRUCTURE</Badge>
            <h2 className="text-h2 text-[var(--color-text-dark)] mt-6">
              Every Document. One Database. Total Control.
            </h2>
            <p className="text-body text-[var(--color-text-body)] mt-5">
              Stairpay ingests every document type an institutional landlord holds — leases, EPCs, fire safety certificates, tenancy agreements, valuations, and development records — into a single structured database. From that foundation, every operational workflow is automated: lease extensions, staircasing, rent setting, service charge reconciliation, and more.
            </p>
          </div>
          <DataFlowVisual />
        </Container>
      </SectionWrapper>

      {/* ─── 4. Intelligence Layers ─── */}
      <SectionWrapper theme="light" id="intelligence-layers">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <Badge>INTELLIGENCE LAYERS</Badge>
            <h2 className="text-h2 text-[var(--color-text-dark)] mt-6">
              Five Layers of Operational Intelligence
            </h2>
            <p className="text-body text-[var(--color-text-body)] mt-5">
              Each layer addresses a distinct operational domain within Shared
              Ownership — from lease clause extraction through to board-level
              portfolio visibility. Together, they form a unified intelligence
              architecture that replaces fragmented tooling with structured,
              auditable infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="AI-powered clause extraction with source-text verification, transforming thousands of lease documents into structured, queryable data. Every interpretation is traceable back to the original clause."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Sales Intelligence"
              description="Structured conversion infrastructure that replaces ad-hoc sales pipelines with a governed workflow. Every enquiry, viewing, and reservation is tracked through a defined stage model with full audit history."
              href="/intelligence-layers/sales"
            />
            <IntelligenceLayerCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Aftersales & Staircasing"
              description="Capital activation and readiness scoring that identifies staircasing opportunities across the portfolio. Converts reactive enquiry handling into proactive revenue forecasting."
              href="/intelligence-layers/aftersales"
            />
            <IntelligenceLayerCard
              icon={<Calculator className="w-6 h-6" />}
              title="Rent & Service Charge"
              description="Financial control purpose-built for regulated Shared Ownership portfolios. Automates rent-setting calculations, tracks service charge apportionments, and ensures compliance with lease terms at scale."
              href="/intelligence-layers/rent-service-charge"
            />
            <IntelligenceLayerCard
              icon={<PieChart className="w-6 h-6" />}
              title="Portfolio Intelligence"
              description="Board-level visibility across every intelligence layer, consolidated into a single analytical surface. Provides real-time insight into portfolio health, compliance status, and capital forecasting."
              href="/intelligence-layers/portfolio"
            />
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── 5. Built for Shared Ownership Leadership ─── */}
      <SectionWrapper theme="white" id="for-providers">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <Badge theme="light">FOR PROVIDERS</Badge>
            <h2 className="text-h2 text-[var(--color-text-dark)] mt-6">
              Built for Shared Ownership Leadership
            </h2>
          </div>

          <PersonaTileGrid
            theme="light"
            personas={[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Director of Homeownership",
                pain: "Lease compliance obligations growing faster than the team. Critical obligations tracked in spreadsheets, with no reliable way to evidence governance at board level.",
                outcome: "Complete governance confidence with auditable lease intelligence across the entire portfolio, surfacing compliance risks before they become liabilities.",
                href: "/for-providers/director-of-homeownership",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Head of Sales",
                pain: "Sales pipelines managed through disconnected spreadsheets with no stage visibility. Conversion rates are unknown, and forecasting is guesswork.",
                outcome: "Full conversion visibility from first enquiry to reservation, with structured stage progression and real-time pipeline analytics.",
                href: "/for-providers/head-of-sales",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Head of Aftersales",
                pain: "Staircasing enquiry spikes handled reactively, with no way to forecast demand or identify high-propensity homeowners before they make contact.",
                outcome: "Proactive capital activation through readiness scoring and structured staircasing workflows that convert enquiries into completed transactions.",
                href: "/for-providers/head-of-aftersales",
              },
              {
                icon: <Calculator className="w-6 h-6" />,
                title: "Finance Director",
                pain: "Manual rent-setting calculations across hundreds of properties, with service charge apportionments tracked in legacy systems that cannot scale.",
                outcome: "Automated financial control with lease-compliant rent calculations, transparent apportionment logic, and a complete audit trail for every charge.",
                href: "/for-providers/finance-director",
              },
              {
                icon: <Server className="w-6 h-6" />,
                title: "CIO",
                pain: "Legacy system sprawl across sales, homeownership, and finance — each with its own data model, vendor relationship, and integration burden.",
                outcome: "Unified architecture that consolidates Shared Ownership operations into a single platform, reducing integration complexity and total cost of ownership.",
                href: "/for-providers/cio",
              },
            ]}
          />
        </Container>
      </SectionWrapper>

      {/* ─── 6. Metrics ─── */}
      <MetricCalloutGrid
        theme="light"
        metrics={[
          { value: "6", label: "Intelligence Layers" },
          { value: "100%", label: "Lifecycle Coverage" },
          { value: "£12.4M", label: "Capital Forecast Annually" },
          { value: "94%", label: "Audit Compliance Rate" },
        ]}
      />

      {/* ─── 7. Platform Positioning ─── */}
      <ContentSection
        eyebrow="PLATFORM"
        headline="One Platform. Every Department. Complete Visibility."
        body="Stairpay replaces the patchwork of disconnected point solutions that most housing associations have accumulated over the past decade. Sales, homeownership, finance, and compliance teams operate from a single source of truth — with structured data flowing between departments rather than trapped in silos. The result is an organisation that can govern its Shared Ownership portfolio with the same rigour it applies to its core social housing stock."
        image="/images/platform-layers.svg"
        imageAlt="Stairpay unified platform architecture showing all departments connected through a single intelligence layer"
        theme="light"
      />

      {/* ─── 8. Final CTA ─── */}
      <CTABlock
        headline="Ready to See the Operating System in Action?"
        description="Book a strategic review with our team. We will walk through how Stairpay maps to your organisation's Shared Ownership operations and where the highest-value opportunities lie."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
