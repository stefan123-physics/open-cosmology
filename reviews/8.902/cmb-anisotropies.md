---
page: content/year-5/8.902/cmb-anisotropies.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec17.pdf (read; local copy, every page rendered, pp. 99–103)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec18.pdf (read; local copy, rendered pp. 103–105, for the Planck figure and section 1.C)
  - https://arxiv.org/abs/1907.12875 (not opened; Fig. 57 number and caption verified from the reproduction in the Lecture 18 notes, p. 104)
verdict: pass-with-notes
---

# Review: Ripples in the CMB: anisotropies and the acoustic peaks

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Plot caption, last sentence | Odd/even peak heights (baryon loading) are explained in section 1.C, Lecture 18 notes p. 105. | "…odd and even peaks of different heights, which the next page explains." The next 8.902 page in site order is `dark-matter-freeze-out` (Lecture 19), which does not; there is no Lecture 18 page yet. | Say "which the Lecture 18 notes explain (baryon loading)" or link once the Lecture 18 page exists. |
| 2 | info | "Primary anisotropies", bullet "On scales larger than the horizon" | "baryons follow dark matter, leading to higher temperatures in dark matter wells" (p. 100). | "the temperature traces the dark matter wells" (sign left open). | Fine as a rewrite. Optionally add that the intrinsic temperature is higher in a well but the climb out wins, so wells appear as cold spots on the sky (net Sachs–Wolfe δT/T = Φ/3). Mark as the page's own addition. |
| 3 | info | Same list | The Doppler effect is a sub-item under "Large scales", together with Sachs–Wolfe (p. 100). | Separate bullet. | Fine; order kept. |
| 4 | info | Formula "Sound speed and the largest compressed wavelength", `at="eq. (464), p. 102"` | Eq. (464) is only λ_max = t_rec c_s = t_rec c/√3; c_s ≈ c/√3 is in the sentence just before it on the same page. | Both in one formula with the eq. (464) citation. | Acceptable. Could cite as "text and eq. (464), p. 102". |
| 5 | info | "Small scales" paragraph | Calls c_s t_rec the largest compressed wavelength and the sound horizon "1/√3 times smaller than the horizon". | Same. | Matches the notes. Strictly, both horizons carry the same expansion factor (3c t in the matter era), so the ratio is right while c_s t_rec is not itself the comoving sound horizon. No change needed. |
| 6 | info | Summary, 4th bullet | ℓ(ℓ+1)C_ℓ roughly constant "for l ≪ 180°/1.7° ≈ 100" (p. 102). | "ℓ ≲ 100" (body correctly says "ℓ ≪ … ≈ 100"). | Use "ℓ ≪ 100" or "ℓ well below 100" in the summary too. |
| 7 | info | Plot caption | — | S(ℓ) "switches the oscillations on above the horizon scale". | It switches them on for ℓ above about the horizon multipole, i.e. for angles *below* the horizon. Say "for ℓ above the horizon multipole (angles smaller than the horizon)". The formula also gives a tiny bump (1.08 at ℓ ≈ 68) on the plateau; harmless. |
| 8 | info | Callout "The measured spectrum" | The figure is in the Lecture 18 notes, p. 104 ("[Fig. 57 of Planck Collaboration V. 2020, A&A, 641, A5]", credited "License CC-BY"). | "The 8.902 notes reproduce…" | Fine (frontmatter `location` says Lecture 18, p. 104). Optionally say "the Lecture 18 notes" in the callout text. |

Verified as correct and correctly cited (against the rendered pages): eq. (459) p. 101; eq. (460) p. 101; eq. (461) p. 101; eq. (462) p. 101; θ ∼ π/l = 180°/l, unnumbered, p. 101; eq. (463) p. 101; eq. (464) p. 102; eq. (465) p. 102 (θ₁ ≈ 1.7°/√3 ∼ 1°, l₁ ≈ 200). The `Y` conventions (orthonormality with the conjugate on the first factor; a_ℓm with Y*) match the notes.

