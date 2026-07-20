import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <a
      href="#home"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Asif Developer — home"
    >
      <span className="relative inline-flex size-10 items-center justify-center rounded-xl [background:var(--gold-gradient)] shadow-[0_6px_16px_-6px_var(--accent)]">
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-obsidian"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M3 21V9l6-4 6 4v12" />
          <path d="M15 21V11l6 4v6" />
          <path d="M9 21v-5h0" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-wide",
            inverted ? "text-obsidian-foreground" : "text-foreground"
          )}
        >
          AASIF <span className="text-gold">DEVELOPERS</span>
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.28em]",
            inverted ? "text-obsidian-muted" : "text-muted-foreground"
          )}
        >
          Construction &amp; Development
        </span>
      </span>
    </a>
  );
}
