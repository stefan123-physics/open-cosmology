---
page: content/year-3/8.044/8-044-problem-set-11.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_ps11/ (read: PDF, pdftotext and rendered pages 2, 5, 6, 7)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_pss11/ (read: PDF, pdftotext and rendered pages 1, 2, 3, 6)
verdict: needs-changes
---

# Review: Problem Set 11: ripplons, a two-dimensional metal, donors in a semiconductor, polarized spins and helium-3

Worktree reviewed: .claude/worktrees/ps-8044-11 (commit 60a09b1). `npm run content:check`: 0 errors (only "no review file yet"). `pytest tests/calc -k 8-044-problem-set-11`: 59 passed. Every `shown:` string of the calcs file was found verbatim in the page.

## Blind solve

Written before the full page, its calcs file or MIT's solutions were opened, from the stripped statements and MIT's sheet only.

### My answers
- 1(a): D(k) = A/(4π²) = LxLy/(2π)².
- 1(b): D(ε) = A ε^{1/3} / (3π b^{4/3}) (from N(ε) = A ε^{4/3}/(4π b^{4/3})); rises as ε^{1/3}, vertical tangent at 0.
- 1(c): C_A = kB · A (kB T)^{4/3} I / (3π b^{4/3}); power of T = 4/3 ≈ 1.333; I = Γ(10/3) ζ(7/3) = 3.9315.
- 1(d): No gap behaviour: D(ε) > 0 down to ε = 0, C_A is a power law, no exp(−Δ/kT).
- 2(a): k_x = 2π n_x/L, k_y = 2π n_y/L, n integers including 0; spacing 2π/L.
- 2(b): D(k) = L²/(4π²) = A/(4π²).
- 2(c): with spin: D(ε) = 4Aε/(π²γ²) (ε ≥ 0); without spin 2Aε/(π²γ²). Linear from 0.
- 2(d): εF = πγ √(N/(2A)).
- 2(e): U = (2/3) N εF.
- 2(f): C ∝ T (linear), since D(εF) finite and nonzero.
- 2(g): S = (∂U/∂A)_N = −N εF/(3A) (spreading pressure +NεF/(3A) = U/(2A)).
- 3(a): α = (V/2π²)(2m_e kB T/ħ²)^{3/2} (√π/2) = 2V (m_e kB T/(2πħ²))^{3/2}.
- 3(b): μ = 0 (at donor level), N_C = N_D/2, equation (α(T)/N_D) e^{−Δ/kT} = 1/2. Value 1/2.
- 3(c): μ = Δ/2 + (kB T/2) ln(N_D/α(T)) → Δ/2.
- 3(d): at a = 2: N_C/N_D = √3 − 1 = 0.7321. Low T: N_C ≈ √(α N_D) e^{−Δ/(2kB T)}. Limits 0 and 1.
- 4(a): D_+(ε) = (V/4π²)(2m/ħ²)^{3/2} (ε + μ0H)^{1/2} for ε > −μ0H; D_− the same with (ε − μ0H), ε > μ0H.
- 4(b): H0 = ħ²(6π² n)^{2/3}/(4 m |μ0|) = 3.798 ħ² n^{2/3}/(m|μ0|).
- 4(c): Cu: H0 = 9.63×10⁸ G = 9.63×10⁴ T → 9.63 (units 10⁴ T); about 963 × 100 T.
- 4(d): He-3: H0 = 5.06×10⁷ G = 5.06×10³ T → 5.06 (units 10³ T); about 51 × 100 T.
- 5(a): εF = W: n3 = (2m* W)^{3/2}/(3π² ħ³).
- 5(b): n3 = 1.068×10²¹ cm⁻³; x_C = 5.07 % (n3/n4 = 5.34 %).
- 6(a): 0. 6(b): N kB ln 2. 6(c): 0. 6(d): −kB ln 2 / v0. 6(e): 0.
- 6(f): Some liquid solidifies (solid has the higher entropy; absorbing heat at coexistence converts liquid to solid: Pomeranchuk).

