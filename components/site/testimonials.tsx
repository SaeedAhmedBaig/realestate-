import { ArrowUpRight, Building2 } from "lucide-react";
import { CLIENTS } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

const BG =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80";

export function Testimonials() {
  return (
    <section id="clients" className="py-16">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BG}
            alt="Aerial view of a city at golden hour"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/70" />

          <div className="relative px-6 pb-8 pt-16 sm:px-12 sm:pt-20">
            <Reveal>
              <span className="eyebrow !text-accent">Our clients</span>
              <h2 className="headline mt-4 max-w-2xl text-4xl text-obsidian-foreground sm:text-5xl">
                Trusted by leading <span className="text-gold italic">developers</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {CLIENTS.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.1}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-luxe">
                    <div className="relative h-40 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.image}
                        alt={`${c.name} project by Aasif Developers`}
                        className="size-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-obsidian/70 px-3 py-1 text-xs font-medium text-obsidian-foreground backdrop-blur">
                        {c.tag}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-11 items-center justify-center rounded-xl [background:var(--gold-gradient)] text-obsidian">
                          <Building2 className="size-5" />
                        </span>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {c.name}
                        </h3>
                      </div>

                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {c.scope}
                      </p>

                      <p className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-primary">
                        <ArrowUpRight className="size-4" />
                        {c.value}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
