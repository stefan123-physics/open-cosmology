---
page: content/year-2/8.03/8-03-problem-set-4.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_problemset4/ (read: PDF text and rendered pages 1-3, Figures 1-3)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec7/ (read, downloaded independently)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec8/ (read, downloaded independently)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec9/ (read, downloaded independently)
verdict: pass-with-notes
---

# Review: Problem Set 4: beaded strings, symmetry and Fourier series

## Blind solve (written before opening the full page)

### My answers
- P1a: force on bead 1 from the wall piece (length a/2): F = -2T y1/a. Infinite row gives T(y0 - y1)/a; equal for all y1 iff y0 = -y1, so A0 = -A1.
- P1b: A_{N+1} = -A_N.
- P1c: A_j = sin[(j - 1/2) ka]; right condition gives 2 sin(Nka) cos(ka/2) = 0, so ka = n pi/N, n = 1 .. N (N modes; n = N, ka = pi, gives A_j = (-1)^(j+1), valid). omega_n = 2 sqrt(T/(m a)) sin(n pi/(2N)). Shape A_j = sin(n pi (2j - 1)/(2N)), bead 1 positive. Check N = 1: omega^2 = 4T/(ma) = 2*(T/(a/2))/m. OK.
- P2a: 2 normal modes.
- P2b: S eigenvalues beta = +1 and -1. beta = +1: A1/A2 = -1. beta = -1: A1/A2 = +1.
- P3a: free ends, dy/dx = 0 at 0 and L: shape cos(m pi x/L), k_m = m pi/L, omega_m = (m pi/L) sqrt(T/mu); plus the m = 0 zero-frequency rigid shift.
- P3b: third mode cos(3 pi x/L): 3 points at rest (x = L/6, L/2, 5L/6).
- P3c: omega = sqrt(T/mu) k, straight line through the origin (discrete points k = m pi/L), slope sqrt(T/mu).
- P4a: infinitely many (continuous string).
- P4b: k_m = m pi/(2L), omega_m = (m pi/(2L)) sqrt(T/mu). A_m = (1/L) int_{-L}^{L} y(x,0) sin[k_m(x+L)] dx = -(32A/(m^2 pi^2)) cos(m pi/2) sin(m pi/4); nonzero only for m = 2, 6, 10, ... (m = 2 mod 4), A_m = (-1)^((m-2)/4) 32A/(m^2 pi^2). A_2/A = 8/pi^2 = 0.8106, A_6/A = -8/(9 pi^2) = -0.09006. y(x,t) = sum A_m sin[m pi (x+L)/(2L)] cos(omega_m t). Check: at x = -L/2 the series gives (8A/pi^2) sum 1/(2q+1)^2 = A.
- P4c: A_m zero for odd m and multiples of 4; alternating signs at m = 2, 6, 10, 14 (0.811, -0.090, 0.032, -0.0165) falling as 1/m^2.

