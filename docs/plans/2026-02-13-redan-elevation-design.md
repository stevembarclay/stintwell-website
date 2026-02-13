# Stintwell Visual Elevation — Redan-Grade Design Upgrade

**Date**: 2026-02-13
**Status**: Approved
**Approach**: Layer-by-Layer Elevation (bottom-up through design stack)

## Goal

Systematically upgrade Stintwell's visual sophistication to match Redan Compliance's institutional-grade polish. Current Stintwell design maturity: ~88/100. Target: 95+/100.

## Key Decisions

- **Typography**: Keep Inter (no serif), but push hierarchy harder with tighter tracking, wider weight range, and add mono font for data
- **Hero**: Add CSS 3D perspective visual with floating system cards
- **Motion**: Migrate from hand-rolled ScrollReveal to Framer Motion
- **Approach**: Layer-by-layer, bottom-up through the design stack

## Layer 1: Foundation — Textures & Ambient Backgrounds

### Noise Texture Overlay
- Inline SVG `feTurbulence` filter applied via `::before` pseudo-element
- Opacity: `0.015` — adds analog warmth without visual noise
- Applied globally to marketing layout

### Radial Gradient Backgrounds
- Replace flat `bg`/`bg-alt` with multi-point radial gradients
- Gold tints at 0.02 opacity positioned at 15%/20% and 85%/80%
- Layered over existing linear gradients

### Enhanced Shadow Tokens
- Add `--shadow-glow` variant with faint gold tint for featured elements

**Files**: `globals.css`, `tokens.css`

## Layer 2: Typography — Enhanced Hierarchy

### Tighter Tracking on Display
- Display: `-0.04em` (from `-0.03em`)
- H1: `-0.03em` (from `-0.02em`)
- Add `body-large` variant: `1.125rem` / `1.75` line-height for lead paragraphs

### Mono Font for Data
- Add IBM Plex Mono or JetBrains Mono
- Always with `tabular-nums`
- Use for pricing, statistics, module counts

### Gold Gradient Text
```css
.text-gradient-gold {
  background: linear-gradient(135deg, var(--accent) 0%, #c9a84c 50%, #e8d5bd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Files**: `tokens.css`, `globals.css`, `layout.tsx` (font import)

## Layer 3: Motion — Framer Motion Migration

### New Dependencies
- `framer-motion`

### New Components
- `MotionReveal` — Replaces `ScrollReveal`, uses `whileInView` with spring physics
- `MotionStagger` — Parent orchestrator for staggered child animations

### Motion Tokens
- Snappy: `0.2s ease-out` (buttons, toggles)
- Smooth: `0.3s cubic-bezier(0.22, 1, 0.36, 1)` (cards, panels)
- Spring: `stiffness: 100, damping: 20` (featured actions)
- Elegant: `0.5s cubic-bezier(0.22, 1, 0.36, 1)` (page reveals)

### Exit Animations
- `AnimatePresence` on route transitions and tab content (UseCaseTabs)

### Accessibility
- `useReducedMotion()` hook — instant display when reduced motion preferred

**Files**: New `MotionReveal.tsx`, `MotionStagger.tsx`. Migrate all `ScrollReveal` usages.

## Layer 4: Components — Cards, Buttons & Interactive Elements

### Border-Glow Hover
- `::before` pseudo-element with gold gradient, fades in on hover
- Applied to feature cards, capability pillars, module grid items

### Theme-Variant Cards
- **Gold**: Gold-tinted gradient background for featured content
- **Muted**: Warm neutral gradient for secondary content

### Navigation Cards
- Arrow icon translates right on hover
- Radial gradient glow from icon corner on hover
- Full-card click target

### Button Enhancements
- `scale(0.98)` on `:active` for press feedback
- Inset top-edge highlight: `inset 0 1px 0 rgba(255, 255, 255, 0.1)`

**Files**: `globals.css`, `FeatureGrid.tsx`, `CapabilityPillars.tsx`, `Button.tsx`

## Layer 5: Hero — CSS 3D Perspective Visual

### 3D Stage
- `perspective(1200px)` container
- `transform-style: preserve-3d` for true Z-depth
- 12s oscillating rotation animation
- Hover parallax: mouse position maps to rotateX/Y

### Floating Elements
- "Module" card at `translateZ(-40px)` (back)
- "Compliance Check" card at `translateZ(0px)` (mid)
- "Dashboard" card at `translateZ(30px)` (front)
- Small floating icons at various depths

### Studio Lighting
- Gold glow: top-right, 140px blur, behind 3D stage
- Warm white glow: bottom-left, 120px blur

### Layout Change
- Desktop: Two-column (text left, 3D visual right)
- Mobile: Stacked (text top, visual below, simpler animation)

**Files**: New `HeroVisual3D.tsx`, `hero-v3.module.css`. Update homepage hero.

## Layer 6: Section Transitions — Dividers & Gradient Blends

### Diagonal Dividers
- 3-degree angled `::after` pseudo-element
- Used sparingly: hero→content, CTA→footer

### Richer Gradient Transitions
- 120px fade-out bottoms on dark sections
- Radial color bleeds at section boundaries

### Gold Rule Enhancement
- Add radial glow behind existing gold-rule divider

### Dark Section Ambient Color
- Positioned gold radial at 0.03 opacity
- Cool blue-gray radial at 0.02 opacity on opposite side
- Prevents "dead black", creates atmospheric depth

**Files**: `globals.css`, homepage and SBOS page section wrappers

## Architecture Notes

- No new pages — all changes are to existing design system and components
- Design tokens remain CSS custom properties (no migration to JS tokens)
- Framer Motion is the only new dependency
- All animations respect `prefers-reduced-motion`
- Existing component APIs preserved where possible
