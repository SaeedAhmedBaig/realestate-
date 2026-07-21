import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { CtaBand } from "@/components/site/cta-band";
import { CEO_MESSAGE, MISSION, VALUES, STATS, COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Aasif Developers",
  description:
    "Since 2016, Aasif Developers has grown from civil works into a full-scope contractor delivering villas, towers and infrastructure across Pakistan.",
};

const IMG =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80";

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        crumb="About"
        eyebrow="Our story"
        title="Vision, creativity,"
        highlight="craftsmanship"
        description={`${COMPANY.legalName} — competitive in the field of construction since 2016, delivering organised, well-executed projects with passion and commitment.`}
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
        meta={[
          { value: "2016", label: "Established" },
          { value: "PKR 2.5B+", label: "Delivered" },
          { value: "500+", label: "Workforce" },
        ]}
      />

      {/* CEO message */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="frame-luxe aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG}
                  alt="Aasif Developers engineers on a construction site"
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-luxe sm:-right-6">
                <p className="font-display text-lg font-semibold text-foreground">
                  {COMPANY.ceo}
                </p>
                <p className="text-xs font-medium uppercase tracking-widest text-primary">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex items-center gap-3">
              <span className="index-num">—</span>
              <span className="h-px w-8 bg-primary/40" />
              <span className="kicker">Message from the CEO</span>
            </div>
            <h2 className="headline mt-4 text-[clamp(1.9rem,3.5vw,3rem)] text-foreground">
              A specialist shaped by{" "}
              <span className="text-gold italic">experience</span>
            </h2>
            <Quote className="mt-6 size-9 fill-primary/10 text-primary/40" />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              {CEO_MESSAGE.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-display text-2xl italic text-gold">
              {COMPANY.ceo}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Mission — dark statement */}
      <section className="relative isolate overflow-hidden bg-obsidian py-24 text-obsidian-foreground sm:py-32">
        <div className="texture-grid absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -left-24 top-0 size-[26rem] rounded-full bg-primary/20 blur-[120px]" />
        <div className="container-luxe relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-accent/50" />
              <span className="kicker !text-accent">Our mission</span>
              <span className="h-px w-10 bg-accent/50" />
            </div>
            <p className="headline mt-8 text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.35]">
              {MISSION}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-obsidian p-6 text-center sm:p-8">
                <p className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-obsidian-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <Section tone="muted" className="border-b border-border">
        <SectionHeading
          index="—"
          kicker="What we stand for"
          title="The values behind every"
          highlight="build"
          description="Ten principles that guide how we work with clients, partners and our own people."
        />
        <ul className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v} delay={(i % 2) * 0.06}>
              <li className="flex items-start gap-5 border-t border-border pt-5">
                <span className="index-num shrink-0 text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium text-foreground">{v}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Build with a team you can"
        highlight="trust"
        text="Partner with a contractor that delivers on time, on budget and to the highest standard."
      />
    </main>
  );
}
