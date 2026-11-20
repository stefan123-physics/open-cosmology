---
page: content/year-2/8.03/beaded-string-wave-equation.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-8/ (read, saved OCW page; title "Lecture 8: Translation Symmetry")
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec8/ (read: lecture notes, 7 numbered pages plus the OCW back page; text layer partly garbled, pages 1 and 4 rendered as images to confirm the equations)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/c7ed6fbb11d73affa6fd150fa2daa146_J1uHGy1tRmM.pdf (read: transcript, 16 pages; page numbers checked page by page)
verdict: pass-with-notes
---

# Review: The beaded string and the wave equation

All formula citations and page references were checked against the notes (reading1) and the transcript (reading2). Notes page map: p. 1 shift matrix, β = e^{ika}, the bead system and force diagram; p. 2 small-angle assumptions, the force equations, the equation of motion, M, K and M⁻¹K; p. 3 derivation of ω², dispersion relation, standing waves, all k allowed, the fixed-end conditions; p. 4 ω(k) = ω(−k), the trial solution, ka = nπ/(N + 1), start of open ends; p. 5 open-end shapes and the driven string; p. 6 resonance, five-step summary, continuum limit, Taylor expansion, ρ_L, operator and wave equation; p. 7 continuous dispersion relation and v_p. Every `<Formula>` cites the right notes page. I found no errors.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Translation symmetry, once more", first paragraph | Lee says that with \|β\| ≠ 1 the amplitude increases "according to a power law" (transcript, p. 2). A few sentences earlier on the same page he says it "grows exponentially". | "With $\|\beta\| \neq 1$ the amplitudes grow by a power law" | A_j = β^j A₀ is geometric (exponential) in j, not a power law in j. This repeats a lecturer slip (writing rule 4). Write "grow (or shrink) geometrically, by a factor \|β\| per bead, and so blow up at one end of the infinite chain". If it helps, add a short bracketed note that the lecture says "power law". |
| 2 | info | "The dispersion relation", first paragraph after the formula | Notes p. 3 say only "almost the same result that we got from last lecture!" | "Almost the same as for the masses and springs, with $T/a$ in place of the spring constant (notes, p. 3)" | The physics is right, because K has T/a where the spring chain had its spring constant. The "T/a in place of the spring constant" part is the page's own gloss, though, not something the notes say. Either cite it as the page's comparison or move the citation so it covers only "almost the same". |
| 3 | info | "The continuum limit", Taylor paragraph | Notes p. 6 and transcript p. 14 drop "the a³ and higher order terms" | "leaving $-a^2A''(x)$ plus terms of order $a^3$" | This follows MIT. Strictly, the odd-order terms cancel by symmetry, so the first correction is −(a⁴/12)A⁗(x). It does not change the result. Optionally say "higher-order terms (in fact of order a⁴)". |
| 4 | info | "A finite string with fixed ends", allowed wave numbers | Transcript p. 11: Lee says "k will have to be equal to n times pi divided by N plus one" (he drops the a). Notes p. 4 write ka = nπ/(N + 1). | ka = nπ/(N + 1) | The page is right and follows the notes. This is a small spoken slip that the page silently avoids, so no bracket is needed. Listed only for completeness. |
| 5 | info | "A finite string with fixed ends", bracketed note | Notes p. 4: "n is a positive integer less than N". Transcript pp. 11–12: n = 1, 2, 3, …, N. | Says that the notes have n < N and that the lecture's n = 1, …, N is right | Verified. n = N gives ka = Nπ/(N + 1) < π, a distinct mode, so there are N modes. The bracket is correct and fairly worded. |
| 6 | info | Trial solution formula | Notes p. 4 and transcript p. 11 use α and β as the combination coefficients | Same (α, β) | β is also the shift eigenvalue earlier on the page. This follows MIT, but a reader may confuse the two. Optionally rename the coefficients (for example α, α′) or add "(a new β, not the eigenvalue)". |
| 7 | info | "Beads on a string" | Notes p. 2 and transcript p. 6 state the normal-mode ansatz y_j = Re[A_j e^{i(ωt + φ)}] before writing M⁻¹K | Not stated explicitly. The section moves from the equation of motion straight to M⁻¹K. | Optional: one sentence giving the ansatz before M⁻¹K. |
| 8 | info | Last paragraph before the callout (demonstration) | Transcript p. 15: a physical demonstration of 72 coupled oscillators ("last time you have seen this"). The travelling wave "disappears because of friction", and driving it at a fixed frequency gives standing waves. | "A chain of 72 coupled oscillators ... shows a pulse running back and forth and, driven steadily, standing waves (pp. 15–16)" | Correct, and it is a real demonstration, not a simulation. Optionally say "a demonstration" explicitly and mention that the pulse dies away through friction (Lee's point that without friction it would bounce forever). |

Citation checks with no finding: shift matrix (notes p. 1; transcript pp. 1–2); β = e^{ika}, A_j ∝ e^{ijka} (notes p. 1; transcript p. 2); rotation in the complex plane (transcript p. 2); k as wave number (transcript pp. 2–3 and p. 10); [S, M⁻¹K] = 0 (transcript p. 3); system set-up "from one edge of the universe" (transcript p. 4); small angles (notes p. 2; transcript pp. 4–5); force equations (notes p. 2; transcript p. 5); cos θ ≈ 1 (transcript p. 5); sin θ ≈ Δy/a (transcript p. 6); equation of motion (notes p. 2); student's sign correction (transcript pp. 6–7, Lee's "it should be plus" on p. 7); M⁻¹K pattern (notes p. 2; transcript p. 7); dispersion relation (notes p. 3; transcript pp. 7–8); "name will make sense later" (transcript pp. 8–9); all k allowed (notes p. 3; transcript p. 9); fixed ends (notes p. 3; transcript p. 10); ω(k) = ω(−k) and trial solution (notes p. 4; transcript p. 11); α + β = 0 and 2iα sin((N + 1)ka) = 0 (notes p. 4; transcript pp. 11–12); N normal modes, shape a sine, N = 4 sketch (transcript p. 12); open ends y₁ = y₀, y_{N+1} = y_N, ka = nπ/N, cos(ka(j − ½)) (notes pp. 4–5); driven end, amplitude ∝ sin(jk_d a)/sin((N + 1)k_d a) and resonance (notes pp. 5–6); not covered in the lecture (transcript p. 12); five-step summary (notes p. 6; transcript pp. 12–13); row j as A(x) (notes p. 6; transcript p. 13); Taylor expansion and the student's sign remark (transcript pp. 13–14); ρ_L = m/a held fixed so the string is not infinitely heavy (notes p. 6; transcript p. 14); operator −(T/ρ_L)∂²/∂x² (notes p. 6; transcript pp. 14–15); wave equation (notes p. 6), with v_p on p. 7 (so "pp. 6–7" is right); ω² = (T/ρ_L)k² and phase velocity (notes p. 7); "probably the most important equation", more important than F = ma, sound and light (transcript p. 15).

