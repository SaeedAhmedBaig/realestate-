"use client";

import * as React from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Animates a numeric figure from 0 → target when it scrolls into view.
 * Accepts strings like "1.2K+", "100+", "5.0", "39.9K", "24" and preserves
 * the prefix, suffix and decimal precision of the original.
 */
export function CountUp({
  value,
  duration = 1600,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? value;
  const suffix = match?.[3] ?? "";
  const target = parseFloat(numStr.replace(/,/g, ""));
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const hasThousands = numStr.includes(",");

  const [display, setDisplay] = React.useState(reduce ? target : 0);

  React.useEffect(() => {
    if (!inView || reduce || isNaN(target)) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplay(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target, duration]);

  const formatted = isNaN(target)
    ? numStr
    : hasThousands
      ? Math.round(display).toLocaleString("en-US")
      : display.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
