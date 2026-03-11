import type { Metadata } from "next";
import Image from "next/image";
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
import { LogoBar } from "@/components/sections/LogoBar";
import { MetricCalloutGrid } from "@/components/sections/MetricCalloutGrid";
import { PersonaTileGrid } from "@/components/sections/PersonaTileGrid";
import { LifecycleVisual } from "@/components/sections/LifecycleVisual";
import { IntelligenceLayerCard } from "@/components/sections/IntelligenceLayerCard";
import { ContentSection } from "@/components/sections/ContentSection";

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
        eyebrow="SHARED OWNERSHIP INFRASTRUCTURE"
        headline="The Operating System for Shared Ownership"
        description="Enterprise-grade infrastructure spanning the entire Shared Ownership lifecycle. From first enquiry through to resale, Stairpay gives housing associations the intelligence layer they have never had — purpose-built for regulated portfolios at scale."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Request a Platform Overview", href: "/platform" }}
      >
        <Image
          src="/images/architecture-hero.svg"
          alt="Stairpay platform architecture diagram showing interconnected intelligence layers"
          width={560}
          height={440}
          priority
          className="w-full h-auto"
        />
      </HeroSection>

      {/* ─── 2. Logo Bar ─── */}
      <LogoBar />

      {/* ─── 3. Lifecycle Section ─── */}
      <SectionWrapper theme="dark" id="lifecycle">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <Badge>THE COMPLETE LIFECYCLE</Badge>
            <h2 className="text-h2 text-[var(--color-text-primary)] mt-6">
              Intelligence Across Every Stage
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-5">
              Most providers manage Shared Ownership through disconnected
              spreadsheets, siloed teams, and legacy systems that were never
              designed for the tenure. Stairpay spans the full arc — Sales,
              Move-in, Homeownership, Staircasing, Rent &amp; Service Charge,
              and Resale — delivering structured intelligence at every
              transition point.
            </p>
          </div>
          <LifecycleVisual />
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
      <SectionWrapper theme="dark" id="for-providers">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <Badge>FOR PROVIDERS</Badge>
            <h2 className="text-h2 text-[var(--color-text-primary)] mt-6">
              Built for Shared Ownership Leadership
            </h2>
          </div>

          <PersonaTileGrid
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
        theme="dark"
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
