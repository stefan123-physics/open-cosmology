---
page: content/year-2/8.033/evidence-for-black-holes.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture22_bh2/ (read: slide PDF, deck "Lecture 22", 30 slides; text extracted with pdftotext and every slide rendered as an image and inspected; no transcript exists)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture23_bh3/ (read for context only: the next deck, to check what the next lecture assumes)
  - https://chandra.harvard.edu/photo/2004/rxj1242/ (read, to identify the image on slide 17)
verdict: needs-changes
---

# Review: The astrophysical evidence for black holes

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Supermassive black holes", bullet "a devoured star"; Summary bullet 1; flashcard 1; worked example (c) | Slide 11/13/15/29 list "devoured star incident => size less than 0.4 A.U."; slide 17 labels the picture "Star strays too close to Sagittarius A* supermassive black hole (=>size<0.4au)". The picture (illustration plus "Chandra X-ray" and "ESO Optical" panels, "Image courtesy of NASA") is NASA/Chandra's 2004 release on **RX J1242-11**, a galaxy about 700 million light years away, not Sgr A* (verified on chandra.harvard.edu/photo/2004/rxj1242). No star has been seen torn apart by Sgr A*. | States as fact that a star strayed too close to Sgr A* "in our own galaxy" and that this limits Sgr A*'s size to < 0.4 AU; example (c) builds on it. | Treat as a lecturer slip (AGENTS.md rule 4): describe the tidal-disruption event correctly (a star torn apart by the central black hole of another galaxy, RX J1242-11, seen by Chandra and ESO), and add a bracketed note that slide 17 labels it Sagittarius A*. Where the 0.4 AU figure comes from is uncertain (it fits neither object cleanly); either quote it only as "the slides' figure" without assigning it to Sgr A*, or rebase example (c) on a figure the page can source. Fix the flashcard and summary too. |
| 2 | error | "Orbits in the Schwarzschild metric", sentence after the radial equation | (not on slides) | "The last factor acts as an effective potential." | The effective potential is the whole product $(1-2M/r)(1+L^2/r^2)$ (as the Lecture 25 page says, $\tilde V^2$); the last factor alone, $1+L^2/r^2$, contains no gravity. Reword to "the product on the right acts as (the square of) an effective potential". |
| 3 | warning | "Orbits in the Schwarzschild metric", first sentence | Slide 9 lists "Orbital equations in Schwarzschild metric" as a topic; slide 27 says only "Java orbit simulator". No slide has the equations, and there is no transcript. | "...was worked on the board." | Not verifiable. Say "is not on the slides (presumably derived in class)". The next deck (lecture23_bh3, slide 4) lists "Applications of the orbital equations", which supports that they were derived in this session, but not how. |
| 4 | warning | Order of sections | Slide order: recap (1–8), topics (9), evidence part I, supermassive (10–18), exam review/song (19–25), survey (26), Java orbit simulator (27), evidence part II, stellar-mass (28–30). | Supermassive, stellar-mass (28–30), orbits (9, 27), review (19–26). | Either follow the slide order or say in the intro bracket that the page groups the two evidence parts together and puts the review last. |
| 5 | warning | Formula "Innermost stable circular orbit", `at="slide 15 ..."` | Slides 11, 13, 15 and 29 (identical) say "X-ray spectra reveal disk extending in to 6-20M!". No slide says ISCO or $r_{\rm ISCO} = 6M$. | Cites slide 15 as "the slide's 6M". | Cite the first appearance (slide 11) and phrase as: "the page's own; slide 11 quotes disks reaching 6–20 M". The 6M on the slide is the lower end of a range of observed inner disk radii, not a statement of the ISCO. |
| 6 | warning | "orbital equations ... as in the [calculus of variations](/courses/8-033/brachistochrone-catenary) when the Lagrangian lacks a variable" | n/a | Links the brachistochrone page. | The case used here (Lagrangian independent of a coordinate $t$ or $\varphi$, so its conjugate momentum is conserved) is the first special case on `geodesics-calculus-of-variations` ("If L does not depend on y, then ∂L/∂y′ is constant"); the brachistochrone page uses the other case (L independent of x, Beltrami form). Link to `/courses/8-033/geodesics-calculus-of-variations`. |
| 7 | warning | Stellar-mass bullet "V404 Cygni ... $12 \pm 2$ solar masses"; quiz 1 | Slide 30: "partner mass = 12±2 solar masses" (2006). | Presented as a current value. | Mark as the 2006 slide value; later measurements (e.g. Khargharia et al. 2010) give about 9 solar masses (uncertain to cite exactly; check before adding). The quiz answer stays correct as the slide's argument. Similarly "maximum neutron star mass about 3" is the slide's round upper bound; modern estimates of the maximum are nearer 2.2–2.5, with about 3 as an absolute bound. A bracketed note would suffice. |
| 8 | warning | Cosmology callout | Not in the slides; 8.902 Lecture 13 (linear perturbations) does not discuss black holes. | "The supermassive black holes ... grew along with their galaxies, from the small fluctuations described in the growth of structure lectures of 8.902." | Mark as the page's own and soften: the link is that galaxies (and so their black holes) formed from the fluctuations 8.902 describes; the co-evolution of black holes and galaxies is an observational correlation, not something 8.902 Lecture 13 covers. "Among the most distant objects" is fine but quasars are no longer the most distant known objects (later development, optional note). |
| 9 | info | Intro, "John Archibald Wheeler (born 1911), who popularized the name 'black hole'" | Slide 1: name, "American, 1911–", portrait. | Adds "popularized the name". | True (Wheeler, 1967) but not on the slide; mark as the page's own or leave. |
| 10 | info | "stellar motions ... (slides 13–14)", "orbiting gas disks ... (slide 15)" | Slides 11, 13, 15 are the same list; slide 14 is a star-field image (NASA), slide 16 the Chandra satellite, slide 17 the tidal-disruption picture, slide 18 the spinning/non-spinning disk and spectrum picture. No slide shows a gas disk. | Assigns bullets to individual repeats of the list. | Acceptable reading; could simply cite "slide 11 (repeated on 13, 15, 29)" for the list and give images their own slide numbers. |
| 11 | info | Review section, "Slide 26 asks ... from kinematics to black holes" | Slide 26 items run from kinematics to "Historical background, the discoveries and the discoverers". | "from kinematics to black holes" | "from kinematics to historical background" would match. |
| 12 | info | `leadsTo` 8.033 Lecture 25 | Next deck: circular orbits (photon, tourist, last stable), Mercury perihelion, radial orbits, near the horizon. | "What happens to infalling matter and light." | Could mention orbits and Mercury's perihelion, which is most of Lecture 25. Not wrong. |

