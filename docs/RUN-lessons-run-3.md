# Lessons run 3 (branch `lessons-run-3`)

An unattended run adding new lessons, started 2026-11-16 at 13:24, planned to stop by 18:24 (five hours).
The branch starts from `lessons/18.02-lectures-1-29` (pull request #25, stacked on #24 and #23), because the new 18.02 pages build on those lessons.
Rules for the run (owner, as for run 2): new lessons only, plus their calcs, reviews and new entries in `data/symbols.json`;
no changes to existing lessons or site code; one commit per lesson; nothing pushed.

## Lessons

| # | Lesson | Page | Status | Notes |
|---|---|---|---|---|
| 1 | 18.02 Lecture 30: Line integrals | `line-integrals-in-space` | reviewed | Review: no errors; three citation and wording warnings fixed. |
| 2 | 18.02 Lecture 31: Stokes' theorem | `stokes-theorem` | reviewed | Review: no errors; added the orientation cases and the differentiability consequences, corrected the circulation note. |
| 3 | 18.02 Lecture 32: Stokes' theorem (cont.) | `stokes-and-path-independence` | reviewed | Review: no errors; separated a remark from Auroux's words, fixed the leadsTo reason, added the potential review topic. The exam review in the second half is summarised, not expanded. |
| 4 | 18.02 Lecture 33: Maxwell's equations | `div-curl-and-maxwell` | reviewed | Review: no errors; citation details and a transcript slip noted. Lectures 34–35 are final reviews (skipped); 18.02 is now complete. |
| 5 | 8.02 Session 1: Fields | `fields-gravitational-and-electric` | reviewed | First 8.02 page (after filling the 8.02 session list in its own commit). Review: no errors; three wording warnings fixed. |
| 6 | 8.02 Session 2 (first half): Dipoles | `electric-dipoles` | reviewed | Review: no errors; the charging-by-induction sentence corrected and marked as the page's own. |
| 7 | 8.02 Session 2 (second half): Continuous charge distributions | `continuous-charge-distributions` | reviewed | Review: no errors; one missing sign condition added. Session 3 is a problem-solving session (skipped). |
| 8 | 8.02 Session 4: Electric potential | `electric-potential` | reviewed | Review: no errors; the rod's limit corrected, external-agent wording and the callout's three cases clarified. |
| 9 | 8.02 Session 5: Gauss's law | `gauss-law` | reviewed | Review: no errors; the callout's claim about Guth corrected (shell theorem), a page-own remark marked, skipped group problems noted. |
| 10 | 8.02 Session 7: Conductors and capacitors | `conductors-and-capacitors` | reviewed | Review found one error (the end of the radiation era, in the cosmology callout), fixed. |
| 11 | 8.02 Session 8: Capacitors and dielectrics | `capacitors-and-dielectrics` | reviewed | Review: no errors; battery sentence matched to the slide, page-own explanation marked. Session 9 is a problem-solving session (skipped). |
| 12 | 8.02 Session 10: DC circuits | `dc-circuits` | reviewed | Review: no errors; added a two-loop Kirchhoff example. Session 11 is a problem-solving session (skipped). |
| 13 | 8.02 Session 12: Measuring circuits and RC circuits | `rc-circuits` | reviewed | Review: no errors; ohmmeter condition corrected, Section 7.5 details added. Session 13 is an exam review (skipped). |
| 14 | 8.02 Session 14: Magnetic fields | `magnetic-fields` | reviewed | Review: no errors; the Earth's poles stated as on the slide, monopole callout attributed to the right 8.286 lectures. |
| 15 | 8.02 Session 15: Forces on currents and Biot–Savart | `biot-savart-law` | reviewed | Review: no errors; slide citations and directions tightened. Session 16 is a problem-solving session (skipped). |
| 16 | 8.02 Session 17: Magnetic dipoles | `magnetic-dipoles` | reviewed | Review: no errors; "aligned magnets attract" limited to end-to-end alignment. |
| 17 | 8.02 Session 18: Levitation and Ampère's law | `ampere-law` | reviewed | Review: no errors; page-own additions marked (Helmholtz coil, solenoid ends), toroid field added. Session 19 is a problem-solving session (skipped). |
| 18 | 8.02 Session 20: Faraday's law | `faradays-law` | reviewed | Review found two wrong notes-page citations (fixed) and three wording warnings (fixed). |
| 19 | 8.02 Session 21: Eddy currents, transformers, magnetic materials | `transformers-and-magnetic-materials` | reviewed | Review: no errors; citation and wording fixes, susceptibility added. Sessions 22–23 are problem solving and exam review (skipped). |
| 20 | 8.02 Session 24: Inductance and LR circuits | `inductance-and-lr-circuits` | reviewed | Review found two wrong page citations (fixed); loop-rule caveat added. |
| 21 | 8.02 Session 25: LC and RLC circuits | `lc-and-rlc-circuits` | reviewed | Review found one error (the plotted curve's frequency), fixed; damping condition added. |
| 22 | 8.02 Session 26: AC circuits and resonance | `driven-rlc-circuits` | reviewed | Review: no errors; the two meanings of Q separated. Session 27 is a problem-solving session (skipped). |
| 23 | 8.02 Session 28: Displacement current, Maxwell's equations, light | `maxwell-equations-and-em-waves` | reviewed | Review found off-by-one notes page numbers and MIT's 2.997 slip (both fixed). |
| 24 | 8.02 Session 30: Standing waves and the wave equation | `standing-waves` | reviewed | Review: no errors; sign conventions explained, quantum mechanics named in the callout. Session 29 is a problem-solving session (skipped). |
| 25 | 8.02 Session 32: Generating electromagnetic waves | `generating-em-waves` | reviewed | Review found one error (spark-gap length), fixed; far-field pattern added. Session 31 is an exam review (skipped). |
| 26 | 8.02 Session 33: Interference and diffraction | `interference-and-diffraction` | reviewed | Review found one error (the slide's wavelength ratio), fixed; thin-film caveat and gratings added. Sessions 34–36 are problem solving, a lecture without notes or slides, and review (skipped): 8.02 is complete. |
| 27 | 18.03 Lecture 1: Direction fields | `direction-fields` | reviewed | First 18.03 page. The calcs check found a sign slip in the lecture's existence/uniqueness example (xy′ = 1 − y vs the lines y = 1 + Cx); the page uses xy′ = y − 1 and notes the slip; the review confirmed this reading. |
| 28 | 18.03 Lecture 2: Euler's method | `eulers-method` | reviewed | Review: no errors; a lecturer slip about the cost of RK4 noted in brackets. |
| 29 | 18.03 Lecture 3: First-order linear equations | `linear-first-order-equations` | reviewed | Review: no errors or warnings; Example 1 follows the lecture's working (xy′ − y = x³), as the review confirmed. |
| 30 | 18.03 Lecture 4: Substitution methods | `substitution-methods` | reviewed | Review: no errors; the spiral graph's window fixed. |
| 31 | 18.03 Lecture 5: Autonomous equations | `autonomous-equations` | reviewed | Review: no errors; small wording notes applied. |
| 32 | 18.03 Lecture 6: Complex numbers and exponentials | `complex-exponentials` | reviewed | Review: no errors; wording notes applied (claims the lecture only mentions now marked so). |
| 33 | 18.03 Lecture 7: Steady state and sinusoidal input | `sinusoidal-input-response` | reviewed | Review: no errors; citations and calcs tolerances tightened. |
| 34 | 18.03 Lecture 8: Sine–cosine identity and linear models | `sinusoids-and-linear-models` | reviewed | Review: no errors; identity's quadrant fixed (cos φ = a/c, sin φ = b/c), leadsTo wording corrected. |
| 35 | 18.03 Lecture 9: Second-order constant-coefficient equations | `second-order-constant-coefficients` | reviewed | Review: no errors; Mattuck's ~70° estimate of arctan 2 (63.4°) noted; wording notes applied. |
| 36 | 18.03 Lecture 10: Complex roots and damped oscillations | `damped-oscillations` | reviewed | Review: no errors; one calcs check made meaningful, wording notes applied. |
| 37 | 18.03 Lecture 11: Linear operators and the Wronskian | `linear-operators-and-wronskian` | reviewed | Review: no errors; the Wronskian step now notes it needs uniqueness; Abel's garbled dates corrected (1802–1829). |
| 38 | 18.03 Lecture 12: Inhomogeneous equations and stability | `inhomogeneous-equations-and-stability` | reviewed | Review: no errors; the p. 15 slip and the unfinished A, B criterion described more exactly. |
| 39 | 18.03 Lecture 13: The exponential input theorem | `exponential-input-theorem` | reviewed | Review: no errors; the resonance attribution and the higher-root remark corrected. |
| 40 | 18.03 Lecture 14: Resonance and beats | `resonance-and-beats` | reviewed | Review: no errors; ω₁'s change of meaning flagged, practical-resonance condition ω₀² > 2p² added. |
| 41 | 18.03 Lecture 15: Introduction to Fourier series | `fourier-series-introduction` | reviewed | Review: no errors; MIT's dropped 1/π in the square-wave coefficients noted; n ≥ 1 added to ∫cos² = π. |
| 42 | 18.03 Lecture 16: Even and odd functions, convergence, period 2L | `fourier-series-even-odd-and-periods` | reviewed | Review: no errors; convergence stated for piecewise smooth functions; period-2L wording fixed. |
| 43 | 18.03 Lecture 17: Particular solutions via Fourier series | `fourier-series-particular-solutions` | reviewed | Review: no errors; the lecture's rough ω₀ = 10 arithmetic replaced by exact values; hearing marked as the lecture's simplified picture. |
| 44 | 18.03 Lecture 19: Introduction to the Laplace transform | `laplace-transform-introduction` | reviewed | Review: no errors; the convergence remark hedged as in the lecture. |
| 45 | 18.03 Lecture 20: Transforms of derivatives | `laplace-transform-of-derivatives` | reviewed | Review: two errors fixed (a caption bound 1.34 → 1.35; a quiz explanation ignoring the constant c). |
| 46 | 18.03 Lecture 21: The convolution formula | `convolution` | reviewed | Review: no errors; the claim about products attributed to Mattuck. |
| 47 | 18.03 Lecture 22: Unit step and discontinuous inputs | `laplace-discontinuous-inputs` | reviewed | Review: one error fixed (e^(−as) marks a switch-on, not necessarily a jump; the lecture's "discontinuous" noted). |
| 48 | 18.03 Lecture 23: Impulse inputs and the delta function | `impulse-inputs-delta-function` | reviewed | Review: no errors; Mattuck's joke about the name δ marked as a joke. |
| 49 | 18.03 Lecture 24: Introduction to first-order systems | `first-order-systems` | reviewed | Review: no errors; plot caption made exact about the yolk's tiny warming. |
| 50 | 18.03 Lecture 25: Eigenvalues and eigenvectors | `eigenvalues-linear-systems` | reviewed | Review: no errors or warnings; small notes applied (Mattuck's "a plus b" for the trace noted). |
| 51 | 18.03 Lecture 26: Repeated and complex eigenvalues | `repeated-and-complex-eigenvalues` | reviewed | Review: no errors; worked example (c) replaced (it was the lecture's system in disguise); sitcom model described correctly. |
| 52 | 18.03 Lecture 27: Sketching 2 × 2 linear systems | `sketching-linear-systems` | reviewed | Review: one error fixed (the dominance rule in the summary held only for sinks). |
| 53 | 18.03 Lecture 28: Fundamental matrices and variation of parameters | `variation-of-parameters-systems` | reviewed | Review: no errors or warnings; notes applied. |
| 54 | 18.03 Lecture 29: The matrix exponential | `matrix-exponentials` | reviewed | Review: no errors; the "nonzero at one point" step made explicit; a tautological calcs check replaced. |
| 55 | 18.03 Lecture 30: Decoupling linear systems | `decoupling-linear-systems` | reviewed | Review: no errors; eigenvector geometry and quiz wording corrected. |
| 56 | 18.03 Lecture 31: Nonlinear autonomous systems | `nonlinear-autonomous-systems` | reviewed | Review: worked example replaced (it matched a well-known copyrighted textbook example); plot now starts from rest. |
| 57 | 18.03 Lecture 32: Limit cycles | `limit-cycles` | reviewed | Review: no errors; the lecture's definition and its history marked as Mattuck's; worked example (a) made the page's own. |
| 58 | 18.03 Lecture 33: Volterra's predator–prey model | `predator-prey-volterra` | reviewed | Review: no errors; the DDT stories attributed to the lecture; Lotka credited. 18.03 is now complete. |
| 59 | 18.06 Lecture 1: The geometry of linear equations | `geometry-of-linear-equations` | reviewed | First 18.06 page. Review: no errors or warnings; small notes applied. |
| 60 | 18.06 Lecture 2: Elimination with matrices | `elimination-with-matrices` | reviewed | Review: no errors; slip note moved to p. 7, wording clarified, leadsTo Lecture 4 added. |
| 61 | 18.06 Lecture 3: Multiplication and inverse matrices | `multiplication-and-inverse-matrices` | reviewed | Review: no errors; wording on the singular matrix and on Gauss–Jordan's E clarified. |
| 62 | 18.06 Lecture 4: Factorization into A = LU | `factorization-a-lu` | reviewed | Review: no errors; integration limits bracketed, n! stated, p. 10 remark added. |
| 63 | 18.06 Lecture 5: Transposes, permutations, spaces Rⁿ | `transposes-permutations-vector-spaces` | reviewed | Review: no errors; the RᵀR naming swap on pp. 6–7 described accurately, completed matrices labelled. |
| 64 | 18.06 Lecture 6: Column space and nullspace | `column-space-and-nullspace` | reviewed | Review: no errors; the page's own description of the solution line marked as not in the lecture. |
| 65 | 18.06 Lecture 7: Solving Ax = 0: pivot variables, special solutions | `solving-ax-0-special-solutions` | reviewed | Review: no errors; the name of the teaching-code command removed (uncertain). |
| 66 | 18.06 Lecture 8: Solving Ax = b: row reduced form R | `solving-ax-b-complete-solution` | reviewed | Review: no errors; Strang's mix-up on the summary board described precisely. |
| 67 | 18.06 Lecture 9: Independence, basis, and dimension | `independence-basis-dimension` | reviewed | Review: no errors; Strang's (3, 3, 8) slip (he corrects it in Lecture 10) noted with the explicit combination; worked example made less like the lecture's. |
| 68 | 18.06 Lecture 10: The four fundamental subspaces | `four-fundamental-subspaces` | reviewed | Review: no errors; small wording note applied. |
| 69 | 18.06 Lecture 11: Matrix spaces; rank 1; small world graphs | `matrix-spaces-rank-one` | reviewed | Review: no errors; Strang's "five by six" incidence matrix noted as 6 × 5; anecdote kept neutral. |
| 70 | 18.06 Lecture 12: Graphs, networks, incidence matrices | `graphs-networks-incidence-matrices` | reviewed | Review: no errors; notes on Euler (connected graphs) and the sign in Ohm's law added. |
| 71 | 18.06 Lecture 14: Orthogonal vectors and subspaces | `orthogonal-vectors-and-subspaces` | reviewed | Lecture 13 (quiz review) skipped. Review: no errors; the AᵀA proof credited to Lecture 16; the inferred rank-one example marked as inferred. |
| 72 | 18.06 Lecture 15: Projections onto subspaces | `projections-onto-subspaces` | reviewed | Review: no errors; the capital-P note corrected (a transcript matter, not Strang's). |
| 73 | 18.06 Lecture 16: Projection matrices and least squares | `projection-matrices-least-squares` | reviewed | Review: no errors; the converse of the AᵀA theorem marked as the page's own. |
| 74 | 18.06 Lecture 17: Orthogonal matrices and Gram–Schmidt | `orthogonal-matrices-gram-schmidt` | reviewed | Review: no errors; Hadamard sizes corrected (every power of 2), the 4 × 4 marked as reconstructed, worked example adjusted. |
| 75 | 18.06 Lecture 18: Properties of determinants | `properties-of-determinants` | reviewed | Review: no errors; det 2A credited to property 3 as Strang does. |
| 76 | 18.06 Lecture 19: Determinant formulas and cofactors | `determinant-formulas-cofactors` | reviewed | Review: no errors; citations tightened; worked example moved away from Fibonacci-type exercises. |
| 77 | 18.06 Lecture 20: Cramer's rule, inverse matrix, and volume | `cramers-rule-inverse-volume` | reviewed | Review: no errors; Strang's recollection of the book's author (Bell) corrected to Lancelot Hogben; absolute values added. |

## Pauses

None. The owner asked the run to stop at 17:25, after 18.06 Lecture 20; no lesson was left half-done.

## Summary

77 new lessons, every one reviewed against its MIT transcript (or notes and slides), with its calcs file, its own symbol meanings and one commit each:

- **18.02**: Lectures 30–33 (line integrals in space, Stokes' theorem, Maxwell's equations). 18.02 is now complete.
- **8.02**: the full session list in `_course.json` (its own commit), then 22 pages from Session 1 (fields) to Session 33 (interference). Problem-solving sessions and exam reviews were skipped. Session 35, The Structure of Space and Time, has no page yet.
- **18.03**: all 32 lecture pages, Lectures 1–33 (Lecture 18 is an exam). 18.03 is now complete.
- **18.06**: Lectures 1–20 (19 pages; Lecture 13 is a quiz review): elimination, LU, the four subspaces, projections and least squares, Gram–Schmidt, determinants.

### Notes for the owner

- **Lecturer slips** are noted in brackets on the pages. Examples: in 18.06 Lecture 9, Strang's (3, 3, 8) is not a third basis vector (he corrects it in Lecture 10); in Lecture 20 he names Bell as the author of *Mathematics for the Million* (it is Lancelot Hogben); in Lecture 11 his "five by six" incidence matrix should be 6 × 5.
- **Worked examples** that reviewers found too close to a textbook exercise were replaced with the page's own numbers. They include the rabbits–sheep system, r′ = r(1 − r²), the Fibonacci-type tridiagonal matrix and the (1, 0, 1), (1, 1, 0), (0, 1, 1) Gram–Schmidt triple. The reviewers could not open Strang's or Mattuck's textbooks, so "not a textbook exercise" is unverified for every page.
- **Quiz answers**: on the early 18.03 pages the correct answer is mostly the first choice. Later pages vary the position. A pass over the early ones would help.
- **Empty syllabi**: 8.03 and 8.033 have no lecture lists yet, so the run went from 18.03 on to 18.06.
- **Pull requests**: the run is split into stacked pull requests by course (18.02 + 8.02, 18.03, 18.06), each based on the previous one, starting from `lessons/18.02-lectures-1-29` (#25). Merge them in order.
