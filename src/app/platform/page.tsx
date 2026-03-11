import Image from "next/image";
import {
  FileText,
  TrendingUp,
  BarChart3,
  Calculator,
  PieChart,
} from "lucide-react";
import type { Metadata } from "next";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { MetricCalloutGrid } from "@/components/sections/MetricCalloutGrid";
import { ContentSection } from "@/components/sections/ContentSection";
import { IntelligenceLayerCard } from "@/components/sections/IntelligenceLayerCard";

export const metadata: Metadata = {
  title: "Platform Overview — Stairpay",
  description:
    "Unified infrastructure for Shared Ownership. Stairpay replaces fragmented point solutions with a single operating system spanning the entire lifecycle — from Sales to Resale.",
  openGraph: {
    title: "Platform Overview — Stairpay",
    description:
      "Unified infrastructure for Shared Ownership. One platform replacing fragmented point solutions across the entire lifecycle.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function PlatformOverviewPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="PLATFORM"
        headline="The Operating System for Shared Ownership"
        description="Stairpay is unified infrastructure — not another point solution. Every department, every lifecycle stage, and every data source connected through a single platform purpose-built for Shared Ownership. Where other providers bolt together disconnected tools, Stairpay delivers a cohesive operating system that replaces fragmentation with structured intelligence."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Explore the Lifecycle", href: "/platform/lifecycle" }}
      >
        <Image
          src="/images/platform-layers.svg"
          alt="Stairpay platform architecture — existing systems at the base, shared ownership data infrastructure in the middle, intelligence layers on top"
          width={560}
          height={440}
          priority
          className="w-full h-auto"
        />
      </HeroSection>

      {/* ─── How Everything Connects ─── */}
      <SectionWrapper theme="dark" id="architecture">
        <ContentSection
          eyebrow="ARCHITECTURE"
          headline="How Everything Connects"
          body={
            <>
              <p>
                Stairpay is built as a layered architecture designed to sit above
                your existing systems rather than replace them.
              </p>
              <p className="mt-4">
                At the foundation, your existing HMS, CRM, and finance platforms
                continue to operate as they do today. Above them, the Shared
                Ownership Data Infrastructure creates a unified data model —
                connecting every lease, unit, homeowner, and transaction into a
                single structured graph. On top of that foundation, five
                Intelligence Layers deliver operational capability across every
                domain: Lease Intelligence, Sales Intelligence, Aftersales &amp;
                Staircasing, Rent &amp; Service Charge, and Portfolio Intelligence.
              </p>
              <p className="mt-4">
                The result is an architecture where data flows upward from source
                systems, is structured and connected in the data layer, and surfaces
                as actionable intelligence at the point of decision.
              </p>
            </>
          }
          image="/images/platform-layers.svg"
          imageAlt="Layered architecture diagram showing existing systems, data infrastructure, and intelligence layers"
        />
      </SectionWrapper>

      {/* ─── Intelligence Layers Grid ─── */}
      <SectionWrapper theme="light" id="intelligence-layers">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <Badge>INTELLIGENCE LAYERS</Badge>
            <h2 className="text-h2 text-[var(--color-text-dark)] mt-6">
              Five Layers of Operational Intelligence
            </h2>
            <p className="text-body text-[var(--color-text-body)] mt-5">
              Each layer addresses a distinct operational domain within Shared
              Ownership. Together, they form a unified intelligence architecture
              that replaces fragmented tooling with structured, auditable
              infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="Clause extraction with source-text verification, transforming thousands of lease documents into structured, queryable data. Every interpretation is traceable back to the original clause."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Sales Intelligence"
              description="Structured conversion infrastructure that replaces ad-hoc sales pipelines with a governed workflow. Every enquiry, viewing, and reservation tracked through a defined stage model with full audit history."
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
              description="Board-level visibility across every intelligence layer, consolidated into a single analytical surface. Real-time insight into portfolio health, compliance status, and capital forecasting."
              href="/intelligence-layers/portfolio"
            />
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Why Platform, Not Point Solutions ─── */}
      <SectionWrapper theme="dark" id="platform-vs-point">
        <ContentSection
          eyebrow="WHY PLATFORM"
          headline="Why Platform, Not Point Solutions"
          body={
            <>
              <p>
                Most housing associations have accumulated a patchwork of
                disconnected tools over the past decade — one for sales tracking,
                another for lease management, a third for service charge
                calculations, and spreadsheets filling the gaps between them.
              </p>
              <p className="mt-4">
                Each tool solves a narrow problem in isolation, but none of them
                share a data model. The result is operational fragmentation: the
                same homeowner exists as a different record in every system, lease
                terms are re-keyed rather than inherited, and no one has a
                consolidated view of the portfolio.
              </p>
              <p className="mt-4">
                Stairpay takes a fundamentally different approach. Rather than
                selling modules that happen to share a brand, we built a single
                platform where every capability draws from the same underlying data
                infrastructure. When a lease is ingested, its terms flow
                automatically into rent calculations, staircasing eligibility, and
                portfolio analytics — without manual re-entry, without integration
                middleware, and without reconciliation.
              </p>
              <p className="mt-4">
                This is the difference between buying software and adopting
                infrastructure.
              </p>
            </>
          }
          reverse
        />
      </SectionWrapper>

      {/* ─── Metrics ─── */}
      <SectionWrapper theme="darker">
        <MetricCalloutGrid
          theme="dark"
          metrics={[
            { value: "5", label: "Intelligence Layers" },
            { value: "1", label: "Unified Data Model" },
            { value: "100%", label: "Lifecycle Coverage" },
            { value: "0", label: "Data Silos" },
          ]}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="See How Everything Connects"
        description="Book a strategic review with our team. We will walk through how Stairpay's architecture maps to your organisation's Shared Ownership operations and where the highest-value opportunities lie."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
