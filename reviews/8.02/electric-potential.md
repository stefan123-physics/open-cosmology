---
page: content/year-1/8.02/electric-potential.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w02d1/ (read: local copy of the resource page and its PDF, presentati_w02d1.pdf, 36 pages; slide number = "P04 - N" label = PDF page; slides 3–6 print "P04 -" without a number but follow in order; the resource page states CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch3electri_poten/ (read: local copy ch3electri_poten.pdf; printed page = PDF page − 1, checked page by page with pdftotext -f N -l N; Sections 3.1–3.5 = printed pp. 1–17; the resource page states CC BY-NC-SA 4.0)
  - content/year-4/8.286/_course.json (read: Lecture 6 = "The Dynamics of Homogeneous Expansion, Part II")
  - content/year-4/8.286/expanding-sphere.mdx (read, for the cosmology callout and leadsTo: `lecture: 6`, energy of a test particle at the edge of the sphere, cases E > 0, E = 0, E < 0)
  - calcs/8.02/electric-potential.yaml (read; `npm run calc:test -- -k electric-potential`: 6 passed)
  - `npm run content:check`: no error for this page; its only warning is the missing review file (the 2 errors in the run belong to content/year-1/8.02/gauss-law.mdx, a different page)
verdict: pass-with-notes
---

# Review: Electric potential and potential energy

Citation convention checked: `reading1` = Course Notes Chapter 3, cited by printed page (PDF page − 1); `reading2` = Session 4 slides, cited by slide number = PDF page. Every `<Formula>` cites `reading1` with an equation number and page; every one was checked against the PDF and is right (list below). No "rights reserved" or "courtesy" notice in the text of the notes or the slides (grep of both text files and both resource pages: no match; the resource pages carry CC BY-NC-SA 4.0). The page has no figures or plots, so no MIT figure is reused.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Continuous charge", last sentence: "Far away each tends to k_e Q/r." | The notes show the point-charge limit for the ring (Example 3.2, p. 15, z ≫ R) and the disc (Example 3.3, p. 16, \|z\| ≫ R). For the rod (Example 3.1, pp. 13–14) the notes take the opposite limit, ℓ ≫ y (close to a long rod), giving V ≈ (λ/2πε₀) ln(ℓ/y), Eq. (3.5.11), and then E_y. | The rod is mentioned only as "there is a logarithm", and the far-field limit is claimed for all three, rod included. | The claim is correct physics (for y ≫ ℓ the rod's V tends to λℓ/(4πε₀y) = k_e Q/y; checked by expanding Eq. 3.5.10), but MIT does not show it for the rod, and the limit MIT does show is left out. Suggest: "The ring and the disc tend to k_e Q/r far away (pp. 15–16); for the rod the notes look instead at points close to a long rod, where V ≈ (λ/2πε₀) ln(ℓ/y) (Eq. 3.5.11, p. 14)." Optionally keep the rod's far limit as the page's own remark. |
| 2 | info | "The electric potential", "the work needed to move it from A to B is qΔV" | Notes p. 3: ΔV is the work per unit charge to move a test charge "without changing its kinetic energy"; slide 19: W_ext = ΔU = qΔV. | "the work needed to move it", without saying whose work. | The page has just distinguished W_g and W_ext; say "the work an external agent must do (moving it slowly, without changing its kinetic energy) is qΔV". |
| 3 | info | "The energy of a configuration", "For N charges, sum over all distinct pairs (Section 3.3.1, p. 8)" | p. 8 also gives Eq. (3.3.8) with j > i, and Eq. (3.3.9), U = ½ Σ qᵢ V(rᵢ), counting each pair twice and halving. | Only the words for (3.3.8); (3.3.9) not mentioned. | Optional: one sentence on the ½ Σ qᵢV(rᵢ) form, which is the one used later for field energy. |
| 4 | info | "The field from the potential" | Section 3.5 also has the spherical form E_r = −dV/dr, Eq. (3.5.6), p. 10, with the point-charge check; Eq. (3.5.9), p. 11, \|dV/ds\|max = \|∇V\| (∇V points in the direction of fastest increase); Example 3.4, p. 17, E from V = Ax²y² + Bxyz. | The ring derivative is the only worked use of E = −∇V; (3.5.6), (3.5.9) and Example 3.4 are not mentioned. | Optional: a sentence on E_r = −dV/dr and on ∇V as the direction of steepest increase (linking to the 18.02 gradient page), which covers Section 3.5 fully. |
| 5 | info | Whole page | Slides 16, 24 and 27 are PRS (clicker) question titles with no question text in the PDF; slide 32 is an in-class problem (sketch E from a plotted V; is there charge, where?); slide 36 is an in-class problem (V at a point P and the assembly energy of three pictured charges, then bringing +3Q to P). | Not mentioned. | Fine to leave the PRS slides out (their content is not in the PDF). Slide 32's idea (E is minus the slope of V; a kink in V means charge) could be one sentence in "The field from the potential". See also Licensing on slide 36. |
| 6 | info | Cosmology callout, "whether their sum is positive, zero or negative decides whether the expansion goes on for ever or ends in collapse" | expanding-sphere.mdx (Lecture 6 page): E > 0 expands for ever, E = 0 is the borderline case that just barely expands for ever, E < 0 stops and recollapses. | Three cases listed against two outcomes. | Correct but the mapping is implicit; e.g. "positive or zero: for ever; negative: collapse". |

Every formula and prose page reference was checked against its cited location:
- Opening: Hour 1 = groups and Experiment 1 (slides 1–7); Hour 2 starts with "Last time" (slide 8), the gravity/electricity create–feel table (slide 9) and "Start with gravity" (slide 10). Correct.
- "Work done by gravity" W_g = ∫F_g·ds = ∫ −GMm/r² dr = GMm(1/r_B − 1/r_A): Eq. (3.1.3), printed p. 1 (PDF p. 2); slides 11–12. Correct, same signs.
- W_g = −W_ext: bottom of p. 1 to top of p. 2 ("pp. 1–2"); also slide 14. Correct.
- W_g = −mg(y_B − y_A): Eq. (3.1.4), p. 2; slide 13. Correct.
- ∮F·ds = 0, conservative: Eq. (3.1.5), p. 2. Correct.
- "Potential energy" ΔU = U_B − U_A = −∫F·ds = −W: Eq. (3.1.6), p. 2; slide 14. Correct.
- U_g = −GMm/r + U₀ (Eq. 3.1.7, p. 2), reference at infinity and only differences matter (p. 3), mgy + U₀ (slide 14; notes p. 3 give ΔU_g = +mgh): "pp. 2–3; slide 14". Correct.
- Gravitational potential ΔV_g = ΔU_g/m = −∫g·ds: Eq. (3.1.8), p. 3; slide 15 ("two particle interaction → single particle effect", which the page paraphrases as "a property of one point rather than of a pair"). Correct.
- "Electric potential difference" ΔV = −∫(F_e/q₀)·ds = −∫E·ds: Eq. (3.1.9), p. 3; slides 18–19. Correct.
- U = qV (Eq. 3.1.10, p. 3, written ΔU = q₀ΔV), 1 V = 1 J/C (Eq. 3.1.11, p. 3), 1 eV = 1.6 × 10⁻¹⁹ J (Eq. 3.1.12, p. 4): "pp. 3–4". Correct.
- Potential landscapes, charges create / feel: slides 20–23. Correct.
- Uniform field ΔV = −E₀d < 0, field lines from high to low potential, ΔU = −qE₀d, mass analogy: Section 3.2, Eq. (3.2.1), p. 4. Correct. Perpendicular path costs nothing, points on the line BC equipotential: p. 5. Correct.
- Point charge: r̂·ds = dr, Eq. (3.3.1) on p. 5, V = 0 at infinity (Eq. 3.3.2) and "Potential of a point charge" Eq. (3.3.3) on p. 6; slide 26. Correct.
- "Superposition of potentials" V = k_e Σ qᵢ/rᵢ: Eq. (3.3.4), p. 6. Correct.
- "Energy of two charges" U₁₂ = q₂V₁ = q₁q₂/(4πε₀r₁₂): Eq. (3.3.5), p. 7 (PDF p. 8); slide 34. Correct. Like charges positive, opposite negative: p. 7. Correct.
- "Energy of three charges": Eq. (3.3.7), p. 8 (W₃ = q₃(V₁ + V₂), Eq. 3.3.6, also p. 8); slide 35. Correct.
- "Potential of a continuous distribution" V = (1/4πε₀)∫dq/r: Eq. (3.4.2), p. 9 (Section 3.4 starts at the foot of p. 8; Eqs. 3.4.1–3.4.2 are on p. 9). Correct.
- Ring V = k_eQ/√(R² + z²): Example 3.2, pp. 14–15, Eq. (3.5.12) on p. 15. Correct (the notes start from λ and substitute Q = 2πRλ). Ring field k_eQz/(R² + z²)^{3/2}: Eq. (3.5.13), p. 15. Correct.
- Disc V = (σ/2ε₀)(√(R² + z²) − \|z\|): Example 3.3, pp. 15–16, Eq. (3.5.14) on p. 16. Correct.
- Rod: Example 3.1, pp. 12–14 (statement p. 12, solution and Eq. 3.5.10 p. 13, limit Eq. 3.5.11 p. 14). Correct; see finding 1.
- dV = −E·ds = −(E_x dx + E_y dy + E_z dz): Eqs. (3.5.1)–(3.5.3), p. 9; slides 30–31. Correct.
- "Field as minus the gradient" E = −(∂V/∂x î + ∂V/∂y ĵ + ∂V/∂z k̂) = −∇V: Eq. (3.5.5), p. 9 (the expanded form is the unnumbered line just above it). Correct.
- Equipotentials perpendicular to E, high to low, spheres around a point charge, planes across a uniform field, no work along one: Section 3.5.1, pp. 10–12 (definition p. 10, proof pp. 10–11, list (i)–(iv) p. 12). Correct.
- Topographic map, V_g = gz: p. 12. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k electric-potential`: 6 passed. Recomputed by hand as well:
- Worked example (a): distances from x = 0.9 m are 0.9, 0.6 and 0.3 m. 2/0.9 = 2.222, −1/0.6 = −1.667, 1/0.3 = 3.333; sum 3.889 (nC/m). k_e × 1 nC = 8.99 V·m, so V = 8.99 × 3.889 = 34.96 V ≈ 35.0 V. Correct.
- (b): r₁₂ = 0.3, r₁₃ = 0.6, r₂₃ = 0.3 m. q₁q₂/r₁₂ = −2/0.3 = −6.667; q₁q₃/r₁₃ = 2/0.6 = 3.333; q₂q₃/r₂₃ = −1/0.3 = −3.333; sum −6.667 (×10⁻¹⁸ C²/m). U = 8.99 × 10⁹ × 10⁻¹⁸ × (−6.667) = −5.99 × 10⁻⁸ J ≈ −6.0 × 10⁻⁸ J. Correct; negative sign means the external agent does net negative work (energy is released), as the page says.
- (c): 100 × 1.6 × 10⁻¹⁹ J = 1.6 × 10⁻¹⁷ J. Correct (uses the notes' value of e).
- Quiz 1: along the field ΔV = −E₀d < 0, ΔU = qΔV < 0 for q > 0: "decreases", answer 1. Correct; explanation matches notes p. 4.
- Quiz 2: perpendicular, E from high to low potential: answer 1. Correct; matches notes p. 12 (i).
- Quiz 3: U₁₂ = k_e q₁q₂/r₁₂ > 0 for like charges: answer 0. Correct; matches notes p. 7.
- Flashcards: all three correct (ΔV definition and work qΔV; V = k_eQ/r, zero at infinity, scalar superposition; E = −∇V perpendicular to equipotentials, towards lower V).
- Summary sentence, frontmatter `summary` and Summary bullets agree with the body.

## Coverage and order
- MIT's order (slides): groups and Experiment 1 → gravity: work, near-surface work, potential energy, gravitational potential → electrostatics: ΔV, units, W = qΔV → landscapes (create / feel) → point-charge potential → E from V (gradient) → in-class problem (E from a V plot) → configuration energy (two, three charges) → in-class problem.
- The notes' order (Sections 3.1–3.5): potential and potential energy → uniform field → point charges and configuration energy → continuous distributions → E from V, equipotentials, Examples 3.1–3.4.
- The page follows the notes' order (configuration energy and continuous charge before E = −∇V), which differs from the slides (E from V before configuration energy). Both orders are MIT's; acceptable, but the page could say it follows the notes.
- Left out: the rod's formula and its near limit (finding 1), Eq. (3.3.9) (finding 3), Eq. (3.5.6), Eq. (3.5.9) and Example 3.4 (finding 4), the in-class problems on slides 32 and 36 and the PRS questions (finding 5). The notes' gravitation/electrostatics comparison table (p. 6) is not reproduced, but its content is in the page's prose.
- Added: the original worked example and the cosmology callout.
- leadsTo: 8.286 Lecture 6 is "The Dynamics of Homogeneous Expansion, Part II" in `_course.json`, and its page `expanding-sphere` (`lecture: 6`) interprets the conserved E, multiplied by m r_i², as kinetic plus potential energy (−GMm/r) of a test particle at the edge of the sphere. The reason given ("energy bookkeeping behind the Friedmann equation for an expanding sphere") is fair.

## Licensing
- No "rights reserved" or "courtesy" notice in the text of either PDF or on either OCW resource page; both are CC BY-NC-SA 4.0. Image-only notices inside figures cannot be detected from the text layer, but the page reuses no figure and draws no diagram, so this does not matter here.
- Text is rewritten; no copied sentences found. Short shared phrases ("charges create / feel potential landscapes", "only differences matter", "first charge is free", "from higher to lower potential", "topographic map") are standard terminology or slide headings, acceptable.
- Worked example: original numbers and geometry (three charges on a line, potential at a fourth point, assembly energy, electron through 100 V). Its structure (potential at a point plus the energy to assemble three charges) parallels the in-class problem on slide 36, whose figure and numbers are not in the PDF text, so closeness to its figure is uncertain; with its own charges and positions it is not a copy. It also differs from the notes' Additional Problem 3.10.2 (force, field and potential at the origin).
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: the Newtonian energy argument (kinetic ½mv² plus potential −GMm/r for a galaxy at the edge of an expanding ball, sign deciding the fate) is the argument of 8.286 Lectures 6–7 as written on `expanding-sphere`; "the simplest derivation" is fair for a Newtonian treatment. "Particle energies in the early universe are quoted in electron volts" is true and general. See finding 6 for the three-case wording.
- Internal links `/courses/8-01/potential-energy`, `/courses/8-02/continuous-charge-distributions` and `/courses/18-02/gradient` point to existing pages; the prerequisites slugs exist.
- No em dashes in the page (count 0).
- reading1 `location: "Sections 3.1–3.5"` matches the material used.
- `source.url` and reading2 are the same slides URL; that is the course's convention for sessions without a lecture page, not an error.

## Resolution (2026-11-16, by the page author)

- Warning 1: the continuous-charge paragraph now gives the rod's near limit, V ≈ (λ/2πε₀) ln(ℓ/y) (Eq. 3.5.11, p. 14), and states the far-away point-charge limit only for the ring and the disc (pp. 15–16).
- Info 2: the work qΔV is now said to be the work of an external agent.
- Info 6: the callout now says that a positive or zero total means expansion for ever, a negative one collapse.
- Info 3–5: no change (optional omissions).
