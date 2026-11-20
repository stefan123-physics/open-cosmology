---
page: content/year-1/8.01/newtons-second-law-circular-motion.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/11-1-newtons-2nd-law-and-circular-motion/ (read; segment page; navigation shows Lesson 11 = segments 11.1–11.3)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter9/ (read; Chapter 9 PDF, all of it; printed pages 9-2 to 9-6 checked page by page with pdftotext; printed page = PDF page)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/eacf1c5cef0d40fb26cb75c6912b3cd8_tniGFmPQc0E.pdf (read; 11.1 transcript, 2 pp.; p. 1 ends at "the tangential forces are equal to ma tangential.")
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/d9124bda94b4d7790f8d52f098d9c285_ofgusnhQ07Q.pdf (read; 11.2 transcript, 4 pp.; "minus n sine phi" on p. 2, vertical equation, tan φ and √(rg tan φ) on p. 3, the v′/v″ discussion on pp. 3–4)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/11-3-demo-rotating-bucket/ (read; short text only; the video was not watched)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/readings/ (read; Lesson 11 readings = "Universal Law of Gravitation: Section 9.2" and "Worked Examples Circular Motion: Section 9.3")
  - https://arxiv.org/abs/1810.09466 (read, abstract only; v_c(R_sun) = 229.0 ± 0.2 km/s)
  - https://doi.org/10.1051/0004-6361/201935656 (not read; title and the 8178 pc value checked from memory only, see Notes)
verdict: pass-with-notes
---

# Review: Newton's second law and circular motion: banked turns and orbits

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Whole page; `source.readings[0].location` "Sections 9.1–9.2.2"; calcs header | The OCW Readings page assigns **Section 9.3, Worked Examples Circular Motion** (Examples 9.1 geostationary orbit, 9.2 double star, 9.3 rotating objects on a shaft, 9.4 tension in a rotating rope, 9.5 object on the inside of a cone, 9.6 coin on a turntable, pp. 9-6 to 9-16) to Lesson 11. No later 8.01SC lesson is assigned Chapter 9 (Lesson 12 reads Chapter 8, Example 8.9). | None of Section 9.3 is covered or mentioned. | Section 9.3 belongs to this lesson. Cover it, in own words and with own numbers, either as new sections or as a second Lesson 11 page (`order: 2`), for example: geostationary radius from ω = 2π/86164 s; double star and the reduced-mass correction to Kepler's law; two masses on a shaft (tensions); a rotating rope (dT/dr = −(m/L)ω²r, which needs only an integral); the cone (the banked turn turned upside down); the coin (μ_s g = Rω²_max). Update `location` and the calcs header. |
| 2 | warning | Formula "Tangential component", `cite="reading2" at="transcript 11.1, pp. 1–2"` | The 11.1 transcript says "we can write the tangential force as r d squared theta dt squared … r alpha z" (p. 2), with no m. The formula with m is the notes' Eq. (9.1.3), p. 9-2. | Cites the transcript for $F_\theta = mr\,d^2\theta/dt^2 = mr\,\alpha_z$ while the bracket two paragraphs later says the transcript leaves m out. | Cite `reading1` at "Eq. (9.1.3), p. 9-2" for the formula, or cite both (notes for the formula, transcript p. 2 for the $\alpha_z$ form). |
| 3 | warning | Bracket after "Uniform circular motion": "the board and the notes, Eq. (9.1.3), have m r d²θ/dt²" | The notes do have m (Eq. 9.1.3, p. 9-2). What the board shows cannot be checked from the transcript; the video was not compared. | States what the board shows. | Keep the claim about the notes; drop "the board" unless someone has checked the video. (Uncertain, not wrong.) |
| 4 | warning | Formula "At the top of the circle", `cite="seg113" at="segment 11.3 (demonstration)"` | Segment 11.3 is a video demo plus one paragraph saying the effect "can be explained using Newton's second law"; it contains no equation. | The prose correctly says the calculation is the page's own, but the `<Formula>` attributes $N + mg = mv^2/R$ to segment 11.3. | Make the `at=` say it, e.g. `at="demonstration only; equation is this page's own"`. Or derive it from the notes' radial law Eq. (9.1.2) and cite that, with seg113 cited in the prose. |
| 5 | warning | "Kepler's third law" section; Summary bullet 5; quiz 5 | The notes, Example 9.2 (pp. 9-9 to 9-10), say Eq. (9.2.7) assumed m₁ ≪ m₂ (the Earth fixed at the centre). With both masses, T = 2π√(s³/(G(m₁+m₂))), giving 2.33 × 10⁶ s for the Moon. | "The period does not depend on it", "independent of the orbiting mass", with no caveat. In quiz 5 the distractor "Because the Earth does not move" is in fact the assumption that makes the result hold. | Add half a sentence: "as long as the Moon is much lighter than the Earth, so the Earth can be treated as fixed". Rephrase the quiz distractor so it is clearly wrong, e.g. "Because the Moon is far away". |
| 6 | info | Formula "Radial component", cite Eq. (9.1.2) | Eq. (9.1.2) is $F_r = -mr(d\theta/dt)^2$ only. The "= −mrω²" form is the transcript's (11.1, p. 1, "r omega squared"). | Adds "= −mrω²" under the notes citation. | Fine as it is. Optionally mention the transcript too. |
| 7 | info | "Gravity on a circle" | The notes also cover Eq. (9.2.2) (the law of gravitation with its unit vector), the shell argument (Appendix 9A), the 1666/Third Law history, the 1882 Mercury discrepancy, and the estimate T₁ ≈ T + T/12 ≈ 29.5 days for the synodic month. | Links to the gravitation page instead of Eq. (9.2.2). Leaves out the history and the T/12 estimate. | Optional: add the one-line T/12 estimate, which explains why the synodic month is longer. |
| 8 | info | Banked turn, faster/slower discussion | Transcript p. 3: "v prime would be equal to r prime g tan phi" (spoken without the square). Reading it as $v'^2 = r'g\tan\varphi$ is right. | $r' = v'^2/(g\tan\varphi)$ (correct). | None needed. Strictly, a car that climbs a frictionless bank also loses speed, so "the new radius r′" is an idealisation, but this is the lecturer's simplification too. |

