/**
 * Where the labels of marked points go on a <Plot>: Plotly annotations placed so each label stays inside the
 * plotting area and clear of the curves and the other labels, right beside its marker if possible, otherwise
 * a little further out with a thin leader line back to the marker. When even that is impossible (a label wider
 * than the whole graph, on a narrow phone at a large text size), the marker gets a small number tag instead and
 * the label is listed under the graph. Used by components/Plot.tsx with Plotly's real plotting area and axis
 * ranges, and by lib/plot-check.ts for every screen and text size in LAYOUT_CASES.
 */
import { AROUND, placeLabels, textSize, type Seg } from "./label-layout";

/** Plotly margins used by components/Plot.tsx (px). */
export const PLOT_MARGIN = { l: 56, r: 16, t: 16, tTitle: 40, b: 48 };
/** Point-label font size at text size 1 (px); it grows with the reader's text size. */
export const POINT_FONT = 13;

export type PointLabel = {
  text: string;
  /** Offset of the label's centre from its marker, in px (y down). */
  dx: number;
  dy: number;
  leader: boolean;
  /** true: the label is a number tag; the full label is listed under the graph. */
  keyed: boolean;
  ok: boolean;
  problem?: string;
};

export function plotPointLabels(o: {
  areaW: number;
  areaH: number;
  xr: [number, number];
  yr: [number, number];
  points: { x: number; y: number; label?: string }[];
  curves: { x: number[]; y: number[] }[];
  fontPx: number;
  /** false: no number tags (the check requires full labels on a wide screen at normal text size). */
  allowKey?: boolean;
}): (PointLabel | null)[] {
  const { areaW: W, areaH: H, xr, yr } = o;
  const px = (x: number) => ((x - xr[0]) / (xr[1] - xr[0])) * W;
  const py = (y: number) => (1 - (y - yr[0]) / (yr[1] - yr[0])) * H;
  const segs: Seg[] = [];
  for (const c of o.curves) {
    for (let k = 0; k + 1 < c.x.length; k++) {
      const s: Seg = [px(c.x[k]), py(c.y[k]), px(c.x[k + 1]), py(c.y[k + 1])];
      if (!s.every(Number.isFinite)) continue;
      // Only pieces near the plotting area matter (curves are clipped to it).
      if (Math.max(s[0], s[2]) < -W || Math.min(s[0], s[2]) > 2 * W || Math.max(s[1], s[3]) < -H || Math.min(s[1], s[3]) > 2 * H) continue;
      segs.push(s);
    }
  }
  const labelled = o.points.map((p, i) => ({ p, i })).filter(({ p }) => !!p.label);
  // The markers themselves: labels keep off them too.
  const markers = o.points.map((p) => ({ cx: px(p.x), cy: py(p.y), w: 10, h: 10 }));
  const run = (texts: string[]) =>
    placeLabels(
      labelled.map(({ p }, k) => ({
        name: `label "${p.label}"`,
        anchor: [px(p.x), py(p.y)] as [number, number],
        size: textSize(texts[k], o.fontPx),
        dirs: AROUND,
        gap: 6,
      })),
      { bounds: [0, 0, W, H], segments: segs, fixed: markers, pad: 1 },
    );
  const outside = (p: { x: number; y: number }) => !(px(p.x) >= -0.5 && px(p.x) <= W + 0.5 && py(p.y) >= -0.5 && py(p.y) <= H + 0.5);
  const build = (texts: string[], keyed: boolean) => {
    const res = run(texts);
    const out: (PointLabel | null)[] = o.points.map(() => null);
    labelled.forEach(({ p, i }, k) => {
      const r = res[k];
      const off = outside(p);
      out[i] = {
        text: texts[k],
        dx: r.box.cx - px(p.x),
        dy: r.box.cy - py(p.y),
        leader: r.leader,
        keyed,
        ok: r.ok && !off,
        problem: off ? `point "${p.label}" lies outside the graph's ranges` : r.problem,
      };
    });
    return out;
  };
  const full = build(labelled.map(({ p }) => p.label!), false);
  if (full.every((l) => !l || l.ok) || o.allowKey === false) return full;
  // Fall back: every labelled marker gets its number (1, 2, …), and the labels are listed under the graph.
  return build(labelled.map((_, k) => String(k + 1)), true);
}
