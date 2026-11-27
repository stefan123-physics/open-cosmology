---
page: content/year-4/8.08/8-08-problem-set-10.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb10/ (read: txt/prb10.txt; four bare Huang pointers, no notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/3d0cf2cb43a2b62f92089db14e8e2904_the_fermi_gas.pdf (read: rendered pp. 82, 83, 84, 85, 87, 88, 89, 90, 91, 92)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/af9b9ca23f35f9d59214c5ffc9651170_the_bose_gas.pdf (read: rendered p. 54)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not opened; constants checked against known CODATA 2018 values)
verdict: pass-with-notes
---

# Review: Problem Set 10 (8.08): electron spins, metal heat capacity, trapped fermions, p–n barrier

Writer: Opus. Reviewer: Opus (same model, blind).

Order followed: I read only the stripped statements and MIT's sheet, solved every part, checked each one numerically (review/rv10/blind.py) and wrote the answers into this file. Only after that did I open the full page, the calcs file and the symbols (checks in review/rv10/compare.py).

## Blind solve

### My answers (written before opening the page; checked with review/rv10/blind.py)
- p1a: M = mu_B ∫ D [n_F(e - mu_B B) - n_F(e + mu_B B)] de ≈ 2 mu_B^2 B ∫ D (-dn_F/de) de (mu shifts only at order B^2); T = 0: -dn_F/de = delta(e - e_F), chi = 2 mu_B^2 D(e_F). Numerical check (full M(B) at small B vs formula) agrees to 1e-8 at T/T_F = 0.05, 0.5, 5, 50.
- p1b: chi = N mu_B^2/(k_B T) (Curie). Numerically chi*T/N -> 0.9992 at T = 50 T_F.
- p1c: mu_B B_p = 2^(-1/3) e_F, B_p = e_F/(2^(1/3) mu_B).
- p1d: B_p = 4.443e4 T -> 4.443 (units 1e4 T).
- p2a: T_F = 24 583 K (e_F = 2.118 eV).
- p2b: T* = sqrt(5 T_D^3/(24 pi^2 T_F)).
- p2c: T* = 0.8044 K.
- p2d: gamma = (pi^2/2) N_A k_B/T_F = 1.669 mJ mol^-1 K^-2.
- p3a: D(e) = e^2/(2 (hbar w)^3) (state count (E+1)(E+2)(E+3)/6 -> E^3/6 checked).
- p3b: e_F = (6N)^(1/3) hbar w.
- p3c: E_0 = (3/4) N e_F.
- p3d: T_F = 872.1 nK.
- p3e: C = pi^2 N k_B T/T_F (numerical Fermi-Dirac sum for N = 1e5 at T = 0.01 T_F: 9863.8 vs 9869.6).
- p3f: R_F = sqrt(2 e_F/(m w^2)) = 30.32 um.
- p4a: e_B = k_B T ln(N_D N_A/n_i^2).
- p4b: e_B = 0.7738 eV.
- p4c: ratio = e^(eV/k_BT) = 2290.1.
- p4d: the barrier decreases as T rises (e_B = Delta - k_BT ln(N_c N_v/(N_D N_A)), with N_cN_v ∝ T^3 > N_D N_A in the classical regime; numerically 0.843, 0.774, 0.702, 0.629 eV at 250, 300, 350, 400 K with Delta = 1.12 eV).

### Comparison (one line per answer id)
- p1a (show): the page's derivation and its T = 0 limit agree with mine. Agree.
- p1-curie: page N*muB^2/(kB*T); mine N mu_B^2/(k_B T). Agree.
- p1-bp: page eF/(2^(1/3)*muB); mine e_F/(2^(1/3) mu_B). Agree.
- p1-bpnum: page 4.44 (1%); mine 4.443. Agree.
- p2-tf: page 24600 (1%); mine 24 583. Agree (0.07%).
- p2-tstar: page sqrt(5*TD^3/(24*pi^2*TF)); mine identical. Agree.
- p2-tstarnum: page 0.804; mine 0.8044. Agree.
- p2-gamma: page 1.67; mine 1.669. Agree.
- p3-dos: page eps^2/(2*(hbar*w)^3); mine identical. Agree.
- p3-ef: page (6*N)^(1/3)*hbar*w; mine identical. Agree.
- p3-e0: page 3/4*N*eF; mine identical. Agree.
- p3-tf: page 872; mine 872.1. Agree.
- p3-c: page pi^2*N*kB*T/TF; mine identical (numerical Fermi–Dirac check 0.06% off at T = 0.01 T_F). Agree.
- p3-rf: page 30.3; mine 30.32. Agree.
- p4-eb: page kB*T*log(ND*NA/ni^2); mine identical. Agree.
- p4-ebnum: page 0.774; mine 0.7738. Agree.
- p4-ratio: page 2290; mine 2290.1. Agree.
- p4-temp: page choice 1 ("falls as T rises, from close to Δ when the crystal is cold"); mine: decreases. Agree.

