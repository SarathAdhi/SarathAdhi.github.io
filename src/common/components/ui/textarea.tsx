import * as React from "react";

import { cn } from "@lib/utils";
import { AnimatedContainer } from "@components/AnimatedContainer";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className, name, ...props }, ref) => {
    return (
      <AnimatedContainer className="w-full grid gap-1">
        {label && (
          <label htmlFor={name} className="text-lg font-semibold">
            {label}
            {props.required && <span className="ml-1 text-red-600">*</span>}
          </label>
        )}

        <textarea
          id={name}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </AnimatedContainer>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
