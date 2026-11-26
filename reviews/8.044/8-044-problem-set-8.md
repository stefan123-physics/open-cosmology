---
page: content/year-3/8.044/8-044-problem-set-8.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps8/ (read: PDF and pdftotext; p. 6 also rendered as an image)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss8/ (read: PDF and pdftotext; p. 4 rendered as an image to confirm the 3(c) slip)
verdict: pass-with-notes
---

# Review: Problem Set 8: dust grains in space, a stepped surface, an atom trap, hydrogen on a surface and why stars shine

## Blind solve

Written from the stripped statements and MIT's sheet only, before the page's hints, answers, solutions, calcs file or MIT's solutions were opened (a draft of this section was saved to this file first).

My answers:
- 1(a) p = exp(-H/kT) / [(2π)³ (2πkT)^{3/2} √(I₁I₂I₃)], H = Σ L_i²/2I_i
- 1(b) perpendicular; ⟨L₁²⟩ = I₁kT; ratio √(I₃/2I₁) = √(1/800) = 0.035355
- 1(c) Z₁ = (2π)³(2πkT)^{3/2}√(I₁I₂I₃)/h³ = (2π)^{9/2}√(I₁I₂I₃)(kT)^{3/2}/h³; S = Nk(ln Z₁ + 3/2) with Z = Z₁^N
- 1(d) No: S ~ (3/2)Nk ln T → −∞ as T → 0
- 1(e) No: continuous classical spectrum, C = 3Nk/2 at every T
- 2(a) Z₁ = M(0.01 + 0.14e^{−Δ/kT} + 0.85e^{−1.5Δ/kT}), Z = Z₁^N
- 2(b) 85e^{−1.5Δ/kT}; equal at kT/Δ = 1.5/ln 85 = 0.33764
- 2(c) C ≈ 14Nk(Δ/kT)²e^{−Δ/kT}
- 2(d) 0.85
- 2(e) Nk ln M
- 2(f) Yes: finite excitation energy Δ of a single atom
- 3(a) A = 8πk³(2πmk/h²)^{3/2}, α = 9/2, η = 3
- 3(b) S = Nk[ln(Z₁/N) + 11/2] (Z = Z₁^N/N!)
- 3(c) T = T₀(a/a₀)^{2/3}; a = a₀/8 gives T/T₀ = 0.25
- 4(a) Z₁ = Σ_{m=−∞}^{∞} exp(−ħ²m²/2IkT); at kT = ħ²/2I: 1.77264
- 4(b) exp(−5ħ²/2IkT)
- 4(c) 1/2; e^{−x}/(1 + 2e^{−x}) = 1/(2 + e^{x}), x = ħ²/2IkT
- 4(d) E_rot = NkT/2
- 5(a) E_min = e²/R = 1.92 × 10⁻⁶ erg
- 5(b) p₊ = (2/√π)√(E/kT)e^{−E/kT}; E/kT = 347.57; log₁₀p₊ = −149.63
- 5(c) ⟨v⟩ = 9.18 × 10⁷ cm/s; L = 0.0923 cm; τ = 1.0056 × 10⁻⁹ s
- 5(d) log₁₀(τ/p₊) = 140.63 (age 4.7 × 10¹⁷ s, so about 10¹²³ ages); fusions per second N p₊/τ with N = 1.20 × 10⁵⁷: log₁₀ = −83.55 (−83.85 if each fusion of a pair is counted once, N p₊/2τ)

Comparison (page box vs mine), one line per answer id:
- p1-joint: equal.
- p1-l1: I1*k*T, equal.
- p1-axis: choice 1 (perpendicular), equal.
- p1-ratio: 0.0354 vs 0.035355, equal.
- p1-z: (2π)^{9/2}√(I₁I₂I₃)(kT)^{3/2}/h³, equal.
- p1-s: Nk ln Z₁ + 3Nk/2, equal.
- p1-third: choice 2 (broken), equal.
- p1-gap: choice 0 (no), equal.
- p2-z: equal.
- p2-ratio: 85e^{−1.5Δ/kT}, equal.
- p2-equal: 0.338 vs 0.33764, equal.
- p2-c: 14Nk(Δ/kT)²e^{−Δ/kT}, equal.
- p2-face: 0.85, equal.
- p2-s: Nk ln M, equal.
- p2-gap: choice 2 (yes), equal.
- p3-prefactor: 8πk³(2πmk/h²)^{3/2}, equal.
- p3-alpha: 4.5, equal.
- p3-eta: 3, equal.
- p3-s: Nk ln(Z₁/N) + 11Nk/2, equal.
- p3-t: T₀(a/a₀)^{2/3}, equal.
- p3-t8: 0.25, equal.
- p4-z: 1.773 vs 1.77264, equal.
- p4-ratio: equal.
- p4-c1: 0.5, equal.
- p4-c2: 1/(2 + e^{x}), equal to my e^{−x}/(1 + 2e^{−x}).
- p4-e: NkT/2, equal.
- p5-emin: 1.92e-6 erg, equal.
- p5-pplus: equal.
- p5-logp: −149.63, equal.
- p5-v: 9.18e7 cm/s, equal.
- p5-path: 0.0923 cm, equal.
- p5-tau: box 1.01e-9 s vs unrounded 1.0056e-9 s: 0.44% apart, inside the 1.5% tolerance, equal.
- p5-logt: 140.63, equal.
- p5-lograte: −83.55, equal to my N p₊/τ; my alternative −83.85 (each fusion event counted once) is rejected by the box: see warning 1.

