/**
 * The project "spread" (the pop-up): four short sections of text, each with
 * the figures that sit under it. Results come from the card (projects.ts).
 *
 * Graphics: each graphic has an id ("01", "02"…). Drop the file in
 *   public/work/<project-slug>/<id>.webp   (or .png .jpg .svg .gif)
 * and it replaces the placeholder automatically on the next build.
 */

export type ChartSpec =
  | {
      /** Horizontal bars. One bar per series in each row. */
      type: "bars";
      series: string[];
      rows: { label: string; values: number[]; display?: string[] }[];
      min?: number;
      max: number;
      /** Colour bars by sign (down = periwinkle, up = orange) instead of by series */
      signed?: boolean;
      scaleNote: string;
      /** Decimals to show on values (default: as written) */
      decimals?: number;
    }
  | {
      /** Nested circles, area proportional to value (market sizing). */
      type: "nested";
      rows: { label: string; value: number; display: string }[];
    }
  | {
      /** Spans on a time axis (roadmap horizons). */
      type: "spans";
      unit: string;
      max: number;
      ticks: number[];
      rows: { label: string; from: number; to: number; note: string }[];
    };

export type Figure =
  | {
      kind: "graphic";
      id: string;
      title: string;
      /** What to make: what it shows and where it comes from */
      note: string;
      ratio?: "wide" | "landscape" | "square";
      /** A chart that still needs its numbers (send them, or drop an image) */
      chart?: boolean;
    }
  | {
      kind: "chart";
      /** The finding, in one sentence */
      title: string;
      caption: string;
      chart: ChartSpec;
    };

export type Section = { text: string; figures?: Figure[] };

export type Spread = {
  problem: Section;
  context: Section;
  approach: Section;
  solution: Section;
  /** Figures shown with the results list */
  results?: Figure[];
};

export const SECTIONS = [
  { key: "problem", label: "Problem" },
  { key: "context", label: "Context" },
  { key: "approach", label: "Approach" },
  { key: "solution", label: "Solution" },
] as const;
