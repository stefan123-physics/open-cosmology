---
page: content/year-3/8.06/8-06-problem-set-3.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/problem-set-3/ (read: the PDF, via pdftotext, 4 printed pages plus the OCW footer page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-2-hydrogen-fine-structure/ (read: MIT8_06S18ch2.pdf downloaded to scratch, pdftotext)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not fetched; the rounded values were checked against the CODATA 2018 values given in the calcs header, which are the known 2018 values)
verdict: pass-with-notes
---

# Review: Problem Set 3: Hermitian or not, the wavefunction at the origin, strong fields and vector operators

The set was solved blind first (section "Blind solve" at the end). Every final answer agrees with the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(d), solution, Formula label "Mean spin component in the state 2P½ with spin projection up" | (our addition, not on the sheet) | "with spin projection up" | The state has m_j = +½. Its spin points mostly *down* (⟨S_z⟩ = −ħ/6, as the next sentence says), so "spin projection up" is misleading. Change the label to "Mean spin component in the state 2P½ with m_j = +½" (the label is read aloud). |
| 2 | warning | Problem 4(a), the five choice boxes p4-a1 to p4-a5 | (choice boxes are our addition) | The right answer is the short choice "a CSCO" in 4 of 5 boxes. Both wrong choices are long sentences after a colon. | A reader who guesses "the short one" scores 4 of 5. Give the right choice a reason of the same length, e.g. "a CSCO: the operators commute and each list of eigenvalues names one state". The positions (1, 2, 0, 2, 1) are already varied. |
| 3 | warning | calcs/8.06/8-06-problem-set-3.yaml, entry p4-n2-384 | n/a | Computes −11/384 = −0.02865, but its `shown` quotes the neighbouring sentence "so $P_+ = \frac13$ and the fraction is $\frac{2 + 1/2}{3} = \frac56$". It does not compute ⅓ or ⅚. | Either set `shown: ['-\frac{11}{384}\,\alpha^4mc^2']` (−11/384 itself), or turn the entry into a check of the quoted sentence: formula `(1*2 + 1/2)/(1*(1+1/2)*2)` expected `5/6` (0.8333), plus a second entry `(1 + 1 + 2*1*(-1/2))/3` expected `1/3`. |
| 4 | info | Frontmatter `covers: [4, 5, 6]` | Set 3 is fine structure and Zeeman only, with no WKB | Lecture 6 also holds the lesson `semiclassical-local-de-broglie-wavelength` (lecture: 6). `practiceFor` (lib/content.ts) will give that lesson a "Practise: Problem Set 3" bar. | Acceptable: dropping 6 would lose the Zeeman lesson, and the design has no per-lesson exclusion. Note it for the design (a per-slug `covers` would fix it). |
| 5 | info | Problem 4(a) statement | "(In fact, using the rules for addition of angular momentum, ii) follows from i))" | Left out | Harmless. Optionally add one clause. |
| 6 | info | Problem 4(b)(i) | Asks only to "reproduce the known result" (Griffiths 6.82), with no restriction on l | Restricts to l ≥ 1 and treats l = 0 in the solution | Good; a fair clarification. |
| 7 | info | Problem 3 | "You may use Griffiths eqns. (6.59) and (6.64)" and "Estimate" | Uses B = (e/mc)L/r³ (Gaussian form of Griffiths 6.59), the lesson's ⟨1/r³⟩, and fixes \|L\| = ħ | Declared in the intro. With \|L\| = √2ħ the solution also gives 2185 G, so the reader sees that the factor is a choice. Fine. |

