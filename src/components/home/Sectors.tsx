import { useTranslations, useLocale } from "next-intl";
import {
  Home as HomeIcon,
  Building2,
  Factory,
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const sectorKeys = [
  "residential",
  "commercial",
  "industrial",
  "medical",
  "educational",
  "restaurants",
] as const;

const icons: Record<(typeof sectorKeys)[number], React.ElementType> = {
  residential: HomeIcon,
  commercial: Building2,
  industrial: Factory,
  medical: HeartPulse,
  educational: GraduationCap,
  restaurants: UtensilsCrossed,
};

export default function Sectors() {
  const t = useTranslations("sectors");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="section bg-navy-950 py-20 lg:py-28">
      <div className="container-page">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-3 max-w-2xl text-white/50">{t("sub")}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectorKeys.map((key) => {
            const Icon = icons[key];
            return (
              <div
                key={key}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay-600/20 text-clay-500">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-sm text-white/50">{t(`items.${key}.body`)}</p>
                <ul className="flex flex-col gap-1.5">
                  {(t.raw(`items.${key}.points`) as string[]).map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                <button className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white">
                  {t("cta")}
                  <Arrow size={14} className="text-clay-500" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