### Comparison (after opening the page), one line per answer id
- p1-wall: page -2*T*y1/a; mine -2T y1/a. Agree.
- p1-bc: page -AN; mine A_{N+1} = -A_N. Agree.
- p1-ka: page n*pi/N; mine n pi/N. Agree.
- p1-count: page N; mine N (n = 1..N, n = N valid). Agree.
- p1-omega: page 2*sqrt(T/(m*a))*sin(n*pi/(2*N)); mine identical. Agree. Numerical check (script ps4num.py beside this file): eigenvalues of the direct N-bead matrix (end diagonal entries 3, inner 2, off-diagonal -1) equal 4 sin^2(n pi/2N) for N = 1, 2, 3, 5 (N = 5: 0.382, 1.382, 2.618, 3.618, 4 both ways).
- p1-shape: page sin((j - 1/2)*n*pi/N); mine sin(n pi (2j-1)/(2N)). Same expression. Agree.
- p2-count: page 2; mine 2. Agree.
- p2-r1 (beta = -1): page 1; mine +1. Agree.
- p2-r2 (beta = +1): page -1; mine -1. Agree.
- p3-k: page m*pi/L; mine m pi/L. Agree.
- p3-omega: page m*pi/L*sqrt(T/mu); mine identical. Agree.
- p3-shape: page cos(m*pi*x/L); mine cos(m pi x/L). Agree.
- p3-nodes: page 3; mine 3. Agree.
- p3-slope: page sqrt(T/mu); mine sqrt(T/mu). Agree.
- p4-count: page choice 3 "Infinitely many"; mine infinitely many. Agree.
- p4-omega: page m*pi/(2*L)*sqrt(T/mu); mine identical. Agree.
- p4-which: page choice 3 "Only m = 2, 6, 10, ..."; mine m = 2 mod 4. Agree.
- p4-a2: page 0.8106; mine 8/pi^2 = 0.8106. Agree.
- p4-a6: page -0.09006; mine -8/(9 pi^2) = -0.09006. Agree.
- Closed forms: page A_m = (32A/(pi^2 m^2)) sin(m pi/4) for m = 2, 6, 10, ...; mine -(32A/(m^2 pi^2)) cos(m pi/2) sin(m pi/4), and cos(m pi/2) = -1 for m = 2 mod 4, so identical. Numerical quadrature (scipy, ps4num.py) for m = 1..14 matches the closed form to 6 decimals (A_10 = 0.032423, A_14 = -0.016542, all other m zero).

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 2 statement | No assumption about the frequencies | "Assume, as the lesson does, that the two normal-mode frequencies are different." | None needed: the added assumption is stated openly and matches Lecture 7 notes p. 2. |
| 2 | info | Problems 1(a), 1(c), 3(b), 3(c), 4(b) | Asks only to show / find / sketch | Adds boxes (wall force, mode count, nodes of mode 3, slope, A_2/A, A_6/A) | None: our own additions; MIT's physics and order of parts kept. |
| 3 | info | Problem 3(a), step "The case m = 0" | Not discussed | Zero-frequency rigid motion, marked as our own addition | None. |
| 4 | info | Problem 4 statement | Figure 3 drawing | Starting shape written as a formula and plotted from it | None. Figure 3 read on the rendered PDF (p. 2): walls drawn at x = -L and x = L, peak A at -L/2, through 0 at x = 0, trough -A at L/2. The page's reading as a string fixed at x = +-L is correct. |

## Arithmetic and answer checks
- Every boxed answer checked against my blind solve (above): all agree.
- Problem 1 checks: N = 1 (omega = 2 omega_0), N = 2 (omega^2 = 2, 4 omega_0^2; shapes equal and (1, -1)), N = 3 (1, 3, 4; trace 8; determinant 3*5 - 3 = 12) all verified; continuum limit (n pi/(Na)) sqrt(Ta/m) correct (length Na, density m/a).
- Problem 1 mistake hints: n*pi/(N+1) (walls at bead 0 and N+1 are N+1 spacings apart, here Na) true; 2n pi/N "every second one" true; N+1 and N-1 hints true (n = N+1 and n = N-1 give the same pattern (-1)^(j+1) cos((j-1/2)pi/N) and the same frequency); shape mistakes true (sin(jka) zero at j = 0; cos((j-1/2)ka) equal at beads 0 and 1, a free end); wall-force mistakes true.
- Problem 2 check: commuting matrix forced to rows (p, q), (q, p): SM rows (-r, -s), (-p, -q); MS rows (-q, -p), (-s, -r); equal iff r = q, s = p. Eigenvalues p + q on (1, 1), p - q on (1, -1). Verified.
- Problem 3: nodes of cos(3 pi x/L) at L/6, L/2, 5L/6; mode 2 at L/4, 3L/4. Verified. Mistake hints (one fixed one free end; 2m pi/L every second; units of sqrt(mu/T); T/mu is speed squared) all true.
- Problem 4: first-half integral -cos(n pi/2)/q + 2 sin(n pi/2)/(L q^2) verified by hand; mirror rule sin(q(L - x)) = -(-1)^n sin(qx) verified; triangle projection 4L sin(n pi/2)/(n^2 pi^2) verified; A_{2n} = -(-1)^n 8A sin(n pi/2)/(n^2 pi^2) verified; the two forms of the series agree term by term. Corner check 8/pi^2 (1 + 1/9 + 1/25) = 0.9331 verified. Period 2L/v_p and upside-down zigzag after half a period verified (excited frequencies are odd multiples of omega_2 = pi v_p/L). Triangle-wave remark verified (odd and y(x + L) = -y(x)).
- Problem 4(c): plot points 0.8106, -0.09006, 0.03242 and listed -0.01654 verified; m = 4 nodes at x = +-L/2 verified.
- Answer-box vars: every range keeps the formula finite and physical; each listed mistake differs from the answer over the whole range.
- Number tolerances: 1% on A_2/A and A_6/A; rejects slips such as 4/pi^2 or 8/(3 pi^2). p2-count (absolute 0.01) and p3-nodes (absolute 0.1) are integers; fine.
- `npm run content:check` in the worktree: 0 errors; the only warning for this page is the missing review file. `npm run calc:test`: 15847 passed (includes all entries of calcs/8.03/8-03-problem-set-4.yaml).

