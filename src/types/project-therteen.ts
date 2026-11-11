import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "apartment-structural-repair-nasr-city";

export const apartmentStructuralRepairNasrCity: ProjectItem = {
  id: "project-13",
  slug,

  title: {
    en: "Structural Repair & Apartment Finishing - Nasr City",
    ar: "معالجة إنشائية وتشطيب شقة سكنية بمدينة نصر",
  },
  sector: SECTORS.residential,
  section: {
    en: "Crack Reinforcement & Advanced Architectural Finishes",
    ar: "تدعيم شروخ وتشطيبات معمارية متطورة",
  },
  location: LOCATIONS.nasrCity, // add to shared.ts (see reply)
  year: both("2025"), // PLACEHOLDER: the year was not in the data, replace with the real year
  status: STATUS.completed,
  client: { en: "Private client", ar: "عميل خاص" },
  area: 160,
  duration: { en: "2 months", ar: "شهران" },

  description: {
    en: "A finishing and renovation project for a 160 m² apartment in Nasr City, delivered turnkey. The works focused on the structural reinforcement of cracks in the non-load-bearing partition walls to stop them from reappearing, as well as redesigning and aligning the plumbing and electrical points in the kitchen to match the client's supplied appliances exactly, with no later demolition.",
    ar: "مشروع تشطيب وترميم شقة سكنية بمساحة 160 م² في مدينة نصر. ركزت الأعمال على التدعيم الإنشائي لشروخ الجدران الفاصلة غير الحاملة لمنع ظهورها مستقبلاً، بالإضافة إلى إعادة تصميم وتوفيق نقاط السباكة والكهرباء بالمطبخ لتتطابق تماماً مع أجهزة العميل الموردة بدون تكسير لاحق.",
  },

  materials: {
    en: [
      "Non-shrink epoxy mortar, to inject and fill structural cracks and secure the cohesion of the masonry",
      "Fiberglass reinforcement mesh, fixed over the cracks to distribute expansion and shrinkage stresses",
      "Approved drainage and supply fittings, valves and runs, to modify the kitchen outlets and connect the appliances smoothly",
      "First-grade laser-cut floor and wall ceramic, to clad the kitchen and bathroom walls with high flatness accuracy",
      "Stain- and fume-resistant interior paints, washable and suitable for kitchens and corridors",
    ],
    ar: [
      "مونة إيبوكسية غير قابلة للانكماش: لحقن وتعبئة الشروخ الإنشائية وتأمين تماسك المباني",
      "شبك تقوية فايبر جلاس (Fiberglass Mesh): لتثبيته فوق الشروخ وتوزيع إجهادات التمدد والانكماش",
      "وصلات ومحابس وتمديدات صرف وتغذية معتمدة: لتعديل مخارج المطبخ وتوصيل الأجهزة بسلاسة",
      "سيراميك أرضيات وحوائط ليزر فرز أول: لكسوة جدران المطبخ والحمامات بدقة استواء عالية",
      "دهانات داخلية مضادة للبقع والأبخرة: طلاءات قابلة للغسيل ومناسبة لبيئة المطابخ والممرات",
    ],
  },

  challenges: {
    en: [
      {
        title:
          "A diagonal structural crack (V-crack) in a non-load-bearing partition wall",
        challenge:
          "A crack caused by an old, slight settlement of the building appeared, which threatened to tear the new paint layers and decor.",
        solution:
          "Opening the crack engineering-wise into a V shape, cleaning it thoroughly and filling it with non-shrink epoxy mortar, and fixing wide fiberglass mesh before plastering to stabilize the wall and stop the crack from reappearing.",
      },
      {
        title:
          "Kitchen supply and drainage openings clashing with the supplied appliance sizes",
        challenge:
          "The plumbing and electrical levels already executed did not match the actual dimensions of the refrigerator, the dishwasher and the hood path supplied by the client.",
        solution:
          "Taking the actual sizes of all the appliances and preparing a detailed kitchen shop drawing, then modifying and re-chasing the drainage and supply points and the power switches behind the appliances before installing the ceramic, which allowed the appliances to fit in perfectly with no later demolition.",
      },
      {
        title: "Weak natural ventilation in the internal bathroom",
        challenge:
          "Slow air renewal and a build-up of water vapor because there is no direct external window.",
        solution:
          "Running an independent mechanical exhaust line inside the dropped ceiling, fitted with a damper to prevent odors flowing back and moisture condensing.",
      },
    ],
    ar: [
      {
        title:
          "وجود شرخ إنشائي قطري (V-Crack) بأحد الجدران الفاصلة غير الحاملة",
        challenge:
          "ظهور شرخ ناتج عن هبوط قديم طفيف بالمبنى، مما كان يهدد بتمزق طبقات الدهانات والديكورات الحديثة.",
        solution:
          "تفتيح الشرخ هندسياً على شكل حرف (V)، وتنظيفه تماماً وتعبئته بمونة إيبوكسية غير قابلة للانكماش، وتثبيت شبك فايبر جلاس عريض قبل أعمال المحارة لضمان استقرار الجدار ومنع ظهور الشرخ نهائياً.",
      },
      {
        title: "تعارض فتحات التغذية والصرف للمطبخ مع مقاسات الأجهزة الموردة",
        challenge:
          "عدم تطابق مناسيب السباكة والكهرباء المنفذة مع الأبعاد الفعلية للثلاجة، غسالة الأطباق، ومسار الشفاط الموردة من العميل.",
        solution:
          "رفع المقاسات الفعلية لجميع الأجهزة وعمل مخطط تنفيذي تفصيلي للمطبخ (Shop Drawing)، وتعديل وتكسير نقاط الصرف والتغذية ومفاتيح القوى خلف الأجهزة قبل تركيب السيراميك، مما سمح بتركيب الأجهزة بتناسق تام ودون تكسير لاحق.",
      },
      {
        title: "ضعف التهوية الطبيعية في الحمام الداخلي",
        challenge:
          "بطء تجدد الهواء وتراكم بخار الماء لعدم وجود نافذة خارجية مباشرة.",
        solution:
          "مد خط شفط طارد ميكانيكي مستقل داخل السقف الساقط مزود برداد لمنع ارتداد الروائح وتكثف الرطوبة.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Reinforcement and network modifications",
        points: [
          "Opening and treating the crack with epoxy and fiberglass.",
          "Modifying the kitchen plumbing and electrical points according to the shop drawings.",
        ],
      },
      {
        title: "Phase 2: Surface preparation, plastering and ceramic",
        points: [
          "Closing off and fixing the mesh and the plaster.",
          "Installing the kitchen and bathroom ceramic after verifying the outlets match.",
        ],
      },
      {
        title: "Phase 3: Installations and final finishes",
        points: [
          "Applying the final paints and fixing the kitchen appliances.",
          "Checking that the supply and drainage openings match, then handing over the apartment.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: التدعيم وتعديل الشبكات",
        points: [
          "تفتيح ومعالجة الشرخ بالإيبوكسي والفايبر.",
          "تعديل نقاط السباكة والكهرباء للمطبخ وفق المخططات التنفيذية.",
        ],
      },
      {
        title: "المرحلة الثانية: التجهيز السطحي والمحارة والسيراميك",
        points: [
          "تقفيل وتثبيت الشبك والمحارة.",
          "تركيب سيراميك المطبخ والحمامات بعد التحقق من مطابقة المخارج.",
        ],
      },
      {
        title: "المرحلة الثالثة: التركيبات والتشطيب النهائي",
        points: [
          "تطبيق الدهانات النهائية، وتثبيت أجهزة المطبخ.",
          "التأكد من مطابقة فتحات التغذية والصرف وتسليم الشقة.",
        ],
      },
    ],
  },

  // put the photos in public/projects/apartment-structural-repair-nasr-city/1.jpg … N.jpg
  images: galleryOf(slug, 8), // TODO: image count was not given, set the real number
};
