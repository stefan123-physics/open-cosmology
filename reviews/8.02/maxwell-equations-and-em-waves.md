---
page: content/year-1/8.02/maxwell-equations-and-em-waves.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte13em_waves/ (read: local copy chapte13em_waves.pdf/.txt supplied by the author; printed page number = PDF page − 1, checked with pdftotext -f N -l N on PDF pages 2–12 and 15–18)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w12d2-1/ (read: local copy presentati_w12d2-1.pdf/.txt, 33 pages; slide number = "P28- N" label = PDF page)
  - content/year-4/8.286/black-body-radiation.mdx and content/year-4/8.286/_course.json (read, for the leadsTo check)
  - calcs/8.02/maxwell-equations-and-em-waves.yaml (read; `npm run calc:test -- -k maxwell-equations`: 10 passed)
verdict: needs-changes
---

# Review: Displacement current, Maxwell's equations and light

Citation convention checked: `reading1` = Course Notes Chapter 13, cited by printed page number (PDF page − 1); `reading2` = Session 28 slides, slide = PDF page. `cite="mit"` is not used.

Notes page map (printed pages): p. 1 = end of contents; p. 2 = Section 13.1 opens, Eqs. 13.1.1–13.1.2, the charging capacitor, Figure 13.1.1; p. 3 = surfaces S1/S2 ambiguity, Eq. 13.1.3 (displacement current), Eq. 13.1.4 (Ampère–Maxwell), Eqs. 13.1.5–13.1.6; p. 4 = I = I_d conclusion, Section 13.2 (Gauss for magnetism, no monopoles, Eqs. 13.2.1–13.2.2), Section 13.3 heading; p. 5 = table of the four equations, differential forms Eq. 13.3.1, source-free forms Eq. 13.3.2, waves from the coupling, Hertz 1887; p. 6 = Section 13.4, plane wave along +x with E along y and B along z, transverse, direction E × B, Faraday loop in xy, Eq. 13.4.1; p. 7 = Eqs. 13.4.2–13.4.6 (incl. 13.4.5); p. 8 = Eqs. 13.4.7–13.4.13 (incl. 13.4.9); p. 9 = Eqs. 13.4.14–13.4.15 (2.997 × 10⁸ m/s), Figure 13.4.4 spectrum, 13.4.1 begins; p. 10 = Eqs. 13.4.17–13.4.23 (cos(kx − ωt) solutions); p. 11 = in phase, E₀/B₀ = c (13.4.26), E/B = c (13.4.27), property list; p. 14 = Section 13.6 opens; p. 15 = Eqs. 13.6.1–13.6.7 (incl. 13.6.5); p. 16 = Eqs. 13.6.8–13.6.12 (intensity), Example 13.1 statement; p. 17 = Example 13.1 solution (1.01 × 10³ V/m, 3.4 × 10⁻⁶ T, 3.8 × 10²⁶ W), Eq. 13.6.13 (1/r²).

Slide map: 1 outline; 2 "Bringing it all together"; 3 title; 4 Ampère's law for a charging capacitor (two Amperian surfaces); 5 displacement current; 6 Maxwell–Ampère law; 7 PRS; 8 title; 9 E and B sources review, Lorentz force; 10 Maxwell's equations + Lorentz force; 11–14 radiation titles and visualisations; 15 f(x − vt); 16–18 travelling sine wave; 19 spectrum, f λ = c; 20 visualisation; 21 PRS; 22 group work; 23 properties (c, in phase, E/B = c, transverse); 24 direction of propagation table; 25 PRS; 26 in-class problem; 27 title; 28 energy in EM waves; 29 Poynting vector and intensity; 30 resistor (S inward); 31 PRS; 32 inductor, increasing current (inward); 33 inductor, decreasing current (outward).

