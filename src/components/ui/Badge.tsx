interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center text-[11px] font-[500] tracking-[2.5px] uppercase px-3 py-1 rounded-[4px] bg-[var(--color-accent-light)] text-[var(--color-accent-pale)] ${className}`}
    >
      {children}
    </span>
  );
}
