import Image from "next/image";
import { useTranslations } from "next-intl";
import constructionImg from "@/assets/aboutUSSection.jpg";

export default function CompanyProfile() {
  const t = useTranslations("aboutPage.companyProfile");
  const points = t.raw("points") as string[];

  return (
    <div className="flex flex-col gap-16">
      {/* Block 1: text left, image right */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl font-extrabold text-navy-900">
            {t("title")}
          </h2>
          <p className="text-sm text-navy-900/60">{t("lead")}</p>
          <ul className="flex flex-col gap-1.5">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm text-navy-900/70"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy-900/50" />
                {point}
              </li>
            ))}
          </ul>
          <p className="text-sm text-navy-900/60">{t("body1")}</p>
          <p className="text-sm text-navy-900/60">{t("body2")}</p>
          <span className="mt-2 h-0.5 w-14 rounded-full bg-clay-500" />
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src={constructionImg}
            alt="Building under construction"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Block 2: image left, text right */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:order-1">
          <Image
            src={constructionImg}
            alt="Building under construction"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 lg:order-2">
          <h2 className="font-display text-3xl font-extrabold text-navy-900">
            {t("whyTitle")}
          </h2>
          <p className="text-sm text-navy-900/60">{t("whyBody1")}</p>
          <p className="text-sm text-navy-900/60">{t("whyBody2")}</p>
          <p className="text-sm text-navy-900/60">{t("whyBody3")}</p>
          <span className="mt-2 h-0.5 w-14 rounded-full bg-clay-500" />
        </div>
      </div>
    </div>
  );
}
