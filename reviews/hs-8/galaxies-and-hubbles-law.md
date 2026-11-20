---
page: content/year-0/hs-8/galaxies-and-hubbles-law.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec04/ (read: 0efbf1fe4a90766cdfdad43223aabe25_MIT8_286F13_lec04.pdf; slide 1 has v = Hr with its three definitions; slides 2–3 carry "Source unknown. All rights reserved", slide 4 "Photo courtesy Observatories of the Carnegie Institution"; neither is used)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9b67a2c6895709ae6d74037a4e82ec24_wuPEmfon9lg.pdf (read: Lecture 4 transcript; printed footer pages equal PDF pages, checked with pdftotext -f N -l N for pp. 6–18)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec01.pdf (read: pp. 9–11; galaxy photographs are "Courtesy of … Used with permission", not used)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec10.pdf (read: pp. 61–64; the p. 64 plot "© Geek3 … All rights reserved" is not used)
  - https://science.nasa.gov/universe/galaxies/ (read; last updated 12 Aug 2026)
  - https://science.nasa.gov/universe/galaxies/types/ (read; last updated 12 Aug 2026)
  - https://science.nasa.gov/missions/hubble/hubble-views-the-star-that-changed-the-universe/ (read; 23 May 2011, last updated 5 May 2025)
  - https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-31/ (read; last updated 10 Nov 2026)
  - https://science.nasa.gov/missions/hubble/nasas-hubble-shows-milky-way-is-destined-for-head-on-collision/ (read; last updated 23 Jan 2025)
verdict: needs-changes
---

