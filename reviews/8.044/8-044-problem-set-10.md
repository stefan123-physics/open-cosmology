---
page: content/year-3/8.044/8-044-problem-set-10.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps10/ (read: PDF, pdftotext, and a page image of p. 5)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss10/ (read: PDF, pdftotext, and page images of pp. 3, 4, 5 and 7)
verdict: pass-with-notes
---

# Review: Problem Set 10 (8.044), identical particles and the chemical potential

I solved the set blind first, using only the stripped statements and MIT's sheet. The answers below were written to this file before I opened the full page, its calcs file or MIT's solutions.

## Blind solve

### My answers (written before opening the full page)
x = e^{-Δ/kT}, β = 1/kT.
- 1(a) Fermions: (1,1,0) ε2; (1,0,1) ε3; (0,1,1) ε2+ε3. T = 0: (1,1,0), E = ε2.
- 1(b) Bosons: (2,0,0) 0; (1,1,0) ε2; (1,0,1) ε3; (0,2,0) 2ε2; (0,1,1) ε2+ε3; (0,0,2) 2ε3. T = 0: (2,0,0), E = 0.
- 1(c) Z_F = e^{-βε2} + e^{-βε3} + e^{-β(ε2+ε3)}; Z_B = 1 + e^{-βε2} + e^{-βε3} + e^{-2βε2} + e^{-β(ε2+ε3)} + e^{-2βε3}.
- 1(d) Leading terms: F: e^{-βε2}+e^{-βε3}; B: 1+e^{-βε2}. U_F = (ε2 e^{-βε2}+ε3 e^{-βε3})/(e^{-βε2}+e^{-βε3}); U_B = ε2 e^{-βε2}/(1+e^{-βε2}). U_F(0) = ε2, gap Δ_F = ε3 − ε2; U_B(0) = 0, gap Δ_B = ε2.
- 2(a) label by n = 0..N (n excited, N−n in ground); E_n = nΔ; N+1 states.
- 2(b) Z = (1 − x^{N+1})/(1 − x).
- 2(c) p(n) = x^n (1−x)/(1−x^{N+1}); N = 3, x = 1/2, n = 0: 8/15 = 0.5333.
- 2(d) Z_d = (1 + x)^N.
- 3(a) 10 symmetric spin states (of 16); 6 antisymmetric; Cl-35 nuclei are fermions, so even L pairs with 6, odd L with 10; weak/strong = 6/10 = 0.6.
- 3(b) d/dL[(2L+1)e^{-L(L+1)Θ/T}] = 0 → (2L+1)² = 2T/Θ_R, L = (√(2T/Θ_R) − 1)/2.
- 3(c) T = 300 K: N2 L = 6.69 ≈ 7, i.e. the 8th line counting from L = 0: agrees. Cl2: L = 20.2, so about 21 lines (L = 0 … 20).
- 3(d) Heteronuclear: nuclei distinguishable, no exchange constraint: no alternation of intensities, all lines weighted (2I+1)² = 16; Θ_R slightly smaller (larger reduced mass / moment of inertia), so lines slightly closer and the peak at slightly larger L.
- 4(a) g = M!/[N!(M−N)!]; M = 10, N = 3: 120.
- 4(b) Z = g e^{Nε0/kT}; Z/g = e^{Nε0/kT}.
- 4(c) F = −Nε0 − kT[M ln M − N ln N − (M−N) ln(M−N)]; μ = −ε0 − kT ln((M−N)/N); half filled: μ = −ε0.
- 4(d) μ_gas = kT ln(nλ³): f = nλ³e^{ε0/kT}/(1 + nλ³e^{ε0/kT}); h → 0 ⇒ λ → 0 ⇒ f → 0. Argon 300 K, 1 atm: λ = 1.595e-11 m, n = 2.446e25 m⁻³, nλ³ = 9.92e-8, ε0/kT = −ln(nλ³) = 16.13.
- 4(e) f = P/(P + α) with α = kT(2πmkT/h²)^{3/2} e^{−ε0/kT} (equivalently f = α'P/(1+α'P), α' = 1/α).
- 5(a) S = k ln Ω; example S_I/k = (3/2) ln 2 = 1.0397.
- 5(b) S_I = U/T + k ln Z (= (U − F)/T).
- 5(c) ∂(−k p ln p)/∂p = −k(ln p + 1).
- 5(d) λ_U = −1/T, λ_N = μ/T, λ_1 = k + Φ_G/T; with Φ_G = −kT ln Ξ, p = e^{(μN−E)/kT}/Ξ.
- 6(a) (∂S/∂μ)_{V,N} = (∂N/∂T)_{S,V} (from U(S,V,N): (∂T/∂N)_{S,V} = (∂μ/∂S)_{V,N}); equivalently −(∂S/∂T)_{V,N}/(∂S/∂N)_{T,V}.
- 6(b) (∂μ/∂V)_{T,N} = −(∂P/∂N)_{T,V}.
- 6(c) (∂μ/∂P)_{T,N} = (∂V/∂N)_{T,P}. (At constant S,N it would be (∂V/∂N)_{S,P}.)
- 6(d) (∂μ/∂T)_{P,N} = −(∂S/∂N)_{T,P}.

