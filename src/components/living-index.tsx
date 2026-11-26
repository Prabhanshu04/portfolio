"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { FILTERS, type FilterId } from "@/content/filters";
import { slots } from "@/content/layout";
import { getLife } from "@/content/life";
import { getProject, projects } from "@/content/projects";
import { life } from "@/content/life";
import { site } from "@/content/site";
import { cn, pad } from "@/lib/utils";
import { buttonClass } from "./ui/button";
import { ContentTile, LifeTile, PartnersRail, ProjectTile } from "./tiles";

type Active = FilterId | "all";

const COLS = 8;

function place(c: number, r: number, w = 1, h = 1): CSSProperties {
  return { "--c": c, "--r": r, "--w": w, "--h": h } as CSSProperties;
}

/** Desktop cells that no slot covers get a plain white square. */
function fillerCells() {
  const rows = Math.max(...slots.map((s) => s.r + ("h" in s && s.h ? s.h : 1) - 1));
  const taken = new Set<string>();
  for (const s of slots) {
    const w = "w" in s && s.w ? s.w : 1;
    const h = "h" in s && s.h ? s.h : 1;
    for (let x = 0; x < w; x++) for (let y = 0; y < h; y++) taken.add(`${s.c + x}:${s.r + y}`);
  }
  const free: { c: number; r: number }[] = [];
  for (let r = 1; r <= rows; r++) for (let c = 1; c <= COLS; c++) if (!taken.has(`${c}:${r}`)) free.push({ c, r });
  return free;
}

export function LivingIndex() {
  const [active, setActive] = useState<Active>("all");
  const fillers = useMemo(fillerCells, []);

  const counts = useMemo(() => {
    const m = new Map<Active, number>([["all", projects.length + life.length]]);
    for (const f of FILTERS) {
      m.set(f.id, f.id === "life" ? life.length : projects.filter((p) => p.filters.includes(f.id)).length);
    }
    return m;
  }, []);

  const visibleFilters = FILTERS.filter((f) => (counts.get(f.id) ?? 0) > 0);

  const isOn = (filters: FilterId[]) => active === "all" || filters.includes(active);

  return (
    <>
      {/* Filter bar */}
      <nav
        aria-label="Filter the index"
        className="flex flex-col gap-3 border-x-[length:var(--line)] border-border bg-secondary-background px-3 py-5 sm:px-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="-mx-3 flex gap-3 overflow-x-auto px-3 pt-1 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          <FilterChip label="All" count={counts.get("all")!} on={active === "all"} onClick={() => setActive("all")} />
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

      {/* The grid */}
      <div className="index-grid" aria-live="polite">
        {slots.map((s, i) => {
          if (s.kind === "project") {
            const p = getProject(s.slug);
            if (!p) return null;
            return (
              <div key={s.slug} className="cell" style={place(s.c, s.r, s.w, s.h)}>
                <ProjectTile project={p} w={s.w} h={s.h} dimmed={!isOn(p.filters)} />
              </div>
            );
          }
          if (s.kind === "life") {
            const e = getLife(s.slug);
            if (!e) return null;
            return (
              <div key={s.slug} className="cell" style={place(s.c, s.r)}>
                <LifeTile entry={e} dimmed={!isOn(["life"])} />
              </div>
            );
          }
          if (s.kind === "content") {
            return (
              <div key={s.id} className="cell" style={place(s.c, s.r, s.w, s.h)}>
                <ContentTile id={s.id} />
              </div>
            );
          }
          if (s.kind === "partners") {
            return (
              <div key="partners" className="cell" style={place(s.c, s.r, s.w, s.h)}>
                <PartnersRail />
              </div>
            );
          }
          return (
            <div
              key={`b${i}`}
              aria-hidden
              className={cn("cell", !s.mobile && "cell-desktop-only")}
              style={{ ...place(s.c, s.r, s.w, s.h), background: s.tone === "cream" ? "var(--background)" : "var(--secondary-background)" }}
            />
          );
        })}
        {fillers.map((f) => (
          <div
            key={`f${f.c}-${f.r}`}
            aria-hidden
            className="cell cell-desktop-only bg-secondary-background"
            style={place(f.c, f.r)}
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
