---
page: content/year-1/8.01/centre-of-mass.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-5-momentum-and-impulse/17-1-definition-of-the-center-of-mass/ (read: saved HTML of all seven segment pages 17.1–17.7 and the Week 5 page; Lesson 17 has exactly seven segments, the next is 18.1)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter10/ (read: Chapter 10 PDF, Sections 10.5–10.6 and Examples 10.2–10.4, printed pp. 10-6 to 10-11, footers checked page by page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/faaaac7edac5938c5c7c1e3ee3616a0b_ol1COj0LACs.pdf (read: 17.1 transcript, 2 pp.; URL matches the segment page's transcript link)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/88c93abd04a3d4e66b48014eb8641859_-b0dFcebPcs.pdf (read: 17.2 transcript, 3 pp.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/f0e824fa0b918d659482d8fea9504c6c_e548hRYcXlg.pdf (read: 17.3 transcript, 2 pp.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-5-momentum-and-impulse/17-4-center-of-mass-of-a-system-of-extended-objects/ (read: text page and its figure, an SVG of two centred stacked boxes with m2 = 2 m1; no transcript exists)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/d5bcd1bdbc52de6079c2cd85c8e19ad4_CFh3gu-z_rc.pdf (read: 17.5 transcript, 4 pp.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/c4bd2f0aabae1b76cf989439899af0e9_QPV-DmpGXeQ.pdf (read: 17.6 transcript, 2 pp.; link matches)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/a943570f286a5f0379f7d46a7f80c570_xxGA-7soXiw.pdf (read: 17.7 transcript, 2 pp.; link matches)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read 2026-11-16: mass 1,988,400 × 10²⁴ kg, volumetric mean radius 695,700 km)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html (read 2026-11-16: mass 1,898.13 × 10²⁴ kg, semimajor axis 778.479 × 10⁶ km, sidereal period 4,332.589 days)
verdict: needs-changes
---

# Review: Centre of mass and its motion

Two errors: the page repeats a lecturer slip (Saturn "about 318 Earth masses", which is Jupiter's mass), and the `leadsTo` entry for Ferreras points at Section 7.3, which has no page of its own and is about rotation curves, not the Bullet Cluster, so the forward link renders as "Page planned" under the wrong title. Every formula citation, page number and equation number otherwise checks out against the transcripts and the printed footers of the notes; every number and quiz answer is correct; `calcs/8.01/centre-of-mass.yaml` passes (31 tests).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Three planets", paragraph after the formula; `calcs` entry `saturn-mass` | 17.2 transcript p. 3: "if this were Saturn, it would have something like 318 Earth masses". This is a slip: 318 Earth masses is Jupiter; Saturn is about 95. | "Saturn about 318" with no comment (rule 4: don't repeat lecturer slips). | Write e.g. "Earth as one Earth mass, Saturn about 95 (the lecture says 318, which is Jupiter's mass) and Pluto 0.0025". The conclusion still holds: with 95 the centre of mass is at about (5.3, 19.9), almost on Saturn at (5, 20); with 318 it is at (5.1, 20.0). Mark the calcs entry `origin: slip` with a note, and add a fact for 95. Pluto's real mass is about 0.0022 Earth masses; 0.0025 is close enough to leave, as "about". |
| 2 | error | Frontmatter `leadsTo`, second entry (`course: "Ferreras"`, `lecture: 7.3`) | n/a (site structure). Ferreras Section 7.3 is "Beyond fitting rotation curves" (`coveredBy: [mond-tests]`, but `mond-tests` has `lecture: 7.4`). `cosmologyDestinations()` in `lib/content.ts` matches pages by `p.lecture === l.lecture` and ignores `coveredBy`, so this renders as "Fundamentals of Dark Matter Section 7.3: Beyond fitting rotation curves — Page planned". The Bullet Cluster as dark-matter evidence is treated in Section 2.6, page `weak-lensing-and-machos` (section "The Bullet Cluster"). | "In the Bullet Cluster, the centre of the gravitating mass (seen by lensing) is not where the ordinary gas is: evidence for dark matter." pointing at 7.3. | Change to `lecture: 2.6` (links `gravitational-lensing` and `weak-lensing-and-machos`, both lecture 2.6), or 7.4 if the MOND angle is wanted. |
| 3 | warning | Cosmology callout "Where is the mass of a galaxy cluster?" | n/a (not MIT) | "In the Bullet Cluster (observed in 2006)" | The cluster (1E 0657−558) was observed in X-rays well before 2006; what dates from 2006 is the published comparison of the weak-lensing mass map with the X-ray gas (Clowe et al. 2006). Suggest "(whose lensing map was compared with its X-ray gas in 2006)". The physics in the callout (gas holds most ordinary matter, slowed by the collision; lensing mass sits ahead with the galaxies; the usual interpretation is collisionless dark matter) is correct and matches the site's own `weak-lensing-and-machos` page. Optionally attribute ("astronomers concluded…"). |
| 4 | warning | Worked example "Does Jupiter pull the Sun's centre outside the Sun?" | NASA Sun fact sheet (cited as the source): mass 1,988,400 × 10²⁴ kg = 1.9884 × 10³⁰ kg. | "The Sun has mass $1.989\times 10^{30}$ kg … (NASA fact sheets)" | 1.989 × 10³⁰ kg is the older textbook value, not what the cited fact sheet now shows. Either use 1.988 × 10³⁰ kg (and total 1.9899 × 10³⁰ kg), or drop "NASA" for the Sun's mass. Results are unchanged either way: X = 7.42 × 10⁸ m, 1.07 solar radii (recomputed with 1.9884e30 and Jupiter 1.89813e27 kg, 7.78479e11 m: 7.424 × 10⁸ m, 1.067). Jupiter's values (1.898 × 10²⁷ kg, 7.785 × 10¹¹ m) and the Sun's radius (6.957 × 10⁸ m) match the fact sheets; period 4332.6 d = 11.86 yr, "about 12 years" fine. Update `calcs` `sun-mass` and `sun-jupiter-total` accordingly. |
| 5 | warning | data/symbols.json, `y` meaning scoped to `centre-of-mass` | 17.2: the planet grid has no units. | "Position along the vertical axis (in the three-planet example, in the grid's units)", `unit: "m"`. | The unit contradicts the text for the only place lowercase $y$ appears on the page (the "$x$ and $y$ components" of the planet grid). Drop the unit, or drop the grid remark and keep `m`. |
| 6 | info | "Bodies made of parts", "The MIT page tries it on two stacked boxes." | 17.4 poses it as an exercise ("Calculate the center of mass (CM) of the system formed by two square boxes, the lower one with a mass 2 times the mass of the upper box") without solving it; the figure shows the small box centred on the large one. | Says MIT "tries it"; the page's own example is two centred stacked cubes with mass ratio 3:1 and given sides. | Say "The MIT page leaves it as an exercise with two stacked boxes." The page's example uses its own numbers (ratio 3, sides 0.40/0.20 m), so it is not a copy, but its set-up mirrors MIT's figure closely; consider a different arrangement (e.g. side by side, or off-centre) so it does not read as the worked answer to MIT's exercise with a changed ratio. |
| 7 | info | "Centre of mass and centre of gravity" | 17.1 p. 1: in empty space "center of gravity doesn't make any sense. But this point still coincides with what we call the center of mass." | Adds "(Near the Earth, where gravity is the same throughout a small object, the two points coincide.)" | Correct physics and clearly an addition; fine. |
| 8 | info | Quiz 2 | Notes Example 10.3(b), λ(x) = λ₀x²/L², answer 3L/4 (Eq. (10.5.14), p. 10-9). | Same problem as a quiz, cited in the explanation. | Acceptable as a check of the notes' example; an own density (e.g. ∝ x, answer 2L/3, which is already a distractor) would be more original. |
| 9 | info | Last paragraph before the callout | Previous page (`conservation-of-momentum`) solves Example 10.5 with momentum plus kinematics and only mentions the centre-of-mass route. | "the exploding projectile of the previous lesson could be solved in one line" | Physically right (the centre of mass follows the original parabola while all pieces are in flight); "can be solved" would avoid implying the previous page did so. |

## Arithmetic and answer checks
- Defining property $\sum m_j\vec r_{\text{cm},j} = \vec 0$: 17.1 p. 1. Correct. Vector triangle $\vec r_{s,j} = \vec R_\text{cm} + \vec r_{\text{cm},j}$, pulling $\vec R_\text{cm}$ out of the sum and the result: 17.1 p. 2. Correct.
- Notes Eqs. (10.5.1) on printed p. 10-6, (10.5.2)–(10.5.3) on p. 10-7: "pp. 10-6–10-7" correct. Eq. (10.5.4) (continuous body) p. 10-7: correct.
- Three planets: masses on 17.2 p. 1 (3 m1, 0.5 m1, total 4.5 m1), coordinates (35, 10), (5, 20), (40, 30) on p. 2; sums 70 and 85 and the division on p. 3. Citations "pp. 1–2" and "pp. 2–3" correct. 35 + 15 + 20 = 70, 10 + 60 + 15 = 85; 70/4.5 = 15.56 → 15.6; 85/4.5 = 18.89 → 18.9. The lecturer's "15.5" (p. 3) is a slip; the page's bracketed note is right and correctly worded. (The transcript also says "1/2 m2" for 3 m1 and "the 80 comes from this" for 85; the page rightly repeats neither.) Saturn: see row 1.
- Earth–Moon: Example 10.2 spans printed pp. 10-7–10-8 (conclusion "lies within the earth" on p. 10-8); Eqs. (10.5.6)–(10.5.7) on p. 10-7. (7.34e22)(3.84e8)/(6.0534e24) = 4.656 × 10⁶ m → 4.66 × 10⁶ m < 6.37 × 10⁶ m. Correct.
- Sun–Jupiter: 1.898e27 × 7.785e11 / 1.990898e30 = 7.422 × 10⁸ m; /6.957e8 = 1.067 → 1.07, just outside the Sun. Total 1.989e30 + 0.001898e30 = 1.9909 × 10³⁰ kg. Correct (see row 4 for the Sun's mass).
- Two stacked cubes: 0.40 + 0.10 = 0.50 m; (0.60 + 0.50)/4.0 = 0.275 m < 0.40 m, inside the bottom cube. Correct.
- 17.3 sum-to-integral steps on p. 1, final formula on p. 2: "pp. 1–2" correct.
- Uniform rod (17.5): coordinate choice and "pick dm not at the origin or an end" p. 1; vector $\vec r$, integration variable $x'$, "absolutely the crucial one" p. 2; $dm = (M/L)dx'$, linear mass density, integrals p. 3; result $L/2\,\hat i$ p. 4. Recipe cited "pp. 1–4", formula "pp. 3–4": correct. The page writes the denominator as $M$, consistent with the lecturer's own correction on p. 3 ("this is just M not M over L").
- Notes Example 10.3(a): Eq. (10.5.9) on p. 10-8, (10.5.10) on p. 10-9: "pp. 10-8–10-9" correct. Part (b): λ = λ₀x²/L² is Eq. (10.5.8) (p. 10-8); M = λ₀L/3 (10.5.12), λ₀ = 3M/L (10.5.13), $R = \tfrac34 L$ (10.5.14), all on p. 10-9; the page cites (10.5.11)–(10.5.14), p. 10-9: correct.
- Pole: M = 2.0 + 0.25 × 4 = 3.0 kg; ∫x(1 + 0.5x)dx = 2 + 4/3 = 3.333 kg·m; X = 10/9 = 1.11 m > 1 m. Correct; caption matches.
- 17.6: velocity independent of origin via a second fixed point P, p. 1; $\vec V_\text{cm}$ derived p. 1 and stated p. 2; $\vec A_\text{cm}$ p. 2. Citations correct.
- Notes Eqs. (10.6.1)–(10.6.3), printed p. 10-10: correct. Example 10.4 starts p. 10-10 and ends p. 10-11: correct. The bat description (equal acceleration of the centre of mass at positions 1, 2, 3; pure translation when pushed at the centre of mass, rotation about the centre of mass when pushed at an end) matches.
- 17.7: $d\vec p_\text{sys}/dt = \sum m_j\vec a_j = m_\text{sys}\vec A_\text{cm} = \vec F_\text{ext}$ on p. 1; the reduction to a point particle with the external force placed at the centre of mass, and "we're not trying to trace how each particle moves", on p. 2. Citations "p. 1" and "pp. 1–2" correct.
- Skaters: X = 270/150 = 1.8 m; 60 × 2.4 = 144 = 90 × 1.6; check: (60 × (−2.4) + 90 × 4.6)/150 = 1.8 m. 60 × 1.5/90 = 1.0 m/s. Correct.
- Quiz 1: 24/8.0 = 3.0 m, answer index 2 = "$x = 3.0$ m". Correct.
- Quiz 2: (L⁴/4)/(L³/3) = 3L/4, index 2. Correct.
- Quiz 3: index 2 "the same in both cases". Correct (Example 10.4).
- Quiz 4: index 2 "It stays where it was". Correct; explanation right (internal forces, no net external horizontal force, started at rest).
- Quiz 5: index 2 "Just outside the Sun's surface", 7.42 × 10⁸ m, 1.07 R☉. Correct.
- Flashcards: all four correct.
- `npm run calc:test -- -k centre`: 31 passed.

## Coverage and order
- All seven segments are covered in MIT's order: 17.1 (centre of gravity vs mass, definition, any origin), 17.2 (three planets, real masses), 17.3 (continuous body), 17.4 (system of extended objects), 17.5 (uniform rod, three-step recipe), 17.6 (velocity and acceleration, origin independence), 17.7 (reduction to a point particle).
- Notes Sections 10.5 and 10.6 are covered in full: two-body and N-body definitions, continuous body, Examples 10.2, 10.3(a) and (b), 10.4, Eqs. (10.6.1)–(10.6.3) and the conclusion that the external force may be regarded as acting at the centre of mass. The notes' Earth–Moon example is placed inside the "Three planets" section, between 17.2 and 17.3, which is a sensible merge.
- Additions (all the page's own): Sun–Jupiter worked example, two stacked cubes, thickening pole with a plot, skaters pushing apart, the remark on the exploding projectile, the Bullet Cluster callout. None conflicts with MIT.
- `leadsTo` 8.01 Lecture 18 (relative velocity and recoil): fair.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in any of the seven transcripts, the 17.4 page or Chapter 10 (searched the extracted text). The page reuses no MIT figure; the plot is generated from a formula.
- No OpenStax or LibreTexts material.
- No verbatim copying found beyond standard terms ("linear mass density", "nearly frictionless table", "integration variable"). The 17.4 recipe is reworded. Worked examples use own numbers; see rows 6 and 8 for two examples that stay close to MIT set-ups.
- NASA fact-sheet values are public-domain data, credited in `references`.

## Notes
- Symbols scoped to `centre-of-mass` in data/symbols.json (36 meanings/entries) were checked against the page: all apply and are correctly worded except `y` (row 5). Minor: `j`'s meaning mentions ĵ, which is its own unit-vector entry, harmless; `a-j` is spoken "a sub j" while the similar `m_j`, `r_j`, `v_j` entries are not, purely cosmetic. `λ₀` with unit kg/m matches the notes ("SI units [kg·m⁻¹]").
- `npm run content:check` on this page: no errors; only the warning that this review file was missing.
- Uncertain: whether the planet labelled "Saturn" in the 17.2 video is the 3 m1 planet; the transcript only points ("if this were Saturn"). Given that it "holds all the weight", it must be the 3 m1 planet at (5, 20), and the page does not name which one, so no change is needed there.

## Resolution (2026-11-16, by the page author)

- **Error 1 (Saturn's mass):** the page now says the lecture's 318 Earth masses is Jupiter's value, that Saturn has about 95, and that with 95 the centre of mass lands at about (5.3, 19.9), next to Saturn. Calcs: `saturn-mass` is now `origin: slip` with a note; new entries for Saturn's 95 Earth masses (NASA Saturn fact sheet, added to `references`) and the corrected position.
- **Error 2 (Ferreras leadsTo):** now `lecture: 2.6`, the weak-lensing / Bullet Cluster page.
- **Warning 1:** the callout now says the lensing map was published in 2006.
- **Warning 2:** Sun's mass now 1.988 × 10³⁰ kg; total 1.9899 × 10³⁰ kg and X ≈ 7.43 × 10⁸ m (still 1.07 solar radii), on the page, in quiz 5 and in the calcs.
- **Warning 3:** the `y` meaning for this page no longer has a unit.
- Info: "in one line" replaced by "could also be solved quickly with the centre of mass". Other info notes left as they are.
