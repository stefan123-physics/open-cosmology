---
page: content/year-5/8.902/orbits-and-epicycles.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec05.pdf (read; local copy, all 13 PDF pages rendered as images: printed pp. 26–37 plus the OCW end page, compared in detail; text also extracted with pdftotext for the notice check)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
  - https://arxiv.org/abs/1610.07610 (read; abstract only, for the Oort constants)
verdict: pass-with-notes
---

# Review: Orbits in galaxies: epicycles, Oort constants and the Tully–Fisher relation

The source is section 3.B "Orbits" of the 8.902 Lecture 5 notes (Vogelsberger, Fall 2023). Printed p. 26 opens with the end of 3.A (eqs. 100–101 and the four small-scale problems; covered by `potential-density-pairs`), then 3.B and eq. (102). p. 27 has (103)–(107) with the orbit sketch; p. 28 (108)–(114); p. 29 (115)–(121); p. 30 (122)–(125) with the Mercury image ("© Astronomical Returns. All rights reserved"); p. 31 (126)–(132); p. 32 (133)–(138) with the φ_eff sketch; p. 33 (139)–(146); p. 34 (147)–(150); p. 35 (151)–(153); p. 36 (154)–(157) with the epicycle and galactic-coordinate sketches; p. 37 (158)–(163), then 3.C and eq. (164) (Lecture 6 page). 3.C is not counted as missing.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "The guiding centre" (eqs. 137–139) | p. 32, eq. (137): $\Rightarrow \left.\frac{\partial\phi_\text{eff}}{\partial r}\right\|_{R_g,0} = \frac{L_z^2}{R_g^3} = R_g\dot\psi^2$, which contradicts the line above it ($\partial\phi_\text{eff}/\partial r = 0$); the potential $\phi$ is meant, as eq. (138) shows. | $\left.\partial\phi/\partial r\right\|_{R_g,0} = L_z^2/R_g^3$, silently corrected. The page flags the other slips of the lecture but not this one. | Add a bracket: "[The notes write $\phi_\text{eff}$ for $\phi$ in the second line of eq. (137).]" |
| 2 | info | Bracket after eq. (135): "Eq. (133) in the notes has several sign and symbol slips in its intermediate lines" | p. 32, eq. (133): first line $\ddot r = r\dot\psi^2 = \partial\phi/\partial r$ (the second "=" should be "−"), third line $\partial\psi_\text{eff}/\partial r$ for $\partial\phi_\text{eff}/\partial r$. The other lines are right (checked: $-\partial_r(\phi_\text{eff} - L_z^2/2r^2) = -\partial_r\phi_\text{eff} - L_z^2/r^3$). | "Several sign and symbol slips". | Optional: name them, "a sign slip in the first line and $\psi_\text{eff}$ for $\phi_\text{eff}$ in the third". Correct as it stands, just vague ("several" = two). |
| 3 | info | Bracket after eq. (122): "instead of the observed 43" | p. 30: "This accounts for the precession of Mercury." | The toy correction gives about 29″/century, GR 43″. Verified (see arithmetic). The 43″ is the anomalous part of the observed precession (the total observed is about 574″/century, most of it from the other planets). | Optional: "instead of the 43 predicted by general relativity and observed once the pull of the other planets is subtracted". |
| 4 | info | Formula "Radial and tangential equations", `at="eqs. (109)–(110), p. 28"` | Eq. (109) is $\ddot{\vec r} = F(r)\hat e_r$; the two scalar equations are eq. (110) alone. | Range covers both. | Acceptable; optionally `at="eq. (110), p. 28"` with "(eq. 109)" after the central-force sentence. |
| 5 | info | Guiding centre: "A star at $R_g$ with $\dot r = \dot z = 0$ moves on a circular orbit" | p. 33, eqs. (140)–(141): derivatives vanish, so $\ddot r = \ddot z = 0$. | Uses the initial condition $\dot r = \dot z = 0$; this is the more complete statement (both are needed). | None. |
| 6 | info | Coverage, guiding centre and meridional plane | p. 33: the guiding-centre orbit has $E = \phi_\text{eff}$; p. 32: "If r is not oscillating, then z = 0, and any perturbation leads to oscillations in z and r." | Both remarks omitted. | Optional one clause: "its energy is just $\phi_\text{eff}(R_g, 0)$". |
| 7 | info | Eq. (129) | p. 31 prints "$L_z = r^2\psi$ = constant" (dot missing). | $L_z = r^2\dot\psi$, silently corrected. | None needed. |
| 8 | info | Tully–Fisher remark on "HII spectra" | p. 37: "$v_\text{max}$ … can be measured from HII spectra"; also spells "Tully-Fischer". | Says the relation is usually based on HI 21 cm widths or optical emission lines. This is fair; note that optical (Hα) rotation curves do come from ionized gas in HII regions, so "HII" is not strictly wrong, and the page does not call it a slip. Spelling silently corrected. | None needed; the current wording is balanced. |

