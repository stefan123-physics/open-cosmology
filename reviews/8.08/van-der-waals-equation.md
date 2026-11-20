---
page: content/year-4/8.08/van-der-waals-equation.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/vanderwaals_mod/ (read: resource page; CC BY-NC-SA footer, no "courtesy" or "rights reserved" notice for this file)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/eafe8b81bbafeedbccbaa48417d8dca7_vanderwaals_mod.pdf (read as page images: pp. 13 and 14 at 160 dpi, pp. 15-20 at 90 dpi; handwritten, no text layer)
verdict: pass-with-notes
---

# Review: The interacting classical gas and the van der Waals equation

Scope: notes pp. 13-14 (points 1 and 2), plus the interaction-potential sketch on p. 18. Every formula, attribution, number, quiz answer and flashcard was checked against the page images. No errors found; three warnings and some info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The mean-field approximation", last paragraph, and "The virial expansion", hard-ball paragraph | p. 13 box: "b ~ N (4π/3) r₀³ = N v₀ for hard balls"; p. 14: "For hard ball C₂ = N (4π/3) r₀³". r₀ is not defined. | First calls r₀ the **radius** of the balls ("hard balls of radius about r₀"). Later, for the exact value N(2π/3)r₀³, r₀ is the **distance between centres** at contact (the diameter). The two meanings differ by a factor 2 in r₀, so 8 in volume. With r₀ as the radius the exact value is N(16π/3)r₀³, four times Wen's; with r₀ as the diameter it is half of Wen's. "Order of magnitude" holds either way, but the page changes its definition without saying so. | Use one definition. Simplest: drop "radius" in the first place and define r₀ there as the closest distance between centres (as the worked example and the 0.44 λ estimate do). Optionally say that Wen's N(4π/3)r₀³ is twice the exact value with that convention. |
| 2 | warning | Bracketed note after the worked example | (not in notes) | "the model's own exact C₂ would differ somewhat" at 150 K | For this square well the exact second virial coefficient is b[1 − 2.375(e^(ε/k_BT) − 1)]. At 150 K that is −94.7 cm³/mol, against the mean-field −44.6 cm³/mol: more than a factor 2. At 600 K it is 23.5 against 26.0. The exact Boyle temperature is 120 K / ln(1 + 1/2.375) ≈ 341 K, not 285 K. "Somewhat" understates this. | Say that at 150 K the exact value is about twice as negative, and that the mean field is only good for ε ≪ k_BT. Or move the example to a higher temperature. If you quote the exact numbers, add calcs entries. |
| 3 | warning | "The mean-field approximation": "So v̄ here is the integral over the attractive part outside the core, and the hard core enters only through b." | p. 13 defines v̄ = ∫d³q v(q) with no restriction. The split into "hard core → b, rest → v̄" is implied by the box but never stated. | Says this is what v̄ is, as if it came from the notes. | Mark it as our reading, e.g. "(We read v̄ as the integral over the attractive part only; the notes do not say so, but this is the usual reading, and otherwise v̄ would be infinite for hard balls.)" |
| 4 | info | "The free energy": "With Stirling's approximation ln N! ≈ N ln N − N (notes p. 13)" | p. 13 goes straight from A = −k_BT ln Q to the result. Stirling is not named. | Credits the Stirling step to the notes. | Move the citation so that it covers only the result, or say that the notes use Stirling without writing it down. |
| 5 | info | Hard balls / Fermi gas paragraph | p. 14 gives the Fermi gas first, then the hard balls, with the margin note "Fermion ~ hard ball w/ r₀ ~ λ". | Gives the hard balls first. | Harmless reordering. Optional: mention it, or keep the notes' order. |
| 6 | info | Mean-field formula, slip note | p. 13: "= ½ N ∫d³q v(q) = ½ N v̄ n" | The intermediate line drops a factor n but ends with the right result. | Verified: the middle expression ½N∫d³q v(q) is missing a factor n, and the final ½N v̄ n is right. The note is accurate and fair. No change. |
| 7 | info | Virial expansion slip note | p. 14 boxed: "PV/RT = 1 + C₂(T)/V + C₃(T)/V³ …" with C₃ = b² | The notes write C₃/V³ for C₃/V². | Verified: the boxed line reads V³, and C₃ = b² is only consistent with 1/V². The note is accurate. No change. |

