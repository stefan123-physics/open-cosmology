---
page: content/year-5/8.962/8-962-problem-set-1.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset01/ (read, local pdftotext of the PDF)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/mit8_962s20_pset01_hint/ (read, local pdftotext)
  - 8.962 Lecture 1, 2, 3, 4 transcripts (read, local PDFs; cited pages checked with pdftotext -f N -l N)
  - https://arxiv.org/abs/astro-ph/0703099 (read, abstract page)
  - https://arxiv.org/abs/0806.4302 (read, abstract page)
  - https://physics.nist.gov/cuu/Constants/archive2018.html (not fetched; k = 8.617333262e-5 eV/K is the exact 2019-SI value, which CODATA 2018 lists)
verdict: pass-with-notes
---

# Review: Problem Set 1: Four-vectors, derivatives of fields, the projection tensor and relativistic kinematics

## Blind solve

### My answers (written before opening the full page)
- p1a: (A+B)^2 = A^2 + 2A.B + B^2 = A^2 + B^2 > 0.
- p1b: in rest frame of T, T.N = -T^0 N^0; N null and nonzero gives N^0 != 0, so T.N != 0.
- p2a: U.U = -(1+t^2)^2 + t^4 + 2t^2 = -1, U^t > 0: valid. D.D = -x^2 + 25 t^2 x^2 + 2 t^2, not -1 in general: D is not a 4-velocity.
- p2b: v_x = t^2/(1+t^2), v_y = sqrt2 t/(1+t^2), v_z = 0; |v|^2 = 1 - 1/(1+t^2)^2. t=0 at rest; t -> inf, v -> (1,0,0), speed of light along x.
- p2c: nonzero only d_t U^t = 2t, d_t U^x = 2t, d_t U^y = sqrt2. U_a d_t U^a = -2t(1+t^2) + 2t^3 + 2t = 0.
- p2d: 5t.
- p2e: t: 2tx + 5t + 5t^3; x: 2tx + 5t^3; y: sqrt2 x + 5 sqrt2 t^2; z: 0.
- p2f: -5t (= U.U times part d, since U_a D^b d_b U^a = 0).
- p2g: d_a rho = (2t, 2x, -2y, 0); d^a rho = (-2t, 2x, -2y, 0); d^t rho = -2t.
- p2h: grad_U rho = 2t + 2t^3 + 2t^2 x - 2 sqrt2 t y; grad_D rho = 2tx + 10 t x^2 - 2 sqrt2 t y.
- p3a: U.V_perp = U.V + (U.U)(U.V) = 0. p3b: P^a_c P^c_b = delta + 2UU + (U.U)UU = P; trace P^a_a = 4 - 1 = 3. p3c: P_ab V_perp W_perp = V_perp.W_perp + (U.V_perp)(U.W_perp). p3d: q.V_perp = 0 and P^2 = P directly; for null q the formula divides by zero, and q lies in its own orthogonal complement, so no unique projector exists; a transverse (2-d) projector needs a second null vector l with k.l = -1: P = eta + k l + l k.
- p4: with Lambda_B(v) = [[g, -g v^T],[-g v, 1 + (g-1) v v^T/v^2]] (components into the moving frame), Lambda = 1 + [K1, K2] + O(v^3); numerically (v1 = 1e-3 x, v2 = 2e-3 y) Lambda^x_y = +v1 v2, Lambda^y_x = -v1 v2, no time-space terms at second order. A rotation about the z axis, i.e. the direction of v1 x v2, angle v1 v2. Sense: as a change of components x' = x + v1v2 y, y' = y - v1v2 x, this is the frame's axes turned by +v1v2 about v1 x v2 (equivalently a vector actively turned by v1v2 about -(v1 x v2)).
- p5a: v_app = v sin(theta)/(1 - v cos(theta)) (light-travel-time shortening of the observed interval by factor 1 - v cos theta).
- p5b: cos theta = v; v_max = v/sqrt(1-v^2) = gamma v; > 1 for v > 1/sqrt2 = 0.7071; no violation (illusion from light travel time, nothing moves faster than light).
- p5c: v -> 1 gives v_app = cot(theta/2) >= 10, theta_max = 2 arctan(0.1) = 11.42 deg.
- p6a: kT = 2.3525e-4 eV (2.3525 in units of 1e-4 eV); E_th = (2 m_N m_pi + m_pi^2)/(4 kT) = 2.885e11 GeV (exact head-on kinematics gives the same to 1e-20 relative).
- p6b: above threshold nucleons lose ~20% energy per pion production on CMB photons, mean free path a few Mpc; any nucleon from far away is degraded below ~1e20 eV; Planck tail lowers the effective threshold.
- p6c: nearby sources (< ~50-100 Mpc), heavy nuclei instead of nucleons, top-down decays of superheavy relics in the halo, new physics (Lorentz-invariance violation), neutral messengers.