### Comparison (one line per answer id)
- p1-dk: A/(2π)² = mine. Agree.
- p1-de: A ε^{1/3}/(3π b^{4/3}) = mine. Agree.
- p1-c: A kB (kB T)^{4/3} I/(3π b^{4/3}) = mine. Agree.
- p1-power: 1.333 = 4/3. Agree.
- p1-int: 3.93; mine Γ(10/3)ζ(7/3) = 3.9315 (scipy quad gives the same). Agree.
- p1-gap: choice 1 ("no: modes as close to zero as one likes"). Agree.
- p2-spacing: 2π/L. Agree.
- p2-dk: L²/(2π)². Agree.
- p2-de: 4L²ε/(π²γ²) = 4Aε/(π²γ²). Agree.
- p2-ef: πγ√(N/2)/L = πγ√(N/(2A)). Agree.
- p2-u: 2NεF/3. Agree.
- p2-heat: choice 2 (linear in T). Agree.
- p2-s: −NεF/(3A). Agree.
- p3-alpha: (V/4)(2 m_e kB T/(πħ²))^{3/2}; mine 2V(m_e kB T/2πħ²)^{3/2}: both are 2^{−1/2}π^{−3/2} V (m kT/ħ²)^{3/2}. Agree.
- p3-where: choice 0 (μ at the donor energy). Agree.
- p3-half: 0.5. Agree.
- p3-mu: Δ/2 + (kB T/2) ln(N_D/α). Agree.
- p3-x2: 0.732 = √3 − 1. Agree.
- p3-low: √(α N_D) e^{−Δ/2kBT}. Agree.
- p4-dplus: (V/4π²)(2m/ħ²)^{3/2}√(ε + μ0H). Agree.
- p4-h0: ħ²(6π²N/V)^{2/3}/(4mμ0). Agree.
- p4-cu: 9.63 (×10⁴ T); mine 9.632. Agree.
- p4-he: 5.06 (×10³ T); mine 5.063. Agree.
- p5-n: (2m*W/ħ²)^{3/2}/(3π²). Agree.
- p5-n21: 1.07; mine 1.068. Agree.
- p5-xc: 5.07 %; mine 5.069 %. Agree.
- p6-liquid: choice 2 (zero). Agree.
- p6-solid: N kB ln 2. Agree.
- p6-solid1: choice 0 (zero). Agree.
- p6-slope: −kB ln 2/v0. Agree.
- p6-slope1: choice 1 (zero). Agree.
- p6-heat: choice 2 (liquid solidifies). Agree.

No disagreement between my blind answers, the page and MIT's solutions.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 4(d), step "Check the result" (page lines 1071 to 1072) | (not in MIT) | The inline formula reads `$\hbar^2\left(6\pi^2n`, then a line break, then `ight)^{2/3}/2m$`: the backslash-r of `\right` was turned into a line break when the file was written. The formula has `\left(` with no `\right)` and a stray "ight" (KaTeX parse error, broken read-aloud). `content:check` does not catch it. | Restore it on one line: `$\hbar^2\left(6\pi^2n\right)^{2/3}/2m$`. (A scan of the mdx and the calcs file for other control characters, or for line starts such as "ac", "abla", "imes", found no other case.) |
| 2 | warning | Problem 3(c), step "Check the result", the remark of ours | (MIT has no remark) | "at the lowest temperatures α is smaller than N_D, so … μ first rises a little above Δ/2. It falls once α(T) has grown past N_D." But μ − Δ/2 = (kBT/2) ln(N_D/α) with α ∝ T^{3/2} has its maximum where ln(N_D/α) = 3/2, that is at α = e^{−3/2} N_D ≈ 0.22 N_D. So μ starts to fall well before α reaches N_D; at α = N_D it only crosses back through Δ/2. | "…μ first rises a little above Δ/2. It turns down once α(T) reaches about 0.22 N_D (where ln(N_D/α) = 3/2), and falls below Δ/2 once α(T) has grown past N_D." Add a calcs entry for e^{−1.5} = 0.22 if the number is shown. |
| 3 | warning | Problem 4(c), formula "Polarizing field for the electrons in copper" and the sentence before it | MIT: constant 4.22 × 10⁻⁵⁴, result 9.6 × 10⁸ gauss | The chain uses the rounded constant 4.22 × 10⁻⁵⁴ and ends at 9.63 × 10⁸ gauss. With 4.22 exactly the chain gives 9.622 × 10⁸ (rounds to 9.62); 9.63 needs the unrounded 4.224 × 10⁻⁵⁴ (with ħ = 1.0546e-27: 4.2242). The helium chain (5.06) is fine either way. | Write the constant as 4.224 × 10⁻⁵⁴ in the sentence ("… = 4.224 × 10⁻⁵⁴ in these units (MIT's solutions p. 8 round it to 4.22)") and in both formulas, and change `p4-coefficient` to expect 4.224 with the new `shown:` text. |
| 4 | info | Problem 3, intro, the "valance band" bracket | Sheet p. 3: electrons are "first … promoted from impurity states into the valance band and then … from the valance band to the conduction band" | "(MIT's sheet says "valance band" for the first of these two steps as well: a slip in print.)" Correct (checked on the PDF), but terse: a reader may think the slip is only the spelling. | Optional: "(For the first step MIT's sheet says the electrons go "into the valance band"; the conduction band is meant.)" |
| 5 | info | Problem 3(d), remark of ours on the high-temperature limit | Sheet p. 5: lim over kBT ≫ Δ; solutions p. 6: "T → ∞" | "MIT writes the second limit as kBT ≫ Δ" | Correct of the sheet; say "MIT's sheet writes …", since the solutions write T → ∞. |
| 6 | info | Problem 3(a), statement | Sheet: α has "magnitude comparable to the number of donors" | Left out | Optional: keep MIT's remark; it also prepares the remark about α against N_D in 3(c). |
| 7 | info | Problem 4(c), statement | Sheet gives no value of ħ | "Use ħ = 1.0546 × 10⁻²⁷ erg s." not marked as ours | Optional: "(our value; MIT's sheet does not give ħ)". |
| 8 | info | Problem 2(f) solution; Problem 5(a) step "The limit" | Solutions p. 3 and p. 8 | Close paraphrases of MIT's one-sentence arguments, in the same clause order ("disturbs only a fraction … gives each … of the order of kBT … proportional to T² …"; "better off in the pure helium-3, where its kinetic energy can start from zero") | Acceptable for a standard argument; optionally reword further. |

