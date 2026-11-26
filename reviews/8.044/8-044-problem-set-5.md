---
page: content/year-3/8.044/8-044-problem-set-5.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps5/ (read: PDF rendered page by page and pdftotext; 2 printed pages + OCW sheet)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss5/ (read: PDF rendered page by page and pdftotext; 3 printed pages + OCW sheet; opened only after the blind solve below was written)
verdict: pass-with-notes
---

# Review: Problem Set 5: Gibbs' paradox and correct Boltzmann counting

## Blind solve

### My answers (written before opening the page, its calcs file or MIT's solutions)
- (a) S(N,V,T) = Nk ln V + (3/2)Nk ln(2 pi e m k T). S(lam N, lam V, T) - lam S = lam N k ln(lam). One mole vs two moles in 2V: 2 R ln 2 = 11.526 J/K (R = N_A k = 8.314462 J/K).
- (b) Equal p and T: N_i/V_i = p/kT on both sides, so N_1 = alpha N, N_2 = (1-alpha)N. Delta S_1 = N_1 k ln(V/V_1) = alpha N k ln(1/alpha); Delta S_2 = (1-alpha) N k ln(1/(1-alpha)). Delta S_T(alpha = 0.25, N = N_A) = R[0.25 ln 4 + 0.75 ln(4/3)] = 4.6755 J/K. Same gas: E of an ideal gas depends only on T (and N), T unchanged, so Delta E = 0; no opposing force on the partition (equal pressure both sides, frictionless) and total volume fixed, so Delta W = 0.
- (c) S = Nk ln(V/N) + Nk + (3/2)Nk ln(2 pi e m k T); with kN dropped the bracket is N k ln(V/N). Extensive exactly (with or without kN). Same gas: N_1 k ln(V_1/N_1) + N_2 k ln(V_2/N_2) = N k ln(V/N), Delta S_T = 0. Different gases: separate N_1!, N_2!, Delta S_i = N_i k ln(V/V_i) as before, entropy of mixing unchanged. Exact factorials, same gas: Delta S = k[N_1 ln(1/alpha) + N_2 ln(1/(1-alpha)) - ln(N!/(N_1! N_2!))], of order k ln N.

### Comparison (one line per answer id)
- p1-scale: page `lam*N*k*log(lam)` = mine. Agree.
- p1-double: page 11.53 J/K (1%); mine 11.526. Agree.
- p1-ds2: page `(1 - alpha)*N*k*log(1/(1 - alpha))` = mine. Agree.
- p1-mix: page 4.676 J/K (1%); mine 4.6755. Agree.
- p1-work: page choice 0 (equal pressure, moves in its own plane, no force, no volume swept) = my reasoning and MIT's ("no opposing force in the absence of friction"). Agree.
- p1-new: page `N*k*log(V/N)` = mine with kN dropped as instructed. Agree.
- p1-diff: page choice 0 (same entropy of mixing as in (b)) = mine. Agree.
- MIT's solutions (read afterwards) agree with all of these.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Answer boxes `p1-work` and `p1-diff` | (no boxes in MIT) | Both choice boxes (the only two on the page) have the right answer at position 0 (`answer={0}`); the component does not shuffle | Reorder the choices: e.g. put the correct `p1-work` choice third (`answer={2}`) and the correct `p1-diff` choice second (`answer={1}`) |
| 2 | warning | Part (b), "Third" paragraph; intro ("MIT's two sketches ... are described in words") | Sheet p. 2 has a second sketch: the box with the partition pulled straight up out of it (double arrow), i.e. it slides along its own plane | Only the first sketch (before/after) is described. The geometry needed for `p1-work` ("moves in its own plane, no volume swept") first appears in hint 3 and in the correct choice itself | Add to the "Third" paragraph: "(MIT's second sketch shows the partition pulled straight out of the box along its own plane, and pushed back in the same way.)" |
| 3 | warning | Part (b), hint 3 | | "whether anything pushes back on a thin partition that slides in its own plane with the same pressure on both of its faces" nearly restates the correct choice of `p1-work` | Once the geometry is in the statement (row 2), shorten to: "Ask what the energy of an ideal gas depends on, and whether any force opposes the partition as it is pulled out." |
| 4 | warning | Symbol Ω (part (c) statement, "$\Omega$, and with it $\Phi$ ...") | Ω = accessible phase-space volume | `data/symbols.json` has no Ω meaning scoped to this page; the only one that applies is the general cosmology "density parameter Ω = ρ/ρ_c", which the popup and "Symbols on this page" will show | Add `8-044-problem-set-5` to the `pages` of the Ω meaning "The accessible phase-space volume (classically) or number of states (quantum)." (now scoped to microcanonical-ensemble only) |
| 5 | info | Part (c), solution "The new entropy" | MIT p. 2: "+kN, neglect compared to previous term" | Follows MIT ("small next to Nk ln N") and notes that keeping kN changes nothing | Optional: add that the lesson on canonical examples keeps it (it is the 1 in the 5/2 of the Sackur–Tetrode entropy). kN is not small next to Nk ln(V/N), the combination that survives |
| 6 | info | Part (c), "Check with exact factorials" | (page's own) | "with exact factorials the phase-space volumes give ..." | Only N! is exact; the momentum factor is MIT's Stirling'd [2 pi e m k T]^{3N/2}. Say "with N! kept exact (the momentum factor as in MIT's formula)". The numbers are right |
| 7 | info | Part (b) solution, ΔS₂ | MIT p. 2 writes ln(1/1 − α) without brackets | Page writes ln(1/(1 − α)) correctly | None |

