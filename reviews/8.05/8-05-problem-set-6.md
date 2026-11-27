---
page: content/year-3/8.05/8-05-problem-set-6.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-6/ (read: pdftotext of the sheet, page 3 also rendered as an image to read the Greek letter of V = alpha x^n)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-5/ (read: chapter 5, eqs. (3.40)-(3.47) and section 8)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-6/ (read: chapter 6, full PDF re-extracted, eqs. (1.17)-(1.52), (2.27))
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-2/ (read: chapter 2, eqs. (2.29)-(2.36))
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-3/ (read: chapter 3, eq. (4.73))
  - https://physics.nist.gov/cuu/Constants/ (not fetched; hbar = 6.582119569e-16 eV s is the CODATA 2018 value already used in calcs/)
verdict: pass-with-notes
---

# Review: Problem Set 6: How fast a state can change, sum rules and oscillators in one and two dimensions

## Blind solve

### My answers (written before opening the full page)
Checks in S/rv6/blind2.py (numpy/scipy; sympy not installed).

- 1(a): Cauchy-Schwarz with unitary evolution (norm kept) gives overlap <= 1. Energy eigenstate: overlap = |e^{-iEt/hbar}|^2 = 1 for all t.
- 1(b): overlap = 1 - (dH)^2 t^2 / hbar^2 + O(t^3).
- 2(a): <Q> = cos^2 phi, Q^2 = Q, so dQ = sin(phi) cos(phi) = sin(2 phi)/2. Then |phi'| <= dH/hbar; phi reaches pi/2 no sooner than pi hbar/(2 dH) = h/(4 dH). For dH = 1.00 eV: dt_perp >= pi hbar/2 = 1.034 fs.
- 2(b): phi(t) <= dH t/hbar and cos^2 decreasing on [0, pi/2]. At t = 0.500 fs, dH = 1 eV: angle 0.7596 rad, overlap >= cos^2 = 0.5257.
- 3(a): |Psi(t)> = (e^{i g B t/2}|+> + e^{-i g B t/2}|->)/sqrt2 (up to a global phase: (|+> + e^{-i g B t}|->)/sqrt2). Spin precesses in the x-y plane about z with angular frequency gB, azimuth phi = -gBt (clockwise seen from +z, x towards -y for gB > 0). At t = pi/(2gB): along -y. Overlap = cos^2(gBt/2).
- 3(b): dH = hbar g B/2; dt_perp = pi/(gB); product = pi hbar/2 = h/4.
- 4(a): [[x,H],x] = hbar^2/m; diagonal element gives TRK. Square well: x_12 = -16L/(9 pi^2), fraction = 768/(81 pi^2) = 0.9607 (full sum checked numerically = 1).
- 4(b): from <a|[H,x]|a'> = (E_a - E_a') x_aa' = -(i hbar/m) p_aa'; second rule by inserting a complete set in <a|p^2|a>.
- 4(c): [xp,H] = i hbar p^2/m - i hbar x V'; zero in eigenstate. V = alpha x^n: <T>/<V> = n/2. Quartic: T/E = 2/3.
- 5(a): a maps the N = n eigenspace injectively into N = n-1 (a|psi> = 0 would give n|psi> = 0), so dim <= dim of ground space = 1.
- 5(b): induction / Leibniz rule.
- 5(c): <k|a|n> = sqrt(n) delta_{k,n-1}, <k|a+|n> = sqrt(n+1) delta_{k,n+1}; x = sqrt(hbar/2m w)(a + a+), p = i sqrt(m w hbar/2)(a+ - a), x^2, p^2 band matrices, N = diag(n). <n+1|x|n> = sqrt(n+1) in units sqrt(hbar/(2 m w)); <1|x^2|3> = sqrt6/2 = 1.2247 in units hbar/(m w).
- 5(d): truncated [x,p] = i hbar diag(1,1,1,-3); last entry/(i hbar) = -3; trace of a commutator of finite matrices is zero, so it cannot be i hbar times identity.
- 5(e): dx = sqrt((hbar/m w)(n+1/2)), dp = sqrt(m hbar w (n+1/2)), product hbar(n+1/2): minimal only for n = 0. A = sqrt(2 hbar (n+1/2)/(m w)), dx = A/sqrt2.
- 6(a): H = hbar wx (Nx + 1/2) + hbar wy (Ny + 1/2); |nx,ny> = (ax+)^nx (ay+)^ny |0,0>/sqrt(nx! ny!); E = hbar wx(nx+1/2) + hbar wy(ny+1/2).
- 6(b): N + 1 states in group N.
- 6(c): E_{N,n} = hbar (wx+wy)(N+1)/2 + hbar (wx-wy) n/2. Irrational ratio: {N} no, {N,n} yes, {Nx,Ny} yes, {H} yes. Equal: {H} no, {N} no, the two pairs yes. Rational: {H} no (degeneracies at high enough energy), {N} no, pairs yes. wx = 2wy: lowest degenerate energy 3.5 hbar wy ((1,0) and (0,2)).
- 6(d): l = i hbar (ay+ ax - ax+ ay) (checked with matrices); commutes with H since each term keeps Nx + Ny.
- 6(e): with MIT's aL = (ax + i ay)/sqrt2, aR = (ax - i ay)/sqrt2: H = hbar w (NL + NR + 1), l = hbar (NR - NL) (checked with 12x12-per-mode matrices). Eigenvalue hbar(nR - nL). Level N = 3: l = 3 hbar, hbar, -hbar, -3 hbar. Within a level the values N, N-2, ..., -N are distinct, so {H, l} is complete.

