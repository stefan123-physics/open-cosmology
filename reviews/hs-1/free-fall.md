---
page: content/year-0/hs-1/free-fall.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/vertical-projectile-motion-in-one-dimension/03-vertical-projectile-motion-in-one-dimension-02 (read; CC BY footer present, "Creative Commons Attribution License"; listed CCBY in docs/siyavula-licences.tsv; subsections ESCJW, ESCJX, ESCJY, ESCJZ, Worked examples 1 to 8, Textbook Exercises 3.1 and 3.2)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter4/ (read; PDF mit8_01scs22_chapter4.pdf, Sec. 4.5; no "rights reserved", "courtesy" or "excluded" notice)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter5/ (read; PDF mit8_01scs22_chapter5.pdf, Sec. 5.2, Eqs. (5.1.10) to (5.1.23); no "rights reserved", "courtesy" or "excluded" notice)
  - https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_15_feather_drop.html (read; last updated 31 March 2023)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (read; last updated 11 January 2024)
verdict: pass-with-notes
---

# Review: Free fall

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Heavy and light objects fall alike", 2nd paragraph: "The cleanest test was made on the Moon" | NASA page: a "live demonstration for the television cameras"; the quoted report: "Within the accuracy of the simultaneous release, the objects were observed to undergo the same acceleration", "a result predicted by well-established theory" | The Moon drop is the cleanest test | Not true: laboratory vacuum-tube drops and torsion-balance and satellite tests check equal acceleration far more precisely; the Apollo 15 drop was a demonstration. Say "The most famous demonstration was made on the Moon". |
| 2 | warning | Formula "Acceleration of free fall near the Earth", `g = 9.81`, `cite="mit"` | Siyavula ESCJX (and ESCJY, and MIT Sec. 5.2): $g = 9{,}8$ m·s⁻² | 9.81 m/s², cited to Siyavula with "(Siyavula rounds it to 9.8)" | The `at` honestly flags the difference, but no cited source gives 9.81. Add a data reference that does (NIST/CODATA standard acceleration of gravity $g_n = 9.80665$ m/s², which rounds to 9.81), or say in the text that 9.81 is the standard value rounded to three figures. |
| 3 | warning | "Heavy and light objects fall alike", hammer paragraph | NASA: "At the end of the last Apollo 15 moon walk, Commander David Scott ... performed a live demonstration for the television cameras. He held out a geologic hammer and a feather and dropped them at the same time." ... "as Galileo had concluded hundreds of years before" | "at the end of the last Apollo 15 moonwalk, Commander David Scott held out a geological hammer of 1.32 kg and a feather and let go of both at the same moment ... In front of the television cameras"; earlier "Galileo concluded, hundreds of years ago" | Close paraphrase that follows NASA's sentence order and keeps "held out a geolog(ic/ical) hammer and a feather". NASA text is public domain, so not a licence problem, but Writing rule 1 asks for own wording; recast (e.g. start from what was seen, then who did it and when). |
| 4 | warning | `calcs/hs-1/free-fall.yaml`, entry `g-earth` | Siyavula: 9.8 m·s⁻² | `value: 9.81 m/s**2`, `origin: mit` | `origin: mit` claims the value comes from the cited source; it does not (the `at` says so). Mark it as the site's own rounded value (`origin: page-own`, or cite NIST as in row 2). |
| 5 | info | "Heavy and light objects fall alike": "The MIT course notes call this Galileo's law of free fall" | MIT Sec. 5.2: "Galileo's Law of Free Falling Bodies" | "Galileo's law of free fall" | Use MIT's name, or drop "call this". |
| 6 | info | "The graphs of a vertical throw", last paragraph: "A dropped object gives the same velocity line, starting at zero" | Siyavula Cases 2 and 3: "the slope of all the velocity versus time graphs has the same magnitude" | "the same velocity line" | Strictly a parallel line with the same slope; "a line with the same slope" is clearer. |
| 7 | info | Formulas cited to Siyavula ESCJY | Siyavula writes $\vec v_f = \vec v_i + \vec g t$ etc. with vector $\vec g$ and $t$ | $v_f = v_i - g\,\Delta t$ with scalar $g$ and up positive | The `at` says "with the acceleration equal to g, pointing down", and the sign choice is explained in the text; the $t$ → $\Delta t$ change was explained in lesson 1.6. Acceptable. |
| 8 | info | `source.readings[0]` (MIT Ch. 4) | Sec. 4.5 exists and is relevant | Listed but never cited by a `<Formula>` or in the text | Either cite it (e.g. as a cross-reference on the up-positive equations, Eqs. (4.4.2), (4.4.9)) or drop it. |

