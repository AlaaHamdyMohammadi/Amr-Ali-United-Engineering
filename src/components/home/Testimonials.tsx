"use client";

import { useRef, useState } from "react";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

const testimonialKeys = ["t1", "t2", "t3"] as const;

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const carouselRef = useRef<CarouselRef>(null);
  const [active, setActive] = useState(0);

  return (
    <section className="section bg-navy-950 py-20 lg:py-28">
      <div className="container-page">
        <h2 className="mb-10 font-display text-3xl font-extrabold text-white sm:text-4xl">
          {t("title")}
        </h2>

        <Carousel
          ref={carouselRef}
          dots={false}
          slidesToShow={3}
          slidesToScroll={1}
          afterChange={setActive}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
          ]}
        >
          {testimonialKeys.map((key) => (
            <div key={key} className="px-2.5">
              <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-white/80">{t(`items.${key}`)}</p>
                  <Quote size={28} className="shrink-0 text-white/15" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay-600 text-xs font-bold text-white">
                    {t("author").slice(0, 1)}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {t("author")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="mt-8 flex gap-2">
          {testimonialKeys.map((key, i) => (
            <button
              key={key}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => carouselRef.current?.goTo(i)}
              className="h-1 rounded-full transition-all"
              style={{
                width: i === active ? 32 : 16,
                background: i === active ? "#ea7317" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
