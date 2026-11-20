/**
 * Full-text search index (Pagefind) for public/pagefind, built from the lesson sources (content/**.mdx), not from
 * Next.js's build output: on Vercel the prerendered .html files are not on disk, so an index built from them was
 * empty. Static files only: no server, no running costs; a search downloads only the index chunks it needs.
 *
 * Each lesson becomes one small HTML document: its title and summary, every section under its own heading with the
 * same id the page uses (lib/headings.ts, so a result opens at its section), the prose, formulas in words (the
 * read-aloud wording, so "H nought" is found), key terms in bold at double weight, and the symbol names.
 * Left out, as on the page for read-aloud: quiz, flashcards, prerequisites, citations, navigation.
 * On a problem set the statements and titles are indexed; hints, solutions and answer boxes are not, so a search
 * never lands inside an answer.
 *
 * Every glossary word is a record of its own (docs/GLOSSARY-PLAN.md): the word, its other forms and every meaning,
 * opening the word's entry on its letter page, so a search for a phrase in a meaning finds the word.
 *
 * Also writes public/pagefind/files.json: every file of the index with the total size, for "save for offline use".
 * Run by `npm run build` after `next build` (npm run search:index).
 */
import fs from "node:fs";
import path from "node:path";
import { createProcessor } from "@mdx-js/mdx";
import remarkMath from "remark-math";
import * as pagefind from "pagefind";
import { loadSite, type Page } from "../lib/content";
import { extractHeadings } from "../lib/headings";
import { pageCapitals, texToSpeech } from "../lib/speech";
import { symbolsOnPage } from "../lib/symbols";
import { glossaryHref, loadGlossary } from "../lib/glossary";
import { pageTex } from "../lib/tex-scan";

const OUT = path.join("public", "pagefind");

type Node = {
  type: string;
  value?: string;
  depth?: number;
  name?: string | null;
  children?: Node[];
  attributes?: { type: string; name?: string; value?: unknown }[];
};

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const attr = (n: Node, name: string) => {
  const a = n.attributes?.find((x) => x.type === "mdxJsxAttribute" && x.name === name);
  return typeof a?.value === "string" ? a.value : "";
};

