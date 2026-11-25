import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ProjectSpread, readingMinutes } from "@/components/project-spread";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { buttonClass } from "@/components/ui/button";
import { getProject, projects } from "@/content/projects";
import { pad, WPM } from "@/lib/utils";

export function generateStaticParams() {
  // Reading-time budget: every spread must stay under a 2-minute read.
  for (const p of projects) {
    const { words } = readingMinutes(p);
    if (words > 2 * WPM) {
      console.warn(`⚠ "${p.title}" is ${words} words (~${(words / WPM).toFixed(1)} min). Budget: ${2 * WPM} words / 2 min.`);
    }
  }
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? { title: p.title, description: p.hook } : {};
}

/** Direct link / refresh: the same spread as a full page. */
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <div className="px-3 sm:px-6 lg:px-12">
      <SiteHeader />
      <main className="mx-auto mt-6 w-full max-w-[768px] border-2 border-border bg-secondary-background shadow-[6px_6px_0_0_var(--border)]">
        <div className="flex items-center justify-between border-b-2 border-border px-5 py-3 sm:px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-wide">Work / {pad(project.number)}</p>
          <Link href="/" className={buttonClass("neutral", "sm")}>
            <ArrowLeft className="size-4" /> The index
          </Link>
        </div>
        <ProjectSpread project={project} />
      </main>
      <SiteFooter />
    </div>
  );
}
