"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { BUILD_VERSION, loadManifest, noteRefreshTried, offlineSupported, pruneAssets, readMeta, refreshSaved } from "@/lib/offline";
import { markStale } from "@/lib/stale";

/**
 * Keeps a long-open tab and the reader's offline copies in step with the deployed site (docs/PLAN.md §5).
 *  - When a newer version is deployed (its version, from Vercel's commit, differs from the one this tab runs), a small
 *    notice offers to reload. Pages fetched later are new anyway; the notice is for the tab that is already open.
 *  - Saved offline copies of an older version are re-downloaded quietly in the background, gently: at most once a day,
 *    one page at a time in idle moments, and not on mobile data, a slow connection or with data saver on. Until then
 *    the older copies keep working offline (their build files are kept), and Reading options → Offline shows that they
 *    are from an older version, with a button to update them at once.
 *  - Build files of older versions are removed from the cache once nothing needs them (lib/offline.ts pruneAssets),
 *    for every reader, so the cache does not grow with each deploy.
 * Checks: shortly after load, when the tab becomes visible again, when the connection returns, and every 30 minutes.
 */
const DISMISSED = "oc-update-dismissed";
const DAY = 24 * 60 * 60 * 1000;

type Connection = { saveData?: boolean; type?: string; effectiveType?: string };
/** Data saver, mobile data or a slow connection: no large background downloads. */
function meteredOrSlow(): boolean {
  const c = (navigator as Navigator & { connection?: Connection }).connection;
  if (!c) return false;
  return !!c.saveData || c.type === "cellular" || ["slow-2g", "2g", "3g"].includes(c.effectiveType ?? "");
}

export function UpdateNotice() {
  const [newer, setNewer] = useState<string | null>(null);
  const refreshing = useRef(false);

  const check = useCallback(async () => {
    if (!navigator.onLine || !BUILD_VERSION) return;
    let manifest;
    try {
      manifest = await loadManifest(true);
    } catch {
      return;
    }
    if (manifest.version !== BUILD_VERSION) {
      // From now on links load pages in full, so this tab moves to the new code (lib/stale.ts).
      markStale();
      let dismissed: string | null = null;
      try {
        dismissed = sessionStorage.getItem(DISMISSED);
      } catch {
        /* storage unavailable */
      }
      if (dismissed !== manifest.version) setNewer(manifest.version);
    }
    // Background refresh of saved copies made with an older version.
    if (!offlineSupported() || refreshing.current) return;
    const meta = await readMeta();
    if (!meta || meta.version === manifest.version) {
      // Nothing saved, or saved on the deployed version: build files of older versions are no longer needed. Only from
      // a tab running the deployed version, whose own code may still load files on demand (the graph library).
      if (manifest.version === BUILD_VERSION) await pruneAssets(manifest).catch(() => 0);
      return;
    }
    // Gentle: not on mobile data or a slow connection, and at most once a day (since the last save or try).
    const last = Math.max(Date.parse(meta.savedAt) || 0, Date.parse(meta.triedAt ?? "") || 0);
    if (meteredOrSlow() || Date.now() - last < DAY) return;
    refreshing.current = true;
    await noteRefreshTried(meta);
    window.dispatchEvent(new CustomEvent("oc-offline-refresh", { detail: { state: "start" } }));
    try {
      const result = await refreshSaved(manifest, undefined, true);
      window.dispatchEvent(new CustomEvent("oc-offline-refresh", { detail: { state: "done", ...result } }));
    } catch {
      window.dispatchEvent(new CustomEvent("oc-offline-refresh", { detail: { state: "failed" } }));
    } finally {
      refreshing.current = false;
    }
  }, []);

  useEffect(() => {
    const first = window.setTimeout(check, 3000); // after the page has settled
    const every = window.setInterval(check, 30 * 60 * 1000);
    const onVisible = () => document.visibilityState === "visible" && check();
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("online", check);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(every);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("online", check);
    };
  }, [check]);

  if (!newer) return null;
  const later = () => {
    try {
      sessionStorage.setItem(DISMISSED, newer);
    } catch {
      /* storage unavailable */
    }
    setNewer(null);
  };
  return (
    <div className="update-notice" role="status" data-noread>
      <span>A new version of Open Cosmology is available.</span>
      <span className="update-notice-buttons">
        <button type="button" className="small" onClick={() => window.location.reload()}>
          Reload
        </button>
        <button type="button" className="secondary small" onClick={later}>
          Later
        </button>
      </span>
    </div>
  );
}
