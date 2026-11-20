# Plan: a glossary of difficult words

Status: **interface built 2026-11-19** (data written per course in parallel). Built: the data format and checks (`lib/glossary.ts`, `data/glossary/*.json`); marks in lessons (`lib/rehype-terms.ts`, with the density limit); the reading option "Explain difficult words" (`data-terms`); the word panel (`components/terms/TermPanel.tsx`: popover, bottom sheet on phones, Listen, More, related words with Back, "First explained in", Save, All meanings); `w` / `Shift W`; "Words on this page" (`components/PageTerms.tsx`); `/glossary` (search, kind/year/course filters, A to Z, Start here, My words) and `/glossary/<letter>`; `/glossary-usage.json`; My words (`saved-words`, flashcards on /review, export/import); Definition rows in search; offline saving; `/accessibility`, About and Privacy. Differences from the plan: marks are `<a class="term">` links (not `<button>`), so they work without JavaScript; Pagefind does not index the glossary pages (search finds words through `/search-index.json`); `npm run test:terms` is not written yet (`test:shortcuts` checks `w`, the panel, Escape and focus return). Owner decision (2026-11-19): the glossary covers every difficult word on the site, not only physics and maths terms: subject terms, mathematical language, and the general academic English that science writing takes for granted ("isotropic", "a priori", "heuristic", "non-trivial"). The owner answered the decisions of §12 on 2026-11-19 (recorded there); the plan is ready to build, starting with the pilot.

## State on 2026-11-19 and what is left (handover)

**Data:** 2,301 entries in 20 files (`data/glossary/`: academic.json plus one per course; 1,155 physics, 495 maths, 338 named, 277 academic, 36 abbreviations). Every file was written by a writer agent and checked by an independent reviewer (`reviews/glossary/<file>.md`, each with a Resolution section). Where two writers defined the same word, the earlier course in programme order kept the entry and the later course's sense became a meaning scoped to that course. `content:check` passes, `npm run build` passes. Branch `glossary`, not merged.