# Review: Galaxies and Hubble's law (8.11)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Section "On average, not exactly", first paragraph: "only around 2001, when the Hubble Space Telescope found Cepheids … did they become precise (transcript p. 10)"; frontmatter `reading2.location` "p. 10: later values much lower" | Transcript p. 10 has only the scatter of Hubble's data and the Sun's own motion. "The values came down steadily", "Values started to become more precise around 2001", the Hubble Key Project and the Cepheids in more distant galaxies are all on **p. 11** (printed footer, checked) | p. 10 | Cite p. 11 in the text and in `reading2.location`. The paraphrase itself is faithful (no copied sentence). |
| 2 | error | Same paragraph, "As Guth points out in MIT 8.286 (transcript pp. 8–9), Hubble's speeds only reached about 1000 km/s, the points were scattered, and he found a slope of 500"; frontmatter `reading2.location` "pp. 8–9: … the Sun's own motion (Lemaître 300 km/s, Hubble 280 km/s)"; calcs `sun-motion-estimate` and `own-motion-fraction` (`at: 'p. 9'`) | 500 km/s/Mpc and "only goes up to about 1,000" are on p. 9; "you can see that the data is scattered" and the Sun's motion (Lemaître 300, Hubble 280 km/s, "about a third of the maximum velocity") are on **p. 10**. p. 8 has only Lemaître's 1927 paper and his 575–625 | pp. 8–9 for all of it | Text: "(transcript pp. 9–10)"; add "(p. 10)" after the sentence on the Sun's own motion in the next paragraph. Frontmatter: "p. 8: Lemaître 1927; p. 9: Hubble 1929 (500 km/s/Mpc), data reaching only about 1000 km/s; p. 10: the scatter, the Sun's own motion (Lemaître 300, Hubble 280 km/s)". Calcs: `at: 'p. 10'` in both entries. |
| 3 | warning | Section "On average, not exactly": "Galaxies pull on their neighbours by gravity, which gives them speeds of a few hundred km/s in every direction"; also "galaxies, and the stars in them, move at a few hundred kilometres per second through their surroundings" (after the first worked example) | No cited source gives galaxies' own (peculiar) speeds. Guth p. 10 gives only the Sun's motion relative to the galaxies (about 300 km/s); 8.902 Lecture 1 p. 10 gives speeds *inside* galaxies (spiral rotation 200 ± 50 km/s, elliptical velocity dispersion 200–300 km/s) | Stated as fact, uncited (writer flagged it) | The statement is standard and correct (typical peculiar speeds are a few hundred km/s). Either cite Guth p. 10 for the Sun's 300 km/s and say "galaxies have similar speeds of their own" as the page's own remark, or leave it as standard. Cite 8.902 Lecture 1 p. 10 (V_c ≈ 200 ± 50 km/s) beside the Sun's 200 km/s: it supports the worked example's result. |
| 4 | warning | Section "A rising loaf of raisin bread", balloon paragraph: "there is no edge to fall off, and the expansion is not into some empty space around it. The universe is not a bomb exploding outwards from one point into empty space" | Not in any cited source (Guth Lecture 4 uses only the photographic blow-up, p. 17, and on p. 18 says space expanding and galaxies moving are both valid views locally) | Uncited (writer flagged it) | The physics is correct and standard; keep it, but make the analogy exact: "for the dots, which live on the surface, there is no edge and nothing outside the surface". The real balloon does expand into the room, which a careful reader will notice. Optionally cite Guth p. 18 for "space itself expanding" versus "galaxies moving through space". |
| 5 | warning | Section "Spirals, ellipticals and irregulars", irregulars: "often because a neighbour has pulled them out of shape. They usually contain gas, dust and both young and old stars" | NASA *Galaxy Types*: odd shapes are "sometimes the result of interactions with others"; they "may also hold significant amounts of gas and dust"; "typically host a mix of older and younger stars" | "often", "usually" | Write "sometimes because …" and "They may hold much gas and dust, and a mix of young and old stars", matching the cited page. |
| 6 | info | Worked example "How fast does the Sun go round the galaxy?": $25\,000$ light-years | NASA *Galaxies*: disk "more than 100,000 light-years", Earth "about halfway from the center" | 25 000 ly as half of the 50 000 ly radius | Correctly labelled as an estimate on the page ("roughly"), and the calcs file marks it `page-own`. Fine as is; the result (196 km/s) agrees with 8.902 Lecture 1 p. 10 (200 ± 50 km/s), which could be cited as a check. |
| 7 | info | Section "On average, not exactly": Andromeda "comes towards us at about 110 km/s …, a blueshift" | NASA collision page: about 250,000 mph, towards the Milky Way, "under the mutual pull of gravity between the two galaxies and the invisible dark matter" | "towards us" | 250 000 mph = 111.8 km/s ✓. This is the speed relative to the Milky Way as a whole; the blueshift measured from the Sun is larger because the Sun's orbit carries it towards Andromeda. Optional: "towards the Milky Way at about 110 km/s". |
| 8 | info | Formula "The redshift", cite reading3 eq. (24), p. 11 | 8.902 writes $z = (\lambda_\text{obs} - \lambda_0)/\lambda_0$ | $\lambda_\text{em}$ | Same physics; the page follows lesson 5.13/7.11 notation. A short "(the notes write $\lambda_0$)" in the `at` would match the rule that notation differences are stated. |
| 9 | info | Section "A rising loaf of raisin bread" and worked example "From one spectrum to a distance" | Lesson 5.13 already has the raisin loaf (line 181) and an Hα worked example of the same form (656.3 → 672.7 nm, z, cz, d = v/H₀); 7.11 has a two-line Hα example | Presented as new | Not wrong, and the 8.11 versions go further (doubling distances, kept galaxy size). Add "(lesson 5.13)" to the loaf picture so the reader sees it is being deepened, not repeated. |
| 10 | info | Section "The Hubble diagram": "Today's measurements give values close to 70 km/s/Mpc (MIT 8.902, lecture 10, p. 62)" | 8.902 p. 62: "H₀ ≈ 70 km/s/Mpc"; Guth Lecture 4 p. 12: Planck 2013 67.3 ± 1.2 and a "tension" with other values | "close to 70" | Correct and cited. Lesson 5.13 already mentions Planck's 67; no change needed. |
| 11 | info | Section "Spirals …": the colour cue "lesson 7.6 showed that hot stars are blue" | `colours-of-stars` (7.6) | Not in `prerequisites` | Add `colours-of-stars` to `prerequisites`. |

