"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { buttonClass } from "./ui/button";

/**
 * The pop-up from the Figma "Detail" frame: 768px wide, with room to scroll.
 * Opened by navigating to /work/[slug] from the grid; closing goes back.
 */
export function SpreadDialog({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  const router = useRouter();
  return (
    <Dialog.Root open onOpenChange={(open) => !open && router.back()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100dvh-32px)] w-[min(768px,calc(100vw-24px))] -translate-x-1/2 -translate-y-1/2 flex-col border-2 border-border bg-secondary-background shadow-shadow outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 sm:max-h-[calc(100dvh-64px)]"
        >
          <div className="flex shrink-0 items-center justify-between border-b-2 border-border px-5 py-3 sm:px-6">
            <p className="font-mono text-xs font-bold uppercase tracking-wide">{label}</p>
            <Dialog.Title className="sr-only">{title}</Dialog.Title>
            <Dialog.Close className={buttonClass("neutral", "icon")} aria-label="Close">
              <X className="size-5" />
            </Dialog.Close>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
