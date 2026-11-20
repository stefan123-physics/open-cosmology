# Open Cosmology — the plan in one place

Last updated 2026-11-17. This document gathers every plan and decision for the site: what exists, what comes next, and in what order. Detailed specifications that already existed stay where they are and are linked; everything else is written out here.

| Part | Status | Detail |
|---|---|---|
| 1. The programme (lessons) | 414 lessons in 16 courses (2026-11-18) | §1, [ROADMAP.md](../ROADMAP.md) §1 |
| 2. Exercises, exams, labs | problem sets built (2026-11-18): one pilot set, 8.286 Problem Set 1, a draft until its blind-solve review; exam mode and labs not built | §2, [ROADMAP.md](../ROADMAP.md) §2–4, [PROBLEM-SETS-DESIGN.md](PROBLEM-SETS-DESIGN.md) |
| 3. Fact-checking script (calculation tests) | every page with numbers has a calcs file (4,181 checks); GitHub Actions + git hook | §3, [CALC_TESTS_PLAN.md](CALC_TESTS_PLAN.md) |
| 4. Symbols and notation | stage 1 and 1b built; glossary split into one page per year (2026-11-17); rest planned | §4, [SYMBOLS_PLAN.md](SYMBOLS_PLAN.md) |
| 5. Offline site and local PhET simulations | built (2026-11-15); install-as-app fixes (2026-11-17) | §5 (full plan here) |
| 6. Order of work | — | §6 |
| 7. Time estimate | ~7 weeks realistic | §7 |
| 8. Beyond the lectures: people, history and what a university adds | **new**, proposed 2026-11-17 | §8 (full plan here) |
| 9. Year IV: the advanced core (8.07, 8.08, 8.09) | **built** (runs 14 and 15, 2026-11-18/19): 8.07 21 pages, 8.08 and 8.09 complete | [YEAR-IV-PLAN.md](YEAR-IV-PLAN.md) |
| 10. Completing the programme: stars, statistics, complex analysis, 8.223, particle physics | **proposed** 2026-11-18, owner to decide | [COMPLETENESS-PLAN.md](COMPLETENESS-PLAN.md) |
| 11. Glossary of difficult words (physics, maths and academic English) | **proposed** 2026-11-19, owner to decide §12 | [GLOSSARY-PLAN.md](GLOSSARY-PLAN.md) |

---

## 1. The programme

A free, non-commercial, complete physics degree that leads to cosmology — four undergraduate years and, since 2026-11-15, a graduate Year V (8.902, then 8.962) — rewritten from MIT OpenCourseWare. Every lecture of every course gets one or more pages, in MIT's order (owner decision, 2026-11-14).

**Now (2026-11-19, 522 lessons, all reviewed, and 1 problem set):**
- **Year I:** 8.01 complete (38 lessons); 18.01 31 of 35 lectures; 18.02 31 of 35; 8.02 21 of 36.
- **Year II:** 18.03 complete; 8.03 23 of 24; 8.033 23 of 26; 18.06 31 of 35; 8.04 23 of 24.
- **Year III:** complete (8.044, 8.05 and 8.06).
- **Year IV:** 8.286 complete (44 pages for 23 lectures); 8.07 21 pages (lecture notes 1–11 and 14–16, the notes it uses); 8.08 complete (26 pages: Chapters I–IX and both supplements); 8.09 complete (38 pages for its 33 sections).
- **Year V:** 8.902 complete (21 lectures, 23 pages); Ferreras 17 pages (the rest covered elsewhere); 8.962 complete (23 lectures, 23 pages, run 16).

Most courses not marked complete are missing only their exam-review and exam lectures. Thirteen unattended lessons runs did most of this (logs in `docs/RUN-lessons-run*.md`).

**Earlier (2026-11-15, 98 pages):** 8.01 Lessons 0–17; 18.01 Lectures 1–6 and 9–14; all of 8.286 (Guth, Lectures 1–23); 8.902 Lectures 13–16 and 19 (linear growth, why cold dark matter is needed, power spectrum, spherical collapse, Press–Schechter, dark matter freeze-out); Ferreras, *Fundamentals of Dark Matter* (17 pages, the sections not covered elsewhere).

**Done (2026-11-15, evening):** an unattended lessons run added 18 reviewed pages, 8.01 Lessons 9–16 (plus a page for the Lesson 11 worked examples) and 18.01 Lectures 3–6 and 9–13 (Lectures 7–8 are the exam review and the exam); see `docs/RUN-lessons-run.md`.

**Done (2026-11-15):** Ferreras, *Fundamentals of Dark Matter*, as a textbook course in Year V (17 pages; sections covered elsewhere link there). OpenLearn checked: fact-checking and further reading only.

**Next, in order:**
1. (Done, see above.) Remaining dark matter sources: Ferreras, *Fundamentals of Dark Matter* (UCL Press, CC BY-NC 4.0), then OpenLearn *Unsolved problems in cosmology* (CC BY-NC-SA 4.0). Check each licence page, any AI/text-mining clause and every image's licence first.
2. Then year by year, maths alongside physics: 8.01 + 18.01 → 8.02 + 18.02 → 8.03 + 18.03 → 8.033 → 18.06 → 8.04 → 8.044 → 8.05 → 8.06 → 8.962.

**Checked and ruled out (2026-11-15): MIT 8.942.** OCW has no notes for its structure-formation lectures (19–25), only references to Peacock's textbook and arXiv papers without a CC licence. Its two lecture notes are marked "© Edmund Bertschinger. All rights reserved", so they must not be used. Its 11 problem sets carry no such notice (course licence CC BY-NC-SA); Problem Sets 8–10 can feed the problem-set pages (§2).

**Unchanged rules:** rewrite, never copy; cite every formula to its exact place; recompute every number; independent review before `status: reviewed`; every new symbol gets a meaning in `data/symbols.json` (see AGENTS.md).

## 2. Exercises, exams and labs