Bracketed slip notes, all checked and all real:
- Eq. (460) prints Y^{m*}_{l1}(θ, φ): a stray subscript 1 and φ instead of ϕ. Correct.
- Reionization "between z ∼ 1000 and z ∼ 6" (p. 100): a slip; the correction (under way by z ∼ 10, complete by z ∼ 6) matches the standard picture (Planck 2018 midpoint z ≈ 7.7; quasar Gunn–Peterson troughs at z ≈ 6). The calcs file marks this as `later-data`, which is right.
- SZ "hot intergalactic medium of galaxies" (p. 101): quoted correctly; the effect does come mainly from intracluster gas. The described spectral shift (less at low frequency, more at high) matches the notes and the thermal SZ effect.
- Dipole "due to the motion of Earth" (p. 101): the correction is correct (the CMB dipole is about 370 km/s, mostly the Sun's and Galaxy's motion; Earth's orbit adds only about 30 km/s).
- "So for a flat universe: ϕ ≈ 1.7°" (p. 102): the bracket fairly notes that this means Ω_m,0 = 1 in the matter-only models eq. (463) assumes.

## Arithmetic and answer checks
- √1001 = 31.639; 1/(31.639 − 1) = 0.03264 rad = 1.870°. Correct.
- The worked example's formulas are right for a flat matter-only universe: comoving distance (2c/H₀)(1 − 1/√(1+z)), comoving horizon (2c/H₀)/√(1+z), ratio 1/(√(1+z) − 1). The remark that a radiation era makes the true horizon smaller is correct.
- 1.870°/√3 = 1.080°; 180/1.08 = 166.7 ≈ 170. Correct.
- 5′ = 0.0833°; 180/0.0833 = 2160. Correct.
- 180/1.7 = 105.9 ≈ 100 (as in the notes); 1.7/√3 = 0.981 ∼ 1°; 180/0.981 = 183 ≈ 200 (the notes' rounding). Correct.
- 10⁻³/10⁻⁵ = 100. Correct.
- Plot: f(200) = 1 + 6 × 0.9845 × 0.9726 = 6.745 (calcs stores 6.74; passes). Local maxima of the schematic at ℓ ≈ 202, 399, 599, 798, 997 …, heights 6.75, 6.37, 5.68, 4.85, 4.00, so the peaks sit at about nℓ₁ and fall off, as the caption says. Plateau value 1 at low ℓ.
- `calcs/8.902/cmb-anisotropies.yaml`: every entry matches the page text and cites the right page/equation (dT and Silk scale p. 100; plateau p. 102; eq. (465) p. 102; sketch p. 103). `pytest tests/calc -k cmb`: 33 passed.
- Quiz: all five marked answers are correct and their explanations are right (Q1 10⁻⁵ vs 10⁻³; Q2 C_ℓ = ⟨|a_ℓm|²⟩ averaged over m; Q3 ℓ = 1 dipole from our motion; Q4 sound horizon 1/√3 of the horizon; Q5 Silk damping by photon diffusion, ≤ 5′).
- Flashcards: all four correct and consistent with the notes.
- Planck figures (first peak ℓ ≈ 220, data to ℓ ≈ 2500): consistent with the reproduced Fig. 57 (peak near ℓ ≈ 220, axis to 2500).

## Coverage and order
- Sections 1.A and 1.B of the Lecture 17 notes are covered completely and in the notes' order: basic picture, primary anisotropies, secondary anisotropies, the three main effects, spherical harmonics (459)–(462), angular scale, dipole/quadrupole, large scales (463), small scales (464)–(465), peaks at turning points, the sketch of the spectrum.
- Not covered: the start of section 1.C (Cosmology with the CMB: Ω_k from the first peak, start of Ω_m), which begins on p. 103 of the Lecture 17 notes. The Lecture 18 notes repeat p. 103 in full and finish 1.C, so it belongs on a Lecture 18 page; the `leadsTo` (Lecture 18: first two peaks measure curvature, matter density and baryon density) is supported by Lecture 18 notes pp. 103–105.
- Additions beyond the notes (all marked or plainly the page's own): the worked example in an Einstein–de Sitter model, the "n-th peak at about n ℓ₁" statement (follows from the notes' n = 1, 2, 3 drawing), and the explanation of the ISW effect (correct).

## Licensing
- No "All rights reserved" or "Courtesy of" notices in either PDF (checked by search and on the rendered pages). The p. 99 NASA map (public domain) is not used.
- None of the notes' drawings are reproduced: the spectrum plot is generated from a stated schematic formula; the Planck Fig. 57 (CC BY) is only described in words and credited in `references`.
- Text is rewritten; short quoted phrases ("between z ∼ 1000 and z ∼ 6", "hot intergalactic medium of galaxies", "flat universe") are in quotation marks inside slip notes. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` Lecture 18 currently has no page, so it will render as plain text until one exists.
- Uncertain: the location "Fig. 57" was checked only via the Lecture 18 notes' caption, not in the arXiv paper itself.

## Resolution (2026-11-17, by the page author)

1. Warning (plot caption pointed to "the next page"): now names the Lecture 18 page and baryon loading; that page (`cmb-cosmological-parameters`) is written in the same run.
2. Large-scale bullet: now gives the notes' "higher temperatures in dark matter wells" and adds, marked as the page's own, that combined with the Sachs–Wolfe effect the wells appear as cold spots (δT/T = Φ/3c²).
3. Eq. (464) citation now says c_s is in the sentence before the equation.
4. Summary: ℓ ≲ 100 changed to ℓ ≪ 100.
5. Caption: S(ℓ) now described as switching the oscillations on at multipoles above the horizon's (angles smaller than the horizon).
6. Callout now says "the 8.902 Lecture 18 notes".
7–8. No change needed.

Status set to `reviewed`.
