import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium tracking-tight transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-void text-white hover:bg-void-2 shadow-[0_10px_30px_-14px_rgb(10_12_18/0.9)]",
  secondary:
    "border border-line-strong bg-surface text-fg hover:border-accent/50 hover:text-accent",
  ghost: "text-muted hover:bg-surface-2 hover:text-fg",
};

/**
 * Button styling for elements that must stay anchors (`<a>`), since nesting a
 * <button> inside an <a> is invalid HTML.
 */
export function buttonStyles(
  variant: ButtonVariant = "primary",
  className?: string,
) {
  return cn(base, variants[variant], className);
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={buttonStyles(variant, className)} {...props}>
      {children}
    </button>
  );
}
