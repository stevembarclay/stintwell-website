import type { Metadata } from "next";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";

export const metadata: Metadata = {
  title: "About | Stintwell",
  description: "Founder story and company background for Stintwell.",
};

export default function AboutPage() {
  return (
    <Section className="bg-bg">
      <div className="container-tight space-y-6">
        <SectionHeader
          eyebrow="About"
          title="Founder story coming soon."
          description="We are preparing the full Stintwell origin story and philosophy."
          align="left"
        />
        <p className="text-body text-text-muted">
          This page will be updated once the founder narrative is finalized.
        </p>
      </div>
    </Section>
  );
}
