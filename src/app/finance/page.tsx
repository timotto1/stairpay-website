import type { Metadata } from "next";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { FAQList, type FAQItem } from "@/components/sections/FAQList";
import { Badge } from "@/components/ui/Badge";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { GridTravellers } from "@/components/visuals/GridTraveller";

export const metadata: Metadata = {
  title: "Stairpay Finance — A CFO-grade view of the shared ownership book",
  description:
    "Live rent roll, staircasing pipeline value, resale pipeline value, grant recycling, and arrears exposure — generated from Stairpay's live data, not a month-end spreadsheet exercise. Coming soon.",
  openGraph: {
    title: "Stairpay Finance — Coming soon",
    description:
      "Analytics on everything Stairpay already does, with a CFO-shaped view on top. Design partners now, beta in 2026.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

const capabilityViews = [
  { title: "Live rent roll", body: "Value of unsold equity and rental income at any point in time, broken down by scheme." },
  { title: "Staircasing pipeline value", body: "Projected capital from in-flight cases and from leaseholders eligible to staircase." },
  { title: "Resale pipeline value", body: "Forecast assignments, residual share value, and grant recycling implications." },
  { title: "Grant recycling", body: "Track grant obligations as residents staircase — automatically, against the live record." },
  { title: "Arrears exposure", body: "Leaseholder financial health across the portfolio, scheme-by-scheme and block-by-block." },
];

const detailBlocks = [
  {
    number: "01",
    heading: "A live rent roll, not a quarter-end reconstruction",
    intro:
      "Most HA finance teams reconstruct the shared ownership rent roll from spreadsheets and HMS extracts every month-end. Finance reads the live ownership shares, lease terms, and residual rent directly — so the rent roll is correct on the first of the month, not the fifteenth.",
    subs: [
      {
        title: "Always-current ownership share",
        body: "When a staircasing case completes, the rent roll reflects it the same day. No manual update, no reconciliation gap.",
      },
      {
        title: "Scheme and block roll-ups",
        body: "Drill from the headline number into the scheme, the block, and the individual lease — so a finance partner can answer a board question in minutes, not days.",
      },
    ],
  },
  {
    number: "02",
    heading: "Forecast staircasing capital, before it lands",
    intro:
      "Staircasing volumes are the most important — and most opaque — line in HA development finance. Finance combines live cases (deterministic) with leaseholder eligibility (probabilistic) to give the CFO a forecast they can defend.",
    subs: [
      {
        title: "In-flight case value",
        body: "Every open staircasing case in Aftersales contributes to a deterministic forecast — value, expected completion date, grant treatment.",
      },
      {
        title: "Eligible-resident pipeline",
        body: "Leaseholders eligible to staircase based on lease terms, income, and equity are surfaced as a propensity-weighted pipeline — not a back-of-envelope estimate.",
      },
    ],
  },
  {
    number: "03",
    heading: "Track grant recycling against live cases",
    intro:
      "Homes England grant recycling rules are easy to get wrong and expensive when you do. Finance applies the recycling treatment to each completing transaction automatically — and surfaces the recycled balance as a live number, not a year-end true-up.",
    subs: [
      {
        title: "Per-case grant treatment",
        body: "Each staircasing or resale completion writes its grant treatment to the live record — so the recycled fund balance reflects what's actually happened, in real time.",
      },
      {
        title: "Audit-ready evidence",
        body: "When Homes England queries a return line, the supporting evidence — case, lease, valuation, completion statement — is one click from the number.",
      },
    ],
  },
  {
    number: "04",
    heading: "See arrears and exposure, scheme by scheme",
    intro:
      "Shared ownership arrears behave differently from rented stock — service charge, rent, and major works exposure compound across leases that the HA only partly owns. Finance shows the exposure clearly, before it becomes a covenant problem.",
    subs: [
      {
        title: "Multi-line arrears view",
        body: "Rent, service charge, and major-works arrears tracked as a single exposure number per leaseholder — not three separate ledger queries.",
      },
      {
        title: "Cohort and scheme analysis",
        body: "Drill from portfolio-wide exposure into the schemes, blocks, and cohorts driving it — so finance and operations agree on what's actionable.",
      },
    ],
  },
  {
    number: "05",
    heading: "Export the board pack the CFO actually needs",
    intro:
      "Most HA board packs reflect the data that's easy to extract, not the data the board needs. Finance generates a defined CFO board pack — rent roll, staircasing forecast, resale forecast, grant recycling, arrears exposure — from live data, with the supporting working one click away.",
    subs: [
      {
        title: "Defined board-pack template",
        body: "A standard set of views, formats, and commentary fields, built around what HA boards actually ask each quarter.",
      },
      {
        title: "Live-data backed",
        body: "Each headline number links back to the underlying cases, leases, and transactions — so the CFO can defend any line without going back to the team.",
      },
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question: "When will Finance be available?",
    answer:
      "Design partners now. Beta in 2026 with a small group of HA finance teams. General availability follows once the beta cohort is happy with the analytics, the board-pack export, and the grant recycling treatment. We're not committing to a quarter publicly until the beta is in flight.",
  },
  {
    question: "Do we need to be on the rest of Stairpay to use Finance?",
    answer:
      "Yes. Finance is the analytics surface on top of the shared ownership data Stairpay already manages — Compliance, Aftersales, Sales — and reads the live record. Without that data underneath, there's no live rent roll to view.",
  },
  {
    question: "How will pricing work?",
    answer:
      "Pricing for Finance hasn't been finalised. The current direction is an add-on subscription bundled with Compliance and Aftersales, scaling with portfolio size — not a per-seat or per-report charge. Design partners get pricing locked at beta rates.",
  },
  {
    question: "What's the design partner programme?",
    answer:
      "A small group of HA finance teams shaping the Finance product alongside us — board-pack templates, grant recycling treatment, exposure views. Design partners get hands-on access to the build, locked beta pricing, and direct input into the roadmap.",
  },
  {
    question: "How does this differ from a BI tool sat on our HMS?",
    answer:
      "BI tools surface what's in the source system. The shared ownership data in most HMS deployments is incomplete — partial ownership share, missing lease terms, unstructured staircasing history. Stairpay normalises that data first; Finance is the analytics on top of the normalised record.",
  },
];

export default function FinancePage() {
  return (
    <>
      <GlobalNav />
      <main>
        {/* ─── 1. Hero ─── */}
        <HeroSection
          eyebrow="FINANCE · COMING SOON"
          headline={
            <span className="relative block">
              <span className="invisible block" aria-hidden="true">Stairpay</span>
              <span className="invisible block" aria-hidden="true">Finance</span>
              <span className="absolute left-0 top-0 block">
                <span className="block"><TypeWriter text="Stairpay" speed={12} startOnMount delay={800} /></span>
                <span className="block"><TypeWriter text="Finance" speed={12} startOnMount delay={896} /></span>
              </span>
            </span>
          }
          description="A CFO-grade view of the shared ownership book — live rent roll, staircasing pipeline value, resale forecast, grant recycling, arrears exposure. Built on the data Stairpay already runs."
          primaryCta={{ label: "Join the design partner programme", href: "/contact" }}
          theme="dark"
          centered={false}
          decoration={<GridTravellers />}
        >
          <div className="rounded-[8px] border border-[var(--color-border-dark)] bg-[var(--color-bg-card-dark)] p-6 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <p className="text-eyebrow text-[var(--color-text-muted)]">CFO board pack · Live preview</p>
              <span className="text-[10px] font-[500] tracking-[1.5px] uppercase px-2 py-1 rounded-[3px] bg-[var(--color-accent-light)] text-[var(--color-accent-pale)]">
                Coming soon
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Live rent roll", value: "£12.4M", delta: "+£0.18M MoM" },
                { label: "Staircasing forecast (12m)", value: "£8.1M", delta: "+£1.2M vs FY24" },
                { label: "Resale forecast (12m)", value: "£3.6M", delta: "Stable" },
                { label: "Grant recycled YTD", value: "£2.2M", delta: "On plan" },
                { label: "Arrears exposure", value: "£420K", delta: "−£18K MoM" },
                { label: "Schemes covered", value: "47", delta: "100%" },
              ].map((m) => (
                <div key={m.label} className="rounded-[4px] bg-[#1A1A1A] border border-white/[0.06] px-4 py-3">
                  <p className="text-[10px] tracking-[1.5px] uppercase text-[var(--color-text-muted)]">
                    {m.label}
                  </p>
                  <p className="text-[22px] font-[500] tabular-nums text-[var(--color-text-primary)] mt-1">
                    {m.value}
                  </p>
                  <p className="text-[11px] font-[300] text-[var(--color-text-secondary)] mt-1">
                    {m.delta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </HeroSection>

        {/* ─── 2. The problem ─── */}
        <SectionWrapper theme="light">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-subheading text-[var(--color-text-dark)]">
                Most HA finance teams reconstruct the shared ownership numbers
                from spreadsheets and HMS extracts every month-end.
              </p>
              <p className="text-subheading text-[var(--color-text-body)]">
                Finance is the CFO-shaped view sat on top of the shared ownership
                data Stairpay already manages — live rent roll, capital pipeline,
                grant recycling, exposure — generated from the record, not from a
                quarter-end reconciliation exercise.
              </p>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 3. Capability overview ─── */}
        <SectionWrapper theme="light">
          <Container>
            <div className="max-w-[680px] mb-14">
              <Badge>What you'll see</Badge>
              <h2 className="text-h2 mt-4 text-[var(--color-text-dark)]">
                Five views the CFO has been asking for.
              </h2>
              <p className="text-body mt-5 text-[var(--color-text-body)]">
                Generated from the live shared ownership record. Each headline
                links back to the underlying cases, leases, and transactions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilityViews.map((view, i) => (
                <div
                  key={view.title}
                  className="bg-[var(--color-bg-white)] border border-[var(--color-border-card)] rounded-[6px] p-6"
                >
                  <p className="text-eyebrow text-[var(--color-text-muted)] mb-3">
                    View {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[20px] font-[500] tracking-[-0.3px] text-[var(--color-text-dark)] leading-snug mb-3">
                    {view.title}
                  </h3>
                  <p className="text-[14px] font-[300] leading-relaxed text-[var(--color-text-body)]">
                    {view.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 4. Numbered detail blocks ─── */}
        <SectionWrapper theme="dark" className="relative overflow-clip">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[var(--color-accent)] opacity-[0.06] blur-[160px]" />
          </div>
          <div className="px-8 md:px-16 lg:px-24">
            <div className="space-y-40 md:space-y-52">
              {detailBlocks.map((block) => (
                <div key={block.number} className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
                  <div className="lg:sticky lg:top-[80px] lg:self-start">
                    <div className="text-h2 text-[var(--color-text-muted)] font-[300]">
                      {block.number}
                    </div>
                    <h3 className="mt-4 text-[var(--color-text-primary)]" style={{ fontSize: 56, fontWeight: 300, letterSpacing: "-0.5px", lineHeight: 1.1 }}>
                      <TypeWriter text={block.heading} speed={12} />
                    </h3>
                  </div>
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

        {/* ─── 5. What's coming ─── */}
        <SectionWrapper theme="white">
          <Container>
            <div className="max-w-[820px]">
              <Badge>What's coming</Badge>
              <h2 className="text-h2 mt-5 text-[var(--color-text-dark)]">
                Design partners now. Beta in 2026.
              </h2>
              <p className="text-body mt-5 text-[var(--color-text-body)]">
                Finance is being built with a small group of HA finance directors
                and CFOs as design partners. The beta launches in 2026 with that
                cohort. General availability follows once the analytics, the
                board-pack export, and the grant recycling treatment are signed
                off by partners. Specific dates will be confirmed once the beta
                is in flight.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { phase: "Now", title: "Design partner programme", body: "Direct input from a small cohort of HA finance leaders. Locked beta pricing for participants." },
                { phase: "2026", title: "Closed beta", body: "Beta release with the design partner cohort. Live rent roll, staircasing forecast, board-pack export." },
                { phase: "TBC", title: "General availability", body: "Public release once the beta is signed off. Pricing announced ahead of GA." },
              ].map((p) => (
                <div
                  key={p.title}
                  className="bg-[var(--color-bg-white)] border border-[var(--color-border-card)] rounded-[6px] p-8"
                >
                  <p className="text-eyebrow text-[var(--color-accent)] mb-3">
                    {p.phase}
                  </p>
                  <h3 className="text-[22px] font-[500] tracking-[-0.3px] text-[var(--color-text-dark)] leading-snug mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[14px] font-[300] leading-relaxed text-[var(--color-text-body)]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 6. FAQ ─── */}
        <SectionWrapper theme="light">
          <FAQList
            eyebrow="FAQ"
            headline="What HA finance directors ask before signing on as a design partner."
            items={faqItems}
            theme="light"
          />
        </SectionWrapper>

        {/* ─── 7. Final CTA ─── */}
        <CTABlock
          eyebrow="Design partner programme"
          headline="Help shape the finance product the sector has been missing."
          description="A small group of HA finance directors are co-building Finance with us. If you're running a shared ownership book and the month-end spreadsheet has run its course, we'd like to talk."
          primaryCta={{ label: "Join the design partner programme", href: "/contact" }}
          theme="dark"
          primaryOpensContactPanel
        />
      </main>
      <Footer />
    </>
  );
}
