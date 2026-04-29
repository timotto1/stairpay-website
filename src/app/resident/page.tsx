import type { Metadata } from "next";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CTABlock } from "@/components/sections/CTABlock";
import { FAQList, type FAQItem } from "@/components/sections/FAQList";
import { Badge } from "@/components/ui/Badge";

import { HeroContent } from "./HeroContent";

export const metadata: Metadata = {
  title:
    "Stairpay Resident App — bespoke setup today, off-the-shelf in Q3/Q4",
  description:
    "The resident app for shared ownership Housing Associations. Bespoke setup today (paid, tailored to your brand and policies); a free off-the-shelf release lands in Q3/Q4 2026.",
  openGraph: {
    title: "Stairpay Resident App",
    description:
      "Bespoke setup today, off-the-shelf in Q3/Q4 2026. The same product, two routes to value.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

const whatWeTailor = [
  {
    title: "Lease policy library",
    body: "Your specific lease templates, statutory notices, and policy library — versioned, surfaced to the right resident, and tied to the cases they govern.",
  },
  {
    title: "Brand and tone",
    body: "Logos, colours, typography, voice, and copy — so the app feels like part of your service, not a third-party tool sitting next to it.",
  },
  {
    title: "Panel arrangements",
    body: "Your specific RICS valuation panel, solicitor panel, and lender list — with routing, SLA tracking, and challenge workflows configured around your relationships.",
  },
  {
    title: "Statutory notices",
    body: "Rent change notices, service charge consultations, and Section 20 surfaces tailored to your stock — with the clocks running on your operational calendar.",
  },
  {
    title: "Language pack",
    body: "Welsh (statutory in Wales), plus the priority languages for your portfolio — fully translated, not Google-translated. Plain-English mode and read-aloud across every surface.",
  },
];

const capabilityTiles = [
  {
    eyebrow: "Personalised Home",
    title: "Three to seven cards. Ranked for this resident, today.",
    body: "A dynamic, ranked surface of what matters now — driven by lease stage, financial state, compliance status, and life-event signals. Quiet by default. Clear when it counts.",
  },
  {
    eyebrow: "Service Charge",
    title: "Every pound explained. Every variance justified.",
    body: "Live budget shaping, every line with supplier and apportionment, year-on-year deltas with reasons, and one-tap dispute on any line — with billing held pending resolution.",
  },
  {
    eyebrow: "Staircasing coach",
    title: "From under 10% staircasing to a measurable lift.",
    body: "Live equity view, monthly affordability engine, market-context pricing, goal tracking, and one quiet 1% nudge per eligibility window. Built around the 2024 Model Lease.",
  },
  {
    eyebrow: "Safety & Compliance",
    title: "From 'do I trust the HA?' to 'I can see it myself.'",
    body: "Live traffic-light dashboard for every obligation. Certificate freshness counters. Block-level incident log within 24 hours. Self-attestable items the resident can confirm inline.",
  },
];

const deploymentSteps = [
  {
    track: "BESPOKE TODAY",
    n: "01",
    title: "Discovery",
    body: "We map your shared ownership operations, lease templates, panel arrangements, brand, and existing systems. Two weeks.",
  },
  {
    track: "BESPOKE TODAY",
    n: "02",
    title: "Tailored configuration",
    body: "We configure the resident app around your policies, panels, brand, and language pack. No bespoke code. Four to six weeks.",
  },
  {
    track: "BESPOKE TODAY",
    n: "03",
    title: "Live",
    body: "Your tailored resident app goes live, fully integrated with Case Manager. Faster value, paid setup.",
  },
  {
    track: "OFF-THE-SHELF Q3/Q4",
    n: "—",
    title: "Drop-in release",
    body: "A free, drop-in version with sensible defaults. Same product, no setup, no fee. Lands Q3/Q4 2026.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What's the difference between the bespoke setup and the off-the-shelf release?",
    answer:
      "Same product, two routes to value. The bespoke setup is a paid, fast-track configuration tailored to your brand, your policies, your lease library, your panel arrangements, and your language pack — typically six to eight weeks from start to go-live. The off-the-shelf release lands in Q3/Q4 2026: a free, drop-in version with sensible defaults, no setup, and no fee. If you need it live now and tailored to you, take the bespoke route. If you can wait and you're happy with sensible defaults, the off-the-shelf release will be free with Stairpay.",
  },
  {
    question: "How much does the bespoke setup cost?",
    answer:
      "Pricing for the bespoke setup is shared during the demo so we can talk through it in the context of your portfolio, your panel arrangements, and the language pack you'll need. The annual subscription is then per-property, banded by HA size — the same as the rest of Stairpay.",
  },
  {
    question: "When does the off-the-shelf release go live?",
    answer:
      "Q3/Q4 2026. Specific dates will be confirmed closer to release. The off-the-shelf release ships with sensible defaults (generic brand, statutory English, default panel routing) — the same underlying product as the bespoke version, just without the configuration pass.",
  },
  {
    question: "What if our HA hasn't migrated to Stairpay yet — can we still offer the resident app?",
    answer:
      "Not yet. The resident app shares a canonical data model with Case Manager, so it requires Stairpay underneath. We are scoping a partial mode for HAs not yet migrated, but we are honest with prospects: the value is unlocked when both sides are connected.",
  },
  {
    question: "How do you handle accessibility and multilingual residents?",
    answer:
      "WCAG 2.2 AA across all surfaces; AAA for statutory notices and safety communications where feasible. Plain-English mode and read-aloud on every screen, BSL video for high-stakes comms. Priority languages included as part of the bespoke setup; the off-the-shelf release ships with English and Welsh out of the box. Annual external audit by a disabled-user panel with published results.",
  },
  {
    question: "What's your data, security, and privacy posture?",
    answer:
      "OAuth 2.0 / OIDC with passkey support. MFA mandatory on lease-affecting actions. AES-256 at rest, TLS 1.3 in flight. Annual penetration test, quarterly automated scans, immutable tamper-evident audit log. UK GDPR and DPA 2018 compliant by design with a published DPIA per feature. PCI-DSS via tokenisation — we never store card data.",
  },
];

type LightStatus = "ok" | "warn" | "due";
const complianceTiles: { name: string; status: LightStatus; detail: string }[] = [
  { name: "Gas", status: "ok", detail: "47 days" },
  { name: "Electric", status: "ok", detail: "1y 2mo" },
  { name: "Fire risk", status: "ok", detail: "8 months" },
  { name: "EWS1", status: "ok", detail: "Verified" },
  { name: "Smoke / CO", status: "ok", detail: "Self-attested" },
  { name: "Asbestos", status: "ok", detail: "11 months" },
  { name: "Legionella", status: "warn", detail: "Due in 14 days" },
  { name: "Cladding", status: "warn", detail: "Remediation in progress" },
];

export default function ResidentPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── §1 Hero + product image — preserved from the previous page ───
          The white-to-purple gradient section with HeroContent and the
          resident-portal-hero.svg. Per the brief: keep this as-is. */}
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

        <Container className="relative z-10 min-h-[65vh] flex items-center pt-28 pb-8">
          <HeroContent />
        </Container>

        <div className="relative z-10 px-6 md:px-10 pb-20 md:pb-32">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/resident-portal-hero.svg"
            alt="Resident app — product overview"
            className="w-full max-w-[1600px] mx-auto h-auto drop-shadow-[0_32px_64px_rgba(0,0,0,0.30)]"
          />
        </div>
      </section>

      {/* ─── §2 Two-track positioning ─── */}
      <SectionWrapper theme="light">
        <Container>
          <div className="max-w-[820px] mb-14">
            <Badge>Two routes</Badge>
            <h2 className="text-h2 mt-5 text-[var(--color-text-dark)]">
              The same resident app. Two ways to put it in front of your residents.
            </h2>
            <p className="text-body mt-5 text-[var(--color-text-body)]">
              We've made an explicit commercial decision: a paid, tailored setup
              today, and a free off-the-shelf release in Q3/Q4 2026. Same
              underlying product. Different routes to value depending on what
              your team needs and when.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-[var(--color-bg-white)] border border-[var(--color-accent)] rounded-[8px] p-10 relative">
              <span className="absolute -top-3 left-10 inline-flex items-center text-[10px] font-[600] tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] bg-[var(--color-accent)] text-white">
                Today · Paid setup
              </span>
              <h3 className="text-h3 text-[var(--color-text-dark)] mt-2 leading-tight">
                Bespoke setup — tailored, fast, paid.
              </h3>
              <p className="text-body mt-5 text-[var(--color-text-body)]">
                We tailor the resident app to your brand, your policies, your
                lease library, your panel arrangements, and your language pack —
                in six to eight weeks from start to go-live. Faster value, with
                a setup fee, and the annual subscription that follows.
              </p>
              <ul className="mt-6 space-y-2 text-[14px] font-[300] text-[var(--color-text-body)]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  Configured around your operations, not generic defaults
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  Live in 6–8 weeks
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  Paid setup; per-property annual subscription
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-bg-card-light)] border border-[var(--color-border-card)] rounded-[8px] p-10 relative">
              <span className="absolute -top-3 left-10 inline-flex items-center text-[10px] font-[600] tracking-[1.5px] uppercase px-3 py-1 rounded-[3px] bg-[#111] text-white">
                Q3/Q4 2026 · Free
              </span>
              <h3 className="text-h3 text-[var(--color-text-dark)] mt-2 leading-tight">
                Off-the-shelf — drop-in, default, free.
              </h3>
              <p className="text-body mt-5 text-[var(--color-text-body)]">
                A drop-in version of the same product with sensible defaults —
                generic brand, statutory English (and Welsh), default panel
                routing. No setup, no setup fee, free with Stairpay. Lands in
                Q3/Q4 2026.
              </p>
              <ul className="mt-6 space-y-2 text-[14px] font-[300] text-[var(--color-text-body)]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-text-muted)]" />
                  Same underlying product, configured with sensible defaults
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-text-muted)]" />
                  Lands Q3/Q4 2026
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-text-muted)]" />
                  No setup fee — free with Stairpay
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── §3 Why a tailored resident app ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">
            WHY TAILORED MATTERS
          </p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            The strongest TSM and regulatory results come from an app that
            feels like yours.
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              Tenant Satisfaction Measures published since 2023 keep saying
              the same thing: communication is too slow, transparency is too
              thin, and residents experience HAs as a remote provider, not a
              service partner. A generic resident app ships some of that
              gap; a tailored one closes it.
            </p>
            <p>
              The Building Safety Act, the Social Housing Regulation Act, the
              Leasehold and Freehold Reform Act 2024, the Housing
              Ombudsman&rsquo;s Complaint Handling Code, and Awaab&rsquo;s
              Law all set a higher bar for the way HAs communicate with
              leaseholders. Hitting that bar means surfacing your specific
              policies, your specific lease terms, your specific panel
              arrangements — accurately, in the resident&rsquo;s own
              language, against your operational clocks.
            </p>
            <p>
              The bespoke route exists because most HAs need that today, not
              in nine months. The off-the-shelf release exists because the
              sensible-defaults version is genuinely useful, and we don&rsquo;t
              think a free version should be locked behind a paid setup.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── §4 What we tailor ─── */}
      <SectionWrapper theme="light">
        <Container>
          <div className="max-w-[680px] mb-14">
            <Badge>What we tailor</Badge>
            <h2 className="text-h2 mt-4 text-[var(--color-text-dark)]">
              The five areas the bespoke setup configures.
            </h2>
            <p className="text-body mt-5 text-[var(--color-text-body)]">
              Five tailoring axes, configured during a four-to-six-week
              configuration pass. Everything else is the underlying product.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeTailor.map((item, i) => (
              <div
                key={item.title}
                className="bg-[var(--color-bg-white)] border border-[var(--color-border-card)] rounded-[6px] p-6"
              >
                <p className="text-eyebrow text-[var(--color-text-muted)] mb-3">
                  Axis {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[20px] font-[500] tracking-[-0.3px] text-[var(--color-text-dark)] leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] font-[300] leading-relaxed text-[var(--color-text-body)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── §5 How off-the-shelf will work ─── */}
      <SectionWrapper theme="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20">
            <div>
              <Badge>Off-the-shelf · Q3/Q4 2026</Badge>
              <h2 className="text-h2 mt-4 text-[var(--color-text-dark)]">
                Free with Stairpay. Sensible defaults. No setup.
              </h2>
              <p className="text-body mt-5 text-[var(--color-text-body)]">
                The off-the-shelf release ships the same underlying product
                with a default configuration that works for most HAs without
                any tailoring. If you can wait until Q3/Q4 2026 and you don&rsquo;t
                need brand, panel, or policy customisation, this is the
                free route.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Generic brand",
                  body: "Stairpay-branded. Clear, neutral, and accessible — but not yours.",
                },
                {
                  title: "Statutory English + Welsh",
                  body: "Welsh in Wales (statutory). Other languages added later via the bespoke route.",
                },
                {
                  title: "Default panel routing",
                  body: "Standard RICS and solicitor panel routing, with fallbacks. Not your specific arrangements.",
                },
                {
                  title: "Standard policy library",
                  body: "Generic statutory notices and policies. Your specific lease library and policy variants come with the bespoke route.",
                },
              ].map((item) => (
                <li key={item.title}>
                  <h3 className="text-h3 text-[var(--color-text-dark)]">
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

      {/* ─── §6 Two-sided value (condensed) ─── */}
      <SectionWrapper theme="light">
        <Container>
          <div className="max-w-[820px] mb-12">
            <p className="text-eyebrow text-[var(--color-accent)] mb-4">
              TWO SURFACES, ONE PRODUCT
            </p>
            <h2 className="text-h2 text-[var(--color-text-dark)] mb-6">
              Residents instruct on phone. Your team executes on desktop.
            </h2>
            <p className="text-body text-[var(--color-text-body)]">
              Both routes — bespoke and off-the-shelf — share a canonical
              data model with Case Manager. Every resident action becomes a
              workflow on the operational side. Every operational update
              flows back to the resident in real time.
            </p>
          </div>
          <CondensedTwoSidedSchematic />
        </Container>
      </SectionWrapper>

      {/* ─── §7 Capability tiles — tighter grid ─── */}
      <SectionWrapper theme="dark">
        <Container>
          <div className="max-w-[820px] mb-12">
            <p className="text-eyebrow text-[var(--color-accent-pale)] mb-4">
              FOUR PRODUCT SURFACES
            </p>
            <h2 className="text-h2 text-[var(--color-text-primary)]">
              What residents see — same on both routes.
            </h2>
            <p className="text-body mt-5 text-[var(--color-text-secondary)]">
              The product is the product. Bespoke and off-the-shelf differ in
              how it&rsquo;s configured, not what it does.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilityTiles.map((tile) => (
              <div
                key={tile.eyebrow}
                className="bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] rounded-[8px] p-8"
              >
                <p className="text-eyebrow text-[var(--color-accent-pale)] mb-3">
                  {tile.eyebrow}
                </p>
                <h3 className="text-[22px] font-[500] tracking-[-0.3px] text-[var(--color-text-primary)] leading-snug mb-4">
                  {tile.title}
                </h3>
                <p className="text-[14px] font-[300] leading-relaxed text-[var(--color-text-secondary)]">
                  {tile.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── §8 Deployment — bespoke vs. off-the-shelf ─── */}
      <SectionWrapper theme="light">
        <Container>
          <div className="max-w-[820px] mb-14">
            <Badge>Deployment</Badge>
            <h2 className="text-h2 mt-4 text-[var(--color-text-dark)]">
              Three steps for the bespoke route. Drop-in for the rest.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {deploymentSteps.map((s) => (
              <div
                key={s.title}
                className="bg-[var(--color-bg-white)] border border-[var(--color-border-card)] rounded-[6px] p-8"
              >
                <p className="text-eyebrow text-[var(--color-accent)] mb-3">
                  {s.track}
                </p>
                <p className="text-[10px] tracking-[2px] uppercase text-[var(--color-text-muted)] mb-3">
                  Step {s.n}
                </p>
                <h3 className="text-[22px] font-[500] tracking-[-0.3px] text-[var(--color-text-dark)] leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] font-[300] leading-relaxed text-[var(--color-text-body)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── §9 FAQ ─── */}
      <SectionWrapper theme="light" id="faq">
        <FAQList
          eyebrow="FAQ"
          headline="Bespoke vs. off-the-shelf — and the questions that follow."
          items={faqs}
          theme="light"
        />
      </SectionWrapper>

      {/* ─── §10 Final CTA ─── */}
      <CTABlock
        eyebrow="READY?"
        headline="Tailored setup now, or wait for the free release?"
        description="If you need a tailored resident app live this year, talk to us about a bespoke setup. If you can wait, register interest in the off-the-shelf release and we'll let you know when it's live."
        primaryCta={{ label: "Talk to us about a tailored setup", href: "/contact" }}
        secondaryCta={{
          label: "Register interest — off-the-shelf",
          href: "/contact",
        }}
        theme="dark"
      />

      <Footer />
    </>
  );
}

function MockFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[var(--color-bg-white)] border border-[var(--color-border-card)] rounded-[10px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
      <div className="flex items-center gap-1.5 px-4 h-8 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-card)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-4 text-[10px] font-[400] tracking-[0.5px] text-[var(--color-text-muted)]">
          casemanager.stairpay.com
        </span>
      </div>
      <div className="p-6 text-[var(--color-text-dark)] bg-[var(--color-bg-white)]">
        {children}
      </div>
    </div>
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

function CondensedTwoSidedSchematic() {
  const icon = (s: LightStatus) =>
    s === "ok" ? (
      <CheckCircle2 size={12} strokeWidth={1.5} className="text-emerald-600" />
    ) : s === "warn" ? (
      <Clock size={12} strokeWidth={1.5} className="text-amber-600" />
    ) : (
      <AlertCircle size={12} strokeWidth={1.5} className="text-red-600" />
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_minmax(0,1fr)] items-center gap-8">
      <div className="mx-auto">
        <div className="w-[240px] aspect-[9/19] rounded-[24px] border border-[var(--color-border-card)] bg-[var(--color-bg-white)] shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden p-4 flex flex-col gap-3">
          <p className="text-[10px] tracking-[1.5px] uppercase text-[var(--color-text-muted)]">
            Resident app
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
          <div className="grid grid-cols-4 gap-1 pt-2 border-t border-[var(--color-border-card)]">
            {complianceTiles.slice(0, 4).map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-0.5">
                {icon(t.status)}
                <span className="text-[8px] font-[400] text-[var(--color-text-muted)] leading-none">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 my-6 lg:my-0">
        <div className="hidden lg:block w-full h-px bg-[var(--color-border-card)] relative">
          <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-l border-t border-[var(--color-text-muted)]" />
          <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-r border-b border-[var(--color-text-muted)]" />
        </div>
        <p className="text-[11px] tracking-[2px] uppercase text-[var(--color-text-muted)] text-center">
          One canonical data model · Real-time sync
        </p>
      </div>

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
        </MockFrame>
      </div>
    </div>
  );
}
