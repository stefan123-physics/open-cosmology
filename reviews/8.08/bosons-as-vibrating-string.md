---
page: content/year-4/8.08/bosons-as-vibrating-string.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/fieldtheory_bos/ (not opened online; the PDF it links was read from a local copy)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/a0393f0291067f3a6119aa64fc359a2f_fieldtheory_bos.pdf (read, local copy; typed chapter 4 "Boson systems", printed pp. 28-54; pp. 28-38 read in the pdftotext extract, and pp. 30, 31, 32, 34, 35 and 37 read from the page images to check every equation)
  - content/year-4/8.286/false-vacuum.mdx and content/year-4/8.286/black-body-radiation.mdx (read in part, for the callout and leadsTo)
verdict: needs-changes
---

# Review: Free bosons: identical particles, oscillators and the vibrating string

The source is Wen's typed chapter, so the equations were compared with the page images (p-03 = p. 30, p-04 = p. 31, p-05 = p. 32, p-07 = p. 34, p-08 = p. 35, p-10 = p. 37). The page covers §4.1-4.5 (pp. 28-37); §4.6 starts on p. 37 below §4.5, so the split with the sibling pages falls on a section boundary.

All eleven `<Formula>` blocks carry the same physics and notation as the notes (ħ = 1; κₙ = 2πn/L; ε_k = √(c²k² + m²c⁴)). Ten have the correct page and equation number; one cites the wrong page (finding 1). Every derivation step was redone by hand: (4.4.2) ⇒ (4.4.1) (ḧ = Ωṗ = −Ω²h); (4.4.2) ⇒ (4.4.4) with φ = (h + ip)/√2; (4.4.5) ⇒ (4.4.6); M = 1/ε and K = ε give ω = ε; the three forms of (4.4.7) agree when φ_κ = (X + iP)/√2; [φ̂, φ̂†] = ½[X + iP, X − iP] = 1; ½(X² + P²) = φ̂†φ̂ + ½; and the e^{iΘ} conjugation gives ∂_{x1} + ia_x, ∂_{y1} + ia_y, ∂_{x2} − ia_x, ∂_{y2} − ia_y, which are exactly the terms of (4.2.1).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "One-particle Hamiltonian and its energies", `at="§4.1, p. 29, eqns (4.1.1) and (4.1.5)"` | (4.1.1) is on p. 29. (4.1.5), ε_k = √(c²k² + m²c⁴), is on **p. 30**, just above (4.1.6). On p. 29 the same expression appears unnumbered as "E_k". | Both equations cited to p. 29. | `at="§4.1, pp. 29-30, eqns (4.1.1) and (4.1.5)"`. The calcs entries `plot-point-1/2/3` also cite "p. 29, eqn (4.1.5)": change them to p. 30. |
| 2 | warning | Worked example "Three bosons on a ring" and quiz question 2 | Fig. 4.3 (p. 34) shows a three-boson state: one boson at n = −3 and two at n = 2. | One boson at n = −1 and two at n = 2. Apart from one level index this is Wen's own example state. | Writing rule 1 asks for original examples. Choose another state, for example two bosons at n = −2 and one at n = 5 (energy 9 units, momentum 1 unit). Update the calcs entries `ex-energy`, `quiz-energy-units`, `quiz-momentum-units` and `ex-momentum`. Also avoid n = 2 with n = 3, which is Problem 4.4.1. |
| 3 | info | §"Statistics comes from the Hamiltonian", introduction of (4.2.1) | p. 30-31: the fermion Hamiltonian is given "in non-relativistic limit" (hence the 1/2m). | Gives the 1/2m form without saying it is non-relativistic, right after the relativistic Ĥ_n. | Add "(a non-relativistic one, hence the 1/2m)". |
| 4 | info | "Section 4.2 (marked by Wen as an advanced aside)" | The title is "4.2 \*\*A brief look at Fermi statistics", and §4.5 is "\*The second quantized description". This chapter does not explain the asterisks. | Reads "\*\*" as "advanced aside" and does not mention the "\*" on §4.5. | The reading is plausible but is not stated in the source. Uncertain: either keep it as "(starred by Wen, which in his book marks optional material)" or say only "a starred section". |
| 5 | info | Intro: "a typed chapter from a book Wen was writing in 2005" | The PDF is an undated typed chapter. Wen's book *Quantum Field Theory of Many-Body Systems* (OUP) appeared in 2004, and its chapter numbering differs from this draft's "Chapter 4". I did not verify this; it is from memory. | "a book Wen was writing in 2005". | Safer: "a typed chapter of a book draft by Wen, used as the 2005 course's supplement". |
| 6 | info | Formula "Algebra of the field operators", `at="... eqn (4.5.1)"` | The number (4.5.1) belongs only to the mode algebra; the field algebra follows unnumbered ("and ..."). | Cites both under (4.5.1). | Harmless; optionally `at="§4.5, p. 37, eqn (4.5.1) and the line after"`. |
| 7 | info | §"Occupation numbers", "His answer will come from a different picture of the vacuum, built in three steps" | §4.3 says that section will "try to provide an answer". The explicit explanation of identical particles comes in §4.6 (p. 38, sibling page). | As written. | Fine. Optionally add "(the answer itself is given in section 4.6, on the next page)". |

