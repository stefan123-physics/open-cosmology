---
page: content/year-0/hs-8/black-holes.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture21_bh1/ (read: local copy bh1.pdf from the writer's handover folder, 25 slides, text extracted per slide; slides 2, 4–7, 14, 17–23 are images with no text and were not rendered; images marked "courtesy of Wikipedia", no "All rights reserved" or "excluded" notice in the resource page or PDF)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture22_bh2/ (read: local copy bh2.pdf, 30 slides, text per slide; images "courtesy of NASA"; no exclusion notice)
  - https://science.nasa.gov/universe/black-holes/ (read)
  - https://science.nasa.gov/universe/black-holes/types/ (read)
  - https://science.nasa.gov/universe/black-holes/anatomy/ (read)
  - https://www.eso.org/public/news/eso1825/ (read, including notes [1]–[3])
  - https://www.eso.org/public/news/eso2208-eht-mw/ (read, including notes [1]–[2])
  - https://science.nasa.gov/universe/glossary/ (read: entries neutron star, event horizon, black hole, accretion disk)
  - Earlier lessons on disk (2.13, 3.11, 5.8, 8.5, 8.6, 8.8) and content/year-2/8.033, content/year-4/8.286 for leadsTo
verdict: needs-changes
---

# Review: Black holes (8.9)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Worked example "How close did the star S2 come?", step "Speed against escape speed" | ESO eso1825: at closest approach S2 was "at a distance of less than 20 billion kilometres" and moving "at a speed in excess of 25 million kilometres per hour — almost three percent of the speed of light" | 25 million km/h = 2.3% of c, escape speed at 1500 r_s = 2.6% of c, so "S2 moves fast, but slower than the escape speed: it stays bound" | The comparison uses a lower bound on the speed ("in excess of") and an upper bound on the distance ("less than"), so it cannot show v < v_esc; with ESO's own "almost three percent" the speed would exceed 2.6%. In reality the two are almost equal (S2's orbit is very elongated, so at its closest point it moves at nearly the escape speed). Rewrite the step: compute both numbers, say they are nearly equal (ESO even gives almost 3%), and that we know S2 is bound because it is seen to come back every 16 years; a very elongated orbit passes its closest point at just under the escape speed. |
| 2 | warning | "How a black hole forms" (slide 30 maximum neutron-star mass), quiz 2, summary, flashcard | Slide 30 (2006): "Maximum neutron star mass is 3 solar masses" | Stated as current fact ("the largest possible mass of a neutron star at about 3 solar masses") | Attributed to the slides, which is right, but the slides are from 2006. Mark it: "the 2006 slides put ... at about 3 solar masses, an upper limit; later estimates are somewhat lower". If no §2.0 source gives the newer figure, keep "at most about 3" and drop "largest possible". Quiz 2 logic still holds (10 > 3). |
| 3 | warning | "X-ray binaries" paragraph | Slide 30 (2006): "Best example: V404 Cygni partner mass = 12±2 solar masses" | "The MIT slides give V404 Cygni, whose invisible partner has 12 ± 2 solar masses" | Honestly attributed, but present tense with a 2006 value; later measurements give about 9 solar masses (not checked here in a §2.0 source). Write "had, in the 2006 slides, ..." or add a later NASA value with its date if one is found. Calcs entry `v404-cygni` is fine as `origin: mit`. |
| 4 | warning | Reference `eso-s2`, title | ESO page title: "First Successful Test of Einstein's General Relativity Near Supermassive Black Hole" | "Einstein's General Relativity Passes First Test Near a Supermassive Black Hole" | Use the release's real title. |
| 5 | info | "Supermassive black holes", Sgr A* distance | eso2208 (2022): "about 27 000 light-years"; eso1825 (2018): "26 000 light-years" | 27 000, cited to ESO 2022 | Consistent with the cited release; no change needed. Optionally "about 26 000 to 27 000". (Lesson 2.13's rotation example uses 24 000 ly for the Sun's own orbit; that is an example value, not a conflict.) |
| 6 | info | "Gravitational waves": "Many more mergers have been heard since." | No cited source; NASA *Black Holes* only says scientists "can detect some of these" | Uncited | True and standard (hundreds of candidate events). Mark as a later development and, if possible, cite a NASA page; otherwise acceptable as is. |
| 7 | info | "Near the horizon", "for a large black hole you would notice nothing special at the moment you cross (Lecture 23, slide 24)" | Slide 24: "The river model explains: Event horizon & interior (not singular, compare to Niagara swim); Tidal forces; ..." | As written | Loose but fair support; "not singular" is the slide's phrase. Fine. |
| 8 | info | "Escape speed and the Schwarzschild radius", "The MIT lecture starts on the board from the escape speed (Lecture 23, slide 8)" | Slide 8 is a topic list: "Escape velocity; Newtonian metric; Schwartzschild metric; r, r" (no transcript exists for 8.033 Fall 2006) | "starts on the board" | That it was done on the board is an inference. Write "slide 8 lists the escape velocity as the first topic". |
| 9 | info | Paragraph after the r_s formula: event horizon defined "(slide 11)" | Slide 11: "A: An object contained within its own event horizon." | "an event inside it can never be seen from outside (slide 11)" | Slide 11 defines a black hole, not the horizon; the horizon meaning is in NASA *Black Hole Anatomy* ("nothing about what happens within them can reach an outside observer"). Cite that instead. |
| 10 | info | "Finding something invisible": "Most stellar-mass black holes known have been found because they orbit an ordinary star" | NASA *Types*: "Nearly all the stellar-mass black holes observed so far have been found because they're paired with stars" | As written | Matches the source. Note that gravitational-wave detections now count more black holes than X-ray binaries; "found because they are paired with another object" would be safer. |

## Formulas and citations
- v_esc = √(2GM/r): correct; slide 8 lists "Escape velocity" (verified, slide 8 of lecture21_bh1); derivation from lesson 3.11 stated.
- r_s = 2GM/c²: correct. Not on any text slide of the deck; the page says the step v_esc = c is its own and cites slides 8 and 10–11 for context (slides 10–11: "What is a black hole? An object contained within its own event horizon", verified). Acceptable. The "lucky coincidence" that the Newtonian argument gives the GR radius is stated honestly.
- v_esc = c√(r_s/r): algebraically identical (calcs identity `escape-speed-rs-form`); labelled the page's own. Physically it is also the escape speed measured by a static observer at Schwarzschild r, so "GR also shows" is not wrong, though it reads as if GR were needed for the algebra.
- Lecture 24 slide 8 ("When you fall in, how does it look to your friends?"), slides 11 and 13 (quasars, jets, stellar motions 10⁶–10⁹ M☉), slide 30 (stellar-mass evidence, 3 M☉, V404 Cygni 12 ± 2, Cygnus X-1): all verified at those slide numbers. Lecture 23 slide 1: Schwarzschild portrait, "German, 1873-1916" verified.
- Deck numbering: the decks say "Lecture 21" and "Lecture 22"; the site's 8.033 syllabus maps them to lectures 23 and 24 (`content/year-2/8.033/_course.json`), and the page says so in its source titles. Consistent.
- NASA *Black Holes*: supernova origin, finding by disks/orbits/gravitational waves, TON 618 66 billion, Sgr A* 4 million, Sun replaced by a black hole (colder, planets keep their orbits), spaghettification ("squeezed horizontally and stretched vertically"), event horizon "a boundary", not a surface: all verified.
- NASA *Black Hole Types*: > 8 M☉, near threshold → neutron star, ~20 M☉ or more → black hole, a few to hundreds of M☉, X-ray binaries, ~50 in the Milky Way, supermassive in almost every large galaxy with hundreds of thousands to billions of M☉, some within the first billion years: all verified.
- NASA *Black Hole Anatomy*: escape speed > c inside the horizon; singularity of infinite density, may mark the limits of relativity; accretion disk; shadow "roughly twice as big": all verified.
- ESO eso1825: May 2018, 16-year orbit, < 20 billion km, > 25 million km/h, about 1500 Schwarzschild radii, 120 times the Earth–Sun distance, redshift as GR predicts, 4 million M☉: verified (see row 1 for the speed and row 4 for the title).
- ESO eso2208: eight observatories, April 2017, 27 000 ly, shadow and ring, ring size agreed with GR, 30 years of stellar orbits by the Genzel and Ghez teams, 2020 Nobel Prize, M87* first in 2019: verified.

## Arithmetic and answer checks
Recomputed by hand and in Python; `npm run calc:test -k "black-holes or cosmic-distances"` passes (88 checks).
- 10 M☉: M = 1.99 × 10³¹ kg ✓; r_s = 2 × 6.67e-11 × 1.99e31/9e16 = 29 496 m ✓ (29.5 km, diameter 59 km "about 60") ✓; per M☉ 2.9496 km ✓; 1000 M☉ 2950 km ✓; density 1.99e31/(4/3 π (2.95e4)³) = 1.85 × 10¹⁷ kg/m³ ✓ ("1.9 × 10¹⁷"), / 1000 = 1.85 × 10¹⁴ ("about 2 × 10¹⁴") ✓.
- Plot: 1/√4 = 0.5 ✓; horizon point (1, 1) ✓; curve hidden for x < 1 ✓.
- Sgr A*: 4e6 × 1.99e30 = 7.96 × 10³⁶ kg ✓; r_s = 1.1799 × 10¹⁰ m ✓; / 1.496e11 = 0.079 ✓; 1500 r_s = 1.77 × 10¹³ m ✓ (18 billion km); / AU = 118 ("about 120", and ESO note [2] says 120) ✓; 25e6 km/h = 6.94 × 10⁶ m/s ✓ = 2.31% c ✓; √(1/1500) = 0.0258 ✓. Reasoning: see row 1.
- Quiz 0: answer 1 (doubles) ✓; other choices wrong ✓.
- Quiz 1: 2G(40 × 1.99e30)/c² = 117 984 m = 118 km ✓ (answer 1); 59 km = GM/c² ✓; 2.95 km = one M☉ ✓; 4720 km = 40² × 2.95 ✓.
- Quiz 2: answer 1 ✓ (row 2 for the "about 3" caveat); others wrong ✓.
- Quiz 3: answer 1 ✓ (NASA *Black Holes*); "only within a few Schwarzschild radii does its gravity differ" is correct physics.
- Quiz 4: answer 1 ✓; choice 3 ("Nothing at all") correctly wrong since the probe is outside.
- Flashcards: all true (the 3 M☉ caveat of row 2 applies to card 3).

## Only earlier terms
- Escape speed (3.11), Kepler's third law (2.12, via 2.13), X-rays (5.8), white dwarf and supernova (7.6, 8.5), electron degeneracy (8.6), gravitational redshift, clocks in gravity and LIGO 2015 (8.8), time on different clocks (8.2): all in earlier lessons (checked on disk). 2.12 and 8.2 are referred to but not in `prerequisites`; both are reached through listed prerequisites (2.13, 8.8). Info only.
- Neutron star, event horizon, singularity, accretion disk, quasar, jets, spaghettification, supermassive black hole, shadow: all defined on the page.
- "Density" (4.1, planned on the other PC; its §4 row covers it): counts as introduced.
- No term used before introduction found.

## Coverage
- §4 row 8.9 (topic black holes; NASA *Black Holes*; leads to `8-033/schwarzschild-black-holes`, `8-286/falling-into-a-black-hole`): covered at VWO level: formation, Schwarzschild radius from escape speed, horizon, time and redshift near it, tidal stretching, X-ray binaries, gravitational waves, supermassive black holes, S2, EHT.
- Left out: Hawking radiation (mentioned on Lecture 24's song slide), the "no hair" result (slides 12–13 of Lecture 23: mass, angular momentum, charge), gravitational lensing as a detection method (NASA *Black Holes*), intermediate-mass black holes (NASA *Types*). None is required at this level; one line on "three properties: mass, spin, charge" would match the main source's slides 12–13 cheaply.
- No PhET sim; §4 names none.

## Where this leads
- `8.033` lecture 23 → `content/year-2/8.033/schwarzschild-black-holes.mdx` (Schwarzschild metric, coordinate meanings, horizon at 2GM/c²) ✓; the "why" (clock rate at a given distance, nothing escapes inside r_s) matches.
- `8.033` lecture 24 → `content/year-2/8.033/evidence-for-black-holes.mdx` (quasars, stellar and gas motions, X-ray disks to a few r_s, companions heavier than a neutron star) ✓.
- `8.286` lecture 14 → `content/year-4/8.286/falling-into-a-black-hole.mdx` (finite proper time, never reaches the horizon seen from outside) ✓. Both §4 targets present.
- `towards: false` ✓ (8.19 is the block's last lesson). The cosmology callout (supermassive black holes early, growing with galaxies) agrees with NASA *Types*.

## Licensing and AI terms
- MIT 8.033 Fall 2006: CC BY-NC-SA; slide images are "courtesy of Wikipedia/NASA" and are not reproduced; no "All rights reserved" or "excluded" notice found. The page draws only a generated plot.
- No copied sentences. Closest paraphrase: NASA "If you replaced the Sun with a black hole of the same mass, the solar system would get a lot colder, but the planets would stay in their orbits" → page "if the Sun were replaced by a black hole of the same mass, the planets would keep their orbits ..., only it would be very cold": a short factual statement, reworded; fine.
- ESO eso1825 and eso2208 are press releases (CC BY 4.0); both reference titles state they were "rewritten here in our own words with the help of an AI assistant" ✓. No ESO image used.
- NASA: cited by page title, no "according to NASA", no insignia ✓.
- Worked examples (10 M☉ and the S2 check) are the page's own; the MIT slides have no exercises.
- No forbidden source cited or used. No em dashes. Units are inside maths (`\text{}`) throughout.

## Notes
- Writer's flags: (1) neutron-star limit and V404 Cygni from 2006 slides: rows 2 and 3; (2) "many more mergers": row 6; (3) 27 000 vs 26 000 ly: row 5 (27 000 is what the cited 2022 release says).
- Image-only slides of the 8.033 decks (Lecture 23 slides 4–7, 17–23) were not rendered; the page cites none of them.

## Resolution (2026-11-20, by the page author)
1. Fixed. The step "Speed against escape speed" now computes both numbers (2.3% and 2.6% of c), says they are nearly equal, that ESO even gives almost 3% of c, and that 25 million km/h is a lower bound and 20 billion km an upper bound, so the rounded figures cannot decide which is larger. It explains that a star on a very elongated orbit passes its closest point at just under the escape speed, and that S2 is known to be bound because it is seen to return every 16 years. The problem now asks how the two speeds compare. Reference eso-s2 location adds "almost three percent of the speed of light". Calcs: new fact s2-speed-eso-fraction; s2-period shown text updated.
2. Fixed. Body: "the 2006 slides ... put the mass of a neutron star at most about 3 solar masses, an upper limit; later estimates are somewhat lower". Quiz 2 choice: "heavier than any neutron star can be (at most about 3 solar masses)"; its explanation names it as the 2006 upper limit with lower later estimates; summary and flashcard say the same. "Largest possible" removed. Calcs max-neutron-star shown texts updated.
3. Fixed. "The 2006 MIT slides gave V404 Cygni as the best example, whose invisible partner had 12 ± 2 solar masses by the measurements of that time". Calcs v404-cygni shown text updated. No later value added (none checked in an allowed source).
4. Fixed. Reference title is now "First Successful Test of Einstein's General Relativity Near Supermassive Black Hole".
5. No change (consistent with the cited 2022 release).
6. Fixed. Marked as a later development after the 2006 slides; no NASA page giving a count of mergers could be read (the NASA MSFC GWTC-3 news item did not render its text), so the count stays unquantified, and the sentence now cites NASA Black Hole Anatomy for black holes growing by merging with other black holes (checked on the page).
7. No change needed.
8. Fixed. "The first topic that slide 8 of the MIT lecture lists is the escape velocity"; the Formula's at= now says "the first topic listed" instead of "a board topic".
9. Fixed. The event-horizon meaning now cites NASA Black Hole Anatomy ("nothing about what happens inside it can ever reach an observer outside", checked on the page); slide 11 is cited only for the definition of a black hole. Reference anatomy location updated.
10. Fixed. "Nearly all the stellar-mass black holes seen with telescopes were found because they orbit an ordinary star (NASA, Black Hole Types); gravitational waves, below, now find black holes too."

Checks: npm run calc:test -- -k black-holes: 61 passed. npm run content:check: 0 error(s), no message for this page. Status set to reviewed.
