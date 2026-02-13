"use client";

import { motion, useReducedMotion } from "framer-motion";

type MotionItemProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MotionItem({ children, className }: MotionItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className} style={{ opacity: 1, transform: "none" }}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
