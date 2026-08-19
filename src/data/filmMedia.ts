/** Unique poster, stills, and thematic YouTube trailer per film. */
export type FilmMediaEntry = {
  poster: string;
  stills: string[];
  /** YouTube video ID (documentary / trailer matching the film theme). */
  trailerId: string;
};

const img = (photoId: string, w = 960) =>
  `https://images.unsplash.com/${photoId}?w=${w}&q=85&auto=format&fit=crop`;

export const filmMedia: Record<string, FilmMediaEntry> = {
  "last-dune": {
    poster: img("photo-1509316788379-8af629d39154"),
    stills: [
      img("photo-1451337519515-6b8552580a29", 800),
      img("photo-1473580044384-7bb996316e35", 800),
      img("photo-1504196603964-1ea6a934efbe", 800),
    ],
    trailerId: "eSCNpg2vrPE",
  },
  "city-of-embers": {
    poster: img("photo-1514565131-fce0801afb47"),
    stills: [
      img("photo-1480714378409-67cf0d13bc1b", 800),
      img("photo-1444723122797-aa43b4c8d161", 800),
      img("photo-1512453979798-5ea266f8880c", 800),
    ],
    trailerId: "1-iS8XT6jzk",
  },
  "clay-and-time": {
    poster: img("photo-1578741812375-ef24742b0a64"),
    stills: [
      img("photo-1610709033011-6d3f146b9d85", 800),
      img("photo-1578662996442-48f60103fc96", 800),
      img("photo-1565193566171-8a7e4a2f5e8a", 800),
    ],
    trailerId: "n8exn4z2w2Q",
  },
  "salt-line": {
    poster: img("photo-1544551763-77e05bdf8030"),
    stills: [
      img("photo-1505118386557-748489427769", 800),
      img("photo-1559827260-dc66d52bf194", 800),
      img("photo-1439066615861-d1ad04d129d4", 800),
    ],
    trailerId: "9Gp7X6TqW7Y",
  },
  "night-of-a-thousand-stones": {
    poster: img("photo-1419242902214-272b484170b"),
    stills: [
      img("photo-1464802686167-b939a6910659", 800),
      img("photo-1502134249126-9f3755a50d78", 800),
      img("photo-1446776653966-62c6364a4b6c", 800),
    ],
    trailerId: "8rAiTDQbbDE",
  },
  "girl-who-ran-home": {
    poster: img("photo-1488523999247-58d9a8902e62"),
    stills: [
      img("photo-1503454537190-1e855145137e", 800),
      img("photo-1491438590894-9f899436b0a8", 800),
      img("photo-1522202176988-66273c2fd55f", 800),
    ],
    trailerId: "EFk9MHHdZ0Y",
  },
  "voices-of-the-wadi": {
    poster: img("photo-1506905925346-21bda4d32df4"),
    stills: [
      img("photo-1464822759844-d150ba1e2f4b", 800),
      img("photo-1501785888041-ca6497098c10", 800),
      img("photo-1454492231519-6248c3bce912", 800),
    ],
    trailerId: "ZJ6fQhE4pcY",
  },
  "iron-and-ember": {
    poster: img("photo-1535131746868-66cafd45b1d9"),
    stills: [
      img("photo-1565793298595-6bb03bf63682", 800),
      img("photo-1581091226825-a6a2a5aee158", 800),
      img("photo-1504328345606-18bbc8c9d7d1", 800),
    ],
    trailerId: "wPZ4Jt0JLu4",
  },
  "letters-never-sent": {
    poster: img("photo-1471107340923-a7bb5381e989"),
    stills: [
      img("photo-1455390582740-9853e3fe5c0b", 800),
      img("photo-1586281380349-632531db7ed4", 800),
      img("photo-1516979187450-857ead7d74d2", 800),
    ],
    trailerId: "H5yOpg_ka4Y",
  },
  "harvest-moon": {
    poster: img("photo-1474979266404-7eaacbcd87c"),
    stills: [
      img("photo-1622547748968-aa20d5c3929", 800),
      img("photo-1470337458703-46ad1756a187", 800),
      img("photo-1500382017468-9049fed747f7", 800),
    ],
    trailerId: "c0KYU2j0TM4",
  },
  "border-song": {
    poster: img("photo-1511379934352-2605e1d4e6a"),
    stills: [
      img("photo-1493225457124-a3eb161ffa5f", 800),
      img("photo-1514525253161-7a46d19cd819", 800),
      img("photo-1511671782779-c977d3b5a016", 800),
    ],
    trailerId: "k3v-ZimtK8M",
  },
  "keeper-of-keys": {
    poster: img("photo-1600596542815-ffad4c1539a9"),
    stills: [
      img("photo-1600607687939-ce8a6c25118c", 800),
      img("photo-1600585154340-be6161a56a0c", 800),
      img("photo-1600566753190-17f0baa2a6a3", 800),
    ],
    trailerId: "SZ5JjLdzQ1o",
  },
  "midnight-market": {
    poster: img("photo-1555396273-3677eaee1280"),
    stills: [
      img("photo-1578662996442-48f60103fc96", 800),
      img("photo-1533900298318-1b672721e2b4", 800),
      img("photo-1555932494-efd681c7e3f9", 800),
    ],
    trailerId: "i6Wmq3V7j_4",
  },
  "wind-over-olives": {
    poster: img("photo-1622547748968-aa20d5c3929"),
    stills: [
      img("photo-1500382017468-9049fed747f7", 800),
      img("photo-1464226184884-fa280b87c399", 800),
      img("photo-1500595046743-cd271d6d9d2b", 800),
    ],
    trailerId: "Rml2BFQ3Kr4",
  },
  "river-that-remembers": {
    poster: img("photo-1433082216281-0833bf384556"),
    stills: [
      img("photo-1473448913668-0f7c92c0b5b0", 800),
      img("photo-1509316788379-8af629d39154", 800),
      img("photo-1432405262680-0a0d4b0a843e", 800),
    ],
    trailerId: "aGSK8c2XcSk",
  },
  "last-lighthouse": {
    poster: img("photo-1505118386557-748489427769"),
    stills: [
      img("photo-1551244072-3f0a5a1d4c1b", 800),
      img("photo-1507525428034-b723cf961d3e", 800),
      img("photo-1439066615861-d1ad04d129d4", 800),
    ],
    trailerId: "mMPsJKEGb-o",
  },
  "three-sisters-cafe": {
    poster: img("photo-1554118811-1e0d58224f24"),
    stills: [
      img("photo-1495474472287-4d71bcdd2085", 800),
      img("photo-1501339847305-ac826a4e37e7", 800),
      img("photo-1511920170033-f8396924c348", 800),
    ],
    trailerId: "1Ge8V3r6rdE",
  },
  "dust-of-karak": {
    poster: img("photo-1566073771259-6a8506099945"),
    stills: [
      img("photo-1579606032821-8cdc8a3e5760", 800),
      img("photo-1548013146-72479768bada", 800),
      img("photo-1580137189270-5a7c072f4220", 800),
    ],
    trailerId: "dr4E6lSUVAo",
  },
  "echoes-of-petra": {
    poster: img("photo-1579606032821-8cdc8a3e5760"),
    stills: [
      img("photo-1548013146-72479768bada", 800),
      img("photo-1580137189270-5a7c072f4220", 800),
      img("photo-1566073771259-6a8506099945", 800),
    ],
    trailerId: "Ja110qpd0wU",
  },
  "children-of-the-rail": {
    poster: img("photo-1475274047020-b1c0f098163e"),
    stills: [
      img("photo-1519005132414-7c4bf5c8d8b8", 800),
      img("photo-1464037860881-536a1edfcbcf", 800),
      img("photo-1544622667-969a9e725405", 800),
    ],
    trailerId: "uC0X6qW0pQc",
  },
};