## Arithmetic and answer checks
I recomputed every number with Python (independently of `calcs/`). `npm run calc:test` gives 992 passed, and `npm run content:check` gives 0 errors and 0 warnings.
- Quiz 2: √(50 × 9.8 × tan 20°) = √(50 × 9.8 × 0.36397) = 13.35 m/s, so "about 13 m/s" is correct. The other choices (7.2, 18, 22) are clearly different.
- Quiz 3: faster car → larger radius → slides up the slope. Correct (transcript 11.2, pp. 3–4).
- Quiz 4: 4^{3/2} = 8. Correct.
- Quiz 5: the mass cancels. Correct (but see row 5 about the distractor).
- Quiz 1: the sum points to the centre with size mv²/r. Correct.
- Worked example "Designing a banked curve": tan 15° = 0.26795, 120 × 9.81 × 0.26795 = 315.4, √ = 17.76 m/s, × 3.6 = 63.9 km/h ≈ 64 km/h. The graph point y = 17.76 is correct. The example is original (the notes have no numerical banked turn).
- Worked example "bucket": √(9.81 × 0.80) = 2.801 m/s, and 2π × 0.80/2.80 = 1.795 s ≈ 1.79 s (1.794 s with the unrounded speed). Correct and original.
- Notes' Moon calculation: √(4π²(3.82 × 10⁸)³/(6.67 × 10⁻¹¹ × 5.98 × 10²⁴)) = 2.349 × 10⁶ s = 27.19 d. This matches the notes' 2.35 × 10⁶ s (9.2.5) and 27.2 days (9.2.6), and the page quotes them correctly. Synodic month 29.53 days: matches the notes, p. 9-5.
- Cosmology callout: v²R/G with v = 229 km/s, R = 8178 pc = 2.523 × 10²⁰ m, G = 6.674 × 10⁻¹¹ gives 1.98 × 10⁴¹ kg ≈ 2.0 × 10⁴¹ kg, which is 0.997 × 10¹¹ M_sun. "roughly 10¹¹ solar masses" is correct. The identity 4π²R³/(GT²) = v²R/G with v = 2πR/T is correct.
- Bank formula: dividing N sin φ = mv²/r by N cos φ = mg gives tan φ = v²/(rg). Correct.
- Plot: the range [0, 50] m/s clips the curve when the slider is above about 255 m (at r = 400 m, φ = 45°, v = 62.6 m/s). Info only. Consider range [0, 65].
- Flashcards: all three are correct.

