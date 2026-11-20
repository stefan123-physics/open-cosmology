---
page: content/year-0/hs-1/circular-motion.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter6/ (read; PDF mit8_01scs22_chapter6.pdf downloaded to a scratch folder outside the repo and extracted with pdftotext, all of Sec. 6.1 to 6.5.1)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (read)
  - https://science.nasa.gov/sun/facts/ (read)
verdict: needs-changes
---

# Review: Circular motion (Lesson 1.10)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | calcs file, entries `moon-r`, `moon-r-m`, `moon-T`, `moon-T-s`, `moon-v-nasa`, `sun-v-kmh`, `sun-T`, `sun-v` | These values come from the NASA Moon Fact Sheet and NASA Science "Sun: Facts", not from MIT | `origin: mit` | Mark them `origin: later-data` (as the sister lesson `calcs/hs-1/towards-the-universe-light-travel-time.yaml` does for the NASA Moon value). The header comment of the calcs file already says these are NASA numbers, so the entries contradict it. |
| 2 | error | calcs file, entries `moon-v`, `moon-a`, `moon-a-period`, `moon-vs-g`, `sun-r`, `sun-a` | MIT gives only the symbolic formulas; the inputs are NASA's and the arithmetic is the page's own | `origin: mit` (and `moon-vs-g` even says "the numbers are the page's own" in its `at` while marked `mit`) | Mark them `page-own` (page's arithmetic on NASA inputs) or `later-data`; not `mit`. |
| 3 | error | quiz 3, choice "8.4 m/s" | (every number must be in the calcs file) | Distractor 8.4 m/s has no calcs entry and no stated origin (presumably 8.0 + 0.35 ≈ 8.35) | Add a calcs entry for it (and optionally mention it in the explanation: adding instead of multiplying). |
| 4 | warning | "Why the acceleration points to the centre", "Draw the two velocity arrows from the same starting point, as in lesson 0.8 on vectors. The change … is the arrow from the head of the first to the head of the second" | Lesson 0.8 teaches head-to-tail addition and subtraction as adding the negative, A − B = A + (−B); it does not teach the common-tail, head-to-head construction | Attributes the head-to-head construction to lesson 0.8 | Say "Lesson 0.8 showed how to add vectors head to tail: v₁ + Δv = v₂, so with both arrows drawn from one point Δv runs from the head of v₁ to the head of v₂." The construction itself is correct. |
| 5 | warning | "The Moon's orbit", last paragraph: "Block 2 shows how gravity … explains exactly this number" | Own check: (384 400/6371)² ≈ 3640, page's ratio g/a ≈ 3596 | "exactly" | Write "explains this number" or "explains this number to about one per cent". |
| 6 | info | calcs `rpm-to-hz` | Page: "divide by 60 to get hertz" | Formula `n * 60` with n = 1/minute gives 1 Hz, i.e. it checks 60 rpm = 1 Hz with an input named as 1 rpm; it does not visibly test "divide by 60" | Use inputs {n: 1200 1/minute}, formula `n`, expected 20 Hz, or n = 60 1/minute → 1 Hz with a clear label. |
| 7 | info | calcs `car-v` | Ch. 6 has no unit conversion | `source: {cite: mit, at: 'not in Ch. 6 …'}` | A cite to a source that does not contain the step is odd; fine if the schema needs a cite, but consider citing lesson 1.2 in words only. |
| 8 | info | "The Moon's orbit": "27.3 days, measured against the distant stars" | NASA lists "Revolution period (days) 27.3217" without the word sidereal | Sidereal reading | Correct (27.32 d is the sidereal month; the synodic period 29.53 d is listed separately); no change needed. |
| 9 | info | Cosmology callout, "the pull of everything inside the orbit" | (not in a source) | True exactly for a spherical mass distribution; for the flattened Galaxy it is an approximation | Acceptable at this level; optionally "mainly the pull of everything inside the orbit". |

## Formulas and citations
All checked against the Chapter 6 PDF:
- v = 2πr/T: Eqs. (6.4.3), (6.4.4). Correct.
- f = 1/T: Eq. (6.4.5); hertz defined just below. Correct.
- ω = Δθ/Δt: Eq. (6.2.10) defines ω ≡ dθ/dt; the page says so ("written there for a very short interval"). Correct.
- ω = 2π/T = 2πf: from (6.4.4) and (6.4.5); MIT also writes ω = 2πf in words before (6.4.8). Correct.
- v = ωr: Eq. (6.2.15), Sec. 6.2.1. Correct.
- |Δv| ≈ vΔθ: Sec. 6.4.1, Eq. (6.5.2) (MIT's numbering inside 6.4.1 is 6.5.x, as the page cites it). Correct.
- a = vω: Eq. (6.5.3). Correct.
- a = v²/r = ω²r: Eqs. (6.4.7), (6.4.6). Correct.
- a = 4π²r/T²: Eq. (6.4.9). Correct.
- F = mv²/r: Eq. (6.1.1) F_r = m a_r with (6.4.7). Correct; the page presents it as a preview of Block 2.
- Prose citations: velocity along the tangent (Sec. 6.2.1, Fig. 6.3), inward direction (Sec. 6.4.1), Newton and the falling Moon in 1666 (Sec. 6.1, p. 2). All supported.
- The statement that the velocity arrow turns through the same angle Δθ as the radius is not written out in MIT (it is implicit in Fig. 6.5); standard and correct.
- The page does not repeat MIT's slips (Sec. 6.4.1 "perpendicular to position vector v(t)"; Sec. 6.1 "50,000 light years" to the galactic centre, which is about twice the accepted ~26 000 ly).
- NASA Moon Fact Sheet: semimajor axis 0.3844 × 10⁶ km, revolution period 27.3217 d, mean orbital velocity 1.022 km/s. All quoted correctly.
- NASA Sun: Facts: "average velocity of 450,000 miles per hour (720,000 kilometers per hour)" and "about 230 million years for the Sun to make one complete trip around the Milky Way". Quoted correctly and in the page's own words, cited by title, no "according to NASA". Note that NASA's sentence is about "our solar system"; the page says "the Sun, with all its planets", which matches.

## Arithmetic and answer checks
Recomputed independently (Python):
- Clock: ω = 2π/3600 = 1.745 × 10⁻³ rad/s; v = 2.618 × 10⁻⁴ m/s; 2π × 0.15 = 0.942 m. Page correct.
- Roundabout: T = 12.57 s, ω = 0.50 rad/s, a = 5.0 m/s², ω²r = 5.0; 5.0/9.81 = 0.51 ("about half of g"); 20²/20 = 20 m/s². Correct. Force 1200 × 5.0 = 6.0 × 10³ N. Correct.
- Drum: f = 20 Hz, T = 0.050 s, ω = 125.7 rad/s, v = 31.4 m/s, a = 3948 m/s² = 3.9 × 10³, 4π²r/T² the same, a/g = 402 ("about 400"). Correct.
- Diagram 2: |v₂| = 3.002 (same length as v₁ = 3), angle 29.98° = 0.52 rad; |Δv| = 1.552 against vΔθ = 1.571 (as the caption says, "about v times the angle"). Δv = (−1.5, −0.4) points roughly in −x, towards the centre for an object at (r, 0) moving counter-clockwise. Correct.
- Diagram 1: a points from (3, 0) to the origin, v tangent. Correct.
- Moon: T = 2.359 × 10⁶ s, v = 1024 m/s, a = 2.73 × 10⁻³ m/s², g/a = 3596 ("about 3600"). Correct.
- Sun: v = 2.0 × 10⁵ m/s, T = 7.26 × 10¹⁵ s, r = 2.31 × 10²⁰ m (≈ 24 400 ly, close to the accepted ~26 000 ly, so NASA's rounded figures are used consistently), a = 1.73 × 10⁻¹⁰ m/s². Correct.
- Quiz 1: answer 1 correct; other choices wrong.
- Quiz 2: f = 0.125 Hz correct; 0.785 = 2π/8, 8.0 = T, 1.25 = decimal slip; explanation true.
- Quiz 3: 2.8 m/s correct; 23 and 0.044 come from dividing (units 1/(m·s) and m·s, so "wrong units" is true); 8.4 not in calcs (row 3).
- Quiz 4: ×4 correct.
- Quiz 5: tangent correct; explanation true (and notes the fall).
- Flashcards: all true.
- `npm`-equivalent run: `pytest tests/calc -k circular` passes (215 tests), so stored values match their formulas; the issues above are about provenance labels, not values.

## Only earlier terms
- Velocity as a vector (1.2), acceleration as rate of change of velocity (1.4), km/h to m/s (1.2), g = 9.81 (1.7), radians and θ = s/r (0.7), vectors, magnitude, head/tail (0.8), kg (0.x units): all introduced earlier.
- Head-to-head construction of Δv: not in 0.8 as claimed (row 4), though derivable from it and explained on the page.
- "tangent" (line touching a circle) is defined on the page; lesson 0.7 used "tangent" for the trigonometric function. Defined clearly, but a half-sentence noting the different meaning would help (info).
- hertz, period, frequency, angular speed, centripetal: introduced here.
- Force, Newton's second law, newton (N), mass in a force law: forward references to Block 2, each flagged as such ("Block 2 introduces…", "Block 2"). Acceptable as a preview; Lesson 2.9 (centripetal-force) is planned in §4.
- Galaxy, Milky Way, dark matter: only in the cosmology callout, explained in words.

## Coverage
- §4 row 1.10 (old sources P 6.1, 6.2; CP 6.1, 6.2): rotation angle and angular speed, uniform circular motion, centripetal acceleration. All covered at or above VWO level, plus period/frequency and the force preview.
- Not covered: non-uniform circular motion (tangential acceleration). Not needed at this level; leadsTo 8.01 Lecture 10 points to it. Banked curves and orbits belong to 2.9 and Block 2.
- PhET: none listed in §4 for 1.10, none used.

## Where this leads
- 8.01 Lecture 9 = `uniform-circular-motion` ("Uniform circular motion: centripetal acceleration, period and frequency"): same topic; the `why` is accurate.
- 8.01 Lecture 10 = `circular-motion-acceleration` (tangential and angular acceleration): accurate.
- `towards: false` is right; 1.11 is the block's last lesson.
- Cosmology callout: the dark-matter wording is properly hedged and correct: flat/high rotation speeds far from galaxy centres, "most astronomers take this as one of the main signs", composition unknown, modified-gravity alternatives mentioned as being tested "at such tiny accelerations" (fitting, since the Sun's 1.7 × 10⁻¹⁰ m/s² is of the order of the MOND scale). 8.902 and Ferreras exist in `content/year-5/`. Only nuance: row 9.

## Licensing and AI terms
- No copied sentences found; closest overlaps are standard phrases ("uniform circular motion", "centripetal … centre-seeking"). MIT's "the moon is always 'falling'" is rephrased.
- All three diagrams (two VectorDiagrams, one Plot) are generated; MIT's Figs. 6.4/6.5 are not copied. The Joni Mitchell epigraph (third-party) is not used.
- Worked examples (clock, roundabout, drum, Moon) and quiz questions are original; MIT's Chapter 6 examples are symbolic (Examples 6.1–6.4).
- The Chapter 6 PDF has no "rights reserved", "courtesy" or "excluded from our Creative Commons license" notice.
- NASA: cited by title, no insignia, no "according to NASA" phrasing.
- No ESO text, no Siyavula branding, no forbidden source cited or opened.

## Notes
- Fixing rows 1 to 3 is enough to reach pass-with-notes; rows 4 and 5 are small wording changes.
- Other blocks rely on this lesson for v, r, T, f, ω, v = ωr, a = v²/r = ω²r and the inward force mv²/r: all are given, cited and correct.

## Resolution (2026-11-20, by the page author)
1. Calcs `moon-r`, `moon-r-m`, `moon-T`, `moon-T-s`, `moon-v-nasa`, `sun-v-kmh`, `sun-T`, `sun-v` now `origin: later-data`, each citing its NASA reference key (`moonfact` / `sunfacts`).
2. Calcs `moon-v`, `moon-a`, `moon-a-period`, `moon-vs-g`, `sun-r`, `sun-a` now `origin: page-own`; their `at` says MIT gives the formula and the arithmetic on the NASA values is the page's own.
3. Added calcs entry `quiz-wheel-wrong-add` (8.0 + 0.35 ≈ 8.4); quiz 3's explanation now names the adding slip ("$8.0 + 0.35 \approx 8.4$").
4. Rewritten: "Lesson 0.8 added vectors head to tail. The first velocity plus the change gives the second, v₁ + Δv = v₂, so if you draw the two velocity arrows from the same starting point, Δv is the arrow from the head of the first to the head of the second." The construction is now explained here, not attributed to 0.8.
5. "explains exactly this number" → "explains about this number".
6. `rpm-to-hz` now tests the division visibly: inputs {rpm: 1200}, formula `rpm / 60`, expected 20 (Hz).
7. `car-v` keeps `cite: mit` (the schema needs a key) but its `at` now says honestly: not in the source; the km/h to m/s conversion is the page's own, taught in lesson 1.2.
8. No change needed (27.3 d is the sidereal period).
9. Callout now says "mainly the pull of everything inside the orbit". Also added the half-sentence from "Only earlier terms": the tangent is "a line here, not the tangent of an angle from lesson 0.7".

Checks: `pytest tests/calc -k circular-motion` 161 passed; `npm run content:check` 0 errors, no warnings for this page.
