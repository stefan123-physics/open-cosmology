---
page: content/year-2/18.03/exponential-input-theorem.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-13-finding-particular-sto-inhomogeneous-odes/ (read: local copy lec.html, title "Lecture 13: Finding Particular Solutions to Inhomogeneous ODEs"; its only .pdf link is 2fe63eb0acf0e9621f6aa00a20839a7d_9KbpbBMThTE.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/2fe63eb0acf0e9621f6aa00a20839a7d_9KbpbBMThTE.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L13", 17 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N` and checked)
  - content/year-2/18.03/_course.json (read: Lecture 14 = "Interpretation of the Exceptional Case: Resonance"; the Lecture 14 transcript was not read)
  - calcs/18.03/exponential-input-theorem.yaml (read; `npm run calc:test -- -k exponential-input`: 10 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Particular solutions: the exponential input theorem

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The recording starts "The task for today is to find particular solutions" (p. 1) and ends with the simple-root example and "I'm letting you out one minute early" (p. 17). Formula locations: "One complex exponential" p. 2 ("(a plus i omega) x … simply as e to the alpha x"); "Polynomial operator form" p. 2; "Substitution rule" p. 3; "Exponential input theorem" p. 4 ("The solution is e to the alpha x divided by p of alpha"); "A decaying oscillation as input" p. 6; "Complex particular solution" pp. 7–8 (first form p. 7, $3 - 3i$ and the factor $(1 + i)/2$ on p. 8); "The real particular solution" pp. 8–9 ($\frac53 e^{-x}(\cos x + \sin x)$ p. 8, $\sqrt2\cos(x - \pi/4)$ p. 9); "Exponential shift rule" pp. 9–10 (introduced p. 9, stated p. 10); "Exponential input theorem, resonant cases" pp. 13–14 (simple root p. 13, double root p. 14); "The simple-root proof" pp. 15–16; "Simple-root example" p. 17. All correct. Prose citations also checked: two-week task, important inputs, $a$ usually negative, alternating current, vibrating spring p. 1; decaying oscillations, all special cases of $e^{\alpha x}$ p. 2; higher-degree polynomials pp. 2–3; substitution-rule proof pp. 3–4; proof of the theorem and Haynes Miller p. 5; catastrophes and good things pp. 5–6; complexifying pp. 6–7; "something human" p. 8; renaming $\alpha$ as $a$ p. 9; "pass to the left … where it's not in any position to do any harm" p. 10; product rule p. 11; bootstrap and induction pp. 11–12; linearity p. 11; triple root and factorial p. 14; factorisation and $p'(a) = a - b$ pp. 14–15; exponential on the left p. 15; $Dx = 1$, $D1 = 0$, double root as exercise p. 16. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Theorem section: "it is the case of resonance, behind all sorts of catastrophes and many good things too (pp. 5–6)" | pp. 5–6: "an extremely important case, one that makes the world go 'round, one that contributes to all sorts of catastrophes … It also makes a lot of good things happen." The word "resonance" does not occur anywhere in the Lecture 13 transcript (searched). | Attributes the name "resonance" to pp. 5–6. | Mark the name as coming from the next lecture, e.g. "(the next lecture calls it resonance)". The physics is right and matches the Lecture 14 title. |
| 2 | warning | After the resonant-cases formula: "for higher degree the pattern continues with higher powers of $x$ and a factorial (p. 14)" | p. 14: "if you've got a triple root, you will need here x cubed, except you're going to need a factorial there, too." | Repeats the factorial remark. With the denominator written as $p^{(k)}(a)$, as on the page, no extra factorial is needed: for a root of multiplicity $k$, $y_p = x^ke^{ax}/p^{(k)}(a)$ (if $p(D) = (D - a)^k q(D)$, then $p^{(k)}(a) = k!\,q(a)$, so the $k!$ is already inside $p^{(k)}(a)$; it shows only when one writes $x^ke^{ax}/(k!\,q(a))$). The page's own double-root formula $x^2e^{ax}/p''(a)$ has no $2!$, so the remark reads as inconsistent. Whether Mattuck meant the $q(a)$ form is uncertain. | Give the general formula $x^ke^{ax}/p^{(k)}(a)$, or say "(written with $q(a)$, a $k!$ appears)". |
| 3 | info | Opening: "this lecture and the next do it for the most important inputs (transcript, p. 1)" | p. 1: "that's what we're going to talk about today, or rather, talk about for two weeks"; p. 9: the case $p(\alpha) = 0$ will occupy "a lot of the rest of today, and in a certain sense, all of next time". | "this lecture and the next". | Optional: "this lecture and the next two weeks". |
| 4 | info | "Haynes Miller … calls it the most important theorem in it (p. 5)" | p. 5 adds: "I don't have to totally agree with him … It's probably the most important theorem for these two weeks, anyway." | Omits Mattuck's hedge. | Optional: add it. |
| 5 | info | Simple-root proof: "(The transcript says $b \ne A$ at this point; it means the root $a$.)" | p. 15: "the point is that b is not equal to A". | Same. The capital may be the transcriber's rather than a spoken slip (the two are indistinguishable in speech); the page's wording "the transcript says" is accurate either way. | None needed. |
| 6 | info | Example: "(The transcript reads the middle term as 'plus minus $y'$'.)" | p. 6: "y double prime plus minus y prime plus 2y"; the same page gives the characteristic polynomial "D squared minus D plus two" and p. 7 substitutes "minus minus one plus i". | Reads the equation as $y'' - y' + 2y$. | Correct reading, supported by pp. 6–7. Optional: cite that support. |

Lecturer slips checked:
- p. 6 "plus minus y prime": handled correctly (finding 6).
- p. 15 "b is not equal to A": handled correctly (finding 5).
- p. 5 "p of D applied to y is equal to alpha x" (for $e^{\alpha x}$) and p. 7 "e to the minus (one plus i) x" (for $e^{(-1 + i)x}$) are slips or transcription garbles; the page writes the correct forms.
- p. 9 "cosine of x minus pi over the angle. This is a phi" garbled; the page gives $\cos(x - \pi/4)$. Correct.
- p. 11 "If you make e to the x pass over D", p. 12 "e to the e to the x": garbles for $e^{ax}$; not repeated.
- p. 13–14 $\alpha$ changed to $a$ on the board mid-formula; the page uses $a$ consistently from the shift rule on, $\alpha$ before. Correct.
- p. 14 factorial remark: see finding 2.

## Arithmetic and answer checks
- `npm run calc:test -- -k exponential-input`: 10 passed. Recomputed by hand:
- Lecture example: $\alpha = -1 + i$, $\alpha^2 = -2i$, $\alpha^2 - \alpha + 2 = -2i + 1 - i + 2 = 3 - 3i$. Correct. $\frac{10}{3 - 3i} = \frac{10}{3}\cdot\frac{1 + i}{2} = \frac53(1 + i)$. Correct. $\mathrm{Im}\left[(1 + i)(\cos x + i\sin x)\right] = \cos x + \sin x$. Correct. Direct check: with $g = e^{-x}(\cos x + \sin x)$, $g' = -2e^{-x}\sin x$, $g'' = 2e^{-x}(\sin x - \cos x)$, $g'' - g' + 2g = 6e^{-x}\sin x$; times $\frac53$ gives $10e^{-x}\sin x$. Correct.
- $\cos x + \sin x = \sqrt2\cos(x - \pi/4)$, amplitude $\frac{5\sqrt2}{3}$. Correct.
- Graph: input maximum at $x = \pi/4$, $10e^{-\pi/4}/\sqrt2 = 3.22$; minimum at $x = 5\pi/4$, $-0.139$; $y_p$ maximum $\frac53 = 1.67$ at $x = 0$, minimum $-\frac53e^{-\pi} = -0.072$ at $x = \pi$. All inside the range $[-0.5, 3.5]$. The caption ("smaller, shifted") is correct.
- Shift rule: $D(e^{ax}u) = e^{ax}(D + a)u$; $D^2(e^{ax}u) = e^{ax}(D + a)^2u$. Correct.
- Simple-root proof: $p(D + a) = D(D + a - b)$; applied to $x$ gives $a - b$; $p'(a) = a - b$. Correct. Double-root formula: $p = (D - a)^2$, $p(D + a)x^2 = D^2x^2 = 2 = p''(a)$. Correct.
- Lecture simple-root example: $p(1) = 0$, $p'(1) = 2 - 3 = -1$, $y_p = -xe^x$; substitution gives $(-2 - x)e^x + 3(1 + x)e^x - 2xe^x = e^x$. Correct.
- Worked example (a): $p(-1) = 5$, $y_p = e^{-x}/5$. Correct. (b): $p(2i) = -2 + 4i$, $1/(-2 + 4i) = (-2 - 4i)/20$, real part $(-\cos 2x + 2\sin 2x)/10$; substitution gives $\cos 2x$; amplitude $\sqrt5/10 = 0.2236 \approx 0.224$. Correct. (c): $p'(2) = 4$, $y_p = xe^{2x}/4$. Correct. (d): $p''(3) = 2$, $y_p = x^2e^{3x}/2$. Correct.
- Quiz 1: $p(2) = 12$, answer 0. Correct; distractors wrong. Quiz 2: answer 0; explanation correct. Quiz 3: answer 0 (same equation as the lecture example); explanation correct.
- Flashcards: all three correct (but see finding 2 for the general pattern, which the flashcards do not state).
- Frontmatter summary: every statement matches the page and is correct.
- Calcs file: every non-trivial number has an entry. Not separately covered (info): the imaginary part $-3i$ of $p(-1 + i)$ (covered implicitly by the `lecture-example` identity) and quiz 3 (same equation and answer as `simple-root-example`). The `source.at` values of the page-own entries (`ex-a`, `ex-b`, `quiz-1` at p. 4, `ex-b-amplitude` at p. 9, `ex-c` p. 13, `ex-d` p. 14) point to the method in the lecture; acceptable.

## Coverage and order
- The page follows the lecture's order: task and important inputs (pp. 1–2) → one complex exponential (p. 2) → $p(D)$ notation (pp. 2–3) → substitution rule and proof (pp. 3–4) → exponential input theorem and proof (pp. 4–5) → $p(\alpha) = 0$ set aside (pp. 5–6) → example $y'' - y' + 2y = 10e^{-x}\sin x$ (pp. 6–9) → renaming $\alpha$ as $a$, exponential shift rule (pp. 9–10) → proof for $D$, bootstrap to $D^2$, induction (pp. 10–12) → resonant cases (pp. 13–14) → simple-root proof (pp. 14–16) → example $y'' - 3y' + 2y = e^x$ (pp. 16–17).
- Left out (minor): the general solution of the example begun and abandoned because the characteristic quadratic is messy (p. 6); the colour code for equations, formulas and theorems (pp. 4–5); "too simple to be a theorem … too important not to be" (p. 4); the problem-set remarks (pp. 3, 6, 16); Mattuck's advice to test a formula on special cases before computing (p. 10).
- Added: the graph and the four-part worked example (both original).
- `prerequisites: [inhomogeneous-equations-and-stability]`: the page exists. The link to `sinusoids-and-linear-models` exists and that page covers the identity $a\cos\theta + b\sin\theta = c\cos(\theta - \varphi)$.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("most important theorem", "human", "where it can do no harm", "bootstrap", "catastrophes … good things") are brief and cited.
- The two lecture examples are Mattuck's and are cited as such; the worked example and graph are original (own equations). No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 14 ("Interpreting the exceptional case p(a) = 0: resonance."): consistent with the Lecture 14 title "Interpretation of the Exceptional Case: Resonance" and with p. 9 ("in a certain sense, all of next time"). That Lecture 14 identifies $p(a) = 0$ with resonance in exactly this sense was not verified (its transcript was not read): uncertain until that page is written, though it is standard.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- As in the Lecture 12 page, the lecturer (Mattuck) is named only in the reading title. Optional.

## Resolution (2026-11-16, by the page author)

1. Warning 1: the page no longer says the lecture calls p(α) = 0 resonance; it now says the next lecture does.
2. Warning 2: the higher-root remark now describes the general pattern (x raised to the multiplicity, the matching derivative of p in the denominator) and explains when the lecture's factorial appears.
3. "This lecture and the next" became "the next two weeks", as on p. 1.

The other info notes need no change. Status set to `reviewed`.
