/**
 * Saving the site for offline use, on the reader's request (docs/PLAN.md §5). Runs in the page: downloads pages and
 * the files they need into Cache Storage, where public/sw.js finds them when the network is unavailable.
 * Cache names must match public/sw.js.
 */
export const SAVED = "oc-saved-v1";
export const VISITED = "oc-visited-v1";
export const ASSETS = "oc-assets-v1";

export type OfflineCourse = { id: string; title: string; href: string; urls: string[]; phet: string[]; mb: number };
export type OfflineManifest = { version: string; shell: string[]; courses: OfflineCourse[]; assets: string[]; sharedMb: number; totalMb: number };

/** Offline saving works only where a service worker controls the page (production builds, supporting browsers). */
export function offlineSupported(): boolean {
  return typeof window !== "undefined" && "caches" in window && "serviceWorker" in navigator && !!navigator.serviceWorker.controller;
}

/** The deployed manifest. `fresh` skips every cache (to compare versions); otherwise the service worker may answer
 *  from its copy when offline. */
export async function loadManifest(fresh = false): Promise<OfflineManifest> {
  const r = await fetch(fresh ? `/offline-manifest.json?check=${Date.now()}` : "/offline-manifest.json", fresh ? { cache: "no-store" } : undefined);
  if (!r.ok) throw new Error(`offline manifest: HTTP ${r.status}`);
  return r.json();
}

/** The version of the site this tab is running (baked in at build time, next.config.ts). */
export const BUILD_VERSION = process.env.NEXT_PUBLIC_BUILD_VERSION ?? "";

// Which version the saved copies hold, and when they were saved: kept as one small entry in the saved-pages cache.
const META = "/__offline-meta";
/** `triedAt`: when the background refresh last started (components/offline/UpdateNotice.tsx waits a day between tries). */
export type OfflineMeta = { version: string; savedAt: string; triedAt?: string };

export async function readMeta(): Promise<OfflineMeta | null> {
  try {
    const r = await (await caches.open(SAVED)).match(META);
    return r ? ((await r.json()) as OfflineMeta) : null;
  } catch {
    return null;
  }
}

/** After saving: record the version, unless older saved copies are still waiting to be refreshed (then the old label
 *  stays, so the background refresh still brings everything, including what was just saved, up to date). */
export async function noteSaved(version: string): Promise<void> {
  const meta = await readMeta();
  if (!meta || meta.version === version) await writeMeta(version);
}

export async function writeMeta(version: string): Promise<void> {
  const body = JSON.stringify({ version, savedAt: new Date().toISOString() } satisfies OfflineMeta);
  await (await caches.open(SAVED)).put(META, new Response(body, { headers: { "Content-Type": "application/json" } }));
}

/** Note that a background refresh is starting, keeping the version label (it changes only once the refresh succeeds). */
export async function noteRefreshTried(meta: OfflineMeta): Promise<void> {
  const body = JSON.stringify({ ...meta, triedAt: new Date().toISOString() } satisfies OfflineMeta);
  await (await caches.open(SAVED)).put(META, new Response(body, { headers: { "Content-Type": "application/json" } }));
}

/** Wait until the browser is idle (or a moment passes), so a long background job never keeps a phone busy. */
function idle(): Promise<void> {
  return new Promise((resolve) => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(() => resolve(), { timeout: 2000 });
    else window.setTimeout(resolve, 250);
  });
}

/** Bring every saved page up to the deployed version: re-download the saved pages (and the simulations of fully
 *  saved courses) with the new version's files, remove script and style files the new version no longer uses,
 *  and record the new version. Pages that are not saved are untouched. */
export async function refreshSaved(
  manifest: OfflineManifest,
  onProgress: (done: number, total: number) => void = () => {},
  /** Background mode: one page at a time in idle moments, so the phone stays responsive (UpdateNotice). */
  gentle = false,
): Promise<{ refreshed: number; failed: string[] }> {
  const saved = await savedPaths();
  if (!saved.size) {
    // Nothing saved (any longer): old build files are not needed, and the version note is brought up to date so the
    // cleanup keeps running (components/offline/UpdateNotice.tsx).
    await pruneAssets(manifest);
    await writeMeta(manifest.version);
    return { refreshed: 0, failed: [] };
  }
  const phet = [...new Set(manifest.courses.filter((c) => c.urls.every((u) => saved.has(u))).flatMap((c) => c.phet))];
  const { failed } = await savePages([...saved], phet, manifest.assets, onProgress, gentle);
  if (failed.length) return { refreshed: saved.size - failed.length, failed }; // keep the old version label: retried later
  await pruneAssets(manifest);
  await writeMeta(manifest.version);
  return { refreshed: saved.size, failed };
}

/**
 * Remove build files (scripts, styles, fonts under /_next/static/) that the given version no longer uses. Every
 * deploy brings new file names, and the service worker caches each file it serves, so without this the cache grows
 * with every deploy. Call it only when nothing still needs the old files: from a tab running `manifest.version`,
 * and when saved pages (if any) are on that version too.
 */
export async function pruneAssets(manifest: OfflineManifest): Promise<number> {
  const keep = new Set(manifest.assets);
  const assets = await caches.open(ASSETS);
  let removed = 0;
  for (const req of await assets.keys()) {
    const path = new URL(req.url).pathname;
    if (path.startsWith("/_next/static/") && !keep.has(path)) {
      await assets.delete(req);
      removed++;
    }
  }
  return removed;
}

