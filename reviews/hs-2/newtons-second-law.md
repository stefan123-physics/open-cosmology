---
page: content/year-0/hs-2/newtons-second-law.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-03 (read; CC BY 3.0 footer present, listed CCBY in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-04 (read; CC BY 3.0 footer)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-02 (read; CC BY 3.0 footer)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter7/ (read: PDF downloaded to a scratch folder and extracted; no "rights reserved" or "courtesy" notice)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/skills-for-science/01-skills-for-science-03 (read, to check a suggested fix only; not cited by this page)
  - https://physics.nist.gov/cgi-bin/cuu/Value?gn (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (read)
verdict: needs-changes
---

# Review: Newton's second law

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | `<Formula label="The newton">`, `cite="reading3"` | Siyavula Gr 11 2.2 Force says only "The unit of force in the international system of units (S.I. units) is the newton (symbol N)". It never gives N in base units. MIT Ch. 7 does not define the newton unit either. | `1 N = 1 kg × 1 m/s² = 1 kg·m/s²` cited to reading3 at "Sec. 2.2, What is a force? (... its value in base units follows from F_net = m a)" | Cite the Siyavula Gr 10 page "1.3 Units", heading "Combinations of SI base units": "the newton (N) is another name for the kilogram metre per second squared" and Table 1.2, kg·m·s⁻². Lesson 2.1 already cites it as `si-units`. Add it as a reference and cite it. |
| 2 | warning | Weight section, `\vec W = m\,\vec g`, and `W` throughout (summary, flashcards, quiz 5, "What F = ma does not say") | Siyavula writes the weight as `\vec F_g = m\vec g`. Its 2.3 page (object on an inclined plane) advises using F_g, not W, for weight. Lesson 2.1 (`what-is-a-force`) uses `F_g = m g` and labels weight `\vec F_g` in its free-body diagrams. | Uses `\vec W` and `W`, and notes "(written there as F_g = m g)" | Use `F_g` as lesson 2.1 does, so that one block uses one symbol for weight. Otherwise say plainly that W and F_g are the same thing and give a reason for switching. Leaving it as is gives a beginner two symbols for one force in consecutive lessons. |
| 3 | warning | "Weight: mass and gravity", the mass and weight bullets and the "I weigh 60 kilograms" paragraph | Lesson 2.1 already has a "Mass is not weight" callout with the same everyday example ("I weigh 60 kilos") and the same two definitions. | Defines mass and weight again from the start, with the same example | Shorten to a reference back to lesson 2.1. Keep what is new here: W = m g derived from the second law, the Moon numbers and the bathroom scales. |
| 4 | warning | "The newton", the paragraph after the formula: "the weight of an object of 100 g ... about one newton. Holding a small apple ..." | Lesson 2.1, "The newton", already gives a small apple of 0.10 kg as about 1 N, and its flashcard and quiz already define 1 N as the force that gives 1 kg an acceleration of 1 m/s². | Repeats the apple illustration and introduces the newton as if new, saying only that "lesson 0.2 named" it | Refer back to lesson 2.1 ("Lesson 2.1 gave 1 N = 1 kg·m/s²; the second law shows why") and drop the repeated apple. |
| 5 | warning | "Force, mass and acceleration", first paragraph | Lesson 2.1 defines the resultant (net) force as the vector sum of all forces (and Siyavula 2.2 says the same). | Defines the net force again and points to lesson 0.8, not to lesson 2.1 | Point to lesson 2.1, where the net force is defined, instead of defining it again. |
| 6 | warning | Cosmology callout: "The university cosmology course first derives the equation for the expansion of the universe in exactly this Newtonian way, and only later from general relativity." | (No cited source.) 8.286 derives the Friedmann equation the Newtonian way and later states the general-relativity form and geometry. A full derivation from Einstein's equations comes in 8.962 (Year V), not in "the" cosmology course. This is uncertain and depends on how "derives" is read. | Claims a derivation from general relativity in the same course | Reword, for example: "...first derives ... in this Newtonian way; general relativity, met later, gives the same equation." |
| 7 | info | Friction gloss "(a force of the ground that opposes sliding, lesson 2.6)" and tension gloss "(Lesson 2.5 calls the pull of a rope its tension.)" | Lesson 2.1 already introduces friction and tension, with short definitions. | Glosses point only forward | Both glosses are correct and short enough. They could also say "lesson 2.1". The third-law preview in the boxes example ("an equal and opposite push: Newton's third law, lesson 2.4") is a fair one-line gloss. |
| 8 | info | Quiz 3 (sledge pulled at 60°) | Siyavula Worked example 12, "Man pulling a box", has 150 N at 60° to the horizontal on a 20 kg box with friction, and uses the horizontal component 75 N. | 40 N at 60° on 5.0 kg with no friction | The numbers are the page's own, but the same 60° angle (cos 60° = 0.5) makes it look like the source's example. Consider another angle, for example 30° (34.6 N gives 6.9 m/s²) or 37°. |

## Formulas and citations
- `\vec F_{\text{net}} = m\,\vec a`, cite `mit` (Siyavula 2.3): correct. The definition box ("If a resultant force acts on a body, it will cause the body to accelerate in the direction of the resultant force", followed by proportional to the resultant force and inversely proportional to the mass) and the vector form F⃗_net = m a⃗ are both on the page. The page's statement in words is a standard paraphrase, not a copy.
- The claim that MIT gives the law as Eq. (7.3.5) and calls it the equation of motion is verified: Ch. 7 PDF, Sec. 7.3, "F = ma . (7.3.5)", and "Eq. (7.3.5) is known as the equation of motion".
- Mass calibration (reading 1, Sec. 7.1.1) is verified: MIT gives m_in/m_s = a_s/a_in (its Eqs. 1.7 to 1.9; the notes print these numbers in place of 7.1.x). "The one that accelerates half as much has twice the mass" is correct. The readings `location` also names Eq. (7.1.1), which exists (F ≡ m_s a).
- The newton, cite reading3: **unsupported** (row 1).
- `\vec W = m\,\vec g`, cite reading2 (Siyavula 2.4, Weight and mass): the source has `\vec F_g = m\vec g`. The page states the change of symbol, but see row 2.
- The second law in components, cite `mit`: supported. Siyavula 2.3 says the law "should be applied to the y- and x-directions separately".
- References: NIST g_n = 9.806 65 m s⁻² (exact), confirmed. NASA Moon Fact Sheet surface gravity 1.62 m/s², confirmed. The page cites NASA by title only, with no insignia and no "according to NASA".
- No forbidden source is cited or referred to. The OpenStax entries in the §4 row are not used.

## Arithmetic and answer checks
I recomputed every number independently. All are correct:
- Table: 4/2 = 2, 8/2 = 4, 4/4 = 1. Plot caption: 6/2 = 3, 6/4 = 1.5. The plot range 0 to 20 holds F/m at the corner F = 10, m = 0.5.
- 0.100 × 9.81 = 0.981 ≈ 0.98 N.
- Sledge: 60 − 18 = 42 N; 42/12 = 3.5 m/s²; v = 7.0 m/s; Δx = ½·3.5·4 = 7.0 m; average-velocity check 3.5 × 2.0 = 7.0 m.
- Car: a = −400/80 = −5.0 m/s²; F = −7.5 × 10³ N; Δt = 4.0 s; ½·20·4 = 40 m.
- Weight: 60 × 9.81 = 588.6 ≈ 589 N; 60 × 1.62 = 97.2 N; 97.2/9.81 = 9.908 ≈ 9.91 kg. Flashcard "about six times smaller": 9.81/1.62 = 6.06.
- Bucket: 8 × 9.81 = 78.5 ≈ 78 N; 8 × 11.31 = 90.5 ≈ 90 N; 8 × 1.5 = 12 N; 78 + 12 = 90 N, and the unrounded values are consistent too.
- Shot: 5 × 9.81 = 49.05 ≈ 49 N; 49/5 = 9.8 m/s².
- Puck: 6.0 and 8.0 m/s²; √(36 + 64) = 10; tan⁻¹(4/3) = 53.13° ≈ 53°; √(9 + 16) = 5.0 N; 5.0/0.50 = 10.
- Boxes: 6.0 kg; 30/6 = 5.0 m/s²; 2 × 5 = 10 N; 30 − 10 = 20 = 4 × 5.
- Quiz 1: answer 4.0 (index 1) is correct. The distractors 36, 15 and 0.25 match their explanations.
- Quiz 2: zero (index 1) is correct. The other three choices are wrong, and the explanation is true.
- Quiz 3: 40 cos 60° / 5 = 4.0 (index 1) is correct. The distractors are 8.0, 6.93 ≈ 6.9 and 5/20 = 0.25.
- Quiz 4: 80 × 1.62 = 129.6 ≈ 130 N and 80 × 9.81 = 784.8 ≈ 785 N; index 0 is correct. The explanation does not say where the 13 kg distractor comes from (130/9.81 = 13.2); that is fine.
- Quiz 5: "The same, 9.81 m/s²" (index 1) is correct.
- Every number is in `calcs/hs-2/newtons-second-law.yaml`. `pytest tests/calc -k newtons-second-law`: 72 passed. Every entry has `source: {cite, at}`. Numbers based on a Siyavula method are honestly marked "(the numbers are the page's own)" with `origin: page-own`.
- info: the facts `g-standard` (NIST) and `g-moon` (NASA) carry `origin: mit`. This follows Block 1's calcs (for example `calcs/hs-1/free-fall.yaml`, where `mit` means "from a cited source"), but the label is literally wrong for NIST and NASA data. Not an error under the current schema; it could be raised for the whole High School.

## Only earlier terms
- Net force and resultant (2.1, also 0.8 for vector sum), newton (0.2, 2.1), inertia (2.2), acceleration and braking (1.4), equations of motion including v_f² = v_i² + 2aΔx (1.6), g and the Moon's 1.62 m/s² (1.7), independence of directions (1.8), components and tan⁻¹ (0.7, 0.8), inverse proportion (0.6, power −1 table) and direct proportion (0.5): all introduced earlier.
- Friction, tension and air resistance: introduced in 2.1 (friction, tension, drag) and 1.7 (air resistance). The forward glosses are fine (row 7).
- Newton's third law (lesson 2.4, written on this branch): used once, with a one-line gloss. Acceptable.
- "Normal force" is deliberately avoided ("upward push of the snow", "air cushion"). Good.
- Callout terms (galaxies, general relativity) appear in a cosmology callout and were already mentioned in 1.7's callout. Acceptable.
- No term was found used before it is introduced.

## Coverage
- §4 row 2.3 (Newton's second law; PhET forces-and-motion-basics; leads to 8-01/newtons-laws): covered. Proportionality, the vector law, the newton, forces to motion and motion to forces, weight and free fall, misconceptions, components, and connected bodies are all at VWO level.
- Siyavula 2.3 also has inclined planes (planned as 2.8), lifts and apparent weight, and rockets. Apparent weight is not here; it is probably best in 2.5 (normal force). This does not matter for this lesson if 2.5 covers it.
- The page has no graph of a against F (a straight line through the origin), though its table shows it. It is optional (info).
- The momentum form F = Δp/Δt (MIT 7.3) is left out. That is fine at this point, since momentum is in Block 3.

## Where this leads
- `leadsTo` 8.01 lecture 4, "Newton's Laws of Motion" (`content/year-1/8.01/newtons-laws.mdx` exists): same topic, and the `why` is accurate.
- `towards: false` is right: 2.3 is not the last lesson of the block.
- Cosmology callout: the physics (a Newtonian expanding sphere, the mass cancelling, the equivalence principle as Einstein's starting point) is correct. The wording about the course deriving it "later from general relativity" is uncertain (row 6).

## Licensing and AI terms
- No copied sentences found. The law in words is the standard statement, worded differently from Siyavula's definition box.
- No figures copied. The plot and vector diagram are generated from formulas and numbers.
- The worked examples (sledge 12 kg / 60 N / 18 N, car 1500 kg, bucket 8.0 kg, puck, boxes 4 + 2 kg) are the page's own. Siyavula's are 10 kg / 32 N / 7 N, crates 10 + 15 kg on a rope with 500 N, 20 kg / 150 N at 60°, truck 2000 + 500 kg, lift 500 kg, and rocket 5000 kg. Methods match, numbers and situations differ. Quiz 3 shares the 60° angle with WE12 (row 8).
- No Siyavula logo, brand or "Everything Science" naming. Only CC BY page URLs are used (all three are listed CCBY in docs/siyavula-licences.tsv).
- The MIT Ch. 7 PDF has no "rights reserved" or "courtesy" notice.
- NASA: no insignia and no "according to NASA". No ESO text is used.
- No forbidden source.
- PhET: frontmatter `phet: forces-and-motion-basics` matches §4. `content:check` raises no PhET error for this page.

## Notes
- `content:check` reports only the missing review file for this page. The symbols W, g_Moon, F_net,x, F_net,y and F_rope have meanings scoped to this page.
- Physics claims checked and correct: a car at constant velocity has zero net force; the braking force is mainly road friction on the tyres; the bucket accelerates down if the rope pulls with less than 78 N; a feather falls slowly because of air resistance; bathroom scales measure a force.
- "Try it": the Acceleration screen of Forces and Motion: Basics shows the sum of forces and the acceleration, and friction can be adjusted. Whether a reader can exactly "double the mass" there depends on the objects on offer (I believe there are two crates, so stacking doubles it). Not verified in the sim; uncertain.

## Resolution (2026-11-20, by the page author)
1. The newton formula is now cited to Siyavula Gr 10 "1.3 Units", "Combinations of SI base units", added as reference `si-units` (as in lesson 2.1).
2. Weight is now written `F_g` throughout (text, Weight formula `\vec F_g = m\,\vec g`, "What F = ma does not say", summary, frontmatter summary, quiz 4 and 5, flashcards, calcs `shown` of quiz-moon-weight). The page no longer uses `W`; symbols: the `W` meaning scoped to this page must lose the page, and `F_g` needs a meaning here (sym-fix JSON for the coordinator).
3. The mass and weight bullets and the "I weigh 60 kilograms" paragraph are replaced by one sentence pointing back to lesson 2.1's "Mass is not weight"; kept: F_g = m g from the second law, the 60.0 kg Earth and Moon numbers and the bathroom scales.
4. "The newton" now refers back to lesson 2.1 and shows why the combination follows from F_net = m a; the 100 g / apple illustration and its calcs entry `apple-weight` are removed.
5. The net force is now pointed back to lesson 2.1 instead of being defined again.
6. The cosmology callout now says 8.286 derives the expansion equation in the Newtonian way and the full general-relativity treatment comes in the graduate course 8.962.
7. Friction gloss now "lesson 2.1; more in lesson 2.6"; tension gloss "Lesson 2.1 called the pull of a rope its tension; lesson 2.5 returns to it."
8. Quiz 3 now uses 30°: 40 cos 30° ≈ 34.6 N, a ≈ 6.9 m/s² (answer index 2); distractors 8.0 (whole force), 4.0 (sine), 0.14 (inverted). Calcs updated (new entry `quiz-sledge-component`).
Info (origin labels): `g-standard` (NIST) and `g-moon` (NASA) now have `origin: later-data`.
Info (Notes, optional a-against-F graph and the PhET crate check): not changed; the table shows the proportion, and the sim wording ("double the mass") is kept.
