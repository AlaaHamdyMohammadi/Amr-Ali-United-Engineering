import * as rootParams from "next/root-params";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

const namespaces = [
  "home",
  "footer",
  "about",
  "breadcrumbs",
  "sectors",
  "projects",
  "services",
  "articles",
  "contact",
  "terms"
] as const;

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    const paramValue = await rootParams.locale();
    if (hasLocale(routing.locales, paramValue)) {
      locale = paramValue;
    } else {
      notFound();
    }
  }

  const messages = Object.fromEntries(
    await Promise.all(
      namespaces.map(async (ns) => {
        const messageModule = await import(
          `../messages/${locale}/${ns}.json`
        );
        return [ns, messageModule.default];
      }),
    ),
  );

  return {
    locale,
    messages,
  };
});