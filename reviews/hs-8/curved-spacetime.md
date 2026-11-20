---
page: content/year-0/hs-8/curved-spacetime.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture16_gr/ (read; PDF b24be737…_lecture16_gr.pdf, 33 slides; slides 11–13, 16–31 read as rendered images because most are scanned; deck titled "Lecture 16", slide 5)
  - https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-gravitational-lenses/ (read; "Updated: Aug 06, 2026")
  - https://science.nasa.gov/solar-system/10-things-einstein-got-right/ (read; "Last Updated Mar 19, 2025")
  - https://www.jpl.nasa.gov/news/gravitational-waves-detected-100-years-after-einsteins-prediction/ (read; first request blocked with 403, second succeeded)
  - https://ntrs.nasa.gov/api/citations/20120010317/downloads/20120010317.pdf (read; 93 slides; slides 9 and 27)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read; GM 0.39860 × 10⁶ km³/s², volumetric mean radius 6371.000 km, "Last Updated: 15 November 2024")
  - Earlier lessons on disk (2.5, 2.9, 2.11, 2.12, 3.11, 5.8, 5.13, 7.1, 8.1, 8.2) for "only earlier terms"; content/year-2/8.033 for leadsTo
verdict: needs-changes
---

# Review: Gravity as curved spacetime

The physics, formulas and numbers are sound and every number recomputes. Two errors: the "according to NASA" phrasing, and "quasar" used without explanation. The rest are warnings about citation places and wording.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "Gravitational lensing and the 1919 eclipse", first paragraph | Reviewer rule: no "according to NASA" phrasing | "According to NASA's page on Hubble's gravitational lenses, the British astronomers …" | State the history plainly and cite in brackets as elsewhere on the page: "The British astronomers … tested this during the total solar eclipse of 29 May 1919 (NASA, *Hubble Gravitational Lenses*)." |
| 2 | error | Same section: "The first double image of a quasar was seen in 1979" | NASA "10 Things", item 2: a quasar is "a very bright object at the center of a galaxy that involves a supermassive black hole" | "quasar" is not explained here or in any earlier lesson | Explain it plainly at first use, e.g. "of a quasar, the very bright centre of a distant galaxy," |
| 3 | warning | Worked example "How much do GPS clocks gain from gravity?", step "Together with the speed effect"; also the writer's note | Recomputed: 45.66 − 7.20 = 38.46 μs/day; NASA GPS slide 27: "~38 microseconds per day" (its offset −4.46475 × 10⁻¹⁰ × 86 400 s = 38.6 μs) | "The net gain is 46 − 7 = 39 microseconds a day … close to our rough estimate" | Subtracting rounded values gives 39; the unrounded result is 38.5, which already matches 38 and which the Plot point shows (38.5). Write "45.7 − 7.2 = 38.5, about 38 microseconds a day", and update `gps-net` (expected 38.5) |
| 4 | warning | Formula "Time gained by the higher clock", `at` "slides 21–22 (clocks lower down run slow)"; and the redshift formula's `at` "slides 21–22" | Slide 21 is a title slide only ("EP implication 2: Gravitational redshift"); slide 22 is Pound and Rebka (22.6 m, 5 × 10⁻¹⁵). Neither states that lower clocks run slow or gives gh/c². NASA GPS slide 27 does: "a clock at rest in a lower gravitational potential runs slower"; slide 30's Newtonian metric implies it | Cites slides 21–22 for the clock statement | Cite slide 30 (and/or `gps` slide 27) for "clocks lower down run slow", and say in the `at` that gh/c² is worked out on this page, as the redshift formula's `at` already does |
| 5 | warning | "Ripples in spacetime": "They are later developments of the theory." | JPL: gravitational waves were "predicted" by Einstein 100 years before 2015 (1916) | Unclear sentence; may read as if gravitational waves were added to the theory later | Delete, or write "Einstein predicted them in 1916, but they are so weak that it took a century to detect them." |
| 6 | warning | "Gravitational lensing…", last sentence: "Gravity even slows light down: radio signals … arrive late" | NASA "10 Things", item 9: "a delay in the total roundtrip time because of the Sun's gravity" | "slows light down" | Lesson 8.1 taught that light always moves at c; a local measurement still gives c. Write "Gravity even delays light: radio signals … take longer to arrive" |
| 7 | warning | "Spacetime is curved" (and the title) | Slide 11: "Space and time unified into 4D spacetime" | "spacetime" is used without being defined; no earlier lesson (8.1–8.3) uses the word. The only explanation comes later, in the rubber-sheet list ("three of space and one of time") | Define it at first use: "space and time together, a four-dimensional whole (slide 11)" |
| 8 | info | "Newton's gravity in one minute": "By 2000 the tests reached about one part in 10¹³ (slide 18)" | Slide 18 graph: Eöt-Wash II bound near 10⁻¹² with its arrow towards a few × 10⁻¹³ (late 1990s); the "Lure" band reaches about 10⁻¹³ near 2000 | "about one part in 10¹³" | Acceptable as "about"; "a few parts in 10¹³" would match the graph better |
| 9 | info | Plot caption and quiz 3 | — | The Earth's spin is ignored (said so) | Fine. With the spin the crossover is a little lower (about 3000 km); no change needed |
| 10 | info | "Uncorrected, that would move your position by about 11 km a day." | GPS slide 27: "~11 km range error" | "move your position" | Correct enough; "range error" is the distance to each satellite. Optional: "would put your position off by kilometres within a day" |

