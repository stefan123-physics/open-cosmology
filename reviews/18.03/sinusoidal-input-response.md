---
page: content/year-2/18.03/sinusoidal-input-response.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-7-first-order-linear-with-constant-coefficients/ (read: local copy lec.html, title "Lecture 7: First-order Linear with Constant Coefficients"; its only .pdf link is 5381398612947b21f1010f66993b7769_SioXozu-Loo.pdf, matching the page's `reading1` URL; title matches `_course.json`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/5381398612947b21f1010f66993b7769_SioXozu-Loo.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L7", 13 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N` and checked)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-8-continuation/ (read, description only: "Continuation, with applications to temperature, mixing, RC-circuit, decay, and growth models"; transcript not read)
  - content/year-2/18.03/_course.json (read: Lecture 7 = First-order Linear with Constant Coefficients, Lecture 8 = Continuation, Lecture 9 = Solving Second-order Linear ODE's with Constant Coefficients)
  - calcs/18.03/sinusoidal-input-response.yaml (read; `npm run calc:test -- -k sinusoidal`: 13 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Constant coefficients: steady state, superposition and sinusoidal input

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The transcript starts mid-sentence ("This is also written in the form, it's the k that's on the right hand side") and ends on p. 13 right after the effect of k ("The other one, you will figure out yourself."); the Cartesian method announced on p. 8 is never reached. Formula locations: "Standard form" p. 1 (implied; spoken explicitly on p. 4, see finding 3); "Solution with constant k" p. 1; "Superposition principle" p. 4; "Complexified equation" p. 6; "Integrating the complex equation" p. 7; "Complex solution" p. 8; "Polar form of a reciprocal" p. 9; "Polar form of the coefficient" pp. 10–11 (A on p. 10, φ = arctan(ω/k) on p. 11); "Response to cos ωt" p. 12 (stated in full at the foot of p. 12; built up on pp. 10–11). All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Effect of the conductivity", "The lecture leaves the effect of ω as an exercise (p. 13)" | p. 13, after the effect of k: "But how about the other one? Okay, I give you two minutes. The other one, you will figure out yourself." What "the other one" refers to is not said: it could be the effect of ω (the other half of the problem-set question, p. 12), or the second method, going Cartesian (announced p. 8, "I hope I can do both of them"). | States as fact that the lecture leaves the effect of ω as an exercise. | Uncertain reading. Soften, e.g. "The recording ends here ('the other one, you will figure out yourself', p. 13). (A natural exercise, answered by the page: …)". The page's answer itself is correct. |
| 2 | info | "$A$ is the **amplitude** and $\phi$ the **phase lag** … (p. 11)" | Phase lag named p. 11; "This is the amplitude, A" is at the foot of p. 12. | Cites p. 11 for both. | Cite pp. 11–12. |
| 3 | info | Formula "Standard form for these models", `at="p. 1"` | p. 1 starts mid-sentence and only describes the form ("the k that's on the right hand side … separate out the (q)e"); the equation is spoken in full on p. 4 ("y prime plus ky equals k times (q)e of t"). | Cites p. 1 only. | Optionally `at="pp. 1, 4"`. |
| 4 | info | Opening, "(The recording starts a few minutes into the lecture.)" | The transcript starts mid-sentence; how much is missing cannot be checked from the transcript. | "a few minutes". | Optionally "The recording starts partway into the lecture." |
| 5 | info | "Input and response", the $\frac1k y' + y = q_e$ form | p. 3: Mattuck mentions this literature form but says "I'm not going to use it … how many standard forms could this poor little course absorb? I'll stick to that one." | Presents it as another common way of writing the equation. | Optionally add that the lecture keeps the $y' + ky = kq_e$ form. |
| 6 | info | "Its real part $y_1$ solves the original real equation, by separating real and imaginary parts (p. 7)" | p. 7: the argument is not given in the lecture; "read in the notes the argument … It just amounts to separating real and imaginary parts." | Correct summary. | Optionally say the lecture refers to the notes for this one-line check. |

Page-own material is correctly marked: the Cartesian result ("announced in the lecture but not reached in the recording, so this is the page's own working") and the ω answer ("(Answer: …)").

No lecturer slip is repeated. Checked:
- p. 4 "if the equation … had here a y squared instead of t" (should be "instead of y"); the page writes "with $y^2$ in place of $y$". Correct.
- p. 4 superposition is garbled ("the steady-state response y1 plus y2, and a constant times y1", with q₁ written as "q of t"); the page states it cleanly with q₁, q₂, c q₁ → c y₁. Correct.
- p. 7 "k plus omega t", "i omega t plus k" (corrected by students to (k + iω)t); the page has $e^{(k + i\omega)t}$. Correct.
- p. 10 "the absolute value of this complex number is one plus omega over k squared" (drops the square root, restored in the next sentence for A); the page has $|1 + i\omega/k| = \sqrt{1 + (\omega/k)^2}$ implicitly through A. Correct.
- p. 11 "the arc tangent of omega, k, divided by k, over one"; the page has $\arctan(\omega/k)$. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k sinusoidal`: 13 passed. Recomputed by hand:
- Solution formula: $(ye^{kt})' = qe^{kt}$, so $y = e^{-kt}\int q e^{kt}dt + Ce^{-kt}$. For $q = 1$: $e^{-kt}e^{kt}/k = 1/k$, constant, as the "opposite signs" remark says. Correct.
- Complex solution: $(\tilde y e^{kt})' = ke^{(k+i\omega)t}$, integral $\frac{k}{k+i\omega}e^{(k+i\omega)t}$; times $e^{-kt}$ and dividing by k gives $e^{i\omega t}/(1 + i\omega/k)$. Correct.
- Polar form: $|1 + i\omega/k| = \sqrt{1+(\omega/k)^2}$, arg $= \arctan(\omega/k) = \phi$ (in $[0, \pi/2)$ for $\omega/k \ge 0$, so arctan is the right branch); reciprocal has modulus A and argument $-\phi$. Real part of $Ae^{i(\omega t - \phi)}$ is $A\cos(\omega t - \phi)$. Direct check: $y' + ky = A[-\omega\sin(\omega t-\phi) + k\cos(\omega t-\phi)] = Ak\sqrt{1+(\omega/k)^2}\cos(\omega t - \phi + \phi) = k\cos\omega t$. Correct.
- Cartesian form: $\frac{1 - i\omega/k}{1 + (\omega/k)^2}(\cos\omega t + i\sin\omega t)$ has real part $\frac{\cos\omega t + (\omega/k)\sin\omega t}{1+(\omega/k)^2}$; equal to $A\cos(\omega t - \phi)$ since $\cos\phi = A$, $\sin\phi = (\omega/k)A$. Correct.
- $\phi = \pi/2$: $\cos(\omega t - \pi/2) = \sin\omega t$, a quarter cycle. Correct.
- Effect of k (ω fixed): ω/k falls, A rises to 1, φ falls to 0. Correct. Effect of ω (page's answer): ω/k rises, A falls to 0, φ rises towards π/2. Correct.
- Plot: ω = k, A = 1/√2 = 0.7071, φ = π/4 = 0.7854; y(0) = 0.7071 cos(−π/4) − 0.5 = 0.5 − 0.5 = 0, so C = −0.5 is right; $-0.5e^{-t}$ solves the homogeneous equation, so the curve is the solution of $y' + y = \cos t$ with y(0) = 0 (t in units of 1/k). Caption consistent. Generated from formulas.
- Worked example (a): constant 20 gives y = 20 (0 + 0.25·20 = 0.25·20). ω/k = 0.25/0.25 = 1, A = 0.7071, 8A = 5.657 → 5.66 °C; φ = π/4. Correct.
- (b): peak lag φ/ω = 0.7854/0.25 = 3.1416 → π ≈ 3.14 min. Correct.
- (c): k = 1 is four times 0.25; ω/k = 0.25; 1 + 0.0625 = 1.0625; A = 0.97014 → 0.970; 8A = 7.761 → ±7.76 °C; φ = arctan 0.25 = 0.24498 rad → 0.245 rad = 14.04° → 14.0°; lag 0.24498/0.25 = 0.980 min → 0.98. Correct.
- Quiz 1: answer 0 ($Ce^{-kt}$ difference → 0); explanation correct.
- Quiz 2: answer 0 ($A\cos(\omega t - \phi)$, $A = 1/\sqrt{1+(\omega/k)^2}$, $\phi = \arctan(\omega/k)$); distractors all wrong (choice 2 has the inverse amplitude and a phase lead). Explanation correct.
- Quiz 3: answer 0 (larger amplitude, smaller lag); explanation correct.
- Flashcards: solution formula with transient; superposition with $cq_1 \to cy_1$; response to cos ωt. All correct.
- Frontmatter summary: every statement matches the page and is correct.
- Calcs file (warning): seven value entries set absolute tolerances far wider than the printed digits (`tolerance: 0.5` on 0.71 and 0.98, `0.1` on 0.707, 5.66, 3.14, 0.970, 7.76, 0.245, 14.0), so a wrong last digit on the page would still pass. Every value passes the default half-last-digit tolerance (largest gap: 14.036 vs 14.0, within ±0.05), so the `tolerance` lines can simply be removed. Also (info): page-own entries carry `source: {cite: reading1, at: 'p. 12'}`, harmless, as in earlier calcs files.

## Coverage and order
- The page follows the lecture's order: standard form and which models suit it (p. 1) → solution formula and opposite-sign mnemonic (p. 1) → transient and steady state, k > 0 essential (p. 1) → all solutions approach each other, no crossing, many steady-state solutions, choose the simplest (p. 2) → input and response, temperature picture (pp. 2–3) → physical input $q_e$ and the $\frac1k y' + y$ form (p. 3) → k < 0 makes the terms meaningless (p. 4; placed by the page in the first section, a harmless move) → superposition and linearity (p. 4) → trigonometric input, Fourier series (p. 4) → angular frequency (p. 5) → complexify (pp. 6–7) → integrating factor (pp. 7–8) → scaling to ω/k (p. 8) → polar vs Cartesian (p. 8) → reciprocal in polar form (p. 9) → triangle and A, φ (pp. 9–11) → phase lag picture (pp. 11–12) → effect of k (pp. 12–13). The Cartesian paragraph comes after the k discussion although it is announced on p. 8; it is clearly marked as the page's own working.
- Left out (minor): the "visual" (the Mathlet the class used for homework, p. 4–5, 12); the notes' reference list of trigonometric terms (p. 5); that the effect of k was a problem-set question (p. 12); Mattuck's not using the 1/k form (finding 5).
- Added: the Cartesian result and the ω answer (both marked), the Plot, the original worked example.
- `prerequisites: [complex-exponentials, linear-first-order-equations]` both exist.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; prose paraphrases. Short echoes ("complexify", "goes polar", "phase lag (or phase delay)", "physical input", "steady-state (or long-term) solution") are terminology or short phrases. The lecturer's images (rock star and groupies, Dalí cosine) are not reused.
- Worked example is original (water bath 20 + 8 cos 0.25t, k = 0.25 then 1, time lags in minutes); the lecture has no numerical example.
- No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 9 ("Second-order linear equations with constant coefficients, where complex exponentials do the same work"): fair in general, but complex exponentials as solutions mainly arrive with complex characteristic roots in Lecture 10, and the direct continuation of this lecture is Lecture 8 ("Continuation, with applications to temperature, mixing, RC-circuit, decay, and growth models"; the transcript itself says mixing comes "on Monday", pp. 1, 3). Consider adding a `leadsTo` for Lecture 8 and/or Lecture 10. Not an error. Lecture 9's transcript was not read, so its exact content is not verified here.
- No `Callout kind="cosmology"`: no 18.03 page has one so far and the page makes no cosmology claim, so nothing to check.
- The page never names the lecturer (Mattuck); optional.
- The source title and URLs match the OCW lecture page and `_course.json`.

## Resolution (2026-11-16, by the page author)

1. The sentence about the exercise now quotes the lecture ("the other one") without saying which question it means; the effect of ω is labelled as worked out on this page.
2. The loose tolerances were removed from the calcs file; all values pass at the default half-last-digit tolerance.
3. Amplitude and phase lag now cite pp. 11–12; the standard form cites pp. 1, 4; "a few minutes into" became "partway into"; the Cartesian paragraph now says the method opens the next lecture.
4. `leadsTo` now points to Lecture 8, the direct continuation.

The remaining info notes (the unused (1/k)y′ + y form, the real-part argument left to the notes) are left as they are. Status set to `reviewed`.
