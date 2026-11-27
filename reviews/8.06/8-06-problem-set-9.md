---
page: content/year-3/8.06/8-06-problem-set-9.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/problem-set-9/ (read: ps9.pdf / pdftotext, printed pp. 1-3)
  - 8.06 lecture notes chapter 8, Identical particles (read: ch8.pdf, printed pp. 151-171)
  - 8.06 lecture notes chapter 1, perturbation theory (read: ch1.pdf, pp. 18-19 checked)
  - 8.05 lecture notes 9, Angular momentum (read: n9.pdf, eq. (2.29))
  - 8.05 lecture notes 10, Addition of angular momentum (read: n10.pdf, eqs. (2.8), (2.17)-(2.20))
  - Cohen-Tannoudji: not opened (by design)
verdict: pass-with-notes
---

# Review: Problem Set 9: The exchange force, the Heisenberg Hamiltonian and three particles on three levels

## Blind solve

### My answers (written before opening the full page)
- p1a D_D = <x2>_a + <x2>_b - 2 <x>_a <x>_b
- p1a D_S - D_D = -2|x_ab|^2 ; D_A - D_D = +2|x_ab|^2 (symmetric: closer; antisymmetric: farther)
- p1a oscillator: D_D = 2b^2, D_S = b^2, D_A = 3b^2
- p1b D_D = 2hbar^2[s(s+1) - ma mb] (always)
- p1b |ma-mb| = 1: D_S = hbar^2[s(s+1) - ma mb], D_A = 3 hbar^2[s(s+1) - ma mb]; otherwise D_S = D_A = D_D. Order D_S <= D_D <= D_A.
- p1b spin 3/2, ma=1/2, mb=-1/2: D_D = 8 hbar^2, D_S = 4 hbar^2, D_A = 12 hbar^2
- p2a phi_- x triplet |1,m>, S^2 = 2 hbar^2, S_z = hbar m, m = 1,0,-1
- p2b phi_+ x singlet, S^2 = 0, S_z = 0
- p2c same states; shifts triplet +C hbar^2/4, singlet -3C hbar^2/4; splitting |C| hbar^2
- p2d E = 2E0 + K -/+ X (triplet/singlet); eps = E(b) - E(a) = 2X (X real and > 0)
- p2e H_eff = const - J S1.S2, J = eps/hbar^2 = 2X/hbar^2 > 0 (symmetric space = closer = more repulsion)
- p3a electrons: levels hbar w (g=2), 2 hbar w (4), 3 hbar w (8), 4 hbar w (4), 5 hbar w (2); total 20; all spin up: (1/sqrt6) det[psi_i(x_j)] |+++>, one state at 3 hbar w
- p3b spin-0 bosons: 0(1), 1(1), 2(2), 3(2), 4(2), 5(1), 6(1) in hbar w; total 10
- p3c MB: 0(1), 1(3), 2(6), 3(7), 4(6), 5(3), 6(1); total 27

### Comparison (one line per answer id)
- p1a-dd: page x2a + x2b - 2*xa*xb = mine. Agree.
- p1a-ds: page -2*xab^2 = mine. Agree.
- p1a-da: page 2*xab^2 = mine. Agree.
- p1a-why: answer index 2 (antisymmetric wavefunction vanishes at x1 = x2, symmetric enhanced) = my reason. Distractors all false. Agree.
- p1a-ho-s: 1 = mine. Agree. p1a-ho-a: 3 = mine. Agree.
- p1b-dd: 2*(s*(s+1) - ma*mb) = mine. Agree.
- p1b-ds: s*(s+1) - ma*mb = mine. Agree (holds for mb = ma +/- 1; numpy check below).
- p1b-da: 3*(s*(s+1) - ma*mb) = mine. Agree.
- p1b-far: index 1 "all equal" = mine (numpy: s=1, m=1,-1 gives 6,6,6; s=2, m=2,0 gives 12,12,12). Agree.
- p1b-order: index 3 "D_S <= D_D <= D_A" = mine. Agree.
- p1b-n-s: 4 = mine. p1b-n-a: 12 = mine. Agree.
- p2a-n: 3 = mine. p2a-s2: 2 = mine. Agree.
- p2b-chi: index 0, singlet (|+-> - |-+>)/sqrt2 = mine. Agree.
- p2b-s2: 0 = mine. Agree.
- p2c-trip: C*hbar^2/4 = mine. p2c-sing: -3*C*hbar^2/4 = mine. p2c-split: 1 = mine. Agree.
- p2d-eps: 2*X = mine (eps = singlet minus triplet). Agree.
- p2e-j: eps/hbar^2 = mine. p2e-sign: index 1 (positive, triplet lower) = mine. Agree.
- p3a-total 20, p3a-e0 1, p3a-g2 4, p3a-g3 8, p3a-up 3: all = mine. Agree.
- p3b-total 10, p3b-levels 7, p3b-g3 2: all = mine. Agree.
- p3c-total 27, p3c-g1 3, p3c-g3 7: all = mine. Agree.

