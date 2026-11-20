---
page: content/year-3/8.06/born-oppenheimer-approximation.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l18-1/ ... /l18-3/ (read, local copies of the three resource pages; titles "L18.1 Born-Oppenheimer approximation: Hamiltonian and electronic states", "L18.2 Effective nuclear Hamiltonian. Electronic Berry connection", "L18.3 Example: The hydrogen molecule ion"; each page's only transcript .pdf link is the URL the page gives as reading1-3)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/b0a9e8628c1ff147e137527946219dfd_UOoKUdjVP78.pdf (read, local copy; L18.1 transcript, 6 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/bcd2e076c24614afc4853fd3825338a1_aY8iTiAfRzs.pdf (read, local copy; L18.2 transcript, 5 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/ef54d75a9123941832540a80b36f8e8b_omqSBV--uQ4.pdf (read, local copy; L18.3 transcript, 6 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-6-adiabatic-approximation/ (read, local copy of the chapter 6 PDF; pp. 16-21 rendered as images and every cited equation checked against the image; p. 13 text checked for eq. (5.12))
  - https://doi.org/10.1021/cr60018a003 (bibliographic record checked through the Crossref API: L. Pauling, Chem. Rev. 5(2), 173-213, 1 July 1928, title as on the page; the article itself is paywalled and was not read)
  - https://webbook.nist.gov/cgi/cbook.cgi?ID=C12184906&Mask=1000 (read, H₂⁺ X ²Σg⁺ constants: ωe = 2321.7 cm⁻¹, Be = 30.21 cm⁻¹, re = 1.052 Å, theoretical D₀ = 2.65073 eV; used only to judge the worked example, not cited by the page)
  - NIST CODATA pages (not opened; a₀, Ry, ħc, m_p c², m_d c², m_p/m_e agree with CODATA 2018 as I know them)
verdict: needs-changes
---

# Review: The Born–Oppenheimer approximation

The transcripts have no printed footers, so PDF page numbers are the citation convention; every transcript citation on the page was checked with `pdftotext -f N -l N`. In the notes, printed page = PDF page. Neither the three transcripts nor the chapter 6 notes carry a "rights reserved" or "Courtesy of" notice. The author's notes.md was not used.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The electronic energy curve", paragraph after "Small separations": "For large $x$ it rises towards $-1$ Ry, the energy of a hydrogen atom, approached exponentially." | L18.3 p. 4: "So it starts growing and then asymptotes with an exponential there." This is a lecturer slip: from the page's own LCAO formula, $D \to 1/x$, so $E_e/\text{Ry} = -1 - 2/x + O(e^{-x})$. Numerically $E_e + 1$ = −0.4384, −0.2006, −0.1000 Ry at $x$ = 5, 10, 20, against $-2/x$ = −0.4, −0.2, −0.1. Physically the far proton still feels the attraction $-e^2/R$ of the atom's electron cloud. Only the total $E_e + V_{NN}$ approaches $-1$ Ry exponentially ($E_e + V_{NN} + 1$ = −0.038, −6.0×10⁻⁴, −5.5×10⁻⁸ Ry at $x$ = 5, 10, 20). | Repeats the slip (writing rule 4). | E.g. "For large $x$ it rises towards $-1$ Ry, but slowly, as $-1 - 2/x$: the far proton is still attracted by the electron cloud of the atom, $-e^2/R$. [The lecture says the approach is exponential; that holds for the total $E_e + V_{NN}$ below, where $V_{NN} = +e^2/R$ cancels the $1/x$ term.]" Optionally add a calcs `limit` entry for $(E_e/\text{Ry} + 1)\,x \to -2$. |
| 2 | warning | "Adding the repulsion of the protons", last bracket: "(The 2.8 eV is the depth of the well; the energy needed from the lowest vibrational level is a little less, by the zero-point energy found in the worked example below.)" | The notes (p. 21) give only "E = −2.8 eV"; the lecture says "True value is 2.8 ev" (L18.3 p. 5). The measured well depth of H₂⁺ is about 2.79 eV, and D₀ = 2.65 eV (NIST webbook), so the real zero-point energy is about 0.14 eV (ωe = 2321.7 cm⁻¹ gives ½ħω ≈ 0.144 eV). | Points from the measured 2.8 eV to the LCAO model's zero-point energy (0.113 eV), which implies a real D₀ of about 2.69 eV. Readers would apply a model number to the measured value. The "depth of the well" reading is also the page's own, with no source. | "...is a little less, by the zero-point energy of the vibrations (the worked example below finds 0.11 eV in the LCAO model; the real ion's is about 0.14 eV, and its measured D₀ is 2.65 eV)", with a reference (e.g. NIST Chemistry WebBook, H₂⁺ constants) added to `references`; or simply drop "found in the worked example below". |
| 3 | info | "The hydrogen molecule ion": "[The lecture first writes a single gradient and corrects it to a Laplacian, as here.]" | L18.3 p. 1 says "one Laplacian" aloud; the correction "that Hamiltonian there-- should have a square here" is on L18.3 p. 3. The board itself is not visible in the transcript, so "a single gradient" is inferred, though fairly. | No location. | Add "(L18.3 transcript p. 3)". |
| 4 | info | Formula "The effective nuclear Hamiltonian", cited eq. (6.25), p. 19 | Notes (6.25) is written as ⟨H⟩ = ∫dR η*[Σ(P−A)²/2M + U]η; $H_{eff}$ is read off from it. The lecture writes $H_{eff}$ directly on the board (L18.2 pp. 3-4). | $H_{eff} = \ldots$ cited to (6.25). | Fine as is; optionally "read off from eq. (6.25)". |
| 5 | info | "The electronic energy curve": "Zwiebach plots it against $x = R/a_0$ ... (L18.3 transcript p. 4)" | $x = R/a_0$ is introduced at the bottom of L18.3 p. 3; the rydberg is on p. 4. | p. 4 only. | "(L18.3 transcript pp. 3-4)". |
| 6 | info | Section "Lowest-order Born–Oppenheimer", the bracket on notes §6.2 | Notes §6.2 (pp. 19-20) is a sketch with typos ((6.31) lacks a minus sign; (6.36)-(6.37) are fragmentary, ending "would get perfect agreement!!"). | "the notes reach the same terms by the direct route ... and drop the couplings to the others". | Accurate as a summary and clearly labelled as notes-only; "sketch" would be more precise: "the notes sketch the direct route". Optional. |

All formulas match their cited equation and page (checked against the rendered notes pages):
- (6.8) p. 16, (6.9) p. 16, (6.10) p. 17 (notes label $i$, page $k$; disclosed), (6.11), (6.13), (6.14), (6.15) p. 17, (6.16) p. 18, (6.21) p. 18 (with the $i\hbar$, equal to $-\int\phi^*\vec P_\alpha\phi$), (6.25), (6.26), (6.28), (6.29) p. 19, (6.38), (6.39) p. 20 (notes $A$, page $C$; disclosed). Signs of the two "funny" terms in $U$ (+ħ²/2M ∫|∇φ|², −A²/2M) match (6.26) and L18.2 p. 3.
- Normalization cited to L18.3 p. 3: the transcript gives $|a|^2 = 1/[2(1+I)]$ with $I = e^{-R/a_0}(1 + R/a_0 + R^2/3a_0^2)$, as on the page.
- Rydberg $e^2/2a_0$ ≈ 13.6 eV (L18.3 p. 4); $-3 + x^2$ (L18.3 p. 4); $V_{NN} = \text{Ry}\cdot 2/x$ (L18.3 pp. 4-5); minimum 2.49 and −1.1297 (L18.3 p. 5); 2.49 × 0.529 Å ≈ 1.32 Å (L18.3 p. 6): all where cited.
- Eq. (5.12) for the earlier Berry connection is on p. 13 of the same chapter 6 PDF, as the page says.
- Notes-only material is labelled as such: (6.17)-(6.24) "the notes do the algebra"; (6.27)-(6.28) "The notes go on to write"; §6.2 "In a section the lecture skips". The ħ convention of $\vec A_\alpha$ is stated correctly ($\vec A_\alpha$ = ħ × the α components of $i\langle\psi|\nabla_R|\psi\rangle$ for the electronic ground state).
- The LCAO formula cited to Pauling 1928 (not MIT; the page says the lecture does not write it): re-derived independently. With $H_e = T - e^2/r_1 - e^2/r_2$: $H_{11} = -\text{Ry}(1 + 2D)$, $H_{12} = -\text{Ry}(I + 2X)$, $E_e = (H_{11} + H_{12})/(1 + I) = -\text{Ry}[1 + 2(D + X)/(1 + I)]$. The closed forms of $I$, $D$, $X$ were checked by 2-D numerical integration in elliptic coordinates at $x = 2.49$ (I = 0.460706, D = 0.391972, X = 0.289356, agreeing to 10⁻¹⁰). The bibliographic data are correct (Crossref). Whether Pauling's paper prints exactly this form was not checked (paywalled); the attribution of the 1s + 1s treatment of H₂⁺ (1.77 eV at 1.32 Å) to Pauling 1928 agrees with the standard textbook history as I know it, and the `location` says "written here in modern notation". Uncertain but plausible; acceptable as sourced.

Slips the page attributes, all checked:
- "little m" electrons: L18.1 p. 1 "capital N, nuclei-- and little m, electrons"; p. 2 then "lower case n". Real; fairly stated as "The transcript has".
- "−1.297": L18.3 p. 5 "e over Rydberg at the minimum is minus 1.297", then "minus 1 Rydberg minus 0.1297 Rydbergs". Real and fair.
- "106 angstroms": L18.3 p. 6. Real; notes p. 21 have 1.06 Å.
- Gradient for a Laplacian: see #3; real (corrected on p. 3).
- Notes (6.40) $e^{+R/a}$: real (the exponent is printed positive, with $a$ not $a_0$). The page's argument (overlap must fall off and equal 1 at R = 0) is right.

## Arithmetic and answer checks
Recomputed in Python (scipy), independent of the calcs file:
- LCAO minimum: x₀ = 2.49283, (E_e + V_NN)/Ry = −1.129662; binding 0.12966 Ry × 13.605693 = 1.764 eV; R = 2.49283 × 0.529177 = 1.3191 Å. Page values 2.49 (2.493), −1.1297, 0.1297 Ry, 1.76 eV, 1.32 Å correct.
- 1.3191/1.06 − 1 = 24.4 % ("about 24%"); 1.764/2.8 = 63.0 % ("about 63%"). Correct.
- Limits: E_e(x→0) → −3 Ry; (E_e/Ry + 3)/x² = 0.9990 at x = 0.001 → 1. Correct. $\langle T\rangle$ = +1 Ry, $\langle V\rangle$ = −2e²/a₀ = −4 Ry for a 1s of size a₀ around charge 2e; true Z = 2 ground state −4 Ry with half the size. Correct.
- Worked example: curvature d²U/dx² at x₀ = 0.125666 (page 0.1257); k = 0.1257 × 13.606/0.5292² = 6.1070 eV/Å² = 97.8 N/m; μc² = 469.14 MeV; ħω(H₂⁺) = 0.22514 eV, ½ħω = 0.11257 eV; 1.7641 − 0.1126 = 1.652 eV ("about 1.65"); μc²(D₂⁺) = 937.81 MeV, ħω = 0.15924 eV, ½ħω = 0.0796 eV ("0.080"); ratio 0.7073 ≈ 1/√2; R₀ = 1.3193 Å; E_rot(ℓ = 1) = 4.769 meV; ratios 0.016547 and 0.00035048 ("1 : 0.0165 : 0.00035"); √(1/1836) = 0.02334, 1/1836 = 0.000545. All correct. With full-precision constants ħω = 0.22512 eV, no change at the quoted precision.
- Is the worked example misleading against real H₂⁺? The example is framed throughout as "in the LCAO potential" / "in this model", and does not claim agreement with experiment, so as written it does not mislead. For the record, the real values are ħωe ≈ 0.288 eV (2321.7 cm⁻¹; the model is 22 % low), ℓ = 1 rotation 2Be ≈ 7.5 meV (model 4.77 meV, 36 % low, because R₀ is 25 % too large), zero-point ≈ 0.14 eV. The one place where model and measurement are mixed is the bracket after "Experiment gives" (finding #2). A sentence in the example noting that the real ion vibrates faster (ħω ≈ 0.29 eV) because its well is deeper and narrower would be a useful addition, optional.
- Plot: E_e curve −3 at x = 0, −2.577 at x = 1, −1.253 at x = 8 (within the range [−3.2, 1]); the total curve is hidden where above 1 Ry (it reaches 1 Ry near x ≈ 0.52) and dips below −1 with the minimum point at (2.493, −1.1297), on the curve. Caption correct ("rising towards −1 Ry" is fine; see #1 for the body text).
- Quiz: Q1 answer 3 correct. Q2 answer 0 correct (real normalized φ gives ∫φ∇φ = ½∇∫φ² = 0; the |∇φ|² term survives). Q3 answer 1 correct, explanation correct. Q4 answer 2 correct (0.1297 × 13.606 = 1.765 eV ≈ 1.76). Distractors are all wrong.
- Flashcards: all four correct (|C|² = 1/[2(1 + I)]; A⃗_α with ħ has units of momentum; 2.49 a₀ ≈ 1.32 Å, −1.1297 Ry, 1.76 eV; measured 1.06 Å, 2.8 eV).
- Calcs file `calcs/8.06/born-oppenheimer-approximation.yaml`: `npm run calc:test -- -k born` gives 45 passed. Every number on the page has an entry. If #1 is fixed, the `separated-atoms-limit` entry ("approached exponentially" is not claimed there) can stay, and a `(E_e/Ry + 1)·x → −2` limit would document the 1/x tail.
- `npm run content:check`: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Follows MIT's order: L18.1 (energy scales recalled, labels, H and H_e, fixed skeleton, electronic states, exact expansion, one-term product) → L18.2 (variational method, ⟨H⟩ → H_eff, ⟨H_e⟩ → E_e, H_eff with Berry connection and U, real φ, lowest-order BO, fast/slow lesson with quarks) → L18.3 (H₂⁺, binding as least energy to start dissociating, H_e, LCAO, symmetry, good at large R / poor at small R, normalization, E_e curve, square-well analogy, V_NN, total potential, minimum, binding, separation, experiment, harmonic vibrations, end of chapter). Nothing in the three videos is left out.
- Additions, all labelled: notes (6.15) split, (6.17)-(6.24) derivation pointer, (6.27)-(6.28), §6.2; the LCAO formula (Pauling); the worked example (own).
- Notes (6.1)-(6.7) belong to the previous page (berry-phase-molecules-energy-scales); not repeated here except as a recap. Correct.

## Licensing
- No "rights reserved" or "Courtesy of" notices in the transcripts or chapter 6 notes. The notes' hand sketches for (6.38) and (6.41) are not reproduced; the page's graph is generated from the LCAO formula.
- No OpenStax/LibreTexts material. No verbatim copying beyond short quoted phrases ("A lot of physics in that step", "funny terms", "baby version" paraphrased); the prose is rewritten.
- The worked example (curvature, H₂⁺/D₂⁺ vibrations, rotation, hierarchy) is original; MIT only mentions that vibrations could be computed.
- Pauling 1928 is used for a formula (a fact), not text; CODATA values are facts.

## Notes
- leadsTo: 8.06 Lecture 19, "Scattering: amplitude, cross sections and partial waves" in `_course.json`; the "why" matches L18.3 p. 6 ("next time, we will begin with scattering"). Correct.
- No `Callout kind="cosmology"`, so no cosmology claims to check. A real connection exists if the author wants one (H₂⁺ as an intermediate in forming H₂ after recombination, H₂ being the coolant of the first gas clouds), but only if a site page supports it; not required.
- Symbols (data/symbols.json, diff against HEAD): new meanings for this page are correct and scoped to `born-oppenheimer-approximation` (α label, μ reduced mass, φ, ψ, ω, ℓ, a, H, k (state label / spring constant), x, i, n, e, r, D, A, C, N, M, R, x₀, r₁, r₂, r⃗_i, E, U, U₀, R₀, m_p, η, I, p⃗_i, R⃗_α, ψ₀, X, E_e, H_N) and new entries A_α, H_e, H_eff, M_α, P_α, V_NN, V_eN, V_ee, ∇_α, ∇_i, φ_R, m_d. Units are sensible (A⃗_α in kg m/s, consistent with the ħ convention). One small point: the shared E_rot meaning (scoped to this page too) says "L²/2I", but on this page I is the overlap integral; the page itself writes E_rot = ħ²ℓ(ℓ + 1)/2μR₀². Consider a page-scoped E_rot meaning without "I" (info).
- Uncertain: the exact content of Pauling 1928 (not read); the "2.8 eV = well depth" reading rests on the NIST webbook values, not on MIT, which only says "true value is 2.8 ev".


## Resolution (2026-11-18, by the page author)

1. (error) Large-x behaviour of E_e: the page now says E_e rises towards −1 Ry slowly, as −1 − 2/x, because the far proton is still attracted by the atom's electron cloud (−e²/R). A bracket notes that the lecture's "asymptotes with an exponential" (L18.3 transcript p. 4) holds for the total E_e + V_NN, where +e²/R cancels the 1/x term. Calcs: new limit entries `separated-atoms-tail` ((E_e/Ry + 1)·x → −2) and `total-exponential` ((E_e + V_NN)/Ry + 1, times x³, → 0).
2. (warning) The bracket after "Experiment gives" no longer applies the LCAO zero-point energy to the measured value. It now quotes the NIST Chemistry WebBook (new reference `nist-h2plus`): vibrational wavenumber 2321.7 cm⁻¹, so a quantum of about 0.29 eV and a zero-point energy of about 0.14 eV, and D₀ ≈ 2.65 eV; 2.65 eV plus the zero-point energy is about 2.8 eV, the depth of the well. The worked example ends with one sentence saying that the real ion vibrates faster (quantum about 0.29 eV). Calcs: `h2plus-wavenumber` and `h2plus-d0` (kind: fact, origin later-data), and `h2plus-quantum`, `h2plus-zpe`, `h2plus-depth` (recomputed).
3. (info) The Laplacian correction now cites L18.3 transcript p. 3 and no longer says "a single gradient". The rydberg and x = R/a₀ sentence cites L18.3 transcript pp. 3–4. The section 6.2 bracket says the notes "sketch" the direct route.
4. (info) (6.25) citation left as is.
5. (info) E_rot: the page is removed from the shared meaning ("L²/2I", I being the overlap integral here) and has its own meaning, "E_rot = ħ²ℓ(ℓ + 1)/2μR₀²: the rotational energy of H₂⁺ in the worked example".

Status set to `reviewed`.
