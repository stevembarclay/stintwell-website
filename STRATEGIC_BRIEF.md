# Stintwell Strategic Brief

> Generated: 2026-02-02
> Status: Ready for review

---

## 1. Brand & Positioning

### Company Identity
Stintwell is a **product studio** that builds software tools bringing structure, compliance, and operational discipline to underserved industries. It is NOT an advisory firm, consultancy, or coaching practice — it ships products.

### Product Portfolio
| Product | Domain | Stage | Public? |
|---------|--------|-------|---------|
| SBOS (Service Business Operating System) | Business operations | Live | Yes — named and featured |
| Substantia | RIA marketing compliance (SEC) | In development | No — referenced as capability pillar only |
| MoCRA.xml | FDA cosmetics compliance (Shopify) | Phase 1 | No — referenced as capability pillar only |

### Positioning
- Stintwell = parent brand / product studio
- SBOS = flagship product, the only one named publicly
- Other products represented through **three capability pillars** on the homepage:
  1. **Operations** — Systems that replace founder dependency (SBOS)
  2. **Compliance** — Tools for navigating regulatory complexity (Substantia, MoCRA.xml)
  3. **Infrastructure** — The operational backbone SMBs can't build themselves

### Tagline
Current: "Precision. Discipline. Results that endure."
Direction: Final — **Structure, shipped.**
Guidance: Should reflect Stintwell as a builder/maker of tools, not an advisory voice.

---

## 2. Information Architecture

### Homepage Structure (Narrative Flow)
1. **Hero** — Stintwell company positioning + tagline. White-dominant, gold accent CTA.
2. **Philosophy** — What Stintwell believes / how it approaches building. Concise, one section.
3. **Capability Pillars** — Three cards: Operations, Compliance, Infrastructure. Only SBOS is named.
4. **Featured Product: SBOS** — Brief spotlight with link to dedicated SBOS page.
5. **CTA** — Primary conversion action (likely "Explore SBOS" or "Get Started").
6. **Footer** — Minimal: logo, legal links, copyright.

### Site Map
```
/                          → Homepage (company-level)
/sbos                      → SBOS product page (detailed)
/property-management       → PM industry landing page (preserved)
/about                     → Founder story + company background
/privacy                   → Privacy policy
/terms                     → Terms of service
```

### Navigation
**Minimal** — Logo | Products | About | [CTA Button]

- "Products" links to SBOS page (or dropdown if more products become public)
- "About" links to /about (founder story)
- CTA button is the primary conversion action

### Pages Killed/Merged
- `sbos-landing.html` → content merged into `/sbos`
- `sbos.html` → content merged into `/sbos`
- `sbos-signup.html` → inline on `/sbos` or modal
- `founding-cohort-signup.html` → inline on `/property-management`
- `fcf/index.html` → not migrated (internal pitch deck)
- `ir/index.html` → not migrated (internal tool)

---

## 3. Design Direction

### Overall Feel
**Modern premium SaaS** — Apple product pages, Linear, Vercel territory.
- Authority through whitespace, typography scale, and restraint
- Not editorial/magazine, not corporate/institutional
- Concise and direct copy, not long-form narrative
- Premium feel from spacing and hierarchy, not from decoration

### Color Palette: White-First + Gold
Direction: Palette 7c — light backgrounds dominant, gold accents, black for hero/footer anchors.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Background | Warm White | `#FAFAF8` | Primary surface, most sections |
| Background Alt | Cream | `#F0EDE6` | Alternating sections, subtle depth |
| Text Primary | Near Black | `#111111` | Headlines, body text |
| Text Secondary | Warm Gray | `#6B6B6B` | Subtext, descriptions |
| Accent Primary | Gold | `#A8882F` | Buttons, links, highlights, icons |
| Accent Hover | Darker Gold | `#8F7320` | Hover states |
| Anchor Surface | Black | `#111111` | Hero section, footer, CTA blocks |
| Anchor Text | White/Gold | `#FAFAF8` / `#C9A84C` | Text on dark sections |
| Muted Surface | Warm Muted | `#E8E2D8` | Card backgrounds, dividers |
| Success | Green | `#2A7B3F` | Success states |
| Error | Red | `#DC2626` | Error states |

