---
page: content/year-4/8.09/static-fluids-steady-flows.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read: Section 6.3, printed pp. 115-120, every equation read from page images; the start of Section 6.4, pp. 120-124, read from the text extraction to check the forward link)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (not opened separately; it is the resource page for the same PDF)
  - content/year-5/Ferreras/galaxy-clusters.mdx (read, for the cosmology callout)
verdict: pass-with-notes
---

# Review: Fluids at rest and steady flows: hydrostatics, Bernoulli and the Pitot tube

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Pitot section, bracketed slip note | p. 120 prints $\mathcal P_s = \mathcal P_\infty + \tfrac12\rho_a g(z_o+z_s)$ | $P_s = P_\infty + \rho_a g(z_o+z_s)$, with a note on the slip | None needed. **Slip confirmed independently.** With the half, $P_o - P_s = \tfrac12\rho_a v_\infty^2 - \tfrac12\rho_a g(z_o+z_s)$, while lines 3-4 give $P_o - P_s = \rho_l g\Delta h - \rho_a g(z_o+z_s+\Delta h)$; equating leaves $\tfrac12\rho_a v_\infty^2 = g(\rho_l-\rho_a)\Delta h - \tfrac12\rho_a g(z_o+z_s)$, so a leftover term remains. Without the half the $z_o+z_s$ terms cancel and (6.67) follows. Physically, Bernoulli from far upstream (height of $o$) to $s$ (same speed $v_\infty$, depth $z_o+z_s$ lower) gives the full $\rho_a g(z_o+z_s)$. |
| 2 | warning | Pitot section, "Hydrostatics in the still air and liquid ... gives" and the bracket "hydrostatics gives $\rho_a g(z_o+z_s)$" | The notes call these "Bernoulli equations" and say the air at $s$ moves at the free-stream speed | Attributes the $P_s$ line to hydrostatics in still air, although the page itself says the air at $s$ passes at the free-stream speed | Say that $P_s$ follows from Bernoulli between far upstream and $s$: the speeds are equal, so only the height term remains, which has the hydrostatic form $\rho_a g(z_o+z_s)$. Hydrostatics proper applies to $P_m$ (still air in the tube, still liquid). |
| 3 | info | Steady incompressible flow paragraph | p. 116: "Continuity now says $\nabla\rho = 0$ so $\rho$ is constant as well" | $\vec v\cdot\nabla\rho = 0$, density constant along the flow, "the notes take it constant throughout" | The rephrasing is **fair and more accurate**: steady continuity $\nabla\cdot(\rho\vec v) = \vec v\cdot\nabla\rho + \rho\nabla\cdot\vec v = 0$ with $\nabla\cdot\vec v = 0$ gives only $\vec v\cdot\nabla\rho = 0$ (a density stratified across stream lines is allowed). Optional: say in brackets that the notes write $\nabla\rho = 0$, so a reader comparing does not think something was missed. |
| 4 | info | Formula (6.56) | Printed $\int_S d\mathbf S\cdot(\rho\mathbf v) = 0$ with the text "for any closed surface $S$" | $\oint_S$ | Fine (closed surface is what the notes say); no change needed. |
| 5 | info | Stream lines section, last sentence (p. 119) | The notes restate Bernoulli as a new numbered equation (6.66), "constant along stream lines" | Refers back to (6.57), no mention of (6.66) | Optional: "(6.57), restated in the notes as (6.66), ...", so every numbered equation of the section is accounted for. |
| 6 | info | Archimedes paragraph | Notes argue from the bottom pressure $\rho gz$ times area for a body poking out of the surface (figure p. 116) | Same argument, but the statement says "a submerged body" | For a fully submerged block the net push is bottom minus top pressure, which still gives $\rho g V$. Optional: say "a floating or partly submerged block" or add the top face. |
| 7 | info | Pitot formula, $P_m$ line | Notes print $z_0$ in the $P_m$ line and figure, $z_o$ elsewhere | $z_o$ throughout | Fine; harmless notational tidy-up. |

Formula citations checked against the page images: (6.52) p. 115, (6.53) p. 115, (6.54) p. 116, (6.55) p. 116, (6.56) p. 116, (6.57) p. 116, (6.58) p. 116, (6.59) p. 117, (6.60) p. 117, (6.61) p. 117, (6.62) p. 117, (6.63) p. 118, (6.64) p. 118, (6.65) p. 118, unnumbered Pitot equations p. 120, (6.67) p. 120, (6.68) p. 120. All equation numbers, printed pages and contents match (apart from the slip in row 1, which the page flags). The reference to the Euler equation as (6.34) is correct (6.34 is the potential form with $\Phi$). The cross-product component $v_y\,dx/ds - v_x\,dy/ds$ matches p. 118.

