---
page: content/year-0/hs-6/capacitors.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap5capacitance/ (read: lecture-notes PDF 99407b81a217613e8ddec21dc3da07de_chap5capacitance.pdf, extracted to text; Secs. 5.1, 5.2, 5.4, 5.5 checked line by line)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch3electri_poten/ (listed as reading1 but never cited on the page; V = Ed checked against lesson 6.4, which cites Ch. 3 Eq. 3.2.1)
  - docs/HIGHSCHOOL-PLAN.md rows for 6.5 (read)
  - content/year-1/8.02/conductors-and-capacitors.mdx and capacitors-and-dielectrics.mdx (read, for leadsTo)
verdict: pass-with-notes
---

# Review: Capacitors

No errors found. Every formula citation matches the MIT 8.02T Chapter 5 notes, every number and quiz answer recomputes, and no forbidden source is used. The findings below are two presentation fixes and some clarity points.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "How large is one farad?", step "Rearrange" | (arithmetic) | `1.0 × 0.0010/8.85 × 10^{-12}` | As written this reads (0.0010/8.85) × 10⁻¹² = 1.1 × 10⁻¹⁶, not 1.1 × 10⁸. Bracket the denominator, `1.0 × 0.0010/(8.85 × 10^{-12})`, as the field check in the previous example already does. Update the calcs `shown` string of `farad-area` to match. |
| 2 | warning | "Energy stored in a capacitor", paragraph 1 | MIT Eq. (5.4.1): dW = \|ΔV\| dq with \|ΔV\| = q/C, summed over the charge | "Over the whole charging the voltage rises steadily from 0 to its final value V, so on average the charge is carried across ½V" | "Rises steadily" can be read as "evenly in time", which is not true in a real circuit (it levels off). The ½ comes from V growing in proportion to the charge already moved. Say e.g. "the voltage grows in step with the charge, from 0 to V, so on average each bit of charge is carried across ½V". |
| 3 | info | "Field between the plates" Formula | Eq. (5.2.3) is \|ΔV\| = Ed | E = V/d | Same relation rearranged; fine. Optionally `at="Eq. (5.2.3), rearranged"`. |
| 4 | info | Frontmatter `source.readings` | | reading1 (Ch. 3, Sec. 3.2) is listed but no `<Formula>` cites it | Either cite it on the "Field between the plates" formula (`cite="reading1" at="Eq. (3.2.1)"`, where V = Ed comes from) or drop the reading. |
| 5 | info | Dielectrics, "Why larger?" | Sec. 5.5 describes polar molecules that line up and non-polar molecules with induced dipoles | Only the induced picture (electrons shift) | Fine at VWO level; the 8.02 Lecture 8 leadsTo covers alignment. No change needed. |
| 6 | info | Energy section, "A stretched spring stores ½kx²" | | `k` is the spring constant here, while two sections earlier `k = 1/(4πε₀)` | data/symbols.json has one combined meaning scoped to `capacitors`, so content:check is satisfied. Two different `k`s on one page may confuse a beginner; consider writing the spring energy in words, or accept. Spring energy itself is earlier (hs-5 the-pendulum). |
| 7 | info | Cosmology callout, last sentence | | "In the early universe most of the energy was in light of this kind." | True for roughly the first tens of thousands of years (radiation era). Adding that time span, as the 8.02 page does, makes the claim exact. |
| 8 | info | Plot, slider A | | A up to 0.08 m², range [0, 800] pF | At A = 0.08 the curve exceeds 800 pF for d < 0.89 mm and is cut off at the top. Raise `range` to [0, 1500] or lower the A maximum, if it matters. |

