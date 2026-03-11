import {
  ShieldCheck,
  Lock,
  Brain,
  Scale,
} from "lucide-react";
import type { Metadata } from "next";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { ApproachSection } from "@/components/sections/ApproachSection";

export const metadata: Metadata = {
  title: "Security & Compliance — Stairpay",
  description:
    "Enterprise security for regulated housing. SOC 2 Type II (in progress), ISO 27001 aligned, GDPR compliant, UK data residency, and a governed AI framework.",
  openGraph: {
    title: "Security & Compliance — Stairpay",
    description:
      "Enterprise security for regulated housing. Governed AI, UK data residency, and continuous compliance.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function SecurityPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="SECURITY &amp; COMPLIANCE"
        headline="Enterprise Security for Regulated Housing"
        description="Stairpay is built for organisations that operate under regulatory scrutiny. Our security posture, data handling practices, and AI governance framework are designed to meet the requirements of UK housing associations — not adapted from a generic SaaS template."
        primaryCta={{ label: "Request Architecture Pack", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      />

      {/* ─── Security Posture ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">SECURITY POSTURE</p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            Standards Built for Regulated Environments
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              Our security architecture is designed around the principle that
              housing association data requires the same level of protection as
              financial services data. We hold ourselves to enterprise-grade
              standards because the organisations we serve are regulated, their
              data is sensitive, and their reputational exposure is real.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { label: "SOC 2 Type II", note: "In progress" },
              { label: "ISO 27001", note: "Aligned" },
              { label: "GDPR", note: "Compliant" },
              { label: "UK Data Residency", note: "Guaranteed" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-[var(--color-border-light)] p-6 text-center"
              >
                <p className="text-h3 text-[var(--color-text-dark)]">{item.label}</p>
                <p className="text-small text-[var(--color-accent)] mt-2">{item.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Data Handling ─── */}
      <SectionWrapper theme="dark">
        <ApproachSection
          eyebrow="DATA HANDLING"
          headline="How We Protect Your Data"
          items={[
            {
              icon: <Lock className="w-6 h-6" />,
              title: "Encryption at Rest and in Transit",
              description:
                "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Encryption keys are managed through a dedicated key management service with automatic rotation. No data is stored or processed in unencrypted form at any point in the pipeline.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Role-Based Access Control",
              description:
                "Access to provider data is governed by role-based permissions with the principle of least privilege. Every access event is logged, and administrative actions require multi-factor authentication. No Stairpay employee can access provider data without explicit authorisation and audit logging.",
            },
            {
              icon: <Lock className="w-6 h-6" />,
              title: "Audit Logging",
              description:
                "Every data access, modification, and system event is captured in an immutable audit log. Logs are retained in accordance with regulatory requirements and are available to providers on request. This provides complete traceability for compliance reviews and incident response.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Penetration Testing",
              description:
                "Regular penetration testing is conducted by independent third-party security firms. Findings are remediated according to severity-based SLAs, and test reports are available to providers under NDA. Our vulnerability management programme runs continuously, not annually.",
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── AI Governance ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">AI GOVERNANCE</p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            Responsible AI for Regulated Data
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              We do not use public AI models. No provider data is sent to
              third-party AI services, public language models, or external
              processing environments. All AI processing occurs within
              Stairpay&apos;s controlled infrastructure, subject to the same
              security controls as every other data operation.
            </p>
            <p>
              Every AI interpretation includes source-text verification. When
              our system extracts a clause from a lease, identifies a rent
              review mechanism, or calculates a staircasing entitlement, the
              output is linked directly to the original source text that
              informed it. This means every AI-generated insight can be verified
              by a human against the primary document — providing the
              auditability that regulated environments require.
            </p>
            <p>
              Human-in-the-loop validation is embedded at every critical
              decision point. AI augments your team&apos;s capability — it does
              not replace their judgement. Confidence scoring, exception
              flagging, and manual review workflows ensure that no AI output
              is treated as authoritative without appropriate human oversight.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Regulatory Compliance ─── */}
      <SectionWrapper theme="dark">
        <ApproachSection
          eyebrow="COMPLIANCE"
          headline="Designed for Regulated Housing"
          items={[
            {
              icon: <Scale className="w-6 h-6" />,
              title: "Regulator of Social Housing",
              description:
                "Our platform is designed with awareness of the Regulator of Social Housing's expectations around governance, financial viability, and consumer standards. Stairpay's audit trails and compliance monitoring capabilities support providers in meeting their regulatory obligations.",
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: "FCA Awareness",
              description:
                "Shared Ownership sits at the intersection of housing and financial services regulation. Our affordability assessment capabilities and sales intelligence workflows are designed with awareness of FCA consumer duty obligations, ensuring providers can evidence compliant processes.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Data Protection",
              description:
                "Full GDPR compliance with data processing agreements, privacy impact assessments, and data subject rights management. We maintain a detailed record of processing activities and have appointed a Data Protection Officer to oversee our compliance programme.",
            },
            {
              icon: <Lock className="w-6 h-6" />,
              title: "Sector-Specific Controls",
              description:
                "Beyond generic compliance frameworks, we implement controls specific to the housing sector — including tenant data segregation, development-level access boundaries, and lease-term-level audit trails that reflect the operational reality of Shared Ownership management.",
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Review Our Security Architecture"
        description="Request our architecture pack for a detailed overview of Stairpay's security controls, AI governance framework, and compliance certifications. Available under NDA for prospective providers."
        ctaLabel="Request Architecture Pack"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
