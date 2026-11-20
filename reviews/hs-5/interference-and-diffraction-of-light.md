---
page: content/year-0/hs-5/interference-and-diffraction-of-light.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/2d-and-3d-wavefronts/06-2d-and-3d-wavefronts-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/2d-and-3d-wavefronts/06-2d-and-3d-wavefronts-04 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/2d-and-3d-wavefronts/06-2d-and-3d-wavefronts-05 (read, all four subsections including the extension)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch14_inter_diffr/ (read, full PDF ch14_inter_diffr.pdf)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec22/ (read, full PDF MIT8_03SCF16_Lec22.pdf)
  - public/phet/wave-interference_2.1.2_en.html (screen names, scenes and control labels checked in the file)
verdict: pass-with-notes
---

# Review: Interference and diffraction (lesson 5.11)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Try it", last sentence | The PhET Diffraction screen (v2.1.2) has the scenes ellipse (with an Eccentricity slider; 0 gives a circle), rectangle (width and height), circle and square, disorder and waving girl. There is no "single slit" choice there; One Slit / Two Slits / No Barrier are on the Slits screen. | "On the "Diffraction" screen, see the pattern of a single slit and of a round hole." | "On the "Diffraction" screen, make the rectangle long and narrow to see the pattern of a slit, and set the ellipse's eccentricity to 0 (or choose the circle) to see the pattern of a round hole." |
| 2 | info | "Amount of diffraction" `<Formula cite="mit">`; calcs `door-vs-light` `cite: mit` | diffraction ∝ λ/w is in Siyavula 6.5, "Effect of slit width and wavelength on diffraction patterns", which is `readings[2]` | `cite="mit"` (the chapter landing page) with the section only in `at` | Use `cite="reading3"` (and `cite: reading3` in calcs) so the citation points to the section itself. Not wrong as it stands. |
| 3 | info | "One slit and many slits", grating paragraph | MIT 14.8: grating peaks are much sharper than the two-slit peaks, so a grating "gives a more precise measurement of the wavelength". Nothing about prisms. | "a grating spreads light into a spectrum, more precisely than a prism" | Standard and broadly true, but no cited source compares with a prism. Either say "and, because its lines are so sharp, it measures wavelengths precisely (MIT notes, Sec. 14.8)" or keep it as a general statement. |
| 4 | info | "Young's double slit", first sentence | MIT 14.2: "In 1801 Thomas Young carried out an experiment" with a monochromatic source, a slit S0, then two slits S1, S2. Sunlight and a "small hole" are not in the sources. | "Young let sunlight pass through one small hole and then through two narrow slits close together." | Historically Young used sunlight; the exact arrangement (pinhole, card, slits) is debated. Softer: "Young let light from one narrow opening fall on two narrow slits close together." Optional. |
| 5 | info | Worked example "Two loudspeakers", step "Path difference" | (No source example.) At 3.00 m and 3.75 m the two sounds are not equally loud (amplitude roughly ∝ 1/r, ratio 0.8), so they cancel only partly; quiz 1 says "(nearly) cancel". | "The waves arrive half a cycle out of step and cancel: the note is quiet." | "…and largely cancel: the note is quiet." Consistent with the quiz. |
| 6 | info | Destructive interference `<Formula>` | MIT Eq. (14.2.6) gives m = 0, ±1, ±2, … | No range for n | Add `\qquad n = 0, \pm 1, \pm 2, \dots` as in the constructive formula. |

