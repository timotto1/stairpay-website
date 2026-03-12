type Theme = "dark" | "darker" | "light" | "white";

interface SectionWrapperProps {
  children: React.ReactNode;
  theme?: Theme;
  className?: string;
  id?: string;
}

const themes: Record<Theme, string> = {
  dark:    "bg-[var(--color-bg-primary)]",
  darker:  "bg-[var(--color-bg-secondary)]",
  light:   "bg-[var(--color-bg-surface)]",
  white:   "bg-[var(--color-bg-white)]",
};

export function SectionWrapper({
  children,
  theme = "white",
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-theme={theme === "dark" || theme === "darker" ? "dark" : "light"}
      className={`py-20 md:py-[100px] ${themes[theme]} ${className}`}
    >
      {children}
    </section>
  );
}
