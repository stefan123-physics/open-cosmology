---
page: content/year-1/8.02/inductance-and-lr-circuits.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w10d2/ (read: local copy presentati_w10d2.pdf, 37 slides; slide number = "P24- N" label = PDF page)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap11inductance/ (read: local copy chap11inductance.pdf; printed page = PDF page − 1, checked with pdftotext -f N -l N on PDF pages 5–7, 10–12 and 15–21)
  - content/year-1/8.02/_course.json and content/year-1/8.02/lc-and-rlc-circuits.mdx (read, for the leadsTo check)
  - calcs/8.02/inductance-and-lr-circuits.yaml (read; `npm run calc:test -- -k inductance-and`: 8 passed)
verdict: needs-changes
---

# Review: Self-inductance, LR circuits and magnetic energy

Citation convention checked: `cite="mit"` and `reading2` are both the Session 24 slides (same URL); `reading1` = Course Notes Chapter 11. Notes pages are the printed footer numbers.

Notes page map (printed pages): p. 4 = Example 11.1 (end), 11.2 starts; p. 5 = back emf, Eqs. (11.2.1)–(11.2.3), Example 11.2 statement; p. 6 = Eqs. (11.2.4)–(11.2.6), Example 11.3 (toroid) starts; p. 9 = 11.3 starts, Eqs. (11.3.1)–(11.3.5), U_B = ½LI² is Eq. (11.3.4) on this page; p. 10 = inductor vs resistor energy, Example 11.5, Eqs. (11.3.6)–(11.3.9); pp. 11–14 = Animations 11.1–11.2; p. 14 = 11.4, 11.4.1, Eq. (11.4.1); p. 15 = Eqs. (11.4.2)–(11.4.3); p. 16 = Eq. (11.4.4), modified loop rule; p. 17 = caveat continued, 11.4.2, Eqs. (11.4.5)–(11.4.7); p. 18 = Eqs. (11.4.8)–(11.4.10); p. 19 = energy remark, 11.4.3 starts, Eqs. (11.4.11)–(11.4.13); p. 20 = Fig. 11.4.7, 11.5 LC oscillations.

The seven formulas:
- "Self-inductance" (`reading1`, Eqs. (11.2.2)–(11.2.3), p. 5): ε_L = −L dI/dt and L = NΦ_B/I, both on p. 5. Correct (also slides 7, 8).
- "Inductance of a solenoid" (`reading1`, Eq. (11.2.6), p. 6): L = μ₀n²πR²ℓ, p. 6. Correct (also slide 9 / 33).
- "Loop rule for an LR circuit" (`reading1`, Eq. (11.4.5), p. 17): ε − IR − L dI/dt = 0, p. 17. Correct (same as Eq. (11.4.4), p. 16, and slide 14).
- "Rising current" (`reading1`, Eqs. (11.4.7)–(11.4.8), pp. 17–18): (11.4.7) on p. 17, τ = L/R (11.4.8) on p. 18. Correct (also slide 15).
- "Power balance" (`reading2`, slide 31): slide 31 has εI = I²R + LI dI/dt = I²R + d/dt(½LI²) with "battery supplies, resistor dissipates, inductor stores". Correct.
- "Energy stored in an inductor" (`reading1`, Eq. (11.3.4), p. 10): wrong page, see #1.
- "Magnetic energy density" (`reading1`, Eq. (11.3.8), p. 10): p. 10. Correct (also slide 34).

