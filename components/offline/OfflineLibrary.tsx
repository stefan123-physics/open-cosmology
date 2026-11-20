"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SAVED, VISITED } from "@/lib/offline";

/** On the offline page: the pages this device has copies of, with their titles. */
export function OfflineLibrary() {
  const [pages, setPages] = useState<{ href: string; title: string; saved: boolean }[] | null>(null);

  useEffect(() => {
    if (!("caches" in window)) {
      setPages([]);
      return;
    }
    (async () => {
      const out: { href: string; title: string; saved: boolean }[] = [];
      for (const [name, saved] of [[SAVED, true], [VISITED, false]] as const) {
        const cache = await caches.open(name);
        for (const req of await cache.keys()) {
          const href = new URL(req.url).pathname;
          if (href === "/offline" || href === "/__offline-meta" || out.some((p) => p.href === href)) continue;
          const html = await (await cache.match(req))?.text();
          // The browser's own parser decodes entities such as &#x27; in titles.
          const parsed = html ? new DOMParser().parseFromString(html, "text/html").title : "";
          const title = parsed.replace(/ · Open Cosmology$/, "") || href;
          out.push({ href, title, saved });
        }
      }
      out.sort((a, b) => a.title.localeCompare(b.title));
      setPages(out);
    })().catch(() => setPages([]));
  }, []);

  if (pages === null) return <p className="muted">Looking for saved pages…</p>;
  if (!pages.length) return <p>No pages are saved on this device yet. Once you are online, open a course page and choose “Save this course for offline”.</p>;
  return (
    <>
      <p>These pages are on this device and work without a connection:</p>
      <ul>
        {pages.map((p) => (
          <li key={p.href}>
            <Link href={p.href}>{p.title}</Link>
            {!p.saved && <span className="muted small"> (recently visited)</span>}
          </li>
        ))}
      </ul>
    </>
  );
}
