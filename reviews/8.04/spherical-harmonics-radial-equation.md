---
page: content/year-2/8.04/spherical-harmonics-radial-equation.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes20_21/ (read: PDF MIT8_04S16_LecNotes20_21.pdf, pp. 9–12 extracted with pdftotext and pp. 9–10 rendered as images to check signs; the printed footers match the PDF page numbers)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/calendar/ (read: topics for Lectures 20–22)
  - content/year-4/8.286/temperature-and-decoupling.mdx (read, for the cosmology callout)
verdict: pass-with-notes
---

# Review: Spherical harmonics and the radial equation

Scope checked: notes from eq. (3.24) on p. 9 to the end at eq. (4.16) on p. 12. The earlier part is reviewed separately in `reviews/8.04/angular-momentum-central-potentials.md`.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Sentence after the first spherical harmonics formula ("In Cartesian form ...") | Eq. (3.31) on p. 10 prints Y₁,₀ = √(3/4π) cos θ = √(3/4π) z/**r²**. This is a typo in the notes: z/r = cos θ. | √(3/(4π)) z/r | The page is right, but it corrects the notes without saying so (writing rule 4). Add a bracket, e.g. "(the notes' eq. (3.31) has z/r², a typo for z/r)". |
| 2 | warning | Plot caption and axes | The notes have no plot. In Rydberg units (energy in Ry, r in Bohr radii), hydrogen's V_eff is −2/r + l(l+1)/r². In Hartree atomic units it would be −1/r + l(l+1)/(2r²). | The caption says "written in atomic units". The y-axis says "Rydberg". | The curves are correct for Rydberg units, and they agree with the y-axis label. The caption's "atomic units" usually means Hartree units, which would give a different curve. Write "in Rydberg units (energies in Rydbergs, r in Bohr radii)" instead. |
| 3 | info | Intro paragraph (scope note) | The calendar lists Lecture 21 as "Associated Legendre polynomials. Radial equation. Begin Hydrogen atom. 2-body problem and separation of variables." | The page mentions only the two-body problem as a calendar topic that the notes do not cover. | Optionally add that the calendar's "Begin Hydrogen atom" is left to the Lecture 22 page, which is already in `leadsTo`. |
| 4 | info | Orthonormality formula, eq. (3.33) | ∫dΩ Y*_{l′m′} Y_{lm} = δ_{ll′} δ_{mm′} | ∫dΩ Y*_{lm} Y_{l′m′} = δ_{ll′} δ_{mm′} | The primes are on the other factor. The two forms are equivalent, so no change is needed. |
| 5 | info | "They are not polynomials in general, because of the square-root factor." | Not stated in the notes. | Added by the page. | The statement is correct (for odd \|m\| as functions of x), so it can stay. |

All formula citations were checked against the notes. Each one is correct in content, in equation number and in page:
- (3.24) and (3.25), p. 9. The notes have no (−1)^m in (3.24), and the page matches.
- (3.26), p. 9. It is for m ≥ 0 and contains (−1)^m e^{imφ} P_l^m(cos θ). Spelled out, the page's N_lm is the square root of (2l+1)/(4π) · (l−m)!/(l+m)!, which matches the notes exactly.
- (3.27), p. 10: Y_{l,m} = (−1)^m [Y_{l,−m}]* for m < 0, correct.
- (3.28), p. 10: the eigenvalues ħm and ħ²l(l+1), correct.
- (3.29)–(3.31), p. 10. The signs match the notes, including Y₁,±₁ = ∓√(3/8π) e^{±iφ} sin θ, which was checked on the rendered page because pdftotext drops the ∓. The Cartesian form ∓√(3/8π)(x ± iy)/r also matches.
- (3.32) and (3.33), p. 10.
- (4.1), p. 10.
- (4.2)–(4.4), p. 10. The page cites these in the text only.
- (4.5), p. 11.
- (4.6), p. 11. The notes print the number (4.6) on the line above the equation in the layout, but it is (4.6).
- (4.7), p. 11.
- (4.8)–(4.10), p. 11.
- (4.11)–(4.13), p. 11, and (4.14), p. 12. The page cites them as "notes pp. 11–12", which is correct.
- (4.15) and (4.16), p. 12. The page combines them in one formula, cited as eqs. (4.15)–(4.16).

## Arithmetic and answer checks
- Example (a):
  - P₁¹ = √(1−x²) · 1 = sin θ ✓
  - P₂¹ = √(1−x²) · 3x = 3 cos θ sin θ ✓
- Example (b): ∫₀^π cos²θ sin θ dθ = 2/3, and (3/4π) × 2π × 2/3 = 1 ✓
- Example (c):
  - 197.33² = 38,939
  - × 2 = 77,878
  - 2 × 511,000 × 0.010 = 10,220
  - 77,878 / 10,220 = 7.62 eV, so the page's "≈ 7.6 eV" ✓
  - The comparison with atomic energies (13.6 eV) is fair.
- Example (d):
  - s = 3 gives 3·2 = 6 = 2·3 ✓
  - s = −2 gives (−2)(−3) = 6 ✓
- Quiz 1: 2·3 + 1 = 7 ✓
- Quiz 2: the marked answer is correct. Only the L̂² eigenvalue enters, as stated in notes p. 11.
- Quiz 3: the marked answer is correct. The explanation matches notes p. 12: for l > 0, r^{−l} cannot be normalized; for l = 0 it gives R ∼ 1/r, which is not a solution.
- Quiz 4: the marked answer is correct, matching eqs. (4.9)–(4.10).
- Flashcards: all three are correct.
- Plot:
  - The expression −2/r + L(L+1)/r² is correct for hydrogen in Rydberg/Bohr units, because ħ²/(2m a₀²) = 1 Ry and e²/a₀ = 2 Ry.
  - For l = 1 the minimum is at r = l(l+1) = 2, where V_eff = −0.5. It lies inside the range [−1.6, 1.6].
  - The caption's statements about l = 0 (no barrier) and l ≥ 1 are correct.
  - See finding 2 for the caption's wording on units.
- The calcs file `calcs/8.04/spherical-harmonics-radial-equation.yaml` covers the numbers in examples (a)–(d) and quiz 1 (I did not run `calc:test`). It also checks that Y₀₀ and Y₁,₁ are normalized.

## Coverage and order
- The page follows the notes' order: (3.24) → (3.25) → (3.26)–(3.28) → (3.29)–(3.31) → (3.32)–(3.33) → section 4, from (4.1) to (4.16). No segment of pp. 9–12 is left out.
- Additions:
  - the Cartesian forms are in the notes, so this is not an addition;
  - "not polynomials in general" (finding 5);
  - the plot;
  - the worked example;
  - the cosmology callout.
- Two-body note: correct. The notes mention the two-body problem only on p. 3, item 2, where eq. (1.7) applies when V = V(|r₁ − r₂|). They never derive the reduction, and pp. 9–12 do not touch it. The calendar does list "2-body problem and separation of variables" for Lecture 21, as the page says.

## Licensing
- The notes PDF has no "All rights reserved" or "Courtesy of" notice; a grep found none. The course is CC BY-NC-SA.
- The page's text is rewritten. A few short paraphrases stay close to the notes, but none is a verbatim sentence, which is acceptable:
  - "Being eigenfunctions of Hermitian operators with different eigenvalues"
  - "repulsive and proportional to the squared angular momentum"
  - "effectively there is a wall at r = 0"
- The worked example is original. Neither the centrifugal-energy number nor the specific P₂¹ and Y₁₀ checks appear in the notes.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout and `leadsTo` (8.286 Lecture 17) are fairly attributed:
  - The callout attributes nothing to Guth.
  - Its claims are correct: hydrogen's 13.6 eV binding energy, and neutral atoms surviving only below a few thousand kelvin. They agree with the target page, which gives recombination at about 4,000 K and decoupling at about 3,000 K.
  - The link `/courses/8-286/temperature-and-decoupling` uses the same form as the other five links to that page.
  - The target page does not itself mention 13.6 eV. The callout does not claim it does, so this is fine.
- The `leadsTo` to 8.04 Lecture 22 matches the calendar ("Scales in the hydrogen atom ... Series solution. Energy quantization.").
- The notation convention (script ℓ written as l) is stated in the intro and used throughout.

## Resolution (2026-11-17, by the page author)

1. Added a bracket noting the notes' typo z/r² in eq. (3.31).
2. The plot caption now says Rydberg units (energies in Rydberg, r in Bohr radii).
3. The opening note now says the start of the hydrogen atom is also on MIT's calendar for this lecture, and that the two-body reduction is done on the next page.
4.–6. No change.

Status set to `reviewed`.
