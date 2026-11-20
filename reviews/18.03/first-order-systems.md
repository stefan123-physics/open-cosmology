---
page: content/year-2/18.03/first-order-systems.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-24-introduction-to-first-order-systems-of-odes/ (read: local copy lec.html; title "Lecture 24: Introduction to First-order Systems of ODEs"; its only .pdf link is 07023906609831af261b9a392c4deef3_MCrDzhpu3-s.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`; page licence CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/07023906609831af261b9a392c4deef3_MCrDzhpu3-s.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L24", 17 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page read separately with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 25 = "Homogeneous Linear Systems with Constant Coefficients"; the Lecture 25 transcript was not read)
  - calcs/18.03/first-order-systems.yaml (read; `npm run calc:test -- -k first-order-systems`: 6 passed)
verdict: pass-with-notes
---

# Review: Introduction to first-order systems

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries: p. 1 opening to "a, b, c, and d are allowed to be"; p. 2 coefficients as functions of t, homogeneous, start of initial conditions ("total order of the system"); p. 3 three-constant example, natural initial conditions, boundary conditions, models (mixing, decay, heat conduction); p. 4 diffusion, "two of something", two tanks, one-, two- and three-loop circuits, coil (total order four), start of the egg; p. 5 pot, yolk T₁, white T₂, conductivities, Newton's law for the yolk; p. 6 the white's equation, standard-form rule, the coefficients −a, a, a, −(a + b); p. 7 the external term, coddling, start of the ice bath; p. 8 ice bath, a = 2, b = 3 "nice numbers", the numeric system, "40 years" elimination method; p. 9 T₂ = (T₁′ + 2T₁)/2, substitution; p. 10 sum of orders, conservation of mathematical difficulty, collecting 7T₁′; p. 11 6T₁, stability, characteristic equation factored; p. 12 solution for T₁, initial values 40 and 45, do not re-solve for T₂; p. 13 T₂ = ½c₁e^{−t} − 2c₂e^{−6t}, c₂ = −10, c₁ = 50; p. 14 final answer, geometric meaning, autonomous; p. 15 nonlinear example, solution = parametrized curve; p. 16 curves through every point, velocity vector tangent, speed not visible; p. 17 velocity field, connection with direction fields deferred.

Formula locations: "First-order system" p. 1 (with the semicolon notation, p. 1); "Linear system" pp. 1–2 (form on p. 1, r₁, r₂ named on p. 2); "The egg system" p. 6 (the b·T_e term is announced in the last sentence of p. 6 and discussed on p. 7; p. 6 is acceptable, pp. 6–7 would be more exact); "Egg in an ice bath" p. 8; "T₂ in terms of T₁" p. 9; "Eliminated equation" pp. 10–11 (7 on p. 10, 6 on p. 11); "Yolk temperature" p. 12; "White temperature" p. 13; "Solution" pp. 13–14 (constants p. 13, final answer read out p. 14); "Autonomous system" pp. 14–15. All correct.

Prose citations also checked: systems solved simultaneously like linear systems p. 1; constant coefficients, coefficients may depend on t, homogeneous first p. 2; total order, natural initial conditions, no velocities p. 3 (pp. 2–3 for the paragraph); models pp. 3–4; two tanks, loops, coil, total order four p. 4; egg set-up p. 5; Newton's law pp. 5–6; same-order rule p. 6; coddling, 100 °C, exponential cooling p. 7; ice bath, a = 2, b = 3 pp. 7–8; method that always works, "40 years" p. 8; T₂ from first equation, do it on paper p. 9; sum of orders, conservation of mathematical difficulty p. 10; positive coefficients from stability p. 11; roots pp. 11–12; do not re-solve for T₂, extra constants p. 12; boxed relation pp. 12–13; initial values pp. 12–14; computer and geometric meaning p. 14; autonomous pp. 14–15; parametrized curve with a direction p. 15; one through every point, velocity vector tangent p. 16; velocity field pp. 16–17; direction fields later p. 17. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Plot caption: "the yolk briefly warms from the hotter white" | Not discussed in the lecture (the graph is the page's own addition). | True, but invisible on the graph: T₁′ = −50e^{−t} + 60e^{−6t} is 10 at t = 0 and zero at t = ln(1.2)/5 ≈ 0.036, where T₁ peaks at about 40.17 °C, a rise of 0.17 °C (0.35 % of the 0–50 range) over 1 % of the domain. A reader looking at the graph sees the yolk curve start falling. The caption also omits the feature that is visible: at that same moment (T₁′ = 2(T₂ − T₁) = 0) the two curves cross, and afterwards the yolk stays warmer than the white. Neither number is in the calcs file. | E.g. "the white cools fast at first; the yolk warms by less than 0.2 °C for a moment (until t ≈ 0.04, when the curves cross) and is then the warmer of the two; both tend to 0." Add calcs entries for t = ln(1.2)/5 and T₁ max ≈ 40.17 if the numbers are quoted. |
| 2 | info | Where systems come from: "two tanks feeding each other" | p. 4: a little tank and a big tank, the fluid going from the little one into the big one, so that stuff dropped into the little tank gets mixed into the big one. | "feeding each other" suggests flow both ways; MIT's example is one-way (in series). Both give a system, so the physics is not wrong. | "two tanks, one draining into the other". |
| 3 | info | "Use the boxed relation instead (pp. 12–13)" | p. 13: "that pink box" on the board. | Refers to a box the page does not show; the relation is the "T₂ in terms of T₁" formula above. | "Use the relation for $T_2$ found above instead". |
| 4 | info | Worked example title "Two coupled tanks" | (page-own example) | The system $x' = -3x + y$, $y' = x - 3y$ is not set up from a tank model on the page; the title claims a model the text never describes. (Such a model exists: two equal tanks exchanging liquid at one rate and each also draining at twice that rate, but the page does not say so.) | Either add one sentence describing the tanks or retitle "A symmetric 2 × 2 system". |
| 5 | info | Opening: "The tools of the last weeks for one equation come back in a new form." | p. 1 says nothing of this; p. 2 does say homogeneous systems come first "in the same way" as for higher-order equations. | Unsupported but harmless framing, placed next to a "(transcript, p. 1)" citation. | Optional: drop it, or say "As for single equations, the homogeneous case comes first (p. 2)." |
| 6 | info | Egg system formula, `at="p. 6"` | The b·T_e term is introduced in the last sentence of p. 6 ("still this external temperature I must put into the equation") and explained on p. 7. | p. 6. | Optional: `at="pp. 6–7"`. |

Lecturer slips and transcript garbles checked:
- p. 5: "the condition of heat through the shell" (for "conduction"), "yoke" for "yolk": garbles; page correct.
- p. 12: "either one of these equations will express T2 in terms of T1": strictly only the first equation gives T₂ algebraically (the second involves T₂′); the page uses only the first, so the slip is not repeated.
- p. 12: "the yolk is always cooler than the white … for a soft boiled egg, I don't know": hedged by Mattuck; the page just states the initial values 40 and 45, fine.
- p. 13: "Kramer's rule" (Cramer's rule), p. 14 "peak" (peek), p. 11 "physical impossible": garbles, not repeated.
- p. 1: the "secret reason" for studying only first-order systems is promised for the end of the period but never given (the lecture runs out of time, p. 17). The page omits the promise; fine.

## Arithmetic and answer checks
- `npm run calc:test -- -k first-order-systems`: 6 passed. Independently recomputed with SciPy `solve_ivp` (rtol 1e-12) for $T_1' = -2T_1 + 2T_2$, $T_2' = 2T_1 - 5T_2$, $T(0) = (40, 45)$: at t = 0.5, 1, 2, 4 the numerical solution equals $50e^{-t} - 10e^{-6t}$ and $25e^{-t} + 20e^{-6t}$ to 1e-8 (e.g. t = 1: 18.369185, 9.246561). Correct.
- Elimination: $\frac{T_1'' + 2T_1'}{2} = 2T_1 - \frac{5}{2}(T_1' + 2T_1)$; times 2: $T_1'' + 2T_1' = 4T_1 - 5T_1' - 10T_1$, so $T_1'' + 7T_1' + 6T_1 = 0$. Correct. Roots of $r^2 + 7r + 6$: −1, −6. Correct.
- $T_2 = \frac{1}{2}(T_1' + 2T_1)$: $e^{-t}$ coefficient $\frac{1}{2}(-c_1 + 2c_1) = \frac{1}{2}c_1$; $e^{-6t}$ coefficient $\frac{1}{2}(-6c_2 + 2c_2) = -2c_2$. Correct.
- Initial values: $c_1 + c_2 = 40$, $\frac{1}{2}c_1 - 2c_2 = 45$; doubling: $c_1 - 4c_2 = 90$; subtracting: $-5c_2 = 50$, $c_2 = -10$, $c_1 = 50$. $T_2 = 25e^{-t} + 20e^{-6t}$, $T_2(0) = 45$. Correct.
- Stability remark: for a second-order constant-coefficient equation, all solutions tend to 0 exactly when both coefficients are positive; 7 and 6 are. Correct.
- Plot: expressions match the solution. Yolk maximum at $t = \ln(1.2)/5 = 0.03646$, $T_1 = 40.1747$; curves cross there ($T_1 = T_2 = 40.17$); then $T_1 > T_2$ (t = 1: 18.37 vs 9.25). See finding 1. "The white cools fast at first": $T_2'(0) = 80 - 225 = -145$. Correct. "Both tend to 0": correct. Label placement not checked in a browser (`content:check` does that).
- Worked example: $y = x' + 3x$, $y' = x'' + 3x'$; $x'' + 3x' = x - 3x' - 9x$ gives $x'' + 6x' + 8x = 0$. Roots −2, −4. $y$: $(-2 + 3)c_1 = c_1$, $(-4 + 3)c_2 = -c_2$. $c_1 + c_2 = 2$, $c_1 - c_2 = 0$ give $c_1 = c_2 = 1$. Checked numerically with `solve_ivp` (t = 1: x = 0.153651, y = 0.117020, matching $e^{-2} + e^{-4}$ and $e^{-2} - e^{-4}$). Correct; original numbers, not copied from MIT.
- Quiz 1: answer 0 (two conditions, $x(t_0)$ and $y(t_0)$). Correct; explanation correct (total order 2).
- Quiz 2: answer 0 (second-order equation). Correct; "normally the sum of the orders" matches p. 10.
- Quiz 3: answer 0 (from an equation of the system). Correct; explanation matches p. 12.
- Flashcards: all three correct.
- Frontmatter summary: every statement matches the page and is correct.
- Calcs file: `shown` strings occur on the page. The `egg-coefficients` (expected 13) and `egg-initial` (expected 85) entries check sums of two numbers, so a compensating error would pass; the identity checks `egg-T1`/`egg-T2` would catch a wrong solution, and $T_1(0) = 40$, $T_2(0) = 45$ follow from them only together with `egg-initial`. Harmless, but separate entries (or `T1(0)`, `T2(0)` checks) would be stronger (info). `ex-solves` cite `reading1` p. 9 although page-own (`origin: page-own` set correctly); harmless.

## Coverage and order
- The page follows the lecture's order: systems vs single equations (p. 1) → first-order system (p. 1) → linear, constant coefficients, homogeneous (pp. 1–2) → initial conditions and total order (pp. 2–3) → models: two tanks, circuits, coil (pp. 3–4) → egg set-up and standard form (pp. 5–6) → coddling (p. 7) → ice bath, a = 2, b = 3 (pp. 7–8) → elimination (pp. 8–11) → stability check (p. 11) → T₁ (pp. 11–12) → do not re-solve; T₂ from T₁ (pp. 12–13) → initial values (pp. 12–14) → autonomous systems, parametrized curves, velocity field (pp. 14–17). Same order as MIT.
- Left out (minor): the example of a linear system with variable coefficients $x' = tx + (\sin t)y + e^{-t^2}$ (p. 2); boundary conditions as an alternative to initial conditions (p. 3); that the coddled-egg problem needs the pot's cooling constant k (p. 7); Mattuck's remark that a = 2, b = 3 "make no physical sense whatsoever" (p. 8; the page keeps "nice numbers"); the preview that next time a "fancy" matrix method gives vocabulary and insight (pp. 8, 14); the Laplace-transform illustration of conserved difficulty (p. 10); the remark that a missing T₁′ term would give oscillation (p. 11); and, most substantively, the point that the solution curves show the direction of the velocity but not the speed (pp. 16–17). Consider one sentence for the last one: "the curves show the direction of motion, not how fast it goes".
- Added: the graph and the worked example (page-own).
- `prerequisites: [impulse-inputs-delta-function]` and the inline link to it: that page is now committed (a6d911f, Lecture 23). The inline link `/courses/18-03/direction-fields` points to an existing page.

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("two of something", "nice numbers", "law of conservation of mathematical difficulty", "a parametrized curve with the right velocity everywhere", "in forty years") are brief, attributed by citation and acceptable.
- The worked example is original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 25 ("Homogeneous linear systems with constant coefficients, solved with matrices, eigenvalues and eigenvectors."): the first part matches the Lecture 25 title in `_course.json`, and this transcript says the next lecture brings a "fancy", "slick" method with new vocabulary (pp. 8, 14). That this method uses matrices, eigenvalues and eigenvectors is standard and very likely, but unverified here because the Lecture 25 transcript was not read (uncertain).
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.
- `content:check` was not run as part of this review. During the review the page and calcs file were briefly absent from the working tree (while Lecture 23 was committed); they were back afterwards, and the page re-read matched the reviewed text (131 lines, same caption).

## Resolution (2026-11-16, by the page author)

1. Warning: the caption now says the white soon falls below the yolk, and that before the curves cross the yolk warms by under 0.2 °C, too little to see. A calcs entry `yolk-peak` checks the 0.17 °C rise.
2. Info:
   - The tanks are now "one feeding the other".
   - "Boxed relation" became "the relation already found".
   - The worked example is now titled "A coupled system".
   - The opening sentence no longer makes an unsourced claim.
   - The egg system cites pp. 6–7.
   - A sentence notes that the curves show direction but not speed (p. 16).

Status set to `reviewed`.
