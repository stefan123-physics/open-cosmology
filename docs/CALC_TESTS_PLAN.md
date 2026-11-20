# Plan: calculation test suite

Status: **pilot built** (2026-11-15): `calcs/constants.yaml`, `calcs/8.286/` for `age-of-the-universe`, `horizon-distance` and `matter-radiation-equality` (33 calculations), `tests/calc/test_calculations.py`, `npm run calc:test`, `requirements-dev.txt`. The first run found a rounding slip on `matter-radiation-equality` (9.13 → 9.14 × 10⁻⁵), fixed. Since then: GitHub Actions and the pre-commit hook are built; 20 of 44 8.286 pages are covered (145 checks); the tests have found two real page errors (a rounding slip, and a factor-1000 error in a water comparison). Not yet built: the numbers inventory in the scanner; the remaining 24 8.286 pages. Update: all of 8.286 is covered — 37 pages with calculation files, 274 checks; 7 pages have no numeric calculations. Earlier: formulas can use `integrate('expression', 'variable', lower, upper)` (Simpson's rule) for luminosity distances and ages. Quiz choices written as fractions (21/4, 10¾) or with the same number in different units (160 GHz / 160 THz) cannot be number-matched; check those through the explanation text instead. Lesson learned: quiz indices are 0-based and easy to get wrong — a wrong index shows up as "choices matching … are []". The quiz check understands '×10^n' and 'thousand/million/billion' in choices; exact answers (z = 0.1, β = 0.6) need an explicit tight `tolerance`, or the default ±half-digit would also match a neighbouring wrong choice.

**Pilot decisions:** `shown` is checked anywhere in the page file (not at the exact location; `where` documents the place); tolerance defaults to half a unit in the last printed digit, with trailing zeros of whole numbers not significant (3,200 → ±50); formulas are evaluated by a small whitelist parser (numbers, + − × ÷ powers, names, sqrt/log/log10/exp/sin/cos/tan), never `eval`.

## Goal

Every number a lesson calculates — in a worked example, a quiz answer, a plot caption or a formula — is stored once as data and recomputed automatically, with physical units checked. One test reads all the data, so hundreds of calculations need no separate test code.

## Why now, not when the site is finished

- Numbers are already checked by hand. Each of the 56 review files has an "Arithmetic and answer checks" section, worked out with one-off scripts that are then thrown away. Each check happens once and can never be repeated.
- Later edits can silently break an old result (changing a shared constant such as H₀, or editing one step of a worked example). Nothing catches that today.
- Recording calculations while a page is written is cheap; adding them to ~400 finished pages is not.

Size of the pilot today: 8.286 has 44 pages, 43 worked examples (138 steps), 200 quiz questions and 227 formulas.

## What already exists (do not duplicate)

| File | What it does | Recomputes numbers? |
|---|---|---|
| `scripts/check-content.ts` (run by `npm run build`) | Every `<Formula>` has a valid `cite`; no `$$`; no OpenStax/LibreTexts or "All rights reserved" text; `source.url` is on OCW; quiz answer index in range; review file present, and required for `status: reviewed`; prerequisites don't point to a later year | No |
| `lib/content.ts` (`loadSite`) | Duplicate slugs, unknown prerequisites, prerequisite cycles, `leadsTo` points to a real syllabus lecture | No |
| `scripts/cite-keys.ts` | The citation keys a page may use (`mit`, `readingN`, `references`) | No; the new suite reuses this rule |
| `scripts/new-page.ts` | Scaffolds a new page's frontmatter | No; can also create an empty calculations file |
| `scripts/make-icons.ts` | Favicons and share images | Unrelated |
| `reviews/**/*.md` | Prose record of numbers checked during review | Not runnable, but a ready list of values to seed the pilot |

Gaps: `check-content.ts` says it runs "in CI", but there is no `.github/` folder, no git hooks and no Python tooling in the repo.

## 1. Inventory: find every number

A scanner, `scripts/scan-content.ts` (Node, built on `loadSite()` in `lib/content.ts`, which already parses every page), walks every `.mdx` file and lists each number that could be a calculation:

- worked-example problems and steps (`<WorkedExample>`, `<Problem>`, `<Step>`);
- quiz questions, choices and explanations, and flashcards (frontmatter);
- plot captions and marked `points`;
- numbers inside `<Formula tex=…>`.

It ignores numbers that are not results: equation and page citations ("eq. (466)", "p. 12", `at=` values), lecture numbers, years and section numbers.

Output: `calcs/inventory.csv`, one row per number (page, location such as `worked-example 1 / step 3` or `quiz 2`, surrounding text, covered yes/no). The scanner does not guess formulas; it finds gaps and measures coverage.

**Built (2026-11-15):** `lib/numbers.ts`, run with `npm run scan -- --numbers` (add `--uncovered` to list the gaps, `--page <slug>` for one page). It writes `calcs/inventory.csv` (generated, not committed). A number counts if it is a power of ten, has a decimal point or ×10ⁿ, or has two or more digits; single digits, citations, years, links and plot settings are skipped. Coverage is `calc` (inside text a `shown` entry quotes), `input` (a given a calculation uses), `plot-check` (a marked plot point) or `no`. First run: 1902 numbers on 56 pages, 56% covered. Most uncovered numbers are prose figures ("one part in 100,000", "180° in a triangle", Guth's quoted facts) rather than calculations; the list is the work queue for further calcs entries.

## 2. Calculations as data (the core)

One data file per page, next to nothing else in the page: `calcs/<course>/<slug>.yaml`. Keeping it out of the frontmatter keeps pages readable and leaves `lib/schema.ts` unchanged.

Each entry:

| Field | Example | Notes |
|---|---|---|
| `id` | `age-flat-planck` | stable, unique within the page |
| `where` | `worked-example 1 / step 3`, `quiz 2` | where the number is on the page |
| `inputs` | `H0: 67.3 km/s/Mpc` | each with a value and a unit |
| `formula` | `2/3 / H0` | one expression in the inputs and shared constants |
| `expected` | `"9.7 Gyr"` | exactly as printed on the page |
| `tolerance` | default from printed digits (9.7 → ±0.05); or `rel: 1%`; or `order_of_magnitude` for "~10⁻²" | |
| `source` | `cite: reading1`, `at: "p. 12"` | same style as `<Formula>` |
| `origin` | `mit` / `page-own` / `later-data` / `slip` | `slip` = the page corrects the lecture; add a short note |

Shared constants (c, G, k_B, ħ, M☉, Mpc, T_CMB, the Planck 2018 values the site uses) live in **one** file, `calcs/constants.yaml`, each with its source, so pages stay consistent. Guth's "notch" is defined there as a unit.

## 3. One pytest test

`tests/calc/test_calculations.py` loads every entry and runs one parametrised test per entry, which:

1. recomputes `formula` with units attached (pint), using a safe expression parser, not Python's `eval`;
2. checks the result's dimension matches the expected unit (Gyr versus km/s fails), then the value against the tolerance;
3. checks `expected` still appears on the page at `where`, so data and page can't drift apart;
4. for quiz entries, checks the value matches the choice marked correct and does **not** match any other choice (catches wrong answer indices);
5. checks the `cite` key exists in the page's frontmatter (same rule as `cite-keys.ts`).

A failure prints page, entry id, recomputed and printed values, and the source.

Dependencies in `requirements-dev.txt`: pytest, pint, PyYAML.

## 4. Running it automatically

- `npm run calc:test` → `python -m pytest tests/calc`.
- A pre-commit git hook that runs it when a page or calculations file changes.
- A GitHub Actions workflow on every push and pull request: `content:check`, `calc:test`, `tsc --noEmit`. This also adds the CI that `check-content.ts` refers to.
- The Vercel build stays Node-only (no Python dependency in production builds). Instead, `content:check` warns when a page has numbers but no calculations file; this becomes an error for new pages after the pilot.

## 5. Rollout

1. **Format trial** on three varied pages: `age-of-the-universe`, `horizon-distance`, `matter-radiation-equality`. Settle the format, tolerances and the constants file.
2. **All of 8.286.** Worked examples and numeric quiz answers first, seeded from the reviews' "Arithmetic and answer checks". Record how many entries there are and what they caught.
3. **8.01 and 8.902**; then require calculations files for new pages. Change AGENTS.md writing rule 7 from "recompute every number with a quick script" to "record every number in `calcs/`". The review agent (`.claude/agents/mit-lecture-reviewer.md`) runs the suite instead of writing throwaway scripts.
4. **Later:** plot points and captions, evaluated from the plots' mathjs expressions (needs Node); ROADMAP's problem sets and the planned `<Answer>` component can read from the same data.

## 6. Formula checks (added 2026-11-15)

Checking printed numbers does not check the formulas themselves. Geometry pages — curvature, metrics, distances and angles in curved space, circles on a closed universe — are full of formulas where a wrong sign or a factor of 2 slips in easily, and seven 8.286 pages had no numbers to check at all. Three more kinds of entry, in the same `calcs/` files and checked by the same single test:

| `kind` | What it checks | Example |
|---|---|---|
| `limit` | A formula approaches a known simpler one as a parameter goes to its limit (curvature → 0, early times, small distances). Evaluated at a sequence of values (`vary`), the difference must shrink towards zero. | Circumference on a sphere 2πR sin(r/R) → 2πr as R → ∞ |
| `identity` | Two expressions for the same thing agree at several sample points (`samples`). | Two forms of the open-universe age; a curve satisfying the geodesic equation |
| `units` | Every term of an equation has the same physical units (with Guth's `notch` as a unit of its own). | The Friedmann equation: (ȧ/a)², Gρ and kc²/a² are all 1/s² |

Formulas can use `deriv('expression', 'variable', at, n)` (numerical first or second derivative) for checks such as "a great circle satisfies the geodesic equation". Each entry's `shown` text ties it to the formula's TeX on the page, so the check fails if the page's formula changes.

**Honest limit:** a limit check catches mistakes that change the simple limit (most sign and factor-of-2 slips), not mistakes that vanish in it (a wrong term proportional to k², say). These checks add to the MIT comparison in the reviews; they do not replace it.

**Order:** first the seven 8.286 pages without numbers and the geometry pages (sphere metrics, non-Euclidean geometry, the closed and open Robertson–Walker metrics, the cycloid and open-universe solutions, curved luminosity distances, the Friedmann equation's units, geodesics); then every new page with formulas gets formula checks alongside its number checks.

**Status (2026-11-15): built.** 30 formula checks on 10 8.286 pages (`sphere-metrics`, `non-euclidean-geometry`, `closed-universe-cycloid`, `friedmann-equation`, `christoffel-symbols`, `open-universe-geometry`, `robertson-walker-closed`, `open-universe`, `luminosity-and-redshift`, `supernova-evidence`); 304 tests in all, all passing, no page errors found. To show the checks can fail, 12 typical mistakes were put into copies of these formulas (a factor 2 dropped or added, a sign flipped in the metric, 1 + u² for 1 − u², the open sign in the closed cycloid, 9α/4 for 9α/2, kc²/a for kc²/a², 2E/c for 2E/c², cos²θ for sin θ cos θ, a missing square root, Ω + 2 for Ω − 2): all 12 were caught. One of them, a factor 2 inside sin(r/R), vanishes in the flat limit, as the honest limit above warns; the equator identity on the same page catches it, which is why pages get both kinds. Still to do: `false-vacuum`, `grand-unified-theories` and `higgs-field` (particle-physics pages, few checkable formulas).

## 7. Further checks (added 2026-11-15)

Five more checks, in order of value for effort:

1. **Graphs (automatic, no data to write).** A Node check, run by `content:check`, reads every `<Plot>` with the same mathjs the site uses. Every curve must compile and give finite values somewhere on its domain. Tangents, secants and `{ curve, at }` points must name a real curve and parameter. Every fixed labelled point `{ x, y }` must lie on one of its plot's curves, within the precision its numbers are printed to. A point that is deliberately off every curve (a measurement, a marker) says so with `offCurve: true`. A second, hand-written half comes later: a `plot` entry in `calcs/` pairs a curve's mathjs expression with the formula in the text and compares them at sample points.
2. **The simple solutions plugged back in.** `identity` entries showing that a ∝ t^(2/3) (matter), a ∝ t^(1/2) (radiation) and a ∝ e^(Ht) (vacuum) solve the Friedmann equation, on the pages that derive them. Numerical derivatives are enough; SymPy would give exact proofs but adds little over several sample points and handles integrals and inverse hyperbolic functions poorly.
3. **Physical constants against CODATA.** One test compares every constant in `calcs/constants.yaml` that CODATA covers (c, G, ħ, k_B, …) with the CODATA values in `scipy.constants`. Cosmological parameters are **not** compared with astropy's latest Planck values: the site teaches with the 2013 numbers Guth quoted, and later values must be marked as later developments, so each page is checked against the source it cites (`shown` and `cite`).
4. **One value per role across pages.** The pages quote at least seven values of H₀ (67.3, 67.4, 67.7, 68, 70, 73, 100 km/s/Mpc), mostly on purpose: Guth's 2013 Planck value, round example values, the local measurement in the Hubble tension, the h-scaling value. A registry, `calcs/values.yaml`, names each quoted value of H₀, the age, Ω, T_CMB and similar with its role; the numbers scanner (§1) then flags any value on a page that matches no registered role. Built together with the numbers inventory.
   **Built (2026-11-15).** `calcs/values.yaml` registers 7 quantities — H₀, the age of the universe, T_CMB, Ω_m, Ω_vac, n_s and σ₈ — with 49 values, each with a role (Guth 2013, later, example, computed, historical). `lib/values.ts` finds each quantity by its unit or symbol (ages only between 12.5 and 15 billion years, temperatures only between 2.5 and 2.8 K, where nothing else is quoted) and `content:check` fails on any value not in the registry and warns about registered values no page uses. It finds 146 quoted values on the site, all registered; no value was wrong. Planted mistakes (H₀ 66, age 13.6 billion years, T_CMB 2.73 K) were all caught. `npm run scan -- --values` lists every quoted value with its role and page. Limits: a registered value used in the wrong role (70 km/s/Mpc presented as the measured value) is not caught, and a quantity written in a form the patterns don't know is missed.
**Update (2026-11-15): 8.01 and 8.902 covered.** All 12 pages now have calculation files (138 checks: every worked-example number, the numeric quiz answers, and identities such as the growing and decaying modes of the perturbation equation, the Gaussian tail behind Press–Schechter's erfc, and the orbit equation). Two helpers were added: `solve('expr', 'var', lo, hi)` (bisection, e.g. the cycloid parameter for a given time) and `erfc`. No numbers were wrong. One page was unclear: the GeV-scale timeline times on `dark-matter-freeze-out` hold only with g* ≈ 100, which the page now says. All three courses with pages (8.01, 8.286, 8.902) are covered; 452 tests pass. `content:check` now also rejects control characters in pages (a shell once turned "\a" in "\approx" into a bell character while editing).

**Status (2026-11-15): items 1–3 built.**
- *Graphs:* `lib/plot-check.ts`, run by `content:check`. It reads all 51 graphs on 45 pages by evaluating each page's MDX with stand-in components, so arrays and objects come out exactly as the site sees them. A whole-number x (such as "today" at 1) counts as exact; decimals and y values get their printed rounding. Tried on deliberately broken graphs (a point off its curve, a last-digit slip, a curve that never gives a value, a tangent to a missing curve, an unknown parameter, a point off a parametric curve): all flagged, and the correct versions pass. On the site it found a last-digit slip on `spherical-collapse` (δ_lin point 0.3143 → 0.3144, fixed) and one marker meant to be off the curves (now `offCurve: true`).
- *Simple solutions:* identities on `open-closed-flat` (t^(2/3): ȧ²a constant), `radiation-dominated-universe` (t^(1/2) with ρ = 3/(32πGt²); ρa⁴ constant) and `exponential-expansion` (ȧ/a = χ; χ has units 1/s). Wrong exponents, a wrong density factor and a missing square root were all caught.
- *Constants:* `test_constant_matches_reference` compares every entry in `calcs/constants.yaml` with pint's CODATA values (and the IAU 2015 GM☉ for M☉); a new constant without a reference fails. It caught an outdated G (CODATA 2014) put in on purpose, and found that ħ was stored truncated (1.054571817 instead of 1.0545718176…; fixed).
- 314 calculation tests in all, passing.

5. **Units of every formula (long term).** Give each meaning in `data/symbols.json` a unit, parse each `<Formula>` with SymPy's LaTeX parser and check that both sides have the same units. Large: letters change meaning from page to page, and TeX is often ambiguous to a parser. Until then, important formulas get a hand-written `units` entry.

## 8. Required for every page with numbers (built 2026-11-15)

`content:check` warns when a page has result-like numbers (the inventory's definition, §1) but no `calcs/<course>/<slug>.yaml`. Pages without numbers (such as `false-vacuum`) need no file. Two additions make this workable:

- **`kind: fact`** — a quoted figure that is not a calculation (Guth's "about 28 free parameters", the Higgs mass, an experimental limit). Nothing is recomputed, but the test checks that the text still appears on the page exactly as recorded and that its source is valid.
- **`source: {ref: "…"}`** — for `origin: later-data` only: a later measurement the page states without a reference of its own, named in words (e.g. "KATRIN Collaboration, Science (2025)").

`grand-unified-theories` and `higgs-field` were the last pages with numbers but no file; they now have one (five facts and one recomputed value: the minimum neutrino mass sum √Δm²₃₁ + √Δm²₂₁ ≈ 0.06 eV). 459 tests.

## 9. Audit (2026-11-15)

`reviews/calc-audit.md` records a full audit of the harness and every calcs file. Changes: `integrate` uses
`scipy.integrate.quad`, `deriv` Ridders' method (a Richardson tableau with its own error estimate, accurate to ~10⁻¹² without depending on platform rounding), `solve` Brent's method with a pole check
(each raises `NumericError` instead of returning a doubtful value; regression tests in `tests/calc/test_harness.py`);
every `shown` string must occur exactly once on its page; H₀ and T_CMB inputs must be registered values; loose
tolerances tightened; samples extended into singular regions; 14 formula checks added on 10 pages. An independent
cross-check, `npm run calc:crosscheck` (`scripts/calc-crosscheck.py`), recomputes 35 values and 13 identities with
NumPy/SciPy without the harness. No page values were wrong; four clarifications are listed for the owner. 501 tests.

## Shared work with the symbols plan

The page scanner (walking `content/`, reading frontmatter, `<Formula>`, `<WorkedExample>` and quiz text) is the same code the symbols plan needs. Build it once, as `scripts/scan-content.ts`, with two outputs: the numbers inventory for this plan and the symbols inventory for the other. It is Node because the symbols output feeds the site build; the pytest suite only reads the YAML files and the `.mdx` text, so it doesn't need the scanner to run. See [SYMBOLS_PLAN.md](SYMBOLS_PLAN.md).
