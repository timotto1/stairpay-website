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
  title: "Sector Reports",
  description:
    "In-depth sector analysis covering shared ownership portfolio performance, staircasing economics, and operational efficiency in UK housing associations.",
};

const reports = [
  {
    title: "Shared Ownership Portfolio Performance: 2025 Annual Review",
    category: "Sector Analysis",
    date: "February 2026",
    excerpt:
      "A comprehensive review of shared ownership portfolio performance across the UK, examining sales volumes, staircasing activity, resale trends, and the financial indicators that define portfolio health. The report draws on anonymised platform data and publicly available regulatory returns to provide the most complete picture of sector performance available.",
    href: "/insights/sector-reports",
  },
  {
    title: "Staircasing Economics: Mortgage Rates, Readiness, and Conversion",
    category: "Sector Analysis",
    date: "December 2025",
    excerpt:
      "An analysis of the economic factors influencing staircasing activity, with particular attention to the relationship between mortgage rate environments and homeowner readiness. The report examines how providers can move from reactive enquiry handling to proactive identification of staircasing-ready homeowners through structured data analysis.",
    href: "/insights/sector-reports",
  },
  {
    title:
      "The Hidden Cost of Operational Fragmentation in Housing Associations",
    category: "Sector Analysis",
    date: "October 2025",
    excerpt:
      "Operational fragmentation — the accumulation of disconnected systems, manual processes, and siloed data across departments — carries costs that rarely appear on a balance sheet. This report quantifies the impact of fragmentation on shared ownership operations, from duplicated data entry through to delayed compliance reporting and lost staircasing revenue.",
    href: "/insights/sector-reports",
  },
];

export default function SectorReportsPage() {
  return (
    <>
      <GlobalNav />

      <HeroSection
        eyebrow="SECTOR ANALYSIS"
        headline="Sector Reports"
        description="In-depth analysis of shared ownership performance, economics, and operational practice across the UK housing sector."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "All Insights", href: "/insights" }}
      />

      {/* ─── Introduction ─── */}
      <SectionWrapper theme="dark">
        <Container narrow>
          <div className="text-body text-[var(--color-text-secondary)] space-y-5">
            <p>
              These reports represent the Stairpay research team&apos;s analysis
              of structural trends, economic dynamics, and operational patterns
              within the UK shared ownership sector. Each publication is
              grounded in data — drawn from anonymised platform activity, public
              regulatory returns, and structured provider research — and written
              for an audience of senior housing leaders who need evidence, not
              opinion.
            </p>
            <p>
              Full reports are available on request to housing association
              leadership teams. Summary findings are published here.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Reports Grid ─── */}
      <SectionWrapper theme="darker">
        <Container>
          <Badge>PUBLISHED REPORTS</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5 mb-10">
            Latest Sector Analysis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <InsightCard
                key={report.title}
                title={report.title}
                category={report.category}
                date={report.date}
                excerpt={report.excerpt}
                href={report.href}
              />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Request a Full Report"
        description="Our sector reports are available to housing association leadership teams. Contact our team to request access or discuss the findings in relation to your organisation."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
