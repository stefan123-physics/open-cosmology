---
page: content/year-2/8.03/8-03-problem-set-1.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_problemset1/ (read, pdftotext of the sheet in scratchpad/src/803-ps1.txt)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec1/ (read: f56c..._MIT8_03SCF16_Lec1.pdf, 5 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/b60b54d53623d627b5580df27fa5d0a1_4ysFC9vd3GE.pdf (read; 14 pages, no printed page numbers, so PDF page numbers are used)
verdict: needs-changes
---

# Review: Problem Set 1: oscillators, complex numbers and the pendulum

## Blind solve

### My answers (written before opening the full page)

- P1a: static stretch y0 = mg/k. P1b: with ξ = y − mg/k, m ξ̈ = −k ξ, ω = √(k/m). P1c: gravity is a constant force; it only shifts the equilibrium (linear restoring force unchanged).
- P2a: x = A sin ωt; v = Aω cos ωt; a = −Aω² sin ωt.
- P2b: x = −(√3/2)Bτ cos ωt + (1/2)Bτ sin ωt; v = (1/2)Bωτ cos ωt + (√3/2)Bωτ sin ωt; a = (√3/2)Bω²τ cos ωt − (1/2)Bω²τ sin ωt.
- P2c: with D = 1+ω²τ²: a = C/D (cos ωt − ωτ sin ωt); v = C/(ωD) (ωτ cos ωt + sin ωt); x = −C/(ω²D)(cos ωt − ωτ sin ωt).
- P2d: X: √(α²+β²), φ = arctan(β/α); V: ω√(α²+β²), φ_v = arctan(β/α) + π/2; A: ω²√(α²+β²), arctan(β/α) + π.
- P2e: X: γ/ω, π/3 (1.0472); V: γ, 5π/6; A: γω, 4π/3.
- P2f: X: δ/ω², 7π/6 (3.6652); V: δ/ω, 5π/3; A: δ, π/6.
- P3a: ω = √(3K/M). P3b: A = v√(M/(3K)). P3c: x = v√(M/(3K)) sin(√(3K/M) t). P3d: φ = −π/2 = −1.5708.
- P4a: x = a and x = −4a (x = 0 is a maximum). P4b: ω(a) = √(20E0/(m a²)); ω(−4a) = √(80E0/(m a²)). P4c: V3(a) = 48E0/a³, ξc = 5a/12 = 0.4167a; V3(−4a) = −72E0/a³, ξc = 10a/9 = 1.111a.
- P5a: θ̈ = −(g/L) sin θ. P5b: ω = √(g/L). P5c: 1 − sinθ/θ = 0.01 gives θmax = 0.2453 rad = 14.06° (relative to sin θ instead: 13.99°); T = 2π√(L/g). P5d(i): V = mgL(1 − cos θ). P5d(ii): V ≈ ½mgLθ², so mL²θ̈ = −mgLθ.
- P5e: ẍ = −(g/L) x √(1 − x²/L²) − x v²/(L² − x²) (tension T = mg cos θ + m v²/(L cos²θ)).
- P5f: drop the x² and v² terms: ẍ ≈ −(g/L)x. P5g: √(1 − x²/L²) > 0.99 gives |x|/L < 0.1411.

### Comparison (one line per answer id)

- p1-a `m*g/k`: agrees.
- p2-a-x `A*sin(w*t)`, p2-a-v `A*w*cos(w*t)`, p2-a-a `-A*w^2*sin(w*t)`: agree.
- p2-b-x `B*tau*sin(w*t - pi/3)`: agrees (sin(ωt − π/3) = ½ sin ωt − (√3/2) cos ωt, my form).
- p2-b-v `B*w*tau*cos(w*t - pi/3)`: agrees (= Bωτ sin(ωt + π/6)).
- p2-b-a `-B*w^2*tau*sin(w*t - pi/3)`: agrees.
- p2-c-x, p2-c-v, p2-c-a: agree term by term.
- p2-d-q `w*sqrt(alpha^2 + beta^2)`, p2-d-phi `pi/2 + atan(beta/alpha)`: agree.
- p2-e-q `gamma/w`, p2-e-phi 1.0472: agree (solution's 5π/6, 4π/3 agree).
- p2-f-q `delta/w^2`, p2-f-phi 3.6652: agree (solution's 5π/3, π/6 agree).
- p3-a, p3-b, p3-c, p3-d (−1.5708): agree.
- p4-a choice 1 (x = a and x = −4a): agrees.
- p4-b-a `sqrt(20*E0/(m*a^2))`, p4-b-b `sqrt(80*E0/(m*a^2))`: agree.
- p4-c-a 0.4167, p4-c-b 1.111: agree.
- p5-a, p5-b, p5-c-angle 14.06 (mine 14.056), p5-c-period, p5-d: agree.
- p5-e `-g*x/L*sqrt(1 - x^2/L^2) - x*v^2/(L^2 - x^2)`: agrees exactly.
- p5-g 0.1411: agrees (mine 0.14107).

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | P4(b) solution, Formula "Force near a minimum", `at="p. 3, below eq. 10"` | Notes p. 3 ends with eq. 10; "F(x) ≈ −V″(0)x" is the first line of p. 4 | p. 3 | `at="p. 4 (below eq. 10)"` |
| 2 | error | P4(c) solution, Formula "Where the cubic term in V would matter", `at="p. 3 (the condition); ..."` | The condition \|xV‴(0)\| ≪ V″(0) is on notes p. 4 | p. 3 | `at="p. 4 (the condition); the numbers are our own solution"` |
| 3 | error | Prose citations: P1(c) energy step "(the lesson's Taylor argument, notes p. 3)" and check step "The lesson's condition on the cubic term (notes, p. 3)"; P4(b) Hint 1 "(the lesson's Taylor argument, notes p. 3)"; P4(c) solution idea "(notes, p. 3; transcript, p. 8)" | Taylor series eqs. 8 to 10 on p. 3; F ≈ −V″x and the condition on p. 4 (the lesson harmonic-oscillator itself cites p. 4) | p. 3 | "notes, pp. 3–4" for the Taylor argument (P1(c) energy step, P4(b) Hint 1); "notes, p. 4" for the condition (P1(c) check step, P4(c) idea) |
| 4 | warning | P5(c) solution, period step: "what fails at large amplitude (transcript, p. 9)" | The large-amplitude release starts at the foot of p. 9; the pendulums drifting out of step is on p. 10 (the lesson cites pp. 9–10) | p. 9 | "(transcript, pp. 9–10)" |
| 5 | info | P3(d) | "complex function z(t), in the irreducible form", no sign convention; Problem 1.2 of the same sheet uses e^{−iωt} | Uses the lesson's e^{+iωt}, said openly; φ = −π/2 | Fine. Optional sentence: with Problem 2's e^{−i(ωt+φ)} the phase would be +π/2. |

## Arithmetic and answer checks
- Every number recomputed: 0.245 m; 6.32 rad/s; 24.5 rad/s; 0.0245 m; 89.4 rad/s; 5, 10, 20; 3.13 rad/s; 2.01 s; θmax 0.2453 rad = 14.06° (first order √0.06 = 0.2449); 0.1411 and asin(0.1411) = 8.11°; 0.141² = 0.0199; 5π/6 = 2.618, 4π/3 = 4.189, 7π/6 = 3.6652, 5π/3 = 5.2360, π/6 = 0.5236; V″ at 0, a, −4a = −16, 20, 80 (E0/a²); V3 = 48, −72 (E0/a³); ξc = 5/12, 10/9; V4 = 24E0/a⁴ gives √(6·20/24) a = √5 a. All correct.
- P4(c) "a tenth of ξc: the quadratic term is 5% of the linear one": ½|V3|(ξc/10)/V″ = 0.05. Correct.
- P5(e) second route (chain rule) matches mine. P5(g) velocity-term estimate (ratio x0²/L², largest as x → 0) correct; at the stated limit the two corrections together are about 3%, not 1%, which the solution says honestly ("of the same size"). (info)
- Calcs file: every `answer:` entry matches the page's expr/value; each check uses an independent route (numerical derivative, integral, solve, polar form, chain rule). `calc:test` was not run by the reviewer.
- Answer boxes: all `vars` ranges keep the formulas finite and physical (p5-e: |x| ≤ 0.8 < L; p2-d-phi: α, β > 0). Tolerances 0.5–1% accept 3 significant figures; p5-c-angle's 1% also accepts 13.99° (error measured relative to sin θ), good given the wording.
- Mistake hints, one by one: all true of their formulas except
  - **warning (6)**: p2-c-v mistake `C*sin(w*t)/(w*(1 + w*tau))` and p2-c-a mistake `C*cos(w*t)/(1 + w*tau)`. These come from dropping the i (reading 1 + iωτ as 1 + ωτ), not from "taking the real part of the numerator and the denominator separately" (that gives 1/1, i.e. `C*cos(w*t)` and `C*sin(w*t)/w`). Fix both hints to: "The i in the denominator cannot be dropped: 1 + iωτ is not 1 + ωτ. Make the denominator real first: multiply top and bottom by 1 − iωτ."
  - info: p4-b-b mistake `sqrt(-80*E0/(m*a^2))` is NaN for every value, so no typed answer can match it. Replace with a reachable slip, e.g. `sqrt(16*E0/(m*a^2))` with the hint "That uses the curvature at x = 0, a maximum; evaluate V″ at x = −4a."
- No hint gives a result away (P4(c) Hint 2 states ξc = V″/|V3|, which the statement already defines).
- Every part ends with a check step (units, a limit, a second route or numbers), including the show/explain parts 1(b), 1(c), 5(d)(ii), 5(f).

## Coverage and order
- All five MIT problems in MIT's order, with MIT's parts in MIT's order (1.2 a–f, 1.3 a–d, 1.4 a–c, 1.5 a–g). 20 points each as MIT; the part splits are declared ours and add to 20 in every problem (checked).
- Added: P1(a), marked as our own. Quantitative criteria in 4(c), 5(c), 5(g) marked as our own choice. Positivity of E0, a marked as our assumption.
- MIT 1.5(e) asks for the equation "in terms of x"; the page also lets the reader use v = ẋ, which the exact equation needs. Correct.

## Licensing
- MIT sheet, notes and transcript: no "rights reserved" or "courtesy" notice (grep on all three texts).
- MIT's Figures 1 and 2 are not redrawn; the situations are described in words.
- Wording is the page's own; no sentence copied from the sheet. Georgi's textbook is not used; the one result it supplies (ω = √(k/m)) is restated with a citation to the notes.
- No OpenStax, LibreTexts or other third-party material.

## Notes
- Notes citations verified page by page: p. 2 eqs. 3–6, p. 3 eq. 9, p. 5 eq. 11 and e^{iθ} are right; only the p. 3 / p. 4 slips above are wrong. Transcript p. 8 (the condition) is right.
- info: P5 statement "positive in the direction of the motion that you pick" reads oddly; suggest "positive on the side you choose".
- info: P3(d) solution refers to the lesson's "The complex form"; that is a formula label inside the section "Three ways to write the solution", not a section title.
- No `## Summary`, no em dashes (grep). 62 lines of data/symbols.json mention this slug; `content:check` was not run by the reviewer.

COUNTS: errors=3 warnings=2 info=6

## Resolution (2026-11-21, by the page author)

1. Errors 1–3: the Lecture 1 notes citations now point to p. 4 where the text is there ("Force near a minimum" at="p. 4 (below eq. 10)", the cubic-term condition at p. 4, the P4(c) idea "notes, p. 4"), and the two Taylor-argument mentions read "notes, pp. 3–4".
2. Warning 4: the P5(c) period step cites the transcript pp. 9–10.
3. Warning 5: both p2-c mistake hints now say the i in 1 + iωτ cannot be dropped and that the denominator is made real by multiplying top and bottom by 1 − iωτ.
4. Info: the p4-b-b mistake `sqrt(-80*E0/(m*a^2))` (NaN everywhere) is replaced by `sqrt(16*E0/(m*a^2))`, with a hint that it uses the curvature at the maximum x = 0. The P5 statement now says "positive on the side you choose". The other info items are left as they are (the page already states them).

`status` is now `reviewed`.
