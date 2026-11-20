---
page: content/year-4/8.286/matter-radiation-equality.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-15-black-body-radiation-and-the-early-history-of-the-universe/ (read from a local copy of the HTML. Its first .pdf link is a3f3a576e9792f0e1b9676cc30b52619_moyD_yeviMY.pdf, which matches reading1.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/a3f3a576e9792f0e1b9676cc30b52619_moyD_yeviMY.pdf (read from a local copy split by PDF page. Pages 15–27 were read in full. Printed footers were checked with pdftotext on pp. 16, 19, 22, 25 and 27, and they equal the PDF page numbers.)
  - Lecture 15 slides (local copy, s15.txt). These only summarise Lecture 14, and none of this page's formulas or numbers are on them.
  - Lecture 16 transcript (local copy, t16.txt). Used to check the forward-looking callout.
  - content/year-4/8.286/_course.json (syllabus and themes). Used for the claim about Lectures 19–20.
  - https://arxiv.org/abs/1807.06209 (read: the abstract only. Table 2 was not opened.)
verdict: needs-changes
---

# Review: Matter–radiation equality and the pressure of light

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Plot caption | (A number the page computed, not an MIT claim.) a = Ω_r/Ω_m = 9.245e-5/0.30 = 3.0816e-4, so 1 + z = 3,245.06 and **z = 3,244**. | "a = 3.08 × 10⁻⁴, z = 3,245" | Write "1 + z = 3,245" or "z ≈ 3,244". You could also write "z ≈ 3,240", to match the rounding style of the 3,200 above. |
| 2 | error | Worked example, step "Ratio and redshift" | (A number the page computed.) Ω_r/Ω_m = 9.1354e-5/0.315 = 2.9001e-4, so 1 + z = 3,448.1. Using the rounded 2.90e-4 gives 3,448.3. | "$1 + z_\text{eq} = 3{,}449$" | Change it to 3,448. The values "z ≈ 3,450" and "t ≈ 68,000 yr" stay correct (68,156 yr). |
| 3 | warning | Formula "Radiation today", last part "≈ 10⁻³³ g/cm³" | p. 16: 7.80e-31 kg/m³. Guth then says "it's 10 to the minus 34 grams per centimeter cubed, so 10 to the minus 34, or maybe 10 to the minus 33, times the density of water". The exact conversion is **7.80 × 10⁻³⁴ g/cm³**. | Gives ≈ 10⁻³³ g/cm³ as though it came from the board. | As an order of magnitude, 10⁻³³ is defensible (log₁₀ = −33.1), but it is not what Guth wrote. Suggested wording: "= 7.8 × 10⁻³⁴ g/cm³". Then rewrite the next paragraph as "about 10⁻³³ times the density of water (Guth: '10⁻³⁴, or maybe 10⁻³³')". |
| 4 | warning | Cosmology callout: "The pressure term in (2′) returns in Lectures 19–20, where a negative pressure makes the expansion accelerate." | Lecture 16 (transcript p. 11) already discusses how pressure enters ä: "pressures actually can be negative … that negative pressure would actually cause the universe to accelerate", and promises more "later". In `_course.json`, Lecture 18 is "Cosmic Microwave Background Spectrum and the Cosmological Constant, Part I", so the cosmological constant starts in Lecture 18. The "Dark energy" theme lists only 19 and 20. | "Lectures 19–20" | This is not fully supported. Lectures 18–20 were not read. Suggested wording: "returns in Lecture 16, and again in Lectures 18–20 on the cosmological constant, where a negative pressure …". Mark the 18–20 part as uncertain until those transcripts are checked. |
| 5 | warning | Callout: "Lecture 16 turns to black-body radiation" | Lecture 16 first reviews Lecture 15 and spends many pages on pressure, energy conservation and the ä equation (pp. 1–11+). It switches to black-body radiation only later (t16 line ~515: "I want to switch gears … the physics of black-body radiation"). | Black-body radiation only | Suggested wording: "Lecture 16 first revisits the pressure term, then turns to black-body radiation …". |
| 6 | info | Final paragraph of "Which Friedmann equation gets the pressure?": "Pressure, perhaps surprisingly, makes gravity stronger" | This is not in Lecture 15. Guth says it in Lecture 16, transcript p. 11 ("pressures, as well as mass densities, contribute to the gravitational field … positive pressures act the same way as positive mass densities"). | Presented as part of Lecture 15 | The physics is correct for p > 0. Attribute it to Lecture 16 ("as Guth stresses next lecture"), or qualify it as "positive pressure". |
| 7 | info | Hubble-tension callout: "as Guth recommends" | p. 17 gives reasons for using h₀ (formulas "remain valid between one year and next year"). It does not make a recommendation. | "as Guth recommends" | Write "as Guth explains" or "for the reason Guth gives". |
| 8 | info | "set off at the same cosmic time … sticks of TNT" | p. 26: "pieces of TNT". | "sticks" | No change needed. |

### Formula and citation check (all on the board; none is on the Lecture 15 slides)
- u_r = 7.01e-14 J/m³ is on p. 15, and ρ_r = 7.80e-31 kg/m³ is on p. 16. The citation "pp. 15–16 (board)" is **correct**, apart from the g/cm³ value (#3).
- ρ_c = 1.88 h₀² × 10⁻²⁹ g/cm³ and H₀ = 100 h₀ km/s/Mpc are on p. 16. **Correct.** Guth says the H₀ definition was written on the board ("I'll write that in a second").
- Ω_r = 4.15e-5 h₀⁻² ≈ 9.2e-5 at h₀ = 0.67 is on p. 17. **Correct.** The earlier value of about 0.70 is also on p. 17.
- ρ_r/ρ_m = 3.1e-4 · a(t₀)/a(t) and Ω_m ≈ 0.30 are on p. 18. **Correct.**
- 1 + z_eq = 1/3.1e-4 is on p. 19. **Correct.** Guth writes z_eq = 1/(3.1e-4) − 1.
- t_eq ≈ 75,000 yr is on p. 19, and t₀ = 13.8e9 yr is on p. 20. The citation "pp. 19–20" is **correct**. The page's formula t_eq = t₀(1 + z)^(−3/2) is not written out in the transcript. Guth says "converting … using that formula, treating this as t to the 2/3". It follows directly from that, which is fine.
- Friedmann (1) and (2) for matter are on p. 22 (board, "reminding us what those were"). **Correct.** The sign convention −kc²/a² matches the course.
- (3): ρ = b/a³ and ρ̇ = −3(ȧ/a)ρ are on p. 22. **Correct.** Guth first omits the 3 and then corrects it. The page has the corrected form.
- (3′): ρ̇ = −4(ȧ/a)ρ is on p. 23. **Correct.**
- dU = −p dV is on p. 24. **Correct.** The "any container shape" remark is also on p. 24.
- Comoving-box energy balance d/dt(a³ρc²) = −p d/dt(a³), giving ρ̇ = −3(ȧ/a)(ρ + p/c²), is on p. 25. **Correct.** The setup (V = a³V_coord, U = Vρc²) starts on p. 24 and continues on p. 25.
- p = ⅓ρc² is on pp. 25–26. **Correct.**
- (2′): ä = −(4π/3)G(ρ + 3p/c²)a is on p. 27. **Correct.** The bracketed slip note ("equation 1 must change" corrected to "equation 2") is also **correct**, at p. 27.

### Independent derivation checks (by hand)
- **(1) + continuity → (2′).** Differentiating (1) gives 2(ȧ/a)(ä/a − ȧ²/a²) = (8πG/3)ρ̇ + 2kc²ȧ/a³. Insert ρ̇ = −3(ȧ/a)(ρ + p/c²) and divide by 2ȧ/a: ä/a − ȧ²/a² = −4πG(ρ + p/c²) + kc²/a². Substituting ȧ²/a² from (1) gives ä/a = (8π/3 − 4π)Gρ − 4πGp/c² = −(4π/3)G(ρ + 3p/c²). **Verified.** With p = 0 this reduces to (2), which confirms the "any two give the third" statement.
- **Comoving box.** 3a²ȧρ + a³ρ̇ = −3a²ȧ p/c², so ρ̇ = −3(ȧ/a)(ρ + p/c²). With p = ρc²/3 the factor is −4. **Verified.**

## Arithmetic and answer checks
These were checked with a Python script (c = 2.99792458e8 m/s).
- 7.01e-14 / c² = 7.7997e-31 kg/m³, which rounds to 7.80e-31. **Correct.** This equals 7.80e-34 g/cm³ (see #3).
- Ω_r h² = 7.7997e-31 / 1.88e-26 = 4.149e-5, which rounds to 4.15e-5. **Correct.**
- Ω_r at h = 0.67 is 9.245e-5, which rounds to 9.2e-5. **Correct.** The caption's value of 9.24e-5 is also correct.
- Ω_r/Ω_m = 9.245e-5/0.30 = 3.08e-4, which rounds to 3.1e-4. **Correct.**
- 1/3.1e-4 = 3,225.8, so z_eq = 3,224.8, or about 3,200. **Correct.** The bracketed "32,000" slip note is **correct**: p. 19 says "about equal to 32,000", and the next sentence says "a redshift of 3,200". A student also queried the number (pp. 19–20).
- t_eq = 13.8e9 × 3,225.8^(−3/2) = 75,322 yr, or about 75,000 yr. **Correct.**
- Plot: the crossing is at log₁₀ a = −3.5112, with y = log₁₀ 0.30 + 3 × 3.511 = 10.010. The marker at (−3.511, 10.01) is **correct**. The label "a ≈ 1/3,250" is fine. The caption's z is off by one (#1). At x = −5 the radiation line is at 15.97, which is inside the y-range of 16. At the slider maximum Ω_r = 1.2e-4 it reaches 16.08 and is clipped slightly at the left edge (cosmetic). The fixed equality marker does not move with the Ω_m/Ω_r sliders (info).
- Worked example: Ω_r = 4.15e-5/0.674² = 9.135e-5, which rounds to 9.13e-5 (**correct**). The ratio 2.900e-4 is **correct**. 1 + z = 3,448.1 (the page says 3,449, see #2). z ≈ 3,450 is **correct**. t = 68,156 yr, or about 68,000 yr (**correct**).
- Planck 2018 values: the arXiv abstract gives H₀ = 67.4 ± 0.5 km/s/Mpc and Ω_m = 0.315 ± 0.007 (base ΛCDM). So h = 0.674 and Ω_m = 0.315 are **correct**. The page clearly marks them as later than the lecture ("Planck 2018, after this lecture"). I did not open Table 2 itself. From memory, the TT,TE,EE+lowE+lensing column gives H₀ = 67.36 and Ω_m = 0.3153, so the `location` is plausible but **unverified**. Also from memory (uncertain), Planck's own fitted z_eq is about 3,390, a little below the page's 3,450. The difference comes from the 4.15e-5 coefficient. You could optionally note this, but it is not required.
- As a side check of Guth's p. 21 claim, the same method with h₀ = 0.72 gives about 60,000 yr. This supports his point that h₀ explains much of the gap to Ryden's 47,000 yr.
- Hubble-tension callout: CMB ~67 versus distance ladder ~73 km/s/Mpc, and "more than their stated errors". This is accurate as a description of the post-2013 situation (SH0ES 2022: 73.0 ± 1.0). It is correctly marked as a later development. Whether it is "still unresolved" in late 2026 is broadly true, but I did not verify it against current literature.
- Quiz:
  - Q1, answer 1: ratio ∝ 1/a. **Correct.**
  - Q2, answer 1: about 3,200. **Correct.** The explanation's 1/3.1e-4 ≈ 3,226 is correct.
  - Q3, answer 1: dU = −p dV. **Correct.**
  - Q4, answer 1: p = ⅓ρc². **Correct.** −3(ρ + ρ/3) = −4ρ.
  - Q5, answer 1: **Correct**, and it matches pp. 26–27. Info: the correct choice is much longer than the distractors, which gives it away. Also, every question has `answer: 1`. Consider varying the answer positions.
- Flashcards: all five match the transcript and the checks above.

## Coverage and order
- The page follows the transcript's order exactly: radiation today (pp. 15–16) → critical density and h₀ (pp. 16–17) → Ω_r (p. 17) → ratio and scaling (p. 18) → z_eq and t_eq (pp. 19–20) → caveats (p. 18) and Ryden (p. 21) → the three equations and their consistency (pp. 21–23) → piston, dU = −p dV (pp. 23–24) → comoving box and ρ̇ with pressure (pp. 24–25) → p = ⅓ρc² (pp. 25–26) → energy versus force equation, and the TNT argument (pp. 26–27) → (2′) (p. 27).
- The two caveats Guth gives on p. 18 (dark-energy era ignored; radiation matters near equality) appear on the page after the 75,000 yr result, not before it. That is a small reordering and acceptable.
- Nothing material from pp. 15–27 is missing. Things the page leaves out:
  - p. 21: Guth says the radiation era "does have important features that happened during that time period".
  - pp. 19–20: the student exchange about rounding (3,220 versus 3,200).
  - Both are minor.
- Things the page adds:
  - the Plot
  - the Planck 2018 worked example
  - the Hubble-tension callout (all correctly flagged as later)
  - the "pressure makes gravity stronger" sentence (from Lecture 16, see #6)

## Licensing
- `grep -il "rights reserved\|courtesy"` on the Lecture 15 transcript and slide text found no matches. The page uses no third-party figures. The only plot is generated from formulas.
- There is no OpenStax or LibreTexts material.
- The prose is rewritten, not copied. The closest paraphrase is "which agrees with any other way of calculating the pressure of light" (p. 26: "this agrees with any other calculation for the pressure of light"). It is a short clause and acceptable.
- The worked example is original: it uses new parameter values, and there is no comparable example in the lecture.
- Ryden's 47,000 yr is reported as Guth's quotation. That is fine. Optionally add Ryden to `references`, but it is not required, because the claim is attributed to Guth.

## Notes
- The `leadsTo` entry for Lecture 16, black-body radiation, is fair. Lecture 16's black-body section starts after its long pressure discussion (#5).
- The "Back to equality" paragraph keeps Guth's statement that the h₀ difference, not the extra physics, causes most of the gap to Ryden (p. 21). This is faithful.
- Once #1 and #2 are fixed, the verdict would be pass-with-notes, provided the warnings are addressed or consciously accepted.

## Resolution (2026-11-14, by the page author)

- Error 1: the plot caption now gives 1 + z = 3,245.
- Error 2: the Planck 2018 example now uses 1 + z_eq = 3,448, both in the text and in the t_eq step. It also adds that Planck's own full fit gives z_eq ≈ 3,390.
- Warning 3: the radiation-today formula now gives 7.80 × 10⁻³⁴ g/cm³, and the text quotes Guth's "10⁻³⁴, or maybe 10⁻³³".
- Warnings 4–5: the cosmology callout now says that Lecture 16 first returns to pressure and the ä equation (where negative pressure means acceleration), that the cosmological constant starts in Lecture 18, and that black-body radiation comes after that.
- Info: "pressure makes gravity stronger" is now read off the equation and credited to Lecture 16. "As Guth recommends" became "for the reasons Guth gives". Quiz answer positions now vary (0, 3, 1, 2, 1), and Q5's choices are of similar length.

## Correction (2026-11-15, found by the calculation tests)

The first run of `tests/calc` (calcs/8.286/matter-radiation-equality.yaml, entry `we-omega-r-2018`) found a rounding slip in the worked example "Equality with later measurements": 4.15 × 10⁻⁵ / 0.674² = 9.135 × 10⁻⁵, which rounds to 9.14 × 10⁻⁵, not 9.13 × 10⁻⁵. Both occurrences were corrected. The following results (2.90 × 10⁻⁴, 1 + z = 3,448, 68,000 years) had used the unrounded value and were already right.
