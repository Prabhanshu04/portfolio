import { cn } from "@/lib/utils";

/** Small bordered mono label: W—01, LIFE, filter chips in the spread. */
export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-current px-1.5 py-0.5 font-mono text-[11px] uppercase leading-none tracking-wide",
        className,
      )}
    >
      {children}
    </span>
  );
}