## Arithmetic and answer checks
- Recomputed independently (scipy/numpy, scratch files rv11/blind.py and rv11/num.py): I = 3.9315 (= Γ(10/3)ζ(7/3)); second integral 1.685, and 7/3 × 1.685 = 3.93; √3 − 1 = 0.7321; ħ²(6π²)^{2/3}/4 = 4.2242e-54; Cu H0 = 9.632e8 G; He-3 H0 = 5.063e7 G; ratios 5499, 1.64e4, 862, 19.0, 963 and 50.6 (page: 5500, 16000, 860, 19, 960, 51); n3 = 1.068e21 cm⁻³; x_C = 5.069 %; plot example kBT/Δ = 0.1944 at a = 1/2 (page 0.194); 2^{2/3} = 1.587.
- Formula boxes: every `expr` equals the solution's result; the `vars` ranges keep every expression finite and real (p4-dplus: ε > μ0H over the ranges, so the listed ε − μ0H mistake is real too). Every listed mistake differs from the answer over the ranges, and each hint is true of its wrong formula (checked one by one: e.g. p1-de 2× is two polarizations; p2-de L²ε/(πγ²) is the circular contour; p3-alpha V/8 is one spin; p4-h0 3π² is the unpolarized count; p5-n 6π² is one atom per wavevector; p1-c 7/9 is the other form).
- Number boxes: tolerances 1 to 2 % (p1-power, p1-int, p3-half, p3-x2, p4-cu, p4-he, p5-n21); p4-cu at 1.5 % accepts MIT's 9.6. p5-xc at 6 % accepts MIT's 5 % and also n3/n4 = 5.34 %; acceptable for an estimate, and stated on the page.
- Choice boxes: right answer at positions 1, 2, 0, 2, 0, 1, 2 (varied); in no box is it the longest string; no backslash TeX; none answerable from units alone.
- p6-solid: the mistake kB ln 2 equals the answer at N = 1, the lower end of N's range; harmless with sampling over the range, but N: [2, 10] would be cleaner (info, not counted).
- Points: 15 + 20 + 25 + 15 + 10 + 15 = 100, and the parts of each problem add up to its total.
- Hints: none gives a result away (3(d) hint 2 gives the count equation, but the quadratic is in the statement itself).
- Solutions end with a check, a "Mark yourself" step or a short argument; the one-line parts 2(a), 2(b) need none.

