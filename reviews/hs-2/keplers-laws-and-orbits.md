---
page: content/year-0/hs-2/keplers-laws-and-orbits.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter25new/ (read: the PDF mit8_01scs22_chapter25new.pdf, all 40 pages; Secs. 25.1, 25.2, 25.3, 25.4.1 to 25.4.4, 25.5, 25.6, 25.7 Examples 25.1 and 25.2, Appendices 25B and 25C)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter9/ (read: the PDF mit8_01scs22_chapter9.pdf, Secs. 9.2, 9.2.2, 9.3 Example 9.1)
  - https://mathshistory.st-andrews.ac.uk/Biographies/Kepler/ (read)
  - https://mathshistory.st-andrews.ac.uk/Biographies/Brahe/ (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read; not cited by the page, used only to check the calcs entry jupiter-mass-ratio)
  - https://www.nasa.gov/reference/international-space-station/ (read: "ISS orbits at an altitude of between 370–460 km")
  - https://www.nasa.gov/international-space-station/space-station-facts-and-figures/ (read: "about every 90 minutes", "16 orbits of Earth" in 24 hours)
  - https://physics.nist.gov/cgi-bin/cuu/Value?bg (read: 6.674 30 × 10⁻¹¹ m³ kg⁻¹ s⁻²)
verdict: pass-with-notes
---

# Review: Kepler's laws and orbits (Lesson 2.12)

No errors found. Every `<Formula>` is at the place its `at` names in MIT 8.01SC Ch. 25 or Ch. 9, every number recomputes (my own route, Python, and `pytest tests/calc -k keplers`: 73 passed), all quiz answers are right, the history matches MacTutor, and the NASA and NIST values match their pages. No forbidden source is cited or used. The warnings below concern one overstated physics claim (the Jupiter gap), a worked example that is MIT's own Example 9.1, a few history claims that no cited source supports, an Earth mass that differs from lesson 2.11, and numbers missing from the calcs file.

