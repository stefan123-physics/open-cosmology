---
page: content/year-3/8.06/harmonic-perturbations-ionization-of-hydrogen.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l11-1/ (read: resolves, HTTP 200; the four reading URLs were downloaded again and their first lines checked: each is the transcript of its own segment, L11.1 to L11.4)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/9d7f6e8f81a73e27ccd896f2f75efca3_wWPh_6ex8qw.pdf (read: L11.1 transcript, 4 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/0d3f58d36b954dac68d5d86af55f9b29_sv1hK_dLVzE.pdf (read: L11.2 transcript, 4 pages, page by page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/79ccb8fd067f0b9c427afcfb93455d9f_IqyTq4n1f2g.pdf (read: L11.3 transcript, 5 pages, page by page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/ddd888c1b65cbffeafa712d636b7ee25_TDYMriH63us.pdf (read: L11.4 transcript, 5 pages of text, page by page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-4-time-dependent-perturbation-theory/ (read: chapter 4 PDF; printed pp. 96-102 rendered as images with pdftoppm to read every equation and equation number of section 4.3.2 and section 4.4 up to eq. (4.4.28))
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (read: Guth Lecture 17 transcript, pp. 18-19, for the callout and leadsTo)
  - content/year-4/8.286/temperature-and-decoupling.mdx (read, for the callout and leadsTo)
verdict: pass-with-notes
---

# Review: Harmonic perturbations: absorption, stimulated emission and the ionization of hydrogen

Every transcript citation on the page was checked against the page it names (pdftotext -f N -l N); every notes equation number was checked on the rendered notes pages. No off-by-one transcript citation was found in this page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | `data/symbols.json`, letter `n` (meaning shared with interaction-picture-time-dependent-perturbations, this slug added) | (symbol data, not MIT) | "Labels the eigenstates \|n⟩ of H⁽⁰⁾; as a superscript (n), the order in λ." On this page λ is a **wavelength** (its own meaning, "A wavelength: of the light …"), and no superscript (n) appears; only c_n⁽⁰⁾, c_m⁽¹⁾ | Give this page its own meaning for `n` ("Labels the eigenstates \|n⟩ of H⁽⁰⁾, summed over in c_m⁽¹⁾") instead of adding the slug to the meaning that mentions λ. |
| 2 | info | "The matrix element", bracket after the first formula: "[On L11.4 p. 2 the ground state is written without its square root …]" | L11.4 p. 2 also says the plane wave is "1 over L cubed e to the minus i k dot r" (no 3/2 power); p. 3 has both roots correct | Mentions only the ground state | Optional: "the ground state and the plane wave are written without their square roots". |
| 3 | info | "The ionization matrix element" (eq. (4.4.27)) | Notes eq. (4.4.27): −i32√π(eE₀a₀)…; the L11.4 p. 5 transcript reads "i 32 square root of pi …" with no minus | −32i√π, as in the notes (correct; checked below) | Optional bracket: "[The transcript has no minus sign; the notes, and the integrals, give −i.]" Probably a transcription loss; uncertain. |
| 4 | info | "Fermi's golden rule (harmonic perturbation)", cited "eq. (4.3.54)" | Eq. (4.3.54) itself has only E_f = E_i + ħω; the minus case is in the text under it (and on L11.2 p. 4) | E_f = E_i ± ħω | Fine as is; could cite "eq. (4.3.54) and the text below it". |
| 5 | info | "The Rydberg", cited "eq. (4.4.3)" | Eq. (4.4.3) has 2R_y = e²/a₀ = ħ²/(ma₀²) = αħc/a₀, R_y ≈ 13.6 eV; α = e²/ħc is said on L11.3 p. 2, not in the equation | Adds α = e²/ħc | Fine (the surrounding sentence cites L11.3 p. 2). |
| 6 | info | Three slips attributed to the lecture: "minus i" (L11.1 p. 3), "ħ linear in t₀ over 2π" (L11.2 p. 3), "about 1,772" (L11.3 p. 2) | All three are in the transcripts exactly as quoted, and all three are wrong as the page says (the prefactor is −H′_fi/ħ, the integral is πħt₀/2, 4π/α = 1722) | "The lecture says …" | Verified real in the transcript text. Whether each is a spoken slip or a transcription error cannot be told from the text; "the transcript reads …" would be the more careful wording. Optional. |
| 7 | info | Bracket "[The notes, p. 97 and p. 99, say 'spontaneous emission' where they mean stimulated emission.]" | Notes p. 97: "the answer for the case of spontaneous emission will be completely analogous"; p. 99: "For the case of spontaneous emission the only change required …" | As stated | Verified, correct. |
| 8 | info | Bracket on the plane-wave sign: "The notes' eqs. (4.4.21) and (4.4.24) show +ikr cos θ′ … continue with −ikr cos θ′ from eq. (4.4.25)" | Notes (4.4.21) write the bra's plane wave unconjugated, e^{ik·r}, and e^{ikr cos θ′}; (4.4.24) has e^{ikr cos θ′}; (4.4.25) has e^{−u(1+ika₀cos θ′)}, i.e. e^{−ikr cos θ′}; (4.4.26)-(4.4.27) follow from the minus sign | As stated | Verified, correct. |
| 9 | info | `references.guth17.location` and calcs facts `recombination-temperature`, `decoupling-temperature` (`at: 'Lecture 17 transcript'`) | 4,000 K: transcript p. 18; decoupling "slightly colder" p. 18, the 3,000 K figure p. 19 | No page numbers | Use "pp. 18–19" as the location and in both calcs entries. |
| 10 | info | Cosmology callout: "At 4,000 K the typical thermal energy is only about 0.34 eV" | (page's own) | kT = 0.345 eV | Correct as kT; the mean photon energy is ≈ 2.7kT ≈ 0.93 eV, still ~15 times below 13.6 eV, so the argument holds. Optional: "kT is only about 0.34 eV". |
| 11 | info | `data/symbols.json`, `t-prime` (shared meaning) | (symbol data) | "running from 0 to t" | Here it runs from 0 to t₀; harmless. |

## Arithmetic and answer checks
All recomputed independently (Python/NumPy/SciPy, scratch script outside the repo), and `npm run calc:test -- -k harmonic-perturbations-ionization`: 56 passed.

- Amplitude: (1/iħ)·(e^{iat₀} − 1)/(ia) = −(e^{iat₀} − 1)/(ħa): prefactor −H′_fi/ħ, as in eq. (4.3.44). Correct.
- t₀ → 0: each fraction → it₀. Correct. |e^{iβ} − 1| = 2|sin(β/2)| ∈ [0, 2]. Correct.
- Absorption amplitude and P_fi (eqs. (4.3.45), (4.3.46)): correct, factor 4 and ħ² right.
- Band (4.3.49): zeros at ω_fi − ω = ±2π/t₀, so E_f within ±2πħ/t₀. Correct.
- Integral: ∫ sin²((ω_fi−ω)t₀/2)/(ω_fi−ω)² dE_f = ħ·πt₀/2; (4/ħ²)(πħt₀/2) = 2πt₀/ħ (eq. (4.3.53)). Correct.
- 4π/α = 1722.0 (1/α = 137.036); 1722 R_y = 23.43 keV; photon with λ = a₀: 2πħc/a₀ = 23.43 keV. "About 23 keV" correct.
- Window: 10 R_y = 136 eV (MIT rounds to 140 eV); a tenth of 23.4 keV = 2.34 keV. ka₀ = √(140/13.6 − 1) = 3.05 and √(2300/13.6 − 1) = 12.97: "about 3 and 13" correct.
- λ/a₀ = (4π/α)(R_y/ħω): with ħc/a₀ = 2R_y/α, 2πħc/(ħωa₀) = 4πR_y/(αħω). Correct.
- Matrix element (the main check): with a₀ = 1, (2π/√π)∫₀^∞ r³e^{−r}∫₋₁¹ x e^{−ikrx} dx dr computed numerically as a full complex double integral: k = 0.5 → −14.51994i; k = 3 → −0.170156i; k = 6 → −0.0067185i. The formula −32i√π k/(1 + k²)³ gives −14.51994i, −0.170156i, −0.0067185i. Sign, the factor 32√π, the power 3 and the e^{−ikr cos θ′} exponent are all correct. The two partial integrals: ∫₀^∞ r³e^{−r(1+iκx)}dr = 6/(1+iκx)⁴ (Γ(4) = 3! = 6) and ∫₋₁¹ x/(1+iκx)⁴ dx = −(8i/3)κ/(1+κ²)³ (small-κ check: −4iκ·2/3); 2π × 6 × (−8i/3) = −32πi, and π/√π = √π. Correct.
- cos γ (eq. (4.4.22)) and ∫₀^{2π} cos(φ − φ′)dφ′ = 0: correct.
- Units: ka₀⁴/√(a₀³L³) dimensionless, eE₀a₀ an energy. Correct.
- Worked example (all reproduced): 500/13.6 = 36.76; E_e = 486.4 eV; ka₀ = 5.980; λ = 2.479 nm; λ/a₀ = 46.87 (and 1722 × 13.6/500 = 46.84), "≈ 47"; v/c = 0.0436 → 0.044, 4.4%; factor at 500 eV 1.203 × 10⁻⁴; at 1000 eV k²a₀² = 72.53, ka₀ = 8.516, factor 2.142 × 10⁻⁵; ratio 0.1780, squared 0.0317 → 0.032; 2^{−5/2} = 0.1768 → 0.177; cos 60° = 1/2, square 1/4. All correct. The example is original (MIT gives no numerical example).
- Callout: kT at 4,000 K = 8.617 × 10⁻⁵ × 4000 = 0.345 eV; 13.6/0.345 = 39.5 ≈ 40. Correct.
- Plot: the curve is |(e^{iAt₀}−1)/A + (e^{iBt₀}−1)/B|² with A = ω_fi + ω, B = ω_fi − ω, written as real² + imaginary². Correct. Default ω = 5, t₀ = 4: both peaks 16.6, "close to t₀² = 16" correct. Over the whole slider grid (ω 2–8 step 0.1, t₀ 2–4) the sampled maximum is 17.7, inside the range [0, 20]; the 399-point grid never lands exactly on ω_fi = ±ω for slider values (no 0/0 samples). Caption accurate.
- Quiz: Q1 answer 2, Q2 answer 0, Q3 answer 3 (explanation: 1722 R_y ≈ 23 keV, correct), Q4 answer 1. All correct, explanations right.
- Flashcards: all four correct (amplitude formula matches eq. (4.3.44); H′ = eE₀r cos θ matches eq. (4.4.18)).
- Calcs file: every entry checked against the page; values and citations agree with the sources. Only finding: the two `guth17` facts lack page numbers (row 9).

## Coverage and order
- The page follows MIT's order exactly: L11.1 (harmonic perturbation, the 2, amplitude, small-t₀ and bounded numerators) → L11.2 (two resonances, stimulated emission vs spontaneous, absorption probability, sum over continuum, golden rule, rate per unit time) → L11.3 (validity: λ ≫ a₀, plane-wave electron, 140 eV–2.3 keV, ka₀ 3–13, non-relativistic, δH = −eΦ, H′, initial and final states) → L11.4 (geometry with k along z, matrix element integral, cos γ, φ′ integral, reduced integral, quoted result, units).
- Nothing in the four segments is left out beyond asides (L11.3's remark about not rushing; L11.2's "next order of perturbation theory" aside).
- Notes material added beyond the lecture: the radial and angular integrals (eqs. (4.4.25), (4.4.26)), which the lecture explicitly leaves to the notes; clearly attributed. Notes eq. (4.4.28) (|H′_fi|²) is not on the page; the lecture does not square the element either and leaves it to Lecture 12, so this is consistent with MIT's segment split.
- All transcript citations verified page by page; all equation numbers (4.3.41)–(4.3.54) and (4.4.1)–(4.4.27) verified on the rendered notes pages, including "notes Figure on p. 101", "notes p. 96/97/100/102".

## Licensing
- `grep -i "rights reserved\|courtesy"` on the chapter 4 text and all four transcripts: no matches.
- No MIT figure is reproduced; the notes' hand-drawn geometry figure (p. 101) is described in words only, and the page's only graph is generated from the amplitude formula.
- No verbatim copying beyond short phrases ("two tricks", "a nice thing to know", "the box is back"), which are fine. No OpenStax/LibreTexts material. No em dashes in the page.
- All five source URLs resolve and point to the right documents.

## Notes
- Cosmology callout and leadsTo: Guth's Lecture 17 transcript (p. 18) says hydrogen stays ionized until about 4,000 K, that this temperature depends on density, and that decoupling is colder; p. 19 uses 3,000 K. The page attributes exactly that to Guth and marks the photon-tail explanation as going beyond what Guth discusses. The remark that near-threshold photons are outside this lecture's window ħω ≫ R_y is correct and fair. The 8.06 Lecture 12 leadsTo matches the course syllabus ("Ionization rate of hydrogen; two-level atoms and Einstein's argument").
- Symbols: the 14 new or page-scoped meanings (θ, φ, θ′, φ′, θ″, γ, β, E, E₀, E_e, H′_fi, u, u_k, ψ₀, R_y, V, e, x, ⟨ ⟩, ≃, H) fit their uses on this page; units correct (E₀ in V/m, ψ₀ and u_k in m^(−3/2), ρ in 1/J). Only `n` (row 1) carries a misleading clause.
- No errors found. Verdict pass-with-notes; row 1 is the only item that should be fixed before `status: reviewed`.

## Resolution (2026-11-18, by the page author)

1. Fixed: `n` now has its own page-scoped meaning ("Labels the eigenstates |n⟩ of H⁽⁰⁾, summed over in c_m⁽¹⁾.") and the slug was removed from the shared interaction-picture meaning.
2. Applied: the bracket now says the ground state and the plane wave are written without their square roots on L11.4 p. 2.
3. Applied: bracket added after eq. (4.4.27): the L11.4 transcript reads "i 32 square root of pi" without the minus; the notes and the integrals give −i, and the phase does not affect the rate.
4. Applied: the golden-rule formula is now cited "eq. (4.3.54) and the text below it".
5. Applied: the Rydberg formula's `at` now adds "α = e²/ħc on L11.3 transcript p. 2".
6. Applied: the slips now say "the transcript reads" (minus i, the integral "over 2π", "about 1,772", and the lobe spacing); calcs `shown` strings updated.
7. No change needed (verified correct).
8. No change needed (verified correct).
9. Applied: `references.guth17.location` now gives pp. 18–19; calcs facts cite p. 18 (4,000 K, and the kT entry) and p. 19 (3,000 K).
10. Applied: the callout now says "kT is only about 0.34 eV".
11. Fixed: `t-prime` has its own page-scoped meaning ("running from 0 to t₀") and the slug was removed from the shared meaning.

Status set to `reviewed`.
