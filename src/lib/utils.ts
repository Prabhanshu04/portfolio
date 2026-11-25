import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const pad = (n: number) => String(n).padStart(2, "0");
export const projectCode = (n: number) => `W—${pad(n)}`;
export { pad };

/** Words per minute used for the 2-minute read budget. */
export const WPM = 220;

export function countWords(...texts: (string | undefined)[]) {
  return texts
    .filter(Boolean)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}
