import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ABOUT_POINTS } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";
import { CountUp } from "@/components/site/count-up";

const IMG_A =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80";
const IMG_B =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80";

export function Help() {
  return (
    <section id="about" className="py-24">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="index-num">02</span>
            <span className="h-px w-8 bg-primary/40" />
            <span className="kicker">About Aasif Developers</span>
          </div>
          <h2 className="headline mt-4 text-[clamp(2rem,4vw,3.25rem)] text-foreground">
            We build your vision with{" "}
            <span className="text-gold italic">craftsmanship</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Since 2016, Aasif Developers has grown from civil and masonry works into a
            full-scope contractor delivering villas, towers and infrastructure. Our
            licensed engineers and skilled workforce build on time, on budget and to
            the highest standards of safety and quality.
          </p>

          <ul className="mt-8 space-y-4">
            {ABOUT_POINTS.map((p) => (
              <li key={p.title} className="flex items-center gap-4">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
                  <p.icon className="size-5" />
                </span>
                <span className="text-lg font-medium text-foreground">
                  {p.title}
                </span>
                <Check className="ml-auto size-5 text-primary sm:ml-0" />
              </li>
            ))}
          </ul>

          <Button variant="primary" size="lg" className="mt-9" asChild>
            <Link href="/projects">Explore our projects</Link>
          </Button>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG_A}
              alt="Aasif Developers engineers and crew on a construction site"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-luxe"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG_B}
              alt="A completed Aasif Developers villa"
              className="absolute -right-6 -top-6 hidden aspect-square w-36 rounded-2xl border-4 border-background object-cover shadow-luxe sm:block lg:w-44"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-card px-6 py-4 shadow-luxe">
              <p className="font-display text-3xl font-semibold text-gold">
                Since <CountUp value="2016" />
              </p>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Building trust
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