Signs and physics checked: back emf ε_L = −L dI/dt opposes the change (notes p. 5, slide 11: dI/dt > 0 gives ε_L < 0). Modified loop rule: traversing an inductor along the current gives a "potential change" of −L dI/dt, i.e. a drop of L dI/dt (notes p. 16): the page says exactly this. Rising current (ε/R)(1 − e^(−t/τ)) and decaying current (ε/R)e^(−t/τ) with the same τ = L/R match Eqs. (11.4.7) and (11.4.13). "All of ε appears across the inductor at first, then it is just a wire" matches Eq. (11.4.9) and slides 16–17. Energy U = ½LI², u_B = B²/2μ₀, u_E = ½ε₀E² match Eqs. (11.3.4), (11.3.8), (11.3.9). No em dash on the page (grep: 0). Internal links `/courses/8-02/transformers-and-magnetic-materials`, `/courses/8-02/rc-circuits`, `/courses/8-02/conductors-and-capacitors` and both prerequisites exist.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Energy stored in an inductor", `at="Eq. (11.3.4), p. 10"`, and the sentence before it "(Section 11.3, p. 10; slide 32)" | Section 11.3 starts on printed p. 9 (PDF p. 10); Eqs. (11.3.1)–(11.3.4) are all on p. 9. | p. 10 | `at="Eq. (11.3.4), p. 9"` and "(Section 11.3, p. 9; slide 32)". Same fix in calcs/8.02/inductance-and-lr-circuits.yaml, id `energy`, `source.at`. |
| 2 | error (minor) | "Decaying current" paragraph: "(Section 11.4.3, pp. 18–19)" | Section 11.4.3 starts on printed p. 19 (PDF p. 20); p. 18 is rising current and the power balance. Eq. (11.4.13) on p. 19. | pp. 18–19 | "(Section 11.4.3, Eq. (11.4.13), p. 19)". |
| 3 | warning | Kirchhoff section: the modified loop rule is presented without the notes' caveat | Notes p. 16–17: the rule "will give the correct equations", but "it is misleading at best, and at some level wrong in terms of the physics"; slide 24: the emf in an ideal inductor is not a voltage drop across it, since E = 0 inside a zero-resistance wire. | "Kirchhoff's loop rule can be rescued … count a 'potential drop' of L dI/dt", followed by the slide-25 quip | Add one sentence in own words: the rule gives the right equation, but the "drop" is book-keeping: inside an ideal inductor E = 0, and the term really comes from −dΦ_B/dt in Faraday's law (notes pp. 16–17; slide 24). |
| 4 | warning | "Break a circuit with a large inductor suddenly … which is how a car's ignition coil makes the spark (slides 26–29)" | Slides 26–29 are a demo title and three links to howstuffworks.com (engine, distributor, modern ignition) with part labels; they state no mechanism. | Attributes the mechanism to slides 26–29 | The physics is right in outline, but an ignition coil is a step-up transformer (interrupting the primary current, the large dI/dt induces a large emf in the many-turn secondary). Say e.g. "the slides use the car ignition system as the example (slides 26–29): an ignition coil interrupts the current in its primary, and the rapid change induces a large emf in a many-turn secondary (the page's own explanation)". |
| 5 | info | Order of sections | Slides: self-inductance (7–12) → LR circuit (14–19) → non-conservative fields and modified Kirchhoff rule (21–25) → demos/ignition (26–29) → energy (30–34) → coax (35) → back emf of a motor (36–37). Notes: 11.4.1 (modified rule) before 11.4.2 (rising current). | Kirchhoff section before the LR circuit | Follows the notes' order, which is fine; optionally say so, since the slide citations in that section jump back and forth (21–25, then 14–19). |
| 6 | info | "Unlike the resistor's heat, the inductor's energy comes back when the current falls (pp. 9–10)" | p. 9 (energy out when dI/dt < 0) and p. 10 (inductor vs resistor); also p. 19 | pp. 9–10 | Correct; optionally add p. 19. |
| 7 | info | "The slides' advice … be mindful of the physics, but don't think too hard doing it (slide 25)" | Slide 25: "Be mindful of physics / Don't think too hard doing it" | Near-quote, attributed | Short and attributed; fine. |
| 8 | info | "Multiply the loop equation by I" | Notes p. 18 say "multiply Eq. (11.4.7) by I", a slip in the notes (it should be Eq. (11.4.5), the loop equation) | Loop equation | The page is right; no bracketed note needed, but one could be added under writing rule 4. |

