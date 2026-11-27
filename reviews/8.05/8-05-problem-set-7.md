---
page: content/year-3/8.05/8-05-problem-set-7.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-7/ (read: sheet PDF, all 3 rendered pages, plus pdftotext)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-6/ (read: MIT8_05F13_Chap_06.pdf, pdftotext; p. 4 rendered for eq. (1.17))
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-2/ (read: MIT8_05F13_Chap_02.pdf, pdftotext; pp. 9 and 18 rendered for eqs. (2.17)/(2.18), (4.83), (4.86))
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not fetched; the rounded values 9.109e-31 kg, 1.0546e-34 J s and 13.6 eV are the standard CODATA 2018 values)
verdict: pass-with-notes
---

# Review: Problem Set 7 (8.05): a spin in a changing field, the Heisenberg picture, the virial theorem and coherent states

This was a blind review. I read only the stripped statements and MIT's sheet, solved every part, and wrote the answers below before I opened the full page, its calcs file or its symbols.

## Blind solve

### My answers (written before opening the full page)
Convention: H = -lam B.S (as in Problem 2), with lam, B0, omega > 0.
- P1(a): U(t) = exp(i beta S_z/hbar), beta(t) = lam*B0*sin(omega t)/omega.
- P1(b): state ~ |+> + e^{-i beta}|->, so theta = pi/2 and phi(t) = -lam*B0*sin(omega t)/omega.
- P1(c): P(S_x=-hbar/2) = sin^2( lam B0 sin(omega t)/(2 omega) ).
- P1(d): a full flip needs lam B0/omega >= pi, so the largest omega is lam B0/pi. With omega = lam B0/2: max beta = 2, P_max = sin^2(1) = 0.7081.
- P2: S_x(t) = S_x cos(lam B t) + S_y sin(lam B t); S_y(t) = S_y cos(lam B t) - S_x sin(lam B t); S_z(t) = S_z.
- P3(a): m d^2<x>/dt^2 = -<V'(x)>. This is Newton's law for <x> if and only if <V'(x)> = V'(<x>) for all states, i.e. V' is linear and V is at most quadratic in x (it holds approximately for packets that are narrow compared with the scale on which V' varies).
- P3(b): <x> = x0 + p0 t/m.
- P3(c): [H(t1),H(t2)] = i hbar (qE0/m)(sin w t1 - sin w t2) p, so c = sin(omega t1) - sin(omega t2); it is zero when the sines are equal. Ehrenfest still holds because dO_H/dt = (i/hbar)[H_H(t), O_H] holds for any H(t) (U obeys i hbar dU/dt = H U whether or not H commutes at different times), and the same commutators give the same equations with V' = qE0 sin(omega t).
- P3(d): <x> = x0 + (p0/m - qE0/(m omega)) t + (qE0/(m omega^2)) sin(omega t).
- P4(a): dOmega_H/dt = p_H^2/m - r_H . grad V(r_H) = p_H^2/m - r_H V'(r_H).
- P4(b): <Psi,0|dO_H/dt|Psi,0> = d/dt <Psi,t|O|Psi,t> = 0, since |Psi,t> = e^{-iEt/hbar}|Psi,0> and the phases cancel; equivalently <E|[H,O]|E> = 0.
- P4(c): r V' = -k V, so 0 = 2<T> + k<V>; E/<V> = 1 - k/2; for hydrogen <T> = 13.6 eV and <V> = -27.2 eV.
- P5(a): p_H = p - g t, x_H(t) = x + p t/m - g t^2/(2m).
- P5(b): <x_H(t)> = -g t^2/(2m) (a real Gaussian centred at 0 has <p> = 0).
- P5(c): lambda = hbar^2/(2 m^2 Delta^2), independent of g. For an electron with Delta = 1 nm the squared uncertainty doubles after t = m Delta^2/hbar = 8.64 fs.
- P6(a): E0 = hbar omega/2 - F^2/(2 m omega^2); <x> = F/(m omega^2).
- P6(b): alpha = x0/(sqrt2 d) = F/(sqrt2 m omega^2 d) = F/sqrt(2 m hbar omega^3).
- P7(a): shown, writing alpha = u + iv: u(a^dag-a) + iv(a^dag+a), with a^dag-a = -i sqrt2 p d/hbar and a^dag+a = sqrt2 x/d.
- P7(b): psi_alpha(x) = exp(i p0 x/hbar - i p0 x0/(2 hbar)) psi_0(x - x0), so eta(x) = p0 (x - x0/2)/hbar and |psi|^2 = exp(-(x-x0)^2/d^2)/(sqrt(pi) d).