The two slips the page claims in MIT's table (solutions p. 3) are real, checked on the rendered PDF: the brace under α ln α + (1 − α) ln(1 − α) carries a "+" although the sum is negative (−0.5623 at α = 0.25), and the first "new S" line reads αNk ln(αV/αN) + (1 − α) ln((1 − α)V/(1 − α)N), the second term without Nk.

## Arithmetic and answer checks
- N_A k = 6.02214e23 × 1.380649e-23 = 8.31446 J/K. 2 × 8.31446 × ln 2 = 11.526 J/K (page 11.53). Bracket at α = 0.25: 0.34657 + 0.21576 = 0.56234 (page 0.5623); ΔS_T = 4.6755 J/K (page 4.676). Nk ln 2 for one mole = 5.763 J/K. Maximum ln 2 = 0.6931 at α = 1/2 (derivative ln((1−α)/α) = 0).
- Exact-factorial check: ΔS/k = N ln 2 + 2 ln (N/2)! − ln N! = ln(2^N / C(N, N/2)). N = 100: C(100,50)/2^100 = 0.07959, reciprocal 12.56, ln = 2.531; ½ ln(50π) = 2.528; N ln 2 = 69.31. One mole: ½ ln(π N_A/2) = 27.6, × k = 3.81e-22 J/K. All as on the page; the probability interpretation is correct.
- Part (b) closing check: S(2N, 2V) − 2S(N, V) = 2Nk ln 2 = mixing entropy of 2N atoms at α = ½. Correct.
- `p1-scale` mistakes (Nk ln λ, λ²Nk, 0) differ from λNk ln λ over λ ∈ [0.3, 5]; hints true; vars finite.
- `p1-ds2` mistakes (ΔS₁ form, sign flipped, missing (1 − α), wrong ratio) differ; hints true; α ∈ [0.05, 0.95] keeps logs finite.
- `p1-new` mistakes (Nk ln V, Nk ln(V/N) + Nk, Nk ln V − k ln N, Nk ln(VN), k ln(V/N)) differ; hints true; vars fine.
- Number tolerances 1%: accept 3 significant figures, reject the nearby wrong values (e.g. 5.763 = Nk ln 2).
- Calcs file: entries recomputed above or checked by inspection; `p1-table-sign` −0.5623 correct.
- Every solution ends with a check ((a): λ = 1 and units; (b): symmetry, limits α → 0, 1, link to (a); (c): scaling, exact factorials).

### Judgment asked for: `p1-new` drops the Stirling term kN
Fair as it stands. The statement says explicitly "Follow MIT here and drop the term kN"; the kN-kept form is a listed mistake whose hint tells the reader it is more accurate and that only the box's convention differs; and a wrong try costs nothing (`recordAnswer` in lib/progress.ts only sets `ok` on a correct try; points are lost only by opening the solution first). The component cannot accept two expressions, so "accept both" would need a code change and is not needed. Optional softening in row 5.

## Coverage and order
- MIT has one problem with parts (a), (b), (c); the page keeps them in order, with (b)'s tasks (equal densities, mixing entropy, same gas and Gibbs' paradox) in MIT's order. Nothing of MIT's left out except the due date and the second sketch (row 2).
- Additions, all marked as ours: answer boxes, one-mole numbers, the graph (computed from the formula), the different-gases check, the exact-factorial check, "Where this goes".
- Citations: sheet p. 1 holds (a) and (b) up to "always positive"; p. 2 the same-gas paragraph and (c). Solutions p. 1 holds (a) and (b) up to N₂/N; p. 2 ΔS₁, ΔS₂, ΔS_T, the same-gas argument and (c) up to scaling; p. 3 the table. Every `at=` matches.
- Points 8 + 12 + 10 = 30, stated as ours (MIT gives none).

## Licensing
- Neither PDF carries "All rights reserved" or "Courtesy of" notices. No MIT figure redrawn (sketches described in words; the graph is generated from the formula).
- Wording is the page's own; MIT phrases kept only as standard terms ("correct Boltzmann counting", "entropy of mixing", "Gibbs' paradox"). Part (c)'s statement follows MIT's sentence order closely but is rewritten.
- No OpenStax or LibreTexts material.

## Notes
- Linked lessons exist and say what the page claims: Stirling's approximation in microcanonical-ensemble (slide 11 formula); canonical-examples divides Z by N! and by h³ per atom and gives the Sackur–Tetrode entropy; identical-particles treats indistinguishability; first-law has dU = δQ + δW with work done on the system (same convention; the page writes E as MIT's sheet does).
- No em dashes; no `## Summary` with answers.
- Page-scoped symbol meanings (α, λ, F, S₁, S₂, S_i, S_T, V₁, V₂, N₁, N₂, q, p) are correct. The shared k meaning has unit eV/K although this page works in J/K; that is the course-wide entry (not counted).

COUNTS: errors=0 warnings=4 info=3

## Resolution (2026-11-26, by the page author)

- Warning 1 (both choice boxes had the right answer first): fixed. `p1-work` now has it third (`answer={2}`), `p1-diff` second (`answer={1}`).
- Warning 2 (MIT's second sketch not described): fixed. Part (b) now says that MIT's second sketch shows the partition pulled straight out of the box along its own plane, and pushed back in the same way.
- Warning 3 (hint 3 of part (b) gave the answer away): fixed. It now reads "ask what the energy of an ideal gas depends on, and whether any force opposes the partition as it is pulled out."
- Warning 4 (Ω had no meaning for this page): fixed. The page is added to the Ω meaning "The accessible phase-space volume (classically) or number of states (quantum)."
- Info notes: no change.

Status set to reviewed.
