---
page: content/year-1/18.01/infinite-series.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-37-infinite-series/ (read: local copy lec.html, title "Lecture 37: Infinite Series"; links the transcript MK_0QHbUnIA.pdf; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/MK_0QHbUnIA.pdf (read: local copy transcript.pdf, page-split text tp.txt, 13 PDF pages, "ocw-18-01-f07-lec37"; the PDF prints no page numbers, so transcript pages = PDF pages)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec36/ (read: local copy n.html, title "Lecture 36: Infinite Series and Convergence Tests", links lec36.pdf; notes.pdf = OCW cover + printed pp. 1-7 = PDF pp. 2-8, checked page by page with pdftotext -f N -l N; printed pp. 5-7 are the block stacking, left for the next page)
  - content/year-1/18.01/_course.json (read: Lecture 37 "Infinite Series", 38 "Taylor's Series")
  - content/year-4/8.286/black-body-radiation.mdx (read, for the cosmology callout and the 8.286 Lecture 16 leadsTo; the 8.286 Lecture 16 transcript itself was not re-read)
  - calcs/18.01/infinite-series.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k infinite`: 10 passed)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: pass-with-notes
---

# Review: Infinite series and convergence tests

Citation convention checked: transcript pages are PDF pages (tp.txt "=== PAGE n"), notes pages are printed footers (printed page = PDF page - 1: printed p. 1 = geometric series, a = ±1, notation; p. 2 = definition, Σ1/n^p, π²/6, Σ1/n³ irrational, start of harmonic series; p. 3 = upper and lower Riemann sums, ln N < s_N < 1 + ln N; p. 4 = integral comparison, limit comparison; pp. 5-7 = blocks). Every page citation was checked against tp.txt and the notes PDF.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Geometric series", a = 2 bracket: "(though number theorists have a system in which it makes sense, by giving up the idea that 0 < 1)" | Transcript p. 7: "In number theory there's a strange system where this is actually true ... what you have to throw out is the idea that 0 is less than 1. There is no such thing as negative numbers." | States it as fact, unattributed. | Attribute it (writing rule 5): "(the lecturer adds that number theorists have a system, the 2-adic numbers, in which it holds, at the price of having no ordering such as 0 < 1)". The substance is right: in the 2-adic numbers 1 + 2 + 4 + ... converges to -1 and there is no order compatible with arithmetic. The lecturer's "no such thing as negative numbers" is loose (−1 exists there), so do not repeat that part. |
| 2 | warning | "Convergence of a series": "only in recent times was it proved irrational (pp. 8-9; notes, p. 2)" | Transcript p. 9: "only very recently proved to be [ir]rational"; notes p. 2: "Mathematicians have only recently been able to determine that Σ1/n³ converges to an irrational number!" | Present-tense "only in recent times", unattributed. | Correct in substance (Apéry, 1978/79), but "recent" is the 2006 notes' viewpoint; for a 2026 reader write "was proved irrational only in 1978 (Apéry), as the notes point out" or attribute "recent" to the lecture. |
| 3 | info | "Integral comparison and limit comparison", formula "Integral comparison": $0 < \sum f(n) - \int_1^\infty f\,dx < f(1)$ | Transcript p. 11 and notes p. 4 give only the upper bound: $\sum f(n) - \int_1^\infty f\,dx < f(1)$. | Adds the lower bound $0 <$. | The lower bound is true (it is the upper-Riemann-sum half of the argument) but is not in the cited statement; either drop "0 <" or add "(the lower bound is the other half of the same picture)". Also note the flashcard writes $0 \le \ldots \le f(1)$ while the formula writes strict inequalities; the non-strict form is the safe one (equality on the right is possible for a non-strictly decreasing step function). Harmless either way. |
| 4 | info | Last paragraph of "Integral comparison and limit comparison": "(On p. 9 the transcript says '$1/n$ resembles $1/x^2$' where it means $1/n^2$.)" | Transcript p. 9: "The things that are really similar are that 1/n resembles 1/x^2." This is in the discussion of Σ1/n² vs ∫dx/x² and Σ1/n³ vs ∫dx/x³ (pp. 8-9), after a student asked about the "~" sign. | Slip noted, but placed in the limit-comparison section, far from the passage it refers to. | The slip is real (verified on p. 9). Whether "1/n²" or "1/n³" was meant is uncertain (the board had both pairs); "where it means $1/n^2$" is the likely reading. Move the bracket to "Convergence of a series", next to the Σ1/n²/Σ1/n³ sentences, where a reader meets it. Optionally add the lecturer's point there: "~" is kept for functions with ratio → 1; the sum and integral only share convergence behaviour. |
| 5 | info | "Geometric series", Zeno sentence | Transcript p. 6: the lecturer muddles the story ("the rabbit and the tortoise") and says Zeno's conclusion was "Time does not exist". | "which is the heart of Zeno's paradox" | Fine: the halving argument is Zeno's dichotomy (and Achilles) paradox, and the page wisely does not repeat the "time does not exist" claim, which is not the usual account (Zeno argued against motion). No change needed. |
| 6 | info | "Convergence of a series", Euler sentence | Transcript p. 8: "Euler did it. And the answer is pi^2 / 6"; notes p. 2 give π²/6 without naming Euler. | "Euler found it to be $\frac{\pi^2}{6}$ (p. 8; notes, p. 2)" | Correct (Euler, Basel problem, 1734/35); the citation pair is right since the name comes from the transcript and the value from both. |
| 7 | info | Transcript slip p. 9, "only very recently proved to be rational" | The lecturer says "rational", then "it is an irrational number". | The page says "irrational". | Slip not repeated; nothing needed. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified:
  - "Improper integral of the second kind", reading2 p. 1: $\lim_{a\to0^+}\int_a^1 f\,dx$, converges if the limit exists. Correct.
  - "Powers near zero", reading2 p. 2: $\frac{1}{1-p}$ for $p < 1$, diverges for $p \ge 1$. Correct.
  - "Geometric series", reading2 p. 6: $\frac{1}{1-a}$, $|a| < 1$ ("-1 is strictly less than a is less than 1"). Correct; also notes p. 1 with the $S - aS = 1$ trick, correctly cited.
  - "Sum of a series", reading2 p. 8: $S_N = \sum_{n=0}^N a_n$, sum = $\lim S_N$, converges/diverges. Correct (notes p. 1 notation, p. 2 definition; cited "notes, pp. 1-2", correct).
  - "The harmonic series", reading2 pp. 10-11: upper sum and $\ln N < S_N$ (p. 10), lower sum and $S_N < \ln N + 1$ (p. 11). Correct; notes p. 3 correct. (Strictly the right inequality needs $N \ge 2$: at $N = 1$ both sides are 1. Info only; the lecture states it the same way.)
  - "Integral comparison", reading2 pp. 11-12: statement at the end of p. 11, "converge or diverge together" on p. 12. Correct apart from finding 3; notes p. 4 correct.
- Prose citations: $\int_0^1 x^{-1/2} = 2$ (p. 1), $\int_0^1 dx/x = \infty$ (p. 2), the ordering near 0 and near ∞ and $1/x$ as crossover (p. 2), the cut-in-half pictures with area 2 (p. 3), $\int_0^\infty dx/(x-3)^2$ split at 5 (pp. 3-4), check ±∞ and every singularity (p. 5), number line and Zeno (pp. 5-6), $a = 1, -1, 2$ (pp. 6-7), partial sums (p. 8), Σ1/n² and integral = 1 (p. 8), Σ1/n³ and integral = 1/2 (p. 9), start anywhere / tail (pp. 8-9), Riemann sums with Δx = 1 (pp. 9-11), "sums much harder than integrals" (p. 12), limit comparison with ratio → 1 and g positive (p. 12), notes' finite positive limit $c$ (p. 4), $\frac{1}{\sqrt{n^2+1}} \sim \frac1n$ and $\frac{1}{\sqrt{n^5-n^2}} \sim n^{-5/2}$ from $n = 2$ (p. 12), blocks teaser (p. 13). All match.
- Recomputed: $[2x^{1/2}]_0^1 = 2$; $\int_1^\infty x^{-2} = 1$, $\int_1^\infty x^{-3} = \frac12$; $\pi^2/6 = 1.6449$; careless $[-1/(x-3)]_0^\infty = 0 - \frac13 = -\frac13$, negative as the page says; $a = -1$: $\frac{1}{2}$; $a = 2$: $\frac{1}{1-2} = -1$; $\zeta(3) = 1.2020569$ (direct sum).
- Quiz 1: index 1 ($3$). Correct, $\frac{1}{1-2/3} = 3$.
- Quiz 2: index 2 ($\sum 1/n^2$). Correct; explanation right.
- Quiz 3: index 1 ($p < 1$). Correct; explanation right.
- Quiz 4: index 1 ($\ln N < S_N < \ln N + 1$). Correct (for $N \ge 2$).
- Flashcards: geometric series, definition of convergence, integral comparison ($\le$ form, correct), harmonic bounds: all correct.
- Worked example (a): 3. Correct (same as quiz 1; info only).
- Worked example (b): $\frac{1}{n^2+n} \sim \frac{1}{n^2}$, converges; telescoping $\frac1n - \frac{1}{n+1}$, $S_N = 1 - \frac{1}{N+1} \to 1$. Correct (direct sum to $10^5$: 0.99999).
- Worked example (c): $\frac{1}{\sqrt{n+5}} / n^{-1/2} \to 1$, $p = \frac12$: diverges. Correct.
- Worked example (d): $\ln 1000 = 6.9078$, so $6.91 < S_{1000} < 7.91$ (rounded; holds since $S_{1000} = 7.48547$); "about 7.49" correct.
- calcs/18.01/infinite-series.yaml: entries root-x, geometric, basel, cube-integral, harmonic-bounds, example-a, example-b, example-d, zeta3 agree with the page; pytest 10 passed. Minor (info): `zeta3` cites `reading1, p. 2`, which only says Σ1/n³ is irrational and gives no value; a note pointing to content/year-4/8.286/black-body-radiation.mdx would be clearer. `harmonic-bounds` uses the Euler-Maclaurin approximation rather than the direct sum; both give 7.4855.

## Coverage and order
- The page follows the transcript order: improper integrals of the second kind (pp. 1-5), geometric series and Zeno (pp. 5-6), divergent cases a = 1, -1, 2 (pp. 6-7), partial sums and convergence (p. 8), Σ1/n² and Σ1/n³ (pp. 8-9), harmonic series by upper and lower Riemann sums (pp. 9-11), integral comparison (pp. 11-12), limit comparison and its two examples (p. 12), blocks teaser (p. 13). The notes' $S - aS$ derivation is inserted at the geometric series; the lecture deferred it (student question, p. 8), so using the notes there is appropriate.
- Left out from the transcript: the remark that integrals from partial fractions with a factor $(x-a)^n$ in the denominator all diverge across the singularity, while square-root singularities (arcsine) can be fine (p. 5); the student's question on why the whole integral diverges (p. 4); the explanation of the "~" mix-up (p. 9, see finding 4). All optional; the partial-fractions remark is a useful one-liner.
- Left out from the notes: Σ$\frac{1}{\sqrt{n^2+10}}$ ("lots of fudge room in comparison") and Σ$\frac{n}{\sqrt{n^5-10}} \sim n^{-3/2}$ (p. 4); the page uses the transcript's two examples instead, which make the same points. Block stacking (pp. 5-7) deliberately left for the next page, as is the lecture's (p. 13 is only the teaser, mentioned).
- Added beyond the sources: the worked example, the 2-adic-style remark is the lecturer's (finding 1), and the cosmology callout.
- leadsTo 18.01 Lecture 38: _course.json lists Lecture 38 as "Taylor's Series"; the lecture promises power series "tomorrow" (p. 5) and a return to the geometric series (p. 7). Correct. Optional: the blocks problem also continues in Lecture 38, so the `why` could mention it.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in lec.html, n.html, the notes or the transcript (grep checked). Notes figures (Riemann sums, blocks) are not reproduced; the page has no figures.
- Worked example is original (own series and own N = 1000); the limit-comparison examples in the body are the lecture's, rewritten and cited, which is appropriate.
- No copied paragraphs found; wording is the author's own. Only standard terminology ("partial sum", "integral comparison", "limit comparison") is shared.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout and 8.286 Lecture 16 leadsTo: black-body-radiation.mdx has $n = g^*\frac{\zeta(3)}{\pi^2}\left(\frac{kT}{\hbar c}\right)^3$ with $\zeta(3) = 1 + \frac{1}{2^3} + \cdots \approx 1.202$ (cited there to the Lecture 16 transcript, p. 24, board) and the present photon density of about 410 per cm³. The callout ("appears in the number of photons per unit volume in black-body radiation, and so in the count of photons in the cosmic microwave background today") and the leadsTo `why` are correct and fairly attributed.
- Only the tail matters: the page's "a series can start wherever is convenient" matches p. 9 ("since I'm interested mostly in the tail behavior ... if I want an exact answer I need to start exactly at n = 1"); fine.
- The Lecture 37 transcript and the notes numbered "Lecture 36" are consistently identified in `source.readings`; the reading titles make the numbering offset clear.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the a = 2 remark is now attributed to the lecturer and names the 2-adic numbers, without the "no negative numbers" phrasing.
- **Warning 2:** the irrationality of Σ1/n³ is now dated (Apéry, 1978), with "recent" attributed to the 2006 lecture and notes.
- Info: the integral-comparison formula no longer adds a lower bound to the formula itself (the text says the difference is positive); the p. 9 slip note moved next to the Σ1/n², Σ1/n³ sentences; the harmonic bound is stated for N ≥ 2; the `zeta3` calcs entry now cites transcript p. 9. The optional omissions are left as they are.
