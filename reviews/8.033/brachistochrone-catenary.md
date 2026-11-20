---
page: content/year-2/8.033/brachistochrone-catenary.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture9_lagrang/ (read: slides PDF, 5 slides, as extracted text and per-slide images; OCW resource page also fetched)
  - no transcript exists for 8.033 Fall 2006 (not read; nothing to read)
verdict: needs-changes
---

# Review: The brachistochrone and the hanging chain

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `<Formula label="First integral" … at="slide 3">`, `<Formula label="Cycloid" … at="slide 3">`, `<Formula label="Catenary" … at="slide 3">` | Slide 3 is only the agenda: "Using the Euler-Lagrange equation: brachistochrone problem, caternary; Midterm review". It has no equation. No slide has the first integral, the cycloid parametrisation, T = θ√(R/g) or y = λ + a cosh((x − x₀)/a). | The three formulas are cited `at="slide 3"`, which reads as "this equation is on slide 3". The prose says the derivations are the page's own, but the equations themselves are not on the slides either. | Make the `at` text say it, e.g. `at="slide 3 (problem listed); formula is the page's own"`, for all three. |
| 2 | warning | `<Formula label="Time of descent" … at="slide 2">` | Slide 2 shows the figure (flat board, cycloid, circular arc, 100 ft by 100 ft, arrow labelled g₀) and the line element ds² = dx² + dy². T = ∫ds/v and v = √(2gy) are not on it. | Cited `at="slide 2"`. The prose correctly says only ds² comes "from the figure". | `at="slide 2 (figure and ds² = dx² + dy²); the integral is the page's own"`. |
| 3 | warning | Intro, line 48: "the solutions were worked on the board and are not on them" | There is no transcript or video in the source. What happened in the room cannot be checked. | States as fact that the solutions were worked on the board. | Say only what can be checked: "the solutions are not on the slides, so this page gives them in its own words". (The Lecture 8 page uses the same wording. Fix it there too if it is unsupported.) |
| 4 | warning | Intro, line 48: "Lecture 9, named after Joseph Louis Lagrange (slide 1)" | Slide 1 is "Welcome back to 8.033!" with a portrait of Lagrange ("Joseph Louis Lagrange, French (1736-1813)"). OCW's lecture title (as in `_course.json` and the page's own `source.title`) is "Relativistic Dynamics and Particle Physics". Only the PDF file name is `lecture9_lagrang`. | The lecture is "named after" Lagrange. | E.g. "Lecture 9 opens with a portrait of Joseph Louis Lagrange (slide 1) and puts the Euler–Lagrange equation …". |
| 5 | info | `source.title` | The OCW resource page lists the file only as "lecture9_lagrang.pdf". Its description mentions relativistic momentum, force, kinetic/rest energy, binding energy and the p-p chain, but none of these are in the 5-slide PDF (that material is in the Lecture 10 slides). | Title "Relativistic Dynamics and Particle Physics (slides)", taken from the course calendar. | No change needed, because it matches the syllabus. This is noted so a later reader does not think the momentum material is missing from this page. |
| 6 | info | "The figure's numbers, recomputed" paragraph and graph | The figure gives T = 3.23 s for both the cycloid and the circular arc. | The arc is 3.28 s, not 3.23 s. | Verified, see below. The page handles this correctly by marking it as the page's recomputation. No change needed. |
| 7 | info | Cosmology callout: "traces exactly the brachistochrone's curve" | (8.286 Lecture 9 page: ct = α(θ − sin θ), a/√k = α(1 − cos θ).) | "exactly the brachistochrone's curve" | Correct as "the same kind of curve". The universe's curve is a full arch with a upward, and the brachistochrone is part of an arch hung upside down (y downward). You could add "turned upside down" or "the same curve, a cycloid", but this is optional. |