## Coverage and order
- All four MIT problems and all their parts present, in MIT's order (4.1 a-c, 4.2 a-b, 4.3 a-c, 4.4 a-c). 25 points per problem as MIT; the split within problems is marked as the page's own.
- Citations checked against independently downloaded notes: Lecture 8 notes p. 2 (bead equation), p. 3 (omega^2 = 4 omega_0^2 sin^2(ka/2), omega_0^2 = T/(ma); fixed-end conditions), p. 4 (open-end conditions): correct. Lecture 7 notes p. 2 (commuting S, eigenvectors (1, 1) for -1 and (1, -1) for +1): correct. Lecture 9 notes p. 1 (omega = v_p k), p. 2 (mode form), p. 3 (open-end slope condition), p. 5 (orthogonality and coefficients): correct. MIT sheet: 4.1 and 4.2 on p. 1, 4.3 and Figure 3 on p. 2, the text of 4.4 (a-c) on p. 3; all `at=` values match.

## Licensing
- No rights-reserved or courtesy notice in the sheet or the three lecture notes. No MIT figure is reproduced; Figure 3's shape is written as a formula and plotted from it, Figures 1 and 2 are described in words. Wording is the page's own. No OpenStax or LibreTexts material. Georgi not used.

## Notes
- info: Problem 3(a) hint 3 ("Which of the two, sine or cosine, has zero slope at x = 0?") points straight at the cosine shape. It still leaves k_m and omega_m to the reader; acceptable as a last hint.
- info: Problem 4(b) solution says the velocity vanishes "only if beta_m = pi/2"; strictly beta_m = +-pi/2 (the sign is absorbed into A_m). Optional fix: "only if $\beta_m = \pi/2$ for every mode" -> "only if $\beta_m = \pi/2$ for every mode (or $-\pi/2$, which only flips the sign of $A_m$)".
- info: Problem 4(c) check names only m = 4 as a mode with nodes at both corners; every multiple of 4 has them (sin(m pi/4) = 0). Optional fix: "and its coefficient is indeed zero." -> "and its coefficient is indeed zero, as are those of m = 8, 12, …".
- No em dashes; no `## Summary` with answers; symbols pass content:check.

COUNTS: errors=0 warnings=0 info=7

## Resolution (2026-11-21, by the page author)

No errors or warnings. Info 1: Problem 4(b) now adds "(or −π/2, which only flips the sign of A_m)". Info 2: the Problem 4(c) check now adds that the coefficients of m = 8, 12, … are zero too. The other info items need no change.

`status` is now `reviewed`.
