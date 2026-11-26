/**
 * Placement of every square in the Living Index, on the 8-column desktop grid.
 * c = column (1–8), r = row (1 = first row under the filter bar),
 * w / h = how many cells it spans.
 *
 * Rows 1–4 and the last row follow the Figma frame "Comic Portfolio
 * Wireframe". Rows 5–7 hold projects 05–10 in the same rhythm until the
 * lo-fi for them is drawn.
 *
 * The order of this list is also the order on phones and tablets, where
 * tiles flow into 2 or 4 columns.
 *
 * Any desktop cell not listed here is filled with a plain white square.
 *
 * Projects placed here are the featured grid. Every other project goes into
 * the "Explore more" deck and is dealt into the grid (as 2×1 tiles, after
 * the last body row) when the deck is opened or a filter matches it.
 * The last row is the closing row (Let's talk, Worked with).
 */
export type Slot =
  | { kind: "project"; slug: string; c: number; r: number; w: number; h: number }
  | { kind: "life"; slug: string; c: number; r: number }
  | { kind: "content"; id: "reminder" | "status" | "behind" | "talk"; c: number; r: number; w: number; h: number }
  | { kind: "partners"; c: number; r: number; w: number; h: number }
  | { kind: "deck"; c: number; r: number; w: number; h: number }
  | { kind: "blank"; tone: "white" | "cream"; c: number; r: number; w?: number; h?: number; mobile?: boolean };

export const slots: Slot[] = [
  // Row 1–2 (Figma)
  { kind: "project", slug: "visual-bypass", c: 1, r: 1, w: 2, h: 2 },
  { kind: "life", slug: "currently-reading", c: 4, r: 1 },
  { kind: "project", slug: "livenworld", c: 5, r: 1, w: 2, h: 1 },
  { kind: "blank", tone: "cream", c: 7, r: 1 },
  { kind: "life", slug: "loose-ends", c: 8, r: 1 },
  { kind: "content", id: "reminder", c: 4, r: 2, w: 2, h: 1 },
  { kind: "life", slug: "out-of-office", c: 6, r: 2 },
  { kind: "blank", tone: "cream", c: 8, r: 2, mobile: true },

  // Row 3–4 (Figma)
  { kind: "project", slug: "careconnect", c: 1, r: 3, w: 2, h: 1 },
  { kind: "life", slug: "on-repeat", c: 3, r: 3 },
  { kind: "project", slug: "ksia", c: 5, r: 3, w: 2, h: 2 },
  { kind: "content", id: "status", c: 7, r: 3, w: 2, h: 1 },
  { kind: "life", slug: "notes-to-self", c: 1, r: 4 },
  { kind: "blank", tone: "cream", c: 3, r: 4 },
  { kind: "content", id: "behind", c: 7, r: 4, w: 2, h: 1 },

  // Row 5–7: projects 05–10 (placeholder composition)
  { kind: "project", slug: "toto-stream", c: 1, r: 5, w: 2, h: 1 },
  { kind: "project", slug: "sampoorna", c: 4, r: 5, w: 2, h: 2 },
  { kind: "blank", tone: "cream", c: 6, r: 5 },
  { kind: "project", slug: "unlearn", c: 7, r: 5, w: 2, h: 1 },
  { kind: "blank", tone: "cream", c: 1, r: 6 },
  { kind: "project", slug: "ava", c: 2, r: 6, w: 2, h: 1 },
  { kind: "project", slug: "onevibe", c: 6, r: 6, w: 2, h: 1 },
  { kind: "project", slug: "umang", c: 1, r: 7, w: 2, h: 1 },
  { kind: "blank", tone: "cream", c: 4, r: 7 },
  // "Explore more": every project not placed above sits in this deck
  { kind: "deck", c: 5, r: 7, w: 2, h: 1 },
  { kind: "blank", tone: "cream", c: 7, r: 7 },

  // Last row (Figma)
  { kind: "content", id: "talk", c: 2, r: 8, w: 2, h: 1 },
  { kind: "blank", tone: "cream", c: 4, r: 8 },
  { kind: "partners", c: 5, r: 8, w: 4, h: 1 },
];
