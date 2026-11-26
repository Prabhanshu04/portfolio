/** Six-pointed star, the same shape as the "Stay curious" tile. */
export function starPoints(cx = 32, cy = 32, outer = 30, inner = 14) {
  const pts: string[] = [];
  for (let i = 0; i < 12; i++) {
    const a = (Math.PI / 6) * i - Math.PI / 2;
    const r = i % 2 === 0 ? outer : inner;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

/**
 * The logo: "ps." set in the star. The star turns a sixth on hover
 * (it looks the same after, so it reads as a playful twitch).
 * Keep in sync with src/app/icon.svg (the browser tab icon).
 */
export function StarLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <polygon
        points={starPoints()}
        fill="var(--chart-2)"
        stroke="#000"
        strokeWidth="3"
        strokeLinejoin="round"
        className="origin-center transition-transform duration-500 ease-out [transform-box:fill-box] group-hover:rotate-60"
      />
      <text
        x="32"
        y="37.5"
        textAnchor="middle"
        fontFamily="DM Sans, sans-serif"
        fontWeight="800"
        fontSize="15"
        letterSpacing="-0.6"
        fill="#000"
      >
        ps.
      </text>
    </svg>
  );
}
