/**
 * Checks every <Plot> on every page (docs/CALC_TESTS_PLAN.md §7, item 1), with the same mathjs the site uses:
 *  - every curve compiles and gives finite values somewhere on its domain (or parametric range);
 *  - tangents, secants and { curve, at } points name a real expression curve and a real parameter;
 *  - every fixed point { x, y } lies on one of the plot's curves, within the precision its numbers are printed to,
 *    unless it says offCurve: true (a measurement or a marker that is meant to be off the curves);
 *  - every label on every graph (point labels on a <Plot>, vector and angle labels on a <VectorDiagram>, the words
 *    on a <ParallaxDiagram>) can be placed fully inside its graph, clear of the other labels and of the lines and
 *    curves, on a 320 px phone and a wide screen, at the smallest and the largest text size (LAYOUT_CASES), with
 *    the same placement code the components use in the browser. A label that would be cut off, stick out of its
 *    graph or overlap fails the check.
 * Run by `npm run content:check`.
 */
import * as runtime from "react/jsx-runtime";
import { createElement, Fragment, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { compile } from "mathjs";
import type { PlotProps } from "../components/Plot";
import { LAYOUT_CASES, columnWidth } from "./label-layout";
import { plotPointLabels, PLOT_MARGIN, POINT_FONT } from "./plot-labels";
import { vectorLayout, vdEm, type VectorDiagramProps } from "./vector-layout";
import { parallaxLayout, pdEm } from "./parallax-layout";

type Compiled = { evaluate: (scope: Record<string, number>) => unknown };

export type PageGraphs = { plots: PlotProps[]; vectors: VectorDiagramProps[]; parallax: number };

/** All <Plot> props on a page, in order, as the page passes them. */
export async function extractPlots(body: string): Promise<PlotProps[]> {
  return (await extractGraphs(body)).plots;
}

/** All graphs on a page that carry labels: <Plot>, <VectorDiagram> and <ParallaxDiagram>. */
export async function extractGraphs(body: string): Promise<PageGraphs> {
  if (!/<(Plot|VectorDiagram|ParallaxDiagram)\b/.test(body)) return { plots: [], vectors: [], parallax: 0 };
  const plots: PlotProps[] = [];
  const vectors: VectorDiagramProps[] = [];
  let parallax = 0;
  // ESM-only packages: loaded dynamically so the check also runs from CommonJS scripts.
  const [{ evaluate }, { default: remarkMath }, { default: remarkGfm }] = await Promise.all([
    import("@mdx-js/mdx"),
    import("remark-math"),
    import("remark-gfm"),
  ]);
  const { default: Content } = await evaluate(body, {
    ...(runtime as any),
    remarkPlugins: [remarkGfm, remarkMath],
    development: false,
  });
  const passThrough = ({ children }: { children?: ReactNode }) => createElement(Fragment, null, children ?? null);
  // Every other component the pages use (lib/mdx.tsx componentsFor) just renders its children.
  const others = ["Formula", "PhET", "WorkedExample", "Step", "Problem", "VectorDiagram", "Callout", "ExpansionDiagram", "ParallaxDiagram", "Exercise", "Part", "Hint", "Solution", "Answer"];
  const components: Record<string, unknown> = Object.fromEntries(others.map((k) => [k, passThrough]));
  components.Plot = (p: PlotProps) => (plots.push(p), null);
  components.VectorDiagram = (p: VectorDiagramProps) => (vectors.push(p), null);
  components.ParallaxDiagram = () => (parallax++, null);
  renderToStaticMarkup(createElement(Content as any, { components }));
  return { plots, vectors, parallax };
}

/** Half a unit in the last printed digit of n (as written in the MDX source): 0.8088 → 0.00005, 1 → 0.5. */
function printedHalfUnit(n: number): number {
  const s = String(n);
  if (/e/i.test(s)) {
    const [m, e] = s.toLowerCase().split("e");
    const d = (m.split(".")[1] ?? "").length;
    return 0.5 * 10 ** (Number(e) - d);
  }
  return 0.5 * 10 ** -(s.split(".")[1] ?? "").length;
}

function finite(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : NaN;
}

export function checkPlot(p: PlotProps, where: string): string[] {
  const errors: string[] = [];
  const variable = p.variable ?? "x";
  const scope0: Record<string, number> = { pi: Math.PI, e: Math.E };
  for (const [k, v] of Object.entries(p.params ?? {})) scope0[k] = v.value;
  const params = new Set(Object.keys(p.params ?? {}));
  const [lo, hi] = p.domain;
  const n = 400;
  const xs = Array.from({ length: n + 1 }, (_, i) => lo + ((hi - lo) * i) / n);

  // Compile every curve
  const fns: (((t: number) => number) | null)[] = [];
  const paths: ({ x: number[]; y: number[] } | null)[] = [];
  p.curves.forEach((c, i) => {
    fns[i] = null;
    paths[i] = null;
    const label = `curve ${i}${c.label ? ` ("${c.label}")` : ""}`;
    try {
      if ("expr" in c) {
        const f: Compiled = compile(c.expr);
        const fn = (t: number) => finite(f.evaluate({ ...scope0, [variable]: t }));
        if (!xs.some((t) => Number.isFinite(fn(t)))) errors.push(`${where}: ${label} "${c.expr}" gives no finite value on the domain [${lo}, ${hi}]`);
        fns[i] = fn;
      } else if ("x" in c) {
        const fx: Compiled = compile(c.x);
        const fy: Compiled = compile(c.y);
        const ss = Array.from({ length: n + 1 }, (_, k) => c.range[0] + ((c.range[1] - c.range[0]) * k) / n);
        const path = { x: ss.map((s) => finite(fx.evaluate({ ...scope0, s }))), y: ss.map((s) => finite(fy.evaluate({ ...scope0, s }))) };
        if (!path.x.some((x, k) => Number.isFinite(x) && Number.isFinite(path.y[k])))
          errors.push(`${where}: ${label} (parametric) gives no finite point on its range`);
        paths[i] = path;
      }
    } catch (e) {
      errors.push(`${where}: ${label} does not compile: ${(e as Error).message}`);
    }
  });

  const exprCurve = (idx: number, what: string) => {
    if (!(idx in p.curves) || !("expr" in p.curves[idx])) errors.push(`${where}: ${what} refers to curve ${idx}, which is not an expression curve`);
  };
  const param = (name: string, what: string) => {
    if (!params.has(name)) errors.push(`${where}: ${what} uses "${name}", which is not one of the plot's params`);
  };
  p.curves.forEach((c, i) => {
    if ("tangentOf" in c) (exprCurve(c.tangentOf, `curve ${i} (tangent)`), param(c.at, `curve ${i} (tangent)`));
    if ("secantOf" in c) (exprCurve(c.secantOf, `curve ${i} (secant)`), param(c.from, `curve ${i} (secant)`), param(c.to, `curve ${i} (secant)`));
  });

  // Points
  for (const pt of p.points ?? []) {
    const label = `point${pt.label ? ` "${pt.label}"` : ""}`;
    if ("curve" in pt) {
      exprCurve(pt.curve, label);
      param(pt.at, label);
      continue;
    }
    if ((pt as { offCurve?: boolean }).offCurve) continue;
    // y is allowed its printed rounding. x is too when it has decimals (0.6667 for 2/3); a whole number x is exact.
    const tolY = printedHalfUnit(pt.y) * 1.0001;
    const tolX = Number.isInteger(pt.x) && !/e/i.test(String(pt.x)) ? Math.max(1e-9, Math.abs(pt.x) * 1e-12) : printedHalfUnit(pt.x) * 1.0001;
    let best = Infinity;
    // Expression curves: is there an x' within the rounding of x where the curve is within the rounding of y?
    for (const fn of fns) {
      if (!fn) continue;
      const ts = Array.from({ length: 41 }, (_, k) => pt.x - tolX + (2 * tolX * k) / 40);
      const ds = ts.map((t) => (fn(t) - pt.y) / tolY);
      ds.forEach((d, k) => {
        if (!Number.isFinite(d)) return;
        best = Math.min(best, Math.abs(d));
        const prev = ds[k - 1];
        if (k > 0 && Number.isFinite(prev) && Math.sign(prev) !== Math.sign(d)) best = 0; // the curve crosses y here
      });
    }
    // Parametric curves: distance to the nearest segment of the sampled path, in units of the printed rounding
    for (const path of paths) {
      if (!path) continue;
      for (let k = 0; k + 1 < path.x.length; k++) {
        const [x1, y1, x2, y2] = [path.x[k], path.y[k], path.x[k + 1], path.y[k + 1]];
        if (![x1, y1, x2, y2].every(Number.isFinite)) continue;
        const [ax, ay] = [(x1 - pt.x) / tolX, (y1 - pt.y) / tolY];
        const [bx, by] = [(x2 - pt.x) / tolX, (y2 - pt.y) / tolY];
        const [dx, dy] = [bx - ax, by - ay];
        const len2 = dx * dx + dy * dy;
        const u = len2 ? Math.max(0, Math.min(1, -(ax * dx + ay * dy) / len2)) : 0;
        const [cx, cy] = [ax + u * dx, ay + u * dy];
        best = Math.min(best, Math.max(Math.abs(cx), Math.abs(cy)));
      }
    }
    if (best > 1)
      errors.push(
        `${where}: ${label} at (${pt.x}, ${pt.y}) is not on any curve within its printed precision` +
          (Number.isFinite(best) ? ` (nearest miss ${best.toFixed(1)} × the allowed rounding)` : "") +
          `; fix the numbers, or add offCurve: true if it is meant to be off the curves`,
      );
  }
  if (!errors.length) errors.push(...checkPlotLabels(p, where, fns, paths, scope0, xs));
  return errors;
}

/**
 * Point labels must fit inside the plotting area, clear of the curves and of each other, on every screen and
 * text size. On a wide screen at normal text size they must fit beside their markers; on a phone or at a large
 * text size a marker may show a number instead, with its label listed under the graph (components/Plot.tsx).
 */
function checkPlotLabels(
  p: PlotProps,
  where: string,
  fns: (((t: number) => number) | null)[],
  paths: ({ x: number[]; y: number[] } | null)[],
  scope0: Record<string, number>,
  xs: number[],
): string[] {
  const pts = p.points ?? [];
  if (!pts.some((pt) => pt.label)) return [];
  const errors: string[] = [];
  // The curves as drawn, with the sliders at their starting values (tangents and secants too).
  const slope = (f: (t: number) => number, t: number) => {
    const h = (p.domain[1] - p.domain[0]) * 1e-5;
    return (f(t + h) - f(t - h)) / (2 * h);
  };
  const none = { x: [] as number[], y: [] as number[] };
  const drawn = p.curves.map((c, i) => {
    if ("expr" in c) return fns[i] ? { x: xs, y: xs.map(fns[i]!) } : none;
    if ("x" in c) return paths[i] ?? none;
    if ("tangentOf" in c) {
      const f = fns[c.tangentOf];
      if (!f) return none;
      const t0 = scope0[c.at], y0 = f(t0), m = slope(f, t0);
      return { x: [...p.domain], y: p.domain.map((t) => y0 + m * (t - t0)) };
    }
    if ("secantOf" in c) {
      const f = fns[c.secantOf];
      if (!f) return none;
      const a = scope0[c.from], b = scope0[c.to];
      const m = a === b ? slope(f, a) : (f(b) - f(a)) / (b - a);
      return { x: [...p.domain], y: p.domain.map((t) => f(a) + m * (t - a)) };
    }
    return none;
  });
  const points = pts.map((pt) => {
    if ("curve" in pt) {
      const f = fns[pt.curve];
      const x = scope0[pt.at];
      return { x, y: f ? f(x) : NaN, label: pt.label };
    }
    return { x: pt.x, y: pt.y, label: pt.label };
  });
  // Plotly's y-range when the page gives none: the data, with a little room (as its autorange does).
  let yr = p.range;
  if (!yr) {
    const ys = [...drawn.flatMap((d) => d.y), ...points.map((q) => q.y)].filter(Number.isFinite);
    const lo = Math.min(...ys), hi = Math.max(...ys);
    const padY = (hi - lo || 1) * 0.06;
    yr = [lo - padY, hi + padY];
  }
  const height = p.height ?? 360;
  const areaH = height - (p.title ? PLOT_MARGIN.tTitle : PLOT_MARGIN.t) - PLOT_MARGIN.b;
  const seen = new Set<string>();
  for (const c of LAYOUT_CASES) {
    const areaW = columnWidth(c.screen) - PLOT_MARGIN.l - PLOT_MARGIN.r;
    const wideNormal = c.screen >= 1000 && c.textScale <= 1;
    const res = plotPointLabels({ areaW, areaH, xr: p.domain, yr, points, curves: drawn, fontPx: POINT_FONT * c.textScale, allowKey: !wideNormal });
    for (const r of res) {
      if (!r || r.ok || !r.problem || seen.has(r.problem)) continue;
      seen.add(r.problem);
      errors.push(`${where}: ${r.problem}${wideNormal ? " beside its marker" : ""} (${c.name}); shorten the label, move the point or change the graph's ranges`);
    }
  }
  return errors;
}

/** Vector-diagram labels (vectors and the angle θ) on every screen and text size. */
export function checkVectorDiagram(v: VectorDiagramProps, where: string): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  const width = v.width ?? 420;
  for (const c of LAYOUT_CASES) {
    const L = vectorLayout(v, vdEm(width, columnWidth(c.screen), 16 * c.textScale));
    for (const l of L.labels) {
      if (l.placed.ok || !l.placed.problem || seen.has(l.placed.problem)) continue;
      seen.add(l.placed.problem);
      errors.push(`${where}: ${l.placed.problem} (${c.name}); give the diagram more room with extent, or shorten the label`);
    }
  }
  return errors;
}

