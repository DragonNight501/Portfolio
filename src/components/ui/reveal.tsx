"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Fades content in when it scrolls into view.
 *
 * Always renders the same element on server and client. It used to swap to a
 * plain <div> when the user prefers reduced motion, but React keeps the
 * server's inline `opacity: 0` on hydration mismatches, so those visitors saw
 * empty sections. Reduced motion is now handled in CSS via [data-reveal].
 */
export default function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  return (
    <motion.div
      data-reveal=""
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
