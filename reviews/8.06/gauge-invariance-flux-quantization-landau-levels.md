---
page: content/year-3/8.06/gauge-invariance-flux-quantization-landau-levels.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/video_galleries/lecture-videos/ (read; Lecture 14 = resources/l14-1 … l14-4, four videos, all four used by the page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l14-1/ (read; title "L14.1 Gauge invariance of the Schrodinger Equation")
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/8c9bd19647964fa0acd4db6fddc7646b_7Y3qcKzO_mY.pdf (read; L14.1 transcript, 5 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a90a332e5c7863817d73c7bdffce7b85_U4zZhQz1Xqc.pdf (read; L14.2 transcript, 6 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/203b9a82165a35d385b5ce9742111af7_tmKD8T_Lm2I.pdf (read; L14.3 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/bdf35f575bfd19fb36ebe6a80b1cdffa_Uux0VkKaoxY.pdf (read; L14.4 transcript, 2 pp.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/3ef27cdafbe29bfb9991e9265544754e_seBwiL9InII.pdf (read; 8.286 Lecture 22 transcript, pp. 1, 22, 23 checked)
  - Zwiebach's 8.06 notes chapter 5 (not on OCW; not read)
  - https://physics.nist.gov/cgi-bin/cuu/Value?flxquhs2e (not fetched; values checked against the exact SI h and e instead)
  - https://doi.org/10.1098/rspa.1931.0130 (not fetched; the Dirac quantization condition eg = nħc/2 checked from standard physics)
verdict: needs-changes
---

# Review: Gauge invariance, flux quantization on a torus and Landau levels

The transcripts have no printed footers, so PDF page numbers are the citation convention; every page citation below was checked with `pdftotext -f N -l N`. The transcripts carry no "rights reserved" or "courtesy" notice.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Cosmology callout, first sentence ("In 8.286 (Lecture 22) Guth explains … and he quotes their magnetic charge … g = e/2α"); also "Guth's value is the smallest one Dirac's condition permits"; reference `guth22` title "(Guth, Fall 2013)" | 8.286 Lecture 22 was given by a substitute lecturer: transcript p. 1, "As you know, Professor Guth is away. I'm substituting for today"; the value g = (1/2α)·e is quoted on p. 22 by the substitute, "referenced in the notes that Alan has for the class". The site's own 8.286 page `higgs-field.mdx` already says Lecture 22 was taught by Scott Hughes standing in for Guth. | Attributes the explanation and the quoted value to Guth personally. | E.g. "In 8.286 Lecture 22, taught by a substitute lecturer (Scott Hughes) from Guth's notes, the magnetic charge of a grand-unified monopole is quoted as g = e/2α …"; replace "Guth's value" by "This value"; in `guth22` write "MIT 8.286 Lecture 22 transcript (Fall 2013, substitute lecturer for Guth)". "The monopole problem of Guth's Lecture 22" is acceptable as "of 8.286 Lecture 22". |
| 2 | info | "The canonical momentum is not gauge invariant" formula, cite reading2 p. 1 | L14.2 p. 1 sets up ⟨ψ′|p|ψ′⟩ with the phases and says the extra term "is not going to cancel"; the explicit result (q/c)⟨ψ|∇Λ|ψ⟩ is not stated (left for homework). | Gives the explicit result with the L14.2 p. 1 citation; the text before it says "Working it out, which the course leaves for homework". | Fine as is (the sentence flags it as derived, and calcs marks it `page-own`); optionally add "(this page's working)" to `at`. The result is correct: p(Uψ) = U pψ + (q/c)(∇Λ)Uψ. |
| 3 | info | "Gauge transformation of the potentials", cite reading1 p. 1 | L14.1 p. 1 recalls the rule from the board ("if they are related in this way"); the explicit formula is in the previous lecture (L13.4 p. 2). | Cites L14.1 p. 1 and says the rules come from the previous lesson. | Acceptable; the text already says it was recalled from the board. |
| 4 | info | Covariant Schrödinger equation, bracketed note on signs | L14.1 p. 5 says "minus q phi, which is minus A0 psi" and then "h over i, d over d of ct, minus q over c, A0". | Writes "+ (q/c)Φ" and explains in brackets that A₀ (lower index) = −Φ, calling the spoken signs hard to follow. | Verified: −c[(ħ/i)∂/∂(ct) + (q/c)Φ]ψ = iħ∂ψ/∂t − qΦψ, correct. The bracket is fair and marked as the page's own reading. No change needed. |
| 5 | info | Callout, "Dirac showed in 1931 that … the same requirement as on the torus, a single-valued phase factor U … a sphere around the monopole plays the part of the torus" | Not in either lecture (the page says so: "neither lecture makes the link"; confirmed by grep: no "monopole"/"Dirac" in the L14 transcripts, no "flux"/"quantiz" in the 8.286 L22 transcript). | Dirac 1931 with the patching picture. | Physics correct (eg = nħc/2 ⇔ 4πg = n·hc/e). Strictly, Dirac's 1931 argument used a string singularity and non-integrable phases; the two-patch picture on a sphere is Wu and Yang (1975). Optionally say "in modern language" before the sphere/patch sentence. |
| 6 | info | Worked example (d) | — | "about 2,418 flux quanta" and "the field can only take the values nΦ₀/area" | 10⁵ G gives 2417.76 quanta, so 10 T exactly is not an allowed field on that torus; the nearest allowed value (n = 2418) is about 100,010 G. One added clause would make the point sharper; optional. |

## Arithmetic and answer checks
All recomputed independently (Python, the example's constants):
- (a) ω_c = eB/mc = 1.7588 × 10¹² s⁻¹ ✓; ω_c/2π = 279.9 GHz ✓ ("about 280"); ħω_c = 1.8548 × 10⁻¹⁵ erg ✓ = 1.158 meV ✓ ("1.16"); k_BT(4.2 K) = 0.3619 meV ✓; ratio 3.199 ✓ ("3.2").
- (b) ℓ_B² = 6.583 × 10⁻¹³ cm² ✓; ℓ_B = 8.113 × 10⁻⁷ cm = 8.1 nm ✓. "A few tens of atomic spacings" is a fair order of magnitude.
- (c) Φ₀ = 2πħc/e = 4.1361 × 10⁻⁷ G cm² ✓; B/Φ₀ = 2.4178 × 10¹¹ cm⁻² ✓; 1/(2πℓ_B²) gives the same ✓.
- (d) Φ_B = 10⁻³ G cm² ✓; 2417.8 quanta ✓ ("about 2,418"); step Φ₀/area = 41.36 G ✓ = 4.1 mT ✓.
- Slips: h/2e = 2.0678 × 10⁻¹⁵ Wb (exact SI h, e) ✓, so the quoted 2.068 × 10⁻¹⁵ Wb is h/2e, not the lecture's own hc/q with q = e ✓; h/e = 4.1357 × 10⁻¹⁵ Wb ✓; hc/e (Gaussian) = 4.136 × 10⁻⁷ G cm² ✓; 1 Wb = 10⁸ Mx ✓. "5 million": L14.4 p. 2 indeed says Φ₀ ≈ 2 × 10⁻⁷ G cm² and "about 5 million states" (1/2×10⁻⁷ = 5 × 10⁶) ✓; correct value 1/4.136×10⁻⁷ = 2.42 × 10⁶ ✓. Garbled line: L14.2 p. 5 reads "B0 times the area of the torus is equal to 2 pi n-- pi n-- hc over q n", and the condition just before is spoken "q B0 Lx Ly over hc equal to 2 pi n" (h for ħ). All three slips are real and stated fairly and neutrally in brackets.
- Formulas: expanded H, p·(Aψ) ordering, the coefficient +iħq/2mc of ∇·A, the covariant-derivative identity and its two-line proof, Λ = B₀L_x y (∂Λ/∂y = B₀L_x, ∂Λ/∂x = 0), qB₀L_xL_y/ħc = 2πn ⇒ Φ_B = n hc/q, Landau gauge curl (−∂(−By)/∂y = B), H = (p_x + qBy/c)²/2m + …, completing the square to ½mω_c²(y − y₀)² with y₀ = −ħk_x c/qB = −k_xℓ_B², ℓ_B = √(ħ/mω_c) = √(ħc/qB), E = ħω_c(n_y + ½), k_xL_x = 2πN_x, N = L_xL_y/2πℓ_B² = Φ_B/Φ₀: all checked, all correct in Gaussian units and matching the transcript.
- Plot: with y in units of ℓ_B and y₀/ℓ_B = −k_xℓ_B = −k, |χ₀|² = e^{−(y+k)²}/√π and |χ₁|² = 2(y+k)²e^{−(y+k)²}/√π are the correctly normalized oscillator densities (peaks 0.564 and 0.415 fit the range 0.8). Default k = −1.5 puts y₀ = +1.5, matching the transcript's picture (k_x negative ⇒ y₀ positive, L14.3 p. 3). Caption accurate.
- Callout: α = e²/ħc, g = e/2α ⇒ 4πg = 2πe/α = 2πħc/e = hc/e ✓ (numerically 4.136 × 10⁻⁷ G cm² both ways). Dirac's condition eg = nħc/2 gives minimum g = ħc/2e = e/2α ✓.
- Quiz: Q1 answer 1 ✓ (explanation correct); Q2 answer 3, hc/q ✓; Q3 answer 0 ✓ (no ħ²k_x²/2m term); Q4: 1000 G × 0.01 cm² = 10 G cm², /4.136×10⁻⁷ = 2.42 × 10⁷ ✓, answer 2 ✓.
- Flashcards: all four correct (formulas, 4.14 × 10⁻⁷ G cm² = 4.14 × 10⁻¹⁵ Wb, ℓ_B, y₀, N).
- Calcs file `calcs/8.06/gauge-invariance-flux-quantization-landau-levels.yaml`: entries match the page; `npm run calc:test` 5041 passed; `npm run content:check` 0 errors (only warning: no review file).

## Coverage and order
- OCW video gallery lists exactly four Lecture 14 videos (l14-1 to l14-4); all four transcript URLs in `source.readings` resolve to the right titles.
- The page follows MIT's order: L14.1 (Hamiltonian expanded, p·A ordering, covariant derivative identity and proof, Schrödinger equation from covariant derivatives, canonical vs mv momentum) → L14.2 (gauge-invariant observables, p not invariant, torus, patching, U single-valued, flux quantum, Φ₀ value, Earth's field) → L14.3 (cyclotron frequency, spin ignored, Landau gauge, p_x conserved, shifted oscillator, ℓ_B, y₀, E, infinite degeneracy, Fourier superposition) → L14.4 (other gauges, finite sample, counting, N = Φ_B/Φ₀, 1 G × 1 cm² example, quantum Hall effect). Nothing of substance omitted.
- Additions beyond MIT (all marked or obviously the page's own): Coulomb-gauge remark (in transcript, p. 2, said "delta of A"), the qB > 0 convention note, the four-potential sign bracket, the worked example, the plot, the callout.
- Opening recap vs previous page `charged-particles-em-fields-gauge-invariance.mdx`: consistent (same Gaussian conventions, Λ, Φ′ = Φ − (1/c)∂Λ/∂t, ψ′ = e^{iqΛ/ħc}ψ, mv = p − qA/c) and short; it restates three formulas the lecture itself recalls on L14.1 p. 1, so it is not undue duplication. The previous page promised that "which constants [of a Wilson-loop A] turn out to be equivalent is a question for the next lecture"; Lecture 14 does not discuss it, and this page does not either. That is MIT's content, not this page's fault, but the previous page's promise is not fulfilled (see Notes).

## Licensing
- Transcripts are CC BY-NC-SA; no "rights reserved" or "courtesy" notices (grep empty). No figures used; the plot is generated from formulas.
- Text is rewritten, not copied; the one verbatim phrase ("not intuitive, not physical, not observable") is short and quoted with attribution. The 1 cm²/1 G example is MIT's and is presented as Zwiebach's; the worked example (electron at 10 T, 1 μm torus) is original.
- No OpenStax/LibreTexts material.

## Notes
- Symbols (data/symbols.json, meanings scoped to this page): new meanings for χ, ⟨ ⟩, n, e, O, B, N, y₀, U, Φ₀, B₀, N_x, Φ_B, n_y, ω_c, L_x, L_y and new entries O′, ℓ_B; existing meanings widened by page for α, Λ, ψ, ω, H, z, c, T, Φ, x, y, t, i, m, g, v, A, q, h, L, p, A_x, A_y, E, A′, ψ′, k_B, p_x, p_y, p_z, B_z, k_x, Φ′. All checked against their use on the page and correct. Minor: the `e` meaning combines Euler's number and the electron charge in one sentence (acceptable, both uses occur); units follow the SI-first convention with Gaussian in brackets, consistent with the page.
- The previous page's cosmology callout (`charged-particles-em-fields-gauge-invariance.mdx`) also says Guth "explains … (Lecture 22)"; the same substitute-lecturer correction applies there (outside the scope of this review, but worth fixing together).
- The `codata` reference URL is the h/2e page only; its `location` also lists h and e, which are on other NIST pages. Harmless; optional.
- Uncertain/not checked: the NIST and Dirac URLs were not fetched.

## Resolution (2026-11-18, by the page author)

- #1 (error): the callout now says 8.286 Lecture 22 was taught by a substitute lecturer (Scott Hughes) from Guth's notes, and that g = e/2α is quoted from those notes; "Guth's value" is now "this value", and "Guth's Lecture 22" is "8.286 Lecture 22". The `guth22` reference title reads "MIT 8.286 Lecture 22 transcript (Fall 2013), taught by Scott Hughes from Guth's notes"; the calcs entry `monopole-charge` says the same.
- #2, #3, #4: no change, as suggested.
- #5: the callout now says Dirac's own argument used a string of singular points, and that the two-patch picture on a sphere is the modern language due to Wu and Yang (1975); reference `wuyang` added (Phys. Rev. D 12, 3845), with calcs fact `wu-yang-1975`.
- #6: example (d) now adds that 10 T itself is not allowed on the 1 μm torus and that the nearest allowed field (n = 2418) is about 100,010 G; calcs entry `ex-torus-nearest`.
- Notes: the previous page's callout and its 8.286 Lecture 22 `leadsTo` were corrected the same way, and its promise about Wilson-loop constants reworded (see that page's review, "Later correction").
- Status set to `reviewed`.
