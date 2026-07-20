import { BedDouble, Maximize, Home, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

type Property = {
  title: string;
  location: string;
  price: string;
  beds: number;
  size: string;
  rooms: number;
  image: string;
  tag: string;
};

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-luxe">
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.title}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-obsidian/70 px-3 py-1 text-xs font-medium text-obsidian-foreground backdrop-blur">
          {p.tag}
        </span>
        <button
          type="button"
          aria-label="Save property"
          className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full glass border border-white/20 text-foreground transition-colors hover:text-primary"
        >
          <Heart className="size-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <MapPin className="size-4 text-primary" />
          {p.location}
        </div>
        <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
          {p.title}
        </h3>

        <div className="mt-4 flex items-center justify-between border-y border-border py-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="size-4 text-primary" /> {p.beds} Bed
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="size-4 text-primary" /> {p.size}
          </span>
          <span className="flex items-center gap-1.5">
            <Home className="size-4 text-primary" /> {p.rooms} Room
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Button variant="gold" size="sm" asChild>
            <a href="#contact">Book now</a>
          </Button>
          <span className="font-display text-xl font-semibold text-foreground">
            {p.price}
          </span>
        </div>
      </div>
    </article>
  );
}
