import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "dice-clothing-stores-alexandria";

export const diceClothingStores: ProjectItem = {
  id: "project-3",
  slug,

  title: {
    en: "Dice Ready-to-Wear Stores",
    ar: "متاجر شركة دايس للملابس الجاهزة",
  },
  sector: SECTORS.commercial,
  section: {
    en: "Retail Fit-Out",
    ar: "تجهيزات تجارية متكاملة / محلات تجارية",
  },
  location: LOCATIONS.alexandria,
  year: both("2020"),
  status: STATUS.completed,
  client: { en: "Dice Ready-to-Wear", ar: "شركة دايس للملابس الجاهزة" },
  area: 470,
  duration: { en: "60 days", ar: "60 يوم" },

  description: {
    en: "Turnkey construction, commercial fit-out and complete interior and exterior finishing of a Dice Ready-to-Wear store in Alexandria. The 470 m² space was turned into an upscale showroom matching the brand's visual identity in a record 60 days, focusing on repairing the existing structure affected by sea proximity and using materials that resist the high coastal humidity so the finish lasts and the shopping experience stays excellent.",
    ar: "مشروع تنفيذ أعمال الإنشاءات والتجهيزات التجارية والتشطيبات المتكاملة (الداخلية والخارجية) لمتجر شركة «دايس للملابس الجاهزة» في مدينة الإسكندرية. تضمن نطاق العمل تحويل المساحة البالغة 470 م² إلى صالة عرض تجارية راقية ومتوافقة مع الهوية البصرية للعلامة التجارية خلال فترة قياسية مدتها 60 يوماً فقط. ركّز المشروع على معالجة وترميم البنية القائمة المتأثرة بقربها من البحر، واستخدام خامات مقاومة للرطوبة الساحلية العالية لضمان ديمومة التشطيب وجودة تجربة التسوق.",
  },

  materials: {
    en: [
      "Humidity- and salt-resistant paints and treatment materials",
      "Imported decorative interior finishes (wood and marble alternatives, advanced wall cladding)",
      "Heavy-duty commercial flooring (anti-slip porcelain)",
      "Glass facade systems and exterior aluminum cladding",
      "Focused lighting tracks, display networks and moisture-insulated cable routes",
    ],
    ar: [
      "دهانات ومواد معالجة مقاومة للرطوبة والأملاح",
      "خامات ديكورية مستوردة للتشطيبات الداخلية (بدائل خشب ورخام وتكسيات حائطية متطورة)",
      "أرضيات تجارية شديدة التحمل (بورسلين مضاد للانزلاق)",
      "أنظمة واجهات زجاجية وكلادينج ألومنيوم خارجي",
      "مسارات إضاءة مركزة وشبكات عرض ذكية ومسارات أسلاك معزولة ضد الرطوبة",
    ],
  },

  challenges: {
    en: [
      {
        title:
          "Difficulty fitting facades and dimensions in the commercial area",
        challenge:
          "It was hard to match the proposed exterior facades and commercial designs to the actual dimensions of the existing building and its crowded commercial surroundings.",
        solution:
          "A precise 3D survey, then re-engineering and detailing the facades and fixtures with high accuracy to maximize viewing and display areas in line with Dice's standards.",
      },
      {
        title: "Difficulty sourcing and importing interior finishing materials",
        challenge:
          "Specialized imported materials needed for the brand's premium interior finishes were scarce locally.",
        solution:
          "Activating the company's fast supply channels and relying on a network of approved suppliers to provide alternative and imported materials with the same colors and specifications, without affecting the schedule.",
      },
      {
        title: "High coastal humidity and building deterioration near the sea",
        challenge:
          "The building's location near the sea in Alexandria exposed it to high summer humidity, which required full treatment and repair before finishing could start.",
        solution:
          "A full repair and treatment plan for concrete walls and ceilings using advanced chemical insulation that stops moisture and salt penetration, giving a durable protective layer that keeps the final finishes lasting.",
      },
    ],
    ar: [
      {
        title: "صعوبة تطبيق الواجهات والأحجام والمقاسات بالمنطقة التجارية",
        challenge:
          "واجه المشروع صعوبة في ضبط ومطابقة مقاسات وأبعاد الواجهات الخارجية والتصميمات التجارية المقترحة مع الأبعاد الفعلية للمبنى القائم ومحيطه التجاري المزدحم.",
        solution:
          "إجراء رفع مساحي دقيق ثلاثي الأبعاد، وإعادة هندسة وتفصيل الواجهات والتجهيزات بدقة عالية لتعظيم مساحات الرؤية والعرض بما يتطابق تماماً مع معايير شركة «دايس».",
      },
      {
        title: "صعوبة توفير واستيراد خامات التشطيبات الداخلية",
        challenge:
          "شح الخامات المستوردة المتخصصة محلياً والمطلوبة لتحقيق التشطيبات الداخلية الفاخرة المعتمدة لدى العلامة التجارية.",
        solution:
          "تفعيل قنوات التوريد السريعة للشركة والاعتماد على شبكة موردين معتمدين لتوفير الخامات البديلة والمستوردة المطابقة لنفس درجات الألوان والمواصفات دون التأثير على الجدول الزمني.",
      },
      {
        title: "تأثير الرطوبة الساحلية العالية وتدهور المبنى لقربه من البحر",
        challenge:
          "وقوع المبنى في محافظة الإسكندرية بالقرب من البحر تسبب في تضرره من الرطوبة العالية في فصل الصيف، مما تطلب معالجة وترميماً كاملاً للمبنى قبل البدء بأعمال التشطيب.",
        solution:
          "تنفيذ خطة ترميم ومعالجة شاملة للحوائط والأسقف الخرسانية بمواد عزل كيميائي متطورة توقف نفاذ الرطوبة والأملاح، مما وفّر طبقة حماية متينة ضمنت استدامة التشطيبات النهائية.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Structural repair and initial humidity treatment",
        points: [
          "Removing damaged paint and plaster layers affected by coastal humidity.",
          "Treating and repairing load-bearing surfaces with salt-insulating chemicals to ensure the safety of the store's infrastructure before setup.",
        ],
      },
      {
        title: "Phase 2: Electromechanical setup, partitions and facades",
        points: [
          "Laying insulated electrical routes, specialized lighting systems and central A/C networks.",
          "Installing the metal frames of the exterior facades, and the humidity-resistant wall panels and suspended ceilings.",
        ],
      },
      {
        title: "Phase 3: Final decorative finishes and handover",
        points: [
          "Installing the imported interior materials, flooring, glass facades and display units.",
          "Final inspection and brand identity detailing, and successful handover of the store within the set 60 days.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: الترميم الإنشائي والمعالجة الأولية للرطوبة",
        points: [
          "إزالة طبقات الدهانات والمحارة التالفة والمتأثرة بالرطوبة الساحلية.",
          "معالجة وترميم الأسطح الحاملة بمواد كيميائية عازلة للأملاح لضمان سلامة البنية التحتية للمتجر قبل التأسيس.",
        ],
      },
      {
        title:
          "المرحلة الثانية: التأسيس الكهروميكانيكي وتجهيز القواطع والواجهات",
        points: [
          "مد مسارات الكهرباء المعزولة، وأنظمة الإنارة التخصصية، وشبكات التكييف المركزية.",
          "تركيب الهياكل المعدنية للواجهات الخارجية، والألواح الجدارية والأسقف المعلقة المقاومة للرطوبة.",
        ],
      },
      {
        title: "المرحلة الثالثة: التشطيبات الديكورية النهائية والتسليم",
        points: [
          "تركيب الخامات الداخلية المستوردة، والأرضيات، والواجهات الزجاجية ووحدات العرض.",
          "إجراء الفحص النهائي وضبط تفاصيل الهوية البصرية، وتسليم المتجر بنجاح خلال المدة المحددة (60 يوماً).",
        ],
      },
    ],
  },

  // put 13 photos in public/projects/dice-clothing-stores-alexandria/1.jpg … 13.jpg
  images: galleryOf(slug, 7),
};
