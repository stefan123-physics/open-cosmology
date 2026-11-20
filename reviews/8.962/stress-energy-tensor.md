---
page: content/year-5/8.962/stress-energy-tensor.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-5-the-stress-energy-tensor-and-the-christoffel-symbol/ (transcript read from a local copy of the OCW PDF, 24 pages, no printed footer, so PDF page = cited page; page breaks spot-checked with pdftotext on p. 15)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/dc6b64d591a8e09e51fce00633732d4b_OOmZkNa72t4.pdf (read, as above)
  - 8.962 Lecture 6 transcript (read, for leadsTo)
  - 8.962 Lecture 12 transcript (read, for leadsTo)
  - content/year-4/8.286/mass-energy-and-radiation.mdx and matter-radiation-equality.mdx (8.286 Lecture 15 pages, read for leadsTo and the callout)
verdict: pass-with-notes
---

# Review: The stress-energy tensor

No slides or notes exist on OCW for this lecture; Hughes writes on the board, and the transcript often says only "it looks like this". Where the transcript does not contain an equation's content, I checked the page's equation against standard physics and against what Hughes says in words, and say so below.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | leadsTo, 8.962 Lecture 6 | L6 (titled "The principle of equivalence") does polar coordinates, the metric diag(−1, 1, r², 1), covariant derivative and Christoffel symbols, then begins a two-part argument that gravity rules out global inertial frames: part one is the gravitational redshift (tower, Pound–Rebka, GPS); part two is "on Thursday". The principle itself is not stated in L6. | "...then states the principle of equivalence." | "...then begins the argument that gravity rules out global inertial frames (the gravitational redshift), which leads to the principle of equivalence." |
| 2 | warning | Prelude, "Polar to Cartesian and back" (p. 24); point-particle formula (p. 19); covariant EM tensor (p. 20); `e_φ·e_φ = r²` (p. 23) | The transcript has the words only: "it looks like this" (matrix), "we introduce a Dirac delta function" (point particle), "it ends up turning into this" (EM). On p. 23 Hughes says only "e phi dot e phi does not equal 1"; the value r² first appears in L6 (metric diag(−1, 1, r², 1)). | The equations are cited to those pages with no note that their content is reconstructed. All are correct (checked below). | Add one short bracket, e.g. "(Hughes writes these on the board without reading them out; the page gives them in standard form.)" For r², cite L6 or say it follows from x = r cos φ, y = r sin φ. |
| 3 | warning | EM paragraph and Summary: "the Maxwell stress tensor quoted from Griffiths and Jackson", "the Maxwell stresses" | Hughes: the spatial stresses are "derived in textbooks like Griffiths and Jackson. So I'll just quote for you the result." | The page's T^{ij} = (1/4π)[½δ^{ij}(E²+B²) − E^iE^j − B^iB^j] is correct as a momentum flux, but it is minus the Maxwell stress tensor as Griffiths defines it (σ_ij = (1/4π)[E_iE_j + B_iB_j − ½δ_ij(E²+B²)] in Gaussian units). A reader comparing with Griffiths will find the opposite sign. | Say "minus the Maxwell stress tensor of Griffiths and Jackson" or "the Maxwell stresses, with the sign of a momentum flux". |
| 4 | warning | Quiz 2 | — | Marked answer T^{i0}; distractor "T^{0i}: energy flowing in direction i". The explanation itself says T^{i0} = T^{0i}, so the T^{0i} components numerically also "give the momentum density". A careful reader can be marked wrong for a true statement. | Rephrase the question: "Which components are, by definition, the flux of momentum in the time direction (the momentum density)?" or replace the T^{0i} distractor. |
| 5 | info | "Stress-energy tensor of dust" | p. 5: Hughes says the momentum is "the rest mass times the four-momentum" (slip for four-velocity) and on p. 8 calls u⊗u an "exterior product". | Page writes p = m u and "tensor product", silently correct. | Optional bracket per writing rule 4; not needed for the "exterior product" slip, which the page simply avoids. |
| 6 | info | Point particle, "1/u⁰ acts like a 1/γ" | p. 20: "You can think of this as essentially being kind like a gamma factor." | "acts like a 1/γ" | Page is the correct reading (u⁰ = γ); fine as is. |
| 7 | info | Capacitor | p. 21: "a pair of capacitors" (slip for the plates of one capacitor). | "a parallel-plate capacitor" | Fine; silent correction is acceptable. |
| 8 | info | Conservation, frame split (p. 17) | Hughes says "d alpha T alpha 0", i.e. contracts the divergence on the first index. | ∂_β T^{αβ} and ∂T^{00}/∂t + ∂T^{0i}/∂x^i. | Equivalent because T is symmetric; no change needed. |

