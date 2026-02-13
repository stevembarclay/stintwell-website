# Stintwell Design System

## Typography Scale

### Utility Classes

Always use utility classes instead of manual Tailwind:

- `.text-display` - Hero headlines (clamp 2.5rem -> 4.5rem, -0.04em tracking)
- `.text-h1` - Page titles (clamp 2rem -> 3.5rem, -0.03em tracking)
- `.text-h2` - Section headings (clamp 1.75rem -> 2.75rem, -0.02em tracking)
- `.text-h3` - Subsection headings (clamp 1.25rem -> 1.75rem)
- `.text-body` - Body text (clamp 1rem -> 1.125rem)
- `.text-body-large` - Lead paragraphs (clamp 1.0625rem -> 1.1875rem)
- `.text-label` - Labels/meta text (0.75rem, uppercase, 0.16em tracking)

### When to Use

Wrong:

```tsx
<p className="text-xs uppercase tracking-[0.2em] text-text-muted">Label</p>
```

Correct:

```tsx
<p className="text-label">Label</p>
```

## Card System

### Utility Classes

- `.card` - Base card (muted background, soft shadow, rounded-md)
- `.card-hover` - Hoverable card (lift + scale on hover)
- `.card-glow` - Card with gold gradient glow on hover

### Padding Standards

- Dense cards (labels, metadata): `p-6` (24px)
- Content cards (forms, rich content): `p-8` (32px)

### When to Use

Use `.card-hover` when card contains clickable content or entire card is clickable.
Use `.card-glow` to draw attention to featured elements.

Wrong:

```tsx
<div className="bg-muted rounded-lg border border-black/6 p-6">
```

Correct:

```tsx
<div className="card card-hover card-glow p-6">
```

## Component Sizing

### Button Sizes

- `size="sm"` - Tight spaces, inline actions (px-4 py-2 text-xs)
- `size="md"` - Default, most CTAs (px-6 py-3 text-sm)
- `size="lg"` - Hero CTAs, primary conversions (px-8 py-4 text-base)

### Icon Sizes

- `size="sm"` - Inline with text (16px)
- `size="md"` - Default standalone (20px)
- `size="lg"` - Card/feature icons (24px)
- `size="xl"` - Hero visuals (32px)

## Color Tokens

Always use CSS custom properties via Tailwind token names:

- `bg` / `text` - Primary backgrounds and text
- `bg-alt` / `text-muted` - Secondary backgrounds and text
- `accent` / `accent-hover` - Brand gold
- `anchor` / `anchor-text` - Dark sections
- `success` / `error` - Status colors

Wrong:

```tsx
className="bg-[#fafaf8] text-[#6b6b6b]"
```

Correct:

```tsx
className="bg-bg text-text-muted"
```

## Shadow System

- `shadow-soft` - Default card elevation
- `shadow-lift` - Hover state depth
- `shadow-gold` - Gold-tinted accent elements
- `shadow-glow` - Featured elements with gold glow

## Animation Timing

### Stagger Delays

- 3-column grid: `staggerDelay={0.06}`
- 2-column grid: `staggerDelay={0.08}`
- Large grid (9+ items): `staggerDelay={0.05}`
- Vertical list: `staggerDelay={0.1}`

### Transition Durations

- Micro-interactions (click): 100ms
- Standard transitions (hover/focus): 300ms
- Content reveals: 400-600ms

## Accessibility

### Focus Indicators

All interactive elements must include `.focus-ring`.

### ARIA Attributes

Tabs:

- Container: `role="tablist"`, `aria-label`
- Buttons: `role="tab"`, `aria-selected`, `aria-controls`, `id`
- Panels: `role="tabpanel"`, `aria-labelledby`, `id`

Forms:

- Pair `<label>` with `<input>` via `htmlFor` and `id`
- Use `aria-invalid` for error states
- Use `aria-describedby` for helper/error text

## File Organization

```text
components/
  primitives/      # Base components (Button, Input, Select, Icon)
  sections/        # Page sections (FeatureGrid, UseCaseTabs)
  interactions/    # Animation wrappers (MotionStagger, MotionReveal)
  layout/          # Site structure (Navbar, Footer)
```
