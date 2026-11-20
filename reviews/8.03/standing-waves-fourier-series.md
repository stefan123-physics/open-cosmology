---
page: content/year-2/8.03/standing-waves-fourier-series.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-9/ (read, saved OCW page)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec9/ (read: notes, 5 pages + OCW back page; text layer partly garbled, pages 4 and 5 checked as rendered images)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/11a235fd12f14f84b2bf795222f1fa89_1JeBWHzrRD4.pdf (read: transcript, 19 pages; the PDF has no printed footer numbers, so the PDF page numbers are the page numbers; checked with pdftotext -f N -l N for pp. 1, 2, 7, 9, 12, 13, 14, 17, 19)
verdict: pass-with-notes
---

# Review: Normal modes of a string and Fourier series

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Initial conditions and Fourier series", first paragraph | The 59 terms are on a prepared slide of partial sums (1, 1–3, 1–5, 1–11, … up to 1–59: "I need to use 59 terms to describe this really wonderful shape", p. 15). The live program is then shown separately: after about 20 terms "it looks really pretty much like a MIT dome", and it keeps struggling with the sharp edges, which need infinitely many terms (p. 15). | "Lee's computer program needs 59 terms for the dome and still struggles at its corners (pp. 14–15)" | Separate the two, e.g. "a slide sums up to 59 terms; in Lee's animation the dome is recognisable after about 20 terms, but the sharp corners would need infinitely many". |
| 2 | info | "The continuum limit, once more" | Notes p. 1 and transcript p. 2: the infinite matrix M⁻¹K becomes the operator −(T/ρ_L) ∂²/∂x² in the continuum limit. The notes also recap the Taylor-series step from the discrete equation. | Not mentioned; the page goes straight from the dispersion relation to the wave equation. | Optional: one sentence that M⁻¹K becomes −(T/ρ_L)∂²/∂x², which connects to the previous lesson. |
| 3 | info | "Boundary conditions" paragraph after the first condition | sin α_m = 0. Lee: "I can choose alpha m is equal to 0" (p. 11). | "so α_m = 0" | Optional: "(α_m = π only flips the sign of A_m)". Same for β_m = π/2 ("for example", p. 17), where −π/2 would also do. |
| 4 | info | "A last remark" | Lee says "omega square is equal to 4T over m sine squared ka over 2" (p. 19), dropping the a. | Correct form ω = 2√(T/ma) sin(ka/2), with no note. | Optional, per AGENTS rule 4: "(the transcript drops the a)". Other slips that the page quietly avoids: k_m "divided by 2/L" (p. 18), "vp times Kl" (p. 19), "L equal to 2" for L/2 (p. 17, probably a transcription error). In the notes: A(x − a) written twice in the Taylor step (p. 1), "A(t) = C_m sin…" (p. 2), and μ instead of ρ_L in ω₁ (p. 4). None of these needs to be shown on the page. |
| 5 | info | Section "Normal modes by separation of variables", order | Transcript: the normal mode and its interpretation (pp. 6–7), then the wave-machine demonstration and the Rijke tube (pp. 7–8), then after the break "Am, beta m … initial conditions; Km, alpha m … boundary condition" (p. 8). | The "four unknowns" sentence comes before the Rijke tube. It cites p. 8 correctly, and the same statement is on notes p. 2, so this is acceptable. | None needed. |
| 6 | info | General solution formula | Notes p. 4 give the general sum with α_m and k_m; notes p. 5 give the form after the boundary conditions are put in, with (2m − 1)vπt/2L written out. | Cites p. 5 for the substituted form written with ω_m. | Fine as it is. "pp. 4–5" would be slightly more exact. |

All other formula citations check out against notes pp. 1–5:
- Continuum dispersion relation and v_p: p. 1.
- Wave equation: p. 1.
- ψ = A(x)B(t), the separated equation, B(t), A(x) and ψ_m: p. 2.
- Boundary conditions, α_m = 0 and k_m = (2m − 1)π/2L: p. 3.
- k₁, λ₁ = 4L, ω₁, k₂, λ₂ = 4L/3, k₃ and λ₃ = 4L/5: p. 4.
- The initial conditions, ψ̇ → β_m = π/2, orthogonality, the A_m formula and the step coefficient: p. 5.

The transcript citations in the prose also check out:
- "group effort": p. 1.
- ψ notation and 8.04: p. 2.
- Infinitely many equations of motion, with the label replacing j: p. 2.
- Division by AB v_p²: p. 3.
- f(t) = g(x), "strange fancy name", separation of variables: p. 4.
- "solved infinite number of times in this lecture": p. 5.
- Combining B_mC_m into A_m: p. 6.
- Translation symmetry: p. 6.
- Rijke tube: pp. 7–8.
- The system, and the student proposing ∂ψ/∂x = 0: p. 9.
- Massless ring and "edge of the universe": p. 10.
- α_m = 0 and cos k_mL = 0: pp. 10–11.
- k₁, λ₁, ω₁ and k₂: p. 12.
- Only up-and-down motion, the general solution, and the both-ends-fixed slide set as problem-set work: p. 13.
- Fourier slides: p. 14.
- MIT dome, square pulse and triangle programs: p. 15.
- Step example and β_m: pp. 16–17.
- Orthogonality: p. 17.
- "mode picker" and A_m of the step: p. 18.
- Summary and the closing remark on ω(k): pp. 18–19.