## Arithmetic and answer checks
Recomputed independently with SciPy (brentq, quad, ellipk). The page's calcs file also passes: `npm run calc:test -- -k brachistochrone` gives 18 passed.
- Flat board: length 100√2 = 141.42 ft. Acceleration g/√2. t = √(2·141.42/(32/√2)) = √12.5 = 3.536 s, which rounds to 3.54. Correct. With g = 32.174 ft/s² it would be 3.53 s, so "g = 32 ft/s², which reproduces them" is right.
- Cycloid through (100, 100): θ − sin θ = 1 − cos θ gives θ = 2.4120, R = 100/(1 − cos θ) = 57.29 ft, T = θ√(R/32) = 3.2274 s, which rounds to 3.23. Correct.
- Circular arc: I checked the figure on slide 2 (image). The purple arc starts vertical at (0, 0), ends horizontal at (100, 100) and lies below the cycloid throughout. So it is the quarter circle of radius 100 ft centred at (100, 0), as the page says. Its time is √(R/g)·K(m = ½) = 1.7678 × 1.8541 = 3.2776 s. The same result comes from ∫ds/v = √(R/2g)∫₀^{π/2} dφ/√(sin φ) = 1.25 × 2.6221. So **3.28 s is correct, and the figure's 3.23 s is wrong** for g = 32. The difference from the cycloid is 3.2776 − 3.2274 = 0.050 s, so "0.05 s" is correct. Extra check: among *all* circular arcs through the two end points, the fastest takes 3.238 s with g = 32 (centre at about (128.9, −28.9), not vertical at the start). So no circular arc gives 3.23 with the g that reproduces the other two times. The figure's value is not a rounding of the drawn arc.
- Shape check: at x = 5, 10, 30 and 60 ft the quarter circle has dropped 31.2, 43.6, 71.4 and 91.7 ft, and the cycloid 18.0, 28.0, 54.5 and 79.5 ft. The arc lies below the cycloid, as in MIT's figure.
- Graph curves: flat board `100 - x` runs from (0, 100) to (100, 0). The arc `100 - sqrt(10000 - (x - 100)^2)` is the quarter circle above, drawn as height = 100 − drop: vertical at x = 0, horizontal at x = 100. The cycloid has R = 57.29 and s from 0 to 2.412; it ends at (99.996, 0.003) and does not dip below the end point because θ < π. All three are correct. The caption is correct. The labels' times (3.54, 3.28, 3.23) agree with the text.
- Derivation: for L = √(1 + y′²)/√(2gy), L − y′∂L/∂y′ = 1/(√(2gy)√(1 + y′²)). Setting it constant gives y(1 + y′²) = 2R. Correct (also checked as an identity in calcs). Along the cycloid, ds = 2R sin(θ/2) dθ and v = 2√(gR) sin(θ/2), so ds/v = √(R/g) dθ. Correct. The description "a wheel of radius R rolling along the underside of the line y = 0" (with y downward) is correct.
- Catenary: the integrand (y − λ)√(1 + y′²) gives (y − λ)/√(1 + y′²) = a, so y = λ + a cosh((x − x₀)/a). Correct. The parabola approximation λ + a + (x − x₀)²/(2a) is correct.
- Lagrangians: L = ½mẋ² − V gives m ẍ = −dV/dx. L = −mc²√(1 − u²/c²) = −mc² dτ/dt, and ∂L/∂u = mu/√(1 − u²/c²) = γmu. All correct.
- Worked example (a): π√(5/9.81) = 2.2429, which rounds to 2.24 s. πR = 15.71 m. Ramp √(15.71² + 10²) = 18.62 m. a = 9.81 × 10/18.62 = 5.268 m/s². t = √(2 × 18.62/5.268) = 2.659, which rounds to 2.66 s. All correct.
- Worked example (b): sag 2(cosh 1.5 − 1) = 2.705, which rounds to 2.70 m. Length 2·2·sinh 1.5 = 8.517, which rounds to 8.52 m. Both correct. The example is original: MIT has no worked numbers for this lecture.
- Quiz: Q1 answer 2 (steep start gains speed) is correct. Q2 answer 1 (catenary, cosh) is correct. Q3 answer 1 (θ√(R/g)) is correct. Q4 answer 3 (γmu) is correct. All explanations are correct.
- Flashcards: all three are correct. The Beltrami first integral is stated correctly.

