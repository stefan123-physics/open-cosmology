---
page: content/year-2/18.03/fourier-series-particular-solutions.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-17-finding-particular-solutions-via-fourier-series/ (read: local copy lec.html, title "Lecture 17: Finding Particular Solutions via Fourier Series"; its only .pdf link is 57839a89c4d503a9768c85394bf46a11_yD0_EQLxHcw.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/57839a89c4d503a9768c85394bf46a11_yD0_EQLxHcw.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L17", 15 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N -layout`)
  - content/year-2/18.03/_course.json (read: the syllabus has no Lecture 18; Lecture 19 = "Introduction to the Laplace Transform")
  - calcs/18.03/fourier-series-particular-solutions.yaml (read; `npm run calc:test -- -k particular-solutions`: 21 passed)
verdict: pass-with-notes
---

# Review: Particular solutions via Fourier series, and how we hear

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, so every equation was on the board) with transcript page = PDF page. The recording starts with "I'd like to talk. Thank you." (p. 1) and ends with "And, I got the same answer as before." (p. 15). Formula locations checked:
- "Square wave of period 2", p. 4: $f = \frac12 + S$, $S = \frac12 g(\pi t)$, the sum over odd $n$, and "let's call that plus two over pi" are all on p. 4. Correct.
- "Undamped driven equation", p. 5: written on the board on p. 5 ("the general problem … is to solve this"), but read aloud only on p. 8 ("x double prime plus omega naught squared x equals f of t"). Acceptable (finding 6).
- "Input as a Fourier series", p. 6: series with $\omega_n$ and $\omega_n = n\pi/L$, period $2L$, all on p. 6. Correct.
- "Response as a Fourier series", p. 7: $a_n\cos\omega_nt/(\omega_0^2 - \omega_n^2)$, the same for $b_n$, and $a_0/(2\omega_0^2)$ as the case $\omega = 0$ are all on p. 7. Correct.
- "Response to the square wave", pp. 8, 15: p. 8 gives $\frac{1}{2\omega_0^2} + \frac2\pi\sum_{n\text{ odd}}\frac{\sin n\pi t}{\omega_0^2 - (n\pi)^2}$ without the $\frac1n$; p. 15 has "two over pi times one over n times one over omega naught squared minus …". The page restores the $\frac1n$ and says so. Correct.
- "Coefficients for ω₀ = 10", pp. 9–10: the location is right, but the numbers are the page's own exact values, not the lecture's (finding 3).
- "Equating coefficients", pp. 14–15: $c_0\omega_0^2 = \frac12$ (p. 14, after the correction "it should be c naught times omega naught squared"), $c_n = 0$ for even $n$ (p. 14), $c_n$ for odd $n$ (p. 15). The page's $c_n(\omega_0^2 - n^2\pi^2) = \frac{2}{n\pi}$ is equivalent to the p. 15 statement. Correct.

Prose citations also checked: the triad, "that's Fourier analysis", three terms, no little integrator (p. 1); square wave, neither even nor odd, $L = 1$, $\sin n\pi t$ (p. 2); lowering by $\frac12$ gives an odd function (p. 2); $g(u)$ from the first Fourier lecture, $\pm1$, half-period $\pi$ (p. 3); $u = \pi t$ (p. 4); undamped case (p. 5); responses to $\cos\omega t$ and $\sin\omega t$ from the resonance lecture (pp. 5–6); superposition, "the fundamental idea of Fourier series … in this context" (p. 7); look at the sizes of the coefficients, $\omega_0 = 10$ (p. 8); constant term $\frac{1}{200} = 0.005$ (p. 9); "near resonance", $3\pi$ hidden in the input, the system picks out the nearest frequency (p. 10); $\omega_0 = 5$, no resonance (p. 11); eardrum, three bones, membrane, fluid, cochlea, 20,000, graded, organ pipes (pp. 11–12); "the Fourier analysis is done by resonance" (p. 12); the book's method by substitution, term-by-term differentiation, no formula to remember, about the same length of time (pp. 12–13); assumed form $c_0 + \sum c_n\sin n\pi t$ (p. 13); second derivative $-c_n(n\pi)^2\sin n\pi t$, equating coefficients (p. 14); same answer (p. 15). All correct.

