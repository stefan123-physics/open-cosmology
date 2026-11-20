/**
 * Personal study progress, kept only in this browser (localStorage): pages studied, best quiz
 * scores, answers tried on problem sets and the last page visited. Nothing is sent anywhere. Components listen for the
 * "progress-change" event to stay in sync.
 */
export type Progress = {
  done: Record<string, string>; // slug -> ISO date
  quiz: Record<string, { best: number; total: number }>;
  last?: { slug: string; href: string; title: string; at: string };
  /** Problem sets: page slug -> answer id (auto-checked) or part/exercise id (self-marked) -> what happened. */
  problems: Record<string, Record<string, ProblemEntry>>;
};

export type SelfMark = "got" | "partly" | "not";
export type ProblemEntry = {
  ok?: boolean; // auto-checked answers
  self?: SelfMark; // self-marked parts
  tries: number;
  /** The solution was opened before a correct answer: no points. */
  revealed: boolean;
  at: string;
};

const KEY = "study-progress";
const empty = (): Progress => ({ done: {}, quiz: {}, problems: {} });

export function loadProgress(): Progress {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? "null");
    return raw ? { ...empty(), ...raw } : empty();
  } catch {
    return empty();
  }
}

function save(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {}
  window.dispatchEvent(new Event("progress-change"));
}

export function setDone(slug: string, done: boolean) {
  const p = loadProgress();
  if (done) p.done[slug] = new Date().toISOString();
  else delete p.done[slug];
  save(p);
}

export function recordVisit(slug: string, href: string, title: string) {
  const p = loadProgress();
  p.last = { slug, href, title, at: new Date().toISOString() };
  save(p);
}

/** Saves the best score; returns true if the page was newly marked as studied (score ≥ 75%). */
export function recordQuiz(slug: string, correct: number, total: number): boolean {
  const p = loadProgress();
  const prev = p.quiz[slug];
  if (!prev || correct > prev.best) p.quiz[slug] = { best: correct, total };
  let newlyDone = false;
  if (total > 0 && correct / total >= 0.75 && !p.done[slug]) {
    p.done[slug] = new Date().toISOString();
    newlyDone = true;
  }
  save(p);
  return newlyDone;
}

export function resetProgress() {
  save(empty());
}

const now = () => new Date().toISOString();
function entry(p: Progress, slug: string, id: string): ProblemEntry {
  const page = (p.problems[slug] ??= {});
  return (page[id] ??= { tries: 0, revealed: false, at: now() });
}

/** One press of "Check" on an answer box. A correct answer stays correct. */
export function recordAnswer(slug: string, id: string, ok: boolean) {
  const p = loadProgress();
  const e = entry(p, slug, id);
  e.tries += 1;
  e.ok = e.ok || ok;
  e.at = now();
  save(p);
}

/** A solution was opened: every answer it covers that is not yet correct earns no points from now on. */
export function recordReveal(slug: string, ids: string[]) {
  const p = loadProgress();
  let changed = false;
  for (const id of ids) {
    if (p.problems[slug]?.[id]?.ok || p.problems[slug]?.[id]?.revealed) continue;
    const e = entry(p, slug, id);
    e.revealed = true;
    e.at = now();
    changed = true;
  }
  if (changed) save(p);
}

/** The reader's own mark for a part with no answer box, given after reading the solution. */
export function recordSelf(slug: string, id: string, self: SelfMark) {
  const p = loadProgress();
  const e = entry(p, slug, id);
  e.self = self;
  e.revealed = true;
  e.at = now();
  save(p);
}

/** Forgets everything about one problem set, including its "done" mark. */
export function resetProblems(slug: string) {
  const p = loadProgress();
  delete p.problems[slug];
  delete p.done[slug];
  save(p);
}

/** What can earn points: a part, or a whole exercise that has no parts. `answers` = the ids of its answer boxes. */
export type ScoreUnit = { id: string; points: number; optional: boolean; answers: string[] };

/**
 * Score of a problem set (docs/PROBLEM-SETS-DESIGN.md §5): the points of a unit are shared equally by its answer
 * boxes (correct and not revealed first); a unit with no box is self-marked ("Partly" = half). The total is the
 * points of the non-optional units, so optional problems can only add.
 */
export function scoreSet(units: ScoreUnit[], entries: Record<string, ProblemEntry> = {}): { earned: number; extra: number; total: number; done: boolean } {
  let earned = 0;
  let extra = 0; // the part of `earned` that comes from optional problems
  let total = 0;
  for (const u of units) {
    if (!u.optional) total += u.points;
    let got = 0;
    if (u.answers.length) {
      const right = u.answers.filter((a) => entries[a]?.ok && !entries[a]?.revealed).length;
      got = (u.points * right) / u.answers.length;
    } else {
      const self = entries[u.id]?.self;
      got = self === "got" ? u.points : self === "partly" ? u.points / 2 : 0;
    }
    earned += got;
    if (u.optional) extra += got;
  }
  return { earned, extra, total, done: total > 0 && earned / total >= 0.75 };
}
