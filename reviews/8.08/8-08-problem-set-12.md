---
page: content/year-4/8.08/8-08-problem-set-12.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb12/ (read: PDF rendered and pdftotext)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/35e4c4437626cad41f37a509d17fc8d0_transport.pdf (read: pp. 93-125 rendered)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/3d0cf2cb43a2b62f92089db14e8e2904_the_fermi_gas.pdf (read: p. 87 rendered)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not fetched; the page's constants match CODATA 2018 to the digits given)
verdict: needs-changes
---

# Review: Problem Set 12 (8.08), transport

Writer: Opus. Reviewer: Opus (same model, blind).

## Blind solve

My answers (written to this file before opening the full page; checked numerically in `review/ps12py/blind.py`):

- p1a: K = π² n τ k_B² T / (6m)  (from K = (1/6) n v_F (v_F τ) c_v, c_v = (π²/2) k_B (k_BT/ε_F), v_F²/ε_F = 2/m)
- p1b: L = (π²/6)(k_B/e)²
- p1c: 1.2215 (×10⁻⁸ W Ω/K²); the Sommerfeld value that measured metals give is 2.443 (factor 2 from the 1/6)
- p1d: K = LT/ρ = 135.06 W/(m K)  (with 2.443e-8: 270; measured Al about 237)
- p2a: n_a = 4.932e28 m⁻³, C = 3 n_a k_B = 2.0427 (×10⁶ J/(m³ K))
- p2b: λ = 6K/(C c_s) = 200.3 nm (1/3 form: 100.1 nm; with measured c of Si ≈ 0.71 J/(g K): ≈ 247 nm)
- p3a: n = 8.434 (×10²⁸ m⁻³)
- p3b: τ = m/(ρ e² n) = 2.475 (×10⁻¹⁴ s)
- p3c: v_F = ħ(3π²n)^{1/3}/m = 1.571e6 m/s, λ = 38.87 nm (Wen's v̄ = √(ε_F/m): 27.5 nm; ħn^{1/3}/m: 12.6 nm)
- p4a: n = 2.4463e25 m⁻³, σ = πd² = 4.301e-19 m², λ = 95.05 nm
- p4b: v̄ = √(2k_BT/m) = 415.0 m/s, ν = (1/6) n v̄ m λ = 7.736 (×10⁻⁶ Pa s) (real air 1.85e-5; the (1/3)·mean-speed route gives 1.75e-5)
- p4c: 1/η = 6πνa = 1.458 (×10⁻⁸ kg/s)
- p4d: D = k_BT η = 2.840e-13 m²/s; t = (1 mm)²/(6D) = 5.868 (×10⁵ s) ≈ 6.8 days (1D reading: 1.76e6 s)
- p5a: P^F(ω) = (Aτ/√π) e^{−ω²τ²/4}
- p5b: ωτ = 2√(ln 2) = 1.6651
- p5c: mγ = √π A τ / (2 k_BT)
- p5d: P^v(ω) = 2 k_BT γ e^{−ω²τ²/4} / (π m (γ² + ω²))
- p5e: ∫₀^∞ P^v dω = (1/(2πm²))∫ K(ω)/(γ²+ω²) dω = (1/(2m²γ))∫ φ(t) e^{−γ|t|} dt = (1/(m²γ)) K_γ = k_BT/m, exact for any τ (checked numerically at γτ = 0.21 and 1.4).

Comparison (my answer vs the page, one line per answer id):
- p1-k: page π²nτk_B²T/(6m) = mine (equal by value). Agree.
- p1-l: page (π²/6)(k_B/e)² = mine. Agree.
- p1-lnum: page 1.22 (2%), mine 1.2215. Agree.
- p1-al: page 135 (2%), mine 135.06. Agree.
- p2-c: page 2.04 (2%), mine 2.0427. Agree.
- p2-lam: page 200 (3%), mine 200.3. Agree.
- p3-n: page 8.43 (1%), mine 8.434. Agree.
- p3-tau: page 2.47 (2%), mine 2.475. Agree.
- p3-lam: page 38.9 (2%), mine 38.87. Agree.
- p4-lam: page 95.0 (2%), mine 95.05. Agree.
- p4-nu: page 7.74 (2%), mine 7.736. Agree.
- p4-fric: page 1.46 (3%), mine 1.458. Agree.
- p4-t: page 5.87 (3%), mine 5.868. Agree.
- p5-pf: page A*tau/sqrt(pi)*exp(-omega^2*tau^2/4) = mine (also checked against a numerical Fourier integral). Agree.
- p5-half: page 1.665 (1%), mine 1.6651. Agree.
- p5-fric: page sqrt(pi)*A*tau/(2*kB*T) = mine. Agree.
- p5-pv: page 2kBTγe^{−ω²τ²/4}/(πm(γ²+ω²)) = mine (checked by value). Agree.
- p5 (e), a show-part: the page's derivation is the same as mine; the identity was checked numerically. Agree.

No disagreement on any answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | P1(a) solution, Step "Check" (line 92) | (own problem) | "m⁻³ × s × J² K⁻² × K/kg $=$ J²/(m³ kg K), and J $=$ kg m²/s², so this is J/(m s K)" | The factor s is dropped in the middle: nτk_B²T/m has units J² s/(m³ kg K), which is J/(m s K). As written, J²/(m³ kg K) = J/(m s² K), not W/(m K). Write "$=$ J² s/(m³ kg K)". |
| 2 | warning | P1 as a whole (statement, (b) to (d)) | Problem 1 is a Huang pointer; the problem is ours | Uses the notes' K = (1/6) n v̄ λ c_v, so the box for L accepts 1.22×10⁻⁸ and rejects 2.44×10⁻⁸ (the Sommerfeld value; measured metals give about 2.3); K(Al) = 135 against 237 measured. The factor 2 is flagged in a mistake hint and in three Checks | Judgment: correct within its stated model and honestly flagged, so not an error. But a problem titled "the Wiedemann–Franz law" whose box rejects the law's accepted number teaches the wrong number, while Problems 2 and 4 already practise the notes' 1/6. Preferred fix: in P1 only, use K = (1/3) n v̄ λ c_v, written inline as "(standard kinetic theory with the angle average done in full, stated by us; the notes' 1/6, reading 1 p. 104, gives half)"; then (a) π²nτk_B²T/(3m), (b) (π²/3)(k_B/e)², (c) 2.44, (d) 270 W/(m K) (14% above 237), and the present 1/6 answers become the listed mistakes; update calcs p1-k, p1-l, p1-lnum, p1-al and the Checks. Minimum fix if the 1/6 is kept: say in the statement of (b) or (c), not only in solutions, that with the notes' factor 1/6 this model's L comes out half the standard value. |
| 3 | warning | P4 statement Formula and (b) hint | Wen p. 102 box: ν = (1/6) n v̄ mλ "= √(2mk_BT)/(3σ)" (repeated on p. 116). The closed form is twice the (1/6) form: a slip (the same one as p. 104's K = (c_v/3σ)√(2k_BT/m)) | Cites p. 102 for ν = (1/6) n v̄ mλ; the hint gives m v̄/6σ; the slip is not mentioned | Add after the Formula (Writing rule 4, course note on Wen's slips): "(The notes' box on p. 102 writes the result as √(2mk_BT)/(3σ); with ν = (1/6) n v̄ mλ and nλ = 1/σ it is √(2mk_BT)/(6σ).)" A reader who uses the box gets 15.5, which the 2% box rejects. The lesson viscosity-conduction-boltzmann-equation already notes this slip. |
| 4 | warning | P4 statement Formula `at="pp. 93 and 102"` | v̄ = √(2k_BT/m) is written on p. 104 ("Using v̄ = √(2k_BT/m)"), not on p. 93 or p. 102 | Cites pp. 93 and 102 for all three relations | `at="pp. 93, 102 and 104"` (or "λ: p. 93; ν: p. 102; v̄: p. 104"). |
| 5 | warning | P3(c) Check, against the intro's "the solutions say what another reasonable route would give" | Wen p. 106: v̄ ≈ √(E_F/m) ≈ ħn^{1/3}/m (ticked as right) | The Check gives only the classical speed (a wrong route) as the alternative; the notes' own rough Fermi speed is not mentioned | Add: "The notes' own rough speed, √(ε_F/m) (reading 1, p. 106), is v_F/√2 and gives 27.5 nm; ħn^{1/3}/m gives 12.6 nm: the same order, which is all an estimate claims." (with calcs entries). Otherwise a reader who follows p. 106 literally is rejected by the 2% box without explanation. |
| 6 | warning | Overlap with 8.08 Set 11 (other worktree) | MIT's Set 12 P4(a): mean free path of air at 300 K and 1 atm, then a transport coefficient | Set 11 P4 (our own problem): mean free path of krypton at 300 K and 101 325 Pa with λ = 1/(σn), σ = 4πr², then K from the notes' (1/6) formula | Not a fault of this page (P4 is MIT's and stays). The course note says our problems must not duplicate a later MIT sheet, so fix it in Set 11: change Set 11 P4(a) so it does not repeat the 1-atm mean-free-path estimate (e.g. ask first for the pressure at which λ equals the gap, or give λ), or record the overlap as accepted in Set 11's review. |
| 7 | warning | data/symbols.json, ρ meaning for this page | n/a | "The electrical resistivity of copper." | ρ is also aluminium's resistivity in P1(d) ($K = LT/\rho$, line 171). Change it to "The electrical resistivity: of aluminium (Problem 1(d)) and of copper (Problem 3)." |
| 8 | info | Solution Formulas `cite="mit" at="… (our own solution)"` | Not on MIT's sheet | Labelled as ours | The convention accepted in the 8.07 and 8.08 Sets 1–9 reviews. The one statement formula cited `mit` (φ(t) = Ae^{−t²/τ²}) is on the sheet (checked on the rendered PDF). No change. |
| 9 | info | P5 parts (a) and (d): "(MIT's part (b), …)" | MIT's "(a)" and "(b)" are its two changes to the textbook problem, not parts | Calls them parts | Optional: "(MIT's second change, for the force)" and "for the velocity". |
| 10 | info | P3(c) Check: "as the notes point out by crossing out the classical speed" | p. 106 marks √(k_BT/m) and σ ∝ T^{−1/2} with an ✗; they are not crossed out | "crossing out" | Optional: "by marking the classical speed wrong (✗)". |
| 11 | info | P2(a) Check | (own check) | Debye temperature 240 K from MIT's c_s, so equipartition is fair | True with MIT's numbers. Optional: say that silicon's measured Debye temperature is about 645 K, so at 300 K its real C is about 80% of 3n_ak_B (about 1.65×10⁶ J/(m³ K)), which would give λ ≈ 250 nm. |
| 12 | info | Measured values (Lorenz numbers ≈ 2.3 for Cu, Ag, Au; Al 237 W/(m K); air 1.85×10⁻⁵ Pa s) | n/a | "(our value)"; calcs `kind: fact` with source `cite: mit … (our own value)` | The values are right (standard tables: Cu 2.23–2.33, Ag 2.31–2.37, Au 2.35–2.40 ×10⁻⁸ W Ω/K² at 0–100 °C; Al 237 W/(m K) near 300 K; air 1.85×10⁻⁵ Pa s at 300 K). Earlier sets accepted "our value". Optional: give them a reference key (an open data source) instead of `cite: mit`. |
| 13 | info | P3 vs the lesson's worked example "Electrons in copper" | MIT's Problem 3 | Near-duplicate numbers (39 nm, 170 spacings) | Acknowledged on the page; unavoidable, since P3 is MIT's. No change. |