## Coverage and order
- All six MIT problems and every part, in MIT's order (1a–d, 2a–g, 3a–d, 4a–d, 5a–b, 6a–f). Problem 6 puts the region-I paragraph and the slope formula before part (a); MIT places them after (b) and (c). Harmless.
- Our additions are each marked: the boxes in 1(c), 3(b) ("MIT asks for the equation only"), 3(d) and 5(b), the three plots, and the remarks in 3(c), 3(d), 6(e), 6(f).
- Citations: every `at=` checked against the printed page numbers of both PDFs. Solutions: p. 1 = 1a–c; p. 2 = 1c second form, 1d, 2a–c; p. 3 = 2c sketch, 2d–g; p. 4 = 3a–b; p. 5 = 3c; p. 6 = 3d; p. 7 = 4a–b; p. 8 = end of 4b, 4c–d, 5a; p. 9 = 5b, 6. Sheet: P1 p. 1; P2 p. 2; P3 pp. 3–5 (DOS on p. 4, quadratic on p. 5); P4 p. 5; P5 p. 6; P6 pp. 7–8 (slope formula on p. 8). All correct.
- `covers: [18, 19, 21]`: right. Problems 2–5 use the density of states and Fermi gas of Lecture 19 (free-fermi-gas, which has the intrinsic semiconductor) and the occupation numbers of Lecture 18; Problem 1 uses phonons (Lecture 21, zero-point-energy-fluctuations), and Problem 6 is the Pomeranchuk question of Lecture 21's last slide. Lecture 20 (white dwarfs) is not needed. Lectures 15 and 16 are linked in the intro as background.
- The writer's dispersion ε = γ max(|kx|, |ky|) matches the sheet's drawings (inverted square pyramid; square contour with sides parallel to the axes) and MIT's 2(c) solution (square of side 2ε/γ). The sheet writes ε(kx) = γkx; the page's γ|kx| is the same along the positive axis and right on the negative one.

## MIT slips the page notes (each checked on the rendered PDF)
- 1(b) stray m in the middle expression of D(ε) (solutions p. 1): confirmed.
- 1(c) +½ inside the temperature derivative (solutions p. 1): confirmed.
- 2(a) integers listed as ±1, ±2, … without 0 (solutions p. 2): confirmed.
- 2(d) N = #(εF) = 8L²/(2π)² (ε/γ) without the square (solutions p. 3): confirmed.
- "valance band" for the first step (sheet p. 3): confirmed (see row 4 for the wording).
- Writer's question on the cgs constant: MIT's 4.22 is correct to three figures (4.2242); see row 3 for the rounding in the chain.

## Licensing
- No rights notices in either PDF. No MIT figure reproduced: the ripplon curve, pyramid and contour, DOS sketches, helium phase diagrams and potential step are described in words, and the descriptions match the rendered figures (P5: T axis to 0.5 K, x_C marked well below 0.2, a step W in "effective potential energy" at the phase boundary; P6: regions I, II, III, 0.3 K marked, "?" at the melting curve, 30 atm). The three graphs are generated from formulas.
- No OpenStax or LibreTexts. Statements are rewritten; two solution sentences are close paraphrases (row 8).
- No em dashes; no `## Summary` that prints answers.

## Notes
- Symbols: the 46 page-scoped meanings and 6 new entries (N_D, D_0, D_+, D_−, n_4, P_M) were compared with `main`: none of the six forms already exists, and every meaning is used on the page and correct (units of γ J·m, b J·m^{3/2}, μ0 J/T, v0 m³; α's formula matches the page). Minor: the meaning of N does not mention the generic "N/V" of Problem 5.
- G(ε) for MIT's #, and kB for k_B because k is a wavevector: both explained on the page; fine.
- The 1(c) formula box requires the I form; the statement says so ("write it with I"), and the 7/9 form is caught by a listed mistake. Fine.

COUNTS: errors=1 warnings=2 info=6

## Resolution (2026-11-26, by the page author)

- Error 1 (broken `\right` in Problem 4(d)): restored; the formula reads `\hbar^2\left(6\pi^2n\right)^{2/3}/2m` on one line. No other control characters in the page.
- Warning 2 (where μ turns down, 3(c)): the remark now says μ turns down once α(T) reaches about 0.22 N_D (where ln(N_D/α) = 3/2) and falls below Δ/2 once α(T) has grown past N_D; new calcs entry `p3-mu-turn` (e^(−3/2) = 0.22).
- Warning 3 (rounding in 4(c)): the sentence and both formulas now use the unrounded constant 4.224 × 10⁻⁵⁴, with "(MIT's solutions p. 8 round it to 4.22)"; `p4-coefficient` expects 4.224 with the new shown text.
- Info items: no change (optional).
