import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "apartment-ceiling-window-sealing-shorouk";

export const apartmentCeilingWindowSealingShorouk: ProjectItem = {
  id: "project-14",
  slug,

  title: {
    en: "Ceiling Leveling & Window Sealing - Al Shorouk",
    ar: "ضبط المناسيب وعزل النوافذ لشقة بالشروق",
  },
  sector: SECTORS.residential,
  section: {
    en: "Suspended Ceilings & Facade Window Sealing",
    ar: "تشطيبات أسقف معلقة وعزل الواجهات الخارجية",
  },
  location: LOCATIONS.shorouk, // add to shared.ts (see reply)
  year: both("2025"), // PLACEHOLDER: the year was not in the data, replace with the real year
  status: STATUS.completed,
  client: { en: "Private client", ar: "عميل خاص" },
  area: 200,
  duration: { en: "2.5 months", ar: "شهران ونصف" },

  description: {
    en: "A complete interior finishing project for a 200 m² apartment in Al Shorouk, delivered turnkey. The work centered on correcting the sagging and uneven levels of the concrete ceilings inherited from the old casting, along with a full engineering treatment of rain and wind leaks through the aluminum window joints on the facade.",
    ar: "مشروع تشطيب داخلي متكامل لشقة سكنية بمساحة 200 م² في حي الشروق. تمحور العمل حول تصحيح عيوب الترخيم وتفاوت مناسيب الأسقف الخرسانية الموروثة من الصب القديم، إلى جانب المعالجة الهندسية الشاملة لتسريبات مياه الأمطار والرياح عبر فواصل شبابيك الألوميتال بالواجهة.",
  },

  materials: {
    en: [
      "High-rigidity green and white gypsum boards, to form multi-level suspended ceilings",
      "Omega framing and heavy galvanized steel angles, to hang the suspended ceilings and secure perfect flatness",
      "Polyurethane injection insulating foam (PU Foam), to fill the gaps between the aluminum sections and the walls",
      "Rubberized polyurethane sealant (PU Sealant), to seal the external joints and resist UV rays and rain",
      "Polished natural marble sills, to fix the window sills with slopes and drip grooves that drain water away from the facade",
    ],
    ar: [
      "ألواح جبسوم بورد خضراء وبيضاء عالية الصلابة: لتشكيل أسقف معلقة متدرجة المناسيب",
      "شاسيهات أوميجا وزوايا صاج مجلفن ثقيل: لتعليق الأسقف المعلقة وتأمين استوائها التام",
      "فوم بولي يوريثان عازل للحقن (PU Foam): لملء الفراغات البينية بين قطاعات الألوميتال والحوائط",
      "معجون سيليكون بولي أوريثان مطاطي (PU Sealant): لتقفيل العراميس الخارجية ومقاومة الأشعة فوق البنفسجية والأمطار",
      "جلسات رخام طبيعي مصقولة: لتثبيت عتبات النوافذ بميول ومزاريب لتصريف المياه بعيداً عن الواجهة",
    ],
  },

  challenges: {
    en: [
      {
        title:
          "Sagging and level differences of up to 4 cm in the concrete ceiling slab between rooms",
        challenge:
          "Old casting defects caused uneven ceilings, making them hard to paint straight or to set door and cabinet heights.",
        solution:
          "Using laser leveling devices to find the lowest level point accurately, and designing a gypsum board suspended ceiling with studied levels and coves that compensated for the structural differences and hid the defects completely while adding a refined aesthetic touch.",
      },
      {
        title:
          "Rain water leaking from the external joints of the main facade aluminum window",
        challenge:
          "The old seals had worn away and the window sills were not efficient, which let rain water get in and damage the interior paints in the reception hall.",
        solution:
          "Emptying the external and internal joints completely, fixing the aluminum section with insulating injection foam, then sealing with weather-resistant polyurethane (PU) silicone, and adjusting the external marble sills with water-repelling slopes to stop water collecting for good.",
      },
      {
        title: "Fine dust leaking in with the wind in the open Al Shorouk area",
        challenge:
          "Dust and soil came in through the moving joints of the windows and sliding doors.",
        solution:
          "Replacing the insulating brush seals and fitting the aluminum sections with tightly sealed EPDM rubber gaskets to block dust and wind and reduce outside noise.",
      },
    ],
    ar: [
      {
        title: "ترخيم وتفاوت منسوب بلاطة السقف الخرساني يصل إلى 4 سم بين الغرف",
        challenge:
          "عيوب صب قديمة سببت عدم استواء الأسقف وصعوبة دهانها بصورة مستقيمة أو ضبط ارتفاعات الأبواب والدواليب.",
        solution:
          "استخدام أجهزة الشرب الليزر لتحديد أوطى نقطة منسوب بدقة، وتصميم سقف معلق من الجبسوم بورد بمستويات وتجاويف مدروسة عوّضت الفروق الإنشائية وأخفت العيوب تماماً مع إضفاء لمسة جمالية راقية.",
      },
      {
        title:
          "تسرب مياه الأمطار من الفواصل الخارجية لشباك ألوميتال الواجهة الرئيسية",
        challenge:
          "تآكل العوازل القديمة وعدم كفاءة جلسات النوافذ، مما سمح لمياه الأمطار بالتغلغل وتخريب الدهانات الداخلية بصالة الاستقبال.",
        solution:
          "تفريغ الفواصل الخارجية والداخلية بالكامل، وتثبيت قطاع الألوميتال بحقن فوم عازل، ثم التقفيل بسيليكون بولي أوريثان (PU) مقاوم للعوامل الجوية، مع تعديل جلسات الرخام الخارجية بميول طاردة للمياه لمنع تجمعها نهائياً.",
      },
      {
        title: "تسرب الأتربة الناعمة بفعل الرياح في منطقة الشروق المفتوحة",
        challenge:
          "تسرب الغبار والأتربة من خلال الفواصل المتحركة للنوافذ والأبواب المنزلقة.",
        solution:
          "استبدال الفرش العازل وتزويد قطاعات الألوميتال بحليات مطاطية من مادة (EPDM) محكمة الغلق لعزل الأتربة والرياح وتخفيف الضوضاء الخارجية.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Laser survey and external joint treatment",
        points: [
          "Setting the levels with laser beams.",
          "Emptying, re-injecting and insulating the external window joints and the marble sills.",
        ],
      },
      {
        title: "Phase 2: Suspended ceilings and architectural preparation",
        points: [
          "Fixing the framing and gypsum boards to compensate for the level differences.",
          "Setting up the concealed lighting and A/C networks.",
        ],
      },
      {
        title: "Phase 3: Final finishes and insulation tests",
        points: [
          "Completing the paint works.",
          "Testing the facades and windows with pressurized water spray to verify there is no leakage, then handing over the whole project.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: المسح الليزري ومعالجة الفواصل الخارجية",
        points: [
          "ضبط المناسيب بأشعة الليزر.",
          "تفريغ وإعادة حقن وعزل فواصل النوافذ الخارجية وجلسات الرخام.",
        ],
      },
      {
        title: "المرحلة الثانية: تركيب الأسقف المعلقة والتجهيز المعماري",
        points: [
          "تثبيت شاسيهات وألواح الجبسوم بورد لتعويض فروق المناسيب.",
          "تأسيس شبكات الإنارة المخفية والتكييف.",
        ],
      },
      {
        title: "المرحلة الثالثة: التشطيبات النهائية واختبارات العزل",
        points: [
          "إنهاء أعمال الدهانات.",
          "اختبار الواجهات والنوافذ برذاذ المياه المضغوط للتحقق من منع التسريب، وتسليم المشروع بالكامل.",
        ],
      },
    ],
  },

  // put the photos in public/projects/apartment-ceiling-window-sealing-shorouk/1.jpg … N.jpg
  images: galleryOf(slug, 6), // TODO: image count was not given, set the real number
};
