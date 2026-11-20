/**
 * Rehype plugin: marks the glossary words of one page in its prose (docs/GLOSSARY-PLAN.md §4, §10).
 *
 * Every use of a word that has a meaning on this page becomes
 *   <a class="term" href="/glossary/<letter>#<id>" data-term="<id>" data-kind="<kind>" tabindex="-1">…</a>
 * Without JavaScript it is an ordinary link to the glossary entry; with it, components/terms/TermPanel.tsx opens the
 * word panel instead. CSS (app/globals.css, reading option "Explain difficult words") decides which marks look marked:
 *  - data-first: the first use of the word on the page, within the density limit (at most one per ~40 words of a
 *    paragraph; subject words before academic ones, rarer words first). A word that loses out in one paragraph can
 *    still be marked at a later use;
 *  - data-afirst: the first use of an academic word when it is not data-first (for "Only academic words").
 * Never inside headings, links, buttons, code, maths, figures and graph captions, SVG, or the MDX elements in SKIP_JSX.
 * Longest match first (lib/glossary.ts buildMatcher). Runs after rehype-sections, so the section wrappers exist.
 */
import { buildMatcher, glossaryHref, type TermEntry } from "./glossary";

type Node = {
  type: string;
  tagName?: string;
  name?: string;
  value?: string;
  children?: Node[];
  properties?: Record<string, unknown>;
};

const SKIP_TAGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6", "a", "button", "code", "pre", "kbd", "samp", "figure", "figcaption", "svg", "math", "summary", "script", "style", "label", "select", "textarea", "sup", "sub"]);
const SKIP_JSX = new Set(["Formula", "Plot", "VectorDiagram", "ExpansionDiagram", "ParallaxDiagram", "PhET", "Answer", "Hint", "Solution"]);
const BLOCK_TAGS = new Set(["p", "li", "td", "th", "dd", "dt"]);
const WORDS_PER_MARK = 40;

function skipped(node: Node): boolean {
  if (node.type === "element") {
    if (SKIP_TAGS.has(node.tagName!)) return true;
    const cls = node.properties?.className;
    if (Array.isArray(cls) && cls.some((c) => typeof c === "string" && c.startsWith("katex"))) return true;
  }
  if ((node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") && SKIP_JSX.has(node.name ?? "")) return true;
  // MDX expressions ({…}) and raw HTML are left alone.
  return node.type === "mdxFlowExpression" || node.type === "mdxTextExpression" || node.type === "raw";
}

type Hit = { parent: Node; text: Node; index: number; length: number; entry: TermEntry; block: Node; first?: boolean; afirst?: boolean };

export type RehypeTermsOptions = {
  /** The glossary entries with a meaning on this page */
  entries: TermEntry[];
  /** Lower ranks win under the density limit */
  rank: (entry: TermEntry) => number;
};

export default function rehypeTerms(options: RehypeTermsOptions) {
  return (tree: Node) => {
    if (!options?.entries?.length) return;
    const matcher = buildMatcher(options.entries);
    const hits: Hit[] = [];
    const words = new Map<Node, number>();

    const walk = (node: Node, block: Node | null) => {
      if (skipped(node)) return;
      if (node.type === "element" && BLOCK_TAGS.has(node.tagName!)) block = node;
      for (const child of node.children ?? []) {
        if (child.type === "text") {
          const b = block ?? node;
          const value = child.value ?? "";
          words.set(b, (words.get(b) ?? 0) + (value.match(/\S+/g)?.length ?? 0));
          for (const m of matcher.find(value)) hits.push({ parent: node, text: child, index: m.index, length: m.length, entry: m.entry, block: b });
        } else walk(child, block);
      }
    };
    walk(tree, null);
    if (!hits.length) return;

    // Which use of each word is shown as marked: per paragraph, in reading order, within the density limit.
    const marked = new Set<string>();
    const blocks: Node[] = [];
    for (const h of hits) if (!blocks.includes(h.block)) blocks.push(h.block);
    for (const block of blocks) {
      const firstHere = new Map<string, Hit>();
      for (const h of hits) if (h.block === block && !marked.has(h.entry.id) && !firstHere.has(h.entry.id)) firstHere.set(h.entry.id, h);
      const allowed = Math.max(1, Math.round((words.get(block) ?? 0) / WORDS_PER_MARK));
      const chosen = [...firstHere.values()].sort((a, b) => options.rank(a.entry) - options.rank(b.entry)).slice(0, allowed);
      for (const h of chosen) {
        h.first = true;
        marked.add(h.entry.id);
      }
    }
    const academicSeen = new Set<string>();
    for (const h of hits) {
      if (h.entry.kind !== "academic" || academicSeen.has(h.entry.id)) continue;
      academicSeen.add(h.entry.id);
      if (!h.first) h.afirst = true;
    }

    // Split each text node around its hits.
    const byText = new Map<Node, Hit[]>();
    for (const h of hits) byText.set(h.text, [...(byText.get(h.text) ?? []), h]);
    for (const [text, list] of byText) {
      const parent = list[0].parent;
      const value = text.value ?? "";
      const out: Node[] = [];
      let at = 0;
      for (const h of list.sort((a, b) => a.index - b.index)) {
        if (h.index < at) continue;
        if (h.index > at) out.push({ type: "text", value: value.slice(at, h.index) });
        const properties: Record<string, unknown> = {
          className: ["term"],
          href: glossaryHref(h.entry),
          dataTerm: h.entry.id,
          dataKind: h.entry.kind,
          tabIndex: -1,
        };
        if (h.first) properties.dataFirst = "";
        if (h.afirst) properties.dataAfirst = "";
        if (h.entry.lang) properties.lang = h.entry.lang;
        out.push({ type: "element", tagName: "a", properties, children: [{ type: "text", value: value.slice(h.index, h.index + h.length) }] });
        at = h.index + h.length;
      }
      if (at < value.length) out.push({ type: "text", value: value.slice(at) });
      const kids = parent.children!;
      kids.splice(kids.indexOf(text), 1, ...out);
    }
  };
}