### Comparison with the page (one line per answer id)
- p1-eig: page "1 at all times" (choice 2). Mine: 1. Agree.
- p1-series: page 1 - (dH*t/hbar)^2. Mine identical. Agree.
- p2-dq: page sin(phi)*cos(phi). Mine identical. Agree.
- p2-time: page 1.03 fs (1%). Mine 1.0339 fs. Agree.
- p2-bound: page 0.526 (1%). Mine 0.5257. Agree.
- p3-dir: page "-y" (choice 1). Mine -y. Agree.
- p3-overlap: page cos(g*B*t/2)^2. Mine identical. Agree.
- p3-dh: page hbar*g*B/2. Mine identical. Agree.
- p3-time: page pi/(g*B). Mine identical. Agree.
- p4-trk: page 0.961 (1%). Mine 768/(81 pi^2) = 256/(27 pi^2) = 0.96067. Agree.
- p4-virial: page n/2. Mine n/2. Agree.
- p4-quartic: page 0.667. Mine 2/3. Agree.
- p5-xmn: page sqrt(n + 1). Mine identical. Agree.
- p5-x2: page 1.225. Mine sqrt6/2 = 1.2247. Agree.
- p5-comm: page -3. Mine -3 (4x4 matrices multiplied numerically: diag(1, 1, 1, -3)). Agree.
- p5-prod: page hbar*(n + 1/2). Mine identical. Agree.
- p5-amp: page 0.707. Mine 1/sqrt2. Agree.
- p6-e: page hbar*(wx*(nx + 1/2) + wy*(ny + 1/2)). Mine identical. Agree.
- p6-count: page N + 1. Mine N + 1. Agree.
- p6-enn: page hbar*((wx + wy)*(N + 1) + (wx - wy)*n)/2. Mine identical. Agree.
- p6-csco: page "N alone" (choice 1). Mine {N} is the only incomplete set. Agree.
- p6-eq: page 2. Mine 2 ({N, n} and {Nx, Ny}). Agree.
- p6-rat: page "H alone" (choice 3). Mine {H} stops being complete. Agree.
- p6-low: page 3.5. Mine 3.5 ((1,0) and (0,2)). Agree.
- p6-ell: page "i hbar (ax ay+ - ax+ ay)" (choice 0). Mine i hbar(ay+ ax - ax+ ay), the same operator (x and y operators commute); checked with truncated matrices (difference 4e-15). Agree.
- p6-lz: page hbar*(nR - nL). Mine hbar(nR - nL), checked as an operator identity l = hbar(NR - NL) with MIT's aL, aR on 12 x 12 truncations per mode (difference 0). Agree.
- p6-m: page "-3, -1, 1, 3" (choice 2). Mine identical. Agree.

