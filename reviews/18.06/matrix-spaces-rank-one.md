---
page: content/year-2/18.06/matrix-spaces-rank-one.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-11-matrix-spaces-rank-1-small-world-graphs/ (read: licence and notices only)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/55da11f77a97298e289472a651e76f4f_2IdtqGM6KWU.pdf (read, as per-page extracted text, pp. 1–21)
verdict: pass-with-notes
---

# Review: Matrix spaces, rank one and small-world graphs

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Graphs and the small world", first sentence | Strang draws 5 nodes and 6 edges and says "some five by six matrix is going to tell us everything about that graph" (p. 18). In Lecture 12 the incidence matrix has one row per edge and one column per node, so this graph's incidence matrix is 6 × 5. | "five nodes and six edges, which a 5 × 6 matrix will describe next time" | Treat as a lecturer slip (rule 4): say "a 6 × 5 matrix (one row per edge)" or just "a matrix", with a short bracketed note that Strang says five by six here. Uncertain whether Strang meant the transpose, which is why this is a warning, not an error. |
| 2 | info | `<Formula label="A rank-one matrix">`, `at="p. 11"` | The first row (1, 4, 5) and the second row (2, 8, 10) are given on p. 10; the factorisation into column times row is on p. 11. | cites p. 11 only (the prose before it correctly says pp. 10–11) | Optional: `at="pp. 10–11"`. |
| 3 | info | "Functions as vectors" | "will be two, because we have a second order equation" (p. 9), said about this linear homogeneous equation. | "the dimension is 2, as for every second-order equation" | Optional: "every linear homogeneous second-order equation". Nonlinear second-order equations have no solution *space*. |
| 4 | info | "Functions as vectors" | e^{ix} and e^{−ix} as "another basis" (p. 9) | same | Correct as stated by Strang, but only with complex coefficients; a few words ("allowing complex coefficients") would avoid confusion. |
| 5 | info | Opening paragraph | Graphs appear at pp. 18–21. | "ends with a first look at graphs (transcript, p. 1)" | The p. 1 citation supports only the first part of the sentence; harmless. |

All seven `<Formula>` citations were checked against the transcript and are on the cited pages: dim M = 9, dim S = 6, dim U = 6 (pp. 2–4); the dimension formula 6 + 6 = 3 + 9 (p. 7); d²y/dx² + y = 0 (p. 7); y = c₁ cos x + c₂ sin x (p. 8); rank(A + B) ≤ rank A + rank B (p. 13); S = N(A) with A = (1 1 1 1) (pp. 13–15); the three special solutions (p. 16). The transcript is the only source (there are no slides for this lecture), so "board versus slide" does not apply; all are board equations cited by transcript page.

Prose page citations checked and correct: product of symmetric matrices not symmetric (p. 1); U is a subspace (p. 2); only three of the nine basis matrices are symmetric, six are upper triangular (pp. 3–4); S ∩ U = D, dimension 3 (pp. 4–5); union not a subspace, "two lines in the plane" (p. 5); S + U = M (p. 6); 18.03 joke (p. 9); building blocks, 5 × 17 of rank 4 (pp. 11–12); rank-4 subset not a subspace, rank can be 5 (pp. 12–13); rank-one not a subspace (p. 13); subspace check (p. 14); dimension n − r (p. 15); column space R¹, left nullspace {0}, empty basis (pp. 16–18); 3 + 1 = 4, 1 + 0 = 1 (pp. 17–18); graph definition (p. 18); 260 million nodes (p. 19); distances 2 and 3 (pp. 19–21); six degrees, shortcuts (p. 20); lecture twelve (p. 20); the web (p. 21).

Lecturer slips handled: S called "three dimensional" then corrected to six (p. 5) is noted on the page; the vector called b in "Ab = 0" (p. 15) is noted; "special solutions to Ax = b", corrected by Strang himself to Ax = 0 (pp. 8–9), is correctly written as Ax = 0 on the page. Notation: the page writes "S intersect U" in words inside TeX instead of ∩, consistently; this matches Strang's spoken "S intersect U" (p. 5) and is fine.

