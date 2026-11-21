---
page: content/year-2/8.03/8-03-problem-set-2.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_problemset2/ (read: PDF text, and all four printed pages rendered as images with the figures inspected)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec2/ (read: MIT8_03SCF16_Lec2.pdf, 6 printed pages)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec3/ (read: MIT8_03SCF16_Lec3.pdf, 5 printed pages; p. 2 and p. 5 rendered)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec4/ (read: MIT8_03SCF16_Lec4.pdf, 5 printed pages)
verdict: needs-changes
---

# Review: Problem Set 2: circuits, resonance and coupled masses

The blind solve (section "Blind solve" below) was written first, from the stripped statements and MIT's sheet only. Only then were the full page and calcs/8.03/8-03-problem-set-2.yaml opened. Every final answer on the page agrees with mine. The findings are one false claim in a check, two wrong statements in the intro, one self-contradicting statement, one hint that gives the result away, one false mistake hint and one formula box that rejects the page's own printed number.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 1(c), Solution, "Check the result" | (the page's own check) | "The envelope has fallen to 1/e after 2/γ = 0.2 ms, a few oscillations of period 2π/ω = 0.42 ms." | 0.2 ms is less than half a period (0.2/0.419 = 0.48), not "a few oscillations". Replace it with: "The envelope has fallen to 1/e after 2/γ = 0.2 ms, less than half a period 2π/ω = 0.42 ms, so the ringing dies out within a few periods (to 1 % after about 0.9 ms, about two periods)." (ln 100 × 0.2 ms = 0.92 ms = 2.2 periods.) |
| 2 | warning | Intro paragraph | The sheet has four drawings: Figure 1 (P2.1), an unnumbered before/after drawing (P2.3), Figure 2 (P2.4) and Figure 3 (P2.5) | "MIT's sheet has a drawing for three of the problems" | "MIT's sheet has a drawing for four of the problems". (The page itself mentions the P2.3 drawing.) |
| 3 | warning | Intro paragraph | The sheet refers to the textbook once, in P2.5(b): "M⁻¹K as defined in the textbook". P2.2(c) has a hint about spring constants, which is not a textbook reference | "MIT's sheet refers to a textbook for two formulas. Each time, the formula it needs is restated here" | "MIT's sheet refers to a textbook once, for the matrix M⁻¹K of Problem 5; that definition is restated here." |
| 4 | warning | Problem 2(c), statement | "Assume k/M ≫ ω_d²" for the length change | "Assume k/M ≫ ω_d². What is the new spring constant k′ … (without assuming k/M ≫ ω_d²)?" | Reorder it so that it does not contradict itself: "What is the new spring constant k′ in terms of k, M and ω_d? Then, assuming k/M ≫ ω_d², how long must the new springs be compared with the old ones? Type the ratio of the new length to the old length." |
| 5 | warning | Problem 2(b), second hint | n/a | "The equation then reads (ω₀² − ω_d²)A = A₀. The amplitude is the size of A." | This gives the result away (one division, with ω₀² from part a). Replace it with: "Then ẍ = −ω_d² x. Collect the terms in A on one side." |
| 6 | warning | Problem 2(d), answer box p2-b, second listed mistake | n/a | Hint: "99 is the ratio of the squares of the two amplitudes. γω_d is its square root." | False: the ratio of the squared amplitudes is 100. The 99 is (γω_d)²/(ω₀² − ω_d²)². Fix: "The squared amplitudes differ by a factor 100, so (γω_d)² = 99 (ω₀² − ω_d²)². Take the square root: the factor is √99, not 99." |
| 7 | warning | Problem 2(d), answer box p2-b-approx | n/a | Expects `4*sqrt(99)*k/wd`; the solution prints "≈ 39.8 k/ω_d" | Formula boxes compare to a relative 1e-6 (lib/answers.ts line 202), so a reader who types `39.8*k/wd` (the page's own number) is marked wrong (39.8 is 3e-5 off 4√99 = 39.799). Add to the part statement "keep the factor exact, for example with sqrt(99)", or add `39.8*k/wd` as a listed mistake whose hint says to keep √99 exact. |
| 8 | info | Problem 5, statement | "The unstretched lengths of spring A and B equal the unstretched length C" (Figure 3 shows C spanning both A and B) | "the unstretched lengths of A and B equal that of C" | Optional: "the unstretched lengths of A and B together equal that of C", which fits Figure 3. No answer depends on it. |
| 9 | info | Problem 4(d), Formula "Frequency of the amplitude peak", cite reading2 p. 5 | Lecture 3 notes p. 5 show the amplitude plot with "max" below ω₀ for smaller Q; the formula √(ω₀² − γ²/2) itself is not in the notes | at="p. 5 (the maximum lies slightly below ω₀)" | Acceptable as worded, since the plot supports it. Could add "(the formula is our own derivation)". |
| 10 | info | Problem 4(a), Formula "Standard driven oscillator", cite reading2 p. 2 | Lecture 3 notes p. 4 have the sine-driven pendulum, ẍ + γẋ + ω₀²x = f₀ sin ω_d t | "p. 2 (… the lesson drives with a cosine, here the drive is a sine)" | Optional: cite p. 4, where the notes themselves drive with a sine. |
| 11 | info | Problem 5(d), Formula "Motion of the two masses" | n/a | at="Problem 2.5(d), p. 4 (our own solution), $t$ in seconds" | `$t$` inside an `at` string may render as literal dollar signs. Check it on the built page, or write "t in seconds" without dollars. |

## Arithmetic and answer checks
- Every answer box was recomputed independently (blind solve plus Python): p1-gamma 1.000e4, p1-omega0 15811, p1-kind underdamped, p1-omega 15000, p1-vc e^{−5000t}(5 cos − 15 sin), p2-w0sq 4k/M, p2-amp A0/|4k/M − ωd²|, p2-knew 10k − 9Mωd²/4, p2-ratio 0.1, p2-b √99(4k − Mωd²)/ωd, p2-b-approx 4√99 k/ωd, p3-f0 1.5756, p3-tau 2.0, p3-omega 9.8869, p3-a −0.1, p3-c −0.005057, p4-w0sq 2k/m, p4-f0 kΔ/m, p4-amp, p4-tan bω/(2k − mω²), p4-wmax √(2k/m − b²/2m²), p4-p, p4-q, the P5 matrix (21, −15, −5, 11.5), ω 2.5244 and 5.1115, ratios 1.0255 and −2.9255, α1 0.2596, α2 0.7404, β1 0.2531. All match.
- p4-p and p4-q were checked against a direct numerical integration of mẍ + bẋ + 2kx = kΔ sin ωt with x(0) = ẋ(0) = 0 (k = 3, m = 1.5, b = 0.4, Δ = 0.2, ω = 1.7). The analytic and numerical x(t) agree to 1e-8 at t = 0.7, 2.3 and 4.9 s.
- Listed mistakes: p1-vc "+55/3 sin" is indeed the result with i = +Q̇ (I get +18.33); the e^{−10000t} and cosine-only mistakes are as described. p2-b-approx "40k/ωd": with γωd = 10(ω₀² − ωd²) the amplitude falls by √101 = 10.05, as the hint says. The p4-wmax mistakes (ω₀, ω₁, γ² instead of γ²/2) and the p4-q mistakes (missing −γp/2, missing 1/ω₁) are correctly described. The one exception is the p2-b mistake hint (finding 6).
- `vars` ranges: every formula is finite and physical over its range (p2: 4k/M ≥ 5.3 while ωd² ≤ 1.21; p4-tan: 2k − mω² ≥ 0.72; p4-q: 2k/m − b²/4m² ≥ 0.64). The 1 % number tolerances accept 3 significant figures and reject every plausible wrong route (for example the sign of p3-c).
- Solution checks: every part ends with a check. The numbers in them were verified: R_crit = 2√(L/C) = 63.2 Ω; ω/ω₀ = 0.949 ("5 % below"); the first zero of V_C is at t = 21.4 µs, 0.051 of a period (the page's "within the first fifth of a period" is true but loose); P3 period 2π√(0.1/9.8) = 0.635 s; sine/cosine ratio 0.0506 ("5 %"); P4 A(0) = Δ/2; plot of b = 0.3 peaks at about 2.4, inside the range 3, and starts at 0.5; P5 trace 32.5 and determinant 166.5. Only the P1(c) "a few oscillations" claim is wrong (finding 1).
- calcs/8.03/8-03-problem-set-2.yaml: `pytest tests/calc -k 8-03-problem-set-2` gives 82 passed. The "a few oscillations" wording has no calcs entry.
- Points: 20 per problem, as MIT gives, and the parts add up (6+6+8, 4+5+5+6, 6+6+8, 4+3+5+3+5, 4+4+6+6).

## Coverage and order
- All five MIT problems and all their parts, in MIT's order (2.1 a–c, 2.2 a–d, 2.3 a–c, 2.4 a–e, 2.5 a–d). The additions are boxes for intermediate quantities (γ and ω₀ in P1a, the exact k′ in P2c). P4(e) asks for p and q; the solution then gives the complete motion, as MIT asks.
- `covers: [2, 3, 4]`; the three prerequisite lessons exist, with lectures 2, 3 and 4.

## Licensing
- No MIT figure is reproduced or redrawn: the situations are described in words, and the two plots are generated from the page's formulas. The sheet and the three lecture-note PDFs carry no "All rights reserved" or "Courtesy of" notice (searched in the extracted text). The statements are in the page's own wording, with no sentence copied beyond short standard phrases. No textbook (Georgi) content is used.

## Writer's flags
1. P1 current sign i = −Q̇: confirmed on the rendered Figure 1 (+ on the top plate, the top wire runs to L, and the arrow i(t) points right, toward R).
2. P5 geometry: confirmed on the rendered Figure 3 (A from the ceiling to m2, B from m2 down to m1, C from the ceiling down to m1, m1 the lower mass). The equations and the matrix agree with mine.
3. g = 9.8 m/s² in P3: not given by MIT; standard, and stated on the page. Fine.
4. P3 drag constant unchanged when the mass halves: the standard reading of MIT's "dissipation is entirely in the suspension system", stated as an assumption. Fine.
5. P4 phase convention: x_driven = A sin(ωt − δ), tan δ = γω/(ω₀² − ω²), δ in (0, π). Consistent with the sine drive and with Lecture 3 notes p. 2. Fine.
6. Lecture-note citations, each checked on the printed page: Lec 2 p. 1 (LC circuit, Q̈ + Q/LC = 0) correct; Lec 2 p. 4 (damped equation, underdamped ω = √(ω₀² − γ²/4), e^{−γt/2}(a cos + b sin)) correct; Lec 3 p. 2 (driven equation, real and imaginary parts, A(ω_d), tan δ) correct; Lec 3 p. 3 (full solution = steady state plus a decaying homogeneous part) correct; Lec 3 p. 5 (amplitude plot, maximum below ω₀) correct qualitatively (finding 9); Lec 4 p. 3 (MẌ = −KX, M⁻¹K, det(M⁻¹K − ω²I) = 0) correct. The sheet's page citations (P2.2 and P2.3 on p. 2, P2.4 on p. 3, P2.5(c)(d) on p. 4) are correct.
7. Symbol names in formula boxes: every box passes `names` (wd for ω_d, D for Δ, w for ω, A0 for A₀), and Answer.tsx prints them under the box ("Type a formula with wd (for ω_d) …"). Fine. See finding 7 for the exactness problem of p2-b-approx.

## Notes
- No em dashes, no `## Summary`, no textbook text. I did not run `npm run content:check`.
- The lecture notes write the damping rate as Γ on some pages (Lec 3 p. 5); the page uses γ, as the site's lessons do. Fine.

## Blind solve

### My answers (written before the full page was opened)
- P1a: L Q'' + R Q' + Q/C = 0 (with i = −Q'); γ = R/L = 1.000e4 s⁻¹; ω₀ = 1/√(LC) = 15811 rad/s.
- P1b: underdamped (γ/2 = 5000 < ω₀); ω = √(ω₀² − γ²/4) = 15000 rad/s.
- P1c: V_C(t) = e^{−5000t}(5 cos 15000t − 15 sin 15000t) V. (With i = +Q' the sine coefficient would be +18.33.)
- P2a: M x'' = −4k x + M A0 cos ωd t; ω₀² = 4k/M, f0 = A0.
- P2b: amplitude = A0/(4k/M − ωd²) = M A0/(4k − M ωd²).
- P2c: k' = 10k − (9/4) M ωd² ≈ 10k; length ratio ℓ'/ℓ = k/k' ≈ 0.1 (ten times shorter).
- P2d: (4k/M − ωd²)² + (b ωd/M)² = 100 (4k/M − ωd²)², so b = √99 (4k − M ωd²)/ωd ≈ 4√99 k/ωd = 39.80 k/ωd.
- P3a: k/(m/2) = g/0.1 = 98 s⁻²; f = √98/(2π) = 1.5756 Hz.
- P3b: γ = 2/(4 s) = 0.5 s⁻¹ before, γ' = b/(m/2) = 1 s⁻¹ after; decay time 2/γ' = 2.0 s.
- P3c: ω = √(98 − 0.25) = 9.8869 rad/s; a = −0.1 m; c = a γ'/(2ω) = −0.005057 m.
- P4a: m x'' + b x' + 2k x = kΔ sin ωt; ω₀² = 2k/m, f0 = kΔ/m.
- P4b: x = e^{−γt/2}(p cos ω₁t + q sin ω₁t) + A sin(ωt − δ); γ, ω₀, ω₁ depend on the oscillator only; A, δ on the oscillator and the drive; p, q on the initial conditions.
- P4c: A = kΔ/√((2k − mω²)² + b²ω²); tan δ = bω/(2k − mω²).
- P4d: ω_max = √(2k/m − b²/(2m²)).
- P4e: p = kΔbω/N; q = kΔω(b²/(2m) − 2k + mω²)/(N ω₁), with N = (2k − mω²)² + b²ω² and ω₁ = √(2k/m − b²/(4m²)). Checked against a numerical ODE solution (k = 3, m = 1.5, b = 0.4, Δ = 0.2, ω = 1.7): agree to 1e-8 at t = 0.7, 2.3, 4.9.
- P5a: m1 y1'' = −(K_B + K_C) y1 + K_B y2; m2 y2'' = K_B y1 − (K_A + K_B) y2.
- P5b: M⁻¹K = [[21, −15], [−5, 11.5]] s⁻².
- P5c: ω₁ = 2.5244 rad/s, y1/y2 = 1.0255; ω₂ = 5.1115 rad/s, y1/y2 = −2.9255.
- P5d: α1 = 0.2596 cm, α2 = 0.7404 cm, β1 = 0.2531 cm (β2 = −0.2531 cm).

### Comparison (page answer vs mine)
- p1-gamma: 10000 vs 1.000e4: agree
- p1-omega0: 15811 vs 15811: agree
- p1-kind: Underdamped vs underdamped: agree
- p1-omega: 15000 vs 15000: agree
- p1-vc: e^{−5000t}(5 cos 15000t − 15 sin 15000t) vs the same: agree
- p2-w0sq: 4k/M vs 4k/M: agree
- p2-amp: A0/|4k/M − wd²| vs A0/(4k/M − wd²): agree (equal for wd below ω₀, the range used)
- p2-knew: 10k − 9M wd²/4 vs the same: agree
- p2-ratio: 0.1 vs 0.1: agree
- p2-b: √99(4k − M wd²)/wd vs the same: agree
- p2-b-approx: 4√99 k/wd vs the same: agree
- p3-f0: 1.576 Hz vs 1.5756: agree
- p3-tau: 2.0 s vs 2.0: agree
- p3-omega: 9.887 vs 9.8869: agree
- p3-a: −0.1 m vs −0.1: agree
- p3-c: −0.005057 m vs −0.005057: agree
- p4-w0sq: 2k/m vs 2k/m: agree
- p4-f0: kD/m vs kΔ/m: agree
- p4-amp: (kD/m)/√((2k/m − w²)² + (bw/m)²) vs kΔ/√((2k − mw²)² + b²w²): agree (identical after multiplying top and bottom by m)
- p4-tan: bw/(2k − mw²) vs the same: agree
- p4-wmax: √(2k/m − b²/(2m²)) vs the same: agree
- p4-p: (kD/m)(b/m)w/S vs kΔbw/N (N = m²S): agree
- p4-q: (kD/m)w(b²/2m² − (2k/m − w²))/(S ω₁) vs kΔw(b²/2m − 2k + mw²)/(N ω₁): agree (algebraically identical; both match the ODE integration)
- p5-m11, m12, m21, m22: 21, −15, −5, 11.5 vs the same: agree
- p5-w1, p5-w2: 2.524, 5.111 vs 2.5244, 5.1115: agree
- p5-r1, p5-r2: 1.025, −2.925 vs 1.0255, −2.9255: agree
- p5-a1, p5-a2, p5-b1: 0.2596, 0.7404, 0.2531 vs the same: agree

COUNTS: errors=1 warnings=6 info=4

## Resolution (2026-11-21, by the page author)

1. Finding 1 (error): the P1(c) check now says the envelope falls to 1/e in 0.2 ms, less than half a period, and that the ringing dies out within a few periods (1% after about 0.9 ms).
2. Finding 2: the intro now says MIT's sheet has a drawing for four of the problems.
3. Finding 3: the intro now says the sheet refers to the textbook once, for M⁻¹K of Problem 5, and that the definition is restated.
4. Finding 4: the P2(c) statement is reordered: k′ first, then the length ratio under the assumption k/M ≫ ω_d².
5. Finding 5: the second hint of P2(b) is replaced by "Then ẍ = −ω_d² x. Collect the terms in A on one side."
6. Finding 6: the false hint of the p2-b mistake `99*(…)` now says the squared amplitudes differ by a factor 100, so (γω_d)² = 99(ω₀² − ω_d²)², and the factor is √99, not 99.
7. Finding 7: the P2(d) statement says "keep the factor exact, for example with sqrt(99)", and `39.8*k/wd` is a listed mistake of p2-b-approx with a hint to keep √99 exact.
8. Finding 8 (info): not changed; no answer depends on it.
9. Finding 9 (info): not changed; the notes' plot supports the wording.
10. Finding 10 (info): the P4(a) citation is now Lecture 3 notes p. 4, where the notes drive the pendulum with a sine.
11. Finding 11 (info): the dollar signs are removed from the `at` string of the P5(d) formula.

`status` is now `reviewed`.
