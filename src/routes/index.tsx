import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { films } from "@/data/films";
import { StarField } from "@/components/StarField";
import { HeroOrbit } from "@/components/HeroOrbit";
import { FilmReel } from "@/components/FilmReel";
import { Reveal, RevealText } from "@/components/Reveal";
import hero from "@/assets/hero-cosmos.jpg";
import crew from "@/assets/about-crew.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Planet One — Documentary Film Production Studio" },
      {
        name: "description",
        content:
          "Planet One produces cinematic documentaries, shorts and series. One planet, endless stories — explore our films.",
      },
      { property: "og:title", content: "Planet One — Documentary Film Production Studio" },
      {
        property: "og:description",
        content: "Cinematic documentaries, shorts and series from Planet One.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, pick } = useI18n();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = [
    { v: "40+", k: "stats.films" },
    { v: "27", k: "stats.awards" },
    { v: "14", k: "stats.countries" },
    { v: "12", k: "stats.years" },
  ];

  const steps = [1, 2, 3, 4] as const;

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden grain">
        <motion.img
          src={hero}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          style={{ y: bgY, scale: bgScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background" />
        <div className="absolute inset-0">
          <StarField />
        </div>
        <div className="pointer-events-none absolute inset-0 scanlines opacity-20" />

        <div className="relative grid min-h-[100svh] w-full items-start gap-8 px-4 pt-24 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-28 lg:pb-20">
          <motion.div style={{ y: titleY, opacity: fade }}>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t("hero.kicker")}
            </motion.p>
            <h1 className="mt-4 text-[clamp(2.1rem,11vw,5.6rem)] leading-[0.95] sm:mt-5">
              <motion.span
                className="block text-foreground"
                initial={{ opacity: 0, y: 40, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("hero.title1")}
              </motion.span>
              <motion.span
                className="block text-gradient-ember"
                initial={{ opacity: 0, y: 40, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("hero.title2")}
              </motion.span>
            </h1>
            <motion.p
              className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              {t("hero.sub")}
            </motion.p>
            <motion.div
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9 }}
            >
              <Link
                to="/films"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary-foreground transition-transform hover:scale-105 sm:w-auto sm:py-4 sm:tracking-[0.22em]"
                style={{ background: "var(--gradient-ember)", boxShadow: "var(--shadow-ember)" }}
              >
                <Play size={14} fill="currentColor" />
                {t("hero.cta")}
              </Link>
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-[0.68rem] font-bold tracking-[0.18em] uppercase text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto sm:py-4 sm:tracking-[0.22em]"
              >
                {t("hero.cta2")}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity: fade }}
          >
            <HeroOrbit />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-center sm:block"
          style={{ opacity: fade }}
        >
          <p className="eyebrow">{t("hero.scroll")}</p>
          <motion.div
            className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-primary to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <section className="relative overflow-hidden border-y border-border/60 py-7 sm:py-9">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" dir="ltr">
          <motion.div
            className="flex h-full w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          >
            {[...films, ...films].map((f, i) => (
              <img
                key={`${f.slug}-bg-${i}`}
                src={f.poster}
                alt=""
                aria-hidden
                className="h-full w-[42vw] min-w-[160px] shrink-0 object-cover sm:w-[28vw] lg:w-[18vw]"
                style={{ filter: "blur(16px) saturate(125%) brightness(0.5)" }}
              />
            ))}
          </motion.div>
          <div className="absolute inset-0 bg-background/50" />
          <div className="pointer-events-none absolute inset-0 scanlines opacity-15" />
        </div>

        <div className="relative z-10 flex overflow-hidden" dir="ltr">
          <motion.div
            className="flex shrink-0 gap-8 pe-8 sm:gap-10 sm:pe-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {[...films, ...films].map((f, i) => (
              <span
                key={`${f.slug}-${i}`}
                className="flex shrink-0 items-center gap-8 font-display text-lg tracking-[0.14em] text-foreground/85 uppercase sm:text-xl lg:text-2xl"
              >
                {pick(f.title, f.titleAr)}
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- FILMS ---------------- */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="flex w-full flex-col gap-5 px-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:px-8">
          <div className="max-w-2xl text-start">
            <p className="eyebrow">{t("work.eyebrow")}</p>
            <h2 className="mt-3 text-3xl sm:text-6xl">
              <RevealText text={t("work.title")} className="text-foreground" />
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">{t("work.sub")}</p>
          </div>
          <Link
            to="/films"
            className="group inline-flex shrink-0 items-center gap-2 self-start text-xs font-bold tracking-[0.22em] text-accent uppercase sm:self-auto"
          >
            {t("work.all")}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
            />
          </Link>
        </div>

        <FilmReel />
      </section>

      {/* ---------------- ABOUT + CTA ---------------- */}
      <AboutCta />

      {/* ---------------- PROCESS + STATS ---------------- */}
      <section className="screen-panel relative overflow-hidden border-y border-border/60">
        <div className="w-full px-4 sm:px-8">
          <Reveal>
            <p className="eyebrow">{t("process.eyebrow")}</p>
            <h2 className="mt-3 text-3xl sm:text-5xl text-foreground">{t("process.title")}</h2>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((n, i) => (
              <Reveal key={n} delay={i * 0.1}>
                <div className="group h-full bg-background p-6 transition-colors hover:bg-card sm:p-8">
                  <span className="font-display text-5xl text-primary/30 transition-colors group-hover:text-accent">
                    0{n}
                  </span>
                  <h3 className="mt-5 text-xl text-foreground">{t(`process.${n}.t`)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(`process.${n}.d`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.k} delay={0.15 + i * 0.08} tilt>
                <div className="h-full bg-background px-6 py-7 transition-colors hover:bg-card">
                  <p className="font-display text-4xl text-gradient-cool sm:text-5xl">{s.v}</p>
                  <p className="mt-2 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
                    {t(s.k)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AboutCta() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border/60">
      <motion.img
        src={crew}
        alt=""
        aria-hidden
        loading="lazy"
        width={1600}
        height={1000}
        className="absolute inset-0 h-[120%] w-full object-cover"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-background/72" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 85% 110%, color-mix(in oklab, var(--ember) 28%, transparent), transparent 55%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 scanlines opacity-20" />

      <div className="relative grid w-full items-end gap-10 px-4 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h2 className="mt-3 max-w-xl text-3xl leading-[1.1] text-foreground sm:text-5xl">
            {t("about.title")}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("about.lead")}
          </p>
          <Link
            to="/about"
            className="group mt-6 inline-flex items-center gap-2 border-b border-accent pb-1 text-xs font-bold tracking-[0.22em] text-accent uppercase"
          >
            {t("nav.about")}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="surface-glass rounded-lg p-6 sm:p-8">
            <p className="eyebrow">{t("cta.sub")}</p>
            <h3 className="mt-3 text-2xl leading-tight sm:text-3xl">
              <span className="text-gradient-ember">{t("cta.title")}</span>
            </h3>
            <Link
              to="/contact"
              className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary-foreground transition-transform hover:scale-105 sm:w-auto sm:text-xs sm:tracking-[0.22em]"
              style={{ background: "var(--gradient-ember)", boxShadow: "var(--shadow-ember)" }}
            >
              {t("cta.btn")}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
