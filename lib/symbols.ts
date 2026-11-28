import katex from "katex";
import { z } from "zod";
import rawSymbols from "../data/symbols.json";
import type { Page, Site } from "./content";
import { pageNotation, pageTex } from "./tex-scan";
import { pageCapitals, spokenOnPage } from "./speech";

/**
 * The symbols glossary (docs/SYMBOLS_PLAN.md). One entry per symbol in data/symbols.json.
 * A symbol can mean different things in different courses or pages (σ, ξ, δ, k …), so each
 * meaning has a scope; a lesson only ever shows the meaning that applies to it.
 *
 * An entry names its symbol in one of two ways:
 *   tex:   TeX commands, ["\\phi", "\\varphi"]
 *   forms: plain letters and symbols with a subscript, as lib/tex-scan.ts writes them:
 *          ["a"], ["H_0"], ["\\rho_c"], ["\\Omega_m", "\\Omega_m,0"], ["M_\\odot"]
 */
export const SYMBOL_KINDS = [
  "greek", "latin", "compound", "relation", "operator", "calculus", "constant", "accent", "other",
] as const;

const Meaning = z.object({
  /** Short plain-English meaning (plain text with Unicode symbols, no TeX) */
  text: z.string().min(1),
  /** The symbol's name where this meaning applies, when the entry's general name does not fit ("source speed") */
  name: z.string().optional(),
  /** SI unit of this quantity (plain text), with the unit the lessons usually quote in brackets. Only for quantities
   *  with one clear unit; pure numbers, labels and indices have none. */
  unit: z.string().optional(),
  /** Applies on these pages (slugs). Most specific scope. */
  pages: z.array(z.string()).optional(),
  /** Applies in these courses (ids such as "8.286") */
  courses: z.array(z.string()).optional(),
});

/** A letter or command with optional primes and subscript: "a", "H_0", "\\rho_c", "f'". */
const PLAIN_FORM = /^(\\[A-Za-z]+|[A-Za-z])('{1,2})?(?:_(.+))?$/;
/**
 * A symbol under an accent that makes it a symbol of its own (lib/tex-scan.ts): unit vectors "\\hat i", time
 * derivatives "\\dot a", "\\ddot\\hat\\delta", "\\dot\\tilde a", with an optional subscript "\\dot\\rho_\\star".
 */
const ACCENT_FORM = /^\\(hat|dot|ddot) ?((?:\\(?:hat|vec|tilde|bar) ?)?(?:\\[A-Za-z]+|[A-Za-z]))(?:_(.+))?$/;

const Symbol = z
  .object({
    /** Stable id, used as the anchor on /symbols (#sym-<id>) */
    id: z.string().regex(/^[a-z0-9-]+$/i),
    /** TeX commands that produce it, e.g. ["\\phi", "\\varphi"] */
    tex: z.array(z.string().regex(/^\\[A-Za-z]+$/)).optional(),
    /** Letters and subscripted symbols, e.g. ["H_0"] (see lib/tex-scan.ts, texNotation) */
    forms: z.array(z.string().refine((f) => PLAIN_FORM.test(f) || ACCENT_FORM.test(f), "not a form")).optional(),
    /** Name as written in a glossary, e.g. "sigma" or "critical density" */
    name: z.string(),
    /** What read-aloud says for it (a word a speech synthesiser pronounces correctly) */
    spoken: z.string(),
    /** Optional pronunciation hint for readers, e.g. "fye" for phi */
    sounds: z.string().optional(),
    kind: z.enum(SYMBOL_KINDS),
    /** Meanings; one without pages/courses is the general meaning */
    meanings: z.array(Meaning).min(1),
    /** TeX that shows the symbol on its own (accents need a letter to sit on) */
    example: z.string().optional(),
  })
  .refine((s) => (s.tex?.length ?? 0) + (s.forms?.length ?? 0) > 0, { message: "needs tex or forms" });

export type SymbolMeaning = z.infer<typeof Meaning>;
type RawSymbol = z.infer<typeof Symbol>;

/** How to recognise a subscripted symbol in rendered KaTeX: the base character and the subscript's text. */
export type CompoundGlyph = { base: string; sub: string };

export type SymbolEntry = RawSymbol & {
  /** Keys as lib/tex-scan.ts reports them: "\\rho", "a", "\\rho_c" */
  keys: string[];
  /**
   * The characters KaTeX draws for the symbol, worked out by rendering it, so they always match the
   * formulas on the page. Tapping one of these in a formula opens its explanation. Empty for accents.
   */
  glyphs: string[];
  /** For subscripted forms: the base character and subscript text KaTeX draws */
  compounds: CompoundGlyph[];
  /** TeX used to show the symbol on /symbols and in lists */
  display: string;
};

function glyphsOf(tex: string): string {
  const html = katex.renderToString(tex, { output: "html", throwOnError: false });
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/​/g, "")
    .trim();
}

