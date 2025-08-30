import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  endIcon?: React.ReactNode;
  customPrefix?: string;
};

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ name, label, className, endIcon, customPrefix, ...props }, ref) => (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={name} className="font-medium">
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
            "w-full rounded-full border border-slate-400 focus:outline-2 focus:outline-indigo-400 focus:border-indigo-400 h-10 px-5 py-5.5 font-normal focus:outline-none focus:ring-3 focus:ring-indigo-200 disabled:bg-gray-200 disabled:cursor-not-allowed invalid:border-red-500 invalid:outline-red-400 invalid:ring-red-200",
            customPrefix && "pl-9",
            className
          )}
          {...props}
        />
        <span className="absolute flex items-center right-[14px] top-0 bottom-0 text-grey-900">
          {endIcon}
        </span>
      </div>
    </div>
  )
);

TextField.displayName = "TextField";

export default TextField;