MIT's solutions (opened after the above) agree with every result: 1(a)-(e), 2(a)-(f), 3(a)-(c), 4(a)-(d) (4(b) printed as exp[−(5/2)ħ²/IkT], the same), 5(a) 1.92e-6, 5(b) −149.6 and 0.2 × 10⁻¹⁴⁹, 5(c) 9.18e7, 1.81e-25, 5.99e25, 9.22e-2, 1.01e-9, 5(d) 5e140 s, 4.7e17 s, 1.2e57, 2 × 10⁻⁸⁴ per second (MIT counts N_protons/τ_fusion).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(d), box `p5-lograte` (value −83.55, tolerance 0.2) | Sheet p. 6: "how many fusion events would take place per second in the sun?"; solution p. 7 divides N_protons by τ_fusion (2 × 10⁻⁸⁴) | The statement asks "how many fusions would take place"; the solution itself remarks that counting events (each uses two protons) halves the number and "does not matter", yet the halved answer −83.85 is 0.30 away and rejected | Put MIT's counting into the statement, e.g. after "how many fusions would take place in the Sun each second?" add "(count, as MIT's solution does, the number of protons divided by the mean time to fusion of one proton)". Do not just widen the tolerance to 0.35: that would also accept −83.30, the carried error of dropping π from ⟨v⟩ |
| 2 | info | Problem 1(c), box `p1-z` | Solution p. 1 prints Z₁,R = (2π)^{9/2}√(I₁I₂I₃)(kT)^{3/2} without 1/h³ | The statement asks for "a factor 1/h for each pair" as in the lesson (canonical-examples divides the phase-space integral by h³); the solution discloses MIT's omission; MIT's form is a listed mistake with a correct, fair hint | None |
| 3 | info | Problem 3(c) solution | Solution p. 4 prints "dQ = dS/T" (confirmed on the rendered PDF, not a pdftotext artefact) | Called a slip in print; the dS = 0 conclusion kept | None: correct |
| 4 | info | Problem 5(b) solution | Sheet p. 6 (part c) quotes 10⁻¹⁴⁸; solution p. 6 gives −149.6 | Page reports both and calls the sheet's figure rougher | None: verified |

## Arithmetic and answer checks
- All numbers recomputed independently: E_min = 1.920e-6 erg (1.198 MeV); kT = 5.524e-9 erg (3.448 keV); E/kT = 347.574; prefactor 21.04 (log 1.323); log₁₀p₊ = −149.627 (approximation), −149.626 (exact erfc tail); exact/approximate factor 1.00144 ≈ 1 + 1/2y ✓; ⟨v⟩ = 9.178e7 cm/s (0.306% of c) ✓; n = 5.988e25 cm⁻³; σ = 1.8096e-25 cm²; L = 0.09229 cm; τ = 1.0056e-9 s; log₁₀τ_fusion = 140.63; age 4.73e17 s, ratio 10^122.96 ("about 10¹²³") ✓; N_protons = 1.198e57 (log 57.08); log rate −83.55; 10⁻⁸⁴ × 10¹⁸ = 10⁻⁶⁶ ✓.
- 2(c) graph and text: the leading term is below the full C by 0.062% at kT = 0.05Δ and 8.3% at 0.1Δ ("0.06%", "8%") ✓; full C/Nk peaks at 5.55, inside the plot range 6.2 ✓; 85/14 = 6.07 ("six times as many face sites") ✓.
- 4(a)/(d): Σe^{−m²} = 1.772637; levels counted once 1.3863 ("1.386") ✓; √π = 1.77245 ("1.7725 against 1.7726") ✓. 4(d) plot: ⟨ε⟩/(ħ²/2I) = 0.035 at t = 0.25, 0.215 at 0.5, 0.499 at 1.0, 0.79999 at 1.6, against t/2: caption fair.
- 3(b) check: the mean of ar over r²e^{−ar/kT} is 3kT, E = 9NkT/2 ✓. 3(c) check: (kT/a)³T^{3/2} ∝ T^{9/2}/a³ ✓.
- Log boxes (absolute tolerances, as `numberTolerance` in lib/answers.ts reads a bare number): p5-logp ± 0.1 accepts MIT's −149.6, rejects the missing prefactor (−150.95); p5-logt ± 0.1 accepts MIT's 5e140 (140.70, 0.07 off, as the page claims) and rejects a missing prefactor (141.95); p5-lograte: see warning 1.
- p5-tau: 1.01e-9 ± 1.5% = [0.995, 1.025]e-9 contains the unrounded 1.0056e-9 and MIT's 1.01e-9, and rejects σ = πR² (factor 4) and ⟨v⟩ without π (5.67e-10). Acceptable as is; value 1.006e-9 with 1% would be tidier (optional).
- p4-z 0.5% rejects the level-once 1.386 ✓; p2-equal 1% ✓.
- Every formula box: each listed mistake differs from the answer and each hint is true of its formula (p1-joint, p1-l1, p1-z, p1-s, p2-z, p2-ratio, p2-c, p2-s, p3-prefactor, p3-s, p3-t, p4-ratio, p4-c2, p4-e, p5-pplus). `vars` ranges keep every expression finite and physical.
- Choice boxes p1-axis (1), p1-third (2), p1-gap (0), p2-gap (2): correct; distractors wrong for the reasons stated.
- Every solution ends with a check step ✓.
- In the worktree: `npm run content:check` 0 errors (only "no review file yet" for this page); `npm run calc:test` 18814 passed.
- Points: 20 + 25 + 20 + 15 + 20 = 100, part points add up in each problem ✓ (MIT gives none; disclosed).

