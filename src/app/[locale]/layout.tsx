import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { routing } from "@/i18n/routing";
import { antdTheme } from "@/lib/theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import arEG from "antd/locale/ar_EG";
import enUS from "antd/locale/en_US";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo, Public_Sans } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";

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

const ElMessiri = localFont({
  src: [
    {
      path: "../../fonts/ArbFONTS-ElMessiri-Regular-1.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/ArbFONTS-ElMessiri-Medium-1.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/ArbFONTS-ElMessiri-SemiBold-1.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/ArbFONTS-ElMessiri-Bold-1.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-el-messiri",
  display: "swap",
})

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
  title: "Amr Ali For Contracting & General Trading",
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

  const fontVars = `${CairoFont.variable} ${PublicSans.variable} ${ClashDisplay.variable} ${ElMessiri.variable}`;

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
