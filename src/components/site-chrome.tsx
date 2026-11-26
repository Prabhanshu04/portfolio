import Link from "next/link";
import { contactHref, site } from "@/content/site";
import { StarLogo } from "./star";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1184px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 pt-6 sm:px-0 sm:pt-8">
      <Link href="/" className="group flex items-center gap-2" aria-label={`${site.name}, home`}>
        <StarLogo className="-my-2 size-[52px] shrink-0" />
        <span className="font-mono text-xs font-bold uppercase tracking-wide">{site.tagline}</span>
      </Link>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wide">
        <a href={contactHref} className="flex items-center gap-2 hover:underline">
          <span
            aria-hidden
            className="size-2.5 shrink-0 rounded-full border border-border bg-main"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
          />
          {site.status}
          <span aria-hidden>↗</span>
        </a>
        <a
          href={site.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-border font-bold hover:bg-main"
          aria-label="CV (PDF, opens in a new tab)"
        >
          CV <span aria-hidden>↗</span>
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mx-auto grid w-full max-w-[1184px] gap-3 px-4 pt-6 pb-10 font-mono text-xs uppercase tracking-wide sm:grid-cols-3 sm:items-center sm:px-0"
    >
      <p>
        © {site.year} {site.name} · {site.footerLeft}
      </p>
      <nav className="flex gap-5 sm:justify-center">
        {site.links.map((l) => (
          <a key={l.label} href={l.href || "#contact"} className="hover:underline">
            {l.label} ↗
          </a>
        ))}
        <a href={contactHref} className="hover:underline">
          Email ↗
        </a>
      </nav>
      <p className="sm:text-right">{site.footerRight}</p>
    </footer>
  );
}

/** The white framed panel that holds the Living Index (and project pages). */
export function Frame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`mx-auto mt-6 w-full max-w-[1184px] border-2 border-border bg-secondary-background p-3 shadow-[6px_6px_0_0_var(--border)] sm:p-[21px] ${className}`}
    >
      {children}
    </div>
  );
}
