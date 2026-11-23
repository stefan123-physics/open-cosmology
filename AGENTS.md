# Guide for AI assistants (Cursor, Claude, etc.)

Read this before changing anything. It explains how Open Cosmology is built and how pages are written, so new work matches what exists.

**"What's left to do?"** When the owner asks this (or anything like it), answer from three places: [OWNER-TODO.md](OWNER-TODO.md) — tasks only the owner can do (device and screen-reader tests, accounts, decisions); [docs/PLAN.md](docs/PLAN.md) — programme status and the order of work; and "Current state and next steps" below. Keep OWNER-TODO.md up to date: add an item whenever something needs the owner (a test on a real device, a decision, an account), and tick or remove it when done.

## What the site is

A free, non-commercial cosmology course rewritten from **MIT OpenCourseWare**. Cosmology (MIT 8.286 *The Early Universe*, Alan Guth, Fall 2013) is the main subject; other courses are foundations that link forward to it. Licence (owner decision 2026-11-15): content **CC BY-NC-SA 4.0**, code **MIT License**; `LICENSE` says which folders are which. No paid features, ever.

Five-year path (folders under `content/`): a four-year bachelor's core (Years 1–4) and a graduate year (Year 5). Owner decision 2026-11-15: 8.902 and 8.962 are **graduate** courses on MIT OCW, so they form Year 5; 8.286 is undergraduate and is Year 4.

| Year | Courses (folder = course id) |
|---|---|
| 1 | `8.01` (8.01SC Fall 2016), `18.01` (Fall 2006, Jerison), `8.02` (8.02T Spring 2005), `18.02` (Fall 2007, Auroux) |
| 2 | `8.03`, `18.03` (Spring 2010, Mattuck & Miller), `8.033`, `18.06` (Spring 2010, Strang), `8.04` |
| 3 | `8.044`, `8.05`, `8.06` |
| 4 | `8.286` (main subject), `8.07` (Fall 2012, Guth), `8.08` (Spring 2005, Wen), `8.09` (Fall 2014, Stewart); owner decision 2026-11-18, see docs/YEAR-IV-PLAN.md |
| 5 (graduate) | `8.902` (Astrophysics II lecture notes: structure formation and dark matter; comes first, builds on 8.286 with Newtonian physics), `Ferreras` (open textbook *Fundamentals of Dark Matter*, UCL Press 2025, CC BY-NC 4.0 — not MIT; see below), `8.962` (General Relativity) — the MIT ones `"level": "graduate"` in `_course.json`, which shows a "Graduate course at MIT" label |

## The High School (year 0, combined 2026-11-20)

Before Year 1 comes the **High School**: a pre-university physics course at about Dutch VWO level for a complete beginner, in nine blocks (`content/year-0/hs-0` … `hs-8`: maths toolkit, motion, forces and gravity, energy and momentum, matter and heat, waves, electricity and magnetism, atoms and radiation, modern physics and cosmology). It was a separate site (`raimonvibe/open-cosmology-highschool`) and was combined into this one on 2026-11-20 (owner decision). Plan and lesson lists: [docs/HIGHSCHOOL-PLAN.md](docs/HIGHSCHOOL-PLAN.md); colours: [docs/HIGHSCHOOL-THEME.md](docs/HIGHSCHOOL-THEME.md).

