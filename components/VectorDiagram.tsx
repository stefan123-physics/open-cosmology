"use client";
import katex from "katex";
import { useEffect, useRef, useState } from "react";
import { vectorLayout, vdEm, type VectorDiagramProps } from "../lib/vector-layout";
import { leaderEnd } from "../lib/label-layout";

/**
 * Generated 2D vector diagram (SVG computed from the data, no drawn images).
 *   <VectorDiagram vectors={[{ x: 3, y: 2, label: "\\vec A" }, { x: 1, y: -2, from: [3, 2], label: "\\vec B" }]}
 *                  sum={[0, 1]} components={[0]} />
 * Labels are ordinary page text laid over the drawing (not HTML inside the SVG), so accents are never cut
 * off, they follow the reader's text size, and they stay in place when the drawing is scaled down on a
 * phone. Where each label goes is computed by lib/vector-layout.ts, which content:check also runs for every
 * screen size and text size (lib/plot-check.ts).
 */
export function VectorDiagram(props: VectorDiagramProps) {
  const width = props.width ?? 420;
  const stage = useRef<HTMLDivElement>(null);
  // Font size of the labels in drawing units: depends on how wide the drawing is on screen and on the text size.
  const [em, setEm] = useState(() => vdEm(width, width, 16));
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const update = () => {
      const root = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const w = el.getBoundingClientRect().width || width;
      setEm(vdEm(width, w, root));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    // The reading options change the text size through a style on <html>.
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["style", "data-large"] });
    return () => {
      ro.disconnect();
      mo.disconnect();
    };
  }, [width]);

  const L = vectorLayout(props, em);
  const color = (i: number) => (i === 9 ? "var(--plot-3)" : i < 0 ? "var(--fg-soft)" : `var(--plot-${(i % 5) + 1})`);
  const pct = (v: number, of: number) => `${(v / of) * 100}%`;

  return (
    <figure className="vector-diagram">
      <div ref={stage} className="vd-stage" style={{ maxWidth: L.width, aspectRatio: `${L.width} / ${L.height}` }}>
        <svg viewBox={`0 0 ${L.width} ${L.height}`} role="img" aria-label={props.caption ?? "Vector diagram"}>
          <g className="vd-grid">
            {L.grid.x.map((x, i) => (
              <line key={`gx${i}`} x1={x} x2={x} y1={0} y2={L.height} className={Math.abs(x - L.grid.x0) < 1e-9 ? "axis" : "grid"} />
            ))}
            {L.grid.y.map((y, i) => (
              <line key={`gy${i}`} y1={y} y2={y} x1={0} x2={L.width} className={Math.abs(y - L.grid.y0) < 1e-9 ? "axis" : "grid"} />
            ))}
          </g>
          {L.axisLabels.map((a) => (
            <text key={a.text} x={a.x} y={a.y} className="vd-axis-label">
              {a.text}
            </text>
          ))}
          {L.arrows.map((a, i) => {
            const head = 11;
            const p1 = [a.hx - head * a.ux + (head / 2.4) * a.uy, a.hy - head * a.uy - (head / 2.4) * a.ux];
            const p2 = [a.hx - head * a.ux - (head / 2.4) * a.uy, a.hy - head * a.uy + (head / 2.4) * a.ux];
            const c = color(a.color);
            return (
              <g key={i}>
                <line x1={a.x1} y1={a.y1} x2={a.hx - head * 0.8 * a.ux} y2={a.hy - head * 0.8 * a.uy} stroke={c} strokeWidth={2.6} strokeDasharray={a.dashed ? "6 5" : undefined} />
                <polygon points={`${a.hx},${a.hy} ${p1.join(",")} ${p2.join(",")}`} fill={c} />
              </g>
            );
          })}
          {L.arc && <path d={L.arc.d} fill="none" stroke="var(--fg-soft)" strokeWidth={1.5} />}
          {/* A label placed away from its arrow is joined to it by a thin leader line. */}
          {L.labels.map((l, i) => {
            if (!l.placed.leader) return null;
            const [ex, ey] = leaderEnd(l.anchor, l.placed.box);
            return <line key={`leader${i}`} x1={l.anchor[0]} y1={l.anchor[1]} x2={ex} y2={ey} stroke={color(l.color)} strokeWidth={1} opacity={0.7} />;
          })}
        </svg>
        <div className="vd-labels" aria-hidden="true">
          {L.labels.map((l, i) => (
            <span
              key={i}
              className="vd-label"
              style={{ left: pct(l.placed.box.cx, L.width), top: pct(l.placed.box.cy, L.height), color: color(l.color) }}
              dangerouslySetInnerHTML={{ __html: katex.renderToString(l.tex, { throwOnError: false }) }}
            />
          ))}
        </div>
      </div>
      {props.caption && <figcaption>{props.caption}</figcaption>}
    </figure>
  );
}
