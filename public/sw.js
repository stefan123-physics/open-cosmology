/*
 * Open Cosmology service worker (docs/PLAN.md §5). Hand-written and small on purpose, so it is easy to audit.
 * Nothing leaves the device; it only stores copies of this site's own pages and files in Cache Storage.
 *
 *   oc-saved    pages the reader saved on request (components/offline/*): kept until the reader removes them
 *   oc-visited  copies of pages the reader opened (they were downloaded anyway); the newest 60 are kept
 *   oc-assets   scripts, styles, fonts, icons, PhET simulations — content-hashed or versioned, so cache-first is safe
 *   oc-core     the offline page
 *
 * The full-text search index (/pagefind/) is network first like the search index: pagefind.js keeps its name from
 * build to build, so a cached copy could otherwise outlive the index it belongs to.
 *
 * Pages are always fetched fresh when online (network first); the cache is only used when the network fails.
 * Requests for React Server Component data are never cached: if one fails offline, Next.js falls back to a normal
 * page load, which this worker can answer from the cache.
 */
const VERSION = "4"; // bump when this file's logic changes
const SAVED = "oc-saved-v1";
const VISITED = "oc-visited-v1";
const ASSETS = "oc-assets-v1";
const CORE = "oc-core-v1";
const KEEP = new Set([SAVED, VISITED, ASSETS, CORE]);
const VISITED_MAX = 60;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const core = await caches.open(CORE);
      try {
        await core.add(new Request("/offline", { cache: "reload" }));
      } catch {
        /* offline at install: try again next time */
      }
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      for (const name of await caches.keys()) if (name.startsWith("oc-") && !KEEP.has(name)) await caches.delete(name);
      await self.clients.claim();
    })(),
  );
});

const isAsset = (url) =>
  !url.pathname.startsWith("/pagefind/") &&
  (url.pathname.startsWith("/_next/static/") ||
  url.pathname.startsWith("/phet/") ||
  url.pathname.startsWith("/icons/") ||
  /\.(woff2?|ttf|css|js|png|svg|ico)$/.test(url.pathname));
const isRsc = (request, url) => url.searchParams.has("_rsc") || request.headers.get("RSC") === "1";

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (isRsc(request, url)) return; // network only (see above)

  // Files first: a PhET simulation opens in a frame, which the browser requests like a page.
  if (isAsset(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }
  if (request.mode === "navigate") {
    event.respondWith(page(request, url));
    return;
  }
  // search indexes, web app manifest, offline manifest: fresh when online, cached copy when not
  event.respondWith(networkFirst(request, ASSETS));
});

async function page(request, url) {
  const key = url.pathname; // one copy per page, whatever the query or hash
  try {
    const response = await fetch(request);
    if (response.ok && response.type === "basic") {
      const copy = response.clone();
      (async () => {
        const saved = await caches.open(SAVED);
        if (await saved.match(key)) await saved.put(key, copy);
        else {
          const visited = await caches.open(VISITED);
          await visited.delete(key); // re-insert, so the most recently visited pages are last
          await visited.put(key, copy);
          const keys = await visited.keys();
          for (const old of keys.slice(0, Math.max(0, keys.length - VISITED_MAX))) await visited.delete(old);
        }
      })();
    }
    return response;
  } catch {
    const cached = (await (await caches.open(SAVED)).match(key)) || (await (await caches.open(VISITED)).match(key));
    if (cached) return cached;
    const offline = await (await caches.open(CORE)).match("/offline");
    return offline || new Response("You are offline and this page has not been saved.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(ASSETS);
  const hit = await cache.match(request, { ignoreSearch: true });
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok && response.type === "basic") cache.put(request, response.clone());
  return response;
}

async function networkFirst(request, name) {
  const cache = await caches.open(name);
  try {
    const response = await fetch(request);
    if (response.ok && response.type === "basic") cache.put(request, response.clone());
    return response;
  } catch {
    // Data files saved with a course ("Save for offline" puts the shell, /glossary-usage.json among them, in SAVED).
    const hit = (await cache.match(request, { ignoreSearch: true })) || (await (await caches.open(SAVED)).match(new URL(request.url).pathname));
    if (hit) return hit;
    throw new Error("offline");
  }
}
