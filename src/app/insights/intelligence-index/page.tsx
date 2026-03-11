import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { MetricCalloutGrid } from "@/components/sections/MetricCalloutGrid";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shared Ownership Intelligence Index",
  description:
    "A sector-wide data initiative analysing staircasing rates, completion times, LTV patterns, and portfolio performance across UK shared ownership.",
};

export default function IntelligenceIndexPage() {
  return (
    <>
      <GlobalNav />

      <HeroSection
        eyebrow="INTELLIGENCE INDEX"
        headline="The Shared Ownership Intelligence Index"
        description="A 10-year sector-wide data initiative. Stairpay collects, anonymises, and analyses operational data from across the shared ownership sector to produce the most comprehensive evidence base available to UK housing associations."
        primaryCta={{ label: "Request the Full Report", href: "/contact" }}
        secondaryCta={{ label: "All Insights", href: "/insights" }}
      />

      {/* ─── What It Is ─── */}
      <SectionWrapper theme="dark">
        <Container narrow>
          <Badge>ABOUT THE INDEX</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
            What the Intelligence Index Measures
          </h2>
          <div className="text-body text-[var(--color-text-secondary)] mt-5 space-y-5">
            <p>
              The Shared Ownership Intelligence Index is built on anonymised
              operational data contributed by housing associations across England
              and Wales. It tracks the metrics that matter most to providers
              managing shared ownership portfolios at scale: staircasing rates,
              transaction completion times, loan-to-value distributions, mortgage
              rate performance, income risk indicators, and resale analytics.
            </p>
            <p>
              Each data point is collected through the Stairpay platform,
              ensuring consistency of definition and measurement methodology
              across participating organisations. The result is a structured,
              longitudinal dataset that allows providers to benchmark their own
              performance against the national picture with a level of precision
              that has not previously been available to the sector.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Why It Matters ─── */}
      <SectionWrapper theme="darker">
        <Container narrow>
          <Badge>SECTOR IMPACT</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
            Why Collective Intelligence Matters
          </h2>
          <div className="text-body text-[var(--color-text-secondary)] mt-5 space-y-5">
            <p>
              For decades, the shared ownership sector has operated on anecdotal
              knowledge. Individual providers understand their own portfolios to
              varying degrees, but the broader picture — national staircasing
              trends, regional completion patterns, the true distribution of
              transaction values — has remained opaque. Strategic decisions are
              made on instinct rather than evidence.
            </p>
            <p>
              The Intelligence Index represents a shift from fragmented,
              organisation-level insight to structured, evidence-based
              decision-making at sector scale. Every participating provider
              benefits from the collective intelligence of the network. A
              mid-sized association in the West Midlands can benchmark its
              staircasing conversion rate against national norms. A finance
              director in London can assess whether their portfolio&apos;s LTV
              distribution is typical or anomalous. Board members can ground
              strategic discussions in data rather than assumption.
            </p>
            <p>
              This is the foundation on which better policy, better operational
              design, and better outcomes for shared owners will be built.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Key Findings ─── */}
      <SectionWrapper theme="dark">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <Badge>KEY FINDINGS</Badge>
            <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
              2025 National Data
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-4">
              Headline metrics from the latest Intelligence Index publication,
              drawn from anonymised data across the participating provider
              network.
            </p>
          </div>
        </Container>
        <MetricCalloutGrid
          metrics={[
            { value: "23%", label: "Average National Staircasing Rate" },
            { value: "127", label: "Median Completion Time (Days)" },
            { value: "£284K", label: "Average Transaction Value" },
            { value: "68%", label: "of Providers Lack Structured Lease Data" },
          ]}
          theme="dark"
        />
      </SectionWrapper>

      {/* ─── Methodology ─── */}
      <SectionWrapper theme="darker">
        <Container narrow>
          <Badge>METHODOLOGY</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
            Data Collection and Analysis
          </h2>
          <div className="text-body text-[var(--color-text-secondary)] mt-5 space-y-5">
            <p>
              Data is collected through the Stairpay platform as a natural
              by-product of providers&apos; operational workflows. This approach
              eliminates the survey burden and data quality challenges associated
              with traditional sector research. Fields are standardised at the
              point of capture, ensuring comparability across organisations
              regardless of their internal terminology or process variations.
            </p>
            <p>
              All data is anonymised before analysis. Individual provider
              identities are never disclosed, and no data point can be traced
              back to a specific organisation or transaction without that
              provider&apos;s explicit consent. The anonymisation protocol is
              reviewed annually by an independent data governance panel.
            </p>
            <p>
              Analysis is conducted by the Stairpay research team using
              established statistical methods. Findings are peer-reviewed by
              sector advisors prior to publication. The full methodological
              framework is available on request.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        eyebrow="GET THE REPORT"
        headline="Request the Full Intelligence Index"
        description="The complete 2025 Intelligence Index is available to housing association leadership teams. Contact our team to request access to the full report, including regional breakdowns and longitudinal trend analysis."
        ctaLabel="Request the Full Report"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
