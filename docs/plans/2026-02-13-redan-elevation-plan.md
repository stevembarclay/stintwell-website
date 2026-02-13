# Redan-Grade Visual Elevation — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Systematically upgrade Stintwell's visual sophistication to match Redan Compliance's institutional-grade polish (88/100 → 95+/100).

**Architecture:** Layer-by-layer, bottom-up through the design stack: foundation → typography → motion → components → hero → transitions. Each layer creates a stable foundation for the next. No new pages — all changes are to existing design system and components.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS 3.4, framer-motion (new), IBM Plex Mono (new), CSS custom properties

**Design Doc:** `docs/plans/2026-02-13-redan-elevation-design.md`

---

## Task 1: Foundation — Noise Texture Overlay

**Files:**
- Modify: `styles/globals.css` (add noise texture utility at end of file, before the `@media (prefers-reduced-motion)` block at line 325)

**Step 1: Add noise texture CSS utility**

Add the following to `styles/globals.css` before the `/* Motion preference respect */` comment (line 324):

```css
/* ─── Noise texture overlay ─── */

.noise-texture {
  position: relative;
}

.noise-texture::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.015;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
```

**Step 2: Apply noise texture to marketing layout**

Modify `app/(marketing)/layout.tsx` line 11 — add `noise-texture` class to the wrapper div:

Change:
```tsx
<div className="min-h-screen bg-bg text-text">
```
To:
```tsx
<div className="min-h-screen bg-bg text-text noise-texture">
```

**Step 3: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds with no errors.

**Step 4: Visual check**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run dev`
Open http://localhost:3000 in browser. Confirm very subtle grain texture visible on light backgrounds. It should be barely perceptible — like printed paper rather than a screen.

**Step 5: Commit**

```bash
git add styles/globals.css app/\(marketing\)/layout.tsx
git commit -m "feat: add noise texture overlay for analog warmth"
```

---

## Task 2: Foundation — Radial Gradient Backgrounds

**Files:**
- Modify: `styles/globals.css` (add marketing background utilities)

**Step 1: Add radial gradient background utilities**

Add the following to `styles/globals.css` after the `.noise-texture` block (before the motion preference media query):

```css
/* ─── Ambient radial gradient backgrounds ─── */

.marketing-bg {
  background:
    radial-gradient(circle at 15% 20%, rgba(168, 136, 47, 0.02) 0%, transparent 40%),
    radial-gradient(circle at 85% 80%, rgba(168, 136, 47, 0.015) 0%, transparent 40%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%);
}

.marketing-bg-alt {
  background:
    radial-gradient(circle at 80% 15%, rgba(168, 136, 47, 0.015) 0%, transparent 40%),
    radial-gradient(circle at 20% 85%, rgba(168, 136, 47, 0.02) 0%, transparent 40%),
    var(--bg-alt);
}
```

**Step 2: Apply to homepage sections**

In `app/(marketing)/page.tsx`:
- Line 86: Change `className="section-gradient-warm"` to `className="marketing-bg"`
- Line 100: Change `className="bg-bg-alt"` to `className="marketing-bg-alt"`
- Line 112: Change `className="section-gradient-warm-reverse"` to `className="marketing-bg"` (reversed radials are already handled by the asymmetric positioning)

**Step 3: Apply to SBOS page sections**

In `app/(marketing)/sbos/page.tsx`:
- Line 84: Change `className="section-gradient-warm"` to `className="marketing-bg"`
- Line 99: Change `className="bg-bg-alt"` to `className="marketing-bg-alt"`
- Line 111: Change `className="section-gradient-warm-reverse"` to `className="marketing-bg"`
- Line 135: Change `className="bg-bg-alt"` to `className="marketing-bg-alt"`
- Line 147: Change `className="section-gradient-warm"` to `className="marketing-bg"`
- Line 167: Change `className="bg-bg-alt"` to `className="marketing-bg-alt"`

**Step 4: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add styles/globals.css app/\(marketing\)/page.tsx app/\(marketing\)/sbos/page.tsx
git commit -m "feat: add radial gradient ambient backgrounds to marketing sections"
```

---

## Task 3: Foundation — Enhanced Shadow Token

**Files:**
- Modify: `styles/tokens.css` (add `--shadow-glow` token)
- Modify: `tailwind.config.ts` (register new shadow)

**Step 1: Add glow shadow token**

In `styles/tokens.css`, after the `--shadow-gold` block (line 35), add:

```css

  /* Gold glow shadow for featured elements */
  --shadow-glow:
    0 0 0 1px rgba(168, 136, 47, 0.06),
    0 4px 8px rgba(168, 136, 47, 0.08),
    0 12px 32px rgba(168, 136, 47, 0.12),
    0 24px 48px rgba(168, 136, 47, 0.06);
```

**Step 2: Register in Tailwind config**

In `tailwind.config.ts` line 33, add `glow` to the boxShadow extend:

```ts
boxShadow: {
  soft: "var(--shadow-soft)",
  lift: "var(--shadow-lift)",
  gold: "var(--shadow-gold)",
  glow: "var(--shadow-glow)",
},
```

