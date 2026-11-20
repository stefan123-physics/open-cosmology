---
page: content/year-0/hs-5/lenses-and-telescopes.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/2-71-optics-spring-2009/resources/mit2_71s09_lec05/ (read: local copy of the PDF from MIT OCW, all 20 slides; slides 2, 3 and 12 rendered and read in full)
  - https://ocw.mit.edu/courses/2-71-optics-spring-2009/resources/mit2_71s09_lec04/ (read: local copy, 13 slides; slides 4, 5, 7, 8 and 9 read)
  - https://ocw.mit.edu/courses/2-71-optics-spring-2009/resources/mit2_71s09_lec08/ (read: local copy, 14 PDF pages; the file starts at slide wk4-b-13, so PDF pages 1-3 are slides 13-15 and PDF pages 4-13 are wk5-a-1 to wk5-a-10)
  - https://ocw.mit.edu/courses/2-71-optics-spring-2009/resources/mit2_71s09_lec06/ (read: local copy, 22 slides; slide 3 rendered, slides 13-21 text read)
  - https://science.nasa.gov/mission/webb/science-overview/science-explainers/telescope-overview (read 2026-11-20)
verdict: needs-changes
---

# Review: Lenses and telescopes

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Section "Telescopes" (reflecting telescopes paragraph): "(Lecture 8, slide 15)"; frontmatter `readings` Lecture 8 `location`: "slide 15, chromatic aberration" | Lecture 8 slide 15 (wk4-b-15) is "Telescope: catadioptric": a spherical mirror with Schmidt's correction plate against spherical aberration. Chromatic aberration is on the slide labelled wk5-a-1 ("Aberrations: Chromatic ... the refractive index of lenses, etc. varies with wavelength; therefore, focal lengths ... are wavelength-dependent"), PDF page 4 of the same file | Cites slide 15 for chromatic aberration | Cite "Lecture 8, slide wk5-a-1 (Aberrations), PDF page 4" in both places. Do not cite wk5-a-2: its figure is Jenkins and White, marked "All rights reserved ... excluded from our Creative Commons license". |
| 2 | warning | Telescope formula and the text around it | Slide 13: MP = α_a/α_u = −f_o/f_e | M_a = f_o/f_e. The dropped minus is explained only in the formula's `at` text ("written there with a minus sign because the image is upside down"); the body says only "The image is upside down" | The page told the reader a few sections earlier that a negative M means "upside down", and then gives a positive M_a for an upside-down image. Add one sentence to the body: the MIT slide writes −f_o/f_e, the minus meaning the image is upside down; here only the size is used, as for N in Dutch books. |
| 3 | warning | `<Formula label="Light collected by a telescope">`, `at=`; calcs `quiz-aperture`, `eye-vs-telescope` `source.at` | NASA: "The larger a mirror is, the more light it can collect over a given period of time." | Quotes 'the larger the mirror, the more light it can collect' in quotation marks | Quote the page exactly, or drop the quotation marks and paraphrase. |
| 4 | warning | "Why bigger is better": $\text{light collected} \propto D^2$ | n/a | Uses the symbol ∝ without saying what it means. No written lesson introduces ∝ (Block 0 is not written; 0.6 "Quadratics and power laws" would be the place, but it is not a prerequisite) | Say "∝ means 'is proportional to'" in the sentence before, or add `quadratics-and-power-laws` to `prerequisites` if its §4 row covers proportionality. The symbol popup (`propto` in data/symbols.json) does explain it. |
| 5 | info | Frontmatter `readings` Lecture 4 location: "slide 8, positive and negative lenses"; body: "The MIT notes call this positive power when the surfaces bend rays inwards, and negative power when they bend rays outwards" | The words "Positive power bends rays 'inwards'" and "Negative power bends rays 'outwards'" are on Lecture 4 slide 5; slide 8 is "Types of lenses" (positive power ⇔ positive focal length) | Cites only slide 8 | Add slide 5 to the location. |
| 6 | info | Frontmatter `readings` Lecture 6 location: "slides 13–19, single-lens camera" | The single-lens camera example runs over slides 13-21 | 13–19 | Change to 13–21 (or leave; nothing on the page depends on slides 20-21). |
| 7 | info | "The eye and the camera": "(MIT Lecture 5, slide 12)" | Slide 12's accommodation drawings ("Remote objects: unaccommodated eye (lens muscles relaxed)", "Nearby objects: accommodated eye (lens muscles contracted)") carry the caption "from Fundamentals of Optics by F. Jenkins & H. White"; the slide's exclusion notice names Fig. 10B from the same book | Uses only the fact (relaxed for far, contracted for near), in own words, no figure | No licence problem (a plain fact, no text or figure reused). Optional: keep the citation, but be aware the slide's content here is third-party. |
| 8 | info | Plot `at`/text and Lecture 4 | Lecture 4 slide 4 sets a Cartesian sign convention (longitudinal distances positive to the right); Lecture 5 slide 2 writes the imaging condition as 1/s_o + 1/s_i = 1/f with both distances drawn as positive lengths | Uses 1/f = 1/d_o + 1/d_i with "real is positive" (d_i < 0 for a virtual image) | Correct and the same form as slide 2; no change needed. |

