---
page: content/year-4/8.09/continuum-limit-fluid-variables.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (read: resource page, title "8.09(F14) Chapter 6: FluidMechanics", links the PDF below, CC BY-NC-SA 4.0 footer)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read: pdftotext and rendered images of printed pp. 104-109; every equation checked on the images)
verdict: pass-with-notes
---

# Review: From a chain of masses to a fluid: fields, Eulerian variables and pressure

All 18 formula citations match the PDF: section, equation number and printed page (eqs. 6.1-6.19, pp. 105-109). I found no wrong physics, no wrong numbers and no licensing problem. The findings below are minor.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "A chain of masses becomes an elastic rod", sentence before eq. (6.2) | p. 105: "Technically both the Lagrangian and the equations of motion are independent of a, but we have introduced factors of a" (the inserted factors of a cancel). | "Nothing yet depends on how close the masses are, but it helps to write the Lagrangian with factors of a placed so that a limit a → 0 is easy to see." | This is not wrong, but it leaves out the point that the inserted factors of a cancel, so (6.2) and (6.3) are still exactly (6.1). Suggest: "The factors of a in (6.2) cancel, so this is the same Lagrangian, written so that the limit a → 0 is easy to see." |
| 2 | info | Young's modulus sentence | p. 105 calls Y = ka "the Young's modulus" and says it is "equivalent to the spring constant for a continuous rod". | "plays the part of the rod's Young's modulus" | The page's hedge is good. Optionally add in brackets that Y = ka has units of force: it is Young's modulus times the cross-section area, which is why quiz 2 gives Y in N. |
| 3 | info | Pressure section, "one power of length smaller" | p. 108: the gravity term drops out as dz → 0. | "pressure forces go with areas, gravity with volume, one power of length smaller" | The wording is ambiguous: the volume term has one more power of length, so relative to the area terms it is smaller by one power of the (small) length. Suggest: "gravity with volume, which has one more power of the small length and so vanishes faster". The flashcard already says this clearly. |
| 4 | info | Wedge paragraph | p. 107: the forces on the two y-faces are mentioned but not needed. | Not mentioned. | Optional: one clause, "(the two faces normal to y need not be considered)". |
| 5 | info | Notation | The notes write pressure as calligraphic 𝒫 and use ẋ, ẏ, ż in (6.18). | P and dx/dt. | Fine as it is. These are notational choices, not differences in physics. |

Slips that the page notes in brackets were checked against the images:
- p. 107, "P1, P1, P1": confirmed in the PDF (image of p. 107). The figure on p. 108 labels P1 dA, P2 dy dz and P3 dx dy. The bracket is correct.
- Eq. (6.17), ρ a dx dy dz without the wedge's factor ½: confirmed. The page's bracket is correct and fair (the term vanishes in the limit either way).
- The page's remark that the notes write (6.5) as a difference of first differences divided by a is correct. This is algebraically identical to the page's second difference over a².

## Formula citations (each checked on the rendered page)
- (6.1) V, T: p. 105. Matches.
- (6.2) L = ½ Σ a[(m/a)η̇² − ka((η_{i+1}−η_i)/a)²]: p. 105. Matches.
- (6.3) equation of motion: p. 105. Matches, and I re-derived it: ∂V/∂η_i = k[−(η_{i+1}−η_i) + (η_i−η_{i−1})], divided by a.
- (6.4)-(6.6) continuum limit: p. 105. Matches (eq. 6.6 is Σ a → ∫dx).
- (6.7) Lagrangian density: p. 105. Matches.
- (6.8) wave equation: p. 105. Matches.
- (6.9) 𝓛(η, ∂η/∂x, ∂η/∂t, x, t): p. 106. Matches, with the arguments in the same order.
- (6.10) δS = δ∫_{t1}^{t2}∫_{−∞}^{∞} 𝓛 dx dt = 0: p. 106. Matches.
- (6.11) continuum Euler-Lagrange equation: p. 106. Matches, including the signs.
- (6.12) derivatives for the rod: p. 106. Matches.
- (6.13) F_g = ρ g dx dy dz/2: p. 108. Matches.
- (6.14) dF_x, dF_z: p. 108. Matches. I checked the geometry: the slant length ℓ gives dz = ℓ sin θ and dx = ℓ cos θ, so dA = dy dz/sin θ = dy dx/cos θ. The normal to the slant is at θ from the vertical, so the horizontal component is P1 dA sin θ = P1 dy dz.
- (6.15) P3 = P1 + ½ρg dz: p. 108. Matches. (6.16) and (6.17) are cited in the text on p. 108: correct.
- (6.18) dP/dt = ∂P/∂t + v·∇P: p. 109. Matches.
- (6.19) d/dt = ∂/∂t + v·∇: p. 109. Matches (pdftotext puts the label 6.19 in the wrong place; the image confirms it belongs to the operator).

