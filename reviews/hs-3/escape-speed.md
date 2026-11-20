---
page: content/year-0/hs-3/escape-speed.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter14/ (read: PDF mit8_01scs22_chapter14.pdf, Sec. 14.4.1, 14.4.3, 14.5, Example 14.2)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter25new/ (read: PDF mit8_01scs22_chapter25new.pdf, Sec. 25.3 cases, 25.4.1 to 25.4.4)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (read)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html (read, including the Phobos table)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-6-the-dynamics-of-homogeneous-expansion-part-ii/ (read: transcript PDF, searched for the energy passage, pp. around lines 1380 to 1495 of the text)
verdict: pass-with-notes
---

# Review: Orbital energy and escape speed (lesson 3.11)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Formula "Work to lift an object from R to r", `at` | Eq. (14.15) is already ΔU = −∫F·dr = −Gm₁m₂/r_f + Gm₁m₂/r_i = Gm₁m₂(1/r_i − 1/r_f) | "Eq. (14.15), with the sign reversed: this is the work done against gravity, ΔU" | With r_i = R, r_f = r, Eq. (14.15) is exactly the page's W; no sign reversal is needed. Write e.g. "Sec. 14.4.3, Eq. (14.15) (ΔU from r_i = R to r_f = r; the work done against gravity)". |
| 2 | warning | Worked example "Jumping off Phobos" | Example 14.2: escape speed from a small body (asteroid Toro, R = 5.0 km, 2.0 × 10¹⁵ kg, 7.3 m/s), then "Could a person reach this speed (on earth) by running?", compared with Olympic sprinters' 12 m/s | Escape speed from a small body (Phobos, 11 km, 1.06 × 10¹⁶ kg, 11 m/s), "Could an astronaut jump off it?", compared with a jump and "the top speed of a sprinter" | The numbers and body are new, but the question, its structure and the sprinter comparison follow MIT's own worked example closely. Make the example clearly the page's own: e.g. drop the sprinter comparison and ask instead how high a 3.1 m/s jump on Phobos would go (energy with −GMm/r), or use a different twist (time to fall back, or a thrown ball). |
| 3 | warning | Phobos example, step "Compare" | Example 14.2: sprinters reach about 12 m/s | "Only a leap at about the top speed of a sprinter would come close to escaping" | A sprinter's top speed (≈ 12 m/s, MIT's figure) is above the 11 m/s found, so such a leap would escape, not merely "come close". Reword ("a leap at a sprinter's top speed, about 12 m/s, would just escape"), or remove it per finding 2. |
| 4 | warning | `leadsTo` 8.01 Lecture 23, `why` | Site page content/year-1/8.01/potential-energy.mdx: inverse-square potential energy with an integral (Sec. "23.5"), worked example "Escape speed and the limits of mgh" for the **Earth** (GM = 3.986 × 10¹⁴, 400 km satellite) | "…and works out the escape speed from an asteroid" | The target lesson does not do an asteroid. Write "…and works out the escape speed from the Earth and the error of mgh". |
| 5 | info | Formula "Speed in a circular orbit", `at` | Eq. (25.4.15) is written with the reduced mass μ: Gm₁m₂/r₀² = μ v₀²/r₀ | v = √(GM/r), "solved for the speed (the step is the page's own)" | Add "(μ there is m when M ≫ m)", as lesson 2.12 does for the same equation. |
| 6 | info | Section "Escape speed", rocket paragraph | (not in the sources) | "the energy that must be supplied in the end is the same, because only the start and the end of the path matter" | True for the energy the payload must gain; the fuel burns far more (exhaust energy, gravity losses). Say "the energy the spacecraft itself must gain is the same". |

