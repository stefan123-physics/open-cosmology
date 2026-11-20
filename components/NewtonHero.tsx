"use client";
import { useEffect, useMemo, useState } from "react";

/**
 * Generated diagram of Newton's cannon: a ball fired horizontally from a mountain top, under inverse-square gravity.
 * Slow, it falls back to the ground; fast enough, it falls all the way round: an orbit. The paths are integrated
 * from the law of gravity (velocity Verlet), not drawn by hand. Drag the slider or let it play.
 * Speed is given as a fraction of the circular-orbit speed at the launch height.
 */
const R = 50; // Earth's radius, in drawing units
const R0 = 72; // launch radius: Earth plus a (much exaggerated) mountain
const V_MIN = 0.4;
const V_MAX = 1.12;
const TRAILS = [0.5, 0.65, 0.8, 0.92, 1];

/** Points of the path for launch speed v (units: GM = R0, so v = 1 is a circular orbit at R0). */
function trajectory(v: number): [number, number][] {
  const gm = R0; // circular speed at R0 is sqrt(GM / R0) = 1
  let x = 0;
  let y = -R0;
  let vx = v;
  let vy = 0;
  const dt = 0.25;
  const pts: [number, number][] = [[x, y]];
  let angle = 0;
  let prev = Math.atan2(y, x);
  const acc = (px: number, py: number) => {
    const r3 = Math.pow(px * px + py * py, 1.5);
    return [(-gm * px) / r3, (-gm * py) / r3];
  };
  let [ax, ay] = acc(x, y);
  for (let i = 0; i < 6000; i++) {
    x += vx * dt + 0.5 * ax * dt * dt;
    y += vy * dt + 0.5 * ay * dt * dt;
    const [nax, nay] = acc(x, y);
    vx += 0.5 * (ax + nax) * dt;
    vy += 0.5 * (ay + nay) * dt;
    ax = nax;
    ay = nay;
    const r = Math.hypot(x, y);
    if (r < R) {
      // land on the surface
      pts.push([(x / r) * R, (y / r) * R]);
      break;
    }
    const th = Math.atan2(y, x);
    let d = th - prev;
    if (d > Math.PI) d -= 2 * Math.PI;
    if (d < -Math.PI) d += 2 * Math.PI;
    angle += Math.abs(d);
    prev = th;
    if (i % 4 === 0) pts.push([x, y]);
    if (angle >= 2 * Math.PI) {
      pts.push([0, -R0]);
      break;
    }
  }
  return pts;
}

const toPath = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join("");

export function NewtonHero() {
  const [v, setV] = useState(0.8);
  const [playing, setPlaying] = useState(false);

  const stars = useMemo(() => {
    let seed = 11;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    return Array.from({ length: 34 }, () => ({ x: (rnd() - 0.5) * 300, y: (rnd() - 0.5) * 300, r: 0.6 + rnd() * 1.1 }))
      .filter((s) => Math.hypot(s.x, s.y) > R0 + 50);
  }, []);
  const trails = useMemo(() => TRAILS.map((t) => toPath(trajectory(t))), []);
  const pts = useMemo(() => trajectory(v), [v]);
  const end = pts[pts.length - 1];
  const orbit = Math.hypot(end[0], end[1]) > R + 1;

  useEffect(() => {
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "reduce";
    if (reduce) return;
    setPlaying(true);
  }, []);

  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = ((now - t0) / 9000) % 1;
      setV(V_MIN + (V_MAX - V_MIN) * (0.5 - 0.5 * Math.cos(2 * Math.PI * t)));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const said = orbit
    ? `at ${v.toFixed(2)} times orbital speed the ball falls all the way round the Earth: an orbit`
    : `at ${v.toFixed(2)} times orbital speed the ball falls back to the ground`;

  return (
    <figure className="expansion-hero newton-hero" data-noread aria-label="Animated diagram of Newton's cannon">
      <svg viewBox="-160 -160 320 320" role="img" aria-label={`A cannon on a mountain fires a ball sideways; ${said}.`}>
        <rect x="-160" y="-160" width="320" height="320" rx="18" className="eh-bg" />
        {/* Notebook ruling: no stroke of its own, so invisible unless a theme styles it (theme-highschool.css). */}
        <g className="nh-ruling" aria-hidden="true">
          {Array.from({ length: 18 }, (_, i) => -136 + i * 16).map((y) => (
            <line key={y} x1={-158} x2={158} y1={y} y2={y} className="nh-rule" />
          ))}
          <line x1={-126} x2={-126} y1={-158} y2={158} className="nh-margin" />
        </g>
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} className="eh-galaxy" />
        ))}
        {trails.map((d, i) => (
          <path key={i} d={d} className="nh-trail" />
        ))}
        <circle cx={0} cy={0} r={R} className="nh-earth" />
        <path d={`M-13 ${-R + 3} L0 ${-R0} L13 ${-R + 3} Z`} className="nh-mountain" />
        <path d={toPath(pts)} className="nh-path" />
        <circle cx={end[0]} cy={end[1]} r={3.4} className="eh-us" />
      </svg>
      <figcaption>
        <label>
          launch speed = {v.toFixed(2)} × orbital speed
          <input
            type="range"
            min={V_MIN}
            max={V_MAX}
            step={0.01}
            value={v}
            onChange={(e) => {
              setPlaying(false);
              setV(Number(e.target.value));
            }}
          />
        </label>
        <button className="secondary small" onClick={() => setPlaying((p) => !p)}>
          {playing ? "Pause" : "Play"}
        </button>
        <span className="muted small">
          Fire faster and the ball lands further away. Fast enough, it keeps falling but never reaches the ground: an orbit.
        </span>
      </figcaption>
    </figure>
  );
}
