import { createFileRoute } from "@tanstack/react-router";
import { Camera, Film, Globe, Mic, Plane, Scissors } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, RevealText } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { StarField } from "@/components/StarField";
import crew from "@/assets/about-crew.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Planet One — Independent Documentary Studio" },
      {
        name: "description",
        content:
          "Planet One is an independent documentary production house in Punchbowl, NSW, Australia: research, shooting, edit, sound design and delivery under one roof.",
      },
      { property: "og:title", content: "About Planet One" },
      {
        property: "og:description",
        content: "Independent documentary production — truth first, cinematic craft, local roots.",
      },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    en: "Hamza Al-Daboor",
    ar: "حمزة الدبعور",
    roleEn: "Founder / Director",
    roleAr: "المؤسس / مخرج",
    bioEn:
      "Started the house. Directs long-form work and stays with a story until the cut is honest.",
    bioAr: "أسّس الشركة. يخرج الأعمال الطويلة ويبقى مع الحكاية حتى يصير القصّ صادقاً.",
  },
  {
    en: "Yara Mansour",
    ar: "يارا منصور",
    roleEn: "Director",
    roleAr: "مخرجة",
    bioEn: "Leads character-driven films. Builds trust off-camera so the frame can stay still.",
    bioAr: "تقود الأفلام المبنية على الشخصيات. تبني الثقة خارج الكادر حتى يبقى الإطار ساكناً.",
  },
  {
    en: "Lina Sabbagh",
    ar: "لينا صباغ",
    roleEn: "Cinematographer",
    roleAr: "مديرة تصوير",
    bioEn:
      "Lights rooms as they are. Prefers available light and a lens that does not announce itself.",
    bioAr: "تضيء الغرف كما هي. تفضّل الضوء الموجود وعدسة لا تعلن عن نفسها.",
  },
  {
    en: "Karim Nassar",
    ar: "كريم نصار",
    roleEn: "Editor",
    roleAr: "مونتير",
    bioEn: "Cuts for breath, not plot points. Protects the hours where nothing happens on purpose.",
    bioAr: "يقصّ من أجل التنفّس لا نقاط الحبكة. يحمي الساعات التي لا يحدث فيها شيء عن قصد.",
  },
  {
    en: "Mira Haddad",
    ar: "ميرا حداد",
    roleEn: "Sound Designer",
    roleAr: "مهندسة صوت",
    bioEn: "Builds the film you hear when the picture goes quiet — wells, wind, traffic, rooms.",
    bioAr: "تبني الفيلم الذي تسمعه حين تهدأ الصورة — آبار وريح وشارع وغرف.",
  },
  {
    en: "Rami Sultan",
    ar: "رامي سلطان",
    roleEn: "Aerial / DOP",
    roleAr: "تصوير جوي",
    bioEn: "Flies landscape and desert, then comes down and operates on the ground the same day.",
    bioAr: "يطير فوق الأرض والصحراء، ثم ينزل ويصوّر على الأرض في اليوم نفسه.",
  },
];

const services = [
  { icon: Film, key: "about.s1" },
  { icon: Camera, key: "about.s2" },
  { icon: Plane, key: "about.s3" },
  { icon: Scissors, key: "about.s4" },
  { icon: Mic, key: "about.s5" },
  { icon: Globe, key: "about.s6" },
];

function AboutPage() {
  const { t, pick } = useI18n();

  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="absolute inset-0 opacity-50">
          <StarField />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, color-mix(in oklab, var(--ember) 18%, transparent), transparent 55%)",
          }}
        />
        <div className="relative w-full px-4 sm:px-8">
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h1 className="mt-3 max-w-5xl text-[clamp(2rem,5.5vw,4.2rem)] leading-[1.05]">
            <RevealText text={t("about.title")} className="text-foreground" />
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
            {t("about.lead")}
          </p>
          <div className="mt-8 grid gap-6 text-base leading-relaxed text-muted-foreground md:grid-cols-2 lg:text-lg">
            <Reveal>
              <p>{t("about.p1")}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>{t("about.p2")}</p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {t("about.p3")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-4 min-h-[300px] overflow-hidden rounded-lg border border-border sm:mx-8 sm:min-h-[380px]">
        <img
          src={crew}
          alt="Planet One crew on location"
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/15" />
        <div className="pointer-events-none absolute inset-0 scanlines opacity-20" />
        <div className="relative z-10 flex min-h-[300px] items-end px-5 py-7 sm:min-h-[380px] sm:px-10 sm:py-10">
          <Reveal>
            <p className="eyebrow">{t("about.field")}</p>
            <h2 className="mt-3 max-w-2xl text-2xl leading-tight text-foreground sm:text-4xl">
              {t("about.field.line")}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
              {t("about.story.p")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="w-full px-4 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <p className="eyebrow">{t("about.values")}</p>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t("about.values.sub")}</p>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} delay={i * 0.08}>
              <div className="h-full bg-background p-7 sm:p-8">
                <span className="font-display text-3xl text-accent/40">0{n}</span>
                <h3 className="mt-4 text-xl text-foreground sm:text-2xl">{t(`about.v${n}.t`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t(`about.v${n}.d`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/20 py-14 sm:py-16">
        <div className="w-full px-4 sm:px-8">
          <Reveal>
            <p className="eyebrow">{t("about.services")}</p>
            <p className="mt-3 max-w-2xl text-muted-foreground">{t("about.services.sub")}</p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.key} delay={i * 0.05} tilt>
                <div className="group surface-glass flex h-full gap-4 rounded-lg p-5 transition-colors hover:border-accent/60">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors group-hover:text-accent">
                    <s.icon size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{t(s.key)}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {t(`${s.key}.d`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <p className="eyebrow">{t("about.team")}</p>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t("about.team.sub")}</p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.en} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-lg border border-border bg-card p-6">
                <span
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
                  style={{ background: "var(--gradient-ember)" }}
                />
                <p className="font-display text-xl text-foreground sm:text-2xl">
                  {pick(m.en, m.ar)}
                </p>
                <p className="mt-1.5 text-xs tracking-[0.18em] text-primary uppercase">
                  {pick(m.roleEn, m.roleAr)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pick(m.bioEn, m.bioAr)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection compact />
    </>
  );
}
