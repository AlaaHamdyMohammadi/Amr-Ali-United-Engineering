import Image from "next/image";
import { getTranslations } from "next-intl/server";
import heroSectionImg from "@/assets/heroSection.png";
import { projectsImages, type ProjectId } from "@/lib/projects";
import BlurText from "../TextAnimations/BlurText";

export default async function ProjectDetailHero({ id }: { id: string }) {
  const t = await getTranslations("projects");

  console.log("id = ", id);

  return (
    <section className="section relative isolate overflow-hidden bg-navy-950">
      <Image
        src={projectsImages[id as ProjectId]}
        alt=""
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
          text={t(`${id}`)}
          delay={30}
          animateBy="words"
          direction="top"
          className="font-display text-4xl font-medium text-white sm:text-[80px]"
        />
      </div>
    </section>
  );
}
