"use client";

import { Star, ArrowRight, ArrowDown, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/site/count-up";
import { HERO_STATS } from "@/lib/data";

const POSTER =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=60";

const HIGHLIGHTS = ["Villas", "High-rise Towers", "Infrastructure"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic ink overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b08]/92 via-[#0d0b08]/70 to-[#0d0b08]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b08]/85 via-transparent to-[#0d0b08]/45" />
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[32rem] rounded-full bg-primary/20 blur-[120px]" />

      <div className="container-luxe relative z-10 py-24 pt-28 text-obsidian-foreground">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-accent backdrop-blur">
            <Star className="size-3.5 fill-accent" /> Vision · Creativity · Craftsmanship
          </span>

          <h1 className="mt-5 font-display text-6xl font-semibold leading-[1.1] tracking-tight sm:text-7xl lg:text-[4.75rem]">
            We build your <br className="hidden sm:block" />
            <span className="text-gold italic">vision</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Since 2016, Aasif Developers has delivered villas, high-rise towers and
            infrastructure across Pakistan — combining licensed engineering with
            true craftsmanship.
          </p>

          {/* Highlight chips */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {HIGHLIGHTS.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur"
              >
                <HardHat className="size-4 text-accent" /> {h}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="gold" size="lg" asChild>
              <a href="#projects">
                Explore Projects <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:border-white hover:bg-white hover:text-obsidian"
              asChild
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Trust figures */}
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
            {HERO_STATS.map((t) => (
              <div key={t.label}>
                <CountUp
                  value={t.value}
                  className="font-display text-4xl font-semibold text-gold"
                />
                <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to explore"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-accent lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex size-9 items-center justify-center rounded-full border border-white/25">
          <ArrowDown className="size-4 animate-bounce" />
        </span>
      </a>
    </section>
  );
}