## Arithmetic and answer checks
- Worked example (ρ₀ = 2, v = 0.6): γ = 1/0.8 = 1.25, γ² = 1.5625, γ²ρ₀ = 3.125; T^{0x} = 3.125 × 0.6 = 1.875; T^{xx} = 3.125 × 0.36 = 1.125; −3.125 + 1.125 = −2 = −ρ₀. All correct. "More than 1.5 times the rest value": 3.125/2 = 1.5625, correct. The trace check is valid: η_{αβ}T^{αβ} = ρ₀ u·u = −ρ₀.
- Quiz 1 (v = 0.8): γ = 5/3 ≈ 1.67, γ² = 25/9 ≈ 2.78 (marked answer correct); distractors 1.67 (one factor of γ), 1 (rest value), 0.6 (= 1/γ) are all wrong as intended.
- Graph caption: at v = 0.8, n/n₀ = 1.67 and ρ/ρ₀ = 2.78, correct. Info: with range [0, 5] and domain to 0.9, γ² reaches 5.26 at v = 0.9, so the solid curve leaves the top of the box near v ≈ 0.894; harmless if the plot clips, but domain [0, 0.88] or range [0, 6] would keep it whole.
- Quiz 3: diag(ρ, P, P, P) correct; diag(−ρ, P, P, P) is the mixed T^α_β form, correctly a distractor.
- Quiz 4: τ ∝ l³, I ∝ l⁵, θ̈ ∝ 1/l²; correct, and Hughes's "not a proof" is reported faithfully (pp. 8, 13, 16).
- Dust components (p. 7): with u = (γ, γv), T^{00} = γ²ρ₀, T^{0i} = γ²ρ₀v^i, T^{ij} = γ²ρ₀v^iv^j. Correct.
- Perfect fluid: ρuu + P(η + uu) = (ρ+P)uu + Pη; in the rest frame gives diag(ρ, P, P, P) with η^{00} = −1. Correct.
- EM tensor, signature (−,+,+,+), Gaussian, c = 1: with F^{0i}F^0{}_i = E² and F^{αβ}F_{αβ} = 2(B² − E²), T^{00} = (1/4π)[E² + ½(B² − E²)] = (E² + B²)/8π. T^{0i} = (E×B)^i/4π, T^{ij} as on the page: standard and correct. Capacitor (E along x, B = 0): T^{xx} = (1/4π)(½E² − E²) = −E²/8π (tension along the field), T^{yy} = T^{zz} = +E²/8π (pressure sideways). Correct, and matches Hughes's words on p. 21.
- Point particle: m₀∫dτ u^αu^β δ⁴(x − z(τ)) has dimensions mass/length³; doing the τ integral on δ(t − z⁰(τ)) gives 1/|dz⁰/dτ| = 1/u⁰, so T = m₀u^αu^β δ³(x − z(t))/u⁰; T^{00} = γm₀δ³. Correct, matches pp. 19–20 in words.
- Polar matrices: L^α_μ̄ = ∂x^α/∂x^μ̄ with rows x, y and columns r, φ: [[cos φ, −r sin φ], [sin φ, r cos φ]]. Inverse ∂x^μ̄/∂x^α, rows r, φ: [[cos φ, sin φ], [−sin φ/r, cos φ/r]]. I multiplied both orders by hand; each gives the identity. Rows labelled by the upper index, as the page says. e_φ = (−r sin φ, r cos φ), so e_φ·e_φ = r². Correct.
- Calcs file: all 18 entries match the page; `pytest tests/calc -k stress-energy-tensor` gives 18 passed. Notes: (a) `radiation-pressure` (kind fact) gives its source as `reading1, transcript p. 10`, but the transcript never states P = ρ/3; point it to the 8.286 Lecture 15 page (matter-radiation-equality) or mark it as a standard result. (b) `polar-inverse` says "L times its stated inverse" but the formula is inverse times L (still valid); the other off-diagonal entry, (−sin φ/r)cos φ + (cos φ/r) sin φ = 0, is not checked. Both are minor.

