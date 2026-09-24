// components/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/utils/cn";

export default function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("breadcrumbs");

  // Strip the locale prefix (e.g. "/en/about" -> ["about"])
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((seg) => seg !== locale);

  return (
    <nav
      aria-label="breadcrumb"
      className={cn("flex items-center gap-3 font-semibold", className)}
    >
      <Link href="/" className="text-[#B7B7B7] hover:text-clay-600">
        {t("home")}
      </Link>

      {segments.map((seg, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;

        // Falls back to the raw segment if no translation key exists,
        // so new routes don't silently break the breadcrumb.
        const label = t.has(seg) ? t(seg) : seg;

        return (
          <span key={href} className="flex items-center gap-3">
            <span className="text-[#B7B7B7]">/</span>
            {isLast ? (
              <span className="font-semibold text-navy-750">{label}</span>
            ) : (
              <Link
                href={href}
                className="text-navy-750 hover:text-navy-700"
              >
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
