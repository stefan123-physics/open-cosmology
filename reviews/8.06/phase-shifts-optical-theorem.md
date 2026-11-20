---
page: content/year-3/8.06/phase-shifts-optical-theorem.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l20-1/ ... /l20-5/ (read, local copies of the five resource pages; titles "L20.1 Review of Scattering Concepts Developed So Far", "L20.2 The One-Dimensional Analogy for Phase Shifts", "L20.3 Scattering Amplitude in Terms of Phase Shifts", "L20.4 Cross Section in Terms of Partial Cross Sections. Optical Theorem", "L20.5 Identification of Phase Shifts. Example: Hard Sphere"; each page's transcript .pdf link is exactly the URL the page gives as reading1-5)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/249bb984836a419923fdcffb4a1326b9_gRlrh4lRapM.pdf (read, local copy; L20.1 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/1b45d5122703c2f0197ad63cdf9d3c37_Ug0HxeKGC8s.pdf (read, local copy; L20.2 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/2db761445ababdf7c5e3abb6e219574c_a4Qtf5D0rso.pdf (read, local copy; L20.3 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/9ec60cea1ad1b65e25270706c4ce66c9_MtK9rIbdlis.pdf (read, local copy; L20.4 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/2acbe3fb5c65cc9bb656dbcfead953e3_YT4ODWpKmGY.pdf (read, local copy; L20.5 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-7-scattering/ (read, local copy of the chapter 7 PDF; printed pp. 137-143 read as text and rendered as images; every cited equation checked against the image)
verdict: pass-with-notes
---

# Review: Phase shifts and the optical theorem

The transcripts have no printed footers, so PDF page numbers are the citation convention; every transcript citation on the page was checked page by page with `pdftotext -f N -l N`. In the notes, printed page = PDF page + 132. Neither the five transcripts nor chapter 7 carry a "rights reserved" or "Courtesy of" notice. The author's notes.md was not used.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Three ways to see a phase shift", Formula "Back to the in and out waves", `at="eq. (7.2.26), pp. 140–141"` (and the calcs entries `in-out-waves-real`, `in-out-waves-imag`) | (7.2.26), both of its lines, is entirely on p. 140 (PDF p. 8); p. 141 starts with the sentence "This shows that our definition ... is consistent". | pp. 140–141 | `at="eq. (7.2.26), p. 140"`, and the same in the two calcs entries. |
| 2 | info | "The scattering amplitude", Formula "Two simplifications", `at="eq. (7.2.17), p. 139"` | (e^{2iδ}−1)/2i = e^{iδ} sin δ is the underbrace of (7.2.16); e^{−iℓπ/2} = (−i)^ℓ and i^ℓ(−i)^ℓ = 1 are in the sentence after (7.2.17). (7.2.17) itself is the simplified sum. | Cites only (7.2.17). | `at="eqs. (7.2.16)–(7.2.17), p. 139"`. |
| 3 | info | "The hard sphere", Formula "The solution outside the sphere", `at="eqs. (7.2.31)–(7.2.32), p. 141"` | (7.2.31) is R_ℓ = A j + B n; (7.2.32) is ψ(a, θ) = Σ R_ℓ(a) P_ℓ(cos θ) ≡ 0, i.e. the boundary condition at r = a. The general-r sum ψ(r, θ) = Σ R_ℓ(r) P_ℓ is said in L20.5 transcript pp. 2–3. | Cites (7.2.32) for the general-r sum. | `at="eq. (7.2.31), p. 141; L20.5 transcript pp. 2–3"` (or cite (7.2.32) at the boundary-condition step). |
| 4 | info | "The hard sphere", bracket after (7.2.38): "the expansions j_l ∝ (ka)^l and n_l ∝ (ka)^{−l−1} give tan δ_l ∝ (ka)^{2l+1} and confirm it" | (7.2.38) has the bracket to the fourth power. | The power counting confirms (ka)^{4l+2}, not the fourth power of the bracket; that needs the coefficients. | E.g. "with j_l ≈ (ka)^l/(2l+1)!! and n_l ≈ −(2l−1)!!/(ka)^{l+1}, sin²δ_l ≈ (ka)^{4l+2}/[(2l+1)!!(2l−1)!!]², and since (2l)!/(2^l l!) = (2l−1)!! this is the fourth power". (The calcs entries `low-energy-l1`, `low-energy-l2` already confirm it numerically; I checked the algebra too.) |
| 5 | info | "The optical theorem", paragraph after the boxed theorem: "It was found first in optics, from the physics of shadows" | L20.4 p. 3: "which was discovered in the context of optics by thinking of the physics of shadows". | Stated as historical fact in the page's voice. | Attribute it: "Zwiebach notes that it was first found in optics ...". (The history is more tangled, e.g. extinction in optics, Feenberg 1932 and Bohr–Peierls–Placzek in quantum mechanics; uncertain, not checked against a source here.) |
| 6 | info | Bracket after the phase-shift ansatz: "[In the lecture the factor 1/2i is first written as one over 2π ...]" | L20.3 p. 1 ("1 over 2 pi") and p. 2 (audience "2i", "2i, yes ... Thank you"). Verified. | No transcript page. | Add "(L20.3 transcript pp. 1–2)". |
| 7 | info | Bracket after (7.2.40)–(7.2.41) on the sign of boxed (7.2.42) | Verified correct (see checks). The notes themselves carry the minus later: (7.2.48), p. 143, boxed, e^{2iδ_ℓ} = −((j − in)/(j + in))[...], and (7.2.49) labels −(j − in)/(j + in)... as e^{2iξ_ℓ}, "Hard sphere phase shift". | Correct claim, supported only by the l = 0 check. | Optionally add "as the notes' own (7.2.48), p. 143, has it", which strengthens the claim and prepares the next lecture. |
| 8 | info | Cosmology callout | Not MIT material. | "the s wave dominates and the cross section tends to a constant, independent of the speed" | True for a short-range (contact-like) interaction away from a zero-energy resonance (σ → 4π a_s², a_s the scattering length, equal to a only for the hard sphere). Many SIDM models use a light mediator and give velocity-dependent cross sections. Consider "for a short-range force (contact-like), ...; models with a light force carrier give a cross section that depends on speed". Not attributed to Ferreras, so fair as written. |

## Arithmetic and answer checks
Recomputed with NumPy/SciPy (spherical_jn/yn, quad) in a scratch script, and `npm run calc:test -- -k phase-shifts-optical`: 57 passed.

- Worked example (δ₀ = 40°, δ₁ = 15°, k = 0.5 fm⁻¹): 4π/k² = 50.265 fm²; sin²40° = 0.41318, sin²15° = 0.066987; σ₀ = 20.768 fm², σ₁ = 10.101 fm², σ = 30.870 fm² = 0.309 b. All match.
- e^{iδ₀} sin δ₀ = 0.49240 + 0.41318i; 3e^{iδ₁} sin δ₁ = 0.75000 + 0.20096i; f(0) = 2.4848 + 1.2283i fm; (4π/k) Im f(0) = 25.133 × 1.2283 = 30.870 fm². Match.
- |f|²: 7.683 (0°), 1.653 (90°), 0.4456 (180°, f = −0.5152 + 0.4244i fm) fm²/sr; ratio 17.24 ("about 17"); without interference (sin²δ₀ + 9 sin²δ₁)/k² = 4.064. All match. Part (d): numerical ∫|f|² dΩ = 30.870 fm², so the cross term integrates to zero as stated.
- Plot caption (σ/πa², all l, SciPy): ka = 0.5: 3.741 total, 3.678 s wave; ka = 1: 3.382, 2.832; ka = 2.5: 2.889 (l ≤ 3 gives 2.887), s wave 0.229. Caption values 3.74/3.68, 3.38/2.83, 2.89/0.23 match. The closed forms in the Plot expression for j_l, |h_l|² (l ≤ 3) checked algebraically; the l = 4 term at ka = 2.5 is 0.0017, so "higher l are too small to see" is right.
- Low-energy series (7.2.38): derived independently (see #4); fourth power is correct. σ → 4πa² from the l = 0 term confirmed (ka = 0.05: 3.997 πa²).
- δ₀ = −ka: tan δ₀ = (sin x/x)/(−cos x/x) = −tan x. Correct (mod π).
- **(7.2.42) sign**: (n + ij)/(n − ij) = i(j − in)/(−i(j + in)) = −(j − in)/(j + in). Checked numerically at ka = 0.7 for l = 0, 1, 2: e^{2iδ_l} with tan δ_l = j_l/n_l equals (n + ij)/(n − ij) and equals minus (j − in)/(j + in). For l = 0, (j − in)/(j + in) = −e^{−2ika} while e^{2iδ₀} = e^{−2ika}. The page's claim is correct, and rendered p. 142 confirms the box has no minus sign.
- Quiz 1 (answer 2), quiz 2 (kσ/4π = 7.958 fm, answer 0; distractors 15.9 = kσ/2π and 25 = kσ/4), quiz 3 (4πa², answer 3), quiz 4 (orthonormality, answer 1): all marked answers and explanations correct.
- Flashcards: all four correct.
- The page's own bound σ_l ≤ (4π/k²)(2l + 1) is correct and labelled as not in the lecture.

## Formula and citation checks (all others verified)
- (7.2.10), (7.2.11) p. 138: match, including 1/(2ik) and √(4π)/k. (7.2.12)–(7.2.15) p. 138: match ((7.2.14) is written ψ = ψ_s + φ in the notes, same content). Scattered 1D wave, L20.2 p. 4: verified.
- Ansatz p. 139 (unnumbered): matches (the notes write e^{2iδ_k} there; the page's δ_l is the intended one). (7.2.16), (7.2.18), double sum p. 139, (7.2.20), forward Y_l0 p. 139, f(0) p. 140, optical theorem p. 140: match.
- Im f(0), cited L20.4 p. 3: verified; notes (7.2.21), p. 140, does keep a stray e^{iδ_ℓ} in the middle expression (rendered page checked), so the page's bracket is right.
- (7.2.22)–(7.2.25), (7.2.27)–(7.2.30), (7.2.33)–(7.2.41): match. The page's (7.2.25) keeps the constant A_l/(kr cos δ_l) where the notes drop it; this is the transcript form (L20.5 p. 1) and correct.
- Transcript slips attributed by the page, all verified: "1 over 2 pi" (L20.3 pp. 1–2); dropped minus "The tangent delta l is Bl over Al" (L20.5 p. 3, after saying "minus Bl over Al" correctly in the same sentence, so "dropped once" is accurate); "4 pi over k" (L20.5 p. 3; 4π/k² in L20.4 p. 1); bracket in (7.2.38) read without the fourth power ("2 to the l l factorial 2l factorial", L20.5 p. 4); "the apparent cross section, which is the diameter" (L20.5 p. 4).
- Every other transcript page citation on the page checked and correct.

## Coverage and order
- Follows L20.1 → L20.5 and notes 7.2 (7.2.10)–(7.2.42) in order. Nothing in the five videos is left out (recap, large-r form, each l and each in/out wave separately an approximate solution, 1D hard-wall analogy, ansatz and "parametrised our ignorance", f(θ), σ and partial cross sections, interference only in dσ, optical theorem with the shadow picture and the honest note that the flux proof is not given, three ways to see a phase shift, hard sphere with low-energy limit 4πa²).
- Notes-only material is labelled: (7.2.28)–(7.2.29) and (7.2.40)–(7.2.42). Page extras labelled: δ₀ = −ka check, the bound on σ_l, the P_l form of f (stated as a rewriting, fine).
- The optical-theorem section reports Zwiebach's remark fairly: he says the theorem is proved with flux conservation and "we may discuss it in a problem" (L20.4 p. 2); the page does not claim a proof.
- leadsTo 8.06 Lecture 21: consistent with L20.5 p. 1 ("We'll only finish that next time"), the syllabus title and notes 7.2.3 (pp. 142–143, matching at r = a). Lecture 21 transcripts not read.

## Licensing
- No figure reused (the notes' hand sketches of the 1D wall and the hard sphere are not redrawn); the plot is generated from the formula.
- No verbatim copying beyond short attributed phrases ("very nice formula", "parametrised our ignorance", "cute answer", "Done").
- (7.2.38): the notes credit Griffiths; the page uses only the formula (as given in the MIT notes) and mentions the attribution; no Griffiths text is used. No OpenStax or LibreTexts material.
- Worked example is original (MIT has no numerical example in this lecture).

## Notes
- Cosmology callout and leadsTo Ferreras 3.5 (`halo-substructure`): that page does describe SIDM as a cross section for DM particles scattering off each other, proposed for the small-scale problems (also in `core-cusp-problem`, 3.4). Section 3.5 is the right target (6.2, `dark-matter-particles`, does not discuss SIDM). The partial-wave remark is the page's own and not attributed to Ferreras: fair. See #8 for the physics qualifier.
- Symbols added for this page (data/symbols.json, compared with HEAD): new page-scoped meanings for δ (1D phase shift), σ, ψ, a, V, x, u, ≃, δ₀, n₀, j₀, σ₀, σ₁, σ_l, δ₁, δ_l′, A_l, B_l, R_l, ψ_l, Y_l′0, and the page added to existing general meanings (θ, φ, Ω, z, k, t, d, i, e, m, f, r, E, l, ψ_s, P_l, l′, δ_l, n_l, j_l, Y_l0). All fit the page; units sensible (f in m, σ in m² with fm²/b noted). B_l "nonzero only if there is scattering" is logically right (B_l ≠ 0 ⇒ V ≠ 0). `content:check`: 0 errors; the only warning for this page is the missing review file.
- No em dashes on the page.

## Resolution (2026-11-18, by the page author)

All findings fixed in the page; `status: reviewed` set.

1. (warning) "Back to the in and out waves" now cites `eq. (7.2.26), p. 140`; the calcs entries `in-out-waves-real` and `in-out-waves-imag` cite p. 140 as well.
2. "Two simplifications" now cites `eqs. (7.2.16)–(7.2.17), p. 139`.
3. "The solution outside the sphere" now cites `eq. (7.2.31), p. 141; L20.5 transcript pp. 2–3` (the boundary condition stays with (7.2.33)).
4. The bracket after (7.2.38) now derives the fourth power from the leading small-ka coefficients of j_l and n_l (products of odd numbers, with (2l − 1)!! = (2l)!/(2^l l!)), not from power counting alone.
5. The optics/shadows history is attributed: "Zwiebach notes that it was first found in optics ... (L20.4 transcript p. 3)".
6. The "one over 2π" bracket now cites L20.3 transcript pp. 1–2.
7. The (7.2.42) sign bracket adds that the notes' own boxed (7.2.48), p. 143, has the minus sign.
8. The cosmology callout now limits the constant cross section to short-range, contact-like forces away from a resonance, and says that models with a light force carrier give a speed-dependent cross section.
