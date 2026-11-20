/**
 * Scans every lesson for the maths it uses.
 *   npm run scan                  every TeX command: how often, on which pages; "?" = missing from data/symbols.json
 *   npm run scan -- --notation    also letters and subscripted symbols (H_0, \rho_c …), most used first
 *   npm run scan -- --json        the same as JSON (for tools)
 *   npm run scan -- --numbers     numbers inventory: every result-like number, covered by calcs/ or not (--uncovered lists the gaps)
 * Shared scanner for docs/SYMBOLS_PLAN.md; the numbers inventory of docs/CALC_TESTS_PLAN.md will be added here too.
 */
import fs from "node:fs";
import { loadSite } from "../lib/content";
import { pageNumbers } from "../lib/numbers";
import { findValues, loadRegistry } from "../lib/values";
import { pageNotation } from "../lib/tex-scan";
import { loadSymbols } from "../lib/symbols";

const site = loadSite();

// npm run scan -- --numbers [--uncovered] [--page slug]: the numbers inventory (docs/CALC_TESTS_PLAN.md §1).
// Writes calcs/inventory.csv (generated, not committed) and prints coverage per page.
if (process.argv.includes("--numbers")) {
  const onlyPage = process.argv[process.argv.indexOf("--page") + 1];
  const pages = process.argv.includes("--page") ? site.pages.filter((p) => p.slug === onlyPage) : site.pages;
  const all = pages.flatMap(pageNumbers);
  const csv = (s: string) => `"${s.replace(/"/g, '""')}"`;
  fs.writeFileSync(
    "calcs/inventory.csv",
    "page,line,where,number,value,covered,context\n" +
      all.map((n) => [n.page, n.line, csv(n.where), csv(n.text), n.value, n.covered, csv(n.context)].join(",")).join("\n") + "\n",
  );
  if (process.argv.includes("--uncovered"))
    for (const n of all.filter((x) => x.covered === "no")) console.log(`${n.page}:${n.line}  ${n.where}  ${n.text}   …${n.context}…`);
  const byPage = new Map<string, { total: number; covered: number }>();
  for (const n of all) {
    const r = byPage.get(n.page) ?? { total: 0, covered: 0 };
    r.total++;
    if (n.covered !== "no") r.covered++;
    byPage.set(n.page, r);
  }
  for (const [slug, r] of [...byPage].sort((a, b) => a[1].covered / a[1].total - b[1].covered / b[1].total))
    console.log(`${String(Math.round((100 * r.covered) / r.total)).padStart(4)}%  ${String(r.covered).padStart(3)}/${String(r.total).padEnd(4)} ${slug}`);
  const cov = all.filter((n) => n.covered !== "no").length;
  console.log(`\n${all.length} numbers on ${pages.length} pages · ${cov} covered (${Math.round((100 * cov) / all.length)}%) · calcs/inventory.csv written`);
  process.exit(0);
}

// npm run scan -- --values: every quoted value of the registered quantities (calcs/values.yaml), with its role.
if (process.argv.includes("--values")) {
  const quantities = loadRegistry();
  const findings = findValues(site.pages, quantities);
  for (const q of quantities) {
    console.log(`\n${q.name}`);
    const byValue = new Map<string, typeof findings>();
    for (const f of findings.filter((x) => x.quantity === q.id)) byValue.set(f.value, [...(byValue.get(f.value) ?? []), f]);
    for (const [v, fs_] of [...byValue].sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]))) {
      console.log(`  ${q.values[v] ? " " : "?"} ${v.padEnd(10)} ${q.values[v] ?? "(not registered)"}`);
      for (const f of fs_) console.log(`        ${f.page}:${f.line}  …${f.context.slice(0, 110)}…`);
    }
  }
  process.exit(0);
}

const known = new Set(loadSymbols().flatMap((s) => s.keys));
const withNotation = process.argv.includes("--notation");

type Row = { key: string; uses: number; pages: string[]; courses: string[]; inGlossary: boolean };
const rows = new Map<string, Row>();
for (const page of site.pages) {
  for (const [key, n] of pageNotation(page)) {
    if (!key.startsWith("\\") || key.includes("_")) if (!withNotation) continue;
    const r = rows.get(key) ?? { key, uses: 0, pages: [], courses: [], inGlossary: known.has(key) };
    r.uses += n;
    r.pages.push(page.slug);
    if (!r.courses.includes(page.course)) r.courses.push(page.course);
    rows.set(key, r);
  }
}
const sorted = [...rows.values()].sort((a, b) => b.uses - a.uses);

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(sorted, null, 2));
} else {
  for (const r of sorted)
    console.log(`${r.inGlossary ? " " : "?"} ${r.key.padEnd(16)} ${String(r.uses).padStart(5)} uses  ${r.pages.length} pages  ${r.courses.join(", ")}`);
  const commands = sorted.filter((r) => r.key.startsWith("\\") && !r.key.includes("_"));
  const missing = commands.filter((r) => !r.inGlossary);
  console.log(`\n${commands.length} commands on ${site.pages.length} pages · ${missing.length} not in data/symbols.json (marked ?)`);
  if (withNotation)
    console.log(
      `${sorted.length - commands.length} letters and subscripted symbols · ${sorted.filter((r) => r.inGlossary).length - (commands.length - missing.length)} of them in the glossary`
    );
}
