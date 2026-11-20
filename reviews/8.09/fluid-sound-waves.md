---
page: content/year-4/8.09/fluid-sound-waves.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read: local copy, rendered pages for printed pp. 124-127 read as images for every equation, pdftotext for the rest of the chapter)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (resource page, not opened separately; the PDF above is its file)
verdict: pass-with-notes
---

# Review: Sound waves in a fluid, the Mach number and shock cones

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Section "The velocity field", eq. (6.103) and the bracketed note | Second line of (6.103), p. 126: (B/ρ0)(∇²v − ∇×(∇×v)) | Formula uses + ∇×(∇×v); bracket says the notes have a minus and the identity a plus | None. Slip verified independently: for v = (x²y, yz, xz²), ∂x(∇·v) = 2y + 2z, (∇²v)x = 2y, ∇×v = (−y, −z², −x²), (∇×∇×v)x = 2z, so ∇(∇·v) = ∇²v + ∇×(∇×v). The calcs entry `grad-div-identity` encodes this same example correctly. Correctly flagged in brackets as rule 4 requires. |
| 2 | info | eq. (6.94) Formula | Notes write ∇p (lower-case p) in the middle of (6.94), elsewhere 𝒫 | ∇P throughout | None needed; silent normalisation of a typographic slip is harmless. Optionally add "[the notes write p]". |
| 3 | info | "Half-angle of the Mach cone", quiz 4, flashcard | p. 127: "a cone of angle γ defined by sin(γ) = c_s/v0"; the figure labels the angle α | "half-angle γ" | None; "half-angle" is the geometrically correct reading of sin γ = 1/M and the figure (α measured from the axis). Could note "the notes say 'angle'". |
| 4 | info | Equilibrium paragraph, "(P0 and ρ0 are taken constant and uniform, so in fact f0 must vanish ...; our remark.)" | Notes: "If P0 and ρ0 are constant and uniform, then ∇P0/ρ0 = f0/ρ0" | Remark that uniform P0 forces f0 = 0 | Correct and marked as the page's own. Fine. |
| 5 | info | "the shock cone", "shock wave" wording | Notes also call it a shock wave / sonic boom | Same | Strictly the linear theory gives a Mach cone (characteristic surface); a true shock is nonlinear. Page follows the notes; optional one-line remark. |
| 6 | info | Mach-number section, "Wind at 30 m/s, for example, has M ≈ 0.09" | Notes quote no numbers | Number given without an "(our example)" tag | The intro says the worked examples are the page's own, and the worked example states "(This comparison is ours; the notes do not quote numbers.)". The 30 m/s wind in running text is not tagged; consider "(our example)". |

No errors found in physics, equation numbers or page citations.

## Arithmetic and answer checks
Formula citations, each checked against the rendered printed pages:
- (6.91) p. 124: matches (∇P0/ρ0 = f0/ρ0). Correct page.
- (6.92)-(6.93) p. 125: match.
- (6.94) p. 125: matches (see note 2).
- (6.95), (6.96), (6.97), (6.98), (6.99), (6.100) p. 125: all match term by term.
- c_S = √(B/ρ0), "p. 125 (after eq. 6.100)": in the sentence after (6.100) on p. 125. Correct.
- (6.101) p. 125: matches (bottom of p. 125).
- (6.102), (6.103), (6.104), (6.105), (6.106) p. 126: match (6.103 with the sign corrected, flagged).
- sin γ = c_S/v0 = 1/M, "unnumbered, p. 127": correct.
- Text claims: bulk modulus definition B = ρ ∂P/∂ρ ≈ ρ0 P'/ρ' (p. 125), "∇×v does not depend on time, take it zero initially" (p. 126), M ≪ 1 incompressible (p. 126), subsonic/supersonic (pp. 126-127), aircraft and thunder (p. 127): all supported.
- "no-heat-exchange (entropy-conserving) ideal fluid of Section 6.2": Section 6.2.2 is titled "Ideal Fluid: Euler's Equation and Entropy Conservation" and defines the ideal fluid as having no heat exchange. Supported.

Numbers recomputed:
- Water: √(2.2×10⁹/1000) = 1483.2 m/s → "≈ 1480" OK (quiz 2 answer index 2 correct).
- 1480/340 = 4.35 → "more than four times" OK.
- Air, B = P0: √(101325/1.225) = 287.6 → "≈ 288" OK.
- Air, B = 1.4 P0: 340.3 m/s → "≈ 340", "the measured value" OK (1.225 kg/m³ is the 15 °C standard atmosphere, where the measured speed is about 340 m/s).
- Wind: 30/340 = 0.088 → "≈ 0.09" OK.
- Mach 2: arcsin(1/2) = 30.000° OK (quiz 4 answer index 0 correct). M = 1: 90° OK.
- Plot: γ = asin(1/M)·180/π on M ∈ [1, 5], range 0-95 covers 11.5°-90°; point (2, 30) lies on the curve. OK.
- Quiz 1: answer index 1 (ρ' = (ρ0/B)P') correct; explanation correct (incompressible limit B → ∞ gives c_S → ∞, no sound wave). Distractor "P' = ρ'R'T only for liquids" is odd but clearly wrong.
- Quiz 3: answer index 0 correct.
- Flashcards: all four correct.