## Formulas and citations
- F = GMm/r²: Sec. 14.4.3, Eq. (14.13) (vector form with m₁, m₂, r₂,₁). Correct, difference noted on the page.
- Strip area GMm/(r₁r₂)(r₂ − r₁) = GMm(1/r₁ − 1/r₂): algebra verified (calcs `strip-identity`); the in-between value 1/(r₁r₂) does lie between 1/r₁² and 1/r₂². Honestly labelled as the page's own form of Eq. (14.15). Note: the telescoping sum is in fact exact for any number of strips with this choice, so the "limit" sentence is true but slightly undersells it; fine at this level.
- W = GMm(1/R − 1/r): matches Eq. (14.15) exactly (see finding 1 on the `at` text).
- E_p = −GMm/r: Eq. (14.16), U_G(r) = −Gm₁m₂/r with U_G(∞) ≡ 0. Correct.
- E_mech = ½mv² − GMm/r: Example 14.2, the example's Eq. (14.2) (E_i = ½mv_esc² − Gm_t m/R). Correct; the `at` correctly says "of the example" (the chapter also has an earlier Eq. (14.2) in Sec. 14.x).
- v_esc = √(2GM/R): Example 14.2, the example's Eq. (14.6). Correct.
- v = √(GM/r): Sec. 25.4.1, Eq. (25.4.15). Correct (finding 5).
- E = −GMm/(2r): labelled as the page's own step in Sec. 25.4.1; algebra verified (calcs `orbit-energy`).
- Bound/unbound bullets: Sec. 25.4.2 (ellipse, E < 0), 25.4.3 (parabola, E = 0, "escape velocity condition"), 25.4.4 (hyperbola, E > 0, positive kinetic energy at infinity). The page's statements match, including "slowing towards zero speed" for E = 0.
- NASA fact sheets: every quoted value matches what I read today: Earth 5.9722 × 10²⁴ kg, 6371.000 km, 11.186 km/s, 29.78 km/s, 149.598 × 10⁶ km; Moon 0.07346 × 10²⁴ kg, 1737.4 km, 2.38 km/s; Mars 0.64169 × 10²⁴ kg, 3389.5 km, 5.03 km/s; Phobos 10.6 × 10¹⁵ kg, radii 13.0, 11.4, 9.1 km; Sun 1 988 400 × 10²⁴ kg, 695 700 km, 617.6 km/s. The table's "the fact sheets list the same values" holds (Earth 11.19 as listed in the Mars/Sun comparison columns).
- 8.286 Lecture 6 (reference `mit8286`): the transcript confirms that Guth identifies the conserved quantity as kinetic plus potential energy of a test particle on the boundary of the sphere (and notes the subtlety of calling it the potential energy). The callout's claim matches; Lecture 7 for the Friedmann equation agrees with the site's reviewed 8.286 pages (friedmann-equation, open-closed-flat).
- No Siyavula source is cited. Siyavula Grades 10–12 do not treat escape speed, so MIT 8.01SC is a reasonable main source here (info only).

