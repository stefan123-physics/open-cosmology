---
page: content/year-1/18.02/div-curl-and-maxwell.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-33-maxwells-equations/ (lecture page not re-fetched; its transcript and notes read from local copies supplied by the author)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/11223c52fb049953cd0a8c06e70454b8_BChhAS1sFvA.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec33", 3 pages; cited page = PDF page; page breaks checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week14/ (read: local copy week14.pdf; PDF page 1 is the cover, Lecture 33 is PDF page 2 with printed page number 1)
  - content/year-4/8.286/_course.json and content/year-4/8.286/black-body-radiation.mdx (read, for the leadsTo check)
  - calcs/18.02/div-curl-and-maxwell.yaml (read; `npm run calc:test -- -k div-curl-and`: 5 passed)
verdict: pass-with-notes
---

# Review: Div and curl in physics: torque and Maxwell's equations

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers (Lecture 33 = printed p. 1 of the Week 14 summary). `reading1` = Week 14 summary, `reading2` = transcript.

Transcript page map: p. 1 = curl of a velocity field is twice the angular velocity, uniform rotation about the z-axis and curl = 2ω k̂, torque of F Δm as r × force, translation and rotation laws ("I am cheating a little bit here"), curl of a force field = torque per unit moment of inertia, zero curl means no spinning (friction aside), potential forces have zero curl, the Earth was formed spinning, deformable bodies, tidal locking of the Moon, start of 8.02 ("something that is known as Maxwell's equations. Just a quick poll."); p. 2 = poll, what Maxwell's equations explain (devices, waves, light), force qE, E as a gradient of the voltage, B and the magnetic force (sign remark), Gauss–Coulomb law, ρ is the charge density, divergence theorem → flux = Q/ε₀, capacitors, "most of them don't carry Maxwell's name", Faraday's law, E not conservative, "voltage out of nowhere", Stokes' theorem introduced, the transformer in a laptop adapter, up to "that causes 2B by 2t and that causes curl of the electric field."; p. 3 = transformer finished, ∮ E · dr = ∬ curl E · dS = flux of −∂B/∂t, loop not moving, capacitors and transformers, ∇ · B = 0 "fortunate" for surface independence, curl B with current density J, the chain current → B → E → current, closing remarks. Notes p. 1: the same, plus "for the entire solid, take ∭ … dV" for the torque.

