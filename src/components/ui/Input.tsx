import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className = "", ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className="text-small font-[500] text-[var(--color-text-secondary)]"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`w-full bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] text-[var(--color-text-primary)] text-body px-4 py-3 rounded-none placeholder:text-[var(--color-text-muted)] transition-all duration-[150ms] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
