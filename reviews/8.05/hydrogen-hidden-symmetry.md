---
page: content/year-3/8.05/hydrogen-hidden-symmetry.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-26-addition-of-angular-momentum-cont/ (not fetched in this review; the URL and title match the Lecture 26 entry in content/year-3/8.05/_course.json)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/d056ebbe354650f9a89bc7c1fb76c6b1_WFQ-UcH4jMM.pdf (read: Lecture 26 transcript, 19 pages, local pdftotext extract L26.txt supplied by the page author; header "watch?v=WFQ-UcH4jMM" matches the file name; page checks use the printed footer numbers 1–19, spot-checked with `pdftotext -f 5 -l 5`)
  - https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/resources/lecture-notes-10/ (read: Zwiebach, "Addition of Angular Momentum", chapter 10, local extract N10.txt converted from cp1252; section 7, notes pp. 9–16, eqs. (7.1)–(7.47), read in full)
  - content/year-3/8.05/spherical-well-oscillator-hydrogen.mdx and content/year-3/8.05/hyperfine-21cm-adding-angular-momenta.mdx (read, to check overlap and the incoming `leadsTo`)
verdict: pass-with-notes
---

# Review: The hidden symmetry of hydrogen

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "R × R by an argument", paragraph after the bullets: "Zwiebach credited the argument to Julian Schwinger, whose idiosyncratic quantum mechanics book finds a trick for every calculation, and who had also found the hidden angular momentum of the 2D oscillator (transcript pp. 9–10)." | Transcript p. 9: Schwinger "invented the trick of using three-dimensional angular momentum for the two-dimensional oscillator" (also: did QED with Feynman and Tomonaga); pp. 9–10: his book is "very idiosyncratic" and "finds a trick to do every calculation". The notes do not mention Schwinger. | The attribution of the parity argument is correctly put in the lecturer's mouth, but the second clause turns the lecturer's "invented the trick of using 3D angular momentum for the 2D oscillator" into a historical fact, "had found the hidden angular momentum of the 2D oscillator". Uncertain, from general knowledge: the SU(2) symmetry of the 2D oscillator is usually credited to Jauch and Hill (1940); Schwinger's 1952 "On angular momentum" built angular momentum out of two oscillators, which is what the lecturer's "trick" refers to. | Keep the clause within the attribution and closer to the lecture: "…and who, Zwiebach noted, had devised the trick of describing the two-dimensional oscillator with a three-dimensional angular momentum (transcript pp. 9–10)." |
| 2 | info | Same section: "A short calculation then fixes the scalar (transcript p. 11):" before the R × R formula | Transcript p. 11: "it doesn't take much work … But I will skip that calculation"; notes p. 12: "A calculation (that we don't show here) gives" (7.28). | Reads as if the calculation is given on p. 11. | "A calculation, which neither the lecture nor the notes shows, fixes the scalar (transcript p. 11):". |
| 3 | info | "R and L together", first paragraph: "(transcript pp. 4–5; …)" | The R · L computation is on p. 5 (checked with `pdftotext -f 5 -l 5`); the last line of p. 4 only motivates it ("we had R, we did R squared"), and the conclusion "L dot R and R dot L … are 0" runs onto the first line of p. 6. | pp. 4–5. | Defensible as is; "(transcript p. 5)" or "pp. 4–6" would be more exact. Optional. |
| 4 | info | "R × R by an argument", second bullet: candidates $\vec L$, $\vec R$, $\vec L\times\vec R$ (transcript p. 9) | Transcript p. 9 lists "L, R itself, and L cross R", then in the next sentence says "a term proportional to L dot R" (a slip for L × R). Notes p. 12 has L × R. | Uses L × R throughout, silently correct. | Fine; the page does not quote the slip, so no bracket is needed. |
| 5 | info | Frontmatter `summary`: "by a parity argument of Schwinger's" | See row 1: the credit is the lecturer's. | States it as fact. | Optional: "by a parity argument that Zwiebach credited to Schwinger". Not wrong as written (Schwinger's book does treat hydrogen this way, per the lecture). |
| 6 | info | Worked example (b), last step: "Classically $|\vec R|$ is the eccentricity" | Notes p. 10 and transcript p. 2 say R lies along the major axis; neither quotes the eccentricity in this lecture. The previous page spherical-well-oscillator-hydrogen.mdx states the length is the eccentricity. | Compares quantum $\vec R^2$ values (0, 1/4, 3/4) with the classical eccentricity. | Physics is right: classically $e^2 = 1 + 2EL^2/me^4$, so at fixed $E < 0$ smaller $L$ means larger $e$; the quantum formula is the same with $L^2 \to \vec L^2 + \hbar^2$. Optional sentence: "Because of the extra $\hbar^2$, $\vec R^2 = 1 - 1/n^2$ for $l = 0$, never the classical 1 of a radial orbit." This reading is the page's own and is fair as an analogy. |

