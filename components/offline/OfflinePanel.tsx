"use client";
import { useCallback, useEffect, useState } from "react";
import {
  loadManifest,
  noteSaved,
  offlineSupported,
  readMeta,
  refreshSaved,
  removeAll,
  savedPaths,
  savePages,
  storageUsedMb,
  type OfflineManifest,
  type OfflineMeta,
} from "@/lib/offline";

/** The "Offline" part of the Reading options panel: what is saved and from which version, save the whole site,
 *  update or remove the offline copies. */
export function OfflinePanel() {
  const [supported, setSupported] = useState(false);
  const [manifest, setManifest] = useState<OfflineManifest | null>(null);
  const [meta, setMeta] = useState<OfflineMeta | null>(null);
  const [savedCount, setSavedCount] = useState(0);
  const [used, setUsed] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<[number, number]>([0, 0]);
  const [message, setMessage] = useState("");

  const refreshStatus = useCallback(async () => {
    setMeta(await readMeta());
    setSavedCount((await savedPaths()).size);
    setUsed(await storageUsedMb());
  }, []);

  useEffect(() => {
    if (!offlineSupported()) return;
    setSupported(true);
    loadManifest(navigator.onLine).then(setManifest).catch(() => {});
    refreshStatus();
    // The background refresh (components/offline/UpdateNotice.tsx) reports here.
    const on = (e: Event) => {
      const d = (e as CustomEvent).detail as { state: string; failed?: string[] };
      if (d.state === "start") setMessage("Updating your offline copies to the new version…");
      else if (d.state === "done")
        setMessage(d.failed?.length ? "Some offline copies could not be updated; they will be tried again later." : "Offline copies updated to the new version.");
      else setMessage("Offline copies could not be updated; they will be tried again later.");
      if (d.state !== "start") refreshStatus();
    };
    window.addEventListener("oc-offline-refresh", on);
    return () => window.removeEventListener("oc-offline-refresh", on);
  }, [refreshStatus]);

  if (!supported) {
    return (
      <p className="ro-note">
        Offline saving is available on the published site in browsers that support it. Pages you have opened may still be
        in your browser&apos;s cache.
      </p>
    );
  }

  const outdated = !!(meta && manifest && meta.version !== manifest.version);
  const savedOn = meta ? new Date(meta.savedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "";

  const saveAll = async () => {
    if (!manifest) return;
    setBusy(true);
    setMessage("");
    const urls = [...new Set([...manifest.shell, ...manifest.courses.flatMap((c) => c.urls)])];
    const phet = [...new Set(manifest.courses.flatMap((c) => c.phet))];
    const { failed } = await savePages(urls, phet, manifest.assets, (d, t) => setProgress([d, t]));
    if (!failed.length) await noteSaved(manifest.version);
    setBusy(false);
    await refreshStatus();
    setMessage(failed.length ? `${failed.length} item(s) could not be saved; try again when the connection is better.` : "The whole site is saved on this device.");
  };
  const update = async () => {
    if (!manifest) return;
    setBusy(true);
    setMessage("");
    const { failed } = await refreshSaved(manifest, (d, t) => setProgress([d, t]));
    setBusy(false);
    await refreshStatus();
    setMessage(failed.length ? `${failed.length} item(s) could not be updated; try again later.` : "Offline copies are up to date.");
  };
  const clear = async () => {
    await removeAll();
    await refreshStatus();
    setMessage("All offline copies removed.");
  };

  return (
    <div className="ro-offline">
      <p className="ro-note">
        {savedCount
          ? `${savedCount} page${savedCount === 1 ? "" : "s"} saved on this device${savedOn ? ` (${savedOn})` : ""}${
              outdated ? ", from an older version of the site" : manifest ? ", up to date" : ""
            }.`
          : "Courses can be saved one at a time from their course page."}{" "}
        Saved pages stay on this device only.
        {used != null && ` Stored now: about ${used} MB.`}
      </p>
      <div className="ro-offline-buttons">
        {outdated && (
          <button type="button" className="secondary small" onClick={update} disabled={busy}>
            {busy ? `Updating… ${progress[0]} of ${progress[1]}` : "Update offline copies"}
          </button>
        )}
        <button type="button" className="secondary small" onClick={saveAll} disabled={busy || !manifest}>
          {busy && !outdated ? `Saving… ${progress[0]} of ${progress[1]}` : `Save the whole site${manifest ? ` (about ${manifest.totalMb} MB)` : ""}`}
        </button>
        <button type="button" className="secondary small" onClick={clear} disabled={busy}>
          Remove offline copies
        </button>
      </div>
      <p className="ro-note">
        Some read-aloud voices (for example Chrome&apos;s online voices) need a connection; offline, choose a voice installed on your
        device.
      </p>
      <p className="ro-note" role="status" aria-live="polite">
        {busy ? "Keep this page open while saving." : message}
      </p>
    </div>
  );
}
