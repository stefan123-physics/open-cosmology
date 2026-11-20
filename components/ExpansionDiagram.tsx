"use client";
import { useMemo, useState } from "react";

/**
 * Generated diagram of homogeneous expansion. Galaxies sit at fixed comoving positions on a
 * jittered grid; their physical positions are a(t) × comoving position. Click any galaxy to
 * make it the observer: the arrows show every other galaxy's velocity relative to it, which is
 * always proportional to distance (Hubble's law) — from every galaxy, not just ours.
 */
export function ExpansionDiagram({ caption }: { caption?: string }) {
  const [a, setA] = useState(1);
  const [observer, setObserver] = useState(12);
  const [showArrows, setShowArrows] = useState(true);

  const galaxies = useMemo(() => {
    let seed = 3;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const out: { x: number; y: number }[] = [];
    for (let i = -2; i <= 2; i++)
      for (let j = -2; j <= 2; j++) out.push({ x: i + (rnd() - 0.5) * 0.5, y: j + (rnd() - 0.5) * 0.5 });
    return out;
  }, []);

  const S = 52; // pixels per comoving unit at a = 1
  const W = 360;
  const H = 360;
  const o = galaxies[observer];
  // Keep the observer in the centre, as it would see itself.
  const px = (g: { x: number; y: number }) => [W / 2 + (g.x - o.x) * S * a, H / 2 - (g.y - o.y) * S * a];
  const Hrate = 0.45; // arrow length per unit distance (illustrative)

  return (
    <figure className="expansion-diagram">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Galaxies at scale factor ${a.toFixed(2)}, seen from the highlighted galaxy`}>
        <defs>
          <marker id="ed-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--accent)" />
          </marker>
        </defs>
        <rect width={W} height={H} rx="12" className="ed-bg" />
        {showArrows &&
          galaxies.map((g, i) => {
            if (i === observer) return null;
            const [x, y] = px(g);
            const [ox, oy] = px(o);
            const dx = (x - ox) * Hrate;
            const dy = (y - oy) * Hrate;
            if (x < -20 || x > W + 20 || y < -20 || y > H + 20) return null;
            return <line key={`v${i}`} x1={x} y1={y} x2={x + dx * 0.55} y2={y + dy * 0.55} stroke="var(--accent)" strokeWidth={1.6} markerEnd="url(#ed-arrow)" opacity={0.85} />;
          })}
        {galaxies.map((g, i) => {
          const [x, y] = px(g);
          if (x < -10 || x > W + 10 || y < -10 || y > H + 10) return null;
          const me = i === observer;
          return (
            <g key={i} onClick={() => setObserver(i)} style={{ cursor: "pointer" }}>
              <circle cx={x} cy={y} r={14} fill="transparent" />
              <circle cx={x} cy={y} r={me ? 7 : 4.5} className={me ? "ed-me" : "ed-galaxy"} />
            </g>
          );
        })}
      </svg>
      <p className="ed-hint">Tap a galaxy, or use the buttons below.</p>
      <div className="ed-controls">
        <button type="button" className="secondary small" onClick={() => setObserver((observer + galaxies.length - 1) % galaxies.length)}>
          ← Previous galaxy
        </button>
        <button type="button" className="secondary small" onClick={() => setObserver((observer + 1) % galaxies.length)}>
          Next galaxy →
        </button>
        <span className="sr-only" aria-live="polite">
          {`Standing on galaxy ${observer + 1} of ${galaxies.length}. Every other galaxy moves away from it, faster the farther away it is.`}
        </span>
        <label>
          scale factor <i>a</i> = {a.toFixed(2)}
          <input type="range" min={0.6} max={1.8} step={0.01} value={a} onChange={(e) => setA(Number(e.target.value))} />
        </label>
        <label className="ed-check">
          <input type="checkbox" checked={showArrows} onChange={(e) => setShowArrows(e.target.checked)} /> velocity arrows
        </label>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
