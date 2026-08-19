import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Clapperboard, MapPin, Play } from "lucide-react";
import { films, getFilm } from "@/data/films";
import { getYoutubeEmbedUrl } from "@/lib/youtube";
import type { Film } from "@/data/films";
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
  const themes = lang === "ar" ? film.themesAr : film.themes;
  const categoryKey = `film.category.${film.category}` as const;

  return (
    <>
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

        <div className="relative grid w-full items-start gap-10 px-4 pt-24 pb-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-16 lg:pt-28 lg:pb-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-24">
          <div>
            <Link
              to="/films"
              className="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.22em] text-primary uppercase"
            >
              <ArrowLeft size={14} className="rtl:rotate-180" />
              {t("film.back")}
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[0.62rem] font-bold tracking-[0.18em] text-accent uppercase">
                {t(categoryKey)}
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                {film.year}
              </span>
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

            <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
              <span>{pick(film.location, film.locationAr)}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <StarRating value={film.rating} size={20} />
              <span className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                {t("film.rating")}
              </span>
            </div>
          </div>

          <motion.div
            style={{ y: posterY }}
            className="mx-auto w-full max-w-[220px] sm:max-w-[240px] lg:max-w-none"
          >
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

      <section className="w-full border-y border-border/60 bg-card/20">
        <div className="grid w-full grid-cols-2 gap-px bg-border/60 sm:grid-cols-4">
          {[
            [t("film.runtime"), pick(film.runtime, film.runtimeAr)],
            [t("film.lang"), pick(film.language, film.languageAr)],
            [t("film.location"), pick(film.location, film.locationAr)],
            [t("film.year"), String(film.year)],
          ].map(([label, value]) => (
            <div key={label} className="bg-background px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-[0.58rem] tracking-[0.2em] text-muted-foreground uppercase">
                {label}
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full pb-16 pt-10 sm:pb-20">
        <Reveal className="w-full px-4 sm:px-8">
          <div
            className="relative aspect-video w-full overflow-hidden rounded-lg border border-border sm:rounded-xl"
            style={{ boxShadow: "var(--shadow-cine)" }}
          >
            {playing && film.clipUrl ? (
              <iframe
                src={getYoutubeEmbedUrl(film.clipUrl, true)}
                title={`${pick(film.title, film.titleAr)} trailer`}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
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
                  {t("film.watch")}
                </p>
              </>
            )}
            <div className="pointer-events-none absolute inset-0 scanlines opacity-20" />
          </div>
        </Reveal>
      </section>

      <section className="w-full px-4 pb-12 sm:px-8">
        <Reveal className="w-full">
          <blockquote className="relative w-full rounded-lg border border-border bg-card/40 px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-16">
            <div
              className="pointer-events-none absolute inset-x-6 top-0 h-px sm:inset-x-10 lg:inset-x-16"
              style={{ background: "var(--gradient-ember)" }}
            />
            <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
              “{pick(film.quote.text, film.quote.textAr)}”
            </p>
            <footer className="mt-5 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              — {pick(film.quote.by, film.quote.byAr)}
            </footer>
          </blockquote>
        </Reveal>
      </section>

      <section className="w-full px-4 py-16 sm:px-8 sm:py-20">
        <div className="grid w-full gap-12 lg:grid-cols-[1.35fr_0.9fr] lg:gap-16 xl:gap-20">
          <div className="space-y-14">
            <Reveal>
              <p className="eyebrow">{t("film.synopsis")}</p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                {pick(film.synopsis, film.synopsisAr)}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="eyebrow">{t("film.production")}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {pick(film.productionNote, film.productionNoteAr)}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="eyebrow">{t("film.themes")}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.14em] text-primary uppercase"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="eyebrow">{t("film.gallery")}</p>
              <div className="mt-6 grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {film.stills.map((still, i) => (
                  <div
                    key={`${still}-${i}`}
                    className={`overflow-hidden rounded-lg border border-border ${i === 0 ? "col-span-2 aspect-[21/9] sm:col-span-4" : "aspect-[4/5]"}`}
                  >
                    <img
                      src={still}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <CreditsPanel film={film} credits={credits} pick={pick} t={t} />
            </Reveal>

            <Reveal delay={0.18}>
              <div className="surface-glass rounded-lg p-8">
                <p className="eyebrow">{t("film.festivals")}</p>
                <ul className="mt-6 space-y-5">
                  {film.festivals.map((fest) => (
                    <li
                      key={`${fest.name}-${fest.year}`}
                      className="border-b border-border/60 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-semibold text-foreground">
                          {pick(fest.name, fest.nameAr)}
                        </p>
                        <span className="shrink-0 text-xs tracking-widest text-accent">
                          {fest.year}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {pick(fest.note, fest.noteAr)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="rounded-lg border border-border bg-card/30 p-8">
                <div className="flex items-center gap-2">
                  <Clapperboard size={16} className="text-gold" />
                  <p className="eyebrow !text-foreground">{t("film.awards")}</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {awards.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-border">
        <Link
          to="/films/$slug"
          params={{ slug: next.slug }}
          className="group relative flex min-h-[220px] w-full items-center justify-center overflow-hidden px-4 py-14 sm:min-h-[260px] sm:py-16"
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
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
              />
            </span>
          </div>
        </Link>
      </section>
    </>
  );
}

function CreditsPanel({
  film,
  credits,
  pick,
  t,
}: {
  film: Film;
  credits: Film["credits"];
  pick: (en: string, ar: string, es?: string) => string;
  t: (key: string) => string;
}) {
  const rows: [string, string][] = [
    [t("film.director"), credits.director],
    [t("film.producer"), credits.producer],
    [t("film.dop"), credits.dop],
    [t("film.editor"), credits.editor],
    [t("film.sound"), credits.sound],
    [t("film.music"), credits.music],
    [t("film.runtime"), pick(film.runtime, film.runtimeAr)],
    [t("film.lang"), pick(film.language, film.languageAr)],
  ];

  return (
    <div className="surface-glass rounded-lg p-8">
      <p className="eyebrow">{t("film.credits")}</p>
      <dl className="mt-6 space-y-5 text-sm">
        {rows.map(([k, v]) => (
          <div
            key={k}
            className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3"
          >
            <dt className="text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">{k}</dt>
            <dd className="text-end font-semibold text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