No disagreement. `npm run calc:test -- -k 8-08-problem-set-10` in the page's worktree: 60 passed. `npm run content:check`: 0 errors (the only warning for this page is "no review file yet").

## Differences from the MIT source
MIT's sheet has only four textbook pointers (Huang 10.10, 9.3(a–c), 9.5, 9.8(a–d, f)). All four problems on the page are ours, and each is marked "(our own problem)" in its title and in the intro, as the course note requires. I did not open Huang. The table therefore lists findings against Wen's notes, the lessons and the house rules.

| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| W1 | warning | Problem 4 statement: "$N_c$ a constant at fixed $T$ (twice $\lambda^{-3}$, for two spin states, reading 1, p. 90)" | p. 90 gives the classical $n_e \approx \lambda^{-3}e^{-\beta\Delta/2}$ (written "$\lambda^3$", a slip) with no spin factor; the factor 2 for spin is on p. 91 ($n_e = n_h = 2e^{-\Delta/2k_BT}(\sqrt{m_cm_v}\,k_BT/2\pi\hbar^2)^{3/2}$) | "twice $\lambda^{-3}$ … p. 90" | Cite "reading 1, pp. 90–91" (or p. 91). Optionally add "(p. 90 writes $\lambda^3$ for $\lambda^{-3}$ and leaves out the spin factor)" (Writing rule 4). |
| W2 | warning | data/symbols.json, page meaning of `C` | The page uses $C$ in Problem 2 too ("$C$ a heat capacity" in the notation paragraph, "$C/T$ against $T^2$" in the 2(b) Check, "the law $C \propto T$" in the 2(d) Check) | Meaning: "A heat capacity: that of the trapped cloud in Problem 3." | Change it to "A heat capacity: of the metal in Problem 2, of the trapped cloud in Problem 3." (this gives no answer away). |
| W3 | warning | Frontmatter `order: 90` | Set 9 is also `lecture: 8`, `order: 90`. `lib/content.ts` line 159 then sorts by title, and "Problem Set 10: …" sorts before "Problem Set 9: …". Checked: the course's page list reads degenerate-fermi-gas, semiconductors-and-diodes, 8-08-problem-set-10, 8-08-problem-set-9 | Set 10 comes before Set 9 on the course page and in previous/next | Set `order: 91`. (8.07 Sets 9 and 10, both lecture 14, have the same tie; that is outside this review.) |
| I1 | info | Ten Formulas `cite="mit"` at "Problem N, p. 1 (our own problem/solution)" | Not on MIT's sheet | Labelled as ours | This is the convention accepted in the reviews of 8.07 and 8.08 Sets 1–9. No change. |
| I2 | info | 1(a) Check: "the Pauli susceptibility does not depend on temperature" | Corrections are of order $(T/T_F)^2$ (my numerics: 1.4969 vs 1.5 at $T = 0.05\,T_F$) | "does not depend" | Optional: "hardly depends (corrections of order $(T/T_F)^2$)". The sentence before it already limits the claim to $k_BT \ll \epsilon_F$. |
| I3 | info | 4(d) choices | Lengths are 55, 58, 58 and 57 characters; the right one (index 1) ties for longest with choice 2 | | A tie, not the single longest. No change needed. |
| I4 | info | Problem 2 statement, $C_{\text{el}}$ formula cited to reading 1, p. 87 | Wen p. 87 writes $C = \frac{\pi^2}{3}k_B^2T\,D(\mu)$ with $D(\mu) = 3N/2\mu$. That counts both spins, though his $D$ on p. 82 is for one spin | "where here $D$ counts **both** spin states" | Correct and well handled. The page writes $D(\epsilon_F)$ where Wen writes $D(\mu)$; at leading order they are the same. |
| I5 | info | Debye formula cited to reading 2, p. 54 | p. 54 has $U/N = 3k_BT\,\mathcal D(u)$ and $\mathcal D \to \pi^4/5u^3$ for $T \ll T_D$; the $12\pi^4/5$ form is one step on from these | "(the limit … written as the lesson writes it)" | Labelled correctly; checked on the rendered page. |
| I6 | info | Problem 4 statement: "$n_en_h = n_i^2$ holds whatever the doping (reading 1, p. 91)" | p. 91 has the general mass-action box and $\lambda_e^3n_e\lambda_h^3n_h = e^{-\Delta/k_BT}$; doping is not discussed there | | This follows directly from the mass-action law. Fine. |
| I7 | info | calcs `p2-gamma` | The formula multiplies by 1000 and labels the result `J/K**2` to mean mJ mol⁻¹ K⁻² | | The number is correct (1.669); the unit label is a workaround for the harness. No change needed. |

