/**
 * Export and import of everything the site remembers about your studies: study progress (lib/progress.ts), the
 * flashcard schedule (lib/flashcards.ts) and saved glossary words (lib/saved-words.ts, "words"; optional, as files
 * exported before My words existed do not have it). The file is made and read in the browser; nothing is uploaded.
 * An imported file is treated as untrusted data: size and structure are checked, and it is only ever parsed as JSON.
 */
import { isSchedule, SCHEDULE_KEY, type Schedule } from "./flashcards";
import { loadProgress, type Progress } from "./progress";
import { loadSchedule } from "./flashcards";
import { isSavedWords, loadSaved, SAVED_KEY, type SavedWord } from "./saved-words";

const PROGRESS_KEY = "study-progress";
export const MAX_IMPORT_BYTES = 2_000_000;

type Backup = { app: "open-cosmology"; v: 1; exported: string; progress: Progress; flashcards: Schedule; words?: SavedWord[] };

export function makeBackup(): string {
  const b: Backup = { app: "open-cosmology", v: 1, exported: new Date().toISOString(), progress: loadProgress(), flashcards: loadSchedule(), words: loadSaved() };
  return JSON.stringify(b, null, 1);
}

const SLUG = /^[a-z0-9-]{1,120}$/;
const ANSWER_ID = /^[A-Za-z0-9_-]{1,80}$/;
const ISO = /^\d{4}-\d{2}-\d{2}T[\d:.]+Z$/;
function isProgress(x: unknown): x is Progress {
  if (!x || typeof x !== "object") return false;
  const p = x as Record<string, unknown>;
  if (!p.done || typeof p.done !== "object" || !p.quiz || typeof p.quiz !== "object") return false;
  const done = Object.entries(p.done as Record<string, unknown>);
  const quiz = Object.entries(p.quiz as Record<string, unknown>);
  if (done.length > 5000 || quiz.length > 5000) return false;
  if (!done.every(([k, v]) => SLUG.test(k) && typeof v === "string" && ISO.test(v))) return false;
  if (
    !quiz.every(([k, v]) => {
      const q = v as Record<string, unknown>;
      return SLUG.test(k) && !!q && typeof q.best === "number" && typeof q.total === "number" && q.best >= 0 && q.total >= 0 && q.total < 1000;
    })
  )
    return false;
  if (p.problems !== undefined) {
    if (!p.problems || typeof p.problems !== "object" || Array.isArray(p.problems)) return false;
    const pages = Object.entries(p.problems as Record<string, unknown>);
    if (pages.length > 5000) return false;
    for (const [slug, page] of pages) {
      if (!SLUG.test(slug) || !page || typeof page !== "object" || Array.isArray(page)) return false;
      const entries = Object.entries(page as Record<string, unknown>);
      if (entries.length > 500) return false;
      for (const [id, v] of entries) {
        const e = v as Record<string, unknown>;
        if (!ANSWER_ID.test(id) || !e || typeof e !== "object") return false;
        if (e.ok !== undefined && typeof e.ok !== "boolean") return false;
        if (e.self !== undefined && e.self !== "got" && e.self !== "partly" && e.self !== "not") return false;
        if (typeof e.tries !== "number" || !Number.isInteger(e.tries) || e.tries < 0 || e.tries > 100000) return false;
        if (typeof e.revealed !== "boolean" || typeof e.at !== "string" || !ISO.test(e.at)) return false;
      }
    }
  }
  if (p.last !== undefined) {
    const l = p.last as Record<string, unknown>;
    if (!l || typeof l.slug !== "string" || !SLUG.test(l.slug) || typeof l.href !== "string" || !/^\/courses\/[a-z0-9.-]+\/[a-z0-9-]+$/.test(l.href) || typeof l.title !== "string" || l.title.length > 300 || typeof l.at !== "string")
      return false;
  }
  return true;
}

/** Checks a backup file's text; returns the data or an error message. Never writes anything. */
export function readBackup(text: string): { ok: true; progress: Progress; flashcards: Schedule; words?: SavedWord[] } | { ok: false; error: string } {
  if (text.length > MAX_IMPORT_BYTES) return { ok: false, error: "This file is too large to be an Open Cosmology backup." };
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return { ok: false, error: "This file is not a valid backup (it is not JSON)." };
  }
  const b = raw as Partial<Backup>;
  if (!b || b.app !== "open-cosmology" || b.v !== 1) return { ok: false, error: "This file is not an Open Cosmology backup." };
  if (!isProgress(b.progress)) return { ok: false, error: "The study progress in this file is damaged; nothing was imported." };
  if (!isSchedule(b.flashcards)) return { ok: false, error: "The flashcard progress in this file is damaged; nothing was imported." };
  if (b.words !== undefined && !isSavedWords(b.words)) return { ok: false, error: "The saved words in this file are damaged; nothing was imported." };
  return { ok: true, progress: b.progress, flashcards: b.flashcards, words: b.words };
}

/** Replaces the stored progress and schedule (and saved words, when the file has them) with the imported ones. */
export function applyBackup(progress: Progress, flashcards: Schedule, words?: SavedWord[]) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    localStorage.setItem(SCHEDULE_KEY, JSON.stringify(flashcards));
    if (words) {
      if (words.length) localStorage.setItem(SAVED_KEY, JSON.stringify(words));
      else localStorage.removeItem(SAVED_KEY);
    }
  } catch {}
  window.dispatchEvent(new Event("progress-change"));
  window.dispatchEvent(new Event("flashcards-change"));
  window.dispatchEvent(new Event("saved-words-change"));
}
