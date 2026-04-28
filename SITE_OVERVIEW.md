# Stairpay Website — Page Overview & Gaps

A reference for every route in `src/app/`, what it does today, and what's still missing.

---

## Pages

### `/` — Homepage
`src/app/page.tsx`

Landing page anchored by a fixed video hero with a 15-logo client ticker. Below the hero: `StatementBanner` (Stairpay powers ~⅓ of UK shared ownership homes), `ProductShowcase` (six Intelligence Layer cards with video previews), `VisionBanner`, `ResidentJourney` (lifecycle SVG), `PersonaExplorer` (interactive role selector), a testimonial carousel, and a final `CTABlock`.

**Notable:** scroll-over-video z-indexing, animated logo ticker, video assets in `/Videos/`.

---

### `/platform` — Platform Overview
`src/app/platform/page.tsx`

Architecture-focused page targeting technical and exec buyers. Explains the three-layer model (legacy HMS/CRM → Shared Ownership Data Infrastructure → Intelligence Layers) with an SVG diagram, a five-card layer grid, a "Why Platform, Not Point Solutions" narrative, and a metric callout strip (5 layers · 1 data model · 100% coverage · 0 silos).

---

### `/intelligence-layers/lease` — Data Intelligence (Cornerstone)
`src/app/intelligence-layers/lease/page.tsx`

The flagship product page, branded **Stairpay Cornerstone — Your Living System of Record**. Hero uses a `TypeWriter` animation over a grid canvas. Then five numbered split-scroll detail blocks (Clean messy data, Automate updates, Act on compliance, Automate workflows, Build audit trails), each with collapsible sub-panels. Closes with the `DocumentExtraction` showcase and a demo CTA.

**Notable:** `TypeWriter`, `CornerstonePulseCanvas`, `GridTraveller`, `CapabilityOverview`.

---

### `/intelligence-layers/aftersales` — Aftersales & Staircasing
`src/app/intelligence-layers/aftersales/page.tsx`

Fully built. Targets Heads of Aftersales at HAs with 1k–15k units. Hero with SVG dashboard → `LifecycleTabs` (Staircasing vs Resales, six stages each) → outcomes grid (6w avg case time, 62% fewer admin hours, 3.2× cases per FTE, 100% audit) → compliance section (CFG, Homes England, RICS) → HMS integration logos (Aareon QL, MRI, Civica Cx, NEC, Castleton) → leaseholder portal section → "Built for HAs your size" pillars → `FAQList` (8 Qs) → 6,000-home customer story → booking CTA.

---

### `/intelligence-layers/sales` — Sales Intelligence
`src/app/intelligence-layers/sales/page.tsx`

**Placeholder.** Title heading only inside a 70vh wrapper. Linked from homepage, platform, footer, and global nav.

---

### `/intelligence-layers/rent-service-charge` — Rent & Service Charge
`src/app/intelligence-layers/rent-service-charge/page.tsx`

**Placeholder.** Title heading only.

---

### `/intelligence-layers/portfolio` — Portfolio Intelligence (Audit)
`src/app/intelligence-layers/portfolio/page.tsx`

**Placeholder.** Title heading only ("Audit").

---

### `/company/about` — About
`src/app/company/about/page.tsx`

Company narrative page: hero → "Our Story" (3 paragraphs on sector inefficiency and founding) → "Our Vision" (dark section, infrastructure ethos) → "Our Values" (four icons: Sector-First Thinking, Infrastructure Over Increments, Governance by Design, Long-Term Partnership) → strategic-review CTA.

---

### `/for-providers/director-homeownership` — Persona Page
`src/app/for-providers/director-homeownership/page.tsx`

Role-specific landing page for Directors of Homeownership. "Your Reality" pain points → "Where Stairpay Fits" (three Intelligence Layer cards) → "Outcomes You Care About" (`OutcomesGrid` covering Cost, Risk, Scalability) → CTA. The only persona page currently routed.

---

### `/insights` — Insights Hub
`src/app/insights/page.tsx`

Content hub. Hero → featured insight (most recent, dark background) → "Latest Publications" two-column `InsightCard` grid → CTA. Pulls dynamically from MDX via `getAllInsights()`.

---

### `/insights/[slug]` — Insight Detail
`src/app/insights/[slug]/page.tsx`