## Formula-by-formula check
- "Partition function of an interacting gas" (p. 13, point 1): matches, Q = (1/N!)∫∏d³k_i d³q_i/(2π)^{3N} e^{−β[Σε_k + V(q_i)]}. The renaming V(q_i) → U is stated. The equivalence with d³p/h³ is on p. 13 under the brace. Correct.
- "Pair interactions" (p. 13, point 1): matches, V(q_i) = ½Σ_{i,j} v(q_i − q_j). The page writes i ≠ j, which is implied. Correct.
- "Mean-field interaction energy" (p. 13, point 1): matches, including "average potential: v̄ = ∫d³q v(q)". Correct.
- "Mean-field partition function" (p. 13, point 1): matches both lines, (1/N!)[∫d³k/(2π)³ e^{−βε}]^N e^{−βNnv̄/2}(V − b)^N = (1/N!)((V − b)/λ³)^N e^{−βNnv̄/2}. The Gaussian integral = 1/λ³ is checked in calcs. Correct.
- "Free energy in the mean-field approximation" (p. 13, point 1): matches the first two lines of the A computation. The notes' third form, with V − Nv₀, is left out (fine). Correct.
- "Pressure" (p. 14, point 2): matches. Correct.
- "The van der Waals equation of state" with a = −½N²v̄ (p. 14, point 2): matches the boxed equation, with R = Nk_B as the page notes. Correct.
- "Free energy of the van der Waals model" (p. 14, point 2): matches the boxed A with the margin label "Free energy for van der Waals model". Correct.
- "Virial expansion" (p. 14, point 2): C₂ = b − a/RT and C₃ = b² match. The written power is corrected and the change is flagged. Correct.
- "Second virial coefficient of an ideal Fermi gas" (p. 14, point 2): matches, C₂ = Nλ³/2^{5/2}. Physics checked: for one spin state PV/Nk_BT = 1 + nλ³/2^{5/2} + …, so C₂ = Nλ³/2^{5/2}. Correct.

All page and point citations are right. p. 13 is point 1 and p. 14 is point 2. The p. 18 sketch is of "V(q) interaction potential" with "hard core → b > 0" and "attraction → a > 0", as the page says.

## Arithmetic and answer checks
- `npm run calc:test -- -k van-der-waals-equation`: 25 passed.
- Independent recomputation (Python, CODATA 2019 constants):
  - b = N_A(2π/3)(0.34 nm)³ = 4.957 × 10⁻⁵ m³ = 49.6 cm³. Correct.
  - a = ½N_A² ε (4π/3)(2.375) r₀³ with ε = k_B × 120 K gives 0.1175 Pa m⁶ mol⁻². Correct.
  - T_B = 2.375 × 120 = 285 K. Correct. The cancellation of r₀³ and N_A was checked.
  - C₂(600 K) = 26.03 cm³ and C₂(150 K) = −44.62 cm³. Correct.
  - V_ideal(150 K, 1 atm) = 0.01231 m³ and C₂/V = −0.00362, i.e. −0.36%. Correct.
  - ε/k_BT = 0.8 and T_c = (8/27)(285) = 84.4 K. Correct.
- The square-well v̄ and a agree with the high-temperature limit of the exact square-well B₂, (2π/3)σ³[1 − (1.5³ − 1)(e^{βε} − 1)], to first order in βε. So the example is set up consistently. See finding 2 for how far apart the two are at 150 K.
- Fermi effective core: (3/(2π·2^{5/2}))^{1/3} = 0.4387, so 0.44 λ. Correct, with r₀ as the contact distance.
- Lennard-Jones: the minimum is at 2^{1/6}σ = 1.1225σ with depth −ε. Correct.
- Virial plot: PV/Nk_BT = 1/(1 − x) − x/τ with x = b/V and τ = T/T_B follows from a/(Nk_BT) = b T_B/T. The first-order line 1 + (1 − 1/τ)x is correct. Curves stay inside the range [0.6, 1.5] for τ in [0.5, 4] and x ≤ 0.3: the lowest value is about 0.70 (the dashed line at τ = 0.5) and the highest about 1.35.
- Quiz 1 (answer index 1, ½Nnv̄): correct, and the explanation is right.
- Quiz 2 (answer index 1): correct. The other choices are wrong as intended. The phrase "hard balls have b > 0 and a = 0" is right.
- Quiz 3: C₂ = b(1 − 400/800) = 0.5 b (answer index 2). Correct.
- Quiz 4 (answer index 1, Pauli as an effective hard core): correct. The explanation's C₂ is right.
- Flashcards: all five checked and correct. "A purely repulsive gas would have a < 0" is consistent with a = −½N²v̄ and v̄ > 0, and matches p. 18's "a < 0 repulsion".

