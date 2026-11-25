import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LifeSpread } from "@/components/project-spread";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { buttonClass } from "@/components/ui/button";
import { getLife, life } from "@/content/life";

export function generateStaticParams() {
  return life.map((l) => ({ slug: l.slug }));
}

export default async function LifePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getLife(slug);
  if (!entry) notFound();
  return (
    <div className="px-3 sm:px-6 lg:px-12">
      <SiteHeader />
      <main className="mx-auto mt-6 w-full max-w-[768px] border-2 border-border bg-secondary-background shadow-[6px_6px_0_0_var(--border)]">
        <div className="flex items-center justify-between border-b-2 border-border px-5 py-3 sm:px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-wide">Life</p>
          <Link href="/" className={buttonClass("neutral", "sm")}>
            <ArrowLeft className="size-4" /> The index
          </Link>
        </div>
        <LifeSpread entry={entry} />
      </main>
      <SiteFooter />
    </div>
  );
}
