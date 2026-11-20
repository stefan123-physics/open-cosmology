import manifest from "../public/phet/manifest.json";

/** A PhET simulation hosted on this site (public/phet/manifest.json: unmodified copies, pinned versions). */
export type LocalSim = { title: string; version: string; language: string; file: string; source: string; page: string; sha256: string; bytes: number };

const sims = manifest.simulations as Record<string, LocalSim>;

export function localSim(id: string): LocalSim | undefined {
  return sims[id];
}

export function allLocalSims(): [string, LocalSim][] {
  return Object.entries(sims);
}
