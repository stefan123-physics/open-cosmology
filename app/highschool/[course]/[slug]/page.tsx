import { getSite, isHighSchool } from "@/lib/content";

/** A High School lesson: the lesson page of the programme, at /highschool/<block>/<lesson>. */
export { default, generateMetadata } from "../../../courses/[course]/[slug]/page";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSite()
    .pages.filter(isHighSchool)
    .map((p) => ({ course: p.courseSlug, slug: p.slug }));
}