The five formulas:
- "Displacement current" (`reading1`, "Eq. (13.1.3), p. 2"): equation correct, page wrong; Eq. 13.1.3 is on printed p. 3 (table, #1).
- "Ampère–Maxwell law" (`reading1`, "Eq. (13.1.4), p. 2"): physics correct (MIT writes μ₀I; slide 6 writes I_encl, as the page does); page wrong, p. 3 (#1).
- "Maxwell's equations" (`reading2`, "slide 10"): correct; all four equations are on slide 10 in this form (Q_in/ε₀).
- "Fields of a plane wave" (`reading1`, "Eqs. (13.4.5) and (13.4.9), pp. 7–8"): correct. Signs checked: ∂E_y/∂x = −∂B_z/∂t (13.4.5, p. 7) and −∂B_z/∂x = μ₀ε₀ ∂E_y/∂t (13.4.9, p. 8). Loop planes (xy for Faraday, xz for Ampère–Maxwell) match the notes.
- "Speed of electromagnetic waves" (`reading1`, "Eq. (13.4.15), p. 9"): citation correct; the number reproduces an MIT rounding slip (#5).
- "Poynting vector" (`reading1`, "Eq. (13.6.5), p. 15"): correct.
- "Intensity" (`reading1`, "Eq. (13.6.8), p. 15"): equation correct (matches 13.6.8 and slide 29); page wrong, p. 16 (#2).

Internal links `/courses/8-02/ampere-law`, `/courses/8-02/gauss-law`, `/courses/8-02/faradays-law` and `/courses/18-02/div-curl-and-maxwell` point to existing pages; prerequisites `driven-rlc-circuits` and `faradays-law` exist. No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The displacement current": in-text "(course notes, Section 13.1, pp. 1–2; slide 4)" and formulas "Displacement current" and "Ampère–Maxwell law" `at="Eq. (13.1.3), p. 2"`, `at="Eq. (13.1.4), p. 2"` | Section 13.1 runs printed pp. 2–4; the ambiguity (S1/S2) is pp. 2–3; Eqs. 13.1.3 and 13.1.4 are both on p. 3; p. 1 is the table of contents | pp. 1–2; p. 2 | "(Section 13.1, pp. 2–3; slide 4)"; `at="Eq. (13.1.3), p. 3"` and `at="Eq. (13.1.4), p. 3"`. Also the two "(pp. 2–3)" mentions in this section: Eqs. 13.1.5–13.1.6 are p. 3 and the conclusion I = I_d runs onto p. 4, so "pp. 3–4" is more exact. The page numbers look like PDF page − 2 here, whereas Section 13.4 is cited correctly. |
| 2 | error | "Energy and the Poynting vector": formula "Intensity" `at="Eq. (13.6.8), p. 15"`, in-text "(p. 15; slide 29)", "(Eq. 13.6.13, p. 16)" | Eq. 13.6.8 is on printed p. 16; Eq. 13.6.13 on p. 17; Example 13.1 starts on p. 16, its numbers are in the solution on p. 17 | p. 15; p. 16; "Example 13.1, p. 16" | `at="Eq. (13.6.8), p. 16"`, "(p. 16; slide 29)", "(Eq. 13.6.13, p. 17)", "(Example 13.1, pp. 16–17)". Update the `source.at` of the laser entries in the calcs file (Eq. 13.6.8 p. 15 → p. 16) and of the solar entries likewise. |
| 3 | error | "Maxwell's equations": "In integral form (course notes, Section 13.3, p. 4; slide 10)"; "Gauss's law for magnetism (no monopoles, p. 3)"; "(Eq. 13.3.1, p. 4)" | Section 13.3 heading is at the foot of p. 4, the table of the four laws and Eq. 13.3.1 are on p. 5; Gauss's law for magnetism (Section 13.2, Eq. 13.2.2) is on p. 4 | p. 4, p. 3, p. 4 | "(Section 13.3, pp. 4–5; slide 10)", "(no monopoles, Section 13.2, p. 4)", "(Eq. 13.3.1, p. 5)". |
| 4 | warning | "Electromagnetic waves", **Properties** "(slides 23–24; Section 13.4, pp. 6, 10)" | In phase, E₀/B₀ = c and E/B = c are on p. 11 (Eqs. 13.4.26–13.4.27) and the property list starts on p. 11 | pp. 6, 10 | "pp. 6, 10–11". |
| 5 | error | Formula "Speed of electromagnetic waves": `= 2.997 \times 10^8\ \text{m/s}` | Eq. 13.4.15 prints 2.997 × 10⁸ m/s from μ₀ = 4π × 10⁻⁷ and ε₀ = 8.85 × 10⁻¹² | Repeats 2.997 × 10⁸ | From MIT's own constants, 1/√(μ₀ε₀) = 2.9986 × 10⁸ m/s (≈ 2.999 × 10⁸); the defined value is 2.99792458 × 10⁸ (≈ 2.998 × 10⁸). 2.997 is neither; it looks like a truncation, i.e. an MIT slip (writing rule 4). Write "≈ 3.00 × 10⁸ m/s" or "2.998 × 10⁸ m/s", with a short bracket if desired "(the notes print 2.997 × 10⁸)". The calcs entry passes only because of its 0.1 % tolerance: change `expected` to the corrected value and tighten the tolerance (e.g. 0.02 %). |
| 6 | info | "Electromagnetic waves": "so are radio waves, microwaves, infrared, ultraviolet, X-rays and gamma rays … (p. 9)" | p. 9 text only says the spectrum is shown in Figure 13.4.4; the band names are in the figure | List of bands cited to p. 9 | Fine as general knowledge, and the figure is not reproduced (good). Optionally cite slide 19 or drop the page reference. |
| 7 | info | "The displacement current": "a loop around the wire just outside the plate" | Slide 4: field "just above the top plate"; notes: curve C around the wire | Same situation | No change needed. |
| 8 | info | "Maxwell's equations": first sentence | Slide 9 lists sources of E and B as bullet points | Close paraphrase of the slide's list | Facts in a list; acceptable, not verbatim beyond standard terms. |

## Arithmetic and answer checks
- Speed of light: 1/√(4π × 10⁻⁷ × 8.85 × 10⁻¹²) = 2.9986 × 10⁸ m/s, not 2.997 × 10⁸ (see #5).
- Example 13.1 (MIT's numbers): E₀ = √(2 × 1350 / (3.0 × 10⁸ × 8.85 × 10⁻¹²)) = 1008 V/m ≈ 1.01 × 10³ V/m. Correct. B₀ = 1008 / 3.0 × 10⁸ = 3.36 × 10⁻⁶ ≈ 3.4 × 10⁻⁶ T. Correct. 1/r² law: Eq. 13.6.13. Correct.
- Worked example (a): B = μ₀I_d/2πR = (2 × 10⁻⁷)(2)/0.05 = 8.0 × 10⁻⁶ T. Correct (assumes a uniform field between the plates, no fringing; a circle of radius R between the plates encloses all of I_d). "At the edge of the plates" could say "between the plates, at radius R" to be unambiguous (info).
- Worked example (b): I = 10⁻³ W / 10⁻⁶ m² = 1000 W/m². Correct. E₀ = √(2 × 1.2566 × 10⁻⁶ × 2.998 × 10⁸ × 1000) = √(7.535 × 10⁵) = 868.0 V/m. Correct. B₀ = 868 / 2.998 × 10⁸ = 2.895 × 10⁻⁶ ≈ 2.9 × 10⁻⁶ T. Correct.
- Worked example (c): λ = 2.998 × 10⁸ / 10⁸ = 2.998 ≈ 3.0 m. Correct. k = 2π/λ: with λ = 2.998 m, k = 2.0958 ≈ 2.10 rad/m; with the rounded λ = 3.0 m, k = 2.094 ≈ 2.09. The page writes 2.09 after giving c = 2.998 × 10⁸, so it mixes the two (warning-level rounding inconsistency): write "k = 2π/λ ≈ 2.10 rad/m", or state λ = 3.0 m and keep 2.09. The calcs entry (expected 2.09, tolerance 0.3 %) passes by 0.28 %, which hides this; adjust together.
- Quiz 1: answer 1 (changing E field / displacement current). Correct; explanation correct (between the plates μ₀ε₀ dΦ_E/dt = μ₀I).
- Quiz 2: answer 1 (perpendicular, in phase, E = cB). Correct (notes p. 11, slide 23). The distractor "a quarter cycle apart" describes the standing wave of Section 13.5 (p. 14), a good distractor.
- Quiz 3: answer 1 (1/√(μ₀ε₀)). Correct; "≈ 3.00 × 10⁸ m/s, the same for every frequency" correct for vacuum.
- Flashcards: displacement current and Ampère–Maxwell correct; four Maxwell equations correct (slide 10); Poynting/intensity E₀B₀/2μ₀ = E₀²/2μ₀c correct (13.6.8).
- Physics checks requested: displacement current derivation (Φ_E = EA = Q/ε₀, so ε₀ dΦ_E/dt = dQ/dt = I) matches Eqs. 13.1.5–13.1.6 and slide 5. Wave-derivation signs match 13.4.5 and 13.4.9. Poynting directions: resistor inward (slide 30), inductor inward while the current increases (slide 32), outward while it decreases (slide 33). All correct.
- `npm run calc:test -- -k maxwell-equations`: 10 passed (but see #5 and the k entry about tolerances that mask the slips).

## Coverage and order
- The page follows the slide order: displacement current (slides 3–6), Maxwell's equations (8–10), travelling waves (15–19), properties of EM waves (23–24), energy and Poynting vector (27–29), energy flow into a resistor and inductor (30, 32–33). Notes material is inserted at the matching points (13.1, 13.2 briefly, 13.3, 13.4, 13.6).
- Left out (acceptable): PRS questions, group work and the in-class problem (slides 7, 21, 22, 25, 26, 31); the visualisations on slides 11–14 and 20 ("A question of time", creating radiation). The page does not say how radiation is produced (slide 12's visualisation; notes 13.8), which belongs to a later session; fine.
- Slide 24 (general direction p̂ with Ê × B̂ table) is reduced to "the direction of E × B"; adequate.
- Notes 13.4.1 (proof that f(x − vt) solves the wave equation, superposition) is only touched via slide 15 (info). Section 13.5 (standing waves) and 13.6.1 (energy transport), 13.7 (radiation pressure) are outside the declared reading location "Sections 13.1–13.4, 13.6" and outside this session's slides; fine. The power of the Sun (Example 13.1 b, 3.8 × 10²⁶ W) is omitted (info; could be a nice addition with the 1/r² remark).
- Nothing added that MIT does not support, apart from the 18.02 link and the cosmology callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the Chapter 13 notes text, the Session 28 slides text, or the two saved OCW HTML pages (grep: none).
- No figures are reused; the page has no images, and the electromagnetic spectrum (notes Figure 13.4.4, slide 19) is not reproduced.
- No verbatim copying found beyond standard terms ("displacement current", "Ampère–Maxwell law", "solar constant"). Example 13.1 is quoted as MIT's example with attribution, which is fine.
- The worked example is original: own numbers (5 cm plates, 2 A; 1 mW laser on 1 mm²; 100 MHz radio). The notes' solved problem 13.12.3 uses a charging circular-plate capacitor but asks about the Poynting vector and energy, with symbols only; no copying.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: claims are correct and fairly stated. The CMB is electromagnetic radiation left over from the hot early universe; 1/r² underlies standard-candle distances; 8.286 Lecture 16 (content/year-4/8.286/black-body-radiation.mdx, lecture: 16 in `_course.json`) treats cavity radiation as electromagnetic modes (harmonic oscillators) in equilibrium and derives u = g (π²/30)(kT)⁴/(ħc)³. The leadsTo "why" ("energy density and spectrum follow from treating it as electromagnetic waves in equilibrium") matches that page. Small nuance (info): the 8.286 page needs quantum statistics as well as the wave picture; "treating it as electromagnetic waves in thermal equilibrium, with quantum statistics" would be more exact, optional.
- "Standard candles" are not linked; if an 8.286 page covers them, a link would help (optional).
- `source.url` equals the `reading2` URL (the slides), consistent with the other 8.02 pages.
- Summary in frontmatter and the `## Summary` section are accurate.
- Main fixes needed: notes page numbers in Sections 13.1–13.3 and 13.6 (#1–#4) and the 2.997 × 10⁸ slip (#5), with matching calcs updates; the k ≈ 2.09 rounding is a minor fix.

## Resolution (2026-11-16, by the page author)

- Errors 1–3: notes page numbers corrected (Section 13.1 pp. 2–4, Eqs. 13.1.3–13.1.4 on p. 3; Maxwell's equations table and Eq. 13.3.1 on p. 5, no monopoles on p. 4; Eq. 13.6.8 on p. 16, Example 13.1 pp. 16–17, Eq. 13.6.13 on p. 17), in the page and the calcs file.
- Error 4: c is now ≈ 2.998 × 10⁸ m/s, with a bracket noting the notes' 2.997; the calcs entry checks 2.998 with a tight tolerance.
- Warnings: the properties paragraph cites pp. 6, 10–11; the radio wave number is now 2.10 rad/m.
