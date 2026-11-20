---
page: content/year-3/8.044/microcanonical-ensemble.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l7/ (read: the 18-page slide PDF mit8_044s13_l7.pdf, text via pdftotext page by page; slide 3 also checked as an image)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_mcrocanoncl/ (read: the 10-page notes PDF mit8_044s13_mcrocanoncl.pdf, pp. 1–6 page by page; p. 1 also checked as an image)
  - mit8_044s13_l8.pdf (Lecture 8 slides, text only, to check the leadsTo claim and the "next lecture's temperature" remark)
verdict: needs-changes
---

# Review: Statistical mechanics and the microcanonical ensemble

PDF page n = slide L7B n for n = 1–17 (page 18 is the OCW notice). In the notes, the printed page number equals the PDF page number (checked for pp. 1–6).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The ensemble", "The system" (notes p. 1; slide 3) | The list of fixed quantities is E, V, N, **M⃗ or H⃗** (magnetization or magnetic field) and **𝒫⃗ or ℰ⃗** (slide 3; the notes have 𝒫⃗ or ℋ⃗): the script, vector 𝒫 is the electric **polarization**, paired with the electric field. The notes speak of "mechanical and electromagnetic constraints". | "with enough constraints (a magnetic moment or field, a pressure, and so on)" | Replace "a pressure" with "an electric polarization or field". A pressure cannot be in the list: V is already fixed, and P is its conjugate variable, not an independent constraint. |
| 2 | warning | "The ensemble", "The probability density" | Notes p. 1 name the choice: the "postulate of equal a priori probabilities", "the fundamental basis of all of statistical mechanics". | Gives the content of the postulate but not its name. | Add the standard name (it is the term students will meet everywhere) and that the notes call it the basis of statistical mechanics. |
| 3 | warning | "The ensemble", sentence after the energy-shell formula | Notes p. 1: "The number of items in the list of fixed quantities, including E, is the number of independent macroscopic variables." | "The number of fixed quantities, including $E$, is the number of independent macroscopic variables." | Nearly verbatim. It is one sentence, but rewrite it, e.g. "Each fixed quantity, $E$ among them, is one independent macroscopic variable; the notes keep just three: …". |
| 4 | info | Quantum version (notes p. 2; slide 5) | $p(k) = 1/\Omega$ for $E < \langle k\lvert H\rvert k\rangle \le E + \Delta$; the source does not say "eigenstates". | "the number of accessible energy eigenstates $k$, those whose energy $E_k$ (the expectation value of $H$ in the state)". | Correct, but "eigenstate" plus "expectation value" is redundant; either drop "energy eigenstates" for "states" or drop the bracket. |
| 5 | info | Notation | Slides 14–17 write the single-component energy as a script E (ℰ) with $\langle ℰ\rangle \equiv E/3N$. | Uses $\epsilon$ and $\langle\epsilon\rangle$. | Acceptable; optionally say the slides write it as a script E. |
| 6 | info | Notation | The slides and notes use ρ both for the phase-space density (slides 1–2) and for the density of states (slide 7; notes p. 3). | Same double use; the symbols entry for ρ explains both. | Optional: one sentence noting that the two ρ's are different quantities. |
| 7 | info | Summary in frontmatter and text after slide-17 formula | Slides do not name Maxwell. | "the Maxwell distribution of a velocity component". | Correct physics; acceptable as the page's own naming. |
| 8 | info | Plot | Page's own illustration (marked). | x-axis "ε (fractional depth below the surface)"; caption defines ε through energies $(1-\varepsilon)E$ to $E$. | The variable is a fractional depth in **energy**, not in radius (radial depth is about ε/2). Suggest the axis label "ε (fractional energy below E)". Also, the slider is $3N/2$, so its maximum of 300 means 600 degrees of freedom; the caption's "a few hundred degrees of freedom" is still fair (with 3N = 300, 95% lies within 2%). |

Formulas checked and found correct (content and citation): Liouville's theorem (slide 1, sum to 3N, as on the slide) and the Hamiltonian form given inline (slide 1; signs verified with $\dot p_i = -\partial H/\partial q_i$, $\dot q_i = \partial H/\partial p_i$); $\rho = \rho(H)$ gives $\partial\rho/\partial t = 0$ as a sufficient condition (slide 2); energy shell $E < \text{energy} \le E + \Delta$ (notes p. 1; the slide writes strict <, the page follows the cited notes); microcanonical density and $\Omega = \int_{\text{accessible}}\{dp, dq\}$ (notes p. 2; also slide 4); quantum version and dimensionless Ω, made dimensionless classically by a power of Planck's constant (notes p. 2); $p(X)$ as a ratio of volumes (notes p. 3; also slide 6); Φ, ρ = ∂Φ/∂E, Ω = ρΔ (notes p. 3; also slide 7); ideal-gas Hamiltonian and $V = L_xL_yL_z$ (slide 8); position integrals giving $V^N$ (slide 9); sphere of radius $\sqrt{2mE}$ (slide 10); $V_\alpha = \pi^{\alpha/2}R^\alpha/(\alpha/2)!$ written as $\pi^nR^{2n}/n!$ with $n = \alpha/2$ (equivalent), and Stirling $\ln M! \approx M\ln M - M$ (slide 11; the slide's "Sterling" spelling is correctly not repeated); $\Phi = V^N(2\pi mE)^{3N/2}/(3N/2)!$, $\Phi \approx V^N(4\pi emE/3N)^{3N/2}$ (verified: $(2\pi mE)^M/M! \approx (2\pi emE/M)^M$ with $M = 3N/2$), $\rho = (3N/2)\Phi/E$, $\Omega = (3N/2)(\Delta/E)\Phi$ (slide 12); $p(x_i) = 1/L_x$, $p(x_i, y_j) = p(x_i)p(y_j)$ (slide 13); the momentum derivation outline with $\lim(1 + x/n)^n = e^x$ and $\langle ℰ\rangle = E/3N$ (slides 14–16); the Gaussian $p(p_x)$ with $\langle p_x^2\rangle = 2m\langle\epsilon\rangle$ (slide 17; consistent with the slide's intermediate form $e^{-ℰ/2\langle ℰ\rangle}/\sqrt{4\pi m\langle ℰ\rangle}$).

