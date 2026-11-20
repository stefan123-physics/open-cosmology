---
page: content/year-2/18.03/complex-exponentials.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-6-complex-numbers-and-complex-exponentials/ (read: local copy lec.html, title "Lecture 6: Complex Numbers and Complex Exponentials"; its only .pdf link is 0c468db8171dc8f389fe7570d1564b8a_EQJBp6Ym-6A.pdf, matching the page's `reading1` URL; title matches `_course.json`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/0c468db8171dc8f389fe7570d1564b8a_EQJBp6Ym-6A.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L6", 15 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N` and checked)
  - content/year-2/18.03/_course.json (read: Lecture 6 = Complex Numbers and Complex Exponentials, Lecture 7 = First-order Linear with Constant Coefficients)
  - calcs/18.03/complex-exponentials.yaml (read; `npm run calc:test -- -k complex-exponentials`: 9 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Complex numbers and complex exponentials

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, the equations are all on the board) with transcript = PDF page. All seven formulas are at the cited place: "Conjugate product" p. 1; "A division" p. 1; "Euler's definition" p. 2; "Exponential law" pp. 4–5 (question p. 4, computation p. 5); "Derivative of the complex exponential" pp. 7–8 (set-up end of p. 7, computation and e^{i0} = cos 0 + i sin 0 = 1 on p. 8); "Polar multiplication" p. 10; "Complexified integral" p. 11; "Result" p. 13; "A fifth root of unity" pp. 14–15 (ζ = e^{2πi/5} p. 14, ζ⁵ = e^{2πi} = 1 p. 15). No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The exponential law", sentence after the formula | p. 5: "Instead of the two identities taking up that much space, written one after the other, they take up as much space, and they say exactly the same thing" (a gesture; no fraction is stated). | "in a third of the space (p. 5)". | The "third" is not in the transcript. Write "in far less space" or "in one short line". |
| 2 | info | "The derivative", "(The power series agree too, p. 4.)" | p. 4: the notes treat infinite series as a third test, but "I'm not going to say anything about it"; p. 8 asserts it also checks "from the standpoint of infinite series". Nothing is shown. | States the series agree, citing p. 4. | Correct mathematics. Optionally "(Mattuck mentions that the power series agree too, pp. 4 and 8, without showing it.)" |
| 3 | info | "More generally $e^{a + ib} = e^a e^{ib}$ (p. 9)" | p. 9 stresses "this is really a definition", chosen so the general exponential law holds. | Presented as a further fact. | Optionally add "(again a definition, made so the exponential law holds)". |
| 4 | info | Derivative formula, $e^{i0} = 1$ | p. 8: one may not argue "i times zero is zero so it is e⁰"; the value must come from cos 0 + i sin 0 = 1, since e^{iθ} is defined by Euler's formula. | Only states $e^{i0} = 1$. | Optionally add the one-line reason; it is a point Mattuck makes deliberately. |
| 5 | info | Roots of unity, "the others are ζ², ζ³, ζ⁴ and ζ⁵ = 1 (pp. 14–15)" | The lecture ends at p. 15 right after showing ζ⁵ = 1 ("I have to stop right in the middle of things … read a little bit about how to find roots"). The powers ζ², ζ³, ζ⁴ as the other roots are not stated in the transcript. | Cites pp. 14–15 for them. | Correct mathematics. Mark it as completing what the lecture leaves to the reading, e.g. "(the lecture stops here; the remaining roots are the powers of ζ)". |

No lecturer slip is repeated. Checked:
- p. 12 ends "So, this is multiplied by e to the minus x and cosine x", dropping the "+ i sin x" (the board had e^{-x}(cos x + i sin x), as the next page's "I times negative i is one … sine x" shows). The page correctly writes $\frac{-1 - i}{2}\,e^{-x}(\cos x + i\sin x)$.
- p. 1 says the real part of (2 + i)(1 + 3i) is "two times one minus three times one"; the page and calcs file use 2·1 − 1·3 = −1, the right reading.
- p. 5 "cosine θ₁ plus i cosine θ₂ … Sine" (self-corrected); p. 4/7 mixes θ and t in d/dt e^{iθ}. The page uses t consistently in the derivative. Fine.

## Arithmetic and answer checks
- `npm run calc:test -- -k complex-exponentials`: 9 passed. Recomputed by hand:
- Division: (2 + i)(1 + 3i) = 2 + 6i + i + 3i² = −1 + 7i; (1 − 3i)(1 + 3i) = 10; result −1/10 + 7/10 i. Correct.
- Exponential law: real part cos θ₁ cos θ₂ − sin θ₁ sin θ₂ = cos(θ₁ + θ₂), imaginary part sin θ₁ cos θ₂ + cos θ₁ sin θ₂ = sin(θ₁ + θ₂). Correct.
- Derivative: d/dt(cos t + i sin t) = −sin t + i cos t = i(cos t + i sin t). Correct.
- Integral: 1/(−1 + i) = (−1 − i)/2. Real part of ½(−1 − i)e^{-x}(cos x + i sin x) = ½e^{-x}(−cos x + sin x). Differentiating ½e^{-x}(sin x − cos x): ½e^{-x}[−(sin x − cos x) + (cos x + sin x)] = e^{-x} cos x. Correct. The flashcard repeats the same result. Correct.
- Real n-th roots of 1: one for odd n, two (±1) for even n. Correct as stated.
- Plot points: cos 72° = 0.30902, sin 72° = 0.95106; cos 144° = −0.80902, sin 144° = 0.58779; ζ³, ζ⁴ are the conjugates of ζ², ζ. All five points are correct to 3 decimals; caption "72° apart" correct. The curve is the parametric unit circle, s ∈ [0, 6.2832], generated from a formula.
- Worked example (a): (3 + 4i)(1 − 2i) = 3 − 6i + 4i + 8 = 11 − 2i; |1 + 2i|² = 5; 11/5 − 2/5 i. Correct.
- (b): |1 + i| = √2, arg π/4; (√2)⁸ = 16, e^{8iπ/4} = e^{2πi} = 1, so 16. Cross-check (1 + i)² = 2i, (2i)⁴ = 16. Correct.
- (c): 1/(1 + i) = (1 − i)/2; Im[(1 − i)(cos x + i sin x)]/2 · eˣ = eˣ(sin x − cos x)/2; derivative eˣ(sin x − cos x)/2 + eˣ(cos x + sin x)/2 = eˣ sin x. Correct. (info: no "+ C" here, while the main "Result" formula has one; add it for consistency.)
- (d): e^{2πik/3}, k = 0, 1, 2: 1, −½ ± (√3/2)i. Correct.
- Quiz 1: answer 0, −1/10 + 7/10 i, explanation correct. (info: it is the lecture's own example, so it tests recall rather than a new case; acceptable.)
- Quiz 2: answer 1 (multiplies moduli, adds arguments); explanation correct (p. 10).
- Quiz 3: answer 2 (five, equally spaced); explanation e^{2πik/5}, k = 0…4, 2π/5 apart. Correct.
- Flashcards: Euler's definition and re^{iθ}; the three properties (exponential law = addition formulas, derivative, value 1 at 0); the complexified integral. All correct.
- Frontmatter summary: every statement matches the page and is correct.
- Calcs file (info): page-own entries (`example-division`, `example-power`, `cube-root`, `root-angle`, `root-point`) carry `source: {cite: reading1, …}`, harmless, as in earlier calcs files. `cube-root` checks sin + cos combined (−0.5 only if both parts are right individually up to a cancelling error); a stricter check would test them separately. Minor.

## Coverage and order
- The page follows the lecture's order: division by the conjugate (p. 1) → polar form and Euler's definition (pp. 1–2) → what an exponential must do: exponential law, e^{at} solves y' = ay, y(0) = 1, series mentioned (pp. 3–4) → exponential law checked (p. 5) → complex-valued functions of a real variable, differentiate componentwise (pp. 6–7) → derivative and initial value (pp. 7–8) → e^{a+ib} (p. 9) → modulus, argument, r e^{iθ} (p. 9) → polar multiplication (p. 10) → complexifying ∫e^{-x} cos x dx (pp. 10–13) → n-th roots of unity, n = 5 (pp. 13–15).
- Left out (minor): the remark that the notes' practice in converting to polar form is skipped (p. 9); the "black box" picture of a complex-valued function (p. 6); the aside that Friday's lecture (Lecture 7) uses this for trigonometric inputs (p. 10, reflected in `leadsTo`); that the lecture ends mid-topic with roots left to the reading (p. 15; see finding 5); the subtlety about e^{i0} (finding 4).
- Added: the original worked example (a)–(d) and the Plot.
- `prerequisites: [autonomous-equations]` (Lecture 5) is the previous lecture and exists.
- `leadsTo` 18.03 Lecture 7: `_course.json` lists "First-order Linear with Constant Coefficients"; the transcript (p. 10) says "on Friday when we talk about trigonometric inputs to differential equations" and (p. 13) that e^{ax} cos bx will be handled by passing to the complex domain. The "why" ("sinusoidal inputs, solved by complexifying") is fair. No page for Lecture 7 exists yet, so the link stays a forward reference.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; prose paraphrases. Short echoes ("Euler took the decisive step", "It is a definition", "complexifying", "passing to the complex domain", "multiply the moduli and add the arguments") are short phrases or standard terminology.
- Worked example is original: own division, a power, the e^x sin x analogue of the lecture's integral (different integrand, imaginary part instead of real part) and cube roots instead of fifth roots.
- No OpenStax or LibreTexts material.

## Notes
- No `Callout kind="cosmology"`: none of the 18.03 pages so far has one, and the page makes no cosmology claim, so there is nothing to check. A later link (complex exponentials as Fourier modes of density perturbations) could be added when such a page exists; not required.
- The page never names the lecturer; attributions such as "Mattuck says it is a definition" would be optional.
- The source title and URLs match the OCW lecture page and `_course.json`.

## Resolution (2026-11-16, by the page author)

1. "in a third of the space" changed to "in far less space".
2. The power series are now described as mentioned in the lecture without being gone into (pp. 4 and 8).
3. $e^{a+ib} = e^a e^{ib}$ is now called a definition (p. 9).
4. Added that $e^{i0} = 1$ comes from $\cos 0 + i\sin 0$ (p. 8).
5. The remaining fifth roots are now marked as following beyond where the lecture stops (p. 15).
6. Worked example (c) now adds the constant $C$. The quiz reusing the lecture's division and the combined cube-root check are left as they are.

Status set to `reviewed`.
