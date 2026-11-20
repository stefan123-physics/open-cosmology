---
page: content/year-3/8.044/entropy-thermodynamic-variable.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l9/ (read: the 21-page slide PDF mit8_044s13_l9.pdf, text via pdftotext; slides 7, 8b, 10, 11, 12, 13, 14 and 16 also checked as images because the text extraction is garbled)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_mcrocanoncl/ (read: section 7, notes pp. 7–9, page by page)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_notes-inters/ (read: pp. 1–3)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l10/ (read: slides 1–15, text only, to check the Lecture 10 leadsTo claim)
verdict: pass-with-notes
---

# Review: Entropy as a thermodynamic variable

Slide numbering: PDF page n = slide L9B n for n = 1–7, PDF 8 = L9B8a, PDF 9 = L9B8b, PDF n = L9B(n − 1) for n = 10–20, PDF 21 = OCW notice. (Slides 9–10 and 18 carry overprinted "L16B1/L16B2/L16B10" labels from reuse in Lecture 16; the L9 labels are the ones the page uses.) In both notes, the printed page number equals the PDF page number.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Counting", bracket on slide 8b | Slide 8b (image checked): "Seating, 3 people: 5·4·3 = 5!/2! = 60"; "Place settings, 3 people: 5·4·3/6 = (5!/2!)(1/3!) = 10". | "5!/2! = 60 ordered place settings for three, and 5!/(3! 2!) = 10 choices of three chairs" | The page attaches "place settings" to the 60, while MIT's "place settings" is the 10 (where the settings go, order not mattering) and the 60 is "seating" three people. The physics of the page's wording is fine, but it swaps MIT's labels. Write "60 ways to seat three people, and 10 ways to choose where the three place settings go". |
| 2 | info | "The two-level system", examples (slide 10) | Slide 10 (image checked) shows three separate pictures: surface molecules (single vs stacked), ions in a crystal (double well), and the lowest-lying pair of states of a larger level scheme. | "surface molecules, ions in a crystal with a low-lying pair of levels, and so on" | Merges the second and third examples. Optionally: "surface molecules, an ion in a crystal with two nearby positions, or the two lowest levels of any system when higher ones are out of reach". |
| 3 | info | "Number of states" formula and flashcard 3 / summary | Slide 11: $\Omega(E) = N!/[N_1!(N - N_1)!]$; slide 8a writes $K!/(K-L)!$ and $K!/[L!(K-L)!]$. | $\Omega = N!/(L!\,J!)$, $L = N_1$, $J = N_0$; slide 8a counts with $J = K - L$. | The notation change is stated in the text (both for slide 8a, "where $J = K - L$", and for slide 11) and the mapping is correct. Note that $L$ also means the wire length in "$F\,dL$" earlier on the same page; `data/symbols.json` has one page-scoped meaning for L covering both uses, so read-aloud and popups are consistent, but a reader may stumble. Acceptable as is. |
| 4 | info | "The combined first and second laws", list of work terms | Slides 1, 3, 4 and notes pp. 7–8 also list $E\,dP$ (electric field times polarisation), with $-(E/T)\,dP$ in $dS$. | Lists $-P\,dV$, surface tension $dA$, $H\,dM$, $F\,dL$ "and so on"; $dS$ formula ends with "$-\frac HT\,dM - \dots$". | Omitting $E\,dP$ avoids a clash with $E$ = energy; fine. Optionally mention "an electric field acting on a polarisation" in words. MIT writes surface tension as $S$ (clashing with entropy); the page's choice to say it in words is good. |
| 5 | info | "Interstitial atoms", description of Ω | Notes p. 2: "the product of the number of ways of choosing the N − n vacant lattice sites and …" (a slip: there are n vacant sites; the binomial $N!/[n!(N-n)!]$ is the same either way). | "the number of ways to choose the $n$ vacated lattice sites" | The page is right and the notes slip. No change needed; optionally add a bracket per writing rule 4. |
| 6 | info | "Interstitial atoms", final paragraph | Notes p. 3: n "increases exponentially with T". | "rises with $T$" | Fine (weaker but correct). |