## Arithmetic and answer checks
All recomputed independently in Python (G = 6.674 × 10⁻¹¹, M = 5.9722 × 10²⁴ kg, R = 6.371 × 10⁶ m):
- GM = 3.9858 × 10¹⁴; GM/R = 6.2562 × 10⁷ J/kg (62.6 MJ) ✓; v_esc = 11 186 m/s = 11.2 km/s, 40 269 km/h ("about 40 000") ✓.
- Lift 1 kg to 2R: GM/(2R) = 3.128 × 10⁷ J ✓; gR = 6.250 × 10⁷ J, ratio 2.0 ✓. Small-h limit algebra ✓.
- Satellite to 1000 km: GMm = 4.7830 × 10¹⁷ ✓; 1/R = 1.5696 × 10⁻⁷, 1/r = 1.3567 × 10⁻⁷ ✓; ΔE_p = 1.0185 × 10¹⁰ J → 1.02 × 10¹⁰ ✓; mgh = 1.1772 × 10¹⁰ → 1.18 × 10¹⁰ ✓; excess 15.6 % ("about 16 %") ✓.
- Plot: −62.6/x MJ/kg at the surface ✓; dashed mgh line −62.6 + 62.5(x − 1) reaches −0.1 at x = 2 while the true curve is −31.3, consistent with the caption ✓.
- Table: Moon 2.376 → 2.38 ✓; Mars 5.027 → 5.03 ✓; Earth 11.186 → 11.19 ✓; Sun 617.66 → 618 ✓.
- Phobos: GM = 7.074 × 10⁵ ✓; 2GM/R = 128.6 ("129") ✓; √ = 11.3 → 11 m/s ✓; mean radius 11.17 ("about 11 km") ✓; jump √(2 × 9.81 × 0.50) = 3.13 ✓; mass ratio 5.6 × 10⁸ ("about 6 × 10⁸") ✓; size ratio 579 ("about 600") ✓; 2GM/R ratio 9.7 × 10⁵ ("roughly 10⁶") ✓.
- Probes: ½(8.0 km/s)² = 3.2 × 10⁷ ✓; total −3.056 × 10⁷ ✓; r_max = 1.304 × 10⁷ m ✓; height 6.67 × 10⁶ m ✓; constant-g height 3.26 × 10⁶ ("3.3 × 10⁶", about half) ✓; ½(12.0)² = 7.2 × 10⁷ ✓; v_f = √(12.0² − 11.19²) km/s = 4.33 km/s; from unrounded v_esc 4.34 km/s; both "4.3 × 10³" ✓.
- Orbits: ground circular 7.910 km/s ✓ (lesson 2.9); ISS √(GM/6.791 × 10⁶) = 7.661 km/s ✓ (lesson 2.12); √2 × 7.66 = 10.83 ("10.8") ✓; Sun escape at 1.496 × 10¹¹ m = 42.12 km/s ✓; 42.1/29.78 = 1.414 ✓.
- Quiz 1: √4 = 2, answer "Twice as large" ✓; other choices wrong ✓.
- Quiz 2: −2.0 × 10⁹ J, bound ✓; the "falls straight into the Sun" choice is correctly wrong (a bound comet generally orbits); explanation true.
- Quiz 3: 5.028 km/s ✓; distractors 3.555 (no 2) ✓, 7.110 (4GM/R) ✓, 158.99 (radius in m as km) → 159 ✓; the explanation's "speed of a circular orbit just above the ground" for 3.56 km/s is right.
- Quiz 4: √2 × 7.0 = 9.90 ✓; distractors correctly explained.
- Quiz 5: answer 1 correct; others wrong; explanation true.
- Flashcards: all statements correct.
- Calcs file: every number on the page has an entry (checked against the list above, including the quiz distractors, 40 000 km/h, 16 %, the plot slope and the Phobos ratios). I did not run `calc:test` (no builds on this machine); entries were checked by hand against my own results and agree.

## Only earlier terms
- Prerequisites: gravitational-potential-energy (3.3), conservation-of-energy (3.4), kinetic-energy (3.2), work (3.1), newtons-law-of-gravitation (2.11), keplers-laws-and-orbits (2.12), centripetal-force (2.9), rates-of-change-and-area (0.10), powers-of-ten (0.1). All are earlier and written; none of 3.5–3.10 is needed. ✓
- Back references verified: lesson 3.1 area under a force–displacement graph by thin strips (work.mdx "Work as the area under a graph") ✓; lesson 0.10 strips, "limit", "calculus", "integral" introduced ✓; lesson 3.3 negative E_p below the zero level ✓; lesson 3.4 E_mech = E_k + E_p and v = √(2gh) ✓; lesson 2.9 7.91 km/s ✓; lesson 2.12 GMm/r² = mv²/r, ISS r = 6.791 × 10⁶ m and 7.66 km/s, and the √2 factor "announced" for Block 3 ✓; ellipse from 2.12 ✓.
- No calculus is used: the words "calculus" and "integral" appear only to say the page avoids them (and in the `at` text and a `leadsTo` reason), both introduced in 0.10. ✓
- New words are defined where used: escape speed, bound, unbound, zero level "at infinity". "Parabola/hyperbola" are not used. ✓
- The cosmology callout uses "general relativity" and "dark energy" without definition; acceptable in a hedged "Towards cosmology" callout (info).