## Formulas and citations
- "Amount of diffraction", diffraction ∝ λ/a: Siyavula 6.5 "Effect of slit width and wavelength", diffraction ∝ λ/w, w the slit width. Correct; the change w → a is stated in `at` and in the text. See row 2 for the cite key.
- "Constructive interference (sources in step)", r₂ − r₁ = nλ, n = 0, ±1, …: MIT Sec. 14.2 defines the path difference δ = r₂ − r₁ (p. 4) and Eq. (14.2.5) δ = d sin θ = mλ, m = 0, ±1, ±2, …. Correct; n for m is stated in `at`.
- "Destructive interference", r₂ − r₁ = (n + ½)λ: MIT Eq. (14.2.6) δ = (m + ½)λ. Correct (row 6: range missing).
- "Bright fringes of a double slit", d sin θ = nλ: MIT Eqs. (14.2.4) δ ≈ d sin θ (for L ≫ d) and (14.2.5). Correct; the page states the L ≫ d condition and the near-parallel rays, as MIT does.
- "Fringe spacing (small angles)", Δy = λL/d: MIT Eq. (14.2.7) sin θ ≈ tan θ = y/L and Eq. (14.2.8) y_b = mλL/d; the spacing follows directly. Correct; `at` names both equations and y_b.
- "Intensity of the double-slit pattern (small angles)", I = I₀ cos²(πdy/λL): MIT Eq. (14.3.15) (the small-angle form; Eq. (14.3.14) is the sin θ form). Correct equation number. "I₀ is the intensity of the brightest fringes" matches MIT "the maximum intensity on the screen". "Power per square metre" matches MIT's time-averaged Poynting flux.
- "Dark places behind a single slit", a sin θ = nλ, n = ±1, ±2, …: MIT Eq. (14.5.4), m = ±1, ±2, ±3, …; Siyavula 6.5 extension "Interference Minima" sin θ = mλ/w, m = ±1, ±2, ±3, …. Both correct and both named in `at`. The pairing argument (each point of the upper half with the point a/2 below it, path difference λ/2) is MIT Sec. 14.5, Eqs. (14.5.1)–(14.5.2), in the page's own words.
- Grating, d sin θ = nλ (inline, "MIT notes, Eq. 14.8.1"): MIT Eq. (14.8.1) for the principal maxima; sharper maxima for many slits is MIT Sec. 14.8 (p. 20). Correct.
- "Smallest angle a round opening can resolve", sin θ_R ≈ 1.22λ/D: MIT 8.03 Lecture 22 notes, p. 6 (pin hole / aperture: first zero of J₁ at x ≈ 3.83, "sin θ ≈ 1.22 λ/D", resolution "such that we can separate the two peaks"). Correct page and formula.
- "For these small angles sin θ_R ≈ θ_R in radians": correct; the small-angle approximation is lesson 5.2 (`the-pendulum`, written).
- Coherence: MIT Sec. 14.1 (coherent and monochromatic; an incandescent bulb is incoherent because it emits many wavelengths without a constant phase relation). The page's "Two separate light bulbs are not coherent: each sends out a jumble of short bursts of many wavelengths" is supported; "short bursts" is standard physics not in the source, correct.
- "In 1801 Thomas Young…": MIT Sec. 14.2 gives 1801. Supported.
- Huygens' principle: Siyavula 6.3 and MIT Sec. 14.4. "The line that touches all these wavelets" is correct. "In the seventeenth century" is correct.
- Diffraction behind a gap: Siyavula 6.4 (definition; doorway; ripple tank) and 6.5 (the wavelets needed to keep the wavefront straight are blocked). Correctly paraphrased.
- Two wave generators in a ripple tank with constructive and destructive regions: Siyavula 6.4 activity. Supported.
- Lesson cross-references: 5.4 = `superposition-and-standing-waves` (written, lecture 4); 5.8 = `electromagnetic-spectrum` (visible 400–700 nm, written, lecture 8); 5.10 = `lenses-and-telescopes` (line 202 promises "it follows in lesson 5.11"); 0.7 = `angles-and-trigonometry` (planned). All correct.