**Step 3: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add styles/tokens.css tailwind.config.ts
git commit -m "feat: add gold glow shadow token for featured elements"
```

---

## Task 4: Typography — Tighter Tracking & Body Large

**Files:**
- Modify: `styles/globals.css` (update type scale, add body-large)

**Step 1: Update display tracking**

In `styles/globals.css`, change line 50:
```css
  letter-spacing: -0.03em;
```
To:
```css
  letter-spacing: -0.04em;
```

**Step 2: Update H1 tracking**

In `styles/globals.css`, change line 57:
```css
  letter-spacing: -0.02em;
```
To:
```css
  letter-spacing: -0.03em;
```

**Step 3: Add body-large variant**

After the `.text-body` block (line 75), add:

```css

.text-body-large {
  font-size: clamp(1.0625rem, 1.2vw, 1.1875rem);
  line-height: 1.75;
}
```

**Step 4: Apply body-large to lead paragraphs**

In `app/(marketing)/page.tsx` line 55, change:
```tsx
<p className="text-body text-white/70 max-w-2xl mx-auto mb-10">
```
To:
```tsx
<p className="text-body-large text-white/70 max-w-2xl mx-auto mb-10">
```

In `app/(marketing)/sbos/page.tsx` line 46, change:
```tsx
<p className="text-body text-white/70 max-w-3xl mx-auto mb-6">
```
To:
```tsx
<p className="text-body-large text-white/70 max-w-3xl mx-auto mb-6">
```

**Step 5: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 6: Commit**

```bash
git add styles/globals.css app/\(marketing\)/page.tsx app/\(marketing\)/sbos/page.tsx
git commit -m "feat: tighten display tracking and add body-large typography variant"
```

---

## Task 5: Typography — Mono Font for Data

**Files:**
- Modify: `app/layout.tsx` (add IBM Plex Mono font import)
- Modify: `tailwind.config.ts` (add mono font family)
- Modify: `styles/globals.css` (add font-data utility)

**Step 1: Add IBM Plex Mono font import**

In `app/layout.tsx`, add the import after the Inter import (line 3):

```tsx
import { Inter, IBM_Plex_Mono } from "next/font/google";
```

Replace the Inter-only import on line 2: `import { Inter } from "next/font/google";`

After the `inter` const (line 9), add:

```tsx
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});
```

On line 23, update the body className to include both font variables:
```tsx
<body className={`${inter.variable} ${ibmPlexMono.variable}`}>
```

**Step 2: Register mono font in Tailwind**

In `tailwind.config.ts`, after the `sans` fontFamily (line 28), add:

```ts
mono: ["var(--font-mono)", "ui-monospace", "monospace"],
```

**Step 3: Add font-data utility class**

In `styles/globals.css`, after the `.text-label` block (line 82), add:

```css

