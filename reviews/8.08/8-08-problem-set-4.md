---
page: content/year-4/8.08/8-08-problem-set-4.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb4/ (read: prb4.pdf rendered as an image and its pdftotext; one page)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/8fc1b022e964e44ab41b87b5f8cd45cf_grand_canonical.pdf (read: Wen Chapter IV, printed pp. 28-35; pp. 31-35 rendered and checked)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/eafe8b81bbafeedbccbaa48417d8dca7_vanderwaals_mod.pdf (read: Wen Chapter II, printed pp. 13-15 rendered and checked)
verdict: pass-with-notes
---

# Review: Problem Set 4: Chemical potentials: hydrogen molecules that split, sites that hold two atoms, and a van der Waals gas as the reservoir

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

### My answers (written into this file before the full page was opened; checked numerically in `ps4calc/blind.py`)
- p1a: K(T) = n_H^2/n_H2 = e^{-eps0/kBT} / (2^{3/2} lambda^3)   (lambda_H2 = lambda/sqrt2 since m_H2 = 2m)
- p1b: K = 4 alpha^2 P / ((1 - alpha^2) kBT)  =>  alpha = 1/sqrt(1 + 4P/(K kBT)) = sqrt(K kBT/(K kBT + 4P))
- p1c: eps0 = 436e3/N_A = 7.23995e-19 J (rounds to 7.240e-19); alpha(3000 K) = 0.16767; alpha = 1/2 at T = 3414.3 K
- p1d: alpha decreases as P rises (alpha ~ P^{-1/2} for small alpha; at 10 atm and 3000 K, 0.0537)
- p2a(i): p0 = 1/(1+z+z^2), p1 = z/(1+z+z^2), p2 = z^2/(1+z+z^2), z = e^{mu/kBT}
- p2a(ii): <N> = Ns (z + 2z^2)/(1 + z + z^2)
- p2a(iii): Var N = Ns z(1 + 4z + z^2)/(1 + z + z^2)^2  (checked = z d<n>/dz by finite differences at z = 0.3, 1, 2.5)
- p2b: mu = kBT ln(n lambda^3/(1 - n v0)) + kBT n v0/(1 - n v0) + 2 n vbar  (checked against a finite-difference dA/dN)
- p2c: beta mu = ln(0.05/0.7) + 0.3/0.7 - 1.2 = -3.4105, z = 0.033025, <N>/Ns = 0.034045

