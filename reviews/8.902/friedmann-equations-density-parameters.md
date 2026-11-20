---
page: content/year-5/8.902/friedmann-equations-density-parameters.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec10.pdf (read; local copy, PDF pages 5–10 rendered as images, printed pp. 65–69 plus the OCW end page, compared in detail)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
  - https://arxiv.org/abs/1807.06209 (Planck 2018 VI; read the PDF text for Table 2, eq. (15) and eq. (47b), to check the quoted parameters and z_eq)
verdict: needs-changes
---

# Review: The Friedmann equations from general relativity, and the density parameters

The source is section 1.B of the 8.902 Lecture 10 notes, "Dynamics derived with general relativity": the field equation (277) at the foot of p. 65; the Poisson comparison, metrics (278)–(286) on p. 66; the Robertson–Walker metric (287)–(288), the stress–energy tensor (289)–(292), the Friedmann equations (293) and ρ_crit (294) on p. 67; ρ_crit,0 (295), the zero-energy sphere (296), density parameters (297)–(299) and Ω_m = Ω_dm + Ω_b on p. 68; Planck values (300), the rewritten Friedmann equation (301)–(302) and the "Notes" with equality epochs (303)–(305) and Ω_k,0 ≈ 0 on p. 69. Pages 61–65 up to 1.B belong to `cosmological-principle-expansion` and are not counted as missing.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Equality epochs", paragraph after eq. (304)–(305); `calcs` id `mr-precise`; plot caption and curve | (305): a ≈ 1/3700, z = 3700. | "with the more precise Ω_r,0 ≈ 9.1×10⁻⁵ (photons plus three neutrino species), z ≈ 3460". Recomputed for T = 2.7255 K, h = 0.674, N_eff = 3.046: Ω_γ,0 = 5.44×10⁻⁵, Ω_r,0 = 9.21×10⁻⁵ (Ω_r h² = 4.18×10⁻⁵), so z_eq = 0.315/9.21×10⁻⁵ − 1 = 3420, not 3460. | Use Ω_r,0 ≈ 9.2×10⁻⁵ and z ≈ 3420 in the text, the plot curve (`log10(9.2e-5)`), the point (x = −3.534, y = 10.10) and the caption (log₁₀ a = −3.53, z ≈ 3420); update `mr-precise` and `plot-log-aeq`. The conclusion (notes' 3700 a little high; Planck ≈ 3400) stands. |
| 2 | warning | Quiz 3 explanation | — | "with the more precise Ω_r,0 ≈ 9×10⁻⁵, z ≈ 3400". 0.315/9×10⁻⁵ = 3500, so the numbers do not match each other. | "with the more precise Ω_r,0 ≈ 9.2×10⁻⁵, z ≈ 3400". |
| 3 | warning | Bracket after the three geometries (eq. 287) | (287): ds² = −c²dt² + a(t)[dχ² + f_k²(χ)](dθ² + sin²θdφ²). The bracket closes **after** f_k²(χ), so the angular factor multiplies dχ² too. | "[The notes … put the bracket closing before f_k²]". That misdescribes the slip. | "[The notes write a(t) for a²(t) and close the bracket after f_k²(χ), so that the angular factor multiplies dχ² as well; the form above is the standard one.]" |
| 4 | warning | "Critical density", sentence after eq. (296) | p. 68: "the limiting case between an open and closed universe and leads to eternal expansion". | "This is the borderline between an open universe and a closed one, which expands forever but ever more slowly." Reads as if the closed universe expands forever. | "This is the borderline between an open and a closed universe: it expands forever, but ever more slowly." |
| 5 | warning | `calcs/values.yaml`, new entry `'0.6847'` | Notes (300) quote Ω_Λ,0 = 0.6847 ± 0.0073. | Label "Planck 2018 (TT,TE,EE+lowE+lensing+BAO)". In Planck 2018 VI, 0.6847 ± 0.0073 is the TT,TE,EE+lowE+lensing value (Table 2, and eq. (15) says so explicitly); the +BAO value is 0.6889 ± 0.0056, which is the existing `'0.69'` entry. | Change the label to "later: Planck 2018 (TT,TE,EE+lowE+lensing), as quoted in the 8.902 Lecture 10 notes (friedmann-equations-density-parameters)". |
| 6 | info | Bracket after eq. (303) | (303) ⟹ a ≈ 1/2.3, z ≈ 1.3. | Diagnosis "2.17 ≈ 2.3 is the value of a⁻³, not of 1/a". The diagnosis (a⁻³ taken for 1/a) is right in substance, but 2.17 is not ≈ 2.3; the notes' 2.3 most likely comes from rounded Ω_Λ/Ω_m = 0.7/0.3 = 2.33 (uncertain: the notes do not show the step). The corrected values (a = 0.772, z = 0.295, 10.3 Gyr) are right. | "[The notes conclude a ≈ 1/2.3, z ≈ 1.3. That is a slip: Ω_Λ,0/Ω_m,0 ≈ 2.2 (2.3 with rounded 0.7/0.3) is a⁻³, not 1/a. …]" |
| 7 | info | Same bracket, end | "z ≈ 1 is 6–7 Gyr after the Big Bang". | "about right (5.8 billion for these parameters)". 5.84 Gyr is outside 6–7, so "a little high" is more accurate. | "Their remark that z ≈ 1 is 6 to 7 billion years after the Big Bang is a little high (5.8 billion for these parameters)." |
| 8 | info | "Critical density", first sentence | (294): the density that gives a flat universe (k = 0). | Adds "(with Λ = 0)". True, but narrower than needed: with Λ, the total ρ + ρ_Λ = ρ_crit gives k = 0, which the page itself uses later (Ω_k,0 = 1 − Ω_r,0 − Ω_m,0 − Ω_Λ,0). | Optional: "(or, with Λ, the total density including ρ_Λ)". |
| 9 | info | Bracket after the perfect-fluid formula | (291): T_μν = (ρc² + p)u_μu_ν − (p/c²)g_μν; (292): rest frame diag(−ρc², p, p, p). | Note on mixed sign conventions; standard (−,+,+,+) form (ρ + p/c²)u_μu_ν + p g_μν with T₀₀ = +ρc². Verified correct (u_μu^μ = −c², u₀ = −c). (291) as printed is also dimensionally inconsistent (p next to p/c²); the −ρc² in (292) would fit the mixed tensor T^μ_ν. | Fine as is; optionally mention the units mismatch. |
| 10 | info | Quiz 1 explanation and Summary vs eq. (295) | (295): ≈ 1.8×10⁻²⁹ h² g/cm³. | Formula shows the notes' 1.8; quiz and Summary use 1.9; the worked example explains (1.878). Consistent once read together. "the notes round to 1.8": 1.878 rounds to 1.9, so the notes truncate. | Optional: "the notes give 1.8". |
| 11 | info | `references.planck2018vi` | — | Listed but not cited anywhere in the body; the sentence "Planck's full analysis gives z_eq ≈ 3400" is the natural place. Table 2: z_eq = 3402 ± 26 (TT,TE,EE+lowE+lensing, the column of the notes' other values) and 3387 ± 21 (+BAO, the value in `calcs` `mr-planck`). | Mention "Planck 2018, Table 2"; in `mr-planck` say which column (or use 3402 ± 26 to match the other quoted values). Either rounds to 3400. |

Every Formula checked against the rendered PDF; equation numbers and printed pages are all right:
(277) p. 65; (278) p. 66; (279)–(280) p. 66; (281) p. 66; (282) p. 66; (283)–(284) p. 66; (285)–(286) p. 66; (287) p. 67; (288) p. 67; (289)–(292) p. 67; (293) p. 67; (294) p. 67; (295) p. 68; (296) p. 68; (297) p. 68; (298)–(299) p. 68; (300) p. 69; (301) p. 69; (302) p. 69; (303) p. 69; (304)–(305) p. 69. The tex matches the notes except where a bracket note explains the change ((281) square, (287), (292), (297) Ω_k). (301) on the page omits the notes' intermediate line with ρ_crit,0 in front; the remaining steps match.

Bracketed slip notes, verified on the rendered PDF:
- Poisson with Λ/3 (p. 66): the notes print ∇²Φ = 4πGρ + Λ/3. The page's Newtonian limit ∇²Φ = 4πGρ − Λc² is right for the convention of (277)/(293) (Φ_Λ = −Λc²r²/6 gives the + Λc²/3 term in ä/a). Correct.
- (281) missing square on dφ: confirmed (R²(dθ² + sin²θ dφ)).
- (287) a(t) for a²(t): confirmed; bracket position misdescribed (finding 3).
- (291)–(292) sign conventions: confirmed (finding 9).
- (297) Ω_k(t) = −kc²/H² without a²: confirmed; the page's correction is right ((298) has the same form with H₀, which is right at a = 1).
- (303) a ≈ 1/2.3, z ≈ 1.3: confirmed as printed; correction right (finding 6 on wording).
- (305) z = 3700 vs 3460/3400: notes' value confirmed; page's 3460 should be 3420 (finding 1).

Other claims checked: k̃ = −kc² (consistent with (275) and (293), as the previous review also found); Λ in 1/length² from Λc²/3 in (293); p = ρc²/3 and p = 0 (p. 67); the bracket "the quoted Ω_k,0 is the Planck result combined with BAO" is correct (Planck eq. (47b): Ω_K = 0.0007 ± 0.0019, TT,TE,EE+lowE+lensing+BAO), while Ω_m, Ω_Λ and H₀ in (300) are the TT,TE,EE+lowE+lensing values (0.3153 ± 0.0073, 0.6847 ± 0.0073, 67.36 ± 0.54).

## Arithmetic and answer checks
Recomputed in Python (`.venv`, SciPy `quad`):
- 3(100 km/s/Mpc)²/(8πG) = 1.8784×10⁻²⁹ g/cm³ (G = 6.674×10⁻⁸ cgs, Mpc = 3.0857×10²⁴ cm). Page's 1.878 correct.
- 1.878×10⁻²⁹ × 0.674² = 8.53×10⁻³⁰ g/cm³; / 1.67×10⁻²⁴ g = 5.11×10⁻⁶ per cm³ = 5.1 per m³. Correct.
- 0.049 × 5.1 = 0.250; with 0.0493: 0.252. "≈ 0.25, one proton in every four cubic metres" correct.
- Matter–Λ: 0.315/0.685 = 0.460; a = 0.460^(1/3) = 0.772 (0.7720 with 0.6847); z = 0.295 ≈ 0.30. Correct. Ω_Λ/Ω_m = 2.174. 0.7/0.3 = 2.33.
- Age at a = 0.772 (flat, H₀ = 67.4, Ω_m = 0.315, Ω_Λ = 0.6847, Ω_r = 9.1×10⁻⁵): 10.30 Gyr, "about 10 billion" correct. At z = 1: 5.84 Gyr, page's 5.8 correct. (At the notes' a = 1/2.3: 4.80 Gyr.) Age today 13.79 Gyr.
- Matter–radiation: 0.315/10⁻⁴ = 3150 correct. 0.315/9.1×10⁻⁵ − 1 = 3460 (arithmetic correct, input Ω_r wrong: see finding 1). Ω_r,0 recomputed = 9.209×10⁻⁵ (N_eff 3.046) or 9.207×10⁻⁵ (3.044), z_eq = 3419–3420.
- Plot: log₁₀(9.1×10⁻⁵/0.315) = −3.539; log₁₀(0.315/0.685)/3 = −0.1125; point y-values 10.115 (both lines) and −0.164 (both lines). 10^3.539 = 3459. Consistent with the page's inputs; the radiation curve at x = −5 is at 15.96, inside the range [−3, 18].
- Quiz 1 (answer 1): correct; explanation numbers correct.
- Quiz 2 (answer 1): correct; 0.315/0.685 = 0.46, a = 0.77, z = 0.3, ~10 Gyr: correct.
- Quiz 3 (answer 1): correct; explanation 10⁻⁴/0.315 = 1/3150 ≈ "1/3000" acceptable; "9×10⁻⁵ → 3400" inconsistent (finding 2).
- Quiz 4 (answer 1): correct.
- Flashcards: equations match (293) and (302); parameter card matches (300) (0.685 rounded from 0.6847).
- `calcs/8.902/friedmann-equations-density-parameters.yaml`: every entry matches the page text it quotes. `npm run calc:test -- -k friedmann-equations-density`: 19 passed. `mr-precise` and `plot-log-aeq` will need updating with finding 1; `mr-planck` column (finding 11).
- `calcs/values.yaml` `'0.6847'`: value right, role "later" right, combination label wrong (finding 5).

