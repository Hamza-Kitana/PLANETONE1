import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Film } from "@/data/films";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { StarRating } from "./StarRating";

export function FilmCard({
  film,
  className = "",
}: {
  film: Film;
  index?: number;
  className?: string;
}) {
  const { t, pick } = useI18n();

  return (
    <div className={cn("w-full max-w-[280px] sm:max-w-[340px]", className)}>
      <Link to="/films/$slug" params={{ slug: film.slug }} className="group block">
        <article className="overflow-hidden rounded-md border border-border bg-card transition-transform duration-500 group-hover:-translate-y-1.5">
          <div className="relative aspect-2/3 overflow-hidden">
            <img
              src={film.poster}
              alt={pick(film.title, film.titleAr)}
              loading="lazy"
              width={480}
              height={720}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <p className="text-[0.58rem] tracking-[0.18em] text-primary uppercase">
                {film.year} · {pick(film.runtime, film.runtimeAr)}
              </p>
              <h3 className="mt-1 line-clamp-2 font-display text-xl leading-tight text-foreground sm:text-2xl">
                {pick(film.title, film.titleAr)}
              </h3>
              <p className="mt-1 line-clamp-1 text-[0.72rem] text-muted-foreground">
                {pick(film.tagline, film.taglineAr)}
              </p>
              <div className="mt-2.5 flex items-center justify-between gap-2">
                <StarRating value={film.rating} size={12} />
                <span className="inline-flex items-center gap-1 text-[0.58rem] font-bold tracking-[0.16em] text-accent uppercase">
                  {t("work.open")}
                  <ArrowUpRight
                    size={11}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:translate-x-[-2px]"
                  />
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}
