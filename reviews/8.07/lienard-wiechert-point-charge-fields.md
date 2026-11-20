---
page: content/year-4/8.07/lienard-wiechert-point-charge-fields.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln15/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/e41ad0b285a2c825fe8909aff2a8dee5_MIT8_07F12_ln15.pdf (read, local copy: typeset slides, Lecture 36, December 10, 2012; slides -15- to -20- (PDF pages 33 to 38) read from the page images, every equation compared by eye; OCR text used only for notices and the other slides)
  - MIT 8.07 Lecture Notes 16 (local copy, text only, to check the claims about the next notes)
  - content/year-4/8.286/temperature-and-decoupling.mdx (read in part, for the cosmology callout and leadsTo)
verdict: pass-with-notes
---

# Review: The Liénard–Wiechert potentials and the fields of a moving charge

The page covers slides 15 to 20 of Lecture Notes 15 (Guth, "Potentials and Fields", Lecture 36), eqs. (27) to (42). The author's notes.md was not used. Every `<Formula>` was compared with the slide images; every derivation step was redone; the fields (39) to (41) were checked independently by numerical differentiation of the Liénard–Wiechert potentials; every number was recomputed (Python). `pytest tests/calc -k lienard`: 30 passed. `npm run content:check`: 0 errors; the only warning for this page was the missing review file (this file).

Formula by formula (label, `at=`, verdict). All 15 sit at the cited slide and equation number:
- "The retarded scalar potential", slide 15: on slide 15 ("From Eq. (23)"), unnumbered there. Match.
- slide 15, eq. (27), ρ = q δ³(r − r_p(t)): match.
- slide 15, eq. (28), both lines: match.
- slide 16, eq. (29), Z ≡ ∫ d³x′ δ³(r′ − r_p(t_r)) ≠ 1: match (slide uses ≡, page =; harmless).
- slide 16, eq. (30), δ(g(x)) = Σᵢ δ(x − xᵢ)/|g′(xᵢ)|, g(xᵢ) = 0: match.
- slide 16, eq. (31), both lines: match.
- slide 17, eq. (32), with t_r = t − |r − r′|/c: match (t_r also appears unnumbered on slide 16).
- slide 17, eq. (33): match.
- slide 17, eq. (34), all three forms: match. Re-derived: dt_r/dx′ = −(1/c) d|r − r′|/dx′ and d|r − r′|/dx′ = (x′ − x)/|r − r′|, so g′ = 1 + (1/c)(dx_p/dt)(x′ − x)/|r − r′|. No slip.
- slide 17, eq. (35): match. Z = 1/g′ follows because, for v along x, (dx_p/dt)(x′ − x) = −v·(r − r′); g′ > 0 for v < c so the absolute value is harmless.
- slide 18, eq. (36) (boxed): match.
- slide 18, eq. (37): match.
- slide 18, eq. (38) (boxed), both forms: match; μ₀ = 1/(ε₀c²) gives the second form (calcs `a-equals-v-over-c2-V`).
- slide 19, eqs. (39), (40), (41) (all boxed): match, character by character, including (u·(r − r_p))³ in the denominator, (c² − v_p²) and the order (r − r_p) × (u × a_p).
- slide 20, eq. (42): match. Re-derived: c(r − r_p)/|r − r_p| − v_p = (c/|r − r_p|)[r − r_p − v_p |r − r_p|/c] and |r − r_p|/c = t − t_r.