## Arithmetic and answer checks
- Every number recomputed independently (Python): ΔE(3P) = α⁴mc²/108 = 1.3417×10⁻⁵ eV; B = ΔE/(2μ_B) = 1158.97 G; B_int = 2μ_B/(81a₀³) = 1545.29 G; √2 × that = 2185.4 G; 0.75 × 1545 = 1159; α⁴mc² = 1.4490×10⁻³ eV; 81a₀³ = 1.2003×10⁻²³ cm³; 7800 × 8/27 × ½ = 1155.6 ≈ 1,160 (lesson zeeman-effect-weak-strong line 146 does say 7,800 gauss for 4.53×10⁻⁵ eV); −11/384 = −0.028646; 2P₃/₂ and 2P₁/₂ shifts −1/128 and −5/128, and ⅓(−1/128) + ⅔(−5/128) = −11/384.
- Problem 1: the p² and p⁴ matrix elements, the result without the delta, −8πħ⁴k³(k+2k′)/K³, and the difference −8πkħ⁴ were all rederived by hand. The claim in "What the delta function repairs" was checked: with h = p̂²g ≈ 2kħ²/r near 0, the boundary term of part (a) for f and h is −4πħ²·(2kħ²) = −8πkħ⁴, which is exactly the missing piece. The claim is correct. ⟨p⁴⟩₁S = 5ħ⁴/a₀⁴ and the naive −3ħ⁴/a₀⁴ check. The second route ⟨p²f|p²g⟩ = 4πħ⁴kk′(2kk′+2K²)/K³ checks.
- Problem 2: the oscillator check checks: ⟨r⟩ = 2b/√π with b² = ħ/mω, giving (mω/πħ)^{3/2}.
- Problem 4: the CG check P₊ = (l+m_l+1)/(2l+1) for m_s = ½ is correct. The weights ⅔ and ⅓ of 2P₁/₂, m_j = ½ are correct. The L·S values 0, ½, −1 (units ħ²) for 2S₁/₂, 2P₃/₂, 2P₁/₂ are correct. The commutator [J², S_z] = 2iħ(L_yS_x − L_xS_y) is correct.
- Problem 5: (b) ε-contractions, (c) the assembly and the test on z f(r), and (d) the double cross product (V×J)×J = (V·J)J + iħV×J − VJ², the assembly and the constant check by matrix elements between j and j+1 were all verified. α = −4ħ² was also confirmed numerically (l = 1 ⊗ s = ½ matrices).
- `<Answer>` boxes: every expr/value equals the solution's result. The `vars` ranges keep the formulas finite (l ≥ 1 in the p4 boxes, n ≥ 1, positive k, q, ħ, m). Every listed mistake was checked against its hint, and each hint is true of its formula: p1-p4 "no delta" = −8πħ⁴k³(k+2q)/(k+q)³; p4-inv "1/(l+½) right only when m_l = 0" is true; p4-pp "Yours is smaller" is true. 1% tolerances accept 3 significant figures and reject every listed mistake.
- Hints: none prints the result of an earlier part's box. 5(d) hint 4 states the lesson's ⟨S_z⟩ formula, which turns the p5-sz box into substitution. That is acceptable for an "our addition" box applying a lemma (info).
- Optional (info): p1-1s could list the mistake value −3 with the hint "without the delta function; a mean of the square of a Hermitian operator cannot be negative", as the solution already says.
- calcs: 53 entries, all pass. `content:check` (worktree): 0 errors, and the only page warning is the missing review.

## Coverage and order
- All five MIT problems are present, in MIT's order, with MIT's parts in order: 1(a)(b), 2 split into (a) derive and (b) hydrogen, 3(i)(ii), 4(a)(i–v), 4(b)(i)(ii), 5(a–d). The points match MIT: 15, 15, 5, 25, 20 (total 80). The part splits are the page's own and add up.
- Announcements and readings are omitted, as declared.
- Every "our addition" in the page appears in the intro list: the exponentials in 1(a); the 1S value in 1(b); the oscillator check in 2(a); the splitting box and constants in 3; the n = 2 value in 4(b)(i); the level count in 4(b)(ii); the choice box in 5(c); ⟨S_z⟩ in 5(d). The \|L\| = ħ choice and the ⟨1/r²⟩ given in 2(b) are explained in the intro and the statement.
- Griffiths pointers: in 3 and 4(b) they are replaced by the lesson's formulas and the written-out result, as declared. The intro says the textbooks are not used.
- P₊/P₋ notation for MIT's Pr[j = l ± ½]: defined in the statement, faithful.

