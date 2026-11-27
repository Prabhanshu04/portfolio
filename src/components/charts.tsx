import type { ChartSpec } from "@/content/spreads";
import { cn } from "@/lib/utils";

/*
 * Charts in the neobrutalist theme: black 2px outlines, flat brand colours,
 * mono labels, every value written next to its mark.
 *
 * Series colours run in a fixed order: periwinkle, orange, yellow. This order
 * keeps neighbours apart for colour-blind readers (fuchsia and periwinkle
 * would read as the same colour, so fuchsia isn't used for data).
 */
const SERIES = ["var(--chart-5)", "var(--chart-3)", "var(--chart-2)"];
const DOWN = "var(--chart-5)";
const UP = "var(--chart-3)";
/** One hue, light → dark, for ordered steps (nested market sizes). */
const ORDINAL = ["#e3e5ff", "#b8bcff", "#7a83ff", "#3b45d1"];

const fmt = (v: number, decimals?: number) =>
  decimals !== undefined ? v.toFixed(decimals) : Number.isInteger(v) ? String(v) : v.toFixed(1);

export function Chart({ spec }: { spec: ChartSpec }) {
  if (spec.type === "bars") return <Bars spec={spec} />;
  if (spec.type === "nested") return <Nested spec={spec} />;
  return <Spans spec={spec} />;
}

function Legend({ items }: { items: { label: string; color: string }[] }) {
  return (
    <ul className="mb-4 flex flex-wrap gap-x-4 gap-y-2" aria-label="Legend">
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide">
          <span className="size-3.5 shrink-0 rounded-[3px] border-2 border-border" style={{ background: it.color }} />
          {it.label}
        </li>
      ))}
    </ul>
  );
}

