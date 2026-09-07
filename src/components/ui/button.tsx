import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "button inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/20 hover:-translate-y-0.5 hover:opacity-95",
  secondary:
    "border border-[var(--border)] bg-[var(--card)] text-white hover:bg-white/5 hover:border-white/20",
  ghost: "text-white hover:bg-white/10",
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
