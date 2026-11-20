---
page: content/year-5/8.902/inflation-scalar-field.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec12.pdf (read; local copy, all 9 PDF pages rendered as images: printed pp. 75–82 plus the OCW end page, compared in detail)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
verdict: pass-with-notes
---

# Review: Why inflation: the horizon and flatness problems, and a slowly rolling field

The source is section 1.D "Inflation" and section 1.E "Basic story of cosmology" of the 8.902 Lecture 12 notes (M. Vogelsberger): problems and recombination (345)–(347) on p. 75 (repeated from the end of Lecture 11); Saha (348), horizon (349)–(353) and the start of (354) on p. 76; (355)–(360), monopoles and seeds on p. 77; "Inflation: basic ideas", two sketches, (361)–(362) on p. 78; Λ as negative pressure (363)–(366), scalar field (367)–(369) on p. 79; field equation (370), slow roll (371)–(374) on p. 80; potential sketch, reheating, (375) and section 1.E on p. 81; the "optically thick" sentence and the WMAP timeline image on p. 82. Section 2.A on p. 82 belongs to `linear-perturbations` and is not counted as missing.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Section "Slow roll and reheating", last paragraph | p. 81: "large values of φ₀ and V₀ lead to more inflation (longer slow roll)", after (375). | "a higher plateau and a longer path give more inflation", stated as fact. Faithful to the notes, but loose: the number of e-folds in slow roll is N ≈ 8πG ∫ (V/V′) dφ, which is unchanged if V is multiplied by a constant. Height alone helps only if the slope is held fixed. | Optional: "the notes conclude that a higher plateau and a longer path give more inflation (more precisely, what counts is how flat the plateau is compared with its height, V/V′, over the path)." |
| 2 | info | Section "The story so far", final bracket | p. 81: z ≈ 0.33 for matter → Λ. | "agrees with the corrected calculation on the density-parameters page". That page gives z ≈ 0.3 (recomputed 0.295 for Ω_m = 0.315, Ω_Λ = 0.6847); 0.33 is the value for Ω_m = 0.3, Ω_Λ = 0.7 (recomputed 0.326). Also "not with that page's z ≈ 1.3 in the Lecture 10 notes" reads awkwardly. | "(The notes' 0.33 is close to the corrected value on the density-parameters page, z ≈ 0.3, and not to the z ≈ 1.3 printed in the Lecture 10 notes.)" |
| 3 | info | Section "Two more problems", Monopoles | p. 77: "General unified theories predict many magnetic monopoles". | "Grand unified theories". The page is right; the notes' wording is a slip, corrected silently. | Optional under writing rule 4: "[The notes write "general unified theories".]" Not required: it is a name, not physics. |
| 4 | info | Section "A slowly rolling scalar field", bracket after eq. (369) | p. 80 also writes ρ = ½φ̇² + V and p/c² = ½φ̇ − V, mixing ρ with ρc² and p with p/c² compared with (368). | The bracket mentions the missing squares only. The page itself uses ρc² and p consistently, so nothing on the page is wrong. | Optional: add "and mixes ρ with ρc²" to the bracket. |
| 5 | info | Section "Departure from flatness", eq. (359) | p. 77: kc²/(a²H²) (no absolute value). | \|k\|c²/(a²H²). The page's form is the correct one for the absolute value on the left. | None needed. |
| 6 | info | Section "The story so far" | p. 82: "The first five stages here are optically thick to photons", stage five being recombination itself. | "The first five stages are hidden …; from recombination on, the universe is transparent". Consistent within rounding (the transition is recombination). Not cited, which is fine for prose. | None needed. |
| 7 | info | Worked example "How flat at one second?" | Not in the notes (they state only (360) and "fine-tuning"). | Own example. Recomputed product is 1.48 × 10⁻¹⁸, which the page rounds to "≈ 10⁻¹⁸" and "eighteen decimal places" (strictly 1.5 × 10⁻¹⁸ is 1 to 17 decimal places). It uses the same inputs (0.01, 13.8 Gyr, 50,000 yr, 1 s) and the same result as the 8.286 `flatness-problem` page, which in turn follows Guth's board estimate. | Optional: write "about 1.5 × 10⁻¹⁸"; or vary the example (e.g. at nucleosynthesis, t ≈ 3 min, or at 10⁻³⁴ s) so it does not duplicate the 8.286 page. |

