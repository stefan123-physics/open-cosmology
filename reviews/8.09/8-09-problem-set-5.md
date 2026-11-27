---
page: content/year-4/8.09/8-09-problem-set-5.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_pset5/ (read: pdftotext text and rendered p. 2)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf (read: downloaded, pdftotext, p. 62 rendered)
verdict: pass-with-notes
---

# Review: Problem Set 5 (8.09), generating functions, Poisson brackets, Laplace-Runge-Lenz vector, exponential potential, projectile

Writer: Opus. Reviewer: Opus (same model, blind).

Page reviewed in worktree `.claude/worktrees/ps-809-5` at commit 76ec6c4. Order followed: blind solve from the stripped statements and MIT's sheet only (section below, written to this file before the full page or calcs file was opened), then the comparison.

## Blind solve

### My answers (written before the full page or calcs file was opened)
Convention {u,v} = Σ(∂u/∂q ∂v/∂p − ∂v/∂q ∂u/∂p), {q,p}=1.

- 1(a): F2 = Σ q_i P_i; F3 = −Σ p_i Q_i (1 dof: `-p*Q`). Check: q = −∂F3/∂p = Q, P = −∂F3/∂Q = p.
- 1(b): F1 = q Q t (p = ∂F1/∂q = Qt → Q = p/t; P = −∂F1/∂Q = −qt).
- 1(c): {Q,P} = (kn − ℓm) q^{k+m−1} p^{ℓ+n−1} = 1 ⇒ m = 1−k, n = 1−ℓ, k−ℓ = 1: ℓ = k−1, m = 1−k, n = 2−k; k ≠ 1 (ℓ = 0 makes Q = q, no F1(q,Q)). General F1 = −(k−1)(Q/q)^{1/(k−1)}; k = 3: F1 = −2√(Q/q).
- 1(d): x′ = x, p′ = p + q∇f; F2 = x·P − q f(x,t) (1D: `x*P - q*f`); K = H − q∂f/∂t = (P − qA′)²/2m + qφ′ (same form, new potentials).
- 2(a): {Q,P} = (ia)(1/2ia) − (1)(−1/2) = 1.
- 2(b): a = mω; K = iωQP; Q = Q0 e^{iωt}, P = P0 e^{−iωt}, Q0 = p0 + imωq0, P0 = (p0 − imωq0)/(2imω); q(t) = q0 cos ωt + (p0/mω) sin ωt; p(t) = p0 cos ωt − mωq0 sin ωt.
- 3: {p1 + aq1, H} = −(p1 + aq1); {q2,H} = −q2; {u1,H} = {u2,H} = 0.
- 4(a): {x_i,L_j} = ε_ijk x_k; {p_i,L_j} = ε_ijk p_k; {L_i,L_j} = ε_ijk L_k; {L_i,L²} = 0. Samples: {x1,L2} = x3, {p3,L1} = p2, {L1,L2} = L3.
- 4(b): {p1,H} = −k r1/r³; {A_i,H} = 0 (sympy, all three components).
- 4(c): A² − μ²k² − 2μHL² = 0 identically (sympy); L·A = 0. A points from the centre of force to the pericentre; |A| = μkε.
- 5(a): p = √(P² − e^x); F2 = 2√(P² − e^x) + P ln[(P − √(P² − e^x))/(P + √(P² − e^x))] = 2u − 2P artanh(u/P), u = √(P² − e^x); F2 = 0 at e^x = P².
- 5(b): P = √(p² + e^x); Q = ln[(√(p²+e^x) − p)/(√(p²+e^x) + p)] = −2 arsinh(p e^{−x/2}).
- 5(c): Q = 2P(t − t0) (Q = 0 at the turn); x(t) = 2 ln[P / cosh(P(t − t0))]; p(t) = P tanh(P(t0 − t)). (p < 0: other root, F2 → −F2 branch, same x(t) and p(t) formulas for t > t0.)
- 6(a): S = α_x x + W_y(y) − Et, W_y = −(2m(E − mgy) − α_x²)^{3/2}/(3m²g) (upward branch); α_x = m v0 cos θ, E = m v0²/2.
- 6(b): y = x tan θ − g x²/(2 v0² cos²θ); range R = v0² sin 2θ / g = 35.31 m (v0 = 20 m/s, θ = 30°, g = 9.81).
- 6(c): x = v0 cos θ t, y = v0 sin θ t − g t²/2.

