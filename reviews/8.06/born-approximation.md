---
page: content/year-3/8.06/born-approximation.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l22-1/ , /l22-2/ , /l22-3/ (read online; titles "L22.1 Setting Up the Born Series", "L22.2 First Born Approximation. Calculation of the Scattering Amplitude", "L22.3 Diagrammatic Representation of the Born series. Scattering Amplitude for Spherically Symmetric Potentials"; each page's transcript .pdf link is exactly the URL the page gives as reading1-3; CC BY-NC-SA 4.0, no "rights reserved" notice)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/4d0d170f3c1bd5bdbda2c94c5a1df591_gX2y3PHMmnk.pdf (read, local copy; L22.1 transcript, 5 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/68b738a9c0a79f31fac1f73c20d0de62_8Uh0qSp_Vck.pdf (read, local copy; L22.2 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/6fda78825a6bf78c701745efce69246a_o10QADeeK04.pdf (read, local copy; L22.3 transcript, 5 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-7-scattering/ (read, local copy of the chapter 7 PDF; printed pp. 147-150 read as text and pp. 148-150 rendered as images; every cited equation checked against the image)
  - https://arxiv.org/abs/1705.02358 (read, PDF text; Tulin & Yu, table of contents and Sec. VI)
  - PDG pion listing and NIST CODATA pages (not opened; values checked against known PDG 2024 / CODATA 2022 values only)
verdict: needs-changes
---

# Review: The Born approximation

The transcripts have no printed footers, so PDF page numbers are the citation convention; every transcript citation on the page was checked page by page with `pdftotext -f N -l N`. In the notes, printed page = PDF page + 132. Neither the transcripts, the resource pages nor chapter 7 carry a "rights reserved" or "Courtesy of" notice. The author's notes.md was not used.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Frontmatter `references.tulinyu.location` | (Not MIT.) In Tulin & Yu, Sec. II is "Astrophysical observations" and Sec. III "N-body simulations and SIDM halo properties". The Yukawa potential from a light mediator (their eq. 24) and the "Born regime" are in Sec. VI.C "Light mediator models" (pp. 51-54 of the arXiv PDF); Sec. VI.A defines the relevant (transfer) cross section. | "sections 2 and 3" | `location: "Sec. VI.A and VI.C (light mediator models, eq. 24)"`. |
| 2 | info | "The first Born approximation", before (7.3.30): "Dropping the prime on the integration variable, which is a dummy variable (L22.2 transcript p. 2; notes p. 148)" | In L22.2 p. 2 Zwiebach still writes "d cubed r prime" and "e to the minus i K dot r prime". He drops the primes, calling the variable a dummy, in L22.3 p. 3. Notes p. 148 do say it. | L22.2 p. 2 | "(notes p. 148; in the lecture, L22.3 transcript p. 3)", or cite the notes only. |
| 3 | info | "Where the angles are": isosceles triangle "(L22.2 transcript p. 3; notes Fig. 7.5, p. 150)" | The triangle with θ and the dashed perpendicular is the sketch next to (7.3.31) on p. 148. Fig. 7.5 (p. 150) shows k⃗_i, k⃗_s, K⃗ with the angles θ and φ. | Fig. 7.5 | Acceptable as is; "notes p. 148 and Fig. 7.5" would be more precise. |
| 4 | info | "The Yukawa potential", sentence after the pion bracket: "The range is then the pion's reduced Compton wavelength ..., about 1.41 fm." | Lecture and notes give no number for the range. | Stated outside the bracket that labels the page's additions. | Move it into the bracket, or add "(this page's number)". The value is correct: 197.327/139.570 = 1.414 fm. |
| 5 | info | "Central potentials", first sentence ("the angular integral can be done") | Notes p. 148 (before 7.3.33) say "by performing the radial integration", a slip: it is the angular integral that is done. | Correctly says "angular". | Optional bracket noting that the notes say "radial". |
| 6 | info | "The first Born approximation", Formula (7.3.29) | Notes put the r′ integral in round brackets before e^{ikr}/r. | No brackets. | Unambiguous (e^{ikr}/r does not depend on r′); optional. |

No other differences. Every formula's content and equation number match the notes; prose citations match the transcripts.

