import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "apartment-renovation-alashgar-6th-october";

export const apartmentRenovationAlAshgar: ProjectItem = {
  id: "project-8",
  slug,

  title: {
    en: "Apartment Renovation & Finishing - Al Ashgar District",
    ar: "ترميم وتشطيب شقة سكنية بحي الأشجار",
  },
  sector: SECTORS.residential,
  section: {
    en: "Integrated Renovation & Fit-Out",
    ar: "تشطيبات وتجديدات معمارية متكاملة",
  },
  location: LOCATIONS.alAshgar, // add to shared.ts (see reply)
  year: both("2021"), // TODO: the year was not in the data, replace with the real year
  status: STATUS.completed,
  client: { en: "Private client", ar: "عميل خاص" },
  area: 220,
  duration: { en: "3 months", ar: "3 أشهر" },

  description: {
    en: "A complete rehabilitation and renovation of a 220 m² residential apartment in Al Ashgar District, 6th of October City, delivered turnkey. The scope included stripping all the old finishes, repairing structural damage in the ceiling slab caused by earlier leaks, and unifying the architectural alignment, with precise control of plaster levels and wooden door openings to make sure the architectural elements last.",
    ar: "مشروع متكامل لإعادة تأهيل وتجديد شقة سكنية بمساحة 220 م² في حي الأشجار بمدينة 6 أكتوبر. شمل نطاق العمل التجريد الكامل للتشطيبات القديمة، ومعالجة التلف الإنشائي في خرسانة السقف الناتج عن تسريبات سابقة، مع إعادة توحيد الشرب المعماري وضبط مناسيب المحارة وفتحات الأبواب الخشبية بدقة لضمان استدامة العناصر المعمارية.",
  },

  materials: {
    en: [
      "Non-shrink epoxy repair mortar, to treat the lower ceiling slab and restore the damaged concrete cover",
      "Flexible cementitious chemical waterproofing compound, applied in 3 crossed coats on bathroom floors",
      "Galvanized plastering guides and corner beads, for accurate wall flatness and even thicknesses",
      "Moisture-treated wooden door frames, fixed and calibrated before plastering",
      "First-grade ceramic and porcelain tiles for floors and walls, with adhesive and flexible joint fillers",
    ],
    ar: [
      "مونة ترميم إيبوكسية غير منكمشة: لمعالجة بلاطة السقف السفلية واستعادة الغطاء الخرساني المتضرر",
      "مركب عزل مائي كيميائي أسمنتي مرن: تطبيق 3 طبقات متقاطعة لتبطين أرضيات الحمامات",
      "أوتار وزوايا بياض بؤج مجلفنة: لضبط استواء أسطح الحوائط بدقة هندسية وتفادي تفاوت السماكات",
      "حلوق زفرة خشبية معالجة ضد الرطوبة: لتثبيت ومعايرة فتحات الأبواب بدقة قبل أعمال البياض",
      "أرضيات سيراميك وبورسلين فرز أول: بلاطات مخصصة للأرضيات والحوائط مع مادة لصق ومواد ملء فواصل مرنة",
    ],
  },

  challenges: {
    en: [
      {
        title:
          "Settlement and damage of bathroom floor and ceiling concrete from an old leak",
        challenge:
          "High moisture and settlement were found in the bathroom floors after removing the old ceramic, with damage to the concrete of the lower ceiling slab caused by a chronic water leak.",
        solution:
          "Exposing and fully drying the concrete, cleaning and repairing it with specialized epoxy materials, then applying chemical waterproofing in three crossed coats, with a continuous 48-hour water immersion test to fully protect the structure before installing the ceramic.",
      },
      {
        title:
          "Varying plaster thickness and door openings not matching the architectural specifications",
        challenge:
          "The thickness of the plaster layers varied around the openings, so the door sizes did not match the specified architectural dimensions and uneven gaps appeared.",
        solution:
          "Re-adjusting the plaster guides and levels around the openings, setting one shared alignment for the carpentry and electrical works, and fixing the door frames with precise calibration before plastering, which gave a perfect door fit with no differences or gaps.",
      },
      {
        title: "Weak cohesion of the old brick joints in the demolition areas",
        challenge:
          "Mortar joints and some corners of the masonry came loose after the old ceramic and plaster were removed.",
        solution:
          "Opening the weak joints and fixing fiberglass mesh embedded in polymer mortar to reinforce the walls and prevent any future cracks showing in the paint.",
      },
    ],
    ar: [
      {
        title: "هبوط وتلف خرسانة أرضيات وسقف الحمامات بسبب تسريب قديم",
        challenge:
          "اكتشاف رطوبة عالية وهبوط بأرضيات الحمامات عقب إزالة السيراميك القديم، مع تضرر خرسانة بلاطة السقف السفلية نتيجة تسريب مائي مزمن.",
        solution:
          "كشف وتجفيف الخرسانة بالكامل، وتطهيرها وترميمها بمواد إيبوكسية متخصصة، ثم تنفيذ عزل مائي كيميائي بثلاث طبقات متقاطعة مع إجراء اختبار غمر بالماء لمدة 48 ساعة متواصلة لحماية المنشأ تماماً قبل تركيب السيراميك.",
      },
      {
        title: "اختلاف سمك بياض المحارة وعدم مطابقة فتحات الأبواب المعمارية",
        challenge:
          "تباين سماكة طبقات المحارة حول الفتحات، مما سبب عدم مطابقة مقاسات الأبواب للمواصفات المعمارية المقررة وظهور فروق وفواصل غير منتظمة.",
        solution:
          "إعادة ضبط وتعديل بؤج وأوتار المحارة حول الفتحات، وتحديد شرب موحد مشترك لأعمال النجارة والكهرباء، وتثبيت حلوق زفرة بمعايرة دقيقة قبل البياض، مما حقق استلاماً تاماً للأبواب دون أي فروق أو فواصل.",
      },
      {
        title: "ضعف تماسك الفواصل الطوبية القديمة عند مناطق التكسير",
        challenge:
          "تفكك في عراميس المباني وبعض الأركان نتيجة إزالة السيراميك والمحارة القديمة.",
        solution:
          "تفتيح الفواصل الضعيفة وتثبيت شبك فايبر جلاس مدمج مع مونة بوليمرية لتدعيم الجدران وتفادي ظهور أي شروخ مستقبلية في الدهانات.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Demolition, structural treatment and waterproofing",
        points: [
          "Removing the old ceramic.",
          "Drying, cleaning and repairing the ceiling concrete.",
          "Applying the chemical waterproofing and testing it for 48 hours.",
        ],
      },
      {
        title: "Phase 2: Alignment, plastering and openings",
        points: [
          "Adjusting the plaster guides and levels of the walls.",
          "Fixing the calibrated wooden door frames.",
          "Running the approved electrical and plumbing networks.",
        ],
      },
      {
        title: "Phase 3: Architectural finishes and handover",
        points: [
          "Installing the ceramic and the wooden doors.",
          "Applying the putty and final paint coats.",
          "Handing over the whole apartment.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: التكسير والمعالجة الإنشائية والعزل",
        points: [
          "إزالة السيراميك القديم.",
          "تجفيف وتطهير وترميم خرسانة السقف.",
          "تطبيق واختبار العزل المائي الكيميائي لمدة 48 ساعة.",
        ],
      },
      {
        title: "المرحلة الثانية: ضبط الشرب وتأسيس المحارة والفتحات",
        points: [
          "ضبط بؤج وأوتار الحوائط.",
          "تثبيت الحلوق الزفرة المعايرة.",
          "تمديد شبكات الكهرباء والسباكة المعتمدة.",
        ],
      },
      {
        title: "المرحلة الثالثة: التشطيبات المعمارية والتسليم",
        points: [
          "تركيب السيراميك والأبواب الخشبية.",
          "تنفيذ طبقات المعجون والدهانات النهائية.",
          "تسليم الشقة بالكامل.",
        ],
      },
    ],
  },

  // put 5 photos in public/projects/apartment-renovation-alashgar-6th-october/1.jpg … 5.jpg
  images: galleryOf(slug, 5),
};
