---
page: content/year-3/8.06/8-06-problem-set-2.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/problem-set-2/ (read: PDF, pdftotext and pages 2 and 4 rendered as images)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-1-non-degenerate-and-degenerate-perturbation-theory/ (read: PDF MIT8_06S18ch1)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-2-hydrogen-fine-structure/ (read: PDF MIT8_06S18ch2, p. 43 rendered for eqs. (2.4.62)-(2.4.63))
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-10/ (read: PDF MIT8_05F13_Chap_10, section 3)
  - https://physics.nist.gov/cuu/Constants/ (not fetched; CODATA 2018 values checked from the values printed in the calcs file against known CODATA 2018 values)
verdict: pass-with-notes
---

# Review: Problem Set 2: Higher orders, degenerate levels and the Stark effect

Blind solve first (section at the end, written before the full page was opened), then the comparison. No disagreement between my answers and the page's was found.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | frontmatter `references.codata.url` | (not MIT) | title says CODATA 2018, but the URL https://physics.nist.gov/cuu/Constants/ now shows CODATA 2022 | Set `url: https://physics.nist.gov/cuu/Constants/archive2018.html`. (The rounded values on the page, 137.036, 510,998.95 eV, 5.29177e-11 m, are the same under CODATA 2022, so no number changes.) |
| 2 | warning | Problem 1, Formula "The perturbed state and its energy" | MIT's sheet does not print this expansion; it is notes eq. (1.1.7) (state and energy series both under (1.1.7), checked) | `cite="mit" at="Problem 1, p. 1 (the expansion of the notes, eq. (1.1.7))"` | `cite="reading1" at="eq. (1.1.7)"` |
| 3 | info | intro, "pointers to textbooks (Griffiths, Sakurai, Shankar)" | Problem 3 is "Adapted from Schiff"; reading list also names Cohen-Tannoudji | Schiff not named | Add Schiff: "(Griffiths, Schiff, Sakurai, Shankar)". |
| 4 | info | Problem 5(d), Formula of ψ₂₀₀, ψ₂₁₀ | MIT gives no wavefunctions | supplied by us, marked on the formula | Optionally name it in the intro's list of differences. Wavefunctions checked: both normalized (quadrature 1.000000), signs as used for −3a₀. |
| 5 | info | Problem 5(c), polarizability step | p. 4 discussion (rendered): "polarizability α corresponds to energy −αE²" | MIT omits the ½ of an induced dipole; energy is −½α_pℰ² | Claim verified: the sheet indeed writes −αE²; the page's correction is right (α_p = 2C a₀³, bound 16/3 a₀³, exact 9/2 a₀³ = 4.5 a₀³, the standard value). |
| 6 | info | Problem 3, matrix eq. (4) | rendered p. 2: bottom row (ε₁*, ε₂*, E₂) | same | none; garbled pdftotext row confirmed from the image. |
| 7 | info | Problem 5(f) | "fine-structure splitting between the 2S and 2P levels" | j = ½ to j = 3/2 gap α⁴mc²/32 | Reasonable and stated. Optional sentence: the real 2S½–2P½ gap (Lamb shift, about 4.4 μeV) is also larger than the 1.59 μeV Stark shift at 100 V/cm, so the conclusion does not depend on the reading. |
| 8 | info | frontmatter `covers: [1, 2, 3, 4, 5]` | sheet posted 14 Feb 2018, no lecture list | Problems 1-3 use Lectures 1-3 (series, normalization, second-order degenerate PT), Problem 5(f) uses Lectures 4-5 (fine structure, j-dependence) | Justified: the set needs Lecture 5's result S_{n,j}. Overlap with Set 1 (covers 1-3) is harmless. |

