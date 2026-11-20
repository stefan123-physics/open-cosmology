import type { ScoreUnit } from "@/lib/progress";

const ids = (el: Element) => [...el.querySelectorAll(".answer[id]")].map((a) => a.id);

/**
 * The parts of one exercise that can earn points, read from the page: each <Part> with points, or the exercise
 * itself when it has none. A unit with answer boxes is marked by them; one without is self-marked under its own id
 * ("p2-a" for part a of exercise p2, "p3" for a whole exercise).
 */
export function unitsOf(exercise: HTMLElement): (ScoreUnit & { el: HTMLElement })[] {
  const optional = exercise.dataset.optional !== undefined;
  const parts = [...exercise.querySelectorAll<HTMLElement>(".ex-part[data-points]")];
  if (parts.length)
    return parts.map((el) => ({ el, id: `${exercise.id}-${el.dataset.part}`, points: Number(el.dataset.points) || 0, optional, answers: ids(el) }));
  return [{ el: exercise, id: exercise.id, points: Number(exercise.dataset.points) || 0, optional, answers: ids(exercise) }];
}

export function unitsOnPage(): ScoreUnit[] {
  return [...document.querySelectorAll<HTMLElement>(".exercise[id]")].flatMap((ex) => unitsOf(ex).map(({ el: _el, ...u }) => u));
}
