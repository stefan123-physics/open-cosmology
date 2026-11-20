"use client";
import { toggleWord, useSavedWords } from "@/lib/saved-words";
import { showToast } from "@/components/ui/Toast";

/**
 * The ☆ / ★ toggle that saves a glossary word to "My words" (lib/saved-words.ts). `compact` shows only the star
 * (lists); otherwise the star and "Save to my words" / "Saved to my words".
 */
export function SaveWord({ id, term, compact = false, className = "" }: { id: string; term: string; compact?: boolean; className?: string }) {
  const saved = useSavedWords().some((w) => w.id === id);
  return (
    <button
      type="button"
      className={`save-word ${compact ? "save-word-compact" : ""} ${saved ? "on" : ""} ${className}`.trim()}
      aria-pressed={saved}
      aria-label={compact ? `Save “${term}” to my words` : undefined}
      title={saved ? "Saved to my words: press to remove" : "Save to my words, to review it later"}
      data-noread
      onClick={() => {
        const now = toggleWord(id);
        showToast(now ? `“${term}” saved to My words.` : `“${term}” removed from My words.`);
      }}
    >
      <span aria-hidden="true" className="save-word-star">
        {saved ? "★" : "☆"}
      </span>
      {!compact && <span>{saved ? "Saved to my words" : "Save to my words"}</span>}
    </button>
  );
}