No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page. Internal links checked: `fourier-series-introduction` (Lecture 15, which has the $\pm1$ square wave $\frac4\pi\sum_{n\text{ odd}}\frac{\sin nt}{n}$; the lecture says on p. 3 that it "came from the first lecture on Fourier series"), `resonance-and-beats` (Lecture 14), `fourier-series-even-odd-and-periods` (prerequisite, Lecture 16). All exist.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | A hidden resonance: "With $\omega_0 = 5$, no frequency of the input would be close, and nothing would stand out (p. 11)" | p. 11: none of the frequencies is close, "and there would be no resonance". | "nothing would stand out". For $\omega_0 = 5$ the coefficients are about $0.0421$ ($n = 1$), $-0.0033$ ($n = 3$) and $-0.0006$ ($n = 5$): the fundamental stands out by a factor of about 13. The page's own worked example (a) says, correctly, that "the slowest term simply dominates". | "…no frequency of the input would be close, so there is no resonance: as usual, the slowest term dominates (p. 11)." |
| 2 | warning | How we hear: "In the cochlea are about 20,000 hair-like cells of graded lengths, like organ pipes, each with its own natural frequency" | pp. 11–12: Mattuck says "from now on I hand wave", "I don't talk physiology … I know nothing about it", then gives this picture. | Presented as fact, with only "roughly" at the start of the section. In mammals the frequency tuning comes mainly from the basilar membrane, whose width and stiffness change along the cochlea (the hair cells on it sense the place of largest vibration); a human cochlea has about 15,000–16,000 hair cells (about 3,500 inner and 12,000 outer). These are from general knowledge, not checked against a source in this review: treat the exact figures as uncertain. The principle (place-by-place resonance does the frequency analysis) is right. | Say it is the lecture's simplified picture ("Mattuck stresses he is hand-waving"), and optionally add one sentence that the tuning in the real cochlea lies mostly in the basilar membrane. Keep "about 20,000" attributed to the lecture. |
| 3 | info | Formula "Coefficients for ω₀ = 10", `at="pp. 9–10"` | pp. 9–10: rough mental values, about $0.006\sin\pi t$, "a 20th" for the $\sin 3\pi t$ term (written "0.005", apparently a slip for 0.05), and $-0.01\sin 5\pi t$. | Exact values $0.0071$, $0.0190$, $-0.0009$, cited as if from pp. 9–10. The text after the formula does explain that the lecture's numbers were rougher. | Optional: change `at` to something like "pp. 9–10 (values recomputed)", so the citation does not suggest MIT gave these numbers. |
| 4 | info | Note after the formula: "The lecture estimates these mentally, with rough arithmetic" | pp. 9–10: besides rounding $\pi$ to 3, the mental arithmetic also leaves out the factor $\frac1n$ (e.g. $0.6/15$ for the $n = 3$ term instead of $0.6/(3\cdot15)$). It also says "100 minus 9 squared" for $100 - \pi^2$ (p. 9) and "100 squared minus … 225" for $100 - 25\pi^2$ (p. 10). | Mentions only the rough arithmetic and the ratio "about five times" (p. 10, correctly quoted). The slips themselves are not repeated. | Optional: add "and leaves out the factor $1/n$" so readers comparing with the video are not confused. |
| 5 | info | Flashcard 2 and Summary bullet 3: "The term whose frequency $\omega_n$ is closest to $\omega_0$ gets the smallest denominator and dominates the response" | p. 10: the system "favors" the frequency closest to its natural frequency; in the example it does dominate. | Stated as a general rule. It needs two conditions: $\omega_0$ must be close to some $\omega_n$ (compare finding 1), and that term's input coefficient must not be very small. Also, "closest in frequency" and "smallest $\lvert\omega_0^2 - \omega_n^2\rvert$" are not quite the same thing. | Add "when $\omega_0$ is near one of the $\omega_n$". |
| 6 | info | Formula "Undamped driven equation", `at="p. 5"` | The equation is written on the board on p. 5, but is said in words only on p. 8. | p. 5. | Optional: "pp. 5, 8". |
| 7 | info | Responses term by term; flashcard 1 | pp. 5–7: the response formula, with resonance when the denominator is almost zero (p. 6). | The response formula is stated with no condition. Quiz 1 does state $\omega \ne \omega_0$. If some $\omega_n = \omega_0$ exactly, the formula fails (pure resonance). | Add "(provided no $\omega_n$ equals $\omega_0$)" to the formula's text or to flashcard 1. |

