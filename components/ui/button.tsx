import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_var(--primary)] hover:brightness-110 hover:-translate-y-0.5",
        gold:
          "text-obsidian [background:var(--gold-gradient)] bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_10px_30px_-10px_var(--accent)] hover:-translate-y-0.5",
        outline:
          "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary",
        ghost: "text-foreground hover:bg-muted",
        obsidian:
          "bg-obsidian text-obsidian-foreground hover:bg-obsidian/90 hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline rounded-none",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4",
        lg: "h-13 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
