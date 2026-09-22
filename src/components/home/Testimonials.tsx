"use client";

import userReview from "@/assets/userReview.jpg";
import quote1 from "@/assets/quotation 1.svg";
import quote2 from "@/assets/quotation 2.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";

const testimonialKeys = ["t1", "t2", "t3", "t4", "t5", "t6"] as const;

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Click-and-drag scrolling — native overflow-x-auto only responds to
  // touch/trackpad by default, not a mouse click-drag.
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  function onPointerDown(e: React.PointerEvent) {
    const el = scrollerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    startScrollLeftRef.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    const el = scrollerRef.current;
    if (!el || !isDraggingRef.current) return;
    const delta = e.clientX - startXRef.current;
    el.scrollLeft = startScrollLeftRef.current - delta;
  }

  function endDrag(e: React.PointerEvent) {
    const el = scrollerRef.current;
    if (isDraggingRef.current) el?.releasePointerCapture(e.pointerId);
    isDraggingRef.current = false;
    setIsDragging(false);
  }

  // Approximate which card is centered in view, for the progress bar below.
  function handleScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / testimonialKeys.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActive(Math.min(Math.max(index, 0), testimonialKeys.length - 1));
  }

  function goTo(index: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / testimonialKeys.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  }

  return (
    <section className="section bg-linear-to-bl from-[#B37B3A] to-[#D8964A] py-30 lg:py-20">
      <div className="container-page flex flex-col gap-12">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          {t("title")}
        </h2>

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className={`flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          style={{ scrollSnapType: isDragging ? "none" : "x mandatory" }}
        >
          {testimonialKeys.map((key) => (
            <div
              key={key}
              className="w-full shrink-0 sm:w-[400px] lg:w-[672px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-[#EA9D4233] border border-[#EDEDED] p-5 sm:px-20 sm:pt-[96px] sm:pb-12 shadow-md shadow-navy-900/5">
                {/* Decorative quote marks — sit behind the content, cropped
                    by the card's own rounded corners via overflow-hidden
                    above. Purely visual, so they're aria-hidden. */}
                <Image
                  src={quote1}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute left-9 top-17 h-16 w-auto opacity-90"
                />
                <Image
                  src={quote2}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute right-8 bottom-28 h-20 w-auto opacity-90"
                />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <p className="text-white text-sm sm:text-xl font-semibold">
                    {t(`items.${key}`)}
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-2">
                  <Image
                    src={userReview}
                    alt="userReview"
                    className="flex size-12 items-center justify-center rounded-full"
                  />
                  <span className="font-bold text-sm sm:text-base text-white">{t("author")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          {testimonialKeys.map((key, i) => (
            <button
              key={key}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-1 rounded-full transition-all"
              style={{
                width: i === active ? 204 : 76,
                background: i === active ? "#072469" : "#ffffff",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