### Comparison (page answer vs mine, one line per answer id)
I compared the formula boxes by value at random points within each box's `vars` (Python), or symbolically where the match is obvious.
- p1-nf: 3. Agree.
- p1-f0: (1, 1, 0). Agree.
- p1-nb: 6. Agree.
- p1-b0: (2, 0, 0). Agree.
- p1-zf: identical. Agree.
- p1-zb: identical (term order differs). Agree.
- p1-uf: identical. Agree.
- p1-ub: identical. Agree.
- p1-gf: ε3 − ε2. Agree.
- p1-gb: ε2. Agree.
- p1-contrast: "the fermions keep the energy ε₂ at T = 0, the bosons none: both show energy gap behaviour". Agree; matches MIT p. 2.
- p2-e: nΔ. Agree.
- p2-count: N + 1. Agree.
- p2-z: (1 − x^{N+1})/(1 − x). Agree.
- p2-p: x^n(1 − x)/(1 − x^{N+1}). Agree.
- p2-p0: 0.533 (8/15). Agree.
- p2-zd: (1 + x)^N. Agree.
- p3-sym: 10. Agree.
- p3-ratio: 0.6. Agree.
- p3-which: odd L, symmetric spin states. Agree.
- p3-peak: 2T/Θ_R. Agree.
- p3-n2: the box is 7 ± 8 % and accepts 6.44 to 7.56. My exact 6.69 and MIT's 7.2 are both accepted. A reader who types "8" (the line number, not L) is rejected, which is right. Agree.
- p3-cl2: the box is 22 ± 7 % and accepts 20.46 to 23.54, so my 21 lines is accepted. The page's 22 follows MIT: L ≈ √(T/2Θ_R) = 20.7 ≈ 21, which is the 22nd line. The page's own check adds that the strongest line really does start from L = 21, because odd L has weight 10 against 6 for even L. I recomputed this: 25.12 × 6 at L = 20 against 25.08 × 10 at L = 21. Agree within the stated tolerance.
- p3-mixed: no alternation; all 16 spin states for every L. Agree.
- p4-ways: 120. Agree.
- p4-z: e^{Nε0/kT}. Agree.
- p4-f: −Nε0 − kT[M ln M − (M−N) ln(M−N) − N ln N]. Agree.
- p4-half: −ε0. Agree.
- p4-f-n: nλ³e^{ε0/kT}/(1 + nλ³e^{ε0/kT}). Agree.
- p4-argon: 16.1 against my 16.126. Agree.
- p4-f-p: αP/(1 + αP). This agrees with MIT's convention. My blind form was P/(P + α') with α' = 1/α: the same physics, but α is defined the other way round (warning W1).
- p4-alpha: h³(2πm)^{-3/2}(kT)^{-5/2}e^{ε0/kT} = λ³e^{ε0/kT}/kT, equal numerically. Agree, in MIT's convention.
- p5-three: 1.04 ((3/2) ln 2 = 1.0397). Agree.
- p5-canon: U/T + k ln Z. Agree.
- p5-deriv: −k(ln p + 1). Agree.
- p5-lu: −1/T. Agree.
- p5-ln: μ/T. Agree.
- p5-l1: k + Φ_G/T. Agree.
- p6-a: (∂N/∂T)_{S,V}. Agree.
- p6-b: −(∂P/∂N)_{T,V}. Agree.
- p6-c: (∂V/∂N)_{T,P}. Agree.
- p6-d: −(∂S/∂N)_{T,P}. Agree.

