---
page: content/year-3/8.06/berry-phase-molecules-energy-scales.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l17-1/ ... /l17-4/ (read, local copies of the four resource pages; titles "L17.1 Configuration space for Hamiltonians", "L17.2 Berry's phase and Berry's connection", "L17.3 Properties of Berry's phase", "L17.4 Molecules and energy scales"; each page's only .pdf link is the URL the page gives as reading1-4)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/97a445929ef61e8844fb76c70eac3dbf_oEBwIJZ3RNM.pdf (read, local copy; L17.1 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/adb7d441f1723bf378493cd2bb4bb1e1_iGG9EG3SNz0.pdf (read, local copy; L17.2 transcript, 6 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/ce09ab5d1c77dab3139542df0aca72bd_RWPfOV0CV5Y.pdf (read, local copy; L17.3 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/bd03c46cd731f5c5484d2d892ca78717_9lc7mxULRF0.pdf (read, local copy; L17.4 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-6-adiabatic-approximation/ (read, local copy of the chapter 6 PDF; pp. 7 and 12-16 rendered as images and every cited equation checked against the image; pp. 16-22 text searched for the Born-Oppenheimer Berry connection)
  - https://doi.org/10.1098/rspa.1984.0023 (not opened; the citation M. V. Berry, Proc. R. Soc. Lond. A 392, 45 (1984) agrees with the standard bibliographic record as I know it)
  - NIST CODATA pages (not opened; the quoted values μ_B = 5.7883818060e-5 eV/T, ħ = 6.582119569e-16 eV s, ħc = 197.3269804 MeV fm, m_e c² = 0.51099895 MeV, m_p/m_e = 1836.15267, m_e = 5.48579909e-4 u agree with CODATA 2018 as I know them)
verdict: pass-with-notes
---

# Review: Berry's phase; molecules and energy scales

The transcripts have no printed footers, so PDF page numbers are the citation convention; every transcript citation on the page was checked against `pdftotext -f N -l N`. In the notes, printed page = PDF page. Neither the four transcripts nor the chapter 6 notes carry a "rights reserved" or "Courtesy of" notice. The author's notes.md was not used.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Berry's phase" section: "as Zwiebach remarks, formulas of this kind had been around for a long time, but Berry clarified the independence of time and showed that the phase could matter (L17.2 transcript p. 3)" | L17.2 p. 3: "these formulas, I think in many ways, were known to everybody for a long time. But Berry **probably** clarified this issue of the time independence and **emphasized that this could be interesting in some cases**." | Drops the hedge and strengthens "emphasized ... could be interesting" to "showed that the phase could matter". | Keep Zwiebach's hedge: "Berry, he suggests, clarified the independence of time and emphasized that the phase could be interesting". Optionally cite the `berry1984` reference here (it is in `references` but never cited in the body). |
| 2 | info | "Configuration space": "a magnetic field, an electric field, a spring constant ... (L17.1 transcript p. 2)" | The examples of axes (magnetic field, electric field, spring constant) are on L17.1 p. 3; p. 2 introduces the parameters R₁ ... R_N. | Cites p. 2 for both. | "(L17.1 transcript pp. 2-3)". |
| 3 | info | "Changing the phases": "Two people solving a messy problem would most likely choose different phases." (paragraph cited to L17.2 p. 3, then p. 4) | This remark is on L17.2 p. 5 ("if a problem is sufficiently messy, I bet you guys would all come up with different energy eigenstates"). | No citation of p. 5 for it. | Add "(L17.2 transcript p. 5)" after that sentence. |
| 4 | info | "A spin in a turning magnetic field": "The lecture states the result; the notes compute it from the curvature, which comes out as D± = ∓r̂/(2r²), where r = B" | Notes (5.27) state D± = ∓r̂/(2r²) without derivation ("We get") and then do the flux integral; the sphere has radius ρ, with R = (r, θ, φ), r = ρ (5.26). | "compute it", r = B. | "the notes give the curvature, D± = ∓r̂/(2r²), and integrate its flux". r = B is a fair reading (the configuration space is that of B), fine to keep. |
| 5 | info | "Rotational energies" Formula, cited (6.6) p. 16 | Notes (6.6) middle step has a typo: (m/M) ħ/(ma²) (ħ, not ħ²). | Writes ħ²/(ma²), correctly. | Silent correction is right; per the writing rules a short bracket ("the notes print ħ for ħ² here") would be consistent with the page's other slip notes. Optional. |
| 6 | info | Summary bullet 5 and frontmatter `summary`: "A spin one-half whose field direction traces a loop picks up minus half the solid angle" | L17.3 p. 3: the result is for the spin-up state along n̂ ("m+ state"); notes (5.27) γ± = ∓Ω/2. | The frontmatter summary omits "spin up along the field" (summary bullet 5 has γ± with "spin up or down", which is fine). | Frontmatter summary: "A spin one-half that stays up along a field whose direction traces a loop picks up minus half the solid angle." For an electron, the ground state is spin down along n̂ (+Ω/2), so the qualifier matters. |

All formulas match their cited equation and page (checked against the rendered notes pages):
- reading5 p. 12: (5.1), (5.2), (5.3)-(5.4). p. 13: (5.5) (notes write R(t); page R, fine), (5.6) (notes E(R); page E_n(R), as in the lecture), (5.7), (5.8), (5.9)-(5.10), (5.11), (5.12), (5.13), (5.14) (same sign convention e^{-iβ}). p. 14: (5.15)-(5.16), (5.17)-(5.18), (5.19), (5.20), (5.21), (5.22). p. 15: (5.23) in words, (5.24), (5.25) in words, (5.27), (6.1), (6.2). p. 16: (6.3), (6.4), (6.5), (6.6), (6.7).
- reading5 p. 7, eq. (2.18): |ψ'(t)⟩ = e^{-iχ(t)}|ψ(t)⟩, "instantaneous eigenstates are rather ambiguous": correctly reported.
- reading4 p. 4: ω ∼ √(m/M) ω_el, with the slip noted (see below). This is the one formula cited to a transcript; it is a lecture-only relation (not in the notes), so the transcript is the right source.

Transcript citations checked and correct: L17.1 pp. 1 (precise statement, norm O(1/T)), 1-2 (phases), 2 (clock vs geometric, parameters), 3 (solving for every R, path), 4 (instantaneous eigenstates); L17.2 pp. 1 (ν_n with d/dt, chain rule), 2 (dt cancels, minute vs billion years, Berry connection), 2-3 (one per eigenstate), 3 (Berry remark, redefinition with e^{-iβ}), 4 (new connection, vector-potential analogy), 4-5 (open path), 5 (not gauge invariant), 5-6 (closed path); L17.3 pp. 1 (real eigenstates, "don't even think of Berry's phase"), 1-2 / 2 (one dimension), 2 (3D, "perfect place to confuse yourself", Stokes, curvature name, recitation), 2-3 and 3 (spin example, −½ × solid angle, small flip probability); L17.4 pp. 1 (molecules, 10⁻⁴, size a, energies), 1-2 (physical picture, classical instability), 2-3 (H₂⁺, three protons, Lieb), 3 (vibration, k), 3-4 (ω), 4 (frequency relation, adiabatic thinking, rotations, hierarchy). Notes page citations (pp. 7, 12-16) correct.

Specific checks requested:
- **Berry connection and gauge change**: A_n = i⟨ψ_n|∇_R|ψ_n⟩ and A'_n = A_n + ∇_R β for |ψ'_n⟩ = e^{-iβ}|ψ_n⟩ match (5.12), (5.14)-(5.16) and L17.2 p. 4. The explanation (i × (−i∇β) = +∇β) is correct.
- **Open vs closed paths**: γ' = γ + β(R_f) − β(R_i) matches (5.17)-(5.18); closed paths gauge invariant per L17.2 pp. 5-6 and notes p. 14.
- **Single-valuedness of β**: the bracketed refinement (β may change by 2πk round a loop when e^{-iβ} is single-valued, so the closed-path phase is invariant mod 2π) is correct physics and correctly described as spelled out by neither source (the notes only say "completely well defined for closed paths"). Worked example (d) illustrates it correctly.
- **Real eigenstates / one parameter**: match (5.19), (5.20) and L17.3 pp. 1-2.
- **Stokes and curvature**: (5.21)-(5.22) correct; the gauge invariance of D_n is correctly attributed to the notes (5.23), not the lecture.
- **Spin one-half and the sign convention**: notes (5.24) H = μ_B B n̂·σ, (5.25) Hχ± = ±μ_B B χ±, so χ₊ (energy +μ_B B) is the +1 eigenstate of n̂·σ, spin up along n̂; (5.27) gives γ± = ∓Ω/2. The lecture (L17.3 p. 3) gives −½ × solid angle for "the spin up state, m+". Lecture and notes therefore agree, and the page's convention (χ_{n+} = spin up along n̂ = notes' χ₊ = lecture's spin up, γ₊ = −Ω/2) is consistent with both. The page's remark that for the electron this is the upper level is correct (μ = −μ_B σ). Independently verified with a gauge-invariant discrete Wilson loop (4000 points, +1 eigenvector of n̂·σ on the 60° cone): γ = −1.5707961, vs −π/2. Orientation statement (anticlockwise seen from outside, φ increasing) is consistent with the sign.
- **Monopole remark**: correct and marked as not used in the lecture (also not in the notes).
- **Molecular estimates (6.1)-(6.7) and hierarchy 1 : √(m/M) : m/M**: all match the notes and L17.4 pp. 1, 3-4.

Slips the page attributes, each checked against the transcript:
- ω_nuc with m/M: real. L17.4 p. 4: "so the omega nuclear is equal to little m over M omega electronic", right after "that's precisely that square root". Fairly stated.
- p "ħ times" the size: real. L17.4 p. 1: "the momentum of the electron is of the order of h bar times the size of the cloud". Fairly stated; notes (6.1) have ħ/a.
- m/M ∼ 10⁻⁴: not called a slip; the bracket gives 1/1836 = 5.45e-4 for a proton and 4.57e-5 for carbon and says the lecture's figure is a typical value for nuclei with several nucleons. Matches L17.4 p. 1 ("this could be the mass of one nucleus or a mass of a few nuclei ... typically it is 10 to the minus 4 ... an electron is about 2,000 times lighter than a single proton") and notes p. 15 ("typically m/M ≃ 10⁻⁴"). Fair. "Closer to 10⁻³" is right on a log scale (log₁₀ 5.4e-4 = −3.27).
- Lieb: reported only as Zwiebach's statement (L17.4 p. 3: "There are theorems like that, Elliott Lieb, a mathematical physicist, has proven all kinds of these things, and we might discuss some of that in the homework"); the page does not endorse a specific theorem. Fair.
- Landau-Zener aside ("the same observation that made the molecular states of last lecture's Landau-Zener problem instantaneous eigenstates"): supported by the L16 page and notes p. 10 (electronic configurations of a molecule with fixed nuclei separated by R).

## Arithmetic and answer checks
Recomputed independently (Python, CODATA values):
- Example 1: μ_B B = 5.788e-7 eV; ħ/(μ_B B) = 1.137 ns ("≈ 1.14 ns" ✓); T/(ħ/μ_B B) = 879 ("about 880" ✓); connection integrand −sin²30° = −1/4, γ₊ = −2π/4 = −π/2 ✓; Ω = 2π(1 − cos 60°) = π ✓; θ₊ = −μ_B BT/ħ = −879.4 rad ✓ (≈ 140 turns, "more than a hundred" ✓); doubled T: −1758.8 ("about −1759" ✓); γ₊ − γ₋ = −π ✓; other gauge: integrand +cos²30° = 3/4, phase 3π/2 = −π/2 + 2π ✓, e^{iγ} = −i both ways ✓; χ_{n+} = cos(α/2)χ_z+ + sin(α/2)e^{iφ}χ_z− is the +1 eigenvector of n̂·σ ✓; its φ-derivative and inner product i sin²(α/2) ✓; the e^{-iφ} state's derivative −i e^{-iφ}cos(α/2)χ_z+ ✓.
- Example 2: E_el = 197.327²/(0.510999e6 × 0.01) = 7.620 eV ("7.6", "7.62" ✓); λ = 162.7 nm ("163" ✓, UV ✓); √(m/M) = 0.02334 ✓; E_vib = 0.1778 eV ("0.18" ✓); λ = 6.97 μm ("7.0" ✓); E_rot = 4.150 meV ✓; λ = 0.299 mm ("0.30" ✓); periods 5.43e-16 s and 2.33e-14 s ✓; ratio 0.023 ✓; √1836.15 = 42.85 ("about 43" ✓).
- Quiz: Q1 answer 2 (path only) ✓; Q2 answer 0 (A + ∇β) ✓; Q3 answer 3 (equator, Ω = 2π, γ₊ = −π, e^{iγ} = −1) ✓ (either hemisphere gives −π mod 2π); Q4 answer 1 (√(m/M)) ✓. All explanations correct.
- Flashcards: all four correct.
- Calcs file `calcs/8.06/berry-phase-molecules-energy-scales.yaml`: every number shown on the page has an entry, values as above; `npm run calc:test`: 5155 passed. `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

## Coverage and order
- Follows L17.1 → L17.2 → L17.3 → L17.4 in order, and notes §5 (5.1)-(5.27) and §6 intro (6.1)-(6.7) completely. No MIT segment omitted.
- Additions, all marked as the page's own: the single-valuedness refinement, the monopole remark, the two worked examples, the mass-ratio bracket.
- The spin example: the lecture leaves it to recitation (L17.3 pp. 2-3) and the notes give only the result; the page's connection calculation is its own, and correctly so labelled.
- leadsTo 8.06 Lecture 18 (Born-Oppenheimer, Berry connection in the nuclear Hamiltonian): supported by notes §6.1 and eq. (6.21) and following ("This is a Berry connection! We have a full Berry connection for each nucleus"). I did not read the L18 transcripts; that the Berry-connection part is in Lecture 18 rather than later is uncertain but likely (it directly follows §6.1).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the sources used. The notes' hand-drawn figures (p. 13 path sketch, p. 14 one-dimensional path, p. 15 sphere) are not reproduced; the page has no figures.
- Text is rewritten, not copied; short quoted phrases ("don't even think of Berry's phase", "the perfect place to confuse yourself") are attributed to Zwiebach and short.
- Worked examples are original (the lecture and notes have no numerical examples).
- No OpenStax/LibreTexts material. The Berry 1984 paper is only a bibliographic reference; CODATA values are public NIST data.

## Notes
- Symbol meanings added for this page in `data/symbols.json` (69 meanings scoped to it or shared) were read through: all fit the page's use (α cone half-angle, β gauge function, γ/γ_n/γ±/γ′ Berry phases, θ_n/θ₊ dynamical phases, ν_n, Ω solid angle in sr, A_n, D_n, D±, ∇_R, R⃗/R_i/R_f/R_j/R₁…R_N, E_el/E_vib/E_rot, H_N, k (N/m), I, ℓ, L, M, m, p, P, a, r = B, μ_B, χ states). Units are sensible. Entry ids such as `newton-error-n` (E_n) and `A-n-slope` (A_n) and `R-2-green` are odd names for these meanings but ids are not shown to readers; no action needed. `content:check` reports no symbol errors.
- The `berry1984` reference is listed but not cited in the body (see item 1).
- No em dashes found in the page text.

## Resolution (2026-11-18, by the page author)

1. (warning) Berry sentence rewritten with Zwiebach's hedge: formulas "in many ways known to everybody for a long time"; Berry, he suggests, "probably" clarified the time independence and emphasized that the phase could be interesting in some cases (L17.2 p. 3). The `berry1984` reference is now linked in the text ("1984 paper").
2. Configuration-space sentence now cites L17.1 transcript pp. 2–3.
3. "(L17.2 transcript p. 5)" added after the sentence on different people choosing different phases.
4. "the notes compute it from the curvature" changed to "the notes state the curvature, D± = ∓r̂/(2r²), and integrate its flux"; r = B kept.
5. Added a bracket after the rotational-energy formula: the notes print ħ for ħ² in the middle step of (6.6); the result is unchanged.
6. Frontmatter summary now reads "A spin one-half that stays up along a field whose direction traces a loop picks up minus half the solid angle." (Also restored "R_N" in the plain-text summary, where an earlier edit had left "R_{N}".)

Status set to `reviewed`.
