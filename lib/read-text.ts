import { pageCapitals, texToSpeech } from "./speech";

/** One piece of speech, tied to the element on screen it comes from (for highlighting). */
export type Chunk = { el: HTMLElement; text: string };

const BLOCKS = "h1,h2,h3,h4,p,li,figcaption,.formula-label,.formula-body,blockquote,td,th,.callout-title,.flashcard .fc-text,.ps-row,.pt-row";
const SKIP = "[data-noread],script,style,button,iframe,svg,select,input,.js-plotly-plot,.katex-mathml";

/** Text of one element: maths read from its TeX source, controls and citations removed. */
export function speakableText(el: Element): string {
  const clone = el.cloneNode(true) as HTMLElement;
  const capitals = documentCapitals();
  clone.querySelectorAll(".katex").forEach((k) => {
    const tex = k.querySelector('annotation[encoding="application/x-tex"]')?.textContent ?? "";
    // engine: spell symbol letters an engine would read as units after a number ("m sub 1 em sub 2")
    k.replaceWith(document.createTextNode(" " + texToSpeech(tex, { capitals, engine: true }) + " "));
  });
  clone.querySelectorAll(SKIP).forEach((n) => n.remove());
  return (clone.textContent ?? "")
    .replace(/(\d)\s*[–—]\s*(?=\d)/g, "$1 to ") // ranges in text: 3–5 Mpc is "3 to 5 Mpc"
    .replace(/(^|[\s(])−\s*(?=\d)/g, "$1minus ") // a typeset minus sign before a number
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Capitals said "capital R" on the page being read: those whose small letter the page's maths also uses (the same
 * rule as the "In words" panels and the symbol popups, lib/speech.ts pageCapitals). Worked out once per page.
 */
let capitalsCache: { path: string; count: number; capitals: string[] } | null = null;
function documentCapitals(): string[] {
  const annotations = document.querySelectorAll('main annotation[encoding="application/x-tex"], article annotation[encoding="application/x-tex"]');
  const path = location.pathname;
  if (capitalsCache && capitalsCache.path === path && capitalsCache.count === annotations.length) return capitalsCache.capitals;
  const capitals = pageCapitals([...annotations].map((a) => a.textContent ?? ""));
  capitalsCache = { path, count: annotations.length, capitals };
  return capitals;
}

/** Inside a closed <details> (a hint or a solution not opened yet), or one that is not shown at all. */
function inClosedDetails(el: HTMLElement) {
  for (let d = el.closest("details"); d; d = d.parentElement?.closest("details") ?? null) {
    if (!d.open && !el.closest("summary")) return true;
    if (getComputedStyle(d).display === "none") return true;
  }
  return false;
}

function isVisible(el: HTMLElement) {
  if (el.closest("[hidden]")) return false;
  // Problem sets: statements and opened hints and solutions are read; closed ones never are.
  if (inClosedDetails(el)) return false;
  const s = getComputedStyle(el);
  return s.display !== "none" && s.visibility !== "hidden";
}

/**
 * Split long text at sentence boundaries. Short utterances start faster, can be skipped, and avoid
 * Chrome's habit of stopping long utterances after about 15 seconds.
 */
export function splitSentences(text: string, max = 220): string[] {
  if (text.length <= max) return [text];
  const sentences = text.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) ?? [text];
  const out: string[] = [];
  let cur = "";
  for (const s of sentences) {
    if ((cur + s).length > max && cur) {
      out.push(cur.trim());
      cur = "";
    }
    cur += s;
  }
  if (cur.trim()) out.push(cur.trim());
  // Hard-split anything still too long (e.g. a very long formula).
  return out.flatMap((s) => (s.length <= max * 1.6 ? [s] : s.match(new RegExp(`.{1,${max}}(\\s|$)`, "g")) ?? [s]));
}

/** All readable blocks inside a root element, in document order. */
export function collectChunks(root: Element): Chunk[] {
  const blocks = root.matches(BLOCKS) ? [root as HTMLElement] : [...root.querySelectorAll<HTMLElement>(BLOCKS)];
  const chunks: Chunk[] = [];
  for (const el of blocks) {
    if (el.closest("[data-noread]") && !root.closest("[data-noread]")) continue;
    if (!isVisible(el)) continue;
    // A container whose children are blocks is read through those children.
    if (el !== root && el.querySelector("p,li,h2,h3,h4,blockquote,.formula-body")) continue;
    // Formula bodies are read inside their figure; skip katex inside a formula label etc.
    const text = speakableText(el);
    if (!text) continue;
    for (const part of splitSentences(text)) chunks.push({ el, text: part });
  }
  return chunks;
}

/** Chunks for the user's current text selection (null if nothing is selected). */
export function selectionChunks(): Chunk[] | null {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || !sel.rangeCount) return null;
  if (sel.toString().trim().length < 2) return null;
  // Read the selected DOM (not toString(), which repeats rendered maths) so formulas are spoken properly.
  const range = sel.getRangeAt(0);
  const box = document.createElement("div");
  box.appendChild(range.cloneContents());
  box.querySelectorAll(".katex-html").forEach((h) => {
    // Keep the visual copy only when the TeX source was not part of the selection.
    if (h.parentElement?.querySelector('annotation[encoding="application/x-tex"]')) h.remove();
  });
  const text = speakableText(box);
  if (text.length < 2) return null;
  const node = range.commonAncestorContainer;
  const el = (node.nodeType === 1 ? (node as HTMLElement) : node.parentElement) ?? document.body;
  return splitSentences(text).map((t) => ({ el, text: t }));
}

/** A short label for a region, used in the player bar ("Coordinate systems", "Worked example: …"). */
export function regionLabel(root: Element): string {
  const h = root.querySelector("h1,h2,h3");
  return h ? speakableText(h) : "";
}
