/**
 * Reading options (accessibility): stored in localStorage and applied as data attributes on <html>,
 * so CSS can adapt the whole site. The same logic runs as an inline script before first paint
 * (see READING_OPTIONS_SCRIPT) to avoid a flash of the default style.
 */
export type ReadingOptions = {
  scale: number; // text size multiplier, 0.9 – 2
  spacing: "normal" | "relaxed" | "wide";
  font: "classic" | "hyperlegible" | "dyslexia";
  contrast: "normal" | "high";
  motion: "normal" | "reduce";
  width: "normal" | "narrow";
  links: "normal" | "highlight";
  /** Focus mode on lesson pages: one section at a time, navigation hidden (components/a11y/FocusMode.tsx) */
  focus: "off" | "on";
  /** Single-key shortcuts (? / n p j k); switchable off, as WCAG 2.1.4 requires */
  keys: "on" | "off";
  /** Which glossary words are marked in lessons (docs/GLOSSARY-PLAN.md §4): first use on the page, every use,
   *  only academic words, or none. "Words on this page" stays in every case. */
  terms: "first" | "every" | "academic" | "off";
};

export const DEFAULT_OPTIONS: ReadingOptions = {
  scale: 1,
  spacing: "normal",
  font: "classic",
  contrast: "normal",
  motion: "normal",
  width: "normal",
  links: "normal",
  focus: "off",
  keys: "on",
  terms: "first",
};

export const OPTIONS_KEY = "reading-options";
export const SCALES = [0.9, 1, 1.15, 1.3, 1.5, 1.75, 2];

export function applyOptions(o: ReadingOptions) {
  const el = document.documentElement;
  el.style.setProperty("--text-scale", String(o.scale));
  // Large text switches multi-column layouts to a single column (see globals.css).
  if (o.scale >= 1.3) el.dataset.large = "true";
  else delete el.dataset.large;
  el.dataset.spacing = o.spacing;
  el.dataset.font = o.font;
  el.dataset.contrast = o.contrast;
  el.dataset.motion = o.motion;
  el.dataset.width = o.width;
  el.dataset.links = o.links;
  el.dataset.focus = o.focus;
  el.dataset.keys = o.keys;
  el.dataset.terms = o.terms;
}

export function loadOptions(): ReadingOptions {
  try {
    const raw = JSON.parse(localStorage.getItem(OPTIONS_KEY) ?? "null");
    return raw ? { ...DEFAULT_OPTIONS, ...raw } : DEFAULT_OPTIONS;
  } catch {
    return DEFAULT_OPTIONS;
  }
}

export function saveOptions(o: ReadingOptions) {
  try {
    localStorage.setItem(OPTIONS_KEY, JSON.stringify(o));
  } catch {}
}

/** Inline, dependency-free version of loadOptions + applyOptions for the <head>. */
export const READING_OPTIONS_SCRIPT = `try{var o=JSON.parse(localStorage.getItem('${OPTIONS_KEY}')||'null');if(o){var e=document.documentElement;if(o.scale){e.style.setProperty('--text-scale',String(o.scale));if(o.scale>=1.3)e.dataset.large='true';}['spacing','font','contrast','motion','width','links','focus','keys','terms'].forEach(function(k){if(o[k])e.dataset[k]=o[k]});}}catch(x){}`;

/** False when the reader has switched single-key shortcuts off (Reading options). */
export function singleKeysOn(): boolean {
  return document.documentElement.dataset.keys !== "off";
}
