import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GALLERY } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function Blog() {
  return (
    <section id="expertise" className="py-16">
      <div className="container-luxe">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="headline text-4xl text-foreground sm:text-5xl">
              A closer look at <span className="text-gold italic">our work</span>
            </h2>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3"
            >
              View projects <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className={cn(
                item.size === "tall" ? "lg:row-span-2" : "",
                i === 0 ? "sm:row-span-2" : ""
              )}
            >
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-2xl border border-border shadow-card",
                  item.size === "tall" ? "min-h-[22rem]" : "min-h-[15rem]"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-6 text-obsidian-foreground">
                  <span className="mb-3 inline-flex w-fit rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-obsidian">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-sm text-obsidian-muted">
                    <span>{item.place}</span>
                    <span className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:[background:var(--gold-gradient)] group-hover:text-obsidian">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
