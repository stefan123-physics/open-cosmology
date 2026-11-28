# Content guide

## One concept per file

`content/<year>/<course>/<slug>.mdx`. The file name must equal the `slug`. Topics get as many pages as they need: several pages can share one `lecture` number and are ordered by `order`.

## Frontmatter

| Field | Required | Meaning |
|-------|----------|---------|
| `title` | yes | Page title |
| `slug` | yes | Unique across the whole site, lowercase-with-hyphens |
| `course` | yes | Course id, must match the folder's `_course.json` (`"8.01"`) |
| `lecture` | yes | MIT lecture/lesson number the page follows |
| `order` | yes | Order among pages with the same lecture |
| `summary` | no | One sentence, shown in indexes |
| `prerequisites` | no | List of page slugs (any course) |
| `source.title`, `source.url` | yes | The MIT OCW lecture page this is rewritten from |
| `source.readings` | no | MIT course-note chapters etc. (`title`, `url`, `location`); cite as `reading1`, `reading2`, … |
| `license` | no | Defaults to `CC BY-NC-SA 4.0` |
| `phet` | no | PhET sim id (`vector-addition`); used by `<PhET />` without an id. The simulation must have a local copy in `public/phet/` (see `public/phet/manifest.json`) |
| `references` | no | Extra sources keyed by name, cited by `<Formula cite="key">` |
| `courtesy` | no | "Courtesy of …" lines that must be kept |
| `leadsTo` | no | `{ course, lecture, why }` forward links into cosmology lectures |
| `quiz` | no | `{ question, choices, answer (0-based), explanation }`; `$…$` maths allowed |
| `flashcards` | no | `{ front, back }`; derived from the quiz if omitted |
| `status` | no | `draft` (default) or `reviewed` |

## Writing rules

1. **Rewrite, don't copy.** Explain MIT's lecture in your own words, in MIT's order. Worked examples should be original (different numbers or situations).
2. **Every display formula is a `<Formula>` with `cite`.** `cite="mit"` is the page's source; `reading1` the first reading; other keys come from `references`. Add `at="Sec. 4.3, Eq. (4.3.5)"`. `$$…$$` display maths is rejected by `content:check`. Inline `$…$` is fine for symbols.
3. **Skip "All rights reserved" material.** Draw your own diagrams with `<Plot>` or `<VectorDiagram>`. Keep "Courtesy of" credits in `courtesy`.
4. **Never use LibreTexts. OpenStax only with OpenStax's written permission on file, under AGENTS.md "Writing rules" 10**; until then no OpenStax text may be pasted, uploaded or fetched into an AI session, even with model training off. David Tong's notes and the Feynman Lectures may be used to fact-check only — never quoted or paraphrased closely.
5. **Foundation pages stay focused** on what cosmology needs, and end with a `Callout kind="cosmology"` plus `leadsTo` entries.
6. **Early pages** (motion, waves, light, hydrogen) can embed PhET. **Cosmology pages** use generated diagrams and worked examples instead.
7. After writing, run the `mit-lecture-reviewer` agent on the page, resolve its findings, then set `status: reviewed`.

## Problem sets (`kind: problems`)

Design: `docs/PROBLEM-SETS-DESIGN.md`. Example: `content/year-4/8.286/8-286-problem-set-1.mdx`.