## Arithmetic and answer checks
- (a) $c\Delta t = 3.00\times10^8 \times 10^{-3}$ m = 300 km. Correct.
- (b) $6GM/c^2$ with $GM = 1.327\times10^{21}$ m³/s² (10 solar masses, correct: $GM_\odot = 1.327\times10^{20}$): 88.58 km, page 88.6 km. Correct. $T = 2\pi\sqrt{r^3/GM} = 4.548$ ms, page 4.5 ms. Correct (about 220 orbits per second, "hundreds of times a second" fine). Kepler's law $\Omega^2 = GM/r^3$ in Schwarzschild coordinate time holds exactly for circular geodesics: correct claim. "Matching the fast X-ray flickering" is loose (4.5 ms vs the 1 ms of part a) but harmless.
- (c) $R_s = 2GM/c^2$ for $4\times10^6\,M_\odot$ = $1.181\times10^{10}$ m (page $1.18\times10^{10}$); 0.0790 AU (page 0.079); 0.4/0.079 = 5.07 (page "about five"). Arithmetic correct; premise affected by finding 1.
- Radial equation $(dr/d\tau)^2 = E^2 - (1-2M/r)(1+L^2/r^2)$: correct for timelike geodesics with $c = G = 1$, $E$ and $L$ per unit mass. The extra $-2ML^2/r^3$ term in the expanded potential (i.e. $\propto ML^2/r^3$) is correct.
- ISCO at $6M$: correct; calcs entries `isco-check` and `isco-inflection` verify $V'(6) = V''(6) = 0$ with $L^2 = 12$.
- Quiz 1 (answer 1): correct as the slide's argument; see finding 7 on the values.
- Quiz 2 (answer 2, smaller than about 300 km): correct.
- Quiz 3 (answer 0, $6GM/c^2$): correct.
- Flashcards 2 and 3: correct. Flashcard 1: Sgr A* item wrong (finding 1).
- `npm`-equivalent check: `pytest -k evidence-for-black-holes` ran 10 calcs entries, all passed.

