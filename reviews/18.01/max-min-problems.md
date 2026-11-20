---
page: content/year-1/18.01/max-min-problems.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-11-max-min/ (read: lecture page, links to transcript twzGBqPeW0M.pdf)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec11/ (read: notes PDF, printed pp. 1–5 after the cover sheet)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/twzGBqPeW0M.pdf (read: transcript, 11 PDF pages)
verdict: pass-with-notes
---

# Review: Sketching strategy and maximum–minimum problems

No errors found. Every formula, citation, number, quiz answer and the cosmology callout checked out. The findings below are warnings and info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Where to look", last paragraph (language warning) | Notes p. 1: "Both the critical point x = e and critical value y = 1/e are important. Together, they form the point of the graph (e, 1/e) where it turns around." | "both the critical point and the critical value matter, and together they form the point $(e, 1/e)$ where the graph turns" | This is close to the notes' wording. Rephrase it, e.g. "Give both: the location $x = e$ and the value $1/e$; the turning point of the graph is $(e, 1/e)$." |
| 2 | warning | Open can, first sentence | Notes, Example 3 (pp. 2–3) has five numbered steps: draw; choose variables; constraint and formula; express in r; critical points and endpoints. The wire problem (Example 4, pp. 4–5) is not set out in steps. | "The notes work two problems in a fixed order of steps (notes, pp. 2–3)", then lists 4 steps (MIT steps 1 and 2 merged) | Say "The notes work the can problem in a fixed order of steps (notes, pp. 2–3)". Merging steps 1–2 is fine, but you could mention it or keep MIT's five. |
| 3 | info | "Where to look", "five candidate places" | Transcript p. 11: "there are actually five extreme points on this picture ... There's this point, there down at minus infinity. There's this, there's this, and there's this. Only one out of five is a critical point." The points are shown by gesture. | Lists them as the ends at 0 and at infinity, the two sides of the asymptote, and the critical point | This reading matches the sketch (0 at $x = 0^+$, $-\infty$ at $1^-$, $+\infty$ at $1^+$, $(e, e)$, $+\infty$ as $x \to \infty$), so the count of five is right. Because the transcript gives only gestures, the list is necessarily the page's interpretation. Acceptable as written. |
| 4 | info | Formula "Where extremes can be" (cite reading1, p. 1) | Notes p. 1: "Look for the max and min among the critical points and endpoints ... (Watch out for discontinuities!)". The full three-part sentence is spoken in the transcript, p. 11. | Formula cites notes p. 1; the prose says "(p. 11; notes, p. 1)" | Supported by both. It is a sentence inside `\text{}`, not an equation; a `<Callout kind="key">` might suit it better. Optional. |
| 5 | info | "A function with no critical points", remark on increasing | Transcript p. 5: the derivative "can be 0 at a few places. For instance, like some cubics." | "like $x^3$ at 0" | A correct, concrete example of the lecture's point. No change needed. |
| 6 | info | Same section, "dip below 1 on the right" | Transcript p. 3: "over here, whether it's going to maybe dip below and come back up" (the side is not stated) | "on the right" | Plausible reading, but uncertain. Could say "near the asymptote $y = 1$". |

## Arithmetic and answer checks
- $(x+1)/(x+2) = 1 - 1/(x+2)$, $f' = 1/(x+2)^2$, $f'' = -2/(x+2)^3$: correct (transcript pp. 1, 4). Concavity signs (down for $x > -2$, up for $x < -2$): correct (p. 5). One-sided values $-1/0^+ = -\infty$ and $-1/0^- = +\infty$: correct (pp. 1–2). Limit 1 at $\pm\infty$: p. 3.
- $x/\ln x$: $f(1^\pm) = \pm\infty$, $f(0^+) = 0$ (p. 7); $f' = (\ln x - 1)/(\ln x)^2 = 1/\ln x - 1/(\ln x)^2$ (pp. 8–9); critical point $(e, e)$ (p. 8); $f' \to 0$ at $0^+$ (p. 10); $f'' = (2 - \ln x)/(x(\ln x)^3)$ verified by differentiation (p. 10); concavity down/up/down on $(0,1)$, $(1, e^2)$, $(e^2, \infty)$: correct; inflection $(e^2, e^2/2) \approx (7.389, 3.695)$ (p. 11). Plot points match.
- The "maybe 230" slip: transcript p. 7 says $\ln 10$ is "2.3 or so" and then "this is maybe 230 in the denominator". $10\ln 10 = 23.03$, so the bracketed correction is right and fairly worded.
- Open can: $S = \pi r^2 + 2V/r$, $r = (V/\pi)^{1/3}$, $h = r$, $S_{\min} = 3\pi^{1/3}V^{2/3}$: all match notes p. 3. Caption for $V = 1$: $r = 0.6828$, $S = 4.394$: correct.
- Two squares: $A' = x/8 - (1-x)/8$, $x = 1/2$, $A = 1/32$, endpoints $1/16$: match notes pp. 4–5.
- Closed can ($V = 1000$ cm³): $r = (1000/2\pi)^{1/3} = 5.419$ cm, $h = 2r = 10.84$ cm, $S = 6\pi r^2 = 553.6$ cm² ≈ 554: correct.
- Square and circle: $A = x^2/16 + (1-x)^2/(4\pi)$, $A' = x/8 - (1-x)/(2\pi)$, $x = 4/(\pi+4) = 0.5601$, $A_{\min} = 1/(4(\pi+4)) = 0.03501$ (checked algebraically: square $1/(\pi+4)^2$ plus circle $\pi/(4(\pi+4)^2)$); $A(0) = 1/(4\pi) = 0.0796$, $A(1) = 0.0625$; the maximum is all circle. Correct.
- Quiz: Q1 answer 1 (not increasing across $x = -2$), correct; Q2 answer 1, correct; Q3 answer 1 ($h = r$), correct; Q4 answer 1 (minimum; maximum $1/16$ at the endpoints), correct. Explanations are right. Q1's "Grand Canyon" and the body's "Mount Everest" are both in the transcript (p. 4).
- Flashcards: correct.
- calcs/18.01/max-min-problems.yaml: 23 tests pass (`pytest tests/calc -k max-min`). Info: the page's own examples (closed can, square and circle) are cited to `reading1` in the calcs file although they are original. They are marked `origin: page-own`, so this is harmless.