/** The words on a parallax diagram, on every screen and text size. */
export function checkParallaxDiagram(where: string): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  for (const c of LAYOUT_CASES) {
    for (const l of parallaxLayout(pdEm(columnWidth(c.screen), 16 * c.textScale)).labels) {
      if (l.placed.ok || !l.placed.problem || seen.has(l.placed.problem)) continue;
      seen.add(l.placed.problem);
      errors.push(`${where}: ${l.placed.problem} (${c.name})`);
    }
  }
  return errors;
}

/** Check all plots on all pages; returns error messages. */
export async function checkAllPlots(pages: { slug: string; body: string }[]): Promise<{ errors: string[]; plots: number }> {
  const errors: string[] = [];
  let count = 0;
  for (const page of pages) {
    let g: PageGraphs;
    try {
      g = await extractGraphs(page.body);
    } catch (e) {
      errors.push(`${page.slug}: could not read the page's plots: ${(e as Error).message}`);
      continue;
    }
    g.plots.forEach((p, i) => errors.push(...checkPlot(p, `${page.slug}: plot ${i + 1}`)));
    g.vectors.forEach((v, i) => errors.push(...checkVectorDiagram(v, `${page.slug}: vector diagram ${i + 1}`)));
    for (let i = 0; i < g.parallax; i++) errors.push(...checkParallaxDiagram(`${page.slug}: parallax diagram ${i + 1}`));
    count += g.plots.length + g.vectors.length + g.parallax;
  }
  return { errors, plots: count };
}
