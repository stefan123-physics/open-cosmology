---
page: content/year-2/18.06/properties-of-determinants.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-18-properties-of-determinants/ (read: lecture page; licence link CC BY-NC-SA 4.0, no "All rights reserved" or "Courtesy of" notice)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/9c507ce90715ff08ef19d404938a00fa_srxexLishgY.pdf (read: 21-page transcript, header "ocw-18.06-f99-lec18_300k", extracted per page; PDF page = cited page. The text is interleaved with stray fragments from other pages, so page citations were judged generously)
verdict: pass-with-notes
---

# Review: Properties of determinants

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "Consequences of property 9" and the frontmatter `summary` ("Two more properties: det AB = …, so det A⁻¹ = 1/det A, det A² = (det A)² and det 2A = 2ⁿ det A") | p. 18: "So this is rule 3A here. This is rule nine." Strang derives det 2A = 2ⁿ det A from property 3A (factor 2 out of every row, p. 17), and det A⁻¹, det A² from property 9. | All three grouped under the label "Consequences of property 9" (the prose below it correctly explains the factor 2 from every row). | Either move $\det 2A = 2^n\det A$ into its own formula labelled as a consequence of property 3 (pp. 17–18), or relabel the formula "Consequences" and in the summary say "and, by property 3, det 2A = 2ⁿ det A". (Mathematically it also follows from property 9 via det(2I) = 2ⁿ, so this is a matter of attribution, not an error.) |
| 2 | info | Property 6, bracketed slip note | p. 9: the student's suggestion is "use 3A with T equals zero"; Strang instead multiplies the zero row by 5 using 3A. p. 10: "Take T equals zero in rule 3B. If T is zero in rule 3B…" | "(Strang first multiplies the zero row by 5, then agrees with a student that $t = 0$ is simpler; he refers to it as rule 3B, but it is the factor rule 3A, p. 10.)" | Verified: correct and fairly stated. Optionally cite "pp. 9–10", since the factor-5 argument and the student's "3A with T = 0" are on p. 9. |
| 3 | info | Property 10 proof, "U and Uᵀ have the same diagonal" | p. 20 (truncated in the transcript) shows det L = 1 and det Lᵀ = 1 ("still got those ones on the diagonal"); the U part is cut off by the interleaving. | "$U$ and $U^T$ have the same diagonal (pp. 19–20)." | Correct mathematics and clearly the intended step; the transcript text does not show it explicitly (uncertain whether said aloud). No change needed. |
| 4 | info | Property 2, "Hidden fact" | p. 20–21: "seven row exchanges … ten row exchanges", odd or even permutations; p. 21 "well-defined by properties one, two, three". | Same, with "seven exchanges and also by ten". | Matches. |

All other formula citations were checked against the per-page text and match:
- Property 1 (pp. 1–2), Property 2 with det P = ±1 (pp. 2–3), ad − bc introduced on p. 3, Property 3A/3B with $t$ and $a + a'$, $b + b'$ (pp. 3–4), "not det(A + B)" (pp. 4–5), every row via exchanges (p. 5).
- Property 4 (pp. 5–6, rank below n on p. 6); Property 5 statement and det A = det U (p. 7), the 2 × 2 split by 3B then 3A then property 4 (p. 8); Property 6 (pp. 8–10).
- Property 7 det U = d₁⋯dₙ (pp. 10–11), MATLAB / product of pivots with ± for row exchanges (p. 11), proof by upward elimination, 3A, rule 1 (pp. 11–12); Property 8 (pp. 12–13); 2 × 2 from pivots, a ≠ 0 caveat (p. 14).
- Property 9 (p. 15, "partly coming out of the blue"), A⁻¹A = I and det A⁻¹ = 1/det A (pp. 15–16), diag(2, 3) example (p. 16), det A² (pp. 16–17), 2ⁿ and the box / volume 8 (pp. 17–18), formula fails when det A = 0 (p. 18).
- Property 10 (p. 18), columns (pp. 18–19), LU proof (pp. 19–20).
- Notation: |A| and det A (p. 1), multiplier ℓ, row i from row k (p. 7), d₁…dₙ pivots (p. 10): all match.

