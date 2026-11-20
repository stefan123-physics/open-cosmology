---
page: content/year-4/8.09/symmetry-conservation-laws.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/04c9b750af0e52b90121e2fe00edf434_MIT8_09F14_Chapter_1.pdf (read: local copy, pdftotext of pp. 12-16 plus rendered page images of printed pp. 12-16, which equal PDF pages 12-16)
  - 8.09 notes Chapter 2, Section 2.3, and Chapter 4, Section 4.3 (read: local text copies, for the leadsTo claims)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_1/ (not fetched; it is the landing page of the same PDF)
verdict: pass-with-notes
---

# Review: Symmetry and conservation laws: cyclic coordinates, scaling, and when H is the energy

I checked every `<Formula>` against the rendered page images of the notes, because the text extraction garbles the equations. Every equation number and printed page is correct. I found no errors. The findings below are warnings and info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Rotations, text after eq. (1.51) | p. 13: "Simplifying further using the results in Fig. 2.2", but the figure that shows ∂r_i/∂φ = n̂ × r_i is Fig. 1.5 on the same page (checked on the page image; Fig. 2.2 is in the rigid-body chapter). | The page notes this in brackets and uses Fig. 1.5. | None. The slip is correctly flagged and not repeated. |
| 2 | info | Formula "Lagrangian in the cart's coordinate" (1.58) | p. 15, eq. (1.58): the middle term is printed `m v_0 x'`, with no dot (checked on the page image). | `m v_0 \dot x'`, with the slip flagged in brackets. | None. The correction is right: expanding ½m(ẋ′ + v₀)² gives m v₀ ẋ′. The notes' own p′ = mẋ′ + mv₀ and eq. (1.59) only work with the dot, and calcs `cart-lagrangian` verifies the expansion. |
| 3 | info | Formulas (1.53), (1.54) | The notes write the internal force as **F**_{ji} = −∇_i V_ij. In (1.50) they use the arrow notation **F**_{i→j}. | `\vec F_{j\to i}`, called "the force particle j exerts on particle i". | None needed. This reading matches −∇_i V_ij (the force on i) and makes the two notations consistent. Optionally say that the notes write F_ji. |
| 4 | info | Rotations, Newtonian conditions | p. 13: "**L** about the CM is conserved for systems with no external torque…" | Leaves out "about the CM". | Optional. The derivation (1.53)-(1.54) holds about any fixed origin, so leaving it out is not wrong. |
| 5 | info | Formula "Kinetic energy split" (1.49) | Eq. (1.49) shows the expanded middle expression, with the ½(Σm_i)Ṙ² term and the cross term Ṙ·d/dt(Σ m_i r_i′). | Shows only the first and last expressions. The cross term is given in the text and explained. | None. The content is the same and the citation is correct. |
| 6 | info | Scaling, case b | "k = −1 for the Coulomb potential" | "Coulomb or Newtonian gravity" | None. Adding gravity is correct, and Kepler's law is about gravity. |
| 7 | info | Cart example, set-up | x′ is "its displacement from the center of the moving cart" (Fig. 1.6). | Adds "with the spring relaxed when x = v₀t". | None. This follows from the notes' potential k(x − v₀t)²/2 and replaces the figure, which the page correctly does not redraw. |
| 8 | info | Formula (1.57), "by the result of the previous page" | Refers to Eq. (1.31). | Refers to the previous page, whose eq. (1.31) is stated for V = V(q). Here V depends on t explicitly. | Optional: the page's own wording, "V has no velocity in it", is the condition that matters. To be fully precise, say "T quadratic in ẋ and V independent of ẋ (as in eq. 1.31)". |

Formula citations checked one by one against the page images:
- Cyclic-coordinate proof: p. 12, unnumbered, inline in the notes. Correct.
- Centre of mass: p. 12, unnumbered. Correct.
- (1.48) p. 12; (1.49) p. 12; (1.50) p. 13; (1.51) p. 13; (1.52) p. 13; (1.53) p. 13; (1.54) p. 14. All correct numbers and pages, and the expressions match.
- Scaling of time and velocity: p. 14, unnumbered. Correct.
- Charge Lagrangian: p. 14, unnumbered, inline. Correct.
- (1.55) p. 14; (1.56) p. 15; (1.57) p. 15; (1.58) p. 15 (slip corrected); (1.59) p. 15. All correct.

## Arithmetic and answer checks
- Worked example (bead on a spinning wire), recomputed in Python:
  - cosh 2 = 3.7622 and sinh 2 = 3.6269.
  - r = 0.376 m and ṙ = 0.7254 m/s.
  - ṙ² = 0.5262 and ω²r² = 0.5662.
  - T₀ = 0.025 × 4.0 × 0.010 = 0.0010 J, and T(1 s) = 0.02731 J.
  - The ratio is cosh²2 + sinh²2 = cosh 4 = 27.31 ("more than 27 times"). H(1 s) = −0.0010 J. All correct.
  - The physics is right: L = T = ½m(ṙ² + ω²r²), H = ½m(ṙ² − ω²r²) is conserved, r = r₀ cosh ωt, and the wire's sideways normal force does the work.
  - The example is original. Nothing like it is in Section 1.3.