The page and I agree on all of the physics. The one difference is a convention (how α is defined in 4(e)), reported as warning W1.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| W1 | warning | Problem 4(e): statement and boxes p4-f-p, p4-alpha | The sheet asks: "Express your result in d) in terms of the pressure P". The solution (p. 5) chooses f = αP/(1 + αP). | The statement asks for f "in terms of P and one parameter α that depends on the temperature only", but both boxes accept only MIT's convention, with α multiplying P. A correct f = P/(P + α), with α = kT e^{-ε0/kT}/λ³ (my blind answer), is rejected in both boxes. | Fix the convention in the statement. For example: "write f in the form f = αP/(1 + αP), with a parameter α that depends on the temperature only", or "… in terms of the product αP …". |
| W2 | warning | data/symbols.json: the `\Delta` meaning scoped to this page | (n/a) | "The energy of the excited single-particle state in Problem 2, and the energy gap in Problem 1. Not a difference of two values here." But in Problem 1 the fermions' gap is Δ = ε3 − ε2, which is a difference of two values. | Drop the last sentence, or replace it with "In Problem 1 the energy gap (for the fermions Δ = ε3 − ε2)." |
| I1 | info | Problem 6(c) | The sheet (p. 5) asks for (∂μ/∂P)_{T,N}; I checked this on the PDF image. MIT's solutions (p. 9) answer (∂μ/∂P)_{S,N} = (∂V/∂N)_{S,P}, from the enthalpy. | The page follows the sheet with its own solution from the Gibbs function, (∂V/∂N)_{T,P}, and says so in brackets. It keeps MIT's enthalpy relation as a remark, and the S,P form appears as a wrong choice. | This handling is correct. No change. |
| I2 | info | Problem 1(d): boxes p1-uf, p1-ub | MIT ends with the expanded forms ε2 + (ε3−ε2)e^{−(ε3−ε2)/kT} and ε2e^{−ε2/kT}. | The boxes ask for the energy from the two terms, unexpanded. MIT's forms are listed as mistakes, with a hint that says they are MIT's low-temperature form. | Fair: the statement says plainly "without a further expansion", and the hint tells a reader who typed MIT's form what to change. No change. |
| I3 | info | Problem 4(d) solution | MIT p. 5 prints (1 − f)/f = λ³e^{ε0/kT}n; I checked this on the PDF image. | The page writes f/(1 − f) and points out MIT's slip in brackets. | Correct. |
| I4 | info | Problem 3(c) solution | MIT p. 4 heads the chlorine line "For N₂"; I checked this on the PDF image. | The page points out the slip in brackets. | Correct. |
| I5 | info | Problem 1(b) solution | (n/a) | "Whether ε3 or 2ε2 is the higher energy depends on the values: the order of the first two rows does not." This is true, but only rows 3 and 4 can swap: the other rows are always in this order. | Optional: write "only the order of ε3 and 2ε2 depends on the values". |

## Arithmetic and answer checks
I recomputed these in Python (the script is in the scratch folder, not the repo):
- 1(d) check, with ε3 = 2ε2 and kT = 0.2ε2: U_F is 1.006783 (all states), 1.006693 (two terms) and 1.006738 (expanded). U_B is 0.006874, 0.006693 and 0.006738. All as printed.
- 2(c): 8/15 = 0.5333. 2(d): Z_d = 2.25 and Z = 1.75 for N = 2, x = 1/2. Correct.
- 3(b) check, Θ_R = 15 K and T = 300 K: √10 − ½ = 2.66. The worked example in the polyatomic-gases lesson (line 134) does have its strongest line from l = 3. Correct.
- 3(c) N₂: √(300/5.8) = 7.19, and the exact L is 6.69. The weights at L = 6, 7 and 8 are 8.66, 8.73 and 8.48. Cl₂: √(300/0.7) = 20.70, and the exact L is 20.20. The weights at L = 20 and 21 are 25.12 and 25.08. All as printed.
- 3(d): the reduced-mass ratio (35·37/72)/(35/2) = 37/36, i.e. 2.7 %. Correct.
- 4(c), M = 1000 and N = 300: ln(700/301) = 0.8440 and ln(700/300) = 0.8473. Correct.
- 4(d) argon: λ = 1.5947e-11 m, n = 2.4463e25 m⁻³, nλ³ = 9.922e-8, ε0/kT = 16.126, which is 0.4169 eV. Correct.
- 4(e): α = λ³e^{ε0/kT}/kT = h³(2πm)^{-3/2}(kT)^{-5/2}e^{ε0/kT}; both forms give 0.222453 at a random point. At αP = 9, f = 0.9. Correct.
- 5(a): (3/2) ln 2 = 1.0397 and ln 3 = 1.0986. 5(b) check: p = 0.7311 and 0.2689, so −Σp ln p = 0.5822, which equals U/kT + ln Z = 0.2689 + 0.3133. Correct.
- Problem 6 checks. For (a), with k = 1 and λ = T^{-1/2} at T = 1.3, V = 2, N = 0.7, both sides come to −0.27441 (numerical derivatives). I checked the ideal-gas checks in (b), (c) and (d) by hand.
- I read every listed mistake against its formula, and each hint is true of the formula it belongs to. Examples:
  - −k(ln p − 1) is indeed the derivative of −k(p ln p − 2p).
  - ln 2 at half filling would need (M − N)/N = 2.
  - The single power of λ is the lesson's example of atoms that move on the surface (grand-canonical-ensemble.mdx lines 76–86 and 142).
