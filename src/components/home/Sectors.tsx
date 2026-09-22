import { useTranslations, useLocale } from "next-intl";
import {
  Home as HomeIcon,
  ClipboardList,
  House,
  ArrowRight,
  ArrowLeft,
  LayoutTemplate,
} from "lucide-react";
import MainButton from "../ui/MainButton";

const sectorKeys = [
  "residential",
  "commercial",
  "industrial",
  
] as const;

const icons: Record<(typeof sectorKeys)[number], React.ElementType> = {
  residential: LayoutTemplate,
  commercial: ClipboardList,
  industrial: House,
};

export default function Sectors() {
  const t = useTranslations("sectors");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="section bg-linear-to-bl from-[#041338] to-[#0B369E] py-30">
      <div className="container-page flex flex-col gap-10">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-[48px]">
          {t("title")}
        </h2>
        <p className="text-lg  text-gray-300">{t("sub")}</p>

        <div className="flex flex-col sm:flex-row gap-12">
          {sectorKeys.map((key) => {
            const Icon = icons[key];
            return (
              <div
                key={key}
                className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
              >
                <span className="flex size-14 items-center border border-gray-300 justify-center rounded-2xl bg-white text-navy-750">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-2xl font-bold text-white">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-gray-300">{t(`items.${key}.body`)}</p>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {(t.raw(`items.${key}.points`) as string[]).map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-white"
                    >
                      <span className="size-1 shrink-0 rounded-full bg-clay-550" />
                      {point}
                    </li>
                  ))}
                </ul>
                <button className="inline-flex w-fit items-center gap-2 font-bold text-white">
                  {t("cta")}
                  <Arrow size={16} className="text-white" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