## Coverage and order
- p. 13 (point 1): partition function, mean-field replacement, v̄, Q, excluded-volume box and A are all covered, in order.
- p. 14 (point 2): P, the intermediate (V − b)(P − N²v̄/2V²) form (described in words), the boxed vdW equation with a and R, the boxed A, the virial expansion with C₂ and C₃, "ignore a → C₂ = excluded volume", Fermi gas C₂, hard-ball C₂ and the margin note are all covered. The only change is that the hard-ball/Fermi order is swapped (finding 5).
- Left out: the notes' V − Nv₀ form of A and the notation v₀. Both are harmless.
- The split with page 2 (pp. 15-20, points 3-7) is clean. Page 2 refers back to this page's potential plot for the p. 18 sketch, so the p. 18 borrowing is coordinated.
- The page's own additions:
  - Boyle temperature: correct, and marked as an addition.
  - Bose-gas sign −Nλ³/2^{5/2} and the 1/g spin factor: both correct, and marked as additions.
  - Exact hard-sphere B₂ = N(2π/3)r₀³: correct for r₀ = contact distance. It is in brackets and set apart from the notes, but see finding 1 for the r₀ convention.
  - Lennard-Jones plot: correct, and labelled "The page's own illustration".
  - Physical explanations (wall-pressure picture, Pauli avoidance within λ): standard, not attributed to Wen.
  - The remark that Q and A follow Huang's notation is not in the notes. It is correct (Huang uses Q_N and A = −kT ln Q_N), and the 8.044 notation Z and F was checked on canonical-examples.mdx.

## Licensing
- PDF pp. 13-20 carry no "courtesy" or "rights reserved" notice. The OCW resource page shows only the course-wide CC BY-NC-SA licence. No figures from Huang were seen in pp. 13-20; all sketches are Wen's hand drawings.
- The page reproduces none of Wen's figures. The Lennard-Jones curve is generated from a formula and is a different, smooth model, not a redraw of the p. 18 sketch.
- The paraphrase is in the page's own words, with no copied sentences. The notes are terse jottings, and the page expands them. The worked example (square-well gas, r₀ = 0.34 nm, ε/k_B = 120 K) is original; the notes contain no numbers.
- No OpenStax or LibreTexts material.

## Forward links
- leadsTo 8.08 lecture 8 = Chapter VIII "The Fermi Gas" in `_course.json`. Correct.
- leadsTo 8.286 lecture 17: `neutrinos-and-particle-counting.mdx` is lecture 17 and discusses the 7/8 factor. Correct.
- The cosmology callout holds up:
  - The early-universe plasma is treated as ideal. Correct.
  - For a relativistic thermal gas, nλ³ is of order 1, so quantum-statistical effects are not small. Correct.
  - The 7/8 fermion/boson ratio in the energy density is a consequence of quantum statistics. Correct.
  - Calling it "what remains of the statistical interaction" is a loose but fair analogy, and it is not attributed to Guth or Wen.

## Notes
- Pages 15-20 were read at 90 dpi only to judge the split and check for notices. pp. 13, 14 and 18 were read closely.
- No em dashes on the page.
- The calcs file is complete for every number on the page. If finding 2 is fixed by quoting the exact square-well values (−94.7 cm³ at 150 K, 23.5 cm³ at 600 K, T_B ≈ 341 K), add entries for them.

## Resolution (2026-11-19, by the page author)

- Warning 1 (r₀ used two ways): fixed. The mean-field section now defines r₀ as the closest distance between the centres of two atoms (the hard-core size), as the virial section, the worked example and the 0.44 λ estimate already used it. The symbol meaning of r₀ says the same.
- Warning 2 ("would differ somewhat" understates the gap): fixed. The note after the worked example now gives the exact square-well values: C₂ ≈ −95 cm³ per mole at 150 K (more than twice the mean-field −44.6), an exact Boyle temperature of about 341 K, and 23.5 against 26.0 cm³ per mole at 600 K. It says the mean field gives sizes and signs, not precise values. Three new calcs entries (ex-exact-c2-150, ex-exact-boyle, ex-exact-c2-600) recompute these numbers.
- Warning 3 (the restriction of v̄ shown as the notes' own): fixed. The text now says the notes define v̄ = ∫d³q v(q) without saying where to integrate, and that reading it as the integral over the attractive part outside the core is ours.
- Info (Stirling's approximation not named in the notes): fixed. The text now says the notes take this step without naming it.
- Info (hard balls before the Fermi gas, the reverse of p. 14): left as it is. The page explains the Fermi gas by comparing it with hard balls, so the hard-ball value has to come first. Both still sit in the p. 14 virial section.
- Info (the slip notes are accurate): no change needed.

Status set to `reviewed`. `npm run content:check` reports 0 errors and no warnings for the page, and `npm run calc:test` passes.
