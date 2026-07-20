import { Building2, MapPin, Ruler, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  client: string;
  location: string;
  type: string;
  scope: string;
  value: string;
  image: string;
  tag: string;
};

export function PropertyCard({ p }: { p: Project }) {
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
        <span className="absolute right-3 top-3 rounded-full [background:var(--gold-gradient)] px-3 py-1 text-xs font-semibold text-obsidian">
          {p.value}
        </span>
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
            <Building2 className="size-4 text-primary" /> {p.client}
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="size-4 text-primary" /> {p.type}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{p.scope}</span>
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">
              View project <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
