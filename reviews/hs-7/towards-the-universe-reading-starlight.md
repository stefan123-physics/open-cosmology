---
page: content/year-0/hs-7/towards-the-universe-reading-starlight.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec01.pdf (read, pdftotext; printed page numbers)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec08.pdf (read, p. 50)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9b67a2c6895709ae6d74037a4e82ec24_wuPEmfon9lg.pdf (8.286 Lecture 4 transcript, read pp. 8-10)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/cb950383a94305d1894010ba577ec20b_45RQrWHzovU.pdf (8.286 Lecture 5 transcript, read p. 6)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (8.286 Lecture 17 transcript, read pp. 17-20)
  - https://imagine.gsfc.nasa.gov/ask_astro/cosmology.html (read; answers 980301d and 010902a)
  - https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-cosmological-redshift (read; last updated 2024-09-17)
  - https://science.nasa.gov/universe/overview/ (read; last updated 2026-08-12)
  - https://lambda.gsfc.nasa.gov/product/cobe/firas_overview.html (read)
  - https://science.nasa.gov/learn/basics-of-space-flight/chapter6-1/ (read, Inverse Square Law)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/doppler-effect/06-doppler-effect-03 (read; CC BY footer; CCBY row 489 of docs/siyavula-licences.tsv)
  - https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable2.htm (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read; last updated 2024-05-09)
verdict: needs-changes
---

# Review: Towards the universe: what starlight tells us (7.11)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "The same atoms everywhere", 2nd paragraph | (physics) Bohr/Rydberg hydrogen wavelengths are R·(1/n² − 1/m²): the *ratios* of hydrogen's lines are pure numbers, independent of the electron's charge and mass, Planck's constant etc. A change in those constants would scale every hydrogen line by the same factor, which looks exactly like an extra redshift. | "The pattern of a hydrogen atom's lines follows from its energy levels ... set by the charge and mass of the electron, Planck's constant and the laws of electricity. If any of those were different over there, the pattern would be different." | Base the argument on comparing *different* elements (and the fine splittings of lines): hydrogen, helium, sodium and calcium lines all shift by the same 1 + z, which would not happen if the constants differed. E.g. "If those were different over there, the lines of different elements would shift by different amounts relative to each other. They do not: every line of every element is shifted by the same factor." |
| 2 | warning | "The galaxies' redshift", history paragraph | 8.286 L4 transcript p. 9 (reading3): "Hubble was using largely his own data. Lemaitre was using other people's data mostly Hubble's actually." No cited source mentions Lowell Observatory or that Hubble's velocities were Slipher's. NASA Ask 980301d: Slipher "In 1912 ... noticed that virtually every spiral galaxy he observed had a redshifted spectrum". | "at the Lowell Observatory"; "Hubble, using mostly his own distances and velocities measured largely by Slipher" | Historically the page is right (most of Hubble's 1929 velocities were Slipher's) and Guth's "largely his own data" is a simplification, but the page now differs from its only cited source without saying so (rule 4) and its two extra facts have no source. Either add a §2.0 source (a NASA page on Slipher/Lowell) to `references`, or add a bracket note: "(Guth says Hubble used largely his own data; that was true of the distances, while most of the velocities were Slipher's)". |
| 3 | warning | "Hydrogen and helium everywhere", 1st paragraph; flashcard "Hydrogen and helium" | NASA Ask 010902a gives only "about three quarters hydrogen, one quarter helium ... (by weight)", with no statement where it is measured. (physics) Old, cool stars show no helium lines in their spectra; the helium fraction is measured mainly from the emission lines of hot gas clouds (ionised hydrogen regions, especially in small, metal-poor galaxies). | "Measured in the oldest stars and in clouds of gas in galaxies near and far"; flashcard "Spectra of old stars and gas clouds show ..." | Say "measured in glowing clouds of gas in our own and in distant galaxies" (drop "oldest stars"), or say that old stars give the hydrogen/heavy-element side only. |
| 4 | warning | Formula "Flux at a distance d", `at` | 8.902 L1 p. 4 eqs. (3)-(4) show F(r1)·4πr1² = F(r2)·4πr2² and F ∝ 1/r²; the formula F = L/(4πD²) itself is written on p. 8, above eq. (15) ("F_app = L/4πD²"). | at="eqs. (3)–(4), p. 4" | at="eqs. (3)–(4), p. 4 (F ∝ 1/r²) and p. 8 above eq. (15) (F = L/4πD²)". |
| 5 | info | "The oldest light", 2nd paragraph | 8.286 L17 pp. 18-19: recombination (half the hydrogen) at about 4000 K; decoupling, colder, at about 3000 K, about 380 000 years. | "at about 3000 K, some 380 000 years after the Big Bang, the electrons were bound into atoms and the light could travel freely" | Acceptable simplification (by 3000 K most electrons are bound). Optionally: "below about 4000 K the electrons were bound into atoms, and by about 3000 K ... the light could travel freely". |
| 6 | info | reading2 `location` | L17 p. 18: "mostly hydrogen, about 20% helium" | body uses NASA's one quarter by mass; the location text quotes Guth's 20 % | The body does not use Guth's figure, so there is no conflict on the page. Remove "about 20 % helium in Guth's round words" from the location, or add "(the page uses one quarter by mass, NASA)", so the credits do not show two values. |

