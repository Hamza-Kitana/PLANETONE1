import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { films } from "@/data/films";
import { useI18n } from "@/lib/i18n";
import { useIsMobile } from "@/hooks/use-mobile";

/** True CSS-3D carousel of film posters orbiting a glowing core. */
export function HeroOrbit() {
  const { pick } = useI18n();
  const isMobile = useIsMobile();
  const rootRef = useRef<HTMLDivElement>(null);
  const radius = isMobile ? 132 : 340;
  const posterW = isMobile ? 92 : 168;
  const posterH = isMobile ? 136 : 246;
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const sx = useSpring(tiltX, { stiffness: 90, damping: 20 });
  const sy = useSpring(tiltY, { stiffness: 90, damping: 20 });
  const rotX = useTransform(sy, [-1, 1], [16, -2]);
  const rotZ = useTransform(sx, [-1, 1], [-6, 6]);
  const step = 360 / films.length;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || isMobile) return;

    const onMove = (e: MouseEvent) => {
      tiltX.set((e.clientX / window.innerWidth) * 2 - 1);
      tiltY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile, tiltX, tiltY]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const orbit = root.querySelector<HTMLElement>("[data-orbit]");
    if (!orbit) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        orbit.style.animationPlayState = entry?.isIntersecting ? "running" : "paused";
      },
      { threshold: 0.1 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="perspective-cinema relative mx-auto h-[250px] w-full max-w-full overflow-hidden select-none sm:h-[400px] sm:overflow-visible lg:h-[520px]"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-72 sm:w-72"
        style={{ background: "var(--gradient-cool)", opacity: 0.28 }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-reel sm:h-56 sm:w-56"
        style={{ boxShadow: "var(--shadow-glow)" }}
      >
        {[0, 60, 120, 180, 240, 300].map((d) => (
          <span
            key={d}
            className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25"
            style={{ transform: `rotate(${d}deg) translateY(-64px)` }}
          />
        ))}
      </div>

      <motion.div className="preserve-3d absolute inset-0" style={{ rotateX: rotX, rotateZ: rotZ }}>
        <div data-orbit className="preserve-3d absolute left-1/2 top-1/2 animate-orbit-y">
          {films.map((film, i) => {
            const a = i * step;
            return (
              <div
                key={film.slug}
                className="preserve-3d absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${a}deg) translateZ(${radius}px)`,
                }}
              >
                <div
                  className="backface-hidden overflow-hidden rounded-md border border-border"
                  style={{
                    width: posterW,
                    height: posterH,
                    boxShadow: "var(--shadow-cine)",
                  }}
                >
                  <img
                    src={film.poster}
                    alt={pick(film.title, film.titleAr)}
                    width={832}
                    height={1216}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 scanlines opacity-20" />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
