---
page: content/year-3/8.06/fine-structure-darwin-relativistic-spin-orbit.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l5-1/ (read: resource pages l5-1 to l5-5; there is no l5-6, so Lecture 5 has five segments)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/1438729f498e56685351daabce40edd5_67yCE-yt0T8.pdf (read: L5.1 transcript, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/7813eff5f14c0f03649a96929d664f96_Y5oTQvNt47I.pdf (read: L5.2 transcript, 5 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/27804649d8a77da7ae025f841dad4bd0_KYabRbRR-dU.pdf (read: L5.3 transcript, 5 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/3fc9d900efc2dbf46f85051590b5973a_mas9avjieP0.pdf (read: L5.4 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/d73fa2bbf832615f767b0d1cfc4aa29a_33kB8JQRpjI.pdf (read: L5.5 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-2-hydrogen-fine-structure/ (read: chapter 2 PDF; section 2.4 = PDF pp. 11-21, printed pp. 35-45, all rendered as images to read the equations exactly)
verdict: pass-with-notes
---

# Review: Hydrogen's fine structure: the Darwin, relativistic and spin–orbit corrections

Reviewed after the author's fix of the citation keys: every `<Formula>` now cites `reading6` (the notes), which is correct; before the fix they cited `reading5` (the L5.5 transcript), which would have been an error for every formula.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Why a Darwin term?", last paragraph | L5.2 p. 5: the Compton wavelength is "the size of a photon whose energy is equal to the rest mass of the electron", and such a photon "packs enough energy to create electron-positron pairs". The "shortest distance an electron can be localized" is in the **notes** (§2.4.1, printed p. 36), not the transcript | "in a relativistic treatment the Compton wavelength is the shortest distance over which an electron can be localized: a photon of that wavelength carries enough energy to create an electron–positron pair (L5.2 transcript p. 5)" | Zwiebach's spoken version is loose: a photon of energy mc² cannot make a pair (that needs 2mc², and a single photon needs a nucleus nearby). The page's sentence is true only because a photon of wavelength ħ/mc has energy 2πmc², and the page does not say so. Reword, e.g. "localizing an electron within ħ/mc takes momenta of order mc, energies at which electron–positron pairs can be created", and cite the "shortest distance" to the notes (reading6, §2.4.1) as well as L5.2 p. 5. |
| 2 | warning | Frontmatter `summary` | Notes p. 39: the ball model reproduces the Darwin term "up to a small correction (1/8 as opposed to 1/10)"; "heuristic"; the ball has **radius** ħ/mc (eq. (2.4.39)) | "it is what a smeared-out electron about one Compton wavelength across would feel" | Overstates (it is close, not equal) and "across" means a diameter. E.g. "roughly what an electron smeared over a ball of radius ħ/mc would feel". The body and the Summary bullet ("mimics") are fine. |
| 3 | warning | Calcs file, entry `table-3-5half` | Notes table after eq. (2.4.64) (printed p. 44, read from the rendered page at 200 dpi) lists n = 3, j = 5/2, S = 1/648 | `where: '… (the notes table stops at j = 3/2)'`, `origin: page-own`, `at: 'eq. (2.4.63)'` | The notes' table does **not** omit the 3D₅/₂ row (the reviewer brief said it did; it is wrong too). Change to `origin: mit`, `at: 'table after eq. (2.4.64)'` and drop the bracket. The page itself makes no claim about the omission, so no page change is needed. |
| 4 | info | Formula "Darwin term", `at="eq. (2.4.21)"` | (2.4.21) gives only the δ-function form inside the full Hamiltonian; the chain ħ²/(8m²c²)∇²V = πe²ħ²/(2m²c²)δ³(r) is eq. (2.3.19) (written as −e²ħ²/(8m²c²)∇²(1/r)), and Zwiebach derives it on L5.1 pp. 1-2 | eq. (2.4.21) | Acceptable; more precise: `at="eqs. (2.3.19), (2.4.21)"`. |
| 5 | info | "Adding them up", formula (2.4.59) | Notes (2.4.59): (E⁽⁰⁾)²/(2mc²)·{3 + 2n[…]}. The L5.5 transcript p. 1 reads "3 plus n J j plus 1 minus 3l…", without the factor 2 (spoken slip or transcription) | 3 + 2n f(j, l) | The page follows the notes and is correct (checked: rel. + spin–orbit = (E²/2mc²)(3 − 4n/(l+½) + 2n·[…]/(…)) and both reduce to the boxed (2.4.62)). Optional bracket noting the transcript drops the 2. |
| 6 | info | Bracket after the table: "Smaller effects that this course does not treat, the Lamb shift and hyperfine splitting" | Notes p. 36 ("further smaller corrections … hyperfine splitting and Lamb effect", not examined here) and end of §2.4.4 (p. 45: the Lamb shift splits 2S₁/₂ from 2P₁/₂ and is of order α⁵; hyperfine is a factor mₑ/mₚ smaller) | as quoted | Supported. Two optional improvements: hyperfine splitting **is** treated on this site in 8.05 (`hyperfine-21cm-adding-angular-momenta`), so "this course" could link there; and the notes' point that the Lamb shift lifts exactly the 2S₁/₂–2P₁/₂ degeneracy the page highlights is worth a clause. |
| 7 | info | "The Darwin term", bracket on the name | L5.1 p. 1: "This is Charles Gaston Darwin, a British physicist"; the notes do not name him | "The physicist is Charles Galton Darwin; in the recording his middle name comes out as 'Gaston'." | Correct (C. G. Darwin, 1887-1962); the slip note follows the house rule. No change. |

## Arithmetic and answer checks
- Darwin: ∇²(−e²/r) = 4πe²δ³(r), so (ħ²/8m²c²)∇²V = πe²ħ²/(2m²c²)δ³ — matches (2.3.19)/(2.4.21) with correct sign. With |ψ(0)|² = 1/(πn³a₀³): e²ħ²/(2m²c²n³a₀³) = α⁴mc²/(2n³) (a₀ = ħ²/me², α = e²/ħc). Correct, (2.4.22)-(2.4.24). Positive shift: correct.
- Smearing: (1/3)δᵢⱼ∫ρ₀u² gives (1/6)∇²V∫ρ₀u² (2.4.33)-(2.4.35); uniform ball ∫ρ₀u² = 3/5 u₀² (2.4.37); (1/6)(3/5) = 1/10 (2.4.38); u₀ = ħ/mc gives ħ²/(10m²c²)∇²V (2.4.39). All correct.
- Relativistic: −(1/2mc²)[E² − 2E·2E + E²·4n/(l+½)] = −(E²/2mc²)(4n/(l+½) − 3) = −(α⁴mc²/8n⁴)(4n/(l+½) − 3). Correct, (2.4.44)-(2.4.46). ⟨V⟩ = 2E (virial) and ⟨V²⟩ = E²·4n/(l+½) match (2.4.45).
- Spin–orbit: ħ²/2·[j(j+1) − l(l+1) − ¾] prefactor e²ħ²/(4m²c²) and ⟨1/r³⟩ = 1/(n³a₀³ l(l+½)(l+1)) match (2.4.52)-(2.4.55); e²ħ²/(4m²c²n³a₀³) = (E⁽⁰⁾)²n/(mc²) (checked algebraically), so (2.4.56) is correct.
- l → 0 limit with j = l + ½: numerator (l+½)(l+3/2) − l(l+1) − ¾ = l, so the bracket is n/((l+½)(l+1)) → 2n, giving (α⁴mc²/4n⁴)(2n) = α⁴mc²/(2n³), the Darwin shift. Correct, (2.4.57)-(2.4.58).
- f(j, j−½): numerator −2j² + j = −j(2j−1), denominator (j−½)j(j+½), ratio −2/(j+½). f(j, j+½): numerator −2j² − 5j − 3 = −(2j+3)(j+1), denominator (j+½)(j+1)(j+3/2), ratio −2/(j+½). Both correct, (2.4.61).
- Combined: (E²/2mc²)(3 − 4n/(j+½)) with E² = α⁴m²c⁴/(4n⁴) gives −(α⁴mc²/2n⁴)(n/(j+½) − ¾). Correct, (2.4.62)-(2.4.63).
- Positivity: j + ½ ≤ l_max + 1 = n, so n/(j+½) ≥ 1 > ¾. Correct, (2.4.64). "Shifts fall like n⁻³" and "larger j moves down less": notes remark 5. Correct.
- Table (units of α⁴mc²): 1S₁/₂ −1/8; n = 2, j = ½: −(1/32)(5/4) = −5/128; j = 3/2: −(1/32)(1/4) = −1/128; n = 3, j = ½: −(1/162)(9/4) = −1/72; j = 3/2: −(1/162)(3/4) = −1/216; j = 5/2: −(1/162)(1/4) = −1/648. All six rows correct and agree with the notes' table (which includes 5/2). Multiplet labels (3P₃/₂ with 3D₃/₂, etc.) correct.
- Worked example (α = 1/137.036, mc² = 511.0 keV, h = 4.135667696e-15 eV s), recomputed: α⁴mc² = 1.4490e-3 eV (page 1.449e-3); −α⁴mc²/8 = −1.811e-4 eV (page −1.81e-4); ratio to 13.6057 eV = 1.331e-5 = α²/4 (page 1.3e-5); α⁴mc²/32 = 4.528e-5 eV (page 4.53e-5); f = 10.949 GHz (page 10.95); λ = 2.738 cm (page 2.7); Lyman α 13.6057 × ¾ = 10.204 eV (page 10.2); splitting/10.2 eV = 4.44e-6 ("about four parts in a million"). All correct. Intro "19,000": 137.036² = 18,779, and Zwiebach says "20,000, 19,000" (L5.1 p. 1). Fine.
- The example is the page's own (MIT computes no numbers for the 2P doublet).
- Quiz 1 (Darwin only S states): answer 0 correct; explanation correct.
- Quiz 2 (relativistic correction in uncoupled basis): answer 0 correct; "commuting-operator rule of Lecture 3" matches L5.3 p. 2 ("a remark … few lectures ago") and notes ("Remark 3 in section 1.2.2"), the L3.1 segment "Remarks on a good basis".
- Quiz 3 (depends on n and j only): answer 0 correct.
- Quiz 4 (2S₁/₂ and 2P₁/₂ degenerate, −5/128; 2P₃/₂ −1/128): answer 0 correct.
- Flashcards: all four correct. Card 4 checked: [L_z, S·L] = iħ(S_xL_y − S_yL_x) ≠ 0, so the perturbation does not commute with L_z or S_z, as stated.
- Calcs file `calcs/8.06/fine-structure-darwin-relativistic-spin-orbit.yaml`: `npm run calc:test -- -k fine-structure-darwin` passes (25 passed). Every entry's arithmetic re-done by hand above. Only issue: `table-3-5half` metadata (finding 3). The `combined` entry's `shown` string ends in `" cite` (part of the MDX attribute); harmless if the harness needs it to find the text, otherwise trim.

## Citation checks
- Equation numbers verified against the rendered notes (the notes number the first equation of §2.4 as (2.4.21)): (2.4.21) [see finding 4], (2.4.22), (2.4.23)-(2.4.24), (2.4.28), (2.4.33), (2.4.34)-(2.4.35), (2.4.36)-(2.4.38), (2.4.39), (2.4.41)-(2.4.42), (2.4.44)-(2.4.45), (2.4.46), (2.4.47)-(2.4.48), (2.4.51)-(2.4.52), (2.4.52)-(2.4.53), (2.4.56), (2.4.58), (2.4.59)-(2.4.60), (2.4.61), (2.4.62)-(2.4.63), (2.4.64). All correct.
- Transcript page citations checked with `pdftotext -f N -l N`: L5.1 p. 1 (Laplacian of V, δ-function), p. 2 (only l = 0; two S states with spin), p. 3 (homework trick, 1/(πn³a₀³), α⁴mc²/2n³); L5.2 pp. 1-5 (smeared electron; Compton remark p. 5); L5.3 p. 1 (naive formula, n² degeneracy), p. 2 (p⁴ commutes with L², L_z), p. 3 (move p² to the bra, Schrödinger equation, result), pp. 4-5 (unit-matrix argument); L5.4 p. 1 (spin–orbit term, S·L, good coupled basis), pp. 1-2 (commutation), p. 2 (the (E⁽⁰⁾)²n/mc² form); L5.5 p. 1 (l → 0 curiosity), pp. 1-2 (adding), pp. 2-3 ("most important result"), p. 3 (Dirac remark), pp. 3-4 (spectrum). All correct.
- "The real difficulty … is checking each time that the basis used is a good one": supported by L5.3 pp. 2-3 ("the most important and more interesting and more difficult point") and L5.5 p. 1.

## Coverage and order
- Order follows L5.1 → L5.2 → L5.3 → L5.4 → L5.5 and notes §§2.4.1-2.4.4. All five segments covered.
- Omitted (all acceptable, info): the explicit change-of-basis proof (2.4.49)-(2.4.50) (the lecture also leaves it to the notes); the notes' remark that the broken l-degeneracy was due to the Runge–Lenz vector (p. 40); the total energy (2.4.65); the level diagram that Zwiebach draws (L5.5 pp. 3-4, notes p. 44). The page replaces the diagram by a table; a generated level diagram (e.g. a VectorDiagram-style or Plot-based level chart) would follow the lecture more closely but is optional.
- Added beyond MIT: the worked example (own numbers), the Darwin name correction, and the Lamb/hyperfine bracket (from the notes). Fine.

## Licensing
- `grep -il "rights reserved\|courtesy"` over all five transcripts and chapter 2 text: no notices. Figure 2.1 (hand drawing of the smeared electron) is not reproduced. The level diagram of p. 44 is not reproduced.
- No OpenStax or LibreTexts material. No verbatim sentences found: the unit-matrix argument, the smearing derivation and the Dirac remark are rewritten. Closest phrase: "the shortest distance over which an electron can be localized" vs notes "physically the shortest distance an electron can be localized" (short standard phrase; fine, but cite the notes, finding 1).

## Forward links
- `leadsTo` 8.06 Lecture 6 (Zeeman effect): matches L5.5 p. 4 ("this is where you study in detail the Zeeman splitting and the Stark splitting … next time") and the course syllabus title "Zeeman effect; the semiclassical approximation". Correct. "Weak and strong" Zeeman is the content of notes §2.5; fine.
- No `Callout kind="cosmology"`; none needed.

## Notes
- The Dirac-equation remark ("the conserved angular momentum is J = L + S … labelled by j") matches L5.5 p. 3 and notes remark 1 (p. 43).
- Uncertain: whether the "3 plus n" on L5.5 p. 1 is Zwiebach's slip or the transcriber's (video not compared). Either way the page's formula is correct.

## Resolution (2026-11-18, by the page author)

Warnings:
1. The Compton-wavelength sentence is rewritten. The "shortest distance an electron can be localized" is now attributed to the notes (section 2.4.1). The pair-creation link is Zwiebach's (L5.2 p. 5), stated loosely and correctly: light with a wavelength near ħ/mc carries energies of order mc², enough (with factors of order one) to create pairs.
2. The frontmatter summary now says the Darwin term "resembles" what an electron smeared over a ball about one Compton wavelength in radius would feel.
3. Calcs `table-3-5half` now has `origin: mit` and cites the table after eq. (2.4.64). The wrong remark about the notes' table is removed.

Info:
- The Darwin formula now cites eqs. (2.3.19), (2.4.21).
- The Lamb-shift remark now says that it separates 2S1/2 from 2P1/2, and links the 8.05 hyperfine page.
- "3 + 2n f" follows the notes. The transcript's "3 plus n" is not noted as a slip, because the video was not compared.
- The optional omissions (2.4.49)–(2.4.50), the Runge–Lenz remark and (2.4.65) are left out; the table stands in for the level diagram.
