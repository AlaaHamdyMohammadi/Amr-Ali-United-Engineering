"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MainButton from "@/components/ui/MainButton";
import type { ArticleTypeKey } from "@/data/articles";
import { articlesImages, articlesVideos } from "@/lib/articles";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ArticleBlock {
  type: "paragraph" | "list";
  text?: string; // paragraph
  listTitle?: string; // list
  items?: string[]; // list
}

interface ArticleSection {
  id: string;
  nav: string;
  title: string;
  // New, flexible way to order content — a section can mix paragraphs and
  // lists in any sequence (paragraph, list, paragraph, list, ...).
  blocks?: ArticleBlock[];
  // Legacy fixed-order fields — still supported so older sections written
  // before `blocks` existed keep rendering exactly as before.
  paragraphs?: string[];
  listTitle?: string;
  list?: string[];
  items?: { title: string; body: string }[];
}

interface ArticleDetail {
  title: string;
  sections: ArticleSection[];
  cta?: {
    text: string;
    whatsappMessage: string;
  };
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ArticleDetailContent({ id }: { id: ArticleTypeKey }) {
  const t = useTranslations("articles");
  const [playing, setPlaying] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  const hasDetail = t.has(`details.${id}`);

  const detail: ArticleDetail = hasDetail
    ? (t.raw(`details.${id}`) as ArticleDetail)
    : {
        title: t(`items.${id}.title`),
        sections: [
          {
            id: "overview",
            nav: t("comingSoonNav"),
            title: t(`items.${id}.title`),
            paragraphs: [t(`items.${id}.description`), t("comingSoonBody")],
          },
        ],
      };

  const video = articlesVideos[id];

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
        <motion.article
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="relative h-60 w-full overflow-hidden rounded-3xl sm:h-[484px]">
            <Image
              src={articlesImages[id]}
              alt={detail.title}
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
          </div>

          <h1 className="title-font text-[32px] font-semibold uppercase text-heading">
            {detail.title}
          </h1>

          {detail.sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className="flex scroll-mt-28 flex-col gap-6"
            >
              {index > 0 && (
                <>
                  <hr className="border-[#CDCDCD]" />
                  <h2 className="title-font text-[32px] font-semibold uppercase text-heading">
                    {section.title}
                  </h2>
                </>
              )}

              {section.blocks ? (
                section.blocks.map((block, i) =>
                  block.type === "paragraph" ? (
                    <p
                      key={i}
                      className="text-lg font-medium leading-6 text-heading"
                    >
                      {block.text}
                    </p>
                  ) : (
                    <div key={i} className="flex flex-col gap-2">
                      {block.listTitle && (
                        <p className="text-xl font-bold text-heading">
                          {block.listTitle}
                        </p>
                      )}
                      <ul className="list-disc ps-5 text-lg leading-7 text-heading">
                        {block.items?.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    </div>
                  ),
                )
              ) : (
                <>
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
                      <p className="text-xl font-bold text-heading">
                        {item.title}
                      </p>
                      <p className="text-lg leading-7 font-medium text-heading">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}

          {detail.cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex flex-col items-start gap-4 rounded-3xl bg-[#061435] p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-lg font-medium text-white">
                {detail.cta.text}
              </p>
              <div className="flex flex-wrap gap-3">
                <MainButton href="/contact-us" className="hover:bg-clay-700!">
                  {t("details.buttons.schedule")}
                </MainButton>
                <MainButton
                  href={`https://wa.me/201500092233?text=${encodeURIComponent(
                    detail.cta.whatsappMessage,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  // type="default"
                  className="bg-white! text-clay-700! hover:bg-clay-600! hover:text-white! transition! duration-300!"
                >
                  {t("details.buttons.price")}
                </MainButton>
              </div>
            </motion.div>
          )}
        </motion.article>

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
