import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { films, getFilm } from "@/data/films";
import { useI18n } from "@/lib/i18n";
import { StarRating } from "@/components/StarRating";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/films/$slug")({
  loader: ({ params }) => {
    const film = getFilm(params.slug);
    if (!film) throw notFound();
    return { film };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Film unavailable — Planet One" }, { name: "robots", content: "noindex" }],
      };
    }
    const { film } = loaderData;
    const title = `${film.title} (${film.year}) — Planet One`;
    return {
      meta: [
        { title },
        { name: "description", content: film.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: film.tagline },
      ],
    };
  },
  component: FilmPage,
});

function FilmPage() {
  const { film } = Route.useLoaderData();
  const { t, pick, lang } = useI18n();
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const posterY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const idx = films.findIndex((f) => f.slug === film.slug);
  const next = films[(idx + 1) % films.length] ?? films[0]!;

  const credits = lang === "ar" ? film.creditsAr : film.credits;
  const awards = lang === "ar" ? film.awardsAr : film.awards;

  return (
    <>
      {/* Blurred poster backdrop hero */}
      <section ref={ref} className="relative overflow-hidden grain">
        <motion.img
          src={film.poster}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-110 object-cover"
          style={{ filter: "blur(26px) saturate(130%)", y: bgY, scale: bgScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="pointer-events-none absolute inset-0 scanlines opacity-25" />

        <div className="relative mx-auto grid w-full max-w-6xl items-start gap-10 px-6 pt-24 pb-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-24 lg:px-12 lg:pt-28 lg:pb-8">
          <div>
            <Link
              to="/films"
              className="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.22em] text-primary uppercase"
            >
              <ArrowLeft size={14} className="rtl:rotate-180" />
              {t("film.back")}
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              <span>{film.year}</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>{pick(film.runtime, film.runtimeAr)}</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>{pick(film.language, film.languageAr)}</span>
            </div>

            <motion.h1
              className="mt-5 text-[clamp(2.4rem,7vw,5.2rem)] leading-[0.95] text-foreground"
              initial={{ opacity: 0, y: 40, rotateX: 30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {pick(film.title, film.titleAr)}
            </motion.h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {pick(film.tagline, film.taglineAr)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <StarRating value={film.rating} size={20} />
              <span className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                {t("film.rating")}
              </span>
            </div>
          </div>

          <motion.div style={{ y: posterY }} className="mx-auto w-full max-w-[220px] sm:max-w-[240px] lg:max-w-none">
            <motion.div
              className="overflow-hidden rounded-lg border border-border"
              initial={{ opacity: 0, rotateY: lang === "ar" ? -25 : 25, scale: 0.92 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ boxShadow: "var(--shadow-cine)", transformPerspective: 1200 }}
            >
              <img
                src={film.poster}
                alt={pick(film.title, film.titleAr)}
                width={832}
                height={1216}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clip player over blurred still */}
      <section className="relative pb-16 pt-2 sm:pb-20">
        <div className="flex w-full justify-center px-4 sm:px-8">
          <Reveal className="w-full max-w-xl">
            <div
              className="relative aspect-video overflow-hidden rounded-lg border border-border"
              style={{ boxShadow: "var(--shadow-cine)" }}
            >
              {playing && film.clipUrl ? (
                <video
                  src={film.clipUrl}
                  className="h-full w-full object-cover"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <>
                  <img
                    src={film.poster}
                    alt=""
                    aria-hidden
                    className="h-full w-full scale-110 object-cover"
                    style={{ filter: "blur(14px) brightness(0.65) saturate(120%)" }}
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <button
                      onClick={() => film.clipUrl && setPlaying(true)}
                      className="group grid h-16 w-16 place-items-center rounded-full border border-accent/60 bg-background/40 text-accent backdrop-blur-md transition-transform hover:scale-110 animate-pulse-ring"
                      aria-label={t("film.watch")}
                    >
                      <Play size={20} fill="currentColor" />
                    </button>
                  </div>
                  <p className="absolute inset-x-0 bottom-4 text-center text-[0.65rem] font-bold tracking-[0.28em] text-foreground/80 uppercase">
                    {film.clipUrl ? t("film.watch") : t("film.clipsoon")}
                  </p>
                </>
              )}
              <div className="pointer-events-none absolute inset-0 scanlines opacity-20" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Synopsis + credits */}
      <section className="w-full px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">{t("film.synopsis")}</p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              {pick(film.synopsis, film.synopsisAr)}
            </p>

            <p className="eyebrow mt-14 block">{t("film.awards")}</p>
            <ul className="mt-6 space-y-3">
              {awards.map((a) => (
                <li key={a} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="surface-glass rounded-lg p-8">
              <p className="eyebrow">{t("film.credits")}</p>
              <dl className="mt-6 space-y-5 text-sm">
                {[
                  [t("film.director"), credits.director],
                  [t("film.dop"), credits.dop],
                  [t("film.editor"), credits.editor],
                  [t("film.sound"), credits.sound],
                  [t("film.runtime"), pick(film.runtime, film.runtimeAr)],
                  [t("film.year"), String(film.year)],
                  [t("film.lang"), pick(film.language, film.languageAr)],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3">
                    <dt className="text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {k}
                    </dt>
                    <dd className="text-end font-semibold text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next film */}
      <section className="border-t border-border">
        <Link
          to="/films/$slug"
          params={{ slug: next.slug }}
          className="group relative flex min-h-[220px] items-center justify-center overflow-hidden px-4 py-14 sm:min-h-[260px] sm:py-16"
        >
          <img
            src={next.poster}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            style={{ filter: "blur(6px)" }}
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="relative text-center">
            <p className="eyebrow">{t("film.next")}</p>
            <h2 className="mt-3 text-3xl text-foreground sm:text-5xl">
              {pick(next.title, next.titleAr)}
            </h2>
            <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-accent uppercase">
              {t("work.open")}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </span>
          </div>
        </Link>
      </section>
    </>
  );
}
