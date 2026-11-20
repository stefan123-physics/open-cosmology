"use client";
import { saveWords, useSavedWords } from "@/lib/saved-words";
import { showToast } from "@/components/ui/Toast";

/** "Save all new words" at the end of "Words on this page": saves the words this lesson explains to My words. */
export function SaveAllWords({ ids }: { ids: string[] }) {
  const saved = new Set(useSavedWords().map((w) => w.id));
  const left = ids.filter((id) => !saved.has(id)).length;
  return (
    <p className="pt-save-all">
      <button
        type="button"
        className="secondary small"
        disabled={left === 0}
        onClick={() => {
          const n = saveWords(ids);
          showToast(n ? `${n} ${n === 1 ? "word" : "words"} saved to My words.` : "These words are already in My words.");
        }}
      >
        {left === 0 ? "All new words saved" : `Save all ${ids.length} new words`}
      </button>
    </p>
  );
}