## Formula and citation checks
- (7.3.23) far-field form, p. 147 (PDF 15): correct, including k⃗_s = k n̂ and |k⃗_i| = k.
- (7.3.24), (7.3.25), (7.3.26): all p. 147, correct. (7.3.27) mentioned in prose at p. 147: correct.
- (7.3.28) Born series, p. 148: correct (four terms, as the notes).
- (7.3.29), (7.3.30), (7.3.31), (7.3.32), (7.3.33): all p. 148, correct (rendered image checked; notes write f_k^Born, which the page mentions).
- (7.3.34), p. 149: the notes number only the second line; the page shows the first line and the final form as one formula with that number. Prefactor −m/(2πħ²) = −(1/4π)(2m/ħ²), angular integral 2 sin(Kr)/(Kr): correct. The notes' capital Θ for the angle between K⃗ and r⃗ is confirmed (image p. 149).
- (7.3.35), boxed, p. 149: correct, with K = 2k sin(θ/2).
- (7.3.36) V = β e^{−μr}/r, β, μ > 0, and (7.3.37) f = −2mβ/(ħ²(μ² + K²)), p. 149: correct. ∫₀^∞ e^{−μr} sin(Kr) dr = K/(μ² + K²) checked numerically (μ = 0.7, K = 1.3: 0.59633 both).
- Transcript citations checked: L22.1 pp. 1-5 (recap, "h bar squared over m" p. 1, G+ read as "1 over 4 pi e to the ik" p. 1, "phi of r" p. 1, minus restored p. 2; k⃗_i and k⃗_s p. 2; "have we made any progress?" p. 3; relabelling pp. 3-4; substitution and "postponed" p. 4; first/second Born p. 4; schematic series p. 5). L22.2 p. 1 (high-energy validity, first Born formula), p. 2 (K⃗, Fourier transform, "not many ways to generate things that are interesting", unease about the angles), p. 3 (triangle, non-spherical potentials, Griffiths). L22.3 pp. 1-2 (diagrams, Feynman comparison with electron and photon), pp. 2-5 (central potential, rotation argument, angular integral, capital vs small k, Yukawa, pions "one fifth ... one seventh, one eighth", "three lectures and a half"). All correct (see note 2 for the one imprecise one).
- The notes' validity remark ("kinetic energies larger than the potential ... high-energy approximation") is on p. 149, as cited. The notes' pictorial description is on pp. 149-150, Figs. 7.3-7.4 on p. 150, as cited.

