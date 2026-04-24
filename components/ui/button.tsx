"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#0146AE] text-white hover:bg-[#013b93] focus-visible:ring-[#0146AE]",
        secondary: "bg-[#FFC001] text-[#1f2937] hover:bg-[#e6ad00] focus-visible:ring-[#FFC001]",
        outline:
          "border border-[#0146AE]/30 bg-white text-[#0146AE] hover:bg-[#0146AE]/5 focus-visible:ring-[#0146AE]",
        ghost: "text-[#0146AE] hover:bg-[#0146AE]/10 focus-visible:ring-[#0146AE]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
