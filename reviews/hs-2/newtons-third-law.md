---
page: content/year-0/hs-2/newtons-third-law.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-03 (read; CC BY 3.0 footer present; listed CCBY in docs/siyavula-licences.tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter7/ (read; PDF mit8_01scs22_chapter7.pdf, Sec. 7.3 and 7.4, downloaded to a scratch folder outside the repo)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (not fetched; values checked against the figures quoted in the page's `references` and in Lesson 1.10, which match the long-standing fact-sheet values)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (not fetched; as above)
verdict: pass-with-notes
---

# Review: Newton's third law

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Worked example "The Earth and the Moon", step "The Earth's acceleration" | (own arithmetic) | $a_\text{Earth} \approx 3.4 \times 10^{-5}$ m/s², then the check gives $3.3 \times 10^{-5}$ "the same to rounding" | 3.4 comes only from the rounded intermediate 2.0 × 10²⁰ N (2.0/5.97 = 0.3350). With the unrounded force (1.98 to 2.00 × 10²⁰ N, depending on how far the Moon's acceleration is rounded) the result is 3.32–3.35 × 10⁻⁵, and the physical value Gm/r² is 3.32 × 10⁻⁵. Write "≈ 3.3 × 10⁻⁵ m/s²" in the step so the step and the check agree (update calcs `earth-a`). |
| 2 | warning | Cosmology callout, tides sentence | — | "why there are two high tides a day needs the way gravity weakens with distance, Lesson 2.11" | Tides are not in Lesson 2.11's §4 row (or anywhere in docs/HIGHSCHOOL-PLAN.md). Either tell the 2.11 writer to include the two-bulge explanation, or reword ("needs the way gravity weakens with distance, which Lesson 2.11 introduces") without promising the explanation. |
| 3 | warning | Cosmology callout, stellar wobble and Milky Way–Andromeda | No cited source covers these | "Astronomers have found many planets … by measuring this tiny wobble"; "the Milky Way and the Andromeda galaxy … are moving towards each other" | Both are standard and correct, but no reference supports them. Add a NASA page (e.g. NASA Science exoplanet "radial velocity" page; NASA Hubble page on the Milky Way–Andromeda collision) to `references`, cited by title, no "according to NASA". |
| 4 | info | "Forces come in pairs", boxed law | Siyavula: "If body A exerts a force on body B, then body B exerts a force of equal magnitude on body A, but in the opposite direction." | "If body A exerts a force on body B, then body B exerts a force of the same size on body A, in the opposite direction." | A standard statement of a law, lightly reworded; acceptable. Since it follows Siyavula 2.3 closely, consider naming it ("as Siyavula 2.3 states it") or citing `mit` beside it. |
| 5 | info | "Walking, swimming and rockets", rocket | Siyavula (2.3, worked example 17, second-law part) explains the rocket by gas pressure on the inside upper surface of the combustion chamber | Rocket pushes the exhaust back, exhaust pushes the rocket forward | Both are correct descriptions of the same thing; the page's is the usual third-law one. No change needed. |
| 6 | info | Worked example "Earth and Moon", force on the Moon | — | Uses the Moon's acceleration relative to the Earth (2.7 × 10⁻³ m/s², computed with the Earth treated as fixed) as the Moon's own acceleration, then says the Earth moves too | Strictly the Moon's acceleration about the common centre is 81/82 of this, so F is about 1.2 % smaller (1.98 × 10²⁰ N from Gmm/r²). Irrelevant at 2 significant figures; optionally add "(to within about 1 %)" in the last step. |
| 7 | info | Common mistakes, last bullet | — | "It holds for gravity, electric and magnetic forces too" | True for static charges and magnets, which is all this level meets; for moving charges the magnetic forces need not be equal and opposite (the field carries momentum). Fine for VWO; could say "between magnets and between charges at rest". |

## Formulas and citations
- `\vec F_{AB} = -\vec F_{BA}`, cite reading1 "Sec. 7.4, Eq. (7.4.1), with A and B for bodies 1 and 2": verified. MIT defines F₁,₂ as the force on body 2 due to body 1, which matches the page's "force that A exerts on B". Notation note is on the page.
- `a_A = F/m_A, a_B = F/m_B, a_A/a_B = m_B/m_A`, cite reading1 Sec. 7.3 Eq. (7.3.5) with (7.4.1): verified (F = ma is Eq. 7.3.5 on p. 7-6). The page states the condition (pair is the only force, or the others cancel). Correct.
- MIT reading title says "8.01SC Classical Mechanics (Fall 2016)"; the PDF itself is footed "8.01 Classical Mechanics, Spring 2022" (file mit8_01scs22). The URL is right; info only.
- Siyavula 2.3 supports the law statement, the three properties of a pair (same type, equal and opposite, different objects) and the statement that forces on one object are not a pair (its book-against-wall example). The book-on-a-table analysis, lift remark and rocket are standard and correct.
- NASA references cited by title, with locations; no insignia, no "according to NASA". Page writes "(NASA fact sheets)" after the masses: neutral attribution, fine.
- All cited sources are §2.0 sources. No forbidden source cited or used.

## Arithmetic and answer checks
Recomputed independently (Python):
- Quiz 1: 500 N (pair). Correct; other choices wrong.
- Quiz 3: 120/60 = 2.0, 120/40 = 3.0 m/s²; distractor 120/100 = 1.2. Correct answer index 2 (Daan 2.0, Lotte 3.0). Choice 1 swaps them; choice 3 wrong. Correct.
- Trolleys: 6.0/0.50 = 12 m/s², 6.0/1.5 = 4.0 m/s², 12/3 = 4.0. Correct.
- Moon: 4π²(3.844 × 10⁸ m)/(27.3217 d)² = 2.723 × 10⁻³ m/s² (≈ 2.7 × 10⁻³; matches Lesson 1.10).
- F = 7.35 × 10²² × 2.7 × 10⁻³ = 1.98 × 10²⁰ N; with unrounded a, 2.00 × 10²⁰ N; Gm M/r² = 1.98 × 10²⁰ N. "≈ 2.0 × 10²⁰ N" correct, and it is obtained without the law of gravitation (F = ma with the centripetal acceleration of Lesson 1.10), as required.
- Earth: 2.0 × 10²⁰/5.97 × 10²⁴ = 3.35 × 10⁻⁵ (page 3.4, see finding 1); true value 3.32 × 10⁻⁵.
- Mass ratio 5.97 × 10²⁴/7.35 × 10²² = 81.2; 2.7 × 10⁻³/81 = 3.33 × 10⁻⁵. Correct.
- Barycentre: 384 400 km × m/(M+m) = 4 671 km from the Earth's centre, inside the Earth (radius 6 371 km), on the Earth–Moon line. The page's claim is correct.
- Masses match NASA: Moon 0.07346 × 10²⁴ kg → 7.35 × 10²²; Earth 5.9722 × 10²⁴ → 5.97 × 10²⁴.
- Calcs file: every number on the page is in `calcs/hs-2/newtons-third-law.yaml`; each entry has `source: {cite, at}` and `origin` (page-own for the arithmetic, the NASA masses as `kind: fact`). `pytest tests/calc -k newtons-third-law`: 16 passed. The NASA masses are marked `origin: later-data`; that is acceptable, though they are plain reference values rather than a later measurement superseding a source.
- Quizzes 2, 4, 5: marked answers correct, distractors wrong, explanations true. Flashcards: all true.

## Only earlier terms
- Force, contact force, gravity, weight, normal force, tension, friction, magnets, electric force, interaction, vector arrow notation: introduced in Lesson 2.1 (`what-is-a-force`, present as a draft file).
- Net/resultant force, F = ma, newton = kg·m/s², lift example: Lesson 2.3 (`newtons-second-law`, present). The page also explains "normal" inline and points to 2.5.
- Centripetal acceleration of the Moon (2.7 × 10⁻³ m/s²): Lesson 1.10 (`circular-motion`), which computes exactly this value.
- Milky Way, Andromeda galaxy: Lesson 0.12 (`towards-the-universe-scales`).
- Tides, exoplanets and "wobble of a star": not introduced earlier, but explained in everyday words in the callout; acceptable for a callout.
- "Vacuum" is glossed inline ("where there is no air at all").
- No term found used before introduction.

## Coverage
- §4 row 2.4 "Newton's third law", no PhET: covered fully at VWO level: statement, vector form, three properties, finding partners, normal force vs weight confusion, why pairs do not cancel, propulsion (walking, swimming, car, rocket), equal forces with unequal accelerations, common misconceptions.
- Siyavula 2.3 also asks learners to draw force diagrams marking action-reaction pairs (seat belt, book against a wall). The page has no drawing exercise; this suits the practice set 2.P. Not a gap at this level.
- Link from the third law to conservation of momentum is not made; it belongs to Block 3. Fine.

## Where this leads
- `leadsTo` 8.01 lecture 4: `content/year-1/8.01/newtons-laws.mdx`, which has a section "The third law: forces come in pairs" with the same Eq. (7.4.1). Correct target, same topic. Matches the §4 row (`8-01/newtons-laws`).
- `towards: false`: correct; 2.13 is the block's last lesson.
- Cosmology callout: the two-body point ("nothing simply orbits something else") is correct; the Moon is indeed the main cause of the tides (the Sun contributes about half as much); stellar wobble (radial-velocity method) has found many exoplanets; the Milky Way and Andromeda are approaching (about 110 km/s). Claims are correct and suitably modest; see findings 2 and 3 for the forward promise and the missing sources. "Small circle" is exact only for circular orbits (an ellipse in general); fine at this level.

## Licensing and AI terms
- No copied sentences beyond the standard law statement (finding 4) and short standard phrases ("action-reaction pair", "interaction pair").
- Worked examples (two trolleys, Earth–Moon) and quiz questions (hammer and nail, book on table, skaters, rocket, why no cancel) differ from Siyavula's (seat belt, Tammy in a lift at constant velocity, book against a wall, fly on a windscreen, balloon rocket experiment) and from MIT Ch. 7 (symbolic only). The intro mentions a balloon qualitatively; not a copy of Siyavula's experiment.
- The one diagram is a generated `<VectorDiagram>`; no figure from any source.
- No Siyavula logo or "Everything Science" branding; MIT chapter has no "All rights reserved" or "excluded" notice (checked by grep); NASA: no insignia, no "according to NASA". No ESO text. No forbidden source cited or used.

## Notes
- The VectorDiagram caption describes two trolleys, but only the two arrows are drawn. Readers may still follow; consider "Two trolleys (not drawn)…" or adding two labelled points. Info.
- Common mistake about the lorry and the car: damage also depends on the cars' structure; the acceleration point is the right one for this lesson. Info.
- NASA fact sheets were not fetched in this review; their values were compared with the figures quoted on the page and in the reviewed Lesson 1.10, which agree. Marked as not independently re-read.

## Resolution (2026-11-20, by the page author)
1. Step "The Earth's acceleration" now gives ≈ 3.3 × 10⁻⁵ m/s², computed from the force before rounding (1.98 × 10²⁰ N, said in the step); the check now says "the same answer". Calcs: `earth-a` recomputed from m·a/M (expected 3.3e-5), new entry `moon-force-unrounded` (1.98 × 10²⁰ N).
2. Tides sentence reworded: two high tides a day "comes from the way gravity weakens with distance, which is beyond this lesson"; no lesson number promised.
3. Added NASA references cited by title (both URLs checked with curl, HTTP 200, text read): `exowobble` "NASA Science, How We Find and Characterize" (section "Radial Velocity: Reading the Wobble") and `andromeda` "NASA's Hubble Shows Milky Way is Destined for Head-On Collision" (31 May 2012). The callout names each page in brackets; no "according to NASA", no insignia.
4. The boxed law is now introduced with "(Siyavula states it in almost the same words)".
5. No change (as the review suggests).
6. Added to the check step: the Moon's acceleration from Lesson 1.10 treats the Earth as fixed; including the Earth's motion changes the force by only about 1 % (calcs `moon-force-correction`: 100·m/(M+m) = 1.2).
7. Last common-mistake bullet now says "for gravity, and for the forces between magnets and between electric charges at rest".
- Notes: diagram caption now says the trolleys themselves are not drawn; MIT reading title now ends "(PDF printed for 8.01, Spring 2022)". Lorry damage note left as is (the acceleration point is the lesson's).
Checks: `pytest tests/calc -k newtons-third-law` 18 passed; `content:check` 0 errors, no warning for this page.
