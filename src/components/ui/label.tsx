import * as React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children: React.ReactNode;
}

export function Label({ className = "", children, ...props }: LabelProps) {
  return (
    <label
      className={`block text-sm font-medium mb-1 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