## Arithmetic and answer checks
- Every number recomputed in `review/ps12py/blind.py` and `review/ps12py/extra.py`: L = 1.2215e-8 (Sommerfeld 2.443e-8); K(Al) = 135.06 (270.1 with 1/3); 237/135 = 1.755; 270/237 = 1.14; n_a = 4.932e28, C = 2.0427e6, λ_ph = 200.3 nm (100.1 with 1/3), Debye 240.2 K, n_a^{-1/3} = 0.273 nm, ratio 734; Cu n = 8.434e28, τ = 2.475e-14 s, k_F = 1.357e10 m⁻¹, v_F = 1.571e6 m/s, E_F = 7.01 eV, λ = 38.87 nm, n^{-1/3} = 0.228 nm, ratio 170, classical √(3k_BT/m) = 1.17e5 m/s, 2.89 nm, ratio 13.4; air n = 2.446e25, σ = 4.301e-19, λ = 95.05 nm, /√2 = 67.2, n^{-1/3} = 3.44 nm, ratio 27.6, v̄ = 415.0, ν = 7.736e-6, measured/estimate = 2.39, 6πaν = 1.458e-8 (3.49e-8 with measured ν), D = 2.840e-13, t = 5.868e5 s = 6.79 days, 1D 1.76e6 s, Mη = 0.287 s for density 1000 kg/m³ (terminal speed about 2.8 m/s, so "falls far faster than it diffuses" is right); P5: half power at 2√ln2 = 1.6651, e^{−4} = 0.018, e^{γ²τ²/4}erfc(γτ/2) = 0.946 at γτ = 0.1 (5.4% smaller), ∫₀^∞ P^F dω = A, the equipartition identity exact (numerical). All of the page's numbers agree.
- `calc:test -k 8-08-problem-set-12` in the worktree: 64 passed.
- Answer boxes: every `expr` and `value` equals its solution's result; the `vars` ranges keep every answer and mistake finite and different (formula equality is tested at 1e-6 relative; the closest mistake, the P5(d) white-noise form, differs by the factor e^{−ω²τ²/4}, at least 0.56% at the corner ωτ = 0.15). The numeric tolerances reject each alternative route named on the page (2.44 vs 1.22; 270 vs 135; 100 vs 200; 17.6 vs 5.87).
- Mistake hints checked by algebra: p1-k classical (c_v = 3k_B/2, v̄² = 3k_BT/m) gives 3nτk_B²T/(4m) ✓; the 1/3 form gives π²nτk_B²T/(3m) ✓; p1-l classical gives 3k_B²/(4e²) ✓; p5-pf "transform not divided by π" ✓ and "exponent /2" ✓; p5-fric "whole axis" gives twice ✓; p5-pv white noise ✓, and the "half" spectrum does belong to a friction twice as large ✓. All hints are true.
- Hints: none hands over a boxed result. The P4(b) hint gives ν = m v̄/6σ (a formula, not the number); the P5(e) hint gives the standard integral for a show-part. Acceptable.
- Points: 15+15+15+20+20 = 85; part splits add up (5+4+3+3, 6+9, 4+5+6, 5+5+5+5, 5+3+4+5+3).
- The P3(b) unit check (kg m²/(Ω C²) = s) is right; the P1(a) unit line is wrong (finding 1).

