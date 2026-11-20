---
page: content/year-2/18.06/cramers-rule-inverse-volume.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-20-cramers-rule-inverse-matrix-and-volume/ (lecture page not fetched separately; slug matches the syllabus entry in content/year-2/18.06/_course.json)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/de52fa820f50feb22e656ebf77c26308_QNpj-gOXW9M.pdf (read: all 24 pages, per-page text extracted with pdftotext; page numbers checked against the PDF with pdftotext -f N -l N)
  - https://en.wikipedia.org/wiki/Lancelot_Hogben (read, to check the authorship of Mathematics for the Million)
verdict: pass-with-notes
---

# Review: Cramer's rule, the inverse matrix and volume

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "The determinant is a volume", line 93 (area of parallelogram) | Strang says the area "is just ad−bc" (p. 22), without an absolute value, right after saying the volume is the absolute value of the determinant (p. 16). | "has area $ad - bc$ (p. 22)", while the volume formula, quiz 3, the flashcard and the Summary use $\lvert ad - bc\rvert$. | For consistency, write "area $\lvert ad - bc\rvert$ (the signed area is $ad - bc$)". |
| 2 | info | Frontmatter `summary` | p. 24: half a parallelogram, determinant with a column of ones. | "area ½ times a 3 × 3 determinant with a column of ones" (no absolute value; the Formula on the page has it). | Add "the absolute value of" in the summary. |
| 3 | info | "Checking it" bullets (pp. 19–20) | Strang first keeps all right angles and doubles one edge of a rectangular box (cube on top of cube), then says he must "get away from right angles" for 3B (pp. 19–20). | Doubling bullet does not say it is argued for rectangular boxes only. | Optional: "for a rectangular box, doubling one edge ...". |
| 4 | info | "Property 3B ... Strang leaves it to the book (pp. 21, 24)" | Strang writes 3B explicitly in the 2 × 2 case: det with first row (a+a′, b+b′) splits into two determinants (p. 21). | 3B named, not written out. | Optional: add the 2 × 2 statement of 3B in words or inline maths. |

No error-level differences were found. Every formula was checked:
- Two by two inverse, p. 1: matches (stated on p. 1).
- $A^{-1} = C^T/\det A$, pp. 2–3: stated p. 2, transpose explained pp. 2–3. Correct.
- $AC^T = (\det A)I$, p. 5: correct.
- Cramer's rule, pp. 11–13: $B_1$ defined p. 12, general $x_j = \det B_j/\det A$ p. 13. Correct.
- $\lvert\det A\rvert$ = volume, pp. 14–16: box p. 15, absolute value and handedness p. 16. Correct.
- $\det Q = \pm 1$, pp. 18–19: $Q^TQ = I$ on p. 18, determinants taken with "rule nine" and "rule ten" on p. 19. Correct, and "properties 9 and 10" matches.
- Triangle area with column of ones, pp. 23–24: written on p. 24, "half of a parallelogram" also on p. 24. Correct.

Other claims checked: cofactor of $a$ is $ei - fh$ (p. 4); diagonal = cofactor formula (pp. 5–6); off-diagonal as two equal rows, with the 2 × 2 check $a\cdot b + b\cdot(-a) = 0$ (pp. 8–9; this is the expansion along row 1 of the matrix with rows (a, b), (a, b), as Strang does); change of one entry (pp. 9–10); $\det B_1$ expanded down column 1 gives $b_1C_{11} + b_2C_{21} + \cdots$ (p. 12); n + 1 determinants, "approximately forever", "disastrous way to go", elimination "in an instant" (p. 13); MATLAB would use elimination (p. 14); columns as well as rows since $\det A^T = \det A$ (p. 17); property 2 and 3A checks (pp. 20–21); base times height with square roots (p. 22); subtracting a row kills the ones, equivalent to moving the triangle to the origin (p. 24); eigenvalues next (p. 24). All page citations agree with the printed transcript pages.

