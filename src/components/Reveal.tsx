"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  stagger?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.72,
            delay,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: stagger ? 0.08 : 0,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
