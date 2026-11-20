---
page: content/year-5/8.902/jeans-equations.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec06.pdf (read; local copy, PDF pages 1–6 = printed pp. 37–42 rendered as images and compared in detail, page 7 = OCW end page; text also extracted with pdftotext for the notice check)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec07.pdf (read; local copy, text only, to check the `leadsTo` claim)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDFs above)
verdict: pass-with-notes
---

# Review: The distribution function, the collisionless Boltzmann equation and the Jeans equations

The source is section 3.C "Phase-space distribution function" of the 8.902 Lecture 6 notes (Vogelsberger, Fall 2023). Printed p. 37 opens with the luminosity–velocity relations, eqs. (158)–(163) (covered by `orbits-and-epicycles`), then 3.C and eq. (164). p. 38: (165)–(170); p. 39: (171)–(176); p. 40: (177)–(178); p. 41: (179)–(182) and the list of spherical simplifications; p. 42: (183)–(186), then the start of 3.D "Stability of stellar systems" (Lecture 7 page). Neither the luminosity–velocity relations nor 3.D is counted as missing. The Lecture 7 notes repeat eqs. (183)–(186) at their start before going on to the Jeans instability.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Weighing a galaxy", paragraph after eq. (186) | p. 42: "the last line can be measured with observations"; the dispersion in (186) is $\sigma_{rr}^2$, the 3D radial dispersion. | "Everything on the right can be measured: the density profile of a tracer population … and its velocity dispersion along the line of sight." | This equates $\sigma_{rr}$ with the line-of-sight dispersion. What is observed is the projected (line-of-sight) dispersion, which mixes $\sigma_{rr}$ and $\sigma_t$ with weights that depend on $\beta$; $\sigma_{rr}(r)$ follows only after deprojection with an assumed $\beta$ (which is part of why $\beta$ is the main uncertainty). Suggest: "… and, from its line-of-sight velocities, its radial velocity dispersion (after correcting for projection, which itself depends on $\beta$)". |
| 2 | info | Bullet list before "Collecting the terms" (force term) | p. 40, eq. (177): term ③, the integral $\int d^3v\,v_j\,\partial_{\vec x}\phi\cdot\partial_{\vec v}f$, equals $-n\,\partial\phi/\partial x_j$; it enters eq. (176) with a minus sign, so contributes $+n\,\partial\phi/\partial x_j$. | "the force term, integrated by parts in velocity: $-n\,\partial\phi/\partial x_j$", and the next formula has $+n\,\partial\phi/\partial x_j$. | Correct as the value of the integral, but a reader adding the three bullets gets the wrong sign. Suggest "the force integral is $-n\,\partial\phi/\partial x_j$, which enters with a minus sign: $+n\,\partial\phi/\partial x_j$". |
| 3 | info | Quiz 2 explanation | p. 41, eq. (182): the term is labelled "pressure". | "$n\sigma^2$ acts as a pressure (per unit mass)." | With $n$ a number density, $n\sigma^2$ is pressure divided by the stellar mass $m$ ($P = mn\sigma^2 = \rho\sigma^2$, as the Lecture 7 notes write). "Per unit mass" is loose; suggest "$n\sigma^2$ (times the stellar mass) acts as a pressure". |
| 4 | info | Plot | Not in the notes (page's own). | Sliders $s \in [-4,-2]$, $g \in [-0.5, 0.5]$, $\beta \in [-0.5, 1]$. | At $s = -2$, $g = 0.5$, $\beta = 1$ the curve reaches $-0.5$ (a negative, unphysical mass) and is clipped by `range={[0, 6]}`. Harmless; optionally hide negative values with `… >= 0 ? … : NaN`. |
| 5 | info | "The Jeans equations", term-by-term reading | p. 41, eq. (182): "kinematic viscosity/shear". | Quotes the notes' wording and calls it the advective term. | Correct: $\sum_i\bar v_i\,\partial\bar v_j/\partial x_i$ is the advective (convective) acceleration, not viscosity. The remark is fair and attributed. None. |
| 6 | info | "Weighing a galaxy": "mass–anisotropy degeneracy"; "stars, globular clusters, satellite galaxies"; "can be different in different directions" | Not in the notes (p. 42 only says "uncertainty from β"). | Standard terminology and correct physics, added by the page. | None needed. |

Every Formula checked against the rendered PDF; equation numbers and printed pages are right: (164) p. 37; (165) p. 38; (166)–(167) p. 38; (168) p. 38; (169) p. 38; (170) p. 38; (171) p. 39; (172) p. 39; (173) p. 39; (175) p. 39; (178)–(179) pp. 40–41; (180) p. 41; (181) p. 41; (183) p. 42; (184) p. 42; (185) p. 42; (186) p. 42 (first and last lines of the four). Inline references (eq. 174), (eq. 176), (eq. 177), (eq. 182) are also correct. Every formula reproduces the notes' physics and notation (σ_rr, σ_t, β, M(<r), n, v̄_i).

Bracketed slip notes and remarks, each verified against the PDF:
- Eq. (178), p. 40: the last term is printed $n\,\partial\phi/\partial x_i$; eq. (179) on p. 41 and the derivation of term ③ (ending in $-n\,\partial\phi/\partial x_j$) have $x_j$. The bracket is correct, and the page's "Collecting the terms" formula uses $x_j$.
- Moment naming, pp. 38–39: the notes call $n$, $\bar v_i$ and $\sigma_{ij}^2$ the "first", "second" and "third" moments (and the integrated CBE and its $v_j$-weighted version the "first" and "second" moments). The usual counting is zeroth, first, second. The bracket is correct.
- "kinematic viscosity/shear", p. 41: see finding 5; correct.
- $f$ as probability vs count: eq. (165) normalises $f$ to 1, yet eq. (170) calls $\int f\,d^3v$ "the density $n$" and the Jeans equation treats $n\sigma^2$ as a pressure. With the normalisation of (165), $n$ would be a probability density; the page's remark that $f$ is taken to count stars (so $n$ is a number density, $N$ times that) is correct and resolves the inconsistency.

Derivations checked: (168) with $\dot{\vec x} = \vec v$ independent of $\vec x$ and $\dot{\vec v} = -\nabla\phi$ independent of $\vec v$ gives (169); the three terms of (173) give (175); in (177) term ① $= n\,\partial_t\bar v_j - \bar v_j\sum_i\partial_i(n\bar v_i)$ using (175), term ② $= \sum_i\partial_i[n(\sigma_{ij}^2 + \bar v_i\bar v_j)]$, term ③ by parts $= -n\,\partial_j\phi$; expanding $\partial_i(n\bar v_i\bar v_j) = \bar v_j\partial_i(n\bar v_i) + n\bar v_i\partial_i\bar v_j$ cancels the second term of (178) and gives (180), then (181). (186): $\frac{r^2}{n}\partial_r(n\sigma^2) = r\sigma^2(d\ln n/d\ln r + d\ln\sigma^2/d\ln r)$, so (186) follows from (185). The page's statement that $df/dt = 0$ along a star's path matches the notes' remark below (169).

## Arithmetic and answer checks
- Worked example (a): $2 \times 150^2 \times 10^4 / 0.0043 = 1.0465\times10^{11} \to 1.05\times10^{11}\,M_\odot$ (with $G = 4.30091\times10^{-3}$ pc (km/s)² $M_\odot^{-1}$: $1.0463\times10^{11}$, same rounding). $v_c = \sqrt{GM/r} = \sqrt{2}\,\sigma = 212.1 \to 212$ km/s. Correct; $v_c$ independent of $r$, so "flat rotation curve" is right. 10 kpc = $10^4$ pc correctly used.
- Worked example (b): bracket $-3$, $M = 3\sigma^2r/G = 1.570\times10^{11} \to 1.6\times10^{11}\,M_\odot$, ratio 3/2 = "50% more". Correct.
- Plot: $M/(\sigma^2r/G) = -(s + g + 2\beta)$ is eq. (186) divided by $\sigma_{rr}^2r/G$. Defaults $s = -3$, $g = 0$: $\beta = -0.5 \to 4$, $\beta = 0 \to 3$ (the marked point (0, 3) is correct), $\beta = 1 \to 1$. Caption correct. Slider extremes: maximum 5.5 (fits the range 0–6), minimum −0.5 (finding 4).
- Quiz 1 (answer 1): correct; explanation correct ($\dot{\vec x} = \vec v$, $\dot{\vec v} = -\nabla\phi$).
- Quiz 2 (answer 2, the $-\frac1n\sum_i\partial(n\sigma_{ij}^2)/\partial x_i$ term): correct per eq. (182); see finding 3 for the explanation wording.
- Quiz 3 (answer 1, $M = 2\sigma^2r/G$): $-(r\sigma^2/G)(-2 + 0 + 0)$; correct; $v_c^2 = GM/r = 2\sigma^2$, singular isothermal sphere, correct.
- Quiz 4 (answer 1, nearly radial): $\beta = 1 - \sigma_t^2/\sigma_{rr}^2 \to 1$ when $\sigma_{rr}^2 \gg \sigma_t^2$, matching p. 42; "$\beta < 0$ tangential" correct.
- Flashcards: CBE (169), Jeans equation (181), mass formula (186) with β (184). All correct.
- `calcs/8.902/jeans-equations.yaml`: 5 entries (isothermal mass, $v_c$, steeper-tracer mass, plot at β = −0.5 and β = 1); each matches the page text it quotes. `npm run calc:test -- -k jeans-equations`: 5 passed, 0 failed. The "50% more" and the marked point at 3 are not stored; both trivial (optional to add).

## Coverage and order
- The page follows the notes' order: definition of $f$ (164) and normalisation (165); CBE via the 6D continuity equation (166)–(169) and the $df/dt = 0$ remark; moments (170)–(172); first moment of the CBE and continuity equation (173)–(175); second moment and the Jeans equation (176)–(181); interpretation (182); spherical simplifications, radial Jeans equation (183), the three orbit limits, β (184), (185) and the mass estimate (186).
- Left out: the intermediate second line of (168) ($\partial_{\vec x}(f\dot{\vec x}) + \partial_{\vec v}(f\dot{\vec v})$), the line-by-line integration by parts of (177) (summarised), the middle two lines of (186), and the notes' remark about taking the limits $\vec x, \vec v \to \infty$ when deriving from $df/dt = 0$. None of these loses content.
- Additions: the isothermal-sphere worked example, the β plot, the mass–anisotropy degeneracy, the tracer examples. All correct apart from finding 1.
- `leadsTo` 8.902 Lecture 7 ("Stability Criteria" in `_course.json`): the Lecture 7 notes continue 3.D "Stability of stellar systems" with the Jeans instability, Jeans swindle, and Jeans length and mass. The claim is accurate. No cosmology callout; none needed on this 8.902 page. Prerequisites `orbits-and-epicycles` and `relaxation-times` exist.

## Licensing
- pdftotext of the Lecture 6 notes finds no "rights reserved" or "courtesy" notice; printed pp. 37–42 contain no figures. The page has no images; its only graph is its own Plot computed from eq. (186).
- No verbatim copying beyond short standard phrases ("phase-space distribution function", "collisionless Boltzmann equation", "anisotropy parameter", "nearly circular/radial orbits", the quoted "kinematic viscosity/shear", which is attributed). The introductory sentences are rewritten. The worked example is original (the notes have no numbers). No OpenStax or LibreTexts material.

## Notes
- No em dashes on the page.
- The page uses $\phi$ for the potential and $\phi$ as a coordinate subscript in $\bar v_\phi$, $\sigma_{\phi\phi}$, $\sigma_{r\phi}$, as the notes do; only a subscript, so no real clash, but a reader may notice it.
- "Single orbits … a galaxy of $10^{11}$ stars": a round order of magnitude not in the notes; fine.

## Resolution (2026-11-17, by the page author)

1. Warning: the paragraph after eq. (186) now says the notes call the right side measurable with the radial dispersion σ_rr, while telescopes measure the line-of-sight dispersion (a mixture of σ_rr and σ_t), whose conversion to σ_rr depends on β.
2. Info: the force-term bullet now gives the integral and says it contributes +n ∂φ/∂x_j.
3. Info: quiz 2's explanation now writes P = ρσ² with ρ = mn.
4. Info: the plot now hides negative (unphysical) masses.

Status set to `reviewed`.
