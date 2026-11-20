---
page: content/year-1/18.02/dot-product.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-1-dot-product/ (read: local copy lec.html; its PDF link is a6ef6f99ba62d94a0cbcb4bfd5eefce4_PxCxlsl_YwY.pdf, matching reading2)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/a6ef6f99ba62d94a0cbcb4bfd5eefce4_PxCxlsl_YwY.pdf (read: local copy transcript.pdf, 12 PDF pages, no printed page numbers, page-split text tp.txt; "ocw-18_02-f07-lec01")
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week1/ (read: local copy w1.html, "Week 1 Summary"; its PDF 649253ba60d11b0598cc58e9dcf58142_lec_week1.pdf = week1.pdf/week1.txt, OCW cover + Lecture 1 on printed p. 1 = PDF p. 2, confirmed with pdftotext -f/-l)
  - content/year-4/8.286/homogeneous-expansion.mdx (read: cosmology callout and leadsTo check)
  - content/year-1/18.02/_course.json (read: Lecture 2 = Determinants) and the Lecture 2 section of week1.txt (components along a direction, area, determinants, cross product)
  - content/year-1/8.01/vectors.mdx and work-in-two-and-three-dimensions.mdx (read: link target and existing coverage of the scalar product)
  - calcs/18.02/dot-product.yaml (read; `.venv/Scripts/python -m pytest tests/calc -q -k dot-product`: 9 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Vectors and the dot product

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers); notes pages are the printed footers (Lecture 1 = printed p. 1 = PDF p. 2). No "rights reserved" or "courtesy" notice in the transcript, the Week 1 summary, or the lecture and summary HTML pages.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Lengths and angles", formula "An angle in space", `at="p. 10"` | Transcript p. 9: cos θ = PQ·PR/(\|PQ\|\|PR\|), PQ = ⟨−1,1,0⟩, PR = ⟨−1,0,2⟩, denominator √2·√5. p. 10: numerator 1, 1/√10, "about 71.5°". | The whole chain, including the √2·√5 denominator, cited to p. 10 only. | `at="pp. 9–10"`. (The prose before it, "(pp. 9–10; notes, p. 1)" for the two vectors, is acceptable, though the vectors themselves are on p. 9 alone.) |
| 2 | warning | Opening paragraph | Not an MIT point: the scalar product is already taught on the site in 8.01 `work-in-two-and-three-dimensions` (8.01SC segments 21.1–21.3). | "(This page reviews vectors from 8.01 and adds the dot product.)" | The dot product is not new to a reader who took 8.01 Lesson 21. Suggest "reviews vectors and the scalar product from 8.01 ([vectors](/courses/8-01/vectors), [work in two and three dimensions](/courses/8-01/work-in-two-and-three-dimensions)) and proves its geometric meaning", or keep the sentence if 18.02 is meant to be read before 8.01 Lesson 21. |
| 3 | info | "Vectors", formula "Components of a vector", `cite="reading2" at="pp. 1–2"` | Transcript pp. 1–2 introduce î, ĵ, k̂ and the angle-bracket notation in words; the explicit a₁î + a₂ĵ + a₃k̂ was on the board and is written out in full only in the notes, p. 1. | Cited to the transcript only. | Correct as cited; optionally add `reading1` p. 1, where the whole formula appears. |
| 4 | info | "Lengths and angles", bracket after the angle formula | Transcript p. 10 "about 71.5°"; notes p. 1 "≈ 71.5". | θ ≈ 71.6°, "(The lecture and notes give about 71.5°; the angle is 71.57°.)" | Verified: arccos(1/√10) = 71.565°, so 71.6° to one decimal and 71.57° to two; MIT's 71.5 is a truncation. The bracket is correct and follows writing rule 4. Optional: add 1.249 rad, since the lecturer remarks that the course will mostly use radians (p. 10). |
| 5 | info | "Perpendicular vectors and planes" | Notes p. 1: "the plane through O with normal vector A". Transcript p. 11: "a plane through the origin perpendicular to A". | "the plane through the origin perpendicular to A" | Correct. Optionally introduce the term **normal vector** here, since later lectures use it. |
| 6 | info | "Vectors", addition | Notes p. 1: the parallelogram's diagonals are A + B and B − A. Transcript p. 5: A − B as A plus −B. | A + B as the diagonal; A − B = A + (−B). | Fine; the second diagonal (B − A) is not mentioned. Optional. |
| 7 | info | "Vectors" | Notes p. 1 and transcript p. 1: the drawing convention for 3D axes (x toward the viewer/lower left, y right, z up); "dir A" notation (p. 2). | Not mentioned. | Optional; neither is needed for the content. |

