import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "concrete-fish-farms-north-sinai";

export const concreteFishFarms: ProjectItem = {
  id: "project-5",
  slug,

  title: {
    en: "Concrete Fish Farms",
    ar: "مزارع سمكية (أحواض خرسانية)",
  },
  sector: SECTORS.industrial,
  section: {
    en: "Production Lines / Intensive Fish Farming",
    ar: "خطوط إنتاج / استزراع سمكي مكثف",
  },
  location: LOCATIONS.northSinai,
  year: both("2025"),
  status: STATUS.ongoing,
  client: { en: "Italian Company", ar: "الشركة الإيطالية" },
  area: 2150,
  duration: { en: "24 months", ar: "سنتان (24 شهراً)" },

  description: {
    en: "A strategic project to carry out the structural and engineering works of intensive fish farms based on reinforced concrete ponds in North Sinai for the Italian company. It covers 2,150 m² on a two-year schedule, and is currently under execution by our company as main general contractor. The scope includes casting and building fully insulated concrete tanks and ponds, with continuous development of the structural drawings and preparing the feeding, irrigation and hydraulic drainage systems to suit the latest modern fish-farming technologies.",
    ar: "مشروع استراتيجي متخصص في تنفيذ الأعمال الإنشائية والهندسية لمزارع استزراع سمكي مكثف تعتمد على أحواض خرسانية مسلحة في محافظة شمال سيناء لصالح «الشركة الإيطالية». يغطي المشروع مساحة إجمالية قدرها 2150 م² بمخطط زمني للتنفيذ مدته سنتان، وهو قيد التنفيذ حالياً تحت إشراف شركتنا كمقاول عام رئيسي. يتضمن نطاق الأعمال صب وتشييد خزانات وأحواض خرسانية معزولة بالكامل، مع التطوير والتحديث المستمر للمخططات الإنشائية وتجهيز منظومات التغذية والري والصرف الهيدروليكي لتلائم أحدث تقنيات الاستزراع السمكي الحديثة.",
  },

  materials: {
    en: [
      "Reinforced concrete highly resistant to salts and sulfates",
      "Treated, epoxy-coated reinforcement steel",
      "Food- and environment-approved waterproofing and epoxy systems",
      "Expansion joints and waterstops",
      "High-density hydraulic pipes and valves",
    ],
    ar: [
      "خرسانة مسلحة عالية المقاومة للأملاح والكبريتات",
      "حديد تسليح معالج ومطلي بمواد إيبوكسية",
      "أنظمة عزل مائي وإيبوكسي معتمد غذائياً وبيئياً",
      "فواصل التمدد وشرائط منع التسريب المائية",
      "أنابيب ومحابس هيدروليكية عالية الكثافة",
    ],
  },

  challenges: {
    en: [
      {
        title: "Huge project size and continuous changes and modifications",
        challenge:
          "The scale and field complexity of the engineering works, together with frequent design and field modifications from the owner and consultants as the production lines evolve.",
        solution:
          "Adopting a flexible Agile Construction Management system that absorbs engineering changes without delaying the overall schedule, with continuous coordination and drawing reviews as they come.",
      },
      {
        title:
          "Waterproofing and salt corrosion resistance of the concrete ponds",
        challenge:
          "The ponds hold huge amounts of concentrated, highly saline water, which risks leakage or long-term corrosion of the reinforced concrete and steel.",
        solution:
          "Using sulfate-resistant concrete and multi-layer epoxy waterproofing systems approved for fish-farming environmental specifications, supported by engineered waterstops at all casting joints.",
      },
      {
        title: "Geographic and logistical nature of the North Sinai site",
        challenge:
          "The remote site made it hard to supply specialized materials and heavy equipment that match the project's approved technical specifications.",
        solution:
          "Setting up an on-site mixing and preparation plant to secure concrete and control its quality immediately, and building a proactive supply chain with strategic storage of key materials so field work never stops.",
      },
    ],
    ar: [
      {
        title: "ضخامة حجم المشروع والتعامل مع التعديلات والتغييرات المستمرة",
        challenge:
          "ضخامة الأعمال الهندسية وتعقيداتها الميدانية بالتزامن مع إجراء تعديلات تصميمية وميدانية متكررة ومستمرة من جانب المالك والجهات الاستشارية بما يتناسب مع تطور خطوط الإنتاج.",
        solution:
          "اعتماد نظام إدارة مشاريع مرن (Agile Construction Management) يتيح استيعاب التعديلات الهندسية دون تعطيل الجدول الزمني العام، مع التنسيق الدوري المستمر ومراجعة المخططات أولاً بأول.",
      },
      {
        title: "متطلبات العزل المائي ومقاومة التآكل الملحي للأحواض الخرسانية",
        challenge:
          "احتواء الأحواض على كميات مياه ضخمة ومركزة مع ملوحة عالية، مما يفرض مخاطر تسريب أو تأثر الخرسانة المسلحة وحديد التسليح بالتآكل على المدى الطويل.",
        solution:
          "استخدام خرسانات مقاومة للكبريتات وتطبيق أنظمة عزل مائي إيبوكسية متعددة الطبقات معتمدة ومطابقة للمواصفات البيئية لتربية الأسماك، مدعومة بشرائط (Waterstops) هندسية عند كافة فواصل الصب.",
      },
      {
        title: "الطبيعة الجغرافية واللوجستية لموقع العمل في شمال سيناء",
        challenge:
          "بُعد الموقع وتحديات توريد الخامات والمعدات الثقيلة المتخصصة ومطابقتها للمواصفات الفنية المعتمدة للمشروع.",
        solution:
          "تأسيس محطة خلط وتجهيز ميدانية لتأمين الخرسانة وضبط جودتها فورياً، مع بناء سلسلة إمداد استباقية وتخزين استراتيجي للمواد الأساسية لضمان استمرارية الأعمال الميدانية دون توقف.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Survey, leveling and hydraulic setup",
        points: [
          "Topographic survey, excavation and leveling of the 2,150 m², and preparing the replacement layers.",
          "Laying the main irrigation and water supply lines and sediment drain points under the concrete foundations.",
        ],
      },
      {
        title:
          "Phase 2: Structural construction and casting of the concrete ponds",
        points: [
          "Carpentry and corrosion-treated steel fixing for the pond walls and floors, according to the approved modifications.",
          "Casting high-strength concrete and installing expansion joints and waterstops.",
        ],
      },
      {
        title: "Phase 3: Waterproofing, hydraulic tests and trial operation",
        points: [
          "Applying the approved internal epoxy insulation system for fish ponds and preparing the valve and pump rooms.",
          "Pond filling tests and water pressure measurements to fully confirm the concrete structures are sound and leak-free, ahead of handover and final operation.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: المسح والتسوية وأعمال التأسيسات الهيدروليكية",
        points: [
          "إجراء أعمال المسح الطبوغرافي والحفر وتسوية منسوب مساحة 2150 م² وتجهيز طبقات الإحلال.",
          "تمديد الخطوط الرئيسية لشبكات الري، والتغذية المائية، ونقاط صرف الرواسب أسفل القواعد الخرسانية.",
        ],
      },
      {
        title: "المرحلة الثانية: التشييد الإنشائي وصب الأحواض الخرسانية",
        points: [
          "تنفيذ أعمال النجارة والحدادة المسلحة المعالجة ضد التآكل لجدران وقيعان الأحواض وفق التعديلات المعتمدة.",
          "صب الخرسانات عالية الإجهاد مع تركيب فواصل التمدد وشرائط منع التسريب المائي المتخصصة.",
        ],
      },
      {
        title:
          "المرحلة الثالثة: العزل المائي، الاختبارات الهيدروليكية، والتشغيل التجريبي",
        points: [
          "تطبيق منظومة العزل الداخلي الإيبوكسي المعتمد لبيئة الأحواض السمكية وتجهيز غرف المحابس والمضخات.",
          "إجراء اختبارات ملء الأحواض وقياس ضغط المياه للتأكد التام من سلامة الهياكل الخرسانية وعدم وجود أي تسريب تمهيداً للتسليم والتشغيل النهائي.",
        ],
      },
    ],
  },

  // put 13 photos in public/projects/concrete-fish-farms-north-sinai/1.jpg … 13.jpg
  images: galleryOf(slug, 11),
};
