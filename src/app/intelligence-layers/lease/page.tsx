import type { Metadata } from "next";
import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { Badge } from "@/components/ui/Badge";
import { CornerstoneHeroVisual } from "@/components/visuals/CornerstoneHeroVisual";
import { GridTravellers } from "@/components/visuals/GridTraveller";
import { CapabilityOverview } from "@/components/sections/CapabilityOverview";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { DocumentExtraction } from "@/components/sections/DocumentExtraction";

export const metadata: Metadata = {
  title: "Stairpay Cornerstone — Your Living System of Record",
  description:
    "Cornerstone allows you to build and maintain the foundational data and pipelines to empower your organisation.",
};


const detailBlocks = [
  {
    number: "01",
    heading: "Clean messy data",
    intro: "Cornerstone ingests historical records and normalises them against your data model — no matter the format. What used to take weeks of manual reconciliation becomes a structured, repeatable process.",
    subs: [
      {
        title: "Legacy ingestion",
        body: "Shared ownership portfolios carry years of data in inconsistent formats, missing fields, and information locked in PDFs and scanned documents. Cornerstone processes these records automatically and maps them to your data model.",
      },
      {
        title: "Anomaly detection",
        body: "Records that don't match expected patterns are flagged for review rather than silently accepted. Your team resolves exceptions from a structured queue instead of discovering problems months later.",
      },
    ],
  },
  {
    number: "02",
    heading: "Automate data updates",
    intro: "When portfolio events happen, your records update themselves. Ownership percentages, rent charges, and resident details stay current without manual intervention.",
    subs: [
      {
        title: "Event-driven updates",
        body: "Cornerstone connects directly to the events that trigger changes — staircasing transactions, valuations, resident moves. When something happens, every dependent field updates together, in real time.",
      },
      {
        title: "End-to-end consistency",
        body: "When a staircasing transaction completes, the ownership share, rent charge, and resident record update as a single operation. No one needs to remember to update a spreadsheet.",
      },
    ],
  },
  {
    number: "03",
    heading: "Act on compliance before it's due",
    intro: "Cornerstone tracks every compliance milestone across your portfolio and surfaces what needs attention before it becomes overdue. Your team works from a forward-looking schedule, not a reactive one.",
    subs: [
      {
        title: "Portfolio-wide tracking",
        body: "Lease event dates, regulatory reporting deadlines, and resident communication obligations are monitored across every property. Nothing depends on someone remembering to check.",
      },
      {
        title: "Forward-looking visibility",
        body: "Your team sees what's coming, what's due, and what's been completed — moving from chasing missed deadlines to managing a structured calendar of obligations.",
      },
    ],
  },
  {
    number: "04",
    heading: "Automate repeated workflows",
    intro: "Every housing association has processes that follow the same pattern hundreds of times a year. Cornerstone turns them into configurable workflows that execute consistently, every time.",
    subs: [
      {
        title: "Configurable execution",
        body: "Annual rent reviews, statement generation, resident correspondence, internal approvals — these become defined workflows that run without manual effort.",
      },
      {
        title: "Human judgement where it matters",
        body: "Your team focuses on the cases that need thought, not the ones that just need the same steps followed in the same order.",
      },
    ],
  },
  {
    number: "05",
    heading: "Build a complete audit trail",
    intro: "Every field change, every automated update, every manual override — logged, timestamped, and attributed. Cornerstone maintains an immutable record of what changed, when, by whom, and why.",
    subs: [
      {
        title: "Immutable record",
        body: "Full traceability is built into the system, not bolted on after the fact. Every change is captured with who made it, when, and the reason.",
      },
      {
        title: "Instant answers",
        body: "When auditors ask questions, when the board wants assurance, when a resident queries their record — the answer is already there. No reconstructing history from email threads and file versions.",
      },
    ],
  },
];


export default function DataIntelligencePage() {
  return (
    <>
      <GlobalNav />
      <main>
        {/* ─── 1. Hero ─── */}
        <HeroSection
          eyebrow="DATA INTELLIGENCE"
          headline={
            <span className="relative block">
              <span className="invisible block" aria-hidden="true">Stairpay</span>
              <span className="invisible block" aria-hidden="true">Cornerstone</span>
              <span className="absolute left-0 top-0 block">
                <span className="block"><TypeWriter text="Stairpay" speed={12} startOnMount delay={800} /></span>
                <span className="block"><TypeWriter text="Cornerstone" speed={12} startOnMount delay={896} /></span>
              </span>
            </span>
          }
          description="Stairpay's AI platform turns messy, disorganised files into a living digital record of your portfolio — always accurate, always up to date."
          primaryCta={{ label: "Watch the Demo", href: "/contact" }}
          theme="dark"
          centered={false}
          decoration={<GridTravellers />}
        >
          <CornerstoneHeroVisual />
        </HeroSection>

        {/* ─── 2. Two-column intro ─── */}
        <SectionWrapper theme="light">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-subheading text-[var(--color-text-dark)]">
                Automation is allowing organisations all over the world to
                improve their services and better their products.
              </p>
              <p className="text-subheading text-[var(--color-text-body)]">
                Cornerstone allows you to build and maintain the foundational
                data and pipelines to empower your organisation.
              </p>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 3. Capability overview ─── */}
        <CapabilityOverview />

        {/* ─── 4. Five numbered detail blocks (split-scroll) ─── */}
        <SectionWrapper theme="dark" className="relative overflow-clip">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[var(--color-accent)] opacity-[0.06] blur-[160px]" />
          </div>
          <div className="px-8 md:px-16 lg:px-24">
            <div className="space-y-40 md:space-y-52">
              {detailBlocks.map((block) => (
                <div key={block.number} className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
                  {/* Left — sticky number + heading */}
                  <div className="lg:sticky lg:top-[80px] lg:self-start">
                    <div className="text-h2 text-[var(--color-text-muted)] font-[300]">
                      {block.number}
                    </div>
                    <h3 className="mt-4 text-[var(--color-text-primary)]" style={{ fontSize: 56, fontWeight: 300, letterSpacing: "-0.5px", lineHeight: 1.1 }}>
                      <TypeWriter text={block.heading} speed={12} />
                    </h3>
                  </div>

                  {/* Right — intro + detail panel, aligned with heading */}
                  <div className="lg:pt-[52px]">
                    <p className="text-[20px] font-[300] leading-[1.6] text-[var(--color-text-primary)]">
                      {block.intro}
                    </p>

                    <div className="mt-8 rounded-[12px] border border-white/[0.08] bg-[#1A1A1A] p-8">
                      {block.subs.map((sub, i) => (
                        <div key={sub.title}>
                          {i > 0 && <div className="h-px bg-white/[0.06] my-8" />}
                          <h4 className="text-[20px] font-[500] text-[var(--color-text-primary)]">
                            {sub.title}
                          </h4>
                          <p className="text-subheading mt-3 text-[var(--color-text-secondary)]">
                            {sub.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* ─── 5. Document Extraction ─── */}
        <DocumentExtraction />

        {/* ─── 6. Final CTA ─── */}
        <CTABlock
          headline="Ready to see Homeownership in action?"
          description="Book a 30-minute demo with our team. We'll show you how Stairpay can transform the way your organisation manages shared ownership."
          primaryCta={{ label: "Book a Demo", href: "/contact" }}
          secondaryCta={{ label: "Download Overview", href: "#" }}
          theme="dark"
        />
      </main>
      <Footer />
    </>
  );
}
