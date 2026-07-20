import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HELP_ICONS } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";
import { CountUp } from "@/components/site/count-up";

const IMG_A =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80";
const IMG_B =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80";

export function Help() {
  return (
    <section id="about" className="py-24">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Our Services</span>
          <h2 className="headline mt-4 text-4xl text-foreground sm:text-5xl">
            We&apos;re here to help you find your{" "}
            <span className="text-gold italic">dream house</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            From first viewing to final signature, our advisors orchestrate every
            detail. Discreet, precise, and relentlessly focused on the home that fits
            your life.
          </p>

          <ul className="mt-8 space-y-4">
            {HELP_ICONS.map((p) => (
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
            <a href="#properties">Explore properties</a>
          </Button>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG_A}
              alt="Advisors reviewing a property portfolio together"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-luxe"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG_B}
              alt="Interior of a contemporary luxury home"
              className="absolute -right-6 -top-6 hidden aspect-square w-36 rounded-2xl border-4 border-background object-cover shadow-luxe sm:block lg:w-44"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-card px-6 py-4 shadow-luxe">
              <CountUp
                value="15+"
                className="font-display text-3xl font-semibold text-gold"
              />
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Years of trust
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
