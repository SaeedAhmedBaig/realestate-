import Link from "next/link";
import { Building2, MapPin, Ruler, ArrowUpRight } from "lucide-react";

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
    <Link
      href="/quote"
      className="card-luxe group flex h-full flex-col focus-visible:outline-none"
    >
      {/* gold top accent grows on hover */}
      <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 [background:var(--gold-gradient)] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.title}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-obsidian/70 px-3 py-1 text-xs font-medium text-obsidian-foreground backdrop-blur">
          {p.tag}
        </span>
        <span className="absolute right-3 top-3 rounded-full [background:var(--gold-gradient)] px-3 py-1 text-xs font-semibold text-obsidian">
          {p.value}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
          <MapPin className="size-3.5" />
          {p.location}
        </div>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
          {p.title}
        </h3>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Building2 className="size-4 text-primary" /> {p.client}
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="size-4 text-primary" /> {p.type}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-sm text-muted-foreground">{p.scope}</span>
          <span className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:[background:var(--gold-gradient)] group-hover:text-obsidian">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