## Formulas and citations
- $g = 9.81$ m/s², `cite="mit" at="Sec. 3.2, Motion in a gravitational field (ESCJX) (Siyavula rounds it to 9.8)"`: ESCJX exists and gives 9,8 m·s⁻², constant for everyday heights, air resistance ignored. Difference flagged; value not supported by a cited source (row 2).
- $a = -g$, `reading2` Sec. 5.2, Eq. (5.1.14): checked, $a_y = -g$ with $+y$ upward, "independent of the mass of the object". Correct.
- $v_f = v_i - g\,\Delta t$, $\Delta x = v_i\Delta t - \tfrac12 g\Delta t^2$, $v_f^2 = v_i^2 - 2g\Delta x$, `cite="mit"` ESCJY: Siyavula's four equations with $\vec a = \vec g$; with up positive and $\vec g = -g$ they become the page's equations. Correct. "The fourth equation ... has no acceleration in it" matches Siyavula's Eq. 2.
- $\Delta x = \tfrac12 g\Delta t^2$ (down positive), ESCJZ Cases 2 and 3: Siyavula gives $\vec x = \vec x_i + \underbrace{\vec v_i t}_{0} + \tfrac12\vec g t^2$ for an object falling from rest. Supported.
- $\Delta t = v_i/g$, `reading2` Eqs. (5.1.21) and (5.1.22): checked, $v_y(t_1) = v_0\sin\theta_0 - g t_1 = 0$, $t_1 = v_0\sin\theta_0/g$; the `at` notes it is the vertical part of an angled throw. Correct.
- $\Delta x = v_i^2/(2g)$, `cite="mit"` Textbook Exercise 3.1, question 1 (worked solution): checked, the solution writes $\Delta\vec x = \vec v_i^2/(2\vec g)$ (20,41 m for 20 m/s). Supported. (MIT Eq. (5.1.23) gives the same with $\sin\theta_0$, could be a second citation.)
- $g_\text{Moon} = 1.62$ m/s², `cite="moon"`, Bulk parameters: checked, "Surface gravity (m/s²) 1.62" (page updated 11 January 2024). Correct.
- Claims: "projectile" definition and "time symmetry" (ESCJX), both implications of symmetry (equal times, equal speeds opposite directions), zero velocity but acceleration $g$ at the top, $g$ smaller far from the surface: all in Siyavula ESCJX. Mass independence and Galileo: MIT Sec. 5.2 and NASA page. Hammer 1.32 kg, about 1.6 m, simultaneous release, Commander David Scott, end of the last Apollo 15 moonwalk, television cameras: all on the NASA page. Correct. The page wisely omits the report's 0.03 kg feather mass, which NASA flags as a likely typo.
- NASA attribution is by page title ("NASA's page ... describes", "NASA's Moon Fact Sheet gives"), not "according to NASA". Acceptable.
- Cosmology callout: equal acceleration of all bodies (equivalence principle) as Einstein's starting point for general relativity; gravity holding the Moon and galaxies, acting on the expansion. Standard and correct.