## Arithmetic and answer checks
All recomputed independently in Python; `node scripts/calc-test.mjs` passes (8496 passed, including this file's 23 entries).
- Loudspeakers: λ = 343/686 = 0.500 m; (3.75 − 3.00)/0.500 = 1.5 → odd number of half wavelengths, quiet. 1.00 m/0.500 m = 2 → loud. Correct.
- Laser pointer: λ/d = 635e-9/0.30e-3 = 2.117 × 10⁻³ → "2.1 × 10⁻³"; θ = asin(2.117e-3) = 2.117 × 10⁻³ rad = 0.1213° → "0.12°" (degrees, correctly converted). Δy = 635e-9 × 2.5/0.30e-3 = 5.29 mm → "5.3 mm". Correct.
- Plot: caption "5.3 mm apart" is the same value. Expression cos(pi*d*y*1000/(lam*2.5))^2 with y and d in mm, λ in nm, L = 2.5 m: πdy/(λL) = π·d[mm]·y[mm]·10⁻⁶/(λ[nm]·10⁻⁹·2.5) = π·d·y·1000/(2.5λ). Units correct; period in y = λL/d = 5.29 mm at the start values; bright at y = nλL/d, dark halfway (calcs identities pass). At the extreme slider values (λ = 400 nm, d = 0.5 mm) the spacing is 2.0 mm, 15 periods over the 30 mm domain with the default 400 samples: about 27 samples per period, smooth enough. Caption direction ("bluer colour or larger d crowd the fringes") correct.
- Measuring a wavelength: first to eleventh fringe = 10 spacings, 39.6/10 = 3.96 mm; λ = 3.96e-3 × 0.25e-3/1.80 = 5.50 × 10⁻⁷ m = 550 nm, "yellowish green" correct.
- One narrow slit: λ/a = 635e-9/0.050e-3 = 0.0127; y = 2.0 × 0.0127 = 0.0254 m (L tan θ = 0.025404 m, so the small-angle step is fine); band 2 × 2.54 = 5.08 cm → "5.1 cm"; 5.08 cm/0.050 mm = 1016 → "a thousand times wider". Correct.
- Eye vs telescope: 1.22 × 550e-9/7.0e-3 = 9.59 × 10⁻⁵ rad → "9.6 × 10⁻⁵"; 1.22 × 550e-9/0.10 = 6.71 × 10⁻⁶ rad → "6.7 × 10⁻⁶"; ratio 14.29 = 0.10/0.0070 → "about 14 times finer, the same factor as the ratio of the diameters". Correct, stated in radians.
- Door estimate: door about 0.8–1 m, light 400–700 nm: ratio 1.1 × 10⁶ to 2.5 × 10⁶ (0.9 m/550 nm = 1.6 × 10⁶). "Roughly a million times smaller" is right in order of magnitude; the calcs tolerance of 70% covers 1.64 × 10⁶ vs 10⁶ (64% off). Acceptable for "roughly".
- Voice wavelengths "tens of centimetres up to a few metres": speech fundamentals of about 85–300 Hz give 1.1–4 m; formants up to about 3 kHz give about 11 cm. Correct for the main part of speech.
- "Light waves are less than a thousandth of a millimetre long": 400–700 nm = 0.0004–0.0007 mm. Correct.
- Quiz 1 (answer 1, destructive): path difference 1.5λ → quiet; frequency choices wrong; "loud" wrong. Correct.
- Quiz 2 (answer 1, closer together): Δy = λL/d and blue λ < red λ. Other choices wrong. Correct.
- Quiz 3 (answer 2, 3.6 mm): 480e-9 × 3.0/0.40e-3 = 3.6 × 10⁻³ m. Distractors 0.36 mm, 1.2 mm (L taken as 1 m), 36 mm all wrong. Correct.
- Quiz 4 (answer 0, wider): sin θ = λ/a; smaller a → larger angle. Other choices wrong. Correct.
- Quiz 5 (answer 1, 18.9°): d = 1/600 mm = 1.667 × 10⁻⁶ m; sin θ = 540e-9 × 6.0e5 = 0.324; θ = 18.905° → 18.9°. Distractors 9.3° (sin θ = 0.162), 32.4° (0.324 read as degrees ×100), 40.4° (second order, sin θ = 0.648): all wrong for first order. Correct. Cosmetic: the explanation writes "540 × 10⁻⁹/1.67 × 10⁻⁶" without brackets; a fraction or brackets would be cleaner.
- Flashcards: all five statements true.
- Calcs quiz indices are 0-based (`quiz: 2` = question 3, `quiz: 4` = question 5), consistent with the other hs-5 calcs files. Every number on the page is in the calcs file.

## Only earlier terms
- Written prerequisites read: `superposition-and-standing-waves` (5.4: superposition, constructive/destructive interference), `electromagnetic-spectrum` (5.8: visible 400–700 nm), `lenses-and-telescopes` (5.10: aperture D, objective, mirror, "finer detail", the promise of 5.11). `waves` (5.3, earlier in the block: wavelength, in phase, compressions and rarefactions, v = fλ).
- `angles-and-trigonometry` (0.7) is planned, not written; its lesson-list title "Angles, radians and trigonometry" covers the sin, cos, tan, radians and degrees used here. Counts as introduced.
- Small-angle approximation sin θ ≈ θ (radians) is introduced in 5.2 `the-pendulum` (written). The page uses it ("sin θ_R ≈ θ_R in radians") and sin θ ≈ tan θ without naming lesson 5.2. Info: add `the-pendulum` to prerequisites, or "(lesson 5.2)" after the first small-angle step.
- Intensity is introduced in 5.5 `sound`, which is not in `prerequisites`; the page defines it inline ("the power per square metre"), so no gap. Info: `sound` could be added to prerequisites.
- Prism and spectrum: 5.9 `reflection-and-refraction` (prerequisite of 5.10). ∝: used in 5.10. Wavefront, Huygens' principle, diffraction, path difference, coherent, fringe, grating and resolve are introduced on this page before use. "Laser" is not defined, but the page says what matters (one wavelength, stays in step).
- Nothing used before it is introduced.

## Coverage
- docs/HIGHSCHOOL-PLAN.md §4 row 5.11 (topic "Interference and diffraction", PhET wave-interference): Huygens' principle, diffraction and its dependence on λ/a, two-source interference with path difference, coherence, Young's double slit (angles, fringe spacing, measuring λ), the cos² intensity (shown, not required), single-slit minima, grating, resolution 1.22λ/D. Complete for VWO level.
- Not covered: thin-film interference, grating sharpness versus number of slits in detail, the single-slit envelope on double-slit fringes. None is needed at this level (thin films and the envelope are in the 8.02 lesson).
- Level: VWO-appropriate; derivations are geometric and the intensity formula is explicitly optional.

## Where this leads
- 8.02 lecture 33 `interference-and-diffraction` (content/year-1/8.02/interference-and-diffraction.mdx): path difference, d sin θ = mλ, λL/d, intensity I₀cos²(πd sin θ/λ) (Eq. 14.3.14), single slit and slits of finite width (Eq. 14.7.1). The `why` is accurate.
- 8.03 lecture 22 `diffraction-resolution` (content/year-2/8.03/diffraction-resolution.mdx): single-slit and circular-aperture patterns, the 1.22λ/D resolution limit. The `why` is accurate.
- `towards: false`: correct (5.11 is not the block's last lesson).

## Licensing and AI terms
- No copied sentences found. Closest wording: Huygens' principle (Siyavula 6.3, "Every point of a wave front serves as a point source of spherical, secondary waves") vs page "every point of a wavefront acts as a tiny source that sends out its own small circular waves": rewritten. Siyavula 6.5 "the secondary waves they would need to interfere with to create a straight wavefront have been blocked" vs page "the wavelets that would have kept the edges of the wavefront straight have been blocked": same idea, own words.
- Examples differ from the sources. Siyavula: 532, 650 and 450 nm; slits of 2511 and 1500 nm; a 1 m door with 532 nm; a 50 m harbour with 20 m waves; 500 nm on 30 nm. MIT 8.02T: 0.150 mm/120 cm/833 nm/2.00 cm; 600 nm/0.800 mm/1.00 mm; 0.320 mm/500 nm; 0.100 mm; 1.20 m/450 nm/0.10 mm. MIT 8.03: 5 mm pupil at 500 nm, iPhone at 401 ppi, 1 mm laser to the Moon. The page uses 686 Hz/3.00/3.75 m, 635 nm/0.30 mm/2.5 m, 0.25 mm/1.80 m/39.6 mm, 0.050 mm/2.0 m, 7.0 mm pupil vs 10 cm at 550 nm, quiz 480 nm/0.40 mm/3.0 m and 600 lines/mm at 540 nm. No overlap. The door comparison echoes Siyavula's door idea (and the sound-through-a-doorway example of 6.4) with no numbers or wording taken; it is a common illustration. Info only.
- No figures copied: the only graphic is the generated `<Plot>`.
- No Siyavula logo or "Everything Science" branding in the page body; "Everything Science" appears only in the source title, for attribution.
- MIT: nothing marked "excluded from our Creative Commons license" or "All rights reserved" is used (the page uses equations and arguments only, no figures).
- No NASA or ESO material; no forbidden source cited or used.
- PhET: `phet: wave-interference`, sim file present (wave-interference_2.1.2_en.html). The screens "Interference", "Slits" and "Diffraction" exist; the water scene, Separation slider, light scene with Screen, One Slit / Two Slits and Slit Width exist. The Diffraction-screen sentence is inaccurate (row 1).

## Notes
- Wording glitch in "Young's double slit": "Then the paths from the two slits to a point on the screen are almost parallel, and look at a point in the direction at an angle θ from straight ahead." Suggest two sentences: "…are almost parallel. Look at a point in the direction at an angle θ from straight ahead."
- No em dashes in the page.

## Resolution (2026-11-20, by the page author)
1. (warning) Fixed. "Try it" now says: on the "Diffraction" screen, make the rectangle long and narrow to see the pattern of a slit, and choose the circle (or set the ellipse's eccentricity to 0) to see the pattern of a round hole. Matches the scenes in wave-interference 2.1.2.
2. (info) Fixed. The "Amount of diffraction" Formula and the calcs entry `door-vs-light` now cite `reading3` (Siyavula 6.5), checked in the local copy of 6.5 ("Effect of slit width and wavelength", diffraction proportional to lambda/w).
3. (info) Fixed. "more precisely than a prism" removed; the sentence now says that because its lines are so sharp a grating measures wavelengths precisely (MIT notes, Sec. 14.8), as MIT p. 20 says.
4. (info) Fixed. The first sentence of "Young's double slit" now reads "In Young's experiment, light from one narrow slit falls on two narrow slits close together" (MIT 14.2: slit S0, then S1 and S2); sunlight and the small hole are gone. The intro keeps "In 1801", which MIT 14.2 states. Also softened "which is how Young first found that light waves are less than a thousandth of a millimetre long" to "and shows that light waves are less than a thousandth of a millimetre long", as no cited source makes the historical claim.
5. (info) Fixed. Loudspeaker example: "and largely cancel", consistent with quiz 1.
6. (info) Fixed. Destructive-interference Formula now ends with "n = 0, ±1, ±2, …", the range of MIT Eq. (14.2.6) (checked in the PDF).
Notes: `the-pendulum` (small-angle approximation) and `sound` (intensity) added to `prerequisites`; the "almost parallel, and look at a point" sentence split in two.

Checks: `npm run calc:test -- -k interference-and-diffraction-of-light`: 22 passed. `npm run content:check`: 0 error(s); the only warning for this page is the planned prerequisite angles-and-trigonometry (shown as "coming"), as before.