Formulas checked and found correct (content and citation):
- Work in general, $\delta W = \sum_i X_i\,dx_i$ (notes p. 7; also on slide 1).
- Combined laws $dE \le T\,dS + \delta W = T\,dS - P\,dV + \dots$ (slide 3; equality "only for equilibrium (reversible) changes" is in notes p. 8, and the page says so).
- $dS = dE/T + (P/T)\,dV - (H/T)\,dM - \dots$ and $(\partial S/\partial x_j)_{E,x_i\ne x_j} = -X_j/T$ (slide 4; sign checked: $dE = T\,dS + \sum X_i dx_i$ gives $-X_j/T$, and $X = -P$ for $V$ gives $+P/T$).
- Statements on slide 2 ($S = S(E, V, M, \dots)$, a complete set, inverted to $E(S, \dots)$; "complete set of independent thermodynamic variables" is from notes p. 7) and the two consequences (isolated system, notes p. 8; entropy as the bridge giving equations of state, notes p. 9).
- Slides 5–6: slopes $1/T$ and $P/T$ of the surface $S(E,V)$; $T(E,V,N) \to E(T,V,N)$ and $P(E,T,V,N) \to P(T,V,N)$.
- Ideal gas (slide 7, image checked): $S = kN\ln\{V[\frac43\pi em(E/N)]^{3/2}\}$, identical to the page's $kN\ln[V(4\pi emE/3N)^{3/2}]$; $(\partial S/\partial V)_{E,N} = kN/V = P/T$, $PV = NkT$. "From the previous lecture" is correct (L8 slide 9, on the prerequisite page).
- Slide 8a counting rules (with $J = K - L$).
- Slide 9: $N = N_0 + N_1$, $E = \epsilon N_1$. Slide 10: "no work possible (just heat flow)".
- Slide 11 (image checked): $\Omega$ is 1 at $N_1 = 0$ or $N$, maximum at $N/2$; $S(E)$ sketch with $T > 0$, $T = \pm\infty$ at $E = \epsilon N/2$, $T < 0$ beyond, falling to zero at $E = \epsilon N$.
- Slide 12 (image checked): Stirling, $\partial N_1/\partial E = 1/\epsilon$, $1/T = (k/\epsilon)\ln[(N - N_1)/N_1] = (k/\epsilon)\ln(N/N_1 - 1)$.
- Slide 13 (image checked): $N_1 = N/(e^{\epsilon/kT}+1)$, $E = \epsilon N/(e^{\epsilon/kT}+1)$, low-$T$ limit $e^{-\epsilon/kT}$, approach to 0.5.
- Slide 14 (image checked): $C$ formula and both limits $Nk(\epsilon/kT)^2e^{-\epsilon/kT}$ and $\frac{Nk}{4}(\epsilon/kT)^2$.
- Slides 15–17 (16 as image): the $N \to N-1$, $N_1 \to N_1 - n$ construction, $p(0) = 1 - N_1/N$, $p(1) = N_1/N = [e^{\epsilon/kT}+1]^{-1}$, $p(0)+p(1) = 1$, $E = N[0\cdot p(0) + \epsilon p(1)]$, "could have worked backwards" (slide 17).
- Interstitial atoms (notes pp. 1–3): model, Ω as a product of two binomials, derivative through $n$ (p. 2), $n^2/[(N-n)(M-n)] = e^{-\epsilon/kT}$ and $n \approx \sqrt{NM}\,e^{-\epsilon/2kT}$ (p. 3, cited p. 3: correct), the three properties and "entropy effect" (p. 3).
- Slides 18–19: the microcanonical scheme and the three bullets on what comes next.

