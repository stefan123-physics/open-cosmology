---
page: content/year-1/18.01/lhopital-rule.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-35-indeterminate-forms/ (read: local copy lec.html, title "Lecture 35: Indeterminate Forms"; links the transcript PNTnmH6jsRI.pdf; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/PNTnmH6jsRI.pdf (read: local copy transcript.pdf, page-split text tp.txt, 11 PDF pages, "ocw-18-01-f07-lec35")
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec34/ (read: local copy n.html, title "Lecture 34: Indeterminate Forms- L'Hôspital's Rule", links lec34.pdf; notes.pdf = OCW cover + printed pp. 1-4 = PDF pp. 2-5, checked page by page with pdftotext -f N -l N)
  - content/year-1/18.01/_course.json (read: Lecture 35 "Indeterminate Forms", 36 "Improper Integrals")
  - content/year-4/8.286/age-with-vacuum-energy.mdx (read, for the cosmology callout and the 8.286 Lecture 19 leadsTo; the 8.286 Lecture 19 transcript itself was not re-read)
  - calcs/18.01/lhopital-rule.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k lhopital`: 9 passed)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: pass-with-notes
---

# Review: Indeterminate forms and L'Hôpital's rule

Citation convention checked: transcript pages are PDF pages (tp.txt "=== PAGE n"), notes pages are printed footers (printed page = PDF page - 1; printed p. 1 = PDF p. 2 through printed p. 4 = PDF p. 5). Every page citation was checked against tp.txt and the notes PDF.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "L'Hôpital's rule, easy version" (cite reading2, pp. 2-3), and "The better version drops the condition on $g'(a)$" | The notes (p. 1) call $\lim f/g = f'(a)/g'(a)$ "the easy version". The transcript uses the name the other way round: on p. 3 the lecturer calls the rule with $\lim f'(x)/g'(x)$ "what I would call the easy version or, if you like, Version 1", and says it is "much, much better" than the $f'(a)/g'(a)$ argument. | The label "easy version" on the $f'(a)/g'(a)$ formula, which is cited to the transcript. | Cite the label to the notes (add `notes, p. 1` to the formula, or cite reading1 p. 1, where the formula and the name both appear), or rename the first formula "the difference-quotient argument" and mention that the lecture calls the second form "Version 1". |
| 2 | info | "Look before you L'Hôp", crutch example $\frac{x^5 + 2x^4 + 1}{x^4 + 2}$ (p. 11) | The transcript does not say the expression (it was on the board). It does say what the lecturer did with it: dividing by $x^5$ gives $1 + 2/x + 1/x^5$ on top and $1/x + 2/x^5$ below, the main terms are $x^5/x^4 = x$, and "five times, or four times" of L'Hôpital would also work. | The expression is given as the lecture's own. | The reconstruction is correct: multiplying those two expressions by $x^5$ gives exactly $x^5 + 2x^4 + 1$ and $x^4 + 2$, and the leading-term ratio $x^5/x^4 = x$ matches. Four differentiations are indeed needed (denominator becomes 24, numerator $120x + 48$). Optionally say "(reconstructed from the division by $x^5$ in the transcript)". |
| 3 | info | "The rule" section | Transcript p. 5 (student questions): $f'(a)$ need not exist, and $f$, $g$ need not be defined at $a$ (e.g. $\ln x$ at 0); only the derivatives near $a$ and the limit of their ratio matter. | Not mentioned; the formula states the condition as $f(a) = g(a) = 0$. | Optional: one sentence that "$f(a) = g(a) = 0$" means the limits are 0, and $f$, $g$ need not be defined (or differentiable) at $a$ itself. This also makes the $x\ln x$ and $x \to \infty$ cases read consistently with the stated rule. |
| 4 | info | "The rule", approximations paragraph: "(p. 6; notes, pp. 2-3)" | Notes p. 2 uses linear approximation for $\frac{x^{15}-1}{x^3-1}$ and $\frac{\sin 3x}{x}$, not $\frac{\sin 5x}{\sin 2x}$; notes p. 3 has the quadratic approximation of $\cos x$. | Cites notes pp. 2-3 next to the sine example. | Acceptable (same method); the specific $\sin 5x/\sin 2x$ approximation is transcript p. 6 only. |
| 5 | info | frontmatter `summary`: "every power is slower than eᵖˣ" | Transcript p. 8 and notes p. 4: for $p > 0$ ($a > 0$). | $p$ not stated positive in the summary (the body and flashcard do state it). | "slower than eᵖˣ for p > 0". |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified against tp.txt:
  - "L'Hôpital's rule, easy version", reading2 pp. 2-3: division by $x - a$, subtracting $f(a) = g(a) = 0$ (p. 2), $f'(a)/g'(a)$, "provided that $g'(a)$ is not 0" (p. 3). Correct pages (see finding 1 for the name). Notes p. 1 has the same derivation: correct.
  - "L'Hôpital's rule", reading2 pp. 3-4: statement with $f(a) = g(a) = 0$ and "the right-hand limit exists" (p. 3), "It works, if ... this limit exists" and no condition on the denominator (p. 4). Correct.
  - "Applying the rule twice", reading2 p. 4: $\frac{-\sin x}{2x}$, then $\frac{-\cos x}{2} \to -\frac12$, with the "little wiggle" notation $\sim$. Correct. (The transcript's "$- -\cos 0/2$" is a transcription stutter; the page's $-\frac12$ is right.)
  - "Zero times infinity", reading2 p. 7: $\frac{\ln x}{1/x}$, $-\infty/\infty$, $\frac{1/x}{-1/x^2} = -x \to 0$. Correct.
  - "Exponentials beat powers", reading2 p. 8: $\left(e^{px/100}/x\right)^{100}$, one L'Hôpital step to $\left(\frac{p}{100}e^{px/100}/1\right)^{100}$, $(\infty/1)^{100} = \infty$. Correct (L'Hôpital is applied to the inner ratio, as in the lecture).
  - "Logarithms lose to powers", reading2 p. 9: $\frac{1/x}{\frac13x^{-2/3}} = 3x^{-1/3} \to 0$. Correct.
- Prose citations: loose ends / dealing with infinity, L'Hospital spelling and the circumflex, $x\ln x$, $xe^{-x}$, $\ln x/x$ and the calculator remark (p. 1); $\frac{x^{10}-1}{x^2-1}$, $0/0$ (p. 1), difference quotients, $10x^9$, $2x$, limit 5 (p. 2); linear approximations underneath (p. 3); "nothing like the quotient rule" (p. 3); $\frac{\sin 5x}{\sin 2x} \to \frac52$ (p. 4); logic runs backwards (pp. 4-5); approximations $\sin u \approx u$ and $\cos x \approx 1 - x^2/2$ (p. 6; notes p. 3 for the cosine); $a = \pm\infty$, $\infty/\infty$, right side $\pm\infty$ (pp. 6-7), wild oscillation (p. 7); only $0/0$ and $\infty/\infty$ (p. 9); logarithm on top (p. 7), "This 0 was the winner" (p. 7); notes p. 4 on the useless choice $\frac{x}{1/\ln x}$ and on $1^\infty$, $0^0$, $0\cdot\infty$ ("Use algebra, exponentials, and logarithms"); $x^x = e^{x\ln x} \to 1$ (pp. 9-10; notes p. 4); $xe^{-px}$, $\frac{1}{pe^{px}} \to 0$ (p. 8); "what the next lecture needs" = improper integrals (p. 8); $\ln x \ll x^{1/3} \ll x \ll x^{10} \ll e^{ax}$ (notes p. 4); $\frac{\sin x}{x^2}$, $\frac{\cos x}{2x}$ is $1/0$, "look before you L'Hôp" (p. 10; notes p. 3); "don't use it as a crutch" (pp. 10-11). All match.
- Claimed slip on p. 4: confirmed. The transcript reads "This is the limit, as x goes to 1, of the derivatives ... The limit was 1 over there, but now it's 0. a is 0 in this case. This is the number a. Thank you." The "Thank you" indicates a correction from the audience; the page's bracketed note is accurate.
- Quiz 1: index 1 ($\frac52$). Correct; explanation right.
- Quiz 2: index 1 (0). Correct; explanation right.
- Quiz 3: index 1. Correct: $\frac{\cos x}{2x}$ is $1/0$; $\frac{\sin x}{x^2} \approx \frac1x \to \pm\infty$.
- Quiz 4: index 1 ($e^{0.01x}$). Correct.
- Flashcards: all three correct ($\ln x \ll x^p \ll e^{qx}$ for $p, q > 0$; the rewrites $\frac{\ln x}{1/x}$ and $e^{x\ln x}$).
- Worked example (a): $\frac{e^x-1}{2x}$ still $0/0$, then $\frac{e^x}{2} \to \frac12$. Correct.
- Worked example (b): $\frac{2x}{e^x}$, $\frac{2}{e^x} \to 0$. Correct.
- Worked example (c): derivative of $\ln(1+1/x)$ is $\frac{-1/x^2}{1+1/x}$; over $-1/x^2$ gives $\frac{1}{1+1/x} \to 1$; limit $e \approx 2.718$. Correct.
- Worked example (d): $e^{0.1} = 1.1051709$, $(1.1051709 - 1.1)/0.01 = 0.51709 \approx 0.517$. Correct.
- Cosmology callout: $\frac{d}{du}\tanh^{-1}u = \frac{1}{1-u^2} \to 1$, so $\frac{\tanh^{-1}u}{u} \to 1$ (numerically $\tanh^{-1}(10^{-5})/10^{-5} = 1.0000000000333$). Correct.
- calcs/18.01/lhopital-rule.yaml: entries x10-limit, sine-ratio, cos-limit, x-log-x, example-a, example-c, example-d, e-point-one, artanh-limit agree with the page; pytest 9 passed. Every number on the page is covered. Minor (info): the `source` fields of the page-own entries cite transcript pages that do not contain those numbers (example-d and e-point-one cite reading2 p. 6, artanh-limit cites reading2 p. 3); with `origin: page-own` this is harmless, but artanh-limit would be better tied to the 8.286 page.

## Coverage and order
- The page follows the transcript order: motivation (p. 1), $\frac{x^{10}-1}{x^2-1}$ and the difference-quotient argument (pp. 1-3), the rule (pp. 3-4), Examples 2 and 3 (p. 4), the logic (pp. 4-5), comparison with approximations (p. 6), the extended cases (pp. 6-7), $x\ln x$ (p. 7), $xe^{-px}$ and $e^{px}/x^{100}$ (p. 8), $\ln x/x^{1/3}$ (p. 9), only $0/0$ and $\infty/\infty$ (p. 9), $x^x$ (pp. 9-10), $\sin x/x^2$ (p. 10), the crutch example (pp. 10-11). The sentence "It applies only to the forms 0/0 and ∞/∞ (p. 9)" is placed before $x\ln x$ (p. 7); harmless.
- Left out from the transcript: the student question answers on p. 5 (finding 3) and on p. 9 (which hypotheses combine); the remark that $x\ln x$ was on a homework problem (p. 7).
- Left out from the notes (all optional, the page follows the video): Example 0 $\frac{x^3-1}{x^2-1} = \frac32$ (p. 1), Example 1 $\frac{x^{15}-1}{x^3-1} = 5$ with linear approximation (p. 2), Example 2 $\frac{\sin 3x}{x} = 3$ (p. 2), Example 3 $\frac{\sin x - \cos x}{x - \pi/4} = \sqrt2$ (p. 2), the remark that every derivative is a $0/0$ limit (p. 2), Example 4 $\frac{\cos x - 1}{x} \to 0$ (p. 2), and Example 8's ten-fold L'Hôpital on $e^{ax}/x^{10}$ (pp. 3-4; the page uses the lecture's $x^{100}$ and the root trick, which the notes also give).
- Added beyond the sources: the worked example (including the $1^\infty$ form, which the notes only name) and the cosmology callout.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript, the notes or the OCW lecture/notes pages (grep on the extracted text and the saved HTML found none). The page reuses no figure.
- No copied paragraphs: every section is rewritten. Short phrases kept from the lecture ("look before you L'Hôp", "don't use it as a crutch", "the 0 wins", "moving exponent", "wild oscillation") are brief and characteristic; fine.
- Worked example is original: $\frac{e^x-1-x}{x^2}$, $x^2e^{-x}$, $(1+1/x)^x$ and the numerical check appear in neither the transcript nor the notes. (b) is a close relative of the lecture's $xe^{-px}$ but with its own numbers and a second step; (c) is a standard textbook limit. Fine.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: consistent with content/year-4/8.286/age-with-vacuum-energy.mdx (Lecture 19), whose formula "Age of a flat universe with matter and vacuum energy" gives $t_0 = \frac{2}{3H_0}\frac{\tanh^{-1}\sqrt{1-\Omega_{m,0}}}{\sqrt{1-\Omega_{m,0}}}$ for $\Omega_{m,0} < 1$ and $\frac{2}{3H_0}$ for $\Omega_{m,0} = 1$. With $u = \sqrt{1-\Omega_{m,0}}$ the callout's expression and limit are right, and "the age of a flat, matter-only universe" is the correct name for $2/(3H_0)$. Nothing is attributed to Guth; the leadsTo text ("reduces ... by exactly such a limit") is the page's own mathematical observation, which is true. Not checked: whether Guth takes this limit in the Lecture 19 transcript (the 8.286 page lists the $\Omega_{m,0} = 1$ case separately; the transcript was not re-read).
- leadsTo 8.286 Lecture 19 is the lecture of `age-with-vacuum-energy` (frontmatter `lecture: 19`): correct.
- leadsTo 18.01 Lecture 36 is "Improper Integrals" in `_course.json`, and the transcript (p. 8) says these rates are needed for "the next section. Which is improper integrals". Correct.
- Numbering: the page's `lecture: 35` follows the OCW video numbering in `_course.json`; the reading title correctly says the notes are numbered Lecture 34. The notes resource title is "Lecture 34: Indeterminate Forms- L'Hôspital's Rule"; the transcript URL `PNTnmH6jsRI.pdf` is the one linked from the Lecture 35 page. Correct.
- Prerequisites `linear-and-quadratic-approximations` and `exponentials-and-logarithms` exist (content:check passes) and fit: the page uses the linear/quadratic approximations and base $e$ for moving exponents.
- No em dashes on the page.
- Not checked: the video itself; data/symbols.json meanings (content:check reports no symbol errors for this page).

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the f′(a)/g′(a) formula is now labelled "The rule from difference quotients", and the text says that it is the notes (p. 1) that call it the easy version, while the lecture's "Version 1" is the general f′/g′ form.
- Info: the crutch expression is marked as reconstructed from the lecture's working; a sentence from p. 5 says that f′(a), f(a) and g(a) need not exist; the summary states p > 0. The other info items are left as they are.