Siyavula, the §2.0 main source for Block 2, is not cited. The caller reports that Siyavula has no Kepler section; I did not check this myself. MIT 8.01SC, the §2.0 support source, carries the lesson, and MacTutor, NASA and NIST are data and history sites in the AGENTS.md table.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Testing the third law" Check step, and the paragraph after Newton's form ("That tiny difference is the gap you found for Jupiter") | Eq. (25.5.14): T² = 4π²a³/(G(m₁+m₂)). In years and au this predicts T²/a³ = (M+m_E)/(M+m_J), with m_J/M = 1898.13/1 988 400 = 9.55 × 10⁻⁴ (NASA fact sheets) | The gap for Jupiter (0.153 %) is "real" and is explained by Jupiter's mass | Numerical check: Jupiter's mass predicts T² smaller than a³ by 0.095 %; the page's numbers give 0.153 %. Mass explains only about two thirds of the gap. The rest is scatter in the tabulated mean elements: Mars, whose mass effect is only 3 × 10⁻⁵ %, already shows 0.019 %, and the Jupiter sheet's own au value (5.20336301 au) gives 0.127 % instead of 0.153 %, so its km and au values do not quite agree. Say "Jupiter's mass, about a thousandth of the Sun's, accounts for most of it (about 0.1 %); the rest comes from small pulls of the other planets and from rounding in the tables". |
| 2 | warning | "A geostationary orbit" worked example | Ch. 9, Example 9.1: a geostationary satellite with a period of 23 h 56 min 4 s = 86 164 s (a sidereal day); find the radius of its orbit (4.22 × 10⁷ m = 6.62 R_e) | The same problem with the same period and the same radius, with G = 6.674 × 10⁻¹¹ and M = 5.97 × 10²⁴ kg instead of 6.67 × 10⁻¹¹ and 5.98 × 10²⁴ kg, plus a height step. The page credits MIT ("The MIT notes find the same radius") | Writing rules 1 and the reviewer checklist ask for worked examples that are not the source's own. The CC BY-NC-SA licence allows the adaptation and it is credited, so this is not a licence problem. To make the example the page's own, use a different period (a GPS satellite, half a sidereal day, r ≈ 26 600 km; or a satellite that stays above one point of Mars, using the Mars Fact Sheet), and keep the geostationary result as a short statement that cites Example 9.1. |
| 3 | warning | "From Tycho's observations", 2nd paragraph: "Tycho set him to work on the orbit of Mars, the planet whose path fitted the old circles worst" | MacTutor (Kepler): "Kepler soon found himself working on the intractable problem of the orbit of Mars"; it does not say that Tycho assigned the work or that Mars fitted worst | States both as fact, with the MacTutor citation next to them | Both claims are broadly true historically, but the cited page does not support them. Use MacTutor's wording ("Kepler was soon working on the hard problem of the orbit of Mars") or cite MacTutor's History Topic on Kepler's planetary laws if it says more (I did not read it). |
| 4 | warning | "Mars, fast and slow", Answer step: "Kepler found this change in speed in Tycho's data before he found the ellipse" | MacTutor (Kepler) gives both laws as results of the Mars work published in 1609, without their order | States the order as fact | Historically correct (the area law came before the ellipse), but no cited source supports it. Cite a source that does, or drop the clause. |
| 5 | warning | ISS example: "its mass $5.97 \times 10^{24}$ kg" (and calcs gm-earth) | NASA Earth Fact Sheet: 5.9722 × 10²⁴ kg; lesson 2.11 (newtons-law-of-gravitation) uses 5.9722 × 10²⁴ kg in all its examples, and so does lesson 2.13's reference | 5.97 × 10²⁴ kg, so GM = 3.984 × 10¹⁴ m³/s² | Use 5.9722 × 10²⁴ kg as in lesson 2.11 (GM = 3.986 × 10¹⁴; then r³ ≈ 7.50 × 10²² m³ and r ≈ 42 164 km; v, T, 93 min, 42 200 km, 35 800 km and 3.07 km/s do not change). Otherwise say once that the value is rounded. G = 6.674 × 10⁻¹¹ matches 2.11 and NIST. |
| 6 | warning | Second law, "Why does r v⊥ stay the same? Lesson 2.10 gave the answer." | Lesson 2.10 introduces torque and lever arm for balance; it does not connect zero torque to a constant r v⊥. MIT Sec. 25.3 makes that step (no torque about the origin, so angular momentum is constant) | Says 2.10 gave the answer | "Lesson 2.10's torque gives the answer." Optionally cite Sec. 25.3 for "angular momentum is constant because the force points at the origin and has no torque". |
| 7 | info | Third law: "the astronomical unit (au), the semi-major axis of the Earth's orbit" | MIT Example 25.2: "the mean distance between the earth and the sun"; NASA Earth sheet: semimajor axis 1.00000011 au | Defines the au as the Earth's semi-major axis | Since 2012 the au has been a fixed length (149 597 870 700 m), very close to the Earth's semi-major axis. "about the semi-major axis of the Earth's orbit" would be exact enough. |
| 8 | info | Laws list, "The MIT notes state the three laws as follows (Sec. 25.1)" | "I. Each planet moves in an ellipse with the sun at one focus. II. The radius vector from the sun to a planet sweeps out equal areas in equal time." | "Each planet moves on an ellipse with the Sun at one focus." / "The line from the Sun to a planet sweeps out equal areas in equal times." | Law I is nearly MIT's wording, but these are the standard statements of the laws and they are attributed. Fine. |
| 9 | info | Opening paragraph: Kepler "did not know why they hold" | — | — | A simplification: Kepler did propose a physical cause (a force from the Sun). Acceptable at this level. Optionally "He could not explain them". |

