---
page: content/year-1/8.01/universal-gravitation.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read; Chapter 8 text extracted with pdftotext, Section 8.2 incl. 8.2.1–8.2.3 and Example 8.1 compared in full)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/ (read; segment list and CC BY-NC-SA 4.0 footer)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/5-1-universal-law-of-gravitation/ (read; video transcript PDF read in full)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/5-2-worked-example-gravity-superposition/ (read; video transcript PDF read in full)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/5-3-gravity-at-the-surface-of-the-earth-the-value-of-g/ (read; video transcript PDF read in full)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-5-cosmological-redshift-and-the-dynamics-of-homogeneous-expansion/ (read; page and lecture transcript PDF)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-6-the-dynamics-of-homogeneous-expansion-part-ii/ (read; lecture transcript PDF)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-7-the-dynamics-of-homogeneous-expansion-part-iii/ (transcript PDF searched only for open/closed/flat, to check the leadsTo claim)
verdict: needs-changes
---

# Review: The universal law of gravitation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Frontmatter `leadsTo`, 8.286 lecture 6, `why` | 8.286 Lecture 6 sets up the expanding sphere, derives ä = −(4π/3)Gρa and ends with the conserved quantity E = ½ȧ² − (4π/3)Gρᵢ/a. The terms open, closed and flat (critical) universes, with ρ vs ρ_c, first come in **Lecture 7** ("Dynamics of Homogeneous Expansion, Part III"). | Lecture 6: "Gravity decides whether the expansion slows enough to reverse: open, closed and flat universes." | Either change this entry to `lecture: 7`, or rewrite the Lecture 6 `why` as "derives the deceleration equation and a conserved energy for the expanding sphere" and add a Lecture 7 entry for open/closed/flat. |
| 2 | warning | Frontmatter `leadsTo`, 8.286 lecture 5, `why`; the `guth5` reference | Lecture 5 covers the cosmological redshift, Newton's argument for a static infinite universe, Gauss's law for gravity, and the shell-ordering argument. It ends with "set up this calculation, but not quite get the answer". The uniformly expanding ball (vᵢ = Hᵢ r), the shell solution r(rᵢ,t) = a(t) rᵢ, and ä = −(4π/3)Gρa all come in Lecture 6. | Lecture 5 "starts from Newton's gravity acting on a uniformly expanding ball of matter". The callout formula cites `guth5`, whose URL is the Lecture 5 page. | Lecture 5: say it "applies Newton's gravity to a uniform, infinite distribution of mass". Point the callout formula's citation at the Lecture 6 page, or add a `guth6` reference. |
| 3 | warning | Cosmology callout, first sentence | Guth's derivation needs the shell theorem in both directions: a shell outside acts like a point mass, and a shell gives zero force at a point inside it (L5/L6 transcripts). | "uses nothing more than this page" | This page states only the outside-sphere result. Soften the claim to "uses little more than this page, plus Newton's shell theorem", or add one sentence saying that a uniform shell exerts no force inside it. |
| 4 | info | Cosmology callout, "the deceleration of the scale factor depends only on the density ρ" | Guth: the equation "depends only on the current mass density. It predicts the ratio of a double dot over a." | Says the deceleration itself depends only on ρ | Strictly it is ä/a that depends only on ρ. Suggest "the fractional deceleration ä/a depends only on ρ". |
| 5 | info | Callout `<Formula>` notation | Guth (L6) writes "a double dot is equal to minus 4 pi over 3 G rho of t times a", i.e. ä = −(4π/3)Gρ(t)a, with the equivalent form ä = −(4π/3)Gρᵢ/a². He defines a = u = r/rᵢ, with a(tᵢ) = 1, and notes that the ratio ä/a does not depend on the notch units. | d²a/dt² = −(4π/3)Gρa | The form matches Guth. No change needed. (The transcript says "a is still measured in notches per meter", but in Lecture 5 a(t) converts notches to meters, i.e. meters per notch. This looks like a slip of the tongue in the transcript. It is uncertain and does not affect the page.) |
| 6 | info | Principle of equivalence `<Formula>`, cite "Sec. 8.2.2" | 8.2.2 only says that gravitational mass is identical to inertial mass. | Adds "⟹ a = GM/r² for every body", "Nothing in Newton's theory says these must be equal, but every experiment finds that they are", and the general relativity remark | All correct physics, but this goes beyond 8.2.2. Acceptable. Optionally mark the implication as the page's own step. |
| 7 | info | "A sphere with its mass spread evenly in layers attracts an outside object as if all its mass sat at its centre" | Neither 8.2.3 nor segment 5.3 states the shell theorem. 5.3 simply uses the distance R_E. | Shell theorem stated | Correct physics, not from the cited source. Fine. |
| 8 | info | Third-law paragraph | Notes Example 8.1, Eqs. (8.2.6)–(8.2.7) | Same argument, with no citation | Optionally cite "Example 8.1, Eqs. (8.2.6)–(8.2.7)". |
| 9 | info | Value-of-g plot `expr` | Segment 5.3 gets 9.81 m/s² from the same inputs | The curve uses 9.82; the prose uses 9.8 | G·M_E/R_E² = 9.813 with the page's numbers. Using 9.81 would be consistent. Both plot points still round to the same values (8.69, 0.22). |