## Arithmetic and answer checks
- Dispersion algebra: (T/ma)(2 − e^{ika} − e^{−ika}) = (2T/ma)(1 − cos ka) = 4ω₀² sin²(ka/2). Correct.
- Fixed-end condition: α + β = 0 gives α(e^{i(N+1)ka} − e^{−i(N+1)ka}) = 2iα sin((N + 1)ka). Correct.
- Worked example (a), N = 3, ka = nπ/4, ω_n = 2ω₀ sin(nπ/8): 2 sin 22.5° = 0.7654, 2 sin 45° = √2 = 1.4142, 2 sin 67.5° = 1.8478. Page values 0.765, 1.414, 1.848 are correct.
- Shapes sin(jnπ/4), j = 1, 2, 3: n = 1 gives (0.707, 1, 0.707); n = 2 gives (1, 0, −1); n = 3 gives (0.707, −1, 0.707). All correct, and so are the descriptions (one arch; middle bead still; neighbours opposite).
- Worked example (b): √(50/0.020) = √2500 = 50 m/s; k = 2π/0.50 = 12.57 m⁻¹; ω = 50 × 12.57 = 628.3 rad/s; f = v/λ = 50/0.50 = 100 Hz. Correct.
- Quiz 1: answer 1 (rotation in the complex plane, projection cos kx). Correct, and the explanation is right.
- Quiz 2: N = 5 gives ka = nπ/6, n = 1…5, so 5 modes. Answer 1 is correct.
- Quiz 3: ρ_L = m/a held fixed. Answer 2 is correct, and the explanation matches transcript p. 14.
- Quiz 4: √(72/0.020) = √3600 = 60 m/s. Answer 1 is correct.
- Flashcards: all three are correct and consistent with the page.
- `npm run calc:test -- -k beaded-string`: 14 passed. The calcs file covers every number on the page.