## Coverage and order
- The page follows the lecture order: (x+1)/(x+2) (transcript pp. 1–5), general strategy (pp. 5–7), x/ln x (pp. 7–11), introduction to max-min (p. 11). It then gives the notes' material (ln x/x language point, open can, wire) in the notes' order. The opening paragraph correctly says that the notes cover only max-min and that the sketching half follows the transcript. Notes and transcript are attributed correctly throughout.
- Small omissions (info): transcript p. 9, that when points are hard to plot you may need step 3 first; p. 3, optionally evaluating the axis crossings; p. 1, the remark about falling behind on hyperbolic functions (irrelevant). Notes Example 2 (a figure of max/min among critical points and endpoints) is covered in words.
- Additions: two original worked examples and a cosmology callout. Both are suitable.
- Repetition with curve-sketching.mdx: minimal. Lecture 10 does not treat (x+1)/(x+2) (it is not in the Lecture 10 transcript text), so this is its first appearance. ln x/x reappears only for the notes' "maximum value vs where achieved" point. The second derivative test is not repeated.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the notes PDF, the transcript, or the lecture and notes resource pages (grep checked). No figures are reused; the graphs are generated from formulas. No OpenStax or LibreTexts material.
- Wording is a rewrite except for finding 1 (close paraphrase of a notes sentence). The short phrases "trained ... freeze", "Mount Everest" and "cannot backtrack" are attributed paraphrases of the transcript and acceptable.
- Worked examples: the closed can and the square-plus-circle wire are standard textbook variants, but they do not appear in MIT's Lecture 11. Their numbers and set-ups are the page's own. Acceptable as original.

## Notes
- Cosmology callout: correct and consistent with content/year-4/8.286/closed-universe-cycloid.mdx (Lecture 9). With $a \propto 1 - \cos\theta$ and $ct \propto \theta - \sin\theta$, $da/d\theta = 0$ at $\theta = \pi$, so $\dot a = 0$ there. $\theta = \pi$ is halfway in both $\theta$ and $t$ ($ct = \pi\alpha$ of $2\pi\alpha$). "Development angle" is Guth's term according to the cycloid page. The leadsTo entry 8.286 Lecture 9 is correct.
- Symbols (data/symbols.json, meanings scoped to max-min-problems): a, x, y, d, f, f', f'', r, h, S, V, A, A', e and t all fit the page. Notes:
  - `A` ("area enclosed by the two pieces of wire") also fits the square-and-circle example.
  - `r`/`h`/`S`/`V` carry "(here cm)" units, which apply only to the closed-can example; the open can is unitless. Acceptable.
  - `θ` falls back to the generic "An angle." Optional: add a page-scoped meaning, "the development angle, a parameter of the closed-universe solution", as the cycloid page uses.
- Em dashes: none seen on the page; the title uses an en dash. (The page file was briefly absent from the working tree during this review, as expected, so `content:check` was not run here.)

## Resolution (2026-11-15, by the page author)

- **Warning 1:** the language note is rephrased in the page's own words ("'what is the maximum?' is answered by 1/e, not by e …").
- **Warning 2:** now says the notes work two problems, the first set out in numbered steps, condensed here.
- Info: "dip below 1 on the right" is now "cross the level 1 and come back"; θ now has a page-scoped meaning (the development angle). Other info notes left as they are.