## Arithmetic and answer checks
- Example (a): $\Gamma(5/2) = \frac34\sqrt\pi = 1.32934$; $\pi^{3/2} = 5.5683$; $5.5683/1.32934 = 4.1888 = \frac43\pi$. Correct.
- Example (b): $100\ln 100 - 100 = 360.517$; $\ln 100! = \ln\Gamma(101) = 363.739$; relative error 0.89%, "under 1%" correct. The missing term $\frac12\ln(2\pi M) = 3.22$ is indeed of order $\ln M$. Correct.
- Example (c): $3740/(3 \times 6.022\times10^{23}) = 2.070\times10^{-21}$ J; $2 \times 6.646\times10^{-27} \times 2.070\times10^{-21} = 2.752\times10^{-47}$ kg² m²/s²; square root $5.246\times10^{-24}$ kg m/s; divided by $m$: 789.3 m/s ≈ 790. Correct. Cross-check: $\sqrt{kT/m}$ at 300 K = 789.5 m/s, and $\frac32RT = 3741$ J at 300 K, so the closing remark is right. Info: $\langle p_x^2\rangle \approx 2.75\times10^{-47}$ is printed without a unit; add kg² m²/s².
- Example is original (the slides and notes have no numerical example).
- Plot: $1 - (1-\varepsilon)^{3N/2}$ is the fraction of Φ with energy in $[(1-\varepsilon)E, E]$ since $\Phi \propto E^{3N/2}$. Correct. $1 - 0.98^{300} = 0.9977$ (calcs value 0.998), $1 - 0.98^{150} = 0.952$.
- Quiz 1 (answer 0): correct (notes pp. 1–2; slide 4).
- Quiz 2 (answer 0): correct (slides 1–2). The distractor "Because energy is conserved" is wrong as a full reason, so the key is fair.
- Quiz 3 (answer 0, $V^NE^{3N/2}$): correct (slide 12); explanation correct.
- Quiz 4 (answer 0): correct (slide 17); explanation's $\langle\epsilon\rangle = E/3N$ and exponent correct.
- Flashcards: all three correct ($\pi^nR^{2n}/n!$ with $n = \alpha/2$ equals the slide's form).
- calcs/8.044/microcanonical-ensemble.yaml covers every number on the page. Info: `ln100fact` is stored as `kind: fact` citing slide 11, but 363.74 is not on the slide; it could be a recomputed entry (`lgamma(101)` or equivalent) with `origin: page-own`.

## Coverage and order
- The page follows slides 1–17 in order with none omitted: Liouville (1–2), the system (3), probability density classical and quantum (4–5), p(X) (6), Φ, ρ, Ω (7), ideal gas (8–12), position and momentum distributions (13–17). The notes' pp. 1–3 (sections 1–3) are covered in the same order.
- Omitted: the name "postulate of equal a priori probabilities" (#2); the notes' p. 2 single-coordinate example $p(q_i)$ is not given in general form but appears concretely for the gas (slide 13), which is fine.
- Notes sections 4–6 (entropy, statistical temperature, the two inequalities) are Lecture 8 material (they are on L8 slides 2–8), so stopping at notes p. 3 is right.
- Additions: the shell-fraction plot (marked as the page's own), the worked example, the Maxwell name.

## Licensing
- Neither the slides nor the notes carry "All rights reserved" or "Courtesy of" notices (grep of the extracted text; visual check of slide 3 and notes p. 1); only the standard OCW terms page.
- No figures reproduced; the only graph is a `<Plot>` generated from a formula.
- One sentence close to verbatim from notes p. 1 (#3); otherwise rewritten. No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.044 Lecture 8 ("Entropy as the logarithm of Ω, the statistical definition of temperature, and the second law") matches the Lecture 8 slides (L8B2 entropy $S = k\ln\Omega$, L8B3–B5 temperature, L8B6–B7 $\Delta S \ge 0$). The example's remark "anticipating the next lecture's temperature" is supported: L8B10 derives $E = \frac32NkT$.
- No cosmology callout on this page, so there are no cosmology claims to check.
- No em dashes (—) on the page (grep).
- One error (#1); fix it and the two warnings before setting `status: reviewed`.

## Resolution (2026-11-17, by the page author)

- Error 1: the extra constraints now read "a magnetization or magnetic field, an electric polarization or electric field" (no pressure).
- Warning 1: the postulate of equal a priori probabilities is now named, as the basis of statistical mechanics.
- Warning 2: the sentence about the number of fixed quantities is rewritten in the page's own words.
- Info: the redundant "expectation value of H" aside is removed; ε is noted as a script E on the slides; the plot's axis now says "fractional energy depth"; ⟨p_x²⟩ has its unit (kg² m²/s²); the calcs entry for ln 100! now recomputes it from the full Stirling series. The double use of ρ follows the source and is left as it is.
