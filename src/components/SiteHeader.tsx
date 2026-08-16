import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { PlanetOneLogo } from "@/components/PlanetOneLogo";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/films", key: "nav.films" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function SiteHeader() {
  const { t, lang, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY > 8;
    setScrolled(last);
    const onScroll = () => {
      const next = window.scrollY > 8;
      if (next === last) return;
      last = next;
      setScrolled(next);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        solid
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between px-4 sm:h-20 sm:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
          <motion.div
            className="h-11 w-11 shrink-0 sm:h-14 sm:w-14"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <PlanetOneLogo className="h-11 w-11 object-contain sm:h-14 sm:w-14" />
          </motion.div>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-sm tracking-[0.14em] text-foreground sm:text-lg sm:tracking-[0.18em]">
              {lang === "ar" ? "بلانت ون" : "PLANET ONE"}
            </span>
            <span className="hidden text-[0.6rem] tracking-[0.34em] text-primary sm:block">
              {t("nav.tagline")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {t(l.key)}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full group-data-[status=active]:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex min-h-10 items-center gap-1.5 rounded-full border border-border px-3 py-2 text-[0.65rem] font-bold tracking-[0.16em] text-foreground transition-all hover:border-accent hover:text-accent sm:gap-2 sm:px-4 sm:tracking-[0.2em]"
            aria-label="Switch language"
          >
            <Languages size={14} />
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            className="md:hidden min-h-10 min-w-10 rounded-full border border-border p-2.5 text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-4 font-display text-xl tracking-[0.12em] text-foreground"
                  >
                    {t(l.key)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
