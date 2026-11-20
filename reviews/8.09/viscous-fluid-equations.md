---
page: content/year-4/8.09/viscous-fluid-equations.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read: local copy, printed pp. 127-130 read from rendered page images; pp. 112 and 123-124 read in the text extraction for eq. (6.36) and the Section 6.4 vorticity argument)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (not opened separately; it is the landing page of the same PDF)
  - content/year-5/8.902/cmb-anisotropies.mdx (read, for the cosmology callout)
verdict: pass-with-notes
---

# Review: Viscous fluids: the stress tensor and the Navier-Stokes equation

Section 6.6 of Stewart's notes runs from the foot of printed p. 127 to the heading of Section 6.7 on p. 130. I compared every equation with the rendered page images (img-e/p-24 to p-27), not with the garbled text extraction.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The pressure and the vorticity", after (6.116) | The notes only say that the right-hand side is the new term (p. 129). Section 6.6 does not mention the Section 6.4 argument. | "That removes the ideal-fluid argument of Section 6.4: vorticity can be created at a surface and spread into the flow." This is correct physics and fits pp. 123-124 (vorticity conserved along stream lines, so viscosity is needed for boundary layers and wakes). It is not marked as the page's own remark. | Add "(our remark)" or "the notes do not spell this out here". |
| 2 | info | "The Navier-Stokes equation", after (6.114) | The notes give no interpretation of the ν∇²v term. | "The new term ν∇²v is a diffusion term ... like heat." Correct, but it is the page's own remark. The intro only marks the worked examples and the plot as its own. | Optionally add "(our remark)". |
| 3 | info | Boundary conditions | "the same for both the tangential and longitudinal components" (p. 129) | "both the normal and the tangential components" | This is a fair reading of the notes' "longitudinal". No change needed. |
| 4 | info | After (6.117) | "n̂ is the normal vector pointing out of the surface" | Adds "(into the fluid)" | This matches the signs of (6.117): the pressure pushes along −n̂, into the body. It is correct. |
| 5 | info | Frontmatter `summary` | (6.119) holds for the whole fluid, with v = 0 at infinity or on ∂V, and for incompressible flow. | "Friction always dissipates kinetic energy, at the rate (η/2)∫(...)² dV" with no conditions | The flashcard and the body both state the conditions. Optionally add "for incompressible flow" to the summary. |
| 6 | info | Stress tensor paragraph | "η > 0 & ζ > 0" | "ζ > 0" | Matches the notes. Physically it is ζ ≥ 0, which is not worth changing. |