Python checks (rv5/blind.py, rv5/hj.py, sympy):
```
1a Q p | 1b p= p P= -q*t | 1c {Q,P}=1 | 1c k=3 residuals 0 0
2a 1 | 2b H - i w Q P (a=m w) = 0 | q(t),p(t) map to Q0 e^{iwt}, P0 e^{-iwt}: 0 0
3 {p1+aq1,H} = -a*q1 - p1; {u1,H}=0; {u2,H}=0
4a x3 p2 (p2*x1-p1*x2 = L3) 0 | 4b {p1,H} = -k*x1/r^3; {A_i,H} = [0,0,0]
4c A^2-mu^2k^2-2mu H L^2 = 0; L.A = 0
5a dF2/dx - u = 0; 5b Q = log((P-u)/(P+u)) equals -2 asinh(p e^{-x/2}) at 3 points
5c xdot-2p = 0, pdot+e^x = 0, H-P^2 = 0
6 HJ residual 0; beta_x and beta_E constant along y(x), x(t), y(t); R = 35.31194 m
```

### Comparison (after opening the page), one line per answer id
Every formula box was evaluated against my own form at 20 000 random points of its `vars` (rv5/boxes.py, numpy, rtol 1e-9); every listed mistake was evaluated at the same points for finiteness and distance from the answer.

| id | page | mine | result |
|---|---|---|---|
| p1a-f3 | `-p*Q` | −pQ | agree |
| p1b-f1 | `q*Q*t` | qQt | agree |
| p1c-l / p1c-m / p1c-n | k−1, 1−k, 2−k | same | agree |
| p1c-excluded | choice 2, "k = 1" | k = 1 | agree (k = 0 and k = 2 are valid: F₁ = q/Q and −Q/q) |
| p1c-k3 | `-2*sqrt(Q/q)` | −(k−1)(Q/q)^{1/(k−1)} at k = 3 | agree |
| p1d-f2 | `x*P - q*f` | xP − qf | agree |
| p1d-k | choice 0, (P − qA′)²/2m + qφ′ | same | agree |
| p2b-a | `m*omega` | mω | agree |
| p2b-k | choice 3, iωQP | iωQP | agree (sympy: H − iωQP = 0 at a = mω) |
| p2b-q / p2b-p | q₀cos ωt + (p₀/mω) sin ωt; p₀cos ωt − mωq₀ sin ωt | same | agree |
| p3-bracket | `-(p1 + a*q1)` | −p₁ − aq₁ | agree |
| p4a-x / p4a-p / p4a-l | x3, p2, L3 | same | agree |
| p4b-pdot | `-k*x1/r^3` | −k r₁/r³ | agree |
| p4c-dir | choice 2, towards the closest point | towards pericentre | agree |
| p4c-mag | `mu*k*eps` | μkε | agree |
| p5a-p | `sqrt(P^2 - exp(x))` | same | agree |
| p5a-f2 | 2u − 2P ln(P+u) + Px | 2u + P ln((P−u)/(P+u)) | agree (identity: (P−u)(P+u) = eˣ), max rel. diff < 1e-9 |
| p5b-p | `sqrt(p^2 + exp(x))` | same | agree |
| p5b-q | `-2*asinh(p*exp(-x/2))` | ln((√(p²+eˣ) − p)/(√(p²+eˣ) + p)) | agree |
| p5c-x | 2 ln(P/cosh(P(t−t₀))) | 2 ln P − 2 ln cosh(P(t₀−t)) | agree |
| p5c-p | −P tanh(P(t−t₀)) | P tanh(P(t₀−t)) | agree |
| p6a-alpha | `m*v0*cos(theta)` | mv₀ cos θ | agree |
| p6b-path | x tan θ − gx²/(2v₀²cos²θ) | same | agree |
| p6b-range | 35.3 m, 1% | 35.312 m | agree (g = 9.8 gives 35.35, inside; the sin θ slip 20.4 is rejected) |
| p6c-x / p6c-y | v₀cos θ t; v₀ sin θ t − gt²/2 | same | agree |

