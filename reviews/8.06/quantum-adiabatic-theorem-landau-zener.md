---
page: content/year-3/8.06/quantum-adiabatic-theorem-landau-zener.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l16-1/ (read; title "L16.1 Quantum adiabatic theorem stated", its only .pdf link = reading1)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l16-2/ ... /l16-5/ (read; titles match readings 2-5, and each page's only .pdf link is the URL the page gives)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/7d7151271ccce6172083d4056e583040_pgEFvhkEp-c.pdf (read, local copy; L16.1 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/d3f31dc84f209fdf0575e375d12ee253_Kk7cc15gWF8.pdf (read, local copy; L16.2 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/a0149a64aa5ab9e764acaab85288d346_Tcv3_Gk1Ysg.pdf (read, local copy; L16.3 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/9e70f0bb9895d58c13d417c307760de1_yg3NGFpZr4w.pdf (read, local copy; L16.4 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/e3ed89342be47957eefc889914aedb29_FIef9sP-Yq8.pdf (read, local copy; L16.5 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-6-adiabatic-approximation/ (read, local copy of MIT8_06S18ch6.pdf; pp. 6-12 rendered as images, every equation and number checked against the image, incl. a zoom of eq. (4.17))
  - https://doi.org/10.1143/JPSJ.5.435 (not opened; the citation T. Kato, J. Phys. Soc. Jpn. 5, 435 (1950) agrees with the standard bibliographic record as I know it)
verdict: pass-with-notes
---

# Review: The quantum adiabatic theorem and Landau–Zener transitions

The transcripts have no printed footers, so PDF page numbers are the citation convention; every transcript citation on the page was checked against `pdftotext -f N -l N`. In the notes, printed page = PDF page. Neither the transcripts nor notes pp. 6-12 carry a "rights reserved" or "Courtesy of" notice. The author's notes.md was not used.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Bracket after the C/T bound: "[The transcript has 'a number times T' at this point ...]" | L16.3 p. 3: "is less than or equal than a number of times T". | Quotes it as "a number times T". | Quote exactly ("a number of times T"). The slip itself is real and fairly described: the surrounding sentences (p. 2 "proportional to 1 over t", p. 3 "the error is less than 1 over T") say 1/T. |
| 2 | info | "improved by Tosio Kato [whose paper appeared in 1950; the lecture says 'the middle '50s']" | L16.1 p. 3: "Kato, in the middle '50s ... in the '50s, Kato improved the analysis". | As quoted, with the `kato` reference (J. Phys. Soc. Jpn. 5, 435, 1950). | Verified real and fairly stated. Optional: the `kato` reference key is not cited anywhere in the body; consider linking the bracket to it (if the site lists unreferenced `references` in the credits this is fine as is). |
| 3 | info | Bracket after "Rabi frequency and period": the lecture "describes the levels at t = 0 as separated by H₁₂" | L16.5 p. 3: "the separation of the energy levels is by this distance H12"; p. 1 correctly gives the eigenvalues ±|H₁₂|. Notes p. 11: ω₁₂ ≡ |H₁₂|/ħ. | Gap is 2|H₁₂|; ω₁₂ = half the gap / ħ; both sources define ω₁₂ = |H₁₂|/ħ. | Verified real and fairly stated. |
| 4 | info | "[The notes' version of this derivative, eq. (4.17), drops the factor 1/4 ...]" | Notes (4.17), first equality: \|d/dt ħ/√(\|H₁₂\|² + α²t²/4)\| = \|ħα²t/(\|H₁₂\|² + α²t²/4)^{3/2}\|. | Correct derivative −ħα²t/(4E₊³); maximum of its size at α²t²/4 = \|H₁₂\|²/2, value ħα/(3√3 \|H₁₂\|²). | Verified: d/dt (ħ E₊^{-1}) = −ħ·½·(α²t/2)·E₊^{-3} = −ħα²t/(4E₊³), so the notes do drop 1/4. With u = αt/2, u/(\|H₁₂\|² + u²)^{3/2} peaks at u² = \|H₁₂\|²/2 with value 2/(3√3\|H₁₂\|²), giving ħα/(3√3\|H₁₂\|²) (also checked by calcs `alt-maximum-*`). The notes' own final "≈ ħα/\|H₁₂\|²" is an order-of-magnitude estimate, so "does not change the conclusion" is fair. |
| 5 | info | "The exact equations for the coefficients" (3.5) | Notes (3.5) second line has a typo, (E_k − iħ⟨ψ_k\|ψ̇_k⟩c_k) with c_k inside the bracket; L16.2 p. 2 transcript reads "+ i h bar the sum over n different from k". | (E_k − iħ⟨ψ_k\|ψ̇_k⟩)c_k − iħΣ... | Page is correct (follows from (3.4) by projection; the minus sign is right, the transcript's "plus" is a slip or transcription error). Silent correction is acceptable. |
| 6 | info | "The problem can be solved exactly (the solution involves special functions related to the hypergeometric ones)" | L16.5 p. 2: "It involves a little bit of hypergeometric functions". | As stated. | Fine (the exact solution uses parabolic-cylinder functions, which are confluent hypergeometric). |
| 7 | info | First paragraph of "The adiabatic theorem stated": "Last time's result was that, a state that starts ..." | n/a | Stray comma. | "Last time's result was that a state that starts ..." |

Every formula matches its cited equation and page:
- reading6: (3.1) p. 7; (3.2) p. 7 (the notes add "+ ..."); adiabatic theorem p. 7 statement and (5.1) p. 12 (same form e^{iθ}e^{iγ}|ψ⟩); phases (3.12)-(3.14) p. 8 (the notes misprint γ(t)_k; page writes γ_k(t)); (3.3), (3.4), (3.5), (3.7) p. 7; (3.8) p. 8 mentioned in words, correctly; (3.9), (3.10), (3.11) p. 8; (4.1) p. 9; (4.2) p. 9 (H, E₁, E₂); (4.3), (4.4), (4.5), (4.6) p. 10; (4.8) p. 11; (4.11) p. 11 (τ defined in the line above, as "τ_α"; the page notes the subscript); ω₁₂ p. 11 and (4.13) p. 12; (4.12) p. 11; (4.18) p. 12 (notes write |α|; the page assumes α > 0, as the lecture does, L16.4 p. 3).
- reading1 p. 2 (level separation E_{k−1} < E_k < E_{k+1}); reading2 p. 3 (iħċ_m(0) = −iħ⟨ψ_m(0)|ψ̇_k(0)⟩, which is the transcript's result with k′ → m); reading3 p. 2 (ramp H₀ + (t/T)V, Ḣ = V/T, Ḣ_kn = V_kn/T); reading3 p. 3 (norm bound).

Transcript citations checked and correct: L16.1 pp. 1, 2, 2-3, 3, 3-4; L16.2 pp. 1, 1-2, 2, 3; L16.3 pp. 1, 1-2, 2-3, 3; L16.4 pp. 1 (Landau/Zener, factor of two, molecules, eq. 4.1), 2 (polar/non-polar, R(t)), 3 (non-adiabatic transition, toy model), 4 (exact solutions, crossing is special); L16.5 pp. 1 (H₁₂, E±, swap of states), 1-2 (small H₁₂ likely to jump), 2 (exact solution, homework, many derivations), 2-3 (two time scales), 3 (Rabi, condition, P, homework check). Notes page citations (pp. 7, 8, 9, 11, 12) correct.

Specific checks requested:
- Phases: θ_k = −(1/ħ)∫E_k, ν_k = i⟨ψ_k|ψ̇_k⟩, γ_k = ∫ν_k match L16.1 p. 3 and (3.12)-(3.14). The page's "−⟨ψ_k|ψ̇_k⟩ = iν_k" is right (⟨ψ_k|ψ̇_k⟩ = −iν_k), so the exponent (1/iħ)∫(E_k − iħ⟨ψ_k|ψ̇_k⟩) = iθ_k + iγ_k.
- Ramp and C/T: lecture-only (not in the notes), correctly cited to the transcript; "after the change has stopped the error does not grow" matches L16.3 p. 3.
- Landau–Zener: E± from det(H − E) = 0 (calcs `lz-eigenvalues`); smallest gap 2|H₁₂| at t = 0; upper branch |2⟩ at t → −∞ (line −αt/2 is high) and |1⟩ at t → +∞, matching L16.5 p. 1 and notes p. 10 figure; τ_d from (α/2)(2τ_d) = |H₁₂| (L16.5 p. 2); ω₁₂τ_d = |H₁₂|²/ħα; P = exp(−2π|H₁₂|²/ħα), the standard Landau–Zener result for a diabatic energy difference changing at rate α.
- "A system that starts as |1⟩ ... (on the lower branch) ends as |1⟩ on the upper branch with probability P": correct (E₁ = αt/2 < 0 for t < 0).

## Arithmetic and answer checks
- Worked example, recomputed with ħ = 6.582×10⁻¹⁶ eV s, 1 μeV/ns = 10³ eV/s: gap 0.40 μeV; τ_d = 0.20e-6/1.0e3 = 2.0×10⁻¹⁰ s = 0.20 ns; ω₁₂ = 3.0386×10⁸ s⁻¹ (≈ 3.04×10⁸); T₁₂ = 20.68 ns (≈ 20.7); ω₁₂τ_d = 0.06077 (≈ 0.061); P = e^{−0.3818} = 0.6826 (≈ 0.68). All correct.
- (b): ln 100/2π = 0.7329 (≈ 0.733); α = 2π|H₁₂|²/(ħ ln 100) = 82.9 eV/s = 0.0829 μeV/ns (≈ 0.083); ratio 12.06 (≈ 12). Correct.
- (c): τ_d = 2.412 ns (≈ 2.4); T₁₂/τ_d = 8.57 (≈ 8.6); twice slower: ω₁₂τ_d = 1.466 (≈ 1.47), P = 1.0×10⁻⁴. Correct.
- Plot 1: curves ±√(g² + t²/4) and ±t/2 are E± and the crossing lines with α = 1; slider minimum 0 gives the crossing lines, as the caption says. Plot 2: exp(−2πx) and 1 − exp(−2πx); caption values ln 2/2π = 0.110 (0.11) and ln 100/2π = 0.733 (0.73). Correct.
- Quiz 1 (answer 2, level kept apart): correct. Quiz 2 (answer 0, 1/T): correct. Quiz 3 (answer 3, stays in |1⟩ with phase e^{−iαt²/4ħ}): correct, (4.4). Quiz 4 (answer 1, e^{−2π} = 0.00187 ≈ 0.0019): correct.
- Flashcards: all four correct (the third's swap statement and gap 2|H₁₂| agree with notes p. 10-11).
- Calcs file `calcs/8.06/quantum-adiabatic-theorem-landau-zener.yaml`: every number and identity on the page is covered; `npm run calc:test -- -k landau`: 84 passed. Minor: the `shown` text of `toy-phase-integral` reads "∫₀ᵗ αt′/2 dt′ = −iαt²/4ħ" (a substring of the page's formula without its 1/iħ); the `where` explains it, so harmless.

## Coverage and order
- The page follows L16.1 → L16.5 in order and covers every segment: theorem and conditions, history, relative phases (L16.1); expansion in instantaneous eigenstates, uncoupled solution, immediate population of other states (L16.2); Ḣ_kn coupling, caution on Ḣ_kn, ramp, C/T bound (L16.3); Landau/Zener, molecules, R(t), toy crossing model and exact solutions (L16.4); avoided crossing, E±, τ_d, Rabi time scale, adiabatic condition, P (L16.5).
- Notes-only material: the alternative check (4.14)-(4.17) is included and labelled "not done in the lecture". Omitted without mention: notes (4.7), (4.9), (4.10) (H written as a·σ, eigenstates |±n(t)⟩ with n turning from −ẑ to +ẑ, and the notes' figure of n), and the phase-ambiguity comment (2.18) on p. 7 (instantaneous eigenstates defined only up to e^{−iχ(t)}), which the previous page does not cover either. The lecture does neither here; (2.18) is natural material for the Lecture 17 (Berry phase) page. Info only.
- No cosmology callout; the only `leadsTo` is 8.06 Lecture 17 ("Berry's phase; molecules and energy scales" in `_course.json`): correct, and the description of γ_k on a closed loop (path-dependent, observable) matches L16.1 p. 3 ("Berry ... showed that it could be observable"). Optional: MSW neutrino conversion in the Sun is a real Landau–Zener application if an astrophysics link is ever wanted.

## Licensing
- No "rights reserved" or "Courtesy of" notices in the five transcripts or notes pp. 6-12. No MIT figure is reproduced; both graphs are generated from formulas. The worked example (quantum-dot numbers) is the page's own. No passage is copied verbatim; quoted fragments ("the middle '50s", "a number times T") are short and used to point out slips. No OpenStax/LibreTexts material.

## Notes
- Symbols (data/symbols.json, meanings scoped to this page): all checked, appropriate and with sensible units (α in J/s, here μeV/ns; ν_k in rad/s; τ_d, T, T₁₂ in s; E± and H₁₂ in J, here μeV). One small mismatch: the `H_kn` meaning reads "With a dot, Ḣ_kn = ⟨ψ_k|Ḣ|ψ_n⟩ ...", but on this page the plain H_{kn} appears only as "the matrix element H_kn" of H itself; better: "H_kn = ⟨ψ_k|H|ψ_n⟩: the matrix element of H between two instantaneous eigenstates". Info.
- No em dashes on the page.
- Born and Fock 1928 is as the lecture says ("I believe"); historically correct (Z. Phys. 51, 165, 1928).
- Verdict: no errors found; items 1 and 7 and the symbol note are small wording fixes.

## Resolution (2026-11-18, by the page author)

- Item 1: the bracket after the C/T bound now quotes the transcript exactly, "a number of times T".
- Item 2: the Kato bracket now links the paper (doi 10.1143/JPSJ.5.435), the `kato` reference.
- Item 7: stray comma removed ("Last time's result was that a state that starts ...").
- Coverage note: one sentence added after the avoided-crossing levels saying the notes also write the Hamiltonian in spin form, a⃗ · σ⃗ with a⃗ = (H₁₂, 0, αt/2), eigenstates along a direction turning from −z to +z (notes eqs. (4.7), (4.9), (4.10)), not used in the lecture. The (2.18) phase-ambiguity remark is left to the Lecture 17 (Berry's phase) page.
- Symbols note: the page-scoped `H_kn` meaning now reads "H_kn = ⟨ψ_k|H|ψ_n⟩: the matrix element of H between two instantaneous eigenstates"; the dotted Ḣ_kn keeps its own entry (`H-dot-kn`).
- Calcs: `toy-phase-integral` now shows the page's whole formula, including 1/iħ, and checks (1/ħ)∫₀ᵗ αt′/2 dt′ = αt²/4ħ (the factor 1/i = −i is common to both sides).
- Items 3–6 needed no change. Status set to `reviewed`.
