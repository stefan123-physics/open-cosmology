---
page: content/year-1/18.01/separation-of-variables.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-16-differential-equations/ (read: local copy lec.html; its PDF link is 60VGKnYBpbg.pdf, page marked Creative Commons License)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec16/ (read: local copy n.html, links lec16.pdf, marked Creative Commons License; notes.pdf/notes.txt, "Lecture 16: Differential Equations and Separation of Variables", OCW cover + printed pp. 1-4 = PDF pp. 2-5; printed p. 2 also checked as a rendered image, because the text layer drops symbols)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/60VGKnYBpbg.pdf (read: local copy transcript.pdf, page-split text tp.txt, 10 PDF pages, "ocw-18-01-f07-lec16")
  - content/year-1/18.01/antiderivatives.mdx (read: the c₁, c₂ correction, line 168)
  - content/year-1/18.01/_course.json (read: Lecture 18 = Definite Integrals; Lecture 17 has no entry)
  - content/year-4/8.286/exponential-expansion.mdx and cosmological-constant.mdx (read: Lecture 23 and Lecture 18 exponential expansion, for the callout and leadsTo)
  - calcs/18.01/separation-of-variables.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k separation-of-variables`: 10 passed)
  - data/symbols.json (read: all 19 meanings scoped to `separation-of-variables`)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Differential equations and separation of variables

Citation convention checked: transcript pages are PDF pages (no printed numbers), notes pages are the printed footers 1-4, as on the other 18.01 pages. Every page citation on the page was checked against tp.txt and notes.txt.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The general method", last sentence: "In Example 2, $f(x) = -x$ ... (notes, p. 2)" | Notes p. 2 (checked on the rendered page, not only the text layer): "f(x) = x; F(x) = −x²/2". The missing minus is a slip in the notes; the transcript p. 3 says "the function f(x) is -x". | Gives the correct $f(x) = -x$ but cites the notes for it without saying they differ. | Add the slip note the page already uses elsewhere, e.g. "(transcript, p. 3; the notes write $f(x) = x$, a dropped minus sign, notes, p. 2)", or cite the transcript only. Rule 4 of AGENTS.md. |
| 2 | warning | Coverage: end of the page | Transcript p. 10 and notes p. 4 end with a short Exam 2 review: six topics (linear/quadratic approximations, sketching, max/min, related rates, antiderivatives and separation of variables, mean value theorem); Jerison says it is usually the hardest test and the questions will be of the same type as last year's. | The exam review is not mentioned. Only the "main theme" sentence from inside that review is kept. | Add one or two sentences, e.g. "The lecture ends with a short review for the second exam, which covers the unit's six topics: ..." (topics are standard terms, no copying problem). This also gives readers a natural checklist of the unit's pages. |
| 3 | warning | Worked example "A solution that runs out" | n/a (page's own example) | The problem asks "For which $x$ does the solution make sense?" but the steps never state the answer; they say it "becomes infinite at $x = 1$" and "you have to read off where they live". | State it: "the solution through $y(0) = 1$ lives on $x < 1$ (the interval containing the starting point); the other branch $x > 1$ is not connected to it." |
| 4 | info | "A geometric example", undefined at $x = 0$ | Transcript p. 8: "knowing the value here and knowing the rate of change doesn't specify this function ... the rate of change was not specified. It's undefined at x = 0." | "So knowing the value and the slope there does not fix the solution" | "the slope there" reads as if the slope at $x = 0$ were given; the point is that the equation gives no slope there. Suggest "So knowing the value at $x = 0$ and the equation does not fix the solution". |
| 5 | info | "Remarks on constants and lost solutions": "The lecture adds three remarks (transcript, pp. 4–6)" | Transcript pp. 4–5 has four pieces of commentary: the lost solution (with $\ln\lvert y\rvert$), the two constants, the constant becoming multiplicative, and Example 1 redone by separation (p. 5). | Three remarks; the fourth is moved to "The simplest kind" with "(p. 5)". | Fine as a regrouping (it is labelled with its page). Optional: "three remarks (and redoes Example 1 by separation, see above)". |
| 6 | info | "A first real example", annihilation operator "(... p. 2)" | The name "annihilation operator" is on transcript p. 1 (and notes p. 1); the creation operator and the ground state of the harmonic oscillator are on p. 2. | Cites p. 2 only. | "pp. 1–2". |
| 7 | info | Opening paragraph, sign correction | Transcript p. 1: "I claimed last time that c_1 - c_2 was +1/2. But, actually, it's -1/2 ... c_1 - c_2 + 1/2 = 0. So c_1 - c_2 = 1/2." The last sentence contradicts the correction (a slip, in the lecture or the transcript). | "$c_2 - c_1 = \tfrac12$", matching the antiderivatives page. | The page's value is correct ($\tfrac12\sin^2 x + c_1 = -\tfrac12\cos^2 x + c_2$ gives $c_2 - c_1 = \tfrac12$). Optional bracket: "(the transcript's final sentence repeats the old sign)". |
| 8 | info | "Remarks", last sentence about applications | Transcript p. 6: equations "telling you something about the balance between an acceleration and a velocity. If you have a falling object, it might have a resistance." | "a balance, for example between the acceleration and the air resistance of a falling object" | Fair paraphrase (resistance depends on velocity). No change needed. |
| 9 | info | Cosmology callout and leadsTo | 8.286 Lecture 23 (exponential-expansion.mdx) derives $a \propto e^{\chi t}$, $\chi = \sqrt{8\pi G\rho_f/3}$, for the false vacuum of inflation. The dark-energy future, $a \propto e^{H_\text{vac}t}$, is 8.286 Lecture 18 (cosmological-constant.mdx). | Callout covers both inflation and dark energy; leadsTo lists only 8.286 Lecture 23. | Physics is correct (constant $H$ ⇒ $da/a = H\,dt$ ⇒ $a = a_0e^{Ht}$; doubling time $\ln 2/H$). Suggest adding a leadsTo to 8.286 Lecture 18 for the dark-energy half, and optionally noting that Guth calls the constant rate $\chi$ in Lecture 23. "Heading towards as dark energy takes over" assumes the dark energy is constant vacuum energy, as in Guth's 2013 lectures; a short hedge ("if the dark energy is a cosmological constant") would match the cosmological-constant page's remark about 2024 hints of time variation. Also "H stays constant" is exact for a flat universe; with curvature $H$ only approaches a constant. |

No errors found. Every formula matches its cited location:
- "Example 2", $dy/dx + xy = 0$, i.e. $dy/dx = -xy$: transcript pp. 1–2 (board); also notes p. 1.
- "Separate and integrate", $dy/y = -x\,dx \Rightarrow \ln|y| = -x^2/2 + c \Rightarrow y = ae^{-x^2/2}$: notes p. 1 (with $a = \pm e^c$ and $a = 0$ allowed).
- "Separable equation", $dy/dx = f(x)g(y) \Rightarrow dy/g(y) = f(x)\,dx \Rightarrow H(y) = F(x) + c$: notes p. 2 (the notes add $h = 1/g$; the page skips that intermediate name, fine); $y = H^{-1}(F(x) + c)$ also notes p. 2 and transcript p. 3.
- "Example 3", $dy/dx = 2y/x \Rightarrow \dots \Rightarrow y = ax^2$: transcript p. 7 (equation, separation, exponentiation) and p. 8 ("the general solution is y = ax^2"). The board omits absolute values at first and adds them on p. 8; the page uses them throughout, as the notes do.
- "Example 4", $dy/dx = -x/(2y) \Rightarrow 2y\,dy = -x\,dx \Rightarrow y^2 = -x^2/2 + c \Rightarrow x^2/2 + y^2 = a^2$: transcript p. 9, step for step. The notes (p. 4) write the equivalent $y\,dy = -\tfrac{x}{2}dx$, $x^2/4 + y^2/2 = c$.

Slip notes, both verified:
- Notes p. 3 list "y = −2y² (a = −2)": present in notes.txt; the page's correction to $y = -2x^2$ is right.
- Notes p. 4 "the ratio of the x-semi-major axis to the y-semi-minor axis is 2": for $x^2/4 + y^2/2 = c$ the semi-axes are $2\sqrt c$ and $\sqrt{2c}$, ratio $\sqrt2$; transcript p. 9 gives $\sqrt2\,a$ and $a$. The page's correction is right.

## Arithmetic and answer checks
- $\frac{d}{dx}(ae^{-x^2/2}) = -axe^{-x^2/2} = -xy$: correct.
- $y(0) = 3 \Rightarrow a = 3$: correct (transcript p. 5).
- Half-lives: $\lambda = \ln 2/8.0 = 0.08664$ per day, shown as 0.0866: correct. $e^{-3\ln 2} = 1/8$: correct.
- Example 3 check $2ax = 2ax^2/x = 2y/x$: correct. Example 4: product of slopes $(-x/2y)(2y/x) = -1$: correct. Semi-axes of $x^2/2 + y^2 = a^2$: $\sqrt2\,a$ and $a$; vertical tangent at $y = 0$, $x = \pm\sqrt2\,a$: correct. Explicit form $y = \pm\sqrt{a^2 - x^2/2}$: correct (transcript p. 10).
- $dy/dx = y^2$, $y(0) = 1$: $-1/y = x + c$, $c = -1$, $y = 1/(1 - x)$, $y' = 1/(1-x)^2 = y^2$: correct; blows up at $x = 1$ (see row 3 for the unstated interval).
- Callout: $a_0e^{H(t + \ln 2/H)} = 2a_0e^{Ht}$: correct.
- Plot: four members $a = 2, 1, 0, -1$ of $y = ae^{-x^2/2}$, all inside the range $[-1.5, 2.5]$; caption "y(0) = a" correct.
- Quiz 1 (index 1, $x^2y^3$): correct; the other three do not factor as $f(x)g(y)$. Quiz 2 (index 1, $a = 3$): correct. Quiz 3 (index 2, $y = 0$): correct; with $\ln|y|$ the negative solutions are not lost, so the question is unambiguous. Quiz 4 (index 2, 1/8): correct. All explanations right.
- Flashcards: all three correct ($H' = 1/g$, $F' = f$ match notes p. 2).
- calcs/18.01/separation-of-variables.yaml: 10 entries, all pass, covering every number on the page. Minor (info): the page-own entries `decay-rate`, `decay-24-days`, `decay-solves`, `blow-up-solves` and `exponential-expansion` carry `source: {cite: reading1, ...}` although the notes contain none of them; `origin: page-own` already says so, but the `source` could be dropped or pointed at the formula they extend. The `c = -1` step and the blow-up point $x = 1$ are not stored (simple, but the page's "for which x" answer would be once added).

## Coverage and order
- The page follows the transcript's order: sign correction for Lecture 15 (p. 1), $dy/dx = f(x)$ (p. 1), Example 2 with the annihilation operator, separation, $\ln y$, exponentiating, check, normal distribution (pp. 1–3), the general method with implicit/explicit forms (p. 3), remarks (pp. 4–5), general solution and starting value, student questions (pp. 5–6), Example 3 and the $x = 0$ warning (pp. 7–9), Example 4 with ellipses, explicit halves and the vertical tangent (pp. 9–10), main theme (p. 10). Only regrouping: Example 1 by separation (p. 5) is moved to the first section (row 5).
- Left out: the Exam 2 review (row 2, warning). Minor and acceptable: "substitution / advanced guessing" as the only antiderivative technique (p. 1), the creation operator (p. 2), the student question "can you solve for x instead of y" (p. 6), and the remark that later examples show $y$ as a function of $x$ is not always the best view (pp. 6–7, partly kept in "an ellipse is not a function").
- Added: original worked examples (radioactive half-life; $dy/dx = y^2$ blow-up), a plot generated from the formula, and the cosmology callout.

## Licensing
- No "rights reserved" or "Courtesy of" text in notes.txt, tp.txt, lec.html or n.html (grep). Both OCW resource pages are marked Creative Commons License.
- The notes' three figures (bell curve, tangent/ray sketch, ellipses and parabolas) are not reproduced; the page has its own plot drawn from $y = ae^{-x^2/2}$.
- No verbatim copying beyond standard terminology ("separate the variables", "general solution", "annihilation operator", "implicit"/"explicit"). The remarks and warnings are rewritten in the page's own words.
- No OpenStax or LibreTexts material. Worked examples are original (own situations and numbers); $dy/dx = y^2$ is a standard textbook example but not taken from MIT's lecture.

## Notes
- Symbols: the 19 meanings scoped to `separation-of-variables` (λ, a, H, c, x, y, t, d, e, f, g, F, N, a₀, F′, c₁, c₂, N₀, H′) are accurate for their uses on the page, including the double uses of `a` (family constant / scale factor) and `H` (antiderivative / Hubble rate), which are both named. c₁ and c₂ correctly cover both the opening correction (½sin²x + c₁, −½cos²x + c₂, as on the antiderivatives page) and the two-constants remark. Minor (info): `t` has unit "s (here days)", which fits the half-life example but not the callout's cosmic time; "s (days in the half-life example)" would be exact. `content:check` reports no symbol gaps.
- leadsTo 18.01 Lecture 18 = Definite Integrals matches `_course.json` (Lecture 17 is the exam, with no syllabus entry); Lecture 18 starts Unit 3 (Integration), so "the second half of the course" is fair. leadsTo 8.286 Lecture 23 matches exponential-expansion.mdx (see row 9 for adding Lecture 18).
- Frontmatter: source and reading URLs match the OCW pages (transcript link 60VGKnYBpbg.pdf on lec.html; notes resource lec16/ links lec16.pdf). The notes title "Differential Equations and Separation of Variables" matches the PDF. The internal link `/courses/18-01/antiderivatives` uses the same form as other 18.01 pages.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** f(x) = −x is now cited to transcript p. 3, with a note that the notes (p. 2) print f(x) = x.
- **Warning 2:** the page now mentions the short exam-2 review of six topics at the end of the lecture (transcript p. 10, notes p. 4).
- **Warning 3:** the worked example now says the solution makes sense for x < 1.
- Info: the x = 0 sentence is reworded (the equation gives no slope there); the remarks paragraph mentions Example 1 redone by separation; the annihilation operator is cited to pp. 1–2; the callout is hedged (if dark energy is a cosmological constant; constant H exact for a flat universe); a leadsTo to 8.286 Lecture 18 (cosmological constant) is added; the `t` meaning no longer has a unit. The calcs sources for the page's own examples are left as they are.
