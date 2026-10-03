"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { ArticleTypeKey } from "@/data/articles";
import { articlesImages, articlesVideos } from "@/lib/articles";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface ArticleSection {
  id: string;
  nav: string; // label in the right sidebar
  title: string; // heading in the content
  paragraphs?: string[];
  listTitle?: string;
  list?: string[];
  items?: { title: string; body: string }[];
}

interface ArticleDetail {
  title: string;
  sections: ArticleSection[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ArticleDetailContent({ id }: { id: ArticleTypeKey }) {
  const t = useTranslations("articles");
  const [playing, setPlaying] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const locale = useLocale();

  if (!t.has(`details.${id}`)) notFound();

  const detail = t.raw(`details.${id}`) as ArticleDetail;
  const video = articlesVideos[id];

  // Scroll spy: highlight the sidebar item of the section in view
  useEffect(() => {
    setActiveId(detail.sections[0]?.id ?? "");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    detail.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [detail.sections]);

  function scrollTo(sectionId: string) {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="section container-page bg-mist-50">
      <div className="px-4 py-8">
        <Breadcrumbs />
      </div>

      <div className="grid gap-6 pt-6 pb-20 lg:grid-cols-[1fr_320px] lg:items-start">
        {/* Main column */}
        <motion.article
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* Media */}
          <div className="relative h-60 w-full overflow-hidden rounded-3xl sm:h-[484px]">
            {playing && video ? (
              <video
                src={video}
                controls
                autoPlay
                className="h-full w-full object-cover"
              />
            ) : (
              <>
                <Image
                  src={articlesImages[id]}
                  alt={detail.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
                <motion.button
                  aria-label={t("play")}
                  onClick={() => video && setPlaying(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white"
                >
                  <Play size={18} fill="currentColor" />
                </motion.button>
              </>
            )}
          </div>

          <h1
            className={`title-font text-[32px] font-semibold uppercase text-heading`}
          >
            {detail.title}
          </h1>

          {/* Sections */}
          {detail.sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className="flex scroll-mt-28 flex-col gap-6"
            >
              {index > 0 && (
                <>
                  <hr className="border-[#CDCDCD]" />
                  <h2
                    className={`title-font text-[32px] font-semibold uppercase text-heading`}
                  >
                    {section.title}
                  </h2>
                </>
              )}

              {section.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="text-lg font-medium leading-6 text-heading"
                >
                  {p}
                </p>
              ))}

              {(section.listTitle || section.list) && (
                <div className="flex flex-col gap-2">
                  {section.listTitle && (
                    <p className="text-xl font-bold text-heading">
                      {section.listTitle}
                    </p>
                  )}
                  <ul className="list-disc ps-5 text-lg leading-7 text-heading">
                    {section.list?.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.items?.map((item) => (
                <div key={item.title} className="flex flex-col gap-1">
                  <p className="text-xl font-bold text-heading">{item.title}</p>
                  <p className="text-lg leading-7 font-medium text-heading">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </motion.article>

        {/* Sidebar */}
        <motion.aside
          className="sticky top-28 hidden rounded-3xl border border-[#EBEBEB] bg-white/60 px-6 py-2 lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
        >
          <nav className="flex flex-col">
            {detail.sections.map((section) => {
              const active = activeId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`border-b border-[#EBEBEB] py-4 text-start text-xs font-bold transition-colors duration-300 last:border-b-0 ${
                    active
                      ? "text-navy-900"
                      : "text-navy-900/40 hover:text-navy-900/70"
                  }`}
                >
                  {section.nav}
                </button>
              );
            })}
          </nav>
        </motion.aside>
      </div>
    </section>
  );
}
