---
page: content/year-0/hs-3/gravitational-potential-energy.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/mechanical-energy/22-mechanical-energy-02 (read; section 22.2 "Potential energy", code ESAHK; CC BY 3.0 footer present; no OpenStax or third-party credit on the page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter14/ (read: PDF downloaded to a scratch folder outside the repo and extracted with pdftotext; no "rights reserved", "courtesy" or "excluded" notice)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/1a0af97c8db7221f47634e47e0bb3324_vKLqWj0FRyc.pdf (8.286 Lecture 6 transcript, read for the cosmology callout, transcript pp. 28–30)
  - Siyavula Gr 12 5.3 (05-work-energy-and-power-03) deliberately NOT opened: it embeds an OpenStax-credited example. The page does not cite it.
verdict: pass-with-notes
---

# Review: Gravitational potential energy

No errors found. Every formula is cited to a real place in a §2.0 source that supports it, every number was recomputed and agrees, the 39 calcs entries pass (`pytest tests/calc -k gravitational-potential`: 39 passed), every quiz answer is right, and the physics is correct. The notes below are one quiz scenario that is close to a Siyavula exercise, a quiz explanation that does not match its choice, a few calcs gaps, and citation-precision points.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Quiz 4 (hiker from a mountain hut at 1200 m down to a village at 900 m above sea level, 60 kg) | Siyavula 22.2, Textbook Exercise 22.1, question 3: a 70 kg hiker walks between huts at 800 m and 500 m and back to 200 m above sea level; asks the potential energy relative to sea level and the energy lost. | Same kind of situation (hiker, huts, heights above sea level, potential energy lost walking down), with other numbers. | Not copied, but the scenario is the source's own exercise. Change the setting (e.g. a cable car or a lift between floors of a tall building) so the quiz is clearly the page's own. |
| 2 | warning | Quiz 4 explanation | — | Choice is "$-5.3 \times 10^{5}$ J"; the explanation says the 900 m mistake "gives $5.3 \times 10^{5}$ J" (positive). | Make them agree: either the choice "+5.3 × 10⁵ J", or the explanation "gives a magnitude of 5.3 × 10⁵ J (taking the village height alone)". Also explain the −1.8 × 10⁴ J distractor (g taken as 1 or a factor 10 slip) and, in quiz 1, the 29 J distractor (3.0 × 9.81 = 29.4: the height forgotten). |
| 3 | info | `<Formula label="Work along a smooth ramp">`, cite reading1 Sec. 14.2, Eqs. (14.3)–(14.7) | MIT Sec. 14.2 compares the work of gravity along a slanted straight path (integral of −mg dy, Eq. 14.3) and an L-shaped path (Eqs. 14.4–14.7); it never uses mg sin θ × L. | W = mg sin θ × L = mgh. | The `at` honestly says what MIT shows. Optionally add "(the ramp form mg sin θ × L is derived here from lesson 2.8)". |
| 4 | info | "Potential energy is the energy an object has because of where it is" | Siyavula: "the energy an object has due to its position or state" (an object). MIT 14.4.1: the potential energy belongs to the system of Earth and object ("Choose our system to consist of the earth and the object"). | Belongs to the object. | Fine at VWO level and matches the main source. One optional bracket ("strictly it belongs to the object and the Earth together; university courses say so") would prepare the 8.01 lesson it leads to. |
| 5 | info | Notation | Siyavula writes E_P and g = 9,8 m·s⁻²; MIT writes U_g = mgy. | E_p and g = 9.81 m/s²; MIT's U appears only inside the `at` of the ΔE_p formula. | The site notation is fine. Since `leadsTo` is 8.01 Lecture 23, one sentence "MIT's notes write U = mgy" in the prose would help. |
| 6 | info | "roughly 11% less than on the ground" | — | 1 − (6371/6771)² = 11.47 %. | "about 11 %" is acceptable; "about 11.5 %" would be more exact. |
| 7 | info | Cosmology callout, "Whether its total energy is positive or negative decides whether the expansion goes on for ever or stops" | Lecture 6 transcript (pp. 28–30) introduces the conserved E and its meaning as kinetic plus (negative) potential energy of a test particle on the boundary; the classification by the sign of E is developed in Lecture 7 (the site's `expanding-sphere` page says "as Lecture 7 develops"). | Attributes the ball and the edge particle to Lecture 6 (correct); the sign rule follows without attribution. | Correct physics for a matter-only Newtonian ball. Optionally add a `leadsTo` to 8.286 Lecture 7 (`friedmann-equation`), or "(Lecture 7)" after the sign sentence. |
| 8 | info | Quiz 3 and the ramp worked example | — | Lesson 3.1 (`work`) already has a crate pushed up a smooth ramp (8.0 kg, 1.5 m, 3.0 m) with the same conclusion. | Not wrong; the repetition is reasonable since this lesson names the stored energy. Consider making the 3.3 example the staircase or a different shape of path to add something new. |

## Formulas and citations
- **W = F h = mgh** (reading1, Sec. 14.4.1, Eq. (14.3), sign reversed): correct. Eq. (14.3) is W_g = −mg(y_f − y_i); the lifting force does the opposite. The `at` says so.
- **E_p = mgh** (mit, "Gravitational potential energy … h the perpendicular height from the reference point"): correct. Siyavula 22.2 (ESAHK) gives E_P = mgh with h "the perpendicular height from the reference point". The `at` could add the section code ESAHK.
- **ΔE_p = mgh_f − mgh_i = mgΔh** (reading1, Sec. 14.4.1, Eq. (14.4), "written there ΔU = mgΔy = mgy_f − mgy_i"): correct, exactly Eq. (14.4). Equation numbers restart in Sec. 14.4, so "Sec. 14.4.1, Eq. (14.4)" is unambiguous.
- **Work along a smooth ramp** (reading1, Sec. 14.2, Eqs. (14.3)–(14.7)): Eqs. (14.3), (14.5), (14.7) give W₁ = mgy_i = W₂ for the two paths. Supports path independence (see #3).
- **E_el = ½kx²** (reading1, Sec. 14.4.2, Eq. (14.12), zero at natural length): correct; Eq. (14.11) sets U_s(0) ≡ 0 at equilibrium, (14.12) U_s(x) = ½kx².
- Inline citations: "only changes … have a physical meaning (Sec. 14.4.1)" matches MIT's "Only differences in the function U_g have a physical meaning"; "gain in potential energy is exactly minus the work done by gravity (Sec. 14.4.1, Eq. 14.4)" matches ΔU_g = −W_g; "MIT's notes compare two paths … one straight down a slant and one down and then sideways (Sec. 14.2)" matches Figure 14.2 and Eqs. (14.3)–(14.7); "E_p = −GMm/r with the zero at infinity (Sec. 14.4.3)" matches Eq. (14.16), U_G(∞) ≡ 0.
- Calcs `at` values checked: Sec. 14.3 does say the kinetic energy lost on the way up is completely recovered on the way down (ball-speed); Sec. 14.4.3 Eq. (14.13) is the inverse square force and Eq. (14.15) the change −Gm₁m₂/r_f + Gm₁m₂/r_i (exact-400km). spring-final-force cites Eq. (14.8), which is the work of the spring; acceptable.
- `references.mit8286` (Lecture 6) exists and is used in prose; the claim it supports is checked under "Where this leads".
- No forbidden source anywhere in the page or calcs file (grep for OpenStax, LibreTexts, Khan, CK-12, IOPSpark: none).

## Arithmetic and answer checks
All recomputed independently (Python, g = 9.81 m/s²):
- Quiz 1: 3.0 × 9.81 × 0.80 = 23.54 J → 24 J (choice 1, correct). Distractors: 2.4 (no g), 29.4 (no h), 240 (factor 10): all wrong.
- Quiz 2: answer 1 (only the change agrees): correct.
- Quiz 3: sin θ = 1.5/6.0 = 0.25; force ¼ of weight over 4 × the distance: equal work, answer 2 correct. "Depends on the mass" is wrong (the ratio is 1 for any mass).
- Quiz 4: 60 × 9.81 × (−300) = −1.766 × 10⁵ J → −1.8 × 10⁵ J (choice 1, correct). 60 × 9.81 × 900 = 5.30 × 10⁵ J (see #2 on its sign).
- Quiz 5: answer 1 correct; the other three are false statements.
- Box: 12 × 9.81 = 117.72 N; × 1.8 = 211.9 J → 212 J, about 210 J. Check estimate fine.
- Plant pot: 29.43 J; 147.15 J; 117.72 J; change −29.43 J both ways; direct −29.4 J; cellar −39.24 J → −39 J. All correct.
- Plot: slope 2.0 × 9.81 = 19.62 N → 19.6 N; shift 117.72 J → 118 J; the street line peaks at 176.6 J at h = 3 m, inside the range [0, 200].
- Ramp: 40 × 9.81 × 0.24 = 94.18 N; × 5.0 = 470.9 J; 392.4 × 1.2 = 470.9 J; 5.0/1.2 = 4.17 → 4.2. Correct.
- Ball: 0.50 × 9.81 × 3.2 = 15.70 J; v = √(2 × 15.70/0.50) = 7.92 m/s; v² = 62.8 m²/s². Correct, and the sign convention v_f² = v_i² − 2gΔx with Δx = −3.2 m matches lesson 1.7's formula.
- Spring: 200 × 0.10 = 20 N, average 10 N, ½ × 200 × 0.01 = 1.0 J. k = 200 N/m is lesson 2.7's toy spring (confirmed in `springs-and-hookes-law.mdx`).
- 400 km: g = 9.81 × (6371/6771)² = 8.685 → 8.7 m/s²; 11.5 % less (#6); mgh = 3.924 × 10⁶ → 3.9 × 10⁶ J; exact gRh/(R + h) = 3.692 × 10⁶ → 3.7 × 10⁶ J. Both correct; the 400 km and 6371 km values are lesson 2.11's (NASA Earth Fact Sheet and *What Is Microgravity?*).
- Calcs completeness: the 39 entries pass. Not in the calcs file: the quiz 1 distractors 29 J and 240 J, the quiz 4 distractors +1.8 × 10⁵ and −1.8 × 10⁴ J, and quiz 3's ratio 6.0/1.5 = 4 ("four times the distance"). Add them.

## Only earlier terms
All terms are introduced in earlier lessons or on this page:
- weight mg (2.5), net force zero → constant speed (2.2, 2.3), work and joule, cos 90° = 0 (3.1), work–energy theorem and E_k (3.2), mg sin θ on a slope (2.8), sin θ = opposite/hypotenuse (0.7), Hooke's law, extension, spring constant, natural length (2.7), g = GM/r², G, the space station at 400 km, R = 6371 km (2.11), satellite (2.12), equations of motion in free fall (1.7), air resistance (2.6). Lessons 2.2, 2.6 and 2.12 are not in `prerequisites` but are earlier lessons, so this is fine; adding `newtons-first-law` would match the text "(lesson 2.2)".
- New on this page and defined: potential energy, gravitational potential energy, zero (reference) level, elastic potential energy.
- "Newtonian" (callout) is not defined, but it is used the same way in lesson 2.3's callout and is self-explanatory.
- Forward references (3.4, 3.11, 3.12) are pointers only; all three are in §4 (3.4 exists; 3.11 `escape-speed` and 3.12 `towards-the-universe-expanding-ball` are planned).
- All eight `prerequisites` exist and are earlier High School lessons.

## Coverage
- §4 row: "Gravitational potential energy", no PhET. Covered: definition, E_p = mgh, zero level and only changes matter, negative E_p, path independence (ramp and stairs), friction as non-storing, the PE → KE exchange, elastic PE ½kx², and the limit of mgh far from the Earth. This is complete at VWO level.
- The term "conservative force" is never used, though the idea (work that depends only on the end points) is explained. Not required at VWO level; one sentence naming it would bridge to 8.01 Lecture 23 (info).
- §3.5 suggests `energy-skate-park-basics` also for 3.3; the page has no PhET. Optional, since 3.4 uses that sim.

## Where this leads
- 8.01 Lecture 23 → `content/year-1/8.01/potential-energy.mdx` ("Potential energy"): same topic, correct.
- 8.286 Lecture 6 → `expanding-sphere.mdx` (lecture 6): correct. The Lecture 6 transcript (pp. 28–29) confirms Guth defines E_phys = m r_i² E and identifies it as "kinetic energy plus potential energy, where the potential energy is negative, of a point particle on the boundary" of the sphere. The callout's description is accurate; the sign rule comes in Lecture 7 (#7). "Slows down" is true for this matter-only Newtonian model.
- `towards: false` is right: 3.12 is the block's last lesson.

## Licensing and AI terms
- No copied sentences. Closest: Siyavula's definition "the energy an object has due to its position or state" versus the page's "the energy an object has because of where it is, or because of its state": a reworded one-line standard definition, acceptable. Siyavula's note that "potential energy" often means the gravitational kind is reworded too.
- Worked examples are the page's own: Siyavula's are a 1 kg suitcase on a 2 m cupboard, a 1 kg brick on a 4 m roof and a 0.5 kg netball; MIT Ch. 14's worked examples (14.1–14.6: energy diagram, escape velocity of Toro, spring loop-the-loop, rough surface, cart-spring on an incline, sliding on a sphere) are not reused. Quiz 4 resembles Siyavula Exercise 22.1 Q3 in setting (#1).
- No figures: the only graph is a generated `<Plot>`. Siyavula's uncredited image is not used.
- "Siyavula 22.2" appears only as an attribution in prose, not as branding; no logo, no "Everything Science" branding.
- MIT Ch. 14 PDF has no "rights reserved", "courtesy" or "excluded" notice.
- No NASA insignia or "according to NASA" phrasing (NASA appears only in the calcs file as the source of lesson 2.11's values). No ESO text.
- No forbidden source cited or used.

## Notes
- "A mass hanging on a spring … when it moves down, its gravitational potential energy falls and the spring's elastic energy rises" holds while the spring is stretched, which is the usual case for a hanging mass; if it were compressed (above its natural length) the elastic energy would fall. Fine at this level; optionally say "while the spring is stretched".
- Quiz 5 asks for the energy to "lift" a satellite; that is ΔE_p only, not the orbital kinetic energy. The wording is correct as asked.
- Not checked: rendering, label layout, symbols and glossary (no dev server or build run, by instruction).

## Resolution (2026-11-20, by the page author)
1. Quiz 4 now uses a cable car carrying a 60 kg skier from a station at 1200 m down to one at 900 m (same numbers, no hiker or huts); the zero-level paragraph says "for a cable car in the mountains, sea level" instead of "for a hiker".
2. Quiz 4 explanation now says the 900 m mistake "gives a size of 60 × 9.81 × 900 = 5.3 × 10⁵ J" (the choice stays −5.3 × 10⁵ J as the distractor), explains +1.8 × 10⁵ J (wrong sign) and −1.8 × 10⁴ J (a factor 10 slip, 0.981 for g). Quiz 1 explanation now explains 29 J (height forgotten) and 240 J (factor 10). Calcs added: quiz-bag-no-h, quiz-bag-x10, quiz-ramp-ratio (quiz 3 now states 6.0/1.5 = 4), quiz-hiker-wrong-sign, quiz-hiker-factor-10; quiz-hiker-wrong's shown string updated. 44 calcs pass.
3. The ramp formula's `at` now adds "(the ramp form mg sin θ × L is derived here from lesson 2.8, not in MIT's notes)".
4. Added a bracket: strictly the energy belongs to the object and the Earth together; university courses say so.
5. Added "MIT's notes call the same quantity U and write it U = mgy, with y the height" after the unit paragraph.
6. Changed to "about 11.5% less"; calcs g-station-percent now expects 11.5 with 1% tolerance.
7. Added "(Lecture 7)" after the sign-of-the-energy sentence in the cosmology callout.
8. Not changed: the ramp example stays, because this lesson's point is naming the stored energy and comparing the ramp with lifting straight up; the staircase is already discussed in prose. Lesson 3.1's crate is a different set of numbers.
Notes: added "while the spring is stretched" to the hanging-mass sentence; added `newtons-first-law` to `prerequisites` (the text cites lesson 2.2); added a one-line pointer "Lesson 3.4 gives forces with this property a name" after the path-independence paragraph (3.4 introduces "conservative force" and ½kx² fully; this lesson only previews them). No PhET added (3.4 uses Energy Skate Park).
Checks: `pytest tests/calc -k gravitational-potential`: 44 passed; `npm run content:check`: 0 errors, no warning for this page. Status set to reviewed.
