"use client";

import { useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "antd";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react";

const projectKeys = ["buildings", "interiors", "restaurants", "offices"] as const;

const swatches = [
  "linear-gradient(160deg,#d9c2a3,#8a6d4c)",
  "linear-gradient(160deg,#e8ded0,#b8a488)",
  "linear-gradient(160deg,#cfe0e8,#5c7d8c)",
  "linear-gradient(160deg,#e3e7ef,#9aa4b8)",
];

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const dir = locale === "ar" ? -1 : 1;

  function scroll(delta: number) {
    scrollerRef.current?.scrollBy({ left: delta * dir, behavior: "smooth" });
  }

  return (
    <section className="section bg-mist-50 py-20 lg:py-28">
      <div className="container-page">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            {t("title")}
          </h2>
          <div className="hidden gap-2 sm:flex">
            <Button
              shape="circle"
              icon={<ChevronLeft size={16} />}
              onClick={() => scroll(-360)}
              aria-label="Previous"
            />
            <Button
              shape="circle"
              icon={<ChevronRight size={16} />}
              onClick={() => scroll(360)}
              aria-label="Next"
            />
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-8 flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projectKeys.map((key, i) => (
            <article
              key={key}
              className="flex w-[260px] shrink-0 flex-col gap-3 rounded-2xl bg-white p-3 shadow-sm shadow-navy-900/5 sm:w-[280px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div
                className="aspect-[4/3] w-full rounded-xl"
                style={{ background: swatches[i] }}
                role="img"
                aria-label={t(`items.${key}.title`)}
              />
              <div className="flex flex-col gap-2 px-1 pb-2">
                <h3 className="font-display text-base font-bold text-navy-900">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-sm text-navy-900/55">{t(`items.${key}.body`)}</p>
                <button className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-clay-600">
                  {t("learnMore")}
                  <Arrow size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <a
          href={`/${locale}/projects`}
          className="mt-6 inline-block text-sm font-semibold text-navy-900 underline underline-offset-4"
        >
          {t("seeAll")}
        </a>
      </div>
    </section>
  );
}