## Citations
- `at=` printed pages of MIT's sheet were checked against the PDF: Problem 1 p. 1; Problems 2, 3 and the start of 4 p. 2; 4(b) and its eq. (1), 5, 5(c) p. 3; 5(d) p. 4. All correct.
- Lecture-notes equation numbers were checked in MIT8_06S18ch2.pdf:
  - (2.4.23) |ψ_n00(0)|² = 1/(πn³a₀³), which the notes say "is shown in the homework"
  - (2.4.45) ⟨V²⟩
  - (2.4.46) the relativistic shift
  - (2.4.52) the spin–orbit shift with j(j+1) − l(l+1) − ¾
  - (2.4.53) ⟨1/r³⟩ (in the uncoupled basis; (2.4.54) is the coupled-basis form; either fits)
  - (2.4.62), (2.4.63) the fine-structure shift
  - (2.5.12) the double commutator with 1/(2iħ)², so α = (2iħ)²
  - (2.5.17)–(2.5.19) ⟨S_z⟩ = ħm_j[j(j+1) − l(l+1) + ¾]/(2j(j+1))
  - (2.5.26) E = E_n⁽⁰⁾ + (eħ/2mc)B(m_l + 2m_s)

  All correct.
- Formulas taken from the notes cite `reading1`. Solution formulas cite `mit` with "(our own solution)", the convention of the reviewed Sets 1 and 2. Formulas printed on MIT's sheet cite `mit` without that note.

## Licensing
- No figures. The statements are rewritten (CSCO definition, Problem 2 wording, the 4(b) strategy as a numbered list). No sentence is copied beyond standard terms.
- No "rights reserved" or "courtesy" material on the sheet. No OpenStax, LibreTexts or textbook text is used. Griffiths and Sakurai are only named as MIT's attribution.
- CODATA 2018 values are cited to NIST (2022 values exist; the 2018 ones are fine for a 4-significant-figure estimate, info).

