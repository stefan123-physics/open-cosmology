---
page: content/year-3/8.05/8-05-problem-set-10.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/assignment-10/ (read: problem-set PDF, pdftotext and rendered pages 2 to 4)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-8/ (read: section 5, eqs. (5.2) to (5.8))
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-9/ (read: sections 1.1 to 2, Exercises 1 to 7, eqs. (1.11) to (1.57), (2.8), (2.10), (2.13), (2.14); page 12 checked on the rendered PDF)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-2/ (read: eq. (3.60), checked on the rendered page 15)
verdict: needs-changes
---

# Review: Problem Set 10 (8.05): Bell's inequality with correlations, a game won with entanglement, vector operators and a hidden angular momentum

This was a blind review. The answers under "My answers" were written to this file from the stripped statements and MIT's sheet before I opened the full page, its calcs file or any other review.

## Blind solve

### My answers (written before opening the full page)
- 1(a): g = -(4/hbar^2)S_a S_b + (4/hbar^2) S_a S_c (using S_b^2 = hbar^2/4); with S^(1) = -S^(2): [g]av = C(a,b) - C(a,c).
- 1(b): |g| = 1 - (4/hbar^2)S_b^(1)S_c^(1) (first factor has modulus 1, bracket is 0 or 2 >= 0), so [|g|]av = 1 + C(b,c); hence |C(a,b) - C(a,c)| - C(b,c) <= 1.
- 1(c): C(a,b) = -cos(theta_ab). At 60 deg: P(equal) = (1 + C)/2 = 1/4 = 0.25.
- 1(d): LHS = |cos 2th - cos th| + cos th; for 0 <= th <= pi/2 (indeed up to 2pi/3) LHS = 2 cos th - cos 2th. LHS - 1 = 2c(1 - c) with c = cos th: > 0 exactly for 0 < th < pi/2. Maximum 3/2 at th = 60 deg.
- 2(a): P = (1/2)|sum_s v_s w_s|^2 = (1/2)|<vbar|w>|^2. Example: vbar = w, so P = 1/2 = 0.5.
- 2(b): four maps {0,1} -> {0,1}: 0, 1, x, 1-x. c0 = 0 from (0,0), c1 = 0 from (1,0), c2 = 0 from (0,1), then (1,1) gives 0 != 1. Every deterministic strategy loses at least one of the four equally likely input pairs, so P <= 3/4 (mixed strategies are averages). Count: linear f = c0 + c1 x + c2 y wins 3 of 4 for f = 0, x, y, 1+x+y (f + xy has weight 1), each f from 2 of the 16 pairs: 8 pairs. (The other 8 win exactly once.)
- 2(c): P(0,0) = P(1,1) = (1/2) cos^2((alpha_x - beta_y)/2); sum cos^2((alpha_x - beta_y)/2).
- 2(d): P = (1/4)[cos^2((a0-b0)/2) + cos^2((a0-b1)/2) + cos^2((a1-b0)/2) + sin^2((a1-b1)/2)]. MIT angles: cos^2(pi/8) = 0.853553. Angles 0, pi/2, pi/6, -pi/6: (2*0.933013 + 0.75 + 0.75)/4 = 0.841506.
- 3(a): (a.b)^dag = b^dag . a^dag; (a x b)^dag = -b^dag x a^dag; Hermitian case: (a x b)^dag = -b x a.
- 3(b): identity (1.35) verified term by term; special case terms: -gamma a.b, +3 gamma a.b, -gamma a.b, 0: total +gamma a.b. Number asked: 3.
- 3(c): eps_ijk [p_j, L_k] = -i hbar eps_ijk eps_kjl p_l = 2 i hbar p_i, so p x L = -L x p + 2 i hbar p.
- 3(d): (p x L)^dag = -L x p; half sum = p x L - i hbar p.
- 3(e): [n.L, u_j] = i hbar n_i eps_ijk u_k = -i hbar (n x u)_j.
- 3(f): dot product commutes (eps antisymmetry); cross product transforms as a vector (eps identities / Jacobi).
- 3(g): (L x L)_i = -(L x L)_i + 2 i hbar L_i, so L x L = i hbar L.
- 5(a): alpha = 1/2, beta^2 = 1 (beta = +-1).
- 5(b): J's conserve N_R + N_L, so commute with H.
- 5(c): J+ kills (a_R^dag)^n|0>, J_z = hbar n/2; J^2 = hbar^2 m(m+1), j = m = n/2. n = 3: 15/4 = 3.75.
- 5(d): j = (n_R + n_L)/2, m = (n_R - n_L)/2; level N = 2j is one multiplet of 2j+1 = N+1 states; E = hbar w (2j + 1).
- 5(e): with alpha = 1, J_z eigenvalues within a level step by 2 hbar (n_R - n_L changes by 2 at fixed N), while a multiplet needs steps of hbar; also [J+,J-] = 2 hbar J_z forces alpha = beta^2/2 and [J_z,J+] = hbar J+ forces alpha = 1/2.

