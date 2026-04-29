import type { Metadata } from "next";
import { Clock } from "lucide-react";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { MetricCalloutGrid } from "@/components/sections/MetricCalloutGrid";
import { FAQList, type FAQItem } from "@/components/sections/FAQList";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { GridTravellers } from "@/components/visuals/GridTraveller";

// SCAFFOLD NOTE: This page is rebuilt to lead with nurturing/data/case-management
// (not HMS-integration-led, as the previous version did). The detail copy is
// placeholder pending a copy pass — section intent notes describe what each
// block should communicate when final copy lands.

export const metadata: Metadata = {
  title: "Stairpay Aftersales — Turn your back-book into your strongest revenue line",
  description:
    "Proactive nurturing of staircasing-eligible residents, a single source of truth on every leaseholder, and every case on one governed workflow. Built for housing associations with 1,000–15,000 shared ownership homes.",
  openGraph: {
    title: "Stairpay Aftersales — Proactive nurturing on a governed workflow",
    description:
      "From reactive transaction processing to proactive nurturing of the back-book. Built for housing associations with 1,000–15,000 shared ownership homes.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

// ─── Numbered detail blocks ─────────────────────────────────────────────────

const detailBlocks = [
  {
    number: "01",
    heading: "Nurturing — turn the back-book into a pipeline",
    // SECTION INTENT: Communicate that Stairpay surfaces dormant equity opportunities
    // and turns them into outreach actions automatically. Show one specific example
    // (a 1% staircase nudge during the eligibility window) to make it concrete.
    intro:
      "The biggest untapped revenue line in most HAs isn't new sales — it's the existing leaseholder base. Aftersales identifies which residents are eligible to staircase right now, segments them by propensity, and runs the outreach automatically.",
    subs: [
      {
        title: "Eligibility, surfaced not searched for",
        body: "Every leaseholder eligible to staircase — by lease terms, ownership share, and statutory window — is surfaced as a live segment, not buried in a quarterly query.",
      },
      {
        title: "Capital activation through 1% nudges",
        body: "When a leaseholder enters a 1% eligibility window, an outreach campaign is triggered with their specific numbers — today's cost, expected rent saving, mortgage implications. One nudge per window, in the resident's own time.",
      },
    ],
  },
  {
    number: "02",
    heading: "Data — a single source of truth on every leaseholder",
    // SECTION INTENT: Frame Aftersales as the place where the leaseholder record
    // actually lives — lease terms, ownership history, financial position, eligibility
    // signals — not scattered across HMS, spreadsheets, and email threads.
    intro:
      "Most HAs can't answer simple questions about their leaseholder base — what share they own today, what they paid originally, where they are in the staircasing cycle — without a half-day spreadsheet exercise. Aftersales is the leaseholder record.",
    subs: [
      {
        title: "Lease, ownership, and financial position on one record",
        body: "Lease terms, ownership share history, rent and service charge position, arrears exposure, and outstanding compliance — on one resident record, kept current automatically.",
      },
      {
        title: "Eligibility and life-event signals",
        body: "Statutory eligibility windows, anniversary triggers, mortgage maturities, and life-event signals (e.g. a notice of intention) all surface as actionable signals — not data points buried in a report.",
      },
    ],
  },
  {
    number: "03",
    heading: "Case management — the execution layer for every transaction",
    // SECTION INTENT: Reposition the existing case management strength as the
    // execution layer, NOT the headline. The previous page led with this and it's
    // technically still the strongest part — but it's the workflow that runs after
    // the nurturing has happened.
    intro:
      "When a staircasing or resale case opens, it runs on a single governed workflow — instruction to completion, with the Capital Funding Guide process, the RICS valuation rules, and the Homes England returns built in. The case is the execution layer; the value comes from the cases that wouldn't otherwise have happened.",
    subs: [
      {
        title: "Staircasing and resales on one workflow",
        body: "From valuation instruction through eligibility, share calculation, solicitor pack, and completion — one workflow, one record, one audit trail. Both staircasing and resales follow the same shape.",
      },
      {
        title: "Built around the Capital Funding Guide",
        body: "Workflows reflect the published CFG process. Nominations periods, valuation challenge windows, and completion reporting are part of the workflow — not policy nuance the team has to remember.",
      },
    ],
  },
  {
    number: "04",
    heading: "Compliance built in — not bolted on",
    // SECTION INTENT: Condensed compliance framing (CFG, RICS, Homes England returns).
    // Previous page had a dedicated compliance section with 4 cards — this folds it
    // into the numbered structure as one block to keep the page focused on the new
    // nurturing-led narrative.
    intro:
      "Capital Funding Guide, RICS-compliant valuation, and Homes England returns are statutory baseline. Aftersales applies them as part of the workflow — so the team doesn't need a dedicated compliance lead, and auditors don't need a workshop to find the evidence.",
    subs: [
      {
        title: "CFG and RICS aligned by default",
        body: "Workflows reflect the published Capital Funding Guide and RICS valuation rules. Challenges, refreshes, and date slips are handled inside the case.",
      },
      {
        title: "Homes England returns from live data",
        body: "Return lines for staircasing and resales are produced from live case data, not a year-end reconciliation. Each completion writes its return line automatically.",
      },
    ],
  },
  {
    number: "05",
    heading: "Audit trail — answers ready before the question",
    // SECTION INTENT: Retain the existing 'audit trail' strength from the previous
    // page. This is genuinely a Stairpay differentiator — every change attributed
    // and timestamped, with the supporting evidence one click away.
    intro:
      "Every field change, every automated update, every manual override — logged, timestamped, attributed. When auditors ask, when the board wants assurance, when a resident queries their record, the answer is already there.",
    subs: [
      {
        title: "Immutable record",
        body: "Full traceability is built into the system, not bolted on. Every change is captured with who made it, when, and why.",
      },
      {
        title: "Instant evidence pack",
        body: "Homes England query, internal audit, ombudsman complaint, board paper — the supporting evidence is one click from the headline number, every time.",
      },
    ],
  },
];

// ─── FAQ — first two refreshed for the nurturing-led framing ────────────────

const faqItems: FAQItem[] = [
  {
    question: "Is this a staircasing case manager, or something more?",
    // SECTION INTENT: Refreshed to lead with nurturing framing, not HMS integration.
    answer:
      "It's both. The case manager runs every staircasing and resale on a governed workflow — the execution layer most HAs already need. But the bigger value is on the front of the funnel: identifying eligible leaseholders, segmenting by propensity, and running 1% nudges during statutory windows automatically. The cases that wouldn't otherwise have happened are where the revenue lift comes from.",
  },
  {
    question: "How does Aftersales actually grow our staircasing volume?",
    // SECTION INTENT: New question, framed around the nurturing thesis.
    answer:
      "Every leaseholder eligible to staircase is surfaced as a live segment — by lease terms, ownership share, and statutory window. When a 1% eligibility window opens, an outreach campaign goes out with the resident's specific numbers (today's cost, expected rent saving). One nudge per window. The result is a pipeline of capital activations that historically just didn't happen because no one had time to identify and reach out.",
  },
  {
    question: "Do we need to replace our HMS?",
    answer:
      "No. Stairpay sits on top of your existing Housing Management System (Aareon QL, MRI, Civica Cx, NEC Housing, Castleton and others). Case outcomes write back to the HMS as the system of record; Stairpay is where the aftersales work — and the nurturing — happens.",
  },
  {
    question: "How long does implementation actually take?",
    answer:
      "A typical aftersales rollout is 6–10 weeks. Week 1–2 covers lease and case data ingestion, weeks 3–6 configure your workflows and calculations, weeks 7–8 run parallel cases with your team, and go-live follows once you're comfortable. A single named implementation lead runs the whole thing.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing scales with the number of shared ownership homes in your portfolio, with a fixed annual fee and no per-seat charges for your team. Smaller HAs pay smaller fees — the same product, the same support, without the enterprise price tag.",
  },
  {
    question: "What happens to our existing in-flight cases?",
    answer:
      "We migrate open staircasing and resale cases during implementation — documents, dates, calculations and correspondence — so your team isn't running two systems in parallel once you go live.",
  },
  {
    question: "Who keeps compliance rules up to date?",
    answer:
      "We do. When Homes England updates the Capital Funding Guide or reporting lines change, we update the workflows and calculations centrally. You don't need a compliance specialist on staff to keep the system current.",
  },
  {
    question: "Can we start with just staircasing?",
    answer:
      "Yes. Many customers start with staircasing — where the volume is growing fastest, and where the nurturing thesis lands hardest — and add resales once the first module is embedded. You can run either module on its own.",
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function AftersalesPage() {
  return (
    <>
      <GlobalNav />
      <main>
        {/* ─── 1. Hero ─── */}
        {/* SECTION INTENT: Lead with the nurturing thesis: the back-book is the
            biggest untapped revenue line. Sub-headline grounds it in scale (your
            existing portfolio, not new sales). */}
        <HeroSection
          eyebrow="AFTERSALES"
          headline={
            <span className="relative block">
              <span className="invisible block" aria-hidden="true">Turn your back-book</span>
              <span className="invisible block" aria-hidden="true">into your strongest line.</span>
              <span className="absolute left-0 top-0 block">
                <span className="block"><TypeWriter text="Turn your back-book" speed={12} startOnMount delay={800} /></span>
                <span className="block"><TypeWriter text="into your strongest line." speed={12} startOnMount delay={896} /></span>
              </span>
            </span>
          }
          description="The biggest untapped revenue line in most HAs isn't new sales — it's the existing leaseholder base. Aftersales surfaces eligible residents, runs the outreach, and executes every case on one governed workflow."
          primaryCta={{ label: "Book a demo", href: "/contact" }}
          theme="dark"
          centered={false}
          decoration={<GridTravellers />}
        >
          <div className="rounded-[8px] border border-[var(--color-border-dark)] bg-[var(--color-bg-card-dark)] p-6 md:p-8 shadow-2xl">
            <p className="text-eyebrow text-[var(--color-text-muted)] mb-4">Eligible leaseholders · Live</p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { l: "Eligible to staircase", v: "1,847" },
                { l: "In a 1% window", v: "284" },
                { l: "Engaged in 90d", v: "62%" },
                { l: "Pipeline value", v: "£8.1M" },
              ].map((s) => (
                <div key={s.l} className="rounded-[4px] bg-[#1A1A1A] border border-white/[0.06] px-4 py-3">
                  <p className="text-[10px] tracking-[1.5px] uppercase text-[var(--color-text-muted)]">
                    {s.l}
                  </p>
                  <p className="text-[22px] font-[500] tabular-nums text-[var(--color-text-primary)] mt-1">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[11px] font-[300] text-[var(--color-text-muted)]">
              Surfaced from live lease, ownership, and statutory eligibility data —
              with outreach campaigns running in the background.
            </p>
          </div>
        </HeroSection>

        {/* ─── 2. The shift ─── */}
        {/* SECTION INTENT: Frame the move from reactive transaction processing
            to proactive nurturing. Two-column layout mirrors Compliance and Sales.
            Left side: what aftersales used to be. Right side: what Stairpay makes it. */}
        <SectionWrapper theme="light">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-subheading text-[var(--color-text-dark)]">
                Aftersales has always been treated as transaction processing —
                cases that arrive, get worked, and disappear. The result is a
                back-book most HAs barely know.
              </p>
              <p className="text-subheading text-[var(--color-text-body)]">
                Stairpay treats aftersales as nurturing first, execution second.
                Eligible leaseholders surface automatically, outreach runs in the
                background, and every resulting case lands on the same governed
                workflow — with the audit trail and the returns produced for free.
              </p>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 3. Five numbered detail blocks ─── */}
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

        {/* ─── 4. Outcomes — 4 retained metric callouts ─── */}
        {/* SECTION INTENT: Retain the four outcome metrics from the previous page.
            These are placeholder until real customer data lands. */}
        {/* TODO: replace placeholder metric values with real customer results before launch */}
        <SectionWrapper theme="dark">
          <Container>
            <div className="max-w-[620px] mx-auto text-center mb-14">
              <Badge theme="dark">Outcomes</Badge>
              <h2 className="text-h2 mt-4 text-[var(--color-text-primary)]">
                What aftersales teams see in the first year.
              </h2>
            </div>
          </Container>
          <MetricCalloutGrid
            theme="dark"
            metrics={[
              { value: "6", label: "Weeks average case time reduction" },
              { value: "62%", label: "Fewer admin hours per case" },
              { value: "3.2x", label: "Cases completed per FTE" },
              { value: "100%", label: "Audit trail coverage" },
            ]}
          />
        </SectionWrapper>

        {/* ─── 5. Customer story ─── */}
        {/* SECTION INTENT: Retain the customer quote and 3 stat callouts from the
            previous page. Both are placeholders pending a real 3–10k unit case study. */}
        {/* TODO: swap placeholder copy, HA name, and stats for a real 3–10k unit case study */}
        <SectionWrapper theme="white">
          <Container>
            <div className="max-w-[960px] mx-auto">
              <Badge>Customer story</Badge>
              <div className="mt-6 p-10 lg:p-14 rounded-[8px] border border-[var(--color-border-card)] bg-[var(--color-bg-card-light)]">
                <div className="flex items-center gap-2 text-eyebrow text-[var(--color-text-body-light)]">
                  <Clock size={14} strokeWidth={1.5} />
                  <span>Read in 4 minutes</span>
                </div>
                <blockquote className="mt-6">
                  <p className="text-[28px] md:text-[32px] font-[400] leading-[1.25] tracking-[-0.4px] text-[var(--color-text-dark)]">
                    &ldquo;We run a 6,000-home portfolio with four people in aftersales. Stairpay means we can keep up with staircasing demand without hiring — and our Homes England returns now take a day instead of three weeks.&rdquo;
                  </p>
                  <footer className="mt-6 text-small text-[var(--color-text-body-light)]">
                    <span className="font-[500] text-[var(--color-text-dark)]">
                      Head of Home Ownership
                    </span>
                    , Placeholder Housing Association · 6,200 shared ownership homes
                  </footer>
                </blockquote>
                <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[var(--color-border-card)]">
                  <div>
                    <div className="text-h2 text-[var(--color-accent)]">{"{{42%}}"}</div>
                    <p className="text-small mt-2 text-[var(--color-text-body-light)]">
                      Faster average staircasing completion
                    </p>
                  </div>
                  <div>
                    <div className="text-h2 text-[var(--color-accent)]">{"{{3x}}"}</div>
                    <p className="text-small mt-2 text-[var(--color-text-body-light)]">
                      Resale cases per aftersales FTE
                    </p>
                  </div>
                  <div>
                    <div className="text-h2 text-[var(--color-accent)]">{"{{0}}"}</div>
                    <p className="text-small mt-2 text-[var(--color-text-body-light)]">
                      New hires needed to cover growth
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <Button variant="outline" size="md" href="/insights" arrow>
                    Read the full story
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 6. FAQ ─── */}
        {/* SECTION INTENT: Retain most of the previous FAQ; first two questions
            refreshed to the nurturing-led framing. */}
        <SectionWrapper theme="light">
          <FAQList
            eyebrow="FAQ"
            headline="Questions smaller housing associations actually ask."
            items={faqItems}
            theme="light"
          />
        </SectionWrapper>

        {/* ─── 7. Final CTA ─── */}
        <CTABlock
          headline="See your back-book working for you."
          description="We'll walk through your eligible leaseholders, the campaigns that would run on top, and a real case end-to-end — using representative data from a comparable HA."
          primaryCta={{ label: "Book a demo", href: "/contact" }}
          theme="dark"
          primaryOpensContactPanel
        />
      </main>
      <Footer />
    </>
  );
}
