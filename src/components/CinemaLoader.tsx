import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PlanetOneLogo } from "@/components/PlanetOneLogo";

/** Cinematic countdown leader shown once per session. */
export function CinemaLoader() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (window.sessionStorage.getItem("p1-intro") === "seen") {
      document.body.style.overflow = "";
      return;
    }
    setOpen(true);
    window.sessionStorage.setItem("p1-intro", "seen");
    document.body.style.overflow = "hidden";
    const tick = window.setInterval(() => setCount((c) => (c > 1 ? c - 1 : c)), 780);
    const done = window.setTimeout(() => setOpen(false), 2700);
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!open) document.body.style.overflow = "";
  }, [open]);

  const lines = [t("loader.line1"), t("loader.line2"), t("loader.line3")];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-background grain"
          exit={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 scanlines opacity-40" />
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 50% 55%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 62%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-8 px-6 text-center">
            <div className="relative h-36 w-36 sm:h-48 sm:w-48">
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.4, ease: "linear", repeat: Infinity }}
              />
              <div className="absolute inset-0 rounded-full border border-border" />
              <motion.div
                className="absolute inset-0 m-auto h-28 w-28 sm:h-36 sm:w-36"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <PlanetOneLogo className="h-28 w-28 object-contain sm:h-36 sm:w-36" />
              </motion.div>
              <motion.span
                key={count}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-display text-2xl text-gold"
                initial={{ opacity: 0, scale: 1.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                {count}
              </motion.span>
            </div>

            <div className="space-y-2">
              <p className="eyebrow">{lines[3 - count] ?? lines[2]}</p>
              <p className="font-display text-3xl tracking-[0.2em] text-foreground">
                {lang === "ar" ? "بلانت ون" : "PLANET ONE"}
              </p>
            </div>

            <div className="h-px w-40 overflow-hidden bg-border sm:w-56">
              <motion.div
                className="h-full"
                style={{ background: "var(--gradient-ember)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
