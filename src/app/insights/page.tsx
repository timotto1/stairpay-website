import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { InsightCard } from "@/components/sections/InsightCard";
import { Badge } from "@/components/ui/Badge";
import { getAllInsights } from "@/lib/content/insights";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Research, analysis, and strategic briefings from the Stairpay platform team. Shared Ownership intelligence for UK housing associations.",
};

export default function InsightsPage() {
  const insights = getAllInsights();
  const [featured, ...rest] = insights;

  return (
    <>
      <GlobalNav />

      <HeroSection
        eyebrow="INSIGHTS"
        headline="Shared Ownership Intelligence"
        description="Research, analysis, and strategic briefings from the Stairpay platform team."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
      />

      {/* ─── Featured Insight ─── */}
      {featured && (
        <SectionWrapper theme="dark">
          <Container>
            <p className="text-eyebrow text-[var(--color-text-muted)] mb-8">
              Featured
            </p>
            <InsightCard
              title={featured.title}
              category={featured.category}
              date={featured.dateDisplay}
              excerpt={featured.excerpt}
              href={featured.href}
              featured
            />
          </Container>
        </SectionWrapper>
      )}

      {/* ─── All Insights ─── */}
      {rest.length > 0 && (
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
              {rest.map((insight) => (
                <InsightCard
                  key={insight.slug}
                  title={insight.title}
                  category={insight.category}
                  date={insight.dateDisplay}
                  excerpt={insight.excerpt}
                  href={insight.href}
                />
              ))}
            </div>
          </Container>
        </SectionWrapper>
      )}

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Speak With Our Team"
        description="Book a strategic review to discuss how Stairpay can serve as the operational foundation for your shared ownership portfolio."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        theme="dark"
      />

      <Footer />
    </>
  );
}
