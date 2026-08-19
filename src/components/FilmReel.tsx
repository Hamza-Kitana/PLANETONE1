import { films } from "@/data/films";
import { FilmCard } from "@/components/FilmCard";

export function FilmReel() {
  const loop = [...films, ...films];

  return (
    <div className="relative mt-10 w-full overflow-hidden py-4" dir="ltr">
      <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div className="flex w-max min-w-full gap-5 pe-5 animate-film-reel hover:[animation-play-state:paused] sm:gap-6">
        {loop.map((film, i) => (
          <FilmCard
            key={`${film.slug}-${i}`}
            film={film}
            index={i}
            className="w-[240px] max-w-[240px] shrink-0 sm:w-[300px] sm:max-w-[300px] lg:w-[340px] lg:max-w-[340px]"
          />
        ))}
      </div>
    </div>
  );
}
