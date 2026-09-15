import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-strong text-ink hover:bg-accent shadow-[0_0_0_1px_rgb(34_211_238/0.4),0_8px_30px_-8px_rgb(34_211_238/0.5)]",
  secondary:
    "border border-line-strong bg-surface text-fg hover:border-accent/50 hover:bg-surface-2",
  ghost: "text-fg hover:bg-white/5",
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
