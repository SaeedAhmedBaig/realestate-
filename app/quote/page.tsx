import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { QuoteForm } from "@/components/site/quote-form";
import { COMPANY, WHY_POINTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Get a Quote — Aasif Developers",
  description:
    "Request a free, no-obligation construction estimate from Aasif Developers. Tell us about your villa, tower or infrastructure project.",
};

export default function QuotePage() {
  return (
    <main>
      <PageHeader
        crumb="Get a Quote"
        eyebrow="Start your project"
        title="Request a"
        highlight="quote"
        description="Share a few details about your project and our team will prepare a tailored, no-obligation estimate — usually within one business day."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
        meta={[
          { value: "24h", label: "Typical response" },
          { value: "Free", label: "No-obligation estimate" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-start">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="index-num">—</span>
              <span className="h-px w-8 bg-primary/40" />
              <span className="kicker">Project details</span>
            </div>
            <QuoteForm />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Talk to us directly
              </h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{COMPANY.address}</span>
                </li>
                {COMPANY.phones.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <Phone className="size-5 shrink-0 text-primary" />
                    <a
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="text-foreground hover:text-primary"
                    >
                      {p}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-primary" />
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="break-all text-foreground hover:text-primary"
                  >
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="size-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">Mon–Sat, 9am – 6pm</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck className="size-5" />
                <span className="font-semibold">Why Aasif Developers</span>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {WHY_POINTS.map((w) => (
                  <li key={w.title} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {w.title}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
