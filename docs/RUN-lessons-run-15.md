# Lessons run 15 (2026-11-19)

Branch `lessons-run-15`, from `main` after PR #86 (03:44 to about 10:00, with a pause from about 05:20 to 08:40 when the 5-hour usage limit was reached). Two Year IV courses were added in full: **8.08 Statistical Physics II** (Spring 2005, Xiao-Gang Wen) and **8.09 Classical Mechanics III** (Fall 2014, Iain Stewart). That is **64 new pages** (26 + 38), every one with its calcs file, page-scoped symbol meanings, generated graphs, an original worked example and an independent review (17 reviews said "needs changes", the others "pass with notes"; all findings fixed or answered in a Resolution section, `status: reviewed`). Every commit passed the pre-commit checks (`content:check`, calc tests) and `npm run build` passes.

Owner's prompt 4 ("ship as you go") was given during the run: the work went out as PRs #87 to #91, each merged after its checks passed, and the pages were checked on opencosmology.eu.

## How the run worked

- Chapters were written in parallel by writer agents, each in its own git worktree (`.claude/worktrees/r15-a` … `r15-g`, with `node_modules` and `.venv` linked), each running its own reviewer. Their commits were brought onto the run branch one by one; `data/symbols.json` was merged by meaning (new entries, new meanings, pages added to meanings), and two entries for the same form were combined into one.
- Pages written in parallel could not list each other as prerequisites; a final commit per course adds those links.

## 8.08 Statistical Physics II (26 pages)

`content/year-4/8.08/_course.json`: unit "Chapter"; chapters I to IX are lectures 1 to 9, the second Bose-gas PDF is 7.5, the two typed supplements are 10 and 11. The nine chapters are handwritten scans with no text layer and were read from page images; Wen's handwritten page numbers run on through the chapters (pp. 1 to 126).

| Ch. | Pages |
|---|---|
| I | `canonical-ensemble-free-energy`, `information-equipartition-ideal-gas` |
| II | `van-der-waals-equation`, `van-der-waals-phase-transitions` |
| III | `ising-model-mean-field`, `ginzburg-landau-theory` |
| IV | `grand-partition-function`, `equal-chemical-potentials` |
| V | `random-variables-binomial-distribution` |
| VI | `particle-number-fluctuations`, `volume-energy-fluctuations` |
| VII | `photon-and-phonon-gases`, `ideal-bose-gas-condensation`, `interacting-bosons-gross-pitaevskii` |
| VII, part 2 | `superfluidity-vortices`, `bose-condensation-ginzburg-landau` |
| VIII | `ideal-fermi-gas`, `degenerate-fermi-gas`, `semiconductors-and-diodes` |
| IX | `mean-free-path-sound-diffusion`, `viscosity-conduction-boltzmann-equation`, `einstein-relation-langevin-noise` |
| Supplement 1 | `counting-states-spins-ideal-gas` |
| Supplement 2 | `bosons-as-vibrating-string`, `vacuum-casimir-interacting-bosons`, `superfluid-symmetry-breaking-phonons` |

Cosmology links where genuine: the thermal history and the 7/8 factor for fermions (8.286 L17), blackbody radiation and the CMB (L16, L18), the Saha equation and recombination (8.902 L12, L20), Silk damping and decoupling (8.902 L17), counts in cells and the correlation function (8.902 L15), Press–Schechter (L16), the Higgs field and false vacuum (8.286 L22, L23), the vacuum energy (L1, L18).

## 8.09 Classical Mechanics III (38 pages)

`content/year-4/8.09/_course.json`: the typed course notes in seven chapters; OCW does not mark the 26 lecture boundaries, so the syllabus follows the notes' 33 sections (unit "Section", lecture = section number, as for the Ferreras course). Section 1.1 (the introduction) is `coveredBy` the first page.