No disagreement anywhere.

Numerical checks written for this review (numpy, explicit spin matrices, (S1 - S2)^2 built from Sx, Sy, Sz on the product space; values D_D, D_S, D_A in units of hbar^2):
- s=1/2 (1/2,-1/2): 2, 1, 3; s=1 (1,0): 4, 2, 6; s=3/2 (3/2,1/2): 6, 3, 9; s=2 (1,0): 12, 6, 18; s=3/2 (1/2,-1/2): 8, 4, 12; s=1 (1,-1): 6, 6, 6.
- m_b = m_a + 1 cases: s=1 (0,1): 4, 2, 6; s=2 (-2,-1): 8, 4, 12; s=3/2 (-1/2,1/2): 8, 4, 12; s=2 (2,0): 12, 12, 12.
- These reproduce the stored offline numbers of calcs `p1b-dd-matrix` (dnum 2, 4, 6, 12, 8, 6) and `p1b-sa-matrix` (dsnum 1, 2, 3, 6, 4; danum 3, 6, 9, 18, 12) exactly.
- Problem 3 by listing every state (itertools): electrons (3 of 6 spin-orbitals) E = 1..5 with g = 2, 4, 8, 4, 2 (20); spin-0 bosons (multisets) E = 0..6 with g = 1, 1, 2, 2, 2, 1, 1 (10); Maxwell-Boltzmann (all 27 assignments) g = 1, 3, 6, 7, 6, 3, 1 (27).
- `pytest tests/calc -k problem-set-9`: all selected tests pass.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(e), choice box `p2e-sign` | (choice design rule) | The right answer (94 characters) is strictly the longest of the four (90, 94, 90, 86) | Shorten it, e.g. "positive: the antisymmetric spatial state keeps the pair apart, so the triplet lies lower" (89 characters, between the others) |
| 2 | warning | Problem 2(d), solution, "A remark on the level itself (ours)" | Sheet fixes one electron in psi1 and one in psi2 | Says psi1psi1 and psi2psi2 singlets also have energy 2E0 and are "left out"; the step "The matrix is diagonal" then argues within four states only | Add one sentence: H'' does in general couple the singlet phi+ |0,0> to these two singlets (same S_tot^2 and S_z, so the rule of remark 3 does not separate them); the result eps = 2X holds within MIT's four states. The remark itself is correct and marked as ours |
| 3 | warning | calcs `p1b-sa-matrix` | n/a | Comment says the matrices were used "for m_b = m_a - 1 as well as m_a + 1", but all five samples have m_b = m_a - 1; and only the sum D_S + D_A is compared, which cannot catch equal and opposite errors | Add samples with m_b = m_a + 1 (s=1, ma=0, mb=1: 2 and 6; s=2, ma=-2, mb=-1: 4 and 12), and split into two entries comparing D_S and D_A separately (values verified above) |
| 4 | info | Problem 2(a) statement | "what are the eigenvectors and eigenvalues of the square and the z-component" | Asks for the eigenvalues only (the full wavefunctions it asks for are the eigenvectors) | Optional: add "and the eigenvectors" for fidelity |
| 5 | info | frontmatter `covers: [23, 24]` | n/a | L22 left out although the intro names the L22 lesson (exchange degeneracy) as one of the three it practises | Judged acceptable: adding 22 would put a "Practise" link on the Born-approximation lesson (also L22), which this set does not practise, while the exchange-degeneracy lesson is already reached from the intro and prerequisites. Optionally say "builds on" for that lesson in the intro. No change required |

