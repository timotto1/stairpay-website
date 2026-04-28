import type { Metadata } from "next";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CTABlock } from "@/components/sections/CTABlock";
import { FAQList } from "@/components/sections/FAQList";

import { StatusPill, StatusPillLight, type Status } from "./StatusPill";
import { JourneyMap } from "./JourneyMap";
import { HeroContent } from "./HeroContent";

export const metadata: Metadata = {
  title:
    "Stairpay Resident Portal — the resident relationship, finally on your side",
  description:
    "The Resident Portal for Housing Associations. Live staircasing and resales today; the full shared ownership lifecycle in active build. Book a demo.",
  openGraph: {
    title: "Stairpay Resident Portal",
    description:
      "The resident relationship, finally on your side. Live staircasing and resales today; the full shared ownership lifecycle in active build.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

// ─── Section 3 platform map data ────────────────────────────────────────────
const platformModules: { name: string; status: Status; blurb: string }[] = [
  {
    name: "Staircasing & Resales",
    status: "live",
    blurb: "Residents instruct, your team executes. Audit trail by default.",
  },
  {
    name: "Initial Sales",
    status: "live-q2-2026",
    blurb: "New-build SO sales journey for HAs and prospective buyers.",
  },
  {
    name: "Homeownership",
    status: "live-q3-2026",
    blurb: "Document intelligence layer for your existing stock.",
  },
  {
    name: "Resident Portal",
    status: "in-active-build",
    blurb: "The single resident-facing surface across the lifecycle.",
  },
];

// ─── Section 7 regulatory frameworks ────────────────────────────────────────
const regulatoryFrameworks = [
  "RSH Consumer Standards",
  "Building Safety Act 2022",
  "LFRA 2024",
  "LTA 1985 (s.20)",
  "Housing Ombudsman Code",
  "Awaab’s Law",
  "Equality Act 2010",
  "UK GDPR / DPA 2018",
  "WCAG 2.2 AA",
  "Bacs scheme rules",
  "PCI-DSS (tokenisation)",
  "FCA Consumer Duty (signposting)",
];

// ─── Section 8 outcomes ─────────────────────────────────────────────────────
const outcomes = [
  {
    label: "FOR OPS",
    headline:
      "Order-of-magnitude reduction in admin drag.",
    body: "On staircasing, resale, service charge, complaint, and permission workflows. No more dual-keying between systems.",
  },
  {
    label: "FOR REGULATION",
    headline: "Audit-trail-by-default and disclosure surfaces.",
    body: "That meet the bar set by the Consumer Standards, the BSA, and the Ombudsman Code.",
  },
  {
    label: "FOR RESIDENTS",
    headline: "A direct, digital relationship with every leaseholder.",
    body: "Currently the weakest link in HA customer experience according to every TSM cycle since 2023.",
  },
];

// ─── Section 9 deployment steps ─────────────────────────────────────────────
const deploymentSteps = [
  {
    n: "01",
    title: "Discovery",
    body: "We map your shared ownership operations, lease templates, panel arrangements, and existing systems. Two weeks.",
  },
  {
    n: "02",
    title: "Configuration",
    body: "We configure Stairpay around your policies, panels, workflows, and brand. No bespoke code. Four to six weeks.",
  },
  {
    n: "03",
    title: "Live",
    body: "Case Manager goes live first. Resident Portal modules switch on as they become available — at your pace, not ours.",
  },
];

// ─── Section 10 placeholder quotes ──────────────────────────────────────────
const quotes = [
  {
    initials: "AB",
    quote:
      "The Stairpay team replaced our staircasing spreadsheet with a system that our Homeownership Managers, our Finance team, and our auditors all trust. We took weeks out of every case.",
    name: "[Name]",
    title: "[Title], [HA name]",
  },
  {
    initials: "CD",
    quote:
      "Our residents can now see their service charge build up in real time, with every line explained. The dispute volume didn’t go up — it went down, because residents finally understood the bill.",
    name: "[Name]",
    title: "[Title], [HA name]",
  },
  {
    initials: "EF",
    quote:
      "Stairpay is the first product I’ve seen that takes the regulator’s direction of travel as a feature, not a constraint.",
    name: "[Name]",
    title: "[Title], [HA name]",
  },
];

// ─── Section 11 FAQ ─────────────────────────────────────────────────────────
const faqs = [
  {
    question: "What’s live today versus in build?",
    answer:
      "Staircasing and Resales workflows are live in Case Manager and used by HA teams in production today. Initial Sales is targeted live in Q2 2026. Homeownership document intelligence is targeted live in Q3 2026. The Resident Portal capabilities described on this page are in active build right now. Every capability tile and module on this page carries an honest status pill.",
  },
  {
    question: "How does the Resident Portal sit alongside Case Manager?",
    answer:
      "The two share a single canonical data model. Every resident action becomes a workflow on Case Manager. Every operational update is surfaced back to the resident in real time. They are the same product, two surfaces — not an integration.",
  },
  {
    question:
      "What if our HA hasn’t migrated to Stairpay yet — can we still offer the portal?",
    answer:
      "Not yet. Today the portal requires Case Manager underneath because the data model is shared. We are scoping a partial portal mode for HAs not yet migrated, but we are honest with prospects: the Resident Portal value is unlocked when both sides are connected.",
  },
  {
    question: "How do you handle accessibility and multilingual residents?",
    answer:
      "WCAG 2.2 AA across all surfaces; AAA for statutory notices and safety communications where feasible. Plain-English mode, read-aloud on every screen, BSL video for high-stakes comms. Priority languages include English, Welsh (statutory in Wales), Polish, Urdu, Bengali, Arabic, Somali, Portuguese, Romanian, and Punjabi. Annual external audit by a disabled-user panel with published results.",
  },
  {
    question: "What’s your data, security, and privacy posture?",
    answer:
      "OAuth 2.0 / OIDC with passkey support. MFA mandatory on lease-affecting actions. AES-256 at rest, TLS 1.3 in flight. Annual penetration test, quarterly automated scans, immutable tamper-evident audit log. UK GDPR and DPA 2018 compliant by design with a published DPIA per feature. PCI-DSS via tokenisation — we never store card data.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Discovery is two weeks. Configuration is four to six weeks. Case Manager goes live first; Resident Portal modules switch on as they become available. We do not run multi-quarter implementation projects.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Per-property annual subscription, banded by HA size, with all modules included once they go live. Pricing is shared during the demo so we can talk through it in the context of your portfolio.",
  },
];

// ─── Compliance traffic-light tiles (Section 5.4) ───────────────────────────
type LightStatus = "ok" | "warn" | "due";
const complianceTiles: {
  name: string;
  status: LightStatus;
  detail: string;
}[] = [
  { name: "Gas", status: "ok", detail: "47 days" },
  { name: "Electric", status: "ok", detail: "1y 2mo" },
  { name: "Fire risk", status: "ok", detail: "8 months" },
  { name: "EWS1", status: "ok", detail: "Verified" },
  { name: "Smoke / CO", status: "ok", detail: "Self-attested" },
  { name: "Asbestos", status: "ok", detail: "11 months" },
  { name: "Legionella", status: "warn", detail: "Due in 14 days" },
  { name: "Lift", status: "ok", detail: "5 months" },
  { name: "Fire doors", status: "ok", detail: "3 months" },
  { name: "EPC", status: "ok", detail: "C — 2031" },
  { name: "HHSRS hazards", status: "ok", detail: "None logged" },
  { name: "Cladding", status: "warn", detail: "Remediation in progress" },
];

// ───────────────────────────────────────────────────────────────────────────
// Page
// ───────────────────────────────────────────────────────────────────────────

export default function ResidentPortalPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── §1 Hero + product image + Everything residents need ─── */}
      {/* All three blocks share ONE section with ONE continuous gradient.
          No internal section boundaries means no seams between content
          areas. The wash runs white → yellow → orange → purple → solid
          deep purple, with the hero text on white, the SVG on the
          transitioning purple, and the journey grid on solid purple. */}
      <section
        id="capabilities"
        data-theme="light"
        className="relative overflow-hidden bg-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #ffffff 0%, #ffffff 18%, rgba(253, 224, 71, 0.28) 28%, rgba(251, 146, 60, 0.32) 35%, rgba(168, 85, 247, 0.45) 42%, rgba(124, 58, 237, 0.65) 50%, #7C3AED 60%, #7C3AED 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 backdrop-blur-2xl"
        />

        {/* Block 1 — hero text, fills ~65vh so the SVG sits high on the page */}
        <Container className="relative z-10 min-h-[65vh] flex items-center pt-28 pb-8">
          <HeroContent />
        </Container>

        {/* Block 2 — product SVG, wide breakout */}
        <div className="relative z-10 px-6 md:px-10 pb-16 md:pb-24">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/resident-portal-hero.svg"
            alt="Resident Portal — product overview"
            className="w-full max-w-[1600px] mx-auto h-auto drop-shadow-[0_32px_64px_rgba(0,0,0,0.30)]"
          />
        </div>

        {/* Block 3 — Everything residents need, on solid deep purple */}
        <Container className="relative z-10 pb-20 md:pb-[100px]">
          <div className="max-w-[820px] mb-12">
            <p className="text-eyebrow text-white/70 mb-4">
              EVERYTHING RESIDENTS NEED
            </p>
            <h2 className="text-h2 text-white">
              One app. The six things every shared owner needs to do.
            </h2>
          </div>
          <JourneyMap />
        </Container>
      </section>

      {/* ─── §2 The Problem ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">
            THE PROBLEM
          </p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            The weakest link in HA customer experience is the one with the
            highest stakes.
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              The relationship between a Housing Association and its shared
              owners runs on email, PDFs, spreadsheets, and post. Tenant
              Satisfaction Measures published since 2023 confirm what every
              Homeownership Manager already knows: communication is too slow,
              transparency is too thin, and the operational drag is
              unsustainable.
            </p>
            <p>
              Regulators have responded. The Building Safety Act, the Social
              Housing Regulation Act, the Leasehold and Freehold Reform Act
              2024, the Housing Ombudsman’s statutory Complaint Handling
              Code, and Awaab’s Law all set a higher bar than paper processes
              can clear.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* §2 stat strip */}
      <section className="bg-[var(--color-bg-white)] border-y border-[var(--color-border-card)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border-card)]">
            <div className="p-10 md:p-14 text-center">
              <p className="text-[clamp(40px,5vw,64px)] font-[500] tracking-[-1.5px] text-[var(--color-text-dark)] leading-none">
                250,000+
              </p>
              <p className="text-[14px] font-[300] text-[var(--color-text-body-light)] mt-3">
                shared owners in England
              </p>
            </div>
            <div className="p-10 md:p-14 text-center">
              <p className="text-[clamp(40px,5vw,64px)] font-[500] tracking-[-1.5px] text-[var(--color-text-dark)] leading-none">
                Sub-50
              </p>
              <p className="text-[14px] font-[300] text-[var(--color-text-body-light)] mt-3">
                average TSM scores for SO satisfaction across most large HAs
              </p>
            </div>
            <div className="p-10 md:p-14 text-center">
              <p className="text-[clamp(40px,5vw,64px)] font-[500] tracking-[-1.5px] text-[var(--color-text-dark)] leading-none">
                8
              </p>
              <p className="text-[14px] font-[300] text-[var(--color-text-body-light)] mt-3">
                major statutory frameworks reshaping the SO relationship since
                2022
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── §3 Beyond Staircasing & Resales ─── */}
      <SectionWrapper theme="light" id="beyond">
        <Container>
          <div className="max-w-[820px] mb-16">
            <p className="text-eyebrow text-[var(--color-accent)] mb-4">
              THE REPOSITIONING
            </p>
            <h2 className="text-h2 text-[var(--color-text-dark)] mb-6">
              We started with the hardest workflows. We’re building the whole
              relationship.
            </h2>
            <div className="space-y-5 text-body text-[var(--color-text-body)]">
              <p>
                Stairpay began with Staircasing and Resales — the most painful
                manual workflows for your team and the most direct point of
                contact with your residents. We chose those as the wedge
                because if we couldn’t make those right, nothing else
                mattered.
              </p>
              <p>
                We are now extending across the full shared ownership
                lifecycle. Initial Sales takes us upstream into the start of
                the resident relationship. Homeownership applies document
                intelligence to your existing stock. The Resident Portal
                turns every leaseholder into an active participant in their
                own homeownership journey. One canonical data model. One
                product. Both sides of the lease, connected.
              </p>
            </div>
          </div>

          {/* Platform map: 4 modules on a horizontal connecting line */}
          <div className="relative">
            {/* Connecting line */}
            <div
              className="hidden lg:block absolute top-[26px] left-[8%] right-[8%] h-px bg-[var(--color-border-card)]"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {platformModules.map((mod) => (
                <div
                  key={mod.name}
                  className="bg-[var(--color-bg-white)] border border-[var(--color-border-card)] rounded-[6px] p-6 flex flex-col gap-4"
                >
                  <span
                    className="w-3 h-3 rounded-full bg-[var(--color-accent)] -mb-2"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[18px] font-[500] tracking-[-0.3px] text-[var(--color-text-dark)] leading-snug">
                      {mod.name}
                    </h3>
                    <StatusPillLight status={mod.status} className="shrink-0" />
                  </div>
                  <p className="text-[13px] font-[300] leading-relaxed text-[var(--color-text-body)]">
                    {mod.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>


      {/* ─── §5 Hero capability deep-dives ─── */}
      <SectionWrapper theme="dark">
        <Container>
          <div className="max-w-[820px] mb-16">
            <p className="text-eyebrow text-[var(--color-accent-pale)] mb-4">
              FOUR PRODUCT SURFACES
            </p>
            <h2 className="text-h2 text-[var(--color-text-primary)]">
              What residents see. What your team sees. Both connected.
            </h2>
          </div>

          {/* §5.1 Personalised Home */}
          <DeepDive
            eyebrow="PERSONALISED HOME"
            status="in-active-build"
            headline="Three to seven cards. Ranked for this resident, today."
            body="The Home screen isn’t a menu. It’s a dynamic, ranked surface of what matters now — driven by lease stage, financial state, compliance status, calendar proximity, and life-event signals. Quiet by default. Clear when it counts. Cards can be dismissed, pinned, or snoozed. When nothing demands attention, the screen shows a calm ‘all good today’ view."
            mock={<HomeMock />}
            reverse={false}
          />

          <div className="h-20" />

          {/* §5.2 Service Charge */}
          <DeepDive
            eyebrow="SERVICE CHARGE"
            status="in-active-build"
            headline="Every pound explained. Every variance justified. Every dispute on a clock."
            body="Service charges are the most opaque, most disputed, most emotionally-charged area of shared ownership. The Resident Portal shows the live budget as it’s being shaped, every line with supplier and apportionment, year-on-year deltas with reasons, anonymised benchmarks against similar schemes, and one-tap dispute on any line — with billing for that line automatically held pending resolution."
            pullStat="Lift transparency TSM scores by 10–15 points on this surface alone."
            mock={<ServiceChargeMock />}
            reverse
          />

          <div className="h-20" />

          {/* §5.3 Staircasing coach */}
          <DeepDive
            eyebrow="STAIRCASING — LIVE IN CASE MANAGER · RESIDENT-FACING COACH IN ACTIVE BUILD"
            status="in-active-build"
            headline="From under 10% staircasing to a measurable lift in equity-building activity."
            body="Staircasing is the flagship equity-building action of shared ownership — and historically the most under-used. The Resident Portal includes a live equity view, a monthly affordability engine, market-context pricing, goal tracking with a path to the resident’s target share, and a single quiet 1% nudge in each eligibility window. Built around the 2024 Model Lease and the new 1% statutory right."
            pullStat="Residents who don’t staircase are the ones most exposed to unsold-share rent rises. The coach exists to take activation friction to zero."
            mock={<StaircasingMock />}
            reverse={false}
          />

          <div className="h-20" />

          {/* §5.4 Compliance */}
          <DeepDive
            eyebrow="SAFETY & COMPLIANCE"
            status="in-active-build"
            headline="From ‘do I trust the HA?’ to ‘I can see it myself.’"
            body="Post-Grenfell, Building Safety Act, and the Social Housing Regulation Act, the resident’s right to know has expanded dramatically. The Resident Portal is the delivery channel. A live traffic-light dashboard for every obligation. Certificate freshness counters. Live cladding remediation status with funding and BSA protection. Block-level incident log within 24 hours. Self-attestable items the resident can confirm inline, and which count as evidence on your side."
            mock={<ComplianceMock />}
            reverse
          />
        </Container>
      </SectionWrapper>

      {/* ─── §6 Two-sided value ─── */}
      <SectionWrapper theme="light">
        <Container>
          <div className="max-w-[820px] mb-16">
            <p className="text-eyebrow text-[var(--color-accent)] mb-4">
              TWO SURFACES, ONE PRODUCT
            </p>
            <h2 className="text-h2 text-[var(--color-text-dark)] mb-6">
              The first platform built for both sides of the lease.
            </h2>
            <p className="text-body text-[var(--color-text-body)]">
              Stairpay is one product, two surfaces, one canonical data
              model. Residents instruct staircasing, resales, repairs,
              complaints, and lease changes through the portal. Each
              instruction lands as a workflow on your operations platform —
              assigned, tracked, evidenced, audit-logged. Updates flow back
              to the resident in real time. No more dual-keying. No more
              chasing. No more ‘we’ll get back to you’.
            </p>
          </div>
          <TwoSidedSchematic />
        </Container>
      </SectionWrapper>

      {/* ─── §7 Built for the regulatory reality ─── */}
      <SectionWrapper theme="light" id="compliance">
        <Container>
          <div className="max-w-[820px] mb-12">
            <p className="text-eyebrow text-[var(--color-accent)] mb-4">
              REGULATORY REALITY
            </p>
            <h2 className="text-h2 text-[var(--color-text-dark)] mb-6">
              Compliant by design — to standards your regulator already
              wrote.
            </h2>
            <p className="text-body text-[var(--color-text-body)]">
              Every workflow is mapped to the framework that governs it.
              Audit trails are immutable. Disclosures are timestamped.
              Dispute clocks run automatically. Your evidence pack writes
              itself.
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
          <p className="text-[11px] font-[500] tracking-[2px] uppercase text-[var(--color-text-muted)] text-center mt-8">
            Independently audited · Externally penetration-tested · DPIA
            published per feature
          </p>
        </Container>
      </SectionWrapper>

      {/* ─── §8 Outcomes ─── */}
      <SectionWrapper theme="light">
        <Container>
          <div className="max-w-[820px] mb-12">
            <p className="text-eyebrow text-[var(--color-accent)] mb-4">
              OUTCOMES
            </p>
            <h2 className="text-h2 text-[var(--color-text-dark)]">
              Operational lift, regulatory cover, and a TSM story you can
              defend.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((o) => (
              <div
                key={o.label}
                className="bg-[var(--color-bg-white)] border border-[var(--color-border-card)] rounded-[6px] p-8"
              >
                <p className="text-eyebrow text-[var(--color-text-muted)] mb-4">
                  {o.label}
                </p>
                <h3 className="text-[22px] font-[500] tracking-[-0.3px] text-[var(--color-text-dark)] leading-snug mb-4">
                  {o.headline}
                </h3>
                <p className="text-[14px] font-[300] leading-relaxed text-[var(--color-text-body)]">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── §9 How we deploy ─── */}
      <SectionWrapper theme="dark">
        <Container>
          <div className="max-w-[820px] mb-16">
            <p className="text-eyebrow text-[var(--color-accent-pale)] mb-4">
              HOW WE DEPLOY
            </p>
            <h2 className="text-h2 text-[var(--color-text-primary)] mb-6">
              Designed with you. Deployed alongside Case Manager.
            </h2>
            <p className="text-body text-[var(--color-text-secondary)]">
              Stairpay is a multi-tenant platform. You get a configured
              product, not a build project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deploymentSteps.map((s, i) => (
              <div
                key={s.n}
                className="relative bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] rounded-[6px] p-8"
              >
                <p className="text-eyebrow text-[var(--color-text-muted)] mb-4">
                  STEP {s.n}
                </p>
                <h3 className="text-[24px] font-[500] tracking-[-0.3px] text-[var(--color-text-primary)] leading-snug mb-4">
                  {s.title}
                </h3>
                <p className="text-[14px] font-[300] leading-relaxed text-[var(--color-text-secondary)]">
                  {s.body}
                </p>
                {i < deploymentSteps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--color-border-dark)]"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── §10 Social proof (placeholders) ─── */}
      <SectionWrapper theme="light">
        <Container>
          <div className="max-w-[820px] mb-12">
            <p className="text-eyebrow text-[var(--color-accent)] mb-4">
              SOCIAL PROOF
            </p>
            <h2 className="text-h2 text-[var(--color-text-dark)]">
              What HAs are saying.
            </h2>
            <p className="text-[12px] tracking-[1.5px] uppercase text-[var(--color-text-muted)] mt-6">
              Placeholders — replace before launch with named customers and
              signed-off quotes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {quotes.map((q, i) => (
              <div
                key={i}
                className="bg-[var(--color-bg-white)] border border-[var(--color-border-card)] rounded-[6px] p-8 flex flex-col"
              >
                <p className="text-[15px] font-[300] leading-relaxed text-[var(--color-text-dark)] flex-1">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[var(--color-border-card)]">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-[12px] font-[500] tracking-[1px]">
                    {q.initials}
                  </span>
                  <div>
                    <p className="text-[13px] font-[500] text-[var(--color-text-dark)]">
                      {q.name}
                    </p>
                    <p className="text-[12px] font-[300] text-[var(--color-text-muted)]">
                      {q.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {[
              "[HA logo 1]",
              "[HA logo 2]",
              "[HA logo 3]",
              "[HA logo 4]",
              "[HA logo 5]",
              "[HA logo 6]",
              "[HA logo 7]",
              "[HA logo 8]",
            ].map((l) => (
              <span
                key={l}
                className="text-[13px] font-[400] tracking-[-0.2px] text-[var(--color-text-muted)]"
              >
                {l}
              </span>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── §11 FAQ ─── */}
      <SectionWrapper theme="light" id="faq">
        <FAQList
          eyebrow="FAQ"
          headline="The questions every buying committee asks. Answered honestly."
          items={faqs}
          theme="light"
        />
      </SectionWrapper>

      {/* ─── §12 Final CTA ─── */}
      <CTABlock
        eyebrow="READY?"
        headline="Build the resident relationship your regulator already expects you to have."
        description="Book a 30-minute demo. We’ll show you what’s live, walk you through what’s in build, and answer the operational questions your team will ask."
        primaryCta={{ label: "Book a Demo", href: "/contact" }}
        secondaryCta={{
          label: "Email Tim",
          href: "mailto:tim@stairpay.com?subject=Resident%20Portal%20-%20Demo",
        }}
        theme="dark"
      />

      <Footer />
    </>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// DeepDive — two-column layout for §5
// ───────────────────────────────────────────────────────────────────────────

interface DeepDiveProps {
  eyebrow: string;
  status: Status;
  headline: string;
  body: string;
  pullStat?: string;
  mock: React.ReactNode;
  reverse: boolean;
}

function DeepDive({
  eyebrow,
  status,
  headline,
  body,
  pullStat,
  mock,
  reverse,
}: DeepDiveProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <p className="text-eyebrow text-[var(--color-accent-pale)]">
            {eyebrow}
          </p>
          <StatusPill status={status} />
        </div>
        <h3 className="text-h3 text-[var(--color-text-primary)] mb-5 leading-tight">
          {headline}
        </h3>
        <p className="text-body text-[var(--color-text-secondary)]">{body}</p>
        {pullStat && (
          <p className="text-[15px] font-[400] italic text-[var(--color-accent-pale)] mt-6 pl-5 border-l-2 border-[var(--color-accent)]">
            {pullStat}
          </p>
        )}
      </div>
      <div>{mock}</div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Product UI mocks — DOM-based stand-ins for full-fidelity screenshots
// ───────────────────────────────────────────────────────────────────────────

function MockFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[var(--color-bg-white)] border border-[var(--color-border-dark)] rounded-[10px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 h-8 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-card)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-4 text-[10px] font-[400] tracking-[0.5px] text-[var(--color-text-muted)]">
          portal.stairpay.com
        </span>
      </div>
      <div className="p-6 text-[var(--color-text-dark)] bg-[var(--color-bg-white)]">
        {children}
      </div>
    </div>
  );
}

function HomeMock() {
  return (
    <MockFrame>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] tracking-[1.5px] uppercase text-[var(--color-text-muted)]">
            Good morning, Alex
          </p>
          <p className="text-[16px] font-[500] mt-0.5">
            12 Lavender Walk · 35% owned · 995 yrs
          </p>
        </div>
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-[11px] font-[500]">
          AM
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-5">
        {["Pay", "Repair", "Ask", "Charges"].map((a) => (
          <div
            key={a}
            className="text-[11px] font-[400] py-2 text-center rounded-[4px] bg-[var(--color-bg-surface)] border border-[var(--color-border-card)] text-[var(--color-text-dark)]"
          >
            {a}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <PriorityCard
          severity="amber"
          tag="P1"
          title="Rent change notice"
          detail="Action by 7 May"
        />
        <PriorityCard
          severity="blue"
          tag="P2"
          title="Service charge estimate published"
          detail="Every line explained"
        />
        <PriorityCard
          severity="blue"
          tag="P2"
          title="1% staircasing eligibility open"
          detail="Window until 30 June"
        />
        <PriorityCard
          severity="grey"
          tag="P3"
          title="All compliance certificates current"
          detail="Last update 2 days ago"
        />
      </div>
    </MockFrame>
  );
}

function PriorityCard({
  severity,
  tag,
  title,
  detail,
}: {
  severity: "amber" | "blue" | "grey";
  tag: string;
  title: string;
  detail: string;
}) {
  const sev = {
    amber: "border-l-amber-400",
    blue: "border-l-sky-400",
    grey: "border-l-[var(--color-border-card)]",
  }[severity];
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 bg-[var(--color-bg-surface)] border border-[var(--color-border-card)] border-l-[3px] ${sev} rounded-[4px]`}
    >
      <span className="text-[10px] font-[600] tracking-[1px] text-[var(--color-text-muted)] w-6 shrink-0">
        {tag}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-[500] text-[var(--color-text-dark)] truncate">
          {title}
        </p>
        <p className="text-[11px] font-[300] text-[var(--color-text-body-light)] truncate">
          {detail}
        </p>
      </div>
    </div>
  );
}

function ServiceChargeMock() {
  const lines = [
    { name: "Communal cleaning", amt: "£142", delta: "+6%", up: true, selected: true },
    { name: "Garden maintenance", amt: "£88", delta: "−3%", up: false },
    { name: "Buildings insurance", amt: "£312", delta: "+2%", up: true },
    { name: "Lift servicing", amt: "£74", delta: "−1%", up: false },
    { name: "Communal electricity", amt: "£59", delta: "+11%", up: true },
    { name: "Door entry", amt: "£28", delta: "0%", up: false },
    { name: "CCTV", amt: "£22", delta: "0%", up: false },
    { name: "Reserve fund", amt: "£180", delta: "+4%", up: true },
  ];
  return (
    <MockFrame>
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-3 space-y-1.5">
          <p className="text-[11px] tracking-[1.5px] uppercase text-[var(--color-text-muted)] mb-2">
            2026 service charge — line by line
          </p>
          {lines.map((l) => (
            <div
              key={l.name}
              className={`flex items-center justify-between px-3 py-2 rounded-[4px] border ${
                l.selected
                  ? "bg-[var(--color-accent-light)] border-[var(--color-accent)]"
                  : "border-[var(--color-border-card)]"
              }`}
            >
              <span className="text-[12px] font-[400] text-[var(--color-text-dark)]">
                {l.name}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[12px] font-[500] text-[var(--color-text-dark)]">
                  {l.amt}
                </span>
                <span
                  className={`text-[10px] font-[500] ${
                    l.up ? "text-amber-600" : "text-emerald-700"
                  }`}
                >
                  {l.delta}
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="col-span-2 bg-[var(--color-bg-surface)] border border-[var(--color-border-card)] rounded-[6px] p-4">
          <p className="text-[11px] tracking-[1.5px] uppercase text-[var(--color-text-muted)]">
            Communal cleaning
          </p>
          <p className="text-[22px] font-[500] tracking-[-0.5px] mt-1 mb-3">
            £142
          </p>
          <dl className="space-y-1.5 text-[11px]">
            <div className="flex justify-between">
              <dt className="text-[var(--color-text-muted)]">Supplier</dt>
              <dd className="text-[var(--color-text-dark)]">SparkleClean Ltd</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[var(--color-text-muted)]">Frequency</dt>
              <dd className="text-[var(--color-text-dark)]">Weekly</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[var(--color-text-muted)]">Apportionment</dt>
              <dd className="text-[var(--color-text-dark)]">By floor area</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[var(--color-text-muted)]">Your share</dt>
              <dd className="text-[var(--color-text-dark)]">0.46%</dd>
            </div>
          </dl>
          <p className="text-[10px] font-[300] leading-relaxed text-[var(--color-text-body-light)] mt-3 pt-3 border-t border-[var(--color-border-card)]">
            Up 6% — minimum-wage uplift, contractor confirmed.
          </p>
          <button className="mt-3 w-full text-[11px] font-[500] tracking-[1.5px] uppercase border border-[var(--color-text-dark)] text-[var(--color-text-dark)] py-2 hover:bg-[var(--color-text-dark)] hover:text-white transition-colors">
            Dispute this line
          </button>
        </div>
      </div>
    </MockFrame>
  );
}

function StaircasingMock() {
  return (
    <MockFrame>
      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { v: "35%", l: "Owned" },
          { v: "£126,000", l: "Est. value" },
          { v: "£92,400", l: "Mortgage" },
          { v: "£33,600", l: "Net equity" },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <p className="text-[18px] font-[500] tracking-[-0.5px] text-[var(--color-text-dark)] leading-none">
              {s.v}
            </p>
            <p className="text-[10px] tracking-[1px] uppercase text-[var(--color-text-muted)] mt-1">
              {s.l}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-1 text-[11px] font-[500] mb-4 border-b border-[var(--color-border-card)]">
        {["Overview", "Affordability", "1% option", "Full staircase", "Case"].map(
          (t, i) => (
            <span
              key={t}
              className={`px-3 py-2 ${
                i === 2
                  ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)]"
              }`}
            >
              {t}
            </span>
          ),
        )}
      </div>
      <div className="bg-[var(--color-accent-light)] border border-[var(--color-accent)] rounded-[6px] p-4">
        <p className="text-[11px] tracking-[1.5px] uppercase text-[var(--color-accent)] mb-2">
          1% eligibility window open
        </p>
        <p className="text-[15px] font-[500] text-[var(--color-text-dark)] leading-snug">
          Window open until 30 June. Today’s 1% costs{" "}
          <span className="text-[var(--color-accent)]">£1,260</span>{" "}
          (HPI formula). Estimated rent saving £36/mo.
        </p>
        <div className="mt-4 flex gap-2">
          <button className="text-[11px] font-[500] tracking-[1.5px] uppercase bg-[var(--color-accent)] text-white px-4 py-2">
            Start 1% staircase
          </button>
          <button className="text-[11px] font-[500] tracking-[1.5px] uppercase border border-[var(--color-text-dark)] text-[var(--color-text-dark)] px-4 py-2">
            Learn more
          </button>
        </div>
      </div>
      <div className="mt-4 bg-[var(--color-bg-surface)] border border-[var(--color-border-card)] rounded-[6px] p-3">
        <p className="text-[11px] tracking-[1.5px] uppercase text-[var(--color-text-muted)]">
          Goal — 50% in three years
        </p>
        <p className="text-[12px] font-[400] text-[var(--color-text-dark)] mt-1">
          On track. Save £180/mo to stay on path.
        </p>
        <div className="mt-2 h-1.5 bg-[var(--color-border-card)] rounded-full overflow-hidden">
          <div className="h-full w-[42%] bg-[var(--color-accent)]" />
        </div>
      </div>
    </MockFrame>
  );
}

function ComplianceMock() {
  const icon = (s: LightStatus) =>
    s === "ok" ? (
      <CheckCircle2 size={14} strokeWidth={1.5} className="text-emerald-600" />
    ) : s === "warn" ? (
      <Clock size={14} strokeWidth={1.5} className="text-amber-600" />
    ) : (
      <AlertCircle size={14} strokeWidth={1.5} className="text-red-600" />
    );
  return (
    <MockFrame>
      <div className="px-3 py-2 bg-[var(--color-bg-surface)] border border-[var(--color-border-card)] rounded-[4px] mb-4 flex items-center gap-2">
        <Clock size={13} strokeWidth={1.5} className="text-amber-600" />
        <p className="text-[11px] font-[400] text-[var(--color-text-body)]">
          Block-level cladding remediation: in progress, funded, BSA
          protection applied.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {complianceTiles.map((t) => (
          <div
            key={t.name}
            className="bg-[var(--color-bg-surface)] border border-[var(--color-border-card)] rounded-[4px] p-2.5"
          >
            <div className="flex items-center gap-1.5 mb-1">
              {icon(t.status)}
              <p className="text-[11px] font-[500] text-[var(--color-text-dark)] truncate">
                {t.name}
              </p>
            </div>
            <p className="text-[10px] font-[300] text-[var(--color-text-body-light)] truncate">
              {t.detail}
            </p>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// §6 Two-sided schematic
// ───────────────────────────────────────────────────────────────────────────

function TwoSidedSchematic() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_minmax(0,1fr)] items-center gap-8">
      {/* Phone — Resident Portal */}
      <div className="mx-auto">
        <div className="w-[240px] aspect-[9/19] rounded-[24px] border border-[var(--color-border-card)] bg-[var(--color-bg-white)] shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden p-4 flex flex-col gap-3">
          <p className="text-[10px] tracking-[1.5px] uppercase text-[var(--color-text-muted)]">
            Resident Portal
          </p>
          <p className="text-[14px] font-[500] text-[var(--color-text-dark)]">
            Hi Alex
          </p>
          <div className="flex-1 space-y-2">
            <PriorityCard
              severity="amber"
              tag="P1"
              title="Rent change notice"
              detail="Action by 7 May"
            />
            <PriorityCard
              severity="blue"
              tag="P2"
              title="1% staircase open"
              detail="Until 30 June"
            />
            <PriorityCard
              severity="grey"
              tag="P3"
              title="Compliance up to date"
              detail="2 days ago"
            />
          </div>
        </div>
      </div>

      {/* Connector */}
      <div className="flex flex-col items-center justify-center gap-2 my-6 lg:my-0">
        <div className="hidden lg:block w-full h-px bg-[var(--color-border-card)] relative">
          <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-l border-t border-[var(--color-text-muted)]" />
          <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-r border-b border-[var(--color-text-muted)]" />
        </div>
        <p className="text-[11px] tracking-[2px] uppercase text-[var(--color-text-muted)] text-center">
          One canonical data model · Real-time sync
        </p>
      </div>

      {/* Desktop — Case Manager */}
      <div>
        <MockFrame>
          <p className="text-[11px] tracking-[1.5px] uppercase text-[var(--color-text-muted)] mb-3">
            Case Manager — Open cases
          </p>
          <div className="space-y-1.5">
            {[
              { id: "STC-2104", title: "Alex Morgan · 1% staircase", state: "Valuation", clock: "SLA 4d 12h" },
              { id: "RES-1822", title: "12 Birch Court · Resale", state: "Nominations", clock: "SLA 21d" },
              { id: "CMP-0913", title: "Cladding query · Block 14", state: "Stage 1", clock: "SLA 7d" },
              { id: "PRM-0304", title: "Alterations · Bathroom", state: "Awaiting plans", clock: "SLA 14d" },
            ].map((c, i) => (
              <div
                key={c.id}
                className={`flex items-center gap-3 px-3 py-2 rounded-[4px] border ${
                  i === 0
                    ? "border-[var(--color-accent)] bg-[var(--color-accent-light)]"
                    : "border-[var(--color-border-card)] bg-[var(--color-bg-surface)]"
                }`}
              >
                <span className="text-[10px] font-[500] tracking-[1px] text-[var(--color-text-muted)] w-16 shrink-0">
                  {c.id}
                </span>
                <span className="text-[12px] font-[400] text-[var(--color-text-dark)] flex-1 truncate">
                  {c.title}
                </span>
                <span className="text-[10px] font-[400] text-[var(--color-text-body-light)] hidden sm:inline">
                  {c.state}
                </span>
                <span className="text-[10px] font-[500] text-amber-700">
                  {c.clock}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-[var(--color-border-card)]">
            <p className="text-[10px] font-[400] text-[var(--color-text-body-light)]">
              <span className="font-[500] text-[var(--color-text-dark)]">Audit log</span>{" "}
              · 09:42 Alex Morgan submitted 1% staircase via Resident Portal · 09:42
              auto-assigned to Homeownership · 09:43 valuation panel notified
            </p>
          </div>
        </MockFrame>
      </div>
    </div>
  );
}