Independent check of eqs. (39) and (41) (own derivation by numbers, not from a textbook): for a charge on an accelerated, bounded, subluminal path (units c = 1, q/4πε₀ = 1), the retarded time was found by root-finding, V and A from (36) and (38), and E = −∇V − ∂A/∂t, B = ∇ × A by central differences. At two field points the results agree with (39) and (41) to about 1 part in 10⁵ (finite-difference noise), e.g. E = (0.056829, 0.078290, −0.045951) numerical vs (0.056829, 0.078291, −0.045951) from (39). Signs and factors of both the velocity and the acceleration terms are therefore right; the form also agrees with the standard textbook form (Griffiths eq. 10.72 in the 3rd edition), with 𝓇 = r − r_p.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Cosmology callout, last sentence: "the next 8.07 notes compute the scattering itself" | Lecture Notes 16 ("Radiation") treat electric and magnetic dipole radiation, the Larmor formula and radiation reaction; scattering appears only as "Polarized Blue Skies" (slide 9), a qualitative account of why the sky is blue from the ω⁴ factor of dipole radiation. There is no calculation of scattering by free electrons (Thomson scattering), which is what the callout is about. | Implies Notes 16 compute the free-electron scattering that kept the early universe opaque. | Say instead: "the next 8.07 notes find how much power an accelerated charge radiates (the Larmor formula), and use dipole radiation to explain the blue sky." The leadsTo text for 8.07 L16 ("radiation, the Larmor formula and the scattering of sunlight") is fair as written. |
| 2 | warning | calcs file, entry `liénard-wiechert-dates` (not the page) | The slides give no dates and no history of Liénard or Wiechert. | `source: {cite: reading1, at: 'slide 18'}` | The dates (Liénard 1898, Wiechert 1900) are correct general knowledge, but the citation is wrong. Cite a real source (add a `references` entry, e.g. a history article) or drop the `source` cite; `origin: page-own` is already right. |
| 3 | info | "Evaluating Z", "There is one zero, and Z = 1/g′ there (slide 17)" | Slide 17 says "and Z = 1/g′(x′)"; it does not say there is one zero. | Adds "There is one zero". | True for v < c (the retarded time is unique), so fine; the citation covers only the second half. Optionally "(for v < c the retarded time is unique)". |
| 4 | info | Eq. (31) bracket on y′_p, z′_p | Slide 16: "since y′_p(t_r) = z′_p(t_r) = 0". | Explains that these primes are time derivatives, unlike the primes on x′, y′, z′. | Fair and useful. It is a notation clash on the slide, not an error, and the page does not call it a slip. The page's reason ("a small change of t_r does not move y_p or z_p") is correct: the Jacobian of r′ ↦ r′ − r_p(t_r(r′)) has identity rows for y and z when v_y = v_z = 0, so its determinant is 1 − v_x ∂t_r/∂x′. |
| 5 | info | "The retarded scalar potential", `at="slide 15"` | Slide 15 introduces it as "From Eq. (23)". | No equation number. | Optional: `at="slide 15 (eq. (23) of slide 11)"`. |
| 6 | info | "A picture of why (ours, not on the slides)" and the Z plot | Not on the slides. | Marked as the page's own. | Correct physics: nearer parts of the source are sampled later, so an approaching charge is counted over a longer stretch; Z lies between 1/(1 + v/c) and 1/(1 − v/c). No change needed. |
| 7 | info | Historical sentence on Liénard and Wiechert | Not on the slides. | "found around 1900 by Alfred-Marie Liénard and Emil Wiechert, independently, before special relativity" | Correct (1898 and 1900; special relativity 1905). Unsourced on the page; acceptable as general knowledge, see row 2 for the calcs entry. |

## Arithmetic and answer checks
- Worked example (1 nC along x at 0.6c, at the origin at t = 0, field point (0, 4, 0) m), recomputed in Python with the page's constants:
  - (0.6 ct_r)² + 16 = (ct_r)² → ct_r = −5 m (the past root), x_p = −3 m, |r − r_p| = 5 m, 5 m/c = 16.68 ns ("about 16.7 ns"). Correct.
  - R̂ = (0.6, 0.8, 0), (v/c)·R̂ = 0.36, 5 × 0.64 = 3.2 m, V = 8.988/3.2 = 2.80875 → 2.809 V. Static 8.988/4 = 2.247 V; ratio 1.25 = γ. Cross-check with the closed form for uniform motion, V = q/(4πε₀) / √((x − vt)² + (1 − β²)(y² + z²)) = q/(4πε₀ · 0.8 · 4): same. Correct.
  - A_x = 0.6 × 2.80875/2.998×10⁸ = 5.621×10⁻⁹ T m. Correct.
  - u = (0, 0.8c, 0), pointing from the present position (origin) to the field point. Correct, consistent with eq. (42).
  - u·(r − r_p) = 3.2c m; E = 8.988 × 5 × 0.64 × 0.8/3.2³ = 8.988 × 0.078125 = 0.70219 V/m along +y. Coulomb 0.5618 V/m, ratio γ = 1.25 (the standard transverse-field result). Correct, direction correct.
  - B = (1/c)(0.6, 0.8, 0) × (0, E, 0) = (0.6E/c) ẑ = 1.4053×10⁻⁹ T along +z (x̂ × ŷ = +ẑ). Equals v × E/c² and γ v q/(4πε₀ c² d²). Correct, direction correct.
- Plot: Z = 1/(1 − b cos θ), b from 0 to 0.85; largest value 1/0.15 = 6.67, inside the y range [0, 8]. θ is correctly defined in the caption (velocity vs line from charge to field point). Endpoints in the caption (1/(1 − v/c), 1, 1/(1 + v/c)) correct.
- Quiz 1 (answer index 1, retarded time depends on r′): correct; explanation correct.
- Quiz 2 (answer index 3, "2"): 1/(1 − 0.5) = 2; moving away 1/1.5 = 0.67. Correct.
- Quiz 3 (answer index 2, present position): correct, matches slide 20.
- Quiz 4 (answer index 0, eq. (41)): correct. The explanation's "for uniform motion it reduces to B = v_p × E/c²" checked: with E ∥ u = cR̂ − v, (1/c)R̂ × u = (1/c) v × R̂ = v × u/c². Correct; 0.6E/c in the example matches.
- Flashcards: all four correct (Z with the δ(g) rule; V and A = (v_p/c²)V; E from (39) with u from (40); uniform motion, γ times Coulomb to the side).
- Summary and frontmatter summary: numbers (1.25, 2.809 V, 0.702 V/m, 1.40 nT) agree with the above.
- calcs file `calcs/8.07/lienard-wiechert-point-charge-fields.yaml`: 30 entries, all pass; it covers every number on the page, including a direct numerical evaluation of Z by a narrow Gaussian delta (1/0.64). See row 2 for the one mis-cited fact entry. Minor: the `shown` string of `g-prime` contains a fragment of MDX attribute text (`" cite="reading1" at=...`); it evidently still matches, but a cleaner excerpt would be better.

