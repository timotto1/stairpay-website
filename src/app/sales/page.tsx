import type { Metadata } from "next";
import { Clock } from "lucide-react";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { FAQList, type FAQItem } from "@/components/sections/FAQList";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { GridTravellers } from "@/components/visuals/GridTraveller";

export const metadata: Metadata = {
  title: "Stairpay Sales — A governed pipeline from first enquiry to legal completion",
  description:
    "Run shared ownership sales on a single pipeline. Capture every enquiry, qualify against affordability, progress reservations, and hand off to legal — with Homes England returns produced from live data.",
  openGraph: {
    title: "Stairpay Sales — Shared ownership sales, finally on a system",
    description:
      "From first enquiry to legal completion, on one governed pipeline. Built for housing associations selling 50–500 shared ownership homes a year.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

const pipelineStages = [
  { label: "Enquiry", body: "Captured from web, agent, or partner — none lost in an inbox." },
  { label: "Qualification", body: "Affordability and eligibility tested against scheme criteria." },
  { label: "Reservation", body: "Reservation taken, fee logged, plot held — with the clock running." },
  { label: "Legal completion", body: "Solicitor pack issued, completion reconciled, returns generated." },
];

const detailBlocks = [
  {
    number: "01",
    heading: "Capture every enquiry, no matter the channel",
    intro:
      "Enquiries arrive from your website, your agents, partner portals, and the phone — and historically each channel has its own spreadsheet, its own inbox, and its own definition of 'lead'. Sales unifies them into one governed pipeline so nothing is lost between hand-offs.",
    subs: [
      {
        title: "Channel-agnostic intake",
        body: "Web forms, agent referrals, scheme partner submissions and phone enquiries land in the same pipeline with the same fields. No more reconciling three trackers at month-end.",
      },
      {
        title: "Deduplication and household linking",
        body: "When the same buyer enquires on three plots across two schemes, Sales recognises them, links the household, and gives your team a single conversation thread.",
      },
    ],
  },
  {
    number: "02",
    heading: "Run affordability inside the workflow",
    intro:
      "Eligibility for shared ownership is rules-bound — local connection, household income caps, mortgage suitability, savings thresholds. Sales runs those checks against each enquiry as part of the pipeline, with a clear pass/fail trail your auditors and Homes England returns rely on.",
    subs: [
      {
        title: "Affordability assessment built in",
        body: "Income, savings, debt and outgoings collected once, scored against scheme rules, and recorded as evidence on the case. The same record drives the Homes England line at completion.",
      },
      {
        title: "Local connection and policy tests",
        body: "Section 106 conditions, scheme-specific local connection rules, and HA policy tests run on every applicant — with a documented decision your team can defend.",
      },
    ],
  },
  {
    number: "03",
    heading: "Progress reservations, viewings, and the pipeline",
    intro:
      "Every plot is on a clock. Reservation fees, exchange deadlines, mortgage offer windows — they all expire, and when they do, the plot needs to be released or the buyer chased. Sales runs the timing for you.",
    subs: [
      {
        title: "Reservations with SLAs",
        body: "When a buyer reserves, the fee is logged, the plot is held, and the reservation period is on a visible countdown. SLAs trigger reminders, escalations, and release if the buyer can't proceed.",
      },
      {
        title: "Viewings and offer pipeline",
        body: "Viewings are booked against the plot, offer history is preserved, and your weekly sales meeting works from a single live view rather than a slide deck rebuilt every Monday.",
      },
    ],
  },
  {
    number: "04",
    heading: "Hand off to legal completion cleanly",
    intro:
      "The handover from sales to legal is where shared ownership transactions stall. Sales generates the solicitor pack, the lender pack, and the landlord consent in a structured form — so legal isn't reconstructing the case from emails.",
    subs: [
      {
        title: "Solicitor and lender pack",
        body: "Memorandum of sale, lease terms, plot details, valuation and reservation history are produced as a structured pack and issued to the acting solicitor, lender, and landlord side together.",
      },
      {
        title: "Completion reconciliation",
        body: "Completion statement, deposit, fees and adjustments reconciled in the case. The new leaseholder record is created, ownership share applied, and rent set — as a single operation.",
      },
    ],
  },
  {
    number: "05",
    heading: "Reporting that finance and Homes England both trust",
    intro:
      "Homes England requires structured returns at the point a sale completes. Internal pipeline reporting needs the same data, in real time, every week. Sales produces both from the same live record — not a quarter-end spreadsheet exercise.",
    subs: [
      {
        title: "Homes England returns",
        body: "Each completion produces the corresponding return line — applicant data, scheme data, and grant treatment — ready for submission. No more rebuilding lines from solicitor confirmations.",
      },
      {
        title: "Pipeline reporting in real time",
        body: "Sales velocity, conversion rates, scheme-by-scheme performance, and forecast completions roll up automatically. The board pack uses the same numbers your sales lead works from each morning.",
      },
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Is this a CRM, or something different?",
    answer:
      "It's a sales pipeline built specifically for shared ownership — affordability tests, reservation rules, Homes England returns, and the legal handover are all native, not add-ons. A general-purpose CRM gives you a place to log activity; Sales gives you the governed workflow that runs the transaction.",
  },
  {
    question: "How does Sales sit alongside our existing HMS?",
    answer:
      "Sales runs the pipeline up to completion. At completion, the new leaseholder record, ownership share, and rent are written into the system of record — typically your HMS or Stairpay Compliance — and the case is handed off to aftersales. You keep the HMS; Sales is the front door.",
  },
  {
    question: "What's the implementation timeline?",
    answer:
      "Most customers are live in 6–10 weeks. Week 1–2 covers scheme and plot data ingest, weeks 3–6 configure your affordability rules, scheme criteria and pipeline stages, weeks 7–8 run a parallel sales week with your team, and go-live follows once you're comfortable.",
  },
  {
    question: "Do we need to replace our existing affordability tools?",
    answer:
      "No. Sales has affordability assessment built in for the scheme rules-based test, but if you have an existing affordability provider you trust, we can integrate to it and use the result as the qualifying step.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing scales with the volume of shared ownership homes you sell each year — a fixed annual fee, no per-seat charges. Smaller HAs pay smaller fees, with the same product and the same support.",
  },
  {
    question: "What happens to in-flight reservations during implementation?",
    answer:
      "We migrate live reservations and pipeline cases during configuration, so your team isn't running two systems in parallel once you go live. Historic enquiry data is brought across as searchable record so household linking still works.",
  },
];

export default function SalesPage() {
  return (
    <>
      <GlobalNav />
      <main>
        {/* ─── 1. Hero ─── */}
        <HeroSection
          eyebrow="SALES"
          headline={
            <span className="relative block">
              <span className="invisible block" aria-hidden="true">Stairpay</span>
              <span className="invisible block" aria-hidden="true">Sales</span>
              <span className="absolute left-0 top-0 block">
                <span className="block"><TypeWriter text="Stairpay" speed={12} startOnMount delay={800} /></span>
                <span className="block"><TypeWriter text="Sales" speed={12} startOnMount delay={896} /></span>
              </span>
            </span>
          }
          description="From the first enquiry to legal completion — every plot, every applicant, every reservation on a single governed pipeline. Built for housing associations selling shared ownership homes."
          primaryCta={{ label: "Book a demo", href: "/contact" }}
          theme="dark"
          centered={false}
          decoration={<GridTravellers />}
        >
          <div className="rounded-[8px] border border-[var(--color-border-dark)] bg-[var(--color-bg-card-dark)] p-6 md:p-8 shadow-2xl">
            <p className="text-eyebrow text-[var(--color-text-muted)] mb-4">Pipeline · This week</p>
            <div className="space-y-2">
              {[
                { stage: "Enquiry", count: "184", delta: "+22" },
                { stage: "Qualifying", count: "47", delta: "+8" },
                { stage: "Reserved", count: "31", delta: "+4" },
                { stage: "Legal", count: "12", delta: "−1" },
                { stage: "Completed (MTD)", count: "9", delta: "+9" },
              ].map((row) => (
                <div
                  key={row.stage}
                  className="flex items-center justify-between px-4 py-3 rounded-[4px] bg-[#1A1A1A] border border-white/[0.06]"
                >
                  <span className="text-[13px] font-[400] text-[var(--color-text-secondary)]">{row.stage}</span>
                  <span className="flex items-center gap-3">
                    <span className="text-[20px] font-[500] text-[var(--color-text-primary)] tabular-nums">{row.count}</span>
                    <span className={`text-[11px] font-[500] tabular-nums ${row.delta.startsWith("−") ? "text-amber-400" : "text-emerald-400"}`}>
                      {row.delta}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </HeroSection>

        {/* ─── 2. Two-column intro ─── */}
        <SectionWrapper theme="light">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-subheading text-[var(--color-text-dark)]">
                Most HA sales operations still run on a sales tracker spreadsheet,
                an inbox, and a quarterly reconciliation against finance.
              </p>
              <p className="text-subheading text-[var(--color-text-body)]">
                Sales replaces that with a governed pipeline — every enquiry,
                every reservation, every completion on the same live record,
                with the audit trail and the Homes England return produced for free.
              </p>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 3. Capability overview — pipeline stages ─── */}
        <SectionWrapper theme="light">
          <Container>
            <div className="max-w-[680px] mb-14">
              <Badge>The pipeline</Badge>
              <h2 className="text-h2 mt-4 text-[var(--color-text-dark)]">
                Four stages, one record, one workflow.
              </h2>
              <p className="text-body mt-5 text-[var(--color-text-body)]">
                Every shared ownership sale moves through the same stages.
                Sales gives each stage the rules, evidence, and reporting it needs —
                so your pipeline runs the same way every time.
              </p>
            </div>
            <div className="relative">
              <div
                className="hidden lg:block absolute top-[26px] left-[8%] right-[8%] h-px bg-[var(--color-border-card)]"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {pipelineStages.map((stage, i) => (
                  <div
                    key={stage.label}
                    className="bg-[var(--color-bg-white)] border border-[var(--color-border-card)] rounded-[6px] p-6"
                  >
                    <span
                      className="block w-3 h-3 rounded-full bg-[var(--color-accent)] mb-4"
                      aria-hidden="true"
                    />
                    <p className="text-eyebrow text-[var(--color-text-muted)] mb-2">
                      Stage {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-[20px] font-[500] tracking-[-0.3px] text-[var(--color-text-dark)] leading-snug mb-3">
                      {stage.label}
                    </h3>
                    <p className="text-[14px] font-[300] leading-relaxed text-[var(--color-text-body)]">
                      {stage.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 4. Five numbered detail blocks (split-scroll) ─── */}
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

        {/* ─── 5. Customer story ─── */}
        {/* TODO: replace placeholder copy and stats with a real sales-side customer story before launch */}
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
                    &ldquo;We were running 12 schemes off three sales trackers and a finance spreadsheet. Stairpay collapsed all of it into one pipeline, and our Homes England returns now write themselves at completion instead of taking a week per quarter.&rdquo;
                  </p>
                  <footer className="mt-6 text-small text-[var(--color-text-body-light)]">
                    <span className="font-[500] text-[var(--color-text-dark)]">Head of Sales</span>
                    , Placeholder Housing Association · 4,800 shared ownership homes
                  </footer>
                </blockquote>
                <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[var(--color-border-card)]">
                  <div>
                    <div className="text-h2 text-[var(--color-accent)]">{"{{38%}}"}</div>
                    <p className="text-small mt-2 text-[var(--color-text-body-light)]">
                      Faster enquiry-to-reservation conversion
                    </p>
                  </div>
                  <div>
                    <div className="text-h2 text-[var(--color-accent)]">{"{{1 day}}"}</div>
                    <p className="text-small mt-2 text-[var(--color-text-body-light)]">
                      Homes England return prep, down from a week
                    </p>
                  </div>
                  <div>
                    <div className="text-h2 text-[var(--color-accent)]">{"{{0}}"}</div>
                    <p className="text-small mt-2 text-[var(--color-text-body-light)]">
                      Lost reservations after go-live
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
        <SectionWrapper theme="light">
          <FAQList
            eyebrow="FAQ"
            headline="Questions HA sales teams ask before they switch."
            items={faqItems}
            theme="light"
          />
        </SectionWrapper>

        {/* ─── 7. Final CTA ─── */}
        <CTABlock
          headline="See your pipeline running on Stairpay."
          description="We'll show you what a live shared ownership sales pipeline looks like inside Stairpay, using representative data. 30 minutes, your team, your questions."
          primaryCta={{ label: "Book a demo", href: "/contact" }}
          theme="dark"
          primaryOpensContactPanel
        />
      </main>
      <Footer />
    </>
  );
}
