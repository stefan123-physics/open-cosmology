# Blind solve (written before opening the full page)

## My answers

Problem 17 (I = V0 sin(ωt − φ)/|Z|, Z = R + i(Lω − 1/(Cω)))
- 17(a): in phase iff LCω² = 1; L = 0.5 H, ω = 200 rad/s gives C = 1/(Lω²) = 5×10⁻⁵ F = 50 μF; R and V0 arbitrary.
- 17(b): Lω = 1/(Cω), i.e. ω = 1/√(LC) (R, V0 free).
- 17(c): ω = 100 rad/s; amplitude V0/R = 5 A; phase lag 0.
- 17(d): A(ω) = V0/√(R² + (Lω − 1/(Cω))²); ω_r = 1/√(LC); I_r = V0/R; phase lag φ = atan2(Lω − 1/(Cω), R) = 0 at ω_r.

Problem 18
- ζ/√(1 − ζ²) = α/n, so ζ = α/√(n² + α²) = (α/n)/√(1 + α²/n²).
- n = 10: ζ = 0.0110311 (0.011031109); α/n = 0.0110318; approximation too large by a relative 6.1×10⁻⁵ (≈ α²/(2n²)).

Problem 20
- (a) f even, so cosines; only odd n (f(t + π) = −f(t), half-wave antisymmetry); eye values near 1, 0, −1/3, 0, 1/5.
- (b) a0 = 0, aₙ = sin(nπ/2)/n: a1 = 1, a2 = 0, a3 = −1/3, a4 = 0, a5 = 1/5; bₙ = 0. f = cos t − cos 3t/3 + cos 5t/5 − …
- (c) minimizing the RMS distance one slider at a time gives the same values (orthogonality: each optimum is independent of the others). RMS distance² = π²/16 − ½Σaₙ²: with a1 = 1 only, d = 0.3418; with a1, a3, a5, d = 0.2032; all zero, d = π/4 = 0.7854.

Problem 21
- (a) 2 sin(t − π/3) = sin t − √3 cos t (a1 = −√3, b1 = 1, all others 0). [For sin(t − π/3) it would be ½ sin t − (√3/2) cos t.]
- (b) period 4π: aₙ = 0, b_k (coefficient of sin(kt/2)) = (2/(kπ))(1 − 2cos(kπ/2) + cos kπ): nonzero only for k = 2m with m odd, b_{2m} = 4/(mπ); b2 = 4/π ≈ 1.2732, b6 = 4/(3π), b10 = 4/(5π). Same series as sq(t): the 4π series of a 2π-periodic function is the 2π series.
- (c) sq(t − π/4) = (2√2/π)[(sin t − cos t) − (sin 3t + cos 3t)/3 − (sin 5t − cos 5t)/5 + (sin 7t + cos 7t)/7 + …]; a1 = −2√2/π, b1 = 2√2/π, a3 = b3 = −2√2/(3π), a5 = 2√2/(5π), b5 = −2√2/(5π). Minimal period 2π; equals 1 on (π/4, 5π/4), −1 on (−3π/4, π/4).
- (d) 1 + 2 sq(2πt) = 1 + (8/π)Σ_{n odd} sin(2πnt)/n; minimal period 1; values 3 on (0, ½), −1 on (½, 1); constant term 1, b1 = 8/π ≈ 2.546.
- (e) f(t) = (π/4) sq(t + π/2) = Σ_{n odd} sin(nπ/2) cos(nt)/n = cos t − cos 3t/3 + cos 5t/5 − …; minimal period 2π.
- (f) g′ = (4/π) f, g odd so constant 0: g(t) = (4/π)Σ_{n odd} sin(nπ/2) sin(nt)/n² = (4/π)(sin t − sin 3t/9 + sin 5t/25 − …); minimal period 2π; check g(π/2) = (4/π)(π²/8) = π/2.

