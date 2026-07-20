"use client";

import * as React from "react";
import { Search, ChevronDown, Check, Star, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/site/count-up";
import { PROPERTY_TYPES } from "@/lib/data";
import { cn } from "@/lib/utils";

const POSTER =
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=60";

const TRUST = [
  { value: "1.2K+", label: "Homes delivered" },
  { value: "100+", label: "Expert advisors" },
  { value: "24", label: "Cities served" },
];

export function Hero() {
  const [mode, setMode] = React.useState<"Rent" | "Sell">("Rent");
  const [type, setType] = React.useState<string>("");
  const [typeOpen, setTypeOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [exclusive, setExclusive] = React.useState(true);
  const [newDev, setNewDev] = React.useState(false);
  const typeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (typeRef.current && !typeRef.current.contains(e.target as Node))
        setTypeOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  };

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
      {/* Gold vignette accent */}
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[32rem] rounded-full bg-primary/20 blur-[120px]" />

      <div className="container-luxe relative z-10 py-20 pt-24 text-obsidian-foreground">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-accent backdrop-blur">
            <Star className="size-3.5 fill-accent" /> Bespoke Living · Est. 2010
          </span>

          <h1 className="mt-5 font-display text-6xl font-semibold leading-[1.1] tracking-tight sm:text-7xl lg:text-[4.75rem]">
            Find your next <br className="hidden sm:block" />
            <span className="text-gold italic">dream home</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            A private collection of the world&apos;s most extraordinary residences —
            architectural mastery paired with white-glove service.
          </p>

          {/* Search card */}
          <form
            onSubmit={submit}
            className="relative z-30 mt-7 w-full max-w-2xl rounded-2xl border border-white/15 bg-card/95 p-2.5 text-card-foreground shadow-luxe backdrop-blur-xl"
          >
            <div className="mb-2.5 inline-flex rounded-xl bg-muted p-1">
              {(["Rent", "Sell"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={cn(
                    "rounded-lg px-7 py-2 text-sm font-medium transition-all",
                    mode === m
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {m}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div ref={typeRef} className="relative sm:w-44">
                <button
                  type="button"
                  onClick={() => setTypeOpen((v) => !v)}
                  aria-haspopup="listbox"
                  aria-expanded={typeOpen}
                  className="flex h-12 w-full items-center justify-between gap-2 rounded-xl px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <span className={cn(!type && "text-muted-foreground")}>
                    {type || "Property Type"}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-4 text-primary transition-transform",
                      typeOpen && "rotate-180"
                    )}
                  />
                </button>
                {typeOpen && (
                  <ul
                    role="listbox"
                    className="absolute bottom-14 left-0 z-50 w-full min-w-44 overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-luxe"
                  >
                    {PROPERTY_TYPES.map((t) => (
                      <li key={t}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={type === t}
                          onClick={() => {
                            setType(t);
                            setTypeOpen(false);
                          }}
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-muted",
                            type === t && "text-primary"
                          )}
                        >
                          {t}
                          {type === t && <Check className="size-4" />}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="hidden h-7 w-px bg-border sm:block" />

              <div className="flex h-12 flex-1 items-center gap-2.5 rounded-xl px-3">
                <Search className="size-5 shrink-0 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by location or property ID…"
                  className="h-full w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>

              <Button type="submit" variant="gold" className="h-12 shrink-0 px-8">
                {mode === "Rent" ? "Rent Now" : "Buy Now"}
              </Button>
            </div>
          </form>

          {/* Checkboxes */}
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            <Checkbox
              checked={exclusive}
              onChange={setExclusive}
              label="Only properties in exclusive representation"
            />
            <Checkbox
              checked={newDev}
              onChange={setNewDev}
              label="Only new development"
            />
          </div>

          {/* Trust stats */}
          <div className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-4">
            {TRUST.map((t) => (
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
        href="#services"
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

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="group inline-flex items-center gap-2.5 text-left text-sm text-white/70 transition-colors hover:text-white"
    >
      <span
        className={cn(
          "flex size-5 shrink-0 items-center justify-center rounded-md border transition-all",
          checked
            ? "border-accent [background:var(--gold-gradient)]"
            : "border-white/40 bg-white/5 group-hover:border-accent"
        )}
      >
        {checked && <Check className="size-3.5 text-obsidian" strokeWidth={3} />}
      </span>
      {label}
    </button>
  );
}
