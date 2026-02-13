"use client";

import { motion, useReducedMotion } from "framer-motion";

type MotionStaggerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
};

export default function MotionStagger({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: MotionStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className} style={{ opacity: 1, transform: "none" }}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
