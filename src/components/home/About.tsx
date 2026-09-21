import { useTranslations } from "next-intl";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl";

import Image from "next/image";
import aboutUSSection from "@/assets/aboutUSSection.jpg";

const logos = ["Framer", "Atlassian", "Shopify", "GitHub", "LaunchDarkly", "Tailscale"];

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="section relative overflow-hidden bg-mist-50 py-20 lg:py-28">
      {/* Decorative rings — pure CSS, no image needed. Clipped by the
          section's overflow-hidden and positioned behind the content. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -right-32 -top-16 h-[420px] w-[420px] rounded-full border-[36px] border-navy-900/10" />
        <div className="absolute -right-10 top-40 h-[320px] w-[320px] rounded-full border-[30px] border-clay-500/25" />
      </div>

      <div className="container-page relative z-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-clay-600">
          {t("eyebrow")}
        </span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-3 max-w-2xl text-navy-900/60">{t("lead")}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={aboutUSSection}
              alt="Team reviewing a project plan together"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xl font-bold text-navy-900">
              {t("approachTitle")}
            </h3>
            <p className="text-navy-900/60">{t("approachBody")}</p>

            <div className="flex gap-10">
              <div>
                <p className="font-display text-3xl font-extrabold text-navy-900">
                  {t("yearsValue")}
                </p>
                <p className="text-sm text-navy-900/50">{t("yearsLabel")}</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-navy-900">
                  {t("projectsValue")}
                </p>
                <p className="text-sm text-navy-900/50">{t("projectsLabel")}</p>
              </div>
            </div>

            <a
              href={`/${locale}/about`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {t("cta")}
              <Arrow size={16} />
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-navy-900/10 pt-8">
          <p className="text-xs font-medium uppercase tracking-wider text-navy-900/40">
            {t("trustedBy")}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <span
                key={logo}
                className="font-display text-lg font-bold text-navy-900/30"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}