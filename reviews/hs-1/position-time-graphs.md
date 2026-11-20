---
page: content/year-0/hs-1/position-time-graphs.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-06 (read; CC BY footer present; listed CCBY in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-05 (read; CC BY footer present; listed CCBY in docs/siyavula-licences.tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter4/ and its PDF mit8_01scs22_chapter4.pdf (read; Sec. 4.3, Examples 4.1 and 4.2; no "rights reserved" or "excluded" notice found)
verdict: pass-with-notes
---

# Review: Position–time graphs

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Towards cosmology" callout, last sentence | (no cited source; standard cosmology) | "the graphs are curves, and cosmologists read the velocity from their tangents, exactly as in this lesson" | Nobody observes one galaxy's distance over time; recession speeds come from redshifts, i.e. only the slope *now* is measured, and the curve is modelled. Rephrase, e.g. "the speed measured today is the slope of the tangent at the present moment, and cosmologists work out the shape of the curve from how that slope changed". |
| 2 | warning | Flashcard 3 and body text "A negative slope" | MIT 4.3.3: v negative means travelling in the negative x-direction | Flashcard: "moves in the negative direction, back towards (or past) the origin"; body: "back towards the origin (or further past it)" | Moving in the negative direction is towards the origin only while x > 0; an object at x < 0 with negative velocity moves *away* from it. Drop the origin clause on the flashcard, or say "towards the origin if x is positive, away from it if x is negative". |
| 3 | info | Formula "Velocity as the slope" | Siyavula 21.6 writes v = Δx/Δt = (x_f − x_i)/(t_f − t_i), with vector arrows | (x₂ − x₁)/(t₂ − t₁), scalar v | Same physics; the subscripts 1, 2 for two points on a line are natural here. Optional: one clause noting this is lesson 1.2's (x_f − x_i)/Δt with the vector arrow dropped because the motion is along one line (lesson 1.2 used \vec v). |
| 4 | info | "Average velocity" section, "tangent is parallel to the secant ... here t = 2.5 s" | MIT Example 4.2 (Mean Value Theorem), Eqs. (4.3.17)–(4.3.20): t₁ = (t_f + t_i)/2 for x = x₀ + v₀t + ½bt² | Stated without citation | Correct (standard). Could add "(the mean value theorem; reading2, Example 4.2)" so the claim has a source. |
| 5 | info | "Constant velocity" paragraph | MIT 4.3.3: "The slope, the rise over the run, is the change in position divided by the change in time" | "The slope, rise over run, is the change in position divided by the change in time, which is exactly the velocity of lesson 1.2" | A short standard phrase, not a copied sentence; rewording (e.g. "rise over run: how much the position changes divided by how long it took") would remove any doubt. |

## Formulas and citations
- `v = Δx/Δt = (x₂ − x₁)/(t₂ − t₁)`, cite `mit` (Siyavula 21.6) at "21.6, Motion at constant velocity": present there (Vivian walking 100 m in 100 s, gradient of the x–t graph, and the −1 m/s return walk). Also in the "Stationary Object" gradient box. Correct.
- Instantaneous velocity limit, cite `reading2` at "Sec. 4.3.3, Eq. (4.3.5)": matches Eq. (4.3.5) exactly (the page omits the `dx/dt` notation, appropriate at this level).
- Average velocity `v_ave = (x(t₂) − x(t₁))/(t₂ − t₁)`, cite `reading2` at "Sec. 4.3.3, Eq. (4.3.4)": Eq. (4.3.4) is the same expression with t₂ = t + Δt, introduced as "the slope of the line connecting the points". Correct; Eq. (4.3.1) in Sec. 4.3.1 is the bare definition. The `location` field of reading2 names both sections correctly.
- Reading1 (Siyavula 21.5) supports the parenthetical definition "the velocity over a very short time interval, Δt close to zero" (21.5: "change in position over the change in a very small time interval (Δt ≈ 0)"). The page then gives the proper limit, which is better.
- Siyavula 21.6 contains a loose statement ("The gradient of a position vs. time graph gives the average velocity, while the tangent ... gives the instantaneous velocity"); the page correctly says the *slope* of the tangent and the slope of the *secant*. Good that it does not follow the source here.
- All sources are §2.0 sources; no forbidden source cited or used.

## Arithmetic and answer checks
All recomputed independently; `pytest -k position-time` on the calcs file: 27 passed.
- Cyclist: Δx = 90 m, v = 90/15 = 6.0 m/s; 6.0 × 3.6 = 21.6 ≈ 22 km/h. Correct.
- Walk: 60/40 = 1.5 m/s; (0 − 60)/(100 − 70) = −2.0 m/s; distance 120 m, displacement 0; 1.5 × 40 = 60, −2.0 × 30 = −60. Plot expression reproduces these (60 m at 40 s and 70 s, 0 at 100 s). Correct.
- Braking car x = 20t − 2.0t²: x(2.0) = 32 m; v(2.0) = 20 − 4(2.0) = 12 m/s; tangent x = 32 + 12(t − 2) passes (0, 8) and (4.0, 56); slope 48/4 = 12. x(1.9) = 38 − 7.22 = 30.78, x(2.1) = 42 − 8.82 = 33.18, 2.40/0.20 = 12.0 (exact for a parabola with a symmetric interval). Stops at t = 5.0 s, x = 50 m. Correct.
- Secant: x(1.0) = 18, x(4.0) = 48, v_ave = 10 m/s; 20 − 4t = 10 gives t = 2.5 s = (1 + 4)/2, as MIT Eq. (4.3.20) predicts. Correct.
- Lift: 2.0 × 6.0 = 12 m, top at 11 s, wait to 15 s, 12/3.0 = 4.0 s, ground at 19 s. Plot expression matches. Correct.
- Quiz 1: answer 1 (at rest, 8 m from origin). Right; others wrong.
- Quiz 2: (0 − 45)/15 = −3.0 m/s, answer 1. 3.0 (sign lost), 0.33 (inverted), −45 wrong. Right.
- Quiz 3: steeper and steeper, curving upwards → positive, growing slope → speeding up. Right. (Strictly "slope growing = speeding up" needs the slope positive; "curves upwards" makes that so here.)
- Quiz 4: horizontal tangent → instantaneous rest. Right; "has reversed time" is a throw-away distractor (info).
- Quiz 5: (36 − 4.0)/(5.0 − 1.0) = 8.0 m/s; 7.2 = 36/5, 9.0 = 36/4, 32 = Δx. Answer 1 right.
- Flashcards: all true except the origin clause of flashcard 3 (row 2).
- Every number on the page is in the calcs file. Every entry has `source: {cite, at}` and says "(the numbers are the page's own)"; the cited sections cover the methods (slope at constant velocity in 21.6; small interval in 21.5; tangent/secant in MIT 4.3). Minor: `walk-distance` cites "21.6, Worked examples" (Worked example 4 does add distances, but from areas of a v–t graph); lesson 1.1's distance definition would fit better. Info only.

## Only earlier terms
- Reference point, origin, positive direction, position x, displacement, distance: lesson 1.1.
- Velocity (signed), average velocity, instantaneous velocity, uniform motion: lesson 1.2.
- Slope, rise over run, horizontal line has slope zero, gradient: lesson 0.5 (`graphs-and-slope`), referenced as such.
- Secant, tangent, limit, x(t) ("x of t"): lesson 0.10 (`rates-of-change-and-area`), referenced as such.
- Hubble's law (cosmology callout): lessons 0.5 and 0.11. Fine.
- "Acceleration" is only named with a forward reference to lesson 1.4; acceptable as a preview.
- "Lift" (British usage) fine. No term used before introduction found.

## Coverage
- §4 row 1.3: position–time graphs, PhET calculus-grapher. Covered: rest, constant velocity (positive and negative slope), steepness as speed, curved graphs and speeding up/slowing down, tangent and secant, words ↔ graph, the "graph is not the path" misconception. Good VWO-level coverage.
- Siyavula 21.6 also treats v–t and a–t graphs and areas under them: correctly left to lessons 1.5 and later.
- Not covered: the distinction between a *distance*–time graph (never decreasing; used in Siyavula's experiments) and a position–time graph; reading a graph that crosses the time axis (x changing sign). Neither is essential; a sentence on the first would help, since school experiments often plot distance.
- PhET: Calculus Grapher 1.1.3 is in `public/phet/` and has a derivative graph, consistent with the page's description; I did not run the simulation interactively (uncertain whether the default screen shows the derivative below without a toggle).

## Where this leads
- `leadsTo` 8.01 lecture 1 → `content/year-1/8.01/position-and-velocity-1d.mdx` ("Position and velocity in one dimension"), the same topic, matching §4. Correct.
- `towards: false` is right: lesson 1.3 is not the block's last lesson (1.11 is).
- Cosmology callout: Hubble's law, the straight-line extrapolation giving one common moment (≈ 1/H), and "slowed down and later sped up" are correct. Row 1 for the last sentence.

## Licensing and AI terms
- No copied sentences found; closest wording noted in row 5.
- No copied figures: all four graphs are generated `<Plot>`s from formulas; Siyavula figures 21.2–21.9 not used.
- Worked examples (cyclist, post-box walk, braking car, lift) and quiz questions are the page's own: Siyavula's are Vivian/taxi, a car (Worked example 3), a truck v–t graph, an athlete (4 m in 4 s), Exercise 21.5/21.6 (Thandi, parked car, bus at 12 m/s); MIT's are general x₀ + ½bt² examples. The post-box walk resembles Vivian's walk to and from the taxi in idea only (different numbers, a waiting stage, different speeds).
- No Siyavula logo, brand or "Everything Science" branding; no embedded Siyavula simulation used.
- MIT Chapter 4: no "All rights reserved" or "excluded" notice.
- No NASA or ESO material. No forbidden source.

## Notes
- The secant plot allows t₁ > t₂ and t₁ = t₂ (sliders 0–4.5 and 0.5–5); at t₁ = t₂ the secant is undefined. Harmless, but the slider ranges could be made non-overlapping, or the component may already handle it (not checked).
- The page writes v as a signed number while lesson 1.2 used \vec v; see row 3.

## Resolution (2026-11-20, by the page author)
1. Cosmology callout rewritten: only today's slope is measured (from the galaxies' light), the rest of each curve is worked out from how the expansion is thought to have changed; today's speed is the slope of the tangent at "now".
2. Flashcard 3 and the "A negative slope" paragraph now say: towards the origin while x is positive, away from it once x is negative. (Quiz 2's explanation keeps "back towards the origin", which is true there: x goes from 45 m to 0.)
3. Added a sentence after the slope formula: it is lesson 1.2's Δx/Δt with the points numbered 1 and 2, and the velocity is a signed number rather than a vector because the motion is along one line.
4. Added a bracketed note naming the mean value theorem and pointing to MIT's Example 4.2 in Sec. 4.3 (halfway through the interval for a parabola).
5. Reworded to "Its slope (rise over run: how far the position changed, divided by how long that took)".
Coverage note: added a paragraph on distance–time graphs (never going down) versus position–time graphs. Calcs note: `walk-distance` source `at` now says honestly that adding the legs follows lesson 1.1 and is not in 21.6. Secant slider note: not changed; `components/Plot.tsx` already uses the tangent slope when t₁ = t₂, and t₁ > t₂ still draws the right secant.
Checks: `pytest -k position-time` 27 passed; `content:check` shows no error for this page.