## Formulas and citations
- `F = L/(4πd²)` (cite mit): physics right; see finding 4 for the place.
- `L = 4πR²σT⁴` (mit8902l8, p. 50 above eq. (226)): confirmed; the notes write T_eff, the page's "surface temperature" matches.
- `R = sqrt(L/(4πσT⁴))` (mit8902l8, "solved for R"): correct algebra (calcs `radius-identity`).
- `z = (λobs − λem)/λem, v ≈ cz` (mit, eqs. (24) and (26), p. 11): confirmed.
- `v = H₀d` (mit, eqs. (25)–(26), p. 11, z ≪ 1): confirmed.
- `T_then/T_now = 1 + z` (reading2 p. 18 with L5 p. 6): L17 p. 18 "the temperature just falls like 1 over the scale factor"; L5 p. 6 "ratio of wavelengths, or ratio of scale factors, is defined to be 1 plus z". Confirmed; page numbers are the printed footers.
- Reading3 (L4 pp. 8-9): Lemaître 1927, in French, other people's data, knew the linear law theoretically; Hubble 1929 claimed the data justified v ∝ r. Confirmed, apart from finding 2.
- 8.902 L1 pp. 11-12 (galaxy spectrum as the sum of stellar black bodies, eq. (27)): confirmed. "plus the glow of its gas clouds" is not in the notes but is standard.
- NASA Ask 980301d (submitted 1997-09-22) and 010902a (submitted 1997-11-13): wording confirmed; the page's "(1997)" is right. 010902a gives the fraction "by weight": the page's "by mass" matches.
- nasaRedshift (2024-09-17), nasaOverview (2026-08-12), FIRAS (2.725 ± 0.002 K), nasaInverse, nasaSun (695 700 km, 382.8 × 10²⁴ J/s, 2024-05-09), NIST (4861.3 Å, 6562.85 Å air): all confirmed as described.
- siyavula63: CC BY footer, row 489 of docs/siyavula-licences.tsv is CCBY. It gives v = H₀d and "1 Mpc = 3.3 million light years", but its H₀ is 67.15 (Planck 2013), **not 70**: see calcs notes below.