## Formulas and citations
- Redshift $z = (\lambda_\text{obs} - \lambda_\text{em})/\lambda_\text{em}$: 8.902 Lecture 1 eq. (24), p. 11 ✓ (row 8 for notation). $v \approx cz$ for small $z$: eqs. (25)–(26), same page ✓.
- Hubble's law $v = H_0\,d$, cite reading1 "slide 1 (written there as v = Hr)": slide 1 ✓, with "v recession velocity, H Hubble's constant, r distance to galaxy". "On average" (transcript p. 7) ✓: "on average all galaxies are receding from us … it's not true exactly for our universe, but it's true in some average sense".
- 1 pc = 3.2616 ly, H in km/s per Mpc, board: transcript pp. 7–8 ✓.
- Naive reading "we must be the center" p. 16 ✓; frame change by adding one velocity pp. 16–17 ✓; photographic blow-up with galaxies keeping their size p. 17 ✓ ("pp. 16–17" covers it).
- 8.902 Lecture 10 p. 62: homogeneity, isotropy, $v = H_0 r$ eq. (267), $H_0 \approx 70$, the argument that $f(r_1 - r_2) = f(r_1) - f(r_2)$ forces a linear law, eqs. (268)–(269) ✓. The page's square-law counter-example is its own illustration of that argument and is correct.
- 8.902 Lecture 1 p. 9: spirals (field, disks with gas and stars, young, rotating, blue), ellipticals (cluster environment, spheroidal, old, pressure supported, red), lenticulars (stellar disk, no gas disk, link) ✓. Irregulars are not in 8.902 ("mainly three types"); they come from NASA *Galaxy Types* ✓.
- NASA *Galaxies*: few thousand to trillions of stars, few hundred ly to more than a million ly, disk more than 100 000 ly, about halfway from the centre along a spiral arm, 240 million years per orbit, over 50 other galaxies in the Local Group, clusters that "may contain thousands", superclusters ✓.
- NASA *Galaxy Types*: Milky Way and Andromeda barred spirals, young stars in gas-rich arms, bulge; ellipticals round to oval, little gas and dust, older stars, random orbits, maybe from mergers; lenticulars bulge and disk without arms ✓ (irregulars: row 5).
- NASA *V1*: 1920 Shapley–Curtis debate; "most astronomers considered the Milky Way a single island universe"; night of 5 Oct 1923 (run into 6 Oct), 100-inch Hooker telescope, period 31.4 days, 1 million ly ✓. The page's "without settling it" is consistent (NASA: Hubble's V1 "settled the debate").
- NASA *Messier 31*: 2.5 million ly, naked-eye visible ✓. NASA collision page: 250 000 mph, about 4 billion years, a single elliptical galaxy ✓.

