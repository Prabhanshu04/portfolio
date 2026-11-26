import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, RotateCw } from "lucide-react";
import type { CSSProperties } from "react";
import { FILTER_COLOR, filterLabel } from "@/content/filters";
import type { LifeEntry } from "@/content/life";
import { partnerLine, partners, type Partner } from "@/content/partners";
import { coverOf, type Project } from "@/content/projects";
import { contactHref, site } from "@/content/site";
import { cn, pad, projectCode } from "@/lib/utils";
import { starPoints } from "./star";
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

/** Deterministic scatter so squares drop away in a random-looking order. */
function scatter(n: number) {
  return Array.from({ length: n }, (_, i) => i)
    .map((i) => ({ i, k: (Math.imul(i + 1, 2654435761) >>> 0) % 9973 }))
    .sort((a, b) => a.k - b.k)
    .reduce<number[]>((order, { i }, rank) => ((order[i] = rank), order), []);
}

export function FeaturedSticker({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex -rotate-2 items-center gap-1 border border-border bg-foreground px-1.5 py-[3px] font-mono text-[11px] font-bold uppercase leading-none tracking-wide text-chart-2",
        className,
      )}
    >
      <svg viewBox="0 0 64 64" className="size-3" aria-hidden>
        <polygon points={starPoints()} fill="currentColor" />
      </svg>
      Now featured
    </span>
  );
}

export function ProjectTile({ project, w, h, dimmed }: { project: Project; w: number; h: number; dimmed: boolean }) {
  const color = FILTER_COLOR[project.filters[0]];
  const caption = project.filters.slice(0, 2).map(filterLabel).join(" + ");
  const withLine = partnerLine(project.partners, true);
  const name = project.tileTitle ?? project.title;
  const big = w >= 2 && h >= 2;
  const cover = coverOf(project);

  // The solid block splits into a grid of small squares that drop away on hover
  const cols = w * 3;
  const rows = h * 3;
  const n = cols * rows;
  const order = scatter(n);

  return (
    <Link
      href={`/work/${project.slug}`}
      scroll={false}
      aria-label={`${name}${project.featured ? " (now featured)" : ""}: open project`}
      tabIndex={dimmed ? -1 : undefined}
      aria-hidden={dimmed || undefined}
      className={cn(dimmed ? flattened : pressable)}
      style={{ background: dimmed ? "var(--secondary-background)" : color.bg, color: color.fg }}
    >
      <div className={cn("flex h-full flex-col p-3", dimmed && "opacity-25 grayscale")}>
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <Tag>{projectCode(project.number)}</Tag>
            {project.featured && <FeaturedSticker />}
          </div>
          <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:rotate-45" strokeWidth={1.75} />
        </div>

        <div className="relative my-2.5 min-h-0 flex-1 overflow-hidden">
          {!dimmed && (
            <>
              {/* Cover graphic, revealed on hover */}
              <Image
                src={cover}
                alt=""
                fill
                sizes="(min-width: 1024px) 300px, 50vw"
                unoptimized={cover.endsWith(".svg")}
                className="cover-img object-cover"
              />
              {/* The solid block, made of squares that drop away one after another */}
              <div
                aria-hidden
                className="absolute inset-0 grid"
                style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
              >
                {order.map((rank, i) => (
                  <span
                    key={i}
                    className="cover-square"
                    style={{ "--d": `${Math.round((rank / n) * 280)}ms`, background: color.bg } as CSSProperties}
                  />
                ))}
              </div>
              {/* Grid lines over the revealed graphic */}
              <div
                aria-hidden
                className="cover-lines absolute inset-0 border border-border"
                style={{ backgroundSize: `calc(100% / ${cols}) calc(100% / ${rows})` }}
              />
            </>
          )}

          <div className="cover-title relative flex h-full flex-col justify-center">
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
        </div>

        {/* Categories at rest; who it was with on hover */}
        <p className="relative h-[14px] font-mono text-[11px] uppercase leading-[14px] tracking-wide">
          <span className="block truncate transition-opacity duration-150 group-hover:opacity-0 group-focus-visible:opacity-0">
            {caption}
          </span>
          {withLine && !dimmed && (
            <span className="absolute inset-0 truncate opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
              With {withLine}
            </span>
          )}
        </p>
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

function PartnerMark({ partner }: { partner: Partner }) {
  if (partner.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={partner.logo} alt={partner.name} className="h-9 w-auto max-w-none" />
    );
  }
  return (
    <span className="font-heading text-[clamp(1.5rem,2.4vw,2rem)] whitespace-nowrap uppercase leading-none tracking-[-0.035em]">
      {partner.name}
    </span>
  );
}

/** "Worked with": a moving rail of partners. Pauses on hover; static with reduced motion. */
export function PartnersRail() {
  const row = (copy: number) => (
    <ul aria-hidden={copy === 1 || undefined} className="flex shrink-0 items-center">
      {partners.map((p) => (
        <li key={p.id} className="flex items-center gap-6 pr-6">
          <PartnerMark partner={p} />
          <svg viewBox="0 0 64 64" className="size-6 shrink-0" aria-hidden>
            <polygon points={starPoints()} fill="var(--main)" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label="Worked with" className="flex h-full flex-col justify-between overflow-hidden bg-secondary-background py-4">
      <p className="flex justify-between px-4 font-mono text-[11px] uppercase tracking-wide">
        <span>Worked with</span>
        <span>{pad(partners.length)} partners</span>
      </p>
      <div className="marquee overflow-hidden border-y-2 border-border bg-chart-2 py-3">
        <div className="marquee-track flex w-max">
          {row(0)}
          {row(1)}
        </div>
      </div>
      <p className="px-4 font-mono text-[11px] uppercase tracking-wide">Schools, studios and clients.</p>
    </section>
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
