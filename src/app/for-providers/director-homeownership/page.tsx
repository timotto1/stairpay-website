import {
  FileText,
  BarChart3,
  PieChart,
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
  title: "For Directors of Homeownership — Stairpay",
  description:
    "Governance confidence across your Shared Ownership portfolio. Stairpay replaces fragmented lease data and reactive compliance with structured, auditable intelligence.",
  openGraph: {
    title: "For Directors of Homeownership — Stairpay",
    description:
      "Governance confidence across your Shared Ownership portfolio. Structured, auditable intelligence for directors managing growing portfolios.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function DirectorHomeownershipPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="FOR DIRECTORS OF HOMEOWNERSHIP"
        headline="Governance Confidence Across Your Portfolio"
        description="Your Shared Ownership portfolio is growing, but your team is not growing with it. Stairpay gives you the structured intelligence layer to govern lease obligations, respond to queries defensibly, and evidence compliance at board level — without adding headcount."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      />

      {/* ─── Your Reality ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">YOUR REALITY</p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            The Operational Weight of a Growing Portfolio
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              Your lease data sits across multiple systems, document stores, and
              spreadsheets — none of which were designed to talk to each other.
              When a solicitor sends a standard enquiry pack, your team spends
              hours locating clauses, cross-referencing original documents, and
              manually assembling responses. The same questions come in
              repeatedly, and each time the answer has to be reconstructed from
              scratch.
            </p>
            <p>
              Compliance gaps are not discovered proactively. They surface during
              audits, during regulatory reviews, or when a homeowner raises a
              complaint that exposes an obligation your team did not know existed.
              Your governance reporting to the board is built on best-effort
              summaries rather than structured, verifiable data.
            </p>
            <p>
              Meanwhile, your portfolio continues to grow. New developments
              bring new leases with new clause variations, new obligations, and
              new risks. Your team is absorbing all of this through manual
              processes that were already stretched. The question is not whether
              something will be missed — it is when.
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
              Intelligence Layers Built for Your Role
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="Every lease in your portfolio ingested, structured, and queryable. Clause-level extraction with source-text verification means your team can answer solicitor enquiries in minutes — with a defensible audit trail back to the original document."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Aftersales Intelligence"
              description="Structured workflows for staircasing, resales, and homeowner enquiries. Your aftersales operations move from reactive queue management to a governed process with clear stage progression and outcome tracking."
              href="/intelligence-layers/aftersales"
            />
            <IntelligenceLayerCard
              icon={<PieChart className="w-6 h-6" />}
              title="Portfolio Intelligence"
              description="Board-level visibility across the entire Shared Ownership portfolio. Compliance status, obligation tracking, and risk exposure consolidated into a single analytical surface — replacing spreadsheet summaries with structured governance data."
              href="/intelligence-layers/portfolio"
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
              Measurable Impact Across Your Operations
            </h2>
          </div>
        </Container>
        <OutcomesGrid
          outcomes={{
            costReduction: [
              "Reduced dependency on external consultants for lease interpretation",
              "Solicitor enquiry resolution time cut from days to minutes",
              "Elimination of manual clause-by-clause document reviews",
            ],
            riskMitigation: [
              "Continuous compliance monitoring across every lease obligation",
              "Audit-ready governance data available on demand",
              "Proactive identification of compliance gaps before they surface in reviews",
            ],
            scalability: [
              "Portfolio growth absorbed without proportional headcount increases",
              "New developments onboarded with structured lease ingestion from day one",
              "Consistent governance standards across legacy and new-build stock",
            ],
          }}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="See How Stairpay Supports Homeownership Governance"
        description="Book a strategic review with our team. We will walk through how Stairpay maps to your portfolio obligations and where structured intelligence can reduce your operational exposure."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
