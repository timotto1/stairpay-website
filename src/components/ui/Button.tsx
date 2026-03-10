"use client";

import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "lg" | "md" | "sm";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  /** Render as an anchor tag */
  href?: string;
  asChild?: boolean;
}

const base =
  "inline-flex items-center justify-center font-[500] tracking-wide transition-all duration-[150ms] cursor-pointer select-none rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:-translate-y-px",
  secondary:
    "bg-transparent border border-[var(--color-text-muted)] text-white hover:border-[var(--color-text-secondary)] hover:bg-white/5",
  ghost:
    "bg-transparent text-[var(--color-text-secondary)] hover:text-white group",
};

const sizes: Record<Size, string> = {
  lg: "text-[15px] px-8 py-4",
  md: "text-[14px] px-6 py-3",
  sm: "text-[13px] px-[18px] py-2",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", href, children, ...props }, ref) => {
    const classes = [base, variants[variant], sizes[size], className].join(" ");

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, Variant as ButtonVariant, Size as ButtonSize };
