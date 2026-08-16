import sand from "@/assets/film-sand.jpg";
import city from "@/assets/film-city.jpg";
import hands from "@/assets/film-hands.jpg";
import sea from "@/assets/film-sea.jpg";
import stars from "@/assets/film-stars.jpg";
import rain from "@/assets/film-rain.jpg";

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
  rating: number; // 0 - 5, supports halves
  poster: string;
  synopsis: string;
  synopsisAr: string;
  credits: { director: string; dop: string; editor: string; sound: string };
  creditsAr: { director: string; dop: string; editor: string; sound: string };
  awards: string[];
  awardsAr: string[];
  /** Optional short clip. Drop an .mp4 URL here and the film page plays it. */
  clipUrl?: string;
};

export const films: Film[] = [
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
    synopsis:
      "For three seasons we followed Sabri, the last shepherd of a valley the sand is swallowing. As wells dry and neighbours leave for the city, he keeps walking a route his grandfather drew in 1961 — a map of a country that no longer exists.",
    synopsisAr:
      "على مدى ثلاثة فصول لاحقنا صبري، آخر راعٍ في وادٍ يبتلعه الرمل. تجفّ الآبار ويرحل الجيران إلى المدينة، وهو يواصل السير على طريق رسمه جدّه عام ١٩٦١ — خريطة بلادٍ لم تبقَ.",
    credits: {
      director: "Hamza Al-Daboor",
      dop: "Lina Sabbagh",
      editor: "Karim Nassar",
      sound: "Mira Haddad",
    },
    creditsAr: {
      director: "حمزة الدبعور",
      dop: "لينا صباغ",
      editor: "كريم نصار",
      sound: "ميرا حداد",
    },
    awards: ["Official Selection — Red Sea IFF", "Best Cinematography — Amman Doc"],
    awardsAr: ["اختيار رسمي — مهرجان البحر الأحمر", "أفضل تصوير — أمّان الوثائقي"],
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
    synopsis:
      "Shot entirely between sunset and sunrise, City of Embers maps a metropolis through the people who work while it sleeps: a baker, a night nurse, a taxi driver, and a boy selling roses to cars that never stop.",
    synopsisAr:
      "صُوّر بالكامل بين الغروب والفجر. ترسم «مدينة الجمر» ملامح العاصمة من خلال من يعملون فيها وهي نائمة: خبّاز، وممرضة ليل، وسائق تاكسي، وطفل يبيع الورد لسيارات لا تتوقف.",
    credits: {
      director: "Yara Mansour",
      dop: "Hamza Al-Daboor",
      editor: "Omar Bishara",
      sound: "Tarek Aziz",
    },
    creditsAr: {
      director: "يارا منصور",
      dop: "حمزة الدبعور",
      editor: "عمر بشارة",
      sound: "طارق عزيز",
    },
    awards: ["Jury Prize — Beirut Docs", "Nominated — Arab Critics Award"],
    awardsAr: ["جائزة لجنة التحكيم — بيروت الوثائقي", "ترشيح — جائزة النقاد العرب"],
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
    synopsis:
      "Abu Sulaiman has shaped clay on the same wheel since 1958. His sons left the craft; his grandson returns with a camera. A quiet portrait of inheritance, dust and the exact weight of a bowl.",
    synopsisAr:
      "يشكّل أبو سليمان الطين على العجلة ذاتها منذ عام ١٩٥٨. تركَ أبناؤه المهنة، وعاد حفيده بكاميرا. بورتريه هادئ عن الإرث والغبار ووزن الإناء بالضبط.",
    credits: {
      director: "Nour Khalil",
      dop: "Lina Sabbagh",
      editor: "Nour Khalil",
      sound: "Mira Haddad",
    },
    creditsAr: {
      director: "نور خليل",
      dop: "لينا صباغ",
      editor: "نور خليل",
      sound: "ميرا حداد",
    },
    awards: ["Best Short Doc — Carthage", "Audience Award — Dead Sea Shorts"],
    awardsAr: ["أفضل فيلم وثائقي قصير — قرطاج", "جائزة الجمهور — أفلام البحر الميت"],
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
    synopsis:
      "A fishing village wakes at 3 a.m. for a catch that shrinks every year. Across one full season we ride with three boats through storms, debt and a coastline being sold behind their backs.",
    synopsisAr:
      "قرية صيد تستيقظ الثالثة فجراً لصيدٍ يتقلّص كل عام. على مدى موسم كامل نرافق ثلاثة قوارب عبر العواصف والدَّين وساحلٍ يُباع من خلف ظهورهم.",
    credits: {
      director: "Hamza Al-Daboor",
      dop: "Rami Sultan",
      editor: "Karim Nassar",
      sound: "Tarek Aziz",
    },
    creditsAr: {
      director: "حمزة الدبعور",
      dop: "رامي سلطان",
      editor: "كريم نصار",
      sound: "طارق عزيز",
    },
    awards: ["Official Selection — IDFA Forum", "Green Screen Honourable Mention"],
    awardsAr: ["اختيار رسمي — منتدى IDFA", "تنويه خاص — غرين سكرين"],
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
    synopsis:
      "A three-part series shot in the desert dark. Astronomers arrive with telescopes; the families who have navigated by those stars for centuries arrive with names for all of them. Two sciences meet over one fire.",
    synopsisAr:
      "مسلسل من ثلاث حلقات صُوّر في عتمة الصحراء. يأتي الفلكيون بتلسكوباتهم، وتأتي العائلات التي اهتدت بتلك النجوم قروناً بأسماءٍ لها كلها. علمان يلتقيان حول نار واحدة.",
    credits: {
      director: "Yara Mansour",
      dop: "Rami Sultan",
      editor: "Omar Bishara",
      sound: "Mira Haddad",
    },
    creditsAr: {
      director: "يارا منصور",
      dop: "رامي سلطان",
      editor: "عمر بشارة",
      sound: "ميرا حداد",
    },
    awards: ["Best Series — Gulf Film Festival", "Broadcast in 11 countries"],
    awardsAr: ["أفضل مسلسل — مهرجان الخليج السينمائي", "عُرض في ١١ دولة"],
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
    synopsis:
      "Hala runs to school and back through wet alleys, then teaches her mother to read at night. A short film about the smallest engine of change: a child who refuses to stop.",
    synopsisAr:
      "هالة تركض إلى المدرسة وتعود عبر أزقة مبلّلة، ثم تعلّم أمها القراءة في الليل. فيلم قصير عن أصغر محرّك للتغيير: طفلة ترفض أن تتوقف.",
    credits: {
      director: "Nour Khalil",
      dop: "Lina Sabbagh",
      editor: "Karim Nassar",
      sound: "Tarek Aziz",
    },
    creditsAr: {
      director: "نور خليل",
      dop: "لينا صباغ",
      editor: "كريم نصار",
      sound: "طارق عزيز",
    },
    awards: ["Special Mention — Clermont-Ferrand", "Best Short — Cairo Shorts"],
    awardsAr: ["تنويه خاص — كليرمون فيران", "أفضل قصير — القاهرة للأفلام القصيرة"],
  },
];

export const getFilm = (slug: string) => films.find((f) => f.slug === slug);
