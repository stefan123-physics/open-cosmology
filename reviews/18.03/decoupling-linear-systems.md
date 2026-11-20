---
page: content/year-2/18.03/decoupling-linear-systems.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-30-decoupling-linear-systems-with-constant-coefficients/ (read: local copy lec.html; title "Lecture 30: Decoupling Linear Systems with Constant Coefficients"; its only .pdf link is 0b85a7757e153e1c67dac2fcd031dd2f_uNOyxQwIV8o.pdf, matching the page's `reading1` URL; title matches `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/0b85a7757e153e1c67dac2fcd031dd2f_uNOyxQwIV8o.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L30", 4 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page read separately)
  - content/year-2/18.03/_course.json (read: Lecture 31 = "Non-linear Autonomous Systems"; the Lecture 31 transcript was not read)
  - calcs/18.03/decoupling-linear-systems.yaml (read; `npm run calc:test -- -k decoupling-linear`: 7 passed)
verdict: pass-with-notes
---

# Review: Decoupling linear systems

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries: p. 1 n × n but 2 × 2 for calculations, homogeneous system, two methods so far (eigenvectors; "royal road" e^{At}x₀, which in practice needs the fundamental matrix), a third method that "saves no work", begged by engineering departments, language-course analogy, linear change of variables, decoupled u′ = k₁u, v′ = k₂v, solved by c₁e^{k₁t}, c₂e^{k₂t}, coupled vs decoupled, physical insight, ice-cube tray set-up (areas 1 and 2, x and y the heights), flow ∝ hole area × velocity, velocity from the pressure difference ∝ height difference; p. 2 x′ = c(y − x), rate of change of 2y = c(x − y), c = 2, the system, v = x − y (height difference), u = x + 2y (total water), u′ = 0, v′ = −3v, u = c₁, v = c₂e^{−3t}, x = ⅓(u + 2v), y = ⅓(u − v), vector form with (1, 1) and (2, −1); p. 3 general method, real and complete (non-defective) eigenvalues, real symmetric matrices, equilibrium problems, D = decoupling matrix, need x in terms of u, E (= D⁻¹) with the eigenvectors as columns, new i and j, (1, 0) ↦ α₁ and (0, 1) ↦ α₂, "three-quarters of the civilized world" defines eigenvectors by Aα = λα, geometric meaning (stretched, shrunk, or reversed); p. 4 the stretching factor, AE = (Aα₁ Aα₂) = (λ₁α₁ λ₂α₂) = E diag(λ₁, λ₂), substitution Eu′ = AEu = EΛu, u′ = Λu, u = c₁e^{λ₁t}, v = c₂e^{λ₂t}, tray again: λ² + 3λ = 0, α₁ = (1, 1), α₂ = (−2, 1), E, det 3, D = ⅓(1 2; −1 1), u = ⅓(x + 2y), v = ⅓(−x + y), differ by factors ⅓ and −⅓, same equations.

Formula locations: "Linear change of variables" p. 1; "Decoupled system" p. 1; "Ice-cube tray" p. 2; "The decoupled tray" p. 2; "Back to the heights" p. 2; "Matrix of eigenvectors" p. 3; "Eigenvector equation" p. 3; "AE = EΛ" p. 4; "Decoupled form" p. 4; "Decoupling matrix of the tray" p. 4. All correct. (The coefficient letters a, b, c, d in "Linear change of variables" are not spoken in the transcript; what Mattuck wrote on the board cannot be checked from the text. Uncertain, harmless.)

Prose citations also checked: two methods and the royal road p. 1; engineering departments p. 1; physical meaning p. 1; tray set-up p. 1; flow and pressure pp. 1–2; 2y and c = 2 p. 2; decoupling by insight p. 2; real and complete, symmetric, equilibrium p. 3; D and E p. 3; new basis vectors p. 3; other definition pp. 3–4; substitution and the tray again p. 4. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Another definition of eigenvectors": "an eigenvector is a vector whose direction it keeps, stretching it by the factor $\lambda$"; flashcard 3 "keeps the direction of $\vec\alpha$ and stretches it by $\lambda$" | pp. 3–4: the vector is "kept in the same direction but stretched? Or, maybe its direction is reversed and it is stretched or it shrunk"; λ is "the stretching factor or the shrinking factor". | Only "keeps the direction, stretches". Incomplete exactly in the page's own example: the tray has λ = −3 (direction reversed) and λ = 0 (vector sent to zero). | "a vector that $A$ keeps on its own line, multiplying it by $\lambda$ (stretched or shrunk, reversed if $\lambda < 0$)"; same in the flashcard. |
| 2 | warning | Quiz 2: "Which matrix decouples the system, in $\vec x = E\vec u$?" (answer: $E$) | p. 3: the **decoupling matrix** is D (u = Dx); E = D⁻¹ is the matrix needed for the substitution. | The page itself (p. 3 paragraph, summary) calls D the decoupling matrix, but the quiz says E "decouples the system". A reader who learned the term may pick neither or doubt the key. | Reword: "In the substitution $\vec x = E\vec u$ that decouples the system, what is $E$?" |
| 3 | info | "The substitution": $E\vec u\,' = AE\vec u = E\Lambda\vec u$ | p. 4: "that funny diagonal matrix with the lambdas". | Λ is used in the body without being named; it is defined only in the frontmatter summary. | Add "with $\Lambda = \mathrm{diag}(\lambda_1, \lambda_2)$" after the AE = EΛ formula. |
| 4 | info | "Back to the heights": "$\frac13c_2(2, -1)e^{-3t}$: the eigenvectors appear" | p. 2 uses (2, −1); p. 4 the general method finds α₂ = (−2, 1). | Both correct (one is −1 times the other); the page does not remark on it. | Optional: "(a multiple of the eigenvector $(-2, 1)$ found below)". |
| 5 | info | Opening and general method | p. 1: "Everything I say today is going to be for n-by-n systems", 2 × 2 only for calculation. | The page works 2 × 2 throughout without saying the method holds for n × n. | Optional one clause. |

Lecturer slips and transcript garbles checked:
- p. 2, the tray system as first spoken: "x prime equals minus 2x, you have to write them in the correct order, and y prime equals ... x minus y": the "+ 2y" is missing in the spoken text (it was presumably on the board). The page writes $x' = -2x + 2y$, which follows from the derivation on pp. 1–2: $x' = c(y - x)$, $2y' = c(x - y)$, $c = 2$. Correct, and the derivation is consistent: x is the area-1 compartment, y the area-2 one.
- p. 4: the diagonal matrix is twice read as "lambda one, lambda two, zero, zero" and once correctly as "lambda one, zero, zero, lambda two"; the page writes diag(λ₁, λ₂) correctly.
- p. 4: the eigenvector equation for λ = 0 is garbled ("goes the eigenvector, minus two ... minus 2 a1 plus"), and Mattuck explains he uses a₁, b₁ instead of a₁, a₂. The page gives the results α₁ = (1, 1), α₂ = (−2, 1), which are right.
- p. 2 "psyche out", "naÄ«ve" (encoding), "multiply" for "multiple"; p. 4 "Ev's and Ev's", "my new and better you": garbles, not repeated.
- None of these needs a bracketed note on the page.

Ice-cube tray set-up: p. 1 "This is one and this is two ... this one has twice the cross-sectional area"; x is the height in the first chamber, y in "that chamber"; p. 2 the y equation carries the 2 ("the rate at which 2y is changing"). So the y compartment has area 2. The page ("the second with twice the cross-section of the first", plot labels "x (area 1)", "y (area 2)", total water x + 2y) agrees.

## Arithmetic and answer checks
- `npm run calc:test -- -k decoupling-linear`: 7 passed. All `shown` strings occur on the page.
- u′ = x′ + 2y′ = (−2x + 2y) + 2(x − y) = 0; v′ = (−2x + 2y) − (x − y) = −3x + 3y = −3v. Correct.
- Inversion: u + 2v = x + 2y + 2x − 2y = 3x; u − v = x + 2y − x + y = 3y. So x = ⅓(u + 2v), y = ⅓(u − v). Correct; with u = c₁, v = c₂e^{−3t} this is ⅓c₁(1, 1) + ⅓c₂(2, −1)e^{−3t}. Correct.
- Tray via eigenvectors: trace −3, det (−2)(−1) − 2·1 = 0, λ² + 3λ = 0, λ = 0, −3. λ = 0: −2a + 2b = 0, (1, 1). λ = −3: a + 2b = 0, (−2, 1). E = (1 −2; 1 1), det 1 + 2 = 3, E⁻¹ = ⅓(1 2; −1 1). Check E·E⁻¹: ⅓(1 + 2, 2 − 2; 1 − 1, 2 + 1) = I. u = ⅓(x + 2y), v = ⅓(−x + y) = −⅓(x − y). Correct.
- Plot: x(0) = 0, y(0) = 3 gives u = 6, v = −3; x = ⅓(6 − 6e^{−3t}) = 2 − 2e^{−3t}, y = ⅓(6 + 3e^{−3t}) = 2 + e^{−3t}. Matches both curve expressions and the caption (common level u/3 = 2). Check of the ODE: x′ = 6e^{−3t}, −2x + 2y = −4 + 4e^{−3t} + 4 + 2e^{−3t} = 6e^{−3t}. y′ = −3e^{−3t}, x − y = −3e^{−3t}. Correct. Range [0, 3.2] contains the maximum y(0) = 3. Generated from formulas, not an image.
- Worked example, recomputed: A = (3 1; 1 3), trace 6, det 8, (λ − 4)(λ − 2); λ = 4: (1, 1), λ = 2: (1, −1). E = (1 1; 1 −1), det −2, E⁻¹ = (1/−2)(−1 −1; −1 1) = ½(1 1; 1 −1). u = (x + y)/2, v = (x − y)/2, u(0) = 2, v(0) = 1. x = u + v = 2e^{4t} + e^{2t}, y = u − v = 2e^{4t} − e^{2t}; x(0) = 3, y(0) = 1. x′ = 8e^{4t} + 2e^{2t} = 3x + y; y′ = 8e^{4t} − 2e^{2t} = x + 3y. Correct.
- Example originality: the lecture's only example is the tray; the symmetric system x′ = 3x + y, y′ = x + 3y does not occur in the transcript. Original.
- Quiz 1: answer 1 (real and complete, e.g. real symmetric). Correct per p. 3; explanation correct (over the reals; p. 3: "you cannot decouple if you have complex eigenvalues and you cannot decouple if you have defective eigenvalues").
- Quiz 2: answer 2 (E with the eigenvectors as columns). Correct as intended; see finding 2 on the wording.
- Quiz 3: answer 0 (total water, nothing enters or leaves). Correct per p. 2; explanation correct.
- Correct-answer positions 1, 2, 0: varied.
- Flashcards: 1 and 2 correct; 3 incomplete (finding 1).
- Frontmatter summary: every statement matches the page and the transcript.
- Calcs file: covers the tray identities, det E, the plot's level and x-curve and both components of the example. It does not check the plot's y-curve against y′ = x − y, nor E⁻¹ of either example (info: an identity check of E·E⁻¹ = I or of y′ for the plot would complete it). `tray-det-E` matches the page's "determinant 3".

## Coverage and order
- The page follows the lecture's order: two methods so far and why decoupling is taught (p. 1) → definition of decoupled and coupled (p. 1) → tray set-up and equations (pp. 1–2) → decoupling by physical insight, solution, back to x and y (p. 2) → conditions: real and complete, symmetric (p. 3) → D and E, eigenvectors as new basis (p. 3) → the Aα = λα definition and its geometry (pp. 3–4) → AE = EΛ, substitution, u′ = Λu (p. 4) → tray by the general method (p. 4). Same order as MIT.
- Left out (minor): the n × n remark (finding 5); that some people convert a system to one higher-order equation by elimination, and that papers use exponential matrices (p. 1); the language-course analogy (p. 1); the "as is well-known" one-sentence textbook summary (p. 4); the 18.03 form (A − λI)α = 0 that Mattuck contrasts with Aα = λα (p. 3) is not written out, only referred to. None is essential.
- Added: the worked example (page-own) and the plot (page-own initial condition).
- `prerequisites: [matrix-exponentials]`: that page exists in the working tree but is not yet committed (expected, per the task). The inline link `/courses/18-03/matrix-exponentials` uses the same form as the other 18.03 links.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page (OCW Creative Commons notice only).
- No paragraph copied; the prose paraphrases. Short echoes ("royal road", "saves no work", "real and complete", "decoupling matrix", "two first-order equations side by side") are brief standard or attributed phrases and acceptable.
- The worked example is original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 31 ("Nonlinear autonomous systems, studied near their critical points with the linear pictures."): the title matches "Non-linear Autonomous Systems" in `_course.json`. That this lecture linearizes at critical points and uses the linear phase portraits is the standard content of 18.03 Lecture 31 and very likely, but unverified here because the Lecture 31 transcript was not read (uncertain). The reason describes the next lecture rather than a use of decoupling itself; acceptable as a "next lecture" link.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- `content:check` was not run as part of this review.

## Resolution (2026-11-16, by the page author)

1. Warning 1: the geometric definition (text and flashcard 3) now allows stretching or shrinking, and reversal for negative λ.
2. Warning 2: quiz 2 now asks what E is in the substitution x = Eu; D = E⁻¹ stays the decoupling matrix.
3. Info:
   - Λ is now defined in the text.
   - The sign difference between (2, −1) and (−2, 1) is remarked on.
   - The n × n remark is added.

Status set to `reviewed`.
