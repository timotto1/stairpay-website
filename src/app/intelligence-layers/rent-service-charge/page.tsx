import type { Metadata } from "next";
import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Rent & Service Charge — Stairpay",
};

export default function RentServiceChargePage() {
  return (
    <>
      <GlobalNav />
      <main className="min-h-[70vh] flex items-center justify-center pt-32 pb-24">
        <Container>
          <h1 className="text-display text-center text-[var(--color-text-dark)]">
            Rent &amp; Service Charge
          </h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}
