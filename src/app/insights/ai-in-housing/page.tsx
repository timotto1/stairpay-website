import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Governance in Regulated Housing",
  description:
    "An examination of responsible AI adoption in the UK housing sector, governance frameworks, and the principles required for defensible artificial intelligence in regulated environments.",
};

export default function AIInHousingPage() {
  return (
    <>
      <GlobalNav />

      <HeroSection
        eyebrow="AI GOVERNANCE"
        headline="AI Governance in Regulated Housing"
        description="An examination of how artificial intelligence is being adopted across the UK housing sector, why regulated environments demand a fundamentally different approach, and what defensible AI governance looks like in practice."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "All Insights", href: "/insights" }}
      />

      {/* ─── Article Body ─── */}
      <SectionWrapper theme="dark">
        <Container narrow>
          <p className="text-small text-[var(--color-text-muted)] mb-10">
            Published February 2026 &middot; AI Governance &middot; 12 min read
          </p>

          {/* Section 1 */}
          <Badge>THE CURRENT LANDSCAPE</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
            The State of AI Adoption in UK Housing
          </h2>
          <div className="text-body text-[var(--color-text-secondary)] mt-5 space-y-5">
            <p>
              Artificial intelligence is no longer a speculative technology for
              the UK housing sector. Over the past three years, adoption has
              accelerated across repairs management, tenant communications,
              allocations, and increasingly, financial operations. A growing
              number of housing associations have deployed or piloted AI
              capabilities within their operational workflows, driven by the
              twin pressures of cost constraint and regulatory expectation.
            </p>
            <p>
              Yet the nature of this adoption varies enormously. At one end of
              the spectrum sit large registered providers with dedicated digital
              teams, experimenting with machine learning models for predictive
              maintenance and natural language processing for complaint
              classification. At the other sit organisations where &ldquo;AI
              adoption&rdquo; means a single team member using a general-purpose
              chatbot to draft correspondence. The gap between these two
              positions is not merely one of capability — it is a gap in
              governance maturity.
            </p>
            <p>
              What unites both ends of the spectrum is a shared vulnerability:
              the absence of structured frameworks for governing how AI is used,
              how decisions are audited, and how residents and regulators can be
              assured that automated processes are operating within acceptable
              boundaries. This vulnerability is particularly acute in shared
              ownership, where financial calculations, lease interpretation, and
              compliance obligations intersect in ways that demand precision and
              defensibility.
            </p>
          </div>

          {/* Section 2 */}
          <div className="h-px bg-[var(--color-border-dark)] my-14" />
          <Badge>REGULATED ENVIRONMENTS</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
            Why Regulated Housing Requires a Different Approach
          </h2>
          <div className="text-body text-[var(--color-text-secondary)] mt-5 space-y-5">
            <p>
              The housing sector is not the technology sector. The principles
              that govern responsible AI in consumer technology — transparency,
              fairness, accountability — apply here, but they are not
              sufficient. Housing associations operate within a regulatory
              framework that imposes specific obligations on how decisions
              affecting residents are made, evidenced, and reviewed. The
              Regulator of Social Housing&apos;s consumer standards, the Rent
              Standard, and the Transparency, Influence and Accountability
              Standard each carry implications for how automated systems may be
              deployed.
            </p>
            <p>
              Consider a practical example: a shared ownership provider uses an
              AI system to extract rent escalation clauses from lease documents
              and calculate annual rent adjustments. If the system
              misinterprets a clause — perhaps confusing RPI with CPI as the
              applicable index, or miscalculating the anniversary date — the
              consequences are not abstract. Residents receive incorrect rent
              demands. The provider is exposed to regulatory action and
              potential legal liability. The reputational damage compounds over
              time as affected leaseholders lose confidence in the
              organisation&apos;s competence.
            </p>
            <p>
              In this context, the standard technology-sector approach to AI —
              deploy, iterate, improve — is inadequate. Regulated housing
              demands that AI systems are correct from the outset, that their
              outputs are verifiable against source data, and that every
              automated decision carries an audit trail sufficient to satisfy
              both internal governance requirements and external regulatory
              scrutiny. The margin for error is not defined by user experience
              metrics; it is defined by legal obligation and resident welfare.
            </p>
          </div>

          {/* Section 3 */}
          <div className="h-px bg-[var(--color-border-dark)] my-14" />
          <Badge>THE GOVERNANCE GAP</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
            Most Housing AI Lacks Audit Trails and Explainability
          </h2>
          <div className="text-body text-[var(--color-text-secondary)] mt-5 space-y-5">
            <p>
              The uncomfortable reality is that the majority of AI deployments
              in UK housing today would not withstand serious regulatory
              scrutiny. Systems that classify repair requests, prioritise
              allocations, or process financial data frequently operate as
              opaque processes — producing outputs without providing the
              reasoning chain that led to those outputs. When an auditor asks
              why a particular rent figure was calculated, or why a specific
              clause was interpreted in a particular way, the answer too often
              is that the system produced the result and the team accepted it.
            </p>
            <p>
              This governance gap exists not because housing associations are
              negligent, but because the tools available to them were not
              designed for regulated environments. General-purpose AI platforms
              optimise for speed and scale, not for auditability and
              explainability. They are built to process text and produce
              outputs, not to maintain the evidentiary chain that a regulator or
              legal team would require. The result is a growing population of AI
              systems embedded in critical operational processes, operating
              without the governance infrastructure that the sector&apos;s
              regulatory framework demands.
            </p>
          </div>

          {/* Section 4 */}
          <div className="h-px bg-[var(--color-border-dark)] my-14" />
          <Badge>THE STAIRPAY APPROACH</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
            Embedded AI with Source-Text Verification
          </h2>
          <div className="text-body text-[var(--color-text-secondary)] mt-5 space-y-5">
            <p>
              Stairpay&apos;s approach to AI in shared ownership was designed
              from the outset for regulated environments. Every AI-generated
              interpretation — whether extracting a rent escalation formula
              from a lease clause, identifying a service charge cap, or
              classifying a staircasing restriction — is linked directly to the
              source text from which it was derived. The user does not simply
              receive an answer; they receive the answer alongside the specific
              clause, paragraph, or schedule that produced it.
            </p>
            <p>
              This source-text verification model serves a dual purpose. First,
              it enables operational staff to confirm or challenge AI
              interpretations with confidence, because the evidence is
              immediately visible. Second, it creates a defensible audit trail:
              if a regulator, auditor, or legal advisor queries a particular
              calculation, the organisation can demonstrate not only what the
              system concluded, but precisely which lease provision led to that
              conclusion. The human-in-the-loop is not an afterthought bolted
              onto an automated pipeline; it is an architectural principle
              embedded at every decision point.
            </p>
            <p>
              Every AI action within the Stairpay platform is logged with
              timestamp, user context, source document reference, and
              confidence score. Overrides are recorded alongside the original AI
              output, creating a complete audit history that evidences both the
              automated process and the human judgement applied to it. This is
              not merely good practice — in a regulated sector, it is the
              minimum standard that responsible AI deployment requires.
            </p>
          </div>

          {/* Section 5 */}
          <div className="h-px bg-[var(--color-border-dark)] my-14" />
          <Badge>PRINCIPLES</Badge>
          <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
            What Good Governance Looks Like
          </h2>
          <div className="text-body text-[var(--color-text-secondary)] mt-5 space-y-5">
            <p>
              Defensible AI in housing is not achieved through a single policy
              document or a compliance checkbox. It requires an integrated
              governance architecture that spans the full lifecycle of AI
              deployment — from initial design decisions through to ongoing
              monitoring and periodic review. Based on our work across the
              sector, we identify five principles that should underpin any
              housing association&apos;s approach to AI governance.
            </p>
            <p>
              First, traceability: every AI output must be linked to its source
              data, and the reasoning pathway must be inspectable by
              non-technical staff. Second, human authority: automated
              recommendations must remain subject to human review and override,
              particularly where financial or legal consequences are at stake.
              Third, audit completeness: the full decision history — including
              AI outputs, human overrides, and the rationale for both — must be
              retained in a structured, queryable format. Fourth, proportionate
              confidence: AI systems must communicate the confidence level of
              their outputs, and low-confidence interpretations must be flagged
              for mandatory human review. Fifth, continuous validation: AI
              models must be subject to periodic accuracy assessment against
              known-good data, with results reported to governance bodies.
            </p>
            <p>
              These principles are not aspirational. They reflect the practical
              requirements of operating AI within a regulatory framework that
              prioritises resident welfare and organisational accountability.
              Housing associations that adopt them will find themselves better
              positioned — not only to satisfy regulatory expectations, but to
              realise the genuine operational value that well-governed AI can
              deliver. Those that do not will face increasing scrutiny as the
              regulator&apos;s understanding of AI risk in housing matures over
              the coming years.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Discuss AI Governance for Your Organisation"
        description="Our team works with housing associations to assess AI readiness and design governance frameworks appropriate for regulated shared ownership operations."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
