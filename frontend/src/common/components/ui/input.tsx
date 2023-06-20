import * as React from "react";

import { cn } from "@lib/utils";
import { AnimatedContainer } from "@components/AnimatedContainer";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, type, name, ...props }, ref) => {
    return (
      <AnimatedContainer className="w-full grid gap-1">
        {label && (
          <label htmlFor={name} className="text-lg font-semibold">
            {label}
            {props.required && <span className="ml-1 text-red-600">*</span>}
          </label>
        )}

        <input
          id={name}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </AnimatedContainer>
    );
  }
);
Input.displayName = "Input";

export { Input };
