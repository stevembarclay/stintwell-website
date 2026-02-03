# Stintwell Next.js Migration — Implementation Plan

Status: Draft for approval
Source of truth: `STRATEGIC_BRIEF.md` (generated 2026-02-02)

---

## 1. Next.js Project Structure

### 1.1 Directory Layout
```
app/
  (marketing)/
    layout.tsx
    page.tsx                # Homepage
    sbos/page.tsx            # SBOS product page
    privacy/page.tsx         # Privacy policy
    terms/page.tsx           # Terms of service
    (blocked)/
      about/page.tsx         # Placeholder or omitted (blocked)
      property-management/page.tsx  # Placeholder or omitted (blocked)
components/
  analytics/
  layout/
  marketing/
  primitives/
  sections/
content/
  sbos.ts                    # Structured content for SBOS page
  legal/
    privacy.md
    terms.md
lib/
  analytics.ts
  constants.ts
  classnames.ts
public/
  images/
  CNAME
styles/
  globals.css
  tokens.css

next.config.ts
postcss.config.js
tailwind.config.ts
package.json
```

Notes:
- `app/(marketing)/layout.tsx` provides header/footer for marketing pages.
- Content that will be reused or iterated on should be moved into `content/` and imported by pages.
- Legal text can live in markdown and be rendered via a simple MD renderer or as TS string constants if we want to avoid a parser.

### 1.2 Static Export + GitHub Pages
- `next.config.ts`
  - `output: 'export'`
  - `images: { unoptimized: true }` (required for static export)
  - `trailingSlash: true` (recommended for GitHub Pages to avoid 404s on folder routes)
  - `basePath` only if deploying to a repo subpath (skip if deploying to custom domain root)
- Ensure `public/CNAME` is included and preserved.
- Static export output expected in `out/`.

### 1.3 Config + Tooling
- Tailwind CSS with `globals.css` + `tokens.css` (CSS variables for design tokens).
- `app/layout.tsx` (root) for global providers: fonts, analytics scripts, global metadata.
- Inter via `next/font/google` (self-hosted by Next).

---

## 2. Design System Specification (from STRATEGIC_BRIEF.md §3)

### 2.1 Tokens
- **Color tokens** (CSS variables + Tailwind theme mapping):
  - `--bg: #FAFAF8`
  - `--bg-alt: #F0EDE6`
  - `--text: #111111`
  - `--text-muted: #6B6B6B`
  - `--accent: #A8882F`
  - `--accent-hover: #8F7320`
  - `--anchor: #111111`
  - `--anchor-text: #FAFAF8`
  - `--anchor-accent: #C9A84C`
  - `--muted: #E8E2D8`
  - `--success: #2A7B3F`
  - `--error: #DC2626`

### 2.2 Typography
- **Font:** Inter only
- **Weights:** 400 / 500 / 600 / 700 / 800
- **Fluid scale (clamp)** (example):
  - `display`: `clamp(2.5rem, 4.5vw, 4.5rem)`
  - `h1`: `clamp(2rem, 3.2vw, 3.5rem)`
  - `h2`: `clamp(1.75rem, 2.4vw, 2.75rem)`
  - `h3`: `clamp(1.25rem, 1.6vw, 1.75rem)`
  - `body`: `clamp(1rem, 1.1vw, 1.125rem)`
- **Line height:** generous (1.2–1.4 for headings, 1.6–1.8 for body)
- **Letter spacing:** slight tracking for labels and pill text

### 2.3 Spacing & Layout
- Spacing scale based on `4px` units (e.g., 4, 8, 12, 16, 24, 32, 48, 64, 96, 128).
- Section padding: `py-20 md:py-28` default.
- Max width: `max-w-6xl` content; `max-w-5xl` for narrative text sections.

### 2.4 Motion
- Scroll reveal: fade-in + `translateY(8–12px)` with `ease-out` and 300–500ms duration.
- Hover transitions: 200–300ms.
- Subtle gold shimmer on primary CTA button (CSS gradient animation).

### 2.5 Component Patterns
- **Anchors:** Black hero + black CTA block + black footer.
- **Alternating sections:** White / Cream / White / Black.
- **Cards:** Warm muted surface with soft border and slight shadow on hover.
- **Buttons:** Gold primary with darker hover, outlined secondary (charcoal + gold stroke).

---

## 3. Component Library (Shared)

### Primitives
- `Button` (primary, secondary, ghost)
- `IconButton`
- `Badge` / `Pill`
- `Card` (base surface with hover + focus states)
- `Section` (wraps spacing + background)
- `SectionHeader` (title, eyebrow, description)
- `Divider`

### Marketing
- `Navbar` (Logo | Products | About | CTA)
- `Footer` (logo, legal links, copyright)
- `Hero` (headline + subhead + CTA + optional supporting text)
- `CapabilityPillars` + `PillarCard`
- `FeaturedProduct` (SBOS spotlight card)
- `CTASection` (dark anchor block)
- `FeatureGrid`
- `ModuleGrid`
- `MethodologySteps`
- `UseCaseCards`

