---
page: content/year-4/8.286/8-286-problem-set-1.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps1/ (read: Problem Set 1 PDF, pdftotext; the figures of Problems 2 and 3 are images and were not compared)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/97e432f95bb6ac4cfd94584c8a247246_tJ2AJJMcQXs.pdf (read: Lecture 3 transcript, printed pages 1-5 checked)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec03/ (read: Lecture 3 slides PDF, slide 11 rendered and checked)
verdict: pass-with-notes
---

# Review: Problem Set 1: the Doppler shift

Blind review: the final answers below were written from the stripped statements and MIT's PDF before the page's hints, answers, solutions and calcs file were opened.

## Blind solve

My answers (written from the stripped statements and MIT's PDF only, before opening the page):

- p1: wavelength in air behind a receding source λ = (u + v_s)Δt_S; the listener recedes, so crests pass at u − v_o: Δt_O = (u + v_s)Δt_S/(u − v_o). **1 + z = (u + v_s)/(u − v_o), z = (v_s + v_o)/(u − v_o).** Checks: v_o = 0 gives v_s/u; v_s = 0 gives v_o/(u − v_o) (Lecture 3 cases).
- p2a: distance R constant, travel time R/u constant: **z = 0**.
- p2b: source clock dilated, distance constant: **1 + z = γ = 1/√(1 − v²/c²), z = γ − 1** (redshift).
- p2c: observer's clock dilated: **1 + z = √(1 − v²/c²) = 1/γ, z = √(1 − v²/c²) − 1** (blueshift).
- p2d: emission at closest approach, ray perpendicular to source velocity in observer frame: **z = γ − 1**.
- p2e: reception at closest approach, ray perpendicular to observer velocity in source frame: **z = 1/γ − 1 = √(1 − v²/c²) − 1**.
- p3a: rigid rotation + time translation symmetry: every emission–reception pair repeats with the same ground-time lag, both cars have the same speed relative to the air: **z = 0 for (i), (ii), (iii)**.
- p3b: same symmetry argument in the ground frame; both clocks dilated by the same γ: **z = 0 for (i), (ii), (iii)**.

Comparison with the page (one line per answer id):

- p1-z: page `(vs + vo)/(u - vo)`; mine (v_s + v_o)/(u − v_o). Identical. Numerical check (script, direct two-crest timing with u = 340, v_s = 20, v_o = 30 m/s): 0.16129032 both ways.
- p2-a: page `0`; mine 0. Agree.
- p2-b: page `1/sqrt(1 - v^2/c^2) - 1`; mine γ − 1. Identical.
- p2-c: page `sqrt(1 - v^2/c^2) - 1`; mine 1/γ − 1. Identical.
- p2-d: page `1/sqrt(1 - v^2/c^2) - 1`; mine γ − 1. Identical.
- p2-e: page `sqrt(1 - v^2/c^2) - 1`; mine 1/γ − 1. Identical.
- p3-a: page choice 2 ("z = 0 from all three cars"); mine z = 0 for (i)-(iii). Agree. Numerical check: ground-frame ray tracing for front, behind and opposite cars (v = 0.8, wave speed 3, R = 1) gives z of order 1e-13.
- p3-b: page choice 1 ("z = 0 from all three cars, as for sound"); mine z = 0. Agree. Same script with c = 1, v = 0.8 c, both proper-time factors included: z of order 1e-13 for all three cars.

No disagreement between my answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 1, mistake hint for `(vs + vo)/(u + vs)` | (no hint in MIT) | "This is the shift in frequency, not in wavelength." | Correct in substance: the expression equals 1 − f_O/f_S, the fractional drop in frequency. Optionally say "the fractional drop in frequency, 1 − f_O/f_S" so it is not read as a redshift defined from frequencies. |
| 2 | info | Problem 2, opening paragraph | Source on a circle around a stationary observer; part (c) swaps roles | "An observer stands still at the centre ... In parts (d) and (e) the circle is replaced by a straight line." | Part (c) also changes the set-up (the receiver is on the circle). The part statement says so clearly; optionally add "and in part (c) the roles swap" to the opening. |
| 3 | info | Problem 3, both parts | "with what Doppler shift z does a given car receive ..." (free answer) | Multiple-choice boxes | Acceptable for the answer checker; the solution gives z for each of (i)-(iii). |
| 4 | info | Problems 2 and 3 | MIT has figures (circle; straight-line paths; merry-go-round) | Described in words, no figure | Fine for licensing (no MIT figure redrawn). An own generated diagram could help but is not required. |

## Arithmetic and answer checks
- Problem 1 check: 50/310 = 0.16129 (page 0.161), 50/340 = 0.14706 (page 0.147). Correct. Limits v_o = 0 and v_s = 0 reproduce the Lecture 3 cases (transcript pp. 2-4). Correct.
- Problem 2(b), (d): v = 0.6c gives γ = 1.25, z = 0.25; radial recession sqrt(1.6/0.4) − 1 = 1. Correct.
- Problem 2(c), (e): sqrt(0.64) − 1 = −0.2. Correct.
- Product of (b) and (c) ratios = 1, used in 2(c) and 3(b). Correct.
- Every solution ends with a check (units/limit/number): yes for p1, p2a-e, p3a-b.
- Answer boxes: each `expr` equals the solution's final formula. `vars` ranges: p1 u ∈ [300, 400], v_s, v_o ∈ [1, 50] keep v_o < u (finite, subsonic); p2 v ∈ [0.1, 0.9], c ∈ [1, 2] keep v < c. The checker compares at 1 part in 10^6 (lib/answers.ts `agree`), so every listed mistake is rejected at all sampled points (closest: `(vs+vo)/u` vs answer differs by a factor u/(u − v_o) ≥ 1.0025). Every mistake hint is true of its formula: 1 + z vs z; added shifts; swapped speed in the denominator; inverted time-dilation factor (blueshift/redshift swap); sign flips; radial formula; z ∝ v for line-of-sight motion.
- Calcs file (calcs/8.286/8-286-problem-set-1.yaml): each `answer:` entry equals the page's expr; the p1 direct two-crest formula, p2-d two-crest formula and p2-e aberration formula are correct derivations. `npm run content:check`: 0 errors; only warning for this page is the missing review file.
- Choice answers: p3-a answer index 2 and p3-b answer index 1 point at the correct choices.
- Hints: none gives the result away. The strongest (P1 hint 3 "add or multiply?", P3a hint 2 on rotational symmetry) point to the method, not the answer.

## Coverage and order
- Problems 1, 2(a)-(e), 3(a)-(b) are all present, in MIT's order, with MIT's points (15; 25 as 5 × 5; Problem 3 as 15 points optional, matching MIT's "extra credit"). Total 40 + 15 optional, as MIT.
- Physics matches MIT in every part: P1 source moving at v_s relative to the air, observer receding in the opposite direction at v_o; P2 the five cases including the "transverse" remark of (b); P3 four evenly spaced cars, sound then light.
- MIT's hint in Problem 1 (use the cases from Lecture Notes 1) is carried over in own words as hints 1-3 and the solution's method.
- The reading assignment and MIT's extra-credit grading note are not reproduced (not needed).

## Licensing
- The Problem Set 1 PDF and the Lecture 3 transcript and slides carry no "All rights reserved" or "Courtesy of" notice (grep: none).
- Wording is the page's own; no sentence of MIT's statements is copied (standard terms such as "transverse Doppler shift", "closest approach" only). No MIT figure is redrawn.
- No OpenStax or LibreTexts material.

## Notes
- Citations checked: `reading1` "pp. 1-2 (the moving-source case)" and "pp. 3-4 (the moving-observer case)" match the printed footers of the Lecture 3 transcript (board derivations: Δt_O/Δt_S = 1 + v/u on p. 2, z = v/u on p. 3; 1/(1 − v/u) on p. 4, including Guth's corrected slip "1 minus u over v"). `reading2` "slide 11" is the time-dilation slide with γ = 1/sqrt(1 − β²), eq. (1.10). Correct. Formulas cited `mit` with "(our own solution)" are correctly marked as the page's own.
- Physics claims checked: (b) and (c) are not one situation in two frames because the circling person accelerates (correct); (d) and (e) concern two different rays (a ray sent at closest approach arrives after the two have passed), so different shifts are consistent (correct); in 3(a) the travel times differ between pairs but each is constant (correct).
- Link to the lesson `/courses/8-286/doppler-effect` matches the course slug and the lesson slug. Prerequisite `doppler-effect` exists (Lecture 3).
- No em dashes; no `## Summary` with answers.
- No cosmology callout or `leadsTo` on a problem set; nothing to check there.

COUNTS: errors=0 warnings=0 info=4

## Resolution (2026-11-21, by the page author)

- No errors or warnings to fix.
- Info 1: the hint on the mistake `(vs + vo)/(u + vs)` now says "the fractional drop in frequency, 1 − f_O/f_S".
- Info 2–4: left as they are (the part labels already show the swap of roles; choice boxes and figures described in words are fine).
- Status set to `reviewed`.

## Change (2026-11-28, by Account A, from reader feedback)

Problem 1: the sentence "only the listener's speed is below the line" (unclear, since both speeds are smaller than u) now says both speeds are in the numerator and only $v_o$ is also in the denominator, $u - v_o$; the hint of the listed mistake says "in the denominator" too. Symbols: $v_s$ is now named "source speed" on this page (a meaning can carry its own name, `lib/symbols.ts`), not the general "sound or dispersion speed". No number changed.
