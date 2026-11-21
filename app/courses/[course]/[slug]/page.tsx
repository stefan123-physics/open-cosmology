import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cosmologyDestinations, courseOf, getSite, isHighSchool, isLesson, orderedPages, practiceFor, readingPath, setName, yearHref } from "@/lib/content";
import { renderPage } from "@/lib/mdx";
import { renderInlineTex } from "@/lib/tex";
import { shareMetadata } from "@/lib/share";
import { CourseNav } from "@/components/CourseNav";
import { Credit } from "@/components/Credit";
import { LinkBar, LinkBars } from "@/components/LinkBar";
import { Quiz } from "@/components/Quiz";
import { Flashcards } from "@/components/Flashcards";
import { pageCards } from "@/lib/page-cards";
import { FocusToggle } from "@/components/a11y/FocusToggle";
import { ReadPageControls } from "@/components/speech/ReadButtons";
import { OnThisPage } from "@/components/OnThisPage";
import { extractHeadings } from "@/lib/headings";
import { yearName } from "@/lib/roman";
import { PageProgress } from "@/components/progress/PageProgress";
import { SetProgress } from "@/components/progress/SetProgress";
import { PageSymbols } from "@/components/PageSymbols";
import { SymbolPopups } from "@/components/SymbolPopups";
import { symbolHref, symbolsOnPage } from "@/lib/symbols";
import { pageTerms, panelTerms } from "@/lib/glossary";
import { TermPanel } from "@/components/terms/TermPanel";
import { PageTerms } from "@/components/PageTerms";
import { SITE_URL } from "@/lib/site-url";

type Params = { course: string; slug: string };

export const dynamicParams = false;

/** University lessons only; High School lessons are served by app/highschool/[course]/[slug] with this same page. */
export function generateStaticParams(): Params[] {
  return getSite()
    .pages.filter((p) => !isHighSchool(p))
    .map((p) => ({ course: p.courseSlug, slug: p.slug }));
}

function find(params: Params) {
  const site = getSite();
  const page = site.pageBySlug.get(params.slug);
  if (!page || page.courseSlug !== params.course) return null;
  return { site, page, course: courseOf(site, page) };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const found = find(await params);
  if (!found) return {};
  const title = `${found.page.title} (${found.course.id})`;
  return {
    title,
    description: found.page.summary,
    ...shareMetadata(title, found.page.summary, "article"),
  };
}

