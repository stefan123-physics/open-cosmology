/**
 * The value registry (docs/CALC_TESTS_PLAN.md §7, item 4). Pages quote the same physical quantities — the
 * Hubble constant, the age of the universe, the CMB temperature, today's matter and vacuum density — with
 * several values on purpose (Guth's 2013 numbers, round example values, later measurements, historical ones).
 * calcs/values.yaml names every value a page may quote and its role; this module finds each quoted value on
 * every page and reports any value the registry doesn't know (a typo, or a new value that needs a role), and
 * registered values no page uses any more.
 */
import fs from "node:fs";
import matter from "gray-matter";

export type Quantity = {
  id: string;
  name: string;
  /** Regular expressions (JavaScript syntax); the named group "v" is the value as written. */
  find: string[];
  /** Only values whose first number lies in [lo, hi] are checked (e.g. ages near today's). */
  range?: [number, number];
  /** Value as written (normalised) → its role. */
  values: Record<string, string>;
};

export type Finding = { quantity: string; value: string; page: string; file: string; line: number; context: string };

export function loadRegistry(file = "calcs/values.yaml"): Quantity[] {
  const data = matter(`---\n${fs.readFileSync(file, "utf8")}\n---\n`).data as { quantities: Quantity[] };
  return data.quantities.map((q) => ({
    ...q,
    values: Object.fromEntries(Object.entries(q.values ?? {}).map(([k, v]) => [normalise(String(k)), String(v)])),
  }));
}

/** "299{,}792" → "299792"; "67–70" and "67 to 70" → "67–70"; spaces dropped. */
export function normalise(v: string): string {
  return v
    .replace(/\{,\}/g, "")
    .replace(/\s*(?:–|-|to)\s*/g, "–")
    .replace(/\s+/g, "");
}

export function findValues(pages: { slug: string; file: string }[], quantities: Quantity[]): Finding[] {
  const out: Finding[] = [];
  for (const page of pages) {
    const raw = fs.readFileSync(page.file, "utf8");
    const lineAt = (i: number) => raw.slice(0, i).split("\n").length;
    for (const q of quantities)
      for (const pattern of q.find)
        for (const m of raw.matchAll(new RegExp(pattern, "g"))) {
          const v = m.groups?.v;
          if (!v) continue;
          const first = Number(v.replace(/\{,\}/g, "").match(/\d+(?:\.\d+)?/)?.[0]);
          if (q.range && !(first >= q.range[0] && first <= q.range[1])) continue;
          const i = m.index!;
          out.push({
            quantity: q.id,
            value: normalise(v),
            page: page.slug,
            file: page.file,
            line: lineAt(i),
            context: raw.slice(Math.max(0, i - 50), i + m[0].length + 20).replace(/\s+/g, " ").trim(),
          });
        }
  }
  // The same text can match two patterns of one quantity: keep one finding per place.
  const seen = new Set<string>();
  return out.filter((f) => {
    const key = `${f.quantity}|${f.page}|${f.line}|${f.value}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Unregistered values (errors) and registered values no page quotes any more (warnings). */
export function checkValues(findings: Finding[], quantities: Quantity[]) {
  const errors: { file: string; message: string }[] = [];
  const warnings: { file: string; message: string }[] = [];
  for (const f of findings) {
    const q = quantities.find((x) => x.id === f.quantity)!;
    if (!(f.value in q.values))
      errors.push({
        file: f.file,
        message: `line ${f.line}: ${q.name} quoted as ${f.value}, which calcs/values.yaml does not list ("…${f.context}…"). Check the value; if it is right, add it to the registry with its role.`,
      });
  }
  for (const q of quantities)
    for (const v of Object.keys(q.values))
      if (!findings.some((f) => f.quantity === q.id && f.value === v))
        warnings.push({ file: "calcs/values.yaml", message: `${q.name} ${v} is registered but no page quotes it any more; remove it` });
  return { errors, warnings };
}
