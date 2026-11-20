---
page: content/year-0/hs-1/relative-velocity.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-02 (read; "Creative Commons Attribution License" footer, CCBY in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/vectors-in-two-dimensions/01-vectors-in-two-dimensions-02 (read; CC BY footer, CCBY in the tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/sound/10-sound-02 (read; CC BY footer, CCBY in the tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter11.pdf (read in full; no "rights reserved", "courtesy" or "excluded" notice)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/0efbf1fe4a90766cdfdad43223aabe25_MIT8_286F13_lec04.pdf (read, slide 1 only; slide 3 carries "© Source unknown. All rights reserved" and is not used by the page)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9b67a2c6895709ae6d74037a4e82ec24_wuPEmfon9lg.pdf (read, printed pp. 15–18)
verdict: pass-with-notes
---

# Review: Relative velocity

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Galilean relativity", 2nd paragraph (and flashcard 5) | MIT Ch. 11, 11.2.1: the principle of relativity holds between "relatively inertial reference frames"; the reinterpretation starts from frames in which Newton's first law holds | "the laws of physics look the same in every frame of reference that moves at constant velocity relative to another" | As written, any two accelerating frames moving together satisfy "constant velocity relative to another". Say "relative to the ground (or to any other frame in which the laws hold)"; the next paragraph about braking trains then follows naturally. The word "inertial" need not be introduced yet (Block 2). |
| 2 | warning | "Galilean relativity", 1st paragraph | No source on the page covers Galileo | "Galileo argued that there is not [a true frame at rest] ... he wrote, and watch drops fall from a bottle, fish swim in a bowl, a ball being thrown" | The account is correct general history (Salviati's "great ship" passage, *Dialogue Concerning the Two Chief World Systems*, 1632, Second Day: flies, butterflies, fish in a bowl, a bottle dripping into a vessel, throwing things to a friend), but it is uncited and the source of the details is not named. Name the work and year in the text, and add a reference from an allowed source (e.g. MacTutor's Galileo biography, or the 8.033 Lecture 2 page, which names Galileo for frames). Small overstatement: Galileo argued that uniform motion cannot be detected from inside the cabin; "there is no true frame at rest" is the later, general reading. Consider "Galileo argued that you cannot tell". |
| 3 | warning | Formula "Resultant of two perpendicular velocities", `at="Sec. 1.2, Magnitude of the resultant of vectors at right angles"` | Siyavula 1.2: Pythagoras is in "Magnitude of the resultant of vectors at right angles" (Worked example 4) and "Algebraic methods" (Worked example 10); the direction by tan α = opposite/adjacent is under "Algebraic methods → Direction", Worked example 11 | Cites only the magnitude subsection for both halves; θ in tan θ = v_y/v_x is never defined on the page | Change `at` to "Sec. 1.2, Magnitude of the resultant of vectors at right angles (Pythagoras) and Algebraic methods, Worked example 11 (direction)". Add "where θ is the angle with the x-axis", because the boat example right after measures the angle from north (tan α = v_x/v_y). |
| 4 | info | Formula "Relative velocities as vectors", `at="Sec. 11.3, Eq. (11.3.2) and Example 11.1"` | Example 11.1 is in Sec. 11.4 (Worked Examples) | "Sec. 11.3 ... and Example 11.1" | "Sec. 11.3, Eq. (11.3.2), and Sec. 11.4, Example 11.1". |
| 5 | info | "Every velocity is relative", train example; definition of frame of reference | Siyavula 21.2: "a boy is standing still inside a train as it pulls out of a station ... According to the boy, and his frame of reference (the train), he is not moving"; "A frame of reference is a reference point combined with a set of directions." | Girl standing in the aisle of a train pulling out of a station; "A frame of reference is a reference point (the origin) together with a set of directions" | A rewritten version of the cited (CC BY) source's illustration and a near-standard one-line definition; allowed with the attribution the page gives. Not a worked example. No change needed; optionally vary the situation further. |
| 6 | info | Cosmology callout | Guth slide 1: v = Hr | v = H d, and the observer subscript O in $v_{OA}$ | Lesson 0.11 already uses d "(Guth writes r)"; fine. The letter O ("us") in $v_{OA}$ is not named; write "we (O) have $v_{OA}$ = …". |
| 7 | info | Listener paragraph | Lesson 5.6 writes $v_s$ for the speed of the *source* | $v_S$ for the velocity of the *sound* | Same letter, different meaning, in the lesson the paragraph points to. Consider $v_{\text{sound}}$ or another letter. |

## Formulas and citations
- Velocity of A relative to B, $v_{AB} = v_A - v_B$, `reading1` Sec. 11.3 Eq. (11.3.2): correct. MIT: $\vec v\,' = \vec v - \vec V$ with $\vec V$ the velocity of the moving frame; with B's frame as S′ this is the page's formula, as the `at` explains.
- $v_{BA} = -v_{AB}$: follows from (11.3.2) with A and B swapped; the `at` says so. Correct.
- Chain rule $v_{AC} = v_{AB} + v_{BC}$, "(11.3.2) rearranged to v = v′ + V": correct (A = object, B = moving frame, C = ground). The derivation line on the page is right.
- Vector forms: correct; see finding 4 for the section number.
- Pythagoras / tangent, `reading2`: supported by Siyavula Gr 11 1.2 (Worked examples 4, 10, 11); see finding 3.
- Hubble's law, `guth4` slide 1: correct slide; slide 1 has no notice.
- `guth4t` pp. 16–17 (printed footers checked): Guth changes frame by "add[ing] to each velocity a fixed velocity" (Galilean transformation) and concludes the pattern looks the same from galaxy B, "no way to measure absolute velocity". The callout's paraphrase ("Guth makes this argument in 8.286 Lecture 4, changing frames with the same rule as this lesson") is accurate.
- `siy-sound` Table 10.1: 343 m/s at 20 °C, 331 at 0 °C; text: 341 m/s at 21 °C. "About 340 m/s at room temperature" is supported.
- `source` (Siyavula 21.2) supports the frame-of-reference section and "different frames ... the physical results will be the same"; it has no relative-velocity rule, which comes from MIT Ch. 11 (fine; both are cited).
- Claims checked as standard and correct: acceleration is the same in frames moving at constant relative velocity (MIT Eq. 11.2.3 gives A = 0 between them); keys dropped in a uniformly moving train land below the hand (the air moves with the train, so no drag issue); light's speed is the same for all observers and Einstein (1905, MIT Ch. 11 footnote 1) kept the principle of relativity; "a few per cent of c" threshold (at 3 % of c, γ − 1 ≈ 0.05 %); at 100–200 Mpc the recession speeds (2–5 % of c) the callout's bracket is a reasonable caveat.

## Arithmetic and answer checks
`npm run calc:test -- -k relative-velocity`: 49 passed. Recomputed independently:
- Motorway: 32 − 25 = 7.0 m/s; 35/7.0 = 5.0 s; −28 − 32 = −60 m/s = 216 km/h (> 200); 32 + 28 = 60. Correct.
- Train: −1.5 + 22.0 = 20.5 m/s; 1.5 + 22.0 = 23.5 m/s. Correct.
- Listener: 340 + 5.0 = 345; 340 − (−5.0) = 345. Correct.
- Boat: √18.25 = 4.272 ≈ 4.3 m/s; atan(1.5/4.0) = 20.56° ≈ 21°; 80/4.0 = 20 s; 1.5 × 20 = 30 m; √(30² + 80²) = 85.44 ≈ 85 m; 85.44/20 = 4.27 ≈ 4.3. Correct. Diagram vectors (0, 4) and (1.5, 0) from (0, 4) sum to (1.5, 4); caption matches.
- Plane: asin(20/75) = 15.47° ≈ 15°; √5225 = 72.28 ≈ 72 m/s; √(72.3² + 20²) = 75.02 ≈ 75. Correct.
- Callout: 70 × 100 = 7000, 70 × 200 = 14 000, 14 000 − 7000 = 7000, 0 − 7000 = −7000 km/s. Correct; H = 70 is the round example value in calcs/values.yaml.
- Quiz 1: index 1 (7.0 m/s east) correct; 43, 7.0 west and 0 wrong. Quiz 2: index 1 (−4.0) correct. Quiz 3: index 2 (drifts downstream at 0.30) correct; 2.7 and 0.30 upstream wrong; "stays in place" wrong. Quiz 4: √6724 = 82 exactly, index 2 correct; 62, 80, 98 wrong. Quiz 5: index 0 correct; the others wrong. All explanations true.
- Flashcards: all five true (flashcard 5 inherits finding 1's wording).
- Calcs file notes (info): every page number has an entry with `source: {cite, at}` and `origin: page-own` where it is the page's own. Two entries to tidy: `oncoming-kmh` cites `mit` (Siyavula 21.2) for a km/h conversion that 21.2 does not contain; cite lesson 1.2's or 0.2's conversion instead, or `reading1` with a plain "unit conversion" note. `speed-of-sound` is marked `origin: later-data`, but 340 m/s is the cited source's own value (Table 10.1, rounded); other High School calcs mark a value taken from the cited Siyavula page as `origin: mit` (e.g. calcs/hs-1/free-fall.yaml, 9,8 m/s²). Use that.

## Only earlier terms
- frame of reference, origin, positive direction: lesson 1.1 (distance-and-displacement); signed velocity: lesson 1.2; acceleration: lesson 1.4; vector, resultant, head to tail, components, Pythagoras, subtracting vectors: lesson 0.8 (introducing-vectors); sin, tan: lesson 0.6 (angles-and-trigonometry, earlier in block order though not in `prerequisites`); km/h conversion: lesson 0.2; speedometer: lesson 0.10; Hubble's law, megaparsec, H = 70, homogeneous expansion, speed of light: lesson 0.11 (earlier in block order, not in `prerequisites`).
- Doppler effect (lesson 5.6) and the speed of sound: a forward pointer and an everyday fact; the lesson needs only "sound moves through air at about 340 m/s". Fine.
- Galilean relativity, principle of relativity, special relativity: introduced on this page.
- "laws of physics": used loosely before Newton's laws (Block 2); acceptable at this level, see finding 1.
- O in $v_{OA}$: used without being named (finding 6).

## Coverage
- §4 row 1.9: "Relative velocity", no PhET sim, leads to `8-01/relative-velocity-and-recoil` and `8-033/symmetry-galilean-invariance`. The page covers relative velocity in one dimension (same and opposite directions, swapping, chaining), in two dimensions (river crossing, aiming upstream, plane in a crosswind with heading and ground speed), Galilean relativity and the limit at high speed. This is the full content expected at VWO level (relative motion is a context topic there, not a core exam formula). Nothing important is missing; aiming upstream to land straight opposite is described only in words, but the plane example does the same calculation.

## Where this leads
- 8.01 Lecture 18 (relative-velocity-and-recoil): exists, same topic (v − V, recoil with a speed relative to a cart). Correct.
- 8.033 Lecture 2 (symmetry-galilean-invariance): exists, Galilean transformation and invariance, Galileo named. Correct.
- `towards: false`: correct; Block 1's last lesson is 1.11. The cosmology callout's claims (no centre; every galaxy sees the same Hubble law under a Galilean change of frame) match Guth's transcript pp. 16–17.

## Licensing and AI terms
- No copied sentences found. Closest: the frame-of-reference definition and the train illustration (finding 5), both rewritten from a CC BY source that is credited.
- Figures: one VectorDiagram, generated from numbers. No source figure used.
- Worked examples and quiz questions are the page's own: MIT Example 11.1 (planes NE 160 m/s and SE 200 m/s), 11.2 and 11.3 are not reused; Siyavula 1.2's examples are forces (40 N and 30 N etc.), not velocities.
- No Siyavula logo or "Everything Science" branding. MIT Ch. 11 has no excluded material; 8.286 slide 1 is free of notices, and the excluded slide 3 is not used.
- No NASA or ESO material. No forbidden source cited or read.

## Notes
- No errors found. Findings 1–3 are worth fixing before `status: reviewed`.
- The MIT Ch. 11 PDF's footer reads "8.01 Classical Mechanics, Spring 2022" although it is hosted under 8.01SC Fall 2016; the page's title "MIT 8.01SC Course Notes, Chapter 11" is how the site names it elsewhere. Info only.
- Not checked: `content:check` symbol meanings for $v_{AB}$, $v_{OA}$, β, α on this page (the page author's build check covers them).

## Resolution (2026-11-20, by the page author)
1. Galilean relativity now reads "every frame of reference that moves at constant velocity relative to the ground (or to any other frame in which those laws hold)", in the text and in flashcard 5.
2. The Galileo paragraph names the *Dialogue Concerning the Two Chief World Systems* (1632), cites a new reference `mactutor-galileo` (MacTutor biography of Galileo, allowed source), and now says Galileo argued "you could never tell" which frame is at rest, instead of "there is not".
3. The perpendicular-velocities `at` now names "Magnitude of the resultant of vectors at right angles (Pythagoras) and Algebraic methods, Worked example 11 (direction)"; a sentence after the formula defines θ as the angle with the x-axis and notes that the boat example measures from north (tangent v_x/v_y).
4. `at` changed to "Sec. 11.3, Eq. (11.3.2), and Sec. 11.4, Example 11.1".
5. No change (rewritten illustration and standard definition from the credited CC BY source).
6. The callout now says "we (O, our galaxy) have v_OA = …".
7. The sound's velocity is now $v_{\text{sound}}$ (no clash with lesson 5.6's v_s). The old symbol entry `v-S` must be removed and a new `v-sound` entry added (left for the coordinator; data/symbols.json not edited here).
Calcs: `oncoming-kmh` now cites `reading1` with an honest note (plain unit conversion, not in the source); `speed-of-sound` is now `origin: mit` (the cited Siyavula table's value, rounded).
