import type { Metadata } from "next";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { TeamGrid } from "@/components/sections/TeamGrid";

export const metadata: Metadata = {
  title: "Leadership — Stairpay",
  description:
    "Sector expertise and technical depth. Meet the team building the operating system for Shared Ownership.",
  openGraph: {
    title: "Leadership — Stairpay",
    description:
      "Sector expertise and technical depth. The team building infrastructure for Shared Ownership.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="LEADERSHIP"
        headline="Sector Expertise. Technical Depth."
        description="Stairpay is led by a team that combines deep housing sector knowledge with enterprise technology experience. We understand the operational reality of Shared Ownership — because we have spent our careers working within and alongside the organisations that manage it."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "About Stairpay", href: "/company/about" }}
      />

      {/* ─── Team ─── */}
      <SectionWrapper theme="dark">
        <TeamGrid
          members={[
            {
              name: "Floris [Surname]",
              role: "Chief Executive Officer",
              bio: "Background in housing technology and strategic consulting. Leading Stairpay's vision as sector infrastructure — working with housing association leadership to define the operating model that Shared Ownership needs.",
            },
            {
              name: "Tim [Surname]",
              role: "Head of Product",
              bio: "Product leadership across enterprise platforms. Building the operating system Shared Ownership needs — translating complex operational requirements into structured, scalable capabilities.",
            },
            {
              name: "[Name]",
              role: "Chief Technology Officer",
              bio: "Engineering leadership in regulated industries. Architecting Stairpay's data infrastructure — designing the unified data model and intelligence layers that underpin every capability.",
            },
            {
              name: "[Name]",
              role: "Head of Customer Success",
              bio: "Deep housing association experience across homeownership, sales, and finance operations. Ensuring providers realise full platform value — from initial deployment through to long-term operational transformation.",
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Meet the Team Behind the Platform"
        description="Book a strategic review to discuss how Stairpay can support your organisation. Our leadership team is directly involved in every provider partnership."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
