"use client";

import LogoImg from "@/assets/amrAliLogo.png";
import facebook from "@/assets/facebook.svg";
import instegram from "@/assets/instegram.svg";
import linkedin from "@/assets/linkedin.svg";
import twitter from "@/assets/twitter.svg";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import GradientText from "../TextAnimations/GradientText";
import MainButton from "../ui/MainButton";

const socialLinks = [
  { key: "facebook", icon: facebook, href: "#" },
  { key: "twitter", icon: twitter, href: "#" },
  { key: "linkedin", icon: linkedin, href: "#" },
  { key: "instagram", icon: instegram, href: "#" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const WHATSAPP_NUMBER = "201500092233";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t("whatsappMessage"),
  )}`;

  return (
    // grid sm:grid-cols-2 lg:grid-cols-4
    <footer className="section pt-22 bg-gray-450 ">
      <div className="container-page flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
          <Image
            src={LogoImg}
            alt="logo"
            width={145}
            height={145}
            className="size-25 sm:size-36.5"
          />
          <div className="flex flex-col gap-6">
            <GradientText
              colors={["#F89622", "#16295c", "#000000"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class text-xl! font-bold!"
            >
              {t("servicesTitle")}
            </GradientText>
            <ul className="flex flex-col gap-4 font-medium text-black">
              <li className="hover:text-clay-600 hover:cursor-pointer">
                {t("services.residential")}
              </li>
              <li className="hover:text-clay-600 hover:cursor-pointer">
                {t("services.commercial")}
              </li>
              <li className="hover:text-clay-600 hover:cursor-pointer">
                {t("services.medical")}
              </li>
              <li className="hover:text-clay-600 hover:cursor-pointer">
                {t("services.restaurants")}
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <GradientText
              colors={["#F89622", "#16295c", "#000000"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class text-xl! font-bold!"
            >
              {t("helpTitle")}
            </GradientText>
            <ul className="flex flex-col gap-4 font-medium text-black">
              <li className="hover:text-clay-600 hover:cursor-pointer">
                <a href={`/${locale}/about`}>{t("help.about")}</a>
              </li>
              <li className="hover:text-clay-600 hover:cursor-pointer">
                <a href={`/${locale}/contact-us`}>{t("help.contact")}</a>
              </li>
              <li className="hover:text-clay-600 hover:cursor-pointer">
                <a href={`/${locale}/terms-and-conditions`}>
                  {t("help.terms")}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col  gap-6 ">
            <MainButton
              preset="solid"
              className="h-14! w-full! sm:w-62.25! bg-clay-650! hover:bg-clay-600! font-bold! text-base!"
              href="/contact-us"
            >
              {t("scheduleMeeting")}
            </MainButton>
            <MainButton
              preset="outline"
              className="h-14! w-full! sm:w-62.25! border! border-clay-700! text-clay-700! font-bold! text-base! hover:bg-clay-600! hover:text-white!"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("requestPrices")}
            </MainButton>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-4 border-t border-[#4B4B4B] py-8 sm:flex-row sm:justify-between">
          <GradientText
            colors={["#F89622", "#16295c", "#000000"]}
            animationSpeed={5}
            showBorder={false}
            className="custom-class text-sm"
          >
            {t("rights")}
          </GradientText>
          <div className="flex gap-2 text-black">
            {socialLinks.map(({ key, icon: Icon, href }) => (
              <a key={key} href={href} aria-label={key}>
                <Image
                  src={Icon}
                  alt={key}
                  width={40}
                  height={40}
                  className="hover:bg-clay-600 hover:rounded-lg"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
