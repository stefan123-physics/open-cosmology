---
page: content/year-5/8.902/observational-cosmology-distances.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec11.pdf (read; local copy, all 7 PDF pages rendered as images: printed pp. 70–75 plus the OCW end page, compared in detail)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec12.pdf (local text only, searched to confirm that the Lecture 12 notes treat the horizon and flatness problems, for `leadsTo`)
verdict: pass-with-notes
---

# Review: Observational cosmology: redshift and cosmic distances

The source is section 1.C of the 8.902 Lecture 11 notes, "Observational cosmology": redshift (306)–(311) on p. 70; luminosity "twice" (312)–(313), distance measures, comoving distance (314) on p. 71; f_k (315), angular diameter distance (316)–(318), luminosity distance (319)–(321) on p. 72; (322)–(323), Einstein–de Sitter (324)–(332) and the flat case (333) on p. 73; (334)–(336), the distance plot and the start of the comoving volume element (337) on p. 74; (338)–(344) on p. 75. Section 1.D (inflation) starts on p. 75 and belongs to the Lecture 12 page; it is not counted as missing.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Plot caption ("The notes show the same comparison…") and section "The flat universe in general" | p. 74 plot: χ, D_A, D_L for flat Ω_m = 0.315, H₀ = 67.4, log axes. Read off the figure: at z ≈ 300, χ ≈ 4×10⁶ Mpc, D_L ≈ 10⁹ Mpc, D_A ≈ 1.3×10⁴ Mpc, and D_A rises monotonically with no maximum. Recomputed (SciPy): χ(300) = 13,500 Mpc, D_A(300) = 45 Mpc, D_L(300) = 4.1×10⁶ Mpc; at z = 10, χ = 9,630, D_A = 875 Mpc (figure ≈ 10⁵ and ≈ 10⁴). Every curve in the figure appears to be too large by a factor (1 + z) (my reading of a log plot, so the exact factor is somewhat uncertain; the missing D_A maximum is certain: flat ΛCDM D_A peaks at z = 1.59, 1,794 Mpc). | Calls it "the same comparison" without comment. A reader who opens the notes will see a D_A curve that never turns over, contradicting the page's main point about the maximum. | Add a bracket (writing rule 4): "[The curves in the notes' figure come out too large at high redshift (each by about a factor 1 + z), and their D_A shows no maximum; for these parameters D_A in fact peaks at z ≈ 1.6, about 1,790 Mpc.]" Optionally add that number to `calcs`. |
| 2 | warning | "Luminosity distance", first sentence | p. 72: the observed surface for a_obs = 1 is 4π a_obs² f_k²(χ). | "Light emitted now spreads over a sphere around the source." The light was emitted then (at t_em), not now. | "Light emitted by the source spreads over a sphere centred on it. When it reaches us …" |
| 3 | info | Paragraph after eqs. (325)–(326) ("The comoving distance gives the same at small z …", eqs. 327–332) | (329)–(331) take a ≈ 1 − z and pull 1/a² out of the integral as 1/(1 − z)², then drop it: χ ≈ (c/H₀) z. | Uses ∫ da/a² ≈ 1 − a_em ≈ z. Correct to first order, but a different (cleaner) route than the notes, not said. In fact ∫_{a_em}^1 da/a² = 1/a_em − 1 = z exactly, so only E ≈ 1 is an approximation. | Optional: "with E ≈ 1, ∫ da/a² = 1/a_em − 1 = z exactly, so χ ≈ cz/H₀ (the notes reach this by a rougher approximation, eqs. 327–332)". |
| 4 | info | Section "The flat universe in general" | Caption p. 74: "a flat universe with Ω_m = 0.315 and H₀ = 67.4 km/s/Mpc". The word "Planck" does not appear. | "The notes plot all three distances for the Planck values". | These are the Planck 2018 values (the notes' own eq. (300) quotes them), so the attribution is fair; optionally "for the Planck values of eq. (300)". |
| 5 | info | Section "Redshift", before eq. (307) | p. 70: "Photons always travel along the shortest path, so … ds = 0". | "Light follows ds = 0". | Fine: the page avoids repeating the loose "shortest path" wording (light follows null geodesics). No change needed. |
| 6 | info | Opening paragraph: "(The Lecture 11 notes then begin the section on inflation, which the next page covers.)" | — | No Lecture 12 page exists yet in `content/year-5/8.902/`; until it does, the "next" page in course order is `linear-perturbations` (Lecture 13). | Fine once the Lecture 12 page is added; otherwise "which a later page covers". |
| 7 | info | Quiz 4 explanation | — | "The light we see left them when the universe was small and they were close to us; since then the expansion has carried them away." Correct but does not name the mechanism in the page's own formula. | Optional: add "so l = a_em f_k(χ) φ: a small a_em means a given size covers a larger angle". |

Every Formula checked against the rendered PDF; equation numbers and printed pages are all right:
(306) p. 70; (307) p. 70; (308) p. 70 (the page merges the notes' pulse A / pulse B lines into one chain; same content); (309)–(310) p. 70; (311) p. 70; (312) p. 71; (313) p. 71; (314) p. 71 (page writes da/(a ȧ) for the notes' da/(ȧ a), and χ for χ^obs_em); (315) p. 72; (316)–(317) p. 72; (318) p. 72; (319)–(321) p. 72; (322) p. 73; (323) p. 73; (324) p. 73; (325)–(326) p. 73; (327)–(332) p. 73 (cited in prose); (333)–(335) pp. 73–74; (336) p. 74; (337)–(340) pp. 74–75 ((337) is the last line of p. 74); (341)–(343) p. 75. The bullet definitions F = L/4πD_L² and φ = l/D_A at the top of "Which distance?" are the notes' p. 71 bullets (not numbered; no citation needed as they are inline).

Bracketed slip notes, verified on the rendered PDF:
- (320)–(321) squares: confirmed. (320) prints 4π a_obs² f_k²(χ) = 4π f_k(χ) (square dropped on the right); (321) prints the last denominator as 4π[f_k²(χ)(1 + z)]² (square added inside the bracket). The page's correction is right. (The notes also swap the χ indices to χ^em_obs in (321); immaterial.)
- (344) stray r: confirmed, the notes print f_k²(χ) r dΩ (dχ/dz) dz. The page's corrected form f_k²(χ) dΩ (dχ/dz) dz is right: dχ/dz = (c/H₀)/E(z) supplies the c/H₀, so it equals (343).
- z as both variable and limit in (334)–(336): confirmed; the page's z′ is right.

Other claims checked: the "twice" argument and both factors a_em/a_obs (p. 71); "the comoving distance is not measurable" (p. 71); endpoints of l at the same χ and t (notes: same (χ, θ, t)); D_A ≈ D_L only for z ≪ 1 (p. 73); EdS parameters Ω_Λ,0 = Ω_κ,0 = Ω_r,0 = 0, Ω_m,0 = 1 (p. 73, page "everything else 0"); "by z ∼ 1 there is a significant difference" (p. 74 caption); A_comoving = A_proper/a² (339)–(340); dχ = (c/H₀) dz/E(z) (p. 75). All match.

## Arithmetic and answer checks
Recomputed in Python (`.venv`, SciPy `quad`, `minimize_scalar`):
- EdS D_A = (2/(1+z))(1 − (1+z)^(−1/2)): with u = (1+z)^(−1/2), D_A ∝ u²(1 − u), maximum at u = 2/3, 1 + z = 9/4, z = 1.25; value 2·(4/9)·(1/3) = 8/27 = 0.29630. Numerical maximiser: z = 1.2500, 0.29630. Caption and plot point (1.25, 0.2963) correct.
- EdS χ = 2(1 − 1/√(1+z)) (c/H₀): integral of da/a^(1/2) from 1/(1+z) to 1 with E = a^(−3/2); correct. Plot curve expressions match eq. (324) and this χ. D_L leaves the range [0, 3] near z ≈ 2 (D_L(5) = 7.1); clipped, which is fine.
- Small-z limit (325)–(326): (2c/H₀)(z/2) = cz/H₀. Correct.
- Worked example: χ(z = 1) for Ω_m = 0.315, Ω_Λ = 0.6847, H₀ = 67.4: 3401.6 Mpc (Ω_r = 0), 3401.2 Mpc (Ω_r = 9.2×10⁻⁵). "About 3400" correct. D_A = 1700, D_L = 6800, ratio 4: correct. c/H₀ = 4447.96 Mpc, "4450" correct. φ = 0.01/1700 = 5.88×10⁻⁶ rad = 1.213″, "5.9×10⁻⁶ rad, about 1.2 arcseconds" correct. "Luminosity distance would give a size four times too large; comoving, twice": l = φD, D_L/D_A = 4, χ/D_A = 2. Correct.
- Small-z check at z = 0.01: χ = 44.38, D_A = 43.94, D_L = 44.82 Mpc vs cz/H₀ = 44.48. Consistent with "all agree nearby".
- Quiz 1 (answer 1, z = 1): 1/0.5 − 1 = 1. Correct.
- Quiz 2 (answer 1): correct; explanation matches (312).
- Quiz 3 (answer 2, D_L = (1+z)² D_A): correct; "factor of 4 at z = 1" correct.
- Quiz 4 (answer 1): correct for EdS (z = 1.25); see finding 7 for the explanation.
- Flashcards: card 1 matches (306), (310), (311); card 2 matches (314) with a_obs = 1; card 3 matches (316), (318), (319), (322), (323).
- `calcs/8.902/observational-cosmology-distances.yaml`: all 10 entries match the text they quote on the page. `npm run calc:test -- -k observational`: 10 passed. Minor: `chi-z1` `where` says Ω_Λ = 0.685 while its formula (and the page) use 0.6847, and the formula includes Ω_r = 9.2×10⁻⁵, which the page's problem statement does not mention (effect on the result 0.4 Mpc; immaterial). `hubble-distance` cites "p. 74", where H₀ = 67.4 appears in the caption; fine.

## Coverage and order
- The page follows the notes' order exactly: redshift (306)–(311), luminosity "twice" (312)–(313), distance measures, comoving distance (314), f_k (315), D_A (316)–(318), D_L (319)–(323), EdS case (324)–(332), general flat case (333)–(336) and the plot, comoving volume element (337)–(344).
- Nothing from section 1.C is left out. The notes' two wave sketches (pp. 70, 71) and the D_A geometry sketch (p. 72) are replaced by words; the D_L sphere sketch (p. 72) likewise.
- Additions (own material): the EdS distance plot with the D_A maximum, the z = 1 worked example, the explicit change of variable to z′, the geometric reading of the volume element.
- Section 1.D (inflation, from p. 75) is for the Lecture 12 page, as stated on the page.

## Licensing
- The notes carry no "All rights reserved" or "Courtesy of" notice (checked on every page and by text search); OCW end page only. CC BY-NC-SA as for the rest of 8.902.
- The notes' distance plot (p. 74) and sketches are not reused; the page's graph is a `<Plot>` generated from the EdS formulas, as the caption says.
- No verbatim copying beyond short standard phrases ("comoving coordinates move with …", "luminosity is affected twice"). The worked example uses the notes' parameter values but its question (angle of a 10 kpc galaxy at z = 1) and numbers are the page's own.
- No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 8.902 Lecture 12 (inflation: horizon and flatness problems): confirmed, the Lecture 12 notes discuss both problems (the horizon problem already starts on p. 75 of the Lecture 11 notes). No `Callout kind="cosmology"` is needed on a cosmology-course page.
- Prerequisites `friedmann-equations-density-parameters` and `luminosity-and-redshift` exist.
- No em dashes in the page.
- Verdict pass-with-notes: no wrong physics, numbers or citations; finding 1 (the notes' plot) and finding 2 (wording) should be fixed before `status: reviewed`.

## Resolution (2026-11-17, by the page author)

1. Warning (notes' p. 74 plot): added a bracket saying the plot looks wrong at high redshift (curves too high, D_A never turns over) and that for these parameters D_A peaks near z ≈ 1.6 at about 1800 Mpc (recomputed: z = 1.59, 1794 Mpc; new calcs entry `lcdm-DA-peak`).
2. Warning: "Light emitted now" → "Light emitted by the source spreads over a sphere around it".
3. Info: added that ∫da/a² = z exactly and that the notes take a slightly different route.
5. Info: the Lecture 12 page (`inflation-scalar-field`) is written next in the same run.
7. Info: `chi-z1` description now gives Ω_Λ = 0.6847 and Ω_r = 9.2 × 10⁻⁵.
4, 6: no change needed.

Status set to `reviewed`.