Formula citations: every `<Formula>` matches its source. I checked the equation number, the printed page and the content:
- (6.107) p. 128, (6.108) p. 128, (6.109) p. 128, (6.110) p. 128, (6.111) p. 128 (both lines), (6.112) p. 128: all match, including the signs and the (ζ + η/3) factor.
- (6.113) and (6.114) p. 129; (6.115) p. 129 (the first form ∂/∂x_j(v_i ∂v_j/∂x_i) is the notes' form); (6.116) p. 129; (6.117) p. 129; (6.118) p. 129 (its display sits at the foot of p. 129): all match.
- (6.119) is on p. 130 and matches.
- No-slip v = v_wall (p. 129, no number) and ρTṠ = σ_ij ∂v_i/∂x_j (p. 130, inline, no number) are correctly cited by page without an equation number.
- The reference to (6.36) as the ideal-fluid vorticity equation is correct: (6.36) is ∂Ω/∂t = ∇×(v×Ω) in Section 6.2, p. 112, which the notes reuse in Section 6.4 (p. 123).

Claims I checked against the notes, all supported: friction where ∂v_i/∂x_j ≠ 0 (p. 127); continuity unchanged, while the Euler equation and the conservation of momentum, energy and entropy change (pp. 127-128); first order in the gradients; the stress tensor vanishes for constant v and for rigid rotation v = ω×r; the example ω_x(yẑ − zŷ) has ∇·v = 0 and ∂v_z/∂y + ∂v_y/∂z = 0; η multiplies a traceless tensor; the replacement Pδ_ij → Pδ_ij − σ_ij; f = 0 and ∇·v = 0 as the common case; the units [ν] = m²/s and [η] = kg/(m s); the divergence removes ∂v/∂t and ν∇²v, leaving ρ∇·[(v·∇)v] = −∇²P; the pressure equation acts like a source equation; the flux and dissipation reading of (6.118); "justifies η > 0"; the κ∇T conduction term.

The step σ_ij = η(∂_jv_i + ∂_iv_j) used in (6.119) is correctly marked as the page's own ("the notes use it without comment"). It is right: with ∇·v = 0 the −⅔ and ζ terms drop out.

## Arithmetic and answer checks
- Rigid rotation: ω_x x̂ × (x, y, z) = (0, −zω_x, yω_x), so v = ω_x(yẑ − zŷ). ∂v_z/∂y + ∂v_y/∂z = ω_x − ω_x = 0 and ∇·v = 0. The vorticity is 2ω (quiz 1 explanation). Correct.
- (6.111): ∂_k[η(∂_kv_i + ∂_iv_k − ⅔δ_ki∇·v)] = η(∇²v_i + ∂_i∇·v − ⅔∂_i∇·v), and the ζ term gives ζ∂_i∇·v. Total: η∇²v_i + (ζ + η/3)∂_i∇·v. Correct.
- Divergence of (6.113) with ∇·v = 0 and constant ρ: ∇·[(v·∇)v] = −∇²P/ρ. Then ∂_j(v_i∂_iv_j) = (∂_jv_i)(∂_iv_j) + v_i∂_i(∂_jv_j), and the last term is 0. Correct.
- (6.119) second equality: Σ(a_ij + a_ji)a_ij = ½Σ(a_ij + a_ji)², by relabelling i↔j in half the sum. Correct.
- Plot: v_x = A sin(ky)e^(−νk²t) with v_y = v_z = 0 has ∇·v = 0 and (v·∇)v = v_x∂_xv = 0. With uniform P, ∂_tv_x = −νk²v_x = ν∂²_yv_x. It is an exact solution, and the decay rate νk² is larger for shorter wavelengths. The curve exp(−τ)sin(y) with k = 1 matches the caption.
- Worked example (a): 1.0e-3/1000 = 1.0e-6 m²/s; 1.8e-5/1.2 = 1.5e-5 m²/s; ratio 15. Correct. The input values (water at about 20 °C, air at sea level) are standard.
- Worked example (b): v_x = sy, floor at y = 0 (no slip holds). σ_xy = σ_yx = ηs = 1e-3 × 100 = 0.1 Pa. With n̂ = ŷ out of the floor, F_x = σ_xj n_j = σ_xy = 0.1 N/m² along +x, so the water drags the floor along. Correct. Dissipation: σ_ij∂_jv_i = σ_xy s = ηs² = 1e-3 × 1e4 = 10 W/m³. The (η/2)Σ(...)² form gives the same, since the xy and yx terms are both s², so (η/2)(2s²) = ηs². Correct.
- Quiz 1 (answer 1), quiz 2 (answer 1; the distractor η_water/η_air = 55.6, "about 55"), quiz 3 (answer 1), quiz 4 (answer 1): all marked answers and explanations are correct.
- Flashcards: all five agree with the notes.
- Calcs file: I read all 9 entries and checked the formulas by hand (rotation-symmetric-zero, shear-wave-solves, dissipation-square, nu-water, nu-air, nu-ratio, eta-ratio, shear-stress, shear-heating). I ran `pytest tests/calc -k viscous-fluid` with the project's Python in this worktree: 9 passed. The `origin` tags are right (mit for the two identities taken from the notes, page-own for the rest).

## Coverage and order
- The page follows the notes' order: friction and modified equations, (6.107) and why it has this form, (6.108)-(6.109), (6.110)-(6.112), (6.113)-(6.114) with units, (6.115), (6.116), boundary conditions, (6.117), (6.118), (6.119), entropy and conduction. Nothing in Section 6.6 is left out.
- The worked example sits between the force law and the energy section, before (6.118). That is a reasonable spot, and it does not reorder MIT's material.
- Added material: the diffusion remark and plot, the worked example and the cosmology callout. The plot and the example are declared as the page's own. See findings 1 and 2 for the two unmarked remarks.
- leadsTo 8.09 6.7: correct. Section 6.7 is "Viscous Flows in Pipes and Reynolds Number" and starts with steady (Poiseuille) pipe flow, p. 130. Lecture 6.7 is in `_course.json`.
- Prerequisites `euler-equation-fluid-conservation` (6.2) and `potential-flow` (6.4) exist. The intro's claim (no drag on a sphere, no wakes) matches the potential-flow page and notes pp. 123-124.

## Licensing
- Section 6.6 has no figures, and the page reproduces none. The p. 130 duct figure belongs to Section 6.7 and is not used. The plot is generated from a formula.
- The PDF text extraction shows no "rights reserved" or "courtesy" notices in Chapter 6.
- No verbatim copying of sentences. Two sentences follow the notes' wording fairly closely but are rephrased: the divergence sentence ("removes both ... leaving ρ∇·[(v·∇)v] = −∇²P") and "Molecular forces between a viscous fluid and a surface make the fluid stick to it". Both are short and technical, so this is acceptable.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: it says only what `content/year-5/8.902/cmb-anisotropies.mdx` says. That page states that photon-electron coupling is imperfect, that photons random-walk out of small hot and cold patches and mix them, and that the smallest ripples (about 5 arcminutes) are smeared out, called Silk damping. The link `/courses/8-902/cmb-anisotropies` is right (8.902 slug "8-902", Lecture 17). The link between particle diffusion and viscosity, and the "early universe's version of friction", are marked "(our remark)" in the same sentence. The analogy is physically fair: photon shear viscosity and heat conduction are what damp the acoustic modes. The leadsTo "why" for 8.902 Lecture 17 matches that page.
- The page's link `/courses/8-09/potential-flow` uses the course slug "8-09", which is correct.

Verdict: pass-with-notes. There are no errors. One warning (an unmarked own remark) and some info items.

## Resolution (2026-11-19, by the page author)

1. The sentence after (6.116) is now marked "(Our remark:)".
2. The diffusion reading of ν∇²v is now marked "(our remark)".
3.–4. No change.
5. The summary now states the conditions (incompressible flow, at rest on the boundary).
6. No change (follows the notes).

Status set to reviewed.
