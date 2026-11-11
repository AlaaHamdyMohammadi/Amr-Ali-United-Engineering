import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "duplex-fit-out-5th-settlement";

export const duplexFitOut5thSettlement: ProjectItem = {
  id: "project-9",
  slug,

  title: {
    en: "Duplex Apartment Finishing - 5th Settlement",
    ar: "تشطيب وتجهيز شقة دوبلكس بالتجمع الخامس",
  },
  sector: SECTORS.residential,
  section: {
    en: "Luxury Duplex Fit-Out & Concealed A/C",
    ar: "تشطيبات فاخرة وتكييف مخفي",
  },
  location: LOCATIONS.fifthSettlement, // add to shared.ts (see reply)
  year: both("2022"), // PLACEHOLDER: the year was not in the data, replace with the real year
  status: STATUS.completed,
  client: { en: "Private client", ar: "عميل خاص" },
  area: 350,
  duration: { en: "4 months", ar: "4 أشهر" },

  description: {
    en: "A complete interior finishing project for a 350 m² duplex apartment in the 5th Settlement, delivered turnkey. The works solved the water pressure drop between the two floors of the duplex and coordinated the dropped ceiling works to combine the concealed A/C networks with the lighting and electrical routes without any architectural clash, applying the highest insulation and premium finishing standards.",
    ar: "مشروع تشطيب داخلي متكامل لشقة دوبلكس بمساحة 350 م² في التجمع الخامس. شملت الأعمال حل مشكلات هبوط الضغط المائي بين طابقي الدوبلكس، وتنسيق أعمال السقف الساقط لدمج شبكات التكييف الكونسيلد مع مسارات الإضاءة والكهرباء بدون تعارض معماري، مع تطبيق أعلى مواصفات العزل والتشطيب الراقي.",
  },

  materials: {
    en: [
      "Thick approved polypropylene (PPR) pipes, for independent water supply lines that withstand high operating pressure",
      "Sound-insulated smart booster pump and built-in tank, to feed the upper-floor bathrooms at steady, even pressure",
      "Insulated sheet-metal air ducts with fiberglass insulation, to run the concealed A/C systems",
      "Moisture- and fire-resistant gypsum boards on galvanized steel framing, for multi-level dropped ceilings",
      "Insulated electrical cables and conduits (flexible and rigid), to supply the light fittings and A/C circuits separately",
    ],
    ar: [
      "مواسير بولى بروبلين (PPR) سميكة معتمدة: لخطوط التغذية المائية المستقلة لتحمل ضغوط التشغيل العالية",
      "مضخة رفع ذكية معزولة صوتياً (Boost Pump) وخزان مدمج: لتغذية حمامات الطابق العلوي بضغط ثابت ومنتظم",
      "صاج مجاري هواء معزول (Ducts) مع عوازل ألياف زجاجية: لتشغيل أنظمة التكييف المخفي (Concealed)",
      "ألواح جبسوم بورد مقاومة للرطوبة والحريق مع شاسيهات صاج مجلفن: لتنفيذ الأسقف الساقطة متعددة المناسيب",
      "كابلات ومسارات كهربائية معزولة (مرنة وصلبة): لتغذية كشافات الإضاءة ودوائر التكييف بشكل منفصل",
    ],
  },

  challenges: {
    en: [
      {
        title: "Weak water pressure on the upper floor of the duplex",
        challenge:
          "The water pressure coming from the compound's main network was low, so not enough flow reached the upper-floor bathrooms.",
        solution:
          "Re-routing the internal supply network (PPR) completely and setting up an independent riser line, with a hydraulically isolated booster pump supported by a built-in water tank in the service area, to give steady flow without noise.",
      },
      {
        title:
          "Concealed A/C ducts clashing with the lighting network in the gypsum ceiling",
        challenge:
          "The air duct routes in the dropped ceiling clashed with the distribution points of the direct and decorative lighting units and the specified ceiling levels.",
        solution:
          "Holding an engineering coordination meeting and preparing combined shop drawings, then redesigning the dropped ceiling level and separating the routes on different levels, which gave a safe path for the A/C and a consistent distribution of the lighting.",
      },
      {
        title:
          "Noise travelling through the vertical openings between the two floors",
        challenge:
          "Sound travelled from the ground-floor reception area to the upper-floor bedrooms through the stairwell and the riser paths.",
        solution:
          "Lining the gypsum voids and partitions around the risers with high-density rock wool boards to insulate and scatter the sound waves.",
      },
    ],
    ar: [
      {
        title: "ضعف ضغط المياه في الدور العلوي للدوبلكس",
        challenge:
          "انخفاض ضغط المياه القادم من الشبكة الرئيسية للكمبوند، مما أدى لعدم وصول التدفق الكافي لحمامات الدور العلوي.",
        solution:
          "تعديل مسار شبكة التغذية الداخلية (PPR) بالكامل وتأسيس خط صاعد مستقل، مع تركيب مضخة مياه معزولة هيدروليكياً (Boost Pump) مدعومة بخزان مياه مدمج في الجزء الخدمي لتوفير تدفق منتظم دون ضوضاء.",
      },
      {
        title: "تضارب دكتات التكييف الكونسيلد مع شبكة الإضاءة في السقف الجبس",
        challenge:
          "تعارض مسارات مجاري الهواء بالسقف الساقط مع نقاط توزيع وحدات الإضاءة المباشرة والديكورية ومناسيب السقف المحددة.",
        solution:
          "عقد اجتماع تنسيقي هندسي وإعداد مخططات تنفيذية مدمجة (Shop Drawings)، حيث أُعيد تصميم منسوب السقف الساقط وفصل المسارات على مستويات مختلفة، مما وفر مساراً آمناً للتكييف وتوزيعاً متناسقاً للإضاءة.",
      },
      {
        title: "انتقال الضوضاء عبر الفتحات العمودية بين الطابقين",
        challenge:
          "انتقال الأصوات من منطقة الاستقبال الأرضية إلى غرف النوم في الطابق العلوي عبر ممرات السلالم ومسارات الصواعد.",
        solution:
          "تبطين فراغات وقواطع الجبس المحيطة بمسارات الصواعد بألواح الصوف الصخري عالي الكثافة لعزل وتشتيت الموجات الصوتية.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Hydraulic modifications and A/C routes",
        points: [
          "Modifying and extending the independent water network and fixing the tank and pump.",
          "Detailing and fixing the concealed A/C ducts.",
        ],
      },
      {
        title: "Phase 2: Suspended ceilings and electrical distribution",
        points: [
          "Installing the framing and multi-level gypsum boards based on the coordinated drawings.",
          "Pulling the lighting cables.",
        ],
      },
      {
        title: "Phase 3: Final finishes and calibration",
        points: [
          "Painting the ceilings and walls, and installing the lighting units and plumbing fixtures.",
          "Testing the water pressures and the A/C airflow, and handing over the unit.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: التعديلات الهيدروليكية ومسارات التكييف",
        points: [
          "تعديل وتمديد شبكة المياه المستقلة وتثبيت الخزان والمضخة.",
          "تفصيل وتثبيت دكتات التكييف الكونسيلد.",
        ],
      },
      {
        title: "المرحلة الثانية: الأسقف المعلقة والتوزيع الكهربائي",
        points: [
          "تركيب شاسيهات وألواح الجبسوم بورد متعددة المناسيب بناءً على المخططات التنسيقية.",
          "سحب كابلات الإنارة.",
        ],
      },
      {
        title: "المرحلة الثالثة: التشطيبات النهائية والمعايرة",
        points: [
          "طلاء الأسقف والحوائط، وتركيب وحدات الإضاءة والسباكة.",
          "اختبار ضغوط المياه وتدفق هواء التكييف وتسليم الوحدة.",
        ],
      },
    ],
  },

  // put 19 photos in public/projects/duplex-fit-out-5th-settlement/1.jpg … 19.jpg
  images: galleryOf(slug, 6),
};