function Bars({ spec }: { spec: Extract<ChartSpec, { type: "bars" }> }) {
  const min = spec.min ?? 0;
  const span = spec.max - min;
  const pos = (v: number) => ((v - min) / span) * 100;
  const zero = pos(0);
  const multi = spec.series.length > 1;

  return (
    <div>
      {multi && <Legend items={spec.series.map((s, i) => ({ label: s, color: SERIES[i] }))} />}
      <div className="space-y-4">
        {spec.rows.map((row) => (
          <div key={row.label} className="grid gap-x-4 gap-y-1.5 sm:grid-cols-[11rem_1fr] sm:items-center">
            <p className="text-sm leading-snug">{row.label}</p>
            <div className={cn("relative space-y-0.5", spec.signed ? "mx-12" : "mr-12")}>
              {/* baseline */}
              <span aria-hidden className="absolute inset-y-[-4px] w-0.5 bg-border" style={{ left: `${zero}%` }} />
              {row.values.map((v, i) => {
                const start = v < 0 ? pos(v) : zero;
                const width = Math.abs(pos(v) - zero);
                const color = spec.signed ? (v < 0 ? DOWN : UP) : SERIES[i];
                const shown = row.display?.[i] ?? fmt(v, spec.decimals);
                const name = multi ? `${spec.series[i]}: ` : "";
                return (
                  <div key={i} className="relative h-[22px]">
                    <span
                      title={`${row.label} · ${name}${shown}`}
                      className={cn(
                        "absolute inset-y-0 border-2 border-border",
                        v < 0 ? "rounded-l-[4px]" : "rounded-r-[4px]",
                      )}
                      style={{ left: `${start}%`, width: `max(${width}%, 4px)`, background: color }}
                    />
                    <span
                      className="absolute top-1/2 -translate-y-1/2 font-mono text-xs font-bold whitespace-nowrap"
                      style={
                        v < 0
                          ? { right: `calc(${100 - start}% + 6px)` }
                          : { left: `calc(${start + width}% + 6px)` }
                      }
                    >
                      {multi && <span className="sr-only">{spec.series[i]}: </span>}
                      {shown}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-foreground/70">{spec.scaleNote}</p>
      <Numbers
        head={["", ...spec.series]}
        rows={spec.rows.map((r) => [r.label, ...r.values.map((v, i) => r.display?.[i] ?? fmt(v, spec.decimals))])}
      />
    </div>
  );
}

function Nested({ spec }: { spec: Extract<ChartSpec, { type: "nested" }> }) {
  const R = 110;
  const top = Math.max(...spec.rows.map((r) => r.value));
  const radius = (v: number) => Math.sqrt(v / top) * R;
  const base = 2 * R + 4;
  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
        <svg viewBox={`0 0 ${2 * R + 8} ${2 * R + 8}`} className="w-full max-w-[240px] shrink-0" role="img" aria-label="Nested circles, area to scale">
          {spec.rows.map((r, i) => {
            const rr = radius(r.value);
            return (
              <circle key={r.label} cx={R + 4} cy={base - rr} r={rr} fill={ORDINAL[i % ORDINAL.length]} stroke="#000" strokeWidth={2}>
                <title>{`${r.display} · ${r.label}`}</title>
              </circle>
            );
          })}
        </svg>
        <ol className="space-y-2.5">
          {spec.rows.map((r, i) => (
            <li key={r.label} className="flex items-baseline gap-3">
              <span className="relative top-0.5 size-3.5 shrink-0 rounded-full border-2 border-border" style={{ background: ORDINAL[i % ORDINAL.length] }} />
              <span className="font-heading text-lg leading-none">{r.display}</span>
              <span className="text-sm leading-snug">{r.label}</span>
            </li>
          ))}
        </ol>
      </div>
      <Numbers head={["", "Market size"]} rows={spec.rows.map((r) => [r.label, r.display])} />
    </div>
  );
}

function Spans({ spec }: { spec: Extract<ChartSpec, { type: "spans" }> }) {
  const pos = (v: number) => (v / spec.max) * 100;
  return (
    <div>
      <div className="space-y-4">
        {/* axis */}
        <div className="grid gap-x-4 sm:grid-cols-[11rem_1fr]">
          <span className="hidden sm:block" />
          <div className="relative mr-6 h-4 font-mono text-[11px] text-foreground/70">
            {spec.ticks.map((t) => (
              <span key={t} className="absolute -translate-x-1/2" style={{ left: `${pos(t)}%` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        {spec.rows.map((r) => (
          <div key={r.label} className="grid gap-x-4 gap-y-1.5 sm:grid-cols-[11rem_1fr] sm:items-center">
            <div>
              <p className="text-sm font-bold leading-snug">{r.label}</p>
              <p className="text-xs leading-snug text-foreground/75">{r.note}</p>
            </div>
            <div className="relative mr-6 h-[26px]">
              {spec.ticks.map((t) => (
                <span key={t} aria-hidden className="absolute inset-y-0 w-px bg-border/15" style={{ left: `${pos(t)}%` }} />
              ))}
              <span
                title={`${r.label}: ${r.from}–${r.to} ${spec.unit}`}
                className="absolute inset-y-0 flex items-center justify-center rounded-[4px] border-2 border-border font-mono text-[11px] font-bold"
                style={{ left: `${pos(r.from)}%`, width: `${pos(r.to) - pos(r.from)}%`, background: SERIES[0] }}
              >
                {r.from}–{r.to}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-foreground/70">Time from launch, in {spec.unit}</p>
      <Numbers head={["", `From (${spec.unit})`, `To (${spec.unit})`]} rows={spec.rows.map((r) => [r.label, String(r.from), String(r.to)])} />
    </div>
  );
}

/** The numbers behind every chart, as a table. */
function Numbers({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <details className="mt-3 font-mono text-xs">
      <summary className="w-fit uppercase tracking-wide underline decoration-2 underline-offset-4 hover:bg-main">See the numbers</summary>
      <table className="mt-3 w-full border-collapse text-left">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} className="border-2 border-border bg-background px-2 py-1.5 font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i} className="border-2 border-border px-2 py-1.5">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
}
