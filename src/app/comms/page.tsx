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
  title: "Stairpay Comms — The resident relationship, made measurable",
  description:
    "Broadcast comms, complaints, policies, TSM surveys, and resident AI chat — on a single product, governed by the regulatory frameworks that already apply. Coming soon.",
  openGraph: {
    title: "Stairpay Comms — Coming soon",
    description:
      "TSM, complaints, policies, broadcast comms, and AI chat for residents — built around the Consumer Standards, Ombudsman Code, Awaab's Law, and Building Safety Act.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

const capabilities = [
  { title: "Broadcast comms", body: "Segmented messages to residents — by block, scheme, lease type, or life event." },
  { title: "Complaints", body: "Stage 1 / Stage 2 workflow aligned to the Housing Ombudsman Code, with the clock running automatically." },
  { title: "Policies", body: "A versioned policy library — residents see the version that applies to them, when it applied." },
  { title: "TSM surveys", body: "Built-in collection, benchmarking, and action planning — not a year-end PDF." },
  { title: "AI chat", body: "First-line query handling for residents, with confident handoff to a human when it's a real complaint or a regulatory matter." },
];

const detailBlocks = [
  {
    number: "01",
    heading: "Broadcast comms that actually segment",
    intro:
      "Most HA broadcast comms are blanket emails — because the resident database isn't structured enough to do anything else. Comms uses the lease, block, scheme, and life-event signals already in Stairpay to send the right message to the right resident.",
    subs: [
      {
        title: "Segment on what matters",
        body: "Block, scheme, lease type, ownership share, life-event (recently staircased, in dispute, in arrears) — segmentation runs against the live resident record, not a CSV export.",
      },
      {
        title: "Multi-channel, audit-trailed",
        body: "Email, SMS, in-app push, and post — each broadcast logs delivery, read status, and any subsequent action against the resident record. When the regulator asks who was told what, the answer is one query.",
      },
    ],
  },
  {
    number: "02",
    heading: "Complaints, on the Ombudsman's clock",
    intro:
      "The Housing Ombudsman's Complaint Handling Code sets statutory timescales for Stage 1 and Stage 2 complaints. Comms runs each complaint as a workflow with the clock visible, the deadlines hard, and the response evidence captured against the case.",
    subs: [
      {
        title: "Stage 1 / Stage 2 workflow",
        body: "Code-aligned workflow with timestamps, response templates, and escalation rules. Stage 2 escalation is structural — not an email forward.",
      },
      {
        title: "Evidence pack on demand",
        body: "When the Ombudsman or the regulator queries a complaint, the full case — communications, deadlines, decisions, evidence — is one click away. No reconstructing it from email threads.",
      },
    ],
  },
  {
    number: "03",
    heading: "Policies as a versioned library, not a PDF folder",
    intro:
      "When the rules change, the resident's view of the rules needs to change with them — and you need to be able to show which version applied to a specific resident, on a specific date. Comms holds policies as versioned objects, surfaced to residents and tied to the cases they govern.",
    subs: [
      {
        title: "Versioned and time-bound",
        body: "Every policy revision is dated, archived, and linked to the cases that ran under it. A complaint from 2024 is governed by the 2024 policy, not today's.",
      },
      {
        title: "Resident-facing surface",
        body: "Residents see the current version of each policy, in plain English, with the relevant statutory framework cited. No more 'I didn't know that was the rule'.",
      },
    ],
  },
  {
    number: "04",
    heading: "TSM that drives action, not a year-end report",
    intro:
      "Tenant Satisfaction Measures land once a year as a board headline. Comms runs TSM collection continuously, benchmarks against the sector, and surfaces the operational changes most likely to move the score — block-level, not portfolio-wide.",
    subs: [
      {
        title: "Continuous collection",
        body: "Survey instances are issued through the year against statutory sample frames, with response weighting and benchmarking handled for you.",
      },
      {
        title: "Action planning at block level",
        body: "Score movement is decomposed to the block and the underlying issue (communication, repairs responsiveness, complaints handling) — so the action plan targets the lever that's actually moving.",
      },
    ],
  },
  {
    number: "05",
    heading: "AI chat that knows when to stop",
    intro:
      "An AI chat trained on your policies and lease data can answer most resident queries instantly. The trick is knowing when not to — when the query is a complaint, a safety concern, or a regulatory matter that needs a human.",
    subs: [
      {
        title: "Trained on the resident's record",
        body: "The chat sees the lease, the case history, the broadcast comms received, and the policies that apply — so its answers are specific to that resident, not a generic FAQ.",
      },
      {
        title: "Confident handoff to a human",
        body: "Complaints, safety concerns, financial hardship, and regulatory queries are routed to the right team with the conversation context attached. The resident isn't told to start over.",
      },
    ],
  },
];

const regulatoryFrameworks = [
  "RSH Consumer Standards",
  "Housing Ombudsman Complaint Handling Code",
  "Awaab's Law",
  "Building Safety Act 2022",
  "Social Housing Regulation Act 2023",
  "Equality Act 2010",
  "UK GDPR / DPA 2018",
  "WCAG 2.2 AA",
];

const faqItems: FAQItem[] = [
  {
    question: "When will Comms be available?",
    answer:
      "Design partners now. Beta in 2026 with a small group of HA Customer Experience and Complaints leads. Specific dates will be confirmed once the beta is running. The complaints workflow and the policy library are the highest priorities; broadcast comms, TSM and AI chat follow.",
  },
  {
    question: "Do we have to use all five capabilities?",
    answer:
      "No. Each capability runs on its own. Many HAs will start with complaints (because the Ombudsman Code is unforgiving) or with policies (because the regulator is increasingly asking for evidence of which version applied when). The shared resident record means turning on the next capability later is a configuration, not a project.",
  },
  {
    question: "What does the AI chat actually answer?",
    answer:
      "Lease questions, service charge breakdowns, staircasing eligibility, policy queries, complaints triage, and signposting to the right team or external service. It refuses to give legal, financial or safety-critical answers — those route to a human, every time, with the conversation context attached.",
  },
  {
    question: "How does Comms sit alongside our existing tools?",
    answer:
      "Comms reads from the resident record Stairpay already manages, so it doesn't duplicate the HMS or your CRM. If you have an existing complaints tool, we can run alongside it during transition; longer-term, the value of Comms is having complaints, comms, policies and TSM on the same record.",
  },
  {
    question: "How will pricing work?",
    answer:
      "Pricing for Comms hasn't been finalised. The current direction is per-capability subscription scaling with portfolio size — so an HA can start with complaints alone and expand. Design partners get pricing locked at beta rates.",
  },
];

export default function CommsPage() {
  return (
    <>
      <GlobalNav />
      <main>
        {/* ─── 1. Hero ─── */}
        <HeroSection
          eyebrow="COMMS · COMING SOON"
          headline={
            <span className="relative block">
              <span className="invisible block" aria-hidden="true">Stairpay</span>
              <span className="invisible block" aria-hidden="true">Comms</span>
              <span className="absolute left-0 top-0 block">
                <span className="block"><TypeWriter text="Stairpay" speed={12} startOnMount delay={800} /></span>
                <span className="block"><TypeWriter text="Comms" speed={12} startOnMount delay={896} /></span>
              </span>
            </span>
          }
          description="The resident relationship, made measurable. TSM, complaints, policies, broadcast comms and AI chat — on a single product, governed by the regulatory frameworks that already apply."
          primaryCta={{ label: "Join the design partner programme", href: "/contact" }}
          theme="dark"
          centered={false}
          decoration={<GridTravellers />}
        >
          <div className="rounded-[8px] border border-[var(--color-border-dark)] bg-[var(--color-bg-card-dark)] p-6 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <p className="text-eyebrow text-[var(--color-text-muted)]">Complaints · Stage 1 / Stage 2</p>
              <span className="text-[10px] font-[500] tracking-[1.5px] uppercase px-2 py-1 rounded-[3px] bg-[var(--color-accent-light)] text-[var(--color-accent-pale)]">
                Coming soon
              </span>
            </div>
            <div className="space-y-2">
              {[
                { id: "CMP-2104", title: "Cladding query · Block 14", stage: "Stage 1", clock: "SLA 4d 12h", flag: "amber" },
                { id: "CMP-2099", title: "Service charge — communal cleaning", stage: "Stage 1", clock: "SLA 7d", flag: "blue" },
                { id: "CMP-2087", title: "Staircasing valuation challenge", stage: "Stage 2", clock: "SLA 12d", flag: "amber" },
                { id: "CMP-2061", title: "Resale nominations period", stage: "Closed", clock: "Resolved", flag: "grey" },
              ].map((c) => {
                const flag =
                  c.flag === "amber"
                    ? "border-l-amber-400"
                    : c.flag === "blue"
                    ? "border-l-sky-400"
                    : "border-l-white/20";
                return (
                  <div
                    key={c.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-[4px] bg-[#1A1A1A] border border-white/[0.06] border-l-[3px] ${flag}`}
                  >
                    <span className="text-[10px] font-[500] tracking-[1px] text-[var(--color-text-muted)] w-16 shrink-0">
                      {c.id}
                    </span>
                    <span className="text-[13px] font-[400] text-[var(--color-text-secondary)] flex-1 truncate">
                      {c.title}
                    </span>
                    <span className="text-[11px] font-[400] text-[var(--color-text-muted)] hidden sm:inline">
                      {c.stage}
                    </span>
                    <span className="text-[11px] font-[500] text-amber-300">
                      {c.clock}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 pt-4 border-t border-white/[0.06] text-[11px] font-[300] text-[var(--color-text-muted)]">
              Workflow aligned to the Housing Ombudsman Complaint Handling Code.
              Clocks run automatically; escalation to Stage 2 is structural.
            </p>
          </div>
        </HeroSection>

        {/* ─── 2. The problem ─── */}
        <SectionWrapper theme="light">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-subheading text-[var(--color-text-dark)]">
                TSM scores, complaints volume, and ombudsman exposure all hinge
                on the one part of HA operations that has no system — resident
                comms.
              </p>
              <p className="text-subheading text-[var(--color-text-body)]">
                Comms gives the resident relationship the same governed
                infrastructure the rest of Stairpay gives operations. Broadcast,
                complaints, policies, TSM, and AI chat — on one record, on one
                clock, and audit-trailed by default.
              </p>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 3. Capability overview ─── */}
        <SectionWrapper theme="light">
          <Container>
            <div className="max-w-[680px] mb-14">
              <Badge>Five capabilities</Badge>
              <h2 className="text-h2 mt-4 text-[var(--color-text-dark)]">
                Everything resident-facing, on one product.
              </h2>
              <p className="text-body mt-5 text-[var(--color-text-body)]">
                Each capability runs on its own. The shared resident record
                means turning on the next capability is configuration, not a
                project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className="bg-[var(--color-bg-white)] border border-[var(--color-border-card)] rounded-[6px] p-6"
                >
                  <p className="text-eyebrow text-[var(--color-text-muted)] mb-3">
                    Capability {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[20px] font-[500] tracking-[-0.3px] text-[var(--color-text-dark)] leading-snug mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-[14px] font-[300] leading-relaxed text-[var(--color-text-body)]">
                    {cap.body}
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

        {/* ─── 5. Regulatory framing ─── */}
        <SectionWrapper theme="light">
          <Container>
            <div className="max-w-[820px] mb-12">
              <Badge>Regulatory reality</Badge>
              <h2 className="text-h2 mt-5 text-[var(--color-text-dark)]">
                Built to the frameworks that already govern resident comms.
              </h2>
              <p className="text-body mt-5 text-[var(--color-text-body)]">
                Every workflow is mapped to the framework that governs it.
                Complaints run on the Ombudsman's clock. Policies are versioned
                and time-bound. Broadcast comms log delivery and response.
                Evidence packs write themselves.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border-card)] border border-[var(--color-border-card)] rounded-[6px] overflow-hidden">
              {regulatoryFrameworks.map((f) => (
                <div
                  key={f}
                  className="bg-[var(--color-bg-surface)] px-6 py-8 flex items-center justify-center text-center min-h-[110px]"
                >
                  <p className="text-[14px] font-[400] tracking-[-0.1px] text-[var(--color-text-dark)] leading-snug">
                    {f}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 6. What's coming ─── */}
        <SectionWrapper theme="white">
          <Container>
            <div className="max-w-[820px]">
              <Badge>What's coming</Badge>
              <h2 className="text-h2 mt-5 text-[var(--color-text-dark)]">
                Design partners now. Beta in 2026.
              </h2>
              <p className="text-body mt-5 text-[var(--color-text-body)]">
                Comms is being built with a small group of HA Customer
                Experience and Complaints leads as design partners. Complaints
                and Policies are the priorities for the beta; broadcast comms,
                TSM and AI chat follow. Specific dates will be confirmed once
                the beta is in flight.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { phase: "Now", title: "Design partner programme", body: "HA Customer Experience leads shaping complaints workflow and the policy library." },
                { phase: "2026", title: "Closed beta — Complaints + Policies", body: "Beta release with the design partner cohort. Complaints and Policies first; other capabilities on follow-up." },
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

        {/* ─── 7. FAQ ─── */}
        <SectionWrapper theme="light">
          <FAQList
            eyebrow="FAQ"
            headline="What HA Customer Experience leads ask before they sign on."
            items={faqItems}
            theme="light"
          />
        </SectionWrapper>

        {/* ─── 8. Final CTA ─── */}
        <CTABlock
          eyebrow="Design partner programme"
          headline="Co-build the resident relationship layer the regulator already expects."
          description="If your team is buried in complaint logs and TSM action plans, and your policies live in a SharePoint folder no one's confident is current — we'd like to talk."
          primaryCta={{ label: "Join the design partner programme", href: "/contact" }}
          theme="dark"
          primaryOpensContactPanel
        />
      </main>
      <Footer />
    </>
  );
}
