"use client";

import NextImage from "next/image";
import { Image as AntImage } from "antd";
import { useTranslations } from "next-intl";

interface ProjectGalleryProps {
  images: string[];
  alt: string;
}

const VISIBLE_COUNT = 4;

function Thumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <NextImage
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 640px) 50vw, 100vw"
      className="object-cover"
    />
  );
}

// An invisible antd Image sitting exactly on top of the visible thumbnail —
// its only job is to be the click target antd's PreviewGroup recognizes,
// so clicking anywhere on the card opens the lightbox at full quality.
function PreviewTrigger({ src, alt }: { src: string; alt: string }) {
  return (
    <AntImage
      src={src}
      alt={alt}
      classNames={{
        root: "!absolute !inset-0 !h-full !w-full cursor-pointer",
        image: "!h-full !w-full !object-cover opacity-0",
      }}
    />
  );
}

export default function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const t = useTranslations("projects");
  const [thumb1, thumb2, thumb3, main] = images.slice(0, VISIBLE_COUNT);
  const extraCount = Math.max(images.length - VISIBLE_COUNT, 0);

  return (
    <AntImage.PreviewGroup items={images}>
      <div className="grid h-[340px] grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-3 sm:h-[500px]">
        <div className="flex flex-col gap-3">
          {[thumb1, thumb2].map((src, i) =>
            src ? (
              <div
                key={i}
                className="relative flex-1 overflow-hidden rounded-2xl"
              >
                <Thumbnail src={src} alt={alt} />
                <PreviewTrigger src={src} alt={alt} />
              </div>
            ) : null,
          )}

          {thumb3 && (
            <div className="relative flex-1 overflow-hidden rounded-2xl">
              <Thumbnail src={thumb3} alt={alt} />
              <PreviewTrigger src={thumb3} alt={alt} />

              {extraCount > 0 && (
                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-black/50 text-sm font-semibold text-white">
                  {t("moreImages", { count: extraCount })}
                </div>
              )}
            </div>
          )}
        </div>

        {main && (
          <div className="relative overflow-hidden rounded-2xl">
            <Thumbnail src={main} alt={alt} />
            <PreviewTrigger src={main} alt={alt} />
          </div>
        )}
      </div>
    </AntImage.PreviewGroup>
  );
}