## Arithmetic and answer checks
- Worked example, $A = \begin{pmatrix} 2&1&3\\4&5&7\\-2&2&1\end{pmatrix}$: R2 − 2R1 = (0, 3, 1); R3 + R1 = (0, 3, 4); R3 − R2 = (0, 0, 3). Pivots 2, 3, 3, no exchanges, det = 18. Cofactor check: 2(5 − 14) − (4 + 14) + 3(8 + 10) = −18 − 18 + 54 = 18. Correct.
- det 2A = 8 · 18 = 144; det A⁻¹ = 1/18; det Aᵀ = 18; one row exchange gives −18. All correct.
- diag(2, 3): determinants 6 and 1/6, product 1. Correct (p. 16).
- Box doubled in 3D: volume × 8. Correct (p. 18).
- 2 × 2 pivots: a(d − (c/a)b) = ad − bc. Correct (p. 14).
- Quiz 1: 4 × 4 doubled, 2⁴ = 16, answer index 3 = "16". Correct.
- Quiz 2: false statement is det(A + B) = det A + det B, index 0. Explanation det(I + I) = 2ⁿ vs det I + det I = 2: correct.
- Quiz 3: subtracting 5 × row 1 from row 3 changes nothing, index 2. Explanation correct (property 3 then property 4).
- Flashcards: all three correct.
- `calcs/18.06/properties-of-determinants.yaml`: 7 entries (two-by-two identity, diag inverse, box, quiz 2⁴, example cofactor, example third pivot (1 + 3) − (7 − 6) = 3, det 2A). `npm run calc:test -- -k properties-of-det`: 7 passed. The pivot 3 of row 2 (5 − 2 = 3) and the product 2 · 3 · 3 are not separate entries, but the cofactor check equals 18 and covers them indirectly (info).

## Coverage and order
- The page follows Strang's order exactly: motivation (p. 1), properties 1–3 (pp. 1–5), 4–8 (pp. 5–14), 9–10 (pp. 15–20), and the odd/even "hidden fact" at the end (pp. 20–21).
- Small omissions (info only): the 2 × 2 checks on p. 3 (det I = 1, det of the swap matrix = −1) and the 2 × 2 check of property 10 (ad − bc either way, p. 18) are not spelled out; the "seven-by-seven with row 1 = row 3" illustration of property 4 (p. 5) is omitted. None is needed for completeness.
- Nothing is added beyond MIT except the original worked example and the parenthetical "like a volume" in the summary, which is Strang's own remark (p. 18).
- Forward link: `leadsTo` 18.06 Lecture 19 "Determinant formulas and cofactors" matches the syllabus title in `_course.json`; the page makes no other claims about later lectures. No cosmology callout (none expected for this lecture).
- Prerequisites `factorization-a-lu` and `transposes-permutations-vector-spaces` exist.

## Licensing
- Lecture page and transcript: no "All rights reserved" or "Courtesy of" notice; course under CC BY-NC-SA 4.0.
- No verbatim copying beyond short standard phrases ("linear function of one row", "any reasonable software", "out of the blue" paraphrased as "somewhat out of the blue", "hidden fact"). Acceptable.
- Worked example: an original 3 × 3 matrix with its own numbers; it is not the lecture's example (the lecture uses only general 2 × 2 and diag(2, 3)). I could not check it against every example in Strang's textbook Section 5.1 (not read), so its absence from the textbook is uncertain, though the matrix is not a recognisable textbook one.
- No OpenStax or LibreTexts material. No em dashes in the page.

## Notes
- Verdict pass-with-notes: no errors; one warning (attribution of det 2A = 2ⁿ det A to property 9 in the formula label and summary).
- The transcript is a 1999 recording ("f99") used for the Spring 2010 OCW course; the page cites it correctly as the Lecture 18 transcript.

## Resolution (2026-11-16, by the page author)

1. Warning fixed: det 2A = 2ⁿ det A now has its own formula credited to property 3 (pp. 17–18), and the summary says so.
2. The 3A/3B note cites pp. 9–10.
3. Other info items left as they are.

Status set to reviewed.
