"use client";

import { useEffect, useRef } from "react";
import { starPoints } from "./star";

/**
 * Star cursor that responds to colour: on every move it reads the background
 * under the pointer and fills itself with the palette colour that stands out
 * most against it. Grows and spins over anything clickable.
 * Only for fine pointers (mouse / trackpad); touch keeps the normal behaviour.
 */
const PALETTE: [string, number, number, number][] = [
  ["#e96bff", 233, 107, 255], // fuchsia (main)
  ["#facc00", 250, 204, 0], // yellow
  ["#7a83ff", 122, 131, 255], // periwinkle
];
const PAGE_BG: [number, number, number] = [255, 238, 153]; // hsl(49 100% 80%)

// Computed colours can be rgb(), oklch(), hsl()…: a 1×1 canvas turns any of them into RGBA.
const cache = new Map<string, [number, number, number, number]>();
let ctx: CanvasRenderingContext2D | null = null;
function toRgba(css: string): [number, number, number, number] {
  const hit = cache.get(css);
  if (hit) return hit;
  ctx ??= document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (!ctx) return [0, 0, 0, 0];
  ctx.clearRect(0, 0, 1, 1);
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillStyle = css;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
  const out: [number, number, number, number] = [r, g, b, a / 255];
  cache.set(css, out);
  return out;
}

function backgroundUnder(el: Element | null): [number, number, number] {
  while (el) {
    const [r, g, b, a] = toRgba(getComputedStyle(el).backgroundColor);
    if (a >= 0.5) return [r, g, b];
    el = el.parentElement;
  }
  return PAGE_BG;
}

function pick([r, g, b]: [number, number, number]) {
  let best = PALETTE[0][0];
  let bestD = -1;
  for (const [hex, pr, pg, pb] of PALETTE) {
    const d = (pr - r) ** 2 + (pg - g) ** 2 + (pb - b) ** 2;
    if (d > bestD) {
      bestD = d;
      best = hex;
    }
  }
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return { fill: best, stroke: lum < 90 ? "#fff" : "#000" };
}

export function StarCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const poly = el.querySelector("polygon")!;
    document.documentElement.classList.add("star-cursor");

    let x = -100;
    let y = -100;
    let frame = 0;
    let last = "";

    const update = () => {
      frame = 0;
      el.style.translate = `${x}px ${y}px`;
      const under = document.elementFromPoint(x, y);
      const { fill, stroke } = pick(backgroundUnder(under));
      const key = fill + stroke;
      if (key !== last) {
        poly.setAttribute("fill", fill);
        poly.setAttribute("stroke", stroke);
        last = key;
      }
      el.dataset.active = under?.closest("a, button, [role='button'], label, summary") ? "true" : "false";
    };

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
      if (!frame) frame = requestAnimationFrame(update);
    };
    const hide = () => (el.style.opacity = "0");
    const down = () => (el.dataset.down = "true");
    const up = () => (el.dataset.down = "false");

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      document.documentElement.classList.remove("star-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="star-cursor-el pointer-events-none fixed top-0 left-0 z-[100] opacity-0"
    >
      <svg viewBox="0 0 64 64" className="star-cursor-svg">
        <polygon points={starPoints()} fill="#e96bff" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
