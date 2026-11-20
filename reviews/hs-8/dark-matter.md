---
page: content/year-0/hs-8/dark-matter.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec01.pdf (read; pp. 10-11 in full; image credits "Courtesy of ... Used with permission" on p. 9 only, not used by the page)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec13.pdf (read; p. 86 is the page with printed footer 86)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec10.pdf (read; eq. (300) on printed p. 69; the one "All rights reserved / excluded" item is a Wikimedia plot on an earlier page, not used)
  - https://science.nasa.gov/dark-matter/ (read; last updated 12 Aug 2026)
  - https://doi.org/10.14324/111.9781800084704 (could not read: the DOI goes to the Crossref chooser, and UCL Discovery returned a Cloudflare challenge. The claims were checked against this site's reviewed Ferreras pages instead: the-dark-matter-problem (1.1), gravitational-lensing and weak-lensing-and-machos (2.6), wimps-and-axions (6.4), mond-tests (7.4), counting-ordinary-matter (2.4), dark-matter-particles (6.2))
verdict: pass-with-notes
---

# Review: Dark matter (8.16)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | `leadsTo` {8.902, 13} | On this site, 8.902 lecture 13 is `linear-perturbations` (perturbation equations, Jeans length, growth). The argument "10⁻⁵ × 10³ = 10⁻², so cold dark matter is needed" is on the lecture 14 page `why-cold-dark-matter`, which cites lec13 p. 86 as a reading | "shows why ordinary matter alone could not have formed today's galaxies in time: cold dark matter is needed" | Point to `lecture: 14`, or list both 13 and 14 and split the "why". The link is a good extra beyond §4's two Ferreras targets; it only needs the right lecture. |
| 2 | warning | Section "Dark matter built the galaxies": "Computer simulations ... with cold dark matter produce a web of halos, filaments and empty voids much like the one telescopes see; with fast-moving (hot) dark matter they do not (NASA Science, *Dark Matter*)" | NASA: with cold dark matter the structures "appear to exist and move as they are observed"; with warm or hot dark matter structures "don't seem able to stick together". NASA says nothing about a web. Ferreras 6.2 page: hot dark matter forms structure top-down and erases small scales | Hot dark matter gives no web | Wrong in detail: hot-dark-matter models also make large filaments and voids (top-down); what fails is the small structures, so galaxies form too late. Write "with fast-moving (hot) dark matter, small clumps are smoothed out and galaxies do not form as we see them". |
| 3 | warning | Section "Weighing a galaxy": "Doppler shift of their spectral lines (lesson 7.11)"; bullet "Not ordinary cold gas": "absorption lines in their spectra (lesson 7.11)" | Absorption (dark) lines are taught in 7.4 and 7.5 (`spectra-in-astronomy`, 11 mentions); lesson 7.11 has none (searched). Doppler shift of lines is in 7.5 (10 mentions) and summarised in 7.11 | Both point to 7.11; no hs-7 lesson is in `prerequisites` | Use "lesson 7.5" for both and add `spectra-in-astronomy` to `prerequisites`. |
| 4 | warning | Section "Bending light": "How strongly a lens bends light depends on all the mass in it, shining or not, and on nothing else" | Ferreras 2.6 page: lensing measures the mass projected on the sky, whatever its dynamical state; the result also depends on the distances | "and on nothing else" | Overstated. Write "depends only on how much mass there is and where (and on the distances), not on whether it shines or how it moves". |
| 5 | warning | Quiz 1 and quiz 3; opening paragraph | Lesson 2.13 worked example "How much is missing?" (a) uses the Kepler fall-off (4 × radius gives ½ speed), (b) uses flat curve M ∝ r, and 2.13 quiz 4 asks the same; 2.13 also gives Zwicky, Rubin, the gas-absorption argument and MOND | Quiz 1 (flat curve: 3 × radius, 3 × mass) and quiz 3 (9 × radius, ⅓ speed) repeat these with new numbers; the intro says 2.13 "called the missing mass dark matter and stopped there" | Replace one of the two with a question on this lesson's new content (the halo model, the Bullet Cluster offset, or the 10⁻⁵ × 10³ argument). Reword the intro ("Lesson 2.13 met the puzzle and its history in short"). |
| 6 | warning | Many places: `$r = ... = 5.68 \times 10^{20}$ m`, `$6.8 \times 10^{4}$ m/s`, `$G = 6.67 \times 10^{-11}$ N m²/kg²`, quiz 2 choices `"$3.7 \\times 10^{41}$ kg"`, quiz 2 statement `$r = 4.0 \\times 10^{20}$ m`, `$2.0 \times 10^{10}$ Sun masses` | Lesson 8.15 and the "Check" step of this page put units inside the maths (`\ \text{m}`) | Units outside the maths | Move units inside: `$5.68 \times 10^{20}\ \text{m}$`, `$3.7 \times 10^{41}\ \text{kg}$`, `$G = 6.67 \times 10^{-11}\ \text{N m}^2/\text{kg}^2$`. |
| 7 | info | Section "How much is there?", quiz 5, flashcard 5, Summary | NASA *Dark Matter*: 5% / 27% / 68%. Lesson 8.15 and 8.12 (WMAP Overview): 5% / 25% / 70% | NASA shares, attributed | Correct, but readers meet two sets one lesson apart. Add "(WMAP's earlier maps, lesson 8.15, gave about 25% and 70%; Planck's sharper ones about 27% and 68%)". |
| 8 | info | Ω_m paragraph | 8.902 L10 p. 69 eq. (300): Ω_m,0 = 0.315 ± 0.007, Ω_dm,0 = 0.264, Ω_b,0 = 0.0493 (Planck 2018); matter = baryons + dark matter (p. 68) | Ω_m = 0.315, marked as a later development; "NASA's 27% + 5% = 32% again, to within rounding" | Correct; 0.315 is in calcs/values.yaml (role "later: Planck 2018"). "share of all matter" for Ω_m is a fair VWO simplification for a flat universe. Optional check: 0.264/0.049 = 5.4, the same ratio as 27/5. |
| 9 | info | `references.ferreras.location` and "What might it be?" | Book: Sec. 6.4 WIMPs, Sec. 6.5 Axions (this site's `_course.json`: 6.5 `coveredBy: wimps-and-axions`) | "Sec. 6.4 (WIMPs and axions)" | Write "Secs. 6.4-6.5". Sec. 2.3 is listed in `location` but not cited in the text; cite it at Zwicky or drop it. |
| 10 | info | End of "Dark matter built the galaxies": "Every galaxy, the Milky Way included, sits inside its own dark halo" | Ferreras 2.4/2.5 page (`counting-ordinary-matter`): globular clusters lack dark matter; claimed dark-matter-free dwarf galaxies are "still open" | "Every galaxy" | "Nearly every galaxy". |
| 11 | info | Bullet Cluster: "observed in 2006" | NASA: "In 2006, scientists observed the Bullet Cluster and discovered some of the best direct evidence" | Same | Faithful to NASA. More precise: "whose mass map was published in 2006". Optional. |

## Formulas and citations
- $mv^2/r = GM(r)m/r^2$, cited `mit` eq. (22), p. 10: verified (written there with $M$ and $v_c$, as the `at` says).
- $v = \sqrt{GM(r)/r}$ and $M(r) = v^2 r/G$: eq. (22) rearranged, labelled so ✓. "eqs. (22)-(23)" for the mass: eq. (23) is the integral $v_c \propto (\frac1r\int 4\pi r^2\rho\,dr)^{1/2}$ with ρ ∝ r⁻². Acceptable.
- $v^2 = G(M_\text{vis} + M_\text{dark})/r$: labelled as the page's own step ✓.
- 8.902 L1 p. 10 verified: V_c ≈ 200 ± 50 km/s; speeds from stars and, farther out, gas lines; v_c constant far out; v_c ∝ r^(−1/2) for a central mass; ρ ∝ r⁻² for a flat curve; "one of the first hints for dark matter"; not non-luminous gas (absorption lines); MACHOs ruled out by microlensing; neutrinos ruled out (too fast, hot dark matter). p. 11: WIMPs, "no detections so far"; MOND. All the page's citations to p. 10 and p. 11 are correct.
- 8.902 L13 p. 86 verified: structure grows only after z ≈ 1000; amplified by about 10³; CMB 10⁻⁵ × 10³ ≈ 10⁻² "much less than what we observe"; dark matter clumped before and baryons fell into its wells; CDM does not interact with radiation, so it can grow before recombination ✓.
- NASA *Dark Matter* verified: 5/27/68%; no light absorbed, reflected or emitted; Zwicky 1933, Swiss-born, Coma Cluster, "dunkle Materie"; Rubin, American, 1970s, outer stars of spirals; lensing; Bullet Cluster 2006, about 3.8 billion light-years, hot X-ray gas versus lensing mass, "some of the best direct evidence"; cold versus hot in simulations (see row 2); WIMPs (heavy, slow, gamma rays from annihilation searched with Fermi), axions (low-mass, first theorised 1977 for the strong CP problem; the page's "a separate puzzle about the strong force" is a fair plain version), primordial black holes; dark energy spread through space and accelerating the expansion ✓.
- Ferreras (checked through the site's pages, not the book; see sources_read): 1.1 everything known comes from gravity ✓; 2.6 lensing needs no assumption about orbits or equilibrium ✓, Bullet Cluster gas slowed, lensing mass with the galaxies "ahead of the gas on both sides" ✓, MACHO survey of about 12 million stars for six years found too few events ✓; Ch. 7 (7.4 page) the Bullet Cluster is hard for MOND ✓.
- Attribution: Zwicky and Rubin are described only as NASA describes them ✓. Planck 2018 is marked as a later development ✓. "For many astronomers this is the most direct evidence" is fair against NASA's "some of the best direct evidence".

## Arithmetic and answer checks
Recomputed independently in Python; `npm run calc:test`: every entry of this page passes; `content:check`: 0 errors (warning only "no review file yet").
- Worked example: r = 60 000 × 9.46e15 = 5.676e20 m ✓; M = (1.6e5)² × 5.676e20/6.67e-11 = 2.18e41 kg ✓; /1.99e30 = 1.095e11 Sun masses ("1.1e11") ✓; dark fraction 1 − 2.0e10/1.095e11 = 0.817 (0.818 with the rounded 1.1e11) → "about 82%" ✓; v_vis = √(6.67e-11 × 2.0e10 × 1.99e30/5.68e20) = 6.84e4 m/s ✓; 160/68 = 2.35 ("more than twice") ✓; (68/160)² = 0.181 ✓. Unit check correct.
- Kepler fall-off: 4 × r gives ½ v ✓.
- Plot model, total = √(v_vis² + v_dark²): v_vis(8) = 150, v_vis(100) = 42.4 ✓ ("42"), v_vis(50) = 60.0 ✓; total minimum on [8, 100] is 174.0 at r = 10.3 thousand ly ✓; maximum 202.29 at r ≈ 95 (202.29 at 100) ✓ ("between 174 and 202"); total(50) = 200.7 ✓ ("201"). The range [0, 250] holds every curve. The uniform ball (v ∝ r inside) and the cored halo (M ∝ r³/(r² + 15²), growing ∝ r far out) match the text.
- Quiz 1: same v, so M ∝ r: 90/30 = 3, answer 1 ✓; other choices wrong ✓.
- Quiz 2: (2.5e5)² × 4.0e20/6.67e-11 = 3.748e41 → 3.7e41, answer 0 ✓; = 1.88e11 Sun masses ("about 2e11") ✓; km/s kept: 3.7e35 (10⁶ smaller, "a million times") ✓; × G: 1.67e21 ✓; v not squared: 1.50e36 ✓.
- Quiz 3: 210 × √(1/9) = 70, answer 2 ✓; 23 = 210/9, 630 = 210 × 3, both wrong ✓.
- Quiz 4: answer 1 ✓ (NASA and Ferreras 2.6); "no ordinary matter at all" is wrong (the gas is ordinary matter) ✓.
- Quiz 5: 27/5 = 5.4, answer 1 ✓; 27/32 = 0.844 ✓; 22 and 32 ✓; 0.2 = 5/27 ✓.
- Section "How much": 27 + 5 = 32 against 0.315 ✓. Structure growth 10⁻⁵ × 10³ = 10⁻² ✓.
- Flashcards: all true.
- Not in calcs (info): "a million times too small" (follows from the km/s entry), "more than twice as fast".

## Only earlier terms
- Present earlier: centripetal force (2.9), gravitation and G (2.11), rotation curve, M inside the orbit, shell argument, Zwicky and Rubin (2.13); light-year (1.11); X-rays (5.8); spectral lines and Doppler (7.4, 7.5, see row 3); neutrinos, weak and electromagnetic force, annihilation into gamma rays (8.7); gravitational lensing (8.8); black holes from dying stars (8.9); galaxies and clusters (8.10, 8.11); CMB and its 10⁻⁵ ripples (8.15).
- Defined on the page: M(r), Kepler fall-off, dark halo, Bullet Cluster, microlensing (described), WIMPs, axions, primordial black holes, MOND, density parameter Ω_m, cold dark matter.
- "dark energy" is used before lesson 8.17 but is named in 8.12 and 8.15 and described in one line here. Fine.
- "strong force" (axions) comes from 8.7 ✓.

## Coverage
- §4 row 8.16 (NASA *Dark Matter*; leads to Ferreras `the-dark-matter-problem`, `gravitational-lensing`): covered at VWO level: rotation curves with a worked example and a model, history (Zwicky, Rubin), lensing and the Bullet Cluster, what dark matter is not, candidates, MOND, how much there is, and its role in forming galaxies.
- Left out: hot gas in clusters as a mass measure (X-ray hydrostatic mass, Ferreras 2.3), and direct-detection experiments underground. Neither is needed at this level; one line on underground detectors would complete "What might it be?".
- No PhET sim: §4 names none ✓.

## Where this leads
- `{Ferreras, 1.1}` resolves to `the-dark-matter-problem` ✓ (gravity as the only evidence).
- `{Ferreras, 2.6}` resolves to both `gravitational-lensing` and `weak-lensing-and-machos`. The "why" (arcs and rings, the Bullet Cluster by weak lensing, microlensing against dim stars) fits the two together ✓.
- `{8.902, 13}`: see row 1; should be lecture 14 (`why-cold-dark-matter`).
- `towards: false` is correct. The callout's claims (dark matter sets the past deceleration, CMB ripples, galaxy formation) are correct.

## Licensing and AI terms
- No copied sentences. NASA "doesn't absorb, reflect, or emit any light" becomes "does not absorb, reflect or give off light" (a short standard phrase). "'Dark' here means invisible, not dark-coloured" is close to NASA's "Dark matter is not a dark color" but short. Fine.
- No figure copied. Both graphs are generated. NASA's Bullet Cluster composite and the 8.902 images ("Courtesy ... Used with permission") are not used.
- The worked example, plot model and quizzes are the page's own (the sources have no exercises), but they partly repeat lesson 2.13 (row 5).
- Ferreras is CC BY-NC 4.0, credited with "rewritten and shortened here, no figures used" ✓. No AI clause (AGENTS.md table).
- NASA: no insignia, no "according to NASA" phrasing (checked). No ESO text. No forbidden source cited or used (checked: no OpenStax, LibreTexts, Khan, CK-12, IOPSpark or Siyavula branding). No em dashes.

## Notes
- No errors found. Rows 1-6 should be fixed before `status: reviewed`.
- The Ferreras book itself could not be fetched. Every Ferreras claim was checked against this site's reviewed Ferreras pages, which were written from the book.

## Resolution (2026-11-20, by the page author)
1. Fixed: the 8.902 `leadsTo` now points to lecture 14 (`why-cold-dark-matter`, checked: its summary is the 10⁻⁵ to 10⁻² argument and the cold-dark-matter head start); the "why" is reworded to match that page. Lecture 13 (`linear-perturbations`) is not listed.
2. Fixed: the simulations sentence now says only what NASA says (with cold dark matter the structures look and move as observed; with hot dark matter they do not hold together as observed), followed by Ferreras Sec. 6.2 (as summarised on this site's `dark-matter-particles` page): hot dark matter smooths away small clumps, large structures can still form, but the small clumps, and so the galaxies, come too late. Sec. 6.2 added to the Ferreras `location`.
3. Fixed: both references now say "lesson 7.5"; `spectra-in-astronomy` (hs-7 lecture 5, checked in hs-7/_course.json) added to `prerequisites`.
4. Fixed: lensing now "depends on how much mass it has and how that mass is spread across the sky (and on the distances to the lens and to the background galaxies), but not on whether the mass shines".
5. Fixed: quiz 1 (flat curve, mass ratio, which repeated 2.13) replaced by a question on why dark matter must be cold (fast particles smooth out the small clumps, so galaxies form too late; distractor "no large structures at all" is wrong, matching row 2). Quiz 3 (Kepler fall-off) kept as the one rotation-curve recall question. The calcs entry `quiz-mass-ratio` was removed; the quiz indices of the other entries are unchanged. The opening paragraph now says 2.13 met the puzzle and its history in short (Zwicky, Rubin, the name, modified gravity) and lists what this lesson adds from Block 8 (lensing, particles, the CMB).
6. Fixed: units inside the maths throughout (constants line, speeds, worked example steps, quiz 2 statement, choices and explanation with G's unit, quiz 3 explanation); calcs `shown` strings updated. The plain-units tool reports nothing for this page.
7. Info, all done: one sentence after the NASA shares links lesson 8.15's WMAP 25%/70% to the later, sharper 27%/68% (not attributed to Planck, since the NASA page does not name it); Ferreras cited as Secs. 6.4-6.5 for WIMPs and axions; Sec. 2.3 dropped from the reference `location` (not cited in the text); "Nearly every galaxy"; the Bullet Cluster is now the one "whose mass map was published in 2006".
8-11. Rows 8 (no change needed), 9, 10, 11 handled under 7 above.

Checks: `npm run calc:test -- -k dark-matter`: 152 passed. `npm run content:check`: 0 error(s), no error or warning for this page.
