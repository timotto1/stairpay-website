import { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, options, placeholder, className = "", ...props }, ref) => {
    const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={selectId}
          className="text-small font-[500] text-[var(--color-text-secondary)]"
        >
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`w-full bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] text-[var(--color-text-primary)] text-body px-4 py-3 rounded-none appearance-none transition-all duration-[150ms] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
export type { SelectProps };
