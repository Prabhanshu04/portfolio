import { deckSpreads } from "./deck";
import { featuredSpreads } from "./featured";
import type { Spread } from "./types";

export * from "./types";

const spreads: Record<string, Spread> = { ...featuredSpreads, ...deckSpreads };

export const getSpread = (slug: string): Spread | undefined => spreads[slug];
