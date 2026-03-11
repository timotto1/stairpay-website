import {
  Building2,
  Layers,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import type { Metadata } from "next";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { ApproachSection } from "@/components/sections/ApproachSection";

export const metadata: Metadata = {
  title: "About Stairpay — Building Infrastructure for Shared Ownership",
  description:
    "Stairpay is purpose-built infrastructure for UK housing associations managing Shared Ownership portfolios. Not a SaaS vendor — a long-term infrastructure partner.",
  openGraph: {
    title: "About Stairpay",
    description:
      "Purpose-built infrastructure for UK housing associations managing Shared Ownership portfolios.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function AboutPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="COMPANY"
        headline="Building Infrastructure for Shared Ownership"
        description="Stairpay exists because Shared Ownership has never had the infrastructure it deserves. We are building the data foundation, intelligence layers, and operational tooling that UK housing associations need to manage the tenure at scale — with the rigour it demands."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Meet the Team", href: "/company/leadership" }}
      />

      {/* ─── Our Story ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">OUR STORY</p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            Founded to Solve Structural Inefficiency
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              Shared Ownership is one of the most operationally complex tenures
              in UK housing. It spans sales, homeownership, staircasing, rent
              setting, service charges, and resales — each governed by
              individual lease terms that vary from property to property. Yet
              the technology available to manage this complexity has never been
              purpose-built for the tenure. Housing associations have been forced
              to adapt tools designed for general needs, bolt on spreadsheets
              where systems fall short, and absorb the resulting fragmentation
              through manual processes and stretched teams.
            </p>
            <p>
              Stairpay was founded to change this. We are not a SaaS vendor
              selling modules. We are building long-term infrastructure — a
              unified data foundation and intelligence layer that treats Shared
              Ownership as a first-class tenure rather than an afterthought.
              We work with UK housing associations to understand their
              operational reality, and we build the infrastructure they need
              to govern their portfolios with confidence.
            </p>
            <p>
              Our approach is deliberately long-term. We believe the sector
              needs infrastructure that compounds in value over time — not
              point solutions that solve narrow problems in isolation. Every
              capability we build draws from the same underlying data model,
              so intelligence in one domain enriches every other.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Vision ─── */}
      <SectionWrapper theme="dark">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent-pale)] mb-4">OUR VISION</p>
          <h2 className="text-h2 text-[var(--color-text-primary)] mb-8">
            Purpose-Built Infrastructure, Not Adapted Tools
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-secondary)]">
            <p>
              We believe Shared Ownership operations should run on purpose-built
              infrastructure, not adapted tools from other sectors. The tenure
              has unique data structures, unique regulatory requirements, and
              unique operational workflows. It deserves technology that
              understands these from the ground up — not technology that treats
              them as configuration options within a generic platform.
            </p>
            <p>
              Our vision is a sector where every housing association has
              structured, auditable intelligence across their entire Shared
              Ownership lifecycle. Where lease terms flow automatically into
              rent calculations, staircasing eligibility, and portfolio
              analytics. Where compliance is continuous, not periodic. And where
              operational decisions are grounded in data that is verifiable,
              defensible, and connected.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Values ─── */}
      <SectionWrapper theme="light">
        <ApproachSection
          eyebrow="OUR VALUES"
          headline="What Guides How We Build"
          items={[
            {
              icon: <Building2 className="w-6 h-6" />,
              title: "Sector-First Thinking",
              description:
                "Every decision we make starts with the operational reality of housing associations. We do not build generic capabilities and hope they fit — we understand the sector's specific challenges and build infrastructure that addresses them directly.",
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Infrastructure Over Increments",
              description:
                "We build foundations, not patches. Every capability draws from a shared data model, so improvements in one domain compound across the entire platform. This is a deliberate architectural choice that prioritises long-term value over short-term convenience.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Governance by Design",
              description:
                "Compliance and auditability are not afterthoughts — they are embedded in the architecture. Every data transformation, every AI interpretation, and every calculation carries a complete audit trail back to its source.",
            },
            {
              icon: <Handshake className="w-6 h-6" />,
              title: "Long-Term Partnership",
              description:
                "We do not sell software and move on. We work alongside housing associations as an infrastructure partner — understanding their evolving needs, adapting to regulatory changes, and building capabilities that grow with their portfolios.",
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Learn How Stairpay Can Support Your Organisation"
        description="Book a strategic review with our team. We will walk through how Stairpay's infrastructure maps to your Shared Ownership operations and where the highest-value opportunities lie."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
