"use client";

import { Input, Button } from "antd";
import { Globe, MessageCircle, Link2, Share2, Send } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

// lucide-react no longer ships trademarked brand marks (Facebook/Twitter/etc).
// These generic icons stand in for social links — swap in real brand SVGs
// (as local assets) if you need the exact logos.
const socialLinks = [
  { key: "facebook", icon: Globe, href: "#" },
  { key: "twitter", icon: MessageCircle, href: "#" },
  { key: "linkedin", icon: Link2, href: "#" },
  { key: "instagram", icon: Share2, href: "#" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="section bg-mist-50 pt-16">
      <div className="container-page">
        <div className="grid gap-10 border-t border-navy-900/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-display font-extrabold text-white">
              AA
            </span>
            <p className="max-w-[220px] text-sm text-navy-900/50">
              United Engineering for Contracting Works.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-navy-900">
              {t("servicesTitle")}
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-navy-900/60">
              <li>{t("services.residential")}</li>
              <li>{t("services.commercial")}</li>
              <li>{t("services.medical")}</li>
              <li>{t("services.restaurants")}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-navy-900">
              {t("helpTitle")}
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-navy-900/60">
              <li>
                <a href={`/${locale}/about`}>{t("help.about")}</a>
              </li>
              <li>
                <a href={`/${locale}/contact`}>{t("help.contact")}</a>
              </li>
              <li>
                <a href={`/${locale}/terms`}>{t("help.terms")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-navy-900">
              {t("priceTitle")}
            </h3>
            <p className="mt-4 text-sm text-navy-900/60">{t("priceSub")}</p>
            <div className="mt-4 flex gap-2">
              <Input
                placeholder={t("emailPlaceholder")}
                className="rounded-full"
              />
              <Button
                type="primary"
                shape="circle"
                icon={<Send size={16} />}
                aria-label="Submit"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-navy-900/10 py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-navy-900/45">{t("rights")}</p>
          <div className="flex gap-4 text-navy-900/60">
            {socialLinks.map(({ key, icon: Icon, href }) => (
              <a key={key} href={href} aria-label={key}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
