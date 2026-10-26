import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "border-guard-buildings-port-said";

export const borderGuardBuildings: ProjectItem = {
  id: "project-7",
  slug,

  title: {
    en: "Border Guard Buildings",
    ar: "إنشاءات وتجهيزات مباني حرس الحدود",
  },
  sector: SECTORS.residential,
  section: {
    en: "Integrated Residential Finishing / Service Buildings",
    ar: "تشطيبات وتجهيزات سكنية متكاملة / مبانٍ خدمية وعسكرية",
  },
  location: LOCATIONS.portSaid,
  year: both("2020"),
  status: STATUS.completed,
  client: { en: "Border Guard", ar: "حرس الحدود" },
  area: 720,
  duration: { en: "14 months", ar: "14 شهراً" },

  description: {
    en: "Construction, fit-out and complete residential finishing of Border Guard buildings in Port Said, over a total of 720 m². The scope included casting and building the concrete structures, preparing all residential areas, and executing complete interior and exterior finishes resistant to harsh coastal and environmental conditions, to give the buildings maximum durability and efficiency in serving Border Guard personnel over 14 months.",
    ar: "مشروع تنفيذ أعمال الإنشاءات والتجهيزات والتشطيبات السكنية المتكاملة لمباني حرس الحدود في بورسعيد بمساحة إجمالية تبلغ 720 م². تضمن نطاق الأعمال صب وتشييد الهياكل الخرسانية، وتأسيس وتأهيل كافة المسطحات السكنية، وتنفيذ تشطيبات داخلية وخارجية متكاملة ومقاومة للظروف البيئية والساحلية الصعبة لضمان أعلى مستويات المتانة والكفاءة للمباني لخدمة أفراد حرس الحدود على مدار 14 شهراً.",
  },

  materials: {
    en: [
      "Reinforced concrete resistant to sulfates and salts",
      "Insulated, coated reinforcement steel (epoxy-coated rebar)",
      "Exterior and interior paints and insulation resistant to humidity and salts",
      "Humidity-resistant partitions and insulating cladding (green board, thermal and acoustic insulation)",
      "Heavy-duty flooring and cladding (high-quality anti-slip ceramic and porcelain)",
      "Aluminum systems and double glazing, heat-treated and sealed",
    ],
    ar: [
      "خرسانة مسلحة مقاومة للكبريتات والأملاح",
      "حديد تسليح معزول ومحمي (Epoxy-Coated Rebar)",
      "دهانات ومواد عزل خارجية وداخلية مقاومة للرطوبة والأملاح",
      "قواطع وتكسيات مقاومة للرطوبة وعازلة (جبس Green Board وعوازل حرارية وصوتية)",
      "أرضيات وكسوات عالية التحمل (سيراميك وبورسلين عالي الجودة ومضاد للانزلاق)",
      "أنظمة ألومنيوم وواجهات زجاجية مزدوجة (Double Glazing) بزجاج معالج حرارياً ومحكمة الغلق",
    ],
  },

  challenges: {
    en: [
      {
        title: "High coastal humidity and changing weather",
        challenge:
          "The Port Said site exposed the structure to very high humidity and heavy rain, threatening the quality and cohesion of building materials and paints and delaying the drying of concrete and exterior finishes.",
        solution:
          "Using concrete, insulation and plaster materials resistant to salts and humidity, with paints made for fast-setting marine climates, and adjusting the exterior work schedule to avoid periods of rising humidity and rain.",
      },
      {
        title: "Difficult material access in a security-sensitive area",
        challenge:
          "The site is in a vital security zone belonging to the Border Guard, which imposes strict procedures on the movement of trucks, workers and heavy equipment and slows daily deliveries.",
        solution:
          "A logistics plan and precise advance scheduling of all material transport and unloading in full coordination with the security authorities, with enough safe storage on site so work never stops for lack of materials.",
      },
      {
        title:
          "Exceptional durability requirements for service and residential buildings",
        challenge:
          "The Border Guard residential buildings need extremely strong, durable finishes and fit-out for intensive, continuous use, with all vital needs provided reliably.",
        solution:
          "Using top-grade heavy-duty materials for flooring, electromechanical works and installations, with pressure and trial tests on all facilities and networks (water, drainage and electricity) to ensure they last and work with full efficiency.",
      },
    ],
    ar: [
      {
        title: "تأثير الرطوبة الساحلية العالية وموجات الطقس المتقلبة",
        challenge:
          "موقع العمل في بورسعيد يعرض المنشأة لنسب رطوبة بالغة الارتفاع وتأثير الأمطار الكثيفة، مما يهدد جودة وتماسك مواد البناء والدهانات، ويؤخر فترات جفاف الخرسانة والتشطيبات الخارجية.",
        solution:
          "استخدام خرسانات ومواد عزل ومحارة مقاومة للأملاح والرطوبة، مع طلاءات مخصصة للأجواء البحرية سريعة الشك والتصلب، وتعديل جداول العمل الخارجي لتجنب فترات تزايد الرطوبة والأمطار.",
      },
      {
        title: "صعوبة دخول وخروج الخامات اللوجستية في منطقة ذات طبيعة تأمينية",
        challenge:
          "تواجد الموقع في منطقة حيوية وتأمينية تابعة لحرس الحدود يفرض إجراءات أمنية صارمة ودقيقة لحركة الشاحنات والعمال والمعدات الثقيلة، مما يعيق سرعة التوريدات اليومية.",
        solution:
          "وضع خطة لوجستية وجدولة دقيقة ومسبقة لكافة عمليات نقل وتفريغ المواد بالتعاون التام مع الجهات الأمنية، وتخصيص مساحات تخزين كافية وآمنة داخل الموقع لتجنب توقف الأعمال لعدم توفر الخامات.",
      },
      {
        title: "متطلبات متانة استثنائية للمباني الخدمية والسكنية",
        challenge:
          "حاجة مباني حرس الحدود السكنية إلى تشطيبات وتجهيزات فائقة القوة والتحمل لتلائم نمط الاستخدام المكثف والمتتابع، مع توفير كافة الاحتياجات الحيوية بشكل مستمر وموثوق.",
        solution:
          "استخدام خامات من الفئات العليا (Heavy-Duty) في الأرضيات والتمديدات الكهروميكانيكية والتركيبات، مع تنفيذ اختبارات ضغط وتجريب لكافة المرافق والشبكات (المياه، الصرف، والكهرباء) لضمان متانتها وعملها بكفاءة كاملة.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Survey, site preparation and structural foundation",
        points: [
          "Preparing the geotechnical soil studies, executing excavation and survey works, and preparing the foundation level for the 720 m².",
          "Building the salt-resistant reinforced concrete structures and efficiently casting the foundations, walls and ceilings.",
        ],
      },
      {
        title: "Phase 2: Electromechanical setup and basic finishes",
        points: [
          "Laying the main installations for electricity, water, sanitary drainage, and A/C and ventilation systems.",
          "Insulating roofs and facades, followed by humidity-resistant interior and exterior plastering and basic lining.",
        ],
      },
      {
        title: "Phase 3: Final finishes, installations and handover",
        points: [
          "Installing flooring, doors, sealed aluminum windows, and executing all paints and the residential and service decor.",
          "Full operation tests on all systems and the water and electricity networks, and handover of the whole project within 14 months to the highest quality.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: المسح وتأهيل الموقع وأعمال التأسيس الإنشائي",
        points: [
          "إعداد الدراسات الجيوتقنية للتربة، وتنفيذ أعمال الحفر والمسح المساحي وتجهيز منسوب التأسيس لمساحة 720 م².",
          "بناء الهياكل الخرسانية المسلحة المقاومة للأملاح وصب القواعد والجدران والأسقف بكفاءة عالية.",
        ],
      },
      {
        title:
          "المرحلة الثانية: التأسيس الكهروميكانيكي وأعمال التشطيبات الأساسية",
        points: [
          "مد مسارات التمديدات الأساسية للكهرباء، المياه، الصرف الصحي، وأنظمة التكييف والتهوية.",
          "تنفيذ أعمال عزل الأسطح والواجهات، تليها أعمال المحارة والتبطين الأساسي الداخلي والخارجي المقاوم للرطوبة.",
        ],
      },
      {
        title: "المرحلة الثالثة: التشطيبات النهائية والتركيبات والتسليم",
        points: [
          "تركيب الأرضيات، الأبواب، النوافذ الألومنيوم المحكمة، وتنفيذ كافة أعمال الدهانات والديكورات السكنية والخدمية.",
          "إجراء اختبارات التشغيل الكامل لجميع الأنظمة وشبكات المياه والكهرباء، وتسليم المشروع بالكامل في غضون 14 شهراً بأعلى جودة.",
        ],
      },
    ],
  },

  // put 13 photos in public/projects/border-guard-buildings-port-said/1.jpg … 13.jpg
  images: galleryOf(slug, 10),
};