## Arithmetic and answer checks
- Every box answer equals my blind answer (see "Blind solve"); equivalence checked by value or identically.
- `calc:test` for this page: 67 passed (`pytest tests/calc -k 8-06-problem-set-2`, run in the ps-806-2 worktree). `content:check`: 0 errors; only warning for this page is the missing review file.
- CODATA 2018 inputs in calcs: α = 7.2973525693e-3, m_ec² = 0.51099895000 MeV, a₀ = 5.29177210903e-11 m: correct 2018 values. They are inline in the calcs entries, not in calcs/constants.yaml (which holds only c, G, ħ, k_B, M_sun); acceptable, info only.
- 5(f): α⁴mc²/32 = 45.2826 μeV; ℰ = 2852.39 V/cm; Stark shift at 100 V/cm 1.5875 μeV = 3.506 % of the splitting; α⁴mc² = 1.449e-3 eV; n=1→2 gap 10.2 eV. All match the page.
- 5(c): ⟨r²⟩₁ₛ = 3.000 a₀² (quadrature); ⟨210|z|100⟩ = 0.744936 a₀ = 128√2/243 a₀; square 0.554929 = 2¹⁵/3¹⁰; 8/3 × 0.5549 = 1.4798; 1.4798/2.25 = 0.658 ("about two thirds"). Match.
- 5(d): ⟨200|z|210⟩ = −3.0000 a₀ by quadrature with the page's wavefunctions; prefactor 1/(16πa₀⁴) × 4π/3 = 1/(12a₀⁴), radial 24 − 60 = −36 a₀⁵. Match. Sign convention consistent through 5(e): |+⟩ = (|200⟩+|210⟩)/√2 has E⁽¹⁾ = −3eℰa₀ and p_z = +3ea₀ (energy −p·ℰ checks).
- 4(a), 4(b): checked by quadrature for n = 3, ℓ = 1 (⟨1/r⟩ = 1/9, ⟨1/r²⟩ = 2/81 in atomic units) besides the page's own 1s and 2p checks (1/12 a₀⁻² for 2p, correct).
- Problem 2: numerical diagonalization on 81 ring states (V/E₁ = 0.005) gives shifts −0.083333 and 0.416645 in units of q²ℰ²a²/E₁: −1/12 and 5/12. Matrix elements ⟨sin2φ|cosφ|sinφ⟩ = ½ and ⟨0|cosφ|cosφ/√π⟩ = 1/√2 checked.
- Problem 3: numeric eigenvalues of H for (E₁,E₂,ε₁,ε₂) = (1, 0.3, 0.03, 0.02): 0.298148, 1, 1.001852 against second-order 0.298143, 1.001857 and exact closed form 1.0018522. u_c check in the solution recomputed: correct.
- Problem 1: polynomial fit of the exact lower eigenvalue gives E⁽³⁾ = −0.2029586 vs v²(w₂−w₁)/Δ² = −0.2029586; exact |⟨0|ψ⟩|² gives λ² coefficient −0.289941 = −v²/Δ². The Feynman–Hellmann route to Z in 1(b) is correct (d/dE_n⁽⁰⁾ of −λ²Σ|δH|²/(E_k−E_n) gives −λ²Σ|δH|²/(E_k−E_n)²).
- Mistake hints: each checked against its formula (p1-e3 three, p1-z three, p2-me two, p2-m11 three, p2-m12 two, p2-up two, p2-down two, p3-exact three, p3-s1 two, p3-s2 one, p3-m12 two, p4-r1 three, p4-r2 three, p5-sum three, p5-low three, p5-shift three, p5-dip three). All true of their formula; e.g. "2q²ℰ²a²/3E₁" is 2V²/3E₁ with V = qℰa, "3√3eℰa₀" is the normalized radial integral alone, "−2a₀/e²" is the ionization threshold. All differ from the answer over the `vars` ranges; ranges finite (p4-r2 lets ℓ ≥ n, harmless for a formula check).
- Tolerances: p5-c 0.5 % (accepts 2.66-2.68, rejects 9/4); p5-split and p5-field 1 %: fine for 3 significant figures.
- Choice boxes (7, not 9): answer positions 1, 3, 1, 2, 2, 0, 1. Index 1 three times; no correct option is conspicuously longest except p5-good option 0, whose rivals are of similar length. Info only.
- Points: 6+4 = 10, 3+6+6 = 15, 9+6 = 15, 4+6 = 10, 4+2+8+6+5+5 = 30; problem totals equal MIT's (80).

