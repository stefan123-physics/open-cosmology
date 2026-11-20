---
page: content/year-3/8.06/wkb-approximation-connection-formula.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l7-1/ (read: resource page as saved HTML; its transcript link matches reading1)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/c10ab35e849b4f606c8aa929709e70d3_7Y5me3mwXpA.pdf (read: L7.1 transcript, 5 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/9e53fed2de66ec266ccc447bd7061219_loVzNly0Gyw.pdf (read: L7.2 transcript, 5 pages; p. 5 has no text)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/d21b8fda9d9a7af47c99b51344db64bc_eRFQL3o4DO4.pdf (read: L7.3 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/79b702abecf1a65f621e0a04b2340fb4_83lPKkTfGlY.pdf (read: L7.4 transcript, 5 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-3-semiclassical-approximation/ (read: MIT8_06S18ch3.pdf, PDF pp. 3-12 = printed pp. 53-62 as text; PDF pp. 5-12 also rendered as images to read eqs. (3.2.6)-(3.3.8) exactly)
  - https://dlmf.nist.gov/9.9 (not fetched; the three Airy zeros were checked independently with scipy.special.ai_zeros)
verdict: pass-with-notes
---

# Review: The WKB approximation: solutions, validity and a first connection formula

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example, step (b) | (not in MIT; physics check) With ∫₀ᵃ k dx = (n + ¾)π, the ground state has a total phase of 3π/4 between wall and turning point, i.e. 3/8 of a wavelength | "Even the ground state, whose single wavelength hardly fits the 'slowly varying' picture" | The ground state holds less than half a wavelength, not one. E.g. "whose wavefunction holds less than half a wavelength between the floor and the turning point". |
| 2 | warning | `calcs/8.06/wkb-approximation-connection-formula.yaml`, entry `neutron-mass` (and `neutron-scale-joule`, `neutron-scale-peV`) | Notes ch. 3 contain no neutron mass, no g, and no neutron example; eq. (3.3.7) is the general quantization integral | `neutron-mass` is a `kind: fact` with `source: {cite: reading5, at: 'standard value'}`; the two neutron-scale entries cite `reading5, eq. (3.3.7)` | The MIT notes are not a source for the neutron mass. Add a reference (e.g. CODATA 2018, m_n = 1.67492750056e-27 kg) to `references` and cite it, or drop the `source` cite and leave `origin: page-own`. The neutron-scale entries are the page's own computation; citing (3.3.7) is at most "method", fine to keep but not a source of the value. |
| 3 | warning | "When is it valid?", sentence after eq. (3.2.32) | Notes after (3.2.32): "The change in the potential over a distance equal to the de Broglie wavelength must be much smaller than the kinetic energy. This is the precise meaning of a slowly changing potential in the WKB approximation." | "the change of V over a de Broglie wavelength must be much smaller than the kinetic energy. This is the precise meaning of 'slowly varying'." | Two consecutive sentences follow the notes almost word for word. The physics statement is standard, but rephrase the second sentence (e.g. "That is what 'slowly varying' means, made exact."). Similarly, "larger where the classical particle moves slowly and lingers, an old intuition now justified" tracks the notes after (3.2.16) closely; acceptable, but could be loosened. |
| 4 | info | "Trouble at turning points", formula "Failure near a turning point" | Notes (3.2.35)-(3.2.36) use λ = 2πħ/p and give \|dλ/dx\| = πħ/(√(2mg)(a − x)^{3/2}). The transcript (L7.3 p. 3) uses λ = ħ/p and gives exactly the page's form, (ħ/√(2mg))·½·(a − x)^{-3/2} | Page's formula is the transcript's, cited to notes (3.2.35)-(3.2.36), with the bracket "(here with λ = ħ/p; the notes keep the 2π)" | Correct and disclosed. Citing `cite="reading3" at="p. 3"` (the board, where it appears exactly) would be cleaner; optionally keep the notes as a second mention in the bracket. Same for the calcs entry `turning-point-derivative`. |
| 5 | info | "When is it valid?", formula (3.2.28)-(3.2.29) and the bracket "(dropping factors of 2π…)" | Notes (3.2.27) → (3.2.28) silently pass from \|d(ħ/p)/dx\| ≪ 1 to \|dλ/dx\| ≪ 1 while later defining λ = h/p (3.2.31); the transcript (L7.3 p. 2) says "two pis are gone" | Same, with an explicit remark | Correct; the remark is helpful. No change. |
| 6 | info | "The WKB solutions", "in a forbidden region, with p = iħκ(x)" | Notes after (3.2.20): "p² = −ħ²κ²(x) so we can take p(x) = iκ(x)" (ħ missing, a slip in the notes); transcript L7.2 p. 3 says p = iħκ | p = iħκ(x) | Page is right. No change needed; optionally note the notes' slip, as the page does for other slips. |
| 7 | info | "A connection formula and a quantization rule", lead-in "(L7.4 transcript pp. 1–2)" | In the lecture (L7.4 pp. 1-2) Zwiebach writes one combined statement with two coefficients (A cos(…−π/4) − B sin(…−π/4) on the left, decaying plus growing exponentials on the right) and says the subtleties come next time; the two arrowed relations with the factor 2 are from notes (3.3.1)-(3.3.2) | The two notes relations, rewritten so both arrows point right, with "beyond a"/"before a" labels | Verified against the rendered notes: factor 2 on the cosine side of (3.3.1), minus sign on the sine side of (3.3.2), first arrow ⟸ (exp to cos), second ⟹ (sin to growing exp). The page's rewriting is equivalent and its description of the arrows matches the notes' text below (3.3.2). Optionally say in one clause that the lecture states the combined form. |
| 8 | info | "A connection formula…", condition δ = π/2 + nπ | Notes (3.3.5) allow n ∈ ℤ, then (3.3.6) restricts to n ≥ 0 "because the left-hand side is manifestly positive" | Goes straight from δ = π/2 + nπ to n = 0, 1, 2, … | Add a few words: negative n would make ∫k dx negative. |
| 9 | info | "The WKB equation", "As with λ in perturbation theory" | Notes: "Just as we argued for the parameter λ in perturbation theory" | Same, but on this page λ is otherwise the local wavelength | Write "as with the perturbation parameter λ" or "as with the expansion parameter in perturbation theory" to avoid a symbol clash (λ's popup meaning on this page is the wavelength). |
| 10 | info | "What the basic solution says" (L7.2 transcript pp. 4–5) | L7.2 p. 5 is blank (one character); both ρ and J are on p. 4 | pp. 4–5 | Change to p. 4. |
| 11 | info | Worked example (c), last sentence | Human hair is roughly 20-180 μm thick | 13.7 μm is "on the scale of a hair's width" | Loose but order-of-magnitude right; "a fraction of a hair's width" is more accurate. Optionally mention that these neutron levels have been observed (Nesvizhevsky et al., 2002), marked as outside MIT. |
| 12 | info | Coverage | Notes §3.2 give a second reason why iħS″ is small (ħ → 0 makes the local wavelength vanish, so the potential looks constant); L7.4 p. 1 has a student question on why turning points are not a perturbation-theory problem | Omitted | Both are minor; fine to leave out. |

## Arithmetic and answer checks
- (3.2.5): from ψ = e^{iS/ħ}, −ħ²ψ″ = [(S′)² − iħS″]ψ; page correct.
- (3.2.8)/(3.2.9): order ħ⁰ (S₀′)² = p², order ħ¹ 2S₀′S₁′ − iS₀″ = 0; page correct. Units S₀ ~ ħ, S₁ none, S₂ ~ 1/ħ: matches notes after (3.2.6).
- S₁′ = (i/2)S₀″/S₀′ = (i/2)p′/p, so iS₁ = −½ ln p + C and e^{iS₁} ∝ p^{−1/2}: correct, matches (3.2.11)-(3.2.12) (notes write C′).
- Basic solution (3.2.15), general solutions (3.2.20)-(3.2.21): correct; growing/decaying labels correct.
- ρ = |A|²/p = |A|²/(mv) (3.2.16); J = (1/m)ρS′ = |A|²/m (3.2.19): correct.
- Validity: \|ħS₀″\| ≪ \|S₀′\|² ⇔ ħ\|p′\|/p² ≪ 1 ⇔ \|d(ħ/p)/dx\| ≪ 1 (L7.3 p. 1); λ\|V′\| = (ħ/p)\|pp′\|/m = ħ\|p′\|/m ≪ p²/m, written as ≪ p²/2m after dropping the 2 (L7.3 p. 2, notes (3.2.30)-(3.2.32)). Correct.
- Turning point: d/dx[ħ/√(2mg(a − x))] = (ħ/√(2mg))·½(a − x)^{−3/2}. Correct (calcs `turning-point-derivative` passes).
- Quantization: cos(δ − θ) = cos δ cos θ + sin δ sin θ with θ = ∫₀ˣk; cos δ = 0 ⇒ ∫₀ᵃ k = 3π/4 + nπ = (n + ¾)π. Correct, matches (3.3.4)-(3.3.6). Node count: sin θ with θ from 0 to (n + ¾)π has n interior zeros. Correct.
- Worked example (a): ∫₀^{E/F}√(2m(E − Fx))dx = (2/3)√(2m)E^{3/2}/F; setting /ħ equal to (n + ¾)π gives E_n = (ħ²F²/2m)^{1/3}[(3π/2)(n + ¾)]^{2/3}. Correct. Exact E_n = ε z_n with ε = (ħ²F²/2m)^{1/3}: correct (ψ ∝ Ai(x/ℓ − z_n), ℓ = (ħ²/2mF)^{1/3}, ε = Fℓ).
- (b): [(3π/2)(n + ¾)]^{2/3} = 2.320251, 4.081810, 5.517164 → 2.3203, 4.0818, 5.5172. Airy zeros (scipy) 2.338107, 4.087949, 5.520560 → 2.3381, 4.0879, 5.5206. Errors 0.764%, 0.150%, 0.0615% → 0.76%, 0.15%, 0.06%. All correct.
- (c): with m = 1.675e-27 kg, g = 9.80665 m/s², ħ = 1.054571817e-34 J s: ε = 9.6396e-32 J = 0.60166 peV; E₀ = 1.4067 peV (WKB 1.3960); height 13.721 μm (WKB 13.616). Page's 9.64e-32 J, 0.602 peV, 1.41 (1.40) peV, 13.7 (13.6) μm all correct. With the CODATA mass 1.67492750056e-27 kg: 1.4067 peV, 13.72 μm, unchanged at the quoted precision.
- Quiz 1 (S₁ imaginary, amplitude 1/√p): answer 0 correct, explanation correct.
- Quiz 2 (\|dλ/dx\| ≪ 1): answer 0 correct, explanation correct.
- Quiz 3 (p → 0 at turning point): answer 0 correct; explanation's (a − x)^{−3/2} correct.
- Quiz 4 ((n + ¾)π): answer 0 correct, explanation correct. Distractors (nπ, (n + ½)π, (n + ¼)π) are all wrong for this set-up.
- Flashcards: all four correct.
- Calcs file: ran `pytest tests/calc -k wkb-approximation-connection`: 18 passed. Every expected value agrees with my recomputation above. Sources: see finding 2 (neutron mass and scale cite the MIT notes, which do not contain them). `airy-zeros` records only the first zero as a fact; the second and third (4.087949444, 5.520559828) are hard-coded in `error-1`/`error-2` without a fact entry (info: add them to the fact's `where`, or as two more facts). The `dlmf` reference location could name Table 9.9.1 (info; DLMF not fetched by me).

## Citation checks
- Equation numbers verified against the rendered notes: (3.2.1), (3.2.5), (3.2.6), (3.2.8)-(3.2.9) [(3.2.9) is the pair of equations; (3.2.8) the combined expansion], (3.2.10)-(3.2.12), (3.2.15), (3.2.16), (3.2.18)-(3.2.19), (3.2.20)-(3.2.21), (3.2.28)-(3.2.29), (3.2.32), (3.2.35)-(3.2.36) [content differs by the 2π, disclosed, finding 4], (3.3.1), (3.3.2), (3.3.3) [normalization adjusted, as in the notes], (3.3.4)-(3.3.6). All correct.
- Transcript pages, checked with pdftotext -f N -l N: L7.1 p. 2 (pure exponential), pp. 2-3 (equation for S, "gone backwards", nonlinear), pp. 3-4 (claim iħS″ small; constant-potential argument), p. 5 (order by order; the expansion itself starts at the foot of p. 4). L7.2 p. 1 (S₀, S₁), p. 2 (basic solution, phase then amplitude, "nobody goes higher"), pp. 2-3 (general solutions), pp. 4-5 (ρ and J are on p. 4; p. 5 blank, finding 10). L7.3 pp. 1-2 (validity, "two pis are gone", λ\|V′\| ≪ p²/2m), pp. 3-4 (turning point, Airy functions solve it). L7.4 p. 1 (complex-plane methods; connection formula), pp. 1-2, pp. 2-5 (example), p. 4 ("Bohr-Sommerfeld" condition, transcribed as "quintessential"), p. 5 (n nodes, energies by computer). All correct apart from finding 10.

## Coverage and order
- Order follows L7.1 → L7.2 → L7.3 → L7.4 and notes §3.2, §3.2.1, §3.3.
- Omitted: the notes' alternative argument (ħ → 0) for the smallness of iħS″, notes (3.2.23)-(3.2.27) intermediate forms (the page uses the lecture's route via \|ħS₀″\| instead), notes (3.3.7) written out explicitly (the page says it in words), the student's question in L7.4 p. 1. All acceptable (finding 12).
- Added: the worked example (a linear potential with a hard floor, compared with Airy zeros, and the neutron in gravity). It is not in the MIT lecture or chapter 3 notes; it is a standard textbook exercise, written in the page's own words and numbers. Fine.

## Licensing
- `grep -il "rights reserved\|courtesy"` on the four transcripts and on chapter 3 of the notes: no notices. The notes' hand-drawn Figures 3.1-3.3 are not reused (the page has no figures).
- No OpenStax or LibreTexts material. No verbatim paragraphs; one pair of sentences is close to the notes (finding 3).

## Forward links
- `leadsTo` 8.06 Lecture 8 ("connection formulae derived by solving exactly near a turning point, where a linear potential gives Airy functions"): L8 segment titles are "Airy functions as integrals in the complex plane", "Asymptotic expansions of Airy functions", "Deriving the connection formulae", "… (continued) logical arrows"; notes §3.4 begins with V − E ≈ g(x − a). Correct. The in-text "Lecture 8 does that" and "the subtleties … are the subject of the next lecture" match L7.3 p. 4 and L7.4 p. 2.
- No `Callout kind="cosmology"`; none is needed.

## Notes
- No errors found. The connection formulae (factor 2, signs, arrow directions), the quantization rule and every number were checked against the rendered notes and independent computation.
- "Hardly anyone goes beyond this order" paraphrases Zwiebach (L7.2 p. 1, "nobody goes higher in the WKB approximation"); could be attributed ("as Zwiebach remarks").
- DLMF §9.9 was not fetched; the zeros quoted match scipy's values to all digits shown.

## Resolution (2026-11-18, by the page author)

Warnings:
1. Worked example (b) now says the ground state holds only 3π/4 of phase (three eighths of a wavelength), not "a single wavelength".
2. The neutron mass is now sourced to NIST CODATA (new reference `codata`). Calcs `neutron-mass` and the two ε entries cite it; the method entries still cite eq. (3.3.6)/(3.3.7) as the formula used.
3. The two sentences after (3.2.32) and the "lingers" sentence after (3.2.16) are rewritten in the page's own words.

Info:
- 4: the turning-point derivative now cites the L7.3 transcript p. 3 (the form with ħ/p); the calcs entry follows.
- 9: "As with λ in perturbation theory" now reads "As with the small parameter of perturbation theory".
- 10: the ρ and J paragraph cites L7.2 p. 4.
- 11: "a fraction of a hair's width".
- 8: a bracket now says why n cannot be negative.
- The DLMF location now names Table 9.9.1.
- 6, 7 and 12 are left as they are (the page writes p = iħκ correctly, uses the notes' two arrowed formulae, and leaves out the minor items).