### Comparison with the page (one line per answer id)
- p1-absg (choice 2, "1 − (4/ħ²) S_b S_c"): agrees with mine.
- p1-c (-cos(th)): agrees.
- p1-eq (0.25): agrees.
- p1-lhs (2*cos(th) - cos(2*th)): agrees (identical expression).
- p1-max (1.5): agrees.
- p1-ang (60): agrees.
- p2-bar (0.5): agrees.
- p2-count (8): agrees. I also checked it by brute force over all 16 pairs of functions in NumPy: 8.
- p2-win: agrees (identical expression). Also checked against a direct tensor-product computation of all 16 outcome probabilities: 0.853553 for MIT's angles.
- p2-num (0.842, tol 0.5%): agrees with my 0.841506 (direct tensor-product check 0.8415064); the 0.5% band [0.8378, 0.8462] rejects 0.8536 and 0.75.
- p3-herm (choice 1, "exactly when the sum of the commutators [a_i, b_i] is zero"): agrees (a·b − b·a = Σ[a_i, b_i]).
- p3-three (3): agrees.
- p3-eps (choice 0, "2iħ p_i"): agrees.
- p3-lz (choice 3, "iħ u_y"): agrees ([L_z, u_x] = iħ ε_zxy u_y = iħ u_y).
- p3-scalar (choice 2, "r · p"): agrees.
- p5-alpha (0.5), p5-beta2 (1): agree. Checked with truncated matrices (8 levels per mode): [J_z, J_+] − ħJ_+ and [J_+, J_−] − 2ħJ_z vanish to 3e-15 on the untruncated block.
- p5-j2 (3.75): agrees (matrix check: 3.7500).
- p5-j ((nR + nL)/2), p5-m ((nR - nL)/2), p5-e (hbar*w*(2*j + 1)): agree.
- p5-why (choice 1, "J₊ changes L_z by 2ħ ..."): agrees with my reasoning.

No disagreement between my answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Intro paragraph 1 ("in the two-dimensional oscillator of [Problem Set 8]") and the first line of Problem 5 ("[Problem Set 8] treated the isotropic harmonic oscillator in two dimensions") | "In an earlier p-set we considered an isotropic two-dimensional harmonic oscillator" (p. 4). In MIT's sheets the a_L, a_R oscillator is Problem Set 6, Problem 6 (on this site `8-05-problem-set-6`, Problem 6 "An oscillator in two dimensions with two frequencies", part (e) defines a_L, a_R, N_L, N_R). Problem Set 8 has no two-dimensional oscillator (grep of its MDX and of all MIT sheets: a_L/a_R appear only in PS 6 and PS 10). | Links and names Problem Set 8 | Replace both links and names with `[Problem Set 6](/courses/8-05/8-05-problem-set-6)`, and say "Problem 6 of Problem Set 6" in the Problem 5 lead-in. |
| 2 | info | Problem 1(c) | "Prove that C(a, b) = −cos θ_ab" (the result is given) | "Find C(a, b) in terms of the angle ... and prove your result", with a formula box. The intro counts only the 1(c) number box as "our addition", so the formula box is presented as checking what MIT asks | Acceptable: hiding the given result is what makes a box possible. Optionally add "(MIT's sheet states the result)" in the solution, or mention it in the intro. |
| 3 | info | Problem 1(d) note | "the inequality is violated for θ ≤ π/2" | "broken strictly between θ = 0 and π/2" | Correct and clearly marked as differing: LHS − 1 = 2cos θ(1 − cos θ) is 0 at both ends (checked). Keep. |
| 4 | info | Problem 2, amplitudes of a general state | α, β | v₊, v₋, with the reason stated | Fine. |

## Arithmetic and answer checks
- calc:test on the worktree, filter `8.05 and problem-set-10`: 43 passed. `npm run content:check` in the worktree: 0 errors, and the only warning about this page is the missing review file.
- Every number on the page was recomputed independently (script outside the repo): 0.25, 1.5 at 60°, 0.5, 8, 0.853553, 0.841506, 0.9330, 0.104, 3, 0.5, 1, 3.75, 2.5 (sum of the plot dots), 55 points (10+10+20+15) and the split of Problem 3 (2+4+3+3+2+4+2 = 20). Part points add up: P1 2+3+3+2 = 10, P2 2+3+2+3 = 10, P5 4+2+3+4+2 = 15.
- Every solution step was checked line by line. Correct throughout:
  - 1(c): σ_b^(2)Ψ = −σ_b^(1)Ψ, the (3.60) contraction, and the check from the four joint probabilities (notes ch. 8 eq. (5.8)).
  - 1(d): the plot formula and the caption (kink at 2π/3).
  - 2(a): the bar bookkeeping and the post-measurement state |v̄_a⟩.
  - 2(b): the parity argument and the 4 × 2 count.
  - 2(c): the overlaps.
  - 3(b): the three swaps.
  - 3(c): ε_kjm = −ε_mjk, and the z-component check.
  - 3(f): both ε contractions, and [L_z, x p_x] = iħ(y p_x + x p_y).
  - 3(g).
  - 5(a): J_x = (ħ/2)(a_x†a_x − a_y†a_y) and J_y = (ħ/2)(a_x†a_y + a_y†a_x), multiplied out by hand.
  - 5(d): J² = ħ²[N_L(N_R+1) + ...] = ħ²(N/2)(N/2+1) = (ħ²/4)[(H/ħω)² − 1].
