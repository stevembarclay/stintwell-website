import type { Metadata } from "next";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import CapabilityPillars from "@/components/sections/CapabilityPillars";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/primitives/Button";
import ScrollReveal from "@/components/interactions/ScrollReveal";

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
      <section className="anchor-section pt-24 pb-24">
        <div className="container-tight text-center">
          <ScrollReveal>
            <p className="text-label text-white/60 mb-4">Product Studio</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-display mb-6">
              Structure, shipped.
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-body text-white/70 max-w-2xl mx-auto mb-10">
              Stintwell builds software tools that bring structure, compliance, and
              operational discipline to underserved industries.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
          </ScrollReveal>
        </div>
      </section>

      <Section className="bg-bg">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Philosophy"
            title="Build the system, not the myth."
            description="We design software that replaces founder heroics with repeatable operating structure."
          />
        </div>
      </Section>

      <Section className="bg-bg-alt">
        <div className="container-wide space-y-12">
          <SectionHeader
            eyebrow="Capabilities"
            title="Three pillars, one operating standard."
            description="SBOS is public. The rest of the portfolio stays quiet -- for now."
          />
          <CapabilityPillars pillars={pillars} />
        </div>
      </Section>

      <Section className="bg-bg">
        <div className="container-wide">
          <FeaturedProduct />
        </div>
      </Section>

      <CTASection
        title="Build your operating system."
        description="Explore SBOS to see how we diagnose operational risk and install the infrastructure that fixes it."
        primary={{ label: "Explore SBOS", href: "/sbos" }}
        secondary={{ label: "Start Assessment", href: "/sbos" }}
      />
    </>
  );
}
