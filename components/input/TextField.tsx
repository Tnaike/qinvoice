import { cn } from "@/utils/helpers";
import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  customPrefix?: React.ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, name, className, customPrefix, ...props }, ref) => (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className={cn("relative w-full")}>
        {customPrefix && (
          <span className="absolute left-5 top-0 bottom-0 flex items-center text-grey-900">
            {customPrefix}
          </span>
        )}
        <input
          ref={ref}
          name={name}
          className={cn(
            "w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-black",
            error ? "border-red-500" : "border-dark",
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
);

TextField.displayName = "TextField";

export default TextField;
