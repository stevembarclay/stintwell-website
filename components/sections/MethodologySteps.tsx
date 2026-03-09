import MotionStagger from "@/components/interactions/MotionStagger";
import MotionItem from "@/components/interactions/MotionItem";

export type MethodStep = {
  title: string;
  description: string;
};

type MethodologyStepsProps = {
  steps: MethodStep[];
};

export default function MethodologySteps({ steps }: MethodologyStepsProps) {
  return (
    <MotionStagger className="grid gap-6 md:grid-cols-4 md:items-stretch" staggerDelay={0.1}>
      {steps.map((step, index) => (
        <MotionItem key={step.title} className="h-full">
          <div className="card card-hover card-glow p-6 bg-bg h-full">
            <p className="text-label text-text-muted mb-4 font-data">Step 0{index + 1}</p>
            <h3 className="text-h3 mb-3">{step.title}</h3>
            <p className="text-body text-text-muted">{step.description}</p>
          </div>
        </MotionItem>
      ))}
    </MotionStagger>
  );
}
