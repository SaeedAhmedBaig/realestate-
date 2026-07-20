"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/site/logo";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("#home");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overHero = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        overHero
          ? "border-transparent bg-transparent"
          : "border-border bg-background/90 shadow-card backdrop-blur-xl"
      )}
    >
      <nav className="container-luxe flex h-18 items-center justify-between py-3">
        <Logo inverted={overHero} />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === link.href
                    ? overHero
                      ? "text-accent"
                      : "text-primary"
                    : overHero
                      ? "text-white/75 hover:text-white"
                      : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px [background:var(--gold-gradient)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle
            className={cn(
              "hidden sm:inline-flex",
              overHero && "border-white/25 bg-white/10 text-white hover:text-accent"
            )}
          />
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "hidden md:inline-flex",
              overHero && "border-white/40 text-white hover:bg-white hover:text-obsidian hover:border-white"
            )}
            asChild
          >
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="gold" size="sm" className="hidden md:inline-flex" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full border lg:hidden",
              overHero
                ? "border-white/30 bg-white/10 text-white"
                : "border-border bg-card text-foreground"
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container-luxe flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex items-center gap-3 px-4">
            <Button variant="outline" className="flex-1" asChild>
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </Button>
            <Button variant="gold" className="flex-1" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </Button>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
}
