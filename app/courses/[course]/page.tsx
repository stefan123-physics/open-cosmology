import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSite, HIGHSCHOOL_YEAR, isHighSchool, isLesson, yearHref, type Page } from "@/lib/content";
import { LinkBar } from "@/components/LinkBar";
import { shareMetadata } from "@/lib/share";
import { yearName } from "@/lib/roman";
import { ProgressTick, CourseProgress, CourseTotals } from "@/components/progress/ProgressTick";
import { SaveCourse } from "@/components/offline/SaveCourse";
import { CourseIntro } from "@/components/course/CourseIntro";
import { ChapterNav, type ChapterLink } from "@/components/course/ChapterNav";
import { WrittenOnlyToggle } from "@/components/course/WrittenOnlyToggle";

type Params = { course: string };

export const dynamicParams = false;

/** University courses only; the High School blocks are served by app/highschool/[course] with this same page. */
export function generateStaticParams(): Params[] {
  return getSite()
    .courses.filter((c) => !isHighSchool(c))
    .map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const c = getSite().courseBySlug.get((await params).course);
  if (!c) return {};
  const title =
    c.kind === "highschool" ? `${c.ocwNumber}: ${c.title} (High School)` : c.kind === "textbook" ? `${c.title} (${c.ocwNumber})` : `${c.ocwNumber} ${c.title}`;
  return {
    title,
    description: c.description,
    ...shareMetadata(title, c.description),
  };
}

type Row = { n: number; title?: string; url?: string; label?: string; coveredBy: string[] };
/** A page listed once per chapter, with every section of the chapter it covers. */
type Item = { page: Page; own: boolean; rows: Row[] };

/** Anchor id of a syllabus entry: 4.3 → "sec-4-3". */
const secId = (n: number) => `sec-${String(n).replace(".", "-")}`;

