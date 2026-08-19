import sand from "@/assets/film-sand.jpg";
import city from "@/assets/film-city.jpg";
import hands from "@/assets/film-hands.jpg";
import sea from "@/assets/film-sea.jpg";
import stars from "@/assets/film-stars.jpg";
import rain from "@/assets/film-rain.jpg";
import crew from "@/assets/about-crew.jpg";
import cosmos from "@/assets/hero-cosmos.jpg";

export type FilmCredits = {
  director: string;
  dop: string;
  editor: string;
  sound: string;
  producer: string;
  music: string;
};

export type FilmFestival = {
  name: string;
  nameAr: string;
  year: number;
  note: string;
  noteAr: string;
};

export type FilmQuote = {
  text: string;
  textAr: string;
  by: string;
  byAr: string;
};

export type Film = {
  slug: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  year: number;
  runtime: string;
  runtimeAr: string;
  category: "documentary" | "short" | "series";
  language: string;
  languageAr: string;
  rating: number;
  poster: string;
  location: string;
  locationAr: string;
  synopsis: string;
  synopsisAr: string;
  productionNote: string;
  productionNoteAr: string;
  themes: string[];
  themesAr: string[];
  quote: FilmQuote;
  stills: string[];
  credits: FilmCredits;
  creditsAr: FilmCredits;
  awards: string[];
  awardsAr: string[];
  festivals: FilmFestival[];
  clipUrl?: string;
};

const posters = [sand, city, hands, sea, stars, rain] as const;
const stillPool = [sand, city, hands, sea, stars, rain, crew, cosmos] as const;

function stills(poster: string, index: number): string[] {
  return [
    poster,
    stillPool[(index + 1) % stillPool.length]!,
    stillPool[(index + 2) % stillPool.length]!,
    stillPool[(index + 3) % stillPool.length]!,
  ];
}

