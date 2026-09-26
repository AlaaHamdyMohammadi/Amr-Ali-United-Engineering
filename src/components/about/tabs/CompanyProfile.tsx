import constructionImg from "@/assets/aboutUSSection.jpg";
import building from "@/assets/building2.png";
import cer1 from "@/assets/cer1.png";
import cer2 from "@/assets/cer2.png";
import cer3 from "@/assets/cer3.png";
import cer4 from "@/assets/cer4.png";
import sectorbuilding from "@/assets/sectorbuilding.png";
import ShinyText from "@/components/TextAnimations/ShinyText";
import MainButton from "@/components/ui/MainButton";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const easeOut = [0.22, 1, 0.36, 1] as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const certificates = [
  { src: cer1, className: "rounded-3xl size-50 sm:size-46.5" },
  { src: cer2, className: "w-70 h-30 sm:w-201.5 sm:h-46.5" },
  { src: cer3, className: "rounded-3xl size-50 sm:size-46.5" },
  { src: cer3, className: "rounded-3xl size-50 sm:size-46.5" },
  { src: cer3, className: "rounded-3xl size-50 sm:size-46.5" },
  { src: cer4, className: "w-70 sm:w-89.5 h-46.5" },
];

export default function CompanyProfile() {
  const t = useTranslations("about.companyProfile");
  const points = t.raw("points") as string[];
  const locale = useLocale();
  const imageVar: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut, delay: 0.05 },
    },
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.96 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  return (
    <>
      <div className="container-page flex flex-col gap-24 py-10">
        {/* Block 1: text left, image right */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0 items-center">
          <div className="flex flex-col gap-14">
            <ShinyText
              text={t("title")}
              speed={5}
              delay={0}
              color="#303030"
              shineColor="#eef1fc"
              spread={120}
              direction="left"
              className="text-[48px] font-semibold text-heading"
            />
            <div className="flex flex-col gap-10 max-w-180 lg:max-w-255">
              <p className="text-lg text-heading font-medium">{t("lead")}</p>
              <ul className="flex flex-col gap-1.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-lg text-heading font-medium"
                  >
                    <span className="size-1 shrink-0  bg-heading" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-heading font-medium">{t("body1")}</p>
              <p className="text-lg text-heading font-medium">{t("body2")}</p>
              <span className="h-0.75 w-23 rounded-full bg-clay-500" />
            </div>
          </div>
          <motion.div
            variants={imageVar}
            className="relative aspect-3/2 size-100 sm:w-170.75 sm:h-126.75 overflow-hidden rounded-3xl group cursor-pointer"
          >
            <Image
              src={constructionImg}
              alt="Building under construction"
              fill
              className="object-cover rounded-2xl shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_8px_32px_8px_rgba(0,0,0,0.12)] group-hover:brightness-110"
            />
          </motion.div>
        </div>

        {/* Block 2: image left, text right */}
        <div className="flex flex-col sm:flex-row gap-30 items-center">
          {/* <Image
            src={building}
            alt="Building two under construction"
            className="rounded-3xl size-100 sm:w-170.75 sm:h-126.75"
          /> */}
          <motion.div
            variants={imageVar}
            className="relative aspect-3/2 size-100 sm:w-170.75 sm:h-126.75 overflow-hidden rounded-3xl group cursor-pointer"
          >
            <Image
              src={building}
              alt="Building two under construction"
              fill
              className="object-cover rounded-2xl shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_8px_32px_8px_rgba(0,0,0,0.12)] group-hover:brightness-110"
            />
          </motion.div>

          <div className="flex flex-col gap-14 lg:order-2">
            <h2 className="text-[48px] font-semibold text-heading">
              {t("whyTitle")}
            </h2>
            <div className="flex flex-col gap-10 max-w-160 lg:max-w-255">
              <p className="text-lg text-heading font-medium">
                {t("whyBody1")}
              </p>
              <p className="text-lg text-heading font-medium">
                {t("whyBody2")}
              </p>
              <p className="text-lg text-heading font-medium">
                {t("whyBody3")}
              </p>
              <span className="h-0.75 w-23 rounded-full bg-clay-500" />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="container-page flex flex-col sm:flex-row items-center gap-10 sm:gap-30 py-20 bg-linear-to-l from-[#041338] to-[#0B369E]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        <motion.div variants={imageVariants}>
          <Image
            src={sectorbuilding}
            alt="Sector Building under construction"
            className="rounded-3xl size-100 sm:w-145.75 sm:h-108.5"
          />
        </motion.div>

        <div className="flex flex-col gap-14 w-full">
          <motion.h1
            variants={itemVariants}
            className="text-white text-[48px] font-semibold"
          >
            {t(`sectorSection.title`)}
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
          >
            {[`sectorSection.p3`, `sectorSection.p2`, `sectorSection.p3`].map(
              (key, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex flex-col gap-6 bg-white/4 border border-white/15 rounded-3xl p-8"
                >
                  <p className="text-white text-base sm:text-2xl font-bold">
                    {t(key)}
                  </p>

                  <MainButton
                    href="/sectors"
                    preset="Link"
                    className="flex gap-2 items-center! justify-start!"
                  >
                    <span className="text-white text-sm sm:base font-bold">
                      {t(`sectorSection.sectorButton`)}
                    </span>
                    {locale === "en" ? (
                      <ArrowRight className="size-4 font-bold transition-transform duration-300 group-hover:translate-x-1" />
                    ) : (
                      <ArrowLeft className="size-4 font-bold transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </MainButton>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col gap-16 py-20 bg-mist-50">
        <h1 className="px-12 text-heading text-[48px] font-semibold">
          {t(`certificates`)}
        </h1>
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex items-center gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* render the row twice back-to-back for a seamless loop */}
            {[...certificates, ...certificates].map((cert, index) => (
              <Image
                key={index}
                src={cert.src}
                alt="Certificate"
                className={cert.className}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
