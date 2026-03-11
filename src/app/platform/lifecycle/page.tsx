import type { Metadata } from "next";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { ContentSection } from "@/components/sections/ContentSection";
import { LifecycleVisual } from "@/components/sections/LifecycleVisual";

export const metadata: Metadata = {
  title: "Lifecycle Model — Stairpay",
  description:
    "Intelligence across every stage of Shared Ownership. From first enquiry through to resale, Stairpay delivers structured operational intelligence at every transition point.",
  openGraph: {
    title: "Lifecycle Model — Stairpay",
    description:
      "Intelligence across every stage of Shared Ownership — Sales, Move-in, Homeownership, Staircasing, Rent & Service Charge, and Resale.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function LifecyclePage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="LIFECYCLE MODEL"
        headline="Intelligence Across Every Stage of Shared Ownership"
        description="Shared Ownership is not a single transaction — it is a decades-long relationship between provider and homeowner. Stairpay spans the full arc, from first sales enquiry through to eventual resale, delivering structured intelligence at every transition point where operational complexity concentrates."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "Explore the Platform", href: "/platform" }}
      />

      {/* ─── Lifecycle Visual ─── */}
      <SectionWrapper theme="dark" id="lifecycle-visual">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <Badge>THE COMPLETE LIFECYCLE</Badge>
            <h2 className="text-h2 text-[var(--color-text-primary)] mt-6">
              Six Stages. One Connected Platform.
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-5">
              Most providers manage these stages through disconnected systems —
              a CRM for sales, spreadsheets for staircasing, a separate HMS for
              rent collection, and manual processes filling every gap between
              them. Stairpay connects the entire lifecycle through a single data
              model, so intelligence flows between stages rather than getting
              trapped within them.
            </p>
          </div>
          <LifecycleVisual />
        </Container>
      </SectionWrapper>

      {/* ─── Stage: Sales ─── */}
      <SectionWrapper theme="light" id="sales">
        <ContentSection
          eyebrow="STAGE 1"
          headline="Sales"
          body={
            <>
              <p>
                The lifecycle begins with sales — marketing a property, managing
                enquiries, conducting viewings, and progressing qualified buyers
                through to reservation and exchange. For most providers, this
                process is managed through disconnected spreadsheets with no
                stage visibility, no conversion tracking, and no structured
                handover to post-sale teams.
              </p>
              <p className="mt-4">
                Stairpay replaces this with a governed sales pipeline. Every
                enquiry is tracked through a defined stage model — New,
                Contacted, Qualified, Viewing, Reserved — with full audit
                history at each transition. Conversion rates become visible.
                Pipeline forecasting becomes possible. And when a sale completes,
                the data flows automatically into the next stage rather than
                being re-keyed into a different system.
              </p>
            </>
          }
          image="/images/lifecycle-sales.svg"
          imageAlt="Sales stage workflow showing structured enquiry progression"
          theme="light"
        />
      </SectionWrapper>

      {/* ─── Stage: Move-in ─── */}
      <SectionWrapper theme="dark" id="move-in">
        <ContentSection
          eyebrow="STAGE 2"
          headline="Move-in"
          body={
            <>
              <p>
                The transition from sale to occupancy is where critical lease
                terms are established and the long-term homeowner relationship
                begins. Lease start dates, initial share percentages, rent
                commencement dates, and service charge obligations are all set
                during this period — yet they are frequently captured in
                unstructured formats that downstream teams cannot easily access.
              </p>
              <p className="mt-4">
                Stairpay captures these terms at the point of origin and
                structures them for every system that will need them later. Rent
                calculations inherit the correct lease terms from day one.
                Staircasing eligibility is established automatically. The
                homeowner record is complete before the first key is handed over.
              </p>
            </>
          }
          image="/images/lifecycle-movein.svg"
          imageAlt="Move-in stage showing lease term capture and data structuring"
          reverse
        />
      </SectionWrapper>

      {/* ─── Stage: Homeownership ─── */}
      <SectionWrapper theme="light" id="homeownership">
        <ContentSection
          eyebrow="STAGE 3"
          headline="Homeownership"
          body={
            <>
              <p>
                Once a homeowner is in situ, the relationship enters its longest
                phase. During this period, providers must manage ongoing lease
                compliance, respond to homeowner enquiries, track property
                condition obligations, and maintain accurate records across what
                may be thousands of individual leases — each with its own terms,
                review dates, and compliance requirements.
              </p>
              <p className="mt-4">
                Stairpay provides structured visibility across the entire
                homeownership portfolio. Lease obligations are surfaced
                proactively rather than reactively. Compliance deadlines are
                tracked systematically. And every interaction with a homeowner is
                recorded against a complete case history, giving teams the
                context they need without searching through emails and filing
                cabinets.
              </p>
            </>
          }
          image="/images/lifecycle-homeownership.svg"
          imageAlt="Homeownership stage showing portfolio-wide lease compliance visibility"
          theme="light"
        />
      </SectionWrapper>

      {/* ─── Stage: Staircasing ─── */}
      <SectionWrapper theme="dark" id="staircasing">
        <ContentSection
          eyebrow="STAGE 4"
          headline="Staircasing"
          body={
            <>
              <p>
                Staircasing — the process by which a homeowner purchases
                additional shares in their property — represents one of the most
                significant capital events in Shared Ownership. Yet most
                providers manage it reactively: waiting for homeowners to make
                contact, then processing each transaction as an isolated event
                with no portfolio-level visibility.
              </p>
              <p className="mt-4">
                Stairpay transforms staircasing from a reactive process into a
                strategic capability. Readiness scoring identifies homeowners
                with the highest propensity to staircase. Structured workflows
                manage each transaction from initial enquiry through to
                completion. And capital forecasting aggregates expected
                staircasing activity across the portfolio, giving finance teams
                the forward visibility they need for treasury planning.
              </p>
            </>
          }
          image="/images/lifecycle-staircasing.svg"
          imageAlt="Staircasing stage showing readiness scoring and capital forecasting"
          reverse
        />
      </SectionWrapper>

      {/* ─── Stage: Rent & Service Charge ─── */}
      <SectionWrapper theme="light" id="rent-sc">
        <ContentSection
          eyebrow="STAGE 5"
          headline="Rent & Service Charge"
          body={
            <>
              <p>
                Rent-setting and service charge management in Shared Ownership
                are governed by individual lease terms — making them
                fundamentally more complex than standard social housing rent
                collection. Each property may have a different rent review date,
                a different escalation mechanism, and a different apportionment
                basis for service charges. Across a portfolio of hundreds or
                thousands of units, managing this manually introduces
                significant compliance risk.
              </p>
              <p className="mt-4">
                Stairpay automates rent-setting calculations in accordance with
                individual lease terms, tracks service charge apportionments with
                full transparency, and maintains a complete audit trail for every
                charge raised. The financial control layer draws directly from
                the lease data captured at move-in, ensuring that calculations
                are always grounded in the correct contractual terms.
              </p>
            </>
          }
          image="/images/lifecycle-rent-sc.svg"
          imageAlt="Rent and service charge stage showing automated lease-compliant calculations"
          theme="light"
        />
      </SectionWrapper>

      {/* ─── Stage: Resale ─── */}
      <SectionWrapper theme="dark" id="resale">
        <ContentSection
          eyebrow="STAGE 6"
          headline="Resale"
          body={
            <>
              <p>
                When a shared owner decides to sell, the lifecycle comes full
                circle. The provider must manage the nomination process, verify
                lease compliance, coordinate valuations, and ensure the property
                is marketed and sold in accordance with the terms of the lease.
                This process frequently surfaces historical data gaps — missing
                lease terms, incomplete compliance records, and disconnected
                transaction histories.
              </p>
              <p className="mt-4">
                Because Stairpay has maintained a complete, structured record
                from the original sale onward, resale teams have immediate access
                to the full property history. Lease terms are already extracted
                and verified. Compliance status is current. Transaction history
                is complete. The resale process becomes a continuation of the
                same data journey rather than a fresh investigation into
                fragmented records.
              </p>
            </>
          }
          image="/images/lifecycle-resale.svg"
          imageAlt="Resale stage showing complete property history and nomination management"
          reverse
        />
      </SectionWrapper>

      {/* ─── The Data Foundation ─── */}
      <SectionWrapper theme="darker" id="data-foundation">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-12">
            <Badge>DATA FOUNDATION</Badge>
            <h2 className="text-h2 text-[var(--color-text-primary)] mt-6">
              The Data Foundation
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] mt-5">
              What makes this lifecycle model possible is not the individual
              stage capabilities — it is the shared data model that connects
              them. Every entity in Shared Ownership (lease, unit, homeowner,
              transaction, charge) exists once in Stairpay and is accessible to
              every stage that needs it.
            </p>
            <p className="text-body text-[var(--color-text-secondary)] mt-4">
              When a lease is ingested during move-in, its terms are immediately
              available to the rent calculation engine, the staircasing readiness
              model, and the portfolio analytics layer. When a staircasing
              transaction completes, the updated share percentage flows
              automatically into rent calculations and resale eligibility. No
              re-keying. No reconciliation. No data silos.
            </p>
            <p className="text-body text-[var(--color-text-secondary)] mt-4">
              This is the infrastructure that makes lifecycle intelligence
              possible — and it is the reason Stairpay is a platform, not a
              collection of modules.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="See the Full Lifecycle in Context"
        description="Book a strategic review with our team. We will walk through how Stairpay's lifecycle model maps to your organisation's Shared Ownership operations and identify where the greatest operational value lies."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
