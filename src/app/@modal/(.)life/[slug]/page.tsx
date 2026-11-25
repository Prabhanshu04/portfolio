import { notFound } from "next/navigation";
import { LifeSpread } from "@/components/project-spread";
import { SpreadDialog } from "@/components/spread-dialog";
import { getLife, life } from "@/content/life";

export function generateStaticParams() {
  return life.map((l) => ({ slug: l.slug }));
}

export default async function LifeModal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getLife(slug);
  if (!entry) notFound();
  return (
    <SpreadDialog label="Life" title={entry.title}>
      <LifeSpread entry={entry} />
    </SpreadDialog>
  );
}
