import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        index="01"
        kicker="What we do"
        title="End-to-end construction"
        highlight="expertise"
        description="Four core disciplines, delivered in-house by licensed engineers and skilled crews."
        action={{ label: "All services", href: "/services" }}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <Link
              href={`/services#${s.slug}`}
              className="card-luxe group flex h-full flex-col p-6"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary transition-colors group-hover:[background:var(--gold-gradient)] group-hover:text-obsidian">
                  <s.icon className="size-6" />
                </span>
                <span className="index-num">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Learn more
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
