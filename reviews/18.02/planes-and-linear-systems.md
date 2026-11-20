---
page: content/year-1/18.02/planes-and-linear-systems.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-4-square-systems/ (read: local copy of the lecture page HTML; title "Lecture 4: Square Systems"; its transcript link is the reading2 URL below)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/1dd4794f4f464b2dec638f6185ecc2ca_YBajUR3EFSM.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec04", 4 dense pages, no printed page numbers; cited page = PDF page, text per page checked)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week2/ (read: local copy week2.pdf; PDF p. 1 is a cover; Lecture 4 on printed pp. 2–3 = PDF pp. 3–4, confirmed with pdftotext -f/-l; printed p. 2 ends after "The unique solution to AX = B is given by X = A⁻¹B", printed p. 3 starts with "Exception: if the 3rd plane is parallel …")
  - content/year-1/18.02/_course.json (read: Lecture 4 = Square Systems, Lecture 5 = Parametric Equations)
  - calcs/18.02/planes-and-linear-systems.yaml (read; `npm run calc:test -- -k planes-and`: 11 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Equations of planes and square systems

Citation convention checked: transcript pages are PDF pages (no printed numbers); notes pages are the printed page numbers (Lecture 4 = printed pp. 2–3). `reading1` = Week 2 summary, `reading2` = transcript; every `<Formula>` cites `reading2` with a transcript page, and every in-text "notes, p. N" matches the printed page. No "rights reserved" or "courtesy" notice in the transcript or the Week 2 summary.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Three planes and a 3 × 3 system", list after "What else can happen?" | Transcript p. 3: besides the third plane being parallel to the line, the first two planes may themselves be **parallel** (no solution already to the first two equations) or the **same** plane; only in the latter case, with the third plane equal too, is there a plane of solutions. | The list is introduced by "If the third plane is parallel to the line where the first two meet", then its third bullet is "all three equations describe the same plane", which has no such line. The case of two distinct parallel planes (no solution) is left out. | Take the third bullet out of the "parallel to the line" list and add a sentence: "The first two planes may also fail to meet in a line: if they are parallel there is no solution at all, and if all three are the same plane there is a whole plane of solutions (p. 3)." |
| 2 | info | Frontmatter `source.title` | OCW lecture page title: "Lecture 4: Square Systems" (also the `_course.json` syllabus title). | "MIT 18.02 Lecture 4: Square Systems; Equations of Planes". | Use "MIT 18.02 Lecture 4: Square Systems" to match OCW and the matrices page's style, or keep the addition knowingly (the transcript's topic is indeed equations of planes). |
| 3 | info | "Homogeneous systems", Formula "A nontrivial solution", flashcard 3, summary and frontmatter summary | Transcript pp. 3–4 argue with three planes meeting in a line (N₁, N₂ not parallel); notes p. 3: "infinitely many solutions (forming a line or a plane)", "for example … N₁ × N₂". | "a line of solutions along N₁ × N₂ (or a plane)"; flashcard: "for example along N₁ × N₂"; frontmatter: "a whole line (or plane) of solutions … along N₁ × N₂". | Correct for the case the lecture draws, but N₁ × N₂ = 0 when N₁ ∥ N₂ (and then "the plane of the normals" is not defined). Optional: add "(when N₁ and N₂ are not parallel)" once in the section, and drop "along N₁ × N₂" from the plane case in the frontmatter summary. |
| 4 | info | "Equations of planes", last paragraph on d | Transcript p. 3, a student question asked after the three-plane discussion. | Placed in the planes section (cited p. 3). | Reasonable regrouping by topic, and the page cites it correctly. Optional: no change. Strictly the distance is \|d\| / \|⟨a, b, c⟩\| (sign aside); the page's "scaled by the length" matches the lecture. |
| 5 | info | "When A has no inverse", last sentence | Transcript p. 3: det A = 0 is "the line determined by the first two planes is parallel to the third plane"; p. 4: "planes that are all parallel to a same line". | "det A = 0 is the case of planes parallel to one line (p. 3)". | The wording is p. 4's (and more general than p. 3's). Optional: cite "(pp. 3–4)". |
| 6 | info | Opening paragraph | Transcript p. 1: today's topic is equations of planes "and how they relate to linear systems and matrices" from Tuesday's lecture. | "connects the last one in both directions". | Fine as a paraphrase; "in both directions" is the page's own gloss. |

