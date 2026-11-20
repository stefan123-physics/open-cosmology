---
page: content/year-2/18.06/graphs-networks-incidence-matrices.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-12-graphs-networks-incidence-matrices/ (read: title, transcript link, licence and notices)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/a587f8613d33cc5ccd1428584defaf61_6-wh6yvk6uc.pdf (read, as per-page extracted text, pp. 1–24; 24 pages in the PDF)
verdict: pass-with-notes
---

# Review: Graphs, networks and incidence matrices

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Euler's formula", first sentence after the formula | "this count works for every graph" (p. 21) | "holds for every connected graph" | The page is right (for a graph with several components the right-hand side is the number of components, and r = n − components). Rule 4 asks for a short note when the page differs from the lecture for this reason: add "(Strang says every graph; it needs the graph to be connected)". |
| 2 | info | "The left nullspace", Ohm's law sentence; "The framework" formula | Ohm's law: "the current on an edge is some number times the potential drop" (p. 13); then E = Ax, y = CE (p. 22). | $y = Ce$ with $e = Ax$ | Follows the lecture exactly. Physically, with this A, $Ax$ is the potential *rise* along each arrow (end minus start), so current flowing with the arrow is proportional to $-Ax$; Strang drops the sign in the lecture. Optional bracketed remark; not an error since the page reproduces Strang's framework, and the sign is absorbed into the sign convention for $f$. |
| 3 | info | "The nullspace: potentials", grounding sentence | "fix one of the potentials, like the last one ... ground that node" (p. 9); also "any three columns will be independent" (p. 10) | "one node is grounded ... the other three columns are independent (p. 9). So the rank is 3 (p. 10)." | Correct. Optionally add Strang's remark that *any* three columns are independent, so any node can be grounded. |
| 4 | info | "The left nullspace", after the loop currents | Big loop: "one for y1, one for y2, nothing on y3, one for y5, and minus one for y4" (p. 18) | $(1, 1, 0, -1, 1)$, the sum of the two loop vectors (pp. 17–18) | Correct; no change. |

No formula, equation location or definition was found that contradicts the transcript. Every `<Formula>` cites `reading1` with transcript pages; I checked each against the extracted page text:

- Incidence matrix, `pp. 3–5`: edge numbering fixed on p. 4 (edge 1: 1→2, edge 2: 2→3, edge 3: 1→3, p. 4; edge 4: 1→4, edge 5: 3→4, p. 5). Strang's first listing of arrows on p. 2 is in a different order ("one to two, one to three, two to three, ..."), then he numbers them on p. 4; the page uses the final numbering, which matches the Aᵀ he reads out on p. 11 (rows (−1, 0, −1, −1, 0), (1, −1, 0, 0, 0), (0, 1, 1, 0, −1), (0, 0, 0, 1, 1)). Correct.
- Potential differences, `p. 7`: x₂−x₁, x₃−x₂, x₃−x₁, x₄−x₁, x₄−x₃. Correct.
- Nullspace of A, `p. 8`: c(1, 1, 1, 1), dimension one. Correct.
- Kirchhoff's current law, `pp. 14–15`: −y₁−y₃−y₄ = 0 (p. 14); y₁−y₂ = 0, y₂+y₃−y₅ = 0, y₄+y₅ = 0 (p. 15). Correct, and these equal Aᵀy = 0 for the matrix above.
- Loop currents, `pp. 16–17`: (1, 1, −1, 0, 0) on pp. 16–17, (0, 0, 1, −1, 1) on p. 17. Correct.
- Loops and Euler's formula, `pp. 20–21`: dim N(Aᵀ) = m − r on p. 20, r = n − 1 on p. 20, rearranged to nodes − edges + loops = 1 on p. 21. Correct.
- The framework, `pp. 22–23`: E = Ax, y = CE on p. 22; current sources and the combined equation on p. 23. Correct. The page's note that Strang writes E and F (capitals) matches the transcript text (p. 22 "call these potential differences, say, E"; p. 23 "the F is like a current coming from outside").

Prose citations also checked: chemistry professors (p. 1); most important model, discrete version a graph (p. 2); arbitrary arrows and sign of currents (pp. 2–3); water, oil, bridge, Buckminster Fuller dome (p. 3); rows 1 + 2 = row 3 for the loop (p. 5); 2m nonzeros (pp. 5–6); temperature and the +c of an indefinite integral (p. 9); "probably the most fundamental equation of applied mathematics" (p. 10); Aᵀ is 4 × 5 (p. 11); m − r = 2 (p. 12); conductance = one over resistance, KCL named (p. 13); balance / conservation law (p. 14), charge does not accumulate (p. 15); last row of R is zero because rank is 3 (pp. 15–16); row space dimension 3 (p. 18); pivot columns 1, 2, 4 of Aᵀ, i.e. edges 1, 2, 4, no loop (p. 19); "tree" (p. 20); dimensions 0, 1, 2 and "linear algebra proves Euler's Formula" (p. 21); 5 nodes, 7 edges, 3 loops (drawn p. 21, counted p. 22); batteries in the edges as the other source (p. 23); equilibrium, no time, no Newton's law, basic problem of numerical linear algebra, AᵀA always symmetric (p. 24). All supported.

