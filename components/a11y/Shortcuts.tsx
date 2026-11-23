"use client";
import { useEffect, useRef, useState } from "react";
import { singleKeysOn } from "@/lib/reading-options";

const SHORTCUTS: [string, string][] = [
  ["?", "Show or hide this list"],
  ["/  or  Ctrl K (⌘ K)", "Search the site"],
  ["n", "Next lesson"],
  ["p", "Previous lesson"],
  ["j  /  k", "Next / previous section (in focus mode)"],
  ["w  /  Shift W", "Next / previous marked word in a lesson (Enter explains it)"],
  ["Alt +  /  Alt −", "Larger / smaller text"],
  ["Alt 0", "Normal text size"],
  ["Esc", "Close a panel, or stop reading aloud"],
  ["Tab  /  Shift Tab", "Move between links and buttons"],
];

/** The glossary marks that are shown as marked (the reading option decides, through CSS) and on screen. */
function visibleTerms(): HTMLElement[] {
  return [...document.querySelectorAll<HTMLElement>("#article-body a.term")].filter(
    (el) => el.getClientRects().length > 0 && getComputedStyle(el).pointerEvents !== "none"
  );
}

/** Moves focus to the next (1) or previous (-1) marked word in reading order; false when there is none. */
function moveToTerm(dir: 1 | -1): boolean {
  const marks = visibleTerms();
  if (!marks.length) return false;
  const active = document.activeElement;
  let i: number;
  if (active && active !== document.body && active !== document.documentElement) {
    // After (or before) whatever has focus now, a word or any other control.
    const after = (m: HTMLElement) => !!(active.compareDocumentPosition(m) & Node.DOCUMENT_POSITION_FOLLOWING) && !active.contains(m);
    i = dir === 1 ? marks.findIndex((m) => after(m)) : marks.findLastIndex((m) => m !== active && !after(m) && !m.contains(active));
  } else {
    // Nothing focused: start from what is on screen.
    i = dir === 1 ? marks.findIndex((m) => m.getBoundingClientRect().top >= 0) : marks.findLastIndex((m) => m.getBoundingClientRect().bottom <= window.innerHeight);
  }
  const target = marks[i];
  if (!target) return false;
  target.focus({ preventScroll: true });
  // Centred, so the slim bar at the top never covers it (WCAG 2.4.11).
  target.scrollIntoView({ block: "center", behavior: "instant" as ScrollBehavior });
  return true;
}

/** Global keyboard shortcuts ("n"/"p" for next/previous lesson) and a "?" help panel. */
export function Shortcuts() {
  const [open, setOpen] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t?.closest?.("input, textarea, select, [contenteditable]") || e.ctrlKey || e.metaKey || e.altKey) return;
      // Single-key shortcuts can be switched off in Reading options (WCAG 2.1.4); Escape always works.
      if (e.key !== "Escape" && !singleKeysOn()) return;
      if (e.key === "?") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      } else if (e.key.toLowerCase() === "w") {
        // Next / previous marked glossary word (docs/GLOSSARY-PLAN.md §9); the marks are not in the Tab order.
        if (moveToTerm(e.shiftKey ? -1 : 1)) e.preventDefault();
      } else if (e.key.toLowerCase() === "n" || e.key.toLowerCase() === "p") {
        // Next / previous lesson; quietly nothing on pages without one (and never while typing, see above).
        const link = document.querySelector<HTMLAnchorElement>(e.key.toLowerCase() === "n" ? "a.pn-next" : "a.pn-prev");
        if (link) {
          e.preventDefault();
          link.click();
        }
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-shortcuts", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-shortcuts", onOpen);
    };
  }, [open]);

  useEffect(() => {
    if (open) closeBtn.current?.focus();
  }, [open]);

  if (!open) return null;
  return (
    <div className="search-overlay" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="search-panel shortcuts-panel" role="dialog" aria-modal="true" aria-labelledby="shortcuts-title" data-noread>
        <div className="ro-head">
          <h2 id="shortcuts-title">Keyboard shortcuts</h2>
          <button ref={closeBtn} type="button" className="secondary small" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        {/* Scrolls on its own when the list is taller than the window; focusable so arrow keys can scroll it. */}
        <div className="shortcuts-body" tabIndex={0} role="region" aria-label="List of shortcuts">
        <table className="shortcuts-table">
          <tbody>
            {SHORTCUTS.map(([k, v]) => (
              <tr key={k}>
                <th scope="row">
                  <kbd>{k}</kbd>
                </th>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="muted small">
          The one-key shortcuts (<kbd>?</kbd> <kbd>/</kbd> <kbd>n</kbd> <kbd>p</kbd> <kbd>j</kbd> <kbd>k</kbd> <kbd>w</kbd>) can be switched off
          in Reading options (the &ldquo;Aa&rdquo; button), for example if they clash with a screen reader.
        </p>
        </div>
      </div>
    </div>
  );
}

/** Footer button that opens the shortcuts panel. */
export function ShortcutsButton() {
  return (
    <button type="button" className="linklike" onClick={() => window.dispatchEvent(new Event("open-shortcuts"))}>
      Keyboard shortcuts (?)
    </button>
  );
}
