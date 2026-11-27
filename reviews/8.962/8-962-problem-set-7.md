---
page: content/year-5/8.962/8-962-problem-set-7.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset07/ (read: pdftotext of the PDF, p. 2 also rendered with pdftoppm)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset07_hint/ (read: pdftotext and rendered p. 1)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/7395ae025351f820f17dd472b416c76d_9lIgAPvppk0.pdf (Lecture 14 transcript, read, downloaded by the reviewer; pp. 8, 9, 10, 13, 14, 15 checked)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/74c32c0e424e0f751ce90b937405cb41_Oxk2nnuC130.pdf (Lecture 15 transcript, read, downloaded by the reviewer; pp. 5, 9, 10, 11, 12, 13, 14 checked)
  - Carroll, MTW, Jackson (not fetched, by course rule; nothing on the page depends on them)
verdict: pass-with-notes
---

Writer: Opus. Reviewer: Opus (same model, blind).

# Review: Problem Set 7 (8.962): gravitomagnetism, linearized gravity beside Maxwell, a Lagrangian, gauge invariance

## Blind solve

Written before the full page or its calcs file was opened (only the stripped statements, MIT's sheet and hint sheet, and renders of sheet p. 2 and hint p. 1 were read). Conventions of the page: signature (-,+,+,+), c = 1, h_{0i} lower indices.

### My answers
- **p1a**: v = Omega zhat x x = Omega(-y, x, 0); T^{0i} = rho v^i, so T_{0x} = -rho v^x = **rho*Omega*y**, T_{0y} = -rho*Omega*x, T_{0z} = 0, T_{00} = rho, T_{ij} = 0 (pressure neglected). At second order in Omega: T_{00} (gamma^2 rho = rho(1 + v^2)) and T_{ij} = rho v_i v_j (T_xx, T_xy = T_yx, T_yy) change; T_{0i} changes only at third order; T_{zz}, T_{xz}, T_{yz} stay 0.
- **p1b**: h_{0x} = 16 pi G rho Omega R^5 y / (15 r^3); h_{0y} = -16 pi G rho Omega R^5 x / (15 r^3); h_{0z} = 0. (Integral of y'^2 over the ball = 4 pi R^5/15; the 1/r term integrates to 0.)
- **p1c**: I = (2/5) M R^2 = 8 pi rho R^5/15, so h_{0x} = **2 G S y / r^3**, h_{0y} = -2 G S x / r^3 (S = S^z).
- **p1d**: h_{0r} = 0, h_{0theta} = 0, h_{0phi} = **-2 G S sin^2(theta) / r** (matches the Kerr g_{t phi} = -2GMa sin^2 theta / r at large r).
- **p2a**: d^2x^i/dt^2 = -Gamma^i_{00} - 2 Gamma^i_{0j} v^j + O(v^2); Gamma^i_{00} = d_i Phi, Gamma^i_{0j} = (1/2)(d_j h_{0i} - d_i h_{0j}); so a = g + v x (curl w) with w_i = h_{0i}. The stated law holds for h_{0i} = +beta_i (cross term +2 beta_i dx^i dt). With MIT's printed line element (-2 beta_i dx^i dt, h_{0i} = -beta_i) one gets a = g - v x H. **The page's claim of a sign inconsistency on the sheet is correct** (render of sheet p. 2 shows "- 2 beta^i dx^i dt" and "h^{0i} = -beta^i"; h^{0i} = eta^{00} eta^{ii} h_{0i} = -h_{0i}, so the line element gives h^{0i} = +beta^i).
- **p2b**: Lorenz gauge, static: d_j h_{0j} = 0 so div beta = 0; nabla^2 hbar_{0i} = -16 pi G T_{0i} = +16 pi G rho v^i, so **nabla^2 beta_x = 16 pi G J_x**; curl H = grad(div beta) - nabla^2 beta = -16 pi G J. div g = -nabla^2 Phi = -4 pi G rho.
- **p2c**: Sign: like masses attract (spin-2 / mass always positive, gravity attractive) whereas like charges repel. Factor 4: h_{0i} couples to T_{0i} with the same 16 pi G as hbar_{00} = -4 Phi to T_{00}; Phi is defined as -hbar_{00}/4 while beta_i = hbar_{0i} without the 1/4 (equivalently the source is a rank-2 tensor: T_{0i} enters h_{0i} directly, and the force law has 2 Gamma^i_{0j}). Choice boxes not visible blind.
- **p3a**: naive E^{ab} = d_g d^a h^{gb} - (1/2) d^a d^b h - (1/2) box h^{ab} - (1/2) eta^{ab} d_m d_n h^{mn} + (1/2) eta^{ab} box h; the first two Einstein terms become twice the first. Responsible: **the second term, -(d_mu h^{rho sigma})(d_rho h^mu_sigma)** (the only one not symmetric under the swap of a pair of h indices).
- **p3b**: **E^{ab} = G^{ab}** (same sign, factor 1); field equation G^{ab} = 0 (linearized vacuum Einstein equation; with a source coupling, G^{ab} = 8 pi G T^{ab}).
- **p3c**: h = -4 Phi; **G_00 = 2 nabla^2 Phi = 2L**; 2 nabla^2 Phi = 8 pi G rho gives nabla^2 Phi = 4 pi G rho. (G_ij = 0, G_0i = 0.)
- **p4a**: delta R_{a m b n} = 0 identically (partial derivatives commute).
- **p4b**: **h_tx = -2 a x**.
- **p4c**: R_txtx = d_x^2 Phi = **-2 G M / r^3** on the x axis.
- **p5a**: both invariant (Theta: -2 nabla^2 C + 2 nabla^2 C; Xi: -B_dot + B_dot). Third invariant -phi + gamma_dot - (1/2) lambda_ddot (or its negative). Choice box options not visible blind.
- **p5b**: phi = Phi_N, beta = gamma = epsilon = lambda = 0, h^TT = 0, H = -6 Phi_N, so **Theta = -2 Phi_N**, Xi = 0, the other invariant (-phi + gamma_dot - lambda_ddot/2) = -Phi_N.
- **p5c**: d = n - 1; d(d+1)/2 - 1 - d = **n(n - 3)/2** (n = 4: 2; n = 5: 5; n = 3: 0).

### Numerical / symbolic checks (Python, sympy; scripts in the reviewer's scratch folder, not in the repo)
- P1(b): sympy triple integral over the ball of 4G T_{0i} (1/r + x_j x'_j/r^3): `h0x = 16*pi*G*Omega*R**5*rho*y/(15*r**3)`, `h0y = -16*pi*G*Omega*R**5*rho*x/(15*r**3)`. Substituting Omega = S/I with I = (2/5)(4/3 pi R^3 rho) R^2: `2*G*S*y/r**3`.
- P1(d): Jacobian projection gives `h0r = 0`, `h0theta = 0`, `h0phi = -2*G*S*sin(theta)**2/r`.
- P2(a): Christoffels of the full metric to O(eps), geodesic reduced to coordinate time, O(v^2) dropped: with h_{0i} = +beta_i, `acc - (g + v x H) = [0, 0, 0]`; with h_{0i} = -beta_i (MIT's printed line element) the residual is -2 v x H, i.e. a = g - v x H.
- P3: all 64 first derivatives d_g h_ab treated as symbols; E^{ab} = -d_g dL/d(d_g h_ab) with derivatives replaced by symmetric second-derivative symbols. Naive variation: E - G_naive = 0 for all 16 components and E not symmetric; symmetrized variation: E^{ab} - G^{ab} = 0 for all 16 components.
- P3(c): linearized G_{mn} of h = -2 Phi(x,y,z) diag(1,1,1,1): `G00 = 2*lap(Phi)`, `G11 = 0`.
- P4(a): delta R_{a m b n} for generic xi_mu(t,x,y,z): all 256 components zero. P4(b): h_new matrix has only h_tx = h_xt = -2*a*x. P4(c): `R_txtx = -2*G*M/r**3` at (r,0,0).
- P5(c): d(d+1)/2 - 1 - d vs n(n-3)/2 for n = 3..7: 0, 2, 5, 9, 14 both ways.

### Comparison (opened the full page and calcs file only after the section above was written)
One line per answer id: page value vs mine.
- p1a-t0x: page `rho*Omega*y`; mine rho*Omega*y. **Agree.**
- p1a-second: page choice 2 (T00 and Txx, Txy, Tyy); mine the same. **Agree.**
- p1b-h0x: page `16*pi*G*rho*Omega*R^5*y/(15*r^3)`; mine identical (sympy integral). **Agree.**
- p1b-h0y: page `-16*pi*G*rho*Omega*R^5*x/(15*r^3)`; mine identical. **Agree.**
- p1c-h0x: page `2*G*S*y/r^3`; mine identical. **Agree.**
- p1d-h0phi: page `-2*G*S*sin(theta)^2/r`; mine identical; h0r = h0theta = 0 on both. **Agree.**
- p2a (no box): page derives a = g + v x H with h_0i = +beta_i and states the printed sign gives g - v x H; my sympy geodesic gives exactly that (residual 0 for +, -2 v x H for -). **Agree.**
- p2b-lap: page `16*pi*G*J`; mine 16 pi G J_x. **Agree.**
- p2c-sign: page choice 2 (attraction of like masses); mine the same reason. **Agree.**
- p2c-four: page choice 0 (trace reversal x cross term counted twice); mine the same reason (Phi = -hbar_00/4, beta = hbar_0i). **Agree.**
- p3a-term: page choice 3 (the second term); mine the second term. **Agree.**
- p3b-rel: page choice 3 (E = G, same sign and size); mine E^{ab} = G^{ab} (sympy, all 16 components). **Agree.**
- p3c-g00: page `2*L`; mine 2L. **Agree.**
- p4a (no box): page cancellation in pairs; mine sympy, all 256 components of delta R zero. **Agree.**
- p4b-htx: page `-2*a*x`; mine -2ax. **Agree.**
- p4c-rtxtx: page `-2*G*M/r^3`; mine -2GM/r^3. **Agree.**
- p5a-inv: page choice 2 (H minus the Laplacian of lambda); mine the same (3 Theta). **Agree.** My blind extra "third invariant -phi + gamma_dot - lambda_ddot/2" was my slip (I used the sign convention of the Flanagan-Hughes paper, h_tt = +2phi). Under the page's stated rules, sympy: change of (phi + gamma_dot - lambda_ddot/2) = 0, change of (-phi + gamma_dot - lambda_ddot/2) = -2 A_dot. So the page's Phi = phi + gamma_dot - lambda_ddot/2 is right and mine was wrong; no box depends on it.
- p5b-theta: page `-2*Phi`; mine -2 Phi_N. **Agree.** (The page's Phi = Phi_N for the third invariant is right, see the line above; my blind -Phi_N was the same slip.)
- p5c-count: page `n*(n-3)/2`; mine n(n-3)/2. **Agree.**

No disagreement in any boxed answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 3(a), second `<Hint>` and box `p3a-term` | Hint sheet: the asymmetry comes from the second term | Hint 2 says "The second term gives the same thing from both of its factors: 2 ∂^α h^{γβ}. Is that symmetric in α and β?", which names the answer of the choice box; the statement of part (b), visible on the page, also says "replace the second term by its average" | Reword hint 2 so it does not name the term, e.g. "Work out the derivative of each of the four products. Three of them are symmetric in α and β for a reason you can see at once (they hold h^{αβ}, η^{αβ} or ∂^α∂^β as a whole). Which one is left?" Part (b) still names the term; if that is judged too much, drop the box `p3a-term` and leave (a) as a self-marked "show" part. |
| 2 | warning | Problem 5(a), box `p5a-inv` | (own problem) | The statement asks to show Θ = ⅓(H − ∇²λ) is invariant, then asks to pick "the one combination that is gauge invariant"; the correct choice "H minus the Laplacian of λ" is 3Θ, so the box is answered by the statement itself | Replace the correct choice with the invariant the statement does not give: "φ plus the time derivative of γ minus half the second time derivative of λ" (the lesson's Φ; sympy: its change is 0 under the page's rules), keep the three distractors, and in the solution step "The choices" say that this one is invariant and that H − ∇²λ = 3Θ was shown above. |
| 3 | info | Introduction, "Three details of the sheet" | Sheet p. 2 prints the cross term as "− 2β^i dx^i dt" (upper index on β) and "h^{0i} = −β^i" | "the sheet's line element has the cross term $-2\beta_i\,dx^i\,dt$" | Optional: quote it as printed, $-2\beta^i\,dx^i\,dt$, and add that index placement on space indices does not matter here. The substance of the claim is correct (see Notes). |
| 4 | info | Problem 2(a), solution, "Check the result" | Sheet does not state time independence in (a) | Says only what changes if β depends on time (g gains −∂_tβ) | Optional: add that a time-dependent Φ also adds terms of first order in v (from Γ^t_tt and from ∂_t h_ij in Γ^i_tj), so the clean Lorentz form needs static Φ as well. |
| 5 | info | Problem 5, Formulas cited to the Lecture 15 transcript pp. 9, 11 and the text of 5(a) | Transcript p. 12 says "theta as 1/2 h minus Laplace operator on lambda" and "beta i minus 1/2 epsilon i"; p. 11 gives the gauge rules without signs | Uses ⅓(H − ∇²λ) and β_i − ½ε̇_i, signs as in the lesson | None needed: the introduction says transcript-cited formulas are printed in the lesson's form, and the lesson already notes the transcript's wording. The forms used are the correct invariant ones (verified by sympy). |
| 6 | info | Problem 3, "Check the result" steps | (n/a) | The Lagrangian variation was checked "outside the calculation file (NumPy, while writing)" | Optional: add a formula check to the calcs file. This review's independent sympy check (Blind solve) confirms both results: naive E^{ab} equals G^{ab} with the first two terms replaced by twice the first, and the symmetrized E^{ab} = G^{ab}. |

## Arithmetic and answer checks
- All 20 calcs entries pass: `.venv/bin/python -m pytest tests/calc -q -k 8-962-problem-set-7` → 20 passed. The calcs routes are independent of the page (full 1/|x − x'| integral done numerically for 1(b) and the interior field; numerical Jacobians for 1(d); Lorenz-gauge route for 3(c)).
- `content:check` in the worktree: 0 errors; the only warning on this page is the missing review file.
- My own independent checks (sympy, listed under Blind solve) reproduce every boxed value and every "show" result.
- Further values in solutions recomputed by hand/sympy: ∫y'² d³x' = 4πR⁵/15; I = 8πρR⁵/15; interior field (16π/3)GρΩy(R²/2 − 3r²/10): Laplacian ∇²[y f(r)] = y∇²f + 2∂_y f = y(−9/5 − 6/5) = −3y, times (16π/3)GρΩ gives −16πGρΩy = 16πG J_x with J_x = −ρΩy (correct), and it matches the exterior value 16πGρΩR²y/15 at r = R; Kerr far field −4GMa r sin²θ/ρ² → −4GS sin²θ/r (correct); R_txtx and the geodesic-deviation sign (+2GM δx/r³, stretching) correct; 10 = 4 + 4 + 2 and n(n+1)/2 − 2n = n(n−3)/2 correct.
- Every `mistakes` hint checked against its formula: p1a (T^{0x}, T^{0y}, T_{0y}), p1b (sign, ∫r'² = 3×, missing 4, r²), p1c (sign, 4S, I = MR² gives 4/5), p1d (sign, unit-vector component h_0φ/(r sinθ)), p2b (sign, 4πG, 8πG), p3c (missing ½ → 4L, missing −η₀₀∂∂h → 3L, wrong trace sign → −2L), p4b, p4c (∂_y²Φ = +GM/r³ on the x axis), p5b, p5c ((n−1)(n−2)/2 is one more than the answer): all true of the formula they name.
- `vars` ranges: all finite and physical (r > R in 1(b), r ≥ 1 in 4(c), Phi negative in 5(b), n ∈ [4, 10]). Mistakes differ from the answers by factors of at least 4/3 or a sign, so any 3-figure tolerance separates them.
- Points: 30 + 25 + 20 + 13 + 12 = 100; each exercise's parts add up. MIT gives no points; the page says so.

## Coverage and order
- Problems 1 and 2 follow MIT's sheet part by part, same physics and order, in the page's own words (no sentence copied; standard phrases only).
- Problem 3 follows MIT's hint sheet (the only MIT text for it): Lagrangian, naive variation, the two symmetrizations. Part 3(c) is marked as an addition.
- Problems 4 and 5 are the page's own (MIT gives only Carroll pointers, not used). They fit Lectures 14–15: 4 uses the gauge transformation and linearized Riemann tensor of Lecture 14 (transcript pp. 8–10), 5 the scalar-vector-tensor split, gauge rules, invariants and the counting of Lecture 15 (pp. 9–12, 14). Both are correct (sympy checks above).
- Additions are flagged where they appear (1(a) choice box, 2(a) time independence, 2(b) box, 2(c) boxes, 3(c)).

## Licensing
- Neither MIT sheet carries "All rights reserved" or "Courtesy of" (grep of both texts and visual check of the rendered pages). No figure is reproduced or redrawn. Carroll, MTW and Jackson are not used; the page says so. No OpenStax or LibreTexts. No em dashes in the page (grep count 0); no `## Summary` with answers.

## Notes
- **Sign inconsistency on MIT's sheet (Problem 2): verified.** The rendered sheet p. 2 shows the line element "… − 2β^i dx^i dt ;" followed by "with h^{0i} = −β^i". The cross term 2h_{0i} dx^i dt gives h_{0i} = −β_i, so h^{0i} = η^{00}η^{ii}h_{0i} = +β^i, contradicting the next line. My sympy geodesic (full Christoffels, O(ε), O(v)) gives a = g + v × H exactly for h_{0i} = +β_i and a = g − v × H for h_{0i} = −β_i; and the field equation ∇²h̄_{0i} = −16πG T_{0i} = +16πG ρv_i with ∇·β = 0 gives ∇ × H = −16πG J only for h_{0i} = +β_i. The page's choice (+2β_i dx^i dt, h_{0i} = β_i, h^{0i} = −β^i) is the one consistent with everything MIT asks you to show, and the page explains it in the introduction and in the 2(a) check.
- Transcript citations checked against PDF pages (the 8.962 transcripts have no printed footer): L14 p. 8 gauge transformation, p. 9 Riemann tensor and the eight-term remark (continuing on p. 10), p. 10 Einstein tensor, p. 13 Lorenz-gauge field equation, p. 14 static limit h̄₀₀ = −4Φ, p. 15 announcement of the rotating body on "P set number 7" and the gravitoelectric/gravitomagnetic names; L15 p. 5 the 4G retarded-integral solution, p. 9 the split, pp. 9–10 counting (TT: 6 − 1 − 3 = 2), p. 11 the gauge rules, p. 12 the invariants and the count of 6, p. 14 G_tt = −∇²Θ. All correct. Sheet citations: Problem 1 and the integral formula on p. 1, the expansion and Problems 1(c), 1(d), 2, 2(a) on p. 2, 2(b) on p. 3; hint sheet p. 1. All correct.
- Kerr link: the linked lesson event-horizons-kruskal-kerr has the Boyer–Lindquist cross term −4GMar sin²θ/ρ² dt dφ, which tends to the page's −(4GS sin²θ/r) dt dφ.
- Same-model safeguard: answers were written to this file before the page was opened; all derivations were checked with my own sympy code, not by reading.

COUNTS: errors=0 warnings=2 info=4

## Resolution (2026-11-27, by the page author)

- Warning 1: the second hint of Problem 3(a) no longer names the term. It now says to work out the derivative of each product and notes that three are symmetric at a glance (they hold h^{αβ}, η^{αβ} or ∂^α∂^β as a whole). The `p3a-term` box stays: the reader must still pick which term is not symmetric.
- Warning 2: in Problem 5(a) the right choice is now "φ plus the time derivative of γ minus half the second time derivative of λ" (the lesson's Φ), since the statement already shows H − ∇²λ = 3Θ is invariant. The step "The choices" says why that one is invariant and why 3Θ is not among the choices.
- Info 3: the introduction now quotes the sheet's cross term as printed, −2β^i dx^i dt.
- Info 4: no change. The 2(a) solution already restricts to fields that do not change in time (Γ^t_tt vanishes only then).
- Infos 5 and 6: no change.
- `status: reviewed`.