## Formulas and citations
All checked against the extracted text of chap5capacitance.pdf.
- `Q = CV`, Eq. (5.1.1): MIT writes Q = C\|ΔV\|; the page says so. Correct.
- `1 F = 1 C/V`, Sec. 5.1: unnumbered line just after (5.1.1). Correct. MIT also gives "picofarad to millifarad" as the typical range, matching the flashcard and summary.
- `E = V/d`, Eq. (5.2.3): (5.2.3) is \|ΔV\| = Ed, rearranged. Correct (see #3).
- `E = Q/(ε₀A)`, Eq. (5.2.1) "with the charge per square metre written as Q/A": (5.2.1) gives E = σ/ε₀. Correct.
- `C = ε₀A/d`, Eq. (5.2.4). Correct. The explanation of why A and d matter follows the remark under (5.2.4) in the page's own words.
- `U = ½QV = ½CV² = Q²/(2C)`, Eqs. (5.4.1) and (5.4.2): (5.4.1) gives W = Q²/2C, (5.4.2) all three forms. Correct.
- `C = κC₀`, Eq. (5.5.1), κ written κₑ in the notes. Correct.
- Callout ½ε₀E² × Ad, Eqs. (5.4.3) and (5.4.4). Correct.
- Dielectric table (Sec. 5.5): air 1.00059, paper 3.7, glass 4 to 6, water 80 (the pdftotext output jumbles the rows, but the column layout is unambiguous). Page matches; 1.0006 is the correct rounding.
- ε₀ = 8.85 × 10⁻¹² (block constant) matches Eq. (5.4.7). F/m is equivalent to MIT's C²/(N m²).
- calcs `quiz-dielectric-battery` cites Eqs. (5.5.1) and (5.5.17): Sec. 5.5.3 ("Dielectrics with Battery", Eqs. 5.5.16 to 5.5.17) is exactly the battery-connected case. Correct.
- Everyday-use claims (writer's flag): MIT Sec. 5.1 lists storing energy, filtering and resonant circuits, which supports "flashes", "smoothing" and "tuning" in general terms. DRAM (one capacitor per bit), capacitive touch screens and defibrillator energies (typically about 150 to 360 J, in a pulse of a few to about 20 ms) are standard and correct, but no cited source states them. Acceptable as standard knowledge; I did not find them in any §2.0 source during this review. Camera-flash values (220 µF, 330 V, about 1 ms) are realistic.
- "The other half is turned into heat in the wires": correct physics for charging from an ideal battery through any resistance; not in Ch. 5, standard.

## Arithmetic and answer checks
Recomputed independently:
- Quiz 0: 3.0e-4/6.0 = 5.0e-5 F = 50 µF; answer 1 correct. Distractors QV = 1.8e-3, V/Q = 2.0e4, 5.0 µF (power-of-ten slip) are all wrong.
- Quiz 1: C ∝ 1/d, half gap doubles C; answer 2 correct.
- Quiz 2: U ∝ V², × 9; answer 1 correct; explanation correct.
- Quiz 3: battery connected, C × κ at fixed V, Q × 3; answer 0 correct (MIT Sec. 5.5.3).
- Quiz 4: +5 µC and −5 µC, net zero; answer 3 correct (MIT Sec. 5.1).
- 470 µF × 9.0 V = 4.23e-3 → 4.2e-3 C; × 4.5 V = 2.115e-3 → 2.1e-3 C. Correct.
- A = 0.20² = 0.040 m²; C = 8.85e-12 × 0.040/0.0010 = 3.54e-10 F ≈ 350 pF; Q = 4.248e-9 → 4.2 nC; E = 12/0.0010 = 1.2e4 V/m; check 4.25e-9/3.54e-13 = 1.20e4 V/m. Correct.
- 1 F at 1.0 mm: A = 1.130e8 m² = 113 km² ("more than 100 km²"); side √1.13e8 = 10.6 km ≈ 11 km. Correct (bracketing in #1).
- Flash: ½ × 220e-6 × 330² = 11.98 J → 12 J; 12/0.0010 = 1.2e4 W = 12 kW. Correct.
- Paper: 3.7 × 3.54e-10 = 1.310e-9 → 1.3 nF; × 12 = 1.572e-8 → 1.6e-8 C, = 3.7 × 4.25e-9. Correct.
- Callout identity ½(ε₀A/d)(Ed)² = ½ε₀E²Ad. Correct.
- Plot: d in mm, C in pF, ε₀A/(d × 10⁻³) F = 8850 A/d pF. Correct; default A = 0.04 gives 708 pF at d = 0.5 mm, inside the range.
- Every number on the page is in calcs/hs-6/capacitors.yaml with the right value. I did not run `npm run calc:test`.

## Only earlier terms
- Charge, conductor and insulator, polarization (balloon and wall): 6.1 electric-charge. Yes.
- Field lines from + to −, uniform field between plates: 6.3 electric-field. Yes.
- Voltage, V = Ed, E = V/d, V/m: 6.4. Yes.
- k = 1/(4πε₀): 6.2 coulombs-law mentions it. Yes.
- Work, power: hs-3 `work` and `power` (other PC's block; in its lesson list). Counts as introduced.
- Spring energy ½kx²: hs-5 the-pendulum. Yes (not a listed prerequisite; fine for an aside).
- Light as an electromagnetic field: labelled forward reference to 6.12. Fine.
- "current" ("while the current flows"), "alternating voltage", "coil": current comes in 6.6, coils in 6.11, AC not in this block's list. Used only descriptively; acceptable (info).
- Gauss's law named only as a university topic. Fine.

## Coverage
- Plan row "Plate area, gap, charge and stored energy" (PhET capacitor-lab-basics): all covered, plus dielectrics and energy in the field. Good VWO level.
- Not covered: capacitors in series and parallel, charging and discharging over time. Both beyond the row; series/parallel goes to 8.02 Lecture 8 via leadsTo. Does not matter here.

## Where this leads
- 8.02 Lecture 7 (conductors-and-capacitors): Gauss's-law field, sphere and cylinder capacitors, u_E = ½ε₀E². Matches. Correct.
- 8.02 Lecture 8 (capacitors-and-dielectrics): series/parallel and dielectrics with aligned dipoles. Matches. Correct.
- `towards: false` correct (6.5 is not the block's last lesson).

## Licensing and AI terms
- No sentence copied; the closest parallels (net charge zero, "a bigger plate can hold more charge") are rewritten.
- MIT Ch. 5 has no "All rights reserved", "Courtesy of" or "excluded from our Creative Commons license" notice (grep of the full text). No MIT figure used; the only graph is a generated Plot.
- Worked examples and quiz questions are original; MIT's examples are cylinders, spheres, dry-air energy density and a spherical shell.
- PhET capacitor-lab-basics 1.6.41 is in public/phet/manifest.json; the "Try it" text matches the sim (capacitance, energy, light bulb).
- No Siyavula branding; no OpenStax, Khan, CK-12, IOPSpark, Wikiwijs, Wikipedia, Feynman or Tong material used or fetched. No em dashes on the page.

## Notes
- Writer's "2C" question: `\frac{Q^2}{2C}` displays clearly as a fraction and the summary's inline `Q^2/(2C)` has brackets. Read-aloud (texToSpeech run on the actual tex) says "Q squared over 2 C", and with the engine option "… over 2 see", so it is not heard as "2 coulombs". No change needed.
- Read-aloud of `1\ \text{F} = 1\ \text{C/V}` gives "1 F equals 1 coulombs per volt" (engine: "1 eff …"): the farad is not written out and "coulombs" is plural after 1. A lib/speech.ts unit-rule issue, not a page error.

## Resolution (2026-11-20, by the page author)

1. Fixed. "How large is one farad?", step "Rearrange" now reads 1.0 × 0.0010/(8.85 × 10^{-12}), with the denominator in brackets; the calcs `shown` string of `farad-area` is updated to match.
2. Fixed. Energy section, paragraph 1 now says the voltage grows in step with the charge already moved, from 0 to V, so on average each bit of charge is carried across ½V. The flashcard "Energy stored in a capacitor" no longer says "rises steadily" either.
3. Resolved with #4: the "Field between the plates" formula E = V/d now cites reading1 at "Eq. (3.2.1), its size rearranged" (checked in the local text of MIT 8.02T Ch. 3: Eq. (3.2.1) is ΔV = -E0 d for a uniform field).
4. Fixed: reading1 is now cited (see #3), so it stays in `source.readings`.
5. No change, as the review suggests: the induced picture is enough at VWO level, and the 8.02 Lecture 8 leadsTo covers molecules lining up.
6. Fixed. The spring comparison is now in words ("a stretched spring stores half of its final force times the stretch, for the same reason"), so the page no longer uses k for a spring constant or x for a stretch. The symbol k on this page needs only the Coulomb-constant meaning, and x must lose this page (symbol changes handed to the maintainer of data/symbols.json).
7. Fixed. The callout's last sentence now reads "For the first tens of thousands of years of the universe, most of its energy was in light of this kind."
8. Fixed. Plot `range` raised to [0, 1500] pF: the largest value on the slider, A = 0.08 m² at d = 0.5 mm, is 8850 × 0.08/0.5 = 1416 pF, which now fits.

Notes (not findings): the read-aloud of Q²/(2C) is fine, no change. The read-aloud of "1 F = 1 C/V" ("1 F ... 1 coulombs per volt") is a unit rule in lib/speech.ts, not a page error; left for a change to lib/speech.ts outside this lesson.

Checks: `npm run calc:test -- -k capacitors`: 51 passed. `npm run content:check`: no error for the page itself; the only capacitors error left is in data/symbols.json (x scoped to "capacitors", which no longer uses it), cleared once x loses this page; warnings only for the planned prerequisites "work" and "power" (other PC's block).