.font-data {
  font-family: var(--font-mono), ui-monospace, monospace;
  font-variant-numeric: tabular-nums;
}
```

**Step 4: Apply font-data to data-oriented content**

In `components/sections/CapabilityPillars.tsx` line 24, change:
```tsx
<p className="text-label text-text-muted mb-3">0{index + 1}</p>
```
To:
```tsx
<p className="text-label text-text-muted mb-3 font-data">0{index + 1}</p>
```

In `components/sections/MethodologySteps.tsx` line 18, change:
```tsx
<p className="text-label text-text-muted mb-4">Step 0{index + 1}</p>
```
To:
```tsx
<p className="text-label text-text-muted mb-4 font-data">Step 0{index + 1}</p>
```

In `app/(marketing)/sbos/page.tsx` line 77, change:
```tsx
<p className="text-xs text-white/60 mt-6 uppercase tracking-[0.2em]">
```
To:
```tsx
<p className="text-xs text-white/60 mt-6 uppercase tracking-[0.2em] font-data">
```

**Step 5: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 6: Commit**

```bash
git add app/layout.tsx tailwind.config.ts styles/globals.css components/sections/CapabilityPillars.tsx components/sections/MethodologySteps.tsx app/\(marketing\)/sbos/page.tsx
git commit -m "feat: add IBM Plex Mono font for data display with tabular numerics"
```

---

## Task 6: Typography — Upgrade Gold Gradient Text

**Files:**
- Modify: `styles/globals.css` (update existing `.text-gradient-gold`)

**Step 1: Update gold gradient text utility**

In `styles/globals.css`, replace the existing `.text-gradient-gold` block (lines 280-285):

```css
.text-gradient-gold {
  background: linear-gradient(135deg, var(--accent) 0%, #c9a84c 50%, #e8d5bd 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

This replaces the current 3-stop gold-on-gold gradient with a wider range that fades to warm cream, giving better visual interest.

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add styles/globals.css
git commit -m "feat: upgrade gold gradient text with wider tonal range"
```

---

## Task 7: Motion — Install Framer Motion

**Files:**
- Modify: `package.json` (new dependency)

**Step 1: Install framer-motion**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm install framer-motion`
Expected: Package installs successfully. Check `package.json` confirms framer-motion added to dependencies.

**Step 2: Verify the build still works**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds with no errors.

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: add framer-motion dependency for animation system"
```

---

## Task 8: Motion — Create MotionReveal Component

**Files:**
- Create: `components/interactions/MotionReveal.tsx`

**Step 1: Create MotionReveal component**

Create `components/interactions/MotionReveal.tsx`:

```tsx
"use client";

import { useRef } from "react";
import { motion, useReducedMotion, type Variant } from "framer-motion";

type AnimationVariant = "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";

const variants: Record<AnimationVariant, { hidden: Variant; visible: Variant }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
};

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export default function MotionReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.5,
  once = true,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const v = variants[variant];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: v.hidden,
        visible: {
          ...v.visible,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: delay / 1000,
            duration,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/interactions/MotionReveal.tsx
git commit -m "feat: create MotionReveal component with Framer Motion spring physics"
```

---

## Task 9: Motion — Create MotionStagger Component

**Files:**
- Create: `components/interactions/MotionStagger.tsx`

**Step 1: Create MotionStagger component**

Create `components/interactions/MotionStagger.tsx`:

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

type MotionStaggerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
};

export default function MotionStagger({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: MotionStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/interactions/MotionStagger.tsx
git commit -m "feat: create MotionStagger component for orchestrated child animations"
```

---

## Task 10: Motion — Create MotionItem Component

**Files:**
- Create: `components/interactions/MotionItem.tsx`

This is the child component used inside MotionStagger. Each child item animates independently, controlled by the parent's stagger timing.

**Step 1: Create MotionItem component**

Create `components/interactions/MotionItem.tsx`:

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

type MotionItemProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MotionItem({ children, className }: MotionItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/interactions/MotionItem.tsx
git commit -m "feat: create MotionItem child component for staggered reveals"
```

---

## Task 11: Motion — Migrate CapabilityPillars to MotionStagger

**Files:**
- Modify: `components/sections/CapabilityPillars.tsx`

**Step 1: Replace ScrollReveal with MotionStagger + MotionItem**

Replace the entire contents of `components/sections/CapabilityPillars.tsx`:

```tsx
import MotionStagger from "@/components/interactions/MotionStagger";
import MotionItem from "@/components/interactions/MotionItem";
import { cx } from "@/lib/classnames";

type Pillar = {
  title: string;
  description: string;
};

type CapabilityPillarsProps = {
  pillars: Pillar[];
};

export default function CapabilityPillars({ pillars }: CapabilityPillarsProps) {
  return (
    <MotionStagger className="grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
      {pillars.map((pillar, index) => (
        <MotionItem key={pillar.title}>
          <div
            className={cx(
              "card card-hover p-6",
              index === 1 ? "bg-bg-alt" : "bg-muted"
            )}
          >
            <p className="text-label text-text-muted mb-3 font-data">0{index + 1}</p>
            <h3 className="text-h3 mb-3">{pillar.title}</h3>
            <p className="text-body text-text-muted">{pillar.description}</p>
          </div>
        </MotionItem>
      ))}
    </MotionStagger>
  );
}
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/sections/CapabilityPillars.tsx
git commit -m "refactor: migrate CapabilityPillars to MotionStagger"
```

---

## Task 12: Motion — Migrate FeatureGrid to MotionStagger

**Files:**
- Modify: `components/sections/FeatureGrid.tsx`

**Step 1: Replace ScrollReveal with MotionStagger + MotionItem**

Replace the entire contents of `components/sections/FeatureGrid.tsx`:

```tsx
import MotionStagger from "@/components/interactions/MotionStagger";
import MotionItem from "@/components/interactions/MotionItem";

export type Feature = {
  title: string;
  description: string;
  meta?: string;
};

type FeatureGridProps = {
  features: Feature[];
};

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <MotionStagger className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
      {features.map((feature) => (
        <MotionItem key={feature.title}>
          <div className="card card-hover p-6 bg-bg">
            <h3 className="text-h3 mb-3">{feature.title}</h3>
            <p className="text-body text-text-muted mb-4">
              {feature.description}
            </p>
            {feature.meta && (
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                {feature.meta}
              </p>
            )}
          </div>
        </MotionItem>
      ))}
    </MotionStagger>
  );
}
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/sections/FeatureGrid.tsx
git commit -m "refactor: migrate FeatureGrid to MotionStagger"
```

---

## Task 13: Motion — Migrate ModuleGrid to MotionStagger

**Files:**
- Modify: `components/sections/ModuleGrid.tsx`

**Step 1: Replace ScrollReveal with MotionStagger + MotionItem**

Replace the entire contents of `components/sections/ModuleGrid.tsx`:

```tsx
import MotionStagger from "@/components/interactions/MotionStagger";
import MotionItem from "@/components/interactions/MotionItem";

export type ModuleItem = {
  title: string;
  description: string;
  detail: string;
};

type ModuleGridProps = {
  modules: ModuleItem[];
};

export default function ModuleGrid({ modules }: ModuleGridProps) {
  return (
    <MotionStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
      {modules.map((module) => (
        <MotionItem key={module.title}>
          <div className="card card-hover p-6 bg-bg">
            <h3 className="text-h3 mb-3">{module.title}</h3>
            <p className="text-body text-text-muted mb-4">
              {module.description}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
              {module.detail}
            </p>
          </div>
        </MotionItem>
      ))}
    </MotionStagger>
  );
}
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/sections/ModuleGrid.tsx
git commit -m "refactor: migrate ModuleGrid to MotionStagger"
```

---

## Task 14: Motion — Migrate MethodologySteps to MotionStagger

**Files:**
- Modify: `components/sections/MethodologySteps.tsx`

**Step 1: Replace ScrollReveal with MotionStagger + MotionItem**

Replace the entire contents of `components/sections/MethodologySteps.tsx`:

```tsx
import MotionStagger from "@/components/interactions/MotionStagger";
import MotionItem from "@/components/interactions/MotionItem";

export type MethodStep = {
  title: string;
  description: string;
};

type MethodologyStepsProps = {
  steps: MethodStep[];
};

export default function MethodologySteps({ steps }: MethodologyStepsProps) {
  return (
    <MotionStagger className="grid gap-6 md:grid-cols-4" staggerDelay={0.1}>
      {steps.map((step, index) => (
        <MotionItem key={step.title}>
          <div className="card card-hover p-6 bg-bg">
            <p className="text-label text-text-muted mb-4 font-data">Step 0{index + 1}</p>
            <h3 className="text-h3 mb-3">{step.title}</h3>
            <p className="text-body text-text-muted">{step.description}</p>
          </div>
        </MotionItem>
      ))}
    </MotionStagger>
  );
}
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/sections/MethodologySteps.tsx
git commit -m "refactor: migrate MethodologySteps to MotionStagger"
```

---

## Task 15: Motion — Migrate FeaturedProduct to MotionReveal

**Files:**
- Modify: `components/sections/FeaturedProduct.tsx`

**Step 1: Replace ScrollReveal with MotionReveal**

Replace the entire contents of `components/sections/FeaturedProduct.tsx`:

```tsx
import Link from "next/link";
import MotionReveal from "@/components/interactions/MotionReveal";

export default function FeaturedProduct() {
  return (
    <MotionReveal variant="scaleIn">
      <div className="premium-card p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-label text-text-muted mb-3">Featured Product</p>
            <h3 className="text-h2 mb-3">SBOS</h3>
            <p className="text-body text-text-muted max-w-xl">
              The Service Business Operating System. Diagnose structural risk, install proven systems, and build a
              business that runs without heroics.
            </p>
          </div>
          <Link
            href="/sbos"
            className="inline-flex items-center rounded-full border border-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition-all duration-300 ease-smooth hover:shadow-gold hover:border-accent-hover focus-ring"
            data-cta="Explore SBOS"
            data-cta-location="homepage-featured"
            data-cta-destination="sbos"
          >
            Explore SBOS
          </Link>
        </div>
      </div>
    </MotionReveal>
  );
}
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/sections/FeaturedProduct.tsx
git commit -m "refactor: migrate FeaturedProduct to MotionReveal"
```

---

## Task 16: Motion — Migrate CTASection to MotionReveal

**Files:**
- Modify: `components/sections/CTASection.tsx`

**Step 1: Replace ScrollReveal with MotionReveal**

Replace the entire contents of `components/sections/CTASection.tsx`:

```tsx
import Button from "@/components/primitives/Button";
import MotionReveal from "@/components/interactions/MotionReveal";

export default function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section-padding section-gradient-anchor inset-highlight">
      <div className="container-tight text-center">
        <MotionReveal>
          <h2 className="text-h2 text-white mb-4">{title}</h2>
        </MotionReveal>
        <MotionReveal delay={100}>
          <p className="text-body text-white/70 mb-10">{description}</p>
        </MotionReveal>
        <MotionReveal delay={200}>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href={primary.href}
              data-cta={primary.label}
              data-cta-location="cta-section"
              data-cta-destination={primary.href.replace("#", "")}
            >
              {primary.label}
            </Button>
            {secondary && (
              <Button
                href={secondary.href}
                variant="secondary"
                className="border-white/40 text-white hover:border-white"
                data-cta={secondary.label}
                data-cta-location="cta-section"
                data-cta-destination={secondary.href.replace("#", "")}
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/sections/CTASection.tsx
git commit -m "refactor: migrate CTASection to MotionReveal"
```

---

## Task 17: Motion — Migrate Homepage Hero to MotionReveal

**Files:**
- Modify: `app/(marketing)/page.tsx`

**Step 1: Replace ScrollReveal imports and usages in homepage**

In `app/(marketing)/page.tsx`:

1. Replace the import on line 8:
   - Remove: `import ScrollReveal from "@/components/interactions/ScrollReveal";`
   - Add: `import MotionReveal from "@/components/interactions/MotionReveal";`

2. Replace all `<ScrollReveal` with `<MotionReveal` and `</ScrollReveal>` with `</MotionReveal>` in the hero section (lines 46-82).

The hero section should become:
```tsx
<MotionReveal>
  <p className="text-label text-white/60 mb-4">Product Studio</p>
</MotionReveal>
<MotionReveal delay={100}>
  <h1 className="text-display mb-6">
    Structure, shipped.
  </h1>
</MotionReveal>
<MotionReveal delay={200}>
  <p className="text-body-large text-white/70 max-w-2xl mx-auto mb-10">
    Stintwell builds software tools that bring structure, compliance, and
    operational discipline to underserved industries.
  </p>
</MotionReveal>
<MotionReveal delay={300}>
  <div className="flex flex-col justify-center gap-4 sm:flex-row">
    ...buttons unchanged...
  </div>
</MotionReveal>
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add app/\(marketing\)/page.tsx
git commit -m "refactor: migrate homepage hero to MotionReveal"
```

---

## Task 18: Motion — Migrate SBOS Page Hero to MotionReveal

**Files:**
- Modify: `app/(marketing)/sbos/page.tsx`

**Step 1: Replace ScrollReveal with MotionReveal in SBOS page**

In `app/(marketing)/sbos/page.tsx`:

1. Replace the import on line 10:
   - Remove: `import ScrollReveal from "@/components/interactions/ScrollReveal";`
   - Add: `import MotionReveal from "@/components/interactions/MotionReveal";`

2. Replace all remaining `<ScrollReveal` with `<MotionReveal` and `</ScrollReveal>` with `</MotionReveal>` throughout the file (hero section lines 39-76, and the premium card on lines 119-127).

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add app/\(marketing\)/sbos/page.tsx
git commit -m "refactor: migrate SBOS page to MotionReveal"
```

---

## Task 19: Motion — Add AnimatePresence to UseCaseTabs

**Files:**
- Modify: `components/sections/UseCaseTabs.tsx`

**Step 1: Add exit animations to tab content**

In `components/sections/UseCaseTabs.tsx`:

1. Add imports at top:
```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cx } from "@/lib/classnames";
```

2. Inside the component function, add:
```tsx
const prefersReducedMotion = useReducedMotion();
```

3. Replace the tab content rendering (lines 47-94). Wrap the content div in `AnimatePresence`:

```tsx
<AnimatePresence mode="wait">
  {activeCase && (
    <motion.div
      key={activeCase.id}
      className="mt-10 grid gap-10 md:grid-cols-2 md:items-center"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      ...existing content unchanged...
    </motion.div>
  )}
</AnimatePresence>
```

Remove the `animate-fade-in-up` class and `style={{ animationDelay: "0ms" }}` from the existing content div since Framer Motion now handles the animation.

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/sections/UseCaseTabs.tsx
git commit -m "feat: add AnimatePresence exit animations to UseCaseTabs"
```

---

## Task 20: Motion — Remove Old ScrollReveal (cleanup)

**Files:**
- Modify: `styles/globals.css` (remove old reveal CSS)

After all migrations are complete, verify no files still import ScrollReveal:

Run: `grep -r "ScrollReveal" /Users/stevenbarclay/dev/stintwell-website/components /Users/stevenbarclay/dev/stintwell-website/app`

If the only result is the `ScrollReveal.tsx` file itself, proceed. **Do NOT delete `ScrollReveal.tsx` yet** — keep it as a fallback. Just remove the CSS that powered it.

**Step 1: Remove old reveal CSS classes**

In `styles/globals.css`, remove lines 139-157 (the `.reveal`, `.reveal.is-visible`, and `.reveal-delay-*` blocks):

```css
/* ─── Scroll reveal ─── */

.reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Stagger delays for scroll reveal ─── */

.reveal-delay-100 { transition-delay: 100ms; }
.reveal-delay-200 { transition-delay: 200ms; }
.reveal-delay-300 { transition-delay: 300ms; }
.reveal-delay-400 { transition-delay: 400ms; }
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds with no warnings about unused CSS.

**Step 3: Commit**

```bash
git add styles/globals.css
git commit -m "refactor: remove legacy ScrollReveal CSS (replaced by Framer Motion)"
```

---

## Task 21: Components — Border-Glow Hover Effect

**Files:**
- Modify: `styles/globals.css` (add card-glow utility)

**Step 1: Add border-glow CSS utility**

In `styles/globals.css`, after the `.card-hover:hover` block (line 101), add:

```css

.card-glow {
  position: relative;
  overflow: hidden;
}

.card-glow::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(168, 136, 47, 0.12), rgba(168, 136, 47, 0.04));
  opacity: 0;
  transition: opacity 400ms cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  z-index: 0;
}

.card-glow:hover::before {
  opacity: 1;
}

.card-glow > * {
  position: relative;
  z-index: 1;
}
```

**Step 2: Apply card-glow to grid components**

In `components/sections/FeatureGrid.tsx`, change the card div class:
```tsx
<div className="card card-hover card-glow p-6 bg-bg">
```

In `components/sections/ModuleGrid.tsx`, change the card div class:
```tsx
<div className="card card-hover card-glow p-6 bg-bg">
```

In `components/sections/CapabilityPillars.tsx`, add `card-glow` to the card div:
```tsx
<div className={cx("card card-hover card-glow p-6", index === 1 ? "bg-bg-alt" : "bg-muted")}>
```

In `components/sections/MethodologySteps.tsx`, change the card div class:
```tsx
<div className="card card-hover card-glow p-6 bg-bg">
```

**Step 3: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add styles/globals.css components/sections/FeatureGrid.tsx components/sections/ModuleGrid.tsx components/sections/CapabilityPillars.tsx components/sections/MethodologySteps.tsx
git commit -m "feat: add border-glow hover effect to all card grids"
```

---

## Task 22: Components — Button Active Press & Inset Highlight

**Files:**
- Modify: `styles/globals.css` (update premium-button)

**Step 1: Add active press feedback to premium-button**

In `styles/globals.css`, after the `.premium-button:hover` block (line 206), add:

```css

.premium-button:active {
  transform: scale(0.98);
  transition-duration: 100ms;
}
```

**Step 2: Add active press to premium-button-dark**

After the `.premium-button-dark:hover` block (line 243), add:

```css

.premium-button-dark:active {
  transform: scale(0.98);
  transition-duration: 100ms;
}
```

**Step 3: Add active press to secondary button variant**

In `components/primitives/Button.tsx`, the secondary variant already has `active:scale-[0.98]` — no change needed. Good.

**Step 4: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add styles/globals.css
git commit -m "feat: add active press feedback to premium buttons"
```

---

## Task 23: Hero — Create HeroVisual3D Component

**Files:**
- Create: `components/sections/HeroVisual3D.tsx`
- Create: `app/(marketing)/hero-v3.module.css`

**Step 1: Create the CSS module for 3D animations**

Create `app/(marketing)/hero-v3.module.css`:

```css
.stage {
  perspective: 1200px;
  width: 100%;
  max-width: 500px;
  height: 400px;
  position: relative;
}

.orbit {
  transform-style: preserve-3d;
  animation: gentleOrbit 12s ease-in-out infinite;
  width: 100%;
  height: 100%;
  position: relative;
}

.stage:hover .orbit {
  animation-play-state: paused;
}

@keyframes gentleOrbit {
  0%, 100% { transform: rotateX(2deg) rotateY(-3deg); }
  50% { transform: rotateX(-2deg) rotateY(3deg); }
}

.cardBack {
  transform: translateZ(-40px);
  position: absolute;
  top: 15%;
  left: 5%;
}

.cardMid {
  transform: translateZ(0px);
  position: absolute;
  top: 30%;
  left: 20%;
}

.cardFront {
  transform: translateZ(30px);
  position: absolute;
  top: 10%;
  right: 5%;
}

.floatingCard {
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.95), rgba(240, 237, 230, 0.85));
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 14px;
  padding: 20px 24px;
  box-shadow:
    0 0 0 1px rgba(17, 17, 17, 0.03),
    0 2px 4px rgba(17, 17, 17, 0.06),
    0 8px 24px rgba(17, 17, 17, 0.08);
  backdrop-filter: blur(8px);
  min-width: 200px;
}

.floatingIcon {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow:
    0 2px 8px rgba(17, 17, 17, 0.08);
}

.iconShield {
  background: rgba(168, 136, 47, 0.1);
  border: 1px solid rgba(168, 136, 47, 0.15);
  transform: translateZ(50px);
  top: 5%;
  right: 25%;
  animation: floatA 7s ease-in-out infinite;
}

.iconGear {
  background: rgba(17, 17, 17, 0.05);
  border: 1px solid rgba(17, 17, 17, 0.08);
  transform: translateZ(20px);
  bottom: 15%;
  left: 10%;
  animation: floatB 9s ease-in-out infinite;
}

.iconChart {
  background: rgba(5, 150, 105, 0.08);
  border: 1px solid rgba(5, 150, 105, 0.12);
  transform: translateZ(-20px);
  bottom: 5%;
  right: 15%;
  animation: floatC 8s ease-in-out infinite;
}

@keyframes floatA {
  0%, 100% { transform: translateZ(50px) translateY(0); }
  50% { transform: translateZ(50px) translateY(-8px); }
}

@keyframes floatB {
  0%, 100% { transform: translateZ(20px) translateY(0); }
  50% { transform: translateZ(20px) translateY(-6px); }
}

@keyframes floatC {
  0%, 100% { transform: translateZ(-20px) translateY(0); }
  50% { transform: translateZ(-20px) translateY(-10px); }
}

/* Studio lighting glows behind the 3D stage */
.glowGold {
  position: absolute;
  top: -10%;
  right: -15%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(168, 136, 47, 0.12) 0%, transparent 70%);
  filter: blur(140px);
  pointer-events: none;
}

.glowWarm {
  position: absolute;
  bottom: -10%;
  left: -15%;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(250, 250, 248, 0.08) 0%, transparent 70%);
  filter: blur(120px);
  pointer-events: none;
}

/* Reduced motion: disable all animations */
@media (prefers-reduced-motion: reduce) {
  .orbit {
    animation: none;
    transform: rotateX(2deg) rotateY(-3deg);
  }
  .iconShield,
  .iconGear,
  .iconChart {
    animation: none;
  }
}

/* Mobile: simpler, smaller */
@media (max-width: 767px) {
  .stage {
    max-width: 320px;
    height: 280px;
    margin: 0 auto;
  }
  .floatingCard {
    padding: 14px 18px;
    min-width: 150px;
    font-size: 0.85em;
  }
  .floatingIcon {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }
}
```

**Step 2: Create the HeroVisual3D component**

Create `components/sections/HeroVisual3D.tsx`:

```tsx
"use client";

import styles from "@/app/(marketing)/hero-v3.module.css";

export default function HeroVisual3D() {
  return (
    <div className="relative">
      {/* Studio lighting */}
      <div className={styles.glowGold} />
      <div className={styles.glowWarm} />

      <div className={styles.stage}>
        <div className={styles.orbit}>
          {/* Back layer: Module card */}
          <div className={`${styles.cardBack} ${styles.floatingCard}`}>
            <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-1 font-data">Module</p>
            <p className="text-sm font-semibold text-text">Financial Controls</p>
            <div className="mt-2 h-1 w-12 rounded-full bg-accent/30" />
          </div>

          {/* Mid layer: Compliance Check card */}
          <div className={`${styles.cardMid} ${styles.floatingCard}`}>
            <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-1 font-data">Compliance</p>
            <p className="text-sm font-semibold text-text">Structural Audit</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-success" />
              <span className="text-xs text-success font-data">Verified</span>
            </div>
          </div>

          {/* Front layer: Dashboard card */}
          <div className={`${styles.cardFront} ${styles.floatingCard}`}>
            <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-1 font-data">Dashboard</p>
            <p className="text-sm font-semibold text-text">Operating Score</p>
            <p className="text-2xl font-bold text-accent mt-1 font-data">87</p>
          </div>

          {/* Floating icons */}
          <div className={`${styles.floatingIcon} ${styles.iconShield}`}>
            <span aria-hidden="true">&#128737;</span>
          </div>
          <div className={`${styles.floatingIcon} ${styles.iconGear}`}>
            <span aria-hidden="true">&#9881;</span>
          </div>
          <div className={`${styles.floatingIcon} ${styles.iconChart}`}>
            <span aria-hidden="true">&#128200;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Step 3: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add components/sections/HeroVisual3D.tsx app/\(marketing\)/hero-v3.module.css
git commit -m "feat: create CSS 3D perspective HeroVisual3D component"
```

---

## Task 24: Hero — Integrate 3D Visual into Homepage

**Files:**
- Modify: `app/(marketing)/page.tsx` (update hero layout)

**Step 1: Update homepage hero to two-column layout with 3D visual**

In `app/(marketing)/page.tsx`:

1. Add import at top (after other imports):
```tsx
import HeroVisual3D from "@/components/sections/HeroVisual3D";
```

2. Replace the hero section (lines 37-83) with:

```tsx
{/* Hero — gradient bottom edge blending into bg */}
<section
  className="pt-24 pb-32 text-white"
  style={{
    background:
      "linear-gradient(180deg, #111111 0%, #111111 80%, var(--bg) 100%)",
  }}
>
  <div className="container-wide">
    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      {/* Text column */}
      <div className="text-center md:text-left">
        <MotionReveal>
          <p className="text-label text-white/60 mb-4">Product Studio</p>
        </MotionReveal>
        <MotionReveal delay={100}>
          <h1 className="text-display mb-6">
            Structure, shipped.
          </h1>
        </MotionReveal>
        <MotionReveal delay={200}>
          <p className="text-body-large text-white/70 max-w-lg mb-10">
            Stintwell builds software tools that bring structure, compliance, and
            operational discipline to underserved industries.
          </p>
        </MotionReveal>
        <MotionReveal delay={300}>
          <div className="flex flex-col gap-4 sm:flex-row md:justify-start justify-center">
            <Button
              href="/sbos"
              data-cta="Explore SBOS"
              data-cta-location="homepage-hero"
              data-cta-destination="sbos"
            >
              Explore SBOS
            </Button>
            <Button
              href="/sbos"
              variant="secondary"
              className="border-white/40 text-white hover:border-white"
              data-cta="View Product"
              data-cta-location="homepage-hero"
              data-cta-destination="sbos"
            >
              View Product
            </Button>
          </div>
        </MotionReveal>
      </div>

      {/* 3D Visual column */}
      <MotionReveal delay={200} variant="fadeIn" className="hidden md:block">
        <HeroVisual3D />
      </MotionReveal>
    </div>
  </div>
</section>
```

Note: The 3D visual is `hidden md:block` — on mobile, the hero remains text-only for a clean experience.

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Visual check**

Run dev server and verify:
- Desktop: Two-column layout with 3D visual on right
- Mobile: Text-only hero (3D visual hidden)
- 3D cards float at different depths
- Subtle oscillating rotation animation
- Animation pauses on hover

**Step 4: Commit**

```bash
git add app/\(marketing\)/page.tsx
git commit -m "feat: integrate CSS 3D hero visual into homepage two-column layout"
```

---

## Task 25: Transitions — Dark Section Ambient Color

**Files:**
- Modify: `styles/globals.css` (enhance dark section backgrounds)

**Step 1: Update anchor-section with ambient radials**

In `styles/globals.css`, replace the `.anchor-section` block (lines 105-108):

```css
.anchor-section {
  background:
    radial-gradient(circle at 75% 25%, rgba(168, 136, 47, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 25% 75%, rgba(100, 116, 139, 0.02) 0%, transparent 50%),
    var(--anchor);
  color: var(--anchor-text);
}
```

**Step 2: Update section-gradient-anchor**

Replace the `.section-gradient-anchor` block (lines 270-272):

```css
.section-gradient-anchor {
  background:
    radial-gradient(circle at 75% 25%, rgba(168, 136, 47, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 25% 75%, rgba(100, 116, 139, 0.02) 0%, transparent 50%),
    linear-gradient(180deg, var(--anchor) 0%, #1a1a1a 100%);
}
```

**Step 3: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add styles/globals.css
git commit -m "feat: add ambient radial color to dark sections"
```

---

## Task 26: Transitions — Gold Rule Enhancement

**Files:**
- Modify: `styles/globals.css` (add glow to gold-rule)

**Step 1: Update gold-rule with radial glow**

In `styles/globals.css`, replace the `.gold-rule` block (lines 288-297):

```css
.gold-rule {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--accent) 50%,
    transparent 100%
  );
  opacity: 0.3;
  position: relative;
}

.gold-rule::after {
  content: "";
  position: absolute;
  left: 20%;
  right: 20%;
  top: -8px;
  bottom: -8px;
  background: radial-gradient(ellipse at center, rgba(168, 136, 47, 0.08) 0%, transparent 70%);
  pointer-events: none;
}
```

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add styles/globals.css
git commit -m "feat: add radial glow enhancement to gold-rule dividers"
```

---

## Task 27: Transitions — Diagonal Section Divider

**Files:**
- Modify: `styles/globals.css` (add diagonal divider utility)

**Step 1: Add diagonal divider CSS**

In `styles/globals.css`, before the `/* Motion preference respect */` comment, add:

```css
/* ─── Diagonal section divider ─── */

.section-divider-diagonal {
  position: relative;
}

.section-divider-diagonal::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(3deg, var(--bg) 50%, transparent 50%);
  pointer-events: none;
  z-index: 2;
}
```

**Step 2: Apply to homepage hero**

In `app/(marketing)/page.tsx`, add `section-divider-diagonal` to the hero section's className or add it to the section element:

The hero `<section>` element should get an additional class. Since it uses inline style, add a wrapper or add the class directly. The simplest approach: add `className="pt-24 pb-32 text-white section-divider-diagonal"` to the hero section tag (keeping the existing inline style).

**Step 3: Apply to SBOS hero**

In `app/(marketing)/sbos/page.tsx`, add `section-divider-diagonal` to the hero section's className.

**Step 4: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add styles/globals.css app/\(marketing\)/page.tsx app/\(marketing\)/sbos/page.tsx
git commit -m "feat: add diagonal section dividers to hero sections"
```

---

## Task 28: Transitions — Dark Section Fade-Out Bottom

**Files:**
- Modify: `styles/globals.css` (add fade-out bottom utility)

**Step 1: Add fade-out bottom CSS**

In `styles/globals.css`, after the diagonal divider block, add:

```css
/* ─── Fade-out section bottom ─── */

.section-fadeout-bottom {
  position: relative;
}

.section-fadeout-bottom::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, var(--anchor));
  pointer-events: none;
}
```

This is used on dark sections to create a smooth fade at the bottom. The CTA section already uses `section-gradient-anchor` which handles this, so this utility is available for future use.

**Step 2: Verify the build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add styles/globals.css
git commit -m "feat: add fade-out bottom utility for dark section transitions"
```

