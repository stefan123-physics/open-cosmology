---
page: content/year-4/8.09/constraints-friction-dalembert.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/04c9b750af0e52b90121e2fe00edf434_MIT8_09F14_Chapter_1.pdf (read: local copy, pdftotext text plus rendered images of printed pp. 16-21, used for every garbled equation)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_1/ (not opened separately; it is the resource page of the same PDF)
  - 8.09 Chapter 6 notes (local text, Sections 6.7 and 6.8) for the leadsTo and the Reynolds-number remark (read)
  - content/year-5/8.902/inflation-scalar-field.mdx (8.902 Lecture 12 page) for the cosmology callout (read)
verdict: pass-with-notes
---

# Review: Constraints, d'Alembert's principle and friction: the dissipation function

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Semi-holonomic constraints", integrating-factor paragraph | p. 18 writes the condition as "0 = −a cos(θ) − a sin(θ) ∂h/∂θ", dropping the factor h in the first term (it still concludes h = k/sin θ, which needs the h) | "requires a cos θ h + a sin θ ∂h/∂θ = 0" (correct), without saying the notes differ | Add a short bracket, as done for (1.70) and (1.72): "(the notes drop the h in the first term)". Rule 4 of AGENTS.md. |
| 2 | warning | Worked example, step "Time scale" | (not in MIT) | "after a few hundredths of a second the ball falls at its terminal speed. In that time it moves less than a millimetre." | Over 0.03 s the ball moves v_t(t − τ(1 − e^(−t/τ))) = 0.99 mm and over 0.04 s 1.36 mm, so the claim is borderline. The calcs entry `transient-distance` checks a different quantity (the lag v_t τ = 0.15 mm behind uniform motion), not the distance travelled. Either say "it lags uniform motion at the terminal speed by only v_t τ ≈ 0.15 mm" (matching the calcs entry) or "over the first few τ it falls under half a millimetre" (4τ gives 0.45 mm) and adjust the calcs entry. |
| 3 | info | Sphere in fluid, bracket on m′ | T = ½ m′ ẏ² with m′ < m "accounts for the mass of displaced fluid" (p. 21) | Remarks that buoyancy reduces only the weight, inertia is the full mass plus some entrained fluid, and that this changes the settling time, not the final speed | Verified correct: the terminal speed (m − m_f)g/(6πηa) does not depend on the inertial mass; with the added mass of a sphere (½ m_f) the time constant would be (m + ½m_f)/(6πηa) = 5.0 ms instead of 3.9 ms for the worked example (unsteady Basset force ignored). Optional: one clause in the "Time scale" step saying the page uses the notes' equation and that full inertia gives about 5 ms. |
| 4 | info | Special case 2 | "like the electromagnetic Lorentz force" (p. 20) | "as for the magnetic part of the Lorentz force" | Acceptable (the velocity-dependent part of the generalized potential is the magnetic one); the difference is a refinement, not an error. |
| 5 | info | Worked example, step "Is Stokes drag right here?" | Section 6.7 defines R = ρuL/η with L a characteristic length, and for flow past a sphere uses R = ρua/η with the radius a (ch. 6 text, after eq. 6.133) | Uses the diameter: 0.13 | Both conventions are in use and the conclusion (R < 1) holds either way (0.065 with the radius). Optionally say "with the diameter (the notes use the radius, giving 0.065)". |
| 6 | info | "Into generalized coordinates" | No mention of torques | "A generalized force need not be a force: for an angle it is a torque." | A correct addition, not in the notes at this point. Fine. |

All three slips the brief asked about were verified on the rendered pages:
- Eq. (1.70), p. 20: the notes print `r_i/∂q_j` with no ∂ in the numerator. The page's remark is correct.
- Eq. (1.72), p. 21: the middle expression has `∂r_j/∂q_j`, a typo for `∂r_i/∂q_j`. The page's remark is correct and its formula uses r_i.
- The m′ in the kinetic energy (p. 21): the notes do write T = ½ m′ ẏ². The page's physics comment is correct (see row 3).

## Formula citations (each checked against the rendered page)
- (1.60) p. 16: matches.
- Rolling conditions, p. 17 (unnumbered): matches, including ẋ = a sin θ φ̇, ẏ = −a cos θ φ̇.
- (1.61) p. 17, (1.62) p. 17, (1.63) p. 18: match. The notes write f(q₁,…,q₃N, t) in (1.62); the page's generic q_j is fine.
- (1.64) p. 19, (1.65) p. 19, (1.66) p. 19: match.
- (1.67) p. 19: the page shows the third and fourth lines of the notes' four-line chain, which match. The two facts the page names (cancellation of dots, interchange of d/dt and ∂/∂q_j) are the ones the notes use.
- (1.68) p. 19, (1.69) p. 20, (1.70) p. 20, (1.71) p. 20: match (with the corrected ∂ in 1.70).
- (1.72), (1.73), (1.74) p. 21: match (with the corrected index in 1.72). The page's one-line derivation of (1.73) is equivalent to the notes' chain.
- Sphere equation m′ÿ + m′g = −6πηaẏ, p. 21 (unnumbered): matches, sign correct for y = height.
- (1.75) p. 21: matches.
- Friction models (static, sliding, rolling, fluid), p. 20: match.
- The integrating-factor argument and rolling along a line (p. 18): match the notes, and the reasoning is correct (I also checked the first rolling condition alone with Frobenius: ω ∧ dω = −a cos θ dx∧dθ∧dφ ≠ 0, so it is not integrable).

