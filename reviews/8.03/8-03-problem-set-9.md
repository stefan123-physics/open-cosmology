---
page: content/year-2/8.03/8-03-problem-set-9.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_problemset9/ (read: PDF rendered and pdftotext, all 5 pages incl. Figures 1-5)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec13/ (read, p. 3)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec17/ (read, pp. 1, 5)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec18/ (read, pp. 1-7 rendered)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec19/ (read, pp. 3-8 rendered)
verdict: needs-changes
---

# Review: Problem Set 9: the ionosphere, polarizers, radiation and Brewster's angle

Blind review: the answers below were written (to a scratch file) from the stripped statements and MIT's sheet before the full page or its calcs file was opened.

## Blind solve

### My answers (written before opening the full page)
- 1(a) k = n ω/c = sqrt(ω² − ωp²)/c for ω > ωp; k = 0 at ω = ωp; asymptote k = ω/c; for ω < ωp, k is imaginary (no real k on the plot).
- 1(b) n = 1/√2; v_p = c/n = √2 c ≈ 1.414 c; v_g = dω/dk = c²k/ω = c n = c/√2 ≈ 0.707 c; v_p v_g = c².
- 1(c) k = iκ, κ = sqrt(ωp² − ω²)/c: field ∝ e^{−κz} cos ωt, does not propagate (evanescent), no energy transported on average, wave reflected; decay length 1/κ = c/sqrt(ωp² − ω²).
- 2(a) I_a = I0 cos²θA.
- 2(b) I_b = I0 cos²θA cos²(θB − θA).
- 2(d) I_c = I0 (plate absorbs nothing).
- 2(e) I_b = I0 (cos⁴θC + sin⁴θC) = I0 (1 − ½ sin²2θC) = I0 (3 + cos4θC)/4.
- 3(a) (μ = μ0, n = √κe, k = √κe ω/c, max at z = t = 0) Ex = (√3/2)E0 cos(kz − ωt), Ey = ½E0 cos(kz − ωt), Bx = −(√κe/2c)E0 cos(kz − ωt), By = (√3 √κe/2c)E0 cos(kz − ωt).
- 3(b) S = (√κe E0²/(μ0 c)) cos²(kz − ωt) ẑ; <S> = √κe E0²/(2 μ0 c).
- 3(c) ∇²E = (κe/c²) ∂²E/∂t²; K = κe/c².
- 4(a) ν = β/2π, |k| = β/c at all three. (i) k = (β/c) ẑ, circular (E turns from x toward y, same sense as the electron); (ii) k = (β/c)(x̂ + ẑ)/√2, elliptical, long axis along ŷ, short axis along (x̂ − ẑ)/√2, ratio short/long = 1/√2 ≈ 0.707; (iii) k = (β/c) x̂, linear along ŷ.
- 4(b) With E = q n̂×(n̂×a)/(4πε0c²R), q = −e, a = −αβ²(cos βt, sin βt, 0), t' = t − R/c:
  Ex = −eαβ²/(4πε0c²R) cos β(t − R/c), Ey = −eαβ²/(4πε0c²R) sin β(t − R/c),
  Bx = −Ey/c = +eαβ²/(4πε0c³R) sin β(t − R/c), By = Ex/c = −eαβ²/(4πε0c³R) cos β(t − R/c).
- 4(c) P = e²α²β⁴/(6πε0c³).
- 4(d) <S> ∝ 1 + cos²θ: ratio max/min = 2 (along ±z vs the plane of the circle).
- 5(a) Reflected: only the perpendicular part (dots). Refracted: both (lines and dots), all of E∥ and the rest of E⊥.
- 5(b) θB + θt = 90° with sin θB = n sin θt → tan θB = n_glass/n_air; θB = atan(n); n = 1.52 → 56.66°.
- 5(c) Electrons in the glass oscillate along the refracted E. The E∥ part drives oscillation in the plane of incidence perpendicular to the refracted ray, i.e. along the reflected direction; a dipole does not radiate along its axis, so no E∥ in the reflected ray. The E⊥ part drives oscillation perpendicular to the plane of incidence (parallel to the surface), which radiates into the reflected direction, so the reflected light is polarized perpendicular to the plane of incidence, i.e. parallel to the interface.