Calcs file (`calcs/8.09/fluid-sound-waves.yaml`): every entry checked by hand.
- `plane-wave-solves`: g(x − ct) solves the 1D wave equation; formula and samples sound.
- `grad-div-identity`: LHS 2y + 2z; RHS 2y + 0 + 0 + (0 − (−2z)) = 2y + 2z. Correct, and origin `slip` appropriate.
- `water-sound`, `water-over-air` (4.35 → '4.4'), `air-isothermal`, `air-adiabatic`, `wind-mach`, `mach2-angle`, `mach1-angle`: values agree with the recomputation above; `origin: page-own` is right for all of them. I did not run `npm run calc:test` (not asked; read-only review).

## Coverage and order
- Page follows the notes' order exactly: equilibrium (6.91) → perturbations (6.92-6.93) → linearized Euler (6.94-6.95) → continuity (6.96) → equation of state and bulk modulus (6.97) → (6.98)-(6.101) → curl (6.102) → velocity wave equation (6.103-6.104) → plane wave (6.105) → Mach number (6.106) → subsonic/supersonic and the cone → supersonic aircraft, sonic boom, thunder.
- Nothing in Section 6.5 is left out. Added by the page: the worked example (water, isothermal vs adiabatic air), the 30 m/s wind, the Mach 2 quiz, the γ(M) plot, and the cosmology callout; all marked or clearly the page's own (see note 6).
- The end of Section 6.4 (discontinuous solutions behind a sphere, p. 124) belongs to the previous page and is correctly not covered here.

## Licensing
- Chapter 6 text has no "All rights reserved", "©" or "Courtesy of" notice (grep of the full chapter text).
- The two figures on p. 127 (subsonic circles; supersonic cone) are not reproduced; the page says so. The plot is generated from sin γ = 1/M and is not a redraw of MIT's figure.
- No verbatim copying found. Closest paraphrases ("turn the picture round: the air is still and the disturbance, the aircraft, moves through it faster than sound" vs the notes' "view this picture the other way around, where the fluid is static and the disturbance (plane) moves through it") are reworded and short; acceptable.
- No OpenStax or LibreTexts material.

## Forward links and prerequisites
- Prerequisite `sound-waves` (8.03 Lecture 11) exists and is the one-dimensional tube derivation with v = √(γP0/ρ), Newton vs Laplace; the intro's "Compare the one-dimensional treatment" is accurate, and the link `/courses/8-03/sound-waves` uses the right course slug (`8-03`). Its numbers (289 / 342 m/s with P0 = 10⁵ Pa, ρ = 1.2) are consistent with this page's 288 / 340 m/s for slightly different inputs.
- Prerequisite `euler-equation-fluid-conservation` exists in 8.09.
- leadsTo 8.09 6.6: Section 6.6 "Viscous Fluid Equations" follows on p. 127 and is in the syllabus; "internal friction (viscosity) ... Navier-Stokes" matches its opening.
- leadsTo / callout 8.902 Lecture 7 (`stability-jeans-toomre`, lecture: 7): that page linearizes the continuity and Euler (Jeans) equations about a uniform static background, adds Poisson's equation for the perturbation, obtains ∂²ρ1/∂t² − 4πGρ0ρ1 − v_s²∇²ρ1 = 0 and says "Without gravity this is an ordinary sound wave"; v_s² = ∂P/∂ρ equals this page's B/ρ0. Claim accurate.
- leadsTo / callout 8.902 Lecture 17 (`cmb-anisotropies`, lecture: 17): that page states the photon-baryon fluid's pressure is mostly radiation, c_s ≈ c/√3, and that sound waves in it give the acoustic peaks. Claim accurate and fairly attributed.

## Notes
- Verdict pass-with-notes: no errors; all six items are optional info-level improvements.
- Uncertain: nothing material. I did not run `content:check` or `calc:test`.

## Resolution (2026-11-19, by the page author)

1. No change (slip already flagged).
2. No change (P for the notes' p is harmless).
3. No change; "half-angle" kept as the correct reading of sin γ = 1/M.
4. No change.
5. No change; the page follows the notes' usage.
6. Added "(our example)" after the 30 m/s wind.

Status set to reviewed.