## Coverage and order
- The page follows the lecture's order: recap of N (pp. 1–3); rest energy density and γ² (pp. 3–4); T = p⊗N and the meaning of its components (pp. 4–7); energy flux = momentum density, symmetry (pp. 7–8); the general recipe deferred, the perfect fluid, "dry water", the covariant form (pp. 8–11); Newton's equation and the need for the whole tensor (pp. 12–13); the cube torque argument (pp. 13–16); ∂T = 0, frame split, integral form (pp. 16–18); point particle (pp. 18–20); EM field and capacitor (pp. 20–21); prelude to curvature, polar coordinates, coordinate basis, L notation and matrices (pp. 22–24).
- Ends where the lecture ends (polar matrices and the remark about the metric); it does not claim to reach the Christoffel symbol and leaves it to Lecture 6, as it should.
- Omitted (minor): Hughes's remark that the integral-form identities will be used in this week's problem set (p. 18). Nothing added beyond the lecture apart from the cosmology callout and the worked example.
- Every citation checked: each cited page contains the equation or claim attributed to it (with the "reconstructed" caveat in finding 2). The flagged slip about T^{0i}/T^{i0} is genuine (p. 6: "Now, T0i, this is the flux of momentum component i in the t direction").

## Licensing
- The transcript has no "All rights reserved" or "Courtesy of" notice (grep checked). No figures are used; the only graph is generated from formulas.
- No verbatim copying beyond short phrases ("feature, not a bug", "dry water", "not a healthy theory" rendered as "unhealthy", the anti-water image retold in new words). The worked example (ρ₀ = 2, v = 0.6) and the quiz numbers are original.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: P = 0 (dust), P = ρ/3 (radiation), P = −ρ (vacuum) in c = 1 units; ∇_β T^{αβ} = 0 giving ρ̇ = −3(ȧ/a)(ρ + P); pressure as a source in the acceleration equation. All correct, and fairly attributed: Hughes does say pressure generates gravity (p. 10). The 8.286 Lecture 15 pages on this site do derive the fluid equation with pressure and the pressure term in the second Friedmann equation, so the 8.286 leadsTo is accurate.
- leadsTo Lecture 12 is accurate: L12 sets G_{μν} = κT_{μν}, fixes κ = 8πG from the Newtonian limit using the perfect-fluid tensor, and uses ∇·T = 0.
- "Through the principle of equivalence, two lectures on" (p. 11: "in a couple of lectures") is correct in fact; the principle is stated in Lecture 7.
- Physics conventions are consistent throughout: c = 1, signature (−,+,+,+), Gaussian units for the field, T^{αβ} = flux of p^α in direction x^β.

## Verdict and findings
Verdict: **pass-with-notes** (no errors; four warnings).

1. warning: leadsTo Lecture 6 says it "states the principle of equivalence"; L6 only begins the argument (gravity rules out global inertial frames, part one: gravitational redshift).
2. warning: the polar matrices, point-particle delta function, covariant EM tensor and e_φ·e_φ = r² are cited to transcript pages that contain only words ("it looks like this"); add a short note that they are given in standard form (all checked correct), and source r² to L6 or to the derivation.
3. warning: the page's T^{ij} for the field is minus the Maxwell stress tensor as Griffiths defines it; say so to avoid a sign confusion.
4. warning: quiz 2's distractor "T^{0i}" also numerically gives the momentum density (as the explanation says); rephrase the question as "by definition" or change the distractor.
5. info: calcs `radiation-pressure` cites transcript p. 10, which does not contain P = ρ/3; re-source it.
6. info: calcs `polar-inverse` description says L × inverse, formula is inverse × L; one off-diagonal entry is not checked.
7. info: the γ² curve leaves the plot box above v ≈ 0.894 (range [0, 5], domain to 0.9).
8. info: silent corrections of lecturer slips (p = m u where Hughes said "four-momentum"; "pair of capacitors"; "gamma factor" read as 1/γ) are correct; a bracket for the first is optional.
9. info: Hughes's frame split contracts on the first index (∂_α T^{α0}); the page's second-index form is equivalent by symmetry.

## Resolution (2026-11-19, by the page author)

1. The leadsTo for Lecture 6 now says it introduces the Christoffel symbol and begins the argument that gravity rules out global inertial frames (no longer "states the principle of equivalence").
2. The point-particle tensor, the covariant electromagnetic tensor and the polar matrices are now introduced as standard forms of what Hughes writes on the board; e_φ is derived from x = r cos φ, y = r sin φ before e_φ · e_φ = r².
3. T^ij of the field is now called the momentum flux, with a note that it is minus the Maxwell stress tensor as Griffiths defines it.
4. Quiz 2 now asks "by the definition of T^αβ as a flux", and the T^0i choice was replaced by T^ii.
5. The calcs entry radiation-pressure now points to the 8.286 Lecture 15 page mass-energy-and-radiation.
6. The polar-inverse entry's description was corrected, and a new entry polar-inverse-offdiag-2 checks the other product.
7. The graph domain now ends at v = 0.89, so the γ² curve stays inside the range.
8. Added a bracket for the "four-momentum" slip (he means the 4-velocity); the other two corrections need no note.
9. No change (T is symmetric).
