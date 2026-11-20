---
page: content/year-0/hs-3/collisions.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/momentum-and-impulse/02-momentum-and-impulse-04 (read, parts ESCJG, ESCJH, ESCJJ and Worked examples 7 to 14, Exercise 2.4; via a page-reading tool that gives short quotes and summaries, so wording was compared from fragments)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter15/ (read; PDF mit8_01scs22_chapter15.pdf downloaded to a scratch folder outside the repo and converted with pdftotext)
  - public/phet/collision-lab_1.1.25_en.html (strings and model code of the pinned file read)
  - content/year-4/8.286/temperature-and-decoupling.mdx (this site's 8.286 Lecture 17 page, for the cosmology callout)
verdict: needs-changes
---

# Review: Collisions (Lesson 3.8)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Callout "Towards cosmology", 2nd sentence | Light as a stream of particles (photons) is a Block 7/8 idea; no earlier lesson introduces it. Lesson 1.10's callout (`towards-the-universe-light-travel-time`) explains the same history using only "light was scattered" by charged particles | "A particle of light that meets an electron is deflected in a new direction" | Leave out the particle idea, e.g. "Light that meets a free electron bounces off in a new direction, but it keeps almost all its energy, …", or add a short bracketed explanation that points forward to Block 7 |
| 2 | warning | Try it | PhET 1.1.25 Explore 1D has "Reflecting Border" on by default (`reflectingBorderInitially:!0`). A ball that hits the border reverses (or, at 0% elasticity, is stopped: `handleBallToBorderCollision` sets the velocity to 0), so the total momentum changes there | "At 0% the balls stick together and the most kinetic energy disappears, while the total momentum never changes" | Add "between the two balls" or "until a ball reaches the edge", or tell the reader to untick **Reflecting Border** first |
| 3 | warning | Elastic head-on collisions, bullet "Light object hits a heavy one" | Sec. 15.4.1 treats the limit m₁ ≫ m₂ (Eqs. (15.4.18) to (15.4.20): the lighter object "rebounds" with the same relative speed). The ball bouncing off a hard wall is in **Example 15.3** (Bouncing Superballs, PDF p. 15-15), not in Sec. 15.4.1 | "A ball bouncing off a wall is the extreme case (reading 1, Sec. 15.4.1)" | Cite "reading 1, Eq. (15.4.20) and Example 15.3", or keep Sec. 15.4.1 and drop the wall from what it is cited for |
| 4 | warning | Callout, "when the light has far too little energy to shake the electron much" | Low-energy (Thomson) scattering: the electron hardly recoils, so the light keeps almost all its energy | The electron is in fact set oscillating by the light; what is small is its recoil (the energy it takes) | "far too little energy to make the electron recoil noticeably" or "to give the electron much of its energy" |
| 5 | info | Try it | Velocities are read from the **Values** checkbox or the **More Data** table, both in 1.1.25 | "check that the balls swap velocities" without saying where to read them | Add "tick Values (or open More Data) to read the velocities" |
| 6 | info | Two quantities to check, "perfectly inelastic" | Siyavula ESCJG/ESCJJ: only "elastic" and "inelastic", with sticking cars in Worked example 14 and Exercise 2.4; MIT: "totally inelastic" | "perfectly inelastic", noting the MIT name | Fine (standard term); optionally say Siyavula has no separate name for it |
| 7 | info | Where the lost kinetic energy goes, "Sound" | Siyavula ESCJJ names heat (asteroid) and deformation (cars, bending metal); it does not mention sound | sound listed with the Siyavula citations nearby | Standard and correct; no change needed |

## Formulas and citations
- **Momentum condition** (`cite="mit"`, Collisions (ESCJG)): Siyavula's ESCJG shows m₁v_i1 + m₂v_i2 = m₁v_f1 + m₂v_f2. Correct; the notation is changed to the site's v_{1,i} (same as Lesson 3.7, line 111 there). MIT Eq. (15.4.1) is the same, also cited. Correct.
- **Kinetic-energy condition** (`cite="mit"`, ESCJH, Worked example 11): Siyavula writes KE_i1 + KE_i2 = KE_f1 + KE_f2 in the ESCJH prose and in Worked examples 11 and 12; the page writes the ½mv² terms out. Correct. MIT Eq. (15.4.2) is the same, correctly cited.
- **Objects that stick together** (`cite="mit"`, ESCJJ, Worked example 14): Worked example 14 (two 500 kg cars that stick) uses (m₁ + m₂)v_f on the final side. Correct.
- **Fraction lost** (`reading1`, Example 15.2, Eq. (15.5.5)): MIT gives ΔK/K_initial = −m₂/(m₁ + m₂) for a target at rest. The `at` explains the sign. Correct.
- **Relative velocity** (`reading1`, Eq. (15.4.7)): v₁ₓ,ᵢ − v₂ₓ,ᵢ = v₂ₓ,f − v₁ₓ,f. Correct; the in-text reference to Eq. (15.4.9) for "separate as fast as they approached" is correct (MIT: "the initial and final relative speeds are equal").
- **v₁,f** (`reading1`, Eq. (15.4.14)): matches. **v₂,f** (Eq. (15.4.17)): MIT writes the denominators as m₂ + m₁; the page writes m₁ + m₂ (same thing). Correct.
- **Equal masses** (Eq. (15.4.21)): matches.
- In-text citations checked: Sec. 15.3 with Eqs. (15.3.1) (coefficient of restitution, e = v_B/v_A), (15.3.4) (totally inelastic, final relative velocity zero), (15.3.5) ("superelastic", ΔK > 0): all exist and say what the page uses them for. Eq. (15.4.19) (light target leaves at about twice the speed when v₂ᵢ = 0): correct. Sec. 15.6.1 Eqs. (15.6.3) and (15.6.4) (each component of the momentum conserved): correct. Example 15.5 (equal masses, elastic, one at rest, θ₁ + θ₂ = 90°; shown in general in Eq. (15.6.22) and Example 15.6): correct.
- Note: MIT Sec. 15.6 treats only **elastic** 2D collisions; the page uses its component equations for an inelastic one. Momentum conservation per component (15.6.3/15.6.4) holds for any collision, so this is fine.
- The reading's `location` field in the frontmatter matches the PDF's section, example and equation numbers.
- "Siyavula's Worked example 11 is a case of this" (equal masses swap): WE11 has a 0.3 kg pool ball at 2 m/s hitting an identical ball at rest; it stops and the other leaves at 2 m/s. Correct. "Siyavula's Worked example 12 … do it in two different ways": WE12 solves the two conditions with a quadratic; MIT uses the relative-velocity route. Correct.
- Asteroid hitting the Moon, heat, melting, crater (ESCJJ): matches Siyavula. The "squash and spring back" description (ESCJH) matches Siyavula's ball that "compresses" and recovers its energy "during the elastic response". Rewritten, not copied.
- "loses the largest share of the kinetic energy that momentum conservation allows": MIT does not say "the most" in words, but it follows from Eq. (15.4.10), ΔK = ½μ((v_rel)²_f − (v_rel)²_i), which is most negative when the final relative velocity is zero. Correct physics; the citation to Eq. (15.3.4) supports it adequately.

## Arithmetic and answer checks
All recomputed independently (Python); `pytest tests/calc -k collisions`: 86 passed.
- Check example: v₂,f = 2.5/1.5 = 1.667 m/s; KE after 0.25 + 2.083 = 2.333 J; lost 1.667 J = 41.7% (page: about 1.7 J, 42%). Correct. Momentum check −0.50 + 2.50 = 2.0. Correct.
- Clay: v_f = 1.0 m/s; 2.5 J → 0.50 J; 2.0 J lost = 80% = 0.80/1.00. Correct.
- Gliders (equal masses, +2.5 and −1.5 m/s): swap to −1.5 and +2.5; total momentum 0.25 kg·m/s before and after. Correct.
- Plot: incoming (1 − x)/(1 + x), target 2/(1 + x), x = m₂/m₁, from Eqs. (15.4.14)/(15.4.17) with v₂ᵢ = 0. x = 3 gives −0.50 and 0.50; x = 1 gives 0 and 1; x → 0 gives 1 and 2. Range [−1.2, 2.2] holds both curves on [0, 6] (incoming falls to −0.714, target from 2 to 0.286). Caption correct.
- Bowling ball: 2 × 7.0/7.0027 × 2.0 = 3.9985 m/s, "just under 4.0". Correct.
- Spring bumpers: 0.60 and 3.6 m/s; momentum 1.8 = 0.36 + 1.44; KE 2.7 = 0.108 + 2.592; relative speed 3.0 before and after. Correct.
- Had the ball and block been elastic: −2.0 and +2.0 m/s; real separation speed 1.667 + 1.0 = 2.67 ≈ 2.7 m/s. Correct.
- Firework: 0.70 v = 18 − 15 = 3.0, v = 4.286 ≈ 4.3 m/s; KE 135 J → 225 + 6.43 = 231.4 J; released 96.4 ≈ 96 J; run backwards 18/1.2 = 15 m/s. Correct. The argument that horizontal momentum is conserved (gravity vertical, short burst) is correct.
- Pucks: second puck (2.0, −1.0) m/s; speeds 2.236 ≈ 2.2 and 1.803 ≈ 1.8 m/s; angles 26.6° ≈ 27° and 56.3° ≈ 56°; KE 1.6 → 1.075 J, 32.8% lost ("about a third"). Correct. 56° + 27° = 83° ≠ 90°: correct statement.
- VectorDiagram: p₁ = (0.20, 0.30), p₂ = (0.60, −0.30) kg·m/s, in tenths (2, 3) and (6, −3) from (2, 3); resultant (8, 0) = 0.80 kg·m/s along x. Correct; extent [−1, 10, −4.5, 5] contains every point.
- Intro "wagons lost 60%": Lesson 3.7 wagons 2.0×10⁴ kg at 3.0 m/s onto 3.0×10⁴ kg: 9.0×10⁴ J → 3.6×10⁴ J, 60% (= m₂/(m₁+m₂) = 3/5). Correct.
- Quiz 1: 1.8 J lost, not stuck → inelastic. Marked answer correct; "Elastic" (KE changed), "Perfectly inelastic" (did not stick), "Explosion" (KE fell) all wrong. Correct.
- Quiz 2: v_f = 2.0 m/s; 9.0 → 6.0 J; one third lost = 1/3. Correct; "Two thirds" is the share kept. Correct.
- Quiz 3: swap; second ball 1.8 m/s. Sticking: 0.90 m/s, half the KE lost (½ × 2m × 0.9² vs ½ m 1.8²: 0.81m vs 1.62m). Explanation correct.
- Quiz 4: (m₁ − m₂)/(m₁ + m₂) → −1 for m₂ ≫ m₁. Correct; "bounces back faster" would need an energy source. Correct.
- Quiz 5: −3.0 m/s; 18 + 9.0 = 27 J. Correct; distractors all wrong.
- Flashcards: all five correct.
- Calcs file: every number on the page is covered (the gliders' +2.5 m/s after the swap has no own entry, only v₁,f = −1.5; trivial). Numbers are the page's own, not Siyavula's or MIT's (the calcs header lists the source numbers, and none is reused).

## Only earlier terms
- Prerequisites: introducing-vectors (0.8), relative-velocity (1.9), kinetic-energy (3.2), conservation-of-energy (3.4), what-is-momentum (3.6), momentum-is-conserved (3.7): all exist and all come earlier. Each is actually used (components and tan⁻¹ from 0.8, relative velocity 1.9, E_k 3.2, thermal energy and the sliding book 3.4, crumple zones 3.6, wagons, spring carts, isolated system and internal forces 3.7).
- Introduced on the page where first used: elastic, inelastic, perfectly inelastic, explosion, "superelastic" (defined in the same sentence as a collision in which the kinetic energy increases), coefficient of restitution (defined in the Try it as the share of the relative speed that survives). No derivative or calculus wording found.
- `≪` / `≫` (m₁ ≪ m₂) are not used in earlier High School lessons as far as a search of hs-0 to hs-3 shows; each is glossed in words beside it ("Light object hits a heavy one"), so this is acceptable (info).
- Chemical energy: introduced in Lesson 3.4. Electrons, nuclei, atoms, cosmic microwave background: met in Lesson 1.10's callout and Lesson 2.x (springs). Fine.
- **"particle of light"** (callout): not introduced before; see finding 1 (error).
- Notation consistent with 3.6/3.7: v_{1,i}, v_{1,f}, E_k = ½mv², \vec p, kg·m/s.

## Coverage
- §4 row 3.8: "Collisions", PhET collision-lab, leads to 8.01 elastic-collisions and types-of-collision. Covered: elastic/inelastic/perfectly inelastic with energy bookkeeping, where lost energy goes, KE lost when sticking, 1D elastic results and special cases, explosions, 2D collisions by components. This matches VWO level and goes slightly beyond (the general elastic formulas, marked "not to learn by heart").
- Left out: the centre-of-mass frame (MIT 15.2, 15.4.2, 15.7) and the general 2D elastic solution; not needed at this level.

## Where this leads
- 8.01 Lecture 26 → content/year-1/8.01/types-of-collision.mdx ("Types of collision"); Lecture 27 → elastic-collisions.mdx ("Elastic collisions"). Both exist and are on the same topic. Correct.
- 8.286 Lecture 17 → temperature-and-decoupling.mdx: decoupling as the end of photon scattering on free electrons, about 380,000 years. The `why` text is correct.
- `towards: false`: correct, this is not the block's last lesson.
- Callout physics: light scattered by free electrons until they were bound into atoms after a few hundred thousand years, then free streaming, seen today as the CMB. Correct, and hedged ("very like", "few hundred thousand years"). Low-energy scattering leaves the light's energy nearly unchanged: correct. See findings 1 and 4 for wording.

## Licensing and AI terms
- No sentence copied from Siyavula or MIT found; the definitions are rewritten (Siyavula: "An elastic collision is a collision where total momentum and total kinetic energy are both conserved"; page: "the total kinetic energy after the collision is the same as before").
- Worked examples and quiz items are original: Siyavula's (0.3 kg pool balls, 50 g/100 g marbles, 150 g billiard balls, 500 kg cars, truck and car, 900 kg cars, bullet and block) and MIT's (Example 15.1 with m₂ = 2m₁; Example 15.5 at 3.0 m/s and 30°) are not reused. Quiz 3 (snooker ball on an identical ball at rest) has the same set-up as Siyavula WE11 with other numbers; acceptable as a standard situation.
- No figures copied: the Plot and VectorDiagram are generated from formulas/numbers.
- No Siyavula logo or "Everything Science" branding; Siyavula is named only as a source.
- The MIT Chapter 15 PDF has no "All rights reserved" or "Courtesy" notice (grep of the text).
- No NASA or ESO material, no forbidden source cited or used.
- PhET: Collision Lab 1.1.25 pinned in public/phet; strings checked: screen "Explore 1D", checkbox "Kinetic Energy", "Elasticity" number control with slider, range 0 to 100% (ELASTICITY_PERCENT_RANGE; only Explore 2D starts at 5%), default 100%; at 0% in Explore 1D the balls are grouped and move on with one common velocity (Σp/Σm), so "stick together" is right.

## Notes
- `content:check` was not run (machine memory; no dev servers or builds). The calcs for this page pass (`pytest tests/calc -k collisions`).
- The Siyavula page was read through a summarising fetch tool, so comparisons of wording rest on short quoted fragments; no long phrase of the page matched any of them.

## Resolution (2026-11-20, by the page author)
1. Callout: "A particle of light that meets an electron is deflected" replaced by "Light that meets a free electron bounces off in a new direction" (no particle idea before Block 7).
2. Try it: the reader now unticks **Reflecting Border** first (with the reason: the edge changes a ball's momentum), and the claim reads "the total momentum of the two balls never changes".
3. Elastic special cases: the wall citation now reads "reading 1, Eq. (15.4.20) and Example 15.3".
4. Callout: "far too little energy to shake the electron much" replaced by "far too little energy to make the electron recoil noticeably".
5. Try it: added "tick **Values** (or open **More Data**) to read the velocities".
6. Added that Siyavula has no separate name for a perfectly inelastic collision and simply calls it inelastic.
7. No change (sound is standard and correct, as the review says).

Checks: `pytest tests/calc -k collisions` 86 passed; `content:check` shows no error or warning for this page (its one error is in rockets.mdx). No numbers changed, so the calcs file is unchanged. Status set to reviewed.
