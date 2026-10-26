import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "healthy-pharmacies-cairo";

export const healthyPharmacies: ProjectItem = {
  id: "project-4",
  slug,

  title: { en: "Healthy Pharmacies", ar: "صيدليات هيلثي" },
  sector: SECTORS.commercial,
  section: {
    en: "Premium Commercial Finishing / Healthcare",
    ar: "تشطيبات إدارية وتجارية مميزة / قطاع الرعاية الصحية والطبية",
  },
  location: LOCATIONS.cairo,
  year: both("2022"),
  status: STATUS.completed,
  client: { en: "Healthy Pharmacies", ar: "صيدليات هيلثي" },
  area: 250,
  duration: { en: "30 days", ar: "30 يوم" },

  description: {
    en: "Turnkey construction and complete finishing of a Healthy Pharmacies branch in Cairo (250 m²). The scope covered administrative and commercial fit-out and a specialized medical environment meeting the highest Ministry of Health and Egyptian Drug Authority requirements, delivered in a record 30 days. The project applied the highest hygiene and sterilization standards, using antibacterial materials suited to the medical sector, for smooth patient flow and organized drug storage areas.",
    ar: "مشروع تنفيذ أعمال الإنشاء والتشطيبات المتكاملة لفرع «صيدليات هيلثي» في القاهرة بمساحة 250 م² لصالح مجموعة صيدليات هيلثي. تضمن نطاق الأعمال إنجاز التجهيزات الإدارية والتجارية وتأهيل بيئة عمل طبية متخصصة ومطابقة لأعلى اشتراطات وزارة الصحة وهيئة الدواء خلال فترة قياسية بلغت 30 يوماً فقط. ركّز المشروع على تطبيق أعلى معايير النظافة والتعقيم واستخدام خامات مقاومة للبكتيريا ومناسبة للقطاع الطبي لضمان سلاسة حركة المرضى وتنظيم مناطق التخزين الدوائي.",
  },

  materials: {
    en: [
      "Antibacterial paints and coatings, washable and treated against fungi",
      "Sterile medical vinyl / epoxy flooring, seamless and anti-slip",
      "Tempered glass and sealed aluminum systems",
      "Humidity- and fire-resistant cladding panels and suspended ceilings",
      "Display and storage units treated against corrosion and easy to sterilize",
    ],
    ar: [
      "دهانات ومواد طلاء مضادة للبكتيريا، قابلة للغسيل ومعالجة ضد الفطريات",
      "أرضيات فينيل طبي / إيبوكسي معقمة، خالية من الفواصل ومضادة للانزلاق",
      "أنظمة زجاج سيكوريت وألومنيوم محكم",
      "ألواح تكسية وأسقف معلقة مقاومة للرطوبة والحريق",
      "وحدات عرض وتخزين مقاومة للتآكل وسهلة التنظيف والتعقيم اليومي",
    ],
  },

  challenges: {
    en: [
      {
        title:
          "Meeting strict design and regulatory requirements of the medical sector",
        challenge:
          "The work had to precisely match the strict regulations for the medical sector and healthcare pharmacies, including the approved exterior appearance.",
        solution:
          "Using materials and finishes made for and compliant with the engineering and medical standards of the sector, with precise attention to licensing rules, exterior look and functional layout.",
      },
      {
        title:
          "Applying top sterilization and prevention standards in the work environment",
        challenge:
          "Very strict cleanliness requirements and preventing dust or bacteria buildup in medicine storage and dispensing areas and visitor paths.",
        solution:
          "Using tools and clothing dedicated to medical work, with smooth, seamless and pore-free floor and wall materials that make continuous periodic cleaning and sterilization easy.",
      },
      {
        title: "Record schedule for execution and handover",
        challenge:
          "All construction and detailed fit-out of the 250 m² had to be finished in a very short time of no more than one month (30 days).",
        solution:
          "A compressed operating schedule with successive and parallel work shifts, running the electromechanical setup at the same time as manufacturing the display units and preparing materials, without affecting quality.",
      },
    ],
    ar: [
      {
        title: "الالتزام بالاشتراطات التصميمية والرقابية الصارمة للقطاع الطبي",
        challenge:
          "ضرورة التوافق الدقيق مع اللوائح والاشتراطات الصارمة الخاصة بالقطاع الطبي وصيدليات الرعاية الصحية والمظهر الخارجي المعتمد.",
        solution:
          "استخدام خامات وتشطيبات مخصصة ومطابقة للمعايير الهندسية والطبية للقطاع الطبي، مع مراعاة كافة لوائح التراخيص والمظهر الخارجي والتوزيع الوظيفي بدقة.",
      },
      {
        title: "تطبيق معايير التعقيم والوقاية الفائقة داخل بيئة العمل",
        challenge:
          "متطلبات النظافة الشديدة ومنع تراكم الأتربة أو البكتيريا في مناطق تخزين وصرف الأدوية ومسارات الزوار.",
        solution:
          "اعتماد أدوات وملابس مخصصة للعمل الطبي مع استخدام خامات أرضيات وجدران ملساء خالية من الفواصل والمسام لتسهيل التنظيف والتعقيم الدوري المستمر.",
      },
      {
        title: "الجدول الزمني القياسي للتنفيذ والتسليم",
        challenge:
          "الحاجة الماسة لإنهاء كافة أعمال الإنشاءات والتجهيزات الدقيقة لمساحة 250 م² في مدة وجيزة جداً لا تتجاوز شهراً واحداً (30 يوماً).",
        solution:
          "تطبيق جدول تشغيلي مضغوط عبر ورديات عمل متتالية ومتوازية، شملت تزامن أعمال التأسيس الكهروميكانيكي مع تصنيع وحدات العرض وتجهيز الخامات دون الإخلال بجودة التنفيذ.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Survey, space layout and utilities",
        points: [
          "Surveying and planning the movement paths and the display and drug storage areas according to medical licensing requirements.",
          "Setting up the insulated electromechanical installations (electricity, specialized lighting, A/C and medical ventilation).",
        ],
      },
      {
        title: "Phase 2: Insulation and specialized medical finishes",
        points: [
          "Installing the sterile flooring and the suspended ceilings treated against humidity and fire.",
          "Applying the antibacterial paints and installing the sealed glass partitions and facades to keep dust out.",
        ],
      },
      {
        title: "Phase 3: Display units, fit-out and final handover",
        points: [
          "Fixing the shelves and the medicine storage and display units, and the exterior and interior brand signs.",
          "Full cleaning and sterilization and technical tests, and handover ready for operation within 30 days.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: الرفع المساحي وتوزيع الفراغات والتأسيسات",
        points: [
          "تنفيذ الرفع المساحي وتخطيط مسارات الحركة ومناطق العرض والتخزين الدوائي بما يتوافق مع اشتراطات التراخيص الطبية.",
          "تأسيس التمديدات الكهروميكانيكية المعزولة (الكهرباء، الإضاءة المتخصصة، وأنظمة التكييف والتهوية الطبية).",
        ],
      },
      {
        title: "المرحلة الثانية: العزل وأعمال التشطيبات الطبية المتخصصة",
        points: [
          "تركيب الأرضيات المعقمة والأسقف المعلقة المعالجة ضد الرطوبة والحريق.",
          "تطبيق الدهانات المضادة للبكتيريا وتركيب القواطع والواجهات الزجاجية المحكمة لمنع دخول الأتربة.",
        ],
      },
      {
        title: "المرحلة الثالثة: تركيب وحدات العرض والفرش والتسليم النهائي",
        points: [
          "تثبيت أرفف ووحدات حفظ وعرض الأدوية، ولافتات الهوية البصرية الخارجية والداخلية.",
          "إجراء عمليات التنظيف والتعقيم الشاملة والاختبارات الفنية، وتسليم المشروع جاهزاً للتشغيل في غضون 30 يوماً.",
        ],
      },
    ],
  },

  // put 13 photos in public/projects/healthy-pharmacies-cairo/1.jpg … 13.jpg
  images: galleryOf(slug, 7),
};
