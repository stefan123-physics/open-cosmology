---
page: content/year-4/8.09/potential-flow.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read: local copy, pdftotext output plus rendered page images of printed pp. 113 and 120-124; every equation read from the images)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (the resource page of the same PDF; not fetched separately)
  - Sections 6.5 and 6.8 of the same PDF (read in the text extraction, for the leadsTo claims)
  - content/year-4/8.07/separation-of-variables-spherical.mdx (read, frontmatter, for the prerequisite)
verdict: needs-changes
---

# Review: Potential flow: Laplace's equation, flow past a sphere and d'Alembert's puzzle

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The pressure", paragraph after (6.74) | p. 121: "This is equivalent to shifting φ → φ + ∫^t b(t′) dt′". This is a sign slip in the notes: with φ̃ = φ + ∫b, ∂φ̃/∂t = ∂φ/∂t + b, so the left side of (6.74) becomes 2b(t), not a constant. The shift that works is φ → φ − ∫^t b(t′) dt′ (or φ − ∫(b − b₀) dt′ to keep a chosen constant b₀). | "replacing φ by φ + ∫^t b(t′) dt′ removes the time dependence of b": repeats the slip without comment. | Write φ → φ − ∫^t b(t′) dt′ and add a bracket "[The notes write +; the minus sign is what cancels b(t).]", as the page already does for the other two slips. |
| 2 | warning | Title, flashcard 4 | The notes give no name to the zero-drag result (no "d'Alembert" anywhere in Chapter 6, checked by search). | "d'Alembert's puzzle" in the title and flashcard. The usual name is **d'Alembert's paradox**; "puzzle" is non-standard and the name is not marked as ours. | Use "d'Alembert's paradox" and say once in the text, e.g. after the zero-force sentence, "(this is known as d'Alembert's paradox; the name is not used in the notes)". |
| 3 | warning | "Is the flow really irrotational?", sentence after the (6.88)–(6.89) bracket; flashcard 5 | p. 124: "∇×v is conserved along flow lines" (itself too strong, see Notes). | "Where Ω = 0, its rate of change is zero too". With the partial derivative of (6.89) this holds only where Ω vanishes in a whole neighbourhood; at a point with Ω = 0 next to vorticity, ∂Ω/∂t = −(v·∇)Ω + … can be non-zero (advection). The exact statement is for the material derivative: for ∇·v = 0, DΩ/Dt = (Ω·∇)v, which is linear in Ω, so a fluid element with Ω = 0 keeps Ω = 0. | Rephrase as "following a fluid element, Ω changes at a rate proportional to Ω itself, so an element with no vorticity never gains any" (optionally quote DΩ/Dt = (Ω·∇)v as our remark). Flashcard 5 ("where Ω = 0 it stays zero") is fine if read along the flow; add "following the fluid". |
| 4 | info | "Flow past a sphere", second paragraph | p. 122 also says the proportionality v ∝ u could be shown by dimensional analysis, "as we will discuss in more detail later". | Omitted. | Optional half sentence. |
| 5 | info | Potential vortex bullet | Notes only name it a potential vortex. | Adds "no vorticity anywhere off the axis … carried round without turning" and the circulation Γ on the axis; "(our remark)" is placed after the circulation sentence only. Both statements are correct (curl of Γθ̂/2πr vanishes for r > 0; ∮v·dl = Γ). | Move "(our remark)" so it clearly covers both sentences. |

Both slips the page already marks were verified independently:
- **θ → π/2 − θ (p. 123).** Confirmed in the image of p. 123: "its unchanged by taking θ → π/2 − θ". cos²(π/2 − θ) = sin²θ ≠ cos²θ, so the statement is false as written; the front-back reflection θ → π − θ leaves cos²θ unchanged. The page's correction is right.
- **(6.88) (p. 123).** The notes write d/dt(∇×v) = ∇×(dv/dt) = ∇×(∂v/∂t + v·∇v). With d/dt = ∂/∂t + v·∇ and the identity v·∇v = ∇(v²/2) − v×Ω, one finds ∇×(v·∇v) = (v·∇)Ω − (Ω·∇)v + Ω(∇·v), so ∇×(dv/dt) − d(∇×v)/dt = −(Ω·∇)v + Ω(∇·v) ≠ 0 in general: the first equality fails. The second expression in (6.88) and all of (6.89) are ∇×(∂v/∂t + v·∇v), i.e. the curl of the Euler equation (6.35), which is zero for constant ρ and gives (6.36), ∂Ω/∂t = ∇×(v×Ω) (checked on p. 113). The page's bracket is correct. A consequence the page handles well: the notes' conclusion "∇×v is conserved along flow lines" does not follow (vortex stretching changes Ω along a flow line); only "zero stays zero" survives, and that is all the page claims (subject to item 3).

Formula citations, all checked against the page images:
- (6.69) p. 120; (6.70), (6.71), (6.72), (6.73), (6.74), (6.75), (6.76) p. 121; (6.77), (6.78), (6.80) p. 122; (6.81)–(6.87) p. 123; (6.88) p. 123; (6.89), (6.90) p. 124. Every equation number and page is correct, and every `<Formula>` tex matches the notes (the (6.86) bracket written in the same order; (6.85) with the same three terms; the combined (6.88)–(6.89) Formula shows the (6.89) expression, labelled pp. 123–124, correct). Inline references (6.79), (6.81)–(6.83), (6.35), (6.36) are also correct.

