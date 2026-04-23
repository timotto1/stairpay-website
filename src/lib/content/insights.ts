import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type {
  Insight,
  InsightFrontmatter,
  InsightWithContent,
} from "./types";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "insights");

// Filename format: YYYY-MM-slug.mdx
const FILENAME_SLUG_RE = /^\d{4}-\d{2}-(.+)\.mdx$/;

function deriveSlug(filename: string): string | null {
  const match = filename.match(FILENAME_SLUG_RE);
  return match ? match[1] : null;
}

function formatDateDisplay(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "long" });
}

function readInsightFile(filename: string): InsightWithContent | null {
  const slug = deriveSlug(filename);
  if (!slug) return null;

  const filePath = path.join(CONTENT_DIR, filename);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  const fm = data as InsightFrontmatter;

  return {
    ...fm,
    gated: fm.gated ?? false,
    slug,
    href: `/insights/${slug}`,
    dateDisplay: formatDateDisplay(fm.date),
    content,
  };
}

function listInsightFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"));
}

export function getAllInsights(): Insight[] {
  return listInsightFiles()
    .map(readInsightFile)
    .filter((x): x is InsightWithContent => x !== null)
    .map((i) => {
      // Strip the raw MDX source from the list view (caller only needs meta).
      const { content: _content, ...meta } = i;
      void _content;
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getInsightBySlug(
  slug: string,
): Promise<InsightWithContent | null> {
  const filename = listInsightFiles().find((f) => deriveSlug(f) === slug);
  if (!filename) return null;
  return readInsightFile(filename);
}

export function getLatestInsights(n: number): Insight[] {
  return getAllInsights().slice(0, n);
}
