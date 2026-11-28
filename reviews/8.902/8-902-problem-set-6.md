---
page: content/year-5/8.902/8-902-problem-set-6.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/resources/mit8_902_f23_problem_set_6_pdf/ (read: local pdftotext copy, 2 pages)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec16.pdf (read: local PDF, printed pp. 92-99; pp. 93-94 rendered and inspected as images)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not fetched; G, k_B, m_p checked against the CODATA 2018 values)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read 2026-11-28)
  - https://doi.org/10.1086/170520 (not read, by rule: IOP/AAS pre-2021, cite only)
verdict: needs-changes
---

# Review: Problem Set 6: The spherical top hat, the largest galaxies that can cool, and the Press–Schechter normalisation

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

My answers (written to this file from the stripped statements and MIT's sheet only, before the full page was opened; script `s6py/blind.py` in the scratch folder):

- p1 A: t_ff = sqrt(3π/(32 G ρ_ta)) = t_ta (EdS) = 2/(3 H0 (1+z)^{3/2}) = **340.0 Myr** (ρ̄(z=8) = 6.903e-24 kg/m³, ρ_ta = 3.832e-23 kg/m³).
- p1 B: ΔU = (3/5) G M²/R_ta (fall from R_ta to R_ta/2), so T = (2/5) μ m_p G M/(k_B R_ta) with μ = 1/2; R_ta(1e12 M⊙) = 74.98 kpc; **T12 = 1.390** (10⁶ K); **p = 2/3 = 0.667**.
- p1 C: ρ_vir = 8 ρ_ta; **n_H = 9.164e-3 cm⁻³**; t_cool = 3 n_H k_B T/(n_H² Λ) = 3 k_B T/(n_H Λ) = **199.0 Myr**.
- p1 D: t_cool ∝ M^{2/3}, t_ff independent of M, so **M_max = 2.233 × 10¹² M⊙**.
- p2 A: ∫|∂F/∂M| dM = F(M→0) − F(M→∞) = 1/2 − 0 = 1/2; plain-PS fraction above M_* = ½ erfc(1/√2) = **0.1587**.
- p2 B: δ̄ at a point as a random walk in S = σ²; with a sharp k-space filter the steps are independent; collapsed fraction = fraction of walks that crossed δ_c/D at any S' < S; reflection about the barrier gives as many crossed-and-now-below walks as now-above, so F = erfc(...) = 2 × PS. (Box questions not visible blind; expected answers: sharp k-space window; factor 2 from walks that crossed and fell back.)
- p3: drawing, self-marked.

Comparison (one line per answer id):
- p1-tff: page 340, mine 340.04. Agree.
- p1-t12: page 1.39, mine 1.3897. Agree.
- p1-p: page 0.667, mine 2/3. Agree.
- p1-nh: page 9.16, mine 9.164. Agree.
- p1-tcool: page 199, mine 199.04. Agree.
- p1-mmax: page 2.23, mine 2.233. Agree.
- p2-mstar: page 0.159, mine 0.1587. Agree.
- p2-filter: page choice 2 (sharp cut in Fourier space). Agree.
- p2-factor: page choice 1 (walks that crossed and fell back). Agree.

No disagreement. Calcs file: `pytest tests/calc -k 8-902-problem-set-6` in the worktree, 40 passed; every `shown:` string of the calcs file occurs in the page text (checked by script). `npm run content:check` in the worktree: 0 errors; the only warning for this page is "no review file yet".

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "How to answer", first paragraph | n/a | "type decimals, for example `0.25` or `340`": 340 is exactly the answer of box p1-tff (Problem 1(A)), printed before the problem | Use a neutral example, as other sets do: "for example `0.25` or `1.2e5`" |
| 2 | error | Constants paragraph; `references.nasasun` | NASA Sun fact sheet (read 2026-11-28): GM = 132,712 × 10⁶ km³/s² (6 digits); mass 1,988,400 × 10²⁴ kg | "$GM_\odot = 1.3271244 \times 10^{20}$ m³/s² of NASA's Sun fact sheet": the 8-digit value is the IAU 2015 nominal parameter (as `calcs/constants.yaml` itself says), not on the cited page | Either attribute the value to the IAU 2015 Resolution B3 nominal solar mass parameter (add that reference), or quote NASA's $GM_\odot = 1.32712 \times 10^{20}$ m³/s² (giving $M_\odot = 1.98840 \times 10^{30}$ kg). No answer changes at 3 figures |
| 3 | warning | Intro ("MIT's Problem 3 is a bonus for a drawing; it is optional here"), "How to answer" points sentence, `## Problem 3` exercise, `summary` ("and MIT's bonus drawing") | Problem 3: bonus, draw a congratulatory galaxy, 5 points | Kept as an optional 5-point exercise | Per the run's instruction, leave it out: delete the `## Problem 3` section; intro: "MIT's Problem 3, a five-point bonus for drawing a galaxy, is left out."; How to answer: drop "plus MIT's 5 bonus points for Problem 3, which is optional here" and say MIT gives points only for its bonus problem, which is left out; summary: "Two problems on ..." without the drawing |
| 4 | warning | Problem 2(B) statement | (MIT: explain the idea and how it fixes the fudge factor; no boxes) | "Then (our additions) answer the two questions in the boxes." The boxes' topics are not named in the statement | Name them: "Then (our additions) say which window function makes the steps of the walk independent, and where the missing factor 2 comes from." |
| 5 | warning | Problem 2(B), second hint | n/a | "Count a point ... if its curve has crossed $\delta_c$ at any $S$ smaller than $S(M)$ ... How many curves cross and come back down?" restates the right choice of box p2-factor almost word for word | Shorten to "Plain Press–Schechter asks only whether the curve is above $\delta_c$ at $S(M)$. What about a curve that was above it at a smaller $S$?" |
| 6 | warning | `data/symbols.json`, entry id `Omega-monopoles` (form `\Omega_M`) | n/a | The page's meaning ("present density parameter of matter in MIT's default cosmology") was added to an entry whose `name` is "monopole density parameter" (from 8.286 Problem Set 9); the popup and the symbol list on this page will title Ω_M "monopole density parameter" | Give this page its own entry, e.g. id `Omega-M-matter`, forms `["\\Omega_M"]`, name "matter density parameter", spoken "capital omega capital M", scoped to `8-902-problem-set-6` (merge rule permitting), or rename the shared entry to a neutral name ("Omega M") |
| 7 | info | Problem 1(D), Check | n/a | "about $10^{12}M_\odot$, the mass of the halos of the largest galaxies such as the Milky Way" | The Milky Way is not among the largest galaxies; say "the halo mass of galaxies like the Milky Way, near the top of the range of single galaxies" |
| 8 | info | Problem 2(B), Check, first sentence | n/a | "the steps are correlated, and the reflection argument is no longer exact, and the first-crossing fraction has to be found numerically" (double "and") | "...the steps are correlated: the reflection argument is no longer exact, and the first-crossing fraction has to be found numerically." |
| 9 | info | Problem 2(A), solution | n/a | "$\sigma_R^2 \propto M^{-(n+3)/3}$ for $P \propto k^n$ with $n > -3$" | Correct as a scaling; with a real-space top hat σ² is finite only for n < 1. Optional "(−3 < n < 1 for a top-hat window)" |

## Arithmetic and answer checks
- Every number in the solutions recomputed (script plus by hand): H0 = 2.301e-18 s⁻¹; ρ_c = 9.469e-27; ρ̄(z=8) = 6.903e-24; ρ_ta = 3.832e-23 kg/m³; t_ff = 1.073e16 s = 340 Myr; t_ta = 340 Myr; 2 t_ta = 680 Myr; 1+z at collapse = 9/2^{2/3} = 5.67; 1/sqrt(Gρ_ta) = 627 Myr, ratio sqrt(32/3π) = 1.84; flat Ω_M = 0.3: 2/(3H(z)) = 620 Myr, ratio 27/sqrt(219.4) = 1.82; R_ta = 2.314e21 m = 75.0 kpc, R_vir = 37.5 kpc; T = 1.39e6 K; 2.78e6 K (twice); μ = 0.6 gives 1.67e6 K; ρ_vir = 3.066e-22 and 18π²ρ̄/4 = 3.066e-22 kg/m³; f_b ρ_vir = 1.533e-23; n_H = 9.16e-3 cm⁻³; t_cool = 6.28e15 s = 199 Myr; M_max = 2.23e12 M⊙; T(M_max) = 2.37e6 K; ½erfc(1/√2) = 0.159, erfc(1/√2) = 0.317; normalisation integral 0.5000 (my own numerical check with σ ∝ M^{-1/3} also gives 0.5). All correct.
- Derivations: t_ff = π/(2√ξ H_ta) from the symmetry of eq. (435)/(436) with eq. (427) is right (rendered p. 93: H_ta in (427) is the background rate, ρ_ta = 3H_ta²ξ/8πG, so ξH_ta² = 8πGρ_ta/3 as the page says). Energy released (3/5)GM²/R_ta equals the virial kinetic energy: correct. t_cool = 3k_BT/(n_HΛ) with n_e = n_H: correct. Each solution ends with a check (units, a second route, or a limit).
- Tolerances: p1-tff 2% rejects 627 and 620; p1-t12 2% rejects 1.67 (μ = 0.6) and 2.78; p1-p 1% rejects 0.5 and 1; p1-nh 2% rejects 1.15 (factor 8 forgotten); p1-tcool 2% rejects 99.5 (electrons forgotten) and 398; p1-mmax 3% accepts 2.233 from rounded inputs; p2-mstar 1% rejects 0.317. No `mistakes` lists or formula boxes on this page, so no `vars` ranges to check.
- Choice boxes: right answers at positions 2 and 1 (varied); the four choices of each box are of similar length and not decidable from form alone. The marked choices are physically right.
- Points: Problem 1 12+16+16+16 = 60; Problem 2 20+20 = 40; Problem 3 optional 5.

## Coverage and order
- Problems 1(A)-(D), 2(A)-(B) and 3 in MIT's order, same physics. Additions are marked: the M_* fraction in 2(A) "(our addition)", the boxes of 2(B) "(our additions)". The choices MIT leaves open (EdS with H0 = 71, μ = 1/2, definitions of t_ff and t_cool) are stated as "our reading"/"our assumptions" in the statements.
- MIT's Problem 3 is kept as optional (row 3), against the run's instruction to leave it out.
- The conflict between MIT's default flat Ω_M = 0.3 cosmology and "Einstein-de Sitter" in Problem 1 is handled openly (intro and the 1(A) check).

## Licensing
- Wording is the page's own; no sentence of MIT's sheet or notes copied beyond short standard phrases. MIT's typo "Excusion" is quoted and flagged.
- No figures. Lecture 16 notes: no "All rights reserved" or "Courtesy of" notice in the text; the mass-function figure on p. 98 (curves from Press-Schechter, Sheth-Mo-Tormen and others) is not reproduced.
- Sparke & Gallagher: not used, said so. Bond et al. (1991, ApJ, IOP/AAS pre-2021): cited from the bibliographic record only, "(not read)" in `references`; the explanation is built from the 8.902 notes and standard results. Complies with the AI-terms table.
- No OpenStax or LibreTexts; no em dashes (grep: 0).

## Notes
- Citations checked against the PDF's printed page numbers: eq. (427) p. 93; eqs. (435), (436), τ = 2/3 and 4/3 p. 94; eq. (446) and "y = 1/2 at virialization" p. 96; eq. (447) p. 96; eqs. (452), (457), (458) p. 97. All correct. MIT sheet: Problems 1 and 2 on p. 1, Problem 3 on p. 2; the page's "p. 1" citations are right.
- Constants: G = 6.67430e-11, k_B = 1.380649e-23, m_p = 1.672622e-27 (CODATA 2018: 1.67262192369e-27) correct; 1 Mpc = 3.0857e22 m and the Julian Myr correct. M⊙ = 1.98841e30 kg is fine numerically; only its attribution is wrong (row 2).
- `summary` names no answer.
- Symbols: every letter with a cosmology meaning used on the page (H₀, H_ta, Ω_M, Ω_Λ, Λ, ξ, ρ_ta, ρ_vir, R, R_ta, R_vir, M, M_*, M_max, T, T₁₂, μ, k, z, σ_R, δ_c, D, F, S, τ, y, t, n) has a meaning scoped to this page; ρ̄ and δ̄ use the general density meaning and the 8.902 course meaning of δ, which fit; H alone (in 2/3H(z)) uses the 8.286/8.902 course meaning, which fits. No meaning gives an answer away. Only the Ω_M entry name is wrong (row 6).
- Link targets (`spherical-collapse`, `press-schechter`, `virial-theorem`, `stellar-populations-chemical-evolution`) exist in `content/year-5/8.902/`.

COUNTS: errors=2 warnings=4 info=3

## Resolution (2026-11-28, by the page author)

1. (error) "How to answer": the example input is now `0.25` or `1.2e5`, neither an answer of the set.
2. (error) Constants: $GM_\odot = 1.3271244 \times 10^{20}$ m³/s² is now credited to the IAU 2015 nominal solar mass parameter of Resolution B3; the `nasasun` reference is replaced by `iau2015` (IAU 2015 resolutions PDF, location "Resolution B3"), and the calcs entry `p1-msun-kg` cites it. No number changed.
3. (warning) MIT's bonus Problem 3 is left out: its section and exercise are deleted (it had no calcs entries); the intro says "MIT's Problem 3, a five-point bonus for drawing a galaxy, is left out"; "How to answer" says MIT gives points only for its bonus problem, which is left out, and the set has 100 points (60 + 40); the `summary` now reads "Two problems on ..." without the drawing.
4. (warning) Problem 2(B) now names what the boxes ask: "(our additions) say in the boxes which window function makes the steps of the walk independent, and where the missing factor 2 comes from."
5. (warning) The second hint of 2(B) is shortened to the reviewer's wording and no longer restates the right choice.
6. (warning) Ω_M: `data/symbols.json` has one entry per form (the merge script folds a second entry with the same form into the first), so instead of a duplicate entry the shared entry `Omega-monopoles` (form `\Omega_M`) is renamed to the neutral "density parameter of M", which fits both its monopole meaning (8.286 Problem Set 9) and this page's matter meaning. No meaning on `main` was changed; this page's own meaning stays as written.
7. (info) Problem 1(D) check: "the halo mass of galaxies like the Milky Way, near the top of the range of single galaxies".
8. (info) Problem 2(B) check: the double "and" is replaced by a colon.
9. (info) Problem 2(A) solution: "finite for a top-hat window only if $n < 1$" added after the scaling of $\sigma_R^2$.

Status set to `reviewed`.