No disagreement between the blind solve and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 2(b), solution, step "From the angle to the overlap", last sentence | (MIT states the bound only for t <= pi hbar/(2 dH)) | "For later times the bound says nothing: the right-hand side could be reached with $\phi$ at $\pi/2$ already." | The reason given is muddled: beyond pi hbar/(2 dH) the angle dH t/hbar passes pi/2 and cos^2 rises again, while the overlap may already be zero, so the inequality can be false, not just empty. Replace with: "For later times the bound fails: $\Delta H\,t/\hbar$ passes $\pi/2$ and $\cos^2$ grows again, while the overlap may already be zero (Problem 3 is an example)." |
| 2 | info | Problem 1(b), statement | "Your answer will depend only on t, hbar and the uncertainty dH" | "The result holds only $t$, $\hbar$ and the energy uncertainty $\Delta H$ of the state." | "holds" reads oddly; write "The result depends only on $t$, $\hbar$ and ...". |
| 3 | info | Problem 4(c), statement | the matrix element of x times the partial derivative of V(x) | the matrix element of x times V'(x), with V' defined as dV/dx | Same physics; no change needed. |
| 4 | info | Problem 3(a), solution, Formula "The spin state along +x", at="eqs. (2.31)–(2.36)" | Chapter 2 gives the +x state at (2.31)/(2.32); (2.33)-(2.36) are the inverse relations and the y states | | Optionally narrow to at="eqs. (2.31)–(2.32)". |
| 5 | info | Intro ("the complete sets of commuting observables of Lecture 11") and Problem 6(c) check ("The answers fit Lecture 11") | Notes chapter 5, section 8 "Complete Set of Commuting Observables" | The Lecture 11 lesson (ground-state-bounds-spectral-theorem) covers simultaneous diagonalisation and the need for a second operator in degenerate levels, but never uses the term "complete set of commuting observables" | Acceptable, since the page defines the term in 6(c). Optionally say "the simultaneous diagonalisation of Lecture 11 (notes chapter 5, section 8)". |

