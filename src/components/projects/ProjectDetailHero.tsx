import Image from "next/image";
import { getLocale } from "next-intl/server";
import type { Locale, ProjectItem } from "@/types/projects";
import BlurText from "../TextAnimations/BlurText";

export default async function ProjectDetailHero({
  project,
}: {
  project: ProjectItem;
}) {
  const locale = (await getLocale()) as Locale;
  const title = project.title[locale];

  return (
    <section className="section relative isolate overflow-hidden bg-navy-950">
      <Image
        src={project.images[0]}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover animate-hero-zoom"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/55"
      />

      <div className="container-page relative flex min-h-[320px] flex-col justify-end pb-10 pt-36 lg:min-h-[460px]">
        <BlurText
          text={title}
          delay={30}
          animateBy="words"
          direction="top"
          className="font-display text-4xl font-medium text-white sm:text-[80px]"
        />
      </div>
    </section>
  );
}
