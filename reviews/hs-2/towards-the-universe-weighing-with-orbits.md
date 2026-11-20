---
page: content/year-0/hs-2/towards-the-universe-weighing-with-orbits.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-04 (read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter9/ (read, PDF mit8_01scs22_chapter9.pdf)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec01.pdf (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/joviansatfact.html (read)
  - https://science.nasa.gov/sun/facts/ (read)
  - https://science.nasa.gov/dark-matter/ (read)
  - https://physics.nist.gov/cgi-bin/cuu/Value?bg (not fetched; value 6.674 30 × 10⁻¹¹ checked from the CODATA 2018/2022 recommended value, which is unchanged)
verdict: pass-with-notes
---

# Review: Towards the universe: weighing the Sun and the Galaxy with orbits

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Weighing the Milky Way", last paragraph | No cited source states the inside-shell half of the shell theorem. 8.01SC Ch. 9, App. 9A only treats a point **outside** a spherical shell (the shell acts as if its mass were at its centre). | "Newton showed that the matter outside an orbit pulls equally in all directions and has no net effect, so the orbit measures exactly the mass inside it" | The physics is standard and correct, but it is new to the reader (lesson 2.11 only gives the outside case) and uncited. Rephrase "pulls equally in all directions" (imprecise: the nearer side has less mass but is closer, and the pulls cancel) as "the pulls of a spherical shell on anything inside it cancel", and either cite a source that states it or mark it as a fact stated without proof. |
| 2 | warning | Plot "Two rotation curves through the Sun's orbit" | 8.902 notes p. 10: spirals have V_c ≈ 200 ± 50 km/s and v_c stays constant "outside the galaxy" (a general statement about spirals, not the Milky Way at 100 000 ly). | Solid line labelled "roughly flat (as measured)", drawn through the Sun's point from 8 000 to 100 000 ly, so it reads as the Milky Way's measured curve. | Say in the caption that the solid line is a schematic flat curve with the shape measured for many spiral galaxies, not the Milky Way's own measured curve. (Uncertain, not checked against a §2.0 source: some post-2022 Gaia-based studies report a slow decline of the Milky Way's curve far out, so "as measured" for the Milky Way out to 100 000 ly is stronger than needed.) |
| 3 | warning | Calcs file, entries `G-codata`, `zwicky-year`, `rubin-decade` | Task rule: every calcs `source` has `cite` and `at`. | `source: {cite: nist-G}` and `source: {cite: nasa-dm}` with no `at`. | Add `at:` (e.g. "CODATA recommended value"; for NASA, the section "History of dark matter" / the paragraph on Zwicky and Rubin). |
| 4 | info | "Weighing the Milky Way", radius step | NASA *Sun: Facts* gives only speed and period. Measured distance of the Sun from the galactic centre is about 26 000 ly (8 kpc; Ferreras page `rotation-curves` on this site says about 8 kpc). | r ≈ 24 000 light-years (derived). | The derivation is correct from NASA's rounded inputs. Consider a half sentence that the measured distance is about 26 000 light-years, so the reader does not take 24 000 ly as the measured value. Needs a §2.0 source (a NASA page) if added. |
| 5 | info | Formula "Newton's law of universal gravitation" | Siyavula writes F = G m₁m₂/d². | F = GMm/r². | Same physics. A short note ("Siyavula writes m₁, m₂ and d") would match the site rule that notation differences are explained; harmless as is. |
| 6 | info | "Dark matter", Rubin sentence | NASA *Dark Matter*: Rubin "looked at the stars on the outer edges of the spirals". | Same ("measured how fast stars on the outer edges ... move"). | Matches the source. (Uncertain, from general knowledge: Rubin and Ford mostly measured emission lines of ionised gas clouds, not single stars; "stars and gas" would be safer.) |
| 7 | info | "Rotation curves", "This is how the planets move (lesson 2.12): Mercury is fast, Neptune slow" | Lesson 2.12 gives v = √(GM/r) but does not mention Mercury or Neptune. | Attributes the example to 2.12. | Fine as a fact; drop "(lesson 2.12)" or keep it as a pointer to v = √(GM/r). |

## Formulas and citations
- `F = GMm/r²`, cite `mit` (Siyavula 2.4), at "Newton's law of universal gravitation": the section (ESBKY) exists and gives the law with G = 6,67 × 10⁻¹¹ N·m²·kg⁻². Correct; notation differs (see #5).
- `mv²/r = GMm/r²`, cite reading2 (8.902 Lec. 1), "Velocity structure of galaxies, eq. (22), p. 10": correct; eq. (22) is on printed page 10.
- `M = v²r/G`, reading2 "eq. (22), p. 10, solved for M": correct algebra.
- `T² = 4π²r³/(GM) ⇔ M = 4π²r³/(GT²)`, reading1 "Sec. 9.2.2, Eq. (9.2.7), p. 9-6": correct; Eq. (9.2.7) is in Sec. 9.2.2 and printed on page 9-6 (it follows the 9-5 footer). The notes write it for the Moon (R_e,m, m₂); "solved for the central mass" is stated.
- `v = √(GM/r), v ∝ 1/√r`, reading2 "eq. (22), p. 10 (v_c ∝ r^(−1/2) for a central mass)": correct, the notes say exactly this.
- Reading 1 location "Sections 9.2.1 (the period of the Moon's orbit) and 9.2.2": correct (the Moon period calculation, Eqs. 9.2.3–9.2.6, is inside 9.2.1).
- Reading 2 location "eqs. (22)–(23), pp. 10–11": correct (eqs. on p. 10; the dark-matter list incl. MOND runs on to p. 11).
- NASA fact sheets: all quoted values verified on the pages: Earth mass 5.9722 × 10²⁴ kg, semimajor axis 149.598 × 10⁶ km, sidereal period 365.256 d, mean orbital velocity 29.78 km/s; Sun mass 1 988 400 × 10²⁴ kg; Jupiter mass 1898.13 × 10²⁴ kg; Ganymede 1070.4 × 10³ km, 7.154553 d.
- NASA *Sun: Facts*: "average velocity of 450,000 miles per hour (720,000 kilometers per hour) ... about 230 million years" verified.
- NASA *Dark Matter*: Zwicky 1933, Coma Cluster, galaxies moving too fast, proposed invisible matter; Rubin, 1970s, stars on the outer edges of spirals; candidates not yet found. All verified. The page's "Her measurements, together with those of others, did much to convince astronomers" is more cautious than NASA's wording; fine.
- 8.902 notes p. 10–11 support: non-luminous gas ruled out by absorption lines; MACHOs, neutrinos ruled out; WIMPs not detected; MOND listed among the "general theories". The page's "Not known" and "Another idea" bullets match. "Minority view" is not in the notes but is standard and fair.
- Callout claims: Ferreras page 1.1 (`the-dark-matter-problem`) does weigh the Sun with all eight planets (and Jupiter with Io); the course covers rotation curves, clusters, lensing, candidates and MOND (its Ch. 2, 7); 8.902 `why-cold-dark-matter` (Lec. 14) gives the growth argument; "dark matter outweighs ordinary matter several times over" agrees with NASA *Dark Matter* (27% vs 5%). All correct.

## Arithmetic and answer checks
All recomputed independently (Python):
- r³ = 3.375 × 10³³ m³; T² = 9.960 × 10¹⁴ s²; M_Sun = 2.006 × 10³⁰ kg (page 2.01); 0.86% above NASA's 1.9884 × 10³⁰ (page "within 1%"). 365.256 d = 3.1558 × 10⁷ s (page 3.156 × 10⁷).
- v_Earth = 2.986 × 10⁴ m/s (page 2.99 × 10⁴; NASA 29.78 km/s); v²r/G = 2.0 × 10³⁰ kg. Unit check correct. Sun/Earth = 332 900 ("about 330 000").
- Ganymede: T = 6.178 × 10⁵ s; M_J = 1.900 × 10²⁷ kg (with unrounded NASA inputs and CODATA G: 1.898 × 10²⁷); Sun/Jupiter = 1047.6 ("about 1050"); v = 1.088 × 10⁴ m/s ("1.09 × 10⁴, about 11 km/s").
- Milky Way: 720 000 km/h = 2.00 × 10⁵ m/s; r = vT/2π = 2.31 × 10²⁰ m; 24 400 ly with 9.46 × 10¹⁵ m ("≈ 24 000"); M = 1.38–1.39 × 10⁴¹ kg (page 1.4 × 10⁴¹); 6.9 × 10¹⁰ Sun masses ("about 7 × 10¹⁰, roughly 10¹¹"); v²/r = 1.73 × 10⁻¹⁰ m/s² (matches lesson 1.10).
- "How much is missing?": 110 km/s; ×4 mass; r = 7.568 × 10²⁰ m; M = 5.49 × 10⁴¹ kg; 2.76 × 10¹¹ Sun masses ("2.8 × 10¹¹"); check route 1.37 × 10⁴¹ × 4 = 5.49 × 10⁴¹. Correct.
- Plot: dashed 200√(24/r) passes through (24, 200); solid 200. Correct as formulas.
- Quiz 1: answer 1 correct; choice 0 is not the reason the mass is not needed (it only justifies treating the Sun as fixed), so it is a fair distractor. Quiz 2: 4.50 × 10²⁴ kg correct; distractors 4.5 × 10¹⁸ (km/s), 2.0 × 10⁴ (×G), 5.0 × 10⁷ (÷r instead of ×r) each match the stated mistake; "a little less than the Earth's mass" true. Quiz 3: 1/√4 = 1/2, correct. Quiz 4: M ∝ r, correct. Quiz 5: choice 2 correct; the others false.
- Flashcards: all true (10⁴¹ kg is the rounded 1.4 × 10⁴¹).
- Calcs: `npm run calc:test -- -k weighing`: 43 passed. Every number on the page has an entry. Origins look honest; `G-school` is marked `later-data` though it is the textbook's rounded value (info only).

## Only earlier terms
- Centripetal force (2.9), gravitation and G (2.11), Kepler's third law and v = √(GM/r) (2.12, written, draft), v = 2πr/T and the Sun's galactic orbit (1.10), light-year (1.11), unit check (0.2), powers of ten (0.1): all earlier and in `prerequisites`.
- Galaxy, Milky Way: lesson 0.11 and 1.10. "Spiral galaxy": used in 2.9 (centripetal-force).
- Doppler effect: a forward reference to Block 5 (written by PC 2, `doppler-effect-sound`, `towards-the-universe-redshift`), explained in one bracket on the page. Acceptable for a "Towards the universe" lesson; info.
- Dark matter: introduced in 1.10 and defined again here.
- Spherical shell result ("matter outside an orbit has no net effect"): new here, not in 2.11 (which has only the outside case); see #1.
- Coma Cluster, modified Newtonian dynamics: explained where used.

## Coverage
- §4 row 2.13: weighing the Sun and the Galaxy with orbits, NASA *Dark Matter*, PhET gravity-and-orbits. All covered: Sun, Jupiter, Milky Way (mass inside the orbit), rotation curves, dark matter history and status. At VWO level M from T and r is exactly the expected skill. Nothing missing.
- The Milky Way estimate is hedged well: rough, power of ten only, circle assumed, rounded NASA inputs, and "only the mass inside the Sun's orbit" in bold, with the disc caveat.
- Overlap: lesson 2.12's last section already previews weighing with orbits and its quiz has the same "four times the radius gives half the speed" question as quiz 3 here (info). PhET gravity-and-orbits is also used in 2.9 (info; §4 names it for 2.13).

## Where this leads
- `Ferreras` 1.1 → `content/year-5/Ferreras/the-dark-matter-problem.mdx` (lecture 1.1) exists; the "why" (Sun from planets, Jupiter from moons, then galaxies) matches that page.
- `Ferreras` 2.2 → `rotation-curves.mdx` (lecture 2.2) exists; Doppler, point mass / uniform sphere / halo all present. Matches §4's `fundamentals-of-dark-matter/rotation-curves`.
- `8.902` 1 → `galaxy-observations.mdx` (lecture 1) exists and covers eqs. (22)–(23).
- `towards: true` set; cosmology claims in the callout are correct.

## Licensing and AI terms
- No copied sentences found. Closest: 8.902 "It can't be non-luminous gas since we would have seen it through absorption lines" vs page "Ordinary gas that does not shine is ruled out, because it would block light of particular colours and show up that way" (rewritten). NASA "moved too quickly for the gravity created by its observed ordinary matter" vs page "move too fast for the pull of their visible matter to hold them together" (rewritten).
- Worked examples are not the sources': Siyavula 2.4 uses people (80 kg, 65 kg), Earth–Moon, Earth–Jupiter forces, weights on planets; MIT 8.01SC uses the Moon's period and a geostationary orbit; the Ferreras page (this site) uses Io. Earth→Sun, Ganymede→Jupiter, Sun→Galaxy and the 20 000/80 000 ly galaxy are the page's own.
- No figures from any source; the plot is generated from formulas. The 8.902 Lecture 1 notes contain "Courtesy of ..." images (pp. 8–9: Andromeda, M87); none is used.
- No MIT "All rights reserved" material used. Siyavula named only in the citation (attribution, not branding); no logo, no "Everything Science" branding.
- NASA: cited by page title; no insignia; no "according to NASA" phrasing ("The NASA *Sun Fact Sheet* lists", "NASA's figures are rounded averages" are citations of data, acceptable).
- No ESO text. No forbidden source (OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs, paywalled articles) cited or used.

## Notes
- The NIST page was not fetched; the value 6.674 30 × 10⁻¹¹ is the CODATA recommended value (unchanged 2018 → 2022).
- `status: draft` is correct until the findings are resolved.

## Resolution (2026-11-20, by the page author)

1. Reworded: "Newton also showed (we state the result here without proof) that the pulls of the matter outside an orbit cancel: a thin round shell of matter exerts no net force on anything inside it, because the nearer side has less mass but is closer." Marked as stated without proof, since no cited source gives the inside-shell case.
2. Plot label now "flat (typical spiral, schematic)"; the caption says the solid line is a schematic flat curve with the typical shape measured for many spiral galaxies, not the Milky Way's own measured curve.
3. Calcs: `at` added to `G-codata` ("CODATA recommended value of G"), `zwicky-year` and `rubin-decade` (the NASA *Dark Matter* history paragraphs on Zwicky and on Rubin).
4. No NASA page found that gives the Sun's distance from the galactic centre (checked *Sun: Facts*, *The Milky Way Galaxy*, *Solar System Facts*), so no number added. Added one sentence after the radius step: 24 000 light-years is only what NASA's rounded speed and period give, not a measured distance, and careful measurements put the Sun a little farther from the centre.
5. Added after the value of G: Siyavula writes the same law with m₁ and m₂ for the two masses and d for their distance; here M, m and r (written as plain text, so no new symbol meanings are needed).
6. Kept NASA's wording (stars on the outer edges), since that is the cited source; the "stars and gas" point is uncertain and not in a §2.0 source. The rotation-curve section already says astronomers measure stars and gas clouds.
7. Rewritten: "Lesson 2.12 found this rule for the planets round the Sun: the closest planet, Mercury, moves fastest, and the farthest, Neptune, slowest." The lesson is credited only for the rule.
- Overlap note: quiz 3 replaced by a new question (same orbit radius, twice the period, so a quarter of the central mass: M ∝ 1/T²), with calcs entry `quiz-period-twice`. `G-school` origin changed from `later-data` to `mit` (it is the main source's value).
- Checks: calc test 44 passed; `content:check` reports nothing for this page. Status set to reviewed.
