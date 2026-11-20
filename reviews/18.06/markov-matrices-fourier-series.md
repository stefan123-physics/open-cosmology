---
page: content/year-2/18.06/markov-matrices-fourier-series.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-24-markov-matrices-fourier-series/ (lecture page not fetched separately; slug matches the syllabus entry in content/year-2/18.06/_course.json)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/a77a2a3a8c01d73741727acb73bffb69_lGGDIGizcQ0.pdf (read: all 22 pages, per-page text extracted with pdftotext -f N -l N; page numbers checked against the PDF)
verdict: pass-with-notes
---

# Review: Markov matrices and Fourier series

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Eigenvalue 1 and the steady state", third bullet; Summary ("the non-negative eigenvector") | Strang: "x1 is the eigenvector and all its components are positive ... might have some component zero ... but no negative components" (pp. 3–4), proof not given (p. 9). | Same claim, attributed correctly. | Optional: the statement assumes λ = 1 is a simple eigenvalue (for $A = I$ every vector is an eigenvector for 1, including ones with negative components). A short "(when λ = 1 is not repeated)" would make it exact. Strang does not say this either, so it is not a difference from MIT. |
| 2 | info | "Why λ = 1" paragraph, worked check "($0.42 - 0.42$)" | Strang says that 0.6 and 0.7 make the last row zero, without writing the products (p. 8). | "$0.42 - 0.42$". | None needed; the arithmetic is right (0.7·0.6 − 0.6·0.7). It is the page's own check, which is fine. |
| 3 | info | Row-vector remark (p. 15) | "you'll see Markov matrices in electrical engineering courses ... in a lot of applications they prefer to work with row vectors ... in other textbooks ... rows add to one" (p. 15). | "Many applications, for example in electrical engineering, use row vectors". | Faithful enough; optionally add "and other textbooks". |
| 4 | info | Fourier section, bracketed note | Strang: "we have now an orthonormal infinite basis" (p. 20) and "an expansion in an orthonormal basis" (p. 21). | Bracketed note: strictly orthogonal, since ∫cos²x dx = π. | Correct and well placed. Optionally add that the constant function 1 has ∫₀^(2π) 1² dx = 2π, which is why $a_0$ is the average (factor 1/(2π)), not 1/π. |

No error-level differences were found. Every formula and its citation was checked against the printed transcript pages:
- Strang's 3 × 3 Markov matrix, p. 1: columns (.1, .2, .7), (.01, .99, 0), (.3, .3, .4) as dictated on p. 1. Correct; every column adds to 1.
- Approach to the steady state, p. 3: general form $c_1\lambda_1^kx_1 + c_2\lambda_2^kx_2 + \cdots$, complete set of eigenvectors, terms with |λ| < 1 "scratched over", x₁ part of u₀ is the steady state: all on p. 3. Correct.
- det(A − λI) = det((A − λI)ᵀ) = det(Aᵀ − λI), pp. 7–8: property ten on p. 7, conclusion on p. 8. Correct.
- x₁ = (0.6, 33, 0.7), pp. 8–9: computation on p. 8, vector restated on p. 9 ("point six 33 point seven"). Correct.
- Population model, pp. 10–11: 0.9/0.1 and 0.8/0.2 given on p. 10, "this adds to one" p. 11 (the full matrix .9, .2, .1, .8 is written out on p. 12; citing pp. 10–11 is acceptable).
- u_k = (1000/3)·1ᵏ(2, 1) + (2000/3)(0.7)ᵏ(−1, 1), p. 14: correct (c₁ and c₂ found and checked on p. 14).
- Expansion v = x₁q₁ + ⋯ + xₙqₙ, pp. 15–16: introduced at the end of p. 15. Correct.
- x₁ = q₁ᵀv, p. 16: correct. Matrix form x = Q⁻¹v = Qᵀv, p. 17: correct.
- Fourier series, p. 18: correct.
- Inner product ∫₀^(2π) f g dx, p. 20: integration as analogue of addition and the interval 0 to 2π are both on p. 20. Correct.
- a₁ formula, p. 21: ∫cos²x = π and a₁ = (1/π)∫ f cos x dx on p. 21. Correct.

