"use client";
import { useEffect, useState } from "react";
import { loadManifest, noteSaved, offlineSupported, removePages, savedPaths, savePages, type OfflineCourse } from "@/lib/offline";

/** "Save this course for offline" on a course page. Hidden where offline saving is not available. */
export function SaveCourse({ courseId }: { courseId: string }) {
  const [course, setCourse] = useState<OfflineCourse | null>(null);
  const [shared, setShared] = useState<{ files: string[]; mb: number; version: string }>({ files: [], mb: 0, version: "" });
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [progress, setProgress] = useState<[number, number]>([0, 0]);
  const [message, setMessage] = useState("");

  // On a first visit the service worker takes control a moment after the page loads: check again then.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const on = () => setReady(true);
    navigator.serviceWorker.addEventListener("controllerchange", on);
    return () => navigator.serviceWorker.removeEventListener("controllerchange", on);
  }, []);

  useEffect(() => {
    if (!offlineSupported()) return;
    let alive = true;
    (async () => {
      try {
        const m = await loadManifest();
        const c = m.courses.find((x) => x.id === courseId) ?? null;
        if (!alive || !c) return;
        setCourse(c);
        setShared({ files: m.assets, mb: m.sharedMb, version: m.version });
        const saved = await savedPaths();
        if (alive && c.urls.every((u) => saved.has(u))) setState("saved");
      } catch {
        /* stay hidden */
      }
    })();
    return () => {
      alive = false;
    };
  }, [courseId, ready]);

  if (!course) return null;

  const save = async () => {
    setState("saving");
    setMessage("");
    const { failed } = await savePages(course.urls, course.phet, shared.files, (d, t) => setProgress([d, t]));
    if (failed.length) {
      setState("error");
      setMessage(`${failed.length} item(s) could not be saved. Check the connection and try again.`);
    } else {
      await noteSaved(shared.version);
      setState("saved");
      setMessage("Saved. This course now works without an internet connection on this device.");
    }
  };
  const remove = async () => {
    await removePages(course.urls);
    setState("idle");
    setMessage("Offline copy removed.");
  };

  return (
    <div className="offline-save" data-noread>
      {state === "saved" ? (
        <>
          <span className="offline-status">✓ Saved for offline on this device</span>
          <button type="button" className="secondary small" onClick={save}>
            Update copy
          </button>
          <button type="button" className="secondary small" onClick={remove}>
            Remove
          </button>
        </>
      ) : (
        <button type="button" className="secondary small" onClick={save} disabled={state === "saving"}>
          {state === "saving"
            ? `Saving… ${progress[0]} of ${progress[1]}`
            : `Save this course for offline (about ${Math.round((course.mb + shared.mb) * 10) / 10} MB${course.phet.length ? ", simulations included" : ""})`}
        </button>
      )}
      <span className="offline-message" role="status" aria-live="polite">
        {state === "saving" ? "Keep this page open while saving." : message}
      </span>
    </div>
  );
}
