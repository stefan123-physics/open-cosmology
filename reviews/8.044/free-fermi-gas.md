---
page: content/year-3/8.044/free-fermi-gas.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l19/ (read: the 26-page slide PDF mit8_044s13_l19.pdf; the text extraction is garbled in places, so the slides with formulas or figures were checked as images, l19-01.png … l19-25.png)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l20/ (read in part, as text, to check the Lecture 20 claim)
  - content/year-3/8.044/_course.json (read, Lecture 19 and 20 entries)
  - calcs/8.044/free-fermi-gas.yaml (read; every number recomputed independently in Python, the suite itself not run)
verdict: needs-changes
---

# Review: The density of states and the free Fermi gas

Slide numbering (checked on the images): PDF page n = slide L19Bn for n = 1 … 21; PDF page 22 = L19B21a; PDF pages 23–25 = L19B22–L19B24; PDF page 26 is the standard OCW notice. The page cites the printed labels 1–24 and 21a, which is correct. There is no transcript for this lecture on OCW; only the slides were compared.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Counting states", sentence after the periodic formula | Slide 1: box grid $V/\pi^3$ per unit $k$-volume, positive octant only. Slide 2: periodic grid $V/(2\pi)^3$ over all of $k$-space. Slide 3: $\frac18\left(\frac43\pi k^3\right)\frac{V}{\pi^3} = \left(\frac43\pi k^3\right)\frac{V}{(2\pi)^3}$. The periodic grid is one-**eighth** as dense. | "a quarter as dense, but over eight times the volume". A quarter times eight would double the count, contradicting "the same". | "an eighth as dense, but over eight times the volume (all eight octants instead of one)". |
| 2 | warning | "Pressure at zero temperature", last sentence | Slide 10 gives $K_T = 31.6 \times 10^{-12}$ cm³/erg and "The measued value is 31 × 10⁻¹² !". It makes no further claim. | "the electron gas alone accounts for how hard the metal is to squeeze". This overstates the slide: the bulk modulus of a real metal also has electrostatic (ion–electron, exchange) contributions, and the close agreement for alkali metals is partly fortunate. It also sits awkwardly with the worked example's own remark that the electron pressure is "balanced by the attraction of the ions" (that attraction also changes with volume). | Attribute and soften: "Greytak compares this with the measured value, about $31 \times 10^{-12}$ cm³/erg: for an alkali metal the free-electron gas alone gives most of the compressibility." |
| 3 | warning | Summary, third bullet | Slide 10: $K_T = \frac35\frac1P = \frac32\frac{1}{(N/V)E_F}$. | "$K_T = 3/2(N/V)E_F$", which reads as $\frac32(N/V)E_F$ (dimensionally wrong: an energy density, not its inverse). | Write $K_T = 3/[2(N/V)E_F]$ or $\frac{3}{2(N/V)E_F}$. |
| 4 | warning | End of page (no cosmology callout; `leadsTo` only 8.044 L20) | n/a (writing rule 6) | No `Callout kind="cosmology"`. Real connections exist: the count of $(2S+1)V/(2\pi)^3$ states per unit $k$-volume is exactly what 8.286 Lecture 17 (`neutrinos-and-particle-counting`) uses for the number and energy densities of thermal particles (with the Fermi–Dirac occupation and $\mu \approx 0$); and electron degeneracy pressure (white dwarfs, Chandrasekhar mass) underlies the Type Ia supernovae of 8.286 Lectures 18–19. | Optional but recommended: a short cosmology callout and a `leadsTo` to 8.286 Lecture 17 (state counting). Mark any Type Ia link as this page's own connection, not Greytak's. |
| 5 | info | Formula "Pressure and compressibility", `at="slide 10"` | $P = -(\partial U/\partial V)_{N,S} = \frac25(N/V)E_F \propto (N/V)^{5/3}$ and $(\partial P/\partial V)_{N,T} = -\frac53 P/V$ are on slide 9; $K_T$ on slide 10. The calcs entry `pressure-T0` cites slide 9. | Cited to slide 10 only. | `at="slides 9–10"`. |
| 6 | info | Formula "Electrons and holes", `at="slide 23"` | $N_e$ is derived and boxed on slide 22, $N_h$ on slide 23. | Cited to slide 23 only (the prose correctly says slides 22–23). | `at="slides 22–23"`. |
| 7 | info | Throughout | The slides write $\epsilon$ and $\epsilon_F$ for energy throughout (slides 3–4: $D_{\text{states}}(\epsilon)$; slides 7, 14: $\epsilon_F$); "$E_F$" appears on slides 6 and 9–12. | The page uses $E$ and $E_F$ in most places but $\epsilon$, $\epsilon_F$ on slide 7's formula and the quiz explanation, so both $E_F$ and $\epsilon_F$ appear for the same quantity. | Optional: pick one (the slides themselves mix them), or add "($\epsilon_F$ on some slides)" at the first use. |
| 8 | info | "Motion at zero temperature" | Slide 8 also gives $p_F = 1.43 \times 10^{-19}$ g cm/s, and describes copper as "one valence electron beyond a filled d shell", with $N/V$ in atoms per cm³. | Omits $p_F$; "one conduction electron per atom". Same physics. | Optional: add $p_F$. |
| 9 | info | "An intrinsic semiconductor", "Then $\mu$ lies far from both band edges" | Slide 21 only assumes $\epsilon_G \gg k_BT$ and draws $\mu$ near mid-gap; slide 21a compares $1/(e^x + 1)$ with $e^{-x}$ ($x > 0$) and $1 - e^x$ ($x < 0$). | States $\mu$ far from the edges as following from $\epsilon_G \gg kT$. Strictly this is an assumption confirmed afterwards by slide 24's result. | Optional: "Assume, and check at the end, that $\mu$ lies many $kT$ from both band edges". |
| 10 | info | "Elementary excitations" | Slide 18: for a 3D Coulomb gas of electrons, plasmons (collective modes, harmonic oscillators) and quasi-particles ("dressed" electrons, $\epsilon = \hbar^2k^2/2m^*$), with a sketch of both branches; slide 19 the other examples. | Matches, without $m^*$ or the dispersion sketch. Final sentence "Much of the free-particle picture survives with these as the 'particles'" is not on the slides (it is a fair summary of why the slides introduce them). | Optional: name $m^*$, the effective mass, since the semiconductor section uses effective masses $m_e$, $m_h$. |