### Logo Color Mapping
- Light variant: L-shapes `#A8882F`, wordmark `#111111`, background `#FAFAF8`
- Dark variant: L-shapes `#A8882F`, wordmark `#FAFAF8`, background `#111111`
- Monochrome variant: single-color usage for small sizes or embossing (`#111111` on light, `#FAFAF8` on dark)

### Typography
- **Font:** Inter (single font family)
- **Weights:** 400 (body), 500 (emphasis), 600 (subheadings), 700 (headings), 800 (display)
- **Premium through:** generous line-height, wide letter-spacing on labels, fluid type scale with `clamp()`
- **No serif font** — authority comes from scale and spacing

### Section Pattern
```
[Black]   Hero — dark anchor with gold CTA
[White]   Philosophy — spacious, breathes
[Cream]   Capability Pillars — slight depth
[White]   Featured Product — clean showcase
[Black]   CTA — dark anchor, urgency
[Black]   Footer — minimal
```

### Motion
- Subtle scroll reveals (fade-in + slight translate)
- Hover state transitions on cards and buttons
- No heavy animations, no parallax
- Gold shimmer on primary CTA button (subtle)

---

## 4. Content Strategy

### Voice & Tone
- **Concise and direct** — Apple product page style
- Each section makes ONE point well
- No jargon, no buzzwords
- Confident without being arrogant
- The design does the talking; copy supports it

### Content Depth
- Homepage: minimal copy, maximum design impact
- SBOS page: moderate depth (product features, methodology, use cases)
- PM landing: conversion-focused (urgency, specificity, CTA)
- About: founder story, company philosophy

### Social Proof
- **None available yet** — design must carry credibility alone
- Future: testimonial slots can be added when available
- Current credibility signals: methodology depth, design polish, product specificity

### Competitor Positioning
- Not defined yet — SBOS page should differentiate through methodology (diagnosis-first, phase-gating) rather than direct competitor comparison

---

## 5. Technical Decisions

### Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Inter (Google Fonts or self-hosted)
- **Icons:** Lucide
- **Deploy:** GitHub Pages (static export via `next export`)
- **Domain:** stintwell.com (CNAME preserved)

### Project Structure
```
app/
  (marketing)/
    layout.tsx          → Marketing layout (header + footer)
    page.tsx            → Homepage
    sbos/page.tsx       → SBOS product page
    property-management/page.tsx → PM landing
    about/page.tsx      → Founder/company story
    privacy/page.tsx    → Privacy policy
    terms/page.tsx      → Terms of service
```

### Analytics
- **Google Analytics 4** — ported (G-X7YHYYWXDL)
- **Mouseflow** — ported (session recording)
- Event tracking: CTA clicks, scroll depth, tab interactions

### Forms
- **Web3Forms** — continue using for form submissions
- Signup forms embedded on product/landing pages (not separate pages)

### No Auth Required
- All marketing pages are public
- No gated content

---

## 6. Capability Pillars (Homepage)

These represent the unnamed products without revealing them:

### Operations
> Systems that replace founder dependency with institutional discipline.

Represents SBOS. The most detailed pillar since the product is public.

### Compliance
> Tools for navigating regulatory complexity — so your team can focus on the work, not the paperwork.

Represents Substantia and MoCRA.xml without naming them. Signals that Stintwell operates in regulated industries.

### Infrastructure
> The operational backbone that growing businesses need but can't build themselves.

Represents the cross-cutting theme: Stintwell builds foundational tools, not surface-level features.

---

## 7. Open Items

- [x] **Tagline:** Finalized as "Structure, shipped."
- [ ] **Founder story content:** /about is a "Coming soon" placeholder for now (bio/philosophy/background to be drafted later)
- [ ] **SBOS page scope:** How much of the current homepage content carries over vs. gets rewritten
- [x] **PM landing page:** Remove founding cohort; established positioning; primary CTA "Book a walkthrough"; pricing visibility matches SBOS
- [ ] **OG images:** Need new ones matching the new palette
- [x] **Logo:** Updated mapping to new palette (gold/black/white) with light, dark, and monochrome variants

---

## 8. Success Criteria

The redesigned site should:
1. **Feel premium** — first impression is "this is a serious company"
2. **Communicate breadth** — Stintwell builds multiple products, not just SBOS
3. **Convert** — clear path from homepage → SBOS → signup
4. **Load fast** — static export, minimal JS, optimized images
5. **Score 94+** on institutional polish (up from current 62)