### Comparison (one line per answer id)
- p1-k: page sqrt(w^2 - wp^2)/c = mine. Agree.
- p1-vp: page 1.414 = √2. Agree.
- p1-vg: page 0.707 = 1/√2. Agree.
- p1-c: page choice 2 (no travel, exponential fall-off, reflection) = mine. Agree.
- p2-a: page I0 cos²θA = mine. Agree.
- p2-b: page I0 cos²θA cos²(θB − θA) = mine. Agree.
- p2-d: page I0 = mine. Agree.
- p2-e: page I0(cos⁴θC + sin⁴θC) = mine (checked numerically with Jones vectors at θC = 0.3: 0.840589 both). Agree.
- p3-ex: page (√3/2)E0 cos[ω(√κe z/c − t)] = mine. Agree.
- p3-ey: page ½E0 cos[...] = mine. Agree.
- p3-bx: page −(√κe/2c)E0 cos[...] = mine. Agree.
- p3-by: page (√3√κe/2c)E0 cos[...] = mine. Agree.
- p3-s: page √κe E0²/(2μ0c) = mine. Agree.
- p3-k: page κe/c² = mine. Agree.
- p4-nu: page β/2π = mine. Agree.
- p4-k: page β/c = mine. Agree.
- p4-pol1: page "Circular" = mine. Agree (sense of rotation, counter-clockwise for the astronomer looking back, also agrees).
- p4-pol2: page "Elliptical, with its long axis along ŷ" = mine. Agree.
- p4-pol3: page "Linear, along ŷ" = mine. Agree.
- p4-ratio: page 0.707 = 1/√2. Agree.
- p4-ex: page −eαβ² cos[β(t − R/c)]/(4πε0c²R) = mine. Agree.
- p4-ey: page −eαβ² sin[β(t − R/c)]/(4πε0c²R) = mine. Agree.
- p4-bx: page +eαβ² sin[β(t − R/c)]/(4πε0c³R) = mine. Agree.
- p4-by: page −eαβ² cos[β(t − R/c)]/(4πε0c³R) = mine. Agree.
- p4-p: page e²α²β⁴/(6πε0c³) = mine. Agree.
- p4-d: page 2 = mine. Agree.
- p5-refl: page "Only dots" = mine. Agree.
- p5-refr: page "Both parts, lines and dots" = mine. Agree.
- p5-b: page atan(n) = mine. Agree.
- p5-deg: page 56.7 = mine (56.659°). Agree.

No disagreement on any final answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 1(c), Solution, step "Check the result" (line 208) | (own check; not on MIT's sheet) | "It grows as the frequency falls and tends to ω_p/c for ω → 0, so in this model the field never reaches deeper than about c/ω_p." | The bound is the wrong way round: κ ≤ ω_p/c means the penetration depth 1/κ is never *shorter* than c/ω_p, and 1/κ → ∞ as ω → ω_p (the page's own step "What it means" and the sentence before say κ = 0 at ω_p). Replace the last clause by: "so the penetration depth 1/κ is never shorter than c/ω_p, and it grows without limit as ω approaches ω_p." |
| 2 | warning | Frontmatter `covers: [17, 18, 19]` | Problem 9.1(b) asks for the phase and group velocity (Lecture 13 material, notes p. 3, which the page cites as reading1) | Lecture 13 is only a prerequisite | Course rule: "Choose covers from what the problems actually use". 8 of Problem 1's 20 points rest on Lecture 13; overlapping covers are already used elsewhere (Sets 2/3 share 4, Sets 3/4 share 7 and 8; Set 7 covers 13). Suggest `covers: [13, 17, 18, 19]` so the dispersion lesson gets a "Practise" link to this set. Not wrong as it stands; author's call. |
| 3 | info | Problem 4 statement | MIT gives the path with the drift γt and asks for ν at three positions | Page neglects the Doppler shift from the drift and the electron's displacement, and says so | Fine as stated (marked as the page's choice; γ ≪ c). |
| 4 | info | Problem 3 statement | MIT gives no μ and no phase | Page states μ = μ0 and its phase choice | Fine, said openly. |
| 5 | info | Problem 2 | MIT has parts a, b, d, e (no c) | MIT's labels kept, with a note | Fine. |

## Arithmetic and answer checks
- Every final answer recomputed independently (Blind solve above); all agree.
- `calc:test` (pytest on tests/calc filtered on problem-set-9): 275 passed, 0 failed. Every calcs entry checks its result by a route different from the page (numerical roots, derivatives, time averages, Faraday's law integrated in time, sphere integral, α = β solve). Using `e` as a sample variable (overriding Euler's number) works: the entries pass with the sampled values, and the header comment says so (info).
- `npm run content:check`: 0 errors; the only warning for this page is "no review file yet".
- Solution steps checked line by line: 1(a) k = nω/c and the plot caption (vertical tangent at ω_p, approach to the vacuum line from below) correct; 1(b) v_pv_g = c² and "the curve bends towards ω = ck from above, v_g < v_p" correct; 1(c) Faraday's law gives B ∝ sin ωt, ⟨S⟩ = 0, correct (apart from finding 1); 2(b) I0/4 at 45° correct; 2(e) sign argument and the matrix check (lower-right entry sin²θ + i cos²θ, Lecture 18 notes p. 2, θ = 90° − θC) correct; 3(a) Faraday check correct, B at 120° correct; 3(b) energy density × c/√κe check correct; 3(c) k² = κeω²/c² correct; 4(a) a⊥ at (ii) and a⊥·r̂ = 0 correct; 4(b) unit check and E × B along +ẑ correct; 4(d) ∫(1 + cos²θ)dΩ = 16π/3 and recovery of the Larmor power correct; 5(b) sin 56.7° = 0.8354 = 1.52 sin 33.3°, θB → 45° as n → 1 correct.
- Every part's solution ends with a check (units, a limit or a number).
- Answer boxes: `vars` ranges keep every formula finite and physical (p1-k has ω > ω_p throughout; p5-b n in [1.2, 2.5]). Each listed mistake differs from the answer over the range, and each mistake hint is true of its formula (all checked, e.g. p2-e "(cos² − sin²)²" is the half-wave-plate result cos²2θC; p5-b atan(1/n) is the Brewster angle from inside the glass; p4-ex "three minus signs" gives the negative sign; p3-k 1/(κe c²) is a speed c√κe). The p4-k box lists an unused variable `ga` (harmless; info, not counted).
- No hint gives a result away outright. The second hints of 1(a) ("Put the given n into k = nω/c and take ω inside the square root") and 5(b) come close but still leave the step to the reader (not counted).

