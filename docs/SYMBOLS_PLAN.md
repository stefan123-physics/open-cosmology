# Plan: symbols, notation and the smart maths features

Status: **Stage 1 built** (2026-11-15): `/symbols` page, `data/symbols.json`, tap-to-explain popups, "Symbols on this page", read-aloud names, `npm run scan`, checks in `content:check`. Stage 2 not started.

**2026-11-17:** `/symbols` is now an index plus one page per year (`app/symbols/[year]/page.tsx`): each year page shows the symbols used in that year with the meanings that apply there, and the "Used in" lists load on demand from `/symbols-usage.json`. A single page of every symbol had reached 20.08 MB, over Vercel's limit for prerendered pages. Lessons link to their own year's page; old `/symbols#sym-…` links are redirected by a small script on the index.

**What changed from the plan while building:** the data is JSON (`data/symbols.json`, importable by read-aloud in the browser), not YAML; the characters to tap are worked out by rendering each symbol with KaTeX, not typed by hand; and keyboard access goes through the per-page "Symbols on this page" list, because KaTeX's visual output is `aria-hidden` and its symbols cannot be made focusable.

## Goal

A learner can find out what any symbol on the site means, how to say it, and where else it appears — on a dedicated symbols page and, more importantly, by tapping the symbol in any lesson. Read-aloud says every symbol by its proper name. A few interactive tools help with first-year algebra.

## Why now, not when the site is finished

**The same symbol means different things on different pages.** The 56 lessons use 96 distinct TeX commands (most used: `\frac`, `\rho`, `\pi`, `\Omega`, `\theta`, `\sqrt`, `\vec`, `\delta`, `\lambda`, `\phi`), and many Greek letters do several jobs:

- **σ** — rms density fluctuation (`power-spectrum`), velocity dispersion (`linear-perturbations`), annihilation cross section (`dark-matter-freeze-out`);
- **ξ** — two-point correlation function (`power-spectrum`) and overdensity at turnaround (`spherical-collapse`);
- **δ** — density contrast, and the Dirac delta on the same page;
- **k** — curvature (8.286), wavenumber (8.902), Boltzmann's constant (everywhere);
- **τ** — dimensionless time (`spherical-collapse`), a time scale (`dark-matter-freeze-out`).

A single site-wide meaning per symbol would give wrong popups. Meanings must be tied to the course and page (sometimes the formula). That is quick to record while writing a page and slow to add to ~400 finished pages.

## What already exists (extend, don't rebuild)

| Existing | What it does | Used for |
|---|---|---|
| `lib/speech.ts` (`texToSpeech`, 62 lines) | Turns TeX into speech: Greek letters, fractions, powers, roots, vectors, hats, derivatives, limits | Feature 7 — extend it, drive it from the symbols data |
| `lib/read-text.ts` | Reads formulas from their TeX source during read-aloud | Unchanged; benefits from better `texToSpeech` |
| `components/Flashcards.tsx`, `lib/progress.ts` | Flashcards per page; progress in `localStorage` only | Feature 6 — add spaced repetition here |
| `lib/tex.ts`, `components/Formula.tsx` | Render TeX with KaTeX (HTML + MathML) | Feature 2 — the popup hooks into rendered formulas |
| `components/a11y/*`, `lib/reading-options.ts` | Reading options, keyboard shortcuts, WCAG 2.2 AA targets | All features must meet the same rules |
| `docs/CALC_TESTS_PLAN.md` | Plans `scripts/scan-content.ts` | The same scanner produces the symbols inventory |

The prompt mentions "the symbol scan I started"; it is not in the repo or its git history. If it exists elsewhere, start from it.

## Decision: where the symbols page lives (decided by the owner, 2026-11-15)

Every lesson in `content/` must have an MIT OpenCourseWare `source.url`, and `content:check` rejects pages without one. A notation guide has no MIT lecture behind it. Decision: a site page outside `content/`, like `/about` — **`/symbols`** (`app/symbols/page.tsx`) — generated from the data, not an `.mdx` lesson.

## Stage 1 — build now (small; every new page benefits)

### 1. Symbol inventory (scan)

`scripts/scan-content.ts` (shared with the calculation plan) lists every symbol used: TeX commands and single-letter variables in `<Formula tex>`, inline `$…$`, quiz and flashcard text, with page, course and year. Output: `data/symbols-inventory.json`. It reports symbols that have no glossary entry yet (a warning in `content:check`, later an error for new pages).

### 2. Symbols data

`data/symbols.yaml`, one entry per symbol:

- `tex` (e.g. `\sigma`), `glyph` (σ), `spoken` ("sigma");
- `meanings`: a list, each with a short plain-English meaning, `scope` (course, or specific pages) and optional units;
- `default`: which meaning applies where no scope matches (or none, forcing an explicit choice);
- lessons where it appears: **generated** from the inventory, never typed by hand.

Pages that use a symbol in an unusual way can override in frontmatter (`symbols: { xi: "overdensity at turnaround" }`). Validated by a zod schema in `lib/schema.ts`.

### 3. The `/symbols` glossary page

Generated from the data, grouped by year (the order in which the programme introduces symbols) and by kind (Greek letters, operators, relations, accents, units). Each symbol shows its glyph, spoken name, meanings with their courses, and links to every lesson that uses it. Searchable through the existing search index.

### 4. Tap-to-explain popups (highest value)

On every lesson, each symbol inside a rendered formula can be tapped, clicked or focused to show a small popup: the meaning **for this page**, how to say it, and a link to its `/symbols` entry.