### Interactions
- `ScrollReveal`
- `Tabs` (for SBOS methodology / modules if needed)
- `SignupForm` (Web3Forms integration)

### Analytics
- `AnalyticsProvider`
- `GA4` script insertion
- `Mouseflow` script insertion
- `useCTAEvents`
- `useScrollDepth`

---

## 4. Page-by-Page Specification

### 4.1 Homepage (`/`)
**Goal:** Stintwell brand positioning + capability breadth + SBOS spotlight.

Sections:
1. Hero (dark anchor, placeholder tagline)
2. Philosophy (single concise section)
3. Capability Pillars (3 cards)
4. Featured Product: SBOS
5. Primary CTA (dark anchor)
6. Footer

Components: `Hero`, `Section`, `SectionHeader`, `PillarCard`, `FeaturedProduct`, `CTASection`, `Navbar`, `Footer`, `ScrollReveal`

Priority: P0
Content source: STRATEGIC_BRIEF.md §§1–3,6

### 4.2 SBOS Page (`/sbos`)
**Goal:** Product depth: use cases, modules, methodology.

Sections:
1. Hero + short positioning
2. Who Uses SBOS? (use cases)
3. Product Benefits / Feature Callouts
4. How It Works (4-step methodology)
5. 9 Integrated Modules (grid)
6. Not Another Framework (principles)
7. CTA + signup (Web3Forms)
8. Footer

Components: `Hero`, `Section`, `UseCaseCards`, `FeatureGrid`, `MethodologySteps`, `ModuleGrid`, `CTASection`, `SignupForm`

Priority: P0
Content source: **port from `index.html`** (use cases, modules, methodology), plus any SBOS-specific details from `sbos.html` and `sbos-landing.html` if needed.

### 4.3 Privacy (`/privacy`)
**Goal:** Legal page port, minimal styling.

Sections:
1. Title
2. Structured content sections (as-is)
3. Footer

Components: `Section`, `LegalContent` renderer
Priority: P0
Content source: `privacy.html`

### 4.4 Terms (`/terms`)
Same approach as privacy.

Priority: P0
Content source: `terms.html`

### 4.5 About (`/about`) — Blocked
- **Blocked** until founder content arrives.
- Option: placeholder (simple page with “About content forthcoming”).

Priority: P2
Content source: TBD

### 4.6 Property Management (`/property-management`) — Blocked
- **Blocked** per brief (strategy changing).
- Option: keep old page content as placeholder or omit route until finalized.

Priority: P2
Content source: `property-management.html` (defer)

---

## 5. Build Order

1. **Scaffold**
   - Create Next.js app with App Router + Tailwind.
   - Configure static export and GitHub Pages compatibility.
2. **Design System**
   - Tokens, typography scale, spacing, motion utilities.
   - Global styles and Tailwind theme mapping.
3. **Shared Layout**
   - Marketing layout with navbar/footer.
   - Section/typography primitives.
4. **Core Pages**
   - Homepage.
   - SBOS page with ported content.
   - Legal pages (privacy/terms).
5. **Polish**
   - Scroll reveals, hover effects, CTA shimmer.
   - Analytics + event tracking + Web3Forms.
6. **Validation**
   - `npm run dev`, `npm run build`, verify export output.

---

## 6. Migration Mapping (Old → New)

### Content Sources
- `index.html`
  - SBOS hero positioning (adapt for SBOS page)
  - Use cases: “Who Uses SBOS?”
  - Feature callouts: “Know What You’re Buying…”, “Client Portfolio…”, “From Diagnosis to Systems…”
  - Methodology: “How It Works” (4 steps)
  - Modules: “9 Integrated Modules”
  - Principles: “Not Another Framework”
  - CTA section
- `sbos.html`
  - Supplemental SBOS positioning and demo CTA (optional additions)
- `sbos-landing.html`
  - Alternative SBOS copy; only pull if needed for missing details
- `privacy.html` → `/privacy`
- `terms.html` → `/terms`
- `property-management.html` → **defer** (blocked)
- `founding-cohort-signup.html` → **defer** (inline on PM page later)

### Not Migrated (per brief)
- `fcf/index.html` (internal pitch deck)
- `ir/index.html` (internal tool)

---

## 7. Open Questions (for Approval)

1. Should `/property-management` be a placeholder page or omitted until ready?
2. Should `/about` be a placeholder page or omitted until content arrives?
3. Confirm whether we should reuse any copy from `sbos.html` / `sbos-landing.html` beyond `index.html`.
4. Confirm GitHub Pages deployment target (root custom domain vs repo subpath) to finalize `basePath` behavior.

---

Approval required before Step 2 execution.
