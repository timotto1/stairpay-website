"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { HeroSection } from "@/components/sections/HeroSection";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const roleOptions = [
  { value: "director-homeownership", label: "Director of Homeownership" },
  { value: "head-of-sales", label: "Head of Sales" },
  { value: "head-of-aftersales", label: "Head of Aftersales" },
  { value: "finance-director", label: "Finance Director" },
  { value: "cio-cto", label: "CIO/CTO" },
  { value: "other", label: "Other" },
];

const portfolioOptions = [
  { value: "under-1000", label: "Under 1,000 units" },
  { value: "1000-5000", label: "1,000\u20135,000 units" },
  { value: "5000-15000", label: "5,000\u201315,000 units" },
  { value: "15000-plus", label: "15,000+ units" },
];

const expectations = [
  "A 30-minute strategic review call",
  "Tailored to your role and operational priorities",
  "No obligation, no sales pressure",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Client-side only — no backend integration
    setSubmitted(true);
  }

  return (
    <>
      <GlobalNav />

      <HeroSection
        eyebrow="CONTACT"
        headline="Book a Strategic Review"
        description="Speak with our team about how Stairpay can serve as the operational foundation for your shared ownership portfolio."
        primaryCta={{ label: "hello@stairpay.co.uk", href: "mailto:hello@stairpay.co.uk" }}
      />

      {/* ─── Form Section ─── */}
      <SectionWrapper theme="darker">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20">
            {/* ── LEFT: Form ── */}
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {submitted ? (
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <CheckCircle
                    size={48}
                    strokeWidth={1.5}
                    className="text-[var(--color-accent)] mb-6"
                  />
                  <h2 className="text-h2 text-[var(--color-text-primary)]">
                    Thank you
                  </h2>
                  <p className="text-body text-[var(--color-text-secondary)] mt-4 max-w-[440px]">
                    Your request has been received. A member of our team will be
                    in touch within one working day to arrange your strategic
                    review.
                  </p>
                </motion.div>
              ) : (
                <>
                  <motion.div variants={fadeUp}>
                    <Badge>GET IN TOUCH</Badge>
                    <h2 className="text-h2 text-[var(--color-text-primary)] mt-5">
                      Request a Strategic Review
                    </h2>
                    <p className="text-body text-[var(--color-text-secondary)] mt-4 mb-10">
                      Complete the form below and a member of our team will be
                      in touch to arrange a call.
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={fadeUp}>
                      <Input
                        label="Full Name"
                        name="fullName"
                        placeholder="Your full name"
                        required
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="you@organisation.co.uk"
                        required
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <Input
                        label="Organisation"
                        name="organisation"
                        placeholder="Your housing association or organisation"
                        required
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <Input
                        label="Job Title"
                        name="jobTitle"
                        placeholder="Your role"
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <Select
                        label="Role"
                        name="role"
                        options={roleOptions}
                        placeholder="Select your role"
                        defaultValue=""
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <Select
                        label="Portfolio Size"
                        name="portfolioSize"
                        options={portfolioOptions}
                        placeholder="Select portfolio size"
                        defaultValue=""
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <Textarea
                        label="Message"
                        name="message"
                        placeholder="Tell us about your operational priorities..."
                        rows={5}
                      />
                    </motion.div>

                    <motion.div variants={fadeUp} className="pt-2">
                      <Button type="submit" variant="solid-white" size="lg">
                        Request a Strategic Review
                      </Button>
                    </motion.div>
                  </form>
                </>
              )}
            </motion.div>

            {/* ── RIGHT: Contact Info ── */}
            <motion.div
              variants={stagger(0.1, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:pt-2"
            >
              {/* What to Expect */}
              <motion.div variants={fadeUp}>
                <h3 className="text-h3 text-[var(--color-text-primary)] mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4 mb-12">
                  {expectations.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[var(--color-accent)] text-white text-[13px] font-[500] mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-body text-[var(--color-text-secondary)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Details */}
              <motion.div variants={fadeUp}>
                <div className="h-px bg-[var(--color-border-dark)] mb-10" />
                <h3 className="text-h3 text-[var(--color-text-primary)] mb-6">
                  Contact Details
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail
                      size={18}
                      strokeWidth={1.5}
                      className="text-[var(--color-accent)] mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="text-small text-[var(--color-text-muted)] mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:hello@stairpay.co.uk"
                        className="text-body text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[150ms]"
                      >
                        hello@stairpay.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone
                      size={18}
                      strokeWidth={1.5}
                      className="text-[var(--color-accent)] mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="text-small text-[var(--color-text-muted)] mb-1">
                        Phone
                      </p>
                      <p className="text-body text-[var(--color-text-secondary)]">
                        +44 (0)20 XXXX XXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      strokeWidth={1.5}
                      className="text-[var(--color-accent)] mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="text-small text-[var(--color-text-muted)] mb-1">
                        Address
                      </p>
                      <p className="text-body text-[var(--color-text-secondary)]">
                        London, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Alternative Contact */}
              <motion.div variants={fadeUp}>
                <div className="h-px bg-[var(--color-border-dark)] mt-10 mb-8" />
                <p className="text-small text-[var(--color-text-muted)]">
                  Alternatively, email us directly at{" "}
                  <a
                    href="mailto:hello@stairpay.co.uk"
                    className="text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors duration-[150ms]"
                  >
                    hello@stairpay.co.uk
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      <Footer />
    </>
  );
}