## Coverage
- §4 row 3.11 (A 3.5; CP 6.6, old OpenStax sources ignored) and §3.5 "Launch speed decides a closed or an open orbit": covered fully (−GMm/r, escape speed, sign of total energy, circular-orbit energy, √2 factor, PhET). At VWO level nothing important is missing; orbit transfers and the energy to change orbits could be a later practice problem, not required.

## Where this leads
- 8.01 Lecture 23 (potential-energy) exists and treats −GMm/r with an integral ✓; its "asteroid" claim is wrong (finding 4).
- 8.01 Lecture 25 (potential-energy-diagrams): energy line on a U graph, trapped or escaping ✓.
- 8.286 Lecture 6 (expanding-sphere): conserved energy of a particle on the edge decides the fate ✓ (transcript confirms).
- `towards: false` is right: 3.12 is the block's last lesson. Callout claims are correct and hedged (Newtonian model, matter only, GR ties the sign to geometry, dark energy accelerates the expansion today).
- PhET: `phet: my-solar-system` is in public/phet/manifest.json (1.3.18), matching §4. "Try it" text is correct: the sim has a Path option; with the sun starting at rest, the relative speed is the planet's speed, so the √2 escape factor holds for the two-body motion as well.

## Licensing and AI terms
- No sentence copied from MIT Ch. 14 or Ch. 25 (compared the escape-velocity definition, Example 14.2 and Sec. 25.4.3 wording; the page's text is its own).
- No figures: one generated Plot, no images.
- Worked examples: satellite to 1000 km, two probes and the orbit comparisons are the page's own. The Phobos example mirrors MIT's Example 14.2 in structure (finding 2).
- No "All rights reserved" or "courtesy" notice in either MIT chapter (grep found none) or the 8.286 transcript.
- NASA: cited by fact-sheet title ("The Earth Fact Sheet lists…"); no insignia; no "according to NASA" phrasing. ✓
- No ESO text, no Siyavula branding, no forbidden source (OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs) cited or used. ✓

## Notes
- Not checked: `content:check`, `calc:test`, rendering (no builds on this machine, as instructed). The PhET "Try it" behaviour was judged from the physics and the sim file's strings, not by running the sim.
- `status: draft` is correct until findings 1–4 are resolved.

## Resolution (2026-11-20, by the page author)
1. The `at` of "Work to lift an object from R to r" now reads "Sec. 14.4.3, Eq. (14.15) (ΔU from r_i = R to r_f = r; the work done against gravity)"; no sign reversal claimed.
2. The Phobos example is replaced by the page's own question "How small a moon could you jump off?": with a density of 2000 kg/m³ (the page's own round value) and a 0.50 m Earth jump (v² = 9.81 m²/s²), solve v_esc² = 2G × 2000 × (4/3)πR² for the radius, R = 2.96 × 10³ m, about 3 km. The check step puts the radius back (M = 2.17 × 10¹⁴ kg, 3.13 m/s) and then uses Phobos (mass, radii, mean radius 11 km, density 1.9 × 10³ kg/m³, escape speed 11 m/s, almost four times wider) as a real moon on which a jumper stays. The sprinter comparison is gone. Calcs: the old Phobos entries and the Earth-ratio entries (6e8, 600, 1e6, 1e3) are removed; new entries jump-speed, jump-speed-squared, moon-density, moon-coefficient, moon-radius-squared, moon-radius, moon-check-mass, moon-check-vesc, phobos-density, phobos-width-ratio; phobos-mass, phobos-radii, phobos-mean-radius and phobos-vesc kept with new shown strings.
3. Resolved by finding 2: the sprinter sentence is removed.
4. The `leadsTo` 8.01 Lecture 23 reason now ends "…and works out the escape speed from the Earth and the error of mgh."
5. The `at` of "Speed in a circular orbit" now adds "(μ there is m when M ≫ m)".
6. The rocket sentence now reads "the energy the spacecraft itself must gain is the same (the fuel burns much more)".

Checks: `pytest tests/calc -k escape-speed` 79 passed; `content:check` reports no error or warning for this page (its one error is in collisions.mdx, another lesson). Status set to reviewed.
