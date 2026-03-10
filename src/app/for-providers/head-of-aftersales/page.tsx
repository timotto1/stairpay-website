import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Head of Aftersales" };

export default function Page() {
  return (
    <>
      <GlobalNav />
      <main className="pt-16 min-h-screen bg-[var(--color-bg-primary)]">
        <section className="py-24 md:py-32">
          <Container>
            <p className="text-eyebrow text-[var(--color-accent-pale)] mb-6">For Providers</p>
            <h1 className="text-h1 text-white">Head of Aftersales</h1>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