## Arithmetic and answer checks
Recomputed independently in Python; `npm run calc:test` passes (12 134 checks); `npm run content:check` 0 errors (only "no review file yet" for this page).
- Sun's orbit: 2π × 25 000 × 9.46 × 10¹⁵ = 1.486 × 10²¹ m ✓; 240 × 10⁶ × 3.16 × 10⁷ = 7.58 × 10¹⁵ s ✓; ratio 1.96 × 10⁵ m/s ("2.0 × 10⁵", about 200 km/s) ✓.
- V1: 10⁶/10⁵ = 10 ("about ten times") ✓.
- 1 Mpc = 3.2616 × 10⁶ ly ≈ 3.26 million ✓.
- Spectrum example: (667.8 − 656.3)/656.3 = 0.01752 ✓ (0.0175); 0.0175 × 3.00 × 10⁵ = 5250 km/s ✓ (5257 unrounded); 5250/70 = 75 Mpc ✓; 75 × 3.2616 = 245 million ly ✓.
- 500/70 = 7.1 ("about seven times") ✓. 300/5250 = 5.7% ("about 6 %") ✓.
- Andromeda: 250 000 mph = 111.8 km/s ✓; 2.5/3.2616 = 0.767 Mpc ✓; 70 × 0.77 = 53.9 ("54") ✓.
- Frame change: Q 50 − 20 = 30 Mpc, 3500 − 1400 = 2100 = 70 × 30 ✓; Milky Way −20 Mpc, −1400 km/s = 70 × 20 receding ✓; R −50 Mpc, −3500 km/s = 70 × 50 ✓.
- Square law (1 km/s per Mpc²): 400, 2500, 2100 at 30 Mpc from P versus 900 predicted ✓.
- Raisins: 1 → 2 cm and 3 → 6 cm, displacements 1 and 3 cm ✓.
- Plot: points (20, 1400), (50, 3500), (75, 5250) on v = 70d ✓; range 0–9000 fits H = 90 at d = 100 ✓.
- Quiz 0: answer 1 (elliptical) ✓; spiral, irregular and barred spiral are wrong for this description ✓.
- Quiz 1: 70 × 40 = 2800 km/s ✓ (answer 0); 40/70 = 0.57 ✓; 280 and 28 000 are factor-10 slips ✓.
- Quiz 2: 3000/70 = 42.9 Mpc ✓ (answer 2), 139.8 million ly ("about 140") ✓; 0.14, 4.3 and 210 wrong ✓.
- Quiz 3: answer 1 ✓; explanation true.
- Quiz 4: answer 2 ✓; explanation true (54 km/s is less than typical peculiar speeds; see row 3 for the source).
- Flashcards: all true.

## Only earlier terms
- Present in earlier lessons (checked): Hubble's law, H₀, Mpc, redshift z, v ≈ cz (5.13, 7.11); Cepheid, standard candle, distance ladder, parsec (8.10); Slipher, Lemaître, Hubble 1929 (7.11); relative velocity and change of frame (1.9); 2πr (1.10); hot stars blue (7.6, not in `prerequisites`, row 11); dark matter (in the first flashcard only; met in Blocks 1–2, e.g. `circular-motion`, `towards-the-universe-weighing-with-orbits`).
- Defined on the page: galaxy, Local Group, cluster, supercluster, spiral, elliptical, lenticular, irregular, bar, nebula, island universe, Hubble diagram.
- "Hubble Space Telescope" is used without introduction; a telescope named after Hubble is self-explanatory at this level (info).

