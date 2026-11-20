---
page: content/year-2/18.03/fourier-series-introduction.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-15-introduction-to-fourier-series/ (read: local copy lec.html, title "Lecture 15: Introduction to Fourier Series"; its only .pdf link is 0784391527930f24806e3df312c258db_EWWw0jryj1A.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/0784391527930f24806e3df312c258db_EWWw0jryj1A.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L15", 16 pages (p. 16 is one line), no printed page numbers; cited page = PDF page; every page extracted separately with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 16 = "Continuation: More General Periods"; the Lecture 16 transcript was not read)
  - calcs/18.03/fourier-series-introduction.yaml (read; `npm run calc:test -- -k fourier-series-intro`: 8 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Introduction to Fourier series

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. The recording starts "Well, let's get started" (p. 1) and ends "able to do the rest of it yourself" (p. 16). Formula locations: "Fourier series" pp. 1–2 (constant term and sum from n = 1 at the foot of p. 1; "cosine first … bn is sine nt" at the top of p. 2); "Orthogonality" p. 5 (definition begun on p. 4, the integral condition on p. 5); "Normalization" p. 6; "The shared equation" p. 7; "Integration by parts" p. 8; "Conclusion" p. 10 (−n² on p. 9, −m² and "integral … equal to zero" on p. 10); "Fourier coefficients" pp. 12–13 ("an times pi is the integral" p. 12, "divide it by pi" and the b_n formula p. 13); "Constant term" pp. 13–14 (c₀ = 1/(2π)∫f p. 13, a₀/2 convention p. 14); "Square wave coefficients" and "Square wave series" p. 15. All correct. Prose citations also checked: inputs so far special, "not as special as they look", this and the next two lectures p. 1; sin 2t also has period 2π p. 1; complexifying p. 2; cos 0t for the constant p. 2; superposition and linearity pp. 2–3; the programme p. 3; resonance payoff p. 4; 18.02 vectors p. 5; sin 3t cos 4t and sin 3t sin 60t p. 5; "a square is always positive" pp. 5–6; three proofs and why the ODE method generalizes pp. 6–7; u_n, v_m and u″ = −n²u pp. 7–8; "the most important theoretical method" p. 8; boundary term zero pp. 8–9; symmetric/not symmetric paradox pp. 9–10; cos nt sin nt = ½ sin 2nt p. 11; multiply by cos nt pp. 11–12; "gross, gross, gross errors" p. 13; two kinds of people p. 14; square wave drawn at the foot of p. 14 and on p. 15, odd, a_n zero p. 15. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Normalization" formula, flashcard 1 back, frontmatter `summary` | p. 6: ∫sin²nt = ∫cos²nt = π, said for the sines and cosines with n ≥ 1 (the constant is treated separately on p. 13). | States $\int\cos^2 nt\,dt = \pi$ right after a theorem that includes $\cos mt$ with $m \ge 0$, and flashcard 1 pairs the two statements, with no $n \ge 1$. For $n = 0$ the integral is $2\pi$, which is exactly the "constant term exception" the page explains later. | Add "($n \ge 1$; for $n = 0$, $\int 1\,dt = 2\pi$)" to the formula's sentence and to flashcard 1 and the summary. |
| 2 | info | Square-wave bracket "(The lecture … drops the factor $\frac{1}{\pi}$ and says "four over n".)" | p. 15: the spoken integrals have no 1/π and the result is "four over n, or it's zero". | Notes the slip and gives the correct $\frac{4}{n\pi}$. Correct. Whether the 1/π was also missing on the board cannot be checked from the transcript. | None needed; "says" is the right word. |
| 3 | info | Same derivation | p. 15 also says "integrating from minus pi to pi" for the first piece and corrects itself to "minus pi to zero"; "square-away function" is a transcription garble for "square-wave". | Uses the correct limits and "square wave". | None. |
| 4 | info | "Why Fourier series": "can be written as an infinite sum" | p. 1: "can always be represented as an infinite sum". | Same claim. At a jump the series converges to the midpoint (the plot's partial sums all pass through 0 at $t = 0$, not ±1). Neither the lecture nor the page says so. | Optional: one clause "(at a jump, the series gives the average of the two sides)". |
| 5 | info | Proof via the ODE | p. 11: the proof "won't [be asked] on an exam"; trig identities or complex exponentials are enough; the problem set asks for two of them. | Not mentioned. | Optional. |
| 6 | info | Finding the coefficients | pp. 11–12 writes a general other term $a_k\cos kt$ (or $b_k\sin kt$) next to $a_n\cos nt$ to show it dies. | Says "every term vanishes except…" without the $a_k$ term. | None needed. |
| 7 | info | calcs file `source` fields | | The page-own entries (`sawtooth-b3`, `triangle-constant`, `triangle-a3`) cite `p. 13` and `triangle-check` cites `p. 15`, but these are the page's own examples, not MIT's. | Optional: point them at the coefficient formulas' location (pp. 12–14) or drop the `at`. |

Lecturer slips checked:
- p. 15 dropped 1/π: noted (finding 2). Correct.
- p. 15 wrong limit "minus pi to pi", corrected in the lecture: not repeated (finding 3).
- p. 9 "minus n, I'm sorry, I should have subscripted": corrected in the lecture; the page writes $-n^2$ with subscripts. Correct.
- p. 10 "Negative pi. All right, let me write it this way. Okay, never mind": a garbled aside; not repeated.
- p. 15 "minus two over n, two over n times": garbled; the page gives the clean $\frac{2}{n\pi}(1 - \cos n\pi)$.

## Arithmetic and answer checks
- `npm run calc:test -- -k fourier-series-intro`: 8 passed. Recomputed by hand:
- Integration by parts: $\int u''v = [u'v] - \int u'v'$. Correct. Boundary term: if $v_m$ is a sine it vanishes at ±π; if $u_n$ is a cosine, $u_n'$ is a sine and vanishes; the remaining case, $u_n$ a sine and $v_m$ a cosine, gives $u_n'v_m$ = (const)·cos nt cos mt, even, so equal values at ±π. The page's one-sentence version covers all cases. Correct.
- Conclusion: $-n^2 I = -m^2 I$ with $m \ne n$ (and $m, n \ge 0$, so $n^2 \ne m^2$) gives $I = 0$. Correct. Same-$n$ case: $\cos nt\sin nt = \frac12\sin 2nt$, integral 0. Correct.
- Coefficients: $\int f\cos nt = \pi a_n$; $\int f = 2\pi c_0$; $n = 0$ in the $a_n$ formula gives $2c_0$, so $c_0 = a_0/2$. Correct.
- Square wave: $\int_{-\pi}^0(-\sin nt)\,dt = [\cos nt/n]_{-\pi}^0 = (1 - \cos n\pi)/n$; $\int_0^\pi \sin nt\,dt = (1 - \cos n\pi)/n$; total over π: $\frac{2}{n\pi}(1 - \cos n\pi)$ = $\frac{4}{n\pi}$ (odd), 0 (even). Correct. Series $\frac4\pi(\sin t + \sin 3t/3 + \dots)$. Correct. $a_n = 0$ since $f\cos nt$ is odd. Correct.
- Plot: square wave `t < 0 ? -1 : 1` on $[-\pi, \pi]$ matches the definition; "3 terms" = n = 1, 3, 5 and "10 terms" = odd n up to 19: both labels correct. Numerically, maxima 1.188 (3 terms, at t ≈ 0.52) and 1.180 (10 terms, near the jump at ±π), inside the range ±1.5; the caption's overshoot next to each jump (Gibbs, ≈ 1.18) is correct. Note that on $[-\pi, \pi]$ the periodic square wave also jumps at ±π, so the 10-term maximum sits next to the window edge; the caption's "each jump" covers it.
- Example (a): $b_n = \frac2\pi\int_0^\pi t\sin nt\,dt = \frac2\pi\left[-\frac{t\cos nt}{n}\right]_0^\pi = -\frac{2\cos n\pi}{n} = \frac{2}{n}(-1)^{n+1}$. $b_3 = 2/3$ (calcs 0.6667). Correct.
- (b): constant $\frac{1}{2\pi}\cdot\pi^2 = \frac\pi2$; $a_n = \frac2\pi\left[\frac{t\sin nt}{n} + \frac{\cos nt}{n^2}\right]_0^\pi = \frac{2}{\pi n^2}((-1)^n - 1)$; odd n: $-\frac{4}{\pi n^2}$; $a_3 = -4/(9\pi) = -0.14147$. Correct.
- (c): $\sum_{\text{odd}} 1/n^2 = \pi^2/8 = 1.2337$ (numerically checked); $\frac\pi2 - \frac4\pi\cdot\frac{\pi^2}{8} = 0$. Correct.
- Quiz 1: $\sin 3t\cos 4t$, distinct members, integral 0; answer 0. Correct (calcs `orthogonality-example`). The distractor 1/7 is a plausible wrong guess.
- Quiz 2: answer 0, $\frac1\pi\int f\cos nt$; explanation correct. Distractor $\frac{1}{2\pi}$ is the constant-term trap; good.
- Quiz 3: answer 0, $\frac{4}{n\pi}$ odd, 0 even; explanation correct.
- Flashcards: 1 correct for $n \ge 1$ (finding 1); 2 and 3 correct.
- Frontmatter summary: correct apart from finding 1.
- Calcs file: every non-trivial number has an entry. Not covered (info): the π²/8 sum itself (quoted as given) and the plot (no numbers stated).

## Coverage and order
- The page follows the lecture's order: why Fourier series, the table of responses and superposition (pp. 1–4) → definition of orthogonality (pp. 4–5) → the orthogonality theorem and examples (p. 5) → squares give π (p. 6) → three methods of proof (pp. 6–7) → proof via $u'' + n^2u = 0$ and integration by parts (pp. 7–10) → the $\cos nt\sin nt$ case (p. 11) → $a_n$, $b_n$ (pp. 11–13) → constant term and the $a_0/2$ convention (pp. 13–14) → square wave (pp. 14–15).
- Left out (minor): proof not on the exam and problem-set remarks (p. 11, finding 5); the general other term $a_k\cos kt$ (finding 6); the response series' notation $y_n^{(s)}$, $y_n^{(c)}$ (p. 2; the page describes it in words); the time plan for the next two lectures (pp. 3–4); "your book has lots of examples" (p. 14).
- Added: the plot of partial sums and the worked example (both original to this lecture page; see Licensing).
- `prerequisites: [resonance-and-beats]`: exists.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("not as special as they look", "the most important theoretical method" in quotes, "gross errors") are brief and cited.
- The worked example uses the standard sawtooth $t$ and triangle wave $|t|$, which appear in almost every Fourier text; they are not in Lecture 15. Whether Lecture 16 or the 18.03 notes use the same two functions was not checked (uncertain); the page's working and wording are its own either way. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 16 ("Fourier series for other periods, and shortcuts for even and odd functions."): the `_course.json` title is "Continuation: More General Periods", which supports "other periods"; Lecture 15 itself announces the shortcuts (pp. 3–4: "all the possible tricks and shortcuts") and says that "next Monday you'll see intuitively that the an is zero" for the odd square wave (p. 15), which supports "even and odd functions". The full OCW title of Lecture 16 is, as far as I recall, "Continuation: More General Periods; Even and Odd Functions; Periodic Extension", which would confirm it, but that page and its transcript were not read here (uncertain).
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- The page never names the lecturer (Mattuck) in the text; the reading title does. Optional.

## Resolution (2026-11-16, by the page author)

1. Warning: ∫cos²nt dt = π is now stated for n ≥ 1 in the text, the summary and flashcard 1.
2. Worked example (a) was the sawtooth t, which is Lecture 16's own example. It is replaced by the half-wave (0 then 1), solved from the square wave and checked directly; the calcs entry is replaced to match.

The info notes are left as they are; the midpoint at jumps is covered on the Lecture 16 page. Status set to `reviewed`.
