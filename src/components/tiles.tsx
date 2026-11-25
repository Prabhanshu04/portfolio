import Link from "next/link";
import { ArrowUpRight, RotateCw } from "lucide-react";
import type { CSSProperties } from "react";
import { FILTER_COLOR, filterLabel } from "@/content/filters";
import type { LifeEntry } from "@/content/life";
import type { Project } from "@/content/projects";
import { contactHref, site } from "@/content/site";
import { cn, projectCode } from "@/lib/utils";
import { Tag } from "./ui/tag";

/**
 * Press behaviour (neobrutalism default): a clickable square sits raised with a
 * hard shadow and presses flat into the grid on hover or keyboard focus.
 */
const pressable =
  "press-tile group z-10 flex flex-col overflow-hidden outline-none transition-[translate,box-shadow] duration-150 " +
  "translate-x-reverseBoxShadowX translate-y-reverseBoxShadowY shadow-shadow " +
  "hover:translate-x-0 hover:translate-y-0 hover:shadow-none " +
  "focus-visible:translate-x-0 focus-visible:translate-y-0 focus-visible:shadow-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-inset";

const flattened = "press-tile z-0 flex flex-col overflow-hidden";

export function ProjectTile({ project, w, h, dimmed }: { project: Project; w: number; h: number; dimmed: boolean }) {
  const color = FILTER_COLOR[project.filters[0]];
  const caption = project.filters.slice(0, 2).map(filterLabel).join(" + ");
  const name = project.tileTitle ?? project.title;
  const big = w >= 2 && h >= 2;

  // Hover subdivision: two squares per cell across, two per cell down
  const cols = w * 2;
  const rows = h * 2;
  const squares = Array.from({ length: cols * rows }, (_, i) => i);

  return (
    <Link
      href={`/work/${project.slug}`}
      scroll={false}
      aria-label={`${name}: open project`}
      tabIndex={dimmed ? -1 : undefined}
      aria-hidden={dimmed || undefined}
      className={cn(dimmed ? flattened : pressable)}
      style={{ background: dimmed ? "var(--secondary-background)" : color.bg, color: color.fg }}
    >
      <div className={cn("flex h-full flex-col p-3", dimmed && "opacity-25 grayscale")}>
        <div className="flex items-start justify-between">
          <Tag>{projectCode(project.number)}</Tag>
          <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" strokeWidth={1.75} />
        </div>

        <div className="relative my-2.5 min-h-0 flex-1">
          {/* Placeholder until the project graphic arrives */}
          <div className="flex h-full flex-col justify-center border border-dashed border-current px-3">
            <p
              className={cn(
                "font-heading uppercase leading-[0.92] tracking-[-0.04em]",
                big ? "text-[clamp(1.6rem,2.6vw,2.3rem)]" : "text-[clamp(1.1rem,1.6vw,1.45rem)]",
              )}
            >
              {name}
            </p>
            {big && <p className="mt-3 max-w-[22ch] text-sm leading-snug opacity-80">{project.hook}</p>}
          </div>

          {/* Subdivision: the square splits into small squares, each with a project icon */}
          {!dimmed && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 grid gap-px bg-border opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
              style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)`, border: "1px solid var(--border)" }}
            >
              {squares.map((i) => {
                const Icon = project.icons[(i * 5 + Math.floor(i / cols)) % project.icons.length];
                const light = (i + Math.floor(i / cols)) % 2 === 0;
                return (
                  <div
                    key={i}
                    className="sub-square grid place-items-center"
                    style={{ "--i": i, background: light ? "var(--secondary-background)" : color.bg, color: light ? "#000" : color.fg } as CSSProperties}
                  >
                    <Icon className="size-[clamp(16px,1.6vw,22px)]" strokeWidth={1.75} />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <p className="truncate font-mono text-[11px] uppercase tracking-wide">{caption}</p>
      </div>
    </Link>
  );
}

export function LifeTile({ entry, dimmed }: { entry: LifeEntry; dimmed: boolean }) {
  const Icon = entry.icon;
  return (
    <Link
      href={`/life/${entry.slug}`}
      scroll={false}
      aria-label={`${entry.title}: open`}
      tabIndex={dimmed ? -1 : undefined}
      aria-hidden={dimmed || undefined}
      className={cn(dimmed ? flattened : pressable)}
      style={{ background: dimmed ? "var(--secondary-background)" : entry.bg, color: entry.fg }}
    >
      <div className={cn("flex h-full flex-col p-3", dimmed && "opacity-25 grayscale")}>
        <div className="flex items-start justify-between">
          <Tag>Life</Tag>
          <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" strokeWidth={1.75} />
        </div>
        <div className="grid flex-1 place-items-center">
          <Icon className="size-10 transition-transform duration-200 group-hover:scale-110 lg:size-12" strokeWidth={1.5} />
        </div>
        <p className="font-mono text-[11px] uppercase leading-tight tracking-wide">{entry.title}</p>
      </div>
    </Link>
  );
}

export function ContentTile({ id }: { id: "reminder" | "status" | "behind" | "talk" }) {
  if (id === "talk") {
    return (
      <a href={contactHref} className={pressable} style={{ background: "var(--main)" }}>
        <div className="flex h-full justify-between p-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide">{site.talk.kicker}</p>
            <p className="mt-3 font-heading text-[2.1rem] uppercase leading-[0.9] tracking-[-0.045em]">
              {site.talk.lines[0]}
              <br />
              {site.talk.lines[1]}
            </p>
          </div>
          <ArrowUpRight className="size-12 shrink-0 transition-transform group-hover:rotate-45" strokeWidth={1.25} />
        </div>
      </a>
    );
  }

  if (id === "behind") {
    return (
      <section className="flex h-full flex-col justify-between bg-secondary-background p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide">{site.behind.kicker}</p>
        <p className="text-[15px] leading-snug">
          {site.behind.body.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-wide">{site.behind.foot} ↗</p>
      </section>
    );
  }

  const block = id === "reminder" ? site.reminder : site.status2;
  const dark = id === "status";
  return (
    <section
      className={cn("flex h-full flex-col justify-between p-4", dark ? "bg-foreground text-white" : "bg-chart-4 text-black")}
    >
      <p className="font-mono text-[11px] uppercase tracking-wide">{block.kicker}</p>
      <p className="font-heading text-[clamp(1.5rem,2.6vw,2.05rem)] uppercase leading-[0.92] tracking-[-0.045em]">
        {block.lines[0]}
        <br />
        {block.lines[1]}
      </p>
      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide">
        {block.foot}
        {id === "reminder" && <RotateCw className="size-3.5" />}
      </p>
    </section>
  );
}
