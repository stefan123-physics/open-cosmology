---
page: content/year-2/18.06/complex-matrices-fft.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-26-complex-matrices-fast-fourier-transform/ (lecture page not fetched separately; slug matches the syllabus entry in content/year-2/18.06/_course.json)
  - https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/68440cfc1e8760b75bddc09bc8d374d6_M0Sa8fLOajA.pdf (read: all 20 pages, extracted page by page with pdftotext -f N -l N; PDF page = transcript page)
verdict: pass-with-notes
---

# Review: Complex matrices and the fast Fourier transform

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The Fourier matrix", paragraph after the $F_4$ formula (line 92) | "I guess Fourier knew that. He knew the inverse of this matrix" and "I think Gauss noticed it but didn't make a point of it" (p. 12). Both are Strang's hedged guesses. | "Fourier knew the inverse; what he did not notice (Gauss did, Strang says, without making a point of it) ..." The Fourier part is stated as fact; the Gauss part is attributed but drops "I think". | Attribute both as Strang's recollection: "Strang guesses that Fourier knew the inverse; what Fourier did not notice (Strang thinks Gauss did, without making a point of it) ...". Historically Gauss did find an FFT-like scheme around 1805 (published posthumously), which could be added as a checked fact with a reference, but this review did not read such a reference, so it is not verified here. |
| 2 | warning | Formula "Inverse of F4" (line 96) | Strang keeps the ½ inside the matrix ("now I'm keeping this one half in here for the moment") and says $F_4^H F_4 = I$ for the rescaled matrix, so "the inverse is just its conjugate transpose" (p. 14). He never writes $F_4^{-1} = \frac14 F_4^H$. | First half, $(\tfrac12F_4)^H(\tfrac12F_4) = I$, matches p. 14; the second half, $F_4^{-1} = \tfrac14F_4^H$, is a correct consequence the page adds, cited as if on p. 14. | Keep the formula (it is right) but say in the text that the ¼ follows from Strang's statement: e.g. "(Strang keeps the ½ inside $F_4$; for the unscaled matrix this gives $F_4^{-1} = \frac14F_4^H$.)" |
| 3 | warning | Frontmatter `summary`, flashcard "Fourier matrix", Summary bullet 3 | Strang checks orthogonality and the length 2 only for $F_4$ (pp. 13–14); no general-$n$ statement. | "orthogonal columns, each of length $\sqrt n$, so $F_n^{-1} = F_n^H/n$". | Correct mathematics, but it is a generalisation. Add one sentence in the body ("the same holds for every $n$: columns of length $\sqrt n$, so $F_n^{-1} = F_n^H/n$") so the summary and flashcard rest on something the page says. |
| 4 | info | Fourier matrix formula (line 82), third row | Strang says "W to the fourth, W to the sixth, W to the two n-1" (p. 9), a slip for $W^{2(n-1)}$. | $W^{2(n-1)}$ (correct). | Rule 4 asks for a bracketed note when the page differs because of a slip; optional here since the page is simply right: "(Strang says $W^{2n-1}$; the exponent is $2(n-1)$.)" |
| 5 | info | "Recursion" paragraph (line 112) | "the even evens, which means zero four eight sixteen" (p. 17), slip for 12. Also the $F_4$ last row read aloud as "one minus i minus one i. No. Yes." (p. 12). | $x_0, x_4, x_8, \dots$ and a correct $F_4$. | None needed; the page avoids the slips. |
| 6 | info | End of "The fast Fourier transform" (line 116) | "the whole thing hinged on being a special matrix with orthonormal columns" (p. 19). | "orthogonal columns". | Fine (orthogonal is the more accurate word for unscaled $F_n$); no change needed. |
| 7 | info | Start of "The fast Fourier transform" (line 102) | Strang first names the connections F6 to F3 and F8 to F4 before F64 to F32 (p. 15). | Only F64 to F32. | Optional: mention that every $F_{2m}$ connects to $F_m$ the same way. (The Summary already writes it as $F_{2m}$.) |

Every formula was checked against the transcript:
- Length squared, pp. 3–5: $\bar z_1 z_1$ p. 3, $z^Hz$ p. 4, sum of $|z_i|^2$ p. 5. Correct.
- Inner product $y^Hx$, p. 4: correct (Strang says it in words; component form is the obvious expansion).
- Hermitian example $\begin{pmatrix}2&3+i\\3-i&5\end{pmatrix}$, p. 5: correct, exact numbers as Strang. Real eigenvalues and perpendicular eigenvectors p. 6: correct.
- $q_i^Hq_j = \delta_{ij} \Leftrightarrow Q^HQ = I$, pp. 6–7: correct. "Unitary" and the textbook dictionary, p. 7: correct.
- Fourier matrix, entries $W^{ij}$, indices 0 to $n-1$, symmetric "in the old not quite perfect way", full, pp. 8–9: correct.
- $W = e^{2\pi i/n} = \cos + i\sin$, $W^n = 1$, p. 10: correct; $W^{10} = e^{20\pi i/n}$ p. 10; $n = 6$ at 60°, p. 10, powers and "primitive", p. 11: correct.
- $F_4$ with exponents and numerical entries, pp. 11–12: correct (W = i on p. 11, matrix pp. 11–12).
- $W_{64}^2 = W_{32}$, p. 15: correct.
- FFT factorisation, pp. 15–16: two copies of $F_{32}$ and fix-up factors p. 15; $P$ (evens then odds), $[I\ D; I\ -D]$, $D = \mathrm{diag}(1, W, \dots, W^{31})$ and the 32-multiplication cost p. 16. Correct. Strang does not say which $W$ is in $D$; the page's $W = W_{64}$ is the correct one.
- Cost $\frac12 n\log_2 n$, pp. 18–19: count p. 18, boxed p. 19. Correct.