No disagreement between my answers and the page's.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(a), box `p5a-p`, mistake `sqrt(P - exp(x))` | n/a (our box) | vars `x: [-1, 1]`, `P: [2, 3]`; the mistake is the square root of a negative number where eˣ > P (x > ln P, up to x = 1): 5.2% of the vars box (numpy, 20 000 points). Any of the 5 sample points landing there makes `agree` fail, so a reader who types this mistake misses its hint about 1 time in 4 | Narrow the range to `x: [-1, 0.5]` in both p5a boxes (eˣ ≤ 1.65 < P), or keep the range and change the mistake to one that is finite everywhere |
| 2 | warning | Intro of Problem 1, Formula "Rules of a type-1 generating function", cited to eq. (4.13), p. 62 | Notes eq. (4.13) as printed (p. 62, checked on the rendered page) reads pᵢ = ∂F₁/∂**Qᵢ**, a misprint; the table on p. 64 and the example (4.16) have ∂F₁/∂qᵢ | pᵢ = ∂F₁/∂qᵢ, cited to (4.13) without comment | Keep the correct formula and add a bracket after it, e.g. "(the notes' eq. (4.13) prints ∂F₁/∂Qᵢ in the first rule, a misprint; the table on p. 64 has ∂qᵢ)", or cite the p. 64 table instead (Writing rule 4) |
| 3 | warning | Problem 1(d), statement, "Then say what the new Hamiltonian K is." and choice box `p1d-k` | MIT asks only to show the transformation is canonical and find F₂ | Adds a question on K without "(our addition)" in the part (the intro's "every choice box" covers it only globally) | Write "Then (our addition) say what the new Hamiltonian $K$ is." (course rule 4: mark each addition where it appears) |
| 4 | info | Intro | Sheet points to Goldstein in Problems 1, 2, 4 and the title of 6, and mentions 8.223 | Pointers dropped, said so in the intro | None |
| 5 | info | Problem 6 | One unsplit question, 11 points | Three parts 4 + 4 + 3, marked as ours | None |

## Arithmetic and answer checks
- All 31 boxes checked (table above). Points: P1 2+2+4+4 = 12, P2 2+5 = 7, P3 4, P4 4+7+2 = 13, P5 6+3+4 = 13, P6 11 (4+4+3, our split); all match MIT's sheet (p. 2 to 4). Total 60.
- Every solution step recomputed with sympy: 1(c) bracket (kn − ℓm)q^{k+m−1}p^{ℓ+n−1}; 1(c) general F₁ = (1−k)(Q/q)^{1/(k−1)} and the k = 2 case = notes' example (4.15)–(4.17) (checked on p. 62); 2(a) {Q,P} = 1, and 2ia without the 1/(2ia) factor; 2(b) iωQ₀P₀ = (p₀² + m²ω²q₀²)/2m and a = −mω giving −iωQP; 3 all brackets; 4(a) {x₁,L₃} = −x₂, {x₂,L₃} = x₁ (matches notes eq. (4.94), δx = −yδθ); 4(b) {Aᵢ,H} = 0 for all three components in 3D (`[0, 0, 0]`), and the step-by-step signs (first term minus second); 4(c) A² − μ²k² − 2μHL² ≡ 0, L·A ≡ 0, A at pericentre = μkε r̂; 5(a) derivative check written on the page (−eˣ/(P+u) + P = u) verified by hand and by sympy; 5(b) Q = x − 2 ln(P + u) and the bracket {Q, P} = 1; 5(c) ẋ = 2p, ṗ = −eˣ, H = P² along the motion; the "no points" answer (Q formula smooth through p = 0, valid for p < 0) checked; 6 HJ residual 0, β_x and β_E constant along the path (rv5/hj.py), 20.4 m slip value (400 × 0.5/9.81 = 20.39).
- Mistakes: every listed mistake is finite over its `vars` except #1 above; each differs from the answer over the range (some touch it at isolated points: `q*Q/t` at t = 1, `m*omega^2` at ω = 1, `x1` at x₁ = x₃, `k*eps` at μ = 1, `p^2 + exp(x)` at P = 1; the 5-point check is unaffected in practice). Every mistake hint is true of its formula (checked one by one).
- Choice boxes: correct positions 2, 0, 3, 2 (varied); no backslash TeX in choices; no choice answerable from units alone; no distractor that is also right (k = 0 and k = 2 in p1c-excluded are genuinely allowed values, so "must be left out" is false for them).
- Calcs file: `pytest tests/calc -k 8-09-problem-set-5`: 49 passed. Sample constants recomputed: r values in p4b-pdot (2.513961018, 3.108054054, 3.074085230), ε values in p4c-mag (0.568644575, 0.269948774, 0.925288299, all with E < 0), L₃ samples in p4a-l (−0.99, 1.12, −0.03): all correct.
- Independence of calcs routes (the writer flagged some): genuinely independent are p5a-f2 (numerical integral from the turning point), p5b-q (numerical ∂F₂/∂P), p5c-x/p5c-p (root of the time integral), p2b-q/p2b-p (amplitude-phase form), p4c-mag (vectors at an orbit point), p1c-bracket, p1c-k3, p6c. Only partly independent: p1a-f3 (integral of the constant Q, a restatement), p1d-f2 (only a gauge function linear in x), p1c-l/m/n (roots of the page's own conditions; p1c-bracket is the real check), p2b-a (root of the page's own coefficient), p4b-conserved (only A_x, planar motion). My sympy checks above cover all of these in full, so no answer rests on a circular check alone.
- `content:check` in the worktree: 0 errors; the only warning for this page is the missing review file.

## Coverage and order
- Problems 1 to 6 and all parts in MIT's order, with MIT's points; the question for no points in Problem 5 is kept and answered.
- `covers: [4.1, 4.2, 4.3, 4.4]`, `lecture: 4.4`: right for the topics (generating functions, Poisson brackets, conservation via brackets, Hamilton-Jacobi). 4(c) borrows eq. (4.156) of Section 4.5 for the eccentricity, with a link-free mention of "the lesson on Section 4.5" (kepler-problem-hamilton-jacobi, which uses m for the reduced mass, as the page says).
- Citations checked on the PDF with `pdftotext -f N -l N` and the printed footers: (4.13) p. 62, (4.15)–(4.17) p. 62, (4.25) p. 63, table and (4.29) p. 64, (4.43) and (4.52) p. 66, (4.78) p. 69, (4.84) p. 70, (4.94) p. 71, (4.104) p. 73, (4.129) p. 76, (4.156) p. 81: all page numbers and equation contents correct (apart from the misprint in (4.13), row 2).
- Every "our choice" and "our addition" listed in the intro appears marked in its part, except the K question of 1(d) (row 3). Statements pin down the boxed forms: no added constants (intro), F₂ = 0 at the turning point (5(a)), Q fixed by that choice (5(b)), t₀ = turning time (5(c)), positive a (2(b)), P > 0.
- Frontmatter summary and intro give away no box value. No `## Summary`. No em dashes, no control characters.

## Licensing
- Sheet has no figures and no rights notices beyond OCW's standard footer; the page has no figures. No Goldstein material; textbook pointers dropped. Wording is the page's own (statements paraphrased; MIT's Levi-Civita facts and the 7-constants argument rewritten). No OpenStax or LibreTexts.

## Notes
- Info: hint 2 of 1(a) ("try a product of p and Q and fix its sign") leaves only a sign to find for a 2-point warm-up; acceptable, but it could stop at "try a product of an old momentum and a new coordinate".
- Info: 6(b) check says "for θ → 0 the path is the horizontal line y = 0 near the origin"; strictly it tends to y = −gx²/(2v₀²), flat only near the origin, which the sentence does say. Fine as written.
- Info: the complex K in 2(b) is handled correctly: K = iωQP equals the real energy on the motion, and the page says so in its check.

COUNTS: errors=0 warnings=3 info=5

## Resolution (2026-11-27, by the page author)

- Warning 1: both Problem 5(a) boxes (p5a-p, p5a-f2) now use `x: [-1, 0.5]`, so the listed mistake √(P − eˣ) is real over the whole range.
- Warning 2: after the Formula "Rules of a type-1 generating function" the page now notes that the notes' eq. (4.13) prints ∂F₁/∂Qᵢ in the first rule, a misprint, and that the table on p. 64 has ∂F₁/∂qᵢ.
- Warning 3: the 1(d) question about K is now marked "(our addition)".
- Infos: no change.
- `status: reviewed`.