## Coverage and order
- All five problems and every part in MIT's order: 1(a)-(e), 2(a)-(f), 3(a)-(c), 4(a)-(d), 5(a)-(d) ✓. Our additions (1(b) ratio, 2(b) equal temperature, 3(c) a₀/8, 4(a) number) are marked as ours.
- Left out, harmlessly: MIT's opening remarks on lead and white dwarfs in Problem 5; the area A in Problem 4 (unused).
- The garbled "Comparison of Timescales for the Sun" block in the pdftotext of sheet p. 6 is hidden text that does not show on the rendered page; the page rightly ignores it.

## Licensing
- No "rights reserved" or "courtesy" notice in either PDF. MIT's two drawings (Problem 2) and the level diagram (solutions p. 4) are described in words, not redrawn ✓. Both graphs are generated from formulas.
- Eddington: only "we tell him to go and find a hotter place", in quotation marks, with book, year and page (p. 301, as on MIT's sheet) ✓. The "Note to the second impression" is paraphrased, not quoted ✓.
- Wording compared with both PDFs: rewritten throughout, no copied sentences. No OpenStax or LibreTexts.
- Historical claims are attributed to MIT's sheet and match it (pp. 5-7): Eddington's 1926 book; 40 million K; Gamow 1928; Atkinson and Houtermans 1929; WKB; the three reducing factors (5 events for the pp chain, 4 for the carbon cycle, as MIT prints); the 1930 note; Bethe from 1938, Nobel Prize 1967 for this and other work on nuclear reactions. Nothing I can show wrong without paywalled sources. The measured age (13.8 billion years) is marked as such.

## Notes
- Symbols: every page-scoped meaning in data/symbols.json fits its use here (α, η, A, a, a₀, T₀, Δ, ε, ε_m, ε_state, σ, τ, τ_fusion, β, I, I_i, L, L_i, p, p₊, E, E_min, e, m, j, y, y_min, n, M, N_protons, n and p for face and corner); units sensible, cgs where Problem 5 uses cgs. content:check reports no symbol problem.
- Hints: none gives a final result outright. The 2(e) hint ("N independent systems with M equally likely states each") and the equipartition hint of 1(b) come close, but each is a later hint after a method hint; acceptable.
- `at=` citations against printed page numbers: sheet p. 1 (P1), p. 2 (P2), p. 3 (P3), p. 4 (P4), p. 5 (5(b) note), p. 6 (5(c) formulas), pp. 6-7 (history); solutions p. 1 (P1), p. 2 (P2), p. 3 (3(a), 3(b)), p. 4 (3(c), 4(a)), p. 5 (4(b)-(d)), p. 6 (5(a), 5(b)), p. 7 (5(c), 5(d)): all correct.
- No em dashes; no `## Summary` with answers.

COUNTS: errors=0 warnings=1 info=3

## Resolution (2026-11-26, by the page author)

- Warning 1 (Problem 5(d), `p5-lograte` rejected the count that takes each fusion once): fixed as suggested. The statement now says how to count: "(Count, as MIT's solution does, the number of protons divided by the mean time to fusion of one proton.)" The tolerance is unchanged, so the answer that leaves π out of ⟨v⟩ is still rejected.
- Info notes: no change.

Status set to reviewed.
