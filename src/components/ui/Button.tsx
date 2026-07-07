import { forwardRef } from "react";
import { cx } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
};

const variants: Record<string, string> = {
  primary:
    "bg-blue text-white hover:brightness-110 shadow-soft hover:shadow-lift",
  outline:
    "border border-line text-ink hover:border-blue hover:text-blue bg-transparent",
  ghost: "text-ink hover:text-blue bg-transparent",
};

const sizes: Record<string, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cx(
          "inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition-all duration-300 ease-out active:scale-[0.97]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