## Arithmetic and answer checks
All recomputed independently (Python); `pytest tests/calc -k free-fall`: 47 passed.
- Table: 4.905 → 4.91 m/s, 1.226 → 1.23 m; 9.81, 4.905 → 4.91 m; 14.715 → 14.7, 11.04 → 11.0 m; 19.62 → 19.6 m/s and 19.6 m. "Adds 4.9 m/s per half second": 4.905. Correct.
- Well: ½ × 9.81 × 6.25 = 30.66 ≈ 30.7 ≈ 31 m; 9.81 × 2.5 = 24.5 m/s; × 3.6 = 88.3 ≈ 88 km/h; ½ × 24.5 × 2.5 = 30.6 ≈ 31 m. Sound-delay remark (real fall time shorter, so shallower) correct.
- Throw at 15 m/s: 15/9.81 = 1.529 ≈ 1.53 s; 225/19.62 = 11.47 ≈ 11.5 m; 2 × 1.529 = 3.058 ≈ 3.06 s; 15 − 9.81 × 3.06 = −15.02 ≈ −15 m/s; ½ × 15 × 1.53 = 11.5 m. Correct.
- Plots: top point (1.53, 11.47); height curve $15t - 4.905t^2$ reaches 0 at 3.058 s; velocity line ends at −15.0 m/s at 3.06 s; acceleration −9.81. Moon curve $15t - 0.81t^2$: top 69.4 m at 9.26 s, flight 18.52 ≈ 18.5 s; ranges [0, 80] and [0, 19] contain both curves. Captions consistent.
- Cliff: 64 + 4 × 4.905 × 25 = 554.5; √554.5 = 23.55 ≈ 23.5; roots 3.216 ≈ 3.2 s and −1.585 ≈ −1.6 s; $v_f = 8.0 - 9.81 × 3.216 = -23.55$ ≈ −23.5 m/s ("about 24 m/s"); check by $v_f^2$: 554.5. Back at the edge after 16/9.81 = 1.631 ≈ 1.63 s. Correct.
- Moon: 9.81/1.62 = 6.056 ≈ 6.1; √(3.2/1.62) = 1.405 ≈ 1.4 s; √(3.2/9.81) = 0.571 ≈ 0.57 s ("less than half": 0.41, true); 225/3.24 = 69.4 ≈ 69 m; 15/1.62 = 9.26 ≈ 9.3 s; checks 6.06 × 11.47 = 69.5 and 0.57 × √6.06 = 1.40. Correct.
- Quiz 1 (top of flight): answer 1 correct; "both zero", "acceleration zero" and "acceleration upwards" are wrong. Explanation true.
- Quiz 2 (key, 1.2 s): 11.77 ≈ 12 m/s, answer 3 correct; 7.1 is ½ g t² = 7.06 m as the explanation says; 8.2 and 9.8 wrong.
- Quiz 3 (12 m/s, same height): 2 × 1.223 = 2.45 ≈ 2.4 s, answer 2 correct (2.4 is the usual rounding of 2.446); 0.82, 1.2 (time to top only) and 4.9 wrong.
- Quiz 4 (hammer and feather): answer 2 correct; explanation true.
- Quiz 5 (Moon height ratio): 6.06, "about 6 times", answer 2 correct; 2.5 (≈ √6) and 36 (6²) are wrong.
- Flashcards: all five true.
- Calcs file: every number on the page has an entry, each with `source: {cite, at}`; "(the numbers are the page's own)" checked against all Siyavula numbers (10 m/s and 1,5 m; 10 s; tower and 9 balls; 20 m/s; 80 cm; balloon 4 m/s and 20 m; balcony 20 m, 4,9 m/s; window 0,2 s, 4 m; 19,6 m/s; 40 m/s, 8,16 s; 92,4 m, 6 s; 1,5 m and 2 m/s; bullet 200 m/s, 20,4 s; 3 m, 30 cm) and MIT's (20 m/s at 45° from 2 m, 30 m/s, 21°): none reused. Honest. Minor: `g-earth` origin (row 4); `plot-half-g` says "height graph expressions" but its `shown` string is from the cliff example; `cliff-time` has unused `inputs`; the ratio 6.06 in the Moon check has no entry of its own (it is in `g-ratio` as 6.1). Info only.

