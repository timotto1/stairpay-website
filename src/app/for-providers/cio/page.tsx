import {
  Server,
  FileText,
  PieChart,
  ShieldCheck,
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
  title: "For Chief Information Officers — Stairpay",
  description:
    "Unified architecture for Shared Ownership. Stairpay replaces legacy system sprawl with a single platform — purpose-built for regulated housing, with enterprise-grade AI governance.",
  openGraph: {
    title: "For Chief Information Officers — Stairpay",
    description:
      "Unified architecture for Shared Ownership. A single platform replacing legacy system sprawl, with enterprise AI governance.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function CIOPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="FOR CHIEF INFORMATION OFFICERS"
        headline="Unified Architecture for Shared Ownership"
        description="Your Shared Ownership operations run across a patchwork of legacy systems, each with its own data model, vendor relationship, and integration burden. Stairpay consolidates this into a single architectural layer — purpose-built for the tenure, governed for the regulator, and designed to replace fragmentation with structure."
        primaryCta={{ label: "Request Architecture Pack", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      />

      {/* ─── Your Reality ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">YOUR REALITY</p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            Legacy Sprawl Across Every Department
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              Your housing management system was built for general needs stock.
              Your CRM was implemented for a different purpose entirely. Your
              finance platform handles rent collection but has no understanding
              of Shared Ownership lease structures. And between all of these
              systems sit integrations — some maintained, some fragile, some
              undocumented — that your team spends significant resource keeping
              alive. None of these systems share a data model, and none were
              designed for Shared Ownership.
            </p>
            <p>
              The result is that your organisation has no unified view of a
              Shared Ownership homeowner. The same person exists as a different
              record in every system. Lease terms are re-keyed rather than
              inherited. Data quality degrades at every integration boundary.
              Your team spends more time reconciling systems than delivering
              value — and every new requirement means another integration to
              build and maintain.
            </p>
            <p>
              AI adds a new dimension of complexity. Your board is asking about
              artificial intelligence, but your current architecture offers no
              governed path to adoption. Public AI models are unsuitable for
              regulated data. Vendor AI claims are opaque. And without a unified
              data foundation, any AI initiative would be built on the same
              fragmented, inconsistent data that already undermines your
              operational reporting.
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
              Architecture Designed for Your Challenges
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <IntelligenceLayerCard
              icon={<Server className="w-6 h-6" />}
              title="Data Infrastructure"
              description="A unified data model purpose-built for Shared Ownership. Every lease, unit, homeowner, and transaction connected in a single structured graph — sitting above your existing systems rather than replacing them. Clean integration boundaries with your HMS, CRM, and finance platforms."
              href="/platform/data-infrastructure"
            />
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="AI-powered document processing within a controlled, governed environment. Lease clauses are extracted, structured, and verified against source text — providing the foundational data layer that every other capability depends on."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<PieChart className="w-6 h-6" />}
              title="Portfolio Intelligence"
              description="A single analytical surface that consolidates operational data from every intelligence layer. Replaces the dashboard sprawl of disconnected systems with unified reporting across sales, homeownership, finance, and compliance."
              href="/intelligence-layers/portfolio"
            />
            <IntelligenceLayerCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="AI Governance"
              description="No public AI models. No uncontrolled data exposure. All processing occurs within a governed environment with source-text verification, human-in-the-loop validation, and complete audit logging. Designed for regulated housing from the ground up."
              href="/platform/ai-governance"
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
              Measurable Impact Across Your Technology Estate
            </h2>
          </div>
        </Container>
        <OutcomesGrid
          outcomes={{
            costReduction: [
              "Reduced integration maintenance across HMS, CRM, and finance systems",
              "Consolidation of point-solution licences and vendor relationships",
              "Lower total cost of ownership through a platform approach rather than per-module procurement",
            ],
            riskMitigation: [
              "Enterprise AI governance framework designed for regulated housing",
              "Full data sovereignty with UK residency and controlled processing environments",
              "Audit-grade logging across every data transformation and AI interpretation",
            ],
            scalability: [
              "Platform architecture that absorbs new capabilities without new integrations",
              "Unified data model that scales with portfolio growth",
              "Single vendor relationship replacing multi-vendor coordination overhead",
            ],
          }}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="See How the Architecture Works"
        description="Request our architecture pack. We will provide a detailed technical overview of Stairpay's data model, integration approach, AI governance framework, and deployment architecture — tailored to your existing technology estate."
        ctaLabel="Request Architecture Pack"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
