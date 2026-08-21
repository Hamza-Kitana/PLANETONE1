/** Unique cinematic stills per film — each Unsplash ID used only once across the catalogue. */
export type FilmMediaEntry = {
  poster: string;
  stills: string[];
  /** YouTube video ID — must be a real, embeddable public video. */
  trailerId: string;
};

const img = (photoId: string, w = 960) =>
  `https://images.unsplash.com/${photoId}?w=${w}&q=85&auto=format&fit=crop`;

export const filmMedia: Record<string, FilmMediaEntry> = {
  "last-dune": {
    poster: img("photo-1500534314209-a25ddb2bd429"),
    stills: [
      img("photo-1469474968028-56623f02e42e", 800),
      img("photo-1472214103451-9374bd1c798e", 800),
    ],
    trailerId: "eSCNpg2vrPE",
  },
  "city-of-embers": {
    poster: img("photo-1477959858617-67f85cf4f1df"),
    stills: [
      img("photo-1512453979798-5ea266f8880c", 800),
      img("photo-1555881400-74d7acaacd8b", 800),
    ],
    trailerId: "2LqzF5WauAw",
  },
  "clay-and-time": {
    poster: img("photo-1610701596007-11502861dcfa"),
    stills: [
      img("photo-1578662996442-48f60103fc96", 800),
      img("photo-1578911373434-0cb395d2cbfb", 800),
    ],
    trailerId: "8X2qs-Tgi7E",
  },
  "salt-line": {
    poster: img("photo-1507525428034-b723cf961d3e"),
    stills: [
      img("photo-1505142468610-359e7d316be0", 800),
      img("photo-1518837695005-2083093ee35b", 800),
    ],
    trailerId: "6oR0iVwdY7M",
  },
  "night-of-a-thousand-stones": {
    poster: img("photo-1464802686167-b939a6910659"),
    stills: [
      img("photo-1519681393784-d120267933ba", 800),
      img("photo-1502134249126-9f3755a50d78", 800),
    ],
    trailerId: "e-P5IFTqB98",
  },
  "girl-who-ran-home": {
    poster: img("photo-1488521787991-ed7bbaae773c"),
    stills: [
      img("photo-1529626455594-4ff0802cfb7e", 800),
      img("photo-1594737625785-a6cbdabd333c", 800),
    ],
    trailerId: "563_lBO3wiY",
  },
  "voices-of-the-wadi": {
    poster: img("photo-1506905925346-21bda4d32df4"),
    stills: [
      img("photo-1464822759023-fed622ff2c3b", 800),
      img("photo-1482192505345-5655af888cc4", 800),
    ],
    trailerId: "ZJ6fQhE4pcY",
  },
  "iron-and-ember": {
    poster: img("photo-1504328345606-18bbc8c9d7d1"),
    stills: [
      img("photo-1581091226825-a6a2a5aee158", 800),
      img("photo-1519003722824-194d4455a60c", 800),
    ],
    trailerId: "igUQwX6vZRU",
  },
  "letters-never-sent": {
    poster: img("photo-1455390582262-044cdead277a"),
    stills: [
      img("photo-1586281380349-632531db7ed4", 800),
      img("photo-1470770841072-f978cf4d019e", 800),
    ],
    trailerId: "T1nVy-puZzU",
  },
  "harvest-moon": {
    poster: img("photo-1500382017468-9049fed747ef"),
    stills: [
      img("photo-1464226184884-fa280b87c399", 800),
      img("photo-1470337458703-46ad1756a187", 800),
    ],
    trailerId: "A3Ik24G2RLY",
  },
  "border-song": {
    poster: img("photo-1511379938547-c1f69419868d"),
    stills: [
      img("photo-1493225457124-a3eb161ffa5f", 800),
      img("photo-1514525253161-7a46d19cd819", 800),
    ],
    trailerId: "XLzMtQJnH8k",
  },
  "keeper-of-keys": {
    poster: img("photo-1600596542815-ffad4c1539a9"),
    stills: [
      img("photo-1600607687939-ce8a6c25118c", 800),
      img("photo-1600585154340-be6161a56a0c", 800),
    ],
    trailerId: "C67rl6MNGe0",
  },
  "midnight-market": {
    poster: img("photo-1488459716781-31db52582fe9"),
    stills: [
      img("photo-1504674900247-0877df9cc836", 800),
      img("photo-1414235077428-338989a2e8c0", 800),
    ],
    trailerId: "6Af6b_wyiwI",
  },
  "wind-over-olives": {
    poster: img("photo-1441974231531-c6227db76b6e"),
    stills: [
      img("photo-1465146633011-14f8e0781093", 800),
      img("photo-1447752875215-b2761acb3c5d", 800),
    ],
    trailerId: "LXb3EKWsInQ",
  },
  "river-that-remembers": {
    poster: img("photo-1433832597046-4f10e10ac764"),
    stills: [
      img("photo-1476514525535-07fb3b4ae5f1", 800),
      img("photo-1493246507139-91e8fad9978e", 800),
    ],
    trailerId: "kf9e1o7rUeo",
  },
  "last-lighthouse": {
    poster: img("photo-1559339352-11d035aa65de"),
    stills: [
      img("photo-1475924156734-496f6cac6ec1", 800),
      img("photo-1501785888041-af3ef285b470", 800),
    ],
    trailerId: "dr4E6lSUVAo",
  },
  "three-sisters-cafe": {
    poster: img("photo-1554118811-1e0d58224f24"),
    stills: [
      img("photo-1495474472287-4d71bcdd2085", 800),
      img("photo-1511920170033-f8396924c348", 800),
    ],
    trailerId: "c0KYU2j0TM4",
  },
  "dust-of-karak": {
    poster: img("photo-1566073771259-6a8506099945"),
    stills: [
      img("photo-1548013146-72479768bada", 800),
      img("photo-1516483638261-f4dbaf036963", 800),
    ],
    trailerId: "SZ5JjLdzQ1o",
  },
  "echoes-of-petra": {
    poster: img("photo-1605649487212-47bdab064df7"),
    stills: [
      img("photo-1523906834658-6e24ef2386f9", 800),
      img("photo-1519904981063-b0cf448d479e", 800),
    ],
    trailerId: "Ja110qpd0wU",
  },
  "children-of-the-rail": {
    poster: img("photo-1474487548417-781cb71495f3"),
    stills: [
      img("photo-1500530855697-b586d89ba3ee", 800),
      img("photo-1466978913421-dad2ebd01d17", 800),
    ],
    trailerId: "QImCld9YubE",
  },
};
