"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

const textVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const easeOut = [0.22, 1, 0.36, 1] as const;


 const imageVar: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut, delay: 0.05 },
    },
  };

const listContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function SectorDetailIntro({
  body,
  body1,
  body2,
  points,
  image,
}: {
  body: string;
  body1: string;
  body2: string;
  points: string[];
  image: StaticImageData | string;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-30 items-center">
      <motion.div
        className="flex flex-col gap-10 max-w-255"
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-lg text-heading font-medium">{body}</p>

        <motion.ul
          className="flex flex-col gap-1.5"
          variants={listContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {points.map((point) => (
            <motion.li
              key={point}
              variants={listItemVariants}
              className="flex items-center gap-2 text-lg text-heading font-medium"
            >
              <span className="size-1 shrink-0 bg-heading" />
              {point}
            </motion.li>
          ))}
        </motion.ul>

        <p className="text-lg text-heading font-medium">{body1}</p>
        <p className="text-lg text-heading font-medium">{body2}</p>

        <motion.span
          className="h-0.75 w-23 rounded-full bg-clay-500 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        />
      </motion.div>

      <motion.div
        variants={imageVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="group cursor-pointer"
      >
        <Image
          src={image}
          alt=""
          className="object-cover w-[683px] h-[391px] rounded-3xl shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_8px_32px_8px_rgba(0,0,0,0.12)] group-hover:brightness-110"
        />
      </motion.div>
    </div>
  );
}
