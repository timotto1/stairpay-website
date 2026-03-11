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
  title: "Insights",
  description:
    "Research, analysis, and strategic briefings from the Stairpay platform team. Shared Ownership intelligence for UK housing associations.",
};

const featuredInsight = {
  title: "Staircasing Completion Rates: 2025 National Analysis",
  category: "Intelligence Index",
  date: "March 2026",
  excerpt:
    "A comprehensive analysis of staircasing completion rates across the UK shared ownership sector, drawing on anonymised data from over 40 housing associations. The findings reveal significant regional variance and identify the operational factors most strongly correlated with transaction success.",
  href: "/insights/intelligence-index",
};

const insights = [
  {
    title: "AI Governance in Regulated Housing: What the Standards Require",
    category: "AI Governance",
    date: "February 2026",
    excerpt:
      "An examination of the governance frameworks housing associations must adopt as artificial intelligence becomes embedded in operational decision-making. The regulatory landscape is evolving faster than most providers realise.",
    href: "/insights/ai-in-housing",
  },
  {
    title: "Lease Data Quality and Compliance Risk: A National Assessment",
    category: "Sector Analysis",
    date: "January 2026",
    excerpt:
      "New research reveals that the majority of housing associations cannot reliably extract critical clause data from their shared ownership lease portfolios, creating systemic compliance exposure.",
    href: "/insights/sector-reports",
  },
  {
    title: "The True Cost of Manual Rent Setting",
    category: "Sector Analysis",
    date: "December 2025",
    excerpt:
      "Manual rent-setting processes cost the average housing association significantly more than the direct labour hours involved. This analysis quantifies the hidden costs of spreadsheet-based financial operations.",
    href: "/insights/sector-reports",
  },
  {
    title: "Shared Ownership Sales Conversion: Benchmarking Report",
    category: "Intelligence Index",
    date: "November 2025",
    excerpt:
      "Benchmarking data across the shared ownership sales pipeline, from initial enquiry through to reservation. The report identifies where conversion losses occur and which operational interventions have the greatest impact.",
    href: "/insights/intelligence-index",
  },
  {
    title: "Consumer Standards and Shared Ownership: Compliance Readiness Assessment",
    category: "Regulatory",
    date: "November 2025",
    excerpt:
      "An assessment of provider readiness for the Regulator of Social Housing's consumer standards framework, with specific attention to shared ownership obligations and evidencing requirements.",
    href: "/insights/regulatory-briefings",
  },
  {
    title: "Section 20 Consultation: Digital Governance Frameworks",
    category: "Regulatory",
    date: "October 2025",
    excerpt:
      "How digital governance frameworks can strengthen Section 20 consultation processes, reduce administrative burden, and provide defensible audit trails for service charge decisions.",
    href: "/insights/regulatory-briefings",
  },
  {
    title: "CIO Roundtable: Data Architecture for the Next Decade",
    category: "Roundtable",
    date: "January 2026",
    excerpt:
      "Key findings from a convening of senior technology leaders across the housing sector, examining the architectural decisions that will determine operational capability for the next decade.",
    href: "/insights/roundtable-findings",
  },
  {
    title: "Finance Directors Roundtable: Rent Setting and Reconciliation Challenges",
    category: "Roundtable",
    date: "November 2025",
    excerpt:
      "Summary findings from a structured dialogue between finance directors at major housing associations, focused on the operational challenges of rent setting and reconciliation at portfolio scale.",
    href: "/insights/roundtable-findings",
  },
];

export default function InsightsPage() {
  return (
    <>
      <GlobalNav />

      <HeroSection
        eyebrow="INSIGHTS"
        headline="Shared Ownership Intelligence"
        description="Research, analysis, and strategic briefings from the Stairpay platform team."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Intelligence Index", href: "/insights/intelligence-index" }}
      />

      {/* ─── Featured Insight ─── */}
      <SectionWrapper theme="dark">
        <Container>
          <p className="text-eyebrow text-[var(--color-text-muted)] mb-8">
            Featured
          </p>
          <InsightCard
            title={featuredInsight.title}
            category={featuredInsight.category}
            date={featuredInsight.date}
            excerpt={featuredInsight.excerpt}
            href={featuredInsight.href}
            featured
          />
        </Container>
      </SectionWrapper>

      {/* ─── All Insights ─── */}
      <SectionWrapper theme="darker">
        <Container>
          <div className="max-w-[680px] mb-12">
            <Badge>RESEARCH &amp; ANALYSIS</Badge>
            <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
              Latest Publications
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-4">
              Sector research, regulatory briefings, and roundtable findings
              spanning the shared ownership landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight) => (
              <InsightCard
                key={insight.title}
                title={insight.title}
                category={insight.category}
                date={insight.date}
                excerpt={insight.excerpt}
                href={insight.href}
              />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Speak With Our Team"
        description="Book a strategic review to discuss how Stairpay can serve as the operational foundation for your shared ownership portfolio."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
