/**
 * Spaced repetition for the flashcards, kept only in this browser (localStorage key "flashcard-schedule").
 * A simplified SM-2 schedule: each card has an interval in days and an ease; rating it Again, Hard, Good or Easy sets
 * when it is due next. Nothing is sent anywhere. Listed on the Privacy page.
 * Saved glossary words ("My words", lib/saved-words.ts) are cards too, with the id "term:<word id>".
 */

export type Rating = "again" | "hard" | "good" | "easy";
export type CardState = { due: string; interval: number; ease: number; reps: number; lapses: number; last: string };
export type Schedule = { v: 1; cards: Record<string, CardState> };

export const SCHEDULE_KEY = "flashcard-schedule";
const EMPTY: Schedule = { v: 1, cards: {} };

/** A stable id for a card: the page slug and a short hash of its front text (FNV-1a), so editing other cards on the
 *  page does not move its progress. Cards that no longer exist are simply never shown. */
export function cardId(slug: string, front: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < front.length; i++) {
    h ^= front.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return `${slug}:${h.toString(36)}`;
}

/** Today's date as YYYY-MM-DD in the reader's own time zone. */
export function today(d = new Date()): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function addDays(day: string, n: number): string {
  const [y, m, d] = day.split("-").map(Number);
  return today(new Date(y, m - 1, d + n));
}

export function loadSchedule(): Schedule {
  try {
    const raw = JSON.parse(localStorage.getItem(SCHEDULE_KEY) ?? "null");
    return isSchedule(raw) ? raw : { ...EMPTY, cards: {} };
  } catch {
    return { ...EMPTY, cards: {} };
  }
}

export function saveSchedule(s: Schedule) {
  try {
    localStorage.setItem(SCHEDULE_KEY, JSON.stringify(s));
  } catch {}
  window.dispatchEvent(new Event("flashcards-change"));
}

export function resetSchedule() {
  try {
    localStorage.removeItem(SCHEDULE_KEY);
  } catch {}
  window.dispatchEvent(new Event("flashcards-change"));
}

/** True if the card has never been rated or is due today or earlier. */
export function isDue(state: CardState | undefined, day = today()): boolean {
  return !state || state.due <= day;
}

/** The next state of a card after a rating (simplified SM-2). */
export function rate(state: CardState | undefined, r: Rating, day = today()): CardState {
  const s: CardState = state ? { ...state } : { due: day, interval: 0, ease: 2.5, reps: 0, lapses: 0, last: day };
  if (r === "again") {
    s.reps = 0;
    s.lapses += 1;
    s.interval = 0; // due again today
    s.ease = Math.max(1.3, s.ease - 0.2);
  } else if (r === "hard") {
    s.interval = Math.max(1, Math.round(s.interval * 1.2));
    s.ease = Math.max(1.3, s.ease - 0.15);
    s.reps += 1;
  } else if (r === "good") {
    s.interval = s.reps === 0 ? 1 : s.reps === 1 ? 3 : Math.max(s.interval + 1, Math.round(s.interval * s.ease));
    s.reps += 1;
  } else {
    s.interval = s.reps === 0 ? 4 : Math.max(s.interval + 2, Math.round(s.interval * s.ease * 1.3));
    s.ease = Math.min(3.5, s.ease + 0.15);
    s.reps += 1;
  }
  s.due = addDays(day, s.interval);
  s.last = day;
  return s;
}

/** When a card will come back, in words, for the rating buttons. */
export function nextInWords(state: CardState | undefined, r: Rating): string {
  const n = rate(state, r).interval;
  return n === 0 ? "today" : n === 1 ? "tomorrow" : `in ${n} days`;
}

// ------------------------------------------------------------------ checking stored and imported data

const DAY = /^\d{4}-\d{2}-\d{2}$/;
function isCardState(x: unknown): x is CardState {
  if (!x || typeof x !== "object") return false;
  const c = x as Record<string, unknown>;
  return (
    typeof c.due === "string" && DAY.test(c.due) && typeof c.last === "string" && DAY.test(c.last) &&
    [c.interval, c.ease, c.reps, c.lapses].every((n) => typeof n === "number" && Number.isFinite(n) && n >= 0 && n < 1e5)
  );
}
export function isSchedule(x: unknown): x is Schedule {
  if (!x || typeof x !== "object") return false;
  const s = x as Record<string, unknown>;
  if (s.v !== 1 || !s.cards || typeof s.cards !== "object" || Array.isArray(s.cards)) return false;
  const entries = Object.entries(s.cards as Record<string, unknown>);
  return entries.length <= 20000 && entries.every(([k, v]) => k.length <= 200 && /^[a-z0-9-]+:[a-z0-9-]+$/.test(k) && isCardState(v));
}
