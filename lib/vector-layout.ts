/**
 * Geometry of a <VectorDiagram>: arrows, component arrows, the angle arc, and where each label goes.
 * Shared by components/VectorDiagram.tsx (in the browser, with the real text size and width) and by
 * lib/plot-check.ts (at build time, for every screen and text size in LAYOUT_CASES).
 */
import { AROUND, placeLabels, texSize, textSize, type Box, type Placed, type Seg } from "./label-layout";

export type Vec = { x: number; y: number; from?: [number, number]; label?: string; color?: number; dashed?: boolean };

export type VectorDiagramProps = {
  vectors: Vec[];
  /** indices of vectors to add head-to-tail; draws the resultant */
  sum?: number[];
  /** indices of vectors whose x- and y-component vectors should be drawn */
  components?: number[];
  /** index of a vector whose angle with the +x axis is marked */
  angle?: number;
  extent?: [number, number, number, number];
  caption?: string;
  /** TeX label of the resultant */
  sumLabel?: string;
  width?: number;
};

/** Label font size relative to the root font size (1rem). */
export const VD_LABEL_REM = 1.15;
/** Axis-letter font size, in viewBox units (SVG text scales with the drawing). */
const AXIS_FONT = 13;

export type Arrow = { x1: number; y1: number; hx: number; hy: number; ux: number; uy: number; color: number; dashed?: boolean };
export type VectorLayout = {
  width: number;
  height: number;
  grid: { x: number[]; y: number[]; x0: number; y0: number };
  arrows: Arrow[];
  arc?: { d: string };
  axisLabels: { x: number; y: number; text: string }[];
  labels: { tex: string; color: number; anchor: [number, number]; placed: Placed }[];
};