## Slips the page attributes
- "h bar squared over m" for the scaling (L22.1 p. 1): real; fairly stated. The notes (p. 144, 7.3.3 area) and L22.3 pp. 2-3 ("a factor of 2 m over h bar squared") have 2m/ħ².
- G+ read without its minus (L22.1 p. 1, "1 over 4 pi e to the ik"): real; L22.1 p. 2 has "minus 1 over 4 pi". Fair.
- "phi" for the wavefunction (L22.1 p. 1, "phi satisfies", "This should be phi of r"): real (probably a transcription of "psi"; the page's "He also calls the wavefunction 'phi' at first" is fair either way).
- Stray "minus" in the Yukawa formula (L22.3 p. 4, "v of r minus 1 over r-- well, we will put the beta-- e to the minus mu r"): real in the transcript; the page calls it "a stray 'minus' as Zwiebach begins the formula", which is fair (it could be a mis-transcription of "equals"; the page does not overclaim).

## Arithmetic and answer checks
All recomputed with ħc = 197.3269804 MeV fm, m_n c² = 939.56542194 MeV:
- ħ²/2m = 38 937.94/1879.13 = 20.721 MeV fm²; E(k = 1) = 20.72 MeV; β = 0.2 × 20.72 = 4.144 MeV fm; V(1/μ) = βμ/e = 1.067 MeV; E/V = 19.4 ("some twenty times"): correct. 1/μ = 1.4286 fm: correct.
- k = 1 fm⁻¹: f(0) = −0.40816 fm, |f|² = 0.16660 fm²; K(90°) = 1.41421, f = −0.080321 fm, |f|² = 0.0064515 fm²; K(180°) = 2, f = −0.044543 fm, |f|² = 0.0019841 fm²; ratio (4.49/0.49)² = 83.97 ≈ 84. All correct.
- σ = 4πg²/(μ²(μ² + 4k²)): k = 1 gives 0.228469 fm²; k = 0.5 gives 0.688474 fm² (E = 5.180 MeV); ratio 3.02; k → 0 gives 2.0935 fm². Checked independently by direct numerical integration of 2π sin θ |f|² over θ (midpoint rule, 2×10⁵ steps): 0.228469, 0.688474, 2.09351. Correct. The 1/k² fall-off for 2k ≫ μ is correct.
- dΩ = π d(K²)/k²: correct (from K² = 2k²(1 − cos θ)).
- Plot: curves 0.04/(0.49 + 4 sin²(θ/2))² and 0.04/(0.49 + sin²(θ/2))² with θ in degrees (sin(x·π/360)) are the example's |f|² at k = 1 and 0.5; the range 0-0.18 holds the forward value 0.167. Caption values 0.167, 0.00198, and 0.04/1.49² = 0.01802 fm²: correct.
- Rutherford limit: (2mβ/ħ²)²/(4k² sin²(θ/2))² with ħ⁴k⁴ = 4m²E² gives β²/(16E² sin⁴(θ/2)): correct; the "coincidence" wording and the infinite total cross section for μ = 0 are correct.
- Pion/proton: 139.57039/938.27208943 = 0.14875 → 0.149 (1/6.72): correct; values match PDG 2024 and CODATA 2022. ħ/(m_π c) = 1.4138 fm: correct.
- Born validity of the example (not claimed by the page, checked anyway): low-energy criterion 2m|β|/(ħ²μ) = 0.29 and high-energy criterion (2m|β|/ħ²k) ln(2k/μ) = 0.21 at k = 1, so the weak-coupling Born treatment is reasonable.
- Quiz: Q1 answer 1 (Fourier transform at K⃗), correct. Q2 answer 2 (2 fm⁻¹; 2·2·sin 30° = 2; distractor 3.46 = 4 sin 60°), correct, and the equilateral remark is right. Q3 answer 3 (high energy), correct and matches L22.2 p. 1 and notes p. 149. Q4 answer 0 (Rutherford, β²/(16E² sin⁴)), correct.
- Flashcards: all four correct (Born series, (7.3.30)-(7.3.32), (7.3.35), (7.3.37) and the μ → 0 limit).
- Calcs file `calcs/8.06/born-approximation.yaml`: every number on the page has an entry; `pytest tests/calc -k born` passes (99 tests, including the Born-Oppenheimer page's). One cosmetic point: entry `ex-mu2-4k2` computes 4.49 but its `shown` string quotes the 1.49 expression; consider splitting it or quoting the 4.49 sentence.

## Coverage and order
- The page follows the lecture order: L22.1 (recap, far-field form, relabelling, Born series), L22.2 (first Born, validity, K⃗, Fourier transform, angles, non-spherical potentials), L22.3 (diagrams and Feynman comparison, central potentials, Yukawa, end of scattering). The notes put the central-potential and Yukawa material before the pictorial description; the page follows the lecture, which is right.
- Nothing in L22.1-L22.3 or notes pp. 147-150 is left out. L22.4 (identical particles) is correctly left to the next page and linked.
- Additions, all labelled: the Rutherford limit (stated as "this page's, not worked out in the lecture or the notes"), the PDG/CODATA mass ratio (bracketed), the range 1.41 fm (see finding 4), the worked example and plot, and the cosmology callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the transcripts, the resource pages or chapter 7.
- Figs. 7.3-7.5 and the sketches beside (7.3.31) and (7.3.34) are not reproduced; they are only cited in words. The only graph is generated from a formula.
- No copied paragraphs. The one direct quotation ("one fifth of it or even less, maybe one seventh, one eighth") is short and attributed. The bold sentence "the scattering amplitude is the Fourier transform of the potential, evaluated at the wave-number transfer" is close to the notes' p. 148 sentence but is standard terminology.
- No OpenStax or LibreTexts material. The worked example (neutron, μ = 0.7 fm⁻¹, 2mβ/ħ² = 0.2 fm⁻¹) is original.

## Forward links
- Callout: Ferreras section 3.5 ("Substructure", page `halo-substructure`) does describe self-interacting dark matter as a remedy for small-scale problems, so "Ferreras's textbook describes ..." is fair. Tulin & Yu Sec. VI.C indeed write the non-relativistic light-mediator interaction as a Yukawa potential (eq. 24), use the term "Born regime", and describe a non-perturbative regime treated by partial-wave analysis plus a classical regime. The callout is accurate and clearly marked "not part of the MIT material". Only the reference's location is wrong (finding 1). Optional precision: SIDM work mostly uses the transfer (momentum-weighted) cross section σ_T rather than σ itself; "the cross section is the Born result" is still right as the starting point.
- leadsTo 8.06 L23 ("Permutation operators" in `_course.json`): correct description. leadsTo Ferreras 3.5: matches the syllabus entry and the halo-substructure page.

## Symbols
The meanings scoped to this page in data/symbols.json were checked: β (Yukawa strength, J·m, sign convention and Coulomb limit right), μ (inverse range), σ, Ω, θ, φ, ψ, z, c, k, ≃, d, i, e, m, f, r, r′, r″, U (1/m², V = (ħ²/2m)U), V, K (both meanings), n̂, Θ (angle between K⃗ and r⃗, not θ), G₊ (with the minus sign), k⃗_i, k⃗_s. All correct for this page; none widened beyond it.

## Notes
- "Scattering experiments are doing Fourier transforms of the potential": the transcript reads "So the scattering and bridges are doing Fourier transforms", a garbled caption; the page's reading is plausible but uncertain.
- No em dashes on the page.
- Verdict is needs-changes only because of finding 1 (a wrong location in a reference); the physics, numbers, citations to MIT, quiz and flashcards are all correct.

## Resolution (2026-11-18, by the page author)

1. Error 1: `references.tulinyu.location` is now "Sec. VI.A and VI.C (light mediator models, eq. 24)", checked against the arXiv PDF (VI.A "What cross section is relevant?", VI.C "Light mediator models" with eq. (24) and the Born regime).
2. Info 2: the dummy-variable sentence now cites notes p. 148 and says the lecture drops the primes at L22.3 transcript p. 3.
3. Info 3: the triangle is cited as the sketch beside eq. (7.3.31), notes p. 148, with Fig. 7.5 (p. 150) as "see also".
4. Info 4: the 1.41 fm pion range is marked "(this page's number)".
5. Info 5: a bracket after the first sentence of "Central potentials" notes that the notes say "radial integration" where the angular integral is meant.
6. Info 6: Formula (7.3.29) now keeps the notes' brackets around the r′ integral.
7. Calcs: `ex-mu2-4k2` now points at the 4.49 expression; a new entry `ex-mu2-4k2-half` covers 1.49, and `ex-g-squared` points at the low-energy expression so each `shown` string is unique.

Status set to `reviewed`.
