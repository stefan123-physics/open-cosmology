import Link from "next/link";
import type { Course, Site } from "@/lib/content";
import { CollapseOnMobile } from "./CollapseOnMobile";
import { yearName } from "@/lib/roman";
import { ProgressTick } from "./progress/ProgressTick";

/** Sidebar generated from the content folder: every page in the course, grouped by lecture. */
export function CourseNav({ site, course, current }: { site: Site; course: Course; current?: string }) {
  const groups = new Map<number, typeof course.pages>();
  for (const p of course.pages) groups.set(p.lecture, [...(groups.get(p.lecture) ?? []), p]);
  const year = site.years.find((y) => y.number === course.year);
  return (
    <nav className="course-nav" aria-label={`${course.id} pages`}>
      <details data-collapse-mobile>
        <summary>
          <span className="cn-course">{course.ocwNumber}</span> {course.title}{" "}
          <span className="cn-mobile-label">· {course.pages.length} pages</span>
        </summary>
        <ol>
          {[...groups.entries()].map(([lecture, pages]) => {
            const entry = course.syllabus.find((s) => s.lecture === lecture);
            return (
              <li key={lecture}>
                <div className="cn-lecture">
                  {course.unit} {lecture}
                  {entry ? `: ${entry.title}` : ""}
                </div>
                <ul>
                  {pages.map((p) => (
                    <li key={p.slug}>
                      <Link href={p.href} aria-current={p.slug === current ? "page" : undefined}>
                        {p.title}
                        <ProgressTick slug={p.slug} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
        <Link className="cn-index" href={course.href}>
          Course overview →
        </Link>
      </details>
      <CollapseOnMobile />
      {year && (
        <div className="cn-year">
          <div className="cn-year-title">{yearName(year.number)}</div>
          <ul>
            {year.courses.map((c) => (
              <li key={c.id}>
                <Link href={c.href} aria-current={c.id === course.id ? "true" : undefined}>
                  {c.ocwNumber} {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
