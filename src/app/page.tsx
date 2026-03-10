import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <GlobalNav />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[var(--color-bg-primary)] pt-16 overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(113,20,226,0.18) 0%, transparent 70%)",
          }}
        />

        <Container className="relative z-10 py-24 md:py-32">
          <div className="max-w-[760px]">
            <p className="text-eyebrow text-[var(--color-accent-pale)] mb-6">
              Shared Ownership Infrastructure
            </p>
            <h1 className="text-display text-white mb-6">
              The Operating System for Shared Ownership
            </h1>
            <p className="text-subheading text-[var(--color-text-secondary)] font-[300] max-w-[580px] mb-10">
              Enterprise-grade infrastructure for UK housing associations.
              Intelligence across the entire lifecycle — from Sales to Resale.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg">
                Book a Strategic Review
              </Button>
              <Button href="/platform" variant="secondary" size="lg">
                Request a Platform Overview
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
