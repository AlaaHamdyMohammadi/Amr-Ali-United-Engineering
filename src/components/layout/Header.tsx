"use client";

import { useState } from "react";
import { Drawer } from "antd";
import { Menu as MenuIcon } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/navigation";
import Image from "next/image";
import LogoImg from "@/assets/amrAliLogo.png";
import MainButton from "@/components/ui/MainButton";

export default function Header() {
  const t = useTranslations("home.nav");
  const locale = useLocale();
  const pathname = usePathname(); // locale prefix is already stripped, e.g. "/about"
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { key: "home", label: t("home"), href: "/" },
    { key: "about", label: t("about"), href: "/about" },
    { key: "services", label: t("services"), href: "/services" },
    { key: "sectors", label: t("sectors"), href: "/sectors" },
    { key: "projects", label: t("projects"), href: "/projects" },
    { key: "articles", label: t("articles"), href: "/articles" },
  ];

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next });
  }

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-page flex items-center justify-between gap-4 pt-6">
        {/* Logo + primary nav pill */}
        <nav className="flex size-14 items-center justify-center gap-6 rounded-full bg-white shadow-lg shadow-black/10 md:h-auto md:w-auto md:justify-start md:p-4 md:shadow-none">
          <Link href="/">
            <Image src={LogoImg} alt="logo" className="size-10 sm:size-13" />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-full font-semibold transition-colors hover:text-clay-500 ${
                  isActive(link.href) ? "text-clay-500" : "text-navy-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Contact + language pill (desktop only) */}
        <div className="hidden items-center gap-6 rounded-full bg-white p-4 md:flex">
          <Link
            href="/contact-us"
            aria-current={isActive("/contact-us") ? "page" : undefined}
            className={`font-semibold transition-colors hover:text-clay-500 ${
              isActive("/contact-us") ? "text-clay-500" : "text-navy-600"
            }`}
          >
            {t("contact")}
          </Link>

          <div className="flex items-center gap-2 rounded-full bg-mist-200 p-2">
            <MainButton
              preset="toggle"
              active={locale === "en"}
              onClick={() => switchLocale("en")}
            >
              EN
            </MainButton>
            <MainButton
              preset="toggle"
              active={locale === "ar"}
              onClick={() => switchLocale("ar")}
            >
              Ar
            </MainButton>
          </div>
        </div>

        {/* Mobile trigger */}
        <MainButton
          preset="floatingIcon"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
          className="md:hidden!"
        >
          <MenuIcon size={20} />
        </MainButton>
      </div>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement={locale === "ar" ? "left" : "right"}
        title={t("brand")}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-3 text-base font-medium hover:bg-mist-50 ${
                isActive(link.href)
                  ? "bg-mist-50 text-clay-500"
                  : "text-navy-900"
              }`}
              onClick={() => setDrawerOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <MainButton
            href="/contact-us"
            block
            className="mt-3"
            onClick={() => setDrawerOpen(false)}
          >
            {t("contact")}
          </MainButton>

          <div className="mt-3 flex w-fit items-center gap-2 rounded-full bg-mist-200 p-2">
            <MainButton
              preset="toggle"
              active={locale === "en"}
              onClick={() => switchLocale("en")}
            >
              EN
            </MainButton>
            <MainButton
              preset="toggle"
              active={locale === "ar"}
              onClick={() => switchLocale("ar")}
            >
              Ar
            </MainButton>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
