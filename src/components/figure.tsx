import fs from "node:fs";
import path from "node:path";
import { ChartColumn, ImageIcon } from "lucide-react";
import type { Figure } from "@/content/spreads";
import { Chart } from "./charts";

const EXTS = ["webp", "png", "jpg", "jpeg", "svg", "gif"];

/** Finds public/work/<slug>/<id>.<ext> at build time; null until the file exists. */
function graphicFile(slug: string, id: string) {
  for (const ext of EXTS) {
    const rel = `/work/${slug}/${id}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}

const RATIO = { wide: "16 / 7", landscape: "16 / 10", square: "1 / 1" } as const;

export function SpreadFigure({ slug, figure }: { slug: string; figure: Figure }) {
  if (figure.kind === "chart") {
    return (
      <figure className="my-6 border-2 border-border bg-secondary-background p-4 shadow-shadow sm:p-5">
        <p className="font-heading text-lg leading-tight tracking-[-0.02em]">{figure.title}</p>
        <p className="mt-1 mb-5 text-sm leading-snug text-foreground/75">{figure.caption}</p>
        <Chart spec={figure.chart} />
      </figure>
    );
  }

  const file = graphicFile(slug, figure.id);
  const ratio = RATIO[figure.ratio ?? "landscape"];
  const square = figure.ratio === "square";

  return (
    <figure className={square ? "my-6 max-w-[440px]" : "my-6"}>
      {file ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={file} alt={figure.title} loading="lazy" className="block h-auto w-full border-2 border-border bg-secondary-background" />
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border bg-background/50 px-6 py-5 text-center"
          style={{ aspectRatio: ratio }}
        >
          {figure.chart ? <ChartColumn className="size-9" strokeWidth={1.5} /> : <ImageIcon className="size-9" strokeWidth={1.5} />}
          <p className="font-mono text-[11px] font-bold uppercase tracking-wide">
            [ {figure.chart ? "Chart · needs the numbers" : `Graphic ${figure.id} · to make`} ]
          </p>
          <p className="max-w-[46ch] text-sm leading-snug">{figure.note}</p>
          <p className="font-mono text-[11px] text-foreground/60">
            public/work/{slug}/{figure.id}.webp
          </p>
        </div>
      )}
      <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-wide">
        Fig. {figure.id} — {figure.title}
      </figcaption>
    </figure>
  );
}
