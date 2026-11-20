/**
 * Scaffold a new content page:
 *   npm run new:page -- 8.01 2 "Free fall"
 * Creates content/<year>/<course>/<slug>.mdx with complete frontmatter.
 */
import fs from "node:fs";
import path from "node:path";
import { CONTENT_DIR, loadSite } from "../lib/content";

const [courseId, lectureArg, ...titleParts] = process.argv.slice(2);
const title = titleParts.join(" ");
if (!courseId || !lectureArg || !title) {
  console.error('Usage: npm run new:page -- <course id> <lecture number> "<title>"');
  process.exit(1);
}
const site = loadSite();
const course = site.courseById.get(courseId);
if (!course) {
  console.error(`Unknown course ${courseId}. Known: ${site.courses.map((c) => c.id).join(", ")}`);
  process.exit(1);
}
const lecture = Number(lectureArg);
const entry = course.syllabus.find((s) => s.lecture === lecture);
const highschool = course.kind === "highschool";
if (highschool && !entry?.slug) {
  console.error(`${courseId} has no lesson ${lecture} with a slug in its lesson list (_course.json)`);
  process.exit(1);
}
// High School lessons take the slug fixed in the block's lesson list (docs/HIGHSCHOOL-PLAN.md §4).
const slug = highschool ? entry!.slug! : title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
if (site.pageBySlug.has(slug)) {
  console.error(`Slug "${slug}" already exists`);
  process.exit(1);
}
const order = Math.max(0, ...course.pages.filter((p) => p.lecture === lecture).map((p) => p.order)) + 1;
const lastLesson = Math.max(...course.syllabus.map((s) => s.lecture));
// High School: the main source is one of docs/HIGHSCHOOL-PLAN.md §2.0 (Siyavula, MIT, OpenLearn, NASA, ESO …); never OpenStax.
const sourceLines = highschool
  ? `source:
  title: "" # main source, from docs/HIGHSCHOOL-PLAN.md §2.0, e.g. "Siyavula, Everything Science Grade 10, Chapter 21: Motion in one dimension"
  url: https://www.siyavula.com/read/za/physical-sciences/grade-10 # replace with the exact page
  readings: []`
  : `source:
  title: ${JSON.stringify(`MIT ${course.ocwNumber} ${course.unit} ${lecture}${entry ? `: ${entry.title}` : ""}`)}
  url: ${entry?.url ?? course.url}
  readings: []`;
const dir = fs
  .readdirSync(CONTENT_DIR)
  .map((y) => path.join(CONTENT_DIR, y, courseId))
  .find((d) => fs.existsSync(d))!;
const file = path.join(dir, `${slug}.mdx`);
fs.writeFileSync(
  file,
  `---
title: ${JSON.stringify(title)}
slug: ${slug}
course: "${courseId}"
lecture: ${lecture}
order: ${order}
summary: ""
prerequisites: []
${sourceLines}
license: CC BY-NC-SA 4.0
references: {}
leadsTo: []${highschool ? `\ntowards: ${lecture === lastLesson}` : ""}
quiz:
  - question: ""
    choices: ["", ""]
    answer: 0
    explanation: ""
status: draft
---

Write the explanation here. Display equations use

<Formula label="Name" tex="E = mc^2" cite="mit" at="Sec. X, Eq. (Y)" />
`
);
console.log(`Created ${path.relative(process.cwd(), file)}`);
