# Stintwell Design Tokens v1.1 — Implementation Guide

## Changelog from v1.0

| Change | Rationale |
|--------|-----------|
| Body text weight: 300 → 400 | Readability on long-form content; 300 now reserved for captions |
| Section-secondary: gray-50 → gray-100 | More visible alternating rhythm |
| Added `--accent-primary-text` (#7D6A4E) | WCAG AA compliant bronze for small text |
| Added link styles | Underlined charcoal → bronze-dark on hover |
| Added disabled/error state tokens | Complete form state coverage |
| Added z-index scale | Modal/dropdown layering |
| Added responsive typography | Mobile breakpoint at 768px |
| Defined tactical green role | Now explicitly = success states |

---

## Theme Strategy

**Light-first with dark anchors.** Content sections are light for readability. Hero, CTA blocks, and footer use dark charcoal for brand impact.

---

## Quick Start

1. Import the token file in your global CSS
2. Apply `.dark-section` class to hero, CTA, and footer containers
3. Alternate `.section-primary` and `.section-secondary` for content sections
4. Reference tokens via `var(--token-name)` in all component styles

---

## Page Structure (Pattern A)

```html
<header class="dark-section">
  <!-- Nav -->
</header>

<section class="dark-section">
  <!-- Hero -->
</section>

<section class="section-primary">
  <!-- Content block 1 -->
</section>

<section class="section-secondary">
  <!-- Content block 2 -->
</section>

<section class="section-primary">
  <!-- Content block 3 -->
</section>

<!-- Continue alternating... -->

<section class="dark-section">
  <!-- CTA block -->
</section>

<footer class="dark-section">
  <!-- Footer -->
</footer>
```

---

## Typography Usage

| Element | Class | Weight | Desktop Size | Mobile Size |
|---------|-------|--------|--------------|-------------|
| Hero headline | `.heading-display` | 800 | 48px | 36px |
| Page title | `.heading-page` | 700 | 36px | 30px |
| Section header | `.heading-section` | 700 | 30px | 24px |
| Card title | `.heading-card` | 600 | 24px | 24px |
| Subhead/Label | `.subhead` | 600 + uppercase | 14px | 14px |
| Body text | `.body-text` | 400 | 16px | 16px |
| Lead paragraph | `.body-lead` | 400 | 18px | 18px |
| Captions | `.body-caption` | 300 | 14px | 14px |

**Note:** Light weight (300) is now reserved for captions and tertiary text only. Body uses 400 for readability on long-form content.

---

## Bronze Color Usage (WCAG Compliance)

Bronze (#A68A64) has **3.5:1 contrast** on white — fails AA for small text.

| Use Case | Token | Compliant? |
|----------|-------|------------|
| Headlines (18px+) | `--accent-primary` | ✓ Yes |
| Buttons (white text on bronze) | `--btn-primary-bg` | ✓ Yes |
| Icons, decorative | `--accent-primary` | ✓ Yes |
| Subhead labels (uppercase) | `--accent-primary` | ✓ Yes |
| Body text links | `--accent-primary-text` | ✓ Yes |
| Form labels | `--accent-primary-text` | ✓ Yes |
| Small text (<18px) | `--accent-primary` | ✗ No |

**Rule:** If text is smaller than 18px and not bold, use `--accent-primary-text` (#7D6A4E) or default to charcoal.

---

## Button Patterns

```css
/* Primary (Bronze) */
.btn-primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  border: var(--border-width) solid var(--btn-primary-border);
  padding: var(--btn-padding-y) var(--btn-padding-x);
  font-weight: var(--btn-font-weight);
  border-radius: var(--btn-radius);
  transition: background var(--transition-fast);
}

.btn-primary:hover {
  background: var(--btn-primary-bg-hover);
}

.btn-primary:disabled {
  background: var(--btn-disabled-bg);
  color: var(--btn-disabled-text);
  border-color: var(--btn-disabled-border);
  cursor: not-allowed;
}

/* Secondary (Outlined) — auto-adapts in dark sections */
.btn-secondary {
  background: var(--btn-secondary-bg);
  color: var(--btn-secondary-text);
  border: var(--border-width) solid var(--btn-secondary-border);
  padding: var(--btn-padding-y) var(--btn-padding-x);
  font-weight: var(--btn-font-weight);
  border-radius: var(--btn-radius);
  transition: background var(--transition-fast);
}

.btn-secondary:hover {
  background: var(--btn-secondary-bg-hover);
}

.btn-secondary:disabled {
  background: var(--btn-disabled-bg);
  color: var(--btn-disabled-text);
  border-color: var(--btn-disabled-border);
  cursor: not-allowed;
}
```

---

## Input Patterns

```css
.input {
  background: var(--input-bg);
  color: var(--input-text);
  border: var(--border-width) solid var(--input-border);
  border-radius: var(--input-radius);
  padding: var(--input-padding-y) var(--input-padding-x);
  font-family: var(--font-family);
  font-size: var(--text-base);
  transition: border-color var(--transition-fast);
}

.input::placeholder {
  color: var(--input-placeholder);
}

.input:focus {
  border-color: var(--input-border-focus);
  outline: none;
}

/* Error state */
.input-error {
  border-color: var(--input-border-error);
}

.input-error-message {
  color: var(--feedback-error-text);
  font-size: var(--text-sm);
  margin-top: var(--space-1);
}

/* Disabled state */
.input:disabled {
  background: var(--input-disabled-bg);
  border-color: var(--input-disabled-border);
  color: var(--input-disabled-text);
  cursor: not-allowed;
}
```

---

## Card Pattern

```css
.card {
  background: var(--card-bg);
  border: var(--border-width) solid var(--card-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding);
  box-shadow: var(--card-shadow);
  transition: box-shadow var(--transition-fast);
}

.card:hover {
  box-shadow: var(--card-shadow-hover);
}
```

---

## Link Styles

Links are styled globally in the token file:

```css
/* Already included in tokens — no additional CSS needed */
a, .link {
  color: var(--link-color);              /* Charcoal (light) / White (dark) */
  text-decoration: underline;
  transition: color var(--transition-fast);
}

a:hover, .link:hover {
  color: var(--link-color-hover);        /* Bronze-dark (light) / Bronze-light (dark) */
}
```

For links that need bronze color at rest (e.g., CTAs), manually override:

```css
.link-accent {
  color: var(--accent-primary-text);     /* AA compliant bronze */
}
```

---

## Z-Index Usage

| Layer | Token | Use Case |
|-------|-------|----------|
| 0 | `--z-base` | Default stacking |
| 100 | `--z-dropdown` | Dropdown menus |
| 200 | `--z-sticky` | Sticky headers |
| 300 | `--z-fixed` | Fixed position elements |
| 400 | `--z-modal-backdrop` | Modal overlay |
| 500 | `--z-modal` | Modal content |
| 600 | `--z-popover` | Popovers, tooltips |
| 700 | `--z-tooltip` | Highest priority tooltips |

---

## Success/Error States

Tactical green (#2A453B) is now explicitly designated for success states:

```css
/* Success feedback */
.alert-success {
  background: var(--feedback-success-bg);
  color: var(--feedback-success-text);
  border: var(--border-width) solid var(--state-success);
}

/* Error feedback */
.alert-error {
  background: var(--feedback-error-bg);
  color: var(--feedback-error-text);
  border: var(--border-width) solid var(--state-error);
}
```

---

## Color Reference

| Token | Light Context | Dark Context |
|-------|---------------|--------------|
| `--surface-primary` | White | Charcoal |
| `--surface-secondary` | Gray-100 (#F3F4F6) | Charcoal-light |
| `--text-primary` | Charcoal | White |
| `--text-secondary` | Gray-600 | Steel |
| `--text-disabled` | Gray-400 | Gray-600 |
| `--accent-primary` | Bronze | Bronze |
| `--accent-primary-text` | Bronze-dark (#7D6A4E) | Bronze-dark |
| `--link-color` | Charcoal | White |
| `--link-color-hover` | Bronze-dark | Bronze-light |

---

## Brand Motif: Vertical Measure

Per brand guidelines — "thin bronze vertical line used sparingly (1-2 times per page)":

```css
.vertical-measure {
  width: var(--motif-measure-width);     /* 2px */
  background: var(--motif-measure-color); /* Bronze */
  height: 100%;
}
```

Use adjacent to key statistics, pull quotes, or as section dividers. **Sparingly.**

---

## Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

---

## Responsive Breakpoint

Mobile styles kick in at **767px and below**. The token file handles:

- Reduced headline sizes (48px → 36px, etc.)
- Reduced section padding
- Reduced container padding (24px → 16px)

No additional media queries needed for typography if using the utility classes.
