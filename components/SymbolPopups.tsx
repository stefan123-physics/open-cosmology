"use client";

import { useEffect, useRef, useState } from "react";
import type { PageSymbol } from "@/lib/symbols";

/**
 * Tap-to-explain for symbols in formulas (docs/SYMBOLS_PLAN.md).
 * Marks every symbol that has a meaning on this page inside the rendered maths; tapping or clicking one
 * opens a small popup with the meaning *on this page*, how to say it, and a link to /symbols.
 *
 * KaTeX's visual output is aria-hidden (screen readers use its MathML), so the symbols themselves are not
 * focusable. Keyboard and screen-reader users get the same information from the "Symbols on this page"
 * list (components/PageSymbols.tsx), which every lesson shows.
 */
const SKIP = "button, label, a, summary, .flashcard, [data-nosym]";

type Open = { sym: PageSymbol; top: number; left: number; width: number };

export function SymbolPopups({ symbols }: { symbols: PageSymbol[] }) {
  const [open, setOpen] = useState<Open | null>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<Element | null>(null);

  // Mark the tappable symbols once the lesson is on screen.
  useEffect(() => {
    const root = document.querySelector("article.topic");
    if (!root) return;
    const mark = (el: Element, sym: PageSymbol) => {
      el.classList.add("sym-tap");
      (el as HTMLElement).dataset.sym = sym.id;
    };
    const text = (el: Element) => (el.textContent ?? "").replace(/​/g, "").trim();

    // 1. Symbols with a subscript (ρ_c, H₀, Ω_m,0): KaTeX draws the base, then a .msupsub with the
    //    subscript (and any superscript after it). The longest matching subscript wins.
    const compounds = symbols
      .flatMap((s) => s.compounds.map((c) => ({ ...c, sym: s })))
      .sort((a, b) => b.sub.length - a.sub.length);
    if (compounds.length)
      root.querySelectorAll(".katex-html .msupsub").forEach((supsub) => {
        const base = supsub.previousElementSibling;
        if (!base || base.closest(SKIP)) return;
        // A base with an accent is a box holding the letter and the accent mark. A dotted symbol with a subscript
        // (ρ̇⋆) is listed with its accent; otherwise (Φ̂_k) the accent is not part of the name: read only the letter.
        const accent = base.classList.contains("accent") || base.classList.contains("katex-accent");
        if (base.childElementCount > 0 && !accent) return;
        const full = text(base);
        const letter = accent ? full.replace(/[^\p{L}]/gu, "") : full;
        const s = text(supsub);
        const hit =
          compounds.find((c) => c.base === full && s.startsWith(c.sub)) ??
          compounds.find((c) => c.base === letter && s.startsWith(c.sub));
        if (hit) {
          mark(base, hit.sym);
          mark(supsub, hit.sym);
        }
      });

    // 2. Single symbols. Latin letters only count in maths italic, and not inside sub/superscripts,
    //    where a letter is usually a label (the c in ρ_c).
    const byGlyph = new Map<string, PageSymbol>();
    for (const s of symbols) for (const g of s.glyphs) byGlyph.set(g, s);
    // Unit vectors (î, θ̂) and time derivatives (ȧ, δ̂̈): the whole accent box, whose text is the letter and its
    // marks ("i^", "a˙").
    root.querySelectorAll<HTMLElement>(".katex-html .katex-accent, .katex-html .accent").forEach((el) => {
      if (el.closest(SKIP) || el.closest(".sym-tap")) return;
      const sym = byGlyph.get(text(el));
      if (sym) mark(el, sym);
    });
    root.querySelectorAll<HTMLElement>(".katex-html span").forEach((el) => {
      if (el.childElementCount > 0 || el.closest(SKIP) || el.closest(".sym-tap")) return;
      const sym = byGlyph.get(text(el));
      if (!sym) return;
      if (sym.kind === "latin" && (!el.classList.contains("mathnormal") || el.closest(".msupsub"))) return;
      mark(el, sym);
    });
  }, [symbols]);

  // One click handler for the whole lesson.
  useEffect(() => {
    const byId = new Map(symbols.map((s) => [s.id, s]));
    const onClick = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest<HTMLElement>(".sym-tap");
      if (!target) return;
      const sym = byId.get(target.dataset.sym ?? "");
      if (!sym) return;
      e.preventDefault();
      const r = target.getBoundingClientRect();
      const width = Math.min(352, document.documentElement.clientWidth - 16);
      returnFocus.current = document.activeElement;
      setOpen({
        sym,
        top: r.bottom + window.scrollY + 8,
        left: Math.max(8, Math.min(r.left + window.scrollX - 24, window.scrollX + document.documentElement.clientWidth - width - 8)),
        width,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [symbols]);

  // Focus the popup when it opens; close on Escape or a click elsewhere.
  useEffect(() => {
    if (!open) return;
    popRef.current?.focus();
    const close = () => {
      setOpen(null);
      (returnFocus.current as HTMLElement | null)?.focus?.();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as Element;
      if (!popRef.current?.contains(t) && !t.closest(".sym-tap")) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  if (!open) return null;
  const { sym, top, left } = open;
  return (
    <div
      ref={popRef}
      className="sym-pop"
      role="dialog"
      aria-labelledby="sym-pop-title"
      tabIndex={-1}
      style={{ top, left, width: open.width }}
      data-noread
    >
      <p className="sym-pop-title" id="sym-pop-title">
        <span className="sym-pop-glyph" aria-hidden="true" dangerouslySetInnerHTML={{ __html: sym.displayHtml }} />{" "}
        {sym.name}
      </p>
      <p className="sym-pop-meaning">{sym.meaning}</p>
      {sym.unit && <p className="sym-pop-unit">Unit: {sym.unit}</p>}
      <p className="sym-pop-say">
        Say it: <q>{sym.spoken}</q>
        {sym.sounds && <> (sounds like “{sym.sounds}”)</>}
      </p>
      <p className="sym-pop-links">
        <a href={sym.href}>All meanings in the symbols list</a>
        <button type="button" className="linklike" onClick={() => setOpen(null)}>
          Close
        </button>
      </p>
    </div>
  );
}
