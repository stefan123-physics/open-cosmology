---
page: content/year-2/8.04/hydrogen-spectrum.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes22/ (read: Zwiebach, "Lectures 21 and 22: Hydrogen Atom", PDF, 11 pages; pp. 6–10 extracted with pdftotext and printed footers checked)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/calendar/ (read, for the Lecture 23 topics)
verdict: pass-with-notes
---

# Review: The hydrogen spectrum and its wavefunctions

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example (b), Summary bullet 4 | The notes give no wavelength. The measured Lyman alpha wavelength is 121.57 nm (so 121.6 nm, as the 8.286 `cosmological-redshift` page uses). | "λ = 1239.8/10.20 ≈ 121.5 nm" and, as a fact in the Summary, "Lyman alpha at 121.5 nm". | The arithmetic is right for 13.606 eV, which is the infinite-proton-mass Rydberg. With the reduced mass (covered on the previous page), 13.598 eV gives 121.57 nm. Either add a bracketed note that the reduced mass moves it to 121.6 nm, or word the Summary as "about 122 nm". |
| 2 | info | Formula "Hydrogen eigenstates" and the text below it | The notes call the normalization constant 𝒩 (eqs. (2.34)–(2.35)). | Calls it $C$. | Renaming is sensible, because $N$ is the polynomial degree. You could add "(𝒩 in the notes)" so readers can match the source. The content of (2.35) is reproduced correctly: $(r/a_0)^l$ × polynomial of degree $N = n-(l+1)$ in $r/a_0$ × $e^{-Zr/(na_0)}Y_{lm}$. |
| 3 | info | Sentence "the spectrum is highly degenerate (notes pp. 7–8)" | "Highly degenerate" and the $2l+1$ states per $l$ are both at the top of p. 8. | Cites pp. 7–8. | You could cite p. 8. This is acceptable as it stands, because the fact that the energy depends on $n$ alone is on p. 7. |
| 4 | info | "With $\rho = \kappa x$ and $\kappa = 1/(2n)$" | Notes p. 9: "Recall that we defined ρ = 2Zr κ / a0". | Uses $x$, which is defined only on the previous page (`hydrogen-atom`, eq. (2.14), $x = 2Zr/a_0$). | Write $\rho = 2Z\kappa r/a_0$, or define $x$ again in a few words. |
| 5 | info | Cosmology callout, last sentence | (Not in the notes.) The 8.286 Lecture 17 page notes that the recombination temperature (about 4,000 K) depends on density as well as on the binding energy. | "The same 13.6 eV binding energy decides when the cooling early universe turned neutral." | "Decides" is a little strong, since 13.6 eV corresponds to about 158,000 K and not 4,000 K. Consider "sets the scale for when…" or add "together with the enormous number of photons per atom". |

All formula citations were checked against the PDF, with the printed footer page numbers confirmed:
- (2.28) $n \equiv N + l + 1 = 1/(2\kappa)$, p. 7: correct.
- (2.29), p. 7: correct.
- (2.31) $E = -\frac{Z^2e^2}{2a_0}\frac{1}{n^2}$, p. 7: correct. The page writes $E_n$ and the notes write $E$, which is harmless.
- (2.32) $\sum(2l+1) = 2(n-1)n/2 + n = n^2$, p. 8: correct. The page leaves out the notes' intermediate step "$= n^2 - n + n$", which is fine.
- Figure 1 (diagonals $N + l = n - 1$), p. 8: correct.
- The meaning of $n$, $l$ and $m$, p. 8: correct.
- Figure 2 (columns by $l$, $N$ counts nodes), p. 9: correct.
- (2.33) $\rho = Zr/(na_0)$, p. 9: correct.
- (2.34)–(2.35), p. 10: correct.
- (2.36) $\psi_{100} = e^{-r/a_0}/\sqrt{\pi a_0^3}$, p. 10: correct.

## Arithmetic and answer checks
- Counting table: $n = 1$ gives 1 state, $n = 2$ gives $1 + 3 = 4$ and $n = 3$ gives $1 + 3 + 5 = 9$. This matches the notes' table on p. 8.
- Plot normalizations (with $a_0 = 1$), recomputed:
  - 1s: $\int 4r^2e^{-2r}\,dr = 4 \cdot 2/8 = 1$.
  - 2s: $\int r^2(2-r)^2e^{-r}/8\,dr = (8 - 24 + 24)/8 = 1$.
  - 2p: $\int r^4e^{-r}/24\,dr = 24/24 = 1$.
  - These are the standard $R_{10}$, $R_{20}$ and $R_{21}$ squared and multiplied by $r^2$.
- Plot caption:
  - The 1s peak is at $r = a_0$: correct.
  - The 2s node is at $r = 2a_0$, with $N = 1$: correct.
  - The 2p state has no node ($N = 0$) and its peak is at $4a_0$, from $d(r^4e^{-r})/dr = 0$: correct.
