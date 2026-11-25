import { site } from "@/content/site";
import { starPoints } from "./star";

function Star({ className }: { className?: string }) {
  // Six-pointed outline star from the Figma "Stay curious" tile
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <polygon points={starPoints()} fill="none" stroke="var(--chart-2)" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

/** First row of the frame: name, intro, a blank square and "Stay curious". */
export function HeroRow() {
  return (
    <div className="index-grid">
      <section className="cell flex flex-col bg-background p-4 lg:p-5" style={cell(1, 3)}>
        <p className="font-mono text-[11px] uppercase tracking-wide sm:text-xs">{site.heroKicker}</p>
        <h1 className="mt-auto font-heading text-[clamp(2.4rem,9vw,3.5rem)] uppercase leading-[0.86] tracking-[-0.055em] lg:text-[clamp(2.4rem,4.4vw,3.45rem)]">
          {site.nameLines[0]}
          <br />
          {site.nameLines[1]}
          <span className="align-super text-[0.42em] font-base text-chart-4">®</span>
        </h1>
      </section>
      <section className="cell flex flex-col justify-between bg-secondary-background p-4" style={cell(4, 2)}>
        <p className="max-w-[15rem] text-[15px] leading-snug">{site.intro}</p>
        <p className="font-mono text-[11px] uppercase tracking-wide">{site.introFoot}</p>
      </section>
      <div className="cell bg-secondary-background" style={cell(6, 1)} aria-hidden />
      <div className="cell bg-secondary-background lg:hidden" style={cell(6, 1)} aria-hidden />
      <section className="cell flex items-center justify-center gap-3 bg-foreground p-4 text-white" style={cell(7, 2)}>
        <Star className="size-14 shrink-0 lg:size-16" />
        <p className="-rotate-[4deg] font-heading text-[1.65rem] uppercase leading-[0.95] tracking-[-0.04em]">
          Stay
          <br />
          curious.
        </p>
      </section>
    </div>
  );
}

function cell(c: number, w: number): React.CSSProperties {
  return { "--c": c, "--r": 1, "--w": w, "--h": 1 } as React.CSSProperties;
}
