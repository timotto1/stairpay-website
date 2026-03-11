import type { Metadata } from "next";
import {
  ShieldCheck,
  Eye,
  FileSearch,
  Lock,
  BookOpen,
} from "lucide-react";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { ContentSection } from "@/components/sections/ContentSection";
import { ApproachSection } from "@/components/sections/ApproachSection";

export const metadata: Metadata = {
  title: "AI Governance & Security — Stairpay",
  description:
    "AI you can defend at board level. Stairpay embeds intelligence within controlled workflows — structured outputs, human review, complete audit trails, and source-text verification on every output.",
  openGraph: {
    title: "AI Governance & Security — Stairpay",
    description:
      "Embedded AI within controlled workflows. Structured outputs, human review, complete audit trails, and full traceability.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function AIGovernancePage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="AI GOVERNANCE"
        headline="AI You Can Defend at Board Level"
        description="Stairpay does not bolt a chatbot onto your operations and call it intelligence. Our AI is embedded within controlled workflows — producing structured outputs that are human-reviewed, audit-logged, and traceable to original source documents. No black boxes. No public AI systems. No data leaving your controlled environment."
        primaryCta={{ label: "Request Architecture Pack", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      />

      {/* ─── How Our AI Works ─── */}
      <SectionWrapper theme="light" id="how-it-works">
        <ContentSection
          eyebrow="HOW IT WORKS"
          headline="How Our Intelligence Layer Operates"
          body={
            <>
              <p>
                Every instance of machine intelligence in Stairpay follows the
                same governance model. When the system analyses a lease document,
                generates a rent calculation, or scores a homeowner for
                staircasing readiness, it produces a structured output — not
                free-text prose, but defined data fields with explicit source
                citations.
              </p>
              <p className="mt-4">
                Each output is linked directly to the original source material.
                When a lease clause is extracted, the system records the exact
                page, paragraph, and text from which the interpretation was
                derived. When a financial calculation is performed, the formula,
                inputs, and lease terms are all logged. There is no step in the
                process where intelligence operates without traceability.
              </p>
              <p className="mt-4">
                Critically, no AI output in Stairpay takes effect without human
                review. The intelligence layer recommends, structures, and
                surfaces — but a human reviewer confirms before any data is
                committed to the record. This is not a limitation of the system.
                It is the design.
              </p>
            </>
          }
          image="/images/governance-shield.svg"
          imageAlt="Governance model showing structured AI outputs with source citations and human review gates"
          theme="light"
        />
      </SectionWrapper>

      {/* ─── Governance Framework ─── */}
      <SectionWrapper theme="dark" id="governance-framework">
        <ApproachSection
          eyebrow="GOVERNANCE FRAMEWORK"
          headline="Five Principles of Responsible Intelligence"
          items={[
            {
              icon: <FileSearch className="w-6 h-6" />,
              title: "Every Output Has a Source Citation",
              description:
                "No AI-generated data exists without a traceable link to the original source. Lease clause extractions cite the specific paragraph. Calculations reference the contractual terms. Recommendations identify the data points that informed them. If it cannot be cited, it is not surfaced.",
            },
            {
              icon: <Eye className="w-6 h-6" />,
              title: "Human Review Before Any Action",
              description:
                "The intelligence layer operates as a recommendation engine, not an autonomous agent. Every AI-generated output passes through a human review stage before it is committed to the system of record. Reviewers see the source material alongside the output, enabling informed confirmation or correction.",
            },
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Complete Audit Trail",
              description:
                "Every AI interaction is logged — the input data, the model version, the output produced, the reviewer who confirmed it, and the timestamp of each step. This audit trail is immutable and available for regulatory inspection, internal audit, or board-level governance review at any time.",
            },
            {
              icon: <Lock className="w-6 h-6" />,
              title: "No Data Leaves the Controlled Environment",
              description:
                "Stairpay does not send your data to public AI services. All intelligence processing occurs within our controlled infrastructure. Your lease documents, homeowner records, and financial data never transit through third-party AI platforms. Data residency and processing boundaries are contractually defined.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Explainable Decisions",
              description:
                "When the system produces a recommendation — a staircasing readiness score, a compliance risk flag, a rent calculation anomaly — the reasoning is transparent. The contributing factors are enumerated. The weighting is visible. There is no opaque scoring that cannot be interrogated and understood.",
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── Designed for Regulated Environments ─── */}
      <SectionWrapper theme="light" id="regulated-environments">
        <ContentSection
          eyebrow="FOR REGULATED ORGANISATIONS"
          headline="Designed for Regulated Environments"
          body={
            <>
              <p>
                Housing associations operate in a regulated environment where
                decisions must be defensible, data must be accurate, and
                governance must be demonstrable. The enthusiasm for AI across
                the technology sector has produced a generation of tools that
                prioritise capability over accountability — and that is precisely
                the wrong trade-off for organisations that answer to regulators,
                boards, and the communities they serve.
              </p>
              <p className="mt-4">
                Stairpay was designed from the outset for this context. Our AI
                governance framework is not a retrospective addition to satisfy
                procurement questionnaires — it is the architectural foundation
                upon which every intelligence capability is built. The question
                we ask before deploying any AI capability is not &ldquo;can the
                model do this?&rdquo; but &ldquo;can the organisation defend
                this at board level?&rdquo;
              </p>
              <p className="mt-4">
                For CIOs evaluating AI adoption, this means a fundamentally
                different conversation. Rather than debating whether to allow AI
                into sensitive operational processes, the discussion becomes how
                to deploy structured intelligence with the governance controls
                that your organisation requires. The capability is there. The
                guardrails are built in.
              </p>
            </>
          }
          image="/images/governance-shield.svg"
          imageAlt="Governance architecture showing controlled AI deployment within regulated operational workflows"
          reverse
          theme="light"
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Request the Architecture Pack"
        description="Our architecture pack details the full AI governance framework — data processing boundaries, audit trail specifications, review workflows, and security controls. We will walk through how it maps to your organisation's governance requirements."
        ctaLabel="Request Architecture Pack"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
