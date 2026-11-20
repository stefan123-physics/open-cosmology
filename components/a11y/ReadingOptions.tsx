"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { OfflinePanel } from "@/components/offline/OfflinePanel";
import { focusKind, type FocusKind } from "@/components/a11y/FocusMode";
import { createPortal } from "react-dom";
import {
  applyOptions,
  DEFAULT_OPTIONS,
  loadOptions,
  saveOptions,
  SCALES,
  type ReadingOptions as Options,
} from "@/lib/reading-options";

/**
 * "Aa" button in the masthead that opens the reading options: text size, line and letter spacing,
 * reading font (classic, Atkinson Hyperlegible, Lexend for dyslexia), high contrast, reduced motion,
 * narrower lines and highlighted links. Shortcuts: Alt + "+" / Alt + "-" change text size.
 */
export function ReadingOptions() {
  const [open, setOpen] = useState(false);
  const [o, setO] = useState<Options>(DEFAULT_OPTIONS);
  const panel = useRef<HTMLDivElement>(null);
  // What focus mode does on this page (sections one at a time, or the calm view only); the panel says so.
  const [focusHere, setFocusHere] = useState<FocusKind>("calm");
  useEffect(() => {
    if (open) setFocusHere(focusKind());
  }, [open]);
  const button = useRef<HTMLButtonElement>(null);
  // The panel opens under the button that asked for it: this one, or the "Aa" of the slim bar (components/SlimBar.tsx),
  // which sends an "open-reading-options" event with itself as the anchor.
  const anchor = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const onOpen = (e: Event) => {
      anchor.current = ((e as CustomEvent).detail?.anchor as HTMLElement | undefined) ?? null;
      setO(loadOptions());
      setOpen(true);
    };
    window.addEventListener("open-reading-options", onOpen);
    return () => window.removeEventListener("open-reading-options", onOpen);
  }, []);

  useEffect(() => {
    const loaded = loadOptions();
    setO(loaded);
    // The motion preference of the operating system is respected unless overridden.
    if (loaded.motion === "normal" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.dataset.motion = "reduce";
    }
  }, []);

  const update = (patch: Partial<Options>) => {
    setO((prev) => {
      const next = { ...prev, ...patch };
      applyOptions(next);
      saveOptions(next);
      return next;
    });
  };
  const step = (dir: 1 | -1) => {
    const i = SCALES.findIndex((v) => v >= o.scale - 0.001);
    const next = SCALES[Math.min(SCALES.length - 1, Math.max(0, (i === -1 ? 1 : i) + dir))];
    update({ scale: next });
  };

  // Keyboard: Alt + "+" / "-" / "0" change text size from anywhere; Escape closes the panel.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "+" || e.key === "=")) {
        e.preventDefault();
        step(1);
      } else if (e.altKey && e.key === "-") {
        e.preventDefault();
        step(-1);
      } else if (e.altKey && e.key === "0") {
        e.preventDefault();
        update({ scale: 1 });
      } else if (e.key === "Escape" && open) {
        setOpen(false);
        (anchor.current ?? button.current)?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLElement>("button, input, select")?.focus();
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panel.current?.contains(t) && !button.current?.contains(t) && !anchor.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Keep the panel inside the viewport. It is placed under the button, but shifted (and given a
  // maximum height) so that it never runs off any edge, whatever the text size or window width.
  useLayoutEffect(() => {
    if (!open) return;
    const place = () => {
      const p = panel.current;
      const a = anchor.current;
      const b = a && a.getClientRects().length ? a : button.current;
      if (!p || !b) return;
      const gap = 16;
      const vw = document.documentElement.clientWidth;
      const vh = window.innerHeight;
      const r = b.getBoundingClientRect();
      const width = Math.min(p.offsetWidth, vw - 2 * gap);
      const left = Math.min(Math.max(gap, r.left), vw - gap - width);
      const top = Math.min(r.bottom + 8, vh - 200);
      p.style.left = `${left}px`;
      p.style.top = `${Math.max(gap, top)}px`;
      p.style.maxHeight = `${vh - Math.max(gap, top) - gap}px`;
    };
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, { passive: true });
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place);
    };
  }, [open, o.scale, o.font, o.spacing]);

  const choice = <K extends keyof Options>(key: K, value: Options[K], label: string) => (
    <button
      type="button"
      className={`ro-choice ${o[key] === value ? "on" : ""}`}
      aria-pressed={o[key] === value}
      onClick={() => update({ [key]: value } as Partial<Options>)}
    >
      {label}
    </button>
  );

  return (
    <div className="ro">
      <button
        ref={button}
        type="button"
        className="ro-button"
        aria-expanded={open}
        aria-controls="reading-options"
        onClick={() => {
          // Re-read the saved options: focus mode can be left from its own bar while the panel is closed.
          if (!open) setO(loadOptions());
          anchor.current = null;
          setOpen(!open);
        }}
        title="Reading options: text size, spacing, font, contrast (Alt + / Alt −)"
      >
        <span aria-hidden="true" className="ro-glyph">
          A<small>a</small>
        </span>
        <span className="hide-sm">Reading</span>
        <span className="sr-only">options</span>
      </button>
      {/* On <body>, so it also opens when its own button is hidden (phone menu closed, focus mode). */}
      {open &&
        createPortal(
        <div ref={panel} id="reading-options" className="ro-panel" role="dialog" aria-label="Reading options" data-noread>
          <div className="ro-head">
            <h2>Reading options</h2>
            <button type="button" className="secondary small" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>

          <fieldset>
            <legend>Text size</legend>
            <div className="ro-size">
              <button type="button" className="secondary" onClick={() => step(-1)} aria-label="Smaller text" disabled={o.scale <= SCALES[0]}>
                A−
              </button>
              <output aria-live="polite">{Math.round(o.scale * 100)}%</output>
              <button type="button" className="secondary" onClick={() => step(1)} aria-label="Larger text" disabled={o.scale >= SCALES[SCALES.length - 1]}>
                A+
              </button>
            </div>
            <input
              type="range"
              min={0}
              max={SCALES.length - 1}
              step={1}
              value={Math.max(0, SCALES.findIndex((v) => Math.abs(v - o.scale) < 0.001))}
              onChange={(e) => update({ scale: SCALES[Number(e.target.value)] })}
              aria-label="Text size"
              aria-valuetext={`${Math.round(o.scale * 100)} percent`}
            />
          </fieldset>

          <fieldset>
            <legend>Line and letter spacing</legend>
            <div className="ro-row">
              {choice("spacing", "normal", "Normal")}
              {choice("spacing", "relaxed", "Relaxed")}
              {choice("spacing", "wide", "Wide")}
            </div>
          </fieldset>

          <fieldset>
            <legend>Font</legend>
            <div className="ro-row">
              {choice("font", "classic", "Classic")}
              {choice("font", "hyperlegible", "Easy to read")}
              {choice("font", "dyslexia", "Dyslexia friendly")}
            </div>
          </fieldset>

          <fieldset>
            <legend>Contrast</legend>
            <div className="ro-row">
              {choice("contrast", "normal", "Normal")}
              {choice("contrast", "high", "High contrast")}
            </div>
          </fieldset>

          <fieldset>
            <legend>Explain difficult words</legend>
            <div className="ro-row">
              {choice("terms", "first", "First use")}
              {choice("terms", "every", "Every use")}
              {choice("terms", "academic", "Academic words")}
              {choice("terms", "off", "Off")}
            </div>
            <p className="ro-hint ro-hint-flush">
              {o.terms === "off"
                ? "Off: no words are marked in lessons. “Words on this page” at the end of each lesson still explains them."
                : o.terms === "academic"
                  ? "Only words of academic English (such as isotropic or a priori) are marked, at their first use. Tap one for its meaning here."
                  : o.terms === "every"
                    ? "Every use of a difficult word has a dotted underline. Tap or click one for its meaning in this lesson."
                    : "The first use of a difficult word on each page has a dotted underline. Tap or click it for its meaning in this lesson."}
            </p>
          </fieldset>

          <fieldset>
            <legend>More</legend>
            <label className="ro-check">
              <input type="checkbox" checked={o.motion === "reduce"} onChange={(e) => update({ motion: e.target.checked ? "reduce" : "normal" })} />
              Stop animations
            </label>
            <label className="ro-check">
              <input type="checkbox" checked={o.width === "narrow"} onChange={(e) => update({ width: e.target.checked ? "narrow" : "normal" })} />
              Shorter lines of text
            </label>
            <label className="ro-check">
              <input type="checkbox" checked={o.links === "highlight"} onChange={(e) => update({ links: e.target.checked ? "highlight" : "normal" })} />
              Highlight links
            </label>
          </fieldset>

          <fieldset>
            <legend>Focus and keyboard</legend>
            <label className="ro-check">
              <input
                type="checkbox"
                checked={o.focus === "on"}
                aria-describedby="ro-focus-hint"
                onChange={(e) => {
                  const on = e.target.checked;
                  update({ focus: on ? "on" : "off" });
                  // Focus mode hides the header this panel belongs to: close it and go to the focus bar.
                  if (on) {
                    setOpen(false);
                    setTimeout(() => document.querySelector<HTMLElement>(".focus-bar button:not([disabled])")?.focus(), 150);
                  }
                }}
              />
              Focus mode: menus hidden, nothing moving, long pages one section at a time
            </label>
            <p className="ro-hint" id="ro-focus-hint">
              {focusHere === "calm"
                ? "On this page: the menus disappear and nothing moves. On lessons and reading pages (such as About) it also shows one section at a time. “Exit focus” in the bar at the bottom switches it off."
                : "On this page: the menus disappear and a bar at the bottom moves between sections, one at a time. “Exit focus” in that bar switches it off."}
            </p>
            <label className="ro-check">
              <input type="checkbox" checked={o.keys === "on"} aria-describedby="ro-keys-hint" onChange={(e) => update({ keys: e.target.checked ? "on" : "off" })} />
              Single-key shortcuts (<kbd>?</kbd> <kbd>/</kbd> <kbd>n</kbd> <kbd>p</kbd> <kbd>j</kbd> <kbd>k</kbd> <kbd>w</kbd>)
            </label>
            <p className="ro-hint" id="ro-keys-hint">
              {o.keys === "on"
                ? "On: pressing one of these keys (outside a text field) opens help, search, the next or previous lesson or section, or the next marked word. Switch off if they clash with your screen reader or speech input."
                : "Off: single keys do nothing. Ctrl K (⌘ K) still opens search and Esc still closes panels."}
            </p>
          </fieldset>

          <fieldset>
            <legend>Offline</legend>
            <OfflinePanel />
          </fieldset>

          <div className="ro-foot">
            <button type="button" className="secondary small" onClick={() => update(DEFAULT_OPTIONS)}>
              Reset all
            </button>
            <span className="muted small">Saved in this browser · Alt + / Alt − change text size</span>
          </div>
        </div>,
          document.body
        )}
    </div>
  );
}
