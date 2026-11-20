import { z } from "zod";

/**
 * Content schema. Every page in /content/<year>/<course>/<topic>.mdx is validated
 * against PageFrontmatter; every course folder holds a _course.json validated against
 * CourseMeta; every year folder holds a _year.json validated against YearMeta.
 */

const slug = z
  .string()
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "slugs are lowercase words separated by hyphens");

export const Reference = z.object({
  title: z.string(),
  url: z.string().url().optional(),
  /** e.g. "Section 4.3.3, Eq. (4.3.5)" */
  location: z.string().optional(),
});
export type Reference = z.infer<typeof Reference>;

export const QuizQuestion = z.object({
  question: z.string(),
  choices: z.array(z.string()).min(2),
  /** zero-based index into choices */
  answer: z.number().int().min(0),
  explanation: z.string().optional(),
});
export type QuizQuestion = z.infer<typeof QuizQuestion>;

export const Flashcard = z.object({ front: z.string(), back: z.string() });
export type Flashcard = z.infer<typeof Flashcard>;

/** Points at a lecture in some course's syllabus, e.g. { course: "8.286", lecture: 4 }. */
export const LectureRef = z.object({
  course: z.string(),
  lecture: z.number(),
  why: z.string().optional(),
});
export type LectureRef = z.infer<typeof LectureRef>;

export const PageFrontmatter = z.object({
  title: z.string(),
  slug,
  /** Course id, must match the folder's _course.json id, e.g. "8.01" */
  course: z.string(),
  /** MIT lecture / lesson number this page follows (for a textbook: the section, e.g. 2.2) */
  lecture: z.number(),
  /** Order within the course (pages are sorted by lecture, then order) */
  order: z.number(),
  summary: z.string().optional(),
  /** Slugs of pages a reader should know first (any course) */
  prerequisites: z.array(slug).default([]),
  /** The source this page is rewritten from (the MIT lecture, or the textbook section) */
  source: z.object({
    title: z.string(),
    url: z.string().url(),
    /** Extra MIT resources used, e.g. course-note chapters */
    readings: z.array(Reference).default([]),
  }),
  license: z.string().default("CC BY-NC-SA 4.0"),
  /** Optional PhET simulation id, e.g. "vector-addition" */
  phet: z.string().regex(/^[a-z0-9-]+$/).optional(),
  /** Extra references, cited from <Formula cite="key" />. The key "mit" always means `source`. */
  references: z.record(z.string(), Reference).default({}),
  /** "Courtesy of …" credits that must be kept with reused material */
  courtesy: z.array(z.string()).default([]),
  /** Forward links to lectures (possibly not yet written) that use this page */
  leadsTo: z.array(LectureRef).default([]),
  quiz: z.array(QuizQuestion).default([]),
  /** If omitted, flashcards are derived from the quiz */
  flashcards: z.array(Flashcard).optional(),
  status: z.enum(["draft", "reviewed"]).default("draft"),
  /** High School: true only for a block's last lesson, "Towards the universe" */
  towards: z.boolean().default(false),
  /** What the page is (docs/PROBLEM-SETS-DESIGN.md §2). Lessons need none of the fields below. */
  kind: z.enum(["lesson", "problems", "exam"]).default("lesson"),
  /** problems / exam: MIT's number (Problem Set 1, Quiz 2). `lecture` is then the last lecture the set covers. */
  set: z.number().int().positive().optional(),
  /** problems / exam: the lectures the set practises */
  covers: z.array(z.number()).default([]),
  /** problems / exam: "own" = solutions written here, "mit" = rewritten from MIT's published solutions */
  solutions: z.enum(["own", "mit"]).optional(),
});
export type PageFrontmatter = z.infer<typeof PageFrontmatter>;

export const SyllabusEntry = z.object({
  lecture: z.number(),
  /** Display label when the number alone is misleading, e.g. "Lecture 24b" (stored as 24.5) */
  label: z.string().optional(),
  title: z.string(),
  url: z.string().url().optional(),
  /** Pages elsewhere on the site that already cover this part (shown instead of "not written yet"), so a source
   *  that repeats another course's material is complete without duplicate pages. */
  coveredBy: z.array(slug).default([]),
  /** High School: the slug the lesson for this entry must have (docs/HIGHSCHOOL-PLAN.md §4) */
  slug: slug.optional(),
});
export type SyllabusEntry = z.infer<typeof SyllabusEntry>;

