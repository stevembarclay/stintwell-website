import MotionStagger from "@/components/interactions/MotionStagger";
import MotionItem from "@/components/interactions/MotionItem";
import { cx } from "@/lib/classnames";

export type ModuleItem = {
  title: string;
  description: string;
  detail: string;
  comingSoon?: boolean;
};

type ModuleGridProps = {
  modules: ModuleItem[];
};

export default function ModuleGrid({ modules }: ModuleGridProps) {
  return (
    <MotionStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:items-stretch" staggerDelay={0.08}>
      {modules.map((module) => (
        <MotionItem key={module.title} className="h-full">
          <div className={cx("card card-hover card-glow p-6 bg-bg h-full", module.comingSoon && "opacity-50")}>
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-h3">{module.title}</h3>
              {module.comingSoon && (
                <span className="shrink-0 ml-3 text-xs uppercase tracking-[0.15em] font-semibold text-text-muted border border-black/10 rounded-full px-3 py-1">
                  Soon
                </span>
              )}
            </div>
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