## Coverage and order
- All five MIT problems, in MIT's order, with MIT's parts (Problem 2's single question split into (a)-(c), stated in the intro). Nothing left out except the announcements, reading list and textbook pointers (stated).
- Equation numbers checked against the notes PDFs: (1.1.7), (1.1.13), (1.1.14), (1.1.21), (1.1.26), (1.1.32), (1.1.34), (1.1.36), (1.2.24), (1.2.25), (1.2.42), (1.2.60), (1.2.61), (1.2.62) in chapter 1; (2.1.3), (2.1.5), (2.1.6), (2.1.12), (2.3.15), (2.3.18), (2.3.20), (2.4.62), (2.4.63) in chapter 2; 8.05 chapter 10 eq. (3.1) is the Feynman–Hellmann lemma (MIT's sheet calls it "Chapter 14" of the 8.05 notes; the page's link is the right OCW document). All correct.
- MIT sheet citations: eq. (1) p. 1; eqs. (2), (3), (4) p. 2; eqs. (5)-(9) p. 3; eqs. (10), (11) p. 4: all match the printed page numbers.
- Hints: none prints an earlier part's result or the part's own result. 5(d)'s second hint ("Only one pair of states is linked") gives away a structural step, acceptable.
- No `## Summary`, no em dashes.
- Every "our addition" number is in the intro's list (test system, polarizabilities, 2p contribution, μeV splitting, 100 V/cm shift and share, α⁴mc² and 10 eV).
- Symbols: the slug-scoped meanings in data/symbols.json fit the page (α as state label and fine-structure constant, E₂ in its three uses, V in Problems 2 and 4, α_p, η, M entries). No issue found.
- Claims about lessons: the fine-structure lesson uses ⟨1/r²⟩ in ⟨V²⟩ (checked); the 8.05 lesson contains the Feynman–Hellmann lemma (checked).

## Licensing
- MIT's Problem Set 2 carries no "All rights reserved" or "Courtesy of" notice (grep of the text). No figures on the sheet or the page.
- Statements are reworded, not copied; the household-wires sentence and the "do not try this at home" aside are paraphrased.
- No OpenStax, LibreTexts or other forbidden source. NIST used only for constants.

## Notes
- The calcs routes for M₁,₁ and M₁,₋₁ (mean and half-difference of exact even/odd shifts) assume the (1, ±1) eigenvectors, and the route for M₁₂ in Problem 3 assumes the rank-one form; so they are only partly independent. My blind solve derived all three from the definition (1.2.60) directly and agrees, so no change is needed.
- 5(f): within the lesson's model 2S½ and 2P½ stay degenerate, so a weak field still gives a linear shift ±√3 eℰa₀ inside j = ½. The page's closing remark says this goes beyond the problem; fair.

COUNTS: errors=0 warnings=2 info=6


## Blind solve

### My answers (written before opening the full page)

- 1(a) |n2> = sum_{k!=n} |k> [ sum_{l!=n} dH_kl dH_ln /((En-Ek)(En-El)) - dH_nn dH_kn/(En-Ek)^2 ];
  E3 = sum_{k,l!=n} dH_nk dH_kl dH_ln /((En-Ek)(En-El)) - dH_nn sum_{k!=n} |dH_kn|^2/(En-Ek)^2.
  Test system, lower state: E3 = v^2 (w2 - w1)/D^2 (numerical fit of exact eigenvalue: -0.202959 vs formula -0.202959 at v=.7, w1=.3, w2=-.4, D=1.3).
- 1(b) Z = 1 - lam^2 sum_{k!=n} |dH_kn|^2/(En-Ek)^2; probability |<n0|n>|^2/<n|n> = Z. Test: Z = 1 - lam^2 v^2/D^2 (exact |<0|psi>|^2 expansion coefficient -0.28994 = -v^2/D^2).
- 2(a) <n+1|dH|n> = -q Ef a/2; diagonal and <1|dH|-1> vanish, no first-order split.
- 2(b) M11 = q^2 Ef^2 a^2/(6 E1); M1,-1 = q^2 Ef^2 a^2/(4 E1).
- 2(c) E2 = (5/12) q^2Ef^2a^2/E1 for (|1>+|-1>)/sqrt2 (cos phi, larger), E2 = -(1/12) q^2Ef^2a^2/E1 for (|1>-|-1>)/sqrt2 (sin phi). Numerical diagonalisation (81 states, g=0.01): -0.0833332, 0.416645.
- 3(a) exact: E1 (eigvec (e2*, -e1*, 0)/eta), (E1+E2)/2 +- sqrt((E1-E2)^2/4 + eta^2). Expansions E1 + eta^2/(E1-E2), E2 - eta^2/(E1-E2), E1 exactly. Eigenvectors to first order: (e1, e2, eta^2/(E1-E2))/eta for the upper-shifted E1 state, (-e1/(E1-E2), -e2/(E1-E2), 1) for E2, (e2*, -e1*, 0)/eta for E1.
- 3(b) M12 = e1 e2*/(E1-E2) (real: e1 e2/(E1-E2)); M11 = |e1|^2/(E1-E2), M22 = |e2|^2/(E1-E2); eigenvalues eta^2/(E1-E2) and 0; nondegenerate E2 shift -eta^2/(E1-E2).
- 4(a) <1/r> = 1/(n^2 a0). 4(b) <1/r^2> = 2/(n^3 (2l+1) a0^2) (checked by quadrature for n=3, l=1).
- 5(a) parity in each odd coordinate; 5(b) <100|z|100> = 0.
- 5(c)(i) a0^2 (<r^2>_1s = 3 a0^2). (ii) -8 a0/(3 e^2). (iii) C = 8/3. Polarizability (E = -alpha Ef^2/2): alpha <= 16/3 a0^3, exact 9/2 a0^3. 2p share: |<210|z|100>|^2 = 2^15/3^10 a0^2 = 0.55493 a0^2, contribution to C 1.4798 (66 % of 9/4).
- 5(d) <200|z|210> = -3 a0 (with the page's signs); shifts -3 e Ef a0, 0, 0, +3 e Ef a0: three levels.
- 5(e) good states (|200>+|210>)/sqrt2 (energy -3eEf a0, p_z = +3 e a0), (|200>-|210>)/sqrt2 (+3eEf a0, p_z = -3 e a0), |211>, |21-1> (p = 0). Lowest-energy state p_z = 3 e a0.
- 5(f) alpha^4 mc^2/32 = 45.283 ueV; Ef = 2852.4 V/cm; Stark at 100 V/cm = 1.5875 ueV = 3.5 % of the splitting: fine structure dominates.

### Comparison (one line per answer id)
- p1-e3: page v^2*(w2 - w1)/D^2; mine v²(w₂−w₁)/Δ². Agree.
- p1-z: page 1 - lam^2*v^2/D^2; mine same. Agree.
- p1-prob: page Zₙ (index 1); mine Z. Agree.
- p2-me: page -q*Ef*a/2; mine −qℰa/2. Agree.
- p2-m11: page q²ℰ²a²/(6E₁); mine same. Agree.
- p2-m12: page q²ℰ²a²/(4E₁); mine same. Agree.
- p2-up: page 5q²ℰ²a²/(12E₁); mine same. Agree.
- p2-down: page −q²ℰ²a²/(12E₁); mine same. Agree.
- p2-state: page cos φ/√π (index 3); mine cos φ. Agree.
- p3-count: page "One" (index 1); mine one eigenvalue exactly E₁. Agree.
- p3-exact: page (E1+E2)/2 + sqrt((E1−E2)²/4 + e1² + e2²); mine same. Agree.
- p3-s1: page (e1²+e2²)/(E1−E2); mine η²/(E₁−E₂). Agree.
- p3-s2: page −(e1²+e2²)/(E1−E2); mine same. Agree.
- p3-vec: page (ε₂*, −ε₁*, 0)/η (index 2); mine same. Agree.
- p3-m12: page e1*e2/(E1−E2); mine ε₁ε₂*/(E₁−E₂), real case same. Agree.
- p4-r1: page 1/(n²a₀); mine same. Agree.
- p4-r2: page 1/(n³(ℓ+½)a₀²); mine 2/(n³(2ℓ+1)a₀²), identical. Agree.
- p5-sum: page a₀²; mine a₀². Agree.
- p5-low: page −8a₀/(3e²); mine same. Agree.
- p5-c: page 2.667; mine 8/3. Agree.
- p5-levels: page "Three" (index 2); mine three. Agree.
- p5-shift: page 3eℰa₀; mine +3eℰa₀ highest. Agree.
- p5-good: page (|200⟩ ± |210⟩)/√2 with |211⟩, |21−1⟩ (index 0); mine same. Agree.
- p5-dip: page 3ea₀; mine +3ea₀. Agree.
- p5-split: page 45.28 μeV; mine 45.283. Agree.
- p5-field: page 2852 V/cm; mine 2852.4. Agree.
- p5-house: page fine-structure splitting (index 1); mine same. Agree.
- Every solution ends with a "Check the result" step (units, limits, a second route or a number): verified for all 14 parts that have a solution.

## Resolution (2026-11-26, by the page author)

- Warning 1: the CODATA reference now links NIST's 2018 archive (`archive2018.html`).
- Warning 2: the Formula "The perturbed state and its energy" now cites the notes, `cite="reading1" at="eq. (1.1.7)"`.
- Info: the intro's list of textbook pointers now names Schiff too. The other info items are left as they are (optional).
