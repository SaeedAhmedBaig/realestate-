"use client";

import * as React from "react";
import {
  Youtube,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

const COMPANY = [
  { label: "About us", href: "#about" },
  { label: "Why choose us", href: "#benefits" },
  { label: "Testimonial", href: "#testimonials" },
  { label: "Properties", href: "#properties" },
];
const RESOURCES = [
  { label: "Privacy Policy", href: "#home" },
  { label: "Terms & Condition", href: "#home" },
  { label: "Contact us", href: "#contact" },
  { label: "Careers", href: "#home" },
];
const SOCIALS = [
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
];

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <footer id="contact" className="relative">
      {/* Newsletter card straddling the fold */}
      <div className="container-luxe relative z-10 translate-y-16">
        <div className="rounded-3xl border border-border bg-card px-6 py-10 shadow-luxe sm:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="eyebrow">Stay in the loop</span>
              <h2 className="headline mt-3 text-3xl text-foreground sm:text-4xl">
                Subscribe for any <span className="text-gold italic">news updates</span>
              </h2>
            </div>
            <form onSubmit={subscribe} className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-full border border-input bg-background px-5">
                <Mail className="size-5 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="shrink-0">
                {sent ? (
                  <>
                    <Check className="size-4" /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="size-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Obsidian footer body */}
      <div className="bg-obsidian pt-32 text-obsidian-foreground">
        <div className="container-luxe pb-10">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Logo inverted />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-obsidian-muted">
                Asif Developer crafts and curates the world&apos;s finest residences —
                pairing architectural mastery with white-glove service.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-obsidian-muted">
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-accent" /> 5th Avenue, New York, USA
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-accent" /> +1 (212) 555-0192
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-accent" /> hello@asifdeveloper.com
                </li>
              </ul>
            </div>

            <FooterCol title="Company" links={COMPANY} />
            <FooterCol title="Resources" links={RESOURCES} />

            <div>
              <h3 className="font-display text-lg font-semibold">Follow us</h3>
              <ul className="mt-5 space-y-3">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-sm text-obsidian-muted transition-colors hover:text-obsidian-foreground"
                    >
                      <span className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:[background:var(--gold-gradient)] group-hover:text-obsidian">
                        <s.icon className="size-4" />
                      </span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rule-gold opacity-40" />
          <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-obsidian-muted sm:flex-row">
            <p>
              © {new Date().getFullYear()} Asif Developer. All rights reserved.
            </p>
            <p>
              Crafted with <span className="text-accent">precision</span> for
              extraordinary living.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-obsidian-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
