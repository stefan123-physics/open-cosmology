---
page: content/year-2/18.03/eigenvalues-linear-systems.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/resources/lecture-25-homogeneous-linear-systems-with-constant-coefficients/ (read: local copy lec.html; title "Lecture 25: Homogeneous Linear Systems with Constant Coefficients"; its only .pdf link is b10eb531875b86f1e6d45c165120a3f7_heBvViSi9xQ.pdf, matching the page's `reading1` URL; title matches `_course.json` and `source.title`)
  - https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/b10eb531875b86f1e6d45c165120a3f7_heBvViSi9xQ.pdf (read: local copy transcript.pdf, "MITOCW | 18-03_L25", 17 pages per pdfinfo, no printed page numbers; cited page = PDF page; every page read separately with `pdftotext -f N -l N`)
  - content/year-2/18.03/_course.json (read: Lecture 26 = "Continuation: Repeated Real Eigenvalues"; the Lecture 26 transcript was not read)
  - calcs/18.03/eigenvalues-linear-systems.yaml (read; `npm run calc:test -- -k eigenvalues-linear`: 6 passed)
verdict: pass-with-notes
---

# Review: Linear systems with constant coefficients: eigenvalues and eigenvectors

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board) with transcript = PDF page. Page boundaries: p. 1 opening, elimination "for people who have forgotten", x = T₁, y = T₂, the system and its solution, initial conditions deferred, matrices a prerequisite; p. 2 2 × 2 and 3 × 3 enough, column vector, differentiate each entry, matrix form, start of writing the solution as vectors; p. 3 pull out scalars, constants in front and functions behind, the two vector terms (board slip "1, 2" corrected to "1, −2" after a student's question), trial solution announced; p. 4 Euler, matrices used for ODEs only since 1950–1960, different λ per component does not work, same exponential, trial solution (a₁, a₂)e^{λt}, names λ, r, m, start of substitution; p. 5 λ in front, e^{λt} drops out, calculus reduced to algebra, Laplace transform comparison; p. 6 the two equations λa₁ = …, λa₂ = …, two nonlinear equations in three unknowns, demote λ to a parameter, the homogeneous linear system; p. 7 trivial solution (egg stays at 0), nontrivial iff determinant zero, the determinant, λ² + 7λ + 6, same as elimination with r, "characteristic equation"; p. 8 roots −1, −6, λ = −1 equations, redundancy is right not wrong; p. 9 built-in check, recheck substitution then λ, a₂ = 1 gives (2, 1), solution with e^{−t}, λ = −6 equations 4a₁ + 2a₂ = 0 and 2a₁ + a₂ = 0; p. 10 a₁ = 1, a₂ = −2, superposition, general solution with c̃₁ = c₁/2, c̃₂ = c₂, the two methods meeting; p. 11 values intrinsic to the egg, general 2 × 2 system (a b; c d), substitution, homogeneous system, nontrivial iff determinant "is"; p. 12 "zero", expansion λ² − (a + d)λ + ad − bc, remember it, determinant, trace ("a plus b"); p. 13 characteristic equation of the matrix, minus sign warning, eigenvalues (real and distinct assumed), hidden numbers, German/English, characteristic values, proper values; p. 14 proper = belonging to, eigenvectors α_i from (A − λ_iI)α = 0, "belonging to λ_i"; p. 15 characteristic vectors, general solution by superposition, condensed form for n × n, x′ = Ax, comments on the textbook, trial x = αe^{λt}, λαe^{λt} = Aαe^{λt}; p. 16 Aα = λα, the λI step and its justification, characteristic equation det(A − λI) = 0, eigenvectors; p. 17 "Go home and practice", recitation 2 × 2 and 3 × 3.

Formula locations: "The egg system again" p. 1; "Matrix form" p. 2; "Solution in vector form" p. 3 (begun on p. 2, written out on p. 3); "Trial solution" p. 4; "Algebraic equations" p. 6 (substitution on p. 5, written out on p. 6); "Homogeneous linear system" p. 6; "Characteristic equation of the egg" p. 7; "General solution" p. 10; "Characteristic equation of a 2 × 2 matrix" p. 12 (determinant set up on pp. 11–12, expanded and trace named on p. 12; "tr A" in the form as written follows from p. 12); "General solution, distinct eigenvalues" p. 15; "Eigenvalue equation" p. 16. All correct.

Prose citations also checked: elimination mostly for people who forgot another way p. 1; matrices a prerequisite pp. 1–2; 2 × 2 and 3 × 3 enough p. 2; differentiate entry by entry p. 2; constants in front, functions behind pp. 2–3; matrices for ODEs only since the 1950s p. 4; different exponentials fail, same exponential in both components p. 4; λ brought down, exponential cancels, Laplace comparison p. 5; nonlinear, three unknowns, demote λ, linear and homogeneous p. 6; trivial solution, ice bath p. 7; determinant zero p. 7; same as elimination with λ for r p. 7; roots p. 8; λ = −1 equations, second twice the first pp. 8–9; recheck substitution first, then λ p. 9; (2, 1)e^{−t} p. 9; λ = −6 pp. 9–10; superposition p. 10; c̃₁ = c₁/2, c̃₂ = c₂ p. 10; methods meet only at the characteristic equation, roots intrinsic pp. 10–11; general system pp. 11–12; trace p. 12; remember the equation, watch the minus sign pp. 12–13; eigenvalues hidden but controlling p. 13; German/English, characteristic values, proper values pp. 13–14; eigenvectors p. 14; general solution p. 15; condensed form for n × n pp. 15–16; scalar cannot be subtracted, λ off the diagonal, identity matrix p. 16. All correct. No "rights reserved" or "courtesy" notice in the transcript or on the lecture page. No em dash on the page. `npm run content:check`: 0 errors; the only warning for this page is the missing review file (this file).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Plot caption: "computed from the solution with x(0) = 40, y(0) = 45" | p. 1: initial conditions were put in last time; "we are not going to explore that aspect of it today". The values 40 and 45 are from Lecture 24 (p. 12 there). | States the initial values without saying where they come from. Correct (the curve is c̃₁ = 25, c̃₂ = −10 in this page's form, and 25(2, 1) − 10(1, −2) = (40, 45)). | Optional: "with the initial values of Lecture 24, x(0) = 40, y(0) = 45". |
| 2 | info | Plot: second dashed line `-2*x` | (page-own graph) | Unlabelled, and with domain x ∈ [−5, 45], range y ∈ [−10, 50] only the short piece x ∈ [−5, 5] is visible, in the second and fourth quadrants near the origin. The caption names the direction (1, −2), so the meaning can be inferred, but a reader may not find the line. | Optional: label it "direction (1, −2)" if the label fits (`content:check` places labels), or say in the caption that the short steep line through the origin is (1, −2). |
| 3 | info | Superposition, "By superposition (p. 10)" | p. 10: two solutions, "neither a constant multiple of the other", give the general solution; the proof of superposition is promised but not given (left as homework). | Omits the independence condition. Harmless here because distinct eigenvalues guarantee it, and the p. 15 formula is labelled "distinct eigenvalues". | Optional: "two solutions that are not multiples of each other". |
| 4 | info | Condensed form: "λ comes off the main diagonal, which is what the identity matrix does" | p. 16: lambda α = λIα; put λ in an identity matrix to subtract it from the diagonal. | Loosely worded: it is λI, not I, that puts λ on the diagonal. Not wrong in context. | Optional: "which is what λI does". |
| 5 | info | Quiz question 1 | (page-own) | Uses the same matrix (1 2; 2 1) as the worked example, whose first step gives the answer. | Optional: use a different matrix, e.g. (2 1; 1 2) (λ² − 4λ + 3 = 0). |

Lecturer slips and transcript garbles checked:
- p. 12: "Here it is a plus b, the sum of the diagonal elements" (should be a + d). The page writes a + d and notes the slip in brackets, as rule 4 asks. Correct.
- p. 16: "a two-by-two matrix with lambdas down the main diagonal and I elsewhere" (should be zeros elsewhere; possibly a transcription of "0"). The page does not repeat it: it gives the correct (A − λI) and describes λ coming off the diagonal. No note needed; optional bracket if the author wants consistency with the p. 12 note.
- p. 3: the board first showed the second vector as (1, 2); a student caught it and Mattuck corrected it to −2 (p. 3, "This should be negative two"). The page shows (1, −2). Correct.
- p. 9: "then a1 will be a2" (garble for "a₁ will be 2"); p. 11: "(x, y) equals" (prime missing); p. 15: "the first eigenvector times the eigenvalue times the e to the corresponding eigenvalue" (no extra eigenvalue factor belongs there); p. 12 "sum of the d elements"; p. 4 "Oiler", "or 300 years", missing years for when matrices were invented; "end-by-end" for n-by-n; "yoke" for yolk. None repeated on the page.

## Arithmetic and answer checks
- `npm run calc:test -- -k eigenvalues-linear`: 6 passed.
- Egg characteristic equation: (−2 − λ)(−5 − λ) − 4 = (λ + 2)(λ + 5) − 4 = λ² + 7λ + 10 − 4 = λ² + 7λ + 6 = (λ + 1)(λ + 6). Roots −1, −6. Confirmed with NumPy `eig`: eigenvalues −1, −6, eigenvectors proportional to (2, 1) and (−1, 2) ∝ (1, −2). Correct.
- λ = −1: −2 + 1 = −1, −5 + 1 = −4, so −a₁ + 2a₂ = 0 and 2a₁ − 4a₂ = 0; a₂ = 1 gives (2, 1). λ = −6: −2 + 6 = 4, −5 + 6 = 1, so 4a₁ + 2a₂ = 0 and 2a₁ + a₂ = 0; a₁ = 1 gives a₂ = −2. Correct.
- c̃₁(2, 1)e^{−t} = (2c̃₁, c̃₁)e^{−t} against (c₁, c₁/2)e^{−t}: c̃₁ = c₁/2; c̃₂ = c₂. Correct.
- General 2 × 2: (a − λ)(d − λ) − bc = λ² − (a + d)λ + (ad − bc). Correct.
- Plot: x = 50e^{−s} − 10e^{−6s}, y = 25e^{−s} + 20e^{−6s} is the Lecture 24 solution; residual of x′ − Ax at t = 0, 0.5, 1 is zero (NumPy). Start (40, 45). On s ∈ [0, 6]: x from 40 up to a maximum 40.17 (at s ≈ 0.036) then down to 0.12; y decreasing from 45 to 0.06; the curve stays inside the window [−5, 45] × [−10, 50]. x − 2y = −50e^{−6s}, so the distance from the (2, 1) line decays as e^{−6s} and the curve approaches the origin along (2, 1). The caption's claim (fast (1, −2) part dies first, then approach along the slow eigenvector) is correct. Label placement not checked in a browser (`content:check` passes).
- Worked example: A = (1 2; 2 1), tr 2, det −3, λ² − 2λ − 3 = (λ − 3)(λ + 1); NumPy eigenvalues 3, −1 with eigenvectors ∝ (1, 1), (1, −1). λ = 3: −2a₁ + 2a₂ = 0 → (1, 1); λ = −1: 2a₁ + 2a₂ = 0 → (1, −1). c₁ + c₂ = 3, c₁ − c₂ = 1 → c₁ = 2, c₂ = 1. x = 2e^{3t} + e^{−t}, y = 2e^{3t} − e^{−t}: residual of both equations zero at t = 0, 0.5, 1. Correct; original numbers, not from the lecture.
- Quiz 1: trace 2, det 1 − 4 = −3, λ² − 2λ − 3 = 0: answer 0. Correct; distractors are all wrong. Explanation correct.
- Quiz 2: answer 0 (det = 0). Correct (fundamental theorem for square homogeneous systems, p. 7).
- Quiz 3: answer 0 (mistake in the substitution or in λ). Correct per p. 9; explanation correct (at an eigenvalue of a 2 × 2 matrix the two rows of A − λI are dependent; if A − λI = 0 both equations are 0 = 0, still "multiples").
- Flashcards: all three correct.
- Frontmatter summary: every statement matches the page and the transcript.
- Calcs file: all `shown` strings occur on the page. The checks are weak in places (info): `egg-eigvec-1` checks only the first component of A(2, 1) = −(2, 1) and `egg-eigvec-6` only the second component of A(1, −2) = −6(1, −2); `plot-start` checks the sum 40 + 45 = 85 rather than each value; `ex-solution` checks x′ = x + 2y but not y′ = 2x + y. All the unchecked parts were verified above and are correct, but adding the other components (and a `y` identity) would make the file catch a wrong edit. Page-own entries cite `reading1` pp. 1, 12, 15 although they are the page's own (`origin: page-own` is set correctly); harmless.

## Coverage and order
- The page follows the lecture's order: egg system and its elimination solution (p. 1) → matrices as prerequisite (pp. 1–2) → matrix form (p. 2) → solution as vectors (pp. 2–3) → history and trial solution with one exponential (p. 4) → substitution, algebra (p. 5) → equations, λ as parameter, homogeneous system (p. 6) → trivial solution, determinant, characteristic equation (p. 7) → roots and eigenvectors with the built-in check (pp. 8–10) → superposition and comparison with elimination (pp. 10–11) → general 2 × 2, trace, determinant (pp. 11–13) → eigenvalues and names (pp. 13–14) → eigenvectors (p. 14) → general solution (p. 15) → condensed n × n form and λI (pp. 15–16). Same order as MIT.
- Left out (minor): Mattuck's point that this is the characteristic equation "of the matrix, not of the system" (p. 13; the page's formula label does say "of a 2 × 2 matrix"); the term "characteristic vectors" (p. 15); his comments on the textbook's n × n approach and on judging books by how they explain the λI step (pp. 15–16); that the trial exponent is also called r or m (p. 4); the promise to prove superposition (p. 10); recitation on 3 × 3 cases (p. 17). None is needed for the mathematics.
- Added: the phase-plane graph and the worked example (page-own).
- `prerequisites: [first-order-systems]` and the inline link `/courses/18-03/first-order-systems`: the page exists in the course folder (committed in 66f0378).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the transcript or on the lecture page.
- No paragraph copied; the prose paraphrases. Short echoes ("elimination is mostly for people who have forgotten any other", "constants in front and functions behind", "demote λ to a parameter", "proper in the sense of belonging to") are brief, cited, and acceptable.
- The worked example and the graph are original. No OpenStax or LibreTexts material.

## Notes
- `leadsTo` 18.03 Lecture 26 ("What to do when the eigenvalues repeat."): matches the Lecture 26 title "Continuation: Repeated Real Eigenvalues" in `_course.json`; this transcript ends with only "we will talk more next time" (p. 17) and assumes "real and distinct" for now (p. 13), consistent with the claim. The Lecture 26 transcript was not read, so whether that lecture also covers other cases (for example complex eigenvalues) is unverified (uncertain); the claim as worded is supported by the title.
- No `Callout kind="cosmology"`: the page makes no cosmology claim, so nothing to check.

## Resolution (2026-11-16, by the page author)

All five info notes applied:

1. The plot caption says its starting values come from Lecture 24.
2. The second eigenvector line has a label.
3. Superposition now says the two solutions are not multiples of each other.
4. "Identity matrix" became "λI".
5. Quiz 1 now uses a different matrix (trace 4, determinant 3) from the worked example.

The calcs file adds the second component of the λ = −1 eigenvector check and the y′ equation of the worked example.

Status set to `reviewed`.
