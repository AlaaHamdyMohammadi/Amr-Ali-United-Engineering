"use client";

import quote1 from "@/assets/quotation 1.svg";
import quote2 from "@/assets/quotation 2.svg";

import { motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import { User, House, BuildingComplex } from "lucide-react";

import ShinyText from "../TextAnimations/ShinyText";

const testimonialKeys = ["t1", "t2", "t3", "t4"] as const;

const testimonialIcons = {
  t1: User,
  t2: House,
  t3: BuildingComplex,
  t4: User,
} as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardEntranceVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Testimonials() {
  const t = useTranslations("home.testimonials");
  const locale = useLocale();

  const scrollerRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);

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

    if (isDraggingRef.current) {
      el?.releasePointerCapture(e.pointerId);
    }

    isDraggingRef.current = false;
    setIsDragging(false);
  }

  // Distance from one card's start to the next
  // (card width + gap), always positive
  function getStep(el: HTMLDivElement) {
    const first = el.children[0] as HTMLElement;
    const second = el.children[1] as HTMLElement | undefined;

    return second
      ? Math.abs(second.offsetLeft - first.offsetLeft)
      : first.offsetWidth;
  }

  function handleScroll() {
    const el = scrollerRef.current;

    if (!el) return;

    // abs() because scrollLeft is negative in RTL
    const index = Math.round(Math.abs(el.scrollLeft) / getStep(el));

    setActive(Math.min(Math.max(index, 0), testimonialKeys.length - 1));
  }

  function goTo(index: number) {
    const el = scrollerRef.current;

    if (!el) return;

    const isRtl = getComputedStyle(el).direction === "rtl";

    const left = getStep(el) * index * (isRtl ? -1 : 1);

    el.scrollTo({
      left,
      behavior: "smooth",
    });
  }

  return (
    <section className="section bg-linear-to-bl from-[#B37B3A] to-[#D8964A] py-30 lg:py-20">
      <motion.div
        className="container-page flex flex-col gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {/* Title */}
        <ShinyText
          text={t("title")}
          speed={5}
          delay={0}
          color="#ffffff"
          shineColor="#A0B8D7"
          spread={120}
          direction="left"
          className={`title-font text-3xl font-semibold text-white sm:text-[48px]`}
        />

        {/* Testimonials Slider */}
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
          style={{
            scrollSnapType: isDragging ? "none" : "x mandatory",
          }}
        >
          {testimonialKeys.map((key, i) => {
            const Icon = testimonialIcons[key];

            return (
              <motion.div
                key={key}
                variants={cardEntranceVariants}
                animate={{
                  scale: active === i ? 1 : 0.94,
                  opacity: active === i ? 1 : 0.55,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                }}
                className="w-full shrink-0 sm:w-[400px] lg:w-[672px]"
                style={{
                  scrollSnapAlign: "start",
                }}
              >
                <div className="relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-3xl border border-[#EDEDED] bg-[#EA9D4233] p-5 shadow-md shadow-navy-900/5 sm:px-20 sm:pt-[96px] sm:pb-12">
                  {/* Quote 1 */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute left-9 top-17"
                  >
                    <Image
                      src={quote1}
                      alt=""
                      aria-hidden
                      className="h-16 w-auto opacity-90"
                    />
                  </motion.div>

                  {/* Quote 2 */}
                  <motion.div
                    animate={{
                      y: [0, 6, 0],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute right-8 bottom-28"
                  >
                    <Image
                      src={quote2}
                      alt=""
                      aria-hidden
                      className="h-20 w-auto opacity-90"
                    />
                  </motion.div>

                  {/* Review */}
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold text-white sm:text-xl">
                      {t(`items.${key}.review`)}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        className="text-white"
                      />
                    </div>

                    <span className="text-sm font-bold text-white sm:text-base">
                      {t(`items.${key}.author`)}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex gap-2">
          {testimonialKeys.map((key, i) => (
            <motion.button
              key={key}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              whileTap={{
                scale: 0.9,
              }}
              animate={{
                width: i === active ? 204 : 76,
                backgroundColor: i === active ? "#072469" : "#ffffff",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