### Comparison (one line per answer id)
- p2a-dd: page -x^2 + 25t^2x^2 + 2t^2 = mine. Agree.
- p2a-d: page choice 1 (no, D.D varies, -1 only at special events) = mine. Agree.
- p2b-vx: t^2/(1+t^2) = mine. Agree.
- p2b-vy: sqrt2 t/(1+t^2) = mine. Agree.
- p2b-lim: choice 3 (rest at t = 0, speed -> 1 along x) = mine. Agree.
- p2c-dtut: 2t = mine. Agree.
- p2d-div: 5t = mine. Agree.
- p2e-t / p2e-x / p2e-y: 2tx + 5t + 5t^3, 2tx + 5t^3, sqrt2 x + 5 sqrt2 t^2 = mine. Agree.
- p2f: -5t = mine (also checked numerically at t = 1.3, x = 0.7: -6.5 both ways). Agree.
- p2g-up: -2t = mine. Agree.
- p2h-u: 2t(1+t^2) + 2xt^2 - 2sqrt2 ty = mine. Agree.
- p2h-d: 2tx + 10tx^2 - 2sqrt2 ty = mine. Agree.
- p3b-trace: 3 = mine. Agree.
- p3d-null: choice 0 (fails, q in its own orthogonal space) = my reading; the page's extra screen projector eta + q l + l q with l.q = -1 = mine; its example q = (1,1,0,0), l = (1,-1,0,0)/2 gives diag(0,0,1,1), recomputed. Agree.
- p4-axis: choice 2 (v1 x v2) = mine. Agree.
- p4-angle: v1 v2 = mine. Sense: page says, with the lesson's passive reading, x' = x + psi y, y' = y - psi x are components along axes turned by psi from v1 towards v2 (counterclockwise about v1 x v2), and vectors turn the other way in the active reading. My exact numerical product of the four 4x4 boosts (v1 = 1e-3 x, v2 = 2e-3 y) gives Lambda^x_y = +1.0000025 v1v2, Lambda^y_x = -1.0000025 v1v2: same signs and same reading. Agree.
- p5b-cos: v = mine. p5b-max: v/sqrt(1-v^2) = mine. p5b-vmin: 0.7071 = mine. Agree.
- p5c-theta: 11.42 deg = mine (2 arctan 0.1 = 11.4212 deg). Agree.
- p6a-kt: 2.353 (x 1e-4 eV) = mine (2.35253). Agree.
- p6a-eth: 2.885e11 GeV = mine (2.88503e11 GeV; exact head-on kinematics gives the same). Agree.
- Show-that parts (p1a, p1b, p3a, p3c, p5a, p6b, p6c): page arguments agree with mine.

No disagreement between my blind answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Problem 3(d), box p3d-null | "Do we need a projection tensor for null vectors?" | The box asks what the formula does for a null q; the "do we need" answer (no unique projector from q alone; a second null vector gives a 2-d screen projector) is in the solution, flagged as the page's reading of an open question | None needed; optionally relabel the box "For a null vector, a projection tensor built from q alone:" so it answers MIT's question directly |
| 2 | info | Problem 6(b), solution | "Explain why one might expect to observe very few cosmic rays of energy above ~1e11 GeV" | Qualitative argument ("a large enough stretch of intergalactic space") with no distance scale | Optional: add the order of the energy-loss distance (tens of Mpc, so sources beyond roughly 100 Mpc cannot contribute) with a citation; I did not verify a specific number, so cite one before adding |
| 3 | info | Problem 4 statement | "Lorentz boost associated with 3-velocity v" (no convention) | Fixes the passive convention of the lessons and discusses the other reading in 4(c) | None: correctly flagged; sign of AB - BA is convention-independent, checked |
| 4 | info | Problem 6(c) | "Griesen-Zatsepin-Kuzmin" | "Greisen-Zatsepin-Kuzmin", correction stated in the introduction | None |

