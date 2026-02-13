"use client";

import { useState } from "react";
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
  const activeCase = cases.find((item) => item.id === active) || cases[0];
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {cases.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              data-tab={item.id}
              className={cx(
                "rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ease-smooth focus-ring",
                isActive
                  ? "border border-accent text-accent bg-accent/10 shadow-gold"
                  : "border border-black/10 text-text-muted hover:text-text hover:border-black/30"
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
            className="mt-10 grid gap-10 md:grid-cols-2 md:items-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div>
              <p className="text-label text-text-muted mb-3">
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
              <p className="text-label text-text-muted mb-4">
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
