import { HeroRow } from "@/components/hero-row";
import { LivingIndex } from "@/components/living-index";
import { Frame, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="px-3 sm:px-6 lg:px-12">
      <SiteHeader />
      <main>
        <Frame>
          <div className="mb-3 flex flex-wrap justify-between gap-2 font-mono text-[11px] uppercase tracking-wide sm:text-xs">
            <p>{site.indexTitle}</p>
            <p>{site.indexVolume}</p>
          </div>
          <HeroRow />
          <LivingIndex />
          <div className="mt-3 flex flex-wrap justify-between gap-2 font-mono text-[11px] uppercase tracking-wide sm:text-xs">
            <p>{site.indexFootLeft}</p>
            <p>{site.indexFootRight} ↗</p>
          </div>
        </Frame>
      </main>
      <SiteFooter />
    </div>
  );
}
