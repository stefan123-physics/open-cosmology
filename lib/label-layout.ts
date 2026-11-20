/**
 * Placing text labels on generated graphs so they stay fully visible, inside the graph, and clear of
 * each other and of the lines. Pure geometry (no DOM): the graph components use it in the browser with
 * the real sizes, and lib/plot-check.ts uses it at build time with the worst cases (a 320 px phone and
 * the largest text size), so a label that would be clipped or overlap fails `npm run content:check`.
 *
 * Coordinates are in the graph's own units (SVG viewBox units, or pixels of the plotting area),
 * with y pointing down.
 */

export type Size = { w: number; h: number };
/** A label box, centred on (cx, cy). */
export type Box = { cx: number; cy: number; w: number; h: number };
/** A straight segment x1, y1 → x2, y2: a line, an arrow, or a piece of a sampled curve. */
export type Seg = [number, number, number, number];

/** The screens and text sizes every graph must work on. Width = the graph's on-screen width in CSS px. */
export const LAYOUT_CASES = [
  { name: "phone (320 px), largest text", screen: 320, textScale: 2 },
  { name: "phone (320 px), normal text", screen: 320, textScale: 1 },
  { name: "wide screen, largest text", screen: 1400, textScale: 2 },
  { name: "wide screen, normal text", screen: 1400, textScale: 1 },
  { name: "wide screen, smallest text", screen: 1400, textScale: 0.9 },
] as const;
/** Content width of the lesson column: the screen minus the 16 px gutters, at most this many CSS px. */
export const COLUMN_MAX = 720;
export const columnWidth = (screen: number) => Math.min(screen - 32, COLUMN_MAX);

/** Visible characters of a TeX label, for estimating its width: commands like \theta count as one. */
function texChars(tex: string): number {
  const t = tex
    .replace(/\\(vec|hat|dot|ddot|bar|tilde|mathbf|mathrm|text|boldsymbol)\b/g, "")
    .replace(/\\[a-zA-Z]+/g, "x")
    .replace(/[{}_^\s]/g, "");
  return Math.max(1, t.length);
}

/** Estimated box of a KaTeX label at font size `em` (in graph units), generous on purpose. */
export function texSize(tex: string, em: number): Size {
  const accent = /\\(vec|hat|dot|ddot|bar|tilde)\b/.test(tex);
  const sub = /[_^]/.test(tex);
  return { w: (texChars(tex) * 0.68 + 0.35) * em, h: (accent ? 1.75 : 1.35) * em + (sub ? 0.3 * em : 0) };
}

/** Estimated box of a plain-text label (Plotly point labels, diagram words) at font size `em`. */
export function textSize(text: string, em: number): Size {
  return { w: ([...text].length * 0.6 + 0.4) * em, h: 1.35 * em };
}

export function overlap(a: Box, b: Box, pad = 0): boolean {
  return Math.abs(a.cx - b.cx) * 2 < a.w + b.w + 2 * pad && Math.abs(a.cy - b.cy) * 2 < a.h + b.h + 2 * pad;
}

/** Does the segment pass through the box (grown by pad)? */
export function hits(s: Seg, b: Box, pad = 0): boolean {
  const x0 = b.cx - b.w / 2 - pad, x1 = b.cx + b.w / 2 + pad, y0 = b.cy - b.h / 2 - pad, y1 = b.cy + b.h / 2 + pad;
  let [ax, ay, bx, by] = s;
  // Liang–Barsky clipping: is any part of the segment inside the rectangle?
  let t0 = 0, t1 = 1;
  const dx = bx - ax, dy = by - ay;
  const edges: [number, number][] = [[-dx, ax - x0], [dx, x1 - ax], [-dy, ay - y0], [dy, y1 - ay]];
  for (const [p, q] of edges) {
    if (p === 0) {
      if (q < 0) return false;
      continue;
    }
    const r = q / p;
    if (p < 0) {
      if (r > t1) return false;
      if (r > t0) t0 = r;
    } else {
      if (r < t0) return false;
      if (r < t1) t1 = r;
    }
  }
  return t0 <= t1;
}

export function inside(b: Box, bounds: [number, number, number, number], pad = 0): boolean {
  const [x0, y0, x1, y1] = bounds;
  return b.cx - b.w / 2 >= x0 + pad && b.cx + b.w / 2 <= x1 - pad && b.cy - b.h / 2 >= y0 + pad && b.cy + b.h / 2 <= y1 - pad;
}

