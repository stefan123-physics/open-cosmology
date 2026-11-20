---
page: content/year-2/18.06/differential-equations-exp-at.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-23-differential-equations-and-exp-at/ (lecture page not fetched separately; URL matches the syllabus entry in content/year-2/18.06/_course.json)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/6d67704459268b5517f5f800a2aae300_IZqwi0wJovM.pdf (read: all 24 pages, extracted per page with pdftotext -f N -l N, so every page citation was checked against the PDF page = transcript page)
verdict: pass-with-notes
---

# Review: Differential equations and exp(At)

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Pure exponential solutions", last paragraph (Sc = u(0), pp. 13–14) | Strang identifies the coefficient system as $Sc = u(0)$ only after the 2 × 2 stability test (pp. 13–14), when he goes back to "the main part of my lecture". | Placed before the stability section. | Acceptable regrouping; optionally add "(Strang comes back to this after the stability test)". |
| 2 | info | "A second-order equation as a system", last sentence (p. 23) | For a fifth-order equation, "the coefficients of the equation up there and then my four trivial equations would put ones here", pointing at the entries just below the diagonal. | "its coefficients in the top row and four trivial equations giving ones below the diagonal". | "ones just below the diagonal (the other entries zero)", and optionally "the coefficients, with minus signs, in the top row", matching the $-b, -k$ of the 2 × 2 case. |
| 3 | info | First-order form formula (p. 23) | The transcript's first row reads "y''-by'-ky" (spoken/transcribed garbled; he means $y'' = -by' - ky$). Strang also first writes the equation with $u$ and $K$ (p. 22) and then switches to $y$. | Uses $y$ and $k$ throughout, matrix $(-b, -k; 1, 0)$. | None needed: the page's matrix is the correct one and does not repeat the garbled sign. |

No error-level differences were found. Every formula and its citation was checked:
- The system, p. 1: $A = (-1, 2; 1, -2)$, everything in $u_1$ at the start. Correct.
- Eigenvalues, pp. 2–3: characteristic polynomial $\lambda^2 + 3\lambda$ and its factoring on p. 2; $\lambda_1 = 0$, $\lambda_2 = -3$ named on p. 3. Correct. Singular because column 2 = −2 × column 1, trace −3 (p. 2): correct.
- Eigenvectors $(2, 1)$ and $(1, -1)$, pp. 4–5: $(2, 1)$ on p. 4, $A + 3I$ and $(1, -1)$ on pp. 4–5. Correct.
- General solution, p. 5: correct. Check by substitution, p. 6; analogue with pure powers, pp. 6–7: correct.
- Example solution, p. 7; constants $\frac13$, pp. 7–8 ("if these were both ones … three zero", p. 8): correct.
- Steady state $(2/3, 1/3)$, p. 8: correct (Strang says "two thirds of one third", a slip for "two thirds and one third"; the page has the right vector, no note needed).
- Complex exponential with $\lambda = -3 + 6i$, pp. 9–10: correct. Stability / steady state / blow-up, pp. 9–10: correct.
- $-A$ reverses the eigenvalues, zero stays zero, p. 11: correct.
- 2 × 2 test, pp. 11–13: trace = $\lambda_1 + \lambda_2$ and the conjugate imaginary parts (p. 12), counterexample $\mathrm{diag}(-2, 1)$ (p. 12), determinant = product (p. 13). Correct.
- Uncoupled system, p. 15 (set up on p. 14): correct. $u(t) = Se^{\Lambda t}S^{-1}u(0) = e^{At}u(0)$, pp. 15–16: correct.
- Exponential series, pp. 16–17 (factorials named on p. 17): correct. "Two beautiful Taylor series", p. 17: correct.
- Geometric series for $(I - At)^{-1}$, pp. 17–18; approximation $I + At$ for small $t$, p. 17; convergence only if the eigenvalues of $At$ are below 1, p. 18: correct.
- Diagonalisation of the series, pp. 19–20; assumption of $n$ independent eigenvectors and "we could still make it triangular", p. 20: correct, and the page's wording "Strang mentions" is fair (he says "I'll tell you about that").
- $e^{\Lambda t}$ diagonal, p. 21; left half-plane vs unit disc, p. 22: correct.
- Second-order equation, pp. 22–23; "just the way I did for Fibonacci", p. 23: correct.

Lecturer slip: on p. 23 Strang says "What's the matrix in case I have a single first order equation and I want to make it into a two by two system?" while converting $y'' + by' + ky = 0$. The page's bracketed note ("he means the second-order one") is accurate and needed.

