---
page: content/year-2/8.03/8-03-problem-set-8.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_problemset8/ (read: PDF rendered with figures, and pdftotext; printed footers 1 to 3)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec16/ (read: Lecture 16 notes, pdftotext page by page, printed footers 1 to 7)
  - 8.03SC Lecture 15 notes (read, to check the decision to leave Lecture 15 out of `covers`)
verdict: pass-with-notes
---

# Review: Problem Set 8: a mesh of beads, Snell's law and the rainbow

## Blind solve

### My answers (written before opening the full page)
- 1(a) Bead spacing a = L/4. Equation of motion: m ψ̈_{j,k} = (T_h/a)(ψ_{j,k+1} − 2ψ_{j,k} + ψ_{j,k−1}) + (T_v/a)(ψ_{j+1,k} − 2ψ_{j,k} + ψ_{j−1,k}), with ψ = 0 on the frame (k = 0, 4; j = 0, 4).
  Shape: ψ_{j,k}/A = sin(n_x π k/4) sin(n_y π j/4), n_x, n_y ∈ {1, 2, 3}.
  ω² = (8T_h/(mL))(1 − cos(n_x π/4)) + (8T_v/(mL))(1 − cos(n_y π/4)) = (16/(mL))[T_h sin²(n_x π/8) + T_v sin²(n_y π/8)].
  Checked against the eigenvalues of the 9 × 9 stiffness matrix (T_h = 1.3, T_v = 0.7, m = L = 1): all nine agree.