## Coverage
- §4 row 8.11 (topic, NASA *Galaxies*, leads to `8-286/homogeneous-expansion`, `8-902/cosmological-principle-expansion`): covered at VWO level: the Milky Way, galaxy types, the island-universe question and V1, the Hubble diagram and its use as a distance tool, scatter from own motions, no centre, uniform expansion with galaxies keeping their size.
- Left out: galaxy masses and rotation curves (left to 8.16 Dark matter), the Hubble tension (5.13 and later lessons mention Planck's 67). Neither matters here.
- No PhET sim; §4 names none.

## Where this leads
- `{ course: "8.286", lecture: 4 }` resolves to `content/year-4/8.286/homogeneous-expansion.mdx` ✓. The `why` is accurate: isotropy and homogeneity (transcript pp. 3–7), v = Hr (slide 1), the frame change (pp. 16–17), and the scale factor a(t) (scale factor from p. 20; "a time-dependent scale factor times the coordinate distance", p. 21).
- `{ course: "8.902", lecture: 10 }` resolves to `cosmological-principle-expansion` and `friedmann-equations-density-parameters` ✓; the `why` matches pp. 62–63 (linearity from the cosmological principle, then Birkhoff's uniform sphere giving the Friedmann equation, eqs. (270)–(275)).
- `towards: false` ✓ (8.19 is the block's last lesson). The cosmology callout is correct.

## Licensing and AI terms
- No sentence copied. Closest paraphrases: NASA "Earth is located along one of the galaxy's spiral arms, about halfway from the center" → "The Sun lies in that disk, about halfway out from the centre along one of the arms"; NASA "On the night of Oct. 5, 1923" → "On the night of 5 October 1923". Both short factual phrases; fine.
- No figure copied: the one graph is generated from v = H₀d. Guth's frame-change picture (from Weinberg's book) and the slide photographs (some "All rights reserved") are not reproduced; the page's four-galaxy example has its own numbers.
- Worked examples and quiz questions are the page's own (8.286 Lecture 4 and 8.902 Lectures 1 and 10 have no such exercises).
- MIT: nothing used is marked excluded or all rights reserved. NASA: no insignia, no "according to NASA" phrasing; citations by page title. No ESO, Siyavula or forbidden source.
- No em dashes; units inside maths in all worked numbers (text "a few hundred km/s" is fine).

## Notes
- The writer's flagged points: 25 000 ly (row 6: fine, labelled as an estimate); peculiar speeds and balloon (rows 3–4: correct, uncited, small fixes); the 2001 HST sentence (row 1: faithful paraphrase, wrong page).
- Hubble's 1923 distance (1 million ly) compared with today's 100 000 ly disk: in 1923 Shapley's Milky Way was thought to be about 300 000 ly across, so Hubble's argument at the time was less clear-cut than "ten times". The page's comparison with the modern size is fine for the conclusion.

## Resolution (2026-11-20, by the page author)
Page numbers re-checked against the transcript PDF (pdftotext per page) and the 8.902 Lecture 1 notes (printed p. 10 = PDF p. 8).

1. Fixed: the 2001 sentence now cites transcript p. 11 in the text, and `reading2.location` says "p. 11: later values much lower, precise from about 2001 (Hubble Space Telescope Key Project, Cepheids in more distant galaxies)".
2. Fixed: text now says "(transcript pp. 9–10)" for the 1000 km/s, the scatter and 500 km/s/Mpc, and "(transcript p. 10)" after the sentence on the Sun's own motion. `reading2.location` split as suggested (p. 8 Lemaître 1927; p. 9 Hubble 1929, 500 km/s/Mpc, about 1000 km/s; p. 10 scatter, Lemaître 300 and Hubble 280 km/s). Calcs: `sun-motion-estimate` and `own-motion-fraction` at p. 10; `H0-hubble-1929` and `hubble-1929-ratio` at p. 9; `hubble-1929-max-speed` at pp. 9–10.
3. Fixed: the worked example now checks its 200 km/s against "200 ± 50 km/s" for stars going round in spiral galaxies (MIT 8.902, lecture 1, p. 10; added to `reading3.location` and as calcs fact `spiral-rotation-8902`). The sentence after the example now speaks of stars moving at a few hundred km/s inside their galaxies and galaxies having own speeds of a similar size; in "On average" the Sun's 300 km/s is cited to transcript p. 10 and the galaxies' own speeds are the page's own remark ("Other galaxies have their own motions of a similar size").
4. Fixed: the balloon paragraph now says that for the dots, which live on the surface, there is no edge and nothing outside the surface, and adds in brackets that the real rubber balloon does expand into the room, which the dots know nothing of.
5. Fixed: irregulars now "sometimes because a neighbour has pulled them out of shape. They may hold much gas and dust, and a mix of young and old stars"; the flashcard says "sometimes disturbed by a neighbour".
6. No change (estimate already labelled; 8.902 p. 10 now cited as a check, see 3).
7. Fixed: Andromeda "comes towards the Milky Way at about 110 km/s" in the text and quiz 4 (calcs `andromeda-approach` shown strings updated).
8. Fixed: the redshift formula's `at` and `reading3.location` note that the notes write λ₀ for the emitted wavelength.
9. Fixed: the raisin loaf is introduced as one "which you met briefly in lesson 5.13".
10. No change needed.
11. Fixed: `colours-of-stars` added to `prerequisites`.

Checks: `npm run calc:test -- -k galaxies-and-hubbles-law` 44 passed; `npm run content:check` 0 error(s), no warning for this page. Status set to reviewed.
