import { getLatestInsights } from "@/lib/content/insights";
import type { Insight } from "@/lib/content/types";
import { GlobalNavClient } from "./GlobalNavClient";

const togetherForHomesFeature: Insight = {
  title: "Together for Homes 2026 — register your interest",
  date: "2026-04-20",
  dateDisplay: "April 2026",
  category: "Together for Homes",
  excerpt:
    "Our second annual charity run returns on 16 September in Battersea Park, in collaboration with Crisis, the UK homelessness charity.",
  slug: "together-for-homes",
  href: "/together-for-homes",
  coverImage: "/images/together-for-homes-nav.png",
  gated: false,
};

export function GlobalNav() {
  // Feature the run in the right-hand "Latest from Stairpay" slot;
  // shift the two most recent insights into the middle column.
  const latestInsights = getLatestInsights(2);

  return (
    <GlobalNavClient
      latestInsights={latestInsights}
      featuredInsight={togetherForHomesFeature}
    />
  );
}
