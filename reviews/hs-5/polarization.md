---
page: content/year-0/hs-5/polarization.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-iii-optics/lecture-17/ (read; no item marked "excluded from our Creative Commons license")
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec17/ and its PDF MIT8_03SCF16_Lec17.pdf (read, pp. 1–5)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/3925f0496a096c9efc1542b43bddf567_TjxR7lAwWhI.pdf (Lecture 17 transcript, read, pp. 5–6 and 16–19)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/853e4e885a69e81221ec67d5facfe8d6_sBKHUPDUI1o.pdf (Lecture 19 transcript, read, pp. 2–3 and 20–21)
  - https://www.jpl.nasa.gov/edu/resources/teachable-moment/x-ray-vision-and-polarized-glasses-unite-to-uncover-mysteries-of-the-universe/ (read; a plain curl got a CloudFront 403, a browser user agent worked)
  - https://acd-ext.gsfc.nasa.gov/anonftp/acd/daac_ozone/Lecture4/Text/Semifinal/rayleigh.html (read)
  - https://stereo-ssc.nascom.nasa.gov/classroom/how.shtml (read)
  - https://map.gsfc.nasa.gov/ (read)
  - content/year-0/hs-5/waves.mdx, sound.mdx, electromagnetic-spectrum.mdx (prerequisites, read)
  - content/year-2/8.03/polarization-polarizers.mdx (leadsTo target, read)
  - calcs/hs-5/polarization.yaml (read; `calc-test -k polarization`: 34 passed); `npm run content:check`: 0 errors, no warning for this page other than the two planned prerequisites and the missing review file
verdict: pass-with-notes
---

# Review: Polarization

No errors found. Every formula is in the cited MIT notes (I = I₀cos²θ, I ∝ E², easy axis, notes p. 5) or follows from the transcripts; every number was recomputed and agrees with the page and the calcs file; every quiz answer is right and every other choice wrong. The physics is correct throughout. The warnings are about the support for I = I₀/2 (only implied by the transcript), one quiz question whose numbers echo the site's own 8.03 lesson, "polarized" where the NASA source says "partly polarized" for skylight, and the 3D-cinema sentence, which is true only for linear systems.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | `<Formula>` "Unpolarized light through one filter", `cite="reading2" at="pp. 18–19"`; quiz 2; flashcard 2; calcs `we-first-filter`, `quiz-unpolarized-half` | Transcript pp. 18–19 never states I₀/2. It has Einstein's guess that unpolarized light is "50%" along x and "50%" along y, and the measured result I₀/4 after an x polarizer and a 45° one, which implies I₀/2 after the first (I₀/2 × cos²45° = I₀/4). Notes p. 4 only say unpolarized light comes from many uncorrelated emitters. | I = I₀/2, "exactly half", cited as if stated. | The physics is right and standard, and the page's own argument (oscillations in all directions count half along, half across) is sound. Make the support explicit: `at="pp. 18–19 (implied: I₀/4 after polarizers at 0° and 45° means the first passes I₀/2)"`, and/or add the GSFC Rayleigh page as a second source (sunlight above the atmosphere: "just as many" along any two perpendicular lines across the beam). Optionally add one line: the average of cos²θ over all directions is ½. |
| 2 | warning | Quiz 5 (crossed filters, "a quarter", answer 30°) | Site's own `content/year-2/8.03/polarization-polarizers.mdx`: quiz "easy axis 60° from vertical … I₀/4" and worked example with cos²30° = 0.75 and cos²60° = 0.25 | cos²θ = 0.25, θ = 60°, turn 90° − 60° = 30° | Not copied (it is the inverse question, and the MIT lecture itself does not use 60°), but the brief asked for numbers that differ from the 8.03 page's 60°/I₀/4. Use another fraction, e.g. "a fifth": cos²θ = 0.20, θ = 63.4°, turn 26.6° (update choices and calcs `quiz-quarter-angle`, `quiz-quarter-turn`). |
| 3 | warning | "Polarization in nature", **Scattering**: "The scattered light is polarized as well" | GSFC Rayleigh page: skylight is "partially polarized", with a degree of polarization greatest at 90° from the Sun | "polarized as well, most strongly … 90° away" | Write "partly polarized as well, most strongly …", as the page already does for reflection. |
| 4 | warning | "Uses", **3D cinema** | STEREO page: two lenses with polarization directions "90 degrees different" (linear system), "used in some modern 3D movies" | General statement that the two pictures have "polarizations at right angles to each other" | Many cinemas (e.g. RealD) use circular polarization of opposite handedness, for which "at right angles" is not true. Say "In many 3D cinemas …" or "two different polarizations (in some systems at right angles to each other)". |
| 5 | info | "Polarization in nature", **Scattering** | Lecture 19 pp. 2–3 attributes the scattering to "dust" in the air (then speaks of a molecule) | "the molecules of the air scatter sunlight" | The page is right (Rayleigh scattering by molecules, as the GSFC page says). No change. |
| 6 | info | "Uses", **Screens** | Transcript p. 17 calls the laptop screen an "LED" screen | "liquid-crystal kind (LCD)" | The page is right; the 8.03 lesson notes the same slip. No change. |
| 7 | info | "A polarizing filter … light oscillating at right angles to it is absorbed" | MIT notes p. 5: a wire-grid polarizer reflects the component along the wires | Plastic sheet absorbs | Correct for the polarizing sheets the page describes; no change. |

