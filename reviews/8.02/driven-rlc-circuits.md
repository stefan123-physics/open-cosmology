---
page: content/year-1/8.02/driven-rlc-circuits.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w11d2/ (read: local copy presentati_w11d2.pdf/.txt, 42 slides labelled "P26- 1" to "P26- 42", label = PDF page; this is both `source.url` and `reading2`)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/cha12ac_circuits/ (read: local copy cha12ac_circuits.pdf/.txt, Sections 12.1-12.4 in full, 12.5-12.9 skimmed; printed page = PDF page - 1, confirmed with pdftotext -f/-l on PDF pages 2-18)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w12d2-1/ (read: local copy presentati_w12d2-1.txt, Session 28 slides, for the leadsTo)
  - content/year-1/8.02/_course.json (read: Sessions 25-28)
  - data/symbols.json (read: the 31 meanings scoped to this page)
  - calcs/8.02/driven-rlc-circuits.yaml (read; `npm run calc:test -- -k driven-rlc`: 11 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: AC circuits, phasors and resonance

Citation convention checked: course-notes pages are the printed footers. Verified page by page: p. 1 = 12.1, Eq. 12.1.1; p. 2 = Eq. 12.1.2, 12.2.1-12.2.2; p. 3 = phasor definition, 12.2.3-12.2.4; p. 4 = 12.2.5-12.2.10 (rms, 120 V at 60 Hz), start of 12.2.2; p. 5 = 12.2.11-12.2.16; p. 6 = 12.2.17, start of 12.2.3; p. 7 = 12.2.18-12.2.24; p. 8 = start of 12.3 (no printed footer on PDF p. 9); p. 9 = 12.3.2-12.3.8; p. 10 = 12.3.9-12.3.12; p. 11 = 12.3.13-12.3.15; p. 12 = 12.3.16-12.3.17, Table 12.1; p. 13 = 12.3.18-12.3.19, 12.4.1-12.4.2; p. 14 = 12.4.3-12.4.6; p. 15 = 12.4.7-12.4.10; p. 16 = 12.4.11-12.4.16. Slide numbers are the "P26- N" labels. No "rights reserved" or "courtesy" notice in either source or on their OCW resource pages (both carry the course's Creative Commons licence).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "AC sources and single elements", **Capacitor** ($Q = CV$, $I = dQ/dt$), and `data/symbols.json` entry `Q` | Notes p. 16, after Eq. 12.4.16: "the quality factor Q (not to be confused with charge)". The notes use Q for both. | The page uses $Q$ for the charge ($Q = CV$, $dQ/dt$) and later for the quality factor, without saying so. The only symbol meaning for `Q` on this page is "The quality factor ω₀L/R (here, not a charge)", so the tap-to-explain popup on $Q = CV$ gives the wrong meaning. | Add a charge meaning scoped to this page (or rewrite the capacitor line as $I = C\,dV/dt$, which the quiz already uses, so $Q$ only means the quality factor), and add "(not to be confused with charge)" where $Q$ is defined, as the notes do. |
| 2 | info | "Resonance", "A light bulb in an RLC circuit glows brightest as the frequency sweeps through $\omega_0$" (slides 39-42) | Slides 14 and 39 are only the titles "Demonstration: RLC with Light Bulb"; nothing on them says what is seen. | States the outcome of the demonstration. | Physically right (average power is largest at resonance, Eq. 12.4.7), but not verifiable from the slides. Optionally phrase as "would glow brightest, since the power peaks there". |
| 3 | info | "Reactances are measured in ohms ... a capacitor blocks low frequencies, an inductor high ones (pp. 5-7; slide 21)" | p. 5: X_L grows with ω and vanishes as ω → 0; p. 7: X_C diverges as ω → 0. Slide 21 is the summary table. | "blocks" | Fair paraphrase of what the notes say; no change needed. |
| 4 | info | "Resonance", low/high-frequency behaviour, cited "(course notes, Section 12.3.2, pp. 12-13; slides 36-38)" | The C-dominates/L-dominates wording and "φ < 0, I leads / φ > 0, I lags" are on slides 37-38; Section 12.3.2 only has the resonance condition and Z = R, φ = 0. | Combined citation. | Correct as a combined citation. |
| 5 | info | "The driven series RLC circuit" | Slides 30-34 fix the current phase (I = I₀ sin ωt) and shift the source, V_S = V₀S sin(ωt + φ), explaining on slide 30 that this is only a shift of the zero of time; the notes (and slide 33) keep V fixed and use I₀ sin(ωt − φ). | Uses the notes' convention throughout. | Consistent and correct. Optional sentence that the slides' alternative is the same thing with the zero of time shifted. |

Every formula and page/slide reference was checked:
- V(t) = V₀ sin ωt, ω = 2πf: Section 12.1, p. 1; slide 16. Correct.
- I(t) = I₀ sin(ωt − φ): Eq. 12.1.2, p. 2; slide 17. Correct.
- Resistor, φ = 0: Section 12.2.1, p. 2; slide 18. Correct.
- Capacitor, I = ωCV₀ cos ωt, current leads, φ = −π/2: Eqs. 12.2.19-12.2.24, p. 7 (section heading on p. 6); slide 19. Correct.
- `<Formula>` X_C = 1/ωC, `at="Eq. (12.2.23), p. 7"`: correct.
- Inductor, I = −(V₀/ωL) cos ωt, current lags, φ = +π/2: Eqs. 12.2.13-12.2.17, pp. 5-6 (section heading on p. 4); slide 20. Correct.
- `<Formula>` X_L = ωL, `at="Eq. (12.2.16), p. 5"`: correct.
- RMS: ⟨sin²⟩ = ½ (12.2.5), I_rms, V_rms (12.2.7-12.2.8), ⟨P_R⟩ = I_rms²R (12.2.10), 120 V rms at 60 Hz: all p. 4. Correct.
- Phasor definition (rotates counterclockwise at ω, vertical projection = instantaneous value): p. 3; slides 23-27. Correct.
- Series RLC: Section 12.3, pp. 8-10; slides 29-33. V = V_R + V_L + V_C as phasors: Eq. 12.3.12, p. 10; slide 32. Correct. Right-triangle reading: Eq. 12.3.13, p. 11; slide 33. Correct. Voltage phasors relative to the current (V_L a quarter turn ahead, V_C behind): slide 31, Figure 12.3.2. Correct.
- `<Formula>` I₀ = V₀/Z, Z = √(R² + (X_L − X_C)²), tan φ = (X_L − X_C)/R, `cite="reading2" at="slide 33"`: slide 33 has exactly these three (φ written as tan⁻¹). Correct. Same as Eqs. 12.3.6 and 12.3.15.
- V₀ ≠ V_R0 + V_L0 + V_C0: Eq. 12.3.14, p. 11. Correct.
- `<Formula>` ω₀ = 1/√(LC), `at="Eq. (12.3.17), p. 12"`: correct. Z = R, I₀ = V₀/R, φ = 0: Eqs. 12.3.18-12.3.19, p. 13. Correct.
- `<Formula>` ⟨P⟩ = I_rms V_rms cos φ = I_rms² R, `at="Eqs. (12.4.4) and (12.4.6), p. 14"`: correct. cos φ = R/Z (12.4.5, p. 14), maximum at resonance (12.4.7, p. 15). Correct.
- Half-power width Δω = R/L (12.4.15) and Q = ω₀/Δω = ω₀L/R (12.4.16): Section 12.4.1, pp. 15-16. Correct.
- Driven mass on a spring: m d²x/dt² + kx = F₀ cos ωt and x = x_max cos(ωt + φ) at the driving frequency: slide 8; amplitude depends on ω, peaks near ω₀, swings, cars, instruments: slides 9-11; analogy (inductor ↔ mass, capacitor ↔ spring, charge ↔ position, current ↔ velocity, AC supply as driving force): slide 13. All correct.

Phase conventions: the page keeps one convention throughout, I = I₀ sin(ωt − φ) with V = V₀ sin ωt, so φ > 0 means the current lags (inductive) and φ < 0 means it leads (capacitive). This matches Eqs. 12.1.2, 12.2.17, 12.2.24, 12.3.6, slide 38 and the worked example (φ ≈ −86°, "current leads"). The spring's x_max cos(ωt + φ) uses the opposite sign, exactly as slide 8 does; the page does not compare the two signs, so no confusion arises.

## Arithmetic and answer checks
- Plot: I₀R/V₀ = R/√(R² + (ωL − 1/ωC)²). With u = ω/ω₀ and ω₀² = 1/LC, ωL − 1/ωC = ω₀L(u − 1/u), so I₀R/V₀ = 1/√(1 + Q²(u − 1/u)²) with Q = ω₀L/R. The curves `1/sqrt(1 + 9*(u - 1/u)^2)` (Q = 3) and `1/sqrt(1 + 100*(u - 1/u)^2)` (Q = 10) are therefore correct, peak at exactly 1 at u = 1 (inside range [0, 1.05]), and the caption's formula, its definition of Q and "smaller resistance, higher Q, sharper peak" (at fixed L and C) are right. The current falls to 1/√2 of its peak at the half-power points, so the width R/L also applies to this current graph (Δu = 1/Q for the half-power points: 1/3 and 1/10).
- Worked example (a): ω₀ = 1/√(0.1 × 10⁻⁵) = 1/√(10⁻⁶) = 1000 rad/s; f₀ = 1000/2π = 159.15 Hz ≈ 159; I₀ = 10/10 = 1 A. Correct.
- (b): X_L = 500 × 0.1 = 50 Ω; X_C = 1/(500 × 10⁻⁵) = 200 Ω; Z = √(100 + 22500) = √22600 = 150.33 Ω; I₀ = 10/150.33 = 0.0665 A ≈ 0.067; tan φ = −15, φ = −86.19° ≈ −86°, current leads (capacitive, ω < ω₀). Correct.
- (c): Q = 1000 × 0.1/10 = 10; Δω = 10/0.1 = 100 rad/s; check Q = ω₀/Δω = 10. Correct.
- (d): 120√2 = 169.7 ≈ 170 V. Correct.
- The worked example is original: Section 12.9's solved problems use other values (200 rad/s and 100 μF in 12.9.1-12.9.2; 250 mH, r = 15 Ω in 12.9.3; 100 and 1000 rad/s in a later problem) and different questions.
- Quiz 1 (index 1, current leads by a quarter cycle): correct; I = C dV/dt peaks where V changes fastest, a quarter cycle before V peaks. Right.
- Quiz 2 (index 1, X_L = X_C, Z = R, current largest): correct; explanation right.
- Quiz 3 (index 1, like a capacitor: small current, leads): correct (X_C → ∞, φ → −π/2); explanation right.
- Flashcards: all three correct ("peak width Δω = R/L" is the half-power width, Eq. 12.4.15).
- Frontmatter summary: consistent with the body and with the sources.
- calcs/8.02/driven-rlc-circuits.yaml: 11 entries (us-mains fact, ω₀, f₀, X_L, X_C, Z, I₀, φ, Q, Δω, peak voltage), all pass and agree with the page. The `source` locations in the calcs file match the page's citations. The plot is not in the calcs file; its formula was checked by hand above (info only).

## Coverage and order
- Slide order: outline and last time (1-4) → mass on a spring, driven, resonance (5-11) → RLC analogy (12-14) → AC sources, R, C, L, summary table (15-21) → phasors (23-27) → driven series RLC (29-34) → resonance (36-38) → light-bulb demo, Experiment 11 (39-42). The page follows this order, then adds power and peak width from Section 12.4 of the notes (not on the slides). RMS values are placed with the resistor, as in Section 12.2.1.
- Left out (all minor): the PRS questions (slides 22, 28, 35, 40, content not on the slides); slide 30 (shifting the zero of time, see row 5); slide 34 (graphs of I, V_R, V_L, V_C, V_S against time); Experiment 11 Part II (measuring I₀ at listed frequencies to plot I₀ against ω); the differential-equation solution of the series circuit (Eqs. 12.3.2-12.3.8, p. 9) and Table 12.1 (single-element limits, p. 12); the derivation of the half-power points (Eqs. 12.4.8-12.4.14) and the remark comparing Q with Eq. 11.8.17.
- Outside the cited range and not covered: Section 12.5 (transformer; already on the Session 21 page `transformers-and-magnetic-materials`) and Section 12.6 (parallel RLC). Session 27 is a problem-solving session on this chapter.
- Added: the worked example and the resonance graph.

## Licensing
- No "© ... All rights reserved" or "Courtesy of" notice in the slides, the chapter, or their OCW pages; both are under the course's Creative Commons licence.
- The page reuses no figure: the only graph is a generated `<Plot>` from a formula. No OpenStax or LibreTexts material.
- No copied passages: the text is rewritten. Short phrases close to the slides ("the capacitor fills up and keeps the current low", slide 37; "glows brightest" is the page's own) are standard explanatory phrasing and acceptable.

## Notes
- leadsTo 8.02 Session 28 ("Displacement current and Maxwell's equations, which lead to electromagnetic waves"): matches the Session 28 title and slides (displacement current, Maxwell's equations, plane and travelling waves). Session 27 has no page of its own, so Session 28 is the next lesson. Optional: the real bridge from this page is the capacitor, since Session 28 introduces the displacement current through "a charging capacitor"; "why" could say so.
- No `Callout kind="cosmology"` on the page, so there are no cosmology claims to check. That is acceptable (rule 6 asks for one only where a real connection exists).
- Symbols: the 31 meanings scoped to this page fit, apart from `Q` (row 1). `phi` ("the phase by which the current lags the source voltage, or the spring's phase") correctly covers both uses.
- No em dashes on the page.

## Resolution (2026-11-16, by the page author)

- Warning: the Q meaning for this page now covers both the charge and the quality factor, and the page says the quality factor is not to be confused with the charge Q.
- Info: the light-bulb outcome is marked as the page's own description; the low/high-frequency behaviour now cites slides 36–38 first. Other info items: no change.