export default async function CoursePage({ params }: { params: Promise<Params> }) {
  const site = getSite();
  const course = site.courseBySlug.get((await params).course);
  if (!course) notFound();

  // Merge MIT's syllabus with the pages that exist; pages for lectures not in the syllabus are listed too.
  const byNumber = new Map<number, Row>();
  for (const s of course.syllabus) byNumber.set(s.lecture, { n: s.lecture, title: s.title, url: s.url, label: s.label, coveredBy: s.coveredBy });
  // Problem sets are not lessons: they get rows of their own at the end of their chapter.
  const lessons = course.pages.filter(isLesson);
  const sets = course.pages.filter((p) => !isLesson(p)).sort((a, b) => a.lecture - b.lecture || a.order - b.order);
  for (const p of lessons) if (!byNumber.has(p.lecture)) byNumber.set(p.lecture, { n: p.lecture, coveredBy: [] });
  const rows = [...byNumber.values()].sort((a, b) => a.n - b.n);
  const pagesOf = (n: number) => lessons.filter((p) => p.lecture === n).sort((a, b) => a.order - b.order);
  const coveredOf = (r: Row) => r.coveredBy.map((s) => site.pageBySlug.get(s)).filter((p): p is Page => p !== undefined);
  const hasPages = (r: Row) => pagesOf(r.n).length > 0 || coveredOf(r).length > 0;
  const written = rows.filter(hasPages).length;
  const textbook = course.kind === "textbook";
  const highschool = course.kind === "highschool";
  const lastBlockOrder = Math.max(...site.courses.filter((c) => c.year === course.year).map((c) => c.order));
  const rowLabel = (r: Row) => r.label ?? (highschool ? `${course.unit} ${course.block}.${r.n}` : `${course.unit} ${r.n}`);

  // Chapters (book chapters, MIT weeks or units, or topics); without any, one group with no heading.
  const groups = (course.chapters.length ? course.chapters : [{ label: "", title: "", from: -Infinity }]).map((ch, i, all) => {
    const next = all[i + 1]?.from ?? Infinity;
    const chRows = rows.filter((r) => r.n >= ch.from && r.n < next);
    const items = new Map<string, Item>();
    for (const r of chRows)
      for (const [p, own] of [...pagesOf(r.n).map((p) => [p, true] as const), ...coveredOf(r).map((p) => [p, false] as const)]) {
        const it = items.get(p.slug) ?? { page: p, own: own || p.course === course.id, rows: [] };
        it.rows.push(r);
        items.set(p.slug, it);
      }
    return {
      id: course.chapters.length ? `chapter-${i + 1}` : "",
      label: ch.label,
      title: ch.title,
      rows: chRows,
      items: [...items.values()],
      sets: sets.filter((p) => p.lecture >= ch.from && p.lecture < next),
      unwritten: chRows.filter((r) => !hasPages(r)),
    };
  });
  const chapterLinks: ChapterLink[] = groups
    .filter((g) => g.id)
    .map((g) => ({ id: g.id, label: g.label, title: g.title, empty: g.items.length === 0 }));
  // Contents row: "Chapter 1 … Chapter 8" becomes "Chapters 1 2 … 8" to stay short on phones.
  const firstWords = chapterLinks.map((c) => c.label.split(" ")[0]);
  const prefix = firstWords.find((w) => firstWords.filter((x) => x === w).length > chapterLinks.length / 2);
  const shortLabel = (label: string) => (prefix && label.startsWith(`${prefix} `) ? label.slice(prefix.length + 1) : label);

  // Each section number gets its anchor once: on the first page that covers it, else on its "not written" row.
  const anchored = new Set<number>();
  const anchorsFor = (rs: Row[]) =>
    rs
      .filter((r) => !anchored.has(r.n) && anchored.add(r.n))
      .map((r) => <span key={r.n} id={secId(r.n)} className="sec-anchor" aria-hidden="true" />);

  // Theme cards jump to the theme's first section here; a theme made only of pages elsewhere links to its first page.
  const themeTarget = (lectures: number[], pages: string[]) => {
    const first = rows.find((r) => lectures.includes(r.n));
    if (first) return { href: `#${secId(first.n)}`, where: rowLabel(first) };
    const p = pages.map((s) => site.pageBySlug.get(s)).find((x) => x !== undefined);
    if (!p) return null;
    const pc = site.courseById.get(p.course);
    return { href: p.href, where: `${p.title} · ${pc?.ocwNumber ?? p.course}` };
  };

  const credit = highschool ? (
    <p className="muted">
      Block {course.block} of the <Link href={yearHref(course.year)}>High School</Link>, the pre-university course before Year I.
      Each lesson lists the sources it is based on.
    </p>
  ) : textbook ? (
    <p className="muted">
      {course.instructors.join(", ")} · {course.publisher}, {course.term} ·{" "}
      <a href={course.licenseUrl} target="_blank" rel="noopener noreferrer">
        {course.license}
      </a>{" "}
      ·{" "}
      <a href={course.url} target="_blank" rel="noopener noreferrer">
        Read the book
      </a>
    </p>
  ) : (
    <p className="muted">
      Based on MIT OpenCourseWare, {course.term} · {course.instructors.join(", ")} ·{" "}
      <a href={course.url} target="_blank" rel="noopener noreferrer">
        Course on OCW
      </a>
    </p>
  );

  return (
    <div className="page-narrow course-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/courses">Programme</Link> › <Link href={yearHref(course.year)}>{yearName(course.year)}</Link>
      </nav>
      <header className="course-header">
        <div className={`role-tag ${course.role}`}>
          {highschool ? course.ocwNumber : course.role === "cosmology" ? "Cosmology" : course.role === "mathematics" ? "Mathematics" : "Physics"} ·{" "}
          {yearName(course.year)}
          {course.level === "graduate" && " · Graduate"}
        </div>
        <h1>{course.kind === "mit" ? `${course.ocwNumber} ${course.title}` : course.title}</h1>
        <CourseIntro
          lead={<p className="lead">{course.description}</p>}
          more={
            <>
              {textbook && (
                <p className="course-level-note">
                  An open textbook, not an MIT course. It adds the dark matter that the MIT courses leave out; sections that
                  8.286 or 8.902 already cover link to those pages instead of repeating them.
                </p>
              )}
              {!textbook && course.level === "graduate" && (
                <p className="course-level-note">
                  {course.ocwNumber} is a graduate-level course at MIT, usually taken after the bachelor&apos;s core (Years I–IV).
                </p>
              )}
              {credit}
              <SaveCourse courseId={course.id} />
              {course.cosmologyNeeds && (
                <aside className="callout callout-cosmology">
                  <div className="callout-title">{highschool ? "What the university programme needs from this block" : "What cosmology needs from this course"}</div>
                  <div className="callout-body">{course.cosmologyNeeds}</div>
                </aside>
              )}
            </>
          }
        />
      </header>

      {course.year === 1 && (
        <LinkBar
          className="course-highschool"
          href={yearHref(HIGHSCHOOL_YEAR)}
          kicker="Not ready yet?"
          title="Start with the High School"
          sub="Pre-university physics and maths in nine blocks, leading into Year I"
        />
      )}
      {highschool && course.order === lastBlockOrder && (
        <LinkBar className="course-highschool" href={yearHref(1)} kicker="After this block" title="Go on to Year I" sub="The university programme, from MIT's first-year physics and calculus" />
      )}

      <nav className="course-contents" aria-label="Contents">
        <span className="course-contents-label">Contents</span>
        <ul>
          {course.themes.length > 0 && (
            <li>
              <a href="#themes">Themes</a>
            </li>
          )}
          <li>
            <a href="#sections">All {course.unit.toLowerCase()}s</a>
          </li>
          {sets.length > 0 && (
            <li>
              <a href="#problem-sets">Problem sets</a>
            </li>
          )}
        </ul>
        {chapterLinks.length > 0 && (
          <ul aria-label={prefix ? `${prefix}s` : "Chapters"}>
            {prefix && (
              <li className="course-contents-group" aria-hidden="true">
                {prefix}s
              </li>
            )}
            {chapterLinks.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} title={`${c.label}: ${c.title}`} className="course-contents-chapter">
                  <span aria-hidden="true">{shortLabel(c.label)}</span>
                  <span className="sr-only">
                    {c.label}: {c.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {course.themes.length > 0 && (
        <section id="themes" aria-labelledby="themes-h">
          <h2 id="themes-h">Themes</h2>
          <ul className="theme-links">
            {course.themes.map((t) => {
              const target = themeTarget(t.lectures, t.pages);
              const body = (
                <>
                  <span className="theme-link-title">{t.title}</span>
                  <span className="theme-link-blurb">{t.blurb}</span>
                  {target && <span className="sr-only"> (go to {target.where})</span>}
                  <span className="link-bar-arrow" aria-hidden="true">
                    {target?.href.startsWith("#") ? "↓" : "→"}
                  </span>
                </>
              );
              return (
                <li key={t.title}>
                  {target ? (
                    target.href.startsWith("#") ? (
                      <a className="theme-link" href={target.href}>
                        {body}
                      </a>
                    ) : (
                      <Link className="theme-link" href={target.href}>
                        {body}
                      </Link>
                    )
                  ) : (
                    <div className="theme-link">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <section id="sections" className="course-sections" aria-labelledby="sections-h">
        <div className="course-sections-head">
          <h2 id="sections-h">
            {course.unit}s{" "}
            <span className="course-sections-count">
              {rows.length === 0
                ? `MIT's list of ${course.unit.toLowerCase()}s is still to be added`
                : highschool && written === 0
                  ? `${rows.length} planned, none written yet`
                  : `${written} of ${rows.length} ${textbook ? "covered" : "with pages"} so far`}
            </span>
          </h2>
          {written < rows.length && written > 0 && <WrittenOnlyToggle target="sections" />}
        </div>
        {sets.length > 0 && <CourseTotals lessons={lessons.map((p) => p.slug)} sets={sets.map((p) => p.slug)} />}
        <div className={chapterLinks.length ? "course-sections-layout" : undefined}>
          {chapterLinks.length > 0 && <ChapterNav chapters={chapterLinks} />}
          <div className="chapters">
            {groups.map((g) => (
              <section
                key={g.id || "all"}
                id={g.id || undefined}
                className={g.id ? "chapter" : "chapter chapter-plain"}
                data-empty={g.items.length === 0 ? "" : undefined}
                aria-labelledby={g.id ? `${g.id}-h` : undefined}
              >
                {g.id && (
                  <header className="chapter-head">
                    <span className="chapter-label">{g.label}</span>
                    <h3 id={`${g.id}-h`}>{g.title}</h3>
                    <p className="chapter-meta">
                      {g.rows.length} {g.rows.length === 1 ? course.unit.toLowerCase() : `${course.unit.toLowerCase()}s`}
                      {g.items.length > 0 && ` · ${g.items.length} ${g.items.length === 1 ? "page" : "pages"}`}
                      <CourseProgress slugs={g.items.map((it) => it.page.slug)} />
                    </p>
                  </header>
                )}
                {g.items.length > 0 && (
                  <ul className="lesson-list">
                    {g.items.map((it) => {
                      const pc = site.courseById.get(it.page.course);
                      return (
                        <li key={it.page.slug} className="lesson-item">
                          {anchorsFor(it.rows)}
                          <Link href={it.page.href} className="lesson-link">
                            <span className="lesson-title">
                              {it.page.title}
                              <ProgressTick slug={it.page.slug} />
                            </span>
                            <span className="link-bar-arrow" aria-hidden="true">
                              →
                            </span>
                          </Link>
                          {!it.own && (
                            <span className="lesson-elsewhere">
                              In {pc?.ocwNumber ?? it.page.course} · {pc?.unit ?? "Lecture"} {it.page.lecture}
                            </span>
                          )}
                          <p className="lesson-summary">{it.page.summary}</p>
                          <ul className="lesson-covers" aria-label="Covers">
                            {it.rows.map((r) => (
                              <li key={r.n}>
                                <span className="sec-num">{rowLabel(r)}</span> {r.title ?? it.page.title}
                                {r.url && (
                                  <>
                                    {" "}
                                    <a className="sec-src" href={r.url} target="_blank" rel="noopener noreferrer">
                                      {textbook ? "Source" : "MIT"} ↗<span className="sr-only"> (opens in a new tab)</span>
                                    </a>
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {g.sets.length > 0 && (
                  <ul className="lesson-list set-list" aria-label="Problem sets">
                    {g.sets.map((p) => (
                      <li key={p.slug} className="lesson-item set-item" id={p === sets[0] ? "problem-sets" : undefined}>
                        <Link href={p.href} className="lesson-link">
                          <span className="lesson-title">
                            <span className="set-tag">{p.kind === "exam" ? "Practice exam" : "Problem set"}</span> {p.title}
                            <ProgressTick slug={p.slug} label="done" />
                          </span>
                          <span className="link-bar-arrow" aria-hidden="true">
                            →
                          </span>
                        </Link>
                        <p className="lesson-summary">{p.summary}</p>
                        {p.covers.length > 0 && (
                          <p className="lesson-covers">
                            Practises {course.unit.toLowerCase()}
                            {p.covers.length === 1 ? "" : "s"} {p.covers.join(", ")}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {g.unwritten.length > 0 && (
                  <div className="unwritten">
                    <p className="unwritten-label">
                      {g.items.length > 0 ? "Not written yet" : `Not written yet (${g.unwritten.length})`}
                    </p>
                    <ul>
                      {g.unwritten.map((r) => (
                        <li key={r.n}>
                          {anchorsFor([r])}
                          <span className="sec-num">{rowLabel(r)}</span> {r.title}
                          {r.url && (
                            <>
                              {" "}
                              <a className="sec-src" href={r.url} target="_blank" rel="noopener noreferrer">
                                {textbook ? "Source" : "MIT"} ↗<span className="sr-only"> (opens in a new tab)</span>
                              </a>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
        {course.notes && <p className="muted small">Note: {course.notes}</p>}
      </section>
    </div>
  );
}
