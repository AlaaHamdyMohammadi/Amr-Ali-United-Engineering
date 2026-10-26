import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "fish-farm-foundations-port-said";

export const fishFarmFoundations: ProjectItem = {
  id: "project-1",
  slug,

  title: { en: "Fish Farm Foundations", ar: "أساسات مزارع سمكية" },
  sector: SECTORS.industrial,
  section: {
    en: "Production Lines / Fish Farming",
    ar: "خطوط إنتاج / استزراع سمكي",
  },
  location: LOCATIONS.portSaid,
  year: both("2024"),
  status: STATUS.completed,
  client: { en: "Ministry of Agriculture", ar: "وزارة الزراعة" },
  area: 2000,
  duration: { en: "8 months", ar: "8 أشهر" },

  description: {
    en: "A specialized project to build earthen fish farms connected to natural water sources in Port Said for the Ministry of Agriculture. The scope covered full engineering of site preparation, excavation and rehabilitation of the ponds, while solving the soil's geotechnical challenges to achieve maximum water retention and a sustainable aquatic environment for fish production.",
    ar: "مشروع متخصص في إنشاء وتأسيس مزارع سمكية ترابية متصلة بمصادر مياه طبيعية في بورسعيد لصالح وزارة الزراعة. تضمن نطاق الأعمال التطبيق الهندسي الشامل لتهيئة الموقع وحفر وتأهيل الأحواض، مع معالجة التحديات الجيوتقنية للتربة لتحقيق أعلى كفاءة احتجاز للمياه وضمان استدامة البيئة المائية للإنتاج السمكي.",
  },

  materials: {
    en: [
      "High-density polyethylene (HDPE) liners",
      "Compacted clay / shale layers",
      "Bentonite",
      "Mechanical fixings and fasteners",
    ],
    ar: [
      "شرائح البولي إيثيلين عالي الكثافة (HDPE)",
      "طبقات الطين / الطفلة المدكوكة",
      "مادة البنتونيت",
      "مواد ومثبتات ميكانيكية",
    ],
  },

  challenges: {
    en: [
      {
        title: "Sandy soil with very high permeability",
        challenge:
          "Highly permeable sandy soil threatened continuous water leakage, raising pumping costs and pressure and affecting the stability of pond water levels.",
        solution:
          "Lining the bottom and sides of the ponds with 1.0–1.5 mm HDPE liners, giving full insulation, permanently preventing seepage and making periodic cleaning easier.",
      },
      {
        title: "Weak soil cohesion and risk of embankment collapse",
        challenge:
          "The fragile surface soil could not hold water or withstand water currents by itself without engineering reinforcement.",
        solution:
          "Applying a 20–30 cm compacted clay lining, mixing the surface with bentonite at 5–15 kg/m², and compacting it with engineering rollers to fully close the pores.",
      },
      {
        title: "Climate stress: high temperature and humidity",
        challenge:
          "Harsh weather, high heat and humidity in the coastal site affected earthwork efficiency and made the soil dry out quickly.",
        solution:
          "Intensifying and controlling continuous mechanical compaction of successive layers, and monitoring optimum moisture content during field treatment to keep the ponds' structure stable.",
      },
    ],
    ar: [
      {
        title: "طبيعة التربة الرملية وارتفاع معامل نفاذية المياه",
        challenge:
          "مواجهة تربة رملية شديدة النفاذية تهدد بتسريب المياه باستمرار، مما يزيد من تكاليف وضغوط الضخ ويؤثر على استقرار منسوب الأحواض.",
        solution:
          "تبطين قاع وجوانب الأحواض بشرائح بولي إيثيلين عالي الكثافة بسماكات تبدأ من 1.0 إلى 1.5 مم، مما يحقق عزلاً تاماً ويمنع تسرب المياه نهائياً ويسهّل عمليات التطهير الدوري.",
      },
      {
        title: "ضعف التماسك الحبيبي وخطر انهيار الجسور",
        challenge:
          "هشاشة التربة السطحية وعدم قدرتها الذاتية على حبس المياه أو تحمّل ضغوط التيارات المائية دون تدعيم هندسي.",
        solution:
          "تطبيق تقنية التكسية بالطين المدكوك بسماكة من 20 إلى 30 سم، مع خلط السطح بمادة البنتونيت بنسب تتراوح بين 5 إلى 15 كجم/م² ودكها بالمداحل الهندسية لإغلاق المسام بالكامل.",
      },
      {
        title: "الإجهادات المناخية وارتفاع درجات الحرارة والرطوبة",
        challenge:
          "تأثر كفاءة الأعمال الترابية ومعدلات جفاف التربة السريع بالظروف الجوية الصعبة وارتفاع الحرارة والرطوبة في بيئة الموقع الساحلية.",
        solution:
          "تكثيف وضبط أعمال الدك الميكانيكي المستمر للطبقات المتتابعة، ومراقبة محتوى الرطوبة الأمثل أثناء المعالجة الميدانية لضمان استقرار البنية الهندسية للأحواض.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Survey, preparation and site setup",
        points: [
          "Geotechnical soil study to identify the main problems and permeability coefficients.",
          "Excavation and initial leveling of 2,000 m² and forming the earth embankments according to approved designs.",
        ],
      },
      {
        title: "Phase 2: Structural treatment, insulation and lining",
        points: [
          "Spreading and compacting engineered clay and shale layers over the sandy soil.",
          "Mixing and soaking bentonite to seal the pores, then fixing and welding HDPE liners on the bottom and sides.",
        ],
      },
      {
        title: "Phase 3: Engineering tests, connection and operation",
        points: [
          "Insulation tests to confirm there is no leakage under successive water-filling pressures.",
          "Connecting the ponds to natural water sources and final handover to the Ministry of Agriculture.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: المسح والتهيئة وتجهيز المسطحات",
        points: [
          "دراسة وتقييم التربة جيوتقنياً لتحديد المشكلات الرئيسية ومعاملات النفاذية.",
          "تنفيذ أعمال الحفر والتسوية الأولية لمساحة 2000 م² وتشكيل الجسور الترابية وفق التصاميم المعتمدة.",
        ],
      },
      {
        title: "المرحلة الثانية: المعالجة الهيكلية وأعمال العزل والتبطين",
        points: [
          "فرد ودمك طبقات الطين والطفلة الهندسية فوق التربة الرملية.",
          "خلط مادة البنتونيت وغمرها لغلق المسامات، وتثبيت شرائح العزل (HDPE Liners) على القاع والجوانب ولحامها باحترافية.",
        ],
      },
      {
        title: "المرحلة الثالثة: الاختبارات الهندسية والربط والتشغيل",
        points: [
          "إجراء اختبارات العزل والتأكد من منع التسريب تحت ضغوط ملء المياه المتتابعة.",
          "ربط الأحواض بمصادر المياه الطبيعية واعتماد التسليم النهائي للمشروع لصالح وزارة الزراعة.",
        ],
      },
    ],
  },

  // put 13 photos in public/projects/fish-farm-foundations-port-said/1.jpg … 13.jpg
  images: galleryOf(slug, 13),
};
