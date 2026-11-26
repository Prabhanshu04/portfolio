import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FILTER_COLOR, filterLabel } from "@/content/filters";
import type { LifeEntry } from "@/content/life";
import { partnerLine } from "@/content/partners";
import { coverOf, projects, STORY_SECTIONS, type Project } from "@/content/projects";
import { FeaturedSticker } from "./tiles";
import { countWords, pad, WPM } from "@/lib/utils";
import { buttonClass } from "./ui/button";
import { Tag } from "./ui/tag";

export function readingMinutes(p: Project) {
  const words = countWords(p.hook, p.about, ...p.results, ...Object.values(p.story));
  return { words, minutes: Math.max(1, Math.round(words / WPM)) };
}

/** The project "spread": used inside the pop-up and on the full /work page. */
export function ProjectSpread({ project, inModal = false }: { project: Project; inModal?: boolean }) {
  const color = FILTER_COLOR[project.filters[0]];
  const cover = coverOf(project);
  const { minutes } = readingMinutes(project);
  const i = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
    <article>
      {/* Cover band */}
      <div className="border-b-2 border-border p-6 sm:p-10" style={{ background: color.bg }}>
        <div className="relative aspect-[16/10] overflow-hidden border-2 border-border bg-secondary-background">
          <Image
            src={cover}
            alt={`Cover graphic for ${project.title}`}
            fill
            sizes="(min-width: 768px) 690px, 100vw"
            unoptimized={cover.endsWith(".svg")}
            className="object-cover"
            priority={inModal}
          />
        </div>
      </div>

      <div className="px-6 py-8 sm:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-xs uppercase tracking-wide">
            {project.filters.slice(0, 2).map(filterLabel).join(" + ")}
          </p>
          {project.featured && <FeaturedSticker />}
        </div>
        <h2 className="mt-1 font-heading text-[clamp(1.9rem,4.5vw,2.6rem)] leading-[1.02] tracking-[-0.035em]">
          {project.title}
        </h2>
        <p className="mt-3 max-w-[38ch] text-xl leading-snug">{project.hook}</p>

        <p className="mt-5 font-mono text-xs uppercase leading-relaxed tracking-wide">
          {project.type} · {project.location} · {project.year} · ≈ {minutes} min read
        </p>
        {project.partners.length > 0 && (
          <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wide">With {partnerLine(project.partners)}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.filters.map((f) => (
            <Tag key={f} className="rounded-[4px] px-2.5 py-1.5 text-xs normal-case">
              {filterLabel(f)}
            </Tag>
          ))}
        </div>

        <p className="mt-7 max-w-[60ch] text-[17px] leading-relaxed">{project.about}</p>

        {/* Results */}
        <h3 className="mt-9 font-mono text-xs font-normal uppercase tracking-wide">Results</h3>
        <ol className="mt-3 grid gap-px border-2 border-border bg-border sm:grid-cols-2">
          {project.results.map((r, n) => (
            <li key={r} className="flex gap-3 bg-secondary-background p-4 text-[15px] leading-snug">
              <span className="font-mono text-xs">{pad(n + 1)}</span>
              <span>{r}</span>
            </li>
          ))}
        </ol>

        {/* Story: problem → results, distilled project by project */}
        <div className="mt-10 space-y-8">
          {STORY_SECTIONS.map((s, n) => {
            const text = project.story[s.key];
            return (
              <section key={s.key}>
                <h3 className="font-mono text-xs font-normal uppercase tracking-wide">
                  {pad(n + 1)} — {s.label}
                </h3>
                {text ? (
                  <p className="mt-2 max-w-[60ch] text-[17px] leading-relaxed">{text}</p>
                ) : (
                  <p className="mt-2 border border-dashed border-border/40 px-4 py-3 font-mono text-xs text-foreground/50">
                    [ ≈{s.budget} words · to be distilled from the write-up ]
                  </p>
                )}
              </section>
            );
          })}
        </div>

        <p className="mt-10 font-mono text-xs uppercase leading-relaxed tracking-wide">
          <span className="text-foreground/60">Skills · </span>
          {project.skills.join(" · ")}
        </p>

        {/* Prev / next */}
        <nav className="mt-10 flex flex-wrap justify-between gap-4 border-t-2 border-border pt-6" aria-label="More projects">
          <Link href={`/work/${prev.slug}`} replace={inModal} scroll={!inModal} className={buttonClass("neutral")}>
            <ArrowLeft className="size-4" /> {prev.tileTitle ?? prev.title}
          </Link>
          <Link href={`/work/${next.slug}`} replace={inModal} scroll={!inModal} className={buttonClass("default")}>
            {next.tileTitle ?? next.title} <ArrowRight className="size-4" />
          </Link>
        </nav>
      </div>
    </article>
  );
}

export function LifeSpread({ entry }: { entry: LifeEntry }) {
  const Icon = entry.icon;
  return (
    <article>
      <div className="grid place-items-center border-b-2 border-border py-14" style={{ background: entry.bg, color: entry.fg }}>
        <Icon className="size-20" strokeWidth={1.25} />
      </div>
      <div className="px-6 py-8 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-wide">Life</p>
        <h2 className="mt-1 font-heading text-[clamp(1.9rem,4.5vw,2.6rem)] leading-[1.02] tracking-[-0.035em]">{entry.title}</h2>
        <p className="mt-3 text-xl leading-snug">{entry.note}</p>
        <p className="mt-6 border border-dashed border-border/40 px-4 py-3 font-mono text-xs text-foreground/50">
          [ this corner is still being written ]
        </p>
      </div>
    </article>
  );
}
