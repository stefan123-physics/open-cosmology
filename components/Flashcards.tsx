"use client";
import { useEffect, useMemo, useState } from "react";
import { isDue, loadSchedule, nextInWords, rate, saveSchedule, type Rating, type Schedule } from "@/lib/flashcards";

export type Card = { id: string; front: string; back: string; source?: { title: string; href: string } };

const RATINGS: { r: Rating; label: string }[] = [
  { r: "again", label: "Again" },
  { r: "hard", label: "Hard" },
  { r: "good", label: "Good" },
  { r: "easy", label: "Easy" },
];

/**
 * Flip-card deck with spaced repetition (lib/flashcards.ts). Cards that are due come first; after turning a card over,
 * rate it Again, Hard, Good or Easy to set when it comes back. Progress stays in this browser.
 * Used on every lesson (cards from the frontmatter or the quiz) and on /review (due cards from the whole site).
 */
export function Flashcards({
  cards,
  title = "Flashcards",
  emptyText,
}: {
  cards: Card[];
  title?: string;
  emptyText?: string;
}) {
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [queue, setQueue] = useState<Card[]>(cards);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [note, setNote] = useState("");

  // Load the schedule in the browser, and put due cards first (keeping the page's order otherwise).
  useEffect(() => {
    const s = loadSchedule();
    setSchedule(s);
    setQueue([...cards.filter((c) => isDue(s.cards[c.id])), ...cards.filter((c) => !isDue(s.cards[c.id]))]);
    setI(0);
    const update = () => setSchedule(loadSchedule());
    window.addEventListener("flashcards-change", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("flashcards-change", update);
      window.removeEventListener("storage", update);
    };
  }, [cards]);

  const due = useMemo(() => (schedule ? queue.filter((c) => isDue(schedule.cards[c.id])).length : null), [schedule, queue]);

  if (!queue.length)
    return emptyText ? (
      <section className="flashcards" data-noread aria-labelledby="fc-title">
        <h2 id="fc-title">{title}</h2>
        <p>{emptyText}</p>
      </section>
    ) : null;

  const card = queue[Math.min(i, queue.length - 1)];
  const state = schedule?.cards[card.id];
  const go = (d: number) => {
    setFlipped(false);
    setNote("");
    setI((v) => (v + d + queue.length) % queue.length);
  };
  const onRate = (r: Rating) => {
    const s = loadSchedule();
    s.cards[card.id] = rate(s.cards[card.id], r);
    saveSchedule(s);
    setSchedule(s);
    setNote(`Rated ${r}: back ${nextInWords(state, r)}.`);
    setFlipped(false);
    if (r === "again") {
      // Show it again at the end of this session.
      setQueue((q) => [...q.filter((c) => c.id !== card.id), card]);
    } else {
      setI((v) => (v + 1) % queue.length);
    }
  };

  return (
    <section className="flashcards" data-noread aria-labelledby="fc-title">
      <h2 id="fc-title">{title}</h2>
      <p className="fc-status" aria-live="polite">
        {due === null ? "" : due > 0 ? `${due} of ${queue.length} ${queue.length === 1 ? "card is" : "cards are"} due` : "Nothing due here today. Browse, or come back later."}
        {note && <span className="fc-note"> · {note}</span>}
      </p>
      <button
        className={`flashcard ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? "Show question" : "Show answer"}
      >
        <span className="fc-side">{flipped ? "Answer" : "Question"}</span>
        <span className="fc-text" aria-live="polite" dangerouslySetInnerHTML={{ __html: flipped ? card.back : card.front }} />
        <span className="fc-hint">Click to {flipped ? "see the question" : "reveal the answer"}</span>
      </button>
      {card.source && (
        <p className="fc-source">
          From <a href={card.source.href}>{card.source.title}</a>
        </p>
      )}
      {flipped && (
        <div className="fc-rate" role="group" aria-label="How well did you know it?">
          {RATINGS.map(({ r, label }) => (
            <button key={r} type="button" className={`secondary fc-${r}`} onClick={() => onRate(r)}>
              <span className="fc-rate-label">{label}</span>
              <span className="fc-rate-when">{nextInWords(state, r)}</span>
            </button>
          ))}
        </div>
      )}
      <div className="fc-nav">
        <button className="secondary" onClick={() => go(-1)} aria-label="Previous card">
          ←
        </button>
        <span>
          {Math.min(i, queue.length - 1) + 1} / {queue.length}
        </span>
        <button className="secondary" onClick={() => go(1)} aria-label="Next card">
          →
        </button>
      </div>
    </section>
  );
}
