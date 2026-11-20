---
page: content/year-1/8.01/resistive-forces.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-4-drag-forces-constraints-and-continuous-systems/14-1-intro-to-resistive-forces/ (read; lesson has three segments, 14.1 to 14.3)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read; Section 8.6, Tables 8.1 and 8.2, Examples 8.5 and 8.6, printed pp. 8-27 to 8-32; Table 8.1 checked with pdftotext -table because the -layout extraction is garbled; some Greek letters in Example 8.6 are lost in extraction)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/29a20872bc807dde46b666b0ce66c3af_30Ww1HsRblM.pdf (14.1 transcript, read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/9dd5a1f218a0de6e37f3a43813d6545b_JTePtoM_MeM.pdf (14.2 transcript, read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/59d1a40fe045f1c14f9e020360ee0fe7_flwYlUfw4WU.pdf (14.3 transcript, read)
  - content/year-4/8.286/false-vacuum.mdx (site page for 8.286 Lecture 23, read for the cosmology callout and leadsTo)
  - calcs/8.01/resistive-forces.yaml (read; pytest -k resistive: 17 passed)
  - data/symbols.json (meanings that apply to this page, read)
verdict: needs-changes
---

# Review: Resistive forces: drag and terminal velocity

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Heavier falls faster" paragraph, `$\rho_m$` (symbol popup / "Symbols on this page") | Notes p. 8-31: ρ_m is the density of the marble | No meaning of `\rho_m` is scoped to this page, so the general meaning applies: "The mass density of matter (dark matter and baryons)". Readers are shown a wrong definition | Add a meaning to `rho-m` in data/symbols.json with `pages: [resistive-forces]`: "The density of the material of the marble (sphere)", unit kg/m³ |
| 2 | warning | Bracket after "Terminal velocity with quadratic drag" | 14.3 transcript p. 4 has Dourmashkin **say** "the quantity mg over beta"; p. 5 gives the square root. What was written on the light board cannot be checked from the transcript (videos are not compared) | "On the board this is first written $mg/\beta$" | Say what the source shows: "[The transcript first says 'mg over beta' (p. 4); the square root, found again ... on p. 5, is correct.]" |
| 3 | warning | Cosmology callout and `leadsTo` 8.286 Lecture 23 | The site's page for Lecture 23 (false-vacuum.mdx) describes new inflation as a slow roll off a flat plateau, but nowhere mentions a friction term from the expansion; Guth's Lecture 23 (as summarised there) does not derive the field equation | Callout: expansion "acts on it like a drag force (often called Hubble friction)"; leadsTo why: "held back by a friction-like term from the expansion" | The physics is correct (the $3H\dot\phi$ term in the field equation; slow-roll $\dot\phi \approx -V'/(3H)$, the analogue of $mg/\alpha$). But the linked lecture does not teach it. Mark it as standard inflation theory, not Guth's Lecture 23, e.g. "Standard treatments of inflation (not derived in 8.286) show ..." and reword the leadsTo `why` so it does not imply the lecture covers the friction term |
| 4 | info | Callout | Slow-roll friction is proportional to $\dot\phi$ | The analogy is placed after the $v^2$ section | Optionally say it is the **linear** drag case: terminal speed "push / friction coefficient", like $mg/\alpha$ |
| 5 | info | "After pulling out g, substitute u ... into ∫du/(1 − u²) (p. 2)" | 14.3 p. 2 introduces the substitution; the integral $\int du/(1-u^2)$ is written on p. 3 | (p. 2) | "(pp. 2–3)" |
| 6 | info | Table 8.1 sentence: "1.05 for a cube facing the flow" | Table 8.1 (p. 8-27, checked with -table extraction): Sphere 0.47, Half-sphere 0.42, Cone 0.50, Cube 1.05, Angled cube 0.80, Long cylinder 0.82, Short cylinder 1.15, Streamlined body 0.04, Streamlined half-body 0.09; Reynolds number of order 10⁴ | 0.47 sphere, 1.05 cube "facing the flow" | Values correct. "Facing the flow" is the page's gloss to contrast with "Angled cube"; acceptable. Note that streamlined bodies (0.04) are far below 1, which the page covers with "for ordinary shapes", but the C_D flashcard and symbol meaning say "of order 1" without qualification (14.1 p. 2 says the same, so this is minor) |
| 7 | info | Notes Example 8.5 / 8.6 notation | Notes Example 8.5 uses a rate constant (6πηR/m, units s⁻¹) and Example 8.6 sets a coefficient (½)C_DρA (Greek letters lost in extraction; exact symbol uncertain) | Page uses α = 6πηR (kg/s), the transcript's convention, and β = ½C_DρA | Fine; the page follows the transcripts. No change needed |

All other formula citations checked and correct:
- Eq. (8.6.1), p. 8-27 (air drag): matches the notes.
- Stokes' law cited reading2 (14.1) p. 2: correct, it is on 14.1 p. 2 (also notes Eq. 8.6.2).
- Linear-drag equation of motion, 14.2 pp. 1–2: p. 1 gives $mg - \alpha v_y = m\,dv_y/dt$, p. 2 divides by m. Correct.
- Separation / ln, p. 2; exponentiation and solution with τ = m/α, p. 3; terminal velocity pp. 3–4; check and "heavier falls faster", p. 4. All correct.
- 14.3: units of β, equation of motion, "nonlinear", p. 1; limit-of-model aside, p. 2; ½ ln[(1+u)/(1−u)] and "integration by parts", p. 3; τ = (1/2g)√(mg/β) and solution, p. 4; √(mg/β) from the force balance, p. 5. All correct.
- Pa s unit (p. 8-27), molecule sorting (p. 8-28), Eq. (8.6.12) v = 2ρ_m R² g/(9η) on p. 8-31, Example 8.6 on pp. 8-31 to 8-32 with Eq. (8.6.18) on p. 8-32: correct.

## Arithmetic and answer checks
- Ball bearing: α = 6π(1.0)(1.0×10⁻³) = 0.018850 kg/s (page 0.0188). v_term = 3.3×10⁻⁵ × 9.81 / 0.0188 = 0.0172 m/s (page 0.017). τ = 3.3×10⁻⁵/0.0188 = 1.76×10⁻³ s (page 1.8×10⁻³). Mass check: (4/3)π(10⁻³)³ × 7850 = 3.29×10⁻⁵ kg, consistent with steel. Reynolds number with glycerol density ~1260 kg/m³: ≈ 0.04, so Stokes' law is valid; good choice of numbers. Notes Table 8.2 lists glycerol (20 °C) at 1.2 Pa s, so "about that of glycerol" for 1.0 Pa s is fair.
- Skydiver: β = ½ × 1.0 × 1.2 × 0.70 = 0.42 kg/m. v_term = √(784.8/0.42) = √1868.6 = 43.23 m/s = 155.6 km/h ("about 155 km/h": fine, 156 would be the rounded value). τ = 43.23/19.62 = 2.203 s. artanh 0.9 = ½ ln 19 = 1.4722; t = 1.4722 × 43.23/9.81 = 6.49 s (page 6.5). All correct.
- tanh form (page's own step): (1 − e^(−t/τ))/(1 + e^(−t/τ)) = tanh(t/2τ), and t/(2τ) = gt/v_term since τ = v_term/(2g). Correct; small-t limit v ≈ gt correct. Clearly marked as the page's own step.
- Plot: linear drag with the same terminal speed has τ = m/α = v_term/g, so v = v_term(1 − e^(−gt/v_term)); correct. All three curves have slope g at t = 0; tanh approaches 1 faster (1 − tanh x ≈ 2e^(−2x)) than 1 − e^(−x), so "levels off more sharply" is correct.
- Coasting: v = v₀/(1 + βv₀t/m) solves dv/dt = −(β/m)v²; correct (matches Eq. 8.6.18 in form; the notes' symbol names are partly lost in extraction).
- Quiz 1: answer mg/α, correct. Quiz 2: kg/m, correct. Quiz 3: √2, correct; explanation right. Quiz 4: −6πηR v⃗, correct.
- Flashcards: all four correct.
- calcs/8.01/resistive-forces.yaml covers every number on the page; `pytest tests/calc -k resistive`: 17 passed. Minor: the `quadratic-solution` identity evaluates the right-hand side with the tanh form rather than the fraction; it still holds because `tanh-form` is checked separately (info only).

## Coverage and order
- The lesson has three segments (14.1–14.3); the page follows them in order, then adds the notes' Example 8.6 (coasting). Nothing from the transcripts is missing: air drag with C_D and table, viscosity, Stokes' law and its use to measure η, linear drag (units, ODE, separation, solution, τ, terminal speed, check, heavier-falls-faster), quadratic drag (units, nonlinear ODE, substitution, model-switch caveat, integral, solution, terminal velocity, check).
- Not covered from the notes (info): Example 8.5's position y(t) (Eq. 8.6.14), the explicit viscosity formula (Eq. 8.6.11, covered only in words), Table 8.2 of viscosities, the Reynolds number remark. Optional.

## Lecturer slips (bracketed notes)
- Units of α: 14.2 p. 1 says "kilogram per inverse second" (and "velocity per second" for m/s). The bracket is accurate. Note that on p. 3 the transcript says "kilogram inverse second", which is correct, so the slip is only on p. 1; the bracket could cite "p. 1".
- "Integration by parts": 14.3 p. 3, accurate; partial fractions is the right method, and the decomposition shown is correct.
- mg/β without root: the transcript says it (p. 4); see finding 2 about "on the board".

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the three transcripts, the segment pages, or Section 8.6 of the notes.
- Table 8.1 values are factual numbers, quoted with citation; fine. No OpenStax or LibreTexts material.
- Worked examples are original (steel bearing in glycerol-like fluid, skydiver), clearly different from the notes' olive-oil marble (R = 5.00 mm, η = 8.10×10⁻² Pa s) and coasting object (v₀ = 20 m/s). Prose is rewritten; no copied sentences found.

## Notes
- Symbols scoped to this page (α, β, ρ, τ, t, d, e, m, g, F, v, A, R, v₀, v_y, u, F_drag, C_D, η, v_term) are correct and their units right. Only ρ_m is wrong (finding 1). ĵ uses the general meaning, fine with down positive.
- leadsTo 8.01 Lecture 15 "Momentum and Impulse" matches the syllabus.
- `npm run content:check`: 0 errors for this page (only the "no review file yet" warning, which this file resolves).

## Resolution (2026-11-15, by the page author)

- **Error 1:** added a meaning for ρₘ scoped to this page: "The density of the marble's material" (kg/m³).
- **Warning 2:** the bracket now reads: the transcript first says "mg over beta" (p. 4).
- **Warning 3:** the callout now says the friction term is standard inflation theory that the 8.286 lectures do not derive (and that, like Stokes drag, it is proportional to the speed); the leadsTo reason no longer implies the lecture covers it.
- Info: the ∫du/(1 − u²) citation is now pp. 2–3; the flashcard and the C_D meaning now say "of order 1 for blunt shapes". The other info notes need no change.

## Correction (2026-11-15, after the independent cross-check)

`npm run calc:crosscheck` (scripts/calc-crosscheck.py) recomputed the skydiver's terminal speed as 155.6 km/h. The page said "about 155 km/h", accepted only because the calcs entry allowed ±1 km/h. The page now says "about 156 km/h", and the calcs entry checks 156 with the usual rounding tolerance.
