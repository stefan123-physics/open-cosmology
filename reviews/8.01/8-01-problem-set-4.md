---
page: content/year-1/8.01/8-01-problem-set-4.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01f16_pset4/ (read: pdftotext and page renders of all 7 pages, figures of Problems 1, 4, 5 and 6 looked at)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read: Example 8.11 Capstan, pp. 8-46 to 8-49)
verdict: pass-with-notes
---

# Review: Problem Set 4: pulleys, ropes with mass and drag

## Blind solve

### My answers (written before opening hints, answers, solutions or calcs)
- p1a: m2,min = 2 m1 (sin th + mus cos th)
- p1b: m2,max = 2 m1 (sin th - mus cos th)
- p1c: a1 = 2 g [m2 - 2 m1 (sin th + muk cos th)] / (4 m1 + m2)  (constraint a2 = a1/2, T = 1/2 m2 (g - a1/2))
- p2: v(t) = -(1/c) ln( e^(-c v0) + b c t / m ), valid until v = 0 at t = m (1 - e^(-c v0)) / (b c)
- p3: T(r) = m2 om^2 l + m1 om^2 (l^2 - r^2) / (2 l)
- p4a: T_A = T_1 (equal; massless vertical rope)
- p4b: m1 = m2 e^(mus pi)
- p4c: a = g (m1 - m2 e^(muk pi)) / (m1 + m2 e^(muk pi))
- p5a: a_x = -C v_x / m
- p5b: a_y = g - C v_y / m
- p5c: v_x = u e^(-C t/m)
- p5d: v_y = (m g / C)(1 - e^(-C t/m))
- p5e: v_xT = 0
- p5f: v_yT = m g / C
- p6: a2 = 2 g (2 m2 - m1) / (m1 + 4 m2)  (figure: rope 1 from block 1 over A to the axle of B; rope 2 floor-up-over-B-down to block 2; a1 = -aB, a2 = 2 aB, T1 = 2 T2)

### Comparison with the page (one line per answer id)
- p1-a: page `2*m1*(sin(th) + mus*cos(th))` = mine. Agree.
- p1-b: page `2*m1*(sin(th) - mus*cos(th))` = mine. Agree.
- p1-c: page `2*g*(m2 - 2*m1*(sin(th) + muk*cos(th)))/(4*m1 + m2)` = mine (identical form). Agree.
- p2-v: page `-log(exp(-c*v0) + b*c*t/m)/c` = mine. Agree.
- p3-t: page `m2*om^2*l + m1*om^2*(l^2 - r^2)/(2*l)` = mine. Agree.
- p4-a: page choice "T_A is equal to T_1" = mine. Agree.
- p4-b: page `m2*exp(mus*pi)` = mine. Agree.
- p4-c: page `g*(m1 - m2*exp(muk*pi))/(m1 + m2*exp(muk*pi))` = mine. Agree.
- p5-a: page `-C*vx/m` = mine. Agree.
- p5-b: page `g - C*vy/m` = mine. Agree.
- p5-c: page `u*exp(-C*t/m)` = mine. Agree.
- p5-d: page `m*g/C*(1 - exp(-C*t/m))` = mine. Agree.
- p5-e: page `0` = mine. Agree.
- p5-f: page `m*g/C` = mine. Agree.
- p6-a2: page `2*g*(2*m2 - m1)/(m1 + 4*m2)` = mine. Agree.

No disagreements. All 15 answers agree in identical algebraic form. In addition `npm run calc:test -- -k 8-01-problem-set-4` passes (27 entries; every formula answer is checked against an independent numerical solve or integral) and `npm run content:check` reports 0 errors (answer-box audit included).

### Geometry readings (checked against MIT's figures)
- P1 (figure p. 1): string from block 1 up the incline over pulley 1 (mounted at the top of the incline), down the right side, under pulley 2, up to the overhanging support. The page's description matches; a2 = a1/2 follows.
- P4 (figure p. 4): B on the left above m2, A on the right above m1 (the heavier block). The page matches.
- P5 (figure p. 5): +x right, +y down. The page matches.
- P6 (figure p. 6): the red rope over A carries block 1 on its left end; its right end drops vertically in line with B's centre and ends at B's axle (the dot); the second rope rises from the floor at B's left edge, goes over B and down at B's right edge to block 2. MIT's title "Two Strings" confirms two separate ropes. The writer's reading is correct. The stripped statement ("Its right end goes down to the centre of pulley B and carries that pulley"; "The second rope is tied to the floor ... over pulley B ... block 2 hangs from its end") is enough on its own for a student to set the problem up.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | P1(a) solution, "Check the result", last sentence | (no such claim) | "More friction or a steeper incline asks for a heavier block 2." | False for steep inclines: d/dθ (sin θ + μs cos θ) = cos θ − μs sin θ < 0 once tan θ > 1/μs. Numerical check, μs = 0.5: sin θ + 0.5 cos θ = 1.118 at θ = 1.107 rad, 1.070 at 1.4 rad, 1.000 at π/2. Replace with "More friction asks for a heavier block 2, and so does a steeper incline as long as tan θ < 1/μs", or drop "or a steeper incline". |
| 2 | info | P1(c) statement | "magnitude of the acceleration", a_x1 | "the size a1"; the answer box takes the signed formula | Fine: within the vars (m2 in [8, 12]) the formula is positive. No change needed. |
| 3 | info | P2 statement | "moving parallel to the x-axis", force "directed against its motion", F = −b e^{cv} î | "moves along the x-axis, in the +x direction" | +x is the only direction for which MIT's formula points against the motion, so this is a faithful reading. No change needed. |
| 4 | info | "What you need from the lessons", capstan Formula | Notes p. 8-49 put the labels (8.6.107)/(8.6.108) side by side next to the ratio T_B/T_A = e^{−μs θ_BA}; the product form below is unlabelled | at="Example 8.11, Eq. (8.6.108), p. 8-49" | Correct page; the equation number is acceptable and matches the massive-rope lesson. No change needed. |
| 5 | info | P5 statement | no mention of buoyancy | "(Our note: ... leave buoyancy out.)" | Labelled as ours; fine. |