## Coverage and order
- Segment 11.1 (second law in radial and tangential components; the radial force is never zero): covered, in order.
- Segment 11.2 (frictionless banked turn; unit vectors r̂ outward and k̂ up instead of along the slope; dividing the equations; faster/slower cars and the oscillation; primes as labels): covered fully, in order.
- Segment 11.3 (rotating bucket demo): covered, with a page-own calculation that is clearly marked as such in the prose (see row 4 for the formula citation).
- Notes 9.1 and 9.2.2: covered. Notes 9.2/9.2.1: covered in substance; the history paragraph and Eq. (9.2.2) are left out (row 7).
- Notes Section 9.3: **not covered**. OCW assigns it to Lesson 11, so the answer to "is 9.3 meant for this lesson or a later one?" is: this lesson (row 1). Appendix 9A (shell theorem) is not assigned to any lesson on the Readings page. Leaving it out is acceptable.
- Order on the page (11.1 → 11.2 → 11.3 → notes 9.2) follows the segment order, then the notes. Fine.
- Bracketed lecturer remarks: (a) missing m. Confirmed: the transcript p. 2 says "r d squared theta dt squared" for the tangential force. The "board" part is unverified (row 3). (b) Primes as labels. Confirmed: transcript p. 4, "this double prime is not two derivatives. I'm just using that as a notation to indicate different speeds." The page's wording is correct.
- The page's own bucket derivation: the physics is correct (N ≥ 0 at the top ⇒ v ≥ √(gR)). One sentence reads awkwardly: "the speed at the top must be at least √(gR). Then gravity alone is not enough…" means "above that speed". Suggest "Above this speed, gravity alone is not enough…".
- Repetition with earlier pages:
  - uniform-circular-motion.mdx (Lesson 9) already has "Newton's test with the Moon" (a = 4π²r/T² compared with g/60², using 384,400 km and 27.32 d). It also has a cosmology callout with the same 229 km/s and 8178 pc, the rotation curve and dark matter. This page asks the reverse question (the period from gravity, then the mass inside the orbit), so it is not a duplicate. Still, the two callouts overlap strongly. Consider shortening this callout to the new point (weighing the mass inside the orbit) and linking back.
  - The Moon distance and Earth mass differ from page to page: 3.82 × 10⁸ m (notes) here, 3.844 × 10⁸ m on Lesson 9, 3.84 × 10⁸ m and 5.97 × 10²⁴ kg on universal-gravitation. Each is labelled with its source, so this is not an error. Optionally add one line: the notes' 27.2 d is a little short of the observed 27.32 d mainly because of the rounded 3.82 × 10⁸ m.
  - universal-gravitation.mdx has no Kepler or orbital-period material, so there is no overlap there.
- leadsTo: 8.01 Lecture 12 (pulleys and constraints) is correctly described. Ferreras 2.2 is "Rotation curves in galaxies" (`content/year-5/Ferreras/rotation-curves.mdx` exists), so the link is fair.