## Arithmetic and answer checks
- Surface velocity from (6.86) at r = R: v = −(3/2)u + (3/2)(u·r̂)r̂, tangential, size (3/2)u sinθ. Correct.
- (6.87): ½ρ(u² − (9/4)u² sin²θ) = (ρu²/8)(4 − 9 + 9cos²θ) = (ρu²/8)(9cos²θ − 5). Correct. Maximum ½ρu² at θ = 0, π; minimum −(5/8)ρu² at θ = π/2. Correct.
- θ = 0 is upstream: u = u x̂, the fluid streams with −u, i.e. towards −x, so θ = 0 (the +x axis) is the upstream stagnation point. Caption "angle θ from the upstream direction" correct.
- Plot: (9cos²θ − 5)/4 = 1 at 0 and π, −1.25 at π/2; range [−1.4, 1.1] contains it. Correct.
- Worked example: ρu²/8 = 1000·4/8 = 500 Pa; front 500·4 = +2000 Pa = ½ρu²; equator 500·(−5) = −2500 Pa; Bernoulli ½·1000·(4 − 9) = −2500 Pa; max speed 3 m/s. All correct. The example (water, 2 m/s) is the page's own; the notes have no numbers here.
- Quiz 1: answer 1 (irrotational and incompressible). Correct.
- Quiz 2: 0.5/(2π·0.1) = 0.796 m/s, answer 1 ("About 0.80 m/s"). Correct; distractors 0.08, 5 (= Γ/r) and 0.25 are wrong.
- Quiz 3: −2500 Pa, answer 2. Correct.
- Quiz 4: answer 1 (front-back symmetric pressure). Correct.
- Flashcards: 3D source φ = −A/r gives ∇φ = A r̂/r² (correct); vortex v_θ = Γ/2πr (correct); flow past sphere and surface pressure (correct). Flashcard 5 see item 3.
- Calcs file `calcs/8.09/potential-flow.yaml`: every entry recomputed by hand above (dipole Laplacian, boundary condition with A = R³/2, surface speed squared, surface pressure identity, the values). Ran `pytest tests/calc -k potential-flow`: 12 passed.

## Coverage and order
- The page follows the notes' order for Section 6.4 exactly: definition and (6.69)–(6.71); pressure (6.72)–(6.75); the three examples (uniform, point source 2D/3D with the delta-function remark, potential vortex); sphere example (6.77)–(6.87); zero force and the ideal-fluid explanation; "how common is potential flow" (6.88)–(6.90); discontinuous solutions and the pointer to viscosity; ends where 6.5 starts. Nothing left out except the dimensional-analysis aside (item 4).
- "Section 6.6" for viscosity is right (6.6 Viscous Fluid Equations; the notes say "shortly, after treating one final important example from ideal fluids", i.e. 6.5 Sound Waves).

## Licensing
- The notes' figures (sphere a)/b) on p. 122, discontinuous-flow sketch on p. 124) are not reproduced; the only graph is a generated Plot from (6.87). No "rights reserved" or "courtesy" notice in Chapter 6 (searched).
- Paraphrase: rewritten throughout. Closest sentences: "It has the right dimensions and meets both boundary conditions, on the sphere and at infinity" (notes: "This solution has the right dimensions and satisfies the boundary conditions on the sphere and at infinity") and the discontinuous-solution paragraph. Both short and reworded; acceptable, could be loosened further. No OpenStax/LibreTexts material.

## Notes
- leadsTo 6.5: correct; the notes say ∇·v ≠ 0 "plays an important role" and take ∇×v = 0 for the sound wave after (6.102). leadsTo 6.8: correct; Section 6.8 treats "the same problem we treated for an ideal fluid with potential flow" with viscosity, reuses the dipole, and finds the Stokes drag 6πηau (eq. 6.155).
- Prerequisite `separation-of-variables-spherical` (8.07 LN 6) is apt: it gives the ℓ = 1 exterior solution ∝ 1/r², i.e. the dipole used here. `static-fluids-steady-flows` is the preceding 8.09 section and the link `/courses/8-09/static-fluids-steady-flows` matches the course slug.
- No cosmology callout; none is needed for this foundation section, and the leadsTo stay inside 8.09.
- The page sentence "The term −ux already gives the right flow far away, so the disturbance must die off there" is a fair reading of (6.78) (strictly, φ′ could tend to a constant, which changes no velocity); no change needed.

## Resolution (2026-11-19, by the page author)

1. Fixed: the shift is now $\phi \to \phi - \int^t b(t')\,dt'$, with a bracket noting that the notes' plus sign would double $b(t)$.
2. Renamed to "d'Alembert's paradox" (title and flashcard). The summary keeps the plain description; the name is ours, not the notes'.
3. Rephrased: following a fluid element in incompressible flow, $d\vec\Omega/dt = (\vec\Omega\cdot\nabla)\vec v$, so an element without vorticity never gains any; a bracket notes that the notes' "conserved along flow lines" is stronger than what follows. Flashcard 5 now says the same, following the fluid.
4. Added the notes' aside that dimensional analysis also gives proportionality to $\vec u$.
5. "(Our remarks:)" now covers both vortex sentences.
6. Reworded the dimensions/boundary-condition sentence and the discontinuous-solutions paragraph further.
7. No change.

Status set to reviewed.
