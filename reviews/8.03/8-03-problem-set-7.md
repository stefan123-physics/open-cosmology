---
page: content/year-2/8.03/8-03-problem-set-7.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_problemset7/ (read: PDF rendered page by page, Figure 1 digitised at 200 dpi)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec13/ (read, downloaded fresh, footers checked)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec14/ (read, downloaded fresh, footers and figures on pp. 1–2 checked)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec15/ (read, downloaded fresh, footers checked)
verdict: pass-with-notes
---

# Review: Problem Set 7: water waves, a dispersion curve and a Gaussian pulse

## Blind solve

My answers (written to this file before opening the full page and calcs file):

- 1(a): equal terms g/k = Tk/ρ gives k_c = sqrt(ρg/T), λ_c = 2π sqrt(T/(ρg)). T = ρg(λ_c/2π)² = 1000·9.8·(0.02/2π)² = 0.0993 N/m.
- 1(b): tanh(kh) ≈ kh: v_p = sqrt(gh), ω = k sqrt(gh), v_g = sqrt(gh). Not dispersive.
- 1(c): tanh → 1: v_p = sqrt(g/k), ω = sqrt(gk), v_g = (1/2) sqrt(g/k). Dispersive (normal, v_g < v_p).
- 1(d): v_p = sqrt(Tk/ρ), ω = sqrt(Tk³/ρ), v_g = (3/2) sqrt(Tk/ρ). Dispersive (anomalous, v_g > v_p).
- 2(a): v_p = v_g where the line from the origin touches the curve (k ω' = ω), i.e. extrema of ω/k. Reading MIT's Figure 1 (digitised from a 200 dpi render, Savitzky-Golay slope): ω ≈ 1.5 ×10⁴ s⁻¹ (k ≈ 2.15 /m, minimum of v_p ≈ 0.71 ×10⁴ m/s) and ω ≈ 5.9 ×10⁴ s⁻¹ (k ≈ 4.3 /m, maximum of v_p ≈ 1.36 ×10⁴ m/s). From the page's redrawn formula: ω = 1.33 (k = 2.087) and ω = 6.19 (k = 4.43).
- 2(b): a pulse moves at v_g; the largest v_g is at the inflection point, ω ≈ 4 ×10⁴ s⁻¹ (k ≈ 3.5 /m), v_g ≈ 3 ×10⁴ m/s (MIT digitised 3.03 at ω 3.9; page formula 3.005 at ω 3.995).
- 2(c): ω → ω₀ means k → 0: v_g = dω/dk → 0 and v_p = ω/k → ∞. The whole medium oscillates in phase (infinite wavelength), no wave travels and no energy/signal is carried; below ω₀ waves do not propagate (cutoff, evanescent).
- 3(a): f(t) = y(0,t) = exp(−v²t²/(2σ²)), a Gaussian in t of width τ = σ/v. C(ω) = (1/2π)·τ√(2π)·exp(−ω²τ²/2) = σ/(v√(2π)) · exp(−ω²σ²/(2v²)); σ_ω = v/σ, C(0) = σ/(v√(2π)).
- 3(b): σ σ_ω = v (units m/s; the product is fixed, independent of σ).
- 3(c): Gaussians of peak 1, width 1 m and 5 m.
- 3(d): σ_ω = 1 s⁻¹ and 0.2 s⁻¹ (v = 1 m/s); C(0) = 0.399 s and 1.995 s (σ = 5 m: 5/√(2π) = 1.9947 s).
- 3(e): the wider the pulse in x, the narrower and taller C(ω); σσ_ω = v constant (the uncertainty relation; σ_k = 1/σ).

Comparison with the page (one line per answer id):

- p1-lc: page 2π√(T/(ρg)); mine identical. Agree.
- p1-tension: page 0.0993 N/m; mine 0.09929. Agree.
- p1b-vp: page √(gh); mine √(gh). Agree.
- p1b-vg: page √(gh); mine √(gh). Agree.
- p1b-disp: page choice 0 (not dispersive); mine not dispersive. Agree.
- p1c-vp: page √(g/k); mine √(g/k). Agree.
- p1c-vg: page √(g/k)/2; mine ½√(g/k). Agree.
- p1c-disp: page choice 1 (longer faster, v_g < v_p); mine the same. Agree.
- p1d-vp: page √(Tk/ρ); mine √(Tk/ρ). Agree.
- p1d-vg: page 3√(Tk/ρ)/2; mine (3/2)√(Tk/ρ). Agree.
- p1d-disp: page choice 2 (shorter faster, v_g > v_p); mine the same. Agree.
- p2-low: page 1.33 (tolerance 15%); mine 1.33 for the page's curve (k = 2.087), 1.51 from MIT's printed Figure 1. Agree for the curve the reader sees; see warning 1 for the gap to MIT's figure.
- p2-high: page 6.19 (10%); mine 6.19 for the page's curve (k = 4.432), 5.87 from MIT's figure. Agree for the page's curve; MIT's reading lies inside the box (5.57 to 6.81).
- p2-w: page 4.0 (10%); mine 3.995 (page curve), about 3.9 to 4.0 (MIT). Agree.
- p2-v: page 3.0 (10%); mine 3.005 (page curve), 3.03 (MIT digitised). Agree.
- p2-c: page choice 1 (whole medium in step, v_p → ∞, v_g = 0, nothing carried); mine the same. Agree.
- p3-c: page σ/(v√(2π)) exp(−σ²ω²/(2v²)); mine identical. Agree.
- p3-sw: page v/σ; mine v/σ. Agree.
- p3-prod: page v; mine v. Agree.
- p3-peak: page 1.995 s (1%); mine 5/√(2π) = 1.9947 s. Agree.
- p3-e: page choice 2 (wider pulse, narrower and taller spectrum, product fixed); mine the same. Agree.

No disagreement on any answer for the curve drawn on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2: graph caption ("follows MIT's printed curve") and 2(a) solution, step "Check the result" ("Read from MIT's printed figure, the answers come out close to these, within the accuracy of a ruler on a graph") | MIT's Figure 1, digitised: ω(2) ≈ 1.42, ω(2.5) ≈ 1.84, ω(4.5) ≈ 6.10, ω(5) ≈ 6.47. Its tangent-from-origin points are at ω ≈ 1.51 (k ≈ 2.15) and ω ≈ 5.87 (k ≈ 4.3) | The redrawn tanh curve keeps MIT's main features (horizontal start at 1, inflection at (3.5, 4) with slope 3.0, plateau at 7) but is point-symmetric where MIT's is not: 0.15 low at k = 2 (1.27), 0.13 low at k = 2.5 (1.71), 0.18 high at k = 4.5 (6.28), 0.25 high at k = 5 (6.72). Its tangent points are 1.33 (12% below MIT's 1.51) and 6.19 (5% above MIT's 5.87). The claim that MIT's figure gives answers "close to these, within the accuracy of a ruler" is not true for the lower one | Replace the sentence with the actual numbers, e.g. "Read from MIT's printed figure, the two points come out near 1.5 and 5.9 × 10⁴ s⁻¹: MIT's lower bend rises a little earlier and its upper bend flattens a little later than our curve, and the lower point is sensitive to that." Better still, refit the curve so its lower bend rises earlier (MIT: 1.42 at k = 2, 1.84 at k = 2.5) and its upper bend flattens later (6.10 at k = 4.5, 6.47 at k = 5), then update p2-low/p2-high, the A/B points, the line slopes and the calcs. The tolerances can stay (see below) |

## Arithmetic and answer checks
- Problem 1: every number recomputed. T = 1000·9.8·(0.02)²/(4π²) = 0.09929 N/m; √(9.8·1) = 3.13 m/s; λ = 10 m: v_p = 3.95, v_g = 1.97 m/s; tanh π = 0.9963; λ = 2 mm: v_p = 0.5585, v_g = 0.838 m/s, gravity/tension ratio 0.01; smallest v_p = √(gλ_c/π) = 0.2498 m/s; graph point 24.98 cm/s. Series √(gh)[1 − (kh)²/6] correct (tanh u ≈ u − u³/3). The 1(d) graph formulas are v_p and dω/dk of ω = √(gk + (T/ρ)k³) with k = 200π/L (L in cm): correct; both curves stay inside 0–80 cm/s (largest about 68 cm/s at L = 0.3 cm).
- Problem 2 on the page's curve: tangent points k = 2.0873, ω = 1.3256, slope 0.6351 and k = 4.4319, ω = 6.1930, slope 1.3974; steepest point k = 3.5, ω = 3.9945, slope 3.0055; steepest tangent through (3, 2.49) and (4, 5.50); v_p = 4/3.5 = 1.14. All as printed. "Touches the lower bend from below, the upper from above" correct (convex, then concave).
- Problem 2 box tolerances (writer's decision): fair. A reader of the page's curve is well inside each box, and MIT's figure readings (1.51, 5.87, about 3.9, 3.03) fall inside too (1.51 only just: the low box ends at 1.53). The likely wrong answers are rejected: ω₀ = 1.0 or the inflection 4.0 for p2-low (box 1.13 to 1.53); the plateau 7 or the inflection 4 for p2-high (5.57 to 6.81); k = 3.5 or v_p = 1.14 for p2-w/p2-v (3.6 to 4.4, 2.7 to 3.3); a chord slope over k = 2.5 to 4.5 (2.29) for p2-v.
- Problem 3: completing the square checked; C(ω) confirmed by numerical integration; area under C = f(0) = 1; peaks 0.399 s and 1.995 s; widths 1 and 0.2 s⁻¹; e^(−1/2) = 0.607, e^(−9/2) = 0.0111; Δt Δω = ½ for the Gaussian and 1/√2 for e^(−Γ|t|) (Δt = τ/√2, Δω = 1/τ) checked by hand.
- Mistake hints: each checked against its formula (unit statements for p1-lc, p1b-vp, p1d-vp; "width σ/v" for the inverted p3-c exponent; "width of C²" = v/(σ√2) for p3-sw; v/2 from the squared widths for p3-prod). All true. No hint gives a result away.
- Every solution ends with a check step (units, a limit, a number or an area).
- `npm run content:check`: 0 errors; the only warning for this page is "no review file yet". `pytest tests/calc/test_calculations.py -k "problem-set-7 and 8.03"`: 123 passed.

## Coverage and order
- All three MIT problems and all parts (7.1 a–d, 7.2 a–c, 7.3 a–e) are present, in MIT's order. Points 40/30/30 as printed; the split between parts is stated as the site's own.
- Writer's decisions checked: g = 9.8 m/s² (stated as ours); "comparable" taken as "terms equal" (standard, and the page says the answer is only as sharp as the word); C(ω) as the time transform of the motion at x = 0, which MIT's part (d) ("C(ω) at x = 0") supports, giving σσ_ω = v with its unit explained; v = 1 m/s for 3(d) stated as ours.
- Citations: Lecture 14 notes p. 1 (v_p, v_g), pp. 2–3 (f(t) on p. 2, C(ω) derived on p. 3), pp. 4–5 (expansion of ω(k)), pp. 1–2 (ionic crystal: the figure on p. 1 starts at ω_b at k = 0, and p. 2 says radiation below ω_b is totally reflected); Lecture 13 notes p. 1 (ω/k = √(T/ρ_L)) and p. 3 (v_p, v_g); Lecture 15 notes pp. 1–2 (two-sided exponential; the Gaussian is announced "in your pset" on p. 2), p. 2 (spreads), p. 4 (Δt Δω ≥ ½). All match the printed footers. MIT sheet p. 1 (7.1), p. 2 (7.2, the 7.3 formula, 7.3(a)), p. 3 (7.3(c)–(d)): correct.

## Licensing
- The sheet has no "rights reserved" or "Courtesy of" notice (CC BY-NC-SA). No text copied: statements are rewritten.
- Feynman is paraphrased, not quoted ("worst possible example" does not appear). Georgi is not named or used; the transform is taken from the Lecture 14 notes.
- info: Figure 1 is redrawn from a formula of the site's own, credited "after MIT's Figure 1": an adaptation of CC BY-NC-SA material, allowed with credit, and the problem cannot be posed without it.

## Notes
- info: The Feynman remark "that the lecture also recalled" is supported by the reviewed lesson dispersion-phase-group-velocity, which cites the Lecture 13 transcript p. 18; I did not reread that transcript.
- info: 1(a): MIT's 2 cm gives T = 0.099 N/m, while the measured surface tension of water at 20 °C is about 0.073 N/m (the deep-water minimum of v_p is then near 1.7 cm). The page already says the answer is only as sharp as the question; a bracketed sentence naming the measured value would help readers who know it.
- info: p3-prod lists the mistakes "1" and "1/2", which equal the answer v at v = 1 and v = 0.5, both inside its vars range [0.5, 3]. The checker compares at several points, so this does no harm, but a range such as [1.5, 4] keeps every listed mistake away from the answer everywhere.

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-21, by the page author)

- Warning 1 (Problem 2 curve): took the better fix. The curve is refitted to the points read from MIT's printed figure. It is now a sum of two steps of different widths, ω = 7 − 6[0.4 E(k; 0.6) + 0.6 E(k; 1.7)] with E(k; w) = [tanh((k + 3.5)/w) − tanh((k − 3.5)/w)]/(2 tanh(3.5/w)), still exactly 1 with zero slope at k = 0, rising monotonically with one inflection at k = 3.5 and tending to 7. It gives 1.45 at k = 2 (MIT 1.42), 1.84 at 2.5 (1.84), 6.04 at 4.5 (6.10) and 6.44 at 5 (6.47); four new calcs entries hold it to these points within 0.07. Everything that depends on the curve was recomputed: the boxes are now p2-low 1.56 (15%: 1.33 to 1.79), p2-high 5.82 (10%: 5.24 to 6.40), p2-w 3.94 (10%: 3.55 to 4.33) and p2-v 3.09 (10%: 2.78 to 3.40), so the readings of MIT's figure (1.51, 5.87, about 3.9, 3.03) lie well inside each box. The points A (2.175, 1.561) and B (4.311, 5.815), the line slopes 0.72 and 1.35, the steepest tangent through (3, 2.4) and (4, 5.5) with slope 3.1, the printed formula, the solution text and every Problem 2 calcs entry were updated. The sentence about MIT's figure now gives the numbers (near 1.5 and 5.9, inside both boxes). The wrong answers the review lists are still rejected: 1.0 and 4.0 for p2-low; 7 and 4 for p2-high; k = 3.5 for p2-w; v_p = 1.13 and the chord slope 2.29 for p2-v.
- Info (surface tension): a bracketed sentence in the check of 1(a) says that the value in tables is about three quarters of MIT's 0.099 N/m, so the two terms are equal at a slightly shorter wavelength than 2 cm. No number is quoted, because no source on the allowed list (AGENTS.md, Writing rules 11) was looked up for it.
- Info (p3-prod): the `vars` range is now v in [1.5, 4], so the listed mistakes 1 and 1/2 never equal the answer.
- Info (Figure 1 redrawn, Feynman remark): no change needed.
- Checks after the changes: content:check 0 errors, calc:test for this page passed (128), test:answers passed. Status set to reviewed.
