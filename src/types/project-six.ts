import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "central-labs-new-cairo";

export const centralLabs: ProjectItem = {
  id: "project-6",
  slug,

  title: {
    en: "Central Labs Finishing",
    ar: "تشطيبات المعامل المركزية لجهاز حماية وتنمية البحيرات والثروة السمكية",
  },
  sector: SECTORS.industrial,
  section: {
    en: "Workshops, Labs & Specialized Laboratories",
    ar: "ورش ومعامل ومختبرات تخصصية",
  },
  location: LOCATIONS.newCairo,
  year: both("2020"),
  status: STATUS.completed,
  client: {
    en: "Fish Wealth Authority (Cabinet)",
    ar: "جهاز الثروة السمكية التابع لمجلس الوزراء",
  },
  area: 400,
  duration: { en: "2 months", ar: "شهرين" },

  description: {
    en: "Specialized interior finishing and engineering fit-out of the central labs of the Fish Wealth Authority, part of the Cabinet, in New Cairo (400 m²). The scope turned the space into a highly precise laboratory environment compliant with the approved standards for government research facilities, within a record two-month schedule. The project applied the highest levels of bio-safety and sterilization, with insulating tempered glass partitions and advanced electromechanical networks serving precise testing and analysis equipment.",
    ar: "مشروع تنفيذ أعمال التشطيبات الداخلية المتخصصة والتجهيزات الهندسية لمقر المعامل المركزية لجهاز الثروة السمكية التابع لمجلس الوزراء في القاهرة الجديدة بمساحة 400 م². تضمن نطاق الأعمال تحويل المساحة إلى بيئة مختبرية ومعملية فائقة الدقة متوافقة مع الاشتراطات والمعايير المعتمدة للمنشآت الحكومية البحثية خلال جدول زمني قياسي استغرق شهرين فقط. ركّز المشروع على تطبيق أعلى مستويات الأمان الحيوي والتعقيم، وتوفير قطاعات زجاج سيكوريت عازلة، وتنفيذ شبكات كهروميكانيكية متطورة تخدم أجهزة الفحص والتحاليل المعملية الدقيقة.",
  },

  materials: {
    en: [
      "High-resistance tempered glass partitions",
      "Chemical-resistant epoxy and vinyl flooring",
      "Antimicrobial and antibacterial laboratory paints",
      "Suspended ceilings and gypsum boards resistant to humidity and lab fumes",
      "Insulated electromechanical installations and lab gas networks, with fume exhaust hoods",
    ],
    ar: [
      "قطاعات زجاج سيكوريت عالي المقاومة (Tempered Glass)",
      "أرضيات إيبوكسي وفينيل مقاومة للمواد الكيميائية",
      "دهانات معملية مضادة للميكروبات والبكتيريا",
      "أسقف معلقة وألواح جبسية مقاومة للرطوبة والأبخرة المعملية",
      "تمديدات كهروميكانيكية وشبكات غازات معملية معزولة، مع شبكات تهوية وسحب أبخرة (Fume Exhaust Hoods)",
    ],
  },

  challenges: {
    en: [
      {
        title: "Working-hour limits and a fixed operating schedule",
        challenge:
          "Working inside a government facility under security and regulatory controls limited the hours allowed for bringing in workers and equipment and unloading materials.",
        solution:
          "Full coordination with the facility management and intensifying the work shifts within the permitted hours, making the best use of the equipment on site to double the completion rate without any delay.",
      },
      {
        title:
          "Strict safety and sterilization requirements and disinfection protocols",
        challenge:
          "The extreme cleanliness and strict sterilization required by central state labs, to prevent any environmental or laboratory contamination.",
        solution:
          "Wearing protective clothing and using sterile tools during execution, with advanced disinfection systems and tools at every stage, to deliver a sterile lab environment ready for immediate operation.",
      },
      {
        title: "Short schedule and precision of specialized installations",
        challenge:
          "Delivering a complete 400 m² lab project, including the electromechanical setup and specialized finishes, within no more than two months.",
        solution:
          "Running parallel engineering teams for the specialized tracks (tempered glass sections, epoxy paints and lab networks) at the same time, to finish before the contractual date to the highest quality standards.",
      },
    ],
    ar: [
      {
        title: "قيود مواعيد وساعات العمل والالتزام بجدول تشغيلي محدد",
        challenge:
          "العمل داخل منشأة حكومية خاضعة لضوابط أمنية وتنظيمية تحد من أوقات العمل المسموح بها لإدخال العمالة والمعدات وتفريغ الخامات.",
        solution:
          "التنسيق الكامل مع إدارة المنشأة وتكثيف ورديات العمل داخل الساعات المصرح بها، مع حُسن استغلال وتوزيع الأجهزة والمعدات المتوفرة بالموقع لإنجاز المهام بمعدلات إنجاز مضاعفة ودون أي تأخير.",
      },
      {
        title:
          "الالتزام الصارم باشتراطات السلامة والتعقيم وتطبيق بروتوكولات التطهير",
        challenge:
          "متطلبات النظافة الفائقة والتعقيم الصارم التي تفرضها طبيعة المعامل والمختبرات المركزية التابعة لجهاز الدولة لمنع أي تلوث بيئي أو معملي.",
        solution:
          "الالتزام بارتداء ملابس الحماية والأدوات المعقمة أثناء التنفيذ، مع استخدام منظومات وأدوات تطهير متقدمة في كافة مراحل العمل لضمان تسليم بيئة معملية معقمة وجاهزة للتشغيل الفوري.",
      },
      {
        title: "الجدول الزمني القصير ودقة التركيبات التخصصية",
        challenge:
          "تسليم مشروع معملي متكامل بمساحة 400 م² شاملاً التأسيسات الكهروميكانيكية والتشطيبات التخصصية خلال فترة وجيزة لا تتعدى شهرين.",
        solution:
          "تشغيل فرق عمل هندسية متوازية للمسارات التخصصية (تركيب قطاعات السيكوريت، دهانات الإيبوكسي، وشبكات المعامل) بالتزامن لإنهاء الأعمال قبل الموعد التعاقدي بأعلى معايير الجودة.",
      },
    ],
  },

  phases: {
    en: [
      {
        title:
          "Phase 1: Engineering survey and laboratory electromechanical setup",
        points: [
          "Studying the drawings and approving the paths of the analysis rooms, workshops and labs according to the Fish Wealth Authority's lab standards.",
          "Laying insulated electrical routes, chemical-resistant lab drainage networks, and fume extraction and ventilation lines.",
        ],
      },
      {
        title: "Phase 2: Specialized insulation and tempered glass partitions",
        points: [
          "Casting and coating the sterile, chemical-resistant epoxy floors and applying the antimicrobial paints.",
          "Fixing the tempered glass sections and partitions to separate the testing areas and sample rooms from the administrative corridors.",
        ],
      },
      {
        title: "Phase 3: Precise installations, full disinfection and handover",
        points: [
          "Installing the lab lighting units, equipment outlets, and the specialized testing benches and sinks.",
          "Full disinfection and sterilization of all surfaces and floors with the approved sterilization tools, and handover of the whole project within two months.",
        ],
      },
    ],
    ar: [
      {
        title:
          "المرحلة الأولى: الرفع الهندسي والتأسيسات الكهروميكانيكية المعملية",
        points: [
          "دراسة المخططات واعتماد مسارات غرف التحاليل والورش والمعامل وفق المعايير المعملية لجهاز الثروة السمكية.",
          "تمديد مسارات الكهرباء المعزولة، وتأسيس شبكات الصرف المعملي المقاوم للكيماويات، وخطوط سحب الأبخرة والتهوية.",
        ],
      },
      {
        title:
          "المرحلة الثانية: العزل المتخصص وتركيب القواطع الزجاجية (السيكوريت)",
        points: [
          "صب وطلاء الأرضيات الإيبوكسية المعقمة المقاومة للكيماويات وتطبيق الدهانات المضادة للميكروبات.",
          "تثبيت قطاعات وفواصل زجاج السيكوريت المقوى لعزل مناطق الفحص وغرف العينات عن الممرات الإدارية.",
        ],
      },
      {
        title: "المرحلة الثالثة: التركيبات الدقيقة والتطهير الشامل والتسليم",
        points: [
          "تركيب وحدات الإنارة المعملية، ومخارج الأجهزة، ومقاعد وأحواض الفحص المتخصصة.",
          "تنفيذ أعمال التطهير والتعقيم الشاملة لكافة الأسطح والأرضيات بالتعاون مع أدوات التعقيم المعتمدة، وتسليم المشروع بالكامل في غضون شهرين.",
        ],
      },
    ],
  },

  // put 13 photos in public/projects/central-labs-new-cairo/1.jpg … 13.jpg
  images: galleryOf(slug, 4),
};
