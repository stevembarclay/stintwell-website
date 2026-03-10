import type { Metadata } from "next";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";

export const metadata: Metadata = {
  title: "About | Stintwell",
  description:
    "Stintwell is an operational product studio building software tools that replace founder heroics with institutional discipline.",
};

export default function AboutPage() {
  return (
    <Section className="bg-bg">
      <div className="container-tight space-y-8">
        <SectionHeader
          eyebrow="About"
          title="Structure, shipped."
          description="An operational product studio for the underserved infrastructure of the service economy."
          align="left"
        />

        <div className="space-y-6 max-w-3xl">
          <p className="text-body">
            Stintwell is an operational product studio dedicated to the
            underserved infrastructure of the service economy. We build the
            tooling required to replace founder heroics with institutional
            discipline. While the venture world chases hyper-growth, Stintwell
            focuses on the $3M–$50M service sector—businesses often rich in
            revenue but fragile in structure. Our mandate is simple: diagnose
            operational risk, codify tribal knowledge, and install the
            governance systems necessary for a business to endure beyond its
            creator.
          </p>

          <p className="text-body">
            Founded by Steve Barclay, a former Marine Infantryman and career
            operator, Stintwell was born from a rejection of the traditional
            consulting model. After years of running operations for high-growth
            and high-volume management consulting firms—telecommunications, call
            centers, and property management—Steve recognized that consulting
            often only rents intelligence to solve recurring problems. True
            stability requires doctrine, not just documentation. By combining
            the discipline of military command structures with the scalability
            of modern software architecture, Stintwell translates manual
            operational excellence into automated, enforceable standards.
          </p>

          <p className="text-body">
            Our portfolio—anchored by SBOS—treats operations as a product, not a
            department. We design for the operator who is tired of being the
            glue holding the enterprise together. Whether stabilizing a chaotic
            compliance environment or preparing a firm for acquisition, Stintwell
            provides the architectural backbone that turns a personality-dependent
            practice into a systematic, transferable asset.
          </p>
        </div>
      </div>
    </Section>
  );
}
