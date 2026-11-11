import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "apartment-renovation-maadi-tower";

export const apartmentRenovationMaadiTower: ProjectItem = {
  id: "project-10",
  slug,

  title: {
    en: "Apartment Renovation - Residential Tower, Maadi",
    ar: "تجديد وتعديل معماري لشقة ببرج سكني بالمعادي",
  },
  sector: SECTORS.residential,
  section: {
    en: "Interior Renovation & Architectural Leveling",
    ar: "تجديدات داخلية وضبط مناسيب معمارية",
  },
  location: LOCATIONS.maadi, // add to shared.ts (see reply)
  year: both("2023"), // PLACEHOLDER: the year was not in the data, replace with the real year
  status: STATUS.completed,
  client: { en: "Private client", ar: "عميل خاص" },
  area: 180,
  duration: { en: "2.5 months", ar: "شهران ونصف" },

  description: {
    en: "A complete refinishing and rehabilitation of a 180 m² apartment inside a residential tower in Maadi, delivered turnkey. The scope focused on correcting severe deviations in the flatness of the old walls, and on handling supply-chain problems with the imported flooring by re-arranging the critical path of the works without affecting the handover date.",
    ar: "مشروع إعادة تشطيب وتأهيل شقة سكنية بمساحة 180 م² داخل برج سكني بالمعادي. ركز نطاق العمل على تصحيح الانحرافات الحادة في استواء الحوائط القديمة، ومعالجة أزمات سلاسل الإمداد للأرضيات المستوردة عبر إعادة ترتيب المسار الحرج للأعمال التنفيذية دون الإخلال بموعد التسليم.",
  },

  materials: {
    en: [
      "Cement mortar with adhesion-enhancing polymers, to fill large differences and restore wall flatness",
      "Corrosion-resistant metal guides and corners, to square the walls and set true 90-degree angles",
      "Smooth acrylic putties and primer coats, to prepare the surfaces for decorative paints after plastering",
      "Gypsum boards for ceilings, to cover differences in ceiling heights and fix the light fittings",
      "Imported porcelain and ceramic with polymer adhesives, to tile the floors with a high anti-slip adhesive",
    ],
    ar: [
      "مونة أسمنتية مضاف إليها بوليمرات معززة للالتصاق: لملء الفروق الكبيرة واستعادة استواء الجدران",
      "بؤج وزوايا معدنية مقاومة للأكسدة: لتربيع وتأكيس الحوائط وضبط زوايا 90 درجة قائمة",
      "معاجين وبطانات تأسيس أكريليكية ناعمة: لتأهيل الأسطح للدهانات التجميلية بعد انتهاء المحارة",
      "ألواح جبسوم بورد للأسقف: لتغطية تفاوت ارتفاعات الأسقف وتثبيت بيوت النور",
      "بورسلين وسيراميك مستورد ومواد لصق بوليمرية: لتبليط الأرضيات مع غراء عالي المقاومة للانزلاق",
    ],
  },

  challenges: {
    en: [
      {
        title:
          "Deviation of the old walls and worn plaster with differences over 3 cm",
        challenge:
          "Sharp slopes and warping in the walls prevented setting the corners of the kitchens, the modern cabinets and the marble installations.",
        solution:
          "Removing the old plaster layers completely down to the brick, then rebuilding the walls with engineered guides and screeds at perfect right angles (squaring), which gave flat walls with 90-degree corners matching the drawings.",
      },
      {
        title: "Imported ceramic and porcelain delayed by more than 3 weeks",
        challenge:
          "The floor tile shipments from the foreign source stopped, which threatened to halt the work and delay the handover.",
        solution:
          "Re-sequencing the execution activities by starting immediately on the putty and paint primer coats and closing the gypsum board ceilings, which kept the work going and delivered the project on its contractual date.",
      },
      {
        title:
          "Moving materials and debris inside the tower without disturbing residents or damaging facilities",
        challenge:
          "Following the tower management's instructions to keep the elevators and entrances clean and safe.",
        solution:
          "Fully lining the elevator cabin with protective wooden boards, setting specific hours for moving materials, and removing debris daily in closed containers.",
      },
    ],
    ar: [
      {
        title: "انحراف الجدران القديمة وتهالك بياض المحارة بفروق تتجاوز 3 سم",
        challenge:
          "وجود ميول حاد واعوجاج بالحوائط يمنع ضبط زوايا المطابخ والدواليب المودرن وتركيبات الرخام.",
        solution:
          "إزالة طبقات المحارة القديمة بالكامل حتى الطوب، وإعادة تقطيب الحوائط وبنائها هندسياً عبر عمل بؤج وأوتار بزوايا قائمة تامة (تأكيس وتربيع)، مما نتج عنه حوائط مستوية بزوايا 90 درجة مطابقة للمخططات.",
      },
      {
        title: "تأخر توريد السيراميك والبورسلين المستورد لأكثر من 3 أسابيع",
        challenge:
          "توقف توريدات بلاط الأرضيات من المصدر الخارجي مما كان يهدد بوقف العمل وتعطيل التسليم.",
        solution:
          "إعادة جدولة وتسلسل الأنشطة التنفيذية (Re-sequencing)، بالبدء الفوري في تأسيس معاجين وبطانات الدهانات وتقفيل أسقف الجبسوم بورد، مما حافظ على استمرارية العمل وتسليم المشروع في موعده التعاقدي.",
      },
      {
        title:
          "نقل الخامات والركام داخل البرج دون إزعاج القاطنين أو تلف المرافق",
        challenge:
          "الالتزام بتعليمات إدارة البرج السكني بالحفاظ على نظافة وسلامة المصاعد والمداخل.",
        solution:
          "تبطين كابينة المصعد بالكامل بألواح خشبية واقية، وتخصيص ساعات محددة لنقل المواد، وتفريغ الركام في حاويات مغلقة يومياً.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Full removal and engineered squaring",
        points: [
          "Stripping the worn plaster.",
          "Squaring the rooms with guides and screeds.",
          "Running the electromechanical installations.",
        ],
      },
      {
        title: "Phase 2: Re-plastering and the parallel track",
        points: [
          "Completing the flat plastering works and building the suspended ceilings.",
          "Applying the paint primer and putty coats while waiting for the supplies.",
        ],
      },
      {
        title: "Phase 3: Flooring and final touches",
        points: [
          "Installing the imported porcelain as soon as it arrived.",
          "Applying the final paint coat.",
          "Installing the sanitary ware and lighting.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: الإزالة التامة والتأكيس الهندسي",
        points: [
          "تقشير المحارة المتهالكة.",
          "تأكيس وتربيع الغرف بالبؤج والأوتار.",
          "تمديد التأسيسات الكهروميكانيكية.",
        ],
      },
      {
        title: "المرحلة الثانية: إعادة البياض والمسار الموازي",
        points: [
          "استكمال أعمال المحارة المستوية، وتنفيذ الأسقف المعلقة.",
          "تطبيق بطانات ومعاجين الدهانات أثناء فترة انتظار التوريدات.",
        ],
      },
      {
        title: "المرحلة الثالثة: تركيب الأرضيات والإنهاءات",
        points: [
          "تركيب البورسلين المستورد فور وصوله.",
          "دهان الوجه النهائي.",
          "تركيب الأدوات الصحية والإنارة.",
        ],
      },
    ],
  },

  // put 7 photos in public/projects/apartment-renovation-maadi-tower/1.jpg … 7.jpg
  images: galleryOf(slug, 6),
};
