---
page: content/year-5/8.902/spherical-collapse.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not opened; used only as the page's `source.url`)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec15.pdf (read; local copy, pdftotext plus rendered p. 92)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec16.pdf (read; local copy, pdftotext pp. 92–98 plus rendered pp. 93, 94, 95, 96)
verdict: pass-with-notes
---

# Review: When ripples collapse — the spherical collapse model

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | `leadsTo` (8.902 Lecture 16, Press–Schechter) | Press–Schechter is section 2.F of the Lecture 16 notes (pp. 96–98). | `leadsTo` points to Lecture 16, but this page is itself `lecture: 16`. `cosmologyDestinations()` in `lib/content.ts` (lines 301–310) lists every written page with that lecture number, and `seen` does not contain the current page. So "Where this leads" will show **this page itself**, with the Press–Schechter reason attached. Once a Press–Schechter page exists it will show both. | Remove the `leadsTo` until the Press–Schechter page exists and then link it by prerequisite. Or point `leadsTo` to a later lecture. Or exclude the current page in `cosmologyDestinations()`, which fixes this for all pages. |
| 2 | warning | "Beyond the simple model" callout | Not in the notes. | δ_c ≈ 1.68 in ΛCDM, weakly dependent on Ω_m; Δ_vir ≈ 330 relative to the mean for Ω_m ≈ 0.3. | The values are right (see the checks below), but `references` is empty and the callout does not say these numbers come from outside the notes. Add a reference (e.g. Bryan & Norman 1998, ApJ 495, 80, eq. 6; or Eke, Cole & Frenk 1996 for δ_c) and say "not in the notes". |
| 3 | info | "This is the same physics as the closed universe in 8.286 … by Birkhoff's theorem (Newtonian version…)" | The notes make no 8.286 or Birkhoff link. | Presented as a plain statement. | Correct physics. Strictly, Birkhoff's theorem is relativistic. Its Newtonian counterpart is the shell theorem, so "Newtonian version" is acceptable. Optionally mark it as the page's own remark. |
| 4 | info | Cycloid sentence | Notes stop at implicit eq. (435). | Substituting y = ½(1 − cos s) gives τ = (2/3π)(s − sin s), marked as "this page's own step". | Verified (see the checks below). Eq. (435) is valid only for s ∈ [0, π] (pre-turnaround branch). Continuing to 2π is the time-symmetric collapse branch the notes assume. Fine as written. |
| 5 | info | Eq. (432) slip note | (432) also writes "dx/dt" where dx/dτ is meant. | Only the exponent slip is noted. | Optional: mention dx/dτ too, or leave it, since the page does not reproduce that line. |
| 6 | info | `prerequisites` | — | `[linear-perturbations, closed-universe-cycloid]` | The page's first sentence and the "(This ξ has nothing to do with the correlation function of the previous page)" remark both assume `power-spectrum`. Consider adding it as a prerequisite, or reword "previous page". |
| 7 | info | M200 sentence | "the mass enclosed in a sphere of radius R200 with an average density 200 times the mean or critical density of the Universe" | "the mass inside the sphere whose mean density is 200 times the mean (or the critical) density of the universe" | A close paraphrase of a standard definition. Acceptable as standard terminology. |

All formulas were checked against the rendered pages. Equation numbers, printed pages and the chosen PDF are correct:
- reading1 (Lecture 15 notes), p. 92: (423) x = a/a_ta, y = R/R_ta; (424) τ = H_ta t with H_ta = H₀a_ta^{-3/2}, and x' = (1/H_ta)(ȧ/a_ta) = (H/H_ta)x = x^{-1/2}; (425) boxed x' = x^{-1/2}. The citations "(423)–(424)" and "(424)–(425)" are right. The bracketed claim that the Lecture 16 notes repeat p. 92 is also right: the Lecture 16 PDF opens with an identical p. 92.
- reading2 (Lecture 16 notes), p. 93: (426), (427), (428). (429) contains **both** boundary conditions, so citing "(428)–(429)" is right. (430) repeats the system with "3" for ξ (slip confirmed). (431) τ = (2/3)x^{3/2}. (432) prints x = (3/2)τ^{2/3}, while the next line uses (3/2)^{2/3} (slip confirmed). (433) y' = ±√ξ √(1/y − 1).
- reading2, p. 94: (434) check by differentiation; (435) boxed implicit solution; (436) ξ = (3π/4)²; (437) x_c = 4^{1/3}; (438) the early-time expansion; (439) prints Δ = (x/y)ξ **without the cube** (slip confirmed; the cube is used in (440)).
- reading2, p. 95: (440)–(441), (442)–(444), (445). (445) contains "δ_ra" (typo confirmed).
- reading2, p. 96: (446) contains "V_ra" (typo confirmed); (447) Δ_V = 32ξ = 18π² ≈ 178.
- The page's derivation of y'' = −ξ/(2y²) from (426)–(427) checks out: R̈/(R_ta H_ta²) = −(ξ/2)/y².

