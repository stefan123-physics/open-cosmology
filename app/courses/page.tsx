import Link from "next/link";
import type { Metadata } from "next";
import { getSite, HIGHSCHOOL_YEAR, isLesson, yearHref, type Course } from "@/lib/content";
import { yearName } from "@/lib/roman";
import { CourseProgress } from "@/components/progress/ProgressTick";

const lessonsOf = (c: Course) => c.pages.filter(isLesson);
const setsOf = (c: Course) => c.pages.length - lessonsOf(c).length;

export const metadata: Metadata = { title: "The Programme" };

export default function LearningPath() {
  const site = getSite();
  return (
    <div className="page-narrow">
      <header>
        <p className="eyebrow">Course catalogue</p>
        <h1>The Programme</h1>
        <p className="lead">
          A four-year bachelor&apos;s programme following MIT&apos;s undergraduate physics curriculum, from classical mechanics to
          the early universe, with a fifth, graduate year. Every lecture of every course is covered, in MIT&apos;s own order; the
          fourth year is cosmology, and the fifth adds dark matter, structure formation and general relativity at graduate level.
          New to physics? The <Link href={yearHref(HIGHSCHOOL_YEAR)}>High School</Link> comes first: nine blocks of
          pre-university physics and maths that lead into Year I.
        </p>
      </header>
      <ol className="year-list">
        {site.years.map((y) => (
          <li key={y.number} className="year" id={`year-${y.number}`}>
            <h2>
              <span className="year-num">{yearName(y.number)}</span> {y.title}
            </h2>
            <p className="muted">{y.description}</p>
            {y.number === HIGHSCHOOL_YEAR && (
              <p>
                <Link href={yearHref(y.number)}>The High School: all nine blocks and their lessons →</Link>
              </p>
            )}
            <div className="course-grid">
              {y.courses.map((c) => (
                <Link key={c.id} href={c.href} className={`course-card ${c.role}`}>
                  <span className="cc-num">{c.ocwNumber}</span>
                  <span className="cc-title">{c.title}</span>
                  {c.level === "graduate" && <span className="cc-level">Graduate course at MIT</span>}
                  <span className="cc-meta">
                    {lessonsOf(c).length} page{lessonsOf(c).length === 1 ? "" : "s"}
                    {setsOf(c) > 0 && ` · ${setsOf(c)} problem set${setsOf(c) === 1 ? "" : "s"}`} · {c.syllabus.length} {c.unit.toLowerCase()}s {c.kind === "highschool" ? "planned" : c.kind === "textbook" ? "in the book" : "at MIT"}
                  </span>
                  <CourseProgress slugs={lessonsOf(c).map((p) => p.slug)} />
                  {c.pages.length > 0 && (
                    <span className="cc-first">
                      Start: {c.pages[0].title}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
