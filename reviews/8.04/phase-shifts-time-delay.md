---
page: content/year-2/8.04/phase-shifts-time-delay.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes18/ (read: local PDF n18.pdf, Zwiebach, "Chapter 18: Scattering in one dimension", April 26, 2016, printed pp. 1–7 plus the OCW terms page; equation-to-page assignment checked from the printed footers in the pdftotext output)
  - MIT 8.04 Lecture 19 notes (n19.pdf, read only to check the leadsTo claim: Levinson's theorem is section 1, Breit–Wigner in section 3)
  - MIT 8.04 syllabus titles for Lectures 18 and 19 taken from content/year-2/8.04/_course.json, not re-read on OCW
verdict: pass-with-notes
---

# Review: Scattering in one dimension, phase shifts and time delay

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Opening paragraph / whole page | The syllabus title for Lecture 18 is "One-dimensional scattering: phase shifts, time delay and Levinson's theorem"; the Chapter 18 notes do not contain Levinson's theorem (it is section 1 of the Lecture 19 notes) | Silent about Levinson's theorem in this lecture; it is only mentioned via leadsTo ("Levinson's theorem ... " for Lecture 19) and "a connection taken up next lecture" | Add one sentence to the opening note: the lecture title also names Levinson's theorem, which the notes treat at the start of Chapter 19, covered on the next page. |
| 2 | info | "With the potential", range of δ | Notes p. 3: "A natural range of δ is from zero to 2π, but it will be easier to let it range through all of the reals" | Only the second half ("convenient to let it take any real value") | Fine. Optional: add the notes' natural range 0 to 2π before saying it is allowed to run over all reals. |
| 3 | info | "An attractive well", plot | Figure 5 (p. 7) shows four panels: δ, sin²δ, (1/a)dδ/dk and |A| | Plot shows δ and sin²δ only; the delay and |A| are described in words | Acceptable (own plot, figure not reproduced). Optional: add a second generated plot of (1/a)dδ/d(ka), which ranges from about −2.94 near ka = 0 to about −0.005 at ka = 4 for z₀² = 3.40 (recomputed). |
| 4 | info | Matching condition | Notes give the explicit solution (1.31) for cot δ | Mentioned in words with eqs. (1.29)–(1.31), equivalent form tan(ka + δ) = (k/k′) tan k′a written instead | Fine; the tan form is algebraically equivalent to (1.28) (checked numerically at ka = 0.5: both sides of (1.28) equal −0.6752). |
| 5 | info | First paragraph | Notes: Rutherford "learned about the structure of the atom by scattering alpha particles off thin layers of gold" | "found the atomic nucleus by scattering alpha particles off gold foil" | Historically correct and a fair rewording; no change needed. |
| 6 | info | Notation | Notes use V(x) for the full potential and a script V(x) for the nontrivial part in 0 < x < R | U(x) for the script V, said explicitly ("a script V in the notes") | Correct and clearly flagged. The notes' "Now consider the case V(x) = 0" on p. 2 is a transcription slip for ≠ 0; the page correctly writes "with the potential" and does not repeat it. Likewise the notes' "shown in Fig. 3" on p. 1 should be Fig. 1; not relevant since no figures are used. |

Formula citations, all checked against the printed footers:
- (1.1) p. 1; (1.5) p. 2; (1.6)–(1.7) p. 2; (1.8) p. 3; (1.9)–(1.12) p. 3; (1.13)–(1.18) p. 4; (1.19)–(1.22) p. 5; (1.23)–(1.24) p. 5; (1.25)–(1.33) p. 6; Figure 5 and its discussion pp. 6–7. Every `at=` on the page matches. The content of each `<Formula>` matches the notes (same signs, same 1/2i normalisation, same δ'(E) convention, k′ as in (1.25)).

## Arithmetic and answer checks
- Example (a): hard wall at x = a, ψ ∝ sin(k(x − a)) so δ = −ka (mod π), dδ/dk = −a, Δt = (2/v₀)dδ/dk = −2a/v₀. Correct.
- 1.0 eV electron: v₀ = √(2 × 1.602e-19 J / 9.109e-31 kg) = 5.931e5 m/s ≈ 593 km/s. Correct.
- Δt = −2 × 1.0e-10 / 5.93e5 = −3.37e-16 s ≈ −3.4e-16 s. Correct.
- Example (b): k′a = √(3.40 + 0.25) = 1.9105 ≈ 1.910. Correct.
- δ = atan((0.5/1.9105) tan 1.9105) − 0.5 = −1.1374 ≈ −1.137. Correct (and satisfies (1.28): k cot(ka + δ) = k′ cot k′a = −0.6752 in units of 1/a).
- sin²δ = 0.8237 ≈ 0.82. Correct.
- (1/a)dδ/dk = dδ/d(ka) at 0.5 by central difference = −1.4926 ≈ −1.49. Correct; "returns early by about one and a half free transit times" is right.
- Plot: curves are δ = atan((q/√(3.4 + q²)) tan √(3.4 + q²)) − q and sin²δ. On 0 ≤ ka ≤ 4, k′a runs from √3.4 = 1.844 to √19.4 = 4.405, inside (π/2, 3π/2) = (1.571, 4.712), so tan k′a is continuous and finite and the principal atan gives a continuous δ with δ(0) = 0 (largest step over 40 000 samples 2.9e-4). The caption's "no branch correction" claim is verified. δ(4) = −2.766, inside the y-range [−3.3, 1.3]. |δ| = π/2 at ka ≈ 0.870, where sin²δ = 1, consistent with the text.
- One bound state for z₀² = 3.40: with a wall at x = 0 the well binds one state iff π/2 < z₀ < 3π/2; z₀ = 1.844. Consistent with the total excursion π stated by the notes and the page.
- Quiz 1 (answer 0, equal currents): correct, matches notes p. 3.
- Quiz 2 (answer 0, pulled in by δ/k, attractive): correct, matches notes p. 3.
- Quiz 3 (answer 0, 2ħ dδ/dE): correct, (1.13)/(1.18).
- Quiz 4 (answer 0, δ = −ka): correct; explanation "returns early by 2a/v₀" correct.
- Flashcards: all three agree with (1.8), (1.11)–(1.12), (1.13) and (1.22).
- calcs/8.04/phase-shifts-time-delay.yaml entries read for the example numbers agree with the recomputation above (not run through `npm run calc:test` by this review).

## Coverage and order
- Order follows the notes: motivation and elastic scattering → finite-range potential (1.1) → free solution (1.2)–(1.5) → incoming/outgoing waves and δ (1.6)–(1.8) → interpretation of δ → scattered wave and amplitude (1.9)–(1.12) → time delay (1.13), derivation (1.14)–(1.18), natural time (1.19)–(1.22) → example (1.23)–(1.33) and Figure 5 discussion.
- Nothing in Chapter 18 is left out except the |A| panel (mentioned only in the high-energy limit) and the explicit cot δ formula (1.31) (mentioned, not shown). Both minor.
- The worked example is an addition (page's own); see finding 1 for the Levinson's theorem item in the lecture title.

## Licensing
- No figure reproduced; the plot is generated from the matching condition. No "All rights reserved" or "Courtesy of" notices in the Chapter 18 PDF (only the standard OCW terms footer and a credit to Andrew Turner for the LaTeX transcription, which concerns the notes, not reused material).
- No verbatim copying found: the prose is rewritten throughout; short phrases ("canonical solution", "scattering amplitude", "finite range") are standard terminology.
- The worked example is original: the notes have no moved-wall example and no numerical point on the z₀² = 3.40 curve.
- No OpenStax or LibreTexts material.

## Notes
- No `Callout kind="cosmology"` on this page; leadsTo points only to 8.04 Lecture 19. The "why" (Levinson's theorem, resonances, Breit–Wigner) matches the Lecture 19 notes (Levinson is section 1, Breit–Wigner in section 3). Fine.
- The interpretation of the negative delay (particle gains kinetic energy V₀ and bounces back sooner) matches notes p. 6.
- Hard-wall result δ = −ka is defined only modulo π; the page's choice is the natural continuous one with δ(0) = 0. No change needed.

## Resolution (2026-11-17, by the page author)

1. The opening note now says MIT's calendar also lists Levinson's theorem for this lecture, and that it is in the next chapter of the notes and on the next page.
2. Added that δ could naturally be taken between 0 and 2π before letting it take any real value.
3.–6. No change (the delay and |A| are described in words).

Status set to `reviewed`.