Slips claimed by the page, checked against the images:
- **φ_κ = X + iP in §4.4 (p. 35).** Confirmed: "Let X_κn and P_κn be the real and imaginary parts of φ_κn = X_κn + iP_κn". §4.5 (p. 37) uses (X̂ + iP̂)/√2. With the §4.4 convention, ∫φ*Ωφ = Σ ε(X² + P²), twice Σ(P²/2M + KX²/2). The page's correction is right and is explained.
- **ψ̂ in the field expansion (p. 37).** Confirmed: φ̂(x) = Σ L^{-1/2} e^{ixκₙ} ψ̂_κn. The page's φ̂_κ is right.
- **Only the added terms of e^{iΘ}∂e^{−iΘ} (p. 31).** Confirmed: the notes print e^{iΘ}∂_x e^{−iΘ} = i y/(x² + y²) and e^{iΘ}∂_y e^{−iΘ} = −i x/(x² + y²) without the ∂. Since ∂_xΘ = −y/r² and ∂_yΘ = x/r², the full operators are ∂_x + iy/r² and ∂_y − ix/r², as the page says (calcs `theta-derivative-x/y`).
- **Slips the page missed:** I found none that affect the content. Minor typesetting only: p. 29 writes E_k for what p. 30 numbers as ε_k (4.1.5) (the page uses ε_k throughout, which is fine), and there are textual typos ("plain waves", "lowing operators", "In contract to"). The caption of Fig. 4.3 is self-consistent (n = −3 ↔ k = −6π/L, n = 2 ↔ 4π/L).

## Arithmetic and answer checks
- 2πħc = hc = 6.62607e-34 × 2.99792e8 = 1.98645e-25 J m → "1.986 × 10⁻²⁵" ✓. Divided by L = 0.02 m: 9.932e-24 J → "9.93 × 10⁻²⁴ J" ✓; / 1.602177e-19 = 6.199e-5 eV → "6.20 × 10⁻⁵ eV" ✓. 5 units = 3.0996e-4 eV → "3.10 × 10⁻⁴ eV" ✓.
- Momentum (−1 + 2 + 2) h/L = 3 × 6.62607e-34 / 0.02 = 9.939e-32 kg m/s → "9.94 × 10⁻³²" ✓.
- Normalisation: (â†)²|0⟩ = √2|2⟩, so the 1/√2 in (1/√2)(φ̂†_{κ2})²φ̂†_{κ−1}|0⟩ is right ✓.
- Counting: the solutions of n₁ + n₂ + n₃ = 3 number C(5,2) = 10 ✓; 3³ = 27 ✓; 3 states of type (3,0,0) × 1 + 6 of type (2,1,0) × 3 + 1 of type (1,1,1) × 6 = 3 + 18 + 6 = 27 ✓.
- Plot: √(1 + 0.25) = 1.11803, √2 = 1.41421, √3.25 = 1.80278 ✓; the points at ±0.5, ±1, ±1.5 match n = ±1, ±2, ±3 with 2π/L = 0.5 ✓; the largest curve value is √(1 + 2.2²) = 2.417 < 2.6, so the curve stays inside the range ✓. The caption says the curve is computed from the formula ✓.
- Quiz 1: answer index 1 (symmetric for both; the Hamiltonian decides) matches pp. 29-31 ✓. The explanation is right.
- Quiz 2: 1 + 2 + 2 = 5 → index 2 ✓. The momentum remark (3 units) is right ✓.
- Quiz 3: index 1 ✓ (p. 34).
- Quiz 4: index 1 ✓, [N̂, φ̂†] = φ̂† (p. 37).
- Flashcards: all five agree with the notes. Card 4 writes ω = ε_κ, correct with ħ = 1 ✓. In card 2, "scaled versions give fractional statistics" matches (4.2.3) with a_x, a_y multiplied by θ/π ✓.
- The calcs file covers every number and the key identities. Fix only the page citations of `plot-point-*` (finding 1), and the example entries if finding 2 is acted on.

## Coverage and order
- The order follows the notes: chapter opening (p. 28) → §4.1 vacuum, one particle, two identical particles, Ĥ₂ and Ĥ_n → §4.2 fermion Hamiltonian, Θ transformation, Wen's view and the dialogue, fractional statistics → §4.3 the "mystery", ring, occupation numbers, oscillators → §4.4 string, (4.4.1)-(4.4.7), field theory, membrane / d-brane → §4.5 quantization, algebra, Ĥ₀, N̂, creation and annihilation. ✓
- The dialogue summary (p. 32) is accurate. A says the order of naming cannot matter; B answers that a global phase is unphysical; A asks why the minus sign then matters; B invokes continuity (only θ = 0, π); A answers that on a lattice continuity is meaningless, yet statistics (even fractional in 2D) is well defined. Wen's conclusion that statistics is dynamical and set by the Hamiltonian is attributed to him ✓. Not mentioned: his remark that phase transitions can change statistics (info).
- Omitted, all minor (info): the photon and dilute-hydrogen examples of free bosons (p. 28); the remark that Θ jumps by 2π on the positive x-axis while e^{iΘ} is smooth (p. 31); Fig. 4.4, three pictures of one two-boson state (p. 36); the note that the string picture works only in 1D (it is implied by the membrane sentence).
- Wen's problems: Problem 4.2.1 is mentioned, only for its definition of fractional statistics; its parts (a)-(c) (ground-state energies in a harmonic trap for θ = 0, π/2, π; checking by filling levels; whether a transformation like (4.2.2) works) are not. Problem 4.2.2 (a three-fermion Hamiltonian on symmetric wave functions) and Problem 4.4.1 (draw the three pictures for bosons at 4π/L and 6π/L) are not mentioned. Suggest one sentence that lists them, or leave them for the problem-set pages.
- Additions by the page: the restoring-force reading of the m²c⁴ term, and the counting comparison 10 vs 27. Both are correct and presented as the page's own.

