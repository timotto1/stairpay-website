"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle } from "lucide-react";

interface ContactPanelProps {
  open: boolean;
  onClose: () => void;
}

export function ContactPanel({ open, onClose }: ContactPanelProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset after exit animation
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="contact-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-[110] bg-[rgba(0,0,0,0.5)]"
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            key="contact-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ x: "100%", transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } }}
            className="fixed top-0 right-0 bottom-0 z-[120] w-full sm:w-[540px] bg-white overflow-y-auto"
          >
            <div className="px-8 sm:px-12 py-10">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="flex items-center justify-center w-10 h-10 -ml-2 mb-8 text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] transition-colors duration-150 cursor-pointer"
                aria-label="Close panel"
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              {/* Header row */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-[11px] font-[500] tracking-[1.5px] uppercase text-[var(--color-text-muted)]">
                  Contact / Strategic Review
                </p>
                <Link
                  href="/company/about"
                  onClick={handleClose}
                  className="flex items-center gap-1 text-[11px] font-[500] tracking-[1.5px] uppercase text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-150"
                >
                  About Stairpay
                  <ArrowUpRight size={12} strokeWidth={2} />
                </Link>
              </div>

              {/* Heading */}
              <h2 className="text-[28px] sm:text-[32px] font-[400] leading-[1.15] tracking-[-0.5px] text-[var(--color-text-dark)] mb-10">
                Book a strategic review with the Stairpay team
              </h2>

              {submitted ? (
                /* Success state */
                <div className="py-16 text-center">
                  <CheckCircle size={48} strokeWidth={1} className="mx-auto mb-6 text-[var(--color-accent)]" />
                  <p className="text-[20px] font-[400] text-[var(--color-text-dark)] mb-3">
                    Thank you for your request
                  </p>
                  <p className="text-[14px] font-[300] text-[var(--color-text-muted)] max-w-[320px] mx-auto">
                    A member of the Stairpay team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="cp-first-name" className="sr-only">First Name</label>
                    <input
                      id="cp-first-name"
                      name="firstName"
                      type="text"
                      required
                      placeholder="First Name *"
                      className="w-full bg-transparent border-0 border-b border-[var(--color-border-light)] text-[15px] font-[300] text-[var(--color-text-dark)] placeholder:text-[var(--color-text-muted)] py-3 px-0 focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <label htmlFor="cp-last-name" className="sr-only">Last Name</label>
                    <input
                      id="cp-last-name"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Last Name *"
                      className="w-full bg-transparent border-0 border-b border-[var(--color-border-light)] text-[15px] font-[300] text-[var(--color-text-dark)] placeholder:text-[var(--color-text-muted)] py-3 px-0 focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <label htmlFor="cp-email" className="sr-only">Email Address</label>
                    <input
                      id="cp-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email Address *"
                      className="w-full bg-transparent border-0 border-b border-[var(--color-border-light)] text-[15px] font-[300] text-[var(--color-text-dark)] placeholder:text-[var(--color-text-muted)] py-3 px-0 focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <label htmlFor="cp-organisation" className="sr-only">Organisation</label>
                    <input
                      id="cp-organisation"
                      name="organisation"
                      type="text"
                      required
                      placeholder="Organisation *"
                      className="w-full bg-transparent border-0 border-b border-[var(--color-border-light)] text-[15px] font-[300] text-[var(--color-text-dark)] placeholder:text-[var(--color-text-muted)] py-3 px-0 focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <label htmlFor="cp-job-title" className="sr-only">Job Title</label>
                    <input
                      id="cp-job-title"
                      name="jobTitle"
                      type="text"
                      placeholder="Job Title"
                      className="w-full bg-transparent border-0 border-b border-[var(--color-border-light)] text-[15px] font-[300] text-[var(--color-text-dark)] placeholder:text-[var(--color-text-muted)] py-3 px-0 focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <label htmlFor="cp-notes" className="sr-only">Notes</label>
                    <textarea
                      id="cp-notes"
                      name="notes"
                      rows={4}
                      placeholder="Notes"
                      className="w-full bg-transparent border border-[var(--color-border-light)] text-[15px] font-[300] text-[var(--color-text-dark)] placeholder:text-[var(--color-text-muted)] py-3 px-4 focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-150 resize-none rounded-[4px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center justify-center font-[500] tracking-wide uppercase text-[13px] px-8 py-3 bg-[var(--color-accent-darkest)] text-white border border-[var(--color-accent-darkest)] hover:bg-[var(--color-text-dark)] hover:border-[var(--color-text-dark)] transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {submitting ? "Submitting…" : "Submit Request"}
                  </button>

                  <p className="text-[12px] font-[300] text-[var(--color-text-muted)] leading-relaxed">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" className="underline hover:text-[var(--color-text-dark)] transition-colors duration-150">
                      privacy policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
