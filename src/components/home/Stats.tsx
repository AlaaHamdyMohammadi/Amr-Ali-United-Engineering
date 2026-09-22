import { useTranslations } from "next-intl";
import CountUp from "../TextAnimations/CountUpText";

const rows = [
  { key: "clients" as const, statisticNumber: 165.489, icon: "+" },
  { key: "rate" as const, statisticNumber: 98, icon: "%" },
  { key: "infra" as const, statisticNumber: 254, icon: "+" },
  { key: "awards" as const, statisticNumber: 560, icon: "" },
];

export default function Stats() {
  const t = useTranslations("stats");

  return (
    <section
      className="section py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, #f4c9a3 0%, #eef1fc 55%, #f4c9a3 100%)",
      }}
    >
      <div className="container-page grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {rows.map(({ key, statisticNumber, icon }) => (
          <div
            key={key}
            className="flex flex-col gap-5 border-b border-black pb-4"
          >
            <p className="text-[32px] font-medium uppercase tracking-wider text-black">
              {t(`${key}Label`)}
            </p>
            <div className="flex gap-0.5 text-[65px] font-bold text-black">
              <CountUp
                from={0}
                to={statisticNumber}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={1}
              />
              <span>{icon}</span>
            </div>
            <p className="text-lg text-black">{t(`${key}Sub`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
