import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { films } from "@/data/films";
import { useI18n } from "@/lib/i18n";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

/** Five featured posters — clean fan layout, no crowded 3D orbit. */
const FEATURED_COUNT = 5;

const featuredLayout = [
  { offset: -2, y: 28, scale: 0.78, rotate: -10, opacity: 0.72 },
  { offset: -1, y: 12, scale: 0.88, rotate: -5, opacity: 0.86 },
  { offset: 0, y: 0, scale: 1, rotate: 0, opacity: 1 },
  { offset: 1, y: 12, scale: 0.88, rotate: 5, opacity: 0.86 },
  { offset: 2, y: 28, scale: 0.78, rotate: 10, opacity: 0.72 },
] as const;

export function HeroOrbit() {
  const { pick } = useI18n();
  const isMobile = useIsMobile();
  const featured = films.slice(0, FEATURED_COUNT);

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

  return (
    <div className="relative mx-auto w-full max-w-full select-none px-2 sm:px-0">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-64 sm:w-64"
        style={{ background: "var(--gradient-cool)", opacity: 0.22 }}
      />

      <motion.div
        className="relative flex min-h-[240px] items-end justify-center sm:min-h-[340px] lg:min-h-[400px]"
        style={isMobile ? undefined : { x: parallaxX, y: parallaxY }}
      >
        {featured.map((film, i) => {
          const layout = featuredLayout[i]!;
          const isCenter = layout.offset === 0;

          return (
            <motion.div
              key={film.slug}
              className={cn(
                "relative shrink-0",
                isCenter ? "z-20" : layout.offset === -1 || layout.offset === 1 ? "z-10" : "z-0",
              )}
              style={{
                marginInline: isMobile ? "-0.35rem" : "-0.6rem",
                rotate: layout.rotate,
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: layout.opacity,
                y: layout.y,
                scale: layout.scale,
              }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: layout.y - 10, scale: layout.scale * 1.04, opacity: 1 }}
            >
              <Link
                to="/films/$slug"
                params={{ slug: film.slug }}
                className="group block"
                aria-label={pick(film.title, film.titleAr)}
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-md border border-border transition-shadow duration-500 group-hover:border-primary/50",
                    isCenter
                      ? "w-[108px] sm:w-[148px] lg:w-[168px]"
                      : "w-[88px] sm:w-[118px] lg:w-[132px]",
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
                {isCenter && (
                  <p className="mt-3 hidden max-w-[148px] truncate text-center text-[0.58rem] tracking-[0.14em] text-muted-foreground uppercase sm:block">
                    {pick(film.title, film.titleAr)}
                  </p>
                )}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent sm:h-28" />
    </div>
  );
}
