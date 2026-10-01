"use client";

import { motion, type Variants } from "motion/react";

export type Person = { name: string; role: string };

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {people.map((p, i) => (
        <motion.div
          key={i}
          variants={item}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex flex-col items-center gap-4 rounded-3xl border border-gray-50 bg-white p-8 text-center shadow-md shadow-navy-900/5"
        >
          {/* Initial letter placeholder until real photos are added */}
          <div className="flex size-24 items-center justify-center rounded-full bg-mist-100 text-3xl font-bold text-navy-650">
            {p.name.charAt(0)}
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-navy-750">{p.name}</h3>
            <p className="text-sm font-medium text-gray-400">{p.role}</p>
          </div>
          <span className="h-0.75 w-12 rounded-full bg-clay-500" />
        </motion.div>
      ))}
    </motion.div>
  );
}
