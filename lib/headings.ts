import { slugify } from "./rehype-sections";

export type Heading = { id: string; label: string };

/** Plain text of a markdown heading: maths, emphasis, code and link syntax removed. */
export function plainHeading(md: string): string {
  return md
    .replace(/\$[^$]*\$/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * The `## ` headings of an MDX body with the same ids that lib/rehype-sections.ts gives the
 * rendered sections. Used for the "On this page" list and the search index.
 */
export function extractHeadings(body: string): Heading[] {
  const out: Heading[] = [];
  const used = new Set<string>();
  let fenced = false;
  for (const line of body.split("\n")) {
    if (/^\s*```/.test(line)) fenced = !fenced;
    if (fenced) continue;
    const m = line.match(/^##\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const label = plainHeading(m[1]);
    let id = slugify(label) || "section";
    while (used.has(id)) id += "-2";
    used.add(id);
    out.push({ id, label });
  }
  return out;
}