## Arithmetic and answer checks
- Eq. (8.2.1): the page's sign, labels (force on 2 due to 1, r̂₁,₂ from 1 to 2) and G = 6.67×10⁻¹¹ N m²/kg² match MIT exactly.
- g = GM_E/R_E² = 6.67e-11 × 5.97e24 / (6.37e6)² = 9.813 m/s². The page's "9.8" is correct, and segment 5.3 gets 9.81 with the same inputs.
- The 9.78 m/s² (equator) and 9.83 m/s² (poles) values, and the explanation (rotation plus equatorial bulge), match 8.2.3.
- Worked example: √(M_M/M_E) = √(7.35e22/5.97e24) = 0.1110 ✓. x = 3.84e8/1.111 = 3.456×10⁸ m ✓ (0.900 D, "about 90%" ✓). D − x = 3.84×10⁷ m. x/(D−x) = 9.01 ✓. M_E/M_M = 81.2, "about 81" ✓.
- Plot point, ISS: 9.82 × (6370/6770)² = 8.694 → 8.69 ✓. Using g = 9.813 instead gives 8.688, which also rounds to 8.69.
- Plot point, geostationary (h = 35786 km, r = 42156 km): 9.82 × (6370/42156)² = 0.2242 → 0.22 ✓. With GM/r² at r = 42164 km: 0.224 ✓.
- Caption "about 89% of its surface value": (6370/6770)² = 0.885 → about 89% ✓ (88.5%; "about 88–89%" would be the most exact wording).
- Quiz 1: tripling r gives 1/9, marked index 1 ✓. Quiz 2: no air + equivalence, index 0 ✓. Quiz 3: −F, index 1 ✓; "about 81 times" ✓. Quiz 4: 9.8 × (6370/6770)² = 8.68 ≈ 8.7, index 2 ✓; the free-fall explanation is correct.
- Flashcards: all four are correct and match 8.2.1–8.2.3.
- Callout: ä = −(4π/3)Gρa matches the end result of 8.286 Lecture 6 (see row 5).

## Coverage and order
- The page follows MIT's segment order: 5.1 universal law, then 5.2 superposition, then 5.3 value of g. It then covers equivalence (8.2.2), which the notes put before 8.2.3. That is a reasonable change of order.
- Left out from 8.2.3: the standard value g = 9.80665 m/s², Helmert's equation (8.2.3) for g(φ, h), and the "fifth force" searches. These are optional, but a one-line mention of Helmert's formula would round off the paragraph on variation.
- Section 8.2.4 (Coulomb's law) is correctly outside the stated location "8.2.1–8.2.3".
- Added beyond MIT: the 1/r² vs 1/r plot, g(h) with the ISS and geostationary points, the GR remark, and the PhET sim. All are correct.
- The 5.1 transcript says the force is "proportional to the square of the distance", which is a slip of the tongue in MIT's video. The page correctly says inverse square.

## Licensing
- MIT 8.01SC pages carry CC BY-NC-SA 4.0, and the page uses the same licence ✓.
- No verbatim copying from Chapter 8 or the segment transcripts was found. The definitions are rewritten.
- Worked example: MIT 5.2 finds the zero-force point between two planets of masses m₁, m₂ (a "Little Prince" story) by solving a symbolic quadratic and choosing the root. The page's Earth–Moon example asks the same kind of question, but with real numbers and the square-root-of-ratio method. It is clearly rewritten, not copied.
- No OpenStax or LibreTexts material. No "All rights reserved" or "Courtesy of" figures are used. The PhET simulation is external and needs its own CC-BY credit through the component (not checked here).

## Notes
- The 8.286 derivation was checked in the transcripts:
  - Lecture 5: Newton's static-universe argument, Gauss's law (∇²φ = 4πGρ), and the shell-ordering argument.
  - Lecture 6: expanding sphere with vᵢ = Hᵢr. M(rᵢ) = (4π/3)rᵢ³ρᵢ. r̈ = −(4π/3)G rᵢ³ρᵢ / r². Substituting u = r/rᵢ gives ü = −(4π/3)Gρᵢ/u², which is independent of rᵢ. Renaming u → a gives r = a(t) rᵢ and ρ = ρᵢ/a³, so ä = −(4π/3)Gρ(t) a. Then E = ½ȧ² − (4π/3)Gρᵢ/a is conserved.
  - Lecture 7: open/closed/critical(flat), and ρ vs ρ_c.
- The callout's "ball thrown upward either falls back or escapes" analogy fits Guth's E-sign classification (Lecture 7).
- Not checked: the rendered page, and the PhET component's attribution.

## Resolution (2026-11-14, by the page author)
- Error fixed: `leadsTo` now points open/closed/flat universes to Lecture 7; Lecture 5 described as the static Newtonian model with Gauss's law and shells; Lecture 6 as the derivation of the deceleration equation.
- Callout reference changed from "Lectures 5–6" to Lecture 6; wording now mentions the shell theorem and says ä/a depends only on ρ.
- g(h) plot now uses 9.81 m/s², matching segment 5.3.
- Open: Helmert's formula and 9.80665 omitted on purpose (detail beyond what cosmology needs). Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.

## Change after review (2026-11-15, by the page author, owner's request)

- Section on the inverse-square law: one sentence added before the force graph defining R as a fixed reference distance (the graph's axes are "in units of R" and "in units of F at r = R"). Not from the MIT source; it only explains the graph's axes. No formula or number changed.