## Formulas and citations
- **r_p = a(1 − e), r_a = a(1 + e)**, mit, App. 25B.2, Eqs. (25.B.7) and (25.B.8): verified (ε there, as the `at` says).
- **b = a√(1 − e²)**, mit, App. 25C, Eq. (25.C.5): verified (also Eq. (25.B.17)).
- **ΔA = ½ r v⊥ Δt**, mit, Sec. 25.6.2, Eqs. (25.5.2) to (25.5.4): verified. The notes derive dA/dt = ½ r² dθ/dt from thin triangles; "r dθ/dt = v⊥" is the page's own step and is correct. The `at` explains the 25.5.x numbering.
- **r_p v_p = r_a v_a**, mit, Sec. 25.7, Example 25.1, Eq. (25.6.2): verified (L = m_s r_p v_p = m_s r_a v_a; m_s cancels). The same relation is also Eq. (25.B.25).
- **T² ∝ a³**, mit, Sec. 25.1 law III and Sec. 25.6.3: verified (T² = k a³, k the same for all planets).
- **(T/1 year)² = (a/1 au)³**, mit, Sec. 25.1: correct physics; the `at` says honestly that the units are the page's own choice.
- **GMm/r² = mv²/r**, mit, Sec. 25.4.1, Eq. (25.4.15): verified (G m₁m₂/r₀² = μ v₀²/r₀; μ → m for m ≪ M, as the `at` says).
- **v = √(GM/r)**, mit, Eq. (25.4.15) solved for v: correct; the `at` marks the step as the page's own.
- **T² = (4π²/GM) r³**, reading1, Sec. 9.2.2, Eq. (9.2.7): verified (written for the Moon, as the `at` says).
- **T² = 4π² a³/(G(M + m))**, mit, Sec. 25.6.3, Eq. (25.5.14): verified (G(m₁ + m₂)).
- Notation: SI, v, g not needed; e for eccentricity with a page-scoped symbol meaning in `data/symbols.json` ("Eccentricity of an ellipse … A pure number"). That is fine: lesson 0.10's e (Euler's number) does not occur on this page. Optionally add once "(not the number e of lesson 0.10)".
- Prose citations: "MIT notes point out that this agreement … was strong evidence for Newton" matches Ch. 9 Sec. 9.2.2 ("convincing evidence to Newton"). "the MIT notes derive the second law from the fact that it does not change (Sec. 25.6.2)" matches Eqs. (25.5.5) and (25.5.6). Open orbits "parabolas and hyperbolas, with energy too (Sec. 25.4.3 and 25.4.4)" matches; escape needs E = 0 (Sec. 25.4.3). Example 25.2 (S0-2) is in Sec. 25.7 as cited.
- History: Tycho 1546 to 1601, Uraniborg on Hven, "twenty years' worth" of observations, errors "mostly between about 0.5' and 1.0'" (Wesley's study as quoted by Swerdlow on MacTutor), Imperial Mathematician in Prague 1599 with Kepler as assistant: all in MacTutor (Brahe). "War with Mars", "nearly a thousand surviving folio sheets", Astronomia nova 1609, third law found while Harmonices mundi (1619) was in press: all in MacTutor (Kepler). See rows 3 and 4 for the two unsupported claims.
- NASA values: Earth 5.9722 × 10²⁴ kg, 6371.000 km, 23.9345 h, 149.598 × 10⁶ km, 365.256 d, e = 0.0167; Mars 227.956 × 10⁶ km, 686.980 d, e = 0.0935; Jupiter 778.479 × 10⁶ km, 4332.589 d: all verified on the fact sheets. ISS 370 to 460 km, about every 90 minutes, 16 orbits in 24 hours: verified. NIST G verified.
- Callout: S0-2 and "millions of Suns": Example 25.2 gives 7.79 × 10³⁴ kg = 3.91 × 10⁶ solar masses ("nearly four million"), from a 965.8 au orbit with periapse 119.5 au, so "millions of Suns packed into a tiny space" is supported. "which astronomers take to be a giant black hole" is hedged; MIT calls it "the black hole" outright, so the hedge is if anything more careful than the source. Later measurements put the mass at about 4.3 million Suns; "millions" stays true. Dark-matter sentence: no source on this page, but it is standard and correct, hedged ("one of the main reasons most astronomers think"), and lesson 2.13 covers it with its own sources. Optionally cite NASA "Dark Matter" (the §4 source of 2.13) here too.

## Arithmetic and answer checks
All recomputed independently (Python):
- Mars: r_p = 206.64 × 10⁶ km (206.6 ✓), r_a = 249.27 × 10⁶ km (249.3 ✓), ratio 1.2063 (1.21 ✓, "21 %" ✓), sum 455.9 ✓, (1 + e)/(1 − e) = 1.2063 ✓. Earth 1.0167/0.9833 = 1.0340 ✓ (3 %).
- Third law: Mars a = 1.52379 au, T = 1.88082 yr, T² = 3.53748, a³ = 3.53815 (3.5375, 3.5381 ✓), gap 0.019 % ("within 0.02 %" ✓). Jupiter a = 5.20381, T = 11.8618, T² = 140.702, a³ = 140.917 ✓, gap 0.153 % ("about 0.15 %" ✓). Plot points (1.524, 1.881) and (5.204, 11.86) ✓; a^1.5 at 5.204 = 11.87, so "within the width of the line" ✓.
- Jupiter/Sun mass: 1898.13/1 988 400 = 9.55 × 10⁻⁴ ("about a thousandth" ✓). See row 1 for what this explains.
- ISS: GM = 3.98438 × 10¹⁴ ✓; r = 6.791 × 10⁶ m ✓; v = 7659.7 m/s (7.66 × 10³ ✓, 7.7 km/s ✓, 27 575 km/h → 27 600 ✓); T = 5570.6 s = 92.84 min (5.57 × 10³ s ✓, 93 min ✓); 1440/92.8 = 15.5 ✓. Lesson 2.9's 7.91 km/s and 84 min (√(9.81 × 6.371 × 10⁶) = 7906 m/s, 84.4 min) ✓ and match centripetal-force.mdx line 235.
- Geostationary: 23.9345 h = 86 164.2 s ✓ (23 h 56 min 4 s ✓); r³ = 7.4929 × 10²² ✓; r = 42 158 km ✓ (4.22 × 10⁷ ✓); height 35 787 → 35 800 ✓; 35 787/6371 = 5.6 ("more than five Earth radii" ✓); v = 3074 m/s (3.07 ✓).
- Escape: √2 × 7.91 = 11.19 → 11.2 ✓ (√(2GM/R) = 11.18 km/s ✓).
- Plot 1: x = cos s − e, y = √(1 − e²) sin s is an ellipse of semi-major axis 1, centred at (−e, 0), with a focus at the origin; perihelion at x = 1 − e ✓. Domain [−2, 1.4] holds e up to 0.9 (x_min = −1.9) ✓. Caption ✓.
- Quiz 1: answer 1 (focus) ✓; the centre, the end of the major axis and "halfway between the foci and the planet" are wrong ✓.
- Quiz 2: T = √64 = 8.0 yr, answer 1 ✓; distractors 4.0 (T = a), 16 (T = a²), 64 (no root) as explained ✓.
- Quiz 3: v_p/v_a = r_a/r_p = 5, answer 2 ✓; √5 = 2.24 and 25 as explained ✓; "the same" is wrong ✓.
- Quiz 4: answer 2 (mass cancels) ✓; explanation true ✓.
- Quiz 5: answer 2 (halves) ✓; T × √64 = 8 ✓.
- Flashcards: all five true (sidereal day 23 h 56 min 4 s; 42 200 km; 35 800 km) ✓.
- Calcs file: every entry has `source: {cite, at}`; origins are honest (geo-r and geo-mit `mit`, MacTutor and NASA facts `later-data`, the rest `page-own`). `pytest tests/calc -k keplers`: 73 passed. **Warning, numbers not in the calcs file:** "between half and one arcminute" and "a sixtieth of a degree", "about twenty years", "nearly a thousand pages", "more than five Earth radii" (35 787/6371 = 5.6), the callout's "millions of Suns" (Example 25.2, 3.91 × 10⁶), and the ISS check's 92.8 min (only inside a formula). Add them as `kind: fact` (MacTutor, MIT) or computed entries. **Warning:** `jupiter-mass-ratio` takes the Sun's mass from the NASA Sun Fact Sheet, which is not among the page's `references`; add it (the value 1 988 400 × 10²⁴ kg is right). **Info:** `card-geo-radius` is `page-own` but has the same value as `geo-r`, which is `mit`; make the two the same.

## Only earlier terms
- Earlier lessons cover: period T and T = 2πr/v (1.10 circular-motion), centripetal force m v²/r and the 7.91 km/s ground-skimming orbit (2.9), torque and lever arm (2.10), F = GMm/r² and G (2.11), power laws, roots as powers 1/n (so ∛ and a^1.5), parabola and hyperbola (0.6 quadratics-and-power-laws), the perpendicular part of a vector (0.x introducing-vectors, through torque-and-balance), galaxy and Milky Way (Block 0 "towards" passages). All prerequisites exist and are written.
- Introduced and explained on this page: ellipse, focus/foci, semi-major and semi-minor axis, eccentricity, perihelion, aphelion, arcminute, astronomical unit, angular momentum (with "you will meet it properly at university"), sidereal day, geostationary, escape. Fine.
- Used without introduction (info only): "black hole" and "dark matter" in the cosmology callout (forward references; 2.13 and Block 8 explain them); "the two bodies both move round their common centre" (centre of mass is not introduced yet, and the page avoids the term); "energy" is explicitly left to Block 3. "Reduced mass μ" appears only inside citation `at` texts. None of these carries the argument, so none is an error.

## Coverage
- §4 row 2.12: Kepler's laws and orbits, PhET keplers-laws. Covered at VWO level: the three laws, ellipse vocabulary, equal areas with r_p v_p = r_a v_a, the third law in au/years and from Newton (v = √(GM/r), T² = 4π²r³/(GM), the VWO formula), satellites (ISS, geostationary), and qualitatively elliptical and escape orbits. The PhET sim is embedded; its UI strings include "Axes", "foci", "Swept Area" and "Area Values", which fits the "Try it" instructions (the T²–a³ graph on the third-law screen was not checked by running the sim: uncertain).
- Left out: orbital energy and the exact escape-speed derivation (deferred to Block 3, as the page says), and Newton's derivation of ellipses (beyond VWO). Neither matters at this level.

## Where this leads
- `leadsTo` 8.902 Lecture 5 exists (`content/year-5/8.902/orbits-and-epicycles.mdx`, "Orbits in galaxies: epicycles, Oort constants and the Tully–Fisher relation") and matches the §4 row. The `why` is accurate: the lecture has the orbit equation for a central force, "Kepler orbits close", non-closing epicyclic orbits in discs, and luminosity–velocity relations. "to study the mass of disc galaxies" is a little loose (Tully–Fisher links luminosity to rotation speed through a mass-to-light ratio), which is acceptable.
- Info: 8.01 `newtons-second-law-circular-motion` derives Kepler's third law from Eq. (9.2.7) and is a closer university match; consider adding it.
- `towards: false` is correct (2.13 is the block's last lesson and has `towards: true`). The callout's claims about 2.13 (weighing the Sun with the Earth's year and the Galaxy with the Sun's orbit) match that page's sections.

## Licensing and AI terms
- Copying: a 6-word-run comparison against the Ch. 25 and Ch. 9 text and both MacTutor biographies found only standard statements of the laws ("sweeps out equal areas in equal times", "with the Sun at one focus", "the square of the period is proportional to the cube of …"). No copied sentences.
- Figures: both graphs are `<Plot>`s generated from formulas; no MIT figure is used (Ch. 25 Fig. 25.12, the Ghez orbits, is not used). Ch. 25 and Ch. 9 carry no "rights reserved", "courtesy" or "excluded" notice (checked by grep).
- Worked examples and quiz: Mars, third-law test, ISS and all quiz items are the page's own (MIT Example 25.1 is symbolic; quiz 3 is a different numeric case). The geostationary example is MIT's Example 9.1 (row 2).
- No Siyavula branding (Siyavula not used). NASA: no insignia; NASA pages are cited by title. "NASA's International Space Station Facts and Figures page says …" cites a page as a source consulted, not "according to NASA"; acceptable (info: "The International Space Station Facts and Figures page gives …" would be even safer). No ESO text. MacTutor (CC BY-SA 4.0) is used only for facts in the page's own words, as AGENTS.md allows.
- Forbidden sources: none cited or used. I opened none of them.

## Notes
- The Ch. 25 and Ch. 9 PDFs are hosted in the 8.01SC Fall 2016 course but their footers say "8.01 Classical Mechanics, Spring 2022". The page's source title follows the hosting course, like other site pages. Info only.
- Uncertain: the PhET third-law screen controls (not run).

## Resolution (2026-11-20, by the page author)

1. Jupiter gap: the third-law check now says "Part of the small gap for Jupiter is real", and after Newton's form the page says that M + m changes T² for Jupiter by about 0.1%, most of the gap, the rest coming from the other planets' pulls and rounding in the tables. New calcs entry `jupiter-mass-gap` (0.095%).
2. Geostationary example: replaced by the page's own worked example "A satellite that hangs above Mars" (NASA Mars Fact Sheet: mass 0.64169 × 10²⁴ kg, radius 3389.5 km, sidereal rotation 24.6229 h; r ≈ 2.04 × 10⁷ m, about 17 000 km up; check against NASA's GM and by two speed routes). The geostationary orbit is now a short paragraph that quotes MIT Example 9.1's radius (4.22 × 10⁷ m) and keeps the sidereal-day explanation. Mars Fact Sheet `location` updated; calcs entries `mars-bulk` to `mars-tenth-mass` added, the old `geo-r3`/`geo-r` removed.
3. "Tycho set him to work ... fitted worst" replaced by MacTutor's own claim: "Kepler was soon working on the hard problem of the orbit of Mars".
4. "before he found the ellipse" dropped.
5. Earth mass now 5.9722 × 10²⁴ kg as in lesson 2.11; GM = 3.986 × 10¹⁴ m³/s² on the page and in all calcs inputs (ISS results unchanged).
6. Now "The torque of lesson 2.10 gives the answer, and the MIT notes make this step in Sec. 25.3."
7. au is now "very nearly the semi-major axis of the Earth's orbit" (no source for the 2012 definition cited, so the exact value is not quoted).
8. No change (standard statements, attributed).
9. Changed to "He could not explain **why** they hold."
Calcs: added `tycho-twenty-years`, `tycho-arcminutes`, `kepler-thousand-pages`, `geo-five-radii`, `s02-millions`, `iss-period-min` (92.8 min); NASA Sun Fact Sheet added to `references` as `sunfact` and cited by `jupiter-mass-ratio`; `card-geo-radius` is now `origin: mit` from MIT's 4.22 × 10⁷ m, matching `geo-mit`. `pytest tests/calc -k keplers`: 89 passed; `content:check`: no message for this page, 0 errors.