### Comparison (one line per answer id)
- p1-k: page `exp(-e0/(kB*T))/(2^(3/2)*lam^3)` = mine. Agree (also Wen's boxed result, Chapter IV p. 34).
- p1-alpha: page `1/sqrt(1 + 4*P/(K*kB*T))` = mine. Agree.
- p1-num: page 0.1677, mine 0.16767. Agree.
- p1-half: page 3414, mine 3414.3. Agree.
- p1-press: page choice 2 ("α falls ..."), mine "decreases". Agree.
- p2-p0, p2-p1, p2-p2: identical to mine. Agree.
- p2-n: identical to mine. Agree.
- p2-var: identical to mine. Agree.
- p2-mu: identical to mine. Agree.
- p2-cover: page 0.0340, mine 0.034045. Agree.

No disagreement.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(a)(i): statement, hint 2, and the hints of the `(1 + z)^2` mistakes in p2-p0, p2-p1, p2-p2 | "A surface has N_s sites which can adsorb 1 or 2 atoms. It costs no energy to adsorb 1 atom or 2 atoms." The sheet does not say how many states a site has with one atom. | The boxes assume one state per occupation number (weights 1, z, z²), the natural reading, but the statement does not say so; it appears only in hint 2 ("The two atoms on a site are identical: the doubly occupied site is a single state"). The mistake hints say "With identical atoms there is one state with one atom". That reason is wrong: identical atoms on a site with two distinct places still give two one-atom states and Q = (1 + z)²; what decides it is the structure of the site, not whether the atoms are identical. | In the statement add, marked: "(Our reading of MIT's model: a site has exactly one state with no atom, one with one atom and one with two atoms.)" In hint 2 replace the "identical" sentence by "Each number of atoms is one state of the site." In the three `(1+z)²` mistake hints replace "With identical atoms there is one state with one atom" by "That describes a site with two distinct places, which has two one-atom states; the site here has one state for each number of atoms, so the sum is 1 + z + z²." |
| 2 | warning | Problem 1(a) solution, Formula "Equilibrium constant" (line 93) | (MIT's sheet has no Problem 1 text.) Wen's Chapter IV p. 34 boxes exactly n_H²/n_H₂ = (2πħ²/mk_BT)^(−3/2)·2^(−3/2)·e^(−ε₀/k_BT). | `cite="mit" at="Problem 1, p. 1 (our own problem and solution)"`, while the next line says "the boxed result of the notes (p. 34)". | Cite the source it is: `cite="reading1" at="p. 34, point ④ⓒ (boxed)"`. |
| 3 | info | Formulas of our solutions | MIT's sheet prints only the free energy A of 2(b). | Solution formulas are cited `cite="mit"` with "(our own solution)" or "(our addition and solution)" in `at=`. | The convention accepted in the 8.07 and 8.08 Set 1-3 reviews; no change (apart from #2, where a real source exists). |
| 4 | info | 2(b) solution, Check | The grand-partition-function lesson (line 146) derives n = ∂P/∂μ; it does not call it Gibbs-Duhem. | "the Gibbs–Duhem relation n = ∂P/∂μ at fixed T of the lesson", after a sentence that names the lesson on equal chemical potentials. | Optional: "of the lesson on the grand partition function". |
| 5 | info | Intro, last sentence | (none) | says the additions are marked "(Our addition.)"; part (c) is marked "(Our addition, with our numbers.)" | True in substance; optional wording "marked "(Our addition ...)"". |

## Arithmetic and answer checks
- Every number recomputed in `ps4calc/check2.py`: k_BT = 4.1419e-20 J (page 4.142e-20), ε₀/k_BT = 17.480 (17.48), λ = 3.1751e-11 m (3.175e-11), K = 2.8305e23 m⁻³ (2.831e23), Kk_BT = 1.1724e4 Pa (1.173e4), 4P/Kk_BT = 34.571 (34.57), α = 0.16767 (0.1677), small-α 0.1701 (0.170), (4/3)P = 1.351e5 Pa, ratio 11.52 (11.5), ε₀/k_B at 3414 K = 15.360 (15.36), 1/15.36 ≈ 1/15, 1/0.1677 ≈ 6. Problem 2(c): 0.07143, e^(0.4286 − 1.2) = 0.46235 (0.4624), z = 0.033025 (0.03303), 0.035206 (0.03521), 1.034116 (1.03412), 0.034045 (0.0340); ideal gas 0.05226 (0.0523); 1 − 0.0340/0.0523 = 0.35 ("about a third fewer"). All correct.
- 436 kJ/mol / N_A = 7.23995e-19 J, quoted as 7.240e-19 J; Wen p. 35 gives 7.24e-12 erg = 4.5 eV. Correct.
- Algebra checked: 2(a)(iii) numerator (1+4z)(1+z+z²) − (z+2z²)(1+2z) = 1 + 4z + z² (by hand and numerically); the per-site route (mean square minus square of mean) gives z + 4z² + z³ over D², the same. 2(b) check: ∂P/∂n = k_BT/(1−nv₀)² + 2nv̄ and ∂μ/∂n = k_BT/[n(1−nv₀)²] + 2v̄, verified by hand. Every limit in the Check steps (z → 0, z → ∞, variance 2/3 per site at z = 1, K → 0 and ∞, T^(3/2) growth, hard cores raise μ, attraction lowers it) is right.
- Answer boxes: every `expr` equals its solution; the `vars` keep every answer and mistake finite (1 − nv₀ ≥ 0.5, μ/k_BT ≤ 4) and different. Mistakes and hints verified: p1-k (λ_H₂ = λ gives 1/λ³; the inverted factor gives 2^(3/2)/λ³; sign flip), p1-alpha (missing 4; small-α limit, which exceeds 1 when Kk_BT > 4P), p2-n, p2-var (Poisson ⟨N⟩; mean square without the mean), p2-mu (no hard-core term; nv̄ instead of 2nv̄; A/N = k_BT[ln(...) − 1] + nv̄). All hints are true of their formulas, except the "identical atoms" reasoning in the `(1+z)²` hints (Differences #1).
- Number boxes: 1% tolerance accepts 3 significant figures and rejects the λ slips (α would be 0.275 or 0.434). p1-press: correct choice in position 2, neither the longest nor the shortest.
- Calcs file: every entry by a route independent of the page (root search, numerical derivatives); `pytest tests/calc -k problem-set-4` passes. Calcs uses ε₀ = 436e3/N_A and CODATA ħ where the page rounds to 7.240e-19 J and 1.054572e-34; no quoted digit changes (info, no fix).
- `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.
- Points: 4 + 6 + 6 + 4 = 20 and 8 + 5 + 5 + 7 + 5 = 30, 50 in all, as the intro says.

## Coverage and order
- MIT's sheet (one page, checked on the rendered PDF) has Problem 1 (only "Problem 13.1 in K. Huang's book") and Problem 2 with parts (a)(i), (a)(ii) and (b); the sheet ends after (b). The page keeps that order; Problem 1 is our own (marked in the title, the intro and the statement); (a)(iii) and (c) are our additions, marked where they stand.
- The sheet's free energy is A = Nk_BT[ln(Nλ³/(V − Nv₀)) − 1] + N²v̄/V, without a ½ (checked on the rendered PDF). Wen's Chapter II p. 13 has + ½N²v̄/V with b ≈ N(4π/3)r₀³ = Nv₀, and p. 14 has a = −½N²v̄. So the page's remark is right: the sheet's v̄ is half the notes' v̄, an attraction makes v̄ < 0 in both, and Nv₀ is Wen's excluded volume b. The page treats v̄ as negative consistently (remark, symbol meaning, `vars` vb in [−2, −0.3], 2(c) nv̄ = −0.600 k_BT, the Check).
- The sheet's "absorbed" in (a)(ii) is read as "adsorbed", and the intro says so: correct (the sheet's first sentence says "adsorb").
- Problem 1 (H₂ ⇌ 2H at fixed pressure) is on Wen's Chapter IV point 4(c) (pp. 33–35), the chapter of the set's date (Feb. 23, 2005), and does not duplicate Sets 1–3. MIT's own Set 5 Problem 1 (electrons and holes) also uses the law of mass action, for another reaction and without the fixed-pressure step (info: the topic recurs, no duplication).
- `covers: [2, 4]` and `lecture: 4`: Chapter II (van der Waals, used in 2(b) and 2(c)) and Chapter IV (grand canonical ensemble, chemical potentials, mass action). Right. The prerequisites exist and fit.

## Licensing
- The sheet has no "rights reserved", "courtesy" or third-party notice. No MIT figure. Statements are in the page's own words; Huang is not used. Wen's 436 kJ/mol and the p. 34 result are cited. No OpenStax or LibreTexts. No em dashes; no `## Summary`.

## Notes
- Citations checked on the rendered Wen PDFs: p. 34, point ④ⓒ (section "4 Applications", (c) Chemical reactions, which starts on p. 33): μ_i = k_BT ln(n_iλ_i³) + ε_i, 2ε_H − ε_H₂ = ε₀, 2μ_H − μ_H₂ = 0 and the boxed n_H²/n_H₂, all there. p. 35: 436 kJ/mol, 7.24e-12 erg = 4.5 eV. p. 32: boxed weight P_n ∝ e^(−(E_n − μN)/k_BT) and the adsorption example (b). p. 31: μ = ∂A/∂N. The sheet formula at "Problem 2(b), p. 1" is exact.
- Lesson claims checked: equal-chemical-potentials has the Saha worked example and the remark that rotations, vibrations and spins multiply K by internal partition functions (line 169); grand-partition-function has ⟨(N − N̄)²⟩ = −k_BT ∂²Ω/∂μ² = k_BT ∂⟨N⟩/∂μ (lines 116–118) and n = ∂P/∂μ (line 146); van-der-waals-equation has the ½N²v̄/V term and b as the excluded volume (lines 79, 91).
- Hints: a(i) hint 2 (weights 1, z, z²) and the a(ii) hint (0·p₀ + 1·p₁ + 2·p₂, times N_s) come close to the result but still leave the normalisation and algebra to the reader. 1(c) hint 2 (α = ½ when Kk_BT = (4/3)P) is a step, not the answer.
- Symbols: page-scoped meanings for α, β, ε, ε₀, ε_i, λ, λ_H₂, μ, μ_i, K, N, N_s, p₀ to p₂, v̄ (J m³, negative for an attraction, half of Wen's), v₀, b, Q_G and the rest all fit this page.
- Physics remark (no fault): real H₂ at 3000 K and 1 atm is less dissociated than 17% because of the internal partition functions; the page says the numbers hold "in this model" and why.

COUNTS: errors=0 warnings=2 info=5

## Resolution (2026-11-27, by the page author)

- Warning 1: Problem 2(a)(i) now states our reading of MIT's model (one state each with no, one and two atoms); hint 2 says "Each number of atoms is one state of the site"; the three (1 + z)² mistake hints now say that this describes a site with two distinct places, which has two one-atom states.
- Warning 2: the Formula "Equilibrium constant" in Problem 1(a) now cites Wen's Chapter IV (reading1), p. 34, point ④ⓒ (boxed).
- Info items left as they are.
- `status: reviewed`.
