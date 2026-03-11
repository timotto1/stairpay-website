import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { InsightCard } from "@/components/sections/InsightCard";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulatory & Compliance Briefings",
  description:
    "Regulatory analysis and compliance briefings for UK shared ownership providers. Covering consumer standards, rent standards, and transparency obligations.",
};

const briefings = [
  {
    title:
      "Consumer Standards and Shared Ownership: Compliance Readiness Assessment",
    category: "Regulatory",
    date: "March 2026",
    excerpt:
      "The Regulator of Social Housing's consumer standards framework introduces obligations that have specific and often underappreciated implications for shared ownership portfolios. This assessment examines provider readiness across the key compliance domains, identifying the operational gaps most likely to attract regulatory attention.",
    href: "/insights/regulatory-briefings",
  },
  {
    title:
      "Transparency, Influence and Accountability Standard: Operational Implications",
    category: "Regulatory",
    date: "January 2026",
    excerpt:
      "The Transparency, Influence and Accountability Standard places new expectations on how housing associations communicate with shared owners and evidence decision-making processes. This briefing analyses the operational changes required and assesses the extent to which current systems support compliance.",
    href: "/insights/regulatory-briefings",
  },
  {
    title:
      "Economic Compliance and Rent Standard: What Providers Must Demonstrate",
    category: "Regulatory",
    date: "November 2025",
    excerpt:
      "Compliance with the Rent Standard in a shared ownership context requires providers to demonstrate that rent calculations are derived from lease terms, applied consistently, and auditable at the individual property level. This briefing examines the evidencing burden and the systemic risks of manual processes.",
    href: "/insights/regulatory-briefings",
  },
];

export default function RegulatoryBriefingsPage() {
  return (
    <>
      <GlobalNav />

      <HeroSection
        eyebrow="REGULATORY"
        headline="Regulatory and Compliance Briefings"
        description="Analysis of the regulatory changes affecting shared ownership providers, with practical assessment of compliance readiness and operational implications."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "All Insights", href: "/insights" }}
      />

      {/* ─── Introduction ─── */}
      <SectionWrapper theme="dark">
        <Container narrow>
          <div className="text-body text-[var(--color-text-secondary)] space-y-5">
            <p>
              The regulatory landscape for shared ownership is shifting. The
              Regulator of Social Housing&apos;s revised consumer standards, the
              evolving expectations around economic compliance, and the growing
              emphasis on transparency and accountability each carry specific
              implications for how providers manage their shared ownership
              portfolios.
            </p>
            <p>
              These briefings are designed for senior leadership teams — directors
              of homeownership, finance directors, and compliance leads — who
              need to understand not just what the regulations say, but what they
              mean in operational terms for shared ownership. Each briefing is
              grounded in the regulatory text and assessed against the practical
              realities of portfolio management at scale.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Briefings Grid ─── */}
      <SectionWrapper theme="darker">
        <Container>
          <Badge>BRIEFINGS</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5 mb-10">
            Published Briefings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {briefings.map((briefing) => (
              <InsightCard
                key={briefing.title}
                title={briefing.title}
                category={briefing.category}
                date={briefing.date}
                excerpt={briefing.excerpt}
                href={briefing.href}
              />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Stay Ahead of Regulatory Change"
        description="Our team provides tailored regulatory assessments for housing associations managing shared ownership portfolios. Understand your compliance position and the operational changes required."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
