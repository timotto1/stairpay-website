"use client";

import { forwardRef } from "react";

type IconButtonVariant = "solid-white" | "outline-dark";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
}

const variantClasses: Record<IconButtonVariant, string> = {
  "solid-white":
    "bg-white border border-[var(--color-accent-darkest)] text-[var(--color-accent-darkest)] hover:bg-[var(--color-accent-darkest)] hover:text-white",
  "outline-dark":
    "bg-transparent border border-white text-white hover:bg-white hover:text-[var(--color-accent-darkest)]",
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = "solid-white", className = "", children, ...props }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center p-2 rounded-none transition-all duration-[150ms] cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  ),
);

IconButton.displayName = "IconButton";

export { IconButton };
export type { IconButtonProps, IconButtonVariant };