## Arithmetic and answer checks
- Every step of every solution re-derived; all correct. Each solution ends with a check (units, limits or a number).
- Limits checked: P1(a) vertical wall gives 2 m1; P1(c) m1 → 0 gives 2g; P2 small-c limit v0 − bt/m and stopping time m(1 − e^{−c v0})/(bc); P3 T(0) = (m2 + m1/2) l ω²; P4(c) μk = 0 gives the Atwood result; P6 m1 → 0 gives g, m2 → 0 gives −2g, rest at m1 = 2 m2. All correct.
- Numbers: e^{0.3π} = 2.566 ≈ 2.6 (P4(b)); e^{−5} = 0.0067 ≈ 0.007 (P5(e)). Correct.
- Answer boxes: every `vars` range keeps the answer finite and physical (P1(b): θ in [0.7, 1.0] with μs ≤ 0.5 keeps tan θ > μs; P1(c): m2 ≥ 8 keeps a1 > 0; P2: t ≤ 0.1 stays below the smallest stopping time in range, 0.60 s, and keeps every listed mistake's logarithm finite; P4(c): m2 e^{μkπ} ≤ 7.0 < m1). The checker's tolerance is 1e-6 relative (lib/answers.ts `agree`), so every listed mistake is distinguishable from the answer (content:check audit passes).
- Mistake hints, each verified against its formula: P1(a) all four true (the sin/cos swap gives 2 m1 at θ = 0, μs = 0); P1(b) all three; P1(c) all four (the "T = m2 g/2" formula, the block-2 formula and the one-string formula re-derived); P2 all four (the e^{+cv0} log formula does give dv/dt = −(b/m) e^{−cv}; b t/m is a speed); P3 all five (the last one is force × length); P4(b) all four; P4(c) all four (the e^{−μkπ} version exceeds the frictionless value; the swapped version tends to g for strong friction); P5 all; P6 all six (re-derived: pulley-B acceleration for a2 gives g(2m2 − m1)/(m1 + 2m2); one tension for both ropes gives 2g(m2 − m1)/(m1 + 2m2)).
- Hints: none gives a result away. P6's third hint leads to the constraint but leaves it to the reader.
- P4(a) choice answer index 2 = "equal". Correct.

## Coverage and order
- All six MIT problems, in MIT's order, with all parts in MIT's order (1a–c, 2, 3, 4a–c, 5a–f, 6). Same physics, own wording.
- Points: MIT gives none; the page says the points are its own. Totals: 20 + 15 + 15 + 20 + 18 + 12 = 100; part points add up to each problem's points.
- `covers: [12, 13, 14]` matches the lecture numbers of pulleys-and-constraints (12), massive-rope (13) and resistive-forces (14).
- Remarks of our own are labelled as such (P1(b), P1(c), P2, P4(b) number, P4(c), P5 buoyancy note).

## Licensing
- MIT's set and Chapter 8 carry no "rights reserved" or "Courtesy of" notice (grep of both texts). No MIT figure is redrawn; the figures are described in words. No OpenStax or LibreTexts material. No verbatim copying beyond standard phrases.

## Notes
- No `## Summary` with answers; no em dashes; symbols pass content:check; links to existing lessons use the site's `/courses/8-01/` form.
- The capstan reference to the massive-rope lesson is correct: that lesson covers Example 8.11 with the same formula and citation.

COUNTS: errors=0 warnings=1 info=4

## Resolution (2026-11-21, by the page author)

- Finding 1 (warning): fixed. Problem 1(a), "Check the result" now reads "More friction asks for a heavier block 2, and so does a steeper incline as long as tan θ < 1/μs" (the derivative of sin θ + μs cos θ is cos θ − μs sin θ, positive only below that angle).
- Finding 2 (info): Problem 1(c) now asks for "the acceleration a1 of block 1, taken positive up the incline" instead of "the size a1", which fits the signed formula in the answer box.
- Findings 3 to 5 (info): no change needed, as the reviewer says.
- No number or formula on the page changed, so the calcs file is unchanged. `content:check`, `calc:test -k 8-01-problem-set-4` and `test:answers` pass. Status set to `reviewed`.
