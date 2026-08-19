import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar" | "es";

type Dict = Record<string, { en: string; ar: string }>;

export const dict: Dict = {
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.films": { en: "Films", ar: "الأفلام" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا" },
  "nav.brand": { en: "Planet One", ar: "بلانت ون" },
  "nav.tagline": { en: "Film Production", ar: "إنتاج أفلام" },

  "loader.line1": { en: "Threading the reel", ar: "نُحمّل بكرة الفيلم" },
  "loader.line2": { en: "Lighting the projector", ar: "نُشعل آلة العرض" },
  "loader.line3": { en: "Planet One presents", ar: "بلانت ون تُقدّم" },

  "hero.kicker": { en: "Documentary film production", ar: "إنتاج أفلام وثائقية" },
  "hero.title1": { en: "One planet.", ar: "كوكبٌ واحد." },
  "hero.title2": { en: "Endless stories.", ar: "حكاياتٌ لا تنتهي." },
  "hero.sub": {
    en: "We chase the real — dust, salt, sweat and silence — and turn it into cinema that stays with you long after the credits.",
    ar: "نلاحق الحقيقة — الغبار والملح والعرق والصمت — ونحوّلها إلى سينما تبقى معك بعد نهاية الفيلم.",
  },
  "hero.cta": { en: "Explore our films", ar: "استكشف أفلامنا" },
  "hero.cta2": { en: "Work with us", ar: "اعمل معنا" },
  "hero.scroll": { en: "Scroll", ar: "اسحب للأسفل" },

  "stats.films": { en: "Films delivered", ar: "فيلماً منتَجاً" },
  "stats.awards": { en: "Festival selections", ar: "مشاركة بمهرجانات" },
  "stats.countries": { en: "Countries filmed", ar: "دولة صوّرنا فيها" },
  "stats.years": { en: "Years behind the lens", ar: "عاماً خلف الكاميرا" },

  "work.eyebrow": { en: "Selected work", ar: "أعمال مختارة" },
  "work.title": { en: "The Catalogue", ar: "قائمة الأفلام" },
  "work.sub": {
    en: "Every frame is a place we stood in. Open a film to step inside it.",
    ar: "كل مشهد هو مكان وقفنا فيه. ادخل إلى الفيلم لتعيشه.",
  },
  "work.all": { en: "View all films", ar: "شاهد كل الأفلام" },
  "work.open": { en: "Open film", ar: "افتح الفيلم" },

  "process.eyebrow": { en: "How we shoot", ar: "كيف نعمل" },
  "process.title": { en: "From whisper to screen", ar: "من الهمسة إلى الشاشة" },
  "process.1.t": { en: "Research", ar: "البحث" },
  "process.1.d": {
    en: "Months in the field before a single camera opens its eye.",
    ar: "أشهر في الميدان قبل أن تفتح الكاميرا عينها.",
  },
  "process.2.t": { en: "Shooting", ar: "التصوير" },
  "process.2.d": {
    en: "Small crews, natural light, patience measured in seasons.",
    ar: "فرق صغيرة، ضوء طبيعي، وصبر يُقاس بالفصول.",
  },
  "process.3.t": { en: "Edit & Sound", ar: "المونتاج والصوت" },
  "process.3.d": {
    en: "Rhythm, silence and score built frame by frame.",
    ar: "إيقاع وصمت وموسيقى تُبنى مشهداً بمشهد.",
  },
  "process.4.t": { en: "Release", ar: "العرض" },
  "process.4.d": {
    en: "Festivals, broadcasters and streaming across the region.",
    ar: "مهرجانات ومحطات ومنصات عرض في المنطقة والعالم.",
  },

  "films.eyebrow": { en: "Filmography", ar: "الأفلام" },
  "films.title": { en: "Our Films", ar: "أفلامنا" },
  "films.sub": {
    en: "Documentaries, shorts and long-form portraits produced by Planet One.",
    ar: "أفلام وثائقية وقصيرة وبورتريهات طويلة من إنتاج بلانت ون.",
  },
  "films.filter.all": { en: "All", ar: "الكل" },

  "film.back": { en: "All films", ar: "كل الأفلام" },
  "film.synopsis": { en: "Synopsis", ar: "القصة" },
  "film.credits": { en: "Credits", ar: "فريق العمل" },
  "film.director": { en: "Director", ar: "المخرج" },
  "film.dop": { en: "Cinematography", ar: "التصوير" },
  "film.editor": { en: "Editor", ar: "المونتاج" },
  "film.sound": { en: "Sound", ar: "الصوت" },
  "film.runtime": { en: "Runtime", ar: "المدة" },
  "film.year": { en: "Year", ar: "السنة" },
  "film.lang": { en: "Language", ar: "اللغة" },
  "film.rating": { en: "Rating", ar: "التقييم" },
  "film.awards": { en: "Awards & Festivals", ar: "جوائز ومهرجانات" },
  "film.watch": { en: "Play the clip", ar: "شغّل المقطع" },
  "film.clipsoon": { en: "Clip coming soon", ar: "المقطع قريباً" },
  "film.next": { en: "Next film", ar: "الفيلم التالي" },
  "film.gallery": { en: "Stills", ar: "صور من الفيلم" },
  "film.producer": { en: "Producer", ar: "المنتج" },
  "film.music": { en: "Music", ar: "الموسيقى" },
  "film.location": { en: "Location", ar: "الموقع" },
  "film.themes": { en: "Themes", ar: "الموضوعات" },
  "film.production": { en: "Behind the lens", ar: "خلف الكاميرا" },
  "film.festivals": { en: "Festival journey", ar: "رحلة المهرجانات" },
  "film.category.documentary": { en: "Documentary", ar: "وثائقي" },
  "film.category.short": { en: "Short", ar: "قصير" },
  "film.category.series": { en: "Series", ar: "مسلسل" },

  "about.eyebrow": { en: "About us", ar: "من نحن" },
  "about.title": { en: "We film what refuses to be forgotten", ar: "نصوّر ما يرفض أن يُنسى" },
  "about.lead": {
    en: "Planet One is an independent documentary house based in Punchbowl, NSW, Australia. We follow real lives across seasons — not for a headline, but for a film that stays.",
    ar: "بلانت ون شركة إنتاج وثائقي مستقلة مقرّها بانشبول، نيو ساوث ويلز، أستراليا. نلاحق حيوات حقيقية عبر الفصول — لا من أجل عنوان، بل من أجل فيلم يبقى.",
  },
  "about.p1": {
    en: "We build films around people, not press cycles. That means months of research before a camera opens, small crews that can sit in a kitchen without changing the air, and an edit that protects silence as much as speech.",
    ar: "نبني أفلامنا حول الناس لا حول دورة الأخبار. هذا يعني أشهراً من البحث قبل أن تفتح الكاميرا عينها، وفرقاً صغيرة تجلس في المطبخ دون أن تغيّر هواء الغرفة، ومونتاجاً يحمي الصمت بقدر ما يحمي الكلام.",
  },
  "about.p2": {
    en: "From development and research to shooting, edit, sound design and delivery, the work stays under one roof. One conversation. One horizon. No assembly line between the person on screen and the person who cuts the film.",
    ar: "من التطوير والبحث إلى التصوير والمونتاج وتصميم الصوت والتسليم، يبقى العمل تحت سقف واحد. حوار واحد. أفق واحد. لا خط إنتاج يفصل من يظهر على الشاشة عمّن يقصّ الفيلم.",
  },
  "about.p3": {
    en: "We shoot in Arabic first, with English subtitles built into the cut — not added as an afterthought. Festivals, broadcasters and streaming platforms across the region and beyond have carried our work; the standard does not change with the screen.",
    ar: "نصوّر بالعربية أولاً، والترجمة الإنجليزية تُبنى داخل المونتاج لا تُلصق بعده. مهرجانات ومحطات ومنصات في المنطقة والعالم عرضت أعمالنا؛ المعيار لا يتغيّر بتغيّر الشاشة.",
  },
  "about.field": { en: "On location", ar: "في الميدان" },
  "about.field.line": {
    en: "A crew small enough to disappear into the room — and stay until the story is ready.",
    ar: "طاقم صغير بما يكفي ليذوب في الغرفة — ويبقى حتى تصبح الحكاية جاهزة.",
  },
  "about.story": { en: "How the house began", ar: "كيف بدأت الشركة" },
  "about.story.p": {
    en: "Planet One started as a two-person kit and a stubborn belief: the region’s most urgent stories were being told too fast, or not at all. We grew by staying in rooms longer than the news cycle allowed — with shepherds, night workers, potters, fishermen, astronomers and children who refuse to stop. The company is still small on purpose. Size would change the films.",
    ar: "بدأت بلانت ون كحقيبة معدات لشخصين وإيمان عنيد: ألحّ حكايات المنطقة تُروى بسرعة زائدة، أو لا تُروى. كبرنا لأننا بقينا في الغرف أطول مما تسمح به دورة الأخبار — مع رعاة وعمّال ليل وخزّافين وصيادين وفلكيين وأطفال يرفضون التوقف. الشركة ما زالت صغيرة عن قصد. الحجم كان سيغيّر الأفلام.",
  },
  "about.values": { en: "What we stand on", ar: "ما نقف عليه" },
  "about.values.sub": {
    en: "Three rules we do not negotiate when a camera is in the room.",
    ar: "ثلاثة قواعد لا نفاوض عليها حين تكون الكاميرا في الغرفة.",
  },
  "about.v1.t": { en: "Truth first", ar: "الحقيقة أولاً" },
  "about.v1.d": {
    en: "No staged reality, no hired extras, no lines written for someone else’s mouth. If a well is dry, we film the dry well. The audience is trusted with what actually happened — including the hours where nothing dramatic occurs.",
    ar: "لا واقع مفبرك، ولا كومبارس مستأجر، ولا جمل تُكتب لفم غير صاحبها. إذا جفّ البئر نصوّر البئر الجاف. نثق بالجمهور ليرى ما حدث فعلاً — بما فيها الساعات التي لا يحدث فيها شيء درامي.",
  },
  "about.v2.t": { en: "Cinematic craft", ar: "حرفة سينمائية" },
  "about.v2.d": {
    en: "Documentary subject, feature-film language: light, rhythm, sound and frame treated with the same care as a fiction picture. Patience is a tool. So is a locked-off shot that lasts long enough for a face to change.",
    ar: "موضوع وثائقي بلغة الفيلم الروائي: الضوء والإيقاع والصوت والإطار تُعامل بعناية الفيلم الخيالي. الصبر أداة. وكذلك اللقطة الثابتة التي تطول حتى يتغيّر الوجه.",
  },
  "about.v3.t": { en: "Local roots", ar: "جذور محلية" },
  "about.v3.d": {
    en: "Stories from our region, told by people from it — in the language they think in. We do not parachute in for a week and leave with a thesis. Access is earned by returning, translating ourselves, and letting the film belong to the place that made it.",
    ar: "حكايات من منطقتنا يرويها أبناؤها — باللغة التي يفكّرون بها. لا نهبط أسبوعاً ونغادر بأطروحة. الوصول يُكتسب بالعودة، وبترجمة أنفسنا، وبترك الفيلم ملكاً للمكان الذي صنعه.",
  },
  "about.team": { en: "The crew", ar: "الفريق" },
  "about.team.sub": {
    en: "A small unit. Everyone on set also sits in the edit.",
    ar: "وحدة صغيرة. كل من يكون في التصوير يجلس أيضاً في المونتاج.",
  },
  "about.services": { en: "What we do", ar: "ماذا نعمل" },
  "about.services.sub": {
    en: "End-to-end production, or a single craft if that is what the story needs.",
    ar: "إنتاج من الألف إلى الياء، أو حرفة واحدة إن كان هذا ما تحتاجه الحكاية.",
  },
  "about.s1": { en: "Documentary production", ar: "إنتاج وثائقي" },
  "about.s1.d": {
    en: "Features, shorts and series: research, access, shooting and a finished cut ready for festivals or broadcast.",
    ar: "أفلام طويلة وقصيرة ومسلسلات: بحث ووصول وتصوير وقصّة جاهزة للمهرجانات أو البث.",
  },
  "about.s2": { en: "Branded films", ar: "أفلام مؤسسية" },
  "about.s2.d": {
    en: "Commissioned work that still looks like cinema — for institutions that want truth, not a brochure.",
    ar: "أعمال بتكليف تبدو سينما لا كتيّباً — لمؤسسات تريد الحقيقة لا الإعلان.",
  },
  "about.s3": { en: "Aerial & drone", ar: "تصوير جوي" },
  "about.s3.d": {
    en: "Landscape, coast and desert from above, flown by a DOP who also shoots on the ground.",
    ar: "أرض وساحل وصحراء من الأعلى، يقودها مدير تصوير يعمل على الأرض أيضاً.",
  },
  "about.s4": { en: "Post production", ar: "مونتاج وما بعد الإنتاج" },
  "about.s4.d": {
    en: "Picture edit, colour, titles and delivery masters — the same hands that were in the field.",
    ar: "مونتاج وصباغة وعناوين ونسخ تسليم — الأيدي ذاتها التي كانت في الميدان.",
  },
  "about.s5": { en: "Sound design & score", ar: "تصميم صوتي وموسيقى" },
  "about.s5.d": {
    en: "Location sound, atmospheres and a score that leaves room for wind, wells and traffic.",
    ar: "صوت موقع وأجواء وموسيقى تترك مكاناً للريح والآبار والشارع.",
  },
  "about.s6": { en: "Fixing & field logistics", ar: "تنسيق ولوجستيات ميدانية" },
  "about.s6.d": {
    en: "Permits, drivers, translators and the unglamorous work that lets a small crew stay out for a season.",
    ar: "تصاريح وسائقون ومترجمون والعمل غير اللامع الذي يُبقي فريقاً صغيراً في الميدان موسماً كاملاً.",
  },

  "contact.eyebrow": { en: "Contact", ar: "اتصل بنا" },
  "contact.title": { en: "Let's make something real", ar: "لنصنع شيئاً حقيقياً" },
  "contact.sub": {
    en: "Tell us about the story. We reply within two working days.",
    ar: "أخبرنا عن الحكاية. نرد خلال يومين عمل.",
  },
  "contact.name": { en: "Your name", ar: "الاسم" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.subject": { en: "Project type", ar: "نوع المشروع" },
  "contact.message": { en: "Tell us the story", ar: "احكِ لنا الحكاية" },
  "contact.send": { en: "Send message", ar: "أرسل الرسالة" },
  "contact.sent": { en: "Message sent — talk soon.", ar: "تم إرسال الرسالة — نتحدث قريباً." },
  "contact.studio": { en: "Studio", ar: "الاستوديو" },
  "contact.phone": { en: "Phone", ar: "الهاتف" },
  "contact.hours": { en: "Hours", ar: "أوقات العمل" },
  "contact.hoursv": { en: "Sun–Thu · 9:00 — 18:00", ar: "الأحد–الخميس · ٩:٠٠ — ١٨:٠٠" },

  "footer.explore": { en: "Explore", ar: "استكشف" },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.blurb": {
    en: "Independent documentary production — one planet, endless stories.",
    ar: "إنتاج وثائقي مستقل — كوكب واحد وحكايات لا تنتهي.",
  },
  "cta.title": { en: "Have a story worth a film?", ar: "لديك حكاية تستحق فيلماً؟" },
  "cta.sub": {
    en: "We develop, shoot and deliver end to end.",
    ar: "نطوّر ونصوّر ونسلّم من الألف إلى الياء.",
  },
  "cta.btn": { en: "Start a project", ar: "ابدأ مشروعاً" },
};