- Built at render time: the formula's TeX is known, so symbols can be wrapped when KaTeX output is produced (or via KaTeX's `\htmlData`), with no client-side guessing.
- Keyboard: symbols are reachable with Tab only when the learner turns "explain symbols" on (otherwise long formulas would flood the tab order); Enter opens the popup, Escape closes it, focus returns.
- Screen readers: the popup is a non-modal dialog with an accessible name. The KaTeX MathML stays the main accessible form of the formula.
- Respects `data-motion`, `--text-scale` (rem/em only) and both themes, with contrast ≥ 4.5:1.
- An on/off switch in Reading options; the setting stays in `localStorage`.

### 5. Read-aloud says symbols by name

Extend `lib/speech.ts` so every symbol in `data/symbols.yaml` has a spoken name ("h-bar", "nabla", "partial", "proportional to", "approximately", "ell"), with page-specific readings where needed. Add unit tests for `texToSpeech` on a sample of real formulas from the site.

## Stage 2 — build when the matching pages exist

| Feature | When | Notes |
|---|---|---|
| 6. Spaced-repetition flashcards | Any time (independent) | Extend `Flashcards.tsx`: track right/wrong per card in `lib/progress.ts` (browser only); a simple Leitner-box schedule brings back cards marked wrong more often. Add symbol cards generated from the symbols data. |
| 3. Formula reader | Start with the most-used formulas | Each `<Formula>` can carry an optional `parts` list (piece of TeX → plain-English phrase), e.g. E = mc² → "energy equals mass times the speed of light squared". Read-aloud and the popup reuse it. Not all ~330 formulas at once. |
| 4. Order-of-operations stepper | With 18.01 (first-year maths) | A `<StepThrough expr="…">` component: solves an expression one step at a time with Next/Back buttons, each step announced by screen readers. |
| 5. Powers-and-roots playground | With 18.01 | Built on the existing `<Plot>` (formula-generated, with sliders): x² against 2x, xⁿ against nx, √x against x/2. Keyboard-operable sliders and a text alternative, like every diagram on the site. |

## Stage 1b — improvements (added 2026-11-15)

Proposed after stage 1 was built. Status is kept up to date here.

| # | Improvement | What it means | Status |
|---|---|---|---|
| 1 | Latin letters and constants | Explain plain letters (built for a, H, z, G, c, k, T in 8.286/8.902; 8.01 letters left out on purpose — its pages mix a = acceleration with a(t) = scale factor) (a, H, k, z, G, c, t, T…), not only TeX commands. Same page/course scoping (k is curvature in 8.286, a wavenumber in 8.902, Boltzmann's constant in kT). Constants show their value. | **done** |
| 2 | Compound symbols | Explain symbol + subscript (56 named quantities so far) as one unit: ρ_c "critical density", Ω_m, H₀, T_γ, δ_c, σ₈, t₀. The popup prefers the compound over the bare letter. | **done** |
| 3 | Per-formula meanings | Optional `symbols` override on `<Formula>` for pages that use one letter two ways (λ on the Christoffel page). | planned |
| 4 | Units and typical values | Popups show units and a typical value where useful (k in 1/notch², H₀ ≈ 67 km/s/Mpc). Partly done through the meaning text. | planned |
| 5 | "Where it's introduced" | Each popup links to the lesson and section where the symbol is first defined; `content:check` warns when a lesson uses a symbol before its prerequisite path introduces it. | planned |
| 6 | "New in this lesson" | "Symbols on this page" marks symbols that are new compared with the lesson's prerequisites. | planned |
| 7 | Notation conventions | A section on `/symbols`: dot = time derivative, subscript 0 = today, bar = mean, summed repeated indices, Guth's notches, metric sign convention, what ∝, ∼ and ≈ each promise. | planned |
| 8 | "In words" under every formula | A small disclosure under each `<Formula>` showing the formula as words, from the read-aloud converter (`lib/speech.ts`). First step of the formula reader. | **done** |
| 9 | Look-alike symbols | A section on `/symbols` for pairs beginners confuse (ν/v, ϕ/φ, ε/ϵ, ∝/α, ℓ/l/1, ≈/∼/≃, ξ/ζ). | **done** |
| 10 | Greek alphabet primer | All 24 letters with pronunciation at the top of `/symbols`, including letters not used yet. | **done** |
| 11 | Search and filters on `/symbols` | Filter box; filter by course; "only lessons I've studied" (browser progress); tapping a symbol highlights its other appearances in the formula. | planned |
| 12 | Symbol practice | A symbols quiz on `/symbols` feeding the spaced-repetition flashcards (stage 2, item 6). | planned |
| 13 | Review of meanings | An independent pass (first pass: reviews/symbols.md, all findings resolved) (reviewer agent) comparing every scoped meaning with the page text. Repeat whenever meanings are added in bulk. | **done** |

## Rules for everything above

- Accessible to WCAG 2.2 AA, like the rest of the site: keyboard operable, text alternatives, contrast, rem/em text sizes.
- Progress and settings stored **only in the browser** (`localStorage`); no accounts, no tracking.
- Classical-university style (EB Garamond / Source Serif 4, small-caps labels, underlined links).
- New MDX components are registered in `componentsFor()` in `lib/mdx.tsx` and documented in `docs/CONTENT_GUIDE.md`.

## Order of work

1. Owner decision: `/symbols` as a site page (recommended) or a lesson.
2. Shared scanner (`scripts/scan-content.ts`), also used by the calculation tests.
3. `data/symbols.yaml` for the symbols already used, with page-specific meanings.
4. `/symbols` page.
5. Tap-to-explain popups.
6. Read-aloud names.
7. Stage 1b, first: compound symbols and Latin letters (1–2), "In words" (8), Greek primer and look-alikes (9–10), review of meanings (13). Then 6, 5, 3, 4, 7; then 11–12 once more lessons exist.
8. Stage 2 items as their pages are written.
