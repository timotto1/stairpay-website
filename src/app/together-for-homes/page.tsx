import type { Metadata } from "next";
import { Calendar, MapPin, Footprints, Heart, Users, Pizza, Music } from "lucide-react";

import { GlobalNav } from "@/components/layout/GlobalNav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CTABlock } from "@/components/sections/CTABlock";
import { MetricCalloutGrid } from "@/components/sections/MetricCalloutGrid";
import { FAQList } from "@/components/sections/FAQList";
import { Button } from "@/components/ui/Button";
import { HeroVideo } from "./HeroVideo";
import { PartnerMarquee } from "./PartnerMarquee";
import { PizzaVideo } from "./PizzaVideo";

export const metadata: Metadata = {
  title: "Together for Homes 2026 — In Support of Crisis",
  description:
    "The second annual charity run from Stairpay. 16 September 2026, Battersea Park. Run with us in collaboration with Crisis to raise money for homelessness in the UK.",
  openGraph: {
    title: "Together for Homes 2026",
    description:
      "Join Stairpay on 16 September 2026 in Battersea Park, in collaboration with Crisis, raising money for homelessness in the UK.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

const detailItems = [
  { icon: <Calendar className="w-5 h-5" />, label: "When", value: "16 September 2026" },
  { icon: <MapPin className="w-5 h-5" />, label: "Where", value: "Battersea Park, London" },
  { icon: <Footprints className="w-5 h-5" />, label: "Distance", value: "5K" },
  { icon: <Heart className="w-5 h-5" />, label: "In Collaboration With", value: "Crisis" },
];

const recapMetrics = [
  { value: "500", label: "Runners on the start line" },
  { value: "35", label: "Companies represented" },
  { value: "£50,000", label: "Raised for Crisis" },
];

const newIn2026 = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "More runners.",
    description:
      "We're opening up more places this year. 500 turned out in 2025 — we want to beat that handily and put more pounds into Crisis's hands.",
  },
  {
    icon: <Pizza className="w-6 h-6" />,
    title: "More pizza.",
    description:
      "Last year's pizza queue went around the park. This year we're bringing a second oven so nobody has to choose between a personal best and a slice.",
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "More music.",
    description:
      "A live set on the start line, a DJ at the finish, and a longer post-race programme so the morning carries on properly.",
  },
];

const faqs = [
  {
    question: "Where do my ticket fees go?",
    answer:
      "Net proceeds — every pound after race-day costs — are donated to Crisis, our charity collaborator. Crisis runs year-round services helping people out of homelessness in the UK, including housing, education, and employment programmes. Last year we raised £50,000.",
  },
  {
    question: "Can my company enter a team?",
    answer:
      "Yes — and that's most of the field. Last year we had 500 runners from 35 companies on the start line. Pick the Corporate Pack and we'll handle team registration, kit, and a place in the company leaderboard.",
  },
  {
    question: "Can my organisation sponsor the run?",
    answer:
      "Yes — we have a small number of sponsorship slots for 2026. Email runs@stairpay.com for the 2026 sponsorship pack.",
  },
  {
    question: "Are tickets refundable?",
    answer:
      "Tickets are non-refundable, but you can transfer your place to another runner up to seven days before the event. If we have to cancel for any reason outside our control, your fee is rolled to the 2027 run.",
  },
  {
    question: "Who organised the 2025 run?",
    answer:
      "Stairpay started Together for Homes in 2025, in collaboration with Crisis. 500 runners from 35 companies took part and we raised £50,000.",
  },
];

const partners = [
  "Clarion",
  "SNG",
  "Settle",
  "Paradigm",
  "Midland Heart",
  "Sage Homes",
  "Places for People",
  "Southern Housing",
  "Platform",
  "Moat",
];