const esDict: Partial<Record<keyof typeof dict, string>> = {
  "nav.home": "Inicio",
  "nav.films": "Peliculas",
  "nav.about": "Sobre nosotros",
  "nav.contact": "Contacto",
  "nav.brand": "Planet One",
  "nav.tagline": "Produccion cinematografica",
  "loader.line1": "Preparando el carrete",
  "loader.line2": "Encendiendo el proyector",
  "loader.line3": "Planet One presenta",
  "hero.kicker": "Produccion de cine documental",
  "hero.title1": "Un planeta.",
  "hero.title2": "Historias infinitas.",
  "hero.sub":
    "Perseguimos lo real - polvo, sal, sudor y silencio - y lo convertimos en cine que se queda contigo mucho despues de los creditos.",
  "hero.cta": "Explora nuestras peliculas",
  "hero.cta2": "Trabaja con nosotros",
  "hero.scroll": "Desplazar",
  "stats.films": "Peliculas producidas",
  "stats.awards": "Selecciones en festivales",
  "stats.countries": "Paises filmados",
  "stats.years": "Anos detras de la camara",
  "work.eyebrow": "Obras seleccionadas",
  "work.title": "El Catalogo",
  "work.sub": "Cada plano es un lugar en el que estuvimos. Abre una pelicula para entrar en ella.",
  "work.all": "Ver todas las peliculas",
  "work.open": "Abrir pelicula",
  "process.eyebrow": "Como trabajamos",
  "process.title": "Del susurro a la pantalla",
  "process.1.t": "Investigacion",
  "process.1.d": "Meses en campo antes de que una camara abra su ojo.",
  "process.2.t": "Rodaje",
  "process.2.d": "Equipos pequenos, luz natural y paciencia medida en estaciones.",
  "process.3.t": "Edicion y sonido",
  "process.3.d": "Ritmo, silencio y musica construidos plano a plano.",
  "process.4.t": "Estreno",
  "process.4.d": "Festivales, cadenas y streaming en toda la region.",
  "films.eyebrow": "Filmografia",
  "films.title": "Nuestras peliculas",
  "films.sub": "Documentales, cortos y retratos de formato largo producidos por Planet One.",
  "films.filter.all": "Todo",
  "film.back": "Todas las peliculas",
  "film.synopsis": "Sinopsis",
  "film.credits": "Creditos",
  "film.director": "Director",
  "film.dop": "Fotografia",
  "film.editor": "Editor",
  "film.sound": "Sonido",
  "film.runtime": "Duracion",
  "film.year": "Ano",
  "film.lang": "Idioma",
  "film.rating": "Calificacion",
  "film.awards": "Premios y festivales",
  "film.watch": "Reproducir clip",
  "film.clipsoon": "Clip disponible pronto",
  "film.next": "Siguiente pelicula",
  "film.gallery": "Fotogramas",
  "film.producer": "Productor",
  "film.music": "Musica",
  "film.location": "Ubicacion",
  "film.themes": "Temas",
  "film.production": "Detras de la camara",
  "film.festivals": "Recorrido en festivales",
  "film.category.documentary": "Documental",
  "film.category.short": "Corto",
  "film.category.series": "Serie",
  "about.eyebrow": "Sobre nosotros",
  "about.title": "Filmamos lo que se niega a ser olvidado",
  "about.lead":
    "Planet One es una casa documental independiente con sede en Punchbowl, NSW, Australia. Seguimos vidas reales a traves de las estaciones, no por un titular, sino por una pelicula que permanece.",
  "about.field": "En locacion",
  "about.story": "Como empezo la casa",
  "about.values": "Nuestros principios",
  "about.values.sub": "Tres reglas que no negociamos cuando hay una camara en la sala.",
  "about.v1.t": "La verdad primero",
  "about.v2.t": "Oficio cinematografico",
  "about.v3.t": "Raices locales",
  "about.team": "El equipo",
  "about.team.sub": "Una unidad pequena. Quien rueda tambien se sienta en el montaje.",
  "about.services": "Que hacemos",
  "about.services.sub": "Produccion integral, o una sola especialidad si la historia lo necesita.",
  "about.s1": "Produccion documental",
  "about.s2": "Peliculas de marca",
  "about.s3": "Aereo y dron",
  "about.s4": "Postproduccion",
  "about.s5": "Diseno sonoro y musica",
  "about.s6": "Logistica de campo",
  "contact.eyebrow": "Contacto",
  "contact.title": "Hagamos algo real",
  "contact.sub": "Cuentanos la historia. Respondemos en dos dias habiles.",
  "contact.name": "Tu nombre",
  "contact.email": "Correo electronico",
  "contact.subject": "Tipo de proyecto",
  "contact.message": "Cuentanos la historia",
  "contact.send": "Enviar mensaje",
  "contact.sent": "Mensaje enviado. Hablamos pronto.",
  "contact.studio": "Estudio",
  "contact.phone": "Telefono",
  "contact.hours": "Horario",
  "contact.hoursv": "Dom-Jue - 9:00 - 18:00",
  "footer.explore": "Explorar",
  "footer.rights": "Todos los derechos reservados.",
  "footer.blurb": "Produccion documental independiente: un planeta, historias infinitas.",
  "cta.title": "Tienes una historia que merece una pelicula?",
  "cta.sub": "Desarrollamos, rodamos y entregamos de principio a fin.",
  "cta.btn": "Iniciar proyecto",
};

type I18nValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: keyof typeof dict | string) => string;
  pick: (en: string, ar: string, es?: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("p1-lang") as Lang | null;
    if (stored === "ar" || stored === "en" || stored === "es") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("p1-lang", l);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      setLang,
      toggle: () => setLang(lang === "en" ? "ar" : lang === "ar" ? "es" : "en"),
      t: (key) => {
        const k = key as keyof typeof dict;
        const item = dict[k];
        if (!item) return key as string;
        if (lang === "es") return esDict[k] ?? item.en;
        return item[lang];
      },
      pick: (en, ar, es) => (lang === "ar" ? ar : lang === "es" ? (es ?? en) : en),
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
