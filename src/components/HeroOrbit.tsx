import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { films } from "@/data/films";
import { useI18n } from "@/lib/i18n";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const ROTATE_MS = 4200;
const VISIBLE_RADIUS = 2;

function circularOffset(filmIndex: number, centerIndex: number): number {
  const len = films.length;
  let diff = filmIndex - centerIndex;
  diff = ((diff % len) + len) % len;
  if (diff > len / 2) diff -= len;
  return diff;
}

function slotStyle(offset: number) {
  const abs = Math.abs(offset);
  return {
    y: abs * 12 + (abs === 2 ? 16 : 0),
    scale: 1 - abs * 0.11,
    rotate: offset * 5,
    rotateY: offset * -16,
    opacity: 1 - abs * 0.13,
    zIndex: 20 - abs * 6,
  };
}

export function HeroOrbit() {
  const { pick, dir } = useI18n();
  const isMobile = useIsMobile();
  const [centerIndex, setCenterIndex] = useState(2);
  const [paused, setPaused] = useState(false);
  const dirSign = dir === "rtl" ? -1 : 1;
  const spread = isMobile ? 92 : 136;

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const sx = useSpring(tiltX, { stiffness: 90, damping: 20 });
  const sy = useSpring(tiltY, { stiffness: 90, damping: 20 });
  const parallaxX = useTransform(sx, [-1, 1], [-8, 8]);
  const parallaxY = useTransform(sy, [-1, 1], [-6, 6]);

  useEffect(() => {
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      tiltX.set((e.clientX / window.innerWidth) * 2 - 1);
      tiltY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile, tiltX, tiltY]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setCenterIndex((i) => (i + 1) % films.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const centerFilm = films[centerIndex]!;

  return (
    <div
      className="relative mx-auto w-full max-w-full select-none px-2 sm:px-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-64 sm:w-64"
        style={{ background: "var(--gradient-cool)", opacity: 0.22 }}
      />

      <motion.div
        className="relative min-h-[280px] sm:min-h-[390px] lg:min-h-[460px]"
        style={isMobile ? { perspective: 1200 } : { perspective: 1400, x: parallaxX, y: parallaxY }}
      >
        <div
          className="relative mx-auto h-[260px] w-full max-w-[720px] sm:h-[360px] lg:h-[430px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <AnimatePresence initial={false}>
            {films.map((film, filmIndex) => {
              const offset = circularOffset(filmIndex, centerIndex);
              if (Math.abs(offset) > VISIBLE_RADIUS) return null;

              const slot = slotStyle(offset);
              const isCenter = offset === 0;
              const x = offset * spread * dirSign;
              const exitX = x + (offset <= 0 ? -70 : 70) * dirSign;

              return (
                <motion.div
                  key={film.slug}
                  className="absolute bottom-0 left-1/2 origin-bottom"
                  style={{ zIndex: slot.zIndex, transformStyle: "preserve-3d" }}
                  initial={{
                    x: x + (offset > 0 ? 90 : -90) * dirSign,
                    y: slot.y + 36,
                    scale: slot.scale * 0.72,
                    rotate: slot.rotate,
                    rotateY: slot.rotateY + offset * -8,
                    opacity: 0,
                  }}
                  animate={{
                    x,
                    y: slot.y,
                    scale: slot.scale,
                    rotate: slot.rotate,
                    rotateY: slot.rotateY,
                    opacity: slot.opacity,
                  }}
                  exit={{
                    x: exitX,
                    y: slot.y + 28,
                    scale: slot.scale * 0.68,
                    rotate: slot.rotate + offset * 2,
                    rotateY: slot.rotateY + offset * -10,
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 88,
                    damping: 15,
                    mass: 0.92,
                  }}
                  whileHover={
                    isCenter
                      ? { y: slot.y - 10, scale: slot.scale * 1.04, opacity: 1 }
                      : { y: slot.y - 6, scale: slot.scale * 1.02, opacity: 1 }
                  }
                >
                  <Link
                    to="/films/$slug"
                    params={{ slug: film.slug }}
                    className="group block -translate-x-1/2"
                    aria-label={pick(film.title, film.titleAr)}
                  >
                    <div
                      className={cn(
                        "overflow-hidden rounded-md border border-border transition-shadow duration-500 group-hover:border-primary/50",
                        isCenter
                          ? "w-[128px] sm:w-[176px] lg:w-[200px]"
                          : "w-[104px] sm:w-[140px] lg:w-[158px]",
                      )}
                      style={{ boxShadow: isCenter ? "var(--shadow-cine)" : "var(--shadow-glow)" }}
                    >
                      <div className="relative aspect-2/3">
                        <img
                          src={film.poster}
                          alt={pick(film.title, film.titleAr)}
                          width={480}
                          height={720}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="pointer-events-none absolute inset-0 scanlines opacity-15" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={centerFilm.slug}
            className="pointer-events-none mx-auto mt-2 hidden max-w-[200px] truncate text-center text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase sm:block"
            initial={{ opacity: 0, y: 8, rotateX: 24 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -8, rotateX: -18 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {pick(centerFilm.title, centerFilm.titleAr)}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent sm:h-28" />
    </div>
  );
}