Every formula and prose page reference was checked against its cited location:
- "Plane through the origin" (`reading2`, p. 1): N = ⟨1, 5, 10⟩, OP · N = 0, x + 5y + 10z = 0 on transcript p. 1 (the plus signs are lost in the transcript's text layer; notes p. 2 confirm them). Correct.
- "Plane through a point" (`reading2`, p. 1): P₀ = (2, 1, −1), (x − 2) + 5(y − 1) + 10(z + 1) = 0, x + 5y + 10z = −3: p. 1; notes p. 2. Correct. The quick method by plugging in P₀, "single most important thing", 2x + 10y + 20z = −6, normal via a cross product: all p. 1. Correct.
- "Parallel to the plane" (`reading2`, p. 1): v = ⟨1, 2, −1⟩, plane x + y + 3z = 5, v · N = 1 + 2 − 3 = 0: p. 1; notes p. 2. Correct. The student question about the point (1, 2, −1) and the plane x + y + 3z = 0 runs from the end of p. 1 to the top of p. 2, so "(pp. 1–2)" is correct.
- "The unique solution" (`reading2`, p. 2): X = A⁻¹B, "not BA⁻¹, sizes are not compatible": p. 2; notes p. 2. Correct. The lecture's system x + z = 1, x + y = 2, x + 2y + 3z = 3 and "two planes meet in a line, the line meets the third plane in a point": p. 2. Correct.
- Hand-solving gives 0 = 0 or a contradiction such as x + z = 1 and x + z = 2; two solutions impossible: p. 2. Correct. Infinitely many / none sub-cases: p. 2, notes p. 3. Correct.
- "Invertibility" (`reading2`, p. 3): adjoint always computable, divide by det A, "invertible exactly when its determinant is not zero", "there isn't an inverse at all": p. 3; notes p. 3 ("Theorem"). Correct.
- Homogeneous systems, trivial solution, X = A⁻¹0 = 0, normals coplanar, flat parallelepiped: p. 3; notes p. 3. Correct. Line through the origin perpendicular to the plane of the normals, contained in all three planes: end of p. 3 and p. 4, so "(pp. 3–4)" is correct.
- "A nontrivial solution" (`reading2`, p. 4): N₁ × N₂ perpendicular to N₁, N₂ and automatically N₃: p. 4; notes p. 3. Correct.
- General systems: planes shifted to parallel positions (notes p. 3); unique solution if det A ≠ 0, otherwise none or infinitely many, never one, elimination ends in 0 = 0 or 1 = 2 (transcript p. 4). Correct.

## Arithmetic and answer checks
- Plane through P₀: 2 + 5·1 + 10·(−1) = −3; expansion −2 − 5 + 10 = 3 on the left, so x + 5y + 10z = −3. Correct.
- v · N = 1 + 2 − 3 = 0; the point (1, 2, −1) gives 0, not 5. Correct.
- The lecture's system (solved by the page, not in the lecture): y = 2 − x, z = 1 − x gives x + 4 − 2x + 3 − 3x = 7 − 4x = 3, x = 1, so (1, 1, 0); checks 1 + 0 = 1, 1 + 1 = 2, 1 + 2 + 0 = 3. Correct. Consistent with the page's claim of a unique solution: det [1 0 1; 1 1 0; 1 2 3] = 1·3 − 0 + 1·(2 − 1) = 4 ≠ 0 (not stated on the page; optional to mention).
- Worked example (a): 2·1 − 2 + 4·3 = 12, plane 2x − y + 4z = 12. Correct.
- Worked example (b): det [1 1 1; 1 −1 0; 2 0 1] = 1(−1 − 0) − 1(1 − 0) + 1(0 + 2) = 0, and N₃ = N₁ + N₂ = ⟨2, 0, 1⟩. Correct. N₁ × N₂ = ⟨1·0 − 1·(−1), −(1·0 − 1·1), 1·(−1) − 1·1⟩ = ⟨1, 1, −2⟩, each component as written. Correct. Checks 1 + 1 − 2 = 0, 1 − 1 = 0, 2 − 2 = 0. Correct.
- Worked example (c): row 3 = row 1 + row 2, so the right sides must satisfy b₃ = b₁ + b₂; 1 + 1 = 2 ≠ 3, no solution; with 2 the system is consistent and of rank 2, a line of solutions. Correct. Example is original (own plane, own singular system).
- Quiz 1 (index 0, ⟨3, −1, 2⟩): correct; explanation right. Quiz 2 (index 1, parallel): ⟨1, 1, 1⟩ · ⟨1, −2, 1⟩ = 0, correct; explanation right. Quiz 3 (index 2, none or infinitely many): correct; explanation matches transcript p. 4. Quiz 4 (index 0, only X = 0): correct.
- Flashcards: 1 and 2 correct; 3 correct for the case the lecture draws (see #3).
- calcs/18.02/planes-and-linear-systems.yaml: 11 entries, all pass, values agree with the page; `origin: mit` / `page-own` labels are right. Info: the `quiz-2`, `example-*` and `lecture-system-*` entries are page-own but carry a `source` citing the transcript; harmless. The middle cross-product component and the first two checks in (b) have no entries (optional).

## Coverage and order
- MIT order (transcript): planes through the origin and through P₀, coefficients = normal, many equations, normal via cross product (p. 1) → flashcard on v and x + y + 3z = 5, student question (pp. 1–2) → 3 × 3 systems as three planes, the example system, X = A⁻¹B (p. 2) → what can go wrong: flashcard on possible solution sets, line parallel to or inside the third plane, two solutions impossible (p. 2) → parallel or equal first two planes, plane of solutions (p. 3) → student question on d (p. 3) → det A ≠ 0 ⇔ invertible (p. 3) → homogeneous systems, coplanar normals (pp. 3–4) → N₁ × N₂ (p. 4) → general systems (p. 4). The page follows this order, except the d question, moved up to the planes section (#4).
- Left out (minor): the case of two distinct parallel planes among the first two (#1); why "homogeneous" (invariance under scaling, p. 3); the remark that one solution with det A = 0 implies infinitely many (p. 4); the lecture's spoken list of answers (tetrahedron etc.), whose substance (two solutions impossible, plane possible) is kept.
- Added: the solution (1, 1, 0) of the lecture's system (correct), and the worked example. Nothing else beyond the lecture. No cosmology callout, which is reasonable here.
- leadsTo: 18.02 Lecture 5 "Parametric equations for lines and curves": transcript p. 4 ends with "parametric equations for lines and curves"; notes Lecture 5 (printed p. 3) covers lines and the cycloid; `_course.json` Lecture 5 = Parametric Equations. Correct.

## Licensing
- No paragraph copied from the transcript or the notes; prose is rewritten. Short phrases ("single most important point", "shifted to parallel positions", "trivial solution") are standard or brief.
- The plane, vector and system examples are MIT's and cited as such; the worked example uses its own numbers.
- No "All rights reserved" or "Courtesy of" material in either source; no figures reproduced. No OpenStax or LibreTexts material.

## Notes
- Internal link `/courses/18-02/matrices` matches the course slug `18-02` and the matrices page's own link style.
- Verdict pass-with-notes: no errors found; one warning (#1, an incomplete case list), the rest info.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the "all three the same plane" case is no longer a bullet under "parallel to the line"; a new sentence covers both cases where the first two planes do not meet in a line (parallel and distinct: no solution; the same plane: a plane of solutions if the third is it too), cited to p. 3.
- Info 2: `source.title` is now "MIT 18.02 Lecture 4: Square Systems".
- Info 3: the text, flashcard and both summaries now say N₁ × N₂ works when N₁ and N₂ are not parallel.
- Info 5: "planes parallel to one line" now cites pp. 3–4.
- Info 4 and 6 are left as they are.
