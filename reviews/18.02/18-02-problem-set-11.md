---
page: content/year-1/18.02/18-02-problem-set-11.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps11/ (read: PDF text and both pages rendered as images)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/vect_intgrl_calc/ (read: exercises 6B-2 and 6B-7 on printed p. 1, rendered as an image)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/vec_int_calc_sol/ (read: has no solution to 6B-7, which is starred)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week11/ (read, printed pp. 1-4)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week12/ (read, printed p. 1)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week13/ (read, printed pp. 1-4)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/pages/readings/supp_notes/ (read: titles of V8 to V12)
verdict: needs-changes
---

# Review: Problem Set 11: flux, the divergence theorem and potentials in space

## Blind solve

### My answers (written before opening the full page)
- P1: on x²+y²=1, F·n̂ = (x²+y²)/(1+z²) = 1/(1+z²), dS = dθ dz; flux = 2π ∫ dz/(1+z²) = 2π·π = 2π² ≈ 19.739 (scipy quad: 19.7392).
- P2(a): z→−z swaps P1↔P2, fixes P0, P3: faces P0P1P3 and P0P2P3 are exchanged (P0P1P2 in y=0 and P1P2P3 in x=1 are each mapped to themselves).
- P2(b): P0P1P2: −ĵ; P1P2P3: +î; P0P1P3: ⟨−1, 1, 1⟩ (= P1×P3; P2 gives −x+y+z = −2 < 0, so +⟨−1,1,1⟩ is outward); P0P2P3: ⟨−1, 1, −1⟩ by symmetry.
- P2(c): P0P1P2: 0 (y = 0 there); P1P2P3: ∫∫ y dy dz over triangle (0,1),(0,−1),(1,0) = 1/3; P0P1P3: z = x − y, dS = ⟨−1,1,1⟩dx dy, flux = ∫∫_{0≤y≤x≤1} −y = −1/6; P0P2P3: −1/6. Total 0.
- P2(d): div F = 0, so the triple integral is 0; sum of fluxes 0 + 1/3 − 1/6 − 1/6 = 0.
- P3(a): F = −(x,y,z)/ρ³ = −r̂/ρ²; F_x = −x/(x²+y²+z²)^{3/2}; points to the origin, magnitude 1/ρ².
- P3(b): outward: −4π (independent of a) (−12.566).
- P3(c): div F = 0 for ρ ≠ 0; F (and f) is undefined at the origin, inside the ball, so the divergence theorem does not apply; no contradiction.
- P4(a): div(∇f) = ∇²f, divergence theorem. (b) div(f∇f) = |∇f|² + f∇²f. (c) LHS = 0 as f = 0 on S, ∇²f = 0, so ∫∫∫|∇f|² = 0, |∇f|² continuous ≥ 0 ⇒ ∇f = 0 ⇒ f constant (on each connected piece of D, each meeting S) = 0. (d) h = f − g harmonic, h = 0 on S ⇒ h = 0.
- P5(a): W = π − aπ − 8π³/3 = π(1 − a) − 8π³/3, independent of b (scipy check at (a,b) = (0,0), (1,2), (2.5,−3) agrees to 1e-12).
- P5(b): curl F = ⟨0, (a − 1)cos z, (4 − 2b)xy⟩; conservative iff a = 1, b = 2.
- P5(c): f = x sin z + x²y² − z³/3 (+C; C = 0 for f(0,0,0)=0); W = f(1,0,2π) − f(1,0,0) = −8π³/3 ≈ −82.683, equal to (a) at a = 1.