Other claims checked: two applications, Fourier "if I have time", "application of the projection chapter" (p. 1); powers stay Markov (pp. 1–2); λ = 0 steady state for differential equations last time, zero eigenvalue dies at once for powers, λ = 1 found without determinants, others |λ| ≤ 1 with exceptional cases of magnitude 1 (p. 2); diagonal of A − I is −0.9, −0.01, −0.6 and columns add to zero (p. 4); rows dependent by adding them (pp. 5–6); (1, 1, 1) in the left nullspace (p. 6); different eigenvector for A, nullspace vs left nullspace (p. 8); "I won't give the proof of that part" (p. 9); California/Massachusetts, probabilities, conservation (pp. 9–10); "severe limitation" of the same matrix at every step (p. 10); start (0, 1000), total 1000 (p. 11); 200 and 800 after one step (p. 12); eigenvalue 0.7 from the trace 1.7 (p. 12); determinant 0.72 − 0.02 = 0.7 (p. 13); x₁ = (2, 1), steady state two thirds and one third of a thousand (p. 13); x₂ from A − 0.7I (pp. 13–14); Fourier's idea of function space, infinite basis (p. 18); orthogonality as the reason for success (p. 19); vᵀw = v₁w₁ + ⋯ + vₙwₙ and the continuum (p. 19); sin x cos x integrates to ½ sin²x, zero (p. 20); a₀ is the average (p. 21); "Euler's famous formula ... or maybe Fourier found it" (p. 21). All citations agree with the printed transcript pages.

Bracketed notes:
- **3300 → 33** (p. 8): Strang computes −0.54 + 0.21 = −0.33, asks "Like thirty three hundred?", then "oh no, it was point 33 ... Only 33." The page's note "(Strang first expects a component of 3300 and corrects himself to 33.)" is accurate, and the value 33 is right (0.33/0.01 = 33).
- **"Orthonormal" Fourier basis** (pp. 20–21): Strang uses "orthonormal" twice; the functions are orthogonal but not unit length (‖cos x‖² = π, ‖1‖² = 2π). The page's correction is right.

## Arithmetic and answer checks
- `npm run calc:test -- -k markov`: 17 passed.
- Strang's x₁ = (0.6, 33, 0.7) satisfies all three rows of A − I: row 1: −0.54 + 0.33 + 0.21 = 0; row 2: 0.12 − 0.33 + 0.21 = 0; row 3: 0.42 + 0 − 0.42 = 0. Correct.
- Population: A(0, 1000) = (200, 800); trace 1.7, det 0.7, eigenvalues 1 and 0.7; (A − I)(2, 1) = (−0.2 + 0.2, 0.2 − 0.2) = 0; (A − 0.7I)(−1, 1) = (−0.2 + 0.2, −0.1 + 0.1) = 0; u₀ = (2000/3 − 2000/3, 1000/3 + 2000/3) = (0, 1000); limit (666.7, 333.3) ≈ (667, 333). Correct.
- Worked example (a): A = [[0.6, 0.3], [0.4, 0.7]], columns add to 1; trace 1.3, det 0.42 − 0.12 = 0.3 = 1 · 0.3. (A − I)(3, 4) = (−1.2 + 1.2, 1.2 − 1.2) = 0; (A − 0.3I)(1, −1) = (0.3 − 0.3, 0.4 − 0.4) = 0. 3c₁ + c₂ = 700, 4c₁ − c₂ = 0 → c₁ = 100, c₂ = 400. u₁ = (300 + 120, 400 − 120) = (420, 280) = A(700, 0). Steady state (300, 400), total 700. Correct.
- Worked example (b): (1 + cos x)² cos x = cos x + 2cos²x + cos³x; integrals over [0, 2π] are 0, 2π, 0; a₁ = 2. Expansion 1 + 2cos x + cos²x = 3/2 + 2cos x + ½cos 2x; a₀ = 3/2 is the average. Correct.
- Quiz 1: answer 1. Correct; explanation correct.
- Quiz 2: answer 1. (100, 300) = 100·(1, 3) is an eigenvector for λ = 1, so it is fixed. Correct. Such a matrix exists (e.g. [[0.55, 0.15], [0.45, 0.85]]: columns add to 1, trace 1.4, eigenvalues 1 and 0.4, A(1, 3) = (1, 3)), so the question is consistent.
- Quiz 3: answer 0 (q₂ᵀv). Correct.
- Quiz 4: answer 1 ((1/π)∫ f cos x dx). Correct; the remark that choice 3 is a₀ (the average, (1/2π)∫ f dx) is also correct.
- Flashcards: all five correct. "Scaled to keep the total of u₀" is right, since every eigenvector for λ ≠ 1 has components summing to zero (it is orthogonal to the left eigenvector (1, …, 1)).
- calcs file (info): the worked-example entries (`ex-*`, origin `page-own`) carry `source: {cite: reading1, …}` pointing at transcript pages, although these numbers are not in the transcript; harmless, but the citation is only to the method. `pop-u0` adds both component checks into one sum (expected 1000), so an error in one component could in principle be masked; two separate entries would test more.

