---
page: content/year-3/8.06/phase-shifts-integral-scattering-equation.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l21-1/ ... /l21-3/ (read, local copies of the three resource pages; titles "L21.1 General Computation of the Phase Shifts", "L21.2 Phase Shifts and Impact Parameter", "L21.3 Integral Equation for Scattering and Green's Function"; each page's transcript .pdf link is exactly the URL the page gives as reading1-3)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/bc0d91e45a59f8399790598832847c4b_gXj4irGhxuo.pdf (read, local copy; L21.1 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/c52e2d8b5f8ae1032a88b2a098776045_BTru_P0ruYQ.pdf (read, local copy; L21.2 transcript, 6 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/d66ce397d740bcfe14de4cf51736f585_2N0OXAiX-BM.pdf (read, local copy; L21.3 transcript, 7 pp.; its header reads "L21.2 Integral equation for scattering and Green's function", confirmed)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-7-scattering/ (read, local copy of the chapter 7 PDF; printed pp. 142-147 read as text and rendered as images; every cited equation checked against the image)
verdict: pass-with-notes
---

# Review: Computing phase shifts; the integral equation for scattering

The transcripts have no printed footers, so PDF page numbers are the citation convention; every transcript citation on the page was checked page by page with `pdftotext -f N -l N`. In the notes, printed page = PDF page + 132. Neither the three transcripts, the three resource pages nor chapter 7 carry a "rights reserved" or "Courtesy of" notice. The author's notes.md was not used.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The phase shift from the matching", Formula "The phase factor from the logarithmic derivative", `at="eq. (7.2.48), p. 143"` | As printed, (7.2.46)-(7.2.48) carry the same misprints as (7.2.45): j_l without a prime where j_l' is meant, and η_l' for n_l'. Printed (7.2.48): β − ka (j − iη')/(j − in) over β − ka (j + iη')/(j + in). | Shows the corrected form (j' − in')/(j − in) etc., which I re-derived and confirm is right. The bracket about the misprints sits after (7.2.45) and does not say that the displayed (7.2.48) is also corrected. | Add "(primes restored, as in (7.2.45))" after the (7.2.48) formula, or widen the existing bracket to "(7.2.45)-(7.2.48)". |
| 2 | info | "Why only a few phase shifts matter", bracket after the l > ka rule: "The notes say only that one should 'expect' no scattering." | Notes p. 144 say both "When b > a there is no scattering" (unqualified) and, boxed, "Expect no scattering for l > ka", then "Thus only values l ≤ ka contribute to σ". The lecture (L21.2 p. 2) says "little or no scattering" and "the delta l's are small". | "only ... 'expect'" | Reword, e.g. "The lecture says 'little or no scattering'; the notes box it as 'expect no scattering'." The rule-of-thumb label itself is correct and useful. |
| 3 | info | "The phase shift from the matching", first sentence: "so divide the two equations (L21.1 transcript p. 4)" | The decision to divide is at the bottom of L21.1 p. 3 ("the right thing to do is to divide the equations"); the ratio is formed on p. 4. | p. 4 | "(L21.1 transcript pp. 3-4)". |
| 4 | info | Worked example (c): "larger than the 4πa² = 50.3 fm² of a hard sphere of the same size" | Notes (7.2.39): σ → 4πa² for the hard sphere at low energy (ka → 0). | Unqualified. At the example's own ka = 0.5 the hard-sphere s-wave cross section is (4π/k²) sin²(0.5) = 46.2 fm². | "larger than the low-energy hard-sphere value 4πa² = 50.3 fm²" (the comparison still holds either way). |
| 5 | info | Direct check of the Green's function (prose before (7.3.14)) | Notes (7.3.14), second line, print the leftover term as ∓(2ik/4πr) e^{±ikr}: one power of r is missing (it should be 4πr², as the line above it implies). | Correctly gives ∓2ik e^{±ikr}/(4πr²). | Optional: add a bracket noting the misprint, as is done for (7.2.45). |
| 6 | info | Plot legend "bound 4π/k²" | (Page's own plot.) | The y axis is σ₀/a², so the dashed curve is 4π/(ka)². | Legend "bound 4π/(ka)²" (or say "in units of a²" in the caption sentence about the dashed curve). |

No `error` findings: every formula matches its cited equation and page, every number recomputes, every quiz answer is right.

## Formula and citation checks
- (7.2.43) R_l(a) = A j + B n: printed p. 142 (PDF p. 10), correct. (7.2.44) a R' = ka(A j' + B n'): p. 143, correct (the notes print the primes correctly here).
- (7.2.45) p. 143: the page's corrected form is right; the misprints the page attributes (no prime on j_l in the three numerators, n_l' printed as η_l') are real (checked on the rendered page). β_l named "the logarithmic derivative of the radial solution" in the notes; the page's "(times a)" is accurate.
- tan δ_l = (j' − γ j)/(n' − γ n), γ = R'(a)/(kR(a)): L21.1 p. 4, said on the board with the ratio written out ("Rl prime at a over kRl of k of a"); the name γ_l is correctly flagged as the page's shorthand. Algebra verified (calcs `tan-delta-formula`).
- (7.2.48)-(7.2.49) p. 143: correctly labelled as notes-only ("an approach not in the lecture"). I re-derived e^{2iδ} from (7.2.45): e^{2iδ} = −[(j − in)/(j + in)]·[β − ka (j' − in')/(j − in)]/[β − ka (j' + in')/(j + in)]. Matches the page. The identities n + ij = i(j − in), n − ij = −i(j + in) are correct, so the first factor equals (n + ij)/(n − ij), the hard-sphere factor of (7.2.41).
- (7.2.50) b ≃ l/k p. 143; (7.2.51) p. 144; (7.2.52)-(7.2.54) p. 144: all correct. "In the notes, ka < 1" is correct (p. 143); the lecture says "much less than 1" and also "less than 1" (L21.2 p. 1).
- Partial-wave bound: L21.2 p. 4, correct. Classical ring 2πbΔb = (1/4)(4π/k²)(2l): L21.2 p. 5, correct, "one fourth" on pp. 5-6.
- (7.3.1) p. 144 (capital M noted, correct); (7.3.2)-(7.3.10) p. 145; "outgoing/ingoing wave" Green's function and (7.3.11)-(7.3.17) p. 146; (7.3.18)-(7.3.19) p. 146; (7.3.20)-(7.3.23) p. 147. All equation numbers and pages correct.
- Every L21.3 transcript citation checked: p. 1 (new method, U, (∇² + k²)ψ = Uψ, source picture), p. 2 (Green's function, two reasons), pp. 2-3 (claim), p. 3 (check, integral equation, recursive approximation / Born), p. 4 (G(r) with r' = 0, several Green's functions, contour integration, radial Laplacian, Poisson), pp. 4-5 (−1/4π), p. 5 (Griffiths / vector calculus; choices ψ₀ = e^{ikz}, G₊; "G₋ would also give a solution"), pp. 5-6 (integral equation with G₊), p. 6 (G depends on magnitude; r' inside the potential; 100 times the range, 1%; phase approximation), p. 7 (far-field G₊, ψ, f). All correct.
- L21.1 citations: pp. 1-2 (results on the board), p. 2 (radial equation, E = ħ²k²/2m, u ∝ r^{l+1}, extra k label, R = u/r), pp. 2-3 / p. 3 ("We cannot help you", diagram, delta-function case, matching, multiplying by a), p. 4 (ratio, tan δ formula, "trigonometric functions times powers", "first 10 phase shifts"). Correct except item 3.
- L21.2 citations: p. 1 (erasing the formula, "this homework"; useful when first few dominate; ka ≪ 1; short range / low energy; impact parameter and L = bp), p. 2 (ħl, ħk, b = l/k; l = 0 head on; ka ≈ 5), p. 3 (second intuition, turning point), p. 4 (σ_l, bound, "partial wave unitarity"), pp. 4-6 (classical ring). All correct.

## Slips and typos the page attributes
- tan δ = −B/A: L21.1 p. 1 says "the tangent of the phase shift is determined by the ratio of these two coefficients, Bl over Al"; on p. 4 he writes "minus tan delta l. That's what the ratio Bl over Al is". So there is no real slip; the page's bracket does not call it one, only notes that the minus is part of the definition. Fair (it could even be dropped).
- Notes' (7.2.45) primes/η': real (item 1 above for its extension to (7.2.48)).
- "Differential cross section" for the ring area: real (L21.2 p. 5: "So what is the differential cross section? The classical-- ... it's this area", and "the contribution to the differential cross section from this partial wave"). He also says "some contribution to the total cross section that would come from integrating" on p. 5, so "as Zwiebach also says" is fair.

## Arithmetic and answer checks
Recomputed independently with NumPy/SciPy (spherical_jn/yn), and the two phase shifts additionally by integrating the radial ODE inside the well numerically and matching at r = a (no use of the page's formula):
- ka = 0.5, Ka = 1.4, (Ka)² − (ka)² = 1.71. Ka cot Ka = 0.24147; γ₀ = −1.51707. Correct.
- j₀ = 0.958851, n₀ = −1.755165, j₀' = −0.162537, n₀' = 4.469181. Correct.
- Numerator 1.292103, denominator 1.806481, tan δ₀ = 0.715259, δ₀ = 0.620894 rad = 35.575°. Correct (0.7153, 0.621 rad, 35.6°). ODE check: tan δ₀ = 0.715259. Closed form −0.5 + arctan(2.07067) = 0.620894. Correct.
- 4π/k² = 201.06 fm²; sin²δ₀ = 0.33845 ("a third"); σ₀ = 68.05 fm² = 0.680 b. Correct. 4πa² = 50.27 fm². Correct (see item 4 for the wording).
- γ₁ = 1.16787; tan δ₁ = 0.0055705 (ODE: 0.0055705); δ₁ = 0.319°; σ₁ = 0.01872 fm²; σ₁/σ₀ = 0.0275 % (< 0.03 %). Correct.
- Plot: the expression is σ₀/a² = 4π sin²(−x + arctan((x/√(x² + 1.71)) tan √(x² + 1.71)))/x², the stated well. Values: 42.49 as ka → 0 ("levels off near 42.5"), 17.012 at ka = 0.5 (point y = 17.01), 0.663 at ka = 2 (0.66). At the domain's left edge (0.05) the curve is 41.9, below the range top of 50. The tan √(...) pole at ka ≈ 0.87 is harmless (sin² is continuous through it). The dashed bound is drawn only for 4π/x² ≤ 50, i.e. ka ≥ 0.501, consistent.
- Classical ring sum: Σ_{l=0}^{L} 2πl/k² = πL(L + 1)/k² ≈ πa² for L = ka ≫ 1. Correct, and correctly marked as not in the lecture.
- Far-field condition: |r − r'| = r − n̂·r' + (r'² − (n̂·r')²)/(2r) + O(r'³/r²). The dropped term changes the phase by k(r'² − (n̂·r')²)/(2r) ≤ ka²/(2r), so the condition is r ≫ ka² (up to the factor 1/2, the usual Fraunhofer condition). The page's added condition is correct, correctly marked as stated in neither source, and "not merely r ≫ a" is right (it matters when ka > 1).
- Direct Green's-function check (page prose before (7.3.14)): first term −k²G ∓ 2ik e^{±ikr}/(4πr²), second e^{±ikr}δ³ = δ³, cross term 2(±ik r̂ e^{±ikr})·(r̂/(4πr²)) = ±2ik e^{±ikr}/(4πr²). Correct.
- Calcs file `calcs/8.06/phase-shifts-integral-scattering-equation.yaml`: 50 entries, all pass (`pytest tests/calc -k integral-scattering`: 50 passed). Every number on the page has an entry; the complex (7.2.48) algebra is documented as hand-checked, and I checked it above.
- Quiz 1: answer 1 (match R'/R to A j + B n) correct; explanation correct.
- Quiz 2: ka = 0.1 × 3 = 0.3, only l = 0. Correct.
- Quiz 3: bound 4π/0.25 = 50.27 fm² < 60 fm², answer 3 correct.
- Quiz 4: answer 0 correct; the explanation (both are Green's functions, both −1/(4πr) near 0, G₋ gives incoming waves) is right and matches L21.3 p. 5.
- Flashcards: all four correct (γ without subscript in card 1 is defined there; ring 2πl/k² = a quarter of (4π/k²)(2l) is stated as "a quarter of that bound", fine as an approximation).

## Coverage and order
- The page follows L21.1 → L21.2 → L21.3 in order, inserting the notes-only e^{2iδ} form (7.2.46)-(7.2.49) where the notes have it (right after (7.2.45)). Notes coverage (7.2.43)-(7.2.54) and (7.3.1)-(7.3.23) is complete; (7.2.36)-(7.2.42) (hard sphere) belong to the Lecture 20 page; §7.3.1 (Born approximation) begins with (7.3.24) and is correctly left to Lecture 22.
- Nothing from the three videos is omitted. Additions by the page (worked example, plot, ring sum to πa², far-field condition, "reaches the bound at 90°") are all marked or obviously the page's own.
- Lecture order note: the lecture says G₊ is "outgoing"; that name, and the vector-calculus check, are from the notes and are labelled as such.

## Licensing
- No "All rights reserved" or "Courtesy of" notices in any source read. The notes' Figure 7.2 (hand-drawn ρ²j_l²) and the impact-parameter and far-field sketches (pp. 143, 146) are not reproduced; Figure 7.2 is only mentioned in words, with a link to the page's own generated graph on the Lecture 19 page. The plot is generated from a formula.
- No verbatim copying beyond short standard phrases; the worked example (square well, own numbers) is original. No OpenStax/LibreTexts material. No em dashes.

## Forward links
- `leadsTo` 8.06 Lecture 22 ("The Born approximation; identical particles" in `_course.json`): correct; the notes' §7.3.1 starts the Born approximation from (7.3.24), and L21.3 p. 3 announces it.
- No cosmology callout on this page; none required.

## Symbols
The meanings added or widened in `data/symbols.json` for this page (β, γ, δ, θ, ρ, σ, φ, ψ, a, z, G, G₊, G₋, G±, k, k_i, k_s, ⋆, ≃, arctan, x, b, L, p, j₁, E, r′, U, V, l, δ₀, δ₁, δ_l, n₀, n₁, j₀, j_l, n_l, σ₀, σ₁, σ_l, K, R₀, R₁, R_l, γ₀, γ₁, γ_l, β_l, n̂, V₀, u₀, u_l, ψ₀, A_l, B_l, Y_l0, r⋆) were compared with their use on the page; all fit, and units are sensible (U in 1/m², G in 1/m, f in m). New page-specific meanings are scoped to this slug; no general meaning was widened inappropriately.

## Notes
- The intro's remark that the L21.3 transcript header says "L21.2" is verified.
- "Zwiebach gives three ways to see why": the third (unitarity and the classical ring) is less an argument for "few phase shifts" than a bound and a classical picture; the lecture frames it as "one more classical intuition" (L21.2 p. 4). The page's sum of rings to πa² ties it back; acceptable.

## Resolution (2026-11-18, by the page author)

1. (warning) The misprint bracket after (7.2.45) now names eqs. (7.2.45)–(7.2.48), and the (7.2.48) formula is followed by "(primes restored, as in (7.2.45))".
2. The rule-of-thumb bracket now says that the lecture says "little or no scattering", while the notes state it once plainly ("When b > a there is no scattering") and box it as "expect no scattering" for l > ka.
3. The decision to divide the matching conditions is now cited to L21.1 transcript pp. 3–4.
4. Worked example (c) now calls 4πa² = 50.3 fm² the hard sphere's low-energy value, and adds the hard sphere's s-wave value at the example's ka = 0.5, (4π/k²) sin²(0.5), about 46.2 fm² (new calcs entry `ex-hard-sphere-s-wave`).
5. A bracket after the direct Green's-function check notes that the second line of (7.3.14) prints the leftover piece with 4πr instead of 4πr².
6. The plot legend now reads "bound 4π/(ka)²", and the caption says that the bound 4π/k² is 4π/(ka)² in units of a².

Status set to `reviewed`.
