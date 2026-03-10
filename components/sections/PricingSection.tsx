"use client";

import { useState } from "react";
import MotionItem from "@/components/interactions/MotionItem";
import MotionReveal from "@/components/interactions/MotionReveal";
import MotionStagger from "@/components/interactions/MotionStagger";
import Button from "@/components/primitives/Button";
import SectionHeader from "@/components/primitives/SectionHeader";
import type { PricingTier } from "@/content/sbos";
import { cx } from "@/lib/classnames";

type PricingSectionProps = {
  tiers: PricingTier[];
  note: string;
};

type BillingMode = "monthly" | "annual";

function BillingToggle({
  mode,
  onChange,
}: {
  mode: BillingMode;
  onChange: (mode: BillingMode) => void;
}) {
  return (
    <MotionReveal delay={100}>
      <div className="flex justify-center">
        <div className="relative inline-flex rounded-full border border-black/10 bg-bg p-1 shadow-soft">
          <div
            aria-hidden="true"
            className={cx(
              "absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full bg-accent transition-transform duration-300 ease-smooth",
              mode === "annual" ? "translate-x-full" : "translate-x-0"
            )}
          />
          <button
            type="button"
            onClick={() => onChange("monthly")}
            className={cx(
              "relative z-10 min-w-[9rem] rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ease-smooth focus-ring",
              mode === "monthly" ? "text-white" : "text-text-muted hover:text-text"
            )}
            aria-pressed={mode === "monthly"}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => onChange("annual")}
            className={cx(
              "relative z-10 min-w-[9rem] rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ease-smooth focus-ring",
              mode === "annual" ? "text-white" : "text-text-muted hover:text-text"
            )}
            aria-pressed={mode === "annual"}
          >
            Annual - 15% off
          </button>
        </div>
      </div>
    </MotionReveal>
  );
}

function PricingCard({
  tier,
  isAnnual,
}: {
  tier: PricingTier;
  isAnnual: boolean;
}) {
  const price = tier.isFree
    ? { main: "$0", sub: "forever" }
    : isAnnual
      ? { main: `$${tier.price.annualMonthly}/mo`, sub: `billed $${tier.price.annualTotal.toLocaleString()}/yr` }
      : { main: `$${tier.price.monthly}/mo`, sub: null };

  const featureItems = [
    tier.limits.users,
    tier.limits.sops,
    tier.limits.aiCalls,
    tier.limits.aiModel,
    ...tier.modules,
  ];

  const cardClass = cx(
    "card p-8 bg-bg h-full flex flex-col",
    tier.featured
      ? "border-2 border-accent shadow-gold"
      : tier.key === "pro"
        ? "card-hover shadow-lift"
        : "card-hover"
  );

  return (
    <div className={cardClass}>
      <div className="mb-6">
        <div className="mb-4 flex min-h-[3rem] items-start justify-between gap-3">
          <h3 className="text-h3">{tier.name}</h3>
          {tier.badge && (
            <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              {tier.badge}
            </span>
          )}
        </div>
        <div className="mb-4 min-h-[4.5rem]">
          <p className="text-display text-text leading-none">{price.main}</p>
          <p className="mt-2 text-body text-text-muted">{price.sub ?? "\u00A0"}</p>
        </div>
        <p className="text-body text-text-muted">{tier.tagline}</p>
      </div>

      <hr className="my-6 border-muted" />

      <div className="mb-8 flex-1 space-y-3">
        {featureItems.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="text-sm text-accent" aria-hidden="true">
              ✓
            </span>
            <span className="text-body text-text-muted">{item}</span>
          </div>
        ))}
      </div>

      <Button
        href={tier.cta.href}
        className="mt-auto w-full"
        data-cta={tier.cta.label}
        data-cta-location="pricing-section"
        data-cta-destination="platform"
      >
        {tier.cta.label}
      </Button>
    </div>
  );
}

export default function PricingSection({ tiers, note }: PricingSectionProps) {
  const [billingMode, setBillingMode] = useState<BillingMode>("monthly");
  const isAnnual = billingMode === "annual";

  return (
    <div className="space-y-12">
      <MotionReveal>
        <SectionHeader
          eyebrow="PRICING"
          title="Start free. Scale when you're ready."
        />
      </MotionReveal>

      <BillingToggle mode={billingMode} onChange={setBillingMode} />

      <MotionStagger className="grid gap-6 md:grid-cols-2 md:items-stretch lg:grid-cols-3" staggerDelay={0.08}>
        {tiers.map((tier) => (
          <MotionItem key={tier.key} className="h-full">
            <PricingCard tier={tier} isAnnual={isAnnual} />
          </MotionItem>
        ))}
      </MotionStagger>

      <MotionReveal delay={400}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-body text-text-muted">
          {note}
        </p>
      </MotionReveal>
    </div>
  );
}
