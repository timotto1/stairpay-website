import type { Metadata } from "next";
import {
  CalendarClock,
  ClipboardCheck,
  Clock,
  FileCheck2,
  LifeBuoy,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { MetricCalloutGrid } from "@/components/sections/MetricCalloutGrid";
import { LogoBar } from "@/components/sections/LogoBar";
import { ContentSection } from "@/components/sections/ContentSection";
import {
  LifecycleTabs,
  type LifecycleTab,
} from "@/components/sections/LifecycleTabs";
import { FAQList, type FAQItem } from "@/components/sections/FAQList";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Aftersales — Staircasing & Resales for Housing Associations | Stairpay",
  description:
    "Run every staircasing and resale case on one audit-ready workflow. Built for housing associations with 1,000–15,000 shared ownership homes and teams of 2–8 people.",
  openGraph: {
    title: "Aftersales — Staircasing & Resales for Housing Associations",
    description:
      "Structured staircasing and resales for housing associations. Replace spreadsheets with a governed workflow that scales from 1,000 to 15,000 homes.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

// ─── Lifecycle content ───────────────────────────────────────────────────────

const lifecycleTabs: LifecycleTab[] = [
  {
    id: "staircasing",
    label: "Staircasing",
    description:
      "From the first instruction to final reporting — every case moves through the same governed workflow, with the right documents produced at the right stage.",
    stages: [
      {
        title: "Valuation instruction",
        body: "Instruct a RICS surveyor from a pre-approved panel, track response times, and capture the report against the case automatically.",
      },
      {
        title: "Eligibility check",
        body: "Affordability, mortgage status, rent and service charge arrears checked against lease terms before the case progresses.",
      },
      {
        title: "Share & RPI calculation",
        body: "New share, residual rent, and RPI uplift calculated from the lease — no spreadsheet arithmetic, full working exposed for audit.",
      },
      {
        title: "Solicitor & lender pack",
        body: "Memorandum of staircasing, lease summary, valuation and consent pack generated and issued to the acting solicitor and lender.",
      },
      {
        title: "Completion",
        body: "Completion statement reconciled, new ownership percentage applied, rent adjusted, and resident record updated as a single operation.",
      },
      {
        title: "Post-sale reporting",
        body: "Homes England return lines, grant recycling entries, and internal board reporting produced from the same record.",
      },
    ],
  },
  {
    id: "resales",
    label: "Resales",
    description:
      "The nominations period, valuation, and assignment — one workflow that works the way the Capital Funding Guide says it should.",
    stages: [
      {
        title: "Instruction",
        body: "Seller-led or triggered by a notice of intention — open the case in seconds with lease, rent and arrears context pre-populated.",
      },
      {
        title: "Marketing & nominations period",
        body: "Track the statutory nominations window, manage applicant expressions of interest, and evidence the process end-to-end.",
      },
      {
        title: "Applicant eligibility",
        body: "Affordability, local connection and policy tests run against each applicant with a clear decision trail.",
      },
      {
        title: "Valuation",
        body: "RICS-compliant valuation captured against the case, with challenge and refresh workflows when dates slip.",
      },
      {
        title: "Assignment",
        body: "Assignment pack for solicitors, landlord consent, and lender requirements handled from a single screen.",
      },
      {
        title: "Completion",
        body: "Resident record closed, incoming leaseholder onboarded, and reporting lines updated — no double-keying.",
      },
    ],
  },
];

// ─── Compliance items ────────────────────────────────────────────────────────

const complianceItems = [
  {
    icon: <Scale size={22} strokeWidth={1.5} />,
    title: "Capital Funding Guide aligned",
    body: "Workflows reflect the published CFG process for staircasing and resales — including the nominations period, valuation rules, and eligibility tests.",
  },
  {
    icon: <FileCheck2 size={22} strokeWidth={1.5} />,
    title: "Homes England reporting",
    body: "Return lines for staircasing and resales are produced from live case data, not a year-end reconciliation exercise.",
  },
  {
    icon: <ClipboardCheck size={22} strokeWidth={1.5} />,
    title: "RICS-compliant valuations",
    body: "Instruction, receipt, challenge and refresh of RICS valuations are all handled inside the case — with timestamps and evidence stored against the record.",
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    title: "Full audit trail",
    body: "Every decision, calculation and document is attributed and timestamped. When auditors, the board or a resident asks what happened, the answer is already there.",
  },
];

// ─── Smaller-HA pillars ──────────────────────────────────────────────────────

const smallerHAPillars = [
  {
    icon: <CalendarClock size={22} strokeWidth={1.5} />,
    title: "Live in weeks, not quarters",
    body: "A typical implementation runs 6–10 weeks end to end. No enterprise scoping workshops, no multi-year roadmap.",
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Priced against your portfolio",
    body: "Pricing scales with the number of shared ownership homes you actually manage. A 3,000-unit HA does not pay a 30,000-unit fee.",
  },
  {
    icon: <LifeBuoy size={22} strokeWidth={1.5} />,
    title: "No big-bang migration",
    body: "Keep your HMS. Stairpay sits on top as the aftersales workflow — start with staircasing, add resales when you're ready.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqItems: FAQItem[] = [
  {
    question: "How long does implementation actually take?",
    answer:
      "A typical aftersales rollout is 6–10 weeks. Week 1–2 covers lease and case data ingestion, weeks 3–6 configure your workflows and calculations, weeks 7–8 run parallel cases with your team, and go-live follows once you're comfortable. A single named implementation lead runs the whole thing.",
  },
  {
    question: "Do we need to replace our HMS?",
    answer:
      "No. Stairpay is designed to sit on top of your existing Housing Management System (Aareon QL, MRI, Civica Cx, NEC Housing, Castleton and others). Case outcomes write back to the HMS as the system of record; Stairpay is where the aftersales work happens.",
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
    question: "What support is included?",
    answer:
      "Every customer gets a named customer success manager, business-hours support from a UK team that knows shared ownership, and quarterly reviews. No tiered support levels gated behind add-ons.",
  },
  {
    question: "Can we start with just staircasing?",
    answer:
      "Yes. Many customers start with staircasing — where the volume is growing fastest — and add resales once the first module is embedded. You can run either module on its own.",
  },
  {
    question: "Is there a leaseholder portal?",
    answer:
      "Yes. Residents can apply to staircase, upload documents, and track case status from a self-service portal — which typically cuts inbound phone and email volume to your team by a significant margin.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AftersalesPage() {
  return (
    <>
      <GlobalNav />
      <main>
        {/* ─── 1. Hero ─── */}
        {/* TODO: swap staircasing-dashboard.svg for a real product screenshot of an in-flight case */}
        <HeroSection
          eyebrow="AFTERSALES"
          headline="Staircasing and resales, run on one governed workflow."
          description="You're managing a growing aftersales caseload with a team of two to eight — on spreadsheets, email chains, and a legacy HMS. Stairpay gives you one audit-ready workflow from instruction to completion, built for housing associations with 1,000 to 15,000 shared ownership homes."
          primaryCta={{ label: "Book a demo", href: "/contact" }}
          secondaryCta={{
            label: "Watch a 3-minute walkthrough",
            href: "#walkthrough",
          }}
          theme="dark"
        >
          <img
            src="/images/staircasing-dashboard.svg"
            alt="Stairpay aftersales case overview showing in-flight staircasing cases, stages, and outcomes"
            className="w-full h-auto rounded-[8px] border border-[var(--color-border-dark)] shadow-2xl"
            loading="eager"
          />
        </HeroSection>

        {/* ─── 2. Lifecycle we automate ─── */}
        <SectionWrapper theme="light" id="lifecycle">
          <LifecycleTabs
            eyebrow="THE LIFECYCLE WE AUTOMATE"
            headline="Every staircasing and resale case, on a single workflow."
            tabs={lifecycleTabs}
            theme="light"
          />
        </SectionWrapper>

        {/* ─── 3. Quantified outcomes ─── */}
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

        {/* ─── 4. Built for compliance ─── */}
        <SectionWrapper theme="white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20">
              <div>
                <Badge>Compliance</Badge>
                <h2 className="text-h2 mt-4 text-[var(--color-text-dark)]">
                  Compliance handled — without a dedicated team for it.
                </h2>
                <p className="text-body mt-5 text-[var(--color-text-body)]">
                  Smaller housing associations rarely have a full-time aftersales compliance lead.
                  Stairpay closes that gap by making the rules part of the workflow.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {complianceItems.map((item) => (
                  <li key={item.title}>
                    <div className="text-[var(--color-accent)]">{item.icon}</div>
                    <h3 className="text-h3 mt-4 text-[var(--color-text-dark)]">
                      {item.title}
                    </h3>
                    <p className="text-body mt-3 text-[var(--color-text-body)]">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 5. Works with your stack ─── */}
        {/* TODO: replace text placeholders with real HMS logo marks when licensed */}
        <SectionWrapper theme="light">
          <Container>
            <div className="text-center max-w-[620px] mx-auto mb-12">
              <Badge>Integrations</Badge>
              <h2 className="text-h2 mt-4 text-[var(--color-text-dark)]">
                Works with the Housing Management System you already run.
              </h2>
              <p className="text-body mt-5 text-[var(--color-text-body)]">
                Keep your system of record. Stairpay reads case-relevant data in and writes outcomes back — so your HMS stays the single source of truth.
              </p>
            </div>
          </Container>
          <LogoBar
            logos={[
              { name: "Aareon QL" },
              { name: "MRI" },
              { name: "Civica Cx" },
              { name: "NEC Housing" },
              { name: "Castleton" },
            ]}
          />
        </SectionWrapper>

        {/* ─── 6. Leaseholder portal ─── */}
        {/* TODO: swap placeholder portal visual for a real screenshot */}
        <SectionWrapper theme="white">
          <ContentSection
            eyebrow="LEASEHOLDER PORTAL"
            headline="Self-service for residents. Fewer inbound calls for your team."
            body={
              <>
                <p>
                  Residents apply to staircase, upload documents, and track their
                  case status from a branded self-service portal — so your team
                  isn't fielding the same questions on the phone every week.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>Applications and document upload in the resident's own time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>Live case status, next-step reminders, and automated chasers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>Branded to your organisation — residents see you, not us</span>
                  </li>
                </ul>
              </>
            }
            image="/images/portfolio-overview.svg"
            imageAlt="Leaseholder portal showing a staircasing application with document upload and status tracker"
            reverse
            theme="light"
          />
        </SectionWrapper>

        {/* ─── 7. Built for HAs your size ─── */}
        <SectionWrapper theme="darker">
          <Container>
            <div className="max-w-[680px] mx-auto text-center mb-14">
              <Badge theme="dark">Built for HAs your size</Badge>
              <h2 className="text-h2 mt-4 text-[var(--color-text-primary)]">
                Enterprise discipline, without the enterprise overhead.
              </h2>
              <p className="text-body mt-5 text-[var(--color-text-secondary)]">
                Stairpay was built for housing associations with 1,000–15,000 shared ownership homes — the teams most often stuck between a spreadsheet and a system priced for G15 landlords.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {smallerHAPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-8 rounded-[8px] border border-[var(--color-border-dark)] bg-[var(--color-bg-card-dark)]"
                >
                  <div className="text-[var(--color-accent-pale)]">
                    {pillar.icon}
                  </div>
                  <h3 className="text-h3 mt-5 text-[var(--color-text-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="text-body mt-3 text-[var(--color-text-secondary)]">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 8. Customer story ─── */}
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
                    “We run a 6,000-home portfolio with four people in aftersales. Stairpay means we can keep up with staircasing demand without hiring — and our Homes England returns now take a day instead of three weeks.”
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
                  <Button
                    variant="outline"
                    size="md"
                    href="/insights"
                    arrow
                  >
                    Read the full story
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 9. FAQ ─── */}
        <SectionWrapper theme="light">
          <FAQList
            eyebrow="FAQ"
            headline="Questions smaller housing associations actually ask."
            items={faqItems}
            theme="light"
          />
        </SectionWrapper>

        {/* ─── 10. Final CTA ─── */}
        <CTABlock
          headline="See a case end-to-end in your own portfolio."
          description="We'll walk a real staircasing or resale through Stairpay using representative data — no slide decks, no multi-stage procurement dance. 30 minutes, your team, your questions."
          primaryCta={{ label: "Book a demo", href: "/contact" }}
          theme="dark"
          primaryOpensContactPanel
        />
      </main>
      <Footer />
    </>
  );
}
