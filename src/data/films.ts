export type { Film, FilmCredits, FilmFestival, FilmQuote } from "@/data/filmCatalog";

export { filmCatalog as films } from "@/data/filmCatalog";

import { filmCatalog } from "@/data/filmCatalog";

export const getFilm = (slug: string) => filmCatalog.find((f) => f.slug === slug);
