"use client";

import ShinyText from "@/components/TextAnimations/ShinyText";
import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";

// Save the logos in src/assets/clients/ with these names
import amanatJeddah from "@/assets/Frame1.png"; // Frame_1
import universityOfJeddah from "@/assets/Frame2.png"; // Frame_2
import riyadhSeason from "@/assets/Frame3.png"; // Frame_3
import almarai from "@/assets/Frame4.png"; // Frame_4
import gandour from "@/assets/Frame5.png"; // Frame_5
import healthAndTasty from "@/assets/Frame6.png"; // frame_6
import Frame7 from "@/assets/Frame7.png"; // frame_6
import Frame8 from "@/assets/Frame8.png"; // frame_6
import Frame9 from "@/assets/Frame9.png"; // frame_6
import Frame10 from "@/assets/Frame10.png"; // frame_6
import Frame11 from "@/assets/Frame11.png"; // frame_6
import Frame12 from "@/assets/Frame12.png"; // frame_6
import Frame13 from "@/assets/Frame13.png"; // frame_6
import Frame14 from "@/assets/Frame14.png"; // frame_6
import Frame15 from "@/assets/Frame15.png"; // frame_6
import Frame16 from "@/assets/Frame16.png"; // frame_6
import Frame17 from "@/assets/Frame17.png"; // frame_6
import Frame18 from "@/assets/Frame18.png"; // frame_6
import Frame19 from "@/assets/Frame19.png"; // frame_6
import Frame20 from "@/assets/Frame20.png"; // frame_6

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
          className="title-font text-[48px] font-semibold text-heading"
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
            className="group flex h-32 items-center justify-center rounded-3xl border border-gray-50 bg-white p-6 shadow-md shadow-navy-900/5"
          >
            <Image
              src={client.src}
              alt={client.name}
              className="h-14 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
