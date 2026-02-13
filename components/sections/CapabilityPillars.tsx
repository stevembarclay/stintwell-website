import MotionStagger from "@/components/interactions/MotionStagger";
import MotionItem from "@/components/interactions/MotionItem";
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
    <MotionStagger className="grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
      {pillars.map((pillar, index) => (
        <MotionItem key={pillar.title}>
          <div
            className={cx(
              "card card-hover card-glow p-6",
              index === 1 ? "bg-bg-alt" : "bg-muted"
            )}
          >
            <p className="text-label text-text-muted mb-3 font-data">0{index + 1}</p>
            <h3 className="text-h3 mb-3">{pillar.title}</h3>
            <p className="text-body text-text-muted">{pillar.description}</p>
          </div>
        </MotionItem>
      ))}
    </MotionStagger>
  );
}
