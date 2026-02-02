# SBOS Landing Page Polish — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform stintwell.com/sbos-landing.html from a 52/100 to institutional-grade quality through visual polish, accessibility, copy refinement, and trust signals — no new features.

**Architecture:** Single static HTML file (`sbos-landing.html`) using CDN Tailwind with inline `<style>` block and inline `<script>`. All changes are CSS, HTML structure, and minor JS additions within this one file.

**Tech Stack:** HTML, Tailwind CSS (CDN config), Lucide Icons, vanilla JS

**Source file:** `/Users/stevenbarclay/dev/stintwell-website/sbos-landing.html` (~880 lines)

**Verification:** After each task group, take a Playwright screenshot of `https://localhost` or open the file locally to verify. Since this is a static HTML file served via GitHub Pages, changes can be verified by opening the file directly in a browser.

---

## Pre-Implementation: Read Context

Before starting, read these files:
- `/Users/stevenbarclay/dev/stintwell-website/sbos-landing.html` (the file you'll edit — read it fully)
- This plan file

**Working directory:** `/Users/stevenbarclay/dev/stintwell-website`

---

## Task 1: Replace the `<style>` Block

**Files:**
- Modify: `sbos-landing.html` — replace the entire `<style>...</style>` block (lines 70-111)

**Step 1: Replace the style block**

Find the existing `<style>` block and replace it entirely with:

```html
<style>
  body { font-family: 'Inter', sans-serif; }

  /* Animations */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .fade-in { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .fade-in-delay-1 { animation-delay: 0.1s; opacity: 0; }
  .fade-in-delay-2 { animation-delay: 0.2s; opacity: 0; }
  .fade-in-delay-3 { animation-delay: 0.3s; opacity: 0; }

  /* Hero depth */
  .hero-pattern {
    background-image: radial-gradient(#A68A64 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.05;
  }
  .hero-glow {
    background: radial-gradient(ellipse 60% 50% at 50% 40%, rgba(166, 138, 100, 0.08), transparent);
  }

  /* Tab styling */
  .tab-btn {
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 2px;
  }
  .tab-btn:hover:not(.active) {
    border-color: rgba(166, 138, 100, 0.4);
    color: rgba(166, 138, 100, 0.8);
  }
  .tab-btn.active {
    border-color: #A68A64;
    color: #A68A64;
    background: rgba(166, 138, 100, 0.08);
    box-shadow: 0 0 20px rgba(166, 138, 100, 0.05);
  }
  .tab-content { display: none; }
  .tab-content.active { display: block; animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1); }

  /* Card hover - institutional */
  .module-card {
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    background: linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005));
  }
  .module-card:hover {
    border-color: #A68A64;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(166, 138, 100, 0.1);
  }

  /* Differentiator cards */
  .diff-card {
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .diff-card:hover {
    border-color: rgba(166, 138, 100, 0.3);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  }

  /* Mock browser glow */
  .mock-browser {
    box-shadow: 0 25px 60px rgba(0,0,0,0.4), 0 0 40px rgba(166, 138, 100, 0.06);
  }

  /* CTA buttons */
  .cta-primary {
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .cta-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(166, 138, 100, 0.3);
    background-color: #b89b74;
  }
  .cta-secondary {
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .cta-secondary:hover {
    border-color: #A68A64;
    background: rgba(166, 138, 100, 0.05);
  }

  /* Tabular nums for data */
  .data-value {
    font-variant-numeric: tabular-nums;
  }

  /* Section variation */
  .section-elevated {
    background: linear-gradient(180deg, rgba(255,255,255,0.015) 0%, transparent 100%);
  }

  /* Flow connectors (desktop only) */
  @media (min-width: 768px) {
    .flow-connector::after {
      content: '';
      position: absolute;
      right: -16px;
      top: 32px;
      width: 32px;
      height: 2px;
      background: linear-gradient(90deg, #A68A64, transparent);
    }
  }

  /* Step number gradient */
  .step-circle {
    background: linear-gradient(135deg, rgba(166, 138, 100, 0.25), rgba(166, 138, 100, 0.08));
    border: 1px solid rgba(166, 138, 100, 0.15);
  }

  /* Icon container gradient */
  .icon-container {
    background: linear-gradient(135deg, rgba(166, 138, 100, 0.2), rgba(166, 138, 100, 0.05));
    border: 1px solid rgba(166, 138, 100, 0.1);
  }

  /* Scroll reveal */
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.08s; }
  .reveal-delay-2 { transition-delay: 0.16s; }
  .reveal-delay-3 { transition-delay: 0.24s; }
  .reveal-delay-4 { transition-delay: 0.32s; }
  .reveal-delay-5 { transition-delay: 0.40s; }
  .reveal-delay-6 { transition-delay: 0.48s; }
  .reveal-delay-7 { transition-delay: 0.56s; }
  .reveal-delay-8 { transition-delay: 0.64s; }
</style>
```

**Step 2: Commit**

```bash
git add sbos-landing.html
git commit -m "style: replace CSS with institutional-grade animation and interaction system"
```

---

## Task 2: Fix Schema.org and Add Favicon Reference

**Files:**
- Modify: `sbos-landing.html` — lines in `<head>`

**Step 1: Fix Schema.org description**

Find this string in the structured data JSON-LD:
```
"description": "SBOS (Service Business Operating System) - The operating system for high-performance service businesses"
```

Replace with:
```
"description": "SBOS (Stintwell Business Operating System) - The operating system for high-performance businesses"
```

**Step 2: Add favicon link**

After the `<link rel="canonical"...>` line (line 8), add:
```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='20' y='20' width='40' height='15' fill='%23232931'/><rect x='20' y='20' width='15' height='40' fill='%23232931'/><rect x='40' y='65' width='40' height='15' fill='%23A68B5B'/><rect x='65' y='40' width='15' height='40' fill='%23A68B5B'/></svg>">
```

This reuses the existing logo SVG as an inline data URI favicon — no new file needed.

**Step 3: Commit**

```bash
git add sbos-landing.html
git commit -m "fix: correct brand name in Schema.org and add inline SVG favicon"
```

---

## Task 3: Typography Weight and Contrast Fixes

**Files:**
- Modify: `sbos-landing.html` — multiple locations

**Step 1: Fix H1 weight**

Find:
```html
<h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
```

Replace with:
```html
<h1 class="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]">
```

**Step 2: Fix all section H2 weights**

There are 5 h2 elements on the page. For each one, change `font-bold` to `font-semibold`. Find each:

1. `<h2 class="text-3xl md:text-4xl font-bold mb-4">Who Uses SBOS?</h2>`
2. `<h2 class="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>`
3. `<h2 class="text-3xl md:text-4xl font-bold mb-4">9 Integrated Modules</h2>`
4. `<h2 class="text-3xl md:text-4xl font-bold mb-4">Not Another Framework</h2>`
5. `<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to See Your Structural Truth?</h2>`

Replace `font-bold` with `font-semibold` in each.

**Step 3: Fix module card H3 weights**

For ALL h3 elements inside module cards (the 9 modules section), change `font-bold` to `font-semibold`. These are lines like:
```html
<h3 class="font-bold mb-2">SOP Library</h3>
```
→
```html
<h3 class="font-semibold mb-2">SOP Library</h3>
```

Do this for all 9 module h3s AND the 3 differentiator h3s ("Diagnosis Before Execution", "Phase Gating", "Structural, Not Cultural").

**Step 4: Fix contrast — replace text-gray-600 with text-gray-500 for readability**

Find ALL instances of `text-gray-600` in the file. There are approximately 8 occurrences used for low-priority text. Replace each with `text-gray-500` EXCEPT where `text-gray-600` is used in the GA tracking section (that's JS, not display text).

Specific locations to change:
- `<span class="text-xs text-gray-600 font-mono">` → `text-xs text-gray-500 font-mono`
- `<p class="text-xs text-gray-600 mt-6 uppercase tracking-wider">` → `text-xs text-gray-500 mt-6 uppercase tracking-wider`
- `<p class="text-center text-xs text-gray-600 mt-4">` → `text-center text-xs text-gray-500 mt-4`
- `<p class="text-xs text-gray-600 mt-4 text-center">` (appears 2 times) → `text-xs text-gray-500 mt-4 text-center`
- `<p class="text-xs text-gray-600">` → `text-xs text-gray-500`
- `<p class="text-gray-700 text-xs">` (footer tagline) → `text-gray-500 text-xs`

**Step 5: Add tabular-nums to all numeric data**

Find ALL score/metric number elements and add the `data-value` class. Specifically:

1. The SBOS Index score: `<p class="text-5xl font-bold text-bronze mb-1">2.3</p>` → add `data-value` class
2. Each pillar score span: `<span class="text-xs text-gray-400 w-8">1.8</span>` (5 of these) → add `data-value` class
3. M&A output values: `<span class="font-bold text-yellow-400">2.4 / 5.0</span>` etc. → add `data-value` class to all 6 value spans in the M&A diligence output
4. Portfolio view scores: the `text-xs text-gray-500` lines containing "Score: 3.4" etc. → add `data-value` class
5. The bottom CTA section score in the duplicate SBOS Index (if it exists in the final CTA)

**Step 6: Commit**

```bash
git add sbos-landing.html
git commit -m "style: fix typography weights, contrast ratios, and tabular-nums on data"
```

---

## Task 4: Hero Section Refinements

**Files:**
- Modify: `sbos-landing.html` — hero section (~lines 179-286)

**Step 1: Add hero glow layer**

Find:
```html
<div class="absolute inset-0 hero-pattern"></div>
```

Add immediately after it:
```html
<div class="absolute inset-0 hero-glow"></div>
```

**Step 2: Rewrite hero subhead for concrete outcomes**

Find:
```html
<p class="text-xl text-gray-400 mb-4 max-w-3xl mx-auto font-light leading-relaxed">
  Most businesses scale chaos because they don't know what's structurally broken.
</p>
<p class="text-lg text-gray-500 mb-10 max-w-2xl mx-auto font-light">
  SBOS assesses your operational weak points, surfaces hidden risk, and installs the systems to fix it—automatically.
</p>
```

Replace with:
```html
<p class="text-xl text-gray-400 mb-3 max-w-2xl mx-auto font-light leading-relaxed">
  Answer 20 questions. Get your structural health score.<br class="hidden sm:block">
  Activate the systems to fix what's broken.
</p>
<p class="text-base text-gray-500 mb-10 max-w-xl mx-auto">
  SBOS surfaces hidden operational risk and installs prescriptions automatically — SOPs, scorecards, and meeting cadences matched to your specific weak points.
</p>
```

**Step 3: Apply CTA button classes**

Find the hero CTA buttons:
```html
<a href="/sbos-signup.html" class="bg-bronze hover:bg-white hover:text-charcoal text-white font-semibold px-8 py-4 text-sm uppercase tracking-widest transition-all shadow-lg text-center">
  Take the Quick Scan
</a>
<a href="/sbos-signup.html" class="px-8 py-4 border border-gray-700 hover:border-bronze text-white font-semibold text-sm uppercase tracking-widest transition-all text-center">
  Request Structural Audit
</a>
```

Replace with:
```html
<a href="/sbos-signup.html" class="cta-primary bg-bronze text-white font-semibold px-8 py-4 text-sm uppercase tracking-widest shadow-lg text-center">
  Take the Quick Scan
</a>
<a href="/sbos-signup.html" class="cta-secondary px-8 py-4 border border-gray-700 text-white font-semibold text-sm uppercase tracking-widest text-center">
  Request Structural Audit
</a>
```

**Step 4: Simplify the helper text under CTAs**

Find:
```html
<p class="text-xs text-gray-600 mt-6 uppercase tracking-wider">Quick Scan: 5 minutes, 20 questions • Structural Audit: By request only</p>
```

Replace with:
```html
<p class="text-xs text-gray-500 mt-6 uppercase tracking-wider">Free • 5 minutes • 20 questions</p>
```

**Step 5: Add mock-browser class to the SBOS Index preview**

Find:
```html
<div class="bg-gray-900 rounded-lg p-1 shadow-2xl border border-gray-800">
```

Replace with:
```html
<div class="mock-browser bg-gray-900 rounded-lg p-1 border border-gray-800/80">
```

**Step 6: Also apply CTA classes to the BOTTOM CTA section**

Find the bottom CTA buttons (in the "Ready to See Your Structural Truth?" section, ~line 779-785) and apply the same `cta-primary` / `cta-secondary` classes, removing the old `hover:bg-white hover:text-charcoal` and `hover:border-bronze` inline classes. Same pattern as Step 3.

**Step 7: Also apply CTA class to in-tab CTA buttons**

Find all 3 tab-section CTA buttons (lines ~350, ~427, ~502). They look like:
```html
<a href="/sbos-signup.html" class="inline-block bg-bronze hover:bg-white hover:text-charcoal text-white font-semibold px-6 py-3 text-sm uppercase tracking-widest transition-all">
```

Replace each with:
```html
<a href="/sbos-signup.html" class="cta-primary inline-block bg-bronze text-white font-semibold px-6 py-3 text-sm uppercase tracking-widest">
```

**Step 8: Commit**

```bash
git add sbos-landing.html
git commit -m "style: refine hero copy, CTA hover states, and mock browser glow"
```

---

## Task 5: Add Social Proof / Pricing Strip

**Files:**
- Modify: `sbos-landing.html` — insert new section after hero, before use-cases

**Step 1: Add social proof strip**

Find the closing tag of the hero section:
```html
</section>

<!-- Three Use Cases Section -->
```

Insert between them:
```html
<!-- Social Proof Strip -->
<section class="border-t border-gray-900 py-8">
  <div class="max-w-4xl mx-auto px-6">
    <div class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-center">
      <p class="text-xs text-gray-500 uppercase tracking-wider">Built for operators who take structure seriously</p>
      <div class="flex items-center gap-4 sm:gap-6">
        <span class="text-gray-400 text-sm font-medium data-value">$299<span class="text-gray-500">/mo</span></span>
        <span class="w-px h-4 bg-gray-800"></span>
        <span class="text-gray-400 text-sm">9 modules</span>
        <span class="w-px h-4 bg-gray-800"></span>
        <span class="text-gray-400 text-sm">Prescription-driven</span>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Commit**

```bash
git add sbos-landing.html
git commit -m "feat: add social proof strip with pricing visibility"
```

---

## Task 6: Section Background Differentiation

**Files:**
- Modify: `sbos-landing.html` — section wrapper elements

**Step 1: Add elevated treatment to alternating sections**

The current page alternates between `bg-charcoal` and `bg-gray-950` but they're nearly identical. Add the `section-elevated` class to these sections to create subtle variation:

1. **How It Works section** — Find:
   ```html
   <section id="how-it-works" class="py-24 border-t border-gray-900">
   ```
   Replace with:
   ```html
   <section id="how-it-works" class="py-24 border-t border-gray-900 section-elevated">
   ```

2. **CTA section** — Find:
   ```html
   <section class="py-24 border-t border-gray-900">
   <div class="max-w-4xl mx-auto px-6 text-center">
     <h2 class="text-3xl
   ```
   Add `section-elevated` class to this section tag.

**Step 2: Commit**

```bash
git add sbos-landing.html
git commit -m "style: add subtle gradient elevation to alternating sections"
```

---

## Task 7: Module Cards — Add Hover Transform and Icon Gradient

**Files:**
- Modify: `sbos-landing.html` — the 9 module cards (~lines 617-725)

**Step 1: Add module-card class to all 9 module cards**

Each module card currently looks like:
```html
<div class="bg-charcoal border border-gray-800 rounded-lg p-6 hover:border-bronze transition-all">
```

Replace each (all 9) with:
```html
<div class="module-card border border-gray-800 rounded-lg p-6">
```

Note: Remove `bg-charcoal`, `hover:border-bronze`, and `transition-all` — all handled by `.module-card` class now.

**Step 2: Add icon-container class to all 9 module icon wrappers**

Each module icon container currently looks like:
```html
<div class="w-10 h-10 rounded bg-bronze/20 flex items-center justify-center mb-4">
```

Replace each (all 9) with:
```html
<div class="icon-container w-10 h-10 rounded flex items-center justify-center mb-4">
```

Note: Remove `bg-bronze/20` — replaced by `.icon-container` gradient.

**Step 3: Commit**

```bash
git add sbos-landing.html
git commit -m "style: add institutional hover transforms and gradient icons to module cards"
```

---

## Task 8: Differentiator Cards — Add Hover

**Files:**
- Modify: `sbos-landing.html` — the 3 "Not Another Framework" cards (~lines 745-769)

**Step 1: Add diff-card class to all 3 differentiator cards**

Each currently looks like:
```html
<div class="bg-charcoal border border-gray-800 rounded p-6">
```

Replace each (all 3) with:
```html
<div class="diff-card bg-charcoal border border-gray-800 rounded p-6">
```

**Step 2: Add icon-container to differentiator icon wrappers**

Same pattern as Task 7 Step 2 — replace `bg-bronze/20` with `icon-container` class on the 3 icon containers in this section.

**Step 3: Commit**

```bash
git add sbos-landing.html
git commit -m "style: add hover transforms to differentiator cards"
```

---

## Task 9: How It Works — Fix Flow Steps

**Files:**
- Modify: `sbos-landing.html` — the 4 flow steps (~lines 557-589)

**Step 1: Replace flow-step with flow-connector and step-circle**

Find the 4 flow step divs. The first 3 currently use `class="flow-step text-center"` and the 4th uses `class="text-center"`.

Replace all 4 with this pattern:

Step 1:
```html
<div class="flow-connector relative text-center">
  <div class="step-circle w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
    <span class="text-bronze font-bold text-xl data-value">1</span>
  </div>
  <h3 class="font-semibold mb-2">Take the Scan</h3>
  <p class="text-gray-500 text-sm">Answer questions across 5 pillars: Financial, Operational, Leadership, Commercial, Governance.</p>
</div>
```

Step 2:
```html
<div class="flow-connector relative text-center">
  <div class="step-circle w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
    <span class="text-bronze font-bold text-xl data-value">2</span>
  </div>
  <h3 class="font-semibold mb-2">Get Your Index</h3>
  <p class="text-gray-500 text-sm">Receive your SBOS Index: maturity score (1-5), red flags by severity, and phase assignment.</p>
</div>
```

Step 3:
```html
<div class="flow-connector relative text-center">
  <div class="step-circle w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
    <span class="text-bronze font-bold text-xl data-value">3</span>
  </div>
  <h3 class="font-semibold mb-2">See Your Roadmap</h3>
  <p class="text-gray-500 text-sm">Understand exactly what to fix first based on severity and sequence logic.</p>
</div>
```

Step 4 (no connector):
```html
<div class="text-center">
  <div class="step-circle w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
    <span class="text-bronze font-bold text-xl data-value">4</span>
  </div>
  <h3 class="font-semibold mb-2">Activate Prescriptions</h3>
  <p class="text-gray-500 text-sm">One click installs SOPs, scorecards, and meeting cadences based on your specific flags.</p>
</div>
```

**Step 2: Commit**

```bash
git add sbos-landing.html
git commit -m "style: replace flow-step arrows with gradient connectors and step circles"
```

---

## Task 10: Accessibility — ARIA Tabs and Landmarks

**Files:**
- Modify: `sbos-landing.html` — tab section and page structure

**Step 1: Add `<main>` landmark**

Find:
```html
</nav>

<!-- Hero Section -->
```

Replace with:
```html
</nav>

<main>

<!-- Hero Section -->
```

Then find the opening of `<footer`:
```html
<!-- Footer -->
<footer class="bg-charcoal border-t border-gray-800 py-8">
```

Add `</main>` before it:
```html
</main>

<!-- Footer -->
<footer class="bg-charcoal border-t border-gray-800 py-8">
```

**Step 2: Add ARIA attributes to tab interface**

Find the tab button container:
```html
<div class="flex justify-center gap-2 mb-12 flex-wrap">
```

Replace with:
```html
<div class="flex justify-center gap-2 mb-12 flex-wrap" role="tablist" aria-label="Use case categories">
```

Find each tab button and add ARIA attributes:

Button 1:
```html
<button onclick="showTab('ma')" class="tab-btn active px-6 py-3 border border-gray-700 text-sm font-semibold uppercase tracking-wider transition-all" data-tab="ma">
```
→
```html
<button onclick="showTab('ma')" class="tab-btn active px-6 py-3 border border-gray-700 text-sm font-semibold uppercase tracking-wider" data-tab="ma" role="tab" aria-selected="true" aria-controls="tab-ma" id="btn-ma">
```

Button 2:
```html
<button onclick="showTab('operator')" class="tab-btn px-6 py-3 border border-gray-700 text-sm font-semibold uppercase tracking-wider transition-all" data-tab="operator">
```
→
```html
<button onclick="showTab('operator')" class="tab-btn px-6 py-3 border border-gray-700 text-sm font-semibold uppercase tracking-wider" data-tab="operator" role="tab" aria-selected="false" aria-controls="tab-operator" id="btn-operator">
```

Button 3:
```html
<button onclick="showTab('owner')" class="tab-btn px-6 py-3 border border-gray-700 text-sm font-semibold uppercase tracking-wider transition-all" data-tab="owner">
```
→
```html
<button onclick="showTab('owner')" class="tab-btn px-6 py-3 border border-gray-700 text-sm font-semibold uppercase tracking-wider" data-tab="owner" role="tab" aria-selected="false" aria-controls="tab-owner" id="btn-owner">
```

**Step 3: Add role="tabpanel" to tab content divs**

Find each tab content div and add `role="tabpanel"` and `aria-labelledby`:

```html
<div id="tab-ma" class="tab-content active">
```
→
```html
<div id="tab-ma" class="tab-content active" role="tabpanel" aria-labelledby="btn-ma">
```

```html
<div id="tab-operator" class="tab-content">
```
→
```html
<div id="tab-operator" class="tab-content" role="tabpanel" aria-labelledby="btn-operator">
```

```html
<div id="tab-owner" class="tab-content">
```
→
```html
<div id="tab-owner" class="tab-content" role="tabpanel" aria-labelledby="btn-owner">
```

**Step 4: Update the showTab JavaScript to manage aria-selected**

Find the `showTab` function:
```javascript
function showTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.getElementById(`tab-${tabId}`).classList.add('active');
}
```

Replace with:
```javascript
function showTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });
  const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
  activeBtn.classList.add('active');
  activeBtn.setAttribute('aria-selected', 'true');

  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.getElementById(`tab-${tabId}`).classList.add('active');
}
```

**Step 5: Commit**

```bash
git add sbos-landing.html
git commit -m "a11y: add ARIA tab attributes, main landmark, and keyboard navigation"
```

---

## Task 11: Scroll Reveal Animations

**Files:**
- Modify: `sbos-landing.html` — add `reveal` class to key elements and add JS observer

**Step 1: Add `reveal` class to section headers and card groups**

Add `reveal` class to these elements (find by their text content):

1. "Who Uses SBOS?" section header wrapper:
   ```html
   <div class="text-center mb-12">
     <p class="text-bronze...">Built for Three Archetypes</p>
   ```
   → Add `reveal` to the outer div: `<div class="text-center mb-12 reveal">`

2. "How It Works" section header wrapper:
   ```html
   <div class="text-center mb-16">
     <p class="text-bronze...">The SBOS Process</p>
   ```
   → `<div class="text-center mb-16 reveal">`

3. Each of the 4 flow steps: add `reveal reveal-delay-N` where N is 1-4

4. The "Severity Overrides Score" callout box:
   ```html
   <div class="mt-16 bg-gray-900 border border-gray-800 rounded p-8 max-w-3xl mx-auto">
   ```
   → Add `reveal`: `<div class="mt-16 bg-gray-900 border border-gray-800 rounded p-8 max-w-3xl mx-auto reveal">`

5. "9 Integrated Modules" section header:
   → Add `reveal` to its `<div class="text-center mb-12">` wrapper

6. Each of the 9 module cards: add `reveal reveal-delay-N` where N cycles 1-3 per row (so cards 1-3 get delay 1-3, cards 4-6 get delay 1-3, cards 7-9 get delay 1-3)

7. "Not Another Framework" section header: add `reveal`

8. Each of the 3 differentiator cards: add `reveal reveal-delay-1`, `reveal-delay-2`, `reveal-delay-3`

9. The bottom CTA section heading: add `reveal`

**Step 2: Add IntersectionObserver script**

Find the closing `</script>` tag at the bottom of the page (the one after the GA tracking code). Add this new script block BEFORE the closing `</body>`:

```html
<script>
  // Scroll reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