export function vectorLayout(p: VectorDiagramProps, em: number): VectorLayout {
  const { vectors, sum, components = [], angle, extent, sumLabel = "\\vec C", width = 420 } = p;
  const all: Vec[] = [...vectors];
  if (sum && sum.length) {
    const sx = sum.reduce((a, i) => a + vectors[i].x, 0);
    const sy = sum.reduce((a, i) => a + vectors[i].y, 0);
    all.push({ x: sx, y: sy, from: vectors[sum[0]].from ?? [0, 0], label: sumLabel, color: 9 });
  }
  const pts = all.flatMap((v) => {
    const [fx, fy] = v.from ?? [0, 0];
    return [[fx, fy], [fx + v.x, fy + v.y]];
  });
  const [xmin, xmax, ymin, ymax] =
    extent ?? [
      Math.floor(Math.min(0, ...pts.map((q) => q[0])) - 1),
      Math.ceil(Math.max(0, ...pts.map((q) => q[0])) + 1),
      Math.floor(Math.min(0, ...pts.map((q) => q[1])) - 1),
      Math.ceil(Math.max(0, ...pts.map((q) => q[1])) + 1),
    ];
  const unit = width / (xmax - xmin);
  const height = (ymax - ymin) * unit;
  const X = (x: number) => (x - xmin) * unit;
  const Y = (y: number) => (ymax - y) * unit;

  const segs: Seg[] = [];
  const arrows: Arrow[] = [];
  const addArrow = (v: Vec, color: number) => {
    const [fx, fy] = v.from ?? [0, 0];
    const len = Math.hypot(v.x, v.y) * unit;
    if (len < 1) return null;
    const ux = (v.x * unit) / len;
    const uy = (-v.y * unit) / len;
    const a = { x1: X(fx), y1: Y(fy), hx: X(fx + v.x), hy: Y(fy + v.y), ux, uy, color, dashed: v.dashed };
    arrows.push(a);
    // The shaft, and the arrow head as a short wide stroke across the tip.
    segs.push([a.x1, a.y1, a.hx, a.hy]);
    segs.push([a.hx - 11 * ux + 4.6 * uy, a.hy - 11 * uy - 4.6 * ux, a.hx - 11 * ux - 4.6 * uy, a.hy - 11 * uy + 4.6 * ux]);
    return a;
  };
  for (const i of components) {
    const v = vectors[i];
    const [fx, fy] = v.from ?? [0, 0];
    addArrow({ x: v.x, y: 0, from: [fx, fy], dashed: true }, 4);
    addArrow({ x: 0, y: v.y, from: [fx + v.x, fy], dashed: true }, 1);
  }
  const shafts = all.map((v, i) => addArrow(v, v.color ?? i));

  // The axes are lines too: labels keep off them.
  segs.push([0, Y(0), width, Y(0)], [X(0), 0, X(0), height]);
  const axisLabels = [
    { x: width - 14, y: Y(0) - 6, text: "x" },
    { x: X(0) + 6, y: 14, text: "y" },
  ];
  const axisSize = textSize("x", AXIS_FONT);
  const fixed: Box[] = axisLabels.map((a) => ({ cx: a.x + axisSize.w / 2 - 2, cy: a.y - AXIS_FONT * 0.35, w: axisSize.w, h: axisSize.h }));

  const items: Parameters<typeof placeLabels>[0] = [];
  const meta: { tex: string; color: number }[] = [];
  all.forEach((v, i) => {
    const a = shafts[i];
    if (!v.label || !a) return;
    const mx = (a.x1 + a.hx) / 2;
    const my = (a.y1 + a.hy) / 2;
    // Normal to the arrow on screen: first the side the original drawings used, then the other side,
    // then along the arrow and diagonally.
    const nx = a.uy, ny = -a.ux;
    items.push({
      name: `label ${v.label}`,
      anchor: [mx, my],
      size: texSize(v.label, em),
      dirs: [[nx, ny], [-nx, -ny], [nx + a.ux, ny + a.uy], [nx - a.ux, ny - a.uy], [-nx + a.ux, -ny + a.uy], [-nx - a.ux, -ny - a.uy], ...AROUND],
      gap: 5,
    });
    meta.push({ tex: v.label, color: v.color ?? i });
  });

  let arc: VectorLayout["arc"];
  if (angle !== undefined) {
    const v = vectors[angle];
    const th = Math.atan2(v.y, v.x);
    const r = 0.9 * unit;
    const [fx, fy] = v.from ?? [0, 0];
    const cx = X(fx), cy = Y(fy);
    const large = th < 0 ? (th < -Math.PI ? 1 : 0) : th > Math.PI ? 1 : 0;
    const sweep = th >= 0 ? 0 : 1;
    arc = { d: `M ${cx + r} ${cy} A ${r} ${r} 0 ${large} ${sweep} ${cx + r * Math.cos(th)} ${cy - r * Math.sin(th)}` };
    const n = 12;
    for (let k = 0; k < n; k++) {
      const a0 = (th * k) / n, a1 = (th * (k + 1)) / n;
      segs.push([cx + r * Math.cos(a0), cy - r * Math.sin(a0), cx + r * Math.cos(a1), cy - r * Math.sin(a1)]);
    }
    const bx = Math.cos(th / 2), by = -Math.sin(th / 2);
    // θ goes just outside the arc, on its bisector, or inside it; then a little further out.
    items.push({
      name: "the angle label θ",
      anchor: [cx + r * bx, cy + r * by],
      size: texSize("\\theta", em),
      dirs: [[bx, by], [-bx, -by], [bx + 0.6, by], [bx, by - 0.6], ...AROUND],
      gap: 4,
    });
    meta.push({ tex: "\\theta", color: -1 });
  }

  const placed = placeLabels(items, { bounds: [0, 0, width, height], segments: segs, fixed });
  const gx: number[] = [], gy: number[] = [];
  for (let x = xmin; x <= xmax; x++) gx.push(X(x));
  for (let y = ymin; y <= ymax; y++) gy.push(Y(y));
  return {
    width,
    height,
    grid: { x: gx, y: gy, x0: X(0), y0: Y(0) },
    arrows,
    arc,
    axisLabels,
    labels: placed.map((pl, i) => ({ ...meta[i], anchor: items[i].anchor, placed: pl })),
  };
}

/** Label font size in viewBox units, for a diagram drawn `onScreen` CSS px wide at root font `rootPx`. */
export function vdEm(width: number, onScreen: number, rootPx: number): number {
  return (rootPx * VD_LABEL_REM) / (Math.min(onScreen, width) / width);
}
