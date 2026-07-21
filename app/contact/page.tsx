import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Globe, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { CtaBand } from "@/components/site/cta-band";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Aasif Developers",
  description:
    "Get in touch with Aasif Developers — call, email or visit our office in Bahria Town, Lahore.",
};

const METHODS = [
  {
    icon: Phone,
    label: "Call us",
    lines: COMPANY.phones,
    hrefs: COMPANY.phones.map((p) => `tel:${p.replace(/\s/g, "")}`),
  },
  {
    icon: Mail,
    label: "Email us",
    lines: [COMPANY.email],
    hrefs: [`mailto:${COMPANY.email}`],
  },
  {
    icon: MapPin,
    label: "Visit our office",
    lines: [COMPANY.address],
  },
  {
    icon: Clock,
    label: "Office hours",
    lines: ["Monday – Saturday", "9:00 am – 6:00 pm"],
  },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: COMPANY.social.instagram },
  { icon: Facebook, label: "Facebook", href: COMPANY.social.facebook },
  { icon: Globe, label: "Website", href: COMPANY.social.website },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk about your"
        highlight="project"
        description="Reach out by phone or email, or visit our office in Bahria Town, Lahore. We're glad to discuss your requirements."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — contact panel */}
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="index-num">—</span>
              <span className="h-px w-8 bg-primary/40" />
              <span className="kicker">Contact details</span>
            </div>
            <h2 className="headline mt-4 text-3xl text-foreground sm:text-4xl">
              We&apos;re here to <span className="text-gold italic">help</span>
            </h2>

            <ul className="mt-10 divide-y divide-border">
              {METHODS.map((m) => (
                <li key={m.label} className="flex items-start gap-5 py-5 first:pt-0">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl [background:var(--gold-gradient)] text-obsidian">
                    <m.icon className="size-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {m.label}
                    </p>
                    <div className="mt-1 space-y-0.5">
                      {m.lines.map((line, i) =>
                        m.hrefs ? (
                          <a
                            key={line}
                            href={m.hrefs[i]}
                            className="block text-foreground transition-colors hover:text-primary"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-muted-foreground">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
              <Button variant="gold" className="ml-auto" asChild>
                <Link href="/quote">
                  Get a Quote <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          {/* Right — map */}
          <Reveal delay={0.12}>
            <div className="frame-luxe h-full min-h-[26rem]">
              <iframe
                title="Aasif Developers office location — Bahria Town, Lahore"
                src="https://www.google.com/maps?q=Bahria%20Town%20Lahore&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title="Prefer a detailed"
        highlight="estimate?"
        text="Send us your project details and we'll get back to you with a tailored quote."
      />
    </main>
  );
}
