---
page: content/year-3/8.044/one-random-variable.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l1/ (read: Lecture 1 slides PDF, L1B1–L1B14 incl. 5a/5b, via pdftotext)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_probabilitych1/ (read: Greytak, Lecture Notes on Probability, Chapter 1, printed pp. 1–18, via pdftotext)
  - content/year-5/8.902/press-schechter.mdx (read, for the cosmology callout and leadsTo)
verdict: pass-with-notes
---

# Review: Probability: one random variable

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Intro ("slides 1–14") and overall coverage | Slides L1B4–L1B9, L1B12, L1B14 are worked physical examples: physical adsorption (p(θ) = 2 sin θ cos θ for the leaving angle, Maxwell speed density p(v), exponential residence time; cumulatives on L1B5b), the cos θ/π per unit solid angle law (L1B6), an atom escaping a cavity after the n-th wall encounter, p(n) = (A_H/A_T)(1 − A_H/A_T)^n, "called a geometric or a Bose-Einstein density" (L1B7–8), a mixed, time-dependent variable (chemical vs physical adsorption, p(x) = e^{−t/τ}δ(x) + (1 − e^{−t/τ})f(x), L1B9), the mean free path average ⟨L⟩ = 2d (L1B12), and plots of Poisson densities for ⟨n⟩ = 0.5, 2.3, 10, 30 (L1B14) | None of these appear; the only slide example used is the exponential waiting time (which is also the notes' example). The intro claims the page covers "slides 1–14" | Either say plainly that the slides' adsorption, cavity and mean-free-path examples are not treated, or (preferred) add a short paragraph in own words and own numbers on the geometric density (a new named discrete density, used again for Bose–Einstein statistics) and one averaging example over p(θ) = 2 sin θ cos θ (e.g. a mean path through a slab). See "Coverage and order" |
| 2 | warning | Plot (exponential density, τ slider 0.5–3) | n/a | `range={[0, 1.15]}` is fixed (Plot.tsx uses the author's range), but p(0) = 1/τ = 2 at τ = 0.5 and exceeds 1.15 for every τ < 0.87, so the start of the density is cut off while the caption says "the density starts at 1/τ" | Raise the y-range to about [0, 2.1], or set the slider minimum to 0.9 |
| 3 | info | Poisson section, "(derived in a later lecture)" | Notes p. 15: "it will be derived in the next section" (of the probability notes) | "derived in a later lecture" | Uncertain which 8.044 lecture presents the derivation; acceptable as is, or write "later in these notes" |
| 4 | info | Properties of a density | Slide L1B3 writes PROB(a ≤ x < b); notes p. 3 write probability(a < x ≤ b) | Follows the notes (a < x ≤ b), cited to notes p. 3 | None needed; equivalent for a continuous density |
| 5 | info | Gaussian formula | Slide L1B11 uses mean x₀; notes p. 13 use a | Uses a, cited to notes p. 13 | None |
| 6 | info | Random variables section | Notes pp. 1–2 also give the pulsar pulse, pendulum, quartz-crystal impurity and U-237 ensemble examples, and note that ignorance and QM can act together | Not mentioned | Optional; the ideas are covered |
| 7 | info | Poisson section | Notes p. 16 write the Poisson as a continuous density p(y) = Σ p(n) δ(y − n) (figure for rL = 3.5) and use it in the normalization and mean integrals | Not mentioned, although the page has just introduced delta functions for this purpose | Optional one-sentence link back to the delta-function section |
| 8 | info | Source description | The notes' title page is dated "Spring Term 2004" (posted with the Spring 2013 course) | Not mentioned | Optional |

## Formula citations (each `<Formula>` checked)
- Probability density, notes p. 3: matches (ζ ≤ x < ζ + dζ, M → ∞, dζ → 0). Correct.
- Properties of a density, notes p. 3: matches. Correct.
- Cumulative distribution, notes pp. 3–4: definition on p. 3, p = dP/dζ on p. 4. Correct.
- Sifting property with weight b, notes p. 7: matches. Unit-step integral on p. 8: correct.
- Ensemble average, notes p. 12 (also slide L1B10): correct.
- Variance, notes p. 13 (also L1B10): correct.
- Gaussian density, notes p. 13: correct; mean a and variance σ² derived on p. 14; error-function remark on p. 15: correct.
- Poisson density, notes p. 15 (also L1B13): correct.
- Poisson mean and variance, notes p. 18: ⟨n⟩ = rL, ⟨n²⟩ = ⟨n⟩ + ⟨n⟩², Var = ⟨n⟩ and p(n) in terms of ⟨n⟩ all on p. 18 (sums on pp. 16–17). Correct.
- In-text slide citations verified: slide 2 (ignorance and/or QM; continuous, discrete or mixed), slide 3, slide 10, slide 11 (exponential mean τ, variance τ², "determined by same parameter" vs the Gaussian's "controlled separately"), slide 13.
- Prose page references (decay pp. 4–6, delta pp. 6–7, stars pp. 8–9, forest pp. 9–10, xenon pp. 10–12, Poisson examples p. 16, derivation pp. 16–18) verified against printed page numbers.

## Arithmetic and answer checks
- Plot caption: 1 − 1/e = 0.632 ≈ 0.63. Correct. (See finding 2 on clipping.)
- Worked example (a): τ = 1/0.5 = 2 s; P(1 s) = 1 − e^{−0.5} = 0.3935 ≈ 0.393; mean 2 s, standard deviation 2 s. Correct.
- (b): e^{−2.5} = 0.08208 ≈ 0.082; p(2) = 3.125 × 0.08208 = 0.2565 ≈ 0.257; 1 − p(0) = 0.918; √2.5 = 1.581 ≈ 1.6. Correct.
- (c): 1 − erfc(1/√2) = erf(0.7071) = 0.6827 ≈ 0.683. Correct.
- Stars: P(x) steps 1/3, 1/2, 1/6 (P = 1/3, 5/6, 1). Correct.
- Quiz 1 (answer 0, "p(x) ≤ 1"): correct; width 0.1 → height 10. Correct.
- Quiz 2: 13 − 9 = 4, standard deviation 2. Correct.
- Quiz 3: Poisson variance = mean = 4. Correct.
- Quiz 4: ½δ(x − 2), step of ½ in P. Correct.
- Flashcards: all three correct.
- For reference, slide L1B12 (not on page): ∫₀^{π/2}(d/cos θ)·2 sin θ cos θ dθ = 2d. Slide is correct.

## Coverage and order
- Order: the page follows the notes' order exactly (random variables → ensemble → density → cumulative → radioactive decay → δ function → stars → forest → xenon → averages → Gaussian → Poisson), which is also the order of the general material on the slides (L1B2–3, L1B10–11, L1B13).
- Notes coverage: complete in substance (minor omissions in items 6–8).
- Slide coverage: the slides' physical examples (L1B4–L1B9, L1B12, L1B14) are omitted (finding 1). Acceptable only in part. The Maxwell speed density and the cos θ law preview kinetic theory taught later in 8.044, so leaving them out is defensible. But the geometric ("Bose–Einstein") density of L1B7–8 is a new named density introduced in this lecture that recurs in quantum statistics, and the mixed time-dependent variable (L1B9) and the mean-free-path average (L1B12) are the slides' main illustrations of mixed densities and of averaging. Under the project rule that foundation pages cover their MIT lecture fully, add at least the geometric density and one averaging example over p(θ), and in any case reword "slides 1–14" so it does not suggest full slide coverage.
- Added material: the worked example and the cosmology callout.
- Placement: the cosmology callout sits before the worked example inside the Averages section; harmless.

## Licensing
- Searching both extracted PDFs for "rights reserved", "courtesy" and "©" found nothing; both carry only the standard OCW footer pointing to the OCW terms (CC BY-NC-SA).
- No figures reproduced; the only graphic is a generated Plot.
- No verbatim copying found; the prose is rewritten throughout.
- Worked example: original numbers and questions. Part (a) reuses the notes' detector-and-shutter setting but with its own rate and questions; acceptable.
- No OpenStax/LibreTexts material.

## Notes
- Cosmology callout and leadsTo: accurate. Press–Schechter treats the smoothed linear density contrast as a zero-mean Gaussian variable and uses its tail (erfc) above δ_c to count halos, as in content/year-5/8.902/press-schechter.mdx (8.902 Lecture 16). The link `/courses/8-902/press-schechter` uses the correct course slug.
- leadsTo 8.044 Lecture 2 matches the syllabus; "functions of a random variable, two lectures on" matches Lecture 3 in `_course.json`.
- calcs/8.044/one-random-variable.yaml covers the page's numbers; it was not run by this review.

## Resolution (2026-11-17, by the page author)

1. Added a section "The slides' examples": the adsorption angle density 2 sin θ cos θ and the cos θ/π law (slides 4–6), the geometric (Bose–Einstein) density for an atom escaping a cavity (slides 7–8), the time-dependent mixed adsorption variable (slide 9), and the mean path ⟨L⟩ = 2d (slide 12), with calcs entries. The intro now says the overview and the Poisson plots are only described.
2. The plot's y-range is now [0, 2.1], so p(0) = 1/τ shows for all τ on the slider.
3. Now "derived in the next lecture".
4.–7. No change.

Status set to `reviewed`.
