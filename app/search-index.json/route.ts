import { getSite } from "@/lib/content";
import { type SearchDoc } from "@/lib/search";
import { glossary } from "@/lib/symbols";
import { glossaryHref, KIND_LABEL, loadGlossary } from "@/lib/glossary";

// Built once at build time and served as a static file.
export const dynamic = "force-static";

export function GET() {
  const site = getSite();
  const docs: SearchDoc[] = [
    ...site.pages.map((p) => {
      const course = site.courseById.get(p.course)!;
      return {
        kind: "page" as const,
        title: p.title,
        href: p.href,
        meta:
          course.kind === "highschool"
            ? `High School · ${course.ocwNumber} ${course.title} · ${course.unit} ${course.block}.${p.lecture}`
            : `${course.ocwNumber} ${course.title} · ${course.unit} ${p.lecture}`,
        summary: p.summary ?? "",
        // The lesson text is searched by the full-text index (public/pagefind, scripts/build-search.mts).
        headings: [],
        body: "",
        role: course.role,
      };
    }),
    ...site.courses.map((c) => ({
      kind: "course" as const,
      title: c.kind === "highschool" ? `${c.ocwNumber}: ${c.title}` : `${c.ocwNumber} ${c.title}`,
      href: c.href,
      meta: c.kind === "highschool" ? "High School · before Year I" : `Year ${c.year} · ${c.term} · ${c.instructors.join(", ")}`,
      summary: c.description,
      headings: [],
      body: [c.description, c.cosmologyNeeds ?? "", ...c.syllabus.map((s) => s.title), ...c.themes.map((t) => `${t.title}. ${t.blurb}`)].join(" "),
      role: c.role,
    })),
    {
      kind: "page" as const,
      title: "High School Physics",
      href: "/highschool",
      meta: "Before Year I: nine blocks for beginners",
      summary: "Pre-university physics and maths, from a maths toolkit to the Big Bang, the CMB and dark matter.",
      headings: [],
      body: "high school beginner pre-university VWO blocks",
      role: "highschool",
    },
    {
      kind: "page" as const,
      title: "Symbols and notation",
      href: "/symbols",
      meta: "Glossary of every symbol used in the lessons",
      summary: "What each mathematical symbol means, how to say it, and where it is used.",
      headings: [],
      body: glossary(site)
        .map((s) => `${s.name} ${s.glyphs.join(" ")} ${s.spoken}. ${s.meanings.map((m) => m.text).join(" ")}`)
        .join(" "),
      role: "foundation",
    },
    {
      kind: "page" as const,
      title: "Glossary",
      href: "/glossary",
      meta: "Difficult words explained in plain English",
      summary: "Physics and maths terms, academic English and abbreviations: what each word means in each course.",
      headings: [],
      body: "glossary words definitions dictionary meaning my words saved",
      role: "foundation",
    },
    // Every glossary word: shown as a "Definition" row above the lesson titles (components/Search.tsx).
    ...loadGlossary().entries.map((e) => {
      const m = e.meanings.find((x) => !x.pages && !x.courses) ?? e.meanings[0];
      return {
        kind: "term" as const,
        title: e.term,
        href: glossaryHref(e),
        meta: `Definition · ${KIND_LABEL[e.kind]}`,
        summary: m?.short ?? "",
        headings: [],
        body: e.allForms.filter((f) => f !== e.term).join(" · "),
        role: "foundation",
      };
    }),
    {
      kind: "page" as const,
      title: "Review",
      href: "/review",
      meta: "Flashcards due today from every lesson",
      summary: "Spaced-repetition flashcards from all lessons, with export and import of your progress.",
      headings: [],
      body: "flashcards spaced repetition review again hard good easy due export import reset progress",
      role: "foundation",
    },
    {
      kind: "page" as const,
      title: "Accessibility",
      href: "/accessibility",
      meta: "Screen readers, keyboard, read-aloud, focus mode and more",
      summary: "How the site works with screen readers and the keyboard, and the reading options, focus mode and listening tools.",
      headings: [],
      body: "accessibility screen reader keyboard shortcuts focus mode read aloud listen to graph sound MathML reading options dyslexia font contrast text size",
      role: "foundation",
    },
  ];
  return Response.json(docs);
}