## Arithmetic and answer checks
- Worked example (a): L = (4π × 10⁻⁷)(2000)²π(0.01)²(0.2) = 5.0265 × 1.5708 × 10⁻⁴ × … = 3.158 × 10⁻⁴ H ≈ 3.16 × 10⁻⁴ H. Correct.
- (b): τ = 3.158 × 10⁻⁴ / 10 = 3.158 × 10⁻⁵ s ≈ 32 μs; ε/R = 12/10 = 1.2 A. Correct.
- (c): ½LI² = 0.5 × 3.158 × 10⁻⁴ × 1.44 = 2.274 × 10⁻⁴ J; B = μ₀nI = 1.2566 × 10⁻⁶ × 2000 × 1.2 = 3.016 × 10⁻³ T; u_B = (3.016 × 10⁻³)²/(2 × 1.2566 × 10⁻⁶) = 3.619 J/m³; V = π(0.01)²(0.2) = 6.283 × 10⁻⁵ m³; u_B V = 2.274 × 10⁻⁴ J. All correct, and the two routes agree as they must.
- The example's solenoid has N = nℓ = 400 turns and ℓ/R = 20, so the long-solenoid formula is a fair approximation (not stated; optional).
- `npm run calc:test -- -k inductance-and`: 8 passed; every number on the page is in the calcs file. The calcs `source.at` of id `energy` repeats the p. 10 error (#1).
- Plot: curves 1 − e^(−u) and e^(−u) for u = t/τ in [0, 5], y range [0, 1.05], match Eqs. (11.4.7) and (11.4.13) divided by ε/R; caption says it is computed from those formulas. Correct.
- Quiz 1: answer 1 (steady current, dI/dt = 0, no back emf): correct; the explanation's "still stores ½LI²" is correct. Quiz 2: answer 1 (L/R): correct. Quiz 3: answer 1 (factor 4, U ∝ I²): correct.
- Flashcards: all three correct (1 H = 1 V s/A matches slide 8).
- Worked example is original: the notes' Examples 11.2 and 11.5 and slide 33 are symbolic; the page's numbers and the two-route energy check are its own.

## Coverage and order
- Covered: self-inductance and back emf, the four-step recipe, solenoid inductance, inductor behaviour (slides 10–12), non-conservative E and the modified loop rule, rising and decaying LR current, LR/RC general comment (slide 18), breaking circuits with inductors, power balance, ½LI², energy in the solenoid's field, u_B and u_E.
- Omitted from the slides: slide 35 group problem, energy and inductance per unit length of a coaxial cable (U/ℓ = (μ₀I²/4π) ln(b/a), L/ℓ = (μ₀/2π) ln(b/a)), which is the session's main application of u_B to a non-uniform field (warning: worth a short paragraph, since the notes p. 10 stress that u_B holds for non-uniform fields too); slides 36–37 "Back to back EMF" / stopping a motor PRS (content of the PRS question not in the text extraction); slide 17 voltmeter readings and slide 19 group problem (current direction just after turning off the battery) only implicitly; PRS questions (slides 13, 20); recap slides 2–5 (covered on the previous page).
- Omitted from the notes: Example 11.3 (toroid inductance, pp. 6–7), Eqs. (11.3.1)–(11.3.3) (work against the back emf; the page derives ½LI² from the power balance instead, which is equivalent), Animations 11.1–11.2 (pp. 11–14), Eq. (11.4.9) (the inductor's emf decaying as εe^(−t/τ), stated in words only), the comparison with and without an inductor (Fig. 11.4.5). Section 11.5 (LC) belongs to the next session.
- Order: see #5; follows the notes.
- leadsTo: 8.02 Lecture 25 is "Experiment 10: Measuring L; LC and LRC Circuits" in `_course.json`, and `lc-and-rlc-circuits.mdx` (lecture 25) exists. The "why" (energy swinging between the capacitor's E field and the inductor's B field) matches notes 11.5 (p. 20). Correct. No cosmology callout; acceptable, as there is no direct 8.286 use.

## Licensing
- grep for "rights reserved" and "courtesy" in both text files: no match. Both sources fall under the course's CC BY-NC-SA licence.
- howstuffworks.com (slides 27–29: engine figure, distributor, modern ignition): the page uses no figure, text or link from there; it mentions the ignition coil in words only (see #4 for the attribution). The linked pages were not opened.
- The page has no images; the only graphic is a Plot generated from formulas. Slide images were not inspected visually (text extraction only), but nothing is reused.
- No OpenStax or LibreTexts material. No sentence copied verbatim from the notes; the slide-25 phrase is a short attributed quote (#7); "Inductors hate change, like steady state" is reworded ("dislike change and like steady states"), close but short.

## Notes
- Fix #1 (page and calcs) and #2, then consider #3 and #4 and the coax omission before setting `status: reviewed`.

## Resolution (2026-11-16, by the page author)

- Error 1: ½LI² now cites Eq. (11.3.4), p. 9, in the page and in the calcs file.
- Error 2: the decaying current now cites Section 11.4.3, p. 19.
- Warnings: added the notes' caveat that the inductor "drop" is bookkeeping, not a true voltage drop (pp. 16–17; slide 24); the ignition-coil explanation is now marked as the page's own and mentions the step-up transformer; the coaxial-cable group problem (slide 35) is noted as left for the problem pages.