</script>
```

**Step 3: Commit**

```bash
git add sbos-landing.html
git commit -m "style: add scroll-triggered reveal animations with stagger delays"
```

---

## Task 12: Use Cases Tab Section Icon Containers

**Files:**
- Modify: `sbos-landing.html` — the icon wrappers inside all 3 tab content panels

**Step 1: Replace icon containers in tab content**

In all 3 tab panels, the feature icon containers look like:
```html
<div class="w-6 h-6 rounded bg-bronze/20 flex items-center justify-center flex-shrink-0 mt-0.5">
```

Replace each (there are 9 total — 3 per tab) with:
```html
<div class="icon-container w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
```

Also in the "Business Owner" tab, the prescription list has larger icons:
```html
<div class="w-8 h-8 rounded bg-bronze/20 flex items-center justify-center">
```

Replace each (3 of them) with:
```html
<div class="icon-container w-8 h-8 rounded flex items-center justify-center">
```

**Step 2: Commit**

```bash
git add sbos-landing.html
git commit -m "style: apply gradient icon containers across all tab sections"
```

---

## Task 13: Bottom CTA Section — Pricing Detail

**Files:**
- Modify: `sbos-landing.html` — bottom CTA section (~lines 773-793)

**Step 1: Update the detail text**

Find:
```html
<p class="text-xs text-gray-600">
  Quick Scan: Free, 20 questions, instant results<br>
  Structural Audit: 95 questions, by request only, includes consultation
