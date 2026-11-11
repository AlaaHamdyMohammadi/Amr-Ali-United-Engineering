import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "apartment-upgrade-sheikh-zayed";

export const apartmentUpgradeSheikhZayed: ProjectItem = {
  id: "project-11",
  slug,

  title: {
    en: "Apartment Upgrade & Fit-Out - Sheikh Zayed",
    ar: "ترقية وتجهيز شقة سكنية بالشيخ زايد",
  },
  sector: SECTORS.residential,
  section: {
    en: "Electromechanical Network Development & Wall Moisture Treatment",
    ar: "تطوير شبكات كهروميكانيكية ومعالجة رطوبة الجدران",
  },
  location: LOCATIONS.sheikhZayed, // add to shared.ts (see reply)
  year: both("2024"), // PLACEHOLDER: the year was not in the data, replace with the real year
  status: STATUS.completed,
  client: { en: "Private client", ar: "عميل خاص" },
  area: 150,
  duration: { en: "2 months", ar: "شهران" },

  description: {
    en: "A complete interior finishing project for a 150 m² apartment in Sheikh Zayed, delivered turnkey. The scope included redesigning and upgrading the electrical system to handle the high loads of modern appliances, along with a root-cause treatment of chemical salt crystallization and moisture seeping into the interior walls.",
    ar: "مشروع تشطيب داخلي متكامل لشقة سكنية بمساحة 150 م² بالشيخ زايد. تضمن نطاق العمل إعادة تصميم وتطوير المنظومة الكهربائية لتستوعب الأحمال العالية للأجهزة الحديثة، إلى جانب المعالجة الجذرية لظاهرة التمليح الكيميائي والرطوبة المتسللة للجدران الداخلية.",
  },

  materials: {
    en: [
      "Approved insulated copper cables, power and control lines in approved sizes to carry the load of the A/C units and kitchen appliances",
      "Main distribution board and advanced automatic circuit breakers, to balance the circuits and protect against overload",
      "Anti-salt chemical compound and surface sealer, a treatment liquid that stops salt migration and the flaking of paint layers",
      "Rubberized cementitious waterproofing, to insulate damp walls on the side of the internal water sources",
      "High vapor-permeability, washable acrylic paints, to keep the color stable and resist humidity changes",
    ],
    ar: [
      "كابلات نحاسية معتمدة معزولة: خطوط قوى وتحكم بأقطار معتمدة لتحمل استهلاك التكييفات وأجهزة المطبخ",
      "لوحة توزيع رئيسية وقواطع أوتوماتيكية متطورة: لضبط توزيع الدوائر وتأمين الحماية من زيادة الحمل",
      "مركب كيميائي مضاد للتمليح وعازل للأسطح: سائل معالجة يمنع هجرة الأملاح وتفتت طبقات الطلاء",
      "عوازل أسمنتية مائية مطاطية: لعزل الحوائط الرطبة من جهة مصادر المياه الداخلية",
      "دهانات أكريليكية عالية النفاذية للبخار وقابلة للغسيل: لضمان ثبات اللون ومقاومة تقلبات الرطوبة",
    ],
  },

  challenges: {
    en: [
      {
        title:
          "The old meter capacity was not enough for the modern electrical loads",
        challenge:
          "The weak old electrical infrastructure could not run the A/C systems and the heavy-consumption kitchen appliances, which caused repeated tripping.",
        solution:
          "Carrying out a precise load calculation, re-pulling approved lines on independent routes, installing a new distribution board, and preparing the technical file to transfer and raise the meter capacity with the electricity company.",
      },
      {
        title:
          "Salt crystallization and moisture stains on the living room wall shared with the bathroom, after plastering",
        challenge:
          "Moisture rebound and white salts appeared on the reception wall because of an earlier capillary water leak, before the painting works.",
        solution:
          "Finding and securing the leak source in the bathroom, removing the damaged plaster and paint layers, applying a specialized anti-salt chemical and surface insulation, then re-applying the putty skim coats and paints with full stability.",
      },
      {
        title:
          "Keeping the internal corridors wide with the new distribution requirements",
        challenge:
          "The distribution corridor was narrow when new supply routes and extra panels were introduced.",
        solution:
          "Recessing the distribution board and the electrical conduit routes deep into the structural wall to avoid any protrusion that takes up corridor space.",
      },
    ],
    ar: [
      {
        title: "عدم كفاية قدرة العداد القديم للأحمال الكهربائية الحديثة",
        challenge:
          "ضعف البنية الكهربائية القديمة أمام تشغيل منظومات التكييف وأجهزة المطبخ ذات الاستهلاك الكثيف مما يسبب فصلاً متكرراً.",
        solution:
          "إجراء دراسة دقيقة لحساب الأحمال (Load Calculation)، وإعادة سحب خطوط معتمدة بمسارات مستقلة، وتركيب لوحة توزيع جديدة وتجهيز الملف الفني لنقل ورفع قدرة العداد بشركة الكهرباء.",
      },
      {
        title: "تمليح وبقع رطوبة بجدار الصالة المشترك مع الحمام بعد المحارة",
        challenge:
          "ارتداد رطوبي وأملاح بيضاء على حائط الاستقبال نتيجة تسريب مائي شعري سابق قبل أعمال الدهان.",
        solution:
          "كشف وتأمين مصدر التسريب بالحمام، وإزالة طبقات البياض والدهان المتضررة، وتطبيق مادة كيميائية متخصصة مضادة للتمليح والعزل السطحي، ثم إعادة سحب سكاكين المعجون والدهانات بثبات تام.",
      },
      {
        title: "الحفاظ على اتساع الممرات الداخلية مع متطلبات التوزيع الجديد",
        challenge: "صغر عرض طرقة التوزيع عند إدخال مسارات تغذية ولوحات إضافية.",
        solution:
          "غرس لوحة التوزيع ومسارات الخراطيم الكهربائية بعمق داخل الحائط الإنشائي لتجنب أي بروز يشغل حيز الممر.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Treatments and isolating the moisture sources",
        points: [
          "Treating the bathroom leak and applying the anti-salt chemicals.",
          "Chasing the routes for the new electrical network.",
        ],
      },
      {
        title: "Phase 2: Electrical installations and plastering",
        points: [
          "Pulling the wires and assembling the distribution board.",
          "Re-plastering the treated areas and preparing the walls with putty skim coats.",
        ],
      },
      {
        title: "Phase 3: Final finishes and load testing",
        points: [
          "Applying the last paint coat and fixing the lighting.",
          "Running a test of the appliances and A/C units at the full electrical load, then handing over the unit.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: المعالجات وعزل مصادر الرطوبة",
        points: [
          "معالجة تسريب الحمام وتطبيق المواد الكيميائية المضادة للأملاح.",
          "تكسير مسارات شبكة الكهرباء الجديدة.",
        ],
      },
      {
        title: "المرحلة الثانية: التمديدات الكهربائية والمحارة",
        points: [
          "سحب الأسلاك وتجميع لوحة التوزيع.",
          "إعادة بياض الأجزاء المعالجة، وتجهيز الجدران بسكاكين المعجون.",
        ],
      },
      {
        title: "المرحلة الثالثة: التشطيب النهائي وفحص الأحمال",
        points: [
          "طلاء الوجه الأخير، وتثبيت الإنارة.",
          "إجراء اختبار تشغيل للأجهزة والتكييفات بكامل الحمل الكهربائي وتسليم الوحدة.",
        ],
      },
    ],
  },

  // put the photos in public/projects/apartment-upgrade-sheikh-zayed/1.jpg … N.jpg
  images: galleryOf(slug, 6), // TODO: image count was not given, set the real number
};
