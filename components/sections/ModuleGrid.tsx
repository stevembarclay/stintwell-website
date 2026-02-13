import MotionStagger from "@/components/interactions/MotionStagger";
import MotionItem from "@/components/interactions/MotionItem";

export type ModuleItem = {
  title: string;
  description: string;
  detail: string;
};

type ModuleGridProps = {
  modules: ModuleItem[];
};

export default function ModuleGrid({ modules }: ModuleGridProps) {
  return (
    <MotionStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
      {modules.map((module) => (
        <MotionItem key={module.title}>
          <div className="card card-hover card-glow p-6 bg-bg">
            <h3 className="text-h3 mb-3">{module.title}</h3>
            <p className="text-body text-text-muted mb-4">
              {module.description}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
              {module.detail}
            </p>
          </div>
        </MotionItem>
      ))}
    </MotionStagger>
  );
}
