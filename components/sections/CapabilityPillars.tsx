import ScrollReveal from "@/components/interactions/ScrollReveal";
import { cx } from "@/lib/classnames";

type Pillar = {
  title: string;
  description: string;
};

type CapabilityPillarsProps = {
  pillars: Pillar[];
};

export default function CapabilityPillars({ pillars }: CapabilityPillarsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {pillars.map((pillar, index) => (
        <ScrollReveal key={pillar.title}>
          <div
            className={cx(
              "card card-hover p-6",
              index === 1 ? "bg-bg-alt" : "bg-muted"
            )}
          >
            <p className="text-label text-text-muted mb-3">0{index + 1}</p>
            <h3 className="text-h3 mb-3">{pillar.title}</h3>
            <p className="text-body text-text-muted">{pillar.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