export default function TogetherForHomesPage() {
  return (
    <>
      <GlobalNav />

      {/* ─── 1. Hero ─── */}
      <HeroVideo videoSources={["/videos/together-for-homes-hero.mp4"]} />

      {/* Everything after hero scrolls over the fixed video */}
      <div className="relative z-10">
        {/* ─── 2. Run details strip ─── */}
        <section className="bg-[var(--color-bg-white)] border-b border-[var(--color-border-card)]">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--color-border-card)] border-x border-[var(--color-border-card)]">
              {detailItems.map((item) => (
                <div
                  key={item.label}
                  className="px-6 py-8 flex flex-col items-start gap-3"
                >
                  <span className="text-[var(--color-accent)]">{item.icon}</span>
                  <p className="text-eyebrow text-[var(--color-text-muted)]">
                    {item.label}
                  </p>
                  <p className="text-[16px] font-[400] text-[var(--color-text-dark)] leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── 3. About the run ─── */}
        <SectionWrapper theme="light" id="about">
          <Container narrow>
            <p className="text-eyebrow text-[var(--color-accent)] mb-4">
              ABOUT THE RUN
            </p>
            <h2 className="text-h2 text-[var(--color-text-dark)] mb-8">
              A run started by the sector, for the sector.
            </h2>
            <div className="space-y-5 text-body text-[var(--color-text-body)]">
              <p>
                Together for Homes started in 2025: Stairpay, our partners,
                and the people who build, finance, and run shared ownership
                showed up for one morning in Battersea Park to raise money
                for homelessness in the UK. 500 runners from 35 companies
                turned up, and we raised £50,000 for Crisis.
              </p>
              <p>
                The 2026 run is the second iteration, in collaboration with{" "}
                <strong className="text-[var(--color-text-dark)] font-[500]">Crisis</strong>{" "}
                — the national charity for people experiencing homelessness.
                Every pound raised goes to their year-round services helping
                people out of homelessness, from emergency support to
                long-term housing, education, and employment programmes.
              </p>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 4. 2025 Recap ─── */}
        <SectionWrapper theme="dark">
          <Container>
            <div className="text-center max-w-[680px] mx-auto mb-16">
              <p className="text-eyebrow text-[var(--color-accent-pale)] mb-4">
                2025 IN NUMBERS
              </p>
              <h2 className="text-h2 text-[var(--color-text-primary)]">
                What we did last year.
              </h2>
            </div>
          </Container>
          <MetricCalloutGrid metrics={recapMetrics} theme="dark" />
          <Container>
            <p className="text-center text-body text-[var(--color-text-secondary)] mt-16 max-w-[640px] mx-auto">
              Every pound raised in 2025 went directly to Crisis, funding
              year-round services that help people out of homelessness in the
              UK — from emergency support to long-term housing, education,
              and employment.
            </p>
          </Container>
        </SectionWrapper>

        {/* ─── 5. What's changed in 2026 (next to pizza video) ─── */}
        <SectionWrapper theme="darker">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-12 lg:gap-20 items-center">
              <PizzaVideo
                src="/videos/together-for-homes-pizza-2025.mp4"
                playbackRate={2}
              />
              <div>
                <p className="text-eyebrow text-[var(--color-accent-pale)] mb-4">
                  NEW THIS YEAR
                </p>
                <h2 className="text-h2 text-[var(--color-text-primary)] mb-10">
                  What&rsquo;s changed in 2026.
                </h2>
                <div className="space-y-4">
                  {newIn2026.map((item) => (
                    <div
                      key={item.title}
                      className="p-6 bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] rounded-[6px] flex gap-5"
                    >
                      <span className="inline-flex items-center justify-center w-12 h-12 shrink-0 rounded-[6px] bg-[var(--color-accent-light)] text-[var(--color-accent-pale)]">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="text-[18px] font-[500] tracking-[-0.3px] text-[var(--color-text-primary)] mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-[14px] font-[300] leading-relaxed text-[var(--color-text-secondary)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 6. Why Crisis ─── */}
        <SectionWrapper theme="light" id="crisis">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
              <div>
                <p className="text-eyebrow text-[var(--color-accent)] mb-4">
                  WHO WE&rsquo;RE RUNNING FOR
                </p>
                <h2 className="text-h2 text-[var(--color-text-dark)] mb-6">
                  Crisis is the reason this run exists.
                </h2>
                <p className="text-body text-[var(--color-text-body)]">
                  Crisis is the national charity for people experiencing
                  homelessness in the UK. Everything we raise on race day goes
                  to them — they are the beneficiary of Together for Homes,
                  full stop.
                </p>
              </div>
              <div className="space-y-5 text-body text-[var(--color-text-body)]">
                <p>
                  Crisis offers year-round, one-to-one support to people
                  trapped in homelessness — through their Skylight centres
                  across the UK they help with housing, mental and physical
                  health, learning, employment, and benefits.
                </p>
                <p>
                  They also campaign for the policy changes that would end
                  homelessness for good: more genuinely affordable homes, a
                  housing benefit system that actually covers rents, and a
                  homelessness response that meets people early instead of
                  when they&rsquo;re already on the street.
                </p>
                <p>
                  We work in housing every day. Crisis is who we run for
                  because the people they serve are the people the housing
                  system has failed. Our £50,000 in 2025 was a start. We want
                  to make 2026 considerably bigger.
                </p>
                <div className="pt-3">
                  <Button
                    variant="outline"
                    size="md"
                    href="https://www.crisis.org.uk"
                    arrow
                  >
                    Learn more about Crisis
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 7. Register Interest ─── */}
        <SectionWrapper theme="white" id="tickets">
          <Container>
            <div className="max-w-[720px] mx-auto text-center">
              <p className="text-eyebrow text-[var(--color-accent)] mb-4">
                REGISTER YOUR INTEREST
              </p>
              <h2 className="text-h2 text-[var(--color-text-dark)] mb-6">
                Tickets are coming.
              </h2>
              <p className="text-body text-[var(--color-text-body)] mb-10">
                Registration opens later this year. Drop us a line and
                we&rsquo;ll send you the ticket link the moment places go
                live, plus the corporate pack if you want to enter a team.
              </p>
              <div className="flex gap-3 flex-wrap justify-center">
                <Button
                  variant="solid-white"
                  size="lg"
                  href="mailto:runs@stairpay.com?subject=Together%20for%20Homes%202026%20-%20Register%20Interest&body=Please%20let%20me%20know%20when%20tickets%20go%20on%20sale%20for%20Together%20for%20Homes%202026."
                  arrow
                >
                  Register Interest
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="mailto:runs@stairpay.com?subject=Together%20for%20Homes%202026%20-%20Corporate%20Team"
                  arrow
                >
                  Enter a Company Team
                </Button>
              </div>
              <p className="text-[13px] font-[300] text-[var(--color-text-body-light)] mt-6">
                Last year sold out before race day. We&rsquo;ll email you
                first.
              </p>
            </div>
          </Container>
        </SectionWrapper>

        {/* ─── 7b. Partner marquee ─── */}
        <section className="bg-[var(--color-bg-primary)] blueprint-grid py-16 md:py-20 border-y border-[var(--color-border-dark)]">
          <Container>
            <p className="text-eyebrow text-[var(--color-accent-pale)] text-center mb-10">
              35 COMPANIES TURNED OUT IN 2025
            </p>
          </Container>
          <PartnerMarquee partners={partners} />
        </section>

        {/* ─── 8. FAQ ─── */}
        <SectionWrapper theme="light">
          <FAQList
            eyebrow="QUESTIONS"
            headline="Everything you'd want to know."
            items={faqs}
            theme="light"
          />
        </SectionWrapper>

        {/* ─── 9. Final CTA ─── */}
        <CTABlock
          eyebrow="JOIN US"
          headline="Run with us. Raise more for Crisis."
          description="Wednesday 16 September 2026, Battersea Park. Drop us your details and we'll let you know the moment tickets are live."
          primaryCta={{ label: "Register Interest", href: "#tickets" }}
          secondaryCta={{ label: "Sponsor the Run", href: "mailto:runs@stairpay.com?subject=Together%20for%20Homes%202026%20-%20Sponsorship" }}
          theme="dark"
        />

        <Footer />
      </div>
    </>
  );
}