Other claims checked: complex numbers entered via eigenvalues (p. 1); "changed everything" (p. 2); Hermite "didn't actually pronounce the H" (p. 4); EE counting from zero for "one half hour" (p. 8); "Strang first calls them two and four, then ... one and three", and the unconjugated sum $1+1+1+1$ (p. 13); conjugating makes the sum zero, length 2 (p. 14); $2\cdot 32^2$ instead of $64^2$ (pp. 16–17); "we would have to check the algebra, but it's just checking a lot of sums" (p. 17); six steps, each fix-up 32 (p. 18); $2^{10}$, "five times a thousand twenty four", factor 200, "just by factoring the matrix properly" (p. 19); positive definite matrices next time (p. 19). All page citations agree with the printed pages.

## Arithmetic and answer checks
- `npm run calc:test -- -k complex-matrices-fft`: 17 passed. Each calcs entry matches the page text.
- $(1, i)$: $1 + (-i)(i) = 2$, length $\sqrt2$; $z^Tz = 1 + i^2 = 0$. Correct.
- $F_4$ columns 1 and 3 (from 0): unconjugated $1 + 1 + 1 + 1 = 4$; conjugated $1 - 1 + 1 - 1 = 0$. Correct.
- $1024^2/(5\cdot1024) = 204.8$, "about 200". Correct.
- Worked example (a): $|2-i|^2 = 5$, $|1+3i|^2 = 10$, total 15, length $\sqrt{15}$; $(2-i)^2 = 3 - 4i$, $(1+3i)^2 = -8 + 6i$, sum $-5 + 2i$. Correct.
- (b): $B^H = B$; trace 6, det $5 - 5 = 0$, eigenvalues 0 and 6. Correct.
- (c): $4096^2 = 16\,777\,216$; $\frac12\cdot4096\cdot12 = 24\,576$; ratio $682.67 \approx 683$. Correct.
- Quiz 1: answer 1 ($\sqrt2$). Correct.
- Quiz 2: answer 1. Correct: option A lacks conjugates, option C has non-real diagonal, option D is antisymmetric. Explanation correct.
- Quiz 3: answer 0 ($e^{2\pi i/8}$). Correct; distractor $e^{8\pi i} = 1$. Explanation correct.
- Quiz 4: answer 1. Correct; "each level costs $n/2$" matches p. 18.
- Flashcards: all four correct (card 3 relies on the general-$n$ statement, see finding 3).

## Coverage and order
- The page follows Strang's order: length in $\mathbf{C}^n$ (pp. 2–5), inner product (p. 4), Hermitian (pp. 5–6), unitary (pp. 6–7), Fourier matrix and $W$ (pp. 8–12), Fourier/Gauss remark (pp. 12–13), orthogonal columns and inverse (pp. 13–14), FFT factorisation (pp. 15–17), recursion and count (pp. 17–19).
- Omissions (info only): the F6/F3 and F8/F4 examples (p. 15); Strang's intermediate count "two sixteen squareds plus sixteen" (p. 18); "we can do 200 Fourier transforms where before we could do one" (p. 19).
- Additions: worked example; the general $F_n^{-1} = F_n^H/n$ (finding 3); the explicit ¼ (finding 2).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript text (searched). 18.06 Spring 2010 is CC BY-NC-SA.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("changed everything", "just by factoring the matrix properly") and standard terminology.
- Worked example is original: Strang's only Hermitian example is $\begin{pmatrix}2&3+i\\3-i&5\end{pmatrix}$ and his only length example is $(1, i)$; the page uses $(2-i, 1+3i)$, $\begin{pmatrix}1&2+i\\2-i&5\end{pmatrix}$ and $n = 4096$. Whether these coincide with an exercise in Strang's textbook was not verified (book not read); they look generic.

## Notes
- `leadsTo` 18.06 Lecture 27 "Positive definite matrices and minima" matches the syllabus and Strang's closing remark (p. 19).
- No `Callout kind="cosmology"`. A real connection exists (the FFT is how CMB maps are turned into power spectra and how particle-mesh N-body codes solve Poisson's equation), so the author may add one if it is checked against an existing 8.286/8.902 page; not required.
- The prerequisite link to the symmetric matrices page ("as on the symmetric matrices page") is fair: that page uses $\bar x^Tx = |x_1|^2 + \cdots$.
- No em dashes on the page.
- The OCW lecture page itself was not fetched; the source URL agrees with the course syllabus.

## Resolution (2026-11-16, by the page author)

1. The Fourier/Gauss sentence now presents both points as Strang's guesses.
2. Added a bracket: Strang keeps the ½ inside the matrix; F₄⁻¹ = ¼F₄ᴴ is that statement for F₄ itself.
3. Added the general statement F_n⁻¹ = F_nᴴ/n in the body, noting that Strang shows it for n = 4.
4. Added a bracket on Strang's "W to the two n − 1".
5–6. No change.
7. Added the F₆ → F₃ and F₈ → F₄ connections.
8. No callout added (no 18.06 page has one so far; left to the owner).

Status set to reviewed.
