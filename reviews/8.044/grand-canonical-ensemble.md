---
page: content/year-3/8.044/grand-canonical-ensemble.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l18/ (read: the 28-page slide PDF mit8_044s13_l18.pdf; the text extraction is garbled, so every slide was checked as an image, l18-01.png … l18-28.png)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l19/ (read in part, as text, to check the Lecture 19 claim)
  - content/year-3/8.044/_course.json (read, Lecture 18 and 19 entries)
  - calcs/8.044/grand-canonical-ensemble.yaml (read; every number recomputed independently in Python, the suite itself not run)
verdict: needs-changes
---

# Review: The chemical potential and the grand canonical ensemble

Slide numbering (checked on the images): PDF page n = slide L18Bn for n = 1 … 27; PDF page 28 is the standard OCW notice. The page cites slides 1–27 by these numbers. There is no transcript for this lecture on OCW; only the slides were compared.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The grand potential", first sentence | Slide 20: "Define a new thermodynamic potential, the 'Grand potential', $\Phi_G$. $\Phi_G \equiv F - \mu\bar N = U - TS - \mu\bar N$". The slides write $\Phi_G$ throughout (slides 20–21); there is no script G. | "Define $\Phi_G \equiv \dots$ (a script G on the slides)". This misdescribes the source: the page's $\Phi_G$ *is* the slides' notation. | Delete "(a script G on the slides)". If a notation note is wanted, it is the mean particle number: the slides write $\bar N$ on slides 16–18 and 20–21 and $\langle N\rangle$ on slides 19 and 27; the page uses $\langle N\rangle$ everywhere (see #6). |
| 2 | warning | End of page (no cosmology callout; `leadsTo` only 8.044 L19) | n/a (writing rule 6) | No `Callout kind="cosmology"` and no 8.286/Ferreras `leadsTo`, although real connections exist: 8.286 Lecture 17 (`neutrinos-and-particle-counting`: the 7/8 factor for fermions comes from integrating the Fermi–Dirac occupation against the Bose–Einstein one, with $\mu = 0$) and Ferreras `dark-matter-particles` (particle–antiparticle excess set by a non-zero chemical potential). | Add a short cosmology callout (relativistic particles in the early universe have occupations $1/(e^{E/kT} \pm 1)$ with $\mu \approx 0$; the matter excess needs $\mu \ne 0$) and `leadsTo` entries to 8.286 Lecture 17 and, if wanted, the Ferreras section. |
| 3 | info | Formula "Adsorbed density", `at="slide 9"` | Slide 8 derives $\sigma = \lambda(T)\,e^{\epsilon_0/k_BT}\,n$; slide 9 boxes only $\sigma = \frac{h}{\sqrt{2\pi mk_BT}}e^{\epsilon_0/k_BT}n$. | Both forms, cited to slide 9 only. The calcs entry `adsorption-equilibrium` cites slide 8. | `at="slides 8–9"`. |
| 4 | info | Formula "Chemical potential of the surface gas", slide 7 | Slide 7 ends with $-\epsilon_0 + k_BT\ln\left(\frac{N}{A}\lambda^2(T)\right)$; $\sigma \equiv N/A$ is introduced on slide 8. | Writes $\sigma\lambda^2$ and defines $\sigma$ just after. Same physics. | Optional: `at="slides 7–8"`, or write $N/A$ in the formula and introduce $\sigma$ at the equilibrium step as the slides do. |
| 5 | info | Formula "Grand canonical density", $\sum_{N=1}^{\infty}$ | Slide 18 sums from $N = 1$ (and normalizes with $\sum_{N=1}^\infty$). | Copies $N = 1$. Faithful to the slide, but the usual sum starts at $N = 0$ (with $Z(T,V,0) = 1$), and slide 25's sum over all $\{n_\alpha\}$, which the page uses next, does include the empty state (all $n_\alpha = 0$). For large systems it makes no difference. | Optional: write $\sum_{N=0}^\infty$ and add a bracket "(the slide starts at $N = 1$; including $N = 0$ adds the empty state, which the occupation-number sum below includes)". |
| 6 | info | Throughout, $\langle N\rangle$ | Slides 16–18 and 20–21 write $\bar N$ (and $\bar E_1$, $\bar N_1$); slides 19 and 27 write $\langle N\rangle$. | $\langle N\rangle$ everywhere; the change is not stated. | Optional bracket at the first use: "(written $\bar N$ on most slides)". |
| 7 | info | Formula "Grand potential", `at="slide 21"` | Definition and differential $d\Phi_G = -S\,dT - P\,dV - \bar N\,d\mu$ are on slide 20; the three derivatives on slide 21. $\Phi_G = -kT\ln\mathcal Z$ is not written on either slide; it follows from slide 18's last line. | One formula with all of it, cited to slide 21; prose says "so $\Phi_G = -kT\ln\Xi$". | `at="slides 20–21"`; optionally "(from slide 18)" after $-kT\ln\Xi$. |
| 8 | info | Introduction | Slide 1 lists: different phases (gas to liquid to solid, paramagnet to ferromagnet, normal fluid to superfluid), chemical reactions, different locations (adsorption, charged particles in a semiconductor). | Lists all but solid and paramagnet to ferromagnet, and cites no slide for the list (only the overall "slides 1–27"). | Optional: add "paramagnet to ferromagnet" and "(slide 1)". |