## Arithmetic and answer checks
- Every final answer agrees with my blind solve (above). Every numerical step on the page recomputed: oscillator 2b^2 - b^2 = b^2, 2b^2 + b^2 = 3b^2; spin 3/2 bracket 15/4 + 1/4 = 4 giving 4, 8, 12; spin 1/2 bracket 1 giving 1, 2, 3 and the total-spin check 3 - 2 = 1, 3 - 0 = 3; trace 3(1/4) - 3/4 = 0; constant 2E0 + K - X/2; averages 3 hbar omega for all three statistics (60/20, 30/10, 81/27); 10 + 1 + 16 = 27.
- Sign convention of 2(d)/(e): eps is defined in the 2(d) statement as energy of (b) (singlet, K + X) minus energy of (a) (triplet, K - X), so eps = 2X; 2(e) uses the same definition ("with eps as defined in part (d)"), J = eps/hbar^2 = 2X/hbar^2 > 0. Statement, boxes, mistake hints (`-eps/hbar^2`, `-2*X`) and the epsilon symbol meaning all use it consistently.
- 1(b) boxes for |m_a - m_b| = 1: `s*(s+1) - ma*mb` and `3*(s*(s+1) - ma*mb)` are right for both neighbours (both square roots equal s(s+1) - m_a m_b in either case). The listed mistakes are true: `2*(...)` is D_D, `3*(...)` / `s*(s+1) - ma*mb` are the other state, `s*(s+1) - ma*(ma+1)` and `ma*(ma-1)` are the forms valid only for one neighbour and differ from the answer when ma, mb are independent. With vars ma, mb in [0.5, 2] treated independently all mistakes differ from the answer.
- Other mistake hints checked: p1a (missing cross term, wrong sign, variances, factors 1 and 4, zero) all true; p2c (`C*hbar^2` is (1/2)C(2hbar^2), `C/4` units, `C*hbar^2/2`, sign, zero, `-3C hbar^2/2`) all true; p2d (`X`, `-2X`, `2K`, `K+X`) all true; p2e (`eps`, `-eps/hbar^2`, `4eps/(3hbar^2)`, `eps/(2hbar^2)`) all true. Tolerances 0.01 on integer answers are fine.
- Choice boxes: right-answer positions 2, 1, 3, 0, 1 (vary). No distractor is also true. p1b-order options all equal length; p2b-chi answer ties two others for longest (not strictly). Only p2e-sign breaks the length rule (row 1).
- "Our" remarks verified: X > 0 (X = integral of f*(r1) e^2/|r1 - r2| f(r2) with f = psi2* psi1, a Coulomb self-energy, positive because the Coulomb kernel is positive definite), marked "(our remark)"; psi1psi1 and psi2psi2 singlets at 2E0 correct, marked "(ours)" (see row 2). Twice the density at x1 = x2 in Psi_S: (1 + 1)^2/2 = 2, consistent with notes eq. (8.5.15).
- Solutions each end with a check (units, limits, sums, independent route). No hint gives a result away.

## Coverage and order
- Same three problems, same parts in MIT's order: 1(a), 1(b), 2(a)-(e), 3(a)-(c). MIT's points 15, 20, 10 kept; part splits (7+8, 4+3+4+5+4, 4+3+3) add up.
- Additions are marked as ours (oscillator example, spin 3/2 numbers, splitting box, totals, K and X names). MIT's closing note on Heisenberg and the "about one hundred times" ratio is reported in the 2(e) solution, attributed to MIT.
- Citations checked: MIT eq. (1)-(3) and (4)-(6) p. 1, eqs. (7)-(9) p. 2, eq. (10) p. 3, Problem 3 p. 3 all correct. Chapter 8: (8.3.8) p. 162, (8.4.8)/(8.4.9) p. 164, (8.5.4)/(8.5.6) p. 165, (8.5.13)-(8.5.16) p. 166, (8.5.21)/(8.5.22) p. 167, sections 8.6.1 and 8.6.3 p. 168 all correct. Chapter 1: (1.2.24)/(1.2.25) p. 18, remark 3 and (1.2.29) p. 19 correct. 8.05 notes 10 (2.8), (2.17), (2.18), (2.19), (2.20) and notes 9 (2.29) correct.
- Lesson references ("Comment 6", "Comment 7", the worked example's sqrt6 factor and its count of 10 symmetric states) match content/year-3/8.06/symmetrization-postulate.mdx.

## Licensing
- Only MIT's sheet (CC BY-NC-SA) and MIT notes used; no figures; wording is the page's own. MIT's sheet has no "rights reserved" or "courtesy" notice.
- Problem 3 is "inspired by Cohen-Tannoudji" on MIT's sheet: the page says it is written from MIT's sheet alone, and nothing on it goes beyond the sheet's statement; the book was not opened in this review. No OpenStax or LibreTexts.

## Notes
- Symbols: X has one meaning scoped to this page that covers both the exchange integral of 2(d) and the script 𝒳 of the 1(b) solution, with no unit (right, since the two have different units). C and J carry 1/(J s^2), correct. epsilon meaning states the convention.
- No em dashes; no `## Summary` with answers.

COUNTS: errors=0 warnings=3 info=2

## Resolution (2026-11-27, by the page author)

- Warning 1 (p2e-sign right answer longest): now "positive: the antisymmetric spatial state keeps the pair apart, so the triplet lies lower" (89 characters).
- Warning 2 (Problem 2(d) remark): one sentence added: H'' couples the ψ₁ψ₁ and ψ₂ψ₂ singlets to the singlet of part (b), since all three have total spin 0 and S_z = 0, so remark 3 cannot keep them apart; ε = 2X holds within MIT's four states.
- Warning 3 (calcs p1b-sa-matrix): split into `p1b-s-matrix` and `p1b-a-matrix`, each checking D_S or D_A on its own, with samples for m_b = m_a + 1 added (s = 1, m_a = 0, m_b = 1: 2 and 6; s = 2, m_a = −2, m_b = −1: 4 and 12, the reviewer's numpy values).
- Info: 2(a) wording left as it is (the full wavefunctions asked for are the eigenvectors); `covers: [23, 24]` kept.
- `status: reviewed`.