## Arithmetic and answer checks
- Scale height: $287 \times 250/9.81 = 7313.97$ m; page "≈ 7310 m, about 7.3 km" correct. $8800/7314 = 1.2032$; $e^{-1.2032} = 0.3002$; "≈ 0.30", "under a third" correct.
- Plot: isothermal curve $e^{-gz/R'T}$ and dashed $1 - gz/R'T$ (constant ground-level density $\rho_0 = P_0/R'T$), ending at one scale height: correct. Over the slider range $T = 200$-$300$ K the scale height is 5.85-8.78 km, inside the 0-20 km domain.
- Quiz 1: answer 1 (exponential) correct; explanation correct.
- Quiz 2: $v_2 = 1 \times 20/5 = 4$ m/s; $\tfrac12 \cdot 1000 \cdot (16-1) = 7500$ Pa; also via (6.60): $\tfrac12 \cdot 1000 \cdot 16 \cdot (1 - 1/16) = 7500$ Pa. Answer index 2 ("7.5 kPa") correct. Distractor 8 kPa ($\tfrac12\rho v_2^2$) is a sensible wrong answer.
- Quiz 3: $\sqrt{2 \times 9.81 \times 1.8} = \sqrt{35.316} = 5.943$ m/s; answer index 1 ("about 5.9 m/s") correct.
- Quiz 4: answer index 2 (stagnation point) correct; $P_o = P_\infty + \tfrac12\rho v_\infty^2$ matches p. 119.
- Pitot example: $1000/1.2 = 833.33$; $2 \times 9.81 \times 832.33 \times 0.10 = 1633.0$ m²/s², $v = 40.41$ m/s, $\times 3.6 = 145.5$ km/h ("about 145" fine); approximate $2 \times 9.81 \times 833.33 \times 0.10 = 1635.0$, $v = 40.44$ m/s, rounds to 40.4; correction $1/833$ in $v^2$, half in $v$: correct.
- Flashcards: all five correct (hydrostatics, Bernoulli, stream vs flow lines, Torricelli, Pitot).
- Calcs file: entries checked by hand and by `node scripts/calc-test.mjs -k static-fluids`: 16 passed. The `pitot-elimination` identity correctly encodes the corrected algebra ($\rho_l g\Delta h - \rho_a g(z_o+z_s+\Delta h) + \rho_a g(z_o+z_s) = g(\rho_l-\rho_a)\Delta h$) and is marked `origin: slip`.

## Coverage and order
- Page follows the notes' order exactly: static fluids (6.52), liquid (6.53), isothermal atmosphere (6.54-6.55), Archimedes, convection remark, steady flows (6.56-6.58), narrowing pipe (6.59-6.60), tank jet (6.61-6.62), stream lines (6.63-6.64), flow lines (6.65), equivalence in steady flow and Bernoulli along stream lines (6.66), stagnation point, Pitot tube (6.67-6.68).
- Nothing in Section 6.3 is left out; (6.66) is covered in words but not by number (row 5).
- Additions: the term "scale height" (marked "our name for it"), two original worked examples, the plot. All fine.

## Licensing
- No figure from the notes is reproduced (the page says so); the only graphic is a formula-generated Plot. Chapter 6 contains no "rights reserved" or "Courtesy of" notice (checked by grep on the extracted text).
- Wording is the page's own; a few short standard phrases echo the notes ("what flows in ... flows out", "pressure and no kinetic energy" rendered as "all of the energy there is pressure, none kinetic"), acceptable. Worked examples (250 K atmosphere to 8.8 km; water/air Pitot with 10 cm) are original; the notes quote no numbers in this section.
- No OpenStax or LibreTexts material.

## Notes
- Forward link to 8.09 Section 6.4 (potential flow, pp. 120-124): the claim is supported. The notes solve $\nabla^2\phi = 0$ for the velocity (6.70-6.71), then get the pressure from the Euler equation in Bernoulli form (6.72-6.75, time-dependent in general) and, for the steady flow past a sphere, from "Bernoulli's equation" (p. 123, before 6.87). "The same Bernoulli equation" is accurate for steady flows; strictly the unsteady case uses a time-dependent version (6.75). Optional softening: "a Bernoulli equation of the same kind".
- Cosmology callout and leadsTo to Ferreras Section 2.3: supported by `content/year-5/Ferreras/galaxy-clusters.mdx` (hydrostatic equilibrium of the X-ray gas, Eq. 2.7, mass inside $r$ from gas density and temperature, ordinary matter falls far short). Fairly attributed to Ferreras. The callout writes the balance as $\nabla P = -\rho\nabla\Phi$, the general form of (6.52); correct.
- The link to Section 6.4 (`potential-flow`) is expected not to resolve yet (no page exists); the leadsTo will become a link when it does.
- Prerequisite `euler-equation-fluid-conservation` exists and the internal link `/courses/8-09/euler-equation-fluid-conservation` matches the course slug `8-09`.

## Resolution (2026-11-19, by the page author)

1. Slip bracket kept.
2. Reworded: P_o from Bernoulli on the stream line to o; P_s from Bernoulli between far upstream and s (equal speeds, so only a height term of hydrostatic form); P_m from hydrostatics in the still air of the tube and in the liquid. The slip bracket now says Bernoulli with equal speeds gives the full ρ_a g(z_o + z_s).
3. Added that the notes write ∇ρ = 0.
4. No change.
5. Added that the notes restate the equation as (6.66) on p. 119.
6. Archimedes: "a floating or submerged body", argued for a block floating upright with its bottom at depth z.
7. No change.
8. The 6.4 leadsTo now says the pressure comes from the Euler equation in Bernoulli form (for a steady flow, the same Bernoulli equation).
9. Expected; resolves when Section 6.4 is added.

Status set to reviewed.