## Formulas and citations
- **P = 1/f** (`reading1`, Lecture 4 slide 7): slide 7 has "P ≡ 1/f is the lens power, measured in Diopters [m⁻¹]". Correct. Sign rule (converging P > 0, diverging P < 0): Lecture 4 slide 8, "Positive lenses have positive power ⇔ positive focal length", "Negative lenses have negative power ⇔ negative focal length". Correct.
- **1/f = 1/d_o + 1/d_i** (`mit`, Lecture 5 slide 2): slide 2 boxes "Imaging condition" 1/s_o + 1/s_i = 1/f, derived from similar triangles in the ray drawing. Correct; the renaming s → d is stated in `at`. The page's "Similar triangles in this ray drawing lead to the lens formula" matches the slide's derivation.
- **M = h_i/h_o = −d_i/d_o** (`mit`, Lecture 5 slide 2): slide 2 defines M_T ≡ h_i/h_o and boxes h_i/h_o = −s_i/s_o. Correct, sign kept as on the slide.
- **Real and virtual images** (Lecture 5 slide 3): slide 3 shows four cases: positive lens, object beyond FFP: "real & inverted; M_T < 0"; positive lens, object inside FFP: "virtual & erect; M_T > 1"; negative lens, two object positions: "virtual & erect; 0 < M_T < 1". The page's statements (real image always upside down, object inside f gives an upright enlarged virtual image, a diverging lens always gives an upright smaller virtual image) all match.
- **M_a = f_o/f_e** (`reading2`, Lecture 8 slide 13): slide 13 gives MP ≡ α_a/α_u = −f_o/f_e and d = f_o + f_e for an object at infinity; objective forms a real image at the field stop, eyepiece forms a virtual image at infinity. The page's description (objective image at its focal point, eyepiece placed so that image is at its own focal point, parallel rays out, lenses f_o + f_e apart, magnification = ratio of angles) matches. The dropped minus: see row 2.
- **Reflecting telescope** (Lecture 8 slide 14): Cassegrain with primary, secondary and eyepiece. Supported.
- **Chromatic aberration**: wrong slide, see row 1.
- **Aperture** (Lecture 6 slide 3): "The Aperture Stop limits the optical energy that is admitted through the system". Supports "An adjustable opening in the lens, the aperture, sets how much light is let through".
- **light collected ∝ D²** (`webb`): NASA says the primary mirror is a "light bucket" whose power depends on its collecting area, and that a larger mirror collects more light and gives "clearer, more detailed images ... (higher resolution)". D² is the geometry of a circle, stated on the page. Supported; quote wording in row 3.
- NASA values: Hubble 2.4 m, Webb collecting area 25.37 m², 5.6 times Hubble (Hubble 4.55 m²): all on the page's comparison table. "About 25 m², more than five times" is right. Webb's segments adjustable: NASA, "The orientation and precise shape ... of each mirror segment can be adjusted independently". Correct.
- Dutch notation note: 1/f = 1/v + 1/b with v = voorwerpsafstand, b = beeldafstand, S for strength (sterkte, in dioptrie), N = b/v for the (linear) magnification: correct as used in Dutch VWO books and Binas. "Dutch books use the size only" is fine; strictly, some books write N = |b|/v to make that explicit.