- The `vars` ranges keep every formula finite: M − N > 0 in p4-f, and 1 − x > 0 everywhere.
- Points add up: 15 + 15 + 15 + 25 + 20 + 10 = 100, and each exercise equals the sum of its parts.
- Choice boxes: the right answer sits at positions 2, 1, 2, 0, 3, 1, 2, 0 and 3, and it is never the only longest choice. It ties for longest in four boxes: p1-f0 and p1-b0 (all four choices are 9 characters) and p6-b and p6-d (three choices of 28 characters). In those boxes the choices are near-identical formulas, so the length gives nothing away.
- calcs: the file has 95 entries. Every `shown:` string occurs word for word on the page (checked by script). 33 entries carry `answer:`, matching the number and formula boxes.
- `npm run content:check` in the worktree: 0 errors. The only warning for this page is the missing review file.
- Citations: I checked every `at=` page against the printed footers of both PDFs, and all are correct:
  - Sheet: p. 2 for 4(c), pp. 3–5 for Problem 5, p. 5 for Problem 6.
  - Solutions: pp. 1–2 for Problem 1, pp. 2–3 for Problem 2, pp. 3–4 for Problem 3, pp. 4–5 for Problem 4, pp. 6–8 for Problem 5, p. 8 for 6(a), (b) and (d), and p. 9 for MIT's enthalpy relation.

## Coverage and order
- All six of MIT's problems and all their parts are present, in MIT's order. MIT's four unlabelled derivatives in Problem 6 are labelled (a) to (d), as the introduction says.
- Every addition is marked as ours: the 2(c) example, the 3(a) spin count, the 4(a) example with M = 10, the 4(c) half filling, the 4(d) argon example, the 5(a) three-state example and the 3(d) remark on the reduced mass.
- The reading assignments (MIT's notes on excited helium and on Raman scattering; Blundell §15.1) are replaced by a short statement, in the page's own words, of what the problem needs from them. That is adequate.

## Licensing
- Neither PDF has an "All rights reserved" or "Courtesy of" notice (I searched both texts).
- MIT's figures are not reproduced. The drawing of the two levels is described in words, and the sketch of the isotherm is replaced by a Plot computed from f = x/(1 + x). The plot of the Raman envelopes is computed from the formula. The measured N₂ spectrum in MIT's Raman notes is described in words only.
- The wording is the page's own. The only phrases it shares with MIT are standard terms such as "energy gap behaviour" and "Langmuir isotherm".
- No OpenStax, LibreTexts or other restricted source is used.

## Symbols
- The writer added 49 meanings scoped to this page and 12 new entries: Z_F, Z_B, U_F, Z_d, ε2, ε3, S_I, p_state, p_N,ν, E_N,ν, λ_U and N_gas.
  - No form appears in more than one entry of data/symbols.json (checked by script).
  - Each new entry is used on the page.
  - The units are right: λ_U is 1/K (= −1/T), λ_1 and λ_N are J/K, α is 1/Pa and Θ_R is K.
- Δ has a wrong sentence: see W2.
- Info: the meaning of `n` (excited bosons in Problem 2, number density in Problem 4) does not cover the general n in Stirling's formula, "ln n! ≈ n ln n − n", in 4(c). Optional: add "in Stirling's formula, any large whole number".

## Notes
- Hints: none gives a number away. Two come close to answering a choice box:
  - The third hint of 3(a) states the pairing ("even L … antisymmetric, odd L … symmetric"), which nearly answers p3-which.
  - The second hint of 6(a) says the answer is the inverse of the Maxwell relation from U.
  Both are last or late hints, so this is acceptable (info).
- p3-cl2 (22 ± 7 %) also accepts 20.7, which is L itself rather than the number of lines. With a count this close to L that cannot be avoided; info only.
- Every solution ends with a "Check the result" step (units, limits or numbers). There is no `## Summary` and no em dash.
- I checked the claims about lessons in the lesson files, and they are correct: the worked example in polyatomic-gases, and grand-canonical-ensemble slide 6 with its example of atoms that move on the surface.

COUNTS: errors=0 warnings=2 info=9

## Resolution (2026-11-26, by the page author)

- Warning 1 (4(e), form of f): the statement now fixes the form, "write f in the form f = αP/(1 + αP), with a parameter α that depends on the temperature only", so the boxes no longer reject an equivalent convention.
- Warning 2 (Δ meaning): the page-scoped meaning in data/symbols.json now reads "The energy of the excited single-particle state in Problem 2, and in Problem 1 the energy gap (for the fermions Δ = ε₃ − ε₂)."
- Info items: no change (optional wording).