Every formula and every prose page reference was checked against its cited location:
- Goal of multivariable calculus: notes p. 1. Correct.
- Vector = direction + length, drawn as an arrow: transcript p. 1. î on p. 1; ĵ, k̂ and ⟨a₁, a₂, a₃⟩ on p. 2. Correct ("pp. 1–2").
- |A| is a scalar; direction = A/|A|; PQ has no fixed starting point: p. 2. Correct.
- Length of ⟨3,2,1⟩ via B = 3î + 2ĵ, √13, |A|² = |B|² + 1 = 14: p. 3 (question posed on p. 2). Correct. General formula: p. 3 and notes p. 1. Correct.
- Any number of components, "multi" = mostly two or three, 10,000 variables: p. 3. Correct (the lecturer also says "a million variables" on the same page).
- Two answers, geometric and numerical; head to tail; parallelogram; A + B = B + A; componentwise: p. 4. Correct. 2A, −A and 3î + 2ĵ + k̂: pp. 4–5. Correct. A − B: p. 5. Correct.
- Dot product definition: pp. 5–6 (starts on p. 5, "sum all of these together" on p. 6). Correct. "A scalar ... easy to forget": p. 6. Correct.
- A·B = |A||B| cos θ, "the first theorem in 18.02", lengths and angles at once, easy to compute: p. 6. Correct.
- Proof: A·A check p. 7; law of cosines, C = A − B, |C|² = C·C p. 7; expansion and A·B = B·A p. 8; equivalence p. 8. Formula "pp. 7–8" correct; also in notes p. 1.
- cos θ = A·B/(|A||B|): transcript p. 9. Correct. Triangle P, Q, R: P on p. 8, Q and R on p. 9 ("pp. 8–9"). Correct.
- Sign of the dot product and "how much the two vectors are going along each other": p. 10. Correct.
- Orthogonality, "a complicated word from Greek": p. 10; the "if and only if" statement pp. 11–12. Prose cites pp. 10–12. Correct.
- x + 2y + 3z = 0, OP·A = 0, a vertical vector gives the horizontal plane: p. 11. Correct.
- Components along any direction next time: p. 12. Correct (confirmed by the Lecture 2 section of the Week 1 summary).

## Arithmetic and answer checks
- |⟨3,2,1⟩|: √(9 + 4) = √13; 13 + 1 = 14; √14 = 3.742. Correct.
- Angle at P: PQ = Q − P = ⟨−1,1,0⟩, PR = R − P = ⟨−1,0,2⟩; PQ·PR = 1 + 0 + 0 = 1; |PQ| = √2, |PR| = √5; cos θ = 1/√10 = 0.3162; θ = 71.565° ≈ 71.6°. Correct.
- Identity |A − B|² = |A|² + |B|² − 2A·B: correct (expanded by hand; also the calcs identity entry).
- Worked example: |⟨2,−1,2⟩| = √9 = 3; |⟨1,1,0⟩| = √2 = 1.4142; A·B = 2 − 1 + 0 = 1; cos θ = 1/(3√2) = 0.2357 ≈ 0.236; θ = 76.37° ≈ 76.4° ("a little less than a right angle" is right); (1,2,0): 2 − 2 + 0 = 0, lies in the plane. All correct.
- Cosmology callout: v·r = H r·r = H|r|² > 0 for H > 0 (expanding), so every galaxy recedes; v_B − v_A = H r_B − H r_A = H(r_B − r_A), the same law about A. Correct.
- Quiz 1 (index 1, √14): correct; explanation right. Quiz 2 (index 1, −1): 4 − 2 − 3 = −1, correct; "a number, not a vector" right. Quiz 3 (index 2, more than 90°): correct; explanation right (for non-zero vectors). Quiz 4 (index 1, plane through the origin perpendicular to ⟨2,−1,2⟩): correct.
- Flashcards: all three correct. Info: "A·B = 0 exactly when A ⊥ B" holds for non-zero vectors (or with the convention that the zero vector is perpendicular to everything); the lecture states it the same way, so no change is needed.
- calcs/18.02/dot-product.yaml: 9 entries, all pass, and their values agree with the page (3.742, 71.6, −1, 3, 1.414, 0.236, 76.4, 0, and the law-of-cosines identity). Info: `length-321` computes √14 = 3.742 while its `shown` text is "|A|² = |B|² + 1 = 14" (the page never prints 3.742); harmless, but `formula: 3**2 + 2**2 + 1**2`, `expected: '14'` would match what is shown. The intermediate √13 and √2·√5 = √10 have no entries of their own (the final angle is covered by `angle-pqr`).