export const filmCatalog: Film[] = [
  {
    slug: "last-dune",
    title: "The Last Dune",
    titleAr: "الكثيب الأخير",
    tagline: "A shepherd walks a desert that is eating his map.",
    taglineAr: "راعٍ يمشي في صحراء تأكل خريطته.",
    year: 2025,
    runtime: "84 min",
    runtimeAr: "٨٤ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 5,
    poster: sand,
    location: "Southern Jordan · Wadi Rum",
    locationAr: " جنوب الأردن · وادي رم",
    synopsis:
      "For three seasons we followed Sabri, the last shepherd of a valley the sand is swallowing. As wells dry and neighbours leave for the city, he keeps walking a route his grandfather drew in 1961 — a map of a country that no longer exists.",
    synopsisAr:
      "على مدى ثلاثة فصول لاحقنا صبري، آخر راعٍ في وادٍ يبتلعه الرمل. تجفّ الآبار ويرحل الجيران إلى المدينة، وهو يواصل السير على طريق رسمه جدّه عام ١٩٦١ — خريطة بلادٍ لم تبقَ.",
    productionNote:
      "Shot across four seasons with a two-person crew. No interviews to camera in the first month — only walking, until Sabri forgot we were there.",
    productionNoteAr:
      "صُوّر على مدى أربعة فصول بطاقم من شخصين. لا مقابلات أمام الكاميرا في الشهر الأول — فقط مشي، حتى نسي صبري أننا موجودون.",
    themes: ["Climate", "Migration", "Memory"],
    themesAr: ["المناخ", "الهجرة", "الذاكرة"],
    quote: {
      text: "The sand does not hurry. That is why I still walk.",
      textAr: "الرمل لا يستعجل. لذلك ما زلت أمشي.",
      by: "Sabri Al-Hawamdeh",
      byAr: "صبري الحوامدة",
    },
    stills: stills(sand, 0),
    credits: {
      director: "Hamza Al-Daboor",
      dop: "Lina Sabbagh",
      editor: "Karim Nassar",
      sound: "Mira Haddad",
      producer: "Yara Mansour",
      music: "Tarek Aziz",
    },
    creditsAr: {
      director: "حمزة الدبعور",
      dop: "لينا صباغ",
      editor: "كريم نصار",
      sound: "ميرا حداد",
      producer: "يارا منصور",
      music: "طارق عزيز",
    },
    awards: ["Official Selection — Red Sea IFF", "Best Cinematography — Amman Doc"],
    awardsAr: ["اختيار رسمي — مهرجان البحر الأحمر", "أفضل تصوير — أمّان الوثائقي"],
    festivals: [
      {
        name: "Red Sea International Film Festival",
        nameAr: "مهرجان البحر الأحمر السينمائي",
        year: 2025,
        note: "Official Selection · World Documentary",
        noteAr: "اختيار رسمي · وثائقي عالمي",
      },
      {
        name: "Amman Documentary Film Festival",
        nameAr: "مهرجان عمّان للأفلام الوثائقية",
        year: 2025,
        note: "Best Cinematography",
        noteAr: "أفضل تصوير",
      },
    ],
  },
  {
    slug: "city-of-embers",
    title: "City of Embers",
    titleAr: "مدينة الجمر",
    tagline: "One night, seven rooftops, a city that never cools.",
    taglineAr: "ليلة واحدة، سبعة أسطح، ومدينة لا تبرد.",
    year: 2024,
    runtime: "72 min",
    runtimeAr: "٧٢ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4.5,
    poster: city,
    location: "Amman · Jordan",
    locationAr: "عمّان · الأردن",
    synopsis:
      "Shot entirely between sunset and sunrise, City of Embers maps a metropolis through the people who work while it sleeps: a baker, a night nurse, a taxi driver, and a boy selling roses to cars that never stop.",
    synopsisAr:
      "صُوّر بالكامل بين الغروب والفجر. ترسم «مدينة الجمر» ملامح العاصمة من خلال من يعملون فيها وهي نائمة: خبّاز، وممرضة ليل، وسائق تاكسي، وطفل يبيع الورد لسيارات لا تتوقف.",
    productionNote:
      "Twelve consecutive night shoots. Available light only — sodium streetlamps, oven glow, phone screens. The city wrote its own colour grade.",
    productionNoteAr:
      "اثنا عشر ليلة تصوير متتالية. ضوء متاح فقط — مصابيح الشوارع، وهج الفرن، شاشات الهاتف. المدينة رسمت درجاتها اللونية بنفسها.",
    themes: ["Labour", "Urban life", "Night"],
    themesAr: ["العمل", "الحياة الحضرية", "الليل"],
    quote: {
      text: "The city belongs to whoever is still awake.",
      textAr: "المدينة لمن ما زال مستيقظاً.",
      by: "Yara Mansour",
      byAr: "يارا منصور",
    },
    stills: stills(city, 1),
    credits: {
      director: "Yara Mansour",
      dop: "Hamza Al-Daboor",
      editor: "Omar Bishara",
      sound: "Tarek Aziz",
      producer: "Hamza Al-Daboor",
      music: "Mira Haddad",
    },
    creditsAr: {
      director: "يارا منصور",
      dop: "حمزة الدبعور",
      editor: "عمر بشارة",
      sound: "طارق عزيز",
      producer: "حمزة الدبعور",
      music: "ميرا حداد",
    },
    awards: ["Jury Prize — Beirut Docs", "Nominated — Arab Critics Award"],
    awardsAr: ["جائزة لجنة التحكيم — بيروت الوثائقي", "ترشيح — جائزة النقاد العرب"],
    festivals: [
      {
        name: "Beirut International Documentary Festival",
        nameAr: "مهرجان بيروت الدولي للأفلام الوثائقية",
        year: 2024,
        note: "Jury Prize",
        noteAr: "جائزة لجنة التحكيم",
      },
    ],
  },
  {
    slug: "clay-and-time",
    title: "Clay and Time",
    titleAr: "الطين والزمن",
    tagline: "Ninety years in a pair of hands.",
    taglineAr: "تسعون عاماً في زوج من اليدين.",
    year: 2024,
    runtime: "26 min",
    runtimeAr: "٢٦ دقيقة",
    category: "short",
    language: "Arabic",
    languageAr: "عربي",
    rating: 4.5,
    poster: hands,
    location: "Madaba · Jordan",
    locationAr: "مادبا · الأردن",
    synopsis:
      "Abu Sulaiman has shaped clay on the same wheel since 1958. His sons left the craft; his grandson returns with a camera. A quiet portrait of inheritance, dust and the exact weight of a bowl.",
    synopsisAr:
      "يشكّل أبو سليمان الطين على العجلة ذاتها منذ عام ١٩٥٨. تركَ أبناؤه المهنة، وعاد حفيده بكاميرا. بورتريه هادئ عن الإرث والغبار ووزن الإناء بالضبط.",
    productionNote:
      "Filmed in Abu Sulaiman's workshop over six weeks. One microphone inside the kiln captured the crackle of firing — half the score came from that room.",
    productionNoteAr:
      "صُوّر في مشغل أبي سليمان على مدى ستة أسابيع. ميكروفون واحد داخل الفرن التقط صوت الحرق — نصف الموسيقى جاء من تلك الغرفة.",
    themes: ["Craft", "Heritage", "Family"],
    themesAr: ["الحرفة", "الإرث", "العائلة"],
    quote: {
      text: "The bowl knows its weight before my hands do.",
      textAr: "الإناء يعرف وزنه قبل يدي.",
      by: "Abu Sulaiman",
      byAr: "أبو سليمان",
    },
    stills: stills(hands, 2),
    credits: {
      director: "Nour Khalil",
      dop: "Lina Sabbagh",
      editor: "Nour Khalil",
      sound: "Mira Haddad",
      producer: "Nour Khalil",
      music: "Karim Nassar",
    },
    creditsAr: {
      director: "نور خليل",
      dop: "لينا صباغ",
      editor: "نور خليل",
      sound: "ميرا حداد",
      producer: "نور خليل",
      music: "كريم نصار",
    },
    awards: ["Best Short Doc — Carthage", "Audience Award — Dead Sea Shorts"],
    awardsAr: ["أفضل فيلم وثائقي قصير — قرطاج", "جائزة الجمهور — أفلام البحر الميت"],
    festivals: [
      {
        name: "Carthage Film Festival",
        nameAr: "أيام قرطاج السينمائية",
        year: 2024,
        note: "Best Short Documentary",
        noteAr: "أفضل فيلم وثائقي قصير",
      },
    ],
  },
  {
    slug: "salt-line",
    title: "Salt Line",
    titleAr: "خط الملح",
    tagline: "The sea gives, the sea takes, the sea keeps score.",
    taglineAr: "البحر يعطي ويأخذ، والبحر يحسبها.",
    year: 2023,
    runtime: "68 min",
    runtimeAr: "٦٨ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4,
    poster: sea,
    location: "Aqaba · Red Sea coast",
    locationAr: "العقبة · ساحل البحر الأحمر",
    synopsis:
      "A fishing village wakes at 3 a.m. for a catch that shrinks every year. Across one full season we ride with three boats through storms, debt and a coastline being sold behind their backs.",
    synopsisAr:
      "قرية صيد تستيقظ الثالثة فجراً لصيدٍ يتقلّص كل عام. على مدى موسم كامل نرافق ثلاثة قوارب عبر العواصف والدَّين وساحلٍ يُباع من خلف ظهورهم.",
    productionNote:
      "Three boats, one drone, zero dry days. We lost a lens to salt spray on day nine and kept shooting with a towel wrapped around the camera.",
    productionNoteAr:
      "ثلاثة قوارب، طائرة بدون طيار واحدة، ولا يوم جاف. فقدنا عدسة بسبب رذاذ الملح في اليوم التاسع وواصلنا التصوير بمنشفة ملفوفة حول الكamera.",
    themes: ["Ocean", "Economy", "Community"],
    themesAr: ["البحر", "الاقتصاد", "المجتمع"],
    quote: {
      text: "The sea remembers every debt we owe it.",
      textAr: "البحر يتذكّر كل دين ندينه له.",
      by: "Captain Rashid",
      byAr: "الربّان راشد",
    },
    stills: stills(sea, 3),
    credits: {
      director: "Hamza Al-Daboor",
      dop: "Rami Sultan",
      editor: "Karim Nassar",
      sound: "Tarek Aziz",
      producer: "Yara Mansour",
      music: "Mira Haddad",
    },
    creditsAr: {
      director: "حمزة الدبعور",
      dop: "رامي سلطان",
      editor: "كريم نصار",
      sound: "طارق عزيز",
      producer: "يارا منصور",
      music: "ميرا حداد",
    },
    awards: ["Official Selection — IDFA Forum", "Green Screen Honourable Mention"],
    awardsAr: ["اختيار رسمي — منتدى IDFA", "تنويه خاص — غرين سكرين"],
    festivals: [
      {
        name: "IDFA Forum",
        nameAr: "منتدى IDFA",
        year: 2023,
        note: "Official Selection",
        noteAr: "اختيار رسمي",
      },
    ],
  },
  {
    slug: "night-of-a-thousand-stones",
    title: "Night of a Thousand Stones",
    titleAr: "ليلة ألف حجر",
    tagline: "Astronomers and Bedouin read the same sky differently.",
    taglineAr: "الفلكيون والبدو يقرأون السماء ذاتها بطريقتين.",
    year: 2022,
    runtime: "3 × 45 min",
    runtimeAr: "٣ × ٤٥ دقيقة",
    category: "series",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4.5,
    poster: stars,
    location: "Wadi Rum · Jordan",
    locationAr: "وادي رم · الأردن",
    synopsis:
      "A three-part series shot in the desert dark. Astronomers arrive with telescopes; the families who have navigated by those stars for centuries arrive with names for all of them. Two sciences meet over one fire.",
    synopsisAr:
      "مسلسل من ثلاث حلقات صُوّر في عتمة الصحراء. يأتي الفلكيون بتلسكوباتهم، وتأتي العائلات التي اهتدت بتلك النجوم قروناً بأسماءٍ لها كلها. علمان يلتقيان حول نار واحدة.",
    productionNote:
      "Episode two was cut entirely around a single fire — no artificial light for eleven nights. Star trackers and Bedouin elders shared the same frame.",
    productionNoteAr:
      "حلقة الثانية قُصّت بالكامل حول نار واحدة — بلا إضاءة اصطناعية لأحد عشر ليلة. متتبّعو النجوم وشيوخ البدو شاركوا الإطار ذاته.",
    themes: ["Science", "Tradition", "Desert"],
    themesAr: ["العلم", "التقاليد", "الصحراء"],
    quote: {
      text: "We named these stars before your maps had names for our land.",
      textAr: "سمّينا هذه النجوم قبل أن تحمل خرائطكم أسماءً لأرضنا.",
      by: "Umm Faisal",
      byAr: "أم فيصل",
    },
    stills: stills(stars, 4),
    credits: {
      director: "Yara Mansour",
      dop: "Rami Sultan",
      editor: "Omar Bishara",
      sound: "Mira Haddad",
      producer: "Hamza Al-Daboor",
      music: "Tarek Aziz",
    },
    creditsAr: {
      director: "يارا منصور",
      dop: "رامي سلطان",
      editor: "عمر بشارة",
      sound: "ميرا حداد",
      producer: "حمزة الدبعور",
      music: "طارق عزيز",
    },
    awards: ["Best Series — Gulf Film Festival", "Broadcast in 11 countries"],
    awardsAr: ["أفضل مسلسل — مهرجان الخليج السينمائي", "عُرض في ١١ دولة"],
    festivals: [
      {
        name: "Gulf Film Festival",
        nameAr: "مهرجان الخليج السينمائي",
        year: 2022,
        note: "Best Series",
        noteAr: "أفضل مسلسل",
      },
    ],
  },
  {
    slug: "girl-who-ran-home",
    title: "The Girl Who Ran Home",
    titleAr: "الفتاة التي رَكضت إلى البيت",
    tagline: "Eleven years old, four kilometres, every single morning.",
    taglineAr: "إحدى عشرة سنة، أربعة كيلومترات، كل صباح.",
    year: 2021,
    runtime: "31 min",
    runtimeAr: "٣١ دقيقة",
    category: "short",
    language: "Arabic",
    languageAr: "عربي",
    rating: 4,
    poster: rain,
    location: "Zarqa · Jordan",
    locationAr: "الزرقاء · الأردن",
    synopsis:
      "Hala runs to school and back through wet alleys, then teaches her mother to read at night. A short film about the smallest engine of change: a child who refuses to stop.",
    synopsisAr:
      "هالة تركض إلى المدرسة وتعود عبر أزقة مبلّلة، ثم تعلّم أمها القراءة في الليل. فيلم قصير عن أصغر محرّك للتغيير: طفلة ترفض أن تتوقف.",
    productionNote:
      "Hala chose which mornings we could film. We ran with her — the steadicam operator lost four kilos. Her mother learned to read before we locked the cut.",
    productionNoteAr:
      "هالة اختارت أي الصباحات يمكننا التصوير فيها. ركضنا معها — فقد مشغّل الستeadycam أربعة كيلو. تعلّمت أمها القراءة قبل أن نغلق المونتاج.",
    themes: ["Education", "Youth", "Resilience"],
    themesAr: ["التعليم", "الشباب", "الصمود"],
    quote: {
      text: "I run because stopping feels like going backwards.",
      textAr: "أركض لأن التوقف يشبه الرجوع للخلف.",
      by: "Hala",
      byAr: "هالة",
    },
    stills: stills(rain, 5),
    credits: {
      director: "Nour Khalil",
      dop: "Lina Sabbagh",
      editor: "Karim Nassar",
      sound: "Tarek Aziz",
      producer: "Nour Khalil",
      music: "Mira Haddad",
    },
    creditsAr: {
      director: "نور خليل",
      dop: "لينا صباغ",
      editor: "كريم نصار",
      sound: "طارق عزيز",
      producer: "نور خليل",
      music: "ميرا حداد",
    },
    awards: ["Special Mention — Clermont-Ferrand", "Best Short — Cairo Shorts"],
    awardsAr: ["تنويه خاص — كليرمون فيران", "أفضل قصير — القاهرة للأفلام القصيرة"],
    festivals: [
      {
        name: "Clermont-Ferrand Short Film Festival",
        nameAr: "مهرجان كليرمون فيران للأفلام القصيرة",
        year: 2021,
        note: "Special Mention",
        noteAr: "تنويه خاص",
      },
    ],
  },
  {
    slug: "voices-of-the-wadi",
    title: "Voices of the Wadi",
    titleAr: "أصوات الوادي",
    tagline: "Every echo in the canyon has a name.",
    taglineAr: "لكل صدى في الوادي اسم.",
    year: 2020,
    runtime: "58 min",
    runtimeAr: "٥٨ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4,
    poster: posters[0]!,
    location: "Dana Biosphere · Jordan",
    locationAr: "محمية ضana · الأردن",
    synopsis:
      "In a canyon where phone signal dies at the entrance, three generations of women sing harvest songs no radio has ever carried. A film about voice, distance and the acoustics of belonging.",
    synopsisAr:
      "في وادٍ تموت فيه إشارة الهاتف عند مدخله، تغنّي ثلاثة أجيال من النساء أناشيد حصاد لم يبثها أي رadio. فيلم عن الصوت والمسافة وصوتيات الانتماء.",
    productionNote:
      "Recorded in ambisonic sound — the canyon became the mixing room. No score; only voices and wind.",
    productionNoteAr: "سُجّل بصوت ambisonic — الوادي صار غرفة المiks. بلا موسيقى؛ فقط أصوات وريح.",
    themes: ["Music", "Women", "Landscape"],
    themesAr: ["الموسيقى", "النساء", "الطبيعة"],
    quote: {
      text: "We sing so the valley remembers we were here.",
      textAr: "نغنّي حتى يتذكّر الوادي أننا كنا هنا.",
      by: "Latifa",
      byAr: "لطيفة",
    },
    stills: stills(posters[0]!, 6),
    credits: {
      director: "Nour Khalil",
      dop: "Lina Sabbagh",
      editor: "Omar Bishara",
      sound: "Mira Haddad",
      producer: "Yara Mansour",
      music: "—",
    },
    creditsAr: {
      director: "نور خليل",
      dop: "لينا صباغ",
      editor: "عمر بشارة",
      sound: "ميرا حداد",
      producer: "يارا منصور",
      music: "—",
    },
    awards: ["Best Sound Design — Marrakech Doc"],
    awardsAr: ["أفضل تصميم صوتي — مراكش الوثائقي"],
    festivals: [
      {
        name: "Marrakech Documentary Festival",
        nameAr: "مهرجان مراكش للأفلام الوثائقية",
        year: 2020,
        note: "Best Sound Design",
        noteAr: "أفضل تصميم صوتي",
      },
    ],
  },
  {
    slug: "iron-and-ember",
    title: "Iron and Ember",
    titleAr: "الحديد والجمر",
    tagline: "Sparks fly where the railway used to end.",
    taglineAr: "شرر يطير حيث كان القطار ينتهي.",
    year: 2019,
    runtime: "76 min",
    runtimeAr: "٧٦ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4.5,
    poster: posters[1]!,
    location: "Ma'an · Jordan",
    locationAr: "معان · الأردن",
    synopsis:
      "Blacksmiths weld scrap from a disused railway into gates, tools and art. As the last train route closes, they become the keepers of its metal memory.",
    synopsisAr:
      "حدّادون يلحّمون خردة سكة حديد مهجورة إلى بوابات وأدوات وفن. مع إغلاق آخر خط قطار، يصبحون حرّاس ذاكرتها المعدنية.",
    productionNote:
      "Shot beside live forges — heat haze on every lens. We burned through three ND filters and gained the smell of iron in our kit bags.",
    productionNoteAr:
      "صُوّر بجوار مكابس حية — اهتزاز حراري على كل عدسة. أحرقنا ثلاثة فلاتر ND واكتسبنا رائحة الحديد في حقائب معداتنا.",
    themes: ["Industry", "Memory", "Craft"],
    themesAr: ["الصناعة", "الذاكرة", "الحرفة"],
    quote: {
      text: "Steel remembers the train even when the tracks are gone.",
      textAr: "الفولاذ يتذكّر القطار حتى حين تختفي القضبان.",
      by: "Abu Tareq",
      byAr: "أبو طارق",
    },
    stills: stills(posters[1]!, 7),
    credits: {
      director: "Hamza Al-Daboor",
      dop: "Rami Sultan",
      editor: "Karim Nassar",
      sound: "Tarek Aziz",
      producer: "Hamza Al-Daboor",
      music: "Karim Nassar",
    },
    creditsAr: {
      director: "حمزة الدبعور",
      dop: "رامي سلطان",
      editor: "كريم نصار",
      sound: "طارق عزيز",
      producer: "حمزة الدبعور",
      music: "كريم نصار",
    },
    awards: ["Audience Award — Dubai Film Days"],
    awardsAr: ["ج award الجمهور — أيام دبي السينمائية"],
    festivals: [
      {
        name: "Dubai Film Days",
        nameAr: "أيام دبي السينمائية",
        year: 2019,
        note: "Audience Award",
        noteAr: "جائزة الجمهور",
      },
    ],
  },
  {
    slug: "letters-never-sent",
    title: "Letters Never Sent",
    titleAr: "رسائل لم تُرسَل",
    tagline: "A post office drawer full of unsent lives.",
    taglineAr: "درج بريد مليء بحيوات لم تُرسَل.",
    year: 2023,
    runtime: "62 min",
    runtimeAr: "٦٢ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4,
    poster: posters[2]!,
    location: "Salt · Jordan",
    locationAr: "السلط · الأردن",
    synopsis:
      "When a provincial post office closes, the postmaster opens forty years of dead letters — love notes, job applications, apologies never delivered. Each envelope becomes a portrait.",
    synopsisAr:
      "مع إغلاق مكتب بريد provincial، يفتح رئيس البريد أربعين عاماً من الرسائل الميّتة — رسائل حب، طلبات عمل، اعتذارات لم تُسلَّم. كل ظرف يصبح بورتريه.",
    productionNote:
      "Every letter in the film is real, with permission. We filmed each reading in the room where it was first written, when that room still stood.",
    productionNoteAr:
      "كل رسالة في الفيلم حقيقية بإذن أصحابها. صوّرنا كل قراءة في الغرفة التي كُتبت فيها أول مرة، حين كانت لا تزال قائمة.",
    themes: ["Memory", "Migration", "Archive"],
    themesAr: ["الذاكرة", "الهجرة", "الأرشيف"],
    quote: {
      text: "Some letters wait longer than the people who wrote them.",
      textAr: "بعض الرسائل تنتظر أطول من كتّابها.",
      by: "Postmaster Nabil",
      byAr: "رئيس البريد نبيل",
    },
    stills: stills(posters[2]!, 8),
    credits: {
      director: "Yara Mansour",
      dop: "Lina Sabbagh",
      editor: "Omar Bishara",
      sound: "Mira Haddad",
      producer: "Yara Mansour",
      music: "Tarek Aziz",
    },
    creditsAr: {
      director: "يارا منصور",
      dop: "لينا صباغ",
      editor: "عمر بشارة",
      sound: "ميرا حداد",
      producer: "يارا منصور",
      music: "طارق عزيز",
    },
    awards: ["Best Documentary — Oran Arab Film Festival"],
    awardsAr: ["أفضل وثائقي — مهرجان وهران للسينema العربية"],
    festivals: [
      {
        name: "Oran Arab Film Festival",
        nameAr: "مهرجان وهران للسينما العربية",
        year: 2023,
        note: "Best Documentary",
        noteAr: "أفضل فيلم وثائقي",
      },
    ],
  },
  {
    slug: "harvest-moon",
    title: "Harvest Moon",
    titleAr: "قمر الحصاد",
    tagline: "One night when the whole village stays awake.",
    taglineAr: "ليلة واحدة يبقى فيها القرية كلها مستيقظة.",
    year: 2022,
    runtime: "44 min",
    runtimeAr: "٤٤ دقيقة",
    category: "short",
    language: "Arabic",
    languageAr: "عربي",
    rating: 4,
    poster: posters[3]!,
    location: "Irbid · Jordan Valley",
    locationAr: "إrbid · غور الأردن",
    synopsis:
      "Olive harvest under a full moon — families who only meet once a year, knives flashing, stories traded between trees older than any deed.",
    synopsisAr:
      "حصاد زيتون تحت بdr كامل — عائلات تلتقي مرة واحدة في السنة، سكاكين تلمع، حكايات تُتبادل بين أشجار أقدم من أي سند ملكية.",
    productionNote:
      "One continuous night shoot. Moonlight exposure tests took three harvests to get right.",
    productionNoteAr:
      "ليلة تصوير واحدة متواصلة. تجارب تع exposure القمر استغرقت ثلاثة حصادات حتى نجحت.",
    themes: ["Agriculture", "Family", "Ritual"],
    themesAr: ["الزراعة", "العائلة", "الطقس"],
    quote: {
      text: "The trees do not care who owns the land. They only know the hands.",
      textAr: "الأشجار لا تبالي بمن يملك الأرض. تعرف الأيدي فقط.",
      by: "Farmer Issa",
      byAr: "الفلّاح عيسى",
    },
    stills: stills(posters[3]!, 9),
    credits: {
      director: "Nour Khalil",
      dop: "Hamza Al-Daboor",
      editor: "Nour Khalil",
      sound: "Tarek Aziz",
      producer: "Nour Khalil",
      music: "Mira Haddad",
    },
    creditsAr: {
      director: "نور خليل",
      dop: "حمزة الدبعور",
      editor: "نور خليل",
      sound: "طارق عزيز",
      producer: "نور خليل",
      music: "ميرا حداد",
    },
    awards: ["Best Short — Tripoli Film Festival"],
    awardsAr: ["أفضل قصير — مهرجان طرابلس السينمائي"],
    festivals: [
      {
        name: "Tripoli Film Festival",
        nameAr: "مهرجان طرابلس السينمائي",
        year: 2022,
        note: "Best Short",
        noteAr: "أفضل فيلم قصير",
      },
    ],
  },
  {
    slug: "border-song",
    title: "Border Song",
    titleAr: "أغنية الحدود",
    tagline: "Music carried across a line drawn in 1922.",
    taglineAr: "موسيقى عبرت خطاً رُسم عام ١٩٢٢.",
    year: 2021,
    runtime: "91 min",
    runtimeAr: "٩١ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4.5,
    poster: posters[4]!,
    location: "Jordan · Syria border region",
    locationAr: "منطقة الحدود الأردنية السورية",
    synopsis:
      "Musicians on both sides of a closed border exchange tapes, phone recordings and melodies through a valley that echoes equally in two countries.",
    synopsisAr:
      " موسيقيون على جانبي حدود مغلقة يتبادلون casettes وتسجيلات هاتف وألحاناً عبر وادٍ يصدح بالتساوي في بلدين.",
    productionNote:
      "No border crossing for the crew. Two units filmed in parallel — the edit is where the countries meet.",
    productionNoteAr:
      "لم يعبُر الطاقم الحدود. وحدتان صوّرتا بالتوازي — المونtaj هو حيث تلتقي البلدان.",
    themes: ["Music", "Borders", "Connection"],
    themesAr: ["الموسيقى", "الحدود", "التواصل"],
    quote: {
      text: "The valley never needed a passport to carry a melody.",
      textAr: "الوادي لم يحتج جواز سفر ليحمل لحناً.",
      by: "Musician Samir",
      byAr: "الموسيقي سمير",
    },
    stills: stills(posters[4]!, 10),
    credits: {
      director: "Hamza Al-Daboor",
      dop: "Rami Sultan",
      editor: "Karim Nassar",
      sound: "Mira Haddad",
      producer: "Hamza Al-Daboor",
      music: "Various artists",
    },
    creditsAr: {
      director: "حمزة الدبعور",
      dop: "رامي سلطان",
      editor: "كريم نصار",
      sound: "ميرا حداد",
      producer: "حمزة الدبعور",
      music: "فنانون متعددون",
    },
    awards: ["Golden Tanit Nominee — Carthage", "Best Feature Doc — Baghdad IFF"],
    awardsAr: ["ترشيح التانيت الذهبية — قرطاج", "أفضل وثائقي طويل — بغداد"],
    festivals: [
      {
        name: "Baghdad International Film Festival",
        nameAr: "مهرجان بغداد السينمائي الدولي",
        year: 2021,
        note: "Best Feature Documentary",
        noteAr: "أفضل فيلم وثائقي طويل",
      },
    ],
  },
  {
    slug: "keeper-of-keys",
    title: "Keeper of Keys",
    titleAr: "حارس المفاتيح",
    tagline: "Four hundred doors, one man, no master list.",
    taglineAr: "أربعمائة باب، رجل واحد، بلا قائمة رئيسية.",
    year: 2020,
    runtime: "52 min",
    runtimeAr: "٥٢ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4,
    poster: posters[5]!,
    location: "Old Amman · Jordan",
    locationAr: "عمّان القديمة · الأردن",
    synopsis:
      "The unofficial custodian of a hillside neighbourhood holds keys to empty flats, shuttered shops and apartments whose owners left decades ago. A map of absence.",
    synopsisAr:
      "الحارس غير الرسمي لحيّ على slope يحمل مفاتيح شقق فارغة ومحلات مغلقة وشقق غادر أصحابها منذ عقود. خريطة للغياب.",
    productionNote:
      "Filmed over eighteen months. Every key was labelled in a notebook the keeper refused to show until month ten.",
    productionNoteAr:
      "صُوّر على مدى ثمانية عشر شهراً. كل مفتاح مُوسوم في دفتر رفض الحارس إظهاره حتى الشهر العاشر.",
    themes: ["City", "Absence", "Trust"],
    themesAr: ["المدينة", "الغياب", "الثقة"],
    quote: {
      text: "I keep the keys because someone might come back.",
      textAr: "أحتفظ بالمفاتيح لأن أحداً قد يعود.",
      by: "Abu Mahmoud",
      byAr: "أبو محمود",
    },
    stills: stills(posters[5]!, 11),
    credits: {
      director: "Yara Mansour",
      dop: "Lina Sabbagh",
      editor: "Omar Bishara",
      sound: "Tarek Aziz",
      producer: "Yara Mansour",
      music: "Karim Nassar",
    },
    creditsAr: {
      director: "يارا منصور",
      dop: "لينا صباغ",
      editor: "عمر بشارة",
      sound: "طارق عزيز",
      producer: "يارا منصور",
      music: "كريم نصار",
    },
    awards: ["Special Jury Mention — Malmö Arab Film Festival"],
    awardsAr: ["تنويه خاص من لجنة التحكيم — مalmö"],
    festivals: [
      {
        name: "Malmö Arab Film Festival",
        nameAr: "مهرجان مalmö للسينما العربية",
        year: 2020,
        note: "Special Jury Mention",
        noteAr: "تنويه خاص من لجنة التحكيم",
      },
    ],
  },
  {
    slug: "midnight-market",
    title: "Midnight Market",
    titleAr: "سوق منتصف الليل",
    tagline: "Wholesale before the city wakes.",
    taglineAr: "جملة قبل أن تستيقظ المدينة.",
    year: 2024,
    runtime: "38 min",
    runtimeAr: "٣٨ دقيقة",
    category: "short",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4,
    poster: posters[0]!,
    location: "Amman · Jordan",
    locationAr: "عمّان · الأردن",
    synopsis:
      "From 1 a.m. to 5 a.m., a wholesale market feeds an entire capital — porters, truckers, buyers and a cat who owns the loading dock.",
    synopsisAr:
      "من الواحدة فجراً إلى الخامسة، سوق جملة يُغذّي العاصمة بأكملها — عمال، سائقو شاحنات، مشترون وقطّ يملك رصيف التحميل.",
    productionNote:
      "Four dawn shoots. Fluorescent light only — we white-balanced on a tomato crate.",
    productionNoteAr:
      "أربعة فجرات تصوير. ضوء fluorescent فقط — ضبطنا white balance على صندوق طماطم.",
    themes: ["Labour", "Food", "Night"],
    themesAr: ["العمل", "الطعام", "الليل"],
    quote: {
      text: "The city eats what we unload before sunrise.",
      textAr: "المدينة تأكل ما نفرّغه قبل الشروق.",
      by: "Porter Ahmad",
      byAr: "العامل أحمد",
    },
    stills: stills(posters[0]!, 12),
    credits: {
      director: "Nour Khalil",
      dop: "Hamza Al-Daboor",
      editor: "Karim Nassar",
      sound: "Mira Haddad",
      producer: "Nour Khalil",
      music: "Tarek Aziz",
    },
    creditsAr: {
      director: "نور خليل",
      dop: "حمزة الدبعور",
      editor: "كريم نصار",
      sound: "ميرا حداد",
      producer: "نور خليل",
      music: "طارق عزيز",
    },
    awards: ["Best Short — Ramallah Doc Week"],
    awardsAr: ["أفضل قصير — أسبوع رamallah الوثائقي"],
    festivals: [
      {
        name: "Ramallah Documentary Week",
        nameAr: "أسبوع رamallah للأفلام الوثائقية",
        year: 2024,
        note: "Best Short",
        noteAr: "أفضل فيلم قصير",
      },
    ],
  },
  {
    slug: "wind-over-olives",
    title: "Wind Over Olives",
    titleAr: "ريح فوق الزيتون",
    tagline: "A grove that survived every map redraw.",
    taglineAr: "بستان نجا من كل إعادة رسم للخريطة.",
    year: 2019,
    runtime: "79 min",
    runtimeAr: "٧٩ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4.5,
    poster: posters[1]!,
    location: "Ajloun · Jordan",
    locationAr: "عجلون · الأردن",
    synopsis:
      "An olive grove predates every border around it. Three families claim stewardship; one film follows a single harvest season as law, drought and tradition collide.",
    synopsisAr:
      "بستان زيتون يسبق كل حدود حوله. ثلاث عائلات تدّعي custodianship؛ فيلم واحد يتابع موسم حصاد واحد حيث يتصادم القانون والجفاف والتقاليد.",
    productionNote:
      "Aerial and ground units filmed the same trees for ninety days. The wind sound is entirely location — no library wind was used.",
    productionNoteAr:
      "وحدات جوية وأرضية صوّرت الأشجار ذاتها تسعين يوماً. صوت الريح location بالكامل — لم نستخدم wind من المكتبة.",
    themes: ["Land", "Climate", "Heritage"],
    themesAr: ["الأرض", "المناخ", "الإرث"],
    quote: {
      text: "These trees were here before our arguments about them.",
      textAr: "هذه الأشجار كانت هنا قبل جدالاتنا حولها.",
      by: "Family elder Salim",
      byAr: "شيخ العائلة سلim",
    },
    stills: stills(posters[1]!, 13),
    credits: {
      director: "Hamza Al-Daboor",
      dop: "Rami Sultan",
      editor: "Karim Nassar",
      sound: "Mira Haddad",
      producer: "Hamza Al-Daboor",
      music: "Tarek Aziz",
    },
    creditsAr: {
      director: "حمزة الدبعور",
      dop: "رامي سلطان",
      editor: "كريم نصار",
      sound: "ميرا حداد",
      producer: "حمزة الدبعور",
      music: "طارق عزيز",
    },
    awards: ["Environmental Film Award — Cairo IFF"],
    awardsAr: ["جائزة الفيلm البيئي — القاهرة"],
    festivals: [
      {
        name: "Cairo International Film Festival",
        nameAr: "مهرجان القاهرة السينمائي الدولي",
        year: 2019,
        note: "Environmental Film Award",
        noteAr: "جائزة الفيلم البيئي",
      },
    ],
  },
  {
    slug: "river-that-remembers",
    title: "The River That Remembers",
    titleAr: "النهر الذي يتذكّر",
    tagline: "Water returns to a valley that forgot its name.",
    taglineAr: "ماء يعود إلى وادٍ نسي اسمه.",
    year: 2023,
    runtime: "66 min",
    runtimeAr: "٦٦ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4,
    poster: posters[2]!,
    location: "Jordan Valley · Jordan",
    locationAr: "غور الأردن · الأردن",
    synopsis:
      "After twenty dry years, a seasonal river returns. Farmers, ecologists and children who have never seen running water meet at the bank.",
    synopsisAr:
      "بعد عشرين عاماً جaf، يعود نهر موسمي. farmers وعلماء بيئة وأطفال لم يروا ماءً جارياً يلتقون على الضفة.",
    productionNote:
      "We arrived the week the water came — unplanned. The crew camped on the bank for the full three-week flow.",
    productionNoteAr:
      "وصلنا الأسبوع الذي جاء فيه الماء — دون ت plan. camp الطاقm على الضفة طوال تدفق ثلاثة أسابيع.",
    themes: ["Water", "Climate", "Hope"],
    themesAr: ["الماء", "المناخ", "الأمل"],
    quote: {
      text: "My grandfather told me about this river. I thought he was dreaming.",
      textAr: "جدّي حدّثني عن هذا النهر. ظننت أنه يحلم.",
      by: "Young farmer Noor",
      byAr: "الفلّاح الشاب نور",
    },
    stills: stills(posters[2]!, 14),
    credits: {
      director: "Yara Mansour",
      dop: "Lina Sabbagh",
      editor: "Omar Bishara",
      sound: "Tarek Aziz",
      producer: "Yara Mansour",
      music: "Mira Haddad",
    },
    creditsAr: {
      director: "يارا منصور",
      dop: "لينا صباغ",
      editor: "عمر بشارة",
      sound: "طارق عزيز",
      producer: "يارا منصور",
      music: "ميرا حداد",
    },
    awards: ["Green Vision Award — Thessaloniki Doc"],
    awardsAr: ["جائزة الرؤية الخضراء — سالoniciki"],
    festivals: [
      {
        name: "Thessaloniki Documentary Festival",
        nameAr: "مهرجان سالoniciki للأفلام الوثائقية",
        year: 2023,
        note: "Green Vision Award",
        noteAr: "جائزة الرؤية الخضراء",
      },
    ],
  },
  {
    slug: "last-lighthouse",
    title: "The Last Lighthouse",
    titleAr: "المنارة الأخيرة",
    tagline: "A beam that still turns though the ships are gone.",
    taglineAr: "شعاع ما زال يدور رغم أن السفن رحلت.",
    year: 2022,
    runtime: "48 min",
    runtimeAr: "٤٨ دقيقة",
    category: "short",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4.5,
    poster: posters[3]!,
    location: "Aqaba · Red Sea",
    locationAr: "العقبة · البحر الأحمر",
    synopsis:
      "The keeper of a decommissioned lighthouse climbs 214 steps every dusk. Tourists photograph the view; he keeps the lamp turning for boats that no longer come.",
    synopsisAr:
      "حارس منارة خارج الخدمة يصعد ٢١٤ درجة كل غروب. سياح يصوّرون المنظر؛ هو يُبقي المصباح يدور لBoats لم تعد تأتي.",
    productionNote:
      "Every dusk for six weeks — locked-off time-lapses of the beam alongside the keeper's climb, cut to his heartbeat in post.",
    productionNoteAr:
      "ستة أسابيع من every غروب — time-lapses ثابتة للشعاع مع صعود الحارس، قُصّت على إيقاع قلبه في المونtaj.",
    themes: ["Isolation", "Sea", "Routine"],
    themesAr: ["العزلة", "البحر", "الروتين"],
    quote: {
      text: "The light is not for them. It is for whoever is still out there.",
      textAr: "الضوء ليس لهم. إنه لمن ما زال هناك.",
      by: "Keeper Hassan",
      byAr: "الحارس حسan",
    },
    stills: stills(posters[3]!, 15),
    credits: {
      director: "Nour Khalil",
      dop: "Rami Sultan",
      editor: "Nour Khalil",
      sound: "Mira Haddad",
      producer: "Nour Khalil",
      music: "Karim Nassar",
    },
    creditsAr: {
      director: "نور خليل",
      dop: "رامي سلطان",
      editor: "نور خليل",
      sound: "ميرا حداد",
      producer: "نور خليل",
      music: "كريم نصار",
    },
    awards: ["Best Cinematography — Red Sea Shorts"],
    awardsAr: ["أفضل تصوير — البحر الأحمر للأفلام القصيرة"],
    festivals: [
      {
        name: "Red Sea Short Film Festival",
        nameAr: "مهرجان البحر الأحمر للأفلام القصيرة",
        year: 2022,
        note: "Best Cinematography",
        noteAr: "أفضل تصوير",
      },
    ],
  },
  {
    slug: "three-sisters-cafe",
    title: "Three Sisters Café",
    titleAr: "مقهى الأخوات الثلاث",
    tagline: "Coffee, politics and the same table since 1974.",
    taglineAr: "قهوة، سياسة، ونفس الطاولة منذ ١٩٧٤.",
    year: 2021,
    runtime: "55 min",
    runtimeAr: "٥٥ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4,
    poster: posters[4]!,
    location: "Amman · Jordan",
    locationAr: "عمّان · الأردن",
    synopsis:
      "Three sisters run a café that never closed — through wars, curfews and the internet age. Regulars arrive for coffee and leave having solved nothing and everything.",
    synopsisAr:
      "ثلاث أخوات يديرن مقهى لم يُغلق — عبر حروب وحظر تجول وعصر الإنترnet. زبائن regulars يأتون للقهوة ويغادرون وقد حلوا nothing وeverything.",
    productionNote:
      "Six fixed cameras mounted in corners for two weeks — the café forgot them by day three.",
    productionNoteAr: "ست كameras ثابتة في الزواia لأسبوعين — نسي المقهى وجودها في اليوم الثالث.",
    themes: ["Community", "Women", "City"],
    themesAr: ["المجتمع", "النساء", "المدينة"],
    quote: {
      text: "We do not serve news. We serve the room that hears it.",
      textAr: "لا نقدّم الأخبار. نقدّم الغرفة التي تسمعها.",
      by: "Sister Widad",
      byAr: "الأخت widad",
    },
    stills: stills(posters[4]!, 16),
    credits: {
      director: "Yara Mansour",
      dop: "Lina Sabbagh",
      editor: "Omar Bishara",
      sound: "Tarek Aziz",
      producer: "Yara Mansour",
      music: "Karim Nassar",
    },
    creditsAr: {
      director: "يارا منصور",
      dop: "لينا صباغ",
      editor: "عمر بشارة",
      sound: "طارق عزيز",
      producer: "يارا منصور",
      music: "كريم نصار",
    },
    awards: ["Audience Award — Amman Doc"],
    awardsAr: ["جائزة الجمهور — عمّان الوثائقي"],
    festivals: [
      {
        name: "Amman Documentary Film Festival",
        nameAr: "مهرجان عمّان للأفلام الوثائقية",
        year: 2021,
        note: "Audience Award",
        noteAr: "جائزة الجمهور",
      },
    ],
  },
  {
    slug: "dust-of-karak",
    title: "Dust of Karak",
    titleAr: "غبار الكarak",
    tagline: "A castle shadow over a modern town.",
    taglineAr: "ظلّ قلعة فوق بلدة modern.",
    year: 2020,
    runtime: "70 min",
    runtimeAr: "٧٠ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4,
    poster: posters[5]!,
    location: "Karak · Jordan",
    locationAr: "الكرk · الأردن",
    synopsis:
      "Below a Crusader castle, a town rebuilds itself around tourism, youth unemployment and memories of a siege no textbook agrees on.",
    synopsisAr:
      "تحت قلعة صليبية، بلدة تعيد بناء نفسها حول السياحة وبطالة الشباب وذكريات حصار لا يتفق عليه أي كتاب.",
    productionNote:
      "Drone and handheld — the castle always in frame, never the subject. The town looked back at it.",
    productionNoteAr:
      "drone وhandheld — القلعة always في الإطار، never الموضوع. البلدة were تنظر إليها.",
    themes: ["History", "Youth", "Tourism"],
    themesAr: ["التاريخ", "الشباب", "السياحة"],
    quote: {
      text: "The castle watches us more than we watch it.",
      textAr: "القلعة تراقبنا أكثر مما نراقبها.",
      by: "Guide Mutasim",
      byAr: "المرشد معتصم",
    },
    stills: stills(posters[5]!, 17),
    credits: {
      director: "Hamza Al-Daboor",
      dop: "Rami Sultan",
      editor: "Karim Nassar",
      sound: "Tarek Aziz",
      producer: "Hamza Al-Daboor",
      music: "Mira Haddad",
    },
    creditsAr: {
      director: "حمزة الدبعور",
      dop: "رامي سلطان",
      editor: "كريم نصار",
      sound: "طارق عزيز",
      producer: "حمزة الدبعور",
      music: "ميرا حداد",
    },
    awards: ["Official Selection — Sheffield Doc/Fest"],
    awardsAr: ["اختيار رسمي — Sheffield Doc/Fest"],
    festivals: [
      {
        name: "Sheffield Doc/Fest",
        nameAr: "Sheffield Doc/Fest",
        year: 2020,
        note: "Official Selection",
        noteAr: "اختيار رسمي",
      },
    ],
  },
  {
    slug: "echoes-of-petra",
    title: "Echoes of Petra",
    titleAr: "أصداء البetra",
    tagline: "The canyon sells silence by the hour.",
    taglineAr: "الوادي يبيع الصمت بالساعة.",
    year: 2025,
    runtime: "82 min",
    runtimeAr: "٨٢ دقيقة",
    category: "documentary",
    language: "Arabic · EN subs",
    languageAr: "عربي · ترجمة إنجليزية",
    rating: 4.5,
    poster: posters[0]!,
    location: "Petra · Jordan",
    locationAr: "البtra · الأردن",
    synopsis:
      "Guides, archaeologists and vendors navigate a World Heritage site turning into a stage — counting tourists by the hour while the canyon keeps its own time.",
    synopsisAr:
      "مرشدون وarcheologists وبائعون يت navigون موقع تراث عالمي يتحول إلى stage — يعدّون السياح بالساعة بينما الوادي يح keeping وقته.",
    productionNote:
      "Shot before dawn and after last ticket — the only hours the site breathes. No re-enactments; only the economics of wonder.",
    productionNoteAr:
      "صُوّر قبل الفجر وبعد آخر ticket — الساعات الوحيدة التي يتنفس فيها الموقع. بلا re-enactments؛ فقط economics العجب.",
    themes: ["Heritage", "Tourism", "Economy"],
    themesAr: ["التراث", "السياحة", "الاقتصاد"],
    quote: {
      text: "We sell wonder. The canyon does not invoice us.",
      textAr: "نبيع العجب. الوادي لا يُ send لنا فاتورة.",
      by: "Guide Layla",
      byAr: "المرشدة layla",
    },
    stills: stills(posters[0]!, 18),
    credits: {
      director: "Yara Mansour",
      dop: "Hamza Al-Daboor",
      editor: "Omar Bishara",
      sound: "Mira Haddad",
      producer: "Hamza Al-Daboor",
      music: "Tarek Aziz",
    },
    creditsAr: {
      director: "يارا منصور",
      dop: "حمزة الدبعور",
      editor: "عمر بشارة",
      sound: "ميرا حداد",
      producer: "حمزة الدبعور",
      music: "طارق عزيز",
    },
    awards: ["World Premiere — Red Sea IFF 2025"],
    awardsAr: ["العرض العالمي الأول — مهرجان البحر الأحمر ٢٠٢٥"],
    festivals: [
      {
        name: "Red Sea International Film Festival",
        nameAr: "مهرajan البحر الأحمر السينمائي",
        year: 2025,
        note: "World Premiere",
        noteAr: "العرض العالمي الأول",
      },
    ],
  },
  {
    slug: "children-of-the-rail",
    title: "Children of the Rail",
    titleAr: "أطفال السكة",
    tagline: "Playgrounds drawn in the shadow of freight lines.",
    taglineAr: "ملاعب مرسومة في ظل خطوط الشحن.",
    year: 2018,
    runtime: "42 min",
    runtimeAr: "٤٢ دقيقة",
    category: "short",
    language: "Arabic",
    languageAr: "عربي",
    rating: 4,
    poster: posters[1]!,
    location: "Zarqa · Jordan",
    locationAr: "الزرقاء · الأردن",
    synopsis:
      "Children build worlds between active freight tracks — games, rules and territories invisible to every timetable. A short film about play under infrastructure.",
    synopsisAr:
      "أطفال يبنون worlds بين مسارات شحن active — ألعاب وrules وterritories invisible لكل timetable. فيلم قصير عن اللعب تحت البنية التحتية.",
    productionNote:
      "Safety crew on every shoot day. The children directed where we could stand — their map, not ours.",
    productionNoteAr:
      "طاقm safety في كل يوم تصوير. الأطفال وجّهوا أين يمكننا الوقوف — خريطتهم، لا خ ours.",
    themes: ["Childhood", "Infrastructure", "Play"],
    themesAr: ["الطفولة", "البنية التحتية", "اللعب"],
    quote: {
      text: "The train has its schedule. We have ours.",
      textAr: "للقطار جدوله. ولنا جدولنا.",
      by: "Omar, age 10",
      byAr: "عمر، ١٠ سنوات",
    },
    stills: stills(posters[1]!, 19),
    credits: {
      director: "Nour Khalil",
      dop: "Lina Sabbagh",
      editor: "Karim Nassar",
      sound: "Tarek Aziz",
      producer: "Nour Khalil",
      music: "Karim Nassar",
    },
    creditsAr: {
      director: "نور خليل",
      dop: "لينا صباغ",
      editor: "كريم نصار",
      sound: "طارق عزيز",
      producer: "نور خليل",
      music: "كريم نصار",
    },
    awards: ["Best Short — Gouna Film Festival"],
    awardsAr: ["أفضل قصير — مهرجان الجونة"],
    festivals: [
      {
        name: "Gouna Film Festival",
        nameAr: "مهرجان الجونة السينمائي",
        year: 2018,
        note: "Best Short",
        noteAr: "أفضل فيلم قصير",
      },
    ],
  },
];
