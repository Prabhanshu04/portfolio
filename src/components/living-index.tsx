"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { FILTERS, type FilterId } from "@/content/filters";
import { slots, type Slot } from "@/content/layout";
import { getLife, life } from "@/content/life";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { cn, pad } from "@/lib/utils";
import { buttonClass } from "./ui/button";
import { ContentTile, DeckTile, LifeTile, PartnersRail, ProjectTile } from "./tiles";

type Active = FilterId | "all";

const COLS = 8;

const span = (s: Slot) => ({ w: "w" in s && s.w ? s.w : 1, h: "h" in s && s.h ? s.h : 1 });

function place(c: number, r: number, w = 1, h = 1): CSSProperties {
  return { "--c": c, "--r": r, "--w": w, "--h": h } as CSSProperties;
}

/** Desktop cells in rows [from, to] that no slot covers. */
function freeCells(list: Slot[], from: number, to: number) {
  const taken = new Set<string>();
  for (const s of list) {
    const { w, h } = span(s);
    for (let x = 0; x < w; x++) for (let y = 0; y < h; y++) taken.add(`${s.c + x}:${s.r + y}`);
  }
  const free: { c: number; r: number }[] = [];
  for (let r = from; r <= to; r++) for (let c = 1; c <= COLS; c++) if (!taken.has(`${c}:${r}`)) free.push({ c, r });
  return free;
}

// The last row closes the index (Let's talk, Worked with). Everything above is the body.
const footRow = Math.max(...slots.map((s) => s.r));
const bodySlots = slots.filter((s) => s.r < footRow);
const footSlots = slots.filter((s) => s.r === footRow);
const bodyFree = freeCells(bodySlots, 1, footRow - 1);
const footFree = freeCells(footSlots, footRow, footRow);

// Projects placed in the layout are the featured grid; the rest form the deck.
const placed = new Set(slots.flatMap((s) => (s.kind === "project" ? [s.slug] : [])));
const deck = projects.filter((p) => !placed.has(p.slug)).sort((a, b) => a.number - b.number);

