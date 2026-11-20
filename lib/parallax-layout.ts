/**
 * Geometry and label placement of the <ParallaxDiagram> (the parsec), shared by the component and by
 * lib/plot-check.ts, which places the labels for every screen and text size in LAYOUT_CASES.
 */
import { AROUND, placeLabels, textSize, type Placed, type Seg } from "./label-layout";

export const PD = { W: 520, H: 300, sun: { x: 100, y: 125 }, earth: { x: 100, y: 50 }, star: { x: 470, y: 125 }, orbitR: 75 };
/** Label font size relative to the root font size. */
export const PD_LABEL_REM = 0.95;

export function parallaxLayout(em: number): { labels: { text: string; accent?: boolean; anchor: [number, number]; placed: Placed }[]; segments: Seg[] } {
  const { W, H, sun, earth, star, orbitR } = PD;
  const segments: Seg[] = [
    [sun.x, sun.y, star.x, star.y],
    [earth.x, earth.y, star.x, star.y],
    [sun.x, sun.y, earth.x, earth.y],
  ];
  for (let k = 0; k < 48; k++) {
    const a0 = (2 * Math.PI * k) / 48, a1 = (2 * Math.PI * (k + 1)) / 48;
    segments.push([sun.x + orbitR * Math.cos(a0), sun.y + orbitR * Math.sin(a0), sun.x + orbitR * Math.cos(a1), sun.y + orbitR * Math.sin(a1)]);
  }
  const defs: { text: string; accent?: boolean; anchor: [number, number]; dirs: [number, number][]; gap: number }[] = [
    { text: "p", accent: true, anchor: [star.x - 62, star.y - 6], dirs: [[-1, -0.3], [-1, 0.6], [0, -1]], gap: 4 },
    { text: "Sun", anchor: [sun.x, sun.y], dirs: [[0.3, 1], [1, 0.4], [0, 1]], gap: 12 },
    { text: "Earth", anchor: [earth.x, earth.y], dirs: [[0.4, -1], [1, -1], [0, -1]], gap: 7 },
    { text: "1 AU", anchor: [sun.x, (sun.y + earth.y) / 2], dirs: [[-1, 0], [1, 0]], gap: 6 },
    { text: "star", anchor: [star.x, star.y], dirs: [[0, 1], [-0.4, 1], [0, -1]], gap: 8 },
    { text: "d", anchor: [(sun.x + star.x) / 2 + 40, sun.y], dirs: [[0, 1], [0.3, 1]], gap: 6 },
  ];
  const placed = placeLabels(
    defs.map((d) => ({ name: `label "${d.text}"`, anchor: d.anchor, size: textSize(d.text, em), dirs: [...d.dirs, ...AROUND], gap: d.gap })),
    { bounds: [0, 0, W, H], segments },
  );
  return { labels: defs.map((d, i) => ({ text: d.text, accent: d.accent, anchor: d.anchor, placed: placed[i] })), segments };
}

export function pdEm(onScreen: number, rootPx: number): number {
  return (rootPx * PD_LABEL_REM) / (Math.min(onScreen, PD.W) / PD.W);
}
