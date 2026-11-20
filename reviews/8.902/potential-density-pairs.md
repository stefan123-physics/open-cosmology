---
page: content/year-5/8.902/potential-density-pairs.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec04.pdf (read; local copy, all 6 PDF pages rendered as images: printed pp. 21–26, plus the OCW end page via pdftotext, compared in detail)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
verdict: pass-with-notes
---

# Review: Potential–density pairs: from point masses to dark matter halos

The source is the start of section 3 "Modelling galaxies" (list of ingredients) and section 3.A "Potential-density pairs" of the 8.902 Lecture 4 notes (Vogelsberger, Fall 2023). Printed p. 21 opens with the end of 2.C (potential-well sketch, eq. 77; covered by `relaxation-times`), then section 3 and the first bullet; p. 22 the other bullets, 3.A, (78)–(84); p. 23 (85)–(92) with the Mestel coordinate sketch; p. 24 (93)–(96) with the thin-disc sketch; p. 25 (97)–(99) with the NFW density figure; p. 26 (100)–(101), the four small-scale problems, then 3.B Orbits and eq. (102) (Lecture 5 page), which is not counted as missing.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Line before "Potential outside and inside a uniform sphere" (eq. 88): "integrating $\vec F/m = -\nabla\phi$" | p. 23, line introducing (88): "From these, we can now also get $\phi$: $\frac1m\vec F = -\vec\nabla^2\phi$" (Laplacian in place of gradient). | $-\nabla\phi$, silently corrected; the bracket after (88) lists the other slips of that block but not this one. | Optionally extend the bracket: "[… and the line before writes $\nabla^2$ for $\nabla$.]" |
| 2 | info | Formula "Gauss's theorem for gravity", `at="eqs. (83)–(84), p. 22"` | Eq. (83) is the density $\rho = M/(\frac43\pi R^3)$ (with "$\vec F = ?$"); the Gauss chain is eq. (84) alone. | The density is stated in the prose just above; the formula holds only the (84) chain. | Acceptable (the range covers both); optionally `at="eq. (84), p. 22"` and "(eq. 83)" after the density in the prose. |
| 3 | info | "Over a sphere $S_r$ of radius $r$" | p. 22: "a surface $S_r$ with radius $R$ enclosing a volume $V_r$" ($R$ is the sphere's radius; $r$ is meant). | Radius $r$, silently corrected. | No change needed; optional bracket. |
| 4 | info | Formula "Surface density of the Mestel disc" (eq. 98) | The last line of (97) and the first line of (98) drop the factor $v_c^2/r$ (it returns in the next line of (98)). | Factor kept throughout, silently. | No change needed. |
| 5 | info | End of "The Mestel disc"; quiz 2 explanation; Summary: "a flat rotation curve made by a disc alone" | The notes derive $\Sigma = v_c^2/(2\pi Gr)$ but do not state that the rotation curve is flat. | States it. Verified correct: in the plane $\phi = v_c^2[\ln(r/r_0) - \ln 2]$, so $v^2 = r\,\partial\phi/\partial r = v_c^2$ at every $r$. | Optional "(not stated in the notes)" or a one-line derivation, as for the oscillation example. |
| 6 | info | "The uniform sphere": "Inside, the force grows linearly with $r$, like a spring"; quiz 1 explanation "Every star then oscillates through the centre with the same period" | Not in the notes (they stop at eq. 88). | Own addition, correct (harmonic force; period independent of amplitude). The worked example is flagged "not in the notes". | None. |
| 7 | info | After eq. (100): "$c$ depends only very weakly on mass" | p. 26 adds "and for fixed mass, … it is the same for all halos in that mass range". | Second half omitted. | Optional: "and halos of the same mass have about the same $c$". |
| 8 | info | "Too big to fail" bullet | p. 26: "related to the missing satellites problem … (but the total number of satellite halos is consistent)"; massive subhalos should have kept their stars, "e.g. not lose the stars through stripping". | Core point kept; the link to missing satellites, the parenthesis and the stripping remark are omitted. | Optional; the notes' parenthesis is itself unclear, so leaving it out is reasonable. |

Every Formula checked against the rendered PDF; equation numbers and printed pages are right: (78) p. 22; (79)–(80) p. 22; (81)–(82) p. 22; (83)–(84) p. 22; (85)–(86) p. 23; (87) p. 23; (88) p. 23; (89) p. 23; (90) p. 23; (91) p. 23; (93) p. 24; (94) p. 24; (95) p. 24; (98) p. 25; (99) p. 25; (100) p. 26; (101) p. 26. Inline references "(eq. 92)" (p. 23) and "(eqs. 96–97)" (pp. 24–25) also correct.

Bracketed slip notes, each verified against the PDF:
- Eq. (79): notes print $\phi(\vec r) = G\int\rho(\vec r')/|\vec r' - \vec r|\,d^3r'$ with no minus sign. Bracket correct.
- Eq. (82): notes print $\frac1m\vec F = \frac{GM}{r^2}\hat e_r$ (no minus). Bracket correct.
- Eq. (86): notes print $4\pi r^2F(r) = r\pi GM(<r)m$. Bracket correct.
- Eq. (88): notes print $\phi = \frac{GMm}{r} + \text{const}$ outside and $2\pi G\frac{\rho r^2}{3}m + \text{const}$ inside. "Extra factor $m$ and a plus sign outside" correct; the inside sign is right in the notes. Page's per-unit-mass forms are correct ($-d\phi/dr = -GM/r^2$ and $-\frac{4\pi G\rho}{3}r$).
- Eq. (101): notes print $\phi = -4\pi\rho_0a^2\ln(1 + r/a)/(r/a)$ with no $G$. Bracket correct; checked numerically that $\nabla^2$ of the page's form divided by $4\pi G$ gives $\rho_0/[(r/a)(1+r/a)^2]$ (at $r/a = 0.5$: 0.8889; at 2: 0.05556, both exact).

Mestel-disc derivation: the radial term $\frac{1}{r^2}\partial_r(r^2\cdot\frac1r) = \frac{1}{r^2}$ is right; (93) derivatives correct; (94) numerator $2\cos\theta + 2\cos^2\theta + \sin^2\theta = (1+\cos\theta)^2$ with $\sin^2 = 1 - \cos^2$, so the bracket is $-1$ (also checked numerically at θ = 0.3, 0.9, 1.3: −1.0000). Below the plane $\partial\phi_0/\partial\theta = \sin\theta/(1-\cos\theta) \to 1$ at $\pi/2^+$, above $-\sin\theta/(1+\cos\theta) \to -1$ at $\pi/2^-$; jump 2, so $\Sigma = \frac{v_c^2}{4\pi Gr}\cdot 2 = \frac{v_c^2}{2\pi Gr}$. "Smooth terms contribute nothing": the 1 and $\frac{\cos\theta}{\sin\theta}\partial_\theta\phi_0 = -\frac{\cos\theta}{1+\cos\theta}$ are bounded, so their integral over width $2\epsilon$ vanishes. "$\cos\theta > 0$ (above the plane)" is right ($z = r\cos\theta$). All correct and in the notes' order.

## Arithmetic and answer checks
- Oscillation example: $\omega^2 = 4\pi(0.0043)(0.1)/3 = 1.801\times10^{-3}$ (km/s/pc)²; $\omega = 0.04244$; $P = 2\pi/\omega = 148.05$ pc/(km/s); 1 pc/(km/s) $= 3.0857\times10^{13}$ s $= 0.9777$ Myr; $P = 144.7$ Myr, "≈ 145" correct. With $G = 0.004301$ the result is unchanged at this precision.
- Mestel example: $2\pi(0.0043)(8000) = 216.1$; $40\,000/216.1 = 185.1\ M_\odot$/pc² (185.0 with $G = 0.004301$). Units $(\text{km/s})^2/[\text{pc}(\text{km/s})^2M_\odot^{-1}\cdot\text{pc}] = M_\odot/\text{pc}^2$. Correct. The remark that much of the Milky Way's flat-curve mass is in the halo is fair.
- Plot: $\log_{10}(\rho/\rho_0) = -x - 2\log_{10}(1 + 10^x)$ with $x = \log_{10}(r/a)$ is the exact log of eq. (99). Values 1.991 at $x = -2$ and −6.009 at $x = 2$, inside the range [−8, 3]. Asymptotes $-x$ and $-3x$ are exact (no offset) for $r \ll a$ and $r \gg a$. Point at $x = 0$: $\log_{10}(1/4) = -0.602$. Caption: $\rho_0/4$ and local slope $-1 - 2(r/a)/(1 + r/a) = -2$ at $r = a$. All correct. The $-3x$ dashed line leaves the top of the range for $x < -1$; presumably clipped by the component (not checked in a browser).
- Quiz 1 (answer 1, $F = \frac{4\pi G\rho}{3}rm$): correct; explanation correct.
- Quiz 2 (answer 1, thin disc with $\Sigma = v_c^2/(2\pi Gr)$): correct; explanation correct (see finding 5 for the flat-curve remark).
- Quiz 3 (answer 1, $r^{-1}$ inside, $r^{-3}$ outside): correct; "−2 exactly at $r = a$" correct.
- Quiz 4 (answer 1, core–cusp): correct; explanation matches p. 26.
- Flashcards: Poisson/force/integral (with the corrected minus sign), Mestel potential and $\Sigma$, NFW $\rho$, $c$ and $\phi$ (with $G$). All correct.
- `calcs/8.902/potential-density-pairs.yaml`: 9 entries (ω², ω, period in pc/(km/s), the 0.978 Myr conversion, period in Myr, Mestel denominator 216, Σ = 185, $\log_{10}(1/4)$, slope −2). Each matches the page text it quotes; all `origin: page-own`, which is right. `npm run calc:test -- -k potential-density`: 9 passed, 0 failed.
- Minor: the `pc-per-kms` entry cites `p. 23` as source, but the conversion is not in the notes; harmless.

## Coverage and order
- The page follows the notes' order: list of modelling ingredients (all seven bullets, pp. 21–22); 3.A scalar potential (78), Poisson and the integral (79)–(80); point mass (81)–(82); homogeneous sphere (83)–(88); Mestel disc (89)–(98); NFW profile (99), one-parameter family, $r_{200}$/$M_{200}$, concentration (100), central result, potential (101); the four related problems.
- Nothing in 3.A is left out except the minor clauses in findings 7 and 8.
- Additions: two worked examples (own numbers; the first flagged as not in the notes), the NFW plot, the flat-rotation-curve remark (finding 5), the pointer to the Ferreras page `core-cusp-problem` (exists), and the slip brackets.
- Figures not reproduced: the Mestel coordinate sketch (p. 23), the thin-disc sketch (p. 24) and the NFW density figure (p. 25). The last is replaced by the page's own plot computed from eq. (99), dimensionless (no copying of the figure's $a = 20$ kpc, $\rho_0 = 10^5$ values).
- `leadsTo` 8.902 Lecture 5 ("orbits … integrals of motion, the radial equation and epicycles") matches 3.B, which begins on p. 26 with integrals of motion. No cosmology callout; none needed for this 8.902 page. Prerequisite `relaxation-times` exists.

## Licensing
- No "All rights reserved" notice and no "Courtesy of" credit on printed pp. 21–26 (checked every rendered page and the extracted text); OCW end page only, CC BY-NC-SA.
- No figure reused; the NFW figure is replaced by the page's own generated plot.
- No verbatim copying beyond short standard phrases ("collective potential", "one-parameter family", "look the same when scaled"); the four problem bullets are rewritten.
- Worked examples are original. No OpenStax or LibreTexts material. `references` is empty, which is right.

## Notes
- No em dashes on the page (the en dashes in "potential–density", "core–cusp", "Navarro–Frenk–White" are fine).
- The page writes $\varphi$ for the azimuth and $\phi$ for the potential, which avoids a clash the notes also avoid.
- "Improved surveys have since found many more satellites" follows the notes' "Recently, however, …"; it is the notes' claim, not a post-2023 addition.

## Resolution (2026-11-17, by the page author)

1. Warning: the eq. (88) bracket now also notes that the line before eq. (88) writes the Laplacian where the gradient is meant.
2. Info: the Gauss formula now cites eq. (84), with the density from eq. (83).
5. Info: "a flat rotation curve made by a disc alone" is now marked as a remark not in the notes, with v² = r ∂φ/∂r = v_c² in the plane.
7. Info: the `pc-per-kms` calcs entry now says the unit conversion is the page's own.
3, 4, 6: no change needed.

Status set to `reviewed`.
