import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { films } from "@/data/films";
import { useI18n } from "@/lib/i18n";
import { FilmCard } from "@/components/FilmCard";
import { RevealText } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { StarField } from "@/components/StarField";

export const Route = createFileRoute("/films/")({
  head: () => ({
    meta: [
      { title: "Films — Planet One Documentary Productions" },
      {
        name: "description",
        content:
          "Browse the Planet One filmography: feature documentaries, short films and series shot across 14 countries.",
      },
      { property: "og:title", content: "Films — Planet One" },
      {
        property: "og:description",
        content: "Feature documentaries, shorts and series produced by Planet One.",
      },
    ],
  }),
  component: FilmsPage,
});

const categories = [
  { id: "all", en: "All", ar: "الكل" },
  { id: "documentary", en: "Documentary", ar: "وثائقي" },
  { id: "short", en: "Short", ar: "قصير" },
  { id: "series", en: "Series", ar: "مسلسل" },
] as const;

function FilmsPage() {
  const { t, pick } = useI18n();
  const [cat, setCat] = useState<string>("all");

  const list = useMemo(
    () => (cat === "all" ? films : films.filter((f) => f.category === cat)),
    [cat],
  );

  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28">
        <div className="absolute inset-0 opacity-70">
          <StarField />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)",
          }}
        />
        <div className="relative w-full px-4 sm:px-8">
          <p className="eyebrow">{t("films.eyebrow")}</p>
          <h1 className="mt-3 text-[clamp(2.4rem,8vw,5.4rem)] leading-[0.95]">
            <RevealText text={t("films.title")} className="text-gradient-cool" />
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">{t("films.sub")}</p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`relative rounded-full border px-5 py-2.5 text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-all ${
                  cat === c.id
                    ? "border-accent text-accent"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {pick(c.en, c.ar)}
                {cat === c.id && (
                  <motion.span
                    layoutId="cat-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="mt-10 grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          >
            {list.map((f, i) => (
              <FilmCard key={f.slug} film={f} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection compact />
    </>
  );
}
