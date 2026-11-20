---
page: content/year-0/hs-2/torque-and-balance.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter18/ (read; PDF mit8_01scs22_chapter18.pdf downloaded to a scratch folder outside the repo and extracted with pdftotext; Secs. 18.1 to 18.4, Examples 18.1 to 18.4, Appendix 18A; no "rights reserved", "courtesy" or "excluded from our Creative Commons license" notice)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter17/ (read; PDF mit8_01scs22_chapter17.pdf, same handling; Secs. 17.1, 17.3.1, 17.3.2, 17.4.2; no such notice)
  - docs/siyavula-licences.tsv (checked: no CC BY Siyavula section on moments or torque, so no Siyavula source is missing)
  - content/year-1/8.01/torque-and-angular-acceleration.mdx and torque-and-cross-product.mdx (site pages, read to check leadsTo)
verdict: needs-changes
---

# Review: Torque and balance

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Stability: why things tip over", 2nd paragraph | MIT Example 18.3 (b): "How far must the feet be apart so that the normal force on the **upper** foot is just zero? This is the moment when the person starts to rotate and fall over." Eq. (18.4.14): $N_2 = mg(\tfrac12\cos\alpha - \tfrac{h}{d}\sin\alpha)$ is the upper foot; the lower foot's $N_1$ grows | "the push of the ground on the **lower** foot drops to zero just as the person is about to topple" | Write "upper (uphill) foot". Physically too: a person toppling downhill pivots about the lower foot, and the upper foot lifts off, exactly as the box pivots about the edge it rests on. As written, the comparison with the box points to the wrong contact. |
| 2 | warning | `leadsTo` 8.01 Lecture 31, `why` | Site page 8.01 L31 (`torque-and-angular-acceleration`) is about $\tau_z = I\alpha_z$ for fixed-axis rotation; the vector product $\vec r \times \vec F$ is L30 (`torque-and-cross-product`) | "The university lesson writes torque as a vector product, r × F, and shows that a resultant torque gives ... an angular acceleration" | Split: add `{course: "8.01", lecture: 30}` for torque as $\vec r\times\vec F$ (and centre of gravity), keep L31 for "torque gives angular acceleration". Optionally add L32/L33 (angular momentum), which the cosmology callout names. |
| 3 | warning | "Stability", last paragraph: double-decker buses | No cited source. The UK tilt test (to my knowledge, uncertain, not checked against a §2.0 source) is done with weights on the **upper deck only** and the lower deck empty, the worst case, not "fully loaded" | "double-decker buses are tilted on a test platform, fully loaded, to check that they would not tip on a sharp bend" | Either drop the bus or keep it without the detail: "double-decker buses are tilted on a test platform to check that they would not tip over". |
| 4 | warning | Same paragraph: bookcases | Standard physics: a child on a front shelf moves the combined centre of gravity **forward** (towards or past the front edge) as well as up | "because a child climbing on them raises the centre of gravity of the whole" | Add the main effect: "...puts the child's weight in front of the bookcase and raises the centre of gravity of the whole, so the vertical line through it can pass the front edge." |
| 5 | warning | calcs file coverage | Every number on the page should be in the calcs file | `npm run scan -- --numbers --uncovered` lists the quiz choice lines as uncovered: quiz 1 choices "0.0031 N·m", "320 N·m"; quiz 2 "2.7 m"; quiz 5 "0.40 m", "About 22°", "39°", "45°", "68°" | Add each `choices` string to the `shown` of the matching entry (`quiz1-wrong-divide`, `quiz1-wrong-320`, `quiz2-wrong`, `quiz5-*`); add a `fact` or input entry for the box width 0.40 m. Also `plank-fa` has only "A carries more of the load" in `shown`; give it the "$\approx 613$ N" strings. |
| 6 | info | "The centre of gravity", "(Sec. 17.4.2, Eq. 17.3.27)" for "centre of mass, the average position of all the object's mass" | Eq. (17.3.27) uses $\vec R_{cm}$; the definition of the centre of mass is MIT Eq. (10.5.3), cited there | Cites Eq. 17.3.27 for the definition | Fine as a pointer to where centre of gravity = centre of mass; the definition itself is standard. No change needed. |
| 7 | info | Tipping rule $\tan\theta = b/h$ (page's own) | MIT Example 18.3, Eq. (18.4.16): $d = 2h\tan\alpha$, i.e. $\tan\alpha = (d/2)/h$: the centre of mass is straight above the lower foot at the limit | Box tips when the centre of gravity is above the edge, $\tan\theta = b/h$ | Correct and supported by analogy with Eq. (18.4.16); stated in the page's own words. The page could say that MIT's result $d = 2h\tan\alpha$ is the same rule. |
| 8 | info | "Lessons 2.1 to 2.7 treated every object as a single point" | Lessons 2.8 and 2.9 also treat objects as points | "2.1 to 2.7" | Say "2.1 to 2.9" (or "Lessons so far"). |
| 9 | info | "Stability", 2nd paragraph: "Just before that, the floor pushes only at the edge" | For a box already tilted on one edge, the floor pushes only at that edge throughout the tilt | "Just before that" | Slightly confusing; fixing row 1 will likely reword this sentence anyway. |

## Formulas and citations
- **Torque (moment)** $\tau = F d$, `cite="reading1" at="Sec. 17.3.1, Eq. (17.2.30), there written τ = r⊥F"`: MIT Ch. 17 Sec. 17.3.1 prints "Area = $|\vec\tau_S| = r_\perp F = r F_\perp = r F\sin\theta$" as (17.2.30) (equation numbers in Sec. 17.3 are printed 17.2.x in the PDF; cited as printed). Correct.
- **Torque at an angle** $\tau = rF\sin\theta$, `at="Sec. 17.3.1, Eq. (17.2.29)"`: MIT (17.2.29) $|\vec\tau_S| = rF\sin\theta$, and $r_\perp = r\sin\theta$ called the moment arm. Correct.
- Unit N·m, line of action, moment arm, zero torque at θ = 0 and π: all in Sec. 17.3.1. Correct.
- Perpendicular-component reading, "Sec. 18.3, Eq. 18.3.9": MIT $d_1F_{1,\perp} = d_2F_{2,\perp}$. Correct.
- Sign convention, "Sec. 17.3.2 and Sec. 18.2": 17.3.2 gives both conventions and says observers above and below a horizontal plane disagree (supports the door remark); 18.2 chooses counterclockwise positive. Correct.
- **Lever law** $F_1d_1 = F_2d_2$, `cite="mit" at="Sec. 18.2, Eq. (18.2.3), there written d₁N₁ = d₂N₂"`: matches. The page's "weights" vs MIT's normal forces: MIT notes they are equal here (horizontal beam, static); fine.
- **Conditions for equilibrium**, `at="Sec. 18.1, Eqs. (18.1.1) and (18.1.2)"`: matches (MIT writes them as vectors; the page's scalar form is fine for forces along one line and torques in one plane).
- Appendix 18A "torques about any point": MIT proves it when the net force is zero; the page uses it only for objects in balance. Correct.
- "Take torques about the unknown force", Example 18.2 alternative solution: MIT's closing sentence says exactly this. Correct.
- Pivot force and beam weight have zero moment arm about the pivot (Sec. 18.2): correct.
- Centre of gravity = centre of mass for constant $\vec g$ (Sec. 17.1 and 17.4.2): correct.
- Uncited but standard and correct: plumb-line method for finding the centre of gravity; ring and boomerang; levers (crowbar, wheelbarrow, scissors, opener, pliers); forearm as a lever with the muscle near the elbow; torque not written in joules; work conserved for an ideal lever (forward reference to Block 3).

## Arithmetic and answer checks
Recomputed independently (g = 9.81 m/s²). `pytest -k torque` on the calcs suite passes (99 tests selected, all pass).
- Door: 15 × 0.80 = 12 N·m; 12/0.20 = 60 N; 4 × 15 = 60. At 30°: 0.80 × 15 × 0.5 = 6.0 N·m. Plot points (90°, 12) and (30°, 6) lie on the curve `0.80*15*sin(x*pi/180)`; range 0 to 14 contains the maximum. Correct.
- Seesaw: 24 × 1.5/80 = 0.45 m; 134 × 9.81 = 1314.5 N → 1.31 × 10³ N; 24 × 9.81 × 1.5 = 353.2 and 80 × 9.81 × 0.45 = 353.2 N·m; 80/24 = 3.33 and 1.5/0.45 = 3.33. Correct.
- Painter: 196.2 N and 686.7 N; 392.4 + 686.7 = 1079.1 N·m; /4.0 = 269.8 N → 270; 882.9 − 269.8 = 613.1 → 613 N; check about B: (392.4 + 2060.1)/4.0 = 613.1 N. Correct; the sense (clockwise weights, anticlockwise $F_B$ about A) is right.
- Bookcase: tan⁻¹(1/3) = 18.4° → 18°; crate tan⁻¹(1) = 45°. Correct.
- Wheel nut: 600 N, 600/9.81 = 61.2 kg → 61 kg, 240 N, 600/2.5 = 240. Correct.
- Quiz 1: 20 N·m. 80/0.25 = 320, 0.25/80 = 0.0031; 80 N·m (force alone) wrong. Explanation true.
- Quiz 2: 1.5 m. 40 × 2/30 = 2.67 → 2.7 m (heavier side goes down: true); 2.0 and 1.0 wrong. Correct.
- Quiz 3: no torque (line of action through the hinges). Distractors wrong. Correct.
- Quiz 4: up on the left and down on the right both turn the wheel clockwise (seen by the driver): zero resultant force, non-zero torque. Correct; distractors wrong.
- Quiz 5: tan⁻¹(0.20/0.50) = 21.8° → 22°; whole width 38.7° → 39°; inverse 68.2° → 68°; 45° wrong. Correct.
- Flashcards: all five true.

## Only earlier terms
- Force, resultant force, newton, free-body idea: lesson 2.1. Equilibrium (zero resultant force): lesson 2.2 (newtons-first-law has the section "Equilibrium: forces that balance"). Weight, normal force: lesson 2.5 (also for "push of the painter's feet equals his weight"). All in `prerequisites`.
- sin, tan, tan⁻¹, degrees, "lesson 0.7": angles-and-trigonometry has the inverse functions. Components with sine and cosine, "lesson 0.8": introducing-vectors. Both in `prerequisites`.
- Pivot, line of action, lever arm, torque/moment, clockwise/anticlockwise, resultant torque, principle of moments, extended object, centre of gravity, centre of mass, stable, lever, fulcrum, effort, load: each defined where first used.
- Forward references (energy, joule, work in Block 3; Kepler's second law in lesson 2.12; angular momentum "in the university course 8.01") are labelled as later material. Lesson 2.12 (`keplers-laws-and-orbits`) is planned, not written; its §4 row (Kepler's laws and orbits) covers the second law, so the reference is acceptable.
- No term used before it is introduced.

## Coverage
- §4 row 2.10 (Torque and balance; PhET `balancing-act`, "Mass times distance on each side of a lever"): torque/moment, lever arm, angle form, signs, principle of moments, two equilibrium conditions, centre of gravity, tipping and stability, levers. Covered at VWO level. PhET embedded with the planned sim (`balancing-act_1.3.9` in the manifest).
- Not covered: stable, unstable and neutral equilibrium as named types (only "stable" and tipping); a couple (two equal opposite forces) is shown in the steering-wheel example but not named. Neither matters much at this level; naming "couple" would be a small gain.

## Where this leads
- `leadsTo` 8.01 L31 exists (`torque-and-angular-acceleration`) and is on the topic (resultant torque → angular acceleration), but the vector-product half of its `why` belongs to L30 (`torque-and-cross-product`). See row 2.
- `towards: false`: correct; 2.10 is not the block's last lesson.
- Cosmology callout: the Sun's pull is a central force, its line of action passes through the Sun, so its torque about the Sun is zero, angular momentum is conserved and equal areas are swept in equal times: correct physics (Kepler's second law follows from a central force alone). Spin-up of a contracting cloud and flattening into discs: correct as a statement about angular momentum; strictly, the flattening also needs the cloud to lose energy along the spin axis (collisions), which angular momentum alone does not give (info, no change required at this level). "Astronomers think" for galaxy discs is suitably hedged.

## Licensing and AI terms
- No sentence copied: compared the definitions (line of action, moment arm, lever law, conditions for equilibrium, Appendix 18A conclusion) with MIT's wording; the page rewrites all of them. Short standard phrases only ("perpendicular distance", "line of action").
- No figures from MIT: the only figure is a generated `<Plot>`.
- Worked examples and quiz are the page's own: MIT's Example 18.1 (1.0 m beam, 0.3 kg at 0.4 m, 0.6 kg) and Example 18.2 (hinged rod with cable at 30°) are not reused; the seesaw, painter, bookcase, wheel nut and quiz numbers are new. The calcs header says so.
- MIT chapters carry no "excluded from our Creative Commons license" or "All rights reserved" notice (grep of the extracted text).
- No Siyavula, NASA or ESO material used; no forbidden source cited or named.
- PhET: embedded via `<PhET>`, which prints the attribution.

## Notes
- The calcs file has `source: {cite, at}` on every entry, and every `at` adds "(the numbers are the page's own)" with `origin: page-own`: honest. The tipping entries cite Example 18.3 Eqs. (18.4.14)–(18.4.16), which is the right place for the rule (see row 7).
- The readings entry carries a `location` field; check that the schema accepts it (not verified here; `content:check` was not run by the reviewer).
- Uncertain: the exact loading in the UK bus tilt test (row 3) is from memory, not from a §2.0 source; the safe fix is to drop the detail.

## Resolution (2026-11-20, by the page author)
1. Fixed: the Example 18.3 sentence now says the ground's push on the **upper (uphill)** foot drops to zero as the feet are brought closer, and the person turns about the lower foot, like the box about its edge; it adds that in the limit the centre of gravity is straight above the lower foot (the same rule). The confusing "Just before that, the floor pushes only at the edge" became "While the box is tilted on its edge, the floor pushes on it only at that edge, so the edge is the pivot."
2. Fixed: `leadsTo` now has 8.01 Lecture 30 (`torque-and-cross-product`: torque as r × F, gravity acting at the centre of mass) and keeps Lecture 31 with a `why` about τ = Iα only. L32/L33 not added (the cosmology callout's angular momentum is reached through L31's own forward links).
3. Fixed: the double-decker bus tilt test was removed (unsourced); the sentence now reads "Racing cars are built low and wide."
4. Fixed: the bookcase sentence now says a child on a front shelf puts weight in front of the bookcase and raises the centre of gravity, so the vertical line through it can move towards and past the front edge.
5. Fixed: quiz choice strings added to `shown` ("0.0031 N·m", "320 N·m", "2.7 m", "About 22°", "About 39°", "About 68°"); new entries `quiz5-half-width` (0.40 m wide → 0.20 m) and `quiz5-wrong-45` ("About 45°"); `plank-fa` now shows "so $F_A = 882.9 - 269.8 \approx 613$ N". `calc:test -k torque-and-balance`: 35 passed.
6. No change (as the review says).
7. Partly: the page now states that at the limit the person's centre of gravity is straight above the lower foot, the same rule as the box; MIT's formula d = 2h tan α itself is not quoted, to keep the section short.
8. Fixed: "Lessons 2.1 to 2.9".
9. Fixed with row 1.