## Arithmetic and answer checks
- Quiz 1 (answer 1, μ = m/a and Y = ka): correct (p. 105). The explanation is correct.
- Quiz 2: μ = 0.005/0.01 = 0.5 kg/m; Y = 800 × 0.01 = 8 N; √(8/0.5) = √16 = 4 m/s. Answer index 1 ("4 m/s") is correct. "Long waves" is the right condition for the continuum limit (wavelength much longer than a).
- Quiz 3 (answer 1, ρ, P, v: five functions): correct (p. 107).
- Quiz 4 and the worked example: ∂T/∂x = −2 K/10⁵ m = −2×10⁻⁵ K/m; v ∂T/∂x = −2×10⁻⁴ K/s × 3600 = −0.72 K/h; dT/dt = 0.5 − 0.72 = −0.22 K/h. Answer index 1 ("falls by about 0.22 K per hour") is correct. The physical reading is also right: at the station ∂T/∂t = dT/dt − v·∇T = −0.22 + 0.72 = +0.5 K/h, so the station warms because warmer air is carried in from the west.
- Plot dots: sin(2πx/10) at x = 0, 1.25, …, 10 gives 0, 0.7071, 1, 0.7071, 0, −0.7071, −1, −0.7071, 0. All correct.
- Flashcards: all five are correct (Lagrangian density and wave equation with speed √(Y/μ); continuum E-L; Lagrangian and Eulerian; isotropy argument; convective derivative).
- Calcs file: every number and derivation on the page has an entry. I ran `pytest tests/calc -k continuum-limit`: 15 passed. Minor (info): the page-own entries for the worked example and plot (`advective-term`, `advective-term-per-hour`, `total-derivative`, `plot-dots`, and the quiz-2 entries) give `source.at` as "Section 6.1, p. 105". The worked example illustrates eq. (6.19) on p. 109, as `quiz-cooling-rate` already says. Suggest changing those `at` values to "Section 6.1, eq. (6.19), p. 109" for the convective-derivative entries.

## Coverage and order
- The chapter introduction on p. 104 (what a fluid is, shear stress, applications, fields replacing q_i) is covered.
- Section 6.1 is covered in the notes' order: the chain of masses and its continuum limit (6.1-6.8); Hamilton's principle for a field (6.9-6.12); classical, scalar and vector fields, E and B, the starting point of QFT, and that the fluid fields stay classical (p. 106); Lagrangian and Eulerian variables (p. 107); the ideal-gas example; isotropy of pressure and the wedge (6.13-6.17); time derivatives (6.18-6.19).
- Omitted: only the aside about the y-faces of the wedge (finding 4).
- Added, and labelled as the page's own: the wave speed √(Y/μ), the plot, the worked example, and the link to the 8.03 beaded string. All are fine.

## Licensing
- The PDF has no "All rights reserved" or "Courtesy of" notice (grep of the extracted text found nothing). The OCW resource page carries CC BY-NC-SA 4.0.
- No figure of the notes is reproduced: the tube figures and the wedge figure are described in words only. The plot is generated from a formula.
- Paraphrase: the text is rewritten throughout. A few sentences follow the notes' sentence structure fairly closely, though the words are changed:
  - the fluid definition: "can be treated as continuous, that flows, and that resists deformation only weakly";
  - the advantage and drawback of the Lagrangian description;
  - "N particles have N Euler-Lagrange equations; here there is only one".

  None is verbatim and all are acceptable. If wanted, the Lagrangian-description sentence could be restructured further.
- No OpenStax or LibreTexts material.

## Forward links
- leadsTo 8.09 6.2: correct. Section 6.2 ("Fluid Equations of Motion", p. 109 onward) derives continuity (6.2.1) and Euler's equation (6.2.2) using d/dt = ∂/∂t + v·∇.
- leadsTo 8.286 Lecture 4 and the callout: `content/year-4/8.286/homogeneous-expansion.mdx` (lecture 4) introduces comoving coordinates, "notches" and a(t) in m/notch. The analogy is fair and is presented as an analogy ("in the same spirit"): comoving coordinates are Lagrangian labels for the Hubble flow.
- Callout claim that 8.902 writes the fluid equations in the Eulerian way: verified. `content/year-5/8.902/linear-perturbations.mdx` cites 8.902 eq. (376) as ∂ρ/∂t + ∇·(ρv) = 0 and ∂v/∂t + (v·∇)v = …, which is Eulerian form.
- Prerequisite and link targets exist: `content/year-2/8.03/beaded-string-wave-equation.mdx` (it keeps T and m/a fixed for transverse motion, as the page says) and `content/year-1/18.02/gradient-fields-and-curl.mdx`. The link format `/courses/8-03/…` matches other pages.

## Notes
- Plot (info): the dots show the longitudinal displacement η plotted upward against x. The caption is correct ("displacements … lying on the smooth curve"), but a reader may picture transverse motion. Optionally add "(η is a displacement along the rod, drawn upward)".
- No other uncertainties.

## Resolution (2026-11-19, by the page author)

1. Reworded the sentence before eq. (6.2): it now says that every inserted factor of $a$ cancels, so the Lagrangian and equations of motion are unchanged.
2. Added a bracket: $Y = ka$ is strictly Young's modulus times the cross-section, which is why it comes out in newtons.
3. Reworded the powers argument: the volume term carries one more power of the small length and so vanishes faster.
4. The aside on the y-faces is left out (optional); the x and z balances carry the argument.
5. Notation difference kept (no change needed).
6. Calcs sources corrected: worked-example and quiz-4 entries cite eq. (6.19), p. 109; quiz-2 entries eq. (6.8), p. 105; the plot entry eq. (6.7), p. 105.
7. The three sentences are reworded paraphrases; left as they are.
8. The plot caption now says the displacement is along the chain and is drawn upwards.

Status set to reviewed.
