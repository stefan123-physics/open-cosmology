---
page: content/year-2/8.04/angular-momentum-central-potentials.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes20_21/ (read: resource page, CC BY-NC-SA 4.0; PDF MIT8_04S16_LecNotes20_21.pdf read in full with pdftotext, printed footers checked for pp. 1–10 and equal to PDF page numbers)
verdict: pass-with-notes
---

# Review: Central potentials and angular momentum

Scope checked: notes sections 1–3 up to eq. (3.23), pp. 1–9. Everything from eq. (3.24) on is left to the Lecture 21 page, as stated in the brief.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Bracket after the "L̂² commutes with L̂z" formula | Last line of eq. (2.14) (p. 6): iħL̂yL̂x + iħL̂xL̂y − iħL̂xL̂y − iħL̂xL̂y. The signs are right. Only the operator order in the fourth term is wrong (it should be −iħL̂yL̂x). As printed, the line adds up to iħ[L̂y, L̂x], not zero. | "has its signs and orders mixed up" | Be exact: "(In the last line of the notes' eq. (2.14), the fourth term should read −iħL̂yL̂x, not −iħL̂xL̂y; the result, zero, stands.)" The page's own four-term expression is correct. |
| 2 | warning | Intro paragraph | Lectures 20–21 share one set of notes; this page covers pp. 1–9 up to (3.23). | "...the next page continues with the associated Legendre functions and the radial equation (notes pp. 1–9)." | Where it sits now, "(notes pp. 1–9)" reads as the next page's range. Move it next to "This page covers the notes' first three sections up to the Legendre polynomials". |
| 3 | warning | Quiz 4, worked example (d) | The bound \|m\| ≤ ℓ is derived only at eq. (3.25) (p. 9), which belongs to the Lecture 21 page. | "the largest possible $L_z$ = lħ = 2ħ" is used without comment. | Add a short forward note, e.g. "(the next page shows \|m\| ≤ l, so the largest L_z is lħ)". The physics is correct. |
| 4 | warning | Quiz 2, fourth choice | — | "Only if $\hat L^2 = 0$ is impossible" | This distractor is garbled. Replace it with a clear wrong option, e.g. "Only if $\hat L^2\psi = 0$". |
| 5 | info | "In spherical coordinates", eq. (2.17) | The notes' eq. (2.17) chain rule has ∂z/∂φ = 0. | ∂/∂φ = x∂/∂y − y∂/∂x | Matches the notes. No change needed. |
| 6 | info | Non-negativity of L̂² eigenvalues | Notes eq. (3.3) has a typo: the first line writes L̂x² three times. | The page writes the correct three-component sum. | Fine as is. The silent correction is harmless; an optional bracket could mention it. |
| 7 | info | Two-body sentence | Notes p. 3, item 2: eq. (1.7) applies to the two-body problem with V(\|r₁ − r₂\|), so hydrogen can be treated as a central potential. The notes never carry out the reduction (no reduced mass or centre of mass anywhere in pp. 1–12). | "that reduction is not carried out in these notes" | Correct. However, `_course.json` gives Lecture 21 the title "...the radial equation and the two-body problem", which the notes do not support. Consider renaming that syllabus entry. |
| 8 | info | Notation | Notes use script ℓ. | Formulas, inline maths and the summary use $l$. The heading, plot labels and frontmatter summary use ℓ. | This matches the convention stated in the intro. Acceptable. |

All other formula citations were checked and are correct in content and location:
- (1.1)–(1.3), p. 1
- (1.4)–(1.5), p. 2
- (1.8), p. 2. The notes' (1.9) is the Schrödinger equation; the Laplacian is (1.8).
- (1.10)–(1.13), p. 3
- (1.14), p. 3
- (2.2), p. 3
- (2.3)–(2.5), p. 4
- (2.6)–(2.9), p. 4
- (2.10), p. 5
- (2.11)–(2.13), p. 5. The conclusion is on p. 6, and the page cites pp. 5–6.
- (2.14)–(2.19), p. 6
- (3.1)–(3.8), p. 7, including footnote 1
- (3.9)–(3.17), p. 8
- (3.18)–(3.23), p. 9

The Rodrigues formula 1/(2^l l!) d^l/dx^l (x² − 1)^l and the recursion (3.19) are correct. The notes' "Rodriguez" spelling is correctly flagged.

