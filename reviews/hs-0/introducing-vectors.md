---
page: content/year-0/hs-0/introducing-vectors.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/vectors-in-two-dimensions/01-vectors-in-two-dimensions-03 (read; 1.3 Components of vectors, subsection "Vector addition using components", Worked examples 12–15, Exercise 1.6; footer: "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License" (CC BY 3.0), with the note that embedded external videos, simulations and presentations are not necessarily covered; no "All rights reserved")
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/vectors-and-scalars/20-vectors-and-scalars-01 (read; 20.1 scalars, vectors, notation; same CC BY footer)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/vectors-and-scalars/20-vectors-and-scalars-03 (read; 20.3 equality, negative vectors, addition, subtraction, resultant, equilibrant; same CC BY footer)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/vectors-and-scalars/20-vectors-and-scalars-04 (read; 20.4 head-to-tail method, vectors in a straight line, Worked examples 3–7; same CC BY footer)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/vectors-in-two-dimensions/01-vectors-in-two-dimensions-02 (read; 1.2 Cartesian plane, compass directions, bearings, Pythagoras, tail-to-tail method, algebraic methods, Worked examples 1–11, Exercises 1.1–1.5; same CC BY footer)
  - calcs/hs-0/introducing-vectors.yaml (read; `npm run calc:test -- -k introducing-vectors`: 15 passed)
  - content/year-0/hs-0/ lessons 0.1–0.7 (searched for earlier terms)
  - content/year-1/8.01/vectors.mdx (lecture 0) and content/year-1/18.02/dot-product.mdx (lecture 1) (leadsTo targets)
  - public/phet/manifest.json (vector-addition 1.2.6 present); app/theme-highschool.css and lib/vector-layout.ts (colour of the resultant arrow)
  - docs/HIGHSCHOOL-PLAN.md §2.0 and §4 row 0.8 (OpenStax sources there ignored, not opened)
verdict: needs-changes
---