## Coverage and order
- The page follows Strang's order exactly: definition (p. 1), powers and steady state (pp. 2–3), why λ = 1 (pp. 4–6), A and Aᵀ (pp. 7–8), the 3 × 3 eigenvector (pp. 8–9), California/Massachusetts (pp. 9–14), row-vector convention (p. 15), orthonormal expansion (pp. 15–17), Fourier series, inner product, a₁ (pp. 18–21).
- Left out (info only): Strang's asides on the hundredth power of the matrix and the Pilgrims (p. 11), the second step "twenty people will come back" (p. 12), and the closing announcement of the quiz review (p. 22). None is substantive.
- Added: the bracketed corrections, the link to 18.03's Fourier introduction, and the worked example.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript text (searched both extractions). 18.06 Spring 2010 is under CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("Euler's famous formula", "severe limitation"), which is fine.
- Worked example: original. It is not Strang's lecture example (California/Massachusetts with 0.9/0.8) and not the familiar textbook matrix [[0.8, 0.3], [0.2, 0.7]] from Strang's *Introduction to Linear Algebra*; the "clubs P and Q" setting and the Fourier part (b) are the page's own. The book itself was not read, so an exact match with some exercise there cannot be excluded (uncertain, unlikely).

## Notes
- `leadsTo` 18.06 Lecture 25 "Symmetric matrices and positive definiteness" matches the syllabus in `_course.json`. The stated link (real eigenvalues, orthonormal eigenvectors, "the property Fourier series rely on") is a fair mathematical connection, but this transcript does not make it; Lecture 25's content was not checked in this review.
- Prerequisites `differential-equations-exp-at` and `orthogonal-matrices-gram-schmidt` exist; the internal links `/courses/18-06/orthogonal-matrices-gram-schmidt` and `/courses/18-03/fourier-series-introduction` point to existing pages.
- No `Callout kind="cosmology"`; no 18.06 page has one so far, so there are no cosmology claims to check.
- No em dashes on the page.
- The transcript header reads "ocw-18.06-f99-lec24": the recording is Strang's Fall 1999 lecture republished in the Spring 2010 OCW course (true of all 18.06 transcripts); no action needed.
- The OCW lecture page itself was not fetched; the source URL agrees with the course syllabus entry.

## Resolution (2026-11-16, by the page author)

1. The positivity bullet now says "when λ = 1 is not repeated".
2. No change (the page's own check, correct).
3. The row-vector remark now mentions other textbooks.
4. The bracketed note now adds that ∫₀^{2π} 1 dx = 2π, which is why a₀ is the average.
5. Calcs: `pop-u0` split into two entries. The page-own entries keep the transcript page of the method they illustrate.
6. No change.

Status set to reviewed.
