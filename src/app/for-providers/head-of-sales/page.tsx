import {
  TrendingUp,
  FileText,
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
  title: "For Heads of Sales — Stairpay",
  description:
    "Full conversion visibility from first enquiry to exchange. Stairpay replaces spreadsheet pipelines with structured sales intelligence for Shared Ownership.",
  openGraph: {
    title: "For Heads of Sales — Stairpay",
    description:
      "Full conversion visibility from first enquiry to exchange. Structured sales intelligence for Shared Ownership providers.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function HeadOfSalesPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="FOR HEADS OF SALES"
        headline="Conversion Visibility from Enquiry to Exchange"
        description="Your sales pipeline lives in spreadsheets, your marketing attribution is guesswork, and your affordability screening is manual. Stairpay gives you structured conversion infrastructure — so you can see exactly where every enquiry stands, why deals stall, and which schemes are performing."
        primaryCta={{ label: "Request a Sales Overview", href: "/contact" }}
        secondaryCta={{ label: "Explore Sales Intelligence", href: "/intelligence-layers/sales" }}
      />

      {/* ─── Your Reality ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">YOUR REALITY</p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            Selling Without Visibility
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              Your team generates hundreds of enquiries each month, but you
              cannot tell which marketing channels are actually driving
              reservations. The gap between a portal enquiry and a completed sale
              is managed through shared spreadsheets, email threads, and
              individual knowledge. When someone leaves the team, their pipeline
              context leaves with them.
            </p>
            <p>
              Affordability screening is a manual, time-intensive process.
              Your sales coordinators spend hours gathering income evidence,
              running calculations, and chasing documents — only to discover
              at the reservation stage that the applicant does not qualify.
              Viewings are arranged for buyers who were never viable, wasting
              both your team&apos;s time and the applicant&apos;s expectations.
            </p>
            <p>
              At scheme level, you have no reliable way to compare performance
              across developments. Which schemes convert fastest. Where the
              drop-off points are. Whether your pricing is aligned with demand.
              These questions require data you simply do not have in a
              structured form — so decisions are made on instinct rather than
              evidence.
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
              icon={<TrendingUp className="w-6 h-6" />}
              title="Sales Intelligence"
              description="A structured conversion pipeline that replaces spreadsheet tracking with governed stage progression. Every enquiry, qualification, viewing, and reservation is tracked with full attribution — from marketing source through to exchange."
              href="/intelligence-layers/sales"
            />
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="Your sales team needs lease terms at the point of enquiry — not days later. Stairpay surfaces key terms, affordability parameters, and scheme-specific conditions automatically, so your team can qualify and advise with confidence."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<PieChart className="w-6 h-6" />}
              title="Portfolio Intelligence"
              description="Scheme-level performance analytics that show conversion rates, pipeline velocity, and pricing effectiveness across your entire development programme. Board-ready sales reporting without manual compilation."
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
              Measurable Impact Across Your Sales Operation
            </h2>
          </div>
        </Container>
        <OutcomesGrid
          outcomes={{
            costReduction: [
              "Full marketing-to-reservation attribution, ending spend on channels that do not convert",
              "Fewer wasted viewings through early affordability qualification",
              "Elimination of manual pipeline compilation and reporting",
            ],
            riskMitigation: [
              "Compliant affordability checks embedded in the qualification workflow",
              "Audit trail for every stage transition and buyer interaction",
              "Consistent qualification standards across all sales coordinators",
            ],
            scalability: [
              "Handle three times the enquiry volume without additional headcount",
              "New scheme launches onboarded into the pipeline in hours, not weeks",
              "Scheme-level performance comparison across the entire development programme",
            ],
          }}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="See How Stairpay Transforms Sales Operations"
        description="Request a sales overview with our team. We will walk through how structured conversion intelligence maps to your pipeline and where the highest-impact improvements lie."
        ctaLabel="Request a Sales Overview"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