/** "\\Omega_m,0" → { base: "\\Omega", sub: "m,0" }; "f'" → { base: "f", primes: "'" } */
function splitForm(form: string): { base: string; primes: string; sub?: string } {
  const a = ACCENT_FORM.exec(form);
  // An accented form's base is the whole accented symbol, "\\dot{\\rho}".
  if (a) return { base: `\\${a[1]}{${a[2]}}`, primes: "", sub: a[3] };
  const m = PLAIN_FORM.exec(form)!;
  return { base: m[1], primes: m[2] ?? "", sub: m[3] };
}

/** A subscript as TeX: word subscripts become upright text, "vac,0" → "\\text{vac},0". */
function subTex(sub: string): string {
  return /^[A-Za-z]{2,}(,.*)?$/.test(sub) && !sub.startsWith("\\")
    ? `\\text{${sub.split(",")[0]}}${sub.includes(",") ? "," + sub.split(",").slice(1).join(",") : ""}`
    : sub;
}

/** TeX for a form, e.g. "\\Omega_{m,0}" or "\\dot{\\rho}_{\\star}", for rendering. */
function formTex(form: string): string {
  const { base, primes, sub } = splitForm(form);
  if (!sub) return base + primes;
  return `${base}${primes}_{${subTex(sub)}}`;
}

let cache: SymbolEntry[] | null = null;
export function loadSymbols(): SymbolEntry[] {
  if (!cache)
    cache = z
      .array(Symbol)
      .parse(rawSymbols)
      .map((s) => {
        const forms = s.forms ?? [];
        // Subscripted and primed forms (H_0, f') are found in rendered maths as a base plus what KaTeX draws after it.
        const plain = forms.filter((f) => !f.includes("_") && !f.includes("'"));
        const subscripted = forms.filter((f) => f.includes("_") || f.includes("'"));
        // Unit vectors ("\hat i") are found as the whole accent KaTeX draws, "i^".
        const singles = [...(s.tex ?? []), ...plain.map(formTex)];
        return {
          ...s,
          keys: [...(s.tex ?? []), ...forms],
          // Single ASCII characters other than letters are never tap targets: KaTeX draws \neq as "=" plus
          // an overlay, and an "=" must not open "is not equal to".
          glyphs:
            s.kind === "accent"
              ? []
              : [...new Set(singles.map(glyphsOf).filter((g) => g && (!/^[\x00-\x7f]$/.test(g) || /^[A-Za-z]$/.test(g))))],
          compounds: subscripted.map((f) => {
            const { base, sub } = splitForm(f);
            // A form whose subscript is not valid TeX on its own (\sigma_\logM, \Phi_\veck) uses the entry's display
            // example to find what KaTeX draws.
            // An accent on the example (\hat\Phi_{\vec k}) is not part of what follows the base.
            const tex =
              sub?.includes("\\") && s.example && !ACCENT_FORM.test(f) ? s.example.replace(/^\\(hat|tilde|bar|dot|ddot)\s*/, "") : formTex(f);
            return { base: glyphsOf(base), sub: glyphsOf(tex).slice(glyphsOf(base).length) || sub || "′" };
          }),
          display: s.example ?? (s.tex?.[0] ?? formTex(forms[0])),
        };
      });
  return cache;
}

/** The meaning of a symbol on a page: page scope first, then course, then the general meaning. */
export function meaningFor(sym: Pick<RawSymbol, "meanings">, page: Pick<Page, "slug" | "course">): SymbolMeaning | undefined {
  return (
    sym.meanings.find((m) => m.pages?.includes(page.slug)) ??
    sym.meanings.find((m) => !m.pages && m.courses?.includes(page.course)) ??
    sym.meanings.find((m) => !m.pages && !m.courses)
  );
}