## Arithmetic and answer checks
- Incidence matrix: rebuilt from the edge list; matches the page and Strang's Aᵀ (p. 11).
- Row 1 + row 2 = (−1, 1, 0, 0) + (0, −1, 1, 0) = (−1, 0, 1, 0) = row 3. Correct.
- 2m = 10 nonzeros. Correct.
- dim N(Aᵀ) = 5 − 3 = 2. Correct.
- Loop current (1, 1, −1, 0, 0): node equations give −1 + 1 − 0 = 0, 1 − 1 = 0, 1 − 1 − 0 = 0, 0 + 0 = 0. Correct.
- Loop current (0, 0, 1, −1, 1): −0 − 1 + 1 = 0, 0 − 0 = 0, 0 + 1 − 1 = 0, −1 + 1 = 0. Correct.
- Sum = (1, 1, 0, −1, 1), the outer loop, edge 3 cancels. Correct.
- Rows of edges 1, 2, 4: (−1, 1, 0, 0), (0, −1, 1, 0), (−1, 0, 0, 1) are independent (each introduces a new node column 2, 3, 4), and edges 1→2, 2→3, 1→4 connect all four nodes without a loop: a spanning tree. Correct.
- Euler: 4 − 5 + 2 = 1; 5 − 7 + 3 = 1. Correct.
- Worked example (a): A rows (−1, 1, 0, 0), (0, −1, 1, 0), (0, 0, −1, 1), (1, 0, 0, −1) for edges 1→2, 2→3, 3→4, 4→1. Correct. Rank 3 (connected, 4 nodes); dim N(Aᵀ) = 4 − 3 = 1; column sums of A are 0, so y = (1, 1, 1, 1) is in N(Aᵀ). Euler 4 − 4 + 1 = 1. Correct.
- Worked example (b): x = (3, 1, 0, 0): x₂−x₁ = −2, x₃−x₂ = −1, x₄−x₃ = 0, x₁−x₄ = 3; sum 0. The explanation (sum = yᵀAx with yᵀA = 0ᵀ) is correct.
- Quiz 1: loops = 1 − 6 + 9 = 4 = m − r = 9 − 5 (connected graph assumed in the question). Marked answer index 1 = "4". Correct.
- Quiz 2: answer index 2 = constant potentials. Correct.
- Quiz 3: answer index 3 = current in equals current out at every node. Correct.
- Flashcards: incidence matrix definition, dim N(A) = 1, r = n − 1, dim N(Aᵀ) = m − n + 1, Euler, AᵀCAx = f. All correct.
- `npm run calc:test -- -k graphs-networks`: 9 passed.
- calcs file (info): entry `loop2` has `shown: ['(1, 1, 0, -1, 1)']`, which is the outer-loop sum, not the vector loop2 checks (0, 0, 1, −1, 1). Suggest changing `shown` to the second loop vector, and optionally add entries for the outer-loop sum and for the example's r = 4 − 1 = 3, dim N(Aᵀ) = 4 − 3 = 1.

## Coverage and order
- The page follows the lecture order: motivation (p. 1) → graph and arrows (pp. 2–3) → incidence matrix and loop dependency (pp. 3–6) → nullspace, potentials, grounding (pp. 6–9) → rank (p. 10) → N(Aᵀ), Ohm's law, KCL (pp. 10–15) → loop currents (pp. 15–18) → row space and trees (pp. 18–20) → Euler (pp. 20–22) → sources and AᵀCAx = f (pp. 22–23) → equilibrium, AᵀA symmetric (p. 24).
- Left out (all minor, none needed): the Mathworks / Matlab aside (p. 1); graphs of websites, telephones, people (p. 2); the football-ranking analogy (p. 9); "any three columns are independent" (p. 10); Strang's brief remark that he could say more about the column space (p. 10).
- Added: the original worked example only. Nothing else beyond the lecture.
- leadsTo Lecture 14 ("Orthogonal vectors and subspaces"): correct. The course syllabus lists Lecture 13 as "Quiz 1 review", and the transcript ends "I'll see you Wednesday for a full review of these chapters, and Friday you get to tell me" (p. 24). The stated reason (row space perpendicular to nullspace) is what Lecture 14 is about; it is a fair in-course link. No cosmology callout, appropriate for this maths lecture.

## Licensing
- `grep -i "rights reserved|courtesy"` on the full transcript text: no matches. The OCW lecture page shows only the Creative Commons licence; no "Courtesy of" or "All rights reserved" notices found.
- No figures reused; the page has no images.
- No paragraphs copied. Close short phrases ("the most important model in applied math", "probably/perhaps the most fundamental equation of applied mathematics", "charge does not accumulate") are attributed paraphrases of standard wording; acceptable.
- No OpenStax or LibreTexts material.
- Worked example: a 4-cycle (square) graph with its own potentials (3, 1, 0, 0). It is not Strang's lecture graph (4 nodes, 5 edges) or his second graph (5 nodes, 7 edges). Whether a square graph appears in a problem in Strang's textbook was not checked (the textbook was not read); the graph is generic and the numbers and the "sum of differences around a loop" question are the page's own, so I consider it original. Uncertain only in that sense.

## Notes
- Lecturer slips: Strang hesitates over the edge numbering on p. 4 ("Did I number that twice?") and corrects himself live; the page uses the corrected numbering, so no note is needed. "Every graph" for Euler's formula (p. 21) is the only statement that needs a qualifier (finding 1). "Kirchoff" in the transcript is a transcription spelling; the page spells Kirchhoff correctly.
- Not run: `npm run content:check` and symbol checks (outside this review's scope).
- After the info items are addressed (or accepted), the page can be set to `status: reviewed`.

## Resolution (2026-11-16, by the page author)

1. Bracketed note added: Strang says every graph; the formula as written needs a connected graph.
2. Sign remark added: Ax is the rise along each arrow; Strang omits the minus sign in Ohm's law, and the page follows him.
3. Added that any three columns are independent, so any node can be grounded.
4. The `loop2` calcs entry now points at the sentence it checks.

Status set to reviewed.