Every Formula checked against the rendered PDF; equation numbers and printed pages are all right:
(345) p. 75; (346) p. 75 (page writes e⁻ for the notes' e); (347) p. 75 (page omits the η ≈ 5 × 10⁻¹⁰ factor from the Formula and discusses it in the bracket); (348) p. 76; (349)–(350) p. 76 (merged into one line, same content); (351)–(352) p. 76 (radiation case corrected, see slips; the notes' split integral in (352) is summarised in words); (353) p. 76; (354)–(355) pp. 76–77 ((354) is the last line of p. 76, (355) the top of p. 77); (356) p. 77; (357) p. 77 (in prose); (358)–(360) p. 77; (361) p. 78 (the notes' four-line chain written as one line); (362) p. 78 (the notes' Λc²/3 term dropped with "Λ = 0 early on", as the notes do in the next line); (363) p. 79; (364)–(365) p. 79; (366) p. 79; (367) p. 79; (368) p. 79; (369) p. 79 (squares restored); (370) p. 80 (the notes' derivation compressed; the unnumbered full Friedmann equation H² = (8πG/3)[½φ̇² + V] on p. 80 is not shown, only its slow-roll form (371)); (371)–(374) p. 80; (375) p. 81 (in prose).

Bracketed slip notes, each verified on the rendered PDF:
- η factor (eq. 347, p. 75): confirmed, the notes print η ≈ 5 × 10⁻¹⁰ (Ω_b,0h²/0.01). The standard relation η = 273.9 × 10⁻¹⁰ Ω_bh² gives 2.74 × 10⁻¹⁰ per 0.01; the page's 2.7 × 10⁻¹⁰ and 6.1 × 10⁻¹⁰ for Ω_bh² = 0.0224 (recomputed 6.14 × 10⁻¹⁰) are right.
- Saha exponent (eq. 348, p. 76): confirmed, printed e^(−χ/k_BT). The correct form has e^(+χ/k_BT): the right side must grow as T falls so that x → 0. Page right.
- Radiation horizon (eq. 351, p. 76): confirmed, printed 1/(1 + z). With H = H₀√Ω_r,0 (1 + z)², c/H ∝ (1 + z)⁻²; also aχ = a · ca/(H₀√Ω_r,0) = c/H. Page right.
- ρ_r/ρ_m at recombination (eq. 353, p. 76): confirmed, printed ~5 × 10⁻². Recomputed 9.2 × 10⁻⁵ × 1091/0.315 = 0.319, i.e. radiation is 0.319/1.319 = 24% of the total: "about a quarter" right. (Even with photons only, Ω_γ ≈ 5.4 × 10⁻⁵, the ratio is 0.19, not 0.05.)
- √Ω_m,0 form (eq. 357, p. 77): confirmed that in the flat derivation (355)–(356) Ω_m,0 cancels. For an open matter-only universe, D_A → 2c/(H₀Ω_m z) at large z while l_horizon = (2c/H₀)Ω_m^(−1/2) z^(−3/2), so φ ≈ √(Ω_m/z): the page's explanation is right and agrees with the bracket on `cmb-anisotropies`.
- "w = −1/3 is needed" (p. 79, after (365)): confirmed. Page right that w < −1/3 is needed.
- Missing squares on φ̇ (369) first line and p. 80 pressure: confirmed, both ½φ̇ terms in (369) line 1 and "p/c² = ½φ̇ − V(φ)" on p. 80 lack the square.
- 24πG in ε (374): confirmed, printed 1/(24πG). The usual definition is ε = (1/16πG)(V′/V)² = (M_Pl²/2)(V′/V)² with M_Pl² = 1/(8πG), ħ = c = 1; η = (1/8πG)(V″/V) is standard. Page right. (The units remark "ħ = c = 1" is the page's own addition, correct.)

Other claims checked against the notes: χ = 13.6 eV; recombination T ≈ 3000 K, z ≈ 1090 for Ω_b,0 = 0.045, T₀ = 2.73 K (p. 76); ΔT/T ≲ 10⁻⁵ (p. 76); "largest contribution comes from matter dominated phase" (p. 76); (360) scalings; monopoles and seeds (p. 77); the flatness and horizon sketches (p. 78, described in words); "This also solves the monopole and seed problem" (p. 78); Λ "acts too late" and "would not stop inflation" (p. 79); "In a static universe, H = 0, and there is no Hubble drag", "dV/dφ is how fast energy is extracted" (p. 80); potential sketch with plateau V₀, minimum φ₀, reheating by coupling to ordinary matter (p. 81); section 1.E ingredients and stages a)–g) (p. 81). All match. The notes call the field "(inflation)", evidently a typo for inflaton; the page's "inflaton" is right.

