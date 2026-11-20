---
page: content/year-3/8.044/identical-particles.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l17/ (read: the 20-page slide PDF mit8_044s13_l17.pdf; the text extraction is garbled (Greek letters, primes, sums and products lost), so every slide was checked as an image, l17-01.png … l17-20.png)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l18/ (read in part, as text: slides L18B24–L18B26, to check the leadsTo claim)
  - content/year-3/8.044/_course.json (read, Lecture 17 and 18 entries)
  - calcs/8.044/identical-particles.yaml (read; every number recomputed by hand, the suite itself not run)
verdict: pass-with-notes
---

# Review: Quantum states of many identical particles

Slide numbering (checked on the images): PDF page n = slide L17Bn for n = 1 … 19; PDF page 20 is the standard OCW notice. The page cites slides 1–19 by these numbers, and every citation lands on the right slide. There is no transcript for this lecture on OCW; only the slides were compared.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "One particle", second sentence (slide 2) | Slide 2: $\psi_n(\vec r,\vec s) = \psi^{\text{space}}_{n'}(\vec r)\,\psi^{\text{spin}}_{n''}(\vec s)$, then two examples of the **spatial** part: $\psi^{\text{space}}_n(x) \propto e^{-\alpha x^2/2}H_n(\sqrt\alpha\,x)$ (oscillator), $\psi^{\text{space}}_n(\vec r) \propto e^{i\vec k\cdot\vec r}$ (free particle). | "Often $\psi_n$ factors into a spatial part times a spin part, such as $e^{-x^2/2}$ times a Hermite polynomial for an oscillator, or $e^{i\vec k\cdot\vec r}$". As written, "such as … times …" reads as if the Gaussian were the spatial part and the Hermite polynomial the spin part. Also drops the slide's $\alpha$ (fine only if $x$ is in units of $1/\sqrt\alpha$). | "Often $\psi_n$ factors into a spatial part times a spin part (slide 2). Examples of spatial parts: $e^{-\alpha x^2/2}H_n(\sqrt\alpha\,x)$ for an oscillator in one dimension, $e^{i\vec k\cdot\vec r}$ for a free particle in three." |
| 2 | warning | "Building symmetric and antisymmetric states", "for $N$ bosons, the sum of all $N!$ permutations, normalized" | Slide 14 gives the factor explicitly: $\Psi^{(+)}_N = \frac{1}{\sqrt{N!}}\frac{1}{\sqrt{\prod_\alpha n_\alpha!}}\sum_{\text{permutations}}\alpha(1)\beta(2)\gamma(3)\cdots$ | Gives only the two-particle formula and "normalized". The $1/\sqrt{\prod n_\alpha!}$ factor is the non-obvious part (it is what makes repeated states come out right), and the page's two-particle $1/\sqrt2$ formula is only normalized when $\alpha \ne \beta$; this is not said. | Add the slide's $N$-particle formula as a cited `<Formula>` (slide 14), or a sentence: "the normalization is $1/\sqrt{N!\,\prod_\alpha n_\alpha!}$, where $n_\alpha$ counts how often state $\alpha$ appears; the two-particle formula above assumes $\alpha \ne \beta$." |
| 3 | warning | End of the page (no cosmology callout, leadsTo only 8.044 L18) | n/a (writing rule 6) | No `Callout kind="cosmology"` and no 8.286 leadsTo, although a real connection exists: 8.286 Lecture 17 (`neutrinos-and-particle-counting`, `temperature-and-decoupling`) counts bosons and fermions separately (the 7/8 factor for fermions, spin states of neutrinos). | Optional now, since the distributions themselves come in Lectures 18–19: either add a short callout and a leadsTo to 8.286 Lecture 17, or defer the link to the Fermi–Dirac/Bose–Einstein page and say so in the run log. |
| 4 | info | "Many distinguishable particles", formula "Product states" (slide 6) | Slide 6 writes $\psi_{\{n\}}(1,\dots,N) = \psi_{n_1}(1)\cdots\psi_{n_N}(N)$ and $\hat{\mathcal H}\psi_{\{n\}} = E_{\{n\}}\psi_{\{n\}}$; it does not write $E$ as a sum. | Adds $E = E_a + E_b + \dots + E_z$ and cites slide 6. Correct physics (it follows from slide 5's sum of single-particle Hamiltonians), and the $a,\dots,z$ for $n_1,\dots,n_N$ change is stated. | Optional: `at="slides 5–6"`. Note also that "$a, b, \dots, z$" suggests at most 26 particles; harmless, but the slide's $n_1, \dots, n_N$ has no such hint. |
| 5 | info | "Building symmetric and antisymmetric states", both formulas | Slides 14–15 write the single-particle functions as bare letters: $\alpha(1)\beta(2) \pm \alpha(2)\beta(1)$. | Writes $\psi_\alpha(1)\psi_\beta(2) \pm \psi_\beta(1)\psi_\alpha(2)$. Same expressions (the second terms are identical), but this notation change is not stated, unlike the $a,\dots,z$ one. | Optional bracket: "(the slides write $\alpha(1)$ for $\psi_\alpha(1)$)". |
| 6 | info | "Trying the canonical ensemble", formula and next sentence | Slide 18: three lines, each restricted sum with a prime; the last is $\sum'_{\{n_\alpha\}}\big(\prod_\alpha e^{-\epsilon_\alpha n_\alpha/kT}\big)$, and "one can not interchange the $\sum$ over occupation numbers and the $\prod$ over states". | Drops the prime (stated in the text, correct) and writes the exponent as a sum. Then: "Without the prime, the exponential would split into a product over states". The exponential always splits into a product; what the restriction blocks is swapping the sum and the product. | "The exponential is a product over states, $\prod_\alpha e^{-\epsilon_\alpha n_\alpha/kT}$; without the restriction the sum over each $n_\alpha$ could be taken inside the product, state by state." |
| 7 | info | "Identical particles", composite particles (slide 13) | Slide 13 table: H, D, T (tritium, nuclear spin ½, B-E), ³He, ⁴He, ⁶Li, ⁷Li, H₂ (nuclear spin 0 or 1), $x_2$ (integer, B-E), with nuclear spin and electron count columns. | Lists H, D, ³He, ⁴He, ⁶Li, ⁷Li, H₂ and "diatomic molecules of identical atoms"; all statistics agree with the table. Omits tritium and the nuclear-spin column. | Optional: add tritium ("a boson, although its nucleus has spin ½: the electron adds the other half") which is the table's most instructive line. |
| 8 | info | Introduction, "Up to now the course has treated many-particle systems classically, or as collections of distinguishable units" | n/a | Lecture 15 (black-body radiation) already used quantized oscillator modes. Arguably still "distinguishable units" (modes), so not wrong. | Optional: "…or as distinguishable units such as localized spins and oscillator modes." |

## Formula citations (all checked against the slide images)
- Product states, slide 6: matches, with the stated renaming; energy sum see #4.
- $\Psi^{(+)}_2 = \frac{1}{\sqrt2}[\alpha(1)\beta(2) + \alpha(2)\beta(1)]$: slide 14. Correct (notation #5).
- $\Psi^{(-)}_2 = \frac{1}{\sqrt2}[\alpha(1)\beta(2) - \alpha(2)\beta(1)]$: slide 15. Correct. The page's description of the $N$-fermion determinant ($1/\sqrt{N!}$, rows = particles, columns = states) matches slide 15's arrows ("→ states", "↓ particles").
- Canonical sum, slide 18: correct apart from the prime, whose omission is stated (#6 on wording).
- Prose citations: slide 1 (hydrogen $n, l, m_l, m_s$), slide 3 ($2S+1$ values, $\pm\hbar/2$), slide 4 ($1/\sqrt2$ combination; $f(x)\phi_{1/2} + g(x)\phi_{-1/2}$), slide 5 (sum of single-particle Hamiltonians), slide 7 (pairwise interaction, basis), slide 8 ($P_{ij}^2 = 1$, eigenvalues $\pm1$), slide 9 ($[\hat O, P_{ij}] = 0$), slide 10 (same state; relativistic QM: integer spin ↔ $(+)$, half-integer ↔ $(-)$), slides 11–12 (count sign changes; $N$ even ⇒ B-E and integer spin, odd ⇒ F-D and half-integer; valid while internal degrees of freedom are not excited), slide 16 (two equal columns: Pauli; two equal rows: same $\vec r$ and $\vec s$; infinite list of $n_\alpha$ from 0 to $N$, $\sum n_\alpha = N$), slide 17 ($|1,0,1,1,0,0,\dots\rangle$ F-D, $|2,0,1,3,6,1,\dots\rangle$ B-E, $\sum'\epsilon_\alpha n_\alpha = E$, Ne, Na, He* configurations), slide 19 (Bose: $n(\epsilon) = N\delta(\epsilon)$; Fermi: $n = 1$ below $\epsilon_F$). All correct.

## Arithmetic and answer checks
- Example (a): distinguishable $3\times3 = 9$; bosons $3 + \binom32 = 6$; fermions $\binom32 = 3$. Correct.
- Example (b): ⁷Li: $3 + 4 + 3 = 10$, even, boson; agrees with slide 13. Correct.
- Example (c): five spin-½ fermions, $\epsilon_n = n^2\epsilon_1$, two per level: $2(1) + 2(4) + 1(9) = 19\epsilon_1$; highest occupied level $9\epsilon_1 = \epsilon_F$; spin-0 bosons $5\epsilon_1$; ratio $3.8$. Correct. "almost four times less" is awkward wording for a ratio of 3.8 (say "almost four times lower" or "the fermions' energy is almost four times higher").
- calcs/8.044/identical-particles.yaml: all six entries match. The fermion count in (a) (3) and $\epsilon_F = 9\epsilon_1$ have no entries; trivial, optional.
- Quiz 1: answer 0 (antisymmetric). Correct; explanation matches slides 9–10.
- Quiz 2: ³He: 2 p + 1 n + 2 e = 5, odd, fermion; answer 0. Correct, agrees with slide 13.
- Quiz 3: answer 0 (determinant, equal columns). Correct (slide 16). "Slater-type" is standard terminology, not on the slide; fine.
- Quiz 4: answer 0 (constraint $\sum n_\alpha = N$). Correct (slide 18).
- Flashcards 1–3: correct (slides 10–12; 16–17; 19).
- Example originality: (a) and (c) are original. (b) reuses an entry of slide 13's table that the body text also states; consider another nucleus (e.g. ¹³C: 6 + 7 + 6 = 19, fermion; or ⁸⁷Rb: 37 + 50 + 37 = 124, boson) so the step is not a lookup.

## Coverage and order
- Follows slides 1 → 19 in order. Every slide is represented.
- Left out: slide 6's remark that there are $N$ indices each with possibly infinite range; slide 7's interaction Hamiltonian $\frac12\sum_{i\ne j}\hat{\mathcal H}_{\text{int}}(i,j)$ (described in words only); slide 13's tritium and nuclear-spin column (#7); slide 14's $N$-boson normalization (#2).
- Added: the worked example (own), "identical fermions avoid each other" as the reading of slide 16's second bullet (sound).
- Claims about Lecture 18: "the cure, in the next lecture, is to let $N$ vary too" and leadsTo "the chemical potential and the grand canonical ensemble, which removes the constraint on the occupation numbers" are correct: `_course.json` Lecture 18 = "Chemical potential and the grand canonical ensemble", and L18 slides 24–26 repeat slide 18 and then factor the grand sum into $1 + e^{(\mu-\epsilon)/kT}$ (fermions) and $[1 - e^{(\mu-\epsilon)/kT}]^{-1}$ (bosons) per state.

## Licensing
- No "All rights reserved" or "Courtesy of" notice: grep of the text found none, and every slide image was inspected (slide 19's two sketches carry no credit). Only the standard OCW notice on PDF page 20.
- No figure reused; the page has no diagrams.
- No OpenStax or LibreTexts material.
- No em dashes (—) in the page or the calcs file (grep found none; "Bose–Einstein" in flashcard 1 uses an en dash, which is fine).
- Wording is rewritten. Closest to the slides, all short factual statements, acceptable: "these products are no longer eigenfunctions, but they remain a useful basis in which to expand the true ones" (slide 7: "are no longer energy eigenfunctions; however, they could form a very useful basis set for the expansion of the true energy eigenfunctions"); "Every particle has the same single-particle states available, each may be in a different one" (slide 6); "two states that differ only by swapping two particles' coordinates are the same state" (slide 10); "Bosons put all $N$ particles into the lowest single-particle state. Fermions fill the lowest $N$ single-particle states once each" (slide 19). Optional light rewording of the slide 7 sentence, the closest of them.

## Notes
- Stated notation changes verified: $a, b, \dots, z$ for the slides' $n_1, \dots, n_N$ (slide 6) and the dropped prime on the restricted sum (slides 17–18) are both said on the page and applied consistently. The $\psi_\alpha$ for bare $\alpha$ change is not stated (#5).
- No errors found. Fix the two warnings about content (#1 the space/spin ambiguity, #2 the missing $N$-boson normalization) before setting `status: reviewed`; #3 is a judgment call for the author.

## Resolution (2026-11-17, by the page author)

- Warning 1: the slide 2 sentence now says that both examples (oscillator Gaussian times Hermite polynomial, plane wave) are spatial parts.
- Warning 2: the boson normalization now gives 1/√N! and 1/√(n_α!) per state, and the two-particle formula is marked as normalized only for α ≠ β.
- Warning 3: `leadsTo` now includes 8.286 Lecture 17 (counting species, the 7/8 factor for fermions).
- Info: the slide 18 wording now says that the restriction blocks swapping the sum and the product; the notation change α(1) → ψ_α(1) is stated; the intro mentions Lecture 15's quantum radiation modes; the slide 7 sentence is reworded. The tritium row and example (b) stay as they are.