## Coverage and order
- Slides 15 to 20 of Lecture Notes 15 are covered completely and in MIT's order: point-charge density and eq. (28), Z ≠ 1, the δ(g) rule, reduction to one dimension, g and g′, Z in general, V and A (Liénard–Wiechert), E and B, constant velocity and eq. (42).
- Slides 1 to 14 (potentials, gauges, retarded and advanced solutions, the arrow of time) belong to the companion page potentials-gauges-retarded-solutions (order 1), which covers them; nothing in Notes 15 is left out between the two pages.
- Additions, all marked as the page's own: the intuitive picture of Z, the Z plot, the history sentence, the remark that the velocity term falls as 1/R² and the acceleration term as 1/R (true by counting powers in (39); slide 19 does not say it, but Notes 16 build on it), and the worked example.

## Licensing
- Slides 15 to 20 carry no "All rights reserved" or "Courtesy of" notice. The only notices in Notes 15 are the "Standard YouTube License" clips on the arrow-of-time slides (slide 13), not used on this page.
- No figure is reproduced; the only graphic is a generated plot. No OpenStax or LibreTexts material.
- Wording: the prose is the page's own. Short phrases echo the slides ("perhaps surprisingly", "after several pages", "points outward from the current position"), each attributed to Guth or in standard terminology; acceptable.
- The worked example is original (MIT has no numerical example here).
- No em dashes in the page.

## Notes
- Cosmology callout: the physics is right (free electrons, shaken by the wave's E field through the acceleration term, re-radiate; scattering by free electrons kept the universe opaque until the electrons combined into atoms; the freed light is the CMB). The linked 8.286 page temperature-and-decoupling (Lecture 17) does discuss free electrons scattering photons until decoupling, so the link and the leadsTo to 8.286 L17 are fair. The only problem is the claim about the next 8.07 notes (row 1).
- leadsTo 8.07 L16: fair (Notes 16 cover radiation, the Larmor formula and the blue sky).
- Prerequisites: potentials-gauges-retarded-solutions (the retarded potentials) and maxwell-equations-four-potential (8.033, the field of a uniformly moving charge by Lorentz transformation, linked from the text) are well chosen. ideal-magnetic-dipole-current (8.07 L11) is a weak link here; the page uses nothing specific from it beyond the vector potential of a current. Consider replacing it with the 8.07 page that introduces the vector potential, or dropping it. Not uncertain, but a judgement call.
- Links checked: /courses/8-07/potentials-gauges-retarded-solutions, /courses/8-033/maxwell-equations-four-potential, /courses/8-02/biot-savart-law and /courses/8-286/temperature-and-decoupling all exist.
- Symbols (data/symbols.json), meanings scoped to this page: t_r (shared with the companion page; "when the influence now arriving at r left the source point r′", s), a_p ("with an arrow, the charge's acceleration at the retarded time", m/s²), r_p, v_p, x_p, y_p, z_p, Z, g, g′, xᵢ, u, x′/y′/z′, A_x: all fit the page. ρ̈ ("rho double dot") is scoped to potentials-gauges-retarded-solutions, not this page, which does not use it; it fits that page. Spoken names: r_p changed from "r planet" to "r sub p" and z_p from "z p" to "z sub p"; both changes are neutral for the other pages that use them (potential-energy, power-spectrum) and better here. The course-wide z meaning ("along the axis (z = r cos θ)") is slightly more specific than this page's Cartesian use, but not wrong. A_x has no unit field although the page quotes T m; optional.

## Resolution (2026-11-18, by the page author)

1. Callout, last sentence: "the next 8.07 notes find how much power an accelerated charge radiates (the Larmor formula), and use dipole radiation to explain the blue sky."
2. Calcs `lienard-wiechert-dates` (id now ASCII) cites a new reference `lw-originals` (Liénard, L'Éclairage Électrique 16 (1898); Wiechert, Archives Néerlandaises, series 2, vol. 5 (1900)) instead of reading1.
3. "For $v < c$ there is exactly one zero, because the retarded time is unique (our remark), and $Z = 1/g'$ there (slide 17)."
4. No change (the bracket was already a notation remark).
5. The retarded scalar potential is cited `at="slide 15 (eq. (23) of slide 11)"`.
6, 7. No change (row 7 is now sourced in calcs, see 2).
- Calcs: the `g-prime` `shown` string no longer contains MDX attribute text.
- Prerequisites: `ideal-magnetic-dipole-current` dropped (it is still linked from the companion page); the page now lists `potentials-gauges-retarded-solutions` and `maxwell-equations-four-potential`.

`status: reviewed`. content:check, calc:test and build rerun.
