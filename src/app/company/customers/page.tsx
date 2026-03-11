"use client";

import { motion } from "framer-motion";
import { FileText, BarChart3 } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { LogoBar } from "@/components/sections/LogoBar";
import { MetricCalloutGrid } from "@/components/sections/MetricCalloutGrid";

export default function CustomersPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="CUSTOMERS"
        headline="Trusted by Leading Housing Associations"
        description="Stairpay works with some of the largest Shared Ownership providers in England. Our partnerships are long-term and outcome-focused — we measure success by operational impact, not software adoption."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        secondaryCta={{ label: "About Stairpay", href: "/company/about" }}
      />

      {/* ─── Logo Bar ─── */}
      <SectionWrapper theme="darker">
        <LogoBar />
      </SectionWrapper>

      {/* ─── Outcome-Focused Partnerships ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">OUR APPROACH</p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            Outcome-Focused Partnerships
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              We work with housing associations as a long-term infrastructure
              partner, not a software vendor. Every engagement begins with a
              deep understanding of the provider&apos;s operational reality —
              their portfolio composition, their team structure, their existing
              systems, and the specific challenges they face across the Shared
              Ownership lifecycle.
            </p>
            <p>
              Deployment is phased and outcome-driven. We start with the
              intelligence layer that addresses the most pressing operational
              need, demonstrate measurable impact, and expand from there. This
              approach ensures that every phase of the partnership delivers
              tangible value — and that internal stakeholders can see results
              before committing to the next stage.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Case Studies ─── */}
      <SectionWrapper theme="dark">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <p className="text-eyebrow text-[var(--color-accent-pale)] mb-4">CASE STUDIES</p>
            <h2 className="text-h2 text-[var(--color-text-primary)]">
              Measurable Outcomes at Scale
            </h2>
          </div>

          <motion.div
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Case Study 1 */}
            <motion.div
              variants={fadeUp}
              className="bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] p-10"
            >
              <div className="text-[var(--color-accent-pale)] mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-h3 text-[var(--color-text-primary)] mb-2">
                Metropolitan Thames Valley
              </h3>
              <p className="text-small text-[var(--color-accent-pale)] mb-6">
                Lease Intelligence Deployment
              </p>
              <p className="text-body text-[var(--color-text-secondary)] mb-8">
                Deployed Lease Intelligence across 4,200 Shared Ownership units,
                replacing manual lease reviews with structured, queryable data.
                Solicitor enquiry response times dropped from days to minutes.
                Compliance gaps that previously surfaced during annual audits are
                now identified continuously, months before they become
                liabilities.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--color-border-dark)]">
                <div>
                  <p className="text-h2 text-[var(--color-accent-pale)]">85%</p>
                  <p className="text-small text-[var(--color-text-muted)] mt-1">
                    Reduction in audit preparation time
                  </p>
                </div>
                <div>
                  <p className="text-h2 text-[var(--color-accent-pale)]">£340K</p>
                  <p className="text-small text-[var(--color-text-muted)] mt-1">
                    Annual savings
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              variants={fadeUp}
              className="bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] p-10"
            >
              <div className="text-[var(--color-accent-pale)] mb-5">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-h3 text-[var(--color-text-primary)] mb-2">
                Sovereign Housing
              </h3>
              <p className="text-small text-[var(--color-accent-pale)] mb-6">
                Aftersales &amp; Staircasing Intelligence
              </p>
              <p className="text-body text-[var(--color-text-secondary)] mb-8">
                Implemented Aftersales &amp; Staircasing Intelligence across the
                Shared Ownership portfolio. Structured workflows replaced manual
                enquiry handling, readiness scoring identified high-propensity
                homeowners before they made contact, and automated equity
                calculations eliminated weeks of manual spreadsheet work per
                quarter.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--color-border-dark)]">
                <div>
                  <p className="text-h2 text-[var(--color-accent-pale)]">340%</p>
                  <p className="text-small text-[var(--color-text-muted)] mt-1">
                    Increase in staircasing conversion
                  </p>
                </div>
                <div>
                  <p className="text-h2 text-[var(--color-accent-pale)]">92%</p>
                  <p className="text-small text-[var(--color-text-muted)] mt-1">
                    Capital forecast accuracy (£12.4M)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ─── Aggregate Metrics ─── */}
      <SectionWrapper theme="darker">
        <MetricCalloutGrid
          theme="dark"
          metrics={[
            { value: "4200+", label: "Units Under Management" },
            { value: "85%", label: "Audit Time Reduction" },
            { value: "340%", label: "Staircasing Conversion Uplift" },
            { value: "92%", label: "Forecast Accuracy" },
          ]}
        />
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Join the Providers Building on Stairpay"
        description="Book a strategic review with our team. We will walk through how Stairpay has delivered measurable outcomes for providers like yours — and where the highest-value opportunities lie in your portfolio."
        ctaLabel="Book a Strategic Review"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