## Arithmetic and answer checks
- Every number recomputed (S/rv6/blind2.py): pi hbar/2 at 1 eV = 1.0339 fs; dH t/hbar = 0.75965 rad, cos^2 = 0.52574; <1|x|2> = -0.180127 L = -16L/(9 pi^2) (quad); first TRK term 0.960675; sum over even k to 300 = 1.0000000 (so the "0.997 for k = 2, 4, 6" and "rest brings it to 1" claims hold: 0.96067 + 0.03074 + 0.00544 = 0.99685); general term 64k^2/(pi^2 (k^2 - 1)^3) matches quad for k = 4; sqrt6/2 = 1.22474; truncated [x, p]/(i hbar) = diag(1, 1, 1, -3); squared 4x4 x has last diagonal 3 (vs 7); table of 6(b) for wx = 1.1 wy (1.05, 2.05, 2.15, 3.05, 3.15, 3.25) and the split E = hbar wy(nx+ny+1) + hbar(wx-wy)(nx+1/2) checked by hand; wx = 2wy levels 1.5, 2.5, 3.5 (doubly degenerate) checked.
- Algebra checked by hand: 1(b) series, 2(a) Delta Q and speed limit, 3(a) state, phase, -y direction (the state (|+> - i|->)/sqrt2 is |y;-> of notes eq. (2.36)), 3(b) saturation, 4(a)-(c) commutators, 5(b) induction, 5(d) reason (trace), 6(c) E_{N,n}, rational-ratio degeneracy |nx+s, ny> ~ |nx, ny+r>, 6(d) l in ladder operators, 6(e) N_L, N_R expansions, [aL, aR+] = 0, and the one-quantum check (hbar/i)(ix - y) = hbar(x + iy).
- Answer boxes: every expr/value equals the solution's result; vars ranges keep all formulas finite and physical (gamma B > 0, wx > wy in p6 boxes); each listed mistake differs from the answer over the ranges, and each mistake hint is a true statement about that wrong formula (checked one by one; e.g. p1-series "1 - (dH t/hbar)^2/2" is indeed the amplitude for <H> = 0; p3-overlap "cos(gBt)" is the x component of the spin direction; p6-lz "hbar(nL - nR)" hint matches the counterclockwise (x + iy) state). p3-dh mistake "hbar g B/4": the hint is true but generic (info only).
- Number tolerances: 1% for p2-time, p2-bound, p4-trk, p5-x2, p5-amp, p4-quartic accepts 3-figure answers and rejects the obvious slips (pi hbar/dH = 2.07 fs, cos instead of cos^2 = 0.725, sqrt6 = 2.449, the k = 2 + 4 partial sum 0.991, 1/2 for the quartic). Absolute 0.01 for p5-comm, p6-eq, p6-low is fine.
- Every solution ends with a "Check the result" step (units, limits, or a second route).
- Choice boxes: right answers at positions 2, 1, 1, 3, 0, 2 (varied). In p6-csco and p6-rat the right string ("N alone", "H alone") is tied for shortest with "N and n"/"H alone", so length gives nothing away (info).
- Hints: none gives a box result away. The third hint of 4(a) gives the matrix element -16L/(9 pi^2); the student still has to form the energy-weighted term (acceptable for an our-addition box).
- calcs/8.05/8-05-problem-set-6.yaml: every answer box has an entry with an independent route (two-level overlap differentiated, projector variance, numerical root, numerical integrals of square-well and oscillator wavefunctions, polar-angle derivative). p6-lz's identity assumes the exp(i(nR - nL) theta) dependence and is close to circular, but p6-one-quantum checks the sign independently, and my matrix check confirms it. `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- All six MIT problems and all their parts are present, in MIT's order: 1(a)-(b), 2(a)-(b), 3(a)-(b), 4(a)-(c), 5(a)-(e), 6(a)-(e). MIT's points (10, 10, 10, 10, 10, 15 = 65) are used; part splits add up (4+6, 6+4, 5+5, 4+3+3, 2+1+3+2+2, 3+2+4+3+3).
- Our additions are each marked in their part and listed in the intro: two number boxes of Problem 2, direction box 3(a), square-well box 4(a), quartic box 4(c), count 6(b), wx = 2wy example 6(c). The 6(b) drawing is replaced by a table, stated in the intro. MIT's row index m renamed k (stated).
- Citations: all `at=` pages of MIT's sheet match its printed pages (1 to 5; 5(a) is on p. 3, 6(c)-(e) on p. 5). Reading citations verified: chapter 3 eq. (4.73) Schwarz; chapter 6 eqs. (1.17), (1.18), (1.20), (1.32), (1.49), (1.52), (2.27); chapter 2 eqs. (2.31)-(2.36); chapter 5 eq. (3.44) in the 2(a) check.
- Claims about lessons checked: Lecture 10 lesson quotes dH dt >= h/4 (notes eq. (3.44)); Lecture 11 lesson has the quartic potential alpha x^4 and commuting Hermitian operators diagonalised together; Lecture 2 lesson proves no degeneracy of 1D bound states; Problem Set 4 Problem 1 is the commutator product rule and [q^n, p].

## Licensing
- MIT's sheet carries no "rights reserved" or "Courtesy of" notice. No MIT figure is redrawn (6(b) diagram given as a table with own numbers). Wording is the page's own; MIT's hints are quoted as short hints and labelled "MIT's hint". No OpenStax, LibreTexts or textbook material. CODATA used for one constant.

## Notes
- No em dashes, no stray control characters, no `## Summary` with answers.
- Symbols: all page-scoped meanings for 8-05-problem-set-6 read; H, a, T (cosmology letters) have page-scoped meanings; units sensible (gamma 1/(s T), l J s, omega rad/s). No issue found.
- The (|+> - i|->)/sqrt2 = |y;-> statement in 3(a) agrees with notes eq. (2.36).

COUNTS: errors=0 warnings=1 info=6

## Resolution (2026-11-27, by the page author)

- Warning 1: Problem 2(b), "From the angle to the overlap": the last sentence now says the bound fails for later times (ΔH t/ħ passes π/2, cos² grows again while the overlap may already be zero, Problem 3 being an example).
- Info 1: Problem 1(b) now reads "The result depends only on t, ħ and the energy uncertainty".
- Info 2 to 6: kept as they are (no change needed, as the review says).

Status set to `reviewed`.
