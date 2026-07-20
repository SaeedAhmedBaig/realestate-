"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollTop() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 inline-flex size-12 items-center justify-center rounded-full [background:var(--gold-gradient)] text-obsidian shadow-luxe transition-all duration-300",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