## Arithmetic and answer checks
- Continuum limit: (4T/ma)(ka/2)² = Tk²a/m = (T/ρ_L)k² with ρ_L = m/a. Correct.
- Fixed–free modes: cos k_mL = 0 gives k_mL = (2m − 1)π/2, and λ_m = 4L/(2m − 1), so λ₁ = 4L, λ₂ = 4L/3 and λ₃ = 4L/5. ω₁ = √(T/ρ_L)·π/2L. All correct.
- Step coefficient: ∫_{L/2}^{L} h sin(k_mx) dx = −(h/k_m)[cos k_mL − cos(k_mL/2)], which gives the page's −(2h/Lk_m)[…]. Correct, and the same as notes p. 5. (Not on the page: with cos k_mL = 0 it simplifies to A_m = (4h/((2m − 1)π)) cos((2m − 1)π/4). Adding it is optional.)
- Worked example:
  - f_m = (2m − 1)v_p/4L with v_p = 40 m/s and L = 1 m gives 10, 30 and 50 Hz. Correct.
  - ∫₀ᴸ x sin(kx) dx = sin(kL)/k² − L cos(kL)/k. Correct (integration by parts).
  - sin k_mL = (−1)^{m+1}, and A_m = 2h(−1)^{m+1}/(L²k_m²) = 8h(−1)^{m+1}/((2m − 1)²π²). Correct.
  - A₁ = 0.8106h, A₂ = −0.0901h and A₃ = 0.0324h. The page's 0.811h, −0.090h and 0.032h are correct.
  - Check: Σ 1/(2m − 1)² = π²/8, so ψ(L, 0) = h. Correct. "81% of the starting height" refers to x = L. Correct.
- Note on the example (info): the starting line ψ = hx/L has slope h/L ≠ 0 at the ring, so it breaks the free-end condition at t = 0. A massless ring cannot hold that shape unless something holds the ring. The sine series is still valid (each mode has zero slope at L, and the series converges to hx/L on [0, L]), and MIT's own step example has a similar idealisation. Optional: say "the ring is held at height h and released".
- `npm run calc:test -- -k standing-waves`: 20 passed. calcs/8.03/standing-waves-fourier-series.yaml covers every number on the page.
- Quiz:
  - Q1 (answer 1, the separation argument): correct.
  - Q2 (answer 1, ∂ψ/∂x(L, t) = 0): correct; the explanation matches transcript p. 10.
  - Q3 (answer 1, 4L/(2m − 1)): correct.
  - Q4 (answer 1, A_mL/2): correct.
  - All explanations are right.
- Flashcards: all three are correct.

## Coverage and order
- The page follows the lecture's order: recap of the continuum limit (pp. 1–2), separation of variables (pp. 3–6), interpretation (pp. 6–7), demonstrations (pp. 7–8), boundary conditions for the fixed/ring string (pp. 9–13), Fourier decomposition (pp. 14–15), initial conditions and the step example (pp. 16–18), summary and the remark on ω(k) (pp. 18–19).
- Left out:
  - M⁻¹K becoming a differential operator (finding 2).
  - Lee's repeat of the string-and-rod / Bell Labs wave machine demonstration just before the Rijke tube (p. 7). A minor omission.
  - The remark on the both-ends-fixed slide that the m = 1 mode oscillates at half the frequency of m = 2 (pp. 13–14). Info.
- Attributions:
  - The Rijke tube is described correctly as a live demonstration.
  - The MIT dome, square pulse and triangle are described correctly as a computer program (Lee's), not a demonstration.
  - The both-ends-fixed modes are described correctly as a slide and problem-set exercise.
- Added: an original worked example (fixed–free string released from a straight line). Clearly marked as the page's own.
- Forward link: leadsTo 8.03 Lecture 10, "Traveling Waves" (syllabus title). The why ("Travelling waves: the other kind of solution") matches Lee's p. 2 preview ("progressing wave solutions"). Correct.
- There is no `Callout kind="cosmology"` on this page. The previous page (beaded-string-wave-equation) already has a cosmology callout on standing waves, so this is acceptable. Info.

## Licensing
- The OCW Lecture 9 page, notes and transcript carry no "All rights reserved" or "Courtesy of" notice (grep on all three, plus a visual check of notes pp. 4–5). The transcript opens with the Creative Commons statement.
- No MIT figures are reused: the page has no images, and the mode shapes are only described in words.
- No OpenStax or LibreTexts material.
- The text is rewritten. Short quotes ("a group effort", "strange fancy name", "solved infinite number of times in this lecture", "to the edge of the universe", "mode picker") are attributed and short.
- The step example is MIT's own and is presented as MIT's (cited). The worked example is original (different initial shape and numbers).

## Notes
- The page's notation (ρ_L, v_p, k_m, α_m, β_m, A_m) matches Lee's. The notes use μ once (p. 4); the page uses ρ_L throughout, like the lecture.
- No em dashes on the page.
- The frontmatter `summary` is a long paragraph, not one sentence (CONTENT_GUIDE says one sentence). Every 8.03 page so far does the same, so this is a course-wide style point, not a finding for this page.
- Prerequisites `beaded-string-wave-equation` and `fourier-series-introduction` exist. The link /courses/18-03/fourier-series-introduction uses the same URL form as other 8.03 pages.

## Resolution (2026-11-16, by the page author)

1. The Fourier paragraph now separates the prepared slide (59 terms) from the live program (dome-like after about 20 terms, sharp edges still a struggle).
2. Not changed: the operator form of M⁻¹K is left out to keep the section short.
3. α_m = 0 and β_m = π/2 are now presented as choices (β_m = −π/2 would only flip the sign of A_m).
4. Not changed: the page's formulas follow the notes; the spoken slips do not affect any statement on the page.
5. Not changed (citation correct).
6. Not changed.