Every Formula checked against the rendered PDF; equation numbers and printed pages are right: (102) p. 26; (104)–(105) p. 27; (109)–(110) p. 28; (112)–(114) p. 28; (116) p. 29; (117)–(118) p. 29; (119) p. 29; (120)–(121) p. 29; (122) p. 30; (129) p. 31; (130) p. 31; (132)–(135) pp. 31–32; (137)–(139) pp. 32–33; (145) p. 33; (146)–(147) pp. 33–34; (148)–(149) p. 34; (150) p. 34; (151) p. 35; (152)–(153) p. 35; (154) p. 36; (155) p. 36; (156) p. 36; (157) p. 36; (158) p. 37; (159) p. 37; (160) p. 37; (161) p. 37; (162)–(163) p. 37. Inline references (eq. 103), (eqs. 107–108), (eq. 115), (eqs. 123–124), (eqs. 125–128), (eq. 136), (eq. 142), (eqs. 143–144) also correct.

Bracketed slip notes, each verified against the PDF:
- Eq. (106): notes print $\hat e_\psi = (\sin\psi, -\cos\psi)$, then in (107) compute $d\hat e_r/d\psi = (-\sin\psi, \cos\psi) = \hat e_\psi$. Bracket correct; the page's $(-\sin\psi, \cos\psi)$ is the consistent choice (and matches the sketch, where $\hat e_\psi$ points in the direction of increasing ψ).
- Eq. (123): notes print $m\ddot u + k\dot u = \text{const}$ (a damping term), while (124) and $\omega^2 = k/m$ need $ku$. Bracket correct.
- Mercury: with $\epsilon = 4G^2M^2/(L^2c^2)$ the advance per orbit is $2\pi(1/\sqrt{1-\epsilon} - 1) \approx 2\pi\epsilon/2 = 4\pi GM/[c^2a(1-e^2)]$, two thirds of GR's $6\pi GM/[c^2a(1-e^2)]$. Bracket correct.
- Eq. (133): see finding 2.
- Eq. (155): notes write $\mu \approx d(A\cos 2l + B)$; with $d$ this is the transverse velocity (the proper motion is $(A\cos 2l + B)$, divided by 4.74 in mas/yr units). Bracket correct; $v_\parallel \approx dA\sin 2l$ is standard and correct.
- Eq. (156): notes print $A = -\frac12\,d\Omega/dR$ (no $R$) and $B = -(\Omega + \frac12R\,d\Omega/dR)$. Bracket correct; with $R$, $A - B = \Omega$ and $-4B(A-B) = 4\Omega^2 + R\,d\Omega^2/dR = \kappa^2$, consistent with (151) and (157).
- "HII spectra": see finding 8.

Derivations checked: (115) gives $F = -L^2u^2u'' - L^2u^3$, hence (116); (121) $-d/dr$ of (120) gives $-GM/r^2 - 4G^2M^2/(r^3c^2)$; (122) follows; (151) algebra checked line by line ($\frac{\partial}{\partial r}(-L_z^2/r^3) = 3L_z^2/r^4$). Kepler $\kappa = \Omega$, flat $\kappa = \sqrt2\,\Omega$, solid body $\kappa = 2\Omega$ all follow from (151). Eq. (154): integrating $-2\Omega_g x/R_g$ with $x = r_0\cos(\kappa t + \alpha)$ gives $-\frac{2\Omega_g r_0}{\kappa R_g}\sin(\kappa t+\alpha)$; correct.

