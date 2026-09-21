"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

type SplitType = "chars" | "words" | "lines";

interface SplitTextProps {
  text: string;
  tag?: any;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: SplitType;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"] | any;
  /** Set false for content that's already visible at load (e.g. a hero) —
   *  skips ScrollTrigger's position math entirely and just plays on mount. */
  scrollTrigger?: boolean;
  /** Extra delay (ms) before this instance starts playing — use it to
   *  stagger multiple SplitText elements after one another. */
  startDelay?: number;
  onLetterAnimationComplete?: () => void;
}

const SplitText = ({
  text,
  tag = "p",
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "",
  scrollTrigger = true,
  startDelay = 0,
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;
    const el = ref.current;

    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    let splitter: GSAPSplitText;
    try {
      splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: "split-line",
      });
    } catch (error) {
      console.error("Failed to create SplitText:", error);
      return;
    }

    const targets =
      splitType === "lines"
        ? splitter.lines
        : splitType === "words"
          ? splitter.words
          : splitter.chars;

    if (!targets || targets.length === 0) {
      console.warn("No targets found for SplitText animation");
      splitter.revert();
      return;
    }

    targets.forEach((t) => {
      (t as HTMLElement).style.willChange = "transform, opacity";
    });

    // Hide immediately, in the same tick the split happens — this is the
    // actual fix. The previous version left this to a lazy `.set()` inside
    // the timeline (immediateRender: false), which doesn't apply until the
    // timeline plays, leaving freshly-split text fully visible in the
    // meantime.
    gsap.set(targets, from);

    let tl: gsap.core.Timeline;

    if (scrollTrigger) {
      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
      const sign =
        marginValue < 0
          ? `-=${Math.abs(marginValue)}${marginUnit}`
          : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
          once: true,
          onToggle: (self) => {
            scrollTriggerRef.current = self;
          },
        },
        delay: startDelay / 1000,
        smoothChildTiming: true,
        onComplete: () => {
          gsap.set(targets, { ...to, clearProps: "willChange" });
          onLetterAnimationComplete?.();
        },
      });
    } else {
      // No ScrollTrigger — for content already on screen at load, waiting
      // on a scroll-position calculation (which itself waits on final,
      // settled layout) is the wrong tool. Just play on mount.
      tl = gsap.timeline({
        delay: startDelay / 1000,
        onComplete: () => {
          gsap.set(targets, { ...to, clearProps: "willChange" });
          onLetterAnimationComplete?.();
        },
      });
    }

    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      scrollTriggerRef.current?.kill();
      scrollTriggerRef.current = null;
      gsap.killTweensOf(targets);
      splitter.revert();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    scrollTrigger,
    startDelay,
    onLetterAnimationComplete,
  ]);

  const Tag = tag as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {text}
    </Tag>
  );
};

export default SplitText;
