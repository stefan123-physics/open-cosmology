---
page: content/year-0/hs-5/reflection-and-refraction.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/geometrical-optics (read, contents page)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/geometrical-optics/05-geometrical-optics-02 (read, 5.2 Light rays; not cited by the page)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/geometrical-optics/05-geometrical-optics-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/geometrical-optics/05-geometrical-optics-05 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/geometrical-optics/05-geometrical-optics-06 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/geometrical-optics/05-geometrical-optics-07 (read)
  - https://www.siyavula.com/read/za/natural-sciences/grade-8/visible-light/12-visible-light (read)
  - public/phet/bending-light_1.2.7_en.html (strings and screen code inspected)
verdict: pass-with-notes
---

# Review: Reflection and refraction

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Try it" | Bending Light 1.2.7, Intro and More Tools screens: the laser's drag angle is clamped to π/2…π (`clampDragAngle: … clamp(e, Math.PI/2, Math.PI)`), so the laser always sits in the top material | "Then put the laser in the lower material and increase the angle until the beam no longer comes out" | "Then make the top material glass or water and the bottom one air, and increase the angle until the beam no longer comes out." |
| 2 | warning | calcs, quiz 3 | n/a | Distractor $29.5^\circ$ (= tan⁻¹ 0.565 = 29.47°) has no calcs entry; 55.6° and 48.7° do | Add `quiz-sapphire-distractor-tan`: `atan(1/n)*180/pi`, n = 1.77, expected 29.5 |
| 3 | warning | `readings[3].location` ("…optical fibres, diamonds") and "Why diamonds sparkle" | 5.7 has no text on diamonds sparkling; it only has an exercise on light trapped in a diamond under water (33.35°) | Diamond sparkle by total internal reflection, as if from 5.7 | Drop "diamonds" from the location, or say it is the page's own application. The physics is standard and correct |
| 4 | info | "Light rays" section | Rays as straight arrows showing the direction of travel, "light rays are not real", is in 5.2 (and only in an exercise answer in 5.3) | Cites reading1 = 5.3 for rays | Optionally add 5.2 Light rays as a reading |
| 5 | info | "Reflection", smooth vs rough surfaces | Not in 5.3 | Specular vs scattered reflection | Standard and correct; no source change needed |
| 6 | info | Table of indices | Table 5.1: air 1,0002926; water (liquid, 20 °C) 1,333; crown glass 1,52; sapphire 1,77; diamond 2,419 | 1.0003, 1.33, 1.52, 1.77, 2.42, "a few values from the table in the source" | Consistent (rounded; Siyavula's own worked examples also use 1,33 and 2,42). Optionally write "(rounded)" under the table |
| 7 | info | "Refraction and the refractive index", 398 nm | Siyavula Exercise 5.4 answers claim "The wavelength of the light remains the same" when n changes | Wavelength shrinks by n, frequency unchanged | The page is right and the source's exercise answer is wrong; no change needed |

## Formulas and citations
- Law of reflection `\theta_r = \theta_i`, cite reading1, Sec. 5.3: matches 5.3 (θ_i = θ_r, plus the plane of incidence). Correct.
- Refractive index `n = c/v`, reading2, Sec. 5.5: matches 5.5 (c = 3,00 × 10⁸ m·s⁻¹, n has no unit, all n > 1). Correct.
- Snell's law `n_1 \sin\theta_1 = n_2 \sin\theta_2`, reading3, Sec. 5.6: matches the boxed equation; towards/away from the normal and the θ₁ = 0 case (speed still changes) match 5.6. Correct.
- Critical angle `\sin\theta_c = n_2/n_1`, reading4, Sec. 5.7: 5.7 derives n₁ sin θc = n₂ sin 90° and boxes θc = sin⁻¹(n₂/n₁): equivalent. The two conditions for total internal reflection match 5.7 in content, not in wording.
- c = 3.00 × 10⁸ m/s: 5.5 (and lesson 5.8).
- Frequency unchanged at a boundary: stated in 5.5.
- Optical density: 5.5 defines it as a measure of "refracting power"; the page defines "optically denser" as larger n and separates it from mass density. Consistent and clearer.
- Optical fibres (core, cladding, thinner than a hair, telecommunications, endoscopes): 5.7. Correct.
- Dispersion and rainbow: reference `siyavula8` (Grade 8, 12.2 and 12.7). Not cited inline (no `<Formula>` in that section); it appears in the Sources list, which is acceptable for prose.
- Flag 1 (dispersion, violet vs blue): Grade 8 12.7 body text says red refracts least and blue most; its end-of-chapter answer says red bends least and violet most, and its colour list runs red to violet. The page's "violet bent most, red least" and "n slightly larger for violet than for red in glass and water" is correct physics (normal dispersion) and is supported by the Grade 8 answer; the body text's "blue" is a simplification. Adequately supported. "Colours travel at different speeds in glass" matches 12.7.
- Rainbow: "red on the outside of the bow and violet on the inside" agrees with Grade 8 (red at the top, violet at the bottom) for the primary bow; refraction in, reflection at the back, refraction out is standard and correct.
- Plot: `asin(sin(x*pi/180)/n)*180/pi` is Snell's law from air (n₁ = 1) solved for θ₂; the caption says it is computed from the formula. Domain and range 0–90°, slider 1–2.5 keeps asin defined. Correct.

## Arithmetic and answer checks
All recomputed independently (Python), and `node scripts/calc-test.mjs -k reflection`: 73 passed.
- Diamond speed: 3.00e8/2.42 = 1.2397e8 → 1.24 × 10⁸ m/s; 1/2.42 = 0.413, "well under half". OK.
- 530/1.33 = 398.5 → 398 nm. OK.
- Glass block: sin 50° = 0.76604; /1.52 = 0.50398 → 0.504; θ₂ = 30.26° → 30.3°. OK.
- Pool: 1.33 × 0.500 = 0.665; sin⁻¹ = 41.68° → 41.7°. OK.
- Crown glass limit/critical angle: sin⁻¹(1/1.52) = 41.14° → 41.1° (41.12° with n_air = 1.0003, same rounding). OK.
- Glass at 50° inside: 1.52 × 0.766 = 1.164 → 1.16 > 1. OK.
- Diamond critical: 1/2.42 = 0.4132 → 0.413; 24.41° → 24.4°. OK.
- Fibre: sin⁻¹(1.46/1.48) = 80.57° → 80.6°. OK.
- Quiz 0: 90 − 20 = 70°, answer index 2. Distractors 20° (from surface), 40°, 140° all wrong. OK.
- Quiz 1: 3.00/2.00 = 1.50, index 1. Distractors 0.67 (v/c), 2.00, 6.00 (product) all wrong. OK.
- Quiz 2: glass → air bends away from the normal, index 1. OK.
- Quiz 3: 1/1.77 = 0.5650; sin⁻¹ = 34.40°, index 1. Distractors: 29.5° (tan⁻¹ 0.565 = 29.47°), 48.7° (sapphire → water, sin⁻¹(1.33/1.77) = 48.71°), 55.6° (90° − 34.4°). All wrong. Explanation true.
- Quiz 4: violet, index 3. Explanation true.
- Flashcards: all statements true; index values match the table.
- Flag 3: the quoted indices are consistent with Table 5.1 as rounded values; `kind: fact`, `origin: mit` (main source) is consistent across the facts. Minor: `plot-indices` is marked `origin: page-own` though it repeats table values; harmless.

## Only earlier terms
- Electromagnetic wave, c, visible spectrum, nm, the 530 nm green laser: lesson 5.8 (written; the 530 nm example is there). OK.
- Frequency, wavelength, v = fλ, pulses: lesson 5.3 `waves` (written). OK.
- "Ordinary density in kilograms per cubic metre": lesson 4.1 (density-and-pressure), an earlier block; used only to say it is a different thing. OK.
- sin and the sin⁻¹ key: lesson 0.7 `angles-and-trigonometry`, planned, not yet written (no Block 0 lesson exists in this repo yet). Its title covers trigonometry; its §4 row (old sources AT 7.1–7.3, 8.1) does not clearly include the inverse sine. The page explains the key in one sentence, which is enough here; when 0.7 is written, make sure it introduces sin⁻¹, or drop "(lesson 0.7)" from that sentence. (info)
- Indigo appears for the first time in the prism colour list (5.8 lists red to violet without indigo); self-explanatory in context. (info)
- Every other term (ray, normal, angles of incidence/reflection/refraction, refractive index, optically denser, critical angle, total internal reflection, core, cladding, endoscope, dispersion, prism) is defined on the page before use.

## Coverage
- §4 row 5.9 (reflection and refraction; PhET bending-light): ray model, law of reflection, refraction, n = c/v, Snell's law, critical angle, total internal reflection, fibres, dispersion and rainbows are covered at VWO level.
- Not covered: the image in a plane mirror (virtual, same distance behind the mirror). Lesson 5.10 (lenses) may take images; at VWO level a plane-mirror image is often taught with reflection. (info)
- Dutch VWO writes Snell's law as sin i / sin r = n; the page follows the university notation n₁ sin θ₁ = n₂ sin θ₂. A one-line note could help Dutch readers. (info)

## Where this leads
- `{ course: "8.03", lecture: 16 }` = `content/year-2/8.03/two-dimensional-waves-snells-law.mdx`: derives the law of reflection, Snell's law n sin θ = n′ sin θ′ and total reflection beyond a critical angle from matching plane waves at a boundary. Matches the topic and the `why` text, and agrees with the §4 row. `towards: false` is correct.

## Licensing and AI terms
- Siyavula Grade 11 and Grade 8 pages: footer links to CC BY 3.0 ("All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License"); embedded external videos and simulations excluded. The page uses neither Siyavula's videos nor its embedded simulation; PhET is used separately. No logo or branding; "Everything Science" appears only inside the citation title, which is attribution, not branding.
- No copied sentences found. Closest: the spoon in water and "a pool looks shallower" parallel 5.5's straw paragraph, but in different words and with a different object; acceptable.
- No figures copied; the only diagram is a generated `<Plot>`.
- Examples and quiz against Siyavula's:
  - Reflection: Siyavula 15° and 45° to the normal, 25° to the surface (→ 65°), and the Fig. 5.6 illustration at 60° to the normal. Page: 30° to the mirror (→ 60°) and quiz 20° to the surface (→ 70°). Same idea, different numbers; the page's 60° result coincides with Siyavula's figure value from a different set-up. Acceptable. (info)
  - n = c/v: Siyavula glycerine, ice, and the unknown 1,974 × 10⁸ m/s → 1,52 crown glass. Page: diamond speed and a 2.00 × 10⁸ m/s plastic → 1.50. Different.
  - Snell: Siyavula water/unknown 25°/20,6°, water → air 35°, water → diamond 75°, exercises 40°, 69°, 27°, 23°, 53°/37°, 45°, air–diamond 30°. Page: air → crown glass 50°, pool water → air 30°. Different values and situations; the pool example shares the water-to-air structure of Siyavula's worked example 3 but has its own numbers and context. Acceptable.
  - Critical angles: Siyavula water 48,8°, glass 42° (text) and 41,8° (n = 1,5 fibre), acetone 47,33°, diamond → water 33,35°, glass → water 62,46°, glycerin/diamond 37,4°, fibre 1,9/1,5. Page: diamond → air 24.4°, sapphire quiz 34.4°, fibre 1.48/1.46 → 80.6°. Different.
  - Writer's question on crown glass 41.1° and the 48.7° distractor: 41.1° follows from the table value n = 1.52 and appears only as a comparison number; it is neither Siyavula's 41,8° (n = 1,5) nor its 42°, and it is not presented as an example. The 48.7° distractor is sapphire → water, a distinct calculation that happens to sit next to Siyavula's water → air 48,8°. Neither is a copy; both acceptable. If the owner wants a clearer margin, the distractor could be swapped for another plausible slip, but this is not required. (info)
- PhET Bending Light (flag 2): the pinned sim (v1.2.7, in `public/phet/manifest.json`) has the screens Intro, Prisms and More Tools ("Prisms" is a screen-name string), a Protractor tool (`showProtractorProperty`, "Protractor" string) on the ray screens, and a white-light colour mode on the Prisms screen (`whiteLightRays`, colour mode WHITE, chosen by an icon button without a text label, so "switch to white light" is accurate). The one inaccuracy is "put the laser in the lower material" (table, #1).

## Notes
- No em dashes on the page.
- "Every material has n larger than 1, because light is never faster than in a vacuum" is true for visible light in ordinary materials (and is what Siyavula says); X-ray and metamaterial exceptions are irrelevant at this level. (info)
- calc:test: 73 checks matching "reflection" pass.

## Resolution (2026-11-20, by the page author)
1. (warning) Fixed. "Try it" now says: make the top material glass or water and the bottom one air, and increase the angle until the beam no longer comes out (the laser stays in the top material in Bending Light 1.2.7).
2. (warning) Fixed. Added calcs entry `quiz-sapphire-distractor-tan`: atan(1/1.77) in degrees, expected 29.5, shown "$29.5^\circ$".
3. (warning) Fixed. "diamonds" removed from reading 5.7's location; the diamond sparkle stays as the page's own application of the critical angle (standard physics).
4. (info) Done. Added Siyavula 5.2 Light rays (checked: page title "5.2 Light rays") as a reading for the idea of a ray.
5. (info) No change, as suggested.
6. (info) Done. The table's intro now reads "A few values from the table in the source (rounded):".
7. (info) No change: the page is right.
- Plane mirror image (coverage info): lesson 5.10 (lenses-and-telescopes) does not treat the image in a flat mirror (only curved mirrors in telescopes), so one sentence was added under "Reflection": the image seems to stand as far behind the mirror as the object is in front, because the reflected rays look as if they came from there. Page's own, standard.
- Dutch notation (coverage info): one line added after Snell's law: Dutch VWO books often write sin i / sin r = n, the same law for light from air (n1 = 1).
- sin inverse and lesson 0.7, indigo, examples close to Siyavula's, "n larger than 1": left as is (info, no change needed).

Checks: npm run calc:test -- -k reflection-and-refraction: 28 passed. npm run content:check: 0 errors; the only warning for this page is the planned prerequisite angles-and-trigonometry. Status set to reviewed.
