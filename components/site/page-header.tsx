import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  crumb,
  image,
  meta,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  crumb: string;
  image?: string;
  meta?: { value: string; label: string }[];
}) {
  const bg =
    image ??
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80";

  return (
    <section className="relative isolate overflow-hidden bg-obsidian text-obsidian-foreground">
      {/* Background photography, heavily washed into the ink */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bg}
        alt=""
        aria-hidden
        className="img-ink absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
      <div className="texture-grid absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-0 size-[30rem] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-[22rem] rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-luxe relative z-10 pb-14 pt-32 sm:pb-16 sm:pt-40">
        {/* breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-obsidian-muted"
        >
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-obsidian-foreground">{crumb}</span>
        </nav>

        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-10 bg-accent/50" />
          <span className="kicker !text-accent">{eyebrow}</span>
        </div>

        <h1 className="headline mt-5 max-w-4xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05]">
          {title} {highlight && <span className="text-gold italic">{highlight}</span>}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-obsidian-muted sm:text-lg">
            {description}
          </p>
        )}

        {meta && meta.length > 0 && (
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-8">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                  {m.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-obsidian-muted">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="rule-gold relative z-10 opacity-40" />
    </section>
  );
}