Dynamic MDX article route. Dark hero (category badge, title, excerpt, date, optional cover) → article body via `MDXRemote` with `MDXComponents` → optional `GatedContent` wrapper for email-gated articles → CTA. Uses `generateStaticParams()`.

**Current articles** in `src/content/insights/`:
- `2026-01-lease-data-quality.mdx` — Intelligence Index, ungated
- `2026-02-ai-governance-regulated-housing.mdx` — AI Governance, ungated
- `2026-03-staircasing-completion-rates.mdx` — Intelligence Index, **gated**

---

### `/contact` — Contact
`src/app/contact/page.tsx` + `ContactPageContent.tsx`

Strategic-review request form. Left column: Full Name, Email, Organisation, Job Title, Role (6-option dropdown), Portfolio Size (4 bands), Message. HTML5 + regex validation, thank-you state on submit. Right column: "What to Expect" three-step list, contact details (currently placeholders), alt-contact note.

**Backend:** none. Submission is client-side only and sets a cookie.

---

### `/api/unlock` — Email Gate Endpoint
`src/app/api/unlock/route.ts`

POST `{ email, slug }`. Validates email, calls `recordUnlock()`, sets a 1-year `insights_unlocked=1` cookie. Storage is local JSON (flagged TODO for read-only runtimes).

---

## Navigation Coverage

**Global nav** (`GlobalNavClient.tsx`): Data Intelligence · Aftersales · Sales · Insights · Company. Quick links: About · Contact. Mobile overlay also surfaces the latest 3 insights + featured.

**Footer** (`Footer.tsx`):
- Platform → `/platform`
- Intelligence Layers → all five layer routes
- For Providers → `/for-providers/director-homeownership`
- Company → About, Insights, Contact
- Legal → `/privacy`, `/terms` ← **both unimplemented**

---

## Gaps & What's Missing

### Broken or empty links in current navigation
- `/intelligence-layers/sales` — placeholder, but linked from home, platform, nav, footer
- `/intelligence-layers/rent-service-charge` — placeholder, linked from home/footer
- `/intelligence-layers/portfolio` — placeholder, linked from home/footer
- `/privacy` — footer link, no page exists
- `/terms` — footer link, no page exists

### Missing pages a B2B SaaS site usually has
- **Pricing** — currently contact-gated only, no public pricing or framework
- **Security / Trust** — no SOC 2 / ISO / data-handling page (was deleted in the recent restructure)
- **Customers / Case Studies hub** — only one inline customer story exists (on `/aftersales`)
- **Careers** — `notes.md` references open positions; no `/careers` route
- **Additional persona pages** — Director of Homeownership exists; Head of Sales, Head of Aftersales, Finance Director, and CIO were deleted in the restructure and never replaced
- **Leadership / team page** — also deleted, not replaced

### Backend / integration TODOs
- Contact form has no backend (no email, Slack, or CRM webhook)
- `recordUnlock()` uses local JSON — won't persist on serverless / read-only filesystems
- No analytics (Plausible / Fathom / GA) wired in
- No CMS (insights are MDX in repo; fine for now, but not editor-friendly)
- No Calendly / scheduling integration on CTAs
- No sitemap.xml or robots.txt route

### Content / polish
- Contact details on `/contact` are placeholders (phone, address)
- HA logos on the homepage ticker are placeholders
- Customer testimonial on `/aftersales` is a placeholder
- Insights hub has only 3 articles — featured + 2-grid layout will look thin until that grows
- No 404 page customisation (`not-found.tsx`)
- No `loading.tsx` / `error.tsx` boundaries

### SEO / metadata
- Worth auditing per-page `metadata` exports for titles, descriptions, OG images
- No structured data (Article schema for insights, Organisation schema sitewide)

---

## Status Summary

| Status | Pages |
|---|---|
| **Built & polished** | `/`, `/platform`, `/intelligence-layers/lease`, `/intelligence-layers/aftersales`, `/company/about`, `/for-providers/director-homeownership`, `/insights`, `/insights/[slug]`, `/contact` |
| **Placeholder** | `/intelligence-layers/sales`, `/intelligence-layers/rent-service-charge`, `/intelligence-layers/portfolio` |
| **Linked but missing** | `/privacy`, `/terms` |
| **Likely needed** | `/pricing`, `/security`, `/careers`, `/customers`, additional persona pages |

**Top three things to fix before a public launch:** complete the three placeholder Intelligence Layer pages, add `/privacy` and `/terms`, and wire up a real backend for the contact form.
