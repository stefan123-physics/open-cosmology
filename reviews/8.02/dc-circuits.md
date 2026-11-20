---
page: content/year-1/8.02/dc-circuits.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w04d2/ (read: local copy presentati_w04d2.pdf/.txt, "Class 10", 41 slides; slide number = "P10- N" label = PDF page; slides 4 and 30 have a truncated label "P10-" and were placed by PDF page)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapter6current/ (read: local copy chapter6current.pdf/.txt, Course Notes Chapter 6; printed page = PDF page − 1, confirmed for PDF pages 2–8 with `pdftotext -f N -l N`)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap7dc_circuits/ (read: local copy chap7dc_circuits.pdf/.txt, Course Notes Chapter 7; Sections 7.1–7.4 (printed pp. 1–8) in full, Sections 7.8 and 7.9.1–7.9.2 checked for overlap with the worked example)
  - content/year-1/8.02/_course.json (read: Lecture 10 = "DC Circuits; Kirchhoff's Loop Rules", Lecture 12 = "Working with Circuits; RC Circuits (Experiment 4)")
  - calcs/8.02/dc-circuits.yaml (read; `npm run calc:test -- -k dc-circuits`: 12 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Current, resistance and DC circuits

Citation convention checked: `reading1` = Chapter 6, `reading2` = Chapter 7 (printed page numbers), `reading3` = Session 10 slides; `cite="mit"` is not used. Every `<Formula>` is at the cited place:

- "Current", `reading1` Eq. (6.1.2), p. 1: correct (PDF p. 2).
- "Microscopic Ohm's law", `reading1` Eq. (6.2.1), p. 3: correct (PDF p. 4).
- "Ohm's law and resistance", `reading1` Eqs. (6.2.7) and (6.2.10), p. 5: correct, both on printed p. 5 (PDF p. 6). Same content on slides 16–17.
- "A battery with internal resistance", `reading2` Eqs. (7.2.5) and (7.2.7), pp. 3–4: correct (7.2.5 on p. 3, 7.2.7 at the top of p. 4). Terminal voltage also on slide 30.
- "Resistors in series and in parallel", `reading2` Eqs. (7.3.2) and (7.3.5), pp. 4–5: correct (7.3.2 on p. 4, 7.3.5 on p. 5). Same on slides 24–25.
- "Kirchhoff's loop rule", `reading3` slide 29: correct; the slide has ΣΔV = −∮E·ds = 0 around a closed path. (Notes Eq. 7.4.2 on p. 7 states ΣΔV = 0 without the integral.)
- "Electrical power", `reading1` Eqs. (6.3.1)–(6.3.2), p. 7: correct (both on PDF p. 8). Same on slides 36 and 38.

Prose citations checked and correct: current range "mega-amperes in lightning to nano-amperes in your nerves" and the direction convention (Ch. 6 p. 1; slide 7); I = ∫J·dA (Eq. 6.1.3, p. 2; slide 8); Eqs. 6.1.4–6.1.5 (p. 2); erratic electron path (p. 2); drift from the mean free time (Eqs. 6.1.6–6.1.9, p. 3); E ≠ 0 and no equipotential when current flows (slide 9); σ and ρ depend on material, not shape (slide 12); "ohmic" (p. 4); copper 1.72 × 10⁻⁸ Ω m (table, p. 6; consistent with the table's conductivity 5.81 × 10⁷ (Ω m)⁻¹) and glass 10¹⁰–10¹⁴ Ω m (same table); linear temperature dependence for metals (Eq. 6.2.11, p. 5; demo slide 13); emf as "charge pump", work per unit charge, volts (Ch. 7 p. 2); I = ε/R (Eq. 7.2.4, p. 3); short leads do not give infinite current (slide 30); sign conventions ski lift / ski slope / capacitor from − to + plate (slides 20–22); largest resistor dominates in series (p. 5), smallest in parallel and short circuit (p. 6); junction rule (Eq. 7.4.1, p. 6; slide 28); recipe (slide 31); voltage divider (Eqs. 7.4.3–7.4.6, pp. 7–8); Iε = I²R + I²r (Eq. 7.2.8, p. 4); battery supplies Iε, resistors always dissipate (slides 37–38); capacitor absorbs d/dt(Q²/2C) (slide 39). Physics and sign conventions are right throughout. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Kirchhoff's rules" and the worked example | Slides 32–33 (Hour 2 of the session) solve a two-loop circuit with two batteries by loop equations, finding a current that comes out zero; slide 34 is a group problem of the same kind. Notes Section 7.8 (pp. 15–17) gives the procedure with a two-loop example. | The loop rule is stated and the recipe listed, but no multi-loop circuit is solved; the worked example reduces entirely to series/parallel combination, so the loop and junction rules are only used as checks. | Add a short original two-loop example (e.g. two batteries in different branches sharing a resistor) solved with two loop equations and one junction, so the second half of the session ("Kirchhoff's Loop Rules") is actually exercised. |
| 2 | info | "Current and current density", "(p. 2; slide 10)" after the drift speed | The figure 4 × 10⁻⁵ m/s and "takes about 10 hours" to go one metre are on slide 10 only; Chapter 6 p. 2 has the erratic path but no number. | Both cited together. | Optional: "(erratic motion p. 2; the figure, slide 10)". The page's "hours" is right; the slide's "about 10 hours" is generous (1 m ÷ 4 × 10⁻⁵ m/s = 25 000 s ≈ 6.9 h, as the calcs file computes). Keeping "hours" avoids repeating the rounding, which is fine. |
| 3 | info | "Kirchhoff's rules", recipe | Slide 31: "Assign current loops (arbitrary)". The "negative answer means the other direction" remark is in Notes Section 7.8 (p. 16) and Section 7.9 (p. 18 onward), not on slide 31. | Folded into the slide 31 recipe. | Correct physics; optionally cite Ch. 7 Section 7.8, p. 16 for the remark. |
| 4 | info | "Resistors in series and in parallel" | Neither the slides nor Sections 7.3 say the rules are "the reverse of those for capacitors" (7.1 only says series/parallel were "already seen in the case of capacitors"). | "The rules are the reverse of those for capacitors." | Correct and useful; it is the page's own remark, not MIT's. Fine as is. |
| 5 | info | Section order | Slides: current → Ohm → circuit symbols and sign conventions (19–22) → series/parallel (23–25) → Kirchhoff (27–29) → internal resistance (30) → recipe and example (31–34) → power (35–40). | Internal resistance and emf come before series/parallel, following Notes Chapter 7 (7.2 before 7.3). | Acceptable: it follows the notes' order and the notes are cited. No change needed. |
| 6 | info | "Ohm's law" | Eq. (6.1.10) J = (ne²τ/mₑ)E and Eq. (6.2.2) σ = ne²τ/mₑ, p. 3–4; Eq. (6.2.11) ρ = ρ₀[1 + α(T − T₀)], p. 5. | The derivation is described in words; no formula for σ or for the temperature dependence. | Optional for full coverage: add σ = ne²τ/mₑ (Eq. 6.2.2, p. 4) as a `<Formula>`. |
| 7 | info | Power | Slide 40: energy balance with a capacitor, Iε = I²R + d/dt(Q²/2C). | Only the capacitor's absorbed power is mentioned; the balance is given for internal resistance (Eq. 7.2.8). | Optional; the capacitor version belongs naturally to the RC page (Session 12). |

## Arithmetic and answer checks
- Worked example (all recomputed): parallel pair 6·3/(6 + 3) = 2 Ω; total 4 + 2 + 0.5 = 6.5 Ω; I = 9/6.5 = 1.3846 A → 1.385 A. Terminal voltage 9 − 1.3846 × 0.5 = 8.3077 V → 8.31 V. Pair voltage 1.3846 × 2 = 2.769 V → 2.77 V; branches 2.769/6 = 0.4615 A → 0.462 A and 2.769/3 = 0.9231 A → 0.923 A; sum 1.3846 A, junction rule satisfied. Power supplied 1.3846 × 9 = 12.462 W → 12.46 W; dissipated 1.3846² × 6.5 = 12.462 W → 12.46 W; internal I²r = 0.9586 W → 0.96 W. All correct.
- Also checked: terminal voltage = I(R_ext) = 1.3846 × 6 = 8.308 V, consistent.
- Drift: 1/(4 × 10⁻⁵) s = 25 000 s = 6.94 h ("hours" on the page is right).
- `calcs/8.02/dc-circuits.yaml`: 12 entries match the page; `npm run calc:test -- -k dc-circuits`: 12 passed.
- Quiz 1: falls by IR (answer 1). Correct (slide 21, ski slope); explanation right.
- Quiz 2: R/2 (answer 1). Correct.
- Quiz 3: the field is conservative (answer 1). Correct (slide 29; notes Eq. 7.2.2); explanation correctly assigns charge conservation to the junction rule (Eq. 7.4.1).
- Flashcards: Ohm's law in both forms with ρ = 1/σ, Kirchhoff's two rules, series/parallel with "same current" / "same voltage": all correct.

## Coverage and order
- Covered: slides 1–3, 5–12, 15–17, 20–25, 27–31, 36–39; Notes 6.1–6.3 and 7.2–7.4.
- Left out: slide 13 (temperature demo, mentioned in words), slides 14, 26, 41 (PRS questions), slide 19 (circuit symbols), slides 32–34 (the two-loop example and group problem; see finding 1), slide 40 (energy balance with a capacitor); Notes 7.1 (leads, ground, fuses; partly echoed in the short-circuit remark), Eqs. 6.1.6–6.1.10 and 6.2.2 as formulas (finding 6). Section 7.5 onward (meters, RC circuits) is outside the cited readings and belongs to Session 12.
- Order follows the slides except for the internal-resistance placement (finding 5).

## Licensing
- No "rights reserved" or "courtesy" notice in the slide text or in Chapters 6 and 7 (`grep -il "rights reserved\|courtesy"` on all three: no match).
- No MIT figure is reproduced; the page has no diagram at all.
- No sentence copied verbatim. Short phrases kept are standard or quoted with attribution ("charge pump", "ski lift"/"ski slope", "mega-amperes in lightning to nano-amperes in nerves", "straighten the circuit"); all are brief.
- Worked example is original: a 9 V battery with 0.5 Ω internal resistance, 4 Ω in series with 6 Ω ∥ 3 Ω. It does not resemble slides 32–34 (symbolic, two batteries), Section 7.9.1 (symbolic equivalent resistance R₁ = R₀/√3) or 7.9.2 (maximum power at R = r).
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.02 Lecture 12: `_course.json` lists Lecture 12 as "Working with Circuits; RC Circuits (Experiment 4)"; "RC circuits, where a capacitor charges and discharges through a resistor" is accurate (Notes Section 7.6 is its reading).
- No `Callout kind="cosmology"`; appropriate, since there is no direct cosmology link for DC circuits.
- Summary in the frontmatter says Kirchhoff's rules "solve any circuit"; fine for DC networks of batteries and resistors, which is the page's scope.
- Symbols: the page uses σ (conductivity), ρ (resistivity) and ε (emf), which mean surface charge density, charge density and ε₀ on earlier 8.02 pages. `data/symbols.json` has a page-scoped ε meaning for `dc-circuits`, and `content:check` reports no symbol error for the page, so the scoped meanings are in place.

## Resolution (2026-11-16, by the page author)

- Warning 1: added a second, original worked example, a two-battery two-loop circuit solved with the junction and loop rules (one current comes out negative), with its numbers in the calcs file.
- Info 2: the drift-speed figure now cites slide 10 only; the erratic motion stays with notes p. 2.
- Info 3: the remark on negative currents now cites notes Section 7.8, p. 16.
- Info 4–7: no change.
