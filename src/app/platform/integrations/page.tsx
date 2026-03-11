import type { Metadata } from "next";
import {
  Plug,
  ArrowRightLeft,
  Layers,
  Server,
  FolderSync,
  Cable,
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
  title: "Integrations — Stairpay",
  description:
    "An integration layer, not a replacement. Stairpay sits above your existing HMS, CRM, and finance platforms — connecting them through a structured data model without requiring you to replace any of them.",
  openGraph: {
    title: "Integrations — Stairpay",
    description:
      "Stairpay sits above your existing systems, connecting them through a unified data model. No rip and replace required.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function IntegrationsPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="INTEGRATIONS"
        headline="An Integration Layer, Not a Replacement"
        description="Housing associations have invested years and significant capital in their current systems. Stairpay does not ask you to abandon that investment. We sit above your existing HMS, CRM, finance platforms, and document management systems — connecting them through a unified Shared Ownership data model that none of them can provide individually."
        primaryCta={{ label: "Request Architecture Pack", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      />

      {/* ─── Compatibility ─── */}
      <SectionWrapper theme="light" id="compatibility">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <Badge>COMPATIBILITY</Badge>
            <h2 className="text-h2 text-[var(--color-text-dark)] mt-6">
              Works With Your Existing Systems
            </h2>
            <p className="text-body text-[var(--color-text-body)] mt-5">
              Stairpay is designed to integrate with the systems housing
              associations already use. We do not require a specific HMS, a
              particular CRM, or a preferred finance platform. Our integration
              layer connects to your existing technology estate and adds the
              Shared Ownership intelligence layer that sits above it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[960px] mx-auto">
            {[
              {
                icon: <Server className="w-6 h-6" />,
                title: "Housing Management Systems",
                description:
                  "Connect your existing HMS — whether legacy or modern. Stairpay reads tenancy records, property data, and homeowner information without requiring changes to your core system.",
              },
              {
                icon: <ArrowRightLeft className="w-6 h-6" />,
                title: "CRM Platforms",
                description:
                  "Sales enquiries, homeowner interactions, and case management data flow from your CRM into Stairpay's structured data model, enriching it with lifecycle context.",
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Finance Platforms",
                description:
                  "Rent charges, service charge apportionments, and transaction records integrate with Stairpay's financial control layer, ensuring calculations are grounded in accurate lease terms.",
              },
              {
                icon: <FolderSync className="w-6 h-6" />,
                title: "Document Management",
                description:
                  "Lease documents, valuation reports, and compliance records are ingested from your document management system and transformed into structured, queryable data.",
              },
              {
                icon: <Cable className="w-6 h-6" />,
                title: "Reporting & Analytics",
                description:
                  "Stairpay's structured data layer feeds directly into your existing reporting tools, providing the enriched Shared Ownership data that standard system exports cannot deliver.",
              },
              {
                icon: <Plug className="w-6 h-6" />,
                title: "Custom & Legacy Systems",
                description:
                  "For bespoke or legacy systems, our integration team works with your technology function to establish secure data connections using our flexible connector framework.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-bg-white)] border border-[var(--color-border-light)] p-8"
              >
                <div className="text-[var(--color-accent)] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-h3 text-[var(--color-text-dark)]">
                  {item.title}
                </h3>
                <p className="text-body text-[var(--color-text-body)] mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── How Integration Works ─── */}
      <SectionWrapper theme="dark" id="how-integration-works">
        <ApproachSection
          eyebrow="ARCHITECTURE"
          headline="How Integration Works"
          items={[
            {
              icon: <Plug className="w-6 h-6" />,
              title: "API-First Architecture",
              description:
                "Stairpay exposes a comprehensive API layer that enables bidirectional data flow between your existing systems and our platform. Every capability available in the user interface is also available through the API, enabling deep integration with your technology estate.",
            },
            {
              icon: <Cable className="w-6 h-6" />,
              title: "Pre-Built Data Connectors",
              description:
                "For common HMS, CRM, and finance platforms used across the housing sector, Stairpay provides pre-built connectors that reduce integration timelines from months to weeks. Configuration rather than custom development.",
            },
            {
              icon: <ArrowRightLeft className="w-6 h-6" />,
              title: "Real-Time Synchronisation",
              description:
                "Data flows between systems in real time rather than through periodic batch imports. When a record changes in your HMS, it is reflected in Stairpay within minutes. When Stairpay generates new intelligence, it is available to downstream systems immediately.",
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Structured Data Mapping",
              description:
                "Our integration layer does not simply move data between systems — it maps it into Stairpay's structured Shared Ownership data model. Raw records from your HMS become enriched entities with relationships, lease terms, and lifecycle context.",
            },
          ]}
        />
      </SectionWrapper>

      {/* ─── Your Systems, Connected ─── */}
      <SectionWrapper theme="light" id="your-systems">
        <ContentSection
          eyebrow="NO RIP AND REPLACE"
          headline="Your Systems, Connected"
          body={
            <>
              <p>
                The single largest barrier to technology adoption in housing is
                the requirement to replace existing systems. Multi-year migration
                programmes are expensive, disruptive, and carry significant
                delivery risk. Many providers delay platform investments
                indefinitely because the switching cost is too high.
              </p>
              <p className="mt-4">
                Stairpay eliminates this barrier. Our integration layer sits
                above your existing systems and adds value from day one. Your
                HMS continues to manage tenancy records. Your CRM continues to
                handle customer relationships. Your finance platform continues
                to process payments. Stairpay connects these systems and adds
                the Shared Ownership intelligence layer that none of them were
                designed to provide.
              </p>
              <p className="mt-4">
                Over time, as your organisation's confidence in the platform
                grows, you may choose to consolidate some systems. But that is
                an optional evolution, not a prerequisite. Stairpay delivers
                value whether you run one core system or a dozen.
              </p>
            </>
          }
          theme="light"
          reverse
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Request the Architecture Pack"
        description="Our architecture pack details the full integration model — API specifications, pre-built connectors, data mapping approach, and security controls. We will walk through how Stairpay connects to your specific technology estate."
        ctaLabel="Request Architecture Pack"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
