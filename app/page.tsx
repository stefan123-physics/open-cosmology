import Link from "next/link";
import { getSite, HIGHSCHOOL_YEAR, isLesson, orderedPages, yearHref } from "@/lib/content";
import { LinkBar } from "@/components/LinkBar";
import { ExpansionHero } from "@/components/ExpansionHero";
import { ContinueCard } from "@/components/progress/ContinueCard";
import { yearName } from "@/lib/roman";

export default function Home() {
  const site = getSite();
  const cosmologyCourses = site.courses.filter((c) => c.role === "cosmology");
  const themes = cosmologyCourses.flatMap((c) => c.themes.map((t) => ({ course: c, theme: t })));
  const first = orderedPages(site).find((p) => p.yearNumber >= 1);
  const highSchool = site.years.find((y) => y.number === HIGHSCHOOL_YEAR);
  const yearsBack = [...site.years].reverse();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Free · Open · Based on MIT OpenCourseWare</p>
          <h1>Learn how the universe began, expanded, and came to look the way it does.</h1>
          <p className="lead">
            Open Cosmology is a free, complete programme in physics: four undergraduate years from classical mechanics and
            electromagnetism through relativity, quantum and statistical physics to the early universe, with the calculus,
            differential equations and linear algebra they rest on, and a fifth, graduate year for dark matter, the growth of
            structure and general relativity. It is rewritten from MIT lectures as clear
            explanations, interactive graphs and worked examples. Cosmology is the destination: the expanding universe, the Big
            Bang, the cosmic microwave background, inflation, dark matter and dark energy.
          </p>
          <div className="hero-cta">
            <a href="#cosmology" className="button">
              Explore cosmology
            </a>
            {first && (
              <Link href={first.href} className="button secondary">
                Begin with Year I
              </Link>
            )}
          </div>
        </div>
        <ExpansionHero />
      </section>

      {highSchool && (
        <section className="home-section home-highschool" aria-label="High School">
          <LinkBar
            href={yearHref(HIGHSCHOOL_YEAR)}
            kicker="New to physics?"
            title="Start with the High School"
            sub="Nine blocks of pre-university physics and maths, from a maths toolkit to the Big Bang, that lead into Year I"
          />
        </section>
      )}

      <ContinueCard
        pages={orderedPages(site).filter(isLesson).map((p) => ({ slug: p.slug, title: p.title, href: p.href, course: p.course, prerequisites: p.prerequisites }))}
      />

      <section id="cosmology" className="home-section">
        <h2>The destination: cosmology</h2>
        <p className="muted">
          Year IV of the path. Each theme follows MIT 8.286 <em>The Early Universe</em>, with extra pages where a topic needs more
          room; the dark matter and structure formation pages come from the graduate course 8.902 in Year V.
        </p>
        <div className="theme-grid">
          {themes.map(({ course, theme }) => {
            const pages = [
              ...course.pages.filter((p) => theme.lectures.includes(p.lecture)),
              ...theme.pages.map((s) => site.pageBySlug.get(s)).filter((p) => p !== undefined),
            ];
            const lectures = course.syllabus.filter((s) => theme.lectures.includes(s.lecture));
            return (
              <div key={course.id + theme.title} className="theme-card cosmology">
                <h3>{theme.title}</h3>
                <p>{theme.blurb}</p>
                {pages.length > 0 ? (
                  <ul>
                    {pages.slice(0, 4).map((p) => (
                      <li key={p.slug}>
                        <Link href={p.href}>{p.title}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="muted small">
                    {lectures.length > 0
                      ? `${course.id} ${course.unit.toLowerCase()}s ${lectures.map((l) => l.lecture).join(", ")} · pages coming`
                      : "Pages coming"}
                  </p>
                )}
                <Link className="small" href={course.href}>
                  {course.id} overview →
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-section">
        <h2>The programme, read backwards</h2>
        <p className="muted">
          Cosmology stands on the rest of physics. Read the path backwards to see what each step needs, or start at Year 1 and walk
          forward.
        </p>
        <ol className="path-back">
          {yearsBack.map((y) => (
            <li key={y.number} className={`path-year y${y.number}`}>
              <div className="py-label">
                <span className="year-num">{yearName(y.number)}</span>
                <strong>{y.title}</strong>
              </div>
              <div className="py-courses">
                {y.courses.map((c) => (
                  <Link key={c.id} href={c.href} className={`chip ${c.role}`}>
                    {c.ocwNumber} {c.title}
                    {c.pages.length > 0 && <span className="chip-count">{c.pages.length}</span>}
                  </Link>
                ))}
              </div>
              {y.courses.some((c) => c.cosmologyNeeds) && (
                <p className="py-needs muted small">
                  {y.courses
                    .filter((c) => c.cosmologyNeeds)
                    .map((c) => c.cosmologyNeeds)
                    .join(" ")}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="home-section how">
        <h2>How each page works</h2>
        <ul className="feature-list">
          <li>
            <strong>Prerequisites first.</strong> Every page lists what you need before it, and where it leads in cosmology.
          </li>
          <li>
            <strong>Live graphs.</strong> Plots are computed from the formulas, with sliders to change the parameters.
          </li>
          <li>
            <strong>Every formula cited.</strong> Each equation links to the MIT lecture or notes it comes from.
          </li>
          <li>
            <strong>Practice.</strong> Step-by-step worked examples, a quiz and flashcards on every page.
          </li>
          <li>
            <strong>Listen.</strong> A read-aloud button speaks the page, maths included.
          </li>
        </ul>
      </section>
    </div>
  );
}
