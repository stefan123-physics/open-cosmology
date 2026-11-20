"use client";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import katex from "katex";
import { playCurve, type Sonification } from "./plot/sonify";
import { plotPointLabels, PLOT_MARGIN, POINT_FONT } from "../lib/plot-labels";

/**
 * A graph generated from formulas (never a static image). Expressions use mathjs syntax:
 *   <Plot variable="t" domain={[0, 10]}
 *         curves={[{ expr: "x0 + v0*t + 0.5*a*t^2", label: "x(t)" }]}
 *         params={{ a: { value: 2, min: -5, max: 5, step: 0.1, label: "a" } }} />
 * Extra curve kinds visualise calculus ideas:
 *   { tangentOf: 0, at: "t1" }            tangent line to curve 0 at parameter t1
 *   { secantOf: 0, from: "t1", to: "t2" } secant line between two parameter values
 *   { x: "cos(s)", y: "sin(s)", range: [0, 6.28] }  parametric curve
 * Plotly and mathjs are loaded only when a plot is on the page.
 */

type Param = { value: number; min: number; max: number; step?: number; label?: string };
type Curve =
  | { expr: string; label?: string; dash?: boolean }
  | { tangentOf: number; at: string; label?: string }
  | { secantOf: number; from: string; to: string; label?: string }
  | { x: string; y: string; range: [number, number]; label?: string };

export type PlotProps = {
  title?: string;
  variable?: string;
  domain: [number, number];
  range?: [number, number];
  curves: Curve[];
  params?: Record<string, Param>;
  xLabel?: string;
  yLabel?: string;
  caption?: string;
  height?: number;
  /** Mark points on the curve: { curve: 0, at: "t1" } or fixed { x, y }. A fixed point must lie on a curve
   *  (checked by content:check) unless it is meant to be off the curves: offCurve: true. */
  points?: ({ curve: number; at: string; label?: string } | { x: number; y: number; label?: string; offCurve?: boolean })[];
  samples?: number;
};

type Compiled = { evaluate: (scope: Record<string, number>) => unknown };

const PALETTE_VARS = ["--plot-1", "--plot-2", "--plot-3", "--plot-4", "--plot-5"];