Lecturer slips checked:
- p. 8: the $\frac1n$ is left out of the response series. The page restores it from p. 15 and says so. Correct.
- p. 15: "one over omega naught squared minus n over pi squared" for $(n\pi)^2$. The page writes $n^2\pi^2$ and notes the slip. Correct.
- p. 14: "On the bottom, it's multiplied by n pi squared" (the sign is lost) and first "c naught" for $c_0\omega_0^2$, which the lecture corrects itself. The page uses the corrected forms.
- pp. 9–10: the mental arithmetic for $\omega_0 = 10$ (see finding 4). Not repeated.
- p. 7: "minus omega times the sine of omega t", corrected in the lecture to $\omega_n$. The page uses $\omega_n$.
- p. 15: "c zeros" for the $c_n$. A garble, not repeated.

## Arithmetic and answer checks
- `npm run calc:test -- -k particular-solutions`: 21 passed. Every value was also recomputed independently (in the project `.venv`, NumPy):
- Square wave: $\frac12 + \frac12\cdot\frac4\pi\sum\frac{\sin n\pi t}{n} = \frac12 + \frac2\pi\sum\frac{\sin n\pi t}{n}$. At $t = \frac12$ this gives $\frac12 + \frac2\pi\cdot\frac\pi4 = 1$. Correct.
- $\omega_0 = 10$: constant $\frac{1}{200} = 0.005$. $100 - \pi^2 = 90.13$ (≈ 90), $100 - 9\pi^2 = 11.17$ (≈ 11.2), $100 - 25\pi^2 = -146.74$ (≈ −147), $100 - 49\pi^2 = -383.6$ (negligible). The coefficients $\frac{2}{\pi n(100 - n^2\pi^2)}$ are $0.007063$, $0.018992$, $-0.000868$ and $-0.000237$ for $n = 1, 3, 5, 7$, so the page's $0.0071$, $0.0190$, $-0.0009$ are correct. Ratios: $0.018992/0.007063 = 2.69$ and $0.018992/0.000868 = 21.9$, so "about 2.7 and 22" is correct. $3\pi = 9.425$. Correct.
- Plot: the expression is the constant plus the $n = 1, 3, 5, 7$ terms, with the right signs and the factor $\frac1n$. On $[0, 4]$ it runs from $-0.01758$ to $0.02758$, inside the range $[-0.03, 0.04]$. The full series (odd $n$ up to 1999) differs from it by at most $2.1\times10^{-4}$. The dashed curve is the constant plus the $n = 3$ term. The caption ("first four terms", meaning the four sine terms, with "dominated by the n = 3 term") is correct. Label placement was not checked in a browser (`content:check` does that).
- Example (a), $\omega_0 = 6$: $36 - \pi^2 = 26.13$, so $0.02436$; $36 - 9\pi^2 = -52.83$, so $-0.004017$; $36 - 25\pi^2 = -210.74$, so $-0.000604$. Matches $0.0244$, $-0.0040$, $-0.0006$. $2\pi = 6.28$; the square wave has no even-$n$ terms. Correct.
- Example (b), $\omega_0 = 15.5$ ($\omega_0^2 = 240.25$): $0.002763$, $0.001401$, $-0.019619$ for $n = 1, 3, 5$ ($n = 7$ gives $-0.000374$). $5\pi = 15.708$. The ratio $0.019619/0.002763 = 7.10$, so "about seven times the next" is correct.
- Example (c): $36c_0 = \frac12$, so $c_0 = \frac{1}{72} = 0.01389$. Correct.
- $\omega_0 = 5$ (finding 1): $0.04208$, $-0.003325$, $-0.000574$.
- Book's method: $(c_n\sin n\pi t)'' = -c_n n^2\pi^2\sin n\pi t$; equating with $f$'s coefficient $\frac{2}{n\pi}$ gives $c_n = \frac{2}{\pi}\cdot\frac{1}{n(\omega_0^2 - n^2\pi^2)}$, the same as the response formula. Correct.
- Quiz 1: answer 0. Substituting $c\sin\omega t$ gives $c(\omega_0^2 - \omega^2) = b$. The distractors are wrong (wrong sign, wrong frequency, wrong function). Correct.
- Quiz 2: answer 0 ($n = 3$). The weighted denominators $n\lvert\omega_0^2 - n^2\pi^2\rvert$ are 90.1, 33.5 and 733.7, and the constant term (0.005) is smaller than the $n = 3$ term (0.019). The explanation ("denominator ≈ 11.2 by far the smallest") is correct.
- Quiz 3: answer 0, matching p. 12. Correct, with the caveat in finding 2 about how the page presents the physiology.
- Flashcards: 1 is correct (see finding 7), 2 is correct with the caveat in finding 5, and 3 matches pp. 13–14.
- Calcs file: the `source.at` values on the page-own entries (for example `two-pi` at p. 11, `c1-6` at p. 10) are only nominal, and `origin: mit` on `c1-10`/`c3-10`/`c5-10` labels exact values that the lecture did not state (see finding 3). Harmless, since every value recomputes.

