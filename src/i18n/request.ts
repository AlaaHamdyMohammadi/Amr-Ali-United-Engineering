// import { getRequestConfig } from "next-intl/server";
// import { hasLocale } from "next-intl";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   const requested = await requestLocale;
//   const locale = hasLocale(routing.locales, requested)
//     ? requested
//     : routing.defaultLocale;

//   return {
//     locale,
//     messages: (await import(`../messages/${locale}.json`)).default,
//   };
// });

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