## Arithmetic and answer checks
All numbers were recomputed with a Python script.
- ξ = (3π/4)² = 5.5517 ("≈ 5.55", "about 5.6 times") ✓.
- δ_ta = (3/5)(3π/4)^{2/3} = 1.0624 ✓. δ_c = (3/5)(3π/2)^{2/3} = 1.68647 = 4^{1/3}·δ_ta ✓ ("≈ 1.686", "≈ 1.69").
- 32ξ = 18π² = 177.65 ✓. x_c = (3/2)^{2/3}(4/3)^{2/3} = 2^{2/3} = 4^{1/3} ✓.
- Eq. (438) checked numerically against (435) at y = 10⁻³: they agree to about 2×10⁻⁷ relative error ✓.
- Cycloid form: it matches eq. (435) at s = 0.5, 1.5 and 3.0 to machine precision. τ(π) = 2/3 and τ(2π) = 4/3 ✓.
- Plot: the parametric Δ = ξ((s − sin s)/π)²/((1 − cos s)/2)³ correctly equals ξ(x/y)³ with x³ = (3τ/2)². The linear curve 1 + δ_ta(3τ/2)^{2/3} = 1 + δ_ta·x is correct. Marked points: log₁₀ξ = 0.7444, log₁₀(2.0624) = 0.3144, log₁₀(2.6865) = 0.4292, log₁₀(177.65) = 2.2496. All four match, and the linear curve passes exactly through the two linear points. With s up to 6.2 the curve reaches τ = 1.33331, and the divergence above y = 3 is clipped by the axis range (as the caption says).
- Worked example (original; not in the notes):
  - ρ_c for H₀ = 70 is 9.204×10⁻²⁷ kg/m³ ✓.
  - 1 + z_ta = 2^{2/3} = 1.587 ✓.
  - R_vir = (3M/4π·178ρ_c)^{1/3} = 6.62×10²² m = 2.145 Mpc ✓ ("2.1 Mpc").
  - R_ta = 2R_vir = 4.29 Mpc. The independent route via ξρ_c(1 + z_ta)³ = 22.2ρ_c also gives 4.293 Mpc ✓ ("4.3 Mpc"). 32 = 4 × 8 ✓.
  - Linear δ at z = 1: 1.6865/2 = 0.843 ✓ ("0.84").
  - At z = 1: x = 2^{2/3}/2 = 0.7937 and τ = 0.4714 ✓. Solving gives s = 2.673 and y = 0.9461 ✓, so Δ = 3.278 ("≈ 3.3") and δ = 2.28 ("≈ 2.3") ✓.
- Callout: Bryan & Norman's fit Δ_c = 18π² + 82x − 39x² with x = Ω_m − 1 = −0.7 gives 101 relative to critical, i.e. 337 relative to the mean. "Roughly 330" is fair. δ_c ≈ 1.676 for flat Ω_m = 0.3 (general knowledge, Ω_m^{0.0055} scaling), so "about 1.68" is fair. Both checked from general knowledge, not from a source opened in this review.
- Quiz: Q1 answer 1 ✓; Q2 answer 1 ✓ (1.686 ✓); Q3 answer 2 ✓ (V ∝ 1/R, V_c = 2V_ta ⇒ R_c = R_ta/2); Q4 answer 2 ✓. All explanations are correct.
- Flashcards: all four are correct.