## Arithmetic and answer checks
- Every number recomputed (review/rv10/blind.py, compare.py): $B_p = 4.443\times10^4$ T; $k_F = 7.455\times10^9$ m⁻¹, $\epsilon_F = 3.393\times10^{-19}$ J $= 2.118$ eV, $T_F = 24\,583$ K, $T_F/300 = 81.9$ ("less than an eightieth" is true); $T^* = 0.8044$ K ($C_{el}/C_{ph} = 1$ there); $\gamma = 1.669$ mJ mol⁻¹ K⁻², $\gamma\cdot300 = 0.501$ J mol⁻¹ K⁻¹ = 2.0 % of 24.94; $\hbar\omega/k_B = 4.799$ nK, $(6\times10^6)^{1/3} = 181.7$, $T_F = 872.1$ nK, $\epsilon_F = 1.204\times10^{-29}$ J, $R_F = 30.32$ μm, $\sqrt{\hbar/m\omega} = 1.590$ μm, ratio 19.06; $3/\pi^2 = 0.304$; $\ln10^{13} = 29.934$, $\epsilon_B = 0.7738$ eV; $x = 7.736$, ratio $= e^x = 2290.1$; $k_BT/e = 25.85$ mV.
- Physics remarks in the solutions, checked:
  - The weak-field linear law reaches $N$ at $\mu_BB = \frac23\epsilon_F$, and the exact $T = 0$ magnetization lies below it (computed: 0.583 vs 0.600 at $h = 0.4$, 0.939 vs 1.05 at 0.7, reaching 1 at 0.7937). True.
  - The mean energy $\frac{p+1}{p+2}\epsilon_F$ and the half-kinetic, half-potential split in the trap are true. The split holds level by level, including for energies measured from the zero point.
  - Landau diamagnetism is smaller than the Pauli term (one third of it). True.
  - The model values are right: sodium's free-electron $\epsilon_F = 3.24$ eV; potassium's $n = 1.40\times10^{28}$ m⁻³ and $T_D = 91$ K; the $^{40}$K mass, 39.964 u $= 6.636\times10^{-26}$ kg.
- 4(d): $d\epsilon_B/dT = -k_B[\ln(AT^3/N_DN_A) + 3] < 0$ verified; numerically 0.843, 0.774, 0.702 and 0.629 eV at 250, 300, 350 and 400 K with $\Delta = 1.12$ eV.
- Mistakes: each hint is true of its formula, verified by algebra.
  - p1-curie: $2N\ldots$ comes from $\int Dn_F = N$; $N/3$ is Langevin's result.
  - p1-bp: $\epsilon_F/\mu_B$ is the raised band's bottom reaching a fixed $\mu = \epsilon_F$; $\epsilon_F/2\mu_B$ sets $2\mu_BB = \epsilon_F$.
  - p2-tstar: 48 comes from the one-spin $D$, which halves $C_{el}$; 6 comes from the energy coefficient $3\pi^4/5$.
  - p3-dos: $\epsilon^3/6$ is the count; $\epsilon^2/(\hbar\omega)^3$ is the derivative of $(\epsilon/\hbar\omega)^3/3$.
  - p3-ef: $3N$ puts two atoms per level.
  - p3-e0: $\frac35$ is the box value.
  - p3-c: $\pi^2/2$ is the box value; $\pi^2/3$ comes from $D = N/\epsilon_F$, the average.
  - p4-eb: $\ln(N_D/n_i)$ counts one side only; the other mistake has the sign inverted.