## Arithmetic and answer checks
- Volume (4/3)π(2.0 mm)³ = 3.351e-8 m³; m = 2.614e-4 kg; displaced syrup 4.356e-5 kg; m′ = 2.178e-4 kg: all as shown.
- m′g = 2.136e-3 N; 6πηa = 0.05655 kg/s; terminal speed 0.03777 m/s (3.8 cm/s); without buoyancy 0.0453 m/s (4.5 cm/s): correct.
- τ = m′/(6πηa) = 3.85 ms (shown 3.9 ms): correct.
- Reynolds number 1300 × 0.0378 × 0.0040/1.5 = 0.131: correct (see row 5 for the length convention).
- Plot point 1 − 1/e = 0.632 and caption 63%: correct; the curve 1 − e^(−x) is the solution for release from rest.
- "In that time it moves less than a millimetre": see row 2.
- Quiz 1: answer 2 (bead, y − v₀t = 0) is the only holonomic one: correct; explanation correct.
- Quiz 2: answer 0 (along x̂ only): correct.
- Quiz 3: answer 1 (½bv²): correct.
- Quiz 4: answer 1 (about 3.8 cm/s): correct; distractors 0.38, 4.5 and 38 cm/s are distinct from it.
- Flashcards: all five statements correct (Stokes h = 6πηav gives 𝓕 = 3πηav²: correct).
- calcs file: all 17 entries pass (`pytest tests/calc -k constraints-friction`, 17 passed). Values in the file match the page.

## Coverage and order
- The page follows the notes' order on pp. 16-21: holonomic vs non-holonomic (sphere, rolling), incline, vertical disk, (1.61)-(1.63), integrating-factor example, rolling along a line, virtual displacements and the bead on a moving wire, virtual work and (1.64), generalized coordinates (1.65)-(1.69), three special cases (1.70)-(1.71), friction models, (1.72)-(1.74), falling sphere, two masses with sliding friction (1.75). Nothing from these pages is left out.
- Added (page's own, labelled as such or clearly additional): physical reason the steerable disk is non-holonomic, the torque remark, the worked example, plot, Reynolds check and cosmology callout.

## Licensing
- No "rights reserved" or "Courtesy of" notice in the Chapter 1 text (grep: none).
- No figure from the notes is reproduced (Figures 1.7-1.10 are not redrawn); the only graph is generated from a formula.
- Paraphrase: no copied sentences. Closest wording: the three bullet properties of a virtual displacement and the flashcard "so moving constraints do not change its form" (notes: "so time dependent constraints do not change its form"); "which, as we will see, contains the Euler–Lagrange equations as a special case" (notes: "We will see momentarily ... containing them as a special case"). These are short standard phrases; acceptable, optional to reword the flashcard.
- No OpenStax or LibreTexts material.

## Forward links and cosmology callout
- leadsTo 8.09 Section 1.5: correct. Section 1.5 introduces Lagrange multipliers for (a) finding constraint forces and (b) semi-holonomic constraints, with a rolling hoop example.
- leadsTo 8.09 Section 6.8: correct. Section 6.8 ("Viscous Flow Past a Sphere (Stokes Flow)") derives F_D = 6πηau (eq. 6.155). The page's statement that Stokes' law is derived "much later in the course" matches the notes' own promise.
- leadsTo 8.902 Lecture 12 and the callout: the 8.902 page gives φ̈ + 3Hφ̇ = −dV/dφ (notes eq. 370) and calls 3Hφ̇ the Hubble drag; slow roll is 3Hφ̇ ≈ −dV/dφ (eq. 372). The page's "terminal velocity" analogy for slow roll is fair. Attribution correct.

## Symbols (data/symbols.json, meanings scoped to this page)
- warning: 𝓕 (`\mathcal{F}`) is scanned as the letter F, whose meaning on this page is "Force; F_s, F_N and F^max …". The popup for the dissipation function therefore says "Force". Add the dissipation function to that meaning (e.g. "… ; in script form, 𝓕, the dissipation function Σ∫h dv′", unit W) or otherwise give 𝓕 its own explanation.
- warning: h has only "A trial integrating factor h(x, y, θ, φ)". On this page h is also the friction-size function (h(v) = bv in quiz 3, h = 6πηav in the sphere example, h_i has its own entry). Extend the meaning.
- info: V's meaning is "the potential energy"; in the cosmology callout V is the inflaton potential (an energy density). φ and φ̇ already mention the cosmology note; V could too.
- info: r_j "The position of particle j" appears only in the remark about the notes' typo; acceptable.
- Other scoped meanings (δ, μ, μ_s, μ_R, μ_f, τ, η, m′, a_j, a_t, a_φ, Q_j, R_j, Z_i, v′, ẏ_p, ẏ_H, x₀, y₀, v₀ …) fit the page; units sensible.

## Notes
- No em dashes on the page (count 0).
- Prerequisites `lagrangian-mechanics-review`, `rolling-kinematics`, `resistive-forces` exist.
- `source.url` and the reading URL follow the pattern of the other 8.09 pages.
- Verdict pass-with-notes: no errors found; rows 1-2 and the two symbol warnings should be fixed before setting `status: reviewed`.

## Resolution (2026-11-19, by the page author)

- Warning 1: the integrating-factor step now notes in brackets that the notes drop the factor h from the first term of the condition (p. 18).
- Warning 2: the "Time scale" step now states the lag behind uniform motion at terminal speed, vτ = 0.15 mm, which is what the calcs entry `transient-distance` checks (its `shown` updated).
- Warning 3: the page-scoped meaning of F now also covers the dissipation function 𝓕 (in W).
- Warning 4: the page-scoped meaning of h now covers the friction-size function h(v) as well as the trial integrating factor.
- Info: the meaning of V now mentions the inflaton potential of the cosmology note. The added-mass remark and the Reynolds-number convention (diameter here, radius in notes Section 6.7; below 1 either way) are left as they are.
- `npm run content:check` and `npm run calc:test` pass.
