import MotionStagger from "@/components/interactions/MotionStagger";
import MotionItem from "@/components/interactions/MotionItem";

export type Feature = {
  title: string;
  description: string;
  meta?: string;
};

type FeatureGridProps = {
  features: Feature[];
};

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <MotionStagger className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
      {features.map((feature) => (
        <MotionItem key={feature.title}>
          <div className="card card-hover card-glow p-6 bg-bg">
            <h3 className="text-h3 mb-3">{feature.title}</h3>
            <p className="text-body text-text-muted mb-4">
              {feature.description}
            </p>
            {feature.meta && (
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                {feature.meta}
              </p>
            )}
          </div>
        </MotionItem>
      ))}
    </MotionStagger>
  );
}
