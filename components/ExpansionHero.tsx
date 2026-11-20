"use client";
import { useEffect, useMemo, useState } from "react";

/**
 * Generated diagram of homogeneous expansion: galaxies at fixed comoving positions,
 * physical positions = a(t) × comoving. Drag the slider or let it play.
 */
export function ExpansionHero() {
  const [a, setA] = useState(1);
  const [playing, setPlaying] = useState(false);

  const galaxies = useMemo(() => {
    // deterministic pseudo-random scatter
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    return Array.from({ length: 46 }, () => ({ x: (rnd() - 0.5) * 2, y: (rnd() - 0.5) * 2, r: 1.4 + rnd() * 2.2 }));
  }, []);

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
      const t = ((now - t0) / 6000) % 1;
      setA(1 + 0.9 * (0.5 - 0.5 * Math.cos(2 * Math.PI * t)));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const S = 150;
  const ref = galaxies[3];
  return (
    <figure className="expansion-hero" data-noread aria-label="Animated diagram of the expanding universe">
      <svg viewBox="-160 -160 320 320" role="img" aria-label={`Galaxies spread apart as the scale factor grows; a = ${a.toFixed(2)}`}>
        <defs>
          <radialGradient id="glow">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="-160" y="-160" width="320" height="320" rx="18" className="eh-bg" />
        {galaxies.map((g, i) => {
          const x = g.x * S * 0.55 * a;
          const y = g.y * S * 0.55 * a;
          if (Math.abs(x) > 155 || Math.abs(y) > 155) return null;
          return <circle key={i} cx={x} cy={y} r={g.r} className="eh-galaxy" />;
        })}
        {/* Hubble's law: velocity of each galaxy relative to the reference galaxy is proportional to distance */}
        {[0, 9, 17, 25].map((i) => {
          const g = galaxies[i];
          if (g === ref) return null;
          return (
            <line
              key={i}
              x1={ref.x * S * 0.55 * a}
              y1={ref.y * S * 0.55 * a}
              x2={g.x * S * 0.55 * a}
              y2={g.y * S * 0.55 * a}
              className="eh-ruler"
            />
          );
        })}
        <circle cx={ref.x * S * 0.55 * a} cy={ref.y * S * 0.55 * a} r={9} fill="url(#glow)" />
        <circle cx={ref.x * S * 0.55 * a} cy={ref.y * S * 0.55 * a} r={3.4} className="eh-us" />
      </svg>
      <figcaption>
        <label>
          scale factor <i>a</i> = {a.toFixed(2)}
          <input
            type="range"
            min={1}
            max={1.9}
            step={0.01}
            value={a}
            onChange={(e) => {
              setPlaying(false);
              setA(Number(e.target.value));
            }}
          />
        </label>
        <button className="secondary small" onClick={() => setPlaying((p) => !p)}>
          {playing ? "Pause" : "Play"}
        </button>
        <span className="muted small">
          Every distance grows by the same factor, so farther galaxies recede faster: Hubble&apos;s law.
        </span>
      </figcaption>
    </figure>
  );
}