## Coverage and order
- The page follows section 1.B in the notes' order: field equations and Poisson comparison → metrics (278)–(286) → Robertson–Walker (287)–(288) → stress–energy and perfect fluid (289)–(292) → Friedmann equations (293) and p for radiation/matter → ρ_crit (294)–(296) → density parameters (297)–(299), Ω_dm + Ω_b → Planck values (300), Ω_r,0 → rewritten Friedmann equation (301)–(302) → notes: dominance order, (303), (304)–(305), Ω_k,0 ≈ 0.
- Left out: the definition Ω₀ = ρ₀/ρ_crit,0 in (298) and the matrix form of (279)–(281) (the page gives the resulting line elements). Neither matters.
- Added: the Newtonian-limit correction, the k̃ = −kc² link to the previous page, the worked example, the generated plot of the three terms, Planck BAO remark. All marked as the page's own or as corrections.

## Licensing
- The © Geek3 a(t) plot (p. 64) and the log a – log t figure (p. 65) are not reused; the only graph is generated from E²(a). The notes' small diagrams on p. 66 (plane, sphere) are not reused.
- No verbatim copying found: sentences that follow the notes ("Radiation dominates first, then matter, then the cosmological constant"; "Homogeneity and isotropy fix the form of the metric") are rewritten or standard phrasing.
- No OpenStax or LibreTexts material. Planck 2018 is cited only for numbers.

