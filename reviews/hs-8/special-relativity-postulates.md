---
page: content/year-0/hs-8/special-relativity-postulates.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture3_symme2/ (read: PDF, 24 slides, rendered as images)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture2_symme1/ (read: slides 10 and 12)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture4_kinem1/ (read: slides 4, 5, 15, 16)
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture5_kinem2/ (read: slide 9)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte13em_waves/ (read: Eq. 13.4.15, printed p. 9)
verdict: pass-with-notes
---

# Review: The postulates of special relativity

Slide numbers below are PDF page numbers of the 8.033 Fall 2006 slide PDFs, which match the numbering the page uses.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning (uncertain, see note) | "Michelson and Morley folded the light path with extra mirrors, so that their arms added up to about 11 m"; "They expected a shift of about 0.2"; plot caption; summary; quiz 2; flashcard 3 | Slide 17: "their L∥ + L⊥ = 11m was about 2 × 10⁷ wavelengths λ ~ 500nm" and a sensitivity of 0.01λ; the 0.2 is not on the slide (it follows from 2 × 10⁷ × 10⁻⁸). | States as history that the folded arms *added up* to 11 m and that M&M *expected* 0.2 fringe. | From general knowledge (not verified from a §2.0 source in this session): in the 1887 experiment the folded path was about 11 m **per arm**, and the expected shift usually quoted is about 0.4 fringe. The reviewed 8.033 page's review (reviews/8.033/speed-of-light-michelson-morley.md, finding 5) raised the same point, and that page now says "by the slide's numbers". Either (a) add a bracket: "(the course slide counts 11 m for both arms together; each folded arm was in fact about 11 m long, so the shift expected was nearer 0.4)", and change 0.2 to "about 0.4" with the calcs updated; or (b) keep the slide's numbers but say "by the course slide's numbers" and drop "folded the light path with extra mirrors, so that their arms added up to". Rule 4: do not repeat a lecturer slip. |
| 2 | warning | "Light took the same time along both arms" (body after the plot) and quiz 2 explanation ("light took the same time along both arms, however the apparatus was turned") | Slide 17: "they saw no fringe shift at all. So c appears not to depend on frame." | Says the travel times along both arms were equal. | The arms need not be equal (L∥ ≠ L⊥ in the formula), so the times need not be equal. What was found is that **turning the apparatus did not change** the time difference. Reword both places. |
| 3 | warning | "Physicists tried to rescue the ether, for example by supposing that Earth drags its ether along, but later experiments ruled out each of these rescues (source, slides 19–20)" | Slide 20 lists the rescue attempts: aether drag ruled out by stellar aberration and by Fizeau (1851); Lorentz–FitzGerald contraction ruled out by Kennedy & Thorndike (1932); emission theories by binary stars, M&M with extraterrestrial light, CERN γ-rays. Slide 19 only repeats the Δt formula. | "later experiments" | Aberration (18th century) and Fizeau (1851) came *before* Michelson–Morley, so "later" is wrong for the drag example. Say "other observations and experiments ruled out each of these rescues" and cite slide 20 only. |
| 4 | info | Frontmatter `readings[2].location` "slide 9 (relativity of simultaneity: the event further ahead happens first)" | Slide 9: in S′ "the second event happened first"; S-clocks "with larger x run further ahead". | "the event further ahead happens first" | Ambiguous (a reader could take "ahead" as the front of the train, which is the wrong way round). Suggest "slide 9 (relativity of simultaneity; clocks synchronised in one frame are out of step in another)". The body's train example itself is correct (the back door first). |
| 5 | info | "They saw **no shift at all**" | Slide 17: "they saw no fringe shift at all". | Same. | Faithful to the slide. Historically they saw small shifts well inside their error, far below the expected value; at this level the slide's wording is acceptable, but "no shift beyond tiny amounts within their measuring error" would be more exact. Optional. |
| 6 | info | Michelson–Morley year | No slide gives a year. | No year. | The experiment is generally dated 1887 (general knowledge, not checked against a §2.0 source here). Optional: add it only with a citable source. |