export default async function TopicPage({ params }: { params: Promise<Params> }) {
  const found = find(await params);
  if (!found) notFound();
  const { site, page, course } = found;

  const fullPath = readingPath(site, page.slug);
  const directDependents = (site.dependents.get(page.slug) ?? []).map((s) => site.pageBySlug.get(s)!);
  const cosmology = course.role === "cosmology" ? [] : cosmologyDestinations(site, page);
  const practice = practiceFor(site, page);
  const ordered = orderedPages(site);
  const idx = ordered.findIndex((p) => p.slug === page.slug);
  const prev = ordered[idx - 1];
  const next = ordered[idx + 1];
  // "Report a mistake": a GitHub issue with the page named. Only page details go in the link, never anything about the reader.
  const reportUrl =
    "https://github.com/stefan123-physics/open-cosmology/issues/new?" +
    new URLSearchParams({
      title: `Mistake: ${page.title} (${course.id})`,
      body: `Page: ${SITE_URL}${page.href}
Source: ${page.source.title}

What is wrong (and, if you know, what it should be):
`,
    }).toString();

  /** "8.286 · Lecture 3": where a linked page sits in the programme. */
  const where = (p: { course: string; lecture: number }) =>
    `${p.course} · ${site.courseById.get(p.course)?.unit ?? "Lecture"} ${p.lecture}`;

  // Written prerequisites link to their page; a planned one (named in a lesson list, not written yet: possible while
  // two people write different blocks, docs/TWO-PC-WORKFLOW.md) links to its row on the block page, marked "coming".
  const prerequisites = page.prerequisites.flatMap((s) => {
    const p = site.pageBySlug.get(s);
    if (p) return [{ slug: p.slug, href: p.href, title: p.title, sub: where(p) }];
    const pl = site.planned.get(s);
    if (!pl) return [];
    const label = pl.course.kind === "highschool" ? `${pl.course.block}.${pl.entry.lecture}` : `${pl.entry.lecture}`;
    return [{ slug: s, href: `${pl.course.href}#sec-${String(pl.entry.lecture).replace(".", "-")}`, title: pl.entry.title, sub: `${pl.course.ocwNumber} · ${pl.course.unit} ${label} · coming, not written yet` }];
  });

  const quiz = page.quiz.map((q) => ({
    question: renderInlineTex(q.question),
    choices: q.choices.map(renderInlineTex),
    answer: q.answer,
    explanation: q.explanation ? renderInlineTex(q.explanation) : undefined,
  }));
  const cards = pageCards(page);

  const content = await renderPage(page);
  const headings = extractHeadings(page.body);
  const symbols = symbolsOnPage(page, (id) => symbolHref(id, page.yearNumber));
  // Glossary words with a meaning here (docs/GLOSSARY-PLAN.md): marked in the prose by lib/rehype-terms.ts.
  const terms = pageTerms(site, page);

  return (
    <div className="topic-layout">
      <aside className="topic-sidebar">
        <CourseNav site={site} course={course} current={page.slug} />
      </aside>

      <article className="topic" data-read-root data-path={page.href} data-next-href={next?.href}>
        <nav className="breadcrumbs" aria-label="Breadcrumb" data-noread>
          <Link href="/courses">Programme</Link> › <Link href={yearHref(course.year)}>{yearName(course.year)}</Link> › <Link href={course.href}>{course.ocwNumber} {course.title}</Link> ›{" "}
          <span>
            {course.unit} {course.kind === "highschool" ? `${course.block}.${page.lecture}` : page.lecture}
          </span>
        </nav>

        <header className="topic-header">
          <h1>{page.title}</h1>
          {page.summary && <p className="topic-summary">{page.summary}</p>}
          <div className="topic-source" data-noread>
            <LinkBar
              href={page.source.url}
              external
              kicker={
                course.kind === "highschool"
                  ? `Main source of lesson ${course.block}.${page.lecture}`
                  : course.kind === "textbook"
                    ? `Follows ${course.title}, ${course.unit.toLowerCase()} ${page.lecture}`
                    : `Follows MIT ${course.ocwNumber} ${course.unit.toLowerCase()} ${page.lecture}`
              }
              title={page.source.title}
              sub={
                course.kind === "highschool"
                  ? "Every source is listed at the end of the page"
                  : course.kind === "textbook"
                    ? `Open textbook by ${course.instructors.join(", ")} (${course.publisher}, ${course.term}), free to read`
                    : "On MIT OpenCourseWare: the lecture and its readings"
              }
            />
            {page.status === "draft" && (
              <span className="badge" title="Not yet confirmed by the review against its source">
                Draft · awaiting review
              </span>
            )}
          </div>
          <div className="lesson-tools">
            <ReadPageControls />
            <FocusToggle />
          </div>
          {page.kind === "problems" ? (
            <SetProgress slug={page.slug} href={page.href} title={page.title} />
          ) : (
            <PageProgress slug={page.slug} href={page.href} title={page.title} />
          )}
        </header>

        {prerequisites.length > 0 && (
          <section className="prereqs" aria-labelledby="prereq-title" data-noread>
            <h2 id="prereq-title">You need this first</h2>
            <LinkBars>
              {prerequisites.map((p) => (
                <li key={p.slug}>
                  <LinkBar href={p.href} title={p.title} sub={p.sub} />
                </li>
              ))}
            </LinkBars>
            {fullPath.length > prerequisites.length && (
              <details>
                <summary>Full reading path ({fullPath.length} pages)</summary>
                <ol>
                  {fullPath.map((p) => (
                    <li key={p.slug}>
                      <Link href={p.href}>{p.title}</Link> <span className="muted">({p.course})</span>
                    </li>
                  ))}
                </ol>
              </details>
            )}
          </section>
        )}

        <OnThisPage headings={headings} variant="inline" />

        <div className="prose" id="article-body">
          {content}
        </div>

        <PageSymbols symbols={symbols} />
        <PageTerms terms={terms} />
        <SymbolPopups symbols={symbols} />
        {terms.length > 0 && <TermPanel terms={panelTerms(terms)} />}

        {(directDependents.length > 0 || cosmology.length > 0) && (
          <section className="leads-to" aria-labelledby="leads-title" data-noread>
            <h2 id="leads-title">Where this leads</h2>
            {cosmology.length > 0 && (
              <>
                <h3>In cosmology</h3>
                {(() => {
                  // Foundation pages can feed dozens of cosmology pages: show the first few, the rest on request.
                  const SHOWN = 5;
                  const bar = (l: (typeof cosmology)[number], i: number) =>
                    l.kind === "page" ? (
                      <li key={i}>
                        <LinkBar href={l.page.href} title={l.page.title} sub={l.why ?? where(l.page)} />
                      </li>
                    ) : (
                      <li key={i}>
                        <LinkBar
                          href={l.course.href}
                          title={`${l.course.id} ${l.course.unit} ${l.entry.lecture}: ${l.entry.title}`}
                          sub={l.why ? `Page planned · ${l.why}` : "Page planned: goes to the course overview"}
                        />
                      </li>
                    );
                  return (
                    <>
                      <LinkBars>{cosmology.slice(0, SHOWN).map(bar)}</LinkBars>
                      {cosmology.length > SHOWN && (
                        <details className="more-bars">
                          <summary>{cosmology.length - SHOWN} more cosmology pages that build on this</summary>
                          <LinkBars>{cosmology.slice(SHOWN).map((l, i) => bar(l, i + SHOWN))}</LinkBars>
                        </details>
                      )}
                    </>
                  );
                })()}
              </>
            )}
            {directDependents.length > 0 && (
              <>
                <h3>Pages that build on this</h3>
                <LinkBars>
                  {directDependents.map((p) => (
                    <li key={p.slug}>
                      <LinkBar href={p.href} title={p.title} sub={where(p)} />
                    </li>
                  ))}
                </LinkBars>
              </>
            )}
          </section>
        )}

        {practice.length > 0 && (
          <section className="practice" aria-labelledby="practice-title" data-noread>
            <h2 id="practice-title">Practise</h2>
            <LinkBars>
              {practice.map((p) => (
                <li key={p.slug}>
                  <LinkBar href={p.href} title={`Practise: ${setName(p)}`} sub={p.summary} />
                </li>
              ))}
            </LinkBars>
          </section>
        )}

        {quiz.length > 0 && <Quiz questions={quiz} slug={page.slug} />}
        {cards.length > 0 && <Flashcards cards={cards} />}

        <nav className="prev-next" aria-label="Previous and next page" data-noread>
          {prev && <LinkBar href={prev.href} back className="pn-prev" kicker={isLesson(prev) ? "Previous lesson" : "Previous: problem set"} title={prev.title} sub={where(prev)} />}
          {next && <LinkBar href={next.href} className="pn-next" kicker={isLesson(next) ? "Next lesson" : "Next: problem set"} title={next.title} sub={where(next)} />}
        </nav>

        <div className="report-mistake" data-noread>
          <LinkBar
            href={reportUrl}
            external
            title="Report a mistake on this page"
            sub="Opens a new issue on GitHub with this page already named (needs a GitHub account; issues are public)"
          />
        </div>

        <Credit page={page} course={course} />
      </article>

      <aside className="topic-toc">
        <OnThisPage headings={headings} variant="aside" />
      </aside>
    </div>
  );
}