## Coverage and order
- The page follows section 2.E in the notes' order: motivation and halos → model set-up (423)–(425) → equation of motion (426)–(430) → solution (431)–(437) → linearly extrapolated values (438)–(445) with the 1-D δ_c sketch (described in words, not reproduced) → nonlinear/virial values (446)–(447) → M200. Nothing in 2.E is left out.
- The rest of the Lecture 16 notes (2.F Press–Schechter mass function, eqs. 448–458, pp. 96–98, including the fudge factor of 2 and the mass-function comparison figure) is not covered. It is announced as the next step via `leadsTo`. A second Lecture 16 page (`order: 2`) is needed to complete Lecture 16 (see finding 1).
- The page adds three things that are not in the notes: the cycloid parametrisation, the worked example, and the ΛCDM callout. The first two are labelled or are clearly original. The callout is not labelled (finding 2).

## Licensing
- `grep -i "rights reserved|courtesy"` over the Lecture 15 and 16 notes text finds no matches. The notes carry only the standard OCW footer.
- The page reproduces no figure from the notes. The 1-D δ_c sketch and the halo diagram on p. 92 are only described in words, and the plot is generated from formulas.
- I found no copied paragraphs. Phrases such as "spherical collapse model", "overdensity parameter" and "linearly extrapolated density contrast" are standard terminology. The M200 sentence is a close paraphrase of a standard definition (finding 7).
- The page uses no OpenStax or LibreTexts material. `license: CC BY-NC-SA 4.0` matches the source.

## Notes
- All five requested slip notes were confirmed against the rendered pages: eq. (430) "3" for ξ, the eq. (432) exponent, the missing cube in eq. (439), "δ_ra" in (445) and "V_ra" in (446).
- The 8.286 link is sound. `closed-universe-cycloid` derives ct = α(θ − sin θ), a/√k = α(1 − cos θ), which has the same form as this page's τ ∝ (s − sin s), y ∝ (1 − cos s).
- The page is filed as `lecture: 16` although 2.E begins at the end of the Lecture 15 notes. This is explained in the opening bracket and is consistent with `power-spectrum` now being `lecture: 15`.
- Uncertain: I verified finding 1 by reading `lib/content.ts`, not by rendering the page.

## Resolution (2026-11-15, by the page author)

- Warning 1 (self-link in "Where this leads"): `cosmologyDestinations()` in `lib/content.ts` now skips the current page. (In practice it was not visible: that function is only called for non-cosmology courses, and 8.902 has role `cosmology`.) `leadsTo` Lecture 16 is kept for the coming Press–Schechter page.
- Warning 2: the callout now says it goes beyond the notes and cites Bryan & Norman (1998, eq. 6), added to `references`.
- Info: the eq. (432) bracket now also mentions dx/dt for dx/dτ; `power-spectrum` is now a prerequisite (replacing `linear-perturbations`, which it already requires). The Birkhoff remark, the M200 sentence and the cycloid step stay as they are.
- Related change: `power-spectrum.mdx` is now `lecture: 15, order: 1` (most of its material, eqs. 415–422, is only in the Lecture 15 notes, as its review noted), so the existing `leadsTo` Lecture 15 on `why-cold-dark-matter` now resolves to it.

## Later fix (2026-11-15, found by the automatic graph check)

- The plot point "δ_lin ≈ 1.06" was at y = 0.3143; the curve gives log₁₀(1 + 1.0624) = 0.31437, so 0.3144 (last-digit rounding slip, invisible on the graph). Corrected. The "virialised: 18π² ≈ 178" marker is deliberately off the curves (the true curve runs to infinity at τ = 4/3) and is now marked `offCurve: true`.

## Later change (2026-11-15, from the calculation audit, reviews/calc-audit.md)

- Callout "Beyond the simple model": "roughly 330" → "roughly 340". The cited Bryan & Norman fit, Δ_c = 18π² + 82x − 39x² with x = Ω_m − 1, divided by Ω_m = 0.3 for the mean density, gives 337. The calcs entry `bryan-norman-mean` now expects 340 with the tolerance of the printed digits (it had needed ±10 to accept 330).