## Coverage and order
- Slide 1 (Lagrange portrait): mentioned (see #4 for the wording).
- Slide 2 (summary figure, ds² = dx² + dy²): covered, and the times are recomputed.
- Slide 3 (agenda: brachistochrone, catenary, midterm review): both problems are covered in the slide's order. The midterm review has no material on OCW, and the page says it was part of the lecture. The page notes the slide's typo "caternary", which is correct: the slide image shows "caternary".
- Slide 4 (photograph withheld for copyright): mentioned only as withheld. Correct.
- Slide 5 (Standard Model Lagrangian, "From T.D. Gutierrez"): mentioned in words with the attribution, and not reproduced.
- Added beyond the slides: the "Lagrangians in physics" section (Newton's law, the relativistic free-particle Lagrangian), the worked example and the cosmology callout. All are marked as the page's own.
- The order follows the slides (1, 3, 2, 4, then the catenary from 3, then 5). This is reasonable.

## Licensing
- The slide 4 photograph is marked "Image removed due to copyright restrictions" and is not used. Good.
- The slide 2 figure ("Figure by MIT OCW") is not copied. The page draws its own graph from formulas, using the same geometry (100 ft by 100 ft, three curves). This is acceptable, and the figure is under the course's CC BY-NC-SA licence anyway.
- The slide 1 portrait ("Image courtesy of Wikipedia") is not used, so no courtesy credit is needed.
- The slide 5 Standard Model Lagrangian (T. D. Gutierrez) is not reproduced, only described with the name credited. Good.
- No verbatim copying: the slides have almost no prose, and the page's text is its own. There is no OpenStax or LibreTexts material.
- No em dashes on the page (grep found none). En dashes in "Euler–Lagrange" are fine.

## Notes
- Forward links: `leadsTo` 8.033 Lecture 10 matches `momentum-energy-sun.mdx` (lecture 10, relativistic momentum and energy, the Sun). "∂L/∂u = γmu … the subject of the next lecture" is fair. `leadsTo` 8.286 Lecture 9 matches `closed-universe-cycloid.mdx` (lecture 9). The callout's a ∝ 1 − cos θ, t ∝ θ − sin θ for a closed matter-dominated universe agrees with that page (ct = α(θ − sin θ), a/√k = α(1 − cos θ)). The links `/courses/8-033/geodesics-calculus-of-variations` and `/courses/8-286/closed-universe-cycloid` point to existing slugs.
- "The stationary path is the straight world line of the last lecture": consistent with the Lecture 8 page, which shows the straight world line maximises proper time.
- The graph uses height upward, while MIT's figure uses "vertical fall" downward. The caption ("from a height of 100 ft") makes this clear, so it is fine.
- In calcs, `arc-vs-cycloid` subtracts a hard-coded 3.2274 instead of the computed cycloid time. It passes, but it would not follow a change of g. This is minor.
- Uncertain: whether the OCW figure's arc time was meant for some other g or a different arc cannot be known from the slides. My numbers only show that no circular arc through the two end points gives 3.23 s with g = 32 ft/s².

## Resolution (2026-11-16, by the page author)

- Error: the "First integral", "Cycloid" and "Catenary" formulas now say `at="slide 3 (problem listed; the formula is the page's own)"`.
- "Time of descent": `at="slide 2 (figure and ds² only; the integral is the page's own)"`.
- "Worked on the board" removed: the intro now only says the solutions are not on the slides (the Lecture 8 page was changed the same way).
- Slide 1: "opens with a portrait of Joseph Louis Lagrange".
- Info: the callout says "turned upside down"; `arc-vs-cycloid` in the calcs file now subtracts the computed cycloid time.
