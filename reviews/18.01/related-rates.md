---
page: content/year-1/18.01/related-rates.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-12-related-rates/ (read: lecture page HTML, links to the transcript PDF)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec12/ (read: notes page HTML and lec12.pdf, printed pp. 1-4 after a cover sheet)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/YN7k_bXXggY.pdf (read: transcript, 12 pages, no printed footer numbers, so page = PDF page)
  - content/year-4/8.286/homogeneous-expansion.mdx (read, for the cosmology callout)
  - content/year-1/18.01/max-min-problems.mdx (read, for overlap)
verdict: pass-with-notes
---

# Review: More max–min, and related rates

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "A box without a top", bracket after "Least area" | Transcript p. 8 gives $A = 3\cdot 2^{1/3}V^{2/3}$ and also the dimensionless ratio $A/V^{2/3} = 3\cdot 2^{1/3}$; p. 9 gives $x/y = 2$. | "[...] The ratio below is unaffected." The next sentence is about $A/V^{2/3}$, which *is* affected (the page correctly gives $3\cdot 2^{2/3}$); only $x/y$ is unaffected. | Say "The shape ratio $x/y$ is unaffected" and add that the lecture's $A/V^{2/3} = 3\cdot 2^{1/3}$ carries the same slip. |
| 2 | warning | `data/symbols.json`, `x-dot` meaning scoped to this page | (n/a) | "the car's velocity along the road", unit ft/s. The ladder example also uses $\dot x$ (foot's speed, 0.40 m/s). | Add the ladder's foot to the meaning; widen or drop the unit (ft/s, m/s for the ladder). |
| 3 | info | "A box without a top", parenthesis | The rectangle of least perimeter sub-problem is on transcript p. 6; the "two consecutive one-variable problems / one step in 18.02" remark is on p. 9. | Single cite "p. 9" for both. | Cite "pp. 6, 9". |
| 4 | info | Bracket after "Critical point" | Transcript p. 6 (spoken): "we get 2x = 2v/x^2. So 2x^3. How did that happen to change into 2? ... guess that's wrong ... x^3 2v". | "The board briefly shows $2v/x^2$ and $2x^3$". | Uncertain what was on the board (videos not compared); "Jerison briefly writes a stray 2 ..." would be safer. Substance is right. |
| 5 | info | "Related rates: a radar trap" | Notes p. 1: $\dot D$ negative "because the car is moving in the −x direction". | "negative because $D$ is shrinking". | Fine (arguably clearer); no change needed. |
| 6 | info | Last paragraph of "filling a cone" | Notes pp. 3–4: the satellite problem is from Problem Set 3 (with $2L\dot L = 2h\dot h$, $\Delta L/\Delta h \approx h/L$); the parabolic mirror is "a problem based on similar ideas" (not stated to be on a problem set). | "two problem-set cases of the same idea". | "a Problem Set 3 case (a satellite) and a parabolic-mirror problem"; optionally state the satellite relation. |
| 7 | info | Cosmology callout | 8.286 page `homogeneous-expansion` writes $\ell_p = a(t)\,\ell_c$, $v = \dot a\,\ell_c = (\dot a/a)\,\ell_p$ (8.286 Lecture 4). | Uses $\ell$ for the physical distance. | Correct physics and correct lecture in `leadsTo`. Optionally write $\ell_p$ to match the 8.286 notation. "8.286 derives it in exactly this way" agrees with the reviewed 8.286 page; not rechecked against the 8.286 transcript here. |

## Arithmetic and answer checks
- Wire recap: $A(\tfrac12) = 2(1/8)^2 = 1/32$; limits $1/16$ at both ends (transcript pp. 2, 4). Correct.
- Box: $A = x^2 + 4V/x$, $A' = 2x - 4V/x^2 = 0 \Rightarrow x^3 = 2V$, $x = 2^{1/3}V^{1/3}$. Correct (p. 6). $A'' = 2 + 8V/x^3 > 0$ (p. 7). Correct.
- **Bracketed slip claims verified.** $y = V/x^2 = V/(2^{2/3}V^{2/3}) = 2^{-2/3}V^{1/3}$; the transcript (p. 8) says $2^{2/3}V^{1/3}$, then uses $2^{-2/3}V^{1/3}$ on p. 9. $A = 2^{2/3}V^{2/3} + 4V/(2^{1/3}V^{1/3}) = 2^{2/3}V^{2/3} + 2^{5/3}V^{2/3} = 3\cdot 2^{2/3}V^{2/3} \approx 4.762\,V^{2/3}$; the transcript (p. 8) says $3\cdot 2^{1/3}$, a slip. The page is right in both cases.
- $x/y = 2^{1/3}/2^{-2/3} = 2$. Correct (p. 9).
- Implicit: $0 = 2xy + x^2y'$, so $y' = -2y/x$; $dA/dx = 2x + 4y + 4x(-2y/x) = 2x - 4y$, so $x/y = 2$. Correct (p. 10; the transcript's spoken "8 - 8y" is garbled, and the page does not repeat it).
- 65 mph = 95.3 ft/s ≈ 95 ft/s. $x = \sqrt{50^2 - 30^2} = 40$. $\dot x = 50(-80)/40 = -100$ ft/s. Correct (notes p. 1).
- Cone: $V = \tfrac{\pi}{3}(\tfrac25 h)^2 h = \tfrac{4\pi}{75}h^3$, $\dot V = \tfrac{4\pi}{25}h^2\dot h$; $2 = \tfrac{4\pi}{25}\cdot 25\,\dot h$ gives $\dot h = 1/(2\pi) = 0.159$ ft/min ≈ 0.16. Correct (notes p. 3).
- Ladder: $y = \sqrt{25 - 9} = 4.0$; $\dot y = -3.0 \times 0.40/4.0 = -0.30$ m/s. The claim that it speeds up as the ladder flattens is right ($|\dot y| = x\dot x/y$ with $x$ growing and $y$ shrinking).
- Balloon: $\dot r = 0.010/(4\pi \cdot 0.04) = 0.0199$ m/s ≈ 0.020 m/s. At the same inflow, doubling $r$ quarters $\dot r$. Correct.
- Quiz 1: answer index 1 ("2"), correct. Quiz 2: index 1 ("After differentiating"), correct. Quiz 3: index 2 ("100 ft/s"), correct. Quiz 4: index 1 ("0.30 m/s"), correct. All explanations correct.
- Flashcards: $x = (2V)^{1/3}$, $y = x/2 = 2^{-2/3}V^{1/3}$, $A = 3\cdot 2^{2/3}V^{2/3}$. Correct.
- `calcs/18.01/related-rates.yaml`: `pytest tests/calc -q -k related-rates` gives 14 passed. Not covered (info): the implicit-differentiation identity $dA/dx = 2x - 4y$ under the constraint, and the wire's $1/16$ limit.
- Citations: every `<Formula>` checked. V/A (reading2 p. 5), critical point (p. 6), least area (p. 8, value corrected with a bracket), shape (p. 9) and implicit (p. 10) are transcript material, and the notes do not contain the box. Radar (reading1 p. 1) and cone (reading1 p. 3) are in the notes. The cite keys match: reading1 = notes, reading2 = transcript. All page numbers in the prose are correct (the only exception is item 3).

## Coverage and order
- The page follows the transcript's order: wire terminology (pp. 1–5), the open box by substitution (pp. 5–9), dimensionless answers (pp. 8–10), implicit differentiation (pp. 10–11), and the radar set-up (pp. 11–12). It then completes the radar example and adds the cone and the sensitivity remarks from the notes (pp. 1–4). The page says that the transcript leaves the radar computation for next time. Attribution between notes and transcript is correct throughout.
- Omitted (info): the transcript's p. 10 aside on dimensionless ratios in the plane (circumference² / area; the circle encloses the most area for its perimeter); the alternative routes on notes p. 2 (differentiating $D = (30^2 + x^2)^{1/2}$ is mentioned, $x = \sqrt{D^2 - 30^2}$ is not); the satellite relation on notes p. 4. Nothing important is missing.
- Overlap with `max-min-problems` (Lecture 11): the wire is only recapped in one paragraph, used for the new material in Lecture 12 (minimum value vs where, and the 1/16 being only a limit). This is not undue repetition. Minor cross-page tension (info): the Lecture 11 page says the maximum is "at the endpoints: use all the wire for one square", while this page, following Jerison p. 4, says it is reached only in the limit, outside the problem's rules. They are consistent if read carefully. A half-sentence on the Lecture 11 page could align them.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the notes PDF, the transcript or either OCW resource page. The material is CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- The prose is rewritten. Verbatim overlaps are short: the strategy list items 1–2 ("Draw a picture. Set up variables and equations." / "Take derivatives.") and "simplest algebraic form" from notes p. 2. These are short standard phrases and acceptable. Rewording item 1 would be optional.
- Worked examples: the ladder (5.0 m, 0.40 m/s, 3.0 m) and the balloon (10 L/s, 20 cm) are not in Lecture 12's notes or transcript and use the page's own numbers. Both are standard textbook problem types, which is fine. The ladder reuses a 3-4-5 triangle, like the radar; this is acceptable but not very varied.

## Notes
- Cosmology callout and `leadsTo` (8.286 Lecture 4, Hubble's law from $\ell = a\ell_c$): correct and fairly attributed (see item 7). `leadsTo` 18.01 Lecture 13 (Newton's method) matches the next lecture's topic. Not checked against the Lecture 13 source: the transcript says the second related-rates example comes "tomorrow", so Lecture 13 may open with related rates.
- Symbols: every meaning scoped to `related-rates` (a, H, v, x, y, t, d, r, D, A, h, V, y′, A′, A″, ṙ, ẋ, Ḋ, ḣ, ẏ) fits the page, apart from ẋ (item 2). ℓ, ℓ_c, ȧ and π are covered by general meanings. `content:check` reports only the missing review file for this page.
- No em dashes in the page text. The title uses an en dash.

## Resolution (2026-11-15, by the page author)

- **Warning 1:** the bracket now names x/y as unaffected and states that the dimensionless area A/V^(2/3) is 3·2^(2/3), not the lecture's 3·2^(1/3).
- **Warning 2:** the ẋ meaning scoped to this page now covers both the car (ft/s) and the ladder (m/s), with no single unit.
- Info: the rectangle remark now cites pp. 6, 9; "the board briefly shows" is now "the transcript briefly has"; the closing cases are "one from Problem Set 3". Other info notes left as they are.