## Formulas and citations
- `u' = u − v`, reading1 (L2) slide 12: slide derives u′ = u − v and ends "But what about the flashlight on the train?" Correct, and the page's "torch on a train" matches.
- Inertial frame (reading 1, slide 10): slide 10 "Inertial frame definition (a = 0 if F = 0)". Correct.
- `c = 1/√(μ₀ε₀)`, mit802 Sec. 13.4 Eq. (13.4.15), p. 9: verified (PDF page 10, printed footer 9; the chapter gives 2.997 × 10⁸ m/s). Correct.
- Round-trip times, slide 16: t∥ = L∥/(c − v) + L∥/(c + v) = (2L∥/c)γ² and t⊥ = (2L⊥/c)γ are on slide 16. The page's t⊥ = 2L⊥/√(c² − v²) is the same thing, and the `at` note says so. Correct. (Slide 16 has a typo, (ct⊥/2)² = √(L⊥² + (vt⊥/2)²), with a stray root; the page does not repeat it.)
- Δt ≈ (L∥ + L⊥)/c × (v/c)², slide 17 "written there as Δt′ − Δt": correct, it is the slide's last line. The slide's intermediate line γ ≈ 1 + (v/c)² drops the ½ (it should be 1 + ½(v/c)²); with the correct ½, 2γ(γ − 1) ≈ (v/c)², so the slide's end result is right and the page, which uses only the end result, is right. The calcs identity `rotation-change-identity` checks exactly this. No note needed on the page (the page does not differ from the slide's result); an optional bracket is fine.
- N ≈ (L∥ + L⊥)/λ × (v/c)², slide 17: not written on the slide as a formula, but it is Δt divided by the period λ/c, which the page derives in the line before. The `at` note ("the arm length counted in wavelengths, times (v/c)²") describes it fairly.
- Binary stars, slide 14: correct. Postulates, "2 follows from 1", special vs general relativity: reading 2 (L4) slide 4, correct (the slide says "non-inertial frames"; "and gravity" is a standard, correct addition). Einstein's 1905 paper: L4 slide 16 "Compare to Einstein's 1905 paper". Correct. "Simultaneity is relative": L4 slide 5 "1st shocker". Correct.
- Slides 15–17 for what Michelson and Morley set out to measure: correct.

## Arithmetic and answer checks
All recomputed independently; `npm run calc:test -k …` passes for both hs-8 pages (68 tests).
- Rowers: 0.80 m/s, 75.0 s; 1.80 m/s, 33.33 s; total 108.33 s; across √(1.69 − 0.25) = 1.20 m/s, 100 s; difference 8.33 s. Correct.
- Worked example: v/c = 1.0 × 10⁻⁴, (v/c)² = 1.0 × 10⁻⁸; Δt = 4.0/3.00e8 × 1e-8 = 1.33 × 10⁻¹⁶ s; period 550e-9/3.00e8 = 1.83 × 10⁻¹⁵ s; ratio 0.073 ≈ 0.07; N = 4.0/550e-9 × 1e-8 = 0.073. Correct.
- 11 m / 550 nm = 2.0 × 10⁷ (slide: 11 m / 500 nm = 2.2 × 10⁷, "about 2 × 10⁷"); shift 11/550e-9 × 1e-8 = 0.20 (0.22 at 500 nm). Correct for the slide's 11 m total; see finding 1. Using 550 nm instead of the slide's "~500 nm" is fine and the calcs entry notes it.
- Plot: N(30 km/s) = 0.20 for 11 m, 0.073 for 4.0 m, as the caption says. Domain 0–40 km/s, range 0–0.4: at 40 km/s and 11 m, N = 0.36, inside the range.
- Quiz 0: 15 + 20 = 35 m/s. Correct, other choices wrong.
- Quiz 1: c. Correct; 1.5c is the Galilean answer as explained.
- Quiz 2: "no shift" is the marked answer; 0.2/0.01 = 20 in the explanation. Correct by the slide's numbers (see findings 1 and 2 for the wording).
- Quiz 3: back door first. Correct, and the explanation is right.
- Quiz 4: 6.0/600e-9 × (1e-4)² = 0.10. Correct; the other choices are wrong by factors of 10.
- c from μ₀ε₀: 1/√(1.2566e-6 × 8.85e-12) = 2.998 × 10⁸ m/s. Correct.
- Flashcards: all true (card 3 inherits the 0.2 question of finding 1).

