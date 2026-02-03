import ScrollReveal from "@/components/interactions/ScrollReveal";

export type MethodStep = {
  title: string;
  description: string;
};

type MethodologyStepsProps = {
  steps: MethodStep[];
};

export default function MethodologySteps({ steps }: MethodologyStepsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {steps.map((step, index) => (
        <ScrollReveal key={step.title}>
          <div className="card card-hover p-6 bg-bg">
            <p className="text-label text-text-muted mb-4">Step 0{index + 1}</p>
            <h3 className="text-h3 mb-3">{step.title}</h3>
            <p className="text-body text-text-muted">{step.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
