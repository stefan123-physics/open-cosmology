---
page: content/year-4/8.08/bose-condensation-ginzburg-landau.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/the_bose_gas_co/ (not opened online; the PDF it links was read from a local copy)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/fed85ade1be7fc37f3526ef1f56207de_the_bose_gas_co.pdf (read, local copy; handwritten scan, 7 pages = notes pp. 70, 71, 72, 73, 74, 75, 75; pp. 73-75b read from page images at 150 dpi, with the p. 73 vortex lines, the p. 75b Ginzburg-Landau line and the p. 75b dislocation sketch at 300 dpi; p. 71 read to check the angle letter)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/af9b9ca23f35f9d59214c5ffc9651170_the_bose_gas.pdf (p. 69 only, local page image, for the C_v ∝ T³ claim)
  - content/year-4/8.08/superfluidity-vortices.mdx, content/year-4/8.08/ginzburg-landau-theory.mdx, content/year-4/8.286/higgs-field.mdx (read for context and the forward links)
verdict: needs-changes
---

# Review: Ginzburg–Landau theory of Bose condensation, and a crystal as a condensate

The notes are handwritten (Wen) with no text layer, so everything was checked against the page images. Pp. 73-75b are: p. 73 "Remark" (condensate as one wavefunction, densities n₀ and Nn₀, collective excitations, density wave and vortex/n-vortex); p. 74 "G-L theory of boson condensation" (T = 0 functional with U − μ, finite-T functional with a(T) and A₀(T), condensed/non-condensed picture, a > 0 / a < 0, U(1) symmetry with a Mexican-hat sketch); p. 75a (minimisation, A/V, S and C with sketches, real He⁴ at 2.17 K and free bosons); p. 75b "Solid as boson condensation (CDW)" (liquid/solid sketches, n(x) = n₀ + α cos(kx + φ) = n₀ + Re(ψe^{ikx}), translation symmetry ⇒ U(1), A = ∫dᴰx a|ψ|² + b(T)|ψ|⁴ + …, no ψψψ*, ψψ + ψ*ψ* terms, "CDW = Boson condensation", vortex in BC, "what n(x) looks like?" and a sketch of rows with one ending at an X). The page follows them in this order, and every `<Formula>` was found on its cited page. The one formula that is the page's own (heat-capacity jump) is marked "(worked out here)" in `at=` and "this step is ours" in the text.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Quiz 1, explanation of the second choice: "The second choice is the Ising-model result with ½a and ¼b coefficients, carried over wrongly." | (Not in the notes; physics check.) The Ising form ½a s² + ¼b s⁴ gives s² = −a/b and A = −a²/(4b). Mapping it to this page correctly (a' = 2a, b' = 2U₀) gives the right answer; no plausible wrong mapping gives the pair (−a/(2U₀), −a²/(4U₀)). | Attributes the distractor to the Ising coefficients. | The distractor is what minimising a x + U₀x² gives (dropping the ½ in front of U₀): x = −a/(2U₀), value −a²/(4U₀). Write: "The second choice comes from forgetting the ½ in front of $U_0$: minimizing $ax + U_0x^2$ gives $x = -a/(2U_0)$ and $-a^2/(4U_0)$." Update calcs `quiz-gl` `where` if wanted. |
| 2 | warning | Cosmology callout ("the minima form a sphere rather than a circle") and leadsTo to 8.286 L22 ("a whole circle (in fact a sphere)") | 8.286 higgs-field page (from Guth's L22): the Higgs field is a complex doublet, two complex = four real components; its page says "a whole circle (in fact a 3-sphere)". | "sphere". | Write "3-sphere" (the minima of \|h₁\|² + \|h₂\|² = const in four real dimensions) in both places. |
| 3 | warning | Cosmology callout: "is the shape Guth uses in Lecture 22 of 8.286 for the Higgs field" | higgs-field page: Guth describes the shape in words (minimum at non-zero \|h\|, infinitely many equivalent field values); the plotted potential there is captioned "An illustrative toy model, not from the lecture". No Mexican-hat figure is attributed to Guth. | Suggests Guth uses this (Mexican-hat) shape. | "is the kind of potential Guth describes in Lecture 22 …" The rest of the callout (settles into one value as the universe cools, spontaneous breaking, doublet, gauge symmetry) matches the higgs-field page. |
| 4 | warning | §"A solid as a condensate", end of paragraph after the Ginzburg–Landau formula: "Melting and freezing of the wave become the disappearance and appearance of a condensate." | p. 75b says only "CDW = Boson condensation". | Unmarked extension to melting. | Mark as ours. Physically, with a single wave vector this is the GL picture; real crystal melting in 3D is first order (with several wave vectors, cubic terms in the ψ's are allowed, Landau's argument), so add "(our remark; real melting is first order, so the analogy is only of the order parameter)" or drop the sentence. |
| 5 | info | §"The condensate as one wavefunction": "\|ψ₀\|² is a plateau of height 1/L; Wen calls it n₀" and "This is why the single-particle wavefunction … is something one can see" | p. 73 labels the height n₀ (no 1/L) and does not draw this conclusion. | The 1/L normalisation and the interpretation are unmarked additions. | Both are correct (1D box, normalised). Optional "(our reading)". |
| 6 | info | Same section | p. 73 also draws energy-level diagrams under each density sketch: one particle in the lowest level, then all N in it. | Not mentioned. | Optional half-sentence. Not needed for coverage. |
| 7 | info | §"The condensate density, entropy and heat capacity": "At low temperatures his sketch rises as T³, which is not part of Ginzburg–Landau theory: it comes from the sound-wave excitations … (notes p. 69)" | p. 75a labels the low-T rise "T³" without comment; p. 69 does give C_v ∝ T³ from ω = v\|k\|. | Explanation of the T³ label, unmarked. | Correct and well supported by p. 69; optionally "(our reading of the label)". |
| 8 | info | §"The free energy of the condensate": "the functional of the previous page, with U added" | p. 74 calls it A, "free energy (or energy)"; the previous page writes it Ω (grand potential, p. 70). | Fine. | Optional: "(written Ω there)". |
| 9 | info | Symbol meanings scoped to this page: `r` ("for the rotating bucket, from its axis"), `d` ("ds⃗ a short step along a closed loop"), `n` ("around the ring or around a vortex") | — | These meanings mention uses (bucket, loop integral, ring) that occur on superfluidity-vortices, not on this page. | Harmless, since meanings are shared with the companion page; trim the parts that do not apply here if the meanings are split per page. |

Readings of Wen's sketches, verified on the images:
- p. 74 Mexican hat: a ring-shaped bowl with an arrow around it labelled ψ. Page's "the bottom of the Mexican hat that Wen sketches" is right.
- p. 75a A/V: a falling solid curve with a dashed continuation that lies above it below T_c. Page: "condensed branch below the continuation of the normal one". Right.
- p. 75a S: thick curve under the thin curve labelled −∂A₀/∂T below T_c, joining it at T_c with a change of slope. Page: right.
- p. 75a C_v: rises (labelled T³) to its largest value at T_c, drops there, then a slowly rising line. Page: "jumping down at T_c". Right.
- p. 75a real He⁴: T³ rise to a tall narrow peak at a dashed line marked 2.17 K, a dip, then a slow rise. Free bosons: T^{3/2} rise to a cusp at T_c, then a slow fall. Page: right in both.
- p. 75b dislocation: horizontal rows; between the second and third row an X with a short extra row starting at the X and running to the right. The page's construction (k along y, extra crest on the right along the positive x-axis ending at the core) matches the sketch's orientation.
- p. 73 polar coordinates: Wen writes θ here (the third letter after "(r, θ," is struck through / unreadable); p. 71 uses φ. The page's bracket "the previous page wrote the angle with a different letter, as Wen does" is right.

## Arithmetic and answer checks
- GL minimum: d/dx(ax + ½U₀x²) = a + U₀x = 0 → x = −a/U₀; value −a²/U₀ + a²/(2U₀) = −a²/(2U₀). Matches p. 75a exactly.
- With a = a₀(T/T_c − 1): \|ψ\|² = (a₀/U₀)(1 − T/T_c); \|ψ\| ∝ (1 − T/T_c)^{1/2}, β = ½. Correct.
- Extra free energy −a₀²(1 − T/T_c)²/(2U₀); extra S = −∂/∂T = −a₀²(1 − T/T_c)/(U₀T_c), negative below T_c, 0 at T_c. ΔC = −T∂²A/∂T² = T a₀²/(U₀T_c²); jump a₀²/(U₀T_c). Correct (assumes U₀ independent of T, as the page implicitly does).
- Mexican-hat plot: in units ψ ~ √(a₀/U₀), energy a₀²/U₀, the density is (r − 1)u² + u⁴/2 with r = T/T_c. Minimum at u² = 1 − r = 0.5, depth −(1 − r)²/2 = −0.125 at r = 0.5. Caption correct. At r = 0.2 the minima (u = ±0.894, depth −0.32) are inside the plotted domain and range.
- Worked example: 1 − 0.95^{1.5} = 0.074055 (0.0741); linear 0.075; ratio 1.0128 → "1%" (1.3%, acceptable). 1 − 0.8^{1.5} = 0.28446 (0.284); 0.30; ratio 1.0546 → 5%. 1 − 0.5^{1.5} = 0.64645 (0.646); 0.75; ratio 1.160 → 16%. Expansion (1 − τ)^{3/2} ≈ 1 − 3τ/2: correct. "a₀/U₀ equal to 3/2 times the total density": correct as an identification of the linear coefficient (note the ideal gas has U₀ = 0, so this is a comparison of the shape of the law, not a fit of GL coefficients; the page's wording does not claim more).
- Condensate-fraction plot: linear law 1.5 at T = 0, crosses 1 at T/T_c = 1/3, so "climbs past 1" is right; range [0, 1.6] contains it.
- Density wave: \|ψ₀ + αe^{ikx}\|² = ψ₀² + 2ψ₀α cos kx + α² for real ψ₀, α. Correct. Re(αe^{iφ}e^{ikx}) = α cos(kx + φ). Correct. Shift by ℓ: cos(k(x − ℓ) + φ) → φ − kℓ. Correct. Quiz 3 "slides the wave along by −φ/k": correct (relative to φ = 0).
- Dislocation: ρ − ρ₀ = fψ₀ cos(ky + θ); crests at ky + θ = 2πj. Parametrisation θ = s, y = 2πj − s, x = y cot s: checked that for j = 1, 2 with s ∈ (0, π) y > 0 and sin s > 0, and for j = −1, −2 with s ∈ (−π, 0) y < 0 and sin s < 0, so the polar angle of (x, y) is s in every case. Limits: j = 1 goes from y = 2π at x → +∞ to y = π at x → −∞; j = −1 from y = −2π (right) to −π (left). j = 0 only gives θ = 0, y = 0, i.e. the positive x-axis (the `x > 0 ? 0 : NaN` curve), ending at the core. Between ky = −2π and 2π: right 3 crests (−2π, 0, 2π), left 2 (−π, π). All correct. Calcs `dislocation-crest` and `dislocation-crest-lower` check the j = ±1 curves; j = ±2 are the same construction.
- Lambda point 2.17 K: as in the notes (measured 2.1768 K).
- Quiz 1: answer 0 correct; explanation of the correct answer right; explanation of choice 2 wrong (finding 1). Quiz 2: answer 1 correct; ψψ → e^{2iθ}ψψ right; "comes from conservation of particle number" is the page's (marked as ours in the text), standard and correct. Quiz 3: answer 2 correct. Quiz 4: answer 1 correct; matches p. 75a and p. 69.
- Flashcards: all five agree with the page and the notes (flashcard 3: ΔC/V = Ta₀²/(U₀T_c²), jump a₀²/(U₀T_c), correct).
- Calcs file: every entry recomputed by hand above agrees with the page; `shown` strings match the page text. I did not run `npm run calc:test`.
- Symbol units: a, a₀ in J (a\|ψ\|² is an energy density with \|ψ\|² in 1/m³), U₀ in J·m³, A in J, n₀ = 1/L in 1/m: consistent.

## Coverage and order
- p. 73: N-boson product state, density plateaus n₀ and Nn₀, collective excitation ψ₀ → ψ₁ (not necessarily orthogonal), density wave, minimum vortex, n-vortex: all covered, in order. Level diagrams omitted (finding 6).
- p. 74: order parameter = amplitude of condensed bosons, T = 0 functional with U − μ, finite-T functional with a(T), A₀(T), condensed/non-condensed picture with μ(T), a ≷ 0 cases, U(1) symmetry and hat sketch: all covered, in order. (The restatement of the product wavefunction at the top of p. 74 is not repeated; fine.)
- p. 75a: minimisation, A/V, S, C with sketches, real He⁴, free bosons: all covered, in order. The heat-capacity jump formula and the worked example are additions, marked.
- p. 75b: liquid/solid sketches, n(x) formula and complex order parameter, CDW, ψ = 0 ⇒ no CDW, phase ⇒ position, translation ⇒ U(1), GL with a(T), b(T) in D dimensions, forbidden terms, "CDW = Boson condensation", vortex in BC and the dislocation sketch: all covered, in order. "Edge dislocation" is marked as the page's name.
- pp. 70-72 belong to superfluidity-vortices and are not counted here.

## Licensing
- Source is MIT OCW 8.08 (CC BY-NC-SA). No "All rights reserved" or "Courtesy of" notice on pp. 73-75b or p. 69. No figure is reproduced: the three plots are generated from formulas; Wen's sketches are described in words. No OpenStax or LibreTexts material.
- Paraphrase: Wen's notes are telegraphic; the page's prose is its own. Short phrases such as "CDW = Boson condensation" and "amplitude of condensed bosons" are terminology. No copying concern.

## Notes
- No em dashes in the page (checked: 0). Plain English, `##` sections, ends with `## Summary`.
- Notation remarks (n → ρ for density, 75a/75b numbering, θ vs φ for the angle) are accurate.
- Remarks marked as ours (U(1) from number conservation, a = a₀(T/T_c − 1), the jump, mean field missing fluctuations, edge dislocation) are correct. The fluctuation remark is right in spirit: the helium-4 peak is a weak (near-logarithmic) singularity, α ≈ −0.013, governed by fluctuations that mean-field theory leaves out.
- leadsTo to 8.08 Lecture 8 (Fermi gas, no condensation): correct.
- Not verified: rendering of label placement on the plots (left to `content:check` / `test:labels`).

## Resolution (2026-11-19, by the page author)
- Error (quiz 1 explanation): now says the second choice comes from minimizing ax + U₀x², i.e. dropping the ½ in front of U₀.
- Warning (sphere): the callout and the leadsTo now say a 3-sphere for the Higgs doublet (a circle for a single complex field).
- Warning ("the shape Guth uses"): now "the kind of potential Guth describes in Lecture 22".
- Warning (melting and freezing): replaced by a remark marked as ours, with the caveat that real three-dimensional melting is first order and not captured by this expansion.
- Info: the 1/L plateau height and the "wavefunction times N is the density" remark are now marked as ours; the zero-temperature functional is noted as written Ω on the previous page; the symbol meanings of r, d and n scoped to this page no longer mention the bucket, loop or ring (split into page-specific meanings). The T³ explanation already cites p. 69 of the notes; left as is.
- content:check (0 errors) and calc:test pass after the changes.
