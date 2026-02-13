"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cx } from "@/lib/classnames";

export type UseCase = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: { title: string; description: string }[];
  cta: { label: string; href: string };
};

type UseCaseTabsProps = {
  cases: UseCase[];
};

export default function UseCaseTabs({ cases }: UseCaseTabsProps) {
  const [active, setActive] = useState(cases[0]?.id || "");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeCase = cases.find((item) => item.id === active) || cases[0];
  const prefersReducedMotion = useReducedMotion();

  const activateAndFocusTab = (index: number) => {
    const target = cases[index];
    if (!target) return;
    setActive(target.id);
    tabRefs.current[index]?.focus();
  };

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!cases.length) return;

    const lastIndex = cases.length - 1;
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = index === lastIndex ? 0 : index + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = index === 0 ? lastIndex : index - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lastIndex;
        break;
      default:
        break;
    }

    if (nextIndex === null) return;
    event.preventDefault();
    activateAndFocusTab(nextIndex);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Use case selection">
        {cases.map((item, index) => {
          const isActive = item.id === active;
          return (
            <button
              type="button"
              key={item.id}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              data-tab={item.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              id={`tab-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              className={cx(
                "rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]",
                "transition-all duration-300 ease-smooth focus-ring",
                isActive
                  ? "bg-gradient-to-br from-accent/20 via-accent/15 to-accent/10 border border-accent text-accent shadow-gold scale-[1.02]"
                  : "card border-black/10 text-text-muted hover:text-text hover:border-accent/30 hover:shadow-soft hover:scale-[1.01] active:scale-[0.97]"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeCase && (
          <motion.div
            key={activeCase.id}
            id={`tabpanel-${activeCase.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCase.id}`}
            className="mt-10 grid gap-10 md:grid-cols-2 md:items-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div>
              <p className="text-label mb-3">
                {activeCase.eyebrow}
              </p>
              <h3 className="text-h2 mb-4">{activeCase.title}</h3>
              <p className="text-body text-text-muted mb-8">
                {activeCase.description}
              </p>
              <div className="space-y-4 mb-8">
                {activeCase.bullets.map((bullet) => (
                  <div key={bullet.title}>
                    <p className="font-semibold">{bullet.title}</p>
                    <p className="text-sm text-text-muted">
                      {bullet.description}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href={activeCase.cta.href}
                className="inline-flex items-center rounded-full border border-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition-all duration-300 ease-smooth hover:shadow-gold hover:border-accent-hover focus-ring"
                data-cta={activeCase.cta.label}
                data-cta-location="sbos-use-cases"
                data-cta-destination={activeCase.cta.href.replace("#", "")}
              >
                {activeCase.cta.label}
              </a>
            </div>
            <div className="card p-8 bg-bg-alt">
              <p className="text-label mb-4">
                {activeCase.label} Snapshot
              </p>
              <ul className="space-y-3 text-sm text-text-muted">
                {activeCase.bullets.map((bullet) => (
                  <li key={bullet.title}>
                    <span className="text-text">{bullet.title}:</span> {bullet.description}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