## Coverage and order
- The page follows the lecture's order: hearing a chord as Fourier analysis (p. 1) → shortcut by lowering and stretching the square wave (pp. 2–4) → undamped equation and the responses to $\cos\omega t$, $\sin\omega t$ (pp. 5–6) → general Fourier input and superposition, constant term (pp. 6–7) → application to the square wave (p. 8) → $\omega_0 = 10$ coefficients and the hidden resonance (pp. 8–11) → the ear (pp. 11–12) → the book's method (pp. 12–15).
- Left out (minor): the reminder that the general solution is $x_p$ plus the homogeneous solution (p. 5); the derivation of the response by complex exponentials (p. 5, replaced by a link to the resonance lecture); the reminder of why a small denominator means resonance (p. 6); the remark that a Fourier input assumes periodicity, "yes, sort of" (p. 6); the case $L = \pi$, $\omega_n = n$ (p. 6); the suggestion to plot the first few terms in MATLAB (p. 8; the page's graph does this); the vertical lines drawn at the jumps (p. 2); the homework announcement (p. 12).
- Added: the graph and the worked example (both original: $\omega_0 = 6$ and $15.5$, and $c_0$ by equating coefficients).
- `prerequisites: [fourier-series-even-odd-and-periods]` exists (Lecture 16).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph is copied; the prose paraphrases. Short quotations: "The Fourier analysis is done by resonance" (p. 12, one sentence, in bold and in quiz 3's explanation), "near resonance" and "organ pipes": brief and cited. Acceptable.
- The square-wave shortcut and the $\omega_0 = 10$ analysis are the lecture's own content, rewritten in the page's own words with exact numbers. The worked example uses its own values. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 19 ("The Laplace transform, another way to solve linear equations with general inputs."): `_course.json` has no Lecture 18 (the exam), and Lecture 19 is "Introduction to the Laplace Transform"; `laplace-transform-introduction.mdx` exists with `lecture: 19` (draft). The claim is a fair description. The Lecture 19 transcript was not read for this review.
- The previous page's `leadsTo` claim to this lecture ("resonance with one term of the series", left uncertain in `reviews/18.03/fourier-series-even-odd-and-periods.md`) is confirmed by pp. 8–11.
- There is no `Callout kind="cosmology"`; the page makes no cosmology claim.
- The ear claims are attributed to the lecture ("transcript, pp. 11–12", "This, roughly, is hearing"), and quiz 3 says "according to the lecture". See finding 2 for the wording.

## Resolution (2026-11-16, by the page author)

1. Warning 1: for ω₀ = 5 the page now says there is no resonance and the slowest term dominates.
2. Warning 2: the account of hearing is now presented as the lecture's own simplified picture, and the 20,000 figure as the lecture's.
3. Info: flashcard 2 and the summary now say "when ω₀ is close to one of the ωₙ"; the response formula notes that no ωₙ may equal ω₀; the undamped equation cites pp. 5, 8.

Status set to `reviewed`.
