import type { Metadata } from "next";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { PersonaExplorer } from "@/components/sections/PersonaExplorer";
import { StatementBanner } from "@/components/sections/StatementBanner";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { VisionBanner } from "@/components/sections/VisionBanner";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { ResidentJourney } from "@/components/sections/ResidentJourney";

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
        headline="End-to-End Infrastructure Built for Shared Ownership"
        description=""
        centered
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

      {/* Everything after hero needs relative + z-10 to scroll over the fixed video */}
      <div className="relative z-10">
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
            video: "/videos/product-1.mov",
          },
          {
            name: "Compliance",
            tagline: "Documents into queryable intelligence.",
            description: "AI-powered extraction processes thousands of lease documents into structured, searchable data — surfacing key dates, clauses, and obligations so your team can act on portfolio-wide intelligence instead of reading PDFs one by one.",
            href: "/intelligence-layers/lease",
            illustration: "/images/product-leasehold.svg",
            video: "/videos/product-2.mov",
          },
          {
            name: "Aftersales",
            tagline: "Proactive staircasing and capital activation.",
            description: "Identifies staircasing opportunities across your entire portfolio and automates outreach to eligible homeowners — turning dormant equity into realised capital while keeping every transaction compliant and fully documented.",
            href: "/intelligence-layers/aftersales",
            illustration: "/images/product-aftersales.svg",
            video: "/videos/product-3.mov",
          },
          {
            name: "Rent",
            tagline: "Lease-compliant rent at portfolio scale.",
            description: "Automates annual rent-setting calculations by reading lease terms directly — handling RPI uplifts, cap-and-collar clauses, and fixed increases across thousands of units without manual interpretation or spreadsheet risk.",
            href: "/intelligence-layers/rent-service-charge",
            illustration: "/images/product-rent.svg",
            video: "/videos/product-1.mov",
          },
          {
            name: "Service Charge",
            tagline: "Transparent apportionment with full audit trails.",
            description: "Calculates and apportions service charges using lease-defined schedules, producing transparent breakdowns for every unit. Complete audit trails ensure every pound is accounted for and defensible under Section 20 consultation.",
            href: "/intelligence-layers/rent-service-charge",
            illustration: "/images/product-service-charge.svg",
            video: "/videos/product-2.mov",
          },
          {
            name: "Audit",
            tagline: "Real-time compliance across every layer.",
            description: "Gives boards and executives a live compliance dashboard spanning every operational layer — flagging overdue actions, incomplete documentation, and regulatory risks before they escalate, with exportable governance reports.",
            href: "/intelligence-layers/portfolio",
            illustration: "/images/product-audit.svg",
            video: "/videos/product-3.mov",
          },
        ]}
      />

      {/* ─── 2c. Vision Banner ─── */}
      <VisionBanner />

      {/* ─── 2d. Resident Journey ─── */}
      <ResidentJourney />

      {/* ─── 3. Persona Explorer ─── */}
      <SectionWrapper theme="white" id="for-providers">
        <Container>
          <PersonaExplorer />
        </Container>
      </SectionWrapper>

      {/* ─── 5. Testimonials ─── */}
      <TestimonialCarousel />

      {/* ─── 6. Final CTA ─── */}
      <CTABlock
        headline="Ready to See the Operating System in Action?"
        description="Book a strategic review with our team. We will walk through how Stairpay maps to your organisation's Shared Ownership operations and where the highest-value opportunities lie."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        theme="dark"
        primaryOpensContactPanel
      />

      <Footer />
      </div>
    </>
  );
}
