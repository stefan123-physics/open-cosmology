"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { loadOptions, saveOptions, applyOptions, singleKeysOn } from "@/lib/reading-options";

/** The parts of a lesson shown one at a time, in page order. On a problem set each problem is one part: an exercise
 *  under its own `##` heading through that section, one outside any section as a unit of its own. */
const LESSON_UNITS = ".prereqs, #article-body > .md-section, #article-body > .exercise, .page-symbols, .page-terms, .leads-to, .practice, .quiz, .flashcards";

type Unit = { els: HTMLElement[]; label: string };
export type FocusKind = "lesson" | "reading" | "calm";

/** What focus mode does on the current page: lessons and reading pages (About, Accessibility, Privacy …) are shown
 *  one part at a time; every other page just gets the calm view (menus hidden, nothing moving). */
export function focusKind(): FocusKind {
  if (document.querySelector("article.topic")) return "lesson";
  const prose = document.querySelector("main .page-narrow.prose");
  if (prose && prose.querySelectorAll(":scope > h2").length >= 2) return "reading";
  return "calm";
}

function collectUnits(kind: FocusKind): Unit[] {
  if (kind === "lesson") {
    const article = document.querySelector("article.topic");
    if (!article) return [];
    return [...article.querySelectorAll<HTMLElement>(LESSON_UNITS)].map((el) => {
      const h = el.querySelector("h2");
      return { els: [el], label: (el.dataset.label || h?.textContent || "Introduction").replace(/#$/, "").trim() };
    });
  }
  if (kind === "reading") {
    // A reading page is a flat list of elements: each <h2> starts a part; what comes before the first <h2>
    // (apart from the title, which always stays) is the introduction.
    const prose = document.querySelector<HTMLElement>("main .page-narrow.prose");
    if (!prose) return [];
    const units: Unit[] = [];
    let current: Unit | null = null;
    for (const el of [...prose.children] as HTMLElement[]) {
      if (el.tagName === "H1") continue;
      if (el.tagName === "H2") {
        current = { els: [el], label: el.textContent?.replace(/#$/, "").trim() || "Section" };
        units.push(current);
      } else if (current) current.els.push(el);
      else {
        if (!units.length || units[0].label !== "Introduction") units.unshift({ els: [], label: "Introduction" });
        units[0].els.push(el);
      }
    }
    return units.filter((u) => u.els.length > 0);
  }
  return [];
}

const contains = (u: Unit, node: Node) => u.els.some((e) => e === node || e.contains(node));

/**
 * Focus mode (Reading options → "Focus mode"), on every page: menus, sidebars and footer are hidden and nothing
 * moves. On lessons and reading pages one part is shown at a time, with Previous / Next, a part picker and the
 * j / k keys; on other pages the bar offers only "Exit focus".
 *
 * Hidden parts are marked hidden="until-found", so the browser's find-in-page can still reach them (Chrome, Edge,
 * recent Firefox): a match fires "beforematch" and that part is shown. Links to a section (#id), read-aloud moving on
 * to the next section, and printing (everything is printed) all show the right part.
 */
export function FocusMode() {
  const pathname = usePathname();
  const [on, setOn] = useState(false);
  const [kind, setKind] = useState<FocusKind>("calm");
  const [units, setUnits] = useState<Unit[]>([]);
  const [index, setIndex] = useState(0);
  const [announce, setAnnounce] = useState("");
  const [findWorks, setFindWorks] = useState(true);
  const moveFocus = useRef(false);

  // Follow the reading option (it can be switched while the page is open).
  useEffect(() => {
    const html = document.documentElement;
    const read = () => setOn(html.dataset.focus === "on");
    read();
    const obs = new MutationObserver(read);
    obs.observe(html, { attributes: true, attributeFilter: ["data-focus"] });
    setFindWorks("onbeforematch" in document.body);
    return () => obs.disconnect();
  }, []);

  // Work out the page's parts when focus mode starts and after every change of page.
  useEffect(() => {
    const html = document.documentElement;
    html.style.removeProperty("--focus-room");
    if (!on) {
      delete html.dataset.focusActive;
      delete html.dataset.focusLast;
      setUnits([]);
      return;
    }
    let list: Unit[] = [];
    // After the new page has rendered (setTimeout, not requestAnimationFrame, which pauses in background tabs).
    const frame = window.setTimeout(() => {
      const k = focusKind();
      list = collectUnits(k);
      setKind(k);
      setUnits(list);
      html.dataset.focusActive = "true";
      if (!list.length) html.dataset.focusLast = "true";
      // Start at the part that holds the linked section, if any.
      const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      const start = target ? list.findIndex((u) => contains(u, target)) : -1;
      setIndex(start >= 0 ? start : 0);
    }, 0);
    return () => {
      window.clearTimeout(frame);
      list.forEach((u) => u.els.forEach((e) => e.removeAttribute("hidden")));
    };
  }, [on, pathname]);

  // Show the current part, hide the others (until found).
  useEffect(() => {
    if (!on || !units.length) return;
    const i = Math.min(index, units.length - 1);
    units.forEach((u, j) => u.els.forEach((e) => (j === i ? e.removeAttribute("hidden") : e.setAttribute("hidden", "until-found"))));
    document.documentElement.dataset.focusLast = i === units.length - 1 ? "true" : "false";
    setAnnounce(`Part ${i + 1} of ${units.length}: ${units[i].label}`);
    if (moveFocus.current) {
      moveFocus.current = false;
      const first = units[i].els[0];
      const h = (first.tagName === "H2" ? first : first.querySelector<HTMLElement>("h2")) ?? first;
      if (!h.hasAttribute("tabindex")) h.setAttribute("tabindex", "-1");
      h.focus({ preventScroll: true });
      // The first part opens with the page title above it; every later part starts at the top of the screen. A short
      // part near the end of the page cannot scroll that far, so add just enough room below the page for it
      // (otherwise the part would start halfway down the screen, at a different height each time).
      const html = document.documentElement;
      html.style.removeProperty("--focus-room");
      if (i === 0) window.scrollTo(0, 0);
      else {
        // Measured again after each change: a minimum page height can absorb part of the added room.
        // A little space above the part (1rem), so its heading does not touch the edge of the screen.
        const target = () => Math.max(0, first.getBoundingClientRect().top + window.scrollY - parseFloat(getComputedStyle(html).fontSize));
        let room = 0;
        for (let n = 0; n < 3; n++) {
          const short = target() - (html.scrollHeight - window.innerHeight);
          if (short <= 0) break;
          room += Math.ceil(short);
          html.style.setProperty("--focus-room", `${room}px`);
        }
        window.scrollTo(0, target());
      }
    }
  }, [on, units, index]);

  const go = useCallback(
    (i: number) => {
      if (!units.length) return;
      moveFocus.current = true;
      setIndex(Math.max(0, Math.min(units.length - 1, i)));
    },
    [units.length]
  );

  // Find-in-page, links to a section, and read-aloud moving on all reveal the right part.
  useEffect(() => {
    if (!on || !units.length) return;
    const onMatch = (e: Event) => {
      const i = units.findIndex((u) => u.els.includes(e.currentTarget as HTMLElement));
      if (i >= 0) setIndex(i);
    };
    units.forEach((u) => u.els.forEach((e) => e.addEventListener("beforematch", onMatch)));
    const onHash = () => {
      const t = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      const i = t ? units.findIndex((u) => contains(u, t)) : -1;
      if (i >= 0) {
        setIndex(i);
        requestAnimationFrame(() => t!.scrollIntoView({ block: "start" }));
      }
    };
    window.addEventListener("hashchange", onHash);
    // Read-aloud marks the sentence being read with .tts-active; follow it into the next part.
    const root = document.querySelector("main");
    const obs = new MutationObserver((records) => {
      for (const r of records) {
        const el = r.target as HTMLElement;
        if (r.attributeName === "class" && el.classList?.contains("tts-active")) {
          const i = units.findIndex((u) => contains(u, el));
          if (i >= 0) setIndex(i);
        }
      }
    });
    if (root) obs.observe(root, { attributes: true, attributeFilter: ["class"], subtree: true });
    return () => {
      units.forEach((u) => u.els.forEach((e) => e.removeEventListener("beforematch", onMatch)));
      window.removeEventListener("hashchange", onHash);
      obs.disconnect();
    };
  }, [on, units]);

  // j / k: next / previous part — only in focus mode, never while typing, and only if single-key shortcuts are on.
  useEffect(() => {
    if (!on || !units.length) return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t?.closest?.("input, textarea, select, [contenteditable]") || e.ctrlKey || e.metaKey || e.altKey || !singleKeysOn()) return;
      if (e.key === "j") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "k") {
        e.preventDefault();
        go(index - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [on, units.length, index, go]);

  const leave = () => {
    const o = { ...loadOptions(), focus: "off" as const };
    applyOptions(o);
    saveOptions(o);
  };

  if (!on) return null;
  const paged = units.length > 0;
  const i = Math.min(index, Math.max(0, units.length - 1));
  return (
    <nav className="focus-bar" aria-label="Focus mode" data-noread data-kind={kind}>
      {paged ? (
        <>
          <button type="button" className="secondary" onClick={() => go(i - 1)} disabled={i === 0}>
            <span aria-hidden="true">←</span> Previous
          </button>
          <label className="focus-pick">
            <span className="sr-only">Part of the page</span>
            <select value={i} onChange={(e) => go(Number(e.target.value))}>
              {units.map((u, j) => (
                <option key={j} value={j}>
                  {j + 1} of {units.length}: {u.label}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="secondary" onClick={() => go(i + 1)} disabled={i === units.length - 1}>
            Next <span aria-hidden="true">→</span>
          </button>
        </>
      ) : (
        <span className="focus-label">Focus mode: menus hidden</span>
      )}
      <button type="button" className="secondary focus-leave" onClick={leave}>
        Exit focus
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {announce}
      </span>
      {paged && !findWorks && (
        <span className="focus-find-note">Find in page searches only this part here; exit focus mode to search the whole page.</span>
      )}
    </nav>
  );
}
