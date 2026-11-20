"use client";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import type { MoreData, PanelTerm, TermKind } from "@/lib/glossary";
import { loadGlossaryData } from "@/lib/glossary-client";
import { LinkBar } from "@/components/LinkBar";
import { SaveWord } from "@/components/terms/SaveWord";
import { SpeakerIcon, useSpeech } from "@/components/speech/SpeechProvider";

/**
 * The word panel (docs/GLOSSARY-PLAN.md §5): what a marked word means in this lesson, how to say it, where it is
 * first explained, and "Save to my words". Mounted on lesson pages with the page's own words (lib/glossary.ts
 * panelTerms), so a lesson carries only its own definitions: the word, its link and its short meaning are read from
 * "Words on this page" (components/PageTerms.tsx), and the text under "More" loads from /glossary-more/<letter> when
 * it is opened (lib/glossary.ts moreData).
 *
 * Opens on a click or tap on a marked word (lib/rehype-terms.ts), Enter or Space on a focused one (the "w" shortcut
 * moves focus to them), or a word in "Words on this page" (any element with data-open-term). Never on hover.
 *  - Wide screens: a popover under the word (above it near the bottom of the window), never over the word's line;
 *    non-modal, so focus is not trapped. Escape or a click elsewhere closes it.
 *  - Phones (< 700 px): a bottom sheet of at most 60% of the screen with the word scrolled above it; focus stays in
 *    the sheet; Escape, the close button, a tap outside or a swipe down close it.
 * Focus returns to the word (or list button) that opened it. One panel at a time. Related words open in the same
 * panel with a Back button.
 */
const KIND_LABEL: Record<TermKind, string> = { physics: "Physics", maths: "Maths", academic: "Academic", abbreviation: "Abbreviation", named: "Named" };
const PHONE = "(max-width: 699.98px)";
const FOCUSABLE = 'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';

/** A word of this page: its panel data plus what the "Words on this page" list shows. */
type FullView = PanelTerm & { term: string; short: string; href: string };
/** A word shown in the panel: a word of this page, or a related word known only by its short meaning. */
type View = FullView | { id: string; term: string; kind: TermKind; short: string; href: string; partial: true };
const isFull = (v: View): v is FullView => !("partial" in v);

/** The word, link and short meaning of a page word, from its row in "Words on this page". */
function fromList(t: PanelTerm): FullView | null {
  const a = document.querySelector<HTMLAnchorElement>(`.page-terms a[data-open-term="${CSS.escape(t.id)}"]`);
  const short = a?.closest(".pt-row")?.querySelector(".pt-short")?.textContent;
  const href = a?.getAttribute("href");
  if (!a || !short || !href) return null;
  return { ...t, term: a.textContent ?? t.id, short, href };
}