## Arithmetic and answer checks
Recomputed in Python (`.venv`):
- 13.6 eV / k_B = 1.578 × 10⁵ K: "about 1.6 × 10⁵ K" (quiz 1) and "about 10⁵ K" (text, as in the notes) both fine.
- T₀(1 + z) = 2.73 × 1091 = 2978 K; 3000/2.73 − 1 = 1098: consistent with z ≈ 1090.
- 1/η = 1/6.14 × 10⁻¹⁰ = 1.6 × 10⁹ photons per baryon: "about a billion" (quiz 1) and "η ∼ 10⁻⁹" fine as orders of magnitude.
- Horizon angle: 1/√1090 = 0.0303 rad = 1.735°: "0.030 rad ≈ 1.7°" right. (Exact flat-matter ratio 1/(√(1 + z) − 1) gives 1.79°; the page's approximations are the notes'.)
- Flatness scalings: radiation a²H² ∝ t · t⁻² = t⁻¹, matter t^(4/3) · t⁻² = t^(−2/3): right.
- Worked example: 13.8 Gyr = 4.36 × 10¹⁷ s ("4.4 × 10¹⁷"); 50,000 yr = 1.58 × 10¹² s ("1.6 × 10¹²"); ratio 3.64 × 10⁻⁶; ^(2/3) = 2.36 × 10⁻⁴ ("2.4 × 10⁻⁴"); 1/1.6 × 10¹² = 6.25 × 10⁻¹³ ("6 × 10⁻¹³"); product 0.01 × 2.36 × 10⁻⁴ × 6.25 × 10⁻¹³ = 1.48 × 10⁻¹⁸ ("≈ 10⁻¹⁸"). Correct as an order of magnitude; see finding 7. Same result as `flatness-problem` (8.286).
- (361): d/dt(c/ȧ) = −cä/ȧ²: right. (362) ⇒ ρ + 3p/c² < 0 ⇒ p < −ρc²/3: right.
- (363)–(364): constant ρ ⇒ p = −ρc², w = −1: right. (366): ȧ/a = √Ω_Λ H₀ ⇒ a ∝ exp(√Ω_Λ H₀t): right.
- (369): ½φ̇² − V < −⅙φ̇² − ⅓V ⇔ ⅔φ̇² < ⅔V ⇔ φ̇² < V: right.
- (370): ρ̇c² = φ̇φ̈ + φ̇V′; −3H(ρc² + p) = −3Hφ̇²; dividing by φ̇ gives φ̈ + 3Hφ̇ = −V′: right.
- Quiz 1 (answer 1): correct. Quiz 2 (answer 1, 1.7°): correct. Quiz 3 (answer 1): correct; explanation right. Quiz 4 (answer 1, φ̇² < V): correct; algebra in the explanation right.
- Flashcards: card 1 matches pp. 77–78; card 2 matches (361)–(362); card 3 matches (370)–(372).
- `calcs/8.902/inflation-scalar-field.yaml`: all 14 entries match the text they quote on the page. `npm run calc:test -- -k inflation-scalar`: 14 passed. Minor: the "about a quarter of the total" (0.24) in the ρ_r/ρ_m bracket has no entry of its own (optional: add 0.319/1.319). `ionization-energy-K` cites p. 76, where the notes give only "~10⁵ K"; it is marked page-own, so fine.
- `calcs/values.yaml`: the new T_CMB value '2.73' with role "example: the rounded value the 8.902 Lecture 12 notes use …" is right (the notes print T₀ = 2.73 K on p. 76) and follows the convention already used for 8.902 values (e.g. h ≈ 0.7 as "example"). It is the only page that quotes 2.73 K (searched all content).

## Coverage and order
- The page follows the notes' order: problems (horizon via recombination and the CMB, flatness, monopoles, seeds) → inflation basic ideas (flatness, horizon, (361)–(362), monopoles and seeds solved) → Λ as negative pressure (363)–(366) → why Λ is not enough → scalar field (367)–(370) → slow roll (371)–(374) → potential and reheating (375) → section 1.E.
- Left out (minor, all acceptable): the unnumbered full scalar-field Friedmann equation on p. 80 (only its slow-roll form (371) is shown); the remark "CMB maps are typically logarithmic" (p. 76; a questionable remark, fine to omit); the WMAP timeline image (p. 82).
- Added (own material): the η and Saha corrections, the radiation-fraction check, the open-universe explanation of (357), the flatness worked example, the balloon analogy for the p. 78 curvature sketch.
- Section 2.A on p. 82 is for `linear-perturbations`, as instructed.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the notes (checked on every rendered page and by text search). The only credit is the WMAP image on p. 82: "Image: NASA / WMAP Science Team. Image is in the public domain." The page does not use it.
- The notes' sketches (curvature before/after and the comoving horizon circles, p. 78; the potential V(φ), p. 81) are only described in words; nothing is reproduced.
- No verbatim copying beyond short standard phrases ("Hubble drag", "fine-tuning problem", "acts too late"); the sentence on a flat potential with a minimum is a close but short paraphrase.
- No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 8.902 Lecture 13 (linear perturbation theory): correct, section 2 "Structure formation" starts on p. 82 and `linear-perturbations` exists. No cosmology callout is needed on a cosmology-course page.
- Prerequisites `observational-cosmology-distances`, `horizon-problem`, `flatness-problem` exist.
- No em dashes in the page.
- `npm run content:check` was not run by the reviewer.
- Verdict pass-with-notes: every equation number, page and slip note is right and every number checks out; the findings are optional wording improvements.

## Resolution (2026-11-17, by the page author)

1. The reheating paragraph now attributes "a higher plateau and a longer path give more inflation" to the notes and adds that it is the flatness of the potential relative to its height that matters (N ≈ 8πG∫(V/V′)dφ is unchanged when V is scaled).
2. "The story so far": z ≈ 0.33 is now described as the value for Ω_m = 0.3, Ω_Λ = 0.7 (checked: 0.326), with the Planck values giving about 0.3 as on the density-parameters page.
7. The worked example now gives 1.5 × 10⁻¹⁸ and "about seventeen decimal places", and names the 8.286 flatness-problem page with the same estimate; the calcs entry `omega-at-1s` recomputes it from the inputs.
3–6: no change needed.

Status set to `reviewed`.