## Only earlier terms
- Relative velocity and crosswind/aim-upstream (1.9, `relative-velocity`, which does discuss the boat aimed partly upstream and the crosswind), Newton's first law (2.2), μ₀ε₀ and c (6.12), medium and wave speed (5.3, `waves`), interference and fringes (5.11), Pythagoras (0.7, used in the across-the-river step; `angles-and-trigonometry` is not in `prerequisites` but is Block 0, so it counts as earlier). All are earlier lessons.
- "Interferometer", "ether", "inertial frame", "postulate", "simultaneity" are introduced on the page before use.
- "Period" of a light wave (λ/c) is from Block 5. Fine.

## Coverage
- §4 row 8.1 (postulates of special relativity): postulates, inertial frames, the ether and Michelson–Morley, relativity of simultaneity are all covered at VWO level. The derivation of Δt is done through the rower analogy and the slide's result, which suits the level.
- Nothing important for this level is missing. (Lorentz transformation is rightly left to 8.033 via `leadsTo`.)

## Where this leads
- 8.033 Lecture 3 (`speed-of-light-michelson-morley`, lecture 3): same topic; the `why` (wave equation not Galilean invariant; wavelength, source and observer tests; fringe shift) matches that page and the Lecture 3 slides.
- 8.033 Lecture 4 (`lorentz-transformation`, lecture 4), the writer's added second target: appropriate. L4 slides 4–5 start from the same two postulates and build frames from rods and clocks synchronised with light pulses; slides 15–16 derive the Lorentz transformation. The `why` is accurate.
- `towards: false`: correct (not the block's last lesson).

## Licensing and AI terms
- No sentence copied from the slides; the rower example and all quiz items use the page's own numbers. Short standard phrases only ("no fringe shift at all" is a standard description).
- No figure reused: L3 slide 1 and L2 slide 1 portraits ("Image courtesy of Wikipedia") and the "Figure by MIT OCW" pen drawings are not used. The only graph is generated (`<Plot>`).
- Sources are MIT OCW only (CC BY-NC-SA, §2.0). No forbidden source cited or used. The slides' "see Resnick Table 1-2" points to a commercial textbook that the page rightly does not use.
- No NASA or ESO material on this page.

## Notes
- Severity summary: no errors; findings 1–3 are warnings worth fixing before `status: reviewed`. Finding 1 is marked uncertain only because the historical numbers come from general knowledge and the earlier 8.033 review, not from a §2.0 source read in this session.
- If finding 1 is fixed by option (a), update `mm-expected-shift`, `mm-arm-length`, `mm-wavelengths`, `quiz-twenty-times` (0.4/0.01 = 40, "forty times") and the plot caption in the calcs file.

## Resolution (2026-11-20, by the page author)

Slides 17, 19 and 20 of the Lecture 3 PDF were checked again (rendered as images) before the changes.

1. Fixed by option (b): the page keeps the slide's own numbers and says so. "Folded the light path with extra mirrors, so that their arms added up to" is gone; the text now reads "By the course slide's count, Michelson and Morley had 11 m of light path in all, both arms together ... By the same count they expected a shift of about 0.2 of a fringe". The plot caption says "With 11 m of light path in all (the course slide's count)", and the summary, quiz 2 explanation and flashcard 3 add "by the course slide's numbers". No historical figures were added (no permitted source read for them). Calcs `mm-arm-length`, `mm-expected-shift` and `mm-wavelengths` updated to the new wording.
2. Fixed: the body now says "Turning the apparatus did not change the difference between the travel times along the two arms", and the quiz 2 explanation says the same; "light took the same time along both arms" is removed in both places.
3. Fixed: "other observations and experiments ruled out each of these rescues (source, slide 20)"; slide 19 is no longer cited.
4. Fixed: reading 3 location is now "slide 9 (relativity of simultaneity: clocks synchronized in one frame are out of step in another)".
5. Done: "They saw no shift, apart from tiny amounts within their measuring error, whichever way the apparatus pointed."
6. No change: no year is given, since no permitted source read here dates the experiment.

Checks: `npm run calc:test -- -k special-relativity-postulates` 26 passed; `npm run content:check` 0 error(s), no message for this page. Status set to reviewed.
