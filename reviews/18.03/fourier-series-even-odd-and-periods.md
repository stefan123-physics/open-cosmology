---
page: content/year-2/18.03/fourier-series-even-odd-and-periods.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-16-continuation-more-general-periods/ (read: local copy lec.html, title "Lecture 16: Continuation: More General Periods"; its only .pdf link is 0f6b9d4ce35074391e07a005f9e79eca_xWa5_OXI6VM.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/0f6b9d4ce35074391e07a005f9e79eca_xWa5_OXI6VM.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L16", 16 pages, no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 17 = "Finding Particular Solutions via Fourier Series"; the Lecture 17 transcript was not read)
  - calcs/18.03/fourier-series-even-odd-and-periods.yaml (could not read: the file, and the page itself, were removed from the working tree while this review was being written, apparently set aside while Lecture 15 was committed. The page was read in full before that. `npm run calc:test -- -k even-odd-and` was therefore NOT run; every number was recomputed independently instead, see below)
verdict: pass-with-notes
---

# Review: Fourier series: even and odd functions, convergence and other periods

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The recording starts "Okay, that's, so to speak, the text for today" (p. 1) and ends with "Okay, you've got lots of problems to do" (p. 16). Formula locations: "Series of f(−t)" p. 3 (substitution, cosines unchanged, sines change sign, all on p. 3); "Half-interval formulas" p. 5 (both the even $a_n$ and the odd $b_n$ formula are stated on p. 5); "Sawtooth coefficients" p. 8 (integration by parts begun on p. 7, both bracket terms evaluated and $\frac{2}{n}(-1)^{n+1}$ on p. 8); "Sawtooth series" pp. 8–9 (summation at the foot of p. 8, terms $\sin t - \frac12\sin 2t + \frac13\sin 3t$ on p. 9); "Period 2L" p. 14 (series and $a_n = \frac1L\int_{-L}^{L}$ both on p. 14). All correct. Prose citations also checked: uniqueness and "integrals don't care about individual points" p. 1; aim, first and second half, period "rarely two pi" p. 2; even claim and $b_n = 0$ p. 2; proof by uniqueness pp. 2–3; converse p. 4; odd, "even including … a nought" p. 4; $f\cos nt$ even pp. 4–5; negative signs with $-\pi$ p. 5; odd times odd, functions not numbers pp. 5–6; sawtooth odd pp. 6–7; $\cos n\pi = (-1)^n$ p. 8; Taylor contrast and wrong slope p. 9; coefficients independent p. 10; theorem, continuity p. 10; jump, midpoint p. 11; sawtooth limit graph and $t = \pi$ check pp. 11–12; $u = \pi t/L$ p. 13; sine zero at multiples of $L$ p. 14; even shortcut pp. 14–15; half-period one p. 15; finite interval, Fourier transforms p. 15; extensions pp. 15–16; plugging into the differential equation p. 16. All correct apart from findings 3, 5 and 6. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Convergence section, first bullet; flashcard 2 | p. 10: "If f is continuous … the Fourier series converges, and it's equal to its Fourier series" (stated for the course's functions; the theorem is not proved). | "If $f$ is continuous at $t_0$, the Fourier series converges there, to $f(t_0)$", with no hypothesis. As a general statement this is false: there are continuous periodic functions whose Fourier series diverge at a point (du Bois-Reymond, 1873). The usual 18.03 theorem assumes $f$ is piecewise smooth (piecewise continuous with a piecewise continuous derivative). The page repeats the lecture's simplification without saying so. | Add "(for the piecewise smooth functions met in this course; continuity alone is not enough)" to the theorem and to flashcard 2. |
| 2 | warning | Period 2L: "$\cos(n\pi t/L)$ and $\sin(n\pi t/L)$, which vanish or repeat at multiples of $L$ (pp. 13–14)" | p. 14: the sine is zero at $0, \pm L, \pm 2L$, and the functions are periodic with period $2L$. | "vanish or repeat at multiples of $L$". The cosine does not vanish at multiples of $L$ ($\cos n\pi = \pm1$), and neither function repeats with period $L$ in general (for odd $n$, $\cos(n\pi(t+L)/L) = -\cos(n\pi t/L)$). | "The sine vanishes at $0, \pm L, \pm 2L, \dots$, and both have period $2L$ (p. 14)." |
| 3 | info | Period 2L: "often the half-period $L$ is 1 (transcript, pp. 2, 15)" | p. 2: the period "is normally one, or something like that"; p. 15: "if the period is two, in other words, if the half period is one". | Cites both pages for "half-period 1". p. 2 actually says the period is one (a lecturer inconsistency); the page silently takes the p. 15 version. | Cite p. 15 only, or say "(the lecture says period 1 on p. 2 and half-period 1 on p. 15)". |
| 4 | info | One function, one series: "What happens at single points does not matter, since the integrals ignore them (p. 1)" | p. 1 makes this remark about the undefined endpoints of the sawtooth, not as part of the uniqueness statement. | Places it under uniqueness, where it implicitly says "functions equal except at single points have the same series". True, and a fair reading, but a small extension of the lecture. | None needed; optionally tie it to the sawtooth's endpoints. |
| 5 | info | Finite interval: "For $t^2$ on $[0, 1]$ … (p. 16)" | $t^2$ with $L = 1$ is chosen at the foot of p. 15; the extensions are drawn on p. 16. | p. 16. | "pp. 15–16". |
| 6 | info | Not a Taylor series: "Each new term corrects the sum everywhere, and the earlier coefficients never need changing (pp. 9–10)" | p. 10: in the visual (mathlet) the coefficients can be set independently, so improving an earlier one "won't affect anything you did before". | Fair paraphrase, but the lecture says it about the sliders in the visual, which the page does not mention. | Optional: mention the Fourier coefficients mathlet the lecture assigns. |
| 7 | info | Finite interval: "The odd periodic extension reflects $f$ upside down and repeats" | p. 16: "make it go down in exactly the same way it went up". | "reflects $f$ upside down". Could be read as reflecting only in the $t$-axis; the odd extension is $-f(-t)$ (reflection in both axes, i.e. through the origin). | "reflects $f$ through the origin, $f(-t) = -f(t)$, and repeats". |

Lecturer slips checked:
- p. 11 writes the sum as "summation minus one to the n plus one over n sine nt", leaving out the factor 2. The page keeps the 2. Correct (the value at $t = \pi$ is 0 either way).
- p. 13 "if the period is not pi but L": a slip for "not $2\pi$ but $2L$". Not repeated.
- p. 2 "period … normally one" against p. 15 "half period is one": finding 3.
- p. 14 "f of t equals identical summation" is a transcription garble (presumably "$\frac{a_0}{2}$ plus summation"); the page writes $\frac{a_0}{2} + \sum$, consistent with Lecture 15's form. The exact board form is not recoverable from the transcript (uncertain, harmless).
- p. 9 "So, the next guy would, let's see, so it's 2t" and pp. 7–8 "sign" for "sine": garbles, not repeated.
- p. 10 the convergence theorem stated with continuity only: finding 1.

## Arithmetic and answer checks
- `npm run calc:test -- -k even-odd-and` was not run (calcs file and page removed from the working tree during the review; rerun once they are restored). Every number was recomputed by hand and numerically (NumPy/SciPy `quad`, in the project `.venv`):
- Series of $f(-t)$: $\cos(-nt) = \cos nt$, $\sin(-nt) = -\sin nt$. Correct; $b_n = -b_n \Rightarrow b_n = 0$. Correct.
- Half-interval formulas: even $f\cos nt$, odd·odd $f\sin nt$ is even, so $\int_{-\pi}^{\pi} = 2\int_0^{\pi}$; with the $\frac1\pi$ prefactor this gives $\frac2\pi$. Correct.
- Sawtooth: $\int t\sin nt\,dt = -\frac{t\cos nt}{n} + \frac{\sin nt}{n^2}$; at $\pi$: $-\frac{\pi(-1)^n}{n}$, at 0: 0; times $\frac2\pi$: $\frac2n(-1)^{n+1}$. Numerically $b_1..b_4 = 2, -1, 0.6667, -0.5$, matching. Correct.
- Plot: the 5-term expression $2(\sin t - \frac{\sin 2t}{2} + \frac{\sin 3t}{3} - \frac{\sin 4t}{4} + \frac{\sin 5t}{5})$ has the right signs; its maximum on $[-\pi, \pi]$ is 3.166 (at $t \approx 2.62$), the line $f = t$ reaches $\pm\pi$, and $2\sin t$ reaches $\pm 2$: all inside the range $[-4, 4]$. Domain $\pm 3.1416$ is $\pm\pi$. Caption correct ("computed from the formula"; the wrong slope 2 against 1 at 0 is right). Label placement was not checked in a browser (`content:check` does that).
- Convergence at $t = \pi$: every $\sin n\pi = 0$; jump from $\pi$ to $-\pi$, midpoint 0. Correct.
- Example (a): $L = 2$; $\frac{a_0}{2} = \frac12\int_0^2 t\,dt = 1$; $a_n = \int_0^2 t\cos\frac{n\pi t}{2}dt = \frac{4}{n^2\pi^2}((-1)^n - 1)$ (numerically $a_1 = -0.81057 = -8/\pi^2$, $a_2 = 0$, $a_3 = -0.09006 = -8/(9\pi^2)$). Series $1 - \frac{8}{\pi^2}(\cos\frac{\pi t}{2} + \frac19\cos\frac{3\pi t}{2} + \cdots)$; check at $t = 0$: $1 - \frac{8}{\pi^2}\cdot\frac{\pi^2}{8} = 0 = f(0)$. Correct. "Triangle wave of period 4": correct.
- (b): $b_n = \int_0^2 \sin\frac{n\pi t}{2}dt = \frac{2}{n\pi}(1 - \cos n\pi)$: $\frac{4}{n\pi}$ odd ($b_1 = 1.2732$ numerically), 0 even. Midpoint 0 at $t = 0$. Correct. "Square wave of period 4": correct.
- (c): $\sin\frac{n\pi}{2} = 1, 0, -1, 0, \dots$; with $(-1)^{n+1}$ the odd terms are $+1, -\frac13, +\frac15$; $2\cdot\frac\pi4 = \frac\pi2$ (partial sum to $2\times10^5$ terms: 1.570791). Correct.
- Quiz 1: answer 0 (cosines and a constant). Correct; explanation correct.
- Quiz 2: answer 0 (midpoint 0). Correct; explanation correct.
- Quiz 3: answer 0. Correct; the distractors are wrong (e.g. $\cos(nt/L)$ has period $2\pi L$). Explanation correct.
- Flashcards: 1 and 3 correct; 2 correct under the hypothesis in finding 1.
- Frontmatter summary: every statement matches the page and is correct (same caveat as finding 1 for "converges to f where f is continuous").

## Coverage and order
- The page follows the lecture's order: uniqueness (p. 1) → aim, plan of the lecture (pp. 1–2) → even/odd and proof by uniqueness (pp. 2–4) → half-interval integrals and odd·odd (pp. 4–6) → the sawtooth computation (pp. 6–9) → Taylor contrast (pp. 9–10) → convergence theorem and the sawtooth's limit (pp. 10–12) → period $2L$ (pp. 13–15) → finite intervals and even/odd extensions (pp. 15–16).
- Left out (minor): the remark that "periodic with period $2\pi$" is ambiguous ($2\pi$ is *a* period; p. 1); "odd times even is odd" (p. 6, the page gives only odd·odd and implicitly even·even); the boxed "odd"/"even" notation (p. 6); most functions are neither even nor odd, but can be converted (pp. 6–7); the electrical engineers' vertical lines on the sawtooth (p. 11); the visual / mathlet the lecture keeps referring to (pp. 9–10, finding 6).
- Added: the graph and the worked example (both original: the lecture does no example for period $2L$ or for an extension, only sketches $t^2$).
- `prerequisites: [fourier-series-introduction]`: that page now exists in the working tree (staged, not yet committed), as expected per the brief.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("the midpoint of the jump", "odd times odd is even", "wrong slope") are standard terminology or brief and cited.
- The sawtooth is the lecture's own example, rewritten in the page's words with the derivation laid out differently; acceptable since it is the lecture content being taught. The worked example uses its own functions ($t$ and 1 on $[0, 2]$, the value at $\pi/2$). No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 17 ("Using Fourier series to find particular solutions for periodic inputs, and resonance with one term of the series."): the first half matches the Lecture 17 title "Finding Particular Solutions via Fourier Series", and p. 15 says the finite-interval extension "is going to be a very important one for us next time", p. 16 that the part on $[0, L]$ is what "you will plug into your differential equation". The resonance claim ("resonance with one term of the series") was not verified (Lecture 17 transcript not read): uncertain, though it is standard 18.03 content.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- The page and its calcs file were not present in the working tree at the time this review was saved; the review is of the version read at the start (129 lines, `status: draft`). If the restored version differs, recheck the changed parts and run `npm run calc:test -- -k even-odd-and` and `npm run content:check`.

## Resolution (2026-11-16, by the page author)

The page and calcs file were set aside briefly while Lecture 15 was committed. They are back unchanged, and `calc:test` (6 passed) and `content:check` ran after the fixes below.

1. Warning 1: the convergence theorem and flashcard 2 now say "piecewise smooth", and note that the lecture states it without conditions.
2. Warning 2: the Period 2L section now says the functions have period 2L and that the sine vanishes at every multiple of L.
3. Info notes: the half-period remark now cites p. 15 only; t² on [0, 1] now cites pp. 15–16; the odd extension now reflects f through the origin.

Status set to `reviewed`.
