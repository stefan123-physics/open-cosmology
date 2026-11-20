---
page: content/year-4/8.07/magnetic-dipole-force-torque-maxwell.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln11/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/4c8c6cd312d191f598cde03893a5f614_MIT8_07F12_ln11.pdf (read, local copy: handwritten slides with no text layer; slides -1-, -15- to -23- and the OCW end page read from the page images; slides 2 to 14 belong to the companion page and were not re-read)
  - content/year-4/8.07/magnetic-multipole-expansion-dipoles.mdx, content/year-4/8.07/ideal-magnetic-dipole-current.mdx, content/year-1/8.02/magnetic-dipoles.mdx, content/year-4/8.286/magnetic-monopoles.mdx (read in part, for the claims made about them)
verdict: pass-with-notes
---

# Review: Force, energy and torque on a magnetic dipole, and Maxwell's equations for its field

The page covers slides 15 to 23 of Lecture Notes 11 (Guth, handwritten slides, "Magnetic Dipoles and Magnetic Fields in Matter", Lecture 26, 11/9/12, as slide 1 says). Every `<Formula>` was compared with the slide images; the author's notes.md was not used. Each derivation step was redone by hand (index algebra below). The worked example was recomputed by hand, including all directions. `npm run calc:test -- -k magnetic-dipole-force-torque-maxwell`: 24 passed. `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

Formula by formula (label, `at=`, verdict). All 19 match the slides at the cited slide:
- slide 15: the magnetic force (boxed: F = q v × B, dF = I dℓ × B = J × B d³x); the force as an integral (= −∫B × J = +∫B × (m × ∇δ³)). Match. The electric recap in the prose (F = (p·∇)E or ∇(p·E), τ = p × E + r × F, U = −p·E) matches slide 15.
- slide 16: force in components; after integrating by parts (with the underbrace m_i ∂_j B_j = 0); boxed F = ∇(m·B). Match.
- slide 17: boxed U(r) = −m·B(r) with the line integral from ∞, "keeping m fixed and defining U = 0 at ∞"; the torque as an integral (τ = ∫r × dF = −∫r × (B × J) = ∫r × [B × (m × ∇δ³)]). Match.
- slide 18: torque in components and after integrating by parts; reducing the Levi-Civita symbols. Match. The page compresses the slide's two lines (ε_ijk ε_klm ε_mnj, then ε_ijk ε_mkl ε_mnj) into one, starting at ε_mkl; equivalent by the cyclic property, fine.
- slide 19: boxed τ = m × B; the dipole field with (8π/3) m δ³ inside the μ₀/4π bracket; "should satisfy" ∇·B = 0, ∇×B = μ₀J_dip = −μ₀ m × ∇δ³. Match.
- slide 20: the identity ∂_i(x_j/r³) = −∂_i∂_j(1/r) = (δ_ij − 3r̂_ir̂_j)/r³ + (4π/3)δ_ij δ³; G and G_i in both forms; boxed ∇·G = −(8π/3)(m·∇)δ³. Match.
- slide 21: boxed ∇·B_dip = 0; boxed curl of G (ε_ijk ∂_j G_k = (4π/3) ε_ijk [∂_j δ³] m_k, ∇×G = −(4π/3) m × ∇δ³). Match.
- slide 22: curl of the delta-function term; boxed ∇×B_dip = μ₀J_dip with J_dip = −m × ∇δ³. Match.
- slide 23: E_dip with −(4π/3) p δ³; boxed ∇·E_dip = ρ_dip/ε₀, ρ_dip = −p·∇δ³, ∇×E_dip = 0. Match.

"Boxed" annotations were checked: every formula marked "(boxed)" is boxed on the slide, and none of the unmarked ones is.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The energy", line after the U formula: "a dipole is pulled toward stronger field" | Slide 17 gives only U = −m·B. | States without qualification that a dipole is pulled toward stronger field. That holds only when m·B > 0 (moment along the field); a dipole pointing against the field is pushed toward weaker field, and case (b) of the page's own example (m ⊥ B) feels a sideways force. | "a dipole lined up with the field is pulled toward stronger field". |
| 2 | info | "Maxwell's equations for the dipole field": "Away from the origin both are easy, and both sides vanish." | Slide 19 asks only "Can we check?". | Adds the remark that away from the origin both checks are easy. True (the calcs file checks div G = 0 and curl G = 0 at sample points), and phrased as the page's own prose. | None needed. |
| 3 | info | Last paragraph of "The curl of the dipole field": "The coefficient 8π/3 is the only one that makes both equations work" | Not on the slides. | Page's own remark. Checked: with a coefficient c, ∇·B ∝ (c − 8π/3)(m·∇)δ³ and ∇×B ∝ −(4π/3 + c) m × ∇δ³, so c = 8π/3 is the only value meeting both. Correct. Could be marked "(our remark)" like the 4π/3 aside. | Optional: add "(a remark of ours)". |
| 4 | info | "The electric dipole": "the delta term cancels the curl of the first part instead of its divergence, and the divergences add, −8π/3 − 4π/3 = −4π" | Slide 23 states only the boxed results ("implies"). | The page supplies the intermediate reasoning. Checked: curl of −(4π/3)p δ³ is +(4π/3) p × ∇δ³, cancelling ∇×G_p = −(4π/3) p × ∇δ³; divergence −(8π/3 + 4π/3)(p·∇)δ³ = −4π(p·∇)δ³, times 1/4πε₀ gives −(p·∇)δ³/ε₀ = ρ_dip/ε₀. Correct. | None needed. |

