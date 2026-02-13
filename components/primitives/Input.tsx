import { cx } from "@/lib/classnames";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  success?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, success, className, ...props }, ref) => {
    const descriptionId = error ? `${id}-error` : success ? `${id}-success` : undefined;

    return (
      <div className="relative">
        <label htmlFor={id} className="mb-2 block text-label">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={descriptionId}
          className={cx(
            "w-full rounded-lg border px-4 py-3 text-sm font-medium",
            "transition-all duration-300 ease-smooth",
            "focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-error focus:border-error focus:ring-error/30"
              : success
                ? "border-success focus:border-success focus:ring-success/30"
                : "border-black/10 focus:border-accent/50",
            error || success ? "" : "shadow-soft focus:shadow-gold",
            className
          )}
          {...props}
        />
        {error && (
          <p id={descriptionId} className="mt-2 flex items-center gap-1 text-xs text-error">
            <span aria-hidden="true">!</span>
            {error}
          </p>
        )}
        {success && (
          <p id={descriptionId} className="mt-2 flex items-center gap-1 text-xs text-success">
            <span aria-hidden="true">OK</span>
            Success
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
