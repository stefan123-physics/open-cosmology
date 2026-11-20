---
page: content/year-2/18.06/factorization-a-lu.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-4-factorization-into-a-lu/ (read: downloaded lec.html; title "Lecture 4: Factorization into A = LU"; its only .pdf link is bcac89b9054d2f1b8efc7b8c1a859068_MsIvs_6vC38.pdf, matching the page's `reading1` URL; title matches `source.title`)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/bcac89b9054d2f1b8efc7b8c1a859068_MsIvs_6vC38.pdf (read: downloaded independently, "MITOCW | ocw-18.06-f99-lec04_300k", 23 pages per pdfinfo, no printed page numbers, so cited page = PDF page; page boundaries checked with pdftotext -f N -l N against the author's extract all8.txt, which matches)
  - content/year-2/18.06/_course.json (read: Lecture 5 = "Transposes, permutations, spaces R^n"; Lecture 18 = "Properties of determinants")
  - calcs/18.06/factorization-a-lu.yaml (read; `npm run calc:test -- -k factorization-a-lu`: 10 passed)
verdict: pass-with-notes
---

# Review: Factorization into A = LU

Citation convention checked: every `<Formula>` cites `reading1` (the transcript; the lecture has no slides, every equation was on the board), with transcript page = PDF page. Page boundaries used: p. 1 inverse of a product, A = LU announced, "in reverse order"; p. 2 B⁻¹A⁻¹, parentheses, shoes and socks, both sides checked, transpose begins; p. 3 transpose AA⁻¹ = I, (A⁻¹)ᵀAᵀ = I, either order; p. 4 "most basic factorization", no row exchanges, 2 × 2 announced; p. 5 A = (2 1; 8 7), "don't want a four", E₂₁ = (1 0; −4 1), U = (2 1; 0 3); p. 6 L = E₂₁⁻¹ = (1 0; 4 1) "adds back", check, lower triangular, ones on the diagonal, pivots (2, 3) pulled out; p. 7 (1 ½; 0 1), LDU "more balanced", Matlab, 3 × 3 E₂₁, E₃₁, E₃₂; p. 8 inverses in opposite order, "there is L"; p. 9 E₂₁ with −2, E₃₁ = I, E₃₂ with −5; p. 10 zeros above the diagonal, the 10 and why; p. 11 inverses in reverse order, rows 1 and 2 of L; p. 12 row 3 (0 5 1), EA = U vs A = LU, multipliers go directly into L; p. 13 throw away A, new insight, cost question (order a thousand / a million); p. 14 n = 100, no zeros, n vs n² vs n³ vs n!; p. 15 multiply plus subtract as one operation; p. 16 about 100², then about 99²; p. 17 sum n² + … + 1², not n, not n!, determinants are n!; p. 18 ⅓n³, integral of x²; p. 19 right-hand side costs n²; p. 20 zero in pivot position, "Transposes and Permutations", P₁₂; p. 21 listing, "rearrange its rows"; p. 22 the cycles, six, group; p. 23 inverses, Pᵀ = P⁻¹, 24 for 4 × 4, next lecture.

Formula locations: "Inverse of a product" pp. 1–2; "Inverse of a transpose" p. 3; "Elimination step" p. 5; "A = LU" p. 6; "A = LDU" pp. 6–7; "L as a product of inverses" p. 8; "Forward product E" pp. 9–10; "L" pp. 11–12; "Operation count" pp. 17–18; "Inverse of a permutation" p. 23. All correct, and every matrix matches the board as dictated (E₂₁ = (1 0; −4 1), U = (2 1; 0 3), L = (1 0; 4 1), D = diag(2, 3), (1 ½; 0 1), E₂₁ with −2, E₃₂ with −5, product row 3 = (10, −5, 1), L row 3 = (0, 5, 1)).