All other citations were checked against the transcript footers and the notes and are correct:
- Introduction: transcript pp. 1–19; notes chapter 10 section 7.
- Addition rule $j_1\otimes j_2$ (p. 1). Formula "Hydrogen spectrum", notes (7.1)–(7.2), with the $n^2$ count stated in the notes between (7.2) and (7.3); text cites (7.1)–(7.3); level counts 1, 4, 9 (p. 2).
- Classical vector along the major axis (p. 2), "no 2" (top of p. 3); Hermiticity argument (pp. 2–3); R formula and $[H, \vec R] = 0$ = notes (7.6)–(7.7); conservation as an exercise (p. 3); identity $\vec p\times\vec L = -\vec L\times\vec p + 2i\hbar\vec p$ (p. 3) and the one-order form (p. 3; the alternative form p. 4) = notes (7.8)–(7.9); $\vec R^2$ (p. 4) = notes (7.10); no classical $\hbar^2$, order of $H$ irrelevant (p. 4).
- $(\vec p\times\vec L)\cdot\vec L$ argument = notes (7.11)–(7.14) (7.12 and 7.13 are exactly the page's steps).
- Vector-under-rotations identity: derivation pp. 6–7, notes (7.15)–(7.17); R is a vector, $[L_i, R_j]$ and $\vec L\times\vec R + \vec R\times\vec L = 2i\hbar\vec R$ (p. 7) = notes (7.18)–(7.19); equal indices, $\vec L\cdot\vec R = \vec R\cdot\vec L = 0$ (p. 7).
- Brute force "a day" (p. 8); Jacobi (p. 9) = notes (7.20)–(7.22) (the conclusion is (7.23), optional to add); candidates (p. 9); parity (p. 10) = notes (7.25)–(7.27); R × R (p. 11) = notes (7.28); "all the algebra" (p. 11).
- Degenerate subspace, "no assumption" (pp. 11–12); $H = -me^4/2\hbar^2\nu^2$, ν real (p. 12) = notes (7.29); "nu, not N" (pp. 12–13); $-2H/me^4 = 1/\hbar^2\nu^2$ (p. 13) = notes (7.30); rescaled algebra (p. 13) = notes (7.31)–(7.32); units of angular momentum (pp. 13–14; notes p. 13); commutators of Hermitian operators anti-Hermitian (p. 14).
- $\vec J_{1,2}$ definitions (pp. 14–15) = notes (7.33)–(7.34); commute (p. 15) = (7.35); angular momenta (p. 16) = (7.36)–(7.37); equal size (pp. 16–17) = (7.38); size (p. 17) = (7.39)–(7.40); quantization (pp. 17–18) = (7.41)–(7.42); no spin put in (p. 18); "whatever is possible is … compulsory" (notes p. 15, short attributed phrase); tensor product, uncoupled basis, $(2j+1)^2$ (p. 18) = (7.43); multiplets (p. 18) = (7.44)–(7.46); "finished 8.05" (pp. 18–19).
- Bracketed remarks, all confirmed:
  - "coupled" for the product basis: p. 1, "these are called the coupled bases" for basis state times basis state, then "coupled bases" again for the reorganised states; on p. 18 the lecturer correctly says "uncoupled basis". The page's bracket is right.
  - $i\hbar\vec R$ for $2i\hbar\vec R$: p. 7, "L cross R plus R cross L is equal to ih bar R", directly after deriving $2i\hbar\vec V$ on pp. 6–7; notes (7.18) has $2i\hbar$. Right.
  - Unspoken ½ in $\vec J_1$: p. 14, "J1-- … L plus h nu R. And J2, one half L minus h nu R"; notes (7.33) have ½ in both. Right.
- Other transcript slips not repeated by the page (no bracket needed, since the page does not echo them): "R squared is equal to 1 minus 1 over h bar nu squared" (p. 13, for $1/\hbar^2\nu^2$); "one quarter of J1 cross J2" (p. 16, for $\vec J_{1,2}\times\vec J_{1,2}$); "minus L cross b" (p. 3).

## Arithmetic and answer checks
- `.venv/Scripts/python -m pytest tests/calc -q -k hydrogen-hidden`: 12 passed. The calcs file covers the level count, the energy substitution, the rearranged $\vec R^2$, $\nu = 2j + 1$, $\vec J_1^2$, and every number of the worked example.
- Physics, rechecked by hand:
  - Hermiticity: $((\vec p\times\vec L)_i)^\dagger = \epsilon_{ijk}L_kp_j = -(\vec L\times\vec p)_i$, so $\vec p\times\vec L - \vec L\times\vec p$ is Hermitian. Correct.
  - One-order form: $\vec p\times\vec L - \vec L\times\vec p = 2\vec p\times\vec L - 2i\hbar\vec p$, giving $\frac{1}{me^2}(\vec p\times\vec L - i\hbar\vec p) - \vec r/r$. Correct.
  - $\vec R^2 = 1 + \frac{2H}{me^4}(\vec L^2 + \hbar^2)$ matches (7.10) and the standard result.
  - $(\vec p\times\vec L)\cdot\vec L = \epsilon_{ijk}p_jL_kL_i = p_j\epsilon_{jki}L_kL_i = p_j(\vec L\times\vec L)_j = i\hbar\,\vec p\cdot\vec L = 0$. Correct, and the page rightly says the naive symmetric/antisymmetric argument is not valid.
  - $(\vec L\times\vec V + \vec V\times\vec L)_i = \epsilon_{ijk}[L_j, V_k] = i\hbar\epsilon_{ijk}\epsilon_{jkl}V_l = 2i\hbar V_i$. Correct.
  - Jacobi: with $A = S_1$, $B = S_2$, $C = H$, $[[A,B],C] + [[B,C],A] + [[C,A],B] = 0$ is exactly the page's form. Correct.
  - Parity: $\vec r, \vec p \to -\vec r, -\vec p$ gives $\vec L \to \vec L$, $\vec R \to -\vec R$ (both terms flip), so $\vec R\times\vec R$ and $\vec L$ are even, $\vec R$ and $\vec L\times\vec R$ odd. Correct.
  - $\vec R\times\vec R = i\hbar(-2H/me^4)\vec L$: standard (Pauli) result; with the level value, $(\hbar\nu\vec R)\times(\hbar\nu\vec R) = \hbar^2\nu^2 \cdot i\hbar\frac{1}{\hbar^2\nu^2}\vec L = i\hbar\vec L$. Correct. $\hbar^2\nu^2\vec R^2 = \hbar^2\nu^2 - \vec L^2 - \hbar^2$. Correct.
  - $[J_{1i}, J_{2j}]$: $\frac14(i\hbar\epsilon_{ijk}L_k - \hbar\nu[L_i,R_j] + \hbar\nu[R_i,L_j] - i\hbar\epsilon_{ijk}L_k)$; $[R_i, L_j] = -[L_j, R_i] = i\hbar\epsilon_{ijk}R_k = [L_i, R_j]$, so the mixed terms cancel. Correct.
  - $\vec J_{1,2}\times\vec J_{1,2} = \frac14(i\hbar\vec L + i\hbar\vec L \pm 2i\hbar\,\hbar\nu\vec R) = i\hbar\vec J_{1,2}$. Correct.
  - $(\vec J_1 + \vec J_2)\cdot(\vec J_1 - \vec J_2) = \vec J_1^2 - \vec J_2^2$ when $[J_{1i}, J_{2j}] = 0$; this product is $\hbar\nu\,\vec L\cdot\vec R$ (the page says "$\vec R\cdot\vec L = 0$ means…"; both vanish, so fine). $\vec J_1^2 = \frac14(\vec L^2 + \hbar^2\nu^2\vec R^2) = \frac14\hbar^2(\nu^2 - 1)$, cross terms zero. Correct.
  - $\nu^2 = 1 + 4j(j+1) = (2j+1)^2$; ν is real and only ν² enters H, so taking ν = 2j + 1 > 0 is a convention (a negative ν just swaps $\vec J_1$ and $\vec J_2$), as in the notes. Correct.
  - $j\otimes j = 2j\oplus\dots\oplus 0$ with $2j = n - 1$, i.e. $l = n - 1, \dots, 0$; dimension $(2j+1)^2 = n^2$. Correct.
  - Units: $E_n = -e^2/2a_0n^2$ and $-me^4/2\hbar^2\nu^2$ agree since $a_0 = \hbar^2/me^2$.
- Worked example (a): $j = 3/2$; $\frac14(16-1) = 15/4 = \frac32\cdot\frac52$; $\frac32\otimes\frac32 = 3\oplus2\oplus1\oplus0$; $7+5+3+1 = 16$; $-13.6/16 = -0.85$ eV. All correct.
- Worked example (b): $\vec R^2 = (\nu^2 - 1 - l(l+1))/\nu^2$; ground state $0$; $n = 2$, $l = 1$: $(4-1-2)/4 = 1/4$; $l = 0$: $3/4$. Correct; $\vec R^2$ commutes with $H$ and $\vec L^2$, so it has these values on states of definite $n, l$. The classical reading (circular orbit $e = 0$; less $L$ at fixed $E$ means larger $e$) is right; see row 6 for an optional refinement.
- Quiz 1 (answer 0): correct; explanation right. Quiz 2 (answer 0): correct; explanation right. Quiz 3 (answer 0): correct; explanation right. Quiz 4 (answer 0): $n = 3$, $j = 1$, $1\otimes1 = 2\oplus1\oplus0$, $5+3+1 = 9$: correct. Distractors are clearly wrong.
- Flashcards: all three correct (the R × R and $\vec R^2$ in card 1 match (7.10) and (7.28)).
- The worked example is the page's own: neither the lecture nor the notes evaluates $n = 4$ in eV or computes $\vec R^2$ on states. The notes' own example (n = 2 as $\frac12\otimes\frac12$, eq. (7.47)) is not reused.

## Coverage and order
- The page follows the lecture's order exactly: addition rule and hydrogen spectrum (pp. 1–2) → Runge–Lenz vector, Hermiticity, conservation, one-order form, $\vec R^2$ (pp. 2–4) → $\vec R\cdot\vec L$ (p. 5) → vectors under rotations, R a vector, $\vec L\cdot\vec R$ (pp. 6–7) → R × R by conservation, candidates, parity, Schwinger (pp. 8–11) → degenerate subspace and ν (pp. 11–14) → $\vec J_1$, $\vec J_2$: commute, angular momenta, equal size (pp. 14–17) → quantization and multiplets (pp. 17–19).
- Left out (minor, reasonable): R is dimensionless (p. 2); "R² is conserved because R is" (p. 4; notes p. 10 adds that all scalar products of conserved vectors are conserved); the component form $[\hbar\nu R_i, \hbar\nu R_j] = i\hbar\epsilon_{ijk}L_k$ (p. 14); the mention of QED with Feynman and Tomonaga (p. 9); the notes' exercise "show $\vec R\cdot\vec L = \vec L\cdot\vec R$" (the page gives the lecture's argument instead); the notes' remark that each degenerate subspace carries a single j (p. 14); the notes' explicit $n = 2$ states as triplet and singlet of two "spin one-half" objects, eq. (7.47), notes pp. 15–16 (not in the lecture). Optionally a sentence on (7.47) would make the "no spin was ever put in" point concrete.
- Added: the bracket on "whatever is possible is compulsory" (from the notes, correctly cited); the worked example. Nothing contradicts MIT.
- Overlap with existing pages (grep of content/ for "Runge"): content/year-3/8.05/spherical-well-oscillator-hydrogen.mdx (Lecture 23) introduces the classical Runge–Lenz vector (chapter 9 notes, eq. (7.95)) and its eccentricity meaning, and points forward to this page; it does not do the algebraic solution. The 18.03 hits are Runge–Kutta. No other page covers the algebraic solution of hydrogen, so there is no duplication. Since this page relies on the classical vector introduced there, consider adding `spherical-well-oscillator-hydrogen` to `prerequisites` (info).
- `leadsTo: []` and no cosmology callout: fine. This is MIT's last 8.05 lecture, and the hidden SO(4) symmetry has no direct cosmology use worth a callout. Incoming links are in order: the hyperfine, spin–orbit and spherical-well pages point to Lecture 26 with accurate "why" texts. Once the 8.06 syllabus exists, a `leadsTo` to the linear Stark effect / degenerate perturbation theory of hydrogen (where the n² degeneracy explained here matters) could be added (info).

