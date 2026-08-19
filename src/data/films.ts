export type { Film, FilmCredits, FilmFestival, FilmQuote } from "@/data/filmCatalog";

import { filmCatalog } from "@/data/filmCatalog";
import { filmMedia } from "@/data/filmMedia";

function withMedia<T extends (typeof filmCatalog)[number]>(film: T) {
  const media = filmMedia[film.slug];
  if (!media) return film;
  return {
    ...film,
    poster: media.poster,
    stills: [media.poster, ...media.stills],
    clipUrl: media.trailerId,
  };
}

export const films = filmCatalog.map(withMedia);

export const getFilm = (slug: string) => films.find((f) => f.slug === slug);
