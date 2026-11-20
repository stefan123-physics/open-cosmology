---
page: content/year-1/8.02/conductors-and-capacitors.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w03d1-1/ (read: local copy of the resource page and its PDF, presentati_w03d1-1.pdf, 40 pages; slide number = "P07 - N" label = PDF page; slides 18 and 19 print "P07 -" without a number but follow in order; the resource page states CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte4gauss_law/ (read: local copy chapte4gauss_law.pdf; printed page = PDF page − 1, checked page by page with pdftotext -f N -l N; Section 4.3 = printed pp. 14–21)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap5capacitance/ (read: local copy chap5capacitance.pdf; printed page = PDF page − 1; Sections 5.1–5.2 = pp. 2–8, Section 5.4 = pp. 12–15)
  - content/year-4/8.286/black-body-radiation.mdx (read, for the leadsTo: `lecture: 16`, u ∝ T⁴)
  - content/year-4/8.286/matter-radiation-equality.mdx and flatness-problem.mdx (read, to check the callout's claim about the radiation era)
  - calcs/8.02/conductors-and-capacitors.yaml (read; `npm run calc:test -- -k conductors-and`: 8 passed)
  - `npm run content:check`: no error for this page; its only warning is the missing review file (the 2 errors in the run belong to content/year-1/8.02/capacitors-and-dielectrics.mdx, a different page)
verdict: needs-changes
---

# Review: Conductors, capacitors and stored energy

Citation convention checked: `reading1` = Course Notes Chapter 4, `reading2` = Course Notes Chapter 5, both cited by printed page (PDF page − 1); `reading3` = Session 7 slides, cited by slide number = PDF page. Every `<Formula>` and every prose page/slide reference was checked against the PDFs (list below); all are right. No "rights reserved" or "courtesy" notice in the text of the notes, the slides or their resource pages (grep: no match; the resource pages carry CC BY-NC-SA 4.0). The page has no figures, plots or diagrams, so no MIT figure is reused. Dielectrics and series/parallel capacitors (Sections 5.3 and 5.5) are Session 8 and correctly left out.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Cosmology callout, last sentence: "in the first few hundred thousand years after the Big Bang, radiation outweighed all the matter" | Not MIT 8.02, but the site's own 8.286 pages: matter-radiation-equality.mdx (Lecture 15) gives Guth's estimate t_eq ≈ 75,000 years, Ryden's 47,000, and concludes "the radiation era lasted tens of thousands of years"; flatness-problem.mdx: "Matter era, from about 50,000 years to now". | Radiation dominated for "a few hundred thousand years". That is the time scale of recombination/decoupling (~380,000 yr), not of equality; by a few hundred thousand years matter already outweighed radiation by a factor of several. | "for the first tens of thousands of years after the Big Bang, radiation outweighed all the matter". Optionally add a second `leadsTo` to 8.286 Lecture 15 (matter-radiation equality), which is where that claim is made. |
| 2 | info | Cosmology callout, first sentence: "a field stores energy, ½ε₀E² … is what lets light carry energy" | (Ch. 5 gives only u_E; magnetic field energy comes later in 8.02.) | Light's energy attributed to the electric field's energy density. | Correct in spirit, but in a light wave the energy is shared equally between E and B. Suggest "…together with the matching energy in the magnetic field (later in this course), is what lets light carry energy…". |
| 3 | warning | Opening paragraph; whole page | Slides 15–17: "Expt. 2: Electrostatic Force", with a visualization link (slide 16). | Experiment 2 is named in the opening sentence but nothing about it (what is measured, what it shows) appears. | The slides themselves give no content beyond the title and the applet link, and I did not read the Experiment 2 handout, so I cannot say what to add. Either add one sentence on the experiment from its own OCW handout (cite it as a new reading), or say plainly that the lab is not covered here. |
| 4 | info | "Conductors and insulators", order | Slides: conductors (5–6), then equipotentials (7–12), then "Conductors in equilibrium" list (13) and charge moving to the surface (14). Notes, Section 4.3: properties (1)–(4), then Example 4.5, Example 4.6 (spherical shell potential), two spheres joined by a wire. | Equilibrium list (citing slides 6, 13, 14) first, equipotentials paragraph (slides 7–12) after it. | Acceptable (it follows the notes' order and cites the slides correctly); no change needed. |
| 5 | info | "Conductors and insulators", "Two consequences from the notes" | Example 4.6, pp. 18–20: potential of a charged conducting shell, V constant inside, and the charging work U = Q²/(8πε₀a) = ½QV (Eqs. 4.3.4–4.3.8). | Not mentioned in the conductor section (the same Q²/(8πε₀a) appears later via Example 5.6). | Optional: in the Example 5.6 sentence, note that Example 4.6 (pp. 18–20) gets the same Q²/(8πε₀a) by charging the shell, which also shows V constant inside the conductor. |
| 6 | info | "Energy stored in a capacitor" | Slide 38 also compares a 100 µF capacitor at 3 kV: ½(10⁻⁴ F)(3 × 10³ V)² = 450 J. Notes Example 5.5, p. 14: energy density of dry air at breakdown, 3 × 10⁶ V/m, about 40 J/m³. | Neither is mentioned. | Optional: one sentence each; both are good sense-of-scale numbers (450 J recomputed correct; ½ × 8.85 × 10⁻¹² × 9 × 10¹² = 39.8 J/m³ ≈ 40, correct). |
| 7 | info | "Capacitors", Formula "Capacitance", `at="Eq. (5.1.1), p. 2"` | Eq. (5.1.1) is written Q = C\|ΔV\|; C is then defined in words on p. 3. Slide 19 writes C = Q/ΔV. | C = Q/\|ΔV\|. | Same relation; fine. Optionally `at="Eq. (5.1.1), p. 2 (rearranged); slide 19"`. |
| 8 | info | Whole page | Slides 10, 30, 39 are PRS question titles and slides 25, 31, 40 demonstration titles, with no content in the PDF. | Not mentioned. | Nothing to add; their content is not in the PDF. |

Every formula and prose reference was checked against its cited location:
- Conductor vs insulator: notes Section 4.3 begins at the foot of p. 14 (glass or paper as insulators); slide 5 ("electrons are weakly bound to atoms"; examples plastic, paper, wood). Correct.
- Metal ball in a uniform field, induced charges at the poles, dipole field outside: p. 15, Figure 4.3.1. Correct.
- Equilibrium properties pp. 14–17; slides 6 and 13. Correct. Net charge on the surface via a Gaussian surface inside: property (2), p. 15. Correct. Charge moves to the surface to get away from like charges: slide 14. Correct.
- Tangential component zero, surface an equipotential: Eq. (4.3.1) and V_B − V_A = 0, p. 16. Correct.
- "Field just outside a conductor" E_n = σ/ε₀: Eq. (4.3.3), p. 17 (pillbox, Eq. 4.3.2). Correct.
- Equipotentials, topographic maps, E perpendicular, high to low, no work along one: slides 7–12. Correct.
- Cavity charge: Example 4.5, heading p. 17, solution p. 18 (−q on the cavity wall, Q + q outside). Correct.
- Two spheres joined by a wire, σ₁/σ₂ = r₂/r₁, lightning rod: Eqs. (4.3.9)–(4.3.11), pp. 20–21. Correct.
- Capacitor definition (two conductors, ±Q): Section 5.1, pp. 2–3; slide 19. Correct. Farad, pF to mF range: p. 3. Correct.
- Parallel plates: Example 5.1, pp. 3–5; fringing fields ignored (pp. 3–4), pillbox E = σ/ε₀ (Eq. 5.2.1, p. 4), \|ΔV\| = Ed (Eq. 5.2.3, p. 4). Charges on the inner faces: slide 21. Two sheets each σ/2ε₀: slide 23. "Parallel-plate capacitor" C = ε₀A/d: Eq. (5.2.4), p. 5; slide 24. Geometry-only remark: p. 5. All correct.
- Concentric spheres: Example 5.3, p. 7, field Eq. (5.2.9), "Spherical capacitor" C = 4πε₀ab/(b − a): Eq. (5.2.11), p. 7; slides 26–27. Correct.
- Isolated sphere 4πε₀a: Eq. (5.2.12) (starts at the foot of p. 7) and (5.2.13), p. 8; slide 27. Correct.
- Coaxial cylinders C = 2πε₀L/ln(b/a): Example 5.2, pp. 5–6, Eq. (5.2.7) on p. 6. Correct.
- Earth's capacitance ≈ 7 × 10⁻⁴ F: slide 28. 1 F at 12 V holds 12 C: slide 29. Correct.
- Charging work dW = (q/C)dq: Section 5.4, p. 12; slides 33–35. "Energy in a capacitor" U = ∫q/C dq = Q²/2C = ½Q\|ΔV\| = ½C\|ΔV\|²: slides 35 (integral) and 36 (three forms); also notes Eqs. (5.4.1)–(5.4.2), p. 12. Correct.
- 72 J: slide 38. Correct.
- U = ½ε₀E²·Ad: Eq. (5.4.3), Section 5.4.1, p. 13; slide 37. "Energy density" u_E = ½ε₀E²: Eq. (5.4.4), p. 13. Correct.
- Spherical shell: Example 5.6, pp. 14–15, Eqs. (5.4.10)–(5.4.11), Q²/(8πε₀a). Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k conductors-and`: 8 passed. Recomputed by hand as well:
- Earth: 4π × 8.85 × 10⁻¹² × 6.4 × 10⁶ = 7.12 × 10⁻⁴ F ≈ 7 × 10⁻⁴ F. Correct (slide 28 also writes 0.7 mF).
- 1 F × 12 V = 12 C; ½ × 1 × 12² = 72 J. Correct.
- Worked example (a): A = 0.1² = 0.01 m², C = 8.854 × 10⁻¹² × 0.01/0.001 = 8.854 × 10⁻¹¹ F ≈ 88.5 pF, "about 89 pF". Correct. (b) Q = 8.854 × 10⁻¹¹ × 100 = 8.85 × 10⁻⁹ C. Correct. (c) E = 100/0.001 = 10⁵ V/m. Correct. (d) ½ × 8.854 × 10⁻¹¹ × 10⁴ = 4.43 × 10⁻⁷ J; u_E = ½ × 8.854 × 10⁻¹² × 10¹⁰ = 0.0443 J/m³; volume 0.01 × 0.001 = 10⁻⁵ m³; 0.0443 × 10⁻⁵ = 4.43 × 10⁻⁷ J. Correct, and the two routes agree as they must. (Trivial: step (a) rounds C to 8.85 × 10⁻¹¹, step (d) uses 8.854 × 10⁻¹¹; both fine.)
- The worked example is original: MIT's notes and slides have no numerical parallel-plate example (the only numbers are Earth, the 1 F and 100 µF capacitors, and dry air).
- Quiz 1: net charge on the surface, answer 1. Correct; explanation matches notes p. 15.
- Quiz 2: C = ε₀A/d, doubling d halves C, answer 1. Correct.
- Quiz 3: U = ½CΔV², doubling ΔV quadruples U, answer 1. Correct (C fixed, implicit in "a capacitor").
- Flashcards: all three correct and consistent with the notes.

## Coverage and order
- Session 7 slides, in order: outline and Gauss recap (1–3), conductors (4–6), equipotentials (7–12), conductors in equilibrium (13–14), Experiment 2 (15–17), capacitors and capacitance (18–24), demo (25), spherical capacitor and isolated sphere (26–27), Earth and 1 F (28–29), PRS/demo (30–31), energy (32–38), PRS/demo (39–40). The page follows this order, except that equipotentials come after the equilibrium list (finding 4) and Experiment 2 is only named (finding 3).
- Notes Section 4.3 is covered except Example 4.6 (finding 5). Section 4.4 (force on a conductor) is not cited and not covered; it is not in the slides, so leaving it out is reasonable.
- Notes Sections 5.1, 5.2 and 5.4 are covered, including all three capacitance examples and Example 5.6; Example 5.5 (dry air) is not (finding 6). Sections 5.3 and 5.5 are Session 8, correctly out of scope.

## Licensing
- No "rights reserved" or "courtesy" notice in the slides, Chapter 4 or Chapter 5 (grep of text and resource pages: no match); OCW states CC BY-NC-SA 4.0.
- No figures are reused; the page has no diagrams.
- No sentence copied verbatim. Closest phrasing: "as close as they can get to the opposite charges" (slide 21: "to get as close as possible to charges of the opposite sign") and "bigger plates hold more charge" (notes p. 5: "a bigger plate can hold more charge"): short paraphrases, acceptable. "The design of a lightning rod is based on this principle" (notes p. 21) is rendered as "the principle of the lightning rod": fine.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.286 Lecture 16 (black-body-radiation.mdx, `lecture: 16`): fair; that page derives u ∝ T⁴ for black-body radiation, which is what the callout's "grows as the fourth power of the temperature" refers to. The callout's last claim (finding 1) belongs to Lecture 15's page, not Lecture 16's.
- Symbols: content:check reports no missing symbol meanings for this page.
- I did not read the Experiment 2 lab handout, so I cannot judge what (if anything) the page should say about the experiment.

## Resolution (2026-11-16, by the page author)

- Error: the callout now says radiation outweighed matter "for the first tens of thousands of years", in line with the 8.286 matter–radiation equality page; added a leadsTo to 8.286 Lecture 15.
- Warning: the page now says the slides give only the title of Experiment 2 and a link to a simulation.
- Info: the callout adds that a light wave's energy is shared equally between its electric and magnetic fields. Other info notes (Example 4.6, slide 38's 450 J, Example 5.5): no change.