export function usesSymbol(sym: SymbolEntry, used: Map<string, number>): boolean {
  return sym.keys.some((k) => used.has(k));
}

export type PageSymbol = {
  id: string;
  /** TeX that shows the symbol */
  display: string;
  /** The same, rendered by KaTeX (HTML only; for the popup heading) */
  displayHtml: string;
  glyphs: string[];
  compounds: CompoundGlyph[];
  kind: SymbolEntry["kind"];
  name: string;
  spoken: string;
  sounds?: string;
  meaning: string;
  /** SI unit of the quantity on this page, if it has one clear unit */
  unit?: string;
  /** Where the symbol's glossary card is: its year page on /symbols (see symbolHrefs) */
  href: string;
};

/**
 * The glossary is split into one page per year (/symbols/year-N): a single page with every symbol grew past Vercel's
 * 20 MB limit for prerendered pages. Each year page shows the symbols used in that year's lessons, with the meanings
 * that apply there, so a page grows only with its own year's lessons. A lesson links to its own year's page.
 */
export const symbolYearPath = (year: number) => `/symbols/year-${year}`;

/** Link to a symbol's card on a year page. */
export const symbolHref = (id: string, year: number) => `${symbolYearPath(year)}#sym-${id}`;

const hrefCache = new WeakMap<Site, Map<string, string>>();
/** Link to each symbol's card on the page of the year it is first used (for the /symbols index). */
export function symbolHrefs(site: Site): (id: string) => string {
  let map = hrefCache.get(site);
  if (!map) {
    map = new Map(glossary(site).map((e) => [e.id, symbolHref(e.id, e.firstYear)]));
    hrefCache.set(site, map);
  }
  const m = map;
  return (id) => m.get(id) ?? `/symbols#sym-${id}`;
}

/** The meanings of a glossary symbol that apply in one year's lessons, in glossary order, and those lessons. */
export function meaningsInYear(s: GlossaryEntry, year: number): { meanings: SymbolMeaning[]; pages: Page[] } {
  const pages = s.pages.filter((p) => p.yearNumber === year);
  const used = new Set(pages.map((p) => meaningFor(s, p)));
  return { meanings: s.meanings.filter((m) => used.has(m)), pages };
}

/** Symbols used on a page that have a meaning there, in the order of the glossary. */
export function symbolsOnPage(page: Page, hrefOf: (id: string) => string = (id) => `/symbols#sym-${id}`): PageSymbol[] {
  const used = pageNotation(page);
  // "Say it" as read-aloud says it on this page: "capital R" where the page also uses r (lib/speech.ts).
  const capitals = pageCapitals(pageTex(page));
  const out: PageSymbol[] = [];
  for (const s of loadSymbols()) {
    if (!usesSymbol(s, used)) continue;
    const m = meaningFor(s, page);
    if (m)
      out.push({
        id: s.id,
        display: s.display,
        displayHtml: katex.renderToString(s.display, { output: "html", throwOnError: false }),
        glyphs: s.glyphs,
        compounds: s.compounds,
        kind: s.kind,
        name: m.name ?? s.name,
        spoken: spokenOnPage(s.spoken, s.keys.find((k) => used.has(k)) ?? s.keys[0], capitals),
        sounds: s.sounds,
        meaning: m.text,
        ...(m.unit ? { unit: m.unit } : {}),
        href: hrefOf(s.id),
      });
  }
  return out;
}

export type GlossaryEntry = SymbolEntry & {
  /** Earliest year of the programme in which the symbol is used */
  firstYear: number;
  /** Lessons that use it and have a meaning for it */
  pages: Page[];
};

/** Every glossary symbol that the site actually uses, with the lessons where it appears. */
export function glossary(site: Site): GlossaryEntry[] {
  const notation = new Map(site.pages.map((p) => [p.slug, pageNotation(p)]));
  const out: GlossaryEntry[] = [];
  for (const s of loadSymbols()) {
    const pages = site.pages.filter((p) => usesSymbol(s, notation.get(p.slug)!) && meaningFor(s, p));
    if (!pages.length) continue;
    out.push({ ...s, pages, firstYear: Math.min(...pages.map((p) => p.yearNumber)) });
  }
  return out;
}
