# Stintwell Polish Pass — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Elevate Stintwell's visual execution from "clean template" to "institutional-grade premium" — matching the craft level of Substantia's blue-folder page, adapted to Stintwell's gold/white/black palette.

**Architecture:** Build a TypeScript design system in `lib/design/` with motion, shadow, and card modules. Upgrade `globals.css` with premium CSS utilities. Apply the system to every component and page. No content changes, no new pages, no palette changes.

**Tech Stack:** Next.js 14, Tailwind CSS 3.4, TypeScript, CSS custom properties

**Reference:** Substantia design system at `/Users/stevenbarclay/dev/substantia/lib/design/` and premium CSS at `/Users/stevenbarclay/dev/substantia/app/globals.css:451+`

---

## Phase 1: Design System Foundation

### Task 1: Upgrade tokens.css with institutional shadow system

**Files:**
- Modify: `styles/tokens.css`

**Step 1: Add multi-layer shadow tokens and warm gray refinements**

Replace the shadow variables and add gold-tinted shadow tokens:

```css
:root {
  --bg: #fafaf8;
  --bg-alt: #f0ede6;
  --text: #111111;
  --text-muted: #6b6b6b;
  --accent: #a8882f;
  --accent-hover: #8f7320;
  --anchor: #111111;
  --anchor-text: #fafaf8;
  --anchor-accent: #c9a84c;
  --muted: #e8e2d8;
  --success: #059669;
  --error: #e11d48;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;

  /* Multi-layer institutional shadows (4 layers: border, close, medium, far) */
  --shadow-soft:
    0 0 0 1px rgba(17, 17, 17, 0.03),
    0 1px 2px rgba(17, 17, 17, 0.04),
    0 2px 4px rgba(17, 17, 17, 0.04),
    0 8px 16px rgba(17, 17, 17, 0.04);
  --shadow-lift:
    0 0 0 1px rgba(17, 17, 17, 0.05),
    0 2px 4px rgba(17, 17, 17, 0.06),
    0 4px 8px rgba(17, 17, 17, 0.06),
    0 12px 24px rgba(17, 17, 17, 0.08),
    0 24px 48px rgba(17, 17, 17, 0.04);

  /* Gold-tinted shadows for accent elements */
  --shadow-gold:
    0 0 0 1px rgba(168, 136, 47, 0.08),
    0 2px 4px rgba(168, 136, 47, 0.06),
    0 8px 24px rgba(168, 136, 47, 0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: light;
  }
}
```

**Step 2: Verify build passes**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add styles/tokens.css
git commit -m "polish: upgrade shadow system to multi-layer institutional shadows"
```

---

### Task 2: Add premium CSS utilities to globals.css

**Files:**
- Modify: `styles/globals.css`

**Step 1: Add institutional shadow classes, premium card, premium button, glassmorphism, easing, motion, and gradient utilities**

After the existing `.reveal.is-visible` block, add:

```css
/* === PREMIUM UTILITIES === */

/* Easing curves */
.ease-smooth {
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

/* Institutional shadow system */
.shadow-institutional {
  box-shadow: var(--shadow-soft);
}

.shadow-institutional-hover {
  box-shadow: var(--shadow-lift);
}

/* Premium card - gradient background, multi-layer shadow, spring easing */
.premium-card {
  background: linear-gradient(to bottom right,
    rgba(255, 255, 255, 0.9),
    rgba(240, 237, 230, 0.6)
  );
  border: 1px solid rgba(17, 17, 17, 0.08);
  box-shadow: var(--shadow-soft);
  border-radius: var(--radius-lg);
  transition: all 400ms cubic-bezier(0.34, 1.2, 0.64, 1);
}

.premium-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lift);
  border-color: rgba(168, 136, 47, 0.2);
}

