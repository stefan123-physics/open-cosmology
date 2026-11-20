---
page: content/year-4/8.09/euler-equation-fluid-conservation.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read: local copy, text plus rendered images of printed pp. 112-115 for every equation; Sections 6.3, 6.4 and 6.6 checked in the text for the forward claims)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (not opened separately; it is the resource page of the same PDF)
  - content/year-5/8.902/jeans-equations.mdx and content/year-5/8.902/stability-jeans-toomre.mdx (read, for the callout and leadsTo)
verdict: pass-with-notes
---

# Review: The Euler equation, momentum flux and Bernoulli's equation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Flashcard "The Euler equation for an ideal fluid" | (6.34): with f = −ρ∇Φ the term appears as **+∇Φ** on the left | "With f = −ρ∇Φ the right side becomes −∇Φ on the left" | Confusing sign: f/ρ = −∇Φ on the right, i.e. **+∇Φ** on the left. Write "the right side becomes −∇Φ, or +∇Φ moved to the left", or just give (6.34). |
| 2 | warning | Cosmology callout | 8.902 Jeans equation (eq. 182 in its notes, per our page jeans-equations.mdx) has an anisotropic "pressure" nσ²_ij | "have exactly the form of the Euler equation (6.34), with the stars' random motions in place of the pressure" | "exactly" overstates: the form matches only with a pressure tensor, or with isotropic dispersion (P = ρσ²). Say "the form of the Euler equation, with the random motions acting as a (possibly direction-dependent) pressure". |
| 3 | info | eq. (6.49) bracket | U = ∫ d(δV) P/δm = ∫ dρ′ P(ρ′)/ρ′² = … (no minus sign) | Adds the minus sign and notes it | Verified independently, the slip is real: from (6.48), d(Uδm) = −P d(δV), so U = −∫ d(δV) P/δm; with δV = δm/ρ, d(δV) = −δm dρ/ρ², giving +∫ P dρ/ρ². Keep. |
| 4 | info | eq. (6.51) bracket | right side (1/ρ) ∂ρ/∂t + ∂Φ/∂t | (1/ρ) ∂P/∂t + ∂Φ/∂t, with the slip noted | Verified independently: dividing the right side of (6.50), (∂P/∂t + ρ ∂Φ/∂t)δV, by δm = ρδV gives (1/ρ)∂P/∂t + ∂Φ/∂t; ∂ρ/∂t cannot arise (it is not even dimensionally an energy rate per mass: (1/ρ)∂ρ/∂t has units 1/s). Keep. |
| 5 | info | "Boundary conditions and the fifth equation", bracket on isothermal gas | "A simple example is an ideal gas at constant temperature, where P = ρR′T" | Adds that an isothermal gas exchanges heat, so is strictly not the dS/dt = 0 case | Correct: isothermal compression of an ideal gas requires heat exchange and changes S; the example serves only as a barotropic P(ρ). Fair and clearly bracketed. |
| 6 | info | Throughout | Pressure written as script 𝒫 | Plain P | Harmless notation change; no conflict on the page. |
| 7 | info | Euler section, "so the equation is non-linear (p. 113)" | The non-linearity remark opens Section 6.2.3 | Moved forward into the Euler section | Small reorder, cited to the right page; acceptable. |

All 22 Formula components were compared with the rendered pages:
- (6.30), (6.31), (6.32), (6.33), (6.34): p. 112, correct. (6.30) on the page omits the notes' first step "F_x(x) − F_x(x+δx)", which is fine.
- (6.35), (6.36), (6.37): p. 113, correct; (6.38) quoted inline, correct. (6.39): p. 113, correct.
- (6.40), (6.41): p. 113, correct (page writes v_j ∂v_i/∂x_j and the 1/ρ ∂P/∂x_i term exactly as the notes).
- (6.42), (6.43), (6.44), (6.45), (6.46), (6.47), (6.48): p. 114, correct.
- (6.49), (6.50), (6.51): p. 115, correct apart from the two noted slips (items 3, 4). I re-derived (6.45) → (6.47) → (6.50): v·∇Φ = dΦ/dt − ∂Φ/∂t with ρδV constant gives (6.45); substituting (6.46) for (v·∇P)δV gives (6.47); (6.48) moves P∇·v δV to the left as d(ρUδV)/dt, giving (6.50). All consistent with the page.
- The vector identity v × (∇×v) = ∇(v²/2) − (v·∇)v is correct (also checked numerically by the calcs entry).

