---
page: content/year-1/18.01/implicit-differentiation.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-5-implicit-differentiation/ (read: local copy lec5.html supplied by the page author; its first PDF link is 5q_3FDOkVRQ.pdf, matching reading2; page title "Lecture 5: Implicit Differentiation")
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec5/ (read: local copy n5.pdf / n5.txt, "Lecture 5 Implicit Differentiation and Inverses", OCW cover + 4 printed pages; text layer only, Figures 1 and 2 not rendered)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/5q_3FDOkVRQ.pdf (read: local copy t5.pdf, transcript "ocw-18-01-f07-lec05", 11 pages, checked page by page with pdftotext -f N -l N; no printed footer, so transcript page = PDF page)
  - content/year-4/8.286/age-with-vacuum-energy.mdx (read: cosmology callout and leadsTo check)
  - content/year-1/18.01/chain-rule-and-higher-derivatives.mdx and derivatives-of-sine-and-cosine.mdx (read: repetition check)
  - calcs/18.01/implicit-differentiation.yaml (read; `npm run calc:test -- -k implicit`: 15 passed)
  - data/symbols.json (read: snapshot of the working-tree file at review time; all 13 meanings scoped to implicit-differentiation, plus general and course-scoped meanings that could apply)
  - MIT 18.01 Lecture 6 materials (not read: the leadsTo claim about Lecture 6 is unverified)
verdict: pass-with-notes
---

# Review: Implicit differentiation and the derivatives of inverse functions

Transcript map (PDF pages): p. 1 programme, power rule so far for 0, ±1, ±2, …; a = m/n, y = x^(m/n), y^n = x^m. p. 2 d/dx of both sides, chain rule, n y^(n−1) y′ = m x^(m−1), solving, exponent arithmetic, ends "this equals a x^(n-1)". p. 3 Example 2, circle, y = ±√(1 − x²), top branch, explicit derivative with "blah". p. 4 a = 1/2 remark, implicit method, 2x + 2yy′ = 0, y′ = −x/y, start of comparison. p. 5 −x/√(1 − x²), lower-branch question and sign argument, start of quartic y⁴ + xy² − 2 = 0. p. 6 quadratic formula in y², up to four branches, implicit differentiation with product rule, y′ = −y²/(4y³ + 2xy), (1, 1) on the curve. p. 7 slope −1/6, x = 2 needs "star", philosophy ("if you don't know how to find a function…"), numerical methods later. p. 8 inverse functions: y = √x, g(y) = y², g(f(x)) = x, graph reflected in the diagonal. p. 9 implicit differentiation gives derivatives of inverses (stated in words), arctan, tan y = x, graph with asymptotes ±π/2. p. 10 d/dy tan y = 1/cos² y = sec² y (quotient rule, "exercise"), implicit step, cos²(arctan x), right triangle with sides x and 1. p. 11 hypotenuse √(1 + x²), 1/(1 + x²), arcsin, 1/√(1 − x²), warning about branches.

