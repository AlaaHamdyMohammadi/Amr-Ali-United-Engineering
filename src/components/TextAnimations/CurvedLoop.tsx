"use client";

import {
  useRef,
  useEffect,
  useState,
  useMemo,
  useId,
  FC,
  PointerEvent,
} from "react";
import { useLocale } from "next-intl";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string; // carries font-size, tracking, weight, etc.
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
  /** Invisible joiner at the seam; try "" first, fall back to "\u200C" (ZWNJ) if needed */
  joiner?: "" | "\u200C" | "\u200D";
}

const CurvedLoop: FC<CurvedLoopProps> = ({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
  joiner = "",
}) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  // No trailing spaces; we want a tight, continuous loop
  const base = useMemo(() => marqueeText.trim(), [marqueeText]);
  const seam = joiner; // usually "", or "\u200C" if Arabic seam looks odd

  const measureSingleRef = useRef<SVGTextElement | null>(null);
  const measureDoubleRef = useRef<SVGTextElement | null>(null);
  const textPathRef1 = useRef<SVGTextPathElement | null>(null);
  const textPathRef2 = useRef<SVGTextPathElement | null>(null);

  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);

  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,50 Q500,${50 + curveAmount} 1540,50`;

  // Measure exact cycle length:
  // spacing = length(base + seam + base) - length(base)
  useEffect(() => {
    const m1 = measureSingleRef.current;
    const m2 = measureDoubleRef.current;
    if (!m1 || !m2) return;

    try {
      let L1 = m1.getComputedTextLength(); // single
      let L2 = m2.getComputedTextLength(); // double with seam
      if (isRTL) {
        L1 *= 1.03;
        L2 *= 1.03;
      } // tiny buffer for Arabic shaping
      const cycle = Math.max(1, Math.round(L2 - L1)); // exact loop length including boundary kerning
      setSpacing(cycle);
    } catch {
      setSpacing(200);
    }
  }, [base, seam, className, isRTL]);

  // "Left" should look left for both LTR/RTL
  const dirSign = useMemo(() => {
    const leftSign = isRTL ? +1 : -1;
    return direction === "left" ? leftSign : -leftSign;
  }, [direction, isRTL]);

  // Drag scrub (optional)
  const dragging = useRef(false);
  const lastX = useRef(0);

  const onPointerDown = (e: PointerEvent) => {
    if (!interactive) return;
    dragging.current = true;
    lastX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!interactive || !dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    // For dragging, we want natural direction: drag right = move right
    setOffset((p) => p + dx);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragging.current = false;
  };

  // Animate
  useEffect(() => {
    if (!spacing) return;
    let raf = 0;
    const tick = () => {
      if (!dragging.current) setOffset((p) => p + speed * dirSign);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [spacing, speed, dirSign]);

  // Apply offsets to both copies; wrap within [−spacing, +spacing]
  useEffect(() => {
    if (!spacing || !textPathRef1.current || !textPathRef2.current) return;

    let o = offset;
    if (o > spacing) o = o % spacing;
    if (o < -spacing) o = ((o % spacing) + spacing) % spacing;

    textPathRef1.current.setAttribute("startOffset", `${o}px`);
    textPathRef2.current.setAttribute(
      "startOffset",
      `${o + dirSign * spacing}px`,
    );
  }, [offset, spacing, dirSign]);

  const ready = spacing > 0;
  const visibleText = base; // no spaces
  const doubleMeasureText = base + seam + base;

  return (
    <div
      className="flex items-center justify-center w-full"
      style={{
        visibility: ready ? "visible" : "hidden",
        cursor: interactive ? (dragging.current ? "grabbing" : "grab") : "auto",
        direction: isRTL ? "rtl" : "ltr",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className="select-none w-full overflow-visible block aspect-[100/12]"
        viewBox="0 0 1440 100"
        style={{ verticalAlign: "middle" }}
      >
        {/* Hidden measurers MUST share the SAME classes as the visible <text> */}
        <text
          ref={measureSingleRef}
          xmlSpace="preserve"
          className={className} // <-- critical
          style={{
            visibility: "hidden",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          {base}
        </text>
        <text
          ref={measureDoubleRef}
          xmlSpace="preserve"
          className={className} // <-- critical
          style={{
            visibility: "hidden",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          {doubleMeasureText}
        </text>

        <defs>
          <path id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>

        {ready && (
          <text
            xmlSpace="preserve"
            className={`fill-white ${className ?? ""}`}
            dominantBaseline="middle"
            style={{
              direction: isRTL ? "rtl" : "ltr",
              unicodeBidi: "bidi-override",
            }}
          >
            {/* A */}
            <textPath
              ref={textPathRef1}
              href={`#${pathId}`}
              xmlSpace="preserve"
            >
              {visibleText}
            </textPath>
            {/* B (exactly one cycle ahead/behind) */}
            <textPath
              ref={textPathRef2}
              href={`#${pathId}`}
              xmlSpace="preserve"
            >
              {visibleText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