## Coverage and order
- MIT's five problems, in MIT's order. Problem 1 (a Huang 7.7 pointer) becomes our own problem, marked in its title and the intro; Huang is not reconstructed. Problems 2–4 are MIT's, rewritten, with every part kept; MIT's 4(a) is split into two boxes, and the page says so. Problem 5 keeps both of MIT's changes as printed on the rendered PDF (φ(t) = Ae^{−t²/τ²}, "all frequencies"); the setup and parts (b), (c) and (e) are marked as ours.
- `covers: [9]` (Chapter IX, transport) fits the sheet (Apr 27, 2005).
- Wen citations checked on the rendered transport and Fermi-gas PDFs (printed page numbers): p. 87 C = (π²/2)k_B(k_BT/ε_F)N ✓; p. 93 λ = 1/(σn), σ = 4πr² ✓; p. 102 ν = (1/6) n v̄ mλ ✓ (box slip: finding 3); p. 104 K = (1/6) n v̄ λ c_v ✓; p. 106 σ = e²nτ/m and v̄ ≈ √(E_F/m) ✓; p. 115 D = ηk_BT ✓; p. 116 F = 6πaνu, valid for a ≫ λ, ⟨x²⟩ = 6Dt ✓; p. 117 Langevin equation ✓; p. 119 mγ = K_γ/k_BT and the two friction laws (disk in a gas, hydrodynamic) ✓; p. 121 P = (1/π)∫G e^{iωt} dt ✓; p. 122 white noise ✓; p. 124 S/π = K(ω)/(πm²(γ²+ω²)) ✓; p. 125 white-noise P^v = 2k_BTγ/(πm(γ²+ω²)) and its equipartition check ✓. (The transport PDF skips one printed number between p. 106 and p. 117; every `at=` uses printed numbers and is right.)

