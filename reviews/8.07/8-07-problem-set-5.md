---
page: content/year-4/8.07/8-07-problem-set-5.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_pset05/ (read: pset05.pdf, all pages rendered, and pdftotext)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/eef19192166dac3b7be7448cbef765d6_MIT8_07F12_ln7.pdf (read)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/6a67040c6a90f70c8164cdea63473a30_MIT8_07F12_ln8.pdf (read; p. 7 rendered)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/0ccc978da12536a8d95333ec7726c555_MIT8_07F12_ln9.pdf (read; pp. 9 and 15 rendered)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/786724ea24f7a407c84e43c496be92ec_MIT8_07F12_pset04.pdf (read, to confirm the held-over problem)
verdict: needs-changes
---

Writer: Opus. Reviewer: Opus (same model, blind).

# Review: Problem Set 5 (8.07)

## Blind solve

### My answers (written before opening the full page)

Checks: `review/py5/blind.py` (numpy/scipy, venv python), output quoted where relevant.

- **2(a)** V0 = (1/4πε0)∫2πs σ ds / s = πA/(4ε0), so **A = 4ε0V0/π**. On the axis, ∫0^R s ds/(√(R²−s²)√(s²+z²)) = arctan(R/z), so **V(z) = (2V0/π) arctan(R/z)** (z > 0). Taylor series of arctan for z > R, plus P_2ℓ(1) = 1 and uniqueness of the axisymmetric exterior solution, gives MIT's series. Numerical: axis integral = closed form at z = 0.3, 1, 2.5 (to 1e-14); off-axis direct 2D integral at r = 1.7, θ = 0.6 equals the 60-term series (0.3514093019 both).
- **2(b)** Q = 2πAR = 8ε0RV0, **C = 8ε0R**; R = 10 cm: **C = 7.083 pF** (numerical Q/(ε0RV0) = 8.000).
- **3(a)** C^(2)_ij = (3/2)∫ρ{x_ix_j} = Q_ij/2; V_quad = (1/4πε0)Q_ij n_i n_j/(2r³); Q_ii = ∫ρ(3r²−3r²) = 0, symmetric by construction. **C^(2) = Q/2.**
- **3(b)** **Q_zz = 4qd²**, Q_xx = Q_yy = −2qd²; **V_quad = (1/4πε0)(qd²/r³)(3cos²θ − 1) = (1/4πε0)(2qd²/r³)P2(cosθ)**; on the axis at r = 20 cm: **0.4494 V** (exact total potential there 0.4505 V, the difference being the ℓ = 4 term).
- **3(c)** Q'_ij = Q_ij − 3(a_ip_j + a_jp_i) + 2(a·p)δ_ij + q_tot(3a_ia_j − a²δ_ij) (numerically verified on random charges). Independent of **a** for every **a** **iff the total charge and the dipole moment are both zero**.
- **3(d)** C^(3) = (15/6)∫ρ{xxx} = O/2, so V_oct = (1/4πε0)O_ijk n n n/(2r⁴); O_iik = ∫ρ(5r²x_k − 5r²x_k) = 0. Four charges: total charge, dipole and quadrupole all zero; **O_zzz = 24qd³**; **V_oct = (1/4πε0)(12qd³/r⁴)P3(cosθ) = (1/4πε0)(6qd³/r⁴)(5cos³θ − 3cosθ)** (numerical: full potential at r = 200d matches at θ = 0.3, 1.0, 2.0 to 1e-4 relative).
- **4(a)** Y31 = d31 (û⁺·n̂)(cos²θ − 1/5) with û⁺·n̂ = sinθ e^{iφ}/√2; **d31 = −15√(7/(96π)) = −2.2852**; product gives −(1/4)√(21/4π)(5cos²θ−1)sinθ e^{iφ} (numerical tensor contraction at θ = 0.7, φ = 1.1 equals eq. (4.10)).
- **4(b)** **Y_ℓℓ = ((−1)^ℓ/(2^ℓ ℓ!))√((2ℓ+1)!/(4π)) sin^ℓθ e^{iℓφ}**; **c(Y33) = −(1/8)√(35/π) = −0.41722**.
- **4(c)** Prefactor 8!/(2⁴·24²) = 35/8; ẑẑẑẑ{n̂n̂n̂n̂} = x⁴ − (6/7)x² + 3/35; **P4 = (35x⁴ − 30x² + 3)/8** (equal to scipy's P4).
- **5(a)** **E_r = 2p cosθ/(4πε0r³), E_θ = p sinθ/(4πε0r³)**, E_φ = 0; with p = p(cosθ r̂ − sinθ θ̂) this is (3(p·n̂)n̂ − p)/(4πε0r³).
- **5(b)** ⟨n̂_in̂_j⟩ = δ_ij/3, so the shell average is zero; ∫E d³x over the ball = (4/3)πR³E_avg = −p/(3ε0); **c = −1/(3ε0)**.
- **5(c)** Surface term at r = ε (outward normal of r > ε is −n̂): +∮ gV n_i ε²dΩ → g(0)p_i/(3ε0); bulk term ∫g∂_iV = −∫g E_reg,i. So **F_i[g] = −∫g{(1/4πε0)(3(p·n̂)n̂_i − p_i)/r³ − p_iδ³/(3ε0)} d³x**, i.e. ∂_iV_dip = −E_i. **MIT's eq. (5.8) lacks this overall minus sign** (confirmed below).
  - Numerical check (4πε0 = 1, p = ẑ, g = Gaussian centred at (0.3, −0.2, 0.4), so not spherically symmetric): i = x: F from eq. (5.3) = −0.49128, ∫gE (MIT's RHS) = +0.49128; i = z: F = +2.87503, ∫gE = −2.87503. The definition (5.3) equals minus MIT's printed right-hand side, for both components.
- **MIT eq. (4.9)** (checked on the rendered PDF p. 2): it writes d_ℓm with the eq. (4.8) formula, which for m < 0 contains 2^m (not 2^|m|), and equates the result to C^(ℓ,|m|)*, which gives Y_ℓ,−|m| = Y*_ℓ|m| without the Condon–Shortley factor (−1)^m. Both slips confirmed (standard: Y_ℓ,−m = (−1)^m Y*_ℓm).
- **Note on the stripped statement (seen before the full page):** the "How to answer" example `2*V0/pi*atan(R/z)` is exactly my answer to the 2(a) axis box. Checked against the full page below.


### Comparison with the page (one line per answer id)

| Box | Page | Mine | Result |
|---|---|---|---|
| p2-a | 4*eps0*V0/pi | 4ε0V0/π | agree |
| p2-axis | 2*V0/pi*atan(R/z) | (2V0/π) arctan(R/z) | agree (but see item 2: the same string is the example in "How to answer") |
| p2-cap | 8*eps0*R | 8ε0R | agree |
| p2-capnum | 7.08 pF, 1% | 7.083 pF | agree |
| p3-c2 | choice 1, Qᵢⱼ/2 | Q/2 | agree |
| p3-qzz | 4*q*d^2 | 4qd² | agree |
| p3-vquad | q d²(3cos²θ − 1)/(4πε0r³) | same | agree |
| p3-vnum | 0.449 V, 1% | 0.4494 V | agree |
| p3-origin | choice 2, total charge and dipole moment both zero | same | agree |
| p3-ozzz | 24*q*d^3 | 24qd³ | agree |
| p3-voct | 6qd³(5cos³θ − 3cosθ)/(4πε0r⁴) | (12qd³/r⁴)P3/(4πε0), the same | agree |
| p4-d31 | −2.285, 1% | −2.2852 | agree |
| p4-yll | choice 2, (−1)ˡ/(2ˡ l!) √((2l+1)!/(4π)) sinˡθ e^(ilφ) | same | agree |
| p4-y33 | −0.4172, 1% | −0.41722 | agree |
| p4-p4 | (35x⁴ − 30x² + 3)/8 | same | agree |
| p5-er | 2p cosθ/(4πε0r³) | same | agree |
| p5-eth | p sinθ/(4πε0r³) | same | agree |
| p5-delta | −1/(3ε0) | −1/(3ε0) | agree |
| p5c-surface | choice 1, +g(0)pᵢ/(3ε0) | +g(0)pᵢ/(3ε0) | agree |
| MIT eq. (5.8) sign | page adds an overall minus | MIT's sign is wrong (numerical test, two components) | agree |

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Problem 3(a), solution step "The tensor of rank 2": the sentence "(Lecture Notes 9, eq. (9.38), for a unit vector)" and the Formula "The traceless symmetric part of rank 2", `at="eq. (9.38), for r′ in place of ẑ"` | LN9 p. 9 (rendered): {ẑᵢẑⱼ} = ẑᵢẑⱼ − ⅓δᵢⱼ is eq. **(9.37)**; eq. (9.38) is only δᵢᵢ = 3 | eq. (9.38) | Change both to eq. (9.37): `at="eq. (9.37), for r′ in place of ẑ"`. |
| 2 | error | "How to answer", the example of plain typing | n/a | The example `2*V0/pi*atan(R/z)` is, character for character, the answer of the scored box p2-axis (the closed form that 2(a) asks for) | Use an example that answers no box, e.g. `V0*R/(2*z)`. |
| 3 | warning | Problem 4 intro: "For negative m the vectors û⁻ take the place of û⁺ (MIT's eq. (4.9); see also Lecture Notes 8, eqs. (8.42) and (8.43))" | MIT eq. (4.9) (rendered p. 2) uses d_ℓm of eq. (4.8), so 2^m for negative m, and equates the result to C^(ℓ,abs m)*; it gives Y_ℓ,−m = Y*_ℓm (times 2^(−abs m)) with no factor (−1)^m. LN8 (8.43) has 2^(abs m), but (8.42) still lacks (−1)^m. Numerical check (py5/check2.py), ℓ = 1, m = −1: the formula gives −√(3/8π) sinθ e^(−iφ) (with 2^(abs m)) or half of it (with 2^m); the standard value is +√(3/8π) sinθ e^(−iφ). | Points the reader to these equations without a warning. The writer's note says the page states the slip; it does not (only the linked lesson spherical-harmonics-from-traceless-tensors gives the corrected forms). | Add in brackets after the reference: "(MIT's eq. (4.9) as printed has 2^m where 2^(abs m) is meant and lacks a factor (−1)^m: the standard convention is Y_ℓ,−m = (−1)^m Y*_ℓm; the lesson gives the corrected form.)" written with $\lvert m\rvert$. |

## Arithmetic and answer checks
- Every number on the page recomputed (py5/blind.py, py5/check2.py): 0.2952; 7.08 pF; 11.1 pF; 2/π = 0.64; 0.449 V; 0.4505 V; 0.25%; 12qd³ and 24qd³; 0.2% at r = 50d (0.2003%); d31 = −2.285; ∫(5x² − 1)²(1 − x²)dx = 32/21, so the Y31 normalisation is 1; c = −0.4172, c² = 0.1741, ∫sin⁷θ dθ = 32/35; 35/8; (8/35)² = 0.052; Rodrigues: fourth derivative 1680x⁴ − 1440x² + 144 over 384. All correct.
- Antiderivative in 2(a): −2arctan√((R² − u)/(u + z²)) runs from −2arctan(R/z) at u = 0 to 0 at u = R², so the integral is 2arctan(R/z): correct.
- Every listed mistake and its hint checked: p2-a (V0/2 and πV0/4 at the centre: true), p2-axis, p2-cap (4πε0R is the sphere; 4ε0R is half), p3-qzz (2qd², 6qd²), p3-vquad, p3-ozzz (12 and 60), p3-voct (twice too large on the axis; 1/r³), p4-p4 (inverted factor gives P(1) = 64/1225; only the leading term), p5-er, p5-eth, p5-delta (−1/(4πε0) gives −3p/(16π²ε0R³): true). All hints true of their mistakes.
- `vars` ranges keep every answer and every mistake finite and non-zero (θ ranges avoid the zeros of 3cos²θ − 1 and 5cos³θ − 3cosθ; z > 0; r > 0). The 1% tolerances reject every listed number mistake and accept 3 significant figures.
- Choice boxes: right choice at positions 1, 2, 2, 1; in none is it alone the longest or the shortest.
- Calcs file read: routes independent of the page's (normalisation integrals, Legendre recurrence, numerical ring integrals, exact point-charge potentials, Gaussian test function); `shown:` strings spot-checked against the page text (0.2952, 7.08 pF, 0.449 V, 0.25%, 0.052, 1.000). I did not run `calc:test` or `content:check`.
- Every solution ends with a check step (a limit, a normalisation, a number or another route).

## Coverage and order
- MIT Problem 1 (Griffiths 3.22, hemispheres, 15 points) left out as held over: confirmed on MIT's Problem Set 4 PDF ("PROBLEM 5: A SPHERE WITH OPPOSITELY CHARGED HEMISPHERES (15 points), Griffiths Problem 3.22"), and our Set 4 has it as `id="p5"`, linked with `#p5`. The 75 points (90 − 15) plus 10 extra are right.
- Problems 2, 4 and 5(c) follow MIT's statements and order of parts, in own words; MIT's hints kept. Problem 4(c)'s Griffiths table replaced by Rodrigues' formula (LN8 eq. (8.10), verified), and said so.
- Problems 3 and 5(a)(b) are our own problems on MIT's titles, marked in their titles and the intro; nothing of Griffiths reconstructed. Problem 3(c) (shift of origin) is a part of our own Problem 3, so the "our own problem" label covers it.
- Points: 20/20/20/15 + 10 optional, as MIT; splits said to be ours, and they add up (14+6, 5+6+4+5, 8+6+6, 7+8).
- Boxes added by us are each marked in their part and listed in the intro: p2-a, p2-axis, p2-capnum, p4-d31, p4-y33, p5c-surface. Confirmed.

## Licensing
- No "rights reserved" or "courtesy" notice on the sheet or on Lecture Notes 7 to 9 (grep and rendered pages). No figures. The text is rewritten, including the long narration of 5(c) around eqs. (5.1) to (5.7). Griffiths and Jackson not used.

## Notes
- MIT eq. (5.8) sign (writer's flag): confirmed independently. From eq. (5.3), Fᵢ[g] = −∫∂ᵢg V d³x. For a non-symmetric Gaussian test function centred at (0.3, −0.2, 0.4), with 4πε0 = 1 and p = ẑ: Fₓ = −0.49128 and F_z = +2.87503, while MIT's printed right-hand side gives +0.49128 and −2.87503. The page's overall minus sign and its spherical-Gaussian check (F_z = +p/(3ε0)) are right.
- Citations checked on the PDFs: LN7 eqs. (7.2) and (7.4) on p. 1; LN8 eqs. (8.10), (8.42), (8.43); LN9 eqs. (9.39), (9.43), (9.45), (9.47), (9.50), (9.52), (9.68), (9.69) (the formula for C^(ℓ), on the rendered p. 15), (9.73). Only (9.38) is wrong (item 1). Sheet pages: p. 1 unnumbered; eqs. (4.1) to (4.9) p. 2; (4.10) to (4.12) and Problem 5 p. 3; (5.1) to (5.6) p. 4; (5.7) and (5.8) p. 5. All `at=` match.
- Linked problems: Set 4 Problem 6 gives E_avg = −q b/(4πε0R³) per charge, hence −p/(4πε0R³); Set 1 Problem 7(a) is the gradient theorem; Set 2 Problem 7 is the Laplacian of 1/r as a distribution. All as the page says.
- Problem 4(b), second hint: "Write (2ℓ)! under the square root as √((2ℓ)!)√((2ℓ)!)" is slightly ambiguous, since (2ℓ)! appears both in front and under the root; "Write the (2ℓ)! in front as …" is clearer.
- Symbols: the page-scoped meanings in data/symbols.json were read and fit the page; `content:check` not run by me. No em dashes; no `## Summary` with answers.

COUNTS: errors=2 warnings=1 info=5

## Resolution (2026-11-27, by the page author)

- Error 1: Problem 3(a) now cites Lecture Notes 9 eq. (9.37) in the sentence and in the Formula's `at=`.
- Error 2: the "How to answer" typing example is now `V0*R/(2*z)`, which answers no box.
- Warning 1: the Problem 4 intro now says in brackets that MIT's eq. (4.9) as printed has 2^m for 2^|m| and lacks (−1)^m, with the standard convention (the harmonic of −m is (−1)^m times the complex conjugate of the harmonic of m).
- Info: the second hint of Problem 4(b) now says "the (2ℓ)! that stands under the square root".
- `status: reviewed`.
