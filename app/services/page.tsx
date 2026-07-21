import type { Metadata } from "next";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { CtaBand } from "@/components/site/cta-band";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — Aasif Developers",
  description:
    "Civil & structural works, architectural finishing, MEP & electrical, and infrastructure — end-to-end construction services delivered in-house.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        crumb="Services"
        eyebrow="What we do"
        title="Every discipline,"
        highlight="under one roof"
        description="From groundworks to the final coat of paint, we self-deliver each stage — backed by licensed engineers, skilled crews and our own plant and equipment."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
        meta={[
          { value: "04", label: "Core disciplines" },
          { value: "23+", label: "Machinery units" },
          { value: "500+", label: "Skilled workforce" },
        ]}
      />

      <Section>
        <SectionHeading
          index="—"
          kicker="Capabilities"
          title="A single accountable"
          highlight="contractor"
          description="No hand-offs between trades. We take responsibility for the whole build, so quality and schedule stay in one pair of hands."
        />

        <div className="mt-16 space-y-20 sm:space-y-28">
          {SERVICES.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={s.slug}>
                <article
                  id={s.slug}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  {/* image */}
                  <div className={flip ? "lg:order-2" : ""}>
                    <div className="frame-luxe aspect-[4/3]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.image}
                        alt={s.title}
                        className="size-full object-cover"
                      />
                      <span className="absolute left-5 top-5 font-display text-5xl font-semibold text-white/90 drop-shadow-lg">
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* content */}
                  <div className={flip ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl [background:var(--gold-gradient)] text-obsidian">
                        <s.icon className="size-6" />
                      </span>
                      <span className="kicker">Service 0{i + 1}</span>
                    </div>

                    <h3 className="headline mt-5 text-3xl text-foreground sm:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>

                    <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {s.scope.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="size-3.5" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/quote"
                      className="link-gold mt-8"
                    >
                      Request this service <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaBand
        title="Ready to break"
        highlight="ground?"
        text="Share your requirements and we'll match the right team and scope to your project."
      />
    </main>
  );
}
