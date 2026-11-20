---
page: content/year-1/18.01/logarithm-and-areas.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-21-applications-to-logarithms/ (read: local copy lec.html, title "Lecture 21: Applications to Logarithms"; its PDF link is JXPe2J069c.pdf, matching the page's reading2; page marked Creative Commons License)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec21/ (read: local copy n.html, title "Lecture 21: Applications to Logarithms and Geometry", links lec21.pdf, marked Creative Commons License; notes.pdf/notes.txt, OCW cover + printed pp. 1-6 = PDF pp. 2-7)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/JXPe2J069c.pdf (read: local copy transcript.pdf, page-split text tp.txt, 12 PDF pages, "ocw-18-01-f07-lec21")
  - content/year-1/18.01/_course.json (read: Lecture 22 = "Volumes")
  - content/year-4/8.286/exponential-expansion.mdx (Lecture 23) and false-vacuum.mdx (Lecture 23) (read, for the callout and leadsTo; the 8.286 Lecture 23 transcript itself was not re-read)
  - calcs/18.01/logarithm-and-areas.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k "logarithm-and-areas"`: 12 passed)
  - data/symbols.json (read: all 27 meanings scoped to `logarithm-and-areas`, plus the general ȧ entry)
  - `npm run content:check`: 0 errors; the only message for this page is the missing review file
verdict: pass-with-notes
---

# Review: The logarithm from an integral, and areas between curves

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers), notes pages are the printed footers 1-6, as on the other 18.01 pages. Every page citation was checked against tp.txt and notes.txt.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The logarithm, from its integral", end values: "the notes prove both from the product rule below, notes, p. 2" | Notes p. 2 prove Claims 2 and 3 from L(ab) = L(a) + L(b) (L(2ⁿ) = nL(2); L(x) = −L(1/x)). | "the product rule". In a calculus course "product rule" normally means (uv)′ = u′v + uv′, so a reader may look for the wrong rule. | Write "from the rule L(ab) = L(a) + L(b) below" or "from the product property below". |
| 2 | info | "Products become sums": "L(1/x) = −L(x), the homework exercise, which gives the left end (notes, p. 2)" | Notes p. 2 prove L(x) = −L(1/x) as Claim 3 with no mention of homework. That it is a homework exercise is said in the transcript, p. 3 ("On your homework ... you're going to check that L(1/x) = −L(x)"). | Attributes the homework remark to the notes. | Add "(transcript, p. 3)" after "the homework exercise". |
| 3 | info | Slip bracket after "Horizontal slices" | Notes p. 4: the prose says "we subtract the right curve from the left one", the formula writes A = ∫(x_left − x_right) dy, and the middle integral is written with **dx**; the integrand used, (y + 2) − y², is right minus left, and the result 9/2 is right. | "(... the notes write "x_left − x_right" while computing right minus left, notes, p. 4.)" | Correct as far as it goes. Optional: add that the notes' sentence also says "subtract the right curve from the left one", and that their middle integral has dx for dy. |
| 4 | info | "Areas between curves", first paragraph: "(pp. 8; notes, p. 3)" | Transcript p. 8. | "pp. 8" | Typo: "p. 8". |
| 5 | info | Opening of "The logarithm, from its integral": "The differential equation y′ = 1/x is solved by an integral (transcript, p. 1; notes, p. 1)" | Transcript p. 1 frames it as solving y′ = 1/x. Notes p. 1 frame it differently: ∫xⁿ dx = xⁿ⁺¹/(n + 1) fails for n = −1, so the antiderivative of 1/x is "something else". | Cites both for the differential-equation framing. | Acceptable (the two are the same fact). Optional: "the notes put it as the missing antiderivative of 1/x". |
| 6 | info | Callout "Counting expansion in e-foldings" | The site's 8.286 Lecture 23 page (exponential-expansion.mdx) uses Guth's sample numbers: growth by about 10²⁸, ln(1.2 × 10²⁸) ≈ 65 e-folds; the site's other pages say "e-folds". | "Inflation needs at least about 60 of them: a growth by e⁶⁰ ≈ 10²⁶." Unattributed, standard figure. | Correct as a general statement (the minimum depends on the energy scale of inflation; 50-60 is the usual figure). Optional: add "(Guth's sample numbers in 8.286 Lecture 23 give about 65)" so the leadsTo target matches, and use "e-folds" for consistency with exponentials-and-logarithms.mdx and exponential-expansion.mdx. |

No formula, definition or claim was found that contradicts the MIT source.

## Arithmetic and answer checks
- Formula citations, all verified:
  - "The logarithm as an integral", reading1 p. 1: notes printed p. 1 define L(x) = ∫₁ˣ dt/t (also on the board, transcript p. 1). Correct.
  - "Derivative and starting value", reading2 pp. 1-2: L′ = 1/x at the end of p. 1, L(1) = ∫₁¹ = 0 on p. 2. Correct. L″ = −1/x² is in the notes (p. 1); the transcript only says "I'm going to take the second derivative" and "concave down every place" (p. 2). The page states it in prose, not in a Formula, so no citation issue.
  - "Splitting the integral", reading2 p. 3: transcript p. 3 (split at a). Correct.
  - "Change of variables", reading2 p. 4: t = au, dt = a du, limits a → 1, ab → b, cancellation, "the letter t ... works equally well with the letter u" all on p. 4. Correct.
  - "The limit of the area under the bell curve", reading2 p. 6: lim F(x) = √π/2 on p. 6 (board). Correct.
  - "Area between two curves", reading1 p. 3: notes printed p. 3, A = ∫ₐᵇ (f(x) − g(x)) dx. Correct (same formula on the board, transcript p. 8).
  - "Vertical slices", reading2 p. 11: the two integrals are set up on pp. 10-11 and written out on p. 11. Correct. Same form in notes p. 4.
  - "Horizontal slices", reading2 p. 12: limits −1 to 2, integrand (y + 2) − y², antiderivative y²/2 + 2y − y³/3, result 9/2, all on p. 12. Correct.
- Prose citations: L(e) = 1 and slope 1 at (1, 0) (p. 2); two reasons for L < 0 and the end behaviour (p. 3); F′, F(0) = 0, F″ = −2x e^(−x²) (p. 4), F′(0) = 1, inflection, oddness (p. 5); asymptote, erf, Fresnel, Li, Riemann hypothesis (p. 6, continuing on p. 7); "purely cultural" and the promise to prove the limit "in about a week or so" (p. 7); three things (integrand, two limits) (p. 8); "you must draw a picture" (p. 9); crossing points (p. 10); horizontal slices (pp. 11-12); right minus left and the "ends pinch" check (p. 12); volumes (notes pp. 5-6). All match.
- Crossing points: y + 2 = y² ⇒ y² − y − 2 = (y − 2)(y + 1) = 0, y = −1, 2, x = 1, 4. Correct.
- Vertical slices (not evaluated in the lecture, "I'm going to spare you that", p. 11): ∫₀¹ 2√x dx = 4/3; ∫₁⁴ (√x − x + 2) dx = 14/3 − 15/2 + 6 = 19/6; total 27/6 = 9/2. Agrees with the horizontal result (calcs `vertical-area`).
- Horizontal slices: [y²/2 + 2y − y³/3] at 2 is 10/3, at −1 is −7/6; difference 27/6 = 9/2. Correct.
- Worked example "Logarithms without a calculator": 3 × 0.693 = 2.079 (ln 8 = 2.0794); ln ½ = −0.693. Correct.
- Worked example "Two areas": (a) ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6. (b) x = y² meets x = 4 at y = ±2, and 4 ≥ y² between; ∫₋₂² (4 − y²) dy = 16 − 16/3 = 32/3 = 10.67 ≈ 10.7. Correct.
- Cosmology callout: H = ȧ/a = d(ln a)/dt, so ∫H dt = ln(a₂/a₁) = N. Correct. e⁶⁰ = 1.14 × 10²⁶ ≈ 10²⁶. Correct. Additivity of e-folds from ln(ab) = ln a + ln b. Correct.
- Plot: mathjs `log(x)` is the natural logarithm; log(0.15) = −1.90 lies inside the range [−2, 1.6]; the tangent y = x − 1 at (1, 0) has slope 1 = L′(1); the point (2.7183, 1) is (e, 1). Caption correct and says the curve is computed from the formula.
- Quiz 1: index 0 (L′ = 1/x, L(1) = 0). Correct; the explanation is right.
- Quiz 2: index 1 (minus a positive area). Correct; the other choices are false (1/t > 0; concavity does not imply the sign; L(x) < 0 there). The explanation's alternative reason is right.
- Quiz 3: index 2 (about 2.079). Correct; the distractors are ln 2, 2 ln 2 and 8 ln 2.
- Quiz 4: index 0 (1/6). Correct. It repeats worked example (a) exactly; harmless, but a different pair of curves would test more.
- Flashcards: all three are correct.
- Calcs file: 12 entries, all pass. Some `source` fields on page-own entries are loose: `efolds` cites reading1 p. 2 (the MIT notes say nothing about e⁶⁰; better `origin: page-own` with no MIT location, or a pointer to exponential-expansion), `ln2`/`ln8` cite notes p. 2 (which have ln 2ⁿ = n ln 2 but no number), `own-area-b` cites transcript p. 12. Harmless.

## Coverage and order
- Transcript order: correction to Lecture 20's average, "divide by n" (p. 1); FTC 2 recalled, y′ = 1/x solved by L(x) = ∫₁ˣ dt/t, taken as the definition of the logarithm (p. 1); L′ = 1/x, L(1) = 0, concave down, slope 1 at 1, increasing, e defined by L(e) = 1 (p. 2); ends ±∞ not discussed, two reasons for L < 0 when x < 1 (p. 3); L(ab) = L(a) + L(b) by splitting and t = au (pp. 3-4); F(x) = ∫₀ˣ e^(−t²) dt: derivatives, inflection, oddness by area (pp. 4-5); asymptote √π/2, erf, normalisations and the standard normal distribution, Fresnel integrals, Li(x) and the Riemann hypothesis, prime number theorem (pp. 6-7); student questions, "purely cultural", promise to prove the limit (p. 7); areas between curves, integrand and limits (pp. 7-9); example x = y², y = x − 2 by vertical slices (pp. 9-11) and horizontal slices (pp. 11-12); next time, volumes (p. 12).
- The page follows this order exactly and covers every segment, including the opening correction about the average.
- Omitted, all minor: the transcript's mention of the standard normal distribution as another normalisation of e^(−t²) (p. 6) and of the prime number theorem (p. 7); the notes' remark that integral-defined functions such as C(x), S(x) can be graphed and tabulated (p. 1). Not needed.
- The notes' second section, volumes of solids of revolution with the ball of radius a (V = 4πa³/3, notes pp. 5-6), is deferred to Lecture 22, and the page says so ("which the next lecture takes up (notes, pp. 5-6)"). Lecture 22 in _course.json is "Volumes", and the transcript ends "tomorrow we'll do more volumes" (p. 12). Reasonable.
- Lecturer slips, checked:
  - Transcript p. 12, "The right-hand is y + 2, and the right-hand is y^2" (the second is the left end). The page notes it correctly in brackets.
  - Notes p. 4, "x_left − x_right" while computing right minus left. Noted correctly (see finding 3 for the two related slips on the same line).
  - Not repeated by the page, so no bracket needed: p. 5 "its derivative ... is the function e^x. Sorry, e^(−x^2)" (self-corrected); p. 9 "y = x^2 ... Whoops, x = y^2" (self-corrected); p. 10 "with his formula y = x^2, I have to square y to get x" (meant x = y²).
- Claims about erf, Li and the Riemann hypothesis: erf(x) = (2/√π)∫₀ˣ e^(−t²) dt tends to 1 (transcript p. 6, "because they like the number 1"); Li(x) approximates the number of primes below x, and how closely is the subject of the Riemann hypothesis (pp. 6-7). The page's wording is faithful and mathematically correct (the Riemann hypothesis is equivalent to π(x) − Li(x) = O(√x log x)). "The lecturer calls this part cultural" matches p. 7.
- Added by the page: two original worked examples, the plot, the cosmology callout.

## Licensing
- The OCW lecture page and notes page are marked Creative Commons License. `grep -il "rights reserved\|courtesy"` over notes.txt, tp.txt, lec.html and n.html finds nothing.
- No figures are reused: the notes' Figures 1-5 are replaced by a plot generated from a formula and by descriptions in words.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short standard phrases ("the hard way", "the easy way", "right minus left", "draw a picture"). The prose is rewritten.
- The x = y², y = x − 2 example is MIT's and is presented as the lecture's example, which is correct. Both worked examples (ln 8 and ln ½ from ln 2; y = x vs y = x², x = y² vs x = 4) are the page's own.

## Notes
- Symbols: the 27 meanings scoped to `logarithm-and-areas` (a, b, A, d, e, f, F, F′, F″, g, H, L, L′, L″, n, N, t, u, x, y, y′, a₁, a₂, x_left, x_right, y_top, y_bottom) all fit the page. `a` and `t` correctly mention their second roles in the callout; `n` covers both the average in the opening and 2ⁿ. ȧ is covered by the general entry ("the rate of change of a with time"), which fits. The limits c and d in ∫_c^d are operator limits and need no entries (content:check agrees).
- Prerequisites fundamental-theorem-2, exponentials-and-logarithms and curve-sketching all exist and are relevant.
- leadsTo 18.01 Lecture 22 ("Volumes: solids of revolution by disks and shells") matches the syllabus title and the notes' deferred section. leadsTo 8.286 Lecture 23 is right: the site's Lecture 23 page (exponential-expansion.mdx) counts inflation in e-folds (ln(1.2 × 10²⁸) ≈ 65). I did not re-read Guth's Lecture 23 transcript for this review.
- No em dashes on the page (content:check reports none).
- Status `draft` is correct until the findings are resolved.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** "from the product rule" is now "from the rule L(ab) = L(a) + L(b)".
- Info: L(1/x) = −L(x) is credited to the notes, with the homework remark credited to the transcript (p. 3); the notes' slip bracket now also mentions "subtract the right curve from the left one" and the dx for dy; "(pp. 8" corrected to "(p. 8"; the notes are described as introducing L as the missing antiderivative of 1/x; the callout uses "e-folds" and mentions Guth's sample numbers (about 65). Calcs sources and the quiz are left as they are.
