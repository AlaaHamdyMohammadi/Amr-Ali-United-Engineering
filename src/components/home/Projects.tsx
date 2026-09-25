"use client";

import { useRef } from "react";
import apartmants from "@/assets/apartmants.png";
import buildings from "@/assets/buildings.png";
import interiors from "@/assets/home-interiors.png";
import villas from "@/assets/villas.png";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";
import MainButton from "../ui/MainButton";

const projectKeys = ["buildings", "interiors", "apartments", "villas"] as const;

const images: Record<(typeof projectKeys)[number], StaticImageData> = {
  buildings,
  interiors,
  apartments: apartmants,
  villas,
};

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
    <section className="section bg-mist-50 py-20">
      <div className="container-page flex flex-col gap-12">
        <h2 className="text-2xl font-bold text-navy-650 sm:text-[48px]">
          {t("title")}
        </h2>

        <div
          ref={scrollerRef}
          className="grid grid-cols-1 sm:grid-cols-4 gap-6 "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projectKeys.map((key) => (
            <div
              key={key}
              className="max-w-106 flex shrink-0 flex-col gap-6 border border-gray-50 rounded-3xl bg-white shadow-md shadow-navy-900/5"
              style={{ scrollSnapAlign: "start" }}
            >
              <Image
                src={images[key]}
                alt={key}
                className="w-80 h-40 sm:w-108.25 sm:h-52.25 rounded-3xl object-cover"
              />
              <div className="flex flex-col gap-8 px-6">
                <div className="flex flex-col gap-4">
                  <h1 className="text-navy-750 font-bold text-lg">
                    {t(`items.${key}.title`)}
                  </h1>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
                      <p className="text-gray-400 font-bold">{t("sector")}</p>
                      <p className="text-black font-medium text-sm">
                        {t(`items.${key}.sectorTitle`)}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-gray-400 font-bold">{t("section")}</p>
                      <p className="text-black font-medium text-sm">
                        {t(`items.${key}.sectionTitle`)}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-gray-400 font-bold">{t("location")}</p>
                      <p className="text-black font-medium text-sm">
                        {t(`items.${key}.locationTitle`)}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-gray-400 font-bold">{t("year")}</p>
                      <p className="text-black font-medium text-sm">
                        {t(`items.${key}.yearTitle`)}
                      </p>
                    </div>
                  </div>
                </div>
                <MainButton preset="Link" className="justify-start!">
                  <span>See Projects</span>
                  <Arrow size={16} />
                </MainButton>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <a
            href={`/${locale}/projects`}
            className="text-sm font-semibold text-navy-900 underline underline-offset-4"
          >
            {t("seeAll")}
          </a>

          <div className="hidden gap-2 sm:flex">
            <MainButton
              preset="toggle"
              className="!bg-white !shadow-sm"
              icon={<ChevronLeft size={16} />}
              onClick={() => scroll(-360)}
              aria-label="Previous"
            />
            <MainButton
              preset="toggle"
              className="!bg-white !shadow-sm"
              icon={<ChevronRight size={16} />}
              onClick={() => scroll(360)}
              aria-label="Next"
            />
          </div>
        </div>
      </div>
    </section>
  );
}