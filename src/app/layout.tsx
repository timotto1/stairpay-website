import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stairpay — The Operating System for Shared Ownership",
    template: "%s | Stairpay",
  },
  description:
    "Enterprise-grade infrastructure for UK housing associations. Intelligence across the entire Shared Ownership lifecycle.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
