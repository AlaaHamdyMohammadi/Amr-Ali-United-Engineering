import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ArrowLeft } from "lucide-react";

const serviceKeys = [
  "generalContracting",
  "homeInteriors",
  "restaurants",
  "offices",
  "buildings",
  "homeInteriors2",
  "restaurants2",
  "offices2",
] as const;

const swatches = [
  "linear-gradient(160deg,#d9c2a3,#8a6d4c)",
  "linear-gradient(160deg,#e8ded0,#b8a488)",
  "linear-gradient(160deg,#cfe0e8,#5c7d8c)",
  "linear-gradient(160deg,#e3e7ef,#9aa4b8)",
  "linear-gradient(160deg,#d9c2a3,#8a6d4c)",
  "linear-gradient(160deg,#e8ded0,#b8a488)",
  "linear-gradient(160deg,#cfe0e8,#5c7d8c)",
  "linear-gradient(160deg,#e3e7ef,#9aa4b8)",
];

export default function ServicesGrid() {
  const t = useTranslations("servicesPage.items");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="section bg-mist-50 py-16 lg:py-20">
      <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {serviceKeys.map((key, i) => (
          <article
            key={key}
            className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-sm shadow-navy-900/5"
          >
            <div
              className="aspect-[4/3] w-full rounded-xl"
              style={{ background: swatches[i] }}
              role="img"
              aria-label={t(`${key}.title`)}
            />
            <div className="flex flex-col gap-2 px-1 pb-2">
              <h3 className="font-display text-base font-bold text-navy-900">
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm text-navy-900/55">{t(`${key}.body`)}</p>
              <button className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-clay-600">
                {t("learnMore")}
                <Arrow size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
