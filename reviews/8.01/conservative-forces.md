---
page: content/year-1/8.01/conservative-forces.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-7-kinetic-energy-and-work/22-1-path-independence-gravity/ (read: saved HTML of segment pages 22.1–22.5; the Week 7 page lists "Lesson 22: Conservative and Non-Conservative Forces [22.1-22.5]")
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter14/ (read: Chapter 14 PDF, Section 14.2 in full, printed pp. 14-3 to 14-6. The footers of PDF pages 3–6 were checked with pdftotext -f/-l: PDF page N = printed 14-(N-1). The resource page links CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/b207d0201efe5fe63b5bc4f5a08e9cc6_fLuyZ7ayDog.pdf (read: 22.1 transcript, 3 pp.; URL matches the segment page's transcript link)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/dac0356278d865fb2de445ce22c455a8_0jWwl0bt6aU.pdf (read: 22.2 transcript, 3 pp.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/83087d2d8b0a1f62894dcdf3d245a8d5_nfawe03nvAY.pdf (read: 22.3 transcript, 2 pp., p. 2 is two lines; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/399d690630c4db9843283ae961c666dd_OwNr82QgkP8.pdf (read: 22.4 transcript, 1 p.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/e8d27b96f7bfe48e11411d8f10a8bc62_ZBlHexE8m6A.pdf (read: 22.5 transcript, 3 pp.; link matches)
verdict: pass-with-notes
---

# Review: Conservative and non-conservative forces

The page is accurate. All five `<Formula>` citations point to the right segment transcript and pages. Every notes equation number and printed page in the text checks out against the PDF footers. Every number, quiz answer and flashcard recomputes, and so does the page's own circulating-force example. `npm run calc:test -- -k conservative-forces` gives 6 passed. `npm run content:check` reports only the "no review file yet" warning for this page, which this file resolves (0 errors overall).

I found no errors. The findings are one warning about how a transcript slip is described, one warning about a symbol meaning, and info items.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Friction: the path matters", bracket after the $W_2$ formula | 22.2 p. 3: "we have a plus mu k mg x final minus x initial. Notice x final minus xa, rather, is negative." The correction ("rather") replaces $x_i$ by $x_a$; the sign stays plus. Later on the same page, "Hang on, this is actually a plus sign" corrects the sign of the $x_f + x_i$ term in the total. | "The transcript writes the second leg as "$x$ final minus $x$ initial" before correcting the sign; it means $x_f - x_a$, p. 3." | "…before correcting it to $x$ final minus $x_a$…". Optionally add that the total is then stated with a wrong sign and corrected ("Hang on, this is actually a plus sign"). The page's own formula, $-\mu_k mg\,(2x_a - x_i - x_f)$, is right. |
| 2 | warning | `data/symbols.json`, meaning of `y` scoped to `conservative-forces` | n/a | "Vertical coordinate (height)." In the circulating-force example ($\vec F = -y\,\hat i + x\,\hat j$) $y$ is a coordinate in a plane, not a height. The `x` meaning already mentions that example. | "Vertical coordinate (height); in the circulating-force example, a coordinate in metres." |
| 3 | info | "Gravity: the path does not matter", first paragraph, cites "notes, Eqs. (14.2)–(14.7), pp. 14-3–14-4" for "up then across, or across then up" | Notes Figure 14.2 and Eqs. (14.2)–(14.7): both paths go **down** from $(0, y_i)$ to $(x_f, 0)$. Path 1 has a general $d\vec r_1 = dx_1\hat i + dy_1\hat j$; path 2 is down (leg A) then across (leg B). Result $W = mgy_i$. The "up and over" versus "horizontal then vertical" paths are the transcript's (22.1 pp. 1–2). | Attributes the transcript's two paths to both sources. | Fine as a combined citation (equation numbers and pages are right). Optionally: "the notes do the same with a downward path, $W = mgy_i$". |
| 4 | info | Same section, gravity result | 22.1 p. 3 drops the minus sign when stating the result: "We get mg times y final minus y initial". | $-mg\,(y_f - y_i)$, correct, without comment. | None needed; the page does not repeat the slip. For consistency with the 22.2 bracket, it could be mentioned, but this is optional. |
| 5 | info | "Any path at all can be cut into tiny horizontal and vertical steps… (pp. 2–3)" | The staircase argument is on 22.1 p. 2; the analytic version runs from the end of p. 2 to p. 3. | pp. 2–3 | "(p. 2)" for the staircase sentence; the formula's `at="pp. 2–3"` is right. |
| 6 | info | Notation | Notes Section 14.2 writes $d\vec r$; the 22.x transcripts write $d\vec s$. | $d\vec s$ throughout. | None needed (follows the lecture). |
| 7 | info | "A force that circulates" | n/a (the page's own). | "(newtons, with $x$ and $y$ in metres)" | Strictly the coefficient is 1 N/m. Optionally "$\vec F = (1\ \text{N/m})(-y\,\hat i + x\,\hat j)$" or leave as is. |
| 8 | info | Quiz 4 explanation | 22.5 p. 2: in constrained motion "we know the path, and so we can evaluate the integral". | "When the motion is constrained, the path is known, so the work integral can be evaluated along it." | Matches 22.5. Optionally add why the unknown wire force does not matter: on a frictionless wire it is perpendicular to the path and does no work. |

## Arithmetic and answer checks
- **Formula citations (transcripts).** Gravity on any path, $-mg\int dy = -mg(y_f - y_i)$: 22.1, $d\vec s = dx\,\hat i + dy\,\hat j$ and $-mg\,\hat j$ end of p. 2, the integral on p. 3, so "pp. 2–3" is correct. Friction, path 1: 22.2, setup p. 1, $\hat i\cdot\hat i = 1$ and result p. 2, so "pp. 1–2" is correct; the transcript gives "mu k mg times x final minus x initial" without the minus sign on p. 2, as the page says. Friction, path 2: the two integrals on p. 2, the results and the total on p. 3, so "pp. 2–3" is correct. Closed path: 22.3, the sum of path 1 and reversed path 2 and "the work done by conservative force on a closed path is zero" on p. 1, ending on p. 2, so "pp. 1–2" is correct. Splitting the work $W = W_c + W_{nc}$: 22.5, $W_c$ and $W_{nc}$ introduced at the end of p. 2, the integrals on p. 3, so "pp. 2–3" is correct; "F sub mc" is on p. 3, as the page says.
- **Notes equation numbers and pages** (checked against the footers): (14.2) p. 14-3; (14.3)–(14.7) p. 14-4, so "Eqs. (14.2)–(14.7), pp. 14-3–14-4" is correct. (14.8) p. 14-4, (14.9) p. 14-5, so "(14.8)–(14.9), pp. 14-4–14-5" is correct. The boxed definition of a conservative force and "total distance traveled" are on p. 14-5, correct. (14.10)–(14.16) are all on p. 14-6, correct.
- **Other transcript page references:** 22.3 p. 1 (definition; examples inverse-square, electric, gravity near the Earth, springs), correct. 22.4 p. 1 (friction the "best example"; closed-path work nonzero "in general", possibly zero for "one specific closed path"), correct. 22.5 p. 1 (theorem, restatement of Newton's second law), p. 2 (two special cases), correct.
- **$W_2$ algebra:** $-k(x_a - x_i) + k(x_f - x_a) = -k(2x_a - x_i - x_f)$, correct (calcs identity `path-2-friction` passes). Both legs negative since $x_a > x_f$ and $x_a > x_i$, correct.
- **Worked example (a) and quiz 1:** $3.0 \times 9.8 \times 2.0 = 58.8$ J, positive because the box goes down. Correct; index 2 is "58.8 J on both paths".
- **Worked example (b) and quiz 2:** $0.30 \times 20 \times 9.8 = 58.8$ N. Straight: $58.8 \times 3.0 = 176.4 \to -176$ J. Forward and back: $58.8 \times 7.0 = 411.6 \to -412$ J. Correct; index 2 is "−412 J". The distractor −235 J ($58.8 \times 4.0$) is a plausible wrong distance.
- **Circulating force:** on the unit circle $\vec r = (\cos\theta, \sin\theta)$, $\vec F = (-\sin\theta, \cos\theta)$, which is the unit anticlockwise tangent, so $|\vec F| = 1$ N along the motion and $W = 2\pi = 6.283$ J. Quarter circle $(1,0)\to(0,1)$: $\pi/2 = 1.571$ J. Along the axes: on $y = 0$, $\vec F = x\,\hat j \perp d\vec s = dx\,\hat i$; on $x = 0$, $\vec F = -y\,\hat i \perp dy\,\hat j$; total 0. All correct; the conclusion (not conservative) follows. (Its curl is $2\,\hat k$, consistent.)
- **Quiz 3:** path independence, index 1. Correct.
- **Quiz 4:** constrained motion, index 1. Correct (see #8).
- **Flashcards:** conservative force (path independence, $\oint = 0$, gravity/springs/electric force, all named in 22.3); non-conservative force ($-\mu_k N$ times the distance, notes Eq. (14.9)); $W = W_c + W_{nc}$ (22.5). All correct.
- Quizzes 1 and 2 reuse the worked example's numbers exactly (info: other numbers would test rather than recall; earlier 8.01 reviews made the same point).
- **calcs file** `calcs/8.01/conservative-forces.yaml`: 6 entries covering every number on the page and in the quiz plus the $W_2$ identity; the `shown` strings match the page. 6 passed. Minor: the two circulating-force entries give `source` as reading5 p. 1 and reading4 pp. 1–2 although their `origin` is `page-own`; defensible (they illustrate 22.4 and 22.3), no change needed.

## Coverage and order
- Segments 22.1 (gravity, two paths, staircase, analytic integral), 22.2 (friction, two paths), 22.3 (definition, examples, closed path), 22.4 (non-conservative, closed path nonzero in general) and 22.5 (week summary: line integral, theorem, constrained motion, conservative forces, $W_c + W_{nc}$) each have a section, in MIT's order. The two worked examples sit between 22.4 and 22.5, which does not disturb the order.
- Notes Section 14.2 is covered: gravity (14.2)–(14.7), friction (14.8)–(14.9), the definition, and the closed path (14.10)–(14.16).
- Not covered (info): the opening of Section 14.2 (two kinds of mechanical energy, and Eq. (14.1) phrased as the force component tangent to the path at the point of contact); in 22.5, the remark that the work is a scalar that can be positive, negative or zero, and the emphasis that the conservative integral "is not a line integral". None of these is essential; the first belongs naturally to the next lesson.
- Additions not in MIT: the box/crate example, the circulating-force example (a useful non-friction counterexample; its points $(1,0)$ and $(0,1)$ are the same as in the notes' Figure 14.4, but the force and the calculation are the page's own), and the cosmology callout.

## Licensing
- `grep -il "rights reserved\|courtesy\|openstax\|libretexts"` over the chapter text, the five transcripts (text and PDF) and the five saved segment pages: no matches. The chapter resource page links CC BY-NC-SA 4.0.
- No figures reused (Figures 14.2–14.4 are neither drawn nor closely described). No OpenStax or LibreTexts material.
- No verbatim copying found. The prose is a rewrite; phrases such as "path independent", "closed path", "constrained motion" are standard terminology. The worked examples use the page's own numbers and situations.

## Forward links and cosmology callout
- `leadsTo` 8.01 Lecture 23: the 8.01 syllabus lists Lecture 23 as "Potential Energy" (23.1 "Introduction to potential energy"); the stated reason is accurate.
- `leadsTo` 8.286 Lecture 6: the site's `expanding-sphere` page (lecture 6) derives the conserved $E = \tfrac12\dot a^2 - \tfrac{4\pi}{3}G\rho_i/a$ and notes that $m r_i^2 E$ is kinetic plus potential energy of a test particle on the edge. The `why` is fair.
- Callout (info): correct in substance. Two small precisions, optional: in Lecture 6 the conservation of $E$ is shown from the equation of motion ($dE/dt = 0$), with the energy reading as an interpretation, so "what makes … a conserved quantity" slightly overstates the logical link; and the sign of $E$ deciding the fate is developed in Lecture 7 (as the `expanding-sphere` page's own `leadsTo` says), so "in 8.286 Lectures 6–7" would be more exact. Also, $E$ there is an energy per unit mass and per $r_i^2$, not an energy in joules.

## Symbols
- 31 meanings are scoped to `conservative-forces`; every symbol on the page has one and none is unused (content:check passes). Meanings and units are right (μ, μ_k without unit; W, W_1, W_2, W_c, W_nc in J; F, F_c, F_nc, N in N; x_a, x_i, x_f, y_i, y_f, h in m; v_A, v_B in m/s; g with 9.8 m/s²). Exception: `y` (finding #2). `E` correctly has no unit given (see the callout note). `M` and `E` are scoped to "the cosmology note", which matches their only use.

## Notes
- Transcript slips checked as asked: 22.2's missing minus sign (p. 2) is described correctly; the "x final minus x initial" bracket is described slightly wrongly (#1); 22.5's "F sub mc" (p. 3) is described correctly. 22.1 has a similar dropped minus (p. 3) that the page does not mention (#4).
- No em dashes on the page.
- I did not watch the videos; the review is against transcripts and notes, as the project allows.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the bracket on 22.2 p. 3 now says the transcript first writes "x final minus x initial" and then corrects it to x_f − x_a.
- **Warning 2:** the `y` meaning now covers the circulating-force example.
- Info: the staircase sentence cites p. 2; the callout credits Lecture 6 for the conserved E and Lecture 7 for the sign of E; the circulating force's coefficient is stated as 1 N/m. The other info items are left as they are. (The page was briefly moved out of the working tree while another lesson was committed; it was not edited in that time.)
