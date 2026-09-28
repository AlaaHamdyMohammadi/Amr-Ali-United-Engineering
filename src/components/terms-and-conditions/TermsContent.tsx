"use client";

import { useTranslations } from "next-intl";
import Breadcrumbs from "../ui/Breadcrumbs";
import ShinyText from "@/components/TextAnimations/ShinyText";

export default function TermsContent() {
  const t = useTranslations("terms");

  return (
    <section className="section">
      <div className="px-4 py-6 sm:px-12">
        <Breadcrumbs />
      </div>

      <div className="container-page pt-10 pb-20">
        <div className="flex flex-col gap-12 p-6 bg-white border border-[#CDCDCD] rounded-3xl">
          <ShinyText
            text={t("contract rules")}
            speed={5}
            delay={0}
            color="#072469"
            shineColor="#A0B8D7"
            spread={120}
            direction="left"
            className="text-2xl font-bold text-heading"
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel, architecto recusandae adipisci molestiae magni consequatur animi, ducimus harum officia vero modi at, cumque maiores repellendus! Perferendis doloremque quis repudiandae! Maiores eos obcaecati, amet a non molestiae, illum optio quas id voluptas perferendis enim asperiores saepe. Obcaecati pariatur, doloribus eveniet ipsum laudantium ad assumenda ipsa iusto fuga qui accusamus atque. Sequi eligendi quaerat vero. Suscipit quaerat tenetur voluptatem repellat, ipsa saepe provident accusamus cum, modi iusto libero? Quisquam eos dicta doloribus architecto eum. Iste aliquid veritatis perferendis et sit inventore dolorem placeat quas laboriosam corporis? Hic, natus. Nam, quo voluptatibus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel, architecto recusandae adipisci molestiae magni consequatur animi, ducimus harum officia vero modi at, cumque maiores repellendus! Perferendis doloremque quis repudiandae! Maiores eos obcaecati, amet a non molestiae, illum optio quas id voluptas perferendis enim asperiores saepe. Obcaecati pariatur, doloribus eveniet ipsum laudantium ad assumenda ipsa iusto fuga qui accusamus atque. Sequi eligendi quaerat vero. Suscipit quaerat tenetur voluptatem repellat, ipsa saepe provident accusamus cum, modi iusto libero? Quisquam eos dicta doloribus architecto eum. Iste aliquid veritatis perferendis et sit inventore dolorem placeat quas laboriosam corporis? Hic, natus. Nam, quo voluptatibus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel, architecto recusandae adipisci molestiae magni consequatur animi, ducimus harum officia vero modi at, cumque maiores repellendus! Perferendis doloremque quis repudiandae! Maiores eos obcaecati, amet a non molestiae, illum optio quas id voluptas perferendis enim asperiores saepe. Obcaecati pariatur, doloribus eveniet ipsum laudantium ad assumenda ipsa iusto fuga qui accusamus atque. Sequi eligendi quaerat vero. Suscipit quaerat tenetur voluptatem repellat, ipsa saepe provident accusamus cum, modi iusto libero? Quisquam eos dicta doloribus architecto eum. Iste aliquid veritatis perferendis et sit inventore dolorem placeat quas laboriosam corporis? Hic, natus. Nam, quo voluptatibus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel, architecto recusandae adipisci molestiae magni consequatur animi, ducimus harum officia vero modi at, cumque maiores repellendus! Perferendis doloremque quis repudiandae! Maiores eos obcaecati, amet a non molestiae, illum optio quas id voluptas perferendis enim asperiores saepe. Obcaecati pariatur, doloribus eveniet ipsum laudantium ad assumenda ipsa iusto fuga qui accusamus atque. Sequi eligendi quaerat vero. Suscipit quaerat tenetur voluptatem repellat, ipsa saepe provident accusamus cum, modi iusto libero? Quisquam eos dicta doloribus architecto eum. Iste aliquid veritatis perferendis et sit inventore dolorem placeat quas laboriosam corporis? Hic, natus. Nam, quo voluptatibus.</p>
        </div>
      </div>
    </section>
  );
}