Frontmatter: `kind: problems`, `set` (MIT's number), `lecture` (the last lecture the set covers; it decides where the set sits), `order: 90`, `covers` (lecture numbers as used on this site; each lesson of those lectures gets a "Practise" link), `solutions: own` or `mit`, and `source` = MIT's problem set. No `quiz` and no `flashcards`. Slug: `<course>-problem-set-<n>`.

Body: one `## Problem N` section per MIT problem, each holding one exercise:

```mdx
<Exercise id="p2" title="…" points={20} mit="Problem 2">

Statement, in our own words.

<Part label="a" points={5}>

Statement of the part.

<Hint>A nudge.</Hint>
<Hint>The method. Never the result.</Hint>

<Answer id="p2-a" label="$z =$" expr="sqrt((1+b)/(1-b)) - 1" vars={{ b: [0.1, 0.9] }} names={{ b: "\\beta" }}
  mistakes={[{ expr: "b", hint: "That is the low-speed result." }]} />

<Solution>
<Step title="…">…</Step>
</Solution>

</Part>

</Exercise>
```

- `<Exercise>`: `id` (unique on the page), `title`, `points`, `mit` (MIT's own number), `optional` (MIT's extra credit). Points of the parts must add up to the exercise's points.
- `<Answer>`: a number (`value`, `unit`, `tolerance`, `calc` = the id of a calcs entry), a formula (`expr` in plain typing, `vars` = a range for every name, `names` = how each name is shown, `mistakes`), or a choice (`choices`, `answer`). Formulas are compared by value, so every equivalent form is accepted.
- **Second valid readings** (docs/ANSWER-BOX-FIX-PLAN.md Step 4): when the solution itself names a second correct answer (a factor ½ for identical particles, another valid convention the statement allows), add `alsoAccept={[{ value: "1.035", tolerance: "2%", calc: "…", note: "…" }]}` to a number box or `alsoAccept={[{ expr: "…", note: "…" }]}` to a formula box. It counts as correct and shows its note. Each number needs its own calcs entry; a formula reading must differ from the answer and from every listed mistake (`content:check`). Not for a reading the statement rules out.
- **Scaled units** (owner decision 2026-11-28): a number box that asks for its value "in units of 10⁻¹¹", "in millions" or as a percentage gets `scale="1e-11"`, `scale="1e6"` or `scale="0.01"`. It then accepts both the factor (5.54) and the full number (5.54e-11), each with the box's tolerance, and shows a note on the full number. `content:check` warns about a box whose label or unit asks for a scaled unit without `scale`.
- **Listed mistakes on number boxes** (owner decision 2026-11-28): `mistakes={[{ value: "0.686", tolerance: "2%", calc: "…", hint: "…" }]}`, as formula boxes have. Each wrong value needs its own calcs entry and a hint that is true of it, and its interval must not overlap the answer's or an `alsoAccept` value's (`content:check`).
- **Number-box tolerances** (owner decision 2026-11-28, agreed with Account B; every number box states its `tolerance`, and `content:check` warns about one that does not):

  | Kind of answer | Tolerance |
  |---|---|
  | Computed result (the usual case) | **2%**: always accepts a correct answer to 3 significant figures, also with rounded intermediate steps |
  | Computed result with a listed mistake or an obvious slip within 2% | tighter (1% or less), and the box asks for 4 significant figures |
  | Read off a graph, an estimate, or "about" in the question | 5–10% |
  | Counts and whole numbers | exact, an absolute 0.4: never the neighbouring number |
  | Answer 0 | an absolute width, stated in the box, that rejects the obvious slips |
  | Logarithms, exponents, orders of magnitude | an absolute width (for example ±0.05 in log₁₀) |

  On every set, "How to answer" says: give 3 significant figures and keep 4 in intermediate steps; an answer with only 2 significant figures may or may not be accepted. No listed mistake and no obvious slip (a sign, ×2, ×10, ×½, ×π) may fall inside the accepted interval. A box that asks for the factor in front of a power of ten says so in its label, with an example ("type 5.0, not 5.0e-11"); a reader who types the full number gets the power-of-ten message.
- A part with no `<Answer>` ("show that …") is self-marked by the reader after opening the solution.
- Every exercise needs a `<Solution>` (in each part, or one for the whole exercise): the idea first, then `<Step>`s with cited `<Formula>`s, then a check (units, a limit, a number). Formulas of our own solution are cited `cite="mit" at="Problem 2(a) (our own solution)"`.
- Calcs: every answer has an entry with `answer: <id>`. For a formula answer it is an `identity` against an independent route (a limit, a special case, a numerical integration).
- Writing: MIT's situation and order of parts, our own wording, our own numbers where MIT's are not essential; no course administration.
- Review: the reviewer solves the set blind first (see the reviewer agent file). The page stays `draft` until then.

## Course metadata (`_course.json`)

`id`, `slug`, `ocwNumber`, `title`, `term`, `instructors`, `url`, `order` (within the year), `role` (`foundation` or `cosmology`), `unit` ("Lecture", "Lesson", "Session"), `description`, `cosmologyNeeds`, `syllabus` (MIT's ordered lecture list; an entry may have `coveredBy: [slugs]` when another course already covers it), `kind` (`mit`, the default, or `textbook` with `publisher`, `licenseUrl` and `attribution`), `themes` (cosmology courses: groups of lectures shown on the homepage, and as jump-link cards on the course page), `chapters` (optional: `[{label, title, from}]`, consecutive groups of the syllabus — a book's chapters, MIT's weeks or calendar units, or for a course with no grouping of its own, its themes labelled "Topic N"; the course page groups its sections by them, with a sticky chapter navigation), `notes`.

## Punctuation

No em dashes (—) in site text (owner decision 2026-11-15), so sentences run on naturally:

- an aside: commas (`the scale factor, how much space has stretched, grows`), or brackets if the aside has its own commas;
- an explanation or a title: a colon (`Contact forces: the normal force and friction`). A frontmatter value with ": " must be quoted;
- a new thought: a full stop.

`npm run content:check` warns about any — left in a page. Ranges keep the en dash (–), as in 10–30%.
