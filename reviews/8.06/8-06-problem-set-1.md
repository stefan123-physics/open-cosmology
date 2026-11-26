---
page: content/year-3/8.06/8-06-problem-set-1.mdx
reviewed: 2026-11-26
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/problem-set-1/ (read: PDF as pdftotext, page 1 also checked as an image for 1(c))
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-1-non-degenerate-and-degenerate-perturbation-theory/ (read: MIT8_06S18ch1.pdf, pdftotext)
  - https://physics.nist.gov/cuu/Constants/ArchiveASCII/allascii_2018.txt (read: CODATA 2018 values) and the current NIST value pages (CODATA 2022)
  - https://doi.org/10.1038/nature09250 (not read: Springer Nature, cite only; arXiv searched for a preprint, none found)
verdict: pass-with-notes
---

# Review: Problem Set 1: Perturbation theory at work, from Pauli matrices to the size of the proton

Blind solve first (statements only, from the stripped file and MIT's PDF), then comparison. My answers were written to this file before the full page was opened; they are kept unchanged in the section "Blind solve" below.

## Blind solve

### My answers (written before opening the full page)
- 1(a): (a·σ)² = |a|² I, eigenvalues |a|² (twice); a·σ has ±|a| (trace 0); a0 I + a·σ has a0 ± |a|. Larger: a0 + sqrt(a1²+a2²+a3²).
- 1(b): exact ±sqrt(α²+β²). α≪β (upper): β + α²/(2β) − α⁴/(8β³). β≪α: α + β²/(2α) − β⁴/(8α³). PT: E(1)=0, E(2) = +α²/(2β) (upper, α≪β), +β²/(2α) (upper, β≪α). Second correction is fourth order in the small parameter.
- 1(c): Q0 = I, Qi = σi (checked numerically: tr(A†Q) returns a0..a3).
- 2(a): δH = (λħω/2)(a+a†)³; E0 = ħω/2 − (11/4)λ²ħω (checked by diagonalising a truncated matrix: −2.756 λ² at λ=0.01).
- 2(b): c1 = −3λ/2, c3 = −λ/√6; ⟨x⟩ = −3λd/√2.
- 2(c): x_b = −d/(3√2 λ), V(x_b) = ħω/(108 λ²); λ=0.1: x_b = −2.357 d, V = 0.926 ħω. Potential unbounded below: no true ground state, state is metastable; PT misses tunnelling (non-perturbative, ~exp(−const/λ²)). WKB 2∫√(2(v−e))du at λ=0.1: 2.78 (E=ħω/2) → e^{−2S} ≈ 0.06.
- 3(a): E = ħω(n1+n2+n3+3/2); degeneracy 3.
- 3(b): δH = iλħω(a1†a3 − a3†a1).
- 3(c): ⟨100|δH|001⟩ = iλħω; matrix [[0,0,iλħω],[0,0,0],[−iλħω,0,0]].
- 3(d): δH eigenvalues +λħω, 0, −λħω, states (|100⟩ − i|001⟩)/√2, |010⟩, (|100⟩ + i|001⟩)/√2. H: ħω(5/2+λ), 5/2ħω, ħω(5/2−λ). Highest: ħω(5/2+λ), state (|100⟩ − i|001⟩)/√2 (checked numerically).
- 3(e): diag(5/2+λ, 5/2, 5/2−λ)ħω.
- 3(f): [H0, δH] = 0. Level crossing of the 5/2 level's top with the 7/2 level's bottom at λ = 1/3.
- 4(a): ψn = e^{inφ}/√(2π), En = n²ħ²/(2ma²), n ∈ ℤ; |n| ≥ 1 doubly degenerate, n = 0 not.
- 4(b): c1 = 2qεma³/ħ²; polarizability 2q²ma⁴/ħ² (also from E(2) = −q²ε²ma⁴/ħ² = −½αε²).
- 4(c): E = −mb²a²/(9ħ²) (E(1) = 0); c3 = −2mba²/(9ħ²); for b > 0 most likely at φ = 60°, 180°, 300° (cos3φ = −1, the staggered positions).
- 5(a): V = −(e²/2R)(3 − r²/R²) for r < R.
- 5(b): ΔE = (2/5)e²R²/a0³; fraction (4/5)(R/a0)² = 2.857e−10; ΔE = 3.885e−9 eV.
- 5(c): ψ ∝ r^ℓ near 0; suppression ~ (R/a0)²; exact 2p/2s ratio = (R/a0)²/56 → factor 56(a0/R)² = 1.57e11.
- 5(d): fraction ∝ m²: 206.8² = 4.28e4 (absolute shift ∝ m³ ≈ 8.8e6).

### Comparison, one line per answer id
- p1-top: page a0 + sqrt(a1²+a2²+a3²) = mine. Agree.
- p1-exp: page β + α²/(2β) − α⁴/(8β³) = mine. Agree.
- p1-pt: page β²/(2α) = mine. Agree.
- p1-order: page "four" = mine (odd orders vanish, α⁴ term is fourth order). Agree.
- p1-q: page Q0 = I, Qi = σi = mine (numerical check tr(A†Q) = a0..a3). Agree. MIT's A = (a0 I + a·σ)/2 confirmed on the PDF image of p. 1.
- p2-e: page ħω(1/2 − 11λ²/4) = mine (also −2.756λ² from a truncated-matrix diagonalisation at λ = 0.01). Agree.
- p2-c1: −3λ/2 = mine. Agree.
- p2-c3: −λ/√6 = mine. Agree.
- p2-x: −3λd/√2 = mine. Agree.
- p2-xb: −d/(3√2λ) = mine. Agree.
- p2-vb: ħω/(108λ²) = mine. Agree.
- p2-missed: tunnelling = mine. Agree. Page's c = 1/15 (zero-energy WKB exponent): recomputed analytically, 2∫₀^{1/(2√2λ)} s√(1 − 2√2λs) ds = (1/4λ²)(4/15) = 1/(15λ²). Agree.
- p3-e: ħω(n1+n2+n3+3/2) = mine. Agree.
- p3-deg: 3 = mine. Agree.
- p3-dh: iλħω(a1†a3 − a3†a1) = mine. Agree.
- p3-m13: iλħω = mine. Agree.
- p3-top: ħω(5/2 + λ) = mine. Agree.
- p3-state: (|1,0,0⟩ − i|0,0,1⟩)/√2 = mine (numpy eigh of [[0,0,i],[0,0,0],[−i,0,0]]: eigenvector for +1 is (1, 0, −i)). The sign flagged by the writer is correct.
- p3-comm: [H0, δH] = 0 = mine. Agree. Level crossing at λ = 1/3 (5/2 + λ = 7/2 − 2λ) = mine.
- p4-en: ħ²n²/(2ma²) = mine. Agree.
- p4-deg: all except the lowest = mine. Agree.
- p4-c1: 2mqεa³/ħ² = mine. Agree.
- p4-pol: 2mq²a⁴/ħ² = mine. Agree.
- p4-e2: −ma²b²/(9ħ²) = mine. Agree.
- p4-c3: −2ma²b/(9ħ²) = mine. Agree.
- p4-where: cos3φ = −1 = mine. Agree.
- p5-v: −(e²/2R)(3 − r²/R²) = mine. Agree.
- p5-de: 2e²R²/(5a0³) = mine. Agree.
- p5-frac: 2.86 (×10⁻¹⁰) = mine (2.857). Agree.
- p5-ev: 3.89 (×10⁻⁹ eV) = mine (3.885). Agree.
- p5-l1: (R/a0)² = mine; page's 2p/2s check (R/a0)²/56 = 6.4×10⁻¹² = mine (I derived 3/140 for the 2p bracket, ratio 1/56). Agree.
- p5-mu: 4.28 (×10⁴) = mine (206.8² = 42766). Agree.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | frontmatter `references.codata` (url) and every place citing `codata` | (not MIT) CODATA 2018 values | Location lists CODATA 2018 values (all four verified correct against NIST's 2018 archive file), but the URL https://physics.nist.gov/cuu/Constants/ now shows CODATA 2022 (a0 = 5.29177210544e-11 m, mμ/me = 206.7682827, mp/me = 1836.152673426, rp = 0.84075(64) fm), so a reader following the link does not find the quoted numbers | Point the URL at the 2018 archive: `https://physics.nist.gov/cuu/Constants/archive2018.html` (or the ASCII list `https://physics.nist.gov/cuu/Constants/ArchiveASCII/allascii_2018.txt`) |
| 2 | warning | Problem 4(c), statement and solution "Interpretation" | φ is the relative rotation; MIT fixes no zero of φ and no sign of b | φ is "the angle between the two groups"; the solution says the favoured angles cos3φ = −1 are "those of MIT's figure". That holds only if φ = 0 is the eclipsed position (H atoms one behind the other) and b > 0; the page states neither | In the statement add: "Measure φ from the position in which each back hydrogen atom sits exactly behind a front one, so that b > 0 for ethane." Then the claim in the solution follows |
| 3 | warning | Problem 5(d), second hint | (MIT has only the mass hint) | "Part (b) gives the fraction as ⁴⁄₅(R/a₀)²" prints the result of part (b), which a reader can open before answering 5(b) | Replace with: "Take your fraction from part (b). How does it depend on a₀, and how does a₀ depend on the mass?" |
| 4 | info | Problem 5(d), solution | "explain why the PSI experiment could get such impressive accuracy" | Explains via the ground-state shift (×4.3×10⁴ as a fraction) and "laser spectroscopy of the muonic atom" | Optional: one sentence linking to 5(c): PSI measured the 2S–2P splitting of muonic hydrogen; the 2S level is shifted by the proton size and the 2P level hardly at all, which is exactly the ℓ-dependence of 5(c) |
| 5 | info | Problem 3(f), solution step "The matrix element" | notes eq. (1.2.29): K commutes with δH, basis states with different K eigenvalues | "the argument of the lesson's shortcut ... with the roles of the operators exchanged" | Clearer: "with H₀ in the role of K" (the equation number is correct) |
| 6 | info | Problem 5(c), choice box label | "estimate the factor by which this effect is smaller" | "smaller by a factor of about (R/a₀)², roughly 10⁻¹⁰" | Label as "the ratio ΔE(ℓ = 1)/ΔE(ℓ = 0) is about"; the choices then read correctly |
| 7 | info | Problem 2(c) and 5(c) statements | MIT's question sentences | "Is the state of part (b) anything like the true ground state? Which effect has perturbation theory failed to find?" and "Why is this effect most important for states with orbital angular momentum zero?" are almost MIT's wording | Single-sentence questions; acceptable as short phrases. Optional light rewording |

## Arithmetic and answer checks
- calc:test for this page: `pytest tests/calc -k 8-06-problem-set-1`: 59 passed.
- Every number recomputed: sqrt(1.01) = 1.0049876 and 1.0049875 (1(b) check); ⟨x⁶⟩ = 15d⁶/8 and 9/4 + 6/4 = 15/4 (2(a) sum rule); x_b = −2.357d, V = 0.926ħω at λ = 0.1; zero of V at −d/(2√2λ); 1/36 − 1/54 = 1/108; R/a0 = 1.890×10⁻⁵, fraction 2.857×10⁻¹⁰, 3.885×10⁻⁹ eV; 2R/a0 = 3.8×10⁻⁵; ⟨r²⟩ = 3R²/5 and ΔE = (2/3)e²⟨r²⟩/a0³; (R/a0)² = 3.57×10⁻¹⁰ (page "≈ 4×10⁻¹⁰", fine at one figure); 2p/2s = 6.38×10⁻¹²; 206.8² = 42 766, 206.8³ = 8.84×10⁶; 2.86×10⁻¹⁰ × 42 766 = 1.22×10⁻⁵; reduced mass 185.84 mₑ, factor (185.84/0.99946)² = 3.46×10⁴; (0.8768 − 0.84184)/0.8768 = 3.99%. All correct.
- Second-order check of 4(b): E⁽²⁾ = −mq²a⁴ε²/ħ² = −½αε² with α = 2mq²a⁴/ħ². Correct.
- Wavefunction check of 3(c): iħ(x₁∂₃ − x₃∂₁)(x₃G) = iħx₁G. Correct.
- Every `mistakes` formula checked against its hint: all hints are true of their formulas (e.g. 15/4 = no denominators, 9/4 = only |1⟩, 1/36 = quadratic term alone, 1/54 = cubic term alone, e²R²/(10a0³) = a quarter, 4·mq²a⁴/ħ² = using ⟨cos²⟩ = 1, ±18 in 4(c) = one state only). Every mistake differs from the answer over its `vars`.
- `vars` ranges: all positive and finite; p5-v keeps r < R (r ∈ [0.1, 0.9], R ∈ [1, 2]). Fine.
- Number-box tolerances (2%) accept 3 significant figures and reject the nearby wrong values (reduced-mass factor 3.46 vs 4.28; mass ratio cubed).
- Choice boxes: answers sit at positions 2, 1, 3, 1, 2, 3, 0, 1, 2, 0 (spread over all four); the correct choice is never the uniquely longest one. Not answerable from length or position.
- Points: 10 + 15 + 25 + 10 + 20 = 80, as MIT; part splits add up in every problem.
- Every solution ends with a "Check the result" step (units, a limit, a second route or a number). Except Problem 3(e), which has no check step, but it is a two-point restatement of 3(d) and the diagonal form is self-evident; no change needed.
- Hints: none gives its own part's result away (see row 3 for 5(d)'s hint, which gives away 5(b)).

## Coverage and order
- Problems 1 to 5 and every part follow MIT's order; all MIT questions are asked. MIT's bracketed notes after 3(e) and 3(f) ("too simple", "non-generic") are rendered in the solutions in own words.
- Left out (stated in the intro): announcements, reading list, Figure 1 (described in words).
- Additions: every number marked "our addition" in the parts is in the intro list (1(b) third box; 2(b) mean position; 2(c) x_b, V(x_b), the λ = 0.1 graph, the tunnelling estimate; 3(f) crossing at λ = 1/3; 5(b) a0; 5(c) 2p/2s comparison; 5(d) box, mass ratios, later radius). The 1(b) check numbers (α = 0.1) and the 5(c) value ≈ 4×10⁻¹⁰ are worked checks, not new data; no listing needed.
- Notes equation numbers checked in MIT8_06S18ch1.pdf: (1.1.21) first-order energy, (1.1.34) first-order state, (1.1.36) second-order energy, (1.1.46) series of √(1 + z²), (1.1.47) convergence condition |λV| < ½|E1 − E2|, (1.1.50) x/d = (a + a†)/√2, (1.2.29) commuting-operator argument. All correct.
- MIT page citations: Problem 1 and 2 statement p. 1; 2(a)–(c), 3 to 3(d) p. 2; 3(e), 3(f), Problem 4 and 4(a) p. 3; 4(b), 4(c) p. 4; 5(a)–(d) p. 5. All match the printed page numbers.
- Lesson claims checked: the convergence condition is quoted in perturbation-series-degenerate-levels.mdx (eq. 1.1.47); the "shortcut" section exists in degeneracy-lifted-first-second-order.mdx (eq. 1.2.29); (N+1)(N+2)/2 is in spherical-well-oscillator-hydrogen.mdx; every linked slug exists, including wkb-approximation-connection-formula.

## Licensing
- MIT's sheet and notes carry no "All rights reserved" or "Courtesy of" notice (grep: 0 hits). Figure 1 is described in words, not redrawn. No OpenStax or LibreTexts material. Wording is the page's own except the short questions in row 7.
- Pohl et al., Nature 466, 213 (2010): Springer Nature, cite only (AGENTS.md rule 11). The page cites it as MIT does and says the article was not used: compliant. arXiv was searched (API: author Pohl with "muonic hydrogen", "muonic", title words "proton size"): no preprint of the 2010 Nature paper was found, so there is no arXiv version to switch to. Optional open further reading: R. Pohl, R. Gilman, G. A. Miller, K. Pachucki, "Muonic hydrogen and the proton radius puzzle", arXiv:1301.0905 (Annu. Rev. Nucl. Part. Sci. 2013); not needed for the page.
- CODATA (NIST): allowed for looking up values. All four quoted 2018 values verified against NIST's allascii_2018.txt: a0 = 5.29177210903e-11 m, mμ/me = 206.7682830, mp/me = 1836.15267343, rp = 0.8414(19) fm.

## Notes
- Symbols: about 110 meanings scoped to this slug in data/symbols.json; read through, all fit the page (ε shared between ε_ijk and the field is covered by a separate ε_ijk entry; units only on ω, d, x_b). No issue found.
- No `## Summary` with answers; no em dashes (0 found).
- Later development: CODATA 2022 gives rp = 0.84075(64) fm. The page's later-development sentence names CODATA 2018 only, which is correct as written; optional to add the 2022 value (it would need a calcs fact entry).
- The zero-energy WKB exponent c = 1/15 is the right leading exponent; at λ = 0.1 the exponent at E = ħω/2 is much smaller (2S ≈ 2.8 vs 1/(15·0.01) = 6.7), but the page uses c only for the λ-dependence, so no change needed.

COUNTS: errors=0 warnings=3 info=4

## Resolution (2026-11-26, by the page author)

- Warning 1: the CODATA reference now links NIST's 2018 archive (`archive2018.html`).
- Warning 2: the 4(c) statement now says where φ is measured from (back hydrogen exactly behind a front one), so that b > 0 for ethane.
- Warning 3: the second hint of 5(d) no longer prints part (b)'s result; it asks how the fraction depends on a₀ and how a₀ depends on the mass.
- Info 4 to 7 left as they are (optional; for info 5 the lesson's operator K has no symbol meaning on this page, so the wording stays).
