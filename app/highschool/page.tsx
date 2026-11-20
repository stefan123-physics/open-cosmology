import Link from "next/link";
import type { Metadata } from "next";
import { getSite, HIGHSCHOOL_YEAR, isLesson, orderedPages, yearHref } from "@/lib/content";
import { shareMetadata } from "@/lib/share";
import { ContinueCard } from "@/components/progress/ContinueCard";
import { ProgressTick } from "@/components/progress/ProgressTick";
import { NewtonHero } from "@/components/NewtonHero";

const title = "High School Physics";
const description =
  "Free pre-university physics in nine blocks, from a maths toolkit to the Big Bang, the CMB and dark matter: the foundation for Year I of Open Cosmology.";

export const metadata: Metadata = { title, description, ...shareMetadata(title, description) };

/** The High School (year 0): nine blocks before Year I, with their lesson lists (docs/HIGHSCHOOL-PLAN.md §4). */
export default function HighSchool() {
  const site = getSite();
  const year = site.years.find((y) => y.number === HIGHSCHOOL_YEAR);
  const blocks = year?.courses ?? [];
  const ordered = orderedPages(site).filter((p) => p.yearNumber === HIGHSCHOOL_YEAR);
  const first = ordered.find(isLesson);
  const lessonCount = blocks.reduce((n, c) => n + c.syllabus.length, 0);
  const written = ordered.filter(isLesson).length;

  return (
    <div className="home">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/courses">Programme</Link> › <span>High School</span>
      </nav>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Before Year I · Free · Non-commercial</p>
          <h1>High School Physics: the foundation for Open Cosmology</h1>
          <p className="lead">
            A free course in pre-university physics, at about the level of the last years of secondary school (Dutch VWO), for
            anyone starting from scratch. It begins with the maths you need and ends with the Big Bang, the cosmic microwave
            background and dark matter. Every lesson says what you need first, explains with worked examples, a quiz and
            flashcards, and points to where the idea leads in Year I and beyond.
          </p>
          <div className="hero-cta">
            {first ? (
              <Link href={first.href} className="button">
                Start with Block 0
              </Link>
            ) : (
              <a href="#blocks" className="button">
                See the nine blocks
              </a>
            )}
            <Link href={yearHref(1)} className="button secondary">
              Already know this? Go to Year I
            </Link>
          </div>
        </div>
        <NewtonHero />
      </section>

      {ordered.length > 0 && (
        <ContinueCard
          pages={ordered.filter(isLesson).map((p) => ({ slug: p.slug, title: p.title, href: p.href, course: p.course, prerequisites: p.prerequisites.filter((s) => site.pageBySlug.has(s)) }))}
        />
      )}

      <section id="blocks" className="home-section">
        <h2>Nine blocks, from basic to advanced</h2>
        <p className="muted">
          {lessonCount} lessons in order
          {written === 0 ? ", being written: the lists below show what each block will cover" : `, ${written} written so far`}. Each
          lesson only uses ideas from the lessons before it, and every block ends with &ldquo;Towards the universe&rdquo;, which
          links it to cosmology.
        </p>
        <ol className="block-list">
          {blocks.map((c) => (
            <li key={c.id} className="block-card" id={`block-${c.block}`}>
              <h3>
                <Link href={c.href}>
                  <span className="block-num">{c.ocwNumber}</span> {c.title}
                </Link>
              </h3>
              <p className="block-desc">{c.description}</p>
              <ol className="block-lessons">
                {c.syllabus.map((s) => {
                  const page = c.pages.find((p) => isLesson(p) && p.lecture === s.lecture);
                  return (
                    <li key={s.lecture} className={s.title.startsWith("Towards the universe") ? "towards" : undefined}>
                      <span className="sec-num">
                        {c.block}.{s.lecture}
                      </span>
                      {page ? (
                        <span>
                          <Link href={page.href}>{page.title}</Link>
                          <ProgressTick slug={page.slug} />
                        </span>
                      ) : (
                        <span className="unwritten-title">
                          {s.title} <span className="muted small">(coming)</span>
                        </span>
                      )}
                    </li>
                  );
                })}
                {c.pages
                  .filter((p) => !isLesson(p))
                  .map((p) => (
                    <li key={p.slug} className="practice">
                      <span className="sec-num">{c.block}.P</span>
                      <span>
                        <Link href={p.href}>Practice set: {p.title}</Link>
                        <ProgressTick slug={p.slug} label="done" />
                      </span>
                    </li>
                  ))}
              </ol>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-section uni-cta" aria-labelledby="uni-cta-h">
        <h2 id="uni-cta-h">Ready? Start Year I</h2>
        <p className="muted">
          After Block 8 you are ready for the university programme: a free path from MIT&apos;s first-year physics and calculus to
          the early universe. Your progress, settings and flashcards carry on: it is the same site.
        </p>
        <p className="uni-cta-link">
          <Link href={yearHref(1)} className="button">
            Go to Year I
          </Link>
        </p>
      </section>
    </div>
  );
}
