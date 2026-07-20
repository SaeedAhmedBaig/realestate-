import { Star } from "lucide-react";
import { WHY_POINTS, STATS } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";
import { CountUp } from "@/components/site/count-up";

const IMG =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80";

const AVATARS = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Benefits</span>
          <h2 className="headline mt-4 text-4xl text-foreground sm:text-5xl">
            Why <span className="text-gold italic">choose us</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Three decades of relationships, an obsession with craftsmanship, and a
            portfolio that speaks for itself. This is real estate handled the way it
            should be.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {WHY_POINTS.map((p) => (
              <li
                key={p.title}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg [background:var(--gold-gradient)] text-obsidian">
                  <p.icon className="size-5" />
                </span>
                <span className="font-medium text-foreground">{p.title}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -right-4 -top-4 hidden size-full rounded-3xl bg-primary/80 lg:block" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG}
              alt="A serene, well-lit luxury living room"
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-luxe"
            />

            {/* Employee / rating overlay */}
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-obsidian/85 px-4 py-3 text-obsidian-foreground backdrop-blur sm:inset-x-4 sm:bottom-4 sm:px-5 sm:py-4">
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold sm:text-2xl">
                  <CountUp value="100+" /> Employees
                </p>
                <p className="mt-1 flex flex-wrap items-center gap-x-1.5 text-xs text-obsidian-muted sm:text-sm">
                  <span className="inline-flex items-center gap-1">
                    <Star className="size-4 shrink-0 fill-accent text-accent" />
                    <span className="font-semibold text-obsidian-foreground">
                      <CountUp value="5.0" />
                    </span>
                  </span>
                  <span className="whitespace-nowrap">
                    (<CountUp value="39.9" />k reviews)
                  </span>
                </p>
              </div>
              <div className="flex shrink-0 -space-x-3">
                {AVATARS.map((a, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={a}
                    alt=""
                    className="size-8 rounded-full border-2 border-obsidian object-cover sm:size-10"
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Stat band */}
      <div className="container-luxe mt-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-card p-8 text-center">
              <CountUp
                value={s.value}
                className="font-display text-4xl font-semibold text-gold"
              />
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
