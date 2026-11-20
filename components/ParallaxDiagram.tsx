"use client";
import { useEffect, useRef, useState } from "react";
import { PD, parallaxLayout, pdEm } from "../lib/parallax-layout";
import { leaderEnd } from "../lib/label-layout";

/**
 * Generated parallax diagram defining the parsec: the distance at which 1 AU (Earth–Sun)
 * subtends an angle of one arcsecond. Not to scale (the real angle is far too small to see).
 * Labels are page text laid over the drawing, placed by lib/parallax-layout.ts (checked by content:check).
 */
export function ParallaxDiagram({ caption }: { caption?: string }) {
  const { W, H, sun, earth, star, orbitR } = PD;
  const stage = useRef<HTMLDivElement>(null);
  const [em, setEm] = useState(() => pdEm(W, 16));
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const update = () => setEm(pdEm(el.getBoundingClientRect().width || W, parseFloat(getComputedStyle(document.documentElement).fontSize) || 16));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["style", "data-large"] });
    return () => {
      ro.disconnect();
      mo.disconnect();
    };
  }, [W]);
  const { labels } = parallaxLayout(em);
  return (
    <figure className="parallax-diagram">
      <div ref={stage} className="vd-stage" style={{ maxWidth: W, aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Parallax: one astronomical unit seen from one parsec subtends one arcsecond">
          <rect width={W} height={H} rx="12" className="pd-bg" />
          {/* Earth's orbit, seen edge-on as a dashed circle around the Sun */}
          <circle cx={sun.x} cy={sun.y} r={orbitR} className="pd-orbit" />
          <line x1={sun.x} y1={sun.y} x2={star.x} y2={star.y} className="pd-line" />
          <line x1={earth.x} y1={earth.y} x2={star.x} y2={star.y} className="pd-line" />
          <line x1={sun.x} y1={sun.y} x2={earth.x} y2={earth.y} className="pd-au" />
          <circle cx={sun.x} cy={sun.y} r={11} className="pd-sun" />
          <circle cx={earth.x} cy={earth.y} r={6} className="pd-earth" />
          <circle cx={star.x} cy={star.y} r={6} className="pd-star" />
          {/* angle p at the star */}
          <path d={`M ${star.x - 60} ${star.y} A 60 60 0 0 1 ${star.x - 59.4} ${star.y - 11.2}`} className="pd-angle" />
          {labels.map((l) => {
            if (!l.placed.leader) return null;
            const [ex, ey] = leaderEnd(l.anchor, l.placed.box);
            return <line key={`leader-${l.text}`} x1={l.anchor[0]} y1={l.anchor[1]} x2={ex} y2={ey} className="pd-leader" />;
          })}
        </svg>
        <div className="vd-labels" aria-hidden="true">
          {labels.map((l) => (
            <span
              key={l.text}
              className={`pd-label${l.accent ? " accent" : ""}`}
              style={{ left: `${(l.placed.box.cx / W) * 100}%`, top: `${(l.placed.box.cy / H) * 100}%` }}
            >
              {l.text}
            </span>
          ))}
        </div>
      </div>
      <p className="pd-note">If p = 1 arcsecond, then d = 1 parsec ≈ 3.26 light-years (not to scale).</p>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