## Arithmetic and answer checks
- Every number recomputed (script in the review scratch folder): Problem 1 examples (9, 3, 12, 5, 5, -13, (4,0,0,0) timelike); D.D = 26 at t = x = 1; v = (0.5, 0.707), speed 0.866, gamma = 2 at t = 1; 2(f) direct contraction; 2(g) square of the gradient; Problem 4 exact entries at v1 = v2 = 0.1: Lambda_yx = -0.010101, Lambda_xy = 0.0101008 (page 0.010101, correct to the digits shown), Lambda_tx = 0.000509 (closed forms on the page match the numerical product to 1e-14); 0.01 rad = 0.57 deg; 5(b) v = 0.6 example (0.75, 53.13 deg); 5(c) 10/sqrt101 = 0.99504, 5.71 deg, v_app(11.42 deg, 0.999) = 9.52; 6(a) kT = 2.3525e-4 eV, 135 x 2011 = 271485 MeV^2, E_th = 2.8850e20 eV, gamma = 3.08e11, photon in nucleon frame 144.7 MeV = m_pi + m_pi^2/(2 m_N), 46.2 J; 6(b) mean photon energy 2.701 kT and threshold 1.07e11 GeV.
- Problem 4 second-order bookkeeping (six cross products AB - A^2 - AB - BA - B^2 + AB plus squares A^2 + B^2 = AB - BA) checked by hand; K_xK_y has its 1 in row x, column y: correct.
- Answer boxes: every expr equals the solution's result; vars ranges keep all formulas finite (p4-angle on [0.01, 0.2], p5b on [0.1, 0.95]); the formula checker compares at relative 1e-6, and every listed mistake differs from the answer over the whole range (v1^2 + v2^2 >= 2 v1 v2 > v1 v2; sqrt(1-v^2) equals v only at one point). Each mistake hint is true of its formula.
- Number tolerances: p6a-eth 2% rejects the factor-2 slip (5.77e11), m_pi m_N/(2kT) (2.69e11, -6.7%) and the mean-photon value (1.07e11), accepts T = 2.725 K (2.890e11); p5c-theta 1% rejects 5.71 deg; p5b-vmin and p6a-kt 1% fine for 3 significant figures.
- Choice boxes: right answers at positions 1, 3, 0, 2; lengths of the right answer are neither longest nor shortest in any box (p2a-d 84 of [100, 84, 62, 93]; p2b-lim 92 of [84, 90, 110, 92]; p3d-null 93 of [93, 107, 77, 91]; p4-axis 39 of [34, 44, 39, 43]). No distractor is also true.
- calcs: `pytest tests/calc -k 8-962-problem-set-1`: 85 passed.
- Every solution ends with a "Check the result" step (units, limit, other sign convention, or a number).
- Hints: none gives a final result away (6(a) hint 2 gives the threshold condition, not the energy; 5(b) hint 2 says "a familiar name", not gamma v).

## Coverage and order
- All six MIT problems, in MIT's order, with MIT's parts in order. Points match MIT part by part: P1 5+5, P2 8 x 3 = 24, P3 4 x 5 = 20, P4 15 (split 8+3+4 by the page, stated), P5 7+5+3, P6 8+5+3.
- MIT's clarification sheet (t, x, y are Cartesian coordinates) is built into the statement and the first hint of 2(a), as the page says.
- Additions (trace in 3(b), threshold speed in 5(b), kT in 6(a), the note in 1(b) that the null vector is not zero) are all marked.

## Citations
- MIT sheet pages: Problem 2 p. 1, Problems 3 and 4 p. 2, Problems 5 and 6 p. 3: all match the printed pages.
- Transcripts have no printed page numbers (checked), so PDF pages are used, as the page says. Checked: L1 pp. 15-16 (Lorentz transformation and its matrix), L2 p. 10 (timelike vector along an observer's time axis; C.C = A.A + B.B + 2A.B), L2 p. 11 (eta_ab), L2 p. 15 (u = (gamma, gamma v)), L2 p. 16 (u.u = -1, p.p = -m^2), L2 p. 17 (-E^2 + |p|^2, conservation of total 4-momentum), L3 p. 10 (d phi/d tau = u^a d_a phi), L3 p. 14 (lowering), L3 p. 15 (raising), L4 p. 3 (photon 4-momentum with a unit vector), L4 p. 10 (d_a = d/dx^a). All correct.
- Lesson claim "the 4-acceleration is orthogonal to the 4-velocity" is in basis-vectors-metric-four-momentum (transcript p. 20). Correct.
- HiRes (astro-ph/0703099, PRL 100, 101101, 2008): GZK suppression at about 6e19 eV, five standard deviations, consistent with the expected cutoff: matches the abstract. Auger (0806.4302, PRL 101, 061101, 2008): title states suppression above 4e19 eV: matches. Both marked as later developments and cited only through arXiv abstract pages.

## Licensing
- No figures. MIT sheets and transcripts carry no "rights reserved" or "courtesy" notice (grep). Statements are rewritten in the page's own words; no verbatim MIT sentences beyond standard terminology. No OpenStax or LibreTexts. Strict publishers (APS) cited via arXiv only.

## Notes
- Symbols: all 90 page-scoped meanings in data/symbols.json read against the page; each fits every use (gamma as Lorentz factor, index in Problem 3 and photon in Problem 6; T as timelike vector in 1(b) and temperature in 6; N as null vector and nucleon; A, B as 4-vectors and as the Problem 4 matrices; x', y' with the passive rotation form used in 4(a)).
- No em dashes; no `## Summary` with answers.
- Introduction notes correctly that the sheet header reads "8.962 Spring 2006".

COUNTS: errors=0 warnings=0 info=4

## Resolution (2026-11-27, by the page author)

- No errors or warnings. The four info notes need no change (the p3d-null label and the 6(b) distance scale are optional and left as they are).
- `status: reviewed`.
