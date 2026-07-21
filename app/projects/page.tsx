import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Building2, Ruler, Layers, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { PropertyCard } from "@/components/site/property-card";
import { Reveal } from "@/components/site/reveal";
import { CtaBand } from "@/components/site/cta-band";
import { Button } from "@/components/ui/button";
import { PROJECTS, CLIENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Aasif Developers",
  description:
    "Villas, high-rise towers and infrastructure delivered by Aasif Developers for Bahria Town, New Metro City and China Electric Power.",
};

export default function ProjectsPage() {
  const [featured, ...rest] = PROJECTS;

  return (
    <main>
      <PageHeader
        crumb="Projects"
        eyebrow="Our portfolio"
        title="Work we've"
        highlight="delivered"
        description="From single villas to G+9 towers and grid substations — a track record of projects completed on time, on budget and to specification."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
        meta={[
          { value: "PKR 2.5B+", label: "Delivered" },
          { value: "450+", label: "Villas built" },
          { value: "3", label: "Major clients" },
        ]}
      />

      {/* Featured project */}
      <Section>
        <SectionHeading
          index="01"
          kicker="Featured project"
          title="A flagship"
          highlight="build"
        />

        <Reveal className="mt-12">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="frame-luxe min-h-[20rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 size-full object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-obsidian/70 px-3 py-1 text-xs font-medium text-obsidian-foreground backdrop-blur">
                {featured.tag}
              </span>
            </div>

            <div className="flex flex-col justify-center rounded-[1.75rem] border border-border bg-card p-8 shadow-card sm:p-10">
              <span className="kicker">{featured.client}</span>
              <h3 className="headline mt-4 text-3xl text-foreground sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-3 flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4 text-primary" /> {featured.location}
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-6">
                <Meta icon={Building2} label="Client" value={featured.client} />
                <Meta icon={Ruler} label="Type" value={featured.type} />
                <Meta icon={Layers} label="Scope" value={featured.scope} />
              </dl>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Project value
                  </p>
                  <p className="font-display text-3xl font-semibold text-gold">
                    {featured.value}
                  </p>
                </div>
                <Button variant="gold" asChild>
                  <Link href="/quote">
                    Enquire <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* All projects grid */}
      <Section tone="muted" className="border-y border-border">
        <SectionHeading
          index="02"
          kicker="Portfolio"
          title="More of our"
          highlight="projects"
          description="A cross-section of villas, towers and infrastructure across Karachi, Gujjar Khan, Sara-e-Alamgir and Sheikhupura."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <PropertyCard p={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Clients */}
      <Section>
        <SectionHeading
          index="03"
          kicker="Trusted by"
          title="Leading"
          highlight="developers"
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-center shadow-card">
                <span className="mx-auto inline-flex size-12 items-center justify-center rounded-xl [background:var(--gold-gradient)] text-obsidian">
                  <Building2 className="size-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {c.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.scope}</p>
                <p className="mt-4 text-sm font-semibold text-primary">{c.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Have a project in"
        highlight="mind?"
        text="Tell us about your site and scope — our team will prepare a detailed, no-obligation estimate."
      />
    </main>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Building2;
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
        <Icon className="size-3.5 text-primary" /> {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}
