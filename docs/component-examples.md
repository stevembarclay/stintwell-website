# Component Usage Examples

## Button Component

### Primary CTA (Hero)

```tsx
<Button href="/sbos" size="lg">
  Explore SBOS
</Button>
```

### Secondary Action

```tsx
<Button variant="secondary" size="md">
  View Product
</Button>
```

### Inline Link

```tsx
<Button variant="ghost" size="sm">
  Learn More
</Button>
```

## Input Component

### Basic Text Input

```tsx
<Input
  id="name"
  label="Full Name"
  type="text"
  placeholder="John Doe"
  required
/>
```

### Input with Error

```tsx
<Input
  id="email"
  label="Email Address"
  type="email"
  error="Please enter a valid email"
/>
```

### Input with Success

```tsx
<Input
  id="company"
  label="Company Name"
  type="text"
  success
/>
```

## Select Component

### Basic Select

```tsx
<Select id="size" label="Company Size" required>
  <option value="">Select size...</option>
  <option value="1-10">1-10 employees</option>
  <option value="11-25">11-25 employees</option>
</Select>
```

### Select with Error

```tsx
<Select id="revenue" label="Annual Revenue" error="Please select a revenue range">
  <option value="">Select range...</option>
  <option value="0-1m">Under $1M</option>
  <option value="1-3m">$1M-$3M</option>
</Select>
```

## Icon Component

### Inline with Text

```tsx
<p className="flex items-center gap-2">
  <ShieldIcon size="sm" />
  Compliance
</p>
```

### Feature Icon

```tsx
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
  <GearIcon size="lg" weight="medium" />
</div>
```

### Hero Visual

```tsx
<div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 text-accent">
  <ChartIcon size="xl" weight="bold" />
</div>
```

## Card Patterns

### Basic Card

```tsx
<div className="card p-6 bg-bg">
  <h3 className="text-h3 mb-3">Title</h3>
  <p className="text-body text-text-muted">Description</p>
</div>
```

### Hoverable Card

```tsx
<div className="card card-hover p-6 bg-muted">
  <h3 className="text-h3 mb-3">Feature</h3>
  <p className="text-body text-text-muted">Details</p>
</div>
```

### Featured Card with Glow

```tsx
<div className="card card-hover card-glow p-8 bg-bg">
  <p className="text-label mb-3">Featured</p>
  <h3 className="text-h2 mb-4">SBOS</h3>
  <p className="text-body text-text-muted mb-6">Description</p>
  <Button href="/sbos">Learn More</Button>
</div>
```

## Typography Patterns

### Section Header

```tsx
<div className="mb-12 text-center">
  <p className="text-label mb-3">Section Label</p>
  <h2 className="text-h2 mb-4">Section Title</h2>
  <p className="text-body text-text-muted mx-auto max-w-2xl">
    Section description explaining the content below.
  </p>
</div>
```

### Card Meta

```tsx
<div className="card p-6">
  <p className="text-label mb-3 font-data">01</p>
  <h3 className="text-h3 mb-3">Operations</h3>
  <p className="text-body text-text-muted">
    Systems that replace founder dependency.
  </p>
</div>
```
