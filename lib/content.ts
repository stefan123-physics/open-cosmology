import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { CourseMeta, PageFrontmatter, YearMeta, type SyllabusEntry } from "./schema";

/**
 * Reads /content and builds the whole site model: years → courses → pages,
 * plus the prerequisite graph. Nothing about individual pages is hard-coded:
 * adding an .mdx file adds a route, a sidebar entry, course-index entry and graph edges.
 */

export const CONTENT_DIR = path.join(process.cwd(), "content");

export type Page = PageFrontmatter & {
  /** MDX body without frontmatter */
  body: string;
  /** Path relative to the repo root */
  file: string;
  yearNumber: number;
  courseSlug: string;
  href: string;
};

export type Course = CourseMeta & {
  year: number;
  href: string;
  pages: Page[];
};

export type Year = YearMeta & { courses: Course[] };

export type Site = {
  years: Year[];
  courses: Course[];
  pages: Page[];
  pageBySlug: Map<string, Page>;
  courseById: Map<string, Course>;
  courseBySlug: Map<string, Course>;
  /** slug → slugs of pages that list it as a prerequisite */
  dependents: Map<string, string[]>;
  problems: Problem[];
};

export type Problem = { level: "error" | "warning"; file: string; message: string };

/** The High School (content/year-0, docs/HIGHSCHOOL-PLAN.md) is year 0: the course before Year I, under /highschool. */
export const HIGHSCHOOL_YEAR = 0;
export const HIGHSCHOOL_PATH = "/highschool";
const coursesRoot = (year: number) => (year === HIGHSCHOOL_YEAR ? HIGHSCHOOL_PATH : "/courses");
export const pageHref = (courseSlug: string, slug: string, year = 1) => `${coursesRoot(year)}/${courseSlug}/${slug}`;
export const courseHref = (courseSlug: string, year = 1) => `${coursesRoot(year)}/${courseSlug}`;
/** Where a year's overview is: the High School has its own page, the university years are sections of /courses. */
export const yearHref = (year: number) => (year === HIGHSCHOOL_YEAR ? HIGHSCHOOL_PATH : `/courses#year-${year}`);
export const isHighSchool = (c: { year: number } | { yearNumber: number }) =>
  ("year" in c ? c.year : c.yearNumber) === HIGHSCHOOL_YEAR;

