import { getLatestInsights } from "@/lib/content/insights";
import { GlobalNavClient } from "./GlobalNavClient";

export function GlobalNav() {
  const latest = getLatestInsights(3);
  const featuredInsight = latest[0] ?? null;
  const latestInsights = latest.slice(1, 3);

  return (
    <GlobalNavClient
      latestInsights={latestInsights}
      featuredInsight={featuredInsight}
    />
  );
}
