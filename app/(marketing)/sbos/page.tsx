import type { Metadata } from "next";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import FeatureGrid from "@/components/sections/FeatureGrid";
import MethodologySteps from "@/components/sections/MethodologySteps";
import ModuleGrid from "@/components/sections/ModuleGrid";
import UseCaseTabs from "@/components/sections/UseCaseTabs";
import CTASection from "@/components/sections/CTASection";
import SignupForm from "@/components/sections/SignupForm";
import ScrollReveal from "@/components/interactions/ScrollReveal";
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
        className="pt-24 pb-32 text-white"
        style={{
          background:
            "linear-gradient(180deg, #111111 0%, #111111 80%, var(--bg) 100%)",
        }}
      >
        <div className="container-tight text-center">
          <ScrollReveal>
            <p className="text-label text-white/60 mb-4">{sbosHero.eyebrow}</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-display mb-6">{sbosHero.title}</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-body text-white/70 max-w-3xl mx-auto mb-6">
              {sbosHero.description}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <p className="text-body text-white/60 max-w-2xl mx-auto mb-10">
              {sbosHero.subcopy}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                href="#signup"
                data-cta="Take the Quick Scan"
                data-cta-location="sbos-hero"
                data-cta-destination="signup"
              >
                Take the Quick Scan
              </Button>
              <Button
                href="#signup"
                variant="secondary"
                className="border-white/40 text-white hover:border-white"
                data-cta="Request Structural Audit"
                data-cta-location="sbos-hero"
                data-cta-destination="signup"
              >
                Request Structural Audit
              </Button>
            </div>
          </ScrollReveal>
          <p className="text-xs text-white/60 mt-6 uppercase tracking-[0.2em]">
            Free - 5 minutes - 20 questions
          </p>
        </div>
      </section>

      {/* System Capabilities — gradient warm */}
      <Section className="section-gradient-warm">
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
      <Section className="bg-bg-alt" id="use-cases">
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
      <Section className="section-gradient-warm-reverse" id="how-it-works">
        <div className="container-wide space-y-12">
          <SectionHeader
            eyebrow="The SBOS Process"
            title="How it works"
            description="Assessment to roadmap to installed systems."
          />
          <MethodologySteps steps={sbosMethodology} />
          <ScrollReveal delay={400}>
            <div className="premium-card p-6">
              <h3 className="text-h3 mb-3">Severity overrides score.</h3>
              <p className="text-body text-text-muted">
                A business can score high across multiple pillars but still be blocked by a critical red flag. SBOS
                prevents false confidence by forcing sequence and stabilizing the foundation first.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Gold rule divider */}
      <div className="gold-rule container-wide" />

      {/* 9 Modules */}
      <Section className="bg-bg-alt">
        <div className="container-wide space-y-12">
          <SectionHeader
            eyebrow="The SBOS Platform"
            title="9 integrated modules"
            description="Modules activate based on your assessment results. Prescriptions match your red flags."
          />
          <ModuleGrid modules={sbosModules} />
        </div>
      </Section>

      {/* Why SBOS — gradient warm */}
      <Section className="section-gradient-warm">
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

      {/* Signup */}
      <Section className="bg-bg-alt" id="signup">
        <div className="container-tight space-y-8">
          <SectionHeader
            eyebrow="Request Access"
            title="See the system in action"
            description="Tell us about your business. We'll respond within 24 hours."
          />
          <SignupForm />
        </div>
      </Section>

      <CTASection
        title="Ready to see your structural truth?"
        description="The quick scan takes five minutes. The results might change how you run your business."
        primary={{ label: "Take the Quick Scan", href: "#signup" }}
        secondary={{ label: "Request Structural Audit", href: "#signup" }}
      />
    </>
  );
}