export function Plot({
  title,
  variable = "x",
  domain,
  range,
  curves,
  params = {},
  xLabel,
  yLabel,
  caption,
  height = 360,
  points = [],
  samples = 400,
}: PlotProps) {
  const el = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(Object.entries(params).map(([k, p]) => [k, p.value]))
  );
  const [libs, setLibs] = useState<{ Plotly: any; compile: (e: string) => Compiled } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scheme, setScheme] = useState(0);
  const [showTable, setShowTable] = useState(false);
  // The visible ranges after the reader zooms or pans (null = the author's domain/range).
  // Curves are re-sampled over the visible x-range, so zooming in shows real detail and
  // zooming out shows the curve beyond the original domain; moving a slider keeps the view.
  const [view, setView] = useState<{ x: [number, number] | null; y: [number, number] | null }>({ x: null, y: null });
  const listening = useRef(false);
  const captionId = useId();
  // "Listen to this graph": which curve, whether it is playing, and a status line for screen readers.
  const fnCurves = curves.map((c, i) => ("expr" in c ? i : -1)).filter((i) => i >= 0);
  const [listenCurve, setListenCurve] = useState(fnCurves[0] ?? -1);
  const [playing, setPlaying] = useState(false);
  const [status, setStatus] = useState("");
  // Point labels that did not fit next to their marker (narrow screen, large text): numbered and listed under the graph.
  const [pointKey, setPointKey] = useState<string[]>([]);
  const sound = useRef<Sonification | null>(null);
  useEffect(() => {
    // Stop the sound when the page is hidden or the graph goes away.
    const stop = () => sound.current?.stop();
    document.addEventListener("visibilitychange", stop);
    window.addEventListener("pagehide", stop);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", stop);
      window.removeEventListener("pagehide", stop);
    };
  }, []);

  useEffect(() => {
    let alive = true;
    Promise.all([import("plotly.js-dist-min"), import("mathjs")])
      .then(([plotly, mathjs]) => {
        if (alive) setLibs({ Plotly: (plotly as any).default ?? plotly, compile: mathjs.compile as any });
      })
      .catch((e) => setError(String(e)));
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setScheme((s) => s + 1);
    mq.addEventListener("change", onChange);
    const obs = new MutationObserver(onChange);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => {
      alive = false;
      mq.removeEventListener("change", onChange);
      obs.disconnect();
    };
  }, []);

  const compiled = useMemo(() => {
    if (!libs) return null;
    try {
      return curves.map((c) => {
        if ("expr" in c) return { kind: "fn" as const, f: libs.compile(c.expr) };
        if ("x" in c) return { kind: "param" as const, fx: libs.compile(c.x), fy: libs.compile(c.y) };
        return { kind: "derived" as const };
      });
    } catch (e) {
      setError(String(e));
      return null;
    }
  }, [libs, curves]);

  useEffect(() => {
    if (!libs || !compiled || !el.current) return;
    const css = getComputedStyle(document.documentElement);
    const v = (name: string) => css.getPropertyValue(name).trim();
    const colors = PALETTE_VARS.map(v);
    const evalAt = (i: number, t: number): number => {
      const c = compiled[i];
      if (c.kind !== "fn") return NaN;
      const r = Number(c.f.evaluate({ ...values, [variable]: t, pi: Math.PI, e: Math.E }));
      return Number.isFinite(r) ? r : NaN;
    };
    // Sample over what is on screen: the zoomed x-range if the reader has zoomed, else the domain.
    const sd: [number, number] = view.x ?? (domain as [number, number]);
    const slope = (i: number, t: number) => {
      const h = (sd[1] - sd[0]) * 1e-5;
      return (evalAt(i, t + h) - evalAt(i, t - h)) / (2 * h);
    };

    const xs = Array.from({ length: samples + 1 }, (_, k) => sd[0] + ((sd[1] - sd[0]) * k) / samples);
    const traces: any[] = curves.map((c, i) => {
      const color = colors[i % colors.length];
      const base = { type: "scatter", mode: "lines", name: c.label ?? "", hoverinfo: "x+y+name" };
      if ("expr" in c)
        return { ...base, x: xs, y: xs.map((t) => evalAt(i, t)), line: { color, width: 2.5, dash: c.dash ? "dash" : "solid" } };
      if ("tangentOf" in c) {
        const t0 = values[c.at];
        const y0 = evalAt(c.tangentOf, t0);
        const m = slope(c.tangentOf, t0);
        return { ...base, x: sd, y: sd.map((t) => y0 + m * (t - t0)), line: { color, width: 1.8, dash: "dot" } };
      }
      if ("secantOf" in c) {
        const a = values[c.from];
        const b = values[c.to];
        const ya = evalAt(c.secantOf, a);
        const yb = evalAt(c.secantOf, b);
        // When the two points coincide the secant becomes the tangent (its limit).
        const m = b === a ? slope(c.secantOf, a) : (yb - ya) / (b - a);
        return { ...base, x: sd, y: sd.map((t) => ya + m * (t - a)), line: { color, width: 1.8, dash: "dash" } };
      }
      const cc = compiled[i];
      if (cc.kind !== "param") return base;
      const ss = Array.from({ length: samples + 1 }, (_, k) => c.range[0] + ((c.range[1] - c.range[0]) * k) / samples);
      return {
        ...base,
        x: ss.map((s) => Number(cc.fx.evaluate({ ...values, s }))),
        y: ss.map((s) => Number(cc.fy.evaluate({ ...values, s }))),
        line: { color, width: 2.5 },
      };
    });
    const textScale = (parseFloat(css.fontSize) || 16) / 16;
    const pointXY = points.map((p) => ("curve" in p ? [values[p.at], evalAt(p.curve, values[p.at])] : [p.x, p.y]) as [number, number]);
    const firstPoint = traces.length;
    for (const [pi, p] of points.entries()) {
      const [x, y] = pointXY[pi];
      traces.push({
        type: "scatter",
        mode: "markers",
        x: [x],
        y: [y],
        // The label is an annotation placed by lib/plot-labels.ts (see placePointLabels below).
        cliponaxis: false,
        marker: { size: 9, color: v("--accent") },
        showlegend: false,
        hoverinfo: "x+y",
      });
    }

    const axis = (title?: string) => ({
      title: { text: title ?? "", font: { size: 13 } },
      zeroline: true,
      zerolinecolor: v("--muted"),
      gridcolor: v("--grid"),
      linecolor: v("--border"),
      color: v("--fg-soft"),
    });
    const layout = {
      height,
      margin: { l: PLOT_MARGIN.l, r: PLOT_MARGIN.r, t: title ? PLOT_MARGIN.tTitle : PLOT_MARGIN.t, b: PLOT_MARGIN.b },
      title: title ? { text: title, font: { size: 15 } } : undefined,
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      font: { family: v("--font-sans"), color: v("--fg") },
      xaxis: { ...axis(xLabel ?? variable), range: view.x ?? domain },
      yaxis: { ...axis(yLabel), ...(view.y ? { range: view.y } : range ? { range } : {}) },
      showlegend: curves.some((c) => c.label),
      legend: { orientation: "h", y: -0.22 },
    };
    const gd = el.current as any;
    let lastLabels = "";
    const placePointLabels = () => {
      const fl = gd._fullLayout;
      if (!points.some((p) => p.label) || !fl?._size) return;
      const labels = plotPointLabels({
        areaW: fl._size.w,
        areaH: fl._size.h,
        xr: [Number(fl.xaxis.range[0]), Number(fl.xaxis.range[1])],
        yr: [Number(fl.yaxis.range[0]), Number(fl.yaxis.range[1])],
        points: points.map((p, i) => ({ x: pointXY[i][0], y: pointXY[i][1], label: p.label })),
        curves: traces.slice(0, firstPoint).map((t) => ({ x: t.x ?? [], y: t.y ?? [] })),
        fontPx: POINT_FONT * textScale,
      });
      const annotations = labels.flatMap((l, i) => {
        if (!l) return [];
        const [x, y] = pointXY[i];
        return [
          {
            x,
            y,
            xref: "x",
            yref: "y",
            text: l.text,
            xanchor: "center",
            yanchor: "middle",
            showarrow: l.leader,
            ...(l.leader ? { ax: l.dx, ay: l.dy, arrowhead: 0, arrowwidth: 1, arrowcolor: v("--muted"), standoff: 5 } : { xshift: l.dx, yshift: -l.dy }),
            font: { size: POINT_FONT * textScale, color: l.keyed ? v("--on-accent") : v("--fg") },
            ...(l.keyed ? { bgcolor: v("--accent"), borderpad: 2 } : {}),
            captureevents: false,
          },
        ];
      });
      const sig = JSON.stringify(annotations);
      if (sig !== lastLabels) {
        lastLabels = sig;
        libs.Plotly.relayout(gd, { annotations });
      }
      const key = labels.some((l) => l?.keyed) ? points.map((p, i) => (labels[i]?.keyed ? `${labels[i]!.text}: ${p.label}` : "")).filter(Boolean) : [];
      setPointKey((old) => (old.join("|") === key.join("|") ? old : key));
    };
    // The plotting area changes size with the window (responsive): place the labels again.
    const onResize = () => window.requestAnimationFrame(placePointLabels);
    window.addEventListener("resize", onResize);
    Promise.resolve(libs.Plotly.react(gd, traces, layout, {
      displaylogo: false,
      responsive: true,
      // "sendChartToCloud" is Plotly's "Share chart" button, which uploads the data to an outside service.
      modeBarButtonsToRemove: ["lasso2d", "select2d", "sendChartToCloud"],
    })).then(placePointLabels);
    if (!listening.current && typeof gd.on === "function") {
      listening.current = true;
      gd.on("plotly_relayout", (e: Record<string, any>) => {
        const read = (ax: "xaxis" | "yaxis"): [number, number] | null | undefined => {
          if (e[`${ax}.autorange`]) return null;
          const r = e[`${ax}.range`] ?? (`${ax}.range[0]` in e ? [e[`${ax}.range[0]`], e[`${ax}.range[1]`]] : undefined);
          return r && Number.isFinite(+r[0]) && Number.isFinite(+r[1]) ? [+r[0], +r[1]] : undefined;
        };
        const x = read("xaxis");
        const y = read("yaxis");
        if (x === undefined && y === undefined) return;
        setView((v) => ({ x: x === undefined ? v.x : x, y: y === undefined ? v.y : y }));
      });
    }
    return () => window.removeEventListener("resize", onResize);
  }, [libs, compiled, values, scheme, curves, domain, range, variable, title, xLabel, yLabel, height, points, samples, view]);

  // A short label naming what is drawn; the caption (linked with aria-describedby) says what it shows.
  const xName = xLabel ?? variable;
  const named = curves.map((c) => c.label).filter((l): l is string => !!l);
  const shortLabel =
    `${title ? `${title}: g` : "G"}raph of ${yLabel ?? "y"} against ${xName}, ${xName} from ${fmt(domain[0])} to ${fmt(domain[1])}` +
    (named.length ? `; curves: ${named.join(", ")}` : "");

  const evalCurve = (i: number, t: number) => {
    const c = compiled?.[i];
    if (!c || c.kind !== "fn") return NaN;
    const r = Number(c.f.evaluate({ ...values, [variable]: t, pi: Math.PI, e: Math.E }));
    return Number.isFinite(r) ? r : NaN;
  };
  const listen = () => {
    if (playing) {
      sound.current?.stop();
      return;
    }
    if (listenCurve < 0 || !compiled) return;
    const xr: [number, number] = view.x ?? domain;
    const n = 160;
    const ys = Array.from({ length: n + 1 }, (_, k) => evalCurve(listenCurve, xr[0] + ((xr[1] - xr[0]) * k) / n));
    const finite = ys.filter(Number.isFinite);
    if (!finite.length) {
      setStatus("This curve has no values in the visible range.");
      return;
    }
    const yr: [number, number] = view.y ?? range ?? [Math.min(...finite), Math.max(...finite)];
    const s = playCurve(ys, yr);
    if (!s) {
      setStatus("Sound is not available in this browser.");
      return;
    }
    sound.current = s;
    setPlaying(true);
    const name = curves[listenCurve].label ?? `curve ${listenCurve + 1}`;
    setStatus(`Playing ${name} from ${xName} = ${fmt(xr[0])} to ${fmt(xr[1])}, for 3 seconds. Higher pitch means a larger value; silence means no value.`);
    s.done.then(() => {
      if (sound.current === s) sound.current = null;
      setPlaying(false);
      setStatus("Finished.");
    });
  };

  return (
    <figure className="plot">
      <div
        ref={el}
        style={{ minHeight: height }}
        className="plot-canvas"
        data-noread
        role="img"
        aria-label={shortLabel}
        aria-describedby={caption ? captionId : undefined}
      >
        {!libs && !error && <div className="plot-loading">Loading graph…</div>}
        {error && <div className="plot-error">Could not draw this graph: {error}</div>}
      </div>
      {pointKey.length > 0 && (
        <ul className="plot-point-key" aria-label="Marked points">
          {pointKey.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      )}
      {Object.keys(params).length > 0 && (
        <div className="plot-sliders">
          {Object.entries(params).map(([k, p]) => (
            <label key={k}>
              <span
                className="plot-param"
                dangerouslySetInnerHTML={{ __html: katex.renderToString(p.label ?? k, { throwOnError: false }) }}
              />
              <input
                type="range"
                min={p.min}
                max={p.max}
                step={p.step ?? (p.max - p.min) / 100}
                value={values[k]}
                onChange={(e) => setValues((s) => ({ ...s, [k]: Number(e.target.value) }))}
              />
              <output>{fmt(values[k])}</output>
            </label>
          ))}
        </div>
      )}
      {caption && <figcaption id={captionId}>{caption}</figcaption>}
      <div className="plot-tools">
        <button type="button" className="secondary small plot-table-toggle" aria-expanded={showTable} onClick={() => setShowTable(!showTable)}>
          {showTable ? "Hide the table of values" : "Show values as a table"}
        </button>
        {fnCurves.length > 0 && (
          <span className="plot-listen">
            {fnCurves.length > 1 && (
              <label className="plot-listen-pick">
                <span className="sr-only">Curve to listen to</span>
                <select value={listenCurve} onChange={(e) => setListenCurve(Number(e.target.value))} disabled={playing}>
                  {fnCurves.map((i) => (
                    <option key={i} value={i}>
                      {curves[i].label ?? `curve ${i + 1}`}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <button type="button" className="secondary small" onClick={listen} disabled={!libs || !compiled} aria-pressed={playing}>
              {playing ? "Stop" : "Listen to this graph"}
            </button>
          </span>
        )}
        <span className="sr-only" role="status" aria-live="polite">
          {status}
        </span>
      </div>
      {showTable && libs && compiled && (
        <ValueTable
          compiled={compiled}
          curves={curves}
          values={values}
          variable={variable}
          domain={domain}
          xLabel={xLabel}
          yLabel={yLabel}
          caption={caption ?? title}
        />
      )}
    </figure>
  );
}

/** Accessible alternative to the graph: the curves sampled at 11 evenly spaced points. */
function ValueTable({
  compiled,
  curves,
  values,
  variable,
  domain,
  xLabel,
  yLabel,
  caption,
}: {
  compiled: ({ kind: "fn"; f: Compiled } | { kind: "param"; fx: Compiled; fy: Compiled } | { kind: "derived" })[];
  curves: Curve[];
  values: Record<string, number>;
  variable: string;
  domain: [number, number];
  xLabel?: string;
  yLabel?: string;
  caption?: string;
}) {
  const fnIdx = curves.map((c, i) => ("expr" in c ? i : -1)).filter((i) => i >= 0);
  const xs = Array.from({ length: 11 }, (_, k) => domain[0] + ((domain[1] - domain[0]) * k) / 10);
  const evalAt = (i: number, t: number) => {
    const c = compiled[i];
    if (c.kind !== "fn") return NaN;
    const r = Number(c.f.evaluate({ ...values, [variable]: t, pi: Math.PI, e: Math.E }));
    return Number.isFinite(r) ? r : NaN;
  };
  const paramIdx = curves.map((c, i) => ("x" in c && "range" in c ? i : -1)).filter((i) => i >= 0);
  const show = (n: number) => (Number.isFinite(n) ? (Math.abs(n) >= 1000 || (Math.abs(n) < 0.01 && n !== 0) ? n.toExponential(2) : Number(n.toFixed(3)).toString()) : "—");
  return (
    <div className="plot-table">
      {fnIdx.length > 0 && (
        <table>
          <caption>{caption ? `Values for: ${caption}` : "Values of the graph"}{yLabel ? ` (${yLabel})` : ""}</caption>
          <thead>
            <tr>
              <th scope="col">{xLabel ?? variable}</th>
              {fnIdx.map((i) => (
                <th scope="col" key={i}>{curves[i].label ?? `curve ${i + 1}`}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {xs.map((x) => (
              <tr key={x}>
                <th scope="row">{show(x)}</th>
                {fnIdx.map((i) => (
                  <td key={i}>{show(evalAt(i, x))}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {paramIdx.map((i) => {
        const c = curves[i] as { x: string; y: string; range: [number, number]; label?: string };
        const cc = compiled[i];
        if (cc.kind !== "param") return null;
        const ss = Array.from({ length: 11 }, (_, k) => c.range[0] + ((c.range[1] - c.range[0]) * k) / 10);
        return (
          <table key={i}>
            <caption>{`Points on: ${c.label ?? "curve"}`}</caption>
            <thead>
              <tr>
                <th scope="col">{xLabel ?? "x"}</th>
                <th scope="col">{yLabel ?? "y"}</th>
              </tr>
            </thead>
            <tbody>
              {ss.map((sv) => (
                <tr key={sv}>
                  <td>{show(Number(cc.fx.evaluate({ ...values, s: sv })))}</td>
                  <td>{show(Number(cc.fy.evaluate({ ...values, s: sv })))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      })}
      <p className="muted small">Values are computed from the same formulas as the graph, with the current slider settings.</p>
    </div>
  );
}

function fmt(n: number) {
  return Math.abs(n) >= 100 || Number.isInteger(n) ? String(n) : n.toFixed(2);
}
