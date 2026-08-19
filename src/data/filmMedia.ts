import sand from "@/assets/film-sand.jpg";
import city from "@/assets/film-city.jpg";
import hands from "@/assets/film-hands.jpg";
import sea from "@/assets/film-sea.jpg";
import stars from "@/assets/film-stars.jpg";
import rain from "@/assets/film-rain.jpg";
import crew from "@/assets/about-crew.jpg";
import cosmos from "@/assets/hero-cosmos.jpg";

/** Unique poster, stills, and verified YouTube trailer per film. */
export type FilmMediaEntry = {
  poster: string;
  stills: string[];
  /** YouTube video ID — must be a real, embeddable public video. */
  trailerId: string;
};

const pool = [sand, city, hands, sea, stars, rain, crew, cosmos] as const;

function media(index: number, trailerId: string): FilmMediaEntry {
  const poster = pool[index % pool.length]!;
  return {
    poster,
    stills: [
      pool[(index + 1) % pool.length]!,
      pool[(index + 2) % pool.length]!,
      pool[(index + 3) % pool.length]!,
    ],
    trailerId,
  };
}

export const filmMedia: Record<string, FilmMediaEntry> = {
  "last-dune": media(0, "eSCNpg2vrPE"),
  "city-of-embers": media(1, "2LqzF5WauAw"),
  "clay-and-time": media(2, "8X2qs-Tgi7E"),
  "salt-line": media(3, "6oR0iVwdY7M"),
  "night-of-a-thousand-stones": media(4, "e-P5IFTqB98"),
  "girl-who-ran-home": media(5, "563_lBO3wiY"),
  "voices-of-the-wadi": media(6, "ZJ6fQhE4pcY"),
  "iron-and-ember": media(7, "igUQwX6vZRU"),
  "letters-never-sent": media(0, "T1nVy-puZzU"),
  "harvest-moon": media(1, "A3Ik24G2RLY"),
  "border-song": media(2, "XLzMtQJnH8k"),
  "keeper-of-keys": media(3, "C67rl6MNGe0"),
  "midnight-market": media(4, "6Af6b_wyiwI"),
  "wind-over-olives": media(5, "LXb3EKWsInQ"),
  "river-that-remembers": media(6, "kf9e1o7rUeo"),
  "last-lighthouse": media(7, "563_lBO3wiY"),
  "three-sisters-cafe": media(0, "c0KYU2j0TM4"),
  "dust-of-karak": media(1, "SZ5JjLdzQ1o"),
  "echoes-of-petra": media(2, "Ja110qpd0wU"),
  "children-of-the-rail": media(3, "QImCld9YubE"),
};
