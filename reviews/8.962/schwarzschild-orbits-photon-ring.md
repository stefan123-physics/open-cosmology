---
page: content/year-5/8.962/schwarzschild-orbits-photon-ring.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-23-black-holes-ii/ (read: lecture page; transcript link and CC BY-NC-SA 4.0 notice confirmed)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/7ed0f53936bf28b5578be29776d6bb9c_uNWqE3LS1E.pdf (read, as local pdftotext copy L23.txt / L23.pg.txt; 18 PDF pages, no printed footer numbers, so PDF page = cited page)
  - https://arxiv.org/abs/1906.11238 (not opened; cited only for the 2019 announcement date, which is correct)
verdict: needs-changes
---

# Review: Orbits around a black hole: effective potentials, the innermost stable orbit and the photon ring

Lecture 23 has no slides or notes; Hughes writes on the board, so every equation is rebuilt from what he says. I checked each `<Formula>` by deriving it from the Schwarzschild metric with signature (-,+,+,+), c = 1 and G kept, and checked each page citation against the page markers in the transcript.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The innermost stable circular orbit", first paragraph | p. 11: "as the orbits radius gets smaller and smaller, your stable orbit tends to go up, and this minimum sort of becomes flatter, and your unstable orbit just kind of comes down." This is a slip. As L̂ (and so the stable radius) decreases, the value of V_eff at the minimum goes **down**: L̂/GM = 4.5, 4.2, 4.0, 3.8, 3.6, √12 gives V_min = 0.944, 0.934, 0.926, 0.916, 0.902, 0.889. The circular-orbit Ê falls monotonically to its minimum of 0.943 at 6GM, which is why 5.7% gets radiated. The maximum falls faster (1.139 → 0.889), so the well gets shallower. | "the minimum (stable orbit) rises and flattens and the maximum (unstable orbit) comes down". This repeats the slip and contradicts the page's own plot (minimum 0.926 at L̂ = 4GM, merger at 0.889) and its own 5.7% argument. | Say instead: "the minimum moves inward and becomes shallower, and the maximum comes down faster, until they merge." Add a bracketed note: [Hughes says the stable orbit "tends to go up"; in fact the minimum of V_eff falls slightly as L̂ decreases, but the maximum falls faster.] |
| 2 | info | "The ring the Event Horizon Telescope saw" | p. 17: "We expect to see a ring whose radius is twice the critical impact parameter. So it would have a diameter of 6 root 3 GM ... radius 3 root 3 GM." The first sentence is a slip ("radius" for "diameter"), which he corrects in the next two sentences. | Gives the correct radius 3√3 GM and diameter 6√3 GM with no note. | Optional: add it to the existing bracketed note on slips ("he also calls the ring's radius twice the critical impact parameter, then gives the correct diameter 6√3 GM"). It is not required, because Hughes corrects himself at once. |
| 3 | info | Photon section, rescaling | p. 14 transcript reads "let's take lambda-- so L divided by lambda" (garbled transcription). | λ̃ = Lλ | The page is right: dividing (dr/dλ)² = E² − (1 − 2GM/r)L²/r² by L² needs dλ̃ = L dλ. No change needed. |
| 4 | info | Bracketed slip note under the three photon cases | p. 16: "The critical point, b equals 3 GM" and "If b is less than 1 over 3 root 3 GM, then 1 over b squared will be higher than this peak". | Notes both slips and gives the correct values. | Both slips are real and correctly described ("he means 1/b² above the peak" is a fair reading). The other self-corrections (p. 6 "positive and inward ... negative"; p. 16 "less than V phot everywhere, excuse me, greater") are fixed in the lecture itself, so no note is needed. No change. |
| 5 | info | Quiz 3, correct choice | pp. 10–11: Hughes credits only the areal radial coordinate. | "Mostly because of what r and t mean ... t is the time of distant observers". | Adding t is correct physics (Ω is defined with Schwarzschild t, p. 9) and is a fair extension. Optional: say "mostly because of what r means, with t the time of distant observers". |
| 6 | info | Cosmology callout | Lecture 19 page derives 1 + z = 1/a with a **Killing tensor** K = a²(g + UU), not a Killing vector. | "The same conserved-quantity method that gave 1 + z = 1/a in Lecture 19" | Fair (a quantity conserved along a geodesic from a symmetry), but "the same" slightly overstates it. Optional: "A close relative of this method (a Killing tensor instead of a Killing vector) gave 1 + z = 1/a ...". |