| Ch. | Pages |
|---|---|
| 1 | `lagrangian-mechanics-review`, `hamiltonian-mechanics-review`, `symmetry-conservation-laws`, `constraints-friction-dalembert`, `calculus-of-variations-review`, `lagrange-multipliers-constraint-forces` |
| 2 | `rigid-body-coordinates-euler-angles`, `rotating-frames-coriolis-force`, `moment-of-inertia-tensor`, `euler-equations-rigid-body`, `symmetric-top-one-point-fixed` |
| 3 | `small-oscillations-simultaneous-diagonalization`, `normal-coordinates-co2-molecule` |
| 4 | `canonical-transformations-generating-functions`, `poisson-brackets-symplectic-condition`, `hamiltonian-generators-conservation-laws`, `hamilton-jacobi-equation`, `kepler-problem-hamilton-jacobi`, `action-angle-variables`, `action-angle-variables-kepler` |
| 5 | `perturbation-theory-hamilton-jacobi`, `pendulum-periodic-secular-perturbations`, `perihelion-precession-perturbed-kepler` |
| 6 | `continuum-limit-fluid-variables`, `continuity-equation-vorticity`, `euler-equation-fluid-conservation`, `static-fluids-steady-flows`, `potential-flow`, `fluid-sound-waves`, `viscous-fluid-equations`, `viscous-pipe-flow-reynolds`, `stokes-flow-sphere` |
| 7 | `chaos-phase-space-poincare-sections`, `one-dimensional-bifurcations`, `fixed-points-two-dimensions`, `limit-cycles-hopf-bifurcations`, `chaos-logistic-map`, `strange-attractors-fractals-turbulence` |

Cosmology links where genuine: the fluid equations and sound waves to the Jeans analysis, linear perturbations and the acoustic peaks (8.902 L6, L7, L13, L17), hydrostatic cluster masses (Ferreras 2.3), perihelion precession (8.033, 8.962 L9), the Higgs field's choice of minimum (8.286 L22).

## Slips found in the notes

Each is pointed out in brackets on its page and never repeated, and the calcs headers record them. Examples: 8.08 p. 3 "maximize A" for minimize; p. 50 the photon-density constant 0.23 for 0.2436; p. 61 helium T_c 1.8 K where Wen's numbers give 2.76 K; p. 102 viscosity /(3σ) for /(6σ); Supplement 2 eq. (4.6.1) cut-off sum; 8.09 eq. (1.100) +λ for −λ; (2.63) the cube's moment ma²/12 for 11ma²/12; (3.33) bond-angle denominators; (5.38) sign of c²dτ²; (6.150) a dropped integration constant; (7.42) det M = ac − bd.

## Fixes made after shipping

- The new `\binom` symbol entry had no display example, so the "Symbols on this page" list showed a KaTeX error on three 8.08 pages; it now has `"example": "\\binom{n}{k}"` (found on a local production build before merging).
- One 8.08 summary used `g_{3/2}`; it now reads `g_(3/2)` like other plain-text summaries.

## Files outside the new course folders

- `data/symbols.json`: page-scoped meanings and new entries for all 64 pages; new general entries for `\prod` (product) and `\binom` (binomial coefficient), and `\mid` scoped to one page.
- `calcs/values.yaml`: two entries ('2.76', '2.8', the helium Bose T_c, marked as not CMB values) so the T_CMB check accepts them.

## For the owner

- **Read-aloud gaps (site code, `lib/speech.ts`), avoided on the pages for now:** brace-less fractions (`\frac12`, `\frac\Delta2`, `\frac\tau\hbar`) and a `\frac` nested in a `\frac`/`\dfrac`; `\underbrace`; `\bigg|_{…}`, `\big|_{…}`, `\Big|` (evaluation bars); `\top` (transpose); `\mathbb 1`; a subscript on an integral (`\int_{\mathcal V}`); `\sum_{\langle ij\rangle}` is read "the sum over the average of i j"; `N_<`; `\partial\mathcal F` without braces; `#`.
- **Calc checker:** a quiz choice with "s⁻¹" is read as a number; parametric curves are sampled too coarsely for exact points (one page uses `offCurve: true`).
- **Permissions:** in this session auto mode refused GitHub auto-merge and, until the owner said "merge", `gh pr merge`; Vercel preview deployments need a Vercel sign-in, so pages were checked on a local production build and then live.
- **Next:** 8.962 (General Relativity), the last course of the order of work; 8.02 problem-solving and exam-review sessions remain an open decision.