Not started. Full plan in [ROADMAP.md](../ROADMAP.md); in short:

- **Problem sets** (`kind: problems`): one page per MIT problem set, rewritten with our own numbers, hidden hints, full step-by-step solutions, and an `<Answer>` box that checks a typed number with a tolerance and units.
- **Practice exams** (`kind: exam`): timer, solutions hidden until "Finish", automatic marking; a course counts as completed when its lessons are studied and its final practice exam is passed.
- **Labs** (`kind: lab`), in this order: a browser-only data-analysis tool (paste CSV, plot with error bars, fit, uncertainty) and a "Measurement and uncertainty" unit → real-data cosmology labs (Hubble 1929, Type Ia supernovae, COBE/FIRAS CMB spectrum, galaxy surveys) → virtual labs with realistic noise and phone experiments (phyphox), course by course.

## 3. Fact-checking script (calculation test suite)

**Problem it solves.** Numbers are checked once, by the review agent, with throwaway scripts; the checks are recorded only as prose in `reviews/`. A later edit — a constant, one step of a worked example — can silently break an old result. Nothing today recomputes a number (`content:check` checks structure only).

**Plan** (full specification: [CALC_TESTS_PLAN.md](CALC_TESTS_PLAN.md)):
1. **Inventory.** The shared scanner (`scripts/scan-content.ts`, already used for symbols) lists every number in worked examples, quiz text, plot captions and formulas, skipping citations, years and lecture numbers, and reports which numbers have no stored calculation.
2. **Calculations as data.** One file per page, `calcs/<course>/<slug>.yaml`; each entry has an id, where it sits on the page, inputs with units, a formula, the expected value exactly as printed, a tolerance (default from the printed digits), the source (`cite` + `at`) and its origin (`mit`, `page-own`, `later-data`, `slip`). Shared constants live once in `calcs/constants.yaml`, Guth's "notch" included.
3. **One pytest test** recomputes every entry with units (pint, safe expression parser), checks dimensions and value, checks the printed value still appears on the page, checks quiz answers match the marked choice and no other, and checks the citation key exists.
4. **Runs automatically:** `npm run calc:test`, a pre-commit hook, and a GitHub Actions workflow (content check + calculation tests + type check on every push). The Vercel build stays Node-only.
5. **Pilot:** `age-of-the-universe`, `horizon-distance`, `matter-radiation-equality`; then all of 8.286 (seeded from the reviews' arithmetic sections); then 8.01 and 8.902; then required for new pages (AGENTS.md rule 7 becomes "record every number in `calcs/`").

**Status (2026-11-15): pilot built.** 33 calculations on the three pilot pages, all passing; run with `npm run calc:test` (Python in `.venv`, see `scripts/calc-test.mjs`). The first run found a real rounding slip that the review had missed (`matter-radiation-equality`: 9.13 → 9.14 × 10⁻⁵), now fixed. **Update (same day):** GitHub Actions (`.github/workflows/checks.yml`: content check, type check, calculation tests on every push) and a pre-commit hook (`.githooks/pre-commit`, enabled by `npm install`) are in place. 13 of the 44 8.286 pages now have calculation files (Lectures 3–12 plus the pilot pages), 87 checks, all passing; this batch found no page errors. A third batch (Lectures 13–16, 7 more pages, 145 checks in total) found a second real error: `radiation-dominated-universe` called 4.47 × 10⁸ kg/m³ "about 450 times" the density of water instead of about 450,000 times (fixed). A fourth batch (Lectures 17–19, 6 pages, 207 checks) added an `integrate(...)` function for luminosity distances and ages, and found a last-digit rounding slip on `age-with-vacuum-energy` (0.5274 → 0.5275, fixed). **8.286 is now complete**: 37 pages have calculation files (274 checks, all passing); the other 7 (`closed-universe-cycloid`, `false-vacuum`, `friedmann-equation`, `grand-unified-theories`, `higgs-field`, `non-euclidean-geometry`, `sphere-metrics`) work symbolically and have no numbers to check. Lectures 20–23 and 1–2 found no further errors. In all, the tests found three errors the reviews had missed (two substantive, one in the fourth digit). **Formula checks (added 2026-11-15):** numbers alone don't test the formulas, so the same test now also takes `limit` (a formula must approach its flat-space or early-time form), `identity` and `units` entries — see CALC_TESTS_PLAN.md §6. **Built:** 30 formula checks on 10 pages (304 tests, all passing); 12 of 12 deliberately inserted mistakes were caught. **8.01 and 8.902 done** (12 pages, 138 checks, no wrong numbers; one unclear bracket on `dark-matter-freeze-out` clarified): every page with numbers now has a calculation file, 452 tests. **Numbers inventory and value registry built** (`npm run scan -- --numbers`, `calcs/values.yaml`): 1902 result-like numbers, 56% covered; 146 quoted values of H₀, the age, T_CMB, Ω_m, Ω_vac, n_s and σ₈, all registered with a role, none wrong. **Calculation files required (2026-11-15):** `content:check` warns about any page with result-like numbers but no `calcs/<course>/<slug>.yaml`; quoted figures that cannot be recomputed (a measurement, a count of parameters) are recorded as `kind: fact` with their source, and a later measurement the page cites only in words uses `source: {ref: …}`. `grand-unified-theories` and `higgs-field` got such files; every page with numbers is now covered (459 tests).

## 4. Symbols and notation

Full specification and status table: [SYMBOLS_PLAN.md](SYMBOLS_PLAN.md).

**Built:** `/symbols` site page (owner decision: a site page like `/about`, not a lesson) with a Greek alphabet primer and look-alike symbols; 128 entries in `data/symbols.json` with meanings per page or course, including the letters a, H, z, G, c, k, T and 56 named quantities (H₀, ρ_c, Ω_m,0, δ_c, σ₈ …); tap-to-explain popups; "Symbols on this page" (the keyboard and screen-reader route); "In words" under every formula; read-aloud names; `npm run scan`; checks in `content:check`; an independent review of all meanings (`reviews/symbols.md`, all findings fixed).

**Planned, in order:** "new in this lesson" marks; "where it's introduced" links (and a check that a symbol is introduced on the prerequisite path before use); per-formula meaning overrides; units and typical values in popups; a notation-conventions section; search and filters on `/symbols`; symbol practice. With 18.01: formula reader, order-of-operations stepper, powers-and-roots playground, spaced-repetition flashcards. Done: every page now has a meaning for each letter it uses (page-scoped where a letter changes meaning, e.g. a = acceleration vs a(t) = scale factor), checked by content:check.

## 5. Offline site and local PhET simulations (new)

### Goal

The whole site, including the interactive parts, works without an internet connection once it has been saved, and the PhET simulations are served from the site itself instead of from phet.colorado.edu — with PhET's attribution exactly as required.

### What exists now (checked 2026-11-15)

- **PhET:** five simulations, all on 8.01 pages, embedded by `components/PhET.tsx` as a click-to-load iframe from `https://phet.colorado.edu/sims/html/<id>/latest/<id>_all.html` (the id is derived from the title in `lib/mdx.tsx`):

  | Page | Simulation | Single-file HTML (English / all languages) |
  |---|---|---|
  | `kinematics-2d` | Projectile Motion | 4.4 MB / 4.8 MB |
  | `newtons-laws` | Forces and Motion: Basics | 4.8 MB / 5.2 MB |
  | `position-and-velocity-1d` | Calculus Grapher | 2.8 MB / 3.0 MB |
  | `universal-gravitation` | Gravity and Orbits | 3.4 MB / 5.0 MB |
  | `vectors` | Vector Addition | 2.5 MB / 2.8 MB |

  Total ≈ 18 MB (English) or ≈ 21 MB (all languages).
- **Licence (PhET's licensing page, read 2026-11-15):** the HTML simulation files are CC BY-NC 4.0, which "permits free use and redistribution for non-commercial purposes". Required: the attribution "Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC BY-NC 4.0 (https://phet.colorado.edu)." as close as possible to the point of use, unmodified (translation allowed); the PhET logo inside the simulation must stay visible and unaltered; no ads or monetisation (PhET counts ad-supported sites as commercial). The site already prints the attribution verbatim and is ad-free.
- **Offline support:** none. There is a web app manifest (`app/manifest.ts`, icons in `public/icons`) but no service worker.
- **Assets:** fonts (`next/font`) and KaTeX's CSS and fonts are already bundled into `/_next/static`; graphs (mathjs) run in the browser; the search index is a static `/search-index.json`. The only third-party runtime content is the PhET iframes.
- **Size:** the current build is ≈ 40 MB (≈ 32 MB of HTML for 77 routes plus 8 MB of static files). At ~400 pages that grows to roughly 200 MB, so caching the whole site by default would be too heavy for phones.

### Plan

**Step 1 — Host the PhET simulations on the site.**
- Add `public/phet/<id>_<version>_en.html` (English single-file builds; add other languages only if the site gets translations). Pin the **version number**, not `latest`, so the site does not change underneath a lesson; record each file's version, source URL, download date and SHA-256 in `public/phet/manifest.json`.
- Recommended: commit the files to the repository (≈ 18 MB) so builds work without network access and are reproducible. Alternative: a `npm run phet:fetch` script that downloads the pinned versions at build time and verifies the checksums (lighter repository, but the build then depends on phet.colorado.edu).
- Never edit the files (the logo and the simulation must stay unaltered).
- `components/PhET.tsx`: load the local file; keep click-to-load (it saves 3–5 MB per page view); change "Loads from phet.colorado.edu" to "Runs on this site"; keep the attribution text exactly as it is; keep the link to the simulation's PhET page; "Open full screen" points to the local file.
- `content:check`: every `<PhET>` must have a local file listed in `public/phet/manifest.json`.
- Update `/about` ("Sources") and `docs/CONTENT_GUIDE.md`: simulations are copies of PhET's files, unmodified, with the version listed.

**Step 2 — A service worker for offline use.**
- Hand-written `public/sw.js` plus a small client component that registers it (production only). No extra framework, so it stays easy to audit.
- A post-build script generates the list of files to cache (`/sw-manifest.json`): every route (from `getSite()`), its React Server Component payload (needed for in-app navigation between pages), every file in `/_next/static`, the icons, `/search-index.json` and the PhET files, each with a content hash so updates are detected.
- Caching strategy:
  - **Always cached (app shell, small):** home, `/courses`, course pages, `/symbols`, `/about`, the offline page, all `/_next/static` files, `/search-index.json`, icons.
  - **Lessons:** network first, falling back to the cache; every lesson the reader opens is saved automatically.
  - **Save for offline** (reader's choice): a button on each course page — "Save this course for offline" — and one in Reading options — "Save the whole site" (shows the download size first). PhET files are included when their course is saved.
  - **Offline page:** a friendly page when a not-yet-saved page is requested offline, listing what is saved.
- Updates: a new build changes the cache version; old caches are removed on activation; a small notice "A new version is available — reload" instead of silently switching mid-lesson.
- Storage: request persistent storage (`navigator.storage.persist()`) when the reader saves a course; show how much is stored and allow "Remove offline copies". Nothing leaves the device, in line with the site's privacy rules (progress stays in `localStorage`).

**Step 3 — Accessibility and honesty.**
- Every new control (save buttons, update notice) works by keyboard and is announced to screen readers; use rem/em text sizes and the existing colours.
- Read-aloud uses the browser's own voices; some (for example Chrome's online "Google" voices) need a network connection. The Reading options panel should say so and prefer local voices when offline.
- Links to MIT OpenCourseWare, arXiv and PhET's own pages still need a connection; mark them as external rather than pretending they work offline.

**Step 4 — Testing.**
- Build with `npm run build`, serve the production build, and check in the browser with the network switched off (DevTools "Offline"): home, a course, a saved lesson, a not-yet-saved lesson (offline page), search, `/symbols`, the symbol popups, "In words", graphs, read-aloud, and all five PhET simulations.
- Check an update: change a page, rebuild, confirm the update notice and the new content.
- Check storage on a phone-sized screen (320 px) and with large text.
- Check that the PhET attribution is shown next to every simulation and that the simulation files are byte-identical to PhET's (SHA-256).

**Step 5 — Later.** Background update of saved courses; an install prompt (the manifest already exists); offline copies of the future lab datasets (§2) under their own licences.

### Decisions (owner, 2026-11-15)

1. PhET files committed to the repository. 2. English only (≈ 18 MB). 3. Saving only on request.

### Status (2026-11-15): steps 1–4 built

- **PhET:** the five simulations run from `public/phet/` as unmodified, version-pinned copies (Projectile Motion 1.0.36, Forces and Motion: Basics 2.6.7, Calculus Grapher 1.1.3, Gravity and Orbits 1.6.30, Vector Addition 1.2.6); each was downloaded from `phet.colorado.edu/sims/html/<id>/latest/` and confirmed byte-identical to the version-pinned URL. `public/phet/manifest.json` records version, source, date and SHA-256; `content:check` fails if a `<PhET>` has no local copy or a file was changed; `.gitattributes` keeps the files byte-exact. The button says "Runs on this site · PhET version …"; the attribution is unchanged.
- **Offline:** `public/sw.js` (hand-written, production only). Pages are fetched fresh when online; copies of visited pages (newest 60) and of saved courses are the fallback offline; files are cache-first; React Server Component requests are never cached (Next.js falls back to a normal page load offline). Saving on request: "Save this course for offline" on course pages and "Save the whole site" in Reading options (with sizes: 8.01 ≈ 29 MB with its simulations, the whole site ≈ 59 MB), plus "Remove offline copies" and the space used; `/offline` lists what is saved. `/offline-manifest.json` lists pages, simulations and every script/style file of the build (some, such as the graph library, load only on demand).
- **Tested** on the production build with the server stopped: a saved lesson with its formulas, fonts and graph; a PhET simulation from the cache; search; an unsaved page (the offline page, listing saved pages); the controls at 360 px in dark mode.
- **Update notice and background refresh (built later the same day):** one version per build (Vercel's commit, or a timestamp locally; `next.config.ts`) is baked into the site's scripts and `/offline-manifest.json`. `components/offline/UpdateNotice.tsx` compares them shortly after load, when the tab becomes visible, when the connection returns and every 30 minutes: a newer deployment shows "A new version of Open Cosmology is available" (Reload / Later, announced politely), and saved copies of an older version are re-downloaded in the background (since 2026-11-17 gently: at most once a day, one page at a time in idle moments, and not on mobile data, a slow connection or with data saver on; until then the older copies keep working), with script and style files the new version no longer uses removed. Reading options shows how many pages are saved, when, and whether they are up to date, with an "Update offline copies" button. Tested with three production builds: the open tab got the notice; Later kept it hidden for that version; the saved copies moved to the new version with no stale files. GitHub and Vercel alone cannot do this: the offline copies live in each reader's browser, so the comparison and the refresh run there; Vercel only supplies the version.

## 6. Order of work

1. **Fact-checking script** (§3) — running automatically; all of 8.286 covered (three page errors found and fixed), formula checks built; further checks of CALC_TESTS_PLAN.md §7 built (every graph checked automatically, simple solutions, constants against CODATA; two small slips found and fixed); the numbers inventory and the value registry built (146 quoted values, all with a role); 8.01 and 8.902 covered too; calculation files now required for pages with numbers (a `content:check` warning; quoted figures as `kind: fact`).
2. **Offline site and local PhET** (§5) — built (2026-11-15): local, checksummed PhET copies; service worker with saving on request; new-version notice and background refresh of saved copies.
3. **Content:** Year IV is written (8.07 in run 14, 8.08 and 8.09 in run 15, see [YEAR-IV-PLAN.md](YEAR-IV-PLAN.md)); 8.962 written in run 16, so every course in the order of work has its lectures; next: decide whether exam-review lectures get pages, then problem sets (§2) and the later plans (§8). Each lesson with its calculation file, review and symbol meanings.
4. **Symbols, next items** (§4): "new in this lesson", "where it's introduced", per-formula meanings — small, done alongside content.
5. **Exercises, exams, labs** (§2): the data-analysis tool and uncertainty unit first.

## 7. Time estimate (2026-11-15)

Based on the commit history and building on the Claude Max plan, whose usage resets in 5-hour windows (plus a weekly limit that is not visible from here).

**History.** Work comes in bursts of about an hour, one per 5-hour window: 14 Nov 11:42–13:50 (~20 pages plus features), 18:20–19:15 (12 pages), 23:05–23:55 (19 pages); 15 Nov ~04:15–05:40 (4 pages plus the symbols feature), 09:11 (planning). Content-only windows gave **12–20 pages**; with the stricter process used for 8.902 (PDF pages read as images, independent reviewer agent, fixing its findings) a window gives about **5–8 pages**. The unattended lessons run of 15 Nov (20:17–21:45) wrote **18 pages** with the full process (calcs, independent review, fixes) for year-I 8.01 and 18.01, which are shorter than 8.902: about **12 pages an hour** for foundation courses, with reviews running in parallel to writing.

**Remaining work, in windows (realistic case):**

| Work | Size | Windows |
|---|---|---|
| Lessons | ~424 MIT lectures (all lecture lists filled), about 350–500 pages | ~53 |
| Lecture lists for 8.01 and seven physics courses | 8 courses | ~2 |
| Fact-checking script (pilot, backfill, ~15% extra per page) | — | ~13 |
| Offline site and local PhET (§5) | — | ~3 |
| Remaining symbol features (§4) | — | ~4 |
| Problem sets (~10 per course × 14) | ~140 pages | ~35 |
| Practice exams and exam mode | ~35 pages | ~11 |
| Labs (data tool, uncertainty unit, ~25 lab pages) | — | ~18 |
| Fixes, deploys, polishing (+10%) | — | ~14 |
| **Total** | | **~153** |

**In days**, building every day (at most 4–5 windows a day; about 3 a day assumed on average because of sleep and the weekly limit):

| Scenario | Pace | Windows | Days |
|---|---|---|---|
| Optimistic | 15 pages/window, 4 windows/day | ~90 | ~23 days (3½ weeks) |
| Realistic | 8 pages/window with full review, 3 windows/day | ~153 | ~51 days (7 weeks) |
| Cautious | 5 pages/window, weekly limit allows 2–3 windows/day | ~225 | ~90 days (13 weeks) |

**Lessons only** (the core degree, without exercises, exams and labs): ~68 windows, about **3–4 weeks** at 3 windows a day.

**To go faster:** keep content windows free of feature work; run the reviewer and source reading on a cheaper model (Sonnet) to save the weekly budget for writing; batch 4–6 lectures of one course per window; build the fact-checking pilot early. **Re-estimate after one week** of daily building, when the weekly limit's real effect is known.

## 8. Beyond the lectures: people, history and what a university adds (proposed 2026-11-17)

### Why

The lessons follow MIT's lectures closely, but a university course gives more than the lectures: who the people behind the ideas were, how we came to know things, where the field is still open, and the habits of the subject (estimating, computing, arguing from evidence). These make study more interesting and help the material stick. None of it exists on the site yet.

### People and history (first priority)

The lessons already name about **210 real people** (counted 2026-11-17 against a list of ~350 scientists and mathematicians; a few hits such as "Green", "White", "Lee" and "Jordan" are ordinary words or terms). About 170 are no longer living, about 40 living. The full programme will probably reach **300–400 people**.

- **Most mentioned:** Newton (77 lessons), Guth (62), Hubble (55), Einstein (44), Zwiebach (40), Fourier (36), Friedmann (35), Maxwell and Planck (32 each).
- **Rarely or never mentioned, but worth a card:** Noether, Chandrasekhar, Zwicky, Rubin, Lemaître, Gamow, Alpher, Humason, Slipher; Henrietta Leavitt is not mentioned at all.
- **Living people:**
  - lecturers and authors: Guth, Zwiebach, Mattuck, Strang, Auroux, Ferreras, Greytak, Jerison, Vogelsberger, Harrow, Detmold;
  - scientists: Penrose, Peebles, Riess, Perlmutter, Mather, Smoot, Linde, Steinhardt, Tegmark, Weiss, Thorne, Silk, Frenk, Milgrom, Mavalvala, Kardar, Jaffe.

**Design** (built like the symbols glossary, §4):

- **`data/people.json`**, one entry per person:
  - id, name, years, field;
  - a short biography of 3–5 sentences in our own words;
  - key contributions;
  - an optional portrait (file, source, licence);
  - sources used for fact-checking.
- **A scanner** finds names in lessons (as `scripts/scan-content.ts` does for symbols). `content:check` warns about a name with no entry, and fails on an entry whose dates or portrait licence are missing.
- **In lessons:**
  - a "People on this page" list next to "Symbols on this page";
  - tapping a name opens a small card;
  - an optional `<Callout kind="person">` ("Who was Friedmann?") where the person matters most.
- **Pages:** `/people` (index) and one page per person, listing every lesson that mentions them, split if it grows large, as `/symbols` was.
- **A timeline of cosmology** generated from the same data, linking into the lessons.
- **Dates** are checked like numbers: birth and death years and discovery years as `kind: fact` entries.

**Rules:**

- **Living people:** public, professional work only; no private details and no photos.
- **Fair credit:** include people often left out (Leavitt, Rubin, Payne-Gaposchkin, Noether, Bose, Chandrasekhar), and disputed credit where it exists (Lemaître and Hubble).
- **Text:** biographies are written in our own words. Facts (dates, who did what) are not copyrightable. Other people's sentences are, including Wikipedia's: its CC BY-SA text cannot be mixed into this CC BY-NC-SA site. Wikipedia, the Nobel Prize site, MacTutor and AIP oral histories are for fact-checking only.
- **Portraits** (and other images), from safest to not allowed:

| Status | Use it? |
|---|---|
| Public domain: in the EU, photographer died over 70 years ago; in the US, published before 1931; US federal works such as most NASA images | Yes, with a source note |
| CC0 | Yes |
| CC BY, or CC BY-NC (this site is non-commercial) | Yes, with the credit line exactly as requested |
| CC BY-SA (many ESA/Planck images, much of Wikimedia Commons) | Yes, but the image keeps its own licence, marked next to it |
| CC BY-ND | Only unchanged: no cropping or labels |
| "All rights reserved", "Courtesy of …", most Nobel Foundation and press photos, most photos of living people | No |

  A Wikimedia Commons file is used only when its own page says public domain or names a CC licence, and that licence is recorded in the data (as for PhET in §5). Otherwise a drawn initial is shown instead of a photo.

### Copyright for every addition in §8

The same rules as for the lessons apply, with more kinds of source. In short: **facts, numbers and data are free to use; other people's sentences, figures and photos are not, unless their licence says so.** Before using any source, read its own licence page and any clause about AI or text mining (as AGENTS.md requires), record the licence next to the item (as for PhET in §5), and credit it on the page.

| Source | Licence (check each item) | How we may use it |
|---|---|---|
| MIT OpenCourseWare | CC BY-NC-SA 4.0, except material marked "All rights reserved" or "Courtesy of …" | Rewrite and adapt, as for lessons |
| OpenLearn (*Unsolved problems in cosmology*) | CC BY-NC-SA 4.0; some images are excluded and marked as such | Fact-checking and further reading; adapt text only with attribution, never the excluded images |
| Ferreras, *Fundamentals of Dark Matter* | CC BY-NC 4.0 | Adapt with attribution (already a course on the site) |
| NASA (COBE, WMAP, Hubble) | US government works are generally not copyrighted; NASA's logos and insignia are protected, and some images on NASA sites belong to others | Images and data with a "NASA" credit; never the logos; check that an image is NASA's own |
| ESA (Planck, Gaia) | Many images are CC BY-SA 3.0 IGO; others carry ESA's standard licence | Image keeps its own licence, marked next to it; data from the Planck Legacy Archive with the acknowledgement ESA asks for |
| LIGO / GWOSC data | CC BY 4.0 | Use with credit |
| SDSS and other survey data | Free to use; an acknowledgement is requested | Use with the requested acknowledgement |
| Journal papers and arXiv preprints | Usually all rights reserved (arXiv's default licence gives no reuse rights); some are CC BY | Cite and summarise in our own words; **redraw** figures from the published numbers, never copy them |
| Old papers and photos | US: published before 1931 is public domain (Hubble's 1929 paper); EU: author died more than 70 years ago (Hubble died in 1953, so his work is public domain there since 2024) | Use with a source note once the status is checked for both |
| Talks and videos (YouTube, university channels) | The video's owner keeps all rights | **Link only.** Embedding would load another site's scripts and cookies, which the CSP and `/privacy` rule out |
| Books | All rights reserved | Recommend and cite; no quotations beyond a short phrase |
| Quotations from scientists | Short quotations with attribution are allowed (quotation right, fair use) | One sentence at most, in quotation marks, with the source |
| Code libraries for notebooks | Pyodide MPL 2.0, NumPy and SciPy BSD, Plotly MIT | Fine to bundle with this MIT-licensed code; keep their licence files |

### Other things a university course has

Problem sets (built as a pilot), exams and labs are covered in §2 and ROADMAP.md and are not repeated here.

#### How we know

- **What:** a short page for each key experiment or observation:
  - Hubble's plates and Leavitt's Cepheids;
  - Penzias and Wilson, COBE (the black-body spectrum and the first ripples), WMAP and Planck;
  - the two supernova teams of 1998 (dark energy);
  - galaxy rotation curves (Rubin and Ford, the 21 cm surveys);
  - Big Bang nucleosynthesis measurements;
  - LIGO (gravitational waves, and later the "standard siren" Hubble constant).

  Each page answers: what was measured, how, what could have gone wrong (the systematic errors), and how sure we are now.
- **Why:** lectures state results; a university also teaches where the numbers come from. This is what turns "the universe is 13.8 billion years old" from a fact to memorise into something a student can defend.
- **Design:**
  - a new page type outside `content/<year>/` (no MIT lecture behind it, like `/symbols`), for example `/how-we-know/<slug>`;
  - each page links to the lessons that use the result, and those lessons link back ("How do we know?");
  - graphs drawn by our own `<Plot>` from published numbers, which also keeps them accessible;
  - numbers checked in `calcs/`, with `later-data` sources for post-2013 values, and quoted values (H₀, age, T_CMB) taken from `calcs/values.yaml`.
- **Copyright:** mission images from NASA (public domain) or ESA (their own licence, marked). Figures from papers are redrawn from the numbers, never copied.
- **Size:** about 150–250 lines of code (page type, cross-links), about 30 pages of writing.

#### Open questions

- **What:** a "frontier" page per topic:
  - the Hubble tension;
  - what dark matter is (particles, searches, MOND as the alternative);
  - dark energy (constant or changing);
  - inflation and its alternatives, and the multiverse debate;
  - the matter–antimatter asymmetry;
  - the first stars and the cosmic dawn (21 cm).
- **Why:** courses end with what is still unknown; it shows students that the subject is alive and where research is heading.
- **Design:**
  - every page carries a "Last checked" date, and every post-2013 statement is marked as a later development, as in the lessons;
  - each page states the competing explanations fairly, says which observations would decide between them, and links to the lessons and "How we know" pages that the reader needs first;
  - a yearly review reminder goes in OWNER-TODO.md, because these pages age.
- **Copyright:** OpenLearn *Unsolved problems in cosmology* (CC BY-NC-SA 4.0) for fact-checking. Results are cited to papers and described in our own words.
- **Size:** about 50–100 lines of code, about 15 pages.

#### Common misconceptions

- **What:** a short `<Callout kind="misconception">` in lessons where students typically go wrong. Examples:
  - "the Big Bang was an explosion at a point in space";
  - "galaxies move through space";
  - "the observable universe is 13.8 billion light-years in radius" (it is about 46);
  - "redshift is a Doppler shift";
  - "heavier objects fall faster";
  - "current is used up in a circuit";
  - "a measurement disturbs the system, which is why there is uncertainty".
- **Why:** lecturers spend real time on these, and naming the wrong idea helps learners notice it in themselves.
- **Design:**
  - one new callout kind, styled like the others, read aloud like the others, and shown in focus mode;
  - `content:check` treats it like any callout;
  - optionally, a quiz question per misconception.
- **Copyright:** our own text; the physics-education literature (for example the Force Concept Inventory studies) is used to choose the misconceptions, never copied.
- **Size:** about 30–60 lines of code; 1–3 per lesson where they fit, added during normal lesson runs.

#### Estimation problems

- **What:** order-of-magnitude puzzles, such as:
  - "how many CMB photons hit your hand each second?";
  - "how much does the Sun's mass change in your lifetime?";
  - "how far is the nearest galaxy in Earth–Sun distances?".

  The reader commits to a guess, then the answer is revealed step by step, as in the worked examples.
- **Why:** estimating builds physical intuition and is a standard skill in physics degrees (the "Fermi problem").
- **Design:**
  - a `<Estimate>` component with a guess field (kept in the browser only) and a reveal;
  - every number checked in `calcs/` like the worked examples;
  - about 5 per course, at the end of a lesson or as a set on the course page.
- **Copyright:** our own problems and numbers; constants from CODATA (free).
- **Size:** about 150–300 lines of code.

#### Computation

- **What:** small runnable examples for each topic:
  - integrate the Friedmann equation and plot a(t);
  - fit Hubble's law, or a supernova curve, to data;
  - simulate a pendulum, or a random walk;
  - find the oscillator's eigenvalues.
- **Why:** physics degrees now teach computation throughout; running and changing a model shows more than a fixed graph.
- **Design, two options:**
  - **JavaScript** in the page: small, works offline, fits the CSP, about 800 lines for an editor and a sandboxed runner;
  - **Python** in the browser (Pyodide): what students meet at university, but a download of about 10 MB, a CSP change (`'wasm-unsafe-eval'` already allowed for search) and offline handling, about 3,000 lines.

  Start with JavaScript, and decide on Python later (OWNER-TODO §7).
- **Copyright:**
  - the notebooks are our own code, MIT-licensed;
  - libraries keep their licences (Pyodide MPL 2.0, NumPy and SciPy BSD);
  - data as in "Capstone project" below.
- **Size:** 800–3,000 lines of code; 1–2 notebooks per topic.

#### Course learning outcomes

- **What:** at the top of each course, a list of what you can do after it ("compute the age of a flat universe from H₀ and Ω_m"). Each outcome is linked to the lessons that teach it and to the quiz questions that test it.
- **Why:** standard in university syllabi. It gives learners a checklist, and the site's progress tracking can show which outcomes are already covered by passed quizzes.
- **Design:**
  - an `outcomes` list in `_course.json`, each outcome with the slugs of its lessons and quiz questions;
  - `content:check` verifies that every link exists;
  - the course page shows them with ticks from the reader's own progress (localStorage only).
- **Copyright:** our own wording; where MIT's course page lists learning objectives (CC BY-NC-SA), they may be adapted with credit.
- **Size:** about 150–250 lines of code; about 10 outcomes per course.

#### Concept map

- **What:** a drawn map of how courses and lessons depend on each other, from 8.01 to the early universe, with the path to any lesson highlighted.
- **Why:** shows the big picture that a degree programme gives, and helps learners see why a foundation lesson matters.
- **Design:**
  - built from the existing `prerequisites` and `leadsTo` data, so it needs no new content;
  - an SVG layout per course plus an overview of the courses, with pan and zoom;
  - keyboard navigation, and a text version (the reading path as a nested list), as for every diagram on the site.
- **Copyright:** our own data and drawing.
- **Size:** about 400–700 lines of code.

#### Talks and further reading

- **What:** "If this caught your interest" at the end of a topic:
  - two or three public lectures (MIT, Perimeter Institute, Royal Institution, CERN);
  - popular books;
  - review articles for the curious (Living Reviews, the Annual Reviews, Physics Today).
- **Why:** a good course points beyond itself; this is where enthusiasm turns into further study.
- **Design:**
  - a `furtherReading` field in the lesson frontmatter or on the course themes: title, kind, link and one line on why it is worth it;
  - links only, checked for dead links by a script;
  - free and openly available items first.
- **Copyright:** links and our own one-line descriptions only. No embedded videos (other sites' cookies; see the table above), and no book quotations.
- **Size:** about 100–150 lines of code; a few links per topic.

#### Philosophy and method

- **What:** a short strand of 5–8 pages:
  - what makes a good theory (prediction, falsifiability, simplicity);
  - what counts as evidence in cosmology, where there is only one universe to observe;
  - fine-tuning and anthropic arguments;
  - measurement and uncertainty;
  - how consensus forms, with dark energy (1998) as a case study.
- **Why:** Guth's lectures touch on these questions (the multiverse, the anthropic principle), and a degree usually gives students a way to think about them.
- **Design:** pages of the same type as "How we know", linked from the lessons that raise the question; no new components.
- **Copyright:** our own text. Philosophers and scientists are cited with at most a one-sentence quotation; the Stanford Encyclopedia of Philosophy is used for fact-checking, not copied.
- **Size:** about 50 lines of code; 5–8 pages.

#### Capstone project

- **What:** a guided final project. The flagship: **estimate the age and expansion of the universe from public supernova data**:
  1. load the data;
  2. plot the Hubble diagram;
  3. fit Ω_m and Ω_Λ;
  4. compare with Planck.

  A second project could use real Planck spectra or gravitational-wave events.
- **Why:** a degree ends with independent work that ties the courses together; this one uses mechanics, statistics, relativity and cosmology at once.
- **Design:** builds on the data-analysis tool planned in §2, with step pages, checks against expected results, and a short write-up the learner can save.
- **Copyright:**
  - **public datasets only**, each with its licence recorded: the Pantheon+ supernova release (check its licence file), the Planck Legacy Archive (ESA's terms, with acknowledgement), GWOSC (CC BY 4.0);
  - the data stays on this site (no third-party requests) or is fetched only by the reader's choice, with `/privacy` updated first.
- **Size:** 1,000–2,000 lines of code (mostly the data tool); 1–2 projects.

#### Careers

- **What:** one light page on where a physics or cosmology education leads:
  - research;
  - data science and software;
  - instrumentation and engineering;
  - teaching;
  - science communication and policy.

  It includes the skills that each path values and links to the parts of the site that build them.
- **Why:** universities offer careers advice, and learners studying alone rarely get it.
- **Design:** a single page, no new components; refreshed with the yearly review of the "Open questions" pages.
- **Copyright:** our own text; statistics (for example from the American Institute of Physics) cited as facts with their source.
- **Size:** about 100 lines; 1 page.

### Size

- **People feature:** 1,000–1,400 lines (data schema, scanner, popups, lists, pages, checks), plus 300–500 for the timeline.
- **All of §8 together:** about **5,000–9,000 lines**, on top of the site's ~14,800 lines of code today (2026-11-17). The symbols feature, for comparison, is about 1,150.
- **Writing:** the biographies are the biggest job: 210 now, 300–400 later, about 120 words each.

### Suggested order

1. **People** (data, cards, `/people`, then the timeline). It builds on the symbols machinery and enriches every lesson at once.
2. **How we know** and **Common misconceptions**: mostly writing, and the most value for a learner.
3. **Open questions**, **Talks and further reading**, **Learning outcomes**.
4. The rest when the lessons are further along: concept map, estimation, computation, capstone, careers, philosophy.

The decisions this needs from the owner are in OWNER-TODO.md §7.

## Decisions log

| Date | Decision |
|---|---|
| 2026-11-14 | Complete four-year programme, every lecture of every course; maths courses added; dark matter sources chosen (8.902, 8.942, Ferreras, OpenLearn, Yale link-only). |
| 2026-11-15 | `/symbols` is a site page like `/about`, not a lesson. |
| 2026-11-15 | Calculation tests and symbols planned now rather than when the site is finished; both share one content scanner. |
| 2026-11-15 | 8.942 ruled out for lessons ("All rights reserved" notes, no structure-formation notes); its problem sets kept for future problem pages. |
| 2026-11-15 | Offline site and local PhET simulations added to the plan (§5); three decisions pending. |
| 2026-11-15 | Five-year structure: 8.902 and 8.962 (graduate courses on MIT OCW) moved to a new graduate Year V, 8.902 first; Year IV is 8.286. No lesson text, URL or saved progress changed. Share image template updated; the PNGs still need regenerating with the brand fonts (see OWNER-TODO). |
| 2026-11-15 | Formula checks added to the fact-checking plan: limit (e.g. curvature → 0 gives flat space), identity and units checks, starting with the geometry pages. |
| 2026-11-15 | Five further checks added to the fact-checking plan (CALC_TESTS_PLAN.md §7): every graph checked automatically, the simple solutions plugged back into the Friedmann equation, constants against CODATA, a registry of quoted values (H₀ has seven on purpose), and later units of every formula. Cosmological parameters are checked against each page's cited source, not against astropy's latest values. |
| 2026-11-15 | Calculation-test pilot built (§3); a local `.venv` holds the Python tools; the Vercel build stays Node-only. |
| 2026-11-15 | Before launch: a privacy page (`/privacy`), an AI-assistance note on About, a "Report a mistake" link on every lesson (GitHub issue), security headers with a same-site-only CSP, and a split licence: content CC BY-NC-SA 4.0, code MIT License. |
| 2026-11-15 | Ferreras, *Fundamentals of Dark Matter* (UCL Press 2025, CC BY-NC 4.0) added as an own course in Year V after 8.902, as a textbook course (new `kind: textbook`, `coveredBy` syllabus links). Every chapter is accounted for, but only material not already on the site gets pages (17 pages); chapters 5 and 8.1–8.2 link to 8.286/8.902. OpenLearn *Unsolved problems in cosmology* (CC BY-NC-SA 4.0): fact-checking and further reading only. |
| 2026-11-17 | `/symbols` split into an index plus one page per year, each with the meanings used in that year; "Used in" lists load on demand. The single page had reached Vercel's 20 MB limit (PR #43). |
| 2026-11-17 | §8 added: people and history first (data file, cards, `/people`, timeline), then "How we know", misconceptions and the other university extras; decisions pending in OWNER-TODO.md §7. |
| 2026-11-17 | Lessons run 7: 8.05 Lectures 6–17 (12 pages, PRs #40–#42). |
| 2026-11-17 | Lessons run 8: 8.05 Lectures 18–26 (9 pages), completing 8.05; read-aloud says signs used as labels (J₊, f(1⁺)), double factorials and a factorial after brackets, and p_i as "p sub i" (log: docs/RUN-lessons-run-8.md). |
| 2026-11-18 | Lessons run 9: 8.902 Lectures 1–12, 17, 18, 20 and 21 (17 pages), completing 8.902; many slips in the student-written notes corrected in brackets (log: docs/RUN-lessons-run-9.md). |
| 2026-11-18 | Owner decision: Year IV gets MIT's advanced core, 8.07 Electromagnetism II (Guth, Fall 2012), 8.08 Statistical Physics II and 8.09 Classical Mechanics III; 8.284 has no lecture notes on OCW, so not as lessons (docs/YEAR-IV-PLAN.md). |
| 2026-11-18 | Proposed (not decided): further courses to complete the programme. Stars from Edward Brown's *Stellar Astrophysics* (CC BY-NC-SA 4.0); MIT 18.05, 18.04, 8.223 and 8.701; 8.962's own notes by Hughes carry no licence, so fact-checking only (docs/COMPLETENESS-PLAN.md). |
| 2026-11-18 | Design for problem sets and exams written (docs/PROBLEM-SETS-DESIGN.md): answers checked as numbers, formulas (by value at random points) or choices; MIT publishes no solutions for the 8.286 problem sets, so ours are checked by a blind second solve; pilot: 8.286 Problem Set 1. Not built. |
| 2026-11-17 | Read-aloud: Dirac notation (bras, kets, inner products, matrix elements) and the remaining gaps from runs 6–7; a bug that read an internal placeholder aloud in 180 formulas fixed; the calc tests refuse undefined one-letter names (PR #45). The new patterns made the content check slow in CI (12 s → 150 s); fixed in PR #47. |
| 2026-11-17 | Installed app: iPhone status-bar overlap fixed (`viewport-fit=cover`), and old build files are now cleaned from every reader's cache after a deploy (PR #46). |
| 2026-11-17 | §8 expanded: a description, design, copyright and size for each idea, and a copyright table for all new kinds of source. |
| 2026-11-20 | Owner decision: the OpenStax ban is lifted, but only with OpenStax's written permission: their books forbid "ingesting" them into generative AI without it, which covers pasting text into an AI session even with training off. Until permission is on file no OpenStax text enters any AI session; with it, Claude training off too, CC BY-NC-SA, credited, no third-party figures. Where it is used is not decided; `content:check` still rejects OpenStax in this site's pages until then (AGENTS.md Writing rules 10, OWNER-TODO.md §6). |
