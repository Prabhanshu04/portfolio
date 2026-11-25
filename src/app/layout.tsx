import type { Metadata } from "next";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/800.css";
import "@fontsource/dm-sans/500-italic.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import { site } from "@/content/site";
import { StarCursor } from "@/components/star-cursor";

export const metadata: Metadata = {
  title: { default: `${site.name} — The Living Index`, template: `%s — ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-dvh">
        {children}
        {modal}
        <StarCursor />
      </body>
    </html>
  );
}