export function LivingIndex() {
  const [active, setActive] = useState<Active>("all");
  const [open, setOpen] = useState(false);

  const counts = useMemo(() => {
    const m = new Map<Active, number>([["all", projects.length + life.length]]);
    for (const f of FILTERS) {
      m.set(f.id, f.id === "life" ? life.length : projects.filter((p) => p.filters.includes(f.id)).length);
    }
    return m;
  }, []);

  const visibleFilters = FILTERS.filter((f) => (counts.get(f.id) ?? 0) > 0);
  const filtering = active !== "all";
  const isOn = (filters: FilterId[]) => !filtering || filters.includes(active);

  // A filter pulls its matching deck projects into the grid (and the deck steps aside);
  // without a filter, the deck deals everything out when opened.
  const dealt = filtering ? deck.filter((p) => p.filters.includes(active)) : open ? deck : [];

  const renderSlot = (s: Slot, i: number, rowShift = 0) => {
    const { w, h } = span(s);
    const style = place(s.c, s.r - rowShift, w, h);
    switch (s.kind) {
      case "project": {
        const p = getProject(s.slug);
        if (!p) return null;
        return (
          <div key={s.slug} className="cell" style={style}>
            <ProjectTile project={p} w={w} h={h} dimmed={!isOn(p.filters)} />
          </div>
        );
      }
      case "life": {
        const e = getLife(s.slug);
        if (!e) return null;
        return (
          <div key={s.slug} className="cell" style={style}>
            <LifeTile entry={e} dimmed={!isOn(["life"])} />
          </div>
        );
      }
      case "content":
        return (
          <div key={s.id} className="cell" style={style}>
            <ContentTile id={s.id} />
          </div>
        );
      case "partners":
        return (
          <div key="partners" className="cell" style={style}>
            <PartnersRail />
          </div>
        );
      case "deck":
        if (deck.length === 0) return null;
        if (filtering) {
          return <div key="deck" aria-hidden className="cell cell-desktop-only bg-background" style={style} />;
        }
        return (
          <div key="deck" className="cell" style={style}>
            <DeckTile
              count={deck.length}
              first={deck[0].number}
              last={deck[deck.length - 1].number}
              open={open}
              onToggle={() => setOpen((o) => !o)}
            />
          </div>
        );
      default:
        return (
          <div
            key={`b${i}`}
            aria-hidden
            className={cn("cell", !s.mobile && "cell-desktop-only")}
            style={{ ...style, background: s.tone === "cream" ? "var(--background)" : "var(--secondary-background)" }}
          />
        );
    }
  };

  // Dealt projects are 2×1 tiles; pad the last row so the grid never shows a hole.
  const n = dealt.length;
  const tabletPads = n % 2; // 4 columns = 2 tiles a row
  const desktopPads = (4 - (n % 4)) % 4; // 8 columns = 4 tiles a row
  const pads = Math.max(tabletPads, desktopPads);

  return (
    <>
      {/* Filter bar */}
      <nav
        aria-label="Filter the index"
        className="flex flex-col gap-3 border-x-[length:var(--line)] border-border bg-secondary-background px-3 py-5 sm:px-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="-mx-3 flex gap-3 overflow-x-auto px-3 pt-1 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          <FilterChip label="All" count={counts.get("all")!} on={!filtering} onClick={() => setActive("all")} />
          {visibleFilters.map((f) => (
            <FilterChip
              key={f.id}
              label={f.label}
              count={counts.get(f.id)!}
              on={active === f.id}
              onClick={() => setActive(active === f.id ? "all" : f.id)}
            />
          ))}
        </div>
        <p className="hidden shrink-0 font-mono text-xs uppercase tracking-wide lg:block">{site.filterNote} ↓</p>
      </nav>

      {/* Featured grid */}
      <div className="index-grid">
        {bodySlots.map((s, i) => renderSlot(s, i))}
        {bodyFree.map((f) => (
          <div key={`f${f.c}-${f.r}`} aria-hidden className="cell cell-desktop-only bg-secondary-background" style={place(f.c, f.r)} />
        ))}
      </div>

      {/* Dealt from the deck */}
      {n > 0 && (
        <div id="more-projects" className="index-grid index-grid-join" aria-label="More projects">
          {dealt.map((p, i) => (
            <div key={p.slug} className="cell cell-flow deal-in" style={{ "--w": 2, "--h": 1, "--deal": `${Math.min(i, 12) * 45}ms` } as CSSProperties}>
              <ProjectTile project={p} w={2} h={1} dimmed={false} />
            </div>
          ))}
          {Array.from({ length: pads }, (_, i) => (
            <div
              key={`pad${i}`}
              aria-hidden
              className={cn(
                "cell cell-flow hidden bg-background",
                i < tabletPads ? "sm:block" : "sm:hidden",
                i < desktopPads ? "lg:block" : "lg:hidden",
              )}
              style={{ "--w": 2, "--h": 1 } as CSSProperties}
            />
          ))}
        </div>
      )}
      {open && !filtering && (
        <p className="sr-only" role="status">
          {n} more projects added to the grid.
        </p>
      )}

      {/* Closing row */}
      <div className="index-grid index-grid-join">
        {footSlots.map((s, i) => renderSlot(s, i, footRow - 1))}
        {footFree.map((f) => (
          <div
            key={`ff${f.c}`}
            aria-hidden
            className="cell cell-desktop-only bg-secondary-background"
            style={place(f.c, f.r - (footRow - 1))}
          />
        ))}
      </div>
    </>
  );
}

function FilterChip({ label, count, on, onClick }: { label: string; count: number; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={buttonClass(on ? "default" : "neutral", "default", "h-10 shrink-0 gap-2 px-3.5 text-[12px]")}
    >
      {label}
      <span className="font-mono font-normal">{pad(count)}</span>
    </button>
  );
}