/* Premium button - gradient bg, inset highlight, hover shimmer (not infinite) */
.premium-button {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
  color: var(--anchor-text);
  box-shadow:
    0 1px 2px rgba(168, 136, 47, 0.1),
    0 8px 24px rgba(168, 136, 47, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transition: all 400ms cubic-bezier(0.34, 1.2, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.premium-button:hover {
  transform: translateY(-1px) scale(1.01);
  box-shadow:
    0 1px 3px rgba(168, 136, 47, 0.12),
    0 12px 32px rgba(168, 136, 47, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Shimmer on hover only */
.premium-button::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(255, 255, 255, 0.15) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  transition: transform 600ms ease;
}

.premium-button:hover::after {
  transform: translateX(100%);
}

/* Dark premium button variant (for dark sections) */
.premium-button-dark {
  background: linear-gradient(135deg, #fafaf8 0%, #e8e2d8 100%);
  color: var(--text);
  box-shadow:
    0 1px 2px rgba(17, 17, 17, 0.06),
    0 8px 24px rgba(17, 17, 17, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  transition: all 400ms cubic-bezier(0.34, 1.2, 0.64, 1);
}

.premium-button-dark:hover {
  transform: translateY(-1px) scale(1.01);
  box-shadow:
    0 1px 3px rgba(17, 17, 17, 0.08),
    0 12px 32px rgba(17, 17, 17, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

/* Glassmorphism navbar */
.glass-nav {
  backdrop-filter: blur(12px);
  background: rgba(250, 250, 248, 0.85);
  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
  box-shadow: 0 1px 3px rgba(17, 17, 17, 0.03);
}

/* Glassmorphism footer (dark) */
.glass-footer {
  backdrop-filter: blur(12px);
  background: rgba(17, 17, 17, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* Gradient section transitions */
.section-gradient-warm {
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%);
}

.section-gradient-warm-reverse {
  background: linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%);
}

.section-gradient-anchor {
  background: linear-gradient(180deg, var(--anchor) 0%, #1a1a1a 100%);
}

/* Inset highlights for dark elements */
.inset-highlight {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Gold gradient text */
.text-gradient-gold {
  background: linear-gradient(135deg, #c9a84c 0%, #a8882f 50%, #c9a84c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Decorative gold rule */
.gold-rule {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%);
  opacity: 0.3;
}

/* Optical letter-spacing for large text */
.text-display {
  font-size: clamp(2.5rem, 4.5vw, 4.5rem);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.text-h1 {
  font-size: clamp(2rem, 3.2vw, 3.5rem);
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.text-h2 {
  font-size: clamp(1.75rem, 2.4vw, 2.75rem);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Focus states - double ring pattern */
.focus-ring:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--bg),
    0 0 0 4px var(--accent);
}

/* ScrollReveal with stagger delays */
.reveal-delay-100 { transition-delay: 100ms; }
.reveal-delay-200 { transition-delay: 200ms; }
.reveal-delay-300 { transition-delay: 300ms; }
.reveal-delay-400 { transition-delay: 400ms; }

/* Fade-in-up animation (for staggered page load) */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  opacity: 0;
}

/* Motion preference respect */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Also update the existing `.card` and `.card-hover` rules to use the new institutional shadows, update `.button-primary` shimmer to be hover-only, and tighten letter-spacing on `.text-display`/`.text-h1`/`.text-h2`.

**Step 2: Verify build passes**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add styles/globals.css
git commit -m "polish: add premium CSS utilities — shadows, glass, gradients, motion"
```

---

### Task 3: Upgrade Tailwind config with new animation and shadow tokens

**Files:**
- Modify: `tailwind.config.ts`

**Step 1: Add spring easing, fade-in-up animation, and institutional shadow utilities**

```typescript
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        anchor: "var(--anchor)",
        "anchor-text": "var(--anchor-text)",
        "anchor-accent": "var(--anchor-accent)",
        muted: "var(--muted)",
        success: "var(--success)",
        error: "var(--error)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)",
        gold: "var(--shadow-gold)",
      },
      backgroundImage: {
        "cta-shimmer":
          "linear-gradient(120deg, rgba(255,255,255,0.08), rgba(255,255,255,0.24), rgba(255,255,255,0.08))",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 0.6s ease forwards",
        fadeUp: "fadeUp 0.6s ease-out both",
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        spring: "cubic-bezier(0.34, 1.2, 0.64, 1)",
      },
    },
  },
  plugins: [typography],
};

export default config;
```

**Step 2: Verify build passes**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "polish: add spring easing, institutional shadows to tailwind config"
```

---

## Phase 2: Component Upgrades

### Task 4: Upgrade ScrollReveal with delay prop for staggered reveals

**Files:**
- Modify: `components/interactions/ScrollReveal.tsx`

**Step 1: Add delay prop support**

```tsx
"use client";

import { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => entry.target.classList.add("is-visible"), delay);
            } else {
              entry.target.classList.add("is-visible");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" }
    );

    requestAnimationFrame(() => {
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className || ""}`.trim()}>
      {children}
    </div>
  );
}
```

**Step 2: Verify build passes**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add components/interactions/ScrollReveal.tsx
git commit -m "polish: add delay prop to ScrollReveal for staggered entrance timing"
```

---

### Task 5: Upgrade Button component with premium styling

**Files:**
- Modify: `components/primitives/Button.tsx`

**Step 1: Replace flat button with premium-button class and add arrow icon for primary**

```tsx
import Link from "next/link";
import { cx } from "@/lib/classnames";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] focus-ring";

const variants = {
  primary: "premium-button",
  secondary:
    "border border-black/10 text-text hover:border-black/30 hover:shadow-soft transition-all duration-300 ease-smooth active:scale-[0.98]",
  ghost: "text-text-muted hover:text-text transition-colors duration-200",
};

type ButtonBaseProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

type ButtonLinkProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonLinkProps | ButtonButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cx(base, variants[variant], className);

  if ("href" in props) {
    const { href, ...anchorProps } = rest as ButtonLinkProps;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonButtonProps)}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
```

Key changes:
- Primary variant uses `premium-button` class (gradient bg, inset highlight, hover-only shimmer)
- Secondary adds `hover:shadow-soft`, `ease-smooth`, `active:scale-[0.98]`
- Added `focus-ring` for double-ring focus states
- Content wrapped in `<span className="relative z-10">` so shimmer pseudo-element renders behind text

**Step 2: Verify build passes**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add components/primitives/Button.tsx
git commit -m "polish: upgrade Button to premium styling with hover shimmer and spring easing"
```

---

### Task 6: Upgrade Navbar with glassmorphism

**Files:**
- Modify: `components/layout/Navbar.tsx`

**Step 1: Replace basic backdrop-blur with glass-nav class**

Change the header className from:
```
sticky top-0 z-50 border-b border-black/10 bg-bg/90 backdrop-blur
```
to:
```
sticky top-0 z-50 glass-nav
```

Also add `focus-ring` to interactive elements and smooth hover transitions to nav links.

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add components/layout/Navbar.tsx
git commit -m "polish: glassmorphism navbar with refined border and shadow"
```

---

### Task 7: Upgrade Footer with glass treatment and inset highlight

**Files:**
- Modify: `components/layout/Footer.tsx`

**Step 1: Replace anchor-section with glass-footer class and add decorative gold rule**

```tsx
import Link from "next/link";
import Logo from "@/components/layout/Logo";

export default function Footer() {
  return (
    <footer className="glass-footer anchor-section">
      <div className="container-wide flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <Logo tone="light" />
        <div className="flex flex-col items-center gap-2 text-sm text-white/70">
          <p>&copy; 2026 Stintwell. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
        <p className="text-xs text-white/60">Structure, shipped.</p>
      </div>
    </footer>
  );
}
```

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "polish: glassmorphism footer with inset highlight"
```

---

### Task 8: Upgrade card and card-hover CSS classes

**Files:**
- Modify: `styles/globals.css`

**Step 1: Update .card and .card-hover to use institutional shadows and spring easing**

Replace existing `.card` and `.card-hover` rules:

```css
.card {
  background: var(--muted);
  border-radius: var(--radius-md);
  border: 1px solid rgba(17, 17, 17, 0.06);
  box-shadow: var(--shadow-soft);
}

.card-hover {
  transition: all 400ms cubic-bezier(0.34, 1.2, 0.64, 1);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lift);
  border-color: rgba(168, 136, 47, 0.15);
}
```

Also update `.button-primary` to use hover-only shimmer:

```css
.button-primary {
  position: relative;
  overflow: hidden;
}

.button-primary::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 600ms ease;
  opacity: 1;
}

.button-primary:hover::after {
  transform: translateX(100%);
}
```

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add styles/globals.css
git commit -m "polish: institutional shadows on cards, hover-only shimmer on buttons"
```

---

## Phase 3: Page-Level Polish

### Task 9: Upgrade homepage with gradient section transitions, staggered reveals, and decorative elements

**Files:**
- Modify: `app/(marketing)/page.tsx`

**Step 1: Apply gradient section transitions, stagger ScrollReveal delays, add gold rules between sections**

Key changes:
- Hero section: Add gradient transition from black to bg at bottom (instead of hard cut)
- Philosophy section: `section-gradient-warm` (bg → bg-alt)
- Capabilities section: stays bg-alt but with gold-rule divider at top
- Featured product section: `section-gradient-warm-reverse` (bg-alt → bg)
- CTA section: gradient from bg to anchor (via very dark)
- Stagger ScrollReveals: hero elements at 0ms, 100ms, 200ms, 300ms
- Pillar cards stagger: 0ms, 150ms, 300ms

```tsx
{/* Hero - gradient bottom edge */}
<section
  className="anchor-section pt-24 pb-32 relative"
  style={{
    background: 'linear-gradient(180deg, #111111 0%, #111111 85%, var(--bg) 100%)',
  }}
>
```

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add app/(marketing)/page.tsx
git commit -m "polish: gradient section transitions and staggered reveals on homepage"
```

---

### Task 10: Upgrade SBOS page with same polish patterns

**Files:**
- Modify: `app/(marketing)/sbos/page.tsx`

**Step 1: Apply the same patterns — gradient sections, staggered cards, premium cards, gold rules**

Read the current SBOS page and apply:
- Gradient section transitions between all sections
- Staggered ScrollReveal delays on card grids (FeatureGrid, ModuleGrid, MethodologySteps)
- Premium card treatment on key cards
- Gold rule decorative dividers between sections

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add app/(marketing)/sbos/page.tsx
git commit -m "polish: gradient sections and staggered reveals on SBOS page"
```

---

### Task 11: Upgrade section components (CapabilityPillars, FeatureGrid, MethodologySteps, ModuleGrid, FeaturedProduct)

**Files:**
- Modify: `components/sections/CapabilityPillars.tsx`
- Modify: `components/sections/FeatureGrid.tsx`
- Modify: `components/sections/MethodologySteps.tsx`
- Modify: `components/sections/ModuleGrid.tsx`
- Modify: `components/sections/FeaturedProduct.tsx`

**Step 1: Add stagger delays to card grids and refine card hover interactions**

For all card-grid components:
- Pass `delay={index * 100}` to each `ScrollReveal` wrapper
- Add `hover:scale-[1.01]` to card-hover for subtle scale micro-interaction
- Ensure gold-tinted border on hover (`border-color: rgba(168, 136, 47, 0.15)`)

For FeaturedProduct:
- Upgrade to premium-card styling
- Add gold-tinted shadow

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add components/sections/CapabilityPillars.tsx components/sections/FeatureGrid.tsx components/sections/MethodologySteps.tsx components/sections/ModuleGrid.tsx components/sections/FeaturedProduct.tsx
git commit -m "polish: staggered reveals and premium hover interactions on section components"
```

---

### Task 12: Upgrade UseCaseTabs with refined interaction design

**Files:**
- Modify: `components/sections/UseCaseTabs.tsx`

**Step 1: Refine tab transitions, card borders, and content animations**

- Tab buttons: add `focus-ring`, smoother color transitions
- Active tab indicator: use gold accent instead of basic border
- Tab content: add fade-in transition when switching tabs
- Cards within tabs: premium-card treatment

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add components/sections/UseCaseTabs.tsx
git commit -m "polish: refined tab transitions and premium card styling on UseCaseTabs"
```

---

### Task 13: Upgrade CTASection with gradient background and premium buttons

**Files:**
- Modify: `components/sections/CTASection.tsx`

**Step 1: Replace hard black with gradient, add inset highlight, refine button styling for dark context**

```tsx
<section
  className="section-padding section-gradient-anchor inset-highlight"
>
```

Use the premium-button-dark class for secondary buttons on dark sections.

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add components/sections/CTASection.tsx
git commit -m "polish: gradient CTA section with premium dark buttons"
```

---

## Phase 4: Final QA

### Task 14: Full build verification and visual check

**Step 1: Run full build**

```bash
cd /Users/stevenbarclay/dev/stintwell-website && npm run build
```
Expected: Build succeeds with no errors

**Step 2: Run dev server and take Playwright screenshots**

```bash
cd /Users/stevenbarclay/dev/stintwell-website && npm run dev
```

Use Playwright to screenshot:
- Homepage (full page)
- SBOS page (full page)
- Mobile viewport (375px) of both pages

**Step 3: Verify each of the 15 polish points from the brief:**

1. Multi-layer institutional shadows ✓
2. Gradient section transitions ✓
3. Staggered scroll reveals ✓
4. Premium button overhaul ✓
5. Card depth system ✓
6. Motion system (easing curves) ✓
7. Typography optical adjustments ✓
8. Glassmorphism accents ✓
9. Focus states ✓
10. Strict 8px grid (audit) ✓
11. Color refinement ✓
12. Hover micro-interactions ✓
13. Icon containers ✓ (N/A - no icons in current design)
14. Section decorative elements (gold rules) ✓
15. Inset highlights ✓

**Step 4: Final commit**

```bash
git add -A
git commit -m "polish: final QA pass — verified all 15 polish points"
```