## Notes
- No em dashes and no `## Summary`. Symbols: every meaning scoped to the slug was read. The units for B, μ_B and a₀ are correct, and the meanings fit the page (μ_s = −(e/mc)S; ĵ "not a unit vector"; α's second meaning in 5(d)).
- Claims about lessons were checked in the worktree: the relativistic correction moves one p̂² onto the bra (fine-structure-darwin-relativistic-spin-orbit, line 98); the lesson's 7,800 gauss (zeeman-effect-weak-strong, line 146); the projection lemma (same lesson).
- The physics of the 3(ii) field B = −(1/c)v×E = (e/mc)L/r³ is correct, and so is the consistency check ΔE = (3/2)μ_B B_int.

## Blind solve

### My answers (written before opening the full page)
- 1(a): p^2 e^{-kr} = hbar^2 k (2/r - k) e^{-kr}; <e^{-k'r}|p^2 e^{-kr}> = 8 pi hbar^2 k k'/(k+k')^3. Boundary term: r^2 kills r=0 (f, g, f', g' finite), exponential kills infinity.
- 1(b): identity verified (delta from -2k e^{-kr}/r term, -2k * (-4 pi delta) = +8 pi k delta). <e^{-k'r}|p^4 e^{-kr}> = 8 pi hbar^4 k k'(k^2+3kk'+k'^2)/(k+k')^3, symmetric. Without the delta: 8 pi hbar^4 (k^4/K^3 - 2k^3/K^2), not symmetric. Ground state <p^4> = 5 hbar^4/a0^4.
- 2(a): u'(0)^2 = (2m/hbar^2)<dV/dr>, |psi(0)|^2 = (m/(2 pi hbar^2)) <dV/dr>, C = m/(2 pi hbar^2).
- 2(b): |psi_n00(0)|^2 = 1/(pi n^3 a0^3); n = 1: 1/(pi a0^3) agrees.
- 3(i): Delta E(3P3/2 - 3P1/2) = mc^2 alpha^4/108 = 1.342e-5 eV (1.342 in units of 1e-5 eV); B = Delta E/(2 mu_B) = 1159 G (g = 2).
- 3(ii): B = (e hbar/(mc)) <1/r^3> = 2 mu_B/(81 a0^3) = 1545 G.
- 4(a): (i) yes; (ii) yes; (iii) yes; (iv) no ([J^2, S_z] != 0, and l missing); (v) yes (sign of L.S fixes l = j +- 1/2).
- 4(b)(i): <J^2>/hbar^2 = l(l+1) + 3/4 + 2 ml ms; P+ = (l+1+2 ml ms)/(2l+1), P- = (l-2 ml ms)/(2l+1); <1/(j+1/2)> = 2[l(l+1) - ml ms]/(l(l+1)(2l+1)); E_fs = -(mc^2 alpha^4/(2n^3)) ([l(l+1) - ml ms]/(l(l+1/2)(l+1)) - 3/(4n)); n=2,l=1,ml=1,ms=-1/2: -11/384 alpha^4 mc^2 = -0.02865.
- 4(b)(ii): 5 distinct energies (m_l+2m_s = -2,-1,0,1,2; 0 and +-1 doubly degenerate). Degenerate pairs differ in l (L^2) or in m_j (J_z); H_fs commutes with L^2 and J_z, so off-diagonal elements vanish in each degenerate subspace.
- 5(a)-(c): shown; J x J = i hbar J, so the bracket vanishes and [J^2, J] = 0.
- 5(d): alpha = -4 hbar^2 (checked numerically with l = 1, s = 1/2 matrices); <S_z>/hbar in 2P1/2, m_j = +1/2: -1/6 (projection lemma and direct diagonalisation agree).

### Comparison with the page (one line per answer id)
- p1-p2: page 8 pi hbar^2 k q/(k+q)^3 = mine. Agree.
- p1-p4: page 8 pi hbar^4 k q (k^2+3kq+q^2)/(k+q)^3 = mine. Agree.
- p1-1s: page 5 = mine. Agree.
- p2-c: page m/(2 pi hbar^2) = mine. Agree.
- p2-n: page 1/(pi n^3) = mine. Agree.
- p3-de: page 1.342 = mine (1.3417). Agree.
- p3-b: page 1159 G = mine (1158.97). Agree.
- p3-bint: page 1545 G = mine (1545.29). Agree.
- p4-a1..a5: page a CSCO / a CSCO / a CSCO / not (do not commute) / a CSCO = mine. Agree.
- p4-j2: page l(l+1) + 3/4 + 2 ml ms = mine. Agree.
- p4-pp: page (l+1+2 ml ms)/(2l+1) = mine. Agree.
- p4-inv: page (l(l+1) - ml ms)/(l(l+1/2)(l+1)) = mine 2[l(l+1) - ml ms]/(l(l+1)(2l+1)) (identical since 2l+1 = 2(l+1/2)). Agree.
- p4-n2: page -0.02865 (-11/384) = mine. Agree.
- p4-levels: page 5 = mine. Agree.
- p5-jj: page "i hbar J" = mine. Agree.
- p5-alpha: page -4 hbar^2 = mine (numerical matrix check with l = 1, s = 1/2: [J^2,[J^2,S]] = -4 x RHS, all three components). Agree.
- p5-sz: page -0.1667 = mine (-1/6; also from direct diagonalisation). Agree.

No disagreement. All 53 calcs entries of calcs/8.06/8-06-problem-set-3.yaml pass (`pytest tests/calc -k 8-06-problem-set-3`: 53 passed); `content:check` in the worktree: 0 errors, the only warning for this page is the missing review file.

COUNTS: errors=0 warnings=3 info=7

## Resolution (2026-11-26, by the page author)

- Warning 1: the 5(d) Formula label now reads "Mean spin component in the state 2P½ with m_j = +½" (and the calcs entry that quotes it).
- Warning 2: in the boxes p4-a1 to p4-a5 the CSCO choice now reads "a CSCO: the operators commute and each list of eigenvalues names one state", as long as the other choices.
- Warning 3: calcs entry p4-n2-384 now quotes the −11/384 text it computes; two new entries (p4-n2-p-plus, p4-n2-fraction) check the neighbouring sentence P₊ = ⅓ and the fraction ⅚.
- Info items left as they are (optional).