- Every part ends with a check (a limit, a component or a number).
- Formula boxes: the `vars` ranges are finite and physical, and every listed mistake differs from the answer over the whole range. For p1-lhs, the mistake |cos θ + cos 2θ| + cos θ equals the answer only at isolated points (θ = π/4), and the box samples five random points. Every mistake hint is true of its formula: for example, dropping the absolute value in 1(d) does give cos 2θ, and the "sin² for cos²" slip in 2(d) is the x = y = 1 term.
- Number-box tolerances: 1% for 0.25, 1.5, 60, 0.5, 3.75, 0.5 and 1; 0.5% for 0.842; and the absolute 0.01 for the counts 8 and 3, which `lib/answers.ts` treats as absolute. All are tight enough to reject the nearby wrong values.
- Choice boxes: the right answer sits at positions 2, 1, 0, 3, 2 and 1, so the positions vary. It is never the only longest string (in 1(b) the right string ties with the "1 +" choice, and the fourth choice is longer). No wrong choice is a second right answer: I checked "a × b Hermitian" against r, p, and the 5(e) distractors against the facts.
- Hints: none gives a part's result away. The second hint of 1(b) ("its absolute value is the bracket itself") all but answers the choice box p1-absg, but not the inequality the part asks for (info only).

## Coverage and order
- MIT Problems 1, 2, 3 and 5 are present, with their parts in MIT's order and MIT's points (10, 10, 20, 15). Problem 4 (a Griffiths pointer only) is skipped and explained, which leaves 55 points, as the course note requires.
- Problem 3 states the notes' Exercises 1 to 7 faithfully. I compared each with notes ch. 9 pp. 4 to 8: the identities and conditions match (1.22), (1.35), (1.36), (1.41), (1.43), (1.45), (1.46) and (1.52), and the printed page numbers are right (Exercise 2 spans pp. 5 and 6).
- covers [20, 21] (calendar 20 to 23): this is reasonable. Problems 1 and 2 use Lectures 19 and 20 (notes ch. 8 §5, which the Lecture 20 lesson cites). Problem 3 is notes ch. 9 §1.1 and §1.2 (Lectures 20 and 21). Problem 5 needs only the algebra and multiplets of Lecture 21, whose lesson already previews this hidden angular momentum (angular-momentum-algebra.mdx, around lines 139 to 141). Nothing uses Lectures 22 and 23. The intro says this openly.
- The 5(a) box asks for β², which is right: the algebra fixes β only up to its sign, and the solution explains that β = −1 amounts to a_L → −a_L.

## Licensing
- The sheet has no rights or courtesy notices, and the page has no figures. The only graph is computed from a formula.
- Wording: all in the page's own words. The closing phrase of 5(e) ("so well hidden") echoes MIT's "really well hidden", which is a short phrase and acceptable.
- No textbook (Griffiths) content, no OpenStax or LibreTexts.

## Notes
- Citations checked:
  - Every `cite="mit"` page number matches the printed pages of the sheet: C and g on p. 1; 1(a) to (d) and the Problem 2 state on p. 2; the win condition, 2(b) and the bases on p. 3; 2(c), 2(d) and the Problem 5 set-up on p. 4; 5(a) to (e) on p. 5.
  - reading1 eqs. (5.2), (5.3) and (5.8) are right.
  - reading2 eqs. (1.11), (1.12), (1.18), (1.30), (1.31), (1.40), (1.44), (2.8), (2.10) and (2.13) are right. (2.13) is [J_z, J_±] = ±ħJ_±, checked on the rendered page 12.
  - reading3 eq. (3.60) is (a·σ)(b·σ) = (a·b)1 + i(a × b)·σ, checked on the rendered page 15.
- The 3(d) claim that p × L − iħp returns in Lecture 26 is correct. hydrogen-hidden-symmetry.mdx writes R = (1/me²)(p × L − iħp) − r/r (notes eqs. (7.8) and (7.9)).
- There is no em dash, no stray control character and no `## Summary`. The symbols are covered: content:check reports no symbol error for this page.
- Uncertain: nothing material. I did not run the in-browser answer checker. The equivalences of the boxes were checked by value in NumPy and through the calcs entries.

COUNTS: errors=1 warnings=0 info=4

## Resolution (2026-11-27, by the page author)

- Error 1: both cross-references now point to Problem Set 6 (Problem 6, the oscillator in two dimensions with a_L and a_R), in the intro and in the lead-in of Problem 5; no link to Problem Set 8 is left.
- Info items: kept as they are.

Status set to `reviewed`.
