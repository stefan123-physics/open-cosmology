---
page: content/year-0/hs-2/springs-and-hookes-law.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read; PDF mit8_01scs22_chapter8.pdf, Secs. 8.1, 8.1.1, 8.2, 8.2.3, downloaded to a scratch folder outside the repo; no "rights reserved", "courtesy" or "excluded" notice in the text)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter23/ (read; PDF mit8_01scs22_chapter23.pdf, Secs. 23.1, 23.1.1, 23.2, Example 23.2; no such notice)
  - docs/siyavula-licences.tsv (checked: no Siyavula section on Hooke's law, springs or elasticity is listed, so MIT as main source is justified)
verdict: pass-with-notes
---

# Review: Springs and Hooke's law

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Hooke's law", paragraph "Hooke's law is not a law of nature like Newton's laws" | Sec. 8.1.1 and 8.2: Hooke's law is a force law, an inductive model for ideal springs with a limited range; Sec. 8.2 ("Fundamental Laws of Nature") contrasts it with fundamental force laws (universal gravitation, Coulomb's law) whose origin it does not share | Contrasts Hooke's law with *Newton's laws* | Contrast it with the fundamental force laws, e.g. "Hooke's law is not a fundamental law of nature like Newton's law of gravitation (lesson 2.10)…" or "like the electric force between charges". Newton's laws of motion are laws of a different kind (they hold for every force), so the comparison as written mixes two things |
| 2 | warning | Worked example "A bird feeder on a spring", step "With the bird" | — | 6.1 cm and 7.4 cm, then "the bird pulls the feeder 1.2 cm further down" | 7.4 − 6.1 = 1.3 with the rounded values on the page; 1.2 cm is right only from the unrounded 6.13 and 7.36 cm (difference 1.23 cm). A reader subtracting the shown numbers gets 1.3. Either give 6.13 and 7.36 cm, or say "about 1.2 cm (from the unrounded values)", or compute 0.050 × 9.81/40 = 0.012 m directly in the step |
| 3 | warning | "Stretching and squeezing a spring" / "Hooke's law" | — (not in MIT; Block 5 lesson 5.1 of this site says "Dutch VWO textbooks often write u for the displacement and C for the spring constant") | Uses x and k with no word on VWO notation | Since this is where the spring constant is first introduced, add the same one-line note as lesson 5.1 (VWO and Binas: F = C·u, C in N/m), so the two lessons agree and VWO readers recognise it here first |
| 4 | info | "The elastic limit" | Sec. 8.1.1 only says the proportionality holds between x_min and x_max | Names "limit of proportionality" and "elastic limit" and explains both | Page's own, standard textbook terms, correctly defined (proportionality ends first; elastic limit = largest deformation with full return). Acceptable unsourced as standard physics. The elastic-limit flashcard says "Beyond it … Hooke's law no longer holds"; strictly Hooke's law already stopped at the limit of proportionality (as the Hooke's-law flashcard says). Consider "Beyond it the spring stays permanently stretched" only |
| 5 | info | "Springs in series and in parallel" | Not in Chapter 8 or 23 | k = k₁ + k₂ in parallel, 1/k = 1/k₁ + 1/k₂ in series, derived from Hooke's law and the third law | Derivations are correct and self-contained (light springs stated). For the parallel case with k₁ ≠ k₂, the bar stays level only if the load hangs off-centre, nearer the stiffer spring (at distance ratio k₂ : k₁ from the k₁ and k₂ ends) and the bar is light; the page's "so that the bar stays level" covers this as a condition, but one clause ("hang the load nearer the stiffer spring") would make it physically complete |
| 6 | info | "A first look at oscillations", last sentence | Sec. 23.1: "The accuracy of clocks was increased and the size reduced by the discovery of the oscillatory properties of springs by Robert Hooke" | "what Hooke and others used to make watches keep time" | Supported in substance (balance springs in watches are historical fact). Fine. The page does not repeat the source's slip "William Harrison" (John Harrison), good |
| 7 | info | First graph, y-axis "force F (N)" | Fig. 8.3 plots F_x (signed spring force), slope −k | First graph plots the size of the force *on* the spring (slope +k), second the spring's own signed force (slope −k) | Correctly explained in the text. Since F is defined in the previous section as the spring's signed force, a y-label "force on spring (N)" on the first graph would avoid two meanings of F |

## Formulas and citations
- `x = L - L_0`, cite mit, Sec. 8.1.1 Fig. 8.1: Fig. 8.1 measures x from the object's position at equilibrium length l₀ (x > 0 stretched, x < 0 compressed). Same physics; the page's L, L₀ notation is described in `at`. Correct.
- `F = k\,x`, Eq. (8.1.1): source has |F| = k|x| with k in N·m⁻¹. Correct, page states x is the size.
- `F = -k\,x`, Eq. (8.1.2), "there written F_x = −kx": correct.
- `k = F/x`, Eq. (8.1.1) solved for k: correct, units N·m⁻¹ as in the source.
- `k\,x = m\,g`, Eqs. (8.1.1) and (8.2.2): Eq. (8.2.2) is |F_G| = mg near the Earth's surface. Correct combination.
- In-text citations checked: Sec. 8.1.1 (natural length, need to keep exerting a force; third law equal and opposite; Hooke's law as an inductive model for "all ideal springs"; limited range x_min…x_max; Fig. 8.3 slope −k; pre-tension Eq. (8.1.4); Eq. (8.1.3) a = kΔx/m) all present and correctly used. Sec. 8.2 (atoms, Coulomb's law and quantum mechanics needed for the elastic restoring property): supported. Sec. 23.2 (block on spring, F_x = −kx, sinusoidal motion): supported. Sec. 23.1 (Hooke, springs in clocks): supported.
- Pre-tension: Eq. (8.1.4) F_x = −F₀ − kx for x > 0: the page's "starting force before they begin to stretch … line does not pass through the origin, but its slope is still k" is right. The examples (garage door, trampoline: closed-coil extension springs with initial tension) are the page's own and plausible.
- g = 9.81 m/s² as in the site's notation (source gives 9.80665 standard; consistent with lessons 1.7 and 2.1).
- Consistency with content/year-0/hs-5/simple-harmonic-motion.mdx: same symbols (x, k), same sign convention (x from the natural length/equilibrium, F = −kx), same definition of "restoring force". 5.1 lists this page as a prerequisite. Consistent. Only the VWO-notation note differs (row 3).

## Arithmetic and answer checks
All recomputed independently (Python):
- Toy: 15.5 − 12.0 = 3.5 cm; 7.0/0.035 = 200 N/m; 2.0 N per cm; 200 × 0.050 = 10 N; ratios 5.0/3.5 = 10/7 = 1.43 ("a bit less than one and a half"). Correct.
- First graph caption: 50 × 0.050 = 2.5 N = a quarter of 10 N. Correct.
- Fit: least squares through origin Σfx/Σx² = 0.2486 N/cm, shown 0.25. Residuals: points 1, 3, 5 lie below the line, 2 and 4 above ("some just above and some just below"): correct. Slope 2.50/10.0 = 0.250 N/cm = 25.0 N/m; single point 2.00/0.079 = 25.3 N/m. Correct.
- Balance: 400 × 0.10 = 40 N; 1/400 m = 2.5 mm. Correct.
- Feeder: 0.25 × 9.81 = 2.4525 → 2.45 N; 2.45/40 = 0.0613 → 0.061 m; 0.30 × 9.81/40 = 0.0736 → 0.074 m; bird 0.050 × 9.81/40 = 0.0123 m → 1.2 cm; a fifth of 6.1 = 1.22. Correct, but see row 2 (7.4 − 6.1 = 1.3).
- Free-body diagram: vectors ±2.45 at 1 N per grid square, extent ±3 vertically. Consistent.
- Series/parallel: 60 + 30 = 90 N/m, 3.0/90 = 0.0333 m; 3.0/60 + 3.0/30 = 0.15 m, 3.0/0.15 = 20 N/m = 1/(1/60 + 1/30). Correct. Halving a spring doubles k: correct.
- Oscillation: 200 × 0.040 = 8.0 N, 8.0/0.50 = 16 m/s². Correct.
- Quiz 1: (26 − 20) cm = 0.060 m, 3.0/0.060 = 50 N/m (marked, correct); 3.0/0.26 = 11.5; 3.0/6 = 0.50; 0.060/3.0 = 0.020 (inverted, not named in the explanation, but wrong as intended). Correct.
- Quiz 2: compressed spring pushes away from the wall (marked 1). Correct; other choices wrong.
- Quiz 3: 2.5 × 4.0 = 10 cm (marked 2). 7.0 cm = adding 3 cm (named), 2.5 and 20 cm wrong. Correct.
- Quiz 4: 0.60 × 9.81/120 = 0.04905 m = 4.9 cm (marked 1); 0.60/120 = 0.005 m = 0.50 cm (no g); 49 cm, 4.9 m unit slips. Correct.
- Quiz 5: series 40 N/m (marked 0); parallel 160; 6400 meaningless with unit N²/m². Correct; explanation true.
- Flashcards: all true (see row 4 for a nuance).
- Calcs file: every number on the page is in `calcs/hs-2/springs-and-hookes-law.yaml`; every entry has `source: {cite, at}` and `origin: page-own`, which is honest (Sec. 8.1.1 has no worked numbers; Chapter 23's Example 23.2 is symbolic and not reused). `pytest tests/calc -k springs`: 52 passed.

## Only earlier terms
- natural length, extension, compression, spring constant, restoring force, elastic limit, limit of proportionality, series, parallel: introduced on this page.
- spring balance: lesson 2.1 (which promises this lesson's explanation; the promise is kept).
- equilibrium: lesson 2.2 ("Equilibrium: forces that balance"); "equilibrium position" is a small new step, explained in brackets. OK.
- directly proportional, straight line through the origin, slope, line of best fit: lesson 0.5 (graphs-and-slope, "Measured points and the line of best fit"). Lesson 0.5 does not force the line through the origin; this page gives the physical reason (proportionality). OK.
- weight mg, g = 9.81, N/kg, F_g: lessons 2.1, 2.3, 2.5. Tension in a light rope: lesson 2.5. Third law: 2.4. F = ma: 2.3. Free-body diagram: 2.1.
- sine: lesson 0.7/angles-and-trigonometry. OK.
- atoms, electrons, nuclei, electric force: lessons 0.x, 2.1 and 2.5 (normal force from electrons). OK.
- cosmic microwave background, galaxies: lesson 1.10 (towards-the-universe-light-travel-time) and Block 0. OK.
- info: "quantum mechanics" (Sec. "Why springs obey Hooke's law") is named but not introduced anywhere earlier; used only as the name of a later theory, acceptable.
- info: "sound wave" in the cosmology callout is flagged "(Block 5)"; acceptable as a forward pointer in a callout.
- `F_s` (spring force) in the free-body diagram is new but named in the caption and has its own symbol meaning.

## Coverage
- §4 row 2.7: "Springs and Hooke's law", PhET masses-and-springs (used, in public/phet/manifest.json). Covers Hooke's law with sign, k and its unit, force–extension graph and k as slope, measuring k from a best-fit line, limits, spring balance, hanging mass, series/parallel, preview of oscillations. Good at VWO level.
- warning (uncertain, owner to check against the syllabus by hand): stress, strain and Young's modulus (spanning, rek, elasticiteitsmodulus) are not on this page and not in any lesson of the §4 plan. If VWO requires them, they belong either here or in Block 4.
- info: elastic energy ½kx² is not here; it fits Block 3 (3.3/3.4) but is not named in those §4 rows. Make sure one Block 3 lesson covers it, since Block 5 (SHM energy) will need it.

## Where this leads
- `leadsTo` 8.01 lecture 7 = content/year-1/8.01/tension-and-springs.mdx ("Tension in ropes and the spring force", which states Hooke's law). Same topic; matches §4 (`8-01/tension-and-springs`). Correct.
- `towards: false`: correct, this is not the block's last lesson (2.12 is).
- Cosmology callout (sound waves in the early universe): physically correct and suitably hedged ("a little like a mass on a spring"): before recombination baryons and photons formed a coupled plasma, gravity compressed overdense regions and photon pressure pushed back, giving acoustic oscillations whose imprint is seen in the CMB (acoustic peaks) and in the clustering of galaxies (baryon acoustic oscillations). The simplification that "gravity" alone pulled the gas in (most of it is the gravity of dark matter) is acceptable at this level. info: the callout cites nothing; it is standard physics, but a `references` entry to this site's 8.286 lessons on the CMB would let a reader follow it up. The opening claim (almost any small displacement from a stable position gives a roughly linear restoring force) is supported by Chapter 23 Sec. 23.7 "Small Oscillations", which the page could cite.

## Licensing and AI terms
- No sentence copied: compared the "model found by experiment" paragraph with Sec. 8.1.1 ("a modest sampling of springs has confirmed the relation, we shall infer that all ideal springs …") and the pre-tension and Sec. 8.2 paragraphs; all are paraphrased in plain language.
- No figure copied: all graphs are `<Plot>` from formulas and the free-body diagram is a generated `<VectorDiagram>`.
- Worked examples and quiz questions are the page's own: Chapter 8 Sec. 8.1.1 has no numbers; Example 23.2 (Block-Spring System) is symbolic and not used.
- No Siyavula material or branding; no MIT "excluded" or "All rights reserved" items (none in either chapter's text); no NASA or ESO text; no forbidden source cited or used. PhET credited by the component.

## Notes
- The page follows MIT Sec. 8.1.1's order (natural length, proportional force, sign and restoring force, inductive model, limited range, pre-tension, Newton's second law prediction) and then adds school-level material (graphs, measurements, balance, series/parallel). Good structure.
- The page's own lab table and best-fit line are a nice touch; the residual pattern was checked and matches the caption.
- No errors found; the warnings are wording and consistency points.

## Resolution (2026-11-20, by the page author)
1. (warning) The contrast is now with fundamental force laws: "not a fundamental law of nature, like Newton's law of gravitation (lesson 2.11) or the law for the electric force between charges, which hold for all matter everywhere", as Sec. 8.2 does; Newton's laws of motion are no longer named there.
2. (warning) The bird-feeder step now computes the bird's own stretch directly, $0.050 \times 9.81/40 = 0.012$ m = 1.2 cm, and adds a note that subtracting the rounded 6.1 cm from 7.4 cm gives 1.3 cm while the unrounded 6.13 and 7.36 cm differ by 1.2 cm. Calcs: `feeder-diff` now also checks the 0.012 m; new entries `feeder-rounded-diff`, `feeder-unrounded`, `feeder-x-unrounded`, `feeder-bird-unrounded`.
3. (warning) Added after the first Hooke's-law formula: Dutch VWO textbooks and Binas write $C$ for the spring constant and $u$ for the extension, $F = C\cdot u$ with $C$ in N/m; this site uses $k$ and $x$, as lesson 5.1 does. (C and u need meanings scoped to this page in data/symbols.json; handed to the coordinator.)
4. (info) Elastic-limit flashcard now says only that beyond it the spring stays permanently stretched, and adds that proportionality (Hooke's law) already ends a little earlier, at the limit of proportionality.
5. (info) Parallel springs: added "for unequal springs the load must hang nearer the stiffer spring".
6. (info) No change needed.
7. (info) First graph's y-label is now "force on spring (N)", so F keeps one meaning (the spring's signed force).
- Coverage, Young's modulus (warning, uncertain): left for the owner to check against the VWO syllabus; not added here. Elastic energy ½kx²: planned for Block 3 (lesson 3.4, conservation of energy, spring energy), which Block 5 relies on; not added to this page.
- Where this leads (info): the callout now cites MIT 8.01SC Sec. 23.7 (added to reading1's location) for the roughly linear restoring force near a stable position, and the MIT 8.902 Lecture 17 notes (new reference `mit902`) for the acoustic oscillations; it also says the gravity was mostly that of dark matter. A second `leadsTo` entry points to 8.902 Lecture 17 (this site's Year V lesson "Ripples in the CMB: anisotropies and the acoustic peaks").
