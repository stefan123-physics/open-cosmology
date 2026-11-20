---
page: content/year-4/8.07/conductor-surface-forces-capacitance.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln4/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/1ffda29d6ddadef8e37e4be9c071b4e7_MIT8_07F12_ln4.pdf (read, local copy; typed, 6 PDF pages = printed pp. 1-5 + OCW citation page; pdftotext text checked against the page images of pp. 2, 3 and 4 for the equations whose symbols pdftotext loses, in particular (4.11) and (4.12))
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/9070df94553ec5622e72c42641250199_MIT8_07F12_ln5.pdf (read in part, local copy; handwritten, only printed p. 7 viewed, for the leadsTo)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/99407b81a217613e8ddec21dc3da07de_chap5capacitance.pdf (read, downloaded for this review; Example 5.5 and Eq. (5.4.7))
verdict: pass-with-notes
---

# Review: Conductors: surface forces and the capacitance matrix

Lecture Notes 4 are Guth's typed addendum to Lecture 7 (dated September 21, 2012): surface forces by virtual work (pp. 1-3, Eqs. (4.1)-(4.11)) and capacitance (pp. 4-5, Eqs. (4.12)-(4.18)). The author's notes.md was not used. All 18 numbered equations were compared with the cited printed page: every `<Formula>` has the same content and notation as the notes (with ε₀ written `\varepsilon_0`), and each equation number and page is right. (4.11) is boxed in the notes, as the page says. The one `<Formula>` without an equation number, "Sum over thin sheets" (cited "p. 3"), is the page's own formula for an argument the notes give only in words, and the page says so ("this page's way of writing the argument of the notes"). No "rights reserved" or "Courtesy of" notice anywhere in the PDF; the three drawings (charged ball p. 1, surface charge layer and field profile p. 3, N conductors p. 4, capacitor p. 5) are not reproduced: the page's field-profile graph is a generated `<Plot>` with its own second profile.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "Pressure on a charged surface" (4.11); the paragraph after it; Summary bullet 2; flashcard "Pressure on a conductor's surface" | (4.11): P = Q²/(2(4π)²ε₀R⁴) = ½σ²/ε₀ = ½σ\|E_out\|. The last form is negative for σ < 0, so it is right only for positive charge (a small slip in the notes; the first two forms are always positive). | Repeats ½σ\|E_out\| in three places and, right after, says the pressure is positive "whatever the sign of the charge", which the third form contradicts for σ < 0. Quiz 1 and its explanation are fine (½σE⃗_out as a vector is always outward). | Keep the citation but add a bracket after the formula, e.g. "(for negative charge read the last form as ½\|σ\|\|E_out\|, or ½σ E⃗_out·n̂; the notes have positive σ in mind)", and use ½\|σ\|\|E⃗_out\| (or ½ε₀\|E⃗_out\|², already in the flashcard) in the summary and flashcard. |
| 2 | info | "The ordinary capacitor": "the relation between them takes some work (Guth leaves it to a problem set)" | p. 5: "you will calculate it in Problem 5 of Problem Set 2"; p. 1 also says the notes "should be useful to you in completing Problem Set 2". | Names no problem. | Optional: "(Problem 5 of Problem Set 2 in the course)". |
| 3 | info | Formula (4.11), `at="eq. (4.11), pp. 2–3"` | The boxed equation is wholly on p. 2; only the definition E⃗_out = (σ/ε₀)r̂ that follows it is on p. 3. | pp. 2-3. | Acceptable as is (the sentence of the equation ends on p. 3); "p. 2" would be more exact. |
| 4 | info | "Capacitance: many conductors", bracket after (4.12) | Checked on the page image of p. 4: the notes list only ∇×E⃗ = 0 "outside the conductors", then the boundary conditions (4.13) and the charges (4.14). The omission is real. | Adds ∇·E⃗ = 0 between the conductors and says it is needed, because a curl-free field alone is not fixed by the boundary data. | Correct and clearly marked as the page's addition. No change. |
| 5 | info | Plot "field through the surface charge layer" | The notes' diagram (p. 3) shows \|E\| rising linearly through the layer, then falling slowly outside (the 1/r² of the sphere); the charge layer straddles the conductor's edge. | Field flat at E_out outside the layer. | Consistent with the planar approximation the page states; optionally add "(treating the surface as flat)" to the caption. |
| 6 | info | Concentric-shells example: "(The matrix is symmetric. That is true for any conductors, a result known as Green's reciprocity theorem, which the notes do not discuss.)" | LN4 says nothing about symmetry of P_ij or reciprocity. | As quoted. | Correct statement, correctly attributed. No change. |
| 7 | info | leadsTo 8.07 Lecture 5, `why`: "The notes promise a proof ... the next notes give it as the uniqueness theorem, and use it as a licence to guess solutions by the method of images." | LN4 p. 4: "we will prove later that this condition determines the distribution of charge uniquely". LN5 p. 7 (handwritten): "Uniqueness Theorem is our license to guess", then the recipe, "This is Method of Images". | "give it as the uniqueness theorem". | Supported for the statement and its use. Uncertain: I read only LN5 p. 7 and did not check whether LN5 proves the theorem; "give it" does not claim a proof, so it is fine as worded. |
| 8 | info | Wording overlaps (7-word runs) | p. 1 "will hold for any spherical shell of charge", "the entire system is static, so no work is actually done"; p. 3 "a surface charge layer of zero thickness", "the average of the field outside and the vanishing electric field inside"; p. 5 "the elastance matrix, or simply the reciprocal capacitance matrix". | Close paraphrases of these phrases. | Short standard phrases inside rewritten paragraphs; not a licence problem. |

