---
page: content/year-2/18.06/column-space-and-nullspace.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-6-column-space-and-nullspace/ (read: title, resource links, licence notices)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/52823bc4563ea1482bb5cd7c36c60d1e_8o5Cmfpeo6g.pdf (read, as per-page extracted text, pp. 1–24)
verdict: pass-with-notes
---

# Review: Column space and nullspace

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Solutions of Ax = b do not form a subspace", last two sentences; also the frontmatter `summary` ("for b = (1, 2, 3, 4) they form a line that misses the origin") | pp. 22–23: Strang only hedges: "It's like a plane that doesn't go through the origin, or a line…", "Maybe in this case it's a line that doesn't go through the origin". He never writes the solution set as particular solution plus nullspace. That comes in Lecture 8. | "Here it is the line through (1, 0, 0) along the nullspace direction: every solution is (1, 0, 0) + c(1, 1, −1)", with no citation and no sign that this goes beyond the lecture | The maths is correct (N(A) is one-dimensional, so the solution set is exactly this line, and c = −1 gives (0, −1, 1)). But the reader cannot tell that this is the page's own addition. It reads as if it carried on from Strang's (pp. 22–23). Suggested: "(Strang leaves it at "maybe a line"; here is why it is one, which Lecture 8 does in general:) every solution is …". |
| 2 | info | Intro, "officially the start of vector spaces and subspaces" | p. 1: "we're at the start of this new chapter, chapter three … lecture six is officially the lecture on vector spaces and subspaces", and he made "a first start on it at the end of lecture five" | "officially the start of vector spaces and subspaces" | Close enough. The page links back to the Lecture 5 page, which matches "a first start". Optional: "officially the lecture on…". |
| 3 | info | Column space, "a plane (p. 15)" | p. 15: "a two dimensional subspace of R^4". The word "plane" comes on p. 10 ("a little plane or something inside R^4") and p. 14 ("in the same plane as the first two"). | "a two-dimensional subspace of R⁴, a plane (p. 15)" | Fine as a description. The citation could be "pp. 10, 15". |
| 4 | info | Source title | The transcript header reads "ocw-18.06-f99-lec06": the video was recorded in Fall 1999 and is reused in the Spring 2010 OCW course | The page cites the Spring 2010 OCW course | Correct as cited (it is the OCW course's resource). Noted only for completeness, as on earlier 18.06 pages. |

Every formula citation was checked against the transcript and matches:
- Closed under linear combinations (cv + dw): p. 1 ("any multiple of V plus any multiple of W stay in the space").
- The example matrix A with columns (1,2,3,4), (1,1,1,1), (2,3,4,5): p. 7.
- Ax = b written out with x₁, x₂, x₃ and b₁…b₄: p. 10.
- N(A) = {c(1, 1, −1)}: p. 18 (c, c, −c).
- A(v + w) = Av + Aw = 0 and A(12v) = 12Av = 0: p. 20 (the factor 12 is Strang's own).

The prose citations also check out: plane and line through zero, every subspace contains zero (p. 2); the union is not a subspace (pp. 3–4); P ∩ L = {0} is a subspace (pp. 4–5); S ∩ T, with the factor 7 (pp. 5–6), "probably a smaller subspace" (p. 6); C(A) in R⁴ because A is 4 × 3 (pp. 7–8); the smallest space containing the columns (p. 8); the class's "no" on filling R⁴ (p. 9); four equations in three unknowns (p. 10); b = 0, (1,2,3,4) with x = (1,0,0), (1,1,1,1) with x = (0,1,0) (pp. 11–12); think of x first (p. 12); solvable exactly when b is in C(A), and the combination gives x (pp. 12–13); throw away column 3, pivot columns, column 1 could go instead (pp. 13–14); nullspace defined (p. 15); R³ vs R⁴ and m × n (p. 16); elimination later, by eye now (p. 16); zero in N(A) (pp. 16–17); (1,1,−1) (p. 17); (2,2,−2) (p. 18); a line through the origin (p. 19); b = (1,2,3,4), the second solution (0,−1,1) "minus this column plus this one", zero is not a solution (pp. 21–22); two ways to describe a subspace (p. 23); next lecture on bigger examples (p. 23).

Lecturer slips: none in the physics or maths. The transcript's "scale of multiplication" (p. 6, for "scalar multiplication"), "Ax -b" (p. 22) and "graft" (p. 23) are transcription errors; the page uses the right terms and does not repeat them. Strang's own correction on p. 20 ("I shouldn't say absurdly simple") needs no note.

## Arithmetic and answer checks
- A(1, 1, −1): rows 1+1−2, 2+1−3, 3+1−4, 4+1−5 all 0. Correct.
- A(1, 0, 0) = (1, 2, 3, 4); A(0, 1, 0) = (1, 1, 1, 1). Correct.
- A(0, −1, 1) = (−1+2, −1+3, −1+4, −1+5) = (1, 2, 3, 4). Correct.
- (1, 0, 0) + (−1)(1, 1, −1) = (0, −1, 1). Correct. The rank of A is 2 (columns 1 and 2 are independent, column 3 = column 1 + column 2), so N(A) is exactly the line through (1, 1, −1) and the solution set of Ax = (1,2,3,4) is exactly that one line. Correct.
- Worked example, B with columns c₁ = (1,0,2,1), c₂ = (1,1,0,3), c₃ = (1,−1,4,−1):
  - 2c₁ − c₂ = (1, −1, 4, −1) = c₃. Correct. B(2, −1, −1) = 2c₁ − c₂ − c₃ = 0. Correct.
  - c₁ and c₂ are not multiples (second components 0 and 1, first components both 1), so rank 2, N(B) is a line and C(B) a plane in R⁴. Correct.
  - 2c₁ + c₂ = (3, 1, 4, 5), so x = (2, 1, 0). Correct. All solutions (2, 1, 0) + c(2, −1, −1). Correct; it misses the origin because b ≠ 0.
  - (c): b = x₁c₁ + x₂c₂ has b₂ = x₂ and b₃ = 2x₁; b₂ = b₃ = 0 forces x₁ = x₂ = 0, so b = 0 ≠ (1,0,0,0). Correct. (Using only c₁ and c₂ is valid because c₃ is in their span, which step (a) showed.)
- Quiz 1: answer index 3, "b is in the column space of A". Correct; explanation correct.
- Quiz 2: answer index 1, Rⁿ. Correct (p. 16).
- Quiz 3: answer index 0, "Their intersection". Correct. "Both" is wrong because a union is a subspace only when one contains the other; the explanation's "usually lies in neither" is accurate.
- Flashcards: all three correct (C(A) in Rᵐ, N(A) in Rⁿ, the two descriptions from p. 23).
- `calcs/18.06/column-space-and-nullspace.yaml`: `npm run calc:test -- -k column-space-and` gives 5 passed. Coverage is thin (info): `ex-col3` checks only the third entry of 2c₁ − c₂, `ex-particular` only the last entry of 2c₁ + c₂, and there is no entry for (1, 0, 0) + (−1)(1, 1, −1) = (0, −1, 1) or for A(1,0,0) = (1,2,3,4). All of these were checked by hand above. Consider sum-of-squares entries for the full vectors, as `null-vector` already does. The `page-own` entries carry `source` citations to lecture pages (e.g. `ex-null` → pp. 17–20); harmless, but they are the page's numbers, not MIT's.

## Coverage and order
- The page follows the transcript order exactly: what a vector space is (p. 1) → subspaces P and L (p. 2) → union (pp. 3–4) → intersection, and S ∩ T in general (pp. 4–6) → column space of the 4 × 3 example (pp. 7–9) → which b make Ax = b solvable (pp. 9–13) → dependent column 3 and pivot columns (pp. 13–15) → nullspace, by eye (pp. 15–19) → why N(A) is a subspace (pp. 19–20) → solutions of Ax = b with b ≠ 0 (pp. 21–23) → two ways to describe a subspace and a preview (p. 23).
- Nothing in the lecture is left out. Minor omissions, acceptable: R³ itself as the first example of a vector space (p. 1, mentioned briefly on the page); the textbook section references (Chapter 3, Section 3.2, pp. 1, 15, 23).
- Additions: the explicit solution line (1, 0, 0) + c(1, 1, −1) (see finding 1) and the worked example (clearly marked as "of your own").
- Forward claims: "The next lecture finds the nullspace systematically" matches p. 23 and the Lecture 7 title in `_course.json` ("Solving Ax = 0: pivot variables, special solutions"). `leadsTo` Lecture 7 with "pivot variables and special solutions" is correct. "Will call them pivot columns" matches p. 14. No cosmology callout. That is reasonable for this lecture, and the page makes no cosmology claims.

## Licensing
- The OCW lecture page and the transcript text contain no "All rights reserved" or "Courtesy of" notice (grep of the transcript text and the saved lecture page: 0 hits). No `courtesy:` field needed.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond standard phrases. The closest paraphrases are "vector space inside a vector space" (p. 2, standard), "the smallest space" (p. 8), and the two-ways list (p. 23), which is rewritten in the page's own words.
- Worked example: original. The matrix B, the right-hand side (3, 1, 4, 5) and the test vector (1, 0, 0, 0) do not appear in the lecture. I did not compare it against Strang's textbook (not available to me), but it does not match Strang's well-known Section 3.1/3.2 examples that I know of. Uncertain to that extent.

## Notes
- The frontmatter `summary` is very long (a whole paragraph). This is not a source problem, but it is shown as a one-sentence summary elsewhere on the site; consider shortening it. It also states the "line that misses the origin" as fact, which is finding 1.
- Verdict pass-with-notes: no errors found; one warning (an addition not marked as the page's own) and some info items.

## Resolution (2026-11-16, by the page author)

- The line of solutions (1, 0, 0) + c(1, 1, −1) is now marked as not in the lecture (Strang says "maybe a line"), with a pointer to Lecture 8.
- "A plane" cited to pp. 14–15.
- Calcs coverage left as is: A(0, −1, 1) = (1, 2, 3, 4) is checked in full; the remaining items are info only.

Status set to reviewed.
