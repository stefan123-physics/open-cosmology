---
page: content/year-2/8.03/8-03-problem-set-10.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_problemset10/ (read: PDF text and rendered pages 1-6, Figures 1-5 and Table 1)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec12/ (read, pp. 6-8)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec18/ (read, pp. 4-7)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec20/ (read, all pages)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec21/ (read, all pages)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec22/ (read, all pages; pp. 4-5 as images)
verdict: pass-with-notes
---

# Review: Problem Set 10: interference and diffraction

## Blind solve

### My answers (written before opening the full page)
- 1(a) Reflection at a perfect conductor flips E (phase π); path difference 2L. Maximum when 2L = (m − 1/2)λ: L = (2m − 1)c/(4ν); smallest c/(4ν), step c/(2ν).
- 1(b) Minimum when 2L = mλ: L = m c/(2ν); smallest nonzero c/(2ν).
- 1(c) Extra optical path 2(n − 1)h = λ/2: h = c/(4ν(n − 1)).
- 2(a) Two slits: fringe spacing λL/d = 2.5 mm; first minimum at 1.25 mm.
- 2(b) Each of the five fringes 4I₀.
- 2(c) Three slits: first minimum at φ = 2π/3, x = λL/(3d) = 0.833 mm.
- 2(e) Principal fringes (centre, ±2.5 mm) 9I₀; secondary fringes (±1.25 mm) I₀.
- 2(f) Amplitude of top slit 1/√2: max (2 + 1/√2)²I₀ = 7.328I₀, at the central fringe and the second fringe on each side (x = 0, ±2.5 mm).
- 2(g) I/I₀ = 1 + (1 − a)² + 2(1 + a)cos φ + 4a cos²φ, a = 1/√2, φ = 2πdx/(λL). Minimum where cos φ = −(1 + a)/(4a) = −(√2 + 1)/4 = −0.6036: φ = 2.2187 rad, x = 0.8828 mm (I_min = 0.0555 I₀).
- 2(h) First side fringe (φ = π): I = a²I₀ = 0.5 I₀.
- 3(a) cos²((π/2) sin θ): θ = 0 → 1, π/3 → 0.0436, π/2 → 0, π → 1.
- 3(b) sin²((π/2) sin θ): 0, 0.9564, 1, 0.
- 3(c) (+x dipole lagging) cos²(π(1 − sin θ)/4): θ = 0 → 1/2, π/2 → 1, 3π/2 → 0. Checked by direct phasor sum.
- 4(a) One minimum-to-minimum cycle per Δ(2nd) = λ; 10 cycles: Δd = 10λ/(2n) = 2.241 μm.
- 4(b) Bright: 2nd = (m − 1/2)λ (one π flip). (m − 1/2)650 > (m + 1/2)480 ⇔ m > 3.32: m = 4 (counting from 1); m = 3 if counted from 0.
- 4(c) Tilt raises the angle in the film, cos falls, path difference falls: the bright wavelength shortens, towards blue.
- 5(a) Interference zeros at sin ψ = 0.1, 0.3, … ⇒ d = 5λ; envelope zero at 0.4 (missing order) ⇒ a = 2.5λ; b (opaque strip, Figure 4) = d − a = 2.5λ (b = 5λ if read centre to centre). Formula check: side fringe 1.770 at 0.183, fringe 0.182 at 0.595, bumps 0.040 near 0.34: matches MIT's Figure 5.
- 5(b) d = a + 2b = 7.5λ: first zero sin ψ = 1/15 = 0.0667; envelope unchanged (zeros ±0.4, ±0.8); principal fringes at 0, ±0.128, ±0.254 (heights 4, 2.78, 0.76) = 5 bright fringes between ±0.4, plus two very small bumps (0.017, at ±0.363) that a reader might also count (7).

