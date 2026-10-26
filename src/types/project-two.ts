import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "shrimp-fishing-building-port-said";

export const shrimpFishingBuilding: ProjectItem = {
  id: "project-2",
  slug,

  title: {
    en: "Shrimp Fishing Building Finishing",
    ar: "تشطيب مبنى لصيد جمبري / صيد البحر",
  },
  sector: SECTORS.commercial,
  section: {
    en: "Shared Workspaces / Service & Admin Buildings",
    ar: "مساحات وبيئات عمل مشتركة / مبانٍ خدمية وإدارية",
  },
  location: LOCATIONS.portSaid,
  year: both("2020"),
  status: STATUS.completed,
  client: { en: "Sayad El Bahr", ar: "صياد البحر" },
  area: 630,
  duration: { en: "4 months", ar: "4 أشهر" },

  description: {
    en: "Turnkey interior and exterior finishing of a shrimp-fishing services and administration building in Port Said for Sayad El Bahr. The scope included rehabilitating and fitting out administrative areas and shared workspaces over 630 m² to the highest engineering and architectural standards, using materials built to resist the harsh coastal weather and providing a modern work environment that combines durability with operational flexibility.",
    ar: "مشروع تنفيذ أعمال التشطيبات المتكاملة الداخلية والخارجية لمبنى خدمات وإدارة صيد الجمبري في محافظة بورسعيد لصالح «صياد البحر». شمل نطاق العمل إعادة تأهيل وتجهيز المساحات الإدارية وبيئات العمل المشتركة بمساحة 630 م² وفق أعلى المعايير الهندسية والمعمارية، مع استخدام خامات مخصصة لمقاومة العوامل الجوية الساحلية الصعبة، وتوفير بيئة عمل عصرية تجمع بين المتانة والمرونة التشغيلية.",
  },

  materials: {
    en: [
      "Exterior paints and finishes resistant to salinity and humidity",
      "Heavy-duty flooring and cladding",
      "Aluminum systems, facades and double glazing",
      "Electromechanical installations and insulated networks",
    ],
    ar: [
      "دهانات وتشطيبات خارجية مقاومة للملوحة والرطوبة",
      "أرضيات وكسوات عالية التحمل",
      "أنظمة ألومنيوم وواجهات وزجاج مزدوج",
      "تمديدات كهروميكانيكية وشبكات معزولة",
    ],
  },

  challenges: {
    en: [
      {
        title: "High humidity, changing weather and heavy rain",
        challenge:
          "The Port Said site faced very high humidity and repeated rain waves that threatened the quality and cohesion of building materials and paints, and their drying time.",
        solution:
          "Using materials and finishes designed for marine climates with fast setting and hardening, securing facades and insulating roofs immediately, and adjusting the indoor and outdoor work schedule to avoid rainy periods.",
      },
      {
        title: "Logistical site constraints and difficult material access",
        challenge:
          "Heavy equipment and trucks had difficulty moving in the port / fishing area, which is crowded with fishing trucks and equipment.",
        solution:
          "Setting up a flexible logistics plan and scheduling deliveries and unloading during quiet hours (nights and early mornings), with sealed temporary storage areas to protect materials and avoid disrupting the existing activity on site.",
      },
      {
        title: "Scarcity of suitable materials and specifications locally",
        challenge:
          "Specialized materials that combine durability, humidity resistance and modern workplace standards were hard to find immediately in the local coastal market.",
        solution:
          "Activating the company's direct supply network with major factories and suppliers, and providing approved high-quality engineering alternatives that meet the required standards and the nature of the project.",
      },
    ],
    ar: [
      {
        title: "ارتفاع نسب الرطوبة وتقلبات الطقس وهطول الأمطار الغزيرة",
        challenge:
          "واجه موقع العمل في بورسعيد درجات رطوبة شديدة وموجات أمطار متكررة هددت جودة وتماسك مواد البناء والدهانات وزمن جفافها.",
        solution:
          "استخدام خامات وتشطيبات مخصصة للأجواء البحرية وسريعة الشك والتصلب، مع تأمين الواجهات وعزل الأسطح فورياً وتعديل جداول التشغيل الداخلي والخارجي لتفادي فترات هطول الأمطار.",
      },
      {
        title: "قيود الموقع اللوجستية وصعوبة دخول وخروج الخامات",
        challenge:
          "صعوبة حركة المعدات الثقيلة وشاحنات النقل في منطقة الميناء / موقع الصيد المزدحم بحركة شاحنات ومعدات الصيد البحرية.",
        solution:
          "وضع خطة إدارة لوجستية مرنة وجدولة عمليات التوريد والتفريغ في ساعات العمل الهادئة (خلال الفترات الليلية والصباح الباكر)، مع تخصيص مساحات تخزين مؤقتة محكمة لحماية الخامات ومنع تعطيل النشاط القائم بالموقع.",
      },
      {
        title: "شح وتحديات توفير خامات ومواصفات ملائمة للمشروع محلياً",
        challenge:
          "صعوبة العثور الفوري على خامات متخصصة تجمع بين المتانة ومقاومة الرطوبة ومطابقة معايير بيئات العمل الحديثة في السوق المحلي الساحلي.",
        solution:
          "تفعيل شبكة التوريد المباشرة للشركة بالتعاون مع كبرى المصانع والموردين، وتوفير بدائل هندسية معتمدة ذات جودة عالية ومتوافقة مع المعايير المطلوبة وطبيعة المشروع.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Engineering inspection, area preparation and networks",
        points: [
          "Site inspection, accurate survey of the 630 m² and preparing execution drawings for workspaces and management offices.",
          "Completing the electromechanical works (plumbing, supply, electricity and A/C routes) and making sure they are insulated against humidity.",
        ],
      },
      {
        title: "Phase 2: Insulation and basic interior and exterior finishes",
        points: [
          "Insulating facades and roofs and treating interior walls with salt- and humidity-resistant materials.",
          "Installing resistant flooring and preparing wall partitions and suspended ceilings for the shared workspaces.",
        ],
      },
      {
        title: "Phase 3: Final finishes, testing and handover",
        points: [
          "Installing aluminum facades, glass units, doors and smart lighting units.",
          "Final engineering checks on waterproofing and load distribution, and full handover within 4 months in perfect operating condition.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: الفحص الهندسي وتأهيل المسطحات وتأسيس الشبكات",
        points: [
          "معاينة الموقع، وإجراء الرفع المساحي الدقيق لمساحة 630 م²، وإعداد المخططات التنفيذية لبيئات العمل ومكاتب الإدارة.",
          "استكمال أعمال التأسيسات الكهروميكانيكية (السباكة، التغذية، والكهرباء، ومسارات التكييف) والتأكد من عزلها ضد الرطوبة.",
        ],
      },
      {
        title:
          "المرحلة الثانية: العزل وأعمال التشطيبات الأساسية الداخلية والخارجية",
        points: [
          "تنفيذ أعمال عزل الواجهات والأسطح ومعالجة الحوائط الداخلية بمواد مقاومة للأملاح والرطوبة.",
          "تركيب الأرضيات المقاومة وتجهيز القواطع الجدارية والأسقف المعلقة لبيئات العمل المشتركة.",
        ],
      },
      {
        title: "المرحلة الثالثة: التشطيبات النهائية، الاختبارات، والتسليم",
        points: [
          "تركيب واجهات الألومنيوم، والوحدات الزجاجية، والأبواب، ووحدات الإضاءة الذكية.",
          "إجراء الفحوصات الهندسية النهائية لعزل المياه وتوزيع الأحمال، وتسليم المشروع بالكامل في غضون 4 أشهر بحالة تشغيلية مثالية.",
        ],
      },
    ],
  },

  // put 13 photos in public/projects/shrimp-fishing-building-port-said/1.jpg … 13.jpg
  images: galleryOf(slug, 19),
};
