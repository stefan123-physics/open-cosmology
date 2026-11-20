import { getSite, isHighSchool } from "@/lib/content";

/** A High School block: the course page of the programme, at /highschool/<block>. */
export { default, generateMetadata } from "../../courses/[course]/page";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSite()
    .courses.filter(isHighSchool)
    .map((c) => ({ course: c.slug }));
}