## Arithmetic and answer checks
- Example (a): (1 − x²)·3 − 2x·3x + 6·½(3x² − 1) = 3 − 3x² − 6x² + 9x² − 3 = 0. Correct. The page's grouping "3(1 − x²) − 6x² + …" is right.
- Example (b): k = 0 gives a₂ = −(6 − 0)/(1·2) = −3. k = 2 gives a₄ = −(6 − 6)/(3·4)·a₂ = 0. 1 − 3x² = −2·½(3x² − 1) = −2P₂. Correct. Info: the example quietly takes a₁ = 0 (the odd series is dropped). A few words would help.
- Example (c): (x² − 1)² = x⁴ − 2x² + 1; its second derivative is 12x² − 4; 1/(2²·2!) = 1/8; (12x² − 4)/8 = (3x² − 1)/2. Correct.
- Example (d) and quiz 4: √6 = 2.449… ≈ 2.45. Correct. The argument that L cannot lie along z holds: such a state would be a joint eigenstate of L̂x and L̂y, which by (2.11)–(2.13) forces L_z = 0, contradicting m = 2.
- Quiz 1: [L̂y, L̂z] = iħL̂x. Correct (eq. 2.9).
- Quiz 2: answer "No…" is correct, and the explanation follows (2.12)–(2.13).
- Quiz 3: answer and explanation are correct (eqs. 3.6–3.8).
- Flashcards: all three are correct. The L̂² operator matches (2.19), and P₀, P₁, P₂ match (3.23).
- Plot: P₃ = (5x³ − 3x)/2 is correct (it satisfies Legendre's equation with l = 3; calcs entry legendre-P3). Checked the caption claims:
  - P₁, P₂ and P₃ have 1, 2 and 3 zeros in (−1, 1): 0; ±1/√3; 0 and ±√(3/5).
  - Parity is (−1)^l.
  - All equal 1 at x = 1.
  - The range [−1.2, 1.4] contains every curve (the minimum is −1, for P₃ at x = −1).
  - Info: the curves are entered as explicit polynomials rather than "computed from Rodrigues' formula". They are its results, so the wording is acceptable.
- calcs file `calcs/8.04/angular-momentum-central-potentials.yaml` covers translation, the chain rule, P₂, P₃, a₂, Rodrigues P₂ and √6. I did not run `npm run calc:test`.

## Coverage and order
- The page follows the notes' order: translations (§1), orbital vs spin, central potential and Laplacian, the two goals, L̂ definition, Hermiticity, commutators, spin algebra, no simultaneous eigenstates, L̂² Casimir, spherical form, joint eigenstates, φ part, θ part, Legendre equation, series, quantization, Rodrigues and examples.
- Omitted but minor:
  - the remark that ℓ(ℓ + 1) ≥ −1/4 for real ℓ (p. 7)
  - the statement that the associated Legendre functions are not polynomials (p. 8)
  - the generating function (3.22), which is only named
  - the remark that commuting Hermitian operators have a complete set of simultaneous eigenstates (p. 6)
- Added: the worked example and P₃ (both labelled as the page's own).
- The boundary at (3.23) matches the brief, and leadsTo Lecture 21 is correct.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the PDF. The OCW resource page is CC BY-NC-SA 4.0.
- Figure 1 (cyclicity diagram) is not reproduced, and the page says so.
- No verbatim passages found. "Algebra of angular momentum", "Casimir operator" and "commutators of angular momenta give angular momenta" are standard short phrases.
- The worked example is the page's own; the notes have no worked example in this range.
- No OpenStax or LibreTexts material.

## Notes
- The page has no `Callout kind="cosmology"`. leadsTo only points to 8.04 Lecture 21, so there are no cosmology claims to check.
- Optional: add the direct PDF (`/courses/8-04-quantum-physics-i-spring-2016/d1dbe77bd49b6a2eab52401dba351f64_MIT8_04S16_LecNotes20_21.pdf`) as `reading1`.

## Resolution (2026-11-17, by the page author)

1. The eq. (2.14) note now says only the fourth term of the notes' last line has its operators in the wrong order.
2. The page range (notes pp. 1–9) now sits next to "This page covers…".
3. Example (d) now notes that the bound |m| ≤ l is shown on the next page.
4. Quiz 2's fourth choice replaced by "Only when the potential is central".
5.–6. No change; the `_course.json` titles are outside this run's scope (noted in the run summary).
7. Example (b) now says it takes a₁ = 0 (the even series).
8.–9. No change.

Status set to `reviewed`.