## Only earlier terms
- Used and introduced earlier: $g$ and "acceleration of free fall" (1.4), positive direction and frame of reference (1.1, 1.2), $v_i$, $v_f$, $\Delta x$, $\Delta t$ and the four equations (1.6), slope of x–t and v–t graphs and area under v–t (1.3, 1.5), parabola and quadratic formula (0.6, 1.6), inverse proportion (0.6, table of power laws), square roots, km/h conversion (1.2).
- Defined on this page: free fall, projectile, air resistance (drag), time symmetry, maximum height.
- Forward references are marked as later: Block 2 for air resistance (§4 row 2.6 "Friction and drag") and for why gravity gives the same acceleration (2.3, 2.11 Newton's law of gravitation); "general relativity" appears only in the cosmology callout, named as Einstein's theory. Acceptable.
- "Geological hammer", "moonwalk": plain words. No term used before introduction found.

## Coverage
- §4 row 1.7: "Free fall", no PhET (none assigned in §4 or §3.5), leads to `8-01/acceleration-1d`. Covered: definition, constant $g$, sign conventions, dropping, vertical throw with time to top, maximum height and symmetry, x–t, v–t and a–t graphs, landing below the start (Siyavula's cliff case), mass independence, the Moon. Matches Siyavula 3.2 and VWO level.
- Left out: a worked example of an object thrown downwards (only mentioned), an experiment to measure $g$ (Siyavula's ticker-tape investigation), the position graph of a dropped object (Siyavula Case 2), and bouncing (Siyavula Worked example 7). None is essential at this level; a measurement of $g$ is a common VWO practical and could be one paragraph. Terminal velocity belongs to Block 2 (2.6), correctly deferred.

## Where this leads
- `leadsTo: 8.01 lecture 2` → content/year-1/8.01/acceleration-1d.mdx ("Acceleration in one dimension"), which treats constant acceleration with calculus and uses $a = -g$ with up positive (its ball thrown up at 12 m/s). Same topic; matches the §4 row and the `why`. Correct.
- `towards: false`: correct, 1.7 is not the last lesson of Block 1 (1.11 is). Callout claims checked above.

## Licensing and AI terms
- Siyavula: no sentence copied. Closest wording: Siyavula "if you go very far away from the Earth's surface, the magnitude of g would change, but, for everyday problems, we can safely treat it as constant" vs page "becomes smaller far above the surface, but for everyday heights it is constant": paraphrase of a standard point, acceptable. "Siyavula calls ... a projectile", "Siyavula calls this time symmetry": attribution, not branding.
- NASA (public domain): close paraphrase of the hammer-feather paragraph (row 3); no NASA insignia; no "according to NASA" phrasing; the page does not suggest NASA reviewed it.
- Figures: all four graphs are `<Plot>` computed from formulas; Siyavula's Figures 3.1, 3.2 and case graphs, MIT Figs. 5.1 to 5.7 and the NASA photo/video are not reproduced.
- Worked examples and quiz: original numbers and situations. Structural likenesses (standard problems): the cliff example has the shape of Siyavula's Worked example 4 (balcony 20 m, 4,9 m/s up) and its cliff graphs, but different numbers and question (time and speed, not graphs); the 15 m/s throw is the standard height-and-time question of Textbook Exercise 3.1 (20 m/s). Acceptable.
- No Siyavula logo or "Everything Science"; MIT chapters 4 and 5 have no exclusion notice; no ESO text (no AI credit needed).
- No forbidden source cited or opened (the OpenStax "CP 2.7" in the §4 row was ignored).

## Notes
- No errors found. Fix the four warnings: the "cleanest test" claim (row 1) is the one that states something false; rows 2 and 4 concern the 9.81 value having no source that gives it; row 3 is wording.
- Siyavula page footer checked: "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License."

## Resolution (2026-11-20, by the page author)
1. "The cleanest test was made on the Moon" is now "The most famous demonstration was made on the Moon".
2. New reference `nist-g` (NIST CODATA value, standard acceleration of gravity, https://physics.nist.gov/cgi-bin/cuu/Value?gn, checked with curl: 9.806 65 m s⁻², exact). The `g = 9.81` formula now cites it ("9.806 65 m/s², rounded to three figures"), and the text says 9.81 is the standard value rounded to three figures and that Siyavula rounds further to 9.8.
3. Hammer-and-feather paragraph rewritten in a new order and wording: what viewers saw first (feather and 1.32 kg hammer from about 1.6 m, side by side, landing together), then who (David Scott, commander of Apollo 15) and when (the crew's last moonwalk), with NASA's page named as the account. "held out a geological hammer and a feather" and "in front of the television cameras" are gone.
4. Calcs: `g-earth` is now a computed entry (input 9.806 65 m/s², shown 9.81) cited to `nist-g` with `origin: page-own` for the rounding; new fact entry `g-standard` (9.806 65, cite `nist-g`). The `hammer-mass` and `hammer-height` shown strings follow the new wording.
5. Changed to MIT's name, "Galileo's law of free falling bodies".
6. Now "a line with the same slope, starting at zero".
7. No change (acceptable as the review says).
8. Reading 1 is now cited in the text on the up-positive equations ("in the MIT notes, reading 1, Eqs. (4.4.2) and (4.4.9), with a = −g"; both equations checked in the PDF, Secs. 4.4 and 4.5); its `location` was updated to match.
- Calcs loose ends: `plot-half-g` `where` now names the cliff example it is shown in; unused `inputs` of `cliff-time` removed; new entry `moon-check-ratio` for the 6.06 in the Moon check.
- Coverage (optional): added a short "Throwing it down" paragraph (pebble thrown down at 5.0 m/s from a 20 m bridge: 20.4 m/s after 1.57 s, against 2.02 s and 19.8 m/s when dropped), with calcs entries `down-vf`, `down-time`, `down-dropped-time`, `down-dropped-speed`. A measurement of g is left for a practical, not added.
- Checks: `pytest tests/calc -k free-fall` 53 passed; `content:check` reports no error or warning for this page. Status set to reviewed.
