"use client";

import ShinyText from "@/components/TextAnimations/ShinyText";
import { motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";

// Save the logos in src/assets/clients/ with these names
import amanatJeddah from "@/assets/1.png"; // Frame_1
import universityOfJeddah from "@/assets/2.png"; // Frame_2
import riyadhSeason from "@/assets/3.png"; // Frame_3
import almarai from "@/assets/4.png"; // Frame_4
import gandour from "@/assets/5.png"; // Frame_5
import healthAndTasty from "@/assets/6.png"; // frame_6
import Frame7 from "@/assets/7.png"; // frame_6
import Frame8 from "@/assets/8.png"; // frame_6
import Frame9 from "@/assets/9.png"; // frame_6
import Frame10 from "@/assets/10.jpeg"; // frame_6
import Frame11 from "@/assets/11.png"; // frame_6
import Frame12 from "@/assets/12.png"; // frame_6
import Frame13 from "@/assets/13.png"; // frame_6
import Frame14 from "@/assets/14.png"; // frame_6
import Frame15 from "@/assets/15.png"; // frame_6
import Frame16 from "@/assets/16.png"; // frame_6
import Frame17 from "@/assets/17.png"; // frame_6
import Frame18 from "@/assets/18.png"; // frame_6
import Frame19 from "@/assets/19.png"; // frame_6
import Frame20 from "@/assets/20.png"; // frame_6

const EASE = [0.22, 1, 0.36, 1] as const;

// To add more logos: import the image above and add one line here.
const clients: { name: string; src: StaticImageData }[] = [
  { name: "Jeddah Municipality", src: amanatJeddah },
  { name: "University of Jeddah", src: universityOfJeddah },
  { name: "Riyadh Season", src: riyadhSeason },
  { name: "Almarai", src: almarai },
  { name: "Gandour", src: gandour },
  { name: "Frame7", src: Frame7 },
  { name: "Frame8", src: Frame8 },
  { name: "Frame9", src: Frame9 },
  { name: "Frame10", src: Frame10 },
  { name: "Frame11", src: Frame11 },
  { name: "Frame12", src: Frame12 },
  { name: "Frame13", src: Frame13 },
  { name: "Frame14", src: Frame14 },
  { name: "Frame15", src: Frame15 },
  { name: "Frame16", src: Frame16 },
  { name: "Frame17", src: Frame17 },
  { name: "Frame18", src: Frame18 },
  { name: "Frame19", src: Frame19 },
//   { name: "Frame20", src: Frame20 },
  
  
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function OurPartners() {
  const t = useTranslations("about.clients");
  const locale = useLocale();

  return (
    <div className="container-page flex flex-col gap-16 py-10 pb-20">
      <div className="flex max-w-255 flex-col gap-8">
        <ShinyText
          text={t("title")}
          speed={5}
          delay={0}
          color="#303030"
          shineColor="#eef1fc"
          spread={120}
          direction="left"
          className={`title-font text-[48px] font-semibold text-heading`}
        />
        <p className="text-lg font-medium text-heading">{t("intro")}</p>
        <span className="h-0.75 w-23 rounded-full bg-clay-500" />
      </div>

      <motion.div
        className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {clients.map((client) => (
          <motion.div
            key={client.name}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group flex h-36 items-center justify-center rounded-3xl border border-gray-50 bg-white p-6 shadow-md shadow-navy-900/5"
          >
            <Image
              src={client.src}
              alt={client.name}
              className="h-25 w-auto object-contain transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