</p>
```

Replace with:
```html
<div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">
  <span>Quick Scan: Free, 20 questions, instant results</span>
  <span class="hidden sm:inline w-px h-3 bg-gray-800"></span>
  <span>Structural Audit: 95 questions, by request, includes consultation</span>
</div>
<p class="text-xs text-gray-500 mt-4">Full platform: <span class="text-gray-400 font-medium data-value">$299/mo</span> — activated after assessment</p>
```

**Step 2: Commit**

```bash
git add sbos-landing.html
git commit -m "style: improve bottom CTA layout and add pricing visibility"
```

---

## Task 14: Final Consistency Pass and Rounded Corners

**Files:**
- Modify: `sbos-landing.html` — multiple small fixes

**Step 1: Normalize border-radius**

Find the 3 differentiator cards that use `rounded` (not `rounded-lg`) and change to `rounded-lg` for consistency with module cards:

Find (3 times):
```html
<div class="diff-card bg-charcoal border border-gray-800 rounded p-6">
```
Replace with:
```html
<div class="diff-card bg-charcoal border border-gray-800 rounded-lg p-6">
```

Also normalize the tab content card panels. Find:
```html
<div class="bg-charcoal border border-gray-800 rounded p-6">
```
(These appear inside each tab panel for the right-side mock output)

Replace with `rounded-lg` on each.

**Step 2: Normalize the "Severity Overrides Score" callout**

Find:
```html
<div class="mt-16 bg-gray-900 border border-gray-800 rounded p-8 max-w-3xl mx-auto reveal">
```
Replace `rounded` with `rounded-lg`.

Same for the prescription callout at the bottom of the modules section:
```html
<div class="mt-12 bg-charcoal border border-gray-800 rounded p-6 max-w-3xl mx-auto text-center">
```
→ `rounded-lg`

**Step 3: Commit**

```bash
git add sbos-landing.html
git commit -m "style: normalize border-radius to rounded-lg across all cards"
```

---

## Task 15: Visual Verification

**Step 1: Open the file in Playwright and take a full-page screenshot**

Navigate to the file (either locally or via the deployed URL) and take a full-page screenshot.

```
Navigate to: file:///Users/stevenbarclay/dev/stintwell-website/sbos-landing.html
Take full-page screenshot
```

**Step 2: Review the screenshot for:**
- Hero glow visible behind mock browser
- Typography appears lighter (semibold vs bold)
- Social proof strip visible between hero and use cases
- Module cards have gradient surface on hover
- Flow step connectors visible on desktop
- Section backgrounds have subtle variation
- Text is readable (no gray-600 contrast issues)

**Step 3: If issues found, fix them. Otherwise, final commit:**

```bash
git add -A
git commit -m "polish: SBOS landing page institutional-grade refinement — complete"
```

---

## Summary of All Changes

| Task | What Changes | Category |
|------|-------------|----------|
| 1 | Full CSS replacement — animations, hover, depth | Foundation |
| 2 | Schema.org fix + favicon | Bug fix |
| 3 | Typography weights + contrast + tabular-nums | Typography |
| 4 | Hero copy + CTA hover + mock browser glow | Hero |
| 5 | Social proof / pricing strip | Trust |
| 6 | Section background differentiation | Layout |
| 7 | Module card hover transforms + icon gradients | Cards |
| 8 | Differentiator card hover | Cards |
| 9 | Flow step connectors + step circles | Process |
| 10 | ARIA tabs + main landmark | Accessibility |
| 11 | Scroll reveal animations | Interactions |
| 12 | Tab section icon containers | Consistency |
| 13 | Bottom CTA pricing detail | Trust |
| 14 | Border-radius normalization | Consistency |
| 15 | Visual verification | QA |