## Coverage and order
- Covered: recap slides 1–8, topics slide 9, supermassive evidence 10–18, song 19–25 (described), survey 26, Java simulator 27 (mentioned), stellar-mass evidence 28–30. No slide is left out.
- Added: the radial orbit equation, the effective-potential argument and the ISCO (page's own, honestly marked except finding 3). They overlap with the Lecture 25 page (`schwarzschild-orbits-perihelion`), which treats the same material from the next deck's slides; consistent with it (that page calls these "the equations previewed on the last lecture's page").
- Order differs from the slides (finding 4).

## Licensing
- Song lyrics (slides 20–25, "We all believe in relativity", to the Yellow Submarine melody): the page reproduces no lyric line, title or chorus. It describes the song ("a song with seven equations", a short quote of slide 20's question; "a well-known Beatles melody"; a list of topics) and lists three equations that appear on slide 22 ($\vec B\cdot\vec E$, $B^2-E^2$, $m_0^2 = E^2 - p^2$), which are standard physics, not lyrics. Pass.
- Figures: the page uses no images. Slides 12, 14, 16, 17 are "Image courtesy of NASA"; slides 18, 25 and 30 have uncredited images; none reused. No ESO or Wikipedia figures reused (the ESO panel on slide 17 is only mentioned in words). Pass. No "All rights reserved" notice in the deck.
- No OpenStax or LibreTexts material.
- Wording close to the slides (short phrases, acceptable but noted): "stars orbiting a massive invisible companion", "X-ray variability puts an upper limit on the size", "the best example is V404 Cygni ... an older example is Cygnus X-1", "a star that strayed too close", "existence of quasars, huge jets" (as "quasars and huge jets"). These are list items of a few words; no full sentence is copied.
- No em dashes on the page (checked: 0).

## Notes
- The slide-6 slip ("distance to origin < circumference/2π") is correctly identified and is consistent with the explanation on `schwarzschild-black-holes`.
- Links checked: `/courses/8-033/schwarzschild-black-holes` (Lecture 23 page, exists), `/courses/8-902/linear-perturbations` (exists, 8.902 Lecture 13), 8.286 Lecture 14 (`falling-into-a-black-hole`, "Falling into a black hole" fits the stated reason), 8.033 Lecture 25 (`schwarzschild-orbits-perihelion`, exists).
- Source title "Lecture 24" vs deck "Lecture 22" is explained on the page and matches `_course.json` (Lecture 24 = lecture22_bh2).
- Uncertain: where the slides' "size < 0.4 AU" comes from. It does not obviously belong to RX J1242-11 (central mass about 10⁸ M☉, Schwarzschild radius of order 2 AU) or to the 2001 Chandra flare of Sgr A* (10-minute variability, a limit of order 1 AU). I did not resolve this; the page should not attach the figure to Sgr A* as a fact without a source.

## Resolution (2026-11-17, by the page author)

- Error 1: the "devoured star" is now attributed correctly: the slide's label is quoted, and the page says the image shows the 2004 tidal disruption in RX J1242-11; the Summary, flashcard and worked example (c) no longer name Sagittarius A*.
- Error 2: the effective potential is now the whole product (1 − 2M/r)(1 + L²/r²).
- Warning 3: "worked on the board" replaced; the page says the equations appear on slide 4 of the next deck.
- Warning 4: the reordering of the stellar-mass evidence is stated.
- Warning 5: the ISCO citation now says the formula is the page's own (slides 11 and 15 give 6–20M).
- Warning 6: the link now points to `geodesics-calculus-of-variations`.
- Warning 7: V404 Cygni's 12 ± 2 and the 3-solar-mass bound are marked as 2006 values with later notes.
- Warning 8: the callout is marked as the page's own remark and reworded.
- Info: Wheeler's naming of black holes marked as the page's addition; slide 26's list completed.
