"use client";

import { Input, Button } from "antd";
import { Globe, MessageCircle, Link2, Share2, Send } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import LogoImg from "@/assets/amrAliLogo.png";
import facebook from "@/assets/facebook.svg";
import twitter from "@/assets/twitter.svg";
import linkedin from "@/assets/linkedin.svg";
import instegram from "@/assets/instegram.svg";
import Image from "next/image";


// lucide-react no longer ships trademarked brand marks (Facebook/Twitter/etc).
// These generic icons stand in for social links — swap in real brand SVGs
// (as local assets) if you need the exact logos.
const socialLinks = [
  { key: "facebook", icon: facebook, href: "#" },
  { key: "twitter", icon: twitter, href: "#" },
  { key: "linkedin", icon: linkedin, href: "#" },
  { key: "instagram", icon: instegram, href: "#" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="section pt-22 bg-gray-450 ">
      <div className="container-page flex flex-col gap-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0">
          <Image src={LogoImg} alt="logo" width={145} height={145} className="size-25 sm:size-36.5" />
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-black">
              {t("servicesTitle")}
            </h3>
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
            <h3 className="text-xl font-bold text-black">{t("helpTitle")}</h3>
            <ul className="flex flex-col gap-4 font-medium text-black">
              <li className="hover:text-clay-600 hover:cursor-pointer">
                <a href={`/${locale}/about`}>{t("help.about")}</a>
              </li>
              <li className="hover:text-clay-600 hover:cursor-pointer">
                <a href={`/${locale}/contact`}>{t("help.contact")}</a>
              </li>
              <li className="hover:text-clay-600 hover:cursor-pointer">
                <a href={`/${locale}/terms`}>{t("help.terms")}</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-black">{t("priceTitle")}</h3>
            <p className="text-[#4A4A4A]">{t("priceSub")}</p>
            <div className="flex gap-2">
              <Input
                placeholder={t("emailPlaceholder")}
                // className="rounded-full"
              />
              <Button
                type="primary"
                shape="circle"
                icon={<Send size={16} />}
                aria-label="Submit"
                className="rounded-lg!"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-4 border-t border-[#4B4B4B] py-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-black">{t("rights")}</p>
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