### Comparison with the page (one line per answer id)
- p1-beta: the page has `lam*B0*sin(omega*t)/omega`, the same as mine. Agree.
- p1-theta: the page's choice is "θ = π/2 at all times", the same as mine. Agree.
- p1-phi: the page has `-lam*B0*sin(omega*t)/omega`, the same as mine. Agree.
- p1-prob: the page has `sin(lam*B0*sin(omega*t)/(2*omega))^2`, the same as mine. Agree.
- p1-wmax: the page has `lam*B0/pi`, the same as mine. Agree.
- p1-half: the page has 0.708 (1%); mine is sin²1 = 0.70807. Agree.
- p2-sx, p2-sy: the expressions are identical to mine. Agree.
- p2-sz: the page's choice is "S_z", the same as mine. Agree.
- p3-newton: the page's choice is "V = b x² + c x", the same as mine (at most quadratic). Agree.
- p3-free: the page has `x0 + p0*t/m`, the same as mine. Agree.
- p3-comm: the page has `sin(omega*t1) - sin(omega*t2)`, the same as mine. Agree.
- p3-driven: the page has `x0 + p0*t/m + q*E0*(sin(omega*t) - omega*t)/(m*omega^2)`. Mine is x0 + (p0/m − qE0/(mω))t + qE0 sin(ωt)/(mω²), which is identical once expanded. Agree.
- p4-form: the page's choice is "p²/m − r V′(r)", the same as mine. Agree.
- p4-ratio: the page has `1 - k/2`, the same as mine. Agree.
- p4-t, p4-v: the page has 13.6 eV and −27.2 eV, the same as mine. Agree.
- p5-xh: the page has `x + p*t/m - g*t^2/(2*m)`, the same as mine. Agree.
- p5-mean: the page has `-g*t^2/(2*m)`, the same as mine. Agree.
- p5-lam: the page has `hbar^2/(2*m^2*D^2)`, the same as mine. Agree.
- p5-g: the page's choice is "does not depend on g", the same as mine. Agree.
- p5-time: the page has 8.64 fs (1%); mine is 9.109e-31 × 1e-18 / 1.0546e-34 = 8.6375e-15 s. Agree.
- p6-e0: the page has `hbar*omega/2 - F^2/(2*m*omega^2)`, the same as mine. Agree.
- p6-x: the page has `F/(m*omega^2)`, the same as mine. Agree.
- p6-alpha: the page has `F/sqrt(2*m*hbar*omega^3)`, the same as mine. Agree.
- p7-eta: the page has `p0*(x - x0/2)/hbar`, the same as mine. Agree.
- p7-dens: the page has `exp(-(x - x0)^2/d^2)/(sqrt(pi)*d)`, the same as mine. Agree.

My answers and the page's agree on every box.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2 solution, Formula "Commutators of the spin operators", `at="eq. (2.18)"` | Chapter 2 notes, p. 9: the three written-out commutators [Sx,Sy] = iħSz, [Sy,Sz] = iħSx, [Sz,Sx] = iħSy are eq. (2.17). Eq. (2.18) is the compact form [Ŝi,Ŝj] = iħ ε_ijk Ŝk | Cites (2.18) for the three written-out commutators | Change to `at="eq. (2.17)"` (or "eqs. (2.17) and (2.18)"). |
| 2 | warning | Problem 1(d), second hint | (MIT gives no hint) | "The largest β is λB₀/ω, reached when sin ωt = 1. It must be at least π." | The hint states the condition λB₀/ω ≥ π, which is one rearrangement away from the boxed answer λB₀/π. Drop the last sentence, for example: "The largest β is λB₀/ω, reached when sin ωt = 1. How large must it be for sin²(β/2) to reach 1?" |
| 3 | warning | Problem 4(c), "Check the result" step, the "remark of ours" | The sheet says only that k is a positive integer; it makes no remark | "the proof is formal and holds for any k for which the potential has stationary states that can be normalised. The Coulomb potential, k = 1 with c negative, is the familiar case." | This overstates the range. Among positive integers k, only k = 1 with c < 0 has ordinary normalisable stationary states. For c > 0 there are none. For k = 2 the theorem itself gives E = (1 − k/2)⟨V⟩ = 0, which is impossible for a bound state, and where a bound state is put in by hand (a self-adjoint extension of a strong 1/r² attraction) the virial theorem is known to fail (the "anomaly" of the 1/r² potential). For k ≥ 3 the attractive potential has no ground state (fall to the centre). Suggested wording: "A remark of ours: the proof is formal; it needs a bound state on which [H, Ω] is well behaved. Among positive integers k that means k = 1 with c negative, the Coulomb potential: for c > 0 there are no bound states, and for k ≥ 2 an attractive c/rᵏ is too singular at the origin for the argument to apply." (The 1/r² anomaly is from my memory of the literature; I did not check it in a source this session.) |
| 4 | info | Problem 1 statement and intro | The sheet gives only the field B = B₀ cos(ωt) e_z | H(t) = −λ B·S, taken from MIT's Problem 2, with λ, B₀, ω > 0; the intro says so | I agree with this choice. It is the sheet's own Hamiltonian in Problem 2, and the notes and the lesson of Lecture 16 use the same form (−γB·S). The sign of λ changes only the sign of β and φ; P(t) and ω_max do not depend on it. No change needed. |
| 5 | info | `covers: [12, 13, 14, 16]` | The OCW calendar gives Lectures 12–16 for Set 7 | Lecture 15 (squeezed states) is left out, and the intro says so | I agree. No problem uses squeezed states, number–phase uncertainty or the Bogoliubov transformation. Problem 7 uses Lecture 14 material (the general coherent state, notes §4.4). No change needed. |
| 6 | info | Problem 7(a), Formula cited to `reading1` eq. (4.85) | Notes (4.85): αâ† − α*â = −(i/ħ)(p̂⟨x̂⟩ − ⟨p̂⟩x̂), with α defined by expectation values in (4.84). The notes introduce it with "A calculation in the problem set shows that" | (i/ħ)(p₀x̂ − x₀p̂), with the sheet's x₀ and p₀ | This is the same result (x₀ = ⟨x̂⟩, p₀ = ⟨p̂⟩). The page's note "The notes state this result and leave the calculation to this problem set" is accurate. No change needed. |