- Tolerances: 1 % on every number box rejects the nearest mistakes (p1d 5.60 and 2.80; p2c 0.569 and 1.609; p2d one-spin 0.835; p3d two-per-level 692) and accepts 3 significant figures.
- `vars` ranges: every formula and every mistake is finite over the ranges, and they all differ (p4-eb: $N_DN_A/n_i^2 \ge 25$, so the log is positive).
- Hints: none gives a box's result. The 1(c) hints give $\mu = \mu_BB$ at emptying and the $x^{3/2}$ scaling, which leaves the key step to the reader.
- Calcs: the `shown:` strings match the page; `calc:test` 60 passed.

## Coverage and order
- Problems 1–4 follow MIT's numbering. All four are ours (MIT's sheet has no text), and so are the points (20/15/20/15 = 70), as "How to answer" says.
- The topics come from Wen's Chapter VIII (the set is dated April 13, 2005). `covers: [8]`, and every prerequisite exists.
- Nothing repeats Sets 1–9 (Set 5: semiconductor densities; Set 8: trapped Bose gas; Set 9: Sommerfeld expansion, 2D gas, neutron star) or the remaining MIT sheets 11–12, which I read (kinetic theory, phonon and Drude mean free paths, Brownian motion).
- Problem 3 differs from the ideal-fermi-gas worked example, which is a uniform K-40 gas, not a harmonic trap. The 1(b) Check repeats the degenerate-fermi-gas lesson's Pauli/Curie ratio, but only as a check.

## Licensing
- MIT's sheet: no "rights reserved", "courtesy" or excluded material, and no figure. Huang was not used. Wen's notes are rewritten, with no copied text. Constants come from CODATA (NIST). No OpenStax or LibreTexts.

## Notes
- Wen citations checked on the rendered pages:
  - p. 82: one-spin $D$.
  - p. 83: $U_0 = \frac35N\epsilon_F$; "$\epsilon_F$ ~ a few eV".
  - p. 84: $k_F = (3\pi^2n)^{1/3}$.
  - p. 85: $M = \mu_B(N_\uparrow - N_\downarrow)$, bands shifted by $\mp\mu_BB$, $\chi = 2\mu_B^2D(\epsilon_F)$.
  - p. 87: $C = \frac{\pi^2}{3}k_B^2TD$, with $\frac{\pi^2}{2}$ in 3D.
  - pp. 90–91: see W1.
  - p. 91: mass action; $n_i \propto T^{3/2}e^{-\Delta/2k_BT}$.
  - p. 92: the diode, a common $\mu$, the barrier drawn, $I \sim Ve^{-\epsilon_B/k_BT}$.
  - Chapter VII, p. 54: the Debye function.
- The printed page numbers in the Fermi-gas PDF skip: PDF page 13 is p. 88, page 14 is an unnumbered sketch for a problem, and page 15 is p. 89.
- Lesson claims checked:
  - degenerate-fermi-gas states $\chi = \frac32N\mu_B^2/\epsilon_F$ and makes the Curie comparison, marked as the page's addition.
  - photon-and-phonon-gases writes $C_V = \frac{12\pi^4}{5}Nk_B(T/T_D)^3$.
  - semiconductors-and-diodes uses $\Delta = 1.12$ eV in its example and adds $I = I_s(e^{eV/k_BT} - 1)$.
- Symbols: I checked every page-scoped meaning. None gives an answer ($B_p$, $R_F$, $E_0$, $T_F$ and $\epsilon_B$ are only defined). Only $\pi$, $\hbar$, $m_e$ and the operators fall back to a general meaning. T, N, n, k, D, C, M, V, B, ω, μ, λ, β, χ, γ, Δ and ε all have page meanings; only C's is inaccurate (W2).
- Summary rule: the frontmatter `summary` names topics only, and there is no `## Summary` section. No em dashes.

COUNTS: errors=0 warnings=3 info=7

## Resolution (2026-11-27, by the page author)

- W1: Problem 4 now cites reading 1, pp. 90–91 for N_c and notes that p. 90 writes λ³ for λ⁻³ and leaves out the spin factor.
- W2: the page-scoped meaning of C now names both uses (the metal in Problem 2, the trapped cloud in Problem 3).
- W3: `order: 91`, so the set follows Set 9 (both `lecture: 8`). The same tie in 8.07 Sets 9 and 10 (both lecture 14) is fixed in the same way on the run branch.
- Info items left as they are.
- `status: reviewed`.
