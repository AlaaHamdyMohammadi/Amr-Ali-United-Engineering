import constructionImg from "@/assets/aboutUSSection.jpg";
import building from "@/assets/building2.png";
import sectorbuilding from "@/assets/sectorbuilding.png";
import cer1 from "@/assets/cer1.png";
import cer2 from "@/assets/cer2.png";
import cer3 from "@/assets/cer3.png";
import cer4 from "@/assets/cer4.png";
import MainButton from "@/components/ui/MainButton";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CompanyProfile() {
  const t = useTranslations("aboutPage.companyProfile");
  const points = t.raw("points") as string[];

  return (
    <>
      <div className="container-page flex flex-col gap-24 py-10">
        {/* Block 1: text left, image right */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0 items-center">
          <div className="flex flex-col gap-14">
            <h2 className="text-[48px] font-semibold text-heading">
              {t("title")}
            </h2>
            <div className="flex flex-col gap-10 max-w-255">
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

          <Image
            src={constructionImg}
            alt="Building under construction"
            className="rounded-3xl size-100 sm:w-170.75 sm:h-126.75"
          />
        </div>

        {/* Block 2: image left, text right */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Image
            src={building}
            alt="Building two under construction"
            className="rounded-3xl size-100 sm:w-170.75 sm:h-126.75"
          />

          <div className="flex flex-col gap-14 lg:order-2">
            <h2 className="text-[48px] font-semibold text-heading">
              {t("whyTitle")}
            </h2>
            <div className="flex flex-col gap-10 max-w-255">
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
      <div className="container-page flex flex-col sm:flex-row items-center gap-10 sm:gap-30 py-20 bg-linear-to-l from-[#041338] to-[#0B369E]">
        <Image
          src={sectorbuilding}
          alt="Sector Building under construction"
          className="rounded-3xl size-100 sm:w-145.75 sm:h-108.5"
        />
        <div className="flex flex-col gap-14">
          <h1 className="text-white text-[48px] font-semibold">
            {t(`sectorSection.title`)}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mix-w-[500px] sm:min-w-[750px] flex flex-col gap-6 bg-white/4 border border-white/15 rounded-3xl p-8">
              <p className="text-white text-base sm:text-2xl font-bold">
                {t(`sectorSection.p3`)}
              </p>

              <MainButton
                href="/sectors"
                preset="Link"
                className="flex gap-2 items-center! justify-start!"
              >
                <span className="text-white text-sm sm:base font-bold">
                  {t(`sectorSection.sectorButton`)}
                </span>
                <ArrowRight className="size-4 font-bold" />
              </MainButton>
            </div>
            <div className="mix-w-[500px] sm:min-w-[750px] flex flex-col gap-6 bg-white/4 border border-white/15 rounded-3xl p-8">
              <p className="text-white text-base sm:text-2xl font-bold">
                {t(`sectorSection.p2`)}
              </p>

              <MainButton
                href="/sectors"
                preset="Link"
                className="flex gap-2 items-center! justify-start!"
              >
                <span className="text-white text-sm sm:base font-bold">
                  {t(`sectorSection.sectorButton`)}
                </span>
                <ArrowRight className="size-4 font-bold" />
              </MainButton>
            </div>
            <div className="mix-w-[500px] sm:min-w-[750px] flex flex-col gap-6 bg-white/4 border border-white/15 rounded-3xl p-8">
              <p className="text-white text-base sm:text-2xl font-bold">
                {t(`sectorSection.p3`)}
              </p>

              <MainButton
                href="/sectors"
                preset="Link"
                className="flex gap-2 items-center! justify-start!"
              >
                <span className="text-white text-sm sm:base font-bold">
                  {t(`sectorSection.sectorButton`)}
                </span>
                <ArrowRight className="size-4 font-bold" />
              </MainButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 py-20 bg-mist-50">
        <h1 className="px-12 text-heading text-[48px] font-semibold">
          {t(`certificates`)}
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <Image
            src={cer1}
            alt="Certificate1"
            className="rounded-3xl size-50 sm:size-46.5"
          />
          <Image
            src={cer2}
            alt="Certificate1"
            className="w-70 h-30 sm:w-201.5 sm:h-46.5"
          />
          <Image
            src={cer3}
            alt="Certificate1"
            className="rounded-3xl size-50 sm:size-46.5"
          />
          <Image
            src={cer3}
            alt="Certificate1"
            className="rounded-3xl size-50 sm:size-46.5"
          />
          <Image
            src={cer3}
            alt="Certificate1"
            className="rounded-3xl size-50 sm:size-46.5"
          />
          <Image
            src={cer4}
            alt="Certificate1"
            className="w-70 sm:w-89.5 h-46.5"
          />
        </div>
      </div>
    </>
  );
}