## Arithmetic and answer checks
- Every boxed answer agrees with my blind solution (above).
- Numbers recomputed:
  - sin²(1) = 0.70807, shown as 0.708.
  - t = mΔ²/ħ = 9.109e-31 × (1e-9)² / 1.0546e-34 = 8.6375e-15 s, shown as 8.64 fs.
  - With E = −13.6 eV and k = 1: ⟨V⟩ = 2E = −27.2 eV and ⟨T⟩ = 13.6 eV.
  - The points add up: 10+5+10+10+10+10+10 = 65, and each problem's parts sum to its points (P1 3+3+2+2, P3 4+1+3+2, P4 4+3+3, P5 3+3+4, P6 5+5, P7 4+6).
- I checked the solution steps line by line:
  - P1: the integral and the phases, the amplitude i sin(β/2) in 1(c), and the reasoning in 1(d) (the field keeps its sign for a quarter period).
  - P2: the equations of motion and the check that the commutator is preserved.
  - P3: the commutators ([p²,x] = −2iħp), the sign of c in 3(c), the integration in 3(d), the small-t check (−qE₀ωt³/(6m)) and the drift p₀ − qE₀/ω.
  - P4: both commutators in 4(a) and the classical check, both arguments in 4(b), and the hydrogen check ⟨T⟩ = ħ²/(2ma₀²), ⟨V⟩ = −ħ²/(ma₀²).
  - P5: ⟨x²⟩ = Δ²/2, ⟨p²⟩ = ħ²/(2Δ²), ⟨xp⟩ = iħ/2, and the minimum uncertainty ħ/2.
  - P6: completing the square, â_y = â − x₀√(mω/2ħ), and N = e^{−α²/2}.
  - P7: the algebra of the exponent, [X, Y] = ip₀x₀/ħ, the BCH step, the other ordering, and ⟨0|α⟩ = e^{−|α|²/2}. I checked the last one by doing the Gaussian integral myself: it gives e^{−x₀²/(4d²)} e^{−p₀²d²/(4ħ²)}.
  - Every solution ends with a check.
- Mistake hints: I checked all of them, and each is true of its wrong formula. For example:
  - p1-wmax `2*lam*B0/pi` gives max β = π/2 and P = 1/2;
  - the first p3-driven mistake has ⟨p⟩(0) = p₀ + qE₀/ω;
  - the p2-sy "both plus" mistake gives the commutator (cos² − sin²)iħS_z;
  - the p6-alpha sign hint uses ⟨x⟩ = √2 d α.
- Choice boxes: the right answers are at positions 2, 1, 3, 0 and 1. The right string is never the only longest one (in p3-newton and p4-form it ties in length with a wrong choice). No choice can be answered from units alone.
- Number boxes: the 1% tolerances reject the listed and obvious wrong values (0.5 and sin²2 = 0.83 for p1-half; −13.6 for p4-v; mΔ²/(√2ħ) = 6.1 fs for p5-time).
- p3-comm `vars` (info): with ω ∈ [0.5, 1.5], t₁ ∈ [0.1, 0.5] and t₂ ∈ [0.6, 1], the ranges of ωt₁ and ωt₂ overlap. So c can be 0 at a sample point, and there the sign-reversed mistake equals the answer. This is harmless in practice; ranges that do not overlap (e.g. t₂ ∈ [1.2, 1.8] with ω ∈ [0.5, 1]) would remove it.
- calcs: in the worktree, `pytest tests/calc -k 8-05-problem-set-7` gives 45 passed. `check-content.ts` in the worktree gives 0 errors; its only warning for this page is the missing review file.

