---
page: content/year-4/8.286/mass-energy-and-radiation.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-15-black-body-radiation-and-the-early-history-of-the-universe/ (read via the local Lecture 15 materials below. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/a3f3a576e9792f0e1b9676cc30b52619_moyD_yeviMY.pdf (read via a local copy, t15.pdf, split by PDF page as p15.txt. Pages 1–15 were read in full. Printed footers were checked with pdftotext on pp. 5, 7, 9, 12, 14 and 15, and they equal the PDF page numbers.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec15/ (read via a local copy, s15.pdf / s15.txt. The slides only summarise Lecture 14: the geodesic equation, the Schwarzschild metric, radial geodesics and τ(r). None of this page's formulas are on a slide.)
  - Lecture 15 transcript pp. 15–27 (rest.txt). Skimmed only, to check the callout's claim about the second half of Lecture 15.
  - Lecture 16 transcript (local t16.txt). Searched only, to check the Lecture 16 claim.
verdict: pass-with-notes
---

# Review: Mass, energy and the dilution of radiation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Quiz 3 explanation | (Page-internal number.) 13.6 eV / 938.783 MeV = 1.449e-8. | "about 1.4 parts in $10^8$". The worked example on the same page says 1.45e-8. | Write "about 1.45 parts in $10^8$" so it matches the worked example. |
| 2 | info | "E = mc²: how big?", "the latest year Guth found figures for" | p. 5: Wikipedia gave 2008 as "the most recent year it had numbers for". | Says it was the latest year *Guth* found. | Acceptable. For more precision: "the latest year in the source Guth checked (Wikipedia)". |
| 3 | info | Car-tank sentence | p. 6: "fill up your tank of your typical American car and power the world for about two days". | Attributed to Guth, correctly. | No change needed. For context: two days at 1.46 × world power per kg/h corresponds to about 33 kg of matter. A typical US tank holds about 40–50 kg of fuel, so "about two days" is a fair order-of-magnitude figure (more like 2.5–3 days). The page attributes it rather than asserting it, which is right. |
| 4 | info | Bracketed note after the invariant formula | p. 7: Guth first wrote −(m₀c²)². A student asked "Did you forget to divide by C squared there?" Guth: "There's too many C's here … It should have units of momentum." He then said "mass times velocity squared", which is itself a slip: the units should be momentum squared. | "[On the board a factor of $c$ first went astray; a student caught it.]" | **Correct**: (m₀c²)² vs (m₀c)² is one stray c inside the bracket, i.e. c² in the square. The page does not repeat the "mass times velocity squared" slip, which is right. Optionally write "an extra factor of $c$ inside the bracket". |
| 5 | info | "Relativistic mass and gravity", "the directional effects average out" | p. 11: the transcript says the "isotropy … would be canceled". From the context this means the *anisotropy*, which is a slip or transcription error. | Says the directional effects average out. | Correct reading. A bracketed note is not needed, because the page simply states the physics correctly. |
| 6 | info | Absorption / pair-creation paragraph | pp. 13–14: Guth also says that two-photon pair creation has "a rather small cross section". | Leaves this out. | Optional addition. Nothing in the paragraph is wrong. |

### Formula and citation check (all on the board; the slides only cover Lecture 14)
- The energy of 1 kg, 8.9876e16 J = 2.497e10 kWh, is on p. 5. **Correct.** Both numbers are quoted on p. 5.
- The four-vector p^μ = (p⁰, p⃗) with p⁰ ≡ E/c is on p. 6. **Correct.**
- The invariant |p⃗|² − E²/c² = −(m₀c)² is on p. 7. **Correct.** The analogy with x² + y² + z² − c²t² starts at the bottom of p. 6. The transcript's "minus E squared C squared" is a transcription slip for E²/c². The page has the right form.
- p⃗ = γm₀v⃗ is on p. 7, and E = √((m₀c²)² + p²c²) = γm₀c² is on p. 8. "pp. 7–8" is **correct**. E₀ = m₀c² is also on p. 8.
- m_H = m_p + m_e − ΔE/c² with ΔE = 13.6 eV is on p. 9. **Correct.**
- ρ = u/c² is announced at the bottom of p. 11 and written at the top of p. 12. "pp. 11–12" is **correct**.
- E = c|p⃗| is on p. 12. **Correct.**
- ν(t₂)/ν(t₁) = 1/(1+z) = a(t₁)/a(t₂) is on p. 14. **Correct.**
- u_γ = n_γ hν ∝ 1/a⁴ is on p. 15. **Correct.** The value h = 4.136e-15 eV·s starts at the bottom of p. 14 and is completed on p. 15. The page states it in the text, not in a Formula, so no citation is needed.

## Arithmetic and answer checks
All values were recomputed with a script (c = 2.99792458e8 m/s, year = 8766 h).
- 1 kg × c² = 8.98755e16 J = 2.49654e10 kWh. The page's 8.9876e16 J and 2.497e10 kWh are **correct**.
- 150 PWh = 1.5e14 kWh. Divided by 8766 h, that is 1.711e10 kW. The page's "about 1.7e10 kW" is **correct**.
- 2.4965e10 / 1.711e10 = 1.459. The page's "about 1.5 times" is **correct**. Equivalently, 1 kg is about 1.46 hours of 2008 world use, so the quiz/summary "about 1.5 hours" is **correct**.
- Plot: at v = 0.8c, γ = 1/√0.36 = 5/3 = 1.6667, so the marker (0.8, 1.6667) is **correct**. For an electron, E = 0.511 × 5/3 = 0.8517 MeV (page 0.852, **correct**) and pc = γβ m₀c² = 0.6813 MeV (page 0.681 MeV/c, **correct**). The curves 1/√(1−x²), 1 + x²/2 (rest energy + ½m₀v² in units of m₀c²) and x/√(1−x²) = p/(m₀c) are **correct**.
- Worked example: 938.272 + 0.511 = 938.783 MeV. 13.6 eV / 938.783 MeV = 1.4487e-8 (page 1.45e-8, **correct**). Per kg that is 1.449e-8 kg = 14.5 μg (**correct**). The energy is 1.4487e-8 × 8.98755e16 = 1.302e9 J (page ≈ 1.3e9 J, **correct**). Using 1 kg of hydrogen rather than 1 kg of separated particles changes this only at the 1e-8 level.
- Quiz 1: answer index 1, "9e16 J, about 2.5e10 kWh". **Correct.** The explanation's "about 1.5 hours" is **correct** (1.46 h).
- Quiz 2: answer index 1, |p⃗|² − E²/c² = −m₀²c². **Correct.**
- Quiz 3: answer index 1, 13.6 eV/c². **Correct.** See item 1 about "1.4" vs "1.45".
- Quiz 4: answer index 3, which is "16". 2³ × 2 = 16. **Correct.**
- Quiz 5: answer index 1, E = c|p⃗| for m₀ = 0. **Correct.** "True even for a classical EM wave" matches p. 12.
- Flashcards: all five are consistent with the transcript and with standard physics.

## Coverage and order
- The page follows the transcript order: review (pp. 1–3) → new topic and why radiation matters (pp. 4–5) → E = mc² numbers (pp. 5–6) → four-vector, invariant, γ, p and E (pp. 6–8) → why energy and momentum were redefined (pp. 8–9) → hydrogen binding (p. 9) → relativistic mass and gravity, including the Q&A (pp. 9–11) → ρ = u/c² and photons, E = c|p| and pressure foreshadowed (pp. 11–12) → n_γ ∝ 1/a³, the γ label, absorption and pair-creation Q&A (pp. 12–14) → redshift, E = hν, u ∝ 1/a⁴, ratio growing backwards (pp. 14–15). No segment is out of order.
- Left out, appropriately: course logistics (p. 4, lecture notes 6, quiz and video questions). The detailed review of Lecture 14 (pp. 1–3) is reduced to one clause, which is reasonable because a separate page covers it.
- Left out, minor: Guth's remark (p. 12) that the same 1/a⁴ result follows from classical Maxwell theory, with more work. It could be added in one sentence.
- Added, not in the lecture: the plot and the worked example. Both are original. The sentence "Run the film backwards and the ratio … grows as $1/a$" adds "as 1/a", which Guth does not state but which follows directly from 1/a⁴ ÷ 1/a³. That is fine.
- Not covered (on purpose): the 7.01e-14 J/m³ value at the bottom of p. 15 and everything after it. That material belongs on `matter-radiation-equality`.

## Licensing
- `grep -i "rights reserved\|courtesy"` finds nothing in either the transcript or the slides (s15). No third-party material is used.
- The text is rewritten. Short quoted phrases ("out of sight", "every which way") are standard or brief. The plot is generated from formulas. The worked example uses original numbers (Guth gives no numerical hydrogen example). No OpenStax or LibreTexts material was found.

## Notes
- **Callout / leadsTo.** "The second half of Lecture 15 uses these scalings to date the end of the radiation era and works out how pressure changes the Friedmann equations" is supported by the rest of Lecture 15 (rest.txt): equality at about 75,000 years (later about 47,000 years with Λ), the pressure/work argument, and the a-double-dot equation. "Lecture 16 then relates the radiation's energy density to its temperature: black-body radiation" is supported by the Lecture 16 transcript (t16.txt, around line 770): u = g (π²/30)(kT)⁴/(ħc)³ with g = 2 for photons, derived from black-body / harmonic-oscillator statistical mechanics. The leadsTo `why` is **correct**.
- The intro's "the most famous equation in physics" paraphrases p. 5 ("perhaps the most famous equation physics"). Fine.
- "In general relativity's own language: the energy density is the source of gravity" matches p. 11. It is a simplification (in GR, pressure also gravitates, as the next page shows), and the page's own forward reference to pressure covers this.
- Prerequisites `cosmological-redshift` and `falling-into-a-black-hole` both exist.
- I did not run `npm run content:check` (the review must not edit the page, and checking is the author's step).
- No errors found. Status can move to `reviewed` once the author has considered the info items (none is required).

## Resolution (2026-11-14, by the page author)

- Quiz 3's explanation now says 1.45 parts in 10^8, matching the worked example.
- The p. 7 note now names the slip: an extra factor of c inside the bracket, −(m₀c²)².
- "The latest year Guth found figures for" now reads "the latest year Wikipedia had figures for when Guth looked".
- Added that two-photon pair creation has a rather small cross section.
- Added Guth's p. 12 remark that classical Maxwell theory gives the same 1/a⁴ result, with more work.