/** One lesson as HTML for the indexer. */
function lessonHtml(page: Page, parse: (s: string) => Node): string {
  const capitals = pageCapitals(pageTex(page));
  const say = (tex: string) => esc(texToSpeech(tex, { capitals }));
  const ids = extractHeadings(page.body).map((h) => h.id);
  let h2 = 0;

  const inline = (nodes: Node[] = []): string => nodes.map(text).join("");
  function text(n: Node): string {
    switch (n.type) {
      case "text":
      case "inlineCode":
        return esc(n.value ?? "");
      case "inlineMath":
        return ` ${say(n.value ?? "")} `;
      case "strong":
        return `<strong data-pagefind-weight="2">${inline(n.children)}</strong>`;
      case "break":
        return " ";
      case "mdxJsxTextElement":
        return inline(n.children);
      default:
        return inline(n.children);
    }
  }
  function block(n: Node): string {
    switch (n.type) {
      case "heading": {
        if (n.depth === 2) return `<h2 id="${ids[h2++] ?? "section"}">${inline(n.children)}</h2>`;
        return `<h3>${inline(n.children)}</h3>`;
      }
      case "paragraph":
        return `<p>${inline(n.children)}</p>`;
      case "math":
        return `<p>${say(n.value ?? "")}</p>`;
      case "list":
      case "listItem":
      case "blockquote":
        return (n.children ?? []).map(block).join("");
      case "table":
        return (n.children ?? []).map((row) => `<p>${(row.children ?? []).map((c) => inline(c.children)).join(" · ")}</p>`).join("");
      case "code":
      case "mdxjsEsm":
      case "mdxFlowExpression":
      case "thematicBreak":
      case "html":
        return "";
      case "mdxJsxFlowElement": {
        if (n.name === "Solution" || n.name === "Hint" || n.name === "Answer") return "";
        // Components: their visible words (label, title, caption) and their children; formulas in words.
        const parts = [attr(n, "label"), attr(n, "title"), attr(n, "caption")].filter(Boolean).map(esc);
        const tex = n.name === "Formula" ? attr(n, "tex") : "";
        return (
          (parts.length ? `<p>${parts.join(". ")}</p>` : "") +
          (tex ? `<p>${say(tex)}</p>` : "") +
          (n.children ?? []).map(block).join("")
        );
      }
      default:
        return n.children ? n.children.map(block).join("") : text(n);
    }
  }

  const tree = parse(page.body);
  const body = (tree.children ?? []).map(block).join("\n");
  const names = symbolsOnPage(page).map((s) => esc(s.name));
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(page.title)}</title></head><body>
<main data-pagefind-body data-pagefind-meta="where:${esc(page.course)} · ${esc(String(page.lecture))}">
<h1 data-pagefind-meta="title">${esc(page.title)}</h1>
${page.summary ? `<p>${esc(page.summary)}</p>` : ""}
${body}
${names.length ? `<p data-pagefind-weight="0.5">Symbols: ${names.join(", ")}.</p>` : ""}
</main></body></html>`;
}

async function main() {
  const site = loadSite();
  const processor = createProcessor({ remarkPlugins: [remarkMath] });
  const parse = (s: string) => processor.parse(s) as unknown as Node;

  const { index, errors } = await pagefind.createIndex({ forceLanguage: "en" });
  if (!index) throw new Error(`pagefind: ${errors.join("; ")}`);
  for (const page of site.pages) {
    const course = site.courseById.get(page.course)!;
    const html = lessonHtml(page, parse).replace(
      /data-pagefind-meta="where:[^"]*"/,
      `data-pagefind-meta="where:${esc(`${course.ocwNumber} · ${course.unit} ${page.lecture}`)}"`
    );
    const r = await index.addHTMLFile({ url: page.href, content: html });
    if (r.errors.length) throw new Error(`pagefind ${page.href}: ${r.errors.join("; ")}`);
  }
  const KIND: Record<string, string> = { physics: "Physics", maths: "Maths", academic: "Academic", abbreviation: "Abbreviation", named: "Named" };
  const words = loadGlossary().entries;
  for (const e of words) {
    const meanings = e.meanings.flatMap((m) => [m.short, m.long, m.example].filter((x): x is string => !!x));
    // Meanings first, so the excerpt under the result starts with what the word means; the word and its forms last.
    const forms = e.allForms.join(", ");
    const content = [...meanings, e.everyday, `${forms}.`].filter(Boolean).join(" ");
    const r = await index.addCustomRecord({ url: glossaryHref(e), content, language: "en", meta: { title: e.term, where: `Glossary · ${KIND[e.kind]}` } });
    if (r.errors.length) throw new Error(`pagefind glossary ${e.id}: ${r.errors.join("; ")}`);
  }
  fs.rmSync(OUT, { recursive: true, force: true });
  const w = await index.writeFiles({ outputPath: OUT });
  if (w.errors.length) throw new Error(`pagefind: ${w.errors.join("; ")}`);
  await pagefind.close();

  // The site has its own search panel (components/Search.tsx): Pagefind's ready-made interface is not used, and
  // every page is English, so the language-neutral engine is not needed either.
  for (const f of fs.readdirSync(OUT))
    if (/^pagefind-(?:component-|modular-)?ui\.|^pagefind-highlight\.js$|^wasm\.unknown\.pagefind$/.test(f)) fs.rmSync(path.join(OUT, f));

  const files: { url: string; bytes: number }[] = [];
  const walk = (dir: string) => {
    for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, d.name);
      if (d.isDirectory()) walk(p);
      else if (d.name !== "files.json") files.push({ url: "/" + path.relative("public", p).split(path.sep).join("/"), bytes: fs.statSync(p).size });
    }
  };
  walk(OUT);
  const total = files.reduce((s, f) => s + f.bytes, 0);
  const pages = site.pages.length;
  fs.writeFileSync(path.join(OUT, "files.json"), JSON.stringify({ pages, bytes: total, files: files.map((f) => f.url) }));
  // An empty index must never be deployed silently (that is how the first version failed on Vercel).
  if (!files.some((f) => /\/fragment\//.test(f.url))) throw new Error("search index: no lesson was indexed");
  const kb = (b: number) => `${(b / 1024).toFixed(0)} kB`;
  console.log(`search index: ${pages} lessons, ${words.length} glossary words, ${files.length} files, ${kb(total)} in all`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
