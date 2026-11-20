---
page: content/year-2/18.03/laplace-transform-introduction.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-19-introduction-to-the-laplace-transform/ (read: local copy lec.html; its only .pdf link is 2116b9196632772128de7ad16c322aef_sZ2qulI6GEk.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/2116b9196632772128de7ad16c322aef_sZ2qulI6GEk.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L19", 18 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 20 = "Derivative Formulas"; there is no Lecture 18 in the syllabus; the Lecture 20 transcript was not read)
  - content/year-2/18.03/exponential-input-theorem.mdx (read: the target of the "exponential shift rule" link; it has a section "The exponential shift rule", p(D)(e^{ax}u) = e^{ax}p(D + a)u)
  - calcs/18.03/laplace-transform-introduction.yaml (read; `npm run calc:test -- -k laplace-transform-intro`: 8 passed)
verdict: pass-with-notes
---

# Review: Introduction to the Laplace transform

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The recording starts "Today, and for the next two weeks" (p. 1) and ends "and tomorrow you will" (p. 18). Formula locations: "A power series" p. 1 (sum of a(n)xⁿ, called A(x), computer notation, all on p. 1); "Laplace transform" p. 5 (the e^{-st} integral is assembled at the foot of p. 4, the output named capital F of s and called the Laplace transform on p. 5; "p. 5" is fine, "pp. 4–5" would be slightly more exact); "Linearity" p. 6; "Transform of 1" pp. 8–9 (limit and 1/s on p. 8, the s > 0 condition on p. 9); "Exponential shift formula" p. 11 (with the s > a condition, assuming F good for s > 0, also p. 11); "Transform of an exponential" p. 12; "Transform of a cosine" pp. 13–14 (backward Euler, the two terms and s/(s² + a²) on p. 13, "positive values of s only" on p. 14); "Transform of a sine" p. 14; "An inverse transform" p. 15; "Reduction formula" pp. 17–18; "Transform of a power" p. 18. All correct. Prose citations also checked: two weeks, engineers, mystery p. 1; examples 1/(1 − x) for |x| < 1 and e^x for all x p. 2; discrete in, continuous out p. 2; continuous variable and integral p. 3; base e p. 3; 0 < x < 1 and ln x = −s pp. 3–4; transform vs operator, time and frequency p. 5; notation and squiggly arrow p. 6; improper integral pp. 7–8; s = −3 and "meaningless", picture of one branch p. 9; table functions pp. 9–10; combining exponentials pp. 10–11; disguised exponential shift law p. 12; complex a p. 12; real by i → −i p. 13; hardest step, tables, partial fractions from 18.01 p. 14; cover-up p. 15; integration by parts pp. 15–16; lower limit vanishes for n ≥ 1 and s > 0 needed p. 16; L'Hôpital n times p. 17. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | From power series to an integral: "the integral can only converge for $0 < x < 1$, where $\ln x < 0$" | p. 4: the integral "only has a chance of converging" if x < 1; otherwise it is "very unlikely to converge" (with f = 1 as the example where it certainly diverges). x must also be positive so that $x^t$ is real (p. 4). | States as a fact that it "can only converge" for $0 < x < 1$. That is false in general: for a rapidly decaying $f$ (e.g. $e^{-t^2}$) the integral converges for every $x > 0$, i.e. for negative $s$ too. The lecture's hedge is lost. The reason for $x > 0$ (negative bases give non-real powers, p. 4) is also not given. | "it has a chance to converge for the usual functions only when $0 < x < 1$ ($x$ must be positive so that $x^t$ is real, and less than 1 so that its powers shrink)". |
| 2 | info | Inverse transforms: the example $\frac{1}{s(s + 3)}$ (p. 15) | p. 15: the transcript never states the function ("So, here's the answer"); it gives the cover-up steps, the coefficients 1/3 (inferred from "one third times one") and −1/3, and the result $\frac13 - \frac13 e^{-3t}$. | Names the function $\frac{1}{s(s + 3)}$. This is a reconstruction from the board, but it is the only function with denominator $s(s + 3)$ and numerator of degree ≤ 1 that gives coefficients 1/3 and −1/3. Correct. | None needed; optionally "(the transcript does not read the function out; it is the one whose coefficients the lecture computes)". |
| 3 | info | The exponential shift formula: "It holds for complex $a$ too: $\mathcal{L}(e^{(a + bi)t}) = \frac{1}{s - (a + bi)}$ (p. 12)" | p. 12: "one over s minus a plus b i ... for s bigger than a". | Correctly parenthesised $s - (a + bi)$ (the spoken "s minus a plus b i" is ambiguous); the condition $s > a$ (real part) is left out. | Optional: add "for $s > a$". |
| 4 | info | Intro: "It ends the run of Fourier series lectures" | Not in the transcript. The syllabus has no Lecture 18 (17 → 19), so the statement is consistent with the course structure. | Unsourced connecting sentence; the pronoun "It" reads as if this page ends the Fourier lectures, whereas it begins the Laplace ones. | "It follows the Fourier series lectures, which ended with [Lecture 17]." |
| 5 | info | Notation (p. 6) | p. 6: the book mostly uses $\mathcal{L}(f(t)) = F(s)$; Mattuck prefers the squiggly arrow, and remarks that some laws can only be written in one of the two notations (linearity needs the $\mathcal{L}$ form). | Gives both notations; the remark about which laws need which notation is left out. | None needed. |

Lecturer slips and transcript garbles checked:
- p. 8: "e to the minus 2R, or minus 5R goes to zero", giving 1/s for all s; corrected by Mattuck himself on p. 9 (s must be positive). The page gives only the corrected statement. Correct.
- p. 12: "one over s minus a plus b i" (should be $s - (a + bi)$): finding 3, page is right.
- p. 13: "I on the bottom" (for "and on the bottom"): garble, not repeated.
- p. 16–17: Mattuck drops the $-s$ in the boundary term and restores it ("oh, I lost a minus s here"); the page does not reproduce the boundary term, so nothing to repeat.
- p. 18: "Laplace transform of n minus t to the n minus one" (for "of $t^{n-1}$"): garble; the page's reduction formula $\frac{n}{s}\mathcal{L}(t^{n-1})$ is correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k laplace-transform-intro`: 8 passed. Expected values rechecked by hand: $\frac12$ (L(1) at s = 2); $\frac{2}{13} = 0.153846$ (cos 3t, s = 2); $\frac{3}{13} = 0.230769$ (sin 3t, s = 2); $\frac{6}{16} = 0.375$ (t³, s = 2); $\frac{1}{2\cdot5} = 0.1$ (inverse example, s = 2); example (a) at s = 4: $\frac{2}{4 + 9} = \frac{2}{13}$; (b) at s = 2: $\frac{6}{16} - \frac{4}{4} = -0.625$; (c) at s = 4: $\frac{5}{4\cdot2} = 0.625$. All correct.
- Transform of 1: $\int_0^R e^{-st}dt = \frac{e^{-sR} - 1}{-s} \to \frac1s$ for s > 0. Correct.
- Shift: $\int_0^\infty f(t)e^{-(s - a)t}dt = F(s - a)$, valid for $s - a > 0$. Correct.
- Cosine: $\frac12\left(\frac{1}{s - ia} + \frac{1}{s + ia}\right) = \frac12\cdot\frac{2s}{s^2 + a^2}$. Correct. Sine (example d): $\frac{1}{2i}\cdot\frac{2ia}{s^2 + a^2} = \frac{a}{s^2 + a^2}$. Correct.
- Partial fractions $\frac{1}{s(s + 3)} = \frac{1/3}{s} - \frac{1/3}{s + 3}$: recombined numerator $\frac13(s + 3) - \frac13 s = 1$. Correct; inverse $\frac13 - \frac13 e^{-3t}$. Correct.
- Reduction formula and $\mathcal{L}(t^n) = \frac{n!}{s^{n+1}}$: correct.
- Example (a): $\frac{s - 2}{(s - 2)^2 + 9}$, $s > 2$. Correct. (b): $\frac{6}{s^4} - \frac{4}{s^2}$. Correct. (c): $A = \frac{0 + 1}{0 - 2} = -\frac12$, $B = \frac{2 + 1}{2} = \frac32$; check $-\frac12(s - 2) + \frac32 s = s + 1$. Correct; $-\frac12 + \frac32 e^{2t}$. Correct. (d): correct.
- Plot: $1/s$ for s > 0 and $1/(s - 1)$ for s > 1 on $[0, 5] \times [0, 4]$; both curves leave the top of the range near their asymptotes (s < 0.25 and s < 1.25), which is expected and clipped. Caption ("computed from 1/s (s > 0) and 1/(s − 1) (s > 1)") correct. The lecture's picture (p. 9) shows only $\mathcal{L}(1)$; the $e^t$ curve is the page's own addition. Label placement not checked in a browser (`content:check` does that).
- Quiz 1: $\mathcal{L}(e^{-2t}) = \frac{1}{s + 2}$, $s > -2$: answer 0 correct; explanation correct.
- Quiz 2: $\frac{3!}{s^4} = \frac{6}{s^4}$: answer 0 correct.
- Quiz 3: answer 0 (meaningless for s < 0) correct; matches p. 9.
- Flashcards: all three correct ($s > 0$ for cos, sin, tⁿ with real a).
- Frontmatter summary: every statement matches the page and is correct.

## Coverage and order
- The page follows the lecture's order: origin in power series (pp. 1–2) → continuous analogue and change of variable (pp. 3–5) → transform vs operator (p. 5) → notation and linearity (p. 6) → L(1) carefully (pp. 7–9) → functions worth transforming (pp. 9–10) → exponential shift formula and L(e^{at}) (pp. 10–12) → complex a, cosine and sine (pp. 12–14) → inverse transforms and partial fractions (pp. 14–15) → tⁿ by parts and reduction (pp. 15–18). Same order as MIT.
- Left out (minor): L(0) = 0 (p. 7); the word "kernel" for $e^{-st}$ (p. 10); why x must be positive (p. 4, see finding 1); the remark that F(s)-notation cannot express some laws (p. 6, finding 5); the table also containing products such as $te^t$ and $e^t\sin t$ (p. 9); the alternative of getting cos and sin from real and imaginary parts of $\frac{1}{s - ia}$ (pp. 12, 14); the "careful vs sloppy" calculation remark (p. 7); the hint that the L'Hôpital step can be done in one (p. 17).
- Added: the graph (with the $e^t$ curve) and the worked example (original numbers: $e^{2t}\cos 3t$, $t^3 - 4t$, $\frac{s + 1}{s(s - 2)}$; the sine derivation in (d) is the one the lecture left to recitation).
- `prerequisites: [fourier-series-particular-solutions]`: the page exists in the working tree but is not yet committed, as expected per the brief.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("dispel its mystery", "the exponential wins the race", "the question is meaningless", "disguised form") are brief, cited and standard.
- Worked example is original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 20 ("The Laplace transform of a derivative, which turns differential equations into algebra."): consistent with the Lecture 20 title "Derivative Formulas", and the Lecture 19 transcript says the course will use the transform to solve differential equations (p. 14). The specific content of Lecture 20 was not verified (its transcript was not read): likely correct, but uncertain.
- The link `/courses/18-03/exponential-input-theorem` points to an existing page whose "exponential shift rule" section is the operator rule the lecture refers to (p. 12). Correct.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- `content:check` was not run as part of this review.

## Resolution (2026-11-16, by the page author)

1. Warning: the convergence remark now follows the lecture's hedge. The integral "only has a chance of converging" for 0 < x < 1 for a function such as 1, and x must be positive because a negative base gives non-real powers.
2. Info: the complex-exponent transform now states s > a; the opening now says the page follows the Fourier series lectures.

Status set to `reviewed`.