### Comparison with the page (one line per answer id)
- p1-a-first: page c/(4ν), mine c/(4ν). Agree.
- p1-a-step: page c/(2ν), mine c/(2ν). Agree.
- p1-b: page c/(2ν), mine c/(2ν). Agree.
- p1-c: page c/(4ν(n − 1)), mine the same. Agree.
- p2-a: page 1.25 mm, mine 1.25 mm. Agree.
- p2-b: page 4, mine 4. Agree.
- p2-c: page 0.833 mm, mine 0.833 mm. Agree.
- p2-e-main: page 9, mine 9. Agree.
- p2-e-side: page 1, mine 1. Agree.
- p2-f: page 7.33 (= 9/2 + 2√2), mine 7.328. Agree.
- p2-f-which: page choice 1 (x = 0 and ±2.5 mm), mine the same. Agree.
- p2-g: page cos δ = −(1 + √2)/4, x = 0.883 mm; mine cos φ = −(1 + a)/(4a) with a = 1/√2, the same number (−0.6036), x = 0.8828 mm. Agree. The page's expansion 5/2 + (2 + √2)cos δ + √2 cos 2δ equals my 1 + (1 − a)² + 2(1 + a)cos φ + 4a cos²φ: both give 7.328 at δ = 0, 0.5 at π and 0.0555 at the minimum.
- p2-h: page 0.5, mine 0.5. Agree.
- p3-a: page cos²(π sin θ/2), mine the same. Agree.
- p3-a-60: page 0.0436, mine 0.04364. Agree.
- p3-a-set: page "1, 0, 1", mine the same. Agree.
- p3-b: page sin²(π sin θ/2), mine the same. Agree.
- p3-b-60: page 0.956, mine 0.9564. Agree.
- p3-b-set: page "0, 1, 0", mine the same. Agree.
- p3-c: page cos²(π(sin θ − 1)/4), mine cos²(π(1 − sin θ)/4): equal (cos² is even). Agree.
- p3-c-0: page 0.5, mine 0.5. Agree.
- p3-c-set: page "1 and 0", mine 1 at π/2 and 0 at 3π/2. Agree.
- p4-a: page 2.24 μm, mine 2.241 μm. Agree.
- p4-b: page 4 (counting from 1), mine 4 (3 if counted from 0). Agree.
- p4-c: page "towards blue, and back to green", mine towards blue. Agree.
- p5-a: page a = 2.5λ, mine 2.5λ. Agree.
- p5-b: page b = 2.5λ (strip), mine 2.5λ (strip, as Figure 4 draws it). Agree.
- p5-b-zero: page 0.0667, mine 1/15 = 0.0667. Agree.
- p5-b-count: page 5, mine 5 principal fringes (plus two bumps of height 0.017 that the page does not count; see I4). Agree.
- p5-b-same: page choice 1 (envelope zeros at ±0.4, ±0.8), mine the same. Agree.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| I1 | info | Problem 5 statement | "the distance between the two slits is b"; Figure 4 draws b across the opaque strip, from the inner edge of one slit to the inner edge of the other | b is the strip, d = a + b; 5(a) and 5(b) also give the centre-to-centre alternative (b = 5λ; fringes twice as close, every fourth missing) | None. The reading matches MIT's Figure 4 (checked on the rendered p. 4) and the alternative is stated. |
| I2 | info | Problem 5 graph | Figure 5 (p. 5) | Redrawn from 4 sinc²(2.5π s) cos²(5π s) | None. It matches MIT's figure: side fringe 1.770 at sin ψ = 0.183 (MIT about 1.77 at 0.18), fringe 0.182 at 0.595 (MIT about 0.18 at 0.6), bumps of 0.04 near ±0.34 and ±0.46, zeros at ±0.1, ±0.3, ±0.4, ±0.5, ±0.7, small bumps near ±0.75. MIT's central peak looks clipped near 3.9 (sampling); the page draws the true 4. |
| I3 | info | Problem 3 statement | Figure 3 draws Θ between the y axis and r; (c) "π/2 out of phase" without saying which leads | θ from +y towards +x; the dipole at +x lags | None. The reading of Figure 3 is right (x drawn to the lower left, y to the right, r between them). The lag choice is declared, and the remark that π/2 and 3π/2 swap for the other choice is correct (checked by an explicit phasor sum). |
| I4 | info | 5(b), p5-b-count and its solution | (MIT asks only for a sketch) | "five" fringes between ±0.4 | Optional: add "(two very small bumps, height 0.017 at sin ψ ≈ ±0.36 next to the missing fringe, are not counted)", as 5(a) already does for its bumps. The count 5 is right for bright fringes. |
| I5 | info | 4(b) | "At what order of interference m": MIT's counting not stated | m = 4 counting the thinnest bright film as 1; the count-from-0 answer 3 is given in the check | None. The statement fixes the counting before the box. |
| I6 | info | 5(b) statement | "the slits are widened such that the distance between the slits is doubled to 2b while keeping the slit width a the same" | "The slits are now moved apart: the distance b is doubled to 2b" | None. MIT's "widened" is a slip of wording (a stays the same); the page states the physics MIT means. |