export type Item = {
  /** For messages: what the label is ("label \vec A"). */
  name: string;
  /** The point the label belongs to (an arrow's midpoint, a marked point). */
  anchor: [number, number];
  size: Size;
  /** Preferred directions from the anchor, in order (need not be unit vectors). */
  dirs: [number, number][];
  /** Clear space between the anchor and the nearest edge of the label. */
  gap: number;
  /** Segments the label may touch (none by default). */
  ignore?: Seg[];
};

export type Placed = {
  box: Box;
  dir: number;
  ok: boolean;
  problem?: string;
  /** The label sits away from its anchor: draw a thin leader line from the anchor to the box. */
  leader: boolean;
};

/** Extra distances tried beyond "right beside the anchor", in units of the label's height. */
export const FURTHER = [0, 0.9, 1.9, 3, 4.5];

/** Where a leader line from the anchor meets the edge of the box (the line runs anchor → that point). */
export function leaderEnd(anchor: [number, number], b: Box): [number, number] {
  const dx = anchor[0] - b.cx, dy = anchor[1] - b.cy;
  const t = Math.min(dx ? b.w / 2 / Math.abs(dx) : Infinity, dy ? b.h / 2 / Math.abs(dy) : Infinity, 1);
  return [b.cx + dx * t, b.cy + dy * t];
}

/**
 * Place labels one by one: for each, the first candidate position (distance, then direction) that lies
 * inside the bounds and clear of the segments, the fixed boxes and the labels already placed. Right beside
 * the anchor is tried first; further out the label gets a leader line back to its anchor.
 * When no candidate is clear, the least bad one is used and `ok` is false, with the reason.
 */
export function placeLabels(
  items: Item[],
  opts: { bounds: [number, number, number, number]; segments: Seg[]; fixed?: Box[]; pad?: number; further?: number[] },
): Placed[] {
  const pad = opts.pad ?? 2;
  const placed: Box[] = [...(opts.fixed ?? [])];
  const out: Placed[] = [];
  for (const it of items) {
    let best: { box: Box; dir: number; cost: number; why: string[]; leader: boolean } | null = null;
    for (const extra of opts.further ?? FURTHER) {
      it.dirs.forEach(([dx, dy], di) => {
        const n = Math.hypot(dx, dy) || 1;
        const ux = dx / n, uy = dy / n;
        // Distance from the anchor to the box centre, so the box edge is `gap` (plus `extra`) away along this direction.
        const reach = it.gap + extra * it.size.h + Math.abs(ux) * (it.size.w / 2) + Math.abs(uy) * (it.size.h / 2);
        const box = { cx: it.anchor[0] + ux * reach, cy: it.anchor[1] + uy * reach, w: it.size.w, h: it.size.h };
        const why: string[] = [];
        if (!inside(box, opts.bounds, 1)) why.push("would stick out of the graph");
        const ign = it.ignore ?? [];
        if (opts.segments.some((s) => !ign.includes(s) && hits(s, box, pad))) why.push("would cross a line");
        if (placed.some((p) => overlap(p, box, pad))) why.push("would overlap another label");
        const cost = why.length * 10 + di * 0.1 + extra;
        if (!best || cost < best.cost) best = { box, dir: di, cost, why, leader: extra > 0 };
      });
      if (best && (best as { why: string[] }).why.length === 0) break;
    }
    const b = best as unknown as { box: Box; dir: number; why: string[]; leader: boolean };
    placed.push(b.box);
    out.push({
      box: b.box,
      dir: b.dir,
      ok: b.why.length === 0,
      leader: b.leader,
      problem: b.why.length ? `${it.name} ${b.why.join(" and ")} wherever it is put` : undefined,
    });
  }
  return out;
}

/** Eight directions around a point, starting up-right (y down): used for point labels. */
export const AROUND: [number, number][] = [
  [1, -1], [-1, -1], [1, 1], [-1, 1], [0, -1], [0, 1], [1, 0], [-1, 0],
  [0.4, -1], [-0.4, -1], [0.4, 1], [-0.4, 1], [1, -0.4], [-1, -0.4], [1, 0.4], [-1, 0.4],
];
