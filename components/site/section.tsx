import * as React from "react";
import { cn } from "@/lib/utils";

const TONES = {
  default: "bg-background text-foreground",
  muted: "bg-muted/40 text-foreground",
  obsidian: "bg-obsidian text-obsidian-foreground",
} as const;

export function Section({
  tone = "default",
  id,
  className,
  containerClassName,
  children,
}: {
  tone?: keyof typeof TONES;
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", TONES[tone], className)}>
      <div className={cn("container-luxe", containerClassName)}>{children}</div>
    </section>
  );
}