## Arithmetic and answer checks
All recomputed independently (ε₀ = 8.8541878128 × 10⁻¹² F/m):
- Formulas: (4.3) integral ✓; (4.5) ½·Q/(4πε₀R)·Q = Q²/(8πε₀R) ✓; (4.9) derivative ✓; (4.10) → P = Q²/(32π²ε₀R⁴) = Q²/(2(4π)²ε₀R⁴) ✓; with σ = Q/(4πR²), = σ²/(2ε₀) ✓.
- Sheets sum: Σ(n−1) = N(N−1)/2, so the sum is (σ²/ε₀)·N(N−1)/(2N²) → σ²/(2ε₀) ✓.
- Plot: dashed profile, density 3(1−x)² on [0, 1], enclosed fraction 1−(1−x)³ ✓ (matches the curve expression); field averaged over the charge = ∫F dF = ½ for any profile ✓, so the caption's "exactly ½E_out" holds for both curves.
- Sphere, R = 10 cm, V = 30 kV: 4πε₀R = 1.1127 × 10⁻¹¹ F ✓; Q = 3.338 × 10⁻⁷ C = 334 nC ✓; E_out = 3.0 × 10⁵ V/m ✓ (a tenth of 3 MV/m ✓); σ = 2.656 × 10⁻⁶ C/m² ✓; P = 0.3984 Pa ✓ (same from σ²/2ε₀ ✓); W = ½QV = 5.007 mJ ✓; W/R = 0.05007 J/m ✓; 4πR²P = 0.05007 N ✓.
- Hemispheres: P·πR² = 0.01252 N = 12.5 mN ✓ (net axial force of a uniform pressure on a hemisphere = pressure × projected area, ✓). At 3 MV/m: ½ε₀E² = 39.84 Pa ✓; 101325/39.84 = 2543, "roughly 2500" ✓.
- Air breakdown reference: 8.02T Course Notes ch. 5, Example 5.5 "Electric Energy Density of Dry Air", printed p. 14: E_b = 3 × 10⁶ V/m, Eq. (5.4.7) ✓. The `location` in `references` (Section 5.4, Example 5.5, p. 14) is right.
- Concentric shells, a = 4.0 cm, b = 10.0 cm: k = 8.988 × 10⁹ m/F ✓; V₁ = k(Q₁/a + Q₂/b), V₂ = k(Q₁ + Q₂)/b ✓ (outer shell's charge gives no field inside; inner charge gives the field of a point charge outside); P₁₁ = k/a = 2.247 × 10¹¹ F⁻¹ ✓, P₁₂ = P₂₁ = P₂₂ = k/b = 8.988 × 10¹⁰ F⁻¹ ✓. Inverse (computed numerically with NumPy and symbolically): det P = k²(b−a)/(ab²); C₁₁ = P₂₂/det = ab/(k(b−a)) = 7.418 pF ✓; C₁₂ = C₂₁ = −P₁₂/det = −C₁₁ ✓; C₂₂ = P₁₁/det = b²/(k(b−a)) = 18.54 pF ✓ (cross-check: C₂₂ = C₁₁ + 4πε₀b = 7.42 + 11.13 pF ✓). CP check C₁₁P₁₁ + C₁₂P₂₁ = (ab/(b−a))(1/a − 1/b) = 1 ✓.
- Earthed outer shell, V₁ = 100 V: Q₁ = 741.8 pC ✓, Q₂ = −741.8 pC ✓. 1 nC on inner, outer neutral: V₁ = 224.7 V ✓, V₂ = 89.88 V ✓.
- As a capacitor: V₁ − V₂ = Q(P₁₁ − P₂₁) = kQ(1/a − 1/b) → C = 4πε₀ab/(b−a) = 7.42 pF ✓; general two-conductor formula C = (C₁₁C₂₂ − C₁₂²)/(C₁₁ + C₂₂ + 2C₁₂) also gives C₁₁ here ✓.
- Quiz 1: answer 2 (½σE⃗_out, outwards) ✓. Quiz 2: ½ε₀(2.0 × 10⁶)² = 17.71 Pa ✓; distractors 35.4 Pa (no ½) and 8.85 Pa (¼) ✓; "thousands of times" below an atmosphere near 3 MV/m ✓. Quiz 3: answer 3 ✓, explanation ✓. Quiz 4: answer 1 ✓ (Q₂ = C₂₁ with V₁ = 1, others 0); distractor 1 is P₂₁ as the explanation says ✓.
- Flashcards: all four correct (see finding 1 for the ½σ\|E_out\| form).
- calcs file: 44 entries; `npm run calc:test -- -k conductor-surface`: 44 passed. Every number on the page has an entry; the air-breakdown figure is a `kind: fact` with the 8.02 source. (The `sheets-sum-four` identity holds only at its single sample N = 4, which is what it claims.)
- `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

## Coverage and order
- The page follows the notes in order: virtual work (p. 1), the ball and (4.1); field, potentials and energy (4.2)-(4.5); pressure (4.6)-(4.11) with the "average field" remark; the microscopic picture of the ½ (uniform layer, then any profile via N sheets, planar approximation) (p. 3); N conductors, (4.12)-(4.14) and the uniqueness promise; induced charge and linearity, (4.15); inverse matrix (4.16)-(4.17), names, "elastance seldom used"; the capacitor (4.18), Q₁ = Q, Q₂ = −Q, V = V₁ − V₂, the non-trivial relation, the farad (pp. 4-5). Nothing in the notes is left out except the Problem Set 2 pointers (finding 2).
- Additions, all marked as the page's own: the ∇·E⃗ = 0 bracket, the second charge profile in the plot, the column-by-column reading of P_ij and C_ij, Green's reciprocity, the two worked examples.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in LN4 (checked the text and page images). None of the notes' drawings is reproduced; the plot is generated from formulas.
- The 8.02T course notes cited for 3 MV/m are MIT OCW (CC BY-NC-SA). No OpenStax or LibreTexts material.
- Both worked examples are original (the notes contain no numbers). Only short phrases overlap with the notes (finding 8).

## Notes
- Prerequisites exist (`electrostatic-energy-self-energy`, `integral-form-electrostatics`, 8.02 `conductors-and-capacitors`, 18.06 `multiplication-and-inverse-matrices`) and fit: the energy formula, Gauss's law in integral form, basic capacitors, and matrix inverses. Internal links use the existing `/courses/8-07/…` and `/courses/8-02/…` forms.
- No cosmology callout and only an 8.07 leadsTo; acceptable for this addendum (no real cosmology link is claimed).
- Symbol meanings added for this page in data/symbols.json (checked by parsing old and new files): all apply to the page and carry correct units (P_ij, P₁₁, P₁₂, P₂₁, P₂₂, P_jk in 1/F; C_ij and elements in F; Q_i, Q₁, Q₂ in C; V_i, V_j, V₁, V₂ in V; E_⊥, E_∥, E_out in V/m; W_mech in J). The descriptions of C₁₂, C₂₁, P₁₂, P₂₁ match the column reading on the page. Combined meanings for a (area element in da, inner radius), k (Coulomb constant, index), P (pressure, elastance matrix), C (capacitance, matrix) and N (conductors, sheets) correctly have no single unit. Extensions of shared meanings (δ Kronecker, ε, ρ, σ, ℓ, q, r, x, E, W, n̂, ⊥, ∥) only add this slug to existing scoped meanings that fit.

## Resolution (2026-11-18, by the page author)
- Finding 1 (warning): (4.11) is kept as in the notes, followed by a bracket saying that its last form, ½σ|E_out|, is right only for positive charge and should be read as ½|σ||E_out| for any sign (a slip in the notes). Summary bullet 2 now uses ½ε₀|E_out|² and says "whatever the sign of the charge"; the pressure flashcard uses ½|σ||E_out|.
- Finding 2: the capacitor section now names "Problem 5 of Problem Set 2 in the course".
- Finding 3: (4.11) is cited to p. 2 (page and calcs file).
- Finding 5: the plot caption now says the field outside the layer is drawn flat because the surface is treated as a plane (the layer is far thinner than the radius).
- Findings 4 and 6–8: no change needed.
- Status set to `reviewed`.