## Citations
- `at=` pages checked against the printed footers (PDF page = printed page for the sheet and all four notes): Problem 9.1 p. 1, 9.2 and 9.3 p. 2, 9.4(a)-(c) p. 3, 9.4(d) and 9.5 p. 4: correct.
- reading1 p. 3 (v_p = ω/k, v_g = dω/dk): correct. reading2 p. 1 (Snell's law, "Review"): correct. reading2 p. 5 (I = I0 cos²θ): correct. reading3 pp. 1-2 (quarter-wave plate, Δφ = π/2): correct. reading3 p. 2 (general quarter-wave matrix): correct. reading3 p. 5 (E_rad = −q a⊥(t − r/c)/(4πε0c²r), B_rad, S_rad, a⊥): correct. reading4 p. 3 (Maxwell in matter, v = c/n, S = E × B/μ, ω/k = c/√κe): correct. reading4 p. 4 (B = (1/v) k̂ × Ê): correct. reading4 pp. 6-7 (E0R = (α − β)/(α + β); α = β at Brewster; θB + θT = π/2 on p. 7): correct. reading4 p. 8 ("No Brewster's angle" for y polarization): correct.
- Claimed slips verified on the rendered notes: Lecture 19 notes p. 3 print ∇ × B = με ∂B/∂t (should be ∂E/∂t): confirmed. Lecture 18 notes p. 5, item 6, print the total power as q²|a(t − r/c)|²/(4πε0c³) (should be 6π): confirmed. Both are also noted in the lessons (em-waves-in-matter-brewster, wave-plates-radiation).

## Coverage and order
- All five MIT problems and all parts, in MIT's order; MIT's labels in Problem 2 kept (no part c) with a note. Points: MIT's 20 per problem; part splits (7/8/5, 4/5/4/7, 9/6/5, 8/5/3/4, 6/7/7) each sum to 20 and are declared as the page's own.
- Own additions are marked as ours: 1(c) evanescent-field derivation and the radio remark, 4(a) axis-ratio box, 5(b) numerical example n = 1.52, the μ = μ0 and phase choices of Problem 3, the Doppler neglect in Problem 4.
- The 1(c) evanescent-field derivation is correct (E = E0 e^{−κz} cos ωt solves ∂²E/∂z² = (n²/c²)∂²E/∂t² with n² < 0; calcs entry p1-evanescent), apart from finding 1 in its check.
- Covers: see finding 2.

## Licensing
- MIT's sheet carries no "All rights reserved" or "Courtesy of" notice (text and rendered pages checked). No MIT figure is redrawn: Figures 1-5 are described in words (descriptions match the rendered figures); the two plots are generated from formulas.
- Wording is the page's own; nothing copied from the sheet beyond standard terms. No OpenStax, LibreTexts or other forbidden source. No em dashes; no `## Summary`.

## Notes
- Claims about lessons verified: the three-polarizer demonstration (polarization-polarizers), angles measured from x in the lesson (its P_θ matrix), the charge on an ellipse seen linearly polarized from the x axis (wave-plates-radiation; Lecture 18 notes p. 7), the antenna sending nothing off its own end, the polarizer removing light reflected at Brewster's angle (em-waves-in-matter-brewster), "a phase velocity carries no information" (dispersion-phase-group-velocity), and the 4π slip explained in the lesson.
- 4(a)(i) names the sense of rotation (counter-clockwise for the astronomer, x̂ right and ŷ up) without a handedness label, which avoids a clash between the lesson's "right-handed" convention and the helicity convention. Good.

COUNTS: errors=1 warnings=1 info=3

## Resolution (2026-11-21, by the page author)

- Error 1 fixed: the check of 1(c) now says the penetration depth 1/κ is never shorter than c/ω_p and grows without limit as ω approaches ω_p.
- Warning 2 taken: `covers` is now [13, 17, 18, 19], so the dispersion lesson gets a "Practise" link to this set.
- Info items: no change needed.
- Status set to `reviewed`.
