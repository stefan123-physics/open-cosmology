"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { titleHits, type SearchDoc } from "@/lib/search";
import { singleKeysOn } from "@/lib/reading-options";
import { isStale } from "@/lib/stale";

/**
 * Header search button + search panel. Opens with a click, "/" or Ctrl/⌘+K.
 *  - Titles: /search-index.json (pages and courses, built at build time), searched here; shown first.
 *  - Text: the full-text index in /pagefind (scripts/build-search.mts), loaded on first use. A search downloads only
 *    the index chunks it needs and the short excerpts of the results it shows.
 * Offline without a saved index, only titles are searched, with a note.
 */
type Pagefind = {
  options: (o: Record<string, unknown>) => Promise<void>;
  init: () => void;
  debouncedSearch: (q: string, o?: Record<string, unknown>, ms?: number) => Promise<{ results: PfResult[] } | null>;
};
type PfResult = { id: string; data: () => Promise<PfData> };
type PfSub = { title: string; url: string; excerpt: string; locations?: number[] };
type PfData = { url: string; meta: { title?: string; where?: string }; excerpt: string; sub_results?: PfSub[] };

/** One row in the results: a title match or a text match (page, section, snippet). */
type Item = { key: string; group: "term" | "title" | "text"; href: string; title: string; meta: string; section?: string; snippet?: string; role?: string };

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

let pagefind: Promise<Pagefind> | null = null;
function loadPagefind(): Promise<Pagefind> {
  if (!pagefind)
    pagefind = (async () => {
      const url = "/pagefind/pagefind.js";
      const pf = (await import(/* webpackIgnore: true */ /* turbopackIgnore: true */ url)) as Pagefind;
      await pf.options({ excerptLength: 26 });
      pf.init();
      return pf;
    })().catch((e) => {
      pagefind = null; // try again next time (the connection may be back)
      throw e;
    });
  return pagefind;
}

const TEXT_RESULTS = 8;
const OFFLINE_NOTE = "Full-text search needs a connection, or save the site for offline use.";