## Notes
- No `Callout kind="cosmology"` (this is itself a cosmology course page). `leadsTo` 8.902 Lecture 11 ("Observational Cosmology" in `_course.json`): the reason given ("distances, redshift and how the density parameters are measured") fits the title; the Lecture 11 notes themselves were not read for this review, so the detail is unverified.
- Prerequisite `robertson-walker-spacetime` exists (content/year-4/8.286).
- Planck numbers were read from the arXiv PDF text of 1807.06209 (Table 2 columns are garbled in extraction; the column assignment of 0.6847 is confirmed by eq. (15), that of 3402/3387 by the column order in the z_eq row).

## Resolution (2026-11-17, by the page author)

1. Error (Ω_r,0): recomputed as 9.21 × 10⁻⁵ (T = 2.7255 K, N_eff = 3.046, h = 0.674). The equality paragraph, plot curve, marked point (−3.535, 10.10), caption (log₁₀ a = −3.53, z ≈ 3420) and the calcs entries `mr-precise` (now computed from T, N_eff and h) and `plot-log-aeq` are updated; `age-at-mL` and `age-at-z1` now use 9.2 × 10⁻⁵ too.
2. Quiz 3 explanation: 9.2 × 10⁻⁵, z ≈ 3420.
3. The eq. (287) slip note now says the notes close the bracket after f_k²(χ), so the angular factor would multiply dχ² too.
4. The sentence after eq. (296) now says a universe at exactly the critical density expands forever.
5. `calcs/values.yaml`: the '0.6847' entry now names the TT,TE,EE+lowE+lensing fit (eq. 15).
Info: "about right" → "a little high" for 5.8 Gyr; "the notes round to 1.8" → "the notes give 1.8"; the critical density is defined via the total density including ρ_Λ; Planck 2018 VI is now named in the body; `mr-planck` gives 3402 ± 26 (and 3387 ± 21 with BAO). Other info items need no change.

Status set to `reviewed`.