(End of the blind answers. Everything below was written after opening the full page, its calcs file and MIT's solutions.)

---
page: content/year-2/18.03/18-03-problem-set-5.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps5apdf/ (read: pdftotext and rendered page images)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps5bpdf/ (read: pdftotext and rendered page images)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/mit18_03s10_ps5spdf/ (read: pdftotext and rendered page images)
  - Notes and Exercises section 7 (mit18_03s10_7ex, 7sol): not opened; only the exercise numbers were checked against the sheet
verdict: needs-changes
---

# Review: Problem Set 5: a series RLC circuit, the damping ratio and Fourier series

## Blind solve: comparison (one line per answer id)

- p17-a (choice 0, "C about 50 μF, whatever R and V₀"): agrees (C = 1/(Lω²) = 50 μF).
- p17-b-cap 1/(L·ω²): agrees.
- p17-b-num 20 μF (L = 0.2 H, ω = 500): 1/(0.2·250000) = 2×10⁻⁵ F = 20 μF, agrees.
- p17-c-omega 100, p17-c-amp 5, p17-c-lag 0: agree.
- p17-d-amp V0/√(R² + (Lω − 1/(Cω))²): agrees. p17-d-omega 1/√(LC): agrees. p17-d-ir V0/R: agrees.
- p18-zeta (α/n)/√(1 + (α/n)²): agrees (= α/√(n² + α²)).
- p18-num 0.01103 (exact 0.0110311): agrees. p18-ratio 0.999939 (0.99993916): agrees.
- p20-a-parity (even, cosines), p20-a-terms (only odd n): agree.
- p20-b-a1 1, a2 0, a3 −0.333, a5 0.2: agree.
- p20-c-rms 0.342 (√(π²/16 − ½) = 0.34183): agrees. p20-c-indep "still −1/3": agrees.
- p21-a-cos −1.732, p21-a-sin 1: agree with the sheet as printed (2 sin(t − π/3)); MIT's solution works sin(t − π/3) and so would give −0.866 and 0.5. The page follows the sheet, which is right.
- p21-b-b1 0, b2 1.273, b4 0, b6 0.424, relation (same series): agree (numerical integration also gives 1.27324 and 0.42441).
- p21-c-cos1 −0.900, sin3 −0.300, cos5 0.180, period 2π: agree.
- p21-d-const 1, sin 2.546, period 1: agree (the sheet reads 1 + 2 sq(2πt): checked on the rendered PDF, the π is lost in pdftotext).
- p21-e-shift (π/4) sq(t + π/2), cos3 −0.333: agree.
- p21-f-sin1 1.273, sin3 −0.141, period 2π: agree.

No disagreement between my answers, the page's answers and MIT's solutions (apart from MIT's 21(a), where MIT drops the factor 2 of its own sheet).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 21(e), solution step "Turn the shifted sines into cosines", bracket after the formula | MIT's solution (p. 2, rendered PDF) prints the identity correctly: sin(θ + 3π/2) = −cos θ. The pdftotext output "sin( + 23 )" is 3π/2 with the π lost, not 3π/4 | "(MIT's solution prints the second identity with 3π/4, a misprint for 3π/2, and ends its series with a plus sign before the dots; the signs alternate.)": a slip is attributed to MIT that is not in MIT's PDF | Replace the bracket with: "(MIT's solution ends its series with $+ \cdots$; the signs go on alternating, so the next term is $-\frac{1}{7}\cos 7t$.)", or drop it |
| 2 | warning | Problem 21(c), (d), (f): captions of the three solution graphs | MIT has no graphs here (it asks for sketches) | Captions say "computed from the formula above" but, unlike the three slider graphs, do not say they are our own | Append " Our own graph." to each of the three captions |
| 3 | info | Problem 17(b) and (d) slip notes | MIT prints "L z̈ + I ż", omits V₀ in z_p, and prints "C/ω = Lω" | Page flags all three | Verified on the rendered PDF: correct as stated |
| 4 | info | Problem 21(a) bracket | Sheet: 2 sin(t − π/3); solution: sin(t − π/3) | Page answers for the sheet and notes MIT's slip | Verified: correct |
| 5 | info | Problem 21, formula "Fourier series of the square wave", cite="solutions" at "Problem 21(c), p. 2" | MIT's 21(c) shows only the shifted series; the unshifted series is not printed as such (the sheet says it was computed "in class") | Cited to MIT 21(c) | Acceptable (21(c) starts from it term by term) |

## Arithmetic and answer checks
- Every number recomputed in Python: α = 0.1103178; ζ(10) = 0.011031109; ratio 0.99993916; 6.08 parts in 100 000; 2π·10·0.0110311/√(1 − ζ²) = 0.693147 (ln 2); 1 − 1/3 + 1/5 = 0.8667; D(a₁ = 1) = 0.34183; D(odd terms to n = 11) = 0.144172 (MIT's Mathlet shows 0.14420); A(90) = 4.892, A(110) = 4.911; 2√2/π = 0.90032, /3 = 0.30011, /5 = 0.18006; 4/(3π) = 0.42441; 4/(9π) = 0.14147; 8/π = 2.5465. All match the page.
- MIT's Mathlet slider values in 20(c) (1.000, −0.330, 0.200, −0.145, 0.112, −0.090; distance 0.14420) checked on the rendered solutions PDF: match.
- Part I 17 answer (corrected): x = t² − 2 − ⅓cos(2t − 1) satisfies ẍ + x = t² + cos(2t − 1); the page's advice "use the corrected one" is right.
- Formula boxes (checker tolerance 1e-6 relative, lib/answers.ts): p17-d-omega's "practical resonance" mistake differs from the answer by a relative R²C/(4L) ≥ 1.25×10⁻⁵ over the vars ranges, so it is always rejected; p18-zeta's α/n mistake differs by ≥ 6×10⁻⁵ over n ∈ [1, 10]. All vars ranges keep the formulas finite and physical. Each mistake hint is true of its formula (V₀/|p(iω)| lacks a factor ω; |a + ib| ≠ |a| + |b|; the + sign ignores (iω)² = −ω²; 1/(LC) = ω_r²; √(LC) is a time; practical resonance of m ẍ + b ẋ + kx = F with m→L, b→R, k→1/C is √(1/(LC) − R²/(2L²)); for ζ, the 1 − (α/n)² form is larger than α/n, the αn form grows with n).
- The α range [0.1103178, 0.1103178001] pins α to the constant (it is a fixed number, not a parameter); typing ln(2)/(2*pi*n) differs from alpha/n by 7×10⁻¹⁰ relative and is accepted. Works as intended.
- Info: p18-num (0.01103 ± 0.00001) also accepts the approximation α/n = 0.0110318; the ratio box p18-ratio (± 0.000002) is the one that separates them, so the set still tests the difference.
- Number tolerances are about 1–2% or tighter and reject the listed slips (p17-b-num 20 ± 0.2; p21-a-cos ± 0.003 rejects MIT's −0.866).
- Every solution ends with a "Check the result" step (units, limits or a value).
- No hint gives a result away. Info: Problem 17(b) hint 2 writes out z_p and asks what kind of number p(iω) must be: strong, but it leaves the condition to the reader.

## Coverage and order
- Part II Problems 17(a–d), 18, 20(a–c), 21(a–f): all present, in MIT's order, with MIT's points (4/10/4/10, 12, 2/8/2, 4/8/8/4/4/4; total 84). Part I listed with MIT's assignment (17: EP 2.5:8 left out as textbook, the ODE exercise noted; 18: nothing; 20: 7A-1, 7A-2a; 21: 7A-2a via sq, 7A-2b by integrating); Part I points 4 + 0 + 4 + 4 = 12. Statements are in the page's own words.
- `covers: [10, 12, 13, 14, 15, 16, 17]`: these are the site lecture numbers of the seven prerequisite lessons (checked in their frontmatter); lecture 11 (Wronskian theory) is fairly left out. `lecture: 17` is the last of them.
- Claims about lessons checked: damped-oscillations uses y″ + 2py′ + ω₀²y = 0 and calls ω₁ the pseudo-frequency; inhomogeneous-equations-and-stability has L i″ + R i′ + i/C = E′(t); fourier-series-particular-solutions covers shifting and stretching.
- Info: in the Part I table, "MIT's Problem 20" / "MIT's Problem 21" means Part I items 20 and 21; a reader might confuse them with the Part II problems of the same numbers. Consider "MIT's Part I, item 20".

## Licensing
- No rights-reserved or courtesy notice in any of the three PDFs. The Mathlet screenshot in MIT's 20(c) solution is not reproduced; only its numbers are quoted (fact entry in calcs). All six graphs are `<Plot>`s generated from formulas (17a, 17c, 20a with sliders; 21c, 21d, 21f in the solutions); the plotted expressions were checked (atan2 phase and R/|Z| gain with Lω = 100 and 1/(Cω) = 5000/c for c in μF; 1/(Cω) = 10000/ω for C = 100 μF; (π/4)sign(cos t); sign(sin(t − π/4)) and its 8-term sum; 1 + 2 sign(sin 2πt); asin(sin t) for the triangle wave). See finding 2 for the "our own" label.
- No Edwards and Penney material; Notes exercises linked, not copied. No text copied verbatim beyond short standard phrases.

## Notes
- No em dashes; no `## Summary`; citation page numbers match the PDFs (first half p. 2 for Problems 17 and 18; second half p. 2 for 20(b) and 21; solutions p. 1 for 17, 18, 20(a) and the start of 20(b); p. 2 for the rest of 20(b), 20(c) and 21).
- I did not run `content:check`, `calc:test` or `test:answers`; the calcs file was read and its entries recomputed independently above.

COUNTS: errors=1 warnings=1 info=5

## Resolution (2026-11-21, by the page author)

1. Error 1: the false 21(e) note is removed (MIT's solution prints 3π/2 correctly; the 3π/4 came from pdftotext). The bracket now says only that MIT's series ends with a plus sign before the dots and that the signs go on alternating.
2. Warning 2: the captions of the three solution graphs of 21(c), 21(d) and 21(f) now end "Our own graph."
3. Info: the Part I table now says "MIT's Part I, item 20" and "item 21", so they are not confused with Part II Problems 20 and 21. The other info items need no change.

`status` is now `reviewed`.