## Arithmetic and answer checks
- Worked example: $\Omega = 15.3 + 11.9 = 27.2$ km/s/kpc; $\kappa^2 = 4 \times 11.9 \times 27.2 = 1294.72$, $\kappa = 35.98 \to 36.0$; $\kappa/\Omega = 1.323 \to 1.32$; $2\pi/\Omega = 0.2310$ kpc/(km/s) $\times 977.8 = 225.9 \to 226$ Myr; $2\pi/\kappa = 0.1746 \to 0.175$, $\times 977.8 = 170.7 \to 171$ Myr; 1 kpc/(km/s) $= 3.0857\times10^{16}$ s $= 977.8$ Myr. "About 1.3 radial oscillations per orbit" correct. All right.
- Bovy (2017) abstract: $A = 15.3 \pm 0.4$, $B = -11.9 \pm 0.4$ km/s/kpc. Matches the page and the `references` entry. It is a post-2023-notes measurement only in the sense of being outside the notes; the page attributes it.
- Mercury: toy 28.65″/century, GR 42.98″/century ($GM_\odot = 1.32712\times10^{20}$, $a = 5.7909\times10^{10}$ m, $e = 0.2056$, period 87.969 d). "About 29" and "43" correct.
- Plot: in the guiding-centre frame the radial offset is $r_0\cos s$ and the tangential offset $R_g\,\delta\psi = -(2\Omega r_0/\kappa)\sin s$; with $q = \kappa/\Omega$ this is $(\cos s, -(2/q)\sin s)$, as coded. Sense: $(\hat e_r, \hat e_\psi)$ is right-handed, so the galaxy rotates counter-clockwise in this frame and the curve runs clockwise: retrograde, as the text says. Caption: axis ratio $2/q$ = 1.414 at $q = \sqrt2$, 1 at $q = 2$ (solid body, $\kappa = 2\Omega$), 2 at $q = 1$ (Kepler). Maximum $|y| = 2$ at $q = 1$ fits the range ±2.2. All correct.
- Quiz 1 (answer 1, frequency exactly 1): correct; explanation correct.
- Quiz 2 (answer 1, $\kappa = \sqrt2\,\Omega$): correct; $-2\Omega^2 + 4\Omega^2 = 2\Omega^2$, "about 1.4 radial oscillations per orbit" correct.
- Quiz 3 (answer 2, about 36): correct; "1295" and $\Omega = 27.2$ correct.
- Quiz 4 (answer 3, about 5): $1.5^4 = 5.0625$; correct.
- Flashcards: orbit equation and Kepler solution, κ²/ν² definitions and (151), Oort constants with $R$ in $A$, Tully–Fisher/Faber–Jackson. All correct.
- `calcs/8.902/orbits-and-epicycles.yaml`: 13 entries (flat κ/Ω, Bovy values as fact, Ω, κ², κ, κ/Ω, both periods, the kpc/(km/s) conversion, Mercury toy and GR, $1.5^4$, the $L_*/(220\ \text{km/s})^4$ constant as fact). Each matches the page text it quotes. `npm run calc:test -- -k orbits-and`: 13 passed, 0 failed.
- Minor: `kpc-per-kms` cites `reading1, p. 36` as its source, but the conversion is not in the notes; mark it as the page's own (as done for `pc-per-kms` on `potential-density-pairs`). `orbit-period` and `epicycle-period` cite eqs. (150) and (152), which is reasonable.

## Coverage and order
- The page follows the notes' order: integrals of motion (102)–(105); central potentials, unit vectors, radial/tangential equations (106)–(110); $u = 1/r$, change of variable, orbit equation (111)–(116); Kepler (117)–(119); post-Newtonian correction and precession (120)–(124); axisymmetric potentials, effective potential, meridional motion (125)–(135); guiding centre (136)–(141); epicycle approximation (142)–(149); circular frequency (150); κ from Ω (151); motion in the epicycle approximation (152)–(154); Oort constants and galactic coordinates (155)–(157); luminosity–velocity relations (158)–(163).
- Left out: eq. (111) as an intermediate step, the remarks in finding 6, and the notes' sketches (orbit with unit vectors, φ_eff curve, guiding-centre/epicycle circle, galactic coordinates). The epicycle sketch is replaced by the page's own generated plot; galactic coordinates are described in words. The line-by-line algebra of (151) is summarised, not reproduced, which is fine.
- Additions: the Bovy (2017) worked example, the κ values for Kepler/flat/solid-body curves, the ellipse axis ratio, the Mercury 29″ vs 43″ comparison, and the slip brackets. All correct.
- `leadsTo` 8.902 Lecture 6 ("Phase-Space Distribution Function" in `_course.json`) matches 3.C, which begins on p. 37. No cosmology callout; none needed on this 8.902 page. Prerequisite `potential-density-pairs` exists.

## Licensing
- The only notice in printed pp. 26–37 is the Mercury precession image on p. 30, "© Astronomical Returns. All rights reserved … excluded from our Creative Commons license". The page does not use or redraw it; Mercury is mentioned in words only. No "Courtesy of" credits.
- The other figures (unit-vector sketch, φ_eff curve, epicycle circle, galactic coordinates) are not reused; the only graph is the page's own Plot computed from eqs. (152) and (154).
- No verbatim copying beyond short standard phrases ("centrifugal barrier", "guiding centre", "closed retrograde elliptical orbit" is rewritten as "a small closed ellipse, traversed in the opposite (retrograde) sense"). The worked example is original (Bovy's measured values, not from the notes). No OpenStax or LibreTexts material.

## Notes
- No em dashes on the page.
- The page uses ψ for the azimuth, as the notes do, and $\phi$ for the potential; no clash.
- The Bovy (2017) values are attributed by name and year; they are measurements outside the notes, not presented as MIT's.

## Resolution (2026-11-17, by the page author)

1. Warning: added a bracket that eq. (137) writes the derivative of the effective potential where that of φ is meant.
2. Info: the eq. (133) bracket now names the two slips.
3. Info: "the observed anomalous 43 (the part of Mercury's precession not caused by the other planets)".
4. Info: the radial/tangential formula now cites eq. (110), with the central force from eq. (109).
8. Info: the `kpc-per-kms` calcs entry now says the conversion is the page's own.
5–7: no change needed.

Status set to `reviewed`.
