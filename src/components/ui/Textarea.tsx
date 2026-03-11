import { forwardRef } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, className = "", ...props }, ref) => {
    const textareaId = id ?? label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={textareaId}
          className="text-small font-[500] text-[var(--color-text-secondary)]"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          className={`w-full bg-[var(--color-bg-card-dark)] border border-[var(--color-border-dark)] text-[var(--color-text-primary)] text-body px-4 py-3 rounded-none placeholder:text-[var(--color-text-muted)] transition-all duration-[150ms] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-y min-h-[120px] ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
export type { TextareaProps };
