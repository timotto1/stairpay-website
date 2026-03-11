import {
  BarChart3,
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
  title: "For Heads of Aftersales — Stairpay",
  description:
    "Turn staircasing enquiries into capital receipts. Stairpay gives aftersales teams the intelligence to convert reactive enquiry handling into proactive revenue activation.",
  openGraph: {
    title: "For Heads of Aftersales — Stairpay",
    description:
      "Turn staircasing enquiries into capital receipts. Proactive revenue activation for Shared Ownership aftersales teams.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function HeadOfAftersalesPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="FOR HEADS OF AFTERSALES"
        headline="Turn Staircasing Enquiries into Capital Receipts"
        description="Your staircasing enquiries spike unpredictably, your conversion rates are low, and your team has no way to forecast capital receipts. Stairpay turns reactive enquiry handling into structured revenue activation — so every viable staircasing opportunity reaches completion."
        primaryCta={{ label: "Book an Aftersales Review", href: "/contact" }}
        secondaryCta={{ label: "Explore Aftersales Intelligence", href: "/intelligence-layers/aftersales" }}
      />

      {/* ─── Your Reality ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">YOUR REALITY</p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            Enquiry Spikes Without the Infrastructure to Convert
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              When interest rates shift or government policy changes, your
              staircasing enquiry volume can spike by four hundred percent
              overnight. Your team absorbs this through longer hours, borrowed
              staff, and deferred casework — because your processes were designed
              for a steady trickle, not a flood. When the spike subsides, you
              are left with a backlog of partially progressed cases and no clear
              picture of how many will actually complete.
            </p>
            <p>
              Your conversion rate from initial enquiry to completed staircasing
              transaction is low, and you suspect it is lower than it needs to
              be. Homeowners who express interest are met with manual valuation
              processes, spreadsheet-based equity calculations, and response
              times that allow motivation to fade. By the time you have assembled
              the information they need, many have moved on or decided the
              process is too complex.
            </p>
            <p>
              Capital forecasting is essentially guesswork. Your finance team
              asks how much staircasing revenue to expect next quarter, and you
              cannot give them a defensible answer because you have no structured
              view of your pipeline, no readiness scoring, and no way to
              distinguish between casual enquiries and serious intent.
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
              icon={<BarChart3 className="w-6 h-6" />}
              title="Aftersales &amp; Staircasing Intelligence"
              description="Structured staircasing workflows with readiness scoring, automated equity calculations, and capital forecasting. Converts reactive enquiry queues into a governed pipeline where every case has a clear path to completion — or a defensible reason for closure."
              href="/intelligence-layers/aftersales"
            />
            <IntelligenceLayerCard
              icon={<FileText className="w-6 h-6" />}
              title="Lease Intelligence"
              description="Staircasing terms vary lease by lease. Stairpay extracts the specific clauses governing each homeowner's staircasing rights — minimum share thresholds, valuation requirements, notice periods — and surfaces them automatically at the point of enquiry."
              href="/intelligence-layers/lease"
            />
            <IntelligenceLayerCard
              icon={<PieChart className="w-6 h-6" />}
              title="Portfolio Intelligence"
              description="Capital receipt forecasting grounded in actual pipeline data. See which homeowners are most likely to staircase, what the estimated transaction values are, and how your conversion rates compare across developments and time periods."
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
              Measurable Impact Across Your Aftersales Operation
            </h2>
          </div>
        </Container>
        <OutcomesGrid
          outcomes={{
            costReduction: [
              "Increased capital receipts through higher staircasing conversion rates",
              "Revenue activation from homeowners who would otherwise never complete",
              "Elimination of manual valuation coordination and equity calculation processes",
            ],
            riskMitigation: [
              "Defensible segmentation between casual enquiries and serious intent",
              "Lease-compliant staircasing calculations with full audit trail",
              "Consistent process standards across all aftersales coordinators",
            ],
            scalability: [
              "Handle four-hundred-percent enquiry spikes without temporary staff",
              "Automated triage and readiness scoring at point of first contact",
              "Capital forecasting that scales with portfolio size, not team size",
            ],
          }}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="See How Stairpay Activates Staircasing Revenue"
        description="Book an aftersales review with our team. We will walk through how structured staircasing intelligence maps to your portfolio and where the highest-value conversion opportunities lie."
        ctaLabel="Book an Aftersales Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
