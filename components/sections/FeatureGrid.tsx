import ScrollReveal from "@/components/interactions/ScrollReveal";

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
    <div className="grid gap-6 md:grid-cols-3">
      {features.map((feature) => (
        <ScrollReveal key={feature.title}>
          <div className="card card-hover p-6 bg-bg">
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
        </ScrollReveal>
      ))}
    </div>
  );
}
