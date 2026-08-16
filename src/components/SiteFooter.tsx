import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { PlanetOneLogo } from "@/components/PlanetOneLogo";

const nav = [
  { to: "/", key: "nav.home" },
  { to: "/films", key: "nav.films" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function SiteFooter() {
  const { t, lang } = useI18n();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/30">
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)",
        }}
      />

      <div className="relative grid w-full grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 sm:px-8 sm:py-16 lg:flex lg:justify-between">
        <div className="max-w-sm sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <PlanetOneLogo className="h-16 w-16 object-contain" />
            <span className="font-display text-xl tracking-[0.18em]">
              {lang === "ar" ? "بلانت ون" : "PLANET ONE"}
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t("footer.blurb")}</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Youtube, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
                aria-label="Planet One social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">{t("footer.explore")}</p>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="transition-colors hover:text-foreground">
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">{t("contact.studio")}</p>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
              {lang === "ar" ? "عمّان، الأردن" : "Amman, Jordan"}
            </p>
            <p className="flex items-center gap-2">
              <Mail size={15} className="shrink-0 text-primary" />
              hello@planetone.film
            </p>
            <p className="flex items-center gap-2" dir="ltr">
              <Phone size={15} className="shrink-0 text-primary" />
              +962 7 9000 0000
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-between gap-3 border-t border-border/60 px-4 py-5 text-center text-[0.65rem] tracking-[0.16em] text-muted-foreground sm:flex-row sm:px-8 sm:text-start sm:text-xs sm:tracking-widest">
        <span>
          © {new Date().getFullYear()} Planet One — {t("footer.rights")}
        </span>
        <span>hello@planetone.film</span>
      </div>
    </footer>
  );
}
