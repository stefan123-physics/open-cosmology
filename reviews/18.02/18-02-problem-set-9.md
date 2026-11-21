---
page: content/year-1/18.02/18-02-problem-set-9.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/ps9/ (read: PDF text and rendered page image)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week9/ (read, all 5 PDF pages; printed pages 1-4)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/line_intgrl_plan/ (read, 8 PDF pages; groups 4D-4F on printed pp. 3-4)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/line_integrl_sol/ (read, 8 PDF pages; 4D-4F solutions on printed pp. 3-6)
verdict: pass-with-notes
---

# Review: Problem Set 9: the area under a cycloid, the best curve for a line integral and flux across the unit circle

## Blind solve

### My answers (written before opening the full page)
- p1a: Green, M=0,N=x: N_x-M_y=1, so oint x dy = area; M=-y,N=0: N_x-M_y = 0-(-1) = 1, so oint -y dx = area.
- p1b: boundary = x-axis 0..2πa (y=0, contributes 0) + arch traversed t: 2π→0. oint -y dx = ∫_{2π}^{0} -a²(1-cos t)² dt = a²∫_0^{2π}(1-cos t)² dt = 3πa². Area = 3πa².
- p2a: M=x²y+y³-y, N=3x+2xy²+e^y; N_x-M_y = (3+2y²) - (x²+3y²-1) = 4 - x² - y². Best curve: circle x²+y²=4 (radius 2, centre origin), counterclockwise.
- p2b: ∫0^{2π}∫0^2 (4-r²) r dr dθ = 2π·4 = 8π ≈ 25.13.
- p3a: n̂=(cos t, sin t); F·n̂ = cos²t sin t + sin³t = sin t. Upper half (0<t<π) positive, lower half (π<t<2π) negative; zero at (±1,0).
- p3b: flux = ∫_0^{2π} sin t dt = 0; upper half = ∫_0^π sin t dt = 2 (lower half -2; they cancel, by the symmetry y→-y of F·n̂ = y on the circle).
- p3c: div F = ∂(xy)/∂x + ∂(y²)/∂y = y + 2y = 3y; ∬_disk 3y dA = 0 (odd in y). Agrees with (b).

### Comparison with the page (one line per answer id)
- p1-a (self-marked): page uses Green with (M, N) = (0, x) and (-y, 0); both give N_x - M_y = 1. Agrees.
- p1-b: page 3*pi*a^2; mine 3πa². Equal. Numerical check (a = 1.7): ∫a²(1-cos t)² dt = 27.2376 = 3π(1.7)²; the x dy route gives 27.2376 too.
- p2-a-curl: page 4 - x^2 - y^2; mine 4 - x² - y². Equal.
- p2-a-curve: page choice 2 (circle x² + y² = 4, radius 2, counterclockwise); mine the same.
- p2-b: page 25.13 (8π); mine 8π = 25.1327. Equal. Independent check: the line integral itself around x = 2cos t, y = 2sin t, integrated numerically (scipy quad), = 25.13274.
- p3-a: page sin(t); mine sin t. Equal.
- p3-a-sign: page choice 3 (upper half positive, lower half negative); mine the same.
- p3-b-upper: page 2; mine 2 (quad: 2.0000).
- p3-b: page 0; mine 0 (quad: 3e-16).
- p3-c: page 3*y; mine 3y. Equal; ∬ over the upper half disk = 2.0000 (scipy dblquad), whole disk 0.

No disagreement.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(c), solution step "Check the result" | MIT's Lecture 23 summary (p. 4) speaks of "source/sink density"; the site lesson `flux.mdx` says "source rate" and "expanding / contracting" but never uses the word "sink" | "in the language of the lesson, the upper half disk holds sources and the lower half sinks" | Replace "in the language of the lesson" by "in the language of MIT's lecture summary (source/sink density)", or use the lesson's own terms: "the flow expands above the x-axis and contracts below it, by the same total amount" |
| 2 | info | Problem 3(c), answer box mistake `-x` | n/a | hint: "That is the curl, N_x − M_y" while the problem names the components P, Q | Optional: "That is the curl, Q_x − P_y (N_x − M_y in the notation of Green's theorem)" |
| 3 | info | Problem 3(a) | MIT asks only which portions contribute positively / negatively | page also asks for F · n̂ as a function of t, with an answer box | Acceptable scaffolding; the statement says it is the way to decide. No change needed |
| 4 | info | Problem 3(b) | MIT: flux across the whole circle, explained with (a) | page adds the upper-half flux, labelled "(this extra question is ours)" | None; marked as the page's own |

