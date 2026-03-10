import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import CapabilityPillars from "@/components/sections/CapabilityPillars";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/primitives/Button";
import MotionReveal from "@/components/interactions/MotionReveal";

const pillars = [
  {
    title: "Operations",
    description:
      "Systems that replace founder dependency with institutional discipline.",
  },
  {
    title: "Compliance",
    description:
      "Tools for navigating regulatory complexity, so your team can focus on the work.",
  },
  {
    title: "Infrastructure",
    description:
      "The operational backbone growing businesses need but cannot build themselves.",
  },
];

export const metadata: Metadata = {
  title: "Stintwell",
  description:
    "Stintwell builds software tools that bring structure, compliance, and operational discipline to underserved industries.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero — gradient bottom edge blending into bg */}
      <section
        className="pt-24 pb-32 text-white section-divider-diagonal"
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
                    href="https://sbos.stintwell.com"
                    data-cta="Get Started Free"
                    data-cta-location="homepage-hero"
                    data-cta-destination="platform"
                  >
                    Get Started Free
                  </Button>
                  <Button
                    href="/sbos"
                    variant="secondary"
                    className="border-white/40 text-white hover:border-white"
                    data-cta="Explore SBOS"
                    data-cta-location="homepage-hero"
                    data-cta-destination="sbos"
                  >
                    Explore SBOS
                  </Button>
                </div>
              </MotionReveal>
            </div>

            {/* Platform screenshot */}
            <MotionReveal delay={200} variant="fadeIn" className="hidden md:block">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/platform-screenshot.png"
                  alt="SBOS platform — SOP Library"
                  width={950}
                  height={1365}
                  className="w-full h-auto"
                  priority
                />
                {/* Fade out bottom so it blends into the hero background */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent, #111111)",
                  }}
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Philosophy — warm gradient into capabilities */}
      <Section className="marketing-bg">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Philosophy"
            title="Build the system, not the myth."
            description="We design software that replaces founder heroics with repeatable operating structure."
          />
        </div>
      </Section>

      {/* Gold rule divider */}
      <div className="gold-rule container-wide" />

      {/* Capabilities */}
      <Section className="marketing-bg-alt">
        <div className="container-wide space-y-12">
          <SectionHeader
            eyebrow="Capabilities"
            title="Three pillars, one operating standard."
            description="SBOS is public. The rest of the portfolio stays quiet -- for now."
          />
          <CapabilityPillars pillars={pillars} />
        </div>
      </Section>

      {/* Featured product — reverse gradient back to bg */}
      <Section className="marketing-bg">
        <div className="container-wide">
          <FeaturedProduct />
        </div>
      </Section>

      <CTASection
        title="Build your operating system."
        description="Start with your SOP library. Free to use."
        primary={{ label: "Get Started Free", href: "https://sbos.stintwell.com" }}
        secondary={{ label: "Explore SBOS", href: "/sbos" }}
      />
    </>
  );
}