- **Addresses:** `/highschool` (overview, `app/highschool/page.tsx`), `/highschool/<block>` and `/highschool/<block>/<lesson>`. These routes reuse the course and lesson pages of `app/courses/…`; `lib/content.ts` (`HIGHSCHOOL_YEAR = 0`, `pageHref`, `courseHref`, `yearHref`, `isHighSchool`) builds every address, so never write `/courses/…` or `/highschool/…` by hand. `yearName()` in `lib/roman.ts` gives "High School" or "Year II".
- **Course files:** `"kind": "highschool"`, `"role": "highschool"`, `"block": N`; no `term`, `instructors` or `url`. Each `syllabus` entry has the `slug` its lesson must have. Lessons are numbered "Lesson 1.3" (block.lecture).
- **Rules** (`content:check`, 6b): a High School lesson's `prerequisites` are earlier High School lessons; its slug matches its lesson-list entry; the block's last lesson has `towards: true` ("Towards the universe", which links the block to cosmology); `leadsTo` points to the university lectures it leads to.
- **Colours:** High School pages get `data-site="highschool"` on `<html>` (set before the first paint by `lib/site-section.ts`, kept in step by `components/SiteSection.tsx`), which turns on `app/theme-highschool.css`: light "school notebook" (notebook blue), dark "aubergine". Change High School colours **only** in that file; the university palette in `globals.css` stays unchanged.
- **Links into it:** "High School" in the header link row, phone menu and footer (from `site.years`), a "New to physics?" bar on the homepage, a "Not ready yet?" bar on every Year 1 course page, the Programme page and About. Block 8 links on to Year I.
- **Sources:** **OpenStax may not be used** (Writing rules 10): the OpenStax-based lessons of the separate site were deleted on 2026-11-20 and are not part of this repository. **Sources decided 2026-11-20 (docs/HIGHSCHOOL-PLAN.md §2.0, flag F-OS):** Siyavula *Everything Science* and *Everything Maths* Grades 10–12 (CC BY 3.0, online pages only, no Siyavula branding) are the main source for Blocks 0–7; MIT OCW and BLOSSOMS, OpenLearn, Stitz–Zeager *Precalculus* and CLP Calculus support them; NASA and ESO (CC BY 4.0 items) carry Block 8. The CvTE VWO syllabus is a topic checklist only. Use only these (and PhET); a new source needs the licence and AI check of Writing rules 11 first. The per-lesson sources in docs/HIGHSCHOOL-PLAN.md §4 still name OpenStax sections: replace them when each lesson is written.
- **Two PCs** (2026-11-20): the High School is written on two PCs at once, PC 1 Blocks 0–4 and PC 2 Blocks 5–8, each block on its own branch. Follow [docs/TWO-PC-WORKFLOW.md](docs/TWO-PC-WORKFLOW.md). A `prerequisites` entry may name an earlier High School lesson that is planned but not written yet: `content:check` warns instead of failing (`site.planned` in `lib/content.ts`), and the page shows it as "coming". `npm run new:page -- hs-N <lesson> "<title>"` scaffolds a High School lesson with its fixed slug. Review High School pages with the `highschool-reviewer` agent (`.claude/agents/highschool-reviewer.md`), not `mit-lecture-reviewer`.
- **PhET** (checked 2026-11-20 on https://phet.colorado.edu/en/licensing and the Terms of Use, version 1.0 of 2026-09-20): HTML5 sims are CC BY-NC 4.0; free non-commercial redistribution with PhET's exact attribution (printed by `components/PhET.tsx`); the PhET logo stays visible and unaltered; "commercial" includes ad-supported sites, so the site stays ad-free. **Neither page has any clause about AI, machine learning, training, ingesting, scraping or bots**, unlike OpenStax. All 34 sims named in docs/HIGHSCHOOL-PLAN.md §4 are in `public/phet/` (the 22 not yet used were added 2026-11-20), plus 12 extra sims for lessons that had none (docs/HIGHSCHOOL-PLAN.md §3.5): 46 sims, 130 MB. Until High School lessons use them, `content:check` warns that they are unused.

## Scope (decided by the owner)

The site is a **complete university programme** (four undergraduate years and a graduate year), not a cosmology summary: **every lecture of every course** in the table above gets one or more pages, following MIT's own lecture order. Cosmology is the destination and the largest part, so foundation pages still end with a cosmology callout and `leadsTo` where a link exists — but they cover their MIT lecture **fully**, as a university course would, not only the parts cosmology uses.

Order of work:
1. Finish 8.286 (Lectures 12–23, then Lectures 1–2), plus dark matter / structure formation from the sources listed under "Current state".
2. Then complete the courses year by year, each lecture by lecture, with the maths courses alongside the physics that needs them: 8.01 + 18.01 → 8.02 + 18.02 → 8.03 + 18.03 → 8.033 → 18.06 → 8.04 → 8.044 → 8.05 → 8.06 → 8.07 → 8.08 → 8.09 → 8.962 (Year IV courses added 2026-11-18, docs/YEAR-IV-PLAN.md; 8.07 to 8.09 written in runs 14 and 15).
   The maths courses (`role: "mathematics"`) were added by the owner on 2026-11-14 so the programme is a complete degree; their full lecture lists are already in their `_course.json` files.
3. Before writing a course, fill its `syllabus` in `_course.json` with MIT's complete lecture list.

Year folders only group courses: lesson URLs (`/courses/<course>/<slug>`) and saved study progress (`localStorage` keyed by page slug) contain no year, so a course can move between years without redirects or migrations.

## Commands

```bash
npm run dev            # http://localhost:3000
npm run content:check  # validates ALL content — run after every content change
npm run build          # content check + production build (must pass before committing)
npx tsc --noEmit       # type check
npm run new:page -- 8.286 10 "Non-Euclidean spaces"   # scaffold a page
npm run icons          # regenerate favicon / share image from brand/*.svg
npm run scan           # every maths symbol used, how often, on which pages
npm run scan -- --numbers --uncovered   # numbers inventory: every result-like number not yet covered by calcs/
npm run scan -- --values                # every quoted H0, age, T_CMB, Ω, n_s, σ8 value and its role (calcs/values.yaml)
npm run calc:test      # recompute every number stored in calcs/, plus harness regression tests (Python: python -m venv .venv, then .venv/Scripts/pip install -r requirements-dev.txt)
npm run calc:crosscheck # independent NumPy/SciPy recomputation of a sample (not part of calc:test)
npm run test:answers   # the answer checker of problem sets (lib/answers.ts): numbers, equivalent formulas, listed mistakes, refused input
npm run test:shortcuts  # every shortcut in the "?" list, focus mode on and off, plus read-aloud on every lesson (needs a running site: BASE_URL, default http://localhost:3000; uses a local Chrome/Edge, no extra packages)
npm run test:labels     # every label on every graph, measured in a real browser on a 375 px phone and a 1400 px screen at normal and largest text size: inside its graph, clear of caption, lines and other labels, no stray borders (running site; SHOTS=folder saves screenshots, PAGES=slug,… and ONLY=1,3 narrow it down)
npm run test:terms      # glossary marks and the word panel on 7 lessons, phone and wide screen, normal and largest text: tap, Space, More, Escape and focus return (running site, BASE_URL; PAGES=slug,… and ONLY=1,3 narrow it down)
```

After adding a new `.mdx` file, **restart `npm run dev`** — the dev server caches the list of pages (pages use `dynamicParams = false`).

## Architecture (nothing is hard-coded per page)

- Next.js 16 (App Router) + TypeScript, static generation, deployed on Vercel.
- `content/<year>/<course>/<slug>.mdx` = one page. `_year.json` and `_course.json` hold year/course metadata (course `syllabus` = MIT's ordered lecture list; `themes` drive the homepage cards and the course page's theme links; optional `chapters` group the syllabus). The course page (`app/courses/[course]/page.tsx`, with `components/course/*`) shows a folding intro on phones, a contents row, theme jump links, and the sections grouped by chapter: each page once per chapter with the sections it covers, unwritten sections in one block, a sticky chapter navigation (side list from 1000px, chip row below) and an "Only sections with pages" toggle (not stored). Section anchors are `#sec-4-3`, chapters `#chapter-N`.
- `lib/schema.ts` — zod schema for frontmatter and course files. `lib/content.ts` — loads everything, builds the prerequisite graph, prev/next order, "Where this leads in cosmology".
- `lib/mdx.tsx` — compiles MDX (remark-math + rehype-katex + `lib/rehype-sections.ts`, which wraps each `##` section in `<section id=…>`). Components available in MDX are registered here.
- Routes: `/courses/[course]/[slug]` (`app/courses/[course]/[slug]/page.tsx`), `/courses/[course]`, `/courses`, `/`, `/about`, `/symbols` (index) and `/symbols/year-N` (one glossary page per year, with the meanings used in that year; lists of lessons load from `/symbols-usage.json` when opened, because one page of every symbol outgrew Vercel's 20 MB limit), `/wonder`, `/privacy`, `/glossary` (difficult words: search, filters, A to Z, My words) and `/glossary/<letter>` (`a`…`z`, `0-9`; one `<dfn>` per word; where each meaning is used loads from `/glossary-usage.json`), `/search-index.json` (built at build time, glossary words included as Definition rows), `/sitemap.xml`, `/manifest.webmanifest`.
- Glossary of difficult words (docs/GLOSSARY-PLAN.md): data `data/glossary/*.json` and `lib/glossary.ts`; site-wide usage `lib/glossary-site.ts`; marks `lib/rehype-terms.ts` (in `lib/mdx.tsx` after `rehype-sections`); panel `components/terms/TermPanel.tsx` (+ `SaveWord`, `SaveAllWords`; on lessons it reads each word and short meaning from "Words on this page" and loads the text under More from `/glossary-more/<letter>`, `app/glossary-more/[letter]/route.ts`); `components/PageTerms.tsx`; `components/glossary/*`; browser data `lib/glossary-client.ts`; saved words `lib/saved-words.ts` (localStorage `saved-words`, cards `term:<id>` on /review, in `lib/backup.ts`). Reading option `terms` (`data-terms` on `<html>`: first / every / academic / off) decides in CSS which marks look marked; `w` / `Shift W` move between them.
- `/privacy` (`app/privacy/page.tsx`) lists everything the site stores in the browser and what leaves the device. **Keep it in step with the code**: a new localStorage key, cache, cookie, analytics or any request to another host must be added there first (and to the CSP).
- Security headers are set in `next.config.ts`: a Content-Security-Policy allowing only this site (`'unsafe-inline'` for the theme script and Next's inline data; `'unsafe-eval'` only in development; `public/phet/` excluded), plus nosniff, `SAMEORIGIN` framing, referrer and permissions policies. Anything loaded from another host will be blocked until the policy allows it. Test changes on a production build (`npm run build`, then the `prod` launch config) and watch for `securitypolicyviolation` events.
- Every lesson ends with a "Report a mistake on this page" bar (a pre-filled GitHub issue with only the page title, address and MIT source).
- Footer: a "Beta" label in the top band and a beta note in the footer (`app/layout.tsx`). No social media icons (removed 2026-11-20, owner decision).
- `/wonder` (`app/wonder/page.tsx`) is the site owner's personal reflection page, not a lesson: it is not MIT material, has no review or calcs file, and lessons do not link to it. Leave its wording to the owner.
- Site header and navigation: `components/SiteHeader.tsx` (masthead, tools, link row; at ≤ 700px a one-row header whose menu button opens a full-height, scrollable menu with the four tools on top and every link; the tools exist once and move between the two places). Add new top-level links there. Each year's `short` in `_year.json` is its one-line subtitle in the phone menu (max 40 characters).
- Offline: `public/sw.js` (hand-written service worker, production only, registered by `components/offline/RegisterSW.tsx`): pages network-first with saved/visited copies as fallback, files cache-first, RSC requests never cached, `/offline` when nothing is saved. Saving is on the reader's request only (`components/offline/SaveCourse.tsx` on course pages, the Offline section of Reading options); the list of what to save is `/offline-manifest.json` (`app/offline-manifest.json/route.ts`, built from the site and `.next/static`). Bump `VERSION` in `sw.js` when its logic changes. Each build has one version (`NEXT_PUBLIC_BUILD_VERSION`, set in `next.config.ts` from Vercel's commit); `components/offline/UpdateNotice.tsx` uses it for the "new version available" notice and to refresh saved copies in the background.
- Read-aloud: `components/speech/*` (global provider in `app/layout.tsx`), `lib/voices.ts`, `lib/read-text.ts`, `lib/speech.ts`.
- Accessibility: `components/a11y/ReadingOptions.tsx` + `lib/reading-options.ts` (text size via `--text-scale` on the root, so **use rem/em, never px, for text**; `data-spacing`, `data-font`, `data-contrast`, `data-motion`, `data-width`, `data-links`, `data-large` on `<html>`), `components/a11y/Shortcuts.tsx` ("?", n/p, j/k in focus mode); `data-focus` and `data-keys` too. Target WCAG 2.2 AA: text contrast ≥ 4.5:1, control borders ≥ 3:1 (`--control`), gold text uses `--gold-text`. Every new interactive diagram must work by keyboard and have a text alternative.
- Progress: `lib/progress.ts` (localStorage only), `components/progress/*` (Mark as studied, quiz ≥ 75% marks studied, ticks in menus, course progress, homepage "Your studies" with a suggested next lesson).
- `/accessibility` (`app/accessibility/page.tsx`) describes every accessibility feature and how to switch it off; keep it in step with the code below (About has a short summary that links to it).
  - Spoken maths: KaTeX renders MathML for screen readers; `lib/speech.ts` (`texToSpeech`) says formulas in words for read-aloud and the "In words" panels. Grouping is spoken (`groupTex`): a bracket, fraction part, root or exponent with + − ± or / inside becomes "the quantity …, all plus …", "…, all over …", "…, end of root", "…, end of power"; `content:check` fails if a formula loses a group (`groupingLost`). Symbol names come from the registry's `spoken` (H₀ "H nought", ȧ "a dot"); a capital whose small letter the page also uses is "capital R" (`pageCapitals`; capital Greek always "capital omega"); units in `\text{}` are written out ("kilometres per second"), and for the engine (`engine: true`, read-aloud) a symbol letter after a number that an engine would read as a unit is spelled ("3 em"). `content:check` fails when a symbol could be read as a unit or two case forms on a page sound the same. Read-aloud starts each session with a silent primer (a cold engine cut off the first word).
  - Dialogs: never the browser's `confirm()`, `alert()` or `prompt()` (`content:check` fails the build): use `useConfirm()` from `components/ui/ConfirmDialog.tsx` (role alertdialog, focus trap, Escape, focus returns, bottom sheet on phones, `destructive` = red button) and `showToast()` from `components/ui/Toast.tsx` for the message afterwards (`<Toaster />` is in the root layout). `speechGaps()` reports anything it cannot say, and `content:check` warns about it per page — add a rule to `lib/speech.ts` rather than leaving a gap. Manual NVDA/Orca checklist: `docs/SCREEN_READER_TESTS.md`.
  - Graphs (`components/Plot.tsx`): `role="img"` with a generated label (axes, range, curves) and the caption via `aria-describedby`; "Show values as a table"; "Listen to this graph" (`components/plot/sonify.ts`, Web Audio, only on a press, stops on page hide; nothing stored or fetched).
  - Focus mode (`components/a11y/FocusMode.tsx`, mounted in the root layout, reading option `focus`, `data-focus`/`data-focus-active` on `<html>`): on every page menus, sidebars and footer are hidden and nothing moves; reading pages (`.page-narrow.prose` with two or more direct `<h2>`) are paged by heading; lesson parts (`.prereqs`, each `.md-section`, `.page-symbols`, `.page-terms`, `.leads-to`, `.quiz`, `.flashcards`) shown one at a time; the others get `hidden="until-found"` so find-in-page (`beforematch`), `#section` links and read-aloud (`.tts-active`) reveal the right part; print shows all. A new kind of block at lesson level must be added to its `UNITS` selector.
  - Finding it: `components/a11y/FocusToggle.tsx` ("Focus" in the lesson toolbar) and `components/SlimBar.tsx` (slides in on scrolling up once the header is out of view: crest, search, "Aa"; hidden near the top and in focus mode; `data-slim` on `<html>` moves the course chapter navigation down). The search dialog and the reading options panel render on `<body>` (portals) and open by the events `open-search` / `open-reading-options`, so they work when their own buttons are hidden.
  - Single-key shortcuts (`? / n p j k w`) obey the reading option `keys` (`singleKeysOn()` in `lib/reading-options.ts`, WCAG 2.1.4): check it in any new one-key shortcut, and never fire while typing.
  - Symbol units: optional `unit` on a meaning in `data/symbols.json` (SI first, the usual astronomy unit in brackets; none for pure numbers, labels or indices), shown in the popup, "Symbols on this page" and `/symbols`. Units were reviewed (`reviews/symbols-units.md`).
  - Flashcards (`components/Flashcards.tsx`, `lib/flashcards.ts`): simplified SM-2 (Again/Hard/Good/Easy), localStorage key `flashcard-schedule`, card id = page slug + hash of the front text (`lib/page-cards.ts`, shared with `/flashcards.json` for `/review`). Export/import of all progress (`lib/backup.ts`) checks size and structure and only parses JSON. Any new localStorage key goes on the Privacy page first.
- Search: `components/Search.tsx`. Titles first (`/search-index.json`, `lib/search.ts` `titleHits`), then full-text results from Pagefind: `scripts/build-search.mts` runs after `next build` (`npm run search:index`) and indexes the lesson **sources** (MDX: prose, `##` sections with the page's own ids, formulas in their read-aloud words, bold terms at double weight, symbol names), not Next's build output (on Vercel the prerendered .html files are not on disk). It writes `public/pagefind/` (gitignored) with `files.json` for offline saving, and fails the build if no lesson was indexed. Needs `'wasm-unsafe-eval'` in the CSP. Offline without the saved index: titles only, with a note.
- Old tabs: after a deploy, `components/offline/UpdateNotice.tsx` calls `markStale()` (`lib/stale.ts`): from then on links load pages in full, so a long-open tab does not keep old client code. "On this page": `components/OnThisPage.tsx`, `lib/headings.ts`.
- Styles: one file, `app/globals.css`, with CSS variables for light/dark themes. Must stay responsive (check 320, 360, 768, 1400 px; no horizontal scroll).
- **Design: classical university.** Typefaces EB Garamond (headings, small caps) and Source Serif 4 (text), loaded with `next/font` in `app/layout.tsx`. Parchment background, burgundy accent (`--accent`), gold ornaments; dark mode is a "night library" (cream text, gold accent). Links (`--link`, owner decision 2026-11-15) use the accent colour: burgundy, gold in dark mode, a touch more plum once visited. Inline links stay underlined text links (thin, soft underline that firms up on hover/focus), never pills; the underline is required because the colour alone differs too little from body text. Standalone links (MIT source, prerequisites, "where this leads", previous/next, a course's lesson lists) use `<LinkBar>` from `components/LinkBar.tsx`: a wide, low row with a title, one short line saying where it goes, and an arrow. Labels use small caps (`font-variant: small-caps; text-transform: lowercase`). Years are Roman numerals (`lib/roman.ts`). Lesson sections are numbered automatically and the first paragraph gets a drop capital. Filled buttons use `var(--on-accent)` for text. Keep new UI in this style.

## Page frontmatter (see `docs/CONTENT_GUIDE.md` for all fields)

```yaml
---
title: The horizon distance
slug: horizon-distance              # = file name, unique site-wide
course: "8.286"
lecture: 8                          # MIT lecture number
order: 2                            # order among pages of the same lecture
summary: One sentence.
prerequisites: [age-of-the-universe, cosmological-redshift]   # slugs of existing pages
source:
  title: "MIT 8.286 Lecture 8: The Dynamics of Homogeneous Expansion, Part IV"
  url: https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-8-the-dynamics-of-homogeneous-expansion-part-iv/
  readings:                         # cite as reading1, reading2, …
    - title: "8.286 Lecture 8 transcript"
      url: https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/<id>_<video>.pdf
    - title: "8.286 Lecture 8 slides"
      url: https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec08/
license: CC BY-NC-SA 4.0
references: {}                      # extra sources: key → {title, url, location}
leadsTo:                            # forward links to MIT lectures (become real links once a page exists)
  - course: "8.286"
    lecture: 10
    why: "Short reason."
quiz:
  - question: "Text with $inline$ maths."
    choices: ["$a$", "$b$"]
    answer: 0                       # 0-based
    explanation: "…"
flashcards:                         # optional; derived from quiz if absent
  - front: "…"
    back: "…"
status: draft                       # only "reviewed" when a review file exists and all findings are fixed
---
```

**YAML escaping:** inside double-quoted YAML strings, write LaTeX backslashes doubled: `"$\\frac{a}{b}$"`, `"$\\Omega$"`.

## Symbols (every new page)

Every maths symbol a lesson uses needs an entry in `data/symbols.json` with a meaning that applies on that page; it drives the `/symbols` page, the tap-to-explain popups, the "Symbols on this page" list and read-aloud. A letter that means something different on a new page (σ, ξ, δ, k, τ …) gets a new meaning scoped with `pages: [slug]` (or `courses`). Never widen a general meaning to cover a new use. `npm run scan` lists every symbol and its pages; `content:check` warns about a symbol without a meaning for the page. Meanings are plain text with Unicode symbols, no TeX. Entries name TeX commands in `tex`, or plain letters and subscripted symbols in `forms` (`"a"`, `"H_0"`, `"\rho_c"`, as `npm run scan -- --notation` prints them); letters and subscripted symbols are explained only where a meaning applies, so check new pages for course-wide letter meanings (a, H, z, c, k, T) that do not fit. Decorated symbols are their own entries: `x_0`, `f'` (primes are forms too: `"f'"`, `"y''"`), `T_(2)`, time derivatives (`"\\dot a"`, `"\\ddot x"`, `"\\dot\\rho_\\star"`, `"\\ddot\\hat\\delta"`: named and spoken "a dot", "x double dot", never "dot" alone; `content:check` enforces it), and the unit vectors î, ĵ, k̂, r̂, θ̂, n̂ (forms `"\\hat i"`, `"\\hat\\theta"`; the letters are listed in `UNIT_VECTORS` in `lib/tex-scan.ts`; other hats, such as δ̂ and Φ̂, stay the accent entry). Operators with limits (`\int_a`, `\sum_i`, `\lim_x`) are not symbols. **`content:check` fails the build** when a page uses a symbol with no entry, an entry with no meaning for that page, or a meaning scoped to a page that does not use it. Units only where the quantity has one clear unit on that page. After adding meanings in bulk, run an independent review (reviews/symbols.md).

## MDX components

```mdx
<Formula label="Hubble's law" tex="v = H\,r" cite="reading1" at="slide 1" />
```
- **Every display equation is a `<Formula>` with `cite`.** `cite="mit"` = the page's `source.url`; `reading1`, `reading2`… = `source.readings`; other keys = `references`. Always add `at=` (slide number, transcript page, section/equation number). `$$…$$` is rejected by `content:check`. Inline `$…$` is fine.
- In JSX string attributes write single backslashes (`tex="\frac{a}{b}"`). Inside JS expressions (`{…}`) double them (`label: "\\vec A"`).

```mdx
<Plot variable="t" domain={[0, 2]} range={[0, 3]} xLabel="t" yLabel="a"
  curves={[
    { expr: "(1.5*t)^(2/3)", label: "flat" },                     // mathjs syntax
    { expr: "t", label: "no gravity", dash: true },
    { expr: "(1/a - 0.2) >= 0 ? (1/a - 0.2) : NaN" },             // hide unphysical parts
    { tangentOf: 0, at: "t1" }, { secantOf: 0, from: "t1", to: "t2" },
    { x: "alpha*(s - sin(s))", y: "alpha*(1 - cos(s))", range: [0, 6.2832] }  // parametric, variable s
  ]}
  params={{ alpha: { value: 1.5, min: 0.5, max: 2, step: 0.05, label: "\\alpha" } }}
  points={[{ x: 1, y: 1, label: "today" }, { curve: 0, at: "t1" }]}
  caption="Say it is computed from the formula." />
```
Graphs must always be generated from formulas, never static images. **Graph labels** are placed by shared code (`lib/label-layout.ts`; `lib/vector-layout.ts`, `lib/plot-labels.ts`, `lib/parallax-layout.ts`) and drawn as page text over the drawing, never as HTML inside the SVG (`foreignObject`): they follow the text size and are not cut off or misplaced on phones. `content:check` places every label for a 320 px phone and a wide screen at the smallest and largest text size, and fails when one would stick out of its graph, cross a line or curve, or overlap another label; fix it with a shorter label, a wider `extent`/range, or another point position. A label that sits away from its point gets a thin leader line; on a Plot, a point label that cannot fit at all (narrow phone, large text) becomes a number tag with the label listed under the graph. Style only a diagram's own drawing (`.vd-stage > svg`), never `svg` in general: KaTeX draws accents such as the `ec` arrow as small SVGs.

Other components: `<VectorDiagram>`, `<ExpansionDiagram>`, `<ParallaxDiagram>`, `<PhET id="…" title="…" />` (early foundation pages only; cosmology pages use generated diagrams) — PhET is **CC BY-NC 4.0**; the component prints PhET's required attribution verbatim, don't change it, and the site must stay ad-free. Simulations run from the site: unmodified, version-pinned copies in `public/phet/` listed with their SHA-256 in `public/phet/manifest.json` (`content:check` verifies every `<PhET>` has one and that no file was changed; a new simulation = download the pinned `_en.html`, add it to the manifest), `<WorkedExample title="…"><Problem>…</Problem><Step title="…">…</Step></WorkedExample>`, `<Callout kind="key|note|warning|cosmology" title="…">`. New component → add it to `componentsFor()` in `lib/mdx.tsx`.

Auto-inserted on every page (don't add manually): prerequisites box, "On this page", read-aloud controls, quiz, flashcards, "Where this leads", prev/next, MIT credit footer. Lessons also get glossary marks automatically: every word in `data/glossary/*.json` with a meaning on the page is marked in its prose (never in headings, links, maths, figures, Formula/Plot/diagram/PhET/Answer/Hint/Solution elements), and listed under "Words on this page".

## Writing rules (important)

1. **Rewrite, don't copy.** Explain MIT's lecture in your own words, following MIT's order. Short standard phrases only; never paragraphs. Worked examples must be original (own numbers/situations).
2. **Cite every formula** to the exact MIT location. Check whether an equation was on a **slide** or written on the **board** (then cite the transcript page). This was the most common review error.
3. **Never** use or reproduce material MIT marks "© … All rights reserved" — draw your own diagram. Keep any "Courtesy of …" credit in `courtesy:` if you reference such material. Never use LibreTexts. **OpenStax** (owner decision 2026-11-20): only with OpenStax's written permission on file, under rule 10; until then no OpenStax text may enter an AI session at all. David Tong's notes and the Feynman Lectures: fact-checking only.
4. **Don't repeat lecturer slips.** Guth sometimes misspeaks (e.g. "Laplace" for Poisson's equation, units of k, Friedmann's 1924 paper as 1923). If the page differs from the lecture for that reason, say so briefly in brackets.
5. Attribute claims honestly: "Guth argues…", "in 2013 Guth quoted…". Post-2013 facts (e.g. Hubble tension) must be marked as later developments.
6. Foundation pages cover their MIT lecture completely (full university level) and, where a real connection exists, end with a `<Callout kind="cosmology">` + `leadsTo`.
7. **Recompute every number** (worked examples, captions, quiz answers) before publishing. Every page with numbers has a file in `calcs/` (every page since the calcs files were introduced); keep it in step: change a number on the page → change its entry, then `npm run calc:test`. A new page gets its calcs file (numbers, and formula checks for derivations) before review; `content:check` warns about a page with numbers but no calcs file. Quoted figures that cannot be recomputed go in as `kind: fact` (with `source: {ref: …}` for a later measurement the page cites only in words). Formulas may use `integrate`, `deriv`, `solve` and `erfc`. Quoting H₀, the age of the universe, T_CMB, Ω_m, Ω_vac, n_s or σ₈: use a value already in `calcs/values.yaml` where it fits; a new value fails `content:check` until it is added there with its role (Guth 2013 / later / example / computed / historical). Format: `calcs/8.286/age-of-the-universe.yaml`; plan: docs/CALC_TESTS_PLAN.md.
8. Plain, clear English; short paragraphs; `##` sections (they become read-aloud sections and the "On this page" list); end with `## Summary`. **No em dashes (—)** anywhere in site text (owner decision 2026-11-15): use a comma, a colon (before an explanation or in a title, which then needs quotes in YAML), brackets for an aside that has its own commas, or a new sentence. `content:check` warns about any — in a page.
9. Guth's convention: comoving coordinates in "notches", `a(t)` in m/notch, `k` in 1/notch². Mention when it matters.
10. **OpenStax conditions** (checked 2026-11-20 on the [AI help article](https://help.openstax.org/s/article/Using-OpenStax-Content-with-AI-Tools) and the [*Physics* preface](https://openstax.org/books/physics/pages/preface)). OpenStax's books state that they may not be used to train large language models "or otherwise be ingested" into large language models or generative AI offerings without OpenStax's permission, and the help article says not to upload substantial amounts of OpenStax content to AI services without checking the book's licence and the provider's use policy. Pasting, uploading or fetching OpenStax text into an AI session counts as ingesting it, **even with model training switched off**. So:
    - **no OpenStax text enters any AI session** (no pasting, uploading, `WebFetch` or browser reading of its pages, no PDFs in the repo) until OpenStax's written permission is kept in the repo (their reply or an approved Content Reuse Request, personal email addresses removed), and then only within what that permission allows;
    - when permission is given, the owner also switches **off** model training on their Claude account (and starts a new session) before the first use;
    - treat the licence as CC BY-NC-SA 4.0 (the *Physics* preface says both CC BY and CC BY-NC-SA), credit the book and OpenStax on every page, never use the OpenStax name or logo as endorsement, and never reuse figures credited to other copyright holders;
    - rewrite in your own words as for MIT; never paste whole chapters.
    Where OpenStax may be used (a separate high-school site, a course here, or fact-checking only) is not decided yet; until it is, `content:check` still rejects OpenStax in this site's pages (`FORBIDDEN_SOURCES` in `scripts/check-content.ts`).
11. **AI terms of every other source** (owner decision 2026-11-20; checked that day on each provider's own pages, not legal advice). Before using a **new** source, read its licence and terms for any clause about AI, LLMs, "ingesting", text and data mining (TDM) or scraping, and add it to this list. Never train or fine-tune any AI model on any source.

    | Source | Used for | AI terms | Rule |
    |---|---|---|---|
    | MIT OpenCourseWare | 524 lessons | Terms of use (updated 2026-08-11) have "Permitted Use of AI Training": allowed with attribution, non-commercial only, models shared CC BY-NC-SA | Allowed: read and rewrite as now |
    | Ferreras, *Fundamentals of Dark Matter* (UCL Press) | Year 5 `Ferreras` course | CC BY-NC 4.0 (copyright page of the PDF and the UCL Discovery record, both read); no AI or TDM clause; UCL Press's AI guidance says reuse "is covered by the Creative Commons licence" | Allowed. Credit author and publisher, indicate changes, never use the book's third-party figures. UCL Press asks (not requires) to be told when the book is used to teach a course |
    | OpenLearn, *Unsolved problems in cosmology* (planned) | not used yet | CC BY-NC-SA 4.0; no AI clause in OpenLearn or OU terms | Allowed; its figures are third-party |
    | PhET | simulations | CC BY-NC 4.0; licence page and Terms of Use (1.0, 2026-09-20) have no AI clause | Allowed (see "The High School") |
    | Siyavula *Everything Science* / *Everything Maths* Gr 10–12 | High School Blocks 0–7 (main source) | All textbook content on siyavula.com is CC BY 3.0 (contents page read 2026-11-20); terms and conditions have no AI clause and allow remixing with attribution; printed/branded PDFs reported CC BY-ND | Allowed: cite the online pages; no Siyavula logos or brand; skip embedded third-party videos and sims; never the "All rights reserved" pages or Gr 12 5.3–5.5 (OpenStax inside), which `content:check` rejects |
    | MIT BLOSSOMS (web.mit.edu/blossoms) | High School support | CC BY-NC-SA 3.0 US; no AI clause | Allowed; skip third-party items listed in each lesson's credits |
    | Stitz–Zeager *Precalculus*, CLP Calculus (UBC) | High School Block 0 support | CC BY-NC-SA; no AI clause found | Allowed; check the front matter before first use |
    | ESA/Hubble images (esahubble.org) | Homepage photographs (heic1214a, potw1703a) | CC BY 4.0 for images, videos and web texts (esahubble.org/copyright, read 2026-11-23); credit clearly and unaltered, changes noted after the credit; no implied endorsement; AI clause not yet checked | Allowed: credit line from the image page, plus "cropped" and the licence |
| ESO (eso.org) | High School Block 8 | CC BY 4.0 for press releases, captions, pictures of the week, blog posts (not papers or other text); its licence asks users to say when AI was used on its content | Allowed for those items; the lesson's credits say AI helped rewrite them |
    | CvTE VWO natuurkunde syllabus (examenblad.nl) | High School topic checklist | All rights reserved; copying only unchanged; robots.txt blocks GPTBot | Topic names in our own words only; never adapt or translate it, never feed the PDF to an AI tool |
    | **Khan Academy, CK-12, IOP's IOPSpark, Wikiwijs / Stercollecties** | not used | Their terms bar AI use of their content, or their robots.txt opts out of AI (`ai-train=no`) and blocks AI crawlers (including Claude) | **Never use**, not even for fact-checking in an AI session |
    | Wikipedia, Wikibooks, Crowell's *Light and Matter*, *Active Prelude to Calculus* | not used | CC BY-SA: cannot be adapted into CC BY-NC-SA | Never adapt; fact-check by hand only |
    | ESA and CERN text, Particle Adventure, Isaac Physics, natuurkunde.nl / NiNa, Springer books, BCcampus physics books | not used | No adaptation allowed (all rights reserved or ESA/CERN terms), AI reserved and AI crawlers blocked (Springer), or built on OpenStax (BCcampus) | Never adapt |
    | NASA | facts, values | US public domain; NASA's media guidelines: never the NASA insignia with AI output or AI training, never phrase AI output as "according to NASA" or imply NASA review | Allowed: cite NASA pages by title as now; no insignia |
    | arXiv preprints | 12 papers | Personal and research use allowed; no AI clause; each paper has its author's licence | Allowed: prefer the arXiv version of a paper |
    | **ACS** (Chem. Rev.) | 1 citation (Pauling 1928) | "AI ingestion counts as content use"; a standard licence is for human reading only | **Cite only. Never paste, upload or fetch the article into an AI session** |
    | **Springer Nature**, **Oxford University Press** (MNRAS) | 1 citation (Foundations of Physics), 2 Nature papers (Lehnert 2010, Carniani 2024, in 8.286 Problem Set 2) and 3 MNRAS papers (incl. Bunker 2013), all cited via arXiv | Both reserve all TDM rights, including AI, under EU DSM Art. 4(3) | **Cite only**; use the arXiv or open-access version if the text is needed |
    | **IOP / AAS** (ApJ) | 4 citations | IOP's TDM policy: never use its publications to "train, pre-train, fine-tune, adapt, evaluate" AI; non-commercial TDM with conditions; CC BY articles free | **Cite only** for pre-2021 (non-CC BY) ApJ papers; CC BY articles allowed |
    | **APS** (Phys. Rev., PRL, RMP) | 4 citations | TDM needs a written agreement with APS; CC BY articles exempt; no reader AI rule | **Cite only**; the public abstract may be read |
    | EDP Sciences (A&A), Royal Society, JPS (JPSJ) | 1, 2 and 1 citations | No AI or TDM policy found (A&A pages blocked); general copyright, short extracts allowed (Royal Society) | Cite only; read open versions (arXiv, CC BY) where they exist |
    | NIST (CODATA, DLMF, Chemistry WebBook) | constants, data | No AI clause in terms; Standard Reference Data and DLMF: no bulk copying; WebBook robots.txt `ai-train=no`, `ai-input=yes` | Allowed for looking up values; no bulk download |
    | PDG (CC BY 4.0), MacTutor (CC BY-SA 4.0), ATNF/CSIRO, Newton Project | data, history | No AI clause | Allowed for looking up facts and values |
    | IAEA AMDC | 1 citation (8.033, AME 2020 value) | Terms of use (read by the owner 2026-11-20): IAEA content may be copied and used for teaching, commercial or not, with the IAEA credited and no implied endorsement; database data (NDS) free "for educational and informational use"; no AI or TDM clause; third-party items and the IAEA logo excluded | Allowed: credit the IAEA, no logo, no implied endorsement |
    | Feynman Lectures, David Tong's notes | fact-checking only, cited nowhere | robots.txt: `ai-train=no`; Feynman's own terms not readable | Fact-check by hand only; never fetch them into an AI session |

    In short: citing a paper and stating its result or a number from it in your own words is fine for every source above; what the strict publishers (bold) forbid is putting the article's text into an AI tool. The review files show these papers were cited from their bibliographic record or public abstract, not read in full (e.g. reviews/8.06/born-oppenheimer-approximation.md: Pauling "paywalled and was not read"). Keep it that way.

## Source workflow (how pages were made)

1. Find the lecture page: `https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-N-<title-slug>/` (all slugs are in `content/year-4/8.286/_course.json`). Its first `.pdf` link is the **transcript**. Slides: `…/resources/mit8_286f13_lecNN/` (first `.pdf` link).
2. Download to a temp folder **outside the repo** and extract: `pdftotext -layout file.pdf file.txt`. Check for "rights reserved" / "courtesy" notices: `grep -il "rights reserved\|courtesy" *.txt`.
3. Make structured notes: lecture structure with transcript page numbers, every equation (slide vs board), numbers quoted, slips, notices. **Page numbers = the printed footer of the transcript PDF** — check them with `pdftotext -f N -l N file.pdf -`; off-by-one page citations were the most common review error in Lecture 12.
4. Write the page(s). A lecture may become one or two pages.
5. `npm run content:check` and `npm run build`.

## Review workflow (required for every new or changed page)

A second, independent check compares the page with its MIT source and writes `reviews/<course>/<slug>.md` (template in `.claude/agents/mit-lecture-reviewer.md`). In Cursor, open a **new chat** and paste:

> Act as the reviewer described in `.claude/agents/mit-lecture-reviewer.md`. Review `content/year-4/8.286/<slug>.mdx` against its MIT transcript/slides (text at `<path to your .txt files>`). Check every formula's citation (slide vs board), recompute every number and quiz answer, check order/coverage, licensing, and claims about later lectures. Write `reviews/8.286/<slug>.md`. Do not edit the page.

Then fix the findings in the page and append a `## Resolution (date, by the page author)` section to the review file listing what changed. **Then set `status: reviewed`** (owner decision: review against notes, slides and transcripts is sufficient; videos are not compared). New pages start as `draft` and show a "Draft" badge until this is done.

## Problem sets

Design and decisions: [docs/PROBLEM-SETS-DESIGN.md](docs/PROBLEM-SETS-DESIGN.md); how to write one: docs/CONTENT_GUIDE.md "Problem sets". Pilot: `content/year-4/8.286/8-286-problem-set-1.mdx` (draft until its blind-solve review).

- A set is a page with `kind: problems` (`set`, `covers`, `solutions`), in the course folder, at `/courses/<course>/<slug>`. `lecture` and `covers` use this site's lecture numbers.
- Components (`components/exercise/*`, registered in `lib/mdx.tsx`): `<Exercise>`, `<Part>`, `<Hint>`, `<Solution>` (client: records opening, self-marking), `<Answer>` (client: number, formula or choice). Checking code: `lib/answers.ts` (restricted mathjs; formulas compared by value), loaded in the browser only when a reader uses a box. `npm run test:answers` tests it.
- `content:check` (`lib/exercise-check.ts`): unique ids, a solution per exercise, points that add up, formula answers finite over their `vars`, each listed mistake different from the answer. `calc:test`: a calcs entry with `answer: <id>` must equal the page's `value` or `expr`.
- Progress: `problems` inside the `study-progress` key (`lib/progress.ts`: `recordAnswer`, `recordReveal`, `recordSelf`, `scoreSet`); a solution opened before a correct answer earns no points; a set is done (`done[slug]`) at 75% of the points of its non-optional problems. `components/progress/SetProgress.tsx` shows the score in place of "Mark as studied"; the points are read from the page (`components/exercise/units.ts`). `lib/backup.ts` validates the new part.
- Lessons and sets are counted and listed apart (`isLesson`, `practiceFor`, `setName` in `lib/content.ts`): a set has its own row and tick at the end of its chapter on the course page, and every lesson of a lecture in `covers` gets a "Practise" link bar after "Where this leads".
- Search indexes statements and titles, not hints, solutions or answers. Read-aloud skips whatever is inside a closed `<details>` and the answer boxes. Focus mode: a problem under its own `##` heading is one part.
- Review: the reviewer solves the set blind before reading our solutions (`.claude/agents/mit-lecture-reviewer.md`). Not built yet: exam mode (design §6) and the homepage suggesting a set.

## Roadmap

**Start with [docs/PLAN.md](docs/PLAN.md)**: every plan and decision in one place (programme status, exercises/exams/labs, the fact-checking script, symbols, the offline site with local PhET simulations, order of work, decisions log).

The long-term plan — volume (~400 pages), problem sets with solutions, practice exams and lab work (virtual labs, real-data labs, phone experiments, a data-analysis tool) — is in [ROADMAP.md](ROADMAP.md). New page types (`problems`, `exam`, `lab`) and components (`<Answer>`, exam mode, data tool) are specified there; follow it when building them.

Two further plans: [docs/CALC_TESTS_PLAN.md](docs/CALC_TESTS_PLAN.md) — every calculated number stored as data in `calcs/` and recomputed by one pytest suite with unit checks (pilot: 8.286); [docs/SYMBOLS_PLAN.md](docs/SYMBOLS_PLAN.md) (stage 1 built) — symbols glossary with page-specific meanings, tap-to-explain popups, read-aloud symbol names, and later the formula reader, maths tools and spaced repetition. Both share one content scanner, `scripts/scan-content.ts`.

## Current state and next steps

- 8.286 Problem Set 2 was added and reviewed on 2026-11-21 (written by Fable 5.2 in a pilot against Opus 5.5; both versions passed a blind review with 0 errors).
- 522 lessons and 1 problem set (2026-11-19), all lessons reviewed; the problem set (8.286 Problem Set 1, see "Problem sets" above) is a draft until its blind-solve review. Year I: 8.01 complete; 18.01 and 18.02 31 of 35 lectures each; 8.02 21 of 36. Year II: 18.03 complete; 8.03 23 of 24; 8.033 23 of 26; 18.06 31 of 35; 8.04 23 of 24. Year III: 8.044 complete; 8.05 complete (Lectures 1–26); 8.06 complete (Lectures 1–24). Year IV: 8.286 complete (Lectures 1–23, 44 pages); 8.07 21 pages (lecture notes 1–11 and 14–16; notes 12 and 13 are a research talk and "courtesy" material, 17 an exam review); 8.08 complete (Chapters I–IX, the second Bose-gas PDF as 7.5 and both supplements, 26 pages; unit "Chapter"); 8.09 complete (all 33 sections of the course notes, 38 pages; unit "Section", lecture = section number, 1.1 `coveredBy`). Year V: 8.902 (Astrophysics II, Vogelsberger, Fall 2023, lecture notes) complete (Lectures 1–21, 23 pages; the dark matter / structure formation source; its pages are listed in the 8.286 "Dark matter" and "Structure formation" themes); Ferreras, *Fundamentals of Dark Matter* (Year V, folder `content/year-5/Ferreras`, URL `/courses/fundamentals-of-dark-matter`): 17 pages covering every section that 8.286/8.902 do not, the other sections linking to existing pages through `coveredBy`; 8.962 (General Relativity, Hughes, Spring 2020, from the lecture transcripts) complete (Lectures 1–23, 23 pages; run 16). Most courses not marked complete lack only their exam-review and exam lectures.
- **Textbook courses** (owner decision 2026-11-15): a course may follow an openly licensed textbook instead of MIT. Its `_course.json` has `"kind": "textbook"` plus `publisher`, `licenseUrl` and `attribution` (the publisher's wording, printed in every page's credits with the changes made); `unit` is "Section" and `lecture` numbers are section numbers (2.2, 6.4 …); every page's `source.url` is the book's own URL (`content:check` enforces it); `cite="mit"` then means the book. Sections that another course already covers get `"coveredBy": [slugs]` in the syllabus instead of a duplicate page. Never reuse figures the book credits to other copyright holders.
- **Next:** every course in the order of work now has its lectures written. What remains is the lectures without pages (8.02: problem-solving sessions, exam reviews and Session 35, which has no notes or slides; the exam-review and exam lectures of other courses; 8.07 notes 12, 13 and 17), the decision whether exam-review lectures get pages, and the later plans (problem sets, docs/PLAN.md §2 and §8). OpenLearn *Unsolved problems in cosmology* (CC BY-NC-SA 4.0, checked 2026-11-15) is used only for fact-checking and further reading, not as pages of its own. Later plans beyond the lectures (people, "How we know", misconceptions and more): docs/PLAN.md §8.
- **Unattended lessons runs** (sixteen so far, 2026-11-15 to 2026-11-19; logs in `docs/RUN-lessons-run*.md`): the owner's prompts are in OWNER-TODO.md §10. Work on a new branch, one commit per lesson, each with calcs, review and its own symbol meanings; never skip the commit checks. Every lesson adds to `data/symbols.json`, so lessons of different courses cannot be split into independent pull requests by cherry-picking: rebuild each course's branch from `main`, applying each lesson's own symbol changes. Some 8.01 lessons list 18.01 pages as prerequisites, so the 18.01 pull request goes in first; delete its branch on merge (or retarget the 8.01 one to `main`), otherwise a stacked pull request merges into its base branch instead of `main`. Read-aloud now says Dirac notation (⟨u|v⟩, ⟨u|T|v⟩, |ψ⟩, ⟨ψ|), so new pages may use kets in formulas; pages from runs 6–7 use the inner product (u, v) instead, which is fine too. In calcs, never rely on an undefined one-letter name: `calc:test` now fails on it instead of reading it as a unit. Take an OCW lecture's list of videos from the course's video gallery (`video_galleries/lecture-videos/`): some segment pages have long slugs (8.06 `resources/l13-3-einsteins-b-and-a-coefficients-determined/`), so probing `lN-1/`, `lN-2/` … until a 404 misses videos (run 12). Run 15 wrote whole chapters in parallel, one writer agent per git worktree under `.claude/worktrees/` (each with its own reviewer), then copied each commit onto the run branch, merging `data/symbols.json` by meaning (two entries with the same form become one); pages written in parallel need a last commit that links them as prerequisites.
- Guth's Lecture Notes are not on OCW. When a lecture shows equations "from the lecture notes" on screen, the next lecture's opening slides usually summarise them; cite those slides (as for Lecture 13 → Lecture 14 slides 2–5).
- **Dark matter and structure formation** (not in 8.286) — sources chosen by the owner (2026-11-14):
  1. **MIT 8.902 Astrophysics II (Fall 2023)** — lecture notes part "Cosmology and Structure Formation", incl. why cold dark matter is needed (e.g. https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec13.pdf). Primary source. CC BY-NC-SA.
  2. **MIT 8.942 Cosmology (Fall 2001, graduate)** — Newtonian structure formation, nonlinear models, galaxy formation, N-body simulations. CC BY-NC-SA.
     **Checked 2026-11-15: not usable for lessons.** OCW has no lecture notes for the structure-formation lectures (19–25); they point to Peacock's textbook and to arXiv papers (astro-ph/0101009 has no CC licence). The only two lecture notes on OCW ("Cosmography in a Robertson-Walker universe" and "Cosmic Microwave Background Anisotropy") are marked "© Edmund Bertschinger. All rights reserved" — do not use them. The 11 problem sets carry no such notice and fall under the course's CC BY-NC-SA licence; Problem Sets 8–10 (structure formation) can serve the future problem-set pages (ROADMAP §2).
  3. **Ignacio Ferreras, *Fundamentals of Dark Matter* (UCL Press, 2025)** — CC BY-NC 4.0 (may be adapted into this CC BY-NC-SA site with attribution).
  4. **Open University (OpenLearn), *Unsolved problems in cosmology*** — CC BY-NC-SA 4.0; skip any image marked as outside the CC licence.
  5. **Yale ASTR 160 (Bailyn)** — licence unclear (CC BY-ND on one mirror): **link only, do not rewrite**, until the Terms of Use on oyc.yale.edu are checked.
  Before using any of these, check the source's own licence page and any clause about AI/text mining, and credit every source used on the page (`references` + `courtesy`). 8.902 now lives in `content/year-5/8.902` (role `cosmology`), and its pages are listed in the 8.286 "Dark matter" / "Structure formation" themes via `themes[].pages`.
- Course syllabi: every course now has MIT's lecture list (8.06 was filled in run 10). Problem sets: 1 of the 10 of 8.286 is written; exam mode (docs/PROBLEM-SETS-DESIGN.md §6) is not built.

## Git

- Commit only when asked. Branch `main`. This folder (`001Open-Cosmology-Final`, Open Cosmology with the High School) is a repository started on 2026-11-20; its remote `origin` is https://github.com/stefan123-physics/open-cosmology (since 2026-11-21), which the owner connects to Vercel and opencosmology.eu. Earlier history lives in the old `raimonvibe/open-cosmology` and `open-cosmology-highschool` repositories.
- Run `npm run build` before committing; it must show `0 error(s)`.