- Plot range: the maxima are 1s 0.541, 2s 0.191 (outer peak at $3+\sqrt5$) and 2p 0.195. All fit inside range 0.62. At $r = 14$ the 2s tail is about 0.003, so the domain is adequate.
- Example (a): $1+3+5+7 = 16 = 4^2$, and $N = n - l - 1 = 3, 2, 1, 0$ for $l = 0..3$. Correct.
- Example (b):
  - $13.606 \times 0.75 = 10.2045 \approx 10.20$ eV: correct.
  - $1239.8/10.2045 = 121.50$ nm. Using $1239.8/10.20$ gives 121.55, which also rounds to 121.5.
  - At $z = 3$: $4 \times 121.50 = 485.98 \approx 486$ nm, which is visible (blue-green).
  - All three are correct. See finding 1 about the measured value.
- Example (c):
  - $d(r^2e^{-2r/a_0})/dr = 0$ at $r = a_0$.
  - $\langle r\rangle = \frac{4}{a_0^3}\cdot\frac{3!}{(2/a_0)^4} = \frac{4}{a_0^3}\cdot\frac{6a_0^4}{16} = 1.5a_0$.
  - Both are correct.
- Quiz 1: $n = 3$ gives 9 states. The marked answer (index 0, "9") is correct.
- Quiz 2: $N = 4 - 1 - 1 = 2$, so the marked answer "2" is correct. "Two nodes" agrees with the notes (p. 9: N is the number of nodes).
- Quiz 3: "Only $n$" is correct (notes p. 7).
- Quiz 4: $1239.8/10.2 = 121.5$, so "about 122 nm, ultraviolet" is correct. The distractors (656 nm H-alpha, 91 nm Lyman limit, 10.2 nm) are all wrong as intended.
- Flashcards: all correct. The "$E_1 \approx -13.6$ eV" in the ground-state card is not on pp. 7–10, but it follows from (2.31) and the scales on the earlier pages.
- I read the calcs file `calcs/8.04/hydrogen-spectrum.yaml`, and its entries match the page. I did not run `npm run calc:test`.

## Coverage and order
- The page follows the notes' order: (2.28) → (2.29) → (2.30)/(2.31) → degeneracy and Figure 1 → table → (2.32) → Figure 2 and nodes → (2.33) → (2.34)–(2.36) → the pointer to the external table. Nothing from pp. 7–10 is missing.
- (2.30), $E = -2Z^2e^2\kappa^2/a_0$, is skipped as a display, and the page goes straight to (2.31). This is acceptable, because the previous page covers (2.11).
- The page adds a radial-density plot, a cosmology callout and a worked example. All three are clearly the page's own.
- MIT's calendar for Lecture 23 does read "Energy levels diagram for hydrogen. Virial theorem applied. Circular orbits and eccentricity." I confirmed that the OCW notes (11 pages, ending at (2.36) and the transcription credit) contain none of the virial theorem, circular orbits or eccentricity. The page's bracketed note saying so is accurate.

## Licensing
- The notes contain no "All rights reserved" or "Courtesy of" notices (checked with grep on the full text). They are under the course's CC BY-NC-SA licence.
- Figures 1 and 2 are not reproduced. The table is rebuilt in the page's own format, with standard content.
- No verbatim copying beyond standard terms. A few short phrases are kept ("highly degenerate", "principal quantum number").
- The HyperPhysics table linked on notes p. 10 is not copied or linked. The plotted radial functions are the standard textbook forms, normalized and checked by the page itself.
- The worked example is original: the notes have no worked examples on these pages.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.286 Lecture 5 ("Cosmological Redshift…"): fair. The `cosmological-redshift` page itself uses a Lyman-alpha example (121.6 nm), and the callout's link `/courses/8-286/cosmological-redshift` points to an existing page.
- leadsTo 8.286 Lecture 17 ("Black-Body Radiation… Part III"): fair. The `temperature-and-decoupling` page (Lecture 17) covers recombination and decoupling. See finding 5 on wording.
- The page's `lecture: 23` matches the `_course.json` syllabus entry for Lecture 23, which uses the same notes URL as Lecture 22.

## Resolution (2026-11-17, by the page author)

1. Example (b) now notes that the measured Lyman-alpha line is at 121.6 nm, the reduced mass weakening the binding slightly (calcs entry `lyman-measured`); the Summary says "near 122 nm".
2. The page now says the notes write the constant as a script N, renamed C to avoid a clash with the degree N.
3. "Highly degenerate" now cites notes p. 8.
4. ρ is now written 2Zκr/a₀, defined on the previous page.
5. The callout now says 13.6 eV "sets the scale" for when the universe turned neutral, at about 4,000 K.

Status set to `reviewed`.