---

## Task 29: Final Verification — Full Build + Visual Review

**Step 1: Full production build**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run build`
Expected: Build succeeds with no errors or warnings.

**Step 2: Run dev server for visual review**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run dev`

Check all pages:
- `/` — Homepage: verify 3D hero, noise texture, radial backgrounds, Framer Motion animations, border-glow cards, gold rule glow, diagonal divider, ambient dark sections
- `/sbos` — SBOS page: verify all motion migrations, radial backgrounds, enhanced typography, font-data on step numbers

**Step 3: Check reduced motion**

In browser devtools, enable "prefers-reduced-motion: reduce" and verify:
- All animations are disabled
- Content displays immediately without motion
- No visual breakage

**Step 4: Check mobile responsive**

Resize browser to mobile width and verify:
- 3D hero visual is hidden on mobile
- All grids collapse properly
- Typography scales correctly
- No horizontal overflow

**Step 5: Run linting**

Run: `cd /Users/stevenbarclay/dev/stintwell-website && npm run lint`
Expected: No errors.

---

## Summary

**Total tasks:** 29
**New files:** 5 (`MotionReveal.tsx`, `MotionStagger.tsx`, `MotionItem.tsx`, `HeroVisual3D.tsx`, `hero-v3.module.css`)
**Modified files:** 14
**New dependencies:** 2 (`framer-motion`, IBM Plex Mono via next/font)
**Commits:** ~29 (one per task)
