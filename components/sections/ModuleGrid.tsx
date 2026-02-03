import ScrollReveal from "@/components/interactions/ScrollReveal";

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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {modules.map((module) => (
        <ScrollReveal key={module.title}>
          <div className="card card-hover p-6 bg-bg">
            <h3 className="text-h3 mb-3">{module.title}</h3>
            <p className="text-body text-text-muted mb-4">
              {module.description}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
              {module.detail}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