- 1(b) With T_v = 1000 T_h the order is (n_x, n_y) = (1,1), (2,1), (3,1), (1,2), (2,2), (3,2), (1,3), (2,3), (3,3). Diagrams (top row j = 3 / middle / bottom), up to overall sign:
  1 (1,1) +++ / +++ / +++; 2 (2,1) +0− / +0− / +0−; 3 (3,1) +−+ / +−+ / +−+; 4 (1,2) −−− / 000 / +++; 5 (2,2) −0+ / 000 / +0− (= MIT's example); 6 (3,2) −+− / 000 / +−+; 7 (1,3) +++ / −−− / +++; 8 (2,3) +0− / −0+ / +0−; 9 (3,3) +−+ / −+− / +−+.
  ω₄/ω₁ = sqrt[(sin²(π/8) + 1000 sin²(π/4)) / (1001 sin²(π/8))] = 1.8471.
  "Fifth highest" of nine is the fifth mode, (2,2), both ways of counting; MIT's example is consistent with this.
- 2(a) Snell at the first face: sin 60° = n₂ sin θ₂ requires sin θ₂ ≤ 1, so n₂ ≥ sin 60° = √3/2 ≈ 0.866 (strictly > for a beam that actually crosses the plate). No upper limit follows from the physics; the second face can never totally reflect because n₂ sin θ₂ = sin 60° = n₃ sin 30° is fixed. For n₂ = 1.5: θ₂ = arcsin(0.5774) = 35.26°.
- 2(b) n₃ sin 30° = n₂ sin θ₂ = sin 60°, so n₃ = √3 = 1.732, independent of n₂.
- 3(a) With sin θ = n sin φ: α = 4φ − 2θ = 4 arcsin(sin θ / n) − 2θ. Maximum where cos θ = sqrt((n² − 1)/3); for n = 1.33: θ = 59.58°, α_max = 42.52°.
- 3(b) dα/dθ = 0 at the maximum, so many incidence angles near θ_c send light into nearly the same α: rays bunch there (caustic), and no singly reflected light leaves beyond α_max. The bright bow is at α_max.
- 3(c) α_max falls as n rises (n = 1.34: α_max = 41.07° at θ = 59.00°). Red has the lower n, so the larger α: red on the outside (higher), violet/blue inside.
- 3(d) Secondary bow: two internal reflections; angle from the antisolar point α₂ = 180° + 2θ − 6φ has a minimum (cos θ = sqrt((n² − 1)/8)): 50.10° at θ = 71.94° for n = 1.33 (52.71° for n = 1.34). Light piles up at this minimum, so the second bow is above the first, and its colours are reversed: blue/violet higher (outside), red lower (inside). Dark band (Alexander's) between.

### Comparison with the page (one line per answer id)
- p1-shape: page `sin(nx*pi*k/4)*sin(ny*pi*j/4)` = mine. Agree.
- p1-omega2: page `16*(Th*sin(nx*pi/8)^2 + Tv*sin(ny*pi/8)^2)/(m*L)` = mine (also checked against the 9 × 9 matrix eigenvalues). Agree.
- p1-second: page choice 1, "+ 0 − / + 0 − / + 0 −" = my mode 2. Agree.
- p1-seventh: page choice 2, "+ + + / − − − / + + +" = my mode 7. Agree.
- p1-ratio: page 1.847 = mine 1.8471. Agree. The whole table of ω/ω₁ (1, 1.0012, 1.0024, 1.8471, 1.8478, 1.8484, 2.4132, 2.4137, 2.4142) and all nine sign diagrams = mine.
- p2-limit: page 0.866 = mine (√3/2). Agree.
- p2-side: page choice 1, "Larger than this limit" = mine. Agree.
- p2-angle: page 35.26° = mine 35.264°. Agree.
- p2-n3: page 1.732 = mine √3. Agree.
- p3-alpha: page `4*asin(sin(th)/n) - 2*th` = mine. Agree.
- p3-thetamax: page 59.58° = mine 59.585°. Agree.
- p3-alphamax: page 42.52° = mine 42.516°. Agree.
- p3-why: page choice 1 (α stationary, light piles up) = mine. Agree.
- p3-colour: page choice 0 (red on top: lower n, larger α_max) = mine. Agree.
- p3-alpha134: page 41.07° = mine 41.071°. Agree.
- p3-second: page choice 2 (blue on top, second bow outside the first) = mine; the page's numbers 71.94°, 45.63°, 50.10°, 52.71° = mine. Agree.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | frontmatter `covers: [16]` | Lecture 15 notes (pp. 5 to 6) already introduce the beaded mesh, its dispersion relation and the sine-product modes with walls | Set covers Lecture 16 only | Acceptable as is: the Lecture 15 lesson (`uncertainty-principle-2d-waves`) treats the mesh only in a short closing section that hands over to Lecture 16, and its main topics (Fourier spreads, uncertainty) are not practised here. Optionally add 15 to `covers` if a "Practise" link on that lesson is wanted. |
| 2 | info | Problem 2(a), sample plate n₂ = 1.5 | Figure 2 draws the ray in the plate closer to the normal than the ray in n₃ | Sample n₂ = 1.5 gives θ₂ = 35.26° > β = 30°: the sample beam is less steep in the plate than in the third material, unlike the figure (the page notes the figure point in its check step; the answer n₂ > √3/2 does not depend on it) | Optional: choose a sample above √3 (e.g. n₂ = 2, θ₂ = 25.66°), which matches the figure; then update the answer box and calcs `p2-angle`, `p2-angle-sine`, `p2-angle-shown`, `p2-check-plate`. |
| 3 | info | Problem 2(a), reading of the question | "What is the possible range of value for n₂?" with no further condition | n₂ > sin 60° = 0.866, no upper limit, stated as the site's reading | Agree with the reading: (a) comes before n₃ is asked, and the chain n₁ sin α = n₂ sin θ₂ = n₃ sin β means the second face imposes nothing. The figure-based alternative (n₂ > n₃) is mentioned on the page and correctly not used. No change. |
| 4 | info | Problem 3(c), check step | "around 40 to 42 degrees" | "A difference of 0.01 in n shifts the bow by 1.45°. This is the size of the spread in MIT's statement" | Right in order of magnitude (MIT's range is about 2°). Optionally write "about the size". |

## Arithmetic and answer checks
- Every number on the page recomputed independently (Python script outside the repo): sin² values 0.146, 0.5, 0.854; ω₁ = 48.43 √(T_h/(mL)); the nine ratios in the table; 1 + √2 = 2.414; equal-tension degeneracy of (1,3), (3,1), (2,2); centre/corner amplitude 2; 0.866, 0.577, 35.26°, 1.732; θ = 59.58°, φ = 40.42°, α_max = 42.52°; α(55°) = 42.07°, α(64°) = 42.06°, α(90°) = 15.0°; n = 1.34: θ = 59.004°, φ = 39.770°, α_max = 41.07°; second bow θ = 71.94°, φ = 45.63°, α₂ = 50.10° (52.71° for n = 1.34). All correct.
- `npm run calc:test -- -k 8-03-problem-set-8`: 55 passed. `npm run content:check`: 0 errors; the only warning for this page is the missing review file.
- Answer boxes: formula `vars` ranges keep every expression finite (sin θ/n < 1 for θ ≤ 1.4 and n ≥ 1.2; the mesh shapes are sampled at non-integer j, k in [0.3, 0.9]). Each listed mistake differs from the answer and its hint is true of that formula (swapped counters; walls at 3; cosines; sum of sines; L instead of L/4; swapped tensions; full angle in the sine; unsquared sines; the total turn π + 2θ − 4φ; the reversed sign, negative for water as checked numerically; 2φ instead of 4φ; swapped angles). The 1% tolerances accept 3 significant figures and reject the neighbouring wrong values (42.52 against 41.07; 1.847 against the ω² ratio 3.41).
- Choice answers: every marked choice is correct; the distractors are wrong for the reasons the solutions give.
- Every solution ends with a check step (units; θ = 0 limits; equal-tension degeneracy; n sin θ in the sample plate; α₂ = 180° at θ = 0).
- Hints: none gives the result away (the sine-sum identity in 1(a) and the n sin θ chain in 2 are tools, not answers).
- Citations: `at="Problem 8.1(a), p. 2"`, `8.1(b), p. 2`, `8.2(a)/(b), p. 2`, `8.3(a)` to `(d), p. 3` match the printed footers of MIT's sheet (8.1 starts on p. 1, its parts are on p. 2). Lecture 16 notes: dispersion relation on p. 2, modes inside walls (A sin sin) on p. 3, law of reflection, Snell's law and the no-transmission condition on p. 7: all correct.

## Coverage and order
- All three MIT problems and all their parts, in MIT's order: 8.1(a)(b), 8.2(a)(b), 8.3(a)(b)(c)(d). Points 25/25/25 as MIT; the split between parts is declared as the site's own (13 + 12, 13 + 12, 12 + 4 + 4 + 5).
- Own additions are marked as ours: the three check questions in 1(b) ("As a check of our own"), the n₂ = 1.5 sample in 2(a), the n = 1.34 sample in 3(c), and the numbers in 3(d) ("The numbers in the solution are our own addition").
- Writer's decisions verified: mesh spacing L/4 (on the rendered Figure 1 the frame-to-bead and bead-to-bead gaps are equal, four gaps per side); "fifth highest" read as the fifth of nine, which is (2,2) from either end and matches MIT's example diagram; Lecture 15 left out (table #1, acceptable).

## Licensing
- MIT's sheet carries no "All rights reserved" or "Courtesy of" notice. MIT's three figures are not reproduced or redrawn; they are described in words. The two plots are generated from the page's own formulas.
- The wording is the page's own; nothing copied from the sheet beyond standard terms and the short quote "around 40 to 42 degrees". Georgi's textbook and Feynman are not used. No OpenStax or LibreTexts material.

## Notes
- No em dashes; no `## Summary` with answers.
- The physics of 3(b) to 3(d) (stationary angle, colour order, Alexander's dark band, reversed colours in the second bow) is correct.

COUNTS: errors=0 warnings=0 info=4

## Resolution (2026-11-21, by the page author)

- Info 1 taken: `covers` is now [15, 16], the Lecture 15 lesson `uncertainty-principle-2d-waves` is a prerequisite, and the intro links it as the lesson that first sets up the bead mesh.
- Info 2 not taken: the sample n₂ = 1.5 is a common glass and the page does not claim MIT's figure is to scale; kept as is.
- Info 3: no change needed.
- Info 4 taken: "This is about the size of the spread in MIT's statement".
- Status set to `reviewed`.