## Arithmetic and answer checks
All recomputed by hand, and `pytest tests/calc -k lenses` in the repo's venv: 25 passed.
- +2.5 D: f = 0.400 m. −4.0 D: f = −0.250 m. Correct.
- Camera (f = 0.050 m, d_o = 3.0 m): 1/d_i = 20 − 0.3333 = 19.667 m⁻¹; d_i = 0.050847 m = 50.8 mm. M = −0.050847/3.0 = −0.01695 → −0.0169. h_i = 0.01695 × 1.80 = 0.03051 m = 30.5 mm. Shift 50.85 − 50.00 = 0.85 mm. All correct. (30.5 mm "fits on a sensor 36 mm wide" means the camera is turned upright; a 36 × 24 mm sensor held level would not fit a 30.5 mm tall person. Fine as written, since it says "wide"; optional to say "held upright".)
- Magnifier (+12.5 D, d_o = 0.060 m): f = 0.080 m; 1/d_i = 12.5 − 16.667 = −4.167 m⁻¹ (shown −4.2); d_i = −0.240 m; M = 0.240/0.060 = +4.0. Correct.
- Telescope 900/25 mm: M_a = 36; length 0.925 m; with 10 mm eyepiece M_a = 90, length 0.910 m ("almost the same tube"). Correct.
- Eye vs telescope: 0.10/0.0070 = 14.29; 14.29² = 204.1 → 204, "about 200". Correct. (7 mm dark-adapted pupil: standard value, not in a cited source; acceptable.)
- Plot: d_i = f d_o/(d_o − f) is the lens formula solved for d_i (checked at three points); at d_o = 2f, d_i = 2f, so the curve meets the dashed line d_i = d_o at 0.20 m for f = 0.10 m; at d_o = 0.6 m, d_i = 0.12 m (close to f); for d_o < f, d_i < 0 (e.g. d_o = 0.05 m gives −0.10 m). d_i(d_o; f) = f·g(d_o/f), so "the whole curve scales with f" is true (within the clipped window). Caption correct.
- Quiz 1 (f = 0.20 m): P = 5.0 D, marked choice 2 = "5.0 dioptres". Correct; 0.20, 2.0 and 20 are wrong.
- Quiz 2 (f = 15 cm, d_o = 30 cm): d_i = 30 cm, M = −1; marked choice 1 correct. 15 cm (object at infinity), 60 cm and "no image" are wrong.
- Quiz 3 (d_o < f): virtual, upright, larger; marked choice 2 correct. The two "real" choices and "no image" are wrong (no image only for d_o = f exactly).
- Quiz 4 (1.2 m / 20 mm): 1.2/0.020 = 60; marked choice 2 correct. 6, 24 and 600 are wrong.
- Quiz 5 (twice as wide): 2² = 4; marked choice 2 correct (`quiz-aperture`).
- Flashcards: all six statements are correct.
- NASA ratio: 25.37/4.55 = 5.58, "more than five times". Correct. Note for the author: Webb's diameter 6.6 m against Hubble's 2.4 m gives (6.6/2.4)² = 7.6, not 5.6, because Webb's mirror is a hexagon of segments with a central gap. The page does not give Webb's diameter, so nothing on the page contradicts D², but a reader who looks it up may ask; one clause ("its area, not just its width, is what counts") would head this off. Optional.
- calcs: `hubble-mirror` has `origin: later-data`, but the value is simply the cited NASA reference's value; `source` seems the better fit. Info.

## Only earlier terms
- Prerequisites: `reflection-and-refraction` (5.9, written, read): introduces refraction, refractive index, Snell's law, dispersion and the prism, so "dispersion, lesson 5.9" and "In lesson 5.9 you saw that light bends" are covered. `rearranging-formulas` (0.4, planned; title "Solving and rearranging formulas" covers taking an inverse and solving 1/d_i = 1/f − 1/d_o). `angles-and-trigonometry` (0.7, planned; covers angles for angular magnification; similar triangles plausibly part of it, but its §4 row names only AT 7.1-8.1 and CP 6.1: uncertain).
- ∝: not introduced (row 4).
- "radius of curvature" (Try it section) is not defined on this page or in 5.9. Minor, since it is a PhET slider name; a few words ("how strongly the lens surface is curved") would do. Info.
- "pupil" (worked example "A telescope against your eye") is used without definition; an everyday word, fine.
- All other new terms are defined where they first appear: lens, converging/diverging, optical axis, focal point, focal length, strength, dioptre, object, image, object/image distance, magnification, real/virtual image, retina, aperture, objective, eyepiece, angular magnification, primary mirror, concave.
- "lesson 5.11" (diffraction) is a correct forward reference: 5.11 is "Interference and diffraction" in the block's lesson list.

## Coverage
- §4 row 5.10 (topic "Lenses and telescopes", PhET geometric-optics, leads to `8-03/diffraction-resolution`): covered. Converging/diverging lenses, focal length, strength, lens formula, magnification, real and virtual images, eye, camera, magnifier, refracting and reflecting telescopes, chromatic aberration, light-gathering power, all at VWO level.
- Level: MIT 2.71 is a university course (ray-transfer matrices, principal planes, thick lenses, stops and pupils). The page takes only the thin-lens results and drops all the matrix and thick-lens material; the result reads as a VWO lesson. Simplified enough.
- Not covered, at this level worth a thought: a generated ray diagram of the three principal rays (VWO students must construct ray diagrams; the page describes the rays in words and leaves the drawing to PhET), near and far point and the correction of short- and long-sightedness (only "Glasses add a lens of the right strength"). Neither is required by §4; info.
- Source choice: §2.0 names Siyavula as Block 5's main source, but Siyavula's Grade 11 geometrical optics (used for 5.9) stops before lenses, so an MIT OCW course is a reasonable choice within §2.0's "MIT OpenCourseWare". Info.