## Arithmetic and answer checks
All recomputed independently; `pytest tests/calc -k reading-starlight`: 36 passed.
- Ex. 1: 2.9e-3/725e-9 = 4000 K ✓; Δλ = −0.11 nm, v = 3e5 × (−0.11/656.3) = −50.3 km/s ✓; 3.0e17 m / 9.46e15 = 31.7 ly ✓; L = 4π(3.0e17)²(2.0e-9) = 2.26e27 W ✓, /3.828e26 = 5.9 ✓; σT⁴ = 1.4515e7 W/m² ✓; R = sqrt(2.262e27/(4π × 1.4515e7)) = 3.52e9 m ✓, /6.957e8 = 5.06 ✓. A 4000 K star of 6 L☉ lies well above the main sequence (a main-sequence star at 4000 K has about 0.1 L☉): "small giant" is fair. Check: apparent bolometric magnitude ≈ 2.8, a plausible naked-eye star.
- Ex. 2: 15.8/486.1 = 0.03250 ✓; 9751 km/s ✓; 656.3 × 1.0325 = 677.6 nm ✓; 9750/70 = 139.3 Mpc ✓; × 3.3e6 = 4.6e8 ly ✓ (with the exact 3.26 Mly: 4.5e8, inside "about"). Light-travel time ≈ 450 Myr, so "roughly 460 million years ago" is fine.
- CMB: 3000/2.725 = 1100.9 ✓; 2.9e-3/3000 = 967 nm ("970") ✓; × 1100.9 = 1.064 mm = 2.9e-3/2.725 ✓. Plot: 2.725 × 2 = 5.45 K ("about 5.5") ✓; 2.725 × 1101 = 3000 K ✓.
- H/He: 75/(25/4) = 12 ✓ (with 4.0026/1.008 = 3.97: 11.9).
- Quiz 1: 5000 K ✓, "a little cooler than the Sun" (5772 K) ✓; other choices wrong ✓.
- Quiz 2: 26.2/656.3 = 0.0399, v = 11 980 km/s ✓; others wrong ✓.
- Quiz 3: same F, 3× d → 9× L; same T → 9× area → 3× R ✓; others wrong ✓.
- Quiz 4: answer and explanation right; distractors wrong ✓.
- Quiz 5: 12 ✓; others wrong ✓.
- Flashcards: all true (subject to finding 3 for the last).
- Info: ex. 1 gives the observed line to 0.01 nm (656.19) but the laboratory line to 0.1 nm (656.3; NIST 656.285 in air). With 656.285 the speed would be −43 km/s. Write the lab value as "656.30" for this example, or round the observed one to 656.2 and accept a coarser speed.

