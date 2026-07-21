"use client";

import * as React from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { PropertyCard } from "@/components/site/property-card";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function Recommendations() {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  const onSelect = React.useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  React.useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect).on("reInit", onSelect);
  }, [embla, onSelect]);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-luxe">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="index-num">03</span>
                <span className="h-px w-8 bg-primary/40" />
                <span className="kicker">Our portfolio</span>
              </div>
              <h2 className="headline mt-4 text-[clamp(2rem,4vw,3.25rem)] text-foreground">
                Featured <span className="text-gold italic">projects</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <NavBtn
                dir="prev"
                disabled={!canPrev}
                onClick={() => embla?.scrollPrev()}
              />
              <NavBtn
                dir="next"
                disabled={!canNext}
                onClick={() => embla?.scrollNext()}
              />
              <Link href="/projects" className="link-gold ml-1">
                View all <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {PROJECTS.map((p, i) => (
              <div
                key={p.id}
                className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[46%] lg:basis-[31%]"
              >
                <Reveal x={80} y={0} delay={i * 0.14} className="h-full">
                  <PropertyCard p={p} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NavBtn({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground"
      )}
    >
      {dir === "prev" ? (
        <ArrowLeft className="size-4" />
      ) : (
        <ArrowRight className="size-4" />
      )}
    </button>
  );
}