/** Script, style and font files a page needs (fonts from its CSS: woff2 only, which every supporting browser uses). */
async function assetsOf(html: string, seen: Set<string>): Promise<string[]> {
  const found = new Set<string>();
  for (const m of html.matchAll(/(?:src|href)="(\/_next\/static\/[^"]+)"/g)) found.add(m[1].replace(/&amp;/g, "&"));
  const out: string[] = [];
  for (const url of found) {
    if (seen.has(url)) continue;
    seen.add(url);
    out.push(url);
    if (url.endsWith(".css")) {
      try {
        const css = await (await fetch(url)).text();
        for (const f of css.matchAll(/url\((?:"|')?([^)"']+\.woff2)(?:"|')?\)/g)) {
          const font = new URL(f[1], location.origin + url).pathname;
          if (!seen.has(font)) {
            seen.add(font);
            out.push(font);
          }
        }
      } catch {
        /* the font list is a nicety; pages still render with fallback fonts */
      }
    }
  }
  return out;
}

/** Save pages (and the files they need, and any PhET simulations) for offline use. */
export async function savePages(
  urls: string[],
  phet: string[],
  /** Every script and style file of the build (some load only on demand, e.g. the graph library). */
  shared: string[],
  onProgress: (done: number, total: number) => void,
  /** Pause for an idle moment before each page (background refresh). */
  gentle = false,
): Promise<{ saved: number; failed: string[] }> {
  const saved = await caches.open(SAVED);
  const assets = await caches.open(ASSETS);
  const seen = new Set<string>();
  const failed: string[] = [];
  const total = urls.length + phet.length + 1;
  let done = 0;
  try {
    await navigator.storage?.persist?.();
  } catch {
    /* not essential */
  }
  for (const url of urls) {
    if (gentle) await idle();
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(String(response.status));
      const html = await response.clone().text();
      await saved.put(url, response);
      for (const asset of await assetsOf(html, seen)) {
        if (await assets.match(asset)) continue;
        try {
          const r = await fetch(asset);
          if (r.ok) await assets.put(asset, r);
        } catch {
          /* retried on the next save */
        }
      }
    } catch {
      failed.push(url);
    }
    onProgress(++done, total);
  }
  for (const file of phet) {
    try {
      if (!(await assets.match(file))) {
        const r = await fetch(file);
        if (!r.ok) throw new Error(String(r.status));
        await assets.put(file, r);
      }
    } catch {
      failed.push(file);
    }
    onProgress(++done, total);
  }
  // Shared files: scripts and styles (including ones loaded only on demand) and the fonts their CSS uses.
  for (const asset of shared) {
    if (seen.has(asset) || (await assets.match(asset))) continue;
    seen.add(asset);
    try {
      const r = await fetch(asset);
      if (r.ok) {
        if (asset.endsWith(".css")) await assetsOf(`<link href="${asset}">`, new Set()).then(async (fonts) => {
          for (const f of fonts) if (f !== asset && !(await assets.match(f))) { const fr = await fetch(f); if (fr.ok) await assets.put(f, fr); }
        });
        await assets.put(asset, r);
      }
    } catch {
      failed.push(asset);
    }
  }
  onProgress(++done, total);
  for (const extra of ["/search-index.json", "/offline-manifest.json", "/manifest.webmanifest"]) {
    try {
      const r = await fetch(extra);
      if (r.ok) await assets.put(extra, r);
    } catch {
      /* optional */
    }
  }
  await saveSearchIndex(assets);
  return { saved: urls.length - failed.filter((f) => urls.includes(f)).length, failed };
}

/**
 * The full-text search index (public/pagefind, about 1 MB; scripts/build-search.mts lists its files in files.json),
 * so search finds lesson text offline too. Without it, offline search falls back to titles (components/Search.tsx).
 */
export async function saveSearchIndex(assets?: Cache): Promise<boolean> {
  try {
    const cache = assets ?? (await caches.open(ASSETS));
    const list = await fetch("/pagefind/files.json", { cache: "no-store" });
    if (!list.ok) return false;
    await cache.put("/pagefind/files.json", list.clone());
    const { files } = (await list.json()) as { files: string[] };
    for (const f of files) {
      if (await cache.match(f)) continue; // index files are named by their content
      const r = await fetch(f);
      if (r.ok) await cache.put(f, r);
    }
    return true;
  } catch {
    return false;
  }
}

export async function savedPaths(): Promise<Set<string>> {
  const saved = await caches.open(SAVED);
  return new Set((await saved.keys()).map((r) => new URL(r.url).pathname).filter((p) => p !== META));
}

export async function removePages(urls: string[]): Promise<void> {
  const saved = await caches.open(SAVED);
  for (const u of urls) await saved.delete(u);
}

/** Remove every offline copy (saved and visited pages, cached files). */
export async function removeAll(): Promise<void> {
  for (const name of [SAVED, VISITED, ASSETS]) await caches.delete(name);
}

export async function storageUsedMb(): Promise<number | null> {
  try {
    const e = await navigator.storage?.estimate?.();
    return e?.usage != null ? Math.round((e.usage / 1e6) * 10) / 10 : null;
  } catch {
    return null;
  }
}
