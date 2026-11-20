---
page: content/year-3/8.06/scattering-amplitude-cross-sections-partial-waves.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l19-1/ ... /l19-4/ (read, local copies of the four resource pages; titles "L19.1 Elastic scattering defined and assumptions", "L19.2 Energy eigenstates: incident and outgoing waves. Scattering amplitude", "L19.3 Differential and total cross section", "L19.4 Differential as a Sum of Partial Waves"; each page's only transcript .pdf link is the URL the page gives as reading1-4)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a08cb56aa3fb7ca4449b72aec71915d1_GZzrMyY01tE.pdf (read, local copy; L19.1 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/2efbe452c3da583f9e19bb22e72bf1bc_41ee6EsHchA.pdf (read, local copy; L19.2 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/dfa9d00d04b09c38b228eae92a999b95_papfq4sdC3w.pdf (read, local copy; L19.3 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/8412223ff0b158fa7425f7519bc6d74b_868odGqmB1E.pdf (read, local copy; L19.4 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-7-scattering/ (read, local copy of the chapter 7 PDF; printed pp. 133-139 read as text, pp. 134-137 also rendered as images and every cited equation checked against the image)
  - https://physics.nist.gov/cgi-bin/cuu/Value?re (read: CODATA 2022, r_e = 2.817 940 3205 × 10⁻¹⁵ m)
  - https://physics.nist.gov/cgi-bin/cuu/Value?sigmae (read: CODATA 2022, σ_e = 6.652 458 7051 × 10⁻²⁹ m²)
verdict: needs-changes
---

# Review: Scattering: amplitude, cross sections and partial waves

The transcripts have no printed footers, so PDF page numbers are the citation convention; every transcript citation on the page was checked with `pdftotext -f N -l N`. In the notes, printed page = PDF page + 132. Neither the four transcripts nor chapter 7 carry a "rights reserved" or "Courtesy of" notice (the notes carry Zwiebach's © line under the course's CC licence). The author's notes.md was not used.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The cross section from the amplitude", last paragraph: "Zwiebach's loose illustration is the LHC, where the Higgs boson was first produced a few times a day and later a few hundred times a day." | L19.3 p. 4: "It began with a few Higgs's a day, and later, it's getting a few hundred Higgs's a day." A loose classroom figure; he does not say "produced". | States the numbers as production rates. With σ(pp → H) ≈ 20 pb at 8 TeV and about 20 fb⁻¹ delivered in 2012, the LHC produced roughly 4-5 × 10⁵ Higgs bosons that year, of order 10³ per day; Run 2 (≈ 55 pb at 13 TeV) gives of order 10⁴ per day. "A few per day" can at most describe cleanly reconstructed events in the rarest channels. (My estimates from standard published cross sections and luminosities, not from a cited source; the order of magnitude is secure.) Repeats a lecturer slip and sharpens it into a wrong number (writing rule 4). | E.g. "Zwiebach's loose illustration is the LHC: whether the detectors see one Higgs boson a day or hundreds depends on the cross section and the beam intensity. [His figures, a few a day at first and a few hundred later, are rough; the numbers actually produced were far larger, of order thousands per day, and only a small fraction is cleanly detected.]" Or drop the figures. |
| 2 | warning | "The equation to solve", bracket: "(The notes write $M$ for the mass in section 7.1 and $m$ from section 7.2 ...)" | Notes use $M$ in (7.1.1)-(7.1.4) (p. 134) but switch to $m$ already in section 7.1, from (7.1.11) on (p. 136: ħ/m, ħk/m, v = ħk/m). | "M in section 7.1, m from section 7.2". | "(The notes write $M$ for the mass in eqs. (7.1.1)-(7.1.4) and $m$ from eq. (7.1.11) on; ...)" |
| 3 | warning | Frontmatter `references.codata-thomson` and `codata-re`, `location` | The cited NIST pages now give CODATA 2022: σ_e = 6.652 458 7051 × 10⁻²⁹ m², r_e = 2.817 940 3205 × 10⁻¹⁵ m. | Locations quote the CODATA 2018 digits (6.6524587321, 2.8179403262). Rounded values on the page (6.65 × 10⁻²⁹ m², 0.665 b) are unaffected. | Update both `location` strings (and the `r_e` input in the calcs entries) to the 2022 values, or write "CODATA 2018" and link the 2018 archive. |
| 4 | warning | Symbols on this page: `r_e` | n/a | The entry `r-e` in data/symbols.json has the global `name` "effective radius" (from the galaxy pages). `components/PageSymbols.tsx`, `SymbolPopups.tsx` and `SymbolCard.tsx` all display `name`, so on this page the classical electron radius is listed and popped up as "effective radius". | Give the entry a neutral name ("r e", like "f 0", "P l") so each page's meaning carries the sense, or split the classical electron radius into its own entry if the tooling allows one form in two entries. |
| 5 | info | "An outgoing spherical wave", bracket after (7.1.7): "[The lecture first writes the condition for $e^{ikr}$ without the $k^2$ and then corrects it; the condition to check is this one.]" | L19.2 p. 3: he asks whether "Laplacian of e to the ikr roughly equals zero", then "I didn't write this well ... Laplacian [plus] k squared of this thing equal to zero", which is still false for $e^{ikr}$; then states the $e^{ikr}/r$ result. The slip is real. | Placed after (7.1.7), so "this one" reads as if it referred to the $e^{ikr}/r$ equation. | Move the bracket after (7.1.6) and end it "...; the correct test is (7.1.6), which $e^{ikr}$ fails." |
| 6 | info | "An outgoing spherical wave": "In the notes' words, $e^{ikr}$ is the radial solution $u_{El}(r)$ for $l = 0$ ..." | Notes p. 135: "consistent with the radial equation having a solution u(r) = e^{irk} in the region where the potential vanishes." No $l = 0$. | Adds "$l = 0$" inside a "notes' words" attribution. | "In the notes, $e^{ikr}$ is a solution $u(r)$ of the radial equation (for $l = 0$) where ...", or drop "in the notes' words". |
| 7 | info | "The plane wave as a sum of partial waves", last sentence: "... the incoming waves being the same with or without the potential (L19.4 transcript p. 4; notes eq. (7.2.10), p. 138)" | (7.2.10)-(7.2.11) on p. 138 give the large-$r$ form; the statement that the incoming partial waves are unchanged by the potential is on notes p. 139 (just after (7.2.15)). L19.4 does not say it. Lecture 20 was not read, so what it covers is unverified here. | Single citation p. 138. | "(notes eqs. (7.2.10)-(7.2.11), p. 138, and p. 139)". |
| 8 | info | "The differential cross section", last paragraph: "Zwiebach admits this is a little funny, but it gives the right answer, and any other constant factor in ψ would cancel ..." | L19.3 p. 2 has "a little funny" and "we're going to get it right"; the cancellation of a constant factor is not in the lecture. | Reads as part of Zwiebach's remark. | New sentence: "Any other constant factor in ψ would cancel between numerator and denominator (worked example, part (d))." |
| 9 | info | "Elastic scattering and its assumptions", Franck-Hertz sentence, citation "(L19.1 transcript p. 3; notes p. 134, footnote 1)" | The footnote says only that the Frank-Hertz experiment involved inelastic collisions of electrons with mercury atoms that were excited; the dates 1914/1913 and "first evidence" are L19.1 p. 3. | Fine as a combined citation; history checked: Franck and Hertz 1914, Bohr 1913 are correct, and the spelling note ("Frank" in both transcript and notes; the physicist is James Franck) is accurate. | None needed. |

All formulas match their cited equation and page (checked against the rendered notes pages):
- (7.1.1)-(7.1.3), (7.1.4) on p. 134; (7.1.5)-(7.1.9) on p. 135; (7.1.10)-(7.1.14) and the unnumbered dn/dt display on p. 136; (7.2.1)-(7.2.8) on p. 137; (7.2.9) on p. 138. Notation changes ($\psi_{in}$ for the notes' φ, $f$ for $f_k$, $M \to m$, $Y_{lm}(\theta,\phi)$ for $Y_{lm}(\Omega)$) are all declared on the page.
- Board formulas cited to transcripts: radial Laplacian, L19.2 p. 3 (yes); free radial equation with ħ²/2m, L19.4 p. 2 (yes, and it is also the unnumbered first line on notes p. 137); general free solution and the $Y_{l0}$ form of the sum, L19.4 p. 3 (yes).
- (7.2.8) is clearly marked as notes-only ("The notes give the two facts ... The lecture states the result without proof"), and L19.4 p. 4 indeed only states (7.2.9) ("perhaps even you could discuss this in recitation").
- The page's (7.2.7) remark is right: with $Y_{l0} = \sqrt{(2l+1)/4\pi}\,P_l$, the notes' $a_l = (2l+1)\,i^l$, and projecting $e^{ixu} = \sum(2l+1)i^l j_l(x) P_l(u)$ onto $P_l$ with $\int P_l^2 = 2/(2l+1)$ gives $j_l = \frac{1}{2i^l}\int e^{ixu}P_l\,du$.

Slips the page attributes (all checked, all real and fairly stated):
- "plane waves are always solutions": L19.2 p. 2, "if the potential is not zero, plane waves are always solutions without any potential". Garbled as the page says.
- $e^{ikr}$ condition first written without $k^2$: L19.2 p. 3 (see #5 on placement).
- "Laplacian" for gradient: L19.3 p. 3, "this Laplacian gives you-- not Laplacian-- this gradient". Corrected live, as the page says.
- "Frank" for Franck: L19.1 p. 3 and notes p. 134 footnote 1.
- Notes' $M$: real, but see #2 on where it changes.
- Not noted on the page (harmless, the page writes the correct forms): L19.4 p. 4 says "sine of x is ... e to the ix minus e to the minus ix over 2" (missing $i$); L19.4 p. 2 says "l times l plus 1 over r" (missing square).

## Arithmetic and answer checks
- Worked example (a): $f_0^2 = 25$ fm² = 0.25 b; $0.25 \times 1.96 = 0.49$, $0.25$, $0.25 \times 0.36 = 0.09$ b/sr. Ratio 5.44, "more than five times": correct.
- (b): $2\pi f_0^2(2 + 2c^2/3) = 157.08 \times 2.10667 = 330.92$ fm² = 3.31 b; forward fraction $1.45333/2.10667 = 0.6899$, 69%: correct.
- (c): 25 fm² = 2.5 × 10⁻²⁵ cm²; $10^8 \times 10^{22} \times 2.5\times10^{-25} \times 0.01 = 2500$ s⁻¹; $N\sigma = 10^{22} \times 3.309\times10^{-24} = 0.0331$, 3.3 × 10⁶ s⁻¹: correct. Thin-foil assumption stated.
- (d): correct reasoning (linearity, $|C|^2$ cancels).
- Physics of the example (info): for *slow* neutrons ($ka \ll 1$) scattering is almost pure s-wave and isotropic, so a 40% $\cos\theta$ term is unrealistic; it is an invented "suppose" amplitude, so not wrong, but "fast neutrons (a few MeV)" would make it plausible.
- $(\nabla^2 + k^2)e^{ikr} = (1/r)(re^{ikr})'' + k^2e^{ikr} = 2ik\,e^{ikr}/r$: correct (text and quiz 1).
- Incident flux $\hbar k/m\,\hat z$; $dn$ and $dn/dt$ algebra: correct.
- Plot: closed forms $\rho j_1 = \sin\rho/\rho - \cos\rho$, $\rho j_2 = (3/\rho^2 - 1)\sin\rho - 3\cos\rho/\rho$ are correct; the cutoffs near 0 avoid only round-off; caption claims ($\rho^{l+1}$ near 0, unit-amplitude sine shifted by $l\pi/2$) correct.
- Thomson: $(8\pi/3)(2.81794\times10^{-15})^2 = 6.6525\times10^{-29}$ m² = 0.665 b: correct (both 2018 and 2022 CODATA round to this).
- Callout rate $n_t\sigma v$ and mean free path $1/(n_t\sigma)$: correct.
- Calcs file: `npm run calc:test -- -k scattering-amplitude` gives 50 passed. One `shown` mismatch: `sigma-total-barn` has `shown: ['The forward hemisphere is $0 < u < 1$']`, which is not the text of that number; it should point at "or 3.31 b" (info).
- Quiz 1 (answer 2), 2 (answer 0), 3 (answer 3: $j_0(0) = 1$, $\sqrt{4\pi}Y_{00} = 1$, $j_{l\ge1}(0) = 0$), 4 (answer 1): all marked answers and explanations correct; distractors are wrong for the stated reasons.
- Flashcards: all four correct and consistent with the notes.

## Coverage and order
- The page follows L19.1 → L19.4 and notes pp. 133-138 in order: motivation and reactions, elastic scattering and assumptions, (7.1.1)-(7.1.4), 1D analogy, incident wave, outgoing spherical wave and its $1/r$, scattering amplitude, cross-section definition, flux, box count, $d\sigma/d\Omega$ and σ, LHC remark, central potential, free radial equation, $j_l$/$n_l$, plane-wave expansion, incoming/outgoing reading.
- Nothing of substance in the four videos is omitted. Small omission: L19.4 p. 1 opens with the remark that partial waves rely on one-dimensional analogies (optional).
- Added beyond MIT: the radial-Laplacian check worked out for $e^{ikr}$, the coefficient/projection remark on (7.2.7)-(7.2.8), the plot, the worked example and the cosmology callout, all labelled as the page's own.
- Notes (7.2.10)-(7.2.11) are described in words and pointed forward to Lecture 20: appropriate, since L19.4 ends at the incoming/outgoing remark.
- The opening's "last approximation method before identical particles" fits the syllabus (scattering L19-22, identical particles L22-24) and L19.1 p. 1 ("the next chapter in our study of approximations").

## Licensing
- No "All rights reserved" or "Courtesy of" material in the sources; the notes' hand-drawn figures (p. 135, p. 136) are not reproduced; the only graphic is a generated Plot.
- No Griffiths, OpenStax or LibreTexts text or reference. No verbatim copying beyond short, attributed phrases ("the area that removes from the incident beam the particles to be scattered into dΩ", "incredible relation", "most important equation"), which are acceptable.
- No em dashes in the page.

## Notes
- Cosmology callout and leadsTo: fair and honestly attributed. The 8.286 L17 page (temperature-and-decoupling) does discuss photons scattering off free electrons until decoupling; it never names the Thomson cross section, and the callout does not claim it does. The 8.902 L19 page (dark-matter-freeze-out) uses $n\langle\sigma v\rangle$ against $H$ exactly as described. The callout states plainly that Thomson scattering (photons) and annihilation (relativistic QFT) lie outside the chapter's spinless nonrelativistic setting. Optional: 8.902's cmb-anisotropies page already uses the Thomson cross section and could be added as a further link.
- leadsTo 8.06 L20 ("phase shifts ... optical theorem") matches the syllabus title and notes pp. 138-139; L20 itself was not read.
- Prerequisites exist and fit: radial-equation-free-particle (8.05 L22, spherical Bessel functions), probability-current (8.04 L6), step-potential-scattering (8.04 L16, the 1D analogy); born-oppenheimer-approximation is the previous lecture (order, not content).
- Symbols: every meaning added for this page was read and fits its use (θ as scattering angle, ρ = kr, σ incl. ⟨σv⟩, ΔΩ under Δ, a as range, c, f, $f_0$, C, N, $n_t$, $\psi_s$, $\psi_{in}$ "Zwiebach's φ", $J_{in}$, $Y_{l0}$, $a_l$, $a_{lm}$, $b_{lm}$, $A_l$, $B_l$, M, $r_1$, $r_2$, u, x, $\sigma_T$). Apart from #4, small point: the `a-l-partial` meaning gives the $P_l$ form of the coefficients, while the page displays $a_l$ in the $Y_{l0}$ form (there $a_l = \sqrt{4\pi}\sqrt{2l+1}\,i^l$); the meaning is correct as worded, optionally add the $Y_{l0}$ value.
- `npm run content:check` and `npm run build` were not run by the reviewer.

## Resolution (2026-11-18, by the page author)

1. Error (LHC): the sentence now says only that Zwiebach illustrates the role of the cross section with Higgs bosons at the LHC (L19.3 p. 4), with a bracket: his figures (a few a day, later a few hundred) are rough classroom numbers for events seen; far more Higgs bosons were produced and only a small fraction is cleanly detected. No production rate is stated.
2. Mass notation: now "M in eqs. (7.1.1)–(7.1.4) and m from eq. (7.1.11) on".
3. CODATA: both reference locations updated to CODATA 2022 (σ_e = 6.6524587051 × 10⁻²⁹ m², r_e = 2.8179403205 × 10⁻¹⁵ m); the calcs inputs use the 2022 r_e. Rounded page values unchanged.
4. r_e name: the shared `r-e` entry is not renamed. The page no longer uses the symbol r_e: the callout quotes σ_T ≈ 6.65 × 10⁻²⁹ m² and says in words that it is 8π/3 times the square of the classical electron radius. This page's meaning was removed from the `r-e` entry.
5. The bracket on the e^{ikr} slip now follows (7.1.6) and ends "the test to apply is (7.1.6), with the k², which e^{ikr} fails".
6. "In the notes' words" replaced by "The notes put it this way: e^{ikr} is a solution u_El(r) of the radial equation (for l = 0) …".
7. Incoming waves unchanged: citation now "notes eqs. (7.2.10)–(7.2.11), p. 138, and p. 139".
8. The constant-factor remark is now a separate bracketed sentence pointing to part (d) of the worked example, so it is not attributed to Zwiebach.
9. No change needed.
- Worked example: now "fast neutrons, of a few MeV", for which a cos θ term is plausible; numbers unchanged.
- Calcs: `sigma-total-barn` now shows "or 3.31 b".
- Symbols: the `a-l-partial` meaning now gives both forms, √(4π)√(2l + 1)iˡ with Y_l0 and (2l + 1)iˡ with P_l.

Status set to `reviewed`.
