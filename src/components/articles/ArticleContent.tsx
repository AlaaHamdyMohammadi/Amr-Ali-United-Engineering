"use client";

import altitude from "@/assets/altitude.png";
import architecture from "@/assets/architecture.png";
import constructions from "@/assets/constructions.png";
import metals from "@/assets/metals.png";
import { articles, type ArticleTypeKey } from "@/data/articles";
import { Pagination } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import Breadcrumbs from "../ui/Breadcrumbs";
import MainButton from "../ui/MainButton";

const images: Record<ArticleTypeKey, StaticImageData> = {
  constructions,
  architecture,
  metals,
  altitude,
};

const PAGE_SIZE = 12;

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, x: -40, transition: { duration: 0.25, ease: "easeIn" } },
};

const cardVariantsRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, x: 40, transition: { duration: 0.25, ease: "easeIn" } },
};

export default function ArticleContent() {
  const t = useTranslations("articles");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const [page, setPage] = useState(1);
  const paged = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="section">
      <div className="px-4 py-6 sm:px-12">
        <Breadcrumbs />
      </div>

      <div className="container-page flex flex-col gap-16 pt-10 pb-20">
        <AnimatePresence mode="wait">
          {paged.length === 0 ? (
            <motion.p
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center text-navy-900/50"
            >
              {t("noResults")}
            </motion.p>
          ) : (
            <motion.div
              key={`page-${page}`}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              variants={gridVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {paged.map((item, index) => (
                <motion.article
                  key={item.id}
                  layout
                  variants={
                    index % 2 === 0 ? cardVariantsLeft : cardVariantsRight
                  }
                  exit="exit"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="flex flex-col gap-6 rounded-3xl border border-[#EBEBEB] bg-white pb-6 shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)]"
                >
                  <Image
                    src={images[item.typeKey]}
                    alt={t(`items.${item.typeKey}.title`)}
                    className="h-40 w-full rounded-3xl object-cover sm:h-[209px]"
                  />

                  <div className="flex flex-col gap-4 px-6">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-sm font-bold text-navy-750">
                        {t(`items.${item.typeKey}.title`)}
                      </h2>
                      <p className="line-clamp-2 text-xs leading-6 text-gray-600">
                        {t(`items.${item.typeKey}.description`)}
                      </p>
                    </div>

                    <MainButton
                      preset="navLink"
                      className="justify-start!"
                      href={`/articles/${item.typeKey}`}
                    >
                      <span>{t("readArticle")}</span>
                      <Arrow size={16} />
                    </MainButton>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {articles.length > PAGE_SIZE && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Pagination
              current={page}
              pageSize={PAGE_SIZE}
              total={articles.length}
              onChange={setPage}
              showSizeChanger={false}
              align="center"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
