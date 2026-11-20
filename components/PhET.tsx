"use client";
import { useState } from "react";

/**
 * Embeds a PhET HTML5 simulation (click-to-load: each one is 2.5–5 MB), always with PhET's required credit.
 * The simulation runs from this site: `src` is an unmodified, version-pinned copy in public/phet (lib/phet.ts).
 */
export function PhET({
  id,
  title,
  height = 480,
  src,
  version,
}: {
  id: string;
  title?: string;
  height?: number;
  /** Local file, e.g. /phet/projectile-motion_1.0.36_en.html */
  src: string;
  version: string;
}) {
  const [open, setOpen] = useState(false);
  const name = title ?? id.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
  return (
    <figure className="phet" data-noread>
      {open ? (
        // No loading="lazy": the frame is only created after the reader asks for it, and a lazy frame in a
        // background tab or an offline page may never start.
        <iframe src={src} title={`PhET simulation: ${name}`} style={{ height }} allowFullScreen />
      ) : (
        <button className="phet-load" style={{ height: Math.min(height, 260) }} onClick={() => setOpen(true)}>
          <span className="phet-play" aria-hidden>▶</span>
          <span>
            Load the interactive simulation <strong>{name}</strong>
          </span>
          <small>Runs on this site · PhET version {version}</small>
        </button>
      )}
      {/* Attribution text required verbatim by PhET (https://phet.colorado.edu/en/licensing#attribution-requirements). */}
      <figcaption>
        <a href={`https://phet.colorado.edu/en/simulations/${id}`} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
        . Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under{" "}
        <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">
          CC BY-NC 4.0
        </a>{" "}
        (
        <a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer">
          https://phet.colorado.edu
        </a>
        ).{" "}
        <a href={src} target="_blank" rel="noopener">
          Open full screen
        </a>
      </figcaption>
    </figure>
  );
}