## Coverage and order
- The page follows the lecture's order: recap of translation symmetry and why β = e^{ika} → beads on a string (forces, small angles, equation of motion, M⁻¹K) → dispersion relation → infinite string, all k allowed → fixed ends as nailed beads of an infinite string → five-step summary → continuum limit → wave equation → closing remarks and demonstration. This matches both the notes and the transcript, including where the break falls and Lee's post-break answer on why k is the wave number (handled in the first section).
- The notes-only examples (open ends, driven end) are summarised correctly and flagged as not covered in the lecture. That is fair, because the transcript (p. 12) refers students to the notes for them.
- Nothing from the lecture is missing apart from the explicit normal-mode ansatz (finding 7) and the friction remark in the demonstration (finding 8), both minor.
- The cosmology callout and the worked example are additions. Both are appropriate.

## Licensing
- No "All rights reserved" or "Courtesy of" notices appear in the notes, the transcript or the OCW page (checked by text search and by viewing notes pages 1 and 4). The page reproduces no MIT figure.
- No OpenStax or LibreTexts material.
- The prose is rewritten throughout. The only verbatim MIT text is two short quotations, both marked as quotes and attributed: "probably the most important equation" and "as a physicist, that's actually equal to an infinite number". This is acceptable.
- The worked example is original: MIT works no numerical N = 3 case and no numerical string. Lee only sketches N = 4.

## Notes
- Forward links: `leadsTo` 8.03 Lecture 9 matches the syllabus title "Wave Equation, Standing Waves, Fourier Series", and Lee says (transcript pp. 15–16) that the next lecture solves this equation. `leadsTo` 8.286 Lecture 16: the target page `black-body-radiation` (8.286 Lecture 16) describes cavity radiation as standing-wave normal modes in a box, each a harmonic oscillator, with quantisation giving the black-body spectrum. The callout's description ("only whole numbers of half wavelengths fit, each fitting wave is one mode, ... quantum share of thermal energy") is consistent with that page and fairly attributed to 8.286. The callout calls it "the same counting". It is the same idea (boundary conditions select discrete modes) applied to three-dimensional electromagnetic modes rather than a one-dimensional string. That is acceptable as written.
- Attributions: the two student sign corrections (transcript p. 7 for the equation of motion; p. 14 for the Taylor expansion) are reported accurately. The 72-oscillator system is a physical demonstration, and the page does not call it a simulation.
- The page has no em dashes.

## Resolution (2026-11-16, by the page author)

1. "Grow by a power law" replaced by "grow exponentially along the chain", with a bracket noting the lecture's wording.
2. The T/a comparison is now presented as the page's own comparison after the notes' "almost the same".
3. The order-a³ remark now notes that the odd powers cancel, so the first correction is of order a⁴.
4. No change needed (the page already uses ka).
5. No change needed.
6. Not changed: the page follows MIT's notation.
7. Not changed: the complex form is implicit in the eigenvalue step.
8. The paragraph now calls it a demonstration and says friction damps the pulse.