function readJson(file: string): unknown {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function rel(file: string) {
  return path.relative(process.cwd(), file);
}

function formatZod(err: { issues: { path: PropertyKey[]; message: string }[] }) {
  return err.issues.map((i) => `${i.path.map(String).join(".") || "(root)"}: ${i.message}`).join("; ");
}

export function loadSite(contentDir = CONTENT_DIR): Site {
  const problems: Problem[] = [];
  const years: Year[] = [];
  const courses: Course[] = [];
  const pages: Page[] = [];

  const yearDirs = fs
    .readdirSync(/*turbopackIgnore: true*/ contentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => path.join(/*turbopackIgnore: true*/ contentDir, d.name));

  for (const yearDir of yearDirs) {
    const yearFile = path.join(/*turbopackIgnore: true*/ yearDir, "_year.json");
    if (!fs.existsSync(yearFile)) {
      problems.push({ level: "error", file: rel(yearDir), message: "missing _year.json" });
      continue;
    }
    const yearParsed = YearMeta.safeParse(readJson(yearFile));
    if (!yearParsed.success) {
      problems.push({ level: "error", file: rel(yearFile), message: formatZod(yearParsed.error) });
      continue;
    }
    const year: Year = { ...yearParsed.data, courses: [] };

    const courseDirs = fs
      .readdirSync(yearDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => path.join(/*turbopackIgnore: true*/ yearDir, d.name));

    for (const courseDir of courseDirs) {
      const courseFile = path.join(/*turbopackIgnore: true*/ courseDir, "_course.json");
      if (!fs.existsSync(courseFile)) {
        problems.push({ level: "error", file: rel(courseDir), message: "missing _course.json" });
        continue;
      }
      const courseParsed = CourseMeta.safeParse(readJson(courseFile));
      if (!courseParsed.success) {
        problems.push({ level: "error", file: rel(courseFile), message: formatZod(courseParsed.error) });
        continue;
      }
      const course: Course = {
        ...courseParsed.data,
        year: year.number,
        href: courseHref(courseParsed.data.slug, year.number),
        pages: [],
      };

      const mdxFiles = fs
        .readdirSync(courseDir)
        .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
        .map((f) => path.join(/*turbopackIgnore: true*/ courseDir, f));

      for (const file of mdxFiles) {
        const raw = fs.readFileSync(file, "utf8");
        const { data, content } = matter(raw);
        const fm = PageFrontmatter.safeParse(data);
        if (!fm.success) {
          problems.push({ level: "error", file: rel(file), message: formatZod(fm.error) });
          continue;
        }
        if (fm.data.course !== course.id) {
          problems.push({
            level: "error",
            file: rel(file),
            message: `frontmatter course "${fm.data.course}" does not match folder course "${course.id}"`,
          });
        }
        const expectedName = `${fm.data.slug}.mdx`;
        if (path.basename(file) !== expectedName) {
          problems.push({
            level: "warning",
            file: rel(file),
            message: `file name should match slug (${expectedName})`,
          });
        }
        const page: Page = {
          ...fm.data,
          body: content,
          file: rel(file),
          yearNumber: year.number,
          courseSlug: course.slug,
          href: pageHref(course.slug, fm.data.slug, year.number),
        };
        course.pages.push(page);
        pages.push(page);
      }
      course.pages.sort((a, b) => a.lecture - b.lecture || a.order - b.order || a.title.localeCompare(b.title));
      year.courses.push(course);
      courses.push(course);
    }
    year.courses.sort((a, b) => a.order - b.order);
    years.push(year);
  }
  years.sort((a, b) => a.number - b.number);
  courses.sort((a, b) => a.year - b.year || a.order - b.order);

  // Indexes
  const pageBySlug = new Map<string, Page>();
  for (const p of pages) {
    if (pageBySlug.has(p.slug)) {
      problems.push({
        level: "error",
        file: p.file,
        message: `duplicate slug "${p.slug}" (also in ${pageBySlug.get(p.slug)!.file})`,
      });
    } else pageBySlug.set(p.slug, p);
  }
  const courseById = new Map(courses.map((c) => [c.id, c]));
  const courseBySlug = new Map(courses.map((c) => [c.slug, c]));

  // Prerequisite graph
  const dependents = new Map<string, string[]>();
  for (const p of pages) {
    for (const pre of p.prerequisites) {
      if (!pageBySlug.has(pre)) {
        problems.push({ level: "error", file: p.file, message: `unknown prerequisite "${pre}"` });
        continue;
      }
      if (pre === p.slug) {
        problems.push({ level: "error", file: p.file, message: "page lists itself as a prerequisite" });
        continue;
      }
      dependents.set(pre, [...(dependents.get(pre) ?? []), p.slug]);
    }
    for (const l of p.leadsTo) {
      const c = courseById.get(l.course);
      if (!c) problems.push({ level: "error", file: p.file, message: `leadsTo: unknown course "${l.course}"` });
      else if (!c.syllabus.some((s) => s.lecture === l.lecture))
        problems.push({
          level: "error",
          file: p.file,
          message: `leadsTo: course ${l.course} has no lecture ${l.lecture} in its syllabus`,
        });
    }
  }
  for (const c of courses)
    for (const s of c.syllabus)
      for (const slug of s.coveredBy)
        if (!pageBySlug.has(slug))
          problems.push({ level: "error", file: `content/${c.slug}/_course.json`, message: `syllabus ${s.lecture}: coveredBy "${slug}" is not a page` });
  for (const c of courses)
    c.chapters.forEach((ch, i) => {
      const file = `content/${c.slug}/_course.json`;
      if (!c.syllabus.some((s) => s.lecture === ch.from))
        problems.push({ level: "error", file, message: `chapter "${ch.title}": from ${ch.from} is not a syllabus entry` });
      if (i > 0 && ch.from <= c.chapters[i - 1].from)
        problems.push({ level: "error", file, message: `chapter "${ch.title}": chapters must be in syllabus order` });
    });
  for (const cycle of findCycles(pages)) {
    problems.push({ level: "error", file: pageBySlug.get(cycle[0])!.file, message: `prerequisite cycle: ${cycle.join(" → ")}` });
  }

  return { years, courses, pages, pageBySlug, courseById, courseBySlug, dependents, problems };
}

function findCycles(pages: Page[]): string[][] {
  const graph = new Map(pages.map((p) => [p.slug, p.prerequisites]));
  const state = new Map<string, 0 | 1 | 2>();
  const cycles: string[][] = [];
  const stack: string[] = [];
  const visit = (s: string) => {
    state.set(s, 1);
    stack.push(s);
    for (const n of graph.get(s) ?? []) {
      if (!graph.has(n)) continue;
      if (state.get(n) === 1) cycles.push([...stack.slice(stack.indexOf(n)), n]);
      else if (!state.get(n)) visit(n);
    }
    stack.pop();
    state.set(s, 2);
  };
  for (const s of graph.keys()) if (!state.get(s)) visit(s);
  return cycles;
}

let cached: Site | null = null;

/** Site model for the app. Throws on content errors so a broken page never ships. */
export function getSite(): Site {
  if (cached && process.env.NODE_ENV === "production") return cached;
  const site = loadSite();
  const errors = site.problems.filter((p) => p.level === "error");
  if (errors.length) {
    throw new Error(
      "Content errors:\n" + errors.map((e) => `  ${e.file}: ${e.message}`).join("\n") + "\nRun `npm run content:check`."
    );
  }
  cached = site;
  return site;
}

// ---------- Graph helpers used by the page template ----------

/** All transitive dependents of a page. */
export function transitiveDependents(site: Site, slug: string): Page[] {
  const seen = new Set<string>();
  const queue = [...(site.dependents.get(slug) ?? [])];
  while (queue.length) {
    const s = queue.shift()!;
    if (seen.has(s)) continue;
    seen.add(s);
    queue.push(...(site.dependents.get(s) ?? []));
  }
  return [...seen].map((s) => site.pageBySlug.get(s)!).sort(comparePages(site));
}

/** All transitive prerequisites of a page, in a valid reading order. */
export function readingPath(site: Site, slug: string): Page[] {
  const out: Page[] = [];
  const seen = new Set<string>();
  const visit = (s: string) => {
    if (seen.has(s)) return;
    seen.add(s);
    const p = site.pageBySlug.get(s);
    if (!p) return;
    for (const pre of p.prerequisites) visit(pre);
    out.push(p);
  };
  visit(slug);
  return out.filter((p) => p.slug !== slug);
}

export function comparePages(site: Site) {
  return (a: Page, b: Page) => {
    const ca = site.courseById.get(a.course)!;
    const cb = site.courseById.get(b.course)!;
    return a.yearNumber - b.yearNumber || ca.order - cb.order || a.lecture - b.lecture || a.order - b.order;
  };
}

/** Linear order of the whole learning path (used for prev/next). */
export function orderedPages(site: Site): Page[] {
  return [...site.pages].sort(comparePages(site));
}

export type ForwardLink =
  | { kind: "page"; page: Page; course: Course; why?: string }
  | { kind: "planned"; course: Course; entry: SyllabusEntry; why?: string };

/**
 * Where a page leads in cosmology: cosmology pages that (transitively) depend on it,
 * plus explicit `leadsTo` lectures (shown as "planned" until a page exists).
 */
export function cosmologyDestinations(site: Site, page: Page): ForwardLink[] {
  const out: ForwardLink[] = [];
  const seen = new Set<string>();
  for (const d of transitiveDependents(site, page.slug)) {
    const c = site.courseById.get(d.course)!;
    if (c.role === "cosmology" && !seen.has(d.slug)) {
      seen.add(d.slug);
      out.push({ kind: "page", page: d, course: c });
    }
  }
  for (const l of page.leadsTo) {
    const c = site.courseById.get(l.course);
    if (!c) continue;
    const written = c.pages.filter((p) => p.lecture === l.lecture && p.slug !== page.slug);
    if (written.length) {
      for (const w of written)
        if (!seen.has(w.slug)) {
          seen.add(w.slug);
          out.push({ kind: "page", page: w, course: c, why: l.why });
        }
    } else {
      const entry = c.syllabus.find((s) => s.lecture === l.lecture)!;
      out.push({ kind: "planned", course: c, entry, why: l.why });
    }
  }
  return out;
}

/** Lessons are counted and listed apart from problem sets and exams (docs/PROBLEM-SETS-DESIGN.md §2, §7). */
export const isLesson = (p: Pick<Page, "kind">) => p.kind === "lesson";
export const isProblemSet = (p: Pick<Page, "kind">) => p.kind === "problems";
/** "Problem Set 1": the short name of a set in links and lists. */
export const setName = (p: Pick<Page, "kind" | "set" | "title">) => (p.kind === "problems" && p.set !== undefined ? `Problem Set ${p.set}` : p.title);

/** The problem sets that practise a lesson: sets of its course whose `covers` lists the lesson's lecture. */
export function practiceFor(site: Site, page: Page): Page[] {
  if (!isLesson(page)) return [];
  const course = site.courseById.get(page.course);
  return (course?.pages ?? []).filter((p) => isProblemSet(p) && p.covers.includes(page.lecture)).sort((a, b) => (a.set ?? 0) - (b.set ?? 0));
}

export function courseOf(site: Site, page: Page): Course {
  return site.courseById.get(page.course)!;
}
