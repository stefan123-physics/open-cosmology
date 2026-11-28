import type { ScoreUnit } from "./progress";

/**
 * The scoring units of a problem set, read from its MDX source at build time: the same list that
 * `unitsOnPage()` (components/exercise/units.ts) reads from the rendered page, so the homepage can show a set's score
 * without opening it. Each <Part> with points is a unit ("p2-a"), or the <Exercise> itself when it has no parts with
 * points; its answers are the <Answer> ids inside it. `content:check` (lib/exercise-check.ts) compares the two on every set.
 */
export function setUnits(body: string): ScoreUnit[] {
  const units: ScoreUnit[] = [];
  const tag = /<(\/?)(Exercise|Part|Answer)\b([^>]*?)(\/?)>/g;
  const attr = (s: string, name: string) => {
    const m = s.match(new RegExp(`\\b${name}=(?:"([^"]*)"|\\{\\s*([^}\\s]*)\\s*\\})`));
    return m ? (m[1] ?? m[2]) : undefined;
  };
  let ex: { id: string; points: number; optional: boolean; answers: string[]; parts: ScoreUnit[] } | null = null;
  let part: ScoreUnit | null = null;
  for (const m of body.matchAll(tag)) {
    const [, close, name, rest] = m;
    if (name === "Exercise" && !close) {
      ex = { id: attr(rest, "id") ?? "", points: Number(attr(rest, "points")) || 0, optional: /\boptional\b/.test(rest), answers: [], parts: [] };
    } else if (name === "Exercise" && close && ex) {
      units.push(...(ex.parts.length ? ex.parts : [{ id: ex.id, points: ex.points, optional: ex.optional, answers: ex.answers }]));
      ex = null;
    } else if (name === "Part" && !close && ex) {
      const points = attr(rest, "points");
      part = points === undefined ? null : { id: `${ex.id}-${attr(rest, "label") ?? ""}`, points: Number(points) || 0, optional: ex.optional, answers: [] };
      if (part) ex.parts.push(part);
    } else if (name === "Part" && close) {
      part = null;
    } else if (name === "Answer" && ex) {
      const id = attr(rest, "id");
      if (id) (part ?? ex).answers.push(id);
    }
  }
  return units;
}