export function Search() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [docs, setDocs] = useState<SearchDoc[] | null>(null);
  const [error, setError] = useState(false);
  const [text, setText] = useState<{ q: string; items: Item[] } | null>(null);
  const [textState, setTextState] = useState<"idle" | "loading" | "ready" | "unavailable">("idle");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [mac, setMac] = useState(false);

  const show = useCallback(() => {
    setOpen(true);
    if (!docs)
      fetch("/search-index.json")
        .then((r) => r.json())
        .then(setDocs)
        .catch(() => setError(true));
    // Start loading the full-text engine while the reader types.
    if (textState === "idle") {
      setTextState("loading");
      loadPagefind()
        .then(() => setTextState("ready"))
        .catch(() => setTextState("unavailable"));
    }
  }, [docs, textState]);

  useEffect(() => {
    setMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement)?.closest?.("input, textarea, select, [contenteditable]");
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing && !e.ctrlKey && !e.metaKey && !e.altKey && singleKeysOn())) {
        e.preventDefault();
        show();
      }
    };
    window.addEventListener("keydown", onKey);
    // The slim bar's search button (components/SlimBar.tsx) opens this same dialog.
    window.addEventListener("open-search", show);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-search", show);
    };
  }, [show]);

  useEffect(() => {
    if (!open) return;
    setTimeout(() => input.current?.focus(), 0);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Full-text search, debounced; only the newest query's results are kept.
  useEffect(() => {
    const query = q.trim();
    if (!query || textState !== "ready") return;
    let live = true;
    (async () => {
      const pf = await loadPagefind();
      const r = await pf.debouncedSearch(query, {}, 180);
      if (!r || !live) return;
      const data = await Promise.all(r.results.slice(0, TEXT_RESULTS).map((x) => x.data()));
      if (!live) return;
      const items: Item[] = data.map((d) => {
        // The section with the most matches; the part before the first heading has the page's own title.
        const best = (d.sub_results ?? []).reduce<PfSub | null>(
          (a, b) => (!a || (b.locations?.length ?? 0) > (a.locations?.length ?? 0) ? b : a),
          null
        );
        const title = d.meta.title ?? d.url;
        const section = best && best.title !== title ? best.title : undefined;
        return {
          key: `text:${d.url}`,
          group: "text",
          href: (best?.url ?? d.url).replace(/\.html(?=#|$)/, ""),
          title,
          meta: d.meta.where ?? "",
          section,
          snippet: best?.excerpt ?? d.excerpt,
        };
      });
      setText({ q: query, items });
    })().catch(() => live && setTextState("unavailable"));
    return () => {
      live = false;
    };
  }, [q, textState]);

  const query = q.trim();
  // Glossary words first ("Definition" rows, opening the word's entry), then page and course titles, then the text.
  const terms: Item[] =
    docs && query
      ? titleHits(docs.filter((d) => d.kind === "term"), query, 3).map((d) => ({
          key: `term:${d.href}`,
          group: "term",
          href: d.href,
          title: d.title,
          meta: d.meta,
          snippet: escapeHtml(d.summary),
        }))
      : [];
  const titles: Item[] =
    docs && query
      ? titleHits(docs.filter((d) => d.kind !== "term"), query).map((d) => ({ key: `title:${d.href}`, group: "title", href: d.href, title: d.title, meta: d.kind === "course" ? "Course" : d.meta, role: d.role }))
      : [];
  const titleHrefs = new Set(titles.map((t) => t.href));
  // A glossary word already shown as a Definition row is not repeated among the text results.
  const termHrefs = new Set(terms.map((t) => t.href));
  const textItems = text && text.q === query ? text.items.filter((t) => !titleHrefs.has(t.href.split("#")[0]) && !termHrefs.has(t.href)) : [];
  const items = [...terms, ...titles, ...textItems];
  useEffect(() => setSel(0), [q]);

  const go = (item: Item) => {
    setOpen(false);
    setQ("");
    // A tab running an older version of the site loads the page in full (lib/stale.ts).
    if (isStale()) return location.assign(item.href);
    const [path, hash] = item.href.split("#");
    if (!hash) return router.push(item.href);
    router.push(item.href, { scroll: false });
    // Scroll once the target page has rendered, and again after late content (buttons, graphs)
    // has settled, so the section heading ends up at the top.
    let tries = 0;
    const t = setInterval(() => {
      const el = location.pathname === path ? document.getElementById(hash) : null;
      if (el || ++tries > 50) {
        clearInterval(t);
        if (!el) return;
        el.scrollIntoView({ block: "start" });
        setTimeout(() => el.scrollIntoView({ block: "start" }), 450);
      }
    }, 80);
  };

  const row = (h: Item, i: number) => (
    <a
      key={h.key}
      id={`hit-${i}`}
      role="option"
      aria-selected={i === sel}
      href={h.href}
      className={`search-hit ${i === sel ? "sel" : ""} ${h.role ?? ""}`}
      onMouseEnter={() => setSel(i)}
      onClick={(e) => {
        e.preventDefault();
        go(h);
      }}
    >
      <span className="sh-meta">
        {h.meta}
        {h.role === "cosmology" && <span className="sh-tag">Cosmology</span>}
      </span>
      <span className="sh-title">
        {h.title}
        {h.section && <span className="sh-section"> › {h.section}</span>}
      </span>
      {/* Pagefind's excerpt: text of our own pages, escaped, with the matches in <mark> */}
      {h.snippet && <span className="sh-snippet" dangerouslySetInnerHTML={{ __html: h.snippet }} />}
    </a>
  );

  const searchingText = query && textState === "ready" && (!text || text.q !== query);
  return (
    <>
      <button className="search-btn" onClick={show} aria-label="Search the site" title={`Search (${mac ? "⌘" : "Ctrl"}+K or /)`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span className="hide-sm">Search</span>
        <kbd className="hide-sm">{mac ? "⌘K" : "Ctrl K"}</kbd>
      </button>

      {/* Rendered on <body>, so it still shows when its button's header is hidden (focus mode, closed phone menu). */}
      {open &&
        createPortal(
          <div className="search-overlay" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)} data-noread>
            <div className="search-panel" role="dialog" aria-modal="true" aria-label="Search the site">
              <div className="search-field">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input
                  ref={input}
                  type="search"
                  value={q}
                  placeholder="Search lessons, topics, formulas…"
                  aria-label="Search"
                  aria-controls="search-results"
                  aria-activedescendant={items[sel] ? `hit-${sel}` : undefined}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setOpen(false);
                    else if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setSel((s) => Math.min(s + 1, items.length - 1));
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setSel((s) => Math.max(s - 1, 0));
                    } else if (e.key === "Enter" && items[sel]) go(items[sel]);
                  }}
                />
                <button className="secondary small" onClick={() => setOpen(false)} aria-label="Close search">
                  Esc
                </button>
              </div>

              <div className="search-results" id="search-results" role="listbox" aria-label="Search results">
                {error && <p className="search-empty">The search index could not be loaded.</p>}
                {!error && !docs && <p className="search-empty">Loading…</p>}
                {docs && !query && (
                  <div className="search-empty">
                    <p>Try “Hubble”, “associative”, “Jeans length” or “third law”.</p>
                    <p className="muted small">
                      {textState === "unavailable"
                        ? `Lesson titles only: ${OFFLINE_NOTE}`
                        : `The text of all ${docs.filter((d) => d.kind === "page").length} lessons is searched, and the glossary`}{" "}
                      · ↑↓ to move · Enter to open
                    </p>
                  </div>
                )}
                {terms.length > 0 && (
                  <div role="group" aria-labelledby="sr-terms">
                    <p className="search-group" id="sr-terms">
                      Definitions
                    </p>
                    {terms.map((h, i) => row(h, i))}
                  </div>
                )}
                {titles.length > 0 && (
                  <div role="group" aria-labelledby="sr-titles">
                    <p className="search-group" id="sr-titles">
                      Titles
                    </p>
                    {titles.map((h, i) => row(h, terms.length + i))}
                  </div>
                )}
                {textItems.length > 0 && (
                  <div role="group" aria-labelledby="sr-text">
                    <p className="search-group" id="sr-text">
                      In the lessons
                    </p>
                    {textItems.map((h, i) => row(h, terms.length + titles.length + i))}
                  </div>
                )}
                {docs && query && textState === "unavailable" && <p className="search-note muted small">{OFFLINE_NOTE}</p>}
                {docs && query && searchingText && !items.length && <p className="search-empty">Searching…</p>}
                {docs && query && !searchingText && !items.length && <p className="search-empty">No results for “{q}”.</p>}
              </div>
              {/* Announces the number of results to screen readers as they change. */}
              <p className="sr-only" role="status" aria-live="polite">
                {query && !searchingText ? `${items.length} ${items.length === 1 ? "result" : "results"}` : ""}
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
