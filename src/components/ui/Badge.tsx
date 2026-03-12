interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  theme?: "dark" | "light";
}

export function Badge({ children, className = "", theme }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center text-[11px] font-[500] tracking-[2.5px] uppercase px-3 py-1 rounded-[4px] ${
        theme === "light"
          ? "bg-[#111] text-white"
          : "bg-[var(--color-accent-light)] text-[var(--color-accent-pale)]"
      } ${className}`}
    >
      {children}
    </span>
  );
}