## Arithmetic and answer checks
- Every number recomputed (scipy; hand algebra): 3πa² (both line integrals), N_x - M_y, 8π = 25.13, inner integral 4, I(b) = 2π(2b² - b⁴/4), I(1) = 7π/2 = 11.00, I(3) = -9π/2 = -14.14, zero of I at 2√2 = 2.83, I'(b) = 2π(4b - b³) zero at b = 2, F·n̂ = sin t, half-circle flux 2 / -2, whole 0, div F = 3y, inner ∫3r² = 1, half disk 2, ∫t sin t over [0, 2π] = -2π, area/wheel = 3, area/rectangle = 0.75, the 4E-1c remark -1/2 (F = x ĵ on the x-axis, n̂ = -ĵ for rightward travel). All correct.
- Each solution ends with a check (unit circle for 1(a); units, wheel, rectangle and the other line integral for 1(b); a huge curve for 2(a); other circles and a plot for 2(b); the top point and the radial form F = y⟨x, y⟩ for 3(a); symmetry and the half circle for 3(b); the half disk for 3(c)).
- Answer boxes: p1-b vars a ∈ [0.5, 3], finite and physical; mistakes -3πa², 2πa², πa², 4πa² differ from 3πa² and each hint is true of its formula (with t increasing the arch runs left to right with the region on its right; 2πa² is what dropping ∫cos² t gives; πa² is the wheel / the cos² term alone; 4πa² is the bounding rectangle). p2-a-curl vars x, y ∈ [0.2, 1.2]; mistakes x²+y²-4 (M_y - N_x), 3-x²-y² (dropping the -1 from -y), +e^y (wrong N_x), 3+2y² (N_x alone): all true and distinct. p2-b value 25.13, tolerance 0.01 absolute (lib/answers.ts): accepts 25.13 and 25.14, rejects 25.12 and the 3-significant-figure 25.1; the question asks for two decimal places, so consistent. p3-a vars t ∈ [0.3, 1.2]; mistakes cos t sin t + sin² t, -sin t, 0, sin² t all distinct from sin t there; each hint true (F = y⟨x, y⟩ is radial, so F·T̂ = 0; sin² t is the ĵ component y²). p3-b-upper 2 tol 0.01 and p3-b 0 tol 0.001: fine. p3-c vars x, y ∈ [0.5, 2]; mistakes x+2y (∂(xy)/∂y = x), -x (the curl Q_x - P_y = -x), 2y, y: all true.
- Choice boxes: p2-a-curve answer index 2 and p3-a-sign index 3 point to the right choices.
- Hints: none gives a final result away. The second hint of 3(c) points to the symmetry argument, but the box asks for div F, not the flux.
- Calcs file: every answer id has an `answer:` entry checked by an independent route (numerical derivatives or integrals). `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Part B: Problems 1 (a, b), 2 (a, b), 3 (a, b, c), in MIT's order, points 4 (2+2), 6 (4+2), 6 (2+2+2) as MIT gives them; total 16 as stated.
- Part A: listed and linked, not rewritten. The list matches the sheet: 4D/1abc, 2, 3, 4, 5 for MIT's Lecture 24; 4E/1ac, 2, 3, 4, 5 (without Green's theorem) and 4F/3, 4 for MIT's Lecture 25; reading V5 only for MIT's Lecture 26; 10 points. None of these has a star in the Notes (stars are on 4D-6, 4D-7, 4E-6, 4E-7, 4F-6): correct. "MIT's solutions skip 4E-1c": verified (the solutions go from 4E-1b to 4E-2).
- Lecture numbering: the sheet's Lectures 24, 25, 26 (Thu Nov 1, Fri Nov 2, Tue Nov 6) are Lectures 22, 23, 24 in MIT's Week 9 summaries (Lecture 22 Thu Nov 1, Lecture 23 Fri Nov 2) and in `_course.json`. Exam 3 "covering lectures 18-26" correctly becomes 16-24. `covers: [22, 23]` and `lecture: 23` fit.
- The Edwards and Penney reading (15.4) is left out, and the page says so.

## Citations
- `cite="mit"` with `at="... p. 1"`: the sheet is on PDF page 2, printed page 1. Correct.
- reading1 (lec_week9), printed footers checked page by page: Green's theorem "Lecture 22, p. 2" (correct); ∮x dy = area "Lecture 22, p. 3" (correct, planimeter example); flux as -Q dx + P dy "Lecture 23, p. 3" (correct); normal form with div F = P_x + Q_y "Lecture 23, p. 4" (correct). Frontmatter location "Lectures 22 and 23, pp. 2–4" correct.
- references: notesProblems "groups 4D, 4E and 4F, pp. 3–4" correct; notesSolutions "pp. 3–6" correct (4D-1a starts on printed p. 3, 4F-4 ends on p. 6).

## Licensing
- No MIT figure redrawn; the three plots are generated from formulas. No "All rights reserved" or "Courtesy of" notice in the problem set, the Week 9 summaries or the section 4 Notes and solutions (searched).
- Statements are in the page's own wording; formulas are the problem data and necessarily match. Solutions are the page's own; MIT has none for Part B. No OpenStax, LibreTexts or textbook material.
- No em dashes in the page. No `## Summary` with answers.

## Notes
- Claims about lessons verified: `greens-theorem.mdx` shows ∮x dy = area (planimeter section); `parametric-equations.mdx` writes the cycloid with θ; `flux.mdx` gives n̂ ds = ⟨dy, -dx⟩ and div F = P_x + Q_y. Only the "sinks" wording is not in the lesson (finding 1).
- The venv has numpy and scipy but no sympy; all checks were numerical (scipy quad/dblquad) plus hand algebra.
- The page can be set to `status: reviewed` once finding 1 is fixed or accepted.

COUNTS: errors=0 warnings=1 info=3

## Resolution (2026-11-21, by the page author)

1. (warning) Problem 3(c), "Check the result": the sentence now uses the lesson's own terms: "the flow expands above the $x$-axis and contracts below it, by the same total amount".
2. (info) The hint of the listed mistake `-x` in 3(c) now reads "the curl, Q_x − P_y (N_x − M_y in the notation of Green's theorem)".
3. (info) The other two info items need no change.

`content:check`, `calc:test -k 18-02-problem-set-9` and `test:answers` pass. Status set to reviewed.