## Citations
- Sheet citations: all `at=` printed page numbers match MIT's PDF. P1, P2 and P3(a) are on p. 1; P3(b)–(d), P4 and the P5 intro on p. 2; P5(a)–(c), P6 and P7 on p. 3. Eq. (1) of Problem 3(a) is correct.
- Chapter 6 notes (reading1), checked on the PDF. All of these are correct, including (1.17) and (3.30), which the writer flagged as uncertain:
  - (1.17): â and â† written with x̂ and p̂ (checked on the rendered p. 4).
  - (1.42): the ground state.
  - (2.46): U for Hamiltonians that commute.
  - (3.8): [x_H, p_H] = iħ.
  - (3.10): H_H = H_S(p_H, x_H; t).
  - (3.13): H_H = H_S when [H_S(t), H_S(t′)] = 0.
  - (3.15): the two pictures give equal expectation values.
  - (3.22): the general Heisenberg equation.
  - (3.23): iħ dA_H/dt = [A_H, H_H].
  - (3.30): dx/dt = p/m and dp/dt = −∂V/∂x (homework example 1, "You will show that").
  - (4.1): T_x₀ = e^{−ip̂x₀/ħ}.
  - (4.13): ⟨x|T_x₀|ψ⟩ = ψ(x − x₀).
  - (4.49): the BCH formula.
  - (4.54): the displaced ground state.
  - (4.77) and (4.78): a|α⟩ = α|α⟩ and the ordered form.
  - (4.85): the exponent.
- Chapter 2 notes (reading2):
  - (4.83): |n;+⟩ = cos(θ/2)|+⟩ + sin(θ/2)e^{iφ}|−⟩ (checked on the rendered p. 18): correct.
  - (4.86): |e₁;+⟩ = (|+⟩ + |−⟩)/√2 = |x;+⟩: correct.
  - (2.18) is the ε_ijk form; the three written-out commutators are (2.17). See row 1.

## Coverage and order
- All seven MIT problems are on the page, in MIT's order, with their parts in MIT's order. MIT's points (10, 5, 10, 10, 10, 10, 10) are kept, and the splits between parts are marked as the page's own.
- Every addition is marked as the page's own, both in the intro and in the parts: the second box of 1(d), the choice box of 3(a), the box of 3(c), the boxes of Problem 4, the electron in 5(c), the density in 7(b), and the split of Problem 7 into (a) and (b).
- Problem 3(c): the page points out that MIT's "≠ 0 for t₁ ≠ t₂" has exceptions (equal sines, e.g. t₂ = t₁ + 2π/ω). This is fair and correct.
- `lecture: 16`, covers [12, 13, 14, 16], and the prerequisites match the lessons the problems use (Lectures 4, 12, 13, 14 and 16). See row 5 for Lecture 15.

## Licensing
- The page uses no MIT figure and no "rights reserved" or "courtesy" material. I grepped the sheet and the texts of chapters 2 and 6 and found no such notices. No textbook is named or used. There is no OpenStax or LibreTexts material.
- The wording is the page's own. The closest paraphrase is one rewritten sentence in the Problem 5 intro ("The Schrödinger equation is hard to solve here, but the Heisenberg equations of motion for the operators are easy"), which is acceptable.
- MIT's hint in 6(b) is credited as "MIT's hint".

## Notes
- Symbols (pages: 8-05-problem-set-7): I checked the units.
  - S_x, S_y, S_z, S⃗, Ω and Ω_H in J·s are right: spin has the units of ħ, and r⃗·p⃗ is m × kg·m/s = J·s.
  - β, θ, φ and η are in rad; f and g in N; B₀ in T.
  - λ, E_0 and B are rightly left without a unit, because each has two meanings on the page.
  - Ω's meaning says "Not the density parameter", as the course note asks.
- The page has no em dashes, no stray control characters and no `## Summary`.
- I did not test read-aloud or the glossary in a browser.

COUNTS: errors=0 warnings=3 info=3

## Resolution (2026-11-27, by the page author)

- Warning 1: the Formula "Commutators of the spin operators" (and its calcs source) now cites ch. 2 eq. (2.17).
- Warning 2: Problem 1(d), second hint, now ends with a question ("How large must it be for sin²(β/2) to reach 1?") instead of giving the bound.
- Warning 3: the remark in Problem 4(c) now says the proof needs a bound state on which [H, Ω] is well behaved, which among positive whole numbers k means the Coulomb case k = 1 with c negative; c > 0 has no bound states and k ≥ 2 is too singular.
- Info items: kept as they are.

Status set to `reviewed`.
