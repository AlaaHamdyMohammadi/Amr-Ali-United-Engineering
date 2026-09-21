import { useTranslations } from "next-intl";

const rows = [
  { key: "clients" as const },
  { key: "rate" as const },
  { key: "infra" as const },
  { key: "awards" as const },
];

export default function Stats() {
  const t = useTranslations("stats");

  return (
    <section
      className="section py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, #f4c9a3 0%, #eef1fc 55%, #dfe6fb 100%)",
      }}
    >
      <div className="container-page grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {rows.map(({ key }) => (
          <div key={key} className="border-b border-navy-900/15 pb-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-900/60">
              {t(`${key}Label`)}
            </p>
            <p className="mt-1 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              {t(`${key}Value`)}
            </p>
            <p className="mt-1 text-sm text-navy-900/50">{t(`${key}Sub`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
