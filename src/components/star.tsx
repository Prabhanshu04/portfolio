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
