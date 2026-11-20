---
page: content/year-2/18.06/left-right-inverses-pseudoinverse.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-33-left-and-right-inverses-pseudoinverse/ (lecture page not fetched separately; slug matches the syllabus entry in content/year-2/18.06/_course.json)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/9ba2304f3bc403aa625e99238d6195f7_Go2aLo7ZOlU.pdf (read: all 17 pages from a local copy, header "ocw-18.06-f99-lec33"; per-page text extracted with pdftotext -f N -l N, so every page citation below was checked against the PDF page = transcript page)
verdict: pass-with-notes
---

# Review: Left and right inverses; the pseudoinverse

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Computing A⁺ from the SVD" (text after "Two projections"), frontmatter `summary`, flashcard 4, Summary bullet 4 | Strang calls ΣΣ⁺ and Σ⁺Σ "a projection matrix onto the column space" and "onto the row space" (p. 16), speaking of the diagonal Σ. | "projections onto the column space and the row space", with no "of Σ". A reader can take this as C(A) and the row space of A, which is false in general (ΣΣ⁺ = diag(I_r, 0) projects onto the first r coordinate axes). For A the projections are AA⁺ = UΣΣ⁺Uᵀ and A⁺A = VΣ⁺ΣVᵀ. | Write "of Σ" in all four places, and optionally add one sentence: for A itself, AA⁺ = UΣΣ⁺Uᵀ and A⁺A = VΣ⁺ΣVᵀ are the projections onto C(A) and the row space of A. |
| 2 | info | Bracketed note after "What the pseudoinverse does" | The slip "So y will be A plus x" is the last sentence of p. 11; the correction "I'm sorry. No, y will be A plus times ... A y" opens p. 12. The transcript records speech only. | "(Strang first writes "y = A⁺x" and corrects it ...; p. 12.)" | Cite "pp. 11–12" and say "says" rather than "writes" (whether it was written on the board cannot be seen in the transcript). |
| 3 | info | Bracketed note after "Two projections" | p. 16: "my result is going to m by m -- is going to be n by n". | Note is accurate but has no page. | Add "p. 16". (In the same sentence Strang also calls Σ⁺ "m by m"; not necessary to mention.) |
| 4 | info | Section order, "Left inverse" and "Right inverse" | Strang's order: left inverse (pp. 2–6), right inverse (pp. 6–7), the null spaces in the three cases and the general case's dimensions (pp. 7–8), then back to the left inverse on the wrong side = P (p. 8), then the right inverse on the wrong side = row-space projection (p. 9). | P (p. 8) is placed inside the left-inverse section before the right inverse; the "So far ..." summary (pp. 7–8) comes after the row-space projection (p. 9). | Acceptable regrouping by topic, and page citations make it traceable. Optionally note "(Strang returns to this after the right inverse)". No change required. |