## Formula citations (all checked against the slide images)
- Box: slide 1, $k_x = n_x\pi/L_x$, $n_x = 1, 2, 3, \dots$, $D(\vec k)_{\text{states}} = (2S + 1)V/\pi^3$. Correct.
- Periodic: slide 2, $k_x = 2\pi n_x/L_x$, $D(\vec k)_{\text{states}} = (2S + 1)V/(2\pi)^3$. Correct. (The slide lists $n_x = \pm1, \pm2, \dots$ and omits 0; the page's "$0, \pm1, \pm2$" is the correct set for plane waves.)
- Number below $k$ and $D(E)$: slides 3–4. Slide 3 derives $D_{\text{wv}} = \frac{V}{4\pi^2}(2m/\hbar^2)^{3/2}\epsilon^{1/2}$; slide 4 multiplies by $2S + 1$. The page's formula is identical to slide 4. Correct.
- Fermi sea terms: slide 5 (non-interacting, free, spin ½, $T = 0$; Fermi sea, surface, wave vector, energy). Correct.
- $k_F$, $E_F$: slide 6, identical. Correct.
- $N$, $U$ with $D = a\epsilon^{1/2}$: slide 7, identical, including $U \propto N(N/V)^{2/3}$. Correct.
- $p_F$, $v_F$: slide 8. Correct.
- $P$, $K_T$: slides 9–10 (see #5). Correct.
- Pauli: slide 11 ($\epsilon_{k\uparrow,\downarrow} = \epsilon(k) \pm \mu_eH$, two half-densities of states shifted) and slide 12 (the three results, "holds as long as $kT \ll \epsilon_F$", "not Curie law behavior", "Pauli paramagnetism"). Correct.
- Occupation a function of energy only: slide 13. Correct.
- $C_V$ estimate and exact result: slide 14, the table (classical $\frac32kT$, $\frac32NkT$, $\frac32Nk$; quantum $\sim N kT/\epsilon_F$ electrons, $\sim kT$ each, $\Delta U \sim N(kT)^2/\epsilon_F$, $C_V \sim 2Nk\,kT/\epsilon_F$) and $C_V = \frac{\pi^2}{2}Nk\,kT/\epsilon_F$. Correct.
- $\mu(T)$: slide 15 (implicit equation for $\mu$; $C_V$ must include $d\mu/dT$), slide 16 (symmetry of $\langle n\rangle - \frac12$ about $\mu$), slide 17 ($D$ increasing, so $\mu$ decreases; figure shows $\mu$ just below $\epsilon_F$). Correct.
- Bands: slide 20 (metal: $\epsilon_F$ inside a band; insulator: wide gap; intrinsic semiconductor: narrow gap with $\epsilon_F$ in it; doped: a spike of states in the gap). The page's "in an insulator it lies in a wide gap": the insulator panel does not mark $\epsilon_F$, but it is the standard reading. Correct.
- $\langle n_e\rangle$, $\langle n_h\rangle$: slides 21a, 22, 23. Correct.
- $N_e$, $N_h$: slides 22–23 (see #6). Identical to the slides. Independently checked: $\frac{V}{2\pi^2}(2m/\hbar^2)^{3/2}\int_0^\infty\sqrt\delta\,e^{-\delta/kT}d\delta = \frac{V}{2\pi^2}(2m/\hbar^2)^{3/2}\frac{\sqrt\pi}{2}(kT)^{3/2} = \frac V4\left(\frac{2mkT}{\pi\hbar^2}\right)^{3/2}$. Correct.
- $\mu$ of the semiconductor: slide 24, identical. The page's "shifting slightly towards the band with the lighter carriers" is right: $m_e < m_h$ gives $\ln(m_e/m_h) < 0$, so $\mu > \epsilon_G/2$, towards the conduction band.

## Arithmetic and answer checks
- Copper (slide 8), recomputed with $N/V = 8.45 \times 10^{22}$ cm⁻³: $k_F = 1.358 \times 10^8$ cm⁻¹ (1.36), $v_F = 1.572 \times 10^8$ cm/s (1.57), $p_F = 1.432 \times 10^{-19}$ g cm/s (slide 1.43), $E_F/k = 81\,490$ K (slide 81 000; $E_F = 7.02$ eV), $v_F/c = 0.524\%$ ("about half a percent"). All correct.
- Potassium (slide 10): $1.5/(1.40 \times 10^{22} \times 3.39 \times 10^{-12}) = 3.1606 \times 10^{-11}$ cm³/erg (31.6); $3.39 \times 10^{-12}/1.380649 \times 10^{-16} = 24\,554$ K (2.46 × 10⁴). Consistency: $E_F$ from $N/V = 1.40 \times 10^{22}$ cm⁻³ is $3.394 \times 10^{-12}$ erg, matching the slide. Correct.
- Sodium example: $k_F = 9.223 \times 10^9$ m⁻¹ (9.22), $E_F = 5.193 \times 10^{-19}$ J (5.19) = 3.241 eV (3.24), $E_F/k = 37\,614$ K (37 600), $v_F = 1.068 \times 10^6$ m/s (1.07), ratio $(\pi^2/3)(300/37\,600) = 0.02625$ (0.026, "under 3%"), $P = 5.505 \times 10^9$ Pa (5.5), $5.5 \times 10^9/101\,325 = 54\,300$ atm ("about fifty thousand"). All correct. $N/V = 2.65 \times 10^{28}$ m⁻³ is the standard value for sodium. The example uses its own metal, SI units and questions (Fermi speed, heat-capacity ratio, pressure), so it is original, not a copy of slide 8 or 10.
- Example (c) remark "metals' heat capacities are dominated by lattice vibrations at room temperature": correct (lattice $\approx 3Nk$ by Dulong–Petit, electrons $\approx 0.026 \times \frac32Nk \approx 0.04Nk$). Not on the slides; a fair added remark.
- Example (d) remark "balanced by the attraction of the ions": a reasonable simplified picture (the electron–ion Coulomb attraction holds the metal together against the electron pressure); not on the slides. See #2 for how it interacts with the compressibility claim.
- calcs/8.044/free-fermi-gas.yaml: every expected value matches the recomputation; the identity checks (`dos-energy`, `pressure-T0`, `semiconductor-mu`) are set up correctly. Minor: `pressure-T0` cites slide 9 while the page cites slide 10 (#5).
- Quiz 1: answer 0 ($E_F \propto (N/V)^{2/3}$). Correct.
- Quiz 2: answer 0 ($\frac35E_F$). Correct; explanation matches slide 7.
- Quiz 3: answer 0. Correct; explanation matches slide 14.
- Quiz 4: answer 0 (independent of $T$). Correct; slide 12.
- Flashcards 1–3: correct (flashcard 2's $P = \frac25(N/V)E_F$ and flashcard 3's "$\mu$ falls slightly" match slides 9 and 17).
- Graph: $1/(e^{(x-1)/t} + 1)$ with $\mu \approx E_F$; caption states the approximation honestly. With $t \ge 0.01$ the exponent stays below 100, so no overflow. Correct.

## Coverage and order
- Follows slides 1 → 24 (with 21a) in order; every slide is represented.
- Left out or compressed: $p_F$ (slide 8, #8); slide 9's intermediate $(\partial P/\partial V)_{N,T} = -\frac53P/V$ (folded into $K_T$); slide 18's effective mass $m^*$ and dispersion sketch (#10); slide 21a's figure (described in words); slide 17's figure.
- Added: the Fermi–Dirac graph, the sodium example, the semiconductor's direction of shift, the room-temperature lattice remark. All correct.
- Lecture 20 claim (`leadsTo`: "Stellar configurations and white dwarfs, held up by the pressure of a Fermi gas"): correct. `_course.json` Lecture 20 = "Stellar configurations and white dwarfs", and the L20 slides say "Electron degeneracy pressure supports it, $P \propto m_e^{-1}n^{5/3}$" for the white dwarf and go on to the Chandrasekhar limit and neutron degeneracy.

## Licensing
- No "All rights reserved" or "Courtesy of" notice: grep of the text found none, and the slide images were inspected (simple sketches only, no credits). Only the standard OCW notice on PDF page 26.
- No figure reused; the page's one graph is generated from a formula.
- No OpenStax or LibreTexts material.
- No em dashes (—) in the page or the calcs file (grep found none; "Fermi–Dirac" and "slides 1–24" use en dashes, which is fine).
- Wording is rewritten. Closest to the slides: "This holds while $kT \ll E_F$, so $\chi$ is independent of temperature: not Curie's law but Pauli paramagnetism" (slide 12: "This expression holds as long as kT ≪ E_F, so χ is temperature independent in this region. This is not Curie law behavior. It is called Pauli paramagnetism."). Shortened and reworded, built from standard terms; acceptable, though it follows the slide's sentence structure closely. "Because $D(\epsilon)$ increases with $\epsilon$ … $\mu$ must decrease slightly as $T$ rises" (slide 17) is a standard statement and fine.

## Notes
- One error (#1: "a quarter as dense" should be "an eighth"), a one-word fix. Warnings: the overstated potassium conclusion (#2), the ambiguous $K_T$ in the summary (#3), and the missing cosmology callout (#4). All formulas match the slides; the two slide-range refinements (#5, #6) are info only. Every number on the page and in the calcs file is correct.

## Resolution (2026-11-17, by the page author)

- Error 1: "a quarter as dense" is corrected to "one eighth as dense".
- Warning 1: the potassium comparison is now attributed to the slide and softened (the electron gas is "a large part" of the stiffness).
- Warning 2: the summary now writes K_T = 3/[2(N/V)E_F].
- Warning 3: a cosmology callout and a `leadsTo` to 8.286 Lecture 17 now link the state counting to the early universe; white dwarfs and supernovae are covered on the next page (Lecture 20).
- Info: the pressure now cites slides 9–10 and N_e/N_h slides 22–23; the E_F/ε_F double notation is stated; p_F for copper and the effective mass m* are added; μ far from the band edges is now an assumption checked by the result.
