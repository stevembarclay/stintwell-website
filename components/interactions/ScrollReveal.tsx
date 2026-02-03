"use client";

import { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver isn't available, reveal immediately
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" }
    );

    // Small delay ensures the browser has laid out the element before observing,
    // which prevents elements already in the viewport from being missed.
    requestAnimationFrame(() => {
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className || ""}`.trim()}>
      {children}
    </div>
  );
}
