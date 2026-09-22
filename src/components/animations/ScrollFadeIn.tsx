"use client";

import { useRef, useLayoutEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  /** Pixels the element travels upward as it fades in. */
  y?: number;
  duration?: number;
  /** Extra delay (seconds) before it plays, once triggered. */
  delay?: number;
  ease?: string;
  /** ScrollTrigger "start" position — when the trigger fires. */
  start?: string;
}

export default function ScrollFadeIn({
  children,
  className = "",
  y = 40,
  duration = 0.8,
  delay = 0,
  ease = "power3.out",
  start = "top 85%",
}: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Same "hide synchronously, then animate" fix as SplitText — set the
    // hidden state immediately so there's no flash of the fully-visible
    // element before ScrollTrigger has a chance to fire.
    gsap.set(el, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [y, duration, delay, ease, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