## Licensing
- Chapter 9 text has no "All rights reserved" or "Courtesy of" notice (grep on the extracted text). The page reuses no figures.
- Both worked examples (banked curve at 120 m/15°, bucket at 0.80 m) are original. The notes contain no numerical versions of either.
- The prose is rewritten throughout. The only close paraphrase is the first sentence of the bucket section ("a bucket full of ping-pong balls … Slow it down too much, or simply hold it upside down, and they fall out"), which follows the OCW 11.3 description closely ("Slowing down below a certain speed, or simply holding the bucket upside down will cause the balls to fall"). It is short and the material is CC BY-NC-SA, but consider rewording.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: Eilers et al. 2019 (ApJ 871, 120) gives v_c(R_sun) = 229.0 ± 0.2 km/s (systematics 2–5%); the abstract confirms this. GRAVITY 2019 (A&A 625, L10) R₀ = 8178 pc is consistent with my knowledge of the paper, but I did not read the paper itself. Uncertain detail: as far as I recall, Eilers et al. adopted R₀ = 8.122 kpc (GRAVITY 2018), not 8178 pc. Combining 229 km/s with 8178 pc therefore mixes two R₀ values. The effect on the mass is below 1% and does not change "about 2.0 × 10⁴¹ kg". Info only. The claim attributions ("Eilers and colleagues, 2019", "GRAVITY collaboration, 2019") are fair. The mass "inside the Sun's orbit" from v²R/G assumes a spherical distribution. "About" covers this, but a few words ("treating the mass as if spherical") would be more honest.
- `calcs/8.01/newtons-second-law-circular-motion.yaml`: all entries match the page and the sources. The page citations are correct: R and m₂ given on p. 9-4, Eqs. (9.2.5)/(9.2.6) on p. 9-5, the synodic month on p. 9-5, Eq. (9.2.7) on p. 9-6. Only the header comment "Sections 9.1–9.2.2" needs updating if 9.3 is added. Every number shown on the page has an entry.
- Equation citations checked page by page: (9.1.1), (9.1.2), (9.1.4) p. 9-2; (9.2.1) p. 9-3; (9.2.3) p. 9-4; (9.2.4) p. 9-5; (9.2.7) p. 9-6. All correct. Transcript 11.2: radial equation p. 2, vertical equation p. 3, tan φ / √(rg tan φ) p. 3. All correct.
- `data/symbols.json` meanings scoped to this page (α, α_z, φ/ϕ, ω, a, a_r, T, t, d, m, m₁, m₂, g, F, F_r, F_θ, v, v′, v″, r, r′, N, R, R_e,m) are all correct for their uses. One gap: R is described as "the bucket's radius; in the cosmology note, the Sun's orbit radius", but quiz 4 and flashcard 3 use R for a general orbit radius. Suggest "the radius of the bucket's vertical circle; in the quiz, flashcards and cosmology note, the radius of an orbit". Similarly, m₁/m₂ ("Moon"/"Earth") are fine. content:check reports no symbol warnings.
- No em dashes on the page.

## Resolution (2026-11-15, by the page author)

- **Warning 1 (Section 9.3):** the worked examples of Section 9.3 belong to Lesson 11; they get their own page (`order: 2`, written next in this run, with original examples in the same spirit). This page's readings entry now says so.
- **Warning 2 fixed:** the tangential formula cites the notes, Eq. (9.1.3), p. 9-2.
- **Warning 3 fixed:** the bracket now refers only to what the transcript shows (11.1, p. 2) and the notes; no claim about the board.
- **Warning 4 fixed:** the bucket formula's citation says it is this page's own calculation for the 11.3 demonstration; the first sentence of the bucket section is reworded away from OCW's description.
- **Warning 5 fixed:** a sentence explains that the period's independence of the Moon's mass assumes m₁ ≪ m₂ (for comparable masses both bodies circle their common centre); quiz 5's distractor "Because the Earth does not move" replaced by "Because the orbit is a circle", and "Because the Moon is light" by "Because the Moon is far away".
- Info: plot range now [0, 65]; the R meaning covers the orbit radius of quiz 4 and flashcard 3. The callout's overlap with Lesson 9 is kept (this one weighs the mass inside the orbit). The pairing of 229 km/s with 8178 pc is kept with "about" (under 1% effect).

Status set to `reviewed`.
