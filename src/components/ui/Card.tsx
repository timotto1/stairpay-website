interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  theme?: "dark" | "light";
  accentBorder?: boolean;
  hoverable?: boolean;
}

export function Card({
  children,
  className = "",
  href,
  theme = "dark",
  accentBorder = false,
  hoverable = true,
}: CardProps) {
  const isDark = theme === "dark";

  const classes = [
    "block p-8 border transition-all duration-[250ms]",
    isDark
      ? "bg-[var(--color-bg-card-dark)] border-[var(--color-border-dark)]"
      : "bg-white border-[var(--color-border-light)]",
    accentBorder ? "border-l-[3px] border-l-[var(--color-accent)]" : "",
    hoverable
      ? isDark
        ? "hover:bg-[var(--color-bg-card-dark-hover)] hover:-translate-y-1"
        : "hover:shadow-lg hover:-translate-y-1"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <div className={classes}>{children}</div>;
}