/** A group of consecutive syllabus entries: a book chapter, an MIT week or unit. It runs from `from` up to the next
 *  chapter's `from`. Titles come from the source (the book's contents, MIT's weeks or calendar units). Where the
 *  source has no grouping (8.286, 8.902) the course's own themes are used, labelled "Topic N", not "Chapter". */
export const Chapter = z.object({
  /** Short label, e.g. "Chapter 3", "Week 2", "Unit 1" */
  label: z.string(),
  title: z.string(),
  /** The first syllabus lecture/section number in this chapter */
  from: z.number(),
});
export type Chapter = z.infer<typeof Chapter>;

export const Theme = z.object({
  title: z.string(),
  blurb: z.string(),
  /** Lecture numbers in this course that belong to the theme */
  lectures: z.array(z.number()).default([]),
  /** Extra page slugs (e.g. topics MIT covers inside other lectures) */
  pages: z.array(slug).default([]),
});
export type Theme = z.infer<typeof Theme>;

export const CourseMeta = z.object({
  /** Short id used in frontmatter, e.g. "8.01" */
  id: z.string(),
  /** URL segment, e.g. "8-01" */
  slug,
  /** Number as shown on OCW, e.g. "8.01SC"; for a textbook, a short name such as the author's */
  ocwNumber: z.string(),
  /** "mit" (default): an MIT OpenCourseWare course. "textbook": an openly licensed book (owner decision 2026-11-15,
   *  for dark matter sources MIT does not cover); it needs publisher, licenseUrl and attribution. */
  kind: z.enum(["mit", "textbook", "highschool"]).default("mit"),
  /** High School: the block number, 0–8 ("Block 1", lessons "1.3") */
  block: z.number().int().min(0).optional(),
  /** Textbooks: publisher, e.g. "UCL Press" */
  publisher: z.string().optional(),
  /** Textbooks: the book's own licence page */
  licenseUrl: z.string().url().optional(),
  /** Textbooks: the attribution wording the publisher asks for, printed in every page's credits */
  attribution: z.string().optional(),
  title: z.string(),
  /** MIT courses and textbooks: the term or edition, the instructors or authors, and the course or book page */
  term: z.string().default(""),
  instructors: z.array(z.string()).default([]),
  url: z.string().url().optional(),
  license: z.string().default("CC BY-NC-SA 4.0"),
  order: z.number(),
  role: z.enum(["foundation", "mathematics", "cosmology", "highschool"]),
  /** MIT's level for the course (as listed on OCW); graduate courses get a label on the site */
  level: z.enum(["undergraduate", "graduate"]).default("undergraduate"),
  description: z.string(),
  /** For foundation courses: what cosmology needs from this course */
  cosmologyNeeds: z.string().optional(),
  /** Unit name MIT uses for this course's parts: "Lecture", "Lesson", … */
  unit: z.string().default("Lecture"),
  syllabus: z.array(SyllabusEntry).default([]),
  themes: z.array(Theme).default([]),
  /** Optional grouping of the syllabus, in order; the course page groups its sections by these */
  chapters: z.array(Chapter).default([]),
  /** Anything about the source that is not yet verified */
  notes: z.string().optional(),
}).superRefine((c, ctx) => {
  if (c.kind !== "highschool")
    for (const k of ["term", "url"] as const)
      if (!c[k]) ctx.addIssue({ code: "custom", path: [k], message: `an MIT course or textbook needs ${k}` });
  if (c.kind !== "highschool" && c.instructors.length === 0)
    ctx.addIssue({ code: "custom", path: ["instructors"], message: "an MIT course or textbook needs instructors" });
  if (c.kind === "highschool" && (c.block === undefined || c.role !== "highschool"))
    ctx.addIssue({ code: "custom", path: ["block"], message: 'a High School block needs block and role "highschool"' });
  if (c.kind === "textbook")
    for (const k of ["publisher", "licenseUrl", "attribution"] as const)
      if (!c[k]) ctx.addIssue({ code: "custom", path: [k], message: `a textbook course needs ${k}` });
});
export type CourseMeta = z.infer<typeof CourseMeta>;

export const YearMeta = z.object({
  number: z.number().int(),
  title: z.string(),
  /** Short subtitle for the phone menu; must fit on one line at 360px. */
  short: z.string().max(40).optional(),
  description: z.string(),
});
export type YearMeta = z.infer<typeof YearMeta>;