## Licensing
- `grep -il "rights reserved\|courtesy"` on the transcript and notes extracts: no matches. The transcript carries the standard Creative Commons notice; the notes end with the standard OCW terms line. No figures are used.
- No copied paragraphs: the page paraphrases throughout. Short phrases kept are standard terminology or brief, attributed remarks ("idiosyncratic", "a day", "whatever is possible is … compulsory" in quotation marks with its notes page). No OpenStax or LibreTexts material.
- House style: no em dashes in the page (grep count 0); `##` sections, ends with `## Summary`; every display equation is a `<Formula>` with `cite` and `at`; Gaussian units stated.

## Notes
- Verdict pass-with-notes: no errors in physics, numbers, citations or licensing. Row 1 (the Schwinger 2D-oscillator clause) is the one change I would make; the rest are optional.
- The historical point in row 1 is from general knowledge, not from the MIT sources, and is marked uncertain.
- I did not run `npm run content:check` or check symbol meanings; that was outside this review.

## Resolution (2026-11-17, by the page author)

- Warning: the Schwinger sentence now stays inside Zwiebach's attribution, in his words ("invented the trick of using three-dimensional angular momentum for the two-dimensional oscillator").
- Info: the page says the calculation fixing the scalar in R × R is shown neither in the lecture nor in the notes; the summary credits the parity argument to Schwinger "as the lecture credits"; the notes pages are given as pp. 9–16; the worked example notes R² = 1 − 1/n² for l = 0; spherical-well-oscillator-hydrogen is added to the prerequisites. leadsTo stays empty for the last lecture.
