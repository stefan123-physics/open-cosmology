---
page: content/year-1/18.01/newtons-method.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-13-newtons-method/ (read: local copy lec13.html; its PDF link is sRIDVAcoG5A.pdf, page marked Creative Commons License)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec13/ (read: local copy lec13notes.html and n13.pdf/n13.txt, "Lecture 13: Newton's Method and Other Applications", OCW cover + printed pp. 1-6; text layer only, garbled symbols reconstructed from context; printed p. 5 = PDF p. 6 confirmed with pdftotext -f 6 -l 6)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/sRIDVAcoG5A.pdf (read: local copy t13.pdf, page-split text t13pages.txt, 13 pages, "ocw-18-01-f07-lec13")
  - content/year-4/8.286/closed-universe-cycloid.mdx and age-closed-universe.mdx (read: cosmology callout and leadsTo check)
  - content/year-1/18.01/_course.json (read: Lecture 14 = Mean Value Theorem)
  - calcs/18.01/newtons-method.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k newtons-method`: 25 passed)
  - data/symbols.json (read: all meanings scoped to `newtons-method`)
verdict: pass-with-notes
---

# Review: A ring on a string, and Newton's method

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | data/symbols.json, meanings scoped to this page: `a` and `t` | n/a (site data) | `a` = "horizontal distance to the right end of the string" (m); `t` = "Time" (unit min). The cosmology callout uses $a \propto 1-\cos\theta$ (scale factor) and $t \propto \theta-\sin\theta$ (cosmic time), so the popups give the wrong meaning/unit there. `t` in min also does not fit the radar rate (ft/s). | Widen the page-scoped meanings to cover both uses on this page (e.g. `a`: "for the ring, ...; in the cosmology note, the scale factor of the closed universe"; `t`: "Time (minutes in the cone example; cosmic time in the cosmology note)", drop the single unit or make it per use). |
| 2 | info | Formula "Constraint differentiated", cite reading1 p. 5 | Notes p. 5 write the second term as $+\frac{x-a+(y-b)y'}{\sqrt{(x-a)^2+(y-b)^2}}$ (and the constraint with $(x-a)^2$, $(y-b)^2$). | $-\frac{(a-x)+(b-y)y'}{\sqrt{(a-x)^2+(b-y)^2}}$, i.e. the transcript's form (p. 9). | Mathematically identical. Either cite `reading2` at "pp. 8-9" (the form shown is the board's) or keep reading1 and accept the trivial sign rearrangement. |
| 3 | info | "Balance at the lowest point" paragraph | Transcript p. 9: "the two angles from the horizontal are the same"; notes p. 6: angles "with the vertical". | Angles with the vertical (follows the notes). | Fine (both statements are equivalent since complementary angles are then equal too). No change needed. |
| 4 | info | Newton intro, "close to how calculators find square roots" | Transcript p. 11: Newton's method is "at the heart of many of the ways in which calculators work" (said about solving equations in general, with √5 as the example). | "close to how calculators find square roots" | Optional: "close to how calculators work" to match the claim's scope. |
| 5 | info | Opening bracket "[On the board the cone's answer is first given 'per second'; a student points out ...]" | Transcript p. 4: Jerison says "feet per second"; a student's remark is [INAUDIBLE]; he replies "I guess it's per minute ... Thank you." | Says it was given "on the board" and that a student pointed it out. | Supported in substance. Whether it was written on the board cannot be checked from the transcript; "first given 'per second'" without "On the board" would be strictly verifiable. |
| 6 | info | Cosmology callout | n/a (8.286) | Newton step $\theta_{n+1}=\theta_n-(\theta_n-\sin\theta_n-c)/(1-\cos\theta_n)$ "solve it to any accuracy". | Correct, but $f'(\theta)=1-\cos\theta$ vanishes at $\theta=0$, so a start at $\theta_0=0$ fails and small $c$ needs a sensible start (e.g. $\theta_0\approx(6c)^{1/3}$). A half-sentence ("from a reasonable starting guess") would tie in nicely with Warning 2. Also "Kepler's equation ... has the same form" is exact only with eccentricity 1 ($M = E - e\sin E$); optional "(with eccentricity 1)". |
| 7 | info | Worked example "Where cos x = x", step "Why the method is needed" | n/a (page's own example) | "No formula built from the usual functions solves cos x = x" | Widely stated; I did not verify a proof of non-elementarity (uncertain). Safer: "No known formula ...". |

No errors found: every formula's physics and notation match the cited source, and the page numbers check out (constraint: transcript p. 7; balance and sin α = sin β: transcript p. 9; position formulas and Lagrange remark: notes p. 6; Newton's formula, √5 recursion, 9/4 and 161/72: transcript p. 12; error table: transcript pp. 12-13; √3 example and "digits double": notes pp. 1-3; limit x∞: notes pp. 3-4; warnings: notes p. 4).

## Arithmetic and answer checks
- Radar ($\dot x = -100$ ft/s, transcript p. 2) and cone ($\dot h = 1/(2\pi)$ ft/min: $2 = \frac{\pi}{3}(\frac25)^2\cdot3\cdot25\,\dot h = 4\pi\dot h$, transcript pp. 3-4): correct.
- √5 by Newton: $x_1 = 9/4$, $x_2 = 161/72 = 2.2361111$, $x_3 = 51841/23184 = 2.23606798$; √5 = 2.23606798. Errors: 0.236 (≈ 2×10⁻¹), 0.0139 (≈ 10⁻²; transcript says "about 10⁻²"), 4.31×10⁻⁵ (≈ 4×10⁻⁵), 4.2×10⁻¹⁰ (transcript "10⁻¹⁰ or so"). Table matches transcript pp. 12-13.
- Notes' √3 table (p. 3): iterates 1, 2, 7/4, 97/56, 18817/10864 with errors 3×10⁻¹, 2×10⁻², 10⁻⁴, 3×10⁻⁹ (the text layer misaligns the rows; the error column belongs to x₁...x₄). Page's "roughly doubles" is a fair, slightly more careful version of the notes' "doubles".
- Ring position formulas: rederived from notes p. 6: $b-2y = L\cos\alpha = \sqrt{L^2-a^2}$, $x = -ay/(b-2y) = \frac a2(1 - b/\sqrt{L^2-a^2})$. Page formula correct.
- Ring example (L = 6, a = 4, b = 1): sin α = 2/3, α = 41.81°; √20 = 4.4721; y = −1.736; x = 1.553; pieces √(1.553² + 1.736²) = 2.329 and √(2.447² + 2.736²) = 3.671, sum 6.000; x/2.329 = 0.667 = sin α (balance holds). "Left of the middle, towards the lower end" correct (left end is lower since b > 0). L exceeds the end-to-end distance √17 ≈ 4.12, so the set-up is physical.
- cos x = x from 1: x₁ = 0.75036, x₂ = 0.73911, x₃ = 0.7390851; root 0.7390851332. Correct.
- Cube root of 2 from 1: x₁ = 4/3, x₂ = 1.26389, x₃ = 1.259933; true 1.259921. Correct.
- Graph caption: from x₀ = 3, 3/2 + 5/6 = 2.333. Correct.
- Quiz 1 (answer index 1, $x_n - f/f'$): correct. Quiz 2 (index 1, 9/4): correct. Quiz 3 (index 2, digits double): correct, explanation consistent with lecture and notes. Quiz 4 (index 1, equal angles with the vertical): correct.
- Flashcards: all three correct ($-\sqrt3$ from $x_0=-1$ is the notes' Warning 1).
- calcs/18.01/newtons-method.yaml: 25 entries, all pass; it covers every computed number on the page. The radar and cone values are quoted from the previous page and not recomputed here (acceptable; they are in the related-rates calcs if that page has them).

## Coverage and order
- Page follows the transcript's order: finish radar and cone (pp. 1-4), student's "rate vs volume" question (pp. 4-5), ring on a string (pp. 5-10), Newton's method for √5 (pp. 11-13). The notes put Newton first and the ring second; following the lecture is correct.
- Material from the notes only (√3 example, limit argument, both warnings, position formulas, Lagrange multipliers) is labelled "notes" each time. Attribution of notes vs transcript material is accurate throughout.
- Left out (minor, acceptable): the transcript's remark (p. 8) that the ends must always be checked and that the second-derivative test would be "a total catastrophe" here (partly covered by "the ends of the curve are higher"); the closing student question on the algebra of the √5 step (p. 13). Jerison's remark that cubics have no solution formula (p. 11, a slip: Cardano's formula exists) is rightly not repeated.
- Added: two original worked examples (cos x = x, cube root of 2), an original ring example, an interactive tangent-line plot and a cosmology callout. Fine.

## Licensing
- The notes' ring-on-a-string page (printed p. 5) carries a footnote attached to "string": "© 1999 and © 2007 David Jerison". This is an ordinary author copyright line, **not** an "All rights reserved" notice, and there is no "Courtesy of" credit. The OCW lecture-notes resource page is marked with the course's Creative Commons licence, and the PDF's cover sheet points to OCW's terms. So this material is Jerison's copyright licensed under OCW's CC BY-NC-SA, and the site's rule (never use material marked "All rights reserved") does not forbid it. The page rewrites the problem in its own words, draws no copy of Figure 6, and credits the notes as reading1, which satisfies attribution. Optional: mention in the text or credits that the ring-on-a-string notes are © David Jerison (1999, 2007), licensed via MIT OCW.
- No "rights reserved" or "Courtesy of" text found in n13.txt or t13pages.txt (grep).
- No verbatim copying beyond short attributed quotes ("one of the greatest applications of calculus", "as good an approximation to √5 as you'll ever need") and standard phrases ("unexpected root", "fail completely", "hidden symmetry"). No OpenStax/LibreTexts material.
- Worked examples are original (own numbers; the ring example uses the notes' general formula with new values).

## Notes
- Cosmology callout and leadsTo: correct. In 8.286 Lecture 9 (closed-universe-cycloid.mdx, age-closed-universe.mdx) the closed universe is $ct = \alpha(\theta-\sin\theta)$, $a/\sqrt k = \alpha(1-\cos\theta)$, and closed-universe-cycloid.mdx itself says $\theta-\sin\theta = ct/\alpha$ cannot be solved in closed form but can be solved numerically. The callout's Newton formula is right; that Newton's method is the tool is the page's own (reasonable) suggestion, not attributed to Guth, which is fair. See row 6 for a starting-guess caveat. leadsTo 18.01 Lecture 14 = Mean Value Theorem matches `_course.json`.
- Symbols: the 30 meanings scoped to `newtons-method` are otherwise accurate (α, β with the vertical; b, L in m; ẋ ft/s; ḣ ft/min; x_n, x_{n+1}, x_∞, θ_n, θ_{n+1}, m, f, f′, y′, y₀, c). Only `a` and `t` need a second use (row 1). "Development angle" for θ matches the 8.286 pages.
- Bracketed notes: the per-second/per-minute bracket (transcript p. 4) and the ellipse bracket (transcript p. 8; notes p. 5) are both supported. The ellipse bracket has no page reference; consider adding "(p. 8)". The transcript writes "eclipse" for "ellipse" (transcription slip), which the page correctly ignores.

## Resolution (2026-11-15, by the page author)

- **Warning (symbols):** the page-scoped meanings of a and t now cover the cosmology callout (scale factor, cosmic time) and both time units, with no single unit.
- Info: "No known formula solves cos x = x"; the ellipse bracket cites p. 8; the calculator remark follows the transcript's wording; the callout now says Newton's method needs a sensible first guess (not θ = 0) and that Kepler's equation has this form only for eccentricity 1. Other info notes left as they are.
- Licensing: the reviewer confirmed the "© 1999 and © 2007 David Jerison" line is an ordinary copyright line under OCW's CC licence, not "All rights reserved".
