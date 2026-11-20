---
page: content/year-1/8.02/transformers-and-magnetic-materials.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w09d2/ (read: local copy presentati_w09d2.pdf, 36 slides "P21- 1" to "P21- 36", slide number = PDF page; each page extracted with pdftotext -f N -l N; slides 9, 12, 24, 26, 29, 33–36 also rendered as images to check the equations, since the text layer drops Greek letters and minus signs)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/cha10faraday_law/ (read: local copy cha10faraday_law.pdf; printed page = PDF page − 1, checked on printed pp. 12, 13, 14; Section 10.5 "Eddy Currents" is printed p. 13, its applications paragraph is the top of p. 14)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap11inductance/ (read: local copy chap11inductance.pdf; printed page = PDF page − 1, checked on printed pp. 1–4; Section 11.1 starts p. 2, Eqs. 11.1.4–11.1.8 on p. 3, Example 11.1 on p. 4)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read: local copy ch9sourc_b_field.pdf; printed page = PDF page − 1, checked on printed pp. 27–33; Section 9.6 starts p. 27)
  - content/year-1/8.02/_course.json (read: Session 21 = "Experiment 9: Faraday's Law; Transformers; Magnetic Materials", Session 24 = "Inductance and LR Circuits; Energy in Inductors")
  - content/year-1/8.02/inductance-and-lr-circuits.mdx (read frontmatter: lecture 24, the leadsTo target; currently untracked in git)
  - calcs/8.02/transformers-and-magnetic-materials.yaml (read; `npm run calc:test -- -k transformers`: 9 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Eddy currents, transformers and magnetic materials

Citation convention checked: notes pages are printed page numbers (PDF page − 1) for all three chapters; slide numbers are the "P21- N" labels (= PDF page). `reading1` = Chapter 10, `reading2` = Chapter 11, `reading3` = Chapter 9, `reading4` = Session 21 slides. The three formulas:
- "Mutual inductance" (`reading2`, "Eqs. (11.1.2)–(11.1.3), p. 2"): Eq. (11.1.2) N₂ dΦ₂₁/dt = M₂₁ dI₁/dt and Eq. (11.1.3) M₂₁ = N₂Φ₂₁/I₁ are on printed p. 2. The emf form ε₂₁ = −M₂₁ dI₁/dt is not written in the notes; it follows from (11.1.1) with (11.1.2). Slide 24 writes it explicitly, but with the opposite labels (ε₁₂ = −M₁₂ dI₂/dt). See finding 1.
- "Transformer" (`reading4`, slide 26): slide 26 has ε_p = N_p dΦ_B/dt, ε_s = N_s dΦ_B/dt (no minus signs) and the boxed ratio ε_s/ε_p = N_s/N_p. The page adds the minus signs. See finding 2.
- "Field of a magnetized material" (`reading3`, "Eq. (9.6.7), p. 30"): B⃗ = B⃗₀ + B⃗_M = B⃗₀ + μ₀M⃗ is Eq. (9.6.7) on printed p. 30 (Section 9.6.2). Correct; also slide 35.

Other in-text citations checked and correct: Section 10.5 Joule heating P = ε²/R and lamination/cuts (p. 13); henry, Eq. (11.1.4) (p. 3); "depends only on the geometrical properties" (p. 3); M₁₂ = M₂₁, Eq. (11.1.8) (p. 3); Example 11.1, M = μ₀πR₂²/2R₁, Eq. (11.1.11) (p. 4); Section 9.6 intro on dia/para/ferro vs dielectrics (p. 27); 9.6.1 magnetization and the equivalent surface current (pp. 27–29); "field is in the same direction as the magnetic dipole vector" (p. 29); 9.6.2 paramagnetism (p. 30); 9.6.3 diamagnetism (p. 31); 9.6.4 ferromagnetism, domains, 10³ or 10⁴, hysteresis (pp. 31–32); Eq. (9.6.12) (p. 32); slides 6–9 (ring over a dipole, flux rises then falls, CCW then CW, "ALWAYS opposes"), 11–12 (Experiment 9 current and flux traces), 16–20 (eddy-current braking, slide 20 "EMF proportional to v", power ε²/R), 21 (superconductor levitation), 24, 25 (remote speaker), 26, 27 (nail, Jacob's ladder), 28–29 (transmission), 32–36 (para/ferro, magnetization, hysteresis).

No "rights reserved" or "courtesy" notice in any of the four texts (grep: no match). No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | `<Formula label="Mutual inductance">`, `at="Eqs. (11.1.2)–(11.1.3), p. 2"` | Notes p. 2: Eq. (11.1.1) ε₂₁ = −N₂ dΦ₂₁/dt and Eq. (11.1.2) N₂ dΦ₂₁/dt = M₂₁ dI₁/dt; the combined ε₂₁ = −M₂₁ dI₁/dt is never written in the notes. Slide 24 boxes ε₁₂ = −M₁₂ dI₂/dt (labels swapped: current in coil 2, emf in coil 1). | ε₂₁ = −M₂₁ dI₁/dt cited to (11.1.2)–(11.1.3) | `at="Eqs. (11.1.1)–(11.1.3), p. 2"` (and optionally say in the text that slide 24 writes the same law with the coils' labels swapped). |
| 2 | warning | `<Formula label="Transformer">`, `cite="reading4" at="slide 26"` | Slide 26: ε_p = N_p dΦ_B/dt and ε_s = N_s dΦ_B/dt, without minus signs (only magnitudes matter for the ratio). | Both with a minus sign | The physics on the page is the more correct form, but it differs from the cited slide without saying so. Add a short bracket ("the slide writes magnitudes, without the minus signs") or cite the minus signs to Faraday's law (slide 3). |
| 3 | warning | "Eddy-current brakes": "their energy is lost as Joule heat, ε²/R" | Notes p. 13: "Joule heating causes a loss of power by an amount P = ε²/R"; slide 20: power ε²/R. | ε²/R called the energy | "...and their energy is turned into Joule heat at the rate P = ε²/R". |
| 4 | warning | "Eddy-current brakes": "A magnet over a superconductor floats, held up by currents that meet no resistance (slide 21)." | Slide 21 only shows the demonstration (title and a link to a visualization); neither the slides nor Chapter 10 explain it. | An explanation in terms of resistanceless induced currents | The perfect-conductor picture is acceptable at 8.02 level, but it is the page's own explanation and incomplete: a superconductor also expels magnetic field (Meissner effect), and stable levitation over the usual high-temperature superconductor relies on flux pinning. Either mark it as a simplified picture or add a clause such as "(a superconductor also pushes the field out of itself, the Meissner effect)". |
| 5 | info | "Into heat in the ring (slide 15)" | Slide 15 only asks "What happened to kinetic energy of magnet?"; the answer (Joule heating) is on slides 19–20 and notes p. 13. | Answer cited to slide 15 | "(slide 15 asks; slides 19–20 answer)" or move the citation. |
| 6 | info | "Where the losses are unwanted, as in transformer cores, the metal is cut or laminated ... (Section 10.5, p. 13)" | Notes p. 13 give lamination and cuts in general, without naming transformers; the "Laminated iron core" is labelled in the slide 26 figure. | Transformer cores attributed to Section 10.5 | Add "slide 26" to the citation. |
| 7 | info | "Eddy-current brakes": "This is how eddy-current brakes work." | Notes p. 14 (top): applications are suppressing unwanted mechanical oscillations and magnetic braking in high-speed transit cars. | No citation, no applications named | Optional: add both applications with "(p. 14)". |
| 8 | info | "Mutual inductance": "M depends only on the coils' shapes and positions" | Notes p. 3: "depends only on the geometrical properties of the two coils such as the number of turns and the radii". | Number of turns not mentioned | Optional: "on the coils' shapes, numbers of turns and positions". |
| 9 | info | "A ring passing a magnet": "first it repels the magnet, then it pulls back on it (slide 9)" | Slide 9 shows the CCW/CW currents and "It ALWAYS opposes the changing flux"; the repel-then-attract wording is not on the slide (it is correct physics). | Repel/attract cited to slide 9 | Fine as an inference; optionally "(slide 9: it always opposes the change)". |
| 10 | info | Opening paragraph: "three consequences: magnetic brakes, transformers, and magnetic materials (slides 1–4)" | Slide 1's outline lists Hour 2 as "Faraday's Law, Transformers, Magnetic Materials"; "Brakes" first appears on slide 14. Slides 2–4 recap Faraday's law (ε = −N dΦ_B/dt; B, A or θ can change). | Brakes listed as an outline item | Optional: drop "(slides 1–4)" for the brakes or cite slide 14. |

## Arithmetic and answer checks
- Slide 29 example quoted on the page: I = 1.2 × 10⁵ W / 240 V = 500 A; P_L = 500² × 0.40 = 1.0 × 10⁵ W = 100 kW; 100/120 = 83%. At 24,000 V: I = 5.0 A, P_L = 25 × 0.40 = 10 W. All correct (calcs `slide-current-low`, `slide-loss-low`, `slide-loss-high`; the 83% itself is not in the calcs file).
- Magnetization estimate: (10⁻²³ A m²)(10²⁹ m⁻³) = 10⁶ A/m; μ₀M = 1.257 × 10⁻⁶ × 10⁶ ≈ 1.26 T, "of order 1 T". Correct, matches notes p. 32 (calc `magnetization-estimate`).
- Worked example (a): N_s = 500 × 6/120 = 25. Correct (calc `turns`).
- Worked example (b): 5 × 10⁴ W / 1000 V = 50 A, 50² × 1 Ω = 2500 W = 5% of 50 kW; 5 × 10⁴ / 10⁴ = 5 A, 25 W = 0.05%. Ten times the voltage, a hundredth of the loss. Correct (calcs `loss-1kv`, `loss-10kv`; the 2500 W and 0.05% are not separate entries).
- Worked example (c): μ₀πR₂²/2R₁ = (4π × 10⁻⁷)(π)(10⁻⁴)/0.4 = 3.948 × 10⁻¹⁰ / 0.4 = 9.87 × 10⁻¹⁰ H. Correct (calc `mutual`). The approximation needs R₁ ≫ R₂; 20 cm vs 1 cm satisfies it, and "a loop" (single turn) matches Example 11.1.
- Quiz 1: N_s/N_p = 2000/100 = 20, 20 × 120 V = 2400 V; answer index 2 = "2400 V". Correct.
- Quiz 2: answer index 1 (smaller current, loss ∝ I²). Correct; the explanation's factor 100 in V → 100 in I → 10⁴ in loss is right.
- Quiz 3: answer index 0 ("a little larger than B₀"). Correct per notes p. 30 (χ_m ~ 10⁻⁶ to 10⁻³); distractors are clearly wrong.
- Flashcards: mutual inductance (M = N₂Φ₂₁/I₁, henries, M₁₂ = M₂₁, geometry only) correct; transformer ratio correct; magnetization card correct (para small increase, ferro large and retained, dia small decrease).

## Coverage and order
- The page follows the slide order: Faraday recap (2–4) → ring over a dipole (6–9) → Experiment 9 (11–12) → brakes and eddy currents (14–20) → superconductor levitation (21) → mutual inductance (23–25) → transformers (26–27) → transmission (28–29) → magnetic materials (30–36). Good.
- Left out from the slides: slide 5 (the magnet slows as it approaches a copper ring cooled in liquid nitrogen; the cooling lowers the resistance and strengthens the braking, a nice link to the eddy-current section); slide 31 (recall of polar dielectrics; the page covers the comparison through the notes instead); slide 33 (B = κ_m B₀ compared with E = E₀/κ_e). PRS slides 10, 13 and 22 are question prompts with no content in the PDF; fine to leave out.
- Left out from the notes, Section 9.6.2–9.6.3 (warning, given the rule that foundation pages cover the lecture fully): the magnetic susceptibility χ_m (Eq. 9.6.8), relative permeability κ_m = 1 + χ_m with B = κ_m B₀ (Eqs. 9.6.9–9.6.10), permeability μ_m = κ_m μ₀ (Eq. 9.6.11), and the typical sizes (paramagnets χ_m ~ 10⁻⁶ to 10⁻³, diamagnets −10⁻⁵ to −10⁻⁹; ferromagnets: μ_m not a constant). These appear on slide 33 and in the Chapter 9 summary table. Suggest one short paragraph with a cited formula.
- Also not mentioned: the hysteresis loop as a curve of M against B₀ (Figure 9.6.4, slide 36; the page states the idea in words, which is enough) and the notes' remark that permanent magnets reach fields of order 2200 gauss (p. 32), optional.
- Nothing added that MIT does not cover, apart from the superconductor explanation (finding 4) and the minus signs (finding 2).
- leadsTo to 8.02 Session 24: correct; `inductance-and-lr-circuits.mdx` is lecture 24 (self-inductance, LR circuits, magnetic energy), matching the `why`. That file is currently untracked, so commit it with or before this page. There is no cosmology callout; none is required where no real connection exists (rule 6).
- Prerequisites `faradays-law`, `ampere-law` and the inline link `capacitors-and-dielectrics` exist.

## Licensing
- No "rights reserved" or "courtesy" notices in the slides or the three notes chapters.
- The page has no images or embedded media; no slide figure is reused (the coil drawing on slide 24, the laminated-core transformer on slide 26 and the hysteresis figure are not reproduced).
- The demoroom.physics.ncsu.edu links on slides 16–17 (and the OCW visualization links on slides 5 and 21) are not linked or used on the page (grep for "ncsu", "demoroom", "ans7870": no match).
- No verbatim copying found; the text is rewritten. Short standard phrases ("depends on the history", "laminated") are fine.
- Info (uncertain): the slide 29 transmission example (120 kW, 0.40 Ω, 240 V and 24,000 V) appears to be adapted from a standard textbook example (it looks like Giancoli's *Physics*); the slide gives no credit. The page only restates the numbers and results, attributed to the slides, which is low risk. If the owner prefers zero exposure, drop the numbers and keep only the page's own worked example (b).
- The worked example is original: its numbers (120 V → 6 V, 500 turns; 50 kW over 1 Ω at 1 kV and 10 kV; loops of 1 cm and 20 cm) do not come from MIT; part (c) applies the Example 11.1 formula to new numbers.

## Notes
- calcs file: 9 entries, all passing. Optional additions: the 83% on slide 29, the 2500 W and 0.05% of worked example (b), and the 10⁴ in quiz 2's explanation.
- Index conventions: the page follows the notes (M₂₁, current in coil 1, flux in coil 2), while slide 24 uses M₁₂ (current in coil 2, flux in coil 1). Both are consistent; no change needed beyond finding 1.
- The statement "a dielectric always weakens E" matches the notes' wording (p. 27, "for a given amount of free electric charge").

## Resolution (2026-11-16, by the page author)

- Warning 1: the mutual-inductance formula now cites Eqs. (11.1.1)–(11.1.3), p. 2.
- Warning 2: the page now says slide 26 gives the transformer emfs without the minus signs.
- Warning 3: ε²/R is now described as the rate of Joule heating.
- Warning 4: the superconductor explanation is marked as the page's own simplification, noting flux expulsion and pinning.
- Coverage: added the magnetic susceptibility χ_m, B = (1 + χ_m)B₀ = κ_m B₀ and the diamagnetic range of χ_m (Eqs. 9.6.8–9.6.11; slide 33).
- Info: the energy question (slide 15) and its answer (slides 19–20) are cited separately; M now depends on the numbers of turns too. Other info items: no change.
