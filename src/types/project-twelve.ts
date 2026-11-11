import type { ProjectItem } from "./projects";
import { LOCATIONS, SECTORS, STATUS, both, galleryOf } from "./shared";

const slug = "porcelain-flooring-fit-out-heliopolis";

export const porcelainFlooringHeliopolis: ProjectItem = {
  id: "project-12",
  slug,

  title: {
    en: "Porcelain Flooring & Decor Fit-Out - Heliopolis",
    ar: "تشطيب أرضيات بورسلين وديكور شقة بمصر الجديدة",
  },
  sector: SECTORS.residential,
  section: {
    en: "Specialty Finishing for Large-Format Porcelain Slabs",
    ar: "تشطيبات تخصصية لألواح البورسلين الضخمة (Large-Format Porcelain)",
  },
  location: LOCATIONS.heliopolis, // add to shared.ts (see below)
  year: both("2024"), // PLACEHOLDER: the year was not in the data, replace with the real year
  status: STATUS.completed,
  client: { en: "Private client", ar: "عميل خاص" },
  area: 280,
  duration: { en: "3.5 months", ar: "3 أشهر ونصف" },

  description: {
    en: "A complete finishing project for a 280 m² apartment in Heliopolis, delivered turnkey. The work centered on the precise engineering handling of supplying and installing large-format porcelain slabs (120×240 cm), overcoming the logistical obstacles of lifting them, and correcting wrong fixing methods to guarantee stable floors without hollow spots.",
    ar: "مشروع تشطيب شقة سكنية بمساحة 280 م² في مصر الجديدة، نُفذ بنظام تسليم مفتاح. ارتكز العمل على التعامل الهندسي الدقيق مع توريد وتركيب ألواح البورسلين ذات الأبعاد الكبيرة (120×240 سم)، والتغلب على المعوقات اللوجستية لرفعها، وتصحيح طرق التثبيت الخاطئة لضمان استقرار الأرضيات بدون فراغات.",
  },

  materials: {
    en: [
      "Large-format porcelain slabs (120×240 cm), premium Spanish tiles with extremely low porosity",
      "Polymer-modified porcelain adhesive (with Addibond), to guarantee the highest bond strength with the concrete substrate",
      "Leveling spacers and wedges, cross clips and aligning clips to control surface flatness and prevent lippage at the edges",
      "High-flexibility putties and base coats, to prepare the walls and avoid expansion cracks",
      "Premium washable decorative paints, to give an elegant final look that matches the spaciousness of the floors",
    ],
    ar: [
      "ألواح بورسلين أبعاد كبيرة (120×240 سم): بلاطات إسبانية راقية ذات مسامية منخفضة للغاية",
      "غراء ومونة لصق بورسلين معززة بالأديبوند (Polymer-Modified Adhesive): لضمان أعلى قوة تماسك مع البلاط الخرساني",
      "أنظمة تسوية البورسلين (Leveling Spacers & Wedges): كلبسات صليبية ومحاذية لضبط استواء الأسطح ومنع بروز الحواف",
      "معاجين وبطانات عالية المرونة: لتأسيس الجدران وتفادي شروخ التمدد",
      "دهانات ديكورية فاخرة قابلة للتنظيف: لتوفير مظاهر نهائية أنيقة تتكامل مع اتساع الأرضيات",
    ],
  },

  challenges: {
    en: [
      {
        title:
          "Impossible to carry the porcelain slabs (120×240 cm) through the stairs or the elevator",
        challenge:
          "The narrow entrances and stairwell, and an elevator too small for the huge dimensions, threatened to break the slabs during internal transport.",
        solution:
          "Coordinating an external lift with a dedicated hydraulic winch, wrapping and reinforcing the slabs, and securing an unloading and lowering area below the building, which ensured all materials arrived without any damage.",
      },
      {
        title:
          "Hollow sounds and air voids under some tiles after installing with traditional mortar",
        challenge:
          "A hollow sound appeared under the tiles because traditional cement mortar is not suitable for the properties of low-absorption slab porcelain.",
        solution:
          "Immediately removing the affected tiles and cleaning the floor, then re-installing with a porcelain-specific adhesive mixed with Addibond, applying double troweling (on the floor and on the back of the tile) and using clip systems to unify the flatness and prevent hollow spots.",
      },
      {
        title:
          "Thermal expansion differences of the large slabs in open spaces",
        challenge:
          "The risk of the porcelain bowing and detaching in the open living room because of temperature changes if installed without enough joints.",
        solution:
          "Making concealed perimeter expansion joints under the skirting and using flexible joint fillers that allow expansion movement without pressing on the tile edges.",
      },
    ],
    ar: [
      {
        title:
          "استحالة إدخال ونقل ألواح البورسلين (120×240 سم) عبر السلم أو المصعد",
        challenge:
          "ضيق المداخل وبئر السلم وعدم اتساع المصعد للأبعاد الضخمة، مما هدد بتعرض الألواح للكسر أثناء النقل الداخلي.",
        solution:
          "التنسيق لرفع البورسلين خارجياً عبر ونش هيدروليكي مخصص، مع تغليف وتدعيم الألواح وتأمين مساحة التفريغ والإنزال أسفل العقار، مما ضمن وصول كافة الخامات دون أي تلف.",
      },
      {
        title:
          "تطبيل وفراغات هوائية أسفل بعض البلاطات بعد التركيب بالمونة التقليدية",
        challenge:
          "ظهور صوت فراغ (تطبيل) أسفل البلاط لعدم ملاءمة المونة الإسمنتية التقليدية لخصائص البورسلين اللوحي ضعيف الامتصاص.",
        solution:
          "فك البلاطات المتأثرة فوراً وتنظيف الأرضية، وإعادة التركيب باستخدام غراء مخصص للبورسلين مضافاً إليه مادة الأديبوند مع تطبيق التمشيط المزدوج (على الأرضية وظهر البلاطة) واستخدام أنظمة الكلبسات لتوحيد الاستواء ومنع التطبيل.",
      },
      {
        title: "فروق التمدد الحراري للألواح الكبيرة في المساحات المفتوحة",
        challenge:
          "خطر تقوس البورسلين وانفصاله في الصالة المفتوحة نتيجة التغيرات الحرارية إذا رُكّب بدون فواصل كافية.",
        solution:
          "عمل فواصل تمدد محيطية مخفية أسفل النعلات واستخدام فواصل مرنة تسمح بحركة التمدد دون الضغط على حواف البلاطات.",
      },
    ],
  },

  phases: {
    en: [
      {
        title: "Phase 1: Groundwork and logistical lifting",
        points: [
          "Completing the electrical and plumbing groundwork.",
          "Lifting and staging the porcelain slabs with the external winch in the designated spaces.",
        ],
      },
      {
        title: "Phase 2: Floor installation with modern techniques",
        points: [
          "Preparing the floor with the adhesive and Addibond.",
          "Troweling and installing the tiles using clip systems and precise leveling.",
        ],
      },
      {
        title: "Phase 3: Interior finishes and handover",
        points: [
          "Removing the clips after the material dries and filling the joints.",
          "Completing the paint and decor works, then handing over the apartment.",
        ],
      },
    ],
    ar: [
      {
        title: "المرحلة الأولى: التأسيس والرفع اللوجستي",
        points: [
          "إنهاء تأسيسات الكهرباء والسباكة.",
          "رفع وتشوين ألواح البورسلين بواسطة الونش الخارجي في الفراغات المخصصة.",
        ],
      },
      {
        title: "المرحلة الثانية: تركيب الأرضيات بالتقنيات الحديثة",
        points: [
          "تجهيز الأرضية بالغراء والأديبوند.",
          "تمشيط البلاطات وتركيبها بواسطة أنظمة الكلبسات والتسوية الدقيقة.",
        ],
      },
      {
        title: "المرحلة الثالثة: التشطيبات الداخلية والتسليم",
        points: [
          "فك الكلبسات بعد جفاف المادة وملء الفواصل.",
          "إنهاء أعمال الدهانات والديكورات وتسليم الشقة.",
        ],
      },
    ],
  },

  // put the photos in public/projects/porcelain-flooring-fit-out-heliopolis/1.jpg … 8.jpg
  images: galleryOf(slug, 8),
};
