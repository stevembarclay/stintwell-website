import { cx } from "@/lib/classnames";
import { forwardRef } from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, error, className, children, ...props }, ref) => {
    const descriptionId = error ? `${id}-error` : undefined;

    return (
      <div className="relative">
        <label htmlFor={id} className="mb-2 block text-label">
          {label}
        </label>
        <select
          ref={ref}
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={descriptionId}
          className={cx(
            "w-full appearance-none rounded-lg border bg-bg px-4 py-3 text-sm font-medium",
            "transition-all duration-300 ease-smooth",
            "focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-error focus:border-error focus:ring-error/30"
              : "border-black/10 focus:border-accent/50 shadow-soft focus:shadow-gold",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-[42px] h-4 w-4 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {error && (
          <p id={descriptionId} className="mt-2 flex items-center gap-1 text-xs text-error">
            <span aria-hidden="true">!</span>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