## Licensing
- No figures. MIT's sheet has no "rights reserved" or "courtesy" notice (checked on the PDF). Huang not used. No OpenStax or LibreTexts. The wording is the page's own; MIT's problem text is rewritten. No em dashes (0 found).

## Notes
- The summary names topics only, no results. ✓
- Symbols: every letter the page uses in maths has a page-scoped meaning (a, T, n, λ, τ, A, G, K, L, M, D, C, P, u, s, x, e, i, d, m, F, v, ρ, ρ_m, σ, ν, η, γ, ω, φ, ε, ε_F, k_F, v_F, c_v, c_s, n_a, k_B, N_A); I saw no fallback to a cosmology meaning (a = ball radius, T, λ, τ and n are all scoped). No meaning gives an answer (L's meaning is only its definition). Only ρ is incomplete (finding 7). I did not run content:check.
- Overlap with Sets 1–11: Set 11 P4 (krypton) repeats the 1-atm mean-free-path estimate of this sheet's MIT P4(a) (finding 6). Set 11's effusion, sound, Boltzmann-equation mobility and solar photon random walk are not duplicated here. P1 uses Set 9's Sommerfeld result without repeating it.

COUNTS: errors=1 warnings=6 info=6

## Resolution (2026-11-27, by the page author)

- Before this review the set's own Problem 1 (effusion) was replaced by the Wiedemann–Franz problem, because Set 11 has the same effusion problem and comes first in the course.
- E1: the unit chain in the P1(a) check reads J² s/(m³ kg K).
- W2: P1 now uses the standard K = (1/3) n v̄ λ c_v, stated inline with the notes' 1/6 named; answers π²nτk_B²T/(3m), L = (π²/3)(k_B/e)² = 2.44 × 10⁻⁸ W Ω/K² and 270 W/(m K) for aluminium; the 1/6 results are listed mistakes with true hints. Problems 2 and 4 keep the notes' 1/6.
- W3: after the P4 viscosity Formula the page notes the factor 3σ in the notes' box on p. 102 and gives 6σ.
- W4: the P4 Formula cites pp. 93, 102 and 104.
- W5: the P3(c) check gives the notes' own speeds (27.5 nm and 12.6 nm), with calcs entries; the classical speed is "marked with a cross" in the notes.
- W6: the krypton mean free path in Set 11 Problem 4 uses the same estimate as MIT's Problem 4(a) here, for another gas and towards another question (heat through a window); accepted as practice of the same method, not changed.
- W7: the page-scoped meaning of ρ names aluminium and copper.
- `status: reviewed`.
