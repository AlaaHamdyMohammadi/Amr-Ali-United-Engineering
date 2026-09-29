import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { articlesImages } from "@/lib/articles";
import type { ArticleTypeKey } from "@/data/articles";
import BlurText from "../TextAnimations/BlurText";

export default async function ArticleDetailHero({
  id,
}: {
  id: ArticleTypeKey;
}) {
  const t = await getTranslations("articles");

  return (
    <section className="section relative isolate overflow-hidden bg-navy-950">
      <Image
        src={articlesImages[id]}
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
          text={t(`items.${id}.title`)}
          delay={30}
          animateBy="words"
          direction="top"
          className="font-display text-4xl font-medium text-white sm:text-[80px]"
        />
      </div>
    </section>
  );
}