## Arithmetic and answer checks
- Water jet: ρv² = 1000 × 25 = 25,000 Pa; × 2×10⁻⁴ m² = 5.0 N; 5/9.81 = 0.51 kg ("half a kilogram"). Correct. Physics: steady-state momentum flux through a control surface, outgoing water has no x-momentum, so F = ρv²A. Correct.
- Isothermal gas: R′T = 287 × 288 = 82,656 J/kg; × ln 2 (0.693147) = 57,293 J/kg ≈ 57,300 J/kg. Correct. U = R′T ln(ρ/ρ₀) from ∫ R′T dρ′/ρ′ is correct; sign (compression raises U) agrees with (6.48).
- Plot: adiabatic U = ∫ P₀(ρ′/ρ₀)^γ/ρ′² dρ′ = (P₀/ρ₀)((ρ/ρ₀)^(γ−1) − 1)/(γ − 1) re-derived; isothermal ln(ρ/ρ₀) in units P₀/ρ₀ correct. Curve values stay inside range [−1, 2] for γ ∈ [1.1, 1.67] and ρ/ρ₀ ∈ [0.5, 3] (extremes ≈ −0.69 and ≈ 1.62).
- Quiz 1 (answer −∇P δV): correct. Quiz 2 (advective term): correct. Quiz 3 (5 N): correct, explanation consistent. Quiz 4 (U = ∫ P dρ/ρ²): correct; "for an incompressible fluid it is constant" is right.
- Flashcards: all correct except the confusing sign wording in the Euler card (item 1). Momentum flux card and Bernoulli card (with ∂P/∂t) correct.
- Calcs file: ran `pytest tests/calc -k euler-equation-fluid`: 10 passed. I also checked by hand that the vorticity-identity sample field v = (x²y, x + y³) gives Ω_z = 1 − x² and that both sides of the entry are the x-components claimed; the momentum-rearranged entry is the 1D form of (6.40)→(6.41); the bernoulli-division entry encodes the corrected (6.51).

## Coverage and order
- Sections 6.2.2 and 6.2.3 (pp. 112-115) are covered completely and in the notes' order: ideal fluid, pressure force (6.30-6.31), Newton's law and Euler (6.32-6.33), the two rewritings (6.34-6.36), boundary conditions (6.37-6.38), counting and entropy (6.39) with the isothermal example, nonlinearity, momentum conservation (6.40-6.43) with the scalar/vector/tensor remark, energy (6.44-6.50) with the work/U interpretation and the "constant energy along the flow" remark, Bernoulli (6.51). Nothing omitted.
- Added (own material, clearly marked as such in the intro): the water-jet example, the isothermal-gas U example, and the U(ρ) plot.
- Forward claims checked: Section 6.4 does use (6.36) to show ∇×v is conserved along flow lines, so a flow uniform at infinity stays irrotational (eqs. 6.88-6.90): matches the page. The tangential (no-slip) condition does come with viscosity in Section 6.6 (boundary conditions discussed there): matches. Section 6.3 (pp. 115-120) covers static fluids/pressure with height (6.52-6.53), the isothermal atmosphere, pipes, the water jet from a tank, stagnation points and the Pitot tube: the leadsTo text matches.

## Licensing
- The notes' fluid-box figure (p. 112) is not reproduced; the page says so. No "rights reserved" or "Courtesy of" notice appears in the Chapter 6 text. No OpenStax/LibreTexts material.
- Paraphrase is the page's own throughout. Closest sentence: "If P and Φ do not depend explicitly on time at any fixed point, which is common, each fluid element keeps its total energy as it moves" vs the notes' "If P and Φ are not explicitly dependent on time at any point in space (which is often the case), then any fluid element has a constant total energy as it moves along"; reworded enough, and a single sentence of a derivation. "The terms with partial time derivatives act as sources" is a near-copy of a short phrase; acceptable.
- Worked examples are original (the notes have no numbers in these sections).

## Notes
- 8.902 Lecture 6 page (jeans-equations) does derive the Jeans equations by velocity moments and calls the dispersion term a pressure (anisotropic): leadsTo is correct; only the callout's "exactly" overstates (item 2).
- 8.902 Lecture 7 page (stability-jeans-toomre) does linearize the continuity and Euler(Jeans) equations with Poisson's equation about a uniform static background, getting ω² = v_s²k² − 4πGρ₀: sound waves below λ_J, collapse above. Callout and leadsTo are accurate.
- Links to /courses/8-09/potential-flow do not resolve yet (expected, Section 6.4 not written).
- Not verified: the OCW resource page HTML itself (only the PDF it serves).

## Resolution (2026-11-19, by the page author)

1. Flashcard reworded: the right side is −∇Φ, which moves to the left as +∇Φ.
2. Callout: "exactly" dropped; it now says the stars' random motions act as a pressure that can differ from one direction to another (a tensor rather than one number).
3.–9. No change needed (slip brackets kept; notation, ordering and paraphrase as they are).

Status set to reviewed.
