"use client";

import { motion, useReducedMotion, type Variant } from "framer-motion";

type AnimationVariant = "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";

const variants: Record<AnimationVariant, { hidden: Variant; visible: Variant }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
};

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export default function MotionReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.5,
  once = true,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const v = variants[variant];

  if (prefersReducedMotion) {
    // Explicit style overrides stale inline styles from SSR hydration mismatch
    // (server renders motion.div with initial="hidden" → opacity:0 inline style)
    return <div className={className} style={{ opacity: 1, transform: "none" }}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: v.hidden,
        visible: {
          ...v.visible,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: delay / 1000,
            duration,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
