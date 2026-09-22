import { useTranslations } from "next-intl";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl";

import Image from "next/image";
import aboutUSSection from "@/assets/aboutUSSection.jpg";
import MainButton from "../ui/MainButton";
import ScrollReveal from "../TextAnimations/scrollRevealText";
import CountUp from "../TextAnimations/CountUpText";
import ScrollFadeIn from "../animations/ScrollFadeIn";


const logos = ["Framer", "Atlassian", "Shopify", "GitHub", "LaunchDarkly", "Tailscale"];

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="section relative overflow-hidden bg-mist-50 py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -right-34 -top-50 h-105 w-105 rounded-full border-36 border-navy-900/10" />
        <div className="absolute -right-85 top-13 h-120 w-125 rounded-full border-30 border-clay-500/25" />
      </div>

      <div className="container-page flex flex-col gap-12 relative z-10">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-wider text-navy-600">
            {t("eyebrow")}
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-navy-900 sm:text-[48px]">
            {t("title")}
          </h2>

          <p className="text-lg max-w-4xl text-gray-200">{t("lead")}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 lg:items-center">
          <ScrollFadeIn className="relative aspect-3/2 w-1/2 overflow-hidden rounded-3xl">
            <Image
              src={aboutUSSection}
              alt="Team reviewing a project plan together"
              fill
              className="object-cover w-213.5 h-120"
            />
          </ScrollFadeIn>

          <div className="flex flex-col gap-10 max-w-160">
            <h3 className="text-2xl font-bold text-navy-650">
              {t("approachTitle")}
            </h3>
            {/* <p className="text-lg font-medium text-gray-200">
              {t("approachBody")}
            </p> */}
            <ScrollReveal
              textClassName="text-lg! font-medium text-gray-200"
              baseOpacity={0.5}
              enableBlur
              baseRotation={3}
              blurStrength={6}
            >
              {t("approachBody")}
            </ScrollReveal>
            <ScrollFadeIn delay={0.15} className="flex items-center gap-12">
              <div className="flex flex-col gap-3">
                <div className="flex gap-0.5 text-[32px] font-bold text-navy-750">
                  <CountUp
                    from={0}
                    to={12}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    delay={1}
                  />
                  <span>+</span>
                </div>
                <p className="text-sm text-gray-200">{t("yearsLabel")}</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-0.5 text-[32px] font-bold text-navy-750">
                  <CountUp
                    from={0}
                    to={500}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    delay={1}
                  />
                  <span>+</span>
                </div>
                <p className="text-sm text-gray-200">{t("projectsLabel")}</p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.3} className="w-fit">
              <MainButton
                href={`/${locale}/about`}
                className="w-fit h-12! bg-clay-650! hover:bg-clay-600! py-2! px-5! transition-transform hover:-translate-y-0.5"
              >
                <span className="text-base! font-bold!">{t("cta")}</span>
                <Arrow size={20} />
              </MainButton>
            </ScrollFadeIn>
          </div>
        </div>

        <ScrollFadeIn className="flex flex-col gap-8">
          <p className="font-bold tracking-wider text-black/60">
            {t("trustedBy")}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <span key={logo} className="text-lg font-bold text-black/60">
                {logo}
              </span>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}