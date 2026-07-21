import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";

export function SectionHeading({
  index,
  kicker,
  title,
  highlight,
  description,
  align = "left",
  tone = "light",
  action,
  className,
}: {
  index?: string;
  kicker: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: { label: string; href: string };
  className?: string;
}) {
  const muted = tone === "dark" ? "text-obsidian-muted" : "text-muted-foreground";

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        {/* index + kicker */}
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          {index && (
            <>
              <span className="index-num">{index}</span>
              <span className="h-px w-8 bg-primary/40" />
            </>
          )}
          <span className="kicker">{kicker}</span>
        </div>

        <h2
          className={cn(
            "headline mt-4 text-[clamp(2rem,4vw,3.25rem)]",
            tone === "dark" ? "text-obsidian-foreground" : "text-foreground"
          )}
        >
          {title}{" "}
          {highlight && <span className="text-gold italic">{highlight}</span>}
        </h2>

        {description && (
          <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", muted)}>
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className="link-gold shrink-0 self-start md:self-end md:pb-2"
        >
          {action.label} <ArrowRight className="size-4" />
        </Link>
      )}
    </Reveal>
  );
}