## Formulas and citations
- **a = GM/r²** (`mit`, slide 16): supported (slide 16: F = ma with F = GmM/r² gives a = GM/r², mass-independent if inertial = gravitational mass).
- Galileo, Eötvös 1890, independent of mass and composition, Einstein's "telling us something", path fixed by position and velocity: slide 17. Supported.
- 10⁻¹³ by 2000: slide 18, see finding 8.
- Equivalence principle (1911), weak and strong forms, small elevator and short experiment: slide 13. Supported. The page's "no experiment in a small closed laboratory" for "no local experiment" is right.
- Light bending: slides 19–20 (title slides "Gravity bends light", "Lensing"); the rocket argument is the page's own, as the text says. OK.
- **z ≈ gh/c²** (`mit`, slides 21–22): topic supported, formula derived on the page (the `at` says so). Rocket argument checked: v = g(h/c), z ≈ v/c (lesson 5.13), so z ≈ gh/c². Correct.
- **Δt ≈ (gh/c²) t** (`mit`, slides 21–22): correct physics, citation place weak (finding 4).
- Pound and Rebka, 1960, Harvard tower, gamma rays up and down: slide 22. Supported. (Slide 22's "5 × 10⁻¹⁵ over 22.6 m" is the up-minus-down difference 2gh/c²; the page does not quote it, so no conflict.)
- **Δt/t ≈ (GM/c²)(1/R − 1/r)** (`mit`, slide 30 with φ = −GM/r from slide 12; writer's note): slide 30 gives the Newtonian metric dτ² = (1 + 2φ)dt² − dx² − dy² − dz² (c = G = 1). For a clock at rest, dτ/dt ≈ 1 + φ/c², so the rate difference between r and R is (φ(r) − φ(R))/c² = (GM/c²)(1/R − 1/r). Correct, and the `at` says the slow-clock, weak-field form is the page's own. Note: slide 31 repeats the metric with (1 − 2φ), a sign slip in the deck; the page rightly follows slide 30.
- Small-height limit gh/c²: correct (calcs identity).
- "matter curves spacetime … straight (along geodesics) … appear deflected/accelerated (gravity)": slide 11. Supported.
- Rubber sheet and its limits: no source; standard and correct. "The Newtonian metric on slide 30 changes only the time part": true of slide 30.
- Gravitational waves, "space can vibrate": slides 7–8. Supported.
- NASA Hubble lenses: Eddington, Dyson, Crommelin; 29 May 1919; Príncipe and Sobral; photographs compared with night photographs; doubts and later confirmation; Abell 370 magnifying galaxies "too faint for Hubble to see directly"; most lensing mass is dark matter. All supported.
- NASA 10 Things: 1979 double quasar (item 2), Mariner VI and VII, Viking, Cassini radio delays (item 9), Gravity Probe B launched 2004, Earth "dragging space-time around it" (item 10). Supported. The page's "spinning Earth" is physically right (frame dragging comes from the rotation).
- JPL: 14 September 2015, both LIGO detectors, about 29 and 36 solar masses, 1.3 billion years ago, 4-km arms, length change "smaller than one-ten-thousandth the diameter of a proton". All supported.
- NASA GPS deck: slide 9, about 20 200 km; slide 27, about 38 μs/day and about 11 km range error. Supported.
- NASA Earth Fact Sheet: GM = 0.39860 × 10⁶ km³/s² = 3.986 × 10¹⁴ m³/s², R = 6371.000 km. Supported.

## Arithmetic and answer checks
Recomputed independently (Python); `pytest -k "curved-spacetime"` on the calcs passes (with matter-waves: 68 passed).
- Lift: t = 1.0 × 10⁻⁸ s; drop 4.905 × 10⁻¹⁶ m; 10⁻¹⁰ / 4.9 × 10⁻¹⁶ = 2.04 × 10⁵, "some 200 000": OK.
- Skyscraper: 9.81 × 500 / 9.00 × 10¹⁶ = 5.45 × 10⁻¹⁴; × 3.156 × 10⁷ = 1.72 × 10⁻⁶ s: OK.
- GPS: GM/c² = 4.429 × 10⁻³ m; 1/R − 1/r = 1.1933 × 10⁻⁷ m⁻¹; product 5.285 × 10⁻¹⁰; × 86 400 = 45.7 μs ≈ 46: OK. Uniform g: 190.2 μs, ratio 4.17, "four times": OK. Speed: GM/(2rc²) × 86 400 = 7.20 μs: OK. Net 38.46 μs (finding 3).
- Plot: coefficients 382.66 and 191.33 check; at h = 20.2 the net is 38.46 (point 38.5 OK); at h = 0, −30.0, and at h = 40, +47.7: inside the range −35 to 60. Crossover r = 1.5R, h = 3186 km ≈ 3200 km: OK.
- Quiz 0: answer 2 correct; free fall wrong (the ball would float).
- Quiz 1: 2.18 × 10⁻¹⁴ → 2.2 × 10⁻¹⁴ correct; 6.5 × 10⁻⁶ (÷c once) explained; 2.2 × 10⁻¹² has no explanation and no calcs entry (info: a factor-100 slip; add a distractor entry or explain it).
- Quiz 2: answer 1 correct; explanation true.
- Quiz 3: ISS at 400 km: gravity +3.55 μs, speed −28.3 μs, net −24.7 μs, "lose about 25": answer 1 correct.
- Quiz 4: answer 1 correct; numbers as JPL.
- Flashcard: g/c² = 1.09 × 10⁻¹⁶ per metre: OK.
- "more than three centuries" since Newton (1687): 339 years, OK.

## Only earlier terms
- Present earlier: Newton's law of gravitation and g weakening with height (2.11), apparent weight in a lift and weightlessness (2.5), the ISS falling round the Earth (2.9, 2.12), W = GMm(1/R − 1/r) (3.11, as a Formula), v = √(GM/r) (2.12), z ≈ v/c (5.13), gamma rays (5.8), atom size (7.1), γ ≈ 1 + v²/2c², atomic clocks and the 7 μs GPS speed effect (8.2), dark matter and galaxy clusters (2.12, 2.13).
- **quasar**: never introduced (finding 2, error).
- **spacetime**: used before it is defined (finding 7).
- **black holes**: mentioned in 2.12 ("a giant black hole") without definition; here used for the LIGO source, with "Black holes are the next lesson". Acceptable as a forward pointer (info).
- **metric** ("Newtonian metric"): named as the university course's term, not explained. Acceptable at this level (info); one clause such as "the formula that gives the rate of clocks at each place" would help.
- Hubble (the telescope): introduced in 5.8/5.10.

## Coverage
- §4 row 8.8: equivalence principle, gravity as curved spacetime, light bending, gravitational time dilation, lensing, gravitational waves; no PhET (none listed). All covered.
- Not covered: Mercury's perihelion as a test of general relativity (info; 8.033 lecture 25 covers it).

## Where this leads
- 8.033 lecture 17 (equivalence-principle-metrics): matches the `why` (weak and strong equivalence principle, the three implications, metrics including the Newtonian metric). OK.
- Info: 8.033 lecture 26 (lensing-evidence-for-gr, "Light bending, the evidence for general relativity …") fits the lensing, Shapiro delay and 1919 parts of this page; consider adding it.
- `towards: false` correct.

## Licensing and AI terms
- "According to NASA" phrasing: finding 1 (error). The other NASA mentions are bracketed citations ("(NASA, '10 Things')", "(NASA JPL, 2016)") or name a document ("A 2012 NASA Goddard presentation on GPS gives …"); those are fine.
- No sentence copied. Closest: the eclipse doubts ("Some astronomers doubted whether the measurements were precise enough, but later observations confirmed the bending") against NASA ("Some astronomers questioned the validity of their results … many observations over the years have since confirmed"): rewritten, and NASA text is public domain in any case.
- No figures copied (the slides' Figure by MIT OCW, the Science image on slide 8 marked "Used with permission", and NASA images are not used; the Plot is generated).
- Worked examples and quiz questions are the page's own; the slides have no numerical examples on these topics.
- The 8.033 resource page has no "excluded from our Creative Commons license" notice for the text used; slides 4 and 8 carry third-party image notes, and neither image is used.
- No NASA insignia. No forbidden source cited.

## Notes
- The writer's two notes were checked: the clock formula is correctly derived from slide 30 with φ from slide 12 (the `at` is honest); the GPS figure should be 38.5, not 39 (finding 3).

## Resolution (2026-11-20, by the page author)

1. Fixed. The 1919 eclipse history is stated plainly, with the citation in brackets at the end of the sentence: (NASA, "Hubble Gravitational Lenses").
2. Fixed. "a quasar, the very bright centre of a distant galaxy," at first use.
3. Fixed. The step now reads "With the unrounded values the net gain is 45.7 - 7.2 = 38.5 microseconds a day", matching the Plot point. Calcs `gps-net` now computes the net from GM, R, r and c (expected 38.5e-6 s, unrounded 38.46).
4. Fixed. The clock formula's `at` now cites slide 30 (Newtonian metric: a clock lower in the potential runs slow), says the GPS presentation states the same on its slide 27 (checked: "a clock at rest in a lower gravitational potential runs slower"), and says the gh/c² form for a small height is worked out on the page. The calcs entries for clock rates (tower, GPS uniform-g, quiz 1, flashcard) now cite slide 30; the redshift formula and its rocket identity keep slides 21-22 (gravitational redshift, Pound and Rebka), with the page-own derivation already stated.
5. Fixed. Replaced by "They are a prediction of Einstein's general theory of relativity of 1915, but they are so weak that it took a century to detect them (NASA JPL, 2016)." The JPL page says the detection "confirms a major prediction" of the 1915 theory; it gives no year for the prediction itself, so 1916 is not stated.
6. Fixed. "Gravity even delays light: radio signals ... take longer to arrive".
7. Fixed. The section "Spacetime is curved" now opens by defining spacetime (special relativity joined space and time into one four-dimensional whole: three directions of space and one of time, slide 11, checked).
8. Fixed. "a few parts in 10^13" (slide 18 graph checked: Eot-Wash II arrow and the Lure band near 2000); calcs `wep-precision` value 3e-13.
9. No change needed.
10. Fixed. "would make the measured distance to each satellite wrong by about 11 km after one day" (range error, slide 27).
Info notes not acted on: black holes forward pointer and "metric" left as they are; Mercury's perihelion and a second leadsTo (8.033 lecture 26) not added.
Extra: quiz 1 explanation now explains the distractor 2.2 x 10^-12 (height in centimetres), with calcs entry `quiz-200m-distractor-cm`.

Checks: `npm run calc:test -- -k curved-spacetime`: 34 passed. `npm run content:check`: 0 error(s), no message for curved-spacetime. No em dashes on the page.
