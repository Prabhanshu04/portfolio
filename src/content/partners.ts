/**
 * Organisations shown in the "Worked with" rail, the tile hover caption and
 * the project spread.
 *
 * Logos: drop an SVG (or PNG) in public/logos/ and set `logo`, e.g.
 * logo: "/logos/tu-delft.svg". Without a logo the name is set as a wordmark.
 */
export type PartnerId =
  | "tu-delft"
  | "aaif"
  | "erasmus-mc"
  | "juvoly"
  | "ksia"
  | "toto"
  | "spa-vijayawada"
  | "nasa-india"
  | "red-cross"
  | "efteling";

export type Partner = { id: PartnerId; name: string; short?: string; logo?: string };

export const partners: Partner[] = [
  { id: "tu-delft", name: "TU Delft" },
  { id: "aaif", name: "Amsterdam AI Factory", short: "AAiF" },
  { id: "toto", name: "TOTO" },
  { id: "ksia", name: "KSIA" },
  { id: "red-cross", name: "Red Cross" },
  { id: "efteling", name: "Efteling" },
  { id: "erasmus-mc", name: "Erasmus MC" },
  { id: "juvoly", name: "Juvoly" },
  { id: "spa-vijayawada", name: "SPA Vijayawada" },
  { id: "nasa-india", name: "NASA India" },
];

export const getPartner = (id: PartnerId) => partners.find((p) => p.id === id);

/** "TU Delft × TOTO" — short names keep tile captions on one line. */
export const partnerLine = (ids: PartnerId[], short = false) =>
  ids
    .map(getPartner)
    .filter(Boolean)
    .map((p) => (short && p!.short) || p!.name)
    .join(" × ");
