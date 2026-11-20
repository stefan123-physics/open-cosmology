import type { Page } from "./content";
import { cardId } from "./flashcards";
import { renderInlineTex } from "./tex";

/** A page's flashcards (from its frontmatter, or derived from its quiz), rendered to HTML, each with a stable id. */
export function pageCards(page: Page): { id: string; front: string; back: string }[] {
  const raw =
    page.flashcards ??
    page.quiz.map((q) => ({
      front: q.question,
      // "Answer. Explanation" (no full stop added if the answer already ends with one).
      back: q.choices[q.answer] + (q.explanation ? (/[.!?]$/.test(q.choices[q.answer].trim()) ? " " : ". ") + q.explanation : ""),
    }));
  return raw.map((c) => ({ id: cardId(page.slug, c.front), front: renderInlineTex(c.front), back: renderInlineTex(c.back) }));
}
