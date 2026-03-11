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
  title: "Roundtable Findings",
  description:
    "Summary findings from Stairpay-convened roundtables with senior housing association leaders, covering data architecture, rent setting, and operational strategy.",
};

const roundtables = [
  {
    title: "CIO Roundtable: Data Architecture for the Next Decade",
    category: "Roundtable",
    date: "January 2026",
    excerpt:
      "Stairpay convened chief information officers and heads of digital from twelve housing associations for a structured dialogue on the data architecture decisions that will shape operational capability over the next decade. The discussion surfaced a shared recognition that current system landscapes — often comprising dozens of loosely integrated point solutions — are approaching the limits of their viability. Participants identified data ownership, integration strategy, and the transition from document-based to structured data as the three most consequential architectural challenges facing the sector.",
    href: "/insights/roundtable-findings",
  },
  {
    title:
      "Finance Directors Roundtable: Rent Setting and Reconciliation Challenges",
    category: "Roundtable",
    date: "November 2025",
    excerpt:
      "A convening of finance directors from major housing associations focused on the operational challenges of shared ownership rent setting and reconciliation. Participants described rent-setting processes that remain heavily manual, dependent on spreadsheet-based calculations, and vulnerable to errors that are difficult to detect before notices are issued. The discussion identified a sector-wide desire for auditable, lease-derived rent calculations — and a recognition that most current systems cannot deliver this.",
    href: "/insights/roundtable-findings",
  },
  {
    title:
      "Homeownership Directors Roundtable: Governance and Portfolio Visibility",
    category: "Roundtable",
    date: "September 2025",
    excerpt:
      "Directors of homeownership from eight registered providers discussed the growing governance burden associated with shared ownership portfolios, the challenges of evidencing compliance at board level, and the operational limitations of systems designed primarily for general needs housing. The roundtable identified lease intelligence, staircasing visibility, and cross-departmental data consistency as the three areas where the governance gap is most acute.",
    href: "/insights/roundtable-findings",
  },
];

export default function RoundtableFindingsPage() {
  return (
    <>
      <GlobalNav />

      <HeroSection
        eyebrow="ROUNDTABLES"
        headline="Roundtable Findings"
        description="Summary findings from structured convenings of senior housing association leaders, exploring the operational and strategic challenges facing the shared ownership sector."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "All Insights", href: "/insights" }}
      />

      {/* ─── Introduction ─── */}
      <SectionWrapper theme="dark">
        <Container narrow>
          <div className="text-body text-[var(--color-text-secondary)] space-y-5">
            <p>
              Stairpay convenes regular roundtable discussions with senior
              leaders from across the UK housing sector. These are not
              marketing events. They are structured, facilitated conversations
              designed to surface the operational realities that shape shared
              ownership management — the challenges that rarely appear in
              sector surveys but define the daily experience of the teams
              responsible for portfolio governance.
            </p>
            <p>
              Participation is by invitation, and discussions are conducted
              under Chatham House rules. The summaries published here capture
              the key themes and findings without attributing specific positions
              to individual participants or organisations.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Roundtables Grid ─── */}
      <SectionWrapper theme="darker">
        <Container>
          <Badge>PUBLISHED FINDINGS</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5 mb-10">
            Recent Roundtables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roundtables.map((roundtable) => (
              <InsightCard
                key={roundtable.title}
                title={roundtable.title}
                category={roundtable.category}
                date={roundtable.date}
                excerpt={roundtable.excerpt}
                href={roundtable.href}
              />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Join a Future Roundtable"
        description="Our roundtable programme is open to senior leaders at UK housing associations managing shared ownership portfolios. Contact our team to express interest in upcoming convenings."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