## Arithmetic and answer checks
- Plot caption and flashcard: peak of $x^2e^x/(e^x+1)^2$ where $x\tanh(x/2) = 2$, $x = 2.3994$, $kT/\epsilon = 0.4168 \approx 0.42$; peak value $5.757 \times 11.017/12.017^2 = 0.439 \approx 0.44$. Correct, and consistent with the slide 14 graph (peak just under 0.45 near $kT/\epsilon \approx 0.4$).
- Plot expressions: $1/(e^{1/t}+1)$ and $(1/t)^2e^{1/t}/(e^{1/t}+1)^2$ with $t = kT/\epsilon$ are the slide 13 and 14 formulas per member. Correct.
- Example (a): $1/(e+1) = 0.2689 \to 0.269$; $1/(e^2+1) = 1/8.389 = 0.1192 \to 0.119$. Correct.
- Example (b): $(e+1)^2 = 13.826 \to 13.83$; $2.718/13.826 = 0.1966 \to 0.197$. Correct.
- Example (c): $N_1 = \frac34N$, $N/N_1 - 1 = \frac13$, $\ln\frac13 = -1.0986$; $T = 100/(-1.0986) = -91.02$ K $\to -91.0$ K. Correct; the remark that a negative-temperature system gives up energy to any positive-temperature system is correct.
- Example (d): $kT = 8.617\times10^{-5}\times1000 = 0.08617$ eV; $\epsilon/2kT = 5.8025 \to 5.80$; with $M = N$, $n/N \approx e^{-5.8025} = 3.02\times10^{-3} \to 3.0\times10^{-3}$. Correct, and $n \ll N$ holds.
- Example is original (MIT's slides and notes give no numerical example).
- Slide 8b numbers: 120, 60, 10. Correct (see #1 for labels).
- Quiz 1 (answer 0, $P/T$): correct (slide 4); explanation correct.
- Quiz 2 (answer 0, $N/(e^{\epsilon/kT}+1)$): correct (slides 12–13); explanation correct, including the low-$T$ limit; distractor $N/(e^{\epsilon/kT}-1)$ is wrong as intended.
- Quiz 3 (answer 0, $E > \epsilon N/2$): correct (slide 11); "When $E = 0$" is $T = 0$, correctly a distractor.
- Quiz 4 (answer 0, $\sqrt{NM}e^{-\epsilon/2kT}$): correct (notes p. 3); explanation correct.
- Flashcards: all three correct. Card 3's "$C$ peaks near $kT \approx 0.42\epsilon$" verified above.
- calcs/8.044/entropy-thermodynamic-variable.yaml covers every number on the page plus identity checks for slides 7, 12 and 14; its 17 entries pass (`pytest -k entropy-thermodynamic`: 17 passed).

## Coverage and order
- The page follows slides 1–19 in order: work forms (1), S of the constraints (2), combined laws (3), dS and derivatives (4), interpretation (5), utility (6), ideal gas (7), counting (8a, 8b), two-level system (9–14), one member (15–17), scheme (18), what comes next (19). Notes section 7 (pp. 7–9) is covered in the same order, inside the first section.
- No slide is left out.
- Additions: the interstitial-atoms example (an MIT note, clearly labelled "Greytak's notes add a second example"), inserted between slides 17 and 18; the plot (generated from the slide formulas, reproducing what slides 13–14 graph); the worked example; the remark "Positive temperatures never put more than half the members in the upper level" (correct, implied by slides 11 and 13); "Fermi-like occupation" in the frontmatter summary (the page's own description, correct in form).

## Licensing
- Neither the slides nor the two notes carry "All rights reserved" or "Courtesy of" notices (grep of extracted text; slides viewed as images show no credits); only the standard OCW terms notice.
- No figures reproduced: slide 10's pictures and slide 11's $S(E)$ sketch are described in words; the only graph is a `<Plot>` generated from formulas.
- No near-verbatim sentences found. Close paraphrases of short slide bullets, acceptable: "it will no longer be used to solve problems … the canonical ensemble, the real workhorse of statistical mechanics" (slide 19: "We will no longer use it to solve problems … the real workhorse of S.M."); "Knowing $E$, one could have worked backwards to $p(1)$" (slide 17); "an entropy effect" (notes p. 3). No OpenStax or LibreTexts material.

## Notes
- No em dashes (—) on the page (grep: 0).
- Notation change: the page's statement that slide 11 writes the factorials of $N_1$ and $N - N_1$ directly is accurate (image checked), and $L = N_1$, $J = N_0 = N - N_1$ reproduce the slide's formula exactly. See #3 for the double use of $L$.
- leadsTo Lecture 10: L10 slides 1–15 (text) open with the second law (consistent with slide 19's "develop our understanding of the 2nd law"), use $dU = T\,dS - P\,dV$ (L10B3), and introduce Maxwell relations (L10B10–11) and $F$, $H$, $G$ as "thermodynamic potentials" (L10B12–13). Claim correct.
- leadsTo Lecture 12: matches slide 19 ("We will derive the canonical ensemble") and the course syllabus title "Derivation of the canonical ensemble". The Lecture 12 slides were not read, so the exact content is unverified (uncertain, but low risk).
- No cosmology callout on this page, so there are no cosmology claims to check.
- `data/symbols.json` has page-scoped meanings for every symbol used (including $L$, $J$, $K$, $N_0$, $N_1$, $X_i$, $x_i$, ε, $n$, $M$ covering both uses on the page).

## Resolution (2026-11-17, by the page author)

- Warning 1: the slide 8b labels now match MIT: 60 ways to seat three people, 10 ways to choose the chairs for three place settings.
- Info 2: the three examples of slide 10 (surface molecules, ions in a double well, lowest-lying states) are now listed separately.
- Info 3–6: no change needed (the shared L for wire length and N₁ is covered by the page's symbol meaning; the E dP term is left out on purpose, since E is the energy here; "rises with T" is kept).
