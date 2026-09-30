import type { Metadata } from "next";
import { Cairo, Public_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import arEG from "antd/locale/ar_EG";
import enUS from "antd/locale/en_US";
import { routing } from "@/i18n/routing";
import { antdTheme } from "@/lib/theme";
import "../globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import localFont from "next/font/local";

const ClashDisplay = localFont({
  src: [
    {
      path: "../../fonts/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/ClashDisplay-Extralight.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});


const CairoFont = Cairo({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-cairo",
});

const PublicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--en-font-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amr Ali For Contracting & General Trading Company",
  description: "Build your home with trusted hands.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = locale === "ar";

  const fontVars = `${CairoFont.variable} ${PublicSans.variable} ${ClashDisplay.variable}`;

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
      <body className={fontVars}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AntdRegistry>
            <ConfigProvider
              theme={antdTheme}
              direction={isRtl ? "rtl" : "ltr"}
              locale={isRtl ? arEG : enUS}
            >
              <Header />
              {children}
              <Footer />
            </ConfigProvider>
          </AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