## Licensing
- The local text has no "rights reserved", "courtesy" or copyright notice (grep). The figures (4.1-4.5) appear to be Wen's own, with no third-party credit.
- No figure is reproduced. The dispersion Plot is generated from ε = √(1 + x²), with dots at the allowed levels. It shows the same kind of picture as Fig. 4.3 but is drawn from the formula, has a massive and a massless curve and no occupation dots, so it is not a redraw (info).
- Paraphrase: the prose is rewritten throughout. A few sentences follow Wen's sentence structure closely enough to note (info; all short and attributed):
  - "That is the whole content of 'identical': there is only **one** state with a particle at x₁ and a particle at x₂. If the two kets were different states, the particles could be told apart." This mirrors p. 29 ("there is only one state with one particle at x1 and one particle at x2. If |x1x2⟩ and |x2x1⟩ describe two different quantum states ... non-identical particles").
  - "A vibrating string described this way is a **classical field theory** in one dimension, with h or φ as the field." This mirrors p. 35 ("Such a system of vibrating string is also called a classical field theory (in one dimension) where h or φ is the field"). Suggest recasting, for example: "This is the simplest example of a classical field: a quantity h (or φ) given at every point x of a one-dimensional space."
  - The last sentence of §"Quantizing the string" (Ĥ_n acts only on n-particle states, Ĥ₀ on any number) follows the last sentence of §4.5 in content and order. It is acceptable, but could be reworded.
  - The "actors on an empty stage" image is Wen's (p. 33). The page uses it briefly and attributes the question to him. Fine.
- No OpenStax or LibreTexts material.

## Notes
- Forward links: the callout says Guth "opens his lecture on the false vacuum" with the statement that every particle is a quantum excitation of a field, and that a scalar field is a single number at each point of space describing a spinless particle. false-vacuum.mdx (Lecture 23, "the last of the course") begins with "## Scalar fields", which says exactly this, and says the inflaton is a scalar field ✓. That page qualifies the claim with "in present-day particle theory (not yet string theory)", which the callout leaves out; acceptable. black-body-radiation.mdx treats the cavity field as standing-wave modes, each a harmonic oscillator, quantised ✓. The leadsTo `why` ("Guth's last lecture starts from ...") is consistent with that page ✓. The analogy "like the string's displacement h" is the page's own and is fair.
- Prerequisites: `identical-particles` (content/year-3/8.044) and `creation-annihilation-operators` (content/year-2/8.04) exist and fit. The inline link `/courses/8-04/creation-annihilation-operators` uses the right course slug ✓.
- YAML and LaTeX: backslashes are doubled correctly in the quoted strings. The page has no em dash (count 0). `data/symbols.json` has 84 entries mentioning this slug; I did not check them one by one, and I did not run `npm run content:check`.
- To clear the verdict: fix finding 1 (page citation, also in calcs). Finding 2 (an example too close to Fig. 4.3) is strongly recommended under writing rule 1.

## Resolution (2026-11-19, by the page author)

- Error (4.1.5 page): the formula now cites "§4.1, pp. 29–30, eqns (4.1.1) and (4.1.5)"; the plot-point calcs cite p. 30.
- Warning (worked example too close to Fig. 4.3): replaced by an original state, two bosons at n = −2 and one at n = 5 (9 units, 5.58 × 10⁻⁴ eV; momentum h/L = 3.31 × 10⁻³² kg m/s); quiz 1, calcs and the worked-example symbol entries (κ₋₂, κ₅ and their occupation numbers and operators) updated.
- Info: §4.2 Hamiltonian now said to be for non-relativistic particles of mass m; "advanced aside" replaced by "which Wen marks with two asterisks"; "a book Wen was writing in 2005" softened to "a typed draft chapter of a book by Wen"; the field-algebra citation now reads "eqn (4.5.1) and the line below it"; the "identical" sentence, the "classical field theory" sentence and the closing Ĥₙ versus Ĥ₀ sentence rewritten in our own structure.
- Info items on omissions (photon and hydrogen examples, the 2π jump of Θ, Fig. 4.4, Problems 4.2.2 and 4.4.1) left as they are: minor, and the page covers the physics of each section.