The eight formulas:
- "Curl of a rotation" (`reading2`, p. 1): transcript p. 1 ("two omega times k"); also notes p. 1 with v = ω(−y î + x ĵ). The transcript text reads "minus yi plus yj", a transcription or speaking slip; the page correctly writes ⟨−y, x, 0⟩ (see table, #1).
- "Torque" (`reading2`, p. 1): transcript p. 1 in words ("cross-product of a position vector with a force", force F Δm); notes p. 1 has τ = r × F Δm explicitly. Correct.
- "Curl of a force field" (`reading1`, "Lecture 33, p. 1"): notes p. 1, curl(Force/Mass) = 2 Torque/Moment of inertia. Correct. (The transcript p. 1 says "torque per unit moment of inertia" without the 2.)
- "Gauss–Coulomb law" (`reading1`, p. 1): notes p. 1. Correct.
- "Gauss's law, integral form" (`reading2`, p. 2): transcript p. 2 (divergence theorem, 1/ε₀ times ∭ ρ dV, the charge in D). Correct; notes p. 1 has it too.
- "Faraday's law" (`reading1`, p. 1): notes p. 1 with the minus sign. Correct (transcript p. 2 says "the derivative of the magnetic field with respect to time" without the sign; citing the notes is the right choice).
- "Faraday's law, integral form" (`reading1`, p. 1): notes p. 1 have ∮ E · dr = −d/dt ∬ B · n̂ dS; the middle term ∬ (∇ × E) · n̂ dS is in the transcript p. 3, not in the notes. Acceptable (see #4).
- "Div and curl of B" (`reading1`, p. 1): notes p. 1, ∇ · B = 0 and ∇ × B = μ₀J + ε₀μ₀ ∂E/∂t. Correct.

Every in-text page citation was checked against the page map above and is correct, including "(p. 3)" for Stokes applied to the loop and the fixed surface, "(pp. 2–3)" for induction and the transformer (which straddle the page break), and "(p. 2)" for "most are not named after Maxwell".

No em dash on the page (grep: 0). Internal links `/courses/18-02/divergence-theorem`, `/courses/18-02/stokes-theorem`, `/courses/18-02/stokes-and-path-independence` point to existing pages; the prerequisites exist.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Curl and rotation", formula "Curl of a rotation" | Transcript p. 1: "minus yi plus yj times maybe a number … in gradients per second" (two slips in the transcript text: y for x, gradients for radians). Notes p. 1: ω(−y î + x ĵ). | ω⟨−y, x, 0⟩, cited to the transcript | Correct as written. Either cite `reading1` ("Lecture 33, p. 1") for the formula, which states it cleanly, or add a short bracket "(the transcript reads −y î + y ĵ, a slip)". |
| 2 | info | "The electric and magnetic fields": "Classically E is minus the gradient of a potential" | Transcript p. 2: "this guy is a gradient of a potential. And that potential is just electric voltage." | Adds the minus sign | The page is right (E = −∇V). Optional: nothing needed, or a bracket noting the sign convention. |
| 3 | info | Same paragraph: force q v × B | Transcript p. 2 gives the formula only on the board ("I am never sure about the sign. Is that the correct sign? Good."); the notes do not give the magnetic force. | q v × B, cited "(p. 2)" | Correct physics; the citation is to spoken words that refer to a board formula. Fine. |
| 4 | info | "Faraday's law, integral form" cited to `reading1` | The middle step ∬ (∇ × E) · n̂ dS is in the transcript p. 3, the notes only have the outer equality. | Full chain cited to the notes | Optional: cite `reading2` at "p. 3" (which has all three members), or keep as is. |
| 5 | info | Quiz 1 explanation: "The curl measures the torque per unit moment of inertia" | Notes p. 1: curl = 2 × torque / moment of inertia (the transcript omits the 2). | Without the factor 2, while the formula, flashcard 1 and Summary have it | Optional: "The curl is twice the torque per unit moment of inertia" for consistency. |
| 6 | info | "Curl of a force field" | Notes p. 1: "(for the entire solid, take ∭ … dV)" for the torque on an extended body. | Not mentioned | Optional half sentence: for a whole solid, integrate r × F over its volume. |
| 7 | info | "The electric and magnetic fields", last sentence | Transcript says "most of them don't carry Maxwell's name" just before Faraday's law (p. 2). | Moved to the introduction of the equations | Harmless reordering; same page. |

## Arithmetic and answer checks
- Curl of ω⟨−y, x, 0⟩: k̂ component ∂(ωx)/∂x − ∂(−ωy)/∂y = 2ω; other components 0. Correct (calcs `rotation-curl`).
- Worked example (a): E · n̂ = q/(4πε₀a²) constant on the sphere, times area 4πa² gives q/ε₀, independent of a. 10⁻⁹ / 8.854 × 10⁻¹² = 112.94 ≈ 113 V·m. Units V/m × m² = V·m correct.
- Worked example (b): π(0.1)² = 0.031416 ≈ 0.0314 m²; × 0.5 T/s = 0.015708 Wb/s ≈ 0.0157 Wb/s = 15.7 mV (1 Wb/s = 1 V). Correct.
- Callout: 1/√(8.854 × 10⁻¹² × 4π × 10⁻⁷) = 2.998 × 10⁸ m/s ≈ 3.00 × 10⁸. Correct.
- `npm run calc:test -- -k div-curl-and`: 5 passed. The `speed-of-light` entry gives `source: {cite: reading2, at: 'p. 2'}`; the transcript p. 2 only says the equations explain light, not the formula; it is a page-own calculation (`origin: page-own` is right). Optional to drop or reword that source.
- Quiz 1: answer 1 ("start or change its spinning"): correct; a gradient field can still accelerate, do work and change potential energy. Quiz 2: answer 1 (Q/ε₀): correct. Quiz 3: answer 1 (not conservative, circulation = −d/dt flux): correct.
- Flashcards: all three correct (curl = twice torque per unit moment of inertia; Gauss in two forms; Faraday in two forms with the minus sign).

## Coverage and order
- Order follows the lecture: curl of velocity → torque and the rotation law → curl of force fields → gradient forces and the Earth/Moon → electric and magnetic fields → Gauss–Coulomb and its integral form, capacitors → Faraday, Stokes, transformers → div B and curl B, the chain of causes.
- Omitted (all minor): the torque on an extended solid as a volume integral (notes, #6); the capacitor-dimming anecdote; "some people call it H" (better omitted); the poll and Auroux's remarks that he is not a physicist.
- Added by the page (not in MIT, not attributed to MIT): the worked example and the cosmology callout. Both are correct.
- The surface-independence remark (∇ · B = 0 makes the flux depend only on the loop) is a fair restatement of transcript p. 3 ("fortunate … otherwise you would run into trouble trying to understand surface independence") and matches the Lecture 32 page.

## Licensing
- No "rights reserved" or "courtesy" notice in the transcript or the Week 14 summary (grep: no match). Both under the course's CC BY-NC-SA licence.
- No verbatim copying beyond short phrases: "out of nowhere" is quoted and attributed; other wording is rewritten. No figures used.
- No OpenStax or LibreTexts material.
- The worked example (point charge in a sphere; loop in a growing field) is original; MIT has no numerical example in this lecture.

## Notes
- Cosmology callout: physics correct. In vacuum the two curl equations give wave equations with speed 1/√(ε₀μ₀) = c; the CMB is black-body radiation from the hot early universe. The statement is the page's own, not attributed to Guth or Auroux; the transcript p. 2 supports "they explain light".
- `leadsTo` 8.286 Lecture 16 (Black-Body Radiation and the Early History of the Universe, Part II; `_course.json` line 100): sensible. The 8.286 page `black-body-radiation.mdx` counts standing electromagnetic-wave modes in a cavity and discusses the classical (Rayleigh–Jeans) divergence, which is exactly where "light is an electromagnetic wave" is used. The `why` text is accurate.
- Uncertain: nothing in the page depends on the lecture video or board, apart from the sign of the magnetic force (#3), which is standard physics.
- Verdict: no errors; seven info-level notes, all optional.

## Resolution (2026-11-16, by the page author)

- Note 1: the curl-of-a-rotation formula now cites the notes (Lecture 33, p. 1), with a bracket on the transcript's "minus y i plus y j" slip.
- Note 3: the magnetic force is now said to be written on the board (p. 2).
- Note 4: the integral form of Faraday's law now cites transcript p. 3, where the middle step appears.
- Note 5: quiz 1's explanation now says "twice the torque per unit moment of inertia".
- Note 6: added that for a whole solid the torques are summed as a triple integral (notes, p. 1).
- Notes 2 and 7, and the calcs citation of the speed of light: no change (the page is right; the calcs entry is marked page-own).