## Formulas and citations
- **I = I₀/2** (`reading2`, pp. 18–19): correct physics; supported only by implication (finding 1).
- **Malus's law I = I₀cos²θ** (`reading1`, p. 5): notes p. 5 give |E_f| = |E₀|cos θ, "Intensity ∝ E²" and I_f = I₀cos²θ; transcript p. 16 says the same in words. Matches. The page's derivation (amplitude × cos θ, intensity ∝ amplitude²) is the notes' route, in plain words, with "amplitude" in place of E: right for this level.
- **"Intensity grows with the square of the amplitude"** (writer's flag 2): supported by notes p. 5 and transcript p. 16 for light; lesson 5.5 states it for sound ("the intensity grows with the square of the pressure changes"), so "lesson 5.5 said so for sound" is fair.
- **The name "Malus's law"** (writer's flag 5): not in the MIT notes or transcript, but it is the standard name, and the site's own 8.03 lesson uses it. Acceptable.
- Readings' `location` strings: notes p. 4 (unpolarized light) and p. 5 (wire grid, easy axis, cos θ, cos²θ) correct. Transcript 17: the transverse-or-longitudinal question is on p. 6 (p. 5 only leads into it), "pp. 5–6" is acceptable; p. 17 laptop screen and crossed sheets correct; pp. 18–19 two polarizers and unpolarized light correct. Transcript 19: pp. 2–3 (polarizer darkens the sky, scattered sunlight polarized, reflections from windows and water) and pp. 20–21 (reflected light polarized, completely at Brewster's angle) correct.
- **Glare polarized along the surface** (writer's flag 2): Lecture 19 pp. 20–21: at Brewster's angle the component in the plane of incidence is not reflected, so the reflected light oscillates perpendicular to that plane, i.e. parallel to the surface (horizontal for a lake), and at other angles it is partly polarized. The page's "partly polarized, oscillating mostly along the surface (horizontally …)" is correct and supported. **Sunglasses with a vertical transmission direction**: not in any cited source (the JPL page says only that polarized sunglasses reduce glare, and its explanation of why is muddled; the page rightly does not use it), but standard and correct. Acceptable as standard knowledge.
- **LCD sentence** (writer's flag 3): correct. LCD screens send out linearly polarized light (transcript p. 17: the screen's light is polarized up and down and a sheet with a horizontal easy axis blacks it out), and each pixel is made light or dark by liquid crystal between polarizing filters (standard; the transcript says the screen contains polarizers). Restricting it to "the liquid-crystal kind" keeps it true. Fine as it is.
- **CMB callout** (writer's flag 4): correct and supported. The WMAP home page: "Mapped the polarization of the microwave radiation over the full sky" and calls the CMB "the oldest light in the universe"; lesson 5.8 already introduced the "faint glow that fills the whole sky, the oldest light there is". "NASA's WMAP satellite mapped its polarization" is a statement of fact cited to the page, not "according to NASA" phrasing. The callout promises that Block 8 explains what the polarization tells us; §4 row 8.15 (`cosmic-microwave-background`) does not list polarization yet, so whoever writes 8.15 should cover it, or the callout should say "Block 8 comes back to the microwave glow" (info).
- Sky polarization most at 90° from the Sun: GSFC page (degree of polarization ∝ sin²θ, greatest at 90°; the sunglasses experiment). Blue scattered much more than red: GSFC (1/λ⁴, about 9 times). Sunlight unpolarized: JPL, GSFC and Lecture 19 p. 2. 3D glasses: STEREO (finding 4). Camera polarizer darkening the sky and removing reflections: Lecture 19 pp. 2–3.

## Arithmetic and answer checks
Recomputed independently (Python):
- Worked example 1: 240/2 = 120 W/m²; cos²35° = 0.6710; 120 × 0.6710 = 80.52 → 80.5 W/m²; 80.5/240 = 0.335, "about a third": correct. Crossed: cos²90° = 0: correct.
- Worked example 2: √0.10 = 0.3162; cos⁻¹ 0.3162 = 71.57° → 71.6°: correct.
- Plot: curve cos(th·π/180)² is cos²θ in degrees; points (45, 0.5) and (90, 0) lie on it; caption values (all at 0° and 180°, half at 45°, none at 90°) correct; caption says it is computed from the formula.
- Quiz 1: answer 1 (longitudinal) correct; "too slow", "wavelength too long", "air absorbs the polarized part" all wrong.
- Quiz 2: 500/2 = 250 W/m², answer 1 correct; 500, 125, 0 wrong.
- Quiz 3: 80 × cos²50° = 80 × 0.4132 = 33.05 → 33 W/m², answer 2 correct; 51 = 80 cos 50° = 51.4 (explained), 40 = 80/2, 0 wrong.
- Quiz 4: glare polarized along the water, glasses block that direction; turned 90° they pass it: "It gets brighter", answer 1 correct; "disappears completely" and "changes colour" wrong.
- Quiz 5: cos²θ = 0.25 → θ = 60°; turn from 90° is 30°, answer 0 correct; turning 45° gives ½, 60° gives ¾, 90° gives all: all wrong. (Numbers echo the 8.03 page: finding 2.)
- Flashcards: all four true.
- Calcs file: every number on the page is in it; `calc-test -k polarization` passes. Info: `quiz-cos2-50`, `quiz-wrong-unsquared` (quiz 2) and `quiz-quarter-angle` (quiz 4) have no `quiz:` field while their siblings do; add it for consistency. `sky-90` has `origin: mit` with a NASA `cite`; this matches how other hs-5 calcs files use `mit` for "from a cited source", so fine.

## Only earlier terms
- transverse, longitudinal, amplitude, medium: lesson 5.3 (`waves`, written, read). Intensity in W/m² as energy per square metre per second, and intensity growing with the square of the amplitude: 5.5 (`sound`, written, read). Light as a transverse electromagnetic wave, "what waves comes in 6.12", the microwave glow, the oldest light: 5.8 (`electromagnetic-spectrum`, written, read; it even says "lesson 5.12 uses this").
- Splitting a vector into components: lesson 0.8 `introducing-vectors`, planned, not written (§4 row: vectors, CP 3.2–3.3 components). Counts as introduced.
- cos θ, cos²θ and finding an angle from its cosine with the cos⁻¹ key: lesson 0.7 `angles-and-trigonometry`, planned, not written. Its §4 row (angles, radians, trigonometry) covers cosine; the inverse cosine is not named in the row, so the writer of 0.7 should include it (lessons 5.9 and 5.10 rely on the inverse sine too). Info.
- "atoms", "molecules", "pixel", "liquid crystal", "satellite": used as everyday words; "atoms" and "molecules" already appear the same way in 5.1 and 5.8. Fine.
- What oscillates in light is only pointed forward to 6.12; no electric field, no photons in the body of the page. The `leadsTo` text mentions "electric field", which is allowed there (a forward description of the university lecture).
- No term found used before it is introduced.

## Coverage
- Covers what VWO needs: transverse waves only, unpolarized and linearly polarized light, the polarizer, I₀/2, Malus's law with crossed filters, polarization by reflection and by scattering, uses (sunglasses, LCD, camera filters, 3D cinema), and a cosmology link.
- Left out: Brewster's angle (said to be left to university, fine at this level), circular polarization and birefringence (university), the three-filter "45° between crossed filters" surprise (a well-known demonstration and in the MIT lecture; optional, and it would make a good practice-set problem with numbers other than 45°).

## Where this leads
- `{ course: "8.03", lecture: 17 }` → `content/year-2/8.03/polarization-polarizers.mdx`, "Polarization and polarizers": same topic. Its `why` (field as a column of two numbers, circular and elliptical polarization, polarizer as a matrix, Malus's law from it) matches that lesson's contents. Correct.
- `towards: false`: right, 5.13 is the block's last lesson.

## Licensing and AI terms
- No sentence copied from the MIT notes, the transcripts or the NASA pages; the wording is the writer's own.
- The rope-through-a-slot picture is a standard analogy; JPL uses a rope through a window with horizontal waves, the page a vertical slot between fence bars with up-down, sideways and slanting shakes: different in its details.
- The opening (turning sunglasses in front of a screen) is the same everyday effect as Lee's laptop demonstration (transcript p. 17), told differently; an idea, not text. Fine.
- Worked examples (240 W/m² and 35°; dimming to 10%) and quiz numbers (500 W/m², 80 W/m² at 50°) differ from the MIT lecture (I₀/4 after 0° and 45°; three polarizers with 45° in the middle) and from the 8.03 page's examples, except quiz 5 (finding 2).
- No figure from any source; the only diagram is the generated Plot.
- MIT: nothing used is marked as excluded from the CC licence. NASA: no insignia, no "according to NASA" phrasing; the four NASA pages are cited with title, URL and date read. No ESO text. No forbidden source cited or read.

## Notes
- The page cites lessons by number throughout ("lesson 5.3", "5.5", "5.8", "0.7", "0.8", "6.12", "Block 8"); all numbers match `_course.json`.
- Quiz 5's phrase "turn the second filter back by 30°" is clear enough; "back" could be dropped.

## Resolution (2026-11-20, by the page author)

1. Warning, I = I0/2: fixed. The Formula's `at=` now says the result is implied by transcript pp. 18-19 (a quarter, I0/4, is left after filters at 0 and 45 degrees, so the first filter passed I0/2) and names the NASA Goddard Rayleigh page as a second support. Checked that page (curl, 2026-11-20): unpolarized sunlight has "just as many" photons along any two perpendicular lines across the beam. Its `location` in `references.rayleigh` now includes this (so a filter passes half). The cite key stays `reading2` (a Formula takes one key); the Sources list shows the Goddard page.
2. Warning, quiz 5 echoing the 8.03 page: fixed. The question now asks for a fifth: cos^2 theta = 0.20, cos theta = 0.447, theta = 63.4 degrees, turn 90 - 63.4 = 26.6 degrees. Choices 18 (a fifth of the quarter turn, the linear mistake, explained), 26.6 (answer), 45, 63.4 (the angle between the directions, not the turn). "back" dropped. Calcs `quiz-quarter-angle` and `quiz-quarter-turn` replaced by `quiz-fifth-cos`, `quiz-fifth-angle`, `quiz-fifth-turn` (quiz: 4) and `quiz-fifth-wrong-linear` (turned 18 degrees, cos^2 72 = 0.095, not 0.20).
3. Warning, skylight: fixed, "The scattered light is partly polarized as well".
4. Warning, 3D cinema: fixed, "sent out with two different polarizations (in some systems at right angles to each other)".
5, 6, 7. Info: no change, as the review says.
Calcs info (missing `quiz:` fields): not applicable. The calc test requires the entry's value to match the marked answer choice and no other; `quiz-cos2-50` (0.413) appears in no choice, `quiz-wrong-unsquared` (51) is a wrong choice, and the new `quiz-fifth-angle` (63.4) is a wrong choice too. The entries whose values are the answers (`quiz-unpolarized-half`, `quiz-malus-50`, `quiz-fifth-turn`) carry the field.
CMB callout info: fixed, the promise about polarization is gone; it now says "Block 8 studies this microwave glow and what it tells us about the young universe" (plan row 8.15 is the CMB lesson).
Only-earlier-terms info (inverse cosine in lesson 0.7): left for the writer of 0.7; no change here.

Checks: `npm run calc:test -- -k polarization`: 36 passed. `npm run content:check`: 0 error(s); for this page only the two "planned but not written yet" prerequisite warnings (angles-and-trigonometry, introducing-vectors).
