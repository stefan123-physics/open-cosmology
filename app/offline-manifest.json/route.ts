import fs from "node:fs";
import path from "node:path";
import { getSite } from "@/lib/content";
import { localSim } from "@/lib/phet";
import { glossary, symbolYearPath } from "@/lib/symbols";
import { entriesByLetter } from "@/lib/glossary-site";

/**
 * What the reader can save for offline use (docs/PLAN.md §5), built once at build time as a static file.
 * The page code (components/offline/*) downloads these into the browser's Cache Storage on request; public/sw.js
 * serves them when the network is unavailable. Sizes are estimates for the "Save" buttons: a lesson's HTML is about 0.1 MB over the network but about 1.4 MB once
 * stored (the browser keeps it uncompressed, with the formulas and the page data), measured 2026-11-17.
 */
export const dynamic = "force-static";

const PAGE_MB = 1.4;

export function GET() {
  const site = getSite();
  const symbolYears = [...new Set(glossary(site).flatMap((e) => e.pages.map((p) => p.yearNumber)))].sort((a, b) => a - b).map(symbolYearPath);
  // The glossary of difficult words: the index, every letter that has words, and its data (search, usage, My words).
  const glossaryLetters = [...entriesByLetter().keys()].sort().map((l) => `/glossary/${l}`);
  // The panel's "More" text, one file per letter (app/glossary-more/[letter]/route.ts).
  const glossaryMore = [...entriesByLetter().keys()].sort().map((l) => `/glossary-more/${l}`);
  const shell = ["/", "/courses", "/highschool", "/symbols", ...symbolYears, "/symbols-usage.json", "/glossary", ...glossaryLetters, "/glossary-usage.json", ...glossaryMore, "/review", "/about", "/accessibility", "/wonder", "/offline", "/search-index.json", "/flashcards.json", "/manifest.webmanifest"];
  const courses = site.courses.map((c) => {
    const pages = c.pages.map((p) => p.href);
    const phet = [...new Set(c.pages.map((p) => (p.phet ? localSim(p.phet) : undefined)).filter((s) => !!s))];
    const mb = (pages.length + 1) * PAGE_MB + phet.reduce((sum, s) => sum + s!.bytes / 1e6, 0);
    return {
      id: c.id,
      title: `${c.ocwNumber} ${c.title}`,
      href: c.href,
      urls: [c.href, ...pages],
      phet: phet.map((s) => s!.file),
      mb: Math.round(mb * 10) / 10,
    };
  });
  // Every script and style file of this build: some load only when needed (the graph library), so they are not
  // referenced in the page HTML, and a saved page would otherwise break offline. Fonts come from the CSS.
  const assets = staticFiles();
  const sharedMb = Math.round((assets.reduce((s, a) => s + a.bytes, 0) / 1e6 + 1.5) * 10) / 10; // + fonts used
  const version = process.env.NEXT_PUBLIC_BUILD_VERSION ?? "unknown"; // set once per build in next.config.ts
  const totalMb = Math.round((shell.length * PAGE_MB + courses.reduce((s, c) => s + c.mb, 0) + sharedMb) * 10) / 10;
  return Response.json({ version, shell, courses: courses.filter((c) => c.urls.length > 1), assets: assets.map((a) => a.url), sharedMb, totalMb });
}

function staticFiles(): { url: string; bytes: number }[] {
  const root = path.join(process.cwd(), ".next", "static");
  const out: { url: string; bytes: number }[] = [];
  const walk = (dir: string) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(js|css)$/.test(entry.name))
        out.push({ url: "/_next/static/" + path.relative(root, full).split(path.sep).join("/"), bytes: fs.statSync(full).size });
    }
  };
  walk(root);
  return out;
}