# Review: Vectors

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Adding vectors", bullet "Same line": 5 N to the right plus 2 N to the left is +3 N; calcs entry `same-line` says "(the numbers are the page's own)" | Siyavula Gr 11 Sec. 1.2, **Worked example 9**: "A force of 5 N to the right is applied to a crate. A second force of 2 N to the left …"; answer (5) + (−2) = 3 N, "3 N to the right". Gr 10 Sec. 20.4 Worked example 7 also uses 5 N and 2 N | Exactly Siyavula's example (same forces, same directions, same sign choice, same answer); the calcs file calls the numbers the page's own | Worked examples must be original. Change the numbers and situation (e.g. 7.0 N east and 4.5 N west → 2.5 N east), and update the calcs entry. As it stands the calcs `at` wording is not honest. |
| 2 | error | Worked example step "first quadrant", callout title "Check the quadrant", flashcard "check the quadrant from the signs", Summary | Lesson 0.7 (angles-and-trigonometry) never uses or defines "quadrant"; neither does any other earlier lesson (searched 0.1–0.7) | "Quadrant" used without introduction | Add one sentence in the callout: "The axes split the plane into four **quadrants**, numbered anticlockwise from the one where x and y are both positive." |
| 3 | warning | Formula "Magnitude and direction from components", `cite="mit" at="Sec. 1.3, Components of vectors"` | Sec. 1.3 states only R_x = R cos θ and R_y = R sin θ as general results; R² = R_x² + R_y² and tan α appear there only inside Worked examples 14 and 15. The general statements are in Sec. 1.2 ("Using Pythagoras' theorem to find magnitude" under "Magnitude of the resultant of vectors at right angles"; tan α in "Algebraic methods", Worked example 11) | Cites 1.3 as if it stated both results | Cite `reading4`, "Sec. 1.2, Using Pythagoras' theorem to find magnitude, and Algebraic methods (Worked example 11)", or keep 1.3 with "Worked examples 14–15". Siyavula writes R² = R_x² + R_y² and calls the angle α; the page's form is equivalent. |
| 4 | warning | Head-to-tail diagram caption: "the resultant A + B (green)" | — | The sum arrow is drawn with `--plot-3` (lib/vector-layout.ts, `color: 9`). In the High School light theme that is green (#22793f), but in the High School dark theme ("aubergine", app/theme-highschool.css) `--plot-3` is light blue (#8fc4f2), and the arrow of A (`--plot-1`, #7ee0b8) is the green one | In dark mode the caption points the reader at the wrong arrow. Do not name a colour; say "the resultant A + B (the third arrow, from the tail of A to the head of B)", which also helps colour-blind readers. |
| 5 | warning | Worked example "A sailing trip" | Lesson 0.3 (significant-figures-and-estimates): a result has no more significant figures than the least precise input | Inputs 8.0 km and 5.0 km (two figures); answers 6.13 km and 58.7° (three) | Same inconsistency as found in lesson 0.7's review. Either give the inputs as 8.00 km and 5.00 km, or state the final answer as 6.1 km at 59° (keep three figures for the intermediate components). |
| 6 | warning | `<Callout kind="cosmology">` | No cited source covers it | "To find the galaxy's own motion, astronomers subtract the vector sum of all of ours, component by component, exactly as in this lesson." | Roughly right but overstated: a redshift measures only the velocity **along the line of sight**, so astronomers correct for the line-of-sight part of our own motion (Earth's spin and orbit, the Sun's motion), not the full vector, and what is left is mostly the expansion of the universe plus the galaxy's own (peculiar) motion. Suggest: "…each of these motions is a velocity vector. Before using a galaxy's measured speed, astronomers remove the part of our own combined motion that points towards or away from the galaxy." Add a source (e.g. a NASA page or this site's 8.286 lessons) or keep it general. |
| 7 | warning | Intro list "Displacement, velocity, acceleration and force are all vectors"; diagram caption "resultant displacement" | Displacement is defined in Siyavula 20.3 ("the vector which describes the change in an object's position"); in this course it comes in Block 1 | Used without saying what it is (velocity, acceleration and force are named in lessons 0.2 and 0.4; displacement in no earlier lesson) | Add "(a change of position)" at first use. |
| 8 | warning | Quiz 3 (6 N and 8 N → 10 N), quiz 4 ((−4.0, −3.0) → 36.9°), callout "(4, 3) and (−4, −3)" | Siyavula uses the 3-4-5 triangle repeatedly: Sec. 1.2 Worked examples 5 (3 N, 4 N → 5 N at 53°), 10–11 (40 N, 30 N → 50 N, 36.9°), Sec. 1.3 Worked example 14 (8 N, 6 N → 10 N at 36.9°) | Not copies (different numbers or quadrant), but three of the page's items rest on the same triangle and give Siyavula's 36.9° and 10 N | Change at least one (e.g. quiz 3 to 5.0 N and 12 N → 13 N, or quiz 4 to (−5.0, −2.0)); otherwise acceptable. |
| 9 | warning | "Arrows and notation": the magnitude "is always a positive number with a unit" | Siyavula 20.4 itself uses the zero vector (zero net displacement) | "always positive" | Write "never negative" (the zero vector has magnitude 0). |
| 10 | info | "Adding vectors": multiplying a vector by a number | Not in any of the five cited pages | Standard and correct | Fine as standard; no fix needed. |
| 11 | info | "Two vectors are **equal** if they have the same magnitude and the same direction, wherever they are drawn." | Siyavula 20.3: "Two vectors are equal if they have the same magnitude and the same direction." | Nearly word for word | A short standard definition; acceptable. Rewording ("Two arrows of the same length pointing the same way are the same vector, wherever they are drawn") would remove any doubt. |
| 12 | info | Parallelogram method | Siyavula 1.2 calls it the "tail-to-tail method" (never "parallelogram") | "parallelogram method" | Standard name; fine. Readers who use Siyavula alongside may like "(also called tail to tail)". |

## Formulas and citations
- **Components of a vector** `R_x = R cos θ, R_y = R sin θ`, `cite="mit" at="Sec. 1.3, Components of vectors"`: correct; Siyavula 1.3 boxes exactly these, with θ measured anticlockwise from the positive x-axis, and lets the angle supply the signs (Worked example 13 at 230° gives both components negative). The page's statement that sine and cosine supply the signs matches. Notation (R, θ, R_x) is the site's.
- **Magnitude and direction from components**: correct physics, but cited to 1.3, where these appear only inside worked examples (row 3).
- `source.url` and all four `readings` exist, are Siyavula online pages (§2.0), and support what the page uses them for: 20.1 (scalars, vectors, notation with arrow, magnitude without arrow), 20.3 (equality, negative, subtraction, resultant), 20.4 (head-to-tail, straight-line algebra), 1.2 (Cartesian angle convention, compass directions, Pythagoras, tail-to-tail/parallelogram, tan with the 180° adjustment in the answers of Exercise 1.5).
- The "Check the quadrant" rule (add 180° when R_x < 0) is correct. Siyavula 1.2 gives the same adjustment only in exercise answers (159.21° = 180° − 20.79°). Not covered: R_x > 0, R_y < 0 gives a negative calculator angle (e.g. −37°), which in the page's convention is 323°; the page's quiz never needs it, so info only.
- `references: {}`: no other sources used, consistent with the page, except for the cosmology callout (row 6).

## Arithmetic and answer checks
Recomputed in Python (own route, atan2 for angles):
- Components diagram: R = √(5.0² + 2.5²) = 5.590 → 5.6; θ = 26.565° → 26.6°. Correct.
- Sailing trip: 8.0 cos 20° = 7.5175 → 7.52; 8.0 sin 20° = 2.7362 → 2.74; 5.0 cos 150° = −4.3301 → −4.33; 5.0 sin 150° = 2.50. R_x = 3.1874 → 3.19, R_y = 5.2362 → 5.24; R = 6.1300 → 6.13 km; θ = atan2(5.236, 3.187) = 58.67° → 58.7°. Check line: 8.0 + 5.0 = 13 km > 6.1 km. All correct (sig figs: row 5). The diagram of the two legs uses the same components (7.52, 2.74; −4.33, 2.5): consistent.
- Same line: +5 + (−2) = +3 N. Correct (but Siyavula's example, row 1).
- Quiz 1: answer 2 (velocity heading north) is the only vector; mass, temperature, time are scalars. Correct.
- Quiz 2: 10 cos 60° = 5.0 N (answer 0); 8.7 N = 10 sin 60° = 8.660 (the y-component, wrong for x); 10 N and 17 N wrong. Explanation correct.
- Quiz 3: √(36 + 64) = 10 N (answer 2); 2, 7, 14 N wrong; explanation correct.
- Quiz 4: atan2(−3, −4) = 216.87° → 217°, 36.87° below the −x axis (answer 1). "37° above +x" is (4, 3); "53° above the −x axis" points up-left: wrong. Explanation correct.
- Quiz 5: A − B = A + (−B) (answer 1). Choices 0 and 2 are both B − A (wrong), "a scalar" wrong. Correct.
- Flashcards: all true.
- Calcs file: every number on the page is in it (15 entries, `calc:test` 15 passed). Every entry has `source: {cite, at}`. All are honestly cited to a section that covers the method, except `same-line` ("the numbers are the page's own" is false, row 1) and `quiz-quadrant`, whose 180° adjustment is shown in Sec. 1.2 (Exercise 1.5 answers), not in 1.3 (minor; cite `reading4`).

## Only earlier terms
- **quadrant**: not introduced in any earlier lesson or on this page (row 2, error).
- **displacement**: not introduced earlier (row 7, warning).
- Introduced earlier, fine: Pythagoras, hypotenuse, right-angled triangle, tan⁻¹ and inverse functions, unit circle, anticlockwise, angle from the positive x-axis (all lesson 0.7); x- and y-axes (0.5); newton N and force (0.2, 0.4); velocity and kelvin (0.2); acceleration (0.4); significant figures (0.3).
- Introduced on this page before use: scalar, vector, magnitude, tail, head, resultant, head-to-tail, components, negative of a vector, the calculator range −90° to +90° of tan⁻¹.
- "parallelogram" is an everyday geometry word, explained by the sentence it sits in; fine.
- "galaxy" in the cosmology callout: used as a plain word, as in lessons 0.2, 0.4, 0.5, 0.7; fine.

## Coverage
- §4 row 0.8 lists the topic "Vectors" with PhET `vector-addition` (OpenStax sources there ignored). The page covers scalars vs vectors, notation, equality, negative, head-to-tail and parallelogram addition, same-line and right-angle cases, subtraction, multiplication by a number, components with signs, magnitude and direction from components, the quadrant trap and addition by components. That is the VWO level (adding and resolving forces and velocities).
- Left out: the **equilibrant** and closed vector diagrams (Siyavula 20.3, 1.2; needed for equilibrium in Block 2, which can introduce it there; info); **bearings** (Siyavula 1.2; compass directions are mentioned; not needed at VWO, info); **scale drawings** with a chosen scale (Siyavula 20.4; the page mentions drawing as "slow and not very precise"; info); **unit vectors î, ĵ** (8.01's `vectors` lesson uses them; a sentence would ease the step to Year I; info).
- PhET Vector Addition (1.2.6) is in `public/phet/` and the manifest; `<PhET title=…>` takes its id from the frontmatter `phet` (lib/mdx.tsx). The "Try it" text matches the sim (sum and component options).

## Where this leads
- `8.01` lecture 0 is content/year-1/8.01/vectors.mdx ("Vectors", 8.01SC Lesson 0): same topic, and it does use unit vectors in three dimensions. Correct.
- `18.02` lecture 1 is content/year-1/18.02/dot-product.mdx: the dot product is the next step after components. Correct.
- `towards: false`; this is not the block's last lesson (0.11 `towards-the-universe-scales` is). Correct. The cosmology callout's claim is checked in row 6.

## Licensing and AI terms
- All five cited Siyavula pages show the CC BY 3.0 footer; none has "All rights reserved". No Siyavula logo, brand or "Everything Science" branding on the page ("Siyavula, Physical Sciences Grade 11/10" appears only as the source attribution).
- No sentence copied beyond short standard definitions (row 11; "the resultant … from the tail of the first to the head of the last" is likewise a standard phrase, Siyavula 20.4).
- Figures: all three diagrams are `<VectorDiagram>`s generated from numbers; nothing taken from Siyavula's figures.
- Worked examples and quiz: the sailing trip, the 5.0/2.5 components diagram and quiz 1, 2 and 5 are original. The same-line example is Siyavula's Worked example 9 (row 1, error). Quiz 3 and 4 are not copies but share Siyavula's 3-4-5 triangle (row 8). The page's numbers do not match Siyavula's 250 N at 30°, 12.5 N at 230°, 5 N at 53.13° or the four-force example 15.
- Siyavula's embedded PhET sim and YouTube video were not used; the page uses the site's own pinned PhET copy, with PhET's attribution printed by the component.
- No MIT, NASA or ESO material used; no forbidden source cited or used.

## Notes
- `npm run content:check` reports no error or warning for this page other than the missing review file (the one error in the run belongs to exponentials-and-logs).
- Source oddities not reproduced by the page (good): Siyavula 1.3 Worked example 15 writes tan α = 1.86/3.65 but computes tan⁻¹(3.65/1.86); Exercise 1.6 has 193° in the question and 103° in the solution; 20.4 Worked example 7 defines the crate's force as −2 N but then adds +2 N.
- The slug `introducing-vectors` (instead of the lesson list's `vectors`) is intentional to avoid the clash with 8.01 `vectors`, as the caller noted; not a finding.

## Resolution (2026-11-20, by the page author)

- 1 (error, copied example): the same-line example is now 7 N right plus 3 N left = 4 N right (calcs `same-line` updated).
- 2 (error, "quadrant"): a paragraph now defines the four quadrants, numbered anticlockwise, with their signs and angle ranges.
- 3: the formula "Magnitude and direction from components" now cites reading4, Sec. 1.2 (Magnitude of the resultant of vectors at right angles).
- 4: neither caption names a colour any more.
- 5: the sailing trip now ends with the answer to two significant figures, about 6.1 km at 59° (calcs `sailing-rounded`); the 3-figure values stay as working.
- 6: the cosmology callout now says the light reveals only the line-of-sight speed, and astronomers correct for the component of our own total velocity along that line.
- 7: "displacement" is now defined in the introduction.
- 8: quiz 3 now uses 5.0 N and 12 N (13 N); quiz 4 uses (−5.0, −2.0), 202°; the quadrant callout uses (5, 2) and (−5, −2). No 3-4-5 triangle remains.
- 9: a magnitude is now "never negative".
- Info: the equal-vectors sentence is a short standard definition; other info items need no change.

`npm run calc:test` (16 entries for this page) and `npm run content:check` pass.

- 2026-11-20, later: the slug is now `introducing-vectors`, the name chosen in the owner's fix of the lesson lists (commit 5aa731d, "Rename 11 High School slugs that clash with university lessons"); file, calcs, review and symbol meanings renamed with it.
