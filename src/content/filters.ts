// Filter ids follow the portfolio style guide (portfolio/00-style-guide.md).
// The first filter of a project sets its tile colour.

export type FilterId =
  | "research"
  | "strategy"
  | "service-design"
  | "programming"
  | "ai"
  | "machine-learning"
  | "agent"
  | "architecture"
  | "life";

export const FILTERS: { id: FilterId; label: string }[] = [
  { id: "service-design", label: "Service design" },
  { id: "strategy", label: "Strategy" },
  { id: "ai", label: "AI" },
  { id: "research", label: "Research" },
  { id: "agent", label: "Agent" },
  { id: "machine-learning", label: "Machine learning" },
  { id: "programming", label: "Vibe code" },
  { id: "architecture", label: "Architecture" },
  { id: "life", label: "Life" },
];

export const filterLabel = (id: FilterId) =>
  FILTERS.find((f) => f.id === id)?.label ?? id;

/** Tile colour per primary filter — all from the fuchsia palette. */
export const FILTER_COLOR: Record<FilterId, { bg: string; fg: string }> = {
  "service-design": { bg: "var(--main)", fg: "#000" },
  strategy: { bg: "var(--chart-2)", fg: "#000" },
  ai: { bg: "var(--chart-3)", fg: "#000" },
  research: { bg: "var(--chart-5)", fg: "#000" },
  agent: { bg: "#000", fg: "#fff" },
  "machine-learning": { bg: "var(--background)", fg: "#000" },
  programming: { bg: "var(--secondary-background)", fg: "#000" },
  architecture: { bg: "var(--chart-4)", fg: "#000" },
  life: { bg: "var(--secondary-background)", fg: "#000" },
};