## Arithmetic and answer checks
- All numbers recomputed in Python (scratch script outside the repo): 1.25 mm, 0.833 mm, 1.667 mm, 9, 1, 7.328, 6.25, 2.5, δ = 2.2187 rad (127.1°), 0.8828 mm, 1.617 mm, 0.0555, 0.5; 0.04364, 0.9564, 1.360, 0.433; 0.5, 1, 0 for 3(c) by an explicit two-phasor sum; 2241 nm, 448 nm, 224 nm, 3.25 μm, 3.32, 560/579/784/745 nm, 2.82, cos = 0.9387, 497 nm; 130/390/650 nm, 260 nm; Problem 5: 0.405, 1.62, 0.18, peak 1.770 at 0.1826, 7.5λ, 1/15, 0.133/0.267/0.533/0.667, envelope 2.736 and 0.684. All agree with the page to the digits shown.
- `pytest tests/calc -k "problem-set-10"`: 294 passed (includes this page's calcs file). `content:check`: 0 errors; the only warning for this page is "no review file yet".
- Answer boxes: every `expr`/`value` equals the solution's result. The `vars` ranges (c ∈ [2, 5], ν ∈ [0.5, 2], n ∈ [1.3, 1.9], θ ∈ [0.2, 1.3]) keep every formula finite and physical (n > 1 keeps c/(4ν(n − 1)) finite). Each listed mistake differs from the answer over its range (for p3-c, cos²(π(sin θ + 1)/4) differs from the answer for sin θ in (0.2, 0.96)).
- Mistake hints checked one by one; each is true of its formula (e.g. p1-a c/(8ν): extra path λ/4 plus the flip gives 3π/2, neither maximum nor minimum; p1-c c/(2ν(n − 1)): phase change 2π; p2-f "halving the field" gives 6.25; p3-b sin²(π sin θ): half of π sin θ + π is (π/2) sin θ + π/2).
- Tolerances: 1% on exact values; 2% on 0.0436; 3% on 0.0667 (rejects the 0.05 of the centre-to-centre reading); ±0.25 on a/λ and b/λ (10%, as the solution says; rejects b = 5λ); ±0.1 on the integers 4 and 5. Tight enough to reject each listed mistake, loose enough for three significant figures.
- Every solution ends with a check (units, a limit, an average, a second route or a number).
- Hints: none gives a final number or formula away.

## Coverage and order
- All five MIT problems and every part, in MIT's order: 10.1(a–c), 10.2(a–h), 10.3(a–c), 10.4(a–c), "Problem 5" (a, b), treated as 10.5 and said so. MIT's 20 points per problem kept; the split between parts is the page's own and says so (7+6+7, 2+3+2+2+3+3+3+2, 7+6+7, 7+7+6, 10+10).
- Own additions are marked as ours: 2(g) the solved position, 2(h) the small-fringe height, 5(b) the three checks; 2(g) keeps MIT's "equation only" as self-marked.
- Citations: `at=` pages of MIT's sheet match the printed footers (10.1 p. 1, 10.2 p. 2, 10.3 and 10.4 p. 3, 10.5 p. 4). Lecture notes, all verified on the PDFs: Lec 12 p. 7 (E = 0 at the conductor, reflected wave with a minus sign); Lec 18 p. 5 (a⊥ = a − (a·r̂)r̂) and p. 6 (the ŷ direction); Lec 20 p. 1 (⟨I⟩ with the A₁A₂ cos δ term), p. 2 (flip rule), p. 3 (soap-film phase, λ/n₂), p. 4 (δ = 2Nπ, d = (2N − 1)λ/4n₂, λmax = 4dn₂/(2N − 1), d → 0 destructive); Lec 21 p. 2 (δ = 2πd sin θ/λ, I = A cos²(δ/2)), p. 3 (δ = 2π/3), p. 4 (N-source sum and intensity), p. 5 (N − 2 secondary maxima); Lec 22 p. 5 (diffraction minimum nλ/D on the sketch), p. 6 (I = I₀(sin α/α)²(sin(Nδ/2)/sin(δ/2))²).

## Licensing
- MIT's sheet carries no "rights reserved" or "courtesy" notice (text grep and rendered pages); the lecture notes used have none either.
- No MIT figure is copied; Figures 1–4 are described in words. Figure 5 is redrawn as a `<Plot>` computed from the two-slit formula and credited "after MIT's Figure 5": a CC BY-NC-SA graph of a standard function, needed to pose the problem, with no third-party notice. Acceptable.
- Statements are in the page's own wording; no long verbatim passages. The Feynman remark in the Lec 22 notes is not used.
- The Plot's accessible label names only the axes, range and the curve name "pattern"; its caption lists the zeros and heights a reader reads off the graph anyway, not a or b. The values table gives the same information as the graph. The formula with 2.5 and 5 is only in the page's client data (visible by inspecting the source): acceptable.

## Notes
- The writer's decisions named by the caller were all checked and hold: b as the opaque strip (Figure 4), the redrawn Figure 5, θ from +y towards +x, the +x dipole lagging, intensities as fractions of 4I₀, m counted from 1 in 4(b), "towards blue" in 4(c) (cos θ < 1 on either slope), x from the centre of the central fringe (with the correct remark that the two-slit centre lies 0.5 mm below MIT's mark 0), own additions marked, ±0.25 tolerance in 5(a), "Problem 5" as 10.5.
- No em dashes; no `## Summary` with answers.

COUNTS: errors=0 warnings=0 info=6

## Resolution (2026-11-21, by the page author)

- No errors or warnings. Info items I1–I3 and I5–I6: no change needed.
- Info I4 (two very small bumps in 5(b) not mentioned) not taken in this pass: optional, the count of 5 is unaffected.
- Status set to `reviewed`.
