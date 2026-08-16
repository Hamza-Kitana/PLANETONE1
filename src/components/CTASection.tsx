import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function CTASection({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  return (
    <section className={`relative overflow-hidden ${compact ? "py-10 sm:py-12" : "screen-panel"}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, color-mix(in oklab, var(--ember) 34%, transparent), transparent 65%)",
        }}
      />
      <Reveal className="relative w-full px-4 text-center sm:px-8">
        <p className="eyebrow">{t("cta.sub")}</p>
        <h2 className={`mt-3 leading-[1.15] ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-6xl"}`}>
          <span className="text-gradient-ember">{t("cta.title")}</span>
        </h2>
        <Link
          to="/contact"
          className={`group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary-foreground transition-transform hover:scale-105 sm:px-8 sm:text-xs sm:tracking-[0.22em] ${compact ? "mt-5" : "mt-8 sm:mt-10 sm:py-4 sm:tracking-[0.24em]"}`}
          style={{ background: "var(--gradient-ember)", boxShadow: "var(--shadow-ember)" }}
        >
          {t("cta.btn")}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl:rotate-180" />
        </Link>
      </Reveal>
    </section>
  );
}