Notes map (printed pages): p. 1 Example 1 (rational powers, full exponent arithmetic), Example 2 explicit circle. p. 2 implicit circle, Example 3 (y³ + xy² + 1 = 0), inverse functions and d/dy f⁻¹(y) = 1/(dy/dx). p. 3 arctan, Figure 1 (triangle), cos² y = 1/(1 + x²). p. 4 d/dx arctan x = 1/(1 + x²), graphing an inverse function, Figure 2 (reflection in y = x). No "All rights reserved" or "Courtesy of" notice in either file.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Bracketed remark after "Power rule for rational exponents" | The transcript (p. 2) records "All right, so this equals a x^(n-1)." This is a record of what was **said**; whether it was written on the board, or whether it is a transcription error for "a x^(a-1)", cannot be checked without the video (videos are not compared under the owner's rule). The notes (p. 1) have x^(m/n − 1). | "At the end of this step the lecturer writes "$a\,x^{n-1}$"; the exponent is $a - 1$, as the notes have." | Replace "the lecturer writes" with something verifiable, e.g. "[The transcript has "$a\,x^{n-1}$" at the end of this step; the exponent is $a - 1$, as the notes have.]" Keeping the remark is right: the page should not repeat the slip. |
| 2 | warning | Cosmology callout and symbols | The callout uses $x = a/a(t_0)$, $a$ and $t$ with cosmology meanings. | data/symbols.json: `x` on this page = "The variable; for the inverse functions, the value whose arctangent or arcsine is taken"; `a` = "The exponent in the power rule, a = m/n; … (a, b)". Neither covers the callout's x (size relative to today) or a (scale factor). `t` does have a callout meaning ("In the cosmology note, cosmic time"). The course-scoped 8.286 `a` meaning does not reach this 18.01 page. | Add page-scoped meanings, e.g. for `x`: "In the cosmology note, the size of the universe relative to today, x = a/a(t₀)"; for `a`: "In the cosmology note, the scale factor a(t)" (as the chain-rule page did for α). Not a page error, but popups and "Symbols on this page" will mislabel these symbols. |
| 3 | info | Formula "Arctangent" (`at="p. 9"`) | Transcript p. 9 gives tan y = x and draws the tangent "defined between … pi/2 and -pi/2"; the range −π/2 < y < π/2 is shown by the graph, not written as part of the definition. The notes give no range. | Range written into the formula. | Correct mathematics and fairly supported by p. 9; nothing needed. |
| 4 | info | "The derivative of arcsin", branch sentence | Transcript p. 11 warns that a branch must be chosen and a picture drawn, without naming the branch (deferred to the problem set and the text). | "For the arcsine, y is taken between −π/2 and π/2, where cos y ≥ 0." | Correct (principal branch). Optionally mark it as the page's own addition ("the usual choice is…"). |
| 5 | info | Formula "Derivative of an inverse function" (`cite="reading1" at="p. 2"`) | The general formula is derived only in the notes (p. 2); the transcript (p. 9) states the idea in words and goes straight to arctan. | Cited to the notes. | Correct citation; nothing needed. |
| 6 | info | Section "Inverse functions" | Notes p. 4 also write the two identities f⁻¹(f(x)) = x and f(f⁻¹(x)) = x. | Only g(f(x)) = x. | Optional: add f(f⁻¹(x)) = x in a sentence. |
| 7 | info | source.title | OCW page title is "Lecture 5: Implicit Differentiation"; "Implicit Differentiation and Inverses" is the notes' title. | "MIT 18.01 Lecture 5: Implicit Differentiation and Inverses" | Consistent with the other 18.01 pages, which also use the notes' titles. Nothing needed. |
| 8 | info | Transcript p. 9–10 (not on page) | The lecturer says "as x goes to infinity, … x is equal to pi/2" (should be arctan x → π/2). | The page correctly says arctan x levels off towards ±π/2. | Nothing needed; the slip is not repeated. A bracketed note is not necessary since the page does not follow that sentence. |

All formula citations were checked against the PDF pages:
- "A rational power" p. 1: correct (y = x^(m/n), y^n = x^m, transcript p. 1).
- "Differentiating the equation" p. 2 and "Solving for dy/dx" p. 2: correct; the exponent form m − 1 − m + m/n matches the board arithmetic on p. 2.
- "Power rule for rational exponents" reading1 p. 1: correct.
- "Explicit derivative" pp. 3–5: correct (start p. 3, the a = 1/2 remark p. 4, −x/√(1 − x²) p. 5).
- "Implicit derivative" p. 4: correct.
- "A quartic curve" p. 5: correct (introduced at the foot of p. 5).
- "Explicit solution" p. 6, "Implicit differentiation" p. 6: correct.
- "Slope at (1, 1)" pp. 6–7: correct (set-up p. 6, −1/6 at the top of p. 7).
- "Inverse function" p. 8: correct.
- "Derivative of the tangent" p. 10, "Implicit step" p. 10: correct.
- "Derivative of arctan" p. 11: correct (triangle begins p. 10, result p. 11).
- "Derivative of arcsin" p. 11: correct.
- Prose citations: notes p. 2 for y³ + xy² + 1 = 0 (correct), notes p. 4 for the reflection picture (correct; the transcript gives it on p. 8 as well).

## Arithmetic and answer checks
- Exponent arithmetic: m − 1 − (m/n)(n − 1) = m − 1 − m + m/n = m/n − 1. Correct.
- Circle: ½(1 − x²)^(−1/2)(−2x) = −x/√(1 − x²) = −x/y. Correct. Sign argument for x > 0 on both halves correct.
- Quartic: y² = (−x ± √(x² + 8))/2 (b = x, c = −2, b² − 4c = x² + 8). Correct. Implicit: 4y³y′ + y² + 2xyy′ = 0 ⇒ y′ = −y²/(4y³ + 2xy). Correct; checked numerically against the explicit upper branch at x = 0.5, 1, 2 (e.g. −0.18959 both ways at x = 0.5). At (1, 1): 1 + 1 − 2 = 0, y′ = −1/6. Correct. (The display "−1^2" means −(1²) = −1, as intended.)
- Notes example y³ + xy² + 1 = 0: y′ = −y²/(3y² + 2xy). Correct.
- Ellipse worked example: point (√2, √2/2): 2/4 + 2/4 = 1, on the curve. x/2 + 2yy′ = 0 ⇒ y′ = −x/(4y) = −√2/(2√2) = −1/2. Correct. Original example (not in MIT).
- "Using the new derivatives": (2/3)·8^(−1/3) = (2/3)(1/2) = 1/3 ≈ 0.333; 1/(1 + 1) = 0.5; 1/√0.75 = 1.1547 ≈ 1.155. All correct. Original numbers.
- Graph caption: slope 1/(1 + x²) = 1 at x = 0; π/2 ≈ 1.571 ≈ 1.57. Correct. The dashed tan curve is restricted to |x| < 1.45, inside (−π/2, π/2). Fine.
- Quiz 1: (2/3)x^(−1/3), answer index 1. Correct.
- Quiz 2: −x/y, index 1. Correct.
- Quiz 3: 1/2, index 1. Correct.
- Quiz 4: index 1; explanation correct (point needed, formula for y not).
- Quiz 5: reflection in y = x, index 1. Correct.
- Flashcards: all four correct.
- calcs/18.01/implicit-differentiation.yaml: 15 entries cover every number on the page (rational power, exponent identity, circle, quartic point and slope, explicit-branch cross-check of the quartic slope, ellipse, tan/arctan/arcsin derivatives, π/2, worked example values). All pass. Source citations in the file match the page's. Ellipse entries cite reading2 p. 4 while marked `origin: page-own`; acceptable (the method is the lecture's).

