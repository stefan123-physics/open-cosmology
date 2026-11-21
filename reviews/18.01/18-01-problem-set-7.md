---
page: content/year-1/18.01/18-01-problem-set-7.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/ps7/ (read: PDF, 3 pages, pdftotext)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec26/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec28/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec29/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec30/ (read)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec22/ (read)
  - MIT 18.01 Problem Set 6 PDF (read, to check the repeated Problem 1)
  - Section E / Section S PDFs (not opened: only linked from the page, none of their content is reproduced)
verdict: pass-with-notes
---

# Review: Problem Set 7: the volume of a torus, powers of the tangent and the integral of the secant

## Blind solve

My answers (written to this file from the stripped statements and MIT's sheet, before the full page or calcs were opened):
- p1: RMS = C/sqrt(2) (period 1/60 s; average of sin² over a period is 1/2).
- p2: V = ∫_{b−a}^{b+a} 2πx · 2√(a² − (x−b)²) dx = 2π²a²b (u = x − b: the odd term vanishes, leaving 4πb times the half-disk area πa²/2).
- p3a: tan^{n+2} = tanⁿ sec² − tanⁿ; ∫tanⁿ sec² dx = tan^{n+1}/(n+1) with u = tan x (n + 1 ≠ 0).
- p3b: ∫tan⁴x dx = tan³x/3 − tan x + x (+ c); zero at 0 as written.
- p4a: u = sin x, ∫du/(1 − u²) = ½ ln((1 + sin x)/(1 − sin x)) (+ c); zero at 0.
- p4b: (1 + s)/(1 − s) = (1 + s)²/cos²x, so ½ ln(...) = ln|(1 + sin x)/cos x| = ln|sec x + tan x|.
- p5: V = ∫₀^{π/2} 2πx cos x dx = 2π(π/2 − 1) = π² − 2π = 3.586 (3.58642).

Numerical checks (Simpson's rule, plain Python): RMS/C = 0.7071068 vs 1/√2; torus a = 0.7, b = 2.3: 22.246088 vs 2π²a²b = 22.246088; ∫₀^1.2 tan⁴ = 4.3002692 vs closed form 4.3002692; ∫₀^1.3 sec = 1.9933983 vs ½ ln((1+sin)/(1−sin)) = ln(sec+tan) = 1.9933983; ∫₀^{π/2} 2πx cos x = 3.5864191 vs π² − 2π = 3.5864191.

Comparison with the page (one line per answer id):
- p1-rms: page C/sqrt(2) = mine. Agree.
- p2-volume: page 2*pi^2*a^2*b = mine. Agree.
- p3 (a), self-marked: page's derivation = mine. Agree.
- p3-b: page tan(x)^3/3 - tan(x) + x = mine. Agree.
- p4-a: page (1/2)*log((1 + sin(x))/(1 - sin(x))) = mine. Agree.
- p4 (b), self-marked: page's conversion = mine. Agree.
- p5-volume: page 3.586 (π² − 2π) = mine. Agree.

No disagreements.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Intro, third paragraph | PS7 marks Problem 1 "(from PS6)" and Part I "Lecture 25. (We will begin here on Nov 9.)"; PS6 had tagged the problem "Lec 23" and scheduled trig integrals for Fri. Nov. 3. Neither sheet gives a reason for the repeat. | "MIT set it again here, because the lecture on trigonometric integrals came after that set was handed out." | State what the sheets show rather than a reason MIT does not give, e.g. "MIT set it again here (the sheet says "from PS6"); the lecture on trigonometric integrals, first planned before Problem Set 6 was due, was moved to after it." Or drop the "because" clause. |
| 2 | info | Intro, fourth paragraph | Sheet headings Lecture 25, 27, 28, 29 map to site 27, 28, 29, 30 (checked against `_course.json`: 25 = Exam 3 Review, no 26, 27 = Trig Integrals). | "these lectures are one number higher" (true of the three it names); the 25 → 27 mapping appears only in the table and last paragraph. | Optional: add "and its "Lecture 25" (trigonometric integrals) is Lecture 27 here". |
| 3 | info | Last section | Sheet's Lecture 30 line: "Parametric equations; arclength. Surface area". | "the next lecture, on parametric equations and arc length" | Optional: add "and surface area". |
| 4 | info | Problem 3(a) | "use the substitution tan²x = sec²x − 1" | "Use the identity tan²x = sec²x − 1" | None: "identity" is the more accurate word; same mathematics. |

## Arithmetic and answer checks
- Every number recomputed: 2π/(120π) = 1/60; 240π/60 = 4π; 1/√2 = 0.7071; 170/√2 = 120.2; 6π² = 59.22; 1/3 − 1 + π/4 = 0.1187; π/4 = 0.785; ½ ln 3 = 0.5493 = ln √3; sec(π/6) = 2/√3, tan(π/6) = 1/√3; π² − 2π = 3.586; π(π/2)² = 7.752; a third of it 2.584; cos 1.5 − (1 − 3/π) = 0.0257 (calcs). Points 4 + 4 + 4 + 4 + 3 = 19, + 3 for Problem 0 = 22 = MIT's Part II; splits 2 + 2 and 3 + 1 as MIT. All correct.
- Every solution step checked; each ends with a check (units and range for p1; MIT's Pappus remark, units, washers and a number for p2; differentiation and the n = 0 case for p3a; differentiation and a definite-integral bound for p3b; differentiation for p4a; a value at π/6 for p4b; differentiation and cylinder/cone bounds for p5). The cone claim holds: cos x is concave on [0, π/2], so it lies above the chord and the solid contains the cone.
- `<Answer>` boxes: expr equals the solution's result in every case. `vars` ranges keep everything finite and real: C in [50, 400]; a in [0.5, 2] with b in [3, 6] (b > a, a true torus); x in [0.2, 1.3] for tan and for ln((1 + sin)/(1 − sin)) (inside (−π/2, π/2)).
- Mistakes, each verified to differ from the answer and each hint true of its formula: p1 C²/2 (mean of V²), C/2, 2C/π (mean of |V|, correct), C (peak), 0 (mean of V); p2 π²a²b (half), 4π²a²b (twice), 2π²ab² (a and b swapped), 4πa²b (root integral taken as a², one π lost); p3-b wrong sign of x, missing x, wrong signs throughout, tan⁵/5 (derivative tan⁴ sec², correct); p4-a fraction inverted (= minus the answer), twice the answer, ½ ln(1 − sin²x) = ln cos x with derivative −tan x (correct).
- p5 number box: value 3.586, tolerance 0.002 absolute (`numberTolerance` in lib/answers.ts), so 3.584 to 3.588 pass. A 3-significant-figure entry (3.59, off by 0.0036) is rejected; that is consistent with the statement, which asks for three decimal places (info). No `mistakes` are listed for p5; optional additions: π²/4 = 2.467 (disks about the x-axis), π² + 2π = 16.15 (sign of the cos term), π/2 − 1 = 0.571 (2π dropped) (info).
- Hints: none gives a result away. Problem 4(a) hint 3 warns about the sign of ∫du/(1 − u) without stating it; Problem 2 hint 3 names a method ("u = a sin θ, or read the integral as an area"), not the value.
- Citations checked against printed page numbers (printed page = PDF page − 1 in all six PDFs, which start with an OCW cover page): MIT sheet Problems 1 to 3(a) p. 1, Problem 4(a) p. 2: correct. Lec 26 notes: half-angle sin² p. 2, sec² = 1 + tan² p. 2, ∫sec x dx = ln(tan x + sec x) pp. 3–4 (stated at the foot of p. 3, derived on p. 4, without bars as the page says): correct. Lec 28 notes p. 1 (t = a sin u): correct. Lec 29 notes pp. 1–2 (cover-up): correct. Lec 30 notes p. 1 (∫uv′ = uv − ∫u′v): correct. Lec 22 notes p. 3 (shell height, circumference 2πx, thickness dx): correct.
- calcs file: every answer id has an independent check (numerical integral of the original integrand; a second slicing for p2 and p5). Info: the `shown` string of `p4-a-derivative` contains page markup (`" cite="mit" at="…" />`); harmless as a substring match, but tidier to end it at `\sec x`.
- `content:check` run in the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Part II Problems 1 to 5 all present, in MIT's order, with MIT's points and part splits. Problem 0 (collaboration statement) left out, and the page says so.
- Part I listed with links to Sections E and S, exercise numbers exactly as on MIT's sheet (5B-9, 11, 13, 16; 5C-5, 7, 9, 11; 5D-1, 2, 7, 10; 5E-2, 3, 5, 6, 10h "complete the square"; 5F-1a, 2d then 2b, 3). The first row matches PS6's Lecture 25 row; "moved here from PS6" is MIT's own note.
- Simmons reading assignments and the textbook reference (p. 229/11) left out, and the page says so.
- Additions, each marked as the page's own: b ≥ a in Problem 2; the reading of "first hump" in Problem 5 (rotating either half of the hump gives the same solid, so the reading is harmless); the zero-at-0 convention for antiderivative boxes.
- Lecture mapping checked against content/year-1/18.01/_course.json and the lesson frontmatter (volumes 22, trig-integrals 27, inverse-substitution 28, partial-fractions 29, integration-by-parts 30); `covers: [27, 28, 29, 30]` is right.

## Licensing
- MIT's PS7 sheet and the five lecture-note PDFs carry no "All rights reserved" or "Courtesy of" notice (grep). No figures are used or redrawn.
- Statements are rewritten in the page's own words; MIT's short phrases ("root-mean-square", "solid torus", "first hump") are standard terms.
- No OpenStax, LibreTexts or Simmons material.

## Notes
- No `## Summary` with answers; no em dashes (0 found).
- Problem 1 here matches the reviewed Set 6 Problem 2, consistent with MIT's repeat.

COUNTS: errors=0 warnings=1 info=6

## Resolution (2026-11-21, by the page author)

1. Warning fixed: the intro no longer gives a reason MIT does not state; it says the sheet marks Problem 1 "from PS6" and that the lecture on trigonometric integrals was moved to after Problem Set 6.
2. Done: the lecture-number note now also maps the sheet's "Lecture 25" to Lecture 27.
3. Done: "and surface area" added to the next lecture's topics.
4, 5. No change.
6. Not added: the number box keeps no listed mistakes (optional).
7. Done: the calcs `shown` string of p4-a-derivative now ends at \sec x.
Status set to reviewed.
