import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title,
  highlight,
  text,
}: {
  title: string;
  highlight: string;
  text: string;
}) {
  return (
    <section className="pb-20 pt-4">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-3xl bg-obsidian px-6 py-12 text-center text-obsidian-foreground sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-[100px]" />
          <h2 className="headline relative text-3xl sm:text-4xl">
            {title} <span className="text-gold italic">{highlight}</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-obsidian-muted">{text}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="gold" size="lg" asChild>
              <Link href="/quote">
                Get a Quote <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:border-white hover:bg-white hover:text-obsidian"
              asChild
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