## Arithmetic and answer checks
I recomputed all of these independently in Python. G = 6.674e-11, M_sun = 1.989e30 kg, c = 2.998e8 m/s.
- Radial equation: substituting dt/dτ = Ê/(1 − 2GM/r) and dφ/dτ = L̂/r² into −(1 − 2GM/r)ṫ² + ṙ²/(1 − 2GM/r) + r²φ̇² = −1 gives ṙ² = Ê² − (1 − 2GM/r)(1 + L̂²/r²). Correct.
- Circular orbits: dV_eff/dr = 0 gives L̂² = GMr²/(r − 3GM) = GMr/(1 − 3GM/r). Correct. Then Ê² = V_eff gives Ê = (1 − 2GM/r)/√(1 − 3GM/r). Correct. The large-r expansion (1 − 2x)(1 + 3x/2) ≈ 1 − x/2 gives 1 − GM/2r. Correct.
- Ω = (L̂/r²)(1 − 2GM/r)/Ê = ±√(GM/r³). Correct.
- r_ms: L̂² = 16 gives r² − 16r + 48 = 0, so r = 4 and 12. Merger when the discriminant vanishes: L̂² = 12, r = 6. Correct.
- Plot 1: V_eff(4; L̂ = 4) = 1, V_eff(12; L̂ = 4) = 0.9259, V_eff(6; L̂² = 12) = 0.8889, √12 = 3.46. All correct.
- Photon equation: from p·p = 0, ṙ² = E² − (1 − 2GM/r)L²/r². Correct. V_phot′ = 0 at r = 3GM, and V_phot(3GM) = (1/3)/9 = 1/27 (GM)⁻² = (1/(3√3 GM))². Correct. 3√3 = 5.196. 1/27 = 0.0370.
- Worked example: GM_sun/c² = 1477 m, so 10 M_sun gives 14 770 m and r_ms = 88.6 km. f = c³/(2π·6^1.5·GM) = 219.8 Hz ≈ 220 Hz, and the GW frequency is 440 Hz (quadrupole, twice the orbital frequency). For 4e6 M_sun, f = 5.50e-4 Hz and the period is 30.3 min. Ê(6GM) = (2/3)/√(1/2) = 0.9428, and 1 − Ê = 0.0572 = 5.7%. Fusion of H to He releases 0.7% (correct, 0.71%), so "several times" (about 8 times) is right.
- Quiz 1: 2GM = 29.5 km, 3GM = 44.3 km, 6GM = 88.6 km. Answer index 2 is correct.
- Quiz 2: 5.7%, index 1, correct. The 42% distractor is the extremal-Kerr figure, which is fine as a distractor.
- Quiz 3: index 1 is correct (see note 5).
- Quiz 4: b = 5GM < 5.196GM, and 1/25 = 0.040 > 0.037, so the ray is captured. Index 1 is correct.
- Flashcards: all match the checked formulas.
- Plot 2: the slider runs b/GM from 4 to 9, but the y-range stops at 0.05, so for b < 4.47 the 1/b² line (≥ 0.05) is off the plot. This is cosmetic (info). A range up to 0.065, or a slider minimum of 4.5, would keep the line visible.
- The calcs file covers every number above. I did not run `npm run calc:test`.

