# Stairpay B2B Website — Build Notes

## Build Status: COMPLETE
All 31 routes compile and generate as static pages. Production build passes cleanly.

## What was built

### Foundation (pre-existing)
- Design tokens in globals.css (Tailwind 4 @theme)
- GlobalNav with animated full-screen overlay
- Footer with full sitemap
- Button + Badge UI components
- Container + SectionWrapper layout components
- Animation library (Framer Motion variants)

### Section Components (16 new files)
- `HeroSection` — full-viewport hero with radial glow, staggered animations, split layout support
- `CTABlock` — centred conversion block with scroll-triggered fade-up
- `MetricCalloutGrid` — animated count-up metrics (parses £, %, x, + suffixes)
- `LogoBar` — placeholder housing association logos with staggered fade-in
- `PersonaTileGrid` — persona cards with icon, pain, outcome, hover effects
- `IntelligenceLayerCard` — dark card with accent left border, hover state
- `LifecycleVisual` — animated lifecycle diagram (6 stages, connecting lines)
- `ApproachSection` — 2-column grid of approach items with icons
- `OutcomesGrid` — 3-column enterprise outcomes (cost/risk/scale)
- `ContentSection` — 2-column text + image with reverse support
- `TeamGrid` — team member cards with initials avatars
- `InsightCard` — article cards with category, date, excerpt
- `Card` — reusable card component (dark/light, hoverable, accent border)
- `Input`, `Select`, `Textarea` — dark-themed form components

### Pages (29 routes with real content)

**Homepage** — 8 sections: hero, logo bar, lifecycle, intelligence layers grid, persona tiles, metrics, platform positioning, CTA

**Platform (5 pages)**
- Overview — layered architecture, intelligence layer cards, platform vs point solutions
- Lifecycle Model — animated lifecycle visual, 6 stage walkthroughs
- Data Infrastructure — data flow visual, structured data approach
- AI Governance — governance shield, 5-principle framework
- Integrations — compatibility grid, API-first architecture

**Intelligence Layers (5 pages)**
- Lease Intelligence — clause extraction, compliance scoring
- Sales Intelligence — unified pipeline, affordability screening
- Aftersales & Staircasing — readiness scoring, capital forecasting
- Rent & Service Charge — automated rent-setting, reconciliation
- Portfolio Intelligence — board-level dashboards, cross-layer reporting

**Persona Pages (5 pages)**
- Director of Homeownership, Head of Sales, Head of Aftersales, Finance Director, CIO
- Each follows template: hero, "your reality", intelligence layers, outcomes, role-specific CTA

**Insights (6 pages)**
- Hub page with 8 article cards across 5 categories
- Intelligence Index — 10-year sector data initiative with methodology
- AI in Housing — full long-form article (5 sections of consultancy prose)
- Regulatory Briefings — 3 briefing cards
- Sector Reports — 3 report cards
- Roundtable Findings — 3 roundtable summaries

**Company (5 pages)**
- About — mission, vision, 4 values
- Leadership — 4 team members with bios
- Customers — logo bar, 2 case studies with metrics
- Security & Compliance — security posture, data handling, AI governance, compliance
- Careers — 4 open positions as cards

**Contact** — full form (name, email, org, title, role, portfolio size, message) with thank-you state

### SVG Images (10 files in public/images/)
- architecture-hero.svg, lifecycle-diagram.svg, platform-layers.svg
- data-flow.svg, lease-extraction.svg, sales-pipeline.svg
- staircasing-dashboard.svg, rent-dashboard.svg, portfolio-overview.svg
- governance-shield.svg

## Design system compliance
- All colours via CSS custom properties
- Typography: Poppins, weight 300 body / 500 headings / 600 display max
- 0px border radius on all buttons and CTAs
- SVG line-stroke icons (Lucide, 1.5px)
- British English throughout
- Banned terms enforced: no "features", "demo", "blog", "AI-powered" headlines
- Scroll-triggered Framer Motion animations on all sections

## Placeholder items (for future replacement)
- Contact details (email, phone, address) are placeholder values
- Team member surnames marked as [Surname]
- Case study organisations are illustrative
- Housing association logos are text placeholders (no actual logo files)
- Form submission shows client-side thank-you only (no backend)
- No CMS integration yet (Sanity)
- No analytics (Plausible/Fathom)
- No booking integration (HubSpot/Calendly)