### Comparison (one line per answer id)
- p1-flux: page 19.74 (2π²), tol 0.05; mine 19.7392. Agree. "19.7" accepted; 4π = 12.57 rejected.
- p2-a: page choice 1 (P0P1P3 and P0P2P3). Agree.
- p2-b-1: page (0, -1, 0). Agree.
- p2-b-2: page (-1, 1, 1). Agree.
- p2-c-1: page 0.3333, tol 0.002; mine 1/3. Agree.
- p2-c-2: page -0.1667, tol 0.002; mine -1/6 (dblquad -0.166667). Agree.
- p3-a-x: page -x/(x^2+y^2+z^2)^(3/2). Identical to mine.
- p3-a-geo: page choice 1 (radial, inward, length 1/ρ²). Agree.
- p3-b: page expr -4*pi (vars a). Mine -4π. Agree.
- p3-c: page choice 1 (field undefined at the origin). Agree.
- p5-a: page pi*(1 - a) - 8*pi^3/3; mine identical; scipy quad at (a,b) = (0,0), (1,2), (2.5,-3) gives -79.5418, -82.6834, -87.3958, equal to the formula to 1e-12.
- p5-b-a: page 1. Agree. p5-b-b: page 2. Agree.
- p5-c-f: page x*sin(z) + x^2*y^2 - z^3/3. Identical to mine (C = 0 from f(0,0,0) = 0).
- p5-c-work: page -82.68, tol 0.1; mine -8π³/3 = -82.6834. Agree.
- Problem 2(d) and Problem 4(a) to (d): no boxes; the page's proofs match mine step by step.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 5(c), Formula "First integration", `cite="reading3" at="Lecture 30, p. 2"` | The systematic method for a potential (f_x = … ⇒ f = … + g(y, z), then g, then h) is on printed p. 1 of the Week 13 summary; printed p. 2 has the del notation and the meaning of curl | p. 2 | `at="Lecture 30, p. 1"` |
| 2 | error | Problem 2(b), "Check the result", second paragraph | The site's Problem Set 1, Problem 3 ("The area vectors of a tetrahedron add up to zero") has no parts | "as in Problem 3(b) of Problem Set 1" | "as in Problem 3 of Problem Set 1" |
| 3 | warning | Problem 3(b), statement and box `p3-b` | MIT: "Evaluate the flux" | A formula box whose expr is the constant `-4*pi`, but the statement does not say it is a formula box or to type `pi`; "How to answer" says decimals go in number boxes, and the formula checker (relative 1e-6, lib/answers.ts line 202) rejects a typed decimal such as -12.566 | Keep the formula box (it is what lets the mistakes -4πa² and -4π/a² be recognised) and add to the statement: "Type the flux as a formula; it may contain $a$. Use `pi` for $\pi$." |
| 4 | warning | Problem 2(a), "Check" step | (no MIT text) | "they are the faces that do not contain the vertex which the reflection leaves out" (the reflection leaves no vertex out: it fixes P0, P3 and swaps P1, P2) | Replace the clause with "they are the faces opposite the two vertices that the reflection exchanges", or delete it (the next sentence already says this) |
| 5 | warning | Problem 3(a), choices of `p3-a-geo` | (no MIT text) | Plain text "1/rho^2" and "1/rho" in choices that are rendered by KaTeX (components/exercise/Answer.tsx: choices rendered by KaTeX) | Write `$1/\\rho^2$` and `$1/\\rho$` in the four choices |
| 6 | info | Problem 3(b) | MIT does not say which normal | Outward, marked "our addition" | None; correctly marked |
| 7 | info | Problem 5(c) | MIT asks for "a potential" | Constant fixed by f(0,0,0) = 0, marked "our addition" | None; correctly marked |
| 8 | info | Problem 4 intro | "continuous second derivatives inside D" | "inside D (and on S)" | Optional: mark "(and on S)" as our addition, or leave (it is the regularity the divergence theorem needs) |
| 9 | info | Problem 3(c), "Check the result" | (no MIT text) | "If the sphere does not enclose the origin" (the sphere of (b) is centred at the origin, so it always does) | "If a closed surface does not enclose the origin" |
| 10 | info | Problem 1, solution Formulas | The statement is in the Notes (6B-7), the sheet only names it | `cite="mit" at="Part B, Problem 1 (our own solution)"` | Acceptable (MIT's sheet does list Problem 1); optionally `cite="notesProblems" at="Exercise 6B-7 (our own solution)"` |
| 11 | info | Problem 2 choices | (no MIT text) | Plain "P0P1P2", "(0, -1, 0)" | Optional: `$P_0P_1P_2$` in the choices, to match the labels |

## Arithmetic and answer checks
- All numbers recomputed independently (scipy): 2π² = 19.7392; ∫(1+z²)^(-3/2) dz = 2, 4π = 12.566; face fluxes 0, 1/3, -1/6, -1/6 (total 0); det = 2, volume 1/3; flux of x î = 0 + 1 - 1/3 - 1/3 = 1/3; outward area vectors sum to 0; 1/0.999 = 1.001001; -4π; div(-r/ρ³) = 0; ∫sin² = ∫cos² = π, ∫cos t sin³ t = 0, ∫t² = 8π³/3 = 82.683; curl ⟨0, (a-1)cos z, (4-2b)xy⟩; f = x sin z + x²y² - z³/3; W = -82.68. All correct.
- Every check step is right: P1 (r/ρ³ through the cylinder gives 4π; the end discs carry about π/L², which goes to 0), P2(b) (direct cross product ⟨1,-1,1⟩, reversed), P2(c) (G = x î gives the volume), P3(a) (finite step), P4(a) (x²+y²-2z² harmonic; equal sphere integrals of x², y², z²), P4(b) (f = x on the unit cube: both sides 1), P4(c) (x on the unit sphere, x²-y² on y = ±x), P4(d) (steady-state diffusion gives Laplace; the Lecture 29 summary has the diffusion equation), P5 all three parts.
- Mistake hints: each listed mistake is the formula its hint describes and differs from the answer over the `vars` ranges. p5-a "+ b*pi": the claim that -b cos t sin³ t is odd about t = π is true (g(2π - t) = -g(t)). p3-b "-4*pi*a^2" (field of length 1) and "-4*pi/a^2" (length times 4π) are both described correctly.
- `vars` ranges keep every formula finite (p3-a-x: x, y, z > 0; p3-b, p5-a: any a, b).
- Number tolerances: 0.05 on 19.74, 0.002 on 0.3333 and -0.1667, 0.01 on 1 and 2, 0.1 on -82.68: all accept 3 significant figures and reject the nearby wrong values.
- No hint gives a result away (P2(c) hint 3 gives the plane and the projected triangle, a set-up step, not the flux).
- calcs/18.02/18-02-problem-set-11.yaml: each `answer:` entry matches the page's value or expr. I did not run `npm run calc:test` or `content:check` in the worktree (not verified here).

## Coverage and order
- Part B: all five MIT problems in MIT's order, parts in order, MIT's points (2; 8 = 1+2+3+2; 5 = 2+1+2; 6 = 1+2+2+1; 5 = 2+1+2; total 26). Problem 1 = Notes 6B-7 (F = r/ρ² through the infinite cylinder x²+y² = 1 of 6B-2, n̂ outward): the page's statement matches the Notes.
- Part A table matches MIT's sheet exactly (6A/1-4; 6B/1,2,3,4,6,8; 6C/1a,2,3,5,6,7a,8; none for Lecture 32; 6D/1abcd,2,4,5; 6E/1,2,3ab(ii) both methods, 5). V8 to V12 titles match OCW's readings page. Textbook left out, and the page says so.
- Lecture mapping: MIT's sheet Lectures 30-33 (Nov 15, 16, 20, 27) = Auroux's summaries Lectures 27 (Nov 15), 28 (Nov 16), 29 (Nov 20), 30 (Nov 27), verified on the summaries; matches the site's lesson lecture numbers 27-30 and the four linked lessons.
- Reading citations checked against printed footers: Week 11 printed p. 3 has dS = a dz dθ for cylinders (Lecture 27) and n̂ dS = ⟨-f_x, -f_y, 1⟩dx dy (Lecture 28); printed p. 4 has the divergence theorem; Week 12 (one page, printed 1) has del, gradient, divergence and k div(∇u) = k∇²u; Week 13 printed p. 1 has the work integral, the fundamental theorem for line integrals, the gradient-field test, the systematic method and the curl formula. Only "First integration" (p. 2) is off (finding 1). The readings' `location` fields are right.
- The claim that the Notes give no solution to starred exercises holds for 6B-7 (the solutions PDF goes from 6B-6 to 6B-8).

## Licensing
- No MIT figures, no "All rights reserved" material, no "Courtesy of" items in the sources used. Statements are reworded; the formulas of Problem 4 are mathematical statements, not prose. Textbook not used. No OpenStax or LibreTexts. No em dashes; no `## Summary` with answers.

## Notes
- Writer's flags: outward normal in 3(b) and the constant in 5(c) are correctly marked as additions; 5(a) being independent of b is handled well (b in `vars`, plus a "depends on b" mistake); the constant formula box in 3(b) is defensible but needs instructions (finding 3); "(1/rho^2)" in 3(a) is finding 5.
- Symbols and content:check were not run by me.

COUNTS: errors=2 warnings=3 info=6

## Resolution (2026-11-21, by the page author)

1. (error) Problem 5(c), "First integration": now cites `Lecture 30, p. 1`.
2. (error) Problem 2(b), second check: now "as in Problem 3 of Problem Set 1".
3. (warning) Problem 3(b): the statement now says "Type the flux as a formula; it may contain $a$. Use `pi` for $\pi$." The formula box is kept, as it catches the listed mistakes in $a$.
4. (warning) Problem 2(a), check: the wrong clause now reads "they are the faces opposite the two vertices that the reflection exchanges".
5. (warning) Problem 3(a): the four choices now write 1/ρ² and 1/ρ in Unicode (the run guide keeps backslash TeX out of choice strings).
6. (info) Problem 3(c): "If a closed surface does not enclose the origin". The other info items need no change.

`content:check`, `calc:test -k 18-02-problem-set-11` and `test:answers` pass. Status set to reviewed.
