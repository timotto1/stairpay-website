export interface InsightFrontmatter {
  title: string;
  date: string;          // ISO, e.g. "2026-03-15"
  category: string;      // e.g. "Intelligence Index"
  excerpt: string;
  coverImage?: string;   // e.g. "/insights/staircasing-2025.jpg"
  gated?: boolean;       // default false
}

export interface Insight extends InsightFrontmatter {
  slug: string;          // derived from filename
  href: string;          // "/insights/[slug]"
  dateDisplay: string;   // formatted e.g. "March 2026"
}

export interface InsightWithContent extends Insight {
  content: string;       // raw MDX source
}