## Coverage and order
- The page follows the lecture's order: motivation and the "turn the crank" approach (pp. 1–2), three symmetries (pp. 2–3), conserved p_t and p_φ (pp. 3–4), normalisation and V_eff (pp. 5–6), scattering, eccentric and circular orbits and their stability (pp. 6–8), circular L̂ and Ê (pp. 8–9), Ω and Kepler (pp. 9–11), r_ms = 6GM and accretion disks, with the Kerr remark (pp. 11–13), photon orbits, b and V_phot (pp. 13–15), the meaning of the impact parameter (pp. 15–16), the three cases and the photon orbit (pp. 16–17), and the EHT ring and Kerr shadow (pp. 17–18).
- Omitted: the remark that Carroll lists the Christoffel symbols (eq. 5.53), and the farewell. Both are fine to leave out.
- Every formula citation (pp. 4, 4, 5, 8, 8–9, 9–10, 11, 13–14, 14, 14–15) matches the page where Hughes says that equation. The in-text page references (pp. 1–3, 6–7, 9, 10–11, 12, 12–13, 15–16, 16–17, 17) also match. Small point: the s/u stability argument is on pp. 7–8, so the "(pp. 6–7)" before the list covers its last bullet only in part.
- Added material is marked: the 2022 Sgr A* image is flagged as a later development, and the fusion comparison and the 10 M_sun / 4e6 M_sun numbers are the page's own.

## Licensing
- The transcript has no "rights reserved" or "Courtesy of" notice (grep checked). The OCW lecture page carries CC BY-NC-SA 4.0.
- No figures are reused. Both plots are generated from formulas.
- No OpenStax or LibreTexts material.
- The paraphrase is the page's own throughout. A few of Hughes's vivid short phrases survive ("after the algebraic smoke clears", "if someone sneezes on one", "whipping around"). They are short and acceptable, but could be put in quotation marks as Hughes's words.
- The worked example is original: Hughes gives no numbers.

## Notes
- Physics checks:
  - Signature (−,+,+,+), c = 1 and G kept are used consistently.
  - E = −p_t is positive at infinity.
  - L_z = p_φ.
  - The sign of the circular-orbit L̂ is ±, and Ω's sign is the sense of rotation.
  - The ring radius b_crit = 3√3 GM is the apparent radius seen from infinity, which is correct.
  - The photon orbit at 3GM is unstable, which is correct.
- Later developments:
  - EHT M87* was announced in April 2019. Hughes's "last year ... two or three lectures before" matches "a few lectures before Hughes reached this topic that year".
  - The Sgr A* image (May 2022) is correctly marked as later.
  - arXiv:1906.11238 is indeed EHT Paper I.
- "In the last recorded lecture of the 2020 course" is supported by p. 1 ("this final lecture") and p. 18.
- Links: the 8.033 page `/courses/8-033/schwarzschild-orbits-perihelion` exists (course slug 8-033). The prerequisites `event-horizons-kruskal-kerr` and `schwarzschild-orbits-perihelion` exist. `/courses/8-962/frw-redshift-distances` exists and is Lecture 19.
- `leadsTo: []` is reasonable for the last lecture of the last course.
- The callout claim that disks radiate "several per cent" fits Schwarzschild (5.7%). Spinning holes can reach more. "Visible across most of the observable universe" is loose but not wrong in spirit.

## Resolution (2026-11-19, by the page author)

1. Innermost stable orbit: the page now says the minimum moves inward and becomes shallower while the maximum comes down faster, with a bracketed note on Hughes's "tends to go up" and the actual values (0.926 at L̂ = 4GM, 0.889 at the merger).
Info items: added a bracket on the ring "twice the critical impact parameter" slip; the cosmology callout now says Lecture 19 used a close relative of the method (a Killing tensor); the photon-plot slider starts at b = 4.5GM so the 1/b² line stays on the plot; Hughes's "algebraic smoke clears" and "sneezes on" are in quotation marks. Quiz 3's mention of t is kept (correct physics).

Status set to `reviewed`.
