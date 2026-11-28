---
page: content/year-2/18.06/18-06-problem-set-6.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-17-orthogonal-matrices-and-gram-schmidt/ (not opened; the set's statements are our own, so only the transcripts were needed)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/96a31504ec5d489d84113320b593eb0d_Y_Ac6KiQ1t0.pdf (Lecture 15 transcript, read, 22 PDF pages)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/b05d83bbdd6bcc995f2f8002093010c6_osh80YCg_GM.pdf (Lecture 16 transcript, read, 19 PDF pages)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/e87f2914b2eb2f53e38688040c04b9b1_0MtwqhIwdrI.pdf (Lecture 17 transcript, read, 24 PDF pages)
verdict: pass-with-notes
---

# Review: Problem Set 6: projections, least squares and Gram–Schmidt

Writer: Opus. Reviewer: Opus (same model, blind).

Worktree reviewed: `.claude/worktrees/ps-1806-6`, commit ac0671a "18.06 Problem Set 6 (draft)". Not opened, as instructed: Strang's textbook, MIT's problem-set and solution PDFs, MIT's quiz and final PDFs (the `mit18_06s10_exam*` / `final*` files in the scratch folder were not opened).

## Blind solve

Written from `stripped-set-6.mdx` only, before the full page, its calcs or its symbol meanings were opened. Every value computed in numpy with exact fractions (scratch script `rv6/solve2.py`) and checked by multiplying back.

My answers:
- 1(a) x̂ = aᵀb/aᵀa = 18/9 = 2; p = (2, 4, 4); e = (2, −3, 2), aᵀe = 0.
- 1(b) P = aaᵀ/9 = (1/9)[[1,2,2],[2,4,4],[2,4,4]]; P₂₃ = 4/9 = 0.4444; P₁₁ = 1/9 = 0.1111; Pw = (0, 0, 0) (w ⟂ a). P² = P checked.
- 1(c) P² = a(aᵀa)aᵀ/(aᵀa)² = aaᵀ/aᵀa = P; for −3a the factor 9 cancels top and bottom. Checked numerically.
- 2(a) AᵀA = [[2,2],[2,5]], Aᵀb = (2, −1); x̂ = (2, −1); p = (2, −1, 0); e = (−2, −4, 2); ‖e‖² = 24; Aᵀe = 0.
- 2(b) n = (1, 2, −1); P = I − nnᵀ/6 = [[5/6, −1/3, 1/6], [−1/3, 1/3, 1/3], [1/6, 1/3, 5/6]]; P₁₁ = 5/6 = 0.8333, P₁₂ = −1/3 = −0.3333. Equals A(AᵀA)⁻¹Aᵀ; Pb = p.
- 2(c) b − Ax = (b − Ax̂) + A(x̂ − x), the first is in N(Aᵀ), the second in C(A), so cross term 0 (Pythagoras). Checked at a random x.
- 3(a) A = [1 t] with t = (−1,0,1,2); AᵀA = [[4,2],[2,6]], (AᵀA)₂₂ = 6; Aᵀb = (6, 7), second entry 7; C = 11/10 = 1.1, D = 4/5 = 0.8.
- 3(b) p = (0.3, 1.1, 1.9, 2.7); e = (−0.3, −0.1, 1.1, −0.7); error at t = 2: −0.7; ‖e‖² = 1.8.
- 3(c) Aᵀb = (4 + β, 5 + 2β) [slip in my note: the second entry is 3 + 2β; D below was computed numerically from the matrices and is unaffected]; D = (2 + 3β)/10 (C = (9 + β)/10). β = 12: C = 2.1, D = 3.8, error at t = 2 = 12 − 9.7 = 2.3.
- 3(d) Aᵀe = 0: row of ones gives Σeᵢ = 0, row of times gives Σtᵢeᵢ = 0. Checked (both ≈ 0).
- 4(a) P = (1/25)[[9,12],[12,16]]; I − P = (1/25)[[16,−12],[−12,9]], projects onto the line through (−4, 3) (perpendicular to a); (I − P)₁₂ = −0.48.
- 4(b) R = (1/25)[[−7,24],[24,7]], R₁₂ = 0.96; Rw = (1.64, 1.52), second entry 1.52; for (1, m): R₁₂ = 2m/(1 + m²) (checked at m = 0.5, 1, 2, 3).
- 4(c) Rᵀ = 2Pᵀ − I = R; R² = 4P² − 4P + I = I; so RᵀR = I, R square: orthogonal.
- 4(d) AᵀA invertible ⇔ columns independent ⇔ c ≠ 1 (c = 1 makes the columns equal; c = 0 is fine). Rank checked at c = 0, 1, −1, 2, 0.5.
- 5(a) A = (1,1,1,1); Aᵀb = 8, AᵀA = 4, B = b − 2A = (−1, 1, −1, 1); Aᵀc = 8, Bᵀc = 4, BᵀB = 4, C = c − 2A − B = (1, −1, −1, 1); ‖A‖ = ‖B‖ = ‖C‖ = 2; q's = A/2, B/2, C/2. B₁ = −1, C₄ = 1, ‖C‖ = 2.
- 5(b) R = QᵀM = [[2,4,4],[0,2,2],[0,0,2]]; R₁₂ = 4, R₂₃ = 2. QR = M checked.
- 5(c) Qᵀd = (5, 1, 0): q₂ᵀd = 1; p = (2, 3, 2, 3), fourth entry 3; ‖d − p‖² = 4. Same p from the normal equations MᵀMx̂ = Mᵀd.
- 6(a) QᵀQ = I; Q⁻¹ = Qᵀ = (1/7)[[2,3,6],[6,2,−3],[3,−6,2]]; (Q⁻¹)₁₂ = 3/7 = 0.4286.
- 6(b) x = Qᵀ(0,7,0) = (3, 2, −6); third entry −6. Qx = (0,7,0) checked.
- 6(c) ‖Qx‖² = xᵀQᵀQx = xᵀx.
- 6(d) M₁: yes (orthogonal, a reflection); M₂: no (MᵀM = I/2, columns orthogonal but length 1/√2); M₃: no (orthonormal columns, MᵀM = I, but not square).

### Comparison with the page (one line per answer id)

All 37 boxes agree with my blind answers; there is no disagreement to settle.

- p1-a-x: page 2, mine 2. Agree.
- p1-a-e2: page −3, mine −3 (e = (2, −3, 2)). Agree.
- p1-b-23: page 0.4444, mine 4/9. Agree.
- p1-b-11: page 0.1111, mine 1/9. Agree.
- p1-b-pw: page "the zero vector" (choice 1), mine Pw = 0. Agree.
- p2-a-x1: page 2, mine 2. Agree.
- p2-a-x2: page −1, mine −1. Agree.
- p2-a-e: page 24, mine 24. Agree.
- p2-b-11: page 0.8333, mine 5/6. Agree.
- p2-b-12: page −0.3333, mine −1/3. Agree.
- p3-a-ata: page 6, mine 6. Agree.
- p3-a-atb: page 7, mine 7. Agree.
- p3-a-c: page 1.1, mine 11/10. Agree.
- p3-a-d: page 0.8, mine 4/5. Agree.
- p3-b-e4: page −0.7, mine −7/10. Agree.
- p3-b-ee: page 1.8, mine 9/5. Agree.
- p3-c-d: page (2 + 3β)/10, mine (2 + 3β)/10; also checked by value at β = 0, 1, 2, 5, 12, −3 by solving the normal equations numerically. Agree.
- p3-c-e4: page 2.3, mine 2.3. Agree.
- p4-a-line: page "the line through (−4, 3)" (choice 2), mine the same. Agree.
- p4-a-12: page −0.48, mine −12/25. Agree.
- p4-b-12: page 0.96, mine 24/25. Agree.
- p4-b-rw: page 1.52, mine 1.52. Agree.
- p4-b-m: page 2m/(1 + m²), mine 2m/(1 + m²) (numerically from 2P − I at m = 0.5, 1, 2, 3). Agree.
- p4-d: page "for every c except c = 1" (choice 2), mine c ≠ 1 (rank of AᵀA computed at c = 0, 1, −1, 2, 0.5). Agree.
- p5-a-b1: page −1, mine −1. Agree.
- p5-a-c4: page 1, mine 1. Agree.
- p5-a-cl: page 2, mine 2. Agree.
- p5-b-12: page 4, mine 4. Agree.
- p5-b-23: page 2, mine 2. Agree.
- p5-c-x2: page 1, mine 1. Agree.
- p5-c-p4: page 3, mine 3. Agree.
- p5-c-err: page 4, mine 4. Agree.
- p6-a: page 0.4286, mine 3/7. Agree.
- p6-b: page −6, mine −6. Agree.
- p6-d-1: page Yes, mine yes. Agree.
- p6-d-2: page No, mine no. Agree.
- p6-d-3: page No, mine no. Agree.
- Show-parts 1(c), 2(c), 3(d), 4(c), 6(c): the page's arguments are the ones I gave, and they are correct.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1(a), statement | (own problem) | "find x̂, the projection p and the error e = b − p", but the second box asks for "the second entry of e", and the statement never says which entry is wanted. In every other part the statement names each box ("Give …"). | End the statement with: "Give $\hat x$ and the second entry of $e$." |
| 2 | warning | Problem 1(b), choice box p1-b-pw | (own problem) | Choices "the vector (1, 2, 2)", "the zero vector", "the vector (2, −1, 0)", "the vector (4, −2, 0)": the right one is the shortest and the only one with no numbers in it, so it stands out by its form. | Write the right choice as "the vector $(0, 0, 0)$". |
| 3 | info | Problem 5(a) solution vs 5(b) boxes (writer's first doubt) | n/a | The solution of 5(a) prints Aᵀb = 8, Bᵀc = 4 and ‖A‖ = ‖B‖ = 2, so with the preamble's rule (entry (i, j) of R is qᵢᵀ times column j) R₁₂ = 8/2 = 4 and R₂₃ = 4/2 = 2 are one division away. | No change. It does not print either answer: these numbers are steps every Gram–Schmidt solution has to show. To get 5(b) the reader still has to know R = QᵀM and that dividing by ‖A‖ turns Aᵀb into q₁ᵀb, which is what the part tests. The boxes left out, R₁₁ = ‖A‖ and R₃₃ = ‖C‖ (a 5(a) box), are the ones that really would have leaked. |
| 4 | info | Problem 6(a) solution vs 6(b) box (writer's second doubt) | n/a | The 6(a) solution prints Qᵀ, whose row 3, column 2 is −6/7, so x₃ = 7 · (−6/7) = −6. | No change. Qᵀ is the statement's Q read sideways, so printing it gives the reader nothing the statement does not already show: x₃ is 7 times row 2, column 3 of Q. 6(b) tests that Q⁻¹ = Qᵀ makes solving one multiplication, and the 6(b) hint already points back to (a). |
| 5 | info | Problem 4(a) hint, choice p4-a-line | n/a | The hint says I − P keeps "the part perpendicular to a", which leaves one of the four choices. | Acceptable: the preamble says the same ("I − P is the projection onto the perpendicular space"), so the box tests whether the reader can tell which listed line is perpendicular to (3, 4). An optional change: say only "I − P keeps the part of a vector that P removes" and leave out the rest. |
| 6 | info | Problem 4(d) vs Set 5 Problem 6(d) | Lecture 16 pp. 15–17 proves "AᵀA invertible ⇔ independent columns" | 4(d) asks for which c AᵀA is invertible; Set 5 6(d) asked for N(AᵀA) = N(A) for a rank-one A. | No change: these are related but different questions, and 4(d) puts the Lecture 16 proof to use. No orthogonal-complement problem of Set 5 comes back; finding n with Aᵀn = 0 in 2(b) is only one step on the way to a projection. |

## Arithmetic and answer checks
- I recomputed every number on the page (solutions and checks) with exact fractions in numpy: 1(a) ‖p‖² + ‖e‖² = 36 + 17 = 53; 1(c) (P²)₁₁ = 9/81; 2(b) (AᵀA)⁻¹ = (1/6)[[5, −2], [−2, 2]], Pb = (2, −1, 0), and P equals A(AᵀA)⁻¹Aᵀ; 2(c) ‖b‖² = 29 = 24 + 5; 3(b) Σe = 0, Σte = 0; 3(c) the β = 12 heights (−1.7, 2.1, 5.9, 9.7) and errors (1.7, −1.1, −2.9, 2.3), both sums 0; 4(b) ‖Rw‖² = 2.6896 + 2.3104 = 5, and 2(4/3)/(1 + 16/9) = 24/25; 4(c) column lengths and dot product of R; 4(d) AᵀA = [[3, 3], [3, 3]] at c = 1; 5(b) QR = M, with columns 2 and 3 checked by hand; 5(c) d − p = (−1, −1, 1, 1), the same p from the normal equations of M; 6(a) QᵀQ = I; 6(b) Qx = (0, 7, 0); 6(c) Qy = (11, −1, 5)/7 and ‖Qy‖² = 3; 6(d) MᵢᵀMᵢ = I, I/2 and I. All correct.
- Points: 14 + 18 + 20 + 16 + 18 + 14 = 100, and the parts add up to the points of each problem (5+6+3, 7+7+4, 7+5+5+3, 4+6+3+3, 7+5+6, 4+4+3+3).
- Tolerances: every number box has `tolerance="0.01"`. That rejects the obvious slips: a sign (p1-a-e2 3; p3-b-e4 0.7; p2-b-12 +1/3; p4-a-12 +0.48, the entry of P), a transposed or neighbouring entry (p6-a Q₁₂ = 6/7 against 3/7; p4-b-12 P₁₂ = 0.48), a missing normalisation (p1-b-23 4 against 4/9; p5-b-12 Aᵀb = 8 or the coefficient 2 against 4; p5-b-23 Bᵀc = 4 or the coefficient 1 against 2; p5-c-x2 Bᵀd = 2 against 1; p5-c-err ‖d − p‖ = 2 against 4), and Pw in place of Rw (1.76 against 1.52). In the symmetric P of 1(b), P₂₃ = P₃₂ = P₂₂ = 4/9, so those slips cannot be caught, but they give the same number and do no harm.
- Formula boxes: p3-c-d on β ∈ [4, 20]: the mistake (9 + β)/10 equals the answer only at β = 3.5, outside the range; (2 + 3β)/2 equals it only at β = −2/3. Both are finite over the range. Hints are true: (9 + β)/10 is C; with 2 in place of 6 in AᵀA the elimination gives 2D = 2 + 3β. p4-b-m on m ∈ [0.1, 5]: m/(1 + m²) (the entry of P) and 2m/(1 + m²) − 1 differ from the answer for every m > 0 and are finite. Both hints are true.
- Choice boxes: no backslash TeX in choices; right positions 1, 2, 2 (four choices) and 0, 1, 1 (Yes/No). The choices do not answer each other. See finding 2 for lengths.
- Calcs: `calcs/18.06/18-06-problem-set-6.yaml` has an `answer:` entry for each of the 31 number and formula boxes (the 6 choice boxes have check entries without `answer:`), each by a route independent of the page (perpendicular vector n, centred regression, sin 2·atan m, cofactors for 6(a)/(b), the normal equations of c against a and b). I checked the less obvious ones by hand (p5-b-12: b₁ + b₂ = r₁₂; p5-b-23: c₂ − c₃ = r₂₃; p5-a-c4: α = 0, β = 1). Every `shown:` string is on the page (script check). `pytest tests/calc -k 18-06-problem-set-6`: 62 passed.
- The determinant appears only in the calcs (the cofactor routes of 6(a) and 6(b), and the 2×2 inverse denominators in p2-b-11/12), never on the page. That is fine, and the calcs comment says so.

## Coverage and order
- Lecture 15 (Problems 1, 2): projection onto a line (x̂, p, e, P), P² = P, Pᵀ = P, the line through a multiple of a; projection onto a plane by the normal equations; the closest point. Lecture 16 (Problems 2(b), 3, 4): b = p + e and I − P; least squares for a line, the outlier, Aᵀe = 0 row by row; invertibility of AᵀA from independent columns. Lecture 17 (Problems 4(c), 5, 6): orthonormal columns, orthogonal matrices, Q⁻¹ = Qᵀ, the 1/√2 fix (6(d) M₂), projection with orthonormal columns, Gram–Schmidt, A = QR with R upper triangular, lengths kept. Every main topic of the three lectures is practised, in MIT's order.
- Reflection R = 2P − I (4(b), 4(c)) goes beyond the lectures, but it follows from Pᵀ = P, P² = P and Lecture 17's definition, and the page marks it as its own solution. At 18.06 level.
- Boundaries: there is no determinant on the page (searched; the only mention is the preamble sentence saying none is used). Invertibility of AᵀA in 4(d) and in the preamble is settled through independent columns (the Lecture 16 argument), and (AᵀA)⁻¹ in 2(b) comes from elimination. Lecture 14 material (orthogonal subspaces, complements) is not repeated; see finding 6.
- Originality: every matrix and vector is the page's own. The (1/7)·(2, 3, 6) orthogonal matrix is a well-known integer example, a standard object rather than a copied exercise. Nothing reads like a textbook exercise (I did not open the textbook, as instructed).

## Citations
I checked every `at=` and every "(Lecture N transcript, p. X)" against the three transcript PDFs (PDF page counts; they have no printed footer):
- Lecture 15: p. 1 closest point; pp. 2–5 projection onto a line (aᵀ(b − x̂a) = 0 on p. 2, P = aaᵀ/aᵀa on pp. 4–5); pp. 3–4 doubling a leaves P unchanged; p. 7 Pᵀ = P, P² = P; p. 13 Aᵀ(b − Ax̂) = 0; pp. 15–17 AᵀAx̂ = Aᵀb and P = A(AᵀA)⁻¹Aᵀ; pp. 18–19 the two properties for the general P. All correct.
- Lecture 16: pp. 3–4 I − P; pp. 4–5 the equations C + Dt = b; pp. 7–8 outliers; pp. 9–11 the normal equations of the example; pp. 12–13 b = p + e; pp. 13–14 e perpendicular to the columns; pp. 15–17 the xᵀAᵀAx proof. All correct.
- Lecture 17: pp. 2–4 QᵀQ = I, orthogonal matrix, Q⁻¹ = Qᵀ (p. 4); p. 5 the [[1, 1], [1, −1]] example and its 1/√2; pp. 9–11 P = QQᵀ and x̂ = Qᵀb; pp. 13–18 Gram–Schmidt (B on pp. 15–16, C on pp. 17–18); pp. 22–24 A = QR and why R is upper triangular. All correct.
- The page never uses `cite="mit"` for a statement. The calcs use `{cite: mit, at: '… (our own solution)'}` for a few page-own checks, which does no harm.

## Licensing
- No MIT problem text, no textbook problem, no figure. The transcripts carry no "rights reserved" or "courtesy" notice (grep). No OpenStax, LibreTexts or Strang book material. The wording is the page's own; no em dashes (count 0), no control characters.

## Notes
- Symbols: 49 meanings scoped to `18-06-problem-set-6`. All fit the page and none gives an answer away: c covers both 4(d) and Problem 5, m both 4(b) and 3(d), R both QR and the reflection, n both the normal vector and the count. Uncertain: the scanner reduces `\mathrm{R}^3` to the letter R (`lib/tex-scan.ts` strips `\mathrm{}`), so the R in "R³" may show the page's R meaning (the matrix of QR, or the reflection). The 18.06 lessons behave the same way, so this is not specific to this set and does not change the verdict.
- `summary` names topics only ("when AᵀA is invertible" is a topic, not the condition).
- The "How to answer" examples (0.25, (1, 2, 2), `(5 + beta^2)/3`) answer no box; (1, 2, 2) is a, a wrong choice in p1-b-pw.
- The preamble is word for word the same in the stripped and the full page (diff of the first 74 lines).

COUNTS: errors=0 warnings=2 info=4

## Resolution (2026-11-28, by the page author)

- Warning 1 (1(a) second box not named): the statement now ends "Give x̂ and the second entry of e."
- Warning 2 (p1-b-pw right choice the shortest and the only one without numbers): it now reads "the vector (0, 0, 0)".
- Info items: no change (the reviewer judges the 5(a) and 6(a) solutions and the 4(a) hint acceptable; the R in "R³" taking the matrix meaning is a site-wide scanner point, noted for the answer-box and symbol fix plan).

Status set to `reviewed`.
