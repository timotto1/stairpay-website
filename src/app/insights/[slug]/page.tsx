import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CTABlock } from "@/components/sections/CTABlock";
import { Badge } from "@/components/ui/Badge";
import { mdxComponents } from "@/components/content/MDXComponents";
import { GatedContent } from "@/components/content/GatedContent";
import {
  getAllInsights,
  getInsightBySlug,
} from "@/lib/content/insights";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllInsights().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
      publishedTime: insight.date,
      images: insight.coverImage ? [{ url: insight.coverImage }] : undefined,
    },
  };
}

export default async function InsightPostPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) notFound();

  const body = (
    <MDXRemote source={insight.content} components={mdxComponents} />
  );

  return (
    <>
      <GlobalNav />

      {/* ─── Hero ─── */}
      <section
        data-theme="dark"
        className="relative bg-[var(--color-bg-primary)] blueprint-grid pt-[160px] pb-20 md:pb-24 overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[var(--color-accent)] opacity-[0.06] blur-[160px]" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-[820px]">
            <Badge>{insight.category}</Badge>
            <h1 className="text-h1 text-[var(--color-text-primary)] mt-6">
              {insight.title}
            </h1>
            <p className="text-subheading text-[var(--color-text-secondary)] mt-6">
              {insight.excerpt}
            </p>
            <p className="text-eyebrow text-[var(--color-text-muted)] mt-8">
              {insight.dateDisplay}
            </p>
          </div>

          {insight.coverImage && (
            <div className="mt-14 rounded-[8px] overflow-hidden border border-[var(--color-border-dark)]">
              <Image
                src={insight.coverImage}
                alt=""
                width={1600}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          )}
        </Container>
      </section>

      {/* ─── Body ─── */}
      <SectionWrapper theme="white">
        <Container>
          <article className="max-w-[760px] mx-auto">
            {insight.gated ? (
              <GatedContent slug={insight.slug}>{body}</GatedContent>
            ) : (
              body
            )}
          </article>
        </Container>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <CTABlock
        headline="Speak With Our Team"
        description="Book a strategic review to discuss how Stairpay can serve as the operational foundation for your shared ownership portfolio."
        primaryCta={{ label: "Book a Strategic Review", href: "/contact" }}
        theme="dark"
      />

      <Footer />
    </>
  );
}