## Arithmetic and answer checks
- `npm run calc:test -- -k matrix-spaces`: 7 passed.
- dim S (3 × 3 symmetric) = 3 + 3 = 6; dim U = 6; dim D = 3; 6 + 6 = 12 = 3 + 9. Correct.
- (1, 2)ᵀ(1, 4, 5) = rows (1, 4, 5) and (2, 8, 10). Correct.
- A = (1 1 1 1): r = 1, dim N(A) = 4 − 1 = 3; each special solution has entries summing to 0; dims 3 + 1 = 4 = n, 1 + 0 = 1 = m. Correct.
- Worked example (a): trace-zero 2 × 2 matrices (a, b; c, −a): dimension 3; symmetric (a, b; b, d): 3; intersection (a, b; b, −a): 2; sum 3 + 3 − 2 = 4 = dim of all 2 × 2 matrices, so T + S is everything. All correct. (The dimensions 3, 3 and 2 are not in the calcs file, only the final 3 + 3 − 2; optional to add.)
- Worked example (b): row 2 = (−4, 2, −6) = −2 × (2, −1, 3); row 3 = (6, −3, 9) = 3 × (2, −1, 3). u = (1, −2, 3), v = (2, −1, 3), uvᵀ reproduces every entry. Correct.
- Quiz 1: symmetric 3 × 3 has dimension 6; marked index 2 = "6". Correct, explanation correct.
- Quiz 2: rank-one 5 × 17 matrices plus zero are not a subspace; marked index 1. Correct; this is Strang's p. 13 question.
- Quiz 3: solution space of y″ + y = 0 has dimension 2; marked index 0 = "2". Correct.
- Flashcards: rank-one row space = line through v and column space = line through u (true for nonzero u, v); dimension formula; zero subspace has dimension 0 and empty basis. All correct.
- Calcs file note: `ode-cos` checks only cos x; sin x is not checked. Optional to add `-sin(x) + sin(x)`.

## Coverage and order
- The page follows the transcript's order: matrix spaces (pp. 1–7), the differential equation (pp. 7–9), rank one (pp. 10–13), the subspace of R⁴ and its four subspaces (pp. 13–18), graphs and the small world (pp. 18–21).
- Left out (minor, acceptable): "rank is at most m and at most n" (p. 10); Strang's remark that rank-one matrices' determinants and eigenvalues will come later (p. 11); the airplane-conversation origin of "small world" (p. 20, only implied); the jokes about other public figures (p. 20), rightly omitted.
- Nothing added that the lecture does not support; the worked example is the page's own.

## Licensing
- The lecture page carries CC BY-NC-SA 4.0 and no "All rights reserved" or "Courtesy of" notice; the transcript text contains neither phrase (checked by grep).
- No verbatim copying beyond short phrases. The closest wording is "a few shortcut edges bring distances down dramatically" (Strang: "with a few shortcuts, the distances come down dramatically"), a short phrase; acceptable.
- No OpenStax or LibreTexts material.
- Worked example originality: neither the trace-zero/symmetric 2 × 2 pair nor the 3 × 3 rank-one matrix appears in the lecture. I could not check Strang's textbook (*Introduction to Linear Algebra*), so I cannot rule out that a similar exercise exists there; trace-zero 2 × 2 matrices are a common textbook topic, but the specific combination and numbers look original.

## Notes
- Small-world anecdote: handled neutrally and attributed. The page says "the president of the day" without naming him, gives Strang's distance as two and his students' as at most three, and omits the jokes about other people (p. 20). The 260 million figure is marked as "Strang's 1999 figure", which matches the transcript header ("ocw-18.06-f99-lec11": the Spring 2010 OCW course uses the 1999 recordings). Good.
- Link to 18.03: `/courses/18-03/second-order-constant-coefficients` exists (18.03 Lecture 9, second-order linear equations with constant coefficients, including complex roots giving cos and sin). It is an appropriate target for Strang's 18.03 joke.
- Later-lecture claims: "a 5 × 6 matrix will describe next time" (see finding 1) and "the linear algebra of graphs is the next lecture" (Strang, p. 20: "lecture twelve"); `leadsTo` 18.06 Lecture 12 "Graphs, networks and incidence matrices" matches the course syllabus title. No cosmology callout on this page; none is needed.
- Prerequisite `four-fundamental-subspaces` (Lecture 10) is the right predecessor.

## Resolution (2026-11-16, by the page author)

- The 5 × 6 matrix: the page now says "a matrix" and notes in brackets that with one row per edge it is 6 × 5.
- Rank-one formula cited to pp. 10–11.
- "Every linear homogeneous second-order equation"; complex coefficients mentioned for e^{ix}, e^{−ix}.
- Opening citation extended to pp. 1, 10, 18.
- Optional calcs additions not made.

Status set to reviewed.
