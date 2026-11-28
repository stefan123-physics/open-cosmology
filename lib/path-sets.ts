import { isLesson, isProblemSet, type Page, type Site } from "./content";
import type { PathSet } from "@/components/progress/ContinueCard";

/**
 * The problem sets among `pages`, in their order, each with the lessons it practises (for the homepage card): the
 * course's lessons of the lectures in `covers`, plus the pages a covered syllabus entry points to with `coveredBy`.
 */
export function pathSets(site: Site, pages: Page[]): PathSet[] {
  return pages.filter(isProblemSet).map((s) => {
    const own = site.pages.filter((p) => isLesson(p) && p.course === s.course && s.covers.includes(p.lecture)).map((p) => p.slug);
    const course = site.courseById.get(s.course);
    const elsewhere = (course?.syllabus ?? []).filter((e) => s.covers.includes(e.lecture)).flatMap((e) => e.coveredBy ?? []);
    return { slug: s.slug, title: s.title, href: s.href, course: s.course, lessons: [...new Set([...own, ...elsewhere])].filter((l) => site.pageBySlug.has(l)) };
  });
}