**Before release (needed):**
1. **Sense audit. Done 2026-11-19:** 22,501 first uses on 522 pages read by 11 reviewers (one per half year, Year IV in three); 88 lines fixed: 54 `skipPages` (verbs such as "drag", "heat", "argue"; "field" as an area of study; "Gaussian units", "Gaussian curvature", "vector boson", "density matrix", "continuity" for the continuity equation), page-scoped meanings for reciprocal "inverse", limits of integration, wave impedance, orbital nodes, algebraic fields, linear molecules, "integral of motion", the vacuum term, the determinant product rule, the DC vector; existing meanings moved to the right pages (homogeneous functions, potential saddle points, dipole radiation in 8.962, "limit" as a bound). General meanings of `graph` (now curves as well as surfaces) and `density` (not "usually mass") widened. Re-run `npm run audit:terms` after adding many words. Original note: a word's general meaning can land on a page that uses the word in another sense (seen: "spins" on `homogeneous-expansion` gets particle spin; "event" is handled). Run `npm run audit:terms -- --out <dir>`: it writes, per year, every first use of a glossary word with its sentence and the meaning shown (20,371 uses on 522 pages). Review them (one agent per year; Year IV split in two) and fix each wrong one with `skipPages` on the entry (or a `{ "id", "skipPages": [...] }` record) or a page-scoped meaning. Rules: a page may be in only one meaning of an entry; `content:check` enforces it.
2. **Forms writers asked for but could not add. Done 2026-11-19:** Hubble parameter, Friedmann equations (the duplicate entries merged), spectra, saddle points, 4-vector(s), Stokes drag/formula, existence and uniqueness, cosmic inflation, mass per unit length, null space, heat reservoir(s), the "parabolic" PDE sense, "factorisation" (British spelling) on `factorization`, straight-apostrophe "Stefan's law"; `ferromagnet` (8.08) merged into `ferromagnetic` (8.02), its Ising-model sense kept as an 8.08 meaning. "Gauss's theorem" stays its own entry (`gauss-theorem`, related to `divergence-theorem`) because it carries the gravity form and a page-scoped sense.
3. **Phrase entries. Done 2026-11-19:** moment of inertia, displacement current, symmetrization postulate, halo mass function, initial mass function, gauge covariant derivative, coherent state, line of nodes, adiabatic invariant (8.06), minor axis and major axis (18.06; "minor axis" showed the matrix minor before).
4. **`kind` of eponyms. Done 2026-11-19 (owner decision):** a term that contains a person's (or a project's) name *as a name* is `named`, laws and things alike (Green's theorem, Bohr radius, Riemann tensor, Hubble constant, Fourier transform, Legendre polynomials); a word *derived* from a name keeps its subject kind (Hamiltonian, Lagrangian, Gaussian, Jacobian, Euclidean, Wronskian, Galilean, Copernican); names of no person (Big Bang, Big Crunch, Standard Model, AB system, WIMP miracle) are physics. 21 entries moved to `named`, 10 out of it.
5. **Page weight. Done 2026-11-19 (owner decision: load the long text on More):** the panel on a lesson gets only what it shows at once (`panelTerms` in lib/glossary.ts: kind, say, spoken, lang, everyday, here, introduced, the meaning's index); the word, its link and short meaning come from the "Words on this page" list (`.pt-short`), and the fuller meaning, example, origin and related words load from `/glossary-more/<letter>` (app/glossary-more/[letter]/route.ts, about 11 kB gzipped per letter, saved for offline use) when "More" opens. Panel data is now at most 4.4 kB gzipped (111 words), was up to 23 kB; the busiest lesson went from 151 to 131 kB gzipped. The service worker now also answers data files from the saved courses cache when offline (VERSION 4).
6. **Built 2026-11-19:** every glossary word is a Pagefind record of its own (scripts/build-search.mts: meanings, everyday note, forms; opens the entry; a word already shown as a Definition row is not repeated among the text results). `npm run test:terms` (scripts/test-terms.mjs) checks marks and the panel on 7 lessons at 375 px and 1400 px, normal and largest text: marks present and not in headings, formulas, figures or links; a tap and Space open the panel; it shows the list's short meaning, does not cover the word, is a bottom sheet on phones; More loads; Escape closes and returns focus. It found a real bug on the way: the "Curve to listen to" list under graphs widened phone pages at the largest text (fixed in globals.css).

Nothing in this list is left. Still for the owner: try the glossary on a phone and with a screen reader (OWNER-TODO).

**Tools used for merging** (not in the repo): the writers' commits were cherry-picked one by one; a script gave each word one owner and kept other senses as scoped meanings, and pruned scopes that a longer phrase entry had taken over. Cherry-picks skip the pre-commit hook, so run `npm run content:check` after any merge.

This plan sits next to [SYMBOLS_PLAN.md](SYMBOLS_PLAN.md): symbols explain *notation*, the glossary explains *words*. The two share their design, their data rules and their checks, so a reader meets one consistent system.

## 1. Goal

A reader who meets a hard word anywhere on the site can find out what it means **here, in this lesson**, in plain English, in one tap, without losing their place; can hear how it is said; can see where the idea was first explained; and can collect the words they want to learn and review them later. The site's audience is a self-taught learner on a phone, often reading in a second language, sometimes with a screen reader or dyslexia: the glossary is built for them first.

### Design principles

1. **Never interrupt reading.** Explanations open only on request. Marks in the text are quiet; nothing pops up on its own, nothing moves.
2. **Meaning in context.** A word gets the meaning it has on *this* page ("degenerate" in a Fermi gas is not "degenerate" eigenvalues; "normal" mode is not normal distribution). Same rule as symbols: meanings are scoped to pages or courses, never one site-wide guess.
3. **Plain words first, precision second.** A short meaning anyone can read (≤ 25 words), then an optional fuller one for the reader who wants it.
4. **One tap, one place.** The same panel everywhere (lesson, glossary page, search), the same controls, the same keyboard behaviour.
5. **The reader decides how much help they get.** A reading option sets how many words are marked, and an advanced reader can switch marks off; nothing is forced.
6. **Works for everyone, everywhere.** Keyboard, screen reader, read-aloud, text size, dark mode, offline, no JavaScript (the mark falls back to a link). WCAG 2.2 AA like the rest of the site.
7. **No tracking.** Nothing about which words someone looked up leaves the device.

## 2. What counts as a difficult word

Four kinds, each labelled in the data and the interface:

| Kind | Examples | Label |
|---|---|---|
| **Physics and astronomy terms** | redshift, entropy, comoving, adiabatic, false vacuum, geodesic | Physics |
| **Mathematical language** | eigenvalue, orthogonal, homogeneous, converge, isomorphic, monotonic, "without loss of generality" | Maths |
| **Academic and scientific English** | isotropic, a priori, heuristic, ansatz, canonical, trivial / non-trivial, naive, rigorous, pathological, order of magnitude, ad hoc, i.e., e.g., cf., et al., vice versa | Academic |
| **Names, acronyms and abbreviations** | CMB, ΛCDM, WIMP, LIGO, BBN, FLRW, Hubble's law, Planck spectrum | Abbreviation / Named |

Not in the glossary: everyday words (a frequency list decides, §8), proper names of people (the planned People feature, PLAN.md §8), and symbols (`/symbols`). Where they meet, they link: the term "Hubble constant" links to the symbol H₀ and back; "Planck spectrum" will link to Planck in `/people`.

Some words have an everyday meaning that misleads in science: "work", "power", "theory", "normal", "significant", "degenerate", "flat", "open", "closed", "critical". These get a short **"Not the everyday meaning"** note, because they cause more misunderstanding than rare words do.

### How big it is

Measured on 2026-11-19 over the 523 pages:

- 4,557 distinct **bold** terms (bold marks a new term in the lessons; filtered for emphasis such as "**not**"), 828 of them bold on two or more pages;
- 9,720 distinct words in the lesson text, 2,139 of them 10 or more letters long.

After removing everyday words and merging spellings, expect **about 2,000 to 3,000 entries** with **3,000 to 4,000 meanings** (many entries need two or three senses). That is roughly the size of the symbols registry, which the site already handles.

## 3. Where the reader meets it (overview)

```
 Lesson text ──tap a marked word──▶ Word panel ──"First explained in"──▶ the lesson that teaches it
     │                                  │ ──"Save to my words"──▶ My words (review)
     │                                  └──"All meanings"──▶ /glossary/e#entropy
     └── end of lesson: "Words on this page" (the accessible list, same content)

 Search "entr…" ──▶ Definition result on top ──▶ Word panel
 /glossary ──▶ A–Z pages, search box, filters ──▶ entries with every sense and where it is used
```

## 4. In the lesson: marked words

**What is marked.** By default, the **first use on the page** of each word that has a meaning on this page, in running prose only. Never in headings, formulas, links, buttons, quiz questions and choices (that would hint at answers), flashcard fronts, figure labels or captions of graphs, or the "Draft" and credit boxes. Longest match first ("critical density" before "density"), whole words only, inflections included (spectrum / spectra, diffuse / diffusion are separate entries, but redshifts / redshifted are forms of one).

**Density limit.** At most one mark per ~40 words of a paragraph; when more are eligible, the rarer and the subject words win, the rest still appear in "Words on this page". This keeps a dense GR paragraph readable.

**How a mark looks.** A thin **dotted** underline in the soft foreground colour (`--fg-soft`), offset below the text; no colour change of the word itself. It must differ clearly from:

| | Look | Means |
|---|---|---|
| Link | accent colour, solid underline | goes somewhere |
| Symbol | (inside formulas) | tap for the symbol's meaning |
| **Word** | body colour, dotted underline | tap for an explanation, stay here |

The dotted underline is a recognised convention for "definition available" (`<abbr>`, `<dfn>`), and does not rely on colour (WCAG 1.4.1). The cursor becomes `help` on a pointer device. Contrast of the dots against the background ≥ 3:1 in both themes.

**Reading option "Explain difficult words"** (Reading options → Reading):

- **First use on each page** (default)
- **Every use**
- **Only academic words** (for readers who know the physics but not the English)
- **Off** (marks hidden; "Words on this page" stays)

It works like the other options: stored in `reading-options`, applied as `data-terms` on `<html>`, no flash on load.

## 5. The word panel

One component, used in lessons, search results and the glossary page.

```
┌──────────────────────────────────────────────┐
│ isotropic                     ACADEMIC   ✕   │
│ eye-so-TROP-ik   ▶ Listen                    │
│──────────────────────────────────────────────│
│ The same in every direction.                 │
│                                              │
│ Here: the universe looks the same whichever  │
│ way we look, once we average over large      │
│ scales.                                      │
│                                              │
│ ▸ More                                       │
│──────────────────────────────────────────────│
│ First explained in  The cosmological       → │
│                     principle (8.286 L3)     │
│ ☆ Save to my words        All meanings →     │
└──────────────────────────────────────────────┘
```

- **Header:** the word in small caps (site style), its kind as a label, a close button.
- **Say it:** a simple respelling with the stressed syllable in capitals (eye-so-TROP-ik), plus a Listen button that speaks it with the site's read-aloud voice. Respelling, not IPA: most readers cannot read IPA, and a speaker button covers precision.
- **Meaning:** the short meaning (always), then **"Here:"** a one-sentence note on how *this lesson* uses it, when that adds something. For words with a misleading everyday sense, a "Not the everyday meaning" line.
- **More** (disclosure, closed by default): the fuller meaning (2–4 sentences), an example sentence from the site, related words (each opens in the same panel, with a Back control), and for Latin and Greek borrowings the origin in a few words, which often makes a word stick ("a priori: Latin, 'from what comes before'").
- **First explained in:** a `LinkBar`-style row to the lesson that introduces the idea (omitted on that lesson itself; there it says "Explained on this page"). For academic words, which no lesson teaches, this row is absent.
- **Actions:** Save to my words (toggle, ☆/★), All meanings (to the glossary entry).

**Behaviour.**

- **Phone (< 700 px):** a bottom sheet, like the site's dialogs (`useConfirm`): slides up (no slide when reduced motion is on), covers at most 60% of the screen, the marked word scrolled into view above it, swipe down or tap outside to close.
- **Wider screens:** a popover anchored under the word (above it near the bottom edge), never covering the line being read, 22–28 rem wide, arrow pointing to the word.
- Opens on **click/tap or Enter/Space**, never on hover alone (hover popups are easily triggered by accident and fail WCAG 1.4.13 unless carefully built). On a pointer device a short hover (500 ms) may show a one-line preview of the short meaning, dismissible with Escape and hoverable, as 1.4.13 requires; this is optional (§12).
- **Escape** closes and returns focus to the word; focus is trapped while a bottom sheet is open, not in a popover.
- One panel at a time; opening another word replaces it.
- Text in rem, so it follows the text-size option; reading options for spacing, font and contrast apply inside it.

## 6. "Words on this page"

The accessible, scannable list at the end of every lesson, next to "Symbols on this page" and built the same way (`components/PageTerms.tsx`, a `<details>` that starts closed, its own Listen button).

```
Words on this page                                   ▶ Listen
▸ Show the 14 words used here
   NEW HERE
   comoving           Moving along with the expansion …        ☆
   scale factor       How much distances have grown …         ☆
   ALSO USED
   isotropic          The same in every direction.             ☆
   homogeneous        The same at every place.                 ☆
   ACADEMIC
   a priori           Known before looking at evidence.        ☆
```

- Grouped as **New here** (the words this lesson introduces), **Also used** (explained elsewhere, with a link), **Academic**.
- Each word opens the word panel; ☆ saves it.
- "Save all new words" at the bottom, for readers who use the review page.
- It is a unit of focus mode (add `.page-terms` to `LESSON_UNITS` in `components/a11y/FocusMode.tsx`) and is shown in print.

This list is how keyboard and screen-reader users reach every explanation without many extra tab stops in the text (§9).

## 7. The glossary pages

**Addresses.** `/glossary` (index) and one page per letter, `/glossary/a` … `/glossary/z` (plus `/glossary/0-9` for "21 cm line" and the like). Each entry has an anchor: `/glossary/i#isotropic`. Letter pages keep each page small (the single `/symbols` page once passed Vercel's 20 MB limit); 26 pages instead of 3,000 keeps the build fast.

**Index page layout.**

```
GLOSSARY
Difficult words on Open Cosmology, explained in plain English.

[ Search 2,412 words…                         ]
 All · Physics · Maths · Academic · Abbreviations      Year: All ▾   Course: All ▾

 A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z   (sticky)

 Start here: 20 words every course uses
   average · constant · derivative · equilibrium · order of magnitude · …
```

- **Search box** first, because most visitors arrive with a word in mind: filters as you type, ignores case, accents and plural/–ing endings, and suggests the nearest word when nothing matches ("Did you mean *isotropic*?"). Results show the word, its kind and the short meaning, and open the panel.
- **Filter chips** by kind; **Year** and **Course** filters ("words from 8.08").
- **Letter bar**, sticky below the slim bar; letters with no entries are shown faded and not focusable.
- **"Start here"**: a short curated list of the most frequent difficult words, for a newcomer.
- Each **letter page** lists its entries as a definition list (`<dl>`, `<dt><dfn>`, `<dd>`): word, respelling, kind label, short meaning, then a disclosure "All meanings and where they are used" with each sense labelled by course ("In 8.08: …", "In 18.06: …") and the lessons that use it (loaded on demand from `/glossary-usage.json`, as `/symbols-usage.json` does).
- Every entry has a "Copy link" control and the ☆ save toggle.
- Linked from the site header menu ("Glossary", next to "Symbols"), the footer, every "Words on this page" box and the About page.

## 8. Content: the data and how it is written

### Data file `data/glossary.json` (one entry per line, like `data/symbols.json`)

```json
{"id": "isotropic", "term": "isotropic", "forms": ["isotropic", "isotropy", "isotropically"],
 "kind": "academic", "say": "eye-so-TROP-ik", "spoken": "isotropic",
 "origin": "Greek isos 'equal' + tropos 'turn, direction'",
 "related": ["homogeneous", "cosmological-principle"], "symbols": [],
 "everyday": null,
 "meanings": [
   {"short": "The same in every direction.",
    "long": "A thing is isotropic when no direction is special: measured along any direction it gives the same result. ...",
    "here": "The universe looks the same whichever way we look, once we average over large scales.",
    "pages": ["cosmological-principle", "robertson-walker-spacetime"], "introducedIn": "cosmological-principle"},
   {"short": "Exerting the same pressure in every direction (of a fluid).",
    "courses": ["8.09"], "introducedIn": "continuum-limit-fluid-variables"}
 ]}
```

Rules shared with symbols: a meaning without `pages` or `courses` is general; scoped meanings win on their pages; a word's sense is never widened to fit a new page, a new sense is added instead.

### Writing standard (the style guide for definitions)

1. **Short meaning ≤ 25 words**, one sentence if possible, genus then difference ("A distance that grows with the universe, measured in…").
2. **Defining vocabulary:** a short meaning uses only common words, or glossary words that are simpler than the headword (and those become links inside the panel). Never circular; never a harder word than the one explained.
3. Start from the everyday picture, then the precise statement in "More".
4. No TeX; Unicode symbols only where unavoidable (as symbol meanings already do). No em dashes (site rule).
5. British spelling, as the site; American spellings as `forms` so both are found.
6. Meanings agree with the lesson that introduces the idea; a reviewer checks every one against that lesson.
7. Academic words are defined **as used in science writing** ("trivial: so simple that it needs no argument", not the everyday "unimportant").

### Finding the words

`npm run scan -- --terms` (extending `scripts/scan-content.ts`) lists candidates: bold terms, long and rare words, Latin phrases and abbreviations; it drops everyday words using an openly licensed word-frequency list (the *New General Service List*, CC BY-SA, or a similar list whose licence is checked first) and adds the *Academic Word List* families where its terms of use allow. Output: a candidate list with counts and pages, reviewed by hand before any entry is written.

### Production (agents, as in the lessons runs)

1. **Pilot:** 8.286 only (its ~150 to 250 words), to settle the schema, the style and the interface on real text.
2. **Then by course, in programme order**, in batches of about 150 words: a writer agent drafts entries and meanings from the lessons that use them; an independent reviewer agent checks each meaning against its lesson, the plain-English rules and the facts, and writes `reviews/glossary/<batch>.md`; findings are fixed before merging.
3. **Owner spot-check** of a sample per batch (§12).
4. New lessons from then on add their words in the same commit, as they already add symbols.

Estimated effort: about 3 to 5 unattended runs for the whole programme, plus one run for the interface.

## 9. Accessibility (WCAG 2.2 AA)

- **Keyboard.** Marked words are `<button>` elements styled as text, but **not in the tab order** (`tabindex="-1"`), so a paragraph with five words does not cost five Tab presses. Keyboard users reach them by:
  - the "Words on this page" list (always focusable), and
  - a shortcut: **`w` / `Shift W`** moves focus to the next / previous marked word in reading order; Enter opens it. It obeys the single-key option (`singleKeysOn()`, WCAG 2.1.4) and is listed under "?".
- **Screen readers.** Each mark has an accessible description ("has an explanation"), not read in the middle of the sentence by default; the glossary pages use `<dfn>` and definition lists; the panel is a labelled dialog on phones and a non-modal region on wide screens. Latin phrases carry `lang="la"` so a screen reader does not mispronounce them.
- **Read-aloud.** Page read-aloud does **not** read definitions (no interruptions); the panel and "Words on this page" have their own Listen buttons. `spoken` overrides the voice where it guesses wrong (ΛCDM, "a priori").
- **Content on hover or focus** (1.4.13): any hover preview is dismissible (Escape), hoverable and persistent.
- **Focus not obscured** (2.4.11): the bottom sheet scrolls the word above it; the slim bar never covers a focused mark.
- **Targets** (2.5.8): buttons in the panel ≥ 44 × 44 px on touch; inline words are exempt as text, but the tappable area is padded vertically.
- **Reduced motion, contrast, dark mode, text size, dyslexia font:** all inherited from the reading options; no italics for definitions.
- `/accessibility` and the About summary describe the feature and how to switch it off.

## 10. Technical design

- **Marking at build time.** A rehype plugin `lib/rehype-terms.ts` (after `rehype-sections`) finds the words in the compiled MDX and wraps them as `<button class="term" data-term="isotropic" tabindex="-1">`. The server does the matching once; the reader's phone does no scanning (unlike symbols, which must read KaTeX output in the browser). Without JavaScript the mark renders as a link to `/glossary/i#isotropic`.
- **Matching.** Longest match first, whole words, case-insensitive except acronyms, forms and simple inflections, skip zones (§4), the page's scoped meaning chosen by slug and course. The density limit is applied per paragraph.
- **Page payload.** The lesson embeds only the meanings of words used on it (a few KB as JSON in the page); the panel's "All meanings" loads the glossary page.
- **Components.** `components/terms/TermPanel.tsx` (popover and bottom sheet, built on the existing dialog pieces), `components/PageTerms.tsx`, `app/glossary/page.tsx`, `app/glossary/[letter]/page.tsx`, `app/glossary-usage.json/route.ts`.
- **My words.** Saved words live in `localStorage` (new key, e.g. `saved-words`), become flashcards in `/review` with the existing spaced-repetition code (`lib/flashcards.ts`; card id = `term:<id>`), and are included in export/import of progress (`lib/backup.ts` validates them). **The Privacy page is updated first**, as AGENTS.md requires.
- **Search.** `/search-index.json` gains the glossary words, shown as a "Definition" row above lesson titles; Pagefind indexes the glossary pages.
- **Offline.** Glossary pages and `/glossary-usage.json` join `/offline-manifest.json`; a saved course also saves the letter pages its words are on.
- **Checks in `content:check`** (fail = error, warn = warning):
  - fail: an entry or meaning without `short`; a scoped page that does not exist or does not use the word; two entries with the same form; a `short` over 25 words; an em dash; TeX in a meaning.
  - warn: a bold term in a lesson with no glossary meaning for that page (from the pilot on, for new pages only, then all); a short meaning that uses a glossary word harder than its headword without linking it; `speechGaps` in `spoken`.
- **Performance budget:** no layout shift from marks (styling only); the panel's code is loaded on first tap; added page weight ≤ 5 KB per lesson.

## 11. Phases, deliverables and when each is done

| Phase | Deliverable | Done when |
|---|---|---|
| **0. Decide** | answers to §12 | owner has chosen |
| **1. Pilot (8.286)** | schema, `rehype-terms`, word panel, "Words on this page", `/glossary` and letter pages, reading option, checks; ~200 reviewed 8.286 words | 8.286 lessons show marks; `content:check`, build and `test:shortcuts` pass; owner has tried it on a phone and with a screen reader (OWNER-TODO) |
| **2. All courses** | entries and meanings for every course, by batch | every lesson has its words; `scan -- --terms` reports no unreviewed candidates |
| **3. Learning tools** | My words, review integration, search rows, offline | saved words appear in `/review` and survive export/import; Privacy page updated |
| **4. Extras (optional)** | "Before you start: words this lesson uses" box at the top of a lesson; hover previews; origins for all Latin and Greek borrowings | owner decides |

A test script `npm run test:terms` (like `test:labels`) checks on a running site, on a 375 px phone and a 1400 px screen at normal and largest text: marks are present and not in headings or formulas, the panel opens by tap and by keyboard, does not cover the word, closes with Escape and returns focus.

## 12. Decisions (answered by the owner, 2026-11-19)

1. **Default marking:** first use on each page.
2. **Pronunciation:** simple respelling plus a Listen button; no IPA.
3. **Origins** of Latin and Greek words in "More": yes, one short line.
4. **Hover preview** on computers: no; the panel opens on click or tap only (can be added later).
5. **My words** (saved in the browser, reviewed as flashcards): yes, in phase 3.
6. **Pilot:** the glossary still covers every difficult word on the site; the pilot is only the first batch, used to settle the data, the style and the interface on real text before thousands of entries are written. It uses 8.286 (about 200 words, many of them used across the site); then every other course follows (phase 2).
7. **Owner spot-check:** 20 words of each batch of about 150.
8. **Translations:** not now; revisit when the glossary is complete.

## 13. Risks and how the plan meets them

| Risk | Answer |
|---|---|
| Pages look cluttered | first use only, density limit, quiet dotted style, reading option to switch off |
| Wrong sense in context | scoped meanings, "Here:" note, review against the introducing lesson |
| Patronising for advanced readers | "Only academic words" and "Off" options; plain but not childish tone |
| Definitions drift from lessons | `introducedIn` link, review per batch, checks warn on new bold terms |
| Large data, slow pages | letter pages, per-page payload, usage lists on demand, build-time marking |
| Word-list licences | use only openly licensed lists, licence checked and recorded before use |
| Overlap with symbols and People | one design, cross-links both ways, each owns its kind of thing |
| Privacy | saved words stay in the browser; Privacy page and export/import updated first |