Prose citations checked as well: intro pp. 1, 4; parentheses and shoes/socks p. 2; transposes pp. 2–3; either order p. 3; 2 × 2 setup and singular remark pp. 4–5; "adds back" pp. 5–6; L, U, pivots p. 6; balanced LDU pp. 6–7; 3 × 3 p. 7; reverse order p. 8; multipliers 2 and 5, E₃₁ = I p. 9; origin of the 10 p. 10; multipliers go directly into L p. 12; throw away A pp. 12–13 (the remark itself is on p. 13); new insight p. 13; cost questions p. 13; operation definition and no zeros pp. 14–15; shrinking stages pp. 16–17; ⅓ from calculus p. 18; right-hand side n² p. 19; permutations p. 20; six of them pp. 20–22; group p. 22; inverses and 24 p. 23. All correct (one small widening suggested below, #2).

"Rights reserved" / "courtesy" check: no occurrence in the transcript text or in the lecture page HTML. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Operation count" formula | p. 18: "if that was like an integral from one to n, of x squared b x [dx], … one third n cubed" | $\int_0^n x^2\,dx = \frac13 n^3$ | The page's lower limit 0 makes the equality exact (from 1 it is (n³ − 1)/3), so the change is an improvement, not an error. Under writing rule 4 a short bracket is optional, e.g. "(Strang wrote the integral from 1 to n; from 0 it gives exactly n³/3.)" |
| 2 | info | "Permutations": "the rows of the identity rearranged (transcript, p. 20)" | p. 20 has "I just exchanged those rows of the identity" for P₁₂; the general statement "all the ways I can take the identity matrix and rearrange its rows" is on p. 21. | p. 20 | Cite pp. 20–21. |
| 3 | info | Summary bullet: "there are $n!$ of them"; frontmatter summary "(n! in general)" | Lecture 4 only gives 6 (3 × 3) and 24 (4 × 4), p. 23; the general n! is stated in Lecture 5. | n! stated as a fact of this lecture. | Correct mathematics; optionally say "6 and 24, that is n! in general" in the body so the summary does not introduce something the body did not state. |
| 4 | info | "Three by three" section | p. 10: before computing the 10, Strang points out that the product E has ones on the diagonal and zeros above, because rows are only subtracted from lower rows ("nothing is moving upwards as it did last time in Gauss–Jordan"). | Not mentioned. | Optional sentence: "Both E and L are lower triangular with ones on the diagonal, since rows are only subtracted from rows below them." |
| 5 | info | "A = LDU" paragraph | p. 7: "Matlab would produce either one. I'll basically stay with L U." | Not mentioned. | Optional; the page uses LU throughout anyway. |
| 6 | info | Worked example (a): "The determinant is the product of the pivots" | Determinants are not part of Lecture 4 (Strang only gives them "a bad mark", pp. 17–18); the product-of-pivots fact was mentioned in Lecture 2 and is proved in Lecture 18. | Stated without a pointer. | Correct here (no row exchanges; cofactor expansion also gives 24). Optional: "(as noted in Lecture 2; proved in Lecture 18)". |

No errors or warnings found: no wrong physics or mathematics, no wrong number, no wrong citation.

## Arithmetic and answer checks
- 2 × 2: E₂₁A row 2 = (8, 7) − 4(2, 1) = (0, 3). L U = (1 0; 4 1)(2 1; 0 3) = (2 1; 8 7). LDU: (2 0; 0 3)(1 ½; 0 1) = (2 1; 0 3) = U. Correct. "A 4 in the bottom right corner": det (2 1; 8 4) = 8 − 8 = 0, singular. Correct.
- Forward product E₃₂E₂₁: row 3 = −5·(−2, 1, 0) + (0, 0, 1) = (10, −5, 1); rows 1, 2 = (1, 0, 0), (−2, 1, 0). Correct.
- L = E₂₁⁻¹E₃₂⁻¹: row 2 = 2·(1, 0, 0) + (0, 1, 0) = (2, 1, 0); row 3 = (0, 5, 1). Correct.
- Worked example (a), A = (3 1 2; 6 4 5; −3 3 4): ℓ₂₁ = 6/3 = 2, row 2 → (0, 2, 1); ℓ₃₁ = −3/3 = −1, row 3 → (−3, 3, 4) + (3, 1, 2) = (0, 4, 6); ℓ₃₂ = 4/2 = 2, row 3 → (0, 0, 4). L = (1 0 0; 2 1 0; −1 2 1), U = (3 1 2; 0 2 1; 0 0 4). Full product LU recomputed: rows (3, 1, 2), (6, 4, 5), (−3, 3, 4) = A. Determinant by cofactors 3(16 − 15) − 1(24 + 15) + 2(18 + 12) = 3 − 39 + 60 = 24 = 3·2·4. Correct.
- Worked example (b): 1000³/3 = 3.33 × 10⁸ ≈ 3.3 × 10⁸; doubling n: 2³ = 8 for A, 2² = 4 per right-hand side. Correct.
- Quiz 1: answer index 1, B⁻¹A⁻¹. Correct; explanation (AB)(B⁻¹A⁻¹) = AIA⁻¹ = I correct.
- Quiz 2: answer index 2 (multipliers go directly into L). Correct; explanation matches p. 12.
- Quiz 3: answer index 3, ⅓n³. Correct; explanation correct.
- Flashcards: all three correct ((Aᵀ)⁻¹ = (A⁻¹)ᵀ; L has ones on the diagonal and multipliers below; ⅓n³ and n²).
- calcs/18.06/factorization-a-lu.yaml: 10 entries, all pass. Every number on the page is covered (3, 10, ⅓n³ ratio, 6, 24, example rows, pivot 4, det 24, 3.3 × 10⁸). Minor: the page-own example entries (`ex-*`, `origin: page-own`) carry `source: {cite: reading1, at: 'p. 12'}`, which is only the method's location; harmless.

## Coverage and order
- The page follows the lecture's order exactly: inverse of a product (pp. 1–2), inverse of a transpose (pp. 2–3), 2 × 2 LU and LDU (pp. 4–7), 3 × 3 and why L beats E (pp. 7–13), operation count (pp. 13–19), permutations (pp. 20–23).
- Omitted (minor): the remark that E and L are lower triangular with unit diagonal (p. 10, #4); Matlab producing either form (p. 7, #5); Strang's worry that students will think the course is "all elimination" (p. 4); his question about inventing a matrix needing two row exchanges (p. 20), which he did not pursue.
- Added: worked example (own), and the general n! (#3).
- Lecturer slips not repeated: integral "from one to n" and "b x" for dx (p. 18; #1); "n factorial, so it would take me a hundred times as long" when doubling n from 100 to 200 (p. 14; n! grows far more); the garbled "row two and row one moves down to row three" (p. 18). The page repeats none of these.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript or on the OCW lecture page; nothing to credit beyond MIT OCW.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short standard phrases ("most basic factorization", "multipliers go directly into L", shoes/socks paraphrased).
- The 2 × 2 matrix (2 1; 8 7) and the 3 × 3 multipliers 2 and 5 are Strang's lecture examples, used as lecture content with citations, which is appropriate. The worked example matrix (3 1 2; 6 4 5; −3 3 4) is not in the lecture. I did not find it among the examples I know from Strang's *Introduction to Linear Algebra*, Section 2.6, but I could not check the textbook itself, so its originality relative to the book is likely but unverified.

## Notes
- leadsTo: Lecture 5 "Transposes, permutations, spaces Rⁿ" matches `_course.json` and the OCW title; the lecture's own closing (p. 23: "in the next lecture, we'll use them", "finishes Chapter 2 and moves to Chapter 3") supports it.
- The page has no `Callout kind="cosmology"`; nothing to check there. That is acceptable for a linear-algebra foundation page without a direct link.
- "Not n, not n! (as determinants by their formula would be)" is cited to p. 18; the determinant remark starts at the end of p. 17 ("with determinants, it is n factorial") and continues on p. 18. pp. 17–18 would be slightly more exact; not listed as a finding.

## Resolution (2026-11-16, by the page author)

1. Added a bracket: Strang integrates from 1 to n; from 0 gives exactly n³/3.
2. Permutation definition cited to pp. 20–21.
3. The body now says there are n! permutation matrices of size n.
4. Added the p. 10 remark that E and L are lower triangular with unit diagonal.
5. MATLAB's LU/LDU remark left out (optional).
6. Determinant as product of pivots now points back to Lecture 2.

Status set to reviewed.
