---
page: content/year-0/hs-2/newtons-first-law.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-03 (read; CC BY footer "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License" present; listed in docs/siyavula-licences.tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter7/ (read; PDF mit8_01scs22_chapter7.pdf, Sec. 7.1, 7.1.1, 7.2; downloaded to a scratch folder outside the repo; no "rights reserved", "courtesy" or "excluded" notice)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter11/ (read; PDF mit8_01scs22_chapter11.pdf, Sec. 11.2.1; no notice)
  - https://mathshistory.st-andrews.ac.uk/Biographies/Galileo/ (read)
  - https://science.nasa.gov/mission/voyager/voyager-1/ (read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/cb950383a94305d1894010ba577ec20b_45RQrWHzovU.pdf (read; printed pages 12 to 14)
verdict: pass-with-notes
---

# Review: Newton's first law: inertia

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Does motion need a force?", paragraph 1 (Aristotle) | No cited source covers Aristotle's theory of motion. MacTutor mentions Aristotle only for astronomy and natural philosophy ("argued against Aristotle's view of astronomy and natural philosophy in three public lectures", 1604) | "Aristotle's natural philosophy ... is usually summarised in just this way: a body moves only as long as something moves it." | The hedged summary is the standard textbook one and acceptable at this level, but it is uncited and too broad: Aristotle held that *natural* motion (a stone falling) needs no mover; the "needs a mover" rule was for forced ("violent") motion. Either narrow it ("motion that is not natural, such as a pushed cart, lasts only as long as something pushes it") or keep it clearly as the popular summary. No allowed source to cite was found; MIT 8.01SC Sec. 7.1 at least supports "everyday experience" framing. |
| 2 | warning | Same paragraph, last sentence, and paragraph 2 (ramp argument) | MacTutor: De Motu "around 1590", never published; returned to motion in 1602, inclined planes and pendulum over the next two years (law of falling bodies). It says nothing about inertia, a ball rolling on for ever, or the two-ramp argument | "his studies of motion ... led him away from this picture (see the MacTutor biography ...)"; then the two-ramp argument "of the kind Galileo made" | The dates are supported; "led him away from this picture" is not by MacTutor (the MIT notes Sec. 7.2 do support "Principle of Inertia ... first realised by Galileo", which the page already cites in paragraph 2). Move the MacTutor pointer onto the dates only. The two-ramp thought experiment is standard and correct (it is Galileo's, in his later *Dialogue* and *Two New Sciences*) and is honestly hedged, but no cited source supports it: say so or leave it unattributed ("Here is an argument in Galileo's spirit"). |
| 3 | warning | "The first law and frames of reference", "the MIT notes show that it follows from the first law" | MIT Ch. 11, Sec. 11.2.1: "We can reinterpret Newton's First Law ... as the Principle of Relativity: In relatively inertial reference frames, if there is no net force impressed on an object at rest in frame S, then there is also no net force impressed on the object in frame S′." | The principle of relativity "follows from the first law" | MIT *reinterprets* the first law as (a form of) the principle of relativity; it does not derive the full principle (all laws the same) from it. Write "the MIT notes (Ch. 11, Sec. 11.2.1) read the first law as a form of this principle". Also give the section, since Ch. 11 is otherwise cited nowhere on the page. |
| 4 | warning | Quiz question 1 and worked example "A parachutist at constant speed" | Lesson 2.1 already has the quiz "A skydiver with an open parachute falls straight down at a constant speed ..." with answer "balanced: the resultant force is zero", and its "Balanced and unbalanced forces" section already states the first-law content | Quiz 1 asks the same question with numbers (5.0 m/s) | Replace quiz 1 by a question 2.1 does not already ask (e.g. a ball on a rotating platform, a hovering helicopter, a lift at constant velocity), or say in the text that 2.1's "balanced forces" rule is the first law and this lesson names it. |
| 5 | warning | calcs file, entries `de-motu` and `inclined-planes` | Values come from MacTutor | `origin: mit` | `origin: mit` claims the value is from the MIT material; it is from MacTutor. No `origin` value fits exactly (`mit` / `page-own` / `later-data` / `slip`), so either add a short comment in the entry ("origin: MacTutor; `mit` used for historical facts from a cited reference") or ask the owner for a `reference` origin. Same applies to the `voyager-*` facts marked `later-data`, which is acceptable for a 2024 NASA value. |
| 6 | info | Formula "Equilibrium" (`cite="mit" at="Sec. 2.3, Forces in equilibrium"`) | Siyavula 2.3 "Forces in equilibrium": in words only, "An object in equilibrium has both the sum of the forces acting on it equal to zero" (the stray "both" hints at a second, rotational condition); no equation | $\vec F_{\text{net}} = \vec F_1 + \vec F_2 + \dots = \vec 0$ | Physics correct (translational equilibrium). Add "(stated in words)" to `at`, or cite the sum's first half to MIT Ch. 8 Sec. 8.4.1 as Lesson 2.1 does. Lesson 2.10 (torque and balance) should add the rotational condition. |
| 7 | info | Formula "Newton's first law" | Siyavula definition box: "An object continues in a state of rest or uniform motion (motion with a constant velocity) unless it is acted on by an unbalanced (net or resultant) force." | $\vec F_{\text{net}} = \vec 0 \Rightarrow \vec v$ stays constant | Correct symbolic rendering of a law stated in words; notation matches Lesson 2.1 ($\vec F_\text{net}$). |
| 8 | info | "Inertia and mass", "Mass is the measure of inertia" | Siyavula defines inertia without mentioning mass; MIT Sec. 7.1 calls the constant of proportionality "the inertial mass, which Newton called 'quantity of matter'" and Sec. 7.1.1 "inertial mass" | "Mass is the measure of inertia" | Standard and correct; the MIT citations in the paragraph support the rest. Fine. |

## Formulas and citations
- Both `<Formula>`s cite `mit` (= the Siyavula page) at existing places on it: "Newton's first law" definition box (ESBKS) and "Forces in equilibrium" (ESBKW, at the end of 2.3). Physics and notation correct; see rows 6 and 7.
- "the MIT notes say it was first realised by Galileo": MIT Sec. 7.2, "The First Law of Motion, commonly called the 'Principle of Inertia,' was first realized by Galileo." Supported.
- "uniform motion in a right line" (MIT Sec. 7.2, Law 1, English translation): quoted correctly.
- "Newton called mass the 'quantity of matter' ... the MIT notes call mass measured in this way the inertial mass": MIT Sec. 7.1 and 7.1.1. Supported.
- Principia 1687: MIT Sec. 7.1, first paragraph. Supported.
- Voyager 1: NASA page "Voyager 1: The Farthest Spacecraft" gives launch 5 Sept 1977, fly-bys of Jupiter and Saturn, "crossed into interstellar space in August 2012" (25 Aug 2012), and "38,026.79 mph (17.0 km/second) relative to the Sun" "As of Aug. 21, 2024". All match. NASA calls it "the first spacecraft to cross the heliosphere" and "the first human-made object to venture into interstellar space"; the page's "first spacecraft to cross into interstellar space" is equivalent.
- Cosmology callout: 8.286 Lecture 5 transcript p. 13 (printed footer): "that simply means that all velocities are constant ... in the absence of gravity, one can say that a of t should just be proportional to t", with time zero chosen where a(t) = 0. The page's quote and paraphrase match. Lecture 5 continues (p. 14 on) to the dynamics with Newtonian gravity, as the page says; the later claim that the expansion is accelerating today is correct and is covered later in 8.286.
- Siyavula examples used (seat belts, cornering, rockets in space, friction slowing a ball) are rewritten, not copied; the page's numbers are its own (Siyavula's seat-belt example uses 120 km/h, not reused).

## Arithmetic and answer checks
Recomputed independently; `pytest tests -k newtons-first-law` also passes (19 entries).
- 15 m/s × 3.6 = 54 km/h. Car: ½(15 + 0) = 7.5 m/s, × 0.10 s = 0.75 m. Passenger: 15 × 0.10 = 1.5 m. Relative: 0.75 m. Correct (deceleration 150 m/s², plausible crash). "0.75 m is about the distance from the front seat to the windscreen": plausible order of magnitude.
- Plot: 8.0 m/s, losing 2.0 m/s per second, stops at 4.0 s; expression `t <= 4 ? 8 - 2*t : 0` matches the caption.
- Puck: 8.0 × 2.5 = 20 m (step and area check agree).
- Parachutist: 780 N up; check 780 − 700 = 80 N down. Diagram: 780 N / 200 N per unit = 3.9 units, both arrows ±3.9. Correct.
- Voyager: 17.0 km/s × 3.156 × 10⁷ s = 5.36 × 10⁸ km ≈ 5.4 × 10⁸ km. Correct.
- Quiz 1: answer 0 (zero) correct; the other three are wrong (choice 4 would make her accelerate). Explanation true.
- Quiz 2: 4.0 × 6.0 = 24 m, answer 2 correct; 0.67 m (= 4/6) and 10 m (= 4 + 6) are wrong; "It stops, so less than 24 m" is wrong under the stated idealisation. Explanation true.
- Quiz 3: answer 1 correct; others wrong. Quiz 4: answer 1 correct; explanation (braking bus not inertial) true. Quiz 5: answer 1 correct; explanation (short-acting friction hardly changes velocity) true.
- Flashcards: all five true.
- Every number on the page is in the calcs file (inputs or entries); each entry has `source: {cite, at}` (MacTutor and Voyager facts have `cite` only, with the location in `references`); see row 5 on `origin`.

## Only earlier terms
- force, newton, resultant/net force, $\vec F_\text{net}$, balanced forces, gravity, **weight**, friction, drag/air resistance, free-body diagram: all introduced in Lesson 2.1 (sections "Kinds of force", "Weight", "Free-body diagrams", "The resultant force"). Weight and gravity are therefore earlier terms, as required.
- velocity and constant velocity (1.2), acceleration (1.4), average velocity ½(vᵢ + v_f) (1.6, constant-acceleration), frame of reference and principle of relativity (1.9, relative-velocity, which states Galilean relativity), vectors (0.8), kg and km/h (0.2), galaxies moving apart (0.11, towards-the-universe-scales): all earlier and correctly numbered on the page.
- New terms defined here: inertia, principle of inertia, Newton's first law, mass as measure of inertia, inertial mass, equilibrium, inertial frame of reference.
- Used without introduction but harmless: "interstellar space" (explained by context), "scale of the universe" in the callout (used loosely for the size of the universe; no scale factor is needed at this level).
- Forward references (2.3 second law, 2.10, 8.286) are marked as later.

## Coverage
- §4 row 2.2 (Newton's first law: inertia; PhET forces-and-motion-basics): covered. Siyavula 2.3's first-law material (statement, inertia, ice skater/soccer ball friction, seat belts, rockets, cornering) is all covered in the page's own examples, plus equilibrium and inertial frames (beyond Siyavula, at VWO level, from MIT Ch. 11).
- Nothing important for VWO left out. The rotational condition for equilibrium is properly left to Lesson 2.10.
- PhET: the "Motion" screen of Forces and Motion: Basics is frictionless and the "Friction" screen has a friction slider starting at "None"; the instructions fit the sim (version 2.6.7 in public/phet/manifest.json).

## Where this leads
- `8.01` Lecture 4: the site's 8.01 page "Newton's laws of motion" exists for Lecture 4; same topic. Correct.
- `8.286` Lecture 5: pages "Cosmological redshift" and "Why a static universe cannot work" exist; the no-gravity, a ∝ t remark is on transcript p. 13. Correct.
- `towards: false`, correct (2.13 closes the block).

## Licensing and AI terms
- No sentence copied from Siyavula or MIT beyond the clearly marked Newton quotation ("uniform motion in a right line") and the quoted 8.286 phrase "all velocities are constant". The seat-belt sentence ("that force acts on the car, not on the passengers") paraphrases Siyavula's "a force is exerted on the car (making it slow down), but not on the passengers": an idea, rewritten; fine.
- Figures: one Plot and one VectorDiagram, both generated from formulas/data on the page. No copied figure.
- Worked examples and quiz questions are not Siyavula's (its Worked example 8 and Exercise 2.4 are about cornering, used only as a prose sentence here) and not MIT's.
- No Siyavula logo or "Everything Science" branding. The MIT chapters carry no exclusion notice.
- NASA: no insignia; phrased as "figures from NASA's page ... in the references", not "according to NASA". Fine.
- No ESO text. No forbidden source cited or used (no OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs, paywalled articles).

## Notes
- The Aristotle and two-ramp passages are the only parts of the page with no source behind them (rows 1 and 2); they are standard history, correctly hedged, but should either be narrowed or say they are a summary.
- Physics checked and correct throughout: equilibrium as translational, the ground as an approximately inertial frame, Voyager slowed slightly by the Sun, tablecloth trick explained by the short time the friction acts.
- Verdict pass-with-notes: no errors found; five warnings and three info notes.

## Resolution (2026-11-20, by the page author)
1. Aristotle sentence narrowed to "forced" motion (a pushed cart) and presented as the commonly told summary; a bracket notes that a falling stone was natural motion, a separate case. No source cited, as none of the allowed sources covers it.
2. MacTutor pointer now covers only the dates ("dates from the MacTutor biography"); "led him away from this picture" removed. The ramp passage is introduced as "an argument in Galileo's spirit, a thought experiment rather than a measurement"; the attribution of the principle of inertia to Galileo now cites MIT Sec. 7.2 explicitly.
3. "the MIT notes show that it follows from the first law" replaced by "the MIT notes (Ch. 11, Sec. 11.2.1) read the first law as a form of this principle", with MIT's own content in words (no resultant force in one inertial frame, none in the other).
4. Quiz 1 replaced by a lift rising at steady speed on one cable (tension, introduced in 2.1): cable pull equals gravity. The parachutist worked example is kept (its symbols F_air and diagram are scoped to this page, and it adds numbers and a check that 2.1 does not have); the equilibrium section now says that 2.1's balanced-forces rule is what the first law turns into "unchanged velocity", so the overlap is acknowledged.
5. Calcs `de-motu` and `inclined-planes`: origin changed to `page-own`, source now `{cite: mactutor-galileo, at: ...}` saying the date is from MacTutor, not from the MIT or Siyavula material. The `voyager-*` facts keep `later-data` and gained an `at` from the NASA page.
6. Equilibrium formula `at` now ends "(stated in words)". The rotational condition is left to Lesson 2.10, as the review suggests.
7. No change needed.
8. No change needed.

Checks: `pytest tests/calc -k newtons-first-law` 19 passed; `content:check` reports no error or warning for this page (the remaining errors are symbol meanings of other Block 2 lessons). Status set to reviewed.