### Calcs file
- **Quiz tags (writer's open point):** `quiz2-z` and `quiz2-speed` need `quiz: 1`, `quiz3-radius` needs `quiz: 2` (0-based, as the other entries and other hs-7 calcs files use). warning.
- `wien-constant`: source `{cite: mit8902l8, at: 'recap of lesson 7.6'}`, but 8.902 Lecture 8 does not contain Wien's law (searched). Cite the source lesson 7.2 / 7.6 used (8.286 slides, slide 22, or 7.2's `wien` reference), or make it `origin: page-own` with a note. warning.
- `h0`: source `siyavula63` "Hubble's law", but Siyavula 6.3 quotes 67.15, not 70. 70 is the `example` role in calcs/values.yaml (and lesson 5.13's round value). Point the source at values.yaml/lesson 5.13, or say "v = H₀d (value 70 is the round example value)". warning.
- `mpc-ly`: `origin: mit` but the source is Siyavula; set the origin to match the other non-MIT facts. info.
- `ex1-light-years`: source `{cite: mit, at: 'conversion with 1 light-year = 9.46e15 m (lesson 1.11)'}`: the 8.902 notes are not where this comes from; cite lesson 1.11's source or make it page-own. info.
- `t-cmb` 2.725 K: in calcs/values.yaml as "Guth 2013: the value used for calculations in 8.286"; the page attributes it to COBE FIRAS, which also gives 2.725 ± 0.002 K. Consistent. H₀ = 70 matches the `example` role. No other values.yaml quantity (age, Ω, n_s, σ₈) is quoted.

## Only earlier terms
- Wien's law and black body (7.2), L = 4πR²σT⁴, HR diagram and main sequence (7.6), spectrograph, line strengths and helium in the Sun (7.5), energy levels (7.4, reached through the 7.5 prerequisite), helium four times as heavy (7.7), inverse square law (5.5 `sound`, eq. I = P/4πr²), z, v ≈ cz, H₀, megaparsec, 1 + z as growth factor (5.13), light-year (1.11): all introduced earlier. ✓
- "flux" is new, defined on the spot ✓. "Recombination/decoupling" not used by name ✓. "luminosity" is from 7.6 ✓.
- **Parallax (writer's open point):** only a forward pointer; both examples hand the reader the distance, so nothing depends on it. Acceptable. Name the lesson: "(for nearby stars from parallax, lesson 8.10)". info. It cannot (and need not) be a prerequisite.
- The page re-tells that most helium was made in the first minutes and that stars turn hydrogen into helium as "Block 8". Lesson 7.7's cosmology callout already says the first (pointing to 8.14), and 7.6 already says main-sequence stars fuse hydrogen into helium. Suggest "(lesson 7.7; lesson 8.14 shows how)" and "(lesson 7.6; lesson 8.5)". info.

## Coverage
- §4 row 7.11: using spectra to measure stellar radius, composition and motion, plus the Doppler shift; leads to `8-902/galaxy-observations`, `8-286/cosmological-redshift`. Temperature, composition, motion, luminosity and radius are all covered, plus galaxies, Hubble's law, the CMB and H/He: good VWO-level synthesis.
- Not covered: line widths (rotation, pressure/density, luminosity class). Not essential at this level. info.
- Links back rather than re-teaching: the table and text point to 7.2, 7.4, 7.5, 7.6, 7.7, 5.5 and 5.13; Wien, Stefan–Boltzmann and v = cz are restated in one line each, with the lesson named. ✓ (7.3 photoelectric is not needed here.)

## Where this leads
- `towards: true` ✓ (block's last lesson).
- leadsTo 8.902 Lecture 1 → `galaxy-observations` ✓: flux ∝ 1/r², magnitudes, galaxy types, Schechter luminosity function, z with v = H₀d ≈ cz, population synthesis: the `why` matches the notes.
- leadsTo 8.286 Lecture 5 → `cosmological-redshift` (and `newtons-static-universe`, also lecture 5) ✓: L5 p. 6 has 1 + z = a(t_O)/a(t_S). The `why` adds "the same idea that turns the 3000 K glow ... into today's microwave background", which is in L17, not L5; it is phrased as the idea, not a claim about L5's content, so acceptable.
- Cosmology claims (CMB as image at decoupling, T ∝ 1/a, 380 000 years, 1 + z ≈ 1100, oldest light, three quarters/one quarter by mass, helium in first minutes) are correct and supported.

## Licensing and AI terms
- No copied sentences found: compared with NASA Ask ("virtually every spiral galaxy he observed had a redshifted spectrum" → page "almost all of them were redshifted"), NASA Overview, FIRAS, Siyavula 6.3 and the 8.902/8.286 text. ✓
- No figure copied; the only graph is a Plot generated from T = 2.725(1 + z). ✓ The 8.902 L1 "Courtesy of ..." images (Andromeda, M87) and the L8 "All rights reserved" figures are not used. ✓
- Worked examples and quiz questions are original; Siyavula 6.3's examples are not reused. ✓
- No Siyavula branding. ✓ NASA: cited by title, URL and date; no insignia; "as measured by NASA's COBE satellite" states a fact about the mission, not "according to NASA" or a NASA review. ✓
- No ESO text. No forbidden source cited or used (no OpenStax, Khan, CK-12, IOPSpark, Wikiwijs, Wikipedia, Feynman, Tong); none was fetched for this review. ✓
- No em dashes in the page. ✓

## Notes
- **NASA Ask 1997 (writer's open point):** acceptable. The fraction "about three quarters hydrogen, one quarter helium by weight" is still the standard figure (primordial helium mass fraction about 0.245-0.25), the page states the 1997 date, and the newer NASA Universe Overview gives no fraction. Keep it unless a current NASA page with the figure is found.
- **Guth's "about 20 % helium" vs one quarter (writer's open point):** the body does not use Guth for the composition, so rule 4 is not triggered on the page itself; only the reading2 location shows both (finding 6). Keep NASA's one quarter by mass.
- References `nasaAsk`, `nasaRedshift`, `nasaOverview`, `firas`, `siyavula63`, `nistH`, `nasaSun`, `nasaInverse` and `reading1`/`reading3` are not named by any `cite=` in the body (only `mit`, `mit8902l8`, `reading2` are); the prose facts they support carry no inline pointer. Consistent with other High School pages; info.
- `npm run content:check`: no error or warning for this page apart from "no review file yet". The run shows 4 errors in data/symbols.json for meanings scoped to `the-nucleus` (c, M, E, m_n), from the uncommitted edit of the-nucleus.mdx, not from this page.

## Resolution (2026-11-20, by the page author)

1. (error, "The same atoms everywhere") Fixed. The argument no longer says a change in the constants would change the hydrogen pattern. It now says that each element's lines follow from its energy levels, that different constants would make the lines of hydrogen, helium and calcium shift by different amounts compared with each other, and that in a distant galaxy every line of every element is shifted by the same factor 1 + z, so once that stretch is taken out the lines sit where they do on Earth.
2. (warning, history) Fixed by following the cited source: "at the Lowell Observatory" removed, and Hubble's 1929 paper now uses "largely his own data, as Guth puts it in 8.286" (8.286 Lecture 4 transcript p. 9). Slipher's redshifts from 1912 stay (NASA Ask 980301d); the unsupported claim that Hubble's velocities were Slipher's is gone.
3. (warning, helium measured in the oldest stars) Fixed. The body now says "Wherever astronomers can measure it, in our own galaxy and in galaxies far away", with no claim about old stars or gas clouds (no cited source says where the fraction is measured). Flashcard "Hydrogen and helium" now begins "Spectra show that ...".
4. (warning, flux formula location) Fixed: at= now adds "F = L/(4πD²) itself on p. 8, above eq. (15)" (checked in the local copy of the 8.902 Lecture 1 notes: printed page 8, F_app = L/4πD² above eq. (15)).
5. (calcs) wien-constant and the three Wien calculations (ex1-temperature, cmb-peak-then, quiz1-temperature) now cite the new reference `wien` (MIT 8.901 Spring 2006 Problem Set 2, Problem 1(c), the source lesson 7.2 uses), added to the page's references. h0 now says that 70 km/s/Mpc is the round example value of calcs/values.yaml (role "example", as in lesson 5.13), not Siyavula's 67.15, with origin page-own. Quiz tags: the harness only accepts a tag when it can read the matching number from a choice. Quiz 2's choices write "12\,000" (the harness reads it as 12 and 000) and its z is not a choice, and quiz 3's choices are words, so quiz2-z, quiz2-speed and quiz3-radius stay without a tag (tried; the harness fails them). Quizzes 1, 4 and 5 are tagged.
6. (info, calcs mpc-ly and ex1-light-years) mpc-ly origin set to later-data, like the file's other non-MIT facts. ex1-light-years now cites siyavula63 (Figure 6.3 defines the light-year as the distance light travels in a year) and says 9.46 × 10¹⁵ m is our own computation, as in lesson 1.11.
7. (info, laboratory line) Fixed: the example's laboratory line is written 656.30 nm (problem text and the step "Motion"); calcs ex1-shift and ex1-speed updated.
8. (info, recombination and decoupling) Done: "Below about 4000 K the electrons were bound into atoms, and by about 3000 K, some 380 000 years after the Big Bang, so few free electrons were left that the light could travel freely" (8.286 Lecture 17 pp. 18-19). New calcs fact t-recombination; t-decoupling's shown text updated.
9. (info, forward pointers) Done: "parallax, lesson 8.10"; "Stars do turn hydrogen into helium (lesson 7.6; lesson 8.5 shows how)" and "the first few minutes after the Big Bang (lesson 7.7; lesson 8.14 shows how)"; the Summary says "lesson 8.14" instead of "Block 8".
10. (info, Guth's 20 % in reading2's location) Removed from the location, so the credits show only the page's one quarter by mass.

Checks: `npm run calc:test -- -k towards-the-universe-reading-starlight`: 37 passed. `npm run content:check`: 0 errors, no warning for this page. No new symbols. Status set to reviewed.
