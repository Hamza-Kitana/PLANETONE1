import { AnimatePresence, motion } from "motion/react";
import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const PANELS = 6;

/** Projector-shutter wipe + soft focus pull on every route change. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={pathname}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[80] flex"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {Array.from({ length: PANELS }).map((_, i) => (
            <motion.span
              key={i}
              className="h-full flex-1 origin-top"
              style={{
                background:
                  i % 2 === 0
                    ? "color-mix(in oklab, var(--background) 96%, var(--primary))"
                    : "color-mix(in oklab, var(--background) 92%, var(--ember))",
              }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                duration: 0.72,
                delay: i * 0.05,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={`page-${pathname}`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