No error-level differences were found. Every formula was checked:
- Two-sided inverse, pp. 1–2: "two-sided" p. 1, r = m = n and "full rank, period" p. 2. Correct.
- Left inverse, pp. 4–5: (AᵀA)⁻¹Aᵀ written p. 4, product = identity p. 5; n × n identity p. 5. Correct.
- Left inverse on the right = P, p. 8. Correct ("It's trying to be the identity matrix", p. 8).
- Right inverse, p. 7: "A times A inverse on the right, will be I" and Aᵀ(AAᵀ)⁻¹ ("now it will be A A transpose that's good") both p. 7. Correct.
- One-to-one on the row space, pp. 11–12: stated p. 11, restated carefully p. 12. Correct.
- What the pseudoinverse does, pp. 11–12: A⁺(Ay) = y p. 12; "the pseudo-inverse just kills this stuff" p. 12 (pointing at the board; the page's reading, A⁺ = 0 on the left nullspace, is the standard definition and consistent with "it just wipes out the null space", p. 16). Correct.
- Σ⁺, p. 15: 1/σ₁ … 1/σ_r, zeros, n × m. Correct.
- ΣΣ⁺ (m × m) and Σ⁺Σ (n × n), pp. 15–16: m × m runs over the page break 15/16, n × n p. 16. Correct.
- A⁺ = VΣ⁺Uᵀ, p. 16: inverse of Vᵀ is V, inverse of U is Uᵀ, both p. 16. Correct.

Other claims checked against the transcript: quiz over, final coming, first step of the review, "never given before in this way" (p. 1); pseudoinverse near the end of chapter 7, not expected on the final (p. 1; also "section seven point four", p. 17); null space zero and row space everything for r = n (p. 3); 0 or 1 solutions, rows probably dependent (p. 4); AᵀA n × n symmetric and invertible, least squares (pp. 4–5); AAᵀ "bad" (p. 5); rectangular matrices have no two-sided inverse (p. 6); left nullspace zero, no zero row in elimination, n − m free variables, infinitely many solutions (pp. 6–7); other one-sided inverses exist, these are the favourites (p. 7); dimensions r, n − r, r, m − r (p. 8); "bring it back to life" (p. 10); same dimension r, one-to-one (p. 10); row-space and null-space components (p. 11); proof via x − y in both spaces (pp. 12–13); statisticians, repeated experiments, singular AᵀA (pp. 13–14); Σ the simplest example of the general setup (p. 15); extra entries in the zero block change nothing, the pseudoinverse is minimal (p. 17); SVD "the champion" (p. 17). All page citations agree with the PDF pages.

Lecturer self-corrections: both bracketed notes describe real corrections in the transcript (y = A⁺x → A⁺(Ay), pp. 11–12; m × m → n × n for Σ⁺Σ, p. 16). See findings 2 and 3 for the page numbers.

## Arithmetic and answer checks
- `npm run calc:test -- -k left-right-inverses`: 9 passed.
- (a) AᵀA = [[2, 1], [1, 2]], det 3, inverse (1/3)[[2, −1], [−1, 2]]; times Aᵀ = [[1, 1, 0], [0, 1, 1]] gives (1/3)[[2, 1, −1], [−1, 1, 2]]. Checked all four products with the columns of A: 1, 0, 0, 1. Correct.
- (b) B = (1, 2, 0)ᵀ(1, 2) reproduces rows (1, 2), (2, 4), (0, 0). σ₁ = √5·√5 = 5 (cross-check: Frobenius norm √(1+4+4+16) = 5 for a rank-one matrix). B⁺ = (1/5)v₁u₁ᵀ = (1/25)[[1, 2, 0], [2, 4, 0]]. B⁺B = (1/25)[[5, 10], [10, 20]] = [[0.2, 0.4], [0.4, 0.8]] = vvᵀ/5 with v = (1, 2), the projection onto the row space. Correct.
- calcs file: all nine entries match the page. The entries of B⁺ itself and the off-diagonal 0.4 of B⁺B are not stored (info; an entry such as (1·2 + 2·4)/25 = 0.4 would cover it).
- Quiz 1: answer 1 (left inverse) for a 5 × 3 rank-3 matrix. Correct.
- Quiz 2: answer 1 (projection onto the column space). Correct.
- Quiz 3: answer 1. Correct.
- Quiz 4: answer 1 (VΣ⁺Uᵀ). Correct; "the last choice needs full column rank" is right (then A⁺ = (AᵀA)⁻¹Aᵀ).
- Flashcards: cards 1–3 correct; card 4 correct for Σ but see finding 1.

## Coverage and order
- Coverage is complete: two-sided, left, right inverses; wrong-side products as projections; the four-subspace dimensions; one-to-one map row space → column space with proof; statisticians' motivation; Σ⁺, ΣΣ⁺, Σ⁺Σ; A⁺ = VΣ⁺Uᵀ; minimality; SVD as the best way to compute it.
- Left out (info, reasonably): Strang's aside about calculus versus linear algebra (pp. 9–10) and the closing remarks (p. 17).
- Order: follows Strang except the regrouping in finding 4.
- Additions: the worked example (original).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript (searched both text extractions). 18.06 Spring 2010 is CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("period", "tries to be the identity", "bring it back to life", "the champion", "no extra stuff").
- Worked example: the lecture has no numerical example, so it is not copied from the lecture. Strang's textbook (Section 7.4) was not read, so a coincidence with a book example is **not verified**; the matrices are generic and the two-part problem is the author's own construction.

## Notes
- `leadsTo: []`: the syllabus in `_course.json` has Lecture 34 "Final course review" as the only later lecture; leaving it out matches how review/exam lectures are handled elsewhere. The previous page (change-of-basis-compression) links forward to Lecture 33, so the chain is intact. No `Callout kind="cosmology"` (none of the 18.06 pages has one), so there are no cosmology claims to check.
- Prerequisite slugs and internal links (`/courses/18-06/four-fundamental-subspaces`, `projection-matrices-least-squares`, `singular-value-decomposition`) use the course slug `18-06`, as other pages do.
- No em dashes on the page.
- The OCW lecture page itself was not fetched; the source and transcript URLs were not checked online (the transcript PDF's header matches Lecture 33).

## Resolution (2026-11-16, by the page author)

1. "of Σ" added in the summary, the text after "Two projections", flashcard 4 and the Summary; the text and summary also give AA⁺ = UΣΣ⁺Uᵀ and A⁺A = VΣ⁺ΣVᵀ as the projections for A itself.
2. The y = A⁺x note now says "says" and cites pp. 11–12.
3. The m × m → n × n note now cites p. 16.
4. No change.

Calcs: added the off-diagonal 0.4 of B⁺B and an entry of B⁺.

Status set to reviewed.