Lecturer slips:
- Strang: "Mathematics for the Million or something, by a guy named Bell" (p. 13). The book *Mathematics for the Million* (1936) is by Lancelot Hogben (verified; E. T. Bell wrote *Men of Mathematics*, which is probably the source of the mix-up). The page's bracketed correction is right.
- The ½ in the triangle formula: Strang says "there'll be that half of a parallelogram" and then writes only the determinant (p. 24). The page's bracketed note describes this accurately and the factor ½ is correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k cramers-rule`: 7 passed.
- Worked example (a): det = 15 − 8 = 7. Cofactors $C_{11}=5, C_{12}=-4, C_{21}=-2, C_{22}=3$; $A^{-1} = \frac17\begin{pmatrix}5&-2\\-4&3\end{pmatrix}$; checked $AA^{-1} = I$ (rows give (7, 0) and (0, 7), divided by 7). Correct.
- Cramer: $x_1 = (40-26)/7 = 2$, $x_2 = (39-32)/7 = 1$; $3\cdot2+2\cdot1 = 8$, $4\cdot2+5\cdot1 = 13$. Correct.
- (b): $1(2-5) - 1(4-2) + 1(20-4) = -3 - 2 + 16 = 11$, area 5.5. Cross-checked with the shoelace formula (−2 + 16 − 3 = 11) and with the shifted sides (3, 1), (1, 4): $(12 - 1)/2 = 5.5$. Correct.
- calcs file: all seven entries match the page text; the `inv-2x2` identity only samples entry (1, 1) of $AA^{-1}$ (trivially 1); acceptable, though a check of an off-diagonal entry ($(ab - ba)/(ad-bc) = 0$) would test more.
- Quiz 1: answer 1 (two equal rows). Correct; explanation correct for $i \ne k$.
- Quiz 2: answer 1 (column 2 replaced by $b$). Correct.
- Quiz 3: answer 1 ($\frac12\lvert ad-bc\rvert$). Correct; the distractor $\sqrt{(a^2+b^2)(c^2+d^2)}$ is the product of side lengths, not an area, so it is a fair distractor.
- Flashcards: all three correct.

## Coverage and order
- The page follows Strang's order: inverse from cofactors (pp. 1–10), Cramer's rule (pp. 10–14), determinant as volume (pp. 14–21), areas of parallelogram and triangle (pp. 21–24), eigenvalues next.
- Nothing substantial is left out. Small omissions (info only): the explicit 2 × 2 form of property 3B (p. 21), and that the edge-doubling argument is for rectangular boxes (pp. 19–20).
- Additions: the worked example (original numbers) and the ½ in the triangle formula (flagged as such).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript text (searched). 18.06 Spring 2010 is under CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short, attributed quoted phrases ("approximately forever", "a disastrous way to go", "for the millionaire"), which is fine.
- Worked example: the transcript has no numerical examples, so it is not Strang's lecture example. Whether the numbers coincide with an example in Strang's textbook (Introduction to Linear Algebra, Section 5.3) was **not verified** (book not read); the numbers look generic and the problem combines three parts, so a close copy is unlikely.

## Notes
- `leadsTo` 18.06 Lecture 21 "Eigenvalues and eigenvectors" matches the syllabus in `_course.json` and Strang's closing remark (p. 24).
- No `Callout kind="cosmology"`; there are no cosmology claims to check. Not required by itself, but if other 18.06 pages carry a cosmology link the author may want one here (e.g. volume elements / Jacobians), only if a real connection is stated.
- No em dashes on the page.
- The OCW lecture page itself was not fetched; the source URL agrees with the course syllabus entry.

## Resolution (2026-11-16, by the page author)

1–2. Absolute values added to the parallelogram area (p. 22) and to the triangle area in the summary.
3. The doubling bullet now says rectangular box, as Strang argues it.
4. The 2 × 2 form of property 3B for areas is now stated.
5. The `inv-2x2` calcs entry now also tests an off-diagonal entry.

Status set to reviewed.