## Arithmetic and answer checks
- `npm run calc:test -- -k differential-equations-exp`: 14 passed.
- Strang's example recomputed: $\det(A - \lambda I) = (-1-\lambda)(-2-\lambda) - 2 = \lambda^2 + 3\lambda$; $A(2,1) = (0,0)$; $A(1,-1) = (-3, 3) = -3(1,-1)$; $\frac13(2,1) + \frac13(1,-1) = (1, 0)$. Correct.
- Worked example (a): trace $-4$, det $3 - 3 = 0$, so $\lambda = 0, -4$. $A(3,1) = (0, 0)$; $A(1,-1) = (-4, 4) = -4(1,-1)$. $3c_1 + c_2 = 0$, $c_1 - c_2 = 4$ gives $c_1 = 1$, $c_2 = -3$. $u(t) = (3 - 3e^{-4t}, 1 + 3e^{-4t})$, $u(0) = (0, 4)$; columns of $A$ sum to 0 so $u_1 + u_2 = 4$ is conserved; limit $(3, 1)$. All correct.
- Worked example (b): $B$ trace $-1$, det $-2 + 3 = 1$, roots of $\lambda^2 + \lambda + 1$ are $(-1 \pm i\sqrt3)/2$, real part $-\frac12$: stable. $C$ trace $-3$, det $-4 - 2 = -6$, roots of $\lambda^2 + 3\lambda - 6$ are $(-3 \pm \sqrt{33})/2$, positive root $\approx 1.372$: unstable. Correct.
- calcs file: entries match the page. Minor gaps (info): `x2-check` tests only the first component of $Ax_2$, and `ex-c` only the equation $3c_1 + c_2 = 0$, not $c_1 - c_2 = 4$; adding the second checks would make the file complete.
- Quiz 1: answer 1 (all real parts negative). Correct; explanation correct.
- Quiz 2: answer 1. Correct: a negative product rules out a complex-conjugate pair (whose product is $|\lambda|^2 > 0$), so the roots are real with opposite signs.
- Quiz 3: answer 2 (steady state along $x_1$, limit $\frac13(2,1)$). Correct.
- Quiz 4: answer 1 (factorials). Correct; the contrast with the geometric series matches p. 18.
- Flashcards: all four correct.

## Coverage and order
- The page follows Strang's order: example and eigenvalues (pp. 1–5), pure exponentials and constants (pp. 5–8), stability / steady state / blow-up and $-A$ (pp. 8–11), 2 × 2 test (pp. 11–13), $Sc = u(0)$ (pp. 13–14, moved slightly earlier on the page, see #1), uncoupling with $S$ (pp. 14–16), matrix exponential and geometric series (pp. 16–21), stability regions (p. 22), second-order equation (pp. 22–23).
- Nothing substantial is left out. Strang's closing remark that the eigenvalues of the companion matrix "come out in a natural way connected to the differential equation" (pp. 23–24) is not mentioned; optional.
- Additions: the worked example and the link to 18.03's first-order systems page (exists: content/year-2/18.03/eigenvalues-linear-systems.mdx).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript (searched both text extractions). 18.06 Spring 2010 is under CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases ("lift-off", "two beautiful Taylor series"), which is fine.
- Worked example: not Strang's lecture example (different matrix, eigenvalues 0 and −4, different initial vector, plus a trace/determinant part with complex and real-root cases). It deliberately mirrors the structure of Strang's example (singular matrix, columns summing to zero, eigenvector $(1, -1)$), which is fine as an original variation. Whether these exact numbers appear in Strang's textbook (Introduction to Linear Algebra, Section 6.3) was **not verified** (book not read); the numbers look generic.

## Notes
- `leadsTo` 18.06 Lecture 24 ("Markov matrices; fourier series" in `_course.json`): the claim that eigenvalue 1 gives a steady state for powers, as eigenvalue 0 does here, is correct and a fair parallel.
- No `Callout kind="cosmology"`; no cosmology claims to check.
- Internal links checked: /courses/18-06/diagonalization-and-powers and /courses/18-03/eigenvalues-linear-systems both exist.
- No em dashes on the page.
- The OCW lecture page itself was not fetched; the source URL agrees with the course syllabus entry.

## Resolution (2026-11-16, by the page author)

1. Added that Strang comes back to Sc = u(0) after the stability test.
2. The companion-matrix sentence now says the coefficients carry minus signs and the ones sit just below the diagonal, the other entries zero.
3. No change.
4. Calcs: added the second component of Ax₂ and the equation c₁ − c₂ = 4.
5. Added Strang's closing remark that the eigenvalues come out connected to the differential equation (pp. 23–24).

Status set to reviewed.