/** /glossary-more/<letter>, loaded once per letter when "More" is opened. */
const moreCache = new Map<string, Promise<MoreData>>();
function loadMore(href: string): Promise<MoreData> {
  const letter = /^\/glossary\/([^/#]+)/.exec(href)?.[1] ?? "";
  let p = moreCache.get(letter);
  if (!p) {
    p = fetch(`/glossary-more/${letter}`).then((r) => {
      if (!r.ok) throw new Error(String(r.status));
      return r.json() as Promise<MoreData>;
    });
    p.catch(() => moreCache.delete(letter)); // allow a retry (offline, say)
    moreCache.set(letter, p);
  }
  return p;
}
type More = { long?: string; example?: string; origin?: string; related: [string, string, string][] };

/** `lookup`: words that are not in `terms` are looked up in /glossary-usage.json and shown by their general meaning
 *  (the glossary pages, which carry no definitions of their own for the panel). */
export function TermPanel({ terms, lookup = false }: { terms: PanelTerm[]; lookup?: boolean }) {
  const [stack, setStack] = useState<View[]>([]);
  const [phone, setPhone] = useState(false);
  const anchor = useRef<HTMLElement | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const speakRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const pathname = usePathname();
  const speech = useSpeech();
  const view = stack[stack.length - 1];
  /** The "More" text of a word, once asked for: data null = loading, "error" = could not load */
  const [more, setMore] = useState<{ id: string; data: More | null | "error" } | null>(null);

  const close = useCallback((returnFocus = true) => {
    setStack([]);
    const a = anchor.current;
    a?.classList.remove("term-open");
    anchor.current = null;
    if (returnFocus && a?.isConnected) a.focus({ preventScroll: true });
  }, []);

  const openFor = useCallback(
    (id: string, from: HTMLElement) => {
      const p = terms.find((x) => x.id === id);
      const t = p && fromList(p);
      if (!p && !lookup) return false;
      anchor.current?.classList.remove("term-open");
      anchor.current = from;
      if (from.matches("a.term")) from.classList.add("term-open");
      setPhone(window.matchMedia(PHONE).matches);
      if (t) setStack([t]);
      else
        loadGlossaryData()
          .then((d) => {
            const w = d.words[id];
            if (w && anchor.current === from) setStack([{ id, term: w[0], short: w[1], href: w[2], kind: w[3], partial: true }]);
          })
          .catch(() => {
            const href = from.getAttribute("href");
            if (href) location.assign(href);
          });
      return true;
    },
    [terms, lookup]
  );

  // A new page (client-side navigation) closes the panel.
  useEffect(() => close(false), [pathname, terms, close]);

  // Open on a click or tap on a mark or a list button, and on Space on a focused mark (Enter already clicks a link).
  useEffect(() => {
    const target = (e: Event) => (e.target as Element | null)?.closest?.<HTMLElement>("a.term[data-term], [data-open-term]") ?? null;
    const onClick = (e: MouseEvent) => {
      // Ctrl/⌘-click or a middle click still opens the glossary entry in a new tab.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const t = target(e);
      if (!t) return;
      if (openFor(t.dataset.term ?? t.dataset.openTerm ?? "", t)) e.preventDefault();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== " ") return;
      const t = target(e);
      if (t?.matches("a.term") && openFor(t.dataset.term ?? "", t)) e.preventDefault();
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openFor]);

  // Escape closes (before the site's other Escape handlers, such as stopping read-aloud); Tab stays in the phone sheet;
  // a click outside closes.
  useEffect(() => {
    if (!view) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopImmediatePropagation();
        close();
        return;
      }
      if (e.key === "Tab" && phone && panel.current) {
        const items = [...panel.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => el.getClientRects().length);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        const inside = panel.current.contains(document.activeElement);
        if (e.shiftKey && (document.activeElement === first || !inside)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (document.activeElement === last || !inside)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as Element;
      if (panel.current?.contains(t) || t.closest?.("a.term, [data-open-term], .tts-bar, .toast")) return;
      close(phone);
    };
    window.addEventListener("keydown", onKey, true);
    document.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey, true);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [view, phone, close]);

  // Place the panel, then move focus into it.
  const placed = useRef<string | null>(null);
  useLayoutEffect(() => {
    if (!view) {
      placed.current = null;
      return;
    }
    const p = panel.current;
    const a = anchor.current;
    if (!p || !a) return;
    const place = () => {
      const vw = document.documentElement.clientWidth;
      const vh = window.innerHeight;
      const rects = a.getClientRects();
      const r = rects.length ? rects[0] : a.getBoundingClientRect();
      if (phone) {
        // Keep the word in view above the sheet (WCAG 2.4.11).
        const sheetTop = vh - p.offsetHeight;
        const by = r.bottom > sheetTop - 16 ? r.bottom - (sheetTop - 24) : r.top < 72 ? r.top - 72 : 0;
        if (by) window.scrollBy({ top: by, behavior: "instant" as ScrollBehavior });
        return;
      }
      const gap = 16;
      const w = p.offsetWidth;
      const h = p.offsetHeight;
      const left = Math.min(Math.max(gap, r.left + r.width / 2 - w / 2), vw - gap - w);
      const below = r.bottom + 10;
      const above = r.top - 10 - h;
      const up = below + h > vh - gap && above >= gap;
      p.style.left = `${left + window.scrollX}px`;
      p.style.top = `${(up ? above : below) + window.scrollY}px`;
      p.dataset.side = up ? "above" : "below";
      p.style.setProperty("--tp-arrow", `${Math.min(Math.max(14, r.left + r.width / 2 - left), w - 14)}px`);
    };
    place();
    const key = `${view.id}:${stack.length}`;
    if (placed.current !== key) {
      placed.current = key;
      p.focus({ preventScroll: true });
    }
    if (phone) return;
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [view, stack.length, phone]);

  // Swipe down on the sheet's top to close it.
  const drag = useRef<{ y: number; dy: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    if (!phone || (panel.current?.scrollTop ?? 0) > 0) return;
    drag.current = { y: e.touches[0].clientY, dy: 0 };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!drag.current || !panel.current) return;
    drag.current.dy = Math.max(0, e.touches[0].clientY - drag.current.y);
    panel.current.style.transform = `translateY(${drag.current.dy}px)`;
  };
  const onTouchEnd = () => {
    if (!drag.current || !panel.current) return;
    const far = drag.current.dy > 80;
    drag.current = null;
    panel.current.style.transform = "";
    if (far) close();
  };

  const openRelated = (id: string, href: string) => {
    const p = terms.find((x) => x.id === id);
    const t = p && fromList(p);
    if (t) return setStack((s) => [...s, t]);
    loadGlossaryData()
      .then((d) => {
        const w = d.words[id];
        if (w) setStack((s) => [...s, { id, term: w[0], short: w[1], href: w[2], kind: w[3], partial: true }]);
      })
      .catch(() => location.assign(href));
  };

  const onMoreToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    if (!e.currentTarget.open || !view || !isFull(view)) return;
    if (more?.id === view.id && more.data && more.data !== "error") return;
    const { id, href, sense } = view;
    setMore({ id, data: null });
    loadMore(href)
      .then((d) => {
        const w = d[id];
        const [long, example] = w?.m[sense] ?? [];
        setMore((m) => (m?.id === id ? { id, data: { long, example, origin: w?.o, related: w?.r ?? [] } } : m));
      })
      .catch(() => setMore((m) => (m?.id === id ? { id, data: "error" } : m)));
  };

  if (!view) return null;
  const full = isFull(view) ? view : null;
  const back = stack.length > 1 ? stack[stack.length - 2] : null;
  const body = (
    <div
      ref={panel}
      className={`tp ${phone ? "tp-sheet" : "tp-pop"}`}
      role="dialog"
      aria-modal={phone ? true : undefined}
      aria-labelledby={titleId}
      tabIndex={-1}
      data-noread
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {phone && <div className="tp-grip" aria-hidden="true" />}
      {back && (
        <button type="button" className="tp-back linklike" onClick={() => setStack((s) => s.slice(0, -1))}>
          ← Back<span className="sr-only"> to {back.term}</span>
        </button>
      )}
      <div className="tp-top">
        <div ref={speakRef} className="tp-main">
          <p className="tp-term" id={titleId}>
            {/* Read-aloud says `spoken` where the written form would be misread (ΛCDM). */}
            <span lang={full?.lang} data-noread={full?.spoken ? "" : undefined}>
              {view.term}
            </span>
            {full?.spoken && (
              <span className="sr-only" aria-hidden="true">
                {full.spoken}
              </span>
            )}
            <span className="tp-kind" data-noread>
              <span className="sr-only">, </span>
              {KIND_LABEL[view.kind]}
            </span>
          </p>
          {(full?.say || speech?.supported) && (
            <div className="tp-say">
              {full?.say && (
                <span>
                  <span className="sr-only">Say it: </span>
                  {full.say}
                </span>
              )}
              {speech?.supported && (
                <button type="button" className="tp-listen secondary small" onClick={() => speakRef.current && speech.readRegion(speakRef.current, view.term)}>
                  <SpeakerIcon /> Listen
                </button>
              )}
            </div>
          )}
          <p className="tp-short">{view.short}</p>
        </div>
        <button type="button" className="tp-close" aria-label="Close" onClick={() => close()}>
          <span aria-hidden="true">✕</span>
        </button>
      </div>

      {full?.here && (
        <p className="tp-here">
          <span className="tp-label">Here:</span> {full.here}
        </p>
      )}
      {full?.everyday && (
        <p className="tp-everyday">
          <span className="tp-label">Not the everyday meaning:</span> {full.everyday}
        </p>
      )}
      {full?.more && (
        // keyed by word, so it starts closed for each word
        <details className="tp-more" key={full.id} onToggle={onMoreToggle}>
          <summary>More</summary>
          <MoreText data={more?.id === full.id ? more.data : null} href={full.href} openRelated={openRelated} />
        </details>
      )}
      {!full && !lookup && <p className="muted small">This word is not used in this lesson; its general meaning is shown.</p>}

      {full?.introduced ? (
        <div className="tp-intro">
          <LinkBar href={full.introduced.href} kicker="First explained in" title={full.introduced.title} sub="Opens that lesson" />
        </div>
      ) : full?.newHere ? (
        <p className="tp-intro-here muted">Explained on this page.</p>
      ) : null}

      <div className="tp-actions">
        <SaveWord id={view.id} term={view.term} />
        <a href={view.href} className="tp-all">
          All meanings <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
  return createPortal(
    phone ? (
      <div className="tp-backdrop" onMouseDown={(e) => e.target === e.currentTarget && close()}>
        {body}
      </div>
    ) : (
      body
    ),
    document.body
  );
}

/** The text under "More": the fuller meaning, an example, related words and the origin, once loaded. */
function MoreText({ data, href, openRelated }: { data: More | null | "error"; href: string; openRelated: (id: string, href: string) => void }) {
  if (data === "error")
    return (
      <p className="muted small" role="status">
        Could not load the rest (offline?). <a href={href}>Open the glossary entry</a>.
      </p>
    );
  if (!data)
    return (
      <p className="muted small" role="status">
        Loading…
      </p>
    );
  return (
    <>
      {data.long && <p>{data.long}</p>}
      {data.example && (
        <p>
          <span className="tp-label">Example:</span> {data.example}
        </p>
      )}
      {data.related.length > 0 && (
        <p className="tp-related">
          <span className="tp-label">Related:</span>{" "}
          {data.related.map(([id, term, to], i) => (
            <span key={id}>
              {i > 0 && ", "}
              <button type="button" className="linklike" onClick={() => openRelated(id, to)}>
                {term}
              </button>
            </span>
          ))}
        </p>
      )}
      {data.origin && (
        <p>
          <span className="tp-label">Origin:</span> {data.origin}
        </p>
      )}
    </>
  );
}