## Coverage and order
- MIT order (transcript): vectors and notation (pp. 1–2) → length of ⟨3,2,1⟩ and the general formula (pp. 2–3) → addition, scalar multiplication, subtraction (pp. 4–5) → dot product definition (pp. 5–6) → geometric theorem (p. 6) → proof via the law of cosines (pp. 7–8) → application 1, angles: triangle PQR (pp. 8–10) → sign of the dot product (p. 10) → application 2, orthogonality: x + 2y + 3z = 0 (pp. 10–12) → preview of components along a direction (p. 12). The page follows this order, with one small regrouping: it states "A·B = 0 exactly when perpendicular" before the plane example, while the lecture states the general rule after it (pp. 11–12). Harmless.
- Left out (all minor and optional): 3D axis drawing convention, "dir A" notation, the flashcard votes, the B − A diagonal, the remark about radians, the lecturer's answer (p. 8) that the expanded form has no cos θ because it only expands a dot product.
- Added: the worked example and the cosmology callout. Nothing else goes beyond the lecture.
- leadsTo: 18.02 Lecture 2 is "Determinants" in `_course.json`; the Week 1 summary shows Lecture 2 covers components along a direction, area, determinants and the cross product, so "Determinants and the cross product, the other way of multiplying vectors" is accurate. 8.286 Lecture 4 is `homogeneous-expansion` (The Kinematics of the Homogeneous Expanding Universe), which states v = Hr and that switching to another galaxy's frame gives the same law around it (its "are we at the centre?" paragraph and worked example). The callout's vector version of that argument is correct. That page writes Hubble's law in scalar form; whether Guth writes it as a vector in Lecture 4 was not checked (the 8.286 transcript was not read for this review), but neither the callout nor leadsTo attributes the vector form to him, so this is fine.

## Licensing
- The transcript carries the OCW Creative Commons notice; the Week 1 summary and both HTML pages have no "All rights reserved" or "Courtesy of" notice. No figures are reused; the page has no images.
- No paragraph copied verbatim. The closest paraphrases are short: "tools for problems with several parameters: functions of several variables" (notes p. 1: "tools to handle problems with several parameters - functions of several variables"), "how much two vectors go along each other" (p. 10), "a word from Greek" (p. 10). All acceptable as short phrases.
- The lecture's own examples (⟨3,2,1⟩; triangle P(1,0,0), Q(0,1,0), R(0,0,2); x + 2y + 3z = 0) are presented as the lecture's, with citations. The worked example (⟨2,−1,2⟩, ⟨1,1,0⟩, 2x − y + 2z = 0) is original.
- Quiz 1 repeats the lecture's own flashcard question (length of ⟨3,2,1⟩, with √14 as "answer number two", as in class, p. 2). MIT's choices are not recorded in the sources, so whether they match is unknown. Not a licence problem, but a different vector (e.g. ⟨4,1,2⟩, length √21) would test the method rather than recall of the lecture. Optional.
- No OpenStax or LibreTexts material.

## Notes
- No em dashes on the page.
- Verdict pass-with-notes: no errors found; rows 1 (citation range) and 2 (the "adds the dot product" wording) are worth fixing before `status: reviewed`.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the formula "An angle in space" now cites transcript pp. 9–10 (page and calcs).
- **Warning 2:** the opening now links 8.01's scalar product (work in two and three dimensions) and says the page takes the dot product further.
- Info: calcs `length-321` now checks the 14 the page shows. The other info items are left as they are.
