/**
 * A tab opened before a deploy keeps running the old JavaScript: Next.js swaps pages in place, so page content
 * comes fresh from the server while read-aloud, search and the other client code stay old. Once
 * components/offline/UpdateNotice.tsx sees a newer version, markStale() makes every following navigation a full page
 * load, so the tab quietly moves to the new code (also when the reader chose "Later" on the notice).
 */
let stale = false;

export function isStale(): boolean {
  return stale;
}

/** Internal links of the current site that the router would otherwise open in place. */
function internalHref(a: HTMLAnchorElement): string | null {
  if (a.target && a.target !== "_self") return null;
  if (a.hasAttribute("download")) return null;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin) return null;
  // A link to a part of the same page needs no reload.
  if (url.pathname === location.pathname && url.search === location.search && url.hash) return null;
  return url.href;
}

export function markStale(): void {
  if (stale || typeof window === "undefined") return;
  stale = true;
  // Capture phase on window: runs before Next.js's own link handler, which listens further down.
  window.addEventListener(
    "click",
    (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = internalHref(a);
      if (!href) return;
      e.preventDefault();
      e.stopPropagation();
      location.assign(href);
    },
    true
  );
}

/** Go to an internal page: in place normally, as a full page load once the tab is out of date. */
export function go(href: string, push: (href: string) => void): void {
  if (stale) location.assign(href);
  else push(href);
}
