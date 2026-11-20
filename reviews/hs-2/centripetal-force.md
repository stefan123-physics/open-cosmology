---
page: content/year-0/hs-2/centripetal-force.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter9/ (read: the PDF mit8_01scs22_chapter9.pdf, Secs. 9.1 to 9.3)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter6/ (read: the PDF mit8_01scs22_chapter6.pdf, Secs. 6.1, 6.2.1, 6.4)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/eacf1c5cef0d40fb26cb75c6912b3cd8_tniGFmPQc0E.pdf (read: segment 11.1 transcript, 2 PDF pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/d9124bda94b4d7790f8d52f098d9c285_ofgusnhQ07Q.pdf (read: segment 11.2 transcript, 4 PDF pages, no printed page numbers)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/11-3-demo-rotating-bucket/ (read: page text and description; the video itself was not watched)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-03 (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read; "Last Updated: 15 November 2024")
verdict: pass-with-notes
---

# Review: Centripetal force (Lesson 2.9)

No errors found. All numbers recompute, every formula is in the cited place (or honestly marked as the page's own application of it), the claims attributed to MIT and Siyavula are in those sources, and no forbidden source is cited. The notes below are warnings and suggestions.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | info | Formulas "At the top of a vertical circle" and "Least speed at the top of a vertical circle" | Ch. 9 has no vertical circle or loop; Eq. (9.1.2) is the general radial law F_r = −m r (dθ/dt)². The MIT setting of a vertical circle is the segment 11.3 bucket demo, whose page says the balls stay in above a certain speed, "explained using Newton's second law and the physics of circular motion" | Cites Eq. (9.1.2) "applied at the top of a vertical circle (the setting is the page's own)" and "(the result is the page's own)" | Acceptable: the `at` text is honest and the physics is right (sum of the radial force components = m v²/r, with both forces inward at the top). Optionally add `seg113` as a second support for the setting, or say once in the prose that the MIT notes do not work out the loop. |
| 2 | info | First formula, `at` | Eq. (9.1.2) gives m r ω² (as a negative radial component); m v²/r needs v = rω (Ch. 6, Eq. (6.2.15)) | F_net = m v²/r = m ω² r cited to Eq. (9.1.2) "with dθ/dt = ω" | Optionally add "and v = rω, Ch. 6 Eq. (6.2.15)" to `at`. The sign (radial component negative = inward) is explained by "the inward, radial part"; fine. |
| 3 | info | Formulas "Friction at its limit" and "Top speed on a flat bend" | Example 9.6 uses μ (not μ_s), R and ω_max: μ m g = m R ω_max², ω_max = √(μg/R) | μ_s m g = m v_max²/r; v_max = √(μ_s g r) | The `at` already says "written there with ω_max; v = ωr" and "multiplied by the radius". Could add "μ there". |
| 4 | warning | Section "Over the top of a loop", bucket paragraph | Segment 11.3: balls stay in when rotated fast enough | "it is falling, but the bucket is pulled down at least as fast, so the water stays inside" | "As fast" can be read as speed. Say "the bucket is pulled down with at least the acceleration g that the water would have on its own". |
| 5 | info | "There is no centrifugal force", passenger paragraph | Siyavula Worked example 8: before the turn passengers and car share a velocity; "the driver turns the wheels of the car, which then exert a force on the car" | Same three-step story (same velocity, car is pushed and turns, passenger goes on, door pushes inwards), credited to Siyavula, in different wording | Fine. The page's "the road pushes the car's tyres sideways" is better physics than Siyavula's "the wheels exert a force on the car". No 7-word run is shared with any source (checked by script). |

## Formulas and citations
- **F_net = m v²/r = m ω² r**, cite mit, Sec. 9.1 Eq. (9.1.2): verified (F_r = −m r (dθ/dt)², radial component). The text's reference to Eqs. (9.1.3) and (9.1.4) for the tangential part and F_θ = 0 in uniform motion is correct.
- **μ_s m g = m v_max²/r**, Eq. (9.3.20): verified (μ m g = m R ω_max², Example 9.6 coin on a turntable).
- **v_max = √(μ_s g r)**, Eq. (9.3.21): verified (ω_max = √(μg/R), times R).
- **v = √(r g tan θ)**, reading3 (segment 11.2) p. 3: verified; "the square root of rg tan phi" is on PDF page 3 of 4, written with φ, as the page says. Frictionless banked turn, one speed without sliding up or down: matches the transcript.
- **F_N + m g = m v²/r** and **v = √(g r)** at the top: see Differences #1. Physics correct.
- Prose citations checked: Newton and the Moon "around 1666", first-law argument (reading1 Sec. 6.1: "In 1666, twenty years before ... Principia, he realized that the moon is always 'falling'"): verified. "Why" and "how" sides of F = ma (reading2): verified in the segment 11.1 transcript. Moon in Sec. 9.2, Eq. (9.2.1) and the sentence after it (a centripetal force towards the Earth must account for the inward acceleration): verified. Ping-pong balls in a whirled bucket (seg113): verified from the page description. Siyavula Worked example 8 (passengers in a car going round a corner, first law): verified.
- Earth's volumetric mean radius 6371.000 km (NASA Earth Fact Sheet, bulk parameters): verified. "(NASA, Earth Fact Sheet)" is a citation, not "according to NASA" phrasing.
- Notation: SI, g = 9.81 m/s², T for tension (as in lesson 2.5), period only in words: consistent. Symbol meanings in data/symbols.json scoped to this page are all correct (T = tension, θ = bank angle, μ_s, F_N, v_max, ω, F_net); `content:check` reports no error for this page.
- Claims without a source but standard and correct: extra up-stop wheels on roller coasters; real satellites a few hundred km up move a little slower and take a little longer; magnetic force at right angles to velocity gives a circle; rotation speeds far out in galaxies indicate more mass than is visible (dark matter). The last one could cite NASA's dark-matter page (as lesson 2.13 plans) but is fine as a preview.

## Arithmetic and answer checks
All recomputed independently (Python):
- Ball on string: 0.25 × 3.0²/0.50 = 4.5 N; √(20 × 0.50/0.25) = √40 = 6.32 → 6.3 m/s; ω = 6.0 rad/s; 0.25 × 36 × 0.50 = 4.5 N; at 6.0 m/s, 18 N. Correct.
- Flat bend: 0.9 × 9.81 × 50 = 441.45, √ = 21.01 m/s = 75.6 km/h (76); 0.5 × 9.81 × 50 = 245.25, √ = 15.66 m/s = 56.4 km/h (56); 1000 × 21.0²/50 = 8820 N vs 0.9 × 1000 × 9.81 = 8829 N, both 8.8 × 10³. Correct. Graph: dry curve at r = 100 m is 29.7 m/s, inside the range 0–35; point (50, 21.0) lies on the dry curve.
- Banked: √(50 × 9.81 × tan 15°) = 11.46 → 11.5 m/s = 41.3 km/h (41). Correct.
- Loop: √(9.81 × 8.0) = 8.86 → 8.9 m/s = 31.9 km/h (32); 60 × 144/8.0 = 1080 N; 60 × 9.81 = 588.6 → 589 N; 1080 − 588.6 = 491.4 → 491 N; 60 × (18 − 9.81) = 491.4. Correct; less than her weight, so "feels lighter" is right.
- Orbit: √(9.81 × 6.371 × 10⁶) = 7906 m/s → 7.91 × 10³ (summary 7.9 km/s); 2π r/v = 5063 s → 5.06 × 10³ s = 84.4 min (84); v²/r = 9.82 ≈ 9.8 m/s². Correct.
- Quiz 1: answer 1 (static friction) correct; weight is vertical, kinetic friction wrong (tyres do not slide), centrifugal force not on the car. Explanation true.
- Quiz 2: 0.40 × 16/0.80 = 8.0 N, answer 2 correct; distractors 2.0 (no square), 5.12 (× r), 20 (no mass) as explained.
- Quiz 3: answer 1 correct; explanation true (bag keeps nearly straight, door catches up and pushes inward).
- Quiz 4: √4 = 2, answer 1 correct.
- Quiz 5: √98.1 = 9.90, answer 1 correct; 3.16 (no g), 98.1 (no root), 14.0 (√(2gr)) as explained.
- Flashcards: all five true.
- Calcs file: every number on the page has an entry (incl. the 1666 fact and the 6371 km NASA fact with `origin: later-data` and `source.cite: earthfact`); every entry has `source: {cite, at}`; origins honest (page-own for the page's numbers, mit for 1666). `pytest -k centripetal`: 38 passed.

## Only earlier terms
All checked against the prerequisites and block order:
- Centripetal acceleration v²/r = ω²r, angular speed ω in rad/s, tangent, washing-machine sock: lesson 1.10 (circular-motion), which also promises the inward force m v²/r.
- Inertial frame: 2.2 (flashcard "Inertial frame of reference"). Force diagram, list of forces: 2.1. Components: 2.3 (and 0.8). Third law: 2.4. Apparent weight in a lift, weightlessness: 2.5. Static friction up to μ_s F_N, rolling tyre uses static friction, μ_s = 0.9 / 0.5 for dry / wet asphalt: 2.6 (table values 0.9 and 0.5 are there). tan of an angle: 0.7. km/h conversion: 1.2. Thrown stone falls in a curve: 1.8. Milky Way, Sun's orbit: 1.10.
- Lesson 2.8 (splitting forces on a slope) is named in the banked-bend paragraph but is not in `prerequisites`; it is earlier in the block and written (draft), and the page needs nothing from it beyond "the university lesson does it in full". Info: optionally add `inclined-planes` to `prerequisites`.
- Forward references, clearly marked as later: law of gravitation (2.11), weighing the Sun and Galaxy (2.13, written), electron / charged particle / magnetic field (Block 6, lesson 6.9 "Magnetic fields and magnetic force" in §4, not written yet by PC 2). These are previews, not used as known. "Dark matter" is explained where used.
- No term used before it is introduced.

## Coverage
- §4 row 2.9 gives only the topic (ignoring the OpenStax sources). The page covers F_net = m v²/r = m ω² r, the "job, not a force" point, string tension, flat bend with friction limit, banked bend (frictionless case), top of a vertical loop with least speed, orbit just above the ground, and the centrifugal misconception. That is VWO level and more.
- Warning: the **bottom** of a vertical circle (F_N − m g = m v²/r: a swing, the dip of a road, the bottom of a loop) and the crest of a hump (car becomes light / loses contact at √(g r)) are standard VWO exercises and are not treated. A short paragraph or a quiz question would close the gap; the top-of-loop section already has all the tools.
- Info: banked bend with friction is left out; fine at this level.
- PhET `gravity-and-orbits` as planned in §3.5; the "Try it" instructions match the sim (gravity force and velocity arrows, gravity on/off).

## Where this leads
- `leadsTo` 8.01 lecture 11: pages `newtons-second-law-circular-motion` (polar components, banked turn, rotating bucket, the Moon's month) and `circular-motion-dynamics-examples` exist; same topic, and the `why` text is accurate. Matches §4 (`8-01/newtons-second-law-circular-motion`).
- `towards: false` is right (2.13 is the block's last lesson). The cosmology callout's claims (orbits weigh the central mass; rotation speeds far out in galaxies need more mass than is seen; one of the main reasons for dark matter; the graduate year follows it, Ferreras `rotation-curves` exists) are correct.

## Licensing and AI terms
- No copied sentences: no 7-word run shared with Ch. 9, Ch. 6, the two transcripts or the Siyavula page (script check). Single quoted words ("why", "how") are attributed.
- No figures copied: the only graphic is a generated `<Plot>`; PhET via the component.
- Worked examples and quiz questions are the page's own: MIT's Ch. 9 examples are symbolic or use Moon / geosynchronous numbers; the banked-turn segment is symbolic. Quiz 3 (bag in a turning car) is close in situation to Siyavula Textbook Exercise 2.4 (passenger in a car turning right or left) but is a different object, a multiple-choice question and its own wording: info only.
- No Siyavula logo or "Everything Science" branding; Siyavula is named only as the credited source.
- MIT: none of the read files carries "All rights reserved" or "excluded from our Creative Commons license"; Ch. 6's Joni Mitchell epigraph (third-party) is not used.
- NASA: cited by page title, no insignia, no "according to NASA".
- ESO: not used.
- No forbidden source (OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs, publisher full texts) is cited or used.

## Notes
- The video of segment 11.3 was not watched; only its page description was used to check the ping-pong-ball claim.
- Segment transcripts have no printed page numbers; "p. 3" for the banked-turn result is the PDF page, which is where it is.
- `content:check` shows 3 errors in other Block 2 pages (2.11 to 2.13 symbols), none for this page.

## Resolution (2026-11-20, by the page author)

1. (info) The `at` of "At the top of a vertical circle" now says the notes do not work out a loop and names the whirled bucket of segment 11.3 (seg113) as the MIT setting.
2. (info) The first formula's `at` now adds "and v = rω from Ch. 6, Eq. (6.2.15)".
3. (info) Both Example 9.6 formulas now say MIT writes μ for μ_s.
4. (warning) Bucket sentence reworded: the bucket "is pulled down with at least the acceleration g that the water would have on its own".
5. (info) No change needed.
- Coverage warning: new section "At the bottom of a dip and over a hump" with F_N − m g = m v²/r (swing, dip in a road, bottom of a loop: you feel heavier) and m g − F_N = m v²/r (crest of a hump; the car leaves the road when v² > g r), cited to Eq. (9.1.2) with the setting marked as the page's own, plus a worked example with own numbers (30 kg child, 2.5 m chains, 4.0 m/s: seat pushes 486 N, 1.65 times her weight; hump of radius 40 m: leaves the road above 19.8 m/s, 71 km/h; 1200 kg car at 15 m/s: F_N ≈ 5.0 × 10³ N, less than half its weight) with a check step, a summary line, and eight new calcs entries (swing-*, hump-*).
- Prerequisites: `inclined-planes` added (Only earlier terms note).
- Callout: dark-matter claim now cites NASA's page (reference `nasa-dm`, "Dark Matter - NASA Science", https://science.nasa.gov/dark-matter/, fetched 2026-11-20, HTTP 200): Vera Rubin's 1970s observations of stars on the outer edges of spiral galaxies, stated in our own words and named by page title (no "according to NASA").
- Checks: `pytest -k centripetal` 46 passed; `content:check` no error for this page. Status set to reviewed.
