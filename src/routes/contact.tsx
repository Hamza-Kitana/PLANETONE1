import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";
import { Reveal, RevealText } from "@/components/Reveal";
import { StarField } from "@/components/StarField";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Planet One — Start a Documentary Project" },
      {
        name: "description",
        content:
          "Tell Planet One about your story. Documentary production, branded films and post production — we reply within two working days.",
      },
      { property: "og:title", content: "Contact Planet One" },
      {
        property: "og:description",
        content: "Start a documentary or branded film project with Planet One.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, pick } = useI18n();
  const [sent, setSent] = useState(false);

  const fields = [
    { id: "name", label: t("contact.name"), type: "text" },
    { id: "email", label: t("contact.email"), type: "email" },
    { id: "subject", label: t("contact.subject"), type: "text" },
  ];

  return (
    <section className="screen-panel relative overflow-hidden pt-24">
      <div className="absolute inset-0 opacity-60">
        <StarField />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)",
        }}
      />

      <div className="relative w-full px-4 sm:px-8">
        <p className="eyebrow">{t("contact.eyebrow")}</p>
        <h1 className="mt-4 text-[clamp(2.4rem,7vw,5rem)] leading-[0.98]">
          <RevealText text={t("contact.title")} className="text-gradient-ember" />
        </h1>
        <p className="mt-5 max-w-lg text-muted-foreground">{t("contact.sub")}</p>

        <div className="mt-8 grid gap-8 sm:mt-16 sm:gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success(t("contact.sent"));
              }}
              className="surface-glass space-y-6 rounded-lg p-5 sm:p-8"
            >
              {fields.map((f) => (
                <div key={f.id} className="group relative">
                  <label
                    htmlFor={f.id}
                    className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    className="mt-2 w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-accent"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary-foreground sm:w-auto sm:tracking-[0.24em]"
                style={{ background: "var(--gradient-ember)", boxShadow: "var(--shadow-ember)" }}
              >
                <Send size={14} />
                {sent ? t("contact.sent") : t("contact.send")}
              </motion.button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-5">
              {[
                { icon: MapPin, k: t("contact.studio"), v: pick("Amman, Jordan", "عمّان، الأردن") },
                { icon: Mail, k: "Email", v: "hello@planetone.film" },
                { icon: Phone, k: t("contact.phone"), v: "+962 7 9000 0000" },
                { icon: Clock, k: t("contact.hours"), v: t("contact.hoursv") },
              ].map((c) => (
                <div
                  key={c.k}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card/40 p-6 transition-colors hover:border-primary/60"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-primary">
                    <c.icon size={16} />
                  </span>
                  <div>
                    <p className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                      {c.k}
                    </p>
                    <p className="mt-1.5 font-semibold text-foreground" dir="ltr">
                      {c.v}
                    </p>
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title="Planet One studio location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=35.85%2C31.93%2C35.99%2C32.00&layer=mapnik"
                  className="h-48 w-full grayscale-[40%] invert-[0.9] hue-rotate-180 sm:h-64"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
