import type { LucideIcon } from "lucide-react";
import { BookOpen, FileText, Footprints, Music, PenLine } from "lucide-react";

/** The small "Life" tiles from the Figma grid (the Recreation side). */
export type LifeEntry = {
  slug: string;
  title: string;
  icon: LucideIcon;
  bg: string;
  fg: string;
  note: string;
};

export const life: LifeEntry[] = [
  { slug: "currently-reading", title: "Currently reading", icon: BookOpen, bg: "var(--chart-2)", fg: "#000", note: "The books on my desk right now." },
  { slug: "loose-ends", title: "Loose ends", icon: PenLine, bg: "var(--secondary-background)", fg: "#000", note: "Half-finished ideas and sketches." },
  { slug: "out-of-office", title: "Out of office", icon: Footprints, bg: "var(--chart-4)", fg: "#000", note: "Where I go when I’m not designing." },
  { slug: "on-repeat", title: "On repeat", icon: Music, bg: "#000", fg: "#fff", note: "What’s playing while I work." },
  { slug: "notes-to-self", title: "Notes to self", icon: FileText, bg: "var(--main)", fg: "#000", note: "Short essays and reminders." },
];

export const getLife = (slug: string) => life.find((l) => l.slug === slug);
