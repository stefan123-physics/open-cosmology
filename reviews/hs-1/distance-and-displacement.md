---
page: content/year-0/hs-1/distance-and-displacement.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-02 (read; CC BY footer present, listed CCBY in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-01 (read; CC BY footer present, listed CCBY)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/vectors-in-two-dimensions/01-vectors-in-two-dimensions-02 (read; CC BY footer present, listed CCBY)
verdict: pass-with-notes
---

# Review: Distance and displacement

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Formula "Displacement in one dimension" | 21.2, "Displacement and distance": $\Delta \vec{x} = \vec{x}_f - \vec{x}_i$, with vector arrows | $\Delta x = x_f - x_i$, no arrows (a signed one-dimensional component) | Add one bracketed sentence: the source writes it with arrows, $\Delta\vec x$; in one dimension the signed number $\Delta x$ carries the same information. The page already says the sign gives the direction, so this is a notation note only. |
| 2 | warning | Formula "Size and direction of a displacement in a plane", the sentence under it, and flashcard 5 | 1.2 Worked example 11 and Textbook Exercise 1.5: $\tan\alpha$ = opposite/adjacent with the sizes of the sides, then the angle is corrected for the quadrant (e.g. 180° − 20.79° = 159.21° when the x-part is negative) | "$\tan\theta = \Delta y/\Delta x$ … $\theta$ is the angle measured from the positive $x$-axis", with no word about the quadrant | Add "check the quadrant from the signs of $\Delta x$ and $\Delta y$" (as lesson 0.8's own flashcard does). As written, $\Delta x<0$ gives a wrong angle from $\tan^{-1}$. |
| 3 | warning | Quiz 3 explanation | 21.2 writes positions as vectors, $\vec x_i$, $\vec x_f$ | The body calls a position "simply a number with a unit" and only calls displacement a vector; the quiz explanation then says position is a vector | Say once in "Position needs a reference point" that a position, with its sign (in 1D) or direction, is also a vector (from the origin to the object), or change the explanation to rest only on distance being a scalar. |
| 4 | warning | Calcs file | Every number on the page must be in the calcs file | "With the library as the origin, the bus stop is at $x = -150$ m" has no entry | Add an entry (0 − 150 = −150 m, page-own). |
| 5 | info | "Distance … never negative" | 21.2 table: distance "always positive" | "never negative" | None; the page is more correct (zero distance when nothing moves). |
| 6 | info | Calcs `noor-distance` | Grade 11 §1.2 "The resultant vector" is about resultants, not path length | Path length 0.90 + 0.40 cited to reading2 | Cite `mit`, "Sec. 21.2, Displacement and distance" (distance = path length); the resultant entries stay with reading2. |
| 7 | info | Calcs `half-lap-distance`, `full-lap-distance` | 21.2 defines distance as path length but has no circle or circumference | Cited to 21.2 | Acceptable (21.2 covers "distance = length of path"); the circumference $2\pi r$ itself comes from lesson 0.7. Optionally mention it in the `at`. |

## Formulas and citations
- $\Delta x = x_f - x_i$, `cite="mit"` at "Sec. 21.2, Displacement and distance": the section exists under that heading and gives $\Delta\vec x = \vec x_f - \vec x_i$, plus the Δ = final minus initial box. Correct place, same physics; notation difference see #1.
- $|\Delta\vec r| = \sqrt{\Delta x^2+\Delta y^2}$, $\tan\theta = \Delta y/\Delta x$, `cite="reading2"` at "Sec. 1.2, Algebraic methods, Worked examples 10 and 11": both worked examples exist in that subsection (Pythagoras for the size, $\tan\alpha$ for the angle from the $+x$ axis). The source works with forces but says at the top of §1.2 that the method applies to displacements too, so the use is supported. Quadrant caveat missing (#2).
- reading1 (21.1 Introduction) supports the opening paragraph (position/displacement, speed/velocity, acceleration as the three features of motion). It is not cited by any Formula, which is fine.
- All three sources are Siyavula online pages in §2.0, each with the CC BY footer and each listed `CCBY` in docs/siyavula-licences.tsv. No forbidden source is cited or named.
- Claims checked as standard and correct: distance never decreases; $|\Delta x| \le$ distance with equality only for straight-line motion without turning back; displacement independent of origin, sign flips with the positive direction; displacements add as vectors; velocity = displacement/time (next lesson).

## Arithmetic and answer checks
Recomputed independently:
- Library/park: 150 − (−60) = 210 m; park from library −60 − 150 = −210 m; bus stop from library −150 m (no calcs entry, #4). Correct.
- Round trip 150 + 150 = 300 m, Δx = 0. Correct.
- Mila: distance 470 m; $x_f$ = 350 − 120 = +230 m; from the postbox origin −120 − (−350) = +230 m; west positive −230 m. Correct.
- Circle R = 35.0 m: πR = 109.96 → 110 m; 2R = 70.0 m; 2πR = 219.9 → 220 m. Correct to 3 s.f.
- Noor: 1.3 km; √(0.81 + 0.16) = 0.9849 → 0.98 km; tan⁻¹(0.40/0.90) = 23.96° → 24° north of east. Correct. The VectorDiagram (9, 0) and (0, 4) is the 0.90/0.40 km walk to scale.
- Quiz 1: 11 km and +5.0 km north (answer 0). The other choices are wrong. Correct.
- Quiz 2: −2.5 − 4.0 = −6.5 m (answer 0). Others wrong. Correct.
- Quiz 3: distance is the scalar (answer 2). Correct; see #3 on the explanation.
- Quiz 4: 4 × 25 = 100 m, displacement 0 (answer 0). Correct.
- Quiz 5: −40 m (answer 1). Correct; choice 4 rightly wrong.
- Flashcards: all true; flashcard 5 lacks the quadrant caveat (#2).
- Calcs file: every entry has `source: {cite, at}`, every entry is marked "(the numbers are the page's own)" and `origin: page-own`, which is honest: none of the numbers come from Siyavula (its examples use 300 m, 400 m, 500 m, 40 N/30 N, etc.). The cited sections cover the method in each case, except #6 (better section exists) and #7 (circumference from lesson 0.7).

## Only earlier terms
- Scalar, vector, displacement as a word, components, resultant, head-to-tail, $\vec A$ notation: lesson 0.8 (`introducing-vectors`, a prerequisite). Page refers to "lesson 0.8" correctly.
- Circumference $2\pi r$ and $\tan$ / $\tan^{-1}$: lesson 0.7 (`angles-and-trigonometry`), earlier in the block order but not in `prerequisites`. Info: consider adding it, since the circle example and the angle step rely on it.
- Pythagoras: used in 0.8. Metre and km: 0.2 (`units-and-si`). Number line / axis: 0.5 (`graphs-and-slope`).
- Δ, origin, frame of reference, position, distance, displacement: introduced on this page before use.
- "Velocity" and "speed" are mentioned forward-looking only ("In the next lesson…", "which you probably know already"); fine.
- "Expanding universe" in the cosmology callout is a forward pointer; fine for a callout.
- No term used before it is introduced.

## Coverage
- §4 row 1.1: distance and displacement, no PhET. The page covers reference point/origin, positive direction, frame of reference, position with sign, distance, displacement, Δ notation, sign conventions, the distance/displacement table, and 2D displacement. That matches Siyavula 21.2 and goes a bit further (2D, from Grade 11 §1.2), at VWO level.
- Left out: Siyavula's train/platform example of two frames that see different motion (relative motion). It belongs to lesson 1.9 (relative velocity), so this does not matter here.

## Where this leads
- `leadsTo` 8.01 lecture 1 = `content/year-1/8.01/position-and-velocity-1d.mdx` ("Position and velocity in one dimension"), the same topic and the §4 row's target. Correct.
- `towards: false`, correct (1.11 is the block's last lesson). The cosmology callout is accurate: origin at us is a convention; in a homogeneous expansion the pattern of recession looks the same from every galaxy.

## Licensing and AI terms
- No copied sentences found. Closest phrases: page "Distance is the total length of the route" vs source "Distance is the total length of the path taken…" (a standard definition, short); "as the crow flies" (idiom, used by both); Δ "means 'change in' and always stands for final value minus initial value" vs source "used … to indicate a change in a certain quantity, or a final value minus an initial value" (standard phrase). The opening "where an object is, how fast it moves and where to, and how quickly that changes" follows the structure of 21.1's three-item list but in different, shorter words. All acceptable.
- Worked examples and quiz questions are the page's own. The street example (origin, positive direction, positions on either side) is the same kind as Siyavula's Kosma/Kevin/school/shop street but with different places and numbers; the "walk out and back, zero displacement" idea also appears in Siyavula's Kevin example and Exercise 21.2 Q2 (front door to street and back), but this is the standard textbook illustration and the page's numbers and setting differ. Not copied.
- No figure copied: the only diagram is a generated `<VectorDiagram>` from the example's numbers.
- No Siyavula logo, no "Everything Science" branding; Siyavula is named only in source titles.
- No MIT, NASA or ESO material used; no forbidden source cited or read.

## Notes
- Verdict pass-with-notes: no errors found; four warnings (#1–#4) worth fixing before `status: reviewed`.
- I did not run `content:check` or `calc:test`; the arithmetic above was recomputed by hand and in Python.

## Resolution (2026-11-20, by the coordinator)

- 1: a bracket after the 1D formula now says Siyavula writes the vector arrows and that the lesson drops them in one dimension, where the sign carries the direction.
- 2: the 2D section and flashcard 5 now say to check the quadrant (add 180° when Δx is negative), as in lesson 0.8.
- 3: quiz 3's explanation no longer calls position a vector in one dimension; it says position needs a sign and is an arrow from the origin in more dimensions.
- 4: new calcs entry `library-origin` (x = −150 m).
- Info: `angles-and-trigonometry` added to the prerequisites. The `noor-distance` citation is left as is (honest, own numbers).
