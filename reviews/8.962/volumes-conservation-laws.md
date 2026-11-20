---
page: content/year-5/8.962/volumes-conservation-laws.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-4-volumes-and-volume-elements-conservation-laws/ (lecture page not opened; the transcript below is its only text resource)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/1834219200f6799c5fa91ccd31f3bcab_h9xaoGkyHwg.pdf (read, local copy L4.pdf / L4.p.txt, 22 PDF pages; PDF page = cited page)
  - 8.962 Lecture 5 transcript (read, for leadsTo)
  - content/year-4/8.286/mass-energy-and-radiation.mdx and matter-radiation-equality.mdx (this site's 8.286 Lecture 15 pages, read for leadsTo)
verdict: needs-changes
---

# Review: Dust, volume elements and conservation laws

No slides or notes exist on OCW for this lecture; Hughes writes on the board and the transcript does not show the equations, so every `<Formula>` was checked against what Hughes says on the cited page. All citations point to pages where the equation or claim is spoken about.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The current 4-vector and Maxwell's equations", sentence before the F matrix | p. 20: "Last semester I had these memorized, but I have totally forgotten them." Griffiths is recommended (p. 20) for the whole topic of packaging E and B in a tensor. | "(Hughes wrote the matrix from memory and refers to Griffiths for details; transcript p. 20)" | Say the opposite: Hughes says he no longer remembers the components; the matrix here uses the page's own convention (F^{0i} = E_i, F^{ij} = ε_ijk B_k, as in MTW), and Hughes points to books such as Griffiths. |
| 2 | warning | "Dust and the number-flux 4-vector", second paragraph | p. 6: "The lengths are smaller by a factor of gamma, therefore the volume is larger by a factor of gamma" (slip: the volume is smaller, the density larger). | "its volume is smaller by γ and the density larger" (correct physics, silently corrected) | Add a short bracketed note that Hughes says "larger" for the volume where he means the density (Writing rule 4), as is done for the even/odd-permutation slip. |
| 3 | warning | "Volumes in spacetime", sentence before the Σ_α formula | p. 15: "let's say I leave off edge A" (no further wording). | "leaving out edge A gives the one-form of the opposite face" | "Opposite face" is unclear (opposite to what?). Write "the one-form of the face spanned by B, C and D", matching the 3D wording "the face spanned by B and C". |
| 4 | info | "The current 4-vector...", last paragraph | p. 22: "We just killed 13 terms." | "will kill a dozen terms at a time" | Harmless paraphrase; fine as is, or "a dozen or more". |
| 5 | info | Even/odd permutation slip note | p. 13: "Even permutations means I swap two pairs of indices. So 123, 231, 312 ... odd permutations ... So 132, 231" | Page flags that 231 is listed as odd and that it is even. | Correct. "Swap two pairs" is loose but not wrong (two transpositions); the note could say only that 231 is misplaced. Optional. |

## Physics checks (signs, indices, conventions)
- 4-velocity u^α = (γ, γv), u·u = −1; p = mu, p·p = −m², E² − |p|² = m² (pp. 2–3): correct for (−,+,+,+), c = 1.
- Photon p^α = ħω(1, n̂) (p. 3): correct, null.
- n = γn₀, flux nv = γn₀v, N = n₀u, N^α = (n, nv), N·N = −n₀² (pp. 5–7): correct; N·N = −γ²n₀²(1 − v²) = −n₀².
- ω̃^α(N) = ω^α_β N^β = N^α (p. 8): correct; α labels the basis one-form, as the page says.
- ∂n/∂t + ∇·(nv) = 0 ⇔ ∂_α N^α = 0 (p. 10); integral form d/dt∫n dV = −∮ n v·dA (p. 11): correct, with outward dA.
- V = A·(B×C) = ε_ijk A^i B^j C^k; σ_i = ε_ijk B^j C^k = (B×C)_i (pp. 12–14): correct.
- ε_0123 = +1 with lower indices, ε_1023 = −1 (p. 15): matches Hughes and the MTW/Schutz convention (then ε^0123 = −1; the page does not raise indices, so no conflict).
- 4D Gauss theorem ∫∂_αV^α d⁴x = ∮V^α dΣ_α (p. 15): correct. Face orientations: the future face t₂ contributes +∫N⁰ d³x, the past face t₁ minus, the x₂ face +∫N¹ dt dy dz, the x₁ face minus. I checked these against the elementary result ∫∂_αV^α d⁴x = Σ_α [∫V^α]_{lower}^{upper}, which fixes the outward orientation; they are right. (Note: with ε_0123 = +1 the naive ordering (dt, dy, dz) for the x face gives ε_1023 = −1, so the outward orientation needs the edges taken in the matching order; the page's attribution of the signs to "the orientation built into ε (a right-hand rule)" follows Hughes on pp. 16–17 and is acceptable.)
- Result d/dt∫N⁰ d³x = −∮N^i dA_i (pp. 17–18): correct.
- J^μ = (ρ, J), ∂_μJ^μ = 0 (p. 19): correct; ρc remark matches p. 19.
- Component counts: 16 general, 10 symmetric, 6 antisymmetric (pp. 19–20): correct.
- F^{μν} matrix: F^{0i} = E_i, F^{12} = B_z, F^{13} = −B_y, F^{23} = B_x, antisymmetric. Checked against ∂_ν F^{μν} = 4πJ^μ: μ = 0 gives ∂_iE_i = 4πρ; μ = 1 gives −∂_tE_x + ∂_yB_z − ∂_zB_y = 4πJ_x, i.e. (∇×B − ∂E/∂t)_x = 4πJ_x. Gaussian, c = 1, correct. Lowered: F_{0i} = −E_i, F_{ij} = F^{ij}. Cyclic identity: (1,2,3) gives ∇·B = 0; (0,1,2) gives ∂_tB_z + (∇×E)_z = 0 (Faraday). Correct. Equals F^{μν} = ∂^μA^ν − ∂^νA^μ with A^μ = (φ, A).
- Charge conservation derivation (p. 21): each step (relabel, antisymmetry, commuting partials) is correct and in Hughes's order.
- Equation of motion of a charge keeps the 4-acceleration orthogonal to u, left to the notes (p. 22): matches.

## Arithmetic and answer checks
- Worked example 1: γ(0.6) = 1.25; n = 3.75; flux 2.25; −14.0625 + 5.0625 = −9 = −n₀². Correct.
- Graph: curves γ and γv on v ∈ [0, 0.95]; γ(0.95) = 3.20 < range 4. Caption claim γ² − (γv)² = 1: correct.
- Worked example 2: B×C = (3·4 − 0·1, 0·0 − 1·4, 1·1 − 3·0) = (12, −4, 1); V = 2·12 = 24; det[[2,0,0],[1,3,0],[0,1,4]] = 24. Correct.
- Quiz 1: answer 3.75 (index 0) correct. Distractors: 2.4 = n₀/γ, 3 = n₀, 4.69 = n₀γ² = 4.6875 (rounded). Explanation numbers correct.
- Quiz 2: ε_1023 = −1 (index 0) correct.
- Quiz 3: 6 (index 0) correct; explanation (12/2 = 6, symmetric 10) correct.
- Quiz 4: N⁰ = n = γn₀, density in the observer's frame (index 0) correct.
- Flashcards: all five correct.
- Calcs file: every number on the page has an entry and the entries match the page (n₀ = 3, v = 0.6, the three edge vectors, 10, 6, 8 faces, radius 5). `pytest tests/calc -k volumes-conservation-laws`: 16 passed. The `maxwell-gauss` entry is a weak check (central differences of linear fields, true for any signs); the `maxwell-ampere-x` entry is the one that actually tests the matrix signs. Info only.

## Coverage and order
- The page follows the lecture order: recap (pp. 1–3), dust (pp. 3–5), boosted density and flux, N (pp. 5–7), fluxes via one-forms and level surfaces ψ = const (pp. 7–9), conservation law differential and integral (pp. 10–12), 3D volumes and Levi-Civita (pp. 12–14), 4D volumes and Gauss (pp. 14–15), box derivation (pp. 16–18), dust in cosmology and the coming stress-energy tensor (p. 18), current and Maxwell (pp. 19–21), symmetric × antisymmetric (pp. 21–22), charge equation of motion (p. 22).
- Nothing substantive left out. Omitted asides only (MTW scans on the course website, Simpsons "cromulent", chalk). The page adds the explicit Gauss-law and Ampère-law components for μ = 0 and μ = x; Hughes does not spell these out, but the page does not attribute them to him. Fine.
- Hughes writes ψ(t, x, y); the page writes ψ(t, x, y, z). Fine (his z is used in the sphere example).

## Licensing
- Transcript text is CC BY-NC-SA; no "rights reserved" or "courtesy" material used. The MTW figures Hughes mentions (p. 8) are not reproduced. The graph is generated from formulas.
- Paraphrase is clearly rewritten. Short echoes only: "1 second per second" (quoted anecdote), "dashing through", "beg to be one 4-vector" (Hughes: "screaming to be put together"). Acceptable.
- Worked examples use the page's own numbers (n₀ = 3, v = 0.6; the slanted box); Hughes gives no numerical examples.

## Forward links
- leadsTo 8.962 Lecture 5: the Lecture 5 transcript introduces the stress-energy tensor for dust, then the perfect fluid (dust = pressureless perfect fluid), and ∂_αT^{αβ} = 0 as conservation of energy and momentum. Claim correct.
- leadsTo 8.286 Lecture 15: this site's Lecture 15 pages (mass-energy-and-radiation, matter-radiation-equality) treat number conservation (n ∝ 1/a³), radiation's 1/a⁴ and energy conservation with pressure. "In general relativity those rules come from conservation laws of the kind written here" is fair (strictly ∇_μT^{μν} = 0, from Lecture 5 onward).
- Cosmology callout: Hughes's "dust particle is a galaxy, or even a cluster" (p. 18) is quoted correctly. "Conservation of N in an expanding universe says the number density falls as 1/a³" is true, but needs the covariant divergence ∇_αN^α = 0 in the expanding (curved) spacetime, not the ∂_α of this page. Info: a few words such as "(in its curved-spacetime form)" would make it exact. "The rule behind the matter-dominated expansion in Guth's course" is fair (8.286 uses ρ ∝ 1/a³ for a ∝ t^{2/3}).

## Notes
- The daughter anecdote: Hughes's wife made the remark (p. 9); the page's "when told his daughter was growing up so fast" is accurate.
- "Hughes catches a missing '= 0'" (p. 17): matches.

## Findings (numbered)
1. error: the page says Hughes wrote the F^{μν} matrix from memory; the transcript (p. 20) says he had forgotten the components. Reword (see table row 1).
2. warning: unflagged lecturer slip on p. 6 ("volume is larger by a factor of gamma"); add a bracketed note.
3. warning: "the one-form of the opposite face" for Σ_α is unclear; say "the face spanned by B, C and D".
4. info: cosmology callout should say the 1/a³ law uses the curved-spacetime (covariant) form of ∂_αN^α = 0.
5. info: "a dozen terms" vs Hughes's "13 terms"; optional.
6. info: the permutation-slip note could drop the "two pairs" remark, which is loose rather than wrong.
7. info: calcs entry `maxwell-gauss` is a weak test; `maxwell-ampere-x` carries the sign check.

All numbers, quiz answers and flashcards verified correct; all formula citations point to the right transcript pages; physics, index placement, ε conventions, face orientations and Maxwell's equations (Gaussian, c = 1, −+++) are correct. Verdict: needs-changes (one error, finding 1).

## Resolution (2026-11-19, by the page author)

1. Fixed: the page no longer says Hughes wrote the matrix from memory; it says he no longer remembers the entries, points to books such as Griffiths, and that the matrix uses the page's own convention.
2. Added a bracketed note on the "volume is larger by γ" slip (he means the density).
3. Σ_α is now "the one-form of the face spanned by B, C and D".
4. The callout now says the 1/a³ law follows from conservation of N in the curved-spacetime form the course develops later.
5. Changed to "13 terms".
6. The permutation-slip note now only says that 231 was listed among the odd permutations.
7. No change: maxwell-ampere-x tests the matrix signs; maxwell-gauss stays as a check of the μ = 0 reading.
