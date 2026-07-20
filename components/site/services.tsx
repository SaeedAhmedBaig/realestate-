import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

export function Services() {
  return (
    <section id="services" className="relative pt-20 sm:pt-24">
      <div className="container-luxe">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="headline mt-4 text-3xl text-foreground sm:text-4xl">
            End-to-end <span className="text-gold italic">construction expertise</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-luxe">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-14 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-colors group-hover:[background:var(--gold-gradient)] group-hover:text-obsidian">
                    <s.icon className="size-6" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <span className="mt-4 block h-0.5 w-10 [background:var(--gold-gradient)] transition-all duration-300 group-hover:w-20" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
