"use client";

import { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "outline" | "outline-dark" | "solid-white" | "ghost";
type Size = "lg" | "md" | "sm";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  /** Render as an anchor tag */
  href?: string;
  /** Show ArrowUpRight icon */
  arrow?: boolean;
  asChild?: boolean;
}

const base =
  "group inline-flex items-center justify-center font-[500] tracking-wide uppercase transition-all duration-[150ms] cursor-pointer select-none rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  outline:
    "bg-white border border-[#111] text-[#111] hover:bg-[#111] hover:text-white",
  "outline-dark":
    "bg-transparent border border-white text-white hover:bg-white hover:text-[#111]",
  "solid-white":
    "bg-white border border-[var(--color-accent-darkest)] text-[var(--color-accent-darkest)] hover:bg-[var(--color-accent-darkest)] hover:border-[var(--color-accent-darkest)] hover:text-white",
  ghost:
    "bg-transparent text-[var(--color-text-body-light)] hover:text-[#111]",
};

const sizes: Record<Size, string> = {
  lg: "text-[15px] px-8 py-4",
  md: "text-[14px] px-6 py-3",
  sm: "text-[13px] px-[18px] py-2",
};

const arrowSizes: Record<Size, number> = {
  lg: 18,
  md: 16,
  sm: 14,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "outline",
      size = "md",
      className = "",
      href,
      arrow,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = [base, variants[variant], sizes[size], className].join(" ");

    const arrowIcon = arrow ? (
      <ArrowUpRight
        size={arrowSizes[size]}
        strokeWidth={1.5}
        className="ml-2 transition-transform duration-[150ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    ) : null;

    if (href) {
      return (
        <a href={href} className={classes} {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
          {children}
          {arrowIcon}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
        {arrowIcon}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, Variant as ButtonVariant, Size as ButtonSize };
