import type { Metadata } from "next";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import FeatureGrid from "@/components/sections/FeatureGrid";
import MethodologySteps from "@/components/sections/MethodologySteps";
import ModuleGrid from "@/components/sections/ModuleGrid";
import UseCaseTabs from "@/components/sections/UseCaseTabs";
import CTASection from "@/components/sections/CTASection";
import MotionReveal from "@/components/interactions/MotionReveal";
import {
  sbosFeatures,
  sbosHero,
  sbosMethodology,
  sbosModules,
  sbosPrinciples,
  sbosUseCases,
} from "@/content/sbos";
import Button from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "SBOS | Stintwell",
  description:
    "The Service Business Operating System. Diagnose structural risk, install proven systems, and build a business that runs without heroics.",
};

export default function SBOSPage() {
  return (
    <>
      {/* Hero — gradient bottom edge */}
      <section
        className="pt-24 pb-32 text-white section-divider-diagonal"
        style={{
          background:
            "linear-gradient(180deg, #111111 0%, #111111 80%, var(--bg) 100%)",
        }}
      >
        <div className="container-tight text-center">
          <MotionReveal>
            <p className="text-label text-white/60 mb-4">{sbosHero.eyebrow}</p>
          </MotionReveal>
          <MotionReveal delay={100}>
            <h1 className="text-display mb-6">{sbosHero.title}</h1>
          </MotionReveal>
          <MotionReveal delay={200}>
            <p className="text-body-large text-white/70 max-w-3xl mx-auto mb-10">
              {sbosHero.description}
            </p>
          </MotionReveal>
          <MotionReveal delay={300}>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                href="https://sbos.stintwell.com"
                data-cta="Get Started Free"
                data-cta-location="sbos-hero"
                data-cta-destination="platform"
              >
                Get Started Free
              </Button>
              <Button
                href="#how-it-works"
                variant="secondary"
                className="border-white/40 text-white hover:border-white"
                data-cta="See How It Works"
                data-cta-location="sbos-hero"
                data-cta-destination="how-it-works"
              >
                See How It Works
              </Button>
            </div>
          </MotionReveal>
          <p className="text-xs text-white/60 mt-6 uppercase tracking-[0.2em] font-data">
            Free to start — no scan required
          </p>
        </div>
      </section>

      {/* System Capabilities — gradient warm */}
      <Section className="marketing-bg">
        <div className="container-wide space-y-12">
          <SectionHeader
            eyebrow="System Capabilities"
            title="Built for the operator class."
            description="AI-assisted documentation, lifecycle control, and team accountability in one operating system."
          />
          <FeatureGrid features={sbosFeatures} />
        </div>
      </Section>

      {/* Gold rule divider */}
      <div className="gold-rule container-wide" />

      {/* Use Cases */}
      <Section className="marketing-bg-alt" id="use-cases">
        <div className="container-wide space-y-12">
          <SectionHeader
            eyebrow="Built for Three Archetypes"
            title="Who uses SBOS?"
            description="Different entry points, same structural truth."
          />
          <UseCaseTabs cases={sbosUseCases} />
        </div>
      </Section>

      {/* How It Works — reverse gradient */}
      <Section className="marketing-bg" id="how-it-works">
        <div className="container-wide space-y-12">
          <SectionHeader
            eyebrow="The SBOS Process"
            title="How it works"
            description="Start documenting. Get assessed. Install the systems."
          />
          <MethodologySteps steps={sbosMethodology} />
          <MotionReveal delay={400}>
            <div className="premium-card p-6">
              <h3 className="text-h3 mb-3">Severity overrides score.</h3>
              <p className="text-body text-text-muted">
                A business can score high across multiple pillars but still be blocked by a critical red flag. SBOS
                prevents false confidence by forcing sequence and stabilizing the foundation first.
              </p>
            </div>
          </MotionReveal>
        </div>
      </Section>

      {/* Gold rule divider */}
      <div className="gold-rule container-wide" />

      {/* 9 Modules */}
      <Section className="marketing-bg-alt">
        <div className="container-wide space-y-12">
          <SectionHeader
            eyebrow="The SBOS Platform"
            title="9 integrated modules"
            description="Start with the SOP Library. Unlock more as your business grows."
          />
          <ModuleGrid modules={sbosModules} />
        </div>
      </Section>

      {/* Why SBOS — gradient warm */}
      <Section className="marketing-bg">
        <div className="container-wide space-y-12">
          <SectionHeader
            eyebrow="Why SBOS"
            title="Not another framework"
            description="SBOS proves whether you're ready before you build."
          />
          <FeatureGrid
            features={sbosPrinciples.map((item) => ({
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </Section>

      {/* Gold rule divider */}
      <div className="gold-rule container-wide" />

      <CTASection
        title="Start documenting. Start operating."
        description="Free to use. No scan required. Build your first SOP in minutes."
        primary={{ label: "Get Started Free", href: "https://sbos.stintwell.com" }}
      />
    </>
  );
}
