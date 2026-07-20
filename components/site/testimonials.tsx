import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

const BG =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
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
              <h2 className="headline max-w-2xl text-4xl text-obsidian-foreground sm:text-5xl">
                See what our customers said{" "}
                <span className="text-gold italic">about us</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1}>
                  <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-luxe">
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="size-14 rounded-full border border-border object-cover"
                      />
                      <figcaption>
                        <p className="font-display text-lg font-semibold text-foreground">
                          {t.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </figcaption>
                      <Quote className="ml-auto size-8 fill-primary/15 text-primary/30" />
                    </div>

                    <div className="mt-4 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className="size-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      “{t.quote}”
                    </blockquote>

                    <p className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
                      Date: {t.date}
                    </p>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