## Where this leads
- `{ course: "8.03", lecture: 22 }` = content/year-2/8.03/diffraction-resolution.mdx, "Diffraction and resolution": its summary gives the circular-aperture first zero at sin θ ≈ 1.22λ/D as the resolution limit. The `why` text matches. Correct and the same target as §4.
- `towards: false` is right (5.10 is not the block's last lesson).

## Licensing and AI terms
- Licence checks on the four PDFs: "All rights reserved ... excluded from our Creative Commons license" appears on Lecture 5 slides 12 and 13 (Jenkins and White figures) and on Lecture 8 slide 13 (Hecht Figs. 5.105, 5.106) and wk5-a-2 and later (Hecht, Jenkins and White figures). On slide 13 only the figures are excluded; the bullet text and the formulas d = f_o + f_e and MP = −f_o/f_e are MIT's own. Lecture 5 slides 2-3, Lecture 4 slides 4-8, Lecture 8 slide 14 and wk5-a-1, and Lecture 6 slide 3 carry no exclusion. The page uses no excluded figure or text. See row 7 for the eye slide (fact only).
- No copied sentences found. "light bucket" (NASA: "can be thought of as a 'light bucket'") is a short standard phrase. "imaging condition" is named as the MIT term.
- Worked examples and quiz questions are the page's own: MIT's only numerical example in these slides is the two-lens composite (f = 10, object at 5, Lecture 5 slides 4-5); nothing on the page uses those numbers or that set-up.
- No figure from any source; the only graph is a `<Plot>` computed from the lens formula.
- NASA: no insignia, no "according to NASA" phrasing; the reference carries the date read.
- No ESO text; no Siyavula material; no forbidden source.
- PhET geometric-optics 1.3.18 is in public/phet/manifest.json; the sim has "Lens" and "Mirror" screens, a pencil object, a "Virtual Image" checkbox, a radius-of-curvature control and an "Index of Refraction" control, so the "Try it" instructions match.

## Notes
- Author credit "G. Barbastathis, C. Sheppard and S. B. Oh" and the four lecture titles match OCW (Lecture 6's OCW title starts "Terms: apertures, stops, pupils, and windows"; Lecture 8's ends "aberrations: chromatic, spherical, and coma"; the shortened forms on the page are fine).
- No em dashes on the page.
- Fix row 1 (the only error) and consider rows 2-4; then the page can pass.

## Resolution (2026-11-20, by the page author)

1. (error) Fixed. Checked the local Lecture 8 PDF: slide wk4-b-15 is Schmidt's correction plate; chromatic aberration is on wk5-a-1 ("Aberrations", PDF page 4). The body now says "chromatic aberration (Lecture 8, slide wk5-a-1)" and the Lecture 8 readings location says "slide wk5-a-1 (Aberrations, PDF page 4), chromatic aberration". wk5-a-2 is not cited.
2. (warning) Fixed. Added after the telescope formula: the MIT slide writes the magnifying power as -f_o/f_e, the minus sign meaning (as for M) that the image is upside down; this lesson uses only its size, as Dutch books do.
3. (warning) Fixed. The formula's `at` is now a paraphrase without quotation marks ("NASA: a larger mirror collects more light in a given time; the area of a circle grows with D²"); the calcs entries quiz-aperture, eye-vs-telescope and eye-vs-telescope-ratio use the same paraphrase, marked "(paraphrase)".
4. (warning) Fixed. The sentence before the formula now says the light collected is proportional to D², and that the symbol ∝ means "is proportional to".
5. (info) Fixed: slide 5 added to the Lecture 4 location (checked in the local PDF: "Positive power bends rays inwards", "Negative power bends rays outwards").
6. (info) Fixed: Lecture 6 location now "slides 13–21".
7. (info) No change (fact only, own words, no figure).
8. (info) No change needed.
Other info notes: "radius of curvature" in Try it now explained ("how strongly the lens surfaces are curved"). calcs hubble-mirror and webb-area: origin set to `mit` (the test allows only mit, page-own, later-data, slip; `mit` = a value from a cited source). Added one sentence that Webb's mirror is made of hexagonal segments with a gap in the middle, so its area, not the width alone, counts (NASA page: 18 hexagonal segments; added to the reference location). Camera "held upright" left as is.

Checks: `npm run calc:test -- -k lenses`: 25 passed. `npm run content:check`: 0 error(s); the only warnings for this page are the two planned prerequisites (rearranging-formulas, angles-and-trigonometry) not yet written.
