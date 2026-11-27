---
page: content/year-4/8.08/8-08-problem-set-9.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb9/ (read: prb9.pdf rendered to an image, and prb9.txt)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/fed85ade1be7fc37f3526ef1f56207de_the_bose_gas_co.pdf (read; rendered pages 74, 75, 75)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/3d0cf2cb43a2b62f92089db14e8e2904_the_fermi_gas.pdf (read; rendered pages 76, 79, 82, 83, 84, 87, 88, 89)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/8fc1b022e964e44ab41b87b5f8cd45cf_grand_canonical.pdf (read; rendered page 34)
  - K. Huang, Statistical Mechanics (not opened, by the course rule)
verdict: pass-with-notes
---

# Review: Problem Set 9 (8.08)

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

### My answers (written before opening the full page; checked in review/py9/blind.py)
- p1a: condensate when a(T) < 0, i.e. T < Tc (a0 > 0); |psi(+inf)| = sqrt(|a|/b) = sqrt(a0 (1 - T/Tc)/b).
- p1b: DeltaA(xi) = |a|/(2 m b xi) + 2 a^2 xi/(15 b)  [gradient psi_inf^2/(2 m xi); bulk term xi (a^2/4b) int_0^1 (1-t^2)^2 dt = (8/15)(a^2/4b) xi]. Numerical quad agrees at xi = 0.5, 1.7, 3.0.
- p1c: xi = sqrt(15/(4 m |a|)) (numerical minimum 1.59719 vs formula 1.59719 at a=-0.7, m=2.1).
- p1d: xi ∝ |a|^(-1/2) ∝ |Tc - T|^(-1/2), so with MIT's literal xi ∝ |Tc - T|^nu (rendered PDF: exponent is +nu, no minus sign), nu = -1/2.
- p2a: show (integrate by parts with Phi(eps) = int_0^eps phi, expand Phi about mu, int x^2 (-dn/dx) = pi^2/3).
- p2b: mu = eF [1 - (pi^2/12)(kB T/eF)^2].
- p2c: E = (3/5) N eF + (pi^2/4) N (kB T)^2/eF. (Numerical: E/N eF = 0.600986 exact vs 0.600987 at T = 0.02 TF.)
- p2d: (eF - mu)/eF = pi^2/1200 = 0.008225 from (b). (Exact numerical value 0.008359, 1.6% higher; with the T^4 term 0.008346.)
- p2e: none.
- p3a: D = m S/(pi hbar^2), constant.
- p3b: eF = pi hbar^2 n/m.
- p3c: mu = kB T ln(exp(eF/(kB T)) - 1).
- p3d: ln(e - 1) = 0.5413 (numerical root also 0.541325).
- p3e: mu - eF = kB T ln(1 - e^{-eF/kBT}) ≈ -kB T exp(-eF/(kB T)): exponentially small, no T^2 term (unlike 3D).
- p4a: R = (9 pi/4)^(2/3) hbar^2/(G mn^(8/3) M^(1/3)).
- p4b: R = 11.03 km (numerical minimisation 11.0275 km).
- p4c: Rs = 4.135 km, R/Rs = 2.67: R is under three Schwarzschild radii, the same order; GR is not negligible but the star is not a black hole.
- p4d: mu_n = mu_p + mu_e (+ mu_nubar = 0); neutrality n_e = n_p.
- p4e: kn = 1.6795 fm^-1, k_p = k_e = 0.29368 fm^-1, n_p/n_n = 0.005346 (massless electrons: 0.005347; dropping the proton kinetic energy: 0.00586, outside 2%).