- Quiz 1: answer 1, p₃ constant. Correct, and the explanation is correct.
- Quiz 2: time factor λ^{1/2} with λ = 4 gives 2.0 s. Answer 1 is correct.
- Quiz 3: p_x = mẋ + eA_x, answer 1. Correct.
- Quiz 4: answer 1, H = ½m(ṙ² − ω²r²) conserved while T grows. Correct. The distractors are all wrong for the right reasons. Choice 4 ("H grows because the wire does work") is the attractive wrong answer, and the explanation deals with it.
- Flashcards: all five are correct. The fourth card ("H = E needs another condition (e.g. T quadratic in the velocities, V = V(q))") is fine as an example condition.
- Plot:
  - The curves x^{3/2}, x^{1/2} and 1 are λ^{1−k/2} for k = −1, 1, 2. Correct.
  - The point (4, 2) is on the k = 1 curve and matches quiz 2.
  - At λ = 4, x^{3/2} = 8 sits exactly at the top of the range [0, 8]. Acceptable.
- Calcs file: every entry matches the page. `npm run calc:test -- -k symmetry` gave 65 passed. I independently checked the identity entries cart-lagrangian, cart-hamiltonian and bead-h-conserved, and the Kepler and free-fall exponents 3/2 and 1/2.
- Algebra of (1.59): H′ = ẋ′p′ − L′ with p′ = mẋ′ + mv₀ gives ½mẋ′² + ½kx′² − ½mv₀² = (p′ − mv₀)²/2m + ½kx′² − ½mv₀². Correct.
- (1.54) pairing: r_i × F_{j→i} + r_j × F_{i→j} = (r_i − r_j) × F_{j→i}, using Newton's third law. Correct.

## Coverage and order
- The notes' Section 1.3 (pp. 12-16) runs: cyclic coordinates and Noether, then (1) translations/CM, including the continuous body, then (2) rotations with the Newtonian torque argument, then (3) scaling with cases a-c, then (4) a charge in fields, then (5) Ḣ = ∂H/∂t, the two bullet points, and the spring-and-cart example.
- The page follows this order exactly and covers every item, including the continuous-body M and R and the closing remarks on p. 16. Nothing is left out.
- Additions: the worked example (bead) and the scaling graph. Both are the page's own and labelled as such.

## Licensing
- Neither Chapter 1 nor the OCW course carries any "rights reserved" or "Courtesy of" notice: grep of ch1.txt found none, which agrees with `_course.json`.
- The page reproduces neither figure (Fig. 1.5, Fig. 1.6). The only graphic is a plot generated from formulas.
- Paraphrase: I compared each paragraph with the notes. The wording is the page's own, with the same structure but rewritten sentences. Only standard phrases are shared ("cyclic coordinate", "homogeneous of degree k", "no explicit time dependence"). No copied sentences.
- No OpenStax or LibreTexts material.
- No em dashes on the page (grep found none).

## Notes
- leadsTo 8.09 Section 2.3: correct. Section 2.3 opens with T = ½MṘ² + ½Σm_i ṙ_i² in CM coordinates (eq. 2.34) and defines the moment of inertia tensor for a continuous body with ρ(r) (eq. 2.38). Both build on the CM split and the mass integrals of this page.
- leadsTo 8.09 Section 4.3: correct. Section 4.3 ("Equations of Motion & Conservation Theorems") gives u̇ = {u, H} + ∂u/∂t, conservation when {u, H} = 0, and Ḣ = ∂H/∂t (eq. 4.81). It also shows that momentum and angular momentum generate translations and rotations, ending "a conservation law exists if and only if there is a symmetry". Optional: the `why` could also mention this symmetry-generator link, which ties back to this page even more directly.
- There is no `Callout kind="cosmology"`, which is fine for this review section.
- Prerequisites `hamiltonian-mechanics-review`, `conservation-of-momentum` and `angular-momentum-point-particle` exist. The inline link `/courses/8-09/lagrangian-mechanics-review` exists, and that page has the "Cancellation of dots" formula (eq. 1.10).
- Symbols (warning): the meaning of `r` scoped to this page reads "The distance of the bead from the axis, along the wire." The page also uses r in `d^3r`, `\rho(\vec r)` and `\vec r` in the continuous-body integrals, where it is a position inside the body, not the bead's distance. Suggest: "The distance of the bead from the axis, along the wire; in the mass integrals, a position inside the body (d³r a volume element)."
- Other scoped meanings fit the page:
  - `k` covers both the homogeneity degree and the spring constant.
  - `T` covers kinetic energy and period.
  - `a` covers semi-major axis and the cart's coefficient mv₀.
  - `φ` covers rotation angle and scalar potential.
  - `F_{i→j}` and `F_{j→i}` are worded consistently with finding 3.
  - The general `\rho` meaning (mass per unit volume) applies.
  - `npm run content:check`: 0 errors. The only warning for this page is that the review file was missing.
- Ambiguity (info): T is both the kinetic energy and the period in "T² ∝ a³". The notes do the same and the symbol meaning covers it, so no change is needed.

## Resolution (2026-11-19, by the page author)

- Warning (symbols): the page-scoped meaning of r now covers both uses: a position in a continuous body (ρ(r), d³r) and, in the worked example, the bead's distance from the axis.
- Info: the page now says that it writes the internal force of i on j as F_{i→j}; the angular-momentum paragraph now says "about the centre of mass"; the cart paragraph now says that the H = T + V argument of the previous page still applies when V depends explicitly on t (ẋp = 2T).
- Other info notes: no change. `npm run content:check` and `npm run calc:test` pass.
