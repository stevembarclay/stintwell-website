import type { Metadata } from "next";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";

export const metadata: Metadata = {
  title: "Property Management | Stintwell",
  description: "Industry-specific SBOS rollout for property management operators.",
};

export default function PropertyManagementPage() {
  return (
    <Section className="bg-bg">
      <div className="container-tight space-y-6">
        <SectionHeader
          eyebrow="Property Management"
          title="Coming soon."
          description="We are refining the industry-specific SBOS rollout for property management operators."
          align="left"
        />
        <p className="text-body text-text-muted">
          The full landing experience will launch soon with updated positioning.
        </p>
      </div>
    </Section>
  );
}
