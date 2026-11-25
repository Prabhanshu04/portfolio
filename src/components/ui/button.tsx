import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * neobrutalism.dev button: hard shadow at rest, presses into the shadow on hover.
 */
const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-base border-2 border-border " +
  "font-heading text-xs uppercase tracking-wide transition-all " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default: "bg-main text-main-foreground shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
  neutral:
    "bg-secondary-background text-foreground shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
  pressed: "bg-main text-main-foreground translate-x-boxShadowX translate-y-boxShadowY shadow-none",
} as const;

const sizes = {
  default: "h-11 px-5",
  sm: "h-9 px-3",
  icon: "size-11",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonClass(variant: ButtonVariant = "default", size: keyof typeof sizes = "default", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  variant = "default",
  size = "default",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: keyof typeof sizes }) {
  return <button className={buttonClass(variant, size, className)} {...props} />;
}