### Comparison (one line per answer id; page opened after the lines above were written)
- p1-amp: page sqrt(a0*(1 - T/Tc)/b) = mine. Agree.
- p1-da: page -a/(2*m*b*xi) + 2*a^2*xi/(15*b) = mine (a < 0). Agree; quadrature check at three values of xi.
- p1-xi: page sqrt(-15/(4*m*a)) = mine. Agree.
- p1-nu: page -0.5 = mine (MIT's literal exponent, checked on the rendered PDF). Agree.
- p2-mu: page eF*(1 - pi^2/12*(kB*T/eF)^2) = mine. Agree.
- p2-u: page 3/5*N*eF + pi^2/4*N*(kB*T)^2/eF = mine. Agree.
- p2-shift: page 0.00822 = mine (pi^2/1200 = 0.0082247). Agree.
- p3-dos: page S*m/(pi*hbar^2) = mine. Agree.
- p3-ef: page pi*hbar^2*n/m = mine. Agree.
- p3-mu: page kB*T*log(exp(eF/(kB*T)) - 1) = mine. Agree.
- p3-num: page 0.5413 = mine (0.541325). Agree.
- p3-low: page choice 2 "exponentially small" = mine. Agree.
- p4-r: page (9*pi/4)^(2/3)*hbar^2/(G*mn^(8/3)*M^(1/3)) = mine. Agree.
- p4-rnum: page 11.0 km = mine (11.0275). Agree.
- p4-gr: page choice 1 "about 2.7 times" = mine (2.667). Agree.
- p4-x: page 0.00535 = mine (0.005346). Agree.
- Parts without a box, p1(a) (condensation), p2(a), p4(d): the page's solutions prove what I proved.

No disagreement. All 50 calcs entries pass (`pytest tests/calc -k "problem-set-9 and 8.08"`, run in the worktree); `npm run content:check` in the worktree: 0 errors, and the only warning for this page is the missing review file.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| W1 | warning | Problem 4(e), solution, Check step (line 786) | Wen's p. 88 only lists m_n = 939.565, m_p = 938.271, Δm = 1.3 MeV, m_e = 0.51 MeV in the margin and says nothing about the decay (rendered page read). The lesson degenerate-fermi-gas marks its explanation as "our addition" ("which the notes leave unsaid"). | "that Fermi energy is what forbids the decay of the neutrons, the effect the lesson describes (reading 2, p. 88)" | Attribute it as the lesson does: "the effect the lesson adds to the masses Wen lists on p. 88 (reading 2; the notes do not discuss the decay)". |
| I1 | info | Problem 1(d), sign of ν | Rendered PDF: "ξ diverges as ξ ∝ \|T_c − T\|^ν", no minus sign. | Asks for ν "as defined by this formula (so a length that diverges has ν < 0 ...)", box −0.5; the solution's Check gives the usual +½ of the other convention. | Fair, not a trap: the statement fixes the convention explicitly. Number boxes take no `mistakes`, so a reader typing 0.5 gets no specific hint; optional: label the box "ν as defined by MIT's formula (a decimal)". |
| I2 | info | Problem 1, split of MIT's (b) | MIT's (b): calculate the ξ dependence and find the minimizing ξ; (c) the exponent. | Our (b) ΔA(ξ), (c) the best ξ "(MIT's part (b), continued)", (d) "(MIT's part (c))"; the intro states the split and renumbering. | Correct and declared. Optional: begin our (b) with "(MIT's part (b).)". The reference "a condensate with ψ = ψ(+∞) everywhere in x > 0" is our choice (needed for a box); it could be marked "(our reference)". |
| I3 | info | Intro, notation paragraph (line 42) | The sheet writes 1/2m with no ħ. | "MIT's free energy is written in units with ħ = 1, and we keep them." | This is our reading of the sheet; add "(our reading)". |
| I4 | info | Problem 2(a) statement and its Check | (our own problem) | "for a smooth function φ that vanishes at ε = 0"; the Check then uses φ = 1 | The integration by parts needs only Φ(0) = 0, true by definition; φ(0) = 0 is not needed (and D ∝ ε^½, used in (b), is not smooth at 0; only the region near μ matters). Replace by "for a function φ that is smooth near μ and grows no faster than a power". |
| I5 | info | Problem 2(d) | (our numbers) | Box 0.00822, tolerance 1%, "From your result of part (b)"; Check: "exact 0.00836; the difference, about 2% of the shift, is the term of order T⁴" | The statement is clear that the expansion value is wanted. The exact 0.0083588 is 1.6% above (my numerics); the T⁴ term (π⁴/80·t⁴ = 0.000122) gives 0.008346, most but not all of the gap. Write "about 1.6%" and "mostly the term of order T⁴". Optional: a 2% tolerance would accept both 0.00822 and 0.00836 and still reject the sign and π²/6 mistakes. |
| I6 | info | Problem 3 statement | (our own problem) | k = (2π/L)(n_x, n_y) with area S | Add "S = L²" (the symbol entry for L already says so). |
| I7 | info | Solution formulas `cite="mit"` with "(our own solution)", and the Sommerfeld expansion in 2(a) `cite="mit"` "(our own problem)" | Not on the sheet | Labelled as ours | The convention accepted in the 8.07 and 8.08 Set 1–6 reviews. Every statement formula claimed as MIT's (A, a(T), U(x), the trial profile, ξ ∝ \|T_c − T\|^ν) is on the sheet, checked on the rendered PDF. No change. |
| I8 | info | Problem 3 and Set 7 | n/a | Set 7 (worktree ps-808-7) has bosons on a surface with the same constant 2D density of states | Different statistics and questions; not a duplicate. A one-line pointer to Set 7's Bose gas would be a useful link. |

## Citation checks (each opened on the rendered PDF)
- Reading 1 p. 74: A = ∫d³x[ħ²/2m \|∇ψ\|² + a(T)\|ψ\|² + (U₀/2)\|ψ\|⁴]; a > 0 no condensation, a < 0 condensation; U(1) symmetry ψ → e^{iθ}ψ. Correct for line 60 and line 102.
- Reading 1 "p. 75a": the PDF has two pages printed "75"; the minimization page (a + U₀\|ψ\|² = 0, A/V = A₀/V − a²/2U₀) comes first and is called 75a in the lesson bose-condensation-ginzburg-landau. Consistent; \|ψ\|² = −a/U₀ follows there. Line 108's "MIT's a/2 and b/4 are the notes' a and U₀/2 halved" is correct with a ↔ a, b ↔ U₀.
- Reading 2 p. 76: k = (2π/L)(n_x, n_y, n_z), ε_k = ħ²k²/2m. Correct.
- Reading 2 p. 79: k_F = (6π²n)^{1/3}, ε_F ∝ n^{2/3} (spinless). Correct for "n^{2/3} in three".
- Reading 2 p. 82: one-spin D(ε) = (√2 m^{3/2}/2π²ħ³) ε^{1/2} (V dropped in the box, a slip in the notes that does not matter here), with the note "spin ½, two fermions per state". "Twice the notes' one-spin D" is correct.
- Reading 2 p. 83: U₀ = (3/5)Nε_F; the N₀ and U₀ integrals, from which D(ε_F) = 3N/2ε_F follows. Correct.
- Reading 2 p. 84: n_spin½ = 2k_F³/6π², k_F = (3π²n)^{1/3}. Correct.
- Reading 2 p. 87: C = (π²/3)k_B²T D(μ) "works for any dimensions", I₂ = π²/3, C = (π²/2)k_B(k_BT/ε_F)N (3D), "why ∂μ/∂T ~ T", μ = μ₀ + #T². Correct for every use.
- Reading 2 p. 88: R_WD ∝ ħ²/(G m_e m_p^{5/3} M^{1/3}); "for neutron star we replace m_e by m_p", R_NS = (M⊙/M)^{1/3} 3.4 km; masses in the margin. Correct for the R_NS ∼ ħ²/(G m_p^{8/3} M^{1/3}) check; see W1 for the decay claim.
- Reading 3 p. 34: Σνᵢμᵢ = 0 boxed as the equilibrium condition for one reaction; the H₂ example puts internal energies into μ. Correct for the 4(d) Formula and hint.

## Arithmetic and answer checks
- Every number recomputed (review/py9/blind.py): 0.516 = 2/√15; 0.471 = √2/3 (tanh profile; w = √(2/m\|a\|) verified against (1/2m)ψ'' = (a/2)ψ + (b/2)\|ψ\|²ψ); 1.095 = √(6/5); 1.37 = √(15/8); 0.99794 (formula, and exact numerics at k_BT = 0.05ε_F); 1.443 = 1/ln 2; 3.68; 2.99 km; 11.03 km; 0.30 fm⁻³ (0.296); ħk_n = 0.43 m_nc; 4.13 km; 2.7 (2.667); 1.6795 fm⁻¹; 58.45 MeV; 59.74 MeV; k_p = 0.2937 fm⁻¹; ħck_p = 57.95 MeV; proton term 1.79 MeV; 0.00535; 187 ≈ 190; ultrarelativistic electrons 0.005347; no proton kinetic energy 0.00586 (9.6% more, "ten percent"); 58/0.511 = 113.
- Mistake formulas, each checked true of its hint: p1-amp 2a₀ (sets a/2 + (b/4)ρ = 0) and ρ instead of \|ψ\|; p1-da the strip alone −7a²ξ/60b (computed) and "no condensate in the strip" +a²ξ/4b; p1-xi ξ² and the bare unit length; p2-mu the sign and the D ∝ ε shift π²/6; p2-u μ held at ε_F gives 3π²/8 (computed: (π²/6)(3/2)D(ε_F)) and C·T = π²/2; p3-dos one spin; p3-ef one fermion per state; p3-mu the classical limit k_BT ln(ε_F/k_BT) = k_BT ln(nλ²/2) (verified) and ε_F; p4-r one neutron per wave vector (9π/2)^{2/3} and no factors.
- vars: every range keeps the answer and the mistakes finite and distinct (T < T_c in p1-amp; a < 0 in p1-da, p1-xi; ε_F/k_BT between 1/3 and 4 in p3-mu).
- Choice boxes: p3-low right at index 2, p4-gr at index 1; neither is the longest or the shortest; the wrong choices are plainly wrong.
- No hint gives a box result away (the p1-da hint gives the uniform −a²/4b of part (a); the p4-r hints give the form α/R² − γ/R and the minimum rule, not R).
- Points: 5+5+5+5 = 20, 4+4+4+3 = 15, 3+3+4+2+3 = 15, 5+3+2+3+7 = 20; 70 in all, as stated.

## Coverage and order
- MIT's four problems in MIT's order. Problem 1 is MIT's, with MIT's three parts in order (MIT's (b) split into our (b) and (c), declared). Problems 2–4 are bare Huang pointers (8.2, 8.3, 9.4) and are our own problems, marked in titles, opening lines and the intro; Huang was not opened, so resemblance cannot be checked (not a finding).
- `covers: [7.5, 8]` fits the date (April 6, 2005) and the topics; the prerequisites exist.

## Licensing
- No "rights reserved" or "courtesy" notice on prb9; no figures; no Huang; no OpenStax or LibreTexts. The wording is our own (MIT's sentences rewritten). CODATA values are cited via NIST.

## Notes
- Summary rule: the frontmatter `summary` names topics only (no ξ, ν, μ, R or ratio). Passes.
- No em dashes on the page (grep count 0).
- Symbols: page-scoped meanings exist for every letter with a general meaning (a, T, μ, N, A, E, m, n, k ...); content:check reports no symbol problem. Minor: the `m` meaning names Problems 1 and 3, while 4(e) also writes μ = mc² + ħ²k²/2m with a generic m; optionally add "or a nucleon in Problem 4(e)".
- Same-model caveat: writer and reviewer are both Opus; every answer was checked by an independent numerical route (quadrature, root finding, numerical minimization), not only by re-deriving it.

COUNTS: errors=0 warnings=1 info=8

## Resolution (2026-11-27, by the page author)

- W1: the Problem 4(e) check now says "the effect the lesson adds to the masses Wen lists on p. 88 (reading 2; the notes do not discuss the decay)".
- I4: the Sommerfeld expansion in Problem 2(a) is now stated for a function smooth near μ that grows no faster than a power.
- I5: the Problem 2(d) check now says "about 1.6% of the shift" and "mostly the term of order T⁴".
- Other info items left as they are.
- `status: reviewed`.