No differences of physics, sign, coefficient or citation were found.

### The specific points asked about
- **F = ∇(m·B) using ∇·B = 0**: B × (m × ∇δ³) = m(B·∇δ³) − ∇δ³(m·B) gives the slide-16 components; integrating by parts gives −∫[∂_j(m_iB_j) − ∂_i(m_jB_j)]δ³ with no surface term; the first is m_i ∇·B = 0; the result is +∂_i(m·B) at the origin. Correct, and the quiz-1 explanation is right (a uniform field would give zero force altogether). The page's added remark that ∇(m·B) = (m·∇)B where ∇×B = 0 follows from ∇(m·B) = (m·∇)B + m × (∇×B) with m constant. Correct.
- **U = −m·B**: line integral of −∇(m·B) from ∞ with m fixed and B → 0 at ∞. Correct. The bracketed note that this is the energy for fixed moment and that the constant-current energy bookkeeping is "a separate matter, which the notes do not take up" is accurate for slides 15 to 23.
- **τ = m × B with three ε symbols**: (r × X)_i = ε_ijk x_j X_k, X_k = ε_klm B_l Y_m, Y_m = ε_mnp m_n ∂_p δ³: the slide-18 starting line. Integrating by parts flips the sign; ∂_p(x_j B_l m_n) = δ_pj B_l m_n + x_j(∂_pB_l)m_n, the second killed by x_j δ³ = 0. Then ε_mkl ε_mnj = δ_kn δ_lj − δ_kj δ_ln. The first term gives −ε_ijk B_j m_k = −(B × m)_i = (m × B)_i. Correct.
- **The crossed-out δ_kj δ_ln term**: it gives −ε_ijk δ_kj δ_ln B_l m_n = −ε_ijj (m·B) = 0, since ε_ijk is antisymmetric in j and k and δ_kj symmetric. The page's explanation ("ε_ijk δ_kj, summed over j and k, is zero: ε_ijk is antisymmetric in j and k (the slide simply crosses it out)") is correct and fairly describes the slide.
- **∇·B_dip = 0 and ∇×B_dip = μ₀J_dip**: identity of slide 20 checked (off the origin ∂_i(x_j/r³) = (δ_ij − 3x_ix_j/r²)/r³; trace of the delta part = 4π from ∇·(r̂/r²) = 4πδ³, hence (4π/3)δ_ij; the page's bracketed explanation of the 4π/3 is right and marked as its own). G_i = m_j∂_i∂_j(1/r) + (4π/3)m_iδ³ follows. ∇·G = m_j∂_j∇²(1/r) + (4π/3)(m·∇)δ³ = (−4π + 4π/3)(m·∇)δ³ = −(8π/3)(m·∇)δ³; the explicit term adds +(8π/3)(m·∇)δ³: zero. Curl: the first part is ε_ijk∂_j∂_k[m_l∂_l(1/r)] = 0 by symmetry; the hidden delta gives (4π/3)ε_ijk(∂_jδ³)m_k = (4π/3)(∇δ³ × m)_i = −(4π/3)(m × ∇δ³)_i; the explicit term gives −(8π/3) m × ∇δ³; sum −4π m × ∇δ³, times μ₀/4π = −μ₀ m × ∇δ³ = μ₀J_dip. All correct.
- **Electric-dipole check**: see row 4. ρ_dip = −p·∇δ³ is the slide-8 result on the companion page (checked there: `ideal-magnetic-dipole-current.mdx`, "The charge density of an ideal electric dipole"), so "the charge density of the shrunken electric dipole from the first page" is accurate.

## Arithmetic and answer checks
Worked example (wire on the z axis, I = 10 A along +z; magnet at (s, 0, 0), s = 0.05 m, m = 0.2 A m²); all recomputed by hand:
- B = (μ₀I/2π)(−y, x, 0)/(x² + y²) is the correct right-hand-rule field for current along +z; at (s, 0, 0) it is (μ₀I/2πs) ŷ. μ₀I/2π = 2 × 10⁻⁶ T m; B = 2 × 10⁻⁶/0.05 = 4.0 × 10⁻⁵ T = 40 µT. Correct; "about the strength of the Earth's field" (25 to 65 µT) is fair.
- (a) m = m ŷ: U = −0.2 × 4.0 × 10⁻⁵ = −8.0 × 10⁻⁶ J; τ = 0. m·B = c m x/(x² + y²) with c = μ₀I/2π; ∂_x = c m (y² − x²)/(x² + y²)² → −c m/s² at (s, 0); ∂_y = −2c m xy/(…)² → 0. F = −0.2 × 2 × 10⁻⁶/0.0025 x̂ = −1.6 × 10⁻⁴ x̂ N. The magnet is at +x and the wire at the origin, so −x̂ is **toward the wire**. Correct; U = −mc/s falls as s decreases, consistent.
- (b) m = m x̂: m·B = 0, U = 0. τ = m × B = 0.2 × 4.0 × 10⁻⁵ (x̂ × ŷ) = 8.0 × 10⁻⁶ ẑ N m. A positive rotation about ẑ turns x̂ toward ŷ, i.e. turns m **toward the field** (+ŷ): correct. Force: m·B = −c m y/(x² + y²); ∂_y = −c m (x² − y²)/(x² + y²)² → −c m/s²; ∂_x = 2c m xy/(…)² → 0. F = −1.6 × 10⁻⁴ ŷ N, i.e. sideways, opposite to the field direction at the magnet: correct.
- Check of (b) by (m·∇)B = m ∂_x B at (s, 0): ∂_xB_x = 2cxy/(…)² = 0, ∂_xB_y = c(y² − x²)/(…)² = −c/s²: −1.6 × 10⁻⁴ ŷ N. Agrees. An independent physical check: the dipole's field at the wire (on its axis, distance s behind it) points along +x̂, so the force on the wire is I ẑ × B x̂ ∝ +ŷ; Newton's third law gives −ŷ on the magnet. Agrees. (Also checked (a) by (m·∇)B = m ∂_yB: ∂_yB_x = −c/s², ∂_yB_y = 0, giving −1.6 × 10⁻⁴ x̂. Agrees.)
- Summary bullet: B = 40 µT, U = −8.0 µJ, 1.6 × 10⁻⁴ N toward the wire when aligned; torque 8.0 × 10⁻⁶ N m and a sideways force "of the same size" (1.6 × 10⁻⁴ N, the same size as in (a), not as the torque). Correct, though "of the same size" sits right after the torque value; the worked example makes the meaning clear. Optional: "a sideways force of 1.6 × 10⁻⁴ N".
- Quiz 1: answer 3 (∇·B = 0). Correct; distractors wrong for the reasons the explanation gives.
- Quiz 2: answer 1 (1.6 × 10⁻⁴ N toward the wire). Correct. F = −dU/ds = −mc/s² = −1.6 × 10⁻⁴ N; 8.0 × 10⁻⁶ is |U| in J (= mc/s = 0.2 × 2 × 10⁻⁶/0.05). Explanation correct.
- Quiz 3: answer 0 (+8π/3 m δ³ and −4π/3 p δ³). Correct per slides 19 and 23; explanation correct (divergence of G −(8π/3)(m·∇)δ³, curl −(4π/3) m × ∇δ³).
- Quiz 4: answer 2 (−(8π/3)(m·∇)δ³). Correct per slide 20; the explanation of the −4π distractor (forgetting the hidden delta in G) is right.
- Flashcards: all four checked. Card 1: J × B = −B × J = B × (m × ∇δ³) with J = −m × ∇δ³: sign correct. Cards 2 to 4 correct.
- calcs file `calcs/8.07/magnetic-dipole-force-torque-maxwell.yaml`: 24 entries, all pass; every number on the page (40 µT, 4.0 × 10⁻⁵ T, 2 × 10⁻⁶, −8.0 × 10⁻⁶ J / −8.0 µJ, 1.6 × 10⁻⁴ N, 8.0 × 10⁻⁶ N m, the coefficients −8π/3, −4π, 4π/3) is covered. Two metadata notes (info): the `fact` entry `example-earth-field` gives `source: {cite: reading1, at: 'slide 17'}`, but slide 17 says nothing about the Earth's field (25 to 65 µT is general knowledge, not from the notes); and the page-own worked-example entries cite slides 16, 17 and 19, which hold the formulas used, not the numbers. Suggest removing the source from the Earth-field fact or giving a real reference.

## Coverage and order
- The page follows slides 15 to 23 in order: electric recap and magnetic force (15), force on the dipole (16), energy and the torque integral (17), torque in components (18), boxed torque and the dipole field to be checked (19), the 1/r identity, G and its divergence (20), ∇·B_dip = 0 and the curl of G (21), curl of the delta term and Ampère's law (22), the electric dipole (23). Nothing on these slides is left out.
- Additions, each marked or clearly the page's own: the remark (m·∇)B = ∇(m·B) where no current flows; the constant-current energy caveat; the explanation of 4π/3 by the trace; the uniqueness of 8π/3; the intermediate steps for the electric dipole; the worked example; the comparison with the 8.02 page. All correct.
- The slides on "Magnetic Fields in Matter" promised by the notes' title are not in this PDF (the slides end at -23-); nothing missing on the page's account. Slides 1 to 14 are covered by `ideal-magnetic-dipole-current` (order 1).
- The intro's claim that the last notes "only stated" F, U and τ is accurate: `magnetic-multipole-expansion-dipoles` gives them as stated results at p. 8 of Lecture Notes 10.
- The claim that the 8.02 page found the same results "for a rectangular loop" is accurate for the torque (8.02 `magnetic-dipoles`, "Torque on a current loop"); that page also covers energy and force, so "All three results are those of the 8.02 page" is fair.

## Licensing
- Lecture Notes 11 carries no "All rights reserved" or "Courtesy of" notice (checked on the slide images 1 and 15 to 23 and the OCW end page; `grep` of the text and OCR files finds none). The page reproduces no figure (it has none) and no sentences of the slides beyond short phrases ("more fun with delta functions", quoted and cited; "Can we check?"). Equations are standard and cited. No OpenStax or LibreTexts material.
- The worked example (magnet next to a straight wire) is original; the slides have no numerical example.

## Notes
- **Cosmology callout and leadsTo** (marked "A remark of ours, not in the notes"): the physics is correct. A magnetic dipole made of a monopole pair would have a field built like E_dip, with −(4π/3) m δ³, and ∇·B ≠ 0 at the dipole. The s-state hyperfine splitting of hydrogen (21 cm line) is set by the contact term, and the measured splitting agrees with +8π/3 (the standard argument, e.g. Jackson §5.6; the slides 1 to 14 of these notes also discuss hyperfine/21 cm). The statements that no magnetic charge has been found, that grand unified theories predict heavy monopoles, that the early universe should have produced many, and that inflation solves that problem are correct and fairly attributed to the 8.286 page (`magnetic-monopoles`, lecture 22, which exists). The leadsTo to 8.286 Lecture 22 is fair. The link is somewhat indirect (the callout argues that ordinary dipoles are not monopole pairs, not anything about GUT monopoles themselves), but the text does not claim more than that.
- leadsTo to 8.07 Lecture 14 ("Electromagnetic Waves", ln14): correct; notes 12 and 13 are a guest talk and an unused courtesy item, so 14 is the next lecture notes in the course's syllabus.
- Prerequisites `ideal-magnetic-dipole-current`, `magnetic-multipole-expansion-dipoles`, `magnetic-dipoles` exist and fit. In-text links (`/courses/8-07/rotations-index-notation`, `/courses/8-02/magnetic-dipoles`, `/courses/8-286/magnetic-monopoles`) point to existing pages.
- Symbols (data/symbols.json, meanings scoped to this page): G ("with an arrow, G = [3(m · r̂)r̂ − m]/r³, the first part of the dipole field without the factor μ₀/4π"), G_i, G_k, G_p without units: accurate, and leaving out the unit is defensible because G carries A/m for m but C/m² for p (G_p). Other new meanings checked (s, I, B_x, B_y, B_l, F_i, τ_i, m_j, m_l, m_n, x_p, x_l, J_dip, E_dip in N/C, the Kronecker and Levi-Civita entries δ_kn, δ_lj, δ_ln, δ_pj, ε_klm, ε_mkl "equal to ε_klm", ε_mnj): all correct for this page. Minor, pre-existing entries: `B-j-cramer` is spoken "B j" and `F-i-vir` "F i" while the new entries say "B sub l", "tau sub i"; not wrong, just inconsistent.
- Uncertain: nothing. All checks above were done from the slide images and by hand; the OCW resource page itself was not opened online.

## Resolution (2026-11-18, by the page author)

1. "The energy": now "A dipole with m · B > 0 is pulled toward stronger field; one pointing against the field is pushed toward weaker field."
2. No change needed.
3. "The coefficient 8π/3 is the only one that makes both equations work" is now marked "(a remark of ours)".
4. No change needed.
- Notes, calcs: the `example-earth-field` fact had a slide-17 source that says nothing about the Earth's field. The comparison is removed from the worked example ("4.0 × 10⁻⁵ T.") and the entry is deleted from the calcs file.
- Summary: "a sideways force of 1.6 × 10⁻⁴ N" instead of "of the same size".

`status: reviewed`. content:check, calc:test and build rerun.
