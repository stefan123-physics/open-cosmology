---
page: content/year-0/hs-1/constant-acceleration.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-07 (read; CC BY footer present, listed CCBY in docs/siyavula-licences.tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter4/ (read; PDF mit8_01scs22_chapter4.pdf, Sections 4.4 to 4.5.2 and Example 4.4; no "rights reserved" or "courtesy" notice)
verdict: pass-with-notes
---

# Review: Equations for constant acceleration

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "The five quantities": "any three of these five quantities fix the other two" | Siyavula: "You need any three known quantities ... to be able to calculate the fourth one" (no claim of uniqueness) | Any three fix the other two | Not true in general, and the page's own ball example shows it: from $v_i$, $a$, $\Delta x$ there are two times and two final velocities. Also fails for $a = 0$ with $v_i$, $v_f$, $a$ given. Say "any three let you work out the other two (sometimes with two possible answers, see below)". |
| 2 | warning | "Solving for the time": "Notice the square root: it is $v_f$ by Equation 4" | (page's own) | The root is $v_f$ | The root is the size of $v_f$, $\lvert v_f\rvert$; in the ball example the root is $+4.0$ but $v_f = -4.0$ m/s at the second pass. Say "it is the size of $v_f$". The formula also divides by $a$, so it fails for $a = 0$; one clause would help. |
| 3 | warning | Formula "The time from the quadratic formula", `cite="mit" at="Sec. 21.7, Equation (3), solved for the time with the quadratic formula"` | Siyavula 21.7 never solves Eq. (3) with the quadratic formula; its only time-solve (Worked example 8) is from rest, $t^2 = 8$ | Cited as if in Sec. 21.7 | Make the `at` say it is derived here from Eq. (3) and the quadratic formula of lesson 0.6 (Stitz–Zeager Thm 0.9, as cited there), e.g. "Sec. 21.7, Equation (3); solved for Δt on this page with the quadratic formula (lesson 0.6)". |
| 4 | warning | Whole page: equations written with $\Delta t$ and without vector arrows | Siyavula writes $\vec v_i$, $\vec v_f$, $\Delta\vec x$, $\vec a$ and $t$ (time from $t=0$); MIT writes $v_0$, $v(t)$, $t$; lesson 1.5 also used $t$ | $\Delta t$ throughout | Add one sentence: "Siyavula and lesson 1.5 write $t$ for the time since the start; we write $\Delta t$ because the stage need not start at $t = 0$." (Dropping the arrows was already explained in lesson 1.3.) |
| 5 | warning | "The position–time graph is a parabola": "For a positive acceleration it opens upwards and gets steeper and steeper, because its slope is the velocity ..., which keeps growing" | MIT Fig. 4.10 only notes the non-zero initial slope $v_0$ | Always steeper and steeper | True only for $v_i \ge 0$. With $v_i < 0$ (allowed by the interactive plot, slider down to −10) the graph first gets less steep, turns, then steeper. Say "its slope keeps increasing" or add "(starting from rest or moving forwards)". |
| 6 | info | "Equation 2": "So at constant acceleration (and only then) the average velocity is simply halfway ..." | Siyavula and MIT state it for constant acceleration only | "and only then" | Other motions can have this property by coincidence; "(in general only then)" or drop the bracket. |
| 7 | info | "Signs and slowing down" and the braking example use "deceleration of 8.0 m/s²" | Lesson 1.4 (acceleration) advises avoiding "deceleration" for a negative acceleration | Uses "deceleration" for the size of a slowing-down acceleration, with the sign rule explained | Consistent enough (the page explains it), but a back-reference to lesson 1.4's advice would avoid seeming to contradict it. |
| 8 | info | Equation 4 derivation | Siyavula substitutes $t$ into Eq. (3) | Substitutes into Eq. (2) | Already flagged on the page ("derived here by a shorter route"). Correct. |

## Formulas and citations
- Eq. 1 $v_f = v_i + a\,\Delta t$: Siyavula 21.7, Eq. (1), derivation in "Extension: Finding the equations of motion" (Derivation of Equation 1). Correct. MIT cross-reference "Sec. 4.5, Eq. (4.4.2)": checked, Eq. (4.4.2) $v(t) = v_0 + at$ sits in the introduction of Sec. 4.5 (MIT's equation numbering lags its section numbering). Correct.
- Eq. 2 $\Delta x = \tfrac12(v_i+v_f)\Delta t$: Siyavula Eq. (2), derived from rectangle plus triangle, as the page does. Correct.
- Eq. 3 $\Delta x = v_i\Delta t + \tfrac12 a\Delta t^2$: Siyavula Eq. (3), Derivation of Equation 3 (eliminate $v_f$ from Eq. 2), same route as the page. MIT cross-reference Sec. 4.5.2, Eq. (4.4.9) via trapezoid area (4.4.5)–(4.4.6): correct.
- Eq. 4 $v_f^2 = v_i^2 + 2a\Delta x$: Siyavula Eq. (4). Page derivation via Eq. 2 and difference of squares checked algebraically: correct.
- Position formula $x = x_i + v_i\Delta t + \tfrac12 a\Delta t^2$, `cite="reading1" at="Sec. 4.5.2, Eq. (4.4.9)"`: checked, Eq. (4.4.9) is $x(t) = x_0 + v_0t + \tfrac12at^2$ in Sec. 4.5.2, with Fig. 4.10 the graph. Correct; notation difference is stated in the `at`.
- Quadratic-formula time: algebra checked, $A=\tfrac12a$, $B=v_i$, $C=-\Delta x$ gives $\Delta t = (-v_i \pm\sqrt{v_i^2+2a\Delta x})/a$. Correct; citation see row 3.
- Galileo claim ("first to find this law ... as Siyavula's section 21.7 notes"): Siyavula's Galileo box says exactly this (distance from rest proportional to square of time). Supported.
- Physics of signs (same sign speeding up, opposite slowing down; negative $a$ can speed up): correct and matches lesson 1.4.
- Required content: the page shows that constant acceleration gives a parabolic position–time graph (section "The position–time graph is a parabola", quadratic in time, lesson 0.6, two generated graphs and an interactive one, plus the ball parabola). Lesson 0.6 introduces the parabola $y = ax^2 + q$ and, in its quadratic-equation section and sim, calls $y = ax^2+bx+c$ a parabola, so the step "quadratic in time, so a parabola" rests on an earlier lesson. Requirement met.

## Arithmetic and answer checks
All recomputed independently (Python); `pytest tests/calc -k constant-acceleration`: 42 passed.
- Eq. 1 aside: 3.0 × 4.0 = 12 m/s. Correct.
- v–t caption and car example: 3.0 × 6.0 = 18 m/s; 18 × 3.6 = 64.8 ≈ 65 km/h; ½ × 3.0 × 36 = 54 m; ½(0+18)×6 = 54 m; 2×3×54 = 324, √324 = 18. Correct.
- Braking: 90/3.6 = 25 m/s; 25 × 0.80 = 20 m; 625/16 = 39.06 ≈ 39 m; total 59.06 ≈ 59 m; 45 km/h = 12.5 m/s; 12.5 × 0.80 = 10 m; 156.25/16 = 9.77 ≈ 9.8 m; total 19.8 ≈ 20 m; braking time 3.125 ≈ 3.1 s; ½×25×3.125 = 39.06 ≈ 39 m. Correct. "Quarter of the braking distance" exact (39.06/4 = 9.77).
- Galileo: 6.0 m at 2.0 s, 24 m at 4.0 s. Correct.
- x–t graph: 1.5t² and 9t meet at t = 6 s, 54 m; for 0 < t < 6, 9t > 1.5t², so "first the steady car is ahead" correct. 9.0 m/s = 54/6 average velocity. Correct.
- Cyclist: discriminant 16 + 60 = 76; √76 = 8.718; roots 9.436 ≈ 9.4 s and −25.44 ≈ −25 s; check 120/12.72 = 9.436 ≈ 9.4 s. Correct.
- Ball: t² − 6t + 5 = (t−1)(t−5); v = +4.0 and −4.0 m/s; 36 − 20 = 16; turn at 3.0 s, 9.0 m. Graph caption consistent. Correct.
- Quiz 1: answer 2 ($v_f^2 = v_i^2 + 2a\Delta x$), the only one without $\Delta t$. Correct; others contain $\Delta t$.
- Quiz 2: 0.40 × 50 = 20 m/s, answer index 2 = "20 m/s". Correct; 125 = 50/0.40 as the explanation says; 2.0, 8.0 wrong.
- Quiz 3: a = −225/90 = −2.5 m/s², index 1. Correct; +2.5 (sign), −5.0 (factor 2), −0.33 (15/45) wrong.
- Quiz 4: four times, index 2. Correct.
- Quiz 5: 3.0 × 4 = 12 m, index 2. Correct; 6.0 (linear), 9.0, 24 wrong.
- Flashcards: all five true.
- Calcs file: every result-like number on the page has an entry with `source: {cite, at}` and the note "(the numbers are the page's own)". Intermediate values 324, 625/16, 225/90 and 12.7 are not separate entries but are covered inside other entries' formulas (info only). The `at` "Applications in the real-world" on the km/h conversion entries (brake-vi, brake-half-vi) is loose: the conversion comes from lesson 1.2, not that subsection (info).
- Honesty of "(the numbers are the page's own)": checked against every Siyavula number (725 m/10 s/10 m/s; 64 m/4 s; exercise numbers 10, 1, 10; 30 m/s in 5 s; 20 m/s in 20 m; 4 m/s² 10 s; 4, 20, 12 s; 144 in 8 s; truck 10 m/s, −1.25 m/s², 0.5 s, 50 m) and MIT Example 4.4 (100 m, 20 m/s, 10 s, 2.0 m/s²). None reused. The claim is honest.

## Only earlier terms
- Uses: slope of v–t graph = acceleration (1.4/1.5), area under v–t graph = displacement and trapezium (1.5, 0.5), slope of x–t graph = velocity (1.3), constant velocity (1.2), rearranging (0.4), parabola, quadratic formula, factoring, zero product (0.6), km/h ↔ m/s via 3.6 (1.2, 0.2), same/opposite sign rule and "deceleration" (1.4), supernovae and expansion speeding up (1.4 cosmology callout). All introduced earlier.
- "Uniformly accelerated motion" and "constant acceleration" are defined on this page in bold. "Reaction time" is used without definition but is plain English and explained in context. "Difference of squares" ($(v_f+v_i)(v_f-v_i) = v_f^2 - v_i^2$) is used with the identity written out; fine.
- Forward references (lessons 1.7, 1.8, Block 6 charged particle in a uniform field) are marked as later; the Block 6 claim matches lesson 1.4's wording and the §4 row 6.3 (electric field), though whether Block 6 actually treats the parabolic path is uncertain (not written yet).
- No term used before introduction found.

## Coverage
- §4 row 1.6: "Equations for constant acceleration", no PhET, leads to `8-01/acceleration-1d`. Covered fully: the four equations, derivations, choosing an equation, signs, braking/stopping distance (Siyavula's "Applications in the real-world"), position–time parabola, quadratic time with two roots, multi-stage motion and limits of validity. Above Siyavula Grade 10 level; matches VWO level.
- Nothing from Siyavula 21.7 is left out (its alternative notation $u$, $v$, $s$ is not mentioned; info, could be useful since VWO books in English often use $u$, $v$, $s$, but not required).

## Where this leads
- `leadsTo: 8.01 lecture 2` → content/year-1/8.01/acceleration-1d.mdx, "Acceleration in one dimension", which derives velocity and position by integration of constant acceleration. Matches the §4 row and the `why`. Correct.
- `towards: false`: correct, 1.6 is not the block's last lesson (1.11 is). The cosmology callout (expected deceleration by gravity, supernova discovery of acceleration, acceleration not constant over cosmic history) is correct; "works this out with the equations of general relativity" is fair (8.286 uses the Friedmann equations, which Guth motivates largely with Newtonian arguments; info only).

## Licensing and AI terms
- No copied sentences. Closest wording: page "Galileo was the first to find this law for accelerated motion" vs Siyavula "Galileo Galilei of Pisa, Italy, was the first to determined the correct mathematical law for acceleration": a short attributed paraphrase. Page's 4-step method differs in wording and content from Siyavula's 5-step "Problem solving strategy".
- No copied figures: all three plots are `<Plot>` generated from formulas; Siyavula's v–t figure and time-line, and MIT Figs 4.8–4.10, are not reproduced.
- Worked examples and quiz are original. Structural resemblances (standard textbook patterns, different numbers and situations): the braking example follows the shape of Siyavula Worked example 9 (reaction distance + braking distance) but with different numbers, method (Eq. 4) and the half-speed comparison; quiz 3 has the shape of Siyavula exercise 4 (racing car stops in 20 m). Acceptable.
- No Siyavula logo or "Everything Science" branding; Siyavula is named once in prose as the source of the Galileo remark (attribution, not branding).
- MIT chapter 4 has no exclusion or "All rights reserved" notice.
- No NASA or ESO material. No forbidden source cited or used (OpenStax names in the §4 row ignored, not opened).

## Notes
- No errors found. The five warnings are wording or citation precision issues; #1 and #2 are worth fixing because the page's own ball example contradicts them.
- Source page footer checked: "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License."

## Resolution (2026-11-20, by the page author)
1. "The five quantities" now says any three "let you work out the other two", notes that there can be two answers (the ball example) and that with $a = 0$, $v_i$ and $v_f$ give nothing new; the Summary line says "(sometimes with two possible answers)".
2. The square root is now "the size of $v_f$ (the speed at the end, without its sign)"; added that the formula divides by $a$ and fails for $a = 0$ (then $\Delta t = \Delta x / v_i$).
3. The `at` of "The time from the quadratic formula" now reads "Sec. 21.7, Equation (3); solved for Δt on this page with the quadratic formula of lesson 0.6, not in the source".
4. Added a sentence after the list of quantities: Siyavula and lesson 1.5 write $t$ for the time since the start; this lesson writes $\Delta t$ because a stage need not start at $t = 0$.
5. Parabola section: the slope "keeps increasing"; steeper and steeper only when starting from rest or moving forwards, while a graph that starts moving backwards first gets less steep, turns and then gets steeper.
6. Changed to "(and, in general, only then)".
7. Added a back-reference: lesson 1.4 advised against "deceleration" for a negative acceleration; here it only names the size, with the sign written separately.
8. No change needed (already flagged on the page).
Info on calcs: the `at` of brake-vi and brake-half-vi now says the km/h conversion by 3.6 is from lesson 1.2, not in the source. Intermediate values (324, 625/16, 225/90, 12.7) left inside other entries' formulas. Siyavula's alternative notation u, v, s not added (optional).
Checks: `pytest tests/calc -k constant-acceleration` 42 passed; `content:check` reports no error for this page.