## Coverage and order
- The page follows the transcript's order exactly: rational powers → circle explicit vs implicit (with the lower-branch point) → quartic (explicit with branches, implicit, (1, 1), x = 2, "can't differentiate what you can't find") → inverse functions (√x and y², g(f(x)) = x, reflection) → derivative of an inverse (from the notes) → arctan (graph, tan′, implicit step, triangle) → arcsin with the branch warning.
- Nothing in the lecture is left out. Minor omissions: the "x = 0 is also easy" aside (p. 7) and the remark that numerical methods come later (p. 7) are compressed into "(from the explicit formula, or numerically)"; fine.
- Additions: the ellipse worked example, the "Using the new derivatives" example, the explicit range for arctan and arcsin, the plot. All are correct.
- Repetition: the derivative of tan is not re-derived; the page links to the Lecture 3 page, whose worked example (b) does derive (tan x)′ = 1/cos² x. No overlap with the Lecture 4 page beyond a one-line recap. Good.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the notes or transcript.
- The notes' Figure 1 (triangle) and Figure 2 (reflection) are not reused; the triangle is described in words (as the lecturer does on p. 10), and the graph is generated from formulas.
- No verbatim copying found. Short phrases ("just what we hoped") are standard. The paraphrase of the lecturer's remark on p. 7 is in the page's own words and attributed.
- The MIT examples (circle, quartic, arctan, arcsin) are presented as the lecture's content; the page's own worked examples use different curves and numbers. No OpenStax or LibreTexts material.

## Notes
- Cosmology callout and leadsTo 8.286 Lecture 19: age-with-vacuum-energy.mdx defines x = a(t)/a(t₀) and gets dt = (1/H₀) x dx/√F(x) by separating variables, then integrates from x = 0 to 1, for matter, radiation and vacuum energy. The callout's "dt/dx = 1/(dx/dt)" is the same step, so the claim is correct. The framing as "the derivative of an inverse function" is the page's own reading of that step (Guth calls it separating variables); fair, as the callout does not attribute the framing to Guth.
- leadsTo 18.01 Lecture 6 ("the logarithm is the inverse of the exponential, and its derivative follows the same way"): plausible and standard, but **uncertain**, as Lecture 6 materials were not read for this review.
- Symbols: the new `sec` entry (tex `\sec`, spoken "secant", meaning "The secant, sec y = 1/cos y; so sec² y = 1/cos² y", scoped to this page) is correct. The page-scoped meanings for arctan, y, y′, d, n, m, f, g, b and t are correct for this page; see finding 2 for x and a. data/symbols.json was being modified by another process during the review (its contents changed between reads); the meanings above are from a snapshot taken at 20:48 on 2026-11-15.
- Cosmetic: quiz 4 writes $y\,'$ in the choice and $y'$ in the explanation; harmless.
- No em dashes on the page.

## Resolution (2026-11-15, by the page author)

- **Warning 1 fixed:** the bracket now reads "the transcript has a x^{n−1}", with no claim about what was written on the board; the correction to a − 1 stays.
- **Warning 2 fixed:** the meanings of `x` and `a` on this page now include their use in the cosmology note (x = a/a(t₀), a the scale factor).
- Info items: the branch ranges are kept (marked as standard choices in the text); f(f⁻¹(x)) = x is not added; the lecturer's slip about x → ∞ is not repeated.

Status set to `reviewed`.
