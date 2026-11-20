"use client";
import { useEffect, useMemo, useState } from "react";
import { Flashcards, type Card } from "@/components/Flashcards";
import { isDue, loadSchedule, resetSchedule, today, type Schedule } from "@/lib/flashcards";
import { loadProgress } from "@/lib/progress";
import { applyBackup, makeBackup, MAX_IMPORT_BYTES, readBackup } from "@/lib/backup";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import { showToast } from "@/components/ui/Toast";
import { useSavedWords } from "@/lib/saved-words";
import { loadGlossaryData, type GlossaryData } from "@/lib/glossary-client";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

type SiteCard = Card & { slug: string; source: { title: string; href: string } };

/** The /review page: due flashcards from every lesson, plus export, import and reset of saved progress. */
export function ReviewDeck() {
  const [all, setAll] = useState<SiteCard[] | null>(null);
  const [error, setError] = useState("");
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [studied, setStudied] = useState<Set<string>>(new Set());
  const [includeNew, setIncludeNew] = useState(false);
  const [message, setMessage] = useState("");
  // The deck is fixed when the page opens (or a setting changes), so rating a card does not reshuffle it.
  const [deckKey, setDeckKey] = useState(0);
  const [ask, dialog] = useConfirm();
  // Saved glossary words ("My words") are cards too: the word on the front, its short meaning on the back.
  const saved = useSavedWords();
  const [words, setWords] = useState<GlossaryData["words"] | null>(null);
  useEffect(() => {
    if (saved.length && !words)
      loadGlossaryData()
        .then((d) => setWords(d.words))
        .catch(() => {});
  }, [saved.length, words]);
  const wordCards: SiteCard[] = useMemo(
    () =>
      words
        ? saved.flatMap(({ id }) => {
            const w = words[id];
            return w ? [{ id: `term:${id}`, front: esc(w[0]), back: esc(w[1]), slug: `term:${id}`, source: { title: `the glossary (${w[0]})`, href: w[2] } }] : [];
          })
        : [],
    [saved, words]
  );

  useEffect(() => {
    fetch("/flashcards.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d: { cards: SiteCard[] }) => setAll(d.cards))
      .catch(() => setError("The flashcards could not be loaded. If you are offline, save a course for offline use first."));
    const update = () => {
      setSchedule(loadSchedule());
      setStudied(new Set(Object.keys(loadProgress().done)));
    };
    update();
    window.addEventListener("flashcards-change", update);
    window.addEventListener("progress-change", update);
    return () => {
      window.removeEventListener("flashcards-change", update);
      window.removeEventListener("progress-change", update);
    };
  }, []);

  const deck = useMemo(() => {
    if (!all || !schedule) return null;
    const day = today();
    const seenDue = all.filter((c) => schedule.cards[c.id] && isDue(schedule.cards[c.id], day));
    const fresh = includeNew ? all.filter((c) => !schedule.cards[c.id] && studied.has(c.slug)) : [];
    // Saved words: due ones, and new ones at once (saving a word is asking to learn it).
    const savedWords = wordCards.filter((c) => !schedule.cards[c.id] || isDue(schedule.cards[c.id], day));
    return [...seenDue, ...savedWords, ...fresh];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [all, includeNew, deckKey, schedule === null, wordCards.length]);

  const newAvailable = all && schedule ? all.filter((c) => !schedule.cards[c.id] && studied.has(c.slug)).length : 0;
  const tracked = schedule ? Object.keys(schedule.cards).length : 0;

  const exportFile = () => {
    const blob = new Blob([makeBackup()], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `open-cosmology-progress-${today()}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    setMessage("Your progress was saved as a file.");
  };
  const importFile = async (file: File | undefined) => {
    if (!file) return;
    if (file.size > MAX_IMPORT_BYTES) {
      setMessage("This file is too large to be an Open Cosmology backup.");
      return;
    }
    const result = readBackup(await file.text());
    if (!result.ok) {
      setMessage(result.error);
      return;
    }
    const n = Object.keys(result.progress.done).length;
    const m = Object.keys(result.flashcards.cards).length;
    const w = result.words?.length;
    const ok = await ask({
      title: "Import progress",
      message: (
        <>
          <p>Replace the study and flashcard progress in this browser with the imported file?</p>
          <p className="muted">
            The file has {n} studied {n === 1 ? "lesson" : "lessons"}, {m} {m === 1 ? "flashcard" : "flashcards"}
            {w !== undefined && ` and ${w} saved ${w === 1 ? "word" : "words"}`}. What is in this browser now will be overwritten.
          </p>
        </>
      ),
      confirmLabel: "Replace progress",
      destructive: true,
    });
    if (!ok) return;
    applyBackup(result.progress, result.flashcards, result.words);
    setDeckKey((k) => k + 1);
    setMessage("");
    showToast(`Progress imported: ${n} studied ${n === 1 ? "lesson" : "lessons"} and ${m} ${m === 1 ? "flashcard" : "flashcards"}.`);
  };
  const reset = async () => {
    const ok = await ask({
      title: "Reset flashcard progress",
      message: (
        <>
          <p>Reset all flashcard progress in this browser? Your studied lessons and quiz scores stay.</p>
          <p className="muted">Tip: export first if you want a backup.</p>
        </>
      ),
      confirmLabel: "Reset",
      destructive: true,
    });
    if (!ok) return;
    resetSchedule();
    setDeckKey((k) => k + 1);
    setMessage("");
    showToast("Flashcard progress reset.");
  };

  return (
    <>
      {error && <p className="callout callout-warning">{error}</p>}
      {!error && !deck && <p className="muted">Loading flashcards…</p>}
      {deck && (
        <>
          <Flashcards
            key={deckKey + (includeNew ? 1000 : 0)}
            cards={deck}
            title="Due today"
            emptyText={
              tracked === 0
                ? "No flashcards yet. Rate the flashcards at the end of a lesson, or include new cards from lessons you have studied below."
                : "Nothing is due today. Well done! Come back tomorrow."
            }
          />
          {newAvailable > 0 && (
            <label className="review-new">
              <input type="checkbox" checked={includeNew} onChange={(e) => setIncludeNew(e.target.checked)} /> Also show{" "}
              {newAvailable} new {newAvailable === 1 ? "card" : "cards"} from lessons you marked as studied
            </label>
          )}
        </>
      )}

      <section className="review-backup" aria-labelledby="backup-h">
        <h2 id="backup-h">Your progress</h2>
        <p>
          Studied lessons, quiz scores, flashcard progress and your saved words are kept only in this browser. Save them as a file to move them to
          another browser or device, or to keep a copy.
        </p>
        <div className="review-actions">
          <button type="button" className="secondary" onClick={exportFile}>
            Export progress
          </button>
          <label className="button secondary button-like">
            Import progress
            <input
              type="file"
              accept="application/json,.json"
              className="sr-only"
              onChange={(e) => {
                const input = e.target;
                importFile(input.files?.[0]).finally(() => {
                  // Choosing the same file again must work too.
                  input.value = "";
                });
              }}
            />
          </label>
          <button type="button" className="secondary" onClick={reset}>
            Reset flashcard progress
          </button>
        </div>
        <p className="muted small" role="status" aria-live="polite">
          {message}
        </p>
      </section>
      {dialog}
    </>
  );
}
