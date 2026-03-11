"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Users, Database, MapPin } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABlock } from "@/components/sections/CTABlock";

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    location: "London / Remote UK",
    icon: <Code2 className="w-5 h-5" />,
    description:
      "Build the core platform infrastructure — from lease ingestion pipelines and intelligence layer APIs to the provider-facing application. You will work across the full stack, shaping the architecture that housing associations depend on for their Shared Ownership operations.",
  },
  {
    title: "Product Designer",
    location: "London / Remote UK",
    icon: <Palette className="w-5 h-5" />,
    description:
      "Design the interfaces that make complex operational data accessible and actionable. You will work directly with housing association teams to understand their workflows, then translate that understanding into clear, structured experiences that reduce cognitive load and support confident decision-making.",
  },
  {
    title: "Customer Success Manager",
    location: "London / Remote UK",
    icon: <Users className="w-5 h-5" />,
    description:
      "Own the provider relationship from deployment through to operational transformation. You will work alongside homeownership directors, finance teams, and sales leads to ensure they realise measurable value from the platform — and that their evolving needs shape our roadmap.",
  },
  {
    title: "Data Engineer",
    location: "London / Remote UK",
    icon: <Database className="w-5 h-5" />,
    description:
      "Design and maintain the data infrastructure that underpins every intelligence layer. You will build ingestion pipelines, data quality frameworks, and the structured models that transform raw lease documents and operational data into queryable, auditable intelligence.",
  },
];

export default function CareersPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <HeroSection
        eyebrow="CAREERS"
        headline="Build the Infrastructure Shared Ownership Needs"
        description="Stairpay is a small team building sector-defining infrastructure for UK housing associations. We are solving real operational problems for organisations that manage thousands of homes — and we are looking for people who want their work to matter."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "About Stairpay", href: "/company/about" }}
      />

      {/* ─── Why Stairpay ─── */}
      <SectionWrapper theme="light">
        <Container narrow>
          <p className="text-eyebrow text-[var(--color-accent)] mb-4">WHY STAIRPAY</p>
          <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
            Meaningful Work. Real Impact.
          </h2>
          <div className="space-y-5 text-body text-[var(--color-text-body)]">
            <p>
              Shared Ownership helps hundreds of thousands of people own a home
              who otherwise could not. But the operational infrastructure behind
              the tenure has never kept pace with its growth. Housing
              associations manage increasingly complex portfolios through
              disconnected systems, manual processes, and stretched teams.
              Stairpay exists to change this — and we are building the team to
              do it.
            </p>
            <p>
              We are a small, focused team with outsized impact. Every person
              here shapes the product, the architecture, and the direction of
              the company. You will work directly with housing association
              leaders — understanding their challenges firsthand and building
              infrastructure that solves them. There is no distance between the
              work you do and the outcomes it creates.
            </p>
            <p>
              We value clarity of thought, depth of craft, and genuine care for
              the sector we serve. We are not interested in moving fast and
              breaking things — we are building infrastructure that regulated
              organisations will depend on for years. That requires rigour,
              patience, and the conviction that doing things properly is worth
              the effort.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── Open Positions ─── */}
      <SectionWrapper theme="dark">
        <Container>
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <p className="text-eyebrow text-[var(--color-accent-pale)] mb-4">OPEN POSITIONS</p>
            <h2 className="text-h2 text-[var(--color-text-primary)]">
              Current Opportunities
            </h2>
          </div>

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {openRoles.map((role) => (
              <motion.div
                key={role.title}
                variants={fadeUp}
                className="bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] p-8 transition-all duration-[250ms] hover:bg-[var(--color-bg-card-dark-hover)] hover:-translate-y-1"
              >
                <div className="text-[var(--color-accent-pale)] mb-4">
                  {role.icon}
                </div>
                <h3 className="text-h3 text-[var(--color-text-primary)]">
                  {role.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                  <p className="text-small text-[var(--color-text-muted)]">
                    {role.location}
                  </p>
                </div>
                <p className="text-body text-[var(--color-text-secondary)]">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Interested in Joining the Team"
        description="Send your CV and a brief note about what draws you to Stairpay. We read every application and respond to all candidates — because that is the kind of organisation we are building."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
        theme="dark"
      />

      <Footer />
    </>
  );
}