## Formula citations (all checked against the slide images)
- $dU = T\,dS - P\,dV + \mu\,dN$: slide 1. Correct.
- $\mu = (\partial U/\partial N)_{S,V}$ in prose and $\mu = (\partial F/\partial N)_{T,V}$: slide 2 (with $dF = -S\,dT - P\,dV + \mu\,dN$). Correct.
- Entropy change on exchange: slide 3, last line, identical. The flow statements match slide 4 (energy flows to the colder side; at equal $T$, particles flow from higher to lower $\mu$; equilibrium needs both equal). The page's "but not volume" is consistent with slide 3's picture (only $dU$ and $dN$ arrows); the slide does not say it in words.
- Ideal-gas $\mu$: slide 6, $\mu = (\partial F/\partial N)_{V,T} = -k_BT\ln\left(\frac{V}{N}\frac{1}{\lambda^3}\right) = k_BT\ln\left(\frac{N}{V}\lambda^3\right)$. Correct; $Z_1 = V/\lambda^3$, $Z = Z_1^N/N!$ also match.
- Surface $\mu$: slide 7 (see #4). Correct; $Z_1 = e^{\epsilon_0/kT}A/\lambda^2$ matches.
- Adsorbed density: slides 8–9 (see #3). Correct.
- Ensembles: slide 10. Correct.
- Derivation: slide 11 (subsystem, bath, both energy and particles flow, total microcanonical), slide 12 ($\Omega_1\Omega_2(E - E_1, N - N_1)/\Omega(E,N)$; the page drops $\Omega_1 = 1$, which slide 13 shows), slide 14 (first-order expansion, $\partial S_2/\partial E_2 = 1/T$, $\partial S_2/\partial N_2 = -\mu/T$). Correct.
- "Log of the probability": slide 15, identical. Correct.
- $(F_1 - \mu\bar N_1)/T$: slide 16. Correct.
- "Grand canonical density": slides 17–18; $\Xi = \sum_N (e^{\beta\mu})^N Z(T,V,N) = \exp[-\beta(F - \mu\bar N)]$ matches (see #5). Correct.
- "Mean particle number": slide 19, $\frac1\beta(\partial\ln\mathcal Z/\partial\mu)_{T,V} = \langle N\rangle$. Correct.
- "Grand potential": slides 20–21 (see #1, #7). Physics correct.
- "Grand sum over occupation numbers": slide 25. The slide's last line is $\prod_\alpha\left(\sum e^{(\mu-\epsilon_\alpha)n_\alpha/kT}\right)$; the page writes its logarithm. Correct.
- "Fermions and bosons": slide 26, both $\ln\mathcal Z$ lines identical. Correct.
- Occupations: slide 27, boxed result identical. Correct. The page's added remark that bosons need $\mu$ below every $\epsilon_\alpha$ is not on the slide but is correct (it is also the geometric series' convergence condition).
- Statement "slides 22–24 repeat slides 16–18 of Lecture 17": consistent with the identical-particles review's description of L17 slides 16–18 (occupation list with $\sum n_\alpha = N$; the F-D and B-E kets with the primed sum; the canonical sum that cannot be carried out). Checked on L18's images; L17's images not re-opened.

## Arithmetic and answer checks
- Example (a), recomputed: $kT = 0.0258520$ eV (page 0.02585); $\epsilon_0/kT = 3.86817$ (3.868); $e^{3.868} = 47.855$ (47.9); $\lambda = 1.90475 \times 10^{-11}$ m (1.905); $n = 2.41432 \times 10^{22}$ m⁻³ (2.414); $\sigma = 2.2007 \times 10^{13}$ m⁻² (2.2). All correct. The mass $4.65 \times 10^{-26}$ kg is 28.0 u (N₂ or CO), a reasonable molecule; the page does not name it, which is fine.
- Monolayer remark "around $10^{19}$ m⁻²": a molecule 0.3–0.4 nm across gives $6 \times 10^{18}$ to $1.1 \times 10^{19}$ m⁻². Correct order; the conclusion (coverage about $2 \times 10^{-6}$, dilute 2D gas) holds. Also $n\lambda^3 = 1.7 \times 10^{-10} \ll 1$, so the classical-gas statement in the text applies to the example.
- Example (b): $1/(e+1) = 0.2689$, $1/(e-1) = 0.5820$, $e^{-1} = 0.3679$. Correct.
- calcs/8.044/grand-canonical-ensemble.yaml: every expected value matches the recomputation; the four identity checks (ideal-gas $\mu$, adsorption equilibrium, FD and BE occupations as $\mu$-derivatives) are set up correctly. Minor: page-own entries cite slides 8/9/27 as `source`, which is fine for the formulas used.
- Quiz 1: answer 0 (high $\mu$ to low). Correct; explanation is slide 3 at $T_1 = T_2$.
- Quiz 2: answer 0, $(\partial U/\partial N)_{T,V}$ is not $\mu$. Correct; the other three are valid ($-T(\partial S/\partial N)_{U,V} = \mu$ from $dS = dU/T + P\,dV/T - \mu\,dN/T$).
- Quiz 3: answer 0. Correct (slides 26–27).
- Quiz 4: answer 0. Correct (slides 24–25).
- Flashcards 1–3: correct.
- Graph: the formulas and caption are correct (FD = 1/2 at $\epsilon = \mu$, never above 1; BE diverges as $\epsilon \to \mu^+$; both tend to $e^{-(\epsilon-\mu)/kT}$). Uncertain: the Bose–Einstein curve is drawn from $x > 0.35$, where it equals 2.38, above the range of 2 (it reaches 2 at $x = \ln 1.5 = 0.405$). If `Plot` does not clip, the curve's start sticks out of the frame; starting at `x > 0.41` would avoid that. Not checked in a browser.

## Coverage and order
- Follows slides 1 → 27 in order; every slide is represented (slides 22–24 by reference to Lecture 17, which is stated).
- Left out or compressed: slide 1's solid phase and paramagnet-to-ferromagnet (#8); slide 15's remark that the first line depends on the specific state and the second on the reservoir and average properties (conveyed only as "the state-independent part"); slide 18's explicit normalization condition (in words only); slide 19's intermediate steps; slide 23's example kets (in Lecture 17).
- Added: $n\lambda^3 \ll 1$ for a classical gas; the bosons' $\mu < \epsilon_\alpha$ condition; the graph; the worked example (own). All correct.
- Lecture 19 claim (`leadsTo`: "The density of states and the free Fermi gas, using the Fermi–Dirac occupation"): correct. `_course.json` Lecture 19 = "Density of states and the free Fermi gas", and the L19 slide text treats non-interacting spin-½ fermions, the Fermi sea, $k_F$ and $E_F$.

## Licensing
- No "All rights reserved" or "Courtesy of" notice: grep of the text found none, and every slide image was inspected (slides 3, 5 and 11 have simple sketches with no credit). Only the standard OCW notice on PDF page 28.
- No figure reused; the page's one graph is generated from formulas.
- No OpenStax or LibreTexts material.
- No em dashes (—) in the page or the calcs file (grep found none; "Fermi–Dirac", "Bose–Einstein" and "slides 1–27" use en dashes, which is fine).
- Wording is rewritten. Closest to the slides, both short and acceptable: "a frequent source of misunderstanding" (slide 2: "This is often a source of miss-understanding"); "for when the particle number is not fixed" (slide 10: "Used when the the particle number is not fixed").

## Notes
- Stated notation changes verified: $\Xi$ for the slides' script $\mathcal Z$ is correct (slides 18, 19, 25–27 use $\mathcal Z$); $\epsilon_0$ is the slides' own symbol for the binding energy (slides 5, 7–9), so it is not a change; $\Phi_G$ is also the slides' own symbol, so the "script G" remark is wrong (#1). The unstated change is $\bar N \to \langle N\rangle$ (#6). The slides write $k_B$; the page writes $k$, consistent with earlier 8.044 pages.
- One error (#1, a false statement about the slides' notation, a one-line fix) and one warning (#2, missing cosmology link). The physics, citations (apart from the slide-range refinements #3, #4, #7) and all numbers are correct.

## Resolution (2026-11-17, by the page author)

- Error 1: the wrong "script G" remark is removed, both on the page and in the symbol meaning. The page now says that the slides also write Φ_G, and that most slides write N̄ where the page writes ⟨N⟩.
- Warning 2: a cosmology callout now covers occupations in the early universe (μ ≈ 0, the 7/8 factor), with a `leadsTo` to 8.286 Lecture 17.
- Info: the adsorbed density now cites slides 8–9 and the grand potential slides 20–21. Slide 7 is described with N atoms on the area. The N = 1 start of the grand sum is noted. Slide 1's list of phases is complete. The Bose–Einstein curve now starts at x = 0.45, where its value (about 1.76) stays inside the graph.